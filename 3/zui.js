var Nn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var N = (s, t, e) => (Nn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), R = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, W = (s, t, e, n) => (Nn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var ye = (s, t, e) => (Nn(s, t, "access private method"), e);
const Pt = document, Vs = window, ir = Pt.documentElement, me = Pt.createElement.bind(Pt), or = me("div"), In = me("table"), wl = me("tbody"), bo = me("tr"), { isArray: fn, prototype: rr } = Array, { concat: bl, filter: Ti, indexOf: ar, map: lr, push: Cl, slice: cr, some: Si, splice: xl } = rr, kl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, $l = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, El = /<.+>/, Tl = /^\w+$/;
function Mi(s, t) {
  const e = Sl(t);
  return !s || !e && !de(t) && !q(t) ? [] : !e && $l.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Tl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class pn {
  constructor(t, e) {
    if (!t)
      return;
    if (jn(t))
      return t;
    let n = t;
    if (Q(t)) {
      const i = e || Pt;
      if (n = kl.test(t) && de(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : El.test(t) ? ur(t) : jn(i) ? i.find(t) : Q(i) ? u(i).find(t) : Mi(t, i), !n)
        return;
    } else if (ge(t))
      return this.ready(t);
    (n.nodeType || n === Vs) && (n = [n]), this.length = n.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new pn(t, e);
  }
}
const k = pn.prototype, u = k.init;
u.fn = u.prototype = k;
k.length = 0;
k.splice = xl;
typeof Symbol == "function" && (k[Symbol.iterator] = rr[Symbol.iterator]);
function jn(s) {
  return s instanceof pn;
}
function Ae(s) {
  return !!s && s === s.window;
}
function de(s) {
  return !!s && s.nodeType === 9;
}
function Sl(s) {
  return !!s && s.nodeType === 11;
}
function q(s) {
  return !!s && s.nodeType === 1;
}
function Ml(s) {
  return !!s && s.nodeType === 3;
}
function Nl(s) {
  return typeof s == "boolean";
}
function ge(s) {
  return typeof s == "function";
}
function Q(s) {
  return typeof s == "string";
}
function ot(s) {
  return s === void 0;
}
function Je(s) {
  return s === null;
}
function hr(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Ni(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Ae;
u.isFunction = ge;
u.isArray = fn;
u.isNumeric = hr;
u.isPlainObject = Ni;
function Y(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Ni(s)) {
    const n = Object.keys(s);
    for (let i = 0, o = n.length; i < o; i++) {
      const r = n[i];
      if (t.call(s[r], r, s[r]) === !1)
        return s;
    }
  } else
    for (let n = 0, i = s.length; n < i; n++)
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  return s;
}
u.each = Y;
k.each = function(s) {
  return Y(this, s);
};
k.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Us(...s) {
  const t = Nl(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Us(t, u, e);
  for (let i = 0; i < n; i++) {
    const o = s[i];
    for (const r in o)
      t && (fn(o[r]) || Ni(o[r])) ? ((!e[r] || e[r].constructor !== o[r].constructor) && (e[r] = new o[r].constructor()), Us(t, e[r], o[r])) : e[r] = o[r];
  }
  return e;
}
u.extend = Us;
k.extend = function(s) {
  return Us(k, s);
};
const Il = /\S+/g;
function mn(s) {
  return Q(s) ? s.match(Il) || [] : [];
}
k.toggleClass = function(s, t) {
  const e = mn(s), n = !ot(t);
  return this.each((i, o) => {
    q(o) && Y(e, (r, a) => {
      n ? t ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
k.addClass = function(s) {
  return this.toggleClass(s, !0);
};
k.removeAttr = function(s) {
  const t = mn(s);
  return this.each((e, n) => {
    q(n) && Y(t, (i, o) => {
      n.removeAttribute(o);
    });
  });
};
function Al(s, t) {
  if (s) {
    if (Q(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !q(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return Je(e) ? void 0 : e;
      }
      return ot(t) ? this : Je(t) ? this.removeAttr(s) : this.each((e, n) => {
        q(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
k.attr = Al;
k.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
k.hasClass = function(s) {
  return !!s && Si.call(this, (t) => q(t) && t.classList.contains(s));
};
k.get = function(s) {
  return ot(s) ? cr.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
k.eq = function(s) {
  return u(this.get(s));
};
k.first = function() {
  return this.eq(0);
};
k.last = function() {
  return this.eq(-1);
};
function Dl(s) {
  return ot(s) ? this.get().map((t) => q(t) || Ml(t) ? t.textContent : "").join("") : this.each((t, e) => {
    q(e) && (e.textContent = s);
  });
}
k.text = Dl;
function Lt(s, t, e) {
  if (!q(s))
    return;
  const n = Vs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function _t(s, t) {
  return parseInt(Lt(s, t), 10) || 0;
}
function Co(s, t) {
  return _t(s, `border${t ? "Left" : "Top"}Width`) + _t(s, `padding${t ? "Left" : "Top"}`) + _t(s, `padding${t ? "Right" : "Bottom"}`) + _t(s, `border${t ? "Right" : "Bottom"}Width`);
}
const An = {};
function Pl(s) {
  if (An[s])
    return An[s];
  const t = me(s);
  Pt.body.insertBefore(t, null);
  const e = Lt(t, "display");
  return Pt.body.removeChild(t), An[s] = e !== "none" ? e : "block";
}
function xo(s) {
  return Lt(s, "display") === "none";
}
function dr(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function gn(s) {
  return Q(s) ? (t, e) => dr(e, s) : ge(s) ? s : jn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
k.filter = function(s) {
  const t = gn(s);
  return u(Ti.call(this, (e, n) => t.call(e, n, e)));
};
function Zt(s, t) {
  return t ? s.filter(t) : s;
}
k.detach = function(s) {
  return Zt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Ll = /^\s*<(\w+)[^>]*>/, Rl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ko = {
  "*": or,
  tr: wl,
  td: bo,
  th: bo,
  thead: In,
  tbody: In,
  tfoot: In
};
function ur(s) {
  if (!Q(s))
    return [];
  if (Rl.test(s))
    return [me(RegExp.$1)];
  const t = Ll.test(s) && RegExp.$1, e = ko[t] || ko["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = ur;
k.has = function(s) {
  const t = Q(s) ? (e, n) => Mi(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
k.not = function(s) {
  const t = gn(s);
  return this.filter((e, n) => (!Q(s) || q(n)) && !t.call(n, e, n));
};
function Wt(s, t, e, n) {
  const i = [], o = ge(t), r = n && gn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (o) {
      const c = t(s[a]);
      c.length && Cl.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && r(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function fr(s) {
  return s.multiple && s.options ? Wt(Ti.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Wl(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || br.test(e.type)) {
      const i = fn(s) ? lr.call(s, String) : Je(s) ? [] : [String(s)];
      n ? Y(e.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ot(s) || Je(s) ? "" : s;
  }) : this[0] && fr(this[0]);
}
k.val = Wl;
k.is = function(s) {
  const t = gn(s);
  return Si.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function xt(s) {
  return s.length > 1 ? Ti.call(s, (t, e, n) => ar.call(n, t) === e) : s;
}
u.unique = xt;
k.add = function(s, t) {
  return u(xt(this.get().concat(u(s, t).get())));
};
k.children = function(s) {
  return Zt(u(xt(Wt(this, (t) => t.children))), s);
};
k.parent = function(s) {
  return Zt(u(xt(Wt(this, "parentNode"))), s);
};
k.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return ar.call(e, t);
};
k.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
k.siblings = function(s) {
  return Zt(u(xt(Wt(this, (t) => u(t).parent().children().not(t)))), s);
};
k.find = function(s) {
  return u(xt(Wt(this, (t) => Mi(s, t))));
};
const Hl = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ol = /^$|^module$|\/(java|ecma)script/i, Bl = ["type", "src", "nonce", "noModule"];
function Fl(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Ol.test(i.type) && ir.contains(i)) {
      const o = me("script");
      o.text = i.textContent.replace(Hl, ""), Y(Bl, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function zl(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && Fl(t, s.ownerDocument);
}
function Jt(s, t, e, n, i, o, r, a) {
  return Y(s, (l, c) => {
    Y(u(c), (d, h) => {
      Y(u(t), (p, m) => {
        const g = e ? h : m, _ = e ? m : h, v = e ? d : p;
        zl(g, v ? _.cloneNode(!0) : _, n, i, !v);
      }, a);
    }, r);
  }, o), t;
}
k.after = function() {
  return Jt(arguments, this, !1, !1, !1, !0, !0);
};
k.append = function() {
  return Jt(arguments, this, !1, !1, !0);
};
function Vl(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ot(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    q(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
k.html = Vl;
k.appendTo = function(s) {
  return Jt(arguments, this, !0, !1, !0);
};
k.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
k.before = function() {
  return Jt(arguments, this, !1, !0);
};
k.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
k.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
k.insertAfter = function(s) {
  return Jt(arguments, this, !0, !1, !1, !1, !1, !0);
};
k.insertBefore = function(s) {
  return Jt(arguments, this, !0, !0);
};
k.prepend = function() {
  return Jt(arguments, this, !1, !0, !0, !0, !0);
};
k.prependTo = function(s) {
  return Jt(arguments, this, !0, !0, !0, !1, !1, !0);
};
k.contents = function() {
  return u(xt(Wt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
k.next = function(s, t, e) {
  return Zt(u(xt(Wt(this, "nextElementSibling", t, e))), s);
};
k.nextAll = function(s) {
  return this.next(s, !0);
};
k.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
k.parents = function(s, t) {
  return Zt(u(xt(Wt(this, "parentElement", !0, t))), s);
};
k.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
k.prev = function(s, t, e) {
  return Zt(u(xt(Wt(this, "previousElementSibling", t, e))), s);
};
k.prevAll = function(s) {
  return this.prev(s, !0);
};
k.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
k.map = function(s) {
  return u(bl.apply([], lr.call(this, (t, e) => s.call(t, e, t))));
};
k.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
k.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Lt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || ir;
  });
};
k.slice = function(s, t) {
  return u(cr.call(this, s, t));
};
const Ul = /-([a-z])/g;
function Ii(s) {
  return s.replace(Ul, (t, e) => e.toUpperCase());
}
k.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Pt.readyState !== "loading" ? t() : Pt.addEventListener("DOMContentLoaded", t), this;
};
k.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
k.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Vs.pageYOffset,
    left: t.left + Vs.pageXOffset
  };
};
k.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Lt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Lt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && q(i)) {
      const o = u(i).offset();
      e.top -= o.top + _t(i, "borderTopWidth"), e.left -= o.left + _t(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - _t(s, "marginTop"),
    left: e.left - _t(s, "marginLeft")
  };
};
const pr = {
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
k.prop = function(s, t) {
  if (s) {
    if (Q(s))
      return s = pr[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
k.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[pr[s] || s];
  });
};
const jl = /^--/;
function Ai(s) {
  return jl.test(s);
}
const Dn = {}, { style: ql } = or, Yl = ["webkit", "moz", "ms"];
function Gl(s, t = Ai(s)) {
  if (t)
    return s;
  if (!Dn[s]) {
    const e = Ii(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Yl.join(`${n} `)}${n}`.split(" ");
    Y(i, (o, r) => {
      if (r in ql)
        return Dn[s] = r, !1;
    });
  }
  return Dn[s];
}
const Kl = {
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
function mr(s, t, e = Ai(s)) {
  return !e && !Kl[s] && hr(t) ? `${t}px` : t;
}
function Xl(s, t) {
  if (Q(s)) {
    const e = Ai(s);
    return s = Gl(s, e), arguments.length < 2 ? this[0] && Lt(this[0], s, e) : s ? (t = mr(s, t, e), this.each((n, i) => {
      q(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
k.css = Xl;
function gr(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const Zl = /^\s+|\s+$/;
function $o(s, t) {
  const e = s.dataset[t] || s.dataset[Ii(t)];
  return Zl.test(e) ? e : gr(JSON.parse, e);
}
function Jl(s, t, e) {
  e = gr(JSON.stringify, e), s.dataset[Ii(t)] = e;
}
function Ql(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = $o(this[0], n);
    return e;
  }
  if (Q(s))
    return arguments.length < 2 ? this[0] && $o(this[0], s) : ot(t) ? this : this.each((e, n) => {
      Jl(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
k.data = Ql;
function _r(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Y([!0, !1], (s, t) => {
  Y(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    k[i] = function(o) {
      if (this[0])
        return Ae(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : de(this[0]) ? _r(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (o && t ? _t(this[0], `margin${e ? "Top" : "Left"}`) + _t(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  k[e] = function(n) {
    if (!this[0])
      return ot(n) ? void 0 : this;
    if (!arguments.length)
      return Ae(this[0]) ? this[0].document.documentElement[`client${t}`] : de(this[0]) ? _r(this[0], t) : this[0].getBoundingClientRect()[e] - Co(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((o, r) => {
      if (!q(r))
        return;
      const a = Lt(r, "boxSizing");
      r.style[e] = mr(e, i + (a === "border-box" ? Co(r, !s) : 0));
    });
  };
});
const Eo = "___cd";
k.toggle = function(s) {
  return this.each((t, e) => {
    if (!q(e))
      return;
    const n = xo(e);
    (ot(s) ? n : s) ? (e.style.display = e[Eo] || "", xo(e) && (e.style.display = Pl(e.tagName))) : n || (e[Eo] = Lt(e, "display"), e.style.display = "none");
  });
};
k.hide = function() {
  return this.toggle(!1);
};
k.show = function() {
  return this.toggle(!0);
};
const To = "___ce", Di = ".", Pi = { focus: "focusin", blur: "focusout" }, yr = { mouseenter: "mouseover", mouseleave: "mouseout" }, tc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Li(s) {
  return yr[s] || Pi[s] || s;
}
function Ri(s) {
  const t = s.split(Di);
  return [t[0], t.slice(1).sort()];
}
k.trigger = function(s, t) {
  if (Q(s)) {
    const [n, i] = Ri(s), o = Li(n);
    if (!o)
      return this;
    const r = tc.test(o) ? "MouseEvents" : "HTMLEvents";
    s = Pt.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(Di), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Pi;
  return this.each((n, i) => {
    e && ge(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function vr(s) {
  return s[To] = s[To] || {};
}
function ec(s, t, e, n, i) {
  const o = vr(s);
  o[t] = o[t] || [], o[t].push([e, n, i]), s.addEventListener(t, i);
}
function wr(s, t) {
  return !t || !Si.call(t, (e) => s.indexOf(e) < 0);
}
function js(s, t, e, n, i) {
  const o = vr(s);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !wr(r, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in o)
      js(s, t, e, n, i);
}
k.off = function(s, t, e) {
  if (ot(s))
    this.each((n, i) => {
      !q(i) && !de(i) && !Ae(i) || js(i);
    });
  else if (Q(s))
    ge(t) && (e = t, t = ""), Y(mn(s), (n, i) => {
      const [o, r] = Ri(i), a = Li(o);
      this.each((l, c) => {
        !q(c) && !de(c) && !Ae(c) || js(c, a, r, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
k.remove = function(s) {
  return Zt(this, s).detach().off(), this;
};
k.replaceWith = function(s) {
  return this.before(s).remove();
};
k.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function sc(s, t, e, n, i) {
  if (!Q(s)) {
    for (const o in s)
      this.on(o, t, e, s[o], i);
    return this;
  }
  return Q(t) || (ot(t) || Je(t) ? t = "" : ot(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ge(n) || (n = e, e = void 0), n ? (Y(mn(s), (o, r) => {
    const [a, l] = Ri(r), c = Li(a), d = a in yr, h = a in Pi;
    c && this.each((p, m) => {
      if (!q(m) && !de(m) && !Ae(m))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !wr(l, _.namespace.split(Di)) || !t && (h && (_.target !== m || _.___ot === c) || d && _.relatedTarget && m.contains(_.relatedTarget)))
          return;
        let v = m;
        if (t) {
          let w = _.target;
          for (; !dr(w, t); )
            if (w === m || (w = w.parentNode, !w))
              return;
          v = w;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(v, _, _.___td);
        i && js(m, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || u.guid++, ec(m, c, l, t, g);
    });
  }), this) : this;
}
k.on = sc;
function nc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
k.one = nc;
const ic = /\r?\n/g;
function oc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(ic, `\r
`))}`;
}
const rc = /file|reset|submit|button|image/i, br = /radio|checkbox/i;
k.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Y(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || rc.test(i.type) || br.test(i.type) && !i.checked)
        return;
      const o = fr(i);
      if (!ot(o)) {
        const r = fn(o) ? o : [o];
        Y(r, (a, l) => {
          s += oc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function ac(s, t) {
  if (s == null)
    return [s, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let n = s;
  const i = [n];
  for (; typeof n == "object" && n !== null && t.length; ) {
    let o = t.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), n = n[o], i.push(n), r !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(r) : n = n[r], i.push(n);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function lc(s, t, e) {
  try {
    const n = ac(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function X(s, ...t) {
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
var Wi = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Wi || {});
function cc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / Wi[e]).toFixed(t) + e);
}
const hc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Wi[n];
};
let Hi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), zt;
function dc() {
  return Hi;
}
function uc(s) {
  Hi = s.toLowerCase();
}
function Cr(s, t) {
  zt || (zt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, zt, s);
}
function G(s, t, e, n, i, o) {
  Array.isArray(s) ? zt && s.unshift(zt) : s = zt ? [zt, s] : [s], typeof e == "string" && (o = i, i = n, n = e, e = void 0);
  const r = i || Hi;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[r];
    if (!c)
      continue;
    const d = o && l === zt ? `${o}.${t}` : t;
    if (a = lc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? X(a, ...Array.isArray(e) ? e : [e]) : a;
}
function fc(s, t, e, n) {
  return G(void 0, s, t, e, n);
}
G.addLang = Cr;
G.getLang = fc;
G.getCode = dc;
G.setCode = uc;
Cr({
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
function So(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function xr(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => xr(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function pc(s, t) {
  if (s) {
    const e = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [n, i] of Object.entries(e))
      if (i.split(",").map((o) => o.trim()).includes(s))
        return n;
  }
  return "text";
}
class kr {
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
      contentType: o,
      crossDomain: r,
      accepts: a,
      dataType: l,
      timeout: c,
      dataFilter: d,
      beforeSend: h,
      success: p,
      error: m,
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let v = n;
    v && (i && (u.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((w, [b, C]) => (xr(w, b, C), w), new FormData()))), _.body = v), r && (_.mode = "cors");
    const y = _.headers || {};
    So(y, "X-Requested-With", "XMLHttpRequest"), o && So(y, "Content-Type", o), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), m && this.fail(m), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n(...e);
    });
  }
  async send() {
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: o } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let r, a, l;
    try {
      r = await fetch(this.url, this.request), this.response = r;
      const { statusText: c } = r;
      if (r.ok) {
        const d = e || pc(r.headers.get("Content-Type"), n);
        d === "blob" || d === "file" ? l = await r.blob() : d === "json" ? l = await r.json() : l = await r.text(), this.data = l;
        const h = (i == null ? void 0 : i(l, d)) ?? l;
        this._emit("success", h, c, r);
      } else
        throw new Error(c);
    } catch (c) {
      a = c;
      let d = !1;
      a.name === "AbortError" && (this._abortError ? a = this._abortError : d = !0), this.error = a, d || this._emit("error", a, r == null ? void 0 : r.statusText, a.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", r, r == null ? void 0 : r.statusText), a && o)
      throw a;
    return [l, a, r];
  }
}
u.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : u.extend(t, s);
  const e = new kr(t);
  return e.send(), e;
};
u.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (s, t, e, n, i = "GET") => {
  let o, r;
  return typeof t == "function" ? (o = t, r = void 0) : r = t, typeof e == "function" ? (o = e, n = void 0) : n = e, u.ajax({
    method: i,
    url: s,
    data: r,
    success: o,
    dataType: n
  });
};
u.post = (s, t, e, n) => u.get(s, t, e, n, "POST");
u.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return u.get(n, t, (o, r, a) => {
    i && (o = u(o).find(i).html()), u(this).html(o), e == null || e.call(this, o, r, a);
  }, "html"), this;
};
async function Oi(s, t = [], e) {
  const n = { throws: !0 };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    u.extend(n, s);
  else if (typeof s == "function") {
    const r = s(...t);
    if (r instanceof Promise)
      return await r;
    u.extend(n, r);
  }
  e && u.extend(n, typeof e == "function" ? e(n) : e);
  const i = new kr(n), [o] = await i.send();
  return o;
}
u.fetch = Oi;
function $r(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = e.get(i);
    typeof r == "number" ? t[r][1] = !!o : (e.set(i, t.length), t.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? $r(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((o) => n(o, !0));
  }), t.sort((i, o) => (e.get(i[0]) || 0) - (e.get(o[0]) || 0));
}
const $ = (...s) => $r(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = $;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", $(i.attr("class"), ...t)) : i.addClass($(s, ...t));
  });
};
const Fe = /* @__PURE__ */ new WeakMap();
function Er(s, t, e) {
  const n = Fe.has(s), i = n ? Fe.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), Fe.set(s, i)) : Fe.delete(s);
}
function Tr(s, t, e) {
  let n = Fe.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Tr(this[0], t) : this.each((n, i) => Er(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => Er(e, s));
};
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const qs = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), mc = {};
u.share = mc;
const ze = /* @__PURE__ */ new Map();
function Ys(s) {
  const { zui: t } = window;
  return (!ze.size || s && !ze.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || ze.set(e.toLowerCase(), n);
  }), s ? ze.get(s.toLowerCase()) : void 0;
}
function gc(s, t, e) {
  const n = Ys(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function kd(s) {
  if (s) {
    const t = Ys(s);
    t && t.defineFn();
  } else
    Ys(), ze.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => gc(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Tr(e, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), s === !0 ? o : r;
  }
  const n = Ys(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function _c(s, t = !0) {
  const e = u(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    const o = n === document.body ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
    if (!o)
      return;
    const r = e.css("paddingRight") || "0";
    e.data(i, {
      paddingRight: r,
      overflow: e.css("overflow")
    }).css({
      paddingRight: `${o + Number.parseInt(r, 10)}px`,
      overflow: "hidden"
    });
  } else {
    const o = e.data(i);
    if (!o)
      return;
    e.css(o).removeData(i);
  }
}
u.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    _c(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Bi(s, t) {
  const e = u(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: o, width: r, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
    n = { left: 0, top: 0, width: _ || y, height: g || v };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && o >= c && i + r <= d && o + a <= h;
  const p = i <= d && i + r >= l;
  return o <= h && o + a >= c && p;
}
u.fn.isVisible = function(s) {
  return Bi(this, s);
};
function Fi(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${u.guid++}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, o) => {
    Fi(n, o.innerHTML), o.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    Fi(e, s);
  });
};
function Sr(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((o, r) => {
    if (n) {
      if (r.scrollIntoViewIfNeeded)
        return r.scrollIntoViewIfNeeded(i);
      if (Bi(r, { viewport: r.getBoundingClientRect() }))
        return;
    }
    r.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Sr(e, s);
  });
};
u.setLibRoot = function(s) {
  u.libRoot = s;
};
u.registerLib = function(s, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), u.libMap[s] = t;
};
u.getLib = function(s, t, e) {
  return new Promise((n, i) => {
    let o = typeof s == "string" ? { src: s } : u.extend({}, s);
    typeof t == "function" ? o.success = t : t && u.extend(o, t), e && (o.success = e);
    let { src: r } = o;
    if (!r)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[r];
    a && (o = u.extend({}, a, o), r = a.src || o.src);
    const { root: l = u.libRoot } = o;
    l && (r = `${l}/${r}`.replace("//", "/"));
    const { success: c, name: d } = o, h = () => d ? window[d] : void 0, p = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      p();
      return;
    }
    const { id: m } = o, g = u(m ? `#${m}` : `script[src="${r}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        p();
      else {
        const x = g.data("loadCalls") || [];
        x.push(p), g.data("loadCalls", x);
      }
      return;
    }
    const { async: _ = !0, defer: v = !1, noModule: y = !1, type: w, integrity: b } = o, C = document.createElement("script");
    C.async = _, C.defer = v, C.noModule = y, w && (C.type = w), b && (C.integrity = b), C.onload = () => {
      p(), (u(C).dataset("loaded", !0).data("loadCalls") || []).forEach((E) => E()), u(C).removeData("loadCalls");
    }, C.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${r}`));
    }, C.src = r, u("head").append(C);
  });
};
u.getScript = u.getLib;
const $d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Bi,
  runJS: Fi,
  scrollIntoView: Sr
}, Symbol.toStringTag, { value: "Module" }));
var _n, O, Mr, et, se, Mo, Nr, qn, ke = {}, Ir = [], yc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, zi = Array.isArray;
function Yt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Ar(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function kt(s, t, e) {
  var n, i, o, r = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? _n.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return Es(s, r, n, i, null);
}
function Es(s, t, e, n, i) {
  var o = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Mr };
  return i == null && O.vnode != null && O.vnode(o), o;
}
function V() {
  return { current: null };
}
function Le(s) {
  return s.children;
}
function H(s, t) {
  this.props = s, this.context = t;
}
function Qe(s, t) {
  if (t == null)
    return s.__ ? Qe(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? Qe(s) : null;
}
function Dr(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Dr(s);
  }
}
function No(s) {
  (!s.__d && (s.__d = !0) && se.push(s) && !Gs.__r++ || Mo !== O.debounceRendering) && ((Mo = O.debounceRendering) || Nr)(Gs);
}
function Gs() {
  var s, t, e, n, i, o, r, a, l;
  for (se.sort(qn); s = se.shift(); )
    s.__d && (t = se.length, n = void 0, i = void 0, o = void 0, a = (r = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (o = Yt({}, r)).__v = r.__v + 1, Vi(l, r, o, e.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, n, a ?? Qe(r), r.__h, i), Wr(n, r, i), r.__e != a && Dr(r)), se.length > t && se.sort(qn));
  Gs.__r = 0;
}
function Pr(s, t, e, n, i, o, r, a, l, c, d) {
  var h, p, m, g, _, v, y, w, b, C = 0, x = n && n.__k || Ir, E = x.length, I = E, P = t.length;
  for (e.__k = [], h = 0; h < P; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Es(null, g, null, null, g) : zi(g) ? Es(Le, { children: g }, null, null, null) : g.__b > 0 ? Es(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (w = vc(g, x, y = h + C, I)) === -1 ? m = ke : (m = x[w] || ke, x[w] = void 0, I--), Vi(s, g, m, i, o, r, a, l, c, d), _ = g.__e, (p = g.ref) && m.ref != p && (m.ref && Ui(m.ref, null, g), d.push(p, g.__c || _, g)), _ != null && (v == null && (v = _), (b = m === ke || m.__v === null) ? w == -1 && C-- : w !== y && (w === y + 1 ? C++ : w > y ? I > P - y ? C += w - y : C-- : C = w < y && w == y - 1 ? w - y : 0), y = h + C, typeof g.type != "function" || w === y && m.__k !== g.__k ? typeof g.type == "function" || w === y && !b ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = Rr(s, _, l) : l = Lr(g, l, s), typeof e.type == "function" && (e.__d = l))) : (m = x[h]) && m.key == null && m.__e && (m.__e == l && (l = Qe(m)), Yn(m, m, !1), x[h] = null);
  for (e.__e = v, h = E; h--; )
    x[h] != null && (typeof e.type == "function" && x[h].__e != null && x[h].__e == e.__d && (e.__d = x[h].__e.nextSibling), Yn(x[h], x[h]));
}
function Lr(s, t, e) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, t = typeof n.type == "function" ? Lr(n, t, e) : Rr(e, n.__e, t));
  return t;
}
function Rr(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function vc(s, t, e, n) {
  var i = s.key, o = s.type, r = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && o === l.type)
    return e;
  if (n > (l != null ? 1 : 0))
    for (; r >= 0 || a < t.length; ) {
      if (r >= 0) {
        if ((l = t[r]) && i == l.key && o === l.type)
          return r;
        r--;
      }
      if (a < t.length) {
        if ((l = t[a]) && i == l.key && o === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function wc(s, t, e, n, i) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || Ks(s, o, null, e[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || Ks(s, o, t[o], e[o], n);
}
function Io(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || yc.test(t) ? e : e + "px";
}
function Ks(s, t, e, n, i) {
  var o;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Io(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Io(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + o] = e, e ? n || s.addEventListener(t, o ? Do : Ao, o) : s.removeEventListener(t, o ? Do : Ao, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, e));
    }
}
function Ao(s) {
  return this.l[s.type + !1](O.event ? O.event(s) : s);
}
function Do(s) {
  return this.l[s.type + !0](O.event ? O.event(s) : s);
}
function Vi(s, t, e, n, i, o, r, a, l, c) {
  var d, h, p, m, g, _, v, y, w, b, C, x, E, I, P, D = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, o = [a]), (d = O.__b) && d(t);
  t:
    if (typeof D == "function")
      try {
        if (y = t.props, w = (d = D.contextType) && n[d.__c], b = d ? w ? w.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in D && D.prototype.render ? t.__c = h = new D(y, b) : (t.__c = h = new H(y, b), h.constructor = D, h.render = Cc), w && w.sub(h), h.props = y, h.state || (h.state = {}), h.context = b, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), D.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Yt({}, h.__s)), Yt(h.__s, D.getDerivedStateFromProps(y, h.__s))), m = h.props, g = h.state, h.__v = t, p)
          D.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && y !== m && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, b), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, b) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(S) {
              S && (S.__ = t);
            }), C = 0; C < h._sb.length; C++)
              h.__h.push(h._sb[C]);
            h._sb = [], h.__h.length && r.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, b), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(m, g, _);
          });
        }
        if (h.context = b, h.props = y, h.__P = s, h.__e = !1, x = O.__r, E = 0, "prototype" in D && D.prototype.render) {
          for (h.state = h.__s, h.__d = !1, x && x(t), d = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++)
            h.__h.push(h._sb[I]);
          h._sb = [];
        } else
          do
            h.__d = !1, x && x(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++E < 25);
        h.state = h.__s, h.getChildContext != null && (n = Yt(Yt({}, n), h.getChildContext())), p || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(m, g)), Pr(s, zi(P = d != null && d.type === Le && d.key == null ? d.props.children : d) ? P : [P], t, e, n, i, o, r, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && r.push(h), v && (h.__E = h.__ = null);
      } catch (S) {
        t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), O.__e(S, t, e);
      }
    else
      o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = bc(e.__e, t, e, n, i, o, r, l, c);
  (d = O.diffed) && d(t);
}
function Wr(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Ui(e[n], e[++n], e[++n]);
  O.__c && O.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      O.__e(o, i.__v);
    }
  });
}
function bc(s, t, e, n, i, o, r, a, l) {
  var c, d, h, p = e.props, m = t.props, g = t.type, _ = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; _ < o.length; _++)
      if ((c = o[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        s = c, o[_] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(m);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), o = null, a = !1;
  }
  if (g === null)
    p === m || a && s.data === m || (s.data = m);
  else {
    if (o = o && _n.call(s.childNodes), d = (p = e.props || ke).dangerouslySetInnerHTML, h = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, _ = 0; _ < s.attributes.length; _++)
          p[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (wc(s, m, p, i, a), h)
      t.__k = [];
    else if (Pr(s, zi(_ = t.props.children) ? _ : [_], t, e, n, i && g !== "foreignObject", o, r, o ? o[0] : e.__k && Qe(e, 0), a, l), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Ar(o[_]);
    a || ("value" in m && (_ = m.value) !== void 0 && (_ !== s.value || g === "progress" && !_ || g === "option" && _ !== p.value) && Ks(s, "value", _, p.value, !1), "checked" in m && (_ = m.checked) !== void 0 && _ !== s.checked && Ks(s, "checked", _, p.checked, !1));
  }
  return s;
}
function Ui(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    O.__e(n, e);
  }
}
function Yn(s, t, e) {
  var n, i;
  if (O.unmount && O.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Ui(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        O.__e(o, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Yn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Ar(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Cc(s, t, e) {
  return this.constructor(s, e);
}
function Xs(s, t, e) {
  var n, i, o, r;
  O.__ && O.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, o = [], r = [], Vi(t, s = (!n && e || t).__k = kt(Le, null, [s]), i || ke, ke, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? _n.call(t.childNodes) : null, o, !n && e ? e : i ? i.__e : t.firstChild, n, r), Wr(o, s, r);
}
_n = Ir.slice, O = { __e: function(s, t, e, n) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Mr = 0, et = function(s) {
  return s != null && s.constructor === void 0;
}, H.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof s == "function" && (s = s(Yt({}, e), this.props)), s && Yt(e, s), s != null && this.__v && (t && this._sb.push(t), No(this));
}, H.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), No(this));
}, H.prototype.render = Le, se = [], Nr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Gs.__r = 0;
var Hr = function(s, t, e, n) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, e[t[o++]]) : t[++o];
    r === 3 ? n[0] = a : r === 4 ? n[1] = Object.assign(n[1] || {}, a) : r === 5 ? (n[1] = n[1] || {})[t[++o]] = a : r === 6 ? n[1][t[++o]] += a + "" : r ? (i = s.apply(a, Hr(s, a, e, ["", null])), n.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : n.push(a);
  }
  return n;
}, Po = /* @__PURE__ */ new Map();
function xc(s) {
  var t = Po.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Po.set(this, t)), (t = Hr(this, t.get(s) || (t.set(s, t = function(e) {
    for (var n, i, o = 1, r = "", a = "", l = [0], c = function(p) {
      o === 1 && (p || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, r) : o === 3 && (p || r) ? (l.push(3, p, r), o = 2) : o === 2 && r === "..." && p ? l.push(4, p, 0) : o === 2 && r && !p ? l.push(5, 0, !0, r) : o >= 5 && ((r || !p && o === 5) && (l.push(o, 0, r, i), o = 6), p && (l.push(o, p, 0, i), o = 6)), r = "";
    }, d = 0; d < e.length; d++) {
      d && (o === 1 && c(), c(d));
      for (var h = 0; h < e[d].length; h++)
        n = e[d][h], o === 1 ? n === "<" ? (c(), l = [l], o = 3) : r += n : o === 4 ? r === "--" && n === ">" ? (o = 1, r = "") : r = n + r[0] : a ? n === a ? a = "" : r += n : n === '"' || n === "'" ? a = n : n === ">" ? (c(), o = 1) : o && (n === "=" ? (o = 5, i = r, r = "") : n === "/" && (o < 5 || e[d][h + 1] === ">") ? (c(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (c(), o = 2) : r += n), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return c(), l;
  }(s)), t), arguments, [])).length > 1 ? t : t[0];
}
const Ed = xc.bind(kt);
class vt extends H {
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: n, data: i, forwardRef: o, children: r, component: a, style: l, ...c } = t, d = Object.keys(c).reduce((h, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-|zui-)[a-zA-Z-]+/.test(p)) && (h[p] = c[p]), h), {});
    return { ref: o, className: $(this._getClassName(t)), style: l, ...d, ...n };
  }
  _getComponent(t) {
    return t.component || "div";
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
    const o = this._onRender(e, i, n, t);
    return o && ([e, i, n] = o), kt(e, i, n);
  }
}
var kc = 0;
function f(s, t, e, n, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --kc, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return O.vnode && O.vnode(c), c;
}
class ps extends H {
  constructor() {
    super(...arguments), this._ref = V();
  }
  _runJS() {
    this.props.executeScript && u(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ f(vt, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function $c(s) {
  const {
    tag: t,
    className: e,
    style: n,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...d
  } = s, h = [e], p = { ...n }, m = [], g = [];
  return i.forEach((_) => {
    const v = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        v.push(...l.call(r, _, m, ...o));
      else {
        const y = _.call(r, m, ...o);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(_);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !et(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? m.push(
        /* @__PURE__ */ f("div", { className: $(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(p, y.style), y.className && h.push(y.className), y.children && m.push(y.children), y.attrs && Object.assign(d, y.attrs)) : m.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: $(h),
    style: p,
    ...d
  }, m];
}
function Or({
  tag: s = "div",
  ...t
}) {
  const [e, n] = $c(t);
  return kt(s, e, ...n);
}
function Br(s, t, e) {
  return typeof s == "function" ? s.call(t, ...e || []) : Array.isArray(s) ? s.map((n) => Br(n, t, e)) : et(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ f(ps, { ...s }) : /* @__PURE__ */ f(vt, { ...s }) : s;
}
function Dt(s) {
  const { content: t, generatorThis: e, generatorArgs: n } = s, i = Br(t, e, n);
  return i == null || typeof i == "boolean" ? null : et(i) ? i : /* @__PURE__ */ f(Le, { children: i });
}
const Lo = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function K(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (et(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Lo(t));
  else if (typeof t == "object") {
    const { className: o, icon: r, ...a } = t;
    i.push(o, r ? Lo(r) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: $(i), ...n });
}
function Ec(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Tc(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    Xs(null, t._temp), t._temp = null, t._container = null;
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
  }), Xs(
    kt(Ec, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Sc(s, t) {
  const e = kt(Tc, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
function Fr(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Fr(s.parentNode) : !0;
}
class rt {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: n, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = u(t);
    if (l.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = u.guid++;
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((p) => {
      p.forEach((m) => {
        m.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Fr(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...o, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), r) {
      const p = `${n}:ALL`;
      let m = l.data(p);
      m || (m = /* @__PURE__ */ new Map(), l.data(p, m)), m.set(this._key, this);
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
    return u(this.element);
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
  render(t) {
    this.setOptions(t);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    var o;
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), (o = this._mobs) == null || o.disconnect(), i.off(this.namespace).removeData(t).attr(e, null), n) {
      const r = this.$element.data(`${t}:ALL`);
      if (r)
        if (r.delete(this._key), r.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const a = r.values().next().value;
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
    return t && u.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = u.Event(t);
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
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(t), function(o, r) {
      (!o.__src || o.__src === i) && e.call(this, o, r);
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
    return G(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? G(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = u(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
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
    const { MULTI_INSTANCE: e, DATA_KEY: n } = this, i = [];
    return u(t || document).find(`[${n}]`).each((o, r) => {
      if (e) {
        const l = u(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(r).data(this.KEY);
      a && i.push(a);
    }), i;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t, e) {
    return t === void 0 ? this.getAll().sort((n, i) => n.gid - i.gid)[0] : this.get(u(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    u.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    u.fn.extend({
      [e](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = n.get(d);
          if (h ? r && h.render(r) : h = new n(d, r), a) {
            let p = h[a], m = h;
            p === void 0 && (m = h.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...o) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
rt.DEFAULT = {};
rt.MULTI_INSTANCE = !1;
class F extends rt {
  constructor() {
    super(...arguments), this.ref = V();
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
    var t, e;
    (e = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || e.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    Xs(
      kt(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Mc(s) {
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
function Nc(s) {
  const [t, e, n] = typeof s == "string" ? Mc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Ro(s, t) {
  return Nc(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Wo(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function Ic(s, t, e) {
  s = s % 360 / 360, t = Wo(t), e = Wo(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (n - i) * r * 6 : r * 2 < 1 ? n : r * 3 < 2 ? i + (n - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function Ac(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function Dc(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let ji = class extends H {
  render() {
    const {
      className: t,
      style: e,
      size: n = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      icon: l,
      text: c,
      code: d,
      maxTextLength: h = 2,
      src: p,
      hueDistance: m = 43,
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: v,
      ...y
    } = this.props, w = ["avatar", t], b = { ...e, background: r, color: a };
    let C = 32;
    n && (typeof n == "number" ? (b.width = `${n}px`, b.height = `${n}px`, b.fontSize = `${Math.max(12, Math.round(n / 2))}px`, C = n) : (w.push(`size-${n}`), C = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : o && (typeof o == "number" ? b.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let x;
    if (p)
      w.push("has-img"), x = /* @__PURE__ */ f("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      w.push("has-icon"), x = /* @__PURE__ */ f(K, { icon: l });
    else if (c != null && c.length) {
      const E = Dc(c, h);
      if (w.push("has-text", `has-text-${E.length}`), r)
        !a && r && (b.color = Ro(r));
      else {
        const P = d ?? c, D = (typeof P == "number" ? P : Ac(P)) * m % 360;
        if (b.background = `hsl(${D},${g * 100}%,${_ * 100}%)`, !a) {
          const S = Ic(D, g, _);
          b.color = Ro(S);
        }
      }
      let I;
      C && C < 14 * E.length && (I = { transform: `scale(${C / (14 * E.length)})`, whiteSpace: "nowrap" }), x = /* @__PURE__ */ f("div", { "data-actualSize": C, className: "avatar-text", style: I, children: E });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: $(w),
        style: b,
        ...y,
        children: [
          x,
          v
        ]
      }
    );
  }
};
class Z extends vt {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: o, icon: r, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = o && this._isEmptyText && !r && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: o, text: r, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(K, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(K, { icon: o }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : r }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(K, { icon: l }),
      e ? null : c ? /* @__PURE__ */ f("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: o, active: r, children: a, square: l, size: c, rounded: d } = t;
    return ["btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || o,
      active: r,
      loading: o,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof d == "string" ? d : { rounded: d }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: o, btnType: r = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: o,
      title: a
    };
    return r && (["button", "reset", "submit"].includes(r) ? e === "button" && (c.type = r) : c.className = $([c.className, r])), o || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
class yn extends vt {
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
    const { name: e, type: n, value: i, id: o, label: r } = t, { checked: a } = this;
    return [
      e ? /* @__PURE__ */ f(
        "input",
        {
          type: n === "radio" ? n : "checkbox",
          name: e,
          id: o,
          value: i,
          onChange: this._handleChange,
          indeterminate: a === "indeterminate",
          checked: typeof a == "boolean" ? a : void 0
        },
        "input"
      ) : null,
      /* @__PURE__ */ f("label", { htmlFor: o, children: /* @__PURE__ */ f(Dt, { content: r }) }, "label")
    ];
  }
}
class Pc extends yn {
}
Pc.defaultProps = {
  type: "radio"
};
class Lc extends yn {
}
Lc.defaultProps = {
  type: "switch"
};
class re extends vt {
  _getClassName(t) {
    return t.rootClass;
  }
  _beforeRender(t) {
    const { title: e, subtitle: n, multiline: i } = t;
    return i === void 0 ? u.extend({
      multiline: !!(e && n)
    }, t) : t;
  }
  _renderLeading(t) {
    const {
      icon: e,
      avatar: n,
      toggleIcon: i,
      leading: o,
      leadingClass: r,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, d = [];
    if (i && d.push(/* @__PURE__ */ f(Dt, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(yn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(K, { className: "item-icon", icon: e }, "icon")), n) {
      const p = typeof n == "function" ? n.call(this, t) : n;
      p && (p.className = $("item-avatar", p.className), d.push(/* @__PURE__ */ f(ji, { ...p }, "avatar")));
    }
    const h = o ? /* @__PURE__ */ f(Dt, { content: o }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ f("div", { className: $("item-leading", r), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t) {
    const {
      textClass: e,
      titleClass: n,
      subtitle: i,
      subtitleClass: o,
      url: r,
      actions: a,
      target: l,
      content: c
    } = t, d = r && a, h = d ? "a" : "div";
    let { title: p, text: m } = t;
    p === void 0 && (p = m, m = null);
    const g = [
      p ? /* @__PURE__ */ f(h, { className: $("item-title", n), href: d ? r : void 0, target: d ? l : void 0, children: p }, "title") : null,
      i ? /* @__PURE__ */ f("div", { className: $("item-subtitle", o), children: i }, "subtitle") : null,
      m ? /* @__PURE__ */ f("div", { className: $("item-text text", e), children: m }, "text") : null
    ];
    return [
      /* @__PURE__ */ f("div", { className: "item-content", children: g }, "content"),
      c ? /* @__PURE__ */ f(Dt, { content: c }, "extraContent") : null
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: o,
      actions: r,
      actionsClass: a,
      actionsAttrs: l
    } = t, c = [];
    o && c.push(/* @__PURE__ */ f(K, { className: "item-trailing-icon", icon: o }, "trailing-icon")), r != null && r.length && c.push(/* @__PURE__ */ f("div", { className: $("item-actions toolbar", a), ...l, children: r.map((h, p) => /* @__PURE__ */ f(Z, { type: "ghost", size: "sm", ...h }, p)) }, "actions"));
    const d = n ? /* @__PURE__ */ f(Dt, { content: n }, "trailing") : null;
    return d && c.push(d), e ? c.length ? [
      /* @__PURE__ */ f("div", { className: $("item-trailing", i), children: [
        c,
        d
      ] }, "trailing")
    ] : [] : c;
  }
  _render(t) {
    const {
      innerComponent: e,
      className: n,
      url: i,
      actions: o,
      target: r,
      active: a,
      disabled: l,
      divider: c,
      checked: d,
      multiline: h,
      hover: p
    } = t, m = e || (i && !o ? "a" : "div"), g = m === "a", _ = $(n, {
      active: a,
      disabled: l,
      "has-divider": c,
      "has-hover state": p,
      checked: d,
      multiline: h,
      state: g
    });
    return /* @__PURE__ */ f(m, { className: _, href: g ? i : void 0, target: g ? r : void 0, children: [
      this._renderLeading(t),
      this._renderContent(t),
      this._renderTrailing(t)
    ] }, "item");
  }
  _getChildren(t) {
    return [
      this._render(t),
      t.children
    ];
  }
}
re.defaultProps = {};
let ut = class extends vt {
  constructor(t) {
    super(t), this._ref = V(), this.state = {}, this._handleClick = this._handleClick.bind(this);
  }
  get name() {
    return this.props.name || this.constructor.NAME;
  }
  get itemName() {
    return this.props.itemName || this.constructor.ITEM_NAME;
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  load() {
    const { items: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      const i = { loading: !1 };
      try {
        const o = await Oi(t, [this], { throws: !0 });
        i.items = (e == null ? void 0 : e.call(this, o)) || o;
      } catch (o) {
        i.loadFailed = (typeof n == "function" ? n.call(this, o) : n) || String(o);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    !t || !e || Array.isArray(e) || e === this._loadedSetting || this.load();
  }
  getKey(t) {
    var e;
    return (e = this._keyIndexes) == null ? void 0 : e[t];
  }
  getItemByKey(t) {
    var n;
    if (!this._items)
      return;
    const e = (n = this._keyIndexes) == null ? void 0 : n.indexOf(t);
    if (!(e === void 0 || e < 0))
      return this._items[e];
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _renderItem(t, e) {
    const { itemRender: n } = t;
    if (n)
      return n.call(this, e);
    const { type: i = "item" } = e;
    let o = this.constructor.ItemComponents[i] || re;
    if (Array.isArray(o)) {
      let r = o[1];
      typeof r == "function" && (r = r.call(this, e, t)), e = u.extend({}, r, e), o = o[0];
    }
    return /* @__PURE__ */ f(o, { "zui-key": e.key, ...e });
  }
  _getItem(t, e, n) {
    var y, w, b;
    const { itemProps: i, itemPropsMap: o = {}, getItem: r, keyName: a = "id", divider: l, hover: c, multiline: d, checkbox: h } = t, { type: p = "item" } = e, { name: m, itemName: g } = this, { defaultItemProps: _ = {} } = this.constructor;
    e = u.extend(
      {
        ..._,
        type: p,
        divider: l,
        hover: c,
        multiline: d
      },
      i,
      o[p],
      e,
      {
        key: e.key ?? e[a] ?? n,
        rootClass: [_.rootClass, g, `${m}-${p}`, i == null ? void 0 : i.rootClass, (y = o[p]) == null ? void 0 : y.rootClass, e.rootClass],
        className: [_.className, g ? `${g}-inner` : "", i == null ? void 0 : i.className, (w = o[p]) == null ? void 0 : w.className, e.className],
        "zui-item": n,
        "zui-type": p,
        style: { ...i == null ? void 0 : i.style, ...(b = o[p]) == null ? void 0 : b.style, ...e.style }
      }
    ), h && p === "item" && (e.checked === void 0 && (e.checked = !1), typeof h == "object" && (e.checkbox = e.checkbox ? u.extend({}, h, e.checkbox) : h));
    const v = r ? r.call(this, e, n) : e;
    return v && (v.icon && (this._hasIcons = !0), v.checked !== void 0 && (this._hasCheckbox = !0)), v;
  }
  _getItemFromEvent(t) {
    var r;
    const e = t.target.closest("[zui-item]");
    if (!e || e.parentElement !== this._ref.current)
      return;
    const n = +e.getAttribute("zui-item"), i = (r = this._items) == null ? void 0 : r[n];
    if (!i)
      return;
    const o = this.getKey(n);
    if (o !== void 0)
      return { index: n, item: i, element: e, event: t, key: o };
  }
  _handleClick(t) {
    const { onClickItem: e } = this.props;
    if (!e)
      return;
    const n = this._getItemFromEvent(t);
    n && e.call(this, n);
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [t.className, this.name, e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    return {
      onClick: this._handleClick,
      ...super._getProps(t),
      ref: this._ref
    };
  }
  _getItems(t) {
    const { items: e = [] } = t;
    return Array.isArray(e) ? this._items = e : this._items = this.state.items || [], this._keyIndexes = [], this._items.reduce((n, i, o) => {
      const r = this._getItem(t, i, o);
      return r && (n.push(r), this._keyIndexes[o] = r.key), n;
    }, []);
  }
  _getChildren(t) {
    const n = this._getItems(t).map((o) => this._renderItem(t, o)), { loadFailed: i } = this.state;
    return i && n.push(i), t.children && n.push(t.children), n;
  }
  _getComponent(t) {
    return t.component || this.constructor.ROOT_TAG;
  }
  _onRender(t, e, n) {
    return e.className = $(
      e.className,
      this._hasIcons ? "has-icons" : "",
      this._hasCheckbox ? "has-checkbox" : ""
    ), [t, e, n];
  }
};
ut.ItemComponents = {
  item: re,
  custom: re,
  element: vt,
  divider: [vt, (s) => ({ className: [s.className, s.rootClass, "divider"] })],
  heading: re,
  space: [vt, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      className: [s.className, s.rootClass],
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
ut.NAME = "list";
ut.ITEM_NAME = "item";
ut.ROOT_TAG = "ul";
ut.defaultItemProps = {
  component: "li"
};
let _e = class extends ut {
  constructor(t) {
    super(t), this._controlled = t.nestedShow !== void 0, this.state.nestedShow = t.defaultNestedShow ?? {}, this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e, n) {
    const { nestedShow: i } = this, o = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return !!(typeof i == "object" ? i[o] ?? n : i);
  }
  toggle(t, e) {
    var i;
    if (this._controlled)
      return;
    const n = this._getNestedMap();
    if (e = e ?? !n[t], e !== !!n[t] && ((i = this.props.onToggle) == null ? void 0 : i.call(this, t, e)) !== !1)
      return n[t] = e, this.setState({ nestedShow: n });
  }
  toggleAll(t) {
    var i, o;
    if (this._controlled)
      return;
    let { nestedShow: e } = this;
    if (typeof e == "boolean")
      return this.setState({ nestedShow: t ?? !e });
    e = this._getNestedMap();
    const n = (o = (i = this._items) == null ? void 0 : i[0]) == null ? void 0 : o.key;
    t = t ?? (n ? !e[n] : !0), this.setState({ nestedShow: t });
  }
  _getNestedMap() {
    const { nestedShow: t } = this;
    return typeof t == "boolean" ? (this._items || []).reduce((e, n, i) => {
      const { key: o = this.getKey(i) } = n;
      return o !== void 0 && (e[o] = t), e;
    }, {}) : t;
  }
  _getClassName(t) {
    return [super._getClassName(t), "list-nested", t.level ? "list-nested-sub" : "list-nested-root"];
  }
  _getNestedProps(t, e, n) {
    var c;
    const {
      className: i,
      parentKey: o,
      nestedTrigger: r,
      level: a = 0,
      onHoverItem: l
    } = t;
    return {
      ...this.constructor.inheritNestedProps.reduce((d, h) => (d[h] = t[h], d), {}),
      items: e,
      parentKey: o ? `${o}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: l || r === "hover" ? this._handleHoverNestedItem : void 0,
      ...n.listProps,
      className: $(i, (c = n.listProps) == null ? void 0 : c.className),
      level: a + 1
    };
  }
  _renderNestedList(t, e, n) {
    const i = this._getNestedProps(t, e, n), o = this.constructor;
    return /* @__PURE__ */ f(o, { ...i }, "nested");
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: o = {} } = t;
    return typeof e == "boolean" ? (n = e ? o.expanded || /* @__PURE__ */ f("span", { className: "caret-down" }) : o.collapsed || /* @__PURE__ */ f("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ f(K, { icon: o.normal }), i = "is-empty"), /* @__PURE__ */ f("span", { className: $("list-toggle-icon", i), children: n });
  }
  _getItem(t, e, n) {
    const { items: i, ...o } = super._getItem(t, e, n);
    if (i) {
      const r = o.expanded ?? this.isExpanded(o.key, t.parentKey);
      if (o.rootClass = [o.rootClass, "is-nested", `is-nested-${r ? "show" : "hide"}`], r) {
        let { children: a = [] } = o;
        Array.isArray(a) || (a = [a]), a.push(this._renderNestedList(t, i, o)), o.children = a, o["zui-parent"] = t.parentKey;
      }
      o.expanded = r, o.toggleIcon = this._renderNestedToggle(t, r), o.onMouseEnter = this._handleHover, o.onMouseLeave = this._handleHover;
    }
    return e.items && (this._hasNestedItems = !0), o;
  }
  _renderItem(t, e) {
    return e.type === "item" && (this._hasIcons && !e.icon && (e.icon = "_"), this._hasNestedItems && !e.toggleIcon && (e.toggleIcon = this._renderNestedToggle(t, null))), super._renderItem(t, e);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return (t.type === "mouseenter" || t.type === "mouseleave") && (e.hover = t.type === "mouseenter"), { ...e, parentKey: this.props.parentKey };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, key: o, parentKey: r } = t, { nestedTrigger: a, nestedToggle: l } = this.props, c = i.target;
    if (!e.items || i.defaultPrevented || a === "hover" && n === void 0 || a === "click" && i.type !== "click" || c.closest(".not-nested-toggle") || l && !c.closest(l) || !l && c.closest("a,.btn,.item-checkbox") && !c.closest(".list-toggle-icon,.item-icon"))
      return;
    const d = typeof n == "boolean" ? n : void 0;
    this.toggle(`${r !== void 0 ? `${r}:` : ""}${o}`, d);
  }
  _handleClickNestedItem(t) {
    var e;
    (e = this.props.onClickItem) == null || e.call(this, t), this._toggleFromEvent(t);
  }
  _handleHoverNestedItem(t) {
    var e;
    (e = this.props.onHoverItem) == null || e.call(this, t), this._toggleFromEvent(t);
  }
  _handleClick(t) {
    var n;
    const e = this._getItemFromEvent(t);
    e && ((n = this.props.onClickItem) == null || n.call(this, e), this._controlled || this._toggleFromEvent(e));
  }
  _handleHover(t) {
    const e = this._getItemFromEvent(t);
    e && (this._hoverTimer && clearTimeout(this._hoverTimer), this._hoverTimer = window.setTimeout(() => {
      var n;
      this._hoverTimer = 0, (n = this.props.onHoverItem) == null || n.call(this, e), !this._controlled && this.props.nestedTrigger === "hover" && this._toggleFromEvent(e);
    }, 100));
  }
  _getProps(t) {
    const e = super._getProps(t), { style: n, level: i = 0, indent: o = 20 } = t;
    return e["zui-level"] = i, e.style = { ...n, "--list-nested-indent": `${i * o}px`, "--list-indent": `${o}px` }, e;
  }
  _beforeRender(t) {
    return this._hasIcons = !1, this._hasNestedItems = !this.isRoot, super._beforeRender(t);
  }
  _onRender(t, e, n) {
    return [t, e, n] = super._onRender(t, e, n) || [t, e, n], e.className = $(
      e.className,
      this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    ), [t, e, n];
  }
};
_e.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
_e.inheritNestedProps = ["component", "name", "itemName", "keyName", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "onToggle", "checkbox", "getItem"];
class zr extends F {
}
zr.NAME = "List";
zr.Component = ut;
class Vr extends F {
}
Vr.NAME = "NestedList";
Vr.Component = _e;
let wt = class extends _e {
  _getClassName(t) {
    return $(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "");
  }
};
wt.NAME = "menu";
wt.ROOT_TAG = "menu";
wt.ItemComponents = {
  ..._e.ItemComponents,
  item: [re, { innerComponent: "a" }]
};
var qi = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, pt = (s, t, e) => (qi(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Qt = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ts = (s, t, e, n) => (qi(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ho = (s, t, e) => (qi(s, t, "access private method"), e), Ss, Ms, ae, Gn, Ns, Is, As, Kn;
let Yi = class extends H {
  constructor(t) {
    super(t), Qt(this, As), Qt(this, Ss, void 0), Qt(this, Ms, V()), Qt(this, ae, 0), Qt(this, Gn, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Qt(this, Ns, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || n === i || (Ho(this, As, Kn).call(this), Ts(this, ae, window.setTimeout(() => {
          o(i, e), Ts(this, ae, 0);
        }, this.props.delay || 0)));
      });
    }), Qt(this, Is, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Ts(this, Ss, t.id || `search-box-${u.guid++}`);
  }
  get id() {
    return pt(this, Ss);
  }
  get input() {
    return pt(this, Ms).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Ho(this, As, Kn).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: o, rootStyle: r, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: p, clearIcon: m } = t, { focus: g, value: _ } = e, { id: v } = this, y = typeof _ != "string" || !_.trim().length;
    let w, b, C;
    return p && (C = p === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(K, { icon: p })), !h && p && (w = /* @__PURE__ */ f("label", { for: v, class: "input-control-prefix", children: C }, "prefix")), m && !y ? b = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: pt(this, Gn),
        children: m === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(K, { icon: m })
      }
    ) : h && p && (b = C), b && (b = /* @__PURE__ */ f("label", { for: v, class: "input-control-suffix", children: b }, "suffix")), /* @__PURE__ */ f("div", { class: $("search-box input-control", o, { focus: g, empty: y, "has-prefix-icon": w, "has-suffix-icon": b }), style: r, children: [
      w,
      /* @__PURE__ */ f(
        "input",
        {
          ref: pt(this, Ms),
          id: v,
          type: "text",
          class: $("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: _,
          onInput: pt(this, Ns),
          onChange: pt(this, Ns),
          onFocus: pt(this, Is),
          onBlur: pt(this, Is)
        }
      ),
      b
    ] });
  }
};
Ss = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakMap();
Gn = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakSet();
Kn = function() {
  pt(this, ae) && clearTimeout(pt(this, ae)), Ts(this, ae, 0);
};
Yi.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let vn = class extends wt {
  constructor() {
    super(...arguments), this._searchKeys = [], this._handleSearchChange = (t) => {
      this._searchKeys = u.unique(t.toLowerCase().split(" ").filter((e) => e.length)), this.setState({ search: t });
    };
  }
  static isItemMatch(t, e) {
    const { keys: n = "", text: i } = t;
    return !e.length || e.every((o) => n.toLowerCase().includes(o) || typeof i == "string" && i.toLowerCase().includes(o));
  }
  _getItem(t, e, n) {
    if (this.constructor.isItemMatch(e, this._searchKeys))
      return super._getItem(t, e, n);
  }
  _getChildren(t) {
    let e = super._getChildren(t);
    const { search: n } = t;
    if (!n)
      return e;
    e = e || [], Array.isArray(e) || (e = [e]);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && u.extend(i, n), e.push(/* @__PURE__ */ f(Yi, { ...i }, "search")), e;
  }
  _getClassName(t) {
    return [super._getClassName(t), t.search ? `search-menu search-menu-on-${t.searchPlacement || "top"}` : ""];
  }
};
vn.defaultProps = {
  ...wt.defaultProps,
  search: !0
};
class Ur extends F {
}
Ur.NAME = "Menu";
Ur.Component = wt;
class jr extends F {
}
jr.NAME = "SearchMenu";
jr.Component = vn;
let Rc = class extends H {
  render(t) {
    const {
      id: e,
      popup: n,
      title: i,
      content: o,
      style: r,
      className: a,
      closeBtn: l,
      arrow: c,
      headingClass: d,
      titleClass: h,
      contentClass: p,
      arrowStyle: m,
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ f(Dt, { content: o }, "content");
    (p || i) && (_ = /* @__PURE__ */ f("div", { className: p, children: _ }, "content"));
    const v = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(_), c && v.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: $("popover", a, { popup: n }), style: r, children: v });
  }
};
class Gi extends F {
}
Gi.NAME = "PopoverPanel";
Gi.Component = Rc;
const De = Math.min, le = Math.max, Zs = Math.round, bs = Math.floor, Kt = (s) => ({
  x: s,
  y: s
}), Wc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hc = {
  start: "end",
  end: "start"
};
function Xn(s, t, e) {
  return le(s, De(t, e));
}
function ms(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function ue(s) {
  return s.split("-")[0];
}
function gs(s) {
  return s.split("-")[1];
}
function qr(s) {
  return s === "x" ? "y" : "x";
}
function Ki(s) {
  return s === "y" ? "height" : "width";
}
function wn(s) {
  return ["top", "bottom"].includes(ue(s)) ? "y" : "x";
}
function Xi(s) {
  return qr(wn(s));
}
function Oc(s, t, e) {
  e === void 0 && (e = !1);
  const n = gs(s), i = Xi(s), o = Ki(i);
  let r = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Js(r)), [r, Js(r)];
}
function Bc(s) {
  const t = Js(s);
  return [Zn(s), t, Zn(t)];
}
function Zn(s) {
  return s.replace(/start|end/g, (t) => Hc[t]);
}
function Fc(s, t, e) {
  const n = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], r = ["bottom", "top"];
  switch (s) {
    case "top":
    case "bottom":
      return e ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? o : r;
    default:
      return [];
  }
}
function zc(s, t, e, n) {
  const i = gs(s);
  let o = Fc(ue(s), e === "start", n);
  return i && (o = o.map((r) => r + "-" + i), t && (o = o.concat(o.map(Zn)))), o;
}
function Js(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Wc[t]);
}
function Vc(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function Yr(s) {
  return typeof s != "number" ? Vc(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Qs(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function Oo(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const o = wn(t), r = Xi(t), a = Ki(r), l = ue(t), c = o === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      m = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (gs(t)) {
    case "start":
      m[r] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      m[r] += p * (e && c ? -1 : 1);
      break;
  }
  return m;
}
const Uc = async (s, t, e) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: r
  } = e, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let c = await r.getElementRects({
    reference: s,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = Oo(c, n, l), p = n, m = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: w,
      y: b,
      data: C,
      reset: x
    } = await y({
      x: d,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: m,
      rects: c,
      platform: r,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = w ?? d, h = b ?? h, m = {
      ...m,
      [v]: {
        ...m[v],
        ...C
      }
    }, x && g <= 50) {
      g++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (c = x.rects === !0 ? await r.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : x.rects), {
        x: d,
        y: h
      } = Oo(c, p, l)), _ = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: p,
    strategy: i,
    middlewareData: m
  };
};
async function Gr(s, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: o,
    rects: r,
    elements: a,
    strategy: l
  } = s, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = ms(t, s), g = Yr(m), v = a[p ? h === "floating" ? "reference" : "floating" : h], y = Qs(await o.getClippingRect({
    element: (e = await (o.isElement == null ? void 0 : o.isElement(v))) == null || e ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = h === "floating" ? {
    ...r.floating,
    x: n,
    y: i
  } : r.reference, b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), C = await (o.isElement == null ? void 0 : o.isElement(b)) ? await (o.getScale == null ? void 0 : o.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Qs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: b,
    strategy: l
  }) : w);
  return {
    top: (y.top - x.top + g.top) / C.y,
    bottom: (x.bottom - y.bottom + g.bottom) / C.y,
    left: (y.left - x.left + g.left) / C.x,
    right: (x.right - y.right + g.right) / C.x
  };
}
const Jn = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: o,
      platform: r,
      elements: a
    } = t, {
      element: l,
      padding: c = 0
    } = ms(s, t) || {};
    if (l == null)
      return {};
    const d = Yr(c), h = {
      x: e,
      y: n
    }, p = Xi(i), m = Ki(p), g = await r.getDimensions(l), _ = p === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", w = _ ? "clientHeight" : "clientWidth", b = o.reference[m] + o.reference[p] - h[p] - o.floating[m], C = h[p] - o.reference[p], x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
    let E = x ? x[w] : 0;
    (!E || !await (r.isElement == null ? void 0 : r.isElement(x))) && (E = a.floating[w] || o.floating[m]);
    const I = b / 2 - C / 2, P = E / 2 - g[m] / 2 - 1, D = De(d[v], P), S = De(d[y], P), A = D, z = E - g[m] - S, M = E / 2 - g[m] / 2 + I, B = Xn(A, M, z), ft = gs(i) != null && M != B && o.reference[m] / 2 - (M < A ? D : S) - g[m] / 2 < 0 ? M < A ? A - M : z - M : 0;
    return {
      [p]: h[p] - ft,
      data: {
        [p]: B,
        centerOffset: M - B + ft
      }
    };
  }
}), bn = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e;
      const {
        placement: n,
        middlewareData: i,
        rects: o,
        initialPlacement: r,
        platform: a,
        elements: l
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ..._
      } = ms(s, t), v = ue(n), y = ue(r) === r, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = h || (y || !g ? [Js(r)] : Bc(r));
      !h && m !== "none" && b.push(...zc(r, g, m, w));
      const C = [r, ...b], x = await Gr(t, _), E = [];
      let I = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && E.push(x[v]), d) {
        const A = Oc(n, o, w);
        E.push(x[A[0]], x[A[1]]);
      }
      if (I = [...I, {
        placement: n,
        overflows: E
      }], !E.every((A) => A <= 0)) {
        var P, D;
        const A = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, z = C[A];
        if (z)
          return {
            data: {
              index: A,
              overflows: I
            },
            reset: {
              placement: z
            }
          };
        let M = (D = I.filter((B) => B.overflows[0] <= 0).sort((B, nt) => B.overflows[1] - nt.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!M)
          switch (p) {
            case "bestFit": {
              var S;
              const B = (S = I.map((nt) => [nt.placement, nt.overflows.filter((ft) => ft > 0).reduce((ft, vl) => ft + vl, 0)]).sort((nt, ft) => nt[1] - ft[1])[0]) == null ? void 0 : S[0];
              B && (M = B);
              break;
            }
            case "initialPlacement":
              M = r;
              break;
          }
        if (n !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function jc(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, o = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), r = ue(e), a = gs(e), l = wn(e) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = o && l ? -1 : 1, h = ms(t, s);
  let {
    mainAxis: p,
    crossAxis: m,
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
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), l ? {
    x: m * d,
    y: p * c
  } : {
    x: p * c,
    y: m * d
  };
}
const Cn = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await jc(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, ts = function(s) {
  return s === void 0 && (s = {}), {
    name: "shift",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: r = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: y,
              y: w
            } = v;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = ms(s, t), c = {
        x: e,
        y: n
      }, d = await Gr(t, l), h = wn(ue(i)), p = qr(h);
      let m = c[p], g = c[h];
      if (o) {
        const v = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = m + d[v], b = m - d[y];
        m = Xn(w, m, b);
      }
      if (r) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", w = g + d[v], b = g - d[y];
        g = Xn(w, g, b);
      }
      const _ = a.fn({
        ...t,
        [p]: m,
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
};
function Xt(s) {
  return Kr(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function it(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ht(s) {
  var t;
  return (t = (Kr(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kr(s) {
  return s instanceof Node || s instanceof it(s).Node;
}
function Rt(s) {
  return s instanceof Element || s instanceof it(s).Element;
}
function bt(s) {
  return s instanceof HTMLElement || s instanceof it(s).HTMLElement;
}
function Bo(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof it(s).ShadowRoot;
}
function _s(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = ct(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function qc(s) {
  return ["table", "td", "th"].includes(Xt(s));
}
function Zi(s) {
  const t = Ji(), e = ct(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Yc(s) {
  let t = Pe(s);
  for (; bt(t) && !xn(t); ) {
    if (Zi(t))
      return t;
    t = Pe(t);
  }
  return null;
}
function Ji() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xn(s) {
  return ["html", "body", "#document"].includes(Xt(s));
}
function ct(s) {
  return it(s).getComputedStyle(s);
}
function kn(s) {
  return Rt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Pe(s) {
  if (Xt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Bo(s) && s.host || // Fallback.
    Ht(s)
  );
  return Bo(t) ? t.host : t;
}
function Xr(s) {
  const t = Pe(s);
  return xn(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : bt(t) && _s(t) ? t : Xr(t);
}
function tn(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = Xr(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), o = it(n);
  return i ? t.concat(o, o.visualViewport || [], _s(n) ? n : []) : t.concat(n, tn(n));
}
function Zr(s) {
  const t = ct(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = bt(s), o = i ? s.offsetWidth : e, r = i ? s.offsetHeight : n, a = Zs(e) !== o || Zs(n) !== r;
  return a && (e = o, n = r), {
    width: e,
    height: n,
    $: a
  };
}
function Qi(s) {
  return Rt(s) ? s : s.contextElement;
}
function $e(s) {
  const t = Qi(s);
  if (!bt(t))
    return Kt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: o
  } = Zr(t);
  let r = (o ? Zs(e.width) : e.width) / n, a = (o ? Zs(e.height) : e.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: r,
    y: a
  };
}
const Gc = /* @__PURE__ */ Kt(0);
function Jr(s) {
  const t = it(s);
  return !Ji() || !t.visualViewport ? Gc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kc(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== it(s) ? !1 : t;
}
function fe(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), o = Qi(s);
  let r = Kt(1);
  t && (n ? Rt(n) && (r = $e(n)) : r = $e(s));
  const a = Kc(o, e, n) ? Jr(o) : Kt(0);
  let l = (i.left + a.x) / r.x, c = (i.top + a.y) / r.y, d = i.width / r.x, h = i.height / r.y;
  if (o) {
    const p = it(o), m = n && Rt(n) ? it(n) : n;
    let g = p.frameElement;
    for (; g && n && m !== p; ) {
      const _ = $e(g), v = g.getBoundingClientRect(), y = ct(g), w = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, b = v.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += w, c += b, g = it(g).frameElement;
    }
  }
  return Qs({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Xc(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = bt(e), o = Ht(e);
  if (e === o)
    return t;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Kt(1);
  const l = Kt(0);
  if ((i || !i && n !== "fixed") && ((Xt(e) !== "body" || _s(o)) && (r = kn(e)), bt(e))) {
    const c = fe(e);
    a = $e(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - r.scrollLeft * a.x + l.x,
    y: t.y * a.y - r.scrollTop * a.y + l.y
  };
}
function Zc(s) {
  return Array.from(s.getClientRects());
}
function Qr(s) {
  return fe(Ht(s)).left + kn(s).scrollLeft;
}
function Jc(s) {
  const t = Ht(s), e = kn(s), n = s.ownerDocument.body, i = le(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = le(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -e.scrollLeft + Qr(s);
  const a = -e.scrollTop;
  return ct(n).direction === "rtl" && (r += le(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: o,
    x: r,
    y: a
  };
}
function Qc(s, t) {
  const e = it(s), n = Ht(s), i = e.visualViewport;
  let o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, r = i.height;
    const c = Ji();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function th(s, t) {
  const e = fe(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, o = bt(s) ? $e(s) : Kt(1), r = s.clientWidth * o.x, a = s.clientHeight * o.y, l = i * o.x, c = n * o.y;
  return {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function Fo(s, t, e) {
  let n;
  if (t === "viewport")
    n = Qc(s, e);
  else if (t === "document")
    n = Jc(Ht(s));
  else if (Rt(t))
    n = th(t, e);
  else {
    const i = Jr(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Qs(n);
}
function ta(s, t) {
  const e = Pe(s);
  return e === t || !Rt(e) || xn(e) ? !1 : ct(e).position === "fixed" || ta(e, t);
}
function eh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = tn(s).filter((a) => Rt(a) && Xt(a) !== "body"), i = null;
  const o = ct(s).position === "fixed";
  let r = o ? Pe(s) : s;
  for (; Rt(r) && !xn(r); ) {
    const a = ct(r), l = Zi(r);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || _s(r) && !l && ta(s, r)) ? n = n.filter((d) => d !== r) : i = a, r = Pe(r);
  }
  return t.set(s, n), n;
}
function sh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const r = [...e === "clippingAncestors" ? eh(t, this._c) : [].concat(e), n], a = r[0], l = r.reduce((c, d) => {
    const h = Fo(t, d, i);
    return c.top = le(h.top, c.top), c.right = De(h.right, c.right), c.bottom = De(h.bottom, c.bottom), c.left = le(h.left, c.left), c;
  }, Fo(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function nh(s) {
  return Zr(s);
}
function ih(s, t, e) {
  const n = bt(t), i = Ht(t), o = e === "fixed", r = fe(s, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Kt(0);
  if (n || !n && !o)
    if ((Xt(t) !== "body" || _s(i)) && (a = kn(t)), n) {
      const c = fe(t, !0, o, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Qr(i));
  return {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function zo(s, t) {
  return !bt(s) || ct(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function ea(s, t) {
  const e = it(s);
  if (!bt(s))
    return e;
  let n = zo(s, t);
  for (; n && qc(n) && ct(n).position === "static"; )
    n = zo(n, t);
  return n && (Xt(n) === "html" || Xt(n) === "body" && ct(n).position === "static" && !Zi(n)) ? e : n || Yc(s) || e;
}
const oh = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || ea, o = this.getDimensions;
  return {
    reference: ih(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await o(e)
    }
  };
};
function rh(s) {
  return ct(s).direction === "rtl";
}
const ah = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xc,
  getDocumentElement: Ht,
  getClippingRect: sh,
  getOffsetParent: ea,
  getElementRects: oh,
  getClientRects: Zc,
  getDimensions: nh,
  getScale: $e,
  isElement: Rt,
  isRTL: rh
};
function lh(s, t) {
  let e = null, n;
  const i = Ht(s);
  function o() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function r(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: d,
      width: h,
      height: p
    } = s.getBoundingClientRect();
    if (a || t(), !h || !p)
      return;
    const m = bs(d), g = bs(i.clientWidth - (c + h)), _ = bs(i.clientHeight - (d + p)), v = bs(c), w = {
      rootMargin: -m + "px " + -g + "px " + -_ + "px " + -v + "px",
      threshold: le(0, De(1, l)) || 1
    };
    let b = !0;
    function C(x) {
      const E = x[0].intersectionRatio;
      if (E !== l) {
        if (!b)
          return r();
        E ? r(!1, E) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      e = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(C, w);
    }
    e.observe(s);
  }
  return r(!0), o;
}
function to(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Qi(s), d = i || o ? [...c ? tn(c) : [], ...tn(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), o && y.addEventListener("resize", e);
  });
  const h = c && a ? lh(c, e) : null;
  let p = -1, m = null;
  r && (m = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), e();
  }), c && !l && m.observe(c), m.observe(t));
  let g, _ = l ? fe(s) : null;
  l && v();
  function v() {
    const y = fe(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), o && y.removeEventListener("resize", e);
    }), h && h(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const $n = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: ah,
    ...e
  }, o = {
    ...i.platform,
    _c: n
  };
  return Uc(s, t, {
    ...i,
    platform: o
  });
}, ch = '[data-toggle="popover"]', Vo = "show", Uo = "in";
class lt extends rt {
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
      const e = u(t.target);
      (!e.closest(`#${this._id}`).length && this._targetElement !== e.closest(".popover")[0] || e.closest('[data-dismiss="popover"]').length) && this.hide();
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
      const r = u(i), { namespace: a } = this;
      t === "hover" ? r.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && r.on(`${t}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
      });
    }
    const { show: o } = this.options;
    o && this.show({ delay: typeof o == "number" ? o : !1 });
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), u(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n } = t || {};
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
    const i = this.initTarget();
    if (!i)
      return;
    this._targetElement = i;
    const o = u(i), { animation: r, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (o.addClass(Vo), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      o.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(Uo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: o } = this.options, r = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), r.removeClass(Uo), o === "hover" && (this._clearDelayHide(), r.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), r.removeClass(Vo), t && this._resetTimer(() => {
        this.destroy();
      }, typeof t == "number" ? t : 0), this._destoryTarget();
    }, e ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), u(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      u(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = to(t, e, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), $n(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const p = u(e).css({
          position: h,
          left: a,
          top: l
        }), m = d.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[m], _ = c.arrow;
        _ && p.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), o === !0 && p.attr("class", `${p.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", m);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let o = this._panel;
      o && o.element !== e && (o.destroy(), o = void 0), o ? o.render(n) : (o = new Gi(e, n), o.on("inited", () => this.layout())), this._panel = o;
    } else
      n.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
  }
  delayHide(t = 100) {
    this._hideTimer = window.setTimeout(() => {
      this._hideTimer = 0, this.hide();
    }, t);
  }
  _clearDelayHide() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = 0);
  }
  _getLayoutOptions() {
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, shift: o, offset: r, arrow: a, strategy: l } = this.options, c = a ? e.querySelector(".arrow") : null, d = c ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: l,
      middleware: [
        i ? bn() : null,
        o ? ts(typeof o == "object" ? o : void 0) : null,
        r || d ? Cn((r || 0) + d) : null,
        a ? Jn({ element: c }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: n,
      content: i,
      headingClass: o = `${t}-heading`,
      titleClass: r = `${t}-title`,
      contentClass: a = `${t}-content`,
      style: l,
      className: c = t,
      closeBtn: d,
      arrow: h
    } = this.options;
    return {
      popup: e,
      title: n,
      titleClass: r,
      headingClass: o,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: c,
      closeBtn: d,
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
    const { container: t = "body" } = this.options, e = u(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, o = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(o instanceof HTMLElement ? o : document.body, { element: o, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
}
lt.NAME = "Popover";
lt.Z_INDEX = 1700;
lt.MULTI_INSTANCE = !0;
lt.DEFAULT = {
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
u(document).on(`click${lt.NAMESPACE} mouseenter${lt.NAMESPACE}`, ch, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(lt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    lt.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const hh = '[data-toggle="dropdown"]';
class yt extends lt {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n } = this.options;
    return {
      items: t,
      nestedTrigger: "hover",
      placement: e,
      popup: !1,
      ...n
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: kt(sa, this._getMenuOptions())
    };
  }
}
yt.NAME = "Dropdown";
yt.DEFAULT = {
  ...lt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${yt.NAMESPACE} mouseenter${yt.NAMESPACE}`, hh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(yt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    const i = {
      ...t.data(),
      show: !0,
      triggerEvent: s
    };
    if (!i.target && t.is("a")) {
      const o = t.attr("href");
      o && "#0".includes(o[0]) && (i.target = o);
    }
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), yt.ensure(t, i), s.preventDefault();
  }
});
class eo extends Z {
  constructor() {
    super(...arguments), this._ref = V();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e } = this.props, n = u(this.triggerElement), i = yt.get(this.triggerElement), o = {
      items: e,
      ...t
    };
    i ? i.setOptions(o) : n.data(o);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = yt.get(this.triggerElement)) == null || t.destroy();
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
eo.defaultProps = {
  caret: !0
};
class sa extends vn {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this._ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || $n(e, t, {
      placement: this.props.placement,
      middleware: [bn(), ts(), Cn(1)]
    }).then(({ x: n, y: i }) => {
      u(t).css({
        left: n,
        top: i
      });
    });
  }
  _getNestedProps(t, e, n) {
    const i = super._getNestedProps(t, e, n);
    return i.className = $(i.className, "show"), i.popup = !0, i;
  }
  _afterRender(t) {
    super._afterRender(t), this.isRoot || (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "dropdown-menu-toggle-icon caret-right ml-2" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
sa.defaultProps = {
  ...vn.defaultProps,
  popup: !0,
  search: !1,
  nestedTrigger: "hover",
  placement: "right-start"
};
const Gt = class extends ut {
  static getBtnProps(t, e) {
    const { style: n, rootClass: i, class: o, class: r, ...a } = t, { size: l, btnProps: c = {}, btnType: d } = e;
    return {
      size: l,
      btnType: d,
      ...c,
      ...a,
      style: c.style ? u.extend({}, c.style, n) : n,
      className: [o, r, i, c.className],
      type: ""
    };
  }
};
Gt.ItemComponents = {
  ...ut.ItemComponents,
  item: [Z, Gt.getBtnProps],
  dropdown: [eo, Gt.getBtnProps]
};
Gt.NAME = "btn-group";
Gt.ITEM_NAME = "";
Gt.ROOT_TAG = "nav";
Gt.defaultItemProps = {};
let na = Gt, Ct = class extends na {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = $(n.className, `gap-${e}`) : n.style = u.extend(n.style || {}, { gap: e })), n;
  }
};
Ct.NAME = "toolbar";
Ct.defaultItemProps = {
  btnType: "ghost"
};
function dh({
  className: s,
  style: t,
  actions: e,
  heading: n,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: c,
  iconClass: d,
  ...h
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ f(Z, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : et(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ f(Z, { ...a, onClick: l }));
  const m = et(e) ? e : e ? /* @__PURE__ */ f(Ct, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: $("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(K, { icon: c, className: $("alert-icon", d) }),
    et(i) ? i : /* @__PURE__ */ f("div", { className: $("alert-content", o), children: [
      et(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? m : null
    ] }),
    n ? null : m,
    p,
    r
  ] });
}
function uh(s) {
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
function fh({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ f(
    dh,
    {
      className: $("messager", o, t, n === !0 ? uh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var ph = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, mh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Re = (s, t, e) => (ph(s, t, "access private method"), e), te, be;
class so extends F {
  constructor() {
    super(...arguments), mh(this, te), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      u(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Re(this, te, be).call(this, () => {
      this._show = !0, this.render(), Re(this, te, be).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Re(this, te, be).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Re(this, te, be).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Re(this, te, be).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
te = /* @__PURE__ */ new WeakSet();
be = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
so.NAME = "MessagerItem";
so.Component = fh;
var no = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ce = (s, t, e) => (no(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Cs = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ds = (s, t, e, n) => (no(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ia = (s, t, e) => (no(s, t, "access private method"), e), Ee, Nt, Qn, oa, io, ra;
const En = class aa extends rt {
  constructor() {
    super(...arguments), Cs(this, Qn), Cs(this, io), Cs(this, Ee, void 0), Cs(this, Nt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ce(this, Nt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), ia(this, Qn, oa).call(this).show();
  }
  hide() {
    var t;
    (t = ce(this, Nt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = aa.ensure(e || "body", { key: `messager_${u.guid++}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Ee = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Qn = /* @__PURE__ */ new WeakSet();
oa = function() {
  if (ce(this, Nt))
    ce(this, Nt).setOptions(this.options);
  else {
    const s = ia(this, io, ra).call(this), t = new so(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Ds(this, Ee, void 0), Ds(this, Nt, void 0);
    }), Ds(this, Nt, t);
  }
  return ce(this, Nt);
};
io = /* @__PURE__ */ new WeakSet();
ra = function() {
  if (ce(this, Ee))
    return ce(this, Ee);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ds(this, Ee, e[0])), e[0];
};
En.NAME = "messager";
En.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
En.MULTI_INSTANCE = !0;
let Rd = En;
let oo = class extends H {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: c, textY: d, children: h } = t, p = n / 2;
    let { circleWidth: m = 0.1 } = t;
    m < 1 && (m = n * m);
    const g = (n - m) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ f("text", { x: c ?? p, y: d ?? p + m / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: r === !0 ? Math.round(e) : r }) : null,
      h
    ] });
  }
};
oo.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class la extends F {
}
la.NAME = "ProgressCircle";
la.Component = oo;
const We = '[droppable="true"]';
class ro extends rt {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, o = u(t.target), r = o.closest(e), a = r[0];
      !a || n && !o.closest(n).length || i && i.call(this, t, a) === !1 || (r.attr("draggable", "true"), this._setState({ dragging: a }));
    }, this._handleDragStart = (t) => {
      const { dragElement: e } = this;
      if (!e) {
        t.preventDefault();
        return;
      }
      const { options: n } = this, { onDragStart: i } = n;
      if (i && i.call(this, t, e) === !1) {
        this._clean();
        return;
      }
      const { $element: o } = this, { target: r, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d } = n;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      const h = typeof r == "function" ? u(r.call(this, e)) : o.find(r || a || We);
      c && (o.find(c).removeClass(c), h.addClass(c)), d && o.addClass(d), o.find(We).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
    }, this._handleDrag = (t) => {
      var n;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (n = this.options.onDrag) == null || n.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var n;
      const { dragElement: e } = this;
      this._clean(), e && ((n = this.options.onDragEnd) == null || n.call(this, t, e));
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var o, r;
      const { dragElement: e } = this, n = u(t.target).closest(We)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (o = this.options.onDragEnter) == null || o.call(this, t, e, n);
        }
        (r = this.options.onDragOver) == null || r.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(We)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(We)[0];
      e && (t.preventDefault(), (n = this.options.onDrop) == null || n.call(this, t, this.dragElement, e));
    };
  }
  get state() {
    return this._state;
  }
  get dragElement() {
    return this._state.dragging;
  }
  get dropElement() {
    return this._state.dropping;
  }
  async afterInit() {
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), u(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t) {
    var o;
    const e = this._state, { dragging: n = e.dragging, dropping: i = e.dropping } = t;
    n === e.dragging && i === e.dropping || (this._state = { dragging: n, dropping: i }, (o = this.options.onChange) == null || o.call(this, this._state, e));
  }
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: n } = this.options;
    n && u(e).removeClass(n), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: n, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: o } = this;
    if (o) {
      const a = u(o);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const r = this._$targets;
    r && (e && r.removeClass(e), n && r.removeClass(n), this._$targets = void 0);
  }
}
ro.NAME = "Draggable";
ro.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const gh = '[moveable="true"]';
class ca extends rt {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: o } = e, r = u(t.target), a = r.closest(n), l = a[0];
      if (!l || i && !r.closest(i).length || o && o.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), u(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      this._state && (this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        var e;
        this._raf = 0, this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state);
      }));
    }, this._handleMouseUp = (t) => {
      var e, n;
      this._state && (this._raf && (cancelAnimationFrame(this._raf), this._raf = 0), this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state), (n = this.options.onMoveEnd) == null || n.call(this, t, this._state), this._clean());
    };
  }
  get state() {
    return this._state;
  }
  get moveElement() {
    var t;
    return (t = this._state) == null ? void 0 : t.target;
  }
  async afterInit() {
    this.on("mousedown", this._handleMouseDown);
  }
  destroy() {
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var a;
    t.preventDefault();
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const l = u(e);
      if (this.options.move === !0) {
        const d = l.css("position");
        n.strategy = d === "fixed" || d === "absolute" ? "position" : "transform";
      } else
        n.strategy = "none";
      const c = l.position();
      n = u.extend(n, {
        target: e,
        startX: n.x,
        startY: n.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: c.left,
        startTop: c.top,
        left: c.left,
        top: c.top
      });
    } else if (i) {
      const l = n.x - i.startX, c = n.y - i.startY;
      n = u.extend({}, i, n, {
        deltaX: l,
        deltaY: c,
        left: i.startLeft + l,
        top: i.startTop + c
      });
    }
    this._state = n;
    const { strategy: o, target: r } = n;
    o === "position" ? u(r).css({ left: n.left, top: n.top }) : o === "transform" && u(r).css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`), (a = this.options.onChange) == null || a.call(this, n, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: n } = this;
    if (n) {
      const i = u(n);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
ca.NAME = "Moveable";
ca.DEFAULT = {
  selector: gh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
var Mt;
class _h {
  constructor(t = "") {
    R(this, Mt, void 0);
    typeof t == "object" ? W(this, Mt, t) : W(this, Mt, document.appendChild(document.createComment(t)));
  }
  on(t, e, n) {
    N(this, Mt).addEventListener(t, e, n);
  }
  once(t, e, n) {
    N(this, Mt).addEventListener(t, e, { once: !0, ...n });
  }
  off(t, e, n) {
    N(this, Mt).removeEventListener(t, e, n);
  }
  emit(t) {
    return N(this, Mt).dispatchEvent(t), t;
  }
}
Mt = new WeakMap();
const jo = /* @__PURE__ */ new Set([
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
class ha extends _h {
  on(t, e, n) {
    super.on(t, e, n);
  }
  off(t, e, n) {
    super.off(t, e, n);
  }
  once(t, e, n) {
    super.once(t, e, n);
  }
  emit(t, e) {
    return typeof t == "string" && (jo.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(ha.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (jo.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
const ao = class da extends rt {
  async afterInit() {
    const t = await da.loadModule();
    this.module = new t(this.element, this.options);
  }
  option(t, e) {
    if (e === void 0)
      return this.module.option(t);
    this.module.option(t, e);
  }
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param element an HTMLElement or selector string.
   * @param selector default: `options.draggable`
   */
  closest(t, e) {
    return this.module.closest(t, e);
  }
  /**
   * Sorts the elements according to the array.
   * @param order an array of strings to sort.
   * @param useAnimation default: false.
   */
  sort(t, e) {
    this.module.sort(t, e);
  }
  /**
   * Saving and restoring of the sort.
   */
  save() {
    this.module.save();
  }
  /**
   * Removes the sortable functionality completely.
   */
  destroy() {
    super.destroy(), this.module.destroy();
  }
  /**
   * Serializes the sortable's item data-id's (dataIdAttr option) into an array of string.
   */
  toArray() {
    return this.module.toArray();
  }
  static async loadModule() {
    return this.Module || (this.Module = await u.getLib("sortablejs")), this.Module;
  }
};
ao.NAME = "Sortable";
ao.DEFAULT = {
  animation: 150
};
let Hd = ao;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let ua = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const Pn = "```ZUI_STR\n";
var is, ie, Te, mt, Se, Me, Ps;
const wo = class wo {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    R(this, Me);
    R(this, is, void 0);
    R(this, ie, void 0);
    R(this, Te, void 0);
    R(this, mt, void 0);
    R(this, Se, void 0);
    W(this, is, e), W(this, Te, t ?? ua()), W(this, ie, `ZUI_STORE:${N(this, Te)}`), W(this, mt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return N(this, is);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (N(this, Se) || W(this, Se, new wo(N(this, Te), "session")), N(this, Se));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = N(this, mt).getItem(ye(this, Me, Ps).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(Pn))
        return n.substring(Pn.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    N(this, mt).setItem(ye(this, Me, Ps).call(this, t), typeof e == "string" ? `${Pn}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    N(this, mt).removeItem(ye(this, Me, Ps).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < N(this, mt).length; e++) {
      const n = N(this, mt).key(e);
      if (n != null && n.startsWith(N(this, ie))) {
        const i = N(this, mt).getItem(n);
        typeof i == "string" && t(n.substring(N(this, ie).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
};
is = new WeakMap(), ie = new WeakMap(), Te = new WeakMap(), mt = new WeakMap(), Se = new WeakMap(), Me = new WeakSet(), Ps = function(t) {
  return `${N(this, ie)}:${t}`;
};
let en = wo;
const Ve = new en("DEFAULT");
function yh(s, t = "local") {
  return new en(s, t);
}
Object.assign(Ve, { create: yh });
class fa extends F {
}
fa.NAME = "Avatar";
fa.Component = ji;
class pa extends F {
}
pa.NAME = "BtnGroup";
pa.Component = na;
const ti = Symbol("EVENT_PICK");
class lo extends H {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let o = n === "open" ? !0 : void 0;
    const r = u(t.target), a = i == null ? void 0 : i(t);
    if (!t.defaultPrevented) {
      if (typeof a == "boolean")
        o = a;
      else {
        if (r.closest('[data-dismiss="pick"]').length) {
          e(!1);
          return;
        }
        if (r.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => e(o));
    }
  }
  _getClass(t) {
    const { state: e, className: n } = t, { open: i, disabled: o } = e;
    return $(
      "pick",
      n,
      i && "is-open focus",
      o && "disabled"
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
    const { name: e, state: { value: n = "" }, id: i } = t;
    if (e)
      if (this._hasInput)
        u(`#${i}`).val(n);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: e, value: n });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t}`, (n, i) => {
      if (i === ti)
        return;
      const o = n.target.value;
      o !== e.value && (this._skipTriggerChange = o, this.props.changeState({ value: o }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", ti), this._skipTriggerChange = !1);
  }
  render(t) {
    return kt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
var oe, gt, Ut;
class ma extends H {
  constructor(e) {
    super(e);
    R(this, oe, void 0);
    R(this, gt, void 0);
    R(this, Ut, void 0);
    W(this, oe, V()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = N(this, oe)) == null ? void 0 : e.current;
  }
  get container() {
    return N(this, Ut);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = u(e.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return e.stopPropagation(), n(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: o } = i;
    return $(
      "pick-pop",
      n,
      o === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: n,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = e, c = u.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: N(this, oe),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!N(this, Ut)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), W(this, Ut, i[0]);
    }
    return N(this, Ut);
  }
  _render(e) {
    return /* @__PURE__ */ f("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: n, props: i } = this, { state: o } = i;
    if (!e || !n || !o.open) {
      N(this, gt) && (N(this, gt).call(this), W(this, gt, void 0));
      return;
    }
    N(this, gt) || W(this, gt, to(n, e, () => {
      const { placement: r, width: a } = i;
      $n(n, e, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? bn() : null, ts(), Cn(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        u(e).css({
          left: l,
          top: c,
          width: a === "100%" ? u(n).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
      }), a === "100%" && u(e).css({ width: u(e).width() });
    }));
  }
  componentDidMount() {
    var e, n;
    this.layout(), u(document).on("click", this._handleDocClick), (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    u(document).off("click", this._handleDocClick);
    const e = N(this, gt);
    e && (e(), W(this, gt, void 0)), W(this, Ut, void 0), W(this, oe, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return Sc(this._render(e), this._getContainer(e));
  }
}
oe = new WeakMap(), gt = new WeakMap(), Ut = new WeakMap();
var ga = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Bt = (s, t, e) => (ga(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ln = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ve = (s, t, e, n) => (ga(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ls, dt, Ue;
let st = class extends H {
  constructor(t) {
    super(t), Ln(this, Ls, void 0), Ln(this, dt, 0), Ln(this, Ue, V()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Bt(this, dt) && (clearTimeout(Bt(this, dt)), ve(this, dt, 0));
      let o = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: r } = o;
      return r === "closing" ? (await qs(200, (a) => {
        ve(this, dt, a);
      }), ve(this, dt, 0), o = await this.changeState({ open: !1 })) : r === "opening" && (await qs(50, (a) => {
        ve(this, dt, a);
      }), ve(this, dt, 0), o = await this.changeState({ open: !0 })), o;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ve(this, Ls, t.id ?? `_pick${u.guid++}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Bt(this, Ls);
  }
  get pop() {
    return Bt(this, Ue).current;
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
      state: e,
      className: t.className,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
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
  _handleChange(t, e) {
    const { onChange: n } = this.props;
    n && n.call(this, t, e);
  }
  setValue(t) {
    if (!this.props.disabled)
      return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: n } = this.state, { open: i } = e;
    if (n === i)
      return;
    const { onPopShow: o, onPopHide: r } = this.props;
    i && o ? o() : !i && r && r();
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: o, value: r } = e;
    if (!!n != !!o) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      n && a ? a() : !n && l && l();
    }
    i !== r && this._handleChange(i, r), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), Bt(this, dt) && clearTimeout(Bt(this, dt));
    const t = Bt(this, Ue).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let o;
    if (n) {
      const r = this._getPop(t);
      o = /* @__PURE__ */ f(r, { ref: Bt(this, Ue), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Le, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      o
    ] });
  }
};
Ls = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakMap();
st.Trigger = lo;
st.Pop = ma;
st.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let _a = class extends st {
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
    const { syncBackground: t, syncBorder: e, syncColor: n, syncValue: i } = this.props, o = this.state.value || "";
    if (t && u(t).css("backgroundColor", o), e && u(e).css("borderColor", o), n && u(n).css("color", o), i) {
      const r = u(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ f(K, { icon: n }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = u.extend({
      color: e.value
    }, n.style), n.className = $("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, o = this.getColors(), { value: r } = e;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ f(K, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(K, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
_a.defaultProps = {
  ...st.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class ya extends F {
}
ya.NAME = "ColorPicker";
ya.Component = _a;
const es = 24 * 60 * 60 * 1e3, U = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), vh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(U(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, ys = (s, t = /* @__PURE__ */ new Date()) => U(s).toDateString() === U(t).toDateString(), ei = (s, t = /* @__PURE__ */ new Date()) => U(s).getFullYear() === U(t).getFullYear(), va = (s, t = /* @__PURE__ */ new Date()) => (s = U(s), t = U(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Fd = (s, t = /* @__PURE__ */ new Date()) => {
  s = U(s), t = U(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, zd = (s, t) => ys(U(t), s), Vd = (s, t) => ys(U(t).getTime() - es, s), Ud = (s, t) => ys(U(t).getTime() + es, s), J = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = U(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", ei(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, jd = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = J(s, ei(s) ? n.month : n.full);
  if (ys(s, t))
    return i;
  const o = J(t, ei(s, t) ? va(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
};
var os, rs;
class wa extends H {
  constructor() {
    super(...arguments);
    R(this, os, V());
    R(this, rs, (e, n) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(N(this, os).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: o } = e, r = [], a = [];
    for (let c = 0; c < 24; ++c)
      r.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: o === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: N(this, os), children: [
      /* @__PURE__ */ f(
        wt,
        {
          className: l,
          items: r,
          onClickItem: N(this, rs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        wt,
        {
          className: l,
          items: a,
          onClickItem: N(this, rs).bind(this, "minute")
        }
      )
    ] });
  }
}
os = new WeakMap(), rs = new WeakMap();
var wh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, xs = (s, t, e) => (wh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ks = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, si, ni, ii, oi;
const qo = (s) => {
  if (!s)
    return;
  const t = U(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let ba = class extends st {
  constructor(t) {
    super(t), ks(this, si, () => {
      this.toggle(!0);
    }), ks(this, ni, (n) => {
      this.setTime(n.target.value);
    }), ks(this, ii, (n, i) => {
      this.setTime({ [n]: i });
    }), ks(this, oi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = J(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: c = +a, minute: d = +l } = t;
      e = `${c}:${d}`;
    }
    const n = qo(e), { onInvalid: i, required: o, defaultValue: r } = this.props;
    this.setState({ value: n ? J(n, this.props.format) : o ? r : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = qo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !o && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: xs(this, oi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(K, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: r, readOnly: a, onFocus: xs(this, si), onChange: xs(this, ni) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(wa, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: xs(this, ii) });
  }
};
si = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
ba.defaultProps = {
  ...st.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
G.addLang({
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
const bh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), o = n.getTime() - (7 + i - e) % 7 * es;
  return {
    days: 7 * 5,
    startTime: o,
    firstDay: n.getTime()
  };
}, Yo = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => J(e, t)));
var cn;
class Ch extends H {
  constructor() {
    super(...arguments);
    R(this, cn, (e) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(e) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = G.getLang("weekNames"),
      monthNames: r = G.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], p = "btn ghost square rounded-full";
    for (let E = 0; E < 7; E++) {
      const I = (i + E) % 7;
      h.push(/* @__PURE__ */ f("div", { className: $("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: o ? o[I] : I }) }, E));
    }
    const { startTime: m, days: g, firstDay: _ } = bh(a, l, i), v = _ + g * es;
    let y = m;
    const w = [], b = "yyyy-MM-dd", C = Yo(c, b), x = Yo(d, b);
    for (; y <= v; ) {
      const E = [];
      for (let I = 0; I < 7; I++) {
        const P = new Date(y), D = P.getDate(), S = J(P, b), A = P.getDay(), z = va(P, _), M = $("col mini-calendar-day", {
          active: C.has(S),
          selected: x.has(S),
          "is-first": D === 1,
          "is-in-month": z,
          "is-out-month": !z,
          "is-today": ys(P, n),
          "is-weekend": A === 0 || A === 6
        });
        E.push(
          /* @__PURE__ */ f("div", { className: M, "data-date": S, children: /* @__PURE__ */ f("a", { className: p, onClick: N(this, cn), children: D === 1 && r ? r[P.getMonth()] : P.getDate() }) }, S)
        ), y += es;
      }
      w.push(/* @__PURE__ */ f("div", { className: "row", children: E }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      w
    ] });
  }
}
cn = new WeakMap();
var as, hn;
class Go extends H {
  constructor() {
    super(...arguments);
    R(this, as, V());
    R(this, hn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const o = u(e.target).closest("[data-value]").dataset("value");
      o && (n(+o), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(N(this, as).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: o, value: r } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = o; c <= i; ++c)
      a.push(/* @__PURE__ */ f(Z, { type: "ghost", "data-value": c, active: c === r, className: $(l === c ? "is-current" : ""), onClick: N(this, hn), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: N(this, as), children: a });
  }
}
as = new WeakMap(), hn = new WeakMap();
var Ne, ls, cs, hs, ds, us, dn, xa, un, ka;
class Ca extends H {
  constructor(e) {
    super(e);
    R(this, dn);
    R(this, un);
    R(this, Ne, void 0);
    R(this, ls, void 0);
    R(this, cs, void 0);
    R(this, hs, void 0);
    R(this, ds, void 0);
    R(this, us, void 0);
    W(this, Ne, V()), W(this, ls, (o) => {
      const r = u(o.target).closest("[data-set-date]");
      r.length && this.changeDate(r.dataset("set-date"));
    }), W(this, cs, () => {
      const { year: o, month: r } = this.state;
      r === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: r - 1 });
    }), W(this, hs, () => {
      const { year: o, month: r } = this.state;
      r === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: r + 1 });
    }), W(this, ds, (o) => {
      this.setState({ year: o, select: "day" });
    }), W(this, us, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var r, a;
      if (o.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        o.length > 3 && (l = vh(l, o.substring(5).replace("+", ""))), o = J(l, "yyyy-MM-dd");
      }
      (a = (r = this.props).onChange) == null || a.call(r, o);
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
  componentDidMount() {
    u(N(this, Ne).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: o = G.getLang("yearFormat") || "{0}",
      weekNames: r = G.getLang("weekNames"),
      monthNames: a = G.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: p
    } = n, m = p === "day", g = U(e.minDate || "1970-1-1"), _ = U(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: N(this, Ne), onClick: N(this, ls), children: [
      ye(this, dn, xa).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(Z, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: X(o, d) }),
          /* @__PURE__ */ f(Z, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(Z, { type: "ghost", size: "sm", square: !0, onClick: N(this, cs), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(Z, { type: "ghost", size: "sm", square: !0, onClick: N(this, hs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          Ch,
          {
            weekStart: l,
            weekNames: r,
            monthNames: a,
            year: d,
            month: h,
            selections: c,
            onClickDate: this.changeDate
          }
        ) : null,
        p === "year" ? /* @__PURE__ */ f(
          Go,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: N(this, ds)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          Go,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: N(this, us)
          }
        ) : null,
        m ? ye(this, un, ka).call(this, e) : null
      ] })
    ] });
  }
}
Ne = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), dn = new WeakSet(), xa = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(wt, { ...n })) : null;
}, un = new WeakSet(), ka = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: o } = e;
  return n || (n = [{ text: i, "data-set-date": J(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(Ct, { btnProps: { className: "ghost text-primary" }, ...n }),
    o ? /* @__PURE__ */ f(Z, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var xh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Rn = (s, t, e) => (xh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Wn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ri, ai, li;
let $a = class extends st {
  constructor(t) {
    super(t), Wn(this, ri, () => {
      this.toggle(!0);
    }), Wn(this, ai, (n) => {
      this.setDate(n.target.value);
    }), Wn(this, li, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: o = "", required: r, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = U(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? r ? o : "" : J(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = J(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !o && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Rn(this, li), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(K, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: r, readOnly: a, onFocus: Rn(this, ri), onChange: Rn(this, ai) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: $(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: o, yearText: r, todayText: a = G.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: p, required: m } = t;
    return /* @__PURE__ */ f(
      Ca,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: o,
        yearText: r,
        todayText: a,
        clearText: m ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: p
      }
    );
  }
};
ri = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
$a.defaultProps = {
  ...st.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Ea extends F {
}
Ea.NAME = "TimePicker";
Ea.Component = ba;
class Ta extends F {
}
Ta.NAME = "DatePicker";
Ta.Component = $a;
class kh extends H {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(Ca, { ...e }),
      /* @__PURE__ */ f(wa, { ...n })
    ] });
  }
}
var $h = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, He = (s, t, e) => ($h(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Oe = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ci, hi, di, ui, fi;
const Ko = (s) => {
  if (!s)
    return;
  const t = U(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Sa = class extends st {
  constructor(t) {
    super(t), Oe(this, ci, () => {
      this.toggle(!0);
    }), Oe(this, hi, (r) => {
      this.setDate(r.target.value);
    }), Oe(this, di, () => {
      this.setDate("");
      const { required: r, defaultValue: a } = this.props;
      this.setState({ value: r ? a : "" });
    }), Oe(this, ui, (r, a) => {
      this.setTime({ [r]: a });
    }), Oe(this, fi, (r) => {
      this.setTime(r.target.value);
    }), this.setDate = (r) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: p } = this.props;
      if (h)
        return;
      const m = U(r), g = !r || Number.isNaN(m.getDay()), _ = J(m, d), [, v = "00:00"] = this.state.value.split(p);
      this.setState({ value: g ? c ? l : "" : `${_}${p}${v}` }, () => {
        !g && a && a(r);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: o } = t;
    e && (this.state.value = J(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${o}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: o, joiner: r, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, p = "00:00"] = this.state.value.split(r), [m, g] = p.split(":"), { hour: _ = +m, minute: v = +g } = t;
      c = `${_}:${v}`;
    }
    const d = Ko(c), h = this.state.value.split(r)[0] || J(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${r}${J(d, o)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = Ko(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !o && l.length ? h = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: He(this, di),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(K, { icon: i })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: l,
          disabled: r,
          readOnly: a,
          onFocus: He(this, ci),
          onChange: (p) => {
            He(this, hi).call(this, p), He(this, fi).call(this, p);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: $(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: o, yearText: r, todayText: a = G.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: p, required: m, minuteStep: g } = t, [_, v] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: o,
        yearText: r,
        todayText: a,
        clearText: m ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: p
      },
      time: {
        hour: _,
        minute: v,
        minuteStep: g,
        onChange: He(this, ui)
      }
    };
    return /* @__PURE__ */ f(kh, { ...y });
  }
};
ci = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
fi = /* @__PURE__ */ new WeakMap();
Sa.defaultProps = {
  ...st.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Ma extends F {
}
Ma.NAME = "DatetimePicker";
Ma.Component = Sa;
const Hn = "show", Xo = "in", Eh = '[data-dismiss="modal"]', vs = class je extends rt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Eh) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Hn);
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
          if (!this.shown)
            return;
          const i = e.clientWidth, o = e.clientHeight, [r, a] = this._lastDialogSize || [];
          (r !== i || a !== o) && (this._lastDialogSize = [i, o], this.layout());
        });
        n.observe(e), this._rob = n;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  show(t) {
    const { modalElement: e } = this;
    if (this.shown)
      return u(e).css("z-index", `${je.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: n, backdrop: i, className: o, style: r } = this.options;
    return u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, Hn, o).css({
      zIndex: `${je.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(Xo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (u(this.modalElement).removeClass(Xo), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(Hn), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = u(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const d = { width: "", height: "" };
      typeof e == "object" ? (d.width = e.width, d.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (d.width = e), i.css(d);
    }
    t = t ?? this.options.position ?? "fit";
    const o = n.clientWidth, r = n.clientHeight;
    this._lastDialogSize = [o, r], typeof t == "function" && (t = t({ width: o, height: r }));
    const a = {
      left: null,
      bottom: null,
      right: null
    };
    let l = null, c = "center";
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = je.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = je.query(t)) == null || e.show();
  }
};
vs.NAME = "Modal";
vs.MULTI_INSTANCE = !0;
vs.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
vs.zIndex = 1500;
let pe = vs;
u(window).on(`resize.${pe.NAMESPACE}`, () => {
  pe.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
u(document).on(`to-hide.${pe.NAMESPACE}`, (s, t) => {
  pe.hide(t == null ? void 0 : t.target);
});
class Na extends H {
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
    return et(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: $("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : et(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(Ct, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? et(t) ? t : /* @__PURE__ */ f("div", { className: $("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return et(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: $("modal-footer", e), children: n ? /* @__PURE__ */ f(Ct, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: $("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: $("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Na.defaultProps = { closeBtn: !0 };
class Ia extends H {
  constructor() {
    super(...arguments), this._ref = V(), this.state = {}, this._watchIframeHeight = () => {
      var n, i;
      const t = (i = (n = this._ref.current) == null ? void 0 : n.contentWindow) == null ? void 0 : i.document;
      if (!t)
        return;
      let e = this._rob;
      e == null || e.disconnect(), e = new ResizeObserver(() => {
        const o = t.body, r = t.documentElement, a = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, r.offsetHeight)) + 1;
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
    return /* @__PURE__ */ f(
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
Ia.defaultProps = {
  watchHeight: !0
};
var co = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ht = (s, t, e) => (co(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Be = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, we = (s, t, e, n) => (co(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Rs = (s, t, e) => (co(s, t, "access private method"), e), $t, qe, Et, sn, ho, Ws, pi;
function Th(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function Sh(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
    url: n,
    headers: {
      "X-ZUI-Modal": "true"
    },
    ...i
  });
  if (e !== "html")
    try {
      const d = JSON.parse(c);
      return {
        title: r,
        ...o,
        ...d
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [c] : {
    title: r,
    ...o,
    body: e === "html" ? /* @__PURE__ */ f(ps, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Mh(s, t) {
  const { url: e, custom: n, title: i, size: o } = t, r = typeof o == "object" && typeof o.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(Ia, { url: e, watchHeight: !r })
  };
}
const Nh = {
  custom: Th,
  ajax: Sh,
  iframe: Mh
}, On = "loading", Aa = class ee extends pe {
  constructor() {
    super(...arguments), Be(this, sn), Be(this, Ws), Be(this, $t, void 0), Be(this, qe, void 0), Be(this, Et, void 0);
  }
  get id() {
    return ht(this, qe);
  }
  get loading() {
    var t;
    return (t = ht(this, $t)) == null ? void 0 : t.classList.contains(On);
  }
  get shown() {
    var t;
    return !!((t = ht(this, $t)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = ht(this, $t);
    if (!t) {
      const { options: e } = this;
      let n = ht(this, qe);
      n || (n = e.id || `modal-${u.guid++}`, we(this, qe, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const o = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": o
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      we(this, $t, t);
    }
    return t;
  }
  get $emitter() {
    const t = ht(this, $t);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ee.getAll().some((t) => t.shown) || u("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (u("body").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = ht(this, $t);
    t && (u(t).removeData(this.constructor.KEY).remove(), we(this, $t, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ht(this, Et) && clearTimeout(ht(this, Et));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: o, loadingText: r = null } = e, a = Nh[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", r).addClass(On), o && we(this, Et, window.setTimeout(() => {
      we(this, Et, 0), Rs(this, Ws, pi).call(this, this.options.timeoutTip);
    }, o));
    const l = await a.call(this, t, e);
    return l === !1 ? await Rs(this, Ws, pi).call(this, this.options.failedTip) : l && typeof l == "object" && await Rs(this, sn, ho).call(this, l), ht(this, Et) && (clearTimeout(ht(this, Et)), we(this, Et, 0)), this.layout(), await qs(100), n.removeClass(On), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, o = { show: !0, ...i };
      !o.type && o.url && (o.type = "ajax");
      const r = ee.ensure(n, o), a = `${ee.NAMESPACE}.open${u.guid++}`;
      r.on(`hidden${a}`, () => {
        r.off(a), e(r);
      }), r.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: o = "icon-lg muted", actions: r = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? p = /* @__PURE__ */ f("div", { className: $("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${o}` }),
      p
    ] }) : p = /* @__PURE__ */ f("div", { className: $("modal-body", h.bodyClass), children: p });
    const m = [];
    (Array.isArray(r) ? r : [r]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = G.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && m.push(v);
    }, []);
    let g;
    const _ = m.length ? {
      gap: 4,
      items: m,
      onClickItem: ({ item: v, event: y }) => {
        const w = ee.query(y.target, c);
        g = v.key, (a == null ? void 0 : a(v, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await ee.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      backdrop: "static",
      custom: { footerActions: _, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ee.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, a) => {
        n == null || n(r.key === "confirm", a), e == null || e(r, a);
      },
      ...i
    }) === "confirm";
  }
};
$t = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
sn = /* @__PURE__ */ new WeakSet();
ho = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, Xs(
      /* @__PURE__ */ f(Na, { ...s }),
      this.modalElement
    );
  });
};
Ws = /* @__PURE__ */ new WeakSet();
pi = function(s) {
  if (s)
    return Rs(this, sn, ho).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
Aa.DEFAULT = {
  ...pe.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Ih = Aa;
const Ah = '[data-toggle="modal"]';
class mi extends rt {
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
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), !n.key && n.id && (n.key = n.id), n;
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
      e = pe.ensure(n, t);
    } else
      e = Ih.ensure(this.container, t);
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
mi.NAME = "ModalTrigger";
u(document).on(`click${mi.NAMESPACE}`, Ah, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = mi.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let Tn = class extends ut {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
Tn.NAME = "nav";
Tn.ItemComponents = {
  ...ut.ItemComponents,
  item: [re, { innerComponent: "a" }]
};
Tn.defaultItemProps = {
  component: "li"
};
class Da extends F {
}
Da.NAME = "Nav";
Da.Component = Tn;
function ss(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Dh({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = ss(o, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : X(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : X(r, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === o.page), /* @__PURE__ */ f(Z, { type: e, ...a });
}
function Ph({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = ss(i, e);
  return n = typeof n == "function" ? n(a) : X(n, a), /* @__PURE__ */ f(vt, { ...r, children: [
    o,
    n
  ] });
}
function Lh({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...o
}) {
  if (!n.pageTotal)
    return;
  const r = { ...o, square: !0 }, a = () => (r.text = "", r.icon = "icon-ellipsis-h", r.disabled = !0, /* @__PURE__ */ f(Z, { type: t, ...r })), l = (d, h) => {
    const p = [];
    for (let m = d; m <= h; m++) {
      r.text = m, delete r.icon, r.disabled = !1;
      const g = ss(n, m);
      i && (r.url = typeof i == "function" ? i(g) : X(i, g)), p.push(/* @__PURE__ */ f(Z, { type: t, ...r }));
    }
    return p;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
function Rh({
  type: s,
  pagerInfo: t,
  linkCreator: e,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items || n.map((c) => {
    const d = { ...t, recPerPage: c };
    return {
      ...o,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(d) : X(e, d)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(t) : X(a, t), i.menu = { ...i.menu, className: $((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(eo, { type: "dropdown", dropdown: i, ...r });
}
function Wh({
  key: s,
  page: t,
  type: e,
  btnType: n,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...c
}) {
  const d = { ...c };
  let h;
  const p = (_) => {
    var v;
    h = Number((v = _.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, m = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = ss(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(v) : X(l, v));
  }, g = ss(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : X(l, g), /* @__PURE__ */ f("div", { className: $("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(Z, { type: n, ...d, onClick: m })
  ] });
}
const Vt = class extends Ct {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n), o = e.type || "item", r = this._pagerInfo;
    return o === "info" ? u.extend(i, { pagerInfo: r }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && u.extend(i, { pagerInfo: r, linkCreator: t.linkCreator }), i;
  }
};
Vt.NAME = "pager";
Vt.ItemComponents = {
  ...Ct.ItemComponents,
  info: Ph,
  link: [Dh, Vt.getBtnProps],
  nav: [Lh, Vt.getBtnProps],
  "size-menu": [Rh, Vt.getBtnProps],
  goto: [Wh, Vt.getBtnProps]
};
Vt.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let Hh = Vt;
class Pa extends F {
}
Pa.NAME = "Pager";
Pa.Component = Hh;
class La extends F {
}
La.NAME = "Pick";
La.Component = st;
var Ie, fs;
class Ra extends H {
  constructor(e) {
    super(e);
    R(this, Ie, void 0);
    R(this, fs, void 0);
    this._searchInput = V(), this._measure = V(), W(this, Ie, (n) => {
      var o, r;
      const i = n.target.value;
      (r = (o = this.props).onSearch) == null || r.call(o, i), this.setState({ search: i }), n.stopPropagation();
    }), W(this, fs, (n) => {
      var i, o;
      n.stopPropagation(), (o = (i = this.props).onClear) == null || o.call(i), this.setState({ search: "" }, () => this.focus());
    }), this.state = { search: e.defaultSearch ?? "" };
  }
  focus() {
    var e;
    (e = this._searchInput.current) == null || e.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: e } = this.props;
    if (e) {
      const { current: n } = this._measure, { current: i } = this._searchInput;
      if (n && i) {
        const o = u(i).parent();
        o.width(Math.ceil(Math.min(n.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(e, n) {
    const { placeholder: i, inline: o } = e, { search: r } = n, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: r }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: N(this, fs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: N(this, Ie),
          onInput: N(this, Ie),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ie = new WeakMap(), fs = new WeakMap();
class Oh extends lo {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(Dt, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      Ra,
      {
        inline: !0,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: n
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: n }, search: i, placeholder: o, children: r } = this.props, a = n && i;
    return !a && !e.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      r,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: o, emptyValue: r } = t;
    if (e)
      if (this.hasInput)
        u(`#${i}`).val(n);
      else {
        const a = o.length ? o : [r];
        return /* @__PURE__ */ f("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ f("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    u(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: o, emptyValue: r } = this.props;
    if (i && t.state.value !== n.value) {
      const a = u(`#${e}`).val(o.length ? o : [r]);
      this._skipTriggerChange !== n.value && a.trigger("change", ti), this._skipTriggerChange = !1;
    }
  }
}
class Bh extends lo {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
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
      const o = n.find((r) => r.value === e);
      o && typeof o.text == "string" && (i = o.text);
    }
    return i;
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ f(
      Ra,
      {
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder()
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: n = [], open: i }, placeholder: o, search: r, disabled: a, clearable: l } = t, [c] = n, d = i && r;
    let h;
    if (d)
      h = this._renderSearch(t);
    else if (c) {
      const { text: g } = c;
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ f(Dt, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "main");
    const p = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      p,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
const Fh = (s, t, e = "is-match") => s.reduce((n, i) => [...n].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((c, d) => {
    d && (o.push(/* @__PURE__ */ f("span", { class: e, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + c.length)), l += c.length;
  }), o;
}, []), t);
function Wa(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Wa(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class zh extends ma {
  constructor() {
    super(...arguments), this._menu = V(), this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value;
      if (console.log("> _handleItemClick", n, t, e), n === void 0 || e.target.closest(".item-icon,.list-toggle-icon"))
        return;
      const { multiple: i, onToggleValue: o, onSelect: r, togglePop: a, onDeselect: l } = this.props;
      if (i)
        if (t.items) {
          const d = [...Wa(t.items).values()].filter((h) => !h.items).map((h) => h.value);
          e.target.closest(".item-inner.active") ? l(d) : r(d);
        } else
          o(n);
      else
        r(n), a(!1, { search: "" });
    };
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && u(t).on("mouseenter.picker.zui", ".menu-item", (e) => {
      const n = u(e.currentTarget);
      this.setHoverItem(n.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const t = this.element;
    t && u(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const e = this._getHoverItem();
      e != null && e.length && e.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return u(t).find(".menu-item>a.hover");
  }
  _getMenuItems() {
    var h;
    const { selections: t, items: e, hoverItem: n, search: i } = this.props.state, o = new Set(t.map((p) => p.value));
    let r = !1;
    const a = (h = this.props.menu) == null ? void 0 : h.checkbox, l = u.unique(i.toLowerCase().split(" ").filter((p) => p.length)), c = (p) => {
      const {
        key: m,
        value: g = "",
        keys: _,
        text: v,
        className: y,
        content: w,
        ...b
      } = p;
      g === n && (r = !0);
      let C = b.items, x = !1;
      Array.isArray(C) && (x = !0, C = C.map((I) => (I = c(I), I.active || (x = !1), I)));
      const E = x || o.has(g);
      return {
        key: m,
        value: g,
        active: E,
        checked: a ? E : void 0,
        text: w ? null : typeof v == "string" ? Fh(l, [v]) : /* @__PURE__ */ f(Dt, { content: v }),
        className: $(y, { hover: g === n }),
        "data-value": g || "",
        content: w,
        innerComponent: C ? "div" : "a",
        ...b,
        items: C
      };
    }, d = e.map(c);
    return !r && d.length && (d[0].className = $(d[0].className, "hover")), d;
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: e } = t;
    return /* @__PURE__ */ f(
      wt,
      {
        ref: this._menu,
        className: "picker-menu-list",
        items: this._getMenuItems(),
        onClickItem: this._handleItemClick,
        defaultNestedShow: !0,
        ...e
      }
    );
  }
}
function Hs(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Hs(n.items, e), e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
let uo = class extends st {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = V(), this.isEmptyValue = (o) => this._emptyValueSet.has(o), this.toggleValue = (o, r) => {
      if (!this.props.multiple)
        return r || o !== this.value ? this.setValue(o) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(o);
      if (r !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(o), this.setValue(a);
    }, this.deselect = (o) => {
      const { valueList: r } = this, a = new Set(this.formatValueList(o)), l = r.filter((c) => !a.has(c));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (o) => {
      const r = this.formatValueList(o), a = this.props.multiple ? [...this.valueList, ...r] : r[0];
      return this.setValue(a);
    }, this.isSelected = (o) => this.valueList.includes(o), u.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: n = "" } = this.props;
    this._emptyValueSet = new Set(n.split(e));
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((o) => o.value = String(o.value)), t.limitValueInList) {
        const o = Hs(i);
        this.state.value = this.valueList.filter((r) => o.has(r)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value ?? "");
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: n } = this.props, { search: i } = this.state;
    let o = [];
    if (Array.isArray(e))
      if (i.length) {
        const r = u.unique(i.toLowerCase().split(" ").filter((a) => a.length));
        o = e, r.length && (o = e.reduce((a, l) => {
          const {
            value: c = "",
            keys: d = "",
            text: h
          } = l;
          return r.every((p) => c.toLowerCase().includes(p) || d.toLowerCase().includes(p) || typeof h == "string" && h.toLowerCase().includes(p)) && a.push(l), a;
        }, []));
      } else
        o = e;
    else if (await qs(n || 500), this._abort !== t || (o = await Oi(e, [this, i], { signal: t.signal }), this._abort !== t))
      return o;
    return this._abort = void 0, o;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const o = i.items || n.items, r = Hs(o);
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(r.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, o = {};
    if (this._itemsCacheInfo = i, t || i.search !== e.search || n.items !== i.items) {
      const a = await this.load();
      o.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), o.loading = !1, i.items = n.items, i.search = e.search;
    }
    (t || i.value !== e.value) && (i.value = e.value);
    const r = o.items;
    n.required && !n.multiple && this.isEmptyValue(this.state.value) && Array.isArray(r) && r.length && (o.value = r[0].value), Object.keys(o).length && await this.changeState(o);
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
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
      ref: this._trigger,
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
      clearable: !!this.valueList.length && !t.required,
      valueList: this.valueList,
      emptyValue: this.firstEmptyValue,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getPopProps(t, e) {
    return {
      ...super._getPopProps(t, e),
      menu: t.checkbox ? u.extend({ checkbox: t.checkbox }, t.menu) : t.menu,
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
    return t.Trigger || (t.multiple ? Oh : Bh);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = u.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = u.unique(t)), e.filter((n) => !this.isEmptyValue(n));
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let n = this.formatValueList(t);
    if (n.length) {
      const { items: o, limitValueInList: r } = this.props;
      if (r) {
        const a = Hs(Array.isArray(o) ? o : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    if (e) {
      const o = this._trigger.current;
      o && (o._skipTriggerChange = i);
    }
    return this.changeState({ value: i });
  }
};
uo.defaultProps = {
  ...st.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
uo.Pop = zh;
class Ha extends F {
}
Ha.NAME = "Picker";
Ha.Component = uo;
class Oa extends rt {
  init() {
    const { trigger: t } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const e = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: n } = this.options;
      n === 0 ? e() : setTimeout(e, n);
    }, this.$element.addClass("z-50").on(t, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: e } = this.options, n = {
      placement: t,
      strategy: e,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && n.middleware.push(bn()), o && n.middleware.push(o === !0 ? ts() : ts(o)), r && n.middleware.push(Jn({ element: this.$arrow[0] })), a && n.middleware.push(Cn(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = to(t, e, () => {
      $n(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !Jn || !r.arrow)
          return;
        const { x: a, y: l } = r.arrow, c = {
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
          [c]: "-4px"
        });
      });
    });
  }
  initTarget() {
    const t = this.$element.data("target");
    if (!t)
      throw new Error("popsvers trigger must have target.");
    const e = u(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    e.addClass(n), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
      u(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = e;
  }
  show() {
    var t;
    this.$target.removeClass("hidden"), (t = this.$mask) == null || t.removeClass("hidden");
  }
  hide() {
    var t;
    this.$target.addClass("hidden"), (t = this.$mask) == null || t.addClass("hidden");
  }
  initMask() {
    const { mask: t } = this.options;
    if (!t)
      return;
    const e = u('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = u('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
Oa.NAME = "Popovers";
Oa.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0,
  delay: 0
};
class Ba extends F {
}
Ba.NAME = "SearchBox";
Ba.Component = Yi;
class Fa extends F {
}
Fa.NAME = "Toolbar";
Fa.Component = Ct;
const Vh = '[data-toggle="tooltip"]';
class It extends lt {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let o = n, r = i;
    return r === void 0 && (r = o, o = void 0), {
      ...super._getRenderOptions(),
      title: o,
      content: r,
      className: $("tooltip", t, e, o ? "tooltip-has-title" : ""),
      contentClass: o ? "tooltip-content" : ""
    };
  }
}
It.NAME = "Tooltip";
It.DEFAULT = {
  ...lt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${It.NAMESPACE} mouseenter${It.NAMESPACE}`, Vh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(It.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    It.ensure(t, { show: It.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
let Sn = class extends _e {
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (i) {
      if (i.type === "item") {
        i.icon === void 0 && (i.icon = e.items ? i.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon);
        let o = i.actions || t.itemActions;
        if (typeof o == "function" && (o = o.call(this, i)), Array.isArray(o) && (o = { items: o }), o) {
          let r = i.trailing || [];
          Array.isArray(r) || (r = [r]), r.push(/* @__PURE__ */ f(Ct, { className: $("not-nested-toggle", i.actionsClass, o.className), size: "sm", ...o }, "toolbar")), i.trailing = r;
        }
      }
      return i.actions = !0, i;
    }
  }
};
Sn.defaultItemProps = {
  component: "li",
  innerComponent: "div",
  className: "tree-item-content",
  trailingClass: "tree-actions"
};
Sn.NAME = "tree";
Sn.inheritNestedProps = [..._e.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class za extends F {
}
za.NAME = "Tree";
za.Component = Sn;
class fo extends rt {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? hc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${o}" for="${t}">${e}</label>`), n) {
        const p = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(p);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = u(`<span class="text-primary">${e}</span>`);
    if (n) {
      const h = u(`<i class="icon icon-${n} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = u(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
    const d = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...d);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary")), this.$label.hasClass("dragover") || this.$label.addClass("dragover");
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
    }).on("drop", (t) => {
      var n;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((n = t.dataTransfer) == null ? void 0 : n.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: n } = this.options;
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), n && this.$input.prop("accept", n);
  }
  addFile(t) {
    const { multiple: e, onSizeChange: n } = this.options;
    e || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, n == null || n(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const e = t.name.lastIndexOf(".");
    if (e === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const n = t.name.substring(0, e), i = t.name.substring(e);
    return this.renameDuplicatedFile(new File([t], `${n}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (!e)
      return t;
    const n = e.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return n.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), t.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: n, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (e) {
      const c = [];
      for (let d of t) {
        if (n && this.fileMap.size >= n)
          return r == null || r(c), alert(o);
        if (this.currentBytes + d.size > this.limitBytes)
          return r == null || r(c), alert(i);
        d = this.renameDuplicatedFile(d);
        const h = this.createFileItem(d);
        this.itemMap.set(d.name, h), this.$list.append(h), c.push(d);
      }
      r == null || r(c);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), r == null || r(a);
  }
  deleteFileItem(t) {
    var l, c;
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const n = this.fileMap.get(e);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((d) => this.dataTransfer.items.add(d)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var o, r;
    const n = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), n && (t = this.fileMap.get(n) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(e, i).delete(t.name), (r = (o = this.options).onRename) == null || r.call(o, e, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], e), this.fileMap.set(e, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: e } = this.options;
    return this.addFile(t), u('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return u(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: n, renameClass: i } = this.options;
    if (t) {
      const o = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new It(o, { title: e }), o;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const o = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new It(o, { title: e })), o;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${cc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, o = u('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(t.name)), i && o.append(this.fileSize(t.size)), e && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), o;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, o = u('<div class="input-group input-rename-container hidden"></div>'), r = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const h = o.closest(".file-item"), p = h.find(".file-name");
        if (p.html() === r.val()) {
          o.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(t, r.val()), o.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), p.html(r.val());
      } else
        d.key === "Escape" && (r.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = o.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === r.val()) {
        o.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(t, r.val()), o.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(r.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      r.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(c);
  }
}
fo.NAME = "Upload";
fo.DEFAULT = {
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
class Va extends fo {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = u(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = u(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = u('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), e && this.$tip.append(u(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = u('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (e === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const n = e.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => n.includes(i.type));
  }
  createFileItem(t) {
    const e = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, e);
    const { deleteBtn: n, showSize: i } = this.options;
    return n && e.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && e.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), e;
  }
  setImageUrl(t, e) {
    const n = new FileReader();
    n.onload = () => {
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})`, backgroundSize: "cover" }).prependTo(e);
    }, n.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = u(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return u('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(u(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = n.closest(".file-item").find(".file-name");
        if (o.html() === n.val()) {
          n.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(n.val()))
          return alert(e);
        this.renameFileItem(t, n.val()), n.addClass("hidden"), o.html(n.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && n.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = n.closest(".file-item").find(".file-name");
      if (i.html() === n.val()) {
        n.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(n.val()))
        return alert(e);
      this.renameFileItem(t, n.val()), n.addClass("hidden"), i.html(n.val()).closest(".file-info").removeClass("hidden");
    });
    return n;
  }
}
Va.NAME = "UploadImgs";
Va.DEFAULT = {
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
class po extends yt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
po.NAME = "ContextMenu";
po.DEFAULT = {
  ...yt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function Uh(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: r, height: a }, children: /* @__PURE__ */ f(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: o }),
          i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(ps, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const Bn = ([s, t, e, n], [i, o, r, a]) => !(s + e <= i || i + r <= s || t + n <= o || o + a <= t), Zo = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], $s = "Dashboard:Block.cache:";
let Ua = class extends H {
  constructor(t) {
    super(t), this._ref = V(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: n } = this.state, i = {};
      let o = !1;
      n.forEach((r) => {
        const [a, l, c, d] = this._map.get(r.id), h = this._oldMap.get(r.id);
        (!h || h[0] !== a || h[1] !== l || h[2] !== c || h[3] !== d) && (o = !0, i[r.id] = { left: a, top: l, width: c, height: d }, this._oldMap.set(r.id, [a, l, c, d]));
      }), o && e(i);
    }, this._handleMenuClick = (e) => {
      const n = e.target.closest(".dashboard-block");
      if (!n)
        return;
      const i = n.dataset.id;
      if (!i)
        return;
      const o = this.getBlock(i);
      if (!o || !o.menu)
        return;
      const { menu: r } = o, { onClickMenu: a } = this.props;
      po.show({
        triggerEvent: e,
        element: e.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var c;
            ((c = l.item.data) == null ? void 0 : c.type) === "refresh" && this.load(i), a && a.call(this, l, o);
          },
          ...r
        }
      });
    }, this.state = { blocks: this._initBlocks(t.blocks) };
  }
  getBlock(t) {
    return this.state.blocks.find((e) => e.id === t);
  }
  update(t, e) {
    const { id: n } = t, { blocks: i } = this.state, o = i.findIndex((a) => a.id === n);
    if (o < 0)
      return;
    const r = i[o];
    t.fetch && t.fetch !== r.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[o] = { ...r, ...t }, this.setState({ blocks: i }, e);
  }
  delete(t) {
    const { blocks: e } = this.state, n = e.findIndex((i) => i.id === t);
    n < 0 || (e.splice(n, 1), this.setState({ blocks: e }));
  }
  add(t) {
    t = Array.isArray(t) ? t : [t], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(t)] });
  }
  load(t, e) {
    const n = this.getBlock(t);
    !n || n.loading || (e = e || n.fetch, e && this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      try {
        const i = await u.fetch(e, [t, n], ({ url: o }) => ({ url: X(o, n) }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var o;
          this._setCache(t, i), (o = this.props.onLoad) == null || o.call(this, n);
        });
      } catch (i) {
        const o = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: o }, () => {
          var r;
          (r = this.props.onLoadFail) == null || r.call(this, i, n);
        });
      }
    }));
  }
  reset(t) {
    this.setState({ blocks: this._initBlocks(t) });
  }
  loadNext() {
    const { blocks: t } = this.state;
    let e = "";
    for (const n of t) {
      if (n.loading)
        return;
      if (!n.visible && this._isVisible(n.id))
        return this.update({ id: n.id, visible: !0 });
      if (n.needLoad && n.visible) {
        e = n.id;
        break;
      }
    }
    e.length && requestAnimationFrame(() => this.load(e));
  }
  _isVisible(t) {
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? Ve.set(`${$s}${n}:${t}`, e) : Ve.session.set(`${$s}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? Ve.get(`${$s}${e}:${t}`) : Ve.session.get(`${$s}${t}`);
    if (n)
      return { html: n };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: n, grid: i } = this.props;
    return t.map((r) => {
      const {
        id: a,
        size: l,
        width: c,
        height: d,
        left: h = -1,
        top: p = -1,
        fetch: m = e,
        menu: g = n,
        content: _,
        ...v
      } = r, [y, w] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: w,
        left: Math.min(h, i - y),
        top: p,
        fetch: m,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!m,
        ...v
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: n } = this.props;
    return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    const { blocks: t, dragging: e, dropping: n } = this.state, i = this._map;
    if (i.size) {
      const a = [0, 0, 0, 0];
      t.sort((l, c) => Zo(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const o = Array.from(i.entries());
    o.sort((a, l) => Zo(a[1], l[1]));
    let r = 0;
    return o.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, r = Math.max(r, c + l[3]);
    }), n && (r = Math.max(r, n[1] + n[3])), { blocks: t, height: r };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new ro(t, {
      selector: ".dashboard-block",
      target: () => t,
      beforeDrag: (e, n) => {
        const i = n.getBoundingClientRect();
        if (e.clientY - i.top > 48)
          return e.preventDefault(), !1;
        this._dragOffset = [e.clientX - i.left, e.clientY - i.top];
      },
      onDragStart: (e, n) => {
        const i = n.dataset.id;
        i !== void 0 && (this._dragging = this._map.get(i), this.setState({ dragging: i }));
      },
      onDragOver: (e) => {
        const { cellHeight: n, grid: i } = this.props, o = t.getBoundingClientRect(), [, , r, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - r, Math.max(0, Math.round((e.clientX - o.left - l) / (o.width / i)))), h = Math.max(0, Math.round((e.clientY - o.top - c) / n)), p = this.state.dropping;
        p && p[0] === d && p[1] === h || this.setState({ dropping: [d, h, r, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: n } = this.state, i = { dragging: void 0, dropping: void 0 }, o = {};
        if (e && n) {
          const { blocks: r } = this.state;
          r.forEach((a, l) => {
            const [c, d] = e === a.id ? n : this._map.get(a.id);
            (a.left !== c || a.top !== d) && (r[l] = { ...a, left: c, top: d }, o[a.id] = { left: c, top: d });
          }), i.blocks = r;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: n, top: i, width: o, height: r } = t, a = [n, i, o, r];
    n < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: n } = this.state;
    if (n && Bn(t, n))
      return !1;
    for (const [i, o] of this._map.entries())
      if (i !== e && Bn(o, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && Bn(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [n, i, o, r] = e;
    let a = i;
    if (n >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [n, i, o, r]);
        return;
      }
      a = -1;
    }
    let l = n < 0 ? 0 : n, c = a < 0 ? 0 : a, d = !1;
    const h = this.props.grid;
    for (; !d; ) {
      if (this._canPlace([l, c, o, r])) {
        d = !0;
        break;
      }
      n < 0 ? (l += 1, l + o > h && (l = 0, c += 1)) : c += 1;
    }
    this._map.set(t, [l, c, o, r]);
  }
  componentDidMount() {
    this.loadNext(), u(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), u(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: o, dragging: r } = this.state, a = this._map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          o ? /* @__PURE__ */ f(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * o[0] / i}%`, top: n * o[1], width: `${100 * o[2] / i}%`, height: n * o[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: p, title: m } = l, [g, _, v, y] = d === r && o ? o : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              Uh,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: n * _,
                width: `${100 * v / i}%`,
                height: n * y,
                content: p,
                title: m,
                onMenuBtnClick: h ? this._handleMenuClick : void 0
              },
              l.id
            );
          })
        ]
      }
    ) });
  }
};
Ua.defaultProps = {
  responsive: !1,
  cache: !0,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", data: { type: "refresh" } }] },
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
class ja extends F {
}
ja.NAME = "Dashboard";
ja.Component = Ua;
var jt, qt;
class Jo extends H {
  constructor(e) {
    super(e);
    R(this, jt, void 0);
    R(this, qt, void 0);
    W(this, jt, 0), W(this, qt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, o = n.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (N(this, jt) && cancelAnimationFrame(N(this, jt)), W(this, jt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), W(this, jt, 0);
      })), n.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.stopPropagation();
    }, this._handleClick = (n) => {
      const i = n.currentTarget;
      if (!i)
        return;
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, c = (r === "horz" ? n.clientX - o.left : n.clientY - o.top) - this.barSize / 2;
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
    const { clientSize: e, scrollSize: n, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(e * e / n), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (W(this, qt, typeof e == "string" ? document : e.current), N(this, qt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), N(this, qt) && N(this, qt).removeEventListener("wheel", this._handleWheel);
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
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: c,
      right: d
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...r
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, p) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, p) * (e - _.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: $("scrollbar", o, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": m
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
jt = new WeakMap(), qt = new WeakMap();
const nn = /* @__PURE__ */ new Map(), on = [];
function qa(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && nn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  nn.set(e, s), t != null && t.buildIn && !on.includes(e) && on.push(e);
}
function Ot(s, t) {
  qa(s, t);
  const e = (n) => {
    if (!n)
      return s;
    const { defaultOptions: i, ...o } = s;
    return {
      ...o,
      defaultOptions: { ...i, ...n }
    };
  };
  return e.plugin = s, e;
}
function Ya(s) {
  return nn.delete(s);
}
function jh(s) {
  if (typeof s == "string") {
    const t = nn.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function Ga(s, t, e) {
  return t.forEach((n) => {
    var o;
    if (!n)
      return;
    const i = jh(n);
    i && (e.has(i.name) || ((o = i.plugins) != null && o.length && Ga(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function qh(s = [], t = !0) {
  return t && on.length && s.unshift(...on), s != null && s.length ? Ga([], s, /* @__PURE__ */ new Set()) : [];
}
function Ka() {
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
function Yh(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function Qo(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function Fn(s, t = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const n = s.width - s.totalWidth;
    if (!t && n > 0 || t && n !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[n < 0 ? "max" : "min"](n, Math.ceil(n * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let e = 0;
  s.list.forEach((n) => {
    n.realWidth || (n.realWidth = n.width), n.left = e, e += n.realWidth;
  });
}
function Gh(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (w) => (typeof w == "function" && (w = w.call(s)), w = Qo(w, 0), w < 1 && (w = Math.round(w * n)), w), d = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, h = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(a)
  }, p = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, m = [], g = {};
  let _ = !1;
  const v = [], y = {};
  if (e.forEach((w) => {
    const { colTypes: b, onAddCol: C } = w;
    b && Object.entries(b).forEach(([x, E]) => {
      y[x] || (y[x] = []), y[x].push(E);
    }), C && v.push(C);
  }), t.cols.forEach((w) => {
    if (w.hidden)
      return;
    const { type: b = "", name: C } = w, x = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...w,
      type: b
    }, E = {
      name: C,
      type: b,
      setting: x,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, I = y[b];
    I && I.forEach((B) => {
      const nt = typeof B == "function" ? B.call(s, x) : B;
      nt && Object.assign(x, nt, w);
    });
    const { fixed: P, flex: D, minWidth: S = o, maxWidth: A = r } = x, z = Qo(x.width || i, i);
    E.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, E.width = Yh(z < 1 ? Math.round(z * n) : z, S, A), v.forEach((B) => B.call(s, E)), m.push(E), g[E.name] = E;
    const M = P ? P === "left" ? h : p : d;
    M.list.push(E), M.totalWidth += E.width, M.width = M.totalWidth, E.flex && M.flexList.push(E), typeof x.order == "number" && (_ = !0);
  }), _) {
    const w = (b, C) => (b.setting.order ?? 0) - (C.setting.order ?? 0);
    m.sort(w), h.list.sort(w), d.list.sort(w), p.list.sort(w);
  }
  return Fn(h, !0), Fn(p, !0), d.widthSetting = n - h.width - p.width, Fn(d), {
    list: m,
    map: g,
    left: h,
    center: d,
    right: p
  };
}
function Kh({ col: s, className: t, height: e, row: n, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: c, left: d, top: h, ...p }) {
  var z;
  const m = {
    left: d ?? s.left,
    top: h ?? n.top,
    width: c ?? s.realWidth,
    height: e,
    ...r
  }, { align: g, border: _ } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...o
  }, y = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], w = ["dtable-cell-content", s.setting.cellClass], b = (z = n.data) == null ? void 0 : z[s.name], C = [a ?? b ?? ""], x = i ? i(C, { row: n, col: s, value: b }, kt) : C, E = [], I = [], P = {}, D = {};
  let S = "div";
  x == null || x.forEach((M) => {
    if (typeof M == "object" && M && !et(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const B = M.outer ? E : I;
      M.html ? B.push(/* @__PURE__ */ f("div", { className: $("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? m : v, M.style), M.className && (M.outer ? y : w).push(M.className), M.children && B.push(M.children), M.attrs && Object.assign(M.outer ? P : D, M.attrs)), M.tagName && !M.outer && (S = M.tagName);
    } else
      I.push(M);
  });
  const A = S;
  return /* @__PURE__ */ f(
    "div",
    {
      className: $(y),
      style: m,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...p,
      ...P,
      children: [
        I.length > 0 && /* @__PURE__ */ f(A, { className: $(w), style: v, ...D, children: I }),
        E
      ]
    }
  );
}
function zn({
  rows: s = [],
  cols: t,
  rowHeight: e,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: d = Kh,
  onRenderCell: h
}) {
  var _;
  const p = Array.isArray(s) ? s : [s], m = ((_ = p[0]) == null ? void 0 : _.top) ?? 0, g = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: $("dtable-cells", c),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: p.reduce((v, y, w) => {
        const b = t.length;
        return t.forEach((C, x) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: $(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  x ? "" : "is-first-in-row",
                  x === b - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === g - 1 ? "is-last-row" : ""
                ),
                col: C,
                row: y,
                top: y.top - m,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${C.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function Xa({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: d,
  onRenderCell: h,
  children: p
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ f(
    zn,
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
  o.list.length && (g = /* @__PURE__ */ f(
    zn,
    {
      rows: n,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: o.list,
      left: i.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: h
    },
    "center"
  ));
  let _ = null;
  return r.list.length && (_ = /* @__PURE__ */ f(
    zn,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: e,
      onRenderCell: h
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: $("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        m,
        g,
        _,
        p
      ]
    }
  );
}
var mo = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, T = (s, t, e) => (mo(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, j = (s, t, e, n) => (mo(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), at = (s, t, e) => (mo(s, t, "access private method"), e), Ce, Ye, he, At, ne, tt, St, Tt, Ge, Os, rn, ns, Ft, Ke, Xe, gi, Za, _i, Ja, yi, Qa, vi, tl, Bs, wi, Mn, an, bi, Ci, xi, ki, Ze, Fs, go, el, _o, sl, $i, nl;
let yo = class extends H {
  constructor(t) {
    super(t), L(this, gi), L(this, _i), L(this, yi), L(this, vi), L(this, Bs), L(this, Ze), L(this, go), L(this, _o), L(this, $i), this.ref = V(), L(this, Ce, 0), L(this, Ye, void 0), L(this, he, !1), L(this, At, void 0), L(this, ne, void 0), L(this, tt, []), L(this, St, void 0), L(this, Tt, /* @__PURE__ */ new Map()), L(this, Ge, {}), L(this, Os, void 0), L(this, rn, []), L(this, ns, { in: !1 }), this.updateLayout = () => {
      T(this, Ce) && cancelAnimationFrame(T(this, Ce)), j(this, Ce, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), j(this, Ce, 0);
      }));
    }, L(this, Ft, (e, n) => {
      n = n || e.type;
      const i = T(this, Tt).get(n);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Ke, (e) => {
      T(this, Ft).call(this, e, `window_${e.type}`);
    }), L(this, Xe, (e) => {
      T(this, Ft).call(this, e, `document_${e.type}`);
    }), L(this, Mn, (e, n, i) => {
      const { row: o, col: r } = n;
      n.value = this.getCellValue(o, r), e[0] = n.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return T(this, tt).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), r.setting[a] && (e = r.setting[a].call(this, e, n, i)), e;
    }), L(this, an, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, bi, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: o, cellElement: r } = n;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: o, element: r }), T(this, tt).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: o, element: r });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: o, rowID: i, rowInfo: d, element: r })) === !0)
            return;
          for (const h of T(this, tt))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: o, rowID: i, rowInfo: d, element: r })) === !0)
              return;
        }
      }
    }), L(this, Ci, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), L(this, xi, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return at(this, Ze, Fs).call(this, !1);
      at(this, Ze, Fs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), L(this, ki, () => {
      at(this, Ze, Fs).call(this, !1);
    }), j(this, Ye, t.id ?? `dtable-${ua(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, j(this, ne, Object.freeze(qh(t.plugins))), T(this, ne).forEach((e) => {
      var r;
      const { methods: n, data: i, state: o } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(T(this, Ge), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = e.onCreate) == null || r.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, St)) == null ? void 0 : t.options) || T(this, At) || Ka();
  }
  get plugins() {
    return T(this, tt);
  }
  get layout() {
    return T(this, St);
  }
  get id() {
    return T(this, Ye);
  }
  get data() {
    return T(this, Ge);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, ns);
  }
  componentWillReceiveProps() {
    j(this, At, void 0);
  }
  componentDidMount() {
    T(this, he) ? this.forceUpdate() : at(this, Bs, wi).call(this), T(this, tt).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", T(this, bi)), this.on("keydown", T(this, Ci));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", T(this, xi)), this.on("mouseleave", T(this, ki))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), j(this, Os, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    T(this, tt).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    T(this, he) ? at(this, Bs, wi).call(this) : T(this, tt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, Os)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of T(this, Tt).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), T(this, Ke)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), T(this, Xe)) : t.removeEventListener(n, T(this, Ft));
    T(this, tt).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), T(this, ne).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), j(this, Ge, {}), T(this, Tt).clear();
  }
  on(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = T(this, Tt).get(t);
    i ? i.push(e) : (T(this, Tt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, Ke)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, Xe)) : (o = this.element) == null || o.addEventListener(t, T(this, Ft)));
  }
  off(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = T(this, Tt).get(t);
    if (!i)
      return;
    const o = i.indexOf(e);
    o >= 0 && i.splice(o, 1), i.length || (T(this, Tt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, Ke)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, Xe)) : (r = this.element) == null || r.removeEventListener(t, T(this, Ft)));
  }
  emitCustomEvent(t, e) {
    T(this, Ft).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: p } = t;
    if (d === "up" || d === "down")
      p = i + (d === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      p = 0;
    else if (d === "bottom")
      p = o - r;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (h = i + _);
    }
    const m = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (m.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, o - r)), p !== i && (m.scrollTop = p)), Object.keys(m).length ? (this.setState(m, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, m), e == null || e.call(this, !0);
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
    return typeof t == "number" ? e[t] : n[t] || i.find((o) => o.id === t);
  }
  getCellValue(t, e) {
    var a;
    const n = typeof t == "object" ? t : this.getRowInfo(t);
    if (!n)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let o = n.id === "HEADER" ? i.setting.title : (a = n.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: r } = this.options;
    return r && (o = r.call(this, n, i, o)), o;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!T(this, At))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      j(this, St, void 0);
    else if (n === "options") {
      if (j(this, At, void 0), !T(this, St))
        return;
      j(this, St, void 0);
    }
    this.setState(i ?? ((o) => ({ renderCount: o.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = u(e).closest(".dtable-cell");
    if (!n.length)
      return;
    const i = n.attr("data-row"), o = n.attr("data-col");
    if (!(typeof o != "string" || typeof i != "string"))
      return {
        cellElement: n[0],
        colName: o,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, n) {
    return G(T(this, rn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = at(this, $i, nl).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l, beforeRender: c } = this.options, d = {}, h = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": o,
      "dtable-bordered": r,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      if (h.push(t.className), c) {
        const m = c.call(this, t);
        m && (t = m);
      }
      T(this, tt).forEach((m) => {
        var _;
        const g = (_ = m.beforeRender) == null ? void 0 : _.call(this, t);
        g && (t = g);
      }), d.width = t.width, d.height = t.height, d["--dtable-row-height"] = `${t.rowHeight}px`, h.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), p.push(
        at(this, gi, Za).call(this, t),
        at(this, _i, Ja).call(this, t),
        at(this, yi, Qa).call(this, t)
      ), t.scrollable && p.push(at(this, vi, tl).call(this, t)), T(this, tt).forEach((m) => {
        var _;
        const g = (_ = m.onRender) == null ? void 0 : _.call(this, t);
        g && (g.style && Object.assign(d, g.style), g.className && h.push(g.className), g.children && p.push(g.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: T(this, Ye),
        className: $(h),
        style: d,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
Ce = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakMap();
rn = /* @__PURE__ */ new WeakMap();
ns = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakSet();
Za = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: o } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      Xa,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: T(this, Mn),
        children: o
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Or,
    {
      className: "dtable-header",
      style: { height: n },
      renders: r,
      generateArgs: [s],
      generatorThis: this,
      children: o
    },
    "header"
  );
};
_i = /* @__PURE__ */ new WeakSet();
Ja = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    Xa,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: T(this, Mn),
      children: l
    },
    "body"
  );
};
yi = /* @__PURE__ */ new WeakSet();
Qa = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Or,
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
vi = /* @__PURE__ */ new WeakSet();
tl = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: p } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ f(
      Jo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: o,
        clientSize: i,
        onScroll: T(this, an),
        left: n,
        bottom: (p === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      Jo,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: T(this, an),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Bs = /* @__PURE__ */ new WeakSet();
wi = function() {
  var s;
  j(this, he, !1), (s = this.options.afterRender) == null || s.call(this), T(this, tt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Mn = /* @__PURE__ */ new WeakMap();
an = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakSet();
Fs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const o = T(this, ns);
  i.in !== o.in && n.toggleClass("dtable-hover", i.in), i.row !== o.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== o.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), j(this, ns, i);
};
go = /* @__PURE__ */ new WeakSet();
el = function() {
  if (T(this, At))
    return !1;
  const t = { ...Ka(), ...T(this, ne).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return j(this, At, t), j(this, tt, T(this, ne).reduce((e, n) => {
    const { when: i, options: o } = n;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), e.push(n)), e;
  }, [])), j(this, rn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
_o = /* @__PURE__ */ new WeakSet();
sl = function() {
  var P, D;
  const { plugins: s } = this;
  let t = T(this, At);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((S) => {
    var z;
    const A = (z = S.beforeLayout) == null ? void 0 : z.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(e, S.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: S } = this;
    if (S)
      i = S.clientWidth;
    else {
      j(this, he, !0);
      return;
    }
  }
  const o = Gh(this, t, s, i), { data: r, rowKey: a = "id", rowHeight: l } = t, c = [], d = (S, A, z) => {
    var B, nt;
    const M = { data: z ?? { [a]: S }, id: S, index: c.length, top: 0 };
    if (z || (M.lazy = !0), c.push(M), ((B = t.onAddRow) == null ? void 0 : B.call(this, M, A)) !== !1) {
      for (const ft of s)
        if (((nt = ft.onAddRow) == null ? void 0 : nt.call(this, M, A)) === !1)
          return;
    }
  };
  if (typeof r == "number")
    for (let S = 0; S < r; S++)
      d(`${S}`, S);
  else
    Array.isArray(r) && r.forEach((S, A) => {
      typeof S == "object" ? d(`${S[a] ?? ""}`, A, S) : d(`${S ?? ""}`, A);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const S = t.onAddRows.call(this, h);
    S && (h = S);
  }
  for (const S of s) {
    const A = (P = S.onAddRows) == null ? void 0 : P.call(this, h);
    A && (h = A);
  }
  h.forEach((S, A) => {
    p[S.id] = S, S.index = A, S.top = S.index * l;
  });
  const { header: m, footer: g } = t, _ = m ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let y = t.height, w = 0;
  const b = h.length * l, C = _ + v + b;
  if (typeof y == "function" && (y = y.call(this, C)), y === "auto")
    w = C;
  else if (typeof y == "object")
    w = Math.min(y.max, Math.max(y.min, C));
  else if (y === "100%") {
    const { parent: S } = this;
    if (S)
      w = S.clientHeight;
    else {
      w = 0, j(this, he, !0);
      return;
    }
  } else
    w = y;
  const x = w - _ - v, E = {
    options: t,
    allRows: c,
    width: i,
    height: w,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: x,
    rowsHeightTotal: b,
    header: m,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: o
  }, I = (D = t.onLayout) == null ? void 0 : D.call(this, E);
  I && Object.assign(E, I), s.forEach((S) => {
    if (S.onLayout) {
      const A = S.onLayout.call(this, E);
      A && Object.assign(E, A);
    }
  }), j(this, St, E);
};
$i = /* @__PURE__ */ new WeakSet();
nl = function() {
  (at(this, go, el).call(this) || !T(this, St)) && at(this, _o, sl).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = s, l = Math.min(Math.max(0, i - o), this.state.scrollTop), c = Math.floor(l / a), d = l + o, h = Math.min(r.length, Math.ceil(d / a)), p = [], { rowDataGetter: m } = this.options;
  for (let g = c; g < h; g++) {
    const _ = r[g];
    _.lazy && m && (_.data = m([_.id])[0], _.lazy = !1), p.push(_);
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
yo.addPlugin = qa;
yo.removePlugin = Ya;
class il extends H {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: o, width: r, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: $("progress", l), style: {
      width: r,
      height: o,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
il.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function ol(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...o } = s, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ f("a", { href: X(i, t.row.data), ...n, ...o, ...a, children: e });
}
function vo(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : X(s, e);
}
function rl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), J(e, s, n ?? e))) : n ?? e;
}
function al(s, t) {
  const { link: e } = t.col.setting, n = ol(e, t, s[0]);
  return n && (s[0] = n), s;
}
function ll(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = vo(e, t, s[0])), s;
}
function cl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function hl(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = rl(n, t, s[0], i), s;
}
function Ei(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], o = n === !0 ? i : vo(n, t, i);
  return s[0] = {
    html: o
  }, s;
}
const Xh = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Ei(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: o = 6, barWidth: r = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          il,
          {
            className: "rounded-full",
            width: r,
            height: o,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          oo,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: d,
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
    const { formatDate: e, html: n, hint: i } = t.col.setting;
    if (e && (s = hl(s, t, e)), s = cl(s, t), s = ll(s, t), n ? s = Ei(s, t) : s = al(s, t), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = X(i, t.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, Zh = Ot(Xh, { buildIn: !0 }), Jh = {
  html: { component: ps }
}, Qh = {
  name: "custom",
  onRenderCell(s, t) {
    const { col: e } = t;
    let { custom: n } = e.setting;
    if (typeof n == "function" && (n = n.call(this, t)), !n)
      return s;
    const i = Array.isArray(n) ? n : [n], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: ps,
        props: { html: X(r, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Jh[l], o == null ? void 0 : o[l]);
      const d = {};
      c.forEach((p) => {
        if (p) {
          const { props: m } = p;
          m && u.extend(d, typeof m == "function" ? m.call(this, t) : m), l = p.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), s;
  }
}, td = Ot(Qh);
function ed(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (c, d) => {
    const h = o ? o.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !dl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    r(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    r(c, t ?? !n[c]);
  })), Object.keys(i).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    c && Object.keys(c).forEach((d) => {
      c[d] ? n[d] = !0 : delete n[d];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function sd(s) {
  return this.state.checkedRows[s] ?? !1;
}
function dl() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (e.call(this, r.id) ? 1 : 0), 0)) : t === s;
}
function nd() {
  return Object.keys(this.state.checkedRows);
}
function id(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function tr(s, t, e = !1) {
  return /* @__PURE__ */ f(yn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const er = 'input[type="checkbox"],.dtable-checkbox', od = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: tr
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
    toggleCheckRows: ed,
    isRowChecked: sd,
    isAllRowChecked: dl,
    getChecks: nd,
    toggleCheckable: id
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: tr(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: t, col: e }) {
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, o = i ? i.call(this, n) : !0;
    if (!o)
      return s;
    const { checkbox: r } = e.setting, a = typeof r == "function" ? r.call(this, n) : r, l = this.isRowChecked(n);
    if (a) {
      const d = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, o === "disabled");
      s.push(
        d,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var r;
    const { id: n } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, n) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, n);
      s.push(l, { outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(er);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(er).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, rd = Ot(od);
var ul = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(ul || {});
function ln(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = ln.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ln.call(this, t.parent).level + 1 : 0, t;
}
function ad(s) {
  return s !== void 0 ? ln.call(this, s) : this.data.nestedMap;
}
function ld(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !fl.call(this)), t) {
      const i = n.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (e[o] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[i[0]]), i.forEach((o) => {
      const r = n.get(o);
      t && (r != null && r.children) ? e[o] = !0 : delete e[o];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...e } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function fl() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function pl(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const o of e) {
    const r = s.get(o);
    r && (r.level === n && (r.order = t++), (i = r.children) != null && i.length && (t = pl(s, t, r.children, n + 1)));
  }
  return t;
}
function ml(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    n[o] = e, ml(s, o, e, n);
  }), i;
}
function gl(s, t, e, n, i) {
  var a;
  const o = s.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), o.parent && gl(s, o.parent, e, n, i);
}
const cd = {
  name: "nested",
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
      return Object.entries(t).forEach(([i, o]) => {
        const r = ml(this, i, o, n);
        r != null && r.parent && gl(this, r.parent, o, n, e);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((t) => t.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: ad,
    toggleRow: ld,
    isAllCollapsed: fl,
    getNestedRowInfo: ln
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, o;
    const { nestedMap: t } = this.data, e = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), n = t.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = e === "0" ? void 0 : e, (o = s.data) != null && o[this.options.asParentKey ?? "asParent"] && (n.children = []), t.set(s.id, n), e) {
      let r = t.get(e);
      r || (r = {
        state: "",
        level: 0
      }, t.set(e, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), pl(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), o = (n.order ?? 0) - (i.order ?? 0);
      return o === 0 ? t.index - e.index : o;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: o } = t.setting, r = this.getNestedRowInfo(n);
    if (o && (r.children || r.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, n, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, hd = Ot(cd);
function Vn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: $(o, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[r] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(ji, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, m = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...m, children: [
      s[0],
      /* @__PURE__ */ f("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ f("span", { children: d })
    ] }));
  return s;
}
const dd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Vn
    },
    avatarBtn: {
      onRenderCell: Vn
    },
    avatarName: {
      onRenderCell: Vn
    }
  }
}, ud = Ot(dd, { buildIn: !0 }), fd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, o = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = e.setting;
      if (r) {
        const a = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, e, a, i)), typeof r == "string" && (r = { url: r });
        const { url: l, ...c } = r;
        s[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: X(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          o
        ] });
      } else
        s.push(o);
    }
    return s;
  }
}, pd = Ot(fd, { buildIn: !0 }), Un = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, md = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Un(t.left.list), Un(t.center.list), Un(t.right.list);
  }
}, gd = Ot(md), _d = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: n } = this.data, { rows: i, cols: o, rowHeight: r } = s;
    e.clear(), n.clear();
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((p, m) => {
        const { index: g } = p, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const v = t.call(this, { row: c, col: p });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - m), w = Math.min(v.rowSpan || 1, i.length - d);
        if (y <= 1 && w <= 1)
          return;
        let b = 0;
        for (let C = 0; C < y; C++) {
          b += l[m + C].realWidth;
          for (let x = 0; x < w; x++) {
            const E = `C${g + C}R${h + x}`;
            E !== _ && n.add(E);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: w,
          width: b,
          height: r * w
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((d) => {
        a(o[d].list, l, c);
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
}, yd = Ot(_d), vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ul,
  avatar: ud,
  cellspan: yd,
  checkable: rd,
  custom: td,
  group: gd,
  nested: hd,
  renderDatetime: rl,
  renderDatetimeCell: hl,
  renderFormat: vo,
  renderFormatCell: ll,
  renderHtmlCell: Ei,
  renderLink: ol,
  renderLinkCell: al,
  renderMapCell: cl,
  rich: Zh,
  sortType: pd
}, Symbol.toStringTag, { value: "Module" }));
class ws extends F {
}
ws.NAME = "DTable";
ws.Component = yo;
ws.definePlugin = Ot;
ws.removePlugin = Ya;
ws.plugins = vd;
var _l = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, sr = (s, t, e) => (_l(s, t, "read from private field"), e ? e.call(s) : t.get(s)), wd = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, nr = (s, t, e, n) => (_l(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), xe;
const bd = "nav", zs = '[data-toggle="tab"]', Cd = "active";
class yl extends rt {
  constructor() {
    super(...arguments), wd(this, xe, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(zs);
    let i = t ? u(t).closest(zs) : n.filter(`.${Cd}`);
    if (!i.length && (i = e.find(zs).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = i.data("name") || o, a = u(o);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [r]), this.emit("show", r), sr(this, xe) && clearTimeout(sr(this, xe)), nr(this, xe, setTimeout(() => {
      a.addClass("in").trigger("shown", [r]), this.emit("shown", r), nr(this, xe, 0);
    }, 10)));
  }
}
xe = /* @__PURE__ */ new WeakMap();
yl.NAME = "Tabs";
u(document).on("click.tabs.zui", zs, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${bd}`);
  e.length && yl.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  kr as Ajax,
  fa as Avatar,
  pa as BtnGroup,
  ya as ColorPicker,
  rt as Component,
  F as ComponentFromReact,
  po as ContextMenu,
  Dt as CustomContent,
  Or as CustomRender,
  ws as DTable,
  ja as Dashboard,
  Ta as DatePicker,
  Ma as DatetimePicker,
  ro as Draggable,
  yt as Dropdown,
  ha as EventBus,
  vt as HElement,
  ps as HtmlContent,
  K as Icon,
  zr as List,
  Ur as Menu,
  Rd as Messager,
  Ih as Modal,
  pe as ModalBase,
  mi as ModalTrigger,
  ca as Moveable,
  Da as Nav,
  Vr as NestedList,
  Pa as Pager,
  La as Pick,
  Ha as Picker,
  lt as Popover,
  Gi as PopoverPanel,
  Oa as Popovers,
  la as ProgressCircle,
  H as ReactComponent,
  Ba as SearchBox,
  jr as SearchMenu,
  Hd as Sortable,
  es as TIME_DAY,
  yl as Tabs,
  Ea as TimePicker,
  Fa as Toolbar,
  It as Tooltip,
  za as Tree,
  fo as Upload,
  Va as UploadImgs,
  vh as addDate,
  u as cash,
  $ as classes,
  ze as componentsMap,
  hc as convertBytes,
  gc as create,
  U as createDate,
  Sc as createPortal,
  V as createRef,
  lc as deepGet,
  ac as deepGetPath,
  kd as defineFn,
  qs as delay,
  _c as disableScroll,
  $d as dom,
  Oi as fetchData,
  cc as formatBytes,
  J as formatDate,
  jd as formatDateSpan,
  X as formatString,
  $r as getClassList,
  Ys as getComponent,
  kt as h,
  Ed as hh,
  xc as htm,
  G as i18n,
  ys as isSameDay,
  va as isSameMonth,
  Fd as isSameWeek,
  ei as isSameYear,
  zd as isToday,
  Ud as isTomorrow,
  et as isValidElement,
  Vd as isYesterday,
  jo as nativeEvents,
  Xs as render,
  Br as renderCustomContent,
  $c as renderCustomResult,
  mc as shareData,
  Ve as store,
  Er as storeData,
  Tr as takeData
};
//# sourceMappingURL=zui.js.map
