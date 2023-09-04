var Dn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var N = (s, t, e) => (Dn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), R = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, W = (s, t, e, n) => (Dn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Bt = (s, t, e) => (Dn(s, t, "access private method"), e);
const Pt = document, Vs = window, fo = Pt.documentElement, me = Pt.createElement.bind(Pt), po = me("div"), Pn = me("table"), Ol = me("tbody"), Mr = me("tr"), { isArray: gn, prototype: mo } = Array, { concat: Hl, filter: Ai, indexOf: go, map: yo, push: Bl, slice: _o, some: Di, splice: Fl } = mo, zl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Vl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ul = /<.+>/, jl = /^\w+$/;
function Pi(s, t) {
  const e = ql(t);
  return !s || !e && !he(t) && !Y(t) ? [] : !e && Vl.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && jl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class yn {
  constructor(t, e) {
    if (!t)
      return;
    if (Kn(t))
      return t;
    let n = t;
    if (et(t)) {
      const i = e || Pt;
      if (n = zl.test(t) && he(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ul.test(t) ? bo(t) : Kn(i) ? i.find(t) : et(i) ? u(i).find(t) : Pi(t, i), !n)
        return;
    } else if (ge(t))
      return this.ready(t);
    (n.nodeType || n === Vs) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new yn(t, e);
  }
}
const x = yn.prototype, u = x.init;
u.fn = u.prototype = x;
x.length = 0;
x.splice = Fl;
typeof Symbol == "function" && (x[Symbol.iterator] = mo[Symbol.iterator]);
function Kn(s) {
  return s instanceof yn;
}
function Ne(s) {
  return !!s && s === s.window;
}
function he(s) {
  return !!s && s.nodeType === 9;
}
function ql(s) {
  return !!s && s.nodeType === 11;
}
function Y(s) {
  return !!s && s.nodeType === 1;
}
function Yl(s) {
  return !!s && s.nodeType === 3;
}
function Gl(s) {
  return typeof s == "boolean";
}
function ge(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function ot(s) {
  return s === void 0;
}
function Ze(s) {
  return s === null;
}
function vo(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Ri(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Ne;
u.isFunction = ge;
u.isArray = gn;
u.isNumeric = vo;
u.isPlainObject = Ri;
function G(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Ri(s)) {
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
u.each = G;
x.each = function(s) {
  return G(this, s);
};
x.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Us(...s) {
  const t = Gl(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Us(t, u, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (gn(r[o]) || Ri(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Us(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = Us;
x.extend = function(s) {
  return Us(x, s);
};
const Kl = /\S+/g;
function _n(s) {
  return et(s) ? s.match(Kl) || [] : [];
}
x.toggleClass = function(s, t) {
  const e = _n(s), n = !ot(t);
  return this.each((i, r) => {
    Y(r) && G(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(s) {
  return this.toggleClass(s, !0);
};
x.removeAttr = function(s) {
  const t = _n(s);
  return this.each((e, n) => {
    Y(n) && G(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Xl(s, t) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return Ze(e) ? void 0 : e;
      }
      return ot(t) ? this : Ze(t) ? this.removeAttr(s) : this.each((e, n) => {
        Y(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
x.attr = Xl;
x.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
x.hasClass = function(s) {
  return !!s && Di.call(this, (t) => Y(t) && t.classList.contains(s));
};
x.get = function(s) {
  return ot(s) ? _o.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
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
function Zl(s) {
  return ot(s) ? this.get().map((t) => Y(t) || Yl(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Y(e) && (e.textContent = s);
  });
}
x.text = Zl;
function Rt(s, t, e) {
  if (!Y(s))
    return;
  const n = Vs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function wt(s, t) {
  return parseInt(Rt(s, t), 10) || 0;
}
function Nr(s, t) {
  return wt(s, `border${t ? "Left" : "Top"}Width`) + wt(s, `padding${t ? "Left" : "Top"}`) + wt(s, `padding${t ? "Right" : "Bottom"}`) + wt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const Rn = {};
function Jl(s) {
  if (Rn[s])
    return Rn[s];
  const t = me(s);
  Pt.body.insertBefore(t, null);
  const e = Rt(t, "display");
  return Pt.body.removeChild(t), Rn[s] = e !== "none" ? e : "block";
}
function Ir(s) {
  return Rt(s, "display") === "none";
}
function wo(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function vn(s) {
  return et(s) ? (t, e) => wo(e, s) : ge(s) ? s : Kn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
x.filter = function(s) {
  const t = vn(s);
  return u(Ai.call(this, (e, n) => t.call(e, n, e)));
};
function Xt(s, t) {
  return t ? s.filter(t) : s;
}
x.detach = function(s) {
  return Xt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Ql = /^\s*<(\w+)[^>]*>/, tc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ar = {
  "*": po,
  tr: Ol,
  td: Mr,
  th: Mr,
  thead: Pn,
  tbody: Pn,
  tfoot: Pn
};
function bo(s) {
  if (!et(s))
    return [];
  if (tc.test(s))
    return [me(RegExp.$1)];
  const t = Ql.test(s) && RegExp.$1, e = Ar[t] || Ar["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = bo;
x.has = function(s) {
  const t = et(s) ? (e, n) => Pi(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
x.not = function(s) {
  const t = vn(s);
  return this.filter((e, n) => (!et(s) || Y(n)) && !t.call(n, e, n));
};
function Wt(s, t, e, n) {
  const i = [], r = ge(t), o = n && vn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Bl.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Co(s) {
  return s.multiple && s.options ? Wt(Ai.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function ec(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || No.test(e.type)) {
      const i = gn(s) ? yo.call(s, String) : Ze(s) ? [] : [String(s)];
      n ? G(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ot(s) || Ze(s) ? "" : s;
  }) : this[0] && Co(this[0]);
}
x.val = ec;
x.is = function(s) {
  const t = vn(s);
  return Di.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function kt(s) {
  return s.length > 1 ? Ai.call(s, (t, e, n) => go.call(n, t) === e) : s;
}
u.unique = kt;
x.add = function(s, t) {
  return u(kt(this.get().concat(u(s, t).get())));
};
x.children = function(s) {
  return Xt(u(kt(Wt(this, (t) => t.children))), s);
};
x.parent = function(s) {
  return Xt(u(kt(Wt(this, "parentNode"))), s);
};
x.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return go.call(e, t);
};
x.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
x.siblings = function(s) {
  return Xt(u(kt(Wt(this, (t) => u(t).parent().children().not(t)))), s);
};
x.find = function(s) {
  return u(kt(Wt(this, (t) => Pi(s, t))));
};
const sc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, nc = /^$|^module$|\/(java|ecma)script/i, ic = ["type", "src", "nonce", "noModule"];
function rc(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (nc.test(i.type) && fo.contains(i)) {
      const r = me("script");
      r.text = i.textContent.replace(sc, ""), G(ic, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function oc(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && rc(t, s.ownerDocument);
}
function Zt(s, t, e, n, i, r, o, a) {
  return G(s, (l, c) => {
    G(u(c), (d, h) => {
      G(u(t), (p, m) => {
        const g = e ? h : m, y = e ? m : h, v = e ? d : p;
        oc(g, v ? y.cloneNode(!0) : y, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return Zt(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return Zt(arguments, this, !1, !1, !0);
};
function ac(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ot(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    Y(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
x.html = ac;
x.appendTo = function(s) {
  return Zt(arguments, this, !0, !1, !0);
};
x.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
x.before = function() {
  return Zt(arguments, this, !1, !0);
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
  return Zt(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(s) {
  return Zt(arguments, this, !0, !0);
};
x.prepend = function() {
  return Zt(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(s) {
  return Zt(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return u(kt(Wt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
x.next = function(s, t, e) {
  return Xt(u(kt(Wt(this, "nextElementSibling", t, e))), s);
};
x.nextAll = function(s) {
  return this.next(s, !0);
};
x.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
x.parents = function(s, t) {
  return Xt(u(kt(Wt(this, "parentElement", !0, t))), s);
};
x.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
x.prev = function(s, t, e) {
  return Xt(u(kt(Wt(this, "previousElementSibling", t, e))), s);
};
x.prevAll = function(s) {
  return this.prev(s, !0);
};
x.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
x.map = function(s) {
  return u(Hl.apply([], yo.call(this, (t, e) => s.call(t, e, t))));
};
x.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Rt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || fo;
  });
};
x.slice = function(s, t) {
  return u(_o.call(this, s, t));
};
const lc = /-([a-z])/g;
function Li(s) {
  return s.replace(lc, (t, e) => e.toUpperCase());
}
x.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Pt.readyState !== "loading" ? t() : Pt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + Vs.pageYOffset,
    left: t.left + Vs.pageXOffset
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
    if (i !== s && Y(i)) {
      const r = u(i).offset();
      e.top -= r.top + wt(i, "borderTopWidth"), e.left -= r.left + wt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - wt(s, "marginTop"),
    left: e.left - wt(s, "marginLeft")
  };
};
const ko = {
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
      return s = ko[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
x.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[ko[s] || s];
  });
};
const cc = /^--/;
function Wi(s) {
  return cc.test(s);
}
const Ln = {}, { style: hc } = po, dc = ["webkit", "moz", "ms"];
function uc(s, t = Wi(s)) {
  if (t)
    return s;
  if (!Ln[s]) {
    const e = Li(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${dc.join(`${n} `)}${n}`.split(" ");
    G(i, (r, o) => {
      if (o in hc)
        return Ln[s] = o, !1;
    });
  }
  return Ln[s];
}
const fc = {
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
function xo(s, t, e = Wi(s)) {
  return !e && !fc[s] && vo(t) ? `${t}px` : t;
}
function pc(s, t) {
  if (et(s)) {
    const e = Wi(s);
    return s = uc(s, e), arguments.length < 2 ? this[0] && Rt(this[0], s, e) : s ? (t = xo(s, t, e), this.each((n, i) => {
      Y(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
x.css = pc;
function $o(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const mc = /^\s+|\s+$/;
function Dr(s, t) {
  const e = s.dataset[t] || s.dataset[Li(t)];
  return mc.test(e) ? e : $o(JSON.parse, e);
}
function gc(s, t, e) {
  e = $o(JSON.stringify, e), s.dataset[Li(t)] = e;
}
function yc(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Dr(this[0], n);
    return e;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && Dr(this[0], s) : ot(t) ? this : this.each((e, n) => {
      gc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
x.data = yc;
function To(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
G([!0, !1], (s, t) => {
  G(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    x[i] = function(r) {
      if (this[0])
        return Ne(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : he(this[0]) ? To(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? wt(this[0], `margin${e ? "Top" : "Left"}`) + wt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
G(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  x[e] = function(n) {
    if (!this[0])
      return ot(n) ? void 0 : this;
    if (!arguments.length)
      return Ne(this[0]) ? this[0].document.documentElement[`client${t}`] : he(this[0]) ? To(this[0], t) : this[0].getBoundingClientRect()[e] - Nr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = Rt(o, "boxSizing");
      o.style[e] = xo(e, i + (a === "border-box" ? Nr(o, !s) : 0));
    });
  };
});
const Pr = "___cd";
x.toggle = function(s) {
  return this.each((t, e) => {
    if (!Y(e))
      return;
    const n = Ir(e);
    (ot(s) ? n : s) ? (e.style.display = e[Pr] || "", Ir(e) && (e.style.display = Jl(e.tagName))) : n || (e[Pr] = Rt(e, "display"), e.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Rr = "___ce", Oi = ".", Hi = { focus: "focusin", blur: "focusout" }, So = { mouseenter: "mouseover", mouseleave: "mouseout" }, _c = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Bi(s) {
  return So[s] || Hi[s] || s;
}
function Fi(s) {
  const t = s.split(Oi);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(s, t) {
  if (et(s)) {
    const [n, i] = Fi(s), r = Bi(n);
    if (!r)
      return this;
    const o = _c.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Pt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Oi), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Hi;
  return this.each((n, i) => {
    e && ge(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Eo(s) {
  return s[Rr] = s[Rr] || {};
}
function vc(s, t, e, n, i) {
  const r = Eo(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function Mo(s, t) {
  return !t || !Di.call(t, (e) => s.indexOf(e) < 0);
}
function js(s, t, e, n, i) {
  const r = Eo(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Mo(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      js(s, t, e, n, i);
}
x.off = function(s, t, e) {
  if (ot(s))
    this.each((n, i) => {
      !Y(i) && !he(i) && !Ne(i) || js(i);
    });
  else if (et(s))
    ge(t) && (e = t, t = ""), G(_n(s), (n, i) => {
      const [r, o] = Fi(i), a = Bi(r);
      this.each((l, c) => {
        !Y(c) && !he(c) && !Ne(c) || js(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
x.remove = function(s) {
  return Xt(this, s).detach().off(), this;
};
x.replaceWith = function(s) {
  return this.before(s).remove();
};
x.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function wc(s, t, e, n, i) {
  if (!et(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return et(t) || (ot(t) || Ze(t) ? t = "" : ot(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ge(n) || (n = e, e = void 0), n ? (G(_n(s), (r, o) => {
    const [a, l] = Fi(o), c = Bi(a), d = a in So, h = a in Hi;
    c && this.each((p, m) => {
      if (!Y(m) && !he(m) && !Ne(m))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Mo(l, y.namespace.split(Oi)) || !t && (h && (y.target !== m || y.___ot === c) || d && y.relatedTarget && m.contains(y.relatedTarget)))
          return;
        let v = m;
        if (t) {
          let w = y.target;
          for (; !wo(w, t); )
            if (w === m || (w = w.parentNode, !w))
              return;
          v = w;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const _ = n.call(v, y, y.___td);
        i && js(m, c, l, t, g), _ === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = n.guid = n.guid || u.guid++, vc(m, c, l, t, g);
    });
  }), this) : this;
}
x.on = wc;
function bc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
x.one = bc;
const Cc = /\r?\n/g;
function kc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(Cc, `\r
`))}`;
}
const xc = /file|reset|submit|button|image/i, No = /radio|checkbox/i;
x.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    G(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || xc.test(i.type) || No.test(i.type) && !i.checked)
        return;
      const r = Co(i);
      if (!ot(r)) {
        const o = gn(r) ? r : [r];
        G(o, (a, l) => {
          s += kc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function $c(s, t) {
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
function Tc(s, t, e) {
  try {
    const n = $c(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function Q(s, ...t) {
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
var zi = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(zi || {});
function Sc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / zi[e]).toFixed(t) + e);
}
const Ec = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * zi[n];
};
let Vi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Vt;
function Mc() {
  return Vi;
}
function Nc(s) {
  Vi = s.toLowerCase();
}
function Io(s, t) {
  Vt || (Vt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, Vt, s);
}
function K(s, t, e, n, i, r) {
  Array.isArray(s) ? Vt && s.unshift(Vt) : s = Vt ? [Vt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || Vi;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === Vt ? `${r}.${t}` : t;
    if (a = Tc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? Q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Ic(s, t, e, n) {
  return K(void 0, s, t, e, n);
}
K.addLang = Io;
K.getLang = Ic;
K.getCode = Mc;
K.setCode = Nc;
Io({
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
function Lr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Ao(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Ao(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Ac(s, t) {
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
class Do {
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
      dataFilter: d,
      beforeSend: h,
      success: p,
      error: m,
      complete: g,
      ...y
    } = this.setting;
    if ((h == null ? void 0 : h(y)) === !1)
      return;
    e && (y.method = e);
    let v = n;
    v && (i && (u.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((w, [k, $]) => (Ao(w, k, $), w), new FormData()))), y.body = v), o && (y.mode = "cors");
    const _ = y.headers || {};
    Lr(_, "X-Requested-With", "XMLHttpRequest"), r && Lr(_, "Content-Type", r), y.headers = _, y.signal && y.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), m && this.fail(m), g && this.complete(g), y.signal = this._controller.signal, this.url = t, this.request = y;
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
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: r } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let o, a, l;
    try {
      o = await fetch(this.url, this.request), this.response = o;
      const { statusText: c } = o;
      if (o.ok) {
        const d = e || Ac(o.headers.get("Content-Type"), n);
        d === "blob" || d === "file" ? l = await o.blob() : d === "json" ? l = await o.json() : l = await o.text(), this.data = l;
        const h = (i == null ? void 0 : i(l, d)) ?? l;
        this._emit("success", h, c, o);
      } else
        throw new Error(c);
    } catch (c) {
      a = c;
      let d = !1;
      a.name === "AbortError" && (this._abortError ? a = this._abortError : d = !0), this.error = a, d || this._emit("error", a, o == null ? void 0 : o.statusText, a.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", o, o == null ? void 0 : o.statusText), a && r)
      throw a;
    return [l, a, o];
  }
}
u.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : u.extend(t, s);
  const e = new Do(t);
  return e.send(), e;
};
u.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, u.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
u.post = (s, t, e, n) => u.get(s, t, e, n, "POST");
u.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return u.get(n, t, (r, o, a) => {
    i && (r = u(r).find(i).html()), u(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function Po(s, t = [], e) {
  const n = { throws: !0 };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    u.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    if (o instanceof Promise)
      return await o;
    u.extend(n, o);
  }
  e && u.extend(n, typeof e == "function" ? e(n) : e);
  const i = new Do(n), [r] = await i.send();
  return r;
}
u.fetch = Po;
function Ro(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ro(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const C = (...s) => Ro(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = C;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", C(i.attr("class"), ...t)) : i.addClass(C(s, ...t));
  });
};
const He = /* @__PURE__ */ new WeakMap();
function Lo(s, t, e) {
  const n = He.has(s), i = n ? He.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), He.set(s, i)) : He.delete(s);
}
function Wo(s, t, e) {
  let n = He.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Wo(this[0], t) : this.each((n, i) => Lo(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => Lo(e, s));
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
}), Dc = {};
u.share = Dc;
const Be = /* @__PURE__ */ new Map();
function Ys(s) {
  const { zui: t } = window;
  return (!Be.size || s && !Be.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Be.set(e.toLowerCase(), n);
  }), s ? Be.get(s.toLowerCase()) : void 0;
}
function Pc(s, t, e) {
  const n = Ys(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function Jd(s) {
  if (s) {
    const t = Ys(s);
    t && t.defineFn();
  } else
    Ys(), Be.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => Pc(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Wo(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = Ys(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function Rc(s, t = !0) {
  const e = u(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    const r = n === document.body ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
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
u.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    Rc(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Ui(s, t) {
  const e = u(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: v, clientWidth: _ } = document.documentElement;
    n = { left: 0, top: 0, width: y || _, height: g || v };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const p = i <= d && i + o >= l;
  return r <= h && r + a >= c && p;
}
u.fn.isVisible = function(s) {
  return Ui(this, s);
};
function ji(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${u.guid++}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    ji(n, r.innerHTML), r.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    ji(e, s);
  });
};
function Oo(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (Ui(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Oo(e, s);
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
    let r = typeof s == "string" ? { src: s } : u.extend({}, s);
    typeof t == "function" ? r.success = t : t && u.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[o];
    a && (r = u.extend({}, a, r), o = a.src || r.src);
    const { root: l = u.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, p = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      p();
      return;
    }
    const { id: m } = r, g = u(m ? `#${m}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        p();
      else {
        const b = g.data("loadCalls") || [];
        b.push(p), g.data("loadCalls", b);
      }
      return;
    }
    const { async: y = !0, defer: v = !1, noModule: _ = !1, type: w, integrity: k } = r, $ = document.createElement("script");
    $.async = y, $.defer = v, $.noModule = _, w && ($.type = w), k && ($.integrity = k), $.onload = () => {
      p(), (u($).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), u($).removeData("loadCalls");
    }, $.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, $.src = o, u("head").append($);
  });
};
u.getScript = u.getLib;
const Qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Ui,
  runJS: ji,
  scrollIntoView: Oo
}, Symbol.toStringTag, { value: "Module" }));
var wn, H, Ho, J, se, Wr, Bo, Xn, Ce = {}, Fo = [], Lc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qi = Array.isArray;
function Yt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function zo(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function X(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? wn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return Ts(s, o, n, i, null);
}
function Ts(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ho };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function U() {
  return { current: null };
}
function De(s) {
  return s.children;
}
function O(s, t) {
  this.props = s, this.context = t;
}
function Je(s, t) {
  if (t == null)
    return s.__ ? Je(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? Je(s) : null;
}
function Vo(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Vo(s);
  }
}
function Or(s) {
  (!s.__d && (s.__d = !0) && se.push(s) && !Gs.__r++ || Wr !== H.debounceRendering) && ((Wr = H.debounceRendering) || Bo)(Gs);
}
function Gs() {
  var s, t, e, n, i, r, o, a, l;
  for (se.sort(Xn); s = se.shift(); )
    s.__d && (t = se.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = Yt({}, o)).__v = o.__v + 1, Yi(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? Je(o), o.__h, i), Yo(n, o, i), o.__e != a && Vo(o)), se.length > t && se.sort(Xn));
  Gs.__r = 0;
}
function Uo(s, t, e, n, i, r, o, a, l, c, d) {
  var h, p, m, g, y, v, _, w, k, $ = 0, b = n && n.__k || Fo, S = b.length, I = S, P = t.length;
  for (e.__k = [], h = 0; h < P; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Ts(null, g, null, null, g) : qi(g) ? Ts(De, { children: g }, null, null, null) : g.__b > 0 ? Ts(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (w = Wc(g, b, _ = h + $, I)) === -1 ? m = Ce : (m = b[w] || Ce, b[w] = void 0, I--), Yi(s, g, m, i, r, o, a, l, c, d), y = g.__e, (p = g.ref) && m.ref != p && (m.ref && Gi(m.ref, null, g), d.push(p, g.__c || y, g)), y != null && (v == null && (v = y), (k = m === Ce || m.__v === null) ? w == -1 && $-- : w !== _ && (w === _ + 1 ? $++ : w > _ ? I > P - _ ? $ += w - _ : $-- : $ = w < _ && w == _ - 1 ? w - _ : 0), _ = h + $, typeof g.type != "function" || w === _ && m.__k !== g.__k ? typeof g.type == "function" || w === _ && !k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = y.nextSibling : l = qo(s, y, l) : l = jo(g, l, s), typeof e.type == "function" && (e.__d = l))) : (m = b[h]) && m.key == null && m.__e && (m.__e == l && (l = Je(m)), Zn(m, m, !1), b[h] = null);
  for (e.__e = v, h = S; h--; )
    b[h] != null && (typeof e.type == "function" && b[h].__e != null && b[h].__e == e.__d && (e.__d = b[h].__e.nextSibling), Zn(b[h], b[h]));
}
function jo(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? jo(n, t, e) : qo(e, n.__e, t));
  return t;
}
function qo(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function Wc(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
    return e;
  if (n > (l != null ? 1 : 0))
    for (; o >= 0 || a < t.length; ) {
      if (o >= 0) {
        if ((l = t[o]) && i == l.key && r === l.type)
          return o;
        o--;
      }
      if (a < t.length) {
        if ((l = t[a]) && i == l.key && r === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Oc(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Ks(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Ks(s, r, t[r], e[r], n);
}
function Hr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Lc.test(t) ? e : e + "px";
}
function Ks(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Hr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Hr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? Fr : Br, r) : s.removeEventListener(t, r ? Fr : Br, r);
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
function Br(s) {
  return this.l[s.type + !1](H.event ? H.event(s) : s);
}
function Fr(s) {
  return this.l[s.type + !0](H.event ? H.event(s) : s);
}
function Yi(s, t, e, n, i, r, o, a, l, c) {
  var d, h, p, m, g, y, v, _, w, k, $, b, S, I, P, D = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = H.__b) && d(t);
  t:
    if (typeof D == "function")
      try {
        if (_ = t.props, w = (d = D.contextType) && n[d.__c], k = d ? w ? w.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in D && D.prototype.render ? t.__c = h = new D(_, k) : (t.__c = h = new O(_, k), h.constructor = D, h.render = Bc), w && w.sub(h), h.props = _, h.state || (h.state = {}), h.context = k, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), D.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Yt({}, h.__s)), Yt(h.__s, D.getDerivedStateFromProps(_, h.__s))), m = h.props, g = h.state, h.__v = t, p)
          D.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && _ !== m && h.componentWillReceiveProps != null && h.componentWillReceiveProps(_, k), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(_, h.__s, k) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = _, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), $ = 0; $ < h._sb.length; $++)
              h.__h.push(h._sb[$]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(_, h.__s, k), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(m, g, y);
          });
        }
        if (h.context = k, h.props = _, h.__P = s, h.__e = !1, b = H.__r, S = 0, "prototype" in D && D.prototype.render) {
          for (h.state = h.__s, h.__d = !1, b && b(t), d = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++)
            h.__h.push(h._sb[I]);
          h._sb = [];
        } else
          do
            h.__d = !1, b && b(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++S < 25);
        h.state = h.__s, h.getChildContext != null && (n = Yt(Yt({}, n), h.getChildContext())), p || h.getSnapshotBeforeUpdate == null || (y = h.getSnapshotBeforeUpdate(m, g)), Uo(s, qi(P = d != null && d.type === De && d.key == null ? d.props.children : d) ? P : [P], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (E) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), H.__e(E, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Hc(e.__e, t, e, n, i, r, o, l, c);
  (d = H.diffed) && d(t);
}
function Yo(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Gi(e[n], e[++n], e[++n]);
  H.__c && H.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      H.__e(r, i.__v);
    }
  });
}
function Hc(s, t, e, n, i, r, o, a, l) {
  var c, d, h, p = e.props, m = t.props, g = t.type, y = 0;
  if (g === "svg" && (i = !0), r != null) {
    for (; y < r.length; y++)
      if ((c = r[y]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        s = c, r[y] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(m);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), r = null, a = !1;
  }
  if (g === null)
    p === m || a && s.data === m || (s.data = m);
  else {
    if (r = r && wn.call(s.childNodes), d = (p = e.props || Ce).dangerouslySetInnerHTML, h = m.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (p = {}, y = 0; y < s.attributes.length; y++)
          p[s.attributes[y].name] = s.attributes[y].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Oc(s, m, p, i, a), h)
      t.__k = [];
    else if (Uo(s, qi(y = t.props.children) ? y : [y], t, e, n, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && Je(e, 0), a, l), r != null)
      for (y = r.length; y--; )
        r[y] != null && zo(r[y]);
    a || ("value" in m && (y = m.value) !== void 0 && (y !== s.value || g === "progress" && !y || g === "option" && y !== p.value) && Ks(s, "value", y, p.value, !1), "checked" in m && (y = m.checked) !== void 0 && y !== s.checked && Ks(s, "checked", y, p.checked, !1));
  }
  return s;
}
function Gi(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    H.__e(n, e);
  }
}
function Zn(s, t, e) {
  var n, i;
  if (H.unmount && H.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Gi(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        H.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Zn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || zo(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Bc(s, t, e) {
  return this.constructor(s, e);
}
function Xs(s, t, e) {
  var n, i, r, o;
  H.__ && H.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Yi(t, s = (!n && e || t).__k = X(De, null, [s]), i || Ce, Ce, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? wn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Yo(r, s, o);
}
wn = Fo.slice, H = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Ho = 0, J = function(s) {
  return s != null && s.constructor === void 0;
}, O.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof s == "function" && (s = s(Yt({}, e), this.props)), s && Yt(e, s), s != null && this.__v && (t && this._sb.push(t), Or(this));
}, O.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Or(this));
}, O.prototype.render = De, se = [], Bo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Gs.__r = 0;
var Go = function(s, t, e, n) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, e[t[r++]]) : t[++r];
    o === 3 ? n[0] = a : o === 4 ? n[1] = Object.assign(n[1] || {}, a) : o === 5 ? (n[1] = n[1] || {})[t[++r]] = a : o === 6 ? n[1][t[++r]] += a + "" : o ? (i = s.apply(a, Go(s, a, e, ["", null])), n.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : n.push(a);
  }
  return n;
}, zr = /* @__PURE__ */ new Map();
function Fc(s) {
  var t = zr.get(this);
  return t || (t = /* @__PURE__ */ new Map(), zr.set(this, t)), (t = Go(this, t.get(s) || (t.set(s, t = function(e) {
    for (var n, i, r = 1, o = "", a = "", l = [0], c = function(p) {
      r === 1 && (p || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, o) : r === 3 && (p || o) ? (l.push(3, p, o), r = 2) : r === 2 && o === "..." && p ? l.push(4, p, 0) : r === 2 && o && !p ? l.push(5, 0, !0, o) : r >= 5 && ((o || !p && r === 5) && (l.push(r, 0, o, i), r = 6), p && (l.push(r, p, 0, i), r = 6)), o = "";
    }, d = 0; d < e.length; d++) {
      d && (r === 1 && c(), c(d));
      for (var h = 0; h < e[d].length; h++)
        n = e[d][h], r === 1 ? n === "<" ? (c(), l = [l], r = 3) : o += n : r === 4 ? o === "--" && n === ">" ? (r = 1, o = "") : o = n + o[0] : a ? n === a ? a = "" : o += n : n === '"' || n === "'" ? a = n : n === ">" ? (c(), r = 1) : r && (n === "=" ? (r = 5, i = o, o = "") : n === "/" && (r < 5 || e[d][h + 1] === ">") ? (c(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (c(), r = 2) : o += n), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return c(), l;
  }(s)), t), arguments, [])).length > 1 ? t : t[0];
}
const tu = Fc.bind(X);
class Dt extends O {
  _getClassName(t) {
    return [t.className, t.class];
  }
  _getProps(t) {
    const { className: e, class: n, attrs: i, data: r, forwardRef: o, children: a, component: l, style: c, ...d } = t, h = Object.keys(d).reduce((p, m) => ((m === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-|zui-)[a-zA-Z-]+/.test(m)) && (p[m] = d[m]), p), {});
    return { ref: o, class: C(this._getClassName(t)), style: c, ...h, ...i };
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
  render(t) {
    return t = this._beforeRender(t) || t, X(this._getComponent(t), this._getProps(t), this._getChildren(t));
  }
}
var zc = 0;
function f(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --zc, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return H.vnode && H.vnode(c), c;
}
class ps extends O {
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
    return /* @__PURE__ */ f(Dt, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Vc(s) {
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
    ...d
  } = s, h = [e], p = { ...n }, m = [], g = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(o, y, m, ...r));
      else {
        const _ = y.call(o, m, ...r);
        _ && (Array.isArray(_) ? v.push(..._) : v.push(_));
      }
    else
      v.push(y);
    v.forEach((_) => {
      _ != null && (typeof _ == "object" && !J(_) && ("html" in _ || "__html" in _ || "className" in _ || "style" in _ || "attrs" in _ || "children" in _) ? _.html ? m.push(
        /* @__PURE__ */ f("div", { className: C(_.className), style: _.style, dangerouslySetInnerHTML: { __html: _.html }, ..._.attrs ?? {} })
      ) : _.__html ? g.push(_.__html) : (_.style && Object.assign(p, _.style), _.className && h.push(_.className), _.children && m.push(_.children), _.attrs && Object.assign(d, _.attrs)) : m.push(_));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: C(h),
    style: p,
    ...d
  }, m];
}
function Ki({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Vc(t);
  return X(s, e, ...n);
}
function Ko(s, t, e) {
  return typeof s == "function" ? s.call(t, ...e || []) : Array.isArray(s) ? s.map((n) => Ko(n, t, e)) : J(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ f(ps, { ...s }) : /* @__PURE__ */ f(Dt, { ...s }) : s;
}
function ht(s) {
  const { content: t, generatorThis: e, generatorArgs: n } = s, i = Ko(t, e, n);
  return i == null || typeof i == "boolean" ? null : J(i) ? i : /* @__PURE__ */ f(De, { children: i });
}
const Vr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function z(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (J(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Vr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Vr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: C(i), ...n });
}
function Uc(s) {
  return this.getChildContext = () => s.context, s.children;
}
function jc(s) {
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
    X(Uc, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function qc(s, t) {
  const e = X(jc, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
function Xo(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Xo(s.parentNode) : !0;
}
class at {
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
    const l = u(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = u.guid++;
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((p) => {
      p.forEach((m) => {
        m.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Xo(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), o) {
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
    return u(t || document).find(`[${n}]`).each((r, o) => {
      if (e) {
        const l = u(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(o).data(this.KEY);
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
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = n.get(d);
          if (h ? o && h.render(o) : h = new n(d, o), a) {
            let p = h[a], m = h;
            p === void 0 && (m = h.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...r) : l = p;
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
    Xs(
      X(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Yc({
  component: s = "div",
  className: t,
  children: e,
  style: n,
  attrs: i
}) {
  return X(s, {
    className: C(t),
    style: n,
    ...i
  }, e);
}
function Zo({
  type: s,
  component: t = "a",
  className: e,
  children: n,
  content: i,
  attrs: r,
  url: o,
  disabled: a,
  active: l,
  icon: c,
  text: d,
  target: h,
  trailingIcon: p,
  hint: m,
  checked: g,
  onClick: y,
  data: v,
  ..._
}) {
  const w = [
    typeof g == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(z, { icon: c }),
    d ? /* @__PURE__ */ f("span", { className: "text", children: d }) : null,
    /* @__PURE__ */ f(ht, { content: i }),
    n,
    /* @__PURE__ */ f(z, { icon: p })
  ];
  return X(t, {
    className: C(e, { disabled: a, active: l }),
    title: m,
    [t === "a" ? "href" : "data-url"]: a ? void 0 : o,
    [t === "a" ? "target" : "data-target"]: a ? void 0 : h,
    onClick: y,
    ..._,
    ...r
  }, ...w);
}
function Gc({
  component: s = "div",
  className: t,
  text: e,
  attrs: n,
  children: i,
  content: r,
  style: o,
  onClick: a
}) {
  return X(s, {
    className: C(t),
    style: o,
    onClick: a,
    ...n
  }, e, /* @__PURE__ */ f(ht, { content: r }), i);
}
function Kc({
  component: s = "div",
  className: t,
  style: e,
  space: n,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return X(s, {
    className: C(t),
    style: { width: n, height: n, flex: i, ...e },
    onClick: o,
    ...r
  }, a);
}
function Xc({ type: s, ...t }) {
  return /* @__PURE__ */ f(Ki, { ...t });
}
function Jo({
  component: s = "div",
  className: t,
  children: e,
  content: n,
  style: i,
  attrs: r
}) {
  return X(s, {
    className: C(t),
    style: i,
    ...r
  }, /* @__PURE__ */ f(ht, { content: n }), e);
}
const bn = class Jn extends O {
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
    const { onClickItem: r } = this.props;
    r && r({ menu: this, item: t, index: e, event: i });
  }
  beforeRender() {
    var n;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this)), t.items || (t.items = []);
    const e = (n = t.beforeRender) == null ? void 0 : n.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, n) {
    const { commonItemProps: i, onClickItem: r, itemRenderProps: o } = t;
    let a = { ...e };
    return i && Object.assign(a, i[e.type || "item"]), (r || e.onClick) && (a.onClick = this.handleItemClick.bind(this, a, n, e.onClick)), a.className = C(a.className), o && (a = o(a)), a;
  }
  renderItem(t, e, n) {
    if (!e)
      return null;
    const i = this.getItemRenderProps(t, e, n), { itemRender: r } = t;
    if (r) {
      if (typeof r == "object") {
        const y = r[e.type || "item"];
        if (y)
          return /* @__PURE__ */ f(y, { ...i });
      } else if (typeof r == "function") {
        const y = r.call(this, i, X);
        if (J(y))
          return y;
        typeof y == "object" && Object.assign(i, y);
      }
    }
    const { type: o = "item", component: a, key: l = n, rootAttrs: c, rootClass: d, rootStyle: h, rootChildren: p, ...m } = i;
    if (o === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: C("action-menu-item", `${this.name}-html`, d, m.className),
          ...c,
          style: h || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || Jn.ItemComponents[o] : a;
    return Object.assign(m, {
      type: o,
      component: typeof a == "string" ? a : void 0
    }), t.checkbox && o === "item" && m.checked === void 0 && (m.checked = !!m.active), this.renderTypedItem(g, {
      className: C(d),
      children: p,
      style: h,
      key: l,
      ...c
    }, {
      ...m,
      type: o,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, e, n) {
    const { children: i, className: r, key: o, ...a } = e;
    return /* @__PURE__ */ f(
      "li",
      {
        className: C(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, r),
        ...a,
        children: [
          /* @__PURE__ */ f(t, { ...n }),
          typeof i == "function" ? i() : i
        ]
      },
      o
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: e,
      style: n,
      commonItemProps: i,
      className: r,
      items: o,
      children: a,
      itemRender: l,
      onClickItem: c,
      beforeRender: d,
      afterRender: h,
      beforeDestroy: p,
      compact: m,
      ...g
    } = t, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(y, { class: C(this.name, r, m ? "compact" : ""), style: n, ...g, ref: this.ref, children: [
      o && o.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
};
bn.ItemComponents = {
  divider: Yc,
  item: Zo,
  heading: Gc,
  space: Kc,
  custom: Xc,
  basic: Jo
};
bn.ROOT_TAG = "menu";
bn.NAME = "action-menu";
let Xi = bn;
class Qo extends B {
}
Qo.NAME = "ActionMenu";
Qo.Component = Xi;
function Zc({
  items: s,
  show: t,
  level: e,
  ...n
}) {
  return /* @__PURE__ */ f(Zo, { ...n });
}
var ta = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ft = (s, t, e) => (ta(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Wn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Jc = (s, t, e, n) => (ta(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ss, xt, Fe;
let Cn = class extends Xi {
  constructor(t) {
    super(t), Wn(this, Ss, /* @__PURE__ */ new Set()), Wn(this, xt, void 0), Wn(this, Fe, (e, n, i) => {
      u(i.target).closest(".not-nested-toggle").length || (this.toggle(e, n), i.preventDefault());
    }), Jc(this, xt, t.nestedShow === void 0), ft(this, xt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: e, nestedTrigger: n, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = C(a.className, "no-nested-items")), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: e, controlledMenu: n, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: c, commonItemProps: d, level: h, itemRenderProps: p } = this.props;
    return {
      items: t,
      name: e,
      nestedShow: ft(this, xt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: n || this,
      commonItemProps: d,
      onClickItem: l,
      afterRender: c,
      beforeRender: o,
      beforeDestroy: r,
      itemRender: a,
      itemRenderProps: p,
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
    const r = i.key ?? i.id ?? `${t.level || 0}:${n}`;
    ft(this, Ss).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(e)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ft(this, Fe).bind(this, r, !0),
        onMouseLeave: ft(this, Fe).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (c) => {
        ft(this, Fe).call(this, r, void 0, c), l == null || l(c);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const e = ft(this, xt) ? this.state.nestedShow : this.props.nestedShow;
    return e && typeof e == "object" ? e[t] : !!e;
  }
  toggle(t, e) {
    const { controlledMenu: n } = this.props;
    if (n)
      return n.toggle(t, e);
    if (!ft(this, xt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ft(this, Ss).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), e === void 0)
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
    ft(this, xt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ft(this, xt) && this.setState({ nestedShow: !1 });
  }
};
Ss = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
Cn.ItemComponents = {
  item: Zc
};
class ea extends B {
}
ea.NAME = "ActionMenuNested";
ea.Component = Cn;
function Qc(s) {
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
function th(s) {
  const [t, e, n] = typeof s == "string" ? Qc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Ur(s, t) {
  return th(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function jr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function eh(s, t, e) {
  s = s % 360 / 360, t = jr(t), e = jr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function sh(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function nh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let Zi = class extends O {
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
      code: d,
      maxTextLength: h = 2,
      src: p,
      hueDistance: m = 43,
      saturation: g = 0.4,
      lightness: y = 0.6,
      children: v,
      ..._
    } = this.props, w = ["avatar", t], k = { ...e, background: o, color: a };
    let $ = 32;
    n && (typeof n == "number" ? (k.width = `${n}px`, k.height = `${n}px`, k.fontSize = `${Math.max(12, Math.round(n / 2))}px`, $ = n) : (w.push(`size-${n}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : r && (typeof r == "number" ? k.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let b;
    if (p)
      w.push("has-img"), b = /* @__PURE__ */ f("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      w.push("has-icon"), b = /* @__PURE__ */ f(z, { icon: l });
    else if (c != null && c.length) {
      const S = nh(c, h);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (k.color = Ur(o));
      else {
        const P = d ?? c, D = (typeof P == "number" ? P : sh(P)) * m % 360;
        if (k.background = `hsl(${D},${g * 100}%,${y * 100}%)`, !a) {
          const E = eh(D, g, y);
          k.color = Ur(E);
        }
      }
      let I;
      $ && $ < 14 * S.length && (I = { transform: `scale(${$ / (14 * S.length)})`, whiteSpace: "nowrap" }), b = /* @__PURE__ */ f("div", { "data-actualSize": $, className: "avatar-text", style: I, children: S });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: C(w),
        style: k,
        ..._,
        children: [
          b,
          v
        ]
      }
    );
  }
};
class Z extends Dt {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(z, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(z, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(z, { icon: l }),
      e ? null : c ? /* @__PURE__ */ f("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: d } = t;
    return C("btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof d == "string" ? d : { rounded: d });
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = {
      ...super._getProps(t),
      disabled: r,
      title: a,
      type: e === "button" ? o : void 0
    };
    return r || (n !== void 0 && (l[e === "a" ? "href" : "data-url"] = n), i !== void 0 && (l[e === "a" ? "target" : "data-target"] = i)), l;
  }
}
class kn extends Dt {
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
      e ? /* @__PURE__ */ f(
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
      /* @__PURE__ */ f("label", { htmlFor: r, children: /* @__PURE__ */ f(ht, { content: o }) }, "label")
    ];
  }
}
class ih extends kn {
}
ih.defaultProps = {
  type: "radio"
};
class rh extends kn {
}
rh.defaultProps = {
  type: "switch"
};
class Zs extends Dt {
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
      leading: r,
      leadingClass: o,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, d = [];
    i && d.push(/* @__PURE__ */ f(ht, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(kn, { className: "list-item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(z, { className: "list-item-icon", icon: e }, "icon")), n && d.push(/* @__PURE__ */ f(Zi, { ...n, className: C("list-item-avatar", n.className) }, "avatar"));
    const h = r ? /* @__PURE__ */ f(ht, { content: r }, "leading") : null;
    return c ? (h && d.push(h), d.length ? [
      /* @__PURE__ */ f("div", { className: C("list-item-leading", o), children: d }, "leading")
    ] : []) : (h && d.push(/* @__PURE__ */ f("div", { className: C("list-item-leading", o), children: h }, "leading")), d);
  }
  _renderContent(t) {
    const {
      multiline: e,
      text: n,
      textClass: i,
      title: r,
      titleClass: o,
      subtitle: a,
      subtitleClass: l,
      url: c,
      actions: d,
      target: h
    } = t, p = c && d, g = [
      r ? /* @__PURE__ */ f(p ? "a" : "div", { className: C("list-item-title", o), href: p ? c : void 0, target: p ? h : void 0, children: r }, "title") : null,
      a ? /* @__PURE__ */ f("div", { className: C("list-item-subtitle", l), children: a }, "subtitle") : null,
      n ? /* @__PURE__ */ f("div", { className: C("list-item-text", i), children: n }, "text") : null
    ];
    return e ? [
      /* @__PURE__ */ f("div", { className: "list-item-content", children: g }, "content")
    ] : g;
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: r,
      actions: o,
      actionsClass: a
    } = t, l = [];
    r && l.push(/* @__PURE__ */ f(z, { className: "list-item-trailing-icon", icon: r }, "trailing-icon")), o != null && o.length && l.push(/* @__PURE__ */ f("div", { className: C("list-item-actions", a), children: o.map((d, h) => /* @__PURE__ */ f(Z, { type: "ghost", size: "sm", ...d }, h)) }, "actions"));
    const c = n ? /* @__PURE__ */ f(ht, { content: n }, "trailing") : null;
    return e ? (c && l.push(c), l.length ? [
      /* @__PURE__ */ f("div", { className: C("list-item-trailing", i), children: [
        l,
        c
      ] }, "trailing")
    ] : []) : (c && l.push(/* @__PURE__ */ f("div", { className: C("list-item-trailing", i), children: c }, "trailing")), l);
  }
  _render(t) {
    const {
      innerComponent: e,
      className: n,
      class: i,
      url: r,
      actions: o,
      target: a,
      active: l,
      disabled: c,
      divider: d,
      checked: h,
      multiline: p,
      hover: m
    } = t, g = e || (r && !o ? "a" : "div"), y = g === "a", v = C(n, i, {
      active: l,
      disabled: c,
      "has-divider": d,
      "has-hover state": m,
      checked: h,
      multiline: p,
      state: y
    });
    return /* @__PURE__ */ f(g, { className: v, href: y ? r : void 0, target: y ? a : void 0, children: [
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
Zs.defaultProps = {};
let Jt = class extends Dt {
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
        const r = await Po(t, [this], { throws: !0 });
        i.items = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
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
  _renderItem(t, e, n) {
    const { itemRender: i } = t;
    if (i)
      return i.call(this, e, n);
    const { type: r = "item" } = e;
    let o = this.constructor.ItemComponents[r] || Zs;
    if (Array.isArray(o)) {
      let a = o[1];
      typeof a == "function" && (a = a.call(this, e)), u.extend(e, a), o = o[0];
    }
    return /* @__PURE__ */ f(o, { "zui-key": e.key, ...e });
  }
  _getItem(t, e, n) {
    var h, p;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, keyName: a = "id" } = t, { type: l = "item" } = e, { name: c, itemName: d } = this;
    return e = u.extend(
      {
        ...this.constructor.defaultItemProps,
        key: e[a] ?? n,
        type: l
      },
      i,
      r[l],
      e,
      {
        rootClass: [d, `${c}-${l}`, i == null ? void 0 : i.rootClass, (h = r[l]) == null ? void 0 : h.rootClass, e.rootClass],
        className: [`${d}-inner`, i == null ? void 0 : i.className, (p = r[l]) == null ? void 0 : p.className, e.className],
        "zui-item": n,
        "zui-type": l
      }
    ), e = o ? o.call(this, e, n) : e, this._keyIndexes[n] = e.key, e;
  }
  _getItemFromEvent(t) {
    var o;
    const e = t.target.closest("[zui-item]");
    if (!e || e.parentElement !== this._ref.current)
      return;
    const n = +e.getAttribute("zui-item"), i = (o = this._items) == null ? void 0 : o[n];
    if (!i)
      return;
    const r = this.getKey(n);
    if (r !== void 0)
      return { index: n, item: i, element: e, event: t, key: r };
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
    return Array.isArray(e) ? this._items = e : this._items = this.state.items || [], this._keyIndexes = [], this._items;
  }
  _getChildren(t) {
    const n = this._getItems(t).map((r, o) => this._renderItem(t, this._getItem(t, r, o), o)), { loadFailed: i } = this.state;
    return i && n.push(i), t.children && n.push(t.children), n;
  }
  _getComponent(t) {
    return t.component || this.constructor.ROOT_TAG;
  }
};
Jt.ItemComponents = {
  item: Zs,
  element: Dt,
  divider: [Dt, (s) => ({ className: [s.className, s.rootClass, "divider"] })],
  heading: Zs,
  space: [Dt, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      className: [s.className, s.rootClass],
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
Jt.NAME = "list";
Jt.ITEM_NAME = "item";
Jt.ROOT_TAG = "ul";
Jt.defaultItemProps = {
  component: "li"
};
const sa = class na extends Jt {
  constructor(t) {
    super(t), this._controlled = t.nestedShow !== void 0, this.state.nestedShow = t.defaultNestedShow ?? {}, this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this);
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
    var i, r;
    if (this._controlled)
      return;
    let { nestedShow: e } = this;
    if (typeof e == "boolean")
      return this.setState({ nestedShow: t ?? !e });
    e = this._getNestedMap();
    const n = (r = (i = this._items) == null ? void 0 : i[0]) == null ? void 0 : r.key;
    t = t ?? (n ? !e[n] : !0), this.setState({ nestedShow: t });
  }
  _getNestedMap() {
    const { nestedShow: t } = this;
    return typeof t == "boolean" ? (this._items || []).reduce((e, n, i) => {
      const { key: r = this.getKey(i) } = n;
      return r !== void 0 && (e[r] = t), e;
    }, {}) : t;
  }
  _getClassName(t) {
    return [super._getClassName(t), "list-nested", t.level ? "list-nested-sub" : "list-nested-root"];
  }
  _renderNestedList(t, e, n) {
    const { children: i, forwardRef: r, data: o, attrs: a, style: l, parentKey: c, nestedTrigger: d, level: h = 0, onHoverItem: p, ...m } = t, g = {
      ...m,
      items: e,
      parentKey: c ? `${c}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: p || d === "hover" ? this._handleHoverNestedItem : void 0,
      ...n.listProps,
      level: h + 1
    };
    return /* @__PURE__ */ f(na, { ...g }, "nested");
  }
  _getItem(t, e, n) {
    const { items: i, ...r } = super._getItem(t, e, n), { normalIcon: o, collapsedIcon: a, expandedIcon: l } = t;
    let c, d;
    if (i) {
      const h = this.isExpanded(r.key, t.parentKey);
      if (d = `state is-${h ? "expanded" : "collapsed"}`, r.className = [r.className, "has-nested-items", `is-nested-${h ? "show" : "hide"}`], h) {
        let { children: p = [] } = r;
        Array.isArray(p) || (p = [p]), p.push(this._renderNestedList(t, i, r)), r.children = p, r["zui-parent"] = t.parentKey, c = l ? /* @__PURE__ */ f(z, { icon: l }) : /* @__PURE__ */ f("span", { className: "caret-down" });
      } else
        c = a ? /* @__PURE__ */ f(z, { icon: a }) : /* @__PURE__ */ f("span", { className: "caret-right" });
    } else
      c = /* @__PURE__ */ f(z, { icon: o }), d = "is-empty";
    return r.toggleIcon = /* @__PURE__ */ f("span", { className: C("list-toggle-icon", d), children: c }), r;
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    return e ? { ...e, parentKey: this.props.parentKey } : void 0;
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, key: r, parentKey: o } = t, { nestedTrigger: a, nestedToggle: l } = this.props;
    if (!e.items || i.defaultPrevented || a === "hover" && n === void 0 || a === "click" && i.type !== "click" || l && !i.target.closest(l) || i.target.closest(".not-nested-toggle"))
      return;
    const c = typeof n == "boolean" ? n : void 0;
    this.toggle(`${o !== void 0 ? `${o}:` : ""}${r}`, c);
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
    const { onHoverItem: e, nestedTrigger: n, style: i, level: r = 0, indent: o = 20 } = t, a = super._getProps(t);
    return (e || n === "hover") && u.extend(a, {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    }), a["zui-level"] = r, a.style = { ...i, "--list-nested-indent": `${r * o}px`, "--list-indent": `${o}px` }, a;
  }
};
sa.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
let oh = sa;
class ia extends B {
}
ia.NAME = "List";
ia.Component = Jt;
class ra extends B {
}
ra.NAME = "NestedList";
ra.Component = oh;
let de = class extends Cn {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: e } = t;
    return e === void 0 && (e = t.items.some((n) => n.icon)), t.className = C(t.className, this.menuName, {
      "has-icons": e,
      "has-nested-items": t.items.some((n) => this.isNestedItem(n)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
de.NAME = "menu";
var Ji = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, yt = (s, t, e) => (Ji(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Qt = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Es = (s, t, e, n) => (Ji(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), qr = (s, t, e) => (Ji(s, t, "access private method"), e), Ms, Ns, oe, Qn, Is, As, Ds, ti;
let Qi = class extends O {
  constructor(t) {
    super(t), Qt(this, Ds), Qt(this, Ms, void 0), Qt(this, Ns, U()), Qt(this, oe, 0), Qt(this, Qn, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Qt(this, Is, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (qr(this, Ds, ti).call(this), Es(this, oe, window.setTimeout(() => {
          r(i, e), Es(this, oe, 0);
        }, this.props.delay || 0)));
      });
    }), Qt(this, As, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Es(this, Ms, t.id || `search-box-${u.guid++}`);
  }
  get id() {
    return yt(this, Ms);
  }
  get input() {
    return yt(this, Ns).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    qr(this, Ds, ti).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: p, clearIcon: m } = t, { focus: g, value: y } = e, { id: v } = this, _ = typeof y != "string" || !y.trim().length;
    let w, k, $;
    return p && ($ = p === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(z, { icon: p })), !h && p && (w = /* @__PURE__ */ f("label", { for: v, class: "input-control-prefix", children: $ }, "prefix")), m && !_ ? k = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: yt(this, Qn),
        children: m === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(z, { icon: m })
      }
    ) : h && p && (k = $), k && (k = /* @__PURE__ */ f("label", { for: v, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ f("div", { class: C("search-box input-control", r, { focus: g, empty: _, "has-prefix-icon": w, "has-suffix-icon": k }), style: o, children: [
      w,
      /* @__PURE__ */ f(
        "input",
        {
          ref: yt(this, Ns),
          id: v,
          type: "text",
          class: C("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: y,
          onInput: yt(this, Is),
          onChange: yt(this, Is),
          onFocus: yt(this, As),
          onBlur: yt(this, As)
        }
      ),
      k
    ] });
  }
};
Ms = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
Qn = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakSet();
ti = function() {
  yt(this, oe) && clearTimeout(yt(this, oe)), Es(this, oe, 0);
};
Qi.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
const ah = (s, t) => {
  const { keys: e = "", text: n } = s;
  return !t.length || t.every((i) => e.toLowerCase().includes(i) || typeof n == "string" && n.toLowerCase().includes(i));
};
let tr = class extends de {
  constructor() {
    super(...arguments), this._searchKeys = [], this._handleSearchChange = (t) => {
      this._searchKeys = u.unique(t.toLowerCase().split(" ").filter((e) => e.length)), this.setState({ search: t });
    };
  }
  renderItem(t, e, n) {
    return ah(e, this._searchKeys) ? super.renderItem(t, e, n) : null;
  }
  beforeRender() {
    const { search: t = !0, searchPlacement: e = "top", ...n } = super.beforeRender();
    if (!t)
      return n;
    n.className = C(n.className, "search-menu", `search-menu-on-${e || "top"}`), n.children = n.children ? Array.isArray(n.children) ? n.children : [n.children] : [];
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof t == "object" && Object.assign(i, t), n.children.push(
      /* @__PURE__ */ f(Qi, { ...i }, "search")
    ), n;
  }
};
class oa extends B {
}
oa.NAME = "Menu";
oa.Component = de;
class aa extends B {
}
aa.NAME = "SearchMenu";
aa.Component = tr;
function lh({
  key: s,
  type: t,
  btnType: e,
  ...n
}) {
  return /* @__PURE__ */ f(Z, { type: e, ...n });
}
let ch = class extends O {
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
      headingClass: d,
      titleClass: h,
      contentClass: p,
      arrowStyle: m,
      onlyInner: g
    } = t;
    let y = /* @__PURE__ */ f(ht, { content: r }, "content");
    (p || i) && (y = /* @__PURE__ */ f("div", { className: p, children: y }, "content"));
    const v = [], _ = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      _
    ] }, "heading")) : v.push(_), v.push(y), c && v.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: C("popover", a, { popup: n }), style: o, children: v });
  }
};
class er extends B {
}
er.NAME = "PopoverPanel";
er.Component = ch;
const Ie = Math.min, ae = Math.max, Js = Math.round, bs = Math.floor, Gt = (s) => ({
  x: s,
  y: s
}), hh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, dh = {
  start: "end",
  end: "start"
};
function ei(s, t, e) {
  return ae(s, Ie(t, e));
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
function la(s) {
  return s === "x" ? "y" : "x";
}
function sr(s) {
  return s === "y" ? "height" : "width";
}
function xn(s) {
  return ["top", "bottom"].includes(ue(s)) ? "y" : "x";
}
function nr(s) {
  return la(xn(s));
}
function uh(s, t, e) {
  e === void 0 && (e = !1);
  const n = gs(s), i = nr(s), r = sr(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Qs(o)), [o, Qs(o)];
}
function fh(s) {
  const t = Qs(s);
  return [si(s), t, si(t)];
}
function si(s) {
  return s.replace(/start|end/g, (t) => dh[t]);
}
function ph(s, t, e) {
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
function mh(s, t, e, n) {
  const i = gs(s);
  let r = ph(ue(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(si)))), r;
}
function Qs(s) {
  return s.replace(/left|right|bottom|top/g, (t) => hh[t]);
}
function gh(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function ca(s) {
  return typeof s != "number" ? gh(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function tn(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function Yr(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = xn(t), o = nr(t), a = sr(o), l = ue(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
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
      m[o] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      m[o] += p * (e && c ? -1 : 1);
      break;
  }
  return m;
}
const yh = async (s, t, e) => {
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
    x: d,
    y: h
  } = Yr(c, n, l), p = n, m = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: v,
      fn: _
    } = a[y], {
      x: w,
      y: k,
      data: $,
      reset: b
    } = await _({
      x: d,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: m,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = w ?? d, h = k ?? h, m = {
      ...m,
      [v]: {
        ...m[v],
        ...$
      }
    }, b && g <= 50) {
      g++, typeof b == "object" && (b.placement && (p = b.placement), b.rects && (c = b.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : b.rects), {
        x: d,
        y: h
      } = Yr(c, p, l)), y = -1;
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
async function ha(s, t) {
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
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = ms(t, s), g = ca(m), v = a[p ? h === "floating" ? "reference" : "floating" : h], _ = tn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(k)) ? await (r.getScale == null ? void 0 : r.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = tn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: k,
    strategy: l
  }) : w);
  return {
    top: (_.top - b.top + g.top) / $.y,
    bottom: (b.bottom - _.bottom + g.bottom) / $.y,
    left: (_.left - b.left + g.left) / $.x,
    right: (b.right - _.right + g.right) / $.x
  };
}
const ni = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: r,
      platform: o,
      elements: a
    } = t, {
      element: l,
      padding: c = 0
    } = ms(s, t) || {};
    if (l == null)
      return {};
    const d = ca(c), h = {
      x: e,
      y: n
    }, p = nr(i), m = sr(p), g = await o.getDimensions(l), y = p === "y", v = y ? "top" : "left", _ = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", k = r.reference[m] + r.reference[p] - h[p] - r.floating[m], $ = h[p] - r.reference[p], b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let S = b ? b[w] : 0;
    (!S || !await (o.isElement == null ? void 0 : o.isElement(b))) && (S = a.floating[w] || r.floating[m]);
    const I = k / 2 - $ / 2, P = S / 2 - g[m] / 2 - 1, D = Ie(d[v], P), E = Ie(d[_], P), A = D, V = S - g[m] - E, M = S / 2 - g[m] / 2 + I, F = ei(A, M, V), gt = gs(i) != null && M != F && r.reference[m] / 2 - (M < A ? D : E) - g[m] / 2 < 0 ? M < A ? A - M : V - M : 0;
    return {
      [p]: h[p] - gt,
      data: {
        [p]: F,
        centerOffset: M - F + gt
      }
    };
  }
}), $n = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e;
      const {
        placement: n,
        middlewareData: i,
        rects: r,
        initialPlacement: o,
        platform: a,
        elements: l
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = ms(s, t), v = ue(n), _ = ue(o) === o, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = h || (_ || !g ? [Qs(o)] : fh(o));
      !h && m !== "none" && k.push(...mh(o, g, m, w));
      const $ = [o, ...k], b = await ha(t, y), S = [];
      let I = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && S.push(b[v]), d) {
        const A = uh(n, r, w);
        S.push(b[A[0]], b[A[1]]);
      }
      if (I = [...I, {
        placement: n,
        overflows: S
      }], !S.every((A) => A <= 0)) {
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
          switch (p) {
            case "bestFit": {
              var E;
              const F = (E = I.map((it) => [it.placement, it.overflows.filter((gt) => gt > 0).reduce((gt, Wl) => gt + Wl, 0)]).sort((it, gt) => it[1] - gt[1])[0]) == null ? void 0 : E[0];
              F && (M = F);
              break;
            }
            case "initialPlacement":
              M = o;
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
async function _h(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = ue(e), a = gs(e), l = xn(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = ms(t, s);
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
const Tn = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await _h(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, Qe = function(s) {
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
          fn: (v) => {
            let {
              x: _,
              y: w
            } = v;
            return {
              x: _,
              y: w
            };
          }
        },
        ...l
      } = ms(s, t), c = {
        x: e,
        y: n
      }, d = await ha(t, l), h = xn(ue(i)), p = la(h);
      let m = c[p], g = c[h];
      if (r) {
        const v = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", w = m + d[v], k = m - d[_];
        m = ei(w, m, k);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", _ = h === "y" ? "bottom" : "right", w = g + d[v], k = g - d[_];
        g = ei(w, g, k);
      }
      const y = a.fn({
        ...t,
        [p]: m,
        [h]: g
      });
      return {
        ...y,
        data: {
          x: y.x - e,
          y: y.y - n
        }
      };
    }
  };
};
function Kt(s) {
  return da(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function rt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ot(s) {
  var t;
  return (t = (da(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function da(s) {
  return s instanceof Node || s instanceof rt(s).Node;
}
function Lt(s) {
  return s instanceof Element || s instanceof rt(s).Element;
}
function Ct(s) {
  return s instanceof HTMLElement || s instanceof rt(s).HTMLElement;
}
function Gr(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof rt(s).ShadowRoot;
}
function ys(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = dt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function vh(s) {
  return ["table", "td", "th"].includes(Kt(s));
}
function ir(s) {
  const t = rr(), e = dt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function wh(s) {
  let t = Ae(s);
  for (; Ct(t) && !Sn(t); ) {
    if (ir(t))
      return t;
    t = Ae(t);
  }
  return null;
}
function rr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Sn(s) {
  return ["html", "body", "#document"].includes(Kt(s));
}
function dt(s) {
  return rt(s).getComputedStyle(s);
}
function En(s) {
  return Lt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Ae(s) {
  if (Kt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Gr(s) && s.host || // Fallback.
    Ot(s)
  );
  return Gr(t) ? t.host : t;
}
function ua(s) {
  const t = Ae(s);
  return Sn(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : Ct(t) && ys(t) ? t : ua(t);
}
function en(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = ua(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = rt(n);
  return i ? t.concat(r, r.visualViewport || [], ys(n) ? n : []) : t.concat(n, en(n));
}
function fa(s) {
  const t = dt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Ct(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Js(e) !== r || Js(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function or(s) {
  return Lt(s) ? s : s.contextElement;
}
function ke(s) {
  const t = or(s);
  if (!Ct(t))
    return Gt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = fa(t);
  let o = (r ? Js(e.width) : e.width) / n, a = (r ? Js(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const bh = /* @__PURE__ */ Gt(0);
function pa(s) {
  const t = rt(s);
  return !rr() || !t.visualViewport ? bh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ch(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== rt(s) ? !1 : t;
}
function fe(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = or(s);
  let o = Gt(1);
  t && (n ? Lt(n) && (o = ke(n)) : o = ke(s));
  const a = Ch(r, e, n) ? pa(r) : Gt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const p = rt(r), m = n && Lt(n) ? rt(n) : n;
    let g = p.frameElement;
    for (; g && n && m !== p; ) {
      const y = ke(g), v = g.getBoundingClientRect(), _ = dt(g), w = v.left + (g.clientLeft + parseFloat(_.paddingLeft)) * y.x, k = v.top + (g.clientTop + parseFloat(_.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, h *= y.y, l += w, c += k, g = rt(g).frameElement;
    }
  }
  return tn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function kh(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = Ct(e), r = Ot(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Gt(1);
  const l = Gt(0);
  if ((i || !i && n !== "fixed") && ((Kt(e) !== "body" || ys(r)) && (o = En(e)), Ct(e))) {
    const c = fe(e);
    a = ke(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function xh(s) {
  return Array.from(s.getClientRects());
}
function ma(s) {
  return fe(Ot(s)).left + En(s).scrollLeft;
}
function $h(s) {
  const t = Ot(s), e = En(s), n = s.ownerDocument.body, i = ae(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ae(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + ma(s);
  const a = -e.scrollTop;
  return dt(n).direction === "rtl" && (o += ae(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Th(s, t) {
  const e = rt(s), n = Ot(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = rr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Sh(s, t) {
  const e = fe(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = Ct(s) ? ke(s) : Gt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Kr(s, t, e) {
  let n;
  if (t === "viewport")
    n = Th(s, e);
  else if (t === "document")
    n = $h(Ot(s));
  else if (Lt(t))
    n = Sh(t, e);
  else {
    const i = pa(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return tn(n);
}
function ga(s, t) {
  const e = Ae(s);
  return e === t || !Lt(e) || Sn(e) ? !1 : dt(e).position === "fixed" || ga(e, t);
}
function Eh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = en(s).filter((a) => Lt(a) && Kt(a) !== "body"), i = null;
  const r = dt(s).position === "fixed";
  let o = r ? Ae(s) : s;
  for (; Lt(o) && !Sn(o); ) {
    const a = dt(o), l = ir(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ys(o) && !l && ga(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Ae(o);
  }
  return t.set(s, n), n;
}
function Mh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Eh(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = Kr(t, d, i);
    return c.top = ae(h.top, c.top), c.right = Ie(h.right, c.right), c.bottom = Ie(h.bottom, c.bottom), c.left = ae(h.left, c.left), c;
  }, Kr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Nh(s) {
  return fa(s);
}
function Ih(s, t, e) {
  const n = Ct(t), i = Ot(t), r = e === "fixed", o = fe(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Gt(0);
  if (n || !n && !r)
    if ((Kt(t) !== "body" || ys(i)) && (a = En(t)), n) {
      const c = fe(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = ma(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Xr(s, t) {
  return !Ct(s) || dt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function ya(s, t) {
  const e = rt(s);
  if (!Ct(s))
    return e;
  let n = Xr(s, t);
  for (; n && vh(n) && dt(n).position === "static"; )
    n = Xr(n, t);
  return n && (Kt(n) === "html" || Kt(n) === "body" && dt(n).position === "static" && !ir(n)) ? e : n || wh(s) || e;
}
const Ah = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || ya, r = this.getDimensions;
  return {
    reference: Ih(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Dh(s) {
  return dt(s).direction === "rtl";
}
const Ph = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kh,
  getDocumentElement: Ot,
  getClippingRect: Mh,
  getOffsetParent: ya,
  getElementRects: Ah,
  getClientRects: xh,
  getDimensions: Nh,
  getScale: ke,
  isElement: Lt,
  isRTL: Dh
};
function Rh(s, t) {
  let e = null, n;
  const i = Ot(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: p
    } = s.getBoundingClientRect();
    if (a || t(), !h || !p)
      return;
    const m = bs(d), g = bs(i.clientWidth - (c + h)), y = bs(i.clientHeight - (d + p)), v = bs(c), w = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -v + "px",
      threshold: ae(0, Ie(1, l)) || 1
    };
    let k = !0;
    function $(b) {
      const S = b[0].intersectionRatio;
      if (S !== l) {
        if (!k)
          return o();
        S ? o(!1, S) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      k = !1;
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
  return o(!0), r;
}
function ar(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = or(s), d = i || r ? [...c ? en(c) : [], ...en(t)] : [];
  d.forEach((_) => {
    i && _.addEventListener("scroll", e, {
      passive: !0
    }), r && _.addEventListener("resize", e);
  });
  const h = c && a ? Rh(c, e) : null;
  let p = -1, m = null;
  o && (m = new ResizeObserver((_) => {
    let [w] = _;
    w && w.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), e();
  }), c && !l && m.observe(c), m.observe(t));
  let g, y = l ? fe(s) : null;
  l && v();
  function v() {
    const _ = fe(s);
    y && (_.x !== y.x || _.y !== y.y || _.width !== y.width || _.height !== y.height) && e(), y = _, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((_) => {
      i && _.removeEventListener("scroll", e), r && _.removeEventListener("resize", e);
    }), h && h(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const Mn = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Ph,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return yh(s, t, {
    ...i,
    platform: r
  });
}, Lh = '[data-toggle="popover"]', Zr = "show", Jr = "in";
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
      const o = u(i), { namespace: a } = this;
      t === "hover" ? o.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
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
    const r = u(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(Zr), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(Jr), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(Jr), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(Zr), t && this._resetTimer(() => {
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
    n || (this._layoutWatcher = ar(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), Mn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const p = u(e).css({
          position: h,
          left: a,
          top: l
        }), m = d.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[m], y = c.arrow;
        y && p.find(".arrow").css({
          left: y.x,
          top: y.y
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && p.attr("class", `${p.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", m);
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
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new er(e, n), r.on("inited", () => this.layout())), this._panel = r;
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
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, shift: r, offset: o, arrow: a, strategy: l } = this.options, c = a ? e.querySelector(".arrow") : null, d = c ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: l,
      middleware: [
        i ? $n() : null,
        r ? Qe(typeof r == "object" ? r : void 0) : null,
        o || d ? Tn((o || 0) + d) : null,
        a ? ni({ element: c }) : null
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
      closeBtn: d,
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
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
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
u(document).on(`click${ct.NAMESPACE} mouseenter${ct.NAMESPACE}`, Lh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(ct.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ct.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const Wh = '[data-toggle="dropdown"]';
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
      content: X(_a, this._getMenuOptions())
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
u(document).on(`click${bt.NAMESPACE} mouseenter${bt.NAMESPACE}`, Wh, (s) => {
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
      const r = t.attr("href");
      r && "#0".includes(r[0]) && (i.target = r);
    }
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), bt.ensure(t, i), s.preventDefault();
  }
});
class lr extends Z {
  constructor() {
    super(...arguments), this._ref = U();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e } = this.props, n = u(this.triggerElement), i = bt.get(this.triggerElement), r = {
      items: e,
      ...t
    };
    i ? i.setOptions(r) : n.data(r);
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
lr.defaultProps = {
  caret: !0
};
class _a extends tr {
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
    !t || !e || Mn(e, t, {
      placement: this.props.placement,
      middleware: [$n(), Qe(), Tn(1)]
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
      className: C("show", e.className),
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
  ...tr.defaultProps,
  popup: !0,
  search: !1,
  nestedTrigger: "hover",
  placement: "right-start"
};
function va({
  key: s,
  type: t,
  btnType: e,
  ...n
}) {
  return /* @__PURE__ */ f(lr, { type: e, ...n });
}
let wa = class extends O {
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
  handleItemClick(t, e, n, i) {
    n && n.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: e, event: i });
  }
  beforeRender() {
    var n;
    const t = { ...this.props }, e = (n = t.beforeRender) == null ? void 0 : n.call(this, t);
    return e && Object.assign(t, e), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, e) {
    const { key: n = e, ...i } = t, r = t.dropdown || t.items ? lr : Z;
    return /* @__PURE__ */ f(r, { ...i }, n);
  }
  renderItem(t, e, n) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: n, ...e };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, n, e.onClick)), i) {
      const l = i.call(this, a, X);
      if (J(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, n);
  }
  render() {
    const t = this.beforeRender(), {
      className: e,
      items: n,
      size: i,
      type: r,
      btnProps: o,
      children: a,
      itemRender: l,
      onClickItem: c,
      beforeRender: d,
      afterRender: h,
      beforeDestroy: p,
      ...m
    } = t;
    return /* @__PURE__ */ f(
      "div",
      {
        className: C("btn-group", i ? `size-${i}` : "", e),
        ...m,
        children: [
          n && n.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Oh({
  key: s,
  type: t,
  btnType: e,
  ...n
}) {
  return /* @__PURE__ */ f(wa, { type: e, ...n });
}
let ut = class extends Xi {
  beforeRender() {
    const { gap: t, btnProps: e, wrap: n, ...i } = super.beforeRender();
    return i.className = C(i.className, n ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, e, n) {
    const { type: i } = n, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {};
    o.type && (o.btnType = o.type, delete o.type);
    const a = {
      ...e,
      ...o,
      ...n,
      className: C(`${this.name}-${i}`, e.className, o.className, n.className),
      style: Object.assign({}, e.style, o.style, n.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ f(t, { ...a });
  }
};
ut.ItemComponents = {
  item: lh,
  dropdown: va,
  "btn-group": Oh
};
ut.ROOT_TAG = "nav";
ut.NAME = "toolbar";
ut.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Hh({
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
  iconClass: d,
  ...h
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ f(Z, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : J(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ f(Z, { ...a, onClick: l }));
  const m = J(e) ? e : e ? /* @__PURE__ */ f(ut, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: C("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(z, { icon: c, className: C("alert-icon", d) }),
    J(i) ? i : /* @__PURE__ */ f("div", { className: C("alert-content", r), children: [
      J(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? m : null
    ] }),
    n ? null : m,
    p,
    o
  ] });
}
function Bh(s) {
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
function Fh({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    Hh,
    {
      className: C("messager", r, t, n === !0 ? Bh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var zh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Vh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Pe = (s, t, e) => (zh(s, t, "access private method"), e), te, ve;
class cr extends B {
  constructor() {
    super(...arguments), Vh(this, te), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), Pe(this, te, ve).call(this, () => {
      this._show = !0, this.render(), Pe(this, te, ve).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Pe(this, te, ve).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Pe(this, te, ve).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Pe(this, te, ve).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
te = /* @__PURE__ */ new WeakSet();
ve = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
cr.NAME = "MessagerItem";
cr.Component = Fh;
var hr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, le = (s, t, e) => (hr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Cs = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ps = (s, t, e, n) => (hr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ba = (s, t, e) => (hr(s, t, "access private method"), e), xe, Nt, ii, Ca, dr, ka;
const Nn = class xa extends at {
  constructor() {
    super(...arguments), Cs(this, ii), Cs(this, dr), Cs(this, xe, void 0), Cs(this, Nt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = le(this, Nt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), ba(this, ii, Ca).call(this).show();
  }
  hide() {
    var t;
    (t = le(this, Nt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = xa.ensure(e || "body", { key: `messager_${u.guid++}`, ...n });
    return i.hide(), i.show(), i;
  }
};
xe = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakSet();
Ca = function() {
  if (le(this, Nt))
    le(this, Nt).setOptions(this.options);
  else {
    const s = ba(this, dr, ka).call(this), t = new cr(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Ps(this, xe, void 0), Ps(this, Nt, void 0);
    }), Ps(this, Nt, t);
  }
  return le(this, Nt);
};
dr = /* @__PURE__ */ new WeakSet();
ka = function() {
  if (le(this, xe))
    return le(this, xe);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ps(this, xe, e[0])), e[0];
};
Nn.NAME = "messager";
Nn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Nn.MULTI_INSTANCE = !0;
let hu = Nn;
let ur = class extends O {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, p = n / 2;
    let { circleWidth: m = 0.1 } = t;
    m < 1 && (m = n * m);
    const g = (n - m) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: c ?? p, y: d ?? p + m / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
ur.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class $a extends B {
}
$a.NAME = "ProgressCircle";
$a.Component = ur;
const Re = '[droppable="true"]';
class fr extends at {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
      !a || n && !r.closest(n).length || i && i.call(this, t, a) === !1 || (o.attr("draggable", "true"), this._setState({ dragging: a }));
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
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d } = n;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      const h = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || Re);
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(Re).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
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
      var r, o;
      const { dragElement: e } = this, n = u(t.target).closest(Re)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(Re)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(Re)[0];
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
    var r;
    const e = this._state, { dragging: n = e.dragging, dropping: i = e.dropping } = t;
    n === e.dragging && i === e.dropping || (this._state = { dragging: n, dropping: i }, (r = this.options.onChange) == null || r.call(this, this._state, e));
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
    const { dragElement: r } = this;
    if (r) {
      const a = u(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), n && o.removeClass(n), this._$targets = void 0);
  }
}
fr.NAME = "Draggable";
fr.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Uh = '[moveable="true"]';
class Ta extends at {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = u(t.target), a = o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
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
    const { strategy: r, target: o } = n;
    r === "position" ? u(o).css({ left: n.left, top: n.top }) : r === "transform" && u(o).css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`), (a = this.options.onChange) == null || a.call(this, n, i, t);
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
Ta.NAME = "Moveable";
Ta.DEFAULT = {
  selector: Uh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
var Mt;
class jh {
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
const Qr = /* @__PURE__ */ new Set([
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
class Sa extends jh {
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
    return typeof t == "string" && (Qr.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(Sa.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (Qr.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
const pr = class Ea extends at {
  async afterInit() {
    const t = await Ea.loadModule();
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
pr.NAME = "Sortable";
pr.DEFAULT = {
  animation: 150
};
let uu = pr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let Ma = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const On = "```ZUI_STR\n";
var ns, ie, $e, _t, Te, Se, Rs;
const Er = class Er {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    R(this, Se);
    R(this, ns, void 0);
    R(this, ie, void 0);
    R(this, $e, void 0);
    R(this, _t, void 0);
    R(this, Te, void 0);
    W(this, ns, e), W(this, $e, t ?? Ma()), W(this, ie, `ZUI_STORE:${N(this, $e)}`), W(this, _t, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return N(this, ns);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (N(this, Te) || W(this, Te, new Er(N(this, $e), "session")), N(this, Te));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = N(this, _t).getItem(Bt(this, Se, Rs).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(On))
        return n.substring(On.length);
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
    N(this, _t).setItem(Bt(this, Se, Rs).call(this, t), typeof e == "string" ? `${On}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    N(this, _t).removeItem(Bt(this, Se, Rs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < N(this, _t).length; e++) {
      const n = N(this, _t).key(e);
      if (n != null && n.startsWith(N(this, ie))) {
        const i = N(this, _t).getItem(n);
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
ns = new WeakMap(), ie = new WeakMap(), $e = new WeakMap(), _t = new WeakMap(), Te = new WeakMap(), Se = new WeakSet(), Rs = function(t) {
  return `${N(this, ie)}:${t}`;
};
let sn = Er;
const ze = new sn("DEFAULT");
function qh(s, t = "local") {
  return new sn(s, t);
}
Object.assign(ze, { create: qh });
class Na extends B {
}
Na.NAME = "Avatar";
Na.Component = Zi;
class Ia extends B {
}
Ia.NAME = "BtnGroup";
Ia.Component = wa;
const ri = Symbol("EVENT_PICK");
class mr extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = u(t.target), a = i == null ? void 0 : i(t);
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
    const { state: e, className: n } = t, { open: i, disabled: r } = e;
    return C(
      "pick",
      n,
      i && "is-open focus",
      r && "disabled"
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
      if (i === ri)
        return;
      const r = n.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", ri), this._skipTriggerChange = !1);
  }
  render(t) {
    return X(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
var re, vt, Ut;
class Aa extends O {
  constructor(e) {
    super(e);
    R(this, re, void 0);
    R(this, vt, void 0);
    R(this, Ut, void 0);
    W(this, re, U()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = N(this, re)) == null ? void 0 : e.current;
  }
  get container() {
    return N(this, Ut);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = u(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), n(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: r } = i;
    return C(
      "pick-pop",
      n,
      r === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: n,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    } = e, c = u.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: N(this, re),
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
    const { element: e, trigger: n, props: i } = this, { state: r } = i;
    if (!e || !n || !r.open) {
      N(this, vt) && (N(this, vt).call(this), W(this, vt, void 0));
      return;
    }
    N(this, vt) || W(this, vt, ar(n, e, () => {
      const { placement: o, width: a } = i;
      Mn(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? $n() : null, Qe(), Tn(1)].filter(Boolean)
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
    e && (e(), W(this, vt, void 0)), W(this, Ut, void 0), W(this, re, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return qc(this._render(e), this._getContainer(e));
  }
}
re = new WeakMap(), vt = new WeakMap(), Ut = new WeakMap();
var Da = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ft = (s, t, e) => (Da(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Hn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ye = (s, t, e, n) => (Da(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ls, mt, Ve;
let nt = class extends O {
  constructor(t) {
    super(t), Hn(this, Ls, void 0), Hn(this, mt, 0), Hn(this, Ve, U()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Ft(this, mt) && (clearTimeout(Ft(this, mt)), ye(this, mt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await qs(200, (a) => {
        ye(this, mt, a);
      }), ye(this, mt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await qs(50, (a) => {
        ye(this, mt, a);
      }), ye(this, mt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ye(this, Ls, t.id ?? `_pick${u.guid++}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Ft(this, Ls);
  }
  get pop() {
    return Ft(this, Ve).current;
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
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: r, value: o } = e;
    if (!!n != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      n && a ? a() : !n && l && l();
    }
    i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), Ft(this, mt) && clearTimeout(Ft(this, mt));
    const t = Ft(this, Ve).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: Ft(this, Ve), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(De, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Ls = /* @__PURE__ */ new WeakMap();
mt = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
nt.Trigger = mr;
nt.Pop = Aa;
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
let Pa = class extends nt {
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
    if (t && u(t).css("backgroundColor", r), e && u(e).css("borderColor", r), n && u(n).css("color", r), i) {
      const o = u(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
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
    }, n.style), n.className = C("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(z, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(z, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Pa.defaultProps = {
  ...nt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Ra extends B {
}
Ra.NAME = "ColorPicker";
Ra.Component = Pa;
const ts = 24 * 60 * 60 * 1e3, j = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Yh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(j(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, _s = (s, t = /* @__PURE__ */ new Date()) => j(s).toDateString() === j(t).toDateString(), oi = (s, t = /* @__PURE__ */ new Date()) => j(s).getFullYear() === j(t).getFullYear(), La = (s, t = /* @__PURE__ */ new Date()) => (s = j(s), t = j(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), mu = (s, t = /* @__PURE__ */ new Date()) => {
  s = j(s), t = j(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, gu = (s, t) => _s(j(t), s), yu = (s, t) => _s(j(t).getTime() - ts, s), _u = (s, t) => _s(j(t).getTime() + ts, s), tt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", oi(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, vu = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = tt(s, oi(s) ? n.month : n.full);
  if (_s(s, t))
    return i;
  const r = tt(t, oi(s, t) ? La(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var is, rs;
class Wa extends O {
  constructor() {
    super(...arguments);
    R(this, is, U());
    R(this, rs, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(N(this, is).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: N(this, is), children: [
      /* @__PURE__ */ f(
        de,
        {
          className: l,
          items: o,
          onClickItem: N(this, rs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        de,
        {
          className: l,
          items: a,
          onClickItem: N(this, rs).bind(this, "minute")
        }
      )
    ] });
  }
}
is = new WeakMap(), rs = new WeakMap();
var Gh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ks = (s, t, e) => (Gh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), xs = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ai, li, ci, hi;
const to = (s) => {
  if (!s)
    return;
  const t = j(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Oa = class extends nt {
  constructor(t) {
    super(t), xs(this, ai, () => {
      this.toggle(!0);
    }), xs(this, li, (n) => {
      this.setTime(n.target.value);
    }), xs(this, ci, (n, i) => {
      this.setTime({ [n]: i });
    }), xs(this, hi, () => {
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
    const n = to(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? tt(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = to(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: ks(this, hi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(z, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: ks(this, ai), onChange: ks(this, li) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: C(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(Wa, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: ks(this, ci) });
  }
};
ai = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
Oa.defaultProps = {
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
const Kh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * ts;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, eo = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => tt(e, t)));
var hn;
class Xh extends O {
  constructor() {
    super(...arguments);
    R(this, hn, (e) => {
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
      weekNames: r = K.getLang("weekNames"),
      monthNames: o = K.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], p = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const I = (i + S) % 7;
      h.push(/* @__PURE__ */ f("div", { className: C("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[I] : I }) }, S));
    }
    const { startTime: m, days: g, firstDay: y } = Kh(a, l, i), v = y + g * ts;
    let _ = m;
    const w = [], k = "yyyy-MM-dd", $ = eo(c, k), b = eo(d, k);
    for (; _ <= v; ) {
      const S = [];
      for (let I = 0; I < 7; I++) {
        const P = new Date(_), D = P.getDate(), E = tt(P, k), A = P.getDay(), V = La(P, y), M = C("col mini-calendar-day", {
          active: $.has(E),
          selected: b.has(E),
          "is-first": D === 1,
          "is-in-month": V,
          "is-out-month": !V,
          "is-today": _s(P, n),
          "is-weekend": A === 0 || A === 6
        });
        S.push(
          /* @__PURE__ */ f("div", { className: M, "data-date": E, children: /* @__PURE__ */ f("a", { className: p, onClick: N(this, hn), children: D === 1 && o ? o[P.getMonth()] : P.getDate() }) }, E)
        ), _ += ts;
      }
      w.push(/* @__PURE__ */ f("div", { className: "row", children: S }, _));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      w
    ] });
  }
}
hn = new WeakMap();
var os, dn;
class so extends O {
  constructor() {
    super(...arguments);
    R(this, os, U());
    R(this, dn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(N(this, os).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ f(Z, { type: "ghost", "data-value": c, active: c === o, className: C(l === c ? "is-current" : ""), onClick: N(this, dn), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: N(this, os), children: a });
  }
}
os = new WeakMap(), dn = new WeakMap();
var Ee, as, ls, cs, hs, ds, un, Ba, fn, Fa;
class Ha extends O {
  constructor(e) {
    super(e);
    R(this, un);
    R(this, fn);
    R(this, Ee, void 0);
    R(this, as, void 0);
    R(this, ls, void 0);
    R(this, cs, void 0);
    R(this, hs, void 0);
    R(this, ds, void 0);
    W(this, Ee, U()), W(this, as, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), W(this, ls, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), W(this, cs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), W(this, hs, (r) => {
      this.setState({ year: r, select: "day" });
    }), W(this, ds, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Yh(l, r.substring(5).replace("+", ""))), r = tt(l, "yyyy-MM-dd");
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
  componentDidMount() {
    u(N(this, Ee).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = K.getLang("yearFormat") || "{0}",
      weekNames: o = K.getLang("weekNames"),
      monthNames: a = K.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: p
    } = n, m = p === "day", g = j(e.minDate || "1970-1-1"), y = j(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: N(this, Ee), onClick: N(this, as), children: [
      Bt(this, un, Ba).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(Z, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Q(r, d) }),
          /* @__PURE__ */ f(Z, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(Z, { type: "ghost", size: "sm", square: !0, onClick: N(this, ls), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(Z, { type: "ghost", size: "sm", square: !0, onClick: N(this, cs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          Xh,
          {
            weekStart: l,
            weekNames: o,
            monthNames: a,
            year: d,
            month: h,
            selections: c,
            onClickDate: this.changeDate
          }
        ) : null,
        p === "year" ? /* @__PURE__ */ f(
          so,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: N(this, hs)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          so,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: N(this, ds)
          }
        ) : null,
        m ? Bt(this, fn, Fa).call(this, e) : null
      ] })
    ] });
  }
}
Ee = new WeakMap(), as = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), un = new WeakSet(), Ba = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(de, { ...n })) : null;
}, fn = new WeakSet(), Fa = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": tt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(ut, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ f(Z, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Zh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Bn = (s, t, e) => (Zh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Fn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, di, ui, fi;
let za = class extends nt {
  constructor(t) {
    super(t), Fn(this, di, () => {
      this.toggle(!0);
    }), Fn(this, ui, (n) => {
      this.setDate(n.target.value);
    }), Fn(this, fi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = j(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : tt(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Bn(this, fi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(z, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Bn(this, di), onChange: Bn(this, ui) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: C(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: C(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = K.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: p, required: m } = t;
    return /* @__PURE__ */ f(
      Ha,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
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
di = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
fi = /* @__PURE__ */ new WeakMap();
za.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Va extends B {
}
Va.NAME = "TimePicker";
Va.Component = Oa;
class Ua extends B {
}
Ua.NAME = "DatePicker";
Ua.Component = za;
class Jh extends O {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(Ha, { ...e }),
      /* @__PURE__ */ f(Wa, { ...n })
    ] });
  }
}
var Qh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Le = (s, t, e) => (Qh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), We = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, pi, mi, gi, yi, _i;
const no = (s) => {
  if (!s)
    return;
  const t = j(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let ja = class extends nt {
  constructor(t) {
    super(t), We(this, pi, () => {
      this.toggle(!0);
    }), We(this, mi, (o) => {
      this.setDate(o.target.value);
    }), We(this, gi, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), We(this, yi, (o, a) => {
      this.setTime({ [o]: a });
    }), We(this, _i, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: p } = this.props;
      if (h)
        return;
      const m = j(o), g = !o || Number.isNaN(m.getDay()), y = tt(m, d), [, v = "00:00"] = this.state.value.split(p);
      this.setState({ value: g ? c ? l : "" : `${y}${p}${v}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, p = "00:00"] = this.state.value.split(o), [m, g] = p.split(":"), { hour: y = +m, minute: v = +g } = t;
      c = `${y}:${v}`;
    }
    const d = no(c), h = this.state.value.split(o)[0] || tt(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${tt(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = no(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Le(this, gi),
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
          disabled: o,
          readOnly: a,
          onFocus: Le(this, pi),
          onChange: (p) => {
            Le(this, mi).call(this, p), Le(this, _i).call(this, p);
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
      className: C(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: C(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = K.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: p, required: m, minuteStep: g } = t, [y, v] = this.getTime() || [], _ = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: m ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: p
      },
      time: {
        hour: y,
        minute: v,
        minuteStep: g,
        onChange: Le(this, yi)
      }
    };
    return /* @__PURE__ */ f(Jh, { ..._ });
  }
};
pi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
ja.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class qa extends B {
}
qa.NAME = "DatetimePicker";
qa.Component = ja;
const zn = "show", io = "in", td = '[data-dismiss="modal"]', vs = class Ue extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(td) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(zn);
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
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
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
      return u(e).css("z-index", `${Ue.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    return u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, zn, r).css({
      zIndex: `${Ue.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(io), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (u(this.modalElement).removeClass(io), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(zn), this.emit("hidden");
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
    const r = n.clientWidth, o = n.clientHeight;
    this._lastDialogSize = [r, o], typeof t == "function" && (t = t({ width: r, height: o }));
    const a = {
      left: null,
      bottom: null,
      right: null
    };
    let l = null, c = "center";
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = Ue.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ue.query(t)) == null || e.show();
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
class Ya extends O {
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
    return J(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: C("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : J(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(ut, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? J(t) ? t : /* @__PURE__ */ f("div", { className: C("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return J(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: C("modal-footer", e), children: n ? /* @__PURE__ */ f(ut, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: C("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: C("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Ya.defaultProps = { closeBtn: !0 };
class Ga extends O {
  constructor() {
    super(...arguments), this._ref = U(), this.state = {}, this._watchIframeHeight = () => {
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
Ga.defaultProps = {
  watchHeight: !0
};
var gr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, pt = (s, t, e) => (gr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Oe = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, _e = (s, t, e, n) => (gr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ws = (s, t, e) => (gr(s, t, "access private method"), e), $t, je, Tt, nn, yr, Os, vi;
function ed(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function sd(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
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
        title: o,
        ...r,
        ...d
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [c] : {
    title: o,
    ...r,
    body: e === "html" ? /* @__PURE__ */ f(ps, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function nd(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(Ga, { url: e, watchHeight: !o })
  };
}
const id = {
  custom: ed,
  ajax: sd,
  iframe: nd
}, Vn = "loading", Ka = class ee extends pe {
  constructor() {
    super(...arguments), Oe(this, nn), Oe(this, Os), Oe(this, $t, void 0), Oe(this, je, void 0), Oe(this, Tt, void 0);
  }
  get id() {
    return pt(this, je);
  }
  get loading() {
    var t;
    return (t = pt(this, $t)) == null ? void 0 : t.classList.contains(Vn);
  }
  get shown() {
    var t;
    return !!((t = pt(this, $t)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = pt(this, $t);
    if (!t) {
      const { options: e } = this;
      let n = pt(this, je);
      n || (n = e.id || `modal-${u.guid++}`, _e(this, je, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      _e(this, $t, t);
    }
    return t;
  }
  get $emitter() {
    const t = pt(this, $t);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("show", () => {
      u("body").disableScroll();
    }), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ee.getAll().some((t) => t.shown) || u("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = pt(this, $t);
    t && (u(t).removeData(this.constructor.KEY).remove(), _e(this, $t, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    pt(this, Tt) && clearTimeout(pt(this, Tt));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = id[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(Vn), r && _e(this, Tt, window.setTimeout(() => {
      _e(this, Tt, 0), Ws(this, Os, vi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Ws(this, Os, vi).call(this, this.options.failedTip) : l && typeof l == "object" && await Ws(this, nn, yr).call(this, l), pt(this, Tt) && (clearTimeout(pt(this, Tt)), _e(this, Tt, 0)), this.layout(), await qs(100), n.removeClass(Vn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ee.ensure(n, r), a = `${ee.NAMESPACE}.open${u.guid++}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? p = /* @__PURE__ */ f("div", { className: C("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ f("div", { className: C("modal-body", h.bodyClass), children: p });
    const m = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = K.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && m.push(v);
    }, []);
    let g;
    const y = m.length ? {
      gap: 4,
      items: m,
      onClickItem: ({ item: v, event: _ }) => {
        const w = ee.query(_.target, c);
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
      custom: { footerActions: y, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ee.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
$t = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
nn = /* @__PURE__ */ new WeakSet();
yr = function(s) {
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
      /* @__PURE__ */ f(Ya, { ...s }),
      this.modalElement
    );
  });
};
Os = /* @__PURE__ */ new WeakSet();
vi = function(s) {
  if (s)
    return Ws(this, nn, yr).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
Ka.DEFAULT = {
  ...pe.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let rd = Ka;
const od = '[data-toggle="modal"]';
class wi extends at {
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
      e = rd.ensure(this.container, t);
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
wi.NAME = "ModalTrigger";
u(document).on(`click${wi.NAMESPACE}`, od, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = wi.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let _r = class extends Jt {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
_r.NAME = "nav";
_r.defaultItemProps = {
  innerComponent: "a"
};
class Xa extends B {
}
Xa.NAME = "Nav";
Xa.Component = _r;
function es(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function ad({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = es(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : Q(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ f(Z, { type: e, ...a });
}
function ld({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = es(i, e);
  return n = typeof n == "function" ? n(a) : Q(n, a), /* @__PURE__ */ f(Jo, { ...o, children: [
    r,
    n
  ] });
}
function cd({
  key: s,
  type: t,
  btnType: e,
  count: n = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, c = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(Z, { type: e, ...l })), d = (p, m) => {
    const g = [];
    for (let y = p; y <= m; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = es(i, y);
      o && (l.url = typeof o == "function" ? o(v) : Q(o, v)), g.push(/* @__PURE__ */ f(Z, { type: e, ...l, onClick: r }));
    }
    return g;
  };
  let h = [];
  return h = [...d(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= n ? h = [...h, ...d(2, i.pageTotal)] : i.page < n - 2 ? h = [...h, ...d(2, n - 2), c(), ...d(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - n + 3 ? h = [...h, c(), ...d(i.pageTotal - n + 3, i.pageTotal)] : h = [...h, c(), ...d(i.page - Math.ceil((n - 4) / 2), i.page + Math.floor((n - 4) / 2)), c(), ...d(i.pageTotal, i.pageTotal)]), h;
}
function hd({
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
    const d = { ...t, recPerPage: c };
    return {
      ...r,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(d) : Q(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Q(a, t), i.menu = { ...i.menu, className: C((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(va, { type: "dropdown", dropdown: i, ...o });
}
function dd({
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
  const d = { ...c };
  let h;
  const p = (y) => {
    var v;
    h = Number((v = y.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, m = (y) => {
    if (!(y != null && y.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = es(i, h);
    a && !a({ info: v, event: y }) || (y.target.href = d.url = typeof l == "function" ? l(v) : Q(l, v));
  }, g = es(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : Q(l, g), /* @__PURE__ */ f("div", { className: C("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(Z, { type: n, ...d, onClick: m })
  ] });
}
let In = class extends ut {
  get pagerInfo() {
    const { page: t = 1, recTotal: e = 0, recPerPage: n = 10 } = this.props;
    return { page: +t, recTotal: +e, recPerPage: +n, pageTotal: n ? Math.ceil(e / n) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n), r = e.type || "item", { pagerInfo: o } = this;
    return r === "info" ? Object.assign(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
In.NAME = "pager";
In.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
In.ItemComponents = {
  ...ut.ItemComponents,
  link: ad,
  info: ld,
  nav: cd,
  "size-menu": hd,
  goto: dd
};
class Za extends B {
}
Za.NAME = "Pager";
Za.Component = In;
class Ja extends B {
}
Ja.NAME = "Pick";
Ja.Component = nt;
var Me, us;
class Qa extends O {
  constructor(e) {
    super(e);
    R(this, Me, void 0);
    R(this, us, void 0);
    this._searchInput = U(), this._measure = U(), W(this, Me, (n) => {
      var r, o;
      const i = n.target.value;
      (o = (r = this.props).onSearch) == null || o.call(r, i), this.setState({ search: i }), n.stopPropagation();
    }), W(this, us, (n) => {
      var i, r;
      n.stopPropagation(), (r = (i = this.props).onClear) == null || r.call(i), this.setState({ search: "" }, () => this.focus());
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
        const r = u(i).parent();
        r.width(Math.ceil(Math.min(n.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(e, n) {
    const { placeholder: i, inline: r } = e, { search: o } = n, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: N(this, us), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: N(this, Me),
          onInput: N(this, Me),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Me = new WeakMap(), us = new WeakMap();
class ud extends mr {
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
    return C(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      Qa,
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
    const { state: { selections: e = [], open: n }, search: i, placeholder: r, children: o } = this.props, a = n && i;
    return !a && !e.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        u(`#${i}`).val(n);
      else {
        const a = r.length ? r : [o];
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
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = u(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", ri), this._skipTriggerChange = !1;
    }
  }
}
class fd extends mr {
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
    return C(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ f(
      Qa,
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
    const { children: e, state: { selections: n = [], open: i }, placeholder: r, search: o, disabled: a, clearable: l } = t, [c] = n, d = i && o;
    let h;
    if (d)
      h = this._renderSearch(t);
    else if (c) {
      const { text: g } = c;
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ f(ht, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const p = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      p,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
const pd = (s, t, e = "is-match") => s.reduce((n, i) => [...n].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((c, d) => {
    d && (r.push(/* @__PURE__ */ f("span", { class: e, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + c.length)), l += c.length;
  }), r;
}, []), t);
var pn, tl, mn, el, fs;
class md extends Aa {
  constructor() {
    super(...arguments);
    R(this, pn);
    R(this, mn);
    R(this, fs, void 0);
    this._menu = U(), W(this, fs, ({ item: e }) => {
      const n = e.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(n) : (o(n), a(!1, { search: "" }));
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
      const n = Bt(this, pn, tl).call(this);
      n != null && n.length && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(e) {
    return C(
      super._getClass(e),
      "picker-menu"
    );
  }
  _renderPop(e) {
    const { menu: n } = e;
    return /* @__PURE__ */ f(
      de,
      {
        ref: this._menu,
        className: "picker-menu-list",
        items: Bt(this, mn, el).call(this),
        onClickItem: N(this, fs),
        ...n
      }
    );
  }
}
pn = new WeakSet(), tl = function() {
  const e = this.element;
  if (e)
    return u(e).find(".menu-item>a.hover");
}, mn = new WeakSet(), el = function() {
  const { selections: e, items: n, hoverItem: i, search: r } = this.props.state, o = new Set(e.map((d) => d.value));
  let a = !1;
  const l = u.unique(r.toLowerCase().split(" ").filter((d) => d.length)), c = n.reduce((d, h) => {
    const {
      value: p = "",
      keys: m,
      text: g,
      className: y,
      content: v,
      ..._
    } = h;
    return p === i && (a = !0), g && d.push({
      key: p,
      active: o.has(p),
      text: v ? null : typeof g == "string" ? pd(l, [g]) : /* @__PURE__ */ f(ht, { content: g }),
      className: C(y, { hover: p === i }),
      "data-value": p,
      content: v,
      ..._
    }), d;
  }, []);
  return !a && c.length && (c[0].className = C(c[0].className, "hover")), c;
}, fs = new WeakMap();
let vr = class extends nt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = U(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((c) => !a.has(c));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const o = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), u.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: n = "" } = this.props;
    this._emptyValueSet = new Set(n.split(e));
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
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
    return this._emptyValueSet.values().next().value;
  }
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e, searchDelay: n } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof e == "function") {
      if (await qs(n || 500), this._abort !== t || (r = await e(i, { signal: t.signal }), this._abort !== t))
        return r;
    } else if (i.length) {
      const o = u.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      r = e, o.length && (r = e.reduce((a, l) => {
        const {
          value: c,
          keys: d = "",
          text: h
        } = l;
        return o.every((p) => c.toLowerCase().includes(p) || d.toLowerCase().includes(p) || typeof h == "string" && h.toLowerCase().includes(p)) && a.push(l), a;
      }, []));
    } else
      r = e;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = new Map(r.map((a) => [a.value, a]));
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, t || i.search !== e.search || n.items !== i.items) {
      const a = await this.load();
      r.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, i.items = n.items, i.search = e.search;
    }
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
    return t.Trigger || (t.multiple ? ud : fd);
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
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = new Set((Array.isArray(r) ? r : this.state.items).map((l) => String(l.value)));
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    if (e) {
      const r = this._trigger.current;
      r && (r._skipTriggerChange = i);
    }
    return this.changeState({ value: i });
  }
};
vr.defaultProps = {
  ...nt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
vr.Pop = md;
class sl extends B {
}
sl.NAME = "Picker";
sl.Component = vr;
class nl extends at {
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
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && n.middleware.push($n()), r && n.middleware.push(r === !0 ? Qe() : Qe(r)), o && n.middleware.push(ni({ element: this.$arrow[0] })), a && n.middleware.push(Tn(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = ar(t, e, () => {
      Mn(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !ni || !o.arrow)
          return;
        const { x: a, y: l } = o.arrow, c = {
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
nl.NAME = "Popovers";
nl.DEFAULT = {
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
class il extends B {
}
il.NAME = "SearchBox";
il.Component = Qi;
class rl extends B {
}
rl.NAME = "Toolbar";
rl.Component = ut;
const gd = '[data-toggle="tooltip"]';
class It extends ct {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: C("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
It.NAME = "Tooltip";
It.DEFAULT = {
  ...ct.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${It.NAMESPACE} mouseenter${It.NAMESPACE}`, gd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(It.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    It.ensure(t, { show: It.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
function yd({
  type: s,
  component: t,
  className: e,
  children: n,
  content: i,
  style: r,
  attrs: o,
  url: a,
  disabled: l,
  active: c,
  icon: d,
  text: h,
  target: p,
  trailingIcon: m,
  hint: g,
  checked: y,
  actions: v,
  show: _,
  level: w = 0,
  items: k,
  ...$
}) {
  const b = Array.isArray(v) ? { items: v } : v;
  return b && (b.btnProps || (b.btnProps = { size: "sm" }), b.className = C("tree-actions not-nested-toggle", b.className)), /* @__PURE__ */ f(
    "div",
    {
      className: C("tree-item-content", e, { disabled: l, active: c }),
      title: g,
      "data-target": p,
      style: { paddingLeft: `calc(${w} * var(--tree-indent, 20px))` },
      "data-level": w,
      ...$,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${k ? " state" : ""}`, children: k ? /* @__PURE__ */ f("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(z, { icon: d, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, style: r, ...o, children: h }) : /* @__PURE__ */ f("span", { class: "text", style: r, ...o, children: h }),
        /* @__PURE__ */ f(ht, { content: i }),
        n,
        b ? /* @__PURE__ */ f(ut, { ...b }) : null,
        /* @__PURE__ */ f(z, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
let wr = class extends Cn {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t), { collapsedIcon: n, expandedIcon: i, normalIcon: r, itemActions: o } = this.props;
    return {
      collapsedIcon: n,
      expandedIcon: i,
      normalIcon: r,
      itemActions: o,
      ...e
    };
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n), { collapsedIcon: r, expandedIcon: o, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? o : r : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(e) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: e } = this.props;
    return e && (t.className = C(t.className, "tree-hover")), t;
  }
};
wr.ItemComponents = {
  item: yd
};
wr.NAME = "tree";
class ol extends B {
}
ol.NAME = "Tree";
ol.Component = wr;
class br extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? Ec(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
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
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
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
    const n = e.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return n.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: n, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (e) {
      const c = [];
      for (let d of t) {
        if (n && this.fileMap.size >= n)
          return o == null || o(c), alert(r);
        if (this.currentBytes + d.size > this.limitBytes)
          return o == null || o(c), alert(i);
        d = this.renameDuplicatedFile(d);
        const h = this.createFileItem(d);
        this.itemMap.set(d.name, h), this.$list.append(h), c.push(d);
      }
      o == null || o(c);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), o == null || o(a);
  }
  deleteFileItem(t) {
    var l, c;
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const n = this.fileMap.get(e);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((d) => this.dataTransfer.items.add(d)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var r, o;
    const n = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), n && (t = this.fileMap.get(n) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(e, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, e, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], e), this.fileMap.set(e, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
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
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new It(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new It(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${Sc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, r = u('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, r = u('<div class="input-group input-rename-container hidden"></div>'), o = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const h = r.closest(".file-item"), p = h.find(".file-name");
        if (p.html() === o.val()) {
          r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), p.html(o.val());
      } else
        d.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
br.NAME = "Upload";
br.DEFAULT = {
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
class al extends br {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = u(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = u(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = u('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(u(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = u('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      const r = u(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return u('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(u(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = n.closest(".file-item").find(".file-name");
        if (r.html() === n.val()) {
          n.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(n.val()))
          return alert(e);
        this.renameFileItem(t, n.val()), n.addClass("hidden"), r.html(n.val()).closest(".file-info").removeClass("hidden");
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
al.NAME = "UploadImgs";
al.DEFAULT = {
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
class Cr extends bt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Cr.NAME = "ContextMenu";
Cr.DEFAULT = {
  ...bt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function _d(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ f(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(ps, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const Un = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), ro = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], $s = "Dashboard:Block.cache:";
let ll = class extends O {
  constructor(t) {
    super(t), this._ref = U(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: n } = this.state, i = {};
      let r = !1;
      n.forEach((o) => {
        const [a, l, c, d] = this._map.get(o.id), h = this._oldMap.get(o.id);
        (!h || h[0] !== a || h[1] !== l || h[2] !== c || h[3] !== d) && (r = !0, i[o.id] = { left: a, top: l, width: c, height: d }, this._oldMap.set(o.id, [a, l, c, d]));
      }), r && e(i);
    }, this._handleMenuClick = (e) => {
      const n = e.target.closest(".dashboard-block");
      if (!n)
        return;
      const i = n.dataset.id;
      if (!i)
        return;
      const r = this.getBlock(i);
      if (!r || !r.menu)
        return;
      const { menu: o } = r, { onClickMenu: a } = this.props;
      Cr.show({
        triggerEvent: e,
        element: e.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var c;
            ((c = l.item.data) == null ? void 0 : c.type) === "refresh" && this.load(i), a && a.call(this, l, r);
          },
          ...o
        }
      });
    }, this.state = { blocks: this._initBlocks(t.blocks) };
  }
  getBlock(t) {
    return this.state.blocks.find((e) => e.id === t);
  }
  update(t, e) {
    const { id: n } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === n);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
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
        const i = await u.fetch(e, [t, n], ({ url: r }) => ({ url: Q(r, n) }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, n);
        });
      } catch (i) {
        const r = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: r }, () => {
          var o;
          (o = this.props.onLoadFail) == null || o.call(this, i, n);
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
        typeof n == "string" ? ze.set(`${$s}${n}:${t}`, e) : ze.session.set(`${$s}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? ze.get(`${$s}${e}:${t}`) : ze.session.get(`${$s}${t}`);
    if (n)
      return { html: n };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: n, grid: i } = this.props;
    return t.map((o) => {
      const {
        id: a,
        size: l,
        width: c,
        height: d,
        left: h = -1,
        top: p = -1,
        fetch: m = e,
        menu: g = n,
        content: y,
        ...v
      } = o, [_, w] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: _,
        height: w,
        left: Math.min(h, i - _),
        top: p,
        fetch: m,
        menu: g,
        content: y ?? this._getCache(`${a}`),
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
      t.sort((l, c) => ro(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => ro(a[1], l[1]));
    let o = 0;
    return r.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, o = Math.max(o, c + l[3]);
    }), n && (o = Math.max(o, n[1] + n[3])), { blocks: t, height: o };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new fr(t, {
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
        const { cellHeight: n, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / n)), p = this.state.dropping;
        p && p[0] === d && p[1] === h || this.setState({ dropping: [d, h, o, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: n } = this.state, i = { dragging: void 0, dropping: void 0 }, r = {};
        if (e && n) {
          const { blocks: o } = this.state;
          o.forEach((a, l) => {
            const [c, d] = e === a.id ? n : this._map.get(a.id);
            (a.left !== c || a.top !== d) && (o[l] = { ...a, left: c, top: d }, r[a.id] = { left: c, top: d });
          }), i.blocks = o;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: n, top: i, width: r, height: o } = t, a = [n, i, r, o];
    n < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: n } = this.state;
    if (n && Un(t, n))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && Un(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && Un(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [n, i, r, o] = e;
    let a = i;
    if (n >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [n, i, r, o]);
        return;
      }
      a = -1;
    }
    let l = n < 0 ? 0 : n, c = a < 0 ? 0 : a, d = !1;
    const h = this.props.grid;
    for (; !d; ) {
      if (this._canPlace([l, c, r, o])) {
        d = !0;
        break;
      }
      n < 0 ? (l += 1, l + r > h && (l = 0, c += 1)) : c += 1;
    }
    this._map.set(t, [l, c, r, o]);
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
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ f(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: n * r[1], width: `${100 * r[2] / i}%`, height: n * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: p, title: m } = l, [g, y, v, _] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              _d,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: n * y,
                width: `${100 * v / i}%`,
                height: n * _,
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
ll.defaultProps = {
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
class cl extends B {
}
cl.NAME = "Dashboard";
cl.Component = ll;
var jt, qt;
class oo extends O {
  constructor(e) {
    super(e);
    R(this, jt, void 0);
    R(this, qt, void 0);
    W(this, jt, 0), W(this, qt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (N(this, jt) && cancelAnimationFrame(N(this, jt)), W(this, jt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), W(this, jt, 0);
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
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: c,
      right: d
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, y = {};
    return n === "horz" ? (g.height = i, g.width = e, y.width = this.barSize, y.left = Math.round(Math.min(h, p) * (e - y.width) / h)) : (g.width = i, g.height = e, y.height = this.barSize, y.top = Math.round(Math.min(h, p) * (e - y.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: C("scrollbar", r, {
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
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
jt = new WeakMap(), qt = new WeakMap();
const rn = /* @__PURE__ */ new Map(), on = [];
function hl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && rn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  rn.set(e, s), t != null && t.buildIn && !on.includes(e) && on.push(e);
}
function Ht(s, t) {
  hl(s, t);
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
function dl(s) {
  return rn.delete(s);
}
function vd(s) {
  if (typeof s == "string") {
    const t = rn.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function ul(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = vd(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && ul(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function wd(s = [], t = !0) {
  return t && on.length && s.unshift(...on), s != null && s.length ? ul([], s, /* @__PURE__ */ new Set()) : [];
}
function fl() {
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
function bd(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function ao(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function jn(s, t = !1) {
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
function Cd(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (w) => (typeof w == "function" && (w = w.call(s)), w = ao(w, 0), w < 1 && (w = Math.round(w * n)), w), d = {
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
  let y = !1;
  const v = [], _ = {};
  if (e.forEach((w) => {
    const { colTypes: k, onAddCol: $ } = w;
    k && Object.entries(k).forEach(([b, S]) => {
      _[b] || (_[b] = []), _[b].push(S);
    }), $ && v.push($);
  }), t.cols.forEach((w) => {
    if (w.hidden)
      return;
    const { type: k = "", name: $ } = w, b = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...w,
      type: k
    }, S = {
      name: $,
      type: k,
      setting: b,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, I = _[k];
    I && I.forEach((F) => {
      const it = typeof F == "function" ? F.call(s, b) : F;
      it && Object.assign(b, it, w);
    });
    const { fixed: P, flex: D, minWidth: E = r, maxWidth: A = o } = b, V = ao(b.width || i, i);
    S.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, S.width = bd(V < 1 ? Math.round(V * n) : V, E, A), v.forEach((F) => F.call(s, S)), m.push(S), g[S.name] = S;
    const M = P ? P === "left" ? h : p : d;
    M.list.push(S), M.totalWidth += S.width, M.width = M.totalWidth, S.flex && M.flexList.push(S), typeof b.order == "number" && (y = !0);
  }), y) {
    const w = (k, $) => (k.setting.order ?? 0) - ($.setting.order ?? 0);
    m.sort(w), h.list.sort(w), d.list.sort(w), p.list.sort(w);
  }
  return jn(h, !0), jn(p, !0), d.widthSetting = n - h.width - p.width, jn(d), {
    list: m,
    map: g,
    left: h,
    center: d,
    right: p
  };
}
function kd({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...p }) {
  var V;
  const m = {
    left: d ?? s.left,
    top: h ?? n.top,
    width: c ?? s.realWidth,
    height: e,
    ...o
  }, { align: g, border: y } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...r
  }, _ = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", s.setting.cellClass], k = (V = n.data) == null ? void 0 : V[s.name], $ = [a ?? k ?? ""], b = i ? i($, { row: n, col: s, value: k }, X) : $, S = [], I = [], P = {}, D = {};
  let E = "div";
  b == null || b.forEach((M) => {
    if (typeof M == "object" && M && !J(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const F = M.outer ? S : I;
      M.html ? F.push(/* @__PURE__ */ f("div", { className: C("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? m : v, M.style), M.className && (M.outer ? _ : w).push(M.className), M.children && F.push(M.children), M.attrs && Object.assign(M.outer ? P : D, M.attrs)), M.tagName && !M.outer && (E = M.tagName);
    } else
      I.push(M);
  });
  const A = E;
  return /* @__PURE__ */ f(
    "div",
    {
      className: C(_),
      style: m,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...p,
      ...P,
      children: [
        I.length > 0 && /* @__PURE__ */ f(A, { className: C(w), style: v, ...D, children: I }),
        S
      ]
    }
  );
}
function qn({
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
  CellComponent: d = kd,
  onRenderCell: h
}) {
  var y;
  const p = Array.isArray(s) ? s : [s], m = ((y = p[0]) == null ? void 0 : y.top) ?? 0, g = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: C("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: p.reduce((v, _, w) => {
        const k = t.length;
        return t.forEach(($, b) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: C(
                  `is-${_.index % 2 ? "odd" : "even"}-row`,
                  b ? "" : "is-first-in-row",
                  b === k - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === g - 1 ? "is-last-row" : ""
                ),
                col: $,
                row: _,
                top: _.top - m,
                height: e,
                onRenderCell: h
              },
              `${_.index}:${$.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function pl({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: d,
  onRenderCell: h,
  children: p
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ f(
    qn,
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
  r.list.length && (g = /* @__PURE__ */ f(
    qn,
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
  let y = null;
  return o.list.length && (y = /* @__PURE__ */ f(
    qn,
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
  )), /* @__PURE__ */ f(
    "div",
    {
      className: C("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        m,
        g,
        y,
        p
      ]
    }
  );
}
var kr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, T = (s, t, e) => (kr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, q = (s, t, e, n) => (kr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), lt = (s, t, e) => (kr(s, t, "access private method"), e), we, qe, ce, At, ne, st, Et, St, Ye, Hs, an, ss, zt, Ge, Ke, bi, ml, Ci, gl, ki, yl, xi, _l, Bs, $i, An, ln, Ti, Si, Ei, Mi, Xe, Fs, xr, vl, $r, wl, Ni, bl;
let Tr = class extends O {
  constructor(t) {
    super(t), L(this, bi), L(this, Ci), L(this, ki), L(this, xi), L(this, Bs), L(this, Xe), L(this, xr), L(this, $r), L(this, Ni), this.ref = U(), L(this, we, 0), L(this, qe, void 0), L(this, ce, !1), L(this, At, void 0), L(this, ne, void 0), L(this, st, []), L(this, Et, void 0), L(this, St, /* @__PURE__ */ new Map()), L(this, Ye, {}), L(this, Hs, void 0), L(this, an, []), L(this, ss, { in: !1 }), this.updateLayout = () => {
      T(this, we) && cancelAnimationFrame(T(this, we)), q(this, we, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), q(this, we, 0);
      }));
    }, L(this, zt, (e, n) => {
      n = n || e.type;
      const i = T(this, St).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Ge, (e) => {
      T(this, zt).call(this, e, `window_${e.type}`);
    }), L(this, Ke, (e) => {
      T(this, zt).call(this, e, `document_${e.type}`);
    }), L(this, An, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return T(this, st).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), L(this, ln, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Ti, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), T(this, st).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of T(this, st))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), L(this, Si, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), L(this, Ei, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return lt(this, Xe, Fs).call(this, !1);
      lt(this, Xe, Fs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), L(this, Mi, () => {
      lt(this, Xe, Fs).call(this, !1);
    }), q(this, qe, t.id ?? `dtable-${Ma(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, q(this, ne, Object.freeze(wd(t.plugins))), T(this, ne).forEach((e) => {
      var o;
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(T(this, Ye), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = e.onCreate) == null || o.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, Et)) == null ? void 0 : t.options) || T(this, At) || fl();
  }
  get plugins() {
    return T(this, st);
  }
  get layout() {
    return T(this, Et);
  }
  get id() {
    return T(this, qe);
  }
  get data() {
    return T(this, Ye);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, ss);
  }
  componentWillReceiveProps() {
    q(this, At, void 0);
  }
  componentDidMount() {
    T(this, ce) ? this.forceUpdate() : lt(this, Bs, $i).call(this), T(this, st).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", T(this, Ti)), this.on("keydown", T(this, Si));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", T(this, Ei)), this.on("mouseleave", T(this, Mi))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), q(this, Hs, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    T(this, st).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    T(this, ce) ? lt(this, Bs, $i).call(this) : T(this, st).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, Hs)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of T(this, St).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), T(this, Ge)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), T(this, Ke)) : t.removeEventListener(n, T(this, zt));
    T(this, st).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), T(this, ne).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), q(this, Ye, {}), T(this, St).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = T(this, St).get(t);
    i ? i.push(e) : (T(this, St).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, Ge)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, Ke)) : (r = this.element) == null || r.addEventListener(t, T(this, zt)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = T(this, St).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (T(this, St).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, Ge)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, Ke)) : (o = this.element) == null || o.removeEventListener(t, T(this, zt)));
  }
  emitCustomEvent(t, e) {
    T(this, zt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: p } = t;
    if (d === "up" || d === "down")
      p = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      p = 0;
    else if (d === "bottom")
      p = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (h = n + g), typeof y == "number" && (h = i + y);
    }
    const m = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (m.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (m.scrollTop = p)), Object.keys(m).length ? (this.setState(m, () => {
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
    if (!T(this, At))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      q(this, Et, void 0);
    else if (n === "options") {
      if (q(this, At, void 0), !T(this, Et))
        return;
      q(this, Et, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = u(e).closest(".dtable-cell");
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
    return K(T(this, an), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = lt(this, Ni, bl).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c } = this.options, d = {}, h = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      if (h.push(t.className), c) {
        const m = c.call(this, t);
        m && (t = m);
      }
      T(this, st).forEach((m) => {
        var y;
        const g = (y = m.beforeRender) == null ? void 0 : y.call(this, t);
        g && (t = g);
      }), d.width = t.width, d.height = t.height, d["--dtable-row-height"] = `${t.rowHeight}px`, h.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), p.push(
        lt(this, bi, ml).call(this, t),
        lt(this, Ci, gl).call(this, t),
        lt(this, ki, yl).call(this, t)
      ), t.scrollable && p.push(lt(this, xi, _l).call(this, t)), T(this, st).forEach((m) => {
        var y;
        const g = (y = m.onRender) == null ? void 0 : y.call(this, t);
        g && (g.style && Object.assign(d, g.style), g.className && h.push(g.className), g.children && p.push(g.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: T(this, qe),
        className: C(h),
        style: d,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
we = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Hs = /* @__PURE__ */ new WeakMap();
an = /* @__PURE__ */ new WeakMap();
ss = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakSet();
ml = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      pl,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: T(this, An),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Ki,
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
Ci = /* @__PURE__ */ new WeakSet();
gl = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    pl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: T(this, An),
      children: l
    },
    "body"
  );
};
ki = /* @__PURE__ */ new WeakSet();
yl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Ki,
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
xi = /* @__PURE__ */ new WeakSet();
_l = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: p } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      oo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: T(this, ln),
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
      oo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: T(this, ln),
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
$i = function() {
  var s;
  q(this, ce, !1), (s = this.options.afterRender) == null || s.call(this), T(this, st).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
An = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakSet();
Fs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = T(this, ss);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), q(this, ss, i);
};
xr = /* @__PURE__ */ new WeakSet();
vl = function() {
  if (T(this, At))
    return !1;
  const t = { ...fl(), ...T(this, ne).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return q(this, At, t), q(this, st, T(this, ne).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), q(this, an, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
$r = /* @__PURE__ */ new WeakSet();
wl = function() {
  var P, D;
  const { plugins: s } = this;
  let t = T(this, At);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((E) => {
    var V;
    const A = (V = E.beforeLayout) == null ? void 0 : V.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(e, E.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: E } = this;
    if (E)
      i = E.clientWidth;
    else {
      q(this, ce, !0);
      return;
    }
  }
  const r = Cd(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (E, A, V) => {
    var F, it;
    const M = { data: V ?? { [a]: E }, id: E, index: c.length, top: 0 };
    if (V || (M.lazy = !0), c.push(M), ((F = t.onAddRow) == null ? void 0 : F.call(this, M, A)) !== !1) {
      for (const gt of s)
        if (((it = gt.onAddRow) == null ? void 0 : it.call(this, M, A)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let E = 0; E < o; E++)
      d(`${E}`, E);
  else
    Array.isArray(o) && o.forEach((E, A) => {
      typeof E == "object" ? d(`${E[a] ?? ""}`, A, E) : d(`${E ?? ""}`, A);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const E = t.onAddRows.call(this, h);
    E && (h = E);
  }
  for (const E of s) {
    const A = (P = E.onAddRows) == null ? void 0 : P.call(this, h);
    A && (h = A);
  }
  h.forEach((E, A) => {
    p[E.id] = E, E.index = A, E.top = E.index * l;
  });
  const { header: m, footer: g } = t, y = m ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let _ = t.height, w = 0;
  const k = h.length * l, $ = y + v + k;
  if (typeof _ == "function" && (_ = _.call(this, $)), _ === "auto")
    w = $;
  else if (typeof _ == "object")
    w = Math.min(_.max, Math.max(_.min, $));
  else if (_ === "100%") {
    const { parent: E } = this;
    if (E)
      w = E.clientHeight;
    else {
      w = 0, q(this, ce, !0);
      return;
    }
  } else
    w = _;
  const b = w - y - v, S = {
    options: t,
    allRows: c,
    width: i,
    height: w,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: b,
    rowsHeightTotal: k,
    header: m,
    footer: g,
    footerGenerators: e,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, I = (D = t.onLayout) == null ? void 0 : D.call(this, S);
  I && Object.assign(S, I), s.forEach((E) => {
    if (E.onLayout) {
      const A = E.onLayout.call(this, S);
      A && Object.assign(S, A);
    }
  }), q(this, Et, S);
};
Ni = /* @__PURE__ */ new WeakSet();
bl = function() {
  (lt(this, xr, vl).call(this) || !T(this, Et)) && lt(this, $r, wl).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), p = [], { rowDataGetter: m } = this.options;
  for (let g = c; g < h; g++) {
    const y = o[g];
    y.lazy && m && (y.data = m([y.id])[0], y.lazy = !1), p.push(y);
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
Tr.addPlugin = hl;
Tr.removePlugin = dl;
class Cl extends O {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: C("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
Cl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function kl(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: Q(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Sr(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : Q(s, e);
}
function xl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), tt(e, s, n ?? e))) : n ?? e;
}
function $l(s, t) {
  const { link: e } = t.col.setting, n = kl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function Tl(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Sr(e, t, s[0])), s;
}
function Sl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function El(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = xl(n, t, s[0], i), s;
}
function Ii(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Sr(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const xd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Ii(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          Cl,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          ur,
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
    if (e && (s = El(s, t, e)), s = Sl(s, t), s = Tl(s, t), n ? s = Ii(s, t) : s = $l(s, t), i) {
      let r = s[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = Q(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, $d = Ht(xd, { buildIn: !0 }), Td = {
  html: { component: ps }
}, Sd = {
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
        component: ps,
        props: { html: Q(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Td[l], r == null ? void 0 : r[l]);
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
}, Ed = Ht(Sd);
function Md(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !Ml.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !n[c]);
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
function Nd(s) {
  return this.state.checkedRows[s] ?? !1;
}
function Ml() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function Id() {
  return Object.keys(this.state.checkedRows);
}
function Ad(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function lo(s, t, e = !1) {
  return /* @__PURE__ */ f(kn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const co = 'input[type="checkbox"],.dtable-checkbox', Dd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: lo
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
    toggleCheckRows: Md,
    isRowChecked: Nd,
    isAllRowChecked: Ml,
    getChecks: Id,
    toggleCheckable: Ad
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: lo(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: t, col: e }) {
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const d = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, r === "disabled");
      s.push(
        d,
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
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(co);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(co).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Pd = Ht(Dd);
var Nl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Nl || {});
function cn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = cn.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? cn.call(this, t.parent).level + 1 : 0, t;
}
function Rd(s) {
  return s !== void 0 ? cn.call(this, s) : this.data.nestedMap;
}
function Ld(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Il.call(this)), t) {
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
    state: { collapsedRows: { ...e } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function Il() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Al(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Al(s, t, o.children, n + 1)));
  }
  return t;
}
function Dl(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Dl(s, r, e, n);
  }), i;
}
function Pl(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Pl(s, r.parent, e, n, i);
}
const Wd = {
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
      return Object.entries(t).forEach(([i, r]) => {
        const o = Dl(this, i, r, n);
        o != null && o.parent && Pl(this, o.parent, r, n, e);
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
    getNestedInfo: Rd,
    toggleRow: Ld,
    isAllCollapsed: Il,
    getNestedRowInfo: cn
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, r;
    const { nestedMap: t } = this.data, e = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), n = t.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = e === "0" ? void 0 : e, (r = s.data) != null && r[this.options.asParentKey ?? "asParent"] && (n.children = []), t.set(s.id, n), e) {
      let o = t.get(e);
      o || (o = {
        state: "",
        level: 0
      }, t.set(e, o)), o.children || (o.children = []), o.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Al(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
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
}, Od = Ht(Wd);
function Yn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: C(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(Zi, { ...h }), e.type === "avatarBtn") {
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
const Hd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Yn
    },
    avatarBtn: {
      onRenderCell: Yn
    },
    avatarName: {
      onRenderCell: Yn
    }
  }
}, Bd = Ht(Hd, { buildIn: !0 }), Fd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, r = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        s[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: Q(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          r
        ] });
      } else
        s.push(r);
    }
    return s;
  }
}, zd = Ht(Fd, { buildIn: !0 }), Gn = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Vd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Gn(t.left.list), Gn(t.center.list), Gn(t.right.list);
  }
}, Ud = Ht(Vd), jd = {
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
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((p, m) => {
        const { index: g } = p, y = `C${g}R${h}`;
        if (n.has(y))
          return;
        const v = t.call(this, { row: c, col: p });
        if (!v)
          return;
        const _ = Math.min(v.colSpan || 1, l.length - m), w = Math.min(v.rowSpan || 1, i.length - d);
        if (_ <= 1 && w <= 1)
          return;
        let k = 0;
        for (let $ = 0; $ < _; $++) {
          k += l[m + $].realWidth;
          for (let b = 0; b < w; b++) {
            const S = `C${g + $}R${h + b}`;
            S !== y && n.add(S);
          }
        }
        e.set(y, {
          colSpan: _,
          rowSpan: w,
          width: k,
          height: o * w
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((d) => {
        a(r[d].list, l, c);
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
}, qd = Ht(jd), Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Nl,
  avatar: Bd,
  cellspan: qd,
  checkable: Pd,
  custom: Ed,
  group: Ud,
  nested: Od,
  renderDatetime: xl,
  renderDatetimeCell: El,
  renderFormat: Sr,
  renderFormatCell: Tl,
  renderHtmlCell: Ii,
  renderLink: kl,
  renderLinkCell: $l,
  renderMapCell: Sl,
  rich: $d,
  sortType: zd
}, Symbol.toStringTag, { value: "Module" }));
class ws extends B {
}
ws.NAME = "DTable";
ws.Component = Tr;
ws.definePlugin = Ht;
ws.removePlugin = dl;
ws.plugins = Yd;
var Rl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ho = (s, t, e) => (Rl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Gd = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, uo = (s, t, e, n) => (Rl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), be;
const Kd = "nav", zs = '[data-toggle="tab"]', Xd = "active";
class Ll extends at {
  constructor() {
    super(...arguments), Gd(this, be, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(zs);
    let i = t ? u(t).closest(zs) : n.filter(`.${Xd}`);
    if (!i.length && (i = e.find(zs).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), ho(this, be) && clearTimeout(ho(this, be)), uo(this, be, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), uo(this, be, 0);
    }, 10)));
  }
}
be = /* @__PURE__ */ new WeakMap();
Ll.NAME = "Tabs";
u(document).on("click.tabs.zui", zs, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${Kd}`);
  e.length && Ll.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  Qo as ActionMenu,
  ea as ActionMenuNested,
  Do as Ajax,
  Na as Avatar,
  Ia as BtnGroup,
  Ra as ColorPicker,
  at as Component,
  B as ComponentFromReact,
  Cr as ContextMenu,
  ht as CustomContent,
  Ki as CustomRender,
  ws as DTable,
  cl as Dashboard,
  Ua as DatePicker,
  qa as DatetimePicker,
  fr as Draggable,
  bt as Dropdown,
  Sa as EventBus,
  Dt as HElement,
  ps as HtmlContent,
  z as Icon,
  ia as List,
  oa as Menu,
  hu as Messager,
  rd as Modal,
  pe as ModalBase,
  wi as ModalTrigger,
  Ta as Moveable,
  Xa as Nav,
  ra as NestedList,
  Za as Pager,
  Ja as Pick,
  sl as Picker,
  ct as Popover,
  er as PopoverPanel,
  nl as Popovers,
  $a as ProgressCircle,
  O as ReactComponent,
  il as SearchBox,
  aa as SearchMenu,
  uu as Sortable,
  ts as TIME_DAY,
  Ll as Tabs,
  Va as TimePicker,
  rl as Toolbar,
  It as Tooltip,
  ol as Tree,
  br as Upload,
  al as UploadImgs,
  Yh as addDate,
  u as cash,
  C as classes,
  Be as componentsMap,
  Ec as convertBytes,
  Pc as create,
  j as createDate,
  qc as createPortal,
  U as createRef,
  Tc as deepGet,
  $c as deepGetPath,
  Jd as defineFn,
  qs as delay,
  Rc as disableScroll,
  Qd as dom,
  Po as fetchData,
  Sc as formatBytes,
  tt as formatDate,
  vu as formatDateSpan,
  Q as formatString,
  Ro as getClassList,
  Ys as getComponent,
  X as h,
  tu as hh,
  Fc as htm,
  K as i18n,
  _s as isSameDay,
  La as isSameMonth,
  mu as isSameWeek,
  oi as isSameYear,
  gu as isToday,
  _u as isTomorrow,
  J as isValidElement,
  yu as isYesterday,
  Qr as nativeEvents,
  Xs as render,
  Ko as renderCustomContent,
  Vc as renderCustomResult,
  Dc as shareData,
  ze as store,
  Lo as storeData,
  Wo as takeData
};
//# sourceMappingURL=zui.js.map
