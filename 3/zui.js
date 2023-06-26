var Bi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var k = (e, t, n) => (Bi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Bi(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var me = (e, t, n) => (Bi(e, t, "access private method"), n);
const Ut = document, Os = window, Ia = Ut.documentElement, De = Ut.createElement.bind(Ut), Oa = De("div"), zi = De("table"), wh = De("tbody"), Xo = De("tr"), { isArray: vi, prototype: Ha } = Array, { concat: _h, filter: zr, indexOf: Ba, map: za, push: vh, slice: Fa, some: Fr, splice: bh } = Ha, xh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, $h = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, kh = /<.+>/, Ch = /^\w+$/;
function Ur(e, t) {
  const n = Sh(t);
  return !e || !n && !Ne(t) && !G(t) ? [] : !n && $h.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Ch.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class bi {
  constructor(t, n) {
    if (!t)
      return;
    if (er(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Ut;
      if (s = xh.test(t) && Ne(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : kh.test(t) ? qa(t) : er(i) ? i.find(t) : Q(i) ? m(i).find(t) : Ur(t, i), !s)
        return;
    } else if (Ie(t))
      return this.ready(t);
    (s.nodeType || s === Os) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new bi(t, n);
  }
}
const x = bi.prototype, m = x.init;
m.fn = m.prototype = x;
x.length = 0;
x.splice = bh;
typeof Symbol == "function" && (x[Symbol.iterator] = Ha[Symbol.iterator]);
function er(e) {
  return e instanceof bi;
}
function un(e) {
  return !!e && e === e.window;
}
function Ne(e) {
  return !!e && e.nodeType === 9;
}
function Sh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Eh(e) {
  return !!e && e.nodeType === 3;
}
function Mh(e) {
  return typeof e == "boolean";
}
function Ie(e) {
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
function Ua(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Vr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = un;
m.isFunction = Ie;
m.isArray = vi;
m.isNumeric = Ua;
m.isPlainObject = Vr;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Vr(e)) {
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
function Hs(...e) {
  const t = Mh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Hs(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (vi(r[o]) || Vr(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Hs(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = Hs;
x.extend = function(e) {
  return Hs(x, e);
};
const Th = /\S+/g;
function xi(e) {
  return Q(e) ? e.match(Th) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = xi(e), s = !st(t);
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
  const t = xi(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Rh(e, t) {
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
x.attr = Rh;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Fr.call(this, (t) => G(t) && t.classList.contains(e));
};
x.get = function(e) {
  return st(e) ? Fa.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function Nh(e) {
  return st(e) ? this.get().map((t) => G(t) || Eh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
x.text = Nh;
function Vt(e, t, n) {
  if (!G(e))
    return;
  const s = Os.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function xt(e, t) {
  return parseInt(Vt(e, t), 10) || 0;
}
function Jo(e, t) {
  return xt(e, `border${t ? "Left" : "Top"}Width`) + xt(e, `padding${t ? "Left" : "Top"}`) + xt(e, `padding${t ? "Right" : "Bottom"}`) + xt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Fi = {};
function Ah(e) {
  if (Fi[e])
    return Fi[e];
  const t = De(e);
  Ut.body.insertBefore(t, null);
  const n = Vt(t, "display");
  return Ut.body.removeChild(t), Fi[e] = n !== "none" ? n : "block";
}
function Zo(e) {
  return Vt(e, "display") === "none";
}
function Va(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function $i(e) {
  return Q(e) ? (t, n) => Va(n, e) : Ie(e) ? e : er(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = $i(e);
  return m(zr.call(this, (n, s) => t.call(n, s, n)));
};
function de(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return de(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Lh = /^\s*<(\w+)[^>]*>/, Ph = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Qo = {
  "*": Oa,
  tr: wh,
  td: Xo,
  th: Xo,
  thead: zi,
  tbody: zi,
  tfoot: zi
};
function qa(e) {
  if (!Q(e))
    return [];
  if (Ph.test(e))
    return [De(RegExp.$1)];
  const t = Lh.test(e) && RegExp.$1, n = Qo[t] || Qo["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = qa;
x.has = function(e) {
  const t = Q(e) ? (n, s) => Ur(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = $i(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Kt(e, t, n, s) {
  const i = [], r = Ie(t), o = s && $i(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && vh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ga(e) {
  return e.multiple && e.options ? Kt(zr.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Wh(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || tl.test(n.type)) {
      const i = vi(e) ? za.call(e, String) : Un(e) ? [] : [String(e)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = st(e) || Un(e) ? "" : e;
  }) : this[0] && Ga(this[0]);
}
x.val = Wh;
x.is = function(e) {
  const t = $i(e);
  return Fr.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function St(e) {
  return e.length > 1 ? zr.call(e, (t, n, s) => Ba.call(s, t) === n) : e;
}
m.unique = St;
x.add = function(e, t) {
  return m(St(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return de(m(St(Kt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return de(m(St(Kt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return Ba.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return de(m(St(Kt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(St(Kt(this, (t) => Ur(e, t))));
};
const Dh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ih = /^$|^module$|\/(java|ecma)script/i, Oh = ["type", "src", "nonce", "noModule"];
function Hh(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Ih.test(i.type) && Ia.contains(i)) {
      const r = De("script");
      r.text = i.textContent.replace(Dh, ""), K(Oh, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Bh(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Hh(t, e.ownerDocument);
}
function fe(e, t, n, s, i, r, o, a) {
  return K(e, (l, h) => {
    K(m(h), (c, u) => {
      K(m(t), (d, f) => {
        const p = n ? u : f, y = n ? f : u, _ = n ? c : d;
        Bh(p, _ ? y.cloneNode(!0) : y, s, i, !_);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return fe(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return fe(arguments, this, !1, !1, !0);
};
function zh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (st(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = zh;
x.appendTo = function(e) {
  return fe(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return fe(arguments, this, !1, !0);
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
  return fe(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return fe(arguments, this, !0, !0);
};
x.prepend = function() {
  return fe(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return fe(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(St(Kt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return de(m(St(Kt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return de(m(St(Kt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return de(m(St(Kt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(_h.apply([], za.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Vt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Ia;
  });
};
x.slice = function(e, t) {
  return m(Fa.call(this, e, t));
};
const Fh = /-([a-z])/g;
function qr(e) {
  return e.replace(Fh, (t, n) => n.toUpperCase());
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
    top: t.top + Os.pageYOffset,
    left: t.left + Os.pageXOffset
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
      n.top -= r.top + xt(i, "borderTopWidth"), n.left -= r.left + xt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - xt(e, "marginTop"),
    left: n.left - xt(e, "marginLeft")
  };
};
const ja = {
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
      return e = ja[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[ja[e] || e];
  });
};
const Uh = /^--/;
function Gr(e) {
  return Uh.test(e);
}
const Ui = {}, { style: Vh } = Oa, qh = ["webkit", "moz", "ms"];
function Gh(e, t = Gr(e)) {
  if (t)
    return e;
  if (!Ui[e]) {
    const n = qr(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${qh.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in Vh)
        return Ui[e] = o, !1;
    });
  }
  return Ui[e];
}
const jh = {
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
function Ya(e, t, n = Gr(e)) {
  return !n && !jh[e] && Ua(t) ? `${t}px` : t;
}
function Yh(e, t) {
  if (Q(e)) {
    const n = Gr(e);
    return e = Gh(e, n), arguments.length < 2 ? this[0] && Vt(this[0], e, n) : e ? (t = Ya(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Yh;
function Ka(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Kh = /^\s+|\s+$/;
function ta(e, t) {
  const n = e.dataset[t] || e.dataset[qr(t)];
  return Kh.test(n) ? n : Ka(JSON.parse, n);
}
function Xh(e, t, n) {
  n = Ka(JSON.stringify, n), e.dataset[qr(t)] = n;
}
function Jh(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ta(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && ta(this[0], e) : st(t) ? this : this.each((n, s) => {
      Xh(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = Jh;
function Xa(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return un(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ne(this[0]) ? Xa(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? xt(this[0], `margin${n ? "Top" : "Left"}`) + xt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return st(s) ? void 0 : this;
    if (!arguments.length)
      return un(this[0]) ? this[0].document.documentElement[`client${t}`] : Ne(this[0]) ? Xa(this[0], t) : this[0].getBoundingClientRect()[n] - Jo(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = Vt(o, "boxSizing");
      o.style[n] = Ya(n, i + (a === "border-box" ? Jo(o, !e) : 0));
    });
  };
});
const ea = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = Zo(n);
    (st(e) ? s : e) ? (n.style.display = n[ea] || "", Zo(n) && (n.style.display = Ah(n.tagName))) : s || (n[ea] = Vt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const na = "___ce", jr = ".", Yr = { focus: "focusin", blur: "focusout" }, Ja = { mouseenter: "mouseover", mouseleave: "mouseout" }, Zh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Kr(e) {
  return Ja[e] || Yr[e] || e;
}
function Xr(e) {
  const t = e.split(jr);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = Xr(e), r = Kr(s);
    if (!r)
      return this;
    const o = Zh.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Ut.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(jr), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Yr;
  return this.each((s, i) => {
    n && Ie(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Za(e) {
  return e[na] = e[na] || {};
}
function Qh(e, t, n, s, i) {
  const r = Za(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function Qa(e, t) {
  return !t || !Fr.call(t, (n) => e.indexOf(n) < 0);
}
function Bs(e, t, n, s, i) {
  const r = Za(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Qa(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Bs(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (st(e))
    this.each((s, i) => {
      !G(i) && !Ne(i) && !un(i) || Bs(i);
    });
  else if (Q(e))
    Ie(t) && (n = t, t = ""), K(xi(e), (s, i) => {
      const [r, o] = Xr(i), a = Kr(r);
      this.each((l, h) => {
        !G(h) && !Ne(h) && !un(h) || Bs(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return de(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function tu(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (st(t) || Un(t) ? t = "" : st(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Ie(s) || (s = n, n = void 0), s ? (K(xi(e), (r, o) => {
    const [a, l] = Xr(o), h = Kr(a), c = a in Ja, u = a in Yr;
    h && this.each((d, f) => {
      if (!G(f) && !Ne(f) && !un(f))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Qa(l, y.namespace.split(jr)) || !t && (u && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let _ = f;
        if (t) {
          let v = y.target;
          for (; !Va(v, t); )
            if (v === f || (v = v.parentNode, !v))
              return;
          _ = v;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return _;
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
        const w = s.call(_, y, y.___td);
        i && Bs(f, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, Qh(f, h, l, t, p);
    });
  }), this) : this;
}
x.on = tu;
function eu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = eu;
const nu = /\r?\n/g;
function su(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(nu, `\r
`))}`;
}
const iu = /file|reset|submit|button|image/i, tl = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || iu.test(i.type) || tl.test(i.type) && !i.checked)
        return;
      const r = Ga(i);
      if (!st(r)) {
        const o = vi(r) ? r : [r];
        K(o, (a, l) => {
          e += su(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function ru(e, t) {
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
function ou(e, t, n) {
  try {
    const s = ru(e, t), i = s[s.length - 1];
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
var Jr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Jr || {});
function au(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Jr[n]).toFixed(t) + n);
}
const lu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Jr[s];
};
let Zr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ne;
function cu() {
  return Zr;
}
function hu(e) {
  Zr = e.toLowerCase();
}
function el(e, t) {
  ne || (ne = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ne, e);
}
function qt(e, t, n, s, i, r) {
  Array.isArray(e) ? ne && e.unshift(ne) : e = ne ? [ne, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Zr;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ne ? `${r}.${t}` : t;
    if (a = ou(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function uu(e, t, n, s) {
  return qt(void 0, e, t, n, s);
}
qt.addLang = el;
qt.getLang = uu;
qt.getCode = cu;
qt.setCode = hu;
el({
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
function nl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? nl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const T = (...e) => nl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = T;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(e, ...t));
  });
};
const wn = /* @__PURE__ */ new WeakMap();
function sl(e, t, n) {
  const s = wn.has(e), i = s ? wn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), wn.set(e, i)) : wn.delete(e);
}
function du(e, t) {
  let n = wn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? du(this[0], t) : this.each((s, i) => sl(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => sl(n, e));
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
const zs = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
});
function il(e, t) {
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
    il(n, e);
  });
};
function Qr(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    Qr(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    Qr(n, e);
  });
};
const xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: il,
  runJS: Qr
}, Symbol.toStringTag, { value: "Module" }));
var ki, z, rl, Z, $e, sa, ol, nr, Fs = {}, al = [], fu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, to = Array.isArray;
function ae(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ll(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ki.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return $s(e, o, s, i, null);
}
function $s(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++rl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function it() {
  return { current: null };
}
function rs(e) {
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
function cl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return cl(e);
  }
}
function ia(e) {
  (!e.__d && (e.__d = !0) && $e.push(e) && !Us.__r++ || sa !== z.debounceRendering) && ((sa = z.debounceRendering) || ol)(Us);
}
function Us() {
  var e, t, n, s, i, r, o, a;
  for ($e.sort(nr); e = $e.shift(); )
    e.__d && (t = $e.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ae({}, r)).__v = r.__v + 1, eo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Vn(r), r.__h), pl(s, r), r.__e != o && cl(r)), $e.length > t && $e.sort(nr));
  Us.__r = 0;
}
function hl(e, t, n, s, i, r, o, a, l, h) {
  var c, u, d, f, p, y, _, w = s && s.__k || al, v = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? $s(null, f, null, null, f) : to(f) ? $s(rs, { children: f }, null, null, null) : f.__b > 0 ? $s(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      eo(e, f, d = d || Fs, i, r, o, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (_ || (_ = []), d.ref && _.push(d.ref, null, f), _.push(u, f.__c || p, f)), p != null ? (y == null && (y = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = ul(f, l, e) : l = dl(e, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = Vn(d));
    }
  for (n.__e = y, c = v; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = fl(s).nextSibling), ml(w[c], w[c]));
  if (_)
    for (c = 0; c < _.length; c++)
      gl(_[c], _[++c], _[++c]);
}
function ul(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? ul(s, t, n) : dl(n, s, s, i, s.__e, t));
  return t;
}
function dl(e, t, n, s, i, r) {
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
function fl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = fl(n)))
        return s;
  }
  return null;
}
function pu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || Vs(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || Vs(e, r, t[r], n[r], s);
}
function ra(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || fu.test(t) ? n : n + "px";
}
function Vs(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || ra(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || ra(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? aa : oa, r) : e.removeEventListener(t, r ? aa : oa, r);
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
function oa(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function aa(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function eo(e, t, n, s, i, r, o, a, l) {
  var h, c, u, d, f, p, y, _, w, v, $, S, C, M, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (_ = t.props, w = (h = A.contextType) && s[h.__c], v = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(_, v) : (t.__c = c = new V(_, v), c.constructor = A, c.render = mu), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = v, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ae({}, c.__s)), ae(c.__s, A.getDerivedStateFromProps(_, c.__s))), d = c.props, f = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && _ !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, v) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = _, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = v, c.props = _, c.__P = e, S = z.__r, C = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(t), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++C < 25);
        c.state = c.__s, c.getChildContext != null && (s = ae(ae({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), hl(e, to(N = h != null && h.type === rs && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = gu(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function pl(e, t) {
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
function gu(e, t, n, s, i, r, o, a) {
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
    if (r = r && ki.call(e.childNodes), h = (u = n.props || Fs).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (pu(e, d, u, i, a), c)
      t.__k = [];
    else if (hl(e, to(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Vn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && ll(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== u.value) && Vs(e, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && Vs(e, "checked", p, u.checked, !1));
  }
  return e;
}
function gl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function ml(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || gl(s, null, t)), (s = e.__c) != null) {
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
      s[i] && ml(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || ll(e.__e), e.__ = e.__e = e.__d = void 0;
}
function mu(e, t, n) {
  return this.constructor(e, n);
}
function qn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], eo(t, e = (!s && n || t).__k = q(rs, null, [e]), i || Fs, Fs, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? ki.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), pl(r, e);
}
ki = al.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, rl = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ae({}, this.state), typeof e == "function" && (e = e(ae({}, n), this.props)), e && ae(n, e), e != null && this.__v && (t && this._sb.push(t), ia(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ia(this));
}, V.prototype.render = rs, $e = [], ol = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, nr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Us.__r = 0;
var yl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, yl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, la = /* @__PURE__ */ new Map();
function yu(e) {
  var t = la.get(this);
  return t || (t = /* @__PURE__ */ new Map(), la.set(this, t)), (t = yl(this, t.get(e) || (t.set(e, t = function(n) {
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
const $f = yu.bind(q);
function wu(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, ...o } = e;
  return q(t, { class: T(n), style: s, ...o, ...r }, i);
}
var _u = 0;
function g(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_u, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var Kn;
class wl extends V {
  constructor() {
    super(...arguments);
    L(this, Kn, it());
  }
  componentDidMount() {
    this.props.executeScript && m(k(this, Kn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ g(wu, { ref: k(this, Kn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Kn = new WeakMap();
function vu(e) {
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
  return i.forEach((y) => {
    const _ = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        _.push(...l.call(o, y, f, ...r));
      else {
        const w = y.call(o, f, ...r);
        w && (Array.isArray(w) ? _.push(...w) : _.push(w));
      }
    else
      _.push(y);
    _.forEach((w) => {
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ g("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: d,
    ...c
  }, f];
}
function no({
  tag: e = "div",
  ...t
}) {
  const [n, s] = vu(t);
  return q(e, n, ...s);
}
function le(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ g("i", { className: T(i), ...s });
}
function bu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function xu(e) {
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
    q(bu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function $u(e, t) {
  const n = q(xu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var _l = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, He = (e, t, n) => (_l(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Be = (e, t, n, s) => (_l(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), we, _n, ks, Cs;
const vl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ps(this, we, void 0), ps(this, _n, void 0), ps(this, ks, void 0), ps(this, Cs, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Be(this, ks, a), Be(this, _n, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Be(this, we, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Be(this, Cs, !0), this.emit("inited", this.options), this.afterInit();
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
    return He(this, Cs);
  }
  /**
   * Get the component element.
   */
  get element() {
    return He(this, _n);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return He(this, we);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return He(this, ks);
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
    Be(this, we, void 0), Be(this, _n, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(He(this, we), e), He(this, we);
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
let lt = vl;
we = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakMap();
lt.DEFAULT = {};
lt.NAME = vl.name;
lt.MULTI_INSTANCE = !1;
class J extends lt {
  constructor() {
    super(...arguments), this.ref = it();
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
function ku({
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
function bl({
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
  ...y
}) {
  const _ = [
    typeof f == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(le, { icon: l }),
    /* @__PURE__ */ g("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ g(le, { icon: u })
  ];
  return q(t, {
    className: T(n, { disabled: o, active: a }),
    title: d,
    [t === "a" ? "href" : "data-url"]: r,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...y,
    ...i
  }, ..._);
}
function Cu({
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
function Su({
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
function Eu({ type: e, ...t }) {
  return /* @__PURE__ */ g(no, { ...t });
}
function xl({
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
const sr = class extends V {
  constructor() {
    super(...arguments), this.ref = it();
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
          return /* @__PURE__ */ g(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (Z(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...d } = s;
    if (r === "html")
      return /* @__PURE__ */ g(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, d.className),
          ...l,
          style: c || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || sr.ItemComponents[r] : o;
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
    return /* @__PURE__ */ g(
      "li",
      {
        className: T(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
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
      beforeDestroy: u,
      ...d
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ g(f, { class: T(this.name, i), style: n, ...d, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Oe = sr;
Oe.ItemComponents = {
  divider: ku,
  item: bl,
  heading: Cu,
  space: Su,
  custom: Eu,
  basic: xl
};
Oe.ROOT_TAG = "menu";
Oe.NAME = "action-menu";
class $l extends J {
}
$l.NAME = "ActionMenu";
$l.Component = Oe;
function Mu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(bl, { ...s });
}
var kl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ht = (e, t, n) => (kl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Vi = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Tu = (e, t, n, s) => (kl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ss, Tt, vn;
let Ci = class extends Oe {
  constructor(t) {
    super(t), Vi(this, Ss, /* @__PURE__ */ new Set()), Vi(this, Tt, void 0), Vi(this, vn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), Tu(this, Tt, t.nestedShow === void 0), ht(this, Tt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
      nestedShow: ht(this, Tt) ? this.state.nestedShow : i,
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
    ht(this, Ss).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ht(this, vn).bind(this, r, !0),
        onMouseLeave: ht(this, vn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ht(this, vn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isNestedMenuShow(t) {
    const n = ht(this, Tt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggleNestedMenu(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(t, n);
    if (!ht(this, Tt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ht(this, Ss).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    ht(this, Tt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ht(this, Tt) && this.setState({ nestedShow: !1 });
  }
};
Ss = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
vn = /* @__PURE__ */ new WeakMap();
Ci.ItemComponents = {
  item: Mu
};
class Cl extends J {
}
Cl.NAME = "ActionMenuNested";
Cl.Component = Ci;
let Si = class extends Ci {
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
    return /* @__PURE__ */ g("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Si.NAME = "menu";
class Sl extends J {
}
Sl.NAME = "Menu";
Sl.Component = Si;
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
      text: y,
      trailingIcon: _,
      caret: w,
      square: v,
      hint: $,
      ...S
    } = this.props, C = t || (a ? "a" : "button"), M = y == null || typeof y == "string" && !y.length || u && !f, N = w && M && !p && !_ && !o && !u;
    return q(
      C,
      {
        className: T("btn", n, r, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: v === void 0 ? !N && !o && M : v
        }, i ? `size-${i}` : ""),
        title: $,
        [C === "a" ? "href" : "data-url"]: a,
        [C === "a" ? "target" : "data-target"]: l,
        type: C === "button" ? s : void 0,
        ...S
      },
      /* @__PURE__ */ g(le, { icon: u ? `icon ${d || "icon-spinner-snake"} spin` : p }),
      M ? null : /* @__PURE__ */ g("span", { className: "text", children: u ? f : y }),
      u ? null : o,
      u ? null : typeof _ == "string" ? /* @__PURE__ */ g("i", { class: `icon ${_}` }) : _,
      u ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Ru({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Gt, { type: n, ...s });
}
function os(e) {
  return e.split("-")[1];
}
function so(e) {
  return e === "y" ? "height" : "width";
}
function Ee(e) {
  return e.split("-")[0];
}
function as(e) {
  return ["top", "bottom"].includes(Ee(e)) ? "x" : "y";
}
function ca(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = as(t), l = so(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Ee(t)) {
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
  switch (os(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Nu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = ca(h, s, l), d = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: _, fn: w } = a[y], { x: v, y: $, data: S, reset: C } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = v ?? c, u = $ ?? u, f = { ...f, [_]: { ...f[_], ...S } }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (h = C.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : C.rects), { x: c, y: u } = ca(h, d, l)), y = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function ls(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function El(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function qs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ml(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ls(t, e), p = El(f), y = a[d ? u === "floating" ? "reference" : "floating" : u], _ = qs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, S = qs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - S.top + p.top) / $.y, bottom: (S.bottom - _.bottom + p.bottom) / $.y, left: (_.left - S.left + p.left) / $.x, right: (S.right - _.right + p.right) / $.x };
}
const ir = Math.min, Au = Math.max;
function rr(e, t, n) {
  return Au(e, ir(t, n));
}
const or = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = ls(e, t) || {};
  if (l == null)
    return {};
  const c = El(h), u = { x: n, y: s }, d = as(i), f = so(d), p = await o.getDimensions(l), y = d === "y", _ = y ? "top" : "left", w = y ? "bottom" : "right", v = y ? "clientHeight" : "clientWidth", $ = r.reference[f] + r.reference[d] - u[d] - r.floating[f], S = u[d] - r.reference[d], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let M = C ? C[v] : 0;
  M && await (o.isElement == null ? void 0 : o.isElement(C)) || (M = a.floating[v] || r.floating[f]);
  const N = $ / 2 - S / 2, A = M / 2 - p[f] / 2 - 1, O = ir(c[_], A), b = ir(c[w], A), R = O, D = M - p[f] - b, P = M / 2 - p[f] / 2 + N, I = rr(R, P, D), W = os(i) != null && P != I && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : D - P : 0;
  return { [d]: u[d] - W, data: { [d]: I, centerOffset: P - I + W } };
} }), Lu = ["top", "right", "bottom", "left"];
Lu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Pu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Gs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Pu[t]);
}
function Wu(e, t, n) {
  n === void 0 && (n = !1);
  const s = os(e), i = as(e), r = so(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Gs(o)), { main: o, cross: Gs(o) };
}
const Du = { start: "end", end: "start" };
function qi(e) {
  return e.replace(/start|end/g, (t) => Du[t]);
}
const Ei = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = ls(e, t), _ = Ee(s), w = Ee(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Gs(o)] : function(R) {
      const D = Gs(R);
      return [qi(R), D, qi(D)];
    }(o));
    u || f === "none" || $.push(...function(R, D, P, I) {
      const W = os(R);
      let F = function(ct, Et, ds) {
        const fn = ["left", "right"], fs = ["right", "left"], Hi = ["top", "bottom"], yh = ["bottom", "top"];
        switch (ct) {
          case "top":
          case "bottom":
            return ds ? Et ? fs : fn : Et ? fn : fs;
          case "left":
          case "right":
            return Et ? Hi : yh;
          default:
            return [];
        }
      }(Ee(R), P === "start", I);
      return W && (F = F.map((ct) => ct + "-" + W), D && (F = F.concat(F.map(qi)))), F;
    }(o, p, f, v));
    const S = [o, ...$], C = await Ml(t, y), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(C[_]), c) {
      const { main: R, cross: D } = Wu(s, r, v);
      M.push(C[R], C[D]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, D = S[R];
      if (D)
        return { data: { index: R, overflows: N }, reset: { placement: D } };
      let P = (O = N.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!P)
        switch (d) {
          case "bestFit": {
            var b;
            const I = (b = N.map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, ct) => F + ct, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : b[0];
            I && (P = I);
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
}, io = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Ee(a), d = os(a), f = as(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, y = c && f ? -1 : 1, _ = ls(o, r);
      let { mainAxis: w, crossAxis: v, alignmentAxis: $ } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return d && typeof $ == "number" && (v = d === "end" ? -1 * $ : $), f ? { x: v * y, y: w * p } : { x: w * p, y: v * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Iu(e) {
  return e === "x" ? "y" : "x";
}
const ar = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (_) => {
      let { x: w, y: v } = _;
      return { x: w, y: v };
    } }, ...l } = ls(e, t), h = { x: n, y: s }, c = await Ml(t, l), u = as(Ee(i)), d = Iu(u);
    let f = h[u], p = h[d];
    if (r) {
      const _ = u === "y" ? "bottom" : "right";
      f = rr(f + c[u === "y" ? "top" : "left"], f, f - c[_]);
    }
    if (o) {
      const _ = d === "y" ? "bottom" : "right";
      p = rr(p + c[d === "y" ? "top" : "left"], p, p - c[_]);
    }
    const y = a.fn({ ...t, [u]: f, [d]: p });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pt(e) {
  return at(e).getComputedStyle(e);
}
function Tl(e) {
  return e instanceof at(e).Node;
}
function he(e) {
  return Tl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mt(e) {
  return e instanceof at(e).HTMLElement;
}
function Ht(e) {
  return e instanceof at(e).Element;
}
function ha(e) {
  return typeof ShadowRoot < "u" && (e instanceof at(e).ShadowRoot || e instanceof ShadowRoot);
}
function Gn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Ou(e) {
  return ["table", "td", "th"].includes(he(e));
}
function lr(e) {
  const t = ro(), n = pt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function ro() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Mi(e) {
  return ["html", "body", "#document"].includes(he(e));
}
const ua = Math.min, Pn = Math.max, js = Math.round, gs = Math.floor, Ae = (e) => ({ x: e, y: e });
function Rl(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = mt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = js(n) !== r || js(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function oo(e) {
  return Ht(e) ? e : e.contextElement;
}
function Ze(e) {
  const t = oo(e);
  if (!mt(t))
    return Ae(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Rl(t);
  let o = (r ? js(n.width) : n.width) / s, a = (r ? js(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const da = Ae(0);
function Nl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !ro())
    return da;
  const r = e ? at(e) : window;
  return !n || t && n !== r ? da : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Le(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = oo(e);
  let o = Ae(1);
  t && (s ? Ht(s) && (o = Ze(s)) : o = Ze(e));
  const a = Nl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, u = i.height / o.y;
  if (r) {
    const d = at(r), f = s && Ht(s) ? at(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const y = Ze(p), _ = p.getBoundingClientRect(), w = getComputedStyle(p), v = _.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, $ = _.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, u *= y.y, l += v, h += $, p = at(p).frameElement;
    }
  }
  return qs({ width: c, height: u, x: l, y: h });
}
function Bt(e) {
  return ((Tl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ti(e) {
  return Ht(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Al(e) {
  return Le(Bt(e)).left + Ti(e).scrollLeft;
}
function dn(e) {
  if (he(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ha(e) && e.host || Bt(e);
  return ha(t) ? t.host : t;
}
function Ll(e) {
  const t = dn(e);
  return Mi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : mt(t) && Gn(t) ? t : Ll(t);
}
function Ys(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ll(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = at(s);
  return i ? t.concat(r, r.visualViewport || [], Gn(s) ? s : []) : t.concat(s, Ys(s));
}
function fa(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = at(i), a = Bt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = ro();
        (!f || f && r === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Bt(i), o = Ti(i), a = i.ownerDocument.body, l = Pn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Pn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Al(i);
      const u = -o.scrollTop;
      return pt(a).direction === "rtl" && (c += Pn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(Bt(e));
  else if (Ht(t))
    s = function(i, r) {
      const o = Le(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = mt(i) ? Ze(i) : Ae(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Nl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return qs(s);
}
function Pl(e, t) {
  const n = dn(e);
  return !(n === t || !Ht(n) || Mi(n)) && (pt(n).position === "fixed" || Pl(n, t));
}
function pa(e, t) {
  return mt(e) && pt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ga(e, t) {
  const n = at(e);
  if (!mt(e))
    return n;
  let s = pa(e, t);
  for (; s && Ou(s) && pt(s).position === "static"; )
    s = pa(s, t);
  return s && (he(s) === "html" || he(s) === "body" && pt(s).position === "static" && !lr(s)) ? n : s || function(i) {
    let r = dn(i);
    for (; mt(r) && !Mi(r); ) {
      if (lr(r))
        return r;
      r = dn(r);
    }
    return null;
  }(e) || n;
}
function Hu(e, t, n) {
  const s = mt(t), i = Bt(t), r = n === "fixed", o = Le(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ae(0);
  if (s || !s && !r)
    if ((he(t) !== "body" || Gn(i)) && (a = Ti(t)), mt(t)) {
      const h = Le(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Al(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Bu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Ys(h).filter((_) => Ht(_) && he(_) !== "body"), f = null;
    const p = pt(h).position === "fixed";
    let y = p ? dn(h) : h;
    for (; Ht(y) && !Mi(y); ) {
      const _ = pt(y), w = lr(y);
      w || _.position !== "fixed" || (f = null), (p ? !w && !f : !w && _.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Gn(y) && !w && Pl(h, y)) ? d = d.filter((v) => v !== y) : f = _, y = dn(y);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = fa(t, c, i);
    return h.top = Pn(u.top, h.top), h.right = ua(u.right, h.right), h.bottom = ua(u.bottom, h.bottom), h.left = Pn(u.left, h.left), h;
  }, fa(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = mt(n), r = Bt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Ae(1);
  const l = Ae(0);
  if ((i || !i && s !== "fixed") && ((he(n) !== "body" || Gn(r)) && (o = Ti(n)), mt(n))) {
    const h = Le(n);
    a = Ze(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ht, getDimensions: function(e) {
  return Rl(e);
}, getOffsetParent: ga, getDocumentElement: Bt, getScale: Ze, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || ga, r = this.getDimensions;
  return { reference: Hu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => pt(e).direction === "rtl" };
function ao(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = oo(e), c = i || r ? [...h ? Ys(h) : [], ...Ys(t)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }), r && y.addEventListener("resize", n);
  });
  const u = h && a ? function(y, _) {
    let w, v = null;
    const $ = Bt(y);
    function S() {
      clearTimeout(w), v && v.disconnect(), v = null;
    }
    return function C(M, N) {
      M === void 0 && (M = !1), N === void 0 && (N = 1), S();
      const { left: A, top: O, width: b, height: R } = y.getBoundingClientRect();
      if (M || _(), !b || !R)
        return;
      const D = gs(O), P = gs($.clientWidth - (A + b)), I = gs($.clientHeight - (O + R)), W = gs(A);
      let F = !0;
      v = new IntersectionObserver((ct) => {
        const Et = ct[0].intersectionRatio;
        if (Et !== N) {
          if (!F)
            return C();
          Et === 0 ? w = setTimeout(() => {
            C(!1, 1e-7);
          }, 100) : C(!1, Et);
        }
        F = !1;
      }, { rootMargin: -D + "px " + -P + "px " + -I + "px " + -W + "px", threshold: N }), v.observe(y);
    }(!0), S;
  }(h, n) : null;
  let d, f = null;
  o && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? Le(e) : null;
  return l && function y() {
    const _ = Le(e);
    !p || _.x === p.x && _.y === p.y && _.width === p.width && _.height === p.height || n(), p = _, d = requestAnimationFrame(y);
  }(), n(), () => {
    c.forEach((y) => {
      i && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, l && cancelAnimationFrame(d);
  };
}
const Ri = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Bu, ...n }, r = { ...i.platform, _c: s };
  return Nu(e, t, { ...i, platform: r });
};
let zu = class extends Si {
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
      middleware: [Ei()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && Ri(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
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
    return /* @__PURE__ */ g("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ze = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ms = (e, t, n, s) => (lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ma = (e, t, n) => (lo(e, t, "access private method"), n), Zt, bn, Es, Ms, cr, Wl, hr, Dl;
const Gi = "show", Fu = '[data-toggle="contextmenu"]';
class tt extends lt {
  constructor() {
    super(...arguments), ze(this, cr), ze(this, hr), ze(this, Zt, void 0), ze(this, bn, void 0), ze(this, Es, void 0), ze(this, Ms, void 0);
  }
  get isShown() {
    return Mt(this, Zt) && m(Mt(this, Zt)).hasClass(Gi);
  }
  get menu() {
    return Mt(this, Zt) || this.ensureMenu();
  }
  get trigger() {
    return Mt(this, Es) || this.element;
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
    return this.isShown || (ms(this, Es, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Gi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Mt(this, Ms)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Mt(this, Zt)).removeClass(Gi), this.emit("hidden"), !0);
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
    }), ms(this, Zt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(Ei())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    ms(this, Ms, ao(n, s, () => {
      Ri(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = ma(this, cr, Wl).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: u } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ma(this, hr, Dl).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (qn(q(zu, t), this.menu), !0);
  }
  getPopperElement() {
    return Mt(this, bn) || ms(this, bn, {
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
    }), Mt(this, bn);
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
bn = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakSet();
Wl = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
hr = /* @__PURE__ */ new WeakSet();
Dl = function(e) {
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
  const n = t.closest(Fu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${tt.KEY}:options`, i = n.data(s), r = tt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var co = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xn = (e, t, n) => (co(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ur = (e, t, n, s) => (co(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Uu = (e, t, n) => (co(e, t, "access private method"), n), Wn, $n, Ks, dr, Il;
const ya = '[data-toggle="dropdown"]', Ol = class extends tt {
  constructor() {
    super(...arguments), ys(this, dr), ys(this, Wn, !1), ys(this, $n, 0), this.hideLater = () => {
      xn(this, Ks).call(this), ur(this, $n, window.setTimeout(this.hide.bind(this), 100));
    }, ys(this, Ks, () => {
      clearTimeout(xn(this, $n)), ur(this, $n, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Ol.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!xn(this, Wn) && this.isHover && Uu(this, dr, Il).call(this), this.$element.addClass(this.elementShowClass)), n;
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
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(io(t)), (s = e.middleware) == null || s.push(or({ element: this.arrowEl }))), e;
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
let zt = Ol;
Wn = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
dr = /* @__PURE__ */ new WeakSet();
Il = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, xn(this, Ks)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), ur(this, Wn, !0);
};
zt.MENU_CLASS = "dropdown-menu";
zt.NAME = "Dropdown";
zt.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const ws = `${zt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(ya).not(":disabled,.disabled");
  if (!t.length) {
    zt.clear({ event: e });
    return;
  }
  const n = t.data(ws), s = zt.ensure(t, n);
  n || t.data(ws, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(ya);
  if (!t.length)
    return;
  const n = t.data(ws), s = zt.ensure(t, n);
  n || t.data(ws, s.options), s.isHover && s.show();
});
let _s = 0;
window.addEventListener("scroll", (e) => {
  _s && clearTimeout(_s), _s = window.setTimeout(() => {
    zt.clear({ event: e }), _s = 0;
  }, 50);
}, !0);
var Xn, nn;
class Vu extends V {
  constructor(n) {
    var s;
    super(n);
    L(this, Xn, void 0);
    L(this, nn, it());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return k(this, nn);
  }
  get triggerElement() {
    return k(this, nn).current;
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
    }), B(this, Xn, zt.ensure(this.triggerElement, {
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
    (n = k(this, Xn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: k(this, nn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
Xn = new WeakMap(), nn = new WeakMap();
class qu extends Vu {
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
    return s.caret = i, /* @__PURE__ */ g(Gt, { ...s });
  }
}
function Hl({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(qu, { type: n, ...s });
}
let Bl = class extends V {
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
    return /* @__PURE__ */ g(Gt, { ...i }, s);
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
    return /* @__PURE__ */ g(
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
function Gu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Bl, { type: n, ...s });
}
let yt = class extends Oe {
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
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ g(t, { ...a });
  }
};
yt.ItemComponents = {
  item: Ru,
  dropdown: Hl,
  "btn-group": Gu
};
yt.ROOT_TAG = "nav";
yt.NAME = "toolbar";
yt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function ju({
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
  a === !0 ? u = /* @__PURE__ */ g(Gt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : Z(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ g(Gt, { ...a, onClick: l }));
  const d = Z(n) ? n : n ? /* @__PURE__ */ g(yt, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: T("alert", e), style: t, ...c, children: [
    Z(h) ? h : typeof h == "string" ? /* @__PURE__ */ g("i", { className: `icon ${h}` }) : null,
    Z(i) ? i : /* @__PURE__ */ g("div", { className: T("alert-content", r), children: [
      Z(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    o
  ] });
}
function Yu(e) {
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
let Ku = class extends V {
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
      ju,
      {
        className: T("messager", l, i, o === !0 ? Yu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Xu = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ju = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, pn = (e, t, n) => (Xu(e, t, "access private method"), n), _e, qe;
class ho extends J {
  constructor() {
    super(...arguments), Ju(this, _e), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), pn(this, _e, qe).call(this, () => {
      this._show = !0, this.render(), pn(this, _e, qe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && pn(this, _e, qe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && pn(this, _e, qe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), pn(this, _e, qe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
_e = /* @__PURE__ */ new WeakSet();
qe = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
ho.NAME = "MessagerItem";
ho.Component = Ku;
var uo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Me = (e, t, n) => (uo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ts = (e, t, n, s) => (uo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), zl = (e, t, n) => (uo(e, t, "access private method"), n), Qe, It, fr, Fl, fo, Ul;
const Vl = class extends lt {
  constructor() {
    super(...arguments), vs(this, fr), vs(this, fo), vs(this, Qe, void 0), vs(this, It, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Me(this, It)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), zl(this, fr, Fl).call(this).show();
  }
  hide() {
    var e;
    (e = Me(this, It)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Vl.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let po = Vl;
Qe = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
fr = /* @__PURE__ */ new WeakSet();
Fl = function() {
  if (Me(this, It))
    Me(this, It).setOptions(this.options);
  else {
    const e = zl(this, fo, Ul).call(this), t = new ho(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Ts(this, Qe, void 0), Ts(this, It, void 0);
    }), Ts(this, It, t);
  }
  return Me(this, It);
};
fo = /* @__PURE__ */ new WeakSet();
Ul = function() {
  if (Me(this, Qe))
    return Me(this, Qe);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ts(this, Qe, n[0])), n[0];
};
po.NAME = "messager";
po.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && po.show(t);
});
let Zu = class extends V {
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
    } = this.props, u = this.state.checked ? 1 : 0, d = t || "div", f = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, y = [
      /* @__PURE__ */ g("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ g("label", { children: [
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
      ...y,
      s
    );
  }
};
class ql extends J {
}
ql.NAME = "Switch";
ql.Component = Zu;
class Gl extends J {
}
Gl.NAME = "BtnGroup";
Gl.Component = Bl;
class Qu extends lt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? lu(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
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
        if (console.log(this.limitBytes, this.currentBytes, o.size), s && this.fileMap.size >= s || this.currentBytes + o.size > this.limitBytes)
          return;
        const a = this.createFileItem(o);
        this.itemMap.set(o.name, a), this.$list.append(a);
      }
      return;
    }
    const i = t[0];
    if (i.size > this.limitBytes)
      return;
    const r = this.createFileItem(i);
    this.itemMap.clear(), this.itemMap.set(i.name, r), this.$list.empty().append(r);
  }
  deleteFileItem(t) {
    var i, r, o;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    s && ((i = this.itemMap.get(s.name)) == null || i.remove(), this.itemMap.delete(s.name), (o = (r = this.options).onDelete) == null || o.call(r, s), this.fileMap.delete(s.name), this.currentBytes -= s.size, this.dataTransfer = new DataTransfer(), this.fileMap.forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
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
    return this.addFile(t), m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createfileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  createfileInfo(t) {
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${au(t.size)}</span>`), i = m('<div class="file-info flex items-center gap-2"></div>').append(n).append(s), { renameBtn: r, renameText: o, deleteBtn: a, deleteText: l } = this.options;
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
      h.key === "Enter" ? (this.renameFileItem(t, r.val()), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(r.val())) : h.key === "Escape" && (r.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), o = m("<button />").addClass("btn rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      this.renameFileItem(t, r.val()), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(r.val());
    }), a = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      r.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), l = m('<div class="btn-group"></div').append(o).append(a);
    return i.append(r).append(l);
  }
}
Qu.DEFAULT = {
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
class td {
  constructor(t = "") {
    L(this, Dt, void 0);
    typeof t == "object" ? B(this, Dt, t) : B(this, Dt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    k(this, Dt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    k(this, Dt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    k(this, Dt).removeEventListener(t, n, s);
  }
  emit(t) {
    return k(this, Dt).dispatchEvent(t), t;
  }
}
Dt = new WeakMap();
const wa = /* @__PURE__ */ new Set([
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
class jl extends td {
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
    return typeof t == "string" && (wa.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(jl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (wa.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Yl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Jn, se, vt, sn, rn, Rs;
const Ko = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, rn);
    L(this, Jn, void 0);
    L(this, se, void 0);
    L(this, vt, void 0);
    L(this, sn, void 0);
    B(this, Jn, n), B(this, se, `ZUI_STORE:${t ?? Yl()}`), B(this, vt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return k(this, Jn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (k(this, sn) || B(this, sn, new Ko(k(this, se), "session")), k(this, sn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = k(this, vt).getItem(me(this, rn, Rs).call(this, t));
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
    k(this, vt).setItem(me(this, rn, Rs).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    k(this, vt).removeItem(me(this, rn, Rs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < k(this, vt).length; n++) {
      const s = k(this, vt).key(n);
      if (s != null && s.startsWith(k(this, se))) {
        const i = k(this, vt).getItem(s);
        typeof i == "string" && t(s.substring(k(this, se).length + 1), JSON.parse(i));
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
let Xs = Ko;
Jn = new WeakMap(), se = new WeakMap(), vt = new WeakMap(), sn = new WeakMap(), rn = new WeakSet(), Rs = function(t) {
  return `${k(this, se)}:${t}`;
};
const ed = new Xs("DEFAULT");
function nd(e, t = "local") {
  return new Xs(e, t);
}
Object.assign(ed, { create: nd });
function sd(e) {
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
function id(e) {
  const [t, n, s] = typeof e == "string" ? sd(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function _a(e, t) {
  return id(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function va(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function rd(e, t, n) {
  e = e % 360 / 360, t = va(t), n = va(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function od(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function ad(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Kl = class extends V {
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
      children: y,
      ..._
    } = this.props, w = ["avatar", t], v = { ...n, background: o, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? v.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let S;
    if (u)
      w.push("has-img"), S = /* @__PURE__ */ g("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const C = ad(l, c);
      if (w.push("has-text", `has-text-${C.length}`), o)
        !a && o && (v.color = _a(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : od(N)) * d % 360;
        if (v.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = rd(A, f, p);
          v.color = _a(O);
        }
      }
      let M;
      $ && $ < 14 * C.length && (M = { transform: `scale(${$ / (14 * C.length)})`, whiteSpace: "nowrap" }), S = /* @__PURE__ */ g("div", { "data-actualSize": $, className: "avatar-text", style: M, children: C });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: T(w),
        style: v,
        ..._,
        children: [
          S,
          y
        ]
      }
    );
  }
};
class Xl extends J {
}
Xl.NAME = "Avatar";
Xl.Component = Kl;
class go extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n } = this.props, s = m(t.target);
    if (s.closest('[data-dismiss="pick"]').length)
      return n(!1);
    s.closest("a,input").length || n(!0);
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
    return t ? /* @__PURE__ */ g("input", { type: "hidden", className: "pick-value", name: t, value: n.value }) : null;
  }
  render(t) {
    const { id: n, style: s } = t;
    return /* @__PURE__ */ g(
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
var Se, bt, ie;
class Jl extends V {
  constructor(n) {
    super(n);
    L(this, Se, void 0);
    L(this, bt, void 0);
    L(this, ie, void 0);
    this.state = { show: !1 }, B(this, Se, it()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = k(this, Se)) == null ? void 0 : n.current;
  }
  get container() {
    return k(this, ie);
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
    return T(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getContainer(n) {
    if (!k(this, ie)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), B(this, ie, i[0]);
    }
    return k(this, ie);
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
    return /* @__PURE__ */ g(
      "div",
      {
        id: `pick-pop-${s}`,
        className: this._getClass(n),
        style: h,
        ref: k(this, Se),
        onClick: this._handleClick,
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
      k(this, bt) && (k(this, bt).call(this), B(this, bt, void 0));
      return;
    }
    k(this, bt) || B(this, bt, ao(s, n, () => {
      const { placement: o, width: a } = i;
      Ri(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Ei() : null, ar(), io(1)].filter(Boolean)
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
    const n = k(this, bt);
    n && (n(), B(this, bt, void 0)), B(this, ie, void 0), B(this, Se, void 0);
  }
  render(n) {
    return $u(this._render(n), this._getContainer(n));
  }
}
Se = new WeakMap(), bt = new WeakMap(), ie = new WeakMap();
var Zl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, gn = (e, t, n) => (Zl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ba = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Fe = (e, t, n, s) => (Zl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ns, ut;
let pe = class extends V {
  constructor(t) {
    super(t), ba(this, Ns, void 0), ba(this, ut, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      gn(this, ut) && (clearTimeout(gn(this, ut)), Fe(this, ut, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await zs(200, (a) => {
        Fe(this, ut, a);
      }), Fe(this, ut, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await zs(50, (a) => {
        Fe(this, ut, a);
      }), Fe(this, ut, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, Fe(this, Ns, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return gn(this, Ns);
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
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), gn(this, ut) && clearTimeout(gn(this, ut));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ g(o, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ g(rs, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ns = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakMap();
pe.Trigger = go;
pe.Pop = Jl;
pe.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300
};
let Ql = class extends pe {
  _handleChange(t, n) {
    super._handleChange(t, n);
    const { syncBackground: s, syncBorder: i, syncColor: r, syncText: o } = this.props, a = t || "";
    s && m(s).css("backgroundColor", a), i && m(i).css("borderColor", a), r && m(r).css("color", a), o && m(o).text(a);
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ g(le, { icon: s }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring", style: { background: i } })
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
        s.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(le, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(le, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Ql.defaultProps = {
  ...pe.defaultProps,
  className: "color-picker rounded btn square size-sm ghost",
  popClass: "color-picker-pop menu-popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class tc extends J {
}
tc.NAME = "ColorPicker";
tc.Component = Ql;
var mo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ke = (e, t, n) => (mo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), mn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Dn = (e, t, n, s) => (mo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ji = (e, t, n) => (mo(e, t, "access private method"), n), Ye, As, ve, pr, kn, Ls;
const Yi = "show", xa = "in", ld = '[data-dismiss="modal"]', Cn = class extends lt {
  constructor() {
    super(...arguments), mn(this, kn), mn(this, Ye, 0), mn(this, As, void 0), mn(this, ve, void 0), mn(this, pr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(ld) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Yi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", ke(this, pr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!ke(this, ve) || ke(this, ve)[0] !== n || ke(this, ve)[1] !== s) && (Dn(this, ve, [n, s]), this.layout());
        });
        t.observe(e), Dn(this, As, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = ke(this, As)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${Cn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Yi, i).css({
      zIndex: `${Cn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), ji(this, kn, Ls).call(this, () => {
      m(t).addClass(xa), ji(this, kn, Ls).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(xa), this.emit("hide"), ji(this, kn, Ls).call(this, () => {
      m(this.modalElement).removeClass(Yi), this.emit("hidden");
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
    Dn(this, ve, [i, r]), typeof e == "function" && (e = e({ width: i, height: r }));
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
    (t = Cn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Cn.query(e)) == null || t.show();
  }
};
let Xt = Cn;
Ye = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
ve = /* @__PURE__ */ new WeakMap();
pr = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakSet();
Ls = function(e, t) {
  ke(this, Ye) && (clearTimeout(ke(this, Ye)), Dn(this, Ye, 0)), e && (this.options.animation ? Dn(this, Ye, window.setTimeout(e, t ?? this.options.transTime)) : e());
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
class ec extends V {
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
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Z(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(yt, { ...t }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Z(t) ? t : /* @__PURE__ */ g("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(yt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ g("div", { className: T("modal-dialog", t), style: n, children: /* @__PURE__ */ g("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
ec.defaultProps = { closeBtn: !0 };
var on, an, ln;
class cd extends V {
  constructor() {
    super(...arguments);
    L(this, on, void 0);
    L(this, an, void 0);
    L(this, ln, void 0);
    B(this, on, it()), this.state = {}, B(this, ln, () => {
      var i, r;
      const n = (r = (i = k(this, on).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = k(this, an);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, an, s);
    });
  }
  componentDidMount() {
    k(this, ln).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = k(this, an)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: k(this, on),
        onLoad: k(this, ln)
      }
    );
  }
}
on = new WeakMap(), an = new WeakMap(), ln = new WeakMap();
var yo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, _t = (e, t, n) => (yo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), yn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ue = (e, t, n, s) => (yo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ps = (e, t, n) => (yo(e, t, "access private method"), n), Qt, Sn, Rt, Js, wo, Ws, gr;
function hd(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function ud(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ g(wl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function dd(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(cd, { url: n })
  };
}
const fd = {
  custom: hd,
  ajax: ud,
  iframe: dd
}, Ki = "loading", En = class extends Xt {
  constructor() {
    super(...arguments), yn(this, Js), yn(this, Ws), yn(this, Qt, void 0), yn(this, Sn, void 0), yn(this, Rt, void 0);
  }
  get id() {
    return _t(this, Sn);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(Ki);
  }
  get shown() {
    var e;
    return !!((e = _t(this, Qt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = _t(this, Qt);
    if (!e) {
      const { options: t } = this;
      let n = _t(this, Sn);
      n || (n = t.id || `modal-${m.guid++}`, Ue(this, Sn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ue(this, Qt, e);
    }
    return e;
  }
  get $emitter() {
    const e = _t(this, Qt);
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
    const e = _t(this, Qt);
    e && (m(e).removeData(this.constructor.KEY).remove(), Ue(this, Qt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    _t(this, Rt) && clearTimeout(_t(this, Rt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = fd[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Ki), i && Ue(this, Rt, window.setTimeout(() => {
      Ue(this, Rt, 0), Ps(this, Ws, gr).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Ps(this, Ws, gr).call(this, this.options.failedTip) : a && typeof a == "object" && await Ps(this, Js, wo).call(this, a), _t(this, Rt) && (clearTimeout(_t(this, Rt)), Ue(this, Rt, 0)), await zs(100), n.removeClass(Ki), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = En.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e;
    let c = /* @__PURE__ */ g("div", { children: n });
    s ? c = /* @__PURE__ */ g("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ g("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ g("div", { className: "modal-body", children: c });
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
      onClickItem: ({ item: p, event: y }) => {
        const _ = En.query(y.target, l);
        d = p.key, (o == null ? void 0 : o(p, _)) !== !1 && _ && _.hide();
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
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let nc = En;
Qt = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakSet();
wo = function(e) {
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
      /* @__PURE__ */ g(ec, { ...e }),
      this.modalElement
    );
  });
};
Ws = /* @__PURE__ */ new WeakSet();
gr = function(e) {
  if (e)
    return Ps(this, Js, wo).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
nc.DEFAULT = {
  ...Xt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var _o = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, mr = (e, t, n) => (_o(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $a = (e, t, n, s) => (_o(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), yr = (e, t, n) => (_o(e, t, "access private method"), n), Te, vo, sc, wr, ic, bo, rc;
const pd = '[data-toggle="modal"]';
class oc extends lt {
  constructor() {
    super(...arguments), bs(this, vo), bs(this, wr), bs(this, bo), bs(this, Te, void 0);
  }
  get modal() {
    return mr(this, Te);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = yr(this, wr, ic).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = mr(this, Te)) == null ? void 0 : t.hide();
  }
}
Te = /* @__PURE__ */ new WeakMap();
vo = /* @__PURE__ */ new WeakSet();
sc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
wr = /* @__PURE__ */ new WeakSet();
ic = function() {
  const e = yr(this, vo, sc).call(this);
  let t = mr(this, Te);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = yr(this, bo, rc).call(this);
    if (!n)
      return;
    t = Xt.ensure(n, e);
  } else
    t = nc.ensure(this.container, e);
  return $a(this, Te, t), t.on("destroyed", () => {
    $a(this, Te, void 0);
  }), t;
};
bo = /* @__PURE__ */ new WeakSet();
rc = function() {
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
oc.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, pd);
  if (n) {
    const i = oc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let ac = class extends Oe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
ac.NAME = "nav";
class lc extends J {
}
lc.NAME = "Nav";
lc.Component = ac;
function jn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function gd({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = jn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : et(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ g(Gt, { type: n, ...a });
}
const Pt = 24 * 60 * 60 * 1e3, rt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), cs = (e, t = /* @__PURE__ */ new Date()) => (e = rt(e), t = rt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), _r = (e, t = /* @__PURE__ */ new Date()) => rt(e).getFullYear() === rt(t).getFullYear(), md = (e, t = /* @__PURE__ */ new Date()) => (e = rt(e), t = rt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Wf = (e, t = /* @__PURE__ */ new Date()) => {
  e = rt(e), t = rt(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Df = (e, t) => cs(rt(t), e), If = (e, t) => cs(rt(t).getTime() - Pt, e), Of = (e, t) => cs(rt(t).getTime() + Pt, e), Hf = (e, t) => cs(rt(t).getTime() - 2 * Pt, e), vr = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = rt(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", _r(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Bf = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = vr(e, _r(e) ? s.month : s.full);
  if (cs(e, t))
    return i;
  const r = vr(t, _r(e, t) ? md(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, zf = (e) => {
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
}, ka = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, ka(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, ka(e, "day", n, s);
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
function yd({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = jn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ g(xl, { ...o, children: [
    r,
    s
  ] });
}
function wd({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(Gt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let y = d; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const _ = jn(i, y);
      o && (l.url = typeof o == "function" ? o(_) : et(o, _)), p.push(/* @__PURE__ */ g(Gt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function _d({
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
  return o.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(Hl, { type: "dropdown", dropdown: i, ...o });
}
function vd({
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
  const d = (y) => {
    var _;
    u = Number((_ = y.target) == null ? void 0 : _.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (y) => {
    if (!(y != null && y.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const _ = jn(i, u);
    a && !a({ info: _, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(_) : et(l, _));
  }, p = jn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ g("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ g(Gt, { type: s, ...c, onClick: f })
  ] });
}
let Ni = class extends yt {
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
Ni.NAME = "pager";
Ni.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Ni.ItemComponents = {
  ...yt.ItemComponents,
  link: gd,
  info: yd,
  nav: wd,
  "size-menu": _d,
  goto: vd
};
class cc extends J {
}
cc.NAME = "Pager";
cc.Component = Ni;
class hc extends J {
}
hc.NAME = "Pick";
hc.Component = pe;
var cn, Zn, Qn, li;
class uc extends V {
  constructor(n) {
    super(n);
    L(this, cn, it());
    L(this, Zn, it());
    L(this, Qn, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    L(this, li, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = k(this, cn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = k(this, Zn), { current: i } = k(this, cn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: k(this, Zn), children: o }) : a ? l = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: k(this, li), children: /* @__PURE__ */ g("span", { className: "close" }) }) : l = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: k(this, Qn),
          onInput: k(this, Qn),
          ref: k(this, cn)
        }
      ),
      l
    ] });
  }
}
cn = new WeakMap(), Zn = new WeakMap(), Qn = new WeakMap(), li = new WeakMap();
var hn, ts, es, ns;
class bd extends go {
  constructor() {
    super(...arguments);
    L(this, hn, void 0);
    L(this, ts, void 0);
    L(this, es, void 0);
    L(this, ns, void 0);
    B(this, hn, it()), B(this, ts, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), B(this, es, (n) => {
      this.props.changeState({ search: n });
    }), B(this, ns, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ g("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: k(this, ts), "data-value": n.value, children: /* @__PURE__ */ g("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = k(this, hn).current) == null || s.focus();
  }
  _getClass() {
    return T(
      super._getClass(),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch() {
    const { state: { search: n }, searchHint: s } = this.props;
    return /* @__PURE__ */ g(
      uc,
      {
        inline: !0,
        ref: k(this, hn),
        defaultSearch: n,
        onSearch: k(this, es),
        onClear: k(this, ns),
        placeholder: s
      }
    );
  }
  _renderTrigger() {
    const { state: { selections: n = [], open: s }, search: i, placeholder: r, children: o } = this.props, a = s && i;
    return !a && !n.length ? /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
        n.map(this._renderSelection),
        a ? this._renderSearch() : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ g("span", { class: "caret" }, "caret")
    ];
  }
}
hn = new WeakMap(), ts = new WeakMap(), es = new WeakMap(), ns = new WeakMap();
var ss, ci, hi, ui, di, dc;
class xd extends go {
  constructor() {
    super(...arguments);
    L(this, di);
    L(this, ss, it());
    L(this, ci, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    L(this, hi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, ui, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = k(this, ss).current) == null || s.focus();
  }
  _getClass() {
    return T(
      super._getClass(),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch() {
    const { state: { search: n } } = this.props;
    return /* @__PURE__ */ g(
      uc,
      {
        ref: k(this, ss),
        defaultSearch: n,
        onSearch: k(this, hi),
        onClear: k(this, ui),
        placeholder: me(this, di, dc).call(this)
      }
    );
  }
  _renderTrigger() {
    const { children: n, state: { selections: s = [], open: i }, placeholder: r, search: o } = this.props, [a] = s, l = i && o;
    let h;
    l ? h = this._renderSearch() : a ? h = /* @__PURE__ */ g("span", { className: "picker-single-selection", children: a.text ?? a.value }, "main") : h = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: r }, "main");
    const c = a && !l ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: k(this, ci), children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      n,
      c,
      l ? null : /* @__PURE__ */ g("span", { className: "caret" }, "caret")
    ];
  }
}
ss = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), ui = new WeakMap(), di = new WeakSet(), dc = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const $d = (e, t) => e.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ g("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var fi, pi, fc, gi, pc, mi;
class kd extends Jl {
  constructor() {
    super(...arguments);
    L(this, pi);
    L(this, gi);
    L(this, fi, it());
    L(this, mi, ({ item: n }) => {
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
      const s = me(this, pi, fc).call(this);
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
    return /* @__PURE__ */ g(
      Si,
      {
        ref: k(this, fi),
        className: "picker-menu-list",
        items: me(this, gi, pc).call(this),
        onClickItem: k(this, mi),
        ...s
      }
    );
  }
}
fi = new WeakMap(), pi = new WeakSet(), fc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, gi = new WeakSet(), pc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, u) => {
    const {
      value: d = "",
      keys: f,
      text: p,
      className: y,
      ..._
    } = u;
    d === i && (a = !0);
    const w = `${p ?? d}`;
    return c.push({
      key: d,
      active: o.has(d),
      text: $d(l, [w]),
      className: T(y, { hover: d === i }),
      "data-value": d,
      ..._
    }), c;
  }, []);
  return !a && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, mi = new WeakMap();
var xo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Jt = (e, t, n) => (xo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ve = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ye = (e, t, n, s) => (xo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ft = (e, t, n) => (xo(e, t, "access private method"), n), Mn, Nt, be, Ke, In, $o, gc, te, xe;
let ko = class extends pe {
  constructor(t) {
    super(t), Ve(this, Ke), Ve(this, $o), Ve(this, te), Ve(this, Mn, void 0), Ve(this, Nt, void 0), Ve(this, be, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? ft(this, te, xe).call(this, n) : ft(this, te, xe).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), ft(this, te, xe).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(ft(this, Ke, In).call(this, n)), r = s.filter((o) => !i.has(o));
      ft(this, te, xe).call(this, r);
    }, this.clear = () => {
      ft(this, te, xe).call(this);
    }, this.select = (n) => {
      const s = ft(this, Ke, In).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return ft(this, te, xe).call(this, i);
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
    return ft(this, Ke, In).call(this, this.state.value);
  }
  async load() {
    let t = Jt(this, Nt);
    t && t.abort(), t = new AbortController(), ye(this, Nt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await zs(s || 500), Jt(this, Nt) !== t || (r = await n(i, { signal: t.signal }), Jt(this, Nt) !== t))
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
    return ye(this, Nt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = Jt(this, Mn) || {}, r = {};
    if (ye(this, Mn, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    Jt(this, be) && clearTimeout(Jt(this, be)), ye(this, be, window.setTimeout(() => {
      ye(this, be, 0), this.update();
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
    (t = Jt(this, Nt)) == null || t.abort(), ye(this, Nt, void 0), ye(this, Mn, void 0), clearTimeout(Jt(this, be)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? bd : xd);
  }
};
Mn = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakSet();
In = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
$o = /* @__PURE__ */ new WeakSet();
gc = function(e) {
  const t = ft(this, Ke, In).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
te = /* @__PURE__ */ new WeakSet();
xe = function(e) {
  const t = e === void 0 ? e : ft(this, $o, gc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
ko.defaultProps = {
  ...pe.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
ko.Pop = kd;
class mc extends J {
}
mc.NAME = "Picker";
mc.Component = ko;
class yc extends lt {
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
    return i && s.middleware.push(Ei()), r && s.middleware.push(r === !0 ? ar() : ar(r)), o && s.middleware.push(or({ element: this.$arrow[0] })), a && s.middleware.push(io(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = ao(t, n, () => {
      Ri(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !or || !o.arrow)
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
yc.NAME = "Popovers";
yc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class wc extends J {
}
wc.NAME = "Toolbar";
wc.Component = yt;
function hs(e) {
  return e.split("-")[1];
}
function Co(e) {
  return e === "y" ? "height" : "width";
}
function tn(e) {
  return e.split("-")[0];
}
function Ai(e) {
  return ["top", "bottom"].includes(tn(e)) ? "x" : "y";
}
function Ca(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Ai(t), l = Co(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (tn(t)) {
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
  switch (hs(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Cd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = Ca(h, s, l), d = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: _, fn: w } = a[y], { x: v, y: $, data: S, reset: C } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = v ?? c, u = $ ?? u, f = { ...f, [_]: { ...f[_], ...S } }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (h = C.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : C.rects), { x: c, y: u } = Ca(h, d, l)), y = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function _c(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Zs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Sd(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = t, p = _c(f), y = a[d ? u === "floating" ? "reference" : "floating" : u], _ = Zs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, S = Zs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - S.top + p.top) / $.y, bottom: (S.bottom - _.bottom + p.bottom) / $.y, left: (_.left - S.left + p.left) / $.x, right: (S.right - _.right + p.right) / $.x };
}
const Ed = Math.min, Md = Math.max;
function Td(e, t, n) {
  return Md(e, Ed(t, n));
}
const Rd = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = _c(s), c = { x: i, y: r }, u = Ai(o), d = Co(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", _ = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const S = _ / 2 - w / 2, C = h[p], M = $ - f[d] - h[y], N = $ / 2 - f[d] / 2 + S, A = Td(C, N, M), O = hs(o) != null && N != A && a.reference[d] / 2 - (N < C ? h[p] : h[y]) - f[d] / 2 < 0;
  return { [u]: c[u] - (O ? N < C ? C - N : M - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), Nd = ["top", "right", "bottom", "left"];
Nd.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ad = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ad[t]);
}
function Ld(e, t, n) {
  n === void 0 && (n = !1);
  const s = hs(e), i = Ai(e), r = Co(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Qs(o)), { main: o, cross: Qs(o) };
}
const Pd = { start: "end", end: "start" };
function Xi(e) {
  return e.replace(/start|end/g, (t) => Pd[t]);
}
const Wd = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = e, _ = tn(s), w = tn(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Qs(o)] : function(b) {
      const R = Qs(b);
      return [Xi(b), R, Xi(R)];
    }(o));
    u || f === "none" || $.push(...function(b, R, D, P) {
      const I = hs(b);
      let W = function(F, ct, Et) {
        const ds = ["left", "right"], fn = ["right", "left"], fs = ["top", "bottom"], Hi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Et ? ct ? fn : ds : ct ? ds : fn;
          case "left":
          case "right":
            return ct ? fs : Hi;
          default:
            return [];
        }
      }(tn(b), D === "start", P);
      return I && (W = W.map((F) => F + "-" + I), R && (W = W.concat(W.map(Xi)))), W;
    }(o, p, f, v));
    const S = [o, ...$], C = await Sd(t, y), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(C[_]), c) {
      const { main: b, cross: R } = Ld(s, r, v);
      M.push(C[b], C[R]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = S[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let D = "bottom";
      switch (d) {
        case "bestFit": {
          var O;
          const P = (O = N.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, F) => W + F, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : O[0].placement;
          P && (D = P);
          break;
        }
        case "initialPlacement":
          D = o;
      }
      if (s !== D)
        return { reset: { placement: D } };
    }
    return {};
  } };
}, Dd = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = tn(a), d = hs(a), f = Ai(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, y = c && f ? -1 : 1, _ = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: v, alignmentAxis: $ } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return d && typeof $ == "number" && (v = d === "end" ? -1 * $ : $), f ? { x: v * y, y: w * p } : { x: w * p, y: v * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kt(e) {
  return ot(e).getComputedStyle(e);
}
function ue(e) {
  return bc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let xs;
function vc() {
  if (xs)
    return xs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (xs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), xs) : navigator.userAgent;
}
function jt(e) {
  return e instanceof ot(e).HTMLElement;
}
function gt(e) {
  return e instanceof ot(e).Element;
}
function bc(e) {
  return e instanceof ot(e).Node;
}
function Sa(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Li(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Id(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function br(e) {
  const t = /firefox/i.test(vc()), n = kt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function xc() {
  return !/^((?!chrome|android).)*safari/i.test(vc());
}
function So(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const Ea = Math.min, On = Math.max, ti = Math.round;
function $c(e) {
  const t = kt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = ti(n) !== i || ti(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function kc(e) {
  return gt(e) ? e : e.contextElement;
}
const Cc = { x: 1, y: 1 };
function en(e) {
  const t = kc(e);
  if (!jt(t))
    return Cc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = $c(t);
  let o = (r ? ti(n.width) : n.width) / s, a = (r ? ti(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Pe(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = kc(e);
  let l = Cc;
  t && (s ? gt(s) && (l = en(s)) : l = en(e));
  const h = a ? ot(a) : window, c = !xc() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const y = ot(a), _ = s && gt(s) ? ot(s) : s;
    let w = y.frameElement;
    for (; w && s && _ !== y; ) {
      const v = en(w), $ = w.getBoundingClientRect(), S = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(S.paddingLeft)) * v.x, $.y += (w.clientTop + parseFloat(S.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, p *= v.y, u += $.x, d += $.y, w = ot(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function ce(e) {
  return ((bc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pi(e) {
  return gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Sc(e) {
  return Pe(ce(e)).left + Pi(e).scrollLeft;
}
function Od(e, t, n) {
  const s = jt(t), i = ce(t), r = Pe(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ue(t) !== "body" || Li(i)) && (o = Pi(t)), jt(t)) {
      const l = Pe(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Sc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Yn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Sa(e) ? e.host : null) || ce(e);
  return Sa(t) ? t.host : t;
}
function Ma(e) {
  return jt(e) && kt(e).position !== "fixed" ? e.offsetParent : null;
}
function Ta(e) {
  const t = ot(e);
  let n = Ma(e);
  for (; n && Id(n) && kt(n).position === "static"; )
    n = Ma(n);
  return n && (ue(n) === "html" || ue(n) === "body" && kt(n).position === "static" && !br(n)) ? t : n || function(s) {
    let i = Yn(s);
    for (; jt(i) && !So(i); ) {
      if (br(i))
        return i;
      i = Yn(i);
    }
    return null;
  }(e) || t;
}
function Ec(e) {
  const t = Yn(e);
  return So(t) ? e.ownerDocument.body : jt(t) && Li(t) ? t : Ec(t);
}
function Hn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ec(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ot(s);
  return i ? t.concat(r, r.visualViewport || [], Li(s) ? s : []) : t.concat(s, Hn(s));
}
function Ra(e, t, n) {
  return t === "viewport" ? Zs(function(s, i) {
    const r = ot(s), o = ce(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = xc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : gt(t) ? function(s, i) {
    const r = Pe(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = jt(s) ? en(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = o * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(t, n) : Zs(function(s) {
    var i;
    const r = ce(s), o = Pi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = On(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = On(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Sc(s);
    const u = -o.scrollTop;
    return kt(a || r).direction === "rtl" && (c += On(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(ce(e)));
}
const Hd = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Hn(h).filter((_) => gt(_) && ue(_) !== "body"), f = null;
    const p = kt(h).position === "fixed";
    let y = p ? Yn(h) : h;
    for (; gt(y) && !So(y); ) {
      const _ = kt(y), w = br(y);
      (p ? w || f : w || _.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = _ : d = d.filter((v) => v !== y), y = Yn(y);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = Ra(t, c, i);
    return h.top = On(u.top, h.top), h.right = Ea(u.right, h.right), h.bottom = Ea(u.bottom, h.bottom), h.left = On(u.left, h.left), h;
  }, Ra(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = jt(n), r = ce(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || Li(r)) && (o = Pi(n)), jt(n))) {
    const h = Pe(n);
    a = en(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: gt, getDimensions: function(e) {
  return $c(e);
}, getOffsetParent: Ta, getDocumentElement: ce, getScale: en, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Ta, r = this.getDimensions;
  return { reference: Od(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => kt(e).direction === "rtl" };
function Bd(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...gt(e) ? Hn(e) : e.contextElement ? Hn(e.contextElement) : [], ...Hn(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (o) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), gt(e) && !a && u.observe(e), gt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let d = a ? Pe(e) : null;
  return a && function f() {
    const p = Pe(e);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const zd = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Hd, ...n }, r = { ...i.platform, _c: s };
  return Cd(e, t, { ...i, platform: r });
};
var Eo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Eo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, We = (e, t, n, s) => (Eo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), $t = (e, t, n) => (Eo(e, t, "access private method"), n), Bn, zn, Tn, Xe, nt, xr, ei, Wi, Mo, To, Mc, $r, Tc, Ro, Rc, No, Nc, Ao, Ac, kr, Lc, Lo, Pc, Fn, Cr, Wc;
const Je = class extends lt {
  constructor() {
    super(...arguments), j(this, Wi), j(this, To), j(this, $r), j(this, Ro), j(this, No), j(this, Ao), j(this, kr), j(this, Lo), j(this, Cr), j(this, Bn, !1), j(this, zn, void 0), j(this, Tn, 0), j(this, Xe, void 0), j(this, nt, void 0), j(this, xr, void 0), j(this, ei, void 0), this.hideLater = () => {
      U(this, Fn).call(this), We(this, Tn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Fn, () => {
      clearTimeout(U(this, Tn)), We(this, Tn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Xe)) == null ? void 0 : e.classList.contains(Je.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Xe) || $t(this, $r, Tc).call(this);
  }
  get trigger() {
    return U(this, xr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Je.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Bn) && this.isHover && $t(this, Cr, Wc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Je.CLASS_SHOW), $t(this, kr, Lc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ei)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Xe)) == null || t.classList.remove(Je.CLASS_SHOW), !0;
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
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let Ct = Je;
Bn = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakSet();
Mo = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
To = /* @__PURE__ */ new WeakSet();
Mc = function() {
  const e = $t(this, Wi, Mo).call(this);
  return We(this, nt, document.createElement("div")), U(this, nt).style.position = this.options.strategy, U(this, nt).style.width = `${e}px`, U(this, nt).style.height = `${e}px`, U(this, nt).style.transform = "rotate(45deg)", U(this, nt);
};
$r = /* @__PURE__ */ new WeakSet();
Tc = function() {
  var n;
  const e = Je.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append($t(this, To, Mc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), We(this, Xe, t), t;
};
Ro = /* @__PURE__ */ new WeakSet();
Rc = function() {
  var i;
  const e = $t(this, Wi, Mo).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Dd(e), Wd()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, nt) && ((i = s.middleware) == null || i.push(Rd({ element: U(this, nt) }))), s;
};
No = /* @__PURE__ */ new WeakSet();
Nc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Ao = /* @__PURE__ */ new WeakSet();
Ac = function(e) {
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
kr = /* @__PURE__ */ new WeakSet();
Lc = function() {
  const e = $t(this, Ro, Rc).call(this), t = $t(this, Lo, Pc).call(this);
  We(this, ei, Bd(t, this.tooltip, () => {
    zd(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = $t(this, No, Nc).call(this, o);
      if (i.arrow && U(this, nt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, nt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, nt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...$t(this, Ao, Ac).call(this, o)
        });
      }
    });
  }));
};
Lo = /* @__PURE__ */ new WeakSet();
Pc = function() {
  return U(this, zn) || We(this, zn, {
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
Cr = /* @__PURE__ */ new WeakSet();
Wc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Fn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), We(this, Bn, !0);
};
Ct.NAME = "tooltip";
Ct.TOOLTIP_CLASS = "tooltip";
Ct.CLASS_SHOW = "show";
Ct.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
Ct.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Ct.MENU_SELECTOR);
  if (n) {
    const i = Ct.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    Ct.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, Ct.MENU_SELECTOR);
  if (!n)
    return;
  const s = Ct.ensure(n);
  s.isHover && s.show();
});
function Fd({
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
  actions: y,
  show: _,
  level: w = 0,
  items: v,
  ...$
}) {
  const S = Array.isArray(y) ? { items: y } : y;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = T("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ g(
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
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${v ? " state" : ""}`, children: v ? /* @__PURE__ */ g("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(le, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        S ? /* @__PURE__ */ g(yt, { ...S }) : null,
        /* @__PURE__ */ g(le, { icon: d, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Po = class extends Ci {
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
Po.ItemComponents = {
  item: Fd
};
Po.NAME = "tree";
class Dc extends J {
}
Dc.NAME = "Tree";
Dc.Component = Po;
var is, yi, wi, _i;
class Ud extends V {
  constructor(n) {
    super(n);
    L(this, is, it());
    L(this, yi, (n) => {
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
    L(this, wi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, _i, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ g("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return k(this, is).current;
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
          this.setState({ loading: !1, content: /* @__PURE__ */ g(wl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ g("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ g("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ g(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: k(this, wi),
        onDragEnd: k(this, _i),
        "data-id": c,
        ref: k(this, is),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: k(this, yi), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
is = new WeakMap(), yi = new WeakMap(), wi = new WeakMap(), _i = new WeakMap();
var Ic = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ft = (e, t, n) => (Ic(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wt = (e, t, n) => (Ic(e, t, "access private method"), n), Yt, Wo, Oc, Do, Hc, Sr, Bc, Io, zc, ni, Er, Di, Mr, Oo, Fc, Tr, Rr, Ii, Ho;
const Bo = class extends V {
  constructor() {
    super(...arguments), dt(this, Wo), dt(this, Do), dt(this, Sr), dt(this, Io), dt(this, ni), dt(this, Di), dt(this, Oo), dt(this, Yt, /* @__PURE__ */ new Map()), this.state = {}, dt(this, Tr, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), dt(this, Rr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = wt(this, Sr, Bc).call(this), { cellHeight: n, grid: s } = this.props, i = Ft(this, Yt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ g(
        Ud,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Ft(this, Tr),
          onDragEnd: Ft(this, Rr)
        },
        r.id
      );
    }) }) });
  }
};
let zo = Bo;
Yt = /* @__PURE__ */ new WeakMap();
Wo = /* @__PURE__ */ new WeakSet();
Oc = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Do = /* @__PURE__ */ new WeakSet();
Hc = function() {
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
    } = i, [d, f] = wt(this, Wo, Oc).call(this, o);
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
Sr = /* @__PURE__ */ new WeakSet();
Bc = function() {
  Ft(this, Yt).clear();
  let e = 0;
  const t = wt(this, Do, Hc).call(this);
  return t.forEach((n) => {
    wt(this, Io, zc).call(this, n);
    const [, s, , i] = Ft(this, Yt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Io = /* @__PURE__ */ new WeakSet();
zc = function(e) {
  const t = Ft(this, Yt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = wt(this, Oo, Fc).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    wt(this, Di, Mr).call(this, n, [s, i, r, o]);
};
ni = /* @__PURE__ */ new WeakSet();
Er = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Ft(this, Yt).entries())
    if (s !== n && wt(t = Bo, Ii, Ho).call(t, i, e))
      return !1;
  return !0;
};
Di = /* @__PURE__ */ new WeakSet();
Mr = function(e, t) {
  var n;
  Ft(this, Yt).set(e, t);
  for (const [s, i] of Ft(this, Yt).entries())
    s !== e && wt(n = Bo, Ii, Ho).call(n, i, t) && (i[1] = t[1] + t[3], wt(this, Di, Mr).call(this, s, i));
};
Oo = /* @__PURE__ */ new WeakSet();
Fc = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (wt(this, ni, Er).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (wt(this, ni, Er).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Tr = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakSet();
Ho = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
dt(zo, Ii);
zo.defaultProps = {
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
class Uc extends J {
}
Uc.NAME = "Dashboard";
Uc.Component = zo;
var re, oe;
class Na extends V {
  constructor(n) {
    super(n);
    L(this, re, void 0);
    L(this, oe, void 0);
    B(this, re, 0), B(this, oe, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (k(this, re) && cancelAnimationFrame(k(this, re)), B(this, re, requestAnimationFrame(() => {
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
    n && (B(this, oe, typeof n == "string" ? document : n.current), k(this, oe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), k(this, oe) && k(this, oe).removeEventListener("wheel", this._handleWheel);
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
    }, y = {};
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(u, d) * (n - y.width) / u)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(u, d) * (n - y.height) / u)), /* @__PURE__ */ g(
      "div",
      {
        className: T("scrollbar", r, {
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
function Vc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
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
  }], y = ["dtable-cell-content", e.setting.cellClass], _ = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? _ ?? ""], v = i ? i(w, { row: s, col: e, value: _ }, q) : w, $ = [], S = [], C = {}, M = {};
  let N = "div";
  v == null || v.forEach((b) => {
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : S;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? C : M, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      S.push(b);
  });
  const A = N;
  return /* @__PURE__ */ g(
    "div",
    {
      className: T(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...C,
      children: [
        S.length > 0 && /* @__PURE__ */ g(A, { className: T(y), style: f, ...M, children: S }),
        $
      ]
    }
  );
}
function Ji({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Vc, onRenderCell: l }) {
  return /* @__PURE__ */ g("div", { className: T("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ g(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function qc({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = Vc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ g(
    Ji,
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
    Ji,
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
    Ji,
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
      className: T("dtable-row", t),
      style: y,
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
function Vd({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(qc, { ...s }) });
}
function qd({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ g("div", { className: T("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ g(qc, { ...c }, h.id);
  }) });
}
const si = /* @__PURE__ */ new Map(), ii = [];
function Gc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && si.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  si.set(n, e), t != null && t.buildIn && !ii.includes(n) && ii.push(n);
}
function ge(e, t) {
  Gc(e, t);
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
function jc(e) {
  return si.delete(e);
}
function Gd(e) {
  if (typeof e == "string") {
    const t = si.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Yc(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Gd(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Yc(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function jd(e = [], t = !0) {
  return t && ii.length && e.unshift(...ii), e != null && e.length ? Yc([], e, /* @__PURE__ */ new Set()) : [];
}
function Kc() {
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
function Yd(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Aa(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Zi(e, t = !1) {
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
function Kd(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (v) => (typeof v == "function" && (v = v.call(e)), v = Aa(v, 0), v < 1 && (v = Math.round(v * s)), v), c = {
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
  let y = !1;
  const _ = [], w = {};
  if (n.forEach((v) => {
    const { colTypes: $, onAddCol: S } = v;
    $ && Object.entries($).forEach(([C, M]) => {
      w[C] || (w[C] = []), w[C].push(M);
    }), S && _.push(S);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: $ = "", name: S } = v, C = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...v,
      type: $
    }, M = {
      name: S,
      type: $,
      setting: C,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[$];
    N && N.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, C) : I;
      W && Object.assign(C, W, v);
    });
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = C, D = Aa(C.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = Yd(D < 1 ? Math.round(D * s) : D, b, R), _.forEach((I) => I.call(e, M)), f.push(M), p[M.name] = M;
    const P = A ? A === "left" ? u : d : c;
    P.list.push(M), P.totalWidth += M.width, P.width = P.totalWidth, M.flex && P.flexList.push(M), typeof C.order == "number" && (y = !0);
  }), y) {
    const v = ($, S) => ($.setting.order ?? 0) - (S.setting.order ?? 0);
    f.sort(v), u.list.sort(v), c.list.sort(v), d.list.sort(v);
  }
  return Zi(u, !0), Zi(d, !0), c.widthSetting = s - u.width - d.width, Zi(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var Fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (Fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Fo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lt = (e, t, n) => (Fo(e, t, "access private method"), n), Ge, Rn, Re, Ot, Ce, X, Wt, At, Nn, Ds, ri, ee, An, Ln, Nr, Xc, Ar, Jc, Lr, Zc, Pr, Qc, Is, Wr, Uo, Vo, Oi, oi, Dr, Ir, qo, th, Go, eh, Or, nh;
let jo = class extends V {
  constructor(t) {
    super(t), H(this, Nr), H(this, Ar), H(this, Lr), H(this, Pr), H(this, Is), H(this, qo), H(this, Go), H(this, Or), this.ref = it(), H(this, Ge, 0), H(this, Rn, void 0), H(this, Re, !1), H(this, Ot, void 0), H(this, Ce, void 0), H(this, X, []), H(this, Wt, void 0), H(this, At, /* @__PURE__ */ new Map()), H(this, Nn, {}), H(this, Ds, void 0), H(this, ri, []), this.updateLayout = () => {
      E(this, Ge) && cancelAnimationFrame(E(this, Ge)), Y(this, Ge, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ge, 0);
      }));
    }, H(this, ee, (n, s) => {
      s = s || n.type;
      const i = E(this, At).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, An, (n) => {
      E(this, ee).call(this, n, `window_${n.type}`);
    }), H(this, Ln, (n) => {
      E(this, ee).call(this, n, `document_${n.type}`);
    }), H(this, Uo, (n, s) => {
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
    }), H(this, Vo, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), E(this, X).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Oi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, X).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), H(this, oi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Dr, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, X).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
            return;
          for (const p of E(this, X))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of E(this, X))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), H(this, Ir, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Rn, t.id ?? `dtable-${Yl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, Ce, Object.freeze(jd(t.plugins))), E(this, Ce).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, Nn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Wt)) == null ? void 0 : t.options) || E(this, Ot) || Kc();
  }
  get plugins() {
    return E(this, X);
  }
  get layout() {
    return E(this, Wt);
  }
  get id() {
    return E(this, Rn);
  }
  get data() {
    return E(this, Nn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ot, void 0);
  }
  componentDidMount() {
    if (E(this, Re) ? this.forceUpdate() : Lt(this, Is, Wr).call(this), E(this, X).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", E(this, Dr)), this.on("keydown", E(this, Ir)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Ds, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, X).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    E(this, Re) ? Lt(this, Is, Wr).call(this) : E(this, X).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = E(this, Ds)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of E(this, At).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, An)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, Ln)) : t.removeEventListener(s, E(this, ee));
    E(this, X).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, Ce).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Nn, {}), E(this, At).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, At).get(t);
    i ? i.push(n) : (E(this, At).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, An)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, Ln)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, ee)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, At).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, An)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, Ln)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, ee)));
  }
  emitCustomEvent(t, n) {
    E(this, ee).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
      const { offsetLeft: p, offsetTop: y } = t;
      typeof p == "number" && (u = s + p), typeof y == "number" && (u = i + y);
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
    if (!E(this, Ot))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Wt, void 0);
    else if (s === "options") {
      if (Y(this, Ot, void 0), !E(this, Wt))
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
    return qt(E(this, ri), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Lt(this, Or, nh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      Lt(this, Nr, Xc).call(this, t),
      Lt(this, Ar, Jc).call(this, t),
      Lt(this, Lr, Zc).call(this, t),
      Lt(this, Pr, Qc).call(this, t)
    ), E(this, X).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: E(this, Rn),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Ge = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakSet();
Xc = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      Vd,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: E(this, Oi),
        onRenderRow: E(this, Vo)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    no,
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
Ar = /* @__PURE__ */ new WeakSet();
Jc = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    qd,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, Oi),
      onRenderRow: E(this, Uo)
    },
    "rows"
  );
};
Lr = /* @__PURE__ */ new WeakSet();
Zc = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    no,
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
Pr = /* @__PURE__ */ new WeakSet();
Qc = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: d } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      Na,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, oi),
        left: s,
        bottom: (d === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      Na,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, oi),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Is = /* @__PURE__ */ new WeakSet();
Wr = function() {
  var e;
  Y(this, Re, !1), (e = this.options.afterRender) == null || e.call(this), E(this, X).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Uo = /* @__PURE__ */ new WeakMap();
Vo = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
qo = /* @__PURE__ */ new WeakSet();
th = function() {
  if (E(this, Ot))
    return !1;
  const t = { ...Kc(), ...E(this, Ce).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, X, E(this, Ce).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), Y(this, Ot, t), Y(this, ri, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Go = /* @__PURE__ */ new WeakSet();
eh = function() {
  var A, O;
  const { plugins: e } = this;
  let t = E(this, Ot);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var D;
    const R = (D = b.beforeLayout) == null ? void 0 : D.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Re, !0);
      return;
    }
  }
  const r = Kd(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, D) => {
    var I, W;
    const P = { data: D ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (D || (P.lazy = !0), h.push(P), ((I = t.onAddRow) == null ? void 0 : I.call(this, P, R)) !== !1) {
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
  const { header: f, footer: p } = t, y = f ? t.headerHeight || l : 0, _ = p ? t.footerHeight || l : 0;
  let w = t.height, v = 0;
  const $ = u.length * l, S = y + _ + $;
  if (typeof w == "function" && (w = w.call(this, S)), w === "auto")
    v = S;
  else if (typeof w == "object")
    v = Math.min(w.max, Math.max(w.min, S));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      v = b.clientHeight;
    else {
      v = 0, Y(this, Re, !0);
      return;
    }
  } else
    v = w;
  const C = v - y - _, M = {
    options: t,
    allRows: h,
    width: i,
    height: v,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: C,
    rowsHeightTotal: $,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: _,
    cols: r
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, M);
  N && Object.assign(M, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, M);
      R && Object.assign(M, R);
    }
  }), Y(this, Wt, M);
};
Or = /* @__PURE__ */ new WeakSet();
nh = function() {
  (Lt(this, qo, th).call(this) || !E(this, Wt)) && Lt(this, Go, eh).call(this);
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
    const y = o[p];
    y.lazy && f && (y.data = f([y.id])[0], y.lazy = !1), d.push(y);
  }
  return e.visibleRows = d, e.scrollTop = l, e.scrollLeft = n, e;
};
jo.addPlugin = Gc;
jo.removePlugin = jc;
function La(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const Xd = {
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
      La(this, s);
    },
    mouseleave() {
      La(this, !1);
    }
  }
}, Jd = ge(Xd, { buildIn: !0 });
function Zd(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const u = r ? r.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !sh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function Qd(e) {
  return this.state.checkedRows[e] ?? !1;
}
function sh() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function tf() {
  return Object.keys(this.state.checkedRows);
}
function ef(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Pa(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const nf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Pa
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
    toggleCheckRows: Zd,
    isRowChecked: Qd,
    isAllRowChecked: sh,
    getChecks: tf,
    toggleCheckable: ef
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Pa(e) })
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
}, sf = ge(nf);
var ih = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ih || {});
function ai(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = ai.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ai.call(this, t.parent).level + 1 : 0, t;
}
function rf(e) {
  return e !== void 0 ? ai.call(this, e) : this.data.nestedMap;
}
function of(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !rh.call(this)), t) {
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
function rh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function oh(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = oh(e, t, o.children, s + 1)));
  }
  return t;
}
function ah(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, ah(e, r, n, s);
  }), i;
}
function lh(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && lh(e, r.parent, n, s, i);
}
const af = {
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
        const o = ah(this, i, r, s);
        o != null && o.parent && lh(this, o.parent, r, s, n);
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
    getNestedInfo: rf,
    toggleRow: of,
    isAllCollapsed: rh,
    getNestedRowInfo: ai
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
    ), oh(this.data.nestedMap), e.sort((t, n) => {
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
}, lf = ge(af);
function ch(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: et(i, t.row.data), ...s, ...r, ...a, children: n });
}
function Yo(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function hh(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), vr(n, e, s ?? n));
}
function uh(e, t) {
  const { link: n } = t.col.setting, s = ch(n, t, e[0]);
  return s && (e[0] = s), e;
}
function dh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Yo(n, t, e[0])), e;
}
function fh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function ph(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = hh(s, t, e[0], i), e;
}
function Hr(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : Yo(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const cf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Hr(e, t, !0);
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
    if (n && (e = ph(e, t, n)), e = fh(e, t), e = dh(e, t), s ? e = Hr(e, t) : e = uh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = et(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, hf = ge(cf, { buildIn: !0 });
function Qi(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ g(Kl, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, t) : d;
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
const uf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Qi
    },
    avatarBtn: {
      onRenderCell: Qi
    },
    avatarName: {
      onRenderCell: Qi
    }
  }
}, df = ge(uf, { buildIn: !0 }), ff = {
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
        e[0] = /* @__PURE__ */ g("a", { href: et(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, pf = ge(ff, { buildIn: !0 }), tr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, gf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    tr(t.left.list), tr(t.center.list), tr(t.right.list);
  }
}, mf = ge(gf), yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ih,
  avatar: df,
  checkable: sf,
  colHover: Jd,
  group: mf,
  nested: lf,
  renderDatetime: hh,
  renderDatetimeCell: ph,
  renderFormat: Yo,
  renderFormatCell: dh,
  renderHtmlCell: Hr,
  renderLink: ch,
  renderLinkCell: uh,
  renderMapCell: fh,
  rich: hf,
  sortType: pf
}, Symbol.toStringTag, { value: "Module" }));
class us extends J {
}
us.NAME = "DTable";
us.Component = jo;
us.definePlugin = ge;
us.removePlugin = jc;
us.plugins = yf;
var gh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Wa = (e, t, n) => (gh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Da = (e, t, n, s) => (gh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), je;
const _f = "nav", Br = '[data-toggle="tab"]', vf = "active";
class mh extends lt {
  constructor() {
    super(...arguments), wf(this, je, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Br);
    let i = t ? m(t).first() : s.filter(`.${vf}`);
    if (!i.length && (i = n.find(Br).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = m(r);
    o.length && (o.parent().children(".tab-pane").removeClass("active in"), o.addClass("active"), Wa(this, je) && clearTimeout(Wa(this, je)), Da(this, je, setTimeout(() => {
      o.addClass("in"), Da(this, je, 0);
    }, 10)));
  }
}
je = /* @__PURE__ */ new WeakMap();
mh.NAME = "Tabs";
m(document).on("click.tabs.zui", Br, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${_f}`);
  n.length && mh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  $l as ActionMenu,
  Cl as ActionMenuNested,
  Xl as Avatar,
  Gl as BtnGroup,
  tc as ColorPicker,
  lt as Component,
  J as ComponentFromReact,
  tt as ContextMenu,
  no as CustomRender,
  us as DTable,
  Uc as Dashboard,
  zt as Dropdown,
  jl as EventBus,
  wu as HElement,
  wl as HtmlContent,
  le as Icon,
  Sl as Menu,
  po as Messager,
  nc as Modal,
  Xt as ModalBase,
  oc as ModalTrigger,
  lc as Nav,
  cc as Pager,
  hc as Pick,
  mc as Picker,
  yc as Popovers,
  V as ReactComponent,
  ql as Switch,
  Pt as TIME_DAY,
  mh as Tabs,
  wc as Toolbar,
  Ct as Tooltip,
  Dc as Tree,
  Qu as Upload,
  ka as calculateTimestamp,
  m as cash,
  T as classes,
  lu as convertBytes,
  rt as createDate,
  $u as createPortal,
  it as createRef,
  ou as deepGet,
  ru as deepGetPath,
  zs as delay,
  xf as dom,
  au as formatBytes,
  vr as formatDate,
  Bf as formatDateSpan,
  et as formatString,
  nl as getClassList,
  zf as getTimeBeforeDesc,
  q as h,
  $f as hh,
  yu as htm,
  qt as i18n,
  Hf as isDBY,
  cs as isSameDay,
  md as isSameMonth,
  Wf as isSameWeek,
  _r as isSameYear,
  Df as isToday,
  Of as isTomorrow,
  Z as isValidElement,
  If as isYesterday,
  wa as nativeEvents,
  qn as render,
  vu as renderCustomResult,
  ed as store,
  sl as storeData,
  du as takeData
};
//# sourceMappingURL=zui.js.map
