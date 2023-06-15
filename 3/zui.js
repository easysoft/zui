var Pi = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var E = (t, e, n) => (Pi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, B = (t, e, n, s) => (Pi(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var nt = (t, e, n) => (Pi(t, e, "access private method"), n);
const zt = document, Ws = window, za = zt.documentElement, Re = zt.createElement.bind(zt), Fa = Re("div"), Di = Re("table"), bh = Re("tbody"), ea = Re("tr"), { isArray: fi, prototype: Ua } = Array, { concat: xh, filter: zr, indexOf: Va, map: qa, push: kh, slice: ja, some: Fr, splice: $h } = Ua, Sh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ch = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Eh = /<.+>/, Mh = /^\w+$/;
function Ur(t, e) {
  const n = Th(e);
  return !t || !n && !Ce(e) && !j(e) ? [] : !n && Ch.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && Mh.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class di {
  constructor(e, n) {
    if (!e)
      return;
    if (Xi(e))
      return e;
    let s = e;
    if (tt(e)) {
      const i = n || zt;
      if (s = Sh.test(e) && Ce(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Eh.test(e) ? Ka(e) : Xi(i) ? i.find(e) : tt(i) ? y(i).find(e) : Ur(e, i), !s)
        return;
    } else if (Ne(e))
      return this.ready(e);
    (s.nodeType || s === Ws) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(e, n) {
    return new di(e, n);
  }
}
const x = di.prototype, y = x.init;
y.fn = y.prototype = x;
x.length = 0;
x.splice = $h;
typeof Symbol == "function" && (x[Symbol.iterator] = Ua[Symbol.iterator]);
function Xi(t) {
  return t instanceof di;
}
function ln(t) {
  return !!t && t === t.window;
}
function Ce(t) {
  return !!t && t.nodeType === 9;
}
function Th(t) {
  return !!t && t.nodeType === 11;
}
function j(t) {
  return !!t && t.nodeType === 1;
}
function Rh(t) {
  return !!t && t.nodeType === 3;
}
function Nh(t) {
  return typeof t == "boolean";
}
function Ne(t) {
  return typeof t == "function";
}
function tt(t) {
  return typeof t == "string";
}
function at(t) {
  return t === void 0;
}
function Bn(t) {
  return t === null;
}
function Ga(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Vr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
y.isWindow = ln;
y.isFunction = Ne;
y.isArray = fi;
y.isNumeric = Ga;
y.isPlainObject = Vr;
function K(t, e, n) {
  if (n) {
    let s = t.length;
    for (; s--; )
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  } else if (Vr(t)) {
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
function Ps(...t) {
  const e = Nh(t[0]) ? t.shift() : !1, n = t.shift(), s = t.length;
  if (!n)
    return {};
  if (!s)
    return Ps(e, y, n);
  for (let i = 0; i < s; i++) {
    const r = t[i];
    for (const o in r)
      e && (fi(r[o]) || Vr(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Ps(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
y.extend = Ps;
x.extend = function(t) {
  return Ps(x, t);
};
const Ah = /\S+/g;
function pi(t) {
  return tt(t) ? t.match(Ah) || [] : [];
}
x.toggleClass = function(t, e) {
  const n = pi(t), s = !at(e);
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
  const e = pi(t);
  return this.each((n, s) => {
    j(s) && K(e, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Lh(t, e) {
  if (t) {
    if (tt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !j(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Bn(n) ? void 0 : n;
      }
      return at(e) ? this : Bn(e) ? this.removeAttr(t) : this.each((n, s) => {
        j(s) && s.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
x.attr = Lh;
x.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
x.hasClass = function(t) {
  return !!t && Fr.call(this, (e) => j(e) && e.classList.contains(t));
};
x.get = function(t) {
  return at(t) ? ja.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function Wh(t) {
  return at(t) ? this.get().map((e) => j(e) || Rh(e) ? e.textContent : "").join("") : this.each((e, n) => {
    j(n) && (n.textContent = t);
  });
}
x.text = Wh;
function Ft(t, e, n) {
  if (!j(t))
    return;
  const s = Ws.getComputedStyle(t, null);
  return n ? s.getPropertyValue(e) || void 0 : s[e] || t.style[e];
}
function bt(t, e) {
  return parseInt(Ft(t, e), 10) || 0;
}
function na(t, e) {
  return bt(t, `border${e ? "Left" : "Top"}Width`) + bt(t, `padding${e ? "Left" : "Top"}`) + bt(t, `padding${e ? "Right" : "Bottom"}`) + bt(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ii = {};
function Ph(t) {
  if (Ii[t])
    return Ii[t];
  const e = Re(t);
  zt.body.insertBefore(e, null);
  const n = Ft(e, "display");
  return zt.body.removeChild(e), Ii[t] = n !== "none" ? n : "block";
}
function sa(t) {
  return Ft(t, "display") === "none";
}
function Ya(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function gi(t) {
  return tt(t) ? (e, n) => Ya(n, t) : Ne(t) ? t : Xi(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
x.filter = function(t) {
  const e = gi(t);
  return y(zr.call(this, (n, s) => e.call(n, s, n)));
};
function he(t, e) {
  return e ? t.filter(e) : t;
}
x.detach = function(t) {
  return he(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Dh = /^\s*<(\w+)[^>]*>/, Ih = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ia = {
  "*": Fa,
  tr: bh,
  td: ea,
  th: ea,
  thead: Di,
  tbody: Di,
  tfoot: Di
};
function Ka(t) {
  if (!tt(t))
    return [];
  if (Ih.test(t))
    return [Re(RegExp.$1)];
  const e = Dh.test(t) && RegExp.$1, n = ia[e] || ia["*"];
  return n.innerHTML = t, y(n.childNodes).detach().get();
}
y.parseHTML = Ka;
x.has = function(t) {
  const e = tt(t) ? (n, s) => Ur(t, s).length : (n, s) => s.contains(t);
  return this.filter(e);
};
x.not = function(t) {
  const e = gi(t);
  return this.filter((n, s) => (!tt(t) || j(s)) && !e.call(s, n, s));
};
function Gt(t, e, n, s) {
  const i = [], r = Ne(e), o = s && gi(s);
  for (let a = 0, l = t.length; a < l; a++)
    if (r) {
      const h = e(t[a]);
      h.length && kh.apply(i, h);
    } else {
      let h = t[a][e];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[e] : null;
    }
  return i;
}
function Xa(t) {
  return t.multiple && t.options ? Gt(zr.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Oh(t) {
  return arguments.length ? this.each((e, n) => {
    const s = n.multiple && n.options;
    if (s || il.test(n.type)) {
      const i = fi(t) ? qa.call(t, String) : Bn(t) ? [] : [String(t)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = at(t) || Bn(t) ? "" : t;
  }) : this[0] && Xa(this[0]);
}
x.val = Oh;
x.is = function(t) {
  const e = gi(t);
  return Fr.call(this, (n, s) => e.call(n, s, n));
};
y.guid = 1;
function Ct(t) {
  return t.length > 1 ? zr.call(t, (e, n, s) => Va.call(s, e) === n) : t;
}
y.unique = Ct;
x.add = function(t, e) {
  return y(Ct(this.get().concat(y(t, e).get())));
};
x.children = function(t) {
  return he(y(Ct(Gt(this, (e) => e.children))), t);
};
x.parent = function(t) {
  return he(y(Ct(Gt(this, "parentNode"))), t);
};
x.index = function(t) {
  const e = t ? y(t)[0] : this[0], n = t ? this : y(e).parent().children();
  return Va.call(n, e);
};
x.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
x.siblings = function(t) {
  return he(y(Ct(Gt(this, (e) => y(e).parent().children().not(e)))), t);
};
x.find = function(t) {
  return y(Ct(Gt(this, (e) => Ur(t, e))));
};
const Hh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Bh = /^$|^module$|\/(java|ecma)script/i, zh = ["type", "src", "nonce", "noModule"];
function Fh(t, e) {
  const n = y(t);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Bh.test(i.type) && za.contains(i)) {
      const r = Re("script");
      r.text = i.textContent.replace(Hh, ""), K(zh, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Uh(t, e, n, s, i) {
  s ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Fh(e, t.ownerDocument);
}
function ue(t, e, n, s, i, r, o, a) {
  return K(t, (l, h) => {
    K(y(h), (c, u) => {
      K(y(e), (d, f) => {
        const p = n ? u : f, m = n ? f : u, v = n ? c : d;
        Uh(p, v ? m.cloneNode(!0) : m, s, i, !v);
      }, a);
    }, o);
  }, r), e;
}
x.after = function() {
  return ue(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ue(arguments, this, !1, !1, !0);
};
function Vh(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (at(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, s) => {
    j(s) && (e ? y(s).empty().append(t) : s.innerHTML = t);
  });
}
x.html = Vh;
x.appendTo = function(t) {
  return ue(arguments, this, !0, !1, !0);
};
x.wrapInner = function(t) {
  return this.each((e, n) => {
    const s = y(n), i = s.contents();
    i.length ? i.wrapAll(t) : s.append(t);
  });
};
x.before = function() {
  return ue(arguments, this, !1, !0);
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
  return ue(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(t) {
  return ue(arguments, this, !0, !0);
};
x.prepend = function() {
  return ue(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(t) {
  return ue(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return y(Ct(Gt(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
x.next = function(t, e, n) {
  return he(y(Ct(Gt(this, "nextElementSibling", e, n))), t);
};
x.nextAll = function(t) {
  return this.next(t, !0);
};
x.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
x.parents = function(t, e) {
  return he(y(Ct(Gt(this, "parentElement", !0, e))), t);
};
x.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
x.prev = function(t, e, n) {
  return he(y(Ct(Gt(this, "previousElementSibling", e, n))), t);
};
x.prevAll = function(t) {
  return this.prev(t, !0);
};
x.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
x.map = function(t) {
  return y(xh.apply([], qa.call(this, (e, n) => t.call(e, n, e))));
};
x.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Ft(n, "position") === "static"; )
      n = n.offsetParent;
    return n || za;
  });
};
x.slice = function(t, e) {
  return y(ja.call(this, t, e));
};
const qh = /-([a-z])/g;
function qr(t) {
  return t.replace(qh, (e, n) => n.toUpperCase());
}
x.ready = function(t) {
  const e = () => setTimeout(t, 0, y);
  return zt.readyState !== "loading" ? e() : zt.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + Ws.pageYOffset,
    left: e.left + Ws.pageXOffset
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
    if (i !== t && j(i)) {
      const r = y(i).offset();
      n.top -= r.top + bt(i, "borderTopWidth"), n.left -= r.left + bt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - bt(t, "marginTop"),
    left: n.left - bt(t, "marginLeft")
  };
};
const Ja = {
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
      return t = Ja[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, s) => {
        s[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
x.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[Ja[t] || t];
  });
};
const jh = /^--/;
function jr(t) {
  return jh.test(t);
}
const Oi = {}, { style: Gh } = Fa, Yh = ["webkit", "moz", "ms"];
function Kh(t, e = jr(t)) {
  if (e)
    return t;
  if (!Oi[t]) {
    const n = qr(t), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Yh.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in Gh)
        return Oi[t] = o, !1;
    });
  }
  return Oi[t];
}
const Xh = {
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
function Za(t, e, n = jr(t)) {
  return !n && !Xh[t] && Ga(e) ? `${e}px` : e;
}
function Jh(t, e) {
  if (tt(t)) {
    const n = jr(t);
    return t = Kh(t, n), arguments.length < 2 ? this[0] && Ft(this[0], t, n) : t ? (e = Za(t, e, n), this.each((s, i) => {
      j(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
x.css = Jh;
function Qa(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Zh = /^\s+|\s+$/;
function ra(t, e) {
  const n = t.dataset[e] || t.dataset[qr(e)];
  return Zh.test(n) ? n : Qa(JSON.parse, n);
}
function Qh(t, e, n) {
  n = Qa(JSON.stringify, n), t.dataset[qr(e)] = n;
}
function tu(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ra(this[0], s);
    return n;
  }
  if (tt(t))
    return arguments.length < 2 ? this[0] && ra(this[0], t) : at(e) ? this : this.each((n, s) => {
      Qh(s, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
x.data = tu;
function tl(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
K([!0, !1], (t, e) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return ln(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ce(this[0]) ? tl(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (r && e ? bt(this[0], `margin${n ? "Top" : "Left"}`) + bt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return at(s) ? void 0 : this;
    if (!arguments.length)
      return ln(this[0]) ? this[0].document.documentElement[`client${e}`] : Ce(this[0]) ? tl(this[0], e) : this[0].getBoundingClientRect()[n] - na(this[0], !t);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!j(o))
        return;
      const a = Ft(o, "boxSizing");
      o.style[n] = Za(n, i + (a === "border-box" ? na(o, !t) : 0));
    });
  };
});
const oa = "___cd";
x.toggle = function(t) {
  return this.each((e, n) => {
    if (!j(n))
      return;
    const s = sa(n);
    (at(t) ? s : t) ? (n.style.display = n[oa] || "", sa(n) && (n.style.display = Ph(n.tagName))) : s || (n[oa] = Ft(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const aa = "___ce", Gr = ".", Yr = { focus: "focusin", blur: "focusout" }, el = { mouseenter: "mouseover", mouseleave: "mouseout" }, eu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Kr(t) {
  return el[t] || Yr[t] || t;
}
function Xr(t) {
  const e = t.split(Gr);
  return [e[0], e.slice(1).sort()];
}
x.trigger = function(t, e) {
  if (tt(t)) {
    const [s, i] = Xr(t), r = Kr(s);
    if (!r)
      return this;
    const o = eu.test(r) ? "MouseEvents" : "HTMLEvents";
    t = zt.createEvent(o), t.initEvent(r, !0, !0), t.namespace = i.join(Gr), t.___ot = s;
  }
  t.___td = e;
  const n = t.___ot in Yr;
  return this.each((s, i) => {
    n && Ne(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function nl(t) {
  return t[aa] = t[aa] || {};
}
function nu(t, e, n, s, i) {
  const r = nl(t);
  r[e] = r[e] || [], r[e].push([n, s, i]), t.addEventListener(e, i);
}
function sl(t, e) {
  return !e || !Fr.call(e, (n) => t.indexOf(n) < 0);
}
function Ds(t, e, n, s, i) {
  const r = nl(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !sl(o, n) || s && s !== a)
        return !0;
      t.removeEventListener(e, l);
    }));
  else
    for (e in r)
      Ds(t, e, n, s, i);
}
x.off = function(t, e, n) {
  if (at(t))
    this.each((s, i) => {
      !j(i) && !Ce(i) && !ln(i) || Ds(i);
    });
  else if (tt(t))
    Ne(e) && (n = e, e = ""), K(pi(t), (s, i) => {
      const [r, o] = Xr(i), a = Kr(r);
      this.each((l, h) => {
        !j(h) && !Ce(h) && !ln(h) || Ds(h, a, o, e, n);
      });
    });
  else
    for (const s in t)
      this.off(s, t[s]);
  return this;
};
x.remove = function(t) {
  return he(this, t).detach().off(), this;
};
x.replaceWith = function(t) {
  return this.before(t).remove();
};
x.replaceAll = function(t) {
  return y(t).replaceWith(this), this;
};
function su(t, e, n, s, i) {
  if (!tt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return tt(e) || (at(e) || Bn(e) ? e = "" : at(n) ? (n = e, e = "") : (s = n, n = e, e = "")), Ne(s) || (s = n, n = void 0), s ? (K(pi(t), (r, o) => {
    const [a, l] = Xr(o), h = Kr(a), c = a in el, u = a in Yr;
    h && this.each((d, f) => {
      if (!j(f) && !Ce(f) && !ln(f))
        return;
      const p = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !sl(l, m.namespace.split(Gr)) || !e && (u && (m.target !== f || m.___ot === h) || c && m.relatedTarget && f.contains(m.relatedTarget)))
          return;
        let v = f;
        if (e) {
          let _ = m.target;
          for (; !Ya(_, e); )
            if (_ === f || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, m, m.___td);
        i && Ds(f, h, l, e, p), w === !1 && (m.preventDefault(), m.stopPropagation());
      };
      p.guid = s.guid = s.guid || y.guid++, nu(f, h, l, e, p);
    });
  }), this) : this;
}
x.on = su;
function iu(t, e, n, s) {
  return this.on(t, e, n, s, !0);
}
x.one = iu;
const ru = /\r?\n/g;
function ou(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(ru, `\r
`))}`;
}
const au = /file|reset|submit|button|image/i, il = /radio|checkbox/i;
x.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || au.test(i.type) || il.test(i.type) && !i.checked)
        return;
      const r = Xa(i);
      if (!at(r)) {
        const o = fi(r) ? r : [r];
        K(o, (a, l) => {
          t += ou(i.name, l);
        });
      }
    });
  }), t.slice(1);
};
window.$ = y;
function lu(t, e) {
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
function cu(t, e, n) {
  try {
    const s = lu(t, e), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function it(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((s) => {
      const i = n[s] ?? "";
      t = t.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const s = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${s}`);
  }
  return t;
}
var Jr = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(Jr || {});
function Md(t, e = 2, n) {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / Jr[n]).toFixed(e) + n);
}
const Td = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const s = n[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * Jr[s];
};
let Zr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Qt;
function hu() {
  return Zr;
}
function uu(t) {
  Zr = t.toLowerCase();
}
function rl(t, e) {
  Qt || (Qt = {}), typeof t == "string" && (t = { [t]: e ?? {} }), y.extend(!0, Qt, t);
}
function Ut(t, e, n, s, i, r) {
  Array.isArray(t) ? Qt && t.unshift(Qt) : t = Qt ? [Qt, t] : [t], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Zr;
  let a;
  for (const l of t) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === Qt ? `${r}.${e}` : e;
    if (a = cu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? it(a, ...Array.isArray(n) ? n : [n]) : a;
}
function fu(t, e, n, s) {
  return Ut(void 0, t, e, n, s);
}
Ut.addLang = rl;
Ut.getLang = fu;
Ut.getCode = hu;
Ut.setCode = uu;
rl({
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
function ol(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? e[o][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ol(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...t) => ol(...t).reduce((e, [n, s]) => (s && e.push(n), e), []).join(" ");
y.classes = M;
y.fn.setClass = function(t, ...e) {
  return this.each((n, s) => {
    const i = y(s);
    t === !0 ? i.attr("class", M(i.attr("class"), ...e)) : i.addClass(M(t, ...e));
  });
};
const mn = /* @__PURE__ */ new WeakMap();
function al(t, e, n) {
  const s = mn.has(t), i = s ? mn.get(t) : {};
  typeof e == "string" ? i[e] = n : e === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, e), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && t instanceof Element && Object.assign(i, y(t).dataset(), i), mn.set(t, i)) : mn.delete(t);
}
function du(t, e) {
  let n = mn.get(t) || {};
  return t instanceof Element && (n = Object.assign({}, y(t).dataset(), n)), e === void 0 ? n : n[e];
}
y.fn.dataset = y.fn.data;
y.fn.data = function(...t) {
  if (!this.length)
    return;
  const [e, n] = t;
  return !t.length || t.length === 1 && typeof e == "string" ? du(this[0], e) : this.each((s, i) => al(i, e, n));
};
y.fn.removeData = function(t = null) {
  return this.each((e, n) => al(n, t));
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
function ll(t, e) {
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
    ll(n, t);
  });
};
function Qr(t, e, n = !1) {
  const s = y(t);
  if (e !== void 0) {
    const i = `zui-runjs-${y.guid++}`;
    s.append(`<script id="${i}">${e}<\/script>`), n && s.find(`#${i}`).remove();
    return;
  }
  s.find("script").each((i, r) => {
    Qr(s, r.innerHTML), r.remove();
  });
}
y.runJS = (t, ...e) => (t = t.trim(), t.startsWith("return ") || (t = `return ${t}`), new Function(...e.map(([s]) => s), t)(...e.map(([, s]) => s)));
y.fn.runJS = function(t) {
  return this.each((e, n) => {
    Qr(n, t);
  });
};
const Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: ll,
  runJS: Qr
}, Symbol.toStringTag, { value: "Module" }));
var mi, z, cl, Q, we, la, hl, Ji, Is = {}, ul = [], pu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, to = Array.isArray;
function ie(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function fl(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function q(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? mi.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return ms(t, o, s, i, null);
}
function ms(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++cl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function St() {
  return { current: null };
}
function yi(t) {
  return t.children;
}
function U(t, e) {
  this.props = t, this.context = e;
}
function zn(t, e) {
  if (e == null)
    return t.__ ? zn(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? zn(t) : null;
}
function dl(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return dl(t);
  }
}
function ca(t) {
  (!t.__d && (t.__d = !0) && we.push(t) && !Os.__r++ || la !== z.debounceRendering) && ((la = z.debounceRendering) || hl)(Os);
}
function Os() {
  var t, e, n, s, i, r, o, a;
  for (we.sort(Ji); t = we.shift(); )
    t.__d && (e = we.length, s = void 0, i = void 0, o = (r = (n = t).__v).__e, (a = n.__P) && (s = [], (i = ie({}, r)).__v = r.__v + 1, eo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? zn(r), r.__h), wl(s, r), r.__e != o && dl(r)), we.length > e && we.sort(Ji));
  Os.__r = 0;
}
function pl(t, e, n, s, i, r, o, a, l, h) {
  var c, u, d, f, p, m, v, w = s && s.__k || ul, _ = w.length;
  for (n.__k = [], c = 0; c < e.length; c++)
    if ((f = n.__k[c] = (f = e[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ms(null, f, null, null, f) : to(f) ? ms(yi, { children: f }, null, null, null) : f.__b > 0 ? ms(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      eo(t, f, d = d || Is, i, r, o, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (v || (v = []), d.ref && v.push(d.ref, null, f), v.push(u, f.__c || p, f)), p != null ? (m == null && (m = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = gl(f, l, t) : l = ml(t, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != t && (l = zn(d));
    }
  for (n.__e = m, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = yl(s).nextSibling), _l(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      vl(v[c], v[++c], v[++c]);
}
function gl(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? gl(s, e, n) : ml(n, s, s, i, s.__e, e));
  return e;
}
function ml(t, e, n, s, i, r) {
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
function yl(t) {
  var e, n, s;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (s = yl(n)))
        return s;
  }
  return null;
}
function gu(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Hs(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Hs(t, r, e[r], n[r], s);
}
function ha(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || pu.test(e) ? n : n + "px";
}
function Hs(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || ha(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || ha(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? fa : ua, r) : t.removeEventListener(e, r ? fa : ua, r);
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
function ua(t) {
  return this.l[t.type + !1](z.event ? z.event(t) : t);
}
function fa(t) {
  return this.l[t.type + !0](z.event ? z.event(t) : t);
}
function eo(t, e, n, s, i, r, o, a, l) {
  var h, c, u, d, f, p, m, v, w, _, k, C, S, T, N, A = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = z.__b) && h(e);
  try {
    t:
      if (typeof A == "function") {
        if (v = e.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? m = (c = e.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? e.__c = c = new A(v, _) : (e.__c = c = new U(v, _), c.constructor = A, c.render = yu), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ie({}, c.__s)), ie(c.__s, A.getDerivedStateFromProps(v, c.__s))), d = c.props, f = c.state, c.__v = e, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(H) {
              H && (H.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = t, C = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(e), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(e), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = ie(ie({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), pl(t, to(N = h != null && h.type === yi && h.key == null ? h.props.children : h) ? N : [N], e, n, s, i, r, o, a, l), c.base = e.__e, e.__h = null, c.__h.length && o.push(c), m && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = mu(n.__e, e, n, s, i, r, o, l);
    (h = z.diffed) && h(e);
  } catch (H) {
    e.__v = null, (l || r != null) && (e.__e = a, e.__h = !!l, r[r.indexOf(a)] = null), z.__e(H, e, n);
  }
}
function wl(t, e) {
  z.__c && z.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      z.__e(s, n.__v);
    }
  });
}
function mu(t, e, n, s, i, r, o, a) {
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
    if (r = r && mi.call(t.childNodes), h = (u = n.props || Is).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < t.attributes.length; p++)
          u[t.attributes[p].name] = t.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""));
    }
    if (gu(t, d, u, i, a), c)
      e.__k = [];
    else if (pl(t, to(p = e.props.children) ? p : [p], e, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && zn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && fl(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || f === "progress" && !p || f === "option" && p !== u.value) && Hs(t, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Hs(t, "checked", p, u.checked, !1));
  }
  return t;
}
function vl(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    z.__e(s, n);
  }
}
function _l(t, e, n) {
  var s, i;
  if (z.unmount && z.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || vl(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, e);
      }
    s.base = s.__P = null, t.__c = void 0;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && _l(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || fl(t.__e), t.__ = t.__e = t.__d = void 0;
}
function yu(t, e, n) {
  return this.constructor(t, n);
}
function Fn(t, e, n) {
  var s, i, r;
  z.__ && z.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, r = [], eo(e, t = (!s && n || e).__k = q(yi, null, [t]), i || Is, Is, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? mi.call(e.childNodes) : null, r, !s && n ? n : i ? i.__e : e.firstChild, s), wl(r, t);
}
mi = ul.slice, z = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, cl = 0, Q = function(t) {
  return t != null && t.constructor === void 0;
}, U.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ie({}, this.state), typeof t == "function" && (t = t(ie({}, n), this.props)), t && ie(n, t), t != null && this.__v && (e && this._sb.push(e), ca(this));
}, U.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), ca(this));
}, U.prototype.render = yi, we = [], hl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ji = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Os.__r = 0;
var bl = function(t, e, n, s) {
  var i;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var o = e[r++], a = e[r] ? (e[0] |= o ? 1 : 2, n[e[r++]]) : e[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[e[++r]] = a : o === 6 ? s[1][e[++r]] += a + "" : o ? (i = t.apply(a, bl(t, a, n, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = i)) : s.push(a);
  }
  return s;
}, da = /* @__PURE__ */ new Map();
function wu(t) {
  var e = da.get(this);
  return e || (e = /* @__PURE__ */ new Map(), da.set(this, e)), (e = bl(this, e.get(t) || (e.set(t, e = function(n) {
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
const Nd = wu.bind(q);
function vu(t) {
  const { tagName: e = "div", className: n, style: s, children: i, attrs: r, ...o } = t;
  return q(e, { class: M(n), style: s, ...o, ...r }, i);
}
var _u = 0;
function g(t, e, n, s, i, r) {
  var o, a, l = {};
  for (a in e)
    a == "ref" ? o = e[a] : l[a] = e[a];
  var h = { type: t, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_u, __source: i, __self: r };
  if (typeof t == "function" && (o = t.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var Yn;
class xl extends U {
  constructor() {
    super(...arguments);
    L(this, Yn, St());
  }
  componentDidMount() {
    this.props.executeScript && y(E(this, Yn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ g(vu, { ref: E(this, Yn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Yn = new WeakMap();
function bu(t) {
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
  return i.forEach((m) => {
    const v = [];
    if (typeof m == "string" && a && a[m] && (m = a[m]), typeof m == "function")
      if (l)
        v.push(...l.call(o, m, f, ...r));
      else {
        const w = m.call(o, f, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(m);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Q(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ g("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(u),
    style: d,
    ...c
  }, f];
}
function no({
  tag: t = "div",
  ...e
}) {
  const [n, s] = bu(e);
  return q(t, n, ...s);
}
function Un(t) {
  const { icon: e, className: n, ...s } = t;
  if (!e)
    return null;
  if (Q(e))
    return e;
  const i = ["icon", n];
  return typeof e == "string" ? i.push(e.startsWith("icon-") ? e : `icon-${e}`) : typeof e == "object" && (i.push(e.className), Object.assign(s, e)), /* @__PURE__ */ g("i", { className: M(i), ...s });
}
function xu(t) {
  return this.getChildContext = () => t.context, t.children;
}
function ku(t) {
  const e = this, n = t._container;
  e.componentWillUnmount = function() {
    Fn(null, e._temp), e._temp = null, e._container = null;
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
  }), Fn(
    q(xu, { context: e.context }, t._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function $u(t, e) {
  const n = q(ku, { _vnode: t, _container: e });
  return n.containerInfo = e, n;
}
var so = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Mt = (t, e, n) => (so(t, e, "read from private field"), n ? n.call(t) : e.get(t)), dn = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Le = (t, e, n, s) => (so(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), cs = (t, e, n) => (so(t, e, "access private method"), n), de, yn, ys, pe, Ie, wn;
const kl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    dn(this, Ie), dn(this, de, void 0), dn(this, yn, void 0), dn(this, ys, void 0), dn(this, pe, void 0);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = y(t);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = y.guid++;
    if (Le(this, ys, a), Le(this, yn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Le(this, de, { ...i, ...o.dataset() }), this.setOptions(e), Le(this, pe, this.options.key ?? `__${a}`), o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(Mt(this, pe), this);
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
    return Mt(this, yn);
  }
  get key() {
    return Mt(this, pe);
  }
  /**
   * Get the component options.
   */
  get options() {
    return Mt(this, de);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Mt(this, ys);
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
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: n } = this.constructor, { $element: s } = this;
    if (this.emit("destroyed"), s.off(this.namespace).removeData(t).attr(e, null), n) {
      const i = this.$element.data(`${t}:ALL`);
      if (i)
        if (i.delete(Mt(this, pe)), i.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const r = i.values().next().value;
          s.data(t, r).attr(e, r.gid);
        }
    }
    Le(this, de, void 0), Le(this, yn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && y.extend(Mt(this, de), t), Mt(this, de);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = y.Event(cs(this, Ie, wn).call(this, t));
    return this.$element.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e) {
    this.$element.on(cs(this, Ie, wn).call(this, t), e);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(t, e) {
    this.$element.one(cs(this, Ie, wn).call(this, t), e);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(t, e) {
    this.$element.off(cs(this, Ie, wn).call(this, t), e);
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
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${Mt(this, pe)}${this.constructor.NAMESPACE}`;
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
        const a = y(r).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const o = y(r).data(this.KEY);
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
let vt = kl;
de = /* @__PURE__ */ new WeakMap();
yn = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakMap();
Ie = /* @__PURE__ */ new WeakSet();
wn = function(t) {
  return t.split(" ").map((e) => e.includes(".") ? e : `${e}${this.namespace}`).join(" ");
};
vt.DEFAULT = {};
vt.NAME = kl.name;
vt.MULTI_INSTANCE = !1;
class et extends vt {
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
    Fn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function Su({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return q(t, {
    className: M(e),
    style: s,
    ...i
  }, n);
}
function $l({
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
  ...m
}) {
  const v = [
    typeof f == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(Un, { icon: l }),
    /* @__PURE__ */ g("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ g(Un, { icon: u })
  ];
  return q(e, {
    className: M(n, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...m,
    ...i
  }, ...v);
}
function Cu({
  component: t = "div",
  className: e,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return q(t, {
    className: M(e),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function Eu({
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
    className: M(e),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Mu({ type: t, ...e }) {
  return /* @__PURE__ */ g(no, { ...e });
}
function Sl({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return q(t, {
    className: M(e),
    style: s,
    ...i
  }, n);
}
const Zi = class extends U {
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
    n && n.call(s.target, s, t, e);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: t, index: e, event: s });
  }
  beforeRender() {
    var n;
    const t = { ...this.props }, e = (n = t.beforeRender) == null ? void 0 : n.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, n) {
    const { commonItemProps: s, onClickItem: i } = t, r = { ...e };
    return s && Object.assign(r, s[e.type || "item"]), (i || e.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, e.onClick)), r.className = M(r.className), r;
  }
  renderItem(t, e, n) {
    if (!e)
      return null;
    const s = this.getItemRenderProps(t, e, n), { itemRender: i } = t;
    if (i) {
      if (typeof i == "object") {
        const p = i[e.type || "item"];
        if (p)
          return /* @__PURE__ */ g(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (Q(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...d } = s;
    if (r === "html")
      return /* @__PURE__ */ g(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, d.className),
          ...l,
          style: c || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Zi.ItemComponents[r] : o;
    return Object.assign(d, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), t.checkbox && r === "item" && d.checked === void 0 && (d.checked = !!d.active), this.renderTypedItem(f, {
      className: M(h),
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
    return /* @__PURE__ */ g(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ g(t, { ...n }),
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
    return /* @__PURE__ */ g(f, { class: M(this.name, i), style: n, ...d, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      o
    ] });
  }
};
let Ae = Zi;
Ae.ItemComponents = {
  divider: Su,
  item: $l,
  heading: Cu,
  space: Eu,
  custom: Mu,
  basic: Sl
};
Ae.ROOT_TAG = "menu";
Ae.NAME = "action-menu";
class Cl extends et {
}
Cl.NAME = "ActionMenu";
Cl.Component = Ae;
function Tu({
  items: t,
  show: e,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g($l, { ...s });
}
var El = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ut = (t, e, n) => (El(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Hi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ru = (t, e, n, s) => (El(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ws, Rt, vn;
let wi = class extends Ae {
  constructor(e) {
    super(e), Hi(this, ws, /* @__PURE__ */ new Set()), Hi(this, Rt, void 0), Hi(this, vn, (n, s, i) => {
      y(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), Ru(this, Rt, e.nestedShow === void 0), ut(this, Rt) && (this.state = { nestedShow: e.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const e = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = e;
    return typeof a.items == "function" && (a.items = a.items(this)), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(e) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: u } = this.props;
    return {
      items: e,
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
      level: (u || 0) + 1
    };
  }
  renderNestedMenu(e) {
    let { items: n } = e;
    if (!n || (typeof n == "function" && (n = n(e, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ g(s, { ...i, "data-level": i.level });
  }
  isNestedItem(e) {
    return (!e.type || e.type === "item") && !!e.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(e, n) {
  }
  getItemRenderProps(e, n, s) {
    const i = super.getItemRenderProps(e, n, s);
    if (i.level = e.level || 0, !this.isNestedItem(i))
      return i;
    const r = i.key ?? i.id ?? `${e.level || 0}:${s}`;
    ut(this, ws).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, vn).bind(this, r, !0),
        onMouseLeave: ut(this, vn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, vn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
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
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, ws).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
ws = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
vn = /* @__PURE__ */ new WeakMap();
wi.ItemComponents = {
  item: Tu
};
class Ml extends et {
}
Ml.NAME = "ActionMenuNested";
Ml.Component = wi;
let vi = class extends wi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((s) => s.icon)), e.className = M(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((s) => this.isNestedItem(s)),
      "menu-popup": e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ g("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
};
vi.NAME = "menu";
class Tl extends et {
}
Tl.NAME = "Menu";
Tl.Component = vi;
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
      text: m,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: k,
      ...C
    } = this.props, S = e || (a ? "a" : "button"), T = m == null || typeof m == "string" && !m.length || u && !f, N = w && T && !p && !v && !o && !u;
    return q(
      S,
      {
        className: M("btn", n, r, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: _ === void 0 ? !N && !o && T : _
        }, i ? `size-${i}` : ""),
        title: k,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: l,
        type: S === "button" ? s : void 0,
        ...C
      },
      /* @__PURE__ */ g(Un, { icon: u ? `icon ${d || "icon-spinner-snake"} spin` : p }),
      T ? null : /* @__PURE__ */ g("span", { className: "text", children: u ? f : m }),
      u ? null : o,
      u ? null : typeof v == "string" ? /* @__PURE__ */ g("i", { class: `icon ${v}` }) : v,
      u ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Nu({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Vt, { type: n, ...s });
}
function es(t) {
  return t.split("-")[1];
}
function io(t) {
  return t === "y" ? "height" : "width";
}
function xe(t) {
  return t.split("-")[0];
}
function ns(t) {
  return ["top", "bottom"].includes(xe(t)) ? "x" : "y";
}
function pa(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ns(e), l = io(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (xe(e)) {
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
  switch (es(e)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Au = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: c, y: u } = pa(h, s, l), d = s, f = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: v, fn: w } = a[m], { x: _, y: k, data: C, reset: S } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    c = _ ?? c, u = k ?? u, f = { ...f, [v]: { ...f[v], ...C } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : S.rects), { x: c, y: u } = pa(h, d, l)), m = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function ss(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Rl(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Bs(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Nl(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = t, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ss(e, t), p = Rl(f), m = a[d ? u === "floating" ? "reference" : "floating" : u], v = Bs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, C = Bs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / k.y, bottom: (C.bottom - v.bottom + p.bottom) / k.y, left: (v.left - C.left + p.left) / k.x, right: (C.right - v.right + p.right) / k.x };
}
const Qi = Math.min, Lu = Math.max;
function tr(t, e, n) {
  return Lu(t, Qi(e, n));
}
const er = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = e, { element: l, padding: h = 0 } = ss(t, e) || {};
  if (l == null)
    return {};
  const c = Rl(h), u = { x: n, y: s }, d = ns(i), f = io(d), p = await o.getDimensions(l), m = d === "y", v = m ? "top" : "left", w = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", k = r.reference[f] + r.reference[d] - u[d] - r.floating[f], C = u[d] - r.reference[d], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = S ? S[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement(S)) || (T = a.floating[_] || r.floating[f]);
  const N = k / 2 - C / 2, A = T / 2 - p[f] / 2 - 1, H = Qi(c[v], A), b = Qi(c[w], A), R = H, D = T - p[f] - b, W = T / 2 - p[f] / 2 + N, I = tr(R, W, D), P = es(i) != null && W != I && r.reference[f] / 2 - (W < R ? H : b) - p[f] / 2 < 0;
  return { [d]: u[d] - (P ? W < R ? R - W : D - W : 0), data: { [d]: I, centerOffset: W - I } };
} }), Wu = ["top", "right", "bottom", "left"];
Wu.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Pu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function zs(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Pu[e]);
}
function Du(t, e, n) {
  n === void 0 && (n = !1);
  const s = es(t), i = ns(t), r = io(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = zs(o)), { main: o, cross: zs(o) };
}
const Iu = { start: "end", end: "start" };
function Bi(t) {
  return t.replace(/start|end/g, (e) => Iu[e]);
}
const _i = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...m } = ss(t, e), v = xe(s), w = xe(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = u || (w || !p ? [zs(o)] : function(R) {
      const D = zs(R);
      return [Bi(R), D, Bi(D)];
    }(o));
    u || f === "none" || k.push(...function(R, D, W, I) {
      const P = es(R);
      let V = function(Et, un, as) {
        const fn = ["left", "right"], ls = ["right", "left"], Wi = ["top", "bottom"], _h = ["bottom", "top"];
        switch (Et) {
          case "top":
          case "bottom":
            return as ? un ? ls : fn : un ? fn : ls;
          case "left":
          case "right":
            return un ? Wi : _h;
          default:
            return [];
        }
      }(xe(R), W === "start", I);
      return P && (V = V.map((Et) => Et + "-" + P), D && (V = V.concat(V.map(Bi)))), V;
    }(o, p, f, _));
    const C = [o, ...k], S = await Nl(e, m), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: R, cross: D } = Du(s, r, _);
      T.push(S[R], S[D]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((R) => R <= 0)) {
      var A, H;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, D = C[R];
      if (D)
        return { data: { index: R, overflows: N }, reset: { placement: D } };
      let W = (H = N.filter((I) => I.overflows[0] <= 0).sort((I, P) => I.overflows[1] - P.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!W)
        switch (d) {
          case "bestFit": {
            var b;
            const I = (b = N.map((P) => [P.placement, P.overflows.filter((V) => V > 0).reduce((V, Et) => V + Et, 0)]).sort((P, V) => P[1] - V[1])[0]) == null ? void 0 : b[0];
            I && (W = I);
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
}, ro = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = xe(a), d = es(a), f = ns(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, m = c && f ? -1 : 1, v = ss(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: k } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof k == "number" && (_ = d === "end" ? -1 * k : k), f ? { x: _ * m, y: w * p } : { x: w * p, y: _ * m };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Ou(t) {
  return t === "x" ? "y" : "x";
}
const nr = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: s, placement: i } = e, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ss(t, e), h = { x: n, y: s }, c = await Nl(e, l), u = ns(xe(i)), d = Ou(u);
    let f = h[u], p = h[d];
    if (r) {
      const v = u === "y" ? "bottom" : "right";
      f = tr(f + c[u === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = d === "y" ? "bottom" : "right";
      p = tr(p + c[d === "y" ? "top" : "left"], p, p - c[v]);
    }
    const m = a.fn({ ...e, [u]: f, [d]: p });
    return { ...m, data: { x: m.x - n, y: m.y - s } };
  } };
};
function ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function pt(t) {
  return ht(t).getComputedStyle(t);
}
function Al(t) {
  return t instanceof ht(t).Node;
}
function le(t) {
  return Al(t) ? (t.nodeName || "").toLowerCase() : "";
}
function mt(t) {
  return t instanceof ht(t).HTMLElement;
}
function ot(t) {
  return t instanceof ht(t).Element;
}
function ga(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ht(t).ShadowRoot || t instanceof ShadowRoot;
}
function Vn(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = pt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Hu(t) {
  return ["table", "td", "th"].includes(le(t));
}
function sr(t) {
  const e = oo(), n = pt(t);
  return n.transform !== "none" || n.perspective !== "none" || !e && !!n.backdropFilter && n.backdropFilter !== "none" || !e && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function oo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function bi(t) {
  return ["html", "body", "#document"].includes(le(t));
}
const ma = Math.min, Nn = Math.max, Fs = Math.round;
function Ll(t) {
  const e = pt(t);
  let n = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = mt(t), r = i ? t.offsetWidth : n, o = i ? t.offsetHeight : s, a = Fs(n) !== r || Fs(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, fallback: a };
}
function Wl(t) {
  return ot(t) ? t : t.contextElement;
}
const Pl = { x: 1, y: 1 };
function je(t) {
  const e = Wl(t);
  if (!mt(e))
    return Pl;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = Ll(e);
  let o = (r ? Fs(n.width) : n.width) / s, a = (r ? Fs(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const ya = { x: 0, y: 0 };
function Dl(t, e, n) {
  var s, i;
  if (e === void 0 && (e = !0), !oo())
    return ya;
  const r = t ? ht(t) : window;
  return !n || e && n !== r ? ya : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Ee(t, e, n, s) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), r = Wl(t);
  let o = Pl;
  e && (s ? ot(s) && (o = je(s)) : o = je(t));
  const a = Dl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, u = i.height / o.y;
  if (r) {
    const d = ht(r), f = s && ot(s) ? ht(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const m = je(p), v = p.getBoundingClientRect(), w = getComputedStyle(p);
      v.x += (p.clientLeft + parseFloat(w.paddingLeft)) * m.x, v.y += (p.clientTop + parseFloat(w.paddingTop)) * m.y, l *= m.x, h *= m.y, c *= m.x, u *= m.y, l += v.x, h += v.y, p = ht(p).frameElement;
    }
  }
  return Bs({ width: c, height: u, x: l, y: h });
}
function re(t) {
  return ((Al(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function xi(t) {
  return ot(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Il(t) {
  return Ee(re(t)).left + xi(t).scrollLeft;
}
function cn(t) {
  if (le(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || ga(t) && t.host || re(t);
  return ga(e) ? e.host : e;
}
function Ol(t) {
  const e = cn(t);
  return bi(e) ? e.ownerDocument.body : mt(e) && Vn(e) ? e : Ol(e);
}
function An(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = Ol(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ht(s);
  return i ? e.concat(r, r.visualViewport || [], Vn(s) ? s : []) : e.concat(s, An(s));
}
function wa(t, e, n) {
  let s;
  if (e === "viewport")
    s = function(i, r) {
      const o = ht(i), a = re(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = oo();
        (!f || f && r === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(t, n);
  else if (e === "document")
    s = function(i) {
      const r = re(i), o = xi(i), a = i.ownerDocument.body, l = Nn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Nn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Il(i);
      const u = -o.scrollTop;
      return pt(a).direction === "rtl" && (c += Nn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(re(t));
  else if (ot(e))
    s = function(i, r) {
      const o = Ee(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = mt(i) ? je(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, n);
  else {
    const i = Dl(t);
    s = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return Bs(s);
}
function Hl(t, e) {
  const n = cn(t);
  return !(n === e || !ot(n) || bi(n)) && (pt(n).position === "fixed" || Hl(n, e));
}
function va(t, e) {
  return mt(t) && pt(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function _a(t, e) {
  const n = ht(t);
  if (!mt(t))
    return n;
  let s = va(t, e);
  for (; s && Hu(s) && pt(s).position === "static"; )
    s = va(s, e);
  return s && (le(s) === "html" || le(s) === "body" && pt(s).position === "static" && !sr(s)) ? n : s || function(i) {
    let r = cn(i);
    for (; mt(r) && !bi(r); ) {
      if (sr(r))
        return r;
      r = cn(r);
    }
    return null;
  }(t) || n;
}
function Bu(t, e, n) {
  const s = mt(e), i = re(e), r = n === "fixed", o = Ee(t, !0, r, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = { x: 0, y: 0 };
  if (s || !s && !r)
    if ((le(e) !== "body" || Vn(i)) && (a = xi(e)), mt(e)) {
      const h = Ee(e, !0, r, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = Il(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const zu = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = An(h).filter((v) => ot(v) && le(v) !== "body"), f = null;
    const p = pt(h).position === "fixed";
    let m = p ? cn(h) : h;
    for (; ot(m) && !bi(m); ) {
      const v = pt(m), w = sr(m);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Vn(m) && !w && Hl(h, m)) ? d = d.filter((_) => _ !== m) : f = v, m = cn(m);
    }
    return c.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = wa(e, c, i);
    return h.top = Nn(u.top, h.top), h.right = ma(u.right, h.right), h.bottom = ma(u.bottom, h.bottom), h.left = Nn(u.left, h.left), h;
  }, wa(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = mt(n), r = re(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((le(n) !== "body" || Vn(r)) && (o = xi(n)), mt(n))) {
    const h = Ee(n);
    a = je(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + l.x, y: e.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: ot, getDimensions: function(t) {
  return Ll(t);
}, getOffsetParent: _a, getDocumentElement: re, getScale: je, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || _a, r = this.getDimensions;
  return { reference: Bu(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => pt(t).direction === "rtl" };
function ao(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i || r ? [...ot(t) ? An(t) : t.contextElement ? An(t.contextElement) : [], ...An(e)] : [];
  l.forEach((d) => {
    const f = !ot(d) && d.toString().includes("V");
    !i || a && !f || d.addEventListener("scroll", n, { passive: !0 }), r && d.addEventListener("resize", n);
  });
  let h, c = null;
  o && (c = new ResizeObserver(() => {
    n();
  }), ot(t) && !a && c.observe(t), ot(t) || !t.contextElement || a || c.observe(t.contextElement), c.observe(e));
  let u = a ? Ee(t) : null;
  return a && function d() {
    const f = Ee(t);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, h = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    l.forEach((f) => {
      i && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (d = c) == null || d.disconnect(), c = null, a && cancelAnimationFrame(h);
  };
}
const ki = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: zu, ...n }, r = { ...i.platform, _c: s };
  return Au(t, e, { ...i, platform: r });
};
let Fu = class extends vi {
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
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  createPopper() {
    const e = this.getPopperOptions();
    this.ref.current && ki(this.getPopperElement(), this.ref.current, e).then(({ x: n, y: s }) => {
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
    return e.className = M(e.className, "menu-popup"), e;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ g("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var lo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Tt = (t, e, n) => (lo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), We = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, hs = (t, e, n, s) => (lo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ba = (t, e, n) => (lo(t, e, "access private method"), n), Xt, _n, vs, _s, ir, Bl, rr, zl;
const zi = "show", Uu = '[data-toggle="contextmenu"]';
class dt extends vt {
  constructor() {
    super(...arguments), We(this, ir), We(this, rr), We(this, Xt, void 0), We(this, _n, void 0), We(this, vs, void 0), We(this, _s, void 0);
  }
  get isShown() {
    return Tt(this, Xt) && y(Tt(this, Xt)).hasClass(zi);
  }
  get menu() {
    return Tt(this, Xt) || this.ensureMenu();
  }
  get trigger() {
    return Tt(this, vs) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  show(e) {
    return this.isShown || (hs(this, vs, e), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (y(this.menu).addClass(zi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = Tt(this, _s)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (y(Tt(this, Xt)).removeClass(zi), this.emit("hidden"), !0);
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    var e;
    super.destroy(), this.hide(), (e = Tt(this, Xt)) == null || e.remove();
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
    }), hs(this, Xt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: e, strategy: n } = this.options, s = {
      middleware: [],
      placement: e,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(_i())), s;
  }
  createPopper() {
    const e = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    hs(this, _s, ao(n, s, () => {
      ki(n, s, e).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        y(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = ba(this, ir, Bl).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: u } = o.arrow;
          y(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...ba(this, rr, zl).call(this, l)
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
    return !e || this.emit("updateMenu", e, this.trigger).defaultPrevented ? !1 : (Fn(q(Fu, e), this.menu), !0);
  }
  getPopperElement() {
    return Tt(this, _n) || hs(this, _n, {
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
    }), Tt(this, _n);
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
Xt = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
ir = /* @__PURE__ */ new WeakSet();
Bl = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
rr = /* @__PURE__ */ new WeakSet();
zl = function(t) {
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
dt.MENU_CLASS = "contextmenu";
dt.NAME = "ContextMenu";
dt.MULTI_INSTANCE = !0;
dt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
};
y(document).on("contextmenu.contextmenu.zui", (t) => {
  const e = y(t.target);
  if (e.closest(`.${dt.MENU_CLASS}`).length)
    return;
  const n = e.closest(Uu).not(":disabled,.disabled");
  n.length && (dt.ensure(n).show(t), t.preventDefault());
}).on("click.contextmenu.zui", dt.clear.bind(dt));
var co = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, bn = (t, e, n) => (co(t, e, "read from private field"), n ? n.call(t) : e.get(t)), us = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, or = (t, e, n, s) => (co(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Vu = (t, e, n) => (co(t, e, "access private method"), n), Ln, xn, Us, ar, Fl;
const xa = '[data-toggle="dropdown"]', Ul = class extends dt {
  constructor() {
    super(...arguments), us(this, ar), us(this, Ln, !1), us(this, xn, 0), this.hideLater = () => {
      bn(this, Us).call(this), or(this, xn, window.setTimeout(this.hide.bind(this), 100));
    }, us(this, Us, () => {
      clearTimeout(bn(this, xn)), or(this, xn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && Ul.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const n = super.show(t);
    return n && (!bn(this, Ln) && this.isHover && Vu(this, ar, Fl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    bn(this, Ln) && y(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((n = t.middleware) == null || n.push(ro(e)), (s = t.middleware) == null || s.push(er({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const e = this.getArrowSize(), n = y('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${e}px`,
        height: `${e}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0];
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: e } = t;
      t.afterRender = (...n) => {
        this.arrowEl && y(this.menu).find(".menu").each((s, i) => {
          y(i).find(".arrow-el").length === 0 && y(i).parent().hasClass("dropdown-menu") && y(i).append(this.arrowEl);
        }), e == null || e(...n);
      };
    }
    return t;
  }
};
let oe = Ul;
Ln = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
ar = /* @__PURE__ */ new WeakSet();
Fl = function() {
  y(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, bn(this, Us)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), or(this, Ln, !0);
};
oe.MENU_CLASS = "dropdown-menu";
oe.NAME = "Dropdown";
oe.DEFAULT = {
  ...dt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
y(document).on("click", function(t) {
  const e = y(t.target).closest(xa).not(":disabled,.disabled");
  if (e.length) {
    const n = oe.ensure(e);
    n.options.trigger === "click" && n.toggle();
  } else
    oe.clear({ event: t });
}).on("mouseover", function(t) {
  var s, i;
  const e = (i = (s = t.target).closest) == null ? void 0 : i.call(s, xa);
  if (!e)
    return;
  const n = oe.ensure(e);
  n.isHover && n.show();
});
let fs = 0;
window.addEventListener("scroll", (t) => {
  fs && clearTimeout(fs), fs = window.setTimeout(() => {
    oe.clear({ event: t }), fs = 0;
  }, 50);
}, !0);
var Kn, Xe;
class qu extends U {
  constructor(n) {
    var s;
    super(n);
    L(this, Kn, void 0);
    L(this, Xe, St());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, Xe);
  }
  get triggerElement() {
    return E(this, Xe).current;
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
    }), B(this, Kn, oe.ensure(this.triggerElement, {
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
    (n = E(this, Kn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, Xe)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
Kn = new WeakMap(), Xe = new WeakMap();
class ju extends qu {
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
    return s.caret = i, /* @__PURE__ */ g(Vt, { ...s });
  }
}
function Vl({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(ju, { type: n, ...s });
}
let ql = class extends U {
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
    return /* @__PURE__ */ g(Vt, { ...i }, s);
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
    return /* @__PURE__ */ g(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function Gu({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(ql, { type: n, ...s });
}
let yt = class extends Ae {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = M(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: M(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ g(e, { ...a });
  }
};
yt.ItemComponents = {
  item: Nu,
  dropdown: Vl,
  "btn-group": Gu
};
yt.ROOT_TAG = "nav";
yt.NAME = "toolbar";
yt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Yu({
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
  a === !0 ? u = /* @__PURE__ */ g(Vt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : Q(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ g(Vt, { ...a, onClick: l }));
  const d = Q(n) ? n : n ? /* @__PURE__ */ g(yt, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: M("alert", t), style: e, ...c, children: [
    Q(h) ? h : typeof h == "string" ? /* @__PURE__ */ g("i", { className: `icon ${h}` }) : null,
    Q(i) ? i : /* @__PURE__ */ g("div", { className: M("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    o
  ] });
}
function Ku(t) {
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
let Xu = class extends U {
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
    return /* @__PURE__ */ g(
      Yu,
      {
        className: M("messager", l, i, o === !0 ? Ku(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Ju = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Zu = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, pn = (t, e, n) => (Ju(t, e, "access private method"), n), ge, Oe;
class ho extends et {
  constructor() {
    super(...arguments), Zu(this, ge), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: e }) => {
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
    this.render(), this.emit("show"), pn(this, ge, Oe).call(this, () => {
      this._show = !0, this.render(), pn(this, ge, Oe).call(this, () => {
        this.emit("shown");
        const { time: e } = this.options;
        e && pn(this, ge, Oe).call(this, () => this.hide(), e);
      });
    }, 100);
  }
  hide() {
    this._show && pn(this, ge, Oe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), pn(this, ge, Oe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ge = /* @__PURE__ */ new WeakSet();
Oe = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
};
ho.NAME = "MessagerItem";
ho.Component = Xu;
var uo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ke = (t, e, n) => (uo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ds = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, bs = (t, e, n, s) => (uo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), jl = (t, e, n) => (uo(t, e, "access private method"), n), Ge, It, lr, Gl, fo, Yl;
const Kl = class extends vt {
  constructor() {
    super(...arguments), ds(this, lr), ds(this, fo), ds(this, Ge, void 0), ds(this, It, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ke(this, It)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), jl(this, lr, Gl).call(this).show();
  }
  hide() {
    var t;
    (t = ke(this, It)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, s = Kl.ensure(e || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let po = Kl;
Ge = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
lr = /* @__PURE__ */ new WeakSet();
Gl = function() {
  if (ke(this, It))
    ke(this, It).setOptions(this.options);
  else {
    const t = jl(this, fo, Yl).call(this), e = new ho(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), bs(this, Ge, void 0), bs(this, It, void 0);
    }), bs(this, It, e);
  }
  return ke(this, It);
};
fo = /* @__PURE__ */ new WeakSet();
Yl = function() {
  if (ke(this, Ge))
    return ke(this, Ge);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = y(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let n = e.find(`#messager-${this.gid}`);
  return n.length || (n = y(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), bs(this, Ge, n[0])), n[0];
};
po.NAME = "messager";
po.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
y(document).on("zui.messager.show", (t, e) => {
  e && po.show(e);
});
let go = class extends U {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ g("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - e) / 100, "stroke-width": s }),
      /* @__PURE__ */ g("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(e) })
    ] });
  }
};
go.NAME = "zui.progress-circle";
go.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Xl extends et {
}
Xl.NAME = "ProgressCircle";
Xl.Component = go;
let Qu = class extends U {
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
    } = this.props, u = this.state.checked ? 1 : 0, d = e || "div", f = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, m = [
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
        className: M("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...m,
      s
    );
  }
};
class Jl extends et {
}
Jl.NAME = "Switch";
Jl.Component = Qu;
var Dt;
class tf {
  constructor(e = "") {
    L(this, Dt, void 0);
    typeof e == "object" ? B(this, Dt, e) : B(this, Dt, document.appendChild(document.createComment(e)));
  }
  on(e, n, s) {
    E(this, Dt).addEventListener(e, n, s);
  }
  once(e, n, s) {
    E(this, Dt).addEventListener(e, n, { once: !0, ...s });
  }
  off(e, n, s) {
    E(this, Dt).removeEventListener(e, n, s);
  }
  emit(e) {
    return E(this, Dt).dispatchEvent(e), e;
  }
}
Dt = new WeakMap();
const ka = /* @__PURE__ */ new Set([
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
class Zl extends tf {
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
    return typeof e == "string" && (ka.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Zl.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (ka.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
let $i = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var Xn, te, _t, Je, Ze, xs;
const ta = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    L(this, Ze);
    L(this, Xn, void 0);
    L(this, te, void 0);
    L(this, _t, void 0);
    L(this, Je, void 0);
    B(this, Xn, n), B(this, te, `ZUI_STORE:${e ?? $i()}`), B(this, _t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, Xn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, Je) || B(this, Je, new ta(E(this, te), "session")), E(this, Je));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const s = E(this, _t).getItem(nt(this, Ze, xs).call(this, e));
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
    E(this, _t).setItem(nt(this, Ze, xs).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    E(this, _t).removeItem(nt(this, Ze, xs).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < E(this, _t).length; n++) {
      const s = E(this, _t).key(n);
      if (s != null && s.startsWith(E(this, te))) {
        const i = E(this, _t).getItem(s);
        typeof i == "string" && e(s.substring(E(this, te).length + 1), JSON.parse(i));
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
let Vs = ta;
Xn = new WeakMap(), te = new WeakMap(), _t = new WeakMap(), Je = new WeakMap(), Ze = new WeakSet(), xs = function(e) {
  return `${E(this, te)}:${e}`;
};
const ef = new Vs("DEFAULT");
function nf(t, e = "local") {
  return new Vs(t, e);
}
Object.assign(ef, { create: nf });
function sf(t) {
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
function rf(t) {
  const [e, n, s] = typeof t == "string" ? sf(t) : t;
  return e * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function $a(t, e) {
  return rf(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Sa(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function of(t, e, n) {
  t = t % 360 / 360, e = Sa(e), n = Sa(n);
  const s = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function af(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function lf(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t[0].toUpperCase() : t.length <= e ? t : t.substring(0, e);
}
let Ql = class extends U {
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
      children: m,
      ...v
    } = this.props, w = ["avatar", e], _ = { ...n, background: o, color: a };
    let k = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (w.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let C;
    if (u)
      w.push("has-img"), C = /* @__PURE__ */ g("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const S = lf(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (_.color = $a(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : af(N)) * d % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const H = of(A, f, p);
          _.color = $a(H);
        }
      }
      let T;
      k && k < 14 * S.length && (T = { transform: `scale(${k / (14 * S.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ g("div", { "data-actualSize": k, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: M(w),
        style: _,
        ...v,
        children: [
          C,
          m
        ]
      }
    );
  }
};
class tc extends et {
}
tc.NAME = "Avatar";
tc.Component = Ql;
class ec extends et {
}
ec.NAME = "BtnGroup";
ec.Component = ql;
var mo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, ve = (t, e, n) => (mo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), gn = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Wn = (t, e, n, s) => (mo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Fi = (t, e, n) => (mo(t, e, "access private method"), n), Fe, ks, me, cr, kn, $s;
const Ui = "show", Ca = "in", cf = '[data-dismiss="modal"]', Ss = class extends vt {
  constructor() {
    super(...arguments), gn(this, kn), gn(this, Fe, 0), gn(this, ks, void 0), gn(this, me, void 0), gn(this, cr, (t) => {
      const e = t.target;
      (e.closest(cf) || this.options.backdrop === !0 && !e.closest(".modal-dialog") && e.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Ui);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", ve(this, cr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const e = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = t.clientWidth, s = t.clientHeight;
          (!ve(this, me) || ve(this, me)[0] !== n || ve(this, me)[1] !== s) && (Wn(this, me, [n, s]), this.layout());
        });
        e.observe(t), Wn(this, ks, e);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = ve(this, ks)) == null || t.disconnect();
  }
  show(t) {
    if (this.shown)
      return !1;
    this.setOptions(t);
    const { modalElement: e } = this, { animation: n, backdrop: s, className: i, style: r } = this.options;
    return y(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Ui, i).css({
      zIndex: `${Ss.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Fi(this, kn, $s).call(this, () => {
      y(e).addClass(Ca), Fi(this, kn, $s).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (y(this.modalElement).removeClass(Ca), this.emit("hide"), Fi(this, kn, $s).call(this, () => {
      y(this.modalElement).removeClass(Ui), this.emit("hidden");
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
    Wn(this, me, [i, r]), typeof t == "function" && (t = t({ width: i, height: r }));
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
    (e = Ss.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ss.query(t)) == null || e.show();
  }
};
let Yt = Ss;
Fe = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
me = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakSet();
$s = function(t, e) {
  ve(this, Fe) && (clearTimeout(ve(this, Fe)), Wn(this, Fe, 0)), t && (this.options.animation ? Wn(this, Fe, window.setTimeout(t, e ?? this.options.transTime)) : t());
};
Yt.NAME = "Modal";
Yt.MULTI_INSTANCE = !0;
Yt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Yt.zIndex = 2e3;
y(window).on("resize.modal.zui", () => {
  Yt.getAll().forEach((t) => {
    const e = t;
    e.shown && e.options.responsive && e.layout();
  });
});
y(document).on("to-hide.modal.zui", (t, e) => {
  Yt.hide(e == null ? void 0 : e.target);
});
class nc extends U {
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
    return Q(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : Q(e) ? e : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ g(yt, { ...e }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? Q(e) ? e : /* @__PURE__ */ g("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return Q(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(yt, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ g("div", { className: M("modal-dialog", e), style: n, children: /* @__PURE__ */ g("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
nc.defaultProps = { closeBtn: !0 };
var Qe, tn, en;
class hf extends U {
  constructor() {
    super(...arguments);
    L(this, Qe, void 0);
    L(this, tn, void 0);
    L(this, en, void 0);
    B(this, Qe, St()), this.state = {}, B(this, en, () => {
      var i, r;
      const n = (r = (i = E(this, Qe).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = E(this, tn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, tn, s);
    });
  }
  componentDidMount() {
    E(this, en).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, tn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, Qe),
        onLoad: E(this, en)
      }
    );
  }
}
Qe = new WeakMap(), tn = new WeakMap(), en = new WeakMap();
var yo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Kt = (t, e, n) => (yo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Pe = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, De = (t, e, n, s) => (yo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ue = (t, e, n) => (yo(t, e, "access private method"), n), ye, Cs, Nt, qn, Si, hr, sc, Es, ur;
function uf(t, e) {
  const { custom: n, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function ff(t, e) {
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
    body: n === "html" ? /* @__PURE__ */ g(xl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function df(t, e) {
  const { url: n, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(hf, { url: n })
  };
}
const pf = {
  custom: uf,
  ajax: ff,
  iframe: df
}, Jt = class extends Yt {
  constructor() {
    super(...arguments), Pe(this, qn), Pe(this, hr), Pe(this, Es), Pe(this, ye, void 0), Pe(this, Cs, void 0), Pe(this, Nt, void 0);
  }
  get id() {
    return Kt(this, Cs);
  }
  get loading() {
    var t;
    return (t = this.modalElement) == null ? void 0 : t.classList.contains(Jt.LOADING_CLASS);
  }
  get shown() {
    var t;
    return !!((t = Kt(this, ye)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = Kt(this, ye);
    if (!t) {
      const { id: e } = this;
      t = y(this.element).find(`#${e}`)[0], t || (t = y("<div>").attr("id", e).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), De(this, ye, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), De(this, Cs, this.options.id || `modal-${$i()}`), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    var t;
    super.destroy(), (t = Kt(this, ye)) == null || t.remove(), De(this, ye, void 0);
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Kt(this, Nt) && clearTimeout(Kt(this, Nt));
    const { modalElement: t, options: e } = this, { type: n, loadTimeout: s } = e, i = pf[n];
    if (!i)
      return console.warn(`Modal: Cannot build modal with type "${n}"`), !1;
    t.classList.add(Jt.LOADING_CLASS), await Ue(this, hr, sc).call(this), s && De(this, Nt, window.setTimeout(() => {
      De(this, Nt, 0), Ue(this, Es, ur).call(this, this.options.timeoutTip);
    }, s));
    const r = await i.call(this, t, e);
    return r === !1 ? await Ue(this, Es, ur).call(this, this.options.failedTip) : r && typeof r == "object" && await Ue(this, qn, Si).call(this, r), Kt(this, Nt) && (clearTimeout(Kt(this, Nt)), De(this, Nt, 0)), t.classList.remove(Jt.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...s } = t, i = Jt.ensure(n, { show: !0, ...s });
      i.one("hidden", () => e(i)), i.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = t;
    let c = /* @__PURE__ */ g("div", { children: n });
    s ? c = /* @__PURE__ */ g("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ g("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ g("div", { className: "modal-body", children: c });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Ut.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let d;
    const f = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: m }) => {
        const v = Jt.query(m.target, l);
        d = p.key, (o == null ? void 0 : o(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Jt.open({
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
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...s } = t;
    return await Jt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), e == null || e(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let wo = Jt;
ye = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakSet();
Si = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], y(this.modalElement).runJS(), e();
    const { afterRender: n, ...s } = t;
    t = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), e();
      },
      ...s
    }, Fn(
      /* @__PURE__ */ g(nc, { ...t }),
      this.modalElement
    );
  });
};
hr = /* @__PURE__ */ new WeakSet();
sc = function() {
  const { loadingText: t } = this.options;
  return Ue(this, qn, Si).call(this, {
    body: /* @__PURE__ */ g("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ g("span", { className: "spinner" }),
      t ? /* @__PURE__ */ g("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
};
Es = /* @__PURE__ */ new WeakSet();
ur = function(t) {
  if (t)
    return Ue(this, qn, Si).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: t })
    });
};
wo.LOADING_CLASS = "loading";
wo.DEFAULT = {
  ...Yt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var vo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, fr = (t, e, n) => (vo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ps = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ea = (t, e, n, s) => (vo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), dr = (t, e, n) => (vo(t, e, "access private method"), n), $e, _o, ic, pr, rc, bo, oc;
const gf = '[data-toggle="modal"]';
class ac extends vt {
  constructor() {
    super(...arguments), ps(this, _o), ps(this, pr), ps(this, bo), ps(this, $e, void 0);
  }
  get modal() {
    return fr(this, $e);
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    var e;
    return (e = dr(this, pr, rc).call(this)) == null ? void 0 : e.show();
  }
  hide() {
    var e;
    return (e = fr(this, $e)) == null ? void 0 : e.hide();
  }
}
$e = /* @__PURE__ */ new WeakMap();
_o = /* @__PURE__ */ new WeakSet();
ic = function() {
  const {
    container: t,
    ...e
  } = this.options, n = e, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), n;
};
pr = /* @__PURE__ */ new WeakSet();
rc = function() {
  const t = dr(this, _o, ic).call(this);
  let e = fr(this, $e);
  if (e)
    return e.setOptions(t), e;
  if (t.type === "static") {
    const n = dr(this, bo, oc).call(this);
    if (!n)
      return;
    e = Yt.ensure(n, t);
  } else
    e = wo.ensure(this.container, t);
  return Ea(this, $e, e), e.on("destroyed", () => {
    Ea(this, $e, void 0);
  }), e;
};
bo = /* @__PURE__ */ new WeakSet();
oc = function() {
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
ac.NAME = "ModalTrigger";
y(document).on("click.modal.zui", (t) => {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, gf);
  if (n) {
    const i = ac.ensure(n);
    i && i.show();
  }
});
let lc = class extends Ae {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = M(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
};
lc.NAME = "nav";
class cc extends et {
}
cc.NAME = "Nav";
cc.Component = lc;
function jn(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function mf({
  key: t,
  type: e,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = jn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : it(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : it(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ g(Vt, { type: n, ...a });
}
const Wt = 24 * 60 * 60 * 1e3, lt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : /* @__PURE__ */ new Date(), is = (t, e = /* @__PURE__ */ new Date()) => (t = lt(t), e = lt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), gr = (t, e = /* @__PURE__ */ new Date()) => lt(t).getFullYear() === lt(e).getFullYear(), yf = (t, e = /* @__PURE__ */ new Date()) => (t = lt(t), e = lt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Fd = (t, e = /* @__PURE__ */ new Date()) => {
  t = lt(t), e = lt(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Ud = (t, e) => is(lt(e), t), Vd = (t, e) => is(lt(e).getTime() - Wt, t), qd = (t, e) => is(lt(e).getTime() + Wt, t), jd = (t, e) => is(lt(e).getTime() - 2 * Wt, t), mr = (t, e = "yyyy-MM-dd hh:mm", n = "") => {
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", gr(t) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const r = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), e;
}, Gd = (t, e, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = mr(t, gr(t) ? s.month : s.full);
  if (is(t, e))
    return i;
  const r = mr(e, gr(t, e) ? yf(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Yd = (t) => {
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
}, Ma = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Ma(t, "day", n, s);
    case "quarter":
      t *= 3;
      break;
    case "month":
      return t *= 30, Ma(t, "day", n, s);
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
function wf({
  key: t,
  type: e,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = jn(i, n);
  return s = typeof s == "function" ? s(a) : it(s, a), /* @__PURE__ */ g(Sl, { ...o, children: [
    r,
    s
  ] });
}
function vf({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(Vt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let m = d; m <= f; m++) {
      l.text = m, delete l.icon, l.disabled = !1;
      const v = jn(i, m);
      o && (l.url = typeof o == "function" ? o(v) : it(o, v)), p.push(/* @__PURE__ */ g(Vt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function _f({
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
      url: typeof n == "function" ? n(c) : it(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(e) : it(a, e), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(Vl, { type: "dropdown", dropdown: i, ...o });
}
function bf({
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
  const d = (m) => {
    var v;
    u = Number((v = m.target) == null ? void 0 : v.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (m) => {
    if (!(m != null && m.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const v = jn(i, u);
    a && !a({ info: v, event: m }) || (m.target.href = c.url = typeof l == "function" ? l(v) : it(l, v));
  }, p = jn(i, e || 0);
  return c.url = typeof l == "function" ? l(p) : it(l, p), /* @__PURE__ */ g("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ g(Vt, { type: s, ...c, onClick: f })
  ] });
}
let Ci = class extends yt {
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
Ci.NAME = "pager";
Ci.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Ci.ItemComponents = {
  ...yt.ItemComponents,
  link: mf,
  info: wf,
  nav: vf,
  "size-menu": _f,
  goto: bf
};
class hc extends et {
}
hc.NAME = "Pager";
hc.Component = Ci;
var ii, ri, uc;
class xf extends U {
  constructor() {
    super(...arguments);
    L(this, ri);
    L(this, ii, (n) => {
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
    return /* @__PURE__ */ g(
      "div",
      {
        className: M("picker-select picker-select-multi form-control", n, { disabled: i, focused: r }),
        style: s,
        onClick: o,
        children: [
          nt(this, ri, uc).call(this),
          a,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
ii = new WeakMap(), ri = new WeakSet(), uc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: n.map((i, r) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, ii), "data-idx": r, children: /* @__PURE__ */ g("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: s });
};
var oi;
class kf extends U {
  constructor() {
    super(...arguments);
    L(this, oi, (n) => {
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
    } = this.props, [u] = a, d = u ? /* @__PURE__ */ g("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: r }), f = u && l ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, oi), children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ g(
      "div",
      {
        className: M("picker-select picker-select-single form-control", n, { disabled: i, focused: o }),
        style: s,
        onClick: h,
        children: [
          d,
          c,
          f,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
oi = new WeakMap();
var $f = ["Shift", "Meta", "Alt", "Control"], Sf = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function Vi(t, e) {
  return typeof t.getModifierState == "function" && t.getModifierState(e);
}
function Cf(t) {
  return t.trim().split(" ").map(function(e) {
    var n = e.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? Sf : i;
    }), s];
  });
}
function Ef(t, e) {
  var n;
  e === void 0 && (e = {});
  var s = (n = e.timeout) != null ? n : 1e3, i = Object.keys(t).map(function(a) {
    return [Cf(a), t[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var h = l[0], c = l[1], u = r.get(h) || h;
      (function(d, f) {
        return !(f[1].toUpperCase() !== d.key.toUpperCase() && f[1] !== d.code || f[0].find(function(p) {
          return !Vi(d, p);
        }) || $f.find(function(p) {
          return !f[0].includes(p) && f[1] !== p && Vi(d, p);
        }));
      })(a, u[0]) ? u.length > 1 ? r.set(h, u.slice(1)) : (r.delete(h), c(a)) : Vi(a, a.key) || r.delete(h);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Mf(t, e, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", r = Ef(e, n);
  return t.addEventListener(i, r), function() {
    t.removeEventListener(i, r);
  };
}
const Tf = (t, e) => t.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ g("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), e);
var ee, nn, sn, Jn, rn, Ms, be, $n, ai, fc, on, Zn, an, Qn, li, dc;
class Rf extends U {
  constructor() {
    super(...arguments);
    L(this, rn);
    L(this, be);
    L(this, ai);
    L(this, li);
    L(this, ee, void 0);
    L(this, nn, void 0);
    L(this, sn, void 0);
    L(this, Jn, void 0);
    L(this, on, void 0);
    L(this, Zn, void 0);
    L(this, an, void 0);
    L(this, Qn, void 0);
    this.state = { keys: "", show: !1 }, B(this, ee, 0), B(this, nn, St()), B(this, sn, St()), B(this, on, (n) => {
      y(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), B(this, Zn, ({ item: n }) => {
      this.select(n.key);
    }), B(this, an, (n) => {
      this.setState({ keys: n.target.value });
    }), B(this, Qn, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    y(document).on("click", E(this, on)), this.show(this.focus.bind(this)), B(this, Jn, Mf(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = nt(this, be, $n).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = nt(this, be, $n).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = nt(this, be, $n).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = nt(this, rn, Ms).call(this);
    n && y(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = y(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    y(document).off("click", E(this, on)), (s = E(this, Jn)) == null || s.call(this);
    const n = nt(this, rn, Ms).call(this);
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
    (n = E(this, nn).current) == null || n.focus();
  }
  hide() {
    this.state.show && (E(this, ee) && window.clearTimeout(E(this, ee)), this.setState({ show: !1 }, () => {
      B(this, ee, window.setTimeout(() => {
        var n, s;
        B(this, ee, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  select(n) {
    const s = this.props.items.find((i) => i.value === n);
    s && this.props.onSelectItem(s);
  }
  setHoverItem(n) {
    this.setState({ hover: n }, () => {
      const s = nt(this, be, $n).call(this);
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
    return /* @__PURE__ */ g(
      "div",
      {
        className: M("picker-menu menu-popup", s, { shown: c, "has-search": d }),
        id: `picker-menu-${n}`,
        style: { maxHeight: r, maxWidth: o, width: a, ...i },
        children: [
          nt(this, li, dc).call(this),
          /* @__PURE__ */ g(
            vi,
            {
              ref: E(this, sn),
              className: "picker-menu-list",
              items: nt(this, ai, fc).call(this),
              onClickItem: E(this, Zn),
              checkbox: h,
              ...l
            }
          )
        ]
      }
    );
  }
}
ee = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), Jn = new WeakMap(), rn = new WeakSet(), Ms = function() {
  var n;
  return (n = E(this, sn).current) == null ? void 0 : n.ref.current;
}, be = new WeakSet(), $n = function() {
  const n = nt(this, rn, Ms).call(this);
  if (n)
    return y(n).find(".menu-item>a.hover");
}, ai = new WeakSet(), fc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), { keys: r, hover: o } = this.state, a = r.toLowerCase().split(" ").filter((c) => c.length);
  let l = !1;
  const h = s.reduce((c, u) => {
    const {
      value: d,
      keys: f,
      text: p,
      className: m,
      ...v
    } = u;
    if (!a.length || a.every((w) => d.toLowerCase().includes(w) || (f == null ? void 0 : f.toLowerCase().includes(w)) || typeof p == "string" && p.toLowerCase().includes(w))) {
      let w = p ?? d;
      typeof w == "string" && a.length && (w = Tf(a, [w])), d === o && (l = !0), c.push({
        key: d,
        active: i.has(d),
        text: w,
        className: M(m, { hover: d === o }),
        "data-value": d,
        ...v
      });
    }
    return c;
  }, []);
  return !l && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, on = new WeakMap(), Zn = new WeakMap(), an = new WeakMap(), Qn = new WeakMap(), li = new WeakSet(), dc = function() {
  const {
    search: n,
    searchHint: s
  } = this.props, { keys: i } = this.state, r = i.trim().length;
  return n ? /* @__PURE__ */ g("div", { className: "picker-menu-search", children: [
    /* @__PURE__ */ g(
      "input",
      {
        className: "form-control picker-menu-search-input",
        type: "text",
        placeholder: s,
        value: i,
        onChange: E(this, an),
        onInput: E(this, an),
        ref: E(this, nn)
      }
    ),
    r ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: E(this, Qn), children: /* @__PURE__ */ g("span", { className: "close" }) }) : /* @__PURE__ */ g("span", { className: "magnifier" })
  ] }) : null;
};
var xo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Z = (t, e, n) => (xo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), X = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, qs = (t, e, n, s) => (xo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Nf = (t, e, n, s) => ({
  set _(i) {
    qs(t, e, i, n);
  },
  get _() {
    return Z(t, e, s);
  }
}), st = (t, e, n) => (xo(t, e, "access private method"), n), Ts, hn, js, Ot, He, Sn, Gs, ko, Rs, yr, wr, pc, $o, So, Co, Eo, Mo, gc, vr, mc, To, yc, Ns, _r;
let wc = class extends U {
  constructor(e) {
    super(e), X(this, He), X(this, Gs), X(this, Rs), X(this, wr), X(this, Mo), X(this, vr), X(this, To), X(this, Ns), X(this, Ts, 0), X(this, hn, $i()), X(this, js, St()), X(this, Ot, void 0), X(this, $o, (n) => {
      const { valueList: s } = this, i = new Set(n.map((o) => o.value)), r = s.filter((o) => !i.has(o));
      this.setValue(r);
    }), X(this, So, () => {
      requestAnimationFrame(() => this.toggle());
    }), X(this, Co, () => {
      this.close();
    }), X(this, Eo, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = Z(this, js).current) == null || s.hide();
      });
    }), this.state = {
      value: st(this, Rs, yr).call(this, e.defaultValue) ?? "",
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
    return st(this, Gs, ko).call(this, this.state.value);
  }
  componentDidMount() {
    st(this, Ns, _r).call(this, !0);
  }
  componentDidUpdate() {
    st(this, Ns, _r).call(this);
  }
  componentWillUnmount() {
    var n;
    var e;
    (n = this.props.beforeDestroy) == null || n.call(this), (e = Z(this, Ot)) == null || e.call(this), qs(this, Ot, void 0);
  }
  async loadItemList() {
    let { items: e } = this.props;
    if (typeof e == "function") {
      const s = ++Nf(this, Ts)._;
      if (await st(this, He, Sn).call(this, { loading: !0, items: [] }), e = await e(), Z(this, Ts) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(e) && this.state.items !== e && (n.items = e), this.state.loading && (n.loading = !1), Object.keys(n).length && await st(this, He, Sn).call(this, n), e;
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
    await st(this, He, Sn).call(this, { open: e }), e && this.loadItemList();
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
    await st(this, He, Sn).call(this, { value: st(this, Rs, yr).call(this, e), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
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
    } = this.props, a = r || (i ? xf : kf), l = st(this, wr, pc).call(this);
    return /* @__PURE__ */ g(
      "div",
      {
        id: `picker-${Z(this, hn)}`,
        className: M("picker", e),
        style: n,
        children: [
          /* @__PURE__ */ g(a, { ...l }),
          s,
          st(this, vr, mc).call(this),
          o ? /* @__PURE__ */ g("input", { type: "hidden", className: "picker-value", name: o, value: this.state.value }) : null
        ]
      }
    );
  }
};
Ts = /* @__PURE__ */ new WeakMap();
hn = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakSet();
Sn = function(t) {
  return new Promise((e) => {
    this.setState(t, e);
  });
};
Gs = /* @__PURE__ */ new WeakSet();
ko = function(t) {
  return typeof t == "string" ? t.length ? y.unique(t.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(t) ? y.unique(t) : [];
};
Rs = /* @__PURE__ */ new WeakSet();
yr = function(t) {
  const e = st(this, Gs, ko).call(this, t);
  return e.length ? e.join(this.props.valueSplitter ?? ",") : void 0;
};
wr = /* @__PURE__ */ new WeakSet();
pc = function() {
  const { placeholder: t, disabled: e, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: t,
    disabled: e,
    multiple: n,
    selections: this.getSelections(),
    onClick: Z(this, So),
    onDeselect: Z(this, $o)
  };
};
$o = /* @__PURE__ */ new WeakMap();
So = /* @__PURE__ */ new WeakMap();
Co = /* @__PURE__ */ new WeakMap();
Eo = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakSet();
gc = function() {
  const { search: t, menuClass: e, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: r, menuMinWidth: o, multiple: a, searchHint: l, menuCheckbox: h } = this.props, { items: c } = this.state;
  return {
    id: Z(this, hn),
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
    onRequestHide: Z(this, Co),
    onSelectItem: Z(this, Eo)
  };
};
vr = /* @__PURE__ */ new WeakSet();
mc = function() {
  const { open: t } = this.state;
  if (!t)
    return null;
  const e = y(this.props.container || "body");
  let n = e.find(".pickers-container");
  n.length || (n = y("<div>").addClass("pickers-container").appendTo(e));
  const { Menu: s = Rf } = this.props;
  return $u(/* @__PURE__ */ g(s, { ...st(this, Mo, gc).call(this), ref: Z(this, js) }), n[0]);
};
To = /* @__PURE__ */ new WeakSet();
yc = function() {
  const t = y(`#picker-${Z(this, hn)}`)[0], e = y(`#picker-menu-${Z(this, hn)}`)[0];
  if (!e || !t || !this.state.open) {
    Z(this, Ot) && (Z(this, Ot).call(this), qs(this, Ot, void 0));
    return;
  }
  Z(this, Ot) || qs(this, Ot, ao(t, e, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    ki(t, e, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? _i() : null, nr(), ro(1)].filter(Boolean)
    }).then(({ x: i, y: r }) => {
      y(e).css({ left: i, top: r, width: s === "100%" ? y(t).width() : void 0 });
    }), s === "100%" && y(e).css({ width: y(t).width() });
  }));
};
Ns = /* @__PURE__ */ new WeakSet();
_r = function(t = !1) {
  var e;
  (e = this.props.afterRender) == null || e.call(this, { firstRender: t }), st(this, To, yc).call(this);
};
wc.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class vc extends et {
}
vc.NAME = "Picker";
vc.Component = wc;
class _c extends vt {
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
    return i && s.middleware.push(_i()), r && s.middleware.push(r === !0 ? nr() : nr(r)), o && s.middleware.push(er({ element: this.$arrow[0] })), a && s.middleware.push(ro(a)), s;
  }
  createPopper() {
    const e = this.element, n = this.$target[0];
    this.cleanup = ao(e, n, () => {
      ki(e, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !er || !o.arrow)
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
_c.NAME = "Popovers";
_c.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class bc extends et {
}
bc.NAME = "Toolbar";
bc.Component = yt;
function rs(t) {
  return t.split("-")[1];
}
function Ro(t) {
  return t === "y" ? "height" : "width";
}
function Ye(t) {
  return t.split("-")[0];
}
function Ei(t) {
  return ["top", "bottom"].includes(Ye(t)) ? "x" : "y";
}
function Ta(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Ei(e), l = Ro(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Ye(e)) {
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
  switch (rs(e)) {
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
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: c, y: u } = Ta(h, s, l), d = s, f = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: v, fn: w } = a[m], { x: _, y: k, data: C, reset: S } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    c = _ ?? c, u = k ?? u, f = { ...f, [v]: { ...f[v], ...C } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : S.rects), { x: c, y: u } = Ta(h, d, l)), m = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function xc(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Ys(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Lf(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = t, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = xc(f), m = a[d ? u === "floating" ? "reference" : "floating" : u], v = Ys(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, C = Ys(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / k.y, bottom: (C.bottom - v.bottom + p.bottom) / k.y, left: (v.left - C.left + p.left) / k.x, right: (C.right - v.right + p.right) / k.x };
}
const Wf = Math.min, Pf = Math.max;
function Df(t, e, n) {
  return Pf(t, Wf(e, n));
}
const If = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: l } = e;
  if (n == null)
    return {};
  const h = xc(s), c = { x: i, y: r }, u = Ei(o), d = Ro(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", m = u === "y" ? "bottom" : "right", v = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let k = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  k === 0 && (k = a.floating[d]);
  const C = v / 2 - w / 2, S = h[p], T = k - f[d] - h[m], N = k / 2 - f[d] / 2 + C, A = Df(S, N, T), H = rs(o) != null && N != A && a.reference[d] / 2 - (N < S ? h[p] : h[m]) - f[d] / 2 < 0;
  return { [u]: c[u] - (H ? N < S ? S - N : T - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), Of = ["top", "right", "bottom", "left"];
Of.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Hf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ks(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Hf[e]);
}
function Bf(t, e, n) {
  n === void 0 && (n = !1);
  const s = rs(t), i = Ei(t), r = Ro(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = Ks(o)), { main: o, cross: Ks(o) };
}
const zf = { start: "end", end: "start" };
function qi(t) {
  return t.replace(/start|end/g, (e) => zf[e]);
}
const Ff = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...m } = t, v = Ye(s), w = Ye(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = u || (w || !p ? [Ks(o)] : function(b) {
      const R = Ks(b);
      return [qi(b), R, qi(R)];
    }(o));
    u || f === "none" || k.push(...function(b, R, D, W) {
      const I = rs(b);
      let P = function(V, Et, un) {
        const as = ["left", "right"], fn = ["right", "left"], ls = ["top", "bottom"], Wi = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return un ? Et ? fn : as : Et ? as : fn;
          case "left":
          case "right":
            return Et ? ls : Wi;
          default:
            return [];
        }
      }(Ye(b), D === "start", W);
      return I && (P = P.map((V) => V + "-" + I), R && (P = P.concat(P.map(qi)))), P;
    }(o, p, f, _));
    const C = [o, ...k], S = await Lf(e, m), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: b, cross: R } = Bf(s, r, _);
      T.push(S[b], S[R]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let D = "bottom";
      switch (d) {
        case "bestFit": {
          var H;
          const W = (H = N.map((I) => [I, I.overflows.filter((P) => P > 0).reduce((P, V) => P + V, 0)]).sort((I, P) => I[1] - P[1])[0]) == null ? void 0 : H[0].placement;
          W && (D = W);
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
}, Uf = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Ye(a), d = rs(a), f = Ei(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, m = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: k } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof k == "number" && (_ = d === "end" ? -1 * k : k), f ? { x: _ * m, y: w * p } : { x: w * p, y: _ * m };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ct(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function kt(t) {
  return ct(t).getComputedStyle(t);
}
function ce(t) {
  return $c(t) ? (t.nodeName || "").toLowerCase() : "";
}
let gs;
function kc() {
  if (gs)
    return gs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (gs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), gs) : navigator.userAgent;
}
function qt(t) {
  return t instanceof ct(t).HTMLElement;
}
function gt(t) {
  return t instanceof ct(t).Element;
}
function $c(t) {
  return t instanceof ct(t).Node;
}
function Ra(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ct(t).ShadowRoot || t instanceof ShadowRoot;
}
function Mi(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = kt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Vf(t) {
  return ["table", "td", "th"].includes(ce(t));
}
function br(t) {
  const e = /firefox/i.test(kc()), n = kt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Sc() {
  return !/^((?!chrome|android).)*safari/i.test(kc());
}
function No(t) {
  return ["html", "body", "#document"].includes(ce(t));
}
const Na = Math.min, Pn = Math.max, Xs = Math.round;
function Cc(t) {
  const e = kt(t);
  let n = parseFloat(e.width), s = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, o = Xs(n) !== i || Xs(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Ec(t) {
  return gt(t) ? t : t.contextElement;
}
const Mc = { x: 1, y: 1 };
function Ke(t) {
  const e = Ec(t);
  if (!qt(e))
    return Mc;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = Cc(e);
  let o = (r ? Xs(n.width) : n.width) / s, a = (r ? Xs(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Me(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = Ec(t);
  let l = Mc;
  e && (s ? gt(s) && (l = Ke(s)) : l = Ke(t));
  const h = a ? ct(a) : window, c = !Sc() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const m = ct(a), v = s && gt(s) ? ct(s) : s;
    let w = m.frameElement;
    for (; w && s && v !== m; ) {
      const _ = Ke(w), k = w.getBoundingClientRect(), C = getComputedStyle(w);
      k.x += (w.clientLeft + parseFloat(C.paddingLeft)) * _.x, k.y += (w.clientTop + parseFloat(C.paddingTop)) * _.y, u *= _.x, d *= _.y, f *= _.x, p *= _.y, u += k.x, d += k.y, w = ct(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function ae(t) {
  return (($c(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ti(t) {
  return gt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Tc(t) {
  return Me(ae(t)).left + Ti(t).scrollLeft;
}
function qf(t, e, n) {
  const s = qt(e), i = ae(e), r = Me(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ce(e) !== "body" || Mi(i)) && (o = Ti(e)), qt(e)) {
      const l = Me(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = Tc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Gn(t) {
  if (ce(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ra(t) ? t.host : null) || ae(t);
  return Ra(e) ? e.host : e;
}
function Aa(t) {
  return qt(t) && kt(t).position !== "fixed" ? t.offsetParent : null;
}
function La(t) {
  const e = ct(t);
  let n = Aa(t);
  for (; n && Vf(n) && kt(n).position === "static"; )
    n = Aa(n);
  return n && (ce(n) === "html" || ce(n) === "body" && kt(n).position === "static" && !br(n)) ? e : n || function(s) {
    let i = Gn(s);
    for (; qt(i) && !No(i); ) {
      if (br(i))
        return i;
      i = Gn(i);
    }
    return null;
  }(t) || e;
}
function Rc(t) {
  const e = Gn(t);
  return No(e) ? t.ownerDocument.body : qt(e) && Mi(e) ? e : Rc(e);
}
function Dn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = Rc(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ct(s);
  return i ? e.concat(r, r.visualViewport || [], Mi(s) ? s : []) : e.concat(s, Dn(s));
}
function Wa(t, e, n) {
  return e === "viewport" ? Ys(function(s, i) {
    const r = ct(s), o = ae(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = Sc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(t, n)) : gt(e) ? function(s, i) {
    const r = Me(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = qt(s) ? Ke(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = o * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(e, n) : Ys(function(s) {
    var i;
    const r = ae(s), o = Ti(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Pn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Pn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Tc(s);
    const u = -o.scrollTop;
    return kt(a || r).direction === "rtl" && (c += Pn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(ae(t)));
}
const jf = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Dn(h).filter((v) => gt(v) && ce(v) !== "body"), f = null;
    const p = kt(h).position === "fixed";
    let m = p ? Gn(h) : h;
    for (; gt(m) && !No(m); ) {
      const v = kt(m), w = br(m);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : d = d.filter((_) => _ !== m), m = Gn(m);
    }
    return c.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = Wa(e, c, i);
    return h.top = Pn(u.top, h.top), h.right = Na(u.right, h.right), h.bottom = Na(u.bottom, h.bottom), h.left = Pn(u.left, h.left), h;
  }, Wa(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = qt(n), r = ae(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ce(n) !== "body" || Mi(r)) && (o = Ti(n)), qt(n))) {
    const h = Me(n);
    a = Ke(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + l.x, y: e.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: gt, getDimensions: function(t) {
  return Cc(t);
}, getOffsetParent: La, getDocumentElement: ae, getScale: Ke, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || La, r = this.getDimensions;
  return { reference: qf(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => kt(t).direction === "rtl" };
function Gf(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...gt(t) ? Dn(t) : t.contextElement ? Dn(t.contextElement) : [], ...Dn(e)] : [];
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
  let d = a ? Me(t) : null;
  return a && function f() {
    const p = Me(t);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Yf = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: jf, ...n }, r = { ...i.platform, _c: s };
  return Af(t, e, { ...i, platform: r });
};
var Ao = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, F = (t, e, n) => (Ao(t, e, "read from private field"), n ? n.call(t) : e.get(t)), G = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Te = (t, e, n, s) => (Ao(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), xt = (t, e, n) => (Ao(t, e, "access private method"), n), In, On, Cn, Ve, rt, xr, Js, Ri, Lo, Wo, Nc, kr, Ac, Po, Lc, Do, Wc, Io, Pc, $r, Dc, Oo, Ic, Hn, Sr, Oc;
const qe = class extends vt {
  constructor() {
    super(...arguments), G(this, Ri), G(this, Wo), G(this, kr), G(this, Po), G(this, Do), G(this, Io), G(this, $r), G(this, Oo), G(this, Sr), G(this, In, !1), G(this, On, void 0), G(this, Cn, 0), G(this, Ve, void 0), G(this, rt, void 0), G(this, xr, void 0), G(this, Js, void 0), this.hideLater = () => {
      F(this, Hn).call(this), Te(this, Cn, window.setTimeout(this.hide.bind(this), 100));
    }, G(this, Hn, () => {
      clearTimeout(F(this, Cn)), Te(this, Cn, 0);
    });
  }
  get isShown() {
    var t;
    return (t = F(this, Ve)) == null ? void 0 : t.classList.contains(qe.CLASS_SHOW);
  }
  get tooltip() {
    return F(this, Ve) || xt(this, kr, Ac).call(this);
  }
  get trigger() {
    return F(this, xr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${qe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !F(this, In) && this.isHover && xt(this, Sr, Oc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(qe.CLASS_SHOW), xt(this, $r, Dc).call(this), !0;
  }
  hide() {
    var e;
    var t;
    return (t = F(this, Js)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = F(this, Ve)) == null || e.classList.remove(qe.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    F(this, In) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", F(this, Hn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t || {}, n = this.getAll().entries(), s = new Set(e || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let $t = qe;
In = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakSet();
Lo = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
};
Wo = /* @__PURE__ */ new WeakSet();
Nc = function() {
  const t = xt(this, Ri, Lo).call(this);
  return Te(this, rt, document.createElement("div")), F(this, rt).style.position = this.options.strategy, F(this, rt).style.width = `${t}px`, F(this, rt).style.height = `${t}px`, F(this, rt).style.transform = "rotate(45deg)", F(this, rt);
};
kr = /* @__PURE__ */ new WeakSet();
Ac = function() {
  var n;
  const t = qe.TOOLTIP_CLASS;
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
  if (this.options.arrow && (e == null || e.append(xt(this, Wo, Nc).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), Te(this, Ve, e), e;
};
Po = /* @__PURE__ */ new WeakSet();
Lc = function() {
  var i;
  const t = xt(this, Ri, Lo).call(this), { strategy: e, placement: n } = this.options, s = {
    middleware: [Uf(t), Ff()],
    strategy: e,
    placement: n
  };
  return this.options.arrow && F(this, rt) && ((i = s.middleware) == null || i.push(If({ element: F(this, rt) }))), s;
};
Do = /* @__PURE__ */ new WeakSet();
Wc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
Io = /* @__PURE__ */ new WeakSet();
Pc = function(t) {
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
$r = /* @__PURE__ */ new WeakSet();
Dc = function() {
  const t = xt(this, Po, Lc).call(this), e = xt(this, Oo, Ic).call(this);
  Te(this, Js, Gf(e, this.tooltip, () => {
    Yf(e, this.tooltip, t).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = xt(this, Do, Wc).call(this, o);
      if (i.arrow && F(this, rt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(F(this, rt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-F(this, rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...xt(this, Io, Pc).call(this, o)
        });
      }
    });
  }));
};
Oo = /* @__PURE__ */ new WeakSet();
Ic = function() {
  return F(this, On) || Te(this, On, {
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
  }), F(this, On);
};
Hn = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakSet();
Oc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", F(this, Hn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Te(this, In, !0);
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
document.addEventListener("click", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, $t.MENU_SELECTOR);
  if (n) {
    const i = $t.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    $t.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var i;
  const e = t.target, n = (i = e.closest) == null ? void 0 : i.call(e, $t.MENU_SELECTOR);
  if (!n)
    return;
  const s = $t.ensure(n);
  s.isHover && s.show();
});
function Kf({
  type: t,
  component: e,
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
  actions: m,
  show: v,
  level: w = 0,
  items: _,
  ...k
}) {
  const C = Array.isArray(m) ? { items: m } : m;
  return C && (C.btnProps || (C.btnProps = { size: "sm" }), C.className = M("tree-actions not-nested-toggle", C.className)), /* @__PURE__ */ g(
    "div",
    {
      className: M("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": u,
      style: Object.assign({ paddingLeft: `${w * 20}px` }, i),
      "data-level": w,
      ...r,
      ...k,
      children: [
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ g("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(Un, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        C ? /* @__PURE__ */ g(yt, { ...C }) : null,
        /* @__PURE__ */ g(Un, { icon: d, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Ho = class extends wi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(e) {
    const n = super.getNestedMenuProps(e), { collapsedIcon: s, expandedIcon: i, normalIcon: r, itemActions: o } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: r,
      itemActions: o,
      ...n
    };
  }
  getItemRenderProps(e, n, s) {
    const i = super.getItemRenderProps(e, n, s), { collapsedIcon: r, expandedIcon: o, normalIcon: a, itemActions: l } = e;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? o : r : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(n) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const e = super.beforeRender(), { hover: n } = this.props;
    return n && (e.className = M(e.className, "tree-hover")), e;
  }
};
Ho.ItemComponents = {
  item: Kf
};
Ho.NAME = "tree";
class Hc extends et {
}
Hc.NAME = "Tree";
Hc.Component = Ho;
var ts, ci, hi, ui;
class Xf extends U {
  constructor(n) {
    super(n);
    L(this, ts, St());
    L(this, ci, (n) => {
      n.stopPropagation(), dt.show({
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
    L(this, hi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, ui, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ g("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, ts).current;
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
      fetch(it(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g(xl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
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
        onDragStart: E(this, hi),
        onDragEnd: E(this, ui),
        "data-id": c,
        ref: E(this, ts),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, ci), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
ts = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), ui = new WeakMap();
var Bc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Bt = (t, e, n) => (Bc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ft = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, wt = (t, e, n) => (Bc(t, e, "access private method"), n), jt, Bo, zc, zo, Fc, Cr, Uc, Fo, Vc, Zs, Er, Ni, Mr, Uo, qc, Tr, Rr, Ai, Vo;
const qo = class extends U {
  constructor() {
    super(...arguments), ft(this, Bo), ft(this, zo), ft(this, Cr), ft(this, Fo), ft(this, Zs), ft(this, Ni), ft(this, Uo), ft(this, jt, /* @__PURE__ */ new Map()), this.state = {}, ft(this, Tr, (t) => {
      var n;
      const e = (n = t.dataTransfer) == null ? void 0 : n.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), ft(this, Rr, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = wt(this, Cr, Uc).call(this), { cellHeight: n, grid: s } = this.props, i = Bt(this, jt);
    return console.log("Dashboard.render", { blocks: t, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: e * n }, children: t.map((r, o) => {
      const { id: a } = r, [l, h, c, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ g(
        Xf,
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
let jo = qo;
jt = /* @__PURE__ */ new WeakMap();
Bo = /* @__PURE__ */ new WeakSet();
zc = function(t) {
  const { blockDefaultSize: e, blockSizeMap: n } = this.props;
  return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
};
zo = /* @__PURE__ */ new WeakSet();
Fc = function() {
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
    } = i, [d, f] = wt(this, Bo, zc).call(this, o);
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
Uc = function() {
  Bt(this, jt).clear();
  let t = 0;
  const e = wt(this, zo, Fc).call(this);
  return e.forEach((n) => {
    wt(this, Fo, Vc).call(this, n);
    const [, s, , i] = Bt(this, jt).get(n.id);
    t = Math.max(t, s + i);
  }), { blocks: e, height: t };
};
Fo = /* @__PURE__ */ new WeakSet();
Vc = function(t) {
  const e = Bt(this, jt), { id: n, left: s, top: i, width: r, height: o } = t;
  if (s < 0 || i < 0) {
    const [a, l] = wt(this, Uo, qc).call(this, r, o, s, i);
    e.set(n, [a, l, r, o]);
  } else
    wt(this, Ni, Mr).call(this, n, [s, i, r, o]);
};
Zs = /* @__PURE__ */ new WeakSet();
Er = function(t) {
  var e;
  const { dragging: n } = this.state;
  for (const [s, i] of Bt(this, jt).entries())
    if (s !== n && wt(e = qo, Ai, Vo).call(e, i, t))
      return !1;
  return !0;
};
Ni = /* @__PURE__ */ new WeakSet();
Mr = function(t, e) {
  var n;
  Bt(this, jt).set(t, e);
  for (const [s, i] of Bt(this, jt).entries())
    s !== t && wt(n = qo, Ai, Vo).call(n, i, e) && (i[1] = e[1] + e[3], wt(this, Ni, Mr).call(this, s, i));
};
Uo = /* @__PURE__ */ new WeakSet();
qc = function(t, e, n, s) {
  if (n >= 0 && s >= 0) {
    if (wt(this, Zs, Er).call(this, [n, s, t, e]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (wt(this, Zs, Er).call(this, [i, r, t, e])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + t > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Tr = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakSet();
Vo = function([t, e, n, s], [i, r, o, a]) {
  return !(t + n <= i || i + o <= t || e + s <= r || r + a <= e);
};
ft(jo, Ai);
jo.defaultProps = {
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
class jc extends et {
}
jc.NAME = "Dashboard";
jc.Component = jo;
var ne, se;
class Pa extends U {
  constructor(n) {
    super(n);
    L(this, ne, void 0);
    L(this, se, void 0);
    B(this, ne, 0), B(this, se, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (E(this, ne) && cancelAnimationFrame(E(this, ne)), B(this, ne, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, ne, 0);
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
    n && (B(this, se, typeof n == "string" ? document : n.current), E(this, se).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, se) && E(this, se).removeEventListener("wheel", this._handleWheel);
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
    }, m = {};
    return s === "horz" ? (p.height = i, p.width = n, m.width = this.barSize, m.left = Math.round(Math.min(u, d) * (n - m.width) / u)) : (p.width = i, p.height = n, m.height = this.barSize, m.top = Math.round(Math.min(u, d) * (n - m.height) / u)), /* @__PURE__ */ g(
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
            style: m,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
ne = new WeakMap(), se = new WeakMap();
function Gc({ col: t, className: e, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var H;
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
  }], m = ["dtable-cell-content", t.setting.cellClass], v = (H = s.data) == null ? void 0 : H[t.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: t, value: v }, q) : w, k = [], C = [], S = {}, T = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Q(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? k : C;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : m).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : T, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      C.push(b);
  });
  const A = N;
  return /* @__PURE__ */ g(
    "div",
    {
      className: M(p),
      style: c,
      "data-col": t.name,
      "data-type": t.type,
      ...h,
      ...S,
      children: [
        C.length > 0 && /* @__PURE__ */ g(A, { className: M(m), style: f, ...T, children: C }),
        k
      ]
    }
  );
}
function ji({ row: t, className: e, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Gc, onRenderCell: l }) {
  return /* @__PURE__ */ g("div", { className: M("dtable-cells", e), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ g(
    a,
    {
      col: h,
      row: t,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function Yc({
  row: t,
  className: e,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = Gc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ g(
    ji,
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
  r.list.length && (f = /* @__PURE__ */ g(
    ji,
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
  o.list.length && (p = /* @__PURE__ */ g(
    ji,
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
  const m = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ g(
    "div",
    {
      className: M("dtable-row", e),
      style: m,
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
function Jf({ height: t, onRenderRow: e, ...n }) {
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
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ g(Yc, { ...s }) });
}
function Zf({
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
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ g("div", { className: M("dtable-rows", t), style: e, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ g(Yc, { ...c }, h.id);
  }) });
}
const Qs = /* @__PURE__ */ new Map(), ti = [];
function Kc(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && Qs.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Qs.set(n, t), e != null && e.buildIn && !ti.includes(n) && ti.push(n);
}
function fe(t, e) {
  Kc(t, e);
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
function Xc(t) {
  return Qs.delete(t);
}
function Qf(t) {
  if (typeof t == "string") {
    const e = Qs.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Jc(t, e, n) {
  return e.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Qf(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Jc(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function td(t = [], e = !0) {
  return e && ti.length && t.unshift(...ti), t != null && t.length ? Jc([], t, /* @__PURE__ */ new Set()) : [];
}
function Zc() {
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
function ed(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Da(t, e) {
  return typeof t == "string" && (t = t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)), typeof e == "number" && (typeof t != "number" || isNaN(t)) && (t = e), t;
}
function Gi(t, e = !1) {
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
function nd(t, e, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (_) => (typeof _ == "function" && (_ = _.call(t)), _ = Da(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
  let m = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: k, onAddCol: C } = _;
    k && Object.entries(k).forEach(([S, T]) => {
      w[S] || (w[S] = []), w[S].push(T);
    }), C && v.push(C);
  }), e.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: k = "", name: C } = _, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: k
    }, T = {
      name: C,
      type: k,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[k];
    N && N.forEach((I) => {
      const P = typeof I == "function" ? I.call(t, S) : I;
      P && Object.assign(S, P, _);
    });
    const { fixed: A, flex: H, minWidth: b = r, maxWidth: R = o } = S, D = Da(S.width || i, i);
    T.flex = H === !0 ? 1 : typeof H == "number" ? H : 0, T.width = ed(D < 1 ? Math.round(D * s) : D, b, R), v.forEach((I) => I.call(t, T)), f.push(T), p[T.name] = T;
    const W = A ? A === "left" ? u : d : c;
    W.list.push(T), W.totalWidth += T.width, W.width = W.totalWidth, T.flex && W.flexList.push(T), typeof S.order == "number" && (m = !0);
  }), m) {
    const _ = (k, C) => (k.setting.order ?? 0) - (C.setting.order ?? 0);
    f.sort(_), u.list.sort(_), c.list.sort(_), d.list.sort(_);
  }
  return Gi(u, !0), Gi(d, !0), c.widthSetting = s - u.width - d.width, Gi(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var Go = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, $ = (t, e, n) => (Go(t, e, "read from private field"), n ? n.call(t) : e.get(t)), O = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Y = (t, e, n, s) => (Go(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Lt = (t, e, n) => (Go(t, e, "access private method"), n), Be, En, Se, Ht, _e, J, Pt, At, Mn, As, ei, Zt, Tn, Rn, Nr, Qc, Ar, th, Lr, eh, Wr, nh, Ls, Pr, Yo, Ko, Li, ni, Dr, Ir, Xo, sh, Jo, ih, Or, rh;
let Zo = class extends U {
  constructor(e) {
    super(e), O(this, Nr), O(this, Ar), O(this, Lr), O(this, Wr), O(this, Ls), O(this, Xo), O(this, Jo), O(this, Or), this.ref = St(), O(this, Be, 0), O(this, En, void 0), O(this, Se, !1), O(this, Ht, void 0), O(this, _e, void 0), O(this, J, []), O(this, Pt, void 0), O(this, At, /* @__PURE__ */ new Map()), O(this, Mn, {}), O(this, As, void 0), O(this, ei, []), this.updateLayout = () => {
      $(this, Be) && cancelAnimationFrame($(this, Be)), Y(this, Be, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Be, 0);
      }));
    }, O(this, Zt, (n, s) => {
      s = s || n.type;
      const i = $(this, At).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), O(this, Tn, (n) => {
      $(this, Zt).call(this, n, `window_${n.type}`);
    }), O(this, Rn, (n) => {
      $(this, Zt).call(this, n, `document_${n.type}`);
    }), O(this, Yo, (n, s) => {
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
    }), O(this, Ko, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), $(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), O(this, Li, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return $(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), O(this, ni, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), O(this, Dr, (n) => {
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
    }), O(this, Ir, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, En, e.id ?? `dtable-${$i(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, _e, Object.freeze(td(e.plugins))), $(this, _e).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign($(this, Mn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var e;
    return ((e = $(this, Pt)) == null ? void 0 : e.options) || $(this, Ht) || Zc();
  }
  get plugins() {
    return $(this, J);
  }
  get layout() {
    return $(this, Pt);
  }
  get id() {
    return $(this, En);
  }
  get data() {
    return $(this, Mn);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ht, void 0);
  }
  componentDidMount() {
    if ($(this, Se) ? this.forceUpdate() : Lt(this, Ls, Pr).call(this), $(this, J).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", $(this, Dr)), this.on("keydown", $(this, Ir)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), Y(this, As, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    $(this, J).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    $(this, Se) ? Lt(this, Ls, Pr).call(this) : $(this, J).forEach((e) => {
      var n;
      (n = e.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = $(this, As)) == null || n.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const s of $(this, At).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), $(this, Tn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), $(this, Rn)) : e.removeEventListener(s, $(this, Zt));
    $(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), $(this, _e).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Mn, {}), $(this, At).clear();
  }
  on(e, n, s) {
    var r;
    s && (e = `${s}_${e}`);
    const i = $(this, At).get(e);
    i ? i.push(n) : ($(this, At).set(e, [n]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), $(this, Tn)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), $(this, Rn)) : (r = this.ref.current) == null || r.addEventListener(e, $(this, Zt)));
  }
  off(e, n, s) {
    var o;
    s && (e = `${s}_${e}`);
    const i = $(this, At).get(e);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || ($(this, At).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), $(this, Tn)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), $(this, Rn)) : (o = this.ref.current) == null || o.removeEventListener(e, $(this, Zt)));
  }
  emitCustomEvent(e, n) {
    $(this, Zt).call(this, n instanceof Event ? n : new CustomEvent(e, { detail: n }), e);
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
      const { offsetLeft: p, offsetTop: m } = e;
      typeof p == "number" && (u = s + p), typeof m == "number" && (u = i + m);
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
    if (!$(this, Ht))
      return;
    typeof e == "function" && (n = e, e = {});
    const { dirtyType: s, state: i } = e;
    if (s === "layout")
      Y(this, Pt, void 0);
    else if (s === "options") {
      if (Y(this, Ht, void 0), !$(this, Pt))
        return;
      Y(this, Pt, void 0);
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
    return Ut($(this, ei), e, n, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.name === e);
  }
  render() {
    const e = Lt(this, Or, rh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": l
    }], u = [];
    return e && (u.push(
      Lt(this, Nr, Qc).call(this, e),
      Lt(this, Ar, th).call(this, e),
      Lt(this, Lr, eh).call(this, e),
      Lt(this, Wr, nh).call(this, e)
    ), $(this, J).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, e);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: $(this, En),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Be = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
_e = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
Zt = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakSet();
Qc = function(t) {
  const { header: e, cols: n, headerHeight: s, scrollLeft: i } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ g(
      Jf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: $(this, Li),
        onRenderRow: $(this, Ko)
      },
      "header"
    );
  const r = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ g(
    no,
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
Ar = /* @__PURE__ */ new WeakSet();
th = function(t) {
  const { headerHeight: e, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = t;
  return /* @__PURE__ */ g(
    Zf,
    {
      top: e,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: $(this, Li),
      onRenderRow: $(this, Yo)
    },
    "rows"
  );
};
Lr = /* @__PURE__ */ new WeakSet();
eh = function(t) {
  let { footer: e } = t;
  if (typeof e == "function" && (e = e.call(this, t)), !e)
    return null;
  const n = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ g(
    no,
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
nh = function(t) {
  const e = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h } = t, { scrollbarSize: c = 12, horzScrollbarPos: u } = this.options;
  return r > i && e.push(
    /* @__PURE__ */ g(
      Pa,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: $(this, ni),
        left: s,
        bottom: (u === "inside" ? 0 : -c) + h,
        size: c,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), l > a && e.push(
    /* @__PURE__ */ g(
      Pa,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: $(this, ni),
        right: 0,
        size: c,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
};
Ls = /* @__PURE__ */ new WeakSet();
Pr = function() {
  var t;
  Y(this, Se, !1), (t = this.options.afterRender) == null || t.call(this), $(this, J).forEach((e) => {
    var n;
    return (n = e.afterRender) == null ? void 0 : n.call(this);
  });
};
Yo = /* @__PURE__ */ new WeakMap();
Ko = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
Xo = /* @__PURE__ */ new WeakSet();
sh = function() {
  if ($(this, Ht))
    return !1;
  const e = { ...Zc(), ...$(this, _e).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, $(this, _e).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = e;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, e) : r)), (!i || i(o)) && (o !== e && Object.assign(e, o), n.push(s)), n;
  }, [])), Y(this, Ht, e), Y(this, ei, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Jo = /* @__PURE__ */ new WeakSet();
ih = function() {
  var A, H;
  const { plugins: t } = this;
  let e = $(this, Ht);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((b) => {
    var D;
    const R = (D = b.beforeLayout) == null ? void 0 : D.call(this, e);
    R && (e = { ...e, ...R }), Object.assign(n, b.footer);
  });
  let s = e.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Se, !0);
      return;
    }
  }
  const r = nd(this, e, t, i), { data: o, rowKey: a = "id", rowHeight: l } = e, h = [], c = (b, R, D) => {
    var I, P;
    const W = { data: D ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (D || (W.lazy = !0), h.push(W), ((I = e.onAddRow) == null ? void 0 : I.call(this, W, R)) !== !1) {
      for (const V of t)
        if (((P = V.onAddRow) == null ? void 0 : P.call(this, W, R)) === !1)
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
  const { header: f, footer: p } = e, m = f ? e.headerHeight || l : 0, v = p ? e.footerHeight || l : 0;
  let w = e.height, _ = 0;
  const k = u.length * l, C = m + v + k;
  if (typeof w == "function" && (w = w.call(this, C)), w === "auto")
    _ = C;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, C));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, Se, !0);
      return;
    }
  } else
    _ = w;
  const S = _ - m - v, T = {
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
    headerHeight: m,
    footerHeight: v,
    cols: r
  }, N = (H = e.onLayout) == null ? void 0 : H.call(this, T);
  N && Object.assign(T, N), t.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, T);
      R && Object.assign(T, R);
    }
  }), Y(this, Pt, T);
};
Or = /* @__PURE__ */ new WeakSet();
rh = function() {
  (Lt(this, Xo, sh).call(this) || !$(this, Pt)) && Lt(this, Jo, ih).call(this);
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
    const m = o[p];
    m.lazy && f && (m.data = f([m.id])[0], m.lazy = !1), d.push(m);
  }
  return t.visibleRows = d, t.scrollTop = l, t.scrollLeft = n, t;
};
Zo.addPlugin = Kc;
Zo.removePlugin = Xc;
function Ia(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(s));
}
const sd = {
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
      Ia(this, s);
    },
    mouseleave() {
      Ia(this, !1);
    }
  }
}, id = fe(sd, { buildIn: !0 });
function rd(t, e) {
  var o, a;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, r = (l, h) => {
    i && !i.call(this, l) || !!n[l] === h || (h ? n[l] = !0 : delete n[l], s[l] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !oh.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: l }) => {
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
function od(t) {
  return this.state.checkedRows[t] ?? !1;
}
function oh() {
  var s, i;
  const t = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!t)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : e === t;
}
function ad() {
  return Object.keys(this.state.checkedRows);
}
function ld(t) {
  const { checkable: e } = this.options;
  t === void 0 && (t = !e), e !== t && this.setState({ forceCheckable: t });
}
function Oa(t) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${t ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const cd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Oa
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
    toggleCheckRows: rd,
    isRowChecked: od,
    isAllRowChecked: oh,
    getChecks: ad,
    toggleCheckable: ld
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Oa(t) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ g("div", { children: r.join(", ") })
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
      return { className: M(t.className, "is-checked") };
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
}, hd = fe(cd);
var ah = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(ah || {});
function si(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const o = si.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? si.call(this, e.parent).level + 1 : 0, e;
}
function ud(t) {
  return t !== void 0 ? si.call(this, t) : this.data.nestedMap;
}
function fd(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !lh.call(this)), e) {
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
function lh() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function ch(t, e = 0, n, s = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const o = t.get(r);
    o && (o.level === s && (o.order = e++), (i = o.children) != null && i.length && (e = ch(t, e, o.children, s + 1)));
  }
  return e;
}
function hh(t, e, n, s) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, hh(t, r, n, s);
  }), i;
}
function uh(t, e, n, s, i) {
  var a;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[e] = n), r.parent && uh(t, r.parent, n, s, i);
}
const dd = {
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
        const o = hh(this, i, r, s);
        o != null && o.parent && uh(this, o.parent, r, s, n);
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
    getNestedInfo: ud,
    toggleRow: fd,
    isAllCollapsed: lh,
    getNestedRowInfo: si
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
    ), ch(this.data.nestedMap), t.sort((e, n) => {
      const s = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = e.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && t.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, e, i)) ?? /* @__PURE__ */ g("a", { role: "button", className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: s } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ g("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: M(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = M(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
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
}, pd = fe(dd);
function fh(t, e, n, s) {
  if (typeof t == "function" && (t = t(e)), typeof t == "string" && t.length && (t = { url: t }), !t)
    return n;
  const { url: i, ...r } = t, { setting: o } = e.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: it(i, e.row.data), ...s, ...r, ...a, children: n });
}
function Qo(t, e, n) {
  var s;
  if (t != null)
    return n = n ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof t == "function" ? t(n, e) : it(t, n);
}
function dh(t, e, n, s) {
  var i;
  return n = n ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), t === !1 ? n : (t === !0 && (t = "[yyyy-]MM-dd hh:mm"), typeof t == "function" && (t = t(n, e)), mr(n, t, s ?? n));
}
function ph(t, e) {
  const { link: n } = e.col.setting, s = fh(n, e, t[0]);
  return s && (t[0] = s), t;
}
function gh(t, e) {
  const { format: n } = e.col.setting;
  return n && (t[0] = Qo(n, e, t[0])), t;
}
function mh(t, e) {
  const { map: n } = e.col.setting;
  return typeof n == "function" ? t[0] = n(t[0], e) : typeof n == "object" && n && (t[0] = n[t[0]] ?? t[0]), t;
}
function yh(t, e, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = e.col.setting;
  return t[0] = dh(s, e, t[0], i), t;
}
function Hr(t, e, n = !1) {
  const { html: s = n } = e.col.setting;
  if (s === !1)
    return t;
  const i = t[0], r = s === !0 ? i : Qo(s, e, i);
  return t[0] = {
    html: r
  }, t;
}
const gd = {
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
        return t[0] = /* @__PURE__ */ g("svg", { width: n, height: n, children: [
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ g("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (t = yh(t, e, n)), t = mh(t, e), t = gh(t, e), s ? t = Hr(t, e) : t = ph(t, e), i) {
      let r = t[0];
      typeof i == "function" ? r = i.call(this, e) : typeof i == "string" && (r = it(i, e.row.data)), t.push({ attrs: { title: r } });
    }
    return t;
  }
}, md = fe(gd, { buildIn: !0 });
function Yi(t, { row: e, col: n }) {
  const { data: s } = e, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return t;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || t[0], u = {
    size: "xs",
    className: M(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (t[0] = /* @__PURE__ */ g(Ql, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, e) : d;
    t[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      t[0],
      /* @__PURE__ */ g("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (t[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      t[0],
      /* @__PURE__ */ g("span", { children: c })
    ] }));
  return t;
}
const yd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Yi
    },
    avatarBtn: {
      onRenderCell: Yi
    },
    avatarName: {
      onRenderCell: Yi
    }
  }
}, wd = fe(yd, { buildIn: !0 }), vd = {
  name: "sort-type",
  onRenderHeaderCell(t, e) {
    const { col: n } = e, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      t.push(
        /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        t[0] = /* @__PURE__ */ g("a", { href: it(a, { ...n.setting, sortType: o }), ...l, children: t[0] });
      }
    }
    return t;
  }
}, _d = fe(vd, { buildIn: !0 }), Ki = (t) => {
  t.length !== 1 && t.forEach((e, n) => {
    !n || e.setting.border || e.setting.group === t[n - 1].setting.group || (e.setting.border = "left");
  });
}, bd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (t) => !!t.groupDivider,
  onLayout(t) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = t;
    Ki(e.left.list), Ki(e.center.list), Ki(e.right.list);
  }
}, xd = fe(bd), kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ah,
  avatar: wd,
  checkable: hd,
  colHover: id,
  group: xd,
  nested: pd,
  renderDatetime: dh,
  renderDatetimeCell: yh,
  renderFormat: Qo,
  renderFormatCell: gh,
  renderHtmlCell: Hr,
  renderLink: fh,
  renderLinkCell: ph,
  renderMapCell: mh,
  rich: md,
  sortType: _d
}, Symbol.toStringTag, { value: "Module" }));
class os extends et {
}
os.NAME = "DTable";
os.Component = Zo;
os.definePlugin = fe;
os.removePlugin = Xc;
os.plugins = kd;
var wh = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ha = (t, e, n) => (wh(t, e, "read from private field"), n ? n.call(t) : e.get(t)), $d = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ba = (t, e, n, s) => (wh(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ze;
const Sd = "nav", Br = '[data-toggle="tab"]', Cd = "active";
class vh extends vt {
  constructor() {
    super(...arguments), $d(this, ze, 0);
  }
  active(e) {
    const n = this.$element, s = n.find(Br);
    let i = e ? y(e).first() : s.filter(`.${Cd}`);
    if (!i.length && (i = n.find(Br).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = y(r);
    o.length && (o.parent().children(".tab-pane").removeClass("active in"), o.addClass("active"), Ha(this, ze) && clearTimeout(Ha(this, ze)), Ba(this, ze, setTimeout(() => {
      o.addClass("in"), Ba(this, ze, 0);
    }, 10)));
  }
}
ze = /* @__PURE__ */ new WeakMap();
vh.NAME = "Tabs";
y(document).on("click.tabs.zui", Br, (t) => {
  t.preventDefault();
  const e = y(t.target), n = e.closest(`.${Sd}`);
  n.length && vh.ensure(n).active(e);
});
y(() => {
  y(".disabled, [disabled]").on("click", (t) => {
    t.preventDefault(), t.stopImmediatePropagation();
  });
});
export {
  y as $,
  Cl as ActionMenu,
  Ml as ActionMenuNested,
  tc as Avatar,
  ec as BtnGroup,
  vt as Component,
  et as ComponentFromReact,
  dt as ContextMenu,
  no as CustomRender,
  os as DTable,
  jc as Dashboard,
  oe as Dropdown,
  Zl as EventBus,
  vu as HElement,
  xl as HtmlContent,
  Un as Icon,
  Tl as Menu,
  po as Messager,
  wo as Modal,
  Yt as ModalBase,
  ac as ModalTrigger,
  cc as Nav,
  hc as Pager,
  vc as Picker,
  _c as Popovers,
  Xl as ProgressCircle,
  U as ReactComponent,
  Jl as Switch,
  Wt as TIME_DAY,
  vh as Tabs,
  bc as Toolbar,
  $t as Tooltip,
  Hc as Tree,
  Ma as calculateTimestamp,
  y as cash,
  M as classes,
  Td as convertBytes,
  lt as createDate,
  $u as createPortal,
  St as createRef,
  cu as deepGet,
  lu as deepGetPath,
  Rd as dom,
  Md as formatBytes,
  mr as formatDate,
  Gd as formatDateSpan,
  it as formatString,
  ol as getClassList,
  Yd as getTimeBeforeDesc,
  q as h,
  Nd as hh,
  wu as htm,
  Ut as i18n,
  jd as isDBY,
  is as isSameDay,
  yf as isSameMonth,
  Fd as isSameWeek,
  gr as isSameYear,
  Ud as isToday,
  qd as isTomorrow,
  Q as isValidElement,
  Vd as isYesterday,
  ka as nativeEvents,
  Fn as render,
  bu as renderCustomResult,
  ef as store,
  al as storeData,
  du as takeData
};
//# sourceMappingURL=zui.js.map
