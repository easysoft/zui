var cn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var it = (s, t, e) => (cn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), at = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, gt = (s, t, e, n) => (cn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var hn = (s, t, e) => (cn(s, t, "access private method"), e);
const yu = "3.0.0-alpha.4", vu = 1716381242354, Lt = document, bs = window, Tr = Lt.documentElement, ce = Lt.createElement.bind(Lt), Nr = ce("div"), un = ce("table"), Ra = ce("tbody"), Ui = ce("tr"), { isArray: js, prototype: Er } = Array, { concat: Da, filter: Yn, indexOf: $r, map: Mr, push: La, slice: Ar, some: Jn, splice: za } = Er, Fa = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Oa = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ha = /<.+>/, Wa = /^\w+$/;
function Zn(s, t) {
  const e = ja(t);
  return !s || !e && !oe(t) && !Y(t) ? [] : !e && Oa.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Wa.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class Bs {
  constructor(t, e) {
    if (!t)
      return;
    if (Sn(t))
      return t;
    let n = t;
    if (et(t)) {
      const i = e || Lt;
      if (n = Fa.test(t) && oe(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ha.test(t) ? Rr(t) : Sn(i) ? i.find(t) : et(i) ? d(i).find(t) : Zn(t, i), !n)
        return;
    } else if (he(t))
      return this.ready(t);
    (n.nodeType || n === bs) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new Bs(t, e);
  }
}
const C = Bs.prototype, d = C.init;
d.fn = d.prototype = C;
C.length = 0;
C.splice = za;
typeof Symbol == "function" && (C[Symbol.iterator] = Er[Symbol.iterator]);
function Sn(s) {
  return s instanceof Bs;
}
function be(s) {
  return !!s && s === s.window;
}
function oe(s) {
  return !!s && s.nodeType === 9;
}
function ja(s) {
  return !!s && s.nodeType === 11;
}
function Y(s) {
  return !!s && s.nodeType === 1;
}
function Ba(s) {
  return !!s && s.nodeType === 3;
}
function Va(s) {
  return typeof s == "boolean";
}
function he(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function ft(s) {
  return s === void 0;
}
function We(s) {
  return s === null;
}
function Ir(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Xn(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
d.isWindow = be;
d.isFunction = he;
d.isArray = js;
d.isNumeric = Ir;
d.isPlainObject = Xn;
function Z(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Xn(s)) {
    const n = Object.keys(s);
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i];
      if (t.call(s[o], o, s[o]) === !1)
        return s;
    }
  } else
    for (let n = 0, i = s.length; n < i; n++)
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  return s;
}
d.each = Z;
C.each = function(s) {
  return Z(this, s);
};
C.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function ws(...s) {
  const t = Va(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return ws(t, d, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (js(r[o]) || Xn(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), ws(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
d.extend = ws;
C.extend = function(s) {
  return ws(C, s);
};
const Ua = /\S+/g;
function Vs(s) {
  return et(s) ? s.match(Ua) || [] : [];
}
C.toggleClass = function(s, t) {
  const e = Vs(s), n = !ft(t);
  return this.each((i, r) => {
    Y(r) && Z(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(s) {
  return this.toggleClass(s, !0);
};
C.removeAttr = function(s) {
  const t = Vs(s);
  return this.each((e, n) => {
    Y(n) && Z(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Ka(s, t) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return We(e) ? void 0 : e;
      }
      return ft(t) ? this : We(t) ? this.removeAttr(s) : this.each((e, n) => {
        Y(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
C.attr = Ka;
C.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
C.hasClass = function(s) {
  return !!s && Jn.call(this, (t) => Y(t) && t.classList.contains(s));
};
C.get = function(s) {
  return ft(s) ? Ar.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
C.eq = function(s) {
  return d(this.get(s));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function qa(s) {
  return ft(s) ? this.get().map((t) => Y(t) || Ba(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Y(e) && (e.textContent = s);
  });
}
C.text = qa;
function zt(s, t, e) {
  if (!Y(s))
    return;
  const n = bs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function xt(s, t) {
  return parseInt(zt(s, t), 10) || 0;
}
function Ki(s, t) {
  return xt(s, `border${t ? "Left" : "Top"}Width`) + xt(s, `padding${t ? "Left" : "Top"}`) + xt(s, `padding${t ? "Right" : "Bottom"}`) + xt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const dn = {};
function Ga(s) {
  if (dn[s])
    return dn[s];
  const t = ce(s);
  Lt.body.insertBefore(t, null);
  const e = zt(t, "display");
  return Lt.body.removeChild(t), dn[s] = e !== "none" ? e : "block";
}
function qi(s) {
  return zt(s, "display") === "none";
}
function Pr(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function Us(s) {
  return et(s) ? (t, e) => Pr(e, s) : he(s) ? s : Sn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
C.filter = function(s) {
  const t = Us(s);
  return d(Yn.call(this, (e, n) => t.call(e, n, e)));
};
function Qt(s, t) {
  return t ? s.filter(t) : s;
}
C.detach = function(s) {
  return Qt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Ya = /^\s*<(\w+)[^>]*>/, Ja = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Gi = {
  "*": Nr,
  tr: Ra,
  td: Ui,
  th: Ui,
  thead: un,
  tbody: un,
  tfoot: un
};
function Rr(s) {
  if (!et(s))
    return [];
  if (Ja.test(s))
    return [ce(RegExp.$1)];
  const t = Ya.test(s) && RegExp.$1, e = Gi[t] || Gi["*"];
  return e.innerHTML = s, d(e.childNodes).detach().get();
}
d.parseHTML = Rr;
C.has = function(s) {
  const t = et(s) ? (e, n) => Zn(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
C.not = function(s) {
  const t = Us(s);
  return this.filter((e, n) => (!et(s) || Y(n)) && !t.call(n, e, n));
};
function Ot(s, t, e, n) {
  const i = [], r = he(t), o = n && Us(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && La.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Dr(s) {
  return s.multiple && s.options ? Ot(Yn.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Za(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Br.test(e.type)) {
      const i = js(s) ? Mr.call(s, String) : We(s) ? [] : [String(s)];
      n ? Z(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ft(s) || We(s) ? "" : s;
  }) : this[0] && Dr(this[0]);
}
C.val = Za;
C.is = function(s) {
  const t = Us(s);
  return Jn.call(this, (e, n) => t.call(e, n, e));
};
d.guid = 1;
function Et(s) {
  return s.length > 1 ? Yn.call(s, (t, e, n) => $r.call(n, t) === e) : s;
}
d.unique = Et;
C.add = function(s, t) {
  return d(Et(this.get().concat(d(s, t).get())));
};
C.children = function(s) {
  return Qt(d(Et(Ot(this, (t) => t.children))), s);
};
C.parent = function(s) {
  return Qt(d(Et(Ot(this, "parentNode"))), s);
};
C.index = function(s) {
  const t = s ? d(s)[0] : this[0], e = s ? this : d(t).parent().children();
  return $r.call(e, t);
};
C.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
C.siblings = function(s) {
  return Qt(d(Et(Ot(this, (t) => d(t).parent().children().not(t)))), s);
};
C.find = function(s) {
  return d(Et(Ot(this, (t) => Zn(s, t))));
};
const Xa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qa = /^$|^module$|\/(java|ecma)script/i, tl = ["type", "src", "nonce", "noModule"];
function el(s, t) {
  const e = d(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Qa.test(i.type) && Tr.contains(i)) {
      const r = ce("script");
      r.text = i.textContent.replace(Xa, ""), Z(tl, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function sl(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && el(t, s.ownerDocument);
}
function te(s, t, e, n, i, r, o, a) {
  return Z(s, (l, c) => {
    Z(d(c), (u, h) => {
      Z(d(t), (p, f) => {
        const g = e ? h : f, _ = e ? f : h, y = e ? u : p;
        sl(g, y ? _.cloneNode(!0) : _, n, i, !y);
      }, a);
    }, o);
  }, r), t;
}
C.after = function() {
  return te(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return te(arguments, this, !1, !1, !0);
};
function nl(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ft(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    Y(n) && (t ? d(n).empty().append(s) : n.innerHTML = s);
  });
}
C.html = nl;
C.appendTo = function(s) {
  return te(arguments, this, !0, !1, !0);
};
C.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = d(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
C.before = function() {
  return te(arguments, this, !1, !0);
};
C.wrapAll = function(s) {
  let t = d(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
C.wrap = function(s) {
  return this.each((t, e) => {
    const n = d(s)[0];
    d(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
C.insertAfter = function(s) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(s) {
  return te(arguments, this, !0, !0);
};
C.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(s) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return d(Et(Ot(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
C.next = function(s, t, e) {
  return Qt(d(Et(Ot(this, "nextElementSibling", t, e))), s);
};
C.nextAll = function(s) {
  return this.next(s, !0);
};
C.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
C.parents = function(s, t) {
  return Qt(d(Et(Ot(this, "parentElement", !0, t))), s);
};
C.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
C.prev = function(s, t, e) {
  return Qt(d(Et(Ot(this, "previousElementSibling", t, e))), s);
};
C.prevAll = function(s) {
  return this.prev(s, !0);
};
C.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
C.map = function(s) {
  return d(Da.apply([], Mr.call(this, (t, e) => s.call(t, e, t))));
};
C.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && zt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Tr;
  });
};
C.slice = function(s, t) {
  return d(Ar.call(this, s, t));
};
const il = /-([a-z])/g;
function Qn(s) {
  return s.replace(il, (t, e) => e.toUpperCase());
}
C.ready = function(s) {
  const t = () => setTimeout(s, 0, d);
  return Lt.readyState !== "loading" ? t() : Lt.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = d(t);
    e.replaceWith(e.children());
  }), this;
};
C.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + bs.pageYOffset,
    left: t.left + bs.pageXOffset
  };
};
C.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = zt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && Y(i)) {
      const r = d(i).offset();
      e.top -= r.top + xt(i, "borderTopWidth"), e.left -= r.left + xt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - xt(s, "marginTop"),
    left: e.left - xt(s, "marginLeft")
  };
};
const Lr = {
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
C.prop = function(s, t) {
  if (s) {
    if (et(s))
      return s = Lr[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
C.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Lr[s] || s];
  });
};
const rl = /^--/;
function ti(s) {
  return rl.test(s);
}
const fn = {}, { style: ol } = Nr, al = ["webkit", "moz", "ms"];
function ll(s, t = ti(s)) {
  if (t)
    return s;
  if (!fn[s]) {
    const e = Qn(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${al.join(`${n} `)}${n}`.split(" ");
    Z(i, (r, o) => {
      if (o in ol)
        return fn[s] = o, !1;
    });
  }
  return fn[s];
}
const cl = {
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
function zr(s, t, e = ti(s)) {
  return !e && !cl[s] && Ir(t) ? `${t}px` : t;
}
function hl(s, t) {
  if (et(s)) {
    const e = ti(s);
    return s = ll(s, e), arguments.length < 2 ? this[0] && zt(this[0], s, e) : s ? (t = zr(s, t, e), this.each((n, i) => {
      Y(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
C.css = hl;
function Fr(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const ul = /^\s+|\s+$/;
function Yi(s, t) {
  const e = s.dataset[t] || s.dataset[Qn(t)];
  return ul.test(e) ? e : Fr(JSON.parse, e);
}
function dl(s, t, e) {
  e = Fr(JSON.stringify, e), s.dataset[Qn(t)] = e;
}
function fl(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Yi(this[0], n);
    return e;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && Yi(this[0], s) : ft(t) ? this : this.each((e, n) => {
      dl(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
C.data = fl;
function Or(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Z([!0, !1], (s, t) => {
  Z(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    C[i] = function(r) {
      if (this[0])
        return be(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : oe(this[0]) ? Or(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? xt(this[0], `margin${e ? "Top" : "Left"}`) + xt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  C[e] = function(n) {
    if (!this[0])
      return ft(n) ? void 0 : this;
    if (!arguments.length)
      return be(this[0]) ? this[0].document.documentElement[`client${t}`] : oe(this[0]) ? Or(this[0], t) : this[0].getBoundingClientRect()[e] - Ki(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = zt(o, "boxSizing");
      o.style[e] = zr(e, i + (a === "border-box" ? Ki(o, !s) : 0));
    });
  };
});
const Ji = "___cd";
C.toggle = function(s) {
  return this.each((t, e) => {
    if (!Y(e))
      return;
    const n = qi(e);
    (ft(s) ? n : s) ? (e.style.display = e[Ji] || "", qi(e) && (e.style.display = Ga(e.tagName))) : n || (e[Ji] = zt(e, "display"), e.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Zi = "___ce", ei = ".", si = { focus: "focusin", blur: "focusout" }, Hr = { mouseenter: "mouseover", mouseleave: "mouseout" }, pl = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ni(s) {
  return Hr[s] || si[s] || s;
}
function ii(s) {
  const t = s.split(ei);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(s, t) {
  if (et(s)) {
    const [n, i] = ii(s), r = ni(n);
    if (!r)
      return this;
    const o = pl.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Lt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(ei), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in si;
  return this.each((n, i) => {
    e && he(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Wr(s) {
  return s[Zi] = s[Zi] || {};
}
function ml(s, t, e, n, i) {
  const r = Wr(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function jr(s, t) {
  return !t || !Jn.call(t, (e) => s.indexOf(e) < 0);
}
function Cs(s, t, e, n, i) {
  const r = Wr(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !jr(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Cs(s, t, e, n, i);
}
C.off = function(s, t, e) {
  if (ft(s))
    this.each((n, i) => {
      !Y(i) && !oe(i) && !be(i) || Cs(i);
    });
  else if (et(s))
    he(t) && (e = t, t = ""), Z(Vs(s), (n, i) => {
      const [r, o] = ii(i), a = ni(r);
      this.each((l, c) => {
        !Y(c) && !oe(c) && !be(c) || Cs(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
C.remove = function(s) {
  return Qt(this, s).detach().off(), this;
};
C.replaceWith = function(s) {
  return this.before(s).remove();
};
C.replaceAll = function(s) {
  return d(s).replaceWith(this), this;
};
function gl(s, t, e, n, i) {
  if (!et(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return et(t) || (ft(t) || We(t) ? t = "" : ft(e) ? (e = t, t = "") : (n = e, e = t, t = "")), he(n) || (n = e, e = void 0), n ? (Z(Vs(s), (r, o) => {
    const [a, l] = ii(o), c = ni(a), u = a in Hr, h = a in si;
    c && this.each((p, f) => {
      if (!Y(f) && !oe(f) && !be(f))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !jr(l, _.namespace.split(ei)) || !t && (h && (_.target !== f || _.___ot === c) || u && _.relatedTarget && f.contains(_.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let b = _.target;
          for (; !Pr(b, t); )
            if (b === f || (b = b.parentNode, !b))
              return;
          y = b;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const v = n.call(y, _, _.___td);
        i && Cs(f, c, l, t, g), v === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || d.guid++, ml(f, c, l, t, g);
    });
  }), this) : this;
}
C.on = gl;
function _l(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
C.one = _l;
const yl = /\r?\n/g;
function vl(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(yl, `\r
`))}`;
}
const bl = /file|reset|submit|button|image/i, Br = /radio|checkbox/i;
C.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Z(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || bl.test(i.type) || Br.test(i.type) && !i.checked)
        return;
      const r = Dr(i);
      if (!ft(r)) {
        const o = js(r) ? r : [r];
        Z(o, (a, l) => {
          s += vl(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = d;
function wl(s, t) {
  if (s == null)
    return [s, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let n = s;
  const i = [n];
  for (; typeof n == "object" && n !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), n = n[r], i.push(n), o !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(o) : n = n[o], i.push(n);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Cl(s, t, e) {
  try {
    const n = wl(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function V(s, ...t) {
  if (t.length === 0)
    return s;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const e = t[0];
    return Object.keys(e).forEach((n) => {
      const i = e[n] ?? "";
      s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let e = 0; e < t.length; e++) {
    const n = t[e] ?? "";
    s = s.replace(new RegExp(`\\{${e}\\}`, "g"), `${n}`);
  }
  return s;
}
var ri = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(ri || {});
function $t(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / ri[e]).toFixed(t) + e);
}
const ls = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * ri[n];
};
let oi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Rt;
function Sl() {
  return oi;
}
function kl(s) {
  oi = s.toLowerCase().replace("-", "_");
}
function Vr(s, t) {
  Rt || (Rt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), d.extend(!0, Rt, s);
}
function j(s, t, e, n, i, r) {
  Array.isArray(s) ? Rt && s.unshift(Rt) : s = Rt ? [Rt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || oi;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === Rt ? `${r}.${t}` : t;
    if (a = Cl(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? V(a, ...Array.isArray(e) ? e : [e]) : a;
}
function xl(s, t, e, n) {
  return j(void 0, s, t, e, n);
}
j.addLang = Vr;
j.getLang = xl;
j.getCode = Sl;
j.setCode = kl;
j.map = Rt;
Vr({
  zh_cn: {
    confirm: "确定",
    save: "保存",
    cancel: "取消",
    delete: "删除",
    reset: "重置",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    save: "儲存",
    cancel: "取消",
    delete: "刪除",
    reset: "重置",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    reset: "Reset",
    add: "Add"
  }
});
function Xi(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Ie(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Ie(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Tl(s, t) {
  if (s) {
    const e = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [n, i] of Object.entries(e))
      if (i.split(",").map((r) => r.trim()).includes(s))
        return n;
  }
  return "text";
}
function Nl(s, t) {
  const e = t || new FormData();
  return s && (typeof s == "string" && (s = new URLSearchParams(s)), s instanceof URLSearchParams ? s.forEach((n, i) => {
    Ie(e, i, n);
  }) : Array.isArray(s) ? s.forEach(([n, i]) => {
    Ie(e, n, i);
  }) : s instanceof FormData ? s.forEach((n, i) => {
    Ie(e, i, n);
  }) : d.isPlainObject(s) && Object.entries(s).forEach(([n, i]) => {
    Ie(e, n, i);
  })), e;
}
class Ur {
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
    return this.completed ? e && this.error ? e(this.error) : t(this.data) : (this.success((n) => t(n)), e && this.fail(e)), this;
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
      data: n,
      processData: i = !0,
      contentType: r,
      crossDomain: o,
      accepts: a,
      dataType: l,
      timeout: c,
      dataFilter: u,
      beforeSend: h,
      success: p,
      error: f,
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let y = n;
    y && (i && (y = Nl(y)), _.body = y), o && (_.mode = "cors");
    const v = _.headers || {};
    Xi(v, "X-Requested-With", "XMLHttpRequest"), r && Xi(v, "Content-Type", r), _.headers = v, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), f && this.fail(f), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n.call(this, ...e);
    });
  }
  async send() {
    var u;
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: r, jsonParser: o } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let a, l, c;
    try {
      a = await fetch(this.url, this.request), this.response = a;
      const { statusText: h } = a;
      if (a.ok) {
        const p = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), f = p ? "blob" : e || Tl(a.headers.get("Content-Type"), n);
        p || f === "blob" || f === "file" ? c = await a.blob() : f === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const g = (i == null ? void 0 : i(c, f)) ?? c;
        this._emit("success", g, h, a);
      } else
        throw new Error(h);
    } catch (h) {
      l = h;
      let p = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : p = !0), this.error = l, p || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
d.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : d.extend(t, s);
  const e = new Ur(t);
  return e.send(), e;
};
d.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), d.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
d.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, d.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
d.post = (s, t, e, n) => d.get(s, t, e, n, "POST");
d.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return d.get(n, t, (r, o, a) => {
    i && (r = d(r).find(i).html()), d(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function ai(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    d.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    return o instanceof Promise ? await o : o;
  }
  e && d.extend(n, typeof e == "function" ? e(n) : e);
  const i = new Ur(n), [r] = await i.send();
  return r;
}
function bu(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
d.fetch = ai;
function ut() {
  return d.guid++;
}
function kn(s, t) {
  if (s === t)
    return !1;
  if (s && t && typeof s == "object" && typeof t == "object") {
    const e = Array.isArray(s), n = Array.isArray(t);
    if (e !== n)
      return !0;
    if (e && n) {
      if (s.length !== t.length)
        return !0;
      for (let o = 0; o < s.length; o++)
        if (kn(s[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(s), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (kn(s[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class Ss {
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
    return (!e || t.some((n, i) => kn(n instanceof Ss ? n.value : n, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((n) => n instanceof Ss ? n.cache : n)), this._value;
  }
}
function Kr(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Kr(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...s) => Kr(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
d.classes = x;
d.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = d(n);
    s === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(s, ...t));
  });
};
const Pe = /* @__PURE__ */ new WeakMap();
function qr(s, t, e) {
  const n = Pe.has(s), i = n ? Pe.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, d(s).dataset(), i), Pe.set(s, i)) : Pe.delete(s);
}
function Gr(s, t, e) {
  let n = Pe.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, d(s).dataset(), n)), t === void 0 ? n : n[t];
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...s) {
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? this.length ? Gr(this[0], t) : void 0 : this.each((n, i) => qr(i, t, e));
};
d.fn.removeData = function(s = null) {
  return this.each((t, e) => qr(e, s));
};
function xn(s, t = "z-") {
  const e = d(s)[0];
  if (e)
    return Array.from(e.attributes).reduce((n, i) => {
      let { name: r, value: o } = i;
      if (r.startsWith(t)) {
        r = r.slice(t.length).replace(/-([a-z])/g, (a) => a[1].toUpperCase());
        try {
          o.startsWith("RAWJS<") && o.endsWith(">RAWJS") ? o = new Function(`return ${o.substring(6, o.length - 6)}`)() : o = JSON.parse(o);
        } catch {
        }
        n[r] = o;
      }
      return n;
    }, {});
}
function Qi(s, t, e = "z-") {
  const n = d(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function El(...s) {
  var e;
  const t = s.length;
  if (!t)
    return xn(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = xn(this)) == null ? void 0 : e[n] : (d.isPlainObject(n) && Qi(this, n), this);
  }
  return Qi(this, { [s[0]]: s[1] }), this;
}
d.fn.z = El;
d.fn._attr = d.fn.attr;
d.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
d.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const ks = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), $l = {};
d.share = $l;
var Ks, O, Yr, bt, ne, tr, Jr, Tn, li, Nn, En, je = {}, Zr = [], Ml = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qs = Array.isArray;
function Kt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Xr(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function wt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ks.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return ds(s, o, n, i, null);
}
function ds(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Yr, __i: -1, __u: 0 };
  return i == null && O.vnode != null && O.vnode(r), r;
}
function q() {
  return { current: null };
}
function ke(s) {
  return s.children;
}
function B(s, t) {
  this.props = s, this.context = t;
}
function ae(s, t) {
  if (t == null)
    return s.__ ? ae(s.__, s.__i + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ae(s) : null;
}
function Qr(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Qr(s);
  }
}
function er(s) {
  (!s.__d && (s.__d = !0) && ne.push(s) && !xs.__r++ || tr !== O.debounceRendering) && ((tr = O.debounceRendering) || Jr)(xs);
}
function xs() {
  var s, t, e, n, i, r, o, a;
  for (ne.sort(Tn); s = ne.shift(); )
    s.__d && (t = ne.length, n = void 0, r = (i = (e = s).__v).__e, o = [], a = [], e.__P && ((n = Kt({}, i)).__v = i.__v + 1, O.vnode && O.vnode(n), ci(e.__P, n, i, e.__n, e.__P.ownerSVGElement !== void 0, 32 & i.__u ? [r] : null, o, r ?? ae(i), !!(32 & i.__u), a), n.__v = i.__v, n.__.__k[n.__i] = n, so(o, n, a), n.__e != r && Qr(n)), ne.length > t && ne.sort(Tn));
  xs.__r = 0;
}
function to(s, t, e, n, i, r, o, a, l, c, u) {
  var h, p, f, g, _, y = n && n.__k || Zr, v = t.length;
  for (e.__d = l, Al(e, t, y), l = e.__d, h = 0; h < v; h++)
    (f = e.__k[h]) != null && typeof f != "boolean" && typeof f != "function" && (p = f.__i === -1 ? je : y[f.__i] || je, f.__i = h, ci(s, f, p, i, r, o, a, l, c, u), g = f.__e, f.ref && p.ref != f.ref && (p.ref && hi(p.ref, null, f), u.push(f.ref, f.__c || g, f)), _ == null && g != null && (_ = g), 65536 & f.__u || p.__k === f.__k ? (l && !l.isConnected && (l = ae(p)), l = eo(f, l, s)) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : g && (l = g.nextSibling), f.__d = void 0, f.__u &= -196609);
  e.__d = l, e.__e = _;
}
function Al(s, t, e) {
  var n, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (s.__k = [], n = 0; n < l; n++)
    o = n + h, (i = s.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? ds(null, i, null, null, null) : qs(i) ? ds(ke, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? ds(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = s, i.__b = s.__b + 1, a = Il(i, e, o, u), i.__i = a, r = null, a !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a === o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : a < o ? a == o - 1 && (h = a - o) : h = 0, a !== n + h && (i.__u |= 65536))) : (r = e[o]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ae(r)), $n(r, r, !1), e[o] = null, u--);
  if (u)
    for (n = 0; n < c; n++)
      (r = e[n]) != null && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ae(r)), $n(r, r));
}
function eo(s, t, e) {
  var n, i;
  if (typeof s.type == "function") {
    for (n = s.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = s, t = eo(n[i], t, e));
    return t;
  }
  s.__e != t && (e.insertBefore(s.__e, t || null), t = s.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Ts(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (qs(s) ? s.some(function(e) {
    Ts(e, t);
  }) : t.push(s)), t;
}
function Il(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type && !(131072 & l.__u))
    return e;
  if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; o >= 0 || a < t.length; ) {
      if (o >= 0) {
        if ((l = t[o]) && !(131072 & l.__u) && i == l.key && r === l.type)
          return o;
        o--;
      }
      if (a < t.length) {
        if ((l = t[a]) && !(131072 & l.__u) && i == l.key && r === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function sr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Ml.test(t) ? e : e + "px";
}
function cs(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || sr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || sr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in s || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n ? e.u = n.u : (e.u = li, s.addEventListener(t, r ? En : Nn, r)) : s.removeEventListener(t, r ? En : Nn, r);
    else {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, e));
    }
}
function nr(s) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + s];
      if (t.t == null)
        t.t = li++;
      else if (t.t < e.u)
        return;
      return e(O.event ? O.event(t) : t);
    }
  };
}
function ci(s, t, e, n, i, r, o, a, l, c) {
  var u, h, p, f, g, _, y, v, b, w, S, k, T, A, I, M = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = O.__b) && u(t);
  t:
    if (typeof M == "function")
      try {
        if (v = t.props, b = (u = M.contextType) && n[u.__c], w = u ? b ? b.props.value : u.__ : n, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : ("prototype" in M && M.prototype.render ? t.__c = h = new M(v, w) : (t.__c = h = new B(v, w), h.constructor = M, h.render = Rl), b && b.sub(h), h.props = v, h.state || (h.state = {}), h.context = w, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), M.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Kt({}, h.__s)), Kt(h.__s, M.getDerivedStateFromProps(v, h.__s))), f = h.props, g = h.state, h.__v = t, p)
          M.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && v !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(v, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(v, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = v, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), S = 0; S < h._sb.length; S++)
              h.__h.push(h._sb[S]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(v, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(f, g, _);
          });
        }
        if (h.context = w, h.props = v, h.__P = s, h.__e = !1, k = O.__r, T = 0, "prototype" in M && M.prototype.render) {
          for (h.state = h.__s, h.__d = !1, k && k(t), u = h.render(h.props, h.state, h.context), A = 0; A < h._sb.length; A++)
            h.__h.push(h._sb[A]);
          h._sb = [];
        } else
          do
            h.__d = !1, k && k(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++T < 25);
        h.state = h.__s, h.getChildContext != null && (n = Kt(Kt({}, n), h.getChildContext())), p || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(f, g)), to(s, qs(I = u != null && u.type === ke && u.key == null ? u.props.children : u) ? I : [I], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (E) {
        t.__v = null, l || r != null ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = e.__e, t.__k = e.__k), O.__e(E, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Pl(e.__e, t, e, n, i, r, o, l, c);
  (u = O.diffed) && u(t);
}
function so(s, t, e) {
  t.__d = void 0;
  for (var n = 0; n < e.length; n++)
    hi(e[n], e[++n], e[++n]);
  O.__c && O.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      O.__e(r, i.__v);
    }
  });
}
function Pl(s, t, e, n, i, r, o, a, l) {
  var c, u, h, p, f, g, _, y = e.props, v = t.props, b = t.type;
  if (b === "svg" && (i = !0), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!b && (b ? f.localName === b : f.nodeType === 3)) {
        s = f, r[c] = null;
        break;
      }
  }
  if (s == null) {
    if (b === null)
      return document.createTextNode(v);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, v.is && v), r = null, a = !1;
  }
  if (b === null)
    y === v || a && s.data === v || (s.data = v);
  else {
    if (r = r && Ks.call(s.childNodes), y = e.props || je, !a && r != null)
      for (y = {}, c = 0; c < s.attributes.length; c++)
        y[(f = s.attributes[c]).name] = f.value;
    for (c in y)
      if (f = y[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = f;
        else if (c !== "key" && !(c in v)) {
          if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v)
            continue;
          cs(s, c, null, f, i);
        }
      }
    for (c in v)
      f = v[c], c == "children" ? p = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? g = f : c == "checked" ? _ = f : c === "key" || a && typeof f != "function" || y[c] === f || cs(s, c, f, y[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === s.innerHTML) || (s.innerHTML = u.__html), t.__k = [];
    else if (h && (s.innerHTML = ""), to(s, qs(p) ? p : [p], t, e, n, i && b !== "foreignObject", r, o, r ? r[0] : e.__k && ae(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && Xr(r[c]);
    a || (c = "value", g !== void 0 && (g !== s[c] || b === "progress" && !g || b === "option" && g !== y[c]) && cs(s, c, g, y[c], !1), c = "checked", _ !== void 0 && _ !== s[c] && cs(s, c, _, y[c], !1));
  }
  return s;
}
function hi(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    O.__e(n, e);
  }
}
function $n(s, t, e) {
  var n, i;
  if (O.unmount && O.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || hi(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        O.__e(r, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && $n(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Xr(s.__e), s.__c = s.__ = s.__e = s.__d = void 0;
}
function Rl(s, t, e) {
  return this.constructor(s, e);
}
function ye(s, t, e) {
  var n, i, r, o;
  O.__ && O.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], ci(t, s = (!n && e || t).__k = wt(ke, null, [s]), i || je, je, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Ks.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), so(r, s, o);
}
Ks = Zr.slice, O = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Yr = 0, bt = function(s) {
  return s != null && s.constructor == null;
}, B.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof s == "function" && (s = s(Kt({}, e), this.props)), s && Kt(e, s), s != null && this.__v && (t && this._sb.push(t), er(this));
}, B.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), er(this));
}, B.prototype.render = ke, ne = [], Jr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Tn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, xs.__r = 0, li = 0, Nn = nr(!1), En = nr(!0);
function W(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Ts(r), ...Ts(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = d.extend(r, i))), s[n] = i);
    });
  }), s;
}
function no(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const Re = /* @__PURE__ */ new Map();
function Ns(s) {
  const { zui: t } = window;
  return (!Re.size || s && !Re.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Re.set(e.toLowerCase(), n);
  }), s ? Re.get(s.toLowerCase()) : void 0;
}
function Dl(s, t, e) {
  const n = Ns(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function wu(s) {
  if (s) {
    const t = Ns(s);
    t && t.defineFn();
  } else
    Ns(), Re.forEach((t) => {
      t.defineFn();
    });
}
d.fn.zuiInit = function() {
  return this.find("[zui-create],[data-zui]").each(function() {
    const s = d(this);
    let t = xn(s, "data-");
    const [e, n] = (t.zui || s.attr("zui-create")).split(":");
    s.zui(e) || (n ? t = d.share[n] : delete t.zui, requestAnimationFrame(() => Dl(e, this, t)));
  }), this.find("[zui-init]").each(function() {
    const s = d(this);
    s.z("zuiInited") || d.runJS(s.z("zuiInited", !0).attr("zui-init"), ["$element", s]);
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this.find('[data-on="inited"]').each((s, t) => {
    const e = d(t);
    e.zui() || e.trigger("inited");
  }), this;
};
d.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Gr(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = Ns(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
d(() => {
  d("body").zuiInit();
});
function Ll(s, t = !0) {
  const e = d(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = n === document.body || e.is("html") ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
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
d.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    Ll(e, s);
  });
};
d.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function zl(s) {
  const t = d(this), e = t.dataset();
  if (!(e.on || "click").split(" ").includes(s.type))
    return;
  const n = e.selector ? d(s.target).closest(e.selector) : t;
  if (!n.length)
    return;
  const i = (l) => l === "" ? !0 : l, r = (l) => {
    if (typeof l == "string")
      try {
        l = JSON.parse(l);
      } catch {
      }
    return l;
  };
  if (i(e.once)) {
    if (e.onceCalled)
      return;
    t.dataset("once-called", !0);
  }
  if (i(e.prevent) && s.preventDefault(), i(e.stop) && s.stopPropagation(), i(e.self) && s.currentTarget !== s.target)
    return;
  const o = [["$element", t], ["event", s], ["options", e], ["$target", n]];
  if (e.if && !d.runJS(e.if, ...o))
    return;
  const a = e.call;
  if (a) {
    let l = window[a];
    const c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(a);
    if (l || (l = d.runJS(a, ...o)), !c || !d.isFunction(l))
      return;
    const u = [], h = e.params;
    e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((p) => (p = p.trim(), p === "$element" ? t : p === "event" ? s : p === "options" ? e : p.startsWith("$element.") || p.startsWith("event.") || p.startsWith("options.") ? d.runJS(p, ...o) : r(p)))) : u.push(h), l(...u);
  }
  e.do && d.runJS(e.do, ...o);
}
d(document).on("click.zui.global change.zui.global inited.zui.global", "[data-on]", zl);
function io(s) {
  if (typeof s == "function")
    return io(s());
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function fs(s) {
  if (s == null)
    return null;
  const [t, e = "px"] = io(s);
  return Number.isNaN(t) ? typeof s == "string" ? s : null : `${t}${e}`;
}
async function ir(s, t) {
  var n, i, r;
  if (s instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(s), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), s;
  }
  if (s instanceof Response) {
    const o = await s.blob();
    return t = t || ((r = (i = (n = s.headers.get("Content-Disposition")) == null ? void 0 : n.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), ir(o, t);
  }
  const e = await fetch(s);
  return ir(e);
}
class Fl {
  constructor(t) {
    this._$target = d(t);
  }
  on(...t) {
    return this._$target.on(...t), this;
  }
  one(...t) {
    return this._$target.one(...t), this;
  }
  off(...t) {
    return this._$target.off(...t), this;
  }
  trigger(...t) {
    return this._$target.trigger(...t), this;
  }
}
const Ft = new Fl(document);
d.bus = Ft;
d.on = Ft.on.bind(Ft);
d.one = Ft.one.bind(Ft);
d.off = Ft.off.bind(Ft);
d.trigger = Ft.trigger.bind(Ft);
var Ol = ["Shift", "Meta", "Alt", "Control"], ro = typeof navigator == "object" ? navigator.platform : "", oo = /Mac|iPod|iPhone|iPad/.test(ro), Hl = oo ? "Meta" : "Control", Wl = ro === "Win32" ? ["Control", "Alt"] : oo ? ["Alt"] : [];
function pn(s, t) {
  return typeof s.getModifierState == "function" && (s.getModifierState(t) || Wl.includes(t) && s.getModifierState("AltGraph"));
}
function jl(s) {
  return s.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), n = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? Hl : i;
    }), n];
  });
}
function ao(s, t) {
  var e;
  t === void 0 && (t = {});
  var n = (e = t.timeout) != null ? e : 1e3, i = Object.keys(s).map(function(a) {
    return [jl(a), s[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(p, f) {
        return !(f[1].toUpperCase() !== p.key.toUpperCase() && f[1] !== p.code || f[0].find(function(g) {
          return !pn(p, g);
        }) || Ol.find(function(g) {
          return !f[0].includes(g) && f[1] !== g && pn(p, g);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : pn(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), n));
  };
}
function Bl(s, t, e) {
  var n;
  e === void 0 && (e = {});
  var i = (n = e.event) != null ? n : "keydown", r = ao(t, e);
  return s.addEventListener(i, r), function() {
    s.removeEventListener(i, r);
  };
}
function lo(s, t = {}) {
  if (!s)
    return;
  const e = Object.keys(t).reduce((n, i) => (t[i].optional || (n[i] = {
    ...t[i]
  }), n), {});
  return Object.keys(s).forEach((n) => {
    const i = s[n];
    i ? i === !0 ? t[n] && (e[n] = {
      ...t[n]
    }) : e[n] = i : delete e[n];
  }), Object.keys(e).reduce((n, i) => {
    const { keys: r, handler: o } = e[i];
    return typeof r == "string" ? n[r] = o : r.forEach((a) => {
      n[a] = o;
    }), n;
  }, {});
}
function co(s, t, e) {
  const { timeout: n, event: i = "keydown", scope: r, when: o } = e || {}, a = ao(t, { timeout: n }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return d(s).on(`${i}${l}`, function(u) {
    o && o(u) === !1 || d(u.target).data(c) || a(u);
  }).on(`compositionstart${l}`, (u) => {
    d(u.target).data(c, !0);
  }).on(`compositionend${l}`, (u) => {
    d(u.target).removeData(c);
  });
}
function ho(s, t) {
  return d(s).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const Cu = Bl;
d.fn.hotkeys = function(s, t) {
  return co(this, s, t);
};
d.fn.unbindHotkeys = function(s) {
  return ho(this, s);
};
d.hotkeys = function(s, t) {
  co(window, s, t);
};
d.unbindHotkeys = function(s) {
  ho(window, s);
};
function ui() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Vl(s) {
  (typeof s == "string" || s instanceof Element || s instanceof d) && (s = { target: s });
  const { target: t, onError: e, onSuccess: n, afterExit: i, afterEnter: r } = s, o = d(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), n == null || n.call(a), d(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, d(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const u = ui();
    let h = u;
    u ? d(u).addClass("is-in-fullscreen") : (h = d(document).find(".is-in-fullscreen")[0] || document, d(h).removeClass("is-in-fullscreen")), d("body").toggleClass("has-in-fullscreen", !!u);
    const p = { event: c, target: h, fullscreenElement: u };
    d(h).trigger(u ? "enterFullscreen" : "exitFullscreen", p).trigger("toggleFullscreen", p);
  }));
}
async function uo(s) {
  const t = ui();
  return s === !1 && !!t === s ? s : t ? (document.exitFullscreen(), !1) : (await Vl(s), !0);
}
d.fn.fullscreen = function(s) {
  return uo({
    target: this,
    ...s
  });
};
d.getFullscreenElement = ui;
d.toggleFullscreen = uo;
function ue(s) {
  return s.parentNode === document ? !1 : s.parentNode ? ue(s.parentNode) : !0;
}
d.isDetached = ue;
d.fn.isDetached = function() {
  const s = this[0];
  return !s || ue(s);
};
class Ht {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: n, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = d(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], u = ut();
    this._gid = u, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((p) => {
      p.forEach((f) => {
        f.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, ue(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${u}`, l.data(n, this).attr(i, `${u}`), o) {
      const p = `${n}:ALL`;
      let f = l.data(p);
      f || (f = /* @__PURE__ */ new Map(), l.data(p, f)), f.set(this._key, this);
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
  static get SELECTOR() {
    return `[${this.DATA_KEY}]`;
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
    return d(this.element);
  }
  /**
   * Get the component event emitter.
   */
  get $emitter() {
    return this.$element;
  }
  /**
   * Get the component i18n data.
   */
  get i18nData() {
    return [this.options.i18n, this.constructor.i18n];
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
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), (r = this._mobs) == null || r.disconnect(), i.off(this.namespace).removeData(t).attr(e, null), n) {
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
    return t && d.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = d.Event(t);
    return n.__src = this, this.$emitter.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e, n) {
    const i = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(t), function(r, o) {
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
  i18n(t, e, n) {
    const { i18nData: i } = this;
    return j(i, t, e, n, this.options.lang, this.constructor.NAME) ?? j(i, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = d(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return n.data(this.KEY);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static isValid(t) {
    return !0;
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
    if (n) {
      if (this.isValid(n))
        return e && n.setOptions(e), n;
      n.destroy();
    }
    return new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t) {
    const { MULTI_INSTANCE: e, SELECTOR: n } = this, i = [];
    return d(t || document).find(n).each((r, o) => {
      if (e) {
        const l = d(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = d(o).data(this.KEY);
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
  static query(t, e, n) {
    if (t === void 0) {
      let i = this.getAll();
      return n && (i = i.filter(n)), i.pop();
    }
    return this.get(d(t).closest(this.SELECTOR), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    d.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    d.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, u) => {
          let h = n.get(u);
          if (h ? o && h.render(o) : h = new n(u, o), a) {
            let p = h[a], f = h;
            p === void 0 && (f = h.$, p = f[a]), typeof p == "function" ? l = p.call(f, ...r) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
Ht.DEFAULT = {};
Ht.MULTI_INSTANCE = !1;
class Ul extends Ht {
  init() {
    const { offset: t = 1, side: e, zIndex: n, pinnedClass: i = "is-pinned" } = this.options, { $element: r } = this;
    r.css({ position: "sticky", zIndex: n }), e && r.css(e, -t), this._ob = new IntersectionObserver(
      ([o]) => o.target.classList.toggle(i, o.intersectionRatio < t),
      { threshold: [1] }
    ), this._ob.observe(r[0]);
  }
  destroy() {
    this._ob.disconnect();
  }
}
Ul.NAME = "Sticky";
function Gs(s, t) {
  const e = d(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!(o * a))
    return !1;
  if (!n) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: y, clientWidth: v } = document.documentElement;
    n = { left: 0, top: 0, width: _ || v, height: g || y };
  }
  const { left: l, top: c, width: u, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= u && r + a <= h;
  const p = i <= u && i + o >= l;
  return r <= h && r + a >= c && p;
}
d.fn.isVisible = function(s) {
  return Gs(this, s);
};
function di(s, t, e = !1) {
  const n = d(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${ut()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    di(n, r.innerHTML), r.remove();
  });
}
d.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
d.fn.runJS = function(s) {
  return this.each((t, e) => {
    di(e, s);
  });
};
function Kl(s, t = "both") {
  return (t === "vert" || t === "both") && s.clientHeight < s.scrollHeight || (t === "horz" || t === "both") && s.clientWidth < s.scrollWidth;
}
function fo(s, t) {
  const e = d(s), { ifNeeded: n = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = d(a).closest(i);
      if (!l.length || !Kl(l[0]))
        return;
    }
    if (n) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (Gs(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
d.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    fo(e, s);
  });
};
d.setLibRoot = function(s) {
  d.libRoot = s;
};
d.registerLib = function(s, t) {
  d.libMap || (d.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), d.libMap[s] = t;
};
function ql(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s;
    if (d(i ? `#${i}` : `link[href="${n}"]`).length) {
      t();
      return;
    }
    const o = document.createElement("link");
    o.onload = () => {
      t();
    }, o.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${n}`));
    }, o.rel = "stylesheet", o.href = n, i && (o.id = i), d("head").append(o);
  });
}
function Gl(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s, r = d(i ? `#${i}` : `script[src="${n}"]`);
    if (r.length) {
      if (r.dataset("loaded"))
        t();
      else {
        const p = r.data("loadCalls") || [];
        p.push(t), r.data("loadCalls", p);
      }
      return;
    }
    const { async: o = !0, defer: a = !1, noModule: l = !1, type: c, integrity: u } = s, h = document.createElement("script");
    h.async = o, h.defer = a, h.noModule = l, c && (h.type = c), u && (h.integrity = u), h.onload = () => {
      t(), (d(h).dataset("loaded", !0).data("loadCalls") || []).forEach((f) => f()), d(h).removeData("loadCalls");
    }, h.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${n}`));
    }, d("head").append(h), h.src = n;
  });
}
d.getLib = async function(s, t, e) {
  var f;
  typeof s == "string" && (s = ((f = d.libMap) == null ? void 0 : f[s]) || { src: s });
  let n = Array.isArray(s) ? { src: s } : d.extend({}, s);
  typeof t == "function" ? n.success = t : t && d.extend(n, t), e && (n.success = e);
  let { src: i } = n;
  const { name: r, success: o } = n, a = d.libMap && r ? d.libMap[r] : null;
  if (a && (n = d.extend({}, a, n), i = a.src || n.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = n;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r, u = () => c ? window[c] : void 0;
  typeof l == "string" && (l = () => !!u());
  const h = () => (o == null || o(), u());
  if (typeof l == "function" && await l())
    return h();
  const { root: p = d.libRoot } = n;
  for (let g of i) {
    typeof g == "string" && (g = { src: g });
    let { src: _ } = g;
    p && (_ = `${p}${p.endsWith("/") || _.startsWith("/") ? "" : "/"}${_}`);
    const y = {
      ...n,
      ...g,
      src: _
    };
    if (g.type === "css" || !g.type && _.endsWith(".css")) {
      await ql(y);
      continue;
    }
    await Gl(y);
  }
  return h();
};
d.getScript = d.getLib;
const Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: ue,
  isVisible: Gs,
  runJS: di,
  scrollIntoView: fo
}, Symbol.toStringTag, { value: "Module" })), po = {};
function ot(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    ot(e, s[e]);
  }) : t && (po[s.toLowerCase()] = t);
}
function Yl(s) {
  return po[s.toLowerCase()];
}
class X extends B {
  constructor() {
    super(...arguments), this._gid = ut();
  }
  get gid() {
    return this._gid;
  }
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
  }
  /**
   * Get the component i18n data.
   */
  get i18nData() {
    return [this.props.i18n, this.constructor.i18n];
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
    const { i18nData: i } = this;
    return j(i, t, e, n, this.props.lang, this.constructor.NAME) ?? j(i, t, e, n, this.props.lang) ?? `{i18n:${t}}`;
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
      });
    });
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, ...h } = t, p = new Set(this.constructor.customProps), f = "dangerouslySetInnerHTML", g = Object.keys(h).reduce((_, y) => {
      if (!p.has(y) && (y === f || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(y))) {
        const v = h[y];
        _[y] = y !== f && v && typeof v == "object" ? JSON.stringify(v) : v;
      }
      return _;
    }, {});
    return { ref: o, className: x(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...g, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? Yl(e) : e) || e;
  }
  _getChildren(t) {
    return t.children;
  }
  _beforeRender(t) {
    return t;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _onRender(t, e, n, i) {
    return [t, e, n];
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), n = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, n, t);
    return r && ([e, i, n] = r), wt(e, i, n);
  }
}
X.HElement = !0;
X.customProps = [];
var Jl = 0;
function m(s, t, e, n, i, r) {
  t || (t = {});
  var o, a, l = t;
  if ("ref" in l)
    for (a in l = {}, t)
      a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Jl, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return O.vnode && O.vnode(c), c;
}
class we extends B {
  constructor() {
    super(...arguments), this._ref = q();
  }
  _runJS() {
    this.props.executeScript && d(this._ref.current).runJS().zuiInit();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ m(X, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Zl(s) {
  const {
    tag: t,
    className: e,
    style: n,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...u
  } = s, h = [e], p = { ...n }, f = [], g = [];
  return i.forEach((_) => {
    const y = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        y.push(...l.call(o, _, f, ...r));
      else {
        const v = _.call(o, f, ...r);
        v && (Array.isArray(v) ? y.push(...v) : y.push(v));
      }
    else
      y.push(_);
    y.forEach((v) => {
      v != null && (typeof v == "object" && !bt(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? f.push(
        /* @__PURE__ */ m("div", { className: x(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(p, v.style), v.className && h.push(v.className), v.children && f.push(v.children), v.attrs && Object.assign(u, v.attrs)) : f.push(v));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: x(h),
    style: p,
    ...u
  }, f];
}
function mo({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Zl(t);
  return wt(s, e, ...n);
}
function Mn(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => Mn({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ m("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ m(we, { ...W(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = W({ children: o.map((a) => Mn({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ m(X, { ...W(i, r) });
  }
  return bt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", s), console.groupEnd()), null);
}
function H(s) {
  const t = Mn(s);
  return t == null || typeof t == "boolean" ? null : bt(t) ? t : /* @__PURE__ */ m(ke, { children: t });
}
const rr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function Q(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (bt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(rr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? rr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ m("i", { className: x(i), ...n });
}
function Xl(s) {
  return this.getChildContext = () => s.context, s.children;
}
function go(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    ye(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== e && t.componentWillUnmount(), s._vnode ? (t._temp || (t._container = e, t._temp = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild(n) {
      this.childNodes.push(n), t._container.appendChild(n);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(n, i) {
      this.childNodes.push(n), t._container.appendChild(n);
    },
    removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t._container.removeChild(n);
    }
  }), ye(
    wt(Xl, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Ql(s, t) {
  const e = wt(go, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
ot({
  HElement: X,
  element: X,
  HtmlContent: we,
  html: we,
  CustomContent: H,
  custom: H,
  Icon: Q,
  Portal: go
});
class U extends Ht {
  constructor() {
    super(...arguments), this._ref = q();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this._ref.current;
  }
  /**
   * The i18n data.
   */
  get i18nData() {
    const { i18n: t, i18nData: e } = this.constructor.Component;
    return e ? [...e, this.constructor.i18n] : [t, ...super.i18nData];
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
    const { element: e } = this, { Component: n, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this._ref,
      ...o
    };
    if (r && n.HElement && (e.tagName.toLowerCase() === r || r === !0)) {
      const l = Array.from(e.attributes).reduce((c, u) => {
        const { name: h, value: p } = u;
        return c[h === "class" ? "className" : h] = p, c;
      }, {});
      return ye(
        wt(n, W({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    ye(
      wt(n, a),
      e
    );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return ye(wt(this.Component, t), e), e.innerHTML;
  }
}
U.replace = !1;
class K extends X {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ m(Q, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(Q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ m("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ m(Q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ m("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: u } = t;
    return ["btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof u == "string" ? `rounded-${u}` : { rounded: u }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      type: l ? void 0 : "button",
      disabled: !l && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: K
}, Symbol.toStringTag, { value: "Module" }));
ot(tc);
let st = class extends X {
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
  getItems() {
    return this._items;
  }
  getRenderedItem(t) {
    return this._renderedItems.find((e) => e.key === t);
  }
  getItem(t) {
    return this._items[this.getItemIndex(t)];
  }
  getItemIndex(t) {
    return this._renderedItems.findIndex((e) => e.key === t);
  }
  getItemByIndex(t) {
    return this._items[t];
  }
  /**
   * Get the item key by index.
   *
   * @param index The rendered item index.
   * @returns The item key, if the item is not rendered, return undefined.
   */
  getKey(t) {
    var e, n;
    return (n = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : n.key;
  }
  _getItemFromEvent(t, e) {
    var l;
    const n = (e || t.target).closest("[z-item]");
    if (!n || !((l = n.parentElement) != null && l.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const i = +n.getAttribute("z-item"), r = this._items[i];
    if (!r)
      return;
    const o = this.getKey(i);
    if (o === void 0)
      return;
    const a = this._renderedItems[i];
    return { index: i, item: r, element: n, event: t, key: o, renderedItem: a, relativeTarget: this.props.relativeTarget };
  }
  _handleClick(t) {
    var n, i;
    const e = this._getItemFromEvent(t);
    if (e)
      return (n = this.props.onClickItem) == null || n.call(this, e), (i = e.item.onClick) == null || i.call(this, t, e), e;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, n) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const c = i.call(this, e, n);
      c !== void 0 && (e = c);
    }
    const { type: r } = e;
    let { itemRender: o } = t;
    if (o && typeof o == "object" && (o = o[r]), o) {
      const c = o.call(this, e, n);
      if (c !== void 0)
        return /* @__PURE__ */ m(H, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ m(H, { "z-key": e.key, "z-item": n, "z-type": r, content: { ...e } });
    if (l = l || a.default || X, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = W({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ m(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, n) {
    if (!e)
      return !1;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: u } = this, { defaultItemProps: h = {}, defaultItemPropsMap: p = {} } = this.constructor;
    if (e = W(
      { type: l },
      h,
      p[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", u] },
      e,
      {
        _item: e,
        _index: n,
        key: String((a ? e[a] : e.key) ?? e.key ?? n),
        onClick: void 0
      }
    ), o) {
      const f = o.call(this, e, n);
      if (f !== void 0)
        return f;
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
    return this._renderedItems = e.map((n, i) => {
      const r = this._getItem(t, n, i);
      return r || void 0;
    }), this._renderedItems.reduce((n, i, r) => (i && n.push(this._renderItem(t, i, r)), n), []);
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
    const n = this._renderItems(t, e);
    return t.children && n.push(t.children), n;
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
st.NAME = "";
st.ITEM_NAME = "item";
st.TAG = "ul";
st.ItemComponents = {
  default: X,
  divider: [X, { className: "divider" }],
  space: [X, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
st.defaultItemProps = {
  component: "li"
};
st.defaultItemPropsMap = {};
st.defaultItemType = "item";
st.defaultProps = {
  itemKey: "id"
};
const ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: st
}, Symbol.toStringTag, { value: "Module" }));
class fi extends U {
}
fi.NAME = "CommonList";
fi.Component = st;
fi.replace = st.TAG;
ot(ec);
function sc(s) {
  if (s.indexOf("#") === 0 && (s = s.slice(1)), s.length === 3 && (s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2]), s.length !== 6)
    throw new Error(`Invalid HEX color "${s}".`);
  return [
    parseInt(s.slice(0, 2), 16),
    // r
    parseInt(s.slice(2, 4), 16),
    // g
    parseInt(s.slice(4, 6), 16)
    // b
  ];
}
function nc(s) {
  const [t, e, n] = typeof s == "string" ? sc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function or(s, t) {
  return nc(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function ar(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function ic(s, t, e) {
  s = s % 360 / 360, t = ar(t), e = ar(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function rc(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function oc(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let Ys = class extends B {
  render() {
    const {
      className: t,
      style: e,
      size: n = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      icon: l,
      text: c,
      code: u,
      maxTextLength: h = 2,
      src: p,
      hueDistance: f = 43,
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: y,
      ...v
    } = this.props, b = ["avatar", t], w = { ...e, background: o, color: a };
    let S = 32;
    n && (typeof n == "number" ? (w.width = `${n}px`, w.height = `${n}px`, w.fontSize = `${Math.max(12, Math.round(n / 2))}px`, S = n) : (b.push(`size-${n}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let k;
    if (p)
      b.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      b.push("has-icon"), k = /* @__PURE__ */ m(Q, { icon: l });
    else if (c != null && c.length) {
      const T = oc(c, h);
      if (b.push("has-text", `has-text-${T.length}`), o === void 0) {
        const I = u ?? c, M = (typeof I == "number" ? I : rc(I)) * f % 360;
        if (w.background = `hsl(${M},${g * 100}%,${_ * 100}%)`, !a) {
          const E = ic(M, g, _);
          w.color = or(E);
        }
      } else
        !a && o && (w.color = or(o));
      let A;
      S && S < 14 * T.length && (A = { transform: `scale(${S / (14 * T.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": S, className: "avatar-text", style: A, children: T });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: x(b),
        style: w,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Ys
}, Symbol.toStringTag, { value: "Module" }));
let Ct = class extends st {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    e.type || (e = d.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = W({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = W({}, e, no({ btnType: n, size: i }));
  }
};
Ct.NAME = "btn-group";
Ct.TAG = "nav";
Ct.ItemComponents = {
  ...st.ItemComponents,
  default: K
};
Ct.defaultItemProps = {
  component: void 0
};
const Js = class _o extends Ct {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = x(n.className, `gap-${e}`) : n.style = d.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = W({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = W(n, r)), /* @__PURE__ */ m(_o, { ...r });
  }
};
Js.NAME = "toolbar";
Js.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Js.ItemComponents = {
  ...Ct.ItemComponents,
  btnGroup: Ct,
  "btn-group": Ct
};
let St = Js;
const lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: St
}, Symbol.toStringTag, { value: "Module" }));
class Zs extends X {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: n } = this.props, i = e.target.indeterminate ? "indeterminate" : e.target.checked;
      n && n.call(this, e, i), this._controlled || this.setState({ checked: i });
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? !1
    }, this._controlled = t.checked !== void 0;
  }
  get checked() {
    return this._controlled ? this.props.checked : this.state.checked;
  }
  _getClassName(t) {
    const { disabled: e, type: n = "checkbox" } = t, { checked: i } = this;
    return [t.className, n === "switch" ? n : `${n}-primary`, {
      disabled: e,
      checked: i === !0,
      indeterminate: i === "indeterminate"
    }];
  }
  _getChildren(t) {
    const { name: e, type: n, value: i, id: r, label: o } = t, { checked: a } = this;
    return [
      e ? /* @__PURE__ */ m(
        "input",
        {
          type: n === "radio" ? n : "checkbox",
          name: e,
          id: r,
          value: i,
          onChange: this._handleChange,
          indeterminate: a === "indeterminate",
          checked: typeof a == "boolean" ? a : void 0
        },
        "input"
      ) : null,
      /* @__PURE__ */ m("label", { htmlFor: r, children: /* @__PURE__ */ m(H, { content: o }) }, "label")
    ];
  }
}
class cc extends Zs {
}
cc.defaultProps = {
  type: "radio"
};
class hc extends Zs {
}
hc.defaultProps = {
  type: "switch"
};
class Be extends X {
  _renderLeading(t) {
    const {
      icon: e,
      avatar: n,
      toggleIcon: i,
      leading: r,
      leadingClass: o,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, u = [];
    if (i && u.push(/* @__PURE__ */ m(H, { content: i }, "toggleIcon")), a !== void 0 && u.push(/* @__PURE__ */ m(Zs, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && u.push(/* @__PURE__ */ m(Q, { className: "item-icon", icon: e }, "icon")), n) {
      const p = typeof n == "function" ? n.call(this, t) : n;
      p && (p.className = x("item-avatar", p.className), u.push(/* @__PURE__ */ m(Ys, { ...p }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ m(H, { content: r }, "leading") : null;
    return h && u.push(h), c ? u.length ? [
      /* @__PURE__ */ m("div", { className: x("item-leading", o), children: u }, "leading")
    ] : [] : u;
  }
  _renderContent(t, e) {
    const {
      textClass: n,
      titleClass: i,
      titleAttrs: r,
      subtitle: o,
      subtitleClass: a,
      url: l,
      target: c,
      content: u,
      contentClass: h,
      contentAttrs: p
    } = t, f = l && !e, g = f ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ m("div", { className: x("item-content", h), ...p, children: [
        _ ? /* @__PURE__ */ m(g, { className: x("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ m(H, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ m("div", { className: x("item-subtitle", a), children: /* @__PURE__ */ m(H, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ m("div", { className: x("item-text text", n), children: y }, "text") : null,
        u ? /* @__PURE__ */ m(H, { content: u }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: r,
      actions: o
    } = t, a = [];
    r && a.push(/* @__PURE__ */ m(Q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(St.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = n ? /* @__PURE__ */ m(H, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ m("div", { className: x("item-trailing", i), children: [
        a,
        l
      ] }, "trailing")
    ] : [] : a;
  }
  _render(t, e) {
    const {
      innerComponent: n,
      innerClass: i,
      innerAttrs: r,
      url: o,
      actions: a,
      target: l,
      active: c,
      disabled: u,
      divider: h,
      checked: p,
      multiline: f,
      title: g,
      subtitle: _,
      hint: y,
      selected: v
    } = t, b = n || (o && !a ? "a" : "div"), w = b === "a", S = W({
      key: "item",
      title: y,
      className: x("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: v,
        checked: p,
        multiline: f ?? !!(g && _),
        state: w && !u
      })
    }, w ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ m(b, { ...S, children: [
      this._renderLeading(t),
      this._renderContent(t, w),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Ts(n)]];
  }
}
class es extends st {
  constructor(t) {
    super(t), this._activeSet = new Ss(() => {
      const e = /* @__PURE__ */ new Set(), { active: n } = this.props;
      Array.isArray(n) ? n.forEach((r) => e.add(r)) : typeof n == "string" ? e.add(n) : n && Object.keys(n).forEach((r) => n[r] && e.add(r));
      const { activeMap: i } = this.state;
      return Object.keys(i).forEach((r) => i[r] ? e.add(r) : e.delete(r)), e;
    }, () => [this.state.activeMap, this.props.active]), this.state = {
      checked: {},
      activeMap: {}
    };
  }
  get namespace() {
    return `.zui.${this.constructor.NAME}.list_${this.gid}`;
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this.props.activeOnHover && !this.props.multipleActive && d(this.element).on(`mouseenter${this.namespace}`, "[z-item]", (t) => {
      const e = this._getItemFromEvent(t);
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && !this.isActive(e.key) && this.toggleActive(e.key, !0);
    });
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    d(this.element).off(this.namespace), (t = this.props.beforeDestroy) == null || t.call(this);
  }
  setItems(t, e) {
    const { onLoadFail: n } = this.props;
    this.setState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof n == "function" ? n.call(this, e) : n) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const n = await ai(t, [this], { throws: !0 });
        this.setItems((e == null ? void 0 : e.call(this, n)) || n);
      } catch (n) {
        this.setItems(void 0, n);
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    return t || !e || Array.isArray(e) || e === this._loadedSetting ? !1 : (this.load(), !0);
  }
  isChecked(t, e, n = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.state.checked[t] ?? i.checked ?? n;
  }
  isAllChecked() {
    return this._renderedItems.every(({ key: t }, e) => this.isChecked(t, e) === !0);
  }
  toggleAllChecked(t) {
    return t === void 0 && (t = !this.isAllChecked()), this.toggleChecked(this._renderedItems.map((e) => e.key), t);
  }
  async toggleChecked(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), n = t.reduce((i, r) => (i[r] = e, i), {});
    } else if (typeof t == "object")
      n = t;
    else {
      const i = this.isChecked(t);
      e === void 0 && (e = !i), n = { [t]: e };
    }
    Object.keys(n).length && await this.changeState((i) => ({
      checked: {
        ...i.checked,
        ...n
      }
    }), () => {
      var r;
      const i = this.state.checked;
      (r = this.props.onCheck) == null || r.call(this, n, Object.keys(i).filter((o) => i[o] === !0));
    });
  }
  getChecks() {
    return this._renderedItems.reduce((t, { key: e }, n) => (e !== void 0 && this.isChecked(e, n) === !0 && t.push(e), t), []);
  }
  isActive(t) {
    return typeof t == "object" && (t = t.key), this._activeSet.cache.has(t);
  }
  getActiveKeys() {
    return [...this._activeSet.value];
  }
  getActiveKey() {
    return this.getActiveKeys()[0];
  }
  async toggleActive(t, e) {
    typeof t == "string" && (t = [t]), t.length && (e = e ?? !this.isActive(t[0]), await this.changeState((n) => ({ activeMap: this.props.multipleActive ? t.reduce((r, o) => (r[o] = e, r), { ...n.activeMap }) : { [t[0]]: e } }), () => {
      var n;
      (n = this.props.onActive) == null || n.call(this, t, e);
    }));
  }
  getNextItem(t, e, n = 1, i = void 0) {
    i = i || this._renderedItems;
    const r = i.length;
    if (t === void 0)
      return i[n ? 0 : r - 1];
    let o = i.findIndex((l) => l.key === t);
    if (o < 0 || r < 2)
      return i[n ? 0 : r - 1];
    let a = 0;
    for (e = e || ((l) => l.type === "item" && !l.disabled); a < r; ) {
      o = (o + n + r) % r;
      const l = i[o];
      if (l && !l.disabled && e.call(this, l, o))
        return l;
      a++;
    }
  }
  getPrevItem(t, e) {
    return this.getNextItem(t, e, -1);
  }
  activeNext(t, e = 1) {
    const n = this.getNextItem(this.getActiveKey(), t, e);
    n && this.toggleActive(n.key);
  }
  activePrev(t) {
    this.activeNext(t, -1);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: n } = this.state;
    return n || (Array.isArray(e) ? e : []);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, n) {
    const { divider: i, multiline: r } = t;
    e = W({}, no({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      l && (e.checked = this.isChecked(e.key, n, e.checked), typeof l == "object" && (e.checkbox = e.checkbox ? d.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
    }
    return e.icon && (this._hasIcons = !0), e.checked !== void 0 && (this._hasCheckbox = !0), e;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && this._getRenderedItem(t, i, n);
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    let { checkOnClick: n } = this.props;
    if (n === "any" ? n = ".item-checkbox,.item-content,.item-icon" : n === !0 && (n = ".item-checkbox"), n && e && t.target.closest(n)) {
      this.toggleChecked(e.key), t.stopPropagation();
      return;
    }
    return e;
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      className: x(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
}
es.ItemComponents = {
  ...st.ItemComponents,
  default: X,
  item: Be,
  heading: Be
};
es.NAME = "list";
const mn = "```ZUI_STR\n";
class ss {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new ss(this._id, "session")), this._altStorage);
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
    const n = this._storage.getItem(this._getKey(t));
    if (typeof n == "string") {
      if (n.startsWith(mn))
        return n.substring(mn.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${mn}${e}` : JSON.stringify(e));
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
      const n = this._storage.key(e);
      if (n != null && n.startsWith(this._name)) {
        const i = this._storage.getItem(n);
        typeof i == "string" && t(n.substring(this._name.length + 1), JSON.parse(i));
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
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
}
const An = new ss("DEFAULT");
function uc(s, t = "local") {
  return new ss(s, t);
}
Object.assign(An, { create: uc });
function yo(s, t) {
  const { children: e } = s;
  e.length && e.forEach((n) => {
    t(n), yo(n, t);
  });
}
function dc(s, t) {
  let e = s.parent;
  for (; e; )
    t(e), e = e.parent;
}
function gn(s) {
  return s.split(":").reduce((t, e, n) => (t.push(n ? t[n - 1] + ":" + e : e), t), []);
}
function pi(s, t, e, n, i = 0, r) {
  return s.reduce((o, a, l) => {
    if (!a)
      return o;
    const c = String((t ? a[t] : a.key) ?? a.key ?? l), u = r ? `${r.keyPath}:${c}` : c, h = {
      key: c,
      level: i,
      keyPath: u,
      parentKey: r == null ? void 0 : r.keyPath,
      parent: r,
      data: a,
      children: []
    };
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? pi(a.items, t, e, o, i + 1, h) : o;
  }, n);
}
function fc(s, t, e = /* @__PURE__ */ new Map()) {
  return pi(s, t, (n, i) => (n.set(i.keyPath, i), n), e);
}
class xe extends es {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: n, nestedShow: i } = t;
    if (d.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), n && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const r = An.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && gn(o).forEach((a) => {
          r[a] = !0;
        });
      }), this._needInitChecks = !0;
    }
    this._renderedItemMap = /* @__PURE__ */ new Map(), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._handleNestedToggle = this._handleNestedToggle.bind(this), this._handleNestedCheck = this._handleNestedCheck.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return this.props.nestedShow ?? this.state.nestedShow ?? !1;
  }
  get isHoverTrigger() {
    return this.props.nestedTrigger === "hover";
  }
  setItems(t, e) {
    this.isRoot && (this._needInitChecks = !0), super.setItems(t, e);
  }
  getItemMap() {
    return this._itemMap || (this._itemMap = fc(this._items, this.props.itemKey)), this._itemMap;
  }
  getRenderedItem(t) {
    return this._renderedItemMap.get(t);
  }
  getItem(t) {
    var n;
    if (this._itemMap)
      return (n = this._itemMap.get(t)) == null ? void 0 : n.data;
    const e = this.getRenderedItem(t);
    return e ? e._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  async toggle(t, e) {
    const n = this.isExpanded(t);
    if (e === n)
      return;
    e === void 0 && (e = !n);
    const { nestedShow: i, onToggle: r, accordion: o } = this.props;
    r && r.call(this, t, e) === !1 || i === void 0 && await this.changeState((a) => {
      let l = {
        ...a.nestedShow,
        [t]: e
      };
      if (e && o) {
        let c = `${t.split(":").slice(0, -1).join(":")}`;
        c.length && (c += ":"), Object.keys(l).forEach((u) => {
          u !== t && u.startsWith(c) && (l[u] = !1);
        });
      }
      return l = e ? gn(t).reduce((c, u) => (c[u] = e, c), l) : l, this.isHoverTrigger && !e && Object.keys(l).forEach((c) => {
        !l[c] || !c.startsWith(`${t}:`) || gn(t).forEach((u) => {
          l[u] = !0;
        });
      }), {
        nestedShow: l
      };
    }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap().values()).reduce((t, { keyPath: e, data: n }) => {
      const i = this.state.checked[e];
      return (i === !0 || n.checked && i !== !1) === !0 && t.push(e), t;
    }, []);
  }
  isChecked(t, e, n = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.isRoot ? this.state.checked[t] ?? i.checked ?? n : this.props.checkedState[`${this.props.parentKey}:${t}`] ?? i.checked ?? n;
  }
  async toggleChecked(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), n = t.reduce((a, l) => (a[l] = e, a), {});
    } else
      typeof t == "object" ? n = t : (e === void 0 && (e = !this.isChecked(t)), n = { [t]: e });
    if (!Object.keys(n).length)
      return;
    if (this.isRoot) {
      const a = this.getItemMap();
      await this.changeState(({ checked: l }) => {
        const c = (u) => n[u.keyPath] ?? l[u.keyPath] ?? u.data.checked ?? !1;
        return Object.keys(n).forEach((u) => {
          e = n[u];
          const h = a.get(u);
          h && (yo(h, (p) => {
            c(p) !== e && (n[p.keyPath] = e);
          }), dc(h, (p) => {
            const { children: f } = p, g = f.reduce((_, y) => (c(y) && _++, _), 0);
            n[p.keyPath] = g === f.length ? !0 : g ? "indeterminate" : !1;
          }));
        }), {
          checked: {
            ...l,
            ...n
          }
        };
      }, () => {
        var c;
        const l = this.state.checked;
        (c = this.props.onCheck) == null || c.call(this, n, Object.keys(l).filter((u) => l[u] === !0));
      });
      return;
    }
    const { parentKey: i, onCheck: r } = this.props, o = Object.keys(n).reduce((a, l) => (a[`${i !== void 0 ? `${i}:` : ""}${l}`] = n[l], a), {});
    r.call(this, o, []);
  }
  getKeyPath(t) {
    if (this.isRoot)
      return t;
    const e = this.props.parentKey;
    return t.startsWith(e + ":") ? t : `${e}:${t}`;
  }
  isActive(t) {
    if (typeof t == "object") {
      const e = t._keyPath ?? t.key;
      if (e === void 0)
        return !1;
      t = e;
    }
    return this._activeSet.cache.has(this.getKeyPath(t));
  }
  async toggleActive(t, e) {
    if (typeof t == "string" && (t = [t]), t = t.map((n) => this.getKeyPath(n)), this.isRoot) {
      await super.toggleActive(t, e), this.props.toggleOnActive && t.forEach((n) => {
        this.isActive(n) && !this.isExpanded(n) && this.toggle(n, !0);
      });
      return;
    }
    this.props.onActive.call(this, t, e ?? !this.isActive(t[0]));
  }
  activeNext(t, e = 1) {
    const n = this.getNextItem(this.getActiveKey(), t, e);
    n && this.toggleActive(n._keyPath);
  }
  getNextItem(t, e, n = 1, i = void 0) {
    return i = i || pi(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
      _keyPath: o.keyPath,
      type: "item",
      ...o.data,
      ...this._renderedItemMap.get(o.keyPath),
      key: o.keyPath
    }), r), []), super.getNextItem(t, e, n, i);
  }
  _afterRender(t) {
    if (super._afterRender(t), this._needInitChecks) {
      const e = {};
      this.getItemMap().forEach((i) => {
        i.data.checked !== void 0 && (e[i.keyPath] = i.data.checked);
      }), this.toggleChecked(e), this._needInitChecks = !1;
    }
  }
  _preserveState() {
    this._storeID && An.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return W(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: n.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      checkedState: t.checkedState || this.state.checked,
      onCheck: a ? this._handleNestedCheck : t.onCheck,
      onToggle: a ? this._handleNestedToggle : t.onToggle,
      beforeRenderItem: a ? this._beforeRenderNestedItem : t.beforeRenderItem,
      active: a ? this.getActiveKeys() : t.active,
      onActive: a ? this.toggleActive.bind(this) : t.onActive
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ m(o, { ...r }, `nested:${n.key}`);
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ m("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ m("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ m(Q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ m("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItems(t) {
    const e = super._getItems(t);
    return this.isRoot && e !== this._items && (this._itemMap = void 0), e;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key, a = `${r !== void 0 ? `${r}:` : ""}${o}`;
    if (i.items) {
      const l = i.expanded ?? this.isExpanded(a);
      W(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return W(i, {
      _level: t.level,
      _keyPath: a,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t) {
    return this._renderedItemMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, n) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = W(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t, e) {
    const n = super._getItemFromEvent(t, e);
    if (!n)
      return;
    (t.type === "mouseenter" || t.type === "mouseleave") && (n.hover = t.type === "mouseenter");
    const { parentKey: i } = this.props;
    return { ...n, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${n.key}`, target: e || t.target };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, keyPath: r, target: o } = t, { nestedToggle: a } = this.props, { isHoverTrigger: l } = this;
    if (!e.items || i.defaultPrevented || l && n === void 0 || !l && i.type !== "click" || o.closest(".not-nested-toggle") || a && !e.disabled && !o.closest(a) || !a && !e.disabled && o.closest("a,.btn,.item-checkbox,.open-url") && !o.closest(".nested-toggle-icon,.item-icon"))
      return t;
    const c = typeof n == "boolean" ? n : void 0;
    this.toggle(r, c), i.preventDefault();
  }
  _handleNestedToggle(t, e) {
    this.toggle(t, e);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    return e && this._toggleFromEvent(e);
  }
  _handleHover(t) {
    var i;
    const e = this._getItemFromEvent(t);
    if (!e || ((i = this.props.onHoverItem) == null || i.call(this, e), !this.isHoverTrigger))
      return;
    const n = this._hoverInfo;
    n && (n.info.keyPath === e.keyPath ? clearTimeout(n.timer) : this._toggleFromEvent(n.info)), this._hoverInfo = {
      info: e,
      timer: window.setTimeout(() => {
        this._hoverInfo = void 0, this._toggleFromEvent(e);
      }, e.hover ? 0 : 200)
    };
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = W(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = x(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || this.isHoverTrigger), super._beforeRender(t);
  }
}
xe.defaultProps = {
  ...es.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
xe.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive"];
let J = class extends xe {
  _getClassName(t) {
    return [super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact }];
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: n, maxHeight: i } = t, r = W({}, e, n || i ? { style: { height: n, maxHeight: i } } : null);
    return r.className = x(this._getWrapClass(t), r.className), r;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ m(H, { content: t.header }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ m(H, { content: t.footer }, "footer");
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ m("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : super.render(t);
  }
};
J.NAME = "menu";
J.TAG = "menu";
J.inheritNestedProps = [...xe.inheritNestedProps, "compact"];
J.ItemComponents = {
  ...xe.ItemComponents,
  item: [Be, { innerComponent: "a" }]
};
J.defaultProps = {
  ...xe.defaultProps,
  scrollbarHover: !0
};
let Xs = class extends B {
  constructor(t) {
    super(t), this._input = q(), this._timer = 0, this._handleClearBtnClick = (e) => {
      e.stopPropagation(), this.clear(e);
    }, this._handleChange = (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r, delay: o } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (o ? (this._clearTimer(), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, o)) : r(i, e));
      });
    }, this._handleFocus = (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${ut()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = lo(t, {
        clear: {
          keys: "Escape",
          handler: (n) => {
            this.clear(n);
          }
        },
        enter: {
          keys: "Enter",
          handler: (n) => {
            var i, r;
            (r = (i = this.props).onEnter) == null || r.call(i, this.state.value, n);
          }
        }
      });
      e && (this._hotkeysScope = `SearchBox_${this._gid}`, d(this.input).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentWillUnmount() {
    this._hotkeysScope && d(this.input).unbindHotkeys(this._hotkeysScope);
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
  blur() {
    var t;
    (t = this.input) == null || t.blur();
  }
  clear(t) {
    const e = this.state.value;
    this.setState({ value: "" }, () => {
      const { onChange: n, onClear: i } = this.props;
      i == null || i(t), this.focus(), e.trim() !== "" && (n == null || n("", t));
    });
  }
  _clearTimer() {
    this._timer && clearTimeout(this._timer), this._timer = 0;
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: p, clearIcon: f, value: g, compact: _, prefixClass: y, suffixClass: v } = t, { focus: b, value: w } = e, { id: S } = this, k = g ?? w, T = typeof k != "string" || !k.trim().length;
    let A, I, M;
    return p && (M = p === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(Q, { icon: p })), !h && p && (A = /* @__PURE__ */ m("label", { for: S, class: x("input-control-prefix", y), children: M }, "prefix")), f && !T ? I = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(Q, { icon: f })
      }
    ) : h && p && (I = M), I && (I = /* @__PURE__ */ m("label", { for: S, class: x("input-control-suffix", v), children: I }, "suffix")), /* @__PURE__ */ m("div", { class: x("search-box input-control", r, { focus: b, empty: T, compact: _, "has-prefix-icon": A, "has-suffix-icon": I }), style: o, children: [
      A,
      /* @__PURE__ */ m(
        "input",
        {
          ref: this._input,
          id: S,
          type: "text",
          class: x("form-control", { "rounded-full": c, "size-sm": _ }, i),
          style: n,
          placeholder: u,
          disabled: l,
          readonly: a,
          value: k,
          onInput: this._handleChange,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleFocus
        },
        "input"
      ),
      I
    ] });
  }
};
Xs.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: Xs
}, Symbol.toStringTag, { value: "Module" }));
let _t = class extends J {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const n = this.constructor.getSearchKeys(e);
      this._searchKeys = n, this.setState({ search: n.join(" ") });
    }, this.state.search = t.search ?? t.defaultSearch, this._searchKeys = this.constructor.getSearchKeys(this.state.search), this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
  }
  componentWillUpdate(t) {
    this.isRoot && t.search !== void 0 && t.search !== this.props.search && (this._searchKeys = this.constructor.getSearchKeys(t.search));
  }
  componentDidMount() {
    super.componentDidMount(), this._updateMatchedParents();
  }
  componentDidUpdate() {
    super.componentDidUpdate(), this._updateMatchedParents();
  }
  isExpanded(t) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t);
  }
  _updateMatchedParents() {
    var n;
    if (!this.isRoot)
      return;
    const t = d(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((n = this._searchKeys) != null && n.length) && !e.length && !t.children(".item").not(".is-not-match").length);
  }
  _isItemMatch(t, e, n, i) {
    const { isItemMatch: r } = t, o = r ? r.call(this, e, this._searchKeys, n, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (this.isRoot && o && i !== void 0) {
      let a = "";
      String(i).split(":").forEach((l) => {
        a += `${a.length ? ":" : ""}${l}`, this._matchedParents.add(a);
      });
    }
    return o;
  }
  _isNestedItemMatch(t, e, n, i) {
    return this._isItemMatch(this.props, t, n, i);
  }
  _getNestedProps(t, e, n, i) {
    const r = super._getNestedProps(t, e, n, i);
    return this.isRoot && (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")), r;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && (this.isRoot && this.props.limit && this._showCount >= this.props.limit ? !1 : (i.hidden = !this._isItemMatch(t, e, n, t.parentKey), i.hidden || this._showCount++, i));
  }
  _renderItem(t, e, n) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, n);
  }
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return x(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _renderSearchBox(t) {
    const { searchBox: e } = t;
    if (!e || !this.isRoot)
      return null;
    const n = {
      compact: !0,
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && d.extend(n, e), t.search !== void 0 && (n.value = this._searchKeys.join(" "), n.disabled = !0), /* @__PURE__ */ m(Xs, { ...n }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, n = this.isRoot && t.searchBox && t.searchPlacement !== "bottom", { noMatchHint: i } = t;
    return !e && !n && !i ? null : [
      i ? /* @__PURE__ */ m("div", { className: "search-menu-no-match-hint", children: i }, "noMatchHint") : null,
      e || n ? /* @__PURE__ */ m("header", { className: "search-menu-header", children: [
        e ? super._renderWrapperHeader(t) : null,
        n ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, n = this.isRoot && t.searchBox && t.searchPlacement === "bottom";
    return !e && !n ? null : /* @__PURE__ */ m("footer", { className: "search-menu-footer", children: [
      e ? super._renderWrapperFooter(t) : null,
      this._renderSearchBox(t)
    ] }, "footer");
  }
  _beforeRender(t) {
    return this.isRoot && (this._matchedParents = /* @__PURE__ */ new Set(), this._showCount = 0), super._beforeRender(t);
  }
  /**
   * Check whether item is matched.
   *
   * @param item          Item to match.
   * @param searchKeys    Search keys.
   * @returns Whether item is matched.
   */
  static isItemMatch(t, e, n = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => n.some((r) => {
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
    return d.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, n = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((u, h) => {
        h && (o.push(/* @__PURE__ */ m("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
_t.inheritNestedProps = [...J.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
_t.defaultProps = {
  ...J.defaultProps,
  defaultNestedShow: !0,
  wrap: !0
};
const mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: J,
  SearchMenu: _t
}, Symbol.toStringTag, { value: "Module" }));
class mi extends U {
}
mi.NAME = "Menu";
mi.Component = J;
mi.replace = J.TAG;
class gi extends U {
}
gi.NAME = "SearchMenu";
gi.Component = _t;
gi.replace = _t.TAG;
ot(mc);
function gc({
  className: s,
  style: t,
  actions: e,
  heading: n,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: c,
  iconClass: u,
  ...h
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ m(K, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : bt(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ m(K, { ...a, onClick: l }));
  const f = St.render(e, []);
  return /* @__PURE__ */ m("div", { className: x("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ m(Q, { icon: c, className: x("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ m(H, { content: i }) : /* @__PURE__ */ m("div", { className: x("alert-content", r), children: [
      typeof n != "string" ? /* @__PURE__ */ m(H, { content: n }) : n && /* @__PURE__ */ m("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      n ? f : null
    ] }),
    n ? null : f,
    p,
    o
  ] });
}
function _c(s) {
  if (s === "center")
    return "fade-from-center";
  if (s) {
    if (s.includes("top"))
      return "fade-from-top";
    if (s.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function yc({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ m(
    gc,
    {
      className: x("messager", r, t, n === !0 ? _c(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var vc = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, bc = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Me = (s, t, e) => (vc(s, t, "access private method"), e), ee, fe;
class _i extends U {
  constructor() {
    super(...arguments), bc(this, ee), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      d(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Me(this, ee, fe).call(this, () => {
      this._show = !0, this.render(), Me(this, ee, fe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Me(this, ee, fe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Me(this, ee, fe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Me(this, ee, fe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ee = /* @__PURE__ */ new WeakSet();
fe = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
_i.NAME = "MessagerItem";
_i.Component = yc;
const Qs = class vo extends Ht {
  get isShown() {
    var t;
    return !!((t = this._item) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), this._getItem().show();
  }
  hide() {
    var t;
    (t = this._item) == null || t.hide();
  }
  _getItem() {
    if (this._item)
      this._item.setOptions(this.options);
    else {
      const t = this._getHolder(), e = new _i(t, this.options);
      e.on("hidden", () => {
        e.destroy(), t == null || t.remove(), this._holder = void 0, this._item = void 0;
      }), this._item = e;
    }
    return this._item;
  }
  _getHolder() {
    if (this._holder)
      return this._holder;
    const { placement: t = "top" } = this.options;
    let e = this.$element.find(`.messagers-${t}`);
    e.length || (e = d(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
    let n = e.find(`#messager-${this.gid}`);
    return n.length || (n = d(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = n[0]), n[0];
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = vo.ensure(e || "body", { key: `messager_${ut()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Qs.NAME = "messager";
Qs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Qs.MULTI_INSTANCE = !0;
let Mu = Qs;
class yi extends B {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ m("div", { class: x("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ m("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
yi.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: yi
}, Symbol.toStringTag, { value: "Module" }));
ot(wc);
let tn = class extends B {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, p = n / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = n * f);
    const g = (n - f) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ m("circle", { cx: p, cy: p, r: g, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: p, cy: p, r: g, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ m("text", { x: c ?? p, y: u ?? p + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
tn.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class bo extends U {
}
bo.NAME = "ProgressCircle";
bo.Component = tn;
const Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: tn
}, Symbol.toStringTag, { value: "Module" }));
ot(Cc);
class wo extends U {
}
wo.NAME = "Avatar";
wo.Component = Ys;
ot(ac);
class Co extends U {
}
Co.NAME = "BtnGroup";
Co.Component = Ct;
const Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Ct
}, Symbol.toStringTag, { value: "Module" }));
ot(Sc);
const So = Symbol("EVENT_PICK");
class vi extends B {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!d(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = d(t.target), a = i == null ? void 0 : i(t);
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
    const { state: e, className: n, disabled: i, readonly: r, pickerName: o, empty: a } = t, { open: l } = e;
    return x(
      "pick",
      n,
      o ? `${o}-pick` : "",
      l && "is-open focus",
      i && "disabled",
      r && "readonly",
      a ? "is-empty-value" : ""
    );
  }
  _getProps(t) {
    const { id: e, style: n, attrs: i } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: n,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: e, state: n } = t;
    return e ?? n.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o } = t;
    if (e)
      if (this._hasInput)
        d(`#${o}`).val(n);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: e, value: n, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    d(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, n) => {
      if (typeof n == "symbol")
        return;
      const i = e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    d(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && d(`#${e}`).trigger("change", So), this._skipTriggerChange = !1);
  }
  render(t) {
    return wt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Gt = Math.min, ct = Math.max, Es = Math.round, hs = Math.floor, Yt = (s) => ({
  x: s,
  y: s
}), kc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, xc = {
  start: "end",
  end: "start"
};
function In(s, t, e) {
  return ct(s, Gt(t, e));
}
function Te(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Jt(s) {
  return s.split("-")[0];
}
function Ne(s) {
  return s.split("-")[1];
}
function ko(s) {
  return s === "x" ? "y" : "x";
}
function bi(s) {
  return s === "y" ? "height" : "width";
}
function ns(s) {
  return ["top", "bottom"].includes(Jt(s)) ? "y" : "x";
}
function wi(s) {
  return ko(ns(s));
}
function Tc(s, t, e) {
  e === void 0 && (e = !1);
  const n = Ne(s), i = wi(s), r = bi(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = $s(o)), [o, $s(o)];
}
function Nc(s) {
  const t = $s(s);
  return [Pn(s), t, Pn(t)];
}
function Pn(s) {
  return s.replace(/start|end/g, (t) => xc[t]);
}
function Ec(s, t, e) {
  const n = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (s) {
    case "top":
    case "bottom":
      return e ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? r : o;
    default:
      return [];
  }
}
function $c(s, t, e, n) {
  const i = Ne(s);
  let r = Ec(Jt(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Pn)))), r;
}
function $s(s) {
  return s.replace(/left|right|bottom|top/g, (t) => kc[t]);
}
function Mc(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function xo(s) {
  return typeof s != "number" ? Mc(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Ms(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function lr(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = ns(t), o = wi(t), a = bi(o), l = Jt(t), c = r === "y", u = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      f = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (Ne(t)) {
    case "start":
      f[o] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += p * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const Ac = async (s, t, e) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: s,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: h
  } = lr(c, n, l), p = n, f = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: v
    } = a[_], {
      x: b,
      y: w,
      data: S,
      reset: k
    } = await v({
      x: u,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: f,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    u = b ?? u, h = w ?? h, f = {
      ...f,
      [y]: {
        ...f[y],
        ...S
      }
    }, k && g <= 50 && (g++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (c = k.rects === !0 ? await o.getElementRects({
      reference: s,
      floating: t,
      strategy: i
    }) : k.rects), {
      x: u,
      y: h
    } = lr(c, p, l)), _ = -1);
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function Ci(s, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: r,
    rects: o,
    elements: a,
    strategy: l
  } = s, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = Te(t, s), g = xo(f), y = a[p ? h === "floating" ? "reference" : "floating" : h], v = Ms(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = h === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), S = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Ms(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (v.top - k.top + g.top) / S.y,
    bottom: (k.bottom - v.bottom + g.bottom) / S.y,
    left: (v.left - k.left + g.left) / S.x,
    right: (k.right - v.right + g.right) / S.x
  };
}
const Ic = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: r,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Te(s, t) || {};
    if (c == null)
      return {};
    const h = xo(u), p = {
      x: e,
      y: n
    }, f = wi(i), g = bi(f), _ = await o.getDimensions(c), y = f === "y", v = y ? "top" : "left", b = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", S = r.reference[g] + r.reference[f] - p[f] - r.floating[g], k = p[f] - r.reference[f], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let A = T ? T[w] : 0;
    (!A || !await (o.isElement == null ? void 0 : o.isElement(T))) && (A = a.floating[w] || r.floating[g]);
    const I = S / 2 - k / 2, M = A / 2 - _[g] / 2 - 1, E = Gt(h[v], M), P = Gt(h[b], M), R = E, L = A - _[g] - P, $ = A / 2 - _[g] / 2 + I, F = In(R, $, L), tt = !l.arrow && Ne(i) != null && $ !== F && r.reference[g] / 2 - ($ < R ? E : P) - _[g] / 2 < 0, mt = tt ? $ < R ? $ - R : $ - L : 0;
    return {
      [f]: p[f] + mt,
      data: {
        [f]: F,
        centerOffset: $ - F - mt,
        ...tt && {
          alignmentOffset: mt
        }
      },
      reset: tt
    };
  }
}), Pc = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e, n;
      const {
        placement: i,
        middlewareData: r,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: _ = !0,
        ...y
      } = Te(s, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const v = Jt(i), b = Jt(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = p || (b || !_ ? [$s(a)] : Nc(a));
      !p && g !== "none" && S.push(...$c(a, _, g, w));
      const k = [a, ...S], T = await Ci(t, y), A = [];
      let I = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (u && A.push(T[v]), h) {
        const R = Tc(i, o, w);
        A.push(T[R[0]], T[R[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var M, E;
        const R = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, L = k[R];
        if (L)
          return {
            data: {
              index: R,
              overflows: I
            },
            reset: {
              placement: L
            }
          };
        let $ = (E = I.filter((F) => F.overflows[0] <= 0).sort((F, tt) => F.overflows[1] - tt.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var P;
              const F = (P = I.map((tt) => [tt.placement, tt.overflows.filter((mt) => mt > 0).reduce((mt, ln) => mt + ln, 0)]).sort((tt, mt) => tt[1] - mt[1])[0]) == null ? void 0 : P[0];
              F && ($ = F);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (i !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function Rc(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Jt(e), a = Ne(e), l = ns(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = Te(t, s);
  let {
    mainAxis: p,
    crossAxis: f,
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
  return a && typeof g == "number" && (f = a === "end" ? g * -1 : g), l ? {
    x: f * u,
    y: p * c
  } : {
    x: p * c,
    y: f * u
  };
}
const Dc = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      var e, n;
      const {
        x: i,
        y: r,
        placement: o,
        middlewareData: a
      } = t, l = await Rc(t, s);
      return o === ((e = a.offset) == null ? void 0 : e.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, Lc = function(s) {
  return s === void 0 && (s = {}), {
    name: "shift",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x: v,
              y: b
            } = y;
            return {
              x: v,
              y: b
            };
          }
        },
        ...l
      } = Te(s, t), c = {
        x: e,
        y: n
      }, u = await Ci(t, l), h = ns(Jt(i)), p = ko(h);
      let f = c[p], g = c[h];
      if (r) {
        const y = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", b = f + u[y], w = f - u[v];
        f = In(b, f, w);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = g + u[y], w = g - u[v];
        g = In(b, g, w);
      }
      const _ = a.fn({
        ...t,
        [p]: f,
        [h]: g
      });
      return {
        ..._,
        data: {
          x: _.x - e,
          y: _.y - n
        }
      };
    }
  };
}, zc = function(s) {
  return s === void 0 && (s = {}), {
    name: "size",
    options: s,
    async fn(t) {
      const {
        placement: e,
        rects: n,
        platform: i,
        elements: r
      } = t, {
        apply: o = () => {
        },
        ...a
      } = Te(s, t), l = await Ci(t, a), c = Jt(e), u = Ne(e), h = ns(e) === "y", {
        width: p,
        height: f
      } = n.floating;
      let g, _;
      c === "top" || c === "bottom" ? (g = c, _ = u === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, g = u === "end" ? "top" : "bottom");
      const y = f - l[g], v = p - l[_], b = !t.middlewareData.shift;
      let w = y, S = v;
      if (h) {
        const T = p - l.left - l.right;
        S = u || b ? Gt(v, T) : T;
      } else {
        const T = f - l.top - l.bottom;
        w = u || b ? Gt(y, T) : T;
      }
      if (b && !u) {
        const T = ct(l.left, 0), A = ct(l.right, 0), I = ct(l.top, 0), M = ct(l.bottom, 0);
        h ? S = p - 2 * (T !== 0 || A !== 0 ? T + A : ct(l.left, l.right)) : w = f - 2 * (I !== 0 || M !== 0 ? I + M : ct(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: S,
        availableHeight: w
      });
      const k = await i.getDimensions(r.floating);
      return p !== k.width || f !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ee(s) {
  return To(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function dt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(s) {
  var t;
  return (t = (To(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function To(s) {
  return s instanceof Node || s instanceof dt(s).Node;
}
function Tt(s) {
  return s instanceof Element || s instanceof dt(s).Element;
}
function Nt(s) {
  return s instanceof HTMLElement || s instanceof dt(s).HTMLElement;
}
function cr(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof dt(s).ShadowRoot;
}
function is(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = kt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Fc(s) {
  return ["table", "td", "th"].includes(Ee(s));
}
function Si(s) {
  const t = ki(), e = kt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Oc(s) {
  let t = Zt(s);
  for (; Nt(t) && !Ce(t); ) {
    if (Si(t))
      return t;
    t = Zt(t);
  }
  return null;
}
function ki() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ce(s) {
  return ["html", "body", "#document"].includes(Ee(s));
}
function kt(s) {
  return dt(s).getComputedStyle(s);
}
function en(s) {
  return Tt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Zt(s) {
  if (Ee(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    cr(s) && s.host || // Fallback.
    Wt(s)
  );
  return cr(t) ? t.host : t;
}
function No(s) {
  const t = Zt(s);
  return Ce(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : Nt(t) && is(t) ? t : No(t);
}
function Ve(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = No(s), r = i === ((n = s.ownerDocument) == null ? void 0 : n.body), o = dt(i);
  return r ? t.concat(o, o.visualViewport || [], is(i) ? i : [], o.frameElement && e ? Ve(o.frameElement) : []) : t.concat(i, Ve(i, [], e));
}
function Eo(s) {
  const t = kt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Nt(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Es(e) !== r || Es(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function xi(s) {
  return Tt(s) ? s : s.contextElement;
}
function ve(s) {
  const t = xi(s);
  if (!Nt(t))
    return Yt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Eo(t);
  let o = (r ? Es(e.width) : e.width) / n, a = (r ? Es(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Hc = /* @__PURE__ */ Yt(0);
function $o(s) {
  const t = dt(s);
  return !ki() || !t.visualViewport ? Hc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wc(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== dt(s) ? !1 : t;
}
function le(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = xi(s);
  let o = Yt(1);
  t && (n ? Tt(n) && (o = ve(n)) : o = ve(s));
  const a = Wc(r, e, n) ? $o(r) : Yt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const p = dt(r), f = n && Tt(n) ? dt(n) : n;
    let g = p, _ = g.frameElement;
    for (; _ && n && f !== g; ) {
      const y = ve(_), v = _.getBoundingClientRect(), b = kt(_), w = v.left + (_.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = v.top + (_.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, u *= y.x, h *= y.y, l += w, c += S, g = dt(_), _ = g.frameElement;
    }
  }
  return Ms({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
const jc = [":popover-open", ":modal"];
function Ti(s) {
  return jc.some((t) => {
    try {
      return s.matches(t);
    } catch {
      return !1;
    }
  });
}
function Bc(s) {
  let {
    elements: t,
    rect: e,
    offsetParent: n,
    strategy: i
  } = s;
  const r = i === "fixed", o = Wt(n), a = t ? Ti(t.floating) : !1;
  if (n === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Yt(1);
  const u = Yt(0), h = Nt(n);
  if ((h || !h && !r) && ((Ee(n) !== "body" || is(o)) && (l = en(n)), Nt(n))) {
    const p = le(n);
    c = ve(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + u.y
  };
}
function Vc(s) {
  return Array.from(s.getClientRects());
}
function Mo(s) {
  return le(Wt(s)).left + en(s).scrollLeft;
}
function Uc(s) {
  const t = Wt(s), e = en(s), n = s.ownerDocument.body, i = ct(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ct(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Mo(s);
  const a = -e.scrollTop;
  return kt(n).direction === "rtl" && (o += ct(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Kc(s, t) {
  const e = dt(s), n = Wt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = ki();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function qc(s, t) {
  const e = le(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = Nt(s) ? ve(s) : Yt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function hr(s, t, e) {
  let n;
  if (t === "viewport")
    n = Kc(s, e);
  else if (t === "document")
    n = Uc(Wt(s));
  else if (Tt(t))
    n = qc(t, e);
  else {
    const i = $o(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Ms(n);
}
function Ao(s, t) {
  const e = Zt(s);
  return e === t || !Tt(e) || Ce(e) ? !1 : kt(e).position === "fixed" || Ao(e, t);
}
function Gc(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Ve(s, [], !1).filter((a) => Tt(a) && Ee(a) !== "body"), i = null;
  const r = kt(s).position === "fixed";
  let o = r ? Zt(s) : s;
  for (; Tt(o) && !Ce(o); ) {
    const a = kt(o), l = Si(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || is(o) && !l && Ao(s, o)) ? n = n.filter((u) => u !== o) : i = a, o = Zt(o);
  }
  return t.set(s, n), n;
}
function Yc(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Ti(t) ? [] : Gc(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, u) => {
    const h = hr(t, u, i);
    return c.top = ct(h.top, c.top), c.right = Gt(h.right, c.right), c.bottom = Gt(h.bottom, c.bottom), c.left = ct(h.left, c.left), c;
  }, hr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Jc(s) {
  const {
    width: t,
    height: e
  } = Eo(s);
  return {
    width: t,
    height: e
  };
}
function Zc(s, t, e) {
  const n = Nt(t), i = Wt(t), r = e === "fixed", o = le(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yt(0);
  if (n || !n && !r)
    if ((Ee(t) !== "body" || is(i)) && (a = en(t)), n) {
      const h = le(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Mo(i));
  const c = o.left + a.scrollLeft - l.x, u = o.top + a.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: o.width,
    height: o.height
  };
}
function _n(s) {
  return kt(s).position === "static";
}
function ur(s, t) {
  return !Nt(s) || kt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Io(s, t) {
  const e = dt(s);
  if (Ti(s))
    return e;
  if (!Nt(s)) {
    let i = Zt(s);
    for (; i && !Ce(i); ) {
      if (Tt(i) && !_n(i))
        return i;
      i = Zt(i);
    }
    return e;
  }
  let n = ur(s, t);
  for (; n && Fc(n) && _n(n); )
    n = ur(n, t);
  return n && Ce(n) && _n(n) && !Si(n) ? e : n || Oc(s) || e;
}
const Xc = async function(s) {
  const t = this.getOffsetParent || Io, e = this.getDimensions, n = await e(s.floating);
  return {
    reference: Zc(s.reference, await t(s.floating), s.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Qc(s) {
  return kt(s).direction === "rtl";
}
const th = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bc,
  getDocumentElement: Wt,
  getClippingRect: Yc,
  getOffsetParent: Io,
  getElementRects: Xc,
  getClientRects: Vc,
  getDimensions: Jc,
  getScale: ve,
  isElement: Tt,
  isRTL: Qc
};
function eh(s, t) {
  let e = null, n;
  const i = Wt(s);
  function r() {
    var a;
    clearTimeout(n), (a = e) == null || a.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: u,
      width: h,
      height: p
    } = s.getBoundingClientRect();
    if (a || t(), !h || !p)
      return;
    const f = hs(u), g = hs(i.clientWidth - (c + h)), _ = hs(i.clientHeight - (u + p)), y = hs(c), b = {
      rootMargin: -f + "px " + -g + "px " + -_ + "px " + -y + "px",
      threshold: ct(0, Gt(1, l)) || 1
    };
    let w = !0;
    function S(k) {
      const T = k[0].intersectionRatio;
      if (T !== l) {
        if (!w)
          return o();
        T ? o(!1, T) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(S, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Po(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = xi(s), u = i || r ? [...c ? Ve(c) : [], ...Ve(t)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", e, {
      passive: !0
    }), r && v.addEventListener("resize", e);
  });
  const h = c && a ? eh(c, e) : null;
  let p = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let g, _ = l ? le(s) : null;
  l && y();
  function y() {
    const v = le(s);
    _ && (v.x !== _.x || v.y !== _.y || v.width !== _.width || v.height !== _.height) && e(), _ = v, g = requestAnimationFrame(y);
  }
  return e(), () => {
    var v;
    u.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h == null || h(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(g);
  };
}
const Ni = Dc, Ei = Lc, $i = Pc, Ro = zc, sh = Ic, Mi = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: th,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Ac(s, t, {
    ...i,
    platform: r
  });
};
class Do extends B {
  constructor(t) {
    super(t), this._ref = q(), this._handleDocClick = (e) => {
      const { state: { open: n }, id: i, togglePop: r } = this.props, o = d(e.target);
      n !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return d(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, n = d(t.target), i = n.closest("[data-pick-value]");
    if (i.length)
      return t.stopPropagation(), e(!1, { value: `${i.dataset("pickValue")}` });
    if (n.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: n, pickerName: i, empty: r } = t, { open: o } = n;
    return x(
      "pick-pop",
      i ? `${i}-pick-pop` : "",
      e,
      o === !0 && "in",
      r ? "is-empty-value" : ""
    );
  }
  _getProps(t) {
    const {
      id: e,
      style: n,
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    } = t, l = d.extend({
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    }, n);
    return {
      id: `pick-pop-${e}`,
      className: this._getClass(t),
      style: l,
      ref: this._ref,
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!this._container) {
      const e = d(t.container || "body");
      let n = e.find(".pick-container");
      n.length || (n = d("<div>").addClass("pick-container").appendTo(e)), this._container = n[0];
    }
    return this._container;
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  _getStyle(t = {}, e) {
    var c;
    const n = (c = this.trigger) == null ? void 0 : c.getBoundingClientRect();
    if (!n)
      return {};
    const { width: i, minWidth: r, maxWidth: o, maxHeight: a } = this.props, l = n.width;
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = fs(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
      let u;
      if (e.includes("bottom"))
        u = window.innerHeight - n.bottom - 2;
      else {
        const h = this.element.getBoundingClientRect().height;
        u = n.top, h > u && typeof t.top == "number" && (t.top += h - u);
      }
      u && (t.maxHeight = typeof a == "number" ? Math.min(u, a) : u);
    } else
      a && (t.maxHeight = a);
    return t;
  }
  layout() {
    const { element: t, trigger: e, props: n } = this, { state: i } = n;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = Po(e, t, () => {
      const { placement: r, width: o } = n;
      Mi(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? $i() : null, Ei(), Ni(1)].filter(Boolean)
      }).then(({ x: a, y: l, placement: c }) => {
        var u, h;
        if (ue(e) || !Gs(e)) {
          d(t).css({ display: "none" });
          return;
        }
        d(t).css(this._getStyle({
          left: a,
          top: l
        }, c)), (h = (u = this.props).onLayout) == null || h.call(u, t);
      }), o === "100%" && d(t).css(this._getStyle());
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), d(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, n;
    d(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, d(`#pick-pop-${this.props.id}`).remove(), (n = (e = this.props).beforeDestroy) == null || n.call(e);
  }
  render(t) {
    return Ql(this._render(t), this._getContainer(t));
  }
}
let yt = class extends B {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = q(), this._trigger = q(), this.toggle = async (e, n) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      this._toggleTimer && (clearTimeout(this._toggleTimer), this._toggleTimer = 0);
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await ks(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await ks(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1
    }, this._id = t.id ?? `_pick${ut()}`, this.changeState = this.changeState.bind(this);
  }
  get id() {
    return this._id;
  }
  get pop() {
    return this._pop.current;
  }
  get value() {
    return this.state.value;
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
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
      ref: this._trigger,
      state: e,
      className: t.className,
      pickerName: t.pickerName,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      disabled: t.disabled,
      readonly: t.readonly,
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
      pickerName: t.pickerName,
      style: t.popStyle,
      disabled: t.disabled,
      readonly: t.readonly,
      changeState: this.changeState,
      togglePop: this.toggle,
      placement: t.popPlacement,
      container: t.popContainer,
      width: t.popWidth,
      height: t.popHeight,
      minHeight: t.popMinHeight,
      maxHeight: t.popMaxHeight,
      maxWidth: t.popMaxWidth,
      minWidth: t.popMinWidth,
      limitInScreen: t.limitPopInScreen
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
  _isEmptyValue() {
    const { value: t } = this.state;
    return t == null || t === "";
  }
  _handleChange(t, e) {
    const { onChange: n } = this.props;
    n && n.call(this, t, e);
  }
  _handlePopToggle(t) {
    const { onPopShown: e, onPopHidden: n } = this.props;
    t && e ? e.call(this) : !t && n && n.call(this);
  }
  setValue(t, e) {
    if (e) {
      const n = this._trigger.current;
      n && (n._skipTriggerChange = t);
    }
    return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: n } = this.state, { open: i } = e;
    if (n === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r.call(this) : !i && o && o.call(this);
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: r, value: o } = e;
    !!n != !!r && this._handlePopToggle(!!n), i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), this._toggleTimer && clearTimeout(this._toggleTimer);
    const t = this._pop.current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n && (!t.hidePopWhenEmpty || !this._isEmptyValue())) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ m(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ m(ke, { children: [
      /* @__PURE__ */ m(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
yt.Trigger = vi;
yt.Pop = Do;
yt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  limitPopInScreen: !0,
  clickType: "open"
};
let Lo = class extends yt {
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
    const { syncBackground: t, syncBorder: e, syncColor: n, syncValue: i } = this.props, r = this.state.value || "";
    if (t && d(t).css("backgroundColor", r), e && d(e).css("borderColor", r), n && d(n).css("color", r), i) {
      const o = d(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ m(Q, { icon: n }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = d.extend({
      color: e.value
    }, n.style), n.className = x("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ m(Q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(Q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Lo.defaultProps = {
  ...yt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class zo extends U {
}
zo.NAME = "ColorPicker";
zo.Component = Lo;
const Ue = 24 * 60 * 60 * 1e3, z = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), nh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(z(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, re = (s, t = /* @__PURE__ */ new Date()) => z(s).toDateString() === z(t).toDateString(), Rn = (s, t = /* @__PURE__ */ new Date()) => z(s).getFullYear() === z(t).getFullYear(), Fo = (s, t = /* @__PURE__ */ new Date()) => (s = z(s), t = z(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Ru = (s, t = /* @__PURE__ */ new Date()) => {
  s = z(s), t = z(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Du = (s, t) => re(z(t), s), Lu = (s, t) => re(z(t).getTime() - Ue, s), zu = (s, t) => re(z(t).getTime() + Ue, s), Oo = (s) => !Number.isNaN(z(s).getTime()), pt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = z(s), !Oo(s))
    return e;
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Rn(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Fu = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = pt(s, Rn(s) ? n.month : n.full);
  if (re(s, t))
    return i;
  const r = pt(t, Rn(s, t) ? Fo(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
class Ho extends B {
  constructor() {
    super(...arguments), this._ref = q(), this._handleClickItem = (t, e) => {
      var n, i;
      (i = (n = this.props).onChange) == null || i.call(n, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      d(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
    }, 100);
  }
  render(t) {
    const { minuteStep: e = 5, hour: n, minute: i } = t, r = [], o = [];
    for (let l = 0; l < 24; ++l)
      r.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: n === l });
    for (let l = 0; l < 60; l += e)
      o.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: i === l });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ m(
        J,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        J,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const dr = (s) => {
  if (!s)
    return;
  const t = z(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Wo = class extends yt {
  constructor(t) {
    super(t), this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (n) => {
      this.setTime(n.target.value);
    }, this._handleSetTime = (n, i) => {
      this.setTime({ [n]: String(i) });
    }, this._handleClearBtnClick = () => {
      this.setTime("");
    };
    const e = this.state;
    e.value === "now" && (e.value = pt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled || this.props.readonly)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: c = +a, minute: u = +l } = t;
      e = `${c}:${u}`;
    }
    const n = dr(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? pt(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = dr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ m("i", { class: "i-time" }) : h = /* @__PURE__ */ m(Q, { icon: i })), [
      /* @__PURE__ */ m("input", { id: u, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ m("label", { for: u, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ m(Ho, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Wo.defaultProps = {
  ...yt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
j.addLang({
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
const ih = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Ue;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, fr = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => pt(e, t)));
class rh extends B {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const n = d(t.target).closest(".mini-calendar-day").dataset("date");
      n && e(n);
    };
  }
  render(t) {
    var M, E;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: n = 1,
      weekNames: i = j.getLang("weekNames"),
      monthNames: r = j.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h
    } = t, p = [], f = "btn ghost square rounded-full";
    for (let P = 0; P < 7; P++) {
      const R = (n + P) % 7;
      p.push(/* @__PURE__ */ m("div", { className: x("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ m("div", { children: i ? i[R] : R }) }, P));
    }
    const { startTime: g, days: _, firstDay: y } = ih(o, a, n), v = y + _ * Ue;
    let b = g;
    const w = [], S = "yyyy-MM-dd", k = fr(l, S), T = fr(c, S), A = ((M = u ? z(u) : null) == null ? void 0 : M.getTime()) ?? Number.MAX_SAFE_INTEGER, I = ((E = h ? z(h) : null) == null ? void 0 : E.getTime()) ?? 0;
    for (; b <= v; ) {
      const P = [];
      for (let R = 0; R < 7; R++) {
        const L = new Date(b), $ = L.getDate(), F = pt(L, S), tt = L.getDay(), mt = Fo(L, y), ln = x("col mini-calendar-day", {
          active: k.has(F),
          selected: T.has(F),
          "is-first": $ === 1,
          "is-in-month": mt,
          "is-out-month": !mt,
          "is-today": re(L, e),
          "is-weekend": tt === 0 || tt === 6,
          disabled: !re(L, A) && !re(L, I) && (b > A || b < I)
        });
        P.push(
          /* @__PURE__ */ m("div", { className: ln, "data-date": F, children: /* @__PURE__ */ m("button", { type: "button", className: f, onClick: this._handleClickDate, children: $ === 1 && r ? r[L.getMonth()] : L.getDate() }) }, F)
        ), b += Ue;
      }
      w.push(/* @__PURE__ */ m("div", { className: "row", children: P }, b));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: p }),
      w
    ] });
  }
}
var Fs, Os;
class pr extends B {
  constructor() {
    super(...arguments);
    at(this, Fs, q());
    at(this, Os, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = d(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ m(K, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: it(this, Os), children: c }, c));
    return /* @__PURE__ */ m("div", { className: n, ref: it(this, Fs), children: a });
  }
}
Fs = new WeakMap(), Os = new WeakMap();
var Ye, Je, Ze, Xe, Qe, ts, Hs, jo, Ws, Bo;
class oh extends B {
  constructor(e) {
    super(e);
    at(this, Hs);
    at(this, Ws);
    at(this, Ye, void 0);
    at(this, Je, void 0);
    at(this, Ze, void 0);
    at(this, Xe, void 0);
    at(this, Qe, void 0);
    at(this, ts, void 0);
    gt(this, Ye, q()), gt(this, Je, (r) => {
      const o = d(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), gt(this, Ze, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), gt(this, Xe, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), gt(this, Qe, (r) => {
      this.setState({ year: r, select: "day" });
    }), gt(this, ts, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = nh(l, r.substring(5).replace("+", ""))), r = pt(l, "yyyy-MM-dd");
      }
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: n } = e, i = n ? new Date(n) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((n) => n.select === e ? { select: "day" } : { select: e });
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = j.getLang("yearFormat") || "{0}",
      weekNames: o = j.getLang("weekNames"),
      monthNames: a = j.getLang("monthNames"),
      minDate: l = "1970-1-1",
      maxDate: c = "2099-1-1",
      weekStart: u
    } = e, h = i ? new Date(i) : void 0, {
      year: p,
      month: f,
      select: g
    } = n, _ = g === "day", y = z(typeof l == "function" ? l(h) : l), v = z(typeof c == "function" ? c(h) : c);
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: it(this, Ye), onClick: it(this, Je), children: [
      hn(this, Hs, jo).call(this, e),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(K, { type: g === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: V(r, p) }),
          /* @__PURE__ */ m(K, { type: g === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[f - 1] : f }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          _ ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(K, { type: "ghost", size: "sm", square: !0, onClick: it(this, Ze), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(K, { type: "ghost", size: "sm", square: !0, onClick: it(this, Xe), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        _ ? /* @__PURE__ */ m(
          rh,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: v,
            minDate: y,
            year: p,
            month: f,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        g === "year" ? /* @__PURE__ */ m(
          pr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: p,
            min: y.getFullYear(),
            max: v.getFullYear(),
            onChange: it(this, Qe)
          }
        ) : g === "month" ? /* @__PURE__ */ m(
          pr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: f,
            min: 1,
            max: 12,
            onChange: it(this, ts)
          }
        ) : null,
        _ ? hn(this, Ws, Bo).call(this, e) : null
      ] })
    ] });
  }
}
Ye = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), Xe = new WeakMap(), Qe = new WeakMap(), ts = new WeakMap(), Hs = new WeakSet(), jo = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m(J, { ...n })) : null;
}, Ws = new WeakSet(), Bo = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": pt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(St, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ m(K, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let sn = class extends yt {
  constructor(t) {
    super(t), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, readonly: l, format: c, minDate: u, maxDate: h } = this.props;
      if (a || l)
        return;
      let p = z(n);
      if (u) {
        const g = z(typeof u == "function" ? u(p) : u);
        p < g && (p = g);
      }
      if (h) {
        const g = z(typeof h == "function" ? h(p) : h);
        p > g && (p = g);
      }
      const f = !n || Number.isNaN(p.getDay());
      this.setState({ value: f ? o ? r : "" : pt(p, c) }, () => {
        !f && i && i(n), this._afterSetDate();
      });
    }, this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (n) => {
      this.setDate(n.target.value);
    }, this._handleClearBtnClick = () => {
      this.setDate("");
    }, this._handleSetDate = (n) => {
      this.setDate(n);
    };
    const { value: e } = this.state;
    e && (this.state.value = pt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  getDate() {
    const { value: t } = this.state;
    if (!t.length)
      return null;
    const e = z(t);
    return Oo(e) ? e : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let p;
    u && !r && c.length ? p = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? p = /* @__PURE__ */ m("i", { class: "i-calendar" }) : p = /* @__PURE__ */ m(Q, { icon: i }));
    const f = u ? c : l ? l(c) : c;
    return [
      /* @__PURE__ */ m(
        "input",
        {
          id: h,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: f,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: this._handleInputFocus,
          onChange: this._handleInputChange
        },
        "input"
      ),
      p ? /* @__PURE__ */ m("label", { for: h, className: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: x(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = j.getLang("today"), clearText: l, menu: c, actions: u, minDate: h, maxDate: p, required: f } = t;
    return /* @__PURE__ */ m(
      oh,
      {
        onChange: this._handleSetDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: f ? "" : l,
        menu: c,
        actions: u,
        minDate: h,
        maxDate: p
      }
    );
  }
};
sn.defaultProps = {
  ...yt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let Vo = class extends sn {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = z(t), n = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(n.getHours()), e.setMinutes(n.getMinutes()), this.setDate(pt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const n = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? n.setHours(e) : n.setMinutes(e), this.setDate(pt(n, this.props.format));
    };
  }
  getTime() {
    const t = this.getDate();
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _afterSetDate() {
  }
  _renderPop(t, e) {
    const [n, i] = this.getTime() || [];
    return /* @__PURE__ */ m("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ m("div", { className: "divider" }),
      /* @__PURE__ */ m(
        Ho,
        {
          hour: n,
          minute: i,
          minuteStep: t.minuteStep,
          onChange: this._handleSetTime
        }
      )
    ] });
  }
};
Vo.defaultProps = {
  ...sn.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Uo extends U {
}
Uo.NAME = "TimePicker";
Uo.Component = Wo;
class Ko extends U {
}
Ko.NAME = "DatePicker";
Ko.Component = sn;
class qo extends U {
}
qo.NAME = "DatetimePicker";
qo.Component = Vo;
const mr = "show", gr = "in", ah = '[data-dismiss="modal"]', yn = "modal-hide", $e = class se extends Ht {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(ah) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  static get SELECTOR() {
    return ".modal";
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
        const n = new ResizeObserver(() => {
          if (!this._shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        n.observe(e), this._rob = n;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize(), this.on("hidden", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && !se.getAll().some((n) => n.shown) && d("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && d("html").disableScroll();
    }), this.shown && d("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    const { modalElement: e } = this, n = d(e);
    if (this._shown)
      return n.removeClass(yn).css("z-index", `${se.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    n.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [yn]: !1
    }, mr, o).css({
      zIndex: `${se.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !n.closest(c.modalElement).length && c.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((c) => {
      c !== this && !n.closest(c.modalElement).length && c.hide();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      n.addClass(gr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    d(this.modalElement).addClass(yn);
  }
  hide() {
    if (!this._shown)
      return !1;
    this._shown = !1, d(this.modalElement).removeClass(gr), this.emit("hide"), this._setTimer(() => {
      d(this.modalElement).removeClass(mr), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((e) => {
      e.shown && e !== this && e.show();
    }), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = d(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const u = { width: "", height: "" };
      typeof e == "object" ? (u.width = e.width, u.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (u.width = e), i.css(u);
    }
    t = t ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    this._lastDialogSize = [r, o], typeof t == "function" && (t = t({ width: r, height: o }));
    const a = {
      left: null,
      bottom: null,
      right: null
    };
    let l = null, c = "center";
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), d(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return se.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = se.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = se.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
$e.NAME = "Modal";
$e.MULTI_INSTANCE = !0;
$e.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
$e.hideOthers = !0;
$e.zIndex = 1500;
let Ke = $e;
d(window).on(`resize.${Ke.NAMESPACE}`, () => {
  Ke.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class Go extends B {
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
      title: n
    } = this.props;
    return bt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: x("modal-header", e), children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : bt(t) ? t : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ m(St, { ...t }) : null,
      e ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? bt(t) ? t : /* @__PURE__ */ m("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return bt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: x("modal-footer", e), children: n ? /* @__PURE__ */ m(St, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ m("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ m("div", { className: x("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Go.defaultProps = { closeBtn: !0 };
class Yo extends B {
  constructor() {
    super(...arguments), this._ref = q(), this.state = {}, this._watchIframeHeight = () => {
      var n, i;
      const t = (i = (n = this._ref.current) == null ? void 0 : n.contentWindow) == null ? void 0 : i.document;
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
    return /* @__PURE__ */ m(
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
Yo.defaultProps = {
  watchHeight: !0
};
var Ai = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, vt = (s, t, e) => (Ai(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ae = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, de = (s, t, e, n) => (Ai(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ps = (s, t, e) => (Ai(s, t, "access private method"), e), Mt, De, At, As, Ii, ms, Dn;
function lh(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function ch(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await d.ajax({
    url: n,
    headers: {
      "X-ZUI-Modal": "true"
    },
    ...i
  });
  if (e !== "html")
    try {
      const u = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...u
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [c] : {
    title: o,
    ...r,
    body: e === "html" ? /* @__PURE__ */ m(we, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function hh(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ m(Yo, { url: e, watchHeight: !o })
  };
}
const uh = {
  custom: lh,
  ajax: ch,
  iframe: hh
}, _r = "loading", Jo = class pe extends Ke {
  constructor() {
    super(...arguments), Ae(this, As), Ae(this, ms), Ae(this, Mt, void 0), Ae(this, De, void 0), Ae(this, At, void 0);
  }
  get id() {
    return vt(this, De);
  }
  get loading() {
    var t;
    return (t = vt(this, Mt)) == null ? void 0 : t.classList.contains(_r);
  }
  get shown() {
    var t;
    return !!((t = vt(this, Mt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = vt(this, Mt);
    if (!t) {
      const { options: e } = this;
      let n = vt(this, De);
      n || (n = e.id || `modal-${ut()}`, de(this, De, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = d("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      de(this, Mt, t);
    }
    return t;
  }
  get $emitter() {
    const t = vt(this, Mt);
    return t ? d(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destoryOnHide && this.options.type !== "static" && this.on("hidden", (t) => {
      t.target.closest(".modal") === this.modalElement && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = vt(this, Mt);
    t && (d(t).removeData(this.constructor.KEY).remove(), de(this, Mt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, At) && clearTimeout(vt(this, At));
    const { modalElement: t, options: e } = this, n = d(t), { type: i, loadTimeout: r, loadingClass: o = _r, loadingText: a = null } = e;
    if (!i || i === "static")
      return !0;
    const l = uh[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", a).addClass(o), r && de(this, At, window.setTimeout(() => {
      de(this, At, 0), ps(this, ms, Dn).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return c === !1 ? await ps(this, ms, Dn).call(this, this.options.failedTip) : c && typeof c == "object" && await ps(this, As, Ii).call(this, c), vt(this, At) && (clearTimeout(vt(this, At)), de(this, At, 0)), this.layout(), await ks(100), n.removeClass(o), !0;
  }
  static isValid(t) {
    return !d.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), !r.type && t.id && (r.type = "static"), r.key === void 0 && (r.key = r.id);
      const o = pe.ensure(n, r), a = `${pe.NAMESPACE}.open${ut()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...u } = t, h = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ m("div", { children: n });
    i ? p = /* @__PURE__ */ m("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${i} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ m("div", { className: x("modal-body", h.bodyClass), children: p });
    const f = [];
    (Array.isArray(o) ? o : [o]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = j.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let g;
    const _ = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: v }) => {
        const b = pe.query(v.target);
        if (!b || b.key !== c)
          return;
        g = y.key, (a == null ? void 0 : a(y, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await pe.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      modal: !0,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: _, ...h },
      ...u
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await pe.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Mt = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakSet();
Ii = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return d(this.modalElement).html(s[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, ye(
      /* @__PURE__ */ m(Go, { ...s }),
      this.modalElement
    );
  });
};
ms = /* @__PURE__ */ new WeakSet();
Dn = function(s) {
  if (s)
    return ps(this, As, Ii).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: s })
    });
};
Jo.DEFAULT = {
  ...Ke.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Ln = Jo;
const dh = '[data-toggle="modal"]';
class zn extends Ht {
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
    } = this.options, n = e, i = this.$element.attr("href") || "";
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), n.key === void 0 && (n.key = `${this._key}`), n;
  }
  _initModal() {
    const t = this._getBuilderOptions();
    let e = this._modal;
    if (e)
      return e.setOptions(t), e;
    if (t.type === "static") {
      const n = this._getStaticModalElement();
      if (!n)
        return;
      e = Ke.ensure(n, t);
    } else
      e = Ln.ensure(this.container, t);
    return this._modal = e, e.on("destroyed", () => {
      this._modal = void 0;
    }), e;
  }
  _getStaticModalElement() {
    let t = this.options.target;
    if (!t) {
      const { $element: e } = this;
      if (e.is("a")) {
        const n = e.attr("href");
        n != null && n.startsWith("#") && (t = n);
      }
    }
    return this.container.querySelector(t || ".modal");
  }
}
zn.NAME = "ModalTrigger";
d(document).on(`click${zn.NAMESPACE}`, dh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = zn.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
const fh = {
  zh_cn: {
    selectFile: "选择文件",
    fileSelectTip: "（不超过 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超过了 {maxSize} 的限制。",
    exceededTotalSizeTip: "文件 “{name}”（{size}） 超过了总大小 {totalFileSize} 的限制。",
    exceededCountTip: "文件 “{name}”（{size}） 超过了数量 {maxFileCount} 的限制。"
  },
  zh_tw: {
    selectFile: "選擇文件",
    fileSelectTip: "（不超過 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超過了 {maxFileSize} 的限制。",
    exceededTotalSizeTip: "文件 “{name}”（{size}） 超過了總大小 {totalFileSize} 的限制。",
    exceededCountTip: "文件 “{name}”（{size}） 超過了數量 {maxFileCount} 的限制。"
  },
  en: {
    selectFile: "Select File",
    fileSelectTip: "(Not exceeding {maxFileSize})",
    removeFile: "Remove File",
    renameFile: "Rename",
    duplicatedTip: "File “{name}” ({size}) already exists.",
    exceededSizeTip: "File “{name}” ({size}) exceeds the limit of {maxFileSize}.",
    exceededTotalSizeTip: "File “{name}” ({size}) exceeds the total size limit of {totalFileSize}.",
    exceededCountTip: "File “{name}” ({size}) exceeds the limit of {maxFileCount}."
  }
};
let Xt = class extends X {
  constructor(t) {
    super(t), this._input = q(), this._file = q(), this._id = `file-selector-input-${ut()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: n } = this.state;
      this.cancelRenameFile(), !(!e || !n) && this.renameFile(e, n);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const n = e.target;
      n.files && (this.selectFiles(n.files), this.setState({ inputKey: ut() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const n = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      n.length && (this.selectFiles(n), this.setState({ inputKey: ut() }));
    }, this._handleRenameChange = (e) => {
      this.setState({
        newName: e.target.value
      });
    }, this._handleClick = (e) => {
      if (this.props.disabled)
        return;
      const i = d(e.target).closest("[data-remove-file],[data-rename-file]");
      if (!i.length)
        return;
      const r = i.data();
      r.renameFile ? this.startRenameFile(r.renameFile) : r.removeFile && this.removeFile(r.removeFile);
    }, this.state = {
      files: (t.defaultFiles || []).map((e) => this.constructor.getInfo(e)),
      inputKey: 0
    };
  }
  get size() {
    return this.state.files.reduce((t, e) => t + e.size, 0);
  }
  get count() {
    return this.state.files.length;
  }
  get multiple() {
    const { multiple: t, maxFileCount: e, name: n = "" } = this.props;
    return !!(e !== 1 && (t ?? n.endsWith("[]")));
  }
  get info() {
    const { maxFileSize: t = 0, maxFileCount: e = Number.MAX_SAFE_INTEGER } = this.props;
    return {
      size: $t(this.size, 1),
      maxFileSize: $t(typeof t == "string" ? ls(t) : t, 1),
      maxFileCount: e,
      count: this.count
    };
  }
  get files() {
    return this._data.files;
  }
  componentDidMount() {
    const t = this.state.files.reduce((e, n) => (n.file && e.push(n.file), e), []);
    t.length && (t.forEach((e) => this._data.items.add(e)), this._syncFiles());
  }
  getFile(t) {
    return this.state.files.find((e) => e.id === t);
  }
  getFileByName(t) {
    return this.state.files.find((e) => e.name === t);
  }
  select() {
    var t;
    (t = this._input.current) == null || t.click();
  }
  async selectFiles(t) {
    var e;
    if (((e = this.props.onSelect) == null ? void 0 : e.call(this, t)) !== !1) {
      this._skipAddMore = !1;
      for (let n = 0; n < t.length && (await this.addFile(t[n]), !this._skipAddMore); n++)
        ;
    }
  }
  async _checkDuplicated(t) {
    const { allowSameName: e, onDuplicated: n, duplicatedTip: i = this.i18n("duplicatedTip") } = this.props, { name: r } = t, o = e ? this.getFile(t.id) : this.getFileByName(r);
    return o ? ((n == null ? void 0 : n.call(this, r, t, o)) === !0 || i && await this._showAlert(i, {
      name: r,
      size: $t(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: n, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? ls(e) : e;
    return t.size <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: $t(t.size, 1)
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: n, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? ls(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: $t(t.size, 1),
      totalSize: $t(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: n, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((n == null ? void 0 : n.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: $t(t.size, 1),
      exceededCount: r
    }), !0);
  }
  async addFile(t) {
    const { onAdd: e, disabled: n } = this.props;
    if (n)
      return !1;
    const i = this.constructor.getInfo(t);
    return await this._checkExceededCount(i) ? (this._skipAddMore = !0, !1) : await this._checkDuplicated(i) ? !1 : await this._checkExceededSize(i) ? (this._skipAddMore = !0, !1) : await this._checkTotalSize(i) ? (this._skipAddMore = !0, !1) : e && e.call(this, i) === !1 ? !1 : (this._data.items.add(t), this._syncFiles(!0), await this.changeState((c) => ({ files: [...c.files, i] })), !0);
  }
  startRenameFile(t) {
    this.setState({ renaming: t, newName: void 0 }, () => {
      const e = d(this._file.current).closest(".file-selector").find(".file-selector-rename-input")[0];
      e && (e.select(), e.focus());
    });
  }
  async renameFile(t, e) {
    const n = this.getFile(t);
    if (!n || n.name === e)
      return;
    const { onRename: i } = this.props;
    if (i && await i.call(this, e, n.name, n) === !1)
      return;
    const r = n.file;
    if (r) {
      const l = new File([r], e, { type: r.type, lastModified: r.lastModified }), c = Array.from(this._data.files).indexOf(r);
      c >= 0 && this._data.items.remove(c), this._data.items.add(l), this._syncFiles(!0), n.file = l;
    }
    n.name = e, n.ext = this.constructor.getExt(e);
    const { files: o } = this.state, a = o.indexOf(n);
    a >= 0 ? o.splice(a, 1, n) : o.push(n), this.setState({ files: [...o] });
  }
  async removeFile(t) {
    const e = this.getFile(t);
    if (!e)
      return;
    const { onRemove: n, removeConfirm: i } = this.props;
    if (i) {
      let o = i;
      if (typeof o == "string" && (o = { message: o }), typeof o.message == "string" && (o.message = V(o.message, {
        name: e.name,
        size: $t(e.size, 1)
      })), !await Ln.confirm(o))
        return;
    }
    if (n && await n.call(this, e) === !1)
      return;
    if (e.file) {
      const o = Array.from(this._data.files).indexOf(e.file);
      o >= 0 && this._data.items.remove(o);
    }
    const r = this.state.files.indexOf(e);
    r >= 0 && (this.state.files.splice(r, 1), this.setState({ files: this.state.files }), this._syncFiles(!0));
  }
  _syncFiles(t = !1) {
    const e = this._data.files, n = this._file.current;
    n.files = e, t && d(n).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = V(t.message, { ...this.info, ...e })), Ln.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? V(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ m("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: n, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = W({
      component: "label",
      attrs: {
        for: n ? void 0 : this._id
      },
      disabled: n,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ m("div", { className: "file-selector-tip", children: /* @__PURE__ */ m(H, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ m(K, { ...o, ...c, className: x(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ m("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ m(K, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: n, onChange: i } = t;
    return /* @__PURE__ */ m("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: n, style: "display:none", onChange: i }, "form");
  }
  _getIcon(t) {
    let { fileIcons: e } = this.props;
    if (e)
      return typeof e == "string" && (e = { default: e }), e[t.ext] ?? e.default;
  }
  _getThumbnail(t) {
    if ((t.file || t.url) && this.props.thumbnail && this.constructor.isImage(t))
      return t.url || URL.createObjectURL(t.file);
  }
  _getAvatar(t) {
    const e = this._getThumbnail(t);
    let n;
    if (e)
      n = { src: e };
    else {
      const i = this._getIcon(t);
      i && (n = { icon: i });
    }
    return n && {
      size: this.props.mode === "grid" ? void 0 : "sm",
      ...n
    };
  }
  _getFileActions(t) {
    if (this.props.disabled)
      return;
    let { removeBtn: e, renameBtn: n } = this.props;
    typeof e == "function" && (e = e.call(this, t)), typeof e == "string" ? e = { text: e } : e === !0 && (e = { hint: this.i18n("removeFile"), icon: "trash" }), typeof n == "function" && (n = n.call(this, t)), typeof n == "string" ? n = { text: n } : n === !0 && (n = { hint: this.i18n("renameFile"), icon: "edit" });
    const i = [];
    return n && i.push({
      "data-rename-file": t.id,
      ...n
    }), e && i.push({
      "data-remove-file": t.id,
      ...e
    }), i;
  }
  _renderFile(t) {
    let { itemProps: e } = this.props;
    return e = W({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: $t(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ m(Be, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: n = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ m("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ m("div", { className: "form-control size-sm", children: n }),
        /* @__PURE__ */ m("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = W({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ m(K, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ m(K, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ m(Be, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: n } = this.state;
    return /* @__PURE__ */ m("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === n ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: n = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": fs(n),
      "--file-selector-grid-height": fs(i),
      "--file-selector-grid-gap": fs(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ m("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
      a.map((c) => c.id === l ? this._renderFileRename(c) : this._renderFile(c)),
      this._renderUpload(t)
    ] }, "grid");
  }
  _getClassName(t) {
    return ["file-selector", `is-mode-${t.mode}`, t.className, this.state.dragging ? "is-dragging" : ""];
  }
  _getChildren(t) {
    const e = t.mode === "grid";
    return [
      e ? null : this._renderUpload(t),
      e ? this._renderGrid(t) : this._renderList(t),
      this._renderInput(t),
      this._renderForForm(t)
    ];
  }
  static getExt(t) {
    return (t.split(".").pop() || "").toLowerCase();
  }
  static getInfo(t) {
    const { name: e, size: n, type: i } = t;
    if (t instanceof File)
      return {
        name: e,
        size: n,
        type: i,
        file: t,
        id: [e, n].join(":"),
        ext: this.getExt(e)
      };
    const r = typeof n == "string" ? ls(n) : n;
    return {
      name: e,
      size: r,
      id: t.id ?? [e, r].join(":"),
      type: i ?? "",
      ext: this.getExt(e),
      file: t.file,
      url: t.url
    };
  }
  static isAccept(t, e) {
    return !e || !e.length ? !0 : (Array.isArray(e) ? e : e.split(",")).some((i) => t.type && i === t.type ? !0 : i.startsWith(".") ? t.name.endsWith(i) : i.endsWith("/*") ? t.type.startsWith(i.slice(0, -1)) : !1);
  }
  static isImage(t) {
    return this.isAccept(t, this.imageAccepts);
  }
  static filterFiles(t, e) {
    if (!e || !e.length)
      return t;
    t instanceof FileList && (t = Array.from(t));
    const n = e.split(",");
    return t.filter((i) => this.isAccept(i, n));
  }
};
Xt.defaultProps = {
  mode: "button",
  maxFileSize: "100MB",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
Xt.i18n = fh;
Xt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let Pi = class extends Xt {
};
Pi.defaultProps = {
  ...Xt.defaultProps,
  mode: "grid",
  accept: Xt.imageAccepts
};
const ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Xt,
  ImageSelector: Pi
}, Symbol.toStringTag, { value: "Module" }));
class Ri extends U {
}
Ri.NAME = "FileSelector";
Ri.Component = Xt;
Ri.replace = !0;
class Di extends U {
}
Di.NAME = "ImageSelector";
Di.Component = Pi;
Di.replace = !0;
ot(ph);
let nn = class extends es {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
nn.NAME = "nav";
nn.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
const mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: nn
}, Symbol.toStringTag, { value: "Module" }));
class Zo extends U {
}
Zo.NAME = "Nav";
Zo.Component = nn;
ot(mh);
function qe(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Xo({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = qe(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : V(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : V(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ m(K, { type: e, ...a });
}
function Qo({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = qe(i, e);
  return n = typeof n == "function" ? n(a) : V(n, a), /* @__PURE__ */ m(X, { ...o, children: [
    r,
    n
  ] });
}
function gh({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ m(K, { type: t, ...o })), l = (u, h) => {
    const p = [];
    for (let f = u; f <= h; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const g = qe(n, f);
      i && (o.url = typeof i == "function" ? i(g) : V(i, g)), p.push(/* @__PURE__ */ m(K, { type: t, ...o }));
    }
    return p;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let _h = class extends B {
  render(t) {
    const {
      id: e,
      popup: n,
      title: i,
      content: r,
      style: o,
      className: a,
      closeBtn: l,
      arrow: c,
      headingClass: u,
      titleClass: h,
      contentClass: p,
      arrowStyle: f,
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ m(H, { content: r }, "content");
    (p || i) && (_ = /* @__PURE__ */ m("div", { className: p, children: _ }, "content"));
    const y = [], v = l ? /* @__PURE__ */ m("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ m("div", { className: u, children: [
      i ? /* @__PURE__ */ m(H, { className: h, content: i }) : null,
      v
    ] }, "heading")) : y.push(v), y.push(_), c && y.push(/* @__PURE__ */ m("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), g ? y : /* @__PURE__ */ m("div", { id: e, className: x("popover", a, { popup: n, "has-heading": i }), style: o, children: y });
  }
};
class Li extends U {
}
Li.NAME = "PopoverPanel";
Li.Component = _h;
const yh = '[data-toggle="popover"]', yr = "show", vr = "in";
class ht extends Ht {
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
      const e = d(t.target);
      !e.closest(`#${this._id}`).length && (this._virtual || !e.closest(this._triggerElement).length) && this._targetElement !== e.closest(".popover")[0] && this.hide();
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  afterInit() {
    const { trigger: t, id: e, triggerEvent: n } = this.options;
    this._triggerEvent = n, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = d(i), { namespace: a } = this;
      t === "hover" ? o.on(`pointerenter${a}`, (l) => {
        if (o.is("[disabled],.disabled"))
          return;
        const c = o.dataset("target");
        c && this.setOptions({ target: c }), this.show({ delay: !0, event: l });
      }).on(`pointerleave${a} pointercancel${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
        if (o.is("[disabled],.disabled"))
          return;
        const c = o.dataset("target");
        !this.shown && c && this.setOptions({ target: c }), this.toggle({ event: l }), l.preventDefault();
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), d(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n, hideOthers: i } = t || {};
    if (n && (this._triggerEvent = n), e)
      return this._resetTimer(() => {
        this.show();
      }, e === !0 ? this.options.delay : e);
    if (!this.inited) {
      this.setOptions({ show: !0 });
      return;
    }
    if (this._shown)
      return;
    const r = this.initTarget();
    if (!r)
      return;
    this._targetElement = r;
    const o = d(r), { animation: a, mask: l, onShow: c, onShown: u, trigger: h } = this.options;
    o.addClass(yr), a && o.addClass(a === !0 ? "fade" : a), this._shown = !0, this.render(), c == null || c.call(this), this.emit("show");
    const p = this.constructor, { hideOthers: f } = this.options;
    (i || p.hideOthers && this.options.hideOthers !== !1 || f) && p.getAll().forEach((_) => {
      _ !== this && _.shown && !o.closest(_.element).length && _.hide();
    });
    const { namespace: g } = this;
    h === "hover" && (this._clearDelayHide(), o.off(g).on(`pointerenter${g}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${g}`, () => {
      this.delayHide();
    })), o.on(`click${g}`, '[data-dismiss="popover"]', () => {
      this.hide();
    }), this._virtual || d(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(vr), this._resetTimer(() => {
        u == null || u.call(this), this.emit("shown");
      }, 200), l && d(document).off(`click${this.namespace}`, this._onClickDoc).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: n, onHide: i, onHidden: r, trigger: o } = this.options, a = d(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(vr), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || d(this._triggerElement).removeClass("with-popover-show").removeAttr("data-pop-placement"), d(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(yr), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, n && !t ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), d(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      d(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Po(t, e, () => {
      const { animation: i, name: r = "popover" } = this.options;
      if (!this._virtual) {
        const o = {}, { width: a, height: l } = this.options;
        a && (o.width = typeof a == "function" ? a() : a === "100%" ? d(t).width() : a), l && (o.height = typeof l == "function" ? l() : l), Object.keys(o).length && d(e).css(o);
      }
      Mi(...this._getLayoutOptions()).then(({ x: o, y: a, middlewareData: l, placement: c, strategy: u }) => {
        if (t instanceof HTMLElement && ue(t)) {
          this.hide(!0);
          return;
        }
        const h = {
          position: u,
          left: o,
          top: a
        }, p = d(e).css(h), f = c.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[f], _ = l.arrow;
        _ && p.attr("data-pop-placement", f).find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), i === !0 && p.attr("class", `${p.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || d(this._triggerElement).attr("data-pop-placement", f);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = d(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Li(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(d('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
  }
  delayHide(t = 100) {
    this._resetTimer(), this._clearDelayHide(), this._hideTimer = window.setTimeout(() => {
      this._hideTimer = 0, this.hide();
    }, t);
  }
  _clearDelayHide() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = 0);
  }
  _getLayoutOptions() {
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, u = l ? e.querySelector(".arrow") : null, h = u ? typeof l == "number" ? l : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: c,
      middleware: [
        i ? $i() : null,
        o ? Ei(typeof o == "object" ? o : void 0) : null,
        a || h ? Ni((a || 0) + h) : null,
        l ? sh({ element: u }) : null,
        r ? Ro({
          apply({ availableWidth: p, availableHeight: f, placement: g }) {
            d(e).css({ maxHeight: f - (["top", "bottom"].includes(g.split("-")[0]) ? h : 0) - 2, maxWidth: p - 2 });
          }
        }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: n,
      content: i,
      headingClass: r = `${t}-heading`,
      titleClass: o = `${t}-title`,
      contentClass: a = `${t}-content`,
      style: l,
      className: c = t,
      closeBtn: u,
      arrow: h
    } = this.options;
    return {
      popup: e,
      title: n,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: c,
      closeBtn: u,
      arrow: h ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof h == "number" ? h : 5}px` },
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var t, e, n;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (n = this._targetElement) == null || n.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = d(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = d("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
}
ht.NAME = "Popover";
ht.Z_INDEX = 1700;
ht.MULTI_INSTANCE = !0;
ht.DEFAULT = {
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
ht.hideOthers = !1;
d(document).on(`click${ht.NAMESPACE} mouseenter${ht.NAMESPACE}`, yh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.data(ht.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ht.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const vh = '[data-toggle="dropdown"]';
class qt extends ht {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      const e = d(t.target);
      !e.closest(".not-hide-menu,.form-control,input,label,.nested-toggle-icon").length && (this._virtual || !e.closest(this._triggerElement).length) && this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, tree: i, onClickItem: r, relativeTarget: o = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      tree: i,
      onClickItem: r,
      nestedToggle: ".item",
      accordion: !0,
      relativeTarget: { target: o, event: this.options.triggerEvent, dropdown: this },
      popup: !0,
      ...n
    };
  }
  _getRenderOptions() {
    const t = super._getRenderOptions();
    return this._dynamic ? {
      ...t,
      contentClass: "",
      popup: !1,
      content: wt(zi, this._getMenuOptions())
    } : t;
  }
}
qt.NAME = "Dropdown";
qt.DEFAULT = {
  ...ht.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0
};
d(document).on(`click${qt.NAMESPACE} mouseenter${qt.NAMESPACE}`, vh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.data(qt.KEY) && !t.is("[disabled],.disabled")) {
    const e = t.data() || {}, n = e.trigger || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== n)
      return;
    const r = {
      ...e,
      show: !0,
      triggerEvent: s
    };
    if (!r.target && t.is("a")) {
      const o = t.attr("href");
      o && "#.".includes(o[0]) && (r.target = o);
    }
    !r.target && !r.items && !r.menu && (r.target = t.next(".dropdown-menu")), qt.ensure(t, r), s.preventDefault();
  }
});
class rn extends K {
  constructor() {
    super(...arguments), this._ref = q();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = d(this.triggerElement), a = qt.get(this.triggerElement), l = {
      items: n,
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
    (t = qt.get(this.triggerElement)) == null || t.destroy();
  }
  _getProps(t) {
    const { trigger: e, placement: n } = t;
    return {
      ...super._getProps(t),
      "data-toggle": "dropdown",
      "data-trigger": e,
      "data-placement": n,
      ref: this._ref
    };
  }
}
rn.defaultProps = {
  caret: !0
};
Object.assign(Ct.ItemComponents, { dropdown: rn });
Object.assign(St.ItemComponents, { dropdown: rn });
class zi extends _t {
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  layout() {
    var r;
    if (this.props.tree || this.isRoot)
      return;
    const t = (r = this.element) == null ? void 0 : r.parentElement, i = d(t).parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    !t || !i || Mi(i, t, {
      placement: this.props.placement,
      middleware: [$i(), Ei(), Ni(1), Ro({
        apply({ availableWidth: o, availableHeight: a }) {
          d(t).css({ maxHeight: a - 2, maxWidth: o - 2 });
        }
      })]
    }).then(({ x: o, y: a }) => {
      d(t).css({
        left: o,
        top: a
      });
    });
  }
  _getClassName(t) {
    return ["dropdown-menu scrollbar-hover scrollbar-thin", super._getClassName(t)];
  }
  _afterRender(t) {
    super._afterRender(t), this.layout();
  }
  _getNestedProps(t, e, n, i) {
    return W(this.isHoverTrigger ? {
      "z-key": n.key,
      "z-hover": this.props.parentKey ?? "root",
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : {}, super._getNestedProps(t, e, n, i));
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return e;
    const n = d(t.target).closest(".dropdown-menu[z-key]");
    if (n.length) {
      const i = n.attr("z-key"), r = n.parent().parent().children(".dropdown-menu").children(`[z-key="${i}"]`);
      if (r.length)
        return super._getItemFromEvent(t, r[0]);
    }
  }
  _renderNestedList(t, e, n, i) {
    const r = super._renderNestedList(t, e, n, i);
    if (this.props.tree)
      return r;
    this._nestedContextMenu.push(r);
  }
  _getWrapClass(t) {
    return [super._getWrapClass(t), t.tree ? "is-tree" : this.isRoot ? "is-contextmenu" : "is-contextmenu popup"];
  }
  _renderWrapperFooter(t) {
    const e = super._renderWrapperFooter(t), n = this._nestedContextMenu;
    return this.props.tree || !n.length ? e : [e, ...n];
  }
  _renderNestedToggle(t, e) {
    if (this.props.tree)
      return super._renderNestedToggle(t, e);
    if (typeof e == "boolean")
      return /* @__PURE__ */ m("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ m("span", { className: "caret-right" }) });
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
}
zi.defaultProps = {
  ..._t.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
zi.inheritNestedProps = [..._t.inheritNestedProps, "container", "tree"];
function bh({
  type: s,
  pagerInfo: t,
  linkCreator: e,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items || n.map((c) => {
    const u = { ...t, recPerPage: c };
    return {
      ...r,
      key: c,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(u) : V(e, u)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : V(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(rn, { dropdown: i, ...o });
}
function ta({
  key: s,
  page: t,
  type: e,
  btnType: n,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...c
}) {
  const u = { ...c };
  let h;
  const p = (_) => {
    var y;
    h = Number((y = _.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, f = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = qe(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = u.url = typeof l == "function" ? l(y) : V(l, y));
  }, g = qe(i, t || 0);
  return u.url = typeof l == "function" ? l(g) : V(l, g), /* @__PURE__ */ m("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ m(K, { type: n, ...u, onClick: f })
  ] });
}
let rs = class extends St {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return !1;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? d.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && d.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
rs.NAME = "pager";
rs.ItemComponents = {
  ...St.ItemComponents,
  info: Qo,
  link: Xo,
  nav: gh,
  "size-menu": bh,
  goto: ta
};
rs.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class ea extends U {
}
ea.NAME = "Pager";
ea.Component = rs;
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: rs,
  PagerGoto: ta,
  PagerInfoItem: Qo,
  PagerLink: Xo
}, Symbol.toStringTag, { value: "Module" }));
ot(wh);
class Fi extends U {
}
Fi.NAME = "Pick";
Fi.Component = yt;
Fi.replace = !0;
class sa extends B {
  constructor(t) {
    super(t), this._searchInput = q(), this._measure = q(), this._changeTimer = 0, this._handleChange = (e) => {
      const n = e.target.value;
      this.setState({ search: n }, () => {
        const { onSearch: i } = this.props;
        i && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, i(n);
        }, this.props.debounce || 300));
      }), e.stopPropagation();
    }, this._handleClear = (e) => {
      e.stopPropagation(), this.clear();
    }, this.state = { search: t.defaultSearch ?? "" };
  }
  get $pop() {
    return d(`#pick-pop-${this.props.id}`);
  }
  focus() {
    var t;
    (t = this._searchInput.current) == null || t.focus();
  }
  clear() {
    var t, e;
    (e = (t = this.props).onClear) == null || e.call(t), this.setState({ search: "" }, () => this.focus());
  }
  componentDidMount() {
    this.focus();
    const { hotkeys: t } = this.props;
    if (t) {
      const e = lo(t, {
        clear: {
          keys: "Escape",
          handler: () => {
            this.state.search.trim().length ? this.clear() : this.$pop.trigger("hidePop");
          }
        },
        enter: {
          keys: "Enter",
          handler: (n) => {
            n.preventDefault(), this.$pop.trigger("selectActive"), this.clear();
          }
        },
        activeNext: {
          keys: "ArrowDown",
          handler: () => {
            this.$pop.trigger("activeNext");
          }
        },
        activePrev: {
          keys: "ArrowUp",
          handler: () => {
            this.$pop.trigger("activePrev");
          }
        }
      });
      e && (this._hotkeysScope = `PickerSearch_${ut()}`, d(this._searchInput.current).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = this._measure, { current: n } = this._searchInput;
      if (e && n) {
        const i = d(n).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && d(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
  }
  render(t, e) {
    const { placeholder: n, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ m("span", { className: "close" }) }) : a = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: n,
          value: r,
          autoComplete: "off",
          onChange: this._handleChange,
          onInput: this._handleChange,
          ref: this._searchInput
        }
      ),
      a
    ] });
  }
}
class Ch extends vi {
  constructor() {
    super(...arguments), this._search = q(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ m("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ m("span", { className: "text", children: /* @__PURE__ */ m(H, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n, hotkeys: i } = t;
    return /* @__PURE__ */ m(
      sa,
      {
        inline: !0,
        id: t.id,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: n,
        hotkeys: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: n, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c } = this.props, u = n && r;
    let h;
    const p = !u && !e.length;
    return a && (!p || o === void 0) ? (typeof a == "function" ? h = a.call(this, l, e) : typeof a == "string" && (h = V(a, { value: i, values: l, count: l.length })), h = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: h }, "selections")) : p ? h = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "selections") : h = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      u ? this._renderSearch(t) : null
    ] }, "selections"), [
      h,
      c,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        d(`#${o}`).val(n);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ m("option", { value: u, children: u }, u)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    d(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = d(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", So), this._skipTriggerChange = !1;
    }
  }
}
class Sh extends vi {
  constructor() {
    super(...arguments), this._search = q(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  _getSearchPlaceholder() {
    const { searchHint: t, state: { value: e, selections: n } } = this.props;
    let i = t;
    if (i === void 0) {
      const r = n.find((o) => o.value === e);
      r && typeof r.text == "string" && (i = r.text);
    }
    return i;
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: n } = t;
    return /* @__PURE__ */ m(
      sa,
      {
        ref: this._search,
        id: t.id,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder(),
        hotkeys: n
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: n = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: u, display: h } = t, [p] = n, f = r && a;
    let g;
    if (f)
      g = this._renderSearch(t);
    else if (p || o === void 0 && h) {
      const { text: v } = p || { text: "", value: "" };
      typeof h == "function" ? g = h.call(this, i, n) : typeof h == "string" ? g = V(h, p) : g = /* @__PURE__ */ m(H, { content: v }), g = /* @__PURE__ */ m("span", { className: "picker-single-selection", title: typeof v == "string" ? v : void 0, children: g }, "main");
    } else
      g = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "main");
    const _ = u && !f ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      g,
      e,
      _,
      f ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
class os extends J {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
}
os.NAME = "tree";
os.defaultProps = {
  ...J.defaultProps,
  indent: 12
};
os.defaultItemProps = {
  ...J.defaultItemProps,
  innerComponent: "div"
};
os.inheritNestedProps = [...J.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class on extends _t {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return os.getTreeItem(t, super._getItem(t, e, n));
  }
}
on.NAME = "tree";
on.inheritNestedProps = [..._t.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
on.defaultItemProps = {
  ..._t.defaultProps,
  innerComponent: "div"
};
function na(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && na(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class kh extends Do {
  constructor() {
    super(...arguments), this._menu = q(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((u, h, p) => {
        const f = this._getItem(h, p);
        return f && (f.selected ? o = !0 : r = !1, u.push(f)), u;
      }, []));
      const a = r || n.has(t.value);
      t = {
        selected: a,
        hint: typeof t.text == "string" ? t.text : void 0,
        ...t,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: x(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      }, a && !t.disabled && this._firstSelected === void 0 && (this._firstSelected = t.key), t.content && t.text && delete t.text;
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && (l.disabled && this._disabledSet.add(l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var n;
      return (n = this._renderItemCallback) == null ? void 0 : n.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value, i = e.target;
      if (t.disabled || n === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((u) => this._disabledSet.has(u.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...na(t.items).values()].filter((p) => !p.items && !this._disabledSet.has(p.value)).map((p) => p.value);
          d(i).closest(".item").children(".item-inner.selected").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  get menu() {
    return this._menu.current;
  }
  componentDidMount() {
    var t, e;
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), d(this.element).on("activeNext.zui.Picker", () => {
      var n;
      (n = this.menu) == null || n.activeNext();
    }).on("activePrev.zui.Picker", () => {
      var n;
      (n = this.menu) == null || n.activePrev();
    }).on("selectActive.zui.Picker", () => {
      const n = this.menu;
      if (!n)
        return;
      const i = n.getActiveKey();
      if (i !== void 0) {
        const r = n.getRenderedItem(i);
        r && d(this.element).find(`.item[z-key-path="${r._keyPath}"]`).trigger("click");
      }
    }).on("hidePop.zui.Picker", () => {
      this.props.togglePop(!1);
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), d(this.element).off(".zui.Picker");
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c } = t, { items: u, search: h } = i;
    return W({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      limit: c,
      items: u,
      defaultNestedShow: !0,
      activeOnHover: !0,
      search: h,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"],
      header: o,
      footer: a,
      noMatchHint: l
    }, e, n);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const n = this._getMenuProps(t);
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ m(on, { ...n }) : /* @__PURE__ */ m(_t, { ...n });
  }
}
function me(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && me(n.items, e), e.set(n.value === void 0 ? "" : String(n.value), n), e), t || /* @__PURE__ */ new Map());
}
let Oi = class extends yt {
  constructor(t) {
    super(t), this._updateTimer = 0, this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r = []) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((c) => !a.has(c));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const o = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), d.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: n = "" } = this.props;
    this._emptyValueSet = new Set(n.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => {
        typeof r.value == "number" && (r.value = String(r.value));
      }), t.limitValueInList) {
        const r = me(i);
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value ?? "");
    }
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  deselectAll() {
    this.setValue([]);
  }
  selectAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return;
    const n = [...me(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(n);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = me(t), n = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || n.has(i.value));
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: n } = this.props, { search: i } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else {
      if (await ks(n || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = V(o, { search: encodeURIComponent(i) })), r = await ai(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = me(r);
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || n.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      a = a.filter((l) => (l.key = l.key ?? l.value, typeof l.value == "number" && (l.value = String(l.value)), !this.isEmptyValue(l.value))), r.loading = !1, r.items = a, i.items = n.items, i.search = e.search;
    } else
      i.items && !e.open && n.cache === !1 && !Array.isArray(n.items) && (i.items = void 0);
    (t || i.value !== e.value) && (i.value = e.value);
    const o = r.items;
    n.required && !n.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
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
  _handleChange(t, e) {
    if (super._handleChange(t, e), t !== e) {
      const { onDeselect: n, onSelect: i, onClear: r, multiple: o } = this.props, a = this.formatValueList(e), l = this.valueList;
      if (r && !l.length && a.length && r.call(this), n) {
        const c = a.filter((u) => !l.includes(u));
        c.length && n.call(this, o ? c : c[0]);
      }
      if (i) {
        const c = l.filter((u) => !a.includes(u));
        c.length && i.call(this, o ? c : c[0]);
      }
    }
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
      multiple: t.multiple,
      hotkeys: t.hotkeys,
      placeholder: t.placeholder,
      search: t.search,
      display: t.display,
      searchHint: t.searchHint,
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
      maxItemsCount: t.maxItemsCount,
      footer: this._renderToolbar(),
      valueList: this.valueList,
      noMatchHint: t.searchEmptyHint ?? j.getLang("searchEmptyHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Ch : Sh);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: j.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: j.getLang("cancelSelect")
    }]), St.render(t, [], { size: "sm", getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], d.unique(e).reduce((n, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || n.push(i)), n), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    let n = this.formatValueList(t);
    if (n.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = me(Array.isArray(r) ? r : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    return super.setValue(i, e);
  }
};
Oi.defaultProps = {
  ...yt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
Oi.Pop = kh;
class ia extends U {
}
ia.NAME = "Picker";
ia.Component = Oi;
j.addLang({
  zh_cn: {
    selectAll: "全选",
    cancelSelect: "取消选择",
    searchEmptyHint: "无匹配选项"
  },
  zh_tw: {
    selectAll: "全選",
    cancelSelect: "取消選擇",
    searchEmptyHint: "無匹配選項"
  },
  en: {
    selectAll: "Select All",
    cancelSelect: "Cancel Select",
    searchEmptyHint: "No matching options"
  }
});
class ra extends U {
}
ra.NAME = "SearchBox";
ra.Component = Xs;
ot(pc);
class oa extends U {
}
oa.NAME = "Toolbar";
oa.Component = St;
ot(lc);
const xh = '[data-toggle="tooltip"]';
class Bt extends ht {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: x("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Bt.NAME = "Tooltip";
Bt.DEFAULT = {
  ...ht.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
Bt.hideOthers = !0;
d(document).on(`click${Bt.NAMESPACE} mouseenter${Bt.NAMESPACE}`, xh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.data(Bt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Bt.ensure(t, { show: Bt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
var Vt, Ut;
class br extends B {
  constructor(e) {
    super(e);
    at(this, Vt, void 0);
    at(this, Ut, void 0);
    gt(this, Vt, 0), gt(this, Ut, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (it(this, Vt) && cancelAnimationFrame(it(this, Vt)), gt(this, Vt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), gt(this, Vt, 0);
      })), n.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.preventDefault(), n.stopPropagation();
    }, this._handleClick = (n) => {
      const i = n.currentTarget;
      if (!i)
        return;
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? n.clientX - r.left : n.clientY - r.top) - this.barSize / 2;
      this.scroll(c * l / a), n.preventDefault();
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
    const { scrollSize: e, clientSize: n } = this.props;
    return Math.max(0, e - n);
  }
  get barSize() {
    const { clientSize: e, scrollSize: n, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / n), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (gt(this, Ut, typeof e == "string" ? document : e.current), it(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), it(this, Ut) && it(this, Ut).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: n } = this.props;
    n && n(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: n,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: c,
      right: u
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: u,
      ...o
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, p) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, p) * (e - _.height) / h)), /* @__PURE__ */ m(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": f
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
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
Vt = new WeakMap(), Ut = new WeakMap();
const Is = /* @__PURE__ */ new Map(), Ps = [];
function aa(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && Is.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Is.set(e, s), t != null && t.buildIn && !Ps.includes(e) && Ps.push(e);
}
function nt(s, t) {
  aa(s, t);
  const e = (n) => {
    if (!n)
      return s;
    const { defaultOptions: i, ...r } = s;
    return {
      ...r,
      defaultOptions: { ...i, ...n }
    };
  };
  return e.plugin = s, e;
}
function la(s) {
  return Is.delete(s);
}
function Th(s) {
  if (typeof s == "string") {
    const t = Is.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function ca(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = Th(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && ca(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function Nh(s = [], t = !0) {
  return t && Ps.length && s.unshift(...Ps), s != null && s.length ? ca([], s, /* @__PURE__ */ new Set()) : [];
}
function ha() {
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
function Eh(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function wr(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function vn(s, t = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const n = s.width - s.totalWidth;
    if (!t && n > 0 || t && n !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math[n < 0 ? "max" : "min"](n, Math.ceil(n * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let e = 0;
  s.list.forEach((n) => {
    n.realWidth || (n.realWidth = n.width), n.left = e, e += n.realWidth;
  });
}
function $h(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = wr(b, 0), b < 1 && (b = Math.round(b * n)), b), u = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, h = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(a)
  }, p = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, f = [], g = {};
  let _ = !1;
  const y = [], v = {};
  if (e.forEach((b) => {
    const { colTypes: w, onAddCol: S } = b;
    w && Object.entries(w).forEach(([k, T]) => {
      v[k] || (v[k] = []), v[k].push(T);
    }), S && y.push(S);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: w = "", name: S } = b, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: w
    }, T = {
      name: S,
      type: w,
      setting: k,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, A = v[w];
    A && A.forEach(($) => {
      const F = typeof $ == "function" ? $.call(s, k) : $;
      F && Object.assign(k, F, b);
    });
    const { fixed: I, flex: M, minWidth: E = r, maxWidth: P = o } = k, R = wr(k.width || i, i);
    T.flex = M === !0 ? 1 : typeof M == "number" ? M : 0, T.width = Eh(R < 1 ? Math.round(R * n) : R, E, P), y.forEach(($) => $.call(s, T)), f.push(T), g[T.name] = T;
    const L = I ? I === "left" ? h : p : u;
    L.list.push(T), L.totalWidth += T.width, L.width = L.totalWidth, T.flex && L.flexList.push(T), typeof k.order == "number" && (_ = !0);
  }), _) {
    const b = (w, S) => (w.setting.order ?? 0) - (S.setting.order ?? 0);
    f.sort(b), h.list.sort(b), u.list.sort(b), p.list.sort(b);
  }
  return vn(h, !0), vn(p, !0), u.widthSetting = n - h.width - p.width, vn(u), {
    list: f,
    map: g,
    left: h,
    center: u,
    right: p
  };
}
function Mh(s) {
  var L;
  const { col: t, className: e, height: n, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: p, ...f } = s, g = {
    left: h ?? t.left,
    top: p ?? i.top,
    width: u ?? t.realWidth,
    height: n,
    ...a
  }, { align: _, border: y } = t.setting, v = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...t.setting.cellStyle,
    ...o
  }, b = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", t.setting.cellClass], S = (L = i.data) == null ? void 0 : L[t.name], k = [l ?? S ?? ""], T = r ? r(k, { row: i, col: t, value: S }, s, wt) : k, A = [], I = [], M = {}, E = {};
  let P = "div";
  T == null || T.forEach(($) => {
    if (typeof $ == "object" && $ && !bt($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $ || "tagName" in $)) {
      const F = $.outer ? A : I;
      $.html ? F.push(/* @__PURE__ */ m("div", { className: x("dtable-cell-html", $.className), style: $.style, dangerouslySetInnerHTML: { __html: $.html }, ...$.attrs ?? {} })) : ($.style && Object.assign($.outer ? g : v, $.style), $.className && ($.outer ? b : w).push($.className), $.children && F.push($.children), $.attrs && Object.assign($.outer ? M : E, $.attrs)), $.tagName && !$.outer && (P = $.tagName);
    } else
      I.push($);
  });
  const R = P;
  return /* @__PURE__ */ m(
    "div",
    {
      className: x(b),
      style: g,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...M,
      children: [
        I.length > 0 && /* @__PURE__ */ m(R, { className: x(w), style: v, ...E, children: I }),
        A
      ]
    }
  );
}
function bn({
  rows: s = [],
  cols: t,
  rowHeight: e,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: u = Mh,
  onRenderCell: h
}) {
  var _;
  const p = Array.isArray(s) ? s : [s], f = ((_ = p[0]) == null ? void 0 : _.top) ?? 0, g = p.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -n, top: -i + f }, children: p.reduce((y, v, b) => {
        const w = t.length;
        return t.forEach((S, k) => {
          y.push(
            /* @__PURE__ */ m(
              u,
              {
                className: x(
                  `is-${v.index % 2 ? "odd" : "even"}-row`,
                  k ? "" : "is-first-in-row",
                  k === w - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === g - 1 ? "is-last-row" : ""
                ),
                col: S,
                row: v,
                top: v.top - f,
                height: e,
                onRenderCell: h
              },
              `${v.index}:${S.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function ua({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: u,
  onRenderCell: h,
  children: p
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ m(
    bn,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: h
    },
    "left"
  ));
  let g = null;
  r.list.length && (g = /* @__PURE__ */ m(
    bn,
    {
      rows: n,
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
  return o.list.length && (_ = /* @__PURE__ */ m(
    bn,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: h
    },
    "right"
  )), /* @__PURE__ */ m(
    "div",
    {
      className: x("dtable-block", c),
      style: { ...u, top: s, height: t },
      children: [
        f,
        g,
        _,
        p
      ]
    }
  );
}
var Hi = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, N = (s, t, e) => (Hi(s, t, "read from private field"), e ? e.call(s) : t.get(s)), D = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, G = (s, t, e, n) => (Hi(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), lt = (s, t, e) => (Hi(s, t, "access private method"), e), ge, Le, Se, Dt, ie, rt, Pt, It, ze, gs, Rs, Ge, jt, Fe, Oe, Fn, da, On, fa, Hn, pa, Wn, ma, _s, jn, an, Ds, Bn, Vn, Un, Kn, He, ys, Ls, Wi, ji, ga, qn, _a;
let Bi = class extends B {
  constructor(t) {
    super(t), D(this, Fn), D(this, On), D(this, Hn), D(this, Wn), D(this, _s), D(this, He), D(this, Ls), D(this, ji), D(this, qn), this.ref = q(), D(this, ge, 0), D(this, Le, void 0), D(this, Se, !1), D(this, Dt, void 0), D(this, ie, void 0), D(this, rt, []), D(this, Pt, void 0), D(this, It, /* @__PURE__ */ new Map()), D(this, ze, {}), D(this, gs, void 0), D(this, Rs, []), D(this, Ge, { in: !1 }), this.updateLayout = () => {
      N(this, ge) && cancelAnimationFrame(N(this, ge)), G(this, ge, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, ge, 0);
      }));
    }, D(this, jt, (e, n) => {
      n = n || e.type;
      const i = N(this, It).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), D(this, Fe, (e) => {
      N(this, jt).call(this, e, `window_${e.type}`);
    }), D(this, Oe, (e) => {
      N(this, jt).call(this, e, `document_${e.type}`);
    }), D(this, an, (e, n, i, r) => {
      const { row: o, col: a } = n;
      n.value = this.getCellValue(o, a), e[0] = n.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, n, i, r)), N(this, rt).forEach((c) => {
        c[l] && (e = c[l].call(this, e, n, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, n, i, r)), e;
    }), D(this, Ds, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), D(this, Bn, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), N(this, rt).forEach((u) => {
          var h;
          (h = u.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const u = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
            return;
          for (const h of N(this, rt))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
              return;
        }
      }
    }), D(this, Vn, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), D(this, Un, (e) => {
      const n = d(e.target).closest(".dtable-cell");
      if (!n.length)
        return lt(this, He, ys).call(this, !1);
      lt(this, He, ys).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), D(this, Kn, () => {
      lt(this, He, ys).call(this, !1);
    }), G(this, Le, t.id ?? `dtable-${ut()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, ie, Object.freeze(Nh(t.plugins))), N(this, ie).forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(N(this, ze), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), lt(this, Ls, Wi).call(this), N(this, rt).forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, Pt)) == null ? void 0 : t.options) || N(this, Dt) || ha();
  }
  get plugins() {
    return N(this, rt);
  }
  get layout() {
    return N(this, Pt);
  }
  get id() {
    return N(this, Le);
  }
  get data() {
    return N(this, ze);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, Ge);
  }
  componentWillReceiveProps() {
    G(this, Dt, void 0);
  }
  componentDidMount() {
    N(this, Se) ? this.forceUpdate() : lt(this, _s, jn).call(this), this.on("click", N(this, Bn)), this.on("keydown", N(this, Vn));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", N(this, Un)), this.on("mouseleave", N(this, Kn)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const n = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        G(this, gs, r);
        const { parent: o } = this;
        n.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : d(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      n.includes("window") && this.on("window_resize", this.updateLayout);
    }
    N(this, rt).forEach((n) => {
      var r;
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, a]) => {
        a && this.on(o, a);
      })), (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    lt(this, _s, jn).call(this), N(this, rt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, gs)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of N(this, It).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), N(this, Fe)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), N(this, Oe)) : t.removeEventListener(n, N(this, jt));
    N(this, rt).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), N(this, ie).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), G(this, ze, {}), N(this, It).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    i ? i.push(e) : (N(this, It).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Fe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Oe)) : (r = this.element) == null || r.addEventListener(t, N(this, jt)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Fe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Oe)) : (o = this.element) == null || o.removeEventListener(t, N(this, jt)));
  }
  emitCustomEvent(t, e) {
    N(this, jt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var n;
      this._noAnimation = void 0, (n = this.element) == null || n.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: u } = t;
    let { scrollLeft: h, scrollTop: p } = t;
    if (u === "up" || u === "down")
      p = i + (u === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (u === "left" || u === "right")
      h = n + (u === "right" ? 1 : -1) * c;
    else if (u === "top")
      p = 0;
    else if (u === "bottom")
      p = r - o;
    else if (u === "begin")
      h = 0;
    else if (u === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (p = i + _);
    }
    const f = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (f.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (f.scrollTop = p)), Object.keys(f).length ? (this.setState(f, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, f), e == null || e.call(this, !0);
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
    const { rows: e, rowsMap: n, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : n[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const n = typeof t == "object" ? t : this.getRowInfo(t);
    if (!n)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let r = n.id === "HEADER" ? i.setting.title : (a = n.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, n, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!N(this, Dt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      G(this, Pt, void 0);
    else if (n === "options") {
      if (G(this, Dt, void 0), !N(this, Pt))
        return;
      G(this, Pt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = d(e).closest(".dtable-cell");
    if (!n.length)
      return;
    const i = n.attr("data-row"), r = n.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: n[0],
        colName: r,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, n) {
    return j(N(this, Rs), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = lt(this, qn, _a).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: u, style: h = {} } = this.options, p = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], f = [];
    if (t) {
      const g = !t.rows.length;
      if (c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      N(this, rt).forEach((_) => {
        var v;
        const y = (v = _.beforeRender) == null ? void 0 : v.call(this, t);
        y && (t = y);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, h["--dtable-header-height"] = `${t.headerHeight}px`, p.push(
        t.className,
        g ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && f.push(...t.children), g && u ? (delete h.height, f.push(
        /* @__PURE__ */ m("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ m(H, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (f.push(
        lt(this, Fn, da).call(this, t),
        lt(this, On, fa).call(this, t),
        lt(this, Hn, pa).call(this, t)
      ), t.scrollable && f.push(lt(this, Wn, ma).call(this, t))), N(this, rt).forEach((_) => {
        var v;
        const y = (v = _.onRender) == null ? void 0 : v.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && p.push(y.className), y.children && f.push(y.children));
      });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        id: N(this, Le),
        className: x(p),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: f
      }
    );
  }
};
ge = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakSet();
da = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ m(
      ua,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, an),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    mo,
    {
      className: "dtable-header",
      style: { height: n },
      renders: o,
      generateArgs: [s],
      generatorThis: this,
      children: r
    },
    "header"
  );
};
On = /* @__PURE__ */ new WeakSet();
fa = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ m(
    ua,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, an),
      children: l
    },
    "body"
  );
};
Hn = /* @__PURE__ */ new WeakSet();
pa = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    mo,
    {
      className: "dtable-footer",
      style: { height: s.footerHeight, top: s.rowsHeight + s.headerHeight },
      renders: e,
      generateArgs: [s],
      generatorThis: this,
      generators: s.footerGenerators,
      children: s.footerChildren
    },
    "footer"
  );
};
Wn = /* @__PURE__ */ new WeakSet();
ma = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = s, { scrollbarSize: h = 12, horzScrollbarPos: p, vertScrollbarPos: f } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ m(
      br,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, Ds),
        left: n,
        bottom: (p === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: u + a } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: u + a } })
  ), l > a && t.push(
    /* @__PURE__ */ m(
      br,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, Ds),
        right: f === "outside" ? -h : 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
_s = /* @__PURE__ */ new WeakSet();
jn = function() {
  var s;
  G(this, Se, !1), N(this, rt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (s = this.options.afterRender) == null || s.call(this);
};
an = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakMap();
Un = /* @__PURE__ */ new WeakMap();
Kn = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakSet();
ys = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = d(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, Ge);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, Ge, i);
};
Ls = /* @__PURE__ */ new WeakSet();
Wi = function() {
  if (N(this, Dt))
    return !1;
  const t = { ...ha(), ...N(this, ie).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return G(this, Dt, t), G(this, rt, N(this, ie).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), G(this, Rs, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
ji = /* @__PURE__ */ new WeakSet();
ga = function() {
  var I, M;
  const { plugins: s } = this;
  let t = N(this, Dt);
  const e = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((E) => {
    var R;
    const P = (R = E.beforeLayout) == null ? void 0 : R.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, E.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: E } = this;
    if (E)
      i = E.clientWidth;
    else {
      G(this, Se, !0);
      return;
    }
  }
  const r = $h(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], u = (E, P, R) => {
    var $, F;
    const L = { data: R ?? { [a]: E }, id: E, index: c.length, top: 0 };
    if (R || (L.lazy = !0), c.push(L), (($ = t.onAddRow) == null ? void 0 : $.call(this, L, P)) !== !1) {
      for (const tt of s)
        if (((F = tt.onAddRow) == null ? void 0 : F.call(this, L, P)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let E = 0; E < o; E++)
      u(`${E}`, E);
  else
    Array.isArray(o) && o.forEach((E, P) => {
      typeof E == "object" ? u(`${E[a] ?? ""}`, P, E) : u(`${E ?? ""}`, P);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const E = t.onAddRows.call(this, h, r);
    E && (h = E);
  }
  for (const E of s) {
    const P = (I = E.onAddRows) == null ? void 0 : I.call(this, h, r);
    P && (h = P);
  }
  h.forEach((E, P) => {
    p[E.id] = E, E.index = P, E.top = E.index * l;
  });
  const { header: f, footer: g } = t, _ = f ? t.headerHeight || l : 0, y = g ? t.footerHeight || l : 0;
  let v = t.height, b = 0;
  const w = h.length * l, S = _ + y + w;
  if (typeof v == "function" && (v = v.call(this, S)), v === "auto")
    b = S;
  else if (typeof v == "object")
    b = Math.min(v.max, Math.max(v.min, S));
  else if (v === "100%") {
    const { parent: E } = this;
    if (E)
      b = E.clientHeight;
    else {
      b = 0, G(this, Se, !0);
      return;
    }
  } else
    b = v;
  const k = b - _ - y, T = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: w,
    header: f,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: y,
    cols: r
  }, A = (M = t.onLayout) == null ? void 0 : M.call(this, T);
  A && Object.assign(T, A), s.forEach((E) => {
    if (E.onLayout) {
      const P = E.onLayout.call(this, T);
      P && Object.assign(T, P);
    }
  }), G(this, Pt, T);
};
qn = /* @__PURE__ */ new WeakSet();
_a = function() {
  (lt(this, Ls, Wi).call(this) || !N(this, Pt)) && lt(this, ji, ga).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((g) => {
    g.left = n, n += g.realWidth, g.visible = g.left + g.realWidth >= e && g.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), p = [], { rowDataGetter: f } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
    _.lazy && f && (_.data = f([_.id])[0], _.lazy = !1), p.push(_);
  }
  return Object.assign(s, {
    visibleRows: p,
    scrollTop: l,
    scrollLeft: e,
    headerChildren: [],
    bodyChildren: [],
    footerChildren: [],
    children: [],
    className: "",
    scrollable: !0
  }), s;
};
Bi.addPlugin = aa;
Bi.removePlugin = la;
function ya(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ m("a", { href: V(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Vi(s, t, e) {
  if (s == null)
    return;
  const n = t.row.data;
  return e = e ?? (n == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : V(s, { ...n, 0: e });
}
function va(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? n ?? "" : s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), pt(e, s, n ?? e))) : n ?? e;
}
function ba(s, t) {
  const { link: e } = t.col.setting, n = ya(e, t, s[0]);
  return n && (s[0] = n), s;
}
function wa(s, t) {
  const { format: e, digits: n } = t.col.setting;
  let i = s[0];
  return typeof n == "number" && !Number.isNaN(Number(i)) && (i = Number(i), n >= 0 && (i = i.toFixed(n))), e && (i = Vi(e, t, i)), s[0] = i, s;
}
function Ca(s, t) {
  const { map: e, mapSplitter: n = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = s[0];
    typeof r == "string" && n && (r = r.split(n)), typeof e == "function" ? s[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), s[0] = r.map((o) => e[o] ?? o).join(i ?? n));
  }
  return s;
}
function Sa(s, t, e) {
  const n = {};
  return typeof s == "function" ? Object.assign(n, s(e)) : Object.keys(s).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[s[i]];
    r !== void 0 && (n[i] = r);
  }), Object.keys(n).length && t.push({ style: n }), t;
}
function ka(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = va(n, t, s[0], i), s;
}
function Gn(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Vi(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const Ah = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Gn(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: u = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ m(
          yi,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ m(
          tn,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: u,
            text: !0
          }
        ), s;
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
  onRenderCell(s, t) {
    const { formatDate: e, html: n, hint: i, styleMap: r } = t.col.setting;
    if (e && (s = ka(s, t, e)), s = Ca(s, t), s = wa(s, t), n ? s = Gn(s, t) : s = ba(s, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = V(i, t.row.data) : typeof s[0] == "string" && (o = s[0]), s.push({ attrs: { title: o } });
    }
    return r && (s = Sa(r, s, t)), s;
  }
}, Ih = nt(Ah, { buildIn: !0 }), Ph = {
  default: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return n === i ? 0 : n == null ? 1 : String(n).localeCompare(String(i));
  },
  date: (s, t, e) => {
    var r, o;
    const n = z(((r = s.data) == null ? void 0 : r[e.name]) ?? 0), i = z(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return n.getTime() - i.getTime();
  },
  number: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(n) - Number.parseFloat(i);
  }
}, Rh = {
  name: "sort",
  defaultOptions: { sort: !0 },
  when: (s) => !!s.sort,
  onCreate() {
    const { sortBy: s } = this.options;
    s && (this.state.sortBy = Array.isArray(s) ? s : [s]);
  },
  onAddRows(s, t) {
    const { sortBy: e } = this.state;
    if (!e || !e.length)
      return;
    const { sort: n } = this.options, i = {
      ...Ph,
      ...typeof n == "function" ? { default: n } : typeof n == "object" ? n : {}
    };
    return [...s].sort((r, o) => {
      for (const { name: a, order: l } of e) {
        const c = t.map[a];
        if (!c)
          continue;
        let u = c.setting.sort;
        if (u === !0 ? u = i.default : typeof u == "string" && (u = i[u]), !u)
          continue;
        const h = u.call(this, r, o, c);
        if (h)
          return l === "asc" ? h : -h;
      }
      return 0;
    });
  },
  onHeaderCellClick(s, t) {
    if (!s.target.closest(".dtable-sort-link"))
      return;
    const e = this.getColInfo(t.colName);
    if (!e || !e.setting.sort)
      return;
    const { sortBy: n = [] } = this.state, i = n.findIndex((a) => a.name === e.name), { multiSort: r } = this.options;
    let o = "asc";
    if (i >= 0) {
      const a = n[i].order;
      a === "asc" ? o = "desc" : a === "desc" && (o = "none"), r && n.splice(i, 1);
    }
    r || (n.length = 0), this.update({ dirtyType: "layout", state: { sortBy: [{ name: t.colName, order: o }, ...n].filter((a) => a.order !== "none") } });
  },
  onRenderHeaderCell(s, t) {
    var l;
    const { col: e } = t, { sortBy: n } = this.state;
    if (!e.setting.sort)
      return s;
    const o = ((l = n == null ? void 0 : n.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${o}` });
    return s[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      s[0],
      a
    ] }), s.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), s;
  }
}, Dh = nt(Rh, { buildIn: !0 }), Lh = {
  html: { component: we }
}, zh = {
  name: "custom",
  onRenderCell(s, t) {
    const { col: e } = t;
    let { custom: n } = e.setting;
    if (typeof n == "function" && (n = n.call(this, t)), !n)
      return s;
    const i = Array.isArray(n) ? n : [n], { customMap: r } = this.options;
    return i.forEach((o) => {
      let a;
      typeof o == "string" ? a = o.startsWith("<") ? {
        component: we,
        props: { html: V(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Lh[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((p) => {
        if (p) {
          const { props: f } = p;
          f && d.extend(u, typeof f == "function" ? f.call(this, t) : f), l = p.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(h, { ...u }) };
    }), s;
  }
}, Fh = nt(zh);
function Oh(s, t) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const e = this.state.checkedRows, n = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, u) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === u || (u ? e[c] = !0 : delete e[c], n[c] = u);
  };
  if (s === void 0 ? (t === void 0 && (t = !xa.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !e[c]);
  })), Object.keys(n).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, n, e);
    c && Object.keys(c).forEach((u) => {
      const h = i ? i.call(this, u) : !0;
      !h || !r && h === "disabled" || (c[u] ? e[u] = !0 : delete e[u]);
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, n);
    });
  }
  return n;
}
function Hh(s) {
  return this.state.checkedRows[s] ?? !1;
}
function xa() {
  var i, r;
  const s = (i = this.layout) == null ? void 0 : i.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e, allowCheckDisabled: n } = this.options;
  return e ? t === ((r = this.layout) == null ? void 0 : r.allRows.reduce((o, a) => {
    const l = e ? e.call(this, a.id) : !0;
    return o + (!l || !n && l === "disabled" ? 0 : 1);
  }, 0)) : t === s;
}
function Wh() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function jh(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function Cr(s, t, e = !1, n = void 0) {
  return /* @__PURE__ */ m(Zs, { className: "dtable-checkbox", checked: s, disabled: e, label: n });
}
const Sr = 'input[type="checkbox"],.dtable-checkbox', Bh = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Cr
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? s.checkable = t : s.checkable === "auto" && (s.checkable = !!s.cols.some((e) => e.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Oh,
    isRowChecked: Hh,
    isAllRowChecked: xa,
    getChecks: Wh,
    toggleCheckable: jh
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
      const s = this.isAllRowChecked();
      return [
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Cr(s, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [/* @__PURE__ */ m(H, { className: "dtable-check-info", content: n.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ m("div", { className: "dtable-check-info", children: r.join(", ") })
      ];
    }
  },
  onCreate() {
    const { checkedRows: s } = this.options;
    s && this.setState((t) => ({
      checkedRows: {
        ...t.checkedRows,
        ...s.reduce((e, n) => (e[n] = !0, e), {})
      }
    }));
  },
  onRenderCell(s, { row: t, col: e }) {
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const u = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, r === "disabled");
      s.push(
        u,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var o;
    const { id: n } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, n) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, n);
      s.push(l, { outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    if (this.data.disableCheckable)
      return;
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(Sr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = d(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Sr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, Vh = nt(Bh), Uh = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new ss(`DTable:${this.id}`) };
  }
}, Kh = nt(Uh);
var Ta = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Ta || {});
function zs(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = zs.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? zs.call(this, t.parent).level + 1 : 0, t;
}
function qh(s) {
  return s !== void 0 ? zs.call(this, s) : this.data.nestedMap;
}
function Gh(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Na.call(this)), t) {
      const i = n.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (e[r] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      const o = n.get(r);
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
function Na() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Ea(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Ea(s, t, o.children, n + 1)));
  }
  return t;
}
function $a(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, $a(s, r, e, n);
  }), i;
}
function Ma(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Ma(s, r.parent, e, n, i);
}
const us = "dtable-nested-toggle", Yh = {
  name: "nested",
  plugins: [Kh],
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, t) {
      const { nestedMap: e } = this.data, n = e.get(s.id), i = e.get(t.id);
      return (n == null ? void 0 : n.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, t, e) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const n = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = $a(this, i, r, n);
        o != null && o.parent && Ma(this, o.parent, r, n, e);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((t) => t.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map(), nestedRowMap: /* @__PURE__ */ new Map() };
  },
  state() {
    return { nestedState: {} };
  },
  methods: {
    getNestedInfo: qh,
    toggleRow: Gh,
    isAllCollapsed: Na,
    getNestedRowInfo: zs
  },
  onCreate() {
    let { defaultNestedState: s } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (s = t);
    }
    this.state.nestedState = s || {};
  },
  beforeLayout() {
    this.data.nestedMap.clear(), this.data.nestedRowMap.clear();
  },
  onAddRow(s) {
    this.data.nestedRowMap.set(s.id, s);
  },
  onAddRows(s) {
    const { nestedMap: t, nestedRowMap: e } = this.data;
    return s.forEach((n) => {
      var a, l;
      const i = t.get(n.id) ?? {
        state: "",
        level: 0
      };
      let r = ((a = n.data) == null ? void 0 : a[this.options.nestedParentKey ?? "parent"]) ?? [];
      Array.isArray(r) || (r = [r]);
      let o;
      for (r = [...r]; r.length; ) {
        let c = r.pop();
        if (c === void 0)
          continue;
        if (c = String(c), e.get(c)) {
          o = c;
          break;
        }
      }
      if (i.parent = o === "0" ? void 0 : o, (l = n.data) != null && l[this.options.asParentKey ?? "asParent"] && (i.children = []), t.set(n.id, i), o) {
        let c = t.get(o);
        c || (c = {
          state: "",
          level: 0
        }, t.set(o, c)), c.children || (c.children = []), c.children.push(n.id);
      }
    }), s = s.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), Ea(this.data.nestedMap), s.sort((n, i) => {
      const r = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(i.id), a = (r.order ?? 0) - (o.order ?? 0);
      return a === 0 ? n.index - i.index : a;
    }), s;
  },
  onRenderCell(s, t) {
    var c;
    const { row: e, col: n } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = n.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const u = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(u) && u > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ m("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: V(a, r) }) : h = /* @__PURE__ */ m(H, { className: "dtable-child-label", content: a, generatorThis: t }), s.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && s.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, n, r)) ?? /* @__PURE__ */ m("a", { className: `${us} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: u = o } = n.setting;
      u && (u === !0 && (u = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: u * l.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ m("a", { className: `${us} state`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(`.${us}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${us}`)))
      return this.toggleRow(t), !0;
  }
}, Jh = nt(Yh);
function wn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarCodeKey: a, avatarNameKey: l = `${e.name}Name` } = e.setting;
  let { avatarProps: c = {} } = e.setting;
  typeof c == "function" && (c = c(e, t));
  const u = (n ? n[l] : i) || s[0], h = {
    size: "xs",
    src: n ? n[o] : void 0,
    text: u,
    code: a ? n ? n[a] : void 0 : i,
    ...c,
    className: x(r, c.className, "flex-none")
  };
  if (s[0] = /* @__PURE__ */ m(Ys, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, f = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      s[0],
      /* @__PURE__ */ m("div", { children: u })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ m("span", { children: u })
    ] }));
  return s;
}
const Zh = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: wn
    },
    avatarBtn: {
      onRenderCell: wn
    },
    avatarName: {
      onRenderCell: wn
    }
  }
}, Xh = nt(Zh, { buildIn: !0 }), Qh = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { setting: n } = e;
    let { sortType: i } = n;
    if (e.setting.sort !== void 0 || i === !1)
      return s;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${a}` });
      s.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = n;
      if (c) {
        const u = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, u, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...p } = c;
        s[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: V(h, { ...n, sortType: u }), ...p, children: [
          s[0],
          l
        ] });
      } else
        s.push(l);
    }
    return s;
  }
}, tu = nt(Qh, { buildIn: !0 }), Cn = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, eu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Cn(t.left.list), Cn(t.center.list), Cn(t.right.list);
  }
}, su = nt(eu);
const nu = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data() {
    return { headerGroups: /* @__PURE__ */ new Map() };
  },
  when: (s) => !!s.headerGroup,
  beforeLayout(s) {
    const { headerGroups: t } = this.data;
    t.clear();
    const { cols: e } = s;
    if (!(e != null && e.length))
      return;
    const n = {};
    return e.forEach((i, r) => {
      const { headerGroup: o } = i;
      if (!o) {
        n[i.name] = r;
        return;
      }
      let a = t.get(o);
      a ? a.cols.push(i.name) : (a = { cols: [i.name], index: r }, t.set(o, a)), n[i.name] = a.index + a.cols.length / e.length;
    }), e.sort((i, r) => n[i.name] - n[r.name]), {
      headerHeight: !s.headerHeight && s.rowHeight ? s.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(s, { col: t }) {
    const { headerGroup: e } = t.setting;
    if (e) {
      const n = this.data.headerGroups.get(e), i = this.layout.headerHeight / 2;
      if (t.name === n.cols[0]) {
        const r = n.cols.reduce((a, l) => {
          var c;
          return a + (((c = this.getColInfo(l)) == null ? void 0 : c.realWidth) ?? 0);
        }, 0), o = {
          height: i - 1,
          width: r - 1
        };
        s.push(/* @__PURE__ */ m("div", { class: "dtable-header-group", style: o, children: e }));
      }
      s.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return s;
  }
}, iu = nt(nu), ru = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: n } = this.data, { rows: i, cols: r, rowHeight: o } = s;
    e.clear(), n.clear();
    const a = (l, c, u) => {
      const { index: h } = c;
      l.forEach((p, f) => {
        const { index: g } = p, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const y = t.call(this, { row: c, col: p });
        if (!y)
          return;
        const v = Math.min(y.colSpan || 1, l.length - f), b = Math.min(y.rowSpan || 1, i.length - u);
        if (v <= 1 && b <= 1)
          return;
        let w = 0;
        for (let S = 0; S < v; S++) {
          w += l[f + S].realWidth;
          for (let k = 0; k < b; k++) {
            const T = `C${g + S}R${h + k}`;
            T !== _ && n.add(T);
          }
        }
        e.set(_, {
          colSpan: v,
          rowSpan: b,
          width: w,
          height: o * b
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((u) => {
        a(r[u].list, l, c);
      });
    });
  },
  onRenderCell(s, { row: t, col: e }) {
    const n = `C${e.index}R${t.index}`;
    if (this.data.overlayedCellSet.has(n))
      s.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(n);
      i && s.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return s;
  }
}, ou = nt(ru), au = {
  name: "mousemove",
  events: {
    mousemove(s) {
      this.data.mmRafID && (cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = 0), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", s);
      }), s.preventDefault();
    },
    document_mousemove(s) {
      this.data.dmmRafID && (cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = 0), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", s);
      });
    }
  }
}, Aa = nt(au);
function lu() {
  var b, w;
  const { scrollToMouse: s } = this.data;
  if (!s)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: n } = s;
  if (!t || Date.now() - e < n)
    return;
  const i = (w = (b = this.ref.current) == null ? void 0 : b.querySelector(".dtable-body")) == null ? void 0 : w.getBoundingClientRect();
  if (!i)
    return;
  const { maxStep: r, detectPadding: o, speed: a, side: l } = s, { x: c, y: u } = t, { left: h, top: p, right: f, bottom: g } = i;
  let _ = 0;
  c < h - o ? _ = -Math.max(r, h - o - c) : c > f - o && (_ = Math.max(r, c - (f - o)));
  let y = 0;
  if (u < p - o ? y = -Math.max(r, p - o - u) : u > g - o && (y = Math.max(r, u - (g - o))), l) {
    const S = new Set((Array.isArray(l) ? l : [l]).reduce((k, T) => (T === "x" ? k.push("left", "right") : T === "y" ? k.push("top", "bottom") : k.push(T), k), []));
    (!S.has("left") && _ < 0 || !S.has("right") && _ > 0) && (_ = 0), (!S.has("top") && y < 0 || !S.has("bottom") && y > 0) && (y = 0);
  }
  const v = {};
  _ !== 0 && (v.scrollLeft = this.layout.scrollLeft + a * _), y !== 0 && (v.scrollTop = this.layout.scrollTop + a * y), this.scroll(v);
}
const cu = {
  name: "autoscroll",
  plugins: [Aa],
  events: {
    document_mousemovesmooth(s) {
      if (!this.data.scrollToMouse)
        return;
      const { clientX: t, clientY: e } = s;
      this.data.scrollToMouse.position = { x: t, y: e };
    }
  },
  methods: {
    scrollTo({ col: s, row: t, extra: e = 2 }) {
      const n = this.getColInfo(s), i = this.getRowInfo(t);
      if (!n && !i)
        return !1;
      const r = {}, { layout: o } = this;
      if (n) {
        const { scrollLeft: a, cols: l } = o, c = n.left + n.realWidth;
        n.left < a ? r.scrollLeft = n.left - e : c > l.center.width + a && (r.scrollLeft = c - l.center.width + e);
      }
      if (i) {
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, u = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : u > c + a && (r.scrollTop = u - c + e);
      }
      return this.scroll(r), !0;
    },
    startScrollToMouse(s) {
      const t = {
        interval: 60,
        speed: 0.2,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...s
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(lu.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, hu = nt(cu);
const uu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(s, t) {
      return this.options.nested ? this.getNestedRowInfo(s.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (s) => !!s.sortable,
  plugins: [Aa, hu],
  events: {
    click(s) {
      this.data.ignoreNextClick && (s.preventDefault(), this.data.ignoreNextClick = void 0), s.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(s) {
      var a;
      if (this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick), this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options, e = d(s.target);
      if (!e.closest(t).length)
        return;
      const i = this.getPointerInfo(s);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, s)) === !1)
        return;
      e.closest("a,button,img").attr("draggable", "false").length && s.preventDefault();
      const o = s.clientY;
      this.data.sortableInfo = { from: r, offset: o - i.cellElement.getBoundingClientRect().top, startMouseY: o, lastMouseY: o };
    },
    document_mouseup(s) {
      var n;
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      this.stopScrollToMouse();
      const e = this.getSortingState(s);
      if (e) {
        let i, r;
        const { sortingFrom: o, sortingTo: a, sortingSide: l } = e;
        if (a && l) {
          const c = [...this.layout.rows], u = o.index, h = a.index, p = c.splice(u, 1);
          c.splice(h, 0, p[0]), i = {}, r = [], c.forEach(({ id: f }, g) => {
            i[f] = g, r.push(f);
          }), ((n = this.options.onSort) == null ? void 0 : n.call(this, o, a, l, r)) === !1 && (i = void 0, r = void 0);
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && (this.data.ignoreNextClick = window.setTimeout(() => {
          this.data.ignoreNextClick = void 0;
        })), this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: d.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, i ? { rowOrders: i } : null)
        }, () => {
          var c;
          (c = this.options.onSortEnd) == null || c.call(this, o, a, l, r), setTimeout(() => {
            this.data.disableCheckable = void 0;
          }, 50);
        });
      }
      this.data.sortableInfo = void 0;
    },
    document_mousemovesmooth(s) {
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      const e = this.getSortingState(s);
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.lastMouseY = s.clientY, t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(s) {
      var T;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: n, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, u = l.height - n - i, h = s.clientX - l.left, p = s.clientY - l.top - n;
      if (h < 0 || h > c || p < 0 || p > u)
        return e.state;
      const f = p + o, g = r.find((A) => A.top <= f && A.top + a > f);
      if (!g)
        return e.state;
      const _ = e.from, y = g.id !== _.id ? g.id : void 0, v = y ? this.getRowInfo(y) : void 0, b = p, w = f < g.top + a / 2 ? "before" : "after";
      return v && ((T = this.options.canSortTo) == null ? void 0 : T.call(this, _, v, w)) !== !1 ? {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: v,
        sortingSide: w
      } : {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: void 0,
        sortingSide: void 0
      };
    }
  },
  onAddRows(s) {
    const { rowOrders: t } = this.state;
    if (t)
      return s = s.sort((e, n) => t[e.id] - t[n.id]), s;
  },
  beforeRender(s) {
    const { sortingFrom: t } = this.state, { visibleRows: e } = s;
    t && (e.some((n) => n.id === t.id) || (s.visibleRows = [...e, t]), s.className = x(s.className, "dtable-sorting"));
  },
  onRenderCell(s, t, e) {
    const { sortingFrom: n, sortingPos: i, sortingTo: r, sortingSide: o } = this.state;
    if (!n)
      return s;
    const a = t.row, l = {}, c = [];
    if (n.id === a.id)
      l.top = i - this.data.sortableInfo.offset + ((e.top ?? a.top) - (a.top - this.layout.scrollTop)), c.push("is-sorting-from");
    else if (r) {
      const u = r.id === a.id;
      u && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), n.index > a.index && (u && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : n.index < a.index && (u && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && s.push({
      outer: !0,
      style: l,
      className: c
    }), s;
  }
}, du = nt(uu), fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Ta,
  avatar: Xh,
  cellspan: ou,
  checkable: Vh,
  custom: Fh,
  group: su,
  headerGroup: iu,
  nested: Jh,
  renderDatetime: va,
  renderDatetimeCell: ka,
  renderFormat: Vi,
  renderFormatCell: wa,
  renderHtmlCell: Gn,
  renderLink: ya,
  renderLinkCell: ba,
  renderMapCell: Ca,
  renderStyleMapCell: Sa,
  rich: Ih,
  sort: Dh,
  sortType: tu,
  sortable: du
}, Symbol.toStringTag, { value: "Module" }));
class as extends U {
  setOptions(t) {
    return t = super.setOptions(t), t.parent || (t.parent = this.element), t;
  }
}
as.NAME = "DTable";
as.Component = Bi;
as.definePlugin = nt;
as.removePlugin = la;
as.plugins = fu;
var Ia = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, kr = (s, t, e) => (Ia(s, t, "read from private field"), e ? e.call(s) : t.get(s)), pu = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, xr = (s, t, e, n) => (Ia(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), _e;
const mu = "nav", vs = '[data-toggle="tab"]', gu = "active";
class Pa extends Ht {
  constructor() {
    super(...arguments), pu(this, _e, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(vs);
    let i = t ? d(t).closest(vs) : n.filter(`.${gu}`);
    if (!i.length && (i = e.find(vs).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = d(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), kr(this, _e) && clearTimeout(kr(this, _e)), xr(this, _e, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), xr(this, _e, 0);
    }, 10)));
  }
}
_e = /* @__PURE__ */ new WeakMap();
Pa.NAME = "Tabs";
d(document).on("click.tabs.zui", vs, (s) => {
  s.preventDefault();
  const t = d(s.target), e = t.closest(`.${mu}`);
  e.length && Pa.ensure(e).active(t);
});
export {
  d as $,
  Ur as Ajax,
  wo as Avatar,
  vu as BUILD,
  Co as BtnGroup,
  Fl as Bus,
  zo as ColorPicker,
  fi as CommonList,
  Ht as Component,
  U as ComponentFromReact,
  Ss as Computed,
  H as CustomContent,
  mo as CustomRender,
  as as DTable,
  Ko as DatePicker,
  qo as DatetimePicker,
  qt as Dropdown,
  Ri as FileSelector,
  X as HElement,
  we as HtmlContent,
  Q as Icon,
  Di as ImageSelector,
  mi as Menu,
  Mu as Messager,
  Ln as Modal,
  Ke as ModalBase,
  zn as ModalTrigger,
  Zo as Nav,
  ea as Pager,
  Fi as Pick,
  ia as Picker,
  go as Portal,
  bo as ProgressCircle,
  B as ReactComponent,
  ra as SearchBox,
  gi as SearchMenu,
  Ul as Sticky,
  Ue as TIME_DAY,
  Pa as Tabs,
  Uo as TimePicker,
  oa as Toolbar,
  Bt as Tooltip,
  yu as VERSION,
  nh as addDate,
  co as bindHotkeys,
  Ft as bus,
  d as cash,
  x as classes,
  Re as componentsMap,
  ls as convertBytes,
  Dl as create,
  z as createDate,
  Nl as createFormData,
  Ql as createPortal,
  q as createRef,
  Cl as deepGet,
  wl as deepGetPath,
  wu as defineFn,
  ks as delay,
  Ll as disableScroll,
  Su as dom,
  ir as downloadFile,
  Vl as enterFullscreen,
  ai as fetchData,
  $t as formatBytes,
  pt as formatDate,
  Fu as formatDateSpan,
  V as formatString,
  Kr as getClassList,
  Ns as getComponent,
  ui as getFullscreenElement,
  lo as getHotkeysMap,
  Yl as getReactComponent,
  xn as getZData,
  wt as h,
  Cu as hotkeys,
  j as i18n,
  kn as isDiff,
  bu as isFetchSetting,
  re as isSameDay,
  Fo as isSameMonth,
  Ru as isSameWeek,
  Rn as isSameYear,
  Du as isToday,
  zu as isTomorrow,
  Oo as isValidDate,
  bt as isValidElement,
  Lu as isYesterday,
  W as mergeProps,
  ut as nextGid,
  io as parseSize,
  po as reactComponents,
  ot as registerReactComponent,
  no as removeUndefinedProps,
  ye as render,
  Mn as renderCustomContent,
  Zl as renderCustomResult,
  Qi as setZData,
  $l as shareData,
  An as store,
  qr as storeData,
  Gr as takeData,
  fs as toCssSize,
  uo as toggleFullscreen,
  ho as unbindHotkeys
};
//# sourceMappingURL=zui.esm.js.map
