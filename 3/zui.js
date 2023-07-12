var yr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (yr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, O = (e, t, n, s) => (yr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var Lt = (e, t, n) => (yr(e, t, "access private method"), n);
const jt = document, hi = window, El = jt.documentElement, Ie = jt.createElement.bind(jt), Nl = Ie("div"), vr = Ie("table"), $d = Ie("tbody"), Wa = Ie("tr"), { isArray: Ji, prototype: Al } = Array, { concat: kd, filter: Ro, indexOf: Rl, map: Pl, push: Sd, slice: Ll, some: Po, splice: Md } = Al, Td = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ed = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Nd = /<.+>/, Ad = /^\w+$/;
function Lo(e, t) {
  const n = Rd(t);
  return !e || !n && !Ae(t) && !Y(t) ? [] : !n && Ed.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Ad.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Zi {
  constructor(t, n) {
    if (!t)
      return;
    if (Ir(t))
      return t;
    let s = t;
    if (st(t)) {
      const i = n || jt;
      if (s = Td.test(t) && Ae(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Nd.test(t) ? Wl(t) : Ir(i) ? i.find(t) : st(i) ? m(i).find(t) : Lo(t, i), !s)
        return;
    } else if (We(t))
      return this.ready(t);
    (s.nodeType || s === hi) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Zi(t, n);
  }
}
const x = Zi.prototype, m = x.init;
m.fn = m.prototype = x;
x.length = 0;
x.splice = Md;
typeof Symbol == "function" && (x[Symbol.iterator] = Al[Symbol.iterator]);
function Ir(e) {
  return e instanceof Zi;
}
function fn(e) {
  return !!e && e === e.window;
}
function Ae(e) {
  return !!e && e.nodeType === 9;
}
function Rd(e) {
  return !!e && e.nodeType === 11;
}
function Y(e) {
  return !!e && e.nodeType === 1;
}
function Pd(e) {
  return !!e && e.nodeType === 3;
}
function Ld(e) {
  return typeof e == "boolean";
}
function We(e) {
  return typeof e == "function";
}
function st(e) {
  return typeof e == "string";
}
function ct(e) {
  return e === void 0;
}
function Kn(e) {
  return e === null;
}
function Dl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Do(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = fn;
m.isFunction = We;
m.isArray = Ji;
m.isNumeric = Dl;
m.isPlainObject = Do;
function J(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Do(e)) {
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
m.each = J;
x.each = function(e) {
  return J(this, e);
};
x.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function di(...e) {
  const t = Ld(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return di(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Ji(r[o]) || Do(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), di(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = di;
x.extend = function(e) {
  return di(x, e);
};
const Dd = /\S+/g;
function Qi(e) {
  return st(e) ? e.match(Dd) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = Qi(e), s = !ct(t);
  return this.each((i, r) => {
    Y(r) && J(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(e) {
  return this.toggleClass(e, !0);
};
x.removeAttr = function(e) {
  const t = Qi(e);
  return this.each((n, s) => {
    Y(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Id(e, t) {
  if (e) {
    if (st(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Kn(n) ? void 0 : n;
      }
      return ct(t) ? this : Kn(t) ? this.removeAttr(e) : this.each((n, s) => {
        Y(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = Id;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Po.call(this, (t) => Y(t) && t.classList.contains(e));
};
x.get = function(e) {
  return ct(e) ? Ll.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function Wd(e) {
  return ct(e) ? this.get().map((t) => Y(t) || Pd(t) ? t.textContent : "").join("") : this.each((t, n) => {
    Y(n) && (n.textContent = e);
  });
}
x.text = Wd;
function Xt(e, t, n) {
  if (!Y(e))
    return;
  const s = hi.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function Nt(e, t) {
  return parseInt(Xt(e, t), 10) || 0;
}
function Oa(e, t) {
  return Nt(e, `border${t ? "Left" : "Top"}Width`) + Nt(e, `padding${t ? "Left" : "Top"}`) + Nt(e, `padding${t ? "Right" : "Bottom"}`) + Nt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const wr = {};
function Od(e) {
  if (wr[e])
    return wr[e];
  const t = Ie(e);
  jt.body.insertBefore(t, null);
  const n = Xt(t, "display");
  return jt.body.removeChild(t), wr[e] = n !== "none" ? n : "block";
}
function Ha(e) {
  return Xt(e, "display") === "none";
}
function Il(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function tr(e) {
  return st(e) ? (t, n) => Il(n, e) : We(e) ? e : Ir(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = tr(e);
  return m(Ro.call(this, (n, s) => t.call(n, s, n)));
};
function me(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return me(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Hd = /^\s*<(\w+)[^>]*>/, Bd = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ba = {
  "*": Nl,
  tr: $d,
  td: Wa,
  th: Wa,
  thead: vr,
  tbody: vr,
  tfoot: vr
};
function Wl(e) {
  if (!st(e))
    return [];
  if (Bd.test(e))
    return [Ie(RegExp.$1)];
  const t = Hd.test(e) && RegExp.$1, n = Ba[t] || Ba["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Wl;
x.has = function(e) {
  const t = st(e) ? (n, s) => Lo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = tr(e);
  return this.filter((n, s) => (!st(e) || Y(s)) && !t.call(s, n, s));
};
function Qt(e, t, n, s) {
  const i = [], r = We(t), o = s && tr(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Sd.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ol(e) {
  return e.multiple && e.options ? Qt(Ro.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function zd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || Gl.test(n.type)) {
      const i = Ji(e) ? Pl.call(e, String) : Kn(e) ? [] : [String(e)];
      s ? J(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ct(e) || Kn(e) ? "" : e;
  }) : this[0] && Ol(this[0]);
}
x.val = zd;
x.is = function(e) {
  const t = tr(e);
  return Po.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Pt(e) {
  return e.length > 1 ? Ro.call(e, (t, n, s) => Rl.call(s, t) === n) : e;
}
m.unique = Pt;
x.add = function(e, t) {
  return m(Pt(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return me(m(Pt(Qt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return me(m(Pt(Qt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return Rl.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return me(m(Pt(Qt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(Pt(Qt(this, (t) => Lo(e, t))));
};
const Fd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Vd = /^$|^module$|\/(java|ecma)script/i, Ud = ["type", "src", "nonce", "noModule"];
function qd(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Vd.test(i.type) && El.contains(i)) {
      const r = Ie("script");
      r.text = i.textContent.replace(Fd, ""), J(Ud, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Gd(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && qd(t, e.ownerDocument);
}
function ge(e, t, n, s, i, r, o, a) {
  return J(e, (l, h) => {
    J(m(h), (c, d) => {
      J(m(t), (u, p) => {
        const g = n ? d : p, y = n ? p : d, w = n ? c : u;
        Gd(g, w ? y.cloneNode(!0) : y, s, i, !w);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return ge(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ge(arguments, this, !1, !1, !0);
};
function Yd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ct(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    Y(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = Yd;
x.appendTo = function(e) {
  return ge(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return ge(arguments, this, !1, !0);
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
  return ge(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return ge(arguments, this, !0, !0);
};
x.prepend = function() {
  return ge(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return ge(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(Pt(Qt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return me(m(Pt(Qt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return me(m(Pt(Qt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return me(m(Pt(Qt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(kd.apply([], Pl.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Xt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || El;
  });
};
x.slice = function(e, t) {
  return m(Ll.call(this, e, t));
};
const Kd = /-([a-z])/g;
function Io(e) {
  return e.replace(Kd, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return jt.readyState !== "loading" ? t() : jt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + hi.pageYOffset,
    left: t.left + hi.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Xt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Xt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && Y(i)) {
      const r = m(i).offset();
      n.top -= r.top + Nt(i, "borderTopWidth"), n.left -= r.left + Nt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - Nt(e, "marginTop"),
    left: n.left - Nt(e, "marginLeft")
  };
};
const Hl = {
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
    if (st(e))
      return e = Hl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Hl[e] || e];
  });
};
const jd = /^--/;
function Wo(e) {
  return jd.test(e);
}
const _r = {}, { style: Xd } = Nl, Jd = ["webkit", "moz", "ms"];
function Zd(e, t = Wo(e)) {
  if (t)
    return e;
  if (!_r[e]) {
    const n = Io(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Jd.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in Xd)
        return _r[e] = o, !1;
    });
  }
  return _r[e];
}
const Qd = {
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
function Bl(e, t, n = Wo(e)) {
  return !n && !Qd[e] && Dl(t) ? `${t}px` : t;
}
function tu(e, t) {
  if (st(e)) {
    const n = Wo(e);
    return e = Zd(e, n), arguments.length < 2 ? this[0] && Xt(this[0], e, n) : e ? (t = Bl(e, t, n), this.each((s, i) => {
      Y(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = tu;
function zl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const eu = /^\s+|\s+$/;
function za(e, t) {
  const n = e.dataset[t] || e.dataset[Io(t)];
  return eu.test(n) ? n : zl(JSON.parse, n);
}
function nu(e, t, n) {
  n = zl(JSON.stringify, n), e.dataset[Io(t)] = n;
}
function su(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = za(this[0], s);
    return n;
  }
  if (st(e))
    return arguments.length < 2 ? this[0] && za(this[0], e) : ct(t) ? this : this.each((n, s) => {
      nu(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = su;
function Fl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
J([!0, !1], (e, t) => {
  J(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return fn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ae(this[0]) ? Fl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Nt(this[0], `margin${n ? "Top" : "Left"}`) + Nt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return ct(s) ? void 0 : this;
    if (!arguments.length)
      return fn(this[0]) ? this[0].document.documentElement[`client${t}`] : Ae(this[0]) ? Fl(this[0], t) : this[0].getBoundingClientRect()[n] - Oa(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = Xt(o, "boxSizing");
      o.style[n] = Bl(n, i + (a === "border-box" ? Oa(o, !e) : 0));
    });
  };
});
const Fa = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!Y(n))
      return;
    const s = Ha(n);
    (ct(e) ? s : e) ? (n.style.display = n[Fa] || "", Ha(n) && (n.style.display = Od(n.tagName))) : s || (n[Fa] = Xt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Va = "___ce", Oo = ".", Ho = { focus: "focusin", blur: "focusout" }, Vl = { mouseenter: "mouseover", mouseleave: "mouseout" }, iu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Bo(e) {
  return Vl[e] || Ho[e] || e;
}
function zo(e) {
  const t = e.split(Oo);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (st(e)) {
    const [s, i] = zo(e), r = Bo(s);
    if (!r)
      return this;
    const o = iu.test(r) ? "MouseEvents" : "HTMLEvents";
    e = jt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(Oo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Ho;
  return this.each((s, i) => {
    n && We(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Ul(e) {
  return e[Va] = e[Va] || {};
}
function ru(e, t, n, s, i) {
  const r = Ul(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function ql(e, t) {
  return !t || !Po.call(t, (n) => e.indexOf(n) < 0);
}
function ui(e, t, n, s, i) {
  const r = Ul(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !ql(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      ui(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (ct(e))
    this.each((s, i) => {
      !Y(i) && !Ae(i) && !fn(i) || ui(i);
    });
  else if (st(e))
    We(t) && (n = t, t = ""), J(Qi(e), (s, i) => {
      const [r, o] = zo(i), a = Bo(r);
      this.each((l, h) => {
        !Y(h) && !Ae(h) && !fn(h) || ui(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return me(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function ou(e, t, n, s, i) {
  if (!st(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return st(t) || (ct(t) || Kn(t) ? t = "" : ct(n) ? (n = t, t = "") : (s = n, n = t, t = "")), We(s) || (s = n, n = void 0), s ? (J(Qi(e), (r, o) => {
    const [a, l] = zo(o), h = Bo(a), c = a in Vl, d = a in Ho;
    h && this.each((u, p) => {
      if (!Y(p) && !Ae(p) && !fn(p))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !ql(l, y.namespace.split(Oo)) || !t && (d && (y.target !== p || y.___ot === h) || c && y.relatedTarget && p.contains(y.relatedTarget)))
          return;
        let w = p;
        if (t) {
          let _ = y.target;
          for (; !Il(_, t); )
            if (_ === p || (_ = _.parentNode, !_))
              return;
          w = _;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const v = s.call(w, y, y.___td);
        i && ui(p, h, l, t, g), v === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || m.guid++, ru(p, h, l, t, g);
    });
  }), this) : this;
}
x.on = ou;
function au(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = au;
const lu = /\r?\n/g;
function cu(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(lu, `\r
`))}`;
}
const hu = /file|reset|submit|button|image/i, Gl = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    J(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || hu.test(i.type) || Gl.test(i.type) && !i.checked)
        return;
      const r = Ol(i);
      if (!ct(r)) {
        const o = Ji(r) ? r : [r];
        J(o, (a, l) => {
          e += cu(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function du(e, t) {
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
function uu(e, t, n) {
  try {
    const s = du(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function it(e, ...t) {
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
var Fo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Fo || {});
function fu(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Fo[n]).toFixed(t) + n);
}
const pu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Fo[s];
};
let Vo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), re;
function mu() {
  return Vo;
}
function gu(e) {
  Vo = e.toLowerCase();
}
function Yl(e, t) {
  re || (re = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, re, e);
}
function tt(e, t, n, s, i, r) {
  Array.isArray(e) ? re && e.unshift(re) : e = re ? [re, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Vo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === re ? `${r}.${t}` : t;
    if (a = uu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? it(a, ...Array.isArray(n) ? n : [n]) : a;
}
function yu(e, t, n, s) {
  return tt(void 0, e, t, n, s);
}
tt.addLang = Yl;
tt.getLang = yu;
tt.getCode = mu;
tt.setCode = gu;
Yl({
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
function Kl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Kl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...e) => Kl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = M;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...t)) : i.addClass(M(e, ...t));
  });
};
const bn = /* @__PURE__ */ new WeakMap();
function jl(e, t, n) {
  const s = bn.has(e), i = s ? bn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), bn.set(e, i)) : bn.delete(e);
}
function vu(e, t) {
  let n = bn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? vu(this[0], t) : this.each((s, i) => jl(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => jl(n, e));
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
const fi = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), br = /* @__PURE__ */ new Map();
function wu(e, t, n) {
  const { zui: s } = window;
  br.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && br.set(r.toLowerCase(), s[r]);
  });
  const i = br.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
m(() => {
  m("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, wu(n, this, t);
  });
});
function Uo(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = n.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: w, clientWidth: v } = document.documentElement;
    s = { left: 0, top: 0, width: y || v, height: g || w };
  }
  const { left: l, top: h, width: c, height: d } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= h && i + o <= c && r + a <= d;
  const u = i <= c && i + o >= l;
  return r <= d && r + a >= h && u;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    Uo(n, e);
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
  s.find("script").each((i, r) => {
    qo(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    qo(n, e);
  });
};
function Xl(e, t) {
  const n = m(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && Uo(o, { viewport: o.getBoundingClientRect() }) || o.scrollIntoView(i);
  }), n;
}
m.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    Xl(n, e);
  });
};
const Ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Uo,
  runJS: qo,
  scrollIntoView: Xl
}, Symbol.toStringTag, { value: "Module" }));
var er, F, Jl, Q, Ce, Ua, Zl, Wr, pi = {}, Ql = [], _u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Go = Array.isArray;
function he(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function tc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function j(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? er.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Fs(e, o, s, i, null);
}
function Fs(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Jl };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function K() {
  return { current: null };
}
function mn(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function jn(e, t) {
  if (t == null)
    return e.__ ? jn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? jn(e) : null;
}
function ec(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ec(e);
  }
}
function qa(e) {
  (!e.__d && (e.__d = !0) && Ce.push(e) && !mi.__r++ || Ua !== F.debounceRendering) && ((Ua = F.debounceRendering) || Zl)(mi);
}
function mi() {
  var e, t, n, s, i, r, o, a;
  for (Ce.sort(Wr); e = Ce.shift(); )
    e.__d && (t = Ce.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = he({}, r)).__v = r.__v + 1, Yo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? jn(r), r.__h), oc(s, r), r.__e != o && ec(r)), Ce.length > t && Ce.sort(Wr));
  mi.__r = 0;
}
function nc(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, p, g, y, w, v = s && s.__k || Ql, _ = v.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Fs(null, p, null, null, p) : Go(p) ? Fs(mn, { children: p }, null, null, null) : p.__b > 0 ? Fs(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
      if (p.__ = n, p.__b = n.__b + 1, (u = v[c]) === null || u && p.key == u.key && p.type === u.type)
        v[c] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((u = v[d]) && p.key == u.key && p.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Yo(e, p, u = u || pi, i, r, o, a, l, h), g = p.__e, (d = p.ref) && u.ref != d && (w || (w = []), u.ref && w.push(u.ref, null, p), w.push(d, p.__c || g, p)), g != null ? (y == null && (y = g), typeof p.type == "function" && p.__k === u.__k ? p.__d = l = sc(p, l, e) : l = ic(e, p, u, v, g, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = jn(u));
    }
  for (n.__e = y, c = _; c--; )
    v[c] != null && (typeof n.type == "function" && v[c].__e != null && v[c].__e == n.__d && (n.__d = rc(s).nextSibling), lc(v[c], v[c]));
  if (w)
    for (c = 0; c < w.length; c++)
      ac(w[c], w[++c], w[++c]);
}
function sc(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? sc(s, t, n) : ic(n, s, s, i, s.__e, t));
  return t;
}
function ic(e, t, n, s, i, r) {
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
function rc(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = rc(n)))
        return s;
  }
  return null;
}
function bu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || gi(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || gi(e, r, t[r], n[r], s);
}
function Ga(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || _u.test(t) ? n : n + "px";
}
function gi(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Ga(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Ga(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? Ka : Ya, r) : e.removeEventListener(t, r ? Ka : Ya, r);
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
function Ya(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Ka(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Yo(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, p, g, y, w, v, _, b, T, $, E, A, P = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = F.__b) && h(t);
  try {
    t:
      if (typeof P == "function") {
        if (w = t.props, v = (h = P.contextType) && s[h.__c], _ = h ? v ? v.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? t.__c = c = new P(w, _) : (t.__c = c = new z(w, _), c.constructor = P, c.render = xu), v && v.sub(c), c.props = w, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = he({}, c.__s)), he(c.__s, P.getDerivedStateFromProps(w, c.__s))), u = c.props, p = c.state, c.__v = t, d)
          P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && w !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = w, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), b = 0; b < c._sb.length; b++)
              c.__h.push(c._sb[b]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, p, g);
          });
        }
        if (c.context = _, c.props = w, c.__P = e, T = F.__r, $ = 0, "prototype" in P && P.prototype.render) {
          for (c.state = c.__s, c.__d = !1, T && T(t), h = c.render(c.props, c.state, c.context), E = 0; E < c._sb.length; E++)
            c.__h.push(c._sb[E]);
          c._sb = [];
        } else
          do
            c.__d = !1, T && T(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++$ < 25);
        c.state = c.__s, c.getChildContext != null && (s = he(he({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (g = c.getSnapshotBeforeUpdate(u, p)), nc(e, Go(A = h != null && h.type === mn && h.key == null ? h.props.children : h) ? A : [A], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Cu(n.__e, t, n, s, i, r, o, l);
    (h = F.diffed) && h(t);
  } catch (H) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), F.__e(H, t, n);
  }
}
function oc(e, t) {
  F.__c && F.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      F.__e(s, n.__v);
    }
  });
}
function Cu(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, p = t.type, g = 0;
  if (p === "svg" && (i = !0), r != null) {
    for (; g < r.length; g++)
      if ((l = r[g]) && "setAttribute" in l == !!p && (p ? l.localName === p : l.nodeType === 3)) {
        e = l, r[g] = null;
        break;
      }
  }
  if (e == null) {
    if (p === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, u.is && u), r = null, a = !1;
  }
  if (p === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && er.call(e.childNodes), h = (d = n.props || pi).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, g = 0; g < e.attributes.length; g++)
          d[e.attributes[g].name] = e.attributes[g].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (bu(e, u, d, i, a), c)
      t.__k = [];
    else if (nc(e, Go(g = t.props.children) ? g : [g], t, n, s, i && p !== "foreignObject", r, o, r ? r[0] : n.__k && jn(n, 0), a), r != null)
      for (g = r.length; g--; )
        r[g] != null && tc(r[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || p === "progress" && !g || p === "option" && g !== d.value) && gi(e, "value", g, d.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && gi(e, "checked", g, d.checked, !1));
  }
  return e;
}
function ac(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    F.__e(s, n);
  }
}
function lc(e, t, n) {
  var s, i;
  if (F.unmount && F.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || ac(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && lc(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || tc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function xu(e, t, n) {
  return this.constructor(e, n);
}
function Xn(e, t, n) {
  var s, i, r;
  F.__ && F.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Yo(t, e = (!s && n || t).__k = j(mn, null, [e]), i || pi, pi, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? er.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), oc(r, e);
}
er = Ql.slice, F = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Jl = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof e == "function" && (e = e(he({}, n), this.props)), e && he(n, e), e != null && this.__v && (t && this._sb.push(t), qa(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), qa(this));
}, z.prototype.render = mn, Ce = [], Zl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, mi.__r = 0;
var cc = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, cc(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, ja = /* @__PURE__ */ new Map();
function $u(e) {
  var t = ja.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ja.set(this, t)), (t = cc(this, t.get(e) || (t.set(e, t = function(n) {
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
const Rp = $u.bind(j);
function hc(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return j(t, { ref: o, class: M(n), style: s, ...a, ...r }, i);
}
var ku = 0;
function f(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ku, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(h), h;
}
var ns;
class Ko extends z {
  constructor() {
    super(...arguments);
    L(this, ns, K());
  }
  componentDidMount() {
    this.props.executeScript && m(C(this, ns).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ f(hc, { forwardRef: C(this, ns), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
ns = new WeakMap();
function Su(e) {
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
  } = e, d = [n], u = { ...s }, p = [], g = [];
  return i.forEach((y) => {
    const w = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        w.push(...l.call(o, y, p, ...r));
      else {
        const v = y.call(o, p, ...r);
        v && (Array.isArray(v) ? w.push(...v) : w.push(v));
      }
    else
      w.push(y);
    w.forEach((v) => {
      v != null && (typeof v == "object" && !Q(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? p.push(
        /* @__PURE__ */ f("div", { className: M(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(u, v.style), v.className && d.push(v.className), v.children && p.push(v.children), v.attrs && Object.assign(c, v.attrs)) : p.push(v));
    });
  }), g.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: M(d),
    style: u,
    ...c
  }, p];
}
function jo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Su(t);
  return j(e, n, ...s);
}
function dc(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => dc(s, t, n)) : Q(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ f(Ko, { ...e }) : /* @__PURE__ */ f(hc, { ...e }) : e;
}
function bs(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = dc(t, n, s);
  return i == null || typeof i == "boolean" ? null : Q(i) ? i : /* @__PURE__ */ f(mn, { children: i });
}
const Xa = (e) => e.startsWith("icon-") ? e : `icon-${e}`;
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Q(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(Xa(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Xa(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ f("i", { className: M(i), ...s });
}
function Mu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Tu(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Xn(null, t._temp), t._temp = null, t._container = null;
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
  }), Xn(
    j(Mu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Eu(e, t) {
  const n = j(Tu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var uc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Be = (e, t, n) => (uc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ns = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ze = (e, t, n, s) => (uc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ve, Cn, Vs, Us;
const fc = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    Ns(this, ve, void 0), Ns(this, Cn, void 0), Ns(this, Vs, void 0), Ns(this, Us, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (ze(this, Vs, a), ze(this, Cn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), ze(this, ve, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      ze(this, Us, !0), this.emit("inited", this.options), this.afterInit();
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
    return Be(this, Us);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Be(this, Cn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Be(this, ve);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Be(this, Vs);
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
    ze(this, ve, void 0), ze(this, Cn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Be(this, ve), e), Be(this, ve);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(e);
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
    return tt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? tt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
let mt = fc;
ve = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
mt.DEFAULT = {};
mt.NAME = fc.name;
mt.MULTI_INSTANCE = !1;
class q extends mt {
  constructor() {
    super(...arguments), this.ref = K();
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
    Xn(
      j(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Nu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return j(e, {
    className: M(t),
    style: s,
    ...i
  }, n);
}
function pc({
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
  hint: p,
  checked: g,
  onClick: y,
  ...w
}) {
  const v = [
    typeof g == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(nt, { icon: h }),
    /* @__PURE__ */ f("span", { className: "text", children: c }),
    /* @__PURE__ */ f(bs, { content: i }),
    s,
    /* @__PURE__ */ f(nt, { icon: u })
  ];
  return j(t, {
    className: M(n, { disabled: a, active: l }),
    title: p,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...w,
    ...r
  }, ...v);
}
function Au({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  content: r,
  style: o,
  onClick: a
}) {
  return j(e, {
    className: M(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ f(bs, { content: r }), i);
}
function Ru({
  component: e = "div",
  className: t,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return j(e, {
    className: M(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Pu({ type: e, ...t }) {
  return /* @__PURE__ */ f(jo, { ...t });
}
function mc({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return j(e, {
    className: M(t),
    style: i,
    ...r
  }, /* @__PURE__ */ f(bs, { content: s }), n);
}
const Or = class extends z {
  constructor() {
    super(...arguments), this.ref = K();
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
    const e = { ...this.props };
    typeof e.items == "function" && (e.items = e.items(this)), e.items || (e.items = []);
    const t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
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
        const g = i[t.type || "item"];
        if (g)
          return /* @__PURE__ */ f(g, { ...s });
      } else if (typeof i == "function") {
        const g = i.call(this, s, j);
        if (Q(g))
          return g;
        typeof g == "object" && Object.assign(s, g);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const p = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Or.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(p, {
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
    return /* @__PURE__ */ f(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ f(e, { ...n }),
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
    } = e, p = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(p, { class: M(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Oe = Or;
Oe.ItemComponents = {
  divider: Nu,
  item: pc,
  heading: Au,
  space: Ru,
  custom: Pu,
  basic: mc
};
Oe.ROOT_TAG = "menu";
Oe.NAME = "action-menu";
class gc extends q {
}
gc.NAME = "ActionMenu";
gc.Component = Oe;
function Lu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ f(pc, { ...s });
}
var yc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, yt = (e, t, n) => (yc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Cr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Du = (e, t, n, s) => (yc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), qs, It, xn;
let nr = class extends Oe {
  constructor(t) {
    super(t), Cr(this, qs, /* @__PURE__ */ new Set()), Cr(this, It, void 0), Cr(this, xn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Du(this, It, t.nestedShow === void 0), yt(this, It) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = M(a.className, "no-nested-items")), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: d, itemRenderProps: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: yt(this, It) ? this.state.nestedShow : i,
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
    return /* @__PURE__ */ f(s, { ...i, "data-level": i.level });
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
    yt(this, qs).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: yt(this, xn).bind(this, r, !0),
        onMouseLeave: yt(this, xn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        yt(this, xn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = yt(this, It) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!yt(this, It))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...yt(this, qs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    yt(this, It) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    yt(this, It) && this.setState({ nestedShow: !1 });
  }
};
qs = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakMap();
nr.ItemComponents = {
  item: Lu
};
class vc extends q {
}
vc.NAME = "ActionMenuNested";
vc.Component = nr;
let ue = class extends nr {
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
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
ue.NAME = "menu";
class wc extends q {
}
wc.NAME = "Menu";
wc.Component = ue;
class et extends z {
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
      loadingText: p,
      icon: g,
      text: y,
      trailingIcon: w,
      caret: v,
      square: _,
      rounded: b = !0,
      hint: T,
      ...$
    } = this.props, E = t || (a ? "a" : "button"), A = y == null || typeof y == "string" && !y.length || d && !p, P = v && A && !g && !w && !o && !d;
    return j(
      E,
      {
        className: M("btn", n, r, {
          "btn-caret": P,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !P && !o && A : _
        }, i ? `size-${i}` : "", typeof b == "string" ? b : { rounded: b }),
        title: T,
        [E === "a" ? "href" : "data-url"]: a,
        [E === "a" ? "target" : "data-target"]: l,
        type: E === "button" ? s : void 0,
        ...$
      },
      d ? /* @__PURE__ */ f(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(nt, { icon: g }),
      A ? null : /* @__PURE__ */ f("span", { className: "text", children: d ? p : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ f(nt, { icon: w }),
      d ? null : v ? /* @__PURE__ */ f("span", { className: typeof v == "string" ? `caret-${v}` : "caret" }) : null
    );
  }
}
function Iu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(et, { type: n, ...s });
}
function Cs(e) {
  return e.split("-")[1];
}
function Xo(e) {
  return e === "y" ? "height" : "width";
}
function Se(e) {
  return e.split("-")[0];
}
function xs(e) {
  return ["top", "bottom"].includes(Se(e)) ? "x" : "y";
}
function Ja(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = xs(t), l = Xo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Se(t)) {
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
  switch (Cs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Wu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Ja(h, s, l), u = s, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y], { x: _, y: b, data: T, reset: $ } = await v({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [w]: { ...p[w], ...T } }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : $.rects), { x: c, y: d } = Ja(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function $s(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _c(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function yi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function bc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = $s(t, e), g = _c(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], w = yi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), v = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, T = yi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: _, strategy: l }) : v);
  return { top: (w.top - T.top + g.top) / b.y, bottom: (T.bottom - w.bottom + g.bottom) / b.y, left: (w.left - T.left + g.left) / b.x, right: (T.right - w.right + g.right) / b.x };
}
const Hr = Math.min, Ou = Math.max;
function Br(e, t, n) {
  return Ou(e, Hr(t, n));
}
const zr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = $s(e, t) || {};
  if (l == null)
    return {};
  const c = _c(h), d = { x: n, y: s }, u = xs(i), p = Xo(u), g = await o.getDimensions(l), y = u === "y", w = y ? "top" : "left", v = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", b = r.reference[p] + r.reference[u] - d[u] - r.floating[p], T = d[u] - r.reference[u], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let E = $ ? $[_] : 0;
  E && await (o.isElement == null ? void 0 : o.isElement($)) || (E = a.floating[_] || r.floating[p]);
  const A = b / 2 - T / 2, P = E / 2 - g[p] / 2 - 1, H = Hr(c[w], P), k = Hr(c[v], P), R = H, D = E - g[p] - k, S = E / 2 - g[p] / 2 + A, I = Br(R, S, D), W = Cs(i) != null && S != I && r.reference[p] / 2 - (S < R ? H : k) - g[p] / 2 < 0 ? S < R ? R - S : D - S : 0;
  return { [u]: d[u] - W, data: { [u]: I, centerOffset: S - I + W } };
} }), Hu = ["top", "right", "bottom", "left"];
Hu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Bu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bu[t]);
}
function zu(e, t, n) {
  n === void 0 && (n = !1);
  const s = Cs(e), i = xs(e), r = Xo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = vi(o)), { main: o, cross: vi(o) };
}
const Fu = { start: "end", end: "start" };
function xr(e) {
  return e.replace(/start|end/g, (t) => Fu[t]);
}
const sr = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = $s(e, t), w = Se(s), v = Se(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (v || !g ? [vi(o)] : function(R) {
      const D = vi(R);
      return [xr(R), D, xr(D)];
    }(o));
    d || p === "none" || b.push(...function(R, D, S, I) {
      const W = Cs(R);
      let V = function(ot, gn, Ts) {
        const yn = ["left", "right"], Es = ["right", "left"], gr = ["top", "bottom"], xd = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Ts ? gn ? Es : yn : gn ? yn : Es;
          case "left":
          case "right":
            return gn ? gr : xd;
          default:
            return [];
        }
      }(Se(R), S === "start", I);
      return W && (V = V.map((ot) => ot + "-" + W), D && (V = V.concat(V.map(xr)))), V;
    }(o, g, p, _));
    const T = [o, ...b], $ = await bc(t, y), E = [];
    let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push($[w]), c) {
      const { main: R, cross: D } = zu(s, r, _);
      E.push($[R], $[D]);
    }
    if (A = [...A, { placement: s, overflows: E }], !E.every((R) => R <= 0)) {
      var P, H;
      const R = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, D = T[R];
      if (D)
        return { data: { index: R, overflows: A }, reset: { placement: D } };
      let S = (H = A.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!S)
        switch (u) {
          case "bestFit": {
            var k;
            const I = (k = A.map((W) => [W.placement, W.overflows.filter((V) => V > 0).reduce((V, ot) => V + ot, 0)]).sort((W, V) => W[1] - V[1])[0]) == null ? void 0 : k[0];
            I && (S = I);
            break;
          }
          case "initialPlacement":
            S = o;
        }
      if (s !== S)
        return { reset: { placement: S } };
    }
    return {};
  } };
}, ir = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Se(a), u = Cs(a), p = xs(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, w = $s(o, r);
      let { mainAxis: v, crossAxis: _, alignmentAxis: b } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: v * g } : { x: v * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Vu(e) {
  return e === "x" ? "y" : "x";
}
const wi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (w) => {
      let { x: v, y: _ } = w;
      return { x: v, y: _ };
    } }, ...l } = $s(e, t), h = { x: n, y: s }, c = await bc(t, l), d = xs(Se(i)), u = Vu(d);
    let p = h[d], g = h[u];
    if (r) {
      const w = d === "y" ? "bottom" : "right";
      p = Br(p + c[d === "y" ? "top" : "left"], p, p - c[w]);
    }
    if (o) {
      const w = u === "y" ? "bottom" : "right";
      g = Br(g + c[u === "y" ? "top" : "left"], g, g - c[w]);
    }
    const y = a.fn({ ...t, [d]: p, [u]: g });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function ut(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bt(e) {
  return ut(e).getComputedStyle(e);
}
function Cc(e) {
  return e instanceof ut(e).Node;
}
function fe(e) {
  return Cc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xt(e) {
  return e instanceof ut(e).HTMLElement;
}
function qt(e) {
  return e instanceof ut(e).Element;
}
function Za(e) {
  return typeof ShadowRoot < "u" && (e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot);
}
function Jn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Uu(e) {
  return ["table", "td", "th"].includes(fe(e));
}
function Fr(e) {
  const t = Jo(), n = bt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Jo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function rr(e) {
  return ["html", "body", "#document"].includes(fe(e));
}
const Vr = Math.min, Ze = Math.max, _i = Math.round, As = Math.floor, Re = (e) => ({ x: e, y: e });
function xc(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = xt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = _i(n) !== r || _i(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function Zo(e) {
  return qt(e) ? e : e.contextElement;
}
function Qe(e) {
  const t = Zo(e);
  if (!xt(t))
    return Re(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = xc(t);
  let o = (r ? _i(n.width) : n.width) / s, a = (r ? _i(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const Qa = Re(0);
function $c(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Jo())
    return Qa;
  const r = e ? ut(e) : window;
  return !n || t && n !== r ? Qa : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Pe(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Zo(e);
  let o = Re(1);
  t && (s ? qt(s) && (o = Qe(s)) : o = Qe(e));
  const a = $c(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = ut(r), p = s && qt(s) ? ut(s) : s;
    let g = u.frameElement;
    for (; g && s && p !== u; ) {
      const y = Qe(g), w = g.getBoundingClientRect(), v = getComputedStyle(g), _ = w.left + (g.clientLeft + parseFloat(v.paddingLeft)) * y.x, b = w.top + (g.clientTop + parseFloat(v.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += b, g = ut(g).frameElement;
    }
  }
  return yi({ width: c, height: d, x: l, y: h });
}
function Gt(e) {
  return ((Cc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function or(e) {
  return qt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function kc(e) {
  return Pe(Gt(e)).left + or(e).scrollLeft;
}
function pn(e) {
  if (fe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Za(e) && e.host || Gt(e);
  return Za(t) ? t.host : t;
}
function Sc(e) {
  const t = pn(e);
  return rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xt(t) && Jn(t) ? t : Sc(t);
}
function bi(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Sc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ut(s);
  return i ? t.concat(r, r.visualViewport || [], Jn(s) ? s : []) : t.concat(s, bi(s));
}
function tl(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = ut(i), a = Gt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const p = Jo();
        (!p || p && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Gt(i), o = or(i), a = i.ownerDocument.body, l = Ze(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Ze(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + kc(i);
      const d = -o.scrollTop;
      return bt(a).direction === "rtl" && (c += Ze(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Gt(e));
  else if (qt(t))
    s = function(i, r) {
      const o = Pe(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = xt(i) ? Qe(i) : Re(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = $c(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return yi(s);
}
function Mc(e, t) {
  const n = pn(e);
  return !(n === t || !qt(n) || rr(n)) && (bt(n).position === "fixed" || Mc(n, t));
}
function el(e, t) {
  return xt(e) && bt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function nl(e, t) {
  const n = ut(e);
  if (!xt(e))
    return n;
  let s = el(e, t);
  for (; s && Uu(s) && bt(s).position === "static"; )
    s = el(s, t);
  return s && (fe(s) === "html" || fe(s) === "body" && bt(s).position === "static" && !Fr(s)) ? n : s || function(i) {
    let r = pn(i);
    for (; xt(r) && !rr(r); ) {
      if (Fr(r))
        return r;
      r = pn(r);
    }
    return null;
  }(e) || n;
}
function qu(e, t, n) {
  const s = xt(t), i = Gt(t), r = n === "fixed", o = Pe(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Re(0);
  if (s || !s && !r)
    if ((fe(t) !== "body" || Jn(i)) && (a = or(t)), xt(t)) {
      const h = Pe(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = kc(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Gu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = bi(h).filter((w) => qt(w) && fe(w) !== "body"), p = null;
    const g = bt(h).position === "fixed";
    let y = g ? pn(h) : h;
    for (; qt(y) && !rr(y); ) {
      const w = bt(y), v = Fr(y);
      v || w.position !== "fixed" || (p = null), (g ? !v && !p : !v && w.position === "static" && p && ["absolute", "fixed"].includes(p.position) || Jn(y) && !v && Mc(h, y)) ? u = u.filter((_) => _ !== y) : p = w, y = pn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = tl(t, c, i);
    return h.top = Ze(d.top, h.top), h.right = Vr(d.right, h.right), h.bottom = Vr(d.bottom, h.bottom), h.left = Ze(d.left, h.left), h;
  }, tl(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = xt(n), r = Gt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Re(1);
  const l = Re(0);
  if ((i || !i && s !== "fixed") && ((fe(n) !== "body" || Jn(r)) && (o = or(n)), xt(n))) {
    const h = Pe(n);
    a = Qe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: qt, getDimensions: function(e) {
  return xc(e);
}, getOffsetParent: nl, getDocumentElement: Gt, getScale: Qe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || nl, r = this.getDimensions;
  return { reference: qu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => bt(e).direction === "rtl" };
function Qo(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Zo(e), c = i || r ? [...h ? bi(h) : [], ...bi(t)] : [];
  c.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: !0 }), r && w.addEventListener("resize", n);
  });
  const d = h && a ? function(w, v) {
    let _, b = null;
    const T = Gt(w);
    function $() {
      clearTimeout(_), b && b.disconnect(), b = null;
    }
    return function E(A, P) {
      A === void 0 && (A = !1), P === void 0 && (P = 1), $();
      const { left: H, top: k, width: R, height: D } = w.getBoundingClientRect();
      if (A || v(), !R || !D)
        return;
      const S = { rootMargin: -As(k) + "px " + -As(T.clientWidth - (H + R)) + "px " + -As(T.clientHeight - (k + D)) + "px " + -As(H) + "px", threshold: Ze(0, Vr(1, P)) || 1 };
      let I = !0;
      function W(V) {
        const ot = V[0].intersectionRatio;
        if (ot !== P) {
          if (!I)
            return E();
          ot ? E(!1, ot) : _ = setTimeout(() => {
            E(!1, 1e-7);
          }, 100);
        }
        I = !1;
      }
      try {
        b = new IntersectionObserver(W, { ...S, root: T.ownerDocument });
      } catch {
        b = new IntersectionObserver(W, S);
      }
      b.observe(w);
    }(!0), $;
  }(h, n) : null;
  let u, p = -1, g = null;
  o && (g = new ResizeObserver((w) => {
    let [v] = w;
    v && v.target === h && g && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), h && !l && g.observe(h), g.observe(t));
  let y = l ? Pe(e) : null;
  return l && function w() {
    const v = Pe(e);
    !y || v.x === y.x && v.y === y.y && v.width === y.width && v.height === y.height || n(), y = v, u = requestAnimationFrame(w);
  }(), n(), () => {
    c.forEach((w) => {
      i && w.removeEventListener("scroll", n), r && w.removeEventListener("resize", n);
    }), d && d(), g && g.disconnect(), g = null, l && cancelAnimationFrame(u);
  };
}
const ar = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Gu, ...n }, r = { ...i.platform, _c: s };
  return Wu(e, t, { ...i, platform: r });
};
var Tc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, sl = (e, t, n) => (Tc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Yu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ku = (e, t, n, s) => (Tc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), $n;
let Ec = class extends ue {
  constructor() {
    super(...arguments), Yu(this, $n, 0);
  }
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  layout() {
    const t = this.ref.current, n = t == null ? void 0 : t.parentElement;
    !t || !n || ar(n, t, {
      placement: "right-start",
      middleware: [sr(), wi(), ir(1)]
    }).then(({ x: s, y: i }) => {
      m(t).css({
        left: s,
        top: i
      });
    });
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t);
    return {
      ...n,
      className: M("absolute", n.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), Ku(this, $n, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), sl(this, $n) && clearTimeout(sl(this, $n));
  }
};
$n = /* @__PURE__ */ new WeakMap();
Ec.defaultProps = {
  ...ue.defaultProps,
  popup: !0
};
var ta = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Dt = (e, t, n) => (ta(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Rs = (e, t, n, s) => (ta(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), il = (e, t, n) => (ta(e, t, "access private method"), n), se, kn, Gs, Ys, Ur, Nc, qr, Ac;
const $r = "show", ju = '[data-toggle="contextmenu"]';
class rt extends mt {
  constructor() {
    super(...arguments), Fe(this, Ur), Fe(this, qr), Fe(this, se, void 0), Fe(this, kn, void 0), Fe(this, Gs, void 0), Fe(this, Ys, void 0);
  }
  get isShown() {
    return Dt(this, se) && m(Dt(this, se)).hasClass($r);
  }
  get menu() {
    return Dt(this, se) || this.ensureMenu();
  }
  get trigger() {
    return Dt(this, Gs) || this.element;
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
    return this.isShown || (Rs(this, Gs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass($r), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Dt(this, Ys)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Dt(this, se)).removeClass($r), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Dt(this, se)) == null || t.remove();
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
      s && s.addClass("popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), Rs(this, se, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(sr())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    Rs(this, Ys, Qo(n, s, () => {
      ar(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        if (m(s).css({ left: i, top: r }), o.arrow && this.arrowEl) {
          const l = a.split("-")[0], h = il(this, Ur, Nc).call(this, l), { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...il(this, qr, Ac).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Xn(j(Ec, t), this.menu), !0);
  }
  getPopperElement() {
    return Dt(this, kn) || Rs(this, kn, {
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
    }), Dt(this, kn);
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
se = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
Ur = /* @__PURE__ */ new WeakSet();
Nc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
qr = /* @__PURE__ */ new WeakSet();
Ac = function(e) {
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
rt.MENU_CLASS = "contextmenu";
rt.NAME = "ContextMenu";
rt.MULTI_INSTANCE = !0;
rt.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${rt.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${rt.MENU_CLASS}`).length)
    return;
  const n = t.closest(ju).not(":disabled,.disabled");
  if (n.length) {
    const s = `${rt.KEY}:options`, i = n.data(s), r = rt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${rt.NAMESPACE}`, rt.clear.bind(rt));
var ea = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sn = (e, t, n) => (ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Gr = (e, t, n, s) => (ea(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Xu = (e, t, n) => (ea(e, t, "access private method"), n), Fn, Mn, Ci, Yr, Rc;
const rl = '[data-toggle="dropdown"]', Pc = class extends rt {
  constructor() {
    super(...arguments), Ps(this, Yr), Ps(this, Fn, !1), Ps(this, Mn, 0), this.hideLater = () => {
      Sn(this, Ci).call(this), Gr(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, Ps(this, Ci, () => {
      clearTimeout(Sn(this, Mn)), Gr(this, Mn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Pc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Sn(this, Fn) && this.isHover && Xu(this, Yr, Rc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Sn(this, Fn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(ir(t)), (s = e.middleware) == null || s.push(zr({ element: this.arrowEl }))), e;
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
let Yt = Pc;
Fn = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakSet();
Rc = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Sn(this, Ci)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Gr(this, Fn, !0);
};
Yt.MENU_CLASS = "dropdown-menu";
Yt.NAME = "Dropdown";
Yt.DEFAULT = {
  ...rt.DEFAULT,
  trigger: "click"
};
const Ls = `${Yt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(rl).not(":disabled,.disabled");
  if (!t.length) {
    Yt.clear({ event: e });
    return;
  }
  const n = t.data(Ls), s = Yt.ensure(t, n);
  n || t.data(Ls, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(rl);
  if (!t.length)
    return;
  const n = t.data(Ls), s = Yt.ensure(t, n);
  n || t.data(Ls, s.options), s.isHover && s.show();
});
let Ds = 0;
window.addEventListener("scroll", (e) => {
  Ds && clearTimeout(Ds), Ds = window.setTimeout(() => {
    Yt.clear({ event: e }), Ds = 0;
  }, 50);
}, !0);
var ss, sn;
class Ju extends z {
  constructor(n) {
    var s;
    super(n);
    L(this, ss, void 0);
    L(this, sn, K());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, sn);
  }
  get triggerElement() {
    return C(this, sn).current;
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
    }), O(this, ss, Yt.ensure(this.triggerElement, {
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
    (n = C(this, ss)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, sn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ f("div", { ...s, children: n });
  }
}
ss = new WeakMap(), sn = new WeakMap();
class Zu extends Ju {
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
    return s.caret = i, /* @__PURE__ */ f(et, { ...s });
  }
}
function Lc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(Zu, { type: n, ...s });
}
let Dc = class extends z {
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
    return /* @__PURE__ */ f(et, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, j);
      if (Q(l))
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
      ...p
    } = t;
    return /* @__PURE__ */ f(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...p,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Qu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(Dc, { type: n, ...s });
}
let pt = class extends Oe {
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
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ f(t, { ...a });
  }
};
pt.ItemComponents = {
  item: Iu,
  dropdown: Lc,
  "btn-group": Qu
};
pt.ROOT_TAG = "nav";
pt.NAME = "toolbar";
pt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function tf({
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
  a === !0 ? d = /* @__PURE__ */ f(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Q(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ f(et, { ...a, onClick: l }));
  const u = Q(n) ? n : n ? /* @__PURE__ */ f(pt, { ...n }) : null;
  return /* @__PURE__ */ f("div", { className: M("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ f(nt, { icon: h, className: "alert-icon" }),
    Q(i) ? i : /* @__PURE__ */ f("div", { className: M("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function ef(e) {
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
function nf({
  margin: e,
  type: t,
  placement: n,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    tf,
    {
      className: M("messager", r, t, s === !0 ? ef(n) : s, i ? "in" : ""),
      ...a
    }
  );
}
var sf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, rf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vn = (e, t, n) => (sf(e, t, "access private method"), n), we, qe;
class na extends q {
  constructor() {
    super(...arguments), rf(this, we), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), vn(this, we, qe).call(this, () => {
      this._show = !0, this.render(), vn(this, we, qe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && vn(this, we, qe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && vn(this, we, qe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), vn(this, we, qe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
we = /* @__PURE__ */ new WeakSet();
qe = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
na.NAME = "MessagerItem";
na.Component = nf;
var sa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Me = (e, t, n) => (sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Is = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ks = (e, t, n, s) => (sa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ic = (e, t, n) => (sa(e, t, "access private method"), n), tn, Vt, Kr, Wc, ia, Oc;
const Hc = class extends mt {
  constructor() {
    super(...arguments), Is(this, Kr), Is(this, ia), Is(this, tn, void 0), Is(this, Vt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Me(this, Vt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Ic(this, Kr, Wc).call(this).show();
  }
  hide() {
    var e;
    (e = Me(this, Vt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Hc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Bc = Hc;
tn = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakSet();
Wc = function() {
  if (Me(this, Vt))
    Me(this, Vt).setOptions(this.options);
  else {
    const e = Ic(this, ia, Oc).call(this), t = new na(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Ks(this, tn, void 0), Ks(this, Vt, void 0);
    }), Ks(this, Vt, t);
  }
  return Me(this, Vt);
};
ia = /* @__PURE__ */ new WeakSet();
Oc = function() {
  if (Me(this, tn))
    return Me(this, tn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ks(this, tn, n[0])), n[0];
};
Bc.NAME = "messager";
Bc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let zc = class extends z {
  render(t) {
    const { percent: n = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: h, textY: c } = t, d = s / 2;
    let { circleWidth: u = 0.2 } = t;
    u < 1 && (u = s * u);
    const p = (s - u) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ f("circle", { cx: d, cy: d, r: p, "stroke-width": u, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: d, cy: d, r: p, "stroke-width": u, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * p * 2, "stroke-dashoffset": Math.PI * p * 2 * (100 - n) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: h ?? d, y: c ?? d + u / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${p}px` }, children: o === !0 ? Math.round(n) : o }) : null
    ] });
  }
};
zc.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Fc extends q {
}
Fc.NAME = "ProgressCircle";
Fc.Component = zc;
var Ft;
class of {
  constructor(t = "") {
    L(this, Ft, void 0);
    typeof t == "object" ? O(this, Ft, t) : O(this, Ft, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    C(this, Ft).addEventListener(t, n, s);
  }
  once(t, n, s) {
    C(this, Ft).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    C(this, Ft).removeEventListener(t, n, s);
  }
  emit(t) {
    return C(this, Ft).dispatchEvent(t), t;
  }
}
Ft = new WeakMap();
const ol = /* @__PURE__ */ new Set([
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
class Vc extends of {
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
    return typeof t == "string" && (ol.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Vc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ol.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Uc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var is, oe, Tt, rn, on, js;
const Ia = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, on);
    L(this, is, void 0);
    L(this, oe, void 0);
    L(this, Tt, void 0);
    L(this, rn, void 0);
    O(this, is, n), O(this, oe, `ZUI_STORE:${t ?? Uc()}`), O(this, Tt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, is);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, rn) || O(this, rn, new Ia(C(this, oe), "session")), C(this, rn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, Tt).getItem(Lt(this, on, js).call(this, t));
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
    C(this, Tt).setItem(Lt(this, on, js).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, Tt).removeItem(Lt(this, on, js).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < C(this, Tt).length; n++) {
      const s = C(this, Tt).key(n);
      if (s != null && s.startsWith(C(this, oe))) {
        const i = C(this, Tt).getItem(s);
        typeof i == "string" && t(s.substring(C(this, oe).length + 1), JSON.parse(i));
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
let xi = Ia;
is = new WeakMap(), oe = new WeakMap(), Tt = new WeakMap(), rn = new WeakMap(), on = new WeakSet(), js = function(t) {
  return `${C(this, oe)}:${t}`;
};
const af = new xi("DEFAULT");
function lf(e, t = "local") {
  return new xi(e, t);
}
Object.assign(af, { create: lf });
function cf(e) {
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
function hf(e) {
  const [t, n, s] = typeof e == "string" ? cf(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function al(e, t) {
  return hf(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function ll(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function df(e, t, n) {
  e = e % 360 / 360, t = ll(t), n = ll(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function uf(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function ff(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let qc = class extends z {
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
      saturation: p = 0.4,
      lightness: g = 0.6,
      children: y,
      ...w
    } = this.props, v = ["avatar", t], _ = { ...n, background: o, color: a };
    let b = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, b = s) : (v.push(`size-${s}`), b = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? v.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let T;
    if (d)
      v.push("has-img"), T = /* @__PURE__ */ f("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const $ = ff(l, c);
      if (v.push("has-text", `has-text-${$.length}`), o)
        !a && o && (_.color = al(o));
      else {
        const A = h ?? l, P = (typeof A == "number" ? A : uf(A)) * u % 360;
        if (_.background = `hsl(${P},${p * 100}%,${g * 100}%)`, !a) {
          const H = df(P, p, g);
          _.color = al(H);
        }
      }
      let E;
      b && b < 14 * $.length && (E = { transform: `scale(${b / (14 * $.length)})`, whiteSpace: "nowrap" }), T = /* @__PURE__ */ f("div", { "data-actualSize": b, className: "avatar-text", style: E, children: $ });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: M(v),
        style: _,
        ...w,
        children: [
          T,
          y
        ]
      }
    );
  }
};
class Gc extends q {
}
Gc.NAME = "Avatar";
Gc.Component = qc;
class Yc extends q {
}
Yc.NAME = "BtnGroup";
Yc.Component = Dc;
const cl = Symbol("EVENT_PICK");
var rs;
class ra extends z {
  constructor(n) {
    super(n);
    L(this, rs, void 0);
    this._handleClick = this._handleClick.bind(this), O(this, rs, !!m(`#${n.id}`).length);
  }
  _handleClick(n) {
    const { togglePop: s, clickType: i, onClick: r } = this.props;
    let o = i === "open" ? !0 : void 0;
    const a = m(n.target), l = r == null ? void 0 : r(n);
    if (!n.defaultPrevented) {
      if (typeof l == "boolean")
        o = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          s(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => s(o));
    }
  }
  _getClass(n) {
    const { state: s, className: i } = n, { open: r, disabled: o } = s;
    return M(
      "pick",
      i,
      r && "is-open focus",
      o && "disabled"
    );
  }
  _getProps(n) {
    const { id: s, style: i, attrs: r } = n;
    return {
      id: `pick-${s}`,
      className: this._getClass(n),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...r
    };
  }
  _renderTrigger(n) {
    const { children: s, state: i } = n;
    return s ?? i.value;
  }
  _renderValue(n) {
    const { name: s, state: { value: i = "" }, id: r } = n;
    if (s)
      if (C(this, rs))
        m(`#${r}`).val(i);
      else
        return /* @__PURE__ */ f("input", { id: r, type: "hidden", className: "pick-value", name: s, value: i });
    return null;
  }
  componentDidMount() {
    const { id: n, state: s } = this.props;
    m(`#${n}`).on(`change.pick.zui.${n}`, (i, r) => {
      if (r === cl)
        return;
      const o = i.target.value;
      o !== s.value && this.props.changeState({ value: o });
    });
  }
  componentWillUnmount() {
    const { id: n } = this.props;
    m(`#${n}`).off(`change.pick.zui.${n}`);
  }
  componentDidUpdate(n) {
    const { id: s, state: i, name: r } = this.props;
    r && n.state.value !== i.value && m(`#${s}`).trigger("change", cl);
  }
  render(n) {
    return j(
      n.tagName || "div",
      this._getProps(n),
      this._renderTrigger(n),
      this._renderValue(n)
    );
  }
}
rs = new WeakMap();
var ke, Et, ae;
class Kc extends z {
  constructor(n) {
    super(n);
    L(this, ke, void 0);
    L(this, Et, void 0);
    L(this, ae, void 0);
    O(this, ke, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, ke)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, ae);
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
    } = n, h = m.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(n),
      style: h,
      ref: C(this, ke),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!C(this, ae)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), O(this, ae, i[0]);
    }
    return C(this, ae);
  }
  _render(n) {
    return /* @__PURE__ */ f("div", { ...this._getProps(n), children: this._renderPop(n) });
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      C(this, Et) && (C(this, Et).call(this), O(this, Et, void 0));
      return;
    }
    C(this, Et) || O(this, Et, Qo(s, n, () => {
      const { placement: o, width: a } = i;
      ar(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? sr() : null, wi(), ir(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var c, d;
        m(n).css({
          left: l,
          top: h,
          width: a === "100%" ? m(s).outerWidth() : void 0
        }), (d = (c = this.props).onLayout) == null || d.call(c, n);
      }), a === "100%" && m(n).css({ width: m(n).width() });
    }));
  }
  componentDidMount() {
    var n, s;
    this.layout(), m(document).on("click", this._handleDocClick), (s = (n = this.props).afterRender) == null || s.call(n, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n, s;
    (s = (n = this.props).afterRender) == null || s.call(n, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    m(document).off("click", this._handleDocClick);
    const n = C(this, Et);
    n && (n(), O(this, Et, void 0)), O(this, ae, void 0), O(this, ke, void 0), m(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(n) {
    return Eu(this._render(n), this._getContainer(n));
  }
}
ke = new WeakMap(), Et = new WeakMap(), ae = new WeakMap();
var jc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ee = (e, t, n) => (jc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), kr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (jc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Xs, wt, Tn;
let gt = class extends z {
  constructor(t) {
    super(t), kr(this, Xs, void 0), kr(this, wt, 0), kr(this, Tn, K()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      this.props.disabled && (n = !1);
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      ee(this, wt) && (clearTimeout(ee(this, wt)), Ve(this, wt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await fi(200, (a) => {
        Ve(this, wt, a);
      }), Ve(this, wt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await fi(50, (a) => {
        Ve(this, wt, a);
      }), Ve(this, wt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, Ve(this, Xs, t.id ?? `_pick${m.guid++}`);
  }
  get id() {
    return ee(this, Xs);
  }
  get pop() {
    return ee(this, Tn).current;
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
      onClick: t.onClick,
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
    (n = this.props.beforeDestroy) == null || n.call(this), ee(this, wt) && clearTimeout(ee(this, wt));
    const t = ee(this, Tn).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: ee(this, Tn), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ f(mn, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Xs = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
gt.Trigger = ra;
gt.Pop = Kc;
gt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Xc = class extends gt {
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
    const { syncBackground: t, syncBorder: n, syncColor: s, syncValue: i } = this.props, r = this.state.value || "";
    if (t && m(t).css("backgroundColor", r), n && m(n).css("borderColor", r), s && m(s).css("color", r), i) {
      const o = m(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, n) {
    this.props.disabled || (super._handleChange(t, n), this.syncColor());
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ f(nt, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = m.extend({
      color: n.value
    }, s.style), s.className = M("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, n) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = n;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Xc.defaultProps = {
  ...gt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Jc extends q {
}
Jc.NAME = "ColorPicker";
Jc.Component = Xc;
const Zn = 24 * 60 * 60 * 1e3, Z = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), pf = (e, t, n = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    n = t.replace(s.toString(), ""), t = s;
  }
  return e = new Date(Z(e).getTime()), n === "month" ? e.setMonth(e.getMonth() + t) : n === "year" ? e.setFullYear(e.getFullYear() + t) : n === "week" ? e.setDate(e.getDate() + t * 7) : n === "hour" ? e.setHours(e.getHours() + t) : n === "minute" ? e.setMinutes(e.getMinutes() + t) : n === "second" ? e.setSeconds(e.getSeconds() + t) : e.setDate(e.getDate() + t), e;
}, ks = (e, t = /* @__PURE__ */ new Date()) => Z(e).toDateString() === Z(t).toDateString(), jr = (e, t = /* @__PURE__ */ new Date()) => Z(e).getFullYear() === Z(t).getFullYear(), Zc = (e, t = /* @__PURE__ */ new Date()) => (e = Z(e), t = Z(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Fp = (e, t = /* @__PURE__ */ new Date()) => {
  e = Z(e), t = Z(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Vp = (e, t) => ks(Z(t), e), Up = (e, t) => ks(Z(t).getTime() - Zn, e), qp = (e, t) => ks(Z(t).getTime() + Zn, e), $t = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = Z(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", jr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Gp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = $t(e, jr(e) ? s.month : s.full);
  if (ks(e, t))
    return i;
  const r = $t(t, jr(e, t) ? Zc(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var os, as;
class mf extends z {
  constructor() {
    super(...arguments);
    L(this, os, K());
    L(this, as, (n, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, n, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    m(C(this, os).current).find(".menu-item>.active").scrollIntoView();
  }
  render(n) {
    const { minuteStep: s = 5, hour: i, minute: r } = n, o = [], a = [];
    for (let h = 0; h < 24; ++h)
      o.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: r === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: C(this, os), children: [
      /* @__PURE__ */ f(
        ue,
        {
          className: l,
          items: o,
          onClickItem: C(this, as).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        ue,
        {
          className: l,
          items: a,
          onClickItem: C(this, as).bind(this, "minute")
        }
      )
    ] });
  }
}
os = new WeakMap(), as = new WeakMap();
var gf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ws = (e, t, n) => (gf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Os = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Xr, Jr, Zr, Qr;
const hl = (e) => {
  if (!e)
    return;
  const t = Z(`1999-01-01 ${e}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Qc = class extends gt {
  constructor(t) {
    super(t), Os(this, Xr, () => {
      this.toggle(!0);
    }), Os(this, Jr, (s) => {
      this.setTime(s.target.value);
    }), Os(this, Zr, (s, i) => {
      this.setTime({ [s]: i });
    }), Os(this, Qr, () => {
      this.setTime("");
    });
    const n = this.state;
    n.value === "now" && (n.value = $t(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let n = "";
    if (typeof t == "string")
      n = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: h = +a, minute: c = +l } = t;
      n = `${h}:${c}`;
    }
    const s = hl(n), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? $t(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(n);
    });
  }
  getTime() {
    const t = hl(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: s, name: i, icon: r, required: o, disabled: a, readonly: l } = t, { value: h = "", open: c } = n, d = `time-picker-${this.id}`;
    let u;
    return c && !o && h.length ? u = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Ws(this, Qr), children: /* @__PURE__ */ f("span", { className: "close" }) }) : r && (r === !0 ? u = /* @__PURE__ */ f("i", { class: "i-time" }) : u = /* @__PURE__ */ f(nt, { icon: r })), [
      /* @__PURE__ */ f("input", { name: i, id: d, type: "text", class: "form-control", placeholder: s, value: h, disabled: a, readOnly: l, onFocus: Ws(this, Xr), onChange: Ws(this, Jr) }, "input"),
      u ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: u }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: M(s.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, s] = this.getTime() || [];
    return /* @__PURE__ */ f(mf, { hour: n, minute: s, minuteStep: t.minuteStep, onChange: Ws(this, Zr) });
  }
};
Xr = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
Qc.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
tt.addLang({
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
const yf = (e, t, n = 0) => {
  const s = new Date(e, t - 1, 1), i = new Date(e, t, 0), r = s.getDay(), o = s.getTime() - (7 + r - n) % 7 * Zn;
  return {
    days: i.getDate(),
    startTime: o,
    firstDay: s.getTime()
  };
}, dl = (e, t) => new Set((Array.isArray(e) ? e : [e]).map((n) => $t(n, t)));
var Di;
class vf extends z {
  constructor() {
    super(...arguments);
    L(this, Di, (n) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = m(n.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(n) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = tt.getLang("weekNames"),
      monthNames: o = tt.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: h = [],
      selections: c = []
    } = n, d = [], u = "btn ghost square rounded-full";
    for (let E = 0; E < 7; E++) {
      const A = (i + E) % 7;
      d.push(/* @__PURE__ */ f("div", { className: M("col mini-calendar-day", { "is-weekend": A === 0 || A === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[A] : A }) }, E));
    }
    const { startTime: p, days: g, firstDay: y } = yf(a, l, i), w = y + g * Zn;
    let v = p;
    const _ = [], b = "yyyy-MM-dd", T = dl(h, b), $ = dl(c, b);
    for (; v <= w; ) {
      const E = [];
      for (let A = 0; A < 7; A++) {
        const P = new Date(v), H = P.getDate(), k = $t(P, b), R = P.getDay(), D = Zc(P, y), S = M("col mini-calendar-day", {
          active: T.has(k),
          selected: $.has(k),
          "is-first": H === 1,
          "is-in-month": D,
          "is-out-month": !D,
          "is-today": ks(P, s),
          "is-weekend": R === 0 || R === 6
        });
        E.push(
          /* @__PURE__ */ f("div", { className: S, "data-date": k, children: /* @__PURE__ */ f("a", { className: u, onClick: C(this, Di), children: H === 1 && o ? o[P.getMonth()] : P.getDate() }) }, k)
        ), v += Zn;
      }
      _.push(/* @__PURE__ */ f("div", { className: "row", children: E }, v));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: d }),
      _
    ] });
  }
}
Di = new WeakMap();
var ls, Ii;
class ul extends z {
  constructor() {
    super(...arguments);
    L(this, ls, K());
    L(this, Ii, (n) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = m(n.target).closest("[data-value]").dataset("value");
      r && (s(+r), n.stopPropagation());
    });
  }
  componentDidMount() {
    m(C(this, ls).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(n) {
    const { className: s, max: i, min: r, value: o } = n, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = r; h <= i; ++h)
      a.push(/* @__PURE__ */ f(et, { type: "ghost", "data-value": h, active: h === o, className: M(l === h ? "is-current" : ""), onClick: C(this, Ii), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: C(this, ls), children: a });
  }
}
ls = new WeakMap(), Ii = new WeakMap();
var an, cs, hs, ds, us, fs, Wi, th, Oi, eh;
class wf extends z {
  constructor(n) {
    super(n);
    L(this, Wi);
    L(this, Oi);
    L(this, an, void 0);
    L(this, cs, void 0);
    L(this, hs, void 0);
    L(this, ds, void 0);
    L(this, us, void 0);
    L(this, fs, void 0);
    O(this, an, K()), O(this, cs, (o) => {
      const a = m(o.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), O(this, hs, () => {
      const { year: o, month: a } = this.state;
      a === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), O(this, ds, () => {
      const { year: o, month: a } = this.state;
      a === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), O(this, us, (o) => {
      this.setState({ year: o, select: "day" });
    }), O(this, fs, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var a, l;
      if (o.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        o.length > 3 && (h = pf(h, o.substring(5).replace("+", ""))), o = $t(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, o);
    };
    const { date: s } = n, i = /* @__PURE__ */ new Date(), r = s ? new Date(s) : void 0;
    this.state = { select: "day", year: r ? r.getFullYear() : i.getFullYear(), month: r ? r.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(n) {
    this.setState((s) => s.select === n ? { select: "day" } : { select: n });
  }
  componentDidMount() {
    m(C(this, an).current).find(".active").scrollIntoView();
  }
  render(n, s) {
    const {
      date: i,
      yearText: r = tt.getLang("yearFormat") || "{0}",
      weekNames: o = tt.getLang("weekNames"),
      monthNames: a = tt.getLang("monthNames"),
      weekStart: l
    } = n, h = i ? new Date(i) : void 0, {
      year: c,
      month: d,
      select: u
    } = s, p = u === "day", g = Z(n.minDate || "1970-1-1"), y = Z(n.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: C(this, an), onClick: C(this, cs), children: [
      Lt(this, Wi, th).call(this, n),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(et, { type: u === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: it(r, c) }),
          /* @__PURE__ */ f(et, { type: u === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: C(this, hs), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: C(this, ds), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          vf,
          {
            weekStart: l,
            weekNames: o,
            monthNames: a,
            year: c,
            month: d,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        u === "year" ? /* @__PURE__ */ f(
          ul,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: C(this, us)
          }
        ) : u === "month" ? /* @__PURE__ */ f(
          ul,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: C(this, fs)
          }
        ) : null,
        p ? Lt(this, Oi, eh).call(this, n) : null
      ] })
    ] });
  }
}
an = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), Wi = new WeakSet(), th = function(n) {
  let { menu: s } = n;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(ue, { ...s })) : null;
}, Oi = new WeakSet(), eh = function(n) {
  let { actions: s } = n;
  const { todayText: i, clearText: r } = n;
  return s || (s = [{ text: i, "data-set-date": $t(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(pt, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ f(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var _f = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sr = (e, t, n) => (_f(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Mr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, to, eo, no;
let nh = class extends gt {
  constructor(t) {
    super(t), Mr(this, to, () => {
      this.toggle(!0);
    }), Mr(this, eo, (s) => {
      this.setDate(s.target.value);
    }), Mr(this, no, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      if (this.props.disabled)
        return;
      const i = Z(s), r = !s || Number.isNaN(i.getDay()), { onInvalid: o, defaultValue: a = "", required: l } = this.props;
      this.setState({ value: r ? l ? a : "" : $t(i, this.props.format) }, () => {
        !r && o && o(s), this.toggle(!1);
      });
    };
    const n = this.state;
    n.value === "today" && (n.value = $t(/* @__PURE__ */ new Date(), t.format));
  }
  _renderTrigger(t, n) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: h } = n, c = `date-picker-${this.id}`;
    let d;
    return h && !r && l.length ? d = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Sr(this, no), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? d = /* @__PURE__ */ f("i", { class: "i-calendar" }) : d = /* @__PURE__ */ f(nt, { icon: i })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", class: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, onFocus: Sr(this, to), onChange: Sr(this, eo) }, "input"),
      d ? /* @__PURE__ */ f("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: M(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const s = super._getPopProps(t, n);
    return {
      ...s,
      className: M(s.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = tt.getLang("today"), clearText: l, menu: h, actions: c, minDate: d, maxDate: u, required: p } = t;
    return /* @__PURE__ */ f(
      wf,
      {
        onChange: this.setDate,
        date: n.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: h,
        actions: c,
        minDate: d,
        maxDate: u
      }
    );
  }
};
to = /* @__PURE__ */ new WeakMap();
eo = /* @__PURE__ */ new WeakMap();
no = /* @__PURE__ */ new WeakMap();
nh.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class sh extends q {
}
sh.NAME = "TimePicker";
sh.Component = Qc;
class ih extends q {
}
ih.NAME = "DatePicker";
ih.Component = nh;
var oa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xe = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ke = (e, t, n, s) => (oa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Tr = (e, t, n) => (oa(e, t, "access private method"), n), je, _e, En, so, Nn, Js;
const Er = "show", fl = "in", bf = '[data-dismiss="modal"]', An = class extends mt {
  constructor() {
    super(...arguments), wn(this, Nn), wn(this, je, 0), wn(this, _e, void 0), wn(this, En, void 0), wn(this, so, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(bf) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Er);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return xe(this, _e);
  }
  _observeResize() {
    var e;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (e = xe(this, _e)) == null || e.disconnect();
      const { dialog: t } = this;
      if (t) {
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const s = t.clientWidth, i = t.clientHeight, [r, o] = xe(this, En) || [];
          (r !== s || o !== i) && (Ke(this, En, [s, i]), this.layout());
        });
        n.observe(t), Ke(this, _e, n);
      }
    }
  }
  afterInit() {
    this.on("click", xe(this, so)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var e;
    super.destroy(), (e = xe(this, _e)) == null || e.disconnect(), Ke(this, _e, void 0);
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${An.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Er, i).css({
      zIndex: `${An.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Tr(this, Nn, Js).call(this, () => {
      m(t).addClass(fl), Tr(this, Nn, Js).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(fl), this.emit("hide"), Tr(this, Nn, Js).call(this, () => {
      m(this.modalElement).removeClass(Er), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const s = m(n);
    if (t = t ?? this.options.size, t) {
      s.removeAttr("data-size");
      const a = { width: "", height: "" };
      typeof t == "object" ? (a.width = t.width, a.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? s.attr("data-size", t) : t && (a.width = t), s.css(a);
    }
    e = e ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Ke(this, En, [i, r]), typeof e == "function" && (e = e({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (o.alignSelf = "flex-start", o.top = e) : typeof e == "object" && e ? (o.alignSelf = "flex-start", Object.assign(o, e)) : e === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? o.alignSelf = "flex-end" : e === "top" ? o.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (o.alignSelf = "flex-start", o.top = e), s.css(o), m(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = An.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = An.query(e)) == null || t.show();
  }
};
let te = An;
je = /* @__PURE__ */ new WeakMap();
_e = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakSet();
Js = function(e, t) {
  xe(this, je) && (clearTimeout(xe(this, je)), Ke(this, je, 0)), e && (this.options.animation ? Ke(this, je, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
te.NAME = "Modal";
te.MULTI_INSTANCE = !0;
te.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
te.zIndex = 1500;
m(window).on("resize.modal.zui", () => {
  te.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  te.hide(t == null ? void 0 : t.target);
});
class rh extends z {
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
      headerClass: n,
      title: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: M("modal-header", n), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Q(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(pt, { ...t }) : null,
      n ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: n
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ f("div", { className: M("modal-body", n), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: n,
      footerActions: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: M("modal-footer", n), children: s ? /* @__PURE__ */ f(pt, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ f("div", { className: M("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
rh.defaultProps = { closeBtn: !0 };
var ln, cn, hn;
class Cf extends z {
  constructor() {
    super(...arguments);
    L(this, ln, void 0);
    L(this, cn, void 0);
    L(this, hn, void 0);
    O(this, ln, K()), this.state = {}, O(this, hn, () => {
      var i, r;
      const n = (r = (i = C(this, ln).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, cn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), O(this, cn, s);
    });
  }
  componentDidMount() {
    C(this, hn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, cn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, ln),
        onLoad: C(this, hn)
      }
    );
  }
}
ln = new WeakMap(), cn = new WeakMap(), hn = new WeakMap();
var aa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vt = (e, t, n) => (aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _n = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ue = (e, t, n, s) => (aa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Zs = (e, t, n) => (aa(e, t, "access private method"), n), Wt, Rn, Ot, $i, la, Qs, io;
function xf(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function $f(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ f(Ko, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function kf(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(Cf, { url: n })
  };
}
const Sf = {
  custom: xf,
  ajax: $f,
  iframe: kf
}, Nr = "loading", Pn = class extends te {
  constructor() {
    super(...arguments), _n(this, $i), _n(this, Qs), _n(this, Wt, void 0), _n(this, Rn, void 0), _n(this, Ot, void 0);
  }
  get id() {
    return vt(this, Rn);
  }
  get loading() {
    var e;
    return (e = vt(this, Wt)) == null ? void 0 : e.classList.contains(Nr);
  }
  get shown() {
    var e;
    return !!((e = vt(this, Wt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = vt(this, Wt);
    if (!e) {
      const { options: t } = this;
      let n = vt(this, Rn);
      n || (n = t.id || `modal-${m.guid++}`, Ue(this, Rn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ue(this, Wt, e);
    }
    return e;
  }
  get $emitter() {
    const e = vt(this, Wt);
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
    const e = vt(this, Wt);
    e && (m(e).removeData(this.constructor.KEY).remove(), Ue(this, Wt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, Ot) && clearTimeout(vt(this, Ot));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Sf[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Nr), i && Ue(this, Ot, window.setTimeout(() => {
      Ue(this, Ot, 0), Zs(this, Qs, io).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Zs(this, Qs, io).call(this, this.options.failedTip) : a && typeof a == "object" && await Zs(this, $i, la).call(this, a), vt(this, Ot) && (clearTimeout(vt(this, Ot)), Ue(this, Ot, 0)), this.layout(), await fi(100), n.removeClass(Nr), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = Pn.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e, c = (typeof a == "function" ? a() : a) || {};
    let d = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    s ? d = /* @__PURE__ */ f("div", { className: M("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${s} ${i}` }),
      d
    ] }) : d = /* @__PURE__ */ f("div", { className: M("modal-body", c.bodyClass), children: d });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = tt.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && u.push(y);
    }, []);
    let p;
    const g = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: y, event: w }) => {
        const v = Pn.query(w.target, l);
        p = y.key, (o == null ? void 0 : o(y, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Pn.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: d,
      backdrop: "static",
      custom: { footerActions: g, ...c },
      ...h
    }), p;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await Pn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let oh = Pn;
Wt = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakSet();
la = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return m(this.modalElement).html(e[0]), this.layout(), this._observeResize(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), this._observeResize(), t();
      },
      ...s
    }, Xn(
      /* @__PURE__ */ f(rh, { ...e }),
      this.modalElement
    );
  });
};
Qs = /* @__PURE__ */ new WeakSet();
io = function(e) {
  if (e)
    return Zs(this, $i, la).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: e })
    });
};
oh.DEFAULT = {
  ...te.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var ca = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ro = (e, t, n) => (ca(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, pl = (e, t, n, s) => (ca(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), oo = (e, t, n) => (ca(e, t, "access private method"), n), Te, ha, ah, ao, lh, da, ch;
const Mf = '[data-toggle="modal"]';
class hh extends mt {
  constructor() {
    super(...arguments), Hs(this, ha), Hs(this, ao), Hs(this, da), Hs(this, Te, void 0);
  }
  get modal() {
    return ro(this, Te);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = oo(this, ao, lh).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = ro(this, Te)) == null ? void 0 : t.hide();
  }
}
Te = /* @__PURE__ */ new WeakMap();
ha = /* @__PURE__ */ new WeakSet();
ah = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
ao = /* @__PURE__ */ new WeakSet();
lh = function() {
  const e = oo(this, ha, ah).call(this);
  let t = ro(this, Te);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = oo(this, da, ch).call(this);
    if (!n)
      return;
    t = te.ensure(n, e);
  } else
    t = oh.ensure(this.container, e);
  return pl(this, Te, t), t.on("destroyed", () => {
    pl(this, Te, void 0);
  }), t;
};
da = /* @__PURE__ */ new WeakSet();
ch = function() {
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
hh.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Mf);
  if (n) {
    const i = hh.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let dh = class extends Oe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
dh.NAME = "nav";
class uh extends q {
}
uh.NAME = "Nav";
uh.Component = dh;
function Qn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Tf({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Qn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : it(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : it(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ f(et, { type: n, ...a });
}
function Ef({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Qn(i, n);
  return s = typeof s == "function" ? s(a) : it(s, a), /* @__PURE__ */ f(mc, { ...o, children: [
    r,
    s
  ] });
}
function Nf({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(et, { type: n, ...l })), c = (u, p) => {
    const g = [];
    for (let y = u; y <= p; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const w = Qn(i, y);
      o && (l.url = typeof o == "function" ? o(w) : it(o, w)), g.push(/* @__PURE__ */ f(et, { type: n, ...l, onClick: r }));
    }
    return g;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function Af({
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
      url: typeof n == "function" ? n(c) : it(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : it(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Lc, { type: "dropdown", dropdown: i, ...o });
}
function Rf({
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
    var w;
    d = Number((w = y.target) == null ? void 0 : w.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, p = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const w = Qn(i, d);
    a && !a({ info: w, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(w) : it(l, w));
  }, g = Qn(i, t || 0);
  return c.url = typeof l == "function" ? l(g) : it(l, g), /* @__PURE__ */ f("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ f(et, { type: s, ...c, onClick: p })
  ] });
}
let lr = class extends pt {
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
lr.NAME = "pager";
lr.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
lr.ItemComponents = {
  ...pt.ItemComponents,
  link: Tf,
  info: Ef,
  nav: Nf,
  "size-menu": Af,
  goto: Rf
};
class fh extends q {
}
fh.NAME = "Pager";
fh.Component = lr;
class ph extends q {
}
ph.NAME = "Pick";
ph.Component = gt;
var dn, ps, ms, Hi;
class mh extends z {
  constructor(n) {
    super(n);
    L(this, dn, K());
    L(this, ps, K());
    L(this, ms, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s }), n.stopPropagation();
    });
    L(this, Hi, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = C(this, dn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = C(this, ps), { current: i } = C(this, dn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: C(this, ps), children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, Hi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: C(this, ms),
          onInput: C(this, ms),
          ref: C(this, dn)
        }
      ),
      l
    ] });
  }
}
dn = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), Hi = new WeakMap();
var un, gs, ys, vs;
class Pf extends ra {
  constructor() {
    super(...arguments);
    L(this, un, void 0);
    L(this, gs, void 0);
    L(this, ys, void 0);
    L(this, vs, void 0);
    O(this, un, K()), O(this, gs, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), O(this, ys, (n) => {
      this.props.changeState({ search: n });
    }), O(this, vs, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: n.text ?? n.value }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, gs), "data-value": n.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, un).current) == null || s.focus();
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-select picker-select-multi form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ f(
      mh,
      {
        inline: !0,
        ref: C(this, un),
        defaultSearch: s,
        onSearch: C(this, ys),
        onClear: C(this, vs),
        placeholder: i
      }
    );
  }
  _renderTrigger(n) {
    const { state: { selections: s = [], open: i }, search: r, placeholder: o, children: a } = this.props, l = i && r;
    return !l && !s.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
}
un = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), vs = new WeakMap();
var ws, Bi, zi, Fi, Vi, gh;
class Lf extends ra {
  constructor() {
    super(...arguments);
    L(this, Vi);
    L(this, ws, K());
    L(this, Bi, (n) => {
      this.props.disabled || (this.props.onClear(), n.stopPropagation());
    });
    L(this, zi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, Fi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, ws).current) == null || s.focus();
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-select picker-select-single form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ f(
      mh,
      {
        ref: C(this, ws),
        defaultSearch: s,
        onSearch: C(this, zi),
        onClear: C(this, Fi),
        placeholder: Lt(this, Vi, gh).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a, disabled: l, clearable: h } = n, [c] = i, d = r && a;
    let u;
    d ? u = this._renderSearch(n) : c ? u = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: c.text ?? c.value }, "main") : u = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "main");
    const p = h && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: C(this, Bi), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      u,
      s,
      p,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
ws = new WeakMap(), Bi = new WeakMap(), zi = new WeakMap(), Fi = new WeakMap(), Vi = new WeakSet(), gh = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const Df = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, c) => {
    c && (r.push(/* @__PURE__ */ f("span", { class: n, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var Ui, qi, yh, Gi, vh, Yi;
class If extends Kc {
  constructor() {
    super(...arguments);
    L(this, qi);
    L(this, Gi);
    L(this, Ui, K());
    L(this, Yi, ({ item: n }) => {
      const s = n.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(s) : (o(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = m(s.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).off(".picker.zui");
  }
  setHoverItem(n) {
    this.props.changeState({ hoverItem: n }, () => {
      const s = Lt(this, qi, yh).call(this);
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
    return /* @__PURE__ */ f(
      ue,
      {
        ref: C(this, Ui),
        className: "picker-menu-list",
        items: Lt(this, Gi, vh).call(this),
        onClickItem: C(this, Yi),
        ...s
      }
    );
  }
}
Ui = new WeakMap(), qi = new WeakSet(), yh = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Gi = new WeakSet(), vh = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: p,
      text: g,
      className: y,
      ...w
    } = d;
    u === i && (a = !0);
    const v = g ?? u;
    return c.push({
      key: u,
      active: o.has(u),
      text: typeof v == "string" ? Df(l, [v]) : /* @__PURE__ */ f(bs, { content: v }),
      className: M(y, { hover: u === i }),
      "data-value": u,
      ...w
    }), c;
  }, []);
  return !a && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, Yi = new WeakMap();
var wh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, St = (e, t, n) => (wh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Bs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ne = (e, t, n, s) => (wh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ln, Ht, be, Dn;
let ua = class extends gt {
  constructor(t) {
    super(t), Bs(this, Ln, void 0), Bs(this, Ht, void 0), Bs(this, be, 0), Bs(this, Dn, void 0), this.isEmptyValue = (r) => St(this, Dn).has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((h) => !a.has(h));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const o = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), m.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: n = ",", emptyValue: s = "" } = this.props;
    ne(this, Dn, new Set(s.split(n)));
    const { items: i } = t;
    if (Array.isArray(i) && i.length) {
      if (t.limitValueInList) {
        const r = new Set(i.map((o) => o.value));
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value);
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return St(this, Dn).values().next().value;
  }
  async load() {
    let t = St(this, Ht);
    t && t.abort(), t = new AbortController(), ne(this, Ht, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await fi(s || 500), St(this, Ht) !== t || (r = await n(i, { signal: t.signal }), St(this, Ht) !== t))
        return r;
    } else if (i.length) {
      const o = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
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
    return ne(this, Ht, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = St(this, Ln) || {}, r = {};
    if (ne(this, Ln, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = (await this.load()).filter((a) => !this.isEmptyValue(a.value)), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const a = r.items || n.items, l = new Map(a.map((h) => [h.value, h]));
      r.selections = this.valueList.reduce((h, c) => (this.isEmptyValue(c) || h.push(l.get(c) || { value: c }), h), []), i.value = n.value;
    }
    const o = r.items;
    s.required && !s.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    St(this, be) && clearTimeout(St(this, be)), ne(this, be, window.setTimeout(() => {
      ne(this, be, 0), this.update();
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
    (t = St(this, Ht)) == null || t.abort(), ne(this, Ht, void 0), ne(this, Ln, void 0), clearTimeout(St(this, be)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
      clearable: !!this.valueList.length && !t.required,
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
    return t.Trigger || (t.multiple ? Pf : Lf);
  }
  formatValueList(t) {
    let n = [];
    return typeof t == "string" && t.length ? n = m.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (n = m.unique(t)), n.filter((s) => !this.isEmptyValue(s));
  }
  formatValue(t) {
    const n = this.formatValueList(t);
    return n.length ? n.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    const n = this.formatValueList(t);
    if (!n.length && this.props.required)
      return;
    const s = this.formatValue(n);
    if (s !== this.state.value)
      return this.changeState({ value: s });
  }
};
Ln = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
ua.defaultProps = {
  ...gt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
ua.Pop = If;
class _h extends q {
}
_h.NAME = "Picker";
_h.Component = ua;
class bh extends mt {
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
    return i && s.middleware.push(sr()), r && s.middleware.push(r === !0 ? wi() : wi(r)), o && s.middleware.push(zr({ element: this.$arrow[0] })), a && s.middleware.push(ir(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = Qo(t, n, () => {
      ar(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !zr || !o.arrow)
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
bh.NAME = "Popovers";
bh.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var fa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (fa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ye = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ti = (e, t, n, s) => (fa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ml = (e, t, n) => (fa(e, t, "access private method"), n), ei, ni, Ee, lo, si, ii, ri, co;
let Ch = class extends z {
  constructor(t) {
    super(t), ye(this, ri), ye(this, ei, void 0), ye(this, ni, K()), ye(this, Ee, 0), ye(this, lo, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), ye(this, si, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (ml(this, ri, co).call(this), ti(this, Ee, window.setTimeout(() => {
          r(i, n), ti(this, Ee, 0);
        }, this.props.delay || 0)));
      });
    }), ye(this, ii, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, ti(this, ei, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return Mt(this, ei);
  }
  get input() {
    return Mt(this, ni).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    ml(this, ri, co).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: p } = t, { focus: g, value: y } = n, { id: w } = this, v = typeof y != "string" || !y.trim().length;
    let _, b, T;
    return u && (T = u === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ f("label", { for: w, class: "input-control-prefix", children: T }, "prefix")), p && !v ? b = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Mt(this, lo),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(nt, { icon: p })
      }
    ) : d && u && (b = T), b && (b = /* @__PURE__ */ f("label", { for: w, class: "input-control-suffix", children: b }, "suffix")), /* @__PURE__ */ f("div", { class: M("search-box input-control", r, { focus: g, empty: v, "has-prefix-icon": _, "has-suffix-icon": b }), style: o, children: [
      _,
      /* @__PURE__ */ f(
        "input",
        {
          ref: Mt(this, ni),
          id: w,
          type: "text",
          class: M("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: Mt(this, si),
          onChange: Mt(this, si),
          onFocus: Mt(this, ii),
          onBlur: Mt(this, ii)
        }
      ),
      b
    ] });
  }
};
ei = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakSet();
co = function() {
  Mt(this, Ee) && clearTimeout(Mt(this, Ee)), ti(this, Ee, 0);
};
Ch.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class xh extends q {
}
xh.NAME = "SearchBox";
xh.Component = Ch;
class $h extends q {
}
$h.NAME = "Toolbar";
$h.Component = pt;
function Ss(e) {
  return e.split("-")[1];
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
function en(e) {
  return e.split("-")[0];
}
function cr(e) {
  return ["top", "bottom"].includes(en(e)) ? "x" : "y";
}
function gl(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = cr(t), l = pa(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (en(t)) {
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
  switch (Ss(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Wf = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = gl(h, s, l), u = s, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y], { x: _, y: b, data: T, reset: $ } = await v({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [w]: { ...p[w], ...T } }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : $.rects), { x: c, y: d } = gl(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function kh(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ki(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Of(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = t, g = kh(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], w = ki(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), v = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, T = ki(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: _, strategy: l }) : v);
  return { top: (w.top - T.top + g.top) / b.y, bottom: (T.bottom - w.bottom + g.bottom) / b.y, left: (w.left - T.left + g.left) / b.x, right: (T.right - w.right + g.right) / b.x };
}
const Hf = Math.min, Bf = Math.max;
function zf(e, t, n) {
  return Bf(e, Hf(t, n));
}
const Ff = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = kh(s), c = { x: i, y: r }, d = cr(o), u = pa(d), p = await l.getDimensions(n), g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = a.reference[u] + a.reference[d] - c[d] - a.floating[u], v = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let b = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  b === 0 && (b = a.floating[u]);
  const T = w / 2 - v / 2, $ = h[g], E = b - p[u] - h[y], A = b / 2 - p[u] / 2 + T, P = zf($, A, E), H = Ss(o) != null && A != P && a.reference[u] / 2 - (A < $ ? h[g] : h[y]) - p[u] / 2 < 0;
  return { [d]: c[d] - (H ? A < $ ? $ - A : E - A : 0), data: { [d]: P, centerOffset: A - P } };
} }), Vf = ["top", "right", "bottom", "left"];
Vf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Uf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Si(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Uf[t]);
}
function qf(e, t, n) {
  n === void 0 && (n = !1);
  const s = Ss(e), i = cr(e), r = pa(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Si(o)), { main: o, cross: Si(o) };
}
const Gf = { start: "end", end: "start" };
function Ar(e) {
  return e.replace(/start|end/g, (t) => Gf[t]);
}
const Yf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = e, w = en(s), v = en(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (v || !g ? [Si(o)] : function(k) {
      const R = Si(k);
      return [Ar(k), R, Ar(R)];
    }(o));
    d || p === "none" || b.push(...function(k, R, D, S) {
      const I = Ss(k);
      let W = function(V, ot, gn) {
        const Ts = ["left", "right"], yn = ["right", "left"], Es = ["top", "bottom"], gr = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return gn ? ot ? yn : Ts : ot ? Ts : yn;
          case "left":
          case "right":
            return ot ? Es : gr;
          default:
            return [];
        }
      }(en(k), D === "start", S);
      return I && (W = W.map((V) => V + "-" + I), R && (W = W.concat(W.map(Ar)))), W;
    }(o, g, p, _));
    const T = [o, ...b], $ = await Of(t, y), E = [];
    let A = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push($[w]), c) {
      const { main: k, cross: R } = qf(s, r, _);
      E.push($[k], $[R]);
    }
    if (A = [...A, { placement: s, overflows: E }], !E.every((k) => k <= 0)) {
      var P;
      const k = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, R = T[k];
      if (R)
        return { data: { index: k, overflows: A }, reset: { placement: R } };
      let D = "bottom";
      switch (u) {
        case "bestFit": {
          var H;
          const S = (H = A.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, V) => W + V, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : H[0].placement;
          S && (D = S);
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
}, Kf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = en(a), u = Ss(a), p = cr(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: v, crossAxis: _, alignmentAxis: b } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: v * g } : { x: v * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function dt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rt(e) {
  return dt(e).getComputedStyle(e);
}
function pe(e) {
  return Mh(e) ? (e.nodeName || "").toLowerCase() : "";
}
let zs;
function Sh() {
  if (zs)
    return zs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (zs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), zs) : navigator.userAgent;
}
function Jt(e) {
  return e instanceof dt(e).HTMLElement;
}
function Ct(e) {
  return e instanceof dt(e).Element;
}
function Mh(e) {
  return e instanceof dt(e).Node;
}
function yl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot;
}
function hr(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function jf(e) {
  return ["table", "td", "th"].includes(pe(e));
}
function ho(e) {
  const t = /firefox/i.test(Sh()), n = Rt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Th() {
  return !/^((?!chrome|android).)*safari/i.test(Sh());
}
function ma(e) {
  return ["html", "body", "#document"].includes(pe(e));
}
const vl = Math.min, Vn = Math.max, Mi = Math.round;
function Eh(e) {
  const t = Rt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = Mi(n) !== i || Mi(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Nh(e) {
  return Ct(e) ? e : e.contextElement;
}
const Ah = { x: 1, y: 1 };
function nn(e) {
  const t = Nh(e);
  if (!Jt(t))
    return Ah;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Eh(t);
  let o = (r ? Mi(n.width) : n.width) / s, a = (r ? Mi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Le(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Nh(e);
  let l = Ah;
  t && (s ? Ct(s) && (l = nn(s)) : l = nn(e));
  const h = a ? dt(a) : window, c = !Th() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, p = o.width / l.x, g = o.height / l.y;
  if (a) {
    const y = dt(a), w = s && Ct(s) ? dt(s) : s;
    let v = y.frameElement;
    for (; v && s && w !== y; ) {
      const _ = nn(v), b = v.getBoundingClientRect(), T = getComputedStyle(v);
      b.x += (v.clientLeft + parseFloat(T.paddingLeft)) * _.x, b.y += (v.clientTop + parseFloat(T.paddingTop)) * _.y, d *= _.x, u *= _.y, p *= _.x, g *= _.y, d += b.x, u += b.y, v = dt(v).frameElement;
    }
  }
  return { width: p, height: g, top: u, right: d + p, bottom: u + g, left: d, x: d, y: u };
}
function de(e) {
  return ((Mh(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function dr(e) {
  return Ct(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Rh(e) {
  return Le(de(e)).left + dr(e).scrollLeft;
}
function Xf(e, t, n) {
  const s = Jt(t), i = de(t), r = Le(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((pe(t) !== "body" || hr(i)) && (o = dr(t)), Jt(t)) {
      const l = Le(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Rh(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function ts(e) {
  if (pe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (yl(e) ? e.host : null) || de(e);
  return yl(t) ? t.host : t;
}
function wl(e) {
  return Jt(e) && Rt(e).position !== "fixed" ? e.offsetParent : null;
}
function _l(e) {
  const t = dt(e);
  let n = wl(e);
  for (; n && jf(n) && Rt(n).position === "static"; )
    n = wl(n);
  return n && (pe(n) === "html" || pe(n) === "body" && Rt(n).position === "static" && !ho(n)) ? t : n || function(s) {
    let i = ts(s);
    for (; Jt(i) && !ma(i); ) {
      if (ho(i))
        return i;
      i = ts(i);
    }
    return null;
  }(e) || t;
}
function Ph(e) {
  const t = ts(e);
  return ma(t) ? e.ownerDocument.body : Jt(t) && hr(t) ? t : Ph(t);
}
function Un(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ph(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = dt(s);
  return i ? t.concat(r, r.visualViewport || [], hr(s) ? s : []) : t.concat(s, Un(s));
}
function bl(e, t, n) {
  return t === "viewport" ? ki(function(s, i) {
    const r = dt(s), o = de(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = Th();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : Ct(t) ? function(s, i) {
    const r = Le(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Jt(s) ? nn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : ki(function(s) {
    var i;
    const r = de(s), o = dr(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Vn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Vn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Rh(s);
    const d = -o.scrollTop;
    return Rt(a || r).direction === "rtl" && (c += Vn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(de(e)));
}
const Jf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Un(h).filter((w) => Ct(w) && pe(w) !== "body"), p = null;
    const g = Rt(h).position === "fixed";
    let y = g ? ts(h) : h;
    for (; Ct(y) && !ma(y); ) {
      const w = Rt(y), v = ho(y);
      (g ? v || p : v || w.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = w : u = u.filter((_) => _ !== y), y = ts(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = bl(t, c, i);
    return h.top = Vn(d.top, h.top), h.right = vl(d.right, h.right), h.bottom = vl(d.bottom, h.bottom), h.left = Vn(d.left, h.left), h;
  }, bl(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Jt(n), r = de(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((pe(n) !== "body" || hr(r)) && (o = dr(n)), Jt(n))) {
    const h = Le(n);
    a = nn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ct, getDimensions: function(e) {
  return Eh(e);
}, getOffsetParent: _l, getDocumentElement: de, getScale: nn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || _l, r = this.getDimensions;
  return { reference: Xf(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Rt(e).direction === "rtl" };
function Zf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...Ct(e) ? Un(e) : e.contextElement ? Un(e.contextElement) : [], ...Un(t)] : [];
  h.forEach((p) => {
    l && p.addEventListener("scroll", n, { passive: !0 }), r && p.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let p = !0;
    d = new ResizeObserver(() => {
      p || n(), p = !1;
    }), Ct(e) && !a && d.observe(e), Ct(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? Le(e) : null;
  return a && function p() {
    const g = Le(e);
    !u || g.x === u.x && g.y === u.y && g.width === u.width && g.height === u.height || n(), u = g, c = requestAnimationFrame(p);
  }(), n(), () => {
    var p;
    h.forEach((g) => {
      l && g.removeEventListener("scroll", n), r && g.removeEventListener("resize", n);
    }), (p = d) == null || p.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const Qf = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Jf, ...n }, r = { ...i.platform, _c: s };
  return Wf(e, t, { ...i, platform: r });
};
var ga = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (ga(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, De = (e, t, n, s) => (ga(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), At = (e, t, n) => (ga(e, t, "access private method"), n), qn, Gn, In, Xe, lt, uo, Ti, ur, ya, va, Lh, fo, Dh, wa, Ih, _a, Wh, ba, Oh, po, Hh, Ca, Bh, Yn, mo, zh;
const Je = class extends mt {
  constructor() {
    super(...arguments), X(this, ur), X(this, va), X(this, fo), X(this, wa), X(this, _a), X(this, ba), X(this, po), X(this, Ca), X(this, mo), X(this, qn, !1), X(this, Gn, void 0), X(this, In, 0), X(this, Xe, void 0), X(this, lt, void 0), X(this, uo, void 0), X(this, Ti, void 0), this.hideLater = () => {
      U(this, Yn).call(this), De(this, In, window.setTimeout(this.hide.bind(this), 100));
    }, X(this, Yn, () => {
      clearTimeout(U(this, In)), De(this, In, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Xe)) == null ? void 0 : e.classList.contains(Je.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Xe) || At(this, fo, Dh).call(this);
  }
  get trigger() {
    return U(this, uo) || this.element;
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
    return this.setOptions(e), !U(this, qn) && this.isHover && At(this, mo, zh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Je.CLASS_SHOW), At(this, po, Hh).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, Ti)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Xe)) == null || t.classList.remove(Je.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, qn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Yn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e = {}) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e;
    if (t) {
      const n = this.getAll(), s = new Set(t);
      for (const i of n)
        s.has(i.element) || i.hide();
    }
  }
};
let ft = Je;
qn = /* @__PURE__ */ new WeakMap();
Gn = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
ur = /* @__PURE__ */ new WeakSet();
ya = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
va = /* @__PURE__ */ new WeakSet();
Lh = function() {
  const e = At(this, ur, ya).call(this);
  return De(this, lt, document.createElement("div")), U(this, lt).style.position = this.options.strategy, U(this, lt).style.width = `${e}px`, U(this, lt).style.height = `${e}px`, U(this, lt).style.transform = "rotate(45deg)", U(this, lt);
};
fo = /* @__PURE__ */ new WeakSet();
Dh = function() {
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
  if (this.options.arrow && (t == null || t.append(At(this, va, Lh).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), De(this, Xe, t), t;
};
wa = /* @__PURE__ */ new WeakSet();
Ih = function() {
  var i;
  const e = At(this, ur, ya).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Kf(e), Yf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, lt) && ((i = s.middleware) == null || i.push(Ff({ element: U(this, lt) }))), s;
};
_a = /* @__PURE__ */ new WeakSet();
Wh = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
ba = /* @__PURE__ */ new WeakSet();
Oh = function(e) {
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
po = /* @__PURE__ */ new WeakSet();
Hh = function() {
  const e = At(this, wa, Ih).call(this), t = At(this, Ca, Bh).call(this);
  De(this, Ti, Zf(t, this.tooltip, () => {
    this.element && Qf(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = At(this, _a, Wh).call(this, o);
      if (i.arrow && U(this, lt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, lt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...At(this, ba, Oh).call(this, o)
        });
      }
    });
  }));
};
Ca = /* @__PURE__ */ new WeakSet();
Bh = function() {
  return U(this, Gn) || De(this, Gn, {
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
  }), U(this, Gn);
};
Yn = /* @__PURE__ */ new WeakMap();
mo = /* @__PURE__ */ new WeakSet();
zh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Yn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), De(this, qn, !0);
};
ft.NAME = "tooltip";
ft.TOOLTIP_CLASS = "tooltip";
ft.CLASS_SHOW = "show";
ft.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
ft.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, ft.MENU_SELECTOR);
  if (n) {
    const i = ft.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    ft.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, ft.MENU_SELECTOR);
  if (!n)
    return;
  const s = ft.ensure(n);
  s.isHover && s.show();
});
function tp({
  type: e,
  component: t,
  className: n,
  children: s,
  content: i,
  style: r,
  attrs: o,
  url: a,
  disabled: l,
  active: h,
  icon: c,
  text: d,
  target: u,
  trailingIcon: p,
  hint: g,
  checked: y,
  actions: w,
  show: v,
  level: _ = 0,
  items: b,
  ...T
}) {
  const $ = Array.isArray(w) ? { items: w } : w;
  return $ && ($.btnProps || ($.btnProps = { size: "sm" }), $.className = M("tree-actions not-nested-toggle", $.className)), /* @__PURE__ */ f(
    "div",
    {
      className: M("tree-item-content", n, { disabled: l, active: h }),
      title: g,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${_} * var(--tree-indent, 20px))` }, r),
      "data-level": _,
      ...o,
      ...T,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${b ? " state" : ""}`, children: b ? /* @__PURE__ */ f("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(nt, { icon: c, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, children: d }) : /* @__PURE__ */ f("span", { class: "text", children: d }),
        /* @__PURE__ */ f(bs, { content: i }),
        s,
        $ ? /* @__PURE__ */ f(pt, { ...$ }) : null,
        /* @__PURE__ */ f(nt, { icon: p, className: "tree-trailing-icon" })
      ]
    }
  );
}
let xa = class extends nr {
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
xa.ItemComponents = {
  item: tp
};
xa.NAME = "tree";
class Fh extends q {
}
Fh.NAME = "Tree";
Fh.Component = xa;
class Vh extends mt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? pu(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = m('<ul class="file-list py-1"></ul>');
    const l = m(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = m(`<label class="btn ${r}" for="${t}">${n}</label>`), s) {
        const u = m(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(u);
      }
      const d = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...d);
      return;
    }
    const h = m(`<span class="text-primary">${n}</span>`);
    if (s) {
      const d = m(`<i class="icon icon-${s} mr-1"></i>`);
      h.prepend(d);
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(h).append(l), this.bindDragEvent();
    const c = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...c);
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
    const { name: t, multiple: n, accept: s } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
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
  filterFiles(t) {
    const { accept: n } = this.options;
    if (!n)
      return t;
    const s = n.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: n, limitCount: s, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (n) {
      const h = [];
      for (let c of t) {
        if (s && this.fileMap.size >= s)
          return o == null || o(h), alert(r);
        if (this.currentBytes + c.size > this.limitBytes)
          return o == null || o(h), alert(i);
        c = this.renameDuplicatedFile(c);
        const d = this.createFileItem(c);
        this.itemMap.set(c.name, d), this.$list.append(d), h.push(c);
      }
      o == null || o(h);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), o == null || o(a);
  }
  deleteFileItem(t) {
    var l;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
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
    return this.addFile(t), m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: n, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-rename");
      return new ft(r, { title: n }), r;
    }
    return m("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return r.data("tooltip", new ft(r, { title: n })), r;
    }
    return m("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return m(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return m(`<span class="file-size text-gray">${fu(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: n, deleteBtn: s, showSize: i } = this.options, r = m('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), n && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = m(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s, duplicatedHint: i } = this.options, r = m('<div class="input-group input-rename-container hidden"></div>'), o = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (c) => {
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
    }), a = m("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      const c = r.closest(".file-item"), d = c.find(".file-name");
      if (d.html() === o.val()) {
        r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(o.val());
    }), l = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = m('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(h);
  }
}
Vh.DEFAULT = {
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
class ep extends Vh {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = m(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(m('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = m('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = m('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = m(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = m(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = m('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), n && this.$tip.append(m(`<span class="upload-tip">${n}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = m('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: n } = this.options;
    if (n === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const s = n.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => s.includes(i.type));
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
      m('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(n);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const n = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = m(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return m('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(m(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(n);
  }
  createRenameContainer(t) {
    const { duplicatedHint: n } = this.options, s = m("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
ep.DEFAULT = {
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
var _s, Ki, ji, Xi, Tl;
let np = (Tl = class extends z {
  constructor() {
    super(...arguments);
    L(this, _s, K());
    L(this, Ki, (n) => {
      n.stopPropagation(), rt.show({
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
    L(this, ji, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, Xi, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
  }
  get element() {
    return C(this, _s).current;
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
      fetch(it(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ f(Ko, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ f("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: p } = this.state;
    let { content: g } = this.state;
    return g === void 0 && m.isPlainObject(d) && d.html && (g = /* @__PURE__ */ f("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ f(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${p ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, ji),
        onDragEnd: C(this, Xi),
        "data-id": c,
        ref: C(this, _s),
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Ki), children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          g
        ]
      }
    ) });
  }
}, _s = new WeakMap(), Ki = new WeakMap(), ji = new WeakMap(), Xi = new WeakMap(), Tl);
var Uh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Kt = (e, t, n) => (Uh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _t = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, kt = (e, t, n) => (Uh(e, t, "access private method"), n), Zt, $a, qh, ka, Gh, go, Yh, Sa, Kh, Ei, yo, fr, vo, Ma, jh, wo, _o, pr, Ta;
const Ea = class extends z {
  constructor() {
    super(...arguments), _t(this, $a), _t(this, ka), _t(this, go), _t(this, Sa), _t(this, Ei), _t(this, fr), _t(this, Ma), _t(this, Zt, /* @__PURE__ */ new Map()), this.state = {}, _t(this, wo, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), _t(this, _o, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = kt(this, go, Yh).call(this), { cellHeight: n, grid: s } = this.props, i = Kt(this, Zt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ f(
        np,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Kt(this, wo),
          onDragEnd: Kt(this, _o)
        },
        r.id
      );
    }) }) });
  }
};
let Na = Ea;
Zt = /* @__PURE__ */ new WeakMap();
$a = /* @__PURE__ */ new WeakSet();
qh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
ka = /* @__PURE__ */ new WeakSet();
Gh = function() {
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
    } = i, [u, p] = kt(this, $a, qh).call(this, o);
    return {
      id: `${r}`,
      width: u,
      height: p,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...d
    };
  });
};
go = /* @__PURE__ */ new WeakSet();
Yh = function() {
  Kt(this, Zt).clear();
  let e = 0;
  const t = kt(this, ka, Gh).call(this);
  return t.forEach((n) => {
    kt(this, Sa, Kh).call(this, n);
    const [, s, , i] = Kt(this, Zt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Sa = /* @__PURE__ */ new WeakSet();
Kh = function(e) {
  const t = Kt(this, Zt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = kt(this, Ma, jh).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    kt(this, fr, vo).call(this, n, [s, i, r, o]);
};
Ei = /* @__PURE__ */ new WeakSet();
yo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Kt(this, Zt).entries())
    if (s !== n && kt(t = Ea, pr, Ta).call(t, i, e))
      return !1;
  return !0;
};
fr = /* @__PURE__ */ new WeakSet();
vo = function(e, t) {
  var n;
  Kt(this, Zt).set(e, t);
  for (const [s, i] of Kt(this, Zt).entries())
    s !== e && kt(n = Ea, pr, Ta).call(n, i, t) && (i[1] = t[1] + t[3], kt(this, fr, vo).call(this, s, i));
};
Ma = /* @__PURE__ */ new WeakSet();
jh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (kt(this, Ei, yo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (kt(this, Ei, yo).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
wo = /* @__PURE__ */ new WeakMap();
_o = /* @__PURE__ */ new WeakMap();
pr = /* @__PURE__ */ new WeakSet();
Ta = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
_t(Na, pr);
Na.defaultProps = {
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
class Xh extends q {
}
Xh.NAME = "Dashboard";
Xh.Component = Na;
var le, ce;
class Cl extends z {
  constructor(n) {
    super(n);
    L(this, le, void 0);
    L(this, ce, void 0);
    O(this, le, 0), O(this, ce, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, le) && cancelAnimationFrame(C(this, le)), O(this, le, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), O(this, le, 0);
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
    n && (O(this, ce, typeof n == "string" ? document : n.current), C(this, ce).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), C(this, ce) && C(this, ce).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, y = {};
    return s === "horz" ? (g.height = i, g.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (g.width = i, g.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ f(
      "div",
      {
        className: M("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
le = new WeakMap(), ce = new WeakMap();
const Ni = /* @__PURE__ */ new Map(), Ai = [];
function Jh(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ni.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ni.set(n, e), t != null && t.buildIn && !Ai.includes(n) && Ai.push(n);
}
function He(e, t) {
  Jh(e, t);
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
function Zh(e) {
  return Ni.delete(e);
}
function sp(e) {
  if (typeof e == "string") {
    const t = Ni.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Qh(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = sp(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Qh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function ip(e = [], t = !0) {
  return t && Ai.length && e.unshift(...Ai), e != null && e.length ? Qh([], e, /* @__PURE__ */ new Set()) : [];
}
function td() {
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
function rp(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function xl(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Rr(e, t = !1) {
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
function op(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = xl(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
  }, p = [], g = {};
  let y = !1;
  const w = [], v = {};
  if (n.forEach((_) => {
    const { colTypes: b, onAddCol: T } = _;
    b && Object.entries(b).forEach(([$, E]) => {
      v[$] || (v[$] = []), v[$].push(E);
    }), T && w.push(T);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: b = "", name: T } = _, $ = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: b
    }, E = {
      name: T,
      type: b,
      setting: $,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, A = v[b];
    A && A.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, $) : I;
      W && Object.assign($, W, _);
    });
    const { fixed: P, flex: H, minWidth: k = r, maxWidth: R = o } = $, D = xl($.width || i, i);
    E.flex = H === !0 ? 1 : typeof H == "number" ? H : 0, E.width = rp(D < 1 ? Math.round(D * s) : D, k, R), w.forEach((I) => I.call(e, E)), p.push(E), g[E.name] = E;
    const S = P ? P === "left" ? d : u : c;
    S.list.push(E), S.totalWidth += E.width, S.width = S.totalWidth, E.flex && S.flexList.push(E), typeof $.order == "number" && (y = !0);
  }), y) {
    const _ = (b, T) => (b.setting.order ?? 0) - (T.setting.order ?? 0);
    p.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return Rr(d, !0), Rr(u, !0), c.widthSetting = s - d.width - u.width, Rr(c), {
    list: p,
    map: g,
    left: d,
    center: c,
    right: u
  };
}
function ap({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: h, left: c, top: d, ...u }) {
  var D;
  const p = {
    left: c ?? e.left,
    top: d ?? s.top,
    width: h ?? e.realWidth,
    height: n,
    ...o
  }, { align: g, border: y } = e.setting, w = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...r
  }, v = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], _ = ["dtable-cell-content", e.setting.cellClass], b = (D = s.data) == null ? void 0 : D[e.name], T = [a ?? b ?? ""], $ = i ? i(T, { row: s, col: e, value: b }, j) : T, E = [], A = [], P = {}, H = {};
  let k = "div";
  $ == null || $.forEach((S) => {
    if (typeof S == "object" && S && !Q(S) && ("html" in S || "className" in S || "style" in S || "attrs" in S || "children" in S || "tagName" in S)) {
      const I = S.outer ? E : A;
      S.html ? I.push(/* @__PURE__ */ f("div", { className: M("dtable-cell-html", S.className), style: S.style, dangerouslySetInnerHTML: { __html: S.html }, ...S.attrs ?? {} })) : (S.style && Object.assign(S.outer ? p : w, S.style), S.className && (S.outer ? v : _).push(S.className), S.children && I.push(S.children), S.attrs && Object.assign(S.outer ? P : H, S.attrs)), S.tagName && !S.outer && (k = S.tagName);
    } else
      A.push(S);
  });
  const R = k;
  return /* @__PURE__ */ f(
    "div",
    {
      className: M(v),
      style: p,
      "data-col": e.name,
      "data-row": s.id,
      "data-type": e.type || null,
      ...u,
      ...P,
      children: [
        A.length > 0 && /* @__PURE__ */ f(R, { className: M(_), style: w, ...H, children: A }),
        E
      ]
    }
  );
}
function Pr({
  rows: e = [],
  cols: t,
  rowHeight: n,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: c = ap,
  onRenderCell: d
}) {
  var y;
  const u = Array.isArray(e) ? e : [e], p = ((y = u[0]) == null ? void 0 : y.top) ?? 0, g = u.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: M("dtable-cells", h),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + p }, children: u.reduce((w, v, _) => {
        const b = t.length;
        return t.forEach((T, $) => {
          w.push(
            /* @__PURE__ */ f(
              c,
              {
                className: M(
                  `is-${v.index % 2 ? "odd" : "even"}-row`,
                  $ ? "" : "is-first-in-row",
                  $ === b - 1 ? "is-last-in-row" : "",
                  _ ? "" : "is-first-row",
                  _ === g - 1 ? "is-last-row" : ""
                ),
                col: T,
                row: v,
                top: v.top - p,
                height: n,
                onRenderCell: d
              },
              `${v.index}:${T.name}`
            )
          );
        }), w;
      }, []) })
    }
  );
}
function ed({
  top: e,
  height: t,
  rowHeight: n,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: c,
  onRenderCell: d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ f(
    Pr,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: n,
      onRenderCell: d
    },
    "left"
  ));
  let p = null;
  r.list.length && (p = /* @__PURE__ */ f(
    Pr,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: n,
      onRenderCell: d
    },
    "center"
  ));
  let g = null;
  return o.list.length && (g = /* @__PURE__ */ f(
    Pr,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: n,
      onRenderCell: d
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: M("dtable-block", h),
      style: { ...c, top: e, height: t },
      children: [
        u,
        p,
        g
      ]
    }
  );
}
var Aa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, N = (e, t, n) => (Aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, G = (e, t, n, s) => (Aa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ht = (e, t, n) => (Aa(e, t, "access private method"), n), Ge, Wn, Ne, Ut, $e, at, zt, Bt, On, oi, Ri, es, ie, Hn, Bn, bo, nd, Co, sd, xo, id, $o, rd, ai, ko, mr, Pi, So, Mo, To, Eo, zn, li, Ra, od, Pa, ad, No, ld;
let La = class extends z {
  constructor(t) {
    super(t), B(this, bo), B(this, Co), B(this, xo), B(this, $o), B(this, ai), B(this, zn), B(this, Ra), B(this, Pa), B(this, No), this.ref = K(), B(this, Ge, 0), B(this, Wn, void 0), B(this, Ne, !1), B(this, Ut, void 0), B(this, $e, void 0), B(this, at, []), B(this, zt, void 0), B(this, Bt, /* @__PURE__ */ new Map()), B(this, On, {}), B(this, oi, void 0), B(this, Ri, []), B(this, es, { in: !1 }), this.updateLayout = () => {
      N(this, Ge) && cancelAnimationFrame(N(this, Ge)), G(this, Ge, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, Ge, 0);
      }));
    }, B(this, ie, (n, s) => {
      s = s || n.type;
      const i = N(this, Bt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, Hn, (n) => {
      N(this, ie).call(this, n, `window_${n.type}`);
    }), B(this, Bn, (n) => {
      N(this, ie).call(this, n, `document_${n.type}`);
    }), B(this, mr, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, at).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, Pi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, So, (n) => {
      var a, l, h;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), N(this, at).forEach((c) => {
          var d;
          (d = c.onHeaderCellClick) == null || d.call(this, n, { colName: r, element: o });
        }));
      else {
        const c = this.layout.visibleRows.find((d) => d.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: c, element: o })) === !0)
            return;
          for (const d of N(this, at))
            if (((h = d.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: c, element: o })) === !0)
              return;
        }
      }
    }), B(this, Mo, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), B(this, To, (n) => {
      const s = m(n.target).closest(".dtable-cell");
      if (!s.length)
        return ht(this, zn, li).call(this, !1);
      ht(this, zn, li).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), B(this, Eo, () => {
      ht(this, zn, li).call(this, !1);
    }), G(this, Wn, t.id ?? `dtable-${Uc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, $e, Object.freeze(ip(t.plugins))), N(this, $e).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(N(this, On), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = N(this, zt)) == null ? void 0 : t.options) || N(this, Ut) || td();
  }
  get plugins() {
    return N(this, at);
  }
  get layout() {
    return N(this, zt);
  }
  get id() {
    return N(this, Wn);
  }
  get data() {
    return N(this, On);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, es);
  }
  componentWillReceiveProps() {
    G(this, Ut, void 0);
  }
  componentDidMount() {
    N(this, Ne) ? this.forceUpdate() : ht(this, ai, ko).call(this), N(this, at).forEach((n) => {
      let { events: s } = n;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", N(this, So)), this.on("keydown", N(this, Mo));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", N(this, To)), this.on("mouseleave", N(this, Eo))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(n), G(this, oi, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, at).forEach((n) => {
      var s;
      (s = n.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    N(this, Ne) ? ht(this, ai, ko).call(this) : N(this, at).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = N(this, oi)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of N(this, Bt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), N(this, Hn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), N(this, Bn)) : t.removeEventListener(s, N(this, ie));
    N(this, at).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), N(this, $e).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), G(this, On, {}), N(this, Bt).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = N(this, Bt).get(t);
    i ? i.push(n) : (N(this, Bt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Hn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Bn)) : (r = this.element) == null || r.addEventListener(t, N(this, ie)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = N(this, Bt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (N(this, Bt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Hn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Bn)) : (o = this.element) == null || o.removeEventListener(t, N(this, ie)));
  }
  emitCustomEvent(t, n) {
    N(this, ie).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (d = s + g), typeof y == "number" && (d = i + y);
    }
    const p = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (p.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (p.scrollTop = u)), Object.keys(p).length ? (this.setState(p, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, p), n == null || n.call(this, !0);
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
    if (!N(this, Ut))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      G(this, zt, void 0);
    else if (s === "options") {
      if (G(this, Ut, void 0), !N(this, zt))
        return;
      G(this, zt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const s = m(n).closest(".dtable-cell");
    if (!s.length)
      return;
    const i = s.attr("data-row"), r = s.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: s[0],
        colName: r,
        rowID: i,
        target: n
      };
  }
  i18n(t, n, s) {
    return tt(N(this, Ri), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = ht(this, No, ld).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      ht(this, bo, nd).call(this, t),
      ht(this, Co, sd).call(this, t),
      ht(this, xo, id).call(this, t),
      ht(this, $o, rd).call(this, t)
    ), N(this, at).forEach((u) => {
      var g;
      const p = (g = u.onRender) == null ? void 0 : g.call(this, t);
      p && (p.style && Object.assign(h, p.style), p.className && c.push(p.className), p.children && d.push(p.children));
    })), /* @__PURE__ */ f(
      "div",
      {
        id: N(this, Wn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Ge = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
es = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
bo = /* @__PURE__ */ new WeakSet();
nd = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      ed,
      {
        className: "dtable-header",
        cols: n,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, mr)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    jo,
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
Co = /* @__PURE__ */ new WeakSet();
sd = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ f(
    ed,
    {
      className: "dtable-body",
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, mr)
    },
    "body"
  );
};
xo = /* @__PURE__ */ new WeakSet();
id = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    jo,
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
$o = /* @__PURE__ */ new WeakSet();
rd = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      Cl,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, Pi),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      Cl,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, Pi),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
ai = /* @__PURE__ */ new WeakSet();
ko = function() {
  var e;
  G(this, Ne, !1), (e = this.options.afterRender) == null || e.call(this), N(this, at).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
mr = /* @__PURE__ */ new WeakMap();
Pi = /* @__PURE__ */ new WeakMap();
So = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakMap();
To = /* @__PURE__ */ new WeakMap();
Eo = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakSet();
li = function(e) {
  const { element: t, options: n } = this;
  if (!t)
    return;
  const s = m(t), i = e ? { in: !0, row: e[0], col: e[1] } : { in: !1 };
  n.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, es);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, es, i);
};
Ra = /* @__PURE__ */ new WeakSet();
od = function() {
  if (N(this, Ut))
    return !1;
  const t = { ...td(), ...N(this, $e).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return G(this, Ut, t), G(this, at, N(this, $e).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), G(this, Ri, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Pa = /* @__PURE__ */ new WeakSet();
ad = function() {
  var P, H;
  const { plugins: e } = this;
  let t = N(this, Ut);
  const n = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((k) => {
    var D;
    const R = (D = k.beforeLayout) == null ? void 0 : D.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, k.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: k } = this;
    if (k)
      i = k.clientWidth;
    else {
      G(this, Ne, !0);
      return;
    }
  }
  const r = op(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (k, R, D) => {
    var I, W;
    const S = { data: D ?? { [a]: k }, id: k, index: h.length, top: 0 };
    if (D || (S.lazy = !0), h.push(S), ((I = t.onAddRow) == null ? void 0 : I.call(this, S, R)) !== !1) {
      for (const V of e)
        if (((W = V.onAddRow) == null ? void 0 : W.call(this, S, R)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let k = 0; k < o; k++)
      c(`${k}`, k);
  else
    Array.isArray(o) && o.forEach((k, R) => {
      typeof k == "object" ? c(`${k[a] ?? ""}`, R, k) : c(`${k ?? ""}`, R);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const k = t.onAddRows.call(this, d);
    k && (d = k);
  }
  for (const k of e) {
    const R = (P = k.onAddRows) == null ? void 0 : P.call(this, d);
    R && (d = R);
  }
  d.forEach((k, R) => {
    u[k.id] = k, k.index = R, k.top = k.index * l;
  });
  const { header: p, footer: g } = t, y = p ? t.headerHeight || l : 0, w = g ? t.footerHeight || l : 0;
  let v = t.height, _ = 0;
  const b = d.length * l, T = y + w + b;
  if (typeof v == "function" && (v = v.call(this, T)), v === "auto")
    _ = T;
  else if (typeof v == "object")
    _ = Math.min(v.max, Math.max(v.min, T));
  else if (v === "100%") {
    const { parent: k } = this;
    if (k)
      _ = k.clientHeight;
    else {
      _ = 0, G(this, Ne, !0);
      return;
    }
  } else
    _ = v;
  const $ = _ - y - w, E = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: b,
    header: p,
    footer: g,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: w,
    cols: r
  }, A = (H = t.onLayout) == null ? void 0 : H.call(this, E);
  A && Object.assign(E, A), e.forEach((k) => {
    if (k.onLayout) {
      const R = k.onLayout.call(this, E);
      R && Object.assign(E, R);
    }
  }), G(this, zt, E);
};
No = /* @__PURE__ */ new WeakSet();
ld = function() {
  (ht(this, Ra, od).call(this) || !N(this, zt)) && ht(this, Pa, ad).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((g) => {
    g.left = s, s += g.realWidth, g.visible = g.left + g.realWidth >= n && g.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: p } = this.options;
  for (let g = h; g < d; g++) {
    const y = o[g];
    y.lazy && p && (y.data = p([y.id])[0], y.lazy = !1), u.push(y);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
La.addPlugin = Jh;
La.removePlugin = Zh;
function lp(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !cd.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function cp(e) {
  return this.state.checkedRows[e] ?? !1;
}
function cd() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function hp() {
  return Object.keys(this.state.checkedRows);
}
function dp(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function $l(e, t, n = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const kl = 'input[type="checkbox"],.dtable-checkbox', up = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: $l
  },
  when: (e) => !!e.checkable,
  options(e) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? e.checkable = t : e.checkable === "auto" && (e.checkable = !!e.cols.some((n) => n.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: lp,
    isRowChecked: cp,
    isAllRowChecked: cd,
    getChecks: hp,
    toggleCheckable: dp
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: $l(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var h;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return e;
    const { checkbox: o } = n.setting, a = typeof o == "function" ? o.call(this, s) : o, l = this.isRowChecked(s);
    if (a) {
      const c = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, s, r === "disabled");
      e.unshift(c), e.push({ outer: !0, className: "has-checkbox" });
    }
    return l && e.push({ outer: !0, className: "is-checked" }), e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var o;
    const { id: s } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      e.unshift(l), e.push({ outer: !0, className: "has-checkbox" });
    }
    return e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest(kl);
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onCellClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (n.closest(kl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, fp = He(up);
var hd = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(hd || {});
function Li(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Li.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Li.call(this, t.parent).level + 1 : 0, t;
}
function pp(e) {
  return e !== void 0 ? Li.call(this, e) : this.data.nestedMap;
}
function mp(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !dd.call(this)), t) {
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
function dd() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function ud(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = ud(e, t, o.children, s + 1)));
  }
  return t;
}
function fd(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, fd(e, r, n, s);
  }), i;
}
function pd(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && pd(e, r.parent, n, s, i);
}
const gp = {
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
        const o = fd(this, i, r, s);
        o != null && o.parent && pd(this, o.parent, r, s, n);
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
    getNestedInfo: pp,
    toggleRow: mp,
    isAllCollapsed: dd,
    getNestedRowInfo: Li
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
    ), ud(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), e;
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
}, yp = He(gp);
function md(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: it(i, t.row.data), ...s, ...r, ...a, children: n });
}
function Da(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : it(e, n);
}
function gd(e, t, n, s) {
  var i;
  return n ? (n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), $t(n, e, s ?? n))) : s;
}
function yd(e, t) {
  const { link: n } = t.col.setting, s = md(n, t, e[0]);
  return s && (e[0] = s), e;
}
function vd(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Da(n, t, e[0])), e;
}
function wd(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function _d(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = gd(s, t, e[0], i), e;
}
function Ao(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : Da(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const vp = {
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
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ f("svg", { width: n, height: n, children: [
          /* @__PURE__ */ f("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ f("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ f("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = _d(e, t, n)), e = wd(e, t), e = vd(e, t), s ? e = Ao(e, t) : e = yd(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = it(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, wp = He(vp, { buildIn: !0 });
function Lr(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ f(qc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, p = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      e[0],
      /* @__PURE__ */ f("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ f("span", { children: c })
    ] }));
  return e;
}
const _p = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Lr
    },
    avatarBtn: {
      onRenderCell: Lr
    },
    avatarName: {
      onRenderCell: Lr
    }
  }
}, bp = He(_p, { buildIn: !0 }), Cp = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ f("a", { href: it(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, xp = He(Cp, { buildIn: !0 }), Dr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, $p = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Dr(t.left.list), Dr(t.center.list), Dr(t.right.list);
  }
}, kp = He($p), Sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: hd,
  avatar: bp,
  checkable: fp,
  group: kp,
  nested: yp,
  renderDatetime: gd,
  renderDatetimeCell: _d,
  renderFormat: Da,
  renderFormatCell: vd,
  renderHtmlCell: Ao,
  renderLink: md,
  renderLinkCell: yd,
  renderMapCell: wd,
  rich: wp,
  sortType: xp
}, Symbol.toStringTag, { value: "Module" }));
class Ms extends q {
}
Ms.NAME = "DTable";
Ms.Component = La;
Ms.definePlugin = He;
Ms.removePlugin = Zh;
Ms.plugins = Sp;
var bd = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sl = (e, t, n) => (bd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Mp = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ml = (e, t, n, s) => (bd(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ye;
const Tp = "nav", ci = '[data-toggle="tab"]', Ep = "active";
class Cd extends mt {
  constructor() {
    super(...arguments), Mp(this, Ye, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(ci);
    let i = t ? m(t).closest(ci) : s.filter(`.${Ep}`);
    if (!i.length && (i = n.find(ci).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = m(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Sl(this, Ye) && clearTimeout(Sl(this, Ye)), Ml(this, Ye, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Ml(this, Ye, 0);
    }, 10)));
  }
}
Ye = /* @__PURE__ */ new WeakMap();
Cd.NAME = "Tabs";
m(document).on("click.tabs.zui", ci, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Tp}`);
  n.length && Cd.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  gc as ActionMenu,
  vc as ActionMenuNested,
  Gc as Avatar,
  Yc as BtnGroup,
  Jc as ColorPicker,
  mt as Component,
  q as ComponentFromReact,
  rt as ContextMenu,
  bs as CustomContent,
  jo as CustomRender,
  Ms as DTable,
  Xh as Dashboard,
  ih as DatePicker,
  Yt as Dropdown,
  Vc as EventBus,
  hc as HElement,
  Ko as HtmlContent,
  nt as Icon,
  wc as Menu,
  Bc as Messager,
  oh as Modal,
  te as ModalBase,
  hh as ModalTrigger,
  uh as Nav,
  fh as Pager,
  ph as Pick,
  _h as Picker,
  bh as Popovers,
  Fc as ProgressCircle,
  z as ReactComponent,
  xh as SearchBox,
  Zn as TIME_DAY,
  Cd as Tabs,
  sh as TimePicker,
  $h as Toolbar,
  ft as Tooltip,
  Fh as Tree,
  Vh as Upload,
  ep as UploadImgs,
  pf as addDate,
  m as cash,
  M as classes,
  br as componentsMap,
  pu as convertBytes,
  wu as create,
  Z as createDate,
  Eu as createPortal,
  K as createRef,
  uu as deepGet,
  du as deepGetPath,
  fi as delay,
  Ap as dom,
  fu as formatBytes,
  $t as formatDate,
  Gp as formatDateSpan,
  it as formatString,
  Kl as getClassList,
  j as h,
  Rp as hh,
  $u as htm,
  tt as i18n,
  ks as isSameDay,
  Zc as isSameMonth,
  Fp as isSameWeek,
  jr as isSameYear,
  Vp as isToday,
  qp as isTomorrow,
  Q as isValidElement,
  Up as isYesterday,
  ol as nativeEvents,
  Xn as render,
  dc as renderCustomContent,
  Su as renderCustomResult,
  af as store,
  jl as storeData,
  vu as takeData
};
//# sourceMappingURL=zui.js.map
