var Ti = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var C = (t, e, n) => (Ti(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, O = (t, e, n, s) => (Ti(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var et = (t, e, n) => (Ti(t, e, "access private method"), n);
const Bt = document, Ts = window, Pa = Bt.documentElement, Ee = Bt.createElement.bind(Bt), Ia = Ee("div"), Ri = Ee("table"), yh = Ee("tbody"), Xo = Ee("tr"), { isArray: ai, prototype: Oa } = Array, { concat: wh, filter: Ir, indexOf: Ha, map: Ba, push: vh, slice: za, some: Or, splice: _h } = Oa, bh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, xh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, kh = /<.+>/, $h = /^\w+$/;
function Hr(t, e) {
  const n = Sh(e);
  return !t || !n && !ke(e) && !j(e) ? [] : !n && xh.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && $h.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class li {
  constructor(e, n) {
    if (!e)
      return;
    if (qi(e))
      return e;
    let s = e;
    if (tt(e)) {
      const i = n || Bt;
      if (s = bh.test(e) && ke(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : kh.test(e) ? Va(e) : qi(i) ? i.find(e) : tt(i) ? y(i).find(e) : Hr(e, i), !s)
        return;
    } else if (Me(e))
      return this.ready(e);
    (s.nodeType || s === Ts) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(e, n) {
    return new li(e, n);
  }
}
const x = li.prototype, y = x.init;
y.fn = y.prototype = x;
x.length = 0;
x.splice = _h;
typeof Symbol == "function" && (x[Symbol.iterator] = Oa[Symbol.iterator]);
function qi(t) {
  return t instanceof li;
}
function rn(t) {
  return !!t && t === t.window;
}
function ke(t) {
  return !!t && t.nodeType === 9;
}
function Sh(t) {
  return !!t && t.nodeType === 11;
}
function j(t) {
  return !!t && t.nodeType === 1;
}
function Ch(t) {
  return !!t && t.nodeType === 3;
}
function Eh(t) {
  return typeof t == "boolean";
}
function Me(t) {
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
function Fa(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Br(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
y.isWindow = rn;
y.isFunction = Me;
y.isArray = ai;
y.isNumeric = Fa;
y.isPlainObject = Br;
function K(t, e, n) {
  if (n) {
    let s = t.length;
    for (; s--; )
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  } else if (Br(t)) {
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
y.each = K;
x.each = function(t) {
  return K(this, t);
};
x.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Rs(...t) {
  const e = Eh(t[0]) ? t.shift() : !1, n = t.shift(), s = t.length;
  if (!n)
    return {};
  if (!s)
    return Rs(e, y, n);
  for (let i = 0; i < s; i++) {
    const r = t[i];
    for (const o in r)
      e && (ai(r[o]) || Br(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Rs(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
y.extend = Rs;
x.extend = function(t) {
  return Rs(x, t);
};
const Mh = /\S+/g;
function ci(t) {
  return tt(t) ? t.match(Mh) || [] : [];
}
x.toggleClass = function(t, e) {
  const n = ci(t), s = !at(e);
  return this.each((i, r) => {
    j(r) && K(n, (o, a) => {
      s ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(t) {
  return this.toggleClass(t, !0);
};
x.removeAttr = function(t) {
  const e = ci(t);
  return this.each((n, s) => {
    j(s) && K(e, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Th(t, e) {
  if (t) {
    if (tt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !j(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Pn(n) ? void 0 : n;
      }
      return at(e) ? this : Pn(e) ? this.removeAttr(t) : this.each((n, s) => {
        j(s) && s.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
x.attr = Th;
x.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
x.hasClass = function(t) {
  return !!t && Or.call(this, (e) => j(e) && e.classList.contains(t));
};
x.get = function(t) {
  return at(t) ? za.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
x.eq = function(t) {
  return y(this.get(t));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Rh(t) {
  return at(t) ? this.get().map((e) => j(e) || Ch(e) ? e.textContent : "").join("") : this.each((e, n) => {
    j(n) && (n.textContent = t);
  });
}
x.text = Rh;
function zt(t, e, n) {
  if (!j(t))
    return;
  const s = Ts.getComputedStyle(t, null);
  return n ? s.getPropertyValue(e) || void 0 : s[e] || t.style[e];
}
function vt(t, e) {
  return parseInt(zt(t, e), 10) || 0;
}
function Jo(t, e) {
  return vt(t, `border${e ? "Left" : "Top"}Width`) + vt(t, `padding${e ? "Left" : "Top"}`) + vt(t, `padding${e ? "Right" : "Bottom"}`) + vt(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ni = {};
function Nh(t) {
  if (Ni[t])
    return Ni[t];
  const e = Ee(t);
  Bt.body.insertBefore(e, null);
  const n = zt(e, "display");
  return Bt.body.removeChild(e), Ni[t] = n !== "none" ? n : "block";
}
function Zo(t) {
  return zt(t, "display") === "none";
}
function Ua(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function hi(t) {
  return tt(t) ? (e, n) => Ua(n, t) : Me(t) ? t : qi(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
x.filter = function(t) {
  const e = hi(t);
  return y(Ir.call(this, (n, s) => e.call(n, s, n)));
};
function le(t, e) {
  return e ? t.filter(e) : t;
}
x.detach = function(t) {
  return le(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Ah = /^\s*<(\w+)[^>]*>/, Lh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Qo = {
  "*": Ia,
  tr: yh,
  td: Xo,
  th: Xo,
  thead: Ri,
  tbody: Ri,
  tfoot: Ri
};
function Va(t) {
  if (!tt(t))
    return [];
  if (Lh.test(t))
    return [Ee(RegExp.$1)];
  const e = Ah.test(t) && RegExp.$1, n = Qo[e] || Qo["*"];
  return n.innerHTML = t, y(n.childNodes).detach().get();
}
y.parseHTML = Va;
x.has = function(t) {
  const e = tt(t) ? (n, s) => Hr(t, s).length : (n, s) => s.contains(t);
  return this.filter(e);
};
x.not = function(t) {
  const e = hi(t);
  return this.filter((n, s) => (!tt(t) || j(s)) && !e.call(s, n, s));
};
function jt(t, e, n, s) {
  const i = [], r = Me(e), o = s && hi(s);
  for (let a = 0, l = t.length; a < l; a++)
    if (r) {
      const h = e(t[a]);
      h.length && vh.apply(i, h);
    } else {
      let h = t[a][e];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[e] : null;
    }
  return i;
}
function qa(t) {
  return t.multiple && t.options ? jt(Ir.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Wh(t) {
  return arguments.length ? this.each((e, n) => {
    const s = n.multiple && n.options;
    if (s || Qa.test(n.type)) {
      const i = ai(t) ? Ba.call(t, String) : Pn(t) ? [] : [String(t)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = at(t) || Pn(t) ? "" : t;
  }) : this[0] && qa(this[0]);
}
x.val = Wh;
x.is = function(t) {
  const e = hi(t);
  return Or.call(this, (n, s) => e.call(n, s, n));
};
y.guid = 1;
function Ct(t) {
  return t.length > 1 ? Ir.call(t, (e, n, s) => Ha.call(s, e) === n) : t;
}
y.unique = Ct;
x.add = function(t, e) {
  return y(Ct(this.get().concat(y(t, e).get())));
};
x.children = function(t) {
  return le(y(Ct(jt(this, (e) => e.children))), t);
};
x.parent = function(t) {
  return le(y(Ct(jt(this, "parentNode"))), t);
};
x.index = function(t) {
  const e = t ? y(t)[0] : this[0], n = t ? this : y(e).parent().children();
  return Ha.call(n, e);
};
x.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
x.siblings = function(t) {
  return le(y(Ct(jt(this, (e) => y(e).parent().children().not(e)))), t);
};
x.find = function(t) {
  return y(Ct(jt(this, (e) => Hr(t, e))));
};
const Dh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ph = /^$|^module$|\/(java|ecma)script/i, Ih = ["type", "src", "nonce", "noModule"];
function Oh(t, e) {
  const n = y(t);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Ph.test(i.type) && Pa.contains(i)) {
      const r = Ee("script");
      r.text = i.textContent.replace(Dh, ""), K(Ih, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Hh(t, e, n, s, i) {
  s ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Oh(e, t.ownerDocument);
}
function ce(t, e, n, s, i, r, o, a) {
  return K(t, (l, h) => {
    K(y(h), (c, u) => {
      K(y(e), (d, f) => {
        const p = n ? u : f, g = n ? f : u, v = n ? c : d;
        Hh(p, v ? g.cloneNode(!0) : g, s, i, !v);
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
function Bh(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (at(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, s) => {
    j(s) && (e ? y(s).empty().append(t) : s.innerHTML = t);
  });
}
x.html = Bh;
x.appendTo = function(t) {
  return ce(arguments, this, !0, !1, !0);
};
x.wrapInner = function(t) {
  return this.each((e, n) => {
    const s = y(n), i = s.contents();
    i.length ? i.wrapAll(t) : s.append(t);
  });
};
x.before = function() {
  return ce(arguments, this, !1, !0);
};
x.wrapAll = function(t) {
  let e = y(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
x.wrap = function(t) {
  return this.each((e, n) => {
    const s = y(t)[0];
    y(n).wrapAll(e ? s.cloneNode(!0) : s);
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
  return y(Ct(jt(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
x.next = function(t, e, n) {
  return le(y(Ct(jt(this, "nextElementSibling", e, n))), t);
};
x.nextAll = function(t) {
  return this.next(t, !0);
};
x.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
x.parents = function(t, e) {
  return le(y(Ct(jt(this, "parentElement", !0, e))), t);
};
x.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
x.prev = function(t, e, n) {
  return le(y(Ct(jt(this, "previousElementSibling", e, n))), t);
};
x.prevAll = function(t) {
  return this.prev(t, !0);
};
x.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
x.map = function(t) {
  return y(wh.apply([], Ba.call(this, (e, n) => t.call(e, n, e))));
};
x.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && zt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Pa;
  });
};
x.slice = function(t, e) {
  return y(za.call(this, t, e));
};
const zh = /-([a-z])/g;
function zr(t) {
  return t.replace(zh, (e, n) => n.toUpperCase());
}
x.ready = function(t) {
  const e = () => setTimeout(t, 0, y);
  return Bt.readyState !== "loading" ? e() : Bt.addEventListener("DOMContentLoaded", e), this;
};
x.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = y(e);
    n.replaceWith(n.children());
  }), this;
};
x.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Ts.pageYOffset,
    left: e.left + Ts.pageXOffset
  };
};
x.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = zt(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = t.ownerDocument;
    let i = t.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && j(i)) {
      const r = y(i).offset();
      n.top -= r.top + vt(i, "borderTopWidth"), n.left -= r.left + vt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - vt(t, "marginTop"),
    left: n.left - vt(t, "marginLeft")
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
x.prop = function(t, e) {
  if (t) {
    if (tt(t))
      return t = ja[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, s) => {
        s[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
x.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[ja[t] || t];
  });
};
const Fh = /^--/;
function Fr(t) {
  return Fh.test(t);
}
const Ai = {}, { style: Uh } = Ia, Vh = ["webkit", "moz", "ms"];
function qh(t, e = Fr(t)) {
  if (e)
    return t;
  if (!Ai[t]) {
    const n = zr(t), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Vh.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in Uh)
        return Ai[t] = o, !1;
    });
  }
  return Ai[t];
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
function Ga(t, e, n = Fr(t)) {
  return !n && !jh[t] && Fa(e) ? `${e}px` : e;
}
function Gh(t, e) {
  if (tt(t)) {
    const n = Fr(t);
    return t = qh(t, n), arguments.length < 2 ? this[0] && zt(this[0], t, n) : t ? (e = Ga(t, e, n), this.each((s, i) => {
      j(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
x.css = Gh;
function Ya(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Yh = /^\s+|\s+$/;
function ta(t, e) {
  const n = t.dataset[e] || t.dataset[zr(e)];
  return Yh.test(n) ? n : Ya(JSON.parse, n);
}
function Kh(t, e, n) {
  n = Ya(JSON.stringify, n), t.dataset[zr(e)] = n;
}
function Xh(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ta(this[0], s);
    return n;
  }
  if (tt(t))
    return arguments.length < 2 ? this[0] && ta(this[0], t) : at(e) ? this : this.each((n, s) => {
      Kh(s, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
x.data = Xh;
function Ka(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
K([!0, !1], (t, e) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return rn(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ke(this[0]) ? Ka(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (r && e ? vt(this[0], `margin${n ? "Top" : "Left"}`) + vt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return at(s) ? void 0 : this;
    if (!arguments.length)
      return rn(this[0]) ? this[0].document.documentElement[`client${e}`] : ke(this[0]) ? Ka(this[0], e) : this[0].getBoundingClientRect()[n] - Jo(this[0], !t);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!j(o))
        return;
      const a = zt(o, "boxSizing");
      o.style[n] = Ga(n, i + (a === "border-box" ? Jo(o, !t) : 0));
    });
  };
});
const ea = "___cd";
x.toggle = function(t) {
  return this.each((e, n) => {
    if (!j(n))
      return;
    const s = Zo(n);
    (at(t) ? s : t) ? (n.style.display = n[ea] || "", Zo(n) && (n.style.display = Nh(n.tagName))) : s || (n[ea] = zt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const na = "___ce", Ur = ".", Vr = { focus: "focusin", blur: "focusout" }, Xa = { mouseenter: "mouseover", mouseleave: "mouseout" }, Jh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function qr(t) {
  return Xa[t] || Vr[t] || t;
}
function jr(t) {
  const e = t.split(Ur);
  return [e[0], e.slice(1).sort()];
}
x.trigger = function(t, e) {
  if (tt(t)) {
    const [s, i] = jr(t), r = qr(s);
    if (!r)
      return this;
    const o = Jh.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Bt.createEvent(o), t.initEvent(r, !0, !0), t.namespace = i.join(Ur), t.___ot = s;
  }
  t.___td = e;
  const n = t.___ot in Vr;
  return this.each((s, i) => {
    n && Me(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function Ja(t) {
  return t[na] = t[na] || {};
}
function Zh(t, e, n, s, i) {
  const r = Ja(t);
  r[e] = r[e] || [], r[e].push([n, s, i]), t.addEventListener(e, i);
}
function Za(t, e) {
  return !e || !Or.call(e, (n) => t.indexOf(n) < 0);
}
function Ns(t, e, n, s, i) {
  const r = Ja(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Za(o, n) || s && s !== a)
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
      !j(i) && !ke(i) && !rn(i) || Ns(i);
    });
  else if (tt(t))
    Me(e) && (n = e, e = ""), K(ci(t), (s, i) => {
      const [r, o] = jr(i), a = qr(r);
      this.each((l, h) => {
        !j(h) && !ke(h) && !rn(h) || Ns(h, a, o, e, n);
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
  return y(t).replaceWith(this), this;
};
function Qh(t, e, n, s, i) {
  if (!tt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return tt(e) || (at(e) || Pn(e) ? e = "" : at(n) ? (n = e, e = "") : (s = n, n = e, e = "")), Me(s) || (s = n, n = void 0), s ? (K(ci(t), (r, o) => {
    const [a, l] = jr(o), h = qr(a), c = a in Xa, u = a in Vr;
    h && this.each((d, f) => {
      if (!j(f) && !ke(f) && !rn(f))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !Za(l, g.namespace.split(Ur)) || !e && (u && (g.target !== f || g.___ot === h) || c && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let v = f;
        if (e) {
          let _ = g.target;
          for (; !Ua(_, e); )
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
        i && Ns(f, h, l, e, p), w === !1 && (g.preventDefault(), g.stopPropagation());
      };
      p.guid = s.guid = s.guid || y.guid++, Zh(f, h, l, e, p);
    });
  }), this) : this;
}
x.on = Qh;
function tu(t, e, n, s) {
  return this.on(t, e, n, s, !0);
}
x.one = tu;
const eu = /\r?\n/g;
function nu(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(eu, `\r
`))}`;
}
const su = /file|reset|submit|button|image/i, Qa = /radio|checkbox/i;
x.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || su.test(i.type) || Qa.test(i.type) && !i.checked)
        return;
      const r = qa(i);
      if (!at(r)) {
        const o = ai(r) ? r : [r];
        K(o, (a, l) => {
          t += nu(i.name, l);
        });
      }
    });
  }), t.slice(1);
};
window.$ = y;
function iu(t, e) {
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
function ru(t, e, n) {
  try {
    const s = iu(t, e), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function Li(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function ji(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Li(t) && Li(n))
    for (const s in n)
      Li(n[s]) ? (t[s] || Object.assign(t, { [s]: {} }), ji(t[s], n[s])) : Object.assign(t, { [s]: n[s] });
  return ji(t, ...e);
}
function st(t, ...e) {
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
var Gr = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Gr || {});
function kd(t, e = 2, n) {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Gr[n]).toFixed(e) + n);
}
const $d = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const s = n[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * Gr[s];
};
let Yr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Jt;
function ou() {
  return Yr;
}
function au(t) {
  Yr = t.toLowerCase();
}
function tl(t, e) {
  Jt || (Jt = {}), typeof t == "string" && (t = { [t]: e ?? {} }), ji(Jt, t);
}
function Ft(t, e, n, s, i, r) {
  Array.isArray(t) ? Jt && t.unshift(Jt) : t = Jt ? [Jt, t] : [t], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Yr;
  let a;
  for (const l of t) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === Jt ? `${r}.${e}` : e;
    if (a = ru(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? st(a, ...Array.isArray(n) ? n : [n]) : a;
}
function lu(t, e, n, s) {
  return Ft(void 0, t, e, n, s);
}
Ft.addLang = tl;
Ft.getLang = lu;
Ft.getCode = ou;
Ft.setCode = au;
tl({
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
function el(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? e[o][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? el(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const T = (...t) => el(...t).reduce((e, [n, s]) => (s && e.push(n), e), []).join(" ");
y.classes = T;
y.fn.setClass = function(t, ...e) {
  return this.each((n, s) => {
    const i = y(s);
    t === !0 ? i.attr("class", T(i.attr("class"), ...e)) : i.addClass(T(t, ...e));
  });
};
const dn = /* @__PURE__ */ new WeakMap();
function nl(t, e, n) {
  const s = dn.has(t), i = s ? dn.get(t) : {};
  typeof e == "string" ? i[e] = n : e === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, e), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && t instanceof Element && Object.assign(i, y(t).dataset(), i), dn.set(t, i)) : dn.delete(t);
}
function cu(t, e) {
  let n = dn.get(t) || {};
  return t instanceof Element && (n = Object.assign({}, y(t).dataset(), n)), e === void 0 ? n : n[e];
}
y.fn.dataset = y.fn.data;
y.fn.data = function(...t) {
  if (!this.length)
    return;
  const [e, n] = t;
  return !t.length || t.length === 1 && typeof e == "string" ? cu(this[0], e) : this.each((s, i) => nl(i, e, n));
};
y.fn.removeData = function(t = null) {
  return this.each((e, n) => nl(n, t));
};
y.fn._attr = y.fn.attr;
y.fn.extend({
  attr(...t) {
    const [e, n] = t;
    return !t.length || t.length === 1 && typeof e == "string" ? this._attr.apply(this, t) : typeof e == "object" ? (e && Object.keys(e).forEach((s) => {
      const i = e[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(e) : this._attr(e, n);
  }
});
y.Event = (t, e) => {
  const [n, ...s] = t.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = e, i;
};
function sl(t, e) {
  const n = y(t)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, d = l || c;
  if (e != null && e.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= d && i + o <= u;
  const f = i <= u && i + o >= 0, p = s <= d && s + r >= 0;
  return f && p;
}
y.fn.isVisible = function(t) {
  return this.each((e, n) => {
    sl(n, t);
  });
};
function Kr(t, e, n = !1) {
  const s = y(t);
  if (e !== void 0) {
    const i = `zui-runjs-${y.guid++}`;
    s.append(`<script id="${i}">${e}<\/script>`), n && s.find(`#${i}`).remove();
    return;
  }
  s.find("script").each((i, r) => {
    Kr(s, r.innerHTML), r.remove();
  });
}
y.runJS = (t, ...e) => (t = t.trim(), t.startsWith("return ") || (t = `return ${t}`), new Function(...e.map(([s]) => s), t)(...e.map(([, s]) => s)));
y.fn.runJS = function(t) {
  return this.each((e, n) => {
    Kr(n, t);
  });
};
const Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: sl,
  runJS: Kr
}, Symbol.toStringTag, { value: "Module" }));
var ui, B, il, Q, ge, sa, rl, Gi, As = {}, ol = [], hu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xr = Array.isArray;
function ne(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function al(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function q(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ui.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return hs(t, o, s, i, null);
}
function hs(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++il };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function $t() {
  return { current: null };
}
function fi(t) {
  return t.children;
}
function U(t, e) {
  this.props = t, this.context = e;
}
function In(t, e) {
  if (e == null)
    return t.__ ? In(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? In(t) : null;
}
function ll(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return ll(t);
  }
}
function ia(t) {
  (!t.__d && (t.__d = !0) && ge.push(t) && !Ls.__r++ || sa !== B.debounceRendering) && ((sa = B.debounceRendering) || rl)(Ls);
}
function Ls() {
  var t, e, n, s, i, r, o, a;
  for (ge.sort(Gi); t = ge.shift(); )
    t.__d && (e = ge.length, s = void 0, i = void 0, o = (r = (n = t).__v).__e, (a = n.__P) && (s = [], (i = ne({}, r)).__v = r.__v + 1, Jr(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? In(r), r.__h), dl(s, r), r.__e != o && ll(r)), ge.length > e && ge.sort(Gi));
  Ls.__r = 0;
}
function cl(t, e, n, s, i, r, o, a, l, h) {
  var c, u, d, f, p, g, v, w = s && s.__k || ol, _ = w.length;
  for (n.__k = [], c = 0; c < e.length; c++)
    if ((f = n.__k[c] = (f = e[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? hs(null, f, null, null, f) : Xr(f) ? hs(fi, { children: f }, null, null, null) : f.__b > 0 ? hs(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      Jr(t, f, d = d || As, i, r, o, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (v || (v = []), d.ref && v.push(d.ref, null, f), v.push(u, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = hl(f, l, t) : l = ul(t, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != t && (l = In(d));
    }
  for (n.__e = g, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = fl(s).nextSibling), gl(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      pl(v[c], v[++c], v[++c]);
}
function hl(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? hl(s, e, n) : ul(n, s, s, i, s.__e, e));
  return e;
}
function ul(t, e, n, s, i, r) {
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
function fl(t) {
  var e, n, s;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (s = fl(n)))
        return s;
  }
  return null;
}
function uu(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ws(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ws(t, r, e[r], n[r], s);
}
function ra(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || hu.test(e) ? n : n + "px";
}
function Ws(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || ra(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || ra(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? aa : oa, r) : t.removeEventListener(e, r ? aa : oa, r);
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
function oa(t) {
  return this.l[t.type + !1](B.event ? B.event(t) : t);
}
function aa(t) {
  return this.l[t.type + !0](B.event ? B.event(t) : t);
}
function Jr(t, e, n, s, i, r, o, a, l) {
  var h, c, u, d, f, p, g, v, w, _, k, E, S, M, N, A = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = B.__b) && h(e);
  try {
    t:
      if (typeof A == "function") {
        if (v = e.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? g = (c = e.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? e.__c = c = new A(v, _) : (e.__c = c = new U(v, _), c.constructor = A, c.render = du), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ne({}, c.__s)), ne(c.__s, A.getDerivedStateFromProps(v, c.__s))), d = c.props, f = c.state, c.__v = e, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(I) {
              I && (I.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = t, E = B.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, E && E(e), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, E && E(e), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = ne(ne({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), cl(t, Xr(N = h != null && h.type === fi && h.key == null ? h.props.children : h) ? N : [N], e, n, s, i, r, o, a, l), c.base = e.__e, e.__h = null, c.__h.length && o.push(c), g && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = fu(n.__e, e, n, s, i, r, o, l);
    (h = B.diffed) && h(e);
  } catch (I) {
    e.__v = null, (l || r != null) && (e.__e = a, e.__h = !!l, r[r.indexOf(a)] = null), B.__e(I, e, n);
  }
}
function dl(t, e) {
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
function fu(t, e, n, s, i, r, o, a) {
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
    if (r = r && ui.call(t.childNodes), h = (u = n.props || As).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < t.attributes.length; p++)
          u[t.attributes[p].name] = t.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (uu(t, d, u, i, a), c)
      e.__k = [];
    else if (cl(t, Xr(p = e.props.children) ? p : [p], e, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && In(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && al(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || f === "progress" && !p || f === "option" && p !== u.value) && Ws(t, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Ws(t, "checked", p, u.checked, !1));
  }
  return t;
}
function pl(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    B.__e(s, n);
  }
}
function gl(t, e, n) {
  var s, i;
  if (B.unmount && B.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || pl(s, null, e)), (s = t.__c) != null) {
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
      s[i] && gl(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || al(t.__e), t.__ = t.__e = t.__d = void 0;
}
function du(t, e, n) {
  return this.constructor(t, n);
}
function On(t, e, n) {
  var s, i, r;
  B.__ && B.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, r = [], Jr(e, t = (!s && n || e).__k = q(fi, null, [t]), i || As, As, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? ui.call(e.childNodes) : null, r, !s && n ? n : i ? i.__e : e.firstChild, s), dl(r, t);
}
ui = ol.slice, B = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, il = 0, Q = function(t) {
  return t != null && t.constructor === void 0;
}, U.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ne({}, this.state), typeof t == "function" && (t = t(ne({}, n), this.props)), t && ne(n, t), t != null && this.__v && (e && this._sb.push(e), ia(this));
}, U.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ia(this));
}, U.prototype.render = fi, ge = [], rl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Gi = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Ls.__r = 0;
var ml = function(t, e, n, s) {
  var i;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var o = e[r++], a = e[r] ? (e[0] |= o ? 1 : 2, n[e[r++]]) : e[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[e[++r]] = a : o === 6 ? s[1][e[++r]] += a + "" : o ? (i = t.apply(a, ml(t, a, n, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = i)) : s.push(a);
  }
  return s;
}, la = /* @__PURE__ */ new Map();
function pu(t) {
  var e = la.get(this);
  return e || (e = /* @__PURE__ */ new Map(), la.set(this, e)), (e = ml(this, e.get(t) || (e.set(t, e = function(n) {
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
const Cd = pu.bind(q);
function gu(t) {
  const { tagName: e = "div", className: n, style: s, children: i, attrs: r, ...o } = t;
  return q(e, { class: T(n), style: s, ...o, ...r }, i);
}
var mu = 0;
function m(t, e, n, s, i, r) {
  var o, a, l = {};
  for (a in e)
    a == "ref" ? o = e[a] : l[a] = e[a];
  var h = { type: t, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --mu, __source: i, __self: r };
  if (typeof t == "function" && (o = t.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return B.vnode && B.vnode(h), h;
}
var Un;
class yl extends U {
  constructor() {
    super(...arguments);
    L(this, Un, $t());
  }
  componentDidMount() {
    this.props.executeScript && y(C(this, Un).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ m(gu, { ref: C(this, Un), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Un = new WeakMap();
function yu(t) {
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
        const w = g.call(o, f, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(g);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Q(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ m("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: d,
    ...c
  }, f];
}
function Zr({
  tag: t = "div",
  ...e
}) {
  const [n, s] = yu(e);
  return q(t, n, ...s);
}
function Yi(t) {
  if (Q(t))
    return t;
  if (typeof t == "string")
    return t.startsWith("icon-") || (t = `icon-${t}`), /* @__PURE__ */ m("i", { class: `icon ${t}` });
}
function wu(t) {
  return this.getChildContext = () => t.context, t.children;
}
function vu(t) {
  const e = this, n = t._container;
  e.componentWillUnmount = function() {
    On(null, e._temp), e._temp = null, e._container = null;
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
  }), On(
    q(wu, { context: e.context }, t._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function _u(t, e) {
  const n = q(vu, { _vnode: t, _container: e });
  return n.containerInfo = e, n;
}
var wl = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Gt = (t, e, n) => (wl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ss = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Re = (t, e, n, s) => (wl(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), fe, pn, us, We;
const vl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    ss(this, fe, void 0), ss(this, pn, void 0), ss(this, us, void 0), ss(this, We, void 0);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = y(t);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = y.guid++;
    if (Re(this, us, a), Re(this, pn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Re(this, fe, { ...i, ...o.dataset() }), this.setOptions(e), Re(this, We, this.options.key ?? `__${a}`), o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(Gt(this, We), this);
    }
    this.init(), requestAnimationFrame(() => {
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
    return Gt(this, pn);
  }
  get key() {
    return Gt(this, We);
  }
  /**
   * Get the component options.
   */
  get options() {
    return Gt(this, fe);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Gt(this, us);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return y(this.element);
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
    const { NAMESPACE: t, KEY: e, DATA_KEY: n, MULTI_INSTANCE: s } = this.constructor;
    if (this.$element.off(t).removeData(e).attr(n, null), s) {
      const i = this.$element.data(`${e}:ALL`);
      i && i.delete(Gt(this, We));
    }
    Re(this, fe, void 0), Re(this, pn, void 0), this.emit("destroyed");
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && y.extend(Gt(this, fe), t), Gt(this, fe);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = y.Event(this.constructor.wrapEvent(t));
    return this.$element.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e) {
    this.$element.on(this.constructor.wrapEvent(t), e);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(t, e) {
    this.$element.one(this.constructor.wrapEvent(t), e);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(t, e) {
    this.$element.off(this.constructor.wrapEvent(t), e);
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
    return Ft(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Ft(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  static wrapEvent(t) {
    return t.split(" ").map((e) => e.includes(".") ? e : `${e}${this.NAMESPACE}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(t, e) {
    const n = y(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const s = n.data(`${this.KEY}:ALL`);
      return s ? s.get(e) : void 0;
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
    const { MULTI_INSTANCE: e, DATA_KEY: n } = this, s = [];
    return y(t || document).find(`[${n}]`).each((i, r) => {
      if (e) {
        const o = y(r).data(`${this.KEY}:ALL`);
        o ? s.push(...o.values()) : s.push(y(r).data(this.KEY));
      }
    }), s;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t, e) {
    return t === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(y(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    y.fn.extend({
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
let yt = vl;
fe = /* @__PURE__ */ new WeakMap();
pn = /* @__PURE__ */ new WeakMap();
us = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakMap();
yt.DEFAULT = {};
yt.NAME = vl.name;
yt.MULTI_INSTANCE = !1;
class it extends yt {
  constructor() {
    super(...arguments), this.ref = $t();
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
    On(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function bu({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return q(t, {
    className: T(e),
    style: s,
    ...i
  }, n);
}
function _l({
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
    Yi(l),
    /* @__PURE__ */ m("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    Yi(u)
  ];
  return q(e, {
    className: T(n, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...g,
    ...i
  }, ...v);
}
function xu({
  component: t = "div",
  className: e,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return q(t, {
    className: T(e),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function ku({
  component: t = "div",
  className: e,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return q(t, {
    className: T(e),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function $u({ type: t, ...e }) {
  return /* @__PURE__ */ m(Zr, { ...e });
}
function bl({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return q(t, {
    className: T(e),
    style: s,
    ...i
  }, n);
}
const Ki = class extends U {
  constructor() {
    super(...arguments), this.ref = $t();
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
    if (!e)
      return null;
    const s = this.getItemRenderProps(t, e, n), { itemRender: i } = t;
    if (i) {
      if (typeof i == "object") {
        const p = i[e.type || "item"];
        if (p)
          return /* @__PURE__ */ m(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
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
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Ki.ItemComponents[r] : o;
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
      ...d
    } = t, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ m(f, { class: T(this.name, i), style: n, ...d, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      o
    ] });
  }
};
let Te = Ki;
Te.ItemComponents = {
  divider: bu,
  item: _l,
  heading: xu,
  space: ku,
  custom: $u,
  basic: bl
};
Te.ROOT_TAG = "menu";
Te.NAME = "action-menu";
class xl extends it {
}
xl.NAME = "ActionMenu";
xl.Component = Te;
function kl({
  ...t
}) {
  return /* @__PURE__ */ m(_l, { ...t });
}
var $l = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ut = (t, e, n) => ($l(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Wi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Su = (t, e, n, s) => ($l(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), fs, Tt, gn;
let Qr = class extends Te {
  constructor(e) {
    super(e), Wi(this, fs, /* @__PURE__ */ new Set()), Wi(this, Tt, void 0), Wi(this, gn, (n, s, i) => {
      this.toggleNestedMenu(n, s), i.preventDefault();
    }), Su(this, Tt, e.nestedShow === void 0), ut(this, Tt) && (this.state = { nestedShow: e.defaultNestedShow ?? {} });
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
        nestedShow: ut(this, Tt) ? this.state.nestedShow : o,
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
    ut(this, fs).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ], i.component = kl), this.nestedTrigger === "hover")
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
    const n = ut(this, Tt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[e] : !!n;
  }
  toggleNestedMenu(e, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(e, n);
    if (!ut(this, Tt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, fs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    ut(this, Tt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ut(this, Tt) && this.setState({ nestedShow: !1 });
  }
};
fs = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
gn = /* @__PURE__ */ new WeakMap();
Qr.ItemComponents = {
  item: kl
};
class Sl extends it {
}
Sl.NAME = "ActionMenuNested";
Sl.Component = Qr;
let di = class extends Qr {
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
di.NAME = "menu";
class Cl extends it {
}
Cl.NAME = "Menu";
Cl.Component = di;
class Ut extends U {
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
      caret: w,
      square: _,
      hint: k,
      ...E
    } = this.props, S = e || (a ? "a" : "button"), M = g == null || typeof g == "string" && !g.length || u && !f, N = w && M && !p && !v && !o && !u;
    return q(
      S,
      {
        className: T("btn", n, r, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: _ === void 0 ? !N && !o && M : _
        }, i ? `size-${i}` : ""),
        title: k,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: l,
        type: S === "button" ? s : void 0,
        ...E
      },
      u ? /* @__PURE__ */ m("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : Yi(p),
      M ? null : /* @__PURE__ */ m("span", { className: "text", children: u ? f : g }),
      u ? null : o,
      u ? null : typeof v == "string" ? /* @__PURE__ */ m("i", { class: `icon ${v}` }) : v,
      u ? null : w ? /* @__PURE__ */ m("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Cu({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Ut, { type: n, ...s });
}
function Xn(t) {
  return t.split("-")[1];
}
function to(t) {
  return t === "y" ? "height" : "width";
}
function ve(t) {
  return t.split("-")[0];
}
function Jn(t) {
  return ["top", "bottom"].includes(ve(t)) ? "x" : "y";
}
function ca(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Jn(e), l = to(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (ve(e)) {
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
const Eu = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: c, y: u } = ca(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: w } = a[g], { x: _, y: k, data: E, reset: S } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    c = _ ?? c, u = k ?? u, f = { ...f, [v]: { ...f[v], ...E } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : S.rects), { x: c, y: u } = ca(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function El(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Ds(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Ml(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = t, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = El(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], v = Ds(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, E = Ds(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - E.top + p.top) / k.y, bottom: (E.bottom - v.bottom + p.bottom) / k.y, left: (v.left - E.left + p.left) / k.x, right: (E.right - v.right + p.right) / k.x };
}
const Mu = Math.min, Tu = Math.max;
function Xi(t, e, n) {
  return Tu(t, Mu(e, n));
}
const Ji = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: l, elements: h } = e;
  if (n == null)
    return {};
  const c = El(s), u = { x: i, y: r }, d = Jn(o), f = to(d), p = await l.getDimensions(n), g = d === "y", v = g ? "top" : "left", w = g ? "bottom" : "right", _ = g ? "clientHeight" : "clientWidth", k = a.reference[f] + a.reference[d] - u[d] - a.floating[f], E = u[d] - a.reference[d], S = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let M = S ? S[_] : 0;
  M && await (l.isElement == null ? void 0 : l.isElement(S)) || (M = h.floating[_] || a.floating[f]);
  const N = k / 2 - E / 2, A = c[v], I = M - p[f] - c[w], b = M / 2 - p[f] / 2 + N, R = Xi(A, b, I), W = Xn(o) != null && b != R && a.reference[f] / 2 - (b < A ? c[v] : c[w]) - p[f] / 2 < 0;
  return { [d]: u[d] - (W ? b < A ? A - b : I - b : 0), data: { [d]: R, centerOffset: b - R } };
} }), Ru = ["top", "right", "bottom", "left"];
Ru.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Nu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ps(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Nu[e]);
}
function Au(t, e, n) {
  n === void 0 && (n = !1);
  const s = Xn(t), i = Jn(t), r = to(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = Ps(o)), { main: o, cross: Ps(o) };
}
const Lu = { start: "end", end: "start" };
function Di(t) {
  return t.replace(/start|end/g, (e) => Lu[e]);
}
const pi = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = t, v = ve(s), w = ve(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = u || (w || !p ? [Ps(o)] : function(R) {
      const W = Ps(R);
      return [Di(R), W, Di(W)];
    }(o));
    u || f === "none" || k.push(...function(R, W, z, H) {
      const D = Xn(R);
      let V = function(Et, ln, es) {
        const cn = ["left", "right"], ns = ["right", "left"], Mi = ["top", "bottom"], mh = ["bottom", "top"];
        switch (Et) {
          case "top":
          case "bottom":
            return es ? ln ? ns : cn : ln ? cn : ns;
          case "left":
          case "right":
            return ln ? Mi : mh;
          default:
            return [];
        }
      }(ve(R), z === "start", H);
      return D && (V = V.map((Et) => Et + "-" + D), W && (V = V.concat(V.map(Di)))), V;
    }(o, p, f, _));
    const E = [o, ...k], S = await Ml(e, g), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(S[v]), c) {
      const { main: R, cross: W } = Au(s, r, _);
      M.push(S[R], S[W]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var A, I;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, W = E[R];
      if (W)
        return { data: { index: R, overflows: N }, reset: { placement: W } };
      let z = (I = N.filter((H) => H.overflows[0] <= 0).sort((H, D) => H.overflows[1] - D.overflows[1])[0]) == null ? void 0 : I.placement;
      if (!z)
        switch (d) {
          case "bestFit": {
            var b;
            const H = (b = N.map((D) => [D.placement, D.overflows.filter((V) => V > 0).reduce((V, Et) => V + Et, 0)]).sort((D, V) => D[1] - V[1])[0]) == null ? void 0 : b[0];
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
}, eo = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = ve(a), d = Xn(a), f = Jn(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: k } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof k == "number" && (_ = d === "end" ? -1 * k : k), f ? { x: _ * g, y: w * p } : { x: w * p, y: _ * g };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Wu(t) {
  return t === "x" ? "y" : "x";
}
const Zi = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: s, placement: i } = e, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = t, h = { x: n, y: s }, c = await Ml(e, l), u = Jn(ve(i)), d = Wu(u);
    let f = h[u], p = h[d];
    if (r) {
      const v = u === "y" ? "bottom" : "right";
      f = Xi(f + c[u === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = d === "y" ? "bottom" : "right";
      p = Xi(p + c[d === "y" ? "top" : "left"], p, p - c[v]);
    }
    const g = a.fn({ ...e, [u]: f, [d]: p });
    return { ...g, data: { x: g.x - n, y: g.y - s } };
  } };
};
function ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function dt(t) {
  return ht(t).getComputedStyle(t);
}
function Tl(t) {
  return t instanceof ht(t).Node;
}
function oe(t) {
  return Tl(t) ? (t.nodeName || "").toLowerCase() : "";
}
function gt(t) {
  return t instanceof ht(t).HTMLElement;
}
function ot(t) {
  return t instanceof ht(t).Element;
}
function ha(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ht(t).ShadowRoot || t instanceof ShadowRoot;
}
function Hn(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = dt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Du(t) {
  return ["table", "td", "th"].includes(oe(t));
}
function Qi(t) {
  const e = no(), n = dt(t);
  return n.transform !== "none" || n.perspective !== "none" || !e && !!n.backdropFilter && n.backdropFilter !== "none" || !e && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function no() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function gi(t) {
  return ["html", "body", "#document"].includes(oe(t));
}
const ua = Math.min, En = Math.max, Is = Math.round;
function Rl(t) {
  const e = dt(t);
  let n = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = gt(t), r = i ? t.offsetWidth : n, o = i ? t.offsetHeight : s, a = Is(n) !== r || Is(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, fallback: a };
}
function Nl(t) {
  return ot(t) ? t : t.contextElement;
}
const Al = { x: 1, y: 1 };
function Ue(t) {
  const e = Nl(t);
  if (!gt(e))
    return Al;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = Rl(e);
  let o = (r ? Is(n.width) : n.width) / s, a = (r ? Is(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const fa = { x: 0, y: 0 };
function Ll(t, e, n) {
  var s, i;
  if (e === void 0 && (e = !0), !no())
    return fa;
  const r = t ? ht(t) : window;
  return !n || e && n !== r ? fa : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function $e(t, e, n, s) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Nl(t);
  let o = Al;
  e && (s ? ot(s) && (o = Ue(s)) : o = Ue(t));
  const a = Ll(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, u = i.height / o.y;
  if (r) {
    const d = ht(r), f = s && ot(s) ? ht(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const g = Ue(p), v = p.getBoundingClientRect(), w = getComputedStyle(p);
      v.x += (p.clientLeft + parseFloat(w.paddingLeft)) * g.x, v.y += (p.clientTop + parseFloat(w.paddingTop)) * g.y, l *= g.x, h *= g.y, c *= g.x, u *= g.y, l += v.x, h += v.y, p = ht(p).frameElement;
    }
  }
  return Ds({ width: c, height: u, x: l, y: h });
}
function se(t) {
  return ((Tl(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function mi(t) {
  return ot(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Wl(t) {
  return $e(se(t)).left + mi(t).scrollLeft;
}
function on(t) {
  if (oe(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || ha(t) && t.host || se(t);
  return ha(e) ? e.host : e;
}
function Dl(t) {
  const e = on(t);
  return gi(e) ? e.ownerDocument.body : gt(e) && Hn(e) ? e : Dl(e);
}
function Mn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = Dl(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ht(s);
  return i ? e.concat(r, r.visualViewport || [], Hn(s) ? s : []) : e.concat(s, Mn(s));
}
function da(t, e, n) {
  let s;
  if (e === "viewport")
    s = function(i, r) {
      const o = ht(i), a = se(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = no();
        (!f || f && r === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(t, n);
  else if (e === "document")
    s = function(i) {
      const r = se(i), o = mi(i), a = i.ownerDocument.body, l = En(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = En(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Wl(i);
      const u = -o.scrollTop;
      return dt(a).direction === "rtl" && (c += En(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(se(t));
  else if (ot(e))
    s = function(i, r) {
      const o = $e(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = gt(i) ? Ue(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, n);
  else {
    const i = Ll(t);
    s = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return Ds(s);
}
function Pl(t, e) {
  const n = on(t);
  return !(n === e || !ot(n) || gi(n)) && (dt(n).position === "fixed" || Pl(n, e));
}
function pa(t, e) {
  return gt(t) && dt(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function ga(t, e) {
  const n = ht(t);
  if (!gt(t))
    return n;
  let s = pa(t, e);
  for (; s && Du(s) && dt(s).position === "static"; )
    s = pa(s, e);
  return s && (oe(s) === "html" || oe(s) === "body" && dt(s).position === "static" && !Qi(s)) ? n : s || function(i) {
    let r = on(i);
    for (; gt(r) && !gi(r); ) {
      if (Qi(r))
        return r;
      r = on(r);
    }
    return null;
  }(t) || n;
}
function Pu(t, e, n) {
  const s = gt(e), i = se(e), r = n === "fixed", o = $e(t, !0, r, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && !r)
    if ((oe(e) !== "body" || Hn(i)) && (a = mi(e)), gt(e)) {
      const h = $e(e, !0, r, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = Wl(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Iu = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Mn(h).filter((v) => ot(v) && oe(v) !== "body"), f = null;
    const p = dt(h).position === "fixed";
    let g = p ? on(h) : h;
    for (; ot(g) && !gi(g); ) {
      const v = dt(g), w = Qi(g);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Hn(g) && !w && Pl(h, g)) ? d = d.filter((_) => _ !== g) : f = v, g = on(g);
    }
    return c.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = da(e, c, i);
    return h.top = En(u.top, h.top), h.right = ua(u.right, h.right), h.bottom = ua(u.bottom, h.bottom), h.left = En(u.left, h.left), h;
  }, da(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = gt(n), r = se(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((oe(n) !== "body" || Hn(r)) && (o = mi(n)), gt(n))) {
    const h = $e(n);
    a = Ue(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + l.x, y: e.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: ot, getDimensions: function(t) {
  return Rl(t);
}, getOffsetParent: ga, getDocumentElement: se, getScale: Ue, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || ga, r = this.getDimensions;
  return { reference: Pu(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => dt(t).direction === "rtl" };
function so(t, e, n, s) {
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
const yi = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Iu, ...n }, r = { ...i.platform, _c: s };
  return Eu(t, e, { ...i, platform: r });
};
let Ou = class extends di {
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
      middleware: [pi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  createPopper() {
    const e = this.getPopperOptions();
    this.ref.current && yi(this.getPopperElement(), this.ref.current, e).then(({ x: n, y: s }) => {
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
var io = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Mt = (t, e, n) => (io(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ne = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, is = (t, e, n, s) => (io(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ma = (t, e, n) => (io(t, e, "access private method"), n), Yt, mn, ds, ps, tr, Il, er, Ol;
const Pi = "show", Hu = '[data-toggle="contextmenu"]';
class _t extends yt {
  constructor() {
    super(...arguments), Ne(this, tr), Ne(this, er), Ne(this, Yt, void 0), Ne(this, mn, void 0), Ne(this, ds, void 0), Ne(this, ps, void 0);
  }
  get isShown() {
    return Mt(this, Yt) && y(Mt(this, Yt)).hasClass(Pi);
  }
  get menu() {
    return Mt(this, Yt) || this.ensureMenu();
  }
  get trigger() {
    return Mt(this, ds) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  show(e) {
    return this.isShown || (is(this, ds, e), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (y(this.menu).addClass(Pi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = Mt(this, ps)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (y(Mt(this, Yt)).removeClass(Pi), this.emit("hidden"), !0);
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    var e;
    super.destroy(), this.hide(), (e = Mt(this, Yt)) == null || e.remove();
  }
  ensureMenu() {
    const { $element: e } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = y(`<div class="${n}" />`).appendTo("body");
    else if (e.length) {
      const i = e.attr("href") || e.dataset("target") || "";
      if (i[0] === "#" && (s = y(document).find(i)), !(s != null && s.length)) {
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
    return this.options.flip && ((i = s.middleware) == null || i.push(pi())), s;
  }
  createPopper() {
    const e = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    is(this, ps, so(n, s, () => {
      yi(n, s, e).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        y(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = ma(this, tr, Il).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: u } = o.arrow;
          y(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ma(this, er, Ol).call(this, l)
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
    return !e || this.emit("updateMenu", e, this.trigger).defaultPrevented ? !1 : (On(q(Ou, e), this.menu), !0);
  }
  getPopperElement() {
    return Mt(this, mn) || is(this, mn, {
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
    }), Mt(this, mn);
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
ds = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
tr = /* @__PURE__ */ new WeakSet();
Il = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
er = /* @__PURE__ */ new WeakSet();
Ol = function(t) {
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
y(document).on("contextmenu", (t) => {
  const e = y(t.target);
  if (e.closest(`.${_t.MENU_CLASS}`).length)
    return;
  const n = e.closest(Hu).not(":disabled,.disabled");
  n.length && (_t.ensure(n).show(t), t.preventDefault());
}).on("click", _t.clear.bind(_t));
var ro = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, yn = (t, e, n) => (ro(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, nr = (t, e, n, s) => (ro(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Bu = (t, e, n) => (ro(t, e, "access private method"), n), Tn, wn, Os, sr, Hl;
const ya = '[data-toggle="dropdown"]', Bl = class extends _t {
  constructor() {
    super(...arguments), rs(this, sr), rs(this, Tn, !1), rs(this, wn, 0), this.hideLater = () => {
      yn(this, Os).call(this), nr(this, wn, window.setTimeout(this.hide.bind(this), 100));
    }, rs(this, Os, () => {
      clearTimeout(yn(this, wn)), nr(this, wn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && Bl.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const n = super.show(t);
    return n && (!yn(this, Tn) && this.isHover && Bu(this, sr, Hl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    yn(this, Tn) && y(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((n = t.middleware) == null || n.push(eo(e)), (s = t.middleware) == null || s.push(Ji({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const e = this.getArrowSize(), n = y("<div />").css({
        position: "absolute",
        width: `${e}px`,
        height: `${e}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0], y(t).append(n);
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: e } = t;
      t.afterRender = (...n) => {
        this.arrowEl && y(this.menu).find(".menu").append(this.arrowEl), e == null || e(...n);
      };
    }
    return t;
  }
};
let ie = Bl;
Tn = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakMap();
sr = /* @__PURE__ */ new WeakSet();
Hl = function() {
  y(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, yn(this, Os)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), nr(this, Tn, !0);
};
ie.MENU_CLASS = "dropdown-menu";
ie.NAME = "Dropdown";
ie.DEFAULT = {
  ..._t.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
y(document).on("click", function(t) {
  const e = y(t.target).closest(ya).not(":disabled,.disabled");
  if (e.length) {
    const n = ie.ensure(e);
    n.options.trigger === "click" && n.toggle();
  } else
    ie.clear({ event: t });
}).on("mouseover", function(t) {
  var s, i;
  const e = (i = (s = t.target).closest) == null ? void 0 : i.call(s, ya);
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
var Vn, Ge;
class zu extends U {
  constructor(n) {
    var s;
    super(n);
    L(this, Vn, void 0);
    L(this, Ge, $t());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, Ge);
  }
  get triggerElement() {
    return C(this, Ge).current;
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
    }), O(this, Vn, ie.ensure(this.triggerElement, {
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
    (n = C(this, Vn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, Ge)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...s, children: n });
  }
}
Vn = new WeakMap(), Ge = new WeakMap();
class Fu extends zu {
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
    return s.caret = i, /* @__PURE__ */ m(Ut, { ...s });
  }
}
function zl({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Fu, { type: n, ...s });
}
let Fl = class extends U {
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
    return /* @__PURE__ */ m(Ut, { ...i }, s);
  }
  renderItem(e, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = e, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
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
function Uu({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Fl, { type: n, ...s });
}
let St = class extends Te {
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
St.ItemComponents = {
  item: Cu,
  dropdown: zl,
  "btn-group": Uu
};
St.ROOT_TAG = "nav";
St.NAME = "toolbar";
St.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Vu({
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
  a === !0 ? u = /* @__PURE__ */ m(Ut, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : Q(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ m(Ut, { ...a, onClick: l }));
  const d = Q(n) ? n : n ? /* @__PURE__ */ m(St, { ...n }) : null;
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
let ju = class extends U {
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
      Vu,
      {
        className: T("messager", l, i, o === !0 ? qu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Gu = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Yu = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, hn = (t, e, n) => (Gu(t, e, "access private method"), n), de, De;
class oo extends it {
  constructor() {
    super(...arguments), Yu(this, de), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: e }) => {
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
      y(e.target).closest('.alert-close,[data-dismiss="messager"]').length && (e.preventDefault(), e.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), hn(this, de, De).call(this, () => {
      this._show = !0, this.render(), hn(this, de, De).call(this, () => {
        this.emit("shown");
        const { time: e } = this.options;
        e && hn(this, de, De).call(this, () => this.hide(), e);
      });
    }, 100);
  }
  hide() {
    this._show && hn(this, de, De).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), hn(this, de, De).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
de = /* @__PURE__ */ new WeakSet();
De = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
};
oo.NAME = "MessagerItem";
oo.Component = ju;
var ao = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, _e = (t, e, n) => (ao(t, e, "read from private field"), n ? n.call(t) : e.get(t)), as = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, gs = (t, e, n, s) => (ao(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ul = (t, e, n) => (ao(t, e, "access private method"), n), Ve, Pt, ir, Vl, lo, ql;
const jl = class extends yt {
  constructor() {
    super(...arguments), as(this, ir), as(this, lo), as(this, Ve, void 0), as(this, Pt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = _e(this, Pt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Ul(this, ir, Vl).call(this).show();
  }
  hide() {
    var t;
    (t = _e(this, Pt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, s = jl.ensure(e || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let co = jl;
Ve = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
ir = /* @__PURE__ */ new WeakSet();
Vl = function() {
  if (_e(this, Pt))
    _e(this, Pt).setOptions(this.options);
  else {
    const t = Ul(this, lo, ql).call(this), e = new oo(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), gs(this, Ve, void 0), gs(this, Pt, void 0);
    }), gs(this, Pt, e);
  }
  return _e(this, Pt);
};
lo = /* @__PURE__ */ new WeakSet();
ql = function() {
  if (_e(this, Ve))
    return _e(this, Ve);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = y(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let n = e.find(`#messager-${this.gid}`);
  return n.length || (n = y(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), gs(this, Ve, n[0])), n[0];
};
co.NAME = "messager";
co.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
y(document).on("zui.messager.show", (t, e) => {
  e && co.show(e);
});
let ho = class extends U {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ m("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - e) / 100, "stroke-width": s }),
      /* @__PURE__ */ m("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(e) })
    ] });
  }
};
ho.NAME = "zui.progress-circle";
ho.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Gl extends it {
}
Gl.NAME = "ProgressCircle";
Gl.Component = ho;
let Ku = class extends U {
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
class Yl extends it {
}
Yl.NAME = "Switch";
Yl.Component = Ku;
var Dt;
class Xu {
  constructor(e = "") {
    L(this, Dt, void 0);
    typeof e == "object" ? O(this, Dt, e) : O(this, Dt, document.appendChild(document.createComment(e)));
  }
  on(e, n, s) {
    C(this, Dt).addEventListener(e, n, s);
  }
  once(e, n, s) {
    C(this, Dt).addEventListener(e, n, { once: !0, ...s });
  }
  off(e, n, s) {
    C(this, Dt).removeEventListener(e, n, s);
  }
  emit(e) {
    return C(this, Dt).dispatchEvent(e), e;
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
class Kl extends Xu {
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
    return typeof e == "string" && (wa.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Kl.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (wa.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
let wi = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var qn, Zt, wt, Ye, Ke, ms;
const Ko = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    L(this, Ke);
    L(this, qn, void 0);
    L(this, Zt, void 0);
    L(this, wt, void 0);
    L(this, Ye, void 0);
    O(this, qn, n), O(this, Zt, `ZUI_STORE:${e ?? wi()}`), O(this, wt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, qn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, Ye) || O(this, Ye, new Ko(C(this, Zt), "session")), C(this, Ye));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const s = C(this, wt).getItem(et(this, Ke, ms).call(this, e));
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
    C(this, wt).setItem(et(this, Ke, ms).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    C(this, wt).removeItem(et(this, Ke, ms).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < C(this, wt).length; n++) {
      const s = C(this, wt).key(n);
      if (s != null && s.startsWith(C(this, Zt))) {
        const i = C(this, wt).getItem(s);
        typeof i == "string" && e(s.substring(C(this, Zt).length + 1), JSON.parse(i));
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
let Hs = Ko;
qn = new WeakMap(), Zt = new WeakMap(), wt = new WeakMap(), Ye = new WeakMap(), Ke = new WeakSet(), ms = function(e) {
  return `${C(this, Zt)}:${e}`;
};
const Ju = new Hs("DEFAULT");
function Zu(t, e = "local") {
  return new Hs(t, e);
}
Object.assign(Ju, { create: Zu });
function Qu(t) {
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
function tf(t) {
  const [e, n, s] = typeof t == "string" ? Qu(t) : t;
  return e * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function va(t, e) {
  return tf(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function _a(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function ef(t, e, n) {
  t = t % 360 / 360, e = _a(e), n = _a(n);
  const s = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function nf(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function sf(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t[0].toUpperCase() : t.length <= e ? t : t.substring(0, e);
}
let Xl = class extends U {
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
    } = this.props, w = ["avatar", e], _ = { ...n, background: o, color: a };
    let k = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (w.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let E;
    if (u)
      w.push("has-img"), E = /* @__PURE__ */ m("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const S = sf(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (_.color = va(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : nf(N)) * d % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const I = ef(A, f, p);
          _.color = va(I);
        }
      }
      let M;
      k && k < 14 * S.length && (M = { transform: `scale(${k / (14 * S.length)})`, whiteSpace: "nowrap" }), E = /* @__PURE__ */ m("div", { "data-actualSize": k, className: "avatar-text", style: M, children: S });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: T(w),
        style: _,
        ...v,
        children: [
          E,
          g
        ]
      }
    );
  }
};
class Jl extends it {
}
Jl.NAME = "Avatar";
Jl.Component = Xl;
class Zl extends it {
}
Zl.NAME = "BtnGroup";
Zl.Component = Fl;
var uo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, me = (t, e, n) => (uo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), un = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Rn = (t, e, n, s) => (uo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ii = (t, e, n) => (uo(t, e, "access private method"), n), He, ys, pe, rr, vn, ws;
const Oi = "show", ba = "in", rf = '[data-dismiss="modal"]', vs = class extends yt {
  constructor() {
    super(...arguments), un(this, vn), un(this, He, 0), un(this, ys, void 0), un(this, pe, void 0), un(this, rr, (t) => {
      const e = t.target;
      (e.closest(rf) || this.options.backdrop === !0 && !e.closest(".modal-dialog") && e.closest(".modal")) && this.hide();
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
    if (this.on("click", me(this, rr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const e = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = t.clientWidth, s = t.clientHeight;
          (!me(this, pe) || me(this, pe)[0] !== n || me(this, pe)[1] !== s) && (Rn(this, pe, [n, s]), this.layout());
        });
        e.observe(t), Rn(this, ys, e);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = me(this, ys)) == null || t.disconnect();
  }
  show(t) {
    if (this.shown)
      return !1;
    this.setOptions(t);
    const { modalElement: e } = this, { animation: n, backdrop: s, className: i, style: r } = this.options;
    return y(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Oi, i).css({
      zIndex: `${vs.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Ii(this, vn, ws).call(this, () => {
      y(e).addClass(ba), Ii(this, vn, ws).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (y(this.modalElement).removeClass(ba), this.emit("hide"), Ii(this, vn, ws).call(this, () => {
      y(this.modalElement).removeClass(Oi), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    e = e ?? this.options.size, y(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof e == "object" ? (s.width = e.width, s.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? y(n).attr("data-size", e) : e && (s.width = e), y(n).css(s), t = t ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Rn(this, pe, [i, r]), typeof t == "function" && (t = t({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (o.alignSelf = "flex-start", o.top = t) : typeof t == "object" && t ? (o.alignSelf = "flex-start", Object.assign(o, t)) : t === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : t === "bottom" ? o.alignSelf = "flex-end" : t === "top" ? o.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (o.alignSelf = "flex-start", o.top = t), y(n).css(o), y(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(t) {
    var e;
    (e = vs.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = vs.query(t)) == null || e.show();
  }
};
let he = vs;
He = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakMap();
rr = /* @__PURE__ */ new WeakMap();
vn = /* @__PURE__ */ new WeakSet();
ws = function(t, e) {
  me(this, He) && (clearTimeout(me(this, He)), Rn(this, He, 0)), t && (this.options.animation ? Rn(this, He, window.setTimeout(t, e ?? this.options.transTime)) : t());
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
y(window).on("resize.modal.zui", () => {
  he.getAll().forEach((t) => {
    const e = t;
    e.shown && e.options.responsive && e.layout();
  });
});
y(document).on("to-hide.modal.zui", (t, e) => {
  he.hide(e == null ? void 0 : e.target);
});
class Ql extends U {
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
      e ? /* @__PURE__ */ m(St, { ...e }) : null,
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
    return Q(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-footer", children: n ? /* @__PURE__ */ m(St, { ...n }) : null });
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
Ql.defaultProps = { closeBtn: !0 };
var Xe, Je, Ze;
class of extends U {
  constructor() {
    super(...arguments);
    L(this, Xe, void 0);
    L(this, Je, void 0);
    L(this, Ze, void 0);
    O(this, Xe, $t()), this.state = {}, O(this, Ze, () => {
      var i, r;
      const n = (r = (i = C(this, Xe).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, Je);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), O(this, Je, s);
    });
  }
  componentDidMount() {
    C(this, Ze).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, Je)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, Xe),
        onLoad: C(this, Ze)
      }
    );
  }
}
Xe = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap();
var fo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ae = (t, e, n) => (fo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Le = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, fn = (t, e, n, s) => (fo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Be = (t, e, n) => (fo(t, e, "access private method"), n), _s, bs, Rt, Bn, vi, or, tc, xs, ar;
function af(t, e) {
  const { custom: n, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function lf(t, e) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = e, c = await (await fetch(s, {
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
    body: n === "html" ? /* @__PURE__ */ m(yl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function cf(t, e) {
  const { url: n, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ m(of, { url: n })
  };
}
const hf = {
  custom: af,
  ajax: lf,
  iframe: cf
}, Kt = class extends he {
  constructor() {
    super(...arguments), Le(this, Bn), Le(this, or), Le(this, xs), Le(this, _s, void 0), Le(this, bs, void 0), Le(this, Rt, void 0);
  }
  get id() {
    return Ae(this, bs);
  }
  get loading() {
    var t;
    return (t = this.modalElement) == null ? void 0 : t.classList.contains(Kt.LOADING_CLASS);
  }
  get modalElement() {
    let t = Ae(this, _s);
    if (!t) {
      const { id: e } = this;
      t = y(this.element).find(`#${e}`)[0], t || (t = y("<div>").attr("id", e).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), fn(this, _s, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), fn(this, bs, this.options.id || `modal-${wi()}`);
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
    Ae(this, Rt) && clearTimeout(Ae(this, Rt));
    const { modalElement: t, options: e } = this, { type: n, loadTimeout: s } = e, i = hf[n];
    if (!i)
      return console.warn(`Modal: Cannot build modal with type "${n}"`), !1;
    t.classList.add(Kt.LOADING_CLASS), await Be(this, or, tc).call(this), s && fn(this, Rt, window.setTimeout(() => {
      fn(this, Rt, 0), Be(this, xs, ar).call(this, this.options.timeoutTip);
    }, s));
    const r = await i.call(this, t, e);
    return r === !1 ? await Be(this, xs, ar).call(this, this.options.failedTip) : r && typeof r == "object" && await Be(this, Bn, vi).call(this, r), Ae(this, Rt) && (clearTimeout(Ae(this, Rt)), fn(this, Rt, 0)), t.classList.remove(Kt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...s } = t, i = Kt.ensure(n, { show: !0, ...s });
      i.one("hidden", () => e(i)), i.show();
    });
  }
  static async alert(t) {
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
      }, typeof f.key == "string" && (f.text || (f.text = Ft.getLang(f.key, f.key)), f.btnType || (f.btnType = `btn-wide ${f.key === "confirm" ? "primary" : "btn-default"}`)), f && c.push(f);
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
    return await Kt.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: d, ...typeof a == "function" ? a() : a },
      ...l
    }), u;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...s } = t;
    return await Kt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), e == null || e(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let po = Kt;
_s = /* @__PURE__ */ new WeakMap();
bs = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakSet();
vi = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], y(this.modalElement).runJS(), e();
    const { afterRender: n, ...s } = t;
    t = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), e();
      },
      ...s
    }, On(
      /* @__PURE__ */ m(Ql, { ...t }),
      this.modalElement
    );
  });
};
or = /* @__PURE__ */ new WeakSet();
tc = function() {
  const { loadingText: t } = this.options;
  return Be(this, Bn, vi).call(this, {
    body: /* @__PURE__ */ m("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ m("span", { className: "spinner" }),
      t ? /* @__PURE__ */ m("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
};
xs = /* @__PURE__ */ new WeakSet();
ar = function(t) {
  if (t)
    return Be(this, Bn, vi).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
};
po.LOADING_CLASS = "loading";
po.DEFAULT = {
  ...he.DEFAULT,
  loadTimeout: 1e4
};
var go = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, lr = (t, e, n) => (go(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ls = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, xa = (t, e, n, s) => (go(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), cr = (t, e, n) => (go(t, e, "access private method"), n), be, mo, ec, hr, nc, yo, sc;
const uf = '[data-toggle="modal"]';
class ic extends yt {
  constructor() {
    super(...arguments), ls(this, mo), ls(this, hr), ls(this, yo), ls(this, be, void 0);
  }
  get modal() {
    return lr(this, be);
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    const e = cr(this, hr, nc).call(this);
    return e == null ? void 0 : e.show();
  }
  hide() {
    var e;
    (e = lr(this, be)) == null || e.hide();
  }
}
be = /* @__PURE__ */ new WeakMap();
mo = /* @__PURE__ */ new WeakSet();
ec = function() {
  const {
    container: t,
    ...e
  } = this.options, n = e, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), n;
};
hr = /* @__PURE__ */ new WeakSet();
nc = function() {
  const t = cr(this, mo, ec).call(this);
  let e = lr(this, be);
  return e ? e.setOptions(t) : t.type === "static" ? (e = he.ensure(cr(this, yo, sc).call(this), t), xa(this, be, e)) : (e = po.ensure(this.container, t), xa(this, be, e)), e;
};
yo = /* @__PURE__ */ new WeakSet();
sc = function() {
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
ic.NAME = "ModalTrigger";
y(document).on("click.modal.zui", (t) => {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, uf);
  if (n) {
    const i = ic.ensure(n);
    i && i.show();
  }
});
let rc = class extends Te {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = T(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
};
rc.NAME = "nav";
class oc extends it {
}
oc.NAME = "Nav";
oc.Component = rc;
function zn(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function ff({
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
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : st(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : st(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ m(Ut, { type: n, ...a });
}
const Lt = 24 * 60 * 60 * 1e3, lt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : /* @__PURE__ */ new Date(), Zn = (t, e = /* @__PURE__ */ new Date()) => (t = lt(t), e = lt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), ur = (t, e = /* @__PURE__ */ new Date()) => lt(t).getFullYear() === lt(e).getFullYear(), df = (t, e = /* @__PURE__ */ new Date()) => (t = lt(t), e = lt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Id = (t, e = /* @__PURE__ */ new Date()) => {
  t = lt(t), e = lt(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Od = (t, e) => Zn(lt(e), t), Hd = (t, e) => Zn(lt(e).getTime() - Lt, t), Bd = (t, e) => Zn(lt(e).getTime() + Lt, t), zd = (t, e) => Zn(lt(e).getTime() - 2 * Lt, t), fr = (t, e = "yyyy-MM-dd hh:mm", n = "") => {
  if (t = lt(t), Number.isNaN(t.getDay()))
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", ur(t) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const r = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), e;
}, Fd = (t, e, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = fr(t, ur(t) ? s.month : s.full);
  if (Zn(t, e))
    return i;
  const r = fr(e, ur(t, e) ? df(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Ud = (t) => {
  const e = (/* @__PURE__ */ new Date()).getTime();
  switch (t) {
    case "oneWeek":
      return e - Lt * 7;
    case "oneMonth":
      return e - Lt * 31;
    case "threeMonth":
      return e - Lt * 31 * 3;
    case "halfYear":
      return e - Lt * 183;
    case "oneYear":
      return e - Lt * 365;
    case "twoYear":
      return e - 2 * (Lt * 365);
    default:
      return 0;
  }
}, ka = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, ka(t, "day", n, s);
    case "quarter":
      t *= 3;
      break;
    case "month":
      return t *= 30, ka(t, "day", n, s);
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
function pf({
  key: t,
  type: e,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = zn(i, n);
  return s = typeof s == "function" ? s(a) : st(s, a), /* @__PURE__ */ m(bl, { ...o, children: [
    r,
    s
  ] });
}
function gf({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(Ut, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let g = d; g <= f; g++) {
      l.text = g, delete l.icon, l.disabled = !1;
      const v = zn(i, g);
      o && (l.url = typeof o == "function" ? o(v) : st(o, v)), p.push(/* @__PURE__ */ m(Ut, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function mf({
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
      url: typeof n == "function" ? n(c) : st(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(e) : st(a, e), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(zl, { type: "dropdown", dropdown: i, ...o });
}
function yf({
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
    a && !a({ info: v, event: g }) || (g.target.href = c.url = typeof l == "function" ? l(v) : st(l, v));
  }, p = zn(i, e || 0);
  return c.url = typeof l == "function" ? l(p) : st(l, p), /* @__PURE__ */ m("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ m(Ut, { type: s, ...c, onClick: f })
  ] });
}
let _i = class extends St {
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
_i.NAME = "pager";
_i.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
_i.ItemComponents = {
  ...St.ItemComponents,
  link: ff,
  info: pf,
  nav: gf,
  "size-menu": mf,
  goto: yf
};
class ac extends it {
}
ac.NAME = "Pager";
ac.Component = _i;
var Qs, ti, lc;
class wf extends U {
  constructor() {
    super(...arguments);
    L(this, ti);
    L(this, Qs, (n) => {
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
          et(this, ti, lc).call(this),
          a,
          /* @__PURE__ */ m("span", { class: "caret" })
        ]
      }
    );
  }
}
Qs = new WeakMap(), ti = new WeakSet(), lc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: n.map((i, r) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, Qs), "data-idx": r, children: /* @__PURE__ */ m("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: s });
};
var ei;
class vf extends U {
  constructor() {
    super(...arguments);
    L(this, ei, (n) => {
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
    } = this.props, [u] = a, d = u ? /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }), f = u && l ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, ei), children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
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
ei = new WeakMap();
var _f = ["Shift", "Meta", "Alt", "Control"], bf = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function Hi(t, e) {
  return typeof t.getModifierState == "function" && t.getModifierState(e);
}
function xf(t) {
  return t.trim().split(" ").map(function(e) {
    var n = e.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? bf : i;
    }), s];
  });
}
function kf(t, e) {
  var n;
  e === void 0 && (e = {});
  var s = (n = e.timeout) != null ? n : 1e3, i = Object.keys(t).map(function(a) {
    return [xf(a), t[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var h = l[0], c = l[1], u = r.get(h) || h;
      (function(d, f) {
        return !(f[1].toUpperCase() !== d.key.toUpperCase() && f[1] !== d.code || f[0].find(function(p) {
          return !Hi(d, p);
        }) || _f.find(function(p) {
          return !f[0].includes(p) && f[1] !== p && Hi(d, p);
        }));
      })(a, u[0]) ? u.length > 1 ? r.set(h, u.slice(1)) : (r.delete(h), c(a)) : Hi(a, a.key) || r.delete(h);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function $f(t, e, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", r = kf(e, n);
  return t.addEventListener(i, r), function() {
    t.removeEventListener(i, r);
  };
}
const Sf = (t, e) => t.reduce((n, s) => [...n].reduce((i, r) => {
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
var Qt, Qe, tn, jn, en, ks, we, _n, ni, cc, nn, Gn, sn, Yn, si, hc;
class Cf extends U {
  constructor() {
    super(...arguments);
    L(this, en);
    L(this, we);
    L(this, ni);
    L(this, si);
    L(this, Qt, void 0);
    L(this, Qe, void 0);
    L(this, tn, void 0);
    L(this, jn, void 0);
    L(this, nn, void 0);
    L(this, Gn, void 0);
    L(this, sn, void 0);
    L(this, Yn, void 0);
    this.state = { keys: "", show: !1 }, O(this, Qt, 0), O(this, Qe, $t()), O(this, tn, $t()), O(this, nn, (n) => {
      y(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), O(this, Gn, ({ item: n }) => {
      this.select(n.key);
    }), O(this, sn, (n) => {
      this.setState({ keys: n.target.value });
    }), O(this, Yn, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    y(document).on("click", C(this, nn)), this.show(this.focus.bind(this)), O(this, jn, $f(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = et(this, we, _n).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = et(this, we, _n).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = et(this, we, _n).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = et(this, en, ks).call(this);
    n && y(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = y(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    y(document).off("click", C(this, nn)), (s = C(this, jn)) == null || s.call(this);
    const n = et(this, en, ks).call(this);
    n && y(n).off(".pickerMenu.zui");
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
    (n = C(this, Qe).current) == null || n.focus();
  }
  hide() {
    this.state.show && (C(this, Qt) && window.clearTimeout(C(this, Qt)), this.setState({ show: !1 }, () => {
      O(this, Qt, window.setTimeout(() => {
        var n, s;
        O(this, Qt, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  select(n) {
    const s = this.props.items.find((i) => i.value === n);
    s && this.props.onSelectItem(s);
  }
  setHoverItem(n) {
    this.setState({ hover: n }, () => {
      const s = et(this, we, _n).call(this);
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
          et(this, si, hc).call(this),
          /* @__PURE__ */ m(
            di,
            {
              ref: C(this, tn),
              className: "picker-menu-list",
              items: et(this, ni, cc).call(this),
              onClickItem: C(this, Gn),
              checkbox: h,
              ...l
            }
          )
        ]
      }
    );
  }
}
Qt = new WeakMap(), Qe = new WeakMap(), tn = new WeakMap(), jn = new WeakMap(), en = new WeakSet(), ks = function() {
  var n;
  return (n = C(this, tn).current) == null ? void 0 : n.ref.current;
}, we = new WeakSet(), _n = function() {
  const n = et(this, en, ks).call(this);
  if (n)
    return y(n).find(".menu-item>a.hover");
}, ni = new WeakSet(), cc = function() {
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
    if (!a.length || a.every((w) => d.toLowerCase().includes(w) || (f == null ? void 0 : f.toLowerCase().includes(w)) || typeof p == "string" && p.toLowerCase().includes(w))) {
      let w = p ?? d;
      typeof w == "string" && a.length && (w = Sf(a, [w])), d === o && (l = !0), c.push({
        key: d,
        active: i.has(d),
        text: w,
        className: T(g, { hover: d === o }),
        "data-value": d,
        ...v
      });
    }
    return c;
  }, []);
  return !l && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, nn = new WeakMap(), Gn = new WeakMap(), sn = new WeakMap(), Yn = new WeakMap(), si = new WeakSet(), hc = function() {
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
        onChange: C(this, sn),
        onInput: C(this, sn),
        ref: C(this, Qe)
      }
    ),
    r ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: C(this, Yn), children: /* @__PURE__ */ m("span", { className: "close" }) }) : /* @__PURE__ */ m("span", { className: "magnifier" })
  ] }) : null;
};
var wo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Z = (t, e, n) => (wo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), X = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Bs = (t, e, n, s) => (wo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ef = (t, e, n, s) => ({
  set _(i) {
    Bs(t, e, i, n);
  },
  get _() {
    return Z(t, e, s);
  }
}), nt = (t, e, n) => (wo(t, e, "access private method"), n), $s, an, zs, It, Pe, bn, Fs, vo, Ss, dr, pr, uc, _o, bo, xo, ko, $o, fc, gr, dc, So, pc, Cs, mr;
let gc = class extends U {
  constructor(e) {
    super(e), X(this, Pe), X(this, Fs), X(this, Ss), X(this, pr), X(this, $o), X(this, gr), X(this, So), X(this, Cs), X(this, $s, 0), X(this, an, wi()), X(this, zs, $t()), X(this, It, void 0), X(this, _o, (n) => {
      const { valueList: s } = this, i = new Set(n.map((o) => o.value)), r = s.filter((o) => !i.has(o));
      this.setValue(r);
    }), X(this, bo, () => {
      requestAnimationFrame(() => this.toggle());
    }), X(this, xo, () => {
      this.close();
    }), X(this, ko, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = Z(this, zs).current) == null || s.hide();
      });
    }), this.state = {
      value: nt(this, Ss, dr).call(this, e.defaultValue) ?? "",
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
    return nt(this, Fs, vo).call(this, this.state.value);
  }
  componentDidMount() {
    nt(this, Cs, mr).call(this, !0);
  }
  componentDidUpdate() {
    nt(this, Cs, mr).call(this);
  }
  componentWillUnmount() {
    var n;
    var e;
    (n = this.props.beforeDestroy) == null || n.call(this), (e = Z(this, It)) == null || e.call(this), Bs(this, It, void 0);
  }
  async loadItemList() {
    let { items: e } = this.props;
    if (typeof e == "function") {
      const s = ++Ef(this, $s)._;
      if (await nt(this, Pe, bn).call(this, { loading: !0, items: [] }), e = await e(), Z(this, $s) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(e) && this.state.items !== e && (n.items = e), this.state.loading && (n.loading = !1), Object.keys(n).length && await nt(this, Pe, bn).call(this, n), e;
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
    await nt(this, Pe, bn).call(this, { open: e }), e && this.loadItemList();
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
    await nt(this, Pe, bn).call(this, { value: nt(this, Ss, dr).call(this, e), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
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
    } = this.props, a = r || (i ? wf : vf), l = nt(this, pr, uc).call(this);
    return /* @__PURE__ */ m(
      "div",
      {
        id: `picker-${Z(this, an)}`,
        className: T("picker", e),
        style: n,
        children: [
          /* @__PURE__ */ m(a, { ...l }),
          s,
          nt(this, gr, dc).call(this),
          o ? /* @__PURE__ */ m("input", { type: "hidden", className: "picker-value", name: o, value: this.state.value }) : null
        ]
      }
    );
  }
};
$s = /* @__PURE__ */ new WeakMap();
an = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakSet();
bn = function(t) {
  return new Promise((e) => {
    this.setState(t, e);
  });
};
Fs = /* @__PURE__ */ new WeakSet();
vo = function(t) {
  return typeof t == "string" ? t.length ? y.unique(t.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(t) ? y.unique(t) : [];
};
Ss = /* @__PURE__ */ new WeakSet();
dr = function(t) {
  const e = nt(this, Fs, vo).call(this, t);
  return e.length ? e.join(this.props.valueSplitter ?? ",") : void 0;
};
pr = /* @__PURE__ */ new WeakSet();
uc = function() {
  const { placeholder: t, disabled: e, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: t,
    disabled: e,
    multiple: n,
    selections: this.getSelections(),
    onClick: Z(this, bo),
    onDeselect: Z(this, _o)
  };
};
_o = /* @__PURE__ */ new WeakMap();
bo = /* @__PURE__ */ new WeakMap();
xo = /* @__PURE__ */ new WeakMap();
ko = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakSet();
fc = function() {
  const { search: t, menuClass: e, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: r, menuMinWidth: o, multiple: a, searchHint: l, menuCheckbox: h } = this.props, { items: c } = this.state;
  return {
    id: Z(this, an),
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
    onRequestHide: Z(this, xo),
    onSelectItem: Z(this, ko)
  };
};
gr = /* @__PURE__ */ new WeakSet();
dc = function() {
  const { open: t } = this.state;
  if (!t)
    return null;
  const e = y(this.props.container || "body");
  let n = e.find(".pickers-container");
  n.length || (n = y("<div>").addClass("pickers-container").appendTo(e));
  const { Menu: s = Cf } = this.props;
  return _u(/* @__PURE__ */ m(s, { ...nt(this, $o, fc).call(this), ref: Z(this, zs) }), n[0]);
};
So = /* @__PURE__ */ new WeakSet();
pc = function() {
  const t = y(`#picker-${Z(this, an)}`)[0], e = y(`#picker-menu-${Z(this, an)}`)[0];
  if (!e || !t || !this.state.open) {
    Z(this, It) && (Z(this, It).call(this), Bs(this, It, void 0));
    return;
  }
  Z(this, It) || Bs(this, It, so(t, e, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    yi(t, e, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? pi() : null, Zi(), eo(1)].filter(Boolean)
    }).then(({ x: i, y: r }) => {
      y(e).css({ left: i, top: r, width: s === "100%" ? y(t).width() : void 0 });
    }), s === "100%" && y(e).css({ width: y(t).width() });
  }));
};
Cs = /* @__PURE__ */ new WeakSet();
mr = function(t = !1) {
  var e;
  (e = this.props.afterRender) == null || e.call(this, { firstRender: t }), nt(this, So, pc).call(this);
};
gc.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class mc extends it {
}
mc.NAME = "Picker";
mc.Component = gc;
class yc extends yt {
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
    return i && s.middleware.push(pi()), r && s.middleware.push(r === !0 ? Zi() : Zi(r)), o && s.middleware.push(Ji({ element: this.$arrow[0] })), a && s.middleware.push(eo(a)), s;
  }
  createPopper() {
    const e = this.element, n = this.$target[0];
    this.cleanup = so(e, n, () => {
      yi(e, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Ji || !o.arrow)
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
    const n = y(e);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      y(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const e = y('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = y('<div class="arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
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
class wc extends it {
}
wc.NAME = "Toolbar";
wc.Component = St;
function Qn(t) {
  return t.split("-")[1];
}
function Co(t) {
  return t === "y" ? "height" : "width";
}
function qe(t) {
  return t.split("-")[0];
}
function bi(t) {
  return ["top", "bottom"].includes(qe(t)) ? "x" : "y";
}
function $a(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = bi(e), l = Co(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (qe(e)) {
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
const Mf = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: c, y: u } = $a(h, s, l), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: w } = a[g], { x: _, y: k, data: E, reset: S } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    c = _ ?? c, u = k ?? u, f = { ...f, [v]: { ...f[v], ...E } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : S.rects), { x: c, y: u } = $a(h, d, l)), g = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function vc(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Us(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Tf(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = t, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = vc(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], v = Us(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, E = Us(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - E.top + p.top) / k.y, bottom: (E.bottom - v.bottom + p.bottom) / k.y, left: (v.left - E.left + p.left) / k.x, right: (E.right - v.right + p.right) / k.x };
}
const Rf = Math.min, Nf = Math.max;
function Af(t, e, n) {
  return Nf(t, Rf(e, n));
}
const Lf = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: l } = e;
  if (n == null)
    return {};
  const h = vc(s), c = { x: i, y: r }, u = bi(o), d = Co(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", v = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let k = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  k === 0 && (k = a.floating[d]);
  const E = v / 2 - w / 2, S = h[p], M = k - f[d] - h[g], N = k / 2 - f[d] / 2 + E, A = Af(S, N, M), I = Qn(o) != null && N != A && a.reference[d] / 2 - (N < S ? h[p] : h[g]) - f[d] / 2 < 0;
  return { [u]: c[u] - (I ? N < S ? S - N : M - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), Wf = ["top", "right", "bottom", "left"];
Wf.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Df = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Vs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Df[e]);
}
function Pf(t, e, n) {
  n === void 0 && (n = !1);
  const s = Qn(t), i = bi(t), r = Co(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = Vs(o)), { main: o, cross: Vs(o) };
}
const If = { start: "end", end: "start" };
function Bi(t) {
  return t.replace(/start|end/g, (e) => If[e]);
}
const Of = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = t, v = qe(s), w = qe(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = u || (w || !p ? [Vs(o)] : function(b) {
      const R = Vs(b);
      return [Bi(b), R, Bi(R)];
    }(o));
    u || f === "none" || k.push(...function(b, R, W, z) {
      const H = Qn(b);
      let D = function(V, Et, ln) {
        const es = ["left", "right"], cn = ["right", "left"], ns = ["top", "bottom"], Mi = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return ln ? Et ? cn : es : Et ? es : cn;
          case "left":
          case "right":
            return Et ? ns : Mi;
          default:
            return [];
        }
      }(qe(b), W === "start", z);
      return H && (D = D.map((V) => V + "-" + H), R && (D = D.concat(D.map(Bi)))), D;
    }(o, p, f, _));
    const E = [o, ...k], S = await Tf(e, g), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(S[v]), c) {
      const { main: b, cross: R } = Pf(s, r, _);
      M.push(S[b], S[R]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = E[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let W = "bottom";
      switch (d) {
        case "bestFit": {
          var I;
          const z = (I = N.map((H) => [H, H.overflows.filter((D) => D > 0).reduce((D, V) => D + V, 0)]).sort((H, D) => H[1] - D[1])[0]) == null ? void 0 : I[0].placement;
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
}, Hf = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = qe(a), d = Qn(a), f = bi(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: k } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof k == "number" && (_ = d === "end" ? -1 * k : k), f ? { x: _ * g, y: w * p } : { x: w * p, y: _ * g };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ct(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function xt(t) {
  return ct(t).getComputedStyle(t);
}
function ae(t) {
  return bc(t) ? (t.nodeName || "").toLowerCase() : "";
}
let cs;
function _c() {
  if (cs)
    return cs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (cs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), cs) : navigator.userAgent;
}
function Vt(t) {
  return t instanceof ct(t).HTMLElement;
}
function pt(t) {
  return t instanceof ct(t).Element;
}
function bc(t) {
  return t instanceof ct(t).Node;
}
function Sa(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ct(t).ShadowRoot || t instanceof ShadowRoot;
}
function xi(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = xt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Bf(t) {
  return ["table", "td", "th"].includes(ae(t));
}
function yr(t) {
  const e = /firefox/i.test(_c()), n = xt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function xc() {
  return !/^((?!chrome|android).)*safari/i.test(_c());
}
function Eo(t) {
  return ["html", "body", "#document"].includes(ae(t));
}
const Ca = Math.min, Nn = Math.max, qs = Math.round;
function kc(t) {
  const e = xt(t);
  let n = parseFloat(e.width), s = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, o = qs(n) !== i || qs(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function $c(t) {
  return pt(t) ? t : t.contextElement;
}
const Sc = { x: 1, y: 1 };
function je(t) {
  const e = $c(t);
  if (!Vt(e))
    return Sc;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = kc(e);
  let o = (r ? qs(n.width) : n.width) / s, a = (r ? qs(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Se(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = $c(t);
  let l = Sc;
  e && (s ? pt(s) && (l = je(s)) : l = je(t));
  const h = a ? ct(a) : window, c = !xc() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const g = ct(a), v = s && pt(s) ? ct(s) : s;
    let w = g.frameElement;
    for (; w && s && v !== g; ) {
      const _ = je(w), k = w.getBoundingClientRect(), E = getComputedStyle(w);
      k.x += (w.clientLeft + parseFloat(E.paddingLeft)) * _.x, k.y += (w.clientTop + parseFloat(E.paddingTop)) * _.y, u *= _.x, d *= _.y, f *= _.x, p *= _.y, u += k.x, d += k.y, w = ct(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function re(t) {
  return ((bc(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ki(t) {
  return pt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Cc(t) {
  return Se(re(t)).left + ki(t).scrollLeft;
}
function zf(t, e, n) {
  const s = Vt(e), i = re(e), r = Se(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ae(e) !== "body" || xi(i)) && (o = ki(e)), Vt(e)) {
      const l = Se(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = Cc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Fn(t) {
  if (ae(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Sa(t) ? t.host : null) || re(t);
  return Sa(e) ? e.host : e;
}
function Ea(t) {
  return Vt(t) && xt(t).position !== "fixed" ? t.offsetParent : null;
}
function Ma(t) {
  const e = ct(t);
  let n = Ea(t);
  for (; n && Bf(n) && xt(n).position === "static"; )
    n = Ea(n);
  return n && (ae(n) === "html" || ae(n) === "body" && xt(n).position === "static" && !yr(n)) ? e : n || function(s) {
    let i = Fn(s);
    for (; Vt(i) && !Eo(i); ) {
      if (yr(i))
        return i;
      i = Fn(i);
    }
    return null;
  }(t) || e;
}
function Ec(t) {
  const e = Fn(t);
  return Eo(e) ? t.ownerDocument.body : Vt(e) && xi(e) ? e : Ec(e);
}
function An(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = Ec(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ct(s);
  return i ? e.concat(r, r.visualViewport || [], xi(s) ? s : []) : e.concat(s, An(s));
}
function Ta(t, e, n) {
  return e === "viewport" ? Us(function(s, i) {
    const r = ct(s), o = re(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = xc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(t, n)) : pt(e) ? function(s, i) {
    const r = Se(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Vt(s) ? je(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = o * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(e, n) : Us(function(s) {
    var i;
    const r = re(s), o = ki(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Nn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Nn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Cc(s);
    const u = -o.scrollTop;
    return xt(a || r).direction === "rtl" && (c += Nn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(re(t)));
}
const Ff = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = An(h).filter((v) => pt(v) && ae(v) !== "body"), f = null;
    const p = xt(h).position === "fixed";
    let g = p ? Fn(h) : h;
    for (; pt(g) && !Eo(g); ) {
      const v = xt(g), w = yr(g);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : d = d.filter((_) => _ !== g), g = Fn(g);
    }
    return c.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = Ta(e, c, i);
    return h.top = Nn(u.top, h.top), h.right = Ca(u.right, h.right), h.bottom = Ca(u.bottom, h.bottom), h.left = Nn(u.left, h.left), h;
  }, Ta(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = Vt(n), r = re(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ae(n) !== "body" || xi(r)) && (o = ki(n)), Vt(n))) {
    const h = Se(n);
    a = je(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + l.x, y: e.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: pt, getDimensions: function(t) {
  return kc(t);
}, getOffsetParent: Ma, getDocumentElement: re, getScale: je, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || Ma, r = this.getDimensions;
  return { reference: zf(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => xt(t).direction === "rtl" };
function Uf(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...pt(t) ? An(t) : t.contextElement ? An(t.contextElement) : [], ...An(e)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (o) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), pt(t) && !a && u.observe(t), pt(t) || !t.contextElement || a || u.observe(t.contextElement), u.observe(e);
  }
  let d = a ? Se(t) : null;
  return a && function f() {
    const p = Se(t);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Vf = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Ff, ...n }, r = { ...i.platform, _c: s };
  return Mf(t, e, { ...i, platform: r });
};
var Mo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, F = (t, e, n) => (Mo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), G = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ce = (t, e, n, s) => (Mo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), bt = (t, e, n) => (Mo(t, e, "access private method"), n), Ln, Wn, xn, ze, rt, wr, js, $i, To, Ro, Mc, vr, Tc, No, Rc, Ao, Nc, Lo, Ac, _r, Lc, Wo, Wc, Dn, br, Dc;
const Fe = class extends yt {
  constructor() {
    super(...arguments), G(this, $i), G(this, Ro), G(this, vr), G(this, No), G(this, Ao), G(this, Lo), G(this, _r), G(this, Wo), G(this, br), G(this, Ln, !1), G(this, Wn, void 0), G(this, xn, 0), G(this, ze, void 0), G(this, rt, void 0), G(this, wr, void 0), G(this, js, void 0), this.hideLater = () => {
      F(this, Dn).call(this), Ce(this, xn, window.setTimeout(this.hide.bind(this), 100));
    }, G(this, Dn, () => {
      clearTimeout(F(this, xn)), Ce(this, xn, 0);
    });
  }
  get isShown() {
    var t;
    return (t = F(this, ze)) == null ? void 0 : t.classList.contains(Fe.CLASS_SHOW);
  }
  get tooltip() {
    return F(this, ze) || bt(this, vr, Tc).call(this);
  }
  get trigger() {
    return F(this, wr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Fe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !F(this, Ln) && this.isHover && bt(this, br, Dc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Fe.CLASS_SHOW), bt(this, _r, Lc).call(this), !0;
  }
  hide() {
    var e;
    var t;
    return (t = F(this, js)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = F(this, ze)) == null || e.classList.remove(Fe.CLASS_SHOW), !0;
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
let kt = Fe;
Ln = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
wr = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakSet();
To = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
};
Ro = /* @__PURE__ */ new WeakSet();
Mc = function() {
  const t = bt(this, $i, To).call(this);
  return Ce(this, rt, document.createElement("div")), F(this, rt).style.position = this.options.strategy, F(this, rt).style.width = `${t}px`, F(this, rt).style.height = `${t}px`, F(this, rt).style.transform = "rotate(45deg)", F(this, rt);
};
vr = /* @__PURE__ */ new WeakSet();
Tc = function() {
  var n;
  const t = Fe.TOOLTIP_CLASS;
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
  if (this.options.arrow && (e == null || e.append(bt(this, Ro, Mc).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), Ce(this, ze, e), e;
};
No = /* @__PURE__ */ new WeakSet();
Rc = function() {
  var i;
  const t = bt(this, $i, To).call(this), { strategy: e, placement: n } = this.options, s = {
    middleware: [Hf(t), Of()],
    strategy: e,
    placement: n
  };
  return this.options.arrow && F(this, rt) && ((i = s.middleware) == null || i.push(Lf({ element: F(this, rt) }))), s;
};
Ao = /* @__PURE__ */ new WeakSet();
Nc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
Lo = /* @__PURE__ */ new WeakSet();
Ac = function(t) {
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
_r = /* @__PURE__ */ new WeakSet();
Lc = function() {
  const t = bt(this, No, Rc).call(this), e = bt(this, Wo, Wc).call(this);
  Ce(this, js, Uf(e, this.tooltip, () => {
    Vf(e, this.tooltip, t).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = bt(this, Ao, Nc).call(this, o);
      if (i.arrow && F(this, rt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(F(this, rt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-F(this, rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...bt(this, Lo, Ac).call(this, o)
        });
      }
    });
  }));
};
Wo = /* @__PURE__ */ new WeakSet();
Wc = function() {
  return F(this, Wn) || Ce(this, Wn, {
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
br = /* @__PURE__ */ new WeakSet();
Dc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", F(this, Dn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ce(this, Ln, !0);
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
var Kn, ii, ri, oi;
class qf extends U {
  constructor(n) {
    super(n);
    L(this, Kn, $t());
    L(this, ii, (n) => {
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
    L(this, ri, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, oi, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return C(this, Kn).current;
  }
  componentDidMount() {
    this.load(), y(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    y(this.element).off("load.zui.dashboard");
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
          this.setState({ loading: !1, content: /* @__PURE__ */ m(yl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
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
        onDragStart: C(this, ri),
        onDragEnd: C(this, oi),
        "data-id": c,
        ref: C(this, Kn),
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, ii), children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
Kn = new WeakMap(), ii = new WeakMap(), ri = new WeakMap(), oi = new WeakMap();
var Pc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ht = (t, e, n) => (Pc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ft = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, mt = (t, e, n) => (Pc(t, e, "access private method"), n), qt, Do, Ic, Po, Oc, xr, Hc, Io, Bc, Gs, kr, Si, $r, Oo, zc, Sr, Cr, Ci, Ho;
const Bo = class extends U {
  constructor() {
    super(...arguments), ft(this, Do), ft(this, Po), ft(this, xr), ft(this, Io), ft(this, Gs), ft(this, Si), ft(this, Oo), ft(this, qt, /* @__PURE__ */ new Map()), this.state = {}, ft(this, Sr, (t) => {
      var n;
      const e = (n = t.dataTransfer) == null ? void 0 : n.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), ft(this, Cr, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = mt(this, xr, Hc).call(this), { cellHeight: n, grid: s } = this.props, i = Ht(this, qt);
    return console.log("Dashboard.render", { blocks: t, map: i }, this), /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: e * n }, children: t.map((r, o) => {
      const { id: a } = r, [l, h, c, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        qf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Ht(this, Sr),
          onDragEnd: Ht(this, Cr)
        },
        r.id
      );
    }) }) });
  }
};
let zo = Bo;
qt = /* @__PURE__ */ new WeakMap();
Do = /* @__PURE__ */ new WeakSet();
Ic = function(t) {
  const { blockDefaultSize: e, blockSizeMap: n } = this.props;
  return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
};
Po = /* @__PURE__ */ new WeakSet();
Oc = function() {
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
    } = i, [d, f] = mt(this, Do, Ic).call(this, o);
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
xr = /* @__PURE__ */ new WeakSet();
Hc = function() {
  Ht(this, qt).clear();
  let t = 0;
  const e = mt(this, Po, Oc).call(this);
  return e.forEach((n) => {
    mt(this, Io, Bc).call(this, n);
    const [, s, , i] = Ht(this, qt).get(n.id);
    t = Math.max(t, s + i);
  }), { blocks: e, height: t };
};
Io = /* @__PURE__ */ new WeakSet();
Bc = function(t) {
  const e = Ht(this, qt), { id: n, left: s, top: i, width: r, height: o } = t;
  if (s < 0 || i < 0) {
    const [a, l] = mt(this, Oo, zc).call(this, r, o, s, i);
    e.set(n, [a, l, r, o]);
  } else
    mt(this, Si, $r).call(this, n, [s, i, r, o]);
};
Gs = /* @__PURE__ */ new WeakSet();
kr = function(t) {
  var e;
  const { dragging: n } = this.state;
  for (const [s, i] of Ht(this, qt).entries())
    if (s !== n && mt(e = Bo, Ci, Ho).call(e, i, t))
      return !1;
  return !0;
};
Si = /* @__PURE__ */ new WeakSet();
$r = function(t, e) {
  var n;
  Ht(this, qt).set(t, e);
  for (const [s, i] of Ht(this, qt).entries())
    s !== t && mt(n = Bo, Ci, Ho).call(n, i, e) && (i[1] = e[1] + e[3], mt(this, Si, $r).call(this, s, i));
};
Oo = /* @__PURE__ */ new WeakSet();
zc = function(t, e, n, s) {
  if (n >= 0 && s >= 0) {
    if (mt(this, Gs, kr).call(this, [n, s, t, e]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (mt(this, Gs, kr).call(this, [i, r, t, e])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + t > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Sr = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakSet();
Ho = function([t, e, n, s], [i, r, o, a]) {
  return !(t + n <= i || i + o <= t || e + s <= r || r + a <= e);
};
ft(zo, Ci);
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
class Fc extends it {
}
Fc.NAME = "Dashboard";
Fc.Component = zo;
var te, ee;
class Ra extends U {
  constructor(n) {
    super(n);
    L(this, te, void 0);
    L(this, ee, void 0);
    O(this, te, 0), O(this, ee, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, te) && cancelAnimationFrame(C(this, te)), O(this, te, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), O(this, te, 0);
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
    n && (O(this, ee, typeof n == "string" ? document : n.current), C(this, ee).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), C(this, ee) && C(this, ee).removeEventListener("wheel", this._handleWheel);
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
function Uc({ col: t, className: e, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var I;
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
  }], g = ["dtable-cell-content", t.setting.cellClass], v = (I = s.data) == null ? void 0 : I[t.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: t, value: v }, q) : w, k = [], E = [], S = {}, M = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Q(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? k : E;
      b.html ? R.push(/* @__PURE__ */ m("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : g).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : M, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      E.push(b);
  });
  const A = N;
  return /* @__PURE__ */ m(
    "div",
    {
      className: T(p),
      style: c,
      "data-col": t.name,
      "data-type": t.type,
      ...h,
      ...S,
      children: [
        E.length > 0 && /* @__PURE__ */ m(A, { className: T(g), style: f, ...M, children: E }),
        k
      ]
    }
  );
}
function zi({ row: t, className: e, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Uc, onRenderCell: l }) {
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
function Vc({
  row: t,
  className: e,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = Uc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ m(
    zi,
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
    zi,
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
    zi,
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
function jf({ height: t, onRenderRow: e, ...n }) {
  const s = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: s }, q);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ m("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ m(Vc, { ...s }) });
}
function Gf({
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
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ m(Vc, { ...c }, h.id);
  }) });
}
const Ys = /* @__PURE__ */ new Map(), Ks = [];
function qc(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && Ys.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ys.set(n, t), e != null && e.buildIn && !Ks.includes(n) && Ks.push(n);
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
function jc(t) {
  return Ys.delete(t);
}
function Yf(t) {
  if (typeof t == "string") {
    const e = Ys.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Gc(t, e, n) {
  return e.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Yf(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Gc(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function Kf(t = [], e = !0) {
  return e && Ks.length && t.unshift(...Ks), t != null && t.length ? Gc([], t, /* @__PURE__ */ new Set()) : [];
}
function Yc() {
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
function Xf(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Na(t, e) {
  return typeof t == "string" && (t = t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)), typeof e == "number" && (typeof t != "number" || isNaN(t)) && (t = e), t;
}
function Fi(t, e = !1) {
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
function Jf(t, e, n, s) {
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
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: k, onAddCol: E } = _;
    k && Object.entries(k).forEach(([S, M]) => {
      w[S] || (w[S] = []), w[S].push(M);
    }), E && v.push(E);
  }), e.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: k = "", name: E } = _, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: k
    }, M = {
      name: E,
      type: k,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[k];
    N && N.forEach((H) => {
      const D = typeof H == "function" ? H.call(t, S) : H;
      D && Object.assign(S, D, _);
    });
    const { fixed: A, flex: I, minWidth: b = r, maxWidth: R = o } = S, W = Na(S.width || i, i);
    M.flex = I === !0 ? 1 : typeof I == "number" ? I : 0, M.width = Xf(W < 1 ? Math.round(W * s) : W, b, R), v.forEach((H) => H.call(t, M)), f.push(M), p[M.name] = M;
    const z = A ? A === "left" ? u : d : c;
    z.list.push(M), z.totalWidth += M.width, z.width = z.totalWidth, M.flex && z.flexList.push(M), typeof S.order == "number" && (g = !0);
  }), g) {
    const _ = (k, E) => (k.setting.order ?? 0) - (E.setting.order ?? 0);
    f.sort(_), u.list.sort(_), c.list.sort(_), d.list.sort(_);
  }
  return Fi(u, !0), Fi(d, !0), c.widthSetting = s - u.width - d.width, Fi(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var Fo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, $ = (t, e, n) => (Fo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), P = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Y = (t, e, n, s) => (Fo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), At = (t, e, n) => (Fo(t, e, "access private method"), n), Ie, kn, xe, Ot, ye, J, Wt, Nt, $n, Es, Xs, Xt, Sn, Cn, Er, Kc, Mr, Xc, Tr, Jc, Rr, Zc, Ms, Nr, Uo, Vo, Ei, Js, Ar, Lr, qo, Qc, jo, th, Wr, eh;
let Go = class extends U {
  constructor(e) {
    super(e), P(this, Er), P(this, Mr), P(this, Tr), P(this, Rr), P(this, Ms), P(this, qo), P(this, jo), P(this, Wr), this.ref = $t(), P(this, Ie, 0), P(this, kn, void 0), P(this, xe, !1), P(this, Ot, void 0), P(this, ye, void 0), P(this, J, []), P(this, Wt, void 0), P(this, Nt, /* @__PURE__ */ new Map()), P(this, $n, {}), P(this, Es, void 0), P(this, Xs, []), this.updateLayout = () => {
      $(this, Ie) && cancelAnimationFrame($(this, Ie)), Y(this, Ie, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ie, 0);
      }));
    }, P(this, Xt, (n, s) => {
      s = s || n.type;
      const i = $(this, Nt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), P(this, Sn, (n) => {
      $(this, Xt).call(this, n, `window_${n.type}`);
    }), P(this, Cn, (n) => {
      $(this, Xt).call(this, n, `document_${n.type}`);
    }), P(this, Uo, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return $(this, J).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), P(this, Vo, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), $(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), P(this, Ei, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return $(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), P(this, Js, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), P(this, Ar, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), $(this, J).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
            return;
          for (const p of $(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of $(this, J))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), P(this, Lr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, kn, e.id ?? `dtable-${wi(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, ye, Object.freeze(Kf(e.plugins))), $(this, ye).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign($(this, $n), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var e;
    return ((e = $(this, Wt)) == null ? void 0 : e.options) || $(this, Ot) || Yc();
  }
  get plugins() {
    return $(this, J);
  }
  get layout() {
    return $(this, Wt);
  }
  get id() {
    return $(this, kn);
  }
  get data() {
    return $(this, $n);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ot, void 0);
  }
  componentDidMount() {
    if ($(this, xe) ? this.forceUpdate() : At(this, Ms, Nr).call(this), $(this, J).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", $(this, Ar)), this.on("keydown", $(this, Lr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), Y(this, Es, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    $(this, J).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    $(this, xe) ? At(this, Ms, Nr).call(this) : $(this, J).forEach((e) => {
      var n;
      (n = e.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = $(this, Es)) == null || n.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const s of $(this, Nt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), $(this, Sn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), $(this, Cn)) : e.removeEventListener(s, $(this, Xt));
    $(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), $(this, ye).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, $n, {}), $(this, Nt).clear();
  }
  on(e, n, s) {
    var r;
    s && (e = `${s}_${e}`);
    const i = $(this, Nt).get(e);
    i ? i.push(n) : ($(this, Nt).set(e, [n]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), $(this, Sn)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), $(this, Cn)) : (r = this.ref.current) == null || r.addEventListener(e, $(this, Xt)));
  }
  off(e, n, s) {
    var o;
    s && (e = `${s}_${e}`);
    const i = $(this, Nt).get(e);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || ($(this, Nt).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), $(this, Sn)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), $(this, Cn)) : (o = this.ref.current) == null || o.removeEventListener(e, $(this, Xt)));
  }
  emitCustomEvent(e, n) {
    $(this, Xt).call(this, n instanceof Event ? n : new CustomEvent(e, { detail: n }), e);
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
    const { rows: n, rowsMap: s, allRows: i } = this.layout;
    return typeof e == "number" ? n[e] : s[e] || i.find((r) => r.id === e);
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
    if (!$(this, Ot))
      return;
    typeof e == "function" && (n = e, e = {});
    const { dirtyType: s, state: i } = e;
    if (s === "layout")
      Y(this, Wt, void 0);
    else if (s === "options") {
      if (Y(this, Ot, void 0), !$(this, Wt))
        return;
      Y(this, Wt, void 0);
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
    return Ft($(this, Xs), e, n, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.name === e);
  }
  render() {
    const e = At(this, Wr, eh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": l
    }], u = [];
    return e && (u.push(
      At(this, Er, Kc).call(this, e),
      At(this, Mr, Xc).call(this, e),
      At(this, Tr, Jc).call(this, e),
      At(this, Rr, Zc).call(this, e)
    ), $(this, J).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, e);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: $(this, kn),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Ie = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Xs = /* @__PURE__ */ new WeakMap();
Xt = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakSet();
Kc = function(t) {
  const { header: e, cols: n, headerHeight: s, scrollLeft: i } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ m(
      jf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: $(this, Ei),
        onRenderRow: $(this, Vo)
      },
      "header"
    );
  const r = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    Zr,
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
Mr = /* @__PURE__ */ new WeakSet();
Xc = function(t) {
  const { headerHeight: e, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = t;
  return /* @__PURE__ */ m(
    Gf,
    {
      top: e,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: $(this, Ei),
      onRenderRow: $(this, Uo)
    },
    "rows"
  );
};
Tr = /* @__PURE__ */ new WeakSet();
Jc = function(t) {
  let { footer: e } = t;
  if (typeof e == "function" && (e = e.call(this, t)), !e)
    return null;
  const n = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    Zr,
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
Rr = /* @__PURE__ */ new WeakSet();
Zc = function(t) {
  const e = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h } = t, { scrollbarSize: c = 12, horzScrollbarPos: u } = this.options;
  return r > i && e.push(
    /* @__PURE__ */ m(
      Ra,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: $(this, Js),
        left: s,
        bottom: (u === "inside" ? 0 : -c) + h,
        size: c,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), l > a && e.push(
    /* @__PURE__ */ m(
      Ra,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: $(this, Js),
        right: 0,
        size: c,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
};
Ms = /* @__PURE__ */ new WeakSet();
Nr = function() {
  var t;
  Y(this, xe, !1), (t = this.options.afterRender) == null || t.call(this), $(this, J).forEach((e) => {
    var n;
    return (n = e.afterRender) == null ? void 0 : n.call(this);
  });
};
Uo = /* @__PURE__ */ new WeakMap();
Vo = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakMap();
Ar = /* @__PURE__ */ new WeakMap();
Lr = /* @__PURE__ */ new WeakMap();
qo = /* @__PURE__ */ new WeakSet();
Qc = function() {
  if ($(this, Ot))
    return !1;
  const e = { ...Yc(), ...$(this, ye).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, $(this, ye).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = e;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, e) : r)), (!i || i(o)) && (o !== e && Object.assign(e, o), n.push(s)), n;
  }, [])), Y(this, Ot, e), Y(this, Xs, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
jo = /* @__PURE__ */ new WeakSet();
th = function() {
  var A, I;
  const { plugins: t } = this;
  let e = $(this, Ot);
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
      Y(this, xe, !0);
      return;
    }
  }
  const r = Jf(this, e, t, i), { data: o, rowKey: a = "id", rowHeight: l } = e, h = [], c = (b, R, W) => {
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
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    d[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = e, g = f ? e.headerHeight || l : 0, v = p ? e.footerHeight || l : 0;
  let w = e.height, _ = 0;
  const k = u.length * l, E = g + v + k;
  if (typeof w == "function" && (w = w.call(this, E)), w === "auto")
    _ = E;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, E));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, xe, !0);
      return;
    }
  } else
    _ = w;
  const S = _ - g - v, M = {
    options: e,
    allRows: h,
    width: i,
    height: _,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: S,
    rowsHeightTotal: k,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: g,
    footerHeight: v,
    cols: r
  }, N = (I = e.onLayout) == null ? void 0 : I.call(this, M);
  N && Object.assign(M, N), t.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, M);
      R && Object.assign(M, R);
    }
  }), Y(this, Wt, M);
};
Wr = /* @__PURE__ */ new WeakSet();
eh = function() {
  (At(this, qo, Qc).call(this) || !$(this, Wt)) && At(this, jo, th).call(this);
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
Go.addPlugin = qc;
Go.removePlugin = jc;
function Aa(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(s));
}
const Zf = {
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
      Aa(this, s);
    },
    mouseleave() {
      Aa(this, !1);
    }
  }
}, Qf = ue(Zf, { buildIn: !0 });
function td(t, e) {
  var o, a;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, r = (l, h) => {
    i && !i.call(this, l) || !!n[l] === h || (h ? n[l] = !0 : delete n[l], s[l] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !nh.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: l }) => {
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
function ed(t) {
  return this.state.checkedRows[t] ?? !1;
}
function nh() {
  var s, i;
  const t = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!t)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : e === t;
}
function nd() {
  return Object.keys(this.state.checkedRows);
}
function sd(t) {
  const { checkable: e } = this.options;
  t === void 0 && (t = !e), e !== t && this.setState({ forceCheckable: t });
}
function La(t) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${t ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const id = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: La
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
    toggleCheckRows: td,
    isRowChecked: ed,
    isAllRowChecked: nh,
    getChecks: nd,
    toggleCheckable: sd
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: La(t) })
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
    const n = y(t.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').length || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, rd = ue(id);
var sh = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(sh || {});
function Zs(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const o = Zs.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Zs.call(this, e.parent).level + 1 : 0, e;
}
function od(t) {
  return t !== void 0 ? Zs.call(this, t) : this.data.nestedMap;
}
function ad(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !ih.call(this)), e) {
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
function ih() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function rh(t, e = 0, n, s = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const o = t.get(r);
    o && (o.level === s && (o.order = e++), (i = o.children) != null && i.length && (e = rh(t, e, o.children, s + 1)));
  }
  return e;
}
function oh(t, e, n, s) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, oh(t, r, n, s);
  }), i;
}
function ah(t, e, n, s, i) {
  var a;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[e] = n), r.parent && ah(t, r.parent, n, s, i);
}
const ld = {
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
        const o = oh(this, i, r, s);
        o != null && o.parent && ah(this, o.parent, r, s, n);
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
    getNestedInfo: od,
    toggleRow: ad,
    isAllCollapsed: ih,
    getNestedRowInfo: Zs
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
    ), rh(this.data.nestedMap), t.sort((e, n) => {
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
}, cd = ue(ld);
function lh(t, e, n, s) {
  if (typeof t == "function" && (t = t(e)), typeof t == "string" && t.length && (t = { url: t }), !t)
    return n;
  const { url: i, ...r } = t;
  return /* @__PURE__ */ m("a", { href: st(i, e.row.data), ...s, ...r, children: n });
}
function Yo(t, e, n) {
  var s;
  if (t != null)
    return n = n ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof t == "function" ? t(n, e) : st(t, n);
}
function ch(t, e, n, s) {
  var i;
  return n = n ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), t === !1 ? n : (t === !0 && (t = "[yyyy-]MM-dd hh:mm"), typeof t == "function" && (t = t(n, e)), fr(n, t, s ?? n));
}
function hh(t, e) {
  const { link: n } = e.col.setting, s = lh(n, e, t[0]);
  return s && (t[0] = s), t;
}
function uh(t, e) {
  const { format: n } = e.col.setting;
  return n && (t[0] = Yo(n, e, t[0])), t;
}
function fh(t, e) {
  const { map: n } = e.col.setting;
  return typeof n == "function" ? t[0] = n(t[0], e) : typeof n == "object" && n && (t[0] = n[t[0]] ?? t[0]), t;
}
function dh(t, e, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = e.col.setting;
  return t[0] = ch(s, e, t[0], i), t;
}
function Dr(t, e, n = !1) {
  const { html: s = n } = e.col.setting;
  if (s === !1)
    return t;
  const i = t[0], r = s === !0 ? i : Yo(s, e, i);
  return t[0] = {
    html: r
  }, t;
}
const hd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t, e) {
        return Dr(t, e, !0);
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
    const { formatDate: n, html: s, hint: i } = e.col.setting;
    if (n && (t = dh(t, e, n)), t = fh(t, e), t = uh(t, e), s ? t = Dr(t, e) : t = hh(t, e), i) {
      let r = t[0];
      typeof i == "function" ? r = i.call(this, e) : typeof i == "string" && (r = st(i, e.row.data)), t.push({ attrs: { title: r } });
    }
    return t;
  }
}, ud = ue(hd, { buildIn: !0 });
function Ui(t, { row: e, col: n }) {
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
  if (t[0] = /* @__PURE__ */ m(Xl, { ...u }), n.type === "avatarBtn") {
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
const fd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Ui
    },
    avatarBtn: {
      onRenderCell: Ui
    },
    avatarName: {
      onRenderCell: Ui
    }
  }
}, dd = ue(fd, { buildIn: !0 }), pd = {
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
        t[0] = /* @__PURE__ */ m("a", { href: st(a, { ...n.setting, sortType: o }), ...l, children: t[0] });
      }
    }
    return t;
  }
}, gd = ue(pd, { buildIn: !0 }), Vi = (t) => {
  t.length !== 1 && t.forEach((e, n) => {
    !n || e.setting.border || e.setting.group === t[n - 1].setting.group || (e.setting.border = "left");
  });
}, md = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (t) => !!t.groupDivider,
  onLayout(t) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = t;
    Vi(e.left.list), Vi(e.center.list), Vi(e.right.list);
  }
}, yd = ue(md), wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: sh,
  avatar: dd,
  checkable: rd,
  colHover: Qf,
  group: yd,
  nested: cd,
  renderDatetime: ch,
  renderDatetimeCell: dh,
  renderFormat: Yo,
  renderFormatCell: uh,
  renderHtmlCell: Dr,
  renderLink: lh,
  renderLinkCell: hh,
  renderMapCell: fh,
  rich: ud,
  sortType: gd
}, Symbol.toStringTag, { value: "Module" }));
class ts extends it {
}
ts.NAME = "DTable";
ts.Component = Go;
ts.definePlugin = ue;
ts.removePlugin = jc;
ts.plugins = wd;
var ph = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Wa = (t, e, n) => (ph(t, e, "read from private field"), n ? n.call(t) : e.get(t)), vd = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Da = (t, e, n, s) => (ph(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Oe;
const _d = "nav", Pr = '[data-toggle="tab"]', bd = "active";
class gh extends yt {
  constructor() {
    super(...arguments), vd(this, Oe, 0);
  }
  active(e) {
    const n = this.$element, s = n.find(Pr);
    let i = e ? y(e).first() : s.filter(`.${bd}`);
    if (!i.length && (i = n.find(Pr).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = y(r);
    o.length && (o.parent().children(".tab-pane").removeClass("active in"), o.addClass("active"), Wa(this, Oe) && clearTimeout(Wa(this, Oe)), Da(this, Oe, setTimeout(() => {
      o.addClass("in"), Da(this, Oe, 0);
    }, 10)));
  }
}
Oe = /* @__PURE__ */ new WeakMap();
gh.NAME = "Tabs";
y(document).on("click.tabs.zui", Pr, (t) => {
  t.preventDefault();
  const e = y(t.target), n = e.closest(`.${_d}`);
  n.length && gh.ensure(n).active(e);
});
y(() => {
  y(".disabled, [disabled]").on("click", (t) => {
    t.preventDefault(), t.stopImmediatePropagation();
  });
});
export {
  y as $,
  xl as ActionMenu,
  Sl as ActionMenuNested,
  Jl as Avatar,
  Zl as BtnGroup,
  yt as Component,
  it as ComponentFromReact,
  _t as ContextMenu,
  Zr as CustomRender,
  ts as DTable,
  Fc as Dashboard,
  ie as Dropdown,
  Kl as EventBus,
  gu as HElement,
  yl as HtmlContent,
  Cl as Menu,
  co as Messager,
  po as Modal,
  he as ModalBase,
  ic as ModalTrigger,
  oc as Nav,
  ac as Pager,
  mc as Picker,
  yc as Popovers,
  Gl as ProgressCircle,
  U as ReactComponent,
  Yl as Switch,
  Lt as TIME_DAY,
  gh as Tabs,
  wc as Toolbar,
  kt as Tooltip,
  ka as calculateTimestamp,
  y as cash,
  T as classes,
  $d as convertBytes,
  lt as createDate,
  _u as createPortal,
  $t as createRef,
  Sd as dom,
  kd as formatBytes,
  fr as formatDate,
  Fd as formatDateSpan,
  st as formatString,
  el as getClassList,
  Ud as getTimeBeforeDesc,
  q as h,
  Cd as hh,
  pu as htm,
  Ft as i18n,
  zd as isDBY,
  Li as isObject,
  Zn as isSameDay,
  df as isSameMonth,
  Id as isSameWeek,
  ur as isSameYear,
  Od as isToday,
  Bd as isTomorrow,
  Q as isValidElement,
  Hd as isYesterday,
  ji as mergeDeep,
  wa as nativeEvents,
  On as render,
  yu as renderCustomResult,
  Yi as renderIcon,
  Ju as store,
  nl as storeData,
  cu as takeData
};
//# sourceMappingURL=zui.js.map
