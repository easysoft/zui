var yr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (yr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), A = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, W = (e, t, n, s) => (yr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var At = (e, t, n) => (yr(e, t, "access private method"), n);
const Kt = document, ci = window, Tl = Kt.documentElement, Be = Kt.createElement.bind(Kt), El = Be("div"), wr = Be("table"), xd = Be("tbody"), Ha = Be("tr"), { isArray: Xi, prototype: Nl } = Array, { concat: Cd, filter: No, indexOf: Rl, map: Al, push: $d, slice: Pl, some: Ro, splice: kd } = Nl, Sd = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Md = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Td = /<.+>/, Ed = /^\w+$/;
function Ao(e, t) {
  const n = Nd(t);
  return !e || !n && !Le(t) && !Y(t) ? [] : !n && Md.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Ed.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Ji {
  constructor(t, n) {
    if (!t)
      return;
    if (Ir(t))
      return t;
    let s = t;
    if (it(t)) {
      const i = n || Kt;
      if (s = Sd.test(t) && Le(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Td.test(t) ? Il(t) : Ir(i) ? i.find(t) : it(i) ? g(i).find(t) : Ao(t, i), !s)
        return;
    } else if (ze(t))
      return this.ready(t);
    (s.nodeType || s === ci) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Ji(t, n);
  }
}
const $ = Ji.prototype, g = $.init;
g.fn = g.prototype = $;
$.length = 0;
$.splice = kd;
typeof Symbol == "function" && ($[Symbol.iterator] = Nl[Symbol.iterator]);
function Ir(e) {
  return e instanceof Ji;
}
function wn(e) {
  return !!e && e === e.window;
}
function Le(e) {
  return !!e && e.nodeType === 9;
}
function Nd(e) {
  return !!e && e.nodeType === 11;
}
function Y(e) {
  return !!e && e.nodeType === 1;
}
function Rd(e) {
  return !!e && e.nodeType === 3;
}
function Ad(e) {
  return typeof e == "boolean";
}
function ze(e) {
  return typeof e == "function";
}
function it(e) {
  return typeof e == "string";
}
function ct(e) {
  return e === void 0;
}
function Jn(e) {
  return e === null;
}
function Ll(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Po(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
g.isWindow = wn;
g.isFunction = ze;
g.isArray = Xi;
g.isNumeric = Ll;
g.isPlainObject = Po;
function J(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Po(e)) {
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
g.each = J;
$.each = function(e) {
  return J(this, e);
};
$.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function hi(...e) {
  const t = Ad(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return hi(t, g, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Xi(r[o]) || Po(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), hi(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
g.extend = hi;
$.extend = function(e) {
  return hi($, e);
};
const Pd = /\S+/g;
function Zi(e) {
  return it(e) ? e.match(Pd) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = Zi(e), s = !ct(t);
  return this.each((i, r) => {
    Y(r) && J(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(e) {
  return this.toggleClass(e, !0);
};
$.removeAttr = function(e) {
  const t = Zi(e);
  return this.each((n, s) => {
    Y(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Ld(e, t) {
  if (e) {
    if (it(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Jn(n) ? void 0 : n;
      }
      return ct(t) ? this : Jn(t) ? this.removeAttr(e) : this.each((n, s) => {
        Y(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
$.attr = Ld;
$.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
$.hasClass = function(e) {
  return !!e && Ro.call(this, (t) => Y(t) && t.classList.contains(e));
};
$.get = function(e) {
  return ct(e) ? Pl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
$.eq = function(e) {
  return g(this.get(e));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function Dd(e) {
  return ct(e) ? this.get().map((t) => Y(t) || Rd(t) ? t.textContent : "").join("") : this.each((t, n) => {
    Y(n) && (n.textContent = e);
  });
}
$.text = Dd;
function jt(e, t, n) {
  if (!Y(e))
    return;
  const s = ci.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function Tt(e, t) {
  return parseInt(jt(e, t), 10) || 0;
}
function Ba(e, t) {
  return Tt(e, `border${t ? "Left" : "Top"}Width`) + Tt(e, `padding${t ? "Left" : "Top"}`) + Tt(e, `padding${t ? "Right" : "Bottom"}`) + Tt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const vr = {};
function Id(e) {
  if (vr[e])
    return vr[e];
  const t = Be(e);
  Kt.body.insertBefore(t, null);
  const n = jt(t, "display");
  return Kt.body.removeChild(t), vr[e] = n !== "none" ? n : "block";
}
function za(e) {
  return jt(e, "display") === "none";
}
function Dl(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Qi(e) {
  return it(e) ? (t, n) => Dl(n, e) : ze(e) ? e : Ir(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
$.filter = function(e) {
  const t = Qi(e);
  return g(No.call(this, (n, s) => t.call(n, s, n)));
};
function me(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return me(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Wd = /^\s*<(\w+)[^>]*>/, Od = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Fa = {
  "*": El,
  tr: xd,
  td: Ha,
  th: Ha,
  thead: wr,
  tbody: wr,
  tfoot: wr
};
function Il(e) {
  if (!it(e))
    return [];
  if (Od.test(e))
    return [Be(RegExp.$1)];
  const t = Wd.test(e) && RegExp.$1, n = Fa[t] || Fa["*"];
  return n.innerHTML = e, g(n.childNodes).detach().get();
}
g.parseHTML = Il;
$.has = function(e) {
  const t = it(e) ? (n, s) => Ao(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
$.not = function(e) {
  const t = Qi(e);
  return this.filter((n, s) => (!it(e) || Y(s)) && !t.call(s, n, s));
};
function Zt(e, t, n, s) {
  const i = [], r = ze(t), o = s && Qi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && $d.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Wl(e) {
  return e.multiple && e.options ? Zt(No.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Hd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ql.test(n.type)) {
      const i = Xi(e) ? Al.call(e, String) : Jn(e) ? [] : [String(e)];
      s ? J(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ct(e) || Jn(e) ? "" : e;
  }) : this[0] && Wl(this[0]);
}
$.val = Hd;
$.is = function(e) {
  const t = Qi(e);
  return Ro.call(this, (n, s) => t.call(n, s, n));
};
g.guid = 1;
function Rt(e) {
  return e.length > 1 ? No.call(e, (t, n, s) => Rl.call(s, t) === n) : e;
}
g.unique = Rt;
$.add = function(e, t) {
  return g(Rt(this.get().concat(g(e, t).get())));
};
$.children = function(e) {
  return me(g(Rt(Zt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return me(g(Rt(Zt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? g(e)[0] : this[0], n = e ? this : g(t).parent().children();
  return Rl.call(n, t);
};
$.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
$.siblings = function(e) {
  return me(g(Rt(Zt(this, (t) => g(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return g(Rt(Zt(this, (t) => Ao(e, t))));
};
const Bd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, zd = /^$|^module$|\/(java|ecma)script/i, Fd = ["type", "src", "nonce", "noModule"];
function Ud(e, t) {
  const n = g(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (zd.test(i.type) && Tl.contains(i)) {
      const r = Be("script");
      r.text = i.textContent.replace(Bd, ""), J(Fd, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Vd(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Ud(t, e.ownerDocument);
}
function ge(e, t, n, s, i, r, o, a) {
  return J(e, (l, h) => {
    J(g(h), (c, d) => {
      J(g(t), (u, p) => {
        const m = n ? d : p, y = n ? p : d, v = n ? c : u;
        Vd(m, v ? y.cloneNode(!0) : y, s, i, !v);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return ge(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return ge(arguments, this, !1, !1, !0);
};
function qd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ct(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    Y(s) && (t ? g(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = qd;
$.appendTo = function(e) {
  return ge(arguments, this, !0, !1, !0);
};
$.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = g(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
$.before = function() {
  return ge(arguments, this, !1, !0);
};
$.wrapAll = function(e) {
  let t = g(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
$.wrap = function(e) {
  return this.each((t, n) => {
    const s = g(e)[0];
    g(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
$.insertAfter = function(e) {
  return ge(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(e) {
  return ge(arguments, this, !0, !0);
};
$.prepend = function() {
  return ge(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(e) {
  return ge(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return g(Rt(Zt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return me(g(Rt(Zt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return me(g(Rt(Zt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return me(g(Rt(Zt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return g(Cd.apply([], Al.call(this, (t, n) => e.call(t, n, t))));
};
$.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && jt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Tl;
  });
};
$.slice = function(e, t) {
  return g(Pl.call(this, e, t));
};
const Gd = /-([a-z])/g;
function Lo(e) {
  return e.replace(Gd, (t, n) => n.toUpperCase());
}
$.ready = function(e) {
  const t = () => setTimeout(e, 0, g);
  return Kt.readyState !== "loading" ? t() : Kt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = g(t);
    n.replaceWith(n.children());
  }), this;
};
$.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + ci.pageYOffset,
    left: t.left + ci.pageXOffset
  };
};
$.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = jt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && jt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && Y(i)) {
      const r = g(i).offset();
      n.top -= r.top + Tt(i, "borderTopWidth"), n.left -= r.left + Tt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - Tt(e, "marginTop"),
    left: n.left - Tt(e, "marginLeft")
  };
};
const Ol = {
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
$.prop = function(e, t) {
  if (e) {
    if (it(e))
      return e = Ol[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
$.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Ol[e] || e];
  });
};
const Yd = /^--/;
function Do(e) {
  return Yd.test(e);
}
const _r = {}, { style: Kd } = El, jd = ["webkit", "moz", "ms"];
function Xd(e, t = Do(e)) {
  if (t)
    return e;
  if (!_r[e]) {
    const n = Lo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${jd.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in Kd)
        return _r[e] = o, !1;
    });
  }
  return _r[e];
}
const Jd = {
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
function Hl(e, t, n = Do(e)) {
  return !n && !Jd[e] && Ll(t) ? `${t}px` : t;
}
function Zd(e, t) {
  if (it(e)) {
    const n = Do(e);
    return e = Xd(e, n), arguments.length < 2 ? this[0] && jt(this[0], e, n) : e ? (t = Hl(e, t, n), this.each((s, i) => {
      Y(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
$.css = Zd;
function Bl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Qd = /^\s+|\s+$/;
function Ua(e, t) {
  const n = e.dataset[t] || e.dataset[Lo(t)];
  return Qd.test(n) ? n : Bl(JSON.parse, n);
}
function tu(e, t, n) {
  n = Bl(JSON.stringify, n), e.dataset[Lo(t)] = n;
}
function eu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Ua(this[0], s);
    return n;
  }
  if (it(e))
    return arguments.length < 2 ? this[0] && Ua(this[0], e) : ct(t) ? this : this.each((n, s) => {
      tu(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
$.data = eu;
function zl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
J([!0, !1], (e, t) => {
  J(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return wn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Le(this[0]) ? zl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Tt(this[0], `margin${n ? "Top" : "Left"}`) + Tt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return ct(s) ? void 0 : this;
    if (!arguments.length)
      return wn(this[0]) ? this[0].document.documentElement[`client${t}`] : Le(this[0]) ? zl(this[0], t) : this[0].getBoundingClientRect()[n] - Ba(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = jt(o, "boxSizing");
      o.style[n] = Hl(n, i + (a === "border-box" ? Ba(o, !e) : 0));
    });
  };
});
const Va = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!Y(n))
      return;
    const s = za(n);
    (ct(e) ? s : e) ? (n.style.display = n[Va] || "", za(n) && (n.style.display = Id(n.tagName))) : s || (n[Va] = jt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const qa = "___ce", Io = ".", Wo = { focus: "focusin", blur: "focusout" }, Fl = { mouseenter: "mouseover", mouseleave: "mouseout" }, nu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Oo(e) {
  return Fl[e] || Wo[e] || e;
}
function Ho(e) {
  const t = e.split(Io);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(e, t) {
  if (it(e)) {
    const [s, i] = Ho(e), r = Oo(s);
    if (!r)
      return this;
    const o = nu.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Kt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(Io), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Wo;
  return this.each((s, i) => {
    n && ze(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function Ul(e) {
  return e[qa] = e[qa] || {};
}
function su(e, t, n, s, i) {
  const r = Ul(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function Vl(e, t) {
  return !t || !Ro.call(t, (n) => e.indexOf(n) < 0);
}
function di(e, t, n, s, i) {
  const r = Ul(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Vl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      di(e, t, n, s, i);
}
$.off = function(e, t, n) {
  if (ct(e))
    this.each((s, i) => {
      !Y(i) && !Le(i) && !wn(i) || di(i);
    });
  else if (it(e))
    ze(t) && (n = t, t = ""), J(Zi(e), (s, i) => {
      const [r, o] = Ho(i), a = Oo(r);
      this.each((l, h) => {
        !Y(h) && !Le(h) && !wn(h) || di(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
$.remove = function(e) {
  return me(this, e).detach().off(), this;
};
$.replaceWith = function(e) {
  return this.before(e).remove();
};
$.replaceAll = function(e) {
  return g(e).replaceWith(this), this;
};
function iu(e, t, n, s, i) {
  if (!it(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return it(t) || (ct(t) || Jn(t) ? t = "" : ct(n) ? (n = t, t = "") : (s = n, n = t, t = "")), ze(s) || (s = n, n = void 0), s ? (J(Zi(e), (r, o) => {
    const [a, l] = Ho(o), h = Oo(a), c = a in Fl, d = a in Wo;
    h && this.each((u, p) => {
      if (!Y(p) && !Le(p) && !wn(p))
        return;
      const m = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Vl(l, y.namespace.split(Io)) || !t && (d && (y.target !== p || y.___ot === h) || c && y.relatedTarget && p.contains(y.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let _ = y.target;
          for (; !Dl(_, t); )
            if (_ === p || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return v;
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
        const w = s.call(v, y, y.___td);
        i && di(p, h, l, t, m), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      m.guid = s.guid = s.guid || g.guid++, su(p, h, l, t, m);
    });
  }), this) : this;
}
$.on = iu;
function ru(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
$.one = ru;
const ou = /\r?\n/g;
function au(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(ou, `\r
`))}`;
}
const lu = /file|reset|submit|button|image/i, ql = /radio|checkbox/i;
$.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    J(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || lu.test(i.type) || ql.test(i.type) && !i.checked)
        return;
      const r = Wl(i);
      if (!ct(r)) {
        const o = Xi(r) ? r : [r];
        J(o, (a, l) => {
          e += au(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = g;
function cu(e, t) {
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
function hu(e, t, n) {
  try {
    const s = cu(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function rt(e, ...t) {
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
var Bo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Bo || {});
function du(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Bo[n]).toFixed(t) + n);
}
const uu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Bo[s];
};
let zo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), re;
function fu() {
  return zo;
}
function pu(e) {
  zo = e.toLowerCase();
}
function Gl(e, t) {
  re || (re = {}), typeof e == "string" && (e = { [e]: t ?? {} }), g.extend(!0, re, e);
}
function tt(e, t, n, s, i, r) {
  Array.isArray(e) ? re && e.unshift(re) : e = re ? [re, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || zo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === re ? `${r}.${t}` : t;
    if (a = hu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? rt(a, ...Array.isArray(n) ? n : [n]) : a;
}
function mu(e, t, n, s) {
  return tt(void 0, e, t, n, s);
}
tt.addLang = Gl;
tt.getLang = mu;
tt.getCode = fu;
tt.setCode = pu;
Gl({
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
function Yl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Yl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const S = (...e) => Yl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
g.classes = S;
g.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = g(s);
    e === !0 ? i.attr("class", S(i.attr("class"), ...t)) : i.addClass(S(e, ...t));
  });
};
const Sn = /* @__PURE__ */ new WeakMap();
function Kl(e, t, n) {
  const s = Sn.has(e), i = s ? Sn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, g(e).dataset(), i), Sn.set(e, i)) : Sn.delete(e);
}
function gu(e, t) {
  let n = Sn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, g(e).dataset(), n)), t === void 0 ? n : n[t];
}
g.fn.dataset = g.fn.data;
g.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? gu(this[0], t) : this.each((s, i) => Kl(i, t, n));
};
g.fn.removeData = function(e = null) {
  return this.each((t, n) => Kl(n, e));
};
g.fn._attr = g.fn.attr;
g.fn.extend({
  attr(...e) {
    const [t, n] = e;
    return !e.length || e.length === 1 && typeof t == "string" ? this._attr.apply(this, e) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(t) : this._attr(t, n);
  }
});
g.Event = (e, t) => {
  const [n, ...s] = e.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = t, i;
};
const ui = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), br = /* @__PURE__ */ new Map();
function yu(e, t, n) {
  const { zui: s } = window;
  br.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && br.set(r.toLowerCase(), s[r]);
  });
  const i = br.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
g(() => {
  g("[data-zui]").each(function() {
    const t = g(this).dataset(), n = t.zui;
    delete t.zui, yu(n, this, t);
  });
});
function Fo(e, t) {
  const n = g(e)[0];
  if (!n)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = n.getBoundingClientRect();
  if (!s) {
    const { innerHeight: m, innerWidth: y } = window, { clientHeight: v, clientWidth: w } = document.documentElement;
    s = { left: 0, top: 0, width: y || w, height: m || v };
  }
  const { left: l, top: h, width: c, height: d } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= h && i + o <= c && r + a <= d;
  const u = i <= c && i + o >= l;
  return r <= d && r + a >= h && u;
}
g.fn.isVisible = function(e) {
  return this.each((t, n) => {
    Fo(n, e);
  });
};
function Uo(e, t, n = !1) {
  const s = g(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${g.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    Uo(s, r.innerHTML), r.remove();
  });
}
g.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
g.fn.runJS = function(e) {
  return this.each((t, n) => {
    Uo(n, e);
  });
};
function jl(e, t) {
  const n = g(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && Fo(o, { viewport: o.getBoundingClientRect() }) || o.scrollIntoView(i);
  }), n;
}
g.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    jl(n, e);
  });
};
const Np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Fo,
  runJS: Uo,
  scrollIntoView: jl
}, Symbol.toStringTag, { value: "Module" }));
var tr, F, Xl, Q, ke, Ga, Jl, Wr, fi = {}, Zl = [], wu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vo = Array.isArray;
function he(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ql(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? tr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return zs(e, o, s, i, null);
}
function zs(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Xl };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function K() {
  return { current: null };
}
function _n(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function Zn(e, t) {
  if (t == null)
    return e.__ ? Zn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Zn(e) : null;
}
function tc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return tc(e);
  }
}
function Ya(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !pi.__r++ || Ga !== F.debounceRendering) && ((Ga = F.debounceRendering) || Jl)(pi);
}
function pi() {
  var e, t, n, s, i, r, o, a;
  for (ke.sort(Wr); e = ke.shift(); )
    e.__d && (t = ke.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = he({}, r)).__v = r.__v + 1, qo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Zn(r), r.__h), rc(s, r), r.__e != o && tc(r)), ke.length > t && ke.sort(Wr));
  pi.__r = 0;
}
function ec(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, p, m, y, v, w = s && s.__k || Zl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? zs(null, p, null, null, p) : Vo(p) ? zs(_n, { children: p }, null, null, null) : p.__b > 0 ? zs(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
      if (p.__ = n, p.__b = n.__b + 1, (u = w[c]) === null || u && p.key == u.key && p.type === u.type)
        w[c] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((u = w[d]) && p.key == u.key && p.type === u.type) {
            w[d] = void 0;
            break;
          }
          u = null;
        }
      qo(e, p, u = u || fi, i, r, o, a, l, h), m = p.__e, (d = p.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, p), v.push(d, p.__c || m, p)), m != null ? (y == null && (y = m), typeof p.type == "function" && p.__k === u.__k ? p.__d = l = nc(p, l, e) : l = sc(e, p, u, w, m, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = Zn(u));
    }
  for (n.__e = y, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = ic(s).nextSibling), ac(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      oc(v[c], v[++c], v[++c]);
}
function nc(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? nc(s, t, n) : sc(n, s, s, i, s.__e, t));
  return t;
}
function sc(e, t, n, s, i, r) {
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
function ic(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = ic(n)))
        return s;
  }
  return null;
}
function vu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || mi(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || mi(e, r, t[r], n[r], s);
}
function Ka(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || wu.test(t) ? n : n + "px";
}
function mi(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Ka(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Ka(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? Xa : ja, r) : e.removeEventListener(t, r ? Xa : ja, r);
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
function ja(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function Xa(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function qo(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, p, m, y, v, w, _, b, k, T, M, R, P = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = F.__b) && h(t);
  try {
    t:
      if (typeof P == "function") {
        if (v = t.props, w = (h = P.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? t.__c = c = new P(v, _) : (t.__c = c = new z(v, _), c.constructor = P, c.render = bu), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = he({}, c.__s)), he(c.__s, P.getDerivedStateFromProps(v, c.__s))), u = c.props, p = c.state, c.__v = t, d)
          P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && v !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), b = 0; b < c._sb.length; b++)
              c.__h.push(c._sb[b]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, p, m);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, k = F.__r, T = 0, "prototype" in P && P.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++T < 25);
        c.state = c.__s, c.getChildContext != null && (s = he(he({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (m = c.getSnapshotBeforeUpdate(u, p)), ec(e, Vo(R = h != null && h.type === _n && h.key == null ? h.props.children : h) ? R : [R], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = _u(n.__e, t, n, s, i, r, o, l);
    (h = F.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), F.__e(O, t, n);
  }
}
function rc(e, t) {
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
function _u(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, p = t.type, m = 0;
  if (p === "svg" && (i = !0), r != null) {
    for (; m < r.length; m++)
      if ((l = r[m]) && "setAttribute" in l == !!p && (p ? l.localName === p : l.nodeType === 3)) {
        e = l, r[m] = null;
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
    if (r = r && tr.call(e.childNodes), h = (d = n.props || fi).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, m = 0; m < e.attributes.length; m++)
          d[e.attributes[m].name] = e.attributes[m].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (vu(e, u, d, i, a), c)
      t.__k = [];
    else if (ec(e, Vo(m = t.props.children) ? m : [m], t, n, s, i && p !== "foreignObject", r, o, r ? r[0] : n.__k && Zn(n, 0), a), r != null)
      for (m = r.length; m--; )
        r[m] != null && Ql(r[m]);
    a || ("value" in u && (m = u.value) !== void 0 && (m !== e.value || p === "progress" && !m || p === "option" && m !== d.value) && mi(e, "value", m, d.value, !1), "checked" in u && (m = u.checked) !== void 0 && m !== e.checked && mi(e, "checked", m, d.checked, !1));
  }
  return e;
}
function oc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    F.__e(s, n);
  }
}
function ac(e, t, n) {
  var s, i;
  if (F.unmount && F.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || oc(s, null, t)), (s = e.__c) != null) {
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
      s[i] && ac(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ql(e.__e), e.__ = e.__e = e.__d = void 0;
}
function bu(e, t, n) {
  return this.constructor(e, n);
}
function Qn(e, t, n) {
  var s, i, r;
  F.__ && F.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], qo(t, e = (!s && n || t).__k = q(_n, null, [e]), i || fi, fi, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? tr.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), rc(r, e);
}
tr = Zl.slice, F = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Xl = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof e == "function" && (e = e(he({}, n), this.props)), e && he(n, e), e != null && this.__v && (t && this._sb.push(t), Ya(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ya(this));
}, z.prototype.render = _n, ke = [], Jl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, pi.__r = 0;
var lc = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, lc(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, Ja = /* @__PURE__ */ new Map();
function xu(e) {
  var t = Ja.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Ja.set(this, t)), (t = lc(this, t.get(e) || (t.set(e, t = function(n) {
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
const Rp = xu.bind(q);
function cc(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return q(t, { ref: o, class: S(n), style: s, ...a, ...r }, i);
}
var Cu = 0;
function f(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Cu, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(h), h;
}
var is;
class Go extends z {
  constructor() {
    super(...arguments);
    A(this, is, K());
  }
  componentDidMount() {
    this.props.executeScript && g(C(this, is).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ f(cc, { forwardRef: C(this, is), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
is = new WeakMap();
function $u(e) {
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
  } = e, d = [n], u = { ...s }, p = [], m = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(o, y, p, ...r));
      else {
        const w = y.call(o, p, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(y);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Q(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? p.push(
        /* @__PURE__ */ f("div", { className: S(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? m.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && p.push(w.children), w.attrs && Object.assign(c, w.attrs)) : p.push(w));
    });
  }), m.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: S(d),
    style: u,
    ...c
  }, p];
}
function Yo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = $u(t);
  return q(e, n, ...s);
}
function hc(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => hc(s, t, n)) : Q(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ f(Go, { ...e }) : /* @__PURE__ */ f(cc, { ...e }) : e;
}
function er(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = hc(t, n, s);
  return i == null || typeof i == "boolean" ? null : Q(i) ? i : /* @__PURE__ */ f(_n, { children: i });
}
function et(e) {
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
    return i.push(r), Object.assign(s, o), /* @__PURE__ */ f(et, { className: S(i), ...s });
  }
  return /* @__PURE__ */ f("i", { className: S(i), ...s });
}
function ku(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Su(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Qn(null, t._temp), t._temp = null, t._container = null;
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
  }), Qn(
    q(ku, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Mu(e, t) {
  const n = q(Su, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var dc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ue = (e, t, n) => (dc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ns = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (dc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), _e, Mn, Fs, Us;
const uc = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    Ns(this, _e, void 0), Ns(this, Mn, void 0), Ns(this, Fs, void 0), Ns(this, Us, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = g(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = g.guid++;
    if (Ve(this, Fs, a), Ve(this, Mn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ve(this, _e, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ve(this, Us, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ue(this, Us);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ue(this, Mn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ue(this, _e);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ue(this, Fs);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return g(this.element);
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
    Ve(this, _e, void 0), Ve(this, Mn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && g.extend(Ue(this, _e), e), Ue(this, _e);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = g.Event(e);
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
    const n = g(e);
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
    return g(e || document).find(`[${n}]`).each((i, r) => {
      if (t) {
        const a = g(r).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const o = g(r).data(this.KEY);
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
    return e === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(g(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    g.fn.extend({
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
let pt = uc;
_e = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
pt.DEFAULT = {};
pt.NAME = uc.name;
pt.MULTI_INSTANCE = !1;
class G extends pt {
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
    Qn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Tu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: S(t),
    style: s,
    ...i
  }, n);
}
function fc({
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
  checked: m,
  onClick: y,
  ...v
}) {
  const w = [
    typeof m == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${m ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(et, { icon: h }),
    /* @__PURE__ */ f("span", { className: "text", children: c }),
    /* @__PURE__ */ f(er, { content: i }),
    s,
    /* @__PURE__ */ f(et, { icon: u })
  ];
  return q(t, {
    className: S(n, { disabled: a, active: l }),
    title: p,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...v,
    ...r
  }, ...w);
}
function Eu({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  content: r,
  style: o,
  onClick: a
}) {
  return q(e, {
    className: S(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ f(er, { content: r }), i);
}
function Nu({
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
    className: S(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Ru({ type: e, ...t }) {
  return /* @__PURE__ */ f(Yo, { ...t });
}
function pc({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return q(e, {
    className: S(t),
    style: i,
    ...r
  }, /* @__PURE__ */ f(er, { content: s }), n);
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
    const e = { ...this.props }, t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: s, onClickItem: i, itemRenderProps: r } = e;
    let o = { ...t };
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = S(o.className), r && (o = r(o)), o;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const m = i[t.type || "item"];
        if (m)
          return /* @__PURE__ */ f(m, { ...s });
      } else if (typeof i == "function") {
        const m = i.call(this, s, q);
        if (Q(m))
          return m;
        typeof m == "object" && Object.assign(s, m);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: S("action-menu-item", `${this.name}-html`, h, u.className),
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
      className: S(h),
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
        className: S(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
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
    return /* @__PURE__ */ f(p, { class: S(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Fe = Or;
Fe.ItemComponents = {
  divider: Tu,
  item: fc,
  heading: Eu,
  space: Nu,
  custom: Ru,
  basic: pc
};
Fe.ROOT_TAG = "menu";
Fe.NAME = "action-menu";
class mc extends G {
}
mc.NAME = "ActionMenu";
mc.Component = Fe;
function Au({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ f(fc, { ...s });
}
var gc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, gt = (e, t, n) => (gc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Pu = (e, t, n, s) => (gc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Vs, Lt, Tn;
let nr = class extends Fe {
  constructor(t) {
    super(t), xr(this, Vs, /* @__PURE__ */ new Set()), xr(this, Lt, void 0), xr(this, Tn, (n, s, i) => {
      g(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Pu(this, Lt, t.nestedShow === void 0), gt(this, Lt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: d, itemRenderProps: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: gt(this, Lt) ? this.state.nestedShow : i,
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
    gt(this, Vs).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: gt(this, Tn).bind(this, r, !0),
        onMouseLeave: gt(this, Tn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        gt(this, Tn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = gt(this, Lt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!gt(this, Lt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...gt(this, Vs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    gt(this, Lt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    gt(this, Lt) && this.setState({ nestedShow: !1 });
  }
};
Vs = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
nr.ItemComponents = {
  item: Au
};
class yc extends G {
}
yc.NAME = "ActionMenuNested";
yc.Component = nr;
let De = class extends nr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = S(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
De.NAME = "menu";
class wc extends G {
}
wc.NAME = "Menu";
wc.Component = De;
class st extends z {
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
      icon: m,
      text: y,
      trailingIcon: v,
      caret: w,
      square: _,
      rounded: b = !0,
      hint: k,
      ...T
    } = this.props, M = t || (a ? "a" : "button"), R = y == null || typeof y == "string" && !y.length || d && !p, P = w && R && !m && !v && !o && !d;
    return q(
      M,
      {
        className: S("btn", n, r, {
          "btn-caret": P,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !P && !o && R : _
        }, i ? `size-${i}` : "", typeof b == "string" ? b : { rounded: b }),
        title: k,
        [M === "a" ? "href" : "data-url"]: a,
        [M === "a" ? "target" : "data-target"]: l,
        type: M === "button" ? s : void 0,
        ...T
      },
      d ? /* @__PURE__ */ f(et, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(et, { icon: m }),
      R ? null : /* @__PURE__ */ f("span", { className: "text", children: d ? p : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ f(et, { icon: v }),
      d ? null : w ? /* @__PURE__ */ f("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Lu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(st, { type: n, ...s });
}
function xs(e) {
  return e.split("-")[1];
}
function Ko(e) {
  return e === "y" ? "height" : "width";
}
function Ee(e) {
  return e.split("-")[0];
}
function Cs(e) {
  return ["top", "bottom"].includes(Ee(e)) ? "x" : "y";
}
function Za(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Cs(t), l = Ko(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Ee(t)) {
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
  switch (xs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Du = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Za(h, s, l), u = s, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: b, data: k, reset: T } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [v]: { ...p[v], ...k } }, T && m <= 50 && (m++, typeof T == "object" && (T.placement && (u = T.placement), T.rects && (h = T.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : T.rects), { x: c, y: d } = Za(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function $s(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function gi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function _c(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = $s(t, e), m = vc(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = gi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = gi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + m.top) / b.y, bottom: (k.bottom - v.bottom + m.bottom) / b.y, left: (v.left - k.left + m.left) / b.x, right: (k.right - v.right + m.right) / b.x };
}
const Hr = Math.min, Iu = Math.max;
function Br(e, t, n) {
  return Iu(e, Hr(t, n));
}
const zr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = $s(e, t) || {};
  if (l == null)
    return {};
  const c = vc(h), d = { x: n, y: s }, u = Cs(i), p = Ko(u), m = await o.getDimensions(l), y = u === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", b = r.reference[p] + r.reference[u] - d[u] - r.floating[p], k = d[u] - r.reference[u], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let M = T ? T[_] : 0;
  M && await (o.isElement == null ? void 0 : o.isElement(T)) || (M = a.floating[_] || r.floating[p]);
  const R = b / 2 - k / 2, P = M / 2 - m[p] / 2 - 1, O = Hr(c[v], P), x = Hr(c[w], P), N = O, D = M - m[p] - x, L = M / 2 - m[p] / 2 + R, H = Br(N, L, D), I = xs(i) != null && L != H && r.reference[p] / 2 - (L < N ? O : x) - m[p] / 2 < 0 ? L < N ? N - L : D - L : 0;
  return { [u]: d[u] - I, data: { [u]: H, centerOffset: L - H + I } };
} }), Wu = ["top", "right", "bottom", "left"];
Wu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ou = { left: "right", right: "left", bottom: "top", top: "bottom" };
function yi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ou[t]);
}
function Hu(e, t, n) {
  n === void 0 && (n = !1);
  const s = xs(e), i = Cs(e), r = Ko(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = yi(o)), { main: o, cross: yi(o) };
}
const Bu = { start: "end", end: "start" };
function Cr(e) {
  return e.replace(/start|end/g, (t) => Bu[t]);
}
const sr = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...y } = $s(e, t), v = Ee(s), w = Ee(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (w || !m ? [yi(o)] : function(N) {
      const D = yi(N);
      return [Cr(N), D, Cr(D)];
    }(o));
    d || p === "none" || b.push(...function(N, D, L, H) {
      const I = xs(N);
      let U = function(at, bn, Ts) {
        const xn = ["left", "right"], Es = ["right", "left"], gr = ["top", "bottom"], bd = ["bottom", "top"];
        switch (at) {
          case "top":
          case "bottom":
            return Ts ? bn ? Es : xn : bn ? xn : Es;
          case "left":
          case "right":
            return bn ? gr : bd;
          default:
            return [];
        }
      }(Ee(N), L === "start", H);
      return I && (U = U.map((at) => at + "-" + I), D && (U = U.concat(U.map(Cr)))), U;
    }(o, m, p, _));
    const k = [o, ...b], T = await _c(t, y), M = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(T[v]), c) {
      const { main: N, cross: D } = Hu(s, r, _);
      M.push(T[N], T[D]);
    }
    if (R = [...R, { placement: s, overflows: M }], !M.every((N) => N <= 0)) {
      var P, O;
      const N = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, D = k[N];
      if (D)
        return { data: { index: N, overflows: R }, reset: { placement: D } };
      let L = (O = R.filter((H) => H.overflows[0] <= 0).sort((H, I) => H.overflows[1] - I.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!L)
        switch (u) {
          case "bestFit": {
            var x;
            const H = (x = R.map((I) => [I.placement, I.overflows.filter((U) => U > 0).reduce((U, at) => U + at, 0)]).sort((I, U) => I[1] - U[1])[0]) == null ? void 0 : x[0];
            H && (L = H);
            break;
          }
          case "initialPlacement":
            L = o;
        }
      if (s !== L)
        return { reset: { placement: L } };
    }
    return {};
  } };
}, ir = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Ee(a), u = xs(a), p = Cs(a) === "x", m = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, v = $s(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: b } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: w * m } : { x: w * m, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function zu(e) {
  return e === "x" ? "y" : "x";
}
const wi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = $s(e, t), h = { x: n, y: s }, c = await _c(t, l), d = Cs(Ee(i)), u = zu(d);
    let p = h[d], m = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      p = Br(p + c[d === "y" ? "top" : "left"], p, p - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      m = Br(m + c[u === "y" ? "top" : "left"], m, m - c[v]);
    }
    const y = a.fn({ ...t, [d]: p, [u]: m });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function dt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bt(e) {
  return dt(e).getComputedStyle(e);
}
function bc(e) {
  return e instanceof dt(e).Node;
}
function ue(e) {
  return bc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ct(e) {
  return e instanceof dt(e).HTMLElement;
}
function Vt(e) {
  return e instanceof dt(e).Element;
}
function Qa(e) {
  return typeof ShadowRoot < "u" && (e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot);
}
function ts(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Fu(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function Fr(e) {
  const t = jo(), n = bt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function jo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function rr(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const Ur = Math.min, nn = Math.max, vi = Math.round, Rs = Math.floor, Ie = (e) => ({ x: e, y: e });
function xc(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Ct(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = vi(n) !== r || vi(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function Xo(e) {
  return Vt(e) ? e : e.contextElement;
}
function sn(e) {
  const t = Xo(e);
  if (!Ct(t))
    return Ie(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = xc(t);
  let o = (r ? vi(n.width) : n.width) / s, a = (r ? vi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const tl = Ie(0);
function Cc(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !jo())
    return tl;
  const r = e ? dt(e) : window;
  return !n || t && n !== r ? tl : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function We(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Xo(e);
  let o = Ie(1);
  t && (s ? Vt(s) && (o = sn(s)) : o = sn(e));
  const a = Cc(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = dt(r), p = s && Vt(s) ? dt(s) : s;
    let m = u.frameElement;
    for (; m && s && p !== u; ) {
      const y = sn(m), v = m.getBoundingClientRect(), w = getComputedStyle(m), _ = v.left + (m.clientLeft + parseFloat(w.paddingLeft)) * y.x, b = v.top + (m.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += b, m = dt(m).frameElement;
    }
  }
  return gi({ width: c, height: d, x: l, y: h });
}
function qt(e) {
  return ((bc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function or(e) {
  return Vt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function $c(e) {
  return We(qt(e)).left + or(e).scrollLeft;
}
function vn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Qa(e) && e.host || qt(e);
  return Qa(t) ? t.host : t;
}
function kc(e) {
  const t = vn(e);
  return rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(t) && ts(t) ? t : kc(t);
}
function _i(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = kc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = dt(s);
  return i ? t.concat(r, r.visualViewport || [], ts(s) ? s : []) : t.concat(s, _i(s));
}
function el(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = dt(i), a = qt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const p = jo();
        (!p || p && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = qt(i), o = or(i), a = i.ownerDocument.body, l = nn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = nn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + $c(i);
      const d = -o.scrollTop;
      return bt(a).direction === "rtl" && (c += nn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(qt(e));
  else if (Vt(t))
    s = function(i, r) {
      const o = We(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = Ct(i) ? sn(i) : Ie(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Cc(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return gi(s);
}
function Sc(e, t) {
  const n = vn(e);
  return !(n === t || !Vt(n) || rr(n)) && (bt(n).position === "fixed" || Sc(n, t));
}
function nl(e, t) {
  return Ct(e) && bt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function sl(e, t) {
  const n = dt(e);
  if (!Ct(e))
    return n;
  let s = nl(e, t);
  for (; s && Fu(s) && bt(s).position === "static"; )
    s = nl(s, t);
  return s && (ue(s) === "html" || ue(s) === "body" && bt(s).position === "static" && !Fr(s)) ? n : s || function(i) {
    let r = vn(i);
    for (; Ct(r) && !rr(r); ) {
      if (Fr(r))
        return r;
      r = vn(r);
    }
    return null;
  }(e) || n;
}
function Uu(e, t, n) {
  const s = Ct(t), i = qt(t), r = n === "fixed", o = We(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ie(0);
  if (s || !s && !r)
    if ((ue(t) !== "body" || ts(i)) && (a = or(t)), Ct(t)) {
      const h = We(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = $c(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Vu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = _i(h).filter((v) => Vt(v) && ue(v) !== "body"), p = null;
    const m = bt(h).position === "fixed";
    let y = m ? vn(h) : h;
    for (; Vt(y) && !rr(y); ) {
      const v = bt(y), w = Fr(y);
      w || v.position !== "fixed" || (p = null), (m ? !w && !p : !w && v.position === "static" && p && ["absolute", "fixed"].includes(p.position) || ts(y) && !w && Sc(h, y)) ? u = u.filter((_) => _ !== y) : p = v, y = vn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = el(t, c, i);
    return h.top = nn(d.top, h.top), h.right = Ur(d.right, h.right), h.bottom = Ur(d.bottom, h.bottom), h.left = nn(d.left, h.left), h;
  }, el(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Ct(n), r = qt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Ie(1);
  const l = Ie(0);
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || ts(r)) && (o = or(n)), Ct(n))) {
    const h = We(n);
    a = sn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Vt, getDimensions: function(e) {
  return xc(e);
}, getOffsetParent: sl, getDocumentElement: qt, getScale: sn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || sl, r = this.getDimensions;
  return { reference: Uu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => bt(e).direction === "rtl" };
function Jo(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Xo(e), c = i || r ? [...h ? _i(h) : [], ..._i(t)] : [];
  c.forEach((v) => {
    i && v.addEventListener("scroll", n, { passive: !0 }), r && v.addEventListener("resize", n);
  });
  const d = h && a ? function(v, w) {
    let _, b = null;
    const k = qt(v);
    function T() {
      clearTimeout(_), b && b.disconnect(), b = null;
    }
    return function M(R, P) {
      R === void 0 && (R = !1), P === void 0 && (P = 1), T();
      const { left: O, top: x, width: N, height: D } = v.getBoundingClientRect();
      if (R || w(), !N || !D)
        return;
      const L = { rootMargin: -Rs(x) + "px " + -Rs(k.clientWidth - (O + N)) + "px " + -Rs(k.clientHeight - (x + D)) + "px " + -Rs(O) + "px", threshold: nn(0, Ur(1, P)) || 1 };
      let H = !0;
      function I(U) {
        const at = U[0].intersectionRatio;
        if (at !== P) {
          if (!H)
            return M();
          at ? M(!1, at) : _ = setTimeout(() => {
            M(!1, 1e-7);
          }, 100);
        }
        H = !1;
      }
      try {
        b = new IntersectionObserver(I, { ...L, root: k.ownerDocument });
      } catch {
        b = new IntersectionObserver(I, L);
      }
      b.observe(v);
    }(!0), T;
  }(h, n) : null;
  let u, p = -1, m = null;
  o && (m = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), h && !l && m.observe(h), m.observe(t));
  let y = l ? We(e) : null;
  return l && function v() {
    const w = We(e);
    !y || w.x === y.x && w.y === y.y && w.width === y.width && w.height === y.height || n(), y = w, u = requestAnimationFrame(v);
  }(), n(), () => {
    c.forEach((v) => {
      i && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, l && cancelAnimationFrame(u);
  };
}
const ar = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Vu, ...n }, r = { ...i.platform, _c: s };
  return Du(e, t, { ...i, platform: r });
};
var ln, Ml;
let qu = (Ml = class extends De {
  constructor() {
    super(...arguments);
    A(this, ln, 0);
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
    const n = this.ref.current, s = n == null ? void 0 : n.parentElement;
    !n || !s || ar(s, n, {
      placement: "right-start",
      middleware: [sr(), wi(), ir(1)]
    }).then(({ x: i, y: r }) => {
      g(n).css({
        left: i,
        top: r
      });
    });
  }
  getNestedMenuProps(n) {
    return {
      ...super.getNestedMenuProps(n),
      popup: !0
    };
  }
  afterRender(n) {
    super.afterRender(n), this.props.controlledMenu && (this.layout(), W(this, ln, window.setTimeout(this.layout.bind(this), 100)));
  }
  beforeRender() {
    const n = super.beforeRender();
    return n.className = S(n.className, "popup"), n;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), C(this, ln) && clearTimeout(C(this, ln));
  }
}, ln = new WeakMap(), Ml);
var Zo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Pt = (e, t, n) => (Zo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, As = (e, t, n, s) => (Zo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), il = (e, t, n) => (Zo(e, t, "access private method"), n), ne, En, qs, Gs, Vr, Mc, qr, Tc;
const $r = "show", Gu = '[data-toggle="contextmenu"]';
class ot extends pt {
  constructor() {
    super(...arguments), qe(this, Vr), qe(this, qr), qe(this, ne, void 0), qe(this, En, void 0), qe(this, qs, void 0), qe(this, Gs, void 0);
  }
  get isShown() {
    return Pt(this, ne) && g(Pt(this, ne)).hasClass($r);
  }
  get menu() {
    return Pt(this, ne) || this.ensureMenu();
  }
  get trigger() {
    return Pt(this, qs) || this.element;
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
    return this.isShown || (As(this, qs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (g(this.menu).addClass($r), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Pt(this, Gs)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (g(Pt(this, ne)).removeClass($r), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Pt(this, ne)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = g(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = g(document).find(i)), !(s != null && s.length)) {
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
    }), As(this, ne, s[0]), s[0];
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
    As(this, Gs, Jo(n, s, () => {
      ar(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        g(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = il(this, Vr, Mc).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: d } = o.arrow;
          g(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...il(this, qr, Tc).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Qn(q(qu, t), this.menu), !0);
  }
  getPopperElement() {
    return Pt(this, En) || As(this, En, {
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
    }), Pt(this, En);
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
ne = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
Vr = /* @__PURE__ */ new WeakSet();
Mc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
qr = /* @__PURE__ */ new WeakSet();
Tc = function(e) {
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
ot.MENU_CLASS = "contextmenu";
ot.NAME = "ContextMenu";
ot.MULTI_INSTANCE = !0;
ot.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
g(document).on(`contextmenu${ot.NAMESPACE}`, (e) => {
  const t = g(e.target);
  if (t.closest(`.${ot.MENU_CLASS}`).length)
    return;
  const n = t.closest(Gu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${ot.KEY}:options`, i = n.data(s), r = ot.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${ot.NAMESPACE}`, ot.clear.bind(ot));
var Qo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Nn = (e, t, n) => (Qo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Gr = (e, t, n, s) => (Qo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Yu = (e, t, n) => (Qo(e, t, "access private method"), n), Un, Rn, bi, Yr, Ec;
const rl = '[data-toggle="dropdown"]', Nc = class extends ot {
  constructor() {
    super(...arguments), Ps(this, Yr), Ps(this, Un, !1), Ps(this, Rn, 0), this.hideLater = () => {
      Nn(this, bi).call(this), Gr(this, Rn, window.setTimeout(this.hide.bind(this), 100));
    }, Ps(this, bi, () => {
      clearTimeout(Nn(this, Rn)), Gr(this, Rn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Nc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Nn(this, Un) && this.isHover && Yu(this, Yr, Ec).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Nn(this, Un) && g(this.menu).off(this.constructor.NAMESPACE), super.destroy();
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
      const t = this.getArrowSize(), n = g('<div class="arrow-el" />').css({
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
        this.arrowEl && g(this.menu).find(".menu").each((s, i) => {
          g(i).find(".arrow-el").length === 0 && g(i).parent().hasClass("dropdown-menu") && g(i).append(this.arrowEl);
        }), t == null || t(...n);
      };
    }
    return e;
  }
};
let Gt = Nc;
Un = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakSet();
Ec = function() {
  g(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Nn(this, bi)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Gr(this, Un, !0);
};
Gt.MENU_CLASS = "dropdown-menu";
Gt.NAME = "Dropdown";
Gt.DEFAULT = {
  ...ot.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const Ls = `${Gt.KEY}:options`;
g(document).on("click", function(e) {
  const t = g(e.target).closest(rl).not(":disabled,.disabled");
  if (!t.length) {
    Gt.clear({ event: e });
    return;
  }
  const n = t.data(Ls), s = Gt.ensure(t, n);
  n || t.data(Ls, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = g(e.target).closest(rl);
  if (!t.length)
    return;
  const n = t.data(Ls), s = Gt.ensure(t, n);
  n || t.data(Ls, s.options), s.isHover && s.show();
});
let Ds = 0;
window.addEventListener("scroll", (e) => {
  Ds && clearTimeout(Ds), Ds = window.setTimeout(() => {
    Gt.clear({ event: e }), Ds = 0;
  }, 50);
}, !0);
var rs, cn;
class Ku extends z {
  constructor(n) {
    var s;
    super(n);
    A(this, rs, void 0);
    A(this, cn, K());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, cn);
  }
  get triggerElement() {
    return C(this, cn).current;
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
    }), W(this, rs, Gt.ensure(this.triggerElement, {
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
    (n = C(this, rs)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: S("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, cn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ f("div", { ...s, children: n });
  }
}
rs = new WeakMap(), cn = new WeakMap();
class ju extends Ku {
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
    return s.caret = i, /* @__PURE__ */ f(st, { ...s });
  }
}
function Rc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(ju, { type: n, ...s });
}
let Ac = class extends z {
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
    return /* @__PURE__ */ f(st, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
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
        className: S("btn-group", i ? `size-${i}` : "", n),
        ...p,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Xu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(Ac, { type: n, ...s });
}
let ft = class extends Fe {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = S(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: S(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ f(t, { ...a });
  }
};
ft.ItemComponents = {
  item: Lu,
  dropdown: Rc,
  "btn-group": Xu
};
ft.ROOT_TAG = "nav";
ft.NAME = "toolbar";
ft.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Ju({
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
  a === !0 ? d = /* @__PURE__ */ f(st, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Q(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ f(st, { ...a, onClick: l }));
  const u = Q(n) ? n : n ? /* @__PURE__ */ f(ft, { ...n }) : null;
  return /* @__PURE__ */ f("div", { className: S("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ f(et, { icon: h }),
    Q(i) ? i : /* @__PURE__ */ f("div", { className: S("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function Zu(e) {
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
let Qu = class extends z {
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
    return /* @__PURE__ */ f(
      Ju,
      {
        className: S("messager", l, i, o === !0 ? Zu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var tf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ef = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Cn = (e, t, n) => (tf(e, t, "access private method"), n), be, je;
class ta extends G {
  constructor() {
    super(...arguments), ef(this, be), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      g(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Cn(this, be, je).call(this, () => {
      this._show = !0, this.render(), Cn(this, be, je).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Cn(this, be, je).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Cn(this, be, je).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Cn(this, be, je).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
be = /* @__PURE__ */ new WeakSet();
je = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
ta.NAME = "MessagerItem";
ta.Component = Qu;
var ea = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ne = (e, t, n) => (ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Is = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ys = (e, t, n, s) => (ea(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Pc = (e, t, n) => (ea(e, t, "access private method"), n), rn, Ft, Kr, Lc, na, Dc;
const Ic = class extends pt {
  constructor() {
    super(...arguments), Is(this, Kr), Is(this, na), Is(this, rn, void 0), Is(this, Ft, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ne(this, Ft)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Pc(this, Kr, Lc).call(this).show();
  }
  hide() {
    var e;
    (e = Ne(this, Ft)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Ic.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Wc = Ic;
rn = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakSet();
Lc = function() {
  if (Ne(this, Ft))
    Ne(this, Ft).setOptions(this.options);
  else {
    const e = Pc(this, na, Dc).call(this), t = new ta(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Ys(this, rn, void 0), Ys(this, Ft, void 0);
    }), Ys(this, Ft, t);
  }
  return Ne(this, Ft);
};
na = /* @__PURE__ */ new WeakSet();
Dc = function() {
  if (Ne(this, rn))
    return Ne(this, rn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = g(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = g(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ys(this, rn, n[0])), n[0];
};
Wc.NAME = "messager";
Wc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Oc = class extends z {
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
Oc.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Hc extends G {
}
Hc.NAME = "ProgressCircle";
Hc.Component = Oc;
var zt;
class nf {
  constructor(t = "") {
    A(this, zt, void 0);
    typeof t == "object" ? W(this, zt, t) : W(this, zt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    C(this, zt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    C(this, zt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    C(this, zt).removeEventListener(t, n, s);
  }
  emit(t) {
    return C(this, zt).dispatchEvent(t), t;
  }
}
zt = new WeakMap();
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
class Bc extends nf {
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
    return typeof t == "string" && (ol.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Bc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ol.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let zc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var os, oe, St, hn, dn, Ks;
const Oa = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    A(this, dn);
    A(this, os, void 0);
    A(this, oe, void 0);
    A(this, St, void 0);
    A(this, hn, void 0);
    W(this, os, n), W(this, oe, `ZUI_STORE:${t ?? zc()}`), W(this, St, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, os);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, hn) || W(this, hn, new Oa(C(this, oe), "session")), C(this, hn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, St).getItem(At(this, dn, Ks).call(this, t));
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
    C(this, St).setItem(At(this, dn, Ks).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, St).removeItem(At(this, dn, Ks).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < C(this, St).length; n++) {
      const s = C(this, St).key(n);
      if (s != null && s.startsWith(C(this, oe))) {
        const i = C(this, St).getItem(s);
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
let xi = Oa;
os = new WeakMap(), oe = new WeakMap(), St = new WeakMap(), hn = new WeakMap(), dn = new WeakSet(), Ks = function(t) {
  return `${C(this, oe)}:${t}`;
};
const sf = new xi("DEFAULT");
function rf(e, t = "local") {
  return new xi(e, t);
}
Object.assign(sf, { create: rf });
function of(e) {
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
function af(e) {
  const [t, n, s] = typeof e == "string" ? of(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function al(e, t) {
  return af(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function ll(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function lf(e, t, n) {
  e = e % 360 / 360, t = ll(t), n = ll(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function cf(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function hf(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Fc = class extends z {
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
      lightness: m = 0.6,
      children: y,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: o, color: a };
    let b = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, b = s) : (w.push(`size-${s}`), b = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let k;
    if (d)
      w.push("has-img"), k = /* @__PURE__ */ f("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const T = hf(l, c);
      if (w.push("has-text", `has-text-${T.length}`), o)
        !a && o && (_.color = al(o));
      else {
        const R = h ?? l, P = (typeof R == "number" ? R : cf(R)) * u % 360;
        if (_.background = `hsl(${P},${p * 100}%,${m * 100}%)`, !a) {
          const O = lf(P, p, m);
          _.color = al(O);
        }
      }
      let M;
      b && b < 14 * T.length && (M = { transform: `scale(${b / (14 * T.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ f("div", { "data-actualSize": b, className: "avatar-text", style: M, children: T });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: S(w),
        style: _,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
class Uc extends G {
}
Uc.NAME = "Avatar";
Uc.Component = Fc;
class Vc extends G {
}
Vc.NAME = "BtnGroup";
Vc.Component = Ac;
class sa extends z {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n, clickType: s } = this.props, i = g(t.target);
    if (i.closest('[data-dismiss="pick"]').length) {
      n(!1);
      return;
    }
    i.closest("a,input").length || n(s === "open" ? !0 : void 0);
  }
  _getClass(t) {
    const { state: n, className: s } = t, { open: i, disabled: r } = n;
    return S(
      "pick",
      s,
      i && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: n, style: s, attrs: i } = t;
    return {
      id: `pick-${n}`,
      className: this._getClass(t),
      style: s,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: n, state: s } = t;
    return n ?? s.value;
  }
  _renderValue(t) {
    const { name: n, state: s } = t;
    return n ? /* @__PURE__ */ f("input", { type: "hidden", className: "pick-value", name: n, value: s.value }) : null;
  }
  render(t) {
    return q(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
var Te, Mt, ae;
class qc extends z {
  constructor(n) {
    super(n);
    A(this, Te, void 0);
    A(this, Mt, void 0);
    A(this, ae, void 0);
    W(this, Te, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = g(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return g(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, Te)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, ae);
  }
  _handleClick(n) {
    const { togglePop: s } = this.props, i = g(n.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return n.stopPropagation(), s(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: r } = i;
    return S(
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
    } = n, h = g.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(n),
      style: h,
      ref: C(this, Te),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!C(this, ae)) {
      const s = g(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = g("<div>").addClass("pick-container").appendTo(s)), W(this, ae, i[0]);
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
      C(this, Mt) && (C(this, Mt).call(this), W(this, Mt, void 0));
      return;
    }
    C(this, Mt) || W(this, Mt, Jo(s, n, () => {
      const { placement: o, width: a } = i;
      ar(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? sr() : null, wi(), ir(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var c, d;
        g(n).css({
          left: l,
          top: h,
          width: a === "100%" ? g(s).outerWidth() : void 0
        }), (d = (c = this.props).onLayout) == null || d.call(c, n);
      }), a === "100%" && g(n).css({ width: g(n).width() });
    }));
  }
  componentDidMount() {
    var n, s;
    this.layout(), g(document).on("click", this._handleDocClick), (s = (n = this.props).afterRender) == null || s.call(n, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n, s;
    (s = (n = this.props).afterRender) == null || s.call(n, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    g(document).off("click", this._handleDocClick);
    const n = C(this, Mt);
    n && (n(), W(this, Mt, void 0)), W(this, ae, void 0), W(this, Te, void 0), g(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(n) {
    return Mu(this._render(n), this._getContainer(n));
  }
}
Te = new WeakMap(), Mt = new WeakMap(), ae = new WeakMap();
var Gc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, te = (e, t, n) => (Gc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), kr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (Gc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), js, wt, An;
let mt = class extends z {
  constructor(t) {
    super(t), kr(this, js, void 0), kr(this, wt, 0), kr(this, An, K()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      te(this, wt) && (clearTimeout(te(this, wt)), Ge(this, wt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await ui(200, (a) => {
        Ge(this, wt, a);
      }), Ge(this, wt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await ui(50, (a) => {
        Ge(this, wt, a);
      }), Ge(this, wt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, Ge(this, js, t.id ?? `_${g.guid++}`);
  }
  get id() {
    return te(this, js);
  }
  get pop() {
    return te(this, An).current;
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
    (n = this.props.beforeDestroy) == null || n.call(this), te(this, wt) && clearTimeout(te(this, wt));
    const t = te(this, An).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: te(this, An), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ f(_n, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
js = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
mt.Trigger = sa;
mt.Pop = qc;
mt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Yc = class extends mt {
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: t, syncBorder: n, syncColor: s, syncValue: i } = this.props, r = this.state.value || "";
    if (t && g(t).css("backgroundColor", r), n && g(n).css("borderColor", r), s && g(s).css("color", r), i) {
      const o = g(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, n) {
    this.props.disabled || (super._handleChange(t, n), this.syncColor());
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ f(et, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = g.extend({
      color: n.value
    }, s.style), s.className = S("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, n) {
    const { closeBtn: s, heading: i } = t;
    let { colors: r = [] } = t;
    typeof r == "string" && (r = r.split(","));
    const { value: o } = n;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(et, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(et, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Yc.defaultProps = {
  ...mt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Kc extends G {
}
Kc.NAME = "ColorPicker";
Kc.Component = Yc;
const es = 24 * 60 * 60 * 1e3, nt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ks = (e, t = /* @__PURE__ */ new Date()) => nt(e).toDateString() === nt(t).toDateString(), jr = (e, t = /* @__PURE__ */ new Date()) => nt(e).getFullYear() === nt(t).getFullYear(), jc = (e, t = /* @__PURE__ */ new Date()) => (e = nt(e), t = nt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Fp = (e, t = /* @__PURE__ */ new Date()) => {
  e = nt(e), t = nt(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Up = (e, t) => ks(nt(t), e), Vp = (e, t) => ks(nt(t).getTime() - es, e), qp = (e, t) => ks(nt(t).getTime() + es, e), fe = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = nt(e), Number.isNaN(e.getDay()))
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
  }, i = fe(e, jr(e) ? s.month : s.full);
  if (ks(e, t))
    return i;
  const r = fe(t, jr(e, t) ? jc(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var as, ls;
class df extends z {
  constructor() {
    super(...arguments);
    A(this, as, K());
    A(this, ls, (n, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, n, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    g(C(this, as).current).find(".menu-item>.active").scrollIntoView();
  }
  render(n) {
    const { minuteStep: s = 5, hour: i, minute: r } = n, o = [], a = [];
    for (let h = 0; h < 24; ++h)
      o.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: r === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: C(this, as), children: [
      /* @__PURE__ */ f(
        De,
        {
          className: l,
          items: o,
          onClickItem: C(this, ls).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        De,
        {
          className: l,
          items: a,
          onClickItem: C(this, ls).bind(this, "minute")
        }
      )
    ] });
  }
}
as = new WeakMap(), ls = new WeakMap();
var uf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ws = (e, t, n) => (uf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Os = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Xr, Jr, Zr, Qr;
const cl = (e) => {
  if (!e)
    return;
  const t = nt(`1999-01-01 ${e}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Xc = class extends mt {
  constructor() {
    super(...arguments), Os(this, Xr, () => {
      this.toggle(!0);
    }), Os(this, Jr, (t) => {
      this.setTime(t.target.value);
    }), Os(this, Zr, (t, n) => {
      this.setTime({ [t]: n });
    }), Os(this, Qr, () => {
      this.setTime("");
    });
  }
  setTime(t) {
    let n = "";
    if (typeof t == "string")
      n = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: h = +a, minute: c = +l } = t;
      n = `${h}:${c}`;
    }
    const s = cl(n), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? fe(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(n);
    });
  }
  getTime() {
    const t = cl(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: s, name: i, icon: r, required: o } = t, { value: a = "", open: l } = n, h = `time-picker${this.id}`;
    let c;
    return l && !o && a.length ? c = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Ws(this, Qr), children: /* @__PURE__ */ f("span", { className: "close" }) }) : r && (r === !0 ? c = /* @__PURE__ */ f("i", { class: "i-time" }) : c = /* @__PURE__ */ f(et, { icon: r })), [
      /* @__PURE__ */ f("input", { name: i, id: h, type: "text", class: "form-control", placeholder: s, value: a, onFocus: Ws(this, Xr), onChange: Ws(this, Jr) }, "input"),
      c ? /* @__PURE__ */ f("label", { for: h, class: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: S(s.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, s] = this.getTime() || [];
    return /* @__PURE__ */ f(df, { hour: n, minute: s, minuteStep: t.minuteStep, onChange: Ws(this, Zr) });
  }
};
Xr = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
Xc.defaultProps = {
  ...mt.defaultProps,
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
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "九月", "10月", "11月", "12月"]
  },
  zh_tw: {
    today: "今天",
    yearFormat: "{0}年",
    weekNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "九月", "10月", "11月", "12月"]
  },
  en: {
    today: "Today",
    yearFormat: "{0}",
    weekNames: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monthNames: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
  }
});
const ff = (e, t, n = 0) => {
  const s = new Date(e, t - 1, 1), i = new Date(e, t, 0), r = s.getDay(), o = s.getTime() - (7 + r - n) % 7 * es;
  return {
    days: i.getDate(),
    startTime: o,
    firstDay: s.getTime()
  };
}, hl = (e, t) => new Set((Array.isArray(e) ? e : [e]).map((n) => fe(n, t)));
var Li;
class pf extends z {
  constructor() {
    super(...arguments);
    A(this, Li, (n) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = g(n.target).closest(".mini-calendar-day").dataset("date");
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
    for (let M = 0; M < 7; M++) {
      const R = (i + M) % 7;
      d.push(/* @__PURE__ */ f("div", { className: S("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[R] : R }) }, M));
    }
    const { startTime: p, days: m, firstDay: y } = ff(a, l, i), v = y + m * es;
    let w = p;
    const _ = [], b = "yyyy-MM-dd", k = hl(h, b), T = hl(c, b);
    for (; w <= v; ) {
      const M = [];
      for (let R = 0; R < 7; R++) {
        const P = new Date(w), O = P.getDate(), x = fe(P, b), N = P.getDay(), D = jc(P, y), L = S("col mini-calendar-day", {
          active: k.has(x),
          selected: T.has(x),
          "is-first": O === 1,
          "is-in-month": D,
          "is-out-month": !D,
          "is-today": ks(P, s),
          "is-weekend": N === 0 || N === 6
        });
        M.push(
          /* @__PURE__ */ f("div", { className: L, "data-date": x, children: /* @__PURE__ */ f("a", { className: u, onClick: C(this, Li), children: O === 1 && o ? o[P.getMonth()] : P.getDate() }) }, x)
        ), w += es;
      }
      _.push(/* @__PURE__ */ f("div", { className: "row", children: M }, w));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: d }),
      _
    ] });
  }
}
Li = new WeakMap();
var cs, Di;
class dl extends z {
  constructor() {
    super(...arguments);
    A(this, cs, K());
    A(this, Di, (n) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = g(n.target).closest("[data-value]").dataset("value");
      r && (s(+r), n.stopPropagation());
    });
  }
  componentDidMount() {
    g(C(this, cs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(n) {
    const { className: s, max: i, min: r, value: o } = n, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = r; h <= i; ++h)
      a.push(/* @__PURE__ */ f(st, { type: "ghost", "data-value": h, active: h === o, className: S(l === h ? "is-current" : ""), onClick: C(this, Di), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: C(this, cs), children: a });
  }
}
cs = new WeakMap(), Di = new WeakMap();
var un, hs, ds, us, fs, ps, Ii, Jc, Wi, Zc;
class mf extends z {
  constructor(n) {
    super(n);
    A(this, Ii);
    A(this, Wi);
    A(this, un, void 0);
    A(this, hs, void 0);
    A(this, ds, void 0);
    A(this, us, void 0);
    A(this, fs, void 0);
    A(this, ps, void 0);
    W(this, un, K()), W(this, hs, (o) => {
      const a = g(o.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), W(this, ds, () => {
      const { year: o, month: a } = this.state;
      a === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), W(this, us, () => {
      const { year: o, month: a } = this.state;
      a === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), W(this, fs, (o) => {
      this.setState({ year: o, select: "day" });
    }), W(this, ps, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var a, l;
      (l = (a = this.props).onChange) == null || l.call(a, o);
    };
    const { date: s } = n, i = /* @__PURE__ */ new Date(), r = s ? new Date(s) : void 0;
    this.state = { select: "day", year: r ? r.getFullYear() : i.getFullYear(), month: r ? r.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(n) {
    this.setState((s) => s.select === n ? { select: "day" } : { select: n });
  }
  componentDidMount() {
    g(C(this, un).current).find(".active").scrollIntoView();
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
    } = s, p = u === "day", m = nt(n.minDate || "1970-1-1"), y = nt(n.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: C(this, un), onClick: C(this, hs), children: [
      At(this, Ii, Jc).call(this, n),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(st, { type: u === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: rt(r, c) }),
          /* @__PURE__ */ f(st, { type: u === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d] : d }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(st, { type: "ghost", size: "sm", square: !0, onClick: C(this, ds), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(st, { type: "ghost", size: "sm", square: !0, onClick: C(this, us), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          pf,
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
          dl,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: m.getFullYear(),
            max: y.getFullYear(),
            onChange: C(this, fs)
          }
        ) : u === "month" ? /* @__PURE__ */ f(
          dl,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: C(this, ps)
          }
        ) : null,
        p ? At(this, Wi, Zc).call(this, n) : null
      ] })
    ] });
  }
}
un = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), Ii = new WeakSet(), Jc = function(n) {
  let { menu: s } = n;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(De, { ...s })) : null;
}, Wi = new WeakSet(), Zc = function(n) {
  let { actions: s } = n;
  const { todayText: i, clearText: r } = n;
  return s || (s = [{ text: i, "data-set-date": fe(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(ft, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ f(st, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var gf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sr = (e, t, n) => (gf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Mr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, to, eo, no;
let Qc = class extends mt {
  constructor() {
    super(...arguments), Mr(this, to, () => {
      this.toggle(!0);
    }), Mr(this, eo, (t) => {
      this.setDate(t.target.value);
    }), Mr(this, no, () => {
      this.setDate("");
    }), this.setDate = (t) => {
      const n = nt(t), s = !t || Number.isNaN(n.getDay()), { onInvalid: i, defaultValue: r = "", required: o } = this.props;
      this.setState({ value: s ? o ? r : "" : fe(n, this.props.format) }, () => {
        !s && i && i(t), this.toggle(!1);
      });
    };
  }
  _renderTrigger(t, n) {
    const { placeholder: s, name: i, icon: r, required: o } = t, { value: a = "", open: l } = n, h = `date-picker${this.id}`;
    let c;
    return l && !o && a.length ? c = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Sr(this, no), children: /* @__PURE__ */ f("span", { className: "close" }) }) : r && (r === !0 ? c = /* @__PURE__ */ f("i", { class: "i-calendar" }) : c = /* @__PURE__ */ f(et, { icon: r })), [
      /* @__PURE__ */ f("input", { name: i, id: h, type: "text", class: "form-control", placeholder: s, value: a, onFocus: Sr(this, to), onChange: Sr(this, eo) }, "input"),
      c ? /* @__PURE__ */ f("label", { for: h, class: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: S(s.className, "date-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _getPopProps(t, n) {
    const s = super._getPopProps(t, n);
    return {
      ...s,
      className: S(s.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = tt.getLang("today"), clearText: l, menu: h, actions: c, minDate: d, maxDate: u, required: p } = t;
    return /* @__PURE__ */ f(
      mf,
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
Qc.defaultProps = {
  ...mt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class th extends G {
}
th.NAME = "TimePicker";
th.Component = Xc;
class eh extends G {
}
eh.NAME = "DatePicker";
eh.Component = Qc;
var ia = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Se = (e, t, n) => (ia(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $n = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Vn = (e, t, n, s) => (ia(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Tr = (e, t, n) => (ia(e, t, "access private method"), n), Ze, Xs, xe, so, Pn, Js;
const Er = "show", ul = "in", yf = '[data-dismiss="modal"]', Ln = class extends pt {
  constructor() {
    super(...arguments), $n(this, Pn), $n(this, Ze, 0), $n(this, Xs, void 0), $n(this, xe, void 0), $n(this, so, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(yf) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
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
  afterInit() {
    if (this.on("click", Se(this, so)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!Se(this, xe) || Se(this, xe)[0] !== n || Se(this, xe)[1] !== s) && (Vn(this, xe, [n, s]), this.layout());
        });
        t.observe(e), Vn(this, Xs, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = Se(this, Xs)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return g(t).css("z-index", `${Ln.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return g(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Er, i).css({
      zIndex: `${Ln.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Tr(this, Pn, Js).call(this, () => {
      g(t).addClass(ul), Tr(this, Pn, Js).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (g(this.modalElement).removeClass(ul), this.emit("hide"), Tr(this, Pn, Js).call(this, () => {
      g(this.modalElement).removeClass(Er), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const s = g(n);
    t = t ?? this.options.size, s.removeAttr("data-size");
    const i = { width: "", height: "" };
    typeof t == "object" ? (i.width = t.width, i.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? s.attr("data-size", t) : t && (i.width = t), s.css(i), e = e ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    Vn(this, xe, [r, o]), typeof e == "function" && (e = e({ width: r, height: o }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), s.css(a), g(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = Ln.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Ln.query(e)) == null || t.show();
  }
};
let Qt = Ln;
Ze = /* @__PURE__ */ new WeakMap();
Xs = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakSet();
Js = function(e, t) {
  Se(this, Ze) && (clearTimeout(Se(this, Ze)), Vn(this, Ze, 0)), e && (this.options.animation ? Vn(this, Ze, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Qt.NAME = "Modal";
Qt.MULTI_INSTANCE = !0;
Qt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Qt.zIndex = 2e3;
g(window).on("resize.modal.zui", () => {
  Qt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
g(document).on("to-hide.modal.zui", (e, t) => {
  Qt.hide(t == null ? void 0 : t.target);
});
class nh extends z {
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
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: S("modal-header", n), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Q(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(ft, { ...t }) : null,
      n ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: n
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ f("div", { className: S("modal-body", n), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: n,
      footerActions: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: S("modal-footer", n), children: s ? /* @__PURE__ */ f(ft, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: S("modal-dialog", t), style: n, children: /* @__PURE__ */ f("div", { className: S("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
nh.defaultProps = { closeBtn: !0 };
var fn, pn, mn;
class wf extends z {
  constructor() {
    super(...arguments);
    A(this, fn, void 0);
    A(this, pn, void 0);
    A(this, mn, void 0);
    W(this, fn, K()), this.state = {}, W(this, mn, () => {
      var i, r;
      const n = (r = (i = C(this, fn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, pn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), W(this, pn, s);
    });
  }
  componentDidMount() {
    C(this, mn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, pn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, fn),
        onLoad: C(this, mn)
      }
    );
  }
}
fn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap();
var ra = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, yt = (e, t, n) => (ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), kn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ye = (e, t, n, s) => (ra(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Zs = (e, t, n) => (ra(e, t, "access private method"), n), Dt, Dn, It, Ci, oa, Qs, io;
function vf(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function _f(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ f(Go, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function bf(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(wf, { url: n })
  };
}
const xf = {
  custom: vf,
  ajax: _f,
  iframe: bf
}, Nr = "loading", In = class extends Qt {
  constructor() {
    super(...arguments), kn(this, Ci), kn(this, Qs), kn(this, Dt, void 0), kn(this, Dn, void 0), kn(this, It, void 0);
  }
  get id() {
    return yt(this, Dn);
  }
  get loading() {
    var e;
    return (e = yt(this, Dt)) == null ? void 0 : e.classList.contains(Nr);
  }
  get shown() {
    var e;
    return !!((e = yt(this, Dt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = yt(this, Dt);
    if (!e) {
      const { options: t } = this;
      let n = yt(this, Dn);
      n || (n = t.id || `modal-${g.guid++}`, Ye(this, Dn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = g("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ye(this, Dt, e);
    }
    return e;
  }
  get $emitter() {
    const e = yt(this, Dt);
    return e ? g(e) : this.$element;
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
    const e = yt(this, Dt);
    e && (g(e).removeData(this.constructor.KEY).remove(), Ye(this, Dt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    yt(this, It) && clearTimeout(yt(this, It));
    const { modalElement: e, options: t } = this, n = g(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = xf[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Nr), i && Ye(this, It, window.setTimeout(() => {
      Ye(this, It, 0), Zs(this, Qs, io).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Zs(this, Qs, io).call(this, this.options.failedTip) : a && typeof a == "object" && await Zs(this, Ci, oa).call(this, a), yt(this, It) && (clearTimeout(yt(this, It)), Ye(this, It, 0)), this.layout(), await ui(100), n.removeClass(Nr), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = In.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e, c = (typeof a == "function" ? a() : a) || {};
    let d = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    s ? d = /* @__PURE__ */ f("div", { className: S("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${s} ${i}` }),
      d
    ] }) : d = /* @__PURE__ */ f("div", { className: S("modal-body", c.bodyClass), children: d });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = tt.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && u.push(y);
    }, []);
    let p;
    const m = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: y, event: v }) => {
        const w = In.query(v.target, l);
        p = y.key, (o == null ? void 0 : o(y, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await In.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: d,
      backdrop: "static",
      custom: { footerActions: m, ...c },
      ...h
    }), p;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await In.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let sh = In;
Dt = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakSet();
oa = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return g(this.modalElement).html(e[0]), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Qn(
      /* @__PURE__ */ f(nh, { ...e }),
      this.modalElement
    );
  });
};
Qs = /* @__PURE__ */ new WeakSet();
io = function(e) {
  if (e)
    return Zs(this, Ci, oa).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: e })
    });
};
sh.DEFAULT = {
  ...Qt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var aa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ro = (e, t, n) => (aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, fl = (e, t, n, s) => (aa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), oo = (e, t, n) => (aa(e, t, "access private method"), n), Re, la, ih, ao, rh, ca, oh;
const Cf = '[data-toggle="modal"]';
class ah extends pt {
  constructor() {
    super(...arguments), Hs(this, la), Hs(this, ao), Hs(this, ca), Hs(this, Re, void 0);
  }
  get modal() {
    return ro(this, Re);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = oo(this, ao, rh).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = ro(this, Re)) == null ? void 0 : t.hide();
  }
}
Re = /* @__PURE__ */ new WeakMap();
la = /* @__PURE__ */ new WeakSet();
ih = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
ao = /* @__PURE__ */ new WeakSet();
rh = function() {
  const e = oo(this, la, ih).call(this);
  let t = ro(this, Re);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = oo(this, ca, oh).call(this);
    if (!n)
      return;
    t = Qt.ensure(n, e);
  } else
    t = sh.ensure(this.container, e);
  return fl(this, Re, t), t.on("destroyed", () => {
    fl(this, Re, void 0);
  }), t;
};
ca = /* @__PURE__ */ new WeakSet();
oh = function() {
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
ah.NAME = "ModalTrigger";
g(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Cf);
  if (n) {
    const i = ah.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let lh = class extends Fe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = S(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
lh.NAME = "nav";
class ch extends G {
}
ch.NAME = "Nav";
ch.Component = lh;
function ns(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function $f({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = ns(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : rt(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : rt(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ f(st, { type: n, ...a });
}
function kf({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ns(i, n);
  return s = typeof s == "function" ? s(a) : rt(s, a), /* @__PURE__ */ f(pc, { ...o, children: [
    r,
    s
  ] });
}
function Sf({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(st, { type: n, ...l })), c = (u, p) => {
    const m = [];
    for (let y = u; y <= p; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = ns(i, y);
      o && (l.url = typeof o == "function" ? o(v) : rt(o, v)), m.push(/* @__PURE__ */ f(st, { type: n, ...l, onClick: r }));
    }
    return m;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function Mf({
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
      url: typeof n == "function" ? n(c) : rt(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : rt(a, t), i.menu = { ...i.menu, className: S((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Rc, { type: "dropdown", dropdown: i, ...o });
}
function Tf({
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
    var v;
    d = Number((v = y.target) == null ? void 0 : v.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, p = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const v = ns(i, d);
    a && !a({ info: v, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(v) : rt(l, v));
  }, m = ns(i, t || 0);
  return c.url = typeof l == "function" ? l(m) : rt(l, m), /* @__PURE__ */ f("div", { className: S("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ f(st, { type: s, ...c, onClick: p })
  ] });
}
let lr = class extends ft {
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
  ...ft.ItemComponents,
  link: $f,
  info: kf,
  nav: Sf,
  "size-menu": Mf,
  goto: Tf
};
class hh extends G {
}
hh.NAME = "Pager";
hh.Component = lr;
class dh extends G {
}
dh.NAME = "Pick";
dh.Component = mt;
var gn, ms, gs, Oi;
class uh extends z {
  constructor(n) {
    super(n);
    A(this, gn, K());
    A(this, ms, K());
    A(this, gs, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    A(this, Oi, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = C(this, gn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = C(this, ms), { current: i } = C(this, gn);
      if (s && i) {
        const r = g(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: C(this, ms), children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, Oi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: C(this, gs),
          onInput: C(this, gs),
          ref: C(this, gn)
        }
      ),
      l
    ] });
  }
}
gn = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), Oi = new WeakMap();
var yn, ys, ws, vs;
class Ef extends sa {
  constructor() {
    super(...arguments);
    A(this, yn, void 0);
    A(this, ys, void 0);
    A(this, ws, void 0);
    A(this, vs, void 0);
    W(this, yn, K()), W(this, ys, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = g(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), W(this, ws, (n) => {
      this.props.changeState({ search: n });
    }), W(this, vs, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, ys), "data-value": n.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, yn).current) == null || s.focus();
  }
  _getClass(n) {
    return S(
      super._getClass(n),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ f(
      uh,
      {
        inline: !0,
        ref: C(this, yn),
        defaultSearch: s,
        onSearch: C(this, ws),
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
yn = new WeakMap(), ys = new WeakMap(), ws = new WeakMap(), vs = new WeakMap();
var _s, Hi, Bi, zi, Fi, fh;
class Nf extends sa {
  constructor() {
    super(...arguments);
    A(this, Fi);
    A(this, _s, K());
    A(this, Hi, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    A(this, Bi, (n) => {
      this.props.changeState({ search: n });
    });
    A(this, zi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, _s).current) == null || s.focus();
  }
  _getClass(n) {
    return S(
      super._getClass(n),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ f(
      uh,
      {
        ref: C(this, _s),
        defaultSearch: s,
        onSearch: C(this, Bi),
        onClear: C(this, zi),
        placeholder: At(this, Fi, fh).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a } = n, [l] = i, h = r && a;
    let c;
    h ? c = this._renderSearch(n) : l ? c = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: l.text ?? l.value }, "main") : c = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "main");
    const d = l && !h ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, Hi), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      c,
      s,
      d,
      h ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
_s = new WeakMap(), Hi = new WeakMap(), Bi = new WeakMap(), zi = new WeakMap(), Fi = new WeakSet(), fh = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const Rf = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
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
var Ui, Vi, ph, qi, mh, Gi;
class Af extends qc {
  constructor() {
    super(...arguments);
    A(this, Vi);
    A(this, qi);
    A(this, Ui, K());
    A(this, Gi, ({ item: n }) => {
      const s = n.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(s) : (o(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const n = this.element;
    n && g(n).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = g(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const n = this.element;
    n && g(n).off(".picker.zui");
  }
  setHoverItem(n) {
    this.props.changeState({ hoverItem: n }, () => {
      const s = At(this, Vi, ph).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return S(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ f(
      De,
      {
        ref: C(this, Ui),
        className: "picker-menu-list",
        items: At(this, qi, mh).call(this),
        onClickItem: C(this, Gi),
        ...s
      }
    );
  }
}
Ui = new WeakMap(), Vi = new WeakSet(), ph = function() {
  const n = this.element;
  if (n)
    return g(n).find(".menu-item>a.hover");
}, qi = new WeakSet(), mh = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = g.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: p,
      text: m,
      className: y,
      ...v
    } = d;
    u === i && (a = !0);
    const w = m ?? u;
    return c.push({
      key: u,
      active: o.has(u),
      text: typeof w == "string" ? Rf(l, [w]) : /* @__PURE__ */ f(er, { content: w }),
      className: S(y, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = S(h[0].className, "hover")), h;
}, Gi = new WeakMap();
var ha = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ee = (e, t, n) => (ha(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ke = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, we = (e, t, n, s) => (ha(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), _t = (e, t, n) => (ha(e, t, "access private method"), n), Wn, Wt, Ce, Qe, qn, da, gh, se, $e;
let ua = class extends mt {
  constructor(t) {
    super(t), Ke(this, Qe), Ke(this, da), Ke(this, se), Ke(this, Wn, void 0), Ke(this, Wt, void 0), Ke(this, Ce, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? _t(this, se, $e).call(this, n) : _t(this, se, $e).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), _t(this, se, $e).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(_t(this, Qe, qn).call(this, n)), r = s.filter((o) => !i.has(o));
      _t(this, se, $e).call(this, r);
    }, this.clear = () => {
      _t(this, se, $e).call(this);
    }, this.select = (n) => {
      const s = _t(this, Qe, qn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return _t(this, se, $e).call(this, i);
    }, this.isSelected = (n) => this.valueList.includes(n), g.extend(this.state, {
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
    return _t(this, Qe, qn).call(this, this.state.value);
  }
  async load() {
    let t = ee(this, Wt);
    t && t.abort(), t = new AbortController(), we(this, Wt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await ui(s || 500), ee(this, Wt) !== t || (r = await n(i, { signal: t.signal }), ee(this, Wt) !== t))
        return r;
    } else if (i.length) {
      const o = g.unique(i.toLowerCase().split(" ").filter((a) => a.length));
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
    return we(this, Wt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = ee(this, Wn) || {}, r = {};
    if (we(this, Wn, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    ee(this, Ce) && clearTimeout(ee(this, Ce)), we(this, Ce, window.setTimeout(() => {
      we(this, Ce, 0), this.update();
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
    (t = ee(this, Wt)) == null || t.abort(), we(this, Wt, void 0), we(this, Wn, void 0), clearTimeout(ee(this, Ce)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Ef : Nf);
  }
};
Wn = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
qn = function(e) {
  return typeof e == "string" ? e.length ? g.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? g.unique(e) : [];
};
da = /* @__PURE__ */ new WeakSet();
gh = function(e) {
  const t = _t(this, Qe, qn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
se = /* @__PURE__ */ new WeakSet();
$e = function(e) {
  const t = e === void 0 ? e : _t(this, da, gh).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
ua.defaultProps = {
  ...mt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
ua.Pop = Af;
class yh extends G {
}
yh.NAME = "Picker";
yh.Component = ua;
class wh extends pt {
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
    this.cleanup = Jo(t, n, () => {
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
    const n = g(t);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      g(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const t = g('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = g('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
wh.NAME = "Popovers";
wh.DEFAULT = {
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
}, kt = (e, t, n) => (fa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ve = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ti = (e, t, n, s) => (fa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), pl = (e, t, n) => (fa(e, t, "access private method"), n), ei, ni, Ae, lo, si, ii, ri, co;
let vh = class extends z {
  constructor(t) {
    super(t), ve(this, ri), ve(this, ei, void 0), ve(this, ni, K()), ve(this, Ae, 0), ve(this, lo, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), ve(this, si, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (pl(this, ri, co).call(this), ti(this, Ae, window.setTimeout(() => {
          r(i, n), ti(this, Ae, 0);
        }, this.props.delay || 0)));
      });
    }), ve(this, ii, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, ti(this, ei, t.id || `search-box-${g.guid++}`);
  }
  get id() {
    return kt(this, ei);
  }
  get input() {
    return kt(this, ni).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    pl(this, ri, co).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: p } = t, { focus: m, value: y } = n, { id: v } = this, w = typeof y != "string" || !y.trim().length;
    let _, b, k;
    return u && (k = u === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(et, { icon: u })), !d && u && (_ = /* @__PURE__ */ f("label", { for: v, class: "input-control-prefix", children: k }, "prefix")), p && !w ? b = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: kt(this, lo),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(et, { icon: p })
      }
    ) : d && u && (b = k), b && (b = /* @__PURE__ */ f("label", { for: v, class: "input-control-suffix", children: b }, "suffix")), /* @__PURE__ */ f("div", { class: S("search-box input-control", r, { focus: m, empty: w, "has-prefix-icon": _, "has-suffix-icon": b }), style: o, children: [
      _,
      /* @__PURE__ */ f(
        "input",
        {
          ref: kt(this, ni),
          id: v,
          type: "text",
          class: S("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: kt(this, si),
          onChange: kt(this, si),
          onFocus: kt(this, ii),
          onBlur: kt(this, ii)
        }
      ),
      b
    ] });
  }
};
ei = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakSet();
co = function() {
  kt(this, Ae) && clearTimeout(kt(this, Ae)), ti(this, Ae, 0);
};
vh.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class _h extends G {
}
_h.NAME = "SearchBox";
_h.Component = vh;
class bh extends G {
}
bh.NAME = "Toolbar";
bh.Component = ft;
function Ss(e) {
  return e.split("-")[1];
}
function pa(e) {
  return e === "y" ? "height" : "width";
}
function on(e) {
  return e.split("-")[0];
}
function cr(e) {
  return ["top", "bottom"].includes(on(e)) ? "x" : "y";
}
function ml(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = cr(t), l = pa(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (on(t)) {
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
const Pf = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = ml(h, s, l), u = s, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: b, data: k, reset: T } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [v]: { ...p[v], ...k } }, T && m <= 50 && (m++, typeof T == "object" && (T.placement && (u = T.placement), T.rects && (h = T.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : T.rects), { x: c, y: d } = ml(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function xh(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function $i(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Lf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = t, m = xh(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = $i(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = $i(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + m.top) / b.y, bottom: (k.bottom - v.bottom + m.bottom) / b.y, left: (v.left - k.left + m.left) / b.x, right: (k.right - v.right + m.right) / b.x };
}
const Df = Math.min, If = Math.max;
function Wf(e, t, n) {
  return If(e, Df(t, n));
}
const Of = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = xh(s), c = { x: i, y: r }, d = cr(o), u = pa(d), p = await l.getDimensions(n), m = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let b = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  b === 0 && (b = a.floating[u]);
  const k = v / 2 - w / 2, T = h[m], M = b - p[u] - h[y], R = b / 2 - p[u] / 2 + k, P = Wf(T, R, M), O = Ss(o) != null && R != P && a.reference[u] / 2 - (R < T ? h[m] : h[y]) - p[u] / 2 < 0;
  return { [d]: c[d] - (O ? R < T ? T - R : M - R : 0), data: { [d]: P, centerOffset: R - P } };
} }), Hf = ["top", "right", "bottom", "left"];
Hf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Bf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Bf[t]);
}
function zf(e, t, n) {
  n === void 0 && (n = !1);
  const s = Ss(e), i = cr(e), r = pa(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ki(o)), { main: o, cross: ki(o) };
}
const Ff = { start: "end", end: "start" };
function Rr(e) {
  return e.replace(/start|end/g, (t) => Ff[t]);
}
const Uf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...y } = e, v = on(s), w = on(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (w || !m ? [ki(o)] : function(x) {
      const N = ki(x);
      return [Rr(x), N, Rr(N)];
    }(o));
    d || p === "none" || b.push(...function(x, N, D, L) {
      const H = Ss(x);
      let I = function(U, at, bn) {
        const Ts = ["left", "right"], xn = ["right", "left"], Es = ["top", "bottom"], gr = ["bottom", "top"];
        switch (U) {
          case "top":
          case "bottom":
            return bn ? at ? xn : Ts : at ? Ts : xn;
          case "left":
          case "right":
            return at ? Es : gr;
          default:
            return [];
        }
      }(on(x), D === "start", L);
      return H && (I = I.map((U) => U + "-" + H), N && (I = I.concat(I.map(Rr)))), I;
    }(o, m, p, _));
    const k = [o, ...b], T = await Lf(t, y), M = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(T[v]), c) {
      const { main: x, cross: N } = zf(s, r, _);
      M.push(T[x], T[N]);
    }
    if (R = [...R, { placement: s, overflows: M }], !M.every((x) => x <= 0)) {
      var P;
      const x = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, N = k[x];
      if (N)
        return { data: { index: x, overflows: R }, reset: { placement: N } };
      let D = "bottom";
      switch (u) {
        case "bestFit": {
          var O;
          const L = (O = R.map((H) => [H, H.overflows.filter((I) => I > 0).reduce((I, U) => I + U, 0)]).sort((H, I) => H[1] - I[1])[0]) == null ? void 0 : O[0].placement;
          L && (D = L);
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
}, Vf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = on(a), u = Ss(a), p = cr(a) === "x", m = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: b } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: w * m } : { x: w * m, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ht(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nt(e) {
  return ht(e).getComputedStyle(e);
}
function pe(e) {
  return $h(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Bs;
function Ch() {
  if (Bs)
    return Bs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Bs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Bs) : navigator.userAgent;
}
function Xt(e) {
  return e instanceof ht(e).HTMLElement;
}
function xt(e) {
  return e instanceof ht(e).Element;
}
function $h(e) {
  return e instanceof ht(e).Node;
}
function gl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot;
}
function hr(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Nt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function qf(e) {
  return ["table", "td", "th"].includes(pe(e));
}
function ho(e) {
  const t = /firefox/i.test(Ch()), n = Nt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function kh() {
  return !/^((?!chrome|android).)*safari/i.test(Ch());
}
function ma(e) {
  return ["html", "body", "#document"].includes(pe(e));
}
const yl = Math.min, Gn = Math.max, Si = Math.round;
function Sh(e) {
  const t = Nt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = Si(n) !== i || Si(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Mh(e) {
  return xt(e) ? e : e.contextElement;
}
const Th = { x: 1, y: 1 };
function an(e) {
  const t = Mh(e);
  if (!Xt(t))
    return Th;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Sh(t);
  let o = (r ? Si(n.width) : n.width) / s, a = (r ? Si(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Oe(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Mh(e);
  let l = Th;
  t && (s ? xt(s) && (l = an(s)) : l = an(e));
  const h = a ? ht(a) : window, c = !kh() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, p = o.width / l.x, m = o.height / l.y;
  if (a) {
    const y = ht(a), v = s && xt(s) ? ht(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = an(w), b = w.getBoundingClientRect(), k = getComputedStyle(w);
      b.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, b.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, d *= _.x, u *= _.y, p *= _.x, m *= _.y, d += b.x, u += b.y, w = ht(w).frameElement;
    }
  }
  return { width: p, height: m, top: u, right: d + p, bottom: u + m, left: d, x: d, y: u };
}
function de(e) {
  return (($h(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function dr(e) {
  return xt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Eh(e) {
  return Oe(de(e)).left + dr(e).scrollLeft;
}
function Gf(e, t, n) {
  const s = Xt(t), i = de(t), r = Oe(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((pe(t) !== "body" || hr(i)) && (o = dr(t)), Xt(t)) {
      const l = Oe(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Eh(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function ss(e) {
  if (pe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (gl(e) ? e.host : null) || de(e);
  return gl(t) ? t.host : t;
}
function wl(e) {
  return Xt(e) && Nt(e).position !== "fixed" ? e.offsetParent : null;
}
function vl(e) {
  const t = ht(e);
  let n = wl(e);
  for (; n && qf(n) && Nt(n).position === "static"; )
    n = wl(n);
  return n && (pe(n) === "html" || pe(n) === "body" && Nt(n).position === "static" && !ho(n)) ? t : n || function(s) {
    let i = ss(s);
    for (; Xt(i) && !ma(i); ) {
      if (ho(i))
        return i;
      i = ss(i);
    }
    return null;
  }(e) || t;
}
function Nh(e) {
  const t = ss(e);
  return ma(t) ? e.ownerDocument.body : Xt(t) && hr(t) ? t : Nh(t);
}
function Yn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Nh(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ht(s);
  return i ? t.concat(r, r.visualViewport || [], hr(s) ? s : []) : t.concat(s, Yn(s));
}
function _l(e, t, n) {
  return t === "viewport" ? $i(function(s, i) {
    const r = ht(s), o = de(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = kh();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : xt(t) ? function(s, i) {
    const r = Oe(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Xt(s) ? an(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : $i(function(s) {
    var i;
    const r = de(s), o = dr(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Gn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Gn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Eh(s);
    const d = -o.scrollTop;
    return Nt(a || r).direction === "rtl" && (c += Gn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(de(e)));
}
const Yf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Yn(h).filter((v) => xt(v) && pe(v) !== "body"), p = null;
    const m = Nt(h).position === "fixed";
    let y = m ? ss(h) : h;
    for (; xt(y) && !ma(y); ) {
      const v = Nt(y), w = ho(y);
      (m ? w || p : w || v.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = v : u = u.filter((_) => _ !== y), y = ss(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = _l(t, c, i);
    return h.top = Gn(d.top, h.top), h.right = yl(d.right, h.right), h.bottom = yl(d.bottom, h.bottom), h.left = Gn(d.left, h.left), h;
  }, _l(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Xt(n), r = de(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((pe(n) !== "body" || hr(r)) && (o = dr(n)), Xt(n))) {
    const h = Oe(n);
    a = an(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: xt, getDimensions: function(e) {
  return Sh(e);
}, getOffsetParent: vl, getDocumentElement: de, getScale: an, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || vl, r = this.getDimensions;
  return { reference: Gf(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Nt(e).direction === "rtl" };
function Kf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...xt(e) ? Yn(e) : e.contextElement ? Yn(e.contextElement) : [], ...Yn(t)] : [];
  h.forEach((p) => {
    l && p.addEventListener("scroll", n, { passive: !0 }), r && p.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let p = !0;
    d = new ResizeObserver(() => {
      p || n(), p = !1;
    }), xt(e) && !a && d.observe(e), xt(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? Oe(e) : null;
  return a && function p() {
    const m = Oe(e);
    !u || m.x === u.x && m.y === u.y && m.width === u.width && m.height === u.height || n(), u = m, c = requestAnimationFrame(p);
  }(), n(), () => {
    var p;
    h.forEach((m) => {
      l && m.removeEventListener("scroll", n), r && m.removeEventListener("resize", n);
    }), (p = d) == null || p.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const jf = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Yf, ...n }, r = { ...i.platform, _c: s };
  return Pf(e, t, { ...i, platform: r });
};
var ga = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, V = (e, t, n) => (ga(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, He = (e, t, n, s) => (ga(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Et = (e, t, n) => (ga(e, t, "access private method"), n), Kn, jn, On, tn, lt, uo, Mi, ur, ya, wa, Rh, fo, Ah, va, Ph, _a, Lh, ba, Dh, po, Ih, xa, Wh, Xn, mo, Oh;
const en = class extends pt {
  constructor() {
    super(...arguments), j(this, ur), j(this, wa), j(this, fo), j(this, va), j(this, _a), j(this, ba), j(this, po), j(this, xa), j(this, mo), j(this, Kn, !1), j(this, jn, void 0), j(this, On, 0), j(this, tn, void 0), j(this, lt, void 0), j(this, uo, void 0), j(this, Mi, void 0), this.hideLater = () => {
      V(this, Xn).call(this), He(this, On, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Xn, () => {
      clearTimeout(V(this, On)), He(this, On, 0);
    });
  }
  get isShown() {
    var e;
    return (e = V(this, tn)) == null ? void 0 : e.classList.contains(en.CLASS_SHOW);
  }
  get tooltip() {
    return V(this, tn) || Et(this, fo, Ah).call(this);
  }
  get trigger() {
    return V(this, uo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${en.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !V(this, Kn) && this.isHover && Et(this, mo, Oh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(en.CLASS_SHOW), Et(this, po, Ih).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = V(this, Mi)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = V(this, tn)) == null || t.classList.remove(en.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    V(this, Kn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", V(this, Xn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
let ut = en;
Kn = /* @__PURE__ */ new WeakMap();
jn = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
ur = /* @__PURE__ */ new WeakSet();
ya = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
wa = /* @__PURE__ */ new WeakSet();
Rh = function() {
  const e = Et(this, ur, ya).call(this);
  return He(this, lt, document.createElement("div")), V(this, lt).style.position = this.options.strategy, V(this, lt).style.width = `${e}px`, V(this, lt).style.height = `${e}px`, V(this, lt).style.transform = "rotate(45deg)", V(this, lt);
};
fo = /* @__PURE__ */ new WeakSet();
Ah = function() {
  var n;
  const e = en.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(Et(this, wa, Rh).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), He(this, tn, t), t;
};
va = /* @__PURE__ */ new WeakSet();
Ph = function() {
  var i;
  const e = Et(this, ur, ya).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Vf(e), Uf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && V(this, lt) && ((i = s.middleware) == null || i.push(Of({ element: V(this, lt) }))), s;
};
_a = /* @__PURE__ */ new WeakSet();
Lh = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
ba = /* @__PURE__ */ new WeakSet();
Dh = function(e) {
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
Ih = function() {
  const e = Et(this, va, Ph).call(this), t = Et(this, xa, Wh).call(this);
  He(this, Mi, Kf(t, this.tooltip, () => {
    this.element && jf(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = Et(this, _a, Lh).call(this, o);
      if (i.arrow && V(this, lt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(V(this, lt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-V(this, lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Et(this, ba, Dh).call(this, o)
        });
      }
    });
  }));
};
xa = /* @__PURE__ */ new WeakSet();
Wh = function() {
  return V(this, jn) || He(this, jn, {
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
  }), V(this, jn);
};
Xn = /* @__PURE__ */ new WeakMap();
mo = /* @__PURE__ */ new WeakSet();
Oh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", V(this, Xn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), He(this, Kn, !0);
};
ut.NAME = "tooltip";
ut.TOOLTIP_CLASS = "tooltip";
ut.CLASS_SHOW = "show";
ut.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
ut.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, ut.MENU_SELECTOR);
  if (n) {
    const i = ut.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    ut.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, ut.MENU_SELECTOR);
  if (!n)
    return;
  const s = ut.ensure(n);
  s.isHover && s.show();
});
function Xf({
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
  target: d,
  trailingIcon: u,
  hint: p,
  checked: m,
  actions: y,
  show: v,
  level: w = 0,
  items: _,
  ...b
}) {
  const k = Array.isArray(y) ? { items: y } : y;
  return k && (k.btnProps || (k.btnProps = { size: "sm" }), k.className = S("tree-actions not-nested-toggle", k.className)), /* @__PURE__ */ f(
    "div",
    {
      className: S("tree-item-content", n, { disabled: a, active: l }),
      title: p,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...b,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ f("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof m == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${m ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(et, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ f("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        k ? /* @__PURE__ */ f(ft, { ...k }) : null,
        /* @__PURE__ */ f(et, { icon: u, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Ca = class extends nr {
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
    return n && (t.className = S(t.className, "tree-hover")), t;
  }
};
Ca.ItemComponents = {
  item: Xf
};
Ca.NAME = "tree";
class Hh extends G {
}
Hh.NAME = "Tree";
Hh.Component = Ca;
class Bh extends pt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? uu(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, btnClass: i, tip: r, draggable: o } = this.options;
    this.$list = g('<ul class="file-list py-1"></ul>');
    const a = g(`<span class="upload-tip">${r}</span>`);
    if (!o) {
      this.$label = g(`<label class="btn ${i}" for="${t}">${n}</label>`);
      const h = s === "bottom" ? [this.$label, a, this.$list] : [this.$list, this.$label, a];
      this.$element.append(this.$input, ...h);
      return;
    }
    this.$label = g(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(a), this.bindDragEvent();
    const l = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...l);
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
    this.$input = g("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (i) => {
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
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden"), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files);
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
    return this.addFile(t), g('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return g(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: n, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = g(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-rename");
      return new ut(r, { title: n }), r;
    }
    return g("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = g(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return new ut(r, { title: n }), r;
    }
    return g("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return g(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return g(`<span class="file-size text-gray">${du(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: n, deleteBtn: s, showSize: i } = this.options, r = g('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), n && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = g(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s, duplicatedHint: i } = this.options, r = g('<div class="input-group input-rename-container hidden"></div>'), o = g("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (c) => {
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
    }), a = g("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      const c = r.closest(".file-item"), d = c.find(".file-name");
      if (d.html() === o.val()) {
        r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(o.val());
    }), l = g("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = g('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(h);
  }
}
Bh.DEFAULT = {
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
class Jf extends Bh {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = g(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(g('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, totalCountText: i } = this.options;
    this.$list = g('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = g('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 }), this.$tip = g('<div class="absolute inset-0 col justify-center items-center"></div>').append(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`), n && this.$tip.append(g(`<span class="upload-tip">${n}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = g('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(i.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      g('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(n);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const n = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = g(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return g('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(g(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(n);
  }
  createRenameContainer(t) {
    const { duplicatedHint: n } = this.options, s = g("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
Jf.DEFAULT = {
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
var bs, Yi, Ki, ji;
class Zf extends z {
  constructor() {
    super(...arguments);
    A(this, bs, K());
    A(this, Yi, (n) => {
      n.stopPropagation(), ot.show({
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
    A(this, Ki, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    A(this, ji, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
  }
  get element() {
    return C(this, bs).current;
  }
  componentDidMount() {
    this.load(), g(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    g(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...r } = s;
    this.setState({ loading: !0 }, () => {
      fetch(rt(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ f(Go, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ f("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: p } = this.state;
    let { content: m } = this.state;
    return m === void 0 && g.isPlainObject(d) && d.html && (m = /* @__PURE__ */ f("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ f(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${p ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, Ki),
        onDragEnd: C(this, ji),
        "data-id": c,
        ref: C(this, bs),
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Yi), children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          m
        ]
      }
    ) });
  }
}
bs = new WeakMap(), Yi = new WeakMap(), Ki = new WeakMap(), ji = new WeakMap();
var zh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Yt = (e, t, n) => (zh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $t = (e, t, n) => (zh(e, t, "access private method"), n), Jt, $a, Fh, ka, Uh, go, Vh, Sa, qh, Ti, yo, fr, wo, Ma, Gh, vo, _o, pr, Ta;
const Ea = class extends z {
  constructor() {
    super(...arguments), vt(this, $a), vt(this, ka), vt(this, go), vt(this, Sa), vt(this, Ti), vt(this, fr), vt(this, Ma), vt(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, vt(this, vo, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), vt(this, _o, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = $t(this, go, Vh).call(this), { cellHeight: n, grid: s } = this.props, i = Yt(this, Jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ f(
        Zf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Yt(this, vo),
          onDragEnd: Yt(this, _o)
        },
        r.id
      );
    }) }) });
  }
};
let Na = Ea;
Jt = /* @__PURE__ */ new WeakMap();
$a = /* @__PURE__ */ new WeakSet();
Fh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
ka = /* @__PURE__ */ new WeakSet();
Uh = function() {
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
    } = i, [u, p] = $t(this, $a, Fh).call(this, o);
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
Vh = function() {
  Yt(this, Jt).clear();
  let e = 0;
  const t = $t(this, ka, Uh).call(this);
  return t.forEach((n) => {
    $t(this, Sa, qh).call(this, n);
    const [, s, , i] = Yt(this, Jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Sa = /* @__PURE__ */ new WeakSet();
qh = function(e) {
  const t = Yt(this, Jt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = $t(this, Ma, Gh).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    $t(this, fr, wo).call(this, n, [s, i, r, o]);
};
Ti = /* @__PURE__ */ new WeakSet();
yo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Yt(this, Jt).entries())
    if (s !== n && $t(t = Ea, pr, Ta).call(t, i, e))
      return !1;
  return !0;
};
fr = /* @__PURE__ */ new WeakSet();
wo = function(e, t) {
  var n;
  Yt(this, Jt).set(e, t);
  for (const [s, i] of Yt(this, Jt).entries())
    s !== e && $t(n = Ea, pr, Ta).call(n, i, t) && (i[1] = t[1] + t[3], $t(this, fr, wo).call(this, s, i));
};
Ma = /* @__PURE__ */ new WeakSet();
Gh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if ($t(this, Ti, yo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if ($t(this, Ti, yo).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
vo = /* @__PURE__ */ new WeakMap();
_o = /* @__PURE__ */ new WeakMap();
pr = /* @__PURE__ */ new WeakSet();
Ta = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
vt(Na, pr);
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
class Yh extends G {
}
Yh.NAME = "Dashboard";
Yh.Component = Na;
var le, ce;
class bl extends z {
  constructor(n) {
    super(n);
    A(this, le, void 0);
    A(this, ce, void 0);
    W(this, le, 0), W(this, ce, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, le) && cancelAnimationFrame(C(this, le)), W(this, le, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), W(this, le, 0);
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
    n && (W(this, ce, typeof n == "string" ? document : n.current), C(this, ce).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: p } = this.state, m = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, y = {};
    return s === "horz" ? (m.height = i, m.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (m.width = i, m.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ f(
      "div",
      {
        className: S("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": p
        }),
        style: m,
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
function Kh({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...o
  }, { align: d, border: u } = e.setting, p = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, m = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], y = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, b = [], k = [], T = {}, M = {};
  let R = "div";
  _ == null || _.forEach((x) => {
    if (typeof x == "object" && x && !Q(x) && ("html" in x || "className" in x || "style" in x || "attrs" in x || "children" in x || "tagName" in x)) {
      const N = x.outer ? b : k;
      x.html ? N.push(/* @__PURE__ */ f("div", { className: S("dtable-cell-html", x.className), style: x.style, dangerouslySetInnerHTML: { __html: x.html }, ...x.attrs ?? {} })) : (x.style && Object.assign(x.outer ? c : p, x.style), x.className && (x.outer ? m : y).push(x.className), x.children && N.push(x.children), x.attrs && Object.assign(x.outer ? T : M, x.attrs)), x.tagName && !x.outer && (R = x.tagName);
    } else
      k.push(x);
  });
  const P = R;
  return /* @__PURE__ */ f(
    "div",
    {
      className: S(m),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...T,
      children: [
        k.length > 0 && /* @__PURE__ */ f(P, { className: S(y), style: p, ...M, children: k }),
        b
      ]
    }
  );
}
function Ar({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Kh, onRenderCell: l }) {
  return /* @__PURE__ */ f("div", { className: S("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ f(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function jh({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = Kh,
  onRenderCell: h,
  style: c,
  ...d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ f(
    Ar,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let p = null;
  r.list.length && (p = /* @__PURE__ */ f(
    Ar,
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
  let m = null;
  o.list.length && (m = /* @__PURE__ */ f(
    Ar,
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
  return /* @__PURE__ */ f(
    "div",
    {
      className: S("dtable-row", t),
      style: y,
      "data-id": e.id,
      ...d,
      children: [
        u,
        p,
        m
      ]
    }
  );
}
function Qf({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ f("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ f(jh, { ...s }) });
}
function tp({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ f("div", { className: S("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, d = a == null ? void 0 : a({ props: c, row: h }, q);
    return d && Object.assign(c, d), /* @__PURE__ */ f(jh, { ...c }, h.id);
  }) });
}
const Ei = /* @__PURE__ */ new Map(), Ni = [];
function Xh(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ei.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ei.set(n, e), t != null && t.buildIn && !Ni.includes(n) && Ni.push(n);
}
function ye(e, t) {
  Xh(e, t);
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
function Jh(e) {
  return Ei.delete(e);
}
function ep(e) {
  if (typeof e == "string") {
    const t = Ei.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Zh(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = ep(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Zh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function np(e = [], t = !0) {
  return t && Ni.length && e.unshift(...Ni), e != null && e.length ? Zh([], e, /* @__PURE__ */ new Set()) : [];
}
function Qh() {
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
function sp(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function xl(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Pr(e, t = !1) {
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
function ip(e, t, n, s) {
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
  }, p = [], m = {};
  let y = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: b, onAddCol: k } = _;
    b && Object.entries(b).forEach(([T, M]) => {
      w[T] || (w[T] = []), w[T].push(M);
    }), k && v.push(k);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: b = "", name: k } = _, T = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: b
    }, M = {
      name: k,
      type: b,
      setting: T,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, R = w[b];
    R && R.forEach((H) => {
      const I = typeof H == "function" ? H.call(e, T) : H;
      I && Object.assign(T, I, _);
    });
    const { fixed: P, flex: O, minWidth: x = r, maxWidth: N = o } = T, D = xl(T.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = sp(D < 1 ? Math.round(D * s) : D, x, N), v.forEach((H) => H.call(e, M)), p.push(M), m[M.name] = M;
    const L = P ? P === "left" ? d : u : c;
    L.list.push(M), L.totalWidth += M.width, L.width = L.totalWidth, M.flex && L.flexList.push(M), typeof T.order == "number" && (y = !0);
  }), y) {
    const _ = (b, k) => (b.setting.order ?? 0) - (k.setting.order ?? 0);
    p.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return Pr(d, !0), Pr(u, !0), c.widthSetting = s - d.width - u.width, Pr(c), {
    list: p,
    map: m,
    left: d,
    center: c,
    right: u
  };
}
var Ra = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (Ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, X = (e, t, n, s) => (Ra(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ht = (e, t, n) => (Ra(e, t, "access private method"), n), Xe, Hn, Pe, Ut, Me, Z, Bt, Ot, Bn, oi, Ri, ie, zn, Fn, bo, td, xo, ed, Co, nd, $o, sd, ai, ko, Aa, Pa, mr, Ai, So, Mo, La, id, Da, rd, To, od;
let Ia = class extends z {
  constructor(t) {
    super(t), B(this, bo), B(this, xo), B(this, Co), B(this, $o), B(this, ai), B(this, La), B(this, Da), B(this, To), this.ref = K(), B(this, Xe, 0), B(this, Hn, void 0), B(this, Pe, !1), B(this, Ut, void 0), B(this, Me, void 0), B(this, Z, []), B(this, Bt, void 0), B(this, Ot, /* @__PURE__ */ new Map()), B(this, Bn, {}), B(this, oi, void 0), B(this, Ri, []), this.updateLayout = () => {
      E(this, Xe) && cancelAnimationFrame(E(this, Xe)), X(this, Xe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), X(this, Xe, 0);
      }));
    }, B(this, ie, (n, s) => {
      s = s || n.type;
      const i = E(this, Ot).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, zn, (n) => {
      E(this, ie).call(this, n, `window_${n.type}`);
    }), B(this, Fn, (n) => {
      E(this, ie).call(this, n, `document_${n.type}`);
    }), B(this, Aa, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return E(this, Z).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), B(this, Pa, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), E(this, Z).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), B(this, mr, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, Z).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, Ai, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, So, (n) => {
      var a, l, h, c, d;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, Z).forEach((u) => {
          var p;
          (p = u.onHeaderCellClick) == null || p.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: u } = s, p = this.layout.visibleRows.find((m) => m.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: p, element: o, rowElement: u })) === !0)
            return;
          for (const m of E(this, Z))
            if (((h = m.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: p, element: o, rowElement: u })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: p, element: u })) === !0)
          return;
        for (const m of E(this, Z))
          if (((d = m.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: p, element: u })) === !0)
            return;
      }
    }), B(this, Mo, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), X(this, Hn, t.id ?? `dtable-${zc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, X(this, Me, Object.freeze(np(t.plugins))), E(this, Me).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, Bn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Bt)) == null ? void 0 : t.options) || E(this, Ut) || Qh();
  }
  get plugins() {
    return E(this, Z);
  }
  get layout() {
    return E(this, Bt);
  }
  get id() {
    return E(this, Hn);
  }
  get data() {
    return E(this, Bn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    X(this, Ut, void 0);
  }
  componentDidMount() {
    if (E(this, Pe) ? this.forceUpdate() : Ht(this, ai, ko).call(this), E(this, Z).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", E(this, So)), this.on("keydown", E(this, Mo)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), X(this, oi, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, Z).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    E(this, Pe) ? Ht(this, ai, ko).call(this) : E(this, Z).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = E(this, oi)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of E(this, Ot).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, zn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, Fn)) : t.removeEventListener(s, E(this, ie));
    E(this, Z).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, Me).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), X(this, Bn, {}), E(this, Ot).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, Ot).get(t);
    i ? i.push(n) : (E(this, Ot).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, zn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, Fn)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, ie)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, Ot).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, Ot).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, zn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, Fn)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, ie)));
  }
  emitCustomEvent(t, n) {
    E(this, ie).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
      const { offsetLeft: m, offsetTop: y } = t;
      typeof m == "number" && (d = s + m), typeof y == "number" && (d = i + y);
    }
    const p = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (p.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (p.scrollTop = u)), Object.keys(p).length ? (this.setState(p, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, p), n == null || n.call(this, !0);
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
    if (!E(this, Ut))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      X(this, Bt, void 0);
    else if (s === "options") {
      if (X(this, Ut, void 0), !E(this, Bt))
        return;
      X(this, Bt, void 0);
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
    return tt(E(this, Ri), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Ht(this, To, od).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      Ht(this, bo, td).call(this, t),
      Ht(this, xo, ed).call(this, t),
      Ht(this, Co, nd).call(this, t),
      Ht(this, $o, sd).call(this, t)
    ), E(this, Z).forEach((u) => {
      var m;
      const p = (m = u.onRender) == null ? void 0 : m.call(this, t);
      p && (p.style && Object.assign(h, p.style), p.className && c.push(p.className), p.children && d.push(p.children));
    })), /* @__PURE__ */ f(
      "div",
      {
        id: E(this, Hn),
        className: S(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakMap();
bo = /* @__PURE__ */ new WeakSet();
td = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      Qf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: E(this, mr),
        onRenderRow: E(this, Pa)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Yo,
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
xo = /* @__PURE__ */ new WeakSet();
ed = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ f(
    tp,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, mr),
      onRenderRow: E(this, Aa)
    },
    "rows"
  );
};
Co = /* @__PURE__ */ new WeakSet();
nd = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Yo,
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
sd = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      bl,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, Ai),
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
      bl,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, Ai),
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
  X(this, Pe, !1), (e = this.options.afterRender) == null || e.call(this), E(this, Z).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Aa = /* @__PURE__ */ new WeakMap();
Pa = /* @__PURE__ */ new WeakMap();
mr = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
So = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakMap();
La = /* @__PURE__ */ new WeakSet();
id = function() {
  if (E(this, Ut))
    return !1;
  const t = { ...Qh(), ...E(this, Me).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return X(this, Z, E(this, Me).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), X(this, Ut, t), X(this, Ri, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Da = /* @__PURE__ */ new WeakSet();
rd = function() {
  var P, O;
  const { plugins: e } = this;
  let t = E(this, Ut);
  const n = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((x) => {
    var D;
    const N = (D = x.beforeLayout) == null ? void 0 : D.call(this, t);
    N && (t = { ...t, ...N }), Object.assign(n, x.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: x } = this;
    if (x)
      i = x.clientWidth;
    else {
      X(this, Pe, !0);
      return;
    }
  }
  const r = ip(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (x, N, D) => {
    var H, I;
    const L = { data: D ?? { [a]: x }, id: x, index: h.length, top: 0 };
    if (D || (L.lazy = !0), h.push(L), ((H = t.onAddRow) == null ? void 0 : H.call(this, L, N)) !== !1) {
      for (const U of e)
        if (((I = U.onAddRow) == null ? void 0 : I.call(this, L, N)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let x = 0; x < o; x++)
      c(`${x}`, x);
  else
    Array.isArray(o) && o.forEach((x, N) => {
      typeof x == "object" ? c(`${x[a] ?? ""}`, N, x) : c(`${x ?? ""}`, N);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const x = t.onAddRows.call(this, d);
    x && (d = x);
  }
  for (const x of e) {
    const N = (P = x.onAddRows) == null ? void 0 : P.call(this, d);
    N && (d = N);
  }
  d.forEach((x, N) => {
    u[x.id] = x, x.index = N, x.top = x.index * l;
  });
  const { header: p, footer: m } = t, y = p ? t.headerHeight || l : 0, v = m ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const b = d.length * l, k = y + v + b;
  if (typeof w == "function" && (w = w.call(this, k)), w === "auto")
    _ = k;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, k));
  else if (w === "100%") {
    const { parent: x } = this;
    if (x)
      _ = x.clientHeight;
    else {
      _ = 0, X(this, Pe, !0);
      return;
    }
  } else
    _ = w;
  const T = _ - y - v, M = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: T,
    rowsHeightTotal: b,
    header: p,
    footer: m,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, R = (O = t.onLayout) == null ? void 0 : O.call(this, M);
  R && Object.assign(M, R), e.forEach((x) => {
    if (x.onLayout) {
      const N = x.onLayout.call(this, M);
      N && Object.assign(M, N);
    }
  }), X(this, Bt, M);
};
To = /* @__PURE__ */ new WeakSet();
od = function() {
  (Ht(this, La, id).call(this) || !E(this, Bt)) && Ht(this, Da, rd).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((m) => {
    m.left = s, s += m.realWidth, m.visible = m.left + m.realWidth >= n && m.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: p } = this.options;
  for (let m = h; m < d; m++) {
    const y = o[m];
    y.lazy && p && (y.data = p([y.id])[0], y.lazy = !1), u.push(y);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
Ia.addPlugin = Xh;
Ia.removePlugin = Jh;
function Cl(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const rp = {
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
      Cl(this, s);
    },
    mouseleave() {
      Cl(this, !1);
    }
  }
}, op = ye(rp, { buildIn: !0 });
function ap(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !ad.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function lp(e) {
  return this.state.checkedRows[e] ?? !1;
}
function ad() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function cp() {
  return Object.keys(this.state.checkedRows);
}
function hp(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function $l(e, t, n = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const dp = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: $l
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
    toggleCheckRows: ap,
    isRowChecked: lp,
    isAllRowChecked: ad,
    getChecks: cp,
    toggleCheckable: hp
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
      return { className: S(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = g(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, up = ye(dp);
var ld = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ld || {});
function Pi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Pi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Pi.call(this, t.parent).level + 1 : 0, t;
}
function fp(e) {
  return e !== void 0 ? Pi.call(this, e) : this.data.nestedMap;
}
function pp(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !cd.call(this)), t) {
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
function cd() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function hd(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = hd(e, t, o.children, s + 1)));
  }
  return t;
}
function dd(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, dd(e, r, n, s);
  }), i;
}
function ud(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && ud(e, r.parent, n, s, i);
}
const mp = {
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
        const o = dd(this, i, r, s);
        o != null && o.parent && ud(this, o.parent, r, s, n);
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
    getNestedInfo: fp,
    toggleRow: pp,
    isAllCollapsed: cd,
    getNestedRowInfo: Pi
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
    ), hd(this.data.nestedMap), e.sort((t, n) => {
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
      className: S(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = S(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, gp = ye(mp);
function fd(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: rt(i, t.row.data), ...s, ...r, ...a, children: n });
}
function Wa(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : rt(e, n);
}
function pd(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), fe(n, e, s ?? n));
}
function md(e, t) {
  const { link: n } = t.col.setting, s = fd(n, t, e[0]);
  return s && (e[0] = s), e;
}
function gd(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Wa(n, t, e[0])), e;
}
function yd(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function wd(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = pd(s, t, e[0], i), e;
}
function Eo(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : Wa(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const yp = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Eo(e, t, !0);
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
    if (n && (e = wd(e, t, n)), e = yd(e, t), e = gd(e, t), s ? e = Eo(e, t) : e = md(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = rt(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, wp = ye(yp, { buildIn: !0 });
function Lr(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], d = {
    size: "xs",
    className: S(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ f(Fc, { ...d }), n.type === "avatarBtn") {
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
const vp = {
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
}, _p = ye(vp, { buildIn: !0 }), bp = {
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
        e[0] = /* @__PURE__ */ f("a", { href: rt(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, xp = ye(bp, { buildIn: !0 }), Dr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Cp = {
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
}, $p = ye(Cp), kp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ld,
  avatar: _p,
  checkable: up,
  colHover: op,
  group: $p,
  nested: gp,
  renderDatetime: pd,
  renderDatetimeCell: wd,
  renderFormat: Wa,
  renderFormatCell: gd,
  renderHtmlCell: Eo,
  renderLink: fd,
  renderLinkCell: md,
  renderMapCell: yd,
  rich: wp,
  sortType: xp
}, Symbol.toStringTag, { value: "Module" }));
class Ms extends G {
}
Ms.NAME = "DTable";
Ms.Component = Ia;
Ms.definePlugin = ye;
Ms.removePlugin = Jh;
Ms.plugins = kp;
var vd = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, kl = (e, t, n) => (vd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sp = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Sl = (e, t, n, s) => (vd(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Je;
const Mp = "nav", li = '[data-toggle="tab"]', Tp = "active";
class _d extends pt {
  constructor() {
    super(...arguments), Sp(this, Je, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(li);
    let i = t ? g(t).closest(li) : s.filter(`.${Tp}`);
    if (!i.length && (i = n.find(li).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = g(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), kl(this, Je) && clearTimeout(kl(this, Je)), Sl(this, Je, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Sl(this, Je, 0);
    }, 10)));
  }
}
Je = /* @__PURE__ */ new WeakMap();
_d.NAME = "Tabs";
g(document).on("click.tabs.zui", li, (e) => {
  e.preventDefault();
  const t = g(e.target), n = t.closest(`.${Mp}`);
  n.length && _d.ensure(n).active(t);
});
g(() => {
  g(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  g as $,
  mc as ActionMenu,
  yc as ActionMenuNested,
  Uc as Avatar,
  Vc as BtnGroup,
  Kc as ColorPicker,
  pt as Component,
  G as ComponentFromReact,
  ot as ContextMenu,
  er as CustomContent,
  Yo as CustomRender,
  Ms as DTable,
  Yh as Dashboard,
  eh as DatePicker,
  Gt as Dropdown,
  Bc as EventBus,
  cc as HElement,
  Go as HtmlContent,
  et as Icon,
  wc as Menu,
  Wc as Messager,
  sh as Modal,
  Qt as ModalBase,
  ah as ModalTrigger,
  ch as Nav,
  hh as Pager,
  dh as Pick,
  yh as Picker,
  wh as Popovers,
  Hc as ProgressCircle,
  z as ReactComponent,
  _h as SearchBox,
  es as TIME_DAY,
  _d as Tabs,
  th as TimePicker,
  bh as Toolbar,
  ut as Tooltip,
  Hh as Tree,
  Bh as Upload,
  Jf as UploadImgs,
  g as cash,
  S as classes,
  br as componentsMap,
  uu as convertBytes,
  yu as create,
  nt as createDate,
  Mu as createPortal,
  K as createRef,
  hu as deepGet,
  cu as deepGetPath,
  ui as delay,
  Np as dom,
  du as formatBytes,
  fe as formatDate,
  Gp as formatDateSpan,
  rt as formatString,
  Yl as getClassList,
  q as h,
  Rp as hh,
  xu as htm,
  tt as i18n,
  ks as isSameDay,
  jc as isSameMonth,
  Fp as isSameWeek,
  jr as isSameYear,
  Up as isToday,
  qp as isTomorrow,
  Q as isValidElement,
  Vp as isYesterday,
  ol as nativeEvents,
  Qn as render,
  hc as renderCustomContent,
  $u as renderCustomResult,
  sf as store,
  Kl as storeData,
  gu as takeData
};
//# sourceMappingURL=zui.js.map
