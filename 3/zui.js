var Ln = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var N = (s, t, e) => (Ln(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, W = (s, t, e, n) => (Ln(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var zt = (s, t, e) => (Ln(s, t, "access private method"), e);
const Lt = document, qs = window, pr = Lt.documentElement, ye = Lt.createElement.bind(Lt), mr = ye("div"), Rn = ye("table"), Rl = ye("tbody"), Io = ye("tr"), { isArray: yn, prototype: gr } = Array, { concat: Wl, filter: Pi, indexOf: _r, map: yr, push: Ol, slice: vr, some: Li, splice: Hl } = gr, Bl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Fl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, zl = /<.+>/, Vl = /^\w+$/;
function Ri(s, t) {
  const e = Ul(t);
  return !s || !e && !pe(t) && !G(t) ? [] : !e && Fl.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Vl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class vn {
  constructor(t, e) {
    if (!t)
      return;
    if (Zn(t))
      return t;
    let n = t;
    if (et(t)) {
      const i = e || Lt;
      if (n = Bl.test(t) && pe(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : zl.test(t) ? Cr(t) : Zn(i) ? i.find(t) : et(i) ? u(i).find(t) : Ri(t, i), !n)
        return;
    } else if (ve(t))
      return this.ready(t);
    (n.nodeType || n === qs) && (n = [n]), this.length = n.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new vn(t, e);
  }
}
const x = vn.prototype, u = x.init;
u.fn = u.prototype = x;
x.length = 0;
x.splice = Hl;
typeof Symbol == "function" && (x[Symbol.iterator] = gr[Symbol.iterator]);
function Zn(s) {
  return s instanceof vn;
}
function De(s) {
  return !!s && s === s.window;
}
function pe(s) {
  return !!s && s.nodeType === 9;
}
function Ul(s) {
  return !!s && s.nodeType === 11;
}
function G(s) {
  return !!s && s.nodeType === 1;
}
function jl(s) {
  return !!s && s.nodeType === 3;
}
function ql(s) {
  return typeof s == "boolean";
}
function ve(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function rt(s) {
  return s === void 0;
}
function ts(s) {
  return s === null;
}
function wr(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Wi(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = De;
u.isFunction = ve;
u.isArray = yn;
u.isNumeric = wr;
u.isPlainObject = Wi;
function Y(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Wi(s)) {
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
x.each = function(s) {
  return Y(this, s);
};
x.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Gs(...s) {
  const t = ql(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Gs(t, u, e);
  for (let i = 0; i < n; i++) {
    const o = s[i];
    for (const r in o)
      t && (yn(o[r]) || Wi(o[r])) ? ((!e[r] || e[r].constructor !== o[r].constructor) && (e[r] = new o[r].constructor()), Gs(t, e[r], o[r])) : e[r] = o[r];
  }
  return e;
}
u.extend = Gs;
x.extend = function(s) {
  return Gs(x, s);
};
const Gl = /\S+/g;
function wn(s) {
  return et(s) ? s.match(Gl) || [] : [];
}
x.toggleClass = function(s, t) {
  const e = wn(s), n = !rt(t);
  return this.each((i, o) => {
    G(o) && Y(e, (r, a) => {
      n ? t ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
x.addClass = function(s) {
  return this.toggleClass(s, !0);
};
x.removeAttr = function(s) {
  const t = wn(s);
  return this.each((e, n) => {
    G(n) && Y(t, (i, o) => {
      n.removeAttribute(o);
    });
  });
};
function Yl(s, t) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return ts(e) ? void 0 : e;
      }
      return rt(t) ? this : ts(t) ? this.removeAttr(s) : this.each((e, n) => {
        G(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
x.attr = Yl;
x.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
x.hasClass = function(s) {
  return !!s && Li.call(this, (t) => G(t) && t.classList.contains(s));
};
x.get = function(s) {
  return rt(s) ? vr.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
x.eq = function(s) {
  return u(this.get(s));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Kl(s) {
  return rt(s) ? this.get().map((t) => G(t) || jl(t) ? t.textContent : "").join("") : this.each((t, e) => {
    G(e) && (e.textContent = s);
  });
}
x.text = Kl;
function Rt(s, t, e) {
  if (!G(s))
    return;
  const n = qs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function wt(s, t) {
  return parseInt(Rt(s, t), 10) || 0;
}
function Ao(s, t) {
  return wt(s, `border${t ? "Left" : "Top"}Width`) + wt(s, `padding${t ? "Left" : "Top"}`) + wt(s, `padding${t ? "Right" : "Bottom"}`) + wt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const Wn = {};
function Xl(s) {
  if (Wn[s])
    return Wn[s];
  const t = ye(s);
  Lt.body.insertBefore(t, null);
  const e = Rt(t, "display");
  return Lt.body.removeChild(t), Wn[s] = e !== "none" ? e : "block";
}
function Do(s) {
  return Rt(s, "display") === "none";
}
function br(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function bn(s) {
  return et(s) ? (t, e) => br(e, s) : ve(s) ? s : Zn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
x.filter = function(s) {
  const t = bn(s);
  return u(Pi.call(this, (e, n) => t.call(e, n, e)));
};
function te(s, t) {
  return t ? s.filter(t) : s;
}
x.detach = function(s) {
  return te(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Zl = /^\s*<(\w+)[^>]*>/, Jl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Po = {
  "*": mr,
  tr: Rl,
  td: Io,
  th: Io,
  thead: Rn,
  tbody: Rn,
  tfoot: Rn
};
function Cr(s) {
  if (!et(s))
    return [];
  if (Jl.test(s))
    return [ye(RegExp.$1)];
  const t = Zl.test(s) && RegExp.$1, e = Po[t] || Po["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = Cr;
x.has = function(s) {
  const t = et(s) ? (e, n) => Ri(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
x.not = function(s) {
  const t = bn(s);
  return this.filter((e, n) => (!et(s) || G(n)) && !t.call(n, e, n));
};
function Ht(s, t, e, n) {
  const i = [], o = ve(t), r = n && bn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (o) {
      const c = t(s[a]);
      c.length && Ol.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && r(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function kr(s) {
  return s.multiple && s.options ? Ht(Pi.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Ql(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Ir.test(e.type)) {
      const i = yn(s) ? yr.call(s, String) : ts(s) ? [] : [String(s)];
      n ? Y(e.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = rt(s) || ts(s) ? "" : s;
  }) : this[0] && kr(this[0]);
}
x.val = Ql;
x.is = function(s) {
  const t = bn(s);
  return Li.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function $t(s) {
  return s.length > 1 ? Pi.call(s, (t, e, n) => _r.call(n, t) === e) : s;
}
u.unique = $t;
x.add = function(s, t) {
  return u($t(this.get().concat(u(s, t).get())));
};
x.children = function(s) {
  return te(u($t(Ht(this, (t) => t.children))), s);
};
x.parent = function(s) {
  return te(u($t(Ht(this, "parentNode"))), s);
};
x.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return _r.call(e, t);
};
x.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
x.siblings = function(s) {
  return te(u($t(Ht(this, (t) => u(t).parent().children().not(t)))), s);
};
x.find = function(s) {
  return u($t(Ht(this, (t) => Ri(s, t))));
};
const tc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ec = /^$|^module$|\/(java|ecma)script/i, sc = ["type", "src", "nonce", "noModule"];
function nc(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (ec.test(i.type) && pr.contains(i)) {
      const o = ye("script");
      o.text = i.textContent.replace(tc, ""), Y(sc, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function ic(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && nc(t, s.ownerDocument);
}
function ee(s, t, e, n, i, o, r, a) {
  return Y(s, (l, c) => {
    Y(u(c), (d, h) => {
      Y(u(t), (m, p) => {
        const g = e ? h : p, _ = e ? p : h, v = e ? d : m;
        ic(g, v ? _.cloneNode(!0) : _, n, i, !v);
      }, a);
    }, r);
  }, o), t;
}
x.after = function() {
  return ee(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ee(arguments, this, !1, !1, !0);
};
function oc(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    G(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
x.html = oc;
x.appendTo = function(s) {
  return ee(arguments, this, !0, !1, !0);
};
x.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
x.before = function() {
  return ee(arguments, this, !1, !0);
};
x.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
x.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
x.insertAfter = function(s) {
  return ee(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(s) {
  return ee(arguments, this, !0, !0);
};
x.prepend = function() {
  return ee(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(s) {
  return ee(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return u($t(Ht(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
x.next = function(s, t, e) {
  return te(u($t(Ht(this, "nextElementSibling", t, e))), s);
};
x.nextAll = function(s) {
  return this.next(s, !0);
};
x.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
x.parents = function(s, t) {
  return te(u($t(Ht(this, "parentElement", !0, t))), s);
};
x.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
x.prev = function(s, t, e) {
  return te(u($t(Ht(this, "previousElementSibling", t, e))), s);
};
x.prevAll = function(s) {
  return this.prev(s, !0);
};
x.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
x.map = function(s) {
  return u(Wl.apply([], yr.call(this, (t, e) => s.call(t, e, t))));
};
x.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Rt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || pr;
  });
};
x.slice = function(s, t) {
  return u(vr.call(this, s, t));
};
const rc = /-([a-z])/g;
function Oi(s) {
  return s.replace(rc, (t, e) => e.toUpperCase());
}
x.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Lt.readyState !== "loading" ? t() : Lt.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
x.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + qs.pageYOffset,
    left: t.left + qs.pageXOffset
  };
};
x.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Rt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Rt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && G(i)) {
      const o = u(i).offset();
      e.top -= o.top + wt(i, "borderTopWidth"), e.left -= o.left + wt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - wt(s, "marginTop"),
    left: e.left - wt(s, "marginLeft")
  };
};
const xr = {
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
x.prop = function(s, t) {
  if (s) {
    if (et(s))
      return s = xr[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
x.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[xr[s] || s];
  });
};
const ac = /^--/;
function Hi(s) {
  return ac.test(s);
}
const On = {}, { style: lc } = mr, cc = ["webkit", "moz", "ms"];
function hc(s, t = Hi(s)) {
  if (t)
    return s;
  if (!On[s]) {
    const e = Oi(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${cc.join(`${n} `)}${n}`.split(" ");
    Y(i, (o, r) => {
      if (r in lc)
        return On[s] = r, !1;
    });
  }
  return On[s];
}
const dc = {
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
function $r(s, t, e = Hi(s)) {
  return !e && !dc[s] && wr(t) ? `${t}px` : t;
}
function uc(s, t) {
  if (et(s)) {
    const e = Hi(s);
    return s = hc(s, e), arguments.length < 2 ? this[0] && Rt(this[0], s, e) : s ? (t = $r(s, t, e), this.each((n, i) => {
      G(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
x.css = uc;
function Sr(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const fc = /^\s+|\s+$/;
function Lo(s, t) {
  const e = s.dataset[t] || s.dataset[Oi(t)];
  return fc.test(e) ? e : Sr(JSON.parse, e);
}
function pc(s, t, e) {
  e = Sr(JSON.stringify, e), s.dataset[Oi(t)] = e;
}
function mc(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Lo(this[0], n);
    return e;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && Lo(this[0], s) : rt(t) ? this : this.each((e, n) => {
      pc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
x.data = mc;
function Er(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Y([!0, !1], (s, t) => {
  Y(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    x[i] = function(o) {
      if (this[0])
        return De(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : pe(this[0]) ? Er(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (o && t ? wt(this[0], `margin${e ? "Top" : "Left"}`) + wt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  x[e] = function(n) {
    if (!this[0])
      return rt(n) ? void 0 : this;
    if (!arguments.length)
      return De(this[0]) ? this[0].document.documentElement[`client${t}`] : pe(this[0]) ? Er(this[0], t) : this[0].getBoundingClientRect()[e] - Ao(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const a = Rt(r, "boxSizing");
      r.style[e] = $r(e, i + (a === "border-box" ? Ao(r, !s) : 0));
    });
  };
});
const Ro = "___cd";
x.toggle = function(s) {
  return this.each((t, e) => {
    if (!G(e))
      return;
    const n = Do(e);
    (rt(s) ? n : s) ? (e.style.display = e[Ro] || "", Do(e) && (e.style.display = Xl(e.tagName))) : n || (e[Ro] = Rt(e, "display"), e.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Wo = "___ce", Bi = ".", Fi = { focus: "focusin", blur: "focusout" }, Tr = { mouseenter: "mouseover", mouseleave: "mouseout" }, gc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function zi(s) {
  return Tr[s] || Fi[s] || s;
}
function Vi(s) {
  const t = s.split(Bi);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(s, t) {
  if (et(s)) {
    const [n, i] = Vi(s), o = zi(n);
    if (!o)
      return this;
    const r = gc.test(o) ? "MouseEvents" : "HTMLEvents";
    s = Lt.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(Bi), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Fi;
  return this.each((n, i) => {
    e && ve(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Mr(s) {
  return s[Wo] = s[Wo] || {};
}
function _c(s, t, e, n, i) {
  const o = Mr(s);
  o[t] = o[t] || [], o[t].push([e, n, i]), s.addEventListener(t, i);
}
function Nr(s, t) {
  return !t || !Li.call(t, (e) => s.indexOf(e) < 0);
}
function Ys(s, t, e, n, i) {
  const o = Mr(s);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Nr(r, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in o)
      Ys(s, t, e, n, i);
}
x.off = function(s, t, e) {
  if (rt(s))
    this.each((n, i) => {
      !G(i) && !pe(i) && !De(i) || Ys(i);
    });
  else if (et(s))
    ve(t) && (e = t, t = ""), Y(wn(s), (n, i) => {
      const [o, r] = Vi(i), a = zi(o);
      this.each((l, c) => {
        !G(c) && !pe(c) && !De(c) || Ys(c, a, r, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
x.remove = function(s) {
  return te(this, s).detach().off(), this;
};
x.replaceWith = function(s) {
  return this.before(s).remove();
};
x.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function yc(s, t, e, n, i) {
  if (!et(s)) {
    for (const o in s)
      this.on(o, t, e, s[o], i);
    return this;
  }
  return et(t) || (rt(t) || ts(t) ? t = "" : rt(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ve(n) || (n = e, e = void 0), n ? (Y(wn(s), (o, r) => {
    const [a, l] = Vi(r), c = zi(a), d = a in Tr, h = a in Fi;
    c && this.each((m, p) => {
      if (!G(p) && !pe(p) && !De(p))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Nr(l, _.namespace.split(Bi)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let w = _.target;
          for (; !br(w, t); )
            if (w === p || (w = w.parentNode, !w))
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
            return p;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(v, _, _.___td);
        i && Ys(p, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || u.guid++, _c(p, c, l, t, g);
    });
  }), this) : this;
}
x.on = yc;
function vc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
x.one = vc;
const wc = /\r?\n/g;
function bc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(wc, `\r
`))}`;
}
const Cc = /file|reset|submit|button|image/i, Ir = /radio|checkbox/i;
x.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Y(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Cc.test(i.type) || Ir.test(i.type) && !i.checked)
        return;
      const o = kr(i);
      if (!rt(o)) {
        const r = yn(o) ? o : [o];
        Y(r, (a, l) => {
          s += bc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function kc(s, t) {
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
function xc(s, t, e) {
  try {
    const n = kc(s, t), i = n[n.length - 1];
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
var Ui = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Ui || {});
function $c(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / Ui[e]).toFixed(t) + e);
}
const Sc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Ui[n];
};
let ji = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), jt;
function Ec() {
  return ji;
}
function Tc(s) {
  ji = s.toLowerCase();
}
function Ar(s, t) {
  jt || (jt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, jt, s);
}
function K(s, t, e, n, i, o) {
  Array.isArray(s) ? jt && s.unshift(jt) : s = jt ? [jt, s] : [s], typeof e == "string" && (o = i, i = n, n = e, e = void 0);
  const r = i || ji;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[r];
    if (!c)
      continue;
    const d = o && l === jt ? `${o}.${t}` : t;
    if (a = xc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? X(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Mc(s, t, e, n) {
  return K(void 0, s, t, e, n);
}
K.addLang = Ar;
K.getLang = Mc;
K.getCode = Ec;
K.setCode = Tc;
Ar({
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
function Oo(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Dr(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Dr(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Nc(s, t) {
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
class Pr {
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
      success: m,
      error: p,
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let v = n;
    v && (i && (u.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((w, [C, $]) => (Dr(w, C, $), w), new FormData()))), _.body = v), r && (_.mode = "cors");
    const y = _.headers || {};
    Oo(y, "X-Requested-With", "XMLHttpRequest"), o && Oo(y, "Content-Type", o), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), p && this.fail(p), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
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
        const d = e || Nc(r.headers.get("Content-Type"), n);
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
  const e = new Pr(t);
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
async function Lr(s, t = [], e) {
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
  const i = new Pr(n), [o] = await i.send();
  return o;
}
u.fetch = Lr;
function Rr(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = e.get(i);
    typeof r == "number" ? t[r][1] = !!o : (e.set(i, t.length), t.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Rr(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((o) => n(o, !0));
  }), t.sort((i, o) => (e.get(i[0]) || 0) - (e.get(o[0]) || 0));
}
const k = (...s) => Rr(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = k;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(s, ...t));
  });
};
const ze = /* @__PURE__ */ new WeakMap();
function Wr(s, t, e) {
  const n = ze.has(s), i = n ? ze.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), ze.set(s, i)) : ze.delete(s);
}
function Or(s, t, e) {
  let n = ze.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Or(this[0], t) : this.each((n, i) => Wr(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => Wr(e, s));
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
const Ks = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), Ic = {};
u.share = Ic;
const Ve = /* @__PURE__ */ new Map();
function Xs(s) {
  const { zui: t } = window;
  return (!Ve.size || s && !Ve.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Ve.set(e.toLowerCase(), n);
  }), s ? Ve.get(s.toLowerCase()) : void 0;
}
function Ac(s, t, e) {
  const n = Xs(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function Yd(s) {
  if (s) {
    const t = Xs(s);
    t && t.defineFn();
  } else
    Xs(), Ve.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => Ac(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Or(e, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), s === !0 ? o : r;
  }
  const n = Xs(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function Dc(s, t = !0) {
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
    Dc(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function qi(s, t) {
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
  const m = i <= d && i + r >= l;
  return o <= h && o + a >= c && m;
}
u.fn.isVisible = function(s) {
  return qi(this, s);
};
function Gi(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${u.guid++}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, o) => {
    Gi(n, o.innerHTML), o.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    Gi(e, s);
  });
};
function Hr(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((o, r) => {
    if (n) {
      if (r.scrollIntoViewIfNeeded)
        return r.scrollIntoViewIfNeeded(i);
      if (qi(r, { viewport: r.getBoundingClientRect() }))
        return;
    }
    r.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Hr(e, s);
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
    const { success: c, name: d } = o, h = () => d ? window[d] : void 0, m = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = o, g = u(p ? `#${p}` : `script[src="${r}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const b = g.data("loadCalls") || [];
        b.push(m), g.data("loadCalls", b);
      }
      return;
    }
    const { async: _ = !0, defer: v = !1, noModule: y = !1, type: w, integrity: C } = o, $ = document.createElement("script");
    $.async = _, $.defer = v, $.noModule = y, w && ($.type = w), C && ($.integrity = C), $.onload = () => {
      m(), (u($).dataset("loaded", !0).data("loadCalls") || []).forEach((E) => E()), u($).removeData("loadCalls");
    }, $.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${r}`));
    }, $.src = r, u("head").append($);
  });
};
u.getScript = u.getLib;
const Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: qi,
  runJS: Gi,
  scrollIntoView: Hr
}, Symbol.toStringTag, { value: "Module" }));
var Cn, H, Br, Q, oe, Ho, Fr, Jn, $e = {}, zr = [], Pc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Yi = Array.isArray;
function Xt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Vr(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function Z(s, t, e) {
  var n, i, o, r = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Cn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return Ms(s, r, n, i, null);
}
function Ms(s, t, e, n, i) {
  var o = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Br };
  return i == null && H.vnode != null && H.vnode(o), o;
}
function U() {
  return { current: null };
}
function Re(s) {
  return s.children;
}
function O(s, t) {
  this.props = s, this.context = t;
}
function es(s, t) {
  if (t == null)
    return s.__ ? es(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? es(s) : null;
}
function Ur(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Ur(s);
  }
}
function Bo(s) {
  (!s.__d && (s.__d = !0) && oe.push(s) && !Zs.__r++ || Ho !== H.debounceRendering) && ((Ho = H.debounceRendering) || Fr)(Zs);
}
function Zs() {
  var s, t, e, n, i, o, r, a, l;
  for (oe.sort(Jn); s = oe.shift(); )
    s.__d && (t = oe.length, n = void 0, i = void 0, o = void 0, a = (r = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (o = Xt({}, r)).__v = r.__v + 1, Ki(l, r, o, e.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, n, a ?? es(r), r.__h, i), Yr(n, r, i), r.__e != a && Ur(r)), oe.length > t && oe.sort(Jn));
  Zs.__r = 0;
}
function jr(s, t, e, n, i, o, r, a, l, c, d) {
  var h, m, p, g, _, v, y, w, C, $ = 0, b = n && n.__k || zr, E = b.length, I = E, P = t.length;
  for (e.__k = [], h = 0; h < P; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Ms(null, g, null, null, g) : Yi(g) ? Ms(Re, { children: g }, null, null, null) : g.__b > 0 ? Ms(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (w = Lc(g, b, y = h + $, I)) === -1 ? p = $e : (p = b[w] || $e, b[w] = void 0, I--), Ki(s, g, p, i, o, r, a, l, c, d), _ = g.__e, (m = g.ref) && p.ref != m && (p.ref && Xi(p.ref, null, g), d.push(m, g.__c || _, g)), _ != null && (v == null && (v = _), (C = p === $e || p.__v === null) ? w == -1 && $-- : w !== y && (w === y + 1 ? $++ : w > y ? I > P - y ? $ += w - y : $-- : $ = w < y && w == y - 1 ? w - y : 0), y = h + $, typeof g.type != "function" || w === y && p.__k !== g.__k ? typeof g.type == "function" || w === y && !C ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = Gr(s, _, l) : l = qr(g, l, s), typeof e.type == "function" && (e.__d = l))) : (p = b[h]) && p.key == null && p.__e && (p.__e == l && (l = es(p)), Qn(p, p, !1), b[h] = null);
  for (e.__e = v, h = E; h--; )
    b[h] != null && (typeof e.type == "function" && b[h].__e != null && b[h].__e == e.__d && (e.__d = b[h].__e.nextSibling), Qn(b[h], b[h]));
}
function qr(s, t, e) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, t = typeof n.type == "function" ? qr(n, t, e) : Gr(e, n.__e, t));
  return t;
}
function Gr(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function Lc(s, t, e, n) {
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
function Rc(s, t, e, n, i) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || Js(s, o, null, e[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || Js(s, o, t[o], e[o], n);
}
function Fo(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Pc.test(t) ? e : e + "px";
}
function Js(s, t, e, n, i) {
  var o;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Fo(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Fo(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + o] = e, e ? n || s.addEventListener(t, o ? Vo : zo, o) : s.removeEventListener(t, o ? Vo : zo, o);
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
function zo(s) {
  return this.l[s.type + !1](H.event ? H.event(s) : s);
}
function Vo(s) {
  return this.l[s.type + !0](H.event ? H.event(s) : s);
}
function Ki(s, t, e, n, i, o, r, a, l, c) {
  var d, h, m, p, g, _, v, y, w, C, $, b, E, I, P, D = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, o = [a]), (d = H.__b) && d(t);
  t:
    if (typeof D == "function")
      try {
        if (y = t.props, w = (d = D.contextType) && n[d.__c], C = d ? w ? w.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in D && D.prototype.render ? t.__c = h = new D(y, C) : (t.__c = h = new O(y, C), h.constructor = D, h.render = Oc), w && w.sub(h), h.props = y, h.state || (h.state = {}), h.context = C, h.__n = n, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), D.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Xt({}, h.__s)), Xt(h.__s, D.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, h.__v = t, m)
          D.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && y !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, C), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, C) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), $ = 0; $ < h._sb.length; $++)
              h.__h.push(h._sb[$]);
            h._sb = [], h.__h.length && r.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, C), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, g, _);
          });
        }
        if (h.context = C, h.props = y, h.__P = s, h.__e = !1, b = H.__r, E = 0, "prototype" in D && D.prototype.render) {
          for (h.state = h.__s, h.__d = !1, b && b(t), d = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++)
            h.__h.push(h._sb[I]);
          h._sb = [];
        } else
          do
            h.__d = !1, b && b(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++E < 25);
        h.state = h.__s, h.getChildContext != null && (n = Xt(Xt({}, n), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, g)), jr(s, Yi(P = d != null && d.type === Re && d.key == null ? d.props.children : d) ? P : [P], t, e, n, i, o, r, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && r.push(h), v && (h.__E = h.__ = null);
      } catch (T) {
        t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), H.__e(T, t, e);
      }
    else
      o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Wc(e.__e, t, e, n, i, o, r, l, c);
  (d = H.diffed) && d(t);
}
function Yr(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Xi(e[n], e[++n], e[++n]);
  H.__c && H.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      H.__e(o, i.__v);
    }
  });
}
function Wc(s, t, e, n, i, o, r, a, l) {
  var c, d, h, m = e.props, p = t.props, g = t.type, _ = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; _ < o.length; _++)
      if ((c = o[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        s = c, o[_] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), o = null, a = !1;
  }
  if (g === null)
    m === p || a && s.data === p || (s.data = p);
  else {
    if (o = o && Cn.call(s.childNodes), d = (m = e.props || $e).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (m = {}, _ = 0; _ < s.attributes.length; _++)
          m[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Rc(s, p, m, i, a), h)
      t.__k = [];
    else if (jr(s, Yi(_ = t.props.children) ? _ : [_], t, e, n, i && g !== "foreignObject", o, r, o ? o[0] : e.__k && es(e, 0), a, l), o != null)
      for (_ = o.length; _--; )
        o[_] != null && Vr(o[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== s.value || g === "progress" && !_ || g === "option" && _ !== m.value) && Js(s, "value", _, m.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== s.checked && Js(s, "checked", _, m.checked, !1));
  }
  return s;
}
function Xi(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    H.__e(n, e);
  }
}
function Qn(s, t, e) {
  var n, i;
  if (H.unmount && H.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Xi(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        H.__e(o, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Qn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Vr(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Oc(s, t, e) {
  return this.constructor(s, e);
}
function Qs(s, t, e) {
  var n, i, o, r;
  H.__ && H.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, o = [], r = [], Ki(t, s = (!n && e || t).__k = Z(Re, null, [s]), i || $e, $e, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Cn.call(t.childNodes) : null, o, !n && e ? e : i ? i.__e : t.firstChild, n, r), Yr(o, s, r);
}
Cn = zr.slice, H = { __e: function(s, t, e, n) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Br = 0, Q = function(s) {
  return s != null && s.constructor === void 0;
}, O.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof s == "function" && (s = s(Xt({}, e), this.props)), s && Xt(e, s), s != null && this.__v && (t && this._sb.push(t), Bo(this));
}, O.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Bo(this));
}, O.prototype.render = Re, oe = [], Fr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Jn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Zs.__r = 0;
var Kr = function(s, t, e, n) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, e[t[o++]]) : t[++o];
    r === 3 ? n[0] = a : r === 4 ? n[1] = Object.assign(n[1] || {}, a) : r === 5 ? (n[1] = n[1] || {})[t[++o]] = a : r === 6 ? n[1][t[++o]] += a + "" : r ? (i = s.apply(a, Kr(s, a, e, ["", null])), n.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : n.push(a);
  }
  return n;
}, Uo = /* @__PURE__ */ new Map();
function Hc(s) {
  var t = Uo.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Uo.set(this, t)), (t = Kr(this, t.get(s) || (t.set(s, t = function(e) {
    for (var n, i, o = 1, r = "", a = "", l = [0], c = function(m) {
      o === 1 && (m || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, m, r) : o === 3 && (m || r) ? (l.push(3, m, r), o = 2) : o === 2 && r === "..." && m ? l.push(4, m, 0) : o === 2 && r && !m ? l.push(5, 0, !0, r) : o >= 5 && ((r || !m && o === 5) && (l.push(o, 0, r, i), o = 6), m && (l.push(o, m, 0, i), o = 6)), r = "";
    }, d = 0; d < e.length; d++) {
      d && (o === 1 && c(), c(d));
      for (var h = 0; h < e[d].length; h++)
        n = e[d][h], o === 1 ? n === "<" ? (c(), l = [l], o = 3) : r += n : o === 4 ? r === "--" && n === ">" ? (o = 1, r = "") : r = n + r[0] : a ? n === a ? a = "" : r += n : n === '"' || n === "'" ? a = n : n === ">" ? (c(), o = 1) : o && (n === "=" ? (o = 5, i = r, r = "") : n === "/" && (o < 5 || e[d][h + 1] === ">") ? (c(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (c(), o = 2) : r += n), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return c(), l;
  }(s)), t), arguments, [])).length > 1 ? t : t[0];
}
const Xd = Hc.bind(Z);
class Ct extends O {
  _getClassName(t) {
    return [t.className, t.class];
  }
  _getProps(t) {
    const { className: e, class: n, attrs: i, data: o, forwardRef: r, children: a, component: l, style: c, ...d } = t, h = Object.keys(d).reduce((m, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-|zui-)[a-zA-Z-]+/.test(p)) && (m[p] = d[p]), m), {});
    return { ref: r, className: k(this._getClassName(t)), style: c, ...h, ...i };
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
    return o && ([e, i, n] = o), Z(e, i, n);
  }
}
var Bc = 0;
function f(s, t, e, n, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Bc, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return H.vnode && H.vnode(c), c;
}
class _s extends O {
  constructor() {
    super(...arguments), this._ref = U();
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
    return /* @__PURE__ */ f(Ct, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Fc(s) {
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
  } = s, h = [e], m = { ...n }, p = [], g = [];
  return i.forEach((_) => {
    const v = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        v.push(...l.call(r, _, p, ...o));
      else {
        const y = _.call(r, p, ...o);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(_);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !Q(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ f("div", { className: k(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(h),
    style: m,
    ...d
  }, p];
}
function Zi({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Fc(t);
  return Z(s, e, ...n);
}
function Xr(s, t, e) {
  return typeof s == "function" ? s.call(t, ...e || []) : Array.isArray(s) ? s.map((n) => Xr(n, t, e)) : Q(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ f(_s, { ...s }) : /* @__PURE__ */ f(Ct, { ...s }) : s;
}
function ht(s) {
  const { content: t, generatorThis: e, generatorArgs: n } = s, i = Xr(t, e, n);
  return i == null || typeof i == "boolean" ? null : Q(i) ? i : /* @__PURE__ */ f(Re, { children: i });
}
const jo = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function z(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (Q(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(jo(t));
  else if (typeof t == "object") {
    const { className: o, icon: r, ...a } = t;
    i.push(o, r ? jo(r) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: k(i), ...n });
}
function zc(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Vc(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    Qs(null, t._temp), t._temp = null, t._container = null;
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
  }), Qs(
    Z(zc, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Uc(s, t) {
  const e = Z(Vc, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
function Zr(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Zr(s.parentNode) : !0;
}
class at {
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
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Zr(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...o, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), r) {
      const m = `${n}:ALL`;
      let p = l.data(m);
      p || (p = /* @__PURE__ */ new Map(), l.data(m, p)), p.set(this._key, this);
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
    return K(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? K(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
            let m = h[a], p = h;
            m === void 0 && (p = h.$, m = p[a]), typeof m == "function" ? l = m.call(p, ...o) : l = m;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
at.DEFAULT = {};
at.MULTI_INSTANCE = !1;
class B extends at {
  constructor() {
    super(...arguments), this.ref = U();
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
    Qs(
      Z(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function jc({
  component: s = "div",
  className: t,
  children: e,
  style: n,
  attrs: i
}) {
  return Z(s, {
    className: k(t),
    style: n,
    ...i
  }, e);
}
function Jr({
  type: s,
  component: t = "a",
  className: e,
  children: n,
  content: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: c,
  text: d,
  target: h,
  trailingIcon: m,
  hint: p,
  checked: g,
  onClick: _,
  data: v,
  ...y
}) {
  const w = [
    typeof g == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(z, { icon: c }),
    d ? /* @__PURE__ */ f("span", { className: "text", children: d }) : null,
    /* @__PURE__ */ f(ht, { content: i }),
    n,
    /* @__PURE__ */ f(z, { icon: m })
  ];
  return Z(t, {
    className: k(e, { disabled: a, active: l }),
    title: p,
    [t === "a" ? "href" : "data-url"]: a ? void 0 : r,
    [t === "a" ? "target" : "data-target"]: a ? void 0 : h,
    onClick: _,
    ...y,
    ...o
  }, ...w);
}
function qc({
  component: s = "div",
  className: t,
  text: e,
  attrs: n,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return Z(s, {
    className: k(t),
    style: r,
    onClick: a,
    ...n
  }, e, /* @__PURE__ */ f(ht, { content: o }), i);
}
function Gc({
  component: s = "div",
  className: t,
  style: e,
  space: n,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return Z(s, {
    className: k(t),
    style: { width: n, height: n, flex: i, ...e },
    onClick: r,
    ...o
  }, a);
}
function Yc({ type: s, ...t }) {
  return /* @__PURE__ */ f(Zi, { ...t });
}
function Kc({
  component: s = "div",
  className: t,
  children: e,
  content: n,
  style: i,
  attrs: o
}) {
  return Z(s, {
    className: k(t),
    style: i,
    ...o
  }, /* @__PURE__ */ f(ht, { content: n }), e);
}
const kn = class ti extends O {
  constructor() {
    super(...arguments), this.ref = U();
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
  handleItemClick(t, e, n, i) {
    n && n.call(i.target, i, t, e);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: t, index: e, event: i });
  }
  beforeRender() {
    var n;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this)), t.items || (t.items = []);
    const e = (n = t.beforeRender) == null ? void 0 : n.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, n) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = t;
    let a = { ...e };
    return i && Object.assign(a, i[e.type || "item"]), (o || e.onClick) && (a.onClick = this.handleItemClick.bind(this, a, n, e.onClick)), a.className = k(a.className), r && (a = r(a)), a;
  }
  renderItem(t, e, n) {
    if (!e)
      return null;
    const i = this.getItemRenderProps(t, e, n), { itemRender: o } = t;
    if (o) {
      if (typeof o == "object") {
        const _ = o[e.type || "item"];
        if (_)
          return /* @__PURE__ */ f(_, { ...i });
      } else if (typeof o == "function") {
        const _ = o.call(this, i, Z);
        if (Q(_))
          return _;
        typeof _ == "object" && Object.assign(i, _);
      }
    }
    const { type: r = "item", component: a, key: l = n, rootAttrs: c, rootClass: d, rootStyle: h, rootChildren: m, ...p } = i;
    if (r === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: k("action-menu-item", `${this.name}-html`, d, p.className),
          ...c,
          style: h || p.style,
          dangerouslySetInnerHTML: { __html: p.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || ti.ItemComponents[r] : a;
    return Object.assign(p, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), t.checkbox && r === "item" && p.checked === void 0 && (p.checked = !!p.active), this.renderTypedItem(g, {
      className: k(d),
      children: m,
      style: h,
      key: l,
      ...c
    }, {
      ...p,
      type: r,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, e, n) {
    const { children: i, className: o, key: r, ...a } = e;
    return /* @__PURE__ */ f(
      "li",
      {
        className: k(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ f(t, { ...n }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: e,
      style: n,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: c,
      beforeRender: d,
      afterRender: h,
      beforeDestroy: m,
      compact: p,
      ...g
    } = t, _ = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(_, { class: k(this.name, o, p ? "compact" : ""), style: n, ...g, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
};
kn.ItemComponents = {
  divider: jc,
  item: Jr,
  heading: qc,
  space: Gc,
  custom: Yc,
  basic: Kc
};
kn.ROOT_TAG = "menu";
kn.NAME = "action-menu";
let Qr = kn;
class ta extends B {
}
ta.NAME = "ActionMenu";
ta.Component = Qr;
function Xc({
  items: s,
  show: t,
  level: e,
  ...n
}) {
  return /* @__PURE__ */ f(Jr, { ...n });
}
var ea = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ut = (s, t, e) => (ea(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Hn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Zc = (s, t, e, n) => (ea(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ns, St, Ue;
let Ji = class extends Qr {
  constructor(t) {
    super(t), Hn(this, Ns, /* @__PURE__ */ new Set()), Hn(this, St, void 0), Hn(this, Ue, (e, n, i) => {
      u(i.target).closest(".not-nested-toggle").length || (this.toggle(e, n), i.preventDefault());
    }), Zc(this, St, t.nestedShow === void 0), ut(this, St) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: e, nestedTrigger: n, defaultNestedShow: i, controlledMenu: o, indent: r, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = k(a.className, "no-nested-items")), !o && r && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${r}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: e, controlledMenu: n, nestedShow: i, beforeDestroy: o, beforeRender: r, itemRender: a, onClickItem: l, afterRender: c, commonItemProps: d, level: h, itemRenderProps: m } = this.props;
    return {
      items: t,
      name: e,
      nestedShow: ut(this, St) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: n || this,
      commonItemProps: d,
      onClickItem: l,
      afterRender: c,
      beforeRender: r,
      beforeDestroy: o,
      itemRender: a,
      itemRenderProps: m,
      level: (h || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: e } = t;
    if (!e || (typeof e == "function" && (e = e(t, this)), !e.length))
      return;
    const n = this.constructor, i = this.getNestedMenuProps(e);
    return /* @__PURE__ */ f(
      n,
      {
        ...i,
        "data-level": i.level,
        style: { "--level": i.level }
      }
    );
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, e) {
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n);
    if (i.level = t.level || 0, !this.isNestedItem(i))
      return i;
    const o = i.key ?? i.id ?? `${t.level || 0}:${n}`;
    ut(this, Ns).add(o);
    const r = this.isExpanded(o);
    if (r && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(e)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, Ue).bind(this, o, !0),
        onMouseLeave: ut(this, Ue).bind(this, o, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (c) => {
        ut(this, Ue).call(this, o, void 0, c), l == null || l(c);
      };
    }
    const a = this.renderToggleIcon(r, i);
    return a && (i.children = [i.children, a]), i.show = r, i.rootClass = [i.rootClass, "has-nested-menu", r ? "show" : ""], i;
  }
  isExpanded(t) {
    const e = ut(this, St) ? this.state.nestedShow : this.props.nestedShow;
    return e && typeof e == "object" ? e[t] : !!e;
  }
  toggle(t, e) {
    const { controlledMenu: n } = this.props;
    if (n)
      return n.toggle(t, e);
    if (!ut(this, St))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, Ns).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), e === void 0)
      e = !i[t];
    else if (!!i[t] == !!e)
      return !1;
    return e ? i[t] = e : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    ut(this, St) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ut(this, St) && this.setState({ nestedShow: !1 });
  }
};
Ns = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakMap();
Ji.ItemComponents = {
  item: Xc
};
class sa extends B {
}
sa.NAME = "ActionMenuNested";
sa.Component = Ji;
function Jc(s) {
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
function Qc(s) {
  const [t, e, n] = typeof s == "string" ? Jc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function qo(s, t) {
  return Qc(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Go(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function th(s, t, e) {
  s = s % 360 / 360, t = Go(t), e = Go(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (n - i) * r * 6 : r * 2 < 1 ? n : r * 3 < 2 ? i + (n - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function eh(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function sh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let Qi = class extends O {
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
      src: m,
      hueDistance: p = 43,
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: v,
      ...y
    } = this.props, w = ["avatar", t], C = { ...e, background: r, color: a };
    let $ = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, $ = n) : (w.push(`size-${n}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : o && (typeof o == "number" ? C.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let b;
    if (m)
      w.push("has-img"), b = /* @__PURE__ */ f("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      w.push("has-icon"), b = /* @__PURE__ */ f(z, { icon: l });
    else if (c != null && c.length) {
      const E = sh(c, h);
      if (w.push("has-text", `has-text-${E.length}`), r)
        !a && r && (C.color = qo(r));
      else {
        const P = d ?? c, D = (typeof P == "number" ? P : eh(P)) * p % 360;
        if (C.background = `hsl(${D},${g * 100}%,${_ * 100}%)`, !a) {
          const T = th(D, g, _);
          C.color = qo(T);
        }
      }
      let I;
      $ && $ < 14 * E.length && (I = { transform: `scale(${$ / (14 * E.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ f("div", { "data-actualSize": $, className: "avatar-text", style: I, children: E });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: k(w),
        style: C,
        ...y,
        children: [
          b,
          v
        ]
      }
    );
  }
};
class J extends Ct {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: o, icon: r, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = o && this._isEmptyText && !r && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: o, text: r, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(z, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(z, { icon: o }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : r }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(z, { icon: l }),
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
    return r && (["button", "reset", "submit"].includes(r) ? e === "button" && (c.type = r) : c.className = k([c.className, r])), o || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
class xn extends Ct {
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
      /* @__PURE__ */ f("label", { htmlFor: o, children: /* @__PURE__ */ f(ht, { content: r }) }, "label")
    ];
  }
}
class nh extends xn {
}
nh.defaultProps = {
  type: "radio"
};
class ih extends xn {
}
ih.defaultProps = {
  type: "switch"
};
class ce extends Ct {
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
    i && d.push(/* @__PURE__ */ f(ht, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(xn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(z, { className: "item-icon", icon: e }, "icon")), n && d.push(/* @__PURE__ */ f(Qi, { ...n, className: k("item-avatar", n.className) }, "avatar"));
    const h = o ? /* @__PURE__ */ f(ht, { content: o }, "leading") : null;
    return c ? (h && d.push(h), d.length ? [
      /* @__PURE__ */ f("div", { className: k("item-leading", r), children: d }, "leading")
    ] : []) : (h && d.push(/* @__PURE__ */ f("div", { className: k("item-leading", r), children: h }, "leading")), d);
  }
  _renderContent(t) {
    const {
      multiline: e,
      text: n,
      textClass: i,
      title: o,
      titleClass: r,
      subtitle: a,
      subtitleClass: l,
      url: c,
      actions: d,
      target: h
    } = t, m = c && d, g = [
      o ? /* @__PURE__ */ f(m ? "a" : "div", { className: k("item-title", r), href: m ? c : void 0, target: m ? h : void 0, children: o }, "title") : null,
      a ? /* @__PURE__ */ f("div", { className: k("item-subtitle", l), children: a }, "subtitle") : null,
      n ? /* @__PURE__ */ f("div", { className: k("item-text text", i), children: n }, "text") : null
    ];
    return e ? [
      /* @__PURE__ */ f("div", { className: "item-content", children: g }, "content")
    ] : g;
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: o,
      actions: r,
      actionsClass: a
    } = t, l = [];
    o && l.push(/* @__PURE__ */ f(z, { className: "item-trailing-icon", icon: o }, "trailing-icon")), r != null && r.length && l.push(/* @__PURE__ */ f("div", { className: k("item-actions", a), children: r.map((d, h) => /* @__PURE__ */ f(J, { type: "ghost", size: "sm", ...d }, h)) }, "actions"));
    const c = n ? /* @__PURE__ */ f(ht, { content: n }, "trailing") : null;
    return e ? (c && l.push(c), l.length ? [
      /* @__PURE__ */ f("div", { className: k("item-trailing", i), children: [
        l,
        c
      ] }, "trailing")
    ] : []) : (c && l.push(/* @__PURE__ */ f("div", { className: k("item-trailing", i), children: c }, "trailing")), l);
  }
  _render(t) {
    const {
      innerComponent: e,
      className: n,
      class: i,
      url: o,
      actions: r,
      target: a,
      active: l,
      disabled: c,
      divider: d,
      checked: h,
      multiline: m,
      hover: p
    } = t, g = e || (o && !r ? "a" : "div"), _ = g === "a", v = k(n, i, {
      active: l,
      disabled: c,
      "has-divider": d,
      "has-hover state": p,
      checked: h,
      multiline: m,
      state: _
    });
    return /* @__PURE__ */ f(g, { className: v, href: _ ? o : void 0, target: _ ? a : void 0, children: [
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
ce.defaultProps = {};
let mt = class extends Ct {
  constructor(t) {
    super(t), this._ref = U(), this.state = {}, this._handleClick = this._handleClick.bind(this);
  }
  get name() {
    return this.props.name || this.constructor.NAME;
  }
  get itemName() {
    return this.props.itemName || this.constructor.ITEM_NAME;
  }
  componentDidMount() {
    this.afterRender(!0), this.tryLoad();
  }
  componentDidUpdate() {
    this.afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  load() {
    const { items: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      const i = { loading: !1 };
      try {
        const o = await Lr(t, [this], { throws: !0 });
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
  _renderItem(t, e) {
    const { itemRender: n } = t;
    if (n)
      return n.call(this, e);
    const { type: i = "item" } = e;
    let o = this.constructor.ItemComponents[i] || ce;
    if (Array.isArray(o)) {
      let r = o[1];
      typeof r == "function" && (r = r.call(this, e, t)), u.extend(e, r), o = o[0];
    }
    return /* @__PURE__ */ f(o, { "zui-key": e.key, ...e });
  }
  _getItem(t, e, n) {
    var h, m, p;
    const { itemProps: i, itemPropsMap: o = {}, getItem: r, keyName: a = "id" } = t, { type: l = "item" } = e, { name: c, itemName: d } = this;
    return e = u.extend(
      {
        ...this.constructor.defaultItemProps,
        key: e[a] ?? n,
        type: l
      },
      i,
      o[l],
      e,
      {
        rootClass: [d, `${c}-${l}`, i == null ? void 0 : i.rootClass, (h = o[l]) == null ? void 0 : h.rootClass, e.rootClass],
        className: [d ? `${d}-inner` : "", i == null ? void 0 : i.className, (m = o[l]) == null ? void 0 : m.className, e.className],
        "zui-item": n,
        "zui-type": l,
        style: { ...i == null ? void 0 : i.style, ...(p = o[l]) == null ? void 0 : p.style, ...e.style }
      }
    ), e = r ? r.call(this, e, n) : e, e;
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
};
mt.ItemComponents = {
  item: ce,
  custom: ce,
  element: Ct,
  divider: [Ct, (s) => ({ className: [s.className, s.rootClass, "divider"] })],
  heading: ce,
  space: [Ct, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      className: [s.className, s.rootClass],
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
mt.NAME = "list";
mt.ITEM_NAME = "item";
mt.ROOT_TAG = "ul";
mt.defaultItemProps = {
  component: "li"
};
let $n = class extends mt {
  constructor(t) {
    super(t), this._controlled = t.nestedShow !== void 0, this.state.nestedShow = t.defaultNestedShow ?? {}, this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e) {
    const { nestedShow: n } = this, i = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return typeof n == "object" ? n[i] : n;
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
  _renderNestedList(t, e, n) {
    const { children: i, forwardRef: o, data: r, attrs: a, style: l, parentKey: c, nestedTrigger: d, level: h = 0, onHoverItem: m, ...p } = t, g = {
      ...p,
      items: e,
      parentKey: c ? `${c}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: m || d === "hover" ? this._handleHoverNestedItem : void 0,
      ...n.listProps,
      level: h + 1
    }, _ = this.constructor;
    return /* @__PURE__ */ f(_, { ...g }, "nested");
  }
  _getItem(t, e, n) {
    const { items: i, ...o } = super._getItem(t, e, n), { collapsedIcon: r, expandedIcon: a } = t;
    let l, c;
    if (i) {
      const d = this.isExpanded(o.key, t.parentKey);
      if (c = `state is-${d ? "expanded" : "collapsed"}`, o.className = [o.className, "has-nested-items", `is-nested-${d ? "show" : "hide"}`], d) {
        let { children: h = [] } = o;
        Array.isArray(h) || (h = [h]), h.push(this._renderNestedList(t, i, o)), o.children = h, o["zui-parent"] = t.parentKey, l = a ? /* @__PURE__ */ f(z, { icon: a }) : /* @__PURE__ */ f("span", { className: "caret-down" });
      } else
        l = r ? /* @__PURE__ */ f(z, { icon: r }) : /* @__PURE__ */ f("span", { className: "caret-right" });
    }
    return l && (o.toggleIcon = /* @__PURE__ */ f("span", { className: k("list-toggle-icon", c), children: l })), e.icon && (this._hasIcons = !0), e.items && (this._hasNestedItems = !0), e.checked !== void 0 && (this._hasCheckbox = !0), o;
  }
  _renderItem(t, e) {
    return e.type === "item" && (this._hasIcons && !e.icon && (e.icon = "_"), this._hasNestedItems && !e.toggleIcon && (e.toggleIcon = /* @__PURE__ */ f("span", { className: "list-toggle-icon is-empty", children: /* @__PURE__ */ f(z, { icon: t.normalIcon }) }))), super._renderItem(t, e);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    return e ? { ...e, parentKey: this.props.parentKey } : void 0;
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, key: o, parentKey: r } = t, { nestedTrigger: a, nestedToggle: l } = this.props;
    if (!e.items || i.defaultPrevented || a === "hover" && n === void 0 || a === "click" && i.type !== "click" || l && !i.target.closest(l) || i.target.closest(".not-nested-toggle"))
      return;
    const c = typeof n == "boolean" ? n : void 0;
    this.toggle(`${r !== void 0 ? `${r}:` : ""}${o}`, c);
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
    var i;
    const e = this._getItemFromEvent(t);
    if (!e)
      return;
    const n = t.type === "mouseenter";
    (i = this.props.onHoverItem) == null || i.call(this, { hover: n, ...e }), this._controlled || this._toggleFromEvent(e);
  }
  _getProps(t) {
    const { onHoverItem: e, nestedTrigger: n, style: i, level: o = 0, indent: r = 20 } = t, a = super._getProps(t);
    return (e || n === "hover") && u.extend(a, {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    }), a["zui-level"] = o, a.style = { ...i, "--list-nested-indent": `${o * r}px`, "--list-indent": `${r}px` }, a;
  }
  _beforeRender(t) {
    return this._hasIcons = !1, this._hasNestedItems = !this.isRoot, super._beforeRender(t);
  }
  _onRender(t, e, n) {
    return e.className = k(
      e.className,
      this._hasIcons ? "has-icons" : "",
      this._hasNestedItems ? "has-nested-items" : "no-nested-items",
      this._hasCheckbox ? "has-checkbox" : ""
    ), [t, e, n];
  }
};
$n.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
class na extends B {
}
na.NAME = "List";
na.Component = mt;
class ia extends B {
}
ia.NAME = "NestedList";
ia.Component = $n;
let Wt = class extends $n {
  _getClassName(t) {
    return k(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "");
  }
};
Wt.NAME = "menu";
Wt.ROOT_TAG = "menu";
Wt.ItemComponents = {
  ...$n.ItemComponents,
  item: [ce, { innerComponent: "a" }]
};
var to = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, _t = (s, t, e) => (to(s, t, "read from private field"), e ? e.call(s) : t.get(s)), se = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Is = (s, t, e, n) => (to(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Yo = (s, t, e) => (to(s, t, "access private method"), e), As, Ds, he, ei, Ps, Ls, Rs, si;
let eo = class extends O {
  constructor(t) {
    super(t), se(this, Rs), se(this, As, void 0), se(this, Ds, U()), se(this, he, 0), se(this, ei, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), se(this, Ps, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || n === i || (Yo(this, Rs, si).call(this), Is(this, he, window.setTimeout(() => {
          o(i, e), Is(this, he, 0);
        }, this.props.delay || 0)));
      });
    }), se(this, Ls, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Is(this, As, t.id || `search-box-${u.guid++}`);
  }
  get id() {
    return _t(this, As);
  }
  get input() {
    return _t(this, Ds).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Yo(this, Rs, si).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: o, rootStyle: r, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p } = t, { focus: g, value: _ } = e, { id: v } = this, y = typeof _ != "string" || !_.trim().length;
    let w, C, $;
    return m && ($ = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(z, { icon: m })), !h && m && (w = /* @__PURE__ */ f("label", { for: v, class: "input-control-prefix", children: $ }, "prefix")), p && !y ? C = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: _t(this, ei),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(z, { icon: p })
      }
    ) : h && m && (C = $), C && (C = /* @__PURE__ */ f("label", { for: v, class: "input-control-suffix", children: C }, "suffix")), /* @__PURE__ */ f("div", { class: k("search-box input-control", o, { focus: g, empty: y, "has-prefix-icon": w, "has-suffix-icon": C }), style: r, children: [
      w,
      /* @__PURE__ */ f(
        "input",
        {
          ref: _t(this, Ds),
          id: v,
          type: "text",
          class: k("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: _,
          onInput: _t(this, Ps),
          onChange: _t(this, Ps),
          onFocus: _t(this, Ls),
          onBlur: _t(this, Ls)
        }
      ),
      C
    ] });
  }
};
As = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakSet();
si = function() {
  _t(this, he) && clearTimeout(_t(this, he)), Is(this, he, 0);
};
eo.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let so = class extends Wt {
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
    let e = super._getChildren(t) || [];
    const { search: n = !0 } = t;
    if (n) {
      Array.isArray(e) || (e = [e]);
      const i = {
        onChange: this._handleSearchChange
      };
      typeof n == "object" && u.extend(i, n), e.push(/* @__PURE__ */ f(eo, { ...i }, "search"));
    }
    return e;
  }
  _getClassName(t) {
    return [super._getClassName(t), "search-menu", `search-menu-on-${t.searchPlacement || "top"}`];
  }
};
class oa extends B {
}
oa.NAME = "Menu";
oa.Component = Wt;
class ra extends B {
}
ra.NAME = "SearchMenu";
ra.Component = so;
let oh = class extends O {
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
      contentClass: m,
      arrowStyle: p,
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ f(ht, { content: o }, "content");
    (m || i) && (_ = /* @__PURE__ */ f("div", { className: m, children: _ }, "content"));
    const v = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(_), c && v.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: k("popover", a, { popup: n }), style: r, children: v });
  }
};
class no extends B {
}
no.NAME = "PopoverPanel";
no.Component = oh;
const Pe = Math.min, de = Math.max, tn = Math.round, xs = Math.floor, Jt = (s) => ({
  x: s,
  y: s
}), rh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ah = {
  start: "end",
  end: "start"
};
function ni(s, t, e) {
  return de(s, Pe(t, e));
}
function ys(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function me(s) {
  return s.split("-")[0];
}
function vs(s) {
  return s.split("-")[1];
}
function aa(s) {
  return s === "x" ? "y" : "x";
}
function io(s) {
  return s === "y" ? "height" : "width";
}
function Sn(s) {
  return ["top", "bottom"].includes(me(s)) ? "y" : "x";
}
function oo(s) {
  return aa(Sn(s));
}
function lh(s, t, e) {
  e === void 0 && (e = !1);
  const n = vs(s), i = oo(s), o = io(i);
  let r = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = en(r)), [r, en(r)];
}
function ch(s) {
  const t = en(s);
  return [ii(s), t, ii(t)];
}
function ii(s) {
  return s.replace(/start|end/g, (t) => ah[t]);
}
function hh(s, t, e) {
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
function dh(s, t, e, n) {
  const i = vs(s);
  let o = hh(me(s), e === "start", n);
  return i && (o = o.map((r) => r + "-" + i), t && (o = o.concat(o.map(ii)))), o;
}
function en(s) {
  return s.replace(/left|right|bottom|top/g, (t) => rh[t]);
}
function uh(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function la(s) {
  return typeof s != "number" ? uh(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function sn(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function Ko(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const o = Sn(t), r = oo(t), a = io(r), l = me(t), c = o === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, m = n[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (vs(t)) {
    case "start":
      p[r] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[r] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const fh = async (s, t, e) => {
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
  } = Ko(c, n, l), m = n, p = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: w,
      y: C,
      data: $,
      reset: b
    } = await y({
      x: d,
      y: h,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: r,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = w ?? d, h = C ?? h, p = {
      ...p,
      [v]: {
        ...p[v],
        ...$
      }
    }, b && g <= 50) {
      g++, typeof b == "object" && (b.placement && (m = b.placement), b.rects && (c = b.rects === !0 ? await r.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : b.rects), {
        x: d,
        y: h
      } = Ko(c, m, l)), _ = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: m,
    strategy: i,
    middlewareData: p
  };
};
async function ca(s, t) {
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
    altBoundary: m = !1,
    padding: p = 0
  } = ys(t, s), g = la(p), v = a[m ? h === "floating" ? "reference" : "floating" : h], y = sn(await o.getClippingRect({
    element: (e = await (o.isElement == null ? void 0 : o.isElement(v))) == null || e ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = h === "floating" ? {
    ...r.floating,
    x: n,
    y: i
  } : r.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(C)) ? await (o.getScale == null ? void 0 : o.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = sn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: C,
    strategy: l
  }) : w);
  return {
    top: (y.top - b.top + g.top) / $.y,
    bottom: (b.bottom - y.bottom + g.bottom) / $.y,
    left: (y.left - b.left + g.left) / $.x,
    right: (b.right - y.right + g.right) / $.x
  };
}
const oi = (s) => ({
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
    } = ys(s, t) || {};
    if (l == null)
      return {};
    const d = la(c), h = {
      x: e,
      y: n
    }, m = oo(i), p = io(m), g = await r.getDimensions(l), _ = m === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", w = _ ? "clientHeight" : "clientWidth", C = o.reference[p] + o.reference[m] - h[m] - o.floating[p], $ = h[m] - o.reference[m], b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
    let E = b ? b[w] : 0;
    (!E || !await (r.isElement == null ? void 0 : r.isElement(b))) && (E = a.floating[w] || o.floating[p]);
    const I = C / 2 - $ / 2, P = E / 2 - g[p] / 2 - 1, D = Pe(d[v], P), T = Pe(d[y], P), A = D, V = E - g[p] - T, M = E / 2 - g[p] / 2 + I, F = ni(A, M, V), gt = vs(i) != null && M != F && o.reference[p] / 2 - (M < A ? D : T) - g[p] / 2 < 0 ? M < A ? A - M : V - M : 0;
    return {
      [m]: h[m] - gt,
      data: {
        [m]: F,
        centerOffset: M - F + gt
      }
    };
  }
}), En = function(s) {
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
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ..._
      } = ys(s, t), v = me(n), y = me(r) === r, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), C = h || (y || !g ? [en(r)] : ch(r));
      !h && p !== "none" && C.push(...dh(r, g, p, w));
      const $ = [r, ...C], b = await ca(t, _), E = [];
      let I = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && E.push(b[v]), d) {
        const A = lh(n, o, w);
        E.push(b[A[0]], b[A[1]]);
      }
      if (I = [...I, {
        placement: n,
        overflows: E
      }], !E.every((A) => A <= 0)) {
        var P, D;
        const A = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, V = $[A];
        if (V)
          return {
            data: {
              index: A,
              overflows: I
            },
            reset: {
              placement: V
            }
          };
        let M = (D = I.filter((F) => F.overflows[0] <= 0).sort((F, it) => F.overflows[1] - it.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!M)
          switch (m) {
            case "bestFit": {
              var T;
              const F = (T = I.map((it) => [it.placement, it.overflows.filter((gt) => gt > 0).reduce((gt, Ll) => gt + Ll, 0)]).sort((it, gt) => it[1] - gt[1])[0]) == null ? void 0 : T[0];
              F && (M = F);
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
async function ph(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, o = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), r = me(e), a = vs(e), l = Sn(e) === "y", c = ["left", "top"].includes(r) ? -1 : 1, d = o && l ? -1 : 1, h = ys(t, s);
  let {
    mainAxis: m,
    crossAxis: p,
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
  return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), l ? {
    x: p * d,
    y: m * c
  } : {
    x: m * c,
    y: p * d
  };
}
const Tn = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await ph(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, ss = function(s) {
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
      } = ys(s, t), c = {
        x: e,
        y: n
      }, d = await ca(t, l), h = Sn(me(i)), m = aa(h);
      let p = c[m], g = c[h];
      if (o) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", w = p + d[v], C = p - d[y];
        p = ni(w, p, C);
      }
      if (r) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", w = g + d[v], C = g - d[y];
        g = ni(w, g, C);
      }
      const _ = a.fn({
        ...t,
        [m]: p,
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
function Qt(s) {
  return ha(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ot(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(s) {
  var t;
  return (t = (ha(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function ha(s) {
  return s instanceof Node || s instanceof ot(s).Node;
}
function Ot(s) {
  return s instanceof Element || s instanceof ot(s).Element;
}
function kt(s) {
  return s instanceof HTMLElement || s instanceof ot(s).HTMLElement;
}
function Xo(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof ot(s).ShadowRoot;
}
function ws(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = dt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function mh(s) {
  return ["table", "td", "th"].includes(Qt(s));
}
function ro(s) {
  const t = ao(), e = dt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function gh(s) {
  let t = Le(s);
  for (; kt(t) && !Mn(t); ) {
    if (ro(t))
      return t;
    t = Le(t);
  }
  return null;
}
function ao() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mn(s) {
  return ["html", "body", "#document"].includes(Qt(s));
}
function dt(s) {
  return ot(s).getComputedStyle(s);
}
function Nn(s) {
  return Ot(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Le(s) {
  if (Qt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Xo(s) && s.host || // Fallback.
    Bt(s)
  );
  return Xo(t) ? t.host : t;
}
function da(s) {
  const t = Le(s);
  return Mn(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : kt(t) && ws(t) ? t : da(t);
}
function nn(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = da(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), o = ot(n);
  return i ? t.concat(o, o.visualViewport || [], ws(n) ? n : []) : t.concat(n, nn(n));
}
function ua(s) {
  const t = dt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = kt(s), o = i ? s.offsetWidth : e, r = i ? s.offsetHeight : n, a = tn(e) !== o || tn(n) !== r;
  return a && (e = o, n = r), {
    width: e,
    height: n,
    $: a
  };
}
function lo(s) {
  return Ot(s) ? s : s.contextElement;
}
function Se(s) {
  const t = lo(s);
  if (!kt(t))
    return Jt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: o
  } = ua(t);
  let r = (o ? tn(e.width) : e.width) / n, a = (o ? tn(e.height) : e.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: r,
    y: a
  };
}
const _h = /* @__PURE__ */ Jt(0);
function fa(s) {
  const t = ot(s);
  return !ao() || !t.visualViewport ? _h : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yh(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ot(s) ? !1 : t;
}
function ge(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), o = lo(s);
  let r = Jt(1);
  t && (n ? Ot(n) && (r = Se(n)) : r = Se(s));
  const a = yh(o, e, n) ? fa(o) : Jt(0);
  let l = (i.left + a.x) / r.x, c = (i.top + a.y) / r.y, d = i.width / r.x, h = i.height / r.y;
  if (o) {
    const m = ot(o), p = n && Ot(n) ? ot(n) : n;
    let g = m.frameElement;
    for (; g && n && p !== m; ) {
      const _ = Se(g), v = g.getBoundingClientRect(), y = dt(g), w = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, C = v.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += w, c += C, g = ot(g).frameElement;
    }
  }
  return sn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function vh(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = kt(e), o = Bt(e);
  if (e === o)
    return t;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Jt(1);
  const l = Jt(0);
  if ((i || !i && n !== "fixed") && ((Qt(e) !== "body" || ws(o)) && (r = Nn(e)), kt(e))) {
    const c = ge(e);
    a = Se(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - r.scrollLeft * a.x + l.x,
    y: t.y * a.y - r.scrollTop * a.y + l.y
  };
}
function wh(s) {
  return Array.from(s.getClientRects());
}
function pa(s) {
  return ge(Bt(s)).left + Nn(s).scrollLeft;
}
function bh(s) {
  const t = Bt(s), e = Nn(s), n = s.ownerDocument.body, i = de(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = de(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let r = -e.scrollLeft + pa(s);
  const a = -e.scrollTop;
  return dt(n).direction === "rtl" && (r += de(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: o,
    x: r,
    y: a
  };
}
function Ch(s, t) {
  const e = ot(s), n = Bt(s), i = e.visualViewport;
  let o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, r = i.height;
    const c = ao();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function kh(s, t) {
  const e = ge(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, o = kt(s) ? Se(s) : Jt(1), r = s.clientWidth * o.x, a = s.clientHeight * o.y, l = i * o.x, c = n * o.y;
  return {
    width: r,
    height: a,
    x: l,
    y: c
  };
}
function Zo(s, t, e) {
  let n;
  if (t === "viewport")
    n = Ch(s, e);
  else if (t === "document")
    n = bh(Bt(s));
  else if (Ot(t))
    n = kh(t, e);
  else {
    const i = fa(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return sn(n);
}
function ma(s, t) {
  const e = Le(s);
  return e === t || !Ot(e) || Mn(e) ? !1 : dt(e).position === "fixed" || ma(e, t);
}
function xh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = nn(s).filter((a) => Ot(a) && Qt(a) !== "body"), i = null;
  const o = dt(s).position === "fixed";
  let r = o ? Le(s) : s;
  for (; Ot(r) && !Mn(r); ) {
    const a = dt(r), l = ro(r);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ws(r) && !l && ma(s, r)) ? n = n.filter((d) => d !== r) : i = a, r = Le(r);
  }
  return t.set(s, n), n;
}
function $h(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const r = [...e === "clippingAncestors" ? xh(t, this._c) : [].concat(e), n], a = r[0], l = r.reduce((c, d) => {
    const h = Zo(t, d, i);
    return c.top = de(h.top, c.top), c.right = Pe(h.right, c.right), c.bottom = Pe(h.bottom, c.bottom), c.left = de(h.left, c.left), c;
  }, Zo(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Sh(s) {
  return ua(s);
}
function Eh(s, t, e) {
  const n = kt(t), i = Bt(t), o = e === "fixed", r = ge(s, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Jt(0);
  if (n || !n && !o)
    if ((Qt(t) !== "body" || ws(i)) && (a = Nn(t)), n) {
      const c = ge(t, !0, o, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = pa(i));
  return {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function Jo(s, t) {
  return !kt(s) || dt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function ga(s, t) {
  const e = ot(s);
  if (!kt(s))
    return e;
  let n = Jo(s, t);
  for (; n && mh(n) && dt(n).position === "static"; )
    n = Jo(n, t);
  return n && (Qt(n) === "html" || Qt(n) === "body" && dt(n).position === "static" && !ro(n)) ? e : n || gh(s) || e;
}
const Th = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || ga, o = this.getDimensions;
  return {
    reference: Eh(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await o(e)
    }
  };
};
function Mh(s) {
  return dt(s).direction === "rtl";
}
const Nh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vh,
  getDocumentElement: Bt,
  getClippingRect: $h,
  getOffsetParent: ga,
  getElementRects: Th,
  getClientRects: wh,
  getDimensions: Sh,
  getScale: Se,
  isElement: Ot,
  isRTL: Mh
};
function Ih(s, t) {
  let e = null, n;
  const i = Bt(s);
  function o() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function r(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: d,
      width: h,
      height: m
    } = s.getBoundingClientRect();
    if (a || t(), !h || !m)
      return;
    const p = xs(d), g = xs(i.clientWidth - (c + h)), _ = xs(i.clientHeight - (d + m)), v = xs(c), w = {
      rootMargin: -p + "px " + -g + "px " + -_ + "px " + -v + "px",
      threshold: de(0, Pe(1, l)) || 1
    };
    let C = !0;
    function $(b) {
      const E = b[0].intersectionRatio;
      if (E !== l) {
        if (!C)
          return r();
        E ? r(!1, E) : n = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      e = new IntersectionObserver($, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver($, w);
    }
    e.observe(s);
  }
  return r(!0), o;
}
function co(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = lo(s), d = i || o ? [...c ? nn(c) : [], ...nn(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), o && y.addEventListener("resize", e);
  });
  const h = c && a ? Ih(c, e) : null;
  let m = -1, p = null;
  r && (p = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let g, _ = l ? ge(s) : null;
  l && v();
  function v() {
    const y = ge(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), o && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const In = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Nh,
    ...e
  }, o = {
    ...i.platform,
    _c: n
  };
  return fh(s, t, {
    ...i,
    platform: o
  });
}, Ah = '[data-toggle="popover"]', Qo = "show", tr = "in";
class ct extends at {
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
    if (o.addClass(Qo), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      o.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(tr), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: o } = this.options, r = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), r.removeClass(tr), o === "hover" && (this._clearDelayHide(), r.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), r.removeClass(Qo), t && this._resetTimer(() => {
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
    n || (this._layoutWatcher = co(t, e, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), In(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const m = u(e).css({
          position: h,
          left: a,
          top: l
        }), p = d.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], _ = c.arrow;
        _ && m.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), o === !0 && m.attr("class", `${m.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", p);
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
      o && o.element !== e && (o.destroy(), o = void 0), o ? o.render(n) : (o = new no(e, n), o.on("inited", () => this.layout())), this._panel = o;
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
        i ? En() : null,
        o ? ss(typeof o == "object" ? o : void 0) : null,
        r || d ? Tn((r || 0) + d) : null,
        a ? oi({ element: c }) : null
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
ct.NAME = "Popover";
ct.Z_INDEX = 1700;
ct.MULTI_INSTANCE = !0;
ct.DEFAULT = {
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
u(document).on(`click${ct.NAMESPACE} mouseenter${ct.NAMESPACE}`, Ah, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(ct.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ct.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const Dh = '[data-toggle="dropdown"]';
class bt extends ct {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    let { items: t = [] } = this.options;
    return typeof t == "function" && (t = t(this)), {
      items: t,
      nestedTrigger: "hover",
      placement: this.options.placement,
      popup: !1,
      ...this.options.menu
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: Z(_a, this._getMenuOptions())
    };
  }
}
bt.NAME = "Dropdown";
bt.DEFAULT = {
  ...ct.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${bt.NAMESPACE} mouseenter${bt.NAMESPACE}`, Dh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(bt.KEY)) {
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
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), bt.ensure(t, i), s.preventDefault();
  }
});
class ho extends J {
  constructor() {
    super(...arguments), this._ref = U();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e } = this.props, n = u(this.triggerElement), i = bt.get(this.triggerElement), o = {
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
    (t = bt.get(this.triggerElement)) == null || t.destroy();
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
ho.defaultProps = {
  caret: !0
};
class _a extends so {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "dropdown-menu";
  }
  layout() {
    const t = this.ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || In(e, t, {
      placement: this.props.placement,
      middleware: [En(), ss(), Tn(1)]
    }).then(({ x: n, y: i }) => {
      u(t).css({
        left: n,
        top: i
      });
    });
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t);
    return {
      ...e,
      className: k("show", e.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "dropdown-menu-toggle-icon caret-right ml-2" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
_a.defaultProps = {
  ...so.defaultProps,
  popup: !0,
  search: !1,
  nestedTrigger: "hover",
  placement: "right-start"
};
const Zt = class extends mt {
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
Zt.ItemComponents = {
  ...mt.ItemComponents,
  item: [J, Zt.getBtnProps],
  dropdown: [ho, Zt.getBtnProps]
};
Zt.NAME = "btn-group";
Zt.ITEM_NAME = "";
Zt.ROOT_TAG = "nav";
Zt.defaultItemProps = {};
let ya = Zt, xt = class extends ya {
};
xt.NAME = "toolbar";
xt.defaultItemProps = {
  btnType: "ghost"
};
function Ph({
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
  let m;
  a === !0 ? m = /* @__PURE__ */ f(J, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Q(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ f(J, { ...a, onClick: l }));
  const p = Q(e) ? e : e ? /* @__PURE__ */ f(xt, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: k("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(z, { icon: c, className: k("alert-icon", d) }),
    Q(i) ? i : /* @__PURE__ */ f("div", { className: k("alert-content", o), children: [
      Q(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    m,
    r
  ] });
}
function Lh(s) {
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
function Rh({
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
    Ph,
    {
      className: k("messager", o, t, n === !0 ? Lh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Wh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Oh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, We = (s, t, e) => (Wh(s, t, "access private method"), e), ne, Ce;
class uo extends B {
  constructor() {
    super(...arguments), Oh(this, ne), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), We(this, ne, Ce).call(this, () => {
      this._show = !0, this.render(), We(this, ne, Ce).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && We(this, ne, Ce).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && We(this, ne, Ce).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), We(this, ne, Ce).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ne = /* @__PURE__ */ new WeakSet();
Ce = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
uo.NAME = "MessagerItem";
uo.Component = Rh;
var fo = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ue = (s, t, e) => (fo(s, t, "read from private field"), e ? e.call(s) : t.get(s)), $s = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ws = (s, t, e, n) => (fo(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), va = (s, t, e) => (fo(s, t, "access private method"), e), Ee, At, ri, wa, po, ba;
const An = class Ca extends at {
  constructor() {
    super(...arguments), $s(this, ri), $s(this, po), $s(this, Ee, void 0), $s(this, At, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ue(this, At)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), va(this, ri, wa).call(this).show();
  }
  hide() {
    var t;
    (t = ue(this, At)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = Ca.ensure(e || "body", { key: `messager_${u.guid++}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Ee = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakSet();
wa = function() {
  if (ue(this, At))
    ue(this, At).setOptions(this.options);
  else {
    const s = va(this, po, ba).call(this), t = new uo(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Ws(this, Ee, void 0), Ws(this, At, void 0);
    }), Ws(this, At, t);
  }
  return ue(this, At);
};
po = /* @__PURE__ */ new WeakSet();
ba = function() {
  if (ue(this, Ee))
    return ue(this, Ee);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ws(this, Ee, e[0])), e[0];
};
An.NAME = "messager";
An.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
An.MULTI_INSTANCE = !0;
let au = An;
let mo = class extends O {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = n / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = n * p);
    const g = (n - p) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ f("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: r === !0 ? Math.round(e) : r }) : null,
      h
    ] });
  }
};
mo.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class ka extends B {
}
ka.NAME = "ProgressCircle";
ka.Component = mo;
const Oe = '[droppable="true"]';
class go extends at {
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
      const h = typeof r == "function" ? u(r.call(this, e)) : o.find(r || a || Oe);
      c && (o.find(c).removeClass(c), h.addClass(c)), d && o.addClass(d), o.find(Oe).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
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
      const { dragElement: e } = this, n = u(t.target).closest(Oe)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (o = this.options.onDragEnter) == null || o.call(this, t, e, n);
        }
        (r = this.options.onDragOver) == null || r.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(Oe)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(Oe)[0];
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
go.NAME = "Draggable";
go.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Hh = '[moveable="true"]';
class xa extends at {
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
xa.NAME = "Moveable";
xa.DEFAULT = {
  selector: Hh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
var It;
class Bh {
  constructor(t = "") {
    L(this, It, void 0);
    typeof t == "object" ? W(this, It, t) : W(this, It, document.appendChild(document.createComment(t)));
  }
  on(t, e, n) {
    N(this, It).addEventListener(t, e, n);
  }
  once(t, e, n) {
    N(this, It).addEventListener(t, e, { once: !0, ...n });
  }
  off(t, e, n) {
    N(this, It).removeEventListener(t, e, n);
  }
  emit(t) {
    return N(this, It).dispatchEvent(t), t;
  }
}
It = new WeakMap();
const er = /* @__PURE__ */ new Set([
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
class $a extends Bh {
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
    return typeof t == "string" && (er.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit($a.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (er.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
const _o = class Sa extends at {
  async afterInit() {
    const t = await Sa.loadModule();
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
_o.NAME = "Sortable";
_o.DEFAULT = {
  animation: 150
};
let cu = _o;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let Ea = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const Bn = "```ZUI_STR\n";
var rs, ae, Te, yt, Me, Ne, Os;
const No = class No {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    L(this, Ne);
    L(this, rs, void 0);
    L(this, ae, void 0);
    L(this, Te, void 0);
    L(this, yt, void 0);
    L(this, Me, void 0);
    W(this, rs, e), W(this, Te, t ?? Ea()), W(this, ae, `ZUI_STORE:${N(this, Te)}`), W(this, yt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return N(this, rs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (N(this, Me) || W(this, Me, new No(N(this, Te), "session")), N(this, Me));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = N(this, yt).getItem(zt(this, Ne, Os).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(Bn))
        return n.substring(Bn.length);
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
    N(this, yt).setItem(zt(this, Ne, Os).call(this, t), typeof e == "string" ? `${Bn}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    N(this, yt).removeItem(zt(this, Ne, Os).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < N(this, yt).length; e++) {
      const n = N(this, yt).key(e);
      if (n != null && n.startsWith(N(this, ae))) {
        const i = N(this, yt).getItem(n);
        typeof i == "string" && t(n.substring(N(this, ae).length + 1), JSON.parse(i));
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
rs = new WeakMap(), ae = new WeakMap(), Te = new WeakMap(), yt = new WeakMap(), Me = new WeakMap(), Ne = new WeakSet(), Os = function(t) {
  return `${N(this, ae)}:${t}`;
};
let on = No;
const je = new on("DEFAULT");
function Fh(s, t = "local") {
  return new on(s, t);
}
Object.assign(je, { create: Fh });
class Ta extends B {
}
Ta.NAME = "Avatar";
Ta.Component = Qi;
class Ma extends B {
}
Ma.NAME = "BtnGroup";
Ma.Component = ya;
const ai = Symbol("EVENT_PICK");
class yo extends O {
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
    return k(
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
      if (i === ai)
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
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", ai), this._skipTriggerChange = !1);
  }
  render(t) {
    return Z(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
var le, vt, Gt;
class Na extends O {
  constructor(e) {
    super(e);
    L(this, le, void 0);
    L(this, vt, void 0);
    L(this, Gt, void 0);
    W(this, le, U()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = N(this, le)) == null ? void 0 : e.current;
  }
  get container() {
    return N(this, Gt);
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
    return k(
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
      ref: N(this, le),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!N(this, Gt)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), W(this, Gt, i[0]);
    }
    return N(this, Gt);
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
      N(this, vt) && (N(this, vt).call(this), W(this, vt, void 0));
      return;
    }
    N(this, vt) || W(this, vt, co(n, e, () => {
      const { placement: r, width: a } = i;
      In(n, e, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? En() : null, ss(), Tn(1)].filter(Boolean)
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
    const e = N(this, vt);
    e && (e(), W(this, vt, void 0)), W(this, Gt, void 0), W(this, le, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return Uc(this._render(e), this._getContainer(e));
  }
}
le = new WeakMap(), vt = new WeakMap(), Gt = new WeakMap();
var Ia = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Vt = (s, t, e) => (Ia(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Fn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, we = (s, t, e, n) => (Ia(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Hs, pt, qe;
let nt = class extends O {
  constructor(t) {
    super(t), Fn(this, Hs, void 0), Fn(this, pt, 0), Fn(this, qe, U()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Vt(this, pt) && (clearTimeout(Vt(this, pt)), we(this, pt, 0));
      let o = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: r } = o;
      return r === "closing" ? (await Ks(200, (a) => {
        we(this, pt, a);
      }), we(this, pt, 0), o = await this.changeState({ open: !1 })) : r === "opening" && (await Ks(50, (a) => {
        we(this, pt, a);
      }), we(this, pt, 0), o = await this.changeState({ open: !0 })), o;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, we(this, Hs, t.id ?? `_pick${u.guid++}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Vt(this, Hs);
  }
  get pop() {
    return Vt(this, qe).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), Vt(this, pt) && clearTimeout(Vt(this, pt));
    const t = Vt(this, qe).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let o;
    if (n) {
      const r = this._getPop(t);
      o = /* @__PURE__ */ f(r, { ref: Vt(this, qe), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Re, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      o
    ] });
  }
};
Hs = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
nt.Trigger = yo;
nt.Pop = Na;
nt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Aa = class extends nt {
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
      n ? /* @__PURE__ */ f(z, { icon: n }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = u.extend({
      color: e.value
    }, n.style), n.className = k("color-picker", n.className, { disabled: t.disabled }), n;
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
        o.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ f(z, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(z, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Aa.defaultProps = {
  ...nt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Da extends B {
}
Da.NAME = "ColorPicker";
Da.Component = Aa;
const ns = 24 * 60 * 60 * 1e3, j = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), zh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(j(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, bs = (s, t = /* @__PURE__ */ new Date()) => j(s).toDateString() === j(t).toDateString(), li = (s, t = /* @__PURE__ */ new Date()) => j(s).getFullYear() === j(t).getFullYear(), Pa = (s, t = /* @__PURE__ */ new Date()) => (s = j(s), t = j(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), uu = (s, t = /* @__PURE__ */ new Date()) => {
  s = j(s), t = j(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, fu = (s, t) => bs(j(t), s), pu = (s, t) => bs(j(t).getTime() - ns, s), mu = (s, t) => bs(j(t).getTime() + ns, s), tt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = j(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", li(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, gu = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = tt(s, li(s) ? n.month : n.full);
  if (bs(s, t))
    return i;
  const o = tt(t, li(s, t) ? Pa(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
};
var as, ls;
class La extends O {
  constructor() {
    super(...arguments);
    L(this, as, U());
    L(this, ls, (e, n) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(N(this, as).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: o } = e, r = [], a = [];
    for (let c = 0; c < 24; ++c)
      r.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: o === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: N(this, as), children: [
      /* @__PURE__ */ f(
        Wt,
        {
          className: l,
          items: r,
          onClickItem: N(this, ls).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        Wt,
        {
          className: l,
          items: a,
          onClickItem: N(this, ls).bind(this, "minute")
        }
      )
    ] });
  }
}
as = new WeakMap(), ls = new WeakMap();
var Vh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ss = (s, t, e) => (Vh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Es = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ci, hi, di, ui;
const sr = (s) => {
  if (!s)
    return;
  const t = j(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ra = class extends nt {
  constructor(t) {
    super(t), Es(this, ci, () => {
      this.toggle(!0);
    }), Es(this, hi, (n) => {
      this.setTime(n.target.value);
    }), Es(this, di, (n, i) => {
      this.setTime({ [n]: i });
    }), Es(this, ui, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = tt(/* @__PURE__ */ new Date(), t.format));
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
    const n = sr(e), { onInvalid: i, required: o, defaultValue: r } = this.props;
    this.setState({ value: n ? tt(n, this.props.format) : o ? r : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = sr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !o && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Ss(this, ui), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(z, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: r, readOnly: a, onFocus: Ss(this, ci), onChange: Ss(this, hi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(La, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: Ss(this, di) });
  }
};
ci = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Ra.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
K.addLang({
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
const Uh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), o = n.getTime() - (7 + i - e) % 7 * ns;
  return {
    days: 7 * 5,
    startTime: o,
    firstDay: n.getTime()
  };
}, nr = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => tt(e, t)));
var un;
class jh extends O {
  constructor() {
    super(...arguments);
    L(this, un, (e) => {
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
      weekNames: o = K.getLang("weekNames"),
      monthNames: r = K.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let E = 0; E < 7; E++) {
      const I = (i + E) % 7;
      h.push(/* @__PURE__ */ f("div", { className: k("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: o ? o[I] : I }) }, E));
    }
    const { startTime: p, days: g, firstDay: _ } = Uh(a, l, i), v = _ + g * ns;
    let y = p;
    const w = [], C = "yyyy-MM-dd", $ = nr(c, C), b = nr(d, C);
    for (; y <= v; ) {
      const E = [];
      for (let I = 0; I < 7; I++) {
        const P = new Date(y), D = P.getDate(), T = tt(P, C), A = P.getDay(), V = Pa(P, _), M = k("col mini-calendar-day", {
          active: $.has(T),
          selected: b.has(T),
          "is-first": D === 1,
          "is-in-month": V,
          "is-out-month": !V,
          "is-today": bs(P, n),
          "is-weekend": A === 0 || A === 6
        });
        E.push(
          /* @__PURE__ */ f("div", { className: M, "data-date": T, children: /* @__PURE__ */ f("a", { className: m, onClick: N(this, un), children: D === 1 && r ? r[P.getMonth()] : P.getDate() }) }, T)
        ), y += ns;
      }
      w.push(/* @__PURE__ */ f("div", { className: "row", children: E }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      w
    ] });
  }
}
un = new WeakMap();
var cs, fn;
class ir extends O {
  constructor() {
    super(...arguments);
    L(this, cs, U());
    L(this, fn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const o = u(e.target).closest("[data-value]").dataset("value");
      o && (n(+o), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(N(this, cs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: o, value: r } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = o; c <= i; ++c)
      a.push(/* @__PURE__ */ f(J, { type: "ghost", "data-value": c, active: c === r, className: k(l === c ? "is-current" : ""), onClick: N(this, fn), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: N(this, cs), children: a });
  }
}
cs = new WeakMap(), fn = new WeakMap();
var Ie, hs, ds, us, fs, ps, pn, Oa, mn, Ha;
class Wa extends O {
  constructor(e) {
    super(e);
    L(this, pn);
    L(this, mn);
    L(this, Ie, void 0);
    L(this, hs, void 0);
    L(this, ds, void 0);
    L(this, us, void 0);
    L(this, fs, void 0);
    L(this, ps, void 0);
    W(this, Ie, U()), W(this, hs, (o) => {
      const r = u(o.target).closest("[data-set-date]");
      r.length && this.changeDate(r.dataset("set-date"));
    }), W(this, ds, () => {
      const { year: o, month: r } = this.state;
      r === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: r - 1 });
    }), W(this, us, () => {
      const { year: o, month: r } = this.state;
      r === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: r + 1 });
    }), W(this, fs, (o) => {
      this.setState({ year: o, select: "day" });
    }), W(this, ps, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var r, a;
      if (o.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        o.length > 3 && (l = zh(l, o.substring(5).replace("+", ""))), o = tt(l, "yyyy-MM-dd");
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
    u(N(this, Ie).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: o = K.getLang("yearFormat") || "{0}",
      weekNames: r = K.getLang("weekNames"),
      monthNames: a = K.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = n, p = m === "day", g = j(e.minDate || "1970-1-1"), _ = j(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: N(this, Ie), onClick: N(this, hs), children: [
      zt(this, pn, Oa).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(J, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: X(o, d) }),
          /* @__PURE__ */ f(J, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(J, { type: "ghost", size: "sm", square: !0, onClick: N(this, ds), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(J, { type: "ghost", size: "sm", square: !0, onClick: N(this, us), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          jh,
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
        m === "year" ? /* @__PURE__ */ f(
          ir,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: N(this, fs)
          }
        ) : m === "month" ? /* @__PURE__ */ f(
          ir,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: N(this, ps)
          }
        ) : null,
        p ? zt(this, mn, Ha).call(this, e) : null
      ] })
    ] });
  }
}
Ie = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), pn = new WeakSet(), Oa = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(Wt, { ...n })) : null;
}, mn = new WeakSet(), Ha = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: o } = e;
  return n || (n = [{ text: i, "data-set-date": tt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(xt, { btnProps: { className: "ghost text-primary" }, ...n }),
    o ? /* @__PURE__ */ f(J, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var qh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, zn = (s, t, e) => (qh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Vn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, fi, pi, mi;
let Ba = class extends nt {
  constructor(t) {
    super(t), Vn(this, fi, () => {
      this.toggle(!0);
    }), Vn(this, pi, (n) => {
      this.setDate(n.target.value);
    }), Vn(this, mi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: o = "", required: r, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = j(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? r ? o : "" : tt(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !o && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: zn(this, mi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(z, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: r, readOnly: a, onFocus: zn(this, fi), onChange: zn(this, pi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: o, yearText: r, todayText: a = K.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ f(
      Wa,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: o,
        yearText: r,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      }
    );
  }
};
fi = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Ba.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Fa extends B {
}
Fa.NAME = "TimePicker";
Fa.Component = Ra;
class za extends B {
}
za.NAME = "DatePicker";
za.Component = Ba;
class Gh extends O {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(Wa, { ...e }),
      /* @__PURE__ */ f(La, { ...n })
    ] });
  }
}
var Yh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, He = (s, t, e) => (Yh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Be = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, gi, _i, yi, vi, wi;
const or = (s) => {
  if (!s)
    return;
  const t = j(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Va = class extends nt {
  constructor(t) {
    super(t), Be(this, gi, () => {
      this.toggle(!0);
    }), Be(this, _i, (r) => {
      this.setDate(r.target.value);
    }), Be(this, yi, () => {
      this.setDate("");
      const { required: r, defaultValue: a } = this.props;
      this.setState({ value: r ? a : "" });
    }), Be(this, vi, (r, a) => {
      this.setTime({ [r]: a });
    }), Be(this, wi, (r) => {
      this.setTime(r.target.value);
    }), this.setDate = (r) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = j(r), g = !r || Number.isNaN(p.getDay()), _ = tt(p, d), [, v = "00:00"] = this.state.value.split(m);
      this.setState({ value: g ? c ? l : "" : `${_}${m}${v}` }, () => {
        !g && a && a(r);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: o } = t;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${o}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: o, joiner: r, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, m = "00:00"] = this.state.value.split(r), [p, g] = m.split(":"), { hour: _ = +p, minute: v = +g } = t;
      c = `${_}:${v}`;
    }
    const d = or(c), h = this.state.value.split(r)[0] || tt(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${r}${tt(d, o)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = or(this.state.value);
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
        onClick: He(this, yi),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(z, { icon: i })), [
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
          onFocus: He(this, gi),
          onChange: (m) => {
            He(this, _i).call(this, m), He(this, wi).call(this, m);
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
      className: k(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: o, yearText: r, todayText: a = K.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: g } = t, [_, v] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: o,
        yearText: r,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      },
      time: {
        hour: _,
        minute: v,
        minuteStep: g,
        onChange: He(this, vi)
      }
    };
    return /* @__PURE__ */ f(Gh, { ...y });
  }
};
gi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
Va.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Ua extends B {
}
Ua.NAME = "DatetimePicker";
Ua.Component = Va;
const Un = "show", rr = "in", Kh = '[data-dismiss="modal"]', Cs = class Ge extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Kh) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Un);
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
      return u(e).css("z-index", `${Ge.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: n, backdrop: i, className: o, style: r } = this.options;
    return u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, Un, o).css({
      zIndex: `${Ge.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(rr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (u(this.modalElement).removeClass(rr), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(Un), this.emit("hidden");
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
    (e = Ge.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ge.query(t)) == null || e.show();
  }
};
Cs.NAME = "Modal";
Cs.MULTI_INSTANCE = !0;
Cs.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Cs.zIndex = 1500;
let _e = Cs;
u(window).on(`resize.${_e.NAMESPACE}`, () => {
  _e.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
u(document).on(`to-hide.${_e.NAMESPACE}`, (s, t) => {
  _e.hide(t == null ? void 0 : t.target);
});
class ja extends O {
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
    return Q(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: k("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : Q(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(xt, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ f("div", { className: k("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return Q(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: k("modal-footer", e), children: n ? /* @__PURE__ */ f(xt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: k("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: k("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
ja.defaultProps = { closeBtn: !0 };
class qa extends O {
  constructor() {
    super(...arguments), this._ref = U(), this.state = {}, this._watchIframeHeight = () => {
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
qa.defaultProps = {
  watchHeight: !0
};
var vo = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ft = (s, t, e) => (vo(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Fe = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, be = (s, t, e, n) => (vo(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Bs = (s, t, e) => (vo(s, t, "access private method"), e), Et, Ye, Tt, rn, wo, Fs, bi;
function Xh(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function Zh(s, t) {
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
    body: e === "html" ? /* @__PURE__ */ f(_s, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Jh(s, t) {
  const { url: e, custom: n, title: i, size: o } = t, r = typeof o == "object" && typeof o.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(qa, { url: e, watchHeight: !r })
  };
}
const Qh = {
  custom: Xh,
  ajax: Zh,
  iframe: Jh
}, jn = "loading", Ga = class ie extends _e {
  constructor() {
    super(...arguments), Fe(this, rn), Fe(this, Fs), Fe(this, Et, void 0), Fe(this, Ye, void 0), Fe(this, Tt, void 0);
  }
  get id() {
    return ft(this, Ye);
  }
  get loading() {
    var t;
    return (t = ft(this, Et)) == null ? void 0 : t.classList.contains(jn);
  }
  get shown() {
    var t;
    return !!((t = ft(this, Et)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = ft(this, Et);
    if (!t) {
      const { options: e } = this;
      let n = ft(this, Ye);
      n || (n = e.id || `modal-${u.guid++}`, be(this, Ye, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const o = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": o
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      be(this, Et, t);
    }
    return t;
  }
  get $emitter() {
    const t = ft(this, Et);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("show", () => {
      u("body").disableScroll();
    }), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ie.getAll().some((t) => t.shown) || u("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = ft(this, Et);
    t && (u(t).removeData(this.constructor.KEY).remove(), be(this, Et, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, Tt) && clearTimeout(ft(this, Tt));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: o, loadingText: r = null } = e, a = Qh[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", r).addClass(jn), o && be(this, Tt, window.setTimeout(() => {
      be(this, Tt, 0), Bs(this, Fs, bi).call(this, this.options.timeoutTip);
    }, o));
    const l = await a.call(this, t, e);
    return l === !1 ? await Bs(this, Fs, bi).call(this, this.options.failedTip) : l && typeof l == "object" && await Bs(this, rn, wo).call(this, l), ft(this, Tt) && (clearTimeout(ft(this, Tt)), be(this, Tt, 0)), this.layout(), await Ks(100), n.removeClass(jn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, o = { show: !0, ...i };
      !o.type && o.url && (o.type = "ajax");
      const r = ie.ensure(n, o), a = `${ie.NAMESPACE}.open${u.guid++}`;
      r.on(`hidden${a}`, () => {
        r.off(a), e(r);
      }), r.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: o = "icon-lg muted", actions: r = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? m = /* @__PURE__ */ f("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${o}` }),
      m
    ] }) : m = /* @__PURE__ */ f("div", { className: k("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(r) ? r : [r]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = K.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && p.push(v);
    }, []);
    let g;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: v, event: y }) => {
        const w = ie.query(y.target, c);
        g = v.key, (a == null ? void 0 : a(v, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await ie.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: _, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ie.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, a) => {
        n == null || n(r.key === "confirm", a), e == null || e(r, a);
      },
      ...i
    }) === "confirm";
  }
};
Et = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
rn = /* @__PURE__ */ new WeakSet();
wo = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, Qs(
      /* @__PURE__ */ f(ja, { ...s }),
      this.modalElement
    );
  });
};
Fs = /* @__PURE__ */ new WeakSet();
bi = function(s) {
  if (s)
    return Bs(this, rn, wo).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
Ga.DEFAULT = {
  ..._e.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let td = Ga;
const ed = '[data-toggle="modal"]';
class Ci extends at {
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
      e = _e.ensure(n, t);
    } else
      e = td.ensure(this.container, t);
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
Ci.NAME = "ModalTrigger";
u(document).on(`click${Ci.NAMESPACE}`, ed, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Ci.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let Dn = class extends mt {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
Dn.NAME = "nav";
Dn.ItemComponents = {
  ...mt.ItemComponents,
  item: [ce, { innerComponent: "a" }]
};
Dn.defaultItemProps = {
  component: "li"
};
class Ya extends B {
}
Ya.NAME = "Nav";
Ya.Component = Dn;
function is(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function sd({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = is(o, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : X(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : X(r, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === o.page), /* @__PURE__ */ f(J, { type: e, ...a });
}
function nd({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = is(i, e);
  return n = typeof n == "function" ? n(a) : X(n, a), /* @__PURE__ */ f(Ct, { ...r, children: [
    o,
    n
  ] });
}
function id({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...o
}) {
  if (!n.pageTotal)
    return;
  const r = { ...o, square: !0 }, a = () => (r.text = "", r.icon = "icon-ellipsis-h", r.disabled = !0, /* @__PURE__ */ f(J, { type: t, ...r })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      r.text = p, delete r.icon, r.disabled = !1;
      const g = is(n, p);
      i && (r.url = typeof i == "function" ? i(g) : X(i, g)), m.push(/* @__PURE__ */ f(J, { type: t, ...r }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
function od({
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
  return r.text = typeof a == "function" ? a(t) : X(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(ho, { type: "dropdown", dropdown: i, ...r });
}
function rd({
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
  const m = (_) => {
    var v;
    h = Number((v = _.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = is(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(v) : X(l, v));
  }, g = is(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : X(l, g), /* @__PURE__ */ f("div", { className: k("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ f(J, { type: n, ...d, onClick: p })
  ] });
}
const qt = class extends xt {
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
qt.NAME = "pager";
qt.ItemComponents = {
  ...xt.ItemComponents,
  info: nd,
  link: [sd, qt.getBtnProps],
  nav: [id, qt.getBtnProps],
  "size-menu": [od, qt.getBtnProps],
  goto: [rd, qt.getBtnProps]
};
qt.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let ad = qt;
class Ka extends B {
}
Ka.NAME = "Pager";
Ka.Component = ad;
class Xa extends B {
}
Xa.NAME = "Pick";
Xa.Component = nt;
var Ae, ms;
class Za extends O {
  constructor(e) {
    super(e);
    L(this, Ae, void 0);
    L(this, ms, void 0);
    this._searchInput = U(), this._measure = U(), W(this, Ae, (n) => {
      var o, r;
      const i = n.target.value;
      (r = (o = this.props).onSearch) == null || r.call(o, i), this.setState({ search: i }), n.stopPropagation();
    }), W(this, ms, (n) => {
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
    return o ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: r }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: N(this, ms), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: N(this, Ae),
          onInput: N(this, Ae),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ae = new WeakMap(), ms = new WeakMap();
class ld extends yo {
  constructor() {
    super(...arguments), this._search = U(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(ht, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      Za,
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
      this._skipTriggerChange !== n.value && a.trigger("change", ai), this._skipTriggerChange = !1;
    }
  }
}
class cd extends yo {
  constructor() {
    super(...arguments), this._search = U(), this._handleDeselectClick = (t) => {
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
    return k(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ f(
      Za,
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
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ f(ht, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "main");
    const m = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      m,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
const hd = (s, t, e = "is-match") => s.reduce((n, i) => [...n].reduce((o, r) => {
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
var gn, Ja, _n, Qa, gs;
class dd extends Na {
  constructor() {
    super(...arguments);
    L(this, gn);
    L(this, _n);
    L(this, gs, void 0);
    this._menu = U(), W(this, gs, ({ item: e }) => {
      const n = e.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(n) : (r(n), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const e = this.element;
    e && u(e).on("mouseenter.picker.zui", ".menu-item", (n) => {
      const i = u(n.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const e = this.element;
    e && u(e).off(".picker.zui");
  }
  setHoverItem(e) {
    this.props.changeState({ hoverItem: e }, () => {
      const n = zt(this, gn, Ja).call(this);
      n != null && n.length && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(e) {
    return k(
      super._getClass(e),
      "picker-menu"
    );
  }
  _renderPop(e) {
    const { menu: n } = e;
    return /* @__PURE__ */ f(
      Wt,
      {
        ref: this._menu,
        className: "picker-menu-list",
        items: zt(this, _n, Qa).call(this),
        onClickItem: N(this, gs),
        ...n
      }
    );
  }
}
gn = new WeakSet(), Ja = function() {
  const e = this.element;
  if (e)
    return u(e).find(".menu-item>a.hover");
}, _n = new WeakSet(), Qa = function() {
  const { selections: e, items: n, hoverItem: i, search: o } = this.props.state, r = new Set(e.map((d) => d.value));
  let a = !1;
  const l = u.unique(o.toLowerCase().split(" ").filter((d) => d.length)), c = n.reduce((d, h) => {
    const {
      value: m = "",
      keys: p,
      text: g,
      className: _,
      content: v,
      ...y
    } = h;
    return m === i && (a = !0), g && d.push({
      key: m,
      active: r.has(m),
      text: v ? null : typeof g == "string" ? hd(l, [g]) : /* @__PURE__ */ f(ht, { content: g }),
      className: k(_, { hover: m === i }),
      "data-value": m,
      content: v,
      ...y
    }), d;
  }, []);
  return !a && c.length && (c[0].className = k(c[0].className, "hover")), c;
}, gs = new WeakMap();
let bo = class extends nt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = U(), this.isEmptyValue = (o) => this._emptyValueSet.has(o), this.toggleValue = (o, r) => {
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
        const o = new Set(i.map((r) => r.value));
        this.state.value = this.valueList.filter((r) => o.has(r)).join(t.valueSplitter);
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
    return this._emptyValueSet.values().next().value;
  }
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e, searchDelay: n } = this.props, { search: i } = this.state;
    let o = [];
    if (typeof e == "function") {
      if (await Ks(n || 500), this._abort !== t || (o = await e(i, { signal: t.signal }), this._abort !== t))
        return o;
    } else if (i.length) {
      const r = u.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o = e, r.length && (o = e.reduce((a, l) => {
        const {
          value: c,
          keys: d = "",
          text: h
        } = l;
        return r.every((m) => c.toLowerCase().includes(m) || d.toLowerCase().includes(m) || typeof h == "string" && h.toLowerCase().includes(m)) && a.push(l), a;
      }, []));
    } else
      o = e;
    return this._abort = void 0, o;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const o = i.items || n.items, r = new Map(o.map((a) => [a.value, a]));
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(r.get(l) || { value: l }), a), []);
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
    return t.Trigger || (t.multiple ? ld : cd);
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
        const a = new Set((Array.isArray(o) ? o : this.state.items).map((l) => String(l.value)));
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
bo.defaultProps = {
  ...nt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
bo.Pop = dd;
class tl extends B {
}
tl.NAME = "Picker";
tl.Component = bo;
class el extends at {
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
    return i && n.middleware.push(En()), o && n.middleware.push(o === !0 ? ss() : ss(o)), r && n.middleware.push(oi({ element: this.$arrow[0] })), a && n.middleware.push(Tn(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = co(t, e, () => {
      In(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !oi || !r.arrow)
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
el.NAME = "Popovers";
el.DEFAULT = {
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
class sl extends B {
}
sl.NAME = "SearchBox";
sl.Component = eo;
class nl extends B {
}
nl.NAME = "Toolbar";
nl.Component = xt;
const ud = '[data-toggle="tooltip"]';
class Dt extends ct {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let o = n, r = i;
    return r === void 0 && (r = o, o = void 0), {
      ...super._getRenderOptions(),
      title: o,
      content: r,
      className: k("tooltip", t, e, o ? "tooltip-has-title" : ""),
      contentClass: o ? "tooltip-content" : ""
    };
  }
}
Dt.NAME = "Tooltip";
Dt.DEFAULT = {
  ...ct.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Dt.NAMESPACE} mouseenter${Dt.NAMESPACE}`, ud, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(Dt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Dt.ensure(t, { show: Dt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
function fd({
  type: s,
  component: t,
  className: e,
  children: n,
  content: i,
  style: o,
  attrs: r,
  url: a,
  disabled: l,
  active: c,
  icon: d,
  text: h,
  target: m,
  trailingIcon: p,
  hint: g,
  checked: _,
  actions: v,
  show: y,
  level: w = 0,
  items: C,
  ...$
}) {
  const b = Array.isArray(v) ? { items: v } : v;
  return b && (b.btnProps || (b.btnProps = { size: "sm" }), b.className = k("tree-actions not-nested-toggle", b.className)), /* @__PURE__ */ f(
    "div",
    {
      className: k("tree-item-content", e, { disabled: l, active: c }),
      title: g,
      "data-target": m,
      style: { paddingLeft: `calc(${w} * var(--tree-indent, 20px))` },
      "data-level": w,
      ...$,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${C ? " state" : ""}`, children: C ? /* @__PURE__ */ f("span", { class: `caret-${y ? "down" : "right"}` }) : null }),
        typeof _ == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${_ ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(z, { icon: d, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, style: o, ...r, children: h }) : /* @__PURE__ */ f("span", { class: "text", style: o, ...r, children: h }),
        /* @__PURE__ */ f(ht, { content: i }),
        n,
        b ? /* @__PURE__ */ f(xt, { ...b }) : null,
        /* @__PURE__ */ f(z, { icon: p, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Co = class extends Ji {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t), { collapsedIcon: n, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: n,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...e
    };
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(e) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: e } = this.props;
    return e && (t.className = k(t.className, "tree-hover")), t;
  }
};
Co.ItemComponents = {
  item: fd
};
Co.NAME = "tree";
class il extends B {
}
il.NAME = "Tree";
il.Component = Co;
class ko extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? Sc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${o}" for="${t}">${e}</label>`), n) {
        const m = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(m);
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
      return new Dt(o, { title: e }), o;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const o = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Dt(o, { title: e })), o;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${$c(t)}</span>`);
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
        const h = o.closest(".file-item"), m = h.find(".file-name");
        if (m.html() === r.val()) {
          o.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(t, r.val()), o.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), m.html(r.val());
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
ko.NAME = "Upload";
ko.DEFAULT = {
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
class ol extends ko {
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
ol.NAME = "UploadImgs";
ol.DEFAULT = {
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
class xo extends bt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
xo.NAME = "ContextMenu";
xo.DEFAULT = {
  ...bt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function pd(s) {
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
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(_s, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const qn = ([s, t, e, n], [i, o, r, a]) => !(s + e <= i || i + r <= s || t + n <= o || o + a <= t), ar = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], Ts = "Dashboard:Block.cache:";
let rl = class extends O {
  constructor(t) {
    super(t), this._ref = U(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      xo.show({
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
        typeof n == "string" ? je.set(`${Ts}${n}:${t}`, e) : je.session.set(`${Ts}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? je.get(`${Ts}${e}:${t}`) : je.session.get(`${Ts}${t}`);
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
        top: m = -1,
        fetch: p = e,
        menu: g = n,
        content: _,
        ...v
      } = r, [y, w] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: w,
        left: Math.min(h, i - y),
        top: m,
        fetch: p,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!p,
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
      t.sort((l, c) => ar(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const o = Array.from(i.entries());
    o.sort((a, l) => ar(a[1], l[1]));
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
    this._draggable = new go(t, {
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
        const { cellHeight: n, grid: i } = this.props, o = t.getBoundingClientRect(), [, , r, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - r, Math.max(0, Math.round((e.clientX - o.left - l) / (o.width / i)))), h = Math.max(0, Math.round((e.clientY - o.top - c) / n)), m = this.state.dropping;
        m && m[0] === d && m[1] === h || this.setState({ dropping: [d, h, r, a] });
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
    if (n && qn(t, n))
      return !1;
    for (const [i, o] of this._map.entries())
      if (i !== e && qn(o, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && qn(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
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
            const { id: d, menu: h, content: m, title: p } = l, [g, _, v, y] = d === r && o ? o : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              pd,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: n * _,
                width: `${100 * v / i}%`,
                height: n * y,
                content: m,
                title: p,
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
rl.defaultProps = {
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
class al extends B {
}
al.NAME = "Dashboard";
al.Component = rl;
var Yt, Kt;
class lr extends O {
  constructor(e) {
    super(e);
    L(this, Yt, void 0);
    L(this, Kt, void 0);
    W(this, Yt, 0), W(this, Kt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, o = n.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (N(this, Yt) && cancelAnimationFrame(N(this, Yt)), W(this, Yt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), W(this, Yt, 0);
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
    e && (W(this, Kt, typeof e == "string" ? document : e.current), N(this, Kt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), N(this, Kt) && N(this, Kt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: m } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...r
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: k("scrollbar", o, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": p
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
Yt = new WeakMap(), Kt = new WeakMap();
const an = /* @__PURE__ */ new Map(), ln = [];
function ll(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && an.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  an.set(e, s), t != null && t.buildIn && !ln.includes(e) && ln.push(e);
}
function Ft(s, t) {
  ll(s, t);
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
function cl(s) {
  return an.delete(s);
}
function md(s) {
  if (typeof s == "string") {
    const t = an.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function hl(s, t, e) {
  return t.forEach((n) => {
    var o;
    if (!n)
      return;
    const i = md(n);
    i && (e.has(i.name) || ((o = i.plugins) != null && o.length && hl(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function gd(s = [], t = !0) {
  return t && ln.length && s.unshift(...ln), s != null && s.length ? hl([], s, /* @__PURE__ */ new Set()) : [];
}
function dl() {
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
function _d(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function cr(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function Gn(s, t = !1) {
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
function yd(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (w) => (typeof w == "function" && (w = w.call(s)), w = cr(w, 0), w < 1 && (w = Math.round(w * n)), w), d = {
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
  }, m = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, p = [], g = {};
  let _ = !1;
  const v = [], y = {};
  if (e.forEach((w) => {
    const { colTypes: C, onAddCol: $ } = w;
    C && Object.entries(C).forEach(([b, E]) => {
      y[b] || (y[b] = []), y[b].push(E);
    }), $ && v.push($);
  }), t.cols.forEach((w) => {
    if (w.hidden)
      return;
    const { type: C = "", name: $ } = w, b = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...w,
      type: C
    }, E = {
      name: $,
      type: C,
      setting: b,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, I = y[C];
    I && I.forEach((F) => {
      const it = typeof F == "function" ? F.call(s, b) : F;
      it && Object.assign(b, it, w);
    });
    const { fixed: P, flex: D, minWidth: T = o, maxWidth: A = r } = b, V = cr(b.width || i, i);
    E.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, E.width = _d(V < 1 ? Math.round(V * n) : V, T, A), v.forEach((F) => F.call(s, E)), p.push(E), g[E.name] = E;
    const M = P ? P === "left" ? h : m : d;
    M.list.push(E), M.totalWidth += E.width, M.width = M.totalWidth, E.flex && M.flexList.push(E), typeof b.order == "number" && (_ = !0);
  }), _) {
    const w = (C, $) => (C.setting.order ?? 0) - ($.setting.order ?? 0);
    p.sort(w), h.list.sort(w), d.list.sort(w), m.list.sort(w);
  }
  return Gn(h, !0), Gn(m, !0), d.widthSetting = n - h.width - m.width, Gn(d), {
    list: p,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function vd({ col: s, className: t, height: e, row: n, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var V;
  const p = {
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
  }], w = ["dtable-cell-content", s.setting.cellClass], C = (V = n.data) == null ? void 0 : V[s.name], $ = [a ?? C ?? ""], b = i ? i($, { row: n, col: s, value: C }, Z) : $, E = [], I = [], P = {}, D = {};
  let T = "div";
  b == null || b.forEach((M) => {
    if (typeof M == "object" && M && !Q(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const F = M.outer ? E : I;
      M.html ? F.push(/* @__PURE__ */ f("div", { className: k("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? p : v, M.style), M.className && (M.outer ? y : w).push(M.className), M.children && F.push(M.children), M.attrs && Object.assign(M.outer ? P : D, M.attrs)), M.tagName && !M.outer && (T = M.tagName);
    } else
      I.push(M);
  });
  const A = T;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k(y),
      style: p,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...m,
      ...P,
      children: [
        I.length > 0 && /* @__PURE__ */ f(A, { className: k(w), style: v, ...D, children: I }),
        E
      ]
    }
  );
}
function Yn({
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
  CellComponent: d = vd,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(s) ? s : [s], p = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + p }, children: m.reduce((v, y, w) => {
        const C = t.length;
        return t.forEach(($, b) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: k(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  b ? "" : "is-first-in-row",
                  b === C - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === g - 1 ? "is-last-row" : ""
                ),
                col: $,
                row: y,
                top: y.top - p,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${$.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function ul({
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
  children: m
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ f(
    Yn,
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
    Yn,
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
    Yn,
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
      className: k("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        p,
        g,
        _,
        m
      ]
    }
  );
}
var $o = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, S = (s, t, e) => ($o(s, t, "read from private field"), e ? e.call(s) : t.get(s)), R = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, q = (s, t, e, n) => ($o(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), lt = (s, t, e) => ($o(s, t, "access private method"), e), ke, Ke, fe, Pt, re, st, Nt, Mt, Xe, zs, cn, os, Ut, Ze, Je, ki, fl, xi, pl, $i, ml, Si, gl, Vs, Ei, Pn, hn, Ti, Mi, Ni, Ii, Qe, Us, So, _l, Eo, yl, Ai, vl;
let To = class extends O {
  constructor(t) {
    super(t), R(this, ki), R(this, xi), R(this, $i), R(this, Si), R(this, Vs), R(this, Qe), R(this, So), R(this, Eo), R(this, Ai), this.ref = U(), R(this, ke, 0), R(this, Ke, void 0), R(this, fe, !1), R(this, Pt, void 0), R(this, re, void 0), R(this, st, []), R(this, Nt, void 0), R(this, Mt, /* @__PURE__ */ new Map()), R(this, Xe, {}), R(this, zs, void 0), R(this, cn, []), R(this, os, { in: !1 }), this.updateLayout = () => {
      S(this, ke) && cancelAnimationFrame(S(this, ke)), q(this, ke, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), q(this, ke, 0);
      }));
    }, R(this, Ut, (e, n) => {
      n = n || e.type;
      const i = S(this, Mt).get(n);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), R(this, Ze, (e) => {
      S(this, Ut).call(this, e, `window_${e.type}`);
    }), R(this, Je, (e) => {
      S(this, Ut).call(this, e, `document_${e.type}`);
    }), R(this, Pn, (e, n, i) => {
      const { row: o, col: r } = n;
      n.value = this.getCellValue(o, r), e[0] = n.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, st).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), r.setting[a] && (e = r.setting[a].call(this, e, n, i)), e;
    }), R(this, hn, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), R(this, Ti, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: o, cellElement: r } = n;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: o, element: r }), S(this, st).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: o, element: r });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: o, rowID: i, rowInfo: d, element: r })) === !0)
            return;
          for (const h of S(this, st))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: o, rowID: i, rowInfo: d, element: r })) === !0)
              return;
        }
      }
    }), R(this, Mi, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), R(this, Ni, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return lt(this, Qe, Us).call(this, !1);
      lt(this, Qe, Us).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), R(this, Ii, () => {
      lt(this, Qe, Us).call(this, !1);
    }), q(this, Ke, t.id ?? `dtable-${Ea(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, q(this, re, Object.freeze(gd(t.plugins))), S(this, re).forEach((e) => {
      var r;
      const { methods: n, data: i, state: o } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Xe), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = e.onCreate) == null || r.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = S(this, Nt)) == null ? void 0 : t.options) || S(this, Pt) || dl();
  }
  get plugins() {
    return S(this, st);
  }
  get layout() {
    return S(this, Nt);
  }
  get id() {
    return S(this, Ke);
  }
  get data() {
    return S(this, Xe);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return S(this, os);
  }
  componentWillReceiveProps() {
    q(this, Pt, void 0);
  }
  componentDidMount() {
    S(this, fe) ? this.forceUpdate() : lt(this, Vs, Ei).call(this), S(this, st).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", S(this, Ti)), this.on("keydown", S(this, Mi));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", S(this, Ni)), this.on("mouseleave", S(this, Ii))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), q(this, zs, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, st).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, fe) ? lt(this, Vs, Ei).call(this) : S(this, st).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = S(this, zs)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of S(this, Mt).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), S(this, Ze)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), S(this, Je)) : t.removeEventListener(n, S(this, Ut));
    S(this, st).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), S(this, re).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), q(this, Xe, {}), S(this, Mt).clear();
  }
  on(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = S(this, Mt).get(t);
    i ? i.push(e) : (S(this, Mt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), S(this, Ze)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), S(this, Je)) : (o = this.element) == null || o.addEventListener(t, S(this, Ut)));
  }
  off(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = S(this, Mt).get(t);
    if (!i)
      return;
    const o = i.indexOf(e);
    o >= 0 && i.splice(o, 1), i.length || (S(this, Mt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), S(this, Ze)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), S(this, Je)) : (r = this.element) == null || r.removeEventListener(t, S(this, Ut)));
  }
  emitCustomEvent(t, e) {
    S(this, Ut).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: m } = t;
    if (d === "up" || d === "down")
      m = i + (d === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      m = 0;
    else if (d === "bottom")
      m = o - r;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (h = i + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (p.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, o - r)), m !== i && (p.scrollTop = m)), Object.keys(p).length ? (this.setState(p, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, p), e == null || e.call(this, !0);
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
    if (!S(this, Pt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      q(this, Nt, void 0);
    else if (n === "options") {
      if (q(this, Pt, void 0), !S(this, Nt))
        return;
      q(this, Nt, void 0);
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
    return K(S(this, cn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = lt(this, Ai, vl).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l, beforeRender: c } = this.options, d = {}, h = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": o,
      "dtable-bordered": r,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], m = [];
    if (t) {
      if (h.push(t.className), c) {
        const p = c.call(this, t);
        p && (t = p);
      }
      S(this, st).forEach((p) => {
        var _;
        const g = (_ = p.beforeRender) == null ? void 0 : _.call(this, t);
        g && (t = g);
      }), d.width = t.width, d.height = t.height, d["--dtable-row-height"] = `${t.rowHeight}px`, h.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && m.push(...t.children), m.push(
        lt(this, ki, fl).call(this, t),
        lt(this, xi, pl).call(this, t),
        lt(this, $i, ml).call(this, t)
      ), t.scrollable && m.push(lt(this, Si, gl).call(this, t)), S(this, st).forEach((p) => {
        var _;
        const g = (_ = p.onRender) == null ? void 0 : _.call(this, t);
        g && (g.style && Object.assign(d, g.style), g.className && h.push(g.className), g.children && m.push(g.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: S(this, Ke),
        className: k(h),
        style: d,
        ref: this.ref,
        tabIndex: -1,
        children: m
      }
    );
  }
};
ke = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
fe = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
cn = /* @__PURE__ */ new WeakMap();
os = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakSet();
fl = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: o } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      ul,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: S(this, Pn),
        children: o
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Zi,
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
xi = /* @__PURE__ */ new WeakSet();
pl = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    ul,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: S(this, Pn),
      children: l
    },
    "body"
  );
};
$i = /* @__PURE__ */ new WeakSet();
ml = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Zi,
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
Si = /* @__PURE__ */ new WeakSet();
gl = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ f(
      lr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: o,
        clientSize: i,
        onScroll: S(this, hn),
        left: n,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      lr,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, hn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Vs = /* @__PURE__ */ new WeakSet();
Ei = function() {
  var s;
  q(this, fe, !1), (s = this.options.afterRender) == null || s.call(this), S(this, st).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Pn = /* @__PURE__ */ new WeakMap();
hn = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
Us = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const o = S(this, os);
  i.in !== o.in && n.toggleClass("dtable-hover", i.in), i.row !== o.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== o.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), q(this, os, i);
};
So = /* @__PURE__ */ new WeakSet();
_l = function() {
  if (S(this, Pt))
    return !1;
  const t = { ...dl(), ...S(this, re).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return q(this, Pt, t), q(this, st, S(this, re).reduce((e, n) => {
    const { when: i, options: o } = n;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), e.push(n)), e;
  }, [])), q(this, cn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Eo = /* @__PURE__ */ new WeakSet();
yl = function() {
  var P, D;
  const { plugins: s } = this;
  let t = S(this, Pt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((T) => {
    var V;
    const A = (V = T.beforeLayout) == null ? void 0 : V.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(e, T.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      q(this, fe, !0);
      return;
    }
  }
  const o = yd(this, t, s, i), { data: r, rowKey: a = "id", rowHeight: l } = t, c = [], d = (T, A, V) => {
    var F, it;
    const M = { data: V ?? { [a]: T }, id: T, index: c.length, top: 0 };
    if (V || (M.lazy = !0), c.push(M), ((F = t.onAddRow) == null ? void 0 : F.call(this, M, A)) !== !1) {
      for (const gt of s)
        if (((it = gt.onAddRow) == null ? void 0 : it.call(this, M, A)) === !1)
          return;
    }
  };
  if (typeof r == "number")
    for (let T = 0; T < r; T++)
      d(`${T}`, T);
  else
    Array.isArray(r) && r.forEach((T, A) => {
      typeof T == "object" ? d(`${T[a] ?? ""}`, A, T) : d(`${T ?? ""}`, A);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, h);
    T && (h = T);
  }
  for (const T of s) {
    const A = (P = T.onAddRows) == null ? void 0 : P.call(this, h);
    A && (h = A);
  }
  h.forEach((T, A) => {
    m[T.id] = T, T.index = A, T.top = T.index * l;
  });
  const { header: p, footer: g } = t, _ = p ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let y = t.height, w = 0;
  const C = h.length * l, $ = _ + v + C;
  if (typeof y == "function" && (y = y.call(this, $)), y === "auto")
    w = $;
  else if (typeof y == "object")
    w = Math.min(y.max, Math.max(y.min, $));
  else if (y === "100%") {
    const { parent: T } = this;
    if (T)
      w = T.clientHeight;
    else {
      w = 0, q(this, fe, !0);
      return;
    }
  } else
    w = y;
  const b = w - _ - v, E = {
    options: t,
    allRows: c,
    width: i,
    height: w,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: b,
    rowsHeightTotal: C,
    header: p,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: o
  }, I = (D = t.onLayout) == null ? void 0 : D.call(this, E);
  I && Object.assign(E, I), s.forEach((T) => {
    if (T.onLayout) {
      const A = T.onLayout.call(this, E);
      A && Object.assign(E, A);
    }
  }), q(this, Nt, E);
};
Ai = /* @__PURE__ */ new WeakSet();
vl = function() {
  (lt(this, So, _l).call(this) || !S(this, Nt)) && lt(this, Eo, yl).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = s, l = Math.min(Math.max(0, i - o), this.state.scrollTop), c = Math.floor(l / a), d = l + o, h = Math.min(r.length, Math.ceil(d / a)), m = [], { rowDataGetter: p } = this.options;
  for (let g = c; g < h; g++) {
    const _ = r[g];
    _.lazy && p && (_.data = p([_.id])[0], _.lazy = !1), m.push(_);
  }
  return Object.assign(s, {
    visibleRows: m,
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
To.addPlugin = ll;
To.removePlugin = cl;
class wl extends O {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: o, width: r, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: k("progress", l), style: {
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
wl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function bl(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...o } = s, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ f("a", { href: X(i, t.row.data), ...n, ...o, ...a, children: e });
}
function Mo(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : X(s, e);
}
function Cl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), tt(e, s, n ?? e))) : n ?? e;
}
function kl(s, t) {
  const { link: e } = t.col.setting, n = bl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function xl(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Mo(e, t, s[0])), s;
}
function $l(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function Sl(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = Cl(n, t, s[0], i), s;
}
function Di(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], o = n === !0 ? i : Mo(n, t, i);
  return s[0] = {
    html: o
  }, s;
}
const wd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Di(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: o = 6, barWidth: r = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          wl,
          {
            className: "rounded-full",
            width: r,
            height: o,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          mo,
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
    if (e && (s = Sl(s, t, e)), s = $l(s, t), s = xl(s, t), n ? s = Di(s, t) : s = kl(s, t), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = X(i, t.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, bd = Ft(wd, { buildIn: !0 }), Cd = {
  html: { component: _s }
}, kd = {
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
        component: _s,
        props: { html: X(r, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Cd[l], o == null ? void 0 : o[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && u.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), s;
  }
}, xd = Ft(kd);
function $d(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (c, d) => {
    const h = o ? o.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !El.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Sd(s) {
  return this.state.checkedRows[s] ?? !1;
}
function El() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (e.call(this, r.id) ? 1 : 0), 0)) : t === s;
}
function Ed() {
  return Object.keys(this.state.checkedRows);
}
function Td(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function hr(s, t, e = !1) {
  return /* @__PURE__ */ f(xn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const dr = 'input[type="checkbox"],.dtable-checkbox', Md = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: hr
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
    toggleCheckRows: $d,
    isRowChecked: Sd,
    isAllRowChecked: El,
    getChecks: Ed,
    toggleCheckable: Td
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: hr(s) })
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
    const e = t.closest(dr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(dr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Nd = Ft(Md);
var Tl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Tl || {});
function dn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = dn.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? dn.call(this, t.parent).level + 1 : 0, t;
}
function Id(s) {
  return s !== void 0 ? dn.call(this, s) : this.data.nestedMap;
}
function Ad(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Ml.call(this)), t) {
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
function Ml() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Nl(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const o of e) {
    const r = s.get(o);
    r && (r.level === n && (r.order = t++), (i = r.children) != null && i.length && (t = Nl(s, t, r.children, n + 1)));
  }
  return t;
}
function Il(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    n[o] = e, Il(s, o, e, n);
  }), i;
}
function Al(s, t, e, n, i) {
  var a;
  const o = s.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), o.parent && Al(s, o.parent, e, n, i);
}
const Dd = {
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
        const r = Il(this, i, o, n);
        r != null && r.parent && Al(this, r.parent, o, n, e);
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
    getNestedInfo: Id,
    toggleRow: Ad,
    isAllCollapsed: Ml,
    getNestedRowInfo: dn
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
    ), Nl(this.data.nestedMap), s.sort((t, e) => {
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
}, Pd = Ft(Dd);
function Kn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: k(o, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[r] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(Qi, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
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
const Ld = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Kn
    },
    avatarBtn: {
      onRenderCell: Kn
    },
    avatarName: {
      onRenderCell: Kn
    }
  }
}, Rd = Ft(Ld, { buildIn: !0 }), Wd = {
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
}, Od = Ft(Wd, { buildIn: !0 }), Xn = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Hd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Xn(t.left.list), Xn(t.center.list), Xn(t.right.list);
  }
}, Bd = Ft(Hd), Fd = {
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
      l.forEach((m, p) => {
        const { index: g } = m, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const v = t.call(this, { row: c, col: m });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - p), w = Math.min(v.rowSpan || 1, i.length - d);
        if (y <= 1 && w <= 1)
          return;
        let C = 0;
        for (let $ = 0; $ < y; $++) {
          C += l[p + $].realWidth;
          for (let b = 0; b < w; b++) {
            const E = `C${g + $}R${h + b}`;
            E !== _ && n.add(E);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: w,
          width: C,
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
}, zd = Ft(Fd), Vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Tl,
  avatar: Rd,
  cellspan: zd,
  checkable: Nd,
  custom: xd,
  group: Bd,
  nested: Pd,
  renderDatetime: Cl,
  renderDatetimeCell: Sl,
  renderFormat: Mo,
  renderFormatCell: xl,
  renderHtmlCell: Di,
  renderLink: bl,
  renderLinkCell: kl,
  renderMapCell: $l,
  rich: bd,
  sortType: Od
}, Symbol.toStringTag, { value: "Module" }));
class ks extends B {
}
ks.NAME = "DTable";
ks.Component = To;
ks.definePlugin = Ft;
ks.removePlugin = cl;
ks.plugins = Vd;
var Dl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ur = (s, t, e) => (Dl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ud = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, fr = (s, t, e, n) => (Dl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), xe;
const jd = "nav", js = '[data-toggle="tab"]', qd = "active";
class Pl extends at {
  constructor() {
    super(...arguments), Ud(this, xe, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(js);
    let i = t ? u(t).closest(js) : n.filter(`.${qd}`);
    if (!i.length && (i = e.find(js).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = i.data("name") || o, a = u(o);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [r]), this.emit("show", r), ur(this, xe) && clearTimeout(ur(this, xe)), fr(this, xe, setTimeout(() => {
      a.addClass("in").trigger("shown", [r]), this.emit("shown", r), fr(this, xe, 0);
    }, 10)));
  }
}
xe = /* @__PURE__ */ new WeakMap();
Pl.NAME = "Tabs";
u(document).on("click.tabs.zui", js, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${jd}`);
  e.length && Pl.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  ta as ActionMenu,
  sa as ActionMenuNested,
  Pr as Ajax,
  Ta as Avatar,
  Ma as BtnGroup,
  Da as ColorPicker,
  at as Component,
  B as ComponentFromReact,
  xo as ContextMenu,
  ht as CustomContent,
  Zi as CustomRender,
  ks as DTable,
  al as Dashboard,
  za as DatePicker,
  Ua as DatetimePicker,
  go as Draggable,
  bt as Dropdown,
  $a as EventBus,
  Ct as HElement,
  _s as HtmlContent,
  z as Icon,
  na as List,
  oa as Menu,
  au as Messager,
  td as Modal,
  _e as ModalBase,
  Ci as ModalTrigger,
  xa as Moveable,
  Ya as Nav,
  ia as NestedList,
  Ka as Pager,
  Xa as Pick,
  tl as Picker,
  ct as Popover,
  no as PopoverPanel,
  el as Popovers,
  ka as ProgressCircle,
  O as ReactComponent,
  sl as SearchBox,
  ra as SearchMenu,
  cu as Sortable,
  ns as TIME_DAY,
  Pl as Tabs,
  Fa as TimePicker,
  nl as Toolbar,
  Dt as Tooltip,
  il as Tree,
  ko as Upload,
  ol as UploadImgs,
  zh as addDate,
  u as cash,
  k as classes,
  Ve as componentsMap,
  Sc as convertBytes,
  Ac as create,
  j as createDate,
  Uc as createPortal,
  U as createRef,
  xc as deepGet,
  kc as deepGetPath,
  Yd as defineFn,
  Ks as delay,
  Dc as disableScroll,
  Kd as dom,
  Lr as fetchData,
  $c as formatBytes,
  tt as formatDate,
  gu as formatDateSpan,
  X as formatString,
  Rr as getClassList,
  Xs as getComponent,
  Z as h,
  Xd as hh,
  Hc as htm,
  K as i18n,
  bs as isSameDay,
  Pa as isSameMonth,
  uu as isSameWeek,
  li as isSameYear,
  fu as isToday,
  mu as isTomorrow,
  Q as isValidElement,
  pu as isYesterday,
  er as nativeEvents,
  Qs as render,
  Xr as renderCustomContent,
  Fc as renderCustomResult,
  Ic as shareData,
  je as store,
  Wr as storeData,
  Or as takeData
};
//# sourceMappingURL=zui.js.map
