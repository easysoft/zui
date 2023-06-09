var Ri = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var E = (t, e, n) => (Ri(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, I = (t, e, n, s) => (Ri(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var et = (t, e, n) => (Ri(t, e, "access private method"), n);
const zt = document, Rs = window, Oa = zt.documentElement, Me = zt.createElement.bind(zt), Ia = Me("div"), Ai = Me("table"), wh = Me("tbody"), Zo = Me("tr"), { isArray: li, prototype: Ha } = Array, { concat: vh, filter: Br, indexOf: Ba, map: za, push: _h, slice: Fa, some: zr, splice: bh } = Ha, xh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, kh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Sh = /<.+>/, $h = /^\w+$/;
function Fr(t, e) {
  const n = Ch(e);
  return !t || !n && !Se(e) && !q(e) ? [] : !n && kh.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && $h.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class ci {
  constructor(e, n) {
    if (!e)
      return;
    if (Gi(e))
      return e;
    let s = e;
    if (tt(e)) {
      const i = n || zt;
      if (s = xh.test(e) && Se(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Sh.test(e) ? ja(e) : Gi(i) ? i.find(e) : tt(i) ? w(i).find(e) : Fr(e, i), !s)
        return;
    } else if (Te(e))
      return this.ready(e);
    (s.nodeType || s === Rs) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(e, n) {
    return new ci(e, n);
  }
}
const x = ci.prototype, w = x.init;
w.fn = w.prototype = x;
x.length = 0;
x.splice = bh;
typeof Symbol == "function" && (x[Symbol.iterator] = Ha[Symbol.iterator]);
function Gi(t) {
  return t instanceof ci;
}
function nn(t) {
  return !!t && t === t.window;
}
function Se(t) {
  return !!t && t.nodeType === 9;
}
function Ch(t) {
  return !!t && t.nodeType === 11;
}
function q(t) {
  return !!t && t.nodeType === 1;
}
function Eh(t) {
  return !!t && t.nodeType === 3;
}
function Mh(t) {
  return typeof t == "boolean";
}
function Te(t) {
  return typeof t == "function";
}
function tt(t) {
  return typeof t == "string";
}
function at(t) {
  return t === void 0;
}
function Pn(t) {
  return t === null;
}
function Ua(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Ur(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
w.isWindow = nn;
w.isFunction = Te;
w.isArray = li;
w.isNumeric = Ua;
w.isPlainObject = Ur;
function K(t, e, n) {
  if (n) {
    let s = t.length;
    for (; s--; )
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  } else if (Ur(t)) {
    const s = Object.keys(t);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (e.call(t[o], o, t[o]) === !1)
        return t;
    }
  } else
    for (let s = 0, i = t.length; s < i; s++)
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  return t;
}
w.each = K;
x.each = function(t) {
  return K(this, t);
};
x.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function As(...t) {
  const e = Mh(t[0]) ? t.shift() : !1, n = t.shift(), s = t.length;
  if (!n)
    return {};
  if (!s)
    return As(e, w, n);
  for (let i = 0; i < s; i++) {
    const r = t[i];
    for (const o in r)
      e && (li(r[o]) || Ur(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), As(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
w.extend = As;
x.extend = function(t) {
  return As(x, t);
};
const Th = /\S+/g;
function hi(t) {
  return tt(t) ? t.match(Th) || [] : [];
}
x.toggleClass = function(t, e) {
  const n = hi(t), s = !at(e);
  return this.each((i, r) => {
    q(r) && K(n, (o, a) => {
      s ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(t) {
  return this.toggleClass(t, !0);
};
x.removeAttr = function(t) {
  const e = hi(t);
  return this.each((n, s) => {
    q(s) && K(e, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Rh(t, e) {
  if (t) {
    if (tt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !q(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Pn(n) ? void 0 : n;
      }
      return at(e) ? this : Pn(e) ? this.removeAttr(t) : this.each((n, s) => {
        q(s) && s.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
x.attr = Rh;
x.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
x.hasClass = function(t) {
  return !!t && zr.call(this, (e) => q(e) && e.classList.contains(t));
};
x.get = function(t) {
  return at(t) ? Fa.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
x.eq = function(t) {
  return w(this.get(t));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Ah(t) {
  return at(t) ? this.get().map((e) => q(e) || Eh(e) ? e.textContent : "").join("") : this.each((e, n) => {
    q(n) && (n.textContent = t);
  });
}
x.text = Ah;
function Ft(t, e, n) {
  if (!q(t))
    return;
  const s = Rs.getComputedStyle(t, null);
  return n ? s.getPropertyValue(e) || void 0 : s[e] || t.style[e];
}
function vt(t, e) {
  return parseInt(Ft(t, e), 10) || 0;
}
function Qo(t, e) {
  return vt(t, `border${e ? "Left" : "Top"}Width`) + vt(t, `padding${e ? "Left" : "Top"}`) + vt(t, `padding${e ? "Right" : "Bottom"}`) + vt(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ni = {};
function Nh(t) {
  if (Ni[t])
    return Ni[t];
  const e = Me(t);
  zt.body.insertBefore(e, null);
  const n = Ft(e, "display");
  return zt.body.removeChild(e), Ni[t] = n !== "none" ? n : "block";
}
function ta(t) {
  return Ft(t, "display") === "none";
}
function Va(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function ui(t) {
  return tt(t) ? (e, n) => Va(n, t) : Te(t) ? t : Gi(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
x.filter = function(t) {
  const e = ui(t);
  return w(Br.call(this, (n, s) => e.call(n, s, n)));
};
function le(t, e) {
  return e ? t.filter(e) : t;
}
x.detach = function(t) {
  return le(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Lh = /^\s*<(\w+)[^>]*>/, Wh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ea = {
  "*": Ia,
  tr: wh,
  td: Zo,
  th: Zo,
  thead: Ai,
  tbody: Ai,
  tfoot: Ai
};
function ja(t) {
  if (!tt(t))
    return [];
  if (Wh.test(t))
    return [Me(RegExp.$1)];
  const e = Lh.test(t) && RegExp.$1, n = ea[e] || ea["*"];
  return n.innerHTML = t, w(n.childNodes).detach().get();
}
w.parseHTML = ja;
x.has = function(t) {
  const e = tt(t) ? (n, s) => Fr(t, s).length : (n, s) => s.contains(t);
  return this.filter(e);
};
x.not = function(t) {
  const e = ui(t);
  return this.filter((n, s) => (!tt(t) || q(s)) && !e.call(s, n, s));
};
function Gt(t, e, n, s) {
  const i = [], r = Te(e), o = s && ui(s);
  for (let a = 0, l = t.length; a < l; a++)
    if (r) {
      const h = e(t[a]);
      h.length && _h.apply(i, h);
    } else {
      let h = t[a][e];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[e] : null;
    }
  return i;
}
function qa(t) {
  return t.multiple && t.options ? Gt(Br.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Dh(t) {
  return arguments.length ? this.each((e, n) => {
    const s = n.multiple && n.options;
    if (s || tl.test(n.type)) {
      const i = li(t) ? za.call(t, String) : Pn(t) ? [] : [String(t)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = at(t) || Pn(t) ? "" : t;
  }) : this[0] && qa(this[0]);
}
x.val = Dh;
x.is = function(t) {
  const e = ui(t);
  return zr.call(this, (n, s) => e.call(n, s, n));
};
w.guid = 1;
function Ct(t) {
  return t.length > 1 ? Br.call(t, (e, n, s) => Ba.call(s, e) === n) : t;
}
w.unique = Ct;
x.add = function(t, e) {
  return w(Ct(this.get().concat(w(t, e).get())));
};
x.children = function(t) {
  return le(w(Ct(Gt(this, (e) => e.children))), t);
};
x.parent = function(t) {
  return le(w(Ct(Gt(this, "parentNode"))), t);
};
x.index = function(t) {
  const e = t ? w(t)[0] : this[0], n = t ? this : w(e).parent().children();
  return Ba.call(n, e);
};
x.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
x.siblings = function(t) {
  return le(w(Ct(Gt(this, (e) => w(e).parent().children().not(e)))), t);
};
x.find = function(t) {
  return w(Ct(Gt(this, (e) => Fr(t, e))));
};
const Ph = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Oh = /^$|^module$|\/(java|ecma)script/i, Ih = ["type", "src", "nonce", "noModule"];
function Hh(t, e) {
  const n = w(t);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Oh.test(i.type) && Oa.contains(i)) {
      const r = Me("script");
      r.text = i.textContent.replace(Ph, ""), K(Ih, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Bh(t, e, n, s, i) {
  s ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Hh(e, t.ownerDocument);
}
function ce(t, e, n, s, i, r, o, a) {
  return K(t, (l, h) => {
    K(w(h), (c, u) => {
      K(w(e), (d, f) => {
        const p = n ? u : f, g = n ? f : u, v = n ? c : d;
        Bh(p, v ? g.cloneNode(!0) : g, s, i, !v);
      }, a);
    }, o);
  }, r), e;
}
x.after = function() {
  return ce(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ce(arguments, this, !1, !1, !0);
};
function zh(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (at(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, s) => {
    q(s) && (e ? w(s).empty().append(t) : s.innerHTML = t);
  });
}
x.html = zh;
x.appendTo = function(t) {
  return ce(arguments, this, !0, !1, !0);
};
x.wrapInner = function(t) {
  return this.each((e, n) => {
    const s = w(n), i = s.contents();
    i.length ? i.wrapAll(t) : s.append(t);
  });
};
x.before = function() {
  return ce(arguments, this, !1, !0);
};
x.wrapAll = function(t) {
  let e = w(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
x.wrap = function(t) {
  return this.each((e, n) => {
    const s = w(t)[0];
    w(n).wrapAll(e ? s.cloneNode(!0) : s);
  });
};
x.insertAfter = function(t) {
  return ce(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(t) {
  return ce(arguments, this, !0, !0);
};
x.prepend = function() {
  return ce(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(t) {
  return ce(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return w(Ct(Gt(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
x.next = function(t, e, n) {
  return le(w(Ct(Gt(this, "nextElementSibling", e, n))), t);
};
x.nextAll = function(t) {
  return this.next(t, !0);
};
x.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
x.parents = function(t, e) {
  return le(w(Ct(Gt(this, "parentElement", !0, e))), t);
};
x.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
x.prev = function(t, e, n) {
  return le(w(Ct(Gt(this, "previousElementSibling", e, n))), t);
};
x.prevAll = function(t) {
  return this.prev(t, !0);
};
x.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
x.map = function(t) {
  return w(vh.apply([], za.call(this, (e, n) => t.call(e, n, e))));
};
x.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Ft(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Oa;
  });
};
x.slice = function(t, e) {
  return w(Fa.call(this, t, e));
};
const Fh = /-([a-z])/g;
function Vr(t) {
  return t.replace(Fh, (e, n) => n.toUpperCase());
}
x.ready = function(t) {
  const e = () => setTimeout(t, 0, w);
  return zt.readyState !== "loading" ? e() : zt.addEventListener("DOMContentLoaded", e), this;
};
x.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = w(e);
    n.replaceWith(n.children());
  }), this;
};
x.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Rs.pageYOffset,
    left: e.left + Rs.pageXOffset
  };
};
x.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Ft(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = t.ownerDocument;
    let i = t.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ft(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && q(i)) {
      const r = w(i).offset();
      n.top -= r.top + vt(i, "borderTopWidth"), n.left -= r.left + vt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - vt(t, "marginTop"),
    left: n.left - vt(t, "marginLeft")
  };
};
const Ga = {
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
x.prop = function(t, e) {
  if (t) {
    if (tt(t))
      return t = Ga[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, s) => {
        s[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
x.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Ga[t] || t];
  });
};
const Uh = /^--/;
function jr(t) {
  return Uh.test(t);
}
const Li = {}, { style: Vh } = Ia, jh = ["webkit", "moz", "ms"];
function qh(t, e = jr(t)) {
  if (e)
    return t;
  if (!Li[t]) {
    const n = Vr(t), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${jh.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in Vh)
        return Li[t] = o, !1;
    });
  }
  return Li[t];
}
const Gh = {
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
function Ya(t, e, n = jr(t)) {
  return !n && !Gh[t] && Ua(e) ? `${e}px` : e;
}
function Yh(t, e) {
  if (tt(t)) {
    const n = jr(t);
    return t = qh(t, n), arguments.length < 2 ? this[0] && Ft(this[0], t, n) : t ? (e = Ya(t, e, n), this.each((s, i) => {
      q(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
x.css = Yh;
function Ka(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Kh = /^\s+|\s+$/;
function na(t, e) {
  const n = t.dataset[e] || t.dataset[Vr(e)];
  return Kh.test(n) ? n : Ka(JSON.parse, n);
}
function Xh(t, e, n) {
  n = Ka(JSON.stringify, n), t.dataset[Vr(e)] = n;
}
function Jh(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = na(this[0], s);
    return n;
  }
  if (tt(t))
    return arguments.length < 2 ? this[0] && na(this[0], t) : at(e) ? this : this.each((n, s) => {
      Xh(s, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
x.data = Jh;
function Xa(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
K([!0, !1], (t, e) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return nn(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Se(this[0]) ? Xa(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (r && e ? vt(this[0], `margin${n ? "Top" : "Left"}`) + vt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return at(s) ? void 0 : this;
    if (!arguments.length)
      return nn(this[0]) ? this[0].document.documentElement[`client${e}`] : Se(this[0]) ? Xa(this[0], e) : this[0].getBoundingClientRect()[n] - Qo(this[0], !t);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!q(o))
        return;
      const a = Ft(o, "boxSizing");
      o.style[n] = Ya(n, i + (a === "border-box" ? Qo(o, !t) : 0));
    });
  };
});
const sa = "___cd";
x.toggle = function(t) {
  return this.each((e, n) => {
    if (!q(n))
      return;
    const s = ta(n);
    (at(t) ? s : t) ? (n.style.display = n[sa] || "", ta(n) && (n.style.display = Nh(n.tagName))) : s || (n[sa] = Ft(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const ia = "___ce", qr = ".", Gr = { focus: "focusin", blur: "focusout" }, Ja = { mouseenter: "mouseover", mouseleave: "mouseout" }, Zh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Yr(t) {
  return Ja[t] || Gr[t] || t;
}
function Kr(t) {
  const e = t.split(qr);
  return [e[0], e.slice(1).sort()];
}
x.trigger = function(t, e) {
  if (tt(t)) {
    const [s, i] = Kr(t), r = Yr(s);
    if (!r)
      return this;
    const o = Zh.test(r) ? "MouseEvents" : "HTMLEvents";
    t = zt.createEvent(o), t.initEvent(r, !0, !0), t.namespace = i.join(qr), t.___ot = s;
  }
  t.___td = e;
  const n = t.___ot in Gr;
  return this.each((s, i) => {
    n && Te(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function Za(t) {
  return t[ia] = t[ia] || {};
}
function Qh(t, e, n, s, i) {
  const r = Za(t);
  r[e] = r[e] || [], r[e].push([n, s, i]), t.addEventListener(e, i);
}
function Qa(t, e) {
  return !e || !zr.call(e, (n) => t.indexOf(n) < 0);
}
function Ns(t, e, n, s, i) {
  const r = Za(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Qa(o, n) || s && s !== a)
        return !0;
      t.removeEventListener(e, l);
    }));
  else
    for (e in r)
      Ns(t, e, n, s, i);
}
x.off = function(t, e, n) {
  if (at(t))
    this.each((s, i) => {
      !q(i) && !Se(i) && !nn(i) || Ns(i);
    });
  else if (tt(t))
    Te(e) && (n = e, e = ""), K(hi(t), (s, i) => {
      const [r, o] = Kr(i), a = Yr(r);
      this.each((l, h) => {
        !q(h) && !Se(h) && !nn(h) || Ns(h, a, o, e, n);
      });
    });
  else
    for (const s in t)
      this.off(s, t[s]);
  return this;
};
x.remove = function(t) {
  return le(this, t).detach().off(), this;
};
x.replaceWith = function(t) {
  return this.before(t).remove();
};
x.replaceAll = function(t) {
  return w(t).replaceWith(this), this;
};
function tu(t, e, n, s, i) {
  if (!tt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return tt(e) || (at(e) || Pn(e) ? e = "" : at(n) ? (n = e, e = "") : (s = n, n = e, e = "")), Te(s) || (s = n, n = void 0), s ? (K(hi(t), (r, o) => {
    const [a, l] = Kr(o), h = Yr(a), c = a in Ja, u = a in Gr;
    h && this.each((d, f) => {
      if (!q(f) && !Se(f) && !nn(f))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Qa(l, g.namespace.split(qr)) || !e && (u && (g.target !== f || g.___ot === h) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let v = f;
        if (e) {
          let _ = g.target;
          for (; !Va(_, e); )
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
        const y = s.call(v, g, g.___td);
        i && Ns(f, h, l, e, p), y === !1 && (g.preventDefault(), g.stopPropagation());
      };
      p.guid = s.guid = s.guid || w.guid++, Qh(f, h, l, e, p);
    });
  }), this) : this;
}
x.on = tu;
function eu(t, e, n, s) {
  return this.on(t, e, n, s, !0);
}
x.one = eu;
const nu = /\r?\n/g;
function su(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(nu, `\r
`))}`;
}
const iu = /file|reset|submit|button|image/i, tl = /radio|checkbox/i;
x.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || iu.test(i.type) || tl.test(i.type) && !i.checked)
        return;
      const r = qa(i);
      if (!at(r)) {
        const o = li(r) ? r : [r];
        K(o, (a, l) => {
          t += su(i.name, l);
        });
      }
    });
  }), t.slice(1);
};
window.$ = w;
function ru(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let s = t;
  const i = [s];
  for (; typeof s == "object" && s !== null && e.length; ) {
    let r = e.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function ou(t, e, n) {
  try {
    const s = ru(t, e), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function Wi(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function Yi(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Wi(t) && Wi(n))
    for (const s in n)
      Wi(n[s]) ? (t[s] || Object.assign(t, { [s]: {} }), Yi(t[s], n[s])) : Object.assign(t, { [s]: n[s] });
  return Yi(t, ...e);
}
function lt(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((s) => {
      const i = n[s] ?? 0;
      t = t.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const s = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${s}`);
  }
  return t;
}
var Xr = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Xr || {});
function Sd(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Xr[n]).toFixed(e) + n);
}
const $d = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const s = n[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * Xr[s];
};
let Jr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Jt;
function au() {
  return Jr;
}
function lu(t) {
  Jr = t.toLowerCase();
}
function el(t, e) {
  Jt || (Jt = {}), typeof t == "string" && (t = { [t]: e ?? {} }), Yi(Jt, t);
}
function Ut(t, e, n, s, i, r) {
  Array.isArray(t) ? Jt && t.unshift(Jt) : t = Jt ? [Jt, t] : [t], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Jr;
  let a;
  for (const l of t) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === Jt ? `${r}.${e}` : e;
    if (a = ou(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? lt(a, ...Array.isArray(n) ? n : [n]) : a;
}
function cu(t, e, n, s) {
  return Ut(void 0, t, e, n, s);
}
Ut.addLang = el;
Ut.getLang = cu;
Ut.getCode = au;
Ut.setCode = lu;
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
function nl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? e[o][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? nl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const T = (...t) => nl(...t).reduce((e, [n, s]) => (s && e.push(n), e), []).join(" ");
w.classes = T;
w.fn.setClass = function(t, ...e) {
  return this.each((n, s) => {
    const i = w(s);
    t === !0 ? i.attr("class", T(i.attr("class"), ...e)) : i.addClass(T(t, ...e));
  });
};
const dn = /* @__PURE__ */ new WeakMap();
function sl(t, e, n) {
  const s = dn.has(t), i = s ? dn.get(t) : {};
  typeof e == "string" ? i[e] = n : e === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, e), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && t instanceof Element && Object.assign(i, w(t).dataset(), i), dn.set(t, i)) : dn.delete(t);
}
function hu(t, e) {
  let n = dn.get(t);
  return !n && t instanceof Element && (n = w(t).dataset()), e === void 0 ? n || {} : n == null ? void 0 : n[e];
}
w.fn.dataset = w.fn.data;
w.fn.data = function(...t) {
  if (!this.length)
    return;
  const [e, n] = t;
  return !t.length || t.length === 1 && typeof e == "string" ? hu(this[0], e) : this.each((s, i) => sl(i, e, n));
};
w.fn.removeData = function(t = null) {
  return this.each((e, n) => sl(n, t));
};
w.fn._attr = w.fn.attr;
w.fn.extend({
  attr(...t) {
    const [e, n] = t;
    return !t.length || t.length === 1 && typeof e == "string" ? this._attr.apply(this, t) : typeof e == "object" ? (e && Object.keys(e).forEach((s) => {
      const i = e[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(e) : this._attr(e, n);
  }
});
w.Event = (t, e) => {
  const [n, ...s] = t.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = e, i;
};
function il(t, e) {
  const n = w(t)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, d = l || c;
  if (e != null && e.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= d && i + o <= u;
  const f = i <= u && i + o >= 0, p = s <= d && s + r >= 0;
  return f && p;
}
w.fn.isVisible = function(t) {
  return this.each((e, n) => {
    il(n, t);
  });
};
function Zr(t, e, n = !1) {
  const s = w(t);
  if (e !== void 0) {
    const i = `zui-runjs-${w.guid++}`;
    s.append(`<script id="${i}">${e}<\/script>`), n && s.find(`#${i}`).remove();
    return;
  }
  s.find("script").each((i, r) => {
    Zr(s, r.innerHTML), r.remove();
  });
}
w.fn.runJS = function(t) {
  return this.each((e, n) => {
    Zr(n, t);
  });
};
const Cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: il,
  runJS: Zr
}, Symbol.toStringTag, { value: "Module" }));
var fi, B, rl, Q, me, ra, ol, Ki, Ls = {}, al = [], uu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Qr = Array.isArray;
function ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function ll(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function j(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? fi.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return us(t, o, s, i, null);
}
function us(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++rl };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function St() {
  return { current: null };
}
function di(t) {
  return t.children;
}
function U(t, e) {
  this.props = t, this.context = e;
}
function On(t, e) {
  if (e == null)
    return t.__ ? On(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? On(t) : null;
}
function cl(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return cl(t);
  }
}
function oa(t) {
  (!t.__d && (t.__d = !0) && me.push(t) && !Ws.__r++ || ra !== B.debounceRendering) && ((ra = B.debounceRendering) || ol)(Ws);
}
function Ws() {
  var t, e, n, s, i, r, o, a;
  for (me.sort(Ki); t = me.shift(); )
    t.__d && (e = me.length, s = void 0, i = void 0, o = (r = (n = t).__v).__e, (a = n.__P) && (s = [], (i = ne({}, r)).__v = r.__v + 1, to(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? On(r), r.__h), pl(s, r), r.__e != o && cl(r)), me.length > e && me.sort(Ki));
  Ws.__r = 0;
}
function hl(t, e, n, s, i, r, o, a, l, h) {
  var c, u, d, f, p, g, v, y = s && s.__k || al, _ = y.length;
  for (n.__k = [], c = 0; c < e.length; c++)
    if ((f = n.__k[c] = (f = e[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? us(null, f, null, null, f) : Qr(f) ? us(di, { children: f }, null, null, null) : f.__b > 0 ? us(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = y[c]) === null || d && f.key == d.key && f.type === d.type)
        y[c] = void 0;
      else
        for (u = 0; u < _; u++) {
          if ((d = y[u]) && f.key == d.key && f.type === d.type) {
            y[u] = void 0;
            break;
          }
          d = null;
        }
      to(t, f, d = d || Ls, i, r, o, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (v || (v = []), d.ref && v.push(d.ref, null, f), v.push(u, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = ul(f, l, t) : l = fl(t, f, d, y, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != t && (l = On(d));
    }
  for (n.__e = g, c = _; c--; )
    y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = dl(s).nextSibling), ml(y[c], y[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      gl(v[c], v[++c], v[++c]);
}
function ul(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? ul(s, e, n) : fl(n, s, s, i, s.__e, e));
  return e;
}
function fl(t, e, n, s, i, r) {
  var o, a, l;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (a = r, l = 0; (a = a.nextSibling) && l < s.length; l += 1)
          if (a == i)
            break t;
        t.insertBefore(i, r), o = r;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function dl(t) {
  var e, n, s;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (s = dl(n)))
        return s;
  }
  return null;
}
function fu(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ds(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ds(t, r, e[r], n[r], s);
}
function aa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || uu.test(e) ? n : n + "px";
}
function Ds(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || aa(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || aa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? ca : la, r) : t.removeEventListener(e, r ? ca : la, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function la(t) {
  return this.l[t.type + !1](B.event ? B.event(t) : t);
}
function ca(t) {
  return this.l[t.type + !0](B.event ? B.event(t) : t);
}
function to(t, e, n, s, i, r, o, a, l) {
  var h, c, u, d, f, p, g, v, y, _, k, C, $, M, A, N = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = B.__b) && h(e);
  try {
    t:
      if (typeof N == "function") {
        if (v = e.props, y = (h = N.contextType) && s[h.__c], _ = h ? y ? y.props.value : h.__ : s, n.__c ? g = (c = e.__c = n.__c).__ = c.__E : ("prototype" in N && N.prototype.render ? e.__c = c = new N(v, _) : (e.__c = c = new U(v, _), c.constructor = N, c.render = pu), y && y.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ne({}, c.__s)), ne(c.__s, N.getDerivedStateFromProps(v, c.__s))), d = c.props, f = c.state, c.__v = e, u)
          N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (N.getDerivedStateFromProps == null && v !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(O) {
              O && (O.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = t, C = B.__r, $ = 0, "prototype" in N && N.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(e), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(e), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++$ < 25);
        c.state = c.__s, c.getChildContext != null && (s = ne(ne({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), hl(t, Qr(A = h != null && h.type === di && h.key == null ? h.props.children : h) ? A : [A], e, n, s, i, r, o, a, l), c.base = e.__e, e.__h = null, c.__h.length && o.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = du(n.__e, e, n, s, i, r, o, l);
    (h = B.diffed) && h(e);
  } catch (O) {
    e.__v = null, (l || r != null) && (e.__e = a, e.__h = !!l, r[r.indexOf(a)] = null), B.__e(O, e, n);
  }
}
function pl(t, e) {
  B.__c && B.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      B.__e(s, n.__v);
    }
  });
}
function du(t, e, n, s, i, r, o, a) {
  var l, h, c, u = n.props, d = e.props, f = e.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((l = r[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        t = l, r[p] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), r = null, a = !1;
  }
  if (f === null)
    u === d || a && t.data === d || (t.data = d);
  else {
    if (r = r && fi.call(t.childNodes), h = (u = n.props || Ls).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < t.attributes.length; p++)
          u[t.attributes[p].name] = t.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (fu(t, d, u, i, a), c)
      e.__k = [];
    else if (hl(t, Qr(p = e.props.children) ? p : [p], e, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && On(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && ll(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || f === "progress" && !p || f === "option" && p !== u.value) && Ds(t, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Ds(t, "checked", p, u.checked, !1));
  }
  return t;
}
function gl(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    B.__e(s, n);
  }
}
function ml(t, e, n) {
  var s, i;
  if (B.unmount && B.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || gl(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        B.__e(r, e);
      }
    s.base = s.__P = null, t.__c = void 0;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ml(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || ll(t.__e), t.__ = t.__e = t.__d = void 0;
}
function pu(t, e, n) {
  return this.constructor(t, n);
}
function In(t, e, n) {
  var s, i, r;
  B.__ && B.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, r = [], to(e, t = (!s && n || e).__k = j(di, null, [t]), i || Ls, Ls, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? fi.call(e.childNodes) : null, r, !s && n ? n : i ? i.__e : e.firstChild, s), pl(r, t);
}
fi = al.slice, B = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, rl = 0, Q = function(t) {
  return t != null && t.constructor === void 0;
}, U.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ne({}, this.state), typeof t == "function" && (t = t(ne({}, n), this.props)), t && ne(n, t), t != null && this.__v && (e && this._sb.push(e), oa(this));
}, U.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), oa(this));
}, U.prototype.render = di, me = [], ol = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ki = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ws.__r = 0;
var yl = function(t, e, n, s) {
  var i;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var o = e[r++], a = e[r] ? (e[0] |= o ? 1 : 2, n[e[r++]]) : e[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[e[++r]] = a : o === 6 ? s[1][e[++r]] += a + "" : o ? (i = t.apply(a, yl(t, a, n, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = i)) : s.push(a);
  }
  return s;
}, ha = /* @__PURE__ */ new Map();
function gu(t) {
  var e = ha.get(this);
  return e || (e = /* @__PURE__ */ new Map(), ha.set(this, e)), (e = yl(this, e.get(t) || (e.set(t, e = function(n) {
    for (var s, i, r = 1, o = "", a = "", l = [0], h = function(d) {
      r === 1 && (d || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, o) : r === 3 && (d || o) ? (l.push(3, d, o), r = 2) : r === 2 && o === "..." && d ? l.push(4, d, 0) : r === 2 && o && !d ? l.push(5, 0, !0, o) : r >= 5 && ((o || !d && r === 5) && (l.push(r, 0, o, i), r = 6), d && (l.push(r, d, 0, i), r = 6)), o = "";
    }, c = 0; c < n.length; c++) {
      c && (r === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], r === 1 ? s === "<" ? (h(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[c][u + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
const Ed = gu.bind(j);
function mu(t) {
  const { tagName: e = "div", class: n, className: s, style: i, children: r, attrs: o, ...a } = t;
  return j(e, { class: T(n, s), style: i, ...a, ...o }, r);
}
var yu = 0;
function m(t, e, n, s, i, r) {
  var o, a, l = {};
  for (a in e)
    a == "ref" ? o = e[a] : l[a] = e[a];
  var h = { type: t, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --yu, __source: i, __self: r };
  if (typeof t == "function" && (o = t.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return B.vnode && B.vnode(h), h;
}
var Un;
class wl extends U {
  constructor() {
    super(...arguments);
    L(this, Un, St());
  }
  componentDidMount() {
    this.props.executeScript && w(E(this, Un).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ m(mu, { ref: E(this, Un), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Un = new WeakMap();
function wu(t) {
  const {
    tag: e,
    className: n,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...c
  } = t, u = [n], d = { ...s }, f = [], p = [];
  return i.forEach((g) => {
    const v = [];
    if (typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function")
      if (l)
        v.push(...l.call(o, g, f, ...r));
      else {
        const y = g.call(o, f, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(g);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !Q(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? f.push(
        /* @__PURE__ */ m("div", { className: T(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? p.push(y.__html) : (y.style && Object.assign(d, y.style), y.className && u.push(y.className), y.children && f.push(y.children), y.attrs && Object.assign(c, y.attrs)) : f.push(y));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: d,
    ...c
  }, f];
}
function eo({
  tag: t = "div",
  ...e
}) {
  const [n, s] = wu(e);
  return j(t, n, ...s);
}
function Xi(t) {
  if (Q(t))
    return t;
  if (typeof t == "string")
    return t.startsWith("icon-") || (t = `icon-${t}`), /* @__PURE__ */ m("i", { class: `icon ${t}` });
}
function vu(t) {
  return this.getChildContext = () => t.context, t.children;
}
function _u(t) {
  const e = this, n = t._container;
  e.componentWillUnmount = function() {
    In(null, e._temp), e._temp = null, e._container = null;
  }, e._container && e._container !== n && e.componentWillUnmount(), t._vnode ? (e._temp || (e._container = n, e._temp = {
    nodeType: 1,
    parentNode: n,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(s, i) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), e._container.removeChild(s);
    }
  }), In(
    j(vu, { context: e.context }, t._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function bu(t, e) {
  const n = j(_u, { _vnode: t, _container: e });
  return n.containerInfo = e, n;
}
var vl = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ln = (t, e, n) => (vl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Di = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, cn = (t, e, n, s) => (vl(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), de, pn, fs;
const _l = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    Di(this, de, void 0), Di(this, pn, void 0), Di(this, fs, void 0);
    const { KEY: n, DATA_KEY: s, DEFAULT: i } = this.constructor, r = w(t);
    if (r.data(n))
      throw new Error("[ZUI] The component has been initialized on element.");
    const o = w.guid++;
    cn(this, fs, o), r.data(n, this).attr(s, `${o}`), cn(this, pn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), cn(this, de, { ...i, ...r.dataset() }), this.setOptions(e), this.init(), requestAnimationFrame(() => {
      this.emit("inited", this.options), this.afterInit();
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
  /**
   * Get the component element.
   */
  get element() {
    return ln(this, pn);
  }
  /**
   * Get the component options.
   */
  get options() {
    return ln(this, de);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return ln(this, fs);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return w(this.element);
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
    const { NAMESPACE: t, KEY: e, DATA_KEY: n } = this.constructor;
    this.$element.off(t).removeData(e).attr(n, null), cn(this, de, void 0), cn(this, pn, void 0), this.emit("destroyed");
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && w.extend(ln(this, de), t), ln(this, de);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = w.Event(this.constructor.wrapEventNames(t));
    return this.$element.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e) {
    this.$element.on(this.constructor.wrapEventNames(t), e);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(t, e) {
    this.$element.one(this.constructor.wrapEventNames(t), e);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(t, e) {
    this.$element.off(this.constructor.wrapEventNames(t), e);
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
    return Ut(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Ut(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  static wrapEventNames(t) {
    return t.split(" ").map((e) => e.includes(".") ? e : `${e}${this.NAMESPACE}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(t) {
    return w(t).data(this.KEY);
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
    const n = this.get(t);
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
    return w(t || document).find(`[${this.DATA_KEY}]`).map((e, n) => w(n).data(this.KEY)).get();
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t) {
    return t === void 0 ? this.getAll().sort((e, n) => e.gid - n.gid)[0] : this.get(w(t).closest(`[${this.DATA_KEY}]`));
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    w.fn.extend({
      [t || this.NAME.replace(/(^[A-Z]+)/, (e) => e.toLowerCase())](e, ...n) {
        return this.each((s, i) => {
          var o;
          const r = this.ensure(i, typeof e == "object" ? e : void 0);
          typeof e == "string" && ((o = r[e]) == null || o.call(r, ...n));
        });
      }
    });
  }
};
let Et = _l;
de = /* @__PURE__ */ new WeakMap();
pn = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakMap();
Et.DEFAULT = {};
Et.NAME = _l.name;
class st extends Et {
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
    var e, n;
    (n = (e = this.$) == null ? void 0 : e.componentWillUnmount) == null || n.call(e), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(e) {
    In(
      j(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function xu({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return j(t, {
    className: T(e),
    style: s,
    ...i
  }, n);
}
function bl({
  type: t,
  component: e = "a",
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
    typeof f == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    Xi(l),
    /* @__PURE__ */ m("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    Xi(u)
  ];
  return j(e, {
    className: T(n, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...g,
    ...i
  }, ...v);
}
function ku({
  component: t = "div",
  className: e,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return j(t, {
    className: T(e),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function Su({
  component: t = "div",
  className: e,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return j(t, {
    className: T(e),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function $u({ type: t, ...e }) {
  return /* @__PURE__ */ m(eo, { ...e });
}
function xl({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return j(t, {
    className: T(e),
    style: s,
    ...i
  }, n);
}
const Ji = class extends U {
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
    var t, e;
    (e = (t = this.props).beforeDestroy) == null || e.call(t, { menu: this });
  }
  afterRender(t) {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { menu: this, firstRender: t });
  }
  handleItemClick(t, e, n, s) {
    n && n.call(s.target, s);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: t, index: e, event: s });
  }
  beforeRender() {
    var n;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this));
    const e = (n = t.beforeRender) == null ? void 0 : n.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, n) {
    const { commonItemProps: s, onClickItem: i } = t, r = { key: n, ...e };
    return s && Object.assign(r, s[e.type || "item"]), (i || e.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, e.onClick)), r.className = T(r.className), r;
  }
  renderItem(t, e, n) {
    const s = this.getItemRenderProps(t, e, n), { itemRender: i } = t;
    if (i) {
      if (typeof i == "object") {
        const p = i[e.type || "item"];
        if (p)
          return /* @__PURE__ */ m(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, j);
        if (Q(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...d } = s;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, d.className),
          ...l,
          style: c || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Ji.ItemComponents[r] : o;
    return Object.assign(d, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), t.checkbox && r === "item" && d.checked === void 0 && (d.checked = d.active), this.renderTypedItem(f, {
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
  renderTypedItem(t, e, n) {
    const { children: s, className: i, key: r, ...o } = e;
    return /* @__PURE__ */ m(
      "li",
      {
        className: T("action-menu-item", `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ m(t, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      r
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: e,
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
      activeClass: d,
      activeKey: f,
      ...p
    } = t, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ m(g, { class: T(this.name, i), style: n, ...p, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      o
    ] });
  }
};
let Re = Ji;
Re.ItemComponents = {
  divider: xu,
  item: bl,
  heading: ku,
  space: Su,
  custom: $u,
  basic: xl
};
Re.ROOT_TAG = "menu";
Re.NAME = "action-menu";
class kl extends st {
}
kl.NAME = "ActionMenu";
kl.Component = Re;
function Sl({
  ...t
}) {
  return /* @__PURE__ */ m(bl, { ...t });
}
var $l = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ut = (t, e, n) => ($l(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Pi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Cu = (t, e, n, s) => ($l(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ds, Rt, gn;
let no = class extends Re {
  constructor(e) {
    super(e), Pi(this, ds, /* @__PURE__ */ new Set()), Pi(this, Rt, void 0), Pi(this, gn, (n, s, i) => {
      this.toggleNestedMenu(n, s), i.preventDefault();
    }), Cu(this, Rt, e.nestedShow === void 0), ut(this, Rt) && (this.state = { nestedShow: e.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const e = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, ...o } = e;
    return o;
  }
  renderNestedMenu(e) {
    let { items: n } = e;
    if (!n || (typeof n == "function" && (n = n(e, this)), !n.length))
      return;
    const s = this.constructor, { name: i, controlledMenu: r, nestedShow: o, beforeDestroy: a, beforeRender: l, itemRender: h, activeClass: c, activeKey: u, onClickItem: d, afterRender: f, commonItemProps: p, activeIcon: g } = this.props;
    return /* @__PURE__ */ m(
      s,
      {
        items: n,
        name: i,
        nestedShow: ut(this, Rt) ? this.state.nestedShow : o,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: r || this,
        commonItemProps: p,
        onClickItem: d,
        afterRender: f,
        beforeRender: l,
        beforeDestroy: a,
        itemRender: h,
        activeClass: c,
        activeKey: u,
        activeIcon: g
      }
    );
  }
  isNestedItem(e) {
    return (!e.type || e.type === "item") && !!e.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(e, n) {
  }
  getItemRenderProps(e, n, s) {
    const i = super.getItemRenderProps(e, n, s);
    if (!this.isNestedItem(i))
      return i;
    const r = i.key ?? s;
    ut(this, ds).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ], i.component = Sl), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, gn).bind(this, r, !0),
        onMouseLeave: ut(this, gn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, gn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isNestedMenuShow(e) {
    const n = ut(this, Rt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[e] : !!n;
  }
  toggleNestedMenu(e, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(e, n);
    if (!ut(this, Rt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, ds).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
      n = !i[e];
    else if (!!i[e] == !!n)
      return !1;
    return n ? i[e] = n : delete i[e], this.setState({ nestedShow: { ...i } }), !0;
  }
  showNestedMenu(e) {
    return this.toggleNestedMenu(e, !0);
  }
  hideNestedMenu(e) {
    return this.toggleNestedMenu(e, !1);
  }
  showAllNestedMenu() {
    ut(this, Rt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ut(this, Rt) && this.setState({ nestedShow: !1 });
  }
};
ds = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
gn = /* @__PURE__ */ new WeakMap();
no.ItemComponents = {
  item: Sl
};
class Cl extends st {
}
Cl.NAME = "ActionMenuNested";
Cl.Component = no;
let pi = class extends no {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((s) => s.icon)), e.className = T(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((s) => this.isNestedItem(s)),
      "menu-popup": e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
};
pi.NAME = "menu";
class El extends st {
}
El.NAME = "Menu";
El.Component = pi;
class Vt extends U {
  render() {
    const {
      component: e,
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
      caret: y,
      square: _,
      hint: k,
      ...C
    } = this.props, $ = e || (a ? "a" : "button"), M = g == null || typeof g == "string" && !g.length || u && !f, A = y && M && !p && !v && !o && !u;
    return j(
      $,
      {
        className: T("btn", n, r, {
          "btn-caret": A,
          disabled: h || u,
          active: c,
          loading: u,
          square: _ === void 0 ? !A && !o && M : _
        }, i ? `size-${i}` : ""),
        title: k,
        [$ === "a" ? "href" : "data-url"]: a,
        [$ === "a" ? "target" : "data-target"]: l,
        type: $ === "button" ? s : void 0,
        ...C
      },
      u ? /* @__PURE__ */ m("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : Xi(p),
      M ? null : /* @__PURE__ */ m("span", { className: "text", children: u ? f : g }),
      u ? null : o,
      u ? null : typeof v == "string" ? /* @__PURE__ */ m("i", { class: `icon ${v}` }) : v,
      u ? null : y ? /* @__PURE__ */ m("span", { className: typeof y == "string" ? `caret-${y}` : "caret" }) : null
    );
  }
}
function Eu({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Vt, { type: n, ...s });
}
function Xn(t) {
  return t.split("-")[1];
}
function so(t) {
  return t === "y" ? "height" : "width";
}
function _e(t) {
  return t.split("-")[0];
}
function Jn(t) {
  return ["top", "bottom"].includes(_e(t)) ? "x" : "y";
}
function ua(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Jn(e), l = so(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (_e(e)) {
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
  switch (Xn(e)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Mu = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: c, y: u } = ua(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: y } = a[g], { x: _, y: k, data: C, reset: $ } = await y({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    c = _ ?? c, u = k ?? u, f = { ...f, [v]: { ...f[v], ...C } }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (d = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : $.rects), { x: c, y: u } = ua(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function Ml(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Ps(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Tl(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = t, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = Ml(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], v = Ps(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), y = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, C = Ps(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: y, offsetParent: _, strategy: l }) : y);
  return { top: (v.top - C.top + p.top) / k.y, bottom: (C.bottom - v.bottom + p.bottom) / k.y, left: (v.left - C.left + p.left) / k.x, right: (C.right - v.right + p.right) / k.x };
}
const Tu = Math.min, Ru = Math.max;
function Zi(t, e, n) {
  return Ru(t, Tu(e, n));
}
const Qi = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: l, elements: h } = e;
  if (n == null)
    return {};
  const c = Ml(s), u = { x: i, y: r }, d = Jn(o), f = so(d), p = await l.getDimensions(n), g = d === "y", v = g ? "top" : "left", y = g ? "bottom" : "right", _ = g ? "clientHeight" : "clientWidth", k = a.reference[f] + a.reference[d] - u[d] - a.floating[f], C = u[d] - a.reference[d], $ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let M = $ ? $[_] : 0;
  M && await (l.isElement == null ? void 0 : l.isElement($)) || (M = h.floating[_] || a.floating[f]);
  const A = k / 2 - C / 2, N = c[v], O = M - p[f] - c[y], b = M / 2 - p[f] / 2 + A, R = Zi(N, b, O), W = Xn(o) != null && b != R && a.reference[f] / 2 - (b < N ? c[v] : c[y]) - p[f] / 2 < 0;
  return { [d]: u[d] - (W ? b < N ? N - b : O - b : 0), data: { [d]: R, centerOffset: b - R } };
} }), Au = ["top", "right", "bottom", "left"];
Au.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Nu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Os(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Nu[e]);
}
function Lu(t, e, n) {
  n === void 0 && (n = !1);
  const s = Xn(t), i = Jn(t), r = so(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = Os(o)), { main: o, cross: Os(o) };
}
const Wu = { start: "end", end: "start" };
function Oi(t) {
  return t.replace(/start|end/g, (e) => Wu[e]);
}
const gi = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = t, v = _e(s), y = _e(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = u || (y || !p ? [Os(o)] : function(R) {
      const W = Os(R);
      return [Oi(R), W, Oi(W)];
    }(o));
    u || f === "none" || k.push(...function(R, W, z, H) {
      const D = Xn(R);
      let V = function(Mt, on, es) {
        const an = ["left", "right"], ns = ["right", "left"], Ti = ["top", "bottom"], yh = ["bottom", "top"];
        switch (Mt) {
          case "top":
          case "bottom":
            return es ? on ? ns : an : on ? an : ns;
          case "left":
          case "right":
            return on ? Ti : yh;
          default:
            return [];
        }
      }(_e(R), z === "start", H);
      return D && (V = V.map((Mt) => Mt + "-" + D), W && (V = V.concat(V.map(Oi)))), V;
    }(o, p, f, _));
    const C = [o, ...k], $ = await Tl(e, g), M = [];
    let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push($[v]), c) {
      const { main: R, cross: W } = Lu(s, r, _);
      M.push($[R], $[W]);
    }
    if (A = [...A, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var N, O;
      const R = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, W = C[R];
      if (W)
        return { data: { index: R, overflows: A }, reset: { placement: W } };
      let z = (O = A.filter((H) => H.overflows[0] <= 0).sort((H, D) => H.overflows[1] - D.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!z)
        switch (d) {
          case "bestFit": {
            var b;
            const H = (b = A.map((D) => [D.placement, D.overflows.filter((V) => V > 0).reduce((V, Mt) => V + Mt, 0)]).sort((D, V) => D[1] - V[1])[0]) == null ? void 0 : b[0];
            H && (z = H);
            break;
          }
          case "initialPlacement":
            z = o;
        }
      if (s !== z)
        return { reset: { placement: z } };
    }
    return {};
  } };
}, io = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = _e(a), d = Xn(a), f = Jn(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: y, crossAxis: _, alignmentAxis: k } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof k == "number" && (_ = d === "end" ? -1 * k : k), f ? { x: _ * g, y: y * p } : { x: y * p, y: _ * g };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Du(t) {
  return t === "x" ? "y" : "x";
}
const tr = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: s, placement: i } = e, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: y, y: _ } = v;
      return { x: y, y: _ };
    } }, ...l } = t, h = { x: n, y: s }, c = await Tl(e, l), u = Jn(_e(i)), d = Du(u);
    let f = h[u], p = h[d];
    if (r) {
      const v = u === "y" ? "bottom" : "right";
      f = Zi(f + c[u === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = d === "y" ? "bottom" : "right";
      p = Zi(p + c[d === "y" ? "top" : "left"], p, p - c[v]);
    }
    const g = a.fn({ ...e, [u]: f, [d]: p });
    return { ...g, data: { x: g.x - n, y: g.y - s } };
  } };
};
function rt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pt(t) {
  return rt(t).getComputedStyle(t);
}
function Rl(t) {
  return t instanceof rt(t).Node;
}
function oe(t) {
  return Rl(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ss;
function Al() {
  if (ss)
    return ss;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ss = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ss) : navigator.userAgent;
}
function mt(t) {
  return t instanceof rt(t).HTMLElement;
}
function ot(t) {
  return t instanceof rt(t).Element;
}
function fa(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof rt(t).ShadowRoot || t instanceof ShadowRoot;
}
function Hn(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = pt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Pu(t) {
  return ["table", "td", "th"].includes(oe(t));
}
function er(t) {
  const e = /firefox/i.test(Al()), n = pt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function nr() {
  return /^((?!chrome|android).)*safari/i.test(Al());
}
function mi(t) {
  return ["html", "body", "#document"].includes(oe(t));
}
const da = Math.min, En = Math.max, Is = Math.round;
function Nl(t) {
  const e = pt(t);
  let n = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = mt(t), r = i ? t.offsetWidth : n, o = i ? t.offsetHeight : s, a = Is(n) !== r || Is(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, fallback: a };
}
function Ll(t) {
  return ot(t) ? t : t.contextElement;
}
const Wl = { x: 1, y: 1 };
function ze(t) {
  const e = Ll(t);
  if (!mt(e))
    return Wl;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = Nl(e);
  let o = (r ? Is(n.width) : n.width) / s, a = (r ? Is(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function $e(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = Ll(t);
  let l = Wl;
  e && (s ? ot(s) && (l = ze(s)) : l = ze(t));
  const h = a ? rt(a) : window, c = nr() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const g = rt(a), v = s && ot(s) ? rt(s) : s;
    let y = g.frameElement;
    for (; y && s && v !== g; ) {
      const _ = ze(y), k = y.getBoundingClientRect(), C = getComputedStyle(y);
      k.x += (y.clientLeft + parseFloat(C.paddingLeft)) * _.x, k.y += (y.clientTop + parseFloat(C.paddingTop)) * _.y, u *= _.x, d *= _.y, f *= _.x, p *= _.y, u += k.x, d += k.y, y = rt(y).frameElement;
    }
  }
  return Ps({ width: f, height: p, x: u, y: d });
}
function se(t) {
  return ((Rl(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function yi(t) {
  return ot(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Dl(t) {
  return $e(se(t)).left + yi(t).scrollLeft;
}
function sn(t) {
  if (oe(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || fa(t) && t.host || se(t);
  return fa(e) ? e.host : e;
}
function Pl(t) {
  const e = sn(t);
  return mi(e) ? e.ownerDocument.body : mt(e) && Hn(e) ? e : Pl(e);
}
function Mn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = Pl(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = rt(s);
  return i ? e.concat(r, r.visualViewport || [], Hn(s) ? s : []) : e.concat(s, Mn(s));
}
function pa(t, e, n) {
  let s;
  if (e === "viewport")
    s = function(o, a) {
      const l = rt(o), h = se(o), c = l.visualViewport;
      let u = h.clientWidth, d = h.clientHeight, f = 0, p = 0;
      if (c) {
        u = c.width, d = c.height;
        const g = nr();
        (!g || g && a === "fixed") && (f = c.offsetLeft, p = c.offsetTop);
      }
      return { width: u, height: d, x: f, y: p };
    }(t, n);
  else if (e === "document")
    s = function(o) {
      const a = se(o), l = yi(o), h = o.ownerDocument.body, c = En(a.scrollWidth, a.clientWidth, h.scrollWidth, h.clientWidth), u = En(a.scrollHeight, a.clientHeight, h.scrollHeight, h.clientHeight);
      let d = -l.scrollLeft + Dl(o);
      const f = -l.scrollTop;
      return pt(h).direction === "rtl" && (d += En(a.clientWidth, h.clientWidth) - c), { width: c, height: u, x: d, y: f };
    }(se(t));
  else if (ot(e))
    s = function(o, a) {
      const l = $e(o, !0, a === "fixed"), h = l.top + o.clientTop, c = l.left + o.clientLeft, u = mt(o) ? ze(o) : { x: 1, y: 1 };
      return { width: o.clientWidth * u.x, height: o.clientHeight * u.y, x: c * u.x, y: h * u.y };
    }(e, n);
  else {
    const o = { ...e };
    if (nr()) {
      var i, r;
      const a = rt(t);
      o.x -= ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0, o.y -= ((r = a.visualViewport) == null ? void 0 : r.offsetTop) || 0;
    }
    s = o;
  }
  return Ps(s);
}
function Ol(t, e) {
  const n = sn(t);
  return !(n === e || !ot(n) || mi(n)) && (pt(n).position === "fixed" || Ol(n, e));
}
function ga(t, e) {
  return mt(t) && pt(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function ma(t, e) {
  const n = rt(t);
  if (!mt(t))
    return n;
  let s = ga(t, e);
  for (; s && Pu(s) && pt(s).position === "static"; )
    s = ga(s, e);
  return s && (oe(s) === "html" || oe(s) === "body" && pt(s).position === "static" && !er(s)) ? n : s || function(i) {
    let r = sn(i);
    for (; mt(r) && !mi(r); ) {
      if (er(r))
        return r;
      r = sn(r);
    }
    return null;
  }(t) || n;
}
function Ou(t, e, n) {
  const s = mt(e), i = se(e), r = $e(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((oe(e) !== "body" || Hn(i)) && (o = yi(e)), mt(e)) {
      const l = $e(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = Dl(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
const Iu = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Mn(h).filter((v) => ot(v) && oe(v) !== "body"), f = null;
    const p = pt(h).position === "fixed";
    let g = p ? sn(h) : h;
    for (; ot(g) && !mi(g); ) {
      const v = pt(g), y = er(g);
      y || v.position !== "fixed" || (f = null), (p ? !y && !f : !y && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Hn(g) && !y && Ol(h, g)) ? d = d.filter((_) => _ !== g) : f = v, g = sn(g);
    }
    return c.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = pa(e, c, i);
    return h.top = En(u.top, h.top), h.right = da(u.right, h.right), h.bottom = da(u.bottom, h.bottom), h.left = En(u.left, h.left), h;
  }, pa(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = mt(n), r = se(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((oe(n) !== "body" || Hn(r)) && (o = yi(n)), mt(n))) {
    const h = $e(n);
    a = ze(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + l.x, y: e.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: ot, getDimensions: function(t) {
  return Nl(t);
}, getOffsetParent: ma, getDocumentElement: se, getScale: ze, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || ma, r = this.getDimensions;
  return { reference: Ou(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => pt(t).direction === "rtl" };
function ro(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i || r ? [...ot(t) ? Mn(t) : t.contextElement ? Mn(t.contextElement) : [], ...Mn(e)] : [];
  l.forEach((d) => {
    const f = !ot(d) && d.toString().includes("V");
    !i || a && !f || d.addEventListener("scroll", n, { passive: !0 }), r && d.addEventListener("resize", n);
  });
  let h, c = null;
  o && (c = new ResizeObserver(() => {
    n();
  }), ot(t) && !a && c.observe(t), ot(t) || !t.contextElement || a || c.observe(t.contextElement), c.observe(e));
  let u = a ? $e(t) : null;
  return a && function d() {
    const f = $e(t);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, h = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    l.forEach((f) => {
      i && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (d = c) == null || d.disconnect(), c = null, a && cancelAnimationFrame(h);
  };
}
const wi = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Iu, ...n }, r = { ...i.platform, _c: s };
  return Mu(t, e, { ...i, platform: r });
};
let Hu = class extends pi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  componentWillUnmount() {
    super.componentWillUnmount();
  }
  getPopperOptions() {
    return {
      middleware: [gi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  createPopper() {
    const e = this.getPopperOptions();
    this.ref.current && wi(this.getPopperElement(), this.ref.current, e).then(({ x: n, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this.createPopper();
  }
  beforeRender() {
    const e = super.beforeRender();
    return e.className = T(e.className, "menu-popup"), e;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var oo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Tt = (t, e, n) => (oo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ae = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, is = (t, e, n, s) => (oo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ya = (t, e, n) => (oo(t, e, "access private method"), n), Yt, mn, ps, gs, sr, Il, ir, Hl;
const Ii = "show", Bu = '[data-toggle="contextmenu"]';
class _t extends Et {
  constructor() {
    super(...arguments), Ae(this, sr), Ae(this, ir), Ae(this, Yt, void 0), Ae(this, mn, void 0), Ae(this, ps, void 0), Ae(this, gs, void 0);
  }
  get isShown() {
    return Tt(this, Yt) && w(Tt(this, Yt)).hasClass(Ii);
  }
  get menu() {
    return Tt(this, Yt) || this.ensureMenu();
  }
  get trigger() {
    return Tt(this, ps) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  show(e) {
    return this.isShown || (is(this, ps, e), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (w(this.menu).addClass(Ii), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = Tt(this, gs)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (w(Tt(this, Yt)).removeClass(Ii), this.emit("hidden"), !0);
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    var e;
    super.destroy(), this.hide(), (e = Tt(this, Yt)) == null || e.remove();
  }
  ensureMenu() {
    const { $element: e } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = w(`<div class="${n}" />`).appendTo("body");
    else if (e.length) {
      const i = e.attr("href") || e.dataset("target") || "";
      if (i[0] === "#" && (s = w(document).find(i)), !(s != null && s.length)) {
        const r = e.next();
        r.hasClass(n) ? s = r : s = e.parent().find(`.${n}`);
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
    }), is(this, Yt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: e, strategy: n } = this.options, s = {
      middleware: [],
      placement: e,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(gi())), s;
  }
  createPopper() {
    const e = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    is(this, gs, ro(n, s, () => {
      wi(n, s, e).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        w(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = ya(this, sr, Il).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: u } = o.arrow;
          w(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ya(this, ir, Hl).call(this, l)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: e, items: n } = this.options;
    let s = n || (e == null ? void 0 : e.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...e,
        items: s
      };
  }
  renderMenu() {
    const e = this.getMenuOptions();
    return !e || this.emit("updateMenu", e, this.trigger).defaultPrevented ? !1 : (In(j(Hu, e), this.menu), !0);
  }
  getPopperElement() {
    return Tt(this, mn) || is(this, mn, {
      getBoundingClientRect: () => {
        const { trigger: e } = this;
        if (e instanceof MouseEvent) {
          const { clientX: n, clientY: s } = e;
          return {
            width: 0,
            height: 0,
            top: s,
            right: n,
            bottom: s,
            left: n
          };
        }
        return e instanceof HTMLElement ? e.getBoundingClientRect() : e;
      },
      contextElement: this.element
    }), Tt(this, mn);
  }
  static clear(e) {
    var a, l;
    e instanceof Event && (e = { event: e });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = e || {};
    if (n && i && ((l = (a = n.target).closest) != null && l.call(a, i)) || n && n.button === 2)
      return;
    const r = this.getAll(), o = new Set(s || []);
    for (const h of r)
      o.has(h.element) || h.hide();
  }
  static show(e) {
    const { event: n, ...s } = e, i = this.ensure(document.body);
    return i.setOptions(s), i.show(n), n instanceof Event && n.stopPropagation(), i;
  }
  static hide(e) {
    const n = this.query(e);
    return n == null || n.hide(), n;
  }
}
Yt = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
sr = /* @__PURE__ */ new WeakSet();
Il = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
ir = /* @__PURE__ */ new WeakSet();
Hl = function(t) {
  const e = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${t[0].toUpperCase()}${t.substring(1)}Style`]: "none",
    [`border${e[t]}Style`]: "none"
  };
};
_t.MENU_CLASS = "contextmenu";
_t.NAME = "ContextMenu";
_t.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
};
w(document).on("contextmenu", (t) => {
  const e = w(t.target);
  if (e.closest(`.${_t.MENU_CLASS}`).length)
    return;
  const n = e.closest(Bu).not(":disabled,.disabled");
  n.length && (_t.ensure(n).show(t), t.preventDefault());
}).on("click", _t.clear.bind(_t));
var ao = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, yn = (t, e, n) => (ao(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, rr = (t, e, n, s) => (ao(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), zu = (t, e, n) => (ao(t, e, "access private method"), n), Tn, wn, Hs, or, Bl;
const wa = '[data-toggle="dropdown"]', zl = class extends _t {
  constructor() {
    super(...arguments), rs(this, or), rs(this, Tn, !1), rs(this, wn, 0), this.hideLater = () => {
      yn(this, Hs).call(this), rr(this, wn, window.setTimeout(this.hide.bind(this), 100));
    }, rs(this, Hs, () => {
      clearTimeout(yn(this, wn)), rr(this, wn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && zl.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const n = super.show(t);
    return n && (!yn(this, Tn) && this.isHover && zu(this, or, Bl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    yn(this, Tn) && w(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((n = t.middleware) == null || n.push(io(e)), (s = t.middleware) == null || s.push(Qi({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const e = this.getArrowSize(), n = w("<div />").css({
        position: "absolute",
        width: `${e}px`,
        height: `${e}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0], w(t).append(n);
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: e } = t;
      t.afterRender = (...n) => {
        this.arrowEl && w(this.menu).find(".menu").append(this.arrowEl), e == null || e(...n);
      };
    }
    return t;
  }
};
let ie = zl;
Tn = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
Hs = /* @__PURE__ */ new WeakMap();
or = /* @__PURE__ */ new WeakSet();
Bl = function() {
  w(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, yn(this, Hs)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), rr(this, Tn, !0);
};
ie.MENU_CLASS = "dropdown-menu";
ie.NAME = "Dropdown";
ie.DEFAULT = {
  ..._t.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
w(document).on("click", function(t) {
  const e = w(t.target).closest(wa).not(":disabled,.disabled");
  if (e.length) {
    const n = ie.ensure(e);
    n.options.trigger === "click" && n.toggle();
  } else
    ie.clear({ event: t });
}).on("mouseover", function(t) {
  var s, i;
  const e = (i = (s = t.target).closest) == null ? void 0 : i.call(s, wa);
  if (!e)
    return;
  const n = ie.ensure(e);
  n.isHover && n.show();
});
let os = 0;
window.addEventListener("scroll", (t) => {
  os && clearTimeout(os), os = window.setTimeout(() => {
    ie.clear({ event: t }), os = 0;
  }, 50);
}, !0);
var Vn, je;
class Fu extends U {
  constructor(n) {
    var s;
    super(n);
    L(this, Vn, void 0);
    L(this, je, St());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, je);
  }
  get triggerElement() {
    return E(this, je).current;
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
    }), I(this, Vn, ie.ensure(this.triggerElement, {
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
    (n = E(this, Vn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, je)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...s, children: n });
  }
}
Vn = new WeakMap(), je = new WeakMap();
class Uu extends Fu {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const o = (n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement) || "";
      i = (o.includes("top") ? "up" : o.includes("bottom") ? "down" : o) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ m(Vt, { ...s });
  }
}
function Fl({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Uu, { type: n, ...s });
}
let Ul = class extends U {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, n, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var s;
    const e = { ...this.props }, n = (s = e.beforeRender) == null ? void 0 : s.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: s = n, ...i } = e;
    return /* @__PURE__ */ m(Vt, { ...i }, s);
  }
  renderItem(e, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = e, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, j);
      if (Q(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const e = this.beforeRender(), {
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
    } = e;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function Vu({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Ul, { type: n, ...s });
}
let $t = class extends Re {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = T(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: T(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ m(e, { ...a });
  }
};
$t.ItemComponents = {
  item: Eu,
  dropdown: Fl,
  "btn-group": Vu
};
$t.ROOT_TAG = "nav";
$t.NAME = "toolbar";
$t.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function ju({
  className: t,
  style: e,
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
  a === !0 ? u = /* @__PURE__ */ m(Vt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : Q(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ m(Vt, { ...a, onClick: l }));
  const d = Q(n) ? n : n ? /* @__PURE__ */ m($t, { ...n }) : null;
  return /* @__PURE__ */ m("div", { className: T("alert", t), style: e, ...c, children: [
    Q(h) ? h : typeof h == "string" ? /* @__PURE__ */ m("i", { className: `icon ${h}` }) : null,
    Q(i) ? i : /* @__PURE__ */ m("div", { className: T("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ m("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    o
  ] });
}
function qu(t) {
  if (t === "center")
    return "fade-from-center";
  if (t) {
    if (t.includes("top"))
      return "fade-from-top";
    if (t.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let Gu = class extends U {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  render() {
    const {
      afterRender: e,
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
      ju,
      {
        className: T("messager", l, i, o === !0 ? qu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Yu = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ku = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, hn = (t, e, n) => (Yu(t, e, "access private method"), n), pe, We;
class lo extends st {
  constructor() {
    super(...arguments), Ku(this, pe), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: e }) => {
      e && this.show();
      const { margin: n } = this.options;
      n && this.$element.css("margin", `${n}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (e) => {
      w(e.target).closest('.alert-close,[data-dismiss="messager"]').length && (e.preventDefault(), e.stopPropagation(), this.hide());
    });
  }
  setOptions(e) {
    return e = super.setOptions(e), {
      ...e,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), hn(this, pe, We).call(this, () => {
      this._show = !0, this.render(), hn(this, pe, We).call(this, () => {
        this.emit("shown");
        const { time: e } = this.options;
        e && hn(this, pe, We).call(this, () => this.hide(), e);
      });
    }, 100);
  }
  hide() {
    this._show && hn(this, pe, We).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), hn(this, pe, We).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
pe = /* @__PURE__ */ new WeakSet();
We = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
};
lo.NAME = "MessagerItem";
lo.Component = Gu;
var co = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, be = (t, e, n) => (co(t, e, "read from private field"), n ? n.call(t) : e.get(t)), as = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ms = (t, e, n, s) => (co(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Vl = (t, e, n) => (co(t, e, "access private method"), n), Fe, Ot, ar, jl, ho, ql;
const Gl = class extends Et {
  constructor() {
    super(...arguments), as(this, ar), as(this, ho), as(this, Fe, void 0), as(this, Ot, void 0);
  }
  get isShown() {
    var t;
    return !!((t = be(this, Ot)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Vl(this, ar, jl).call(this).show();
  }
  hide() {
    var t;
    (t = be(this, Ot)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, s = Gl.ensure(e || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let uo = Gl;
Fe = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
ar = /* @__PURE__ */ new WeakSet();
jl = function() {
  if (be(this, Ot))
    be(this, Ot).setOptions(this.options);
  else {
    const t = Vl(this, ho, ql).call(this), e = new lo(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), ms(this, Fe, void 0), ms(this, Ot, void 0);
    }), ms(this, Ot, e);
  }
  return be(this, Ot);
};
ho = /* @__PURE__ */ new WeakSet();
ql = function() {
  if (be(this, Fe))
    return be(this, Fe);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = w(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let n = e.find(`#messager-${this.gid}`);
  return n.length || (n = w(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), ms(this, Fe, n[0])), n[0];
};
uo.NAME = "messager";
uo.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
w(document).on("zui.messager.show", (t, e) => {
  e && uo.show(e);
});
let fo = class extends U {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ m("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - e) / 100, "stroke-width": s }),
      /* @__PURE__ */ m("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(e) })
    ] });
  }
};
fo.NAME = "zui.progress-circle";
fo.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Yl extends st {
}
Yl.NAME = "ProgressCircle";
Yl.Component = fo;
let Xu = class extends U {
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
      component: e,
      className: n,
      children: s,
      text: i,
      icon: r,
      surffixIcon: o,
      disabled: a,
      defaultChecked: l,
      onChange: h,
      ...c
    } = this.props, u = this.state.checked ? 1 : 0, d = e || "div", f = typeof r == "string" ? /* @__PURE__ */ m("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ m("i", { class: `icon ${o}` }) : o, g = [
      /* @__PURE__ */ m("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ m("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return j(
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
class Kl extends st {
}
Kl.NAME = "Switch";
Kl.Component = Xu;
/*! js-cookie v3.0.1 | MIT */
function ls(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var s in n)
      t[s] = n[s];
  }
  return t;
}
var Ju = {
  read: function(t) {
    return t[0] === '"' && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(t) {
    return encodeURIComponent(t).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function lr(t, e) {
  function n(i, r, o) {
    if (!(typeof document > "u")) {
      o = ls({}, e, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var l in o)
        o[l] && (a += "; " + l, o[l] !== !0 && (a += "=" + o[l].split(";")[0]));
      return document.cookie = i + "=" + t.write(r, i) + a;
    }
  }
  function s(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var r = document.cookie ? document.cookie.split("; ") : [], o = {}, a = 0; a < r.length; a++) {
        var l = r[a].split("="), h = l.slice(1).join("=");
        try {
          var c = decodeURIComponent(l[0]);
          if (o[c] = t.read(h, c), i === c)
            break;
        } catch {
        }
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: n,
      get: s,
      remove: function(i, r) {
        n(
          i,
          "",
          ls({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return lr(this.converter, ls({}, this.attributes, i));
      },
      withConverter: function(i) {
        return lr(ls({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Zu = lr(Ju, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Zu });
var Pt;
class Qu {
  constructor(e = "") {
    L(this, Pt, void 0);
    typeof e == "object" ? I(this, Pt, e) : I(this, Pt, document.appendChild(document.createComment(e)));
  }
  on(e, n, s) {
    E(this, Pt).addEventListener(e, n, s);
  }
  once(e, n, s) {
    E(this, Pt).addEventListener(e, n, { once: !0, ...s });
  }
  off(e, n, s) {
    E(this, Pt).removeEventListener(e, n, s);
  }
  emit(e) {
    return E(this, Pt).dispatchEvent(e), e;
  }
}
Pt = new WeakMap();
const va = /* @__PURE__ */ new Set([
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
class Xl extends Qu {
  on(e, n, s) {
    super.on(e, n, s);
  }
  off(e, n, s) {
    super.off(e, n, s);
  }
  once(e, n, s) {
    super.once(e, n, s);
  }
  emit(e, n) {
    return typeof e == "string" && (va.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Xl.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (va.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
let vi = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var jn, Zt, wt, qe, Ge, ys;
const Jo = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    L(this, Ge);
    L(this, jn, void 0);
    L(this, Zt, void 0);
    L(this, wt, void 0);
    L(this, qe, void 0);
    I(this, jn, n), I(this, Zt, `ZUI_STORE:${e ?? vi()}`), I(this, wt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, jn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, qe) || I(this, qe, new Jo(E(this, Zt), "session")), E(this, qe));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const s = E(this, wt).getItem(et(this, Ge, ys).call(this, e));
    return typeof s == "string" ? JSON.parse(s) : s ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, n) {
    if (n == null)
      return this.remove(e);
    E(this, wt).setItem(et(this, Ge, ys).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    E(this, wt).removeItem(et(this, Ge, ys).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < E(this, wt).length; n++) {
      const s = E(this, wt).key(n);
      if (s != null && s.startsWith(E(this, Zt))) {
        const i = E(this, wt).getItem(s);
        typeof i == "string" && e(s.substring(E(this, Zt).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((n, s) => {
      e[n] = s;
    }), e;
  }
};
let Bs = Jo;
jn = new WeakMap(), Zt = new WeakMap(), wt = new WeakMap(), qe = new WeakMap(), Ge = new WeakSet(), ys = function(e) {
  return `${E(this, Zt)}:${e}`;
};
const tf = new Bs("DEFAULT");
function ef(t, e = "local") {
  return new Bs(t, e);
}
Object.assign(tf, { create: ef });
function nf(t) {
  if (t.indexOf("#") === 0 && (t = t.slice(1)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6)
    throw new Error(`Invalid HEX color "${t}".`);
  return [
    parseInt(t.slice(0, 2), 16),
    // r
    parseInt(t.slice(2, 4), 16),
    // g
    parseInt(t.slice(4, 6), 16)
    // b
  ];
}
function sf(t) {
  const [e, n, s] = typeof t == "string" ? nf(t) : t;
  return e * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function _a(t, e) {
  return sf(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function ba(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function rf(t, e, n) {
  t = t % 360 / 360, e = ba(e), n = ba(n);
  const s = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function of(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function af(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t[0].toUpperCase() : t.length <= e ? t : t.substring(0, e);
}
let Jl = class extends U {
  render() {
    const {
      className: e,
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
    } = this.props, y = ["avatar", e], _ = { ...n, background: o, color: a };
    let k = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (y.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? y.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : y.push(`rounded-${r}`));
    let C;
    if (u)
      y.push("has-img"), C = /* @__PURE__ */ m("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const $ = af(l, c);
      if (y.push("has-text", `has-text-${$.length}`), o)
        !a && o && (_.color = _a(o));
      else {
        const A = h ?? l, N = (typeof A == "number" ? A : of(A)) * d % 360;
        if (_.background = `hsl(${N},${f * 100}%,${p * 100}%)`, !a) {
          const O = rf(N, f, p);
          _.color = _a(O);
        }
      }
      let M;
      k && k < 14 * $.length && (M = { transform: `scale(${k / (14 * $.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ m("div", { "data-actualSize": k, className: "avatar-text", style: M, children: $ });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: T(y),
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
class Zl extends st {
}
Zl.NAME = "Avatar";
Zl.Component = Jl;
class Ql extends st {
}
Ql.NAME = "BtnGroup";
Ql.Component = Ul;
var po = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ye = (t, e, n) => (po(t, e, "read from private field"), n ? n.call(t) : e.get(t)), un = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Rn = (t, e, n, s) => (po(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Hi = (t, e, n) => (po(t, e, "access private method"), n), Oe, ws, ge, cr, vn, vs;
const Bi = "show", xa = "in", lf = '[data-dismiss="modal"]', _s = class extends Et {
  constructor() {
    super(...arguments), un(this, vn), un(this, Oe, 0), un(this, ws, void 0), un(this, ge, void 0), un(this, cr, (t) => {
      const e = t.target;
      (e.closest(lf) || this.options.backdrop === !0 && !e.closest(".modal-dialog") && e.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Bi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", ye(this, cr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const e = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const n = t.clientWidth, s = t.clientHeight;
          (!ye(this, ge) || ye(this, ge)[0] !== n || ye(this, ge)[1] !== s) && (Rn(this, ge, [n, s]), this.layout());
        });
        e.observe(t), Rn(this, ws, e);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = ye(this, ws)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: e } = this, { animation: n, backdrop: s, className: i, style: r } = this.options;
    return w(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Bi, i).css({
      zIndex: `${_s.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Hi(this, vn, vs).call(this, () => {
      w(e).addClass(xa), Hi(this, vn, vs).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (w(this.modalElement).removeClass(xa), this.emit("hide"), Hi(this, vn, vs).call(this, () => {
      w(this.modalElement).removeClass(Bi), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.isShown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    e = e ?? this.options.size, w(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof e == "object" ? (s.width = e.width, s.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? w(n).attr("data-size", e) : e && (s.width = e), w(n).css(s), t = t ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Rn(this, ge, [i, r]), typeof t == "function" && (t = t({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (o.alignSelf = "flex-start", o.top = t) : typeof t == "object" && t ? (o.alignSelf = "flex-start", Object.assign(o, t)) : t === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : t === "bottom" ? o.alignSelf = "flex-end" : t === "top" ? o.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (o.alignSelf = "flex-start", o.top = t), w(n).css(o), w(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(t) {
    var e;
    (e = _s.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = _s.query(t)) == null || e.show();
  }
};
let he = _s;
Oe = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
ge = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakMap();
vn = /* @__PURE__ */ new WeakSet();
vs = function(t, e) {
  ye(this, Oe) && (clearTimeout(ye(this, Oe)), Rn(this, Oe, 0)), t && (this.options.animation ? Rn(this, Oe, window.setTimeout(t, e ?? this.options.transTime)) : t());
};
he.NAME = "Modal";
he.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
he.zIndex = 2e3;
w(window).on("resize", () => {
  he.getAll().forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
w(document).on("zui.modal.hide", (t, e) => {
  he.hide(e == null ? void 0 : e.target);
});
class tc extends U {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  renderHeader() {
    const {
      header: e,
      title: n
    } = this.props;
    return Q(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-header", children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : Q(e) ? e : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ m($t, { ...e }) : null,
      n ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? Q(e) ? e : /* @__PURE__ */ m("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return Q(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-footer", children: n ? /* @__PURE__ */ m($t, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ m("div", { className: T("modal-dialog", e), style: n, children: /* @__PURE__ */ m("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
tc.defaultProps = { closeBtn: !0 };
var Ye, Ke, Xe;
class cf extends U {
  constructor() {
    super(...arguments);
    L(this, Ye, void 0);
    L(this, Ke, void 0);
    L(this, Xe, void 0);
    I(this, Ye, St()), this.state = {}, I(this, Xe, () => {
      var i, r;
      const n = (r = (i = E(this, Ye).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = E(this, Ke);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), I(this, Ke, s);
    });
  }
  componentDidMount() {
    E(this, Xe).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, Ke)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, Ye),
        onLoad: E(this, Xe)
      }
    );
  }
}
Ye = new WeakMap(), Ke = new WeakMap(), Xe = new WeakMap();
var go = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ne = (t, e, n) => (go(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Le = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, fn = (t, e, n, s) => (go(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ie = (t, e, n) => (go(t, e, "access private method"), n), bs, xs, At, Bn, _i, hr, ec, ks, ur;
function hf(t, e) {
  const { custom: n, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function uf(t, e) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = e, c = await (await fetch(s, i)).text();
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
    body: n === "html" ? /* @__PURE__ */ m(wl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function ff(t, e) {
  const { url: n, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ m(cf, { url: n })
  };
}
const df = {
  custom: hf,
  ajax: uf,
  iframe: ff
}, Kt = class extends he {
  constructor() {
    super(...arguments), Le(this, Bn), Le(this, hr), Le(this, ks), Le(this, bs, void 0), Le(this, xs, void 0), Le(this, At, void 0);
  }
  get id() {
    return Ne(this, xs);
  }
  get loading() {
    var t;
    return (t = this.modalElement) == null ? void 0 : t.classList.contains(Kt.LOADING_CLASS);
  }
  get modalElement() {
    let t = Ne(this, bs);
    if (!t) {
      const { id: e } = this;
      t = w(this.element).find(`#${e}`)[0], t || (t = w("<div>").attr("id", e).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), fn(this, bs, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), fn(this, xs, this.options.id || `modal-${vi()}`);
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Ne(this, At) && clearTimeout(Ne(this, At));
    const { modalElement: t, options: e } = this, { type: n, loadTimeout: s } = e, i = df[n];
    if (!i)
      return console.warn(`Modal: Cannot build modal with type "${n}"`), !1;
    t.classList.add(Kt.LOADING_CLASS), await Ie(this, hr, ec).call(this), s && fn(this, At, window.setTimeout(() => {
      fn(this, At, 0), Ie(this, ks, ur).call(this, this.options.timeoutTip);
    }, s));
    const r = await i.call(this, t, e);
    return r === !1 ? await Ie(this, ks, ur).call(this, this.options.failedTip) : r && typeof r == "object" && await Ie(this, Bn, _i).call(this, r), Ne(this, At) && (clearTimeout(Ne(this, At)), fn(this, At, 0)), t.classList.remove(Kt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...s } = t, i = new Kt(n, { show: !0, ...s });
      i.one("hidden", () => e(i)), i.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, ...l } = t;
    let h = /* @__PURE__ */ m("div", { children: n });
    s ? h = /* @__PURE__ */ m("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ m("div", { className: `icon ${s} ${i}` }),
      h
    ] }) : h = /* @__PURE__ */ m("div", { className: "modal-body", children: h });
    const c = [];
    (Array.isArray(r) ? r : [r]).forEach((f) => {
      f = {
        ...typeof f == "string" ? { key: f } : f
      }, typeof f.key == "string" && (f.text || (f.text = Ut.getLang(f.key, f.key)), f.btnType || (f.btnType = `btn-wide ${f.key === "confirm" ? "primary" : "btn-default"}`)), f && c.push(f);
    }, []);
    let u;
    const d = c.length ? {
      gap: 4,
      items: c,
      onClickItem: ({ item: f, event: p }) => {
        const g = Kt.query(p.target);
        u = f.key, (o == null ? void 0 : o(f, g)) !== !1 && g && g.hide();
      }
    } : void 0;
    return Kt.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: d, ...typeof a == "function" ? a() : a },
      ...l
    }).then(() => u);
  }
  static confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...s } = t;
    return Kt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (i, r) => {
        n == null || n(i.key === "confirm", r), e == null || e(i, r);
      },
      ...s
    }).then((i) => i === "confirm");
  }
};
let mo = Kt;
bs = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakSet();
_i = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], w(this.modalElement).runJS(), e();
    const { afterRender: n, ...s } = t;
    t = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), e();
      },
      ...s
    }, In(
      /* @__PURE__ */ m(tc, { ...t }),
      this.modalElement
    );
  });
};
hr = /* @__PURE__ */ new WeakSet();
ec = function() {
  const { loadingText: t } = this.options;
  return Ie(this, Bn, _i).call(this, {
    body: /* @__PURE__ */ m("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ m("span", { className: "spinner" }),
      t ? /* @__PURE__ */ m("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
};
ks = /* @__PURE__ */ new WeakSet();
ur = function(t) {
  if (t)
    return Ie(this, Bn, _i).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
};
mo.LOADING_CLASS = "loading";
mo.DEFAULT = {
  ...he.DEFAULT,
  loadTimeout: 1e4
};
var yo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, fr = (t, e, n) => (yo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), cs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ka = (t, e, n, s) => (yo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), dr = (t, e, n) => (yo(t, e, "access private method"), n), xe, wo, nc, pr, sc, vo, ic;
const pf = '[data-toggle="modal"]';
class rc extends Et {
  constructor() {
    super(...arguments), cs(this, wo), cs(this, pr), cs(this, vo), cs(this, xe, void 0);
  }
  get modal() {
    return fr(this, xe);
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    const e = dr(this, pr, sc).call(this);
    return e == null ? void 0 : e.show();
  }
  hide() {
    var e;
    (e = fr(this, xe)) == null || e.hide();
  }
}
xe = /* @__PURE__ */ new WeakMap();
wo = /* @__PURE__ */ new WeakSet();
nc = function() {
  const {
    container: t,
    ...e
  } = this.options, n = e, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), n;
};
pr = /* @__PURE__ */ new WeakSet();
sc = function() {
  const t = dr(this, wo, nc).call(this);
  let e = fr(this, xe);
  return e ? e.setOptions(t) : t.type === "static" ? (e = he.ensure(dr(this, vo, ic).call(this), t), ka(this, xe, e)) : (e = mo.ensure(this.container, t), ka(this, xe, e)), e;
};
vo = /* @__PURE__ */ new WeakSet();
ic = function() {
  let t = this.options.target;
  if (!t) {
    const { $element: e } = this;
    if (e.is("a")) {
      const n = e.attr("href");
      n != null && n.startsWith("#") && (t = n);
    }
  }
  return this.container.querySelector(t || ".modal");
};
rc.NAME = "ModalTrigger";
w(document).on("click", (t) => {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, pf);
  if (n) {
    const i = rc.ensure(n);
    i && i.show();
  }
});
let oc = class extends Re {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = T(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
};
oc.NAME = "nav";
class ac extends st {
}
ac.NAME = "Nav";
ac.Component = oc;
function zn(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function gf({
  key: t,
  type: e,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = zn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : lt(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : lt(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ m(Vt, { type: n, ...a });
}
const Wt = 24 * 60 * 60 * 1e3, ct = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : /* @__PURE__ */ new Date(), Zn = (t, e = /* @__PURE__ */ new Date()) => (t = ct(t), e = ct(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), gr = (t, e = /* @__PURE__ */ new Date()) => ct(t).getFullYear() === ct(e).getFullYear(), mf = (t, e = /* @__PURE__ */ new Date()) => (t = ct(t), e = ct(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Id = (t, e = /* @__PURE__ */ new Date()) => {
  t = ct(t), e = ct(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Hd = (t, e) => Zn(ct(e), t), Bd = (t, e) => Zn(ct(e).getTime() - Wt, t), zd = (t, e) => Zn(ct(e).getTime() + Wt, t), Fd = (t, e) => Zn(ct(e).getTime() - 2 * Wt, t), mr = (t, e = "yyyy-MM-dd hh:mm", n = "") => {
  if (t = ct(t), Number.isNaN(t.getDay()))
    return n;
  const s = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", gr(t) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const r = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), e;
}, Ud = (t, e, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = mr(t, gr(t) ? s.month : s.full);
  if (Zn(t, e))
    return i;
  const r = mr(e, gr(t, e) ? mf(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Vd = (t) => {
  const e = (/* @__PURE__ */ new Date()).getTime();
  switch (t) {
    case "oneWeek":
      return e - Wt * 7;
    case "oneMonth":
      return e - Wt * 31;
    case "threeMonth":
      return e - Wt * 31 * 3;
    case "halfYear":
      return e - Wt * 183;
    case "oneYear":
      return e - Wt * 365;
    case "twoYear":
      return e - 2 * (Wt * 365);
    default:
      return 0;
  }
}, Sa = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Sa(t, "day", n, s);
    case "quarter":
      t *= 3;
      break;
    case "month":
      return t *= 30, Sa(t, "day", n, s);
    case "week":
      t *= 7;
      break;
    case "day":
      t *= 24;
      break;
    case "hour":
      t *= 60;
      break;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? s + t : s - t;
};
function yf({
  key: t,
  type: e,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = zn(i, n);
  return s = typeof s == "function" ? s(a) : lt(s, a), /* @__PURE__ */ m(xl, { ...o, children: [
    r,
    s
  ] });
}
function wf({
  key: t,
  type: e,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(Vt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let g = d; g <= f; g++) {
      l.text = g, delete l.icon, l.disabled = !1;
      const v = zn(i, g);
      o && (l.url = typeof o == "function" ? o(v) : lt(o, v)), p.push(/* @__PURE__ */ m(Vt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function vf({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const c = { ...e, recPerPage: h };
    return {
      ...r,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof n == "function" ? n(c) : lt(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(e) : lt(a, e), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(Fl, { type: "dropdown", dropdown: i, ...o });
}
function _f({
  key: t,
  page: e,
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
    const v = zn(i, u);
    a && !a({ info: v, event: g }) || (g.target.href = c.url = typeof l == "function" ? l(v) : lt(l, v));
  }, p = zn(i, e || 0);
  return c.url = typeof l == "function" ? l(p) : lt(l, p), /* @__PURE__ */ m("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ m(Vt, { type: s, ...c, onClick: f })
  ] });
}
let bi = class extends $t {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: s = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: s, pageTotal: s ? Math.ceil(n / s) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, s) {
    const i = super.getItemRenderProps(e, n, s), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
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
  ...$t.ItemComponents,
  link: gf,
  info: yf,
  nav: wf,
  "size-menu": vf,
  goto: _f
};
class lc extends st {
}
lc.NAME = "Pager";
lc.Component = bi;
var ti, ei, cc;
class bf extends U {
  constructor() {
    super(...arguments);
    L(this, ei);
    L(this, ti, (n) => {
      var o;
      const { onDeselect: s, selections: i } = this.props, r = (o = n.target.closest(".picker-deselect-btn")) == null ? void 0 : o.dataset.idx;
      r && s && (i != null && i.length) && (n.stopPropagation(), s([i[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: s,
      disabled: i,
      focused: r,
      onClick: o,
      children: a
    } = this.props;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("picker-select picker-select-multi form-control", n, { disabled: i, focused: r }),
        style: s,
        onClick: o,
        children: [
          et(this, ei, cc).call(this),
          a,
          /* @__PURE__ */ m("span", { class: "caret" })
        ]
      }
    );
  }
}
ti = new WeakMap(), ei = new WeakSet(), cc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: n.map((i, r) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, ti), "data-idx": r, children: /* @__PURE__ */ m("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: s });
};
var ni;
class xf extends U {
  constructor() {
    super(...arguments);
    L(this, ni, (n) => {
      const { onDeselect: s, selections: i } = this.props;
      s && (i != null && i.length) && (n.stopPropagation(), s(i, n));
    });
  }
  render() {
    const {
      className: n,
      style: s,
      disabled: i,
      placeholder: r,
      focused: o,
      selections: a = [],
      onDeselect: l,
      onClick: h,
      children: c
    } = this.props, [u] = a, d = u ? /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }), f = u && l ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, ni), children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("picker-select picker-select-single form-control", n, { disabled: i, focused: o }),
        style: s,
        onClick: h,
        children: [
          d,
          c,
          f,
          /* @__PURE__ */ m("span", { class: "caret" })
        ]
      }
    );
  }
}
ni = new WeakMap();
var kf = ["Shift", "Meta", "Alt", "Control"], Sf = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function zi(t, e) {
  return typeof t.getModifierState == "function" && t.getModifierState(e);
}
function $f(t) {
  return t.trim().split(" ").map(function(e) {
    var n = e.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? Sf : i;
    }), s];
  });
}
function Cf(t, e) {
  var n;
  e === void 0 && (e = {});
  var s = (n = e.timeout) != null ? n : 1e3, i = Object.keys(t).map(function(a) {
    return [$f(a), t[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var h = l[0], c = l[1], u = r.get(h) || h;
      (function(d, f) {
        return !(f[1].toUpperCase() !== d.key.toUpperCase() && f[1] !== d.code || f[0].find(function(p) {
          return !zi(d, p);
        }) || kf.find(function(p) {
          return !f[0].includes(p) && f[1] !== p && zi(d, p);
        }));
      })(a, u[0]) ? u.length > 1 ? r.set(h, u.slice(1)) : (r.delete(h), c(a)) : zi(a, a.key) || r.delete(h);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Ef(t, e, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", r = Cf(e, n);
  return t.addEventListener(i, r), function() {
    t.removeEventListener(i, r);
  };
}
const Mf = (t, e) => t.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ m("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), e);
var Qt, Je, Ze, qn, Qe, Ss, ve, _n, si, hc, tn, Gn, en, Yn, ii, uc;
class Tf extends U {
  constructor() {
    super(...arguments);
    L(this, Qe);
    L(this, ve);
    L(this, si);
    L(this, ii);
    L(this, Qt, void 0);
    L(this, Je, void 0);
    L(this, Ze, void 0);
    L(this, qn, void 0);
    L(this, tn, void 0);
    L(this, Gn, void 0);
    L(this, en, void 0);
    L(this, Yn, void 0);
    this.state = { keys: "", show: !1 }, I(this, Qt, 0), I(this, Je, St()), I(this, Ze, St()), I(this, tn, (n) => {
      w(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), I(this, Gn, ({ item: n }) => {
      this.select(n.key);
    }), I(this, en, (n) => {
      this.setState({ keys: n.target.value });
    }), I(this, Yn, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    w(document).on("click", E(this, tn)), this.show(this.focus.bind(this)), I(this, qn, Ef(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = et(this, ve, _n).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = et(this, ve, _n).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = et(this, ve, _n).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = et(this, Qe, Ss).call(this);
    n && w(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = w(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    w(document).off("click", E(this, tn)), (s = E(this, qn)) == null || s.call(this);
    const n = et(this, Qe, Ss).call(this);
    n && w(n).off(".pickerMenu.zui");
  }
  show(n) {
    if (this.state.show) {
      n == null || n();
      return;
    }
    this.setState({ show: !0 }, n);
  }
  focus() {
    var n;
    (n = E(this, Je).current) == null || n.focus();
  }
  hide() {
    this.state.show && (E(this, Qt) && window.clearTimeout(E(this, Qt)), this.setState({ show: !1 }, () => {
      I(this, Qt, window.setTimeout(() => {
        var n, s;
        I(this, Qt, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  select(n) {
    const s = this.props.items.find((i) => i.value === n);
    s && this.props.onSelectItem(s);
  }
  setHoverItem(n) {
    this.setState({ hover: n }, () => {
      const s = et(this, ve, _n).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  render() {
    const {
      id: n,
      className: s,
      style: i = {},
      maxHeight: r,
      maxWidth: o,
      width: a,
      menu: l,
      checkbox: h
    } = this.props, { show: c, keys: u } = this.state, d = u.trim().length;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("picker-menu menu-popup", s, { shown: c, "has-search": d }),
        id: `picker-menu-${n}`,
        style: { maxHeight: r, maxWidth: o, width: a, ...i },
        children: [
          et(this, ii, uc).call(this),
          /* @__PURE__ */ m(
            pi,
            {
              ref: E(this, Ze),
              className: "picker-menu-list",
              items: et(this, si, hc).call(this),
              onClickItem: E(this, Gn),
              checkbox: h,
              ...l
            }
          )
        ]
      }
    );
  }
}
Qt = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), qn = new WeakMap(), Qe = new WeakSet(), Ss = function() {
  var n;
  return (n = E(this, Ze).current) == null ? void 0 : n.ref.current;
}, ve = new WeakSet(), _n = function() {
  const n = et(this, Qe, Ss).call(this);
  if (n)
    return w(n).find(".menu-item>a.hover");
}, si = new WeakSet(), hc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), { keys: r, hover: o } = this.state, a = r.toLowerCase().split(" ").filter((c) => c.length);
  let l = !1;
  const h = s.reduce((c, u) => {
    const {
      value: d,
      keys: f,
      text: p,
      className: g,
      ...v
    } = u;
    if (!a.length || a.every((y) => d.toLowerCase().includes(y) || (f == null ? void 0 : f.toLowerCase().includes(y)) || typeof p == "string" && p.toLowerCase().includes(y))) {
      let y = p ?? d;
      typeof y == "string" && a.length && (y = Mf(a, [y])), d === o && (l = !0), c.push({
        key: d,
        active: i.has(d),
        text: y,
        className: T(g, { hover: d === o }),
        "data-value": d,
        ...v
      });
    }
    return c;
  }, []);
  return !l && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, tn = new WeakMap(), Gn = new WeakMap(), en = new WeakMap(), Yn = new WeakMap(), ii = new WeakSet(), uc = function() {
  const {
    search: n,
    searchHint: s
  } = this.props, { keys: i } = this.state, r = i.trim().length;
  return n ? /* @__PURE__ */ m("div", { className: "picker-menu-search", children: [
    /* @__PURE__ */ m(
      "input",
      {
        className: "form-control picker-menu-search-input",
        type: "text",
        placeholder: s,
        value: i,
        onChange: E(this, en),
        onInput: E(this, en),
        ref: E(this, Je)
      }
    ),
    r ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: E(this, Yn), children: /* @__PURE__ */ m("span", { className: "close" }) }) : /* @__PURE__ */ m("span", { className: "magnifier" })
  ] }) : null;
};
var _o = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Z = (t, e, n) => (_o(t, e, "read from private field"), n ? n.call(t) : e.get(t)), X = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, zs = (t, e, n, s) => (_o(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Rf = (t, e, n, s) => ({
  set _(i) {
    zs(t, e, i, n);
  },
  get _() {
    return Z(t, e, s);
  }
}), nt = (t, e, n) => (_o(t, e, "access private method"), n), $s, rn, Fs, It, De, bn, Us, bo, Cs, yr, wr, fc, xo, ko, So, $o, Co, dc, vr, pc, Eo, gc, Es, _r;
let mc = class extends U {
  constructor(e) {
    super(e), X(this, De), X(this, Us), X(this, Cs), X(this, wr), X(this, Co), X(this, vr), X(this, Eo), X(this, Es), X(this, $s, 0), X(this, rn, vi()), X(this, Fs, St()), X(this, It, void 0), X(this, xo, (n) => {
      const { valueList: s } = this, i = new Set(n.map((o) => o.value)), r = s.filter((o) => !i.has(o));
      this.setValue(r);
    }), X(this, ko, () => {
      requestAnimationFrame(() => this.toggle());
    }), X(this, So, () => {
      this.close();
    }), X(this, $o, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = Z(this, Fs).current) == null || s.hide();
      });
    }), this.state = {
      value: nt(this, Cs, yr).call(this, e.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(e.items) ? e.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return nt(this, Us, bo).call(this, this.state.value);
  }
  componentDidMount() {
    nt(this, Es, _r).call(this, !0);
  }
  componentDidUpdate() {
    nt(this, Es, _r).call(this);
  }
  componentWillUnmount() {
    var n;
    var e;
    (n = this.props.beforeDestroy) == null || n.call(this), (e = Z(this, It)) == null || e.call(this), zs(this, It, void 0);
  }
  async loadItemList() {
    let { items: e } = this.props;
    if (typeof e == "function") {
      const s = ++Rf(this, $s)._;
      if (await nt(this, De, bn).call(this, { loading: !0, items: [] }), e = await e(), Z(this, $s) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(e) && this.state.items !== e && (n.items = e), this.state.loading && (n.loading = !1), Object.keys(n).length && await nt(this, De, bn).call(this, n), e;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((e, n) => (e[n.value] = n, e), {});
  }
  getItemByValue(e) {
    return this.getItemList().find((n) => n.value === e);
  }
  getSelections() {
    const e = this.getItemMap();
    return this.valueList.map((n) => e[n] || { value: n });
  }
  async toggle(e) {
    if (e === void 0)
      e = !this.state.open;
    else if (e === this.state.open)
      return;
    await nt(this, De, bn).call(this, { open: e }), e && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  getValue() {
    return this.props.multiple ? this.valueList : this.value;
  }
  async setValue(e, n) {
    var s;
    await nt(this, De, bn).call(this, { value: nt(this, Cs, yr).call(this, e), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
  }
  toggleValue(e, n) {
    const { valueList: s } = this, i = s.indexOf(e);
    if (n !== !!i)
      return i > -1 ? s.splice(i, 1) : s.push(e), this.setValue(s);
  }
  render() {
    const {
      className: e,
      style: n,
      children: s,
      multiple: i,
      Select: r,
      name: o
    } = this.props, a = r || (i ? bf : xf), l = nt(this, wr, fc).call(this);
    return /* @__PURE__ */ m(
      "div",
      {
        id: `picker-${Z(this, rn)}`,
        className: T("picker", e),
        style: n,
        children: [
          /* @__PURE__ */ m(a, { ...l }),
          s,
          nt(this, vr, pc).call(this),
          o ? /* @__PURE__ */ m("input", { type: "hidden", className: "picker-value", name: o, value: this.state.value }) : null
        ]
      }
    );
  }
};
$s = /* @__PURE__ */ new WeakMap();
rn = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakSet();
bn = function(t) {
  return new Promise((e) => {
    this.setState(t, e);
  });
};
Us = /* @__PURE__ */ new WeakSet();
bo = function(t) {
  return typeof t == "string" ? t.length ? w.unique(t.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(t) ? w.unique(t) : [];
};
Cs = /* @__PURE__ */ new WeakSet();
yr = function(t) {
  const e = nt(this, Us, bo).call(this, t);
  return e.length ? e.join(this.props.valueSplitter ?? ",") : void 0;
};
wr = /* @__PURE__ */ new WeakSet();
fc = function() {
  const { placeholder: t, disabled: e, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: t,
    disabled: e,
    multiple: n,
    selections: this.getSelections(),
    onClick: Z(this, ko),
    onDeselect: Z(this, xo)
  };
};
xo = /* @__PURE__ */ new WeakMap();
ko = /* @__PURE__ */ new WeakMap();
So = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakMap();
Co = /* @__PURE__ */ new WeakSet();
dc = function() {
  const { search: t, menuClass: e, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: r, menuMinWidth: o, multiple: a, searchHint: l, menuCheckbox: h } = this.props, { items: c } = this.state;
  return {
    id: Z(this, rn),
    items: c,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= c.length,
    searchHint: l,
    style: s,
    multiple: a,
    className: e,
    width: n === "100%" ? "auto" : n,
    maxHeight: i,
    maxWidth: r,
    minWidth: o,
    checkbox: h,
    onRequestHide: Z(this, So),
    onSelectItem: Z(this, $o)
  };
};
vr = /* @__PURE__ */ new WeakSet();
pc = function() {
  const { open: t } = this.state;
  if (!t)
    return null;
  const e = w(this.props.container || "body");
  let n = e.find(".pickers-container");
  n.length || (n = w("<div>").addClass("pickers-container").appendTo(e));
  const { Menu: s = Tf } = this.props;
  return bu(/* @__PURE__ */ m(s, { ...nt(this, Co, dc).call(this), ref: Z(this, Fs) }), n[0]);
};
Eo = /* @__PURE__ */ new WeakSet();
gc = function() {
  const t = w(`#picker-${Z(this, rn)}`)[0], e = w(`#picker-menu-${Z(this, rn)}`)[0];
  if (!e || !t || !this.state.open) {
    Z(this, It) && (Z(this, It).call(this), zs(this, It, void 0));
    return;
  }
  Z(this, It) || zs(this, It, ro(t, e, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    wi(t, e, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? gi() : null, tr(), io(1)].filter(Boolean)
    }).then(({ x: i, y: r }) => {
      w(e).css({ left: i, top: r, width: s === "100%" ? w(t).width() : void 0 });
    }), s === "100%" && w(e).css({ width: w(t).width() });
  }));
};
Es = /* @__PURE__ */ new WeakSet();
_r = function(t = !1) {
  var e;
  (e = this.props.afterRender) == null || e.call(this, { firstRender: t }), nt(this, Eo, gc).call(this);
};
mc.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class yc extends st {
}
yc.NAME = "Picker";
yc.Component = mc;
class wc extends Et {
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
    const { placement: e, strategy: n } = this.options, s = {
      placement: e,
      strategy: n,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && s.middleware.push(gi()), r && s.middleware.push(r === !0 ? tr() : tr(r)), o && s.middleware.push(Qi({ element: this.$arrow[0] })), a && s.middleware.push(io(a)), s;
  }
  createPopper() {
    const e = this.element, n = this.$target[0];
    this.cleanup = ro(e, n, () => {
      wi(e, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Qi || !o.arrow)
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
    const e = this.$element.data("target");
    if (!e)
      throw new Error("popsvers trigger must have target.");
    const n = w(e);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      w(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const e = w('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = w('<div class="arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
wc.NAME = "Popovers";
wc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class vc extends st {
}
vc.NAME = "Toolbar";
vc.Component = $t;
function Qn(t) {
  return t.split("-")[1];
}
function Mo(t) {
  return t === "y" ? "height" : "width";
}
function Ue(t) {
  return t.split("-")[0];
}
function xi(t) {
  return ["top", "bottom"].includes(Ue(t)) ? "x" : "y";
}
function $a(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = xi(e), l = Mo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Ue(e)) {
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
  switch (Qn(e)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Af = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: c, y: u } = $a(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: y } = a[g], { x: _, y: k, data: C, reset: $ } = await y({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    c = _ ?? c, u = k ?? u, f = { ...f, [v]: { ...f[v], ...C } }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (d = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : $.rects), { x: c, y: u } = $a(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function _c(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Vs(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Nf(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = t, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = _c(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], v = Vs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), y = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, C = Vs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: y, offsetParent: _, strategy: l }) : y);
  return { top: (v.top - C.top + p.top) / k.y, bottom: (C.bottom - v.bottom + p.bottom) / k.y, left: (v.left - C.left + p.left) / k.x, right: (C.right - v.right + p.right) / k.x };
}
const Lf = Math.min, Wf = Math.max;
function Df(t, e, n) {
  return Wf(t, Lf(e, n));
}
const Pf = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: l } = e;
  if (n == null)
    return {};
  const h = _c(s), c = { x: i, y: r }, u = xi(o), d = Mo(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = a.reference[d] + a.reference[u] - c[u] - a.floating[d], y = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let k = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  k === 0 && (k = a.floating[d]);
  const C = v / 2 - y / 2, $ = h[p], M = k - f[d] - h[g], A = k / 2 - f[d] / 2 + C, N = Df($, A, M), O = Qn(o) != null && A != N && a.reference[d] / 2 - (A < $ ? h[p] : h[g]) - f[d] / 2 < 0;
  return { [u]: c[u] - (O ? A < $ ? $ - A : M - A : 0), data: { [u]: N, centerOffset: A - N } };
} }), Of = ["top", "right", "bottom", "left"];
Of.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const If = { left: "right", right: "left", bottom: "top", top: "bottom" };
function js(t) {
  return t.replace(/left|right|bottom|top/g, (e) => If[e]);
}
function Hf(t, e, n) {
  n === void 0 && (n = !1);
  const s = Qn(t), i = xi(t), r = Mo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = js(o)), { main: o, cross: js(o) };
}
const Bf = { start: "end", end: "start" };
function Fi(t) {
  return t.replace(/start|end/g, (e) => Bf[e]);
}
const zf = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = t, v = Ue(s), y = Ue(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = u || (y || !p ? [js(o)] : function(b) {
      const R = js(b);
      return [Fi(b), R, Fi(R)];
    }(o));
    u || f === "none" || k.push(...function(b, R, W, z) {
      const H = Qn(b);
      let D = function(V, Mt, on) {
        const es = ["left", "right"], an = ["right", "left"], ns = ["top", "bottom"], Ti = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return on ? Mt ? an : es : Mt ? es : an;
          case "left":
          case "right":
            return Mt ? ns : Ti;
          default:
            return [];
        }
      }(Ue(b), W === "start", z);
      return H && (D = D.map((V) => V + "-" + H), R && (D = D.concat(D.map(Fi)))), D;
    }(o, p, f, _));
    const C = [o, ...k], $ = await Nf(e, g), M = [];
    let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push($[v]), c) {
      const { main: b, cross: R } = Hf(s, r, _);
      M.push($[b], $[R]);
    }
    if (A = [...A, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var N;
      const b = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: A }, reset: { placement: R } };
      let W = "bottom";
      switch (d) {
        case "bestFit": {
          var O;
          const z = (O = A.map((H) => [H, H.overflows.filter((D) => D > 0).reduce((D, V) => D + V, 0)]).sort((H, D) => H[1] - D[1])[0]) == null ? void 0 : O[0].placement;
          z && (W = z);
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
}, Ff = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Ue(a), d = Qn(a), f = xi(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: y, crossAxis: _, alignmentAxis: k } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof k == "number" && (_ = d === "end" ? -1 * k : k), f ? { x: _ * g, y: y * p } : { x: y * p, y: _ * g };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function xt(t) {
  return ht(t).getComputedStyle(t);
}
function ae(t) {
  return xc(t) ? (t.nodeName || "").toLowerCase() : "";
}
let hs;
function bc() {
  if (hs)
    return hs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (hs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), hs) : navigator.userAgent;
}
function jt(t) {
  return t instanceof ht(t).HTMLElement;
}
function gt(t) {
  return t instanceof ht(t).Element;
}
function xc(t) {
  return t instanceof ht(t).Node;
}
function Ca(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ht(t).ShadowRoot || t instanceof ShadowRoot;
}
function ki(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = xt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Uf(t) {
  return ["table", "td", "th"].includes(ae(t));
}
function br(t) {
  const e = /firefox/i.test(bc()), n = xt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function kc() {
  return !/^((?!chrome|android).)*safari/i.test(bc());
}
function To(t) {
  return ["html", "body", "#document"].includes(ae(t));
}
const Ea = Math.min, An = Math.max, qs = Math.round;
function Sc(t) {
  const e = xt(t);
  let n = parseFloat(e.width), s = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, o = qs(n) !== i || qs(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function $c(t) {
  return gt(t) ? t : t.contextElement;
}
const Cc = { x: 1, y: 1 };
function Ve(t) {
  const e = $c(t);
  if (!jt(e))
    return Cc;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = Sc(e);
  let o = (r ? qs(n.width) : n.width) / s, a = (r ? qs(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Ce(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = $c(t);
  let l = Cc;
  e && (s ? gt(s) && (l = Ve(s)) : l = Ve(t));
  const h = a ? ht(a) : window, c = !kc() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const g = ht(a), v = s && gt(s) ? ht(s) : s;
    let y = g.frameElement;
    for (; y && s && v !== g; ) {
      const _ = Ve(y), k = y.getBoundingClientRect(), C = getComputedStyle(y);
      k.x += (y.clientLeft + parseFloat(C.paddingLeft)) * _.x, k.y += (y.clientTop + parseFloat(C.paddingTop)) * _.y, u *= _.x, d *= _.y, f *= _.x, p *= _.y, u += k.x, d += k.y, y = ht(y).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function re(t) {
  return ((xc(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Si(t) {
  return gt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Ec(t) {
  return Ce(re(t)).left + Si(t).scrollLeft;
}
function Vf(t, e, n) {
  const s = jt(e), i = re(e), r = Ce(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ae(e) !== "body" || ki(i)) && (o = Si(e)), jt(e)) {
      const l = Ce(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = Ec(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Fn(t) {
  if (ae(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ca(t) ? t.host : null) || re(t);
  return Ca(e) ? e.host : e;
}
function Ma(t) {
  return jt(t) && xt(t).position !== "fixed" ? t.offsetParent : null;
}
function Ta(t) {
  const e = ht(t);
  let n = Ma(t);
  for (; n && Uf(n) && xt(n).position === "static"; )
    n = Ma(n);
  return n && (ae(n) === "html" || ae(n) === "body" && xt(n).position === "static" && !br(n)) ? e : n || function(s) {
    let i = Fn(s);
    for (; jt(i) && !To(i); ) {
      if (br(i))
        return i;
      i = Fn(i);
    }
    return null;
  }(t) || e;
}
function Mc(t) {
  const e = Fn(t);
  return To(e) ? t.ownerDocument.body : jt(e) && ki(e) ? e : Mc(e);
}
function Nn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = Mc(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ht(s);
  return i ? e.concat(r, r.visualViewport || [], ki(s) ? s : []) : e.concat(s, Nn(s));
}
function Ra(t, e, n) {
  return e === "viewport" ? Vs(function(s, i) {
    const r = ht(s), o = re(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = kc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(t, n)) : gt(e) ? function(s, i) {
    const r = Ce(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = jt(s) ? Ve(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = o * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(e, n) : Vs(function(s) {
    var i;
    const r = re(s), o = Si(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = An(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = An(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Ec(s);
    const u = -o.scrollTop;
    return xt(a || r).direction === "rtl" && (c += An(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(re(t)));
}
const jf = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Nn(h).filter((v) => gt(v) && ae(v) !== "body"), f = null;
    const p = xt(h).position === "fixed";
    let g = p ? Fn(h) : h;
    for (; gt(g) && !To(g); ) {
      const v = xt(g), y = br(g);
      (p ? y || f : y || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : d = d.filter((_) => _ !== g), g = Fn(g);
    }
    return c.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = Ra(e, c, i);
    return h.top = An(u.top, h.top), h.right = Ea(u.right, h.right), h.bottom = Ea(u.bottom, h.bottom), h.left = An(u.left, h.left), h;
  }, Ra(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = jt(n), r = re(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ae(n) !== "body" || ki(r)) && (o = Si(n)), jt(n))) {
    const h = Ce(n);
    a = Ve(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + l.x, y: e.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: gt, getDimensions: function(t) {
  return Sc(t);
}, getOffsetParent: Ta, getDocumentElement: re, getScale: Ve, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || Ta, r = this.getDimensions;
  return { reference: Vf(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => xt(t).direction === "rtl" };
function qf(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...gt(t) ? Nn(t) : t.contextElement ? Nn(t.contextElement) : [], ...Nn(e)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (o) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), gt(t) && !a && u.observe(t), gt(t) || !t.contextElement || a || u.observe(t.contextElement), u.observe(e);
  }
  let d = a ? Ce(t) : null;
  return a && function f() {
    const p = Ce(t);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Gf = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: jf, ...n }, r = { ...i.platform, _c: s };
  return Af(t, e, { ...i, platform: r });
};
var Ro = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, F = (t, e, n) => (Ro(t, e, "read from private field"), n ? n.call(t) : e.get(t)), G = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ee = (t, e, n, s) => (Ro(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), bt = (t, e, n) => (Ro(t, e, "access private method"), n), Ln, Wn, xn, He, it, xr, Gs, $i, Ao, No, Tc, kr, Rc, Lo, Ac, Wo, Nc, Do, Lc, Sr, Wc, Po, Dc, Dn, $r, Pc;
const Be = class extends Et {
  constructor() {
    super(...arguments), G(this, $i), G(this, No), G(this, kr), G(this, Lo), G(this, Wo), G(this, Do), G(this, Sr), G(this, Po), G(this, $r), G(this, Ln, !1), G(this, Wn, void 0), G(this, xn, 0), G(this, He, void 0), G(this, it, void 0), G(this, xr, void 0), G(this, Gs, void 0), this.hideLater = () => {
      F(this, Dn).call(this), Ee(this, xn, window.setTimeout(this.hide.bind(this), 100));
    }, G(this, Dn, () => {
      clearTimeout(F(this, xn)), Ee(this, xn, 0);
    });
  }
  get isShown() {
    var t;
    return (t = F(this, He)) == null ? void 0 : t.classList.contains(Be.CLASS_SHOW);
  }
  get tooltip() {
    return F(this, He) || bt(this, kr, Rc).call(this);
  }
  get trigger() {
    return F(this, xr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Be.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !F(this, Ln) && this.isHover && bt(this, $r, Pc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Be.CLASS_SHOW), bt(this, Sr, Wc).call(this), !0;
  }
  hide() {
    var e;
    var t;
    return (t = F(this, Gs)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = F(this, He)) == null || e.classList.remove(Be.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    F(this, Ln) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", F(this, Dn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t || {}, n = this.getAll().entries(), s = new Set(e || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let kt = Be;
Ln = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakSet();
Ao = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
};
No = /* @__PURE__ */ new WeakSet();
Tc = function() {
  const t = bt(this, $i, Ao).call(this);
  return Ee(this, it, document.createElement("div")), F(this, it).style.position = this.options.strategy, F(this, it).style.width = `${t}px`, F(this, it).style.height = `${t}px`, F(this, it).style.transform = "rotate(45deg)", F(this, it);
};
kr = /* @__PURE__ */ new WeakSet();
Rc = function() {
  var n;
  const t = Be.TOOLTIP_CLASS;
  let e;
  if (this.isDynamic) {
    e = document.createElement("div");
    const s = this.options.className ? this.options.className.split(" ") : [];
    let i = [t, this.options.type || ""];
    i = i.concat(s), e.classList.add(...i), e[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const s = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (s != null && s.startsWith("#") && (e = document.querySelector(s)), !e) {
      const i = this.element.nextElementSibling;
      i != null && i.classList.contains(t) ? e = i : e = (n = this.element.parentNode) == null ? void 0 : n.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (e == null || e.append(bt(this, No, Tc).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), Ee(this, He, e), e;
};
Lo = /* @__PURE__ */ new WeakSet();
Ac = function() {
  var i;
  const t = bt(this, $i, Ao).call(this), { strategy: e, placement: n } = this.options, s = {
    middleware: [Ff(t), zf()],
    strategy: e,
    placement: n
  };
  return this.options.arrow && F(this, it) && ((i = s.middleware) == null || i.push(Pf({ element: F(this, it) }))), s;
};
Wo = /* @__PURE__ */ new WeakSet();
Nc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
Do = /* @__PURE__ */ new WeakSet();
Lc = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
};
Sr = /* @__PURE__ */ new WeakSet();
Wc = function() {
  const t = bt(this, Lo, Ac).call(this), e = bt(this, Po, Dc).call(this);
  Ee(this, Gs, qf(e, this.tooltip, () => {
    Gf(e, this.tooltip, t).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = bt(this, Wo, Nc).call(this, o);
      if (i.arrow && F(this, it)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(F(this, it).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-F(this, it).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...bt(this, Do, Lc).call(this, o)
        });
      }
    });
  }));
};
Po = /* @__PURE__ */ new WeakSet();
Dc = function() {
  return F(this, Wn) || Ee(this, Wn, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: e, clientY: n } = t;
        return {
          width: 0,
          height: 0,
          top: n,
          right: e,
          bottom: n,
          left: e
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), F(this, Wn);
};
Dn = /* @__PURE__ */ new WeakMap();
$r = /* @__PURE__ */ new WeakSet();
Pc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", F(this, Dn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ee(this, Ln, !0);
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
document.addEventListener("click", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, kt.MENU_SELECTOR);
  if (n) {
    const i = kt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    kt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var i;
  const e = t.target, n = (i = e.closest) == null ? void 0 : i.call(e, kt.MENU_SELECTOR);
  if (!n)
    return;
  const s = kt.ensure(n);
  s.isHover && s.show();
});
var Kn, ri, oi, ai;
class Yf extends U {
  constructor(n) {
    super(n);
    L(this, Kn, St());
    L(this, ri, (n) => {
      n.stopPropagation(), _t.show({
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
    L(this, oi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, ai, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, Kn).current;
  }
  componentDidMount() {
    this.load(), w(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    w(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...r } = s;
    this.setState({ loading: !0 }, () => {
      fetch(lt(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ m(wl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ m("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: E(this, oi),
        onDragEnd: E(this, ai),
        "data-id": c,
        ref: E(this, Kn),
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, ri), children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
Kn = new WeakMap(), ri = new WeakMap(), oi = new WeakMap(), ai = new WeakMap();
var Oc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Bt = (t, e, n) => (Oc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ft = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, yt = (t, e, n) => (Oc(t, e, "access private method"), n), qt, Oo, Ic, Io, Hc, Cr, Bc, Ho, zc, Ys, Er, Ci, Mr, Bo, Fc, Tr, Rr, Ei, zo;
const Fo = class extends U {
  constructor() {
    super(...arguments), ft(this, Oo), ft(this, Io), ft(this, Cr), ft(this, Ho), ft(this, Ys), ft(this, Ci), ft(this, Bo), ft(this, qt, /* @__PURE__ */ new Map()), this.state = {}, ft(this, Tr, (t) => {
      var n;
      const e = (n = t.dataTransfer) == null ? void 0 : n.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), ft(this, Rr, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = yt(this, Cr, Bc).call(this), { cellHeight: n, grid: s } = this.props, i = Bt(this, qt);
    return console.log("Dashboard.render", { blocks: t, map: i }, this), /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: e * n }, children: t.map((r, o) => {
      const { id: a } = r, [l, h, c, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        Yf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Bt(this, Tr),
          onDragEnd: Bt(this, Rr)
        },
        r.id
      );
    }) }) });
  }
};
let Uo = Fo;
qt = /* @__PURE__ */ new WeakMap();
Oo = /* @__PURE__ */ new WeakSet();
Ic = function(t) {
  const { blockDefaultSize: e, blockSizeMap: n } = this.props;
  return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
};
Io = /* @__PURE__ */ new WeakSet();
Hc = function() {
  const { blocks: t, blockFetch: e, blockMenu: n } = this.props;
  return t.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: l = -1,
      fetch: h = e,
      menu: c = n,
      ...u
    } = i, [d, f] = yt(this, Oo, Ic).call(this, o);
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
Cr = /* @__PURE__ */ new WeakSet();
Bc = function() {
  Bt(this, qt).clear();
  let t = 0;
  const e = yt(this, Io, Hc).call(this);
  return e.forEach((n) => {
    yt(this, Ho, zc).call(this, n);
    const [, s, , i] = Bt(this, qt).get(n.id);
    t = Math.max(t, s + i);
  }), { blocks: e, height: t };
};
Ho = /* @__PURE__ */ new WeakSet();
zc = function(t) {
  const e = Bt(this, qt), { id: n, left: s, top: i, width: r, height: o } = t;
  if (s < 0 || i < 0) {
    const [a, l] = yt(this, Bo, Fc).call(this, r, o, s, i);
    e.set(n, [a, l, r, o]);
  } else
    yt(this, Ci, Mr).call(this, n, [s, i, r, o]);
};
Ys = /* @__PURE__ */ new WeakSet();
Er = function(t) {
  var e;
  const { dragging: n } = this.state;
  for (const [s, i] of Bt(this, qt).entries())
    if (s !== n && yt(e = Fo, Ei, zo).call(e, i, t))
      return !1;
  return !0;
};
Ci = /* @__PURE__ */ new WeakSet();
Mr = function(t, e) {
  var n;
  Bt(this, qt).set(t, e);
  for (const [s, i] of Bt(this, qt).entries())
    s !== t && yt(n = Fo, Ei, zo).call(n, i, e) && (i[1] = e[1] + e[3], yt(this, Ci, Mr).call(this, s, i));
};
Bo = /* @__PURE__ */ new WeakSet();
Fc = function(t, e, n, s) {
  if (n >= 0 && s >= 0) {
    if (yt(this, Ys, Er).call(this, [n, s, t, e]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (yt(this, Ys, Er).call(this, [i, r, t, e])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + t > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Tr = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
zo = function([t, e, n, s], [i, r, o, a]) {
  return !(t + n <= i || i + o <= t || e + s <= r || r + a <= e);
};
ft(Uo, Ei);
Uo.defaultProps = {
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
class Uc extends st {
}
Uc.NAME = "Dashboard";
Uc.Component = Uo;
var te, ee;
class Aa extends U {
  constructor(n) {
    super(n);
    L(this, te, void 0);
    L(this, ee, void 0);
    I(this, te, 0), I(this, ee, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (E(this, te) && cancelAnimationFrame(E(this, te)), I(this, te, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), I(this, te, 0);
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
    n && (I(this, ee, typeof n == "string" ? document : n.current), E(this, ee).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, ee) && E(this, ee).removeEventListener("wheel", this._handleWheel);
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
    return s === "horz" ? (p.height = i, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(u, d) * (n - g.width) / u)) : (p.width = i, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(u, d) * (n - g.height) / u)), /* @__PURE__ */ m(
      "div",
      {
        className: T("scrollbar", r, {
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
            style: g,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
te = new WeakMap(), ee = new WeakMap();
function Vc({ col: t, className: e, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...o
  }, { align: u, border: d } = t.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...t.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", l, e, t.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", t.setting.cellClass], v = (O = s.data) == null ? void 0 : O[t.name], y = [a ?? v ?? ""], _ = i ? i(y, { row: s, col: t, value: v }, j) : y, k = [], C = [], $ = {}, M = {};
  let A = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Q(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? k : C;
      b.html ? R.push(/* @__PURE__ */ m("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : g).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? $ : M, b.attrs)), b.tagName && !b.outer && (A = b.tagName);
    } else
      C.push(b);
  });
  const N = A;
  return /* @__PURE__ */ m(
    "div",
    {
      className: T(p),
      style: c,
      "data-col": t.name,
      "data-type": t.type,
      ...h,
      ...$,
      children: [
        C.length > 0 && /* @__PURE__ */ m(N, { className: T(g), style: f, ...M, children: C }),
        k
      ]
    }
  );
}
function Ui({ row: t, className: e, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Vc, onRenderCell: l }) {
  return /* @__PURE__ */ m("div", { className: T("dtable-cells", e), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ m(
    a,
    {
      col: h,
      row: t,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function jc({
  row: t,
  className: e,
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
  i.list.length && (d = /* @__PURE__ */ m(
    Ui,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: t,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let f = null;
  r.list.length && (f = /* @__PURE__ */ m(
    Ui,
    {
      className: "dtable-flexable",
      cols: r.list,
      left: i.width - a,
      width: Math.max(r.width, r.totalWidth),
      row: t,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let p = null;
  o.list.length && (p = /* @__PURE__ */ m(
    Ui,
    {
      className: "dtable-fixed-right",
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      row: t,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  const g = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ m(
    "div",
    {
      className: T("dtable-row", e),
      style: g,
      "data-id": t.id,
      ...u,
      children: [
        d,
        f,
        p
      ]
    }
  );
}
function Kf({ height: t, onRenderRow: e, ...n }) {
  const s = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: s }, j);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ m("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ m(jc, { ...s }) });
}
function Xf({
  className: t,
  style: e,
  top: n,
  rows: s,
  height: i,
  rowHeight: r,
  scrollTop: o,
  onRenderRow: a,
  ...l
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ m("div", { className: T("dtable-rows", t), style: e, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, j);
    return u && Object.assign(c, u), /* @__PURE__ */ m(jc, { ...c }, h.id);
  }) });
}
const Ks = /* @__PURE__ */ new Map(), Xs = [];
function qc(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && Ks.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ks.set(n, t), e != null && e.buildIn && !Xs.includes(n) && Xs.push(n);
}
function ue(t, e) {
  qc(t, e);
  const n = (s) => {
    if (!s)
      return t;
    const { defaultOptions: i, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = t, n;
}
function Gc(t) {
  return Ks.delete(t);
}
function Jf(t) {
  if (typeof t == "string") {
    const e = Ks.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Yc(t, e, n) {
  return e.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Jf(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Yc(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function Zf(t = [], e = !0) {
  return e && Xs.length && t.unshift(...Xs), t != null && t.length ? Yc([], t, /* @__PURE__ */ new Set()) : [];
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
function Qf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Na(t, e) {
  return typeof t == "string" && (t = t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)), typeof e == "number" && (typeof t != "number" || isNaN(t)) && (t = e), t;
}
function Vi(t, e = !1) {
  if (!t.list.length)
    return;
  if (t.widthSetting && t.width !== t.widthSetting) {
    t.width = t.widthSetting;
    const s = t.width - t.totalWidth;
    if (e || s > 0) {
      const i = t.flexList.length ? t.flexList : t.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math.min(s, Math.ceil(s * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let n = 0;
  t.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = n, n += s.realWidth;
  });
}
function td(t, e, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (_) => (typeof _ == "function" && (_ = _.call(t)), _ = Na(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
  const v = [], y = {};
  if (n.forEach((_) => {
    const { colTypes: k, onAddCol: C } = _;
    k && Object.entries(k).forEach(([$, M]) => {
      y[$] || (y[$] = []), y[$].push(M);
    }), C && v.push(C);
  }), e.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: k = "", name: C } = _, $ = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: k
    }, M = {
      name: C,
      type: k,
      setting: $,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, A = y[k];
    A && A.forEach((H) => {
      const D = typeof H == "function" ? H.call(t, $) : H;
      D && Object.assign($, D, _);
    });
    const { fixed: N, flex: O, minWidth: b = r, maxWidth: R = o } = $, W = Na($.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = Qf(W < 1 ? Math.round(W * s) : W, b, R), v.forEach((H) => H.call(t, M)), f.push(M), p[M.name] = M;
    const z = N ? N === "left" ? u : d : c;
    z.list.push(M), z.totalWidth += M.width, z.width = z.totalWidth, M.flex && z.flexList.push(M), typeof $.order == "number" && (g = !0);
  }), g) {
    const _ = (k, C) => (k.setting.order ?? 0) - (C.setting.order ?? 0);
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
var Vo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, S = (t, e, n) => (Vo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), P = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Y = (t, e, n, s) => (Vo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Lt = (t, e, n) => (Vo(t, e, "access private method"), n), Pe, kn, ke, Ht, we, J, Dt, Nt, Sn, Ms, Js, Xt, $n, Cn, Ar, Xc, Nr, Jc, Lr, Zc, Wr, Qc, Ts, Dr, jo, qo, Mi, Zs, Pr, Or, Go, th, Yo, eh, Ir, nh;
let Ko = class extends U {
  constructor(e) {
    super(e), P(this, Ar), P(this, Nr), P(this, Lr), P(this, Wr), P(this, Ts), P(this, Go), P(this, Yo), P(this, Ir), this.ref = St(), P(this, Pe, 0), P(this, kn, void 0), P(this, ke, !1), P(this, Ht, void 0), P(this, we, void 0), P(this, J, []), P(this, Dt, void 0), P(this, Nt, /* @__PURE__ */ new Map()), P(this, Sn, {}), P(this, Ms, void 0), P(this, Js, []), this.updateLayout = () => {
      S(this, Pe) && cancelAnimationFrame(S(this, Pe)), Y(this, Pe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Pe, 0);
      }));
    }, P(this, Xt, (n, s) => {
      s = s || n.type;
      const i = S(this, Nt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), P(this, $n, (n) => {
      S(this, Xt).call(this, n, `window_${n.type}`);
    }), P(this, Cn, (n) => {
      S(this, Xt).call(this, n, `document_${n.type}`);
    }), P(this, jo, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return S(this, J).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), P(this, qo, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), P(this, Mi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), P(this, Zs, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), P(this, Pr, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), S(this, J).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
            return;
          for (const p of S(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of S(this, J))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), P(this, Or, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, kn, e.id ?? `dtable-${vi(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, we, Object.freeze(Zf(e.plugins))), S(this, we).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Sn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var e;
    return ((e = S(this, Dt)) == null ? void 0 : e.options) || S(this, Ht) || Kc();
  }
  get plugins() {
    return S(this, J);
  }
  get layout() {
    return S(this, Dt);
  }
  get id() {
    return S(this, kn);
  }
  get data() {
    return S(this, Sn);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ht, void 0);
  }
  componentDidMount() {
    if (S(this, ke) ? this.forceUpdate() : Lt(this, Ts, Dr).call(this), S(this, J).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, Pr)), this.on("keydown", S(this, Or)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), Y(this, Ms, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, J).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, ke) ? Lt(this, Ts, Dr).call(this) : S(this, J).forEach((e) => {
      var n;
      (n = e.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, Ms)) == null || n.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const s of S(this, Nt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, $n)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Cn)) : e.removeEventListener(s, S(this, Xt));
    S(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, we).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Sn, {}), S(this, Nt).clear();
  }
  on(e, n, s) {
    var r;
    s && (e = `${s}_${e}`);
    const i = S(this, Nt).get(e);
    i ? i.push(n) : (S(this, Nt).set(e, [n]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), S(this, $n)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), S(this, Cn)) : (r = this.ref.current) == null || r.addEventListener(e, S(this, Xt)));
  }
  off(e, n, s) {
    var o;
    s && (e = `${s}_${e}`);
    const i = S(this, Nt).get(e);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (S(this, Nt).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), S(this, $n)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), S(this, Cn)) : (o = this.ref.current) == null || o.removeEventListener(e, S(this, Xt)));
  }
  emitCustomEvent(e, n) {
    S(this, Xt).call(this, n instanceof Event ? n : new CustomEvent(e, { detail: n }), e);
  }
  scroll(e, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = e;
    let { scrollLeft: u, scrollTop: d } = e;
    if (c === "up" || c === "down")
      d = i + (c === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "home")
      d = 0;
    else if (c === "end")
      d = r - o;
    else if (c === "left-begin")
      u = 0;
    else if (c === "right-end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: g } = e;
      typeof p == "number" && (u = s + p), typeof g == "number" && (u = i + g);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (f.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - o)), d !== i && (f.scrollTop = d)), Object.keys(f).length ? (this.setState(f, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, f), n == null || n.call(this, !0);
    }), !0) : (n == null || n.call(this, !1), !1);
  }
  getColInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    const { cols: n } = this.layout;
    return typeof e == "number" ? n.list[e] : n.map[e];
  }
  getRowInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    if (e === -1 || e === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: n, rowsMap: s } = this.layout;
    return typeof e == "number" ? n[e] : s[e];
  }
  getCellValue(e, n) {
    var a;
    const s = typeof e == "object" ? e : this.getRowInfo(e);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(e) {
    return this.layout.rows[e];
  }
  update(e = {}, n) {
    if (!S(this, Ht))
      return;
    typeof e == "function" && (n = e, e = {});
    const { dirtyType: s, state: i } = e;
    if (s === "layout")
      Y(this, Dt, void 0);
    else if (s === "options") {
      if (Y(this, Ht, void 0), !S(this, Dt))
        return;
      Y(this, Dt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(e) {
    const n = e.target;
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
  i18n(e, n, s) {
    return Ut(S(this, Js), e, n, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.name === e);
  }
  render() {
    const e = Lt(this, Ir, nh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": l
    }], u = [];
    return e && (u.push(
      Lt(this, Ar, Xc).call(this, e),
      Lt(this, Nr, Jc).call(this, e),
      Lt(this, Lr, Zc).call(this, e),
      Lt(this, Wr, Qc).call(this, e)
    ), S(this, J).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, e);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: S(this, kn),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Pe = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
ke = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakMap();
Xt = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Ar = /* @__PURE__ */ new WeakSet();
Xc = function(t) {
  const { header: e, cols: n, headerHeight: s, scrollLeft: i } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ m(
      Kf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: S(this, Mi),
        onRenderRow: S(this, qo)
      },
      "header"
    );
  const r = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    eo,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
};
Nr = /* @__PURE__ */ new WeakSet();
Jc = function(t) {
  const { headerHeight: e, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = t;
  return /* @__PURE__ */ m(
    Xf,
    {
      top: e,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: S(this, Mi),
      onRenderRow: S(this, jo)
    },
    "rows"
  );
};
Lr = /* @__PURE__ */ new WeakSet();
Zc = function(t) {
  let { footer: e } = t;
  if (typeof e == "function" && (e = e.call(this, t)), !e)
    return null;
  const n = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    eo,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: n,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    },
    "footer"
  );
};
Wr = /* @__PURE__ */ new WeakSet();
Qc = function(t) {
  const e = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h } = t, { scrollbarSize: c = 12, horzScrollbarPos: u } = this.options;
  return r > i && e.push(
    /* @__PURE__ */ m(
      Aa,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: S(this, Zs),
        left: s,
        bottom: (u === "inside" ? 0 : -c) + h,
        size: c,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), l > a && e.push(
    /* @__PURE__ */ m(
      Aa,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, Zs),
        right: 0,
        size: c,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
};
Ts = /* @__PURE__ */ new WeakSet();
Dr = function() {
  var t;
  Y(this, ke, !1), (t = this.options.afterRender) == null || t.call(this), S(this, J).forEach((e) => {
    var n;
    return (n = e.afterRender) == null ? void 0 : n.call(this);
  });
};
jo = /* @__PURE__ */ new WeakMap();
qo = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Zs = /* @__PURE__ */ new WeakMap();
Pr = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakMap();
Go = /* @__PURE__ */ new WeakSet();
th = function() {
  if (S(this, Ht))
    return !1;
  const e = { ...Kc(), ...S(this, we).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, S(this, we).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = e;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, e) : r)), (!i || i(o)) && (o !== e && Object.assign(e, o), n.push(s)), n;
  }, [])), Y(this, Ht, e), Y(this, Js, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Yo = /* @__PURE__ */ new WeakSet();
eh = function() {
  var N, O;
  const { plugins: t } = this;
  let e = S(this, Ht);
  const n = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((b) => {
    var W;
    const R = (W = b.beforeLayout) == null ? void 0 : W.call(this, e);
    R && (e = { ...e, ...R }), Object.assign(n, b.footer);
  });
  let s = e.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, ke, !0);
      return;
    }
  }
  const r = td(this, e, t, i), { data: o, rowKey: a = "id", rowHeight: l } = e, h = [], c = (b, R, W) => {
    var H, D;
    const z = { data: W ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (W || (z.lazy = !0), h.push(z), ((H = e.onAddRow) == null ? void 0 : H.call(this, z, R)) !== !1) {
      for (const V of t)
        if (((D = V.onAddRow) == null ? void 0 : D.call(this, z, R)) === !1)
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
  if (e.onAddRows) {
    const b = e.onAddRows.call(this, u);
    b && (u = b);
  }
  for (const b of t) {
    const R = (N = b.onAddRows) == null ? void 0 : N.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    d[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = e, g = f ? e.headerHeight || l : 0, v = p ? e.footerHeight || l : 0;
  let y = e.height, _ = 0;
  const k = u.length * l, C = g + v + k;
  if (typeof y == "function" && (y = y.call(this, C)), y === "auto")
    _ = C;
  else if (typeof y == "object")
    _ = Math.min(y.max, Math.max(y.min, C));
  else if (y === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, ke, !0);
      return;
    }
  } else
    _ = y;
  const $ = _ - g - v, M = {
    options: e,
    allRows: h,
    width: i,
    height: _,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: k,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: g,
    footerHeight: v,
    cols: r
  }, A = (O = e.onLayout) == null ? void 0 : O.call(this, M);
  A && Object.assign(M, A), t.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, M);
      R && Object.assign(M, R);
    }
  }), Y(this, Dt, M);
};
Ir = /* @__PURE__ */ new WeakSet();
nh = function() {
  (Lt(this, Go, th).call(this) || !S(this, Dt)) && Lt(this, Yo, eh).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: e } } = t;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, e.totalWidth - e.width), n);
  let s = 0;
  e.list.forEach((p) => {
    p.left = s, s += p.realWidth, p.visible = p.left + p.realWidth >= n && p.left <= n + e.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = t, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, u = Math.min(o.length, Math.ceil(c / a)), d = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < u; p++) {
    const g = o[p];
    g.lazy && f && (g.data = f([g.id])[0], g.lazy = !1), d.push(g);
  }
  return t.visibleRows = d, t.scrollTop = l, t.scrollLeft = n, t;
};
Ko.addPlugin = qc;
Ko.removePlugin = Gc;
function La(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(s));
}
const ed = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const s = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      La(this, s);
    },
    mouseleave() {
      La(this, !1);
    }
  }
}, nd = ue(ed, { buildIn: !0 });
function sd(t, e) {
  var o, a;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, r = (l, h) => {
    i && !i.call(this, l) || !!n[l] === h || (h ? n[l] = !0 : delete n[l], s[l] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !sh.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: l }) => {
    r(l, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((l) => {
    r(l, e ?? !n[l]);
  })), Object.keys(s).length) {
    const l = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, t, s, n);
    l && Object.keys(l).forEach((h) => {
      l[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function id(t) {
  return this.state.checkedRows[t] ?? !1;
}
function sh() {
  var n, s;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function rd() {
  return Object.keys(this.state.checkedRows);
}
function od(t) {
  const { checkable: e } = this.options;
  t === void 0 && (t = !e), e !== t && this.setState({ forceCheckable: t });
}
function Wa(t) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${t ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const ad = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Wa
  },
  when: (t) => t.checkable !== void 0,
  options(t) {
    const { forceCheckable: e } = this.state;
    return e !== void 0 ? t.checkable = e : t.checkable === "auto" && (t.checkable = !!t.cols.some((n) => n.checkbox)), t;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: sd,
    isRowChecked: id,
    isAllRowChecked: sh,
    getChecks: rd,
    toggleCheckable: od
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
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Wa(t) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ m("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var a;
    const { id: s } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, s))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, s) : r) {
      const l = this.isRowChecked(s), h = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, l, s);
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var o;
    const { id: s } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      t.unshift(l), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (this.isRowChecked(e.id))
      return { className: T(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), t.stopPropagation());
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, ld = ue(ad);
var ih = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(ih || {});
function Qs(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const o = Qs.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Qs.call(this, e.parent).level + 1 : 0, e;
}
function cd(t) {
  return t !== void 0 ? Qs.call(this, t) : this.data.nestedMap;
}
function hd(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !rh.call(this)), e) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((r) => {
      const o = s.get(r);
      e && (o != null && o.children) ? n[r] = !0 : delete n[r];
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
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function oh(t, e = 0, n, s = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const o = t.get(r);
    o && (o.level === s && (o.order = e++), (i = o.children) != null && i.length && (e = oh(t, e, o.children, s + 1)));
  }
  return e;
}
function ah(t, e, n, s) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, ah(t, r, n, s);
  }), i;
}
function lh(t, e, n, s, i) {
  var a;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[e] = n), r.parent && lh(t, r.parent, n, s, i);
}
const ud = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, s = n.get(t.id), i = n.get(e.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const s = {};
      return Object.entries(e).forEach(([i, r]) => {
        const o = ah(this, i, r, s);
        o != null && o.parent && lh(this, o.parent, r, s, n);
      }), s;
    }
  },
  options(t) {
    return t.nested === "auto" && (t.nested = !!t.cols.some((e) => e.nestedToggle)), t;
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: cd,
    toggleRow: hd,
    isAllCollapsed: rh,
    getNestedRowInfo: Qs
  },
  beforeLayout() {
    var t;
    (t = this.data.nestedMap) == null || t.clear();
  },
  onAddRow(t) {
    var i, r;
    const { nestedMap: e } = this.data, n = String((i = t.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = e.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (r = t.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), e.set(t.id, s), n) {
      let o = e.get(n);
      o || (o = {
        state: "",
        level: 0
      }, e.set(n, o)), o.children || (o.children = []), o.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), oh(this.data.nestedMap), t.sort((e, n) => {
      const s = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = e.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && t.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, e, i)) ?? /* @__PURE__ */ m("a", { role: "button", className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: s } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ m("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: T(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = T(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, fd = ue(ud);
function ch(t, e, n, s) {
  if (typeof t == "function" && (t = t(e)), typeof t == "string" && (t = { url: t }), !t)
    return n;
  const { url: i, ...r } = t;
  return /* @__PURE__ */ m("a", { href: lt(i, e.row.data), ...s, ...r, children: n });
}
function Xo(t, e, n) {
  var s;
  if (t != null)
    return n = n ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof t == "function" ? t(n, e) : lt(t, n);
}
function hh(t, e, n, s) {
  var i;
  return n = n ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), t === !1 ? n : (t === !0 && (t = "[yyyy-]MM-dd hh:mm"), typeof t == "function" && (t = t(n, e)), mr(n, t, s));
}
function uh(t, e) {
  const { link: n } = e.col.setting, s = ch(n, e, t[0]);
  return s && (t[0] = s), t;
}
function fh(t, e) {
  const { format: n } = e.col.setting;
  return n && (t[0] = Xo(n, e, t[0])), t;
}
function dh(t, e) {
  const { map: n } = e.col.setting;
  return typeof n == "function" ? t[0] = n(t[0], e) : typeof n == "object" && n && (t[0] = n[t[0]] ?? t[0]), t;
}
function ph(t, e, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = e.col.setting;
  return t[0] = hh(s, e, t[0], i), t;
}
function Hr(t, e, n = !1) {
  const { html: s = n } = e.col.setting;
  if (s === !1)
    return t;
  const i = t[0], r = s === !0 ? i : Xo(s, e, i);
  return t[0] = {
    html: r
  }, t;
}
const dd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t, e) {
        return Hr(t, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, o = (n - s) / 2, a = n / 2, l = t[0];
        return t[0] = /* @__PURE__ */ m("svg", { width: n, height: n, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
        ] }), t;
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
  onRenderCell(t, e) {
    const { formatDate: n, html: s } = e.col.setting;
    return n && (t = ph(t, e, n)), t = dh(t, e), t = fh(t, e), s ? t = Hr(t, e) : t = uh(t, e), t;
  }
}, pd = ue(dd, { buildIn: !0 });
function ji(t, { row: e, col: n }) {
  const { data: s } = e, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return t;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || t[0], u = {
    size: "xs",
    className: T(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (t[0] = /* @__PURE__ */ m(Jl, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, e) : d;
    t[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      t[0],
      /* @__PURE__ */ m("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (t[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      t[0],
      /* @__PURE__ */ m("span", { children: c })
    ] }));
  return t;
}
const gd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ji
    },
    avatarBtn: {
      onRenderCell: ji
    },
    avatarName: {
      onRenderCell: ji
    }
  }
}, md = ue(gd, { buildIn: !0 }), yd = {
  name: "sort-type",
  onRenderHeaderCell(t, e) {
    const { col: n } = e, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      t.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        t[0] = /* @__PURE__ */ m("a", { href: lt(a, { ...n.setting, sortType: o }), ...l, children: t[0] });
      }
    }
    return t;
  }
}, wd = ue(yd, { buildIn: !0 }), qi = (t) => {
  t.length !== 1 && t.forEach((e, n) => {
    !n || e.setting.border || e.setting.group === t[n - 1].setting.group || (e.setting.border = "left");
  });
}, vd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (t) => !!t.groupDivider,
  onLayout(t) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = t;
    qi(e.left.list), qi(e.center.list), qi(e.right.list);
  }
}, _d = ue(vd), bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ih,
  avatar: md,
  checkable: ld,
  colHover: nd,
  group: _d,
  nested: fd,
  renderDatetime: hh,
  renderDatetimeCell: ph,
  renderFormat: Xo,
  renderFormatCell: fh,
  renderHtmlCell: Hr,
  renderLink: ch,
  renderLinkCell: uh,
  renderMapCell: dh,
  rich: pd,
  sortType: wd
}, Symbol.toStringTag, { value: "Module" }));
class ts extends st {
}
ts.NAME = "DTable";
ts.Component = Ko;
ts.definePlugin = ue;
ts.removePlugin = Gc;
ts.plugins = bd;
var gh = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, fe = (t, e, n) => (gh(t, e, "read from private field"), n ? n.call(t) : e.get(t)), xd = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Da = (t, e, n, s) => (gh(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), dt;
const Pa = "nav-tabs";
class mh extends Et {
  constructor() {
    super(...arguments), xd(this, dt, void 0);
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", "tab");
  }
  showTarget() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && Da(this, dt, w(n)[0]), this.addActive(e.closest(`.${Pa}`)[0], e.parent()[0]), fe(this, dt) && (this.addActive(fe(this, dt).parentElement, fe(this, dt)), fe(this, dt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && Da(this, dt, w(n)[0]), fe(this, dt) && (this.addActive(fe(this, dt).parentElement, fe(this, dt)), this.addActive(e.closest(`.${Pa}`)[0], e.parent()[0]));
  }
  addActive(e, n) {
    const s = e.children;
    Array.from(s).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), n.classList.add("active"), n.classList.contains("fade") && this.transition(n).then(function() {
      n.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(e) {
    return new Promise(function(n) {
      setTimeout(() => {
        e.classList.add("in"), n();
      }, 100);
    });
  }
}
dt = /* @__PURE__ */ new WeakMap();
mh.NAME = "NavTabs";
w(document).on("click", '[data-toggle="tab"],[data-tab]', (t) => {
  t.preventDefault(), mh.ensure(t.target).showTarget();
});
w(() => {
  w(".disabled, [disabled]").on("click", (t) => {
    t.preventDefault(), t.stopImmediatePropagation();
  });
});
export {
  w as $,
  kl as ActionMenu,
  Cl as ActionMenuNested,
  Zl as Avatar,
  Ql as BtnGroup,
  Et as Component,
  st as ComponentFromReact,
  _t as ContextMenu,
  eo as CustomRender,
  ts as DTable,
  Uc as Dashboard,
  ie as Dropdown,
  Xl as EventBus,
  mu as HElement,
  wl as HtmlContent,
  El as Menu,
  uo as Messager,
  mo as Modal,
  he as ModalBase,
  rc as ModalTrigger,
  ac as Nav,
  mh as NavTabs,
  lc as Pager,
  yc as Picker,
  wc as Popovers,
  Yl as ProgressCircle,
  U as ReactComponent,
  Kl as Switch,
  Wt as TIME_DAY,
  vc as Toolbar,
  kt as Tooltip,
  Sa as calculateTimestamp,
  w as cash,
  T as classes,
  $d as convertBytes,
  ct as createDate,
  bu as createPortal,
  St as createRef,
  Cd as dom,
  Sd as formatBytes,
  mr as formatDate,
  Ud as formatDateSpan,
  lt as formatString,
  nl as getClassList,
  Vd as getTimeBeforeDesc,
  j as h,
  Ed as hh,
  gu as htm,
  Ut as i18n,
  Fd as isDBY,
  Wi as isObject,
  Zn as isSameDay,
  mf as isSameMonth,
  Id as isSameWeek,
  gr as isSameYear,
  Hd as isToday,
  zd as isTomorrow,
  Q as isValidElement,
  Bd as isYesterday,
  Yi as mergeDeep,
  va as nativeEvents,
  In as render,
  wu as renderCustomResult,
  Xi as renderIcon,
  tf as store,
  sl as storeData,
  hu as takeData
};
//# sourceMappingURL=zui.js.map
