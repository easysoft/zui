var xr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var x = (e, t, n) => (xr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, O = (e, t, n, s) => (xr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var Dt = (e, t, n) => (xr(e, t, "access private method"), n);
const Xt = document, mi = window, Dl = Xt.documentElement, ze = Xt.createElement.bind(Xt), Il = ze("div"), Cr = ze("table"), Nd = ze("tbody"), Va = ze("tr"), { isArray: nr, prototype: Wl } = Array, { concat: Rd, filter: Wo, indexOf: Ol, map: Hl, push: Ad, slice: Bl, some: Oo, splice: Pd } = Wl, Ld = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Dd = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Id = /<.+>/, Wd = /^\w+$/;
function Ho(e, t) {
  const n = Od(t);
  return !e || !n && !Ie(t) && !Y(t) ? [] : !n && Dd.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Wd.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class sr {
  constructor(t, n) {
    if (!t)
      return;
    if (zr(t))
      return t;
    let s = t;
    if (st(t)) {
      const i = n || Xt;
      if (s = Ld.test(t) && Ie(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Id.test(t) ? Ul(t) : zr(i) ? i.find(t) : st(i) ? m(i).find(t) : Ho(t, i), !s)
        return;
    } else if (Fe(t))
      return this.ready(t);
    (s.nodeType || s === mi) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new sr(t, n);
  }
}
const C = sr.prototype, m = C.init;
m.fn = m.prototype = C;
C.length = 0;
C.splice = Pd;
typeof Symbol == "function" && (C[Symbol.iterator] = Wl[Symbol.iterator]);
function zr(e) {
  return e instanceof sr;
}
function wn(e) {
  return !!e && e === e.window;
}
function Ie(e) {
  return !!e && e.nodeType === 9;
}
function Od(e) {
  return !!e && e.nodeType === 11;
}
function Y(e) {
  return !!e && e.nodeType === 1;
}
function Hd(e) {
  return !!e && e.nodeType === 3;
}
function Bd(e) {
  return typeof e == "boolean";
}
function Fe(e) {
  return typeof e == "function";
}
function st(e) {
  return typeof e == "string";
}
function ct(e) {
  return e === void 0;
}
function ts(e) {
  return e === null;
}
function zl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Bo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = wn;
m.isFunction = Fe;
m.isArray = nr;
m.isNumeric = zl;
m.isPlainObject = Bo;
function J(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Bo(e)) {
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
C.each = function(e) {
  return J(this, e);
};
C.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function gi(...e) {
  const t = Bd(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return gi(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (nr(r[o]) || Bo(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), gi(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = gi;
C.extend = function(e) {
  return gi(C, e);
};
const zd = /\S+/g;
function ir(e) {
  return st(e) ? e.match(zd) || [] : [];
}
C.toggleClass = function(e, t) {
  const n = ir(e), s = !ct(t);
  return this.each((i, r) => {
    Y(r) && J(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(e) {
  return this.toggleClass(e, !0);
};
C.removeAttr = function(e) {
  const t = ir(e);
  return this.each((n, s) => {
    Y(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Fd(e, t) {
  if (e) {
    if (st(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return ts(n) ? void 0 : n;
      }
      return ct(t) ? this : ts(t) ? this.removeAttr(e) : this.each((n, s) => {
        Y(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
C.attr = Fd;
C.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
C.hasClass = function(e) {
  return !!e && Oo.call(this, (t) => Y(t) && t.classList.contains(e));
};
C.get = function(e) {
  return ct(e) ? Bl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
C.eq = function(e) {
  return m(this.get(e));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function Ud(e) {
  return ct(e) ? this.get().map((t) => Y(t) || Hd(t) ? t.textContent : "").join("") : this.each((t, n) => {
    Y(n) && (n.textContent = e);
  });
}
C.text = Ud;
function Jt(e, t, n) {
  if (!Y(e))
    return;
  const s = mi.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function Rt(e, t) {
  return parseInt(Jt(e, t), 10) || 0;
}
function qa(e, t) {
  return Rt(e, `border${t ? "Left" : "Top"}Width`) + Rt(e, `padding${t ? "Left" : "Top"}`) + Rt(e, `padding${t ? "Right" : "Bottom"}`) + Rt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const $r = {};
function Vd(e) {
  if ($r[e])
    return $r[e];
  const t = ze(e);
  Xt.body.insertBefore(t, null);
  const n = Jt(t, "display");
  return Xt.body.removeChild(t), $r[e] = n !== "none" ? n : "block";
}
function Ga(e) {
  return Jt(e, "display") === "none";
}
function Fl(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function rr(e) {
  return st(e) ? (t, n) => Fl(n, e) : Fe(e) ? e : zr(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
C.filter = function(e) {
  const t = rr(e);
  return m(Wo.call(this, (n, s) => t.call(n, s, n)));
};
function ye(e, t) {
  return t ? e.filter(t) : e;
}
C.detach = function(e) {
  return ye(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const qd = /^\s*<(\w+)[^>]*>/, Gd = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ya = {
  "*": Il,
  tr: Nd,
  td: Va,
  th: Va,
  thead: Cr,
  tbody: Cr,
  tfoot: Cr
};
function Ul(e) {
  if (!st(e))
    return [];
  if (Gd.test(e))
    return [ze(RegExp.$1)];
  const t = qd.test(e) && RegExp.$1, n = Ya[t] || Ya["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Ul;
C.has = function(e) {
  const t = st(e) ? (n, s) => Ho(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
C.not = function(e) {
  const t = rr(e);
  return this.filter((n, s) => (!st(e) || Y(s)) && !t.call(s, n, s));
};
function te(e, t, n, s) {
  const i = [], r = Fe(t), o = s && rr(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Ad.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Vl(e) {
  return e.multiple && e.options ? te(Wo.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Yd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || Zl.test(n.type)) {
      const i = nr(e) ? Hl.call(e, String) : ts(e) ? [] : [String(e)];
      s ? J(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ct(e) || ts(e) ? "" : e;
  }) : this[0] && Vl(this[0]);
}
C.val = Yd;
C.is = function(e) {
  const t = rr(e);
  return Oo.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Lt(e) {
  return e.length > 1 ? Wo.call(e, (t, n, s) => Ol.call(s, t) === n) : e;
}
m.unique = Lt;
C.add = function(e, t) {
  return m(Lt(this.get().concat(m(e, t).get())));
};
C.children = function(e) {
  return ye(m(Lt(te(this, (t) => t.children))), e);
};
C.parent = function(e) {
  return ye(m(Lt(te(this, "parentNode"))), e);
};
C.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return Ol.call(n, t);
};
C.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
C.siblings = function(e) {
  return ye(m(Lt(te(this, (t) => m(t).parent().children().not(t)))), e);
};
C.find = function(e) {
  return m(Lt(te(this, (t) => Ho(e, t))));
};
const Kd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, jd = /^$|^module$|\/(java|ecma)script/i, Xd = ["type", "src", "nonce", "noModule"];
function Jd(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (jd.test(i.type) && Dl.contains(i)) {
      const r = ze("script");
      r.text = i.textContent.replace(Kd, ""), J(Xd, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Zd(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Jd(t, e.ownerDocument);
}
function ve(e, t, n, s, i, r, o, a) {
  return J(e, (l, h) => {
    J(m(h), (c, d) => {
      J(m(t), (u, p) => {
        const g = n ? d : p, y = n ? p : d, w = n ? c : u;
        Zd(g, w ? y.cloneNode(!0) : y, s, i, !w);
      }, a);
    }, o);
  }, r), t;
}
C.after = function() {
  return ve(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return ve(arguments, this, !1, !1, !0);
};
function Qd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ct(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    Y(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
C.html = Qd;
C.appendTo = function(e) {
  return ve(arguments, this, !0, !1, !0);
};
C.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
C.before = function() {
  return ve(arguments, this, !1, !0);
};
C.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
C.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
C.insertAfter = function(e) {
  return ve(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(e) {
  return ve(arguments, this, !0, !0);
};
C.prepend = function() {
  return ve(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(e) {
  return ve(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return m(Lt(te(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
C.next = function(e, t, n) {
  return ye(m(Lt(te(this, "nextElementSibling", t, n))), e);
};
C.nextAll = function(e) {
  return this.next(e, !0);
};
C.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
C.parents = function(e, t) {
  return ye(m(Lt(te(this, "parentElement", !0, t))), e);
};
C.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
C.prev = function(e, t, n) {
  return ye(m(Lt(te(this, "previousElementSibling", t, n))), e);
};
C.prevAll = function(e) {
  return this.prev(e, !0);
};
C.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
C.map = function(e) {
  return m(Rd.apply([], Hl.call(this, (t, n) => e.call(t, n, t))));
};
C.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Jt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Dl;
  });
};
C.slice = function(e, t) {
  return m(Bl.call(this, e, t));
};
const tu = /-([a-z])/g;
function zo(e) {
  return e.replace(tu, (t, n) => n.toUpperCase());
}
C.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Xt.readyState !== "loading" ? t() : Xt.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
C.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + mi.pageYOffset,
    left: t.left + mi.pageXOffset
  };
};
C.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Jt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Jt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && Y(i)) {
      const r = m(i).offset();
      n.top -= r.top + Rt(i, "borderTopWidth"), n.left -= r.left + Rt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - Rt(e, "marginTop"),
    left: n.left - Rt(e, "marginLeft")
  };
};
const ql = {
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
C.prop = function(e, t) {
  if (e) {
    if (st(e))
      return e = ql[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
C.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[ql[e] || e];
  });
};
const eu = /^--/;
function Fo(e) {
  return eu.test(e);
}
const kr = {}, { style: nu } = Il, su = ["webkit", "moz", "ms"];
function iu(e, t = Fo(e)) {
  if (t)
    return e;
  if (!kr[e]) {
    const n = zo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${su.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in nu)
        return kr[e] = o, !1;
    });
  }
  return kr[e];
}
const ru = {
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
function Gl(e, t, n = Fo(e)) {
  return !n && !ru[e] && zl(t) ? `${t}px` : t;
}
function ou(e, t) {
  if (st(e)) {
    const n = Fo(e);
    return e = iu(e, n), arguments.length < 2 ? this[0] && Jt(this[0], e, n) : e ? (t = Gl(e, t, n), this.each((s, i) => {
      Y(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
C.css = ou;
function Yl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const au = /^\s+|\s+$/;
function Ka(e, t) {
  const n = e.dataset[t] || e.dataset[zo(t)];
  return au.test(n) ? n : Yl(JSON.parse, n);
}
function lu(e, t, n) {
  n = Yl(JSON.stringify, n), e.dataset[zo(t)] = n;
}
function cu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Ka(this[0], s);
    return n;
  }
  if (st(e))
    return arguments.length < 2 ? this[0] && Ka(this[0], e) : ct(t) ? this : this.each((n, s) => {
      lu(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
C.data = cu;
function Kl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
J([!0, !1], (e, t) => {
  J(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    C[i] = function(r) {
      if (this[0])
        return wn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ie(this[0]) ? Kl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Rt(this[0], `margin${n ? "Top" : "Left"}`) + Rt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  C[n] = function(s) {
    if (!this[0])
      return ct(s) ? void 0 : this;
    if (!arguments.length)
      return wn(this[0]) ? this[0].document.documentElement[`client${t}`] : Ie(this[0]) ? Kl(this[0], t) : this[0].getBoundingClientRect()[n] - qa(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = Jt(o, "boxSizing");
      o.style[n] = Gl(n, i + (a === "border-box" ? qa(o, !e) : 0));
    });
  };
});
const ja = "___cd";
C.toggle = function(e) {
  return this.each((t, n) => {
    if (!Y(n))
      return;
    const s = Ga(n);
    (ct(e) ? s : e) ? (n.style.display = n[ja] || "", Ga(n) && (n.style.display = Vd(n.tagName))) : s || (n[ja] = Jt(n, "display"), n.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Xa = "___ce", Uo = ".", Vo = { focus: "focusin", blur: "focusout" }, jl = { mouseenter: "mouseover", mouseleave: "mouseout" }, hu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function qo(e) {
  return jl[e] || Vo[e] || e;
}
function Go(e) {
  const t = e.split(Uo);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(e, t) {
  if (st(e)) {
    const [s, i] = Go(e), r = qo(s);
    if (!r)
      return this;
    const o = hu.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Xt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(Uo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Vo;
  return this.each((s, i) => {
    n && Fe(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Xl(e) {
  return e[Xa] = e[Xa] || {};
}
function du(e, t, n, s, i) {
  const r = Xl(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function Jl(e, t) {
  return !t || !Oo.call(t, (n) => e.indexOf(n) < 0);
}
function yi(e, t, n, s, i) {
  const r = Xl(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Jl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      yi(e, t, n, s, i);
}
C.off = function(e, t, n) {
  if (ct(e))
    this.each((s, i) => {
      !Y(i) && !Ie(i) && !wn(i) || yi(i);
    });
  else if (st(e))
    Fe(t) && (n = t, t = ""), J(ir(e), (s, i) => {
      const [r, o] = Go(i), a = qo(r);
      this.each((l, h) => {
        !Y(h) && !Ie(h) && !wn(h) || yi(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
C.remove = function(e) {
  return ye(this, e).detach().off(), this;
};
C.replaceWith = function(e) {
  return this.before(e).remove();
};
C.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function uu(e, t, n, s, i) {
  if (!st(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return st(t) || (ct(t) || ts(t) ? t = "" : ct(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Fe(s) || (s = n, n = void 0), s ? (J(ir(e), (r, o) => {
    const [a, l] = Go(o), h = qo(a), c = a in jl, d = a in Vo;
    h && this.each((u, p) => {
      if (!Y(p) && !Ie(p) && !wn(p))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Jl(l, y.namespace.split(Uo)) || !t && (d && (y.target !== p || y.___ot === h) || c && y.relatedTarget && p.contains(y.relatedTarget)))
          return;
        let w = p;
        if (t) {
          let _ = y.target;
          for (; !Fl(_, t); )
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
        i && yi(p, h, l, t, g), v === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || m.guid++, du(p, h, l, t, g);
    });
  }), this) : this;
}
C.on = uu;
function fu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
C.one = fu;
const pu = /\r?\n/g;
function mu(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(pu, `\r
`))}`;
}
const gu = /file|reset|submit|button|image/i, Zl = /radio|checkbox/i;
C.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    J(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || gu.test(i.type) || Zl.test(i.type) && !i.checked)
        return;
      const r = Vl(i);
      if (!ct(r)) {
        const o = nr(r) ? r : [r];
        J(o, (a, l) => {
          e += mu(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function yu(e, t) {
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
function vu(e, t, n) {
  try {
    const s = yu(e, t), i = s[s.length - 1];
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
var Yo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Yo || {});
function wu(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Yo[n]).toFixed(t) + n);
}
const _u = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Yo[s];
};
let Ko = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ae;
function bu() {
  return Ko;
}
function xu(e) {
  Ko = e.toLowerCase();
}
function Ql(e, t) {
  ae || (ae = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ae, e);
}
function tt(e, t, n, s, i, r) {
  Array.isArray(e) ? ae && e.unshift(ae) : e = ae ? [ae, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Ko;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ae ? `${r}.${t}` : t;
    if (a = vu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? it(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Cu(e, t, n, s) {
  return tt(void 0, e, t, n, s);
}
tt.addLang = Ql;
tt.getLang = Cu;
tt.getCode = bu;
tt.setCode = xu;
Ql({
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
function tc(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? tc(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const k = (...e) => tc(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = k;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(e, ...t));
  });
};
const Mn = /* @__PURE__ */ new WeakMap();
function ec(e, t, n) {
  const s = Mn.has(e), i = s ? Mn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), Mn.set(e, i)) : Mn.delete(e);
}
function $u(e, t) {
  let n = Mn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? $u(this[0], t) : this.each((s, i) => ec(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => ec(n, e));
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
const vi = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), Sr = /* @__PURE__ */ new Map();
function ku(e, t, n) {
  const { zui: s } = window;
  Sr.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && Sr.set(r.toLowerCase(), s[r]);
  });
  const i = Sr.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
m(() => {
  m("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, ku(n, this, t);
  });
});
function jo(e, t) {
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
    jo(n, e);
  });
};
function Xo(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    Xo(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    Xo(n, e);
  });
};
function nc(e, t) {
  const n = m(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && jo(o, { viewport: o.getBoundingClientRect() }) || o.scrollIntoView(i);
  }), n;
}
m.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    nc(n, e);
  });
};
const Wp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: jo,
  runJS: Xo,
  scrollIntoView: nc
}, Symbol.toStringTag, { value: "Module" }));
var or, F, sc, Q, Se, Ja, ic, Fr, wi = {}, rc = [], Su = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Jo = Array.isArray;
function ue(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function oc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function j(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? or.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Ys(e, o, s, i, null);
}
function Ys(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++sc };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function K() {
  return { current: null };
}
function bn(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function es(e, t) {
  if (t == null)
    return e.__ ? es(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? es(e) : null;
}
function ac(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ac(e);
  }
}
function Za(e) {
  (!e.__d && (e.__d = !0) && Se.push(e) && !_i.__r++ || Ja !== F.debounceRendering) && ((Ja = F.debounceRendering) || ic)(_i);
}
function _i() {
  var e, t, n, s, i, r, o, a;
  for (Se.sort(Fr); e = Se.shift(); )
    e.__d && (t = Se.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ue({}, r)).__v = r.__v + 1, Zo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? es(r), r.__h), uc(s, r), r.__e != o && ac(r)), Se.length > t && Se.sort(Fr));
  _i.__r = 0;
}
function lc(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, p, g, y, w, v = s && s.__k || rc, _ = v.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Ys(null, p, null, null, p) : Jo(p) ? Ys(bn, { children: p }, null, null, null) : p.__b > 0 ? Ys(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
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
      Zo(e, p, u = u || wi, i, r, o, a, l, h), g = p.__e, (d = p.ref) && u.ref != d && (w || (w = []), u.ref && w.push(u.ref, null, p), w.push(d, p.__c || g, p)), g != null ? (y == null && (y = g), typeof p.type == "function" && p.__k === u.__k ? p.__d = l = cc(p, l, e) : l = hc(e, p, u, v, g, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = es(u));
    }
  for (n.__e = y, c = _; c--; )
    v[c] != null && (typeof n.type == "function" && v[c].__e != null && v[c].__e == n.__d && (n.__d = dc(s).nextSibling), pc(v[c], v[c]));
  if (w)
    for (c = 0; c < w.length; c++)
      fc(w[c], w[++c], w[++c]);
}
function cc(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? cc(s, t, n) : hc(n, s, s, i, s.__e, t));
  return t;
}
function hc(e, t, n, s, i, r) {
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
function dc(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = dc(n)))
        return s;
  }
  return null;
}
function Mu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || bi(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || bi(e, r, t[r], n[r], s);
}
function Qa(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Su.test(t) ? n : n + "px";
}
function bi(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Qa(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Qa(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? el : tl, r) : e.removeEventListener(t, r ? el : tl, r);
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
function tl(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function el(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Zo(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, p, g, y, w, v, _, b, E, $, T, R, P = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = F.__b) && h(t);
  try {
    t:
      if (typeof P == "function") {
        if (w = t.props, v = (h = P.contextType) && s[h.__c], _ = h ? v ? v.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? t.__c = c = new P(w, _) : (t.__c = c = new z(w, _), c.constructor = P, c.render = Eu), v && v.sub(c), c.props = w, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ue({}, c.__s)), ue(c.__s, P.getDerivedStateFromProps(w, c.__s))), u = c.props, p = c.state, c.__v = t, d)
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
        if (c.context = _, c.props = w, c.__P = e, E = F.__r, $ = 0, "prototype" in P && P.prototype.render) {
          for (c.state = c.__s, c.__d = !1, E && E(t), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, E && E(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++$ < 25);
        c.state = c.__s, c.getChildContext != null && (s = ue(ue({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (g = c.getSnapshotBeforeUpdate(u, p)), lc(e, Jo(R = h != null && h.type === bn && h.key == null ? h.props.children : h) ? R : [R], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Tu(n.__e, t, n, s, i, r, o, l);
    (h = F.diffed) && h(t);
  } catch (H) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), F.__e(H, t, n);
  }
}
function uc(e, t) {
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
function Tu(e, t, n, s, i, r, o, a) {
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
    if (r = r && or.call(e.childNodes), h = (d = n.props || wi).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, g = 0; g < e.attributes.length; g++)
          d[e.attributes[g].name] = e.attributes[g].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Mu(e, u, d, i, a), c)
      t.__k = [];
    else if (lc(e, Jo(g = t.props.children) ? g : [g], t, n, s, i && p !== "foreignObject", r, o, r ? r[0] : n.__k && es(n, 0), a), r != null)
      for (g = r.length; g--; )
        r[g] != null && oc(r[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || p === "progress" && !g || p === "option" && g !== d.value) && bi(e, "value", g, d.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && bi(e, "checked", g, d.checked, !1));
  }
  return e;
}
function fc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    F.__e(s, n);
  }
}
function pc(e, t, n) {
  var s, i;
  if (F.unmount && F.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || fc(s, null, t)), (s = e.__c) != null) {
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
      s[i] && pc(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || oc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Eu(e, t, n) {
  return this.constructor(e, n);
}
function ns(e, t, n) {
  var s, i, r;
  F.__ && F.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Zo(t, e = (!s && n || t).__k = j(bn, null, [e]), i || wi, wi, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? or.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), uc(r, e);
}
or = rc.slice, F = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, sc = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ue({}, this.state), typeof e == "function" && (e = e(ue({}, n), this.props)), e && ue(n, e), e != null && this.__v && (t && this._sb.push(t), Za(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Za(this));
}, z.prototype.render = bn, Se = [], ic = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Fr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, _i.__r = 0;
var mc = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, mc(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, nl = /* @__PURE__ */ new Map();
function Nu(e) {
  var t = nl.get(this);
  return t || (t = /* @__PURE__ */ new Map(), nl.set(this, t)), (t = mc(this, t.get(e) || (t.set(e, t = function(n) {
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
const Op = Nu.bind(j);
function gc(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return j(t, { ref: o, class: k(n), style: s, ...a, ...r }, i);
}
var Ru = 0;
function f(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ru, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(h), h;
}
var ls;
class Qo extends z {
  constructor() {
    super(...arguments);
    L(this, ls, K());
  }
  componentDidMount() {
    this.props.executeScript && m(x(this, ls).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ f(gc, { forwardRef: x(this, ls), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
ls = new WeakMap();
function Au(e) {
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
        /* @__PURE__ */ f("div", { className: k(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(u, v.style), v.className && d.push(v.className), v.children && p.push(v.children), v.attrs && Object.assign(c, v.attrs)) : p.push(v));
    });
  }), g.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(d),
    style: u,
    ...c
  }, p];
}
function ta({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Au(t);
  return j(e, n, ...s);
}
function yc(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => yc(s, t, n)) : Q(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ f(Qo, { ...e }) : /* @__PURE__ */ f(gc, { ...e }) : e;
}
function Ms(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = yc(t, n, s);
  return i == null || typeof i == "boolean" ? null : Q(i) ? i : /* @__PURE__ */ f(bn, { children: i });
}
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Q(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(t.startsWith("icon-") ? t : `icon-${t}`);
  else if (typeof t == "object") {
    const { className: r, ...o } = t;
    i.push(r), Object.assign(s, o);
  }
  return /* @__PURE__ */ f("i", { className: k(i), ...s });
}
function Pu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Lu(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    ns(null, t._temp), t._temp = null, t._container = null;
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
  }), ns(
    j(Pu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Du(e, t) {
  const n = j(Lu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var vc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, qe = (e, t, n) => (vc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Is = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (vc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), be, Tn, Ks, js;
const wc = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    Is(this, be, void 0), Is(this, Tn, void 0), Is(this, Ks, void 0), Is(this, js, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Ge(this, Ks, a), Ge(this, Tn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ge(this, be, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ge(this, js, !0), this.emit("inited", this.options), this.afterInit();
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
    return qe(this, js);
  }
  /**
   * Get the component element.
   */
  get element() {
    return qe(this, Tn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return qe(this, be);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return qe(this, Ks);
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
    Ge(this, be, void 0), Ge(this, Tn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(qe(this, be), e), qe(this, be);
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
let gt = wc;
be = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakMap();
gt.DEFAULT = {};
gt.NAME = wc.name;
gt.MULTI_INSTANCE = !1;
class q extends gt {
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
    ns(
      j(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Iu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return j(e, {
    className: k(t),
    style: s,
    ...i
  }, n);
}
function _c({
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
    /* @__PURE__ */ f(Ms, { content: i }),
    s,
    /* @__PURE__ */ f(nt, { icon: u })
  ];
  return j(t, {
    className: k(n, { disabled: a, active: l }),
    title: p,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...w,
    ...r
  }, ...v);
}
function Wu({
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
    className: k(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ f(Ms, { content: r }), i);
}
function Ou({
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
    className: k(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Hu({ type: e, ...t }) {
  return /* @__PURE__ */ f(ta, { ...t });
}
function bc({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return j(e, {
    className: k(t),
    style: i,
    ...r
  }, /* @__PURE__ */ f(Ms, { content: s }), n);
}
const Ur = class extends z {
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
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = k(o.className), r && (o = r(o)), o;
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
          className: k("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const p = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Ur.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(p, {
      className: k(h),
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
        className: k(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
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
    return /* @__PURE__ */ f(p, { class: k(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Ue = Ur;
Ue.ItemComponents = {
  divider: Iu,
  item: _c,
  heading: Wu,
  space: Ou,
  custom: Hu,
  basic: bc
};
Ue.ROOT_TAG = "menu";
Ue.NAME = "action-menu";
class xc extends q {
}
xc.NAME = "ActionMenu";
xc.Component = Ue;
function Bu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ f(_c, { ...s });
}
var Cc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vt = (e, t, n) => (Cc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Mr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, zu = (e, t, n, s) => (Cc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Xs, Wt, En;
let ar = class extends Ue {
  constructor(t) {
    super(t), Mr(this, Xs, /* @__PURE__ */ new Set()), Mr(this, Wt, void 0), Mr(this, En, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), zu(this, Wt, t.nestedShow === void 0), vt(this, Wt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = k(a.className, "no-nested-items")), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: d, itemRenderProps: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: vt(this, Wt) ? this.state.nestedShow : i,
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
    vt(this, Xs).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: vt(this, En).bind(this, r, !0),
        onMouseLeave: vt(this, En).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        vt(this, En).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = vt(this, Wt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!vt(this, Wt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...vt(this, Xs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    vt(this, Wt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    vt(this, Wt) && this.setState({ nestedShow: !1 });
  }
};
Xs = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
ar.ItemComponents = {
  item: Bu
};
class $c extends q {
}
$c.NAME = "ActionMenuNested";
$c.Component = ar;
let pe = class extends ar {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = k(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
pe.NAME = "menu";
class kc extends q {
}
kc.NAME = "Menu";
kc.Component = pe;
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
      hint: E,
      ...$
    } = this.props, T = t || (a ? "a" : "button"), R = y == null || typeof y == "string" && !y.length || d && !p, P = v && R && !g && !w && !o && !d;
    return j(
      T,
      {
        className: k("btn", n, r, {
          "btn-caret": P,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !P && !o && R : _
        }, i ? `size-${i}` : "", typeof b == "string" ? b : { rounded: b }),
        title: E,
        [T === "a" ? "href" : "data-url"]: a,
        [T === "a" ? "target" : "data-target"]: l,
        type: T === "button" ? s : void 0,
        ...$
      },
      d ? /* @__PURE__ */ f(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(nt, { icon: g }),
      R ? null : /* @__PURE__ */ f("span", { className: "text", children: d ? p : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ f(nt, { icon: w }),
      d ? null : v ? /* @__PURE__ */ f("span", { className: typeof v == "string" ? `caret-${v}` : "caret" }) : null
    );
  }
}
function Fu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(et, { type: n, ...s });
}
function Ts(e) {
  return e.split("-")[1];
}
function ea(e) {
  return e === "y" ? "height" : "width";
}
function Re(e) {
  return e.split("-")[0];
}
function Es(e) {
  return ["top", "bottom"].includes(Re(e)) ? "x" : "y";
}
function sl(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Es(t), l = ea(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Re(t)) {
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
  switch (Ts(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Uu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = sl(h, s, l), u = s, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y], { x: _, y: b, data: E, reset: $ } = await v({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [w]: { ...p[w], ...E } }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : $.rects), { x: c, y: d } = sl(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function Ns(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function xi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Mc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = Ns(t, e), g = Sc(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], w = xi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), v = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, E = xi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: _, strategy: l }) : v);
  return { top: (w.top - E.top + g.top) / b.y, bottom: (E.bottom - w.bottom + g.bottom) / b.y, left: (w.left - E.left + g.left) / b.x, right: (E.right - w.right + g.right) / b.x };
}
const Vr = Math.min, Vu = Math.max;
function qr(e, t, n) {
  return Vu(e, Vr(t, n));
}
const Gr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = Ns(e, t) || {};
  if (l == null)
    return {};
  const c = Sc(h), d = { x: n, y: s }, u = Es(i), p = ea(u), g = await o.getDimensions(l), y = u === "y", w = y ? "top" : "left", v = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", b = r.reference[p] + r.reference[u] - d[u] - r.floating[p], E = d[u] - r.reference[u], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = $ ? $[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement($)) || (T = a.floating[_] || r.floating[p]);
  const R = b / 2 - E / 2, P = T / 2 - g[p] / 2 - 1, H = Vr(c[w], P), S = Vr(c[v], P), A = H, D = T - g[p] - S, M = T / 2 - g[p] / 2 + R, I = qr(A, M, D), W = Ts(i) != null && M != I && r.reference[p] / 2 - (M < A ? H : S) - g[p] / 2 < 0 ? M < A ? A - M : D - M : 0;
  return { [u]: d[u] - W, data: { [u]: I, centerOffset: M - I + W } };
} }), qu = ["top", "right", "bottom", "left"];
qu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Gu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ci(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gu[t]);
}
function Yu(e, t, n) {
  n === void 0 && (n = !1);
  const s = Ts(e), i = Es(e), r = ea(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ci(o)), { main: o, cross: Ci(o) };
}
const Ku = { start: "end", end: "start" };
function Tr(e) {
  return e.replace(/start|end/g, (t) => Ku[t]);
}
const lr = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = Ns(e, t), w = Re(s), v = Re(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (v || !g ? [Ci(o)] : function(A) {
      const D = Ci(A);
      return [Tr(A), D, Tr(D)];
    }(o));
    d || p === "none" || b.push(...function(A, D, M, I) {
      const W = Ts(A);
      let U = function(ot, xn, Ls) {
        const Cn = ["left", "right"], Ds = ["right", "left"], br = ["top", "bottom"], Ed = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Ls ? xn ? Ds : Cn : xn ? Cn : Ds;
          case "left":
          case "right":
            return xn ? br : Ed;
          default:
            return [];
        }
      }(Re(A), M === "start", I);
      return W && (U = U.map((ot) => ot + "-" + W), D && (U = U.concat(U.map(Tr)))), U;
    }(o, g, p, _));
    const E = [o, ...b], $ = await Mc(t, y), T = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push($[w]), c) {
      const { main: A, cross: D } = Yu(s, r, _);
      T.push($[A], $[D]);
    }
    if (R = [...R, { placement: s, overflows: T }], !T.every((A) => A <= 0)) {
      var P, H;
      const A = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, D = E[A];
      if (D)
        return { data: { index: A, overflows: R }, reset: { placement: D } };
      let M = (H = R.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!M)
        switch (u) {
          case "bestFit": {
            var S;
            const I = (S = R.map((W) => [W.placement, W.overflows.filter((U) => U > 0).reduce((U, ot) => U + ot, 0)]).sort((W, U) => W[1] - U[1])[0]) == null ? void 0 : S[0];
            I && (M = I);
            break;
          }
          case "initialPlacement":
            M = o;
        }
      if (s !== M)
        return { reset: { placement: M } };
    }
    return {};
  } };
}, cr = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Re(a), u = Ts(a), p = Es(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, w = Ns(o, r);
      let { mainAxis: v, crossAxis: _, alignmentAxis: b } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: v * g } : { x: v * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ju(e) {
  return e === "x" ? "y" : "x";
}
const $i = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (w) => {
      let { x: v, y: _ } = w;
      return { x: v, y: _ };
    } }, ...l } = Ns(e, t), h = { x: n, y: s }, c = await Mc(t, l), d = Es(Re(i)), u = ju(d);
    let p = h[d], g = h[u];
    if (r) {
      const w = d === "y" ? "bottom" : "right";
      p = qr(p + c[d === "y" ? "top" : "left"], p, p - c[w]);
    }
    if (o) {
      const w = u === "y" ? "bottom" : "right";
      g = qr(g + c[u === "y" ? "top" : "left"], g, g - c[w]);
    }
    const y = a.fn({ ...t, [d]: p, [u]: g });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function ft(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xt(e) {
  return ft(e).getComputedStyle(e);
}
function Tc(e) {
  return e instanceof ft(e).Node;
}
function me(e) {
  return Tc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  return e instanceof ft(e).HTMLElement;
}
function Gt(e) {
  return e instanceof ft(e).Element;
}
function il(e) {
  return typeof ShadowRoot < "u" && (e instanceof ft(e).ShadowRoot || e instanceof ShadowRoot);
}
function ss(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Xu(e) {
  return ["table", "td", "th"].includes(me(e));
}
function Yr(e) {
  const t = na(), n = xt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function na() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function hr(e) {
  return ["html", "body", "#document"].includes(me(e));
}
const Kr = Math.min, sn = Math.max, ki = Math.round, Ws = Math.floor, We = (e) => ({ x: e, y: e });
function Ec(e) {
  const t = xt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = $t(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = ki(n) !== r || ki(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function sa(e) {
  return Gt(e) ? e : e.contextElement;
}
function rn(e) {
  const t = sa(e);
  if (!$t(t))
    return We(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Ec(t);
  let o = (r ? ki(n.width) : n.width) / s, a = (r ? ki(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const rl = We(0);
function Nc(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !na())
    return rl;
  const r = e ? ft(e) : window;
  return !n || t && n !== r ? rl : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Oe(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = sa(e);
  let o = We(1);
  t && (s ? Gt(s) && (o = rn(s)) : o = rn(e));
  const a = Nc(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = ft(r), p = s && Gt(s) ? ft(s) : s;
    let g = u.frameElement;
    for (; g && s && p !== u; ) {
      const y = rn(g), w = g.getBoundingClientRect(), v = getComputedStyle(g), _ = w.left + (g.clientLeft + parseFloat(v.paddingLeft)) * y.x, b = w.top + (g.clientTop + parseFloat(v.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += b, g = ft(g).frameElement;
    }
  }
  return xi({ width: c, height: d, x: l, y: h });
}
function Yt(e) {
  return ((Tc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function dr(e) {
  return Gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Rc(e) {
  return Oe(Yt(e)).left + dr(e).scrollLeft;
}
function _n(e) {
  if (me(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || il(e) && e.host || Yt(e);
  return il(t) ? t.host : t;
}
function Ac(e) {
  const t = _n(e);
  return hr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $t(t) && ss(t) ? t : Ac(t);
}
function Si(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ac(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ft(s);
  return i ? t.concat(r, r.visualViewport || [], ss(s) ? s : []) : t.concat(s, Si(s));
}
function ol(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = ft(i), a = Yt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const p = na();
        (!p || p && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Yt(i), o = dr(i), a = i.ownerDocument.body, l = sn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = sn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Rc(i);
      const d = -o.scrollTop;
      return xt(a).direction === "rtl" && (c += sn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Yt(e));
  else if (Gt(t))
    s = function(i, r) {
      const o = Oe(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = $t(i) ? rn(i) : We(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Nc(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return xi(s);
}
function Pc(e, t) {
  const n = _n(e);
  return !(n === t || !Gt(n) || hr(n)) && (xt(n).position === "fixed" || Pc(n, t));
}
function al(e, t) {
  return $t(e) && xt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ll(e, t) {
  const n = ft(e);
  if (!$t(e))
    return n;
  let s = al(e, t);
  for (; s && Xu(s) && xt(s).position === "static"; )
    s = al(s, t);
  return s && (me(s) === "html" || me(s) === "body" && xt(s).position === "static" && !Yr(s)) ? n : s || function(i) {
    let r = _n(i);
    for (; $t(r) && !hr(r); ) {
      if (Yr(r))
        return r;
      r = _n(r);
    }
    return null;
  }(e) || n;
}
function Ju(e, t, n) {
  const s = $t(t), i = Yt(t), r = n === "fixed", o = Oe(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = We(0);
  if (s || !s && !r)
    if ((me(t) !== "body" || ss(i)) && (a = dr(t)), $t(t)) {
      const h = Oe(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Rc(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Zu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Si(h).filter((w) => Gt(w) && me(w) !== "body"), p = null;
    const g = xt(h).position === "fixed";
    let y = g ? _n(h) : h;
    for (; Gt(y) && !hr(y); ) {
      const w = xt(y), v = Yr(y);
      v || w.position !== "fixed" || (p = null), (g ? !v && !p : !v && w.position === "static" && p && ["absolute", "fixed"].includes(p.position) || ss(y) && !v && Pc(h, y)) ? u = u.filter((_) => _ !== y) : p = w, y = _n(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = ol(t, c, i);
    return h.top = sn(d.top, h.top), h.right = Kr(d.right, h.right), h.bottom = Kr(d.bottom, h.bottom), h.left = sn(d.left, h.left), h;
  }, ol(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = $t(n), r = Yt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = We(1);
  const l = We(0);
  if ((i || !i && s !== "fixed") && ((me(n) !== "body" || ss(r)) && (o = dr(n)), $t(n))) {
    const h = Oe(n);
    a = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Gt, getDimensions: function(e) {
  return Ec(e);
}, getOffsetParent: ll, getDocumentElement: Yt, getScale: rn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || ll, r = this.getDimensions;
  return { reference: Ju(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => xt(e).direction === "rtl" };
function ia(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = sa(e), c = i || r ? [...h ? Si(h) : [], ...Si(t)] : [];
  c.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: !0 }), r && w.addEventListener("resize", n);
  });
  const d = h && a ? function(w, v) {
    let _, b = null;
    const E = Yt(w);
    function $() {
      clearTimeout(_), b && b.disconnect(), b = null;
    }
    return function T(R, P) {
      R === void 0 && (R = !1), P === void 0 && (P = 1), $();
      const { left: H, top: S, width: A, height: D } = w.getBoundingClientRect();
      if (R || v(), !A || !D)
        return;
      const M = { rootMargin: -Ws(S) + "px " + -Ws(E.clientWidth - (H + A)) + "px " + -Ws(E.clientHeight - (S + D)) + "px " + -Ws(H) + "px", threshold: sn(0, Kr(1, P)) || 1 };
      let I = !0;
      function W(U) {
        const ot = U[0].intersectionRatio;
        if (ot !== P) {
          if (!I)
            return T();
          ot ? T(!1, ot) : _ = setTimeout(() => {
            T(!1, 1e-7);
          }, 100);
        }
        I = !1;
      }
      try {
        b = new IntersectionObserver(W, { ...M, root: E.ownerDocument });
      } catch {
        b = new IntersectionObserver(W, M);
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
  let y = l ? Oe(e) : null;
  return l && function w() {
    const v = Oe(e);
    !y || v.x === y.x && v.y === y.y && v.width === y.width && v.height === y.height || n(), y = v, u = requestAnimationFrame(w);
  }(), n(), () => {
    c.forEach((w) => {
      i && w.removeEventListener("scroll", n), r && w.removeEventListener("resize", n);
    }), d && d(), g && g.disconnect(), g = null, l && cancelAnimationFrame(u);
  };
}
const ur = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Zu, ...n }, r = { ...i.platform, _c: s };
  return Uu(e, t, { ...i, platform: r });
};
var Lc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, cl = (e, t, n) => (Lc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Qu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, tf = (e, t, n, s) => (Lc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Nn;
let Dc = class extends pe {
  constructor() {
    super(...arguments), Qu(this, Nn, 0);
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
    !t || !n || ur(n, t, {
      placement: "right-start",
      middleware: [lr(), $i(), cr(1)]
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
      className: k("absolute", n.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), tf(this, Nn, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), cl(this, Nn) && clearTimeout(cl(this, Nn));
  }
};
Nn = /* @__PURE__ */ new WeakMap();
Dc.defaultProps = {
  ...pe.defaultProps,
  popup: !0
};
var ra = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, It = (e, t, n) => (ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ye = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Os = (e, t, n, s) => (ra(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), hl = (e, t, n) => (ra(e, t, "access private method"), n), ie, Rn, Js, Zs, jr, Ic, Xr, Wc;
const Er = "show", ef = '[data-toggle="contextmenu"]';
class rt extends gt {
  constructor() {
    super(...arguments), Ye(this, jr), Ye(this, Xr), Ye(this, ie, void 0), Ye(this, Rn, void 0), Ye(this, Js, void 0), Ye(this, Zs, void 0);
  }
  get isShown() {
    return It(this, ie) && m(It(this, ie)).hasClass(Er);
  }
  get menu() {
    return It(this, ie) || this.ensureMenu();
  }
  get trigger() {
    return It(this, Js) || this.element;
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
    return this.isShown || (Os(this, Js, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Er), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = It(this, Zs)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(It(this, ie)).removeClass(Er), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = It(this, ie)) == null || t.remove();
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
    }), Os(this, ie, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(lr())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    Os(this, Zs, ia(n, s, () => {
      ur(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        if (m(s).css({ left: i, top: r }), o.arrow && this.arrowEl) {
          const l = a.split("-")[0], h = hl(this, jr, Ic).call(this, l), { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...hl(this, Xr, Wc).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (ns(j(Dc, t), this.menu), !0);
  }
  getPopperElement() {
    return It(this, Rn) || Os(this, Rn, {
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
    }), It(this, Rn);
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
ie = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakMap();
Zs = /* @__PURE__ */ new WeakMap();
jr = /* @__PURE__ */ new WeakSet();
Ic = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Xr = /* @__PURE__ */ new WeakSet();
Wc = function(e) {
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
  const n = t.closest(ef).not(":disabled,.disabled");
  if (n.length) {
    const s = `${rt.KEY}:options`, i = n.data(s), r = rt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${rt.NAMESPACE}`, rt.clear.bind(rt));
var oa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, An = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Jr = (e, t, n, s) => (oa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), nf = (e, t, n) => (oa(e, t, "access private method"), n), Kn, Pn, Mi, Zr, Oc;
const dl = '[data-toggle="dropdown"]', Hc = class extends rt {
  constructor() {
    super(...arguments), Hs(this, Zr), Hs(this, Kn, !1), Hs(this, Pn, 0), this.hideLater = () => {
      An(this, Mi).call(this), Jr(this, Pn, window.setTimeout(this.hide.bind(this), 100));
    }, Hs(this, Mi, () => {
      clearTimeout(An(this, Pn)), Jr(this, Pn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Hc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!An(this, Kn) && this.isHover && nf(this, Zr, Oc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    An(this, Kn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(cr(t)), (s = e.middleware) == null || s.push(Gr({ element: this.arrowEl }))), e;
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
let Kt = Hc;
Kn = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakSet();
Oc = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, An(this, Mi)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Jr(this, Kn, !0);
};
Kt.MENU_CLASS = "dropdown-menu";
Kt.NAME = "Dropdown";
Kt.DEFAULT = {
  ...rt.DEFAULT,
  trigger: "click"
};
const Bs = `${Kt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(dl).not(":disabled,.disabled");
  if (!t.length) {
    Kt.clear({ event: e });
    return;
  }
  const n = t.data(Bs), s = Kt.ensure(t, n);
  n || t.data(Bs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(dl);
  if (!t.length)
    return;
  const n = t.data(Bs), s = Kt.ensure(t, n);
  n || t.data(Bs, s.options), s.isHover && s.show();
});
let zs = 0;
window.addEventListener("scroll", (e) => {
  zs && clearTimeout(zs), zs = window.setTimeout(() => {
    Kt.clear({ event: e }), zs = 0;
  }, 50);
}, !0);
var cs, hn;
class sf extends z {
  constructor(n) {
    var s;
    super(n);
    L(this, cs, void 0);
    L(this, hn, K());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return x(this, hn);
  }
  get triggerElement() {
    return x(this, hn).current;
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
    }), O(this, cs, Kt.ensure(this.triggerElement, {
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
    (n = x(this, cs)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: k("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: x(this, hn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ f("div", { ...s, children: n });
  }
}
cs = new WeakMap(), hn = new WeakMap();
class rf extends sf {
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
function Bc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(rf, { type: n, ...s });
}
let zc = class extends z {
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
        className: k("btn-group", i ? `size-${i}` : "", n),
        ...p,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function of({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(zc, { type: n, ...s });
}
let mt = class extends Ue {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = k(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: k(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ f(t, { ...a });
  }
};
mt.ItemComponents = {
  item: Fu,
  dropdown: Bc,
  "btn-group": of
};
mt.ROOT_TAG = "nav";
mt.NAME = "toolbar";
mt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function af({
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
  const u = Q(n) ? n : n ? /* @__PURE__ */ f(mt, { ...n }) : null;
  return /* @__PURE__ */ f("div", { className: k("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ f(nt, { icon: h, className: "alert-icon" }),
    Q(i) ? i : /* @__PURE__ */ f("div", { className: k("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function lf(e) {
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
function cf({
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
    af,
    {
      className: k("messager", r, t, s === !0 ? lf(n) : s, i ? "in" : ""),
      ...a
    }
  );
}
var hf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, df = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $n = (e, t, n) => (hf(e, t, "access private method"), n), xe, Xe;
class aa extends q {
  constructor() {
    super(...arguments), df(this, xe), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), $n(this, xe, Xe).call(this, () => {
      this._show = !0, this.render(), $n(this, xe, Xe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && $n(this, xe, Xe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && $n(this, xe, Xe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), $n(this, xe, Xe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
xe = /* @__PURE__ */ new WeakSet();
Xe = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
aa.NAME = "MessagerItem";
aa.Component = cf;
var la = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ae = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Qs = (e, t, n, s) => (la(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Fc = (e, t, n) => (la(e, t, "access private method"), n), on, Vt, Qr, Uc, ca, Vc;
const qc = class extends gt {
  constructor() {
    super(...arguments), Fs(this, Qr), Fs(this, ca), Fs(this, on, void 0), Fs(this, Vt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ae(this, Vt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Fc(this, Qr, Uc).call(this).show();
  }
  hide() {
    var e;
    (e = Ae(this, Vt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = qc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Gc = qc;
on = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakSet();
Uc = function() {
  if (Ae(this, Vt))
    Ae(this, Vt).setOptions(this.options);
  else {
    const e = Fc(this, ca, Vc).call(this), t = new aa(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Qs(this, on, void 0), Qs(this, Vt, void 0);
    }), Qs(this, Vt, t);
  }
  return Ae(this, Vt);
};
ca = /* @__PURE__ */ new WeakSet();
Vc = function() {
  if (Ae(this, on))
    return Ae(this, on);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Qs(this, on, n[0])), n[0];
};
Gc.NAME = "messager";
Gc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Yc = class extends z {
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
Yc.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Kc extends q {
}
Kc.NAME = "ProgressCircle";
Kc.Component = Yc;
var Ut;
class uf {
  constructor(t = "") {
    L(this, Ut, void 0);
    typeof t == "object" ? O(this, Ut, t) : O(this, Ut, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    x(this, Ut).addEventListener(t, n, s);
  }
  once(t, n, s) {
    x(this, Ut).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    x(this, Ut).removeEventListener(t, n, s);
  }
  emit(t) {
    return x(this, Ut).dispatchEvent(t), t;
  }
}
Ut = new WeakMap();
const ul = /* @__PURE__ */ new Set([
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
class jc extends uf {
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
    return typeof t == "string" && (ul.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(jc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ul.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Xc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var hs, le, Et, dn, un, ti;
const Ua = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, un);
    L(this, hs, void 0);
    L(this, le, void 0);
    L(this, Et, void 0);
    L(this, dn, void 0);
    O(this, hs, n), O(this, le, `ZUI_STORE:${t ?? Xc()}`), O(this, Et, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return x(this, hs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (x(this, dn) || O(this, dn, new Ua(x(this, le), "session")), x(this, dn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = x(this, Et).getItem(Dt(this, un, ti).call(this, t));
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
    x(this, Et).setItem(Dt(this, un, ti).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    x(this, Et).removeItem(Dt(this, un, ti).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < x(this, Et).length; n++) {
      const s = x(this, Et).key(n);
      if (s != null && s.startsWith(x(this, le))) {
        const i = x(this, Et).getItem(s);
        typeof i == "string" && t(s.substring(x(this, le).length + 1), JSON.parse(i));
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
let Ti = Ua;
hs = new WeakMap(), le = new WeakMap(), Et = new WeakMap(), dn = new WeakMap(), un = new WeakSet(), ti = function(t) {
  return `${x(this, le)}:${t}`;
};
const ff = new Ti("DEFAULT");
function pf(e, t = "local") {
  return new Ti(e, t);
}
Object.assign(ff, { create: pf });
function mf(e) {
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
function gf(e) {
  const [t, n, s] = typeof e == "string" ? mf(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function fl(e, t) {
  return gf(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function pl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function yf(e, t, n) {
  e = e % 360 / 360, t = pl(t), n = pl(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function vf(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function wf(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Jc = class extends z {
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
    let E;
    if (d)
      v.push("has-img"), E = /* @__PURE__ */ f("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const $ = wf(l, c);
      if (v.push("has-text", `has-text-${$.length}`), o)
        !a && o && (_.color = fl(o));
      else {
        const R = h ?? l, P = (typeof R == "number" ? R : vf(R)) * u % 360;
        if (_.background = `hsl(${P},${p * 100}%,${g * 100}%)`, !a) {
          const H = yf(P, p, g);
          _.color = fl(H);
        }
      }
      let T;
      b && b < 14 * $.length && (T = { transform: `scale(${b / (14 * $.length)})`, whiteSpace: "nowrap" }), E = /* @__PURE__ */ f("div", { "data-actualSize": b, className: "avatar-text", style: T, children: $ });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: k(v),
        style: _,
        ...w,
        children: [
          E,
          y
        ]
      }
    );
  }
};
class Zc extends q {
}
Zc.NAME = "Avatar";
Zc.Component = Jc;
class Qc extends q {
}
Qc.NAME = "BtnGroup";
Qc.Component = zc;
const ml = Symbol("EVENT_FROM_PICK");
var ds;
class ha extends z {
  constructor(n) {
    super(n);
    L(this, ds, void 0);
    this._handleClick = this._handleClick.bind(this), O(this, ds, !!m(`#${n.id}`).length);
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
    return k(
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
      if (x(this, ds))
        m(`#${r}`).val(i);
      else
        return /* @__PURE__ */ f("input", { id: r, type: "hidden", className: "pick-value", name: s, value: i });
    return null;
  }
  componentDidMount() {
    const { id: n, state: s } = this.props;
    m(`#${n}`).on(`change.pick.zui.${n}`, (i, r) => {
      if (r === ml)
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
    r && n.state.value !== i.value && m(`#${s}`).trigger("change", ml);
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
ds = new WeakMap();
var Ne, Nt, ce;
class th extends z {
  constructor(n) {
    super(n);
    L(this, Ne, void 0);
    L(this, Nt, void 0);
    L(this, ce, void 0);
    O(this, Ne, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = x(this, Ne)) == null ? void 0 : n.current;
  }
  get container() {
    return x(this, ce);
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
    return k(
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
      ref: x(this, Ne),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!x(this, ce)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), O(this, ce, i[0]);
    }
    return x(this, ce);
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
      x(this, Nt) && (x(this, Nt).call(this), O(this, Nt, void 0));
      return;
    }
    x(this, Nt) || O(this, Nt, ia(s, n, () => {
      const { placement: o, width: a } = i;
      ur(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? lr() : null, $i(), cr(1)].filter(Boolean)
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
    const n = x(this, Nt);
    n && (n(), O(this, Nt, void 0)), O(this, ce, void 0), O(this, Ne, void 0), m(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(n) {
    return Du(this._render(n), this._getContainer(n));
  }
}
Ne = new WeakMap(), Nt = new WeakMap(), ce = new WeakMap();
var eh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ne = (e, t, n) => (eh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ke = (e, t, n, s) => (eh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ei, _t, Ln;
let yt = class extends z {
  constructor(t) {
    super(t), Nr(this, ei, void 0), Nr(this, _t, 0), Nr(this, Ln, K()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      this.props.disabled && (n = !1);
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      ne(this, _t) && (clearTimeout(ne(this, _t)), Ke(this, _t, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await vi(200, (a) => {
        Ke(this, _t, a);
      }), Ke(this, _t, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await vi(50, (a) => {
        Ke(this, _t, a);
      }), Ke(this, _t, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, Ke(this, ei, t.id ?? `_pick${m.guid++}`);
  }
  get id() {
    return ne(this, ei);
  }
  get pop() {
    return ne(this, Ln).current;
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
    (n = this.props.beforeDestroy) == null || n.call(this), ne(this, _t) && clearTimeout(ne(this, _t));
    const t = ne(this, Ln).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: ne(this, Ln), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ f(bn, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
ei = /* @__PURE__ */ new WeakMap();
_t = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
yt.Trigger = ha;
yt.Pop = th;
yt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let nh = class extends yt {
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
    }, s.style), s.className = k("color-picker", s.className, { disabled: t.disabled }), s;
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
nh.defaultProps = {
  ...yt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class sh extends q {
}
sh.NAME = "ColorPicker";
sh.Component = nh;
const is = 24 * 60 * 60 * 1e3, Z = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), _f = (e, t, n = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    n = t.replace(s.toString(), ""), t = s;
  }
  return e = new Date(Z(e).getTime()), n === "month" ? e.setMonth(e.getMonth() + t) : n === "year" ? e.setFullYear(e.getFullYear() + t) : n === "week" ? e.setDate(e.getDate() + t * 7) : n === "hour" ? e.setHours(e.getHours() + t) : n === "minute" ? e.setMinutes(e.getMinutes() + t) : n === "second" ? e.setSeconds(e.getSeconds() + t) : e.setDate(e.getDate() + t), e;
}, Rs = (e, t = /* @__PURE__ */ new Date()) => Z(e).toDateString() === Z(t).toDateString(), to = (e, t = /* @__PURE__ */ new Date()) => Z(e).getFullYear() === Z(t).getFullYear(), ih = (e, t = /* @__PURE__ */ new Date()) => (e = Z(e), t = Z(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Kp = (e, t = /* @__PURE__ */ new Date()) => {
  e = Z(e), t = Z(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, jp = (e, t) => Rs(Z(t), e), Xp = (e, t) => Rs(Z(t).getTime() - is, e), Jp = (e, t) => Rs(Z(t).getTime() + is, e), kt = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", to(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Zp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = kt(e, to(e) ? s.month : s.full);
  if (Rs(e, t))
    return i;
  const r = kt(t, to(e, t) ? ih(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var us, fs;
class bf extends z {
  constructor() {
    super(...arguments);
    L(this, us, K());
    L(this, fs, (n, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, n, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    m(x(this, us).current).find(".menu-item>.active").scrollIntoView();
  }
  render(n) {
    const { minuteStep: s = 5, hour: i, minute: r } = n, o = [], a = [];
    for (let h = 0; h < 24; ++h)
      o.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: r === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: x(this, us), children: [
      /* @__PURE__ */ f(
        pe,
        {
          className: l,
          items: o,
          onClickItem: x(this, fs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        pe,
        {
          className: l,
          items: a,
          onClickItem: x(this, fs).bind(this, "minute")
        }
      )
    ] });
  }
}
us = new WeakMap(), fs = new WeakMap();
var xf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Us = (e, t, n) => (xf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Vs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, eo, no, so, io;
const gl = (e) => {
  if (!e)
    return;
  const t = Z(`1999-01-01 ${e}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let rh = class extends yt {
  constructor(t) {
    super(t), Vs(this, eo, () => {
      this.toggle(!0);
    }), Vs(this, no, (s) => {
      this.setTime(s.target.value);
    }), Vs(this, so, (s, i) => {
      this.setTime({ [s]: i });
    }), Vs(this, io, () => {
      this.setTime("");
    });
    const n = this.state;
    n.value === "now" && (n.value = kt(/* @__PURE__ */ new Date(), t.format));
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
    const s = gl(n), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? kt(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(n);
    });
  }
  getTime() {
    const t = gl(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: s, name: i, icon: r, required: o, disabled: a, readonly: l } = t, { value: h = "", open: c } = n, d = `time-picker-${this.id}`;
    let u;
    return c && !o && h.length ? u = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Us(this, io), children: /* @__PURE__ */ f("span", { className: "close" }) }) : r && (r === !0 ? u = /* @__PURE__ */ f("i", { class: "i-time" }) : u = /* @__PURE__ */ f(nt, { icon: r })), [
      /* @__PURE__ */ f("input", { name: i, id: d, type: "text", class: "form-control", placeholder: s, value: h, disabled: a, readOnly: l, onFocus: Us(this, eo), onChange: Us(this, no) }, "input"),
      u ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: u }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: k(s.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, s] = this.getTime() || [];
    return /* @__PURE__ */ f(bf, { hour: n, minute: s, minuteStep: t.minuteStep, onChange: Us(this, so) });
  }
};
eo = /* @__PURE__ */ new WeakMap();
no = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
io = /* @__PURE__ */ new WeakMap();
rh.defaultProps = {
  ...yt.defaultProps,
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
const Cf = (e, t, n = 0) => {
  const s = new Date(e, t - 1, 1), i = new Date(e, t, 0), r = s.getDay(), o = s.getTime() - (7 + r - n) % 7 * is;
  return {
    days: i.getDate(),
    startTime: o,
    firstDay: s.getTime()
  };
}, yl = (e, t) => new Set((Array.isArray(e) ? e : [e]).map((n) => kt(n, t)));
var Bi;
class $f extends z {
  constructor() {
    super(...arguments);
    L(this, Bi, (n) => {
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
    for (let T = 0; T < 7; T++) {
      const R = (i + T) % 7;
      d.push(/* @__PURE__ */ f("div", { className: k("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[R] : R }) }, T));
    }
    const { startTime: p, days: g, firstDay: y } = Cf(a, l, i), w = y + g * is;
    let v = p;
    const _ = [], b = "yyyy-MM-dd", E = yl(h, b), $ = yl(c, b);
    for (; v <= w; ) {
      const T = [];
      for (let R = 0; R < 7; R++) {
        const P = new Date(v), H = P.getDate(), S = kt(P, b), A = P.getDay(), D = ih(P, y), M = k("col mini-calendar-day", {
          active: E.has(S),
          selected: $.has(S),
          "is-first": H === 1,
          "is-in-month": D,
          "is-out-month": !D,
          "is-today": Rs(P, s),
          "is-weekend": A === 0 || A === 6
        });
        T.push(
          /* @__PURE__ */ f("div", { className: M, "data-date": S, children: /* @__PURE__ */ f("a", { className: u, onClick: x(this, Bi), children: H === 1 && o ? o[P.getMonth()] : P.getDate() }) }, S)
        ), v += is;
      }
      _.push(/* @__PURE__ */ f("div", { className: "row", children: T }, v));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: d }),
      _
    ] });
  }
}
Bi = new WeakMap();
var ps, zi;
class vl extends z {
  constructor() {
    super(...arguments);
    L(this, ps, K());
    L(this, zi, (n) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = m(n.target).closest("[data-value]").dataset("value");
      r && (s(+r), n.stopPropagation());
    });
  }
  componentDidMount() {
    m(x(this, ps).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(n) {
    const { className: s, max: i, min: r, value: o } = n, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = r; h <= i; ++h)
      a.push(/* @__PURE__ */ f(et, { type: "ghost", "data-value": h, active: h === o, className: k(l === h ? "is-current" : ""), onClick: x(this, zi), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: x(this, ps), children: a });
  }
}
ps = new WeakMap(), zi = new WeakMap();
var fn, ms, gs, ys, vs, ws, Fi, oh, Ui, ah;
class kf extends z {
  constructor(n) {
    super(n);
    L(this, Fi);
    L(this, Ui);
    L(this, fn, void 0);
    L(this, ms, void 0);
    L(this, gs, void 0);
    L(this, ys, void 0);
    L(this, vs, void 0);
    L(this, ws, void 0);
    O(this, fn, K()), O(this, ms, (o) => {
      const a = m(o.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), O(this, gs, () => {
      const { year: o, month: a } = this.state;
      a === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), O(this, ys, () => {
      const { year: o, month: a } = this.state;
      a === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), O(this, vs, (o) => {
      this.setState({ year: o, select: "day" });
    }), O(this, ws, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var a, l;
      if (o.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        o.length > 3 && (h = _f(h, o.substring(5).replace("+", ""))), o = kt(h, "yyyy-MM-dd");
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
    m(x(this, fn).current).find(".active").scrollIntoView();
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
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: x(this, fn), onClick: x(this, ms), children: [
      Dt(this, Fi, oh).call(this, n),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(et, { type: u === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: it(r, c) }),
          /* @__PURE__ */ f(et, { type: u === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: x(this, gs), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: x(this, ys), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          $f,
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
          vl,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: x(this, vs)
          }
        ) : u === "month" ? /* @__PURE__ */ f(
          vl,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: x(this, ws)
          }
        ) : null,
        p ? Dt(this, Ui, ah).call(this, n) : null
      ] })
    ] });
  }
}
fn = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), vs = new WeakMap(), ws = new WeakMap(), Fi = new WeakSet(), oh = function(n) {
  let { menu: s } = n;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(pe, { ...s })) : null;
}, Ui = new WeakSet(), ah = function(n) {
  let { actions: s } = n;
  const { todayText: i, clearText: r } = n;
  return s || (s = [{ text: i, "data-set-date": kt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(mt, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ f(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Sf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rr = (e, t, n) => (Sf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ar = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ro, oo, ao;
let lh = class extends yt {
  constructor(t) {
    super(t), Ar(this, ro, () => {
      this.toggle(!0);
    }), Ar(this, oo, (s) => {
      this.setDate(s.target.value);
    }), Ar(this, ao, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      if (this.props.disabled)
        return;
      const i = Z(s), r = !s || Number.isNaN(i.getDay()), { onInvalid: o, defaultValue: a = "", required: l } = this.props;
      this.setState({ value: r ? l ? a : "" : kt(i, this.props.format) }, () => {
        !r && o && o(s), this.toggle(!1);
      });
    };
    const n = this.state;
    n.value === "today" && (n.value = kt(/* @__PURE__ */ new Date(), t.format));
  }
  _renderTrigger(t, n) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: h } = n, c = `date-picker-${this.id}`;
    let d;
    return h && !r && l.length ? d = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Rr(this, ao), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? d = /* @__PURE__ */ f("i", { class: "i-calendar" }) : d = /* @__PURE__ */ f(nt, { icon: i })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", class: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, onFocus: Rr(this, ro), onChange: Rr(this, oo) }, "input"),
      d ? /* @__PURE__ */ f("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: k(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const s = super._getPopProps(t, n);
    return {
      ...s,
      className: k(s.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = tt.getLang("today"), clearText: l, menu: h, actions: c, minDate: d, maxDate: u, required: p } = t;
    return /* @__PURE__ */ f(
      kf,
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
ro = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakMap();
ao = /* @__PURE__ */ new WeakMap();
lh.defaultProps = {
  ...yt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class ch extends q {
}
ch.NAME = "TimePicker";
ch.Component = rh;
class hh extends q {
}
hh.NAME = "DatePicker";
hh.Component = lh;
var da = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Me = (e, t, n) => (da(e, t, "read from private field"), n ? n.call(e) : t.get(e)), kn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Qe = (e, t, n, s) => (da(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Pr = (e, t, n) => (da(e, t, "access private method"), n), tn, Ce, Dn, lo, In, ni;
const Lr = "show", wl = "in", Mf = '[data-dismiss="modal"]', Wn = class extends gt {
  constructor() {
    super(...arguments), kn(this, In), kn(this, tn, 0), kn(this, Ce, void 0), kn(this, Dn, void 0), kn(this, lo, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Mf) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Lr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return Me(this, Ce);
  }
  _observeResize() {
    var e;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (e = Me(this, Ce)) == null || e.disconnect();
      const { dialog: t } = this;
      if (t) {
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const s = t.clientWidth, i = t.clientHeight, [r, o] = Me(this, Dn) || [];
          (r !== s || o !== i) && (Qe(this, Dn, [s, i]), this.layout());
        });
        n.observe(t), Qe(this, Ce, n);
      }
    }
  }
  afterInit() {
    this.on("click", Me(this, lo)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var e;
    super.destroy(), (e = Me(this, Ce)) == null || e.disconnect(), Qe(this, Ce, void 0);
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${Wn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Lr, i).css({
      zIndex: `${Wn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Pr(this, In, ni).call(this, () => {
      m(t).addClass(wl), Pr(this, In, ni).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(wl), this.emit("hide"), Pr(this, In, ni).call(this, () => {
      m(this.modalElement).removeClass(Lr), this.emit("hidden");
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
    Qe(this, Dn, [i, r]), typeof e == "function" && (e = e({ width: i, height: r }));
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
    (t = Wn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Wn.query(e)) == null || t.show();
  }
};
let ee = Wn;
tn = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakSet();
ni = function(e, t) {
  Me(this, tn) && (clearTimeout(Me(this, tn)), Qe(this, tn, 0)), e && (this.options.animation ? Qe(this, tn, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
ee.NAME = "Modal";
ee.MULTI_INSTANCE = !0;
ee.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
ee.zIndex = 1500;
m(window).on("resize.modal.zui", () => {
  ee.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  ee.hide(t == null ? void 0 : t.target);
});
class dh extends z {
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
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: k("modal-header", n), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Q(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(mt, { ...t }) : null,
      n ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: n
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ f("div", { className: k("modal-body", n), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: n,
      footerActions: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: k("modal-footer", n), children: s ? /* @__PURE__ */ f(mt, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: k("modal-dialog", t), style: n, children: /* @__PURE__ */ f("div", { className: k("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
dh.defaultProps = { closeBtn: !0 };
var pn, mn, gn;
class Tf extends z {
  constructor() {
    super(...arguments);
    L(this, pn, void 0);
    L(this, mn, void 0);
    L(this, gn, void 0);
    O(this, pn, K()), this.state = {}, O(this, gn, () => {
      var i, r;
      const n = (r = (i = x(this, pn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = x(this, mn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), O(this, mn, s);
    });
  }
  componentDidMount() {
    x(this, gn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = x(this, mn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: x(this, pn),
        onLoad: x(this, gn)
      }
    );
  }
}
pn = new WeakMap(), mn = new WeakMap(), gn = new WeakMap();
var ua = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, wt = (e, t, n) => (ua(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, je = (e, t, n, s) => (ua(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), si = (e, t, n) => (ua(e, t, "access private method"), n), Ot, On, Ht, Ei, fa, ii, co;
function Ef(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Nf(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ f(Qo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Rf(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(Tf, { url: n })
  };
}
const Af = {
  custom: Ef,
  ajax: Nf,
  iframe: Rf
}, Dr = "loading", Hn = class extends ee {
  constructor() {
    super(...arguments), Sn(this, Ei), Sn(this, ii), Sn(this, Ot, void 0), Sn(this, On, void 0), Sn(this, Ht, void 0);
  }
  get id() {
    return wt(this, On);
  }
  get loading() {
    var e;
    return (e = wt(this, Ot)) == null ? void 0 : e.classList.contains(Dr);
  }
  get shown() {
    var e;
    return !!((e = wt(this, Ot)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = wt(this, Ot);
    if (!e) {
      const { options: t } = this;
      let n = wt(this, On);
      n || (n = t.id || `modal-${m.guid++}`, je(this, On, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      je(this, Ot, e);
    }
    return e;
  }
  get $emitter() {
    const e = wt(this, Ot);
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
    const e = wt(this, Ot);
    e && (m(e).removeData(this.constructor.KEY).remove(), je(this, Ot, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    wt(this, Ht) && clearTimeout(wt(this, Ht));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Af[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Dr), i && je(this, Ht, window.setTimeout(() => {
      je(this, Ht, 0), si(this, ii, co).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await si(this, ii, co).call(this, this.options.failedTip) : a && typeof a == "object" && await si(this, Ei, fa).call(this, a), wt(this, Ht) && (clearTimeout(wt(this, Ht)), je(this, Ht, 0)), this.layout(), await vi(100), n.removeClass(Dr), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = Hn.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e, c = (typeof a == "function" ? a() : a) || {};
    let d = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    s ? d = /* @__PURE__ */ f("div", { className: k("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${s} ${i}` }),
      d
    ] }) : d = /* @__PURE__ */ f("div", { className: k("modal-body", c.bodyClass), children: d });
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
        const v = Hn.query(w.target, l);
        p = y.key, (o == null ? void 0 : o(y, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Hn.open({
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
    return await Hn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let uh = Hn;
Ot = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakSet();
fa = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return m(this.modalElement).html(e[0]), this.layout(), this._observeResize(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), this._observeResize(), t();
      },
      ...s
    }, ns(
      /* @__PURE__ */ f(dh, { ...e }),
      this.modalElement
    );
  });
};
ii = /* @__PURE__ */ new WeakSet();
co = function(e) {
  if (e)
    return si(this, Ei, fa).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: e })
    });
};
uh.DEFAULT = {
  ...ee.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var pa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ho = (e, t, n) => (pa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _l = (e, t, n, s) => (pa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), uo = (e, t, n) => (pa(e, t, "access private method"), n), Pe, ma, fh, fo, ph, ga, mh;
const Pf = '[data-toggle="modal"]';
class gh extends gt {
  constructor() {
    super(...arguments), qs(this, ma), qs(this, fo), qs(this, ga), qs(this, Pe, void 0);
  }
  get modal() {
    return ho(this, Pe);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = uo(this, fo, ph).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = ho(this, Pe)) == null ? void 0 : t.hide();
  }
}
Pe = /* @__PURE__ */ new WeakMap();
ma = /* @__PURE__ */ new WeakSet();
fh = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
fo = /* @__PURE__ */ new WeakSet();
ph = function() {
  const e = uo(this, ma, fh).call(this);
  let t = ho(this, Pe);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = uo(this, ga, mh).call(this);
    if (!n)
      return;
    t = ee.ensure(n, e);
  } else
    t = uh.ensure(this.container, e);
  return _l(this, Pe, t), t.on("destroyed", () => {
    _l(this, Pe, void 0);
  }), t;
};
ga = /* @__PURE__ */ new WeakSet();
mh = function() {
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
gh.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Pf);
  if (n) {
    const i = gh.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let yh = class extends Ue {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = k(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
yh.NAME = "nav";
class vh extends q {
}
vh.NAME = "Nav";
vh.Component = yh;
function rs(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Lf({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = rs(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : it(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : it(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ f(et, { type: n, ...a });
}
function Df({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = rs(i, n);
  return s = typeof s == "function" ? s(a) : it(s, a), /* @__PURE__ */ f(bc, { ...o, children: [
    r,
    s
  ] });
}
function If({
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
      const w = rs(i, y);
      o && (l.url = typeof o == "function" ? o(w) : it(o, w)), g.push(/* @__PURE__ */ f(et, { type: n, ...l, onClick: r }));
    }
    return g;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function Wf({
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
  return o.text = typeof a == "function" ? a(t) : it(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Bc, { type: "dropdown", dropdown: i, ...o });
}
function Of({
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
    const w = rs(i, d);
    a && !a({ info: w, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(w) : it(l, w));
  }, g = rs(i, t || 0);
  return c.url = typeof l == "function" ? l(g) : it(l, g), /* @__PURE__ */ f("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ f(et, { type: s, ...c, onClick: p })
  ] });
}
let fr = class extends mt {
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
fr.NAME = "pager";
fr.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
fr.ItemComponents = {
  ...mt.ItemComponents,
  link: Lf,
  info: Df,
  nav: If,
  "size-menu": Wf,
  goto: Of
};
class wh extends q {
}
wh.NAME = "Pager";
wh.Component = fr;
class _h extends q {
}
_h.NAME = "Pick";
_h.Component = yt;
var yn, _s, bs, Vi;
class bh extends z {
  constructor(n) {
    super(n);
    L(this, yn, K());
    L(this, _s, K());
    L(this, bs, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    L(this, Vi, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = x(this, yn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = x(this, _s), { current: i } = x(this, yn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: x(this, _s), children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: x(this, Vi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: x(this, bs),
          onInput: x(this, bs),
          ref: x(this, yn)
        }
      ),
      l
    ] });
  }
}
yn = new WeakMap(), _s = new WeakMap(), bs = new WeakMap(), Vi = new WeakMap();
var vn, xs, Cs, $s;
class Hf extends ha {
  constructor() {
    super(...arguments);
    L(this, vn, void 0);
    L(this, xs, void 0);
    L(this, Cs, void 0);
    L(this, $s, void 0);
    O(this, vn, K()), O(this, xs, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), O(this, Cs, (n) => {
      this.props.changeState({ search: n });
    }), O(this, $s, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: n.text ?? n.value }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: x(this, xs), "data-value": n.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = x(this, vn).current) == null || s.focus();
  }
  _getClass(n) {
    return k(
      super._getClass(n),
      "picker-select picker-select-multi form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ f(
      bh,
      {
        inline: !0,
        ref: x(this, vn),
        defaultSearch: s,
        onSearch: x(this, Cs),
        onClear: x(this, $s),
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
vn = new WeakMap(), xs = new WeakMap(), Cs = new WeakMap(), $s = new WeakMap();
var ks, qi, Gi, Yi, Ki, xh;
class Bf extends ha {
  constructor() {
    super(...arguments);
    L(this, Ki);
    L(this, ks, K());
    L(this, qi, (n) => {
      this.props.disabled && (this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation());
    });
    L(this, Gi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, Yi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = x(this, ks).current) == null || s.focus();
  }
  _getClass(n) {
    return k(
      super._getClass(n),
      "picker-select picker-select-single form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ f(
      bh,
      {
        ref: x(this, ks),
        defaultSearch: s,
        onSearch: x(this, Gi),
        onClear: x(this, Yi),
        placeholder: Dt(this, Ki, xh).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a, disabled: l } = n, [h] = i, c = r && a;
    let d;
    c ? d = this._renderSearch(n) : h ? d = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: h.text ?? h.value }, "main") : d = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "main");
    const u = h && !c ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: x(this, qi), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      d,
      s,
      u,
      c ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
ks = new WeakMap(), qi = new WeakMap(), Gi = new WeakMap(), Yi = new WeakMap(), Ki = new WeakSet(), xh = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const zf = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
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
var ji, Xi, Ch, Ji, $h, Zi;
class Ff extends th {
  constructor() {
    super(...arguments);
    L(this, Xi);
    L(this, Ji);
    L(this, ji, K());
    L(this, Zi, ({ item: n }) => {
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
      const s = Dt(this, Xi, Ch).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return k(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ f(
      pe,
      {
        ref: x(this, ji),
        className: "picker-menu-list",
        items: Dt(this, Ji, $h).call(this),
        onClickItem: x(this, Zi),
        ...s
      }
    );
  }
}
ji = new WeakMap(), Xi = new WeakSet(), Ch = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Ji = new WeakSet(), $h = function() {
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
      text: typeof v == "string" ? zf(l, [v]) : /* @__PURE__ */ f(Ms, { content: v }),
      className: k(y, { hover: u === i }),
      "data-value": u,
      ...w
    }), c;
  }, []);
  return !a && h.length && (h[0].className = k(h[0].className, "hover")), h;
}, Zi = new WeakMap();
var ya = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), we = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, se = (e, t, n, s) => (ya(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), dt = (e, t, n) => (ya(e, t, "access private method"), n), Bn, Bt, $e, zn, Te, an, va, kh, re, ke;
let wa = class extends yt {
  constructor(t) {
    super(t), we(this, Te), we(this, va), we(this, re), we(this, Bn, void 0), we(this, Bt, void 0), we(this, $e, 0), we(this, zn, void 0), this.isEmptyValue = (r) => Mt(this, zn).has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? dt(this, re, ke).call(this, r) : dt(this, re, ke).call(this);
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), dt(this, re, ke).call(this, a);
    }, this.deselect = (r) => {
      const { valueList: o } = this, a = new Set(dt(this, Te, an).call(this, r)), l = o.filter((h) => !a.has(h));
      dt(this, re, ke).call(this, l);
    }, this.clear = () => {
      dt(this, re, ke).call(this);
    }, this.select = (r) => {
      const o = dt(this, Te, an).call(this, r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return dt(this, re, ke).call(this, a);
    }, this.isSelected = (r) => this.valueList.includes(r), m.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: n = ",", emptyValue: s = "" } = this.props;
    se(this, zn, new Set(s.split(n)));
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
    return dt(this, Te, an).call(this, this.state.value);
  }
  get firstEmptyValue() {
    return Mt(this, zn).values().next().value;
  }
  async load() {
    let t = Mt(this, Bt);
    t && t.abort(), t = new AbortController(), se(this, Bt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await vi(s || 500), Mt(this, Bt) !== t || (r = await n(i, { signal: t.signal }), Mt(this, Bt) !== t))
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
    return se(this, Bt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = Mt(this, Bn) || {}, r = {};
    if (se(this, Bn, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = (await this.load()).filter((a) => !this.isEmptyValue(a.value)), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const a = r.items || n.items, l = new Map(a.map((h) => [h.value, h]));
      r.selections = this.valueList.reduce((h, c) => (this.isEmptyValue(c) || h.push(l.get(c) || { value: c }), h), []), i.value = n.value;
    }
    const o = r.items;
    s.required && !s.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    Mt(this, $e) && clearTimeout(Mt(this, $e)), se(this, $e, window.setTimeout(() => {
      se(this, $e, 0), this.update();
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
    (t = Mt(this, Bt)) == null || t.abort(), se(this, Bt, void 0), se(this, Bn, void 0), clearTimeout(Mt(this, $e)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
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
    return t.Trigger || (t.multiple ? Hf : Bf);
  }
};
Bn = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
Te = /* @__PURE__ */ new WeakSet();
an = function(e) {
  let t = [];
  return typeof e == "string" && e.length ? t = m.unique(e.split(this.props.valueSplitter ?? ",")) : Array.isArray(e) && (t = m.unique(e)), t.filter((n) => !this.isEmptyValue(n));
};
va = /* @__PURE__ */ new WeakSet();
kh = function(e) {
  const t = dt(this, Te, an).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
};
re = /* @__PURE__ */ new WeakSet();
ke = function(e = []) {
  if (this.props.disabled || !dt(this, Te, an).call(this, e).length && this.props.required)
    return;
  const n = dt(this, va, kh).call(this, e);
  if (n !== this.state.value)
    return this.changeState({ value: n });
};
wa.defaultProps = {
  ...yt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
wa.Pop = Ff;
class Sh extends q {
}
Sh.NAME = "Picker";
Sh.Component = wa;
class Mh extends gt {
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
    return i && s.middleware.push(lr()), r && s.middleware.push(r === !0 ? $i() : $i(r)), o && s.middleware.push(Gr({ element: this.$arrow[0] })), a && s.middleware.push(cr(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = ia(t, n, () => {
      ur(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Gr || !o.arrow)
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
Mh.NAME = "Popovers";
Mh.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var _a = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Tt = (e, t, n) => (_a(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _e = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ri = (e, t, n, s) => (_a(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), bl = (e, t, n) => (_a(e, t, "access private method"), n), oi, ai, Le, po, li, ci, hi, mo;
let Th = class extends z {
  constructor(t) {
    super(t), _e(this, hi), _e(this, oi, void 0), _e(this, ai, K()), _e(this, Le, 0), _e(this, po, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), _e(this, li, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (bl(this, hi, mo).call(this), ri(this, Le, window.setTimeout(() => {
          r(i, n), ri(this, Le, 0);
        }, this.props.delay || 0)));
      });
    }), _e(this, ci, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, ri(this, oi, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return Tt(this, oi);
  }
  get input() {
    return Tt(this, ai).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    bl(this, hi, mo).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: p } = t, { focus: g, value: y } = n, { id: w } = this, v = typeof y != "string" || !y.trim().length;
    let _, b, E;
    return u && (E = u === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ f("label", { for: w, class: "input-control-prefix", children: E }, "prefix")), p && !v ? b = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Tt(this, po),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(nt, { icon: p })
      }
    ) : d && u && (b = E), b && (b = /* @__PURE__ */ f("label", { for: w, class: "input-control-suffix", children: b }, "suffix")), /* @__PURE__ */ f("div", { class: k("search-box input-control", r, { focus: g, empty: v, "has-prefix-icon": _, "has-suffix-icon": b }), style: o, children: [
      _,
      /* @__PURE__ */ f(
        "input",
        {
          ref: Tt(this, ai),
          id: w,
          type: "text",
          class: k("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: Tt(this, li),
          onChange: Tt(this, li),
          onFocus: Tt(this, ci),
          onBlur: Tt(this, ci)
        }
      ),
      b
    ] });
  }
};
oi = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
po = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakSet();
mo = function() {
  Tt(this, Le) && clearTimeout(Tt(this, Le)), ri(this, Le, 0);
};
Th.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Eh extends q {
}
Eh.NAME = "SearchBox";
Eh.Component = Th;
class Nh extends q {
}
Nh.NAME = "Toolbar";
Nh.Component = mt;
function As(e) {
  return e.split("-")[1];
}
function ba(e) {
  return e === "y" ? "height" : "width";
}
function ln(e) {
  return e.split("-")[0];
}
function pr(e) {
  return ["top", "bottom"].includes(ln(e)) ? "x" : "y";
}
function xl(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = pr(t), l = ba(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (ln(t)) {
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
  switch (As(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Uf = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = xl(h, s, l), u = s, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y], { x: _, y: b, data: E, reset: $ } = await v({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [w]: { ...p[w], ...E } }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : $.rects), { x: c, y: d } = xl(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function Rh(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ni(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Vf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = t, g = Rh(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], w = Ni(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), v = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, E = Ni(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: _, strategy: l }) : v);
  return { top: (w.top - E.top + g.top) / b.y, bottom: (E.bottom - w.bottom + g.bottom) / b.y, left: (w.left - E.left + g.left) / b.x, right: (E.right - w.right + g.right) / b.x };
}
const qf = Math.min, Gf = Math.max;
function Yf(e, t, n) {
  return Gf(e, qf(t, n));
}
const Kf = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Rh(s), c = { x: i, y: r }, d = pr(o), u = ba(d), p = await l.getDimensions(n), g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = a.reference[u] + a.reference[d] - c[d] - a.floating[u], v = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let b = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  b === 0 && (b = a.floating[u]);
  const E = w / 2 - v / 2, $ = h[g], T = b - p[u] - h[y], R = b / 2 - p[u] / 2 + E, P = Yf($, R, T), H = As(o) != null && R != P && a.reference[u] / 2 - (R < $ ? h[g] : h[y]) - p[u] / 2 < 0;
  return { [d]: c[d] - (H ? R < $ ? $ - R : T - R : 0), data: { [d]: P, centerOffset: R - P } };
} }), jf = ["top", "right", "bottom", "left"];
jf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Xf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ri(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xf[t]);
}
function Jf(e, t, n) {
  n === void 0 && (n = !1);
  const s = As(e), i = pr(e), r = ba(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ri(o)), { main: o, cross: Ri(o) };
}
const Zf = { start: "end", end: "start" };
function Ir(e) {
  return e.replace(/start|end/g, (t) => Zf[t]);
}
const Qf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = e, w = ln(s), v = ln(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (v || !g ? [Ri(o)] : function(S) {
      const A = Ri(S);
      return [Ir(S), A, Ir(A)];
    }(o));
    d || p === "none" || b.push(...function(S, A, D, M) {
      const I = As(S);
      let W = function(U, ot, xn) {
        const Ls = ["left", "right"], Cn = ["right", "left"], Ds = ["top", "bottom"], br = ["bottom", "top"];
        switch (U) {
          case "top":
          case "bottom":
            return xn ? ot ? Cn : Ls : ot ? Ls : Cn;
          case "left":
          case "right":
            return ot ? Ds : br;
          default:
            return [];
        }
      }(ln(S), D === "start", M);
      return I && (W = W.map((U) => U + "-" + I), A && (W = W.concat(W.map(Ir)))), W;
    }(o, g, p, _));
    const E = [o, ...b], $ = await Vf(t, y), T = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push($[w]), c) {
      const { main: S, cross: A } = Jf(s, r, _);
      T.push($[S], $[A]);
    }
    if (R = [...R, { placement: s, overflows: T }], !T.every((S) => S <= 0)) {
      var P;
      const S = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, A = E[S];
      if (A)
        return { data: { index: S, overflows: R }, reset: { placement: A } };
      let D = "bottom";
      switch (u) {
        case "bestFit": {
          var H;
          const M = (H = R.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, U) => W + U, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : H[0].placement;
          M && (D = M);
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
}, tp = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = ln(a), u = As(a), p = pr(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: v, crossAxis: _, alignmentAxis: b } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: v * g } : { x: v * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ut(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pt(e) {
  return ut(e).getComputedStyle(e);
}
function ge(e) {
  return Ph(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Gs;
function Ah() {
  if (Gs)
    return Gs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Gs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Gs) : navigator.userAgent;
}
function Zt(e) {
  return e instanceof ut(e).HTMLElement;
}
function Ct(e) {
  return e instanceof ut(e).Element;
}
function Ph(e) {
  return e instanceof ut(e).Node;
}
function Cl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot;
}
function mr(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function ep(e) {
  return ["table", "td", "th"].includes(ge(e));
}
function go(e) {
  const t = /firefox/i.test(Ah()), n = Pt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Lh() {
  return !/^((?!chrome|android).)*safari/i.test(Ah());
}
function xa(e) {
  return ["html", "body", "#document"].includes(ge(e));
}
const $l = Math.min, jn = Math.max, Ai = Math.round;
function Dh(e) {
  const t = Pt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = Ai(n) !== i || Ai(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Ih(e) {
  return Ct(e) ? e : e.contextElement;
}
const Wh = { x: 1, y: 1 };
function cn(e) {
  const t = Ih(e);
  if (!Zt(t))
    return Wh;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Dh(t);
  let o = (r ? Ai(n.width) : n.width) / s, a = (r ? Ai(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function He(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ih(e);
  let l = Wh;
  t && (s ? Ct(s) && (l = cn(s)) : l = cn(e));
  const h = a ? ut(a) : window, c = !Lh() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, p = o.width / l.x, g = o.height / l.y;
  if (a) {
    const y = ut(a), w = s && Ct(s) ? ut(s) : s;
    let v = y.frameElement;
    for (; v && s && w !== y; ) {
      const _ = cn(v), b = v.getBoundingClientRect(), E = getComputedStyle(v);
      b.x += (v.clientLeft + parseFloat(E.paddingLeft)) * _.x, b.y += (v.clientTop + parseFloat(E.paddingTop)) * _.y, d *= _.x, u *= _.y, p *= _.x, g *= _.y, d += b.x, u += b.y, v = ut(v).frameElement;
    }
  }
  return { width: p, height: g, top: u, right: d + p, bottom: u + g, left: d, x: d, y: u };
}
function fe(e) {
  return ((Ph(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function gr(e) {
  return Ct(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Oh(e) {
  return He(fe(e)).left + gr(e).scrollLeft;
}
function np(e, t, n) {
  const s = Zt(t), i = fe(t), r = He(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ge(t) !== "body" || mr(i)) && (o = gr(t)), Zt(t)) {
      const l = He(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Oh(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function os(e) {
  if (ge(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Cl(e) ? e.host : null) || fe(e);
  return Cl(t) ? t.host : t;
}
function kl(e) {
  return Zt(e) && Pt(e).position !== "fixed" ? e.offsetParent : null;
}
function Sl(e) {
  const t = ut(e);
  let n = kl(e);
  for (; n && ep(n) && Pt(n).position === "static"; )
    n = kl(n);
  return n && (ge(n) === "html" || ge(n) === "body" && Pt(n).position === "static" && !go(n)) ? t : n || function(s) {
    let i = os(s);
    for (; Zt(i) && !xa(i); ) {
      if (go(i))
        return i;
      i = os(i);
    }
    return null;
  }(e) || t;
}
function Hh(e) {
  const t = os(e);
  return xa(t) ? e.ownerDocument.body : Zt(t) && mr(t) ? t : Hh(t);
}
function Xn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Hh(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ut(s);
  return i ? t.concat(r, r.visualViewport || [], mr(s) ? s : []) : t.concat(s, Xn(s));
}
function Ml(e, t, n) {
  return t === "viewport" ? Ni(function(s, i) {
    const r = ut(s), o = fe(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = Lh();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : Ct(t) ? function(s, i) {
    const r = He(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Zt(s) ? cn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : Ni(function(s) {
    var i;
    const r = fe(s), o = gr(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = jn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = jn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Oh(s);
    const d = -o.scrollTop;
    return Pt(a || r).direction === "rtl" && (c += jn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(fe(e)));
}
const sp = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Xn(h).filter((w) => Ct(w) && ge(w) !== "body"), p = null;
    const g = Pt(h).position === "fixed";
    let y = g ? os(h) : h;
    for (; Ct(y) && !xa(y); ) {
      const w = Pt(y), v = go(y);
      (g ? v || p : v || w.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = w : u = u.filter((_) => _ !== y), y = os(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Ml(t, c, i);
    return h.top = jn(d.top, h.top), h.right = $l(d.right, h.right), h.bottom = $l(d.bottom, h.bottom), h.left = jn(d.left, h.left), h;
  }, Ml(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Zt(n), r = fe(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ge(n) !== "body" || mr(r)) && (o = gr(n)), Zt(n))) {
    const h = He(n);
    a = cn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ct, getDimensions: function(e) {
  return Dh(e);
}, getOffsetParent: Sl, getDocumentElement: fe, getScale: cn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Sl, r = this.getDimensions;
  return { reference: np(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Pt(e).direction === "rtl" };
function ip(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...Ct(e) ? Xn(e) : e.contextElement ? Xn(e.contextElement) : [], ...Xn(t)] : [];
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
  let u = a ? He(e) : null;
  return a && function p() {
    const g = He(e);
    !u || g.x === u.x && g.y === u.y && g.width === u.width && g.height === u.height || n(), u = g, c = requestAnimationFrame(p);
  }(), n(), () => {
    var p;
    h.forEach((g) => {
      l && g.removeEventListener("scroll", n), r && g.removeEventListener("resize", n);
    }), (p = d) == null || p.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const rp = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: sp, ...n }, r = { ...i.platform, _c: s };
  return Uf(e, t, { ...i, platform: r });
};
var Ca = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, V = (e, t, n) => (Ca(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Be = (e, t, n, s) => (Ca(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), At = (e, t, n) => (Ca(e, t, "access private method"), n), Jn, Zn, Fn, en, lt, yo, Pi, yr, $a, ka, Bh, vo, zh, Sa, Fh, Ma, Uh, Ta, Vh, wo, qh, Ea, Gh, Qn, _o, Yh;
const nn = class extends gt {
  constructor() {
    super(...arguments), X(this, yr), X(this, ka), X(this, vo), X(this, Sa), X(this, Ma), X(this, Ta), X(this, wo), X(this, Ea), X(this, _o), X(this, Jn, !1), X(this, Zn, void 0), X(this, Fn, 0), X(this, en, void 0), X(this, lt, void 0), X(this, yo, void 0), X(this, Pi, void 0), this.hideLater = () => {
      V(this, Qn).call(this), Be(this, Fn, window.setTimeout(this.hide.bind(this), 100));
    }, X(this, Qn, () => {
      clearTimeout(V(this, Fn)), Be(this, Fn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = V(this, en)) == null ? void 0 : e.classList.contains(nn.CLASS_SHOW);
  }
  get tooltip() {
    return V(this, en) || At(this, vo, zh).call(this);
  }
  get trigger() {
    return V(this, yo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${nn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !V(this, Jn) && this.isHover && At(this, _o, Yh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(nn.CLASS_SHOW), At(this, wo, qh).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = V(this, Pi)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = V(this, en)) == null || t.classList.remove(nn.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    V(this, Jn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", V(this, Qn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
let pt = nn;
Jn = /* @__PURE__ */ new WeakMap();
Zn = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakMap();
en = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
yo = /* @__PURE__ */ new WeakMap();
Pi = /* @__PURE__ */ new WeakMap();
yr = /* @__PURE__ */ new WeakSet();
$a = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
ka = /* @__PURE__ */ new WeakSet();
Bh = function() {
  const e = At(this, yr, $a).call(this);
  return Be(this, lt, document.createElement("div")), V(this, lt).style.position = this.options.strategy, V(this, lt).style.width = `${e}px`, V(this, lt).style.height = `${e}px`, V(this, lt).style.transform = "rotate(45deg)", V(this, lt);
};
vo = /* @__PURE__ */ new WeakSet();
zh = function() {
  var n;
  const e = nn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(At(this, ka, Bh).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Be(this, en, t), t;
};
Sa = /* @__PURE__ */ new WeakSet();
Fh = function() {
  var i;
  const e = At(this, yr, $a).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [tp(e), Qf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && V(this, lt) && ((i = s.middleware) == null || i.push(Kf({ element: V(this, lt) }))), s;
};
Ma = /* @__PURE__ */ new WeakSet();
Uh = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Ta = /* @__PURE__ */ new WeakSet();
Vh = function(e) {
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
wo = /* @__PURE__ */ new WeakSet();
qh = function() {
  const e = At(this, Sa, Fh).call(this), t = At(this, Ea, Gh).call(this);
  Be(this, Pi, ip(t, this.tooltip, () => {
    this.element && rp(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = At(this, Ma, Uh).call(this, o);
      if (i.arrow && V(this, lt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(V(this, lt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-V(this, lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...At(this, Ta, Vh).call(this, o)
        });
      }
    });
  }));
};
Ea = /* @__PURE__ */ new WeakSet();
Gh = function() {
  return V(this, Zn) || Be(this, Zn, {
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
  }), V(this, Zn);
};
Qn = /* @__PURE__ */ new WeakMap();
_o = /* @__PURE__ */ new WeakSet();
Yh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", V(this, Qn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Be(this, Jn, !0);
};
pt.NAME = "tooltip";
pt.TOOLTIP_CLASS = "tooltip";
pt.CLASS_SHOW = "show";
pt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
pt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, pt.MENU_SELECTOR);
  if (n) {
    const i = pt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    pt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, pt.MENU_SELECTOR);
  if (!n)
    return;
  const s = pt.ensure(n);
  s.isHover && s.show();
});
function op({
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
  ...E
}) {
  const $ = Array.isArray(w) ? { items: w } : w;
  return $ && ($.btnProps || ($.btnProps = { size: "sm" }), $.className = k("tree-actions not-nested-toggle", $.className)), /* @__PURE__ */ f(
    "div",
    {
      className: k("tree-item-content", n, { disabled: l, active: h }),
      title: g,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${_} * var(--tree-indent, 20px))` }, r),
      "data-level": _,
      ...o,
      ...E,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${b ? " state" : ""}`, children: b ? /* @__PURE__ */ f("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(nt, { icon: c, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, children: d }) : /* @__PURE__ */ f("span", { class: "text", children: d }),
        /* @__PURE__ */ f(Ms, { content: i }),
        s,
        $ ? /* @__PURE__ */ f(mt, { ...$ }) : null,
        /* @__PURE__ */ f(nt, { icon: p, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Na = class extends ar {
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
    return n && (t.className = k(t.className, "tree-hover")), t;
  }
};
Na.ItemComponents = {
  item: op
};
Na.NAME = "tree";
class Kh extends q {
}
Kh.NAME = "Tree";
Kh.Component = Na;
class jh extends gt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? _u(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
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
      return new pt(r, { title: n }), r;
    }
    return m("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return r.data("tooltip", new pt(r, { title: n })), r;
    }
    return m("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return m(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return m(`<span class="file-size text-gray">${wu(t)}</span>`);
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
jh.DEFAULT = {
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
class ap extends jh {
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
ap.DEFAULT = {
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
var Ss, Qi, tr, er, Ll;
let lp = (Ll = class extends z {
  constructor() {
    super(...arguments);
    L(this, Ss, K());
    L(this, Qi, (n) => {
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
    L(this, tr, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, er, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
  }
  get element() {
    return x(this, Ss).current;
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
          this.setState({ loading: !1, content: /* @__PURE__ */ f(Qo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
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
        onDragStart: x(this, tr),
        onDragEnd: x(this, er),
        "data-id": c,
        ref: x(this, Ss),
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: x(this, Qi), children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          g
        ]
      }
    ) });
  }
}, Ss = new WeakMap(), Qi = new WeakMap(), tr = new WeakMap(), er = new WeakMap(), Ll);
var Xh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, jt = (e, t, n) => (Xh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, St = (e, t, n) => (Xh(e, t, "access private method"), n), Qt, Ra, Jh, Aa, Zh, bo, Qh, Pa, td, Li, xo, vr, Co, La, ed, $o, ko, wr, Da;
const Ia = class extends z {
  constructor() {
    super(...arguments), bt(this, Ra), bt(this, Aa), bt(this, bo), bt(this, Pa), bt(this, Li), bt(this, vr), bt(this, La), bt(this, Qt, /* @__PURE__ */ new Map()), this.state = {}, bt(this, $o, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), bt(this, ko, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = St(this, bo, Qh).call(this), { cellHeight: n, grid: s } = this.props, i = jt(this, Qt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ f(
        lp,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: jt(this, $o),
          onDragEnd: jt(this, ko)
        },
        r.id
      );
    }) }) });
  }
};
let Wa = Ia;
Qt = /* @__PURE__ */ new WeakMap();
Ra = /* @__PURE__ */ new WeakSet();
Jh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Aa = /* @__PURE__ */ new WeakSet();
Zh = function() {
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
    } = i, [u, p] = St(this, Ra, Jh).call(this, o);
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
bo = /* @__PURE__ */ new WeakSet();
Qh = function() {
  jt(this, Qt).clear();
  let e = 0;
  const t = St(this, Aa, Zh).call(this);
  return t.forEach((n) => {
    St(this, Pa, td).call(this, n);
    const [, s, , i] = jt(this, Qt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Pa = /* @__PURE__ */ new WeakSet();
td = function(e) {
  const t = jt(this, Qt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = St(this, La, ed).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    St(this, vr, Co).call(this, n, [s, i, r, o]);
};
Li = /* @__PURE__ */ new WeakSet();
xo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of jt(this, Qt).entries())
    if (s !== n && St(t = Ia, wr, Da).call(t, i, e))
      return !1;
  return !0;
};
vr = /* @__PURE__ */ new WeakSet();
Co = function(e, t) {
  var n;
  jt(this, Qt).set(e, t);
  for (const [s, i] of jt(this, Qt).entries())
    s !== e && St(n = Ia, wr, Da).call(n, i, t) && (i[1] = t[1] + t[3], St(this, vr, Co).call(this, s, i));
};
La = /* @__PURE__ */ new WeakSet();
ed = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (St(this, Li, xo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (St(this, Li, xo).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
$o = /* @__PURE__ */ new WeakMap();
ko = /* @__PURE__ */ new WeakMap();
wr = /* @__PURE__ */ new WeakSet();
Da = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
bt(Wa, wr);
Wa.defaultProps = {
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
class nd extends q {
}
nd.NAME = "Dashboard";
nd.Component = Wa;
var he, de;
class Tl extends z {
  constructor(n) {
    super(n);
    L(this, he, void 0);
    L(this, de, void 0);
    O(this, he, 0), O(this, de, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (x(this, he) && cancelAnimationFrame(x(this, he)), O(this, he, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), O(this, he, 0);
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
    n && (O(this, de, typeof n == "string" ? document : n.current), x(this, de).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), x(this, de) && x(this, de).removeEventListener("wheel", this._handleWheel);
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
        className: k("scrollbar", r, {
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
he = new WeakMap(), de = new WeakMap();
const Di = /* @__PURE__ */ new Map(), Ii = [];
function sd(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Di.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Di.set(n, e), t != null && t.buildIn && !Ii.includes(n) && Ii.push(n);
}
function Ve(e, t) {
  sd(e, t);
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
function id(e) {
  return Di.delete(e);
}
function cp(e) {
  if (typeof e == "string") {
    const t = Di.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function rd(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = cp(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && rd(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function hp(e = [], t = !0) {
  return t && Ii.length && e.unshift(...Ii), e != null && e.length ? rd([], e, /* @__PURE__ */ new Set()) : [];
}
function od() {
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
function dp(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function El(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Wr(e, t = !1) {
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
function up(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = El(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
    const { colTypes: b, onAddCol: E } = _;
    b && Object.entries(b).forEach(([$, T]) => {
      v[$] || (v[$] = []), v[$].push(T);
    }), E && w.push(E);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: b = "", name: E } = _, $ = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: b
    }, T = {
      name: E,
      type: b,
      setting: $,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, R = v[b];
    R && R.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, $) : I;
      W && Object.assign($, W, _);
    });
    const { fixed: P, flex: H, minWidth: S = r, maxWidth: A = o } = $, D = El($.width || i, i);
    T.flex = H === !0 ? 1 : typeof H == "number" ? H : 0, T.width = dp(D < 1 ? Math.round(D * s) : D, S, A), w.forEach((I) => I.call(e, T)), p.push(T), g[T.name] = T;
    const M = P ? P === "left" ? d : u : c;
    M.list.push(T), M.totalWidth += T.width, M.width = M.totalWidth, T.flex && M.flexList.push(T), typeof $.order == "number" && (y = !0);
  }), y) {
    const _ = (b, E) => (b.setting.order ?? 0) - (E.setting.order ?? 0);
    p.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return Wr(d, !0), Wr(u, !0), c.widthSetting = s - d.width - u.width, Wr(c), {
    list: p,
    map: g,
    left: d,
    center: c,
    right: u
  };
}
function fp({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: h, left: c, top: d, ...u }) {
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
  }], _ = ["dtable-cell-content", e.setting.cellClass], b = (D = s.data) == null ? void 0 : D[e.name], E = [a ?? b ?? ""], $ = i ? i(E, { row: s, col: e, value: b }, j) : E, T = [], R = [], P = {}, H = {};
  let S = "div";
  $ == null || $.forEach((M) => {
    if (typeof M == "object" && M && !Q(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const I = M.outer ? T : R;
      M.html ? I.push(/* @__PURE__ */ f("div", { className: k("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? p : w, M.style), M.className && (M.outer ? v : _).push(M.className), M.children && I.push(M.children), M.attrs && Object.assign(M.outer ? P : H, M.attrs)), M.tagName && !M.outer && (S = M.tagName);
    } else
      R.push(M);
  });
  const A = S;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k(v),
      style: p,
      "data-col": e.name,
      "data-row": s.id,
      "data-type": e.type || null,
      ...u,
      ...P,
      children: [
        R.length > 0 && /* @__PURE__ */ f(A, { className: k(_), style: w, ...H, children: R }),
        T
      ]
    }
  );
}
function Or({
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
  CellComponent: c = fp,
  onRenderCell: d
}) {
  var g;
  const u = Array.isArray(e) ? e : [e], p = ((g = u[0]) == null ? void 0 : g.top) ?? 0;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-cells", h),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + p }, children: u.reduce((y, w) => (t.forEach((v) => {
        y.push(
          /* @__PURE__ */ f(
            c,
            {
              className: `is-${w.index % 2 ? "odd" : "even"}-row`,
              col: v,
              row: w,
              top: w.top - p,
              height: n,
              onRenderCell: d
            },
            `${w.index}:${v.name}`
          )
        );
      }), y), []) })
    }
  );
}
function ad({
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
    Or,
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
    Or,
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
    Or,
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
      className: k("dtable-block", h),
      style: { ...c, top: e, height: t },
      children: [
        u,
        p,
        g
      ]
    }
  );
}
var Oa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, N = (e, t, n) => (Oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, G = (e, t, n, s) => (Oa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ht = (e, t, n) => (Oa(e, t, "access private method"), n), Je, Un, De, qt, Ee, at, Ft, zt, Vn, di, Wi, as, oe, qn, Gn, So, ld, Mo, cd, To, hd, Eo, dd, ui, No, _r, Oi, Ro, Ao, Po, Lo, Yn, fi, Ha, ud, Ba, fd, Do, pd;
let za = class extends z {
  constructor(t) {
    super(t), B(this, So), B(this, Mo), B(this, To), B(this, Eo), B(this, ui), B(this, Yn), B(this, Ha), B(this, Ba), B(this, Do), this.ref = K(), B(this, Je, 0), B(this, Un, void 0), B(this, De, !1), B(this, qt, void 0), B(this, Ee, void 0), B(this, at, []), B(this, Ft, void 0), B(this, zt, /* @__PURE__ */ new Map()), B(this, Vn, {}), B(this, di, void 0), B(this, Wi, []), B(this, as, { in: !1 }), this.updateLayout = () => {
      N(this, Je) && cancelAnimationFrame(N(this, Je)), G(this, Je, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, Je, 0);
      }));
    }, B(this, oe, (n, s) => {
      s = s || n.type;
      const i = N(this, zt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, qn, (n) => {
      N(this, oe).call(this, n, `window_${n.type}`);
    }), B(this, Gn, (n) => {
      N(this, oe).call(this, n, `document_${n.type}`);
    }), B(this, _r, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, at).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, Oi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, Ro, (n) => {
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
    }), B(this, Ao, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), B(this, Po, (n) => {
      const s = m(n.target).closest(".dtable-cell");
      if (!s.length)
        return ht(this, Yn, fi).call(this, !1);
      ht(this, Yn, fi).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), B(this, Lo, () => {
      ht(this, Yn, fi).call(this, !1);
    }), G(this, Un, t.id ?? `dtable-${Xc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, Ee, Object.freeze(hp(t.plugins))), N(this, Ee).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(N(this, Vn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = N(this, Ft)) == null ? void 0 : t.options) || N(this, qt) || od();
  }
  get plugins() {
    return N(this, at);
  }
  get layout() {
    return N(this, Ft);
  }
  get id() {
    return N(this, Un);
  }
  get data() {
    return N(this, Vn);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, as);
  }
  componentWillReceiveProps() {
    G(this, qt, void 0);
  }
  componentDidMount() {
    N(this, De) ? this.forceUpdate() : ht(this, ui, No).call(this), N(this, at).forEach((n) => {
      let { events: s } = n;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", N(this, Ro)), this.on("keydown", N(this, Ao));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", N(this, Po)), this.on("mouseleave", N(this, Lo))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(n), G(this, di, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, at).forEach((n) => {
      var s;
      (s = n.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    N(this, De) ? ht(this, ui, No).call(this) : N(this, at).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = N(this, di)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of N(this, zt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), N(this, qn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), N(this, Gn)) : t.removeEventListener(s, N(this, oe));
    N(this, at).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), N(this, Ee).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), G(this, Vn, {}), N(this, zt).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = N(this, zt).get(t);
    i ? i.push(n) : (N(this, zt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, qn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Gn)) : (r = this.element) == null || r.addEventListener(t, N(this, oe)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = N(this, zt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (N(this, zt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, qn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Gn)) : (o = this.element) == null || o.removeEventListener(t, N(this, oe)));
  }
  emitCustomEvent(t, n) {
    N(this, oe).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
    if (!N(this, qt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      G(this, Ft, void 0);
    else if (s === "options") {
      if (G(this, qt, void 0), !N(this, Ft))
        return;
      G(this, Ft, void 0);
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
    return tt(N(this, Wi), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = ht(this, Do, pd).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      ht(this, So, ld).call(this, t),
      ht(this, Mo, cd).call(this, t),
      ht(this, To, hd).call(this, t),
      ht(this, Eo, dd).call(this, t)
    ), N(this, at).forEach((u) => {
      var g;
      const p = (g = u.onRender) == null ? void 0 : g.call(this, t);
      p && (p.style && Object.assign(h, p.style), p.className && c.push(p.className), p.children && d.push(p.children));
    })), /* @__PURE__ */ f(
      "div",
      {
        id: N(this, Un),
        className: k(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Je = /* @__PURE__ */ new WeakMap();
Un = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
as = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Gn = /* @__PURE__ */ new WeakMap();
So = /* @__PURE__ */ new WeakSet();
ld = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i, rowHeight: r } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      ad,
      {
        className: "dtable-header",
        cols: n,
        height: s,
        scrollLeft: i,
        rowHeight: r,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, _r)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ta,
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
Mo = /* @__PURE__ */ new WeakSet();
cd = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ f(
    ad,
    {
      className: "dtable-body",
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, _r)
    },
    "body"
  );
};
To = /* @__PURE__ */ new WeakSet();
hd = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ta,
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
dd = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      Tl,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, Oi),
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
      Tl,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, Oi),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
ui = /* @__PURE__ */ new WeakSet();
No = function() {
  var e;
  G(this, De, !1), (e = this.options.afterRender) == null || e.call(this), N(this, at).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
_r = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
Ro = /* @__PURE__ */ new WeakMap();
Ao = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakMap();
Lo = /* @__PURE__ */ new WeakMap();
Yn = /* @__PURE__ */ new WeakSet();
fi = function(e) {
  const { element: t, options: n } = this;
  if (!t)
    return;
  const s = m(t), i = e ? { in: !0, row: e[0], col: e[1] } : { in: !1 };
  n.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, as);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, as, i);
};
Ha = /* @__PURE__ */ new WeakSet();
ud = function() {
  if (N(this, qt))
    return !1;
  const t = { ...od(), ...N(this, Ee).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return G(this, qt, t), G(this, at, N(this, Ee).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), G(this, Wi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Ba = /* @__PURE__ */ new WeakSet();
fd = function() {
  var P, H;
  const { plugins: e } = this;
  let t = N(this, qt);
  const n = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((S) => {
    var D;
    const A = (D = S.beforeLayout) == null ? void 0 : D.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(n, S.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: S } = this;
    if (S)
      i = S.clientWidth;
    else {
      G(this, De, !0);
      return;
    }
  }
  const r = up(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (S, A, D) => {
    var I, W;
    const M = { data: D ?? { [a]: S }, id: S, index: h.length, top: 0 };
    if (D || (M.lazy = !0), h.push(M), ((I = t.onAddRow) == null ? void 0 : I.call(this, M, A)) !== !1) {
      for (const U of e)
        if (((W = U.onAddRow) == null ? void 0 : W.call(this, M, A)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let S = 0; S < o; S++)
      c(`${S}`, S);
  else
    Array.isArray(o) && o.forEach((S, A) => {
      typeof S == "object" ? c(`${S[a] ?? ""}`, A, S) : c(`${S ?? ""}`, A);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const S = t.onAddRows.call(this, d);
    S && (d = S);
  }
  for (const S of e) {
    const A = (P = S.onAddRows) == null ? void 0 : P.call(this, d);
    A && (d = A);
  }
  d.forEach((S, A) => {
    u[S.id] = S, S.index = A, S.top = S.index * l;
  });
  const { header: p, footer: g } = t, y = p ? t.headerHeight || l : 0, w = g ? t.footerHeight || l : 0;
  let v = t.height, _ = 0;
  const b = d.length * l, E = y + w + b;
  if (typeof v == "function" && (v = v.call(this, E)), v === "auto")
    _ = E;
  else if (typeof v == "object")
    _ = Math.min(v.max, Math.max(v.min, E));
  else if (v === "100%") {
    const { parent: S } = this;
    if (S)
      _ = S.clientHeight;
    else {
      _ = 0, G(this, De, !0);
      return;
    }
  } else
    _ = v;
  const $ = _ - y - w, T = {
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
  }, R = (H = t.onLayout) == null ? void 0 : H.call(this, T);
  R && Object.assign(T, R), e.forEach((S) => {
    if (S.onLayout) {
      const A = S.onLayout.call(this, T);
      A && Object.assign(T, A);
    }
  }), G(this, Ft, T);
};
Do = /* @__PURE__ */ new WeakSet();
pd = function() {
  (ht(this, Ha, ud).call(this) || !N(this, Ft)) && ht(this, Ba, fd).call(this);
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
za.addPlugin = sd;
za.removePlugin = id;
function pp(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !md.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function mp(e) {
  return this.state.checkedRows[e] ?? !1;
}
function md() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function gp() {
  return Object.keys(this.state.checkedRows);
}
function yp(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Nl(e, t, n = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const Rl = 'input[type="checkbox"],.dtable-checkbox', vp = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Nl
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
    toggleCheckRows: pp,
    isRowChecked: mp,
    isAllRowChecked: md,
    getChecks: gp,
    toggleCheckable: yp
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Nl(e) })
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
    const n = t.closest(Rl);
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onCellClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (n.closest(Rl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, wp = Ve(vp);
var gd = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(gd || {});
function Hi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Hi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Hi.call(this, t.parent).level + 1 : 0, t;
}
function _p(e) {
  return e !== void 0 ? Hi.call(this, e) : this.data.nestedMap;
}
function bp(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !yd.call(this)), t) {
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
function yd() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function vd(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = vd(e, t, o.children, s + 1)));
  }
  return t;
}
function wd(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, wd(e, r, n, s);
  }), i;
}
function _d(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && _d(e, r.parent, n, s, i);
}
const xp = {
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
        const o = wd(this, i, r, s);
        o != null && o.parent && _d(this, o.parent, r, s, n);
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
    getNestedInfo: _p,
    toggleRow: bp,
    isAllCollapsed: yd,
    getNestedRowInfo: Hi
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
    ), vd(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: k(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = k(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Cp = Ve(xp);
function bd(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: it(i, t.row.data), ...s, ...r, ...a, children: n });
}
function Fa(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : it(e, n);
}
function xd(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), kt(n, e, s ?? n));
}
function Cd(e, t) {
  const { link: n } = t.col.setting, s = bd(n, t, e[0]);
  return s && (e[0] = s), e;
}
function $d(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Fa(n, t, e[0])), e;
}
function kd(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Sd(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = xd(s, t, e[0], i), e;
}
function Io(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : Fa(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const $p = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Io(e, t, !0);
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
    if (n && (e = Sd(e, t, n)), e = kd(e, t), e = $d(e, t), s ? e = Io(e, t) : e = Cd(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = it(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, kp = Ve($p, { buildIn: !0 });
function Hr(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], d = {
    size: "xs",
    className: k(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ f(Jc, { ...d }), n.type === "avatarBtn") {
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
const Sp = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Hr
    },
    avatarBtn: {
      onRenderCell: Hr
    },
    avatarName: {
      onRenderCell: Hr
    }
  }
}, Mp = Ve(Sp, { buildIn: !0 }), Tp = {
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
}, Ep = Ve(Tp, { buildIn: !0 }), Br = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Np = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Br(t.left.list), Br(t.center.list), Br(t.right.list);
  }
}, Rp = Ve(Np), Ap = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: gd,
  avatar: Mp,
  checkable: wp,
  group: Rp,
  nested: Cp,
  renderDatetime: xd,
  renderDatetimeCell: Sd,
  renderFormat: Fa,
  renderFormatCell: $d,
  renderHtmlCell: Io,
  renderLink: bd,
  renderLinkCell: Cd,
  renderMapCell: kd,
  rich: kp,
  sortType: Ep
}, Symbol.toStringTag, { value: "Module" }));
class Ps extends q {
}
Ps.NAME = "DTable";
Ps.Component = za;
Ps.definePlugin = Ve;
Ps.removePlugin = id;
Ps.plugins = Ap;
var Md = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Al = (e, t, n) => (Md(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Pp = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Pl = (e, t, n, s) => (Md(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ze;
const Lp = "nav", pi = '[data-toggle="tab"]', Dp = "active";
class Td extends gt {
  constructor() {
    super(...arguments), Pp(this, Ze, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(pi);
    let i = t ? m(t).closest(pi) : s.filter(`.${Dp}`);
    if (!i.length && (i = n.find(pi).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = m(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Al(this, Ze) && clearTimeout(Al(this, Ze)), Pl(this, Ze, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Pl(this, Ze, 0);
    }, 10)));
  }
}
Ze = /* @__PURE__ */ new WeakMap();
Td.NAME = "Tabs";
m(document).on("click.tabs.zui", pi, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Lp}`);
  n.length && Td.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  xc as ActionMenu,
  $c as ActionMenuNested,
  Zc as Avatar,
  Qc as BtnGroup,
  sh as ColorPicker,
  gt as Component,
  q as ComponentFromReact,
  rt as ContextMenu,
  Ms as CustomContent,
  ta as CustomRender,
  Ps as DTable,
  nd as Dashboard,
  hh as DatePicker,
  Kt as Dropdown,
  jc as EventBus,
  gc as HElement,
  Qo as HtmlContent,
  nt as Icon,
  kc as Menu,
  Gc as Messager,
  uh as Modal,
  ee as ModalBase,
  gh as ModalTrigger,
  vh as Nav,
  wh as Pager,
  _h as Pick,
  Sh as Picker,
  Mh as Popovers,
  Kc as ProgressCircle,
  z as ReactComponent,
  Eh as SearchBox,
  is as TIME_DAY,
  Td as Tabs,
  ch as TimePicker,
  Nh as Toolbar,
  pt as Tooltip,
  Kh as Tree,
  jh as Upload,
  ap as UploadImgs,
  _f as addDate,
  m as cash,
  k as classes,
  Sr as componentsMap,
  _u as convertBytes,
  ku as create,
  Z as createDate,
  Du as createPortal,
  K as createRef,
  vu as deepGet,
  yu as deepGetPath,
  vi as delay,
  Wp as dom,
  wu as formatBytes,
  kt as formatDate,
  Zp as formatDateSpan,
  it as formatString,
  tc as getClassList,
  j as h,
  Op as hh,
  Nu as htm,
  tt as i18n,
  Rs as isSameDay,
  ih as isSameMonth,
  Kp as isSameWeek,
  to as isSameYear,
  jp as isToday,
  Jp as isTomorrow,
  Q as isValidElement,
  Xp as isYesterday,
  ul as nativeEvents,
  ns as render,
  yc as renderCustomContent,
  Au as renderCustomResult,
  ff as store,
  ec as storeData,
  $u as takeData
};
//# sourceMappingURL=zui.js.map
