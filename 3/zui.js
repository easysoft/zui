var vr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (vr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, O = (e, t, n, s) => (vr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var Lt = (e, t, n) => (vr(e, t, "access private method"), n);
const jt = document, di = window, Nl = jt.documentElement, We = jt.createElement.bind(jt), Rl = We("div"), _r = We("table"), kd = We("tbody"), Oa = We("tr"), { isArray: Qi, prototype: Al } = Array, { concat: Sd, filter: Po, indexOf: Pl, map: Ll, push: Md, slice: Dl, some: Lo, splice: Td } = Al, Ed = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Nd = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Rd = /<.+>/, Ad = /^\w+$/;
function Do(e, t) {
  const n = Pd(t);
  return !e || !n && !Ae(t) && !Y(t) ? [] : !n && Nd.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Ad.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class tr {
  constructor(t, n) {
    if (!t)
      return;
    if (Wr(t))
      return t;
    let s = t;
    if (st(t)) {
      const i = n || jt;
      if (s = Ed.test(t) && Ae(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Rd.test(t) ? Ol(t) : Wr(i) ? i.find(t) : st(i) ? m(i).find(t) : Do(t, i), !s)
        return;
    } else if (Oe(t))
      return this.ready(t);
    (s.nodeType || s === di) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new tr(t, n);
  }
}
const $ = tr.prototype, m = $.init;
m.fn = m.prototype = $;
$.length = 0;
$.splice = Td;
typeof Symbol == "function" && ($[Symbol.iterator] = Al[Symbol.iterator]);
function Wr(e) {
  return e instanceof tr;
}
function fn(e) {
  return !!e && e === e.window;
}
function Ae(e) {
  return !!e && e.nodeType === 9;
}
function Pd(e) {
  return !!e && e.nodeType === 11;
}
function Y(e) {
  return !!e && e.nodeType === 1;
}
function Ld(e) {
  return !!e && e.nodeType === 3;
}
function Dd(e) {
  return typeof e == "boolean";
}
function Oe(e) {
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
function Il(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Io(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = fn;
m.isFunction = Oe;
m.isArray = Qi;
m.isNumeric = Il;
m.isPlainObject = Io;
function J(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Io(e)) {
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
$.each = function(e) {
  return J(this, e);
};
$.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function ui(...e) {
  const t = Dd(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return ui(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Qi(r[o]) || Io(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), ui(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = ui;
$.extend = function(e) {
  return ui($, e);
};
const Id = /\S+/g;
function er(e) {
  return st(e) ? e.match(Id) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = er(e), s = !ct(t);
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
  const t = er(e);
  return this.each((n, s) => {
    Y(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Wd(e, t) {
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
$.attr = Wd;
$.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
$.hasClass = function(e) {
  return !!e && Lo.call(this, (t) => Y(t) && t.classList.contains(e));
};
$.get = function(e) {
  return ct(e) ? Dl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
$.eq = function(e) {
  return m(this.get(e));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function Od(e) {
  return ct(e) ? this.get().map((t) => Y(t) || Ld(t) ? t.textContent : "").join("") : this.each((t, n) => {
    Y(n) && (n.textContent = e);
  });
}
$.text = Od;
function Xt(e, t, n) {
  if (!Y(e))
    return;
  const s = di.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function Nt(e, t) {
  return parseInt(Xt(e, t), 10) || 0;
}
function Ha(e, t) {
  return Nt(e, `border${t ? "Left" : "Top"}Width`) + Nt(e, `padding${t ? "Left" : "Top"}`) + Nt(e, `padding${t ? "Right" : "Bottom"}`) + Nt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const br = {};
function Hd(e) {
  if (br[e])
    return br[e];
  const t = We(e);
  jt.body.insertBefore(t, null);
  const n = Xt(t, "display");
  return jt.body.removeChild(t), br[e] = n !== "none" ? n : "block";
}
function Ba(e) {
  return Xt(e, "display") === "none";
}
function Wl(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function nr(e) {
  return st(e) ? (t, n) => Wl(n, e) : Oe(e) ? e : Wr(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
$.filter = function(e) {
  const t = nr(e);
  return m(Po.call(this, (n, s) => t.call(n, s, n)));
};
function me(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return me(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Bd = /^\s*<(\w+)[^>]*>/, zd = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, za = {
  "*": Rl,
  tr: kd,
  td: Oa,
  th: Oa,
  thead: _r,
  tbody: _r,
  tfoot: _r
};
function Ol(e) {
  if (!st(e))
    return [];
  if (zd.test(e))
    return [We(RegExp.$1)];
  const t = Bd.test(e) && RegExp.$1, n = za[t] || za["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Ol;
$.has = function(e) {
  const t = st(e) ? (n, s) => Do(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
$.not = function(e) {
  const t = nr(e);
  return this.filter((n, s) => (!st(e) || Y(s)) && !t.call(s, n, s));
};
function Qt(e, t, n, s) {
  const i = [], r = Oe(t), o = s && nr(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Md.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Hl(e) {
  return e.multiple && e.options ? Qt(Po.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Fd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || Yl.test(n.type)) {
      const i = Qi(e) ? Ll.call(e, String) : Kn(e) ? [] : [String(e)];
      s ? J(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ct(e) || Kn(e) ? "" : e;
  }) : this[0] && Hl(this[0]);
}
$.val = Fd;
$.is = function(e) {
  const t = nr(e);
  return Lo.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Pt(e) {
  return e.length > 1 ? Po.call(e, (t, n, s) => Pl.call(s, t) === n) : e;
}
m.unique = Pt;
$.add = function(e, t) {
  return m(Pt(this.get().concat(m(e, t).get())));
};
$.children = function(e) {
  return me(m(Pt(Qt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return me(m(Pt(Qt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return Pl.call(n, t);
};
$.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
$.siblings = function(e) {
  return me(m(Pt(Qt(this, (t) => m(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return m(Pt(Qt(this, (t) => Do(e, t))));
};
const Vd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ud = /^$|^module$|\/(java|ecma)script/i, qd = ["type", "src", "nonce", "noModule"];
function Gd(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Ud.test(i.type) && Nl.contains(i)) {
      const r = We("script");
      r.text = i.textContent.replace(Vd, ""), J(qd, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Yd(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Gd(t, e.ownerDocument);
}
function ge(e, t, n, s, i, r, o, a) {
  return J(e, (l, h) => {
    J(m(h), (c, d) => {
      J(m(t), (u, f) => {
        const g = n ? d : f, y = n ? f : d, v = n ? c : u;
        Yd(g, v ? y.cloneNode(!0) : y, s, i, !v);
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
function Kd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ct(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    Y(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = Kd;
$.appendTo = function(e) {
  return ge(arguments, this, !0, !1, !0);
};
$.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
$.before = function() {
  return ge(arguments, this, !1, !0);
};
$.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
$.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
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
  return m(Pt(Qt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return me(m(Pt(Qt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return me(m(Pt(Qt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return me(m(Pt(Qt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return m(Sd.apply([], Ll.call(this, (t, n) => e.call(t, n, t))));
};
$.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Xt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Nl;
  });
};
$.slice = function(e, t) {
  return m(Dl.call(this, e, t));
};
const jd = /-([a-z])/g;
function Wo(e) {
  return e.replace(jd, (t, n) => n.toUpperCase());
}
$.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return jt.readyState !== "loading" ? t() : jt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
$.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + di.pageYOffset,
    left: t.left + di.pageXOffset
  };
};
$.position = function() {
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
const Bl = {
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
    if (st(e))
      return e = Bl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
$.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Bl[e] || e];
  });
};
const Xd = /^--/;
function Oo(e) {
  return Xd.test(e);
}
const Cr = {}, { style: Jd } = Rl, Zd = ["webkit", "moz", "ms"];
function Qd(e, t = Oo(e)) {
  if (t)
    return e;
  if (!Cr[e]) {
    const n = Wo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Zd.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in Jd)
        return Cr[e] = o, !1;
    });
  }
  return Cr[e];
}
const tu = {
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
function zl(e, t, n = Oo(e)) {
  return !n && !tu[e] && Il(t) ? `${t}px` : t;
}
function eu(e, t) {
  if (st(e)) {
    const n = Oo(e);
    return e = Qd(e, n), arguments.length < 2 ? this[0] && Xt(this[0], e, n) : e ? (t = zl(e, t, n), this.each((s, i) => {
      Y(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
$.css = eu;
function Fl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const nu = /^\s+|\s+$/;
function Fa(e, t) {
  const n = e.dataset[t] || e.dataset[Wo(t)];
  return nu.test(n) ? n : Fl(JSON.parse, n);
}
function su(e, t, n) {
  n = Fl(JSON.stringify, n), e.dataset[Wo(t)] = n;
}
function iu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Fa(this[0], s);
    return n;
  }
  if (st(e))
    return arguments.length < 2 ? this[0] && Fa(this[0], e) : ct(t) ? this : this.each((n, s) => {
      su(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
$.data = iu;
function Vl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
J([!0, !1], (e, t) => {
  J(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return fn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ae(this[0]) ? Vl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Nt(this[0], `margin${n ? "Top" : "Left"}`) + Nt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return ct(s) ? void 0 : this;
    if (!arguments.length)
      return fn(this[0]) ? this[0].document.documentElement[`client${t}`] : Ae(this[0]) ? Vl(this[0], t) : this[0].getBoundingClientRect()[n] - Ha(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = Xt(o, "boxSizing");
      o.style[n] = zl(n, i + (a === "border-box" ? Ha(o, !e) : 0));
    });
  };
});
const Va = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!Y(n))
      return;
    const s = Ba(n);
    (ct(e) ? s : e) ? (n.style.display = n[Va] || "", Ba(n) && (n.style.display = Hd(n.tagName))) : s || (n[Va] = Xt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const Ua = "___ce", Ho = ".", Bo = { focus: "focusin", blur: "focusout" }, Ul = { mouseenter: "mouseover", mouseleave: "mouseout" }, ru = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function zo(e) {
  return Ul[e] || Bo[e] || e;
}
function Fo(e) {
  const t = e.split(Ho);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(e, t) {
  if (st(e)) {
    const [s, i] = Fo(e), r = zo(s);
    if (!r)
      return this;
    const o = ru.test(r) ? "MouseEvents" : "HTMLEvents";
    e = jt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(Ho), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Bo;
  return this.each((s, i) => {
    n && Oe(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function ql(e) {
  return e[Ua] = e[Ua] || {};
}
function ou(e, t, n, s, i) {
  const r = ql(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function Gl(e, t) {
  return !t || !Lo.call(t, (n) => e.indexOf(n) < 0);
}
function fi(e, t, n, s, i) {
  const r = ql(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Gl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      fi(e, t, n, s, i);
}
$.off = function(e, t, n) {
  if (ct(e))
    this.each((s, i) => {
      !Y(i) && !Ae(i) && !fn(i) || fi(i);
    });
  else if (st(e))
    Oe(t) && (n = t, t = ""), J(er(e), (s, i) => {
      const [r, o] = Fo(i), a = zo(r);
      this.each((l, h) => {
        !Y(h) && !Ae(h) && !fn(h) || fi(h, a, o, t, n);
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
  return m(e).replaceWith(this), this;
};
function au(e, t, n, s, i) {
  if (!st(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return st(t) || (ct(t) || Kn(t) ? t = "" : ct(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Oe(s) || (s = n, n = void 0), s ? (J(er(e), (r, o) => {
    const [a, l] = Fo(o), h = zo(a), c = a in Ul, d = a in Bo;
    h && this.each((u, f) => {
      if (!Y(f) && !Ae(f) && !fn(f))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Gl(l, y.namespace.split(Ho)) || !t && (d && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = y.target;
          for (; !Wl(_, t); )
            if (_ === f || (_ = _.parentNode, !_))
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
            return f;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, y, y.___td);
        i && fi(f, h, l, t, g), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || m.guid++, ou(f, h, l, t, g);
    });
  }), this) : this;
}
$.on = au;
function lu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
$.one = lu;
const cu = /\r?\n/g;
function hu(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(cu, `\r
`))}`;
}
const du = /file|reset|submit|button|image/i, Yl = /radio|checkbox/i;
$.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    J(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || du.test(i.type) || Yl.test(i.type) && !i.checked)
        return;
      const r = Hl(i);
      if (!ct(r)) {
        const o = Qi(r) ? r : [r];
        J(o, (a, l) => {
          e += hu(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function uu(e, t) {
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
function fu(e, t, n) {
  try {
    const s = uu(e, t), i = s[s.length - 1];
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
var Vo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Vo || {});
function pu(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Vo[n]).toFixed(t) + n);
}
const mu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Vo[s];
};
let Uo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), re;
function gu() {
  return Uo;
}
function yu(e) {
  Uo = e.toLowerCase();
}
function Kl(e, t) {
  re || (re = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, re, e);
}
function tt(e, t, n, s, i, r) {
  Array.isArray(e) ? re && e.unshift(re) : e = re ? [re, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Uo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === re ? `${r}.${t}` : t;
    if (a = fu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? it(a, ...Array.isArray(n) ? n : [n]) : a;
}
function wu(e, t, n, s) {
  return tt(void 0, e, t, n, s);
}
tt.addLang = Kl;
tt.getLang = wu;
tt.getCode = gu;
tt.setCode = yu;
Kl({
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
function jl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? jl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const E = (...e) => jl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = E;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", E(i.attr("class"), ...t)) : i.addClass(E(e, ...t));
  });
};
const bn = /* @__PURE__ */ new WeakMap();
function Xl(e, t, n) {
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
  return !e.length || e.length === 1 && typeof t == "string" ? vu(this[0], t) : this.each((s, i) => Xl(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => Xl(n, e));
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
const pi = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), Fs = /* @__PURE__ */ new Map();
function mi(e) {
  const { zui: t } = window;
  return Fs.size || Object.keys(t).forEach((n) => {
    const s = t[n];
    s.ZUI && Fs.set(n.toLowerCase(), s);
  }), e ? Fs.get(e.toLowerCase()) : void 0;
}
function _u(e, t, n) {
  const s = mi(e);
  return s ? new s(t, n) : null;
}
function Lp(e) {
  if (e) {
    const t = mi(e);
    t && t.defineFn();
  } else
    mi(), Fs.forEach((t) => {
      t.defineFn();
    });
}
m.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, _u(n, this, t);
  }), this;
};
m.fn.zui = function(e, t) {
  const n = this[0];
  if (!n)
    return;
  const s = mi(e);
  if (s)
    return t === !0 ? s.getAll(n) : s.query(n, t);
};
m(() => {
  m("body").zuiInit();
});
function qo(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = n.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: v, clientWidth: w } = document.documentElement;
    s = { left: 0, top: 0, width: y || w, height: g || v };
  }
  const { left: l, top: h, width: c, height: d } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= h && i + o <= c && r + a <= d;
  const u = i <= c && i + o >= l;
  return r <= d && r + a >= h && u;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    qo(n, e);
  });
};
function Go(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    Go(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    Go(n, e);
  });
};
function Jl(e, t) {
  const n = m(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && qo(o, { viewport: o.getBoundingClientRect() }) || o.scrollIntoView(i);
  }), n;
}
m.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    Jl(n, e);
  });
};
const Dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: qo,
  runJS: Go,
  scrollIntoView: Jl
}, Symbol.toStringTag, { value: "Module" }));
var sr, F, Zl, Q, xe, qa, Ql, Or, gi = {}, tc = [], bu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Yo = Array.isArray;
function he(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ec(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function j(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? sr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Vs(e, o, s, i, null);
}
function Vs(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Zl };
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
function nc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return nc(e);
  }
}
function Ga(e) {
  (!e.__d && (e.__d = !0) && xe.push(e) && !yi.__r++ || qa !== F.debounceRendering) && ((qa = F.debounceRendering) || Ql)(yi);
}
function yi() {
  var e, t, n, s, i, r, o, a;
  for (xe.sort(Or); e = xe.shift(); )
    e.__d && (t = xe.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = he({}, r)).__v = r.__v + 1, Ko(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? jn(r), r.__h), ac(s, r), r.__e != o && nc(r)), xe.length > t && xe.sort(Or));
  yi.__r = 0;
}
function sc(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, f, g, y, v, w = s && s.__k || tc, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Vs(null, f, null, null, f) : Yo(f) ? Vs(mn, { children: f }, null, null, null) : f.__b > 0 ? Vs(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (u = w[c]) === null || u && f.key == u.key && f.type === u.type)
        w[c] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((u = w[d]) && f.key == u.key && f.type === u.type) {
            w[d] = void 0;
            break;
          }
          u = null;
        }
      Ko(e, f, u = u || gi, i, r, o, a, l, h), g = f.__e, (d = f.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, f), v.push(d, f.__c || g, f)), g != null ? (y == null && (y = g), typeof f.type == "function" && f.__k === u.__k ? f.__d = l = ic(f, l, e) : l = rc(e, f, u, w, g, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = jn(u));
    }
  for (n.__e = y, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = oc(s).nextSibling), cc(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      lc(v[c], v[++c], v[++c]);
}
function ic(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? ic(s, t, n) : rc(n, s, s, i, s.__e, t));
  return t;
}
function rc(e, t, n, s, i, r) {
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
function oc(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = oc(n)))
        return s;
  }
  return null;
}
function Cu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || wi(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || wi(e, r, t[r], n[r], s);
}
function Ya(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || bu.test(t) ? n : n + "px";
}
function wi(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Ya(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Ya(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? ja : Ka, r) : e.removeEventListener(t, r ? ja : Ka, r);
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
function Ka(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function ja(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Ko(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, f, g, y, v, w, _, b, k, x, S, R, P = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = F.__b) && h(t);
  try {
    t:
      if (typeof P == "function") {
        if (v = t.props, w = (h = P.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? t.__c = c = new P(v, _) : (t.__c = c = new z(v, _), c.constructor = P, c.render = $u), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = he({}, c.__s)), he(c.__s, P.getDerivedStateFromProps(v, c.__s))), u = c.props, f = c.state, c.__v = t, d)
          P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && v !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), b = 0; b < c._sb.length; b++)
              c.__h.push(c._sb[b]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, f, g);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, k = F.__r, x = 0, "prototype" in P && P.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), S = 0; S < c._sb.length; S++)
            c.__h.push(c._sb[S]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++x < 25);
        c.state = c.__s, c.getChildContext != null && (s = he(he({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (g = c.getSnapshotBeforeUpdate(u, f)), sc(e, Yo(R = h != null && h.type === mn && h.key == null ? h.props.children : h) ? R : [R], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = xu(n.__e, t, n, s, i, r, o, l);
    (h = F.diffed) && h(t);
  } catch (H) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), F.__e(H, t, n);
  }
}
function ac(e, t) {
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
function xu(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, f = t.type, g = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; g < r.length; g++)
      if ((l = r[g]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, r[g] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, u.is && u), r = null, a = !1;
  }
  if (f === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && sr.call(e.childNodes), h = (d = n.props || gi).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, g = 0; g < e.attributes.length; g++)
          d[e.attributes[g].name] = e.attributes[g].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Cu(e, u, d, i, a), c)
      t.__k = [];
    else if (sc(e, Yo(g = t.props.children) ? g : [g], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && jn(n, 0), a), r != null)
      for (g = r.length; g--; )
        r[g] != null && ec(r[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || f === "progress" && !g || f === "option" && g !== d.value) && wi(e, "value", g, d.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && wi(e, "checked", g, d.checked, !1));
  }
  return e;
}
function lc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    F.__e(s, n);
  }
}
function cc(e, t, n) {
  var s, i;
  if (F.unmount && F.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || lc(s, null, t)), (s = e.__c) != null) {
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
      s[i] && cc(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || ec(e.__e), e.__ = e.__e = e.__d = void 0;
}
function $u(e, t, n) {
  return this.constructor(e, n);
}
function Xn(e, t, n) {
  var s, i, r;
  F.__ && F.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Ko(t, e = (!s && n || t).__k = j(mn, null, [e]), i || gi, gi, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? sr.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), ac(r, e);
}
sr = tc.slice, F = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Zl = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof e == "function" && (e = e(he({}, n), this.props)), e && he(n, e), e != null && this.__v && (t && this._sb.push(t), Ga(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ga(this));
}, z.prototype.render = mn, xe = [], Ql = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Or = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, yi.__r = 0;
var hc = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, hc(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, Xa = /* @__PURE__ */ new Map();
function ku(e) {
  var t = Xa.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Xa.set(this, t)), (t = hc(this, t.get(e) || (t.set(e, t = function(n) {
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
const Ip = ku.bind(j);
function dc(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return j(t, { ref: o, class: E(n), style: s, ...a, ...r }, i);
}
var Su = 0;
function p(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Su, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(h), h;
}
var ns;
class jo extends z {
  constructor() {
    super(...arguments);
    L(this, ns, K());
  }
  componentDidMount() {
    this.props.executeScript && m(C(this, ns).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ p(dc, { forwardRef: C(this, ns), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
ns = new WeakMap();
function Mu(e) {
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
  } = e, d = [n], u = { ...s }, f = [], g = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(o, y, f, ...r));
      else {
        const w = y.call(o, f, ...r);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(y);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Q(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ p("div", { className: E(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), g.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: E(d),
    style: u,
    ...c
  }, f];
}
function Xo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Mu(t);
  return j(e, n, ...s);
}
function uc(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => uc(s, t, n)) : Q(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ p(jo, { ...e }) : /* @__PURE__ */ p(dc, { ...e }) : e;
}
function bs(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = uc(t, n, s);
  return i == null || typeof i == "boolean" ? null : Q(i) ? i : /* @__PURE__ */ p(mn, { children: i });
}
const Ja = (e) => e.startsWith("icon-") ? e : `icon-${e}`;
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Q(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(Ja(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Ja(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ p("i", { className: E(i), ...s });
}
function Tu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Eu(e) {
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
    j(Tu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Nu(e, t) {
  const n = j(Eu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var fc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Be = (e, t, n) => (fc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ns = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ze = (e, t, n, s) => (fc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ve, Cn, Us, qs;
const pc = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    Ns(this, ve, void 0), Ns(this, Cn, void 0), Ns(this, Us, void 0), Ns(this, qs, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (ze(this, Us, a), ze(this, Cn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), ze(this, ve, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      ze(this, qs, !0), this.emit("inited", this.options), this.afterInit();
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (e) => e.toLowerCase());
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
    return Be(this, qs);
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
    return Be(this, Us);
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
    let t = e || this.ZUI;
    m.fn[t] && (t = `zui${this.NAME}`);
    const n = this;
    m.fn.extend({
      [t](s, ...i) {
        const r = typeof s == "object" ? s : void 0, o = typeof s == "string" ? s : void 0;
        return this.each((a, l) => {
          var c;
          let h = n.get(l);
          h ? r && h.render(r) : h = new n(l, r), o && ((c = h[o]) == null || c.call(h, ...i));
        });
      }
    });
  }
};
let mt = pc;
ve = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
mt.DEFAULT = {};
mt.NAME = pc.name;
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
function Ru({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return j(e, {
    className: E(t),
    style: s,
    ...i
  }, n);
}
function mc({
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
  hint: f,
  checked: g,
  onClick: y,
  ...v
}) {
  const w = [
    typeof g == "boolean" ? /* @__PURE__ */ p("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ p("label", {}) }) : null,
    /* @__PURE__ */ p(nt, { icon: h }),
    /* @__PURE__ */ p("span", { className: "text", children: c }),
    /* @__PURE__ */ p(bs, { content: i }),
    s,
    /* @__PURE__ */ p(nt, { icon: u })
  ];
  return j(t, {
    className: E(n, { disabled: a, active: l }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...v,
    ...r
  }, ...w);
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
    className: E(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ p(bs, { content: r }), i);
}
function Pu({
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
    className: E(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Lu({ type: e, ...t }) {
  return /* @__PURE__ */ p(Xo, { ...t });
}
function gc({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return j(e, {
    className: E(t),
    style: i,
    ...r
  }, /* @__PURE__ */ p(bs, { content: s }), n);
}
const Hr = class extends z {
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
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = E(o.className), r && (o = r(o)), o;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const g = i[t.type || "item"];
        if (g)
          return /* @__PURE__ */ p(g, { ...s });
      } else if (typeof i == "function") {
        const g = i.call(this, s, j);
        if (Q(g))
          return g;
        typeof g == "object" && Object.assign(s, g);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ p(
        "li",
        {
          className: E("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Hr.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(f, {
      className: E(h),
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
    return /* @__PURE__ */ p(
      "li",
      {
        className: E(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ p(e, { ...n }),
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
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ p(f, { class: E(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let He = Hr;
He.ItemComponents = {
  divider: Ru,
  item: mc,
  heading: Au,
  space: Pu,
  custom: Lu,
  basic: gc
};
He.ROOT_TAG = "menu";
He.NAME = "action-menu";
class yc extends q {
}
yc.NAME = "ActionMenu";
yc.Component = He;
function Du({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ p(mc, { ...s });
}
var wc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, yt = (e, t, n) => (wc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Iu = (e, t, n, s) => (wc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Gs, It, xn;
let ir = class extends He {
  constructor(t) {
    super(t), xr(this, Gs, /* @__PURE__ */ new Set()), xr(this, It, void 0), xr(this, xn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Iu(this, It, t.nestedShow === void 0), yt(this, It) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = E(a.className, "no-nested-items")), !r && o && (a.style = Object.assign({
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
    return /* @__PURE__ */ p(s, { ...i, "data-level": i.level });
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
    yt(this, Gs).add(r);
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
    if (typeof i == "boolean" && (i === !0 ? i = [...yt(this, Gs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
Gs = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
xn = /* @__PURE__ */ new WeakMap();
ir.ItemComponents = {
  item: Du
};
class vc extends q {
}
vc.NAME = "ActionMenuNested";
vc.Component = ir;
let ue = class extends ir {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = E(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ p("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
ue.NAME = "menu";
class _c extends q {
}
_c.NAME = "Menu";
_c.Component = ue;
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
      loadingText: f,
      icon: g,
      text: y,
      trailingIcon: v,
      caret: w,
      square: _,
      rounded: b = !0,
      hint: k,
      ...x
    } = this.props, S = t || (a ? "a" : "button"), R = y == null || typeof y == "string" && !y.length || d && !f, P = w && R && !g && !v && !o && !d;
    return j(
      S,
      {
        className: E("btn", n, r, {
          "btn-caret": P,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !P && !o && R : _
        }, i ? `size-${i}` : "", typeof b == "string" ? b : { rounded: b }),
        title: k,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: l,
        type: S === "button" ? s : void 0,
        ...x
      },
      d ? /* @__PURE__ */ p(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ p(nt, { icon: g }),
      R ? null : /* @__PURE__ */ p("span", { className: "text", children: d ? f : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ p(nt, { icon: v }),
      d ? null : w ? /* @__PURE__ */ p("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Wu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ p(et, { type: n, ...s });
}
function Cs(e) {
  return e.split("-")[1];
}
function Jo(e) {
  return e === "y" ? "height" : "width";
}
function Me(e) {
  return e.split("-")[0];
}
function xs(e) {
  return ["top", "bottom"].includes(Me(e)) ? "x" : "y";
}
function Za(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = xs(t), l = Jo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Me(t)) {
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
const Ou = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Za(h, s, l), u = s, f = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: b, data: k, reset: x } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, f = { ...f, [v]: { ...f[v], ...k } }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (u = x.placement), x.rects && (h = x.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : x.rects), { x: c, y: d } = Za(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function $s(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function vi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Cc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = $s(t, e), g = bc(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = vi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = vi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + g.top) / b.y, bottom: (k.bottom - v.bottom + g.bottom) / b.y, left: (v.left - k.left + g.left) / b.x, right: (k.right - v.right + g.right) / b.x };
}
const Br = Math.min, Hu = Math.max;
function zr(e, t, n) {
  return Hu(e, Br(t, n));
}
const Fr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = $s(e, t) || {};
  if (l == null)
    return {};
  const c = bc(h), d = { x: n, y: s }, u = xs(i), f = Jo(u), g = await o.getDimensions(l), y = u === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", b = r.reference[f] + r.reference[u] - d[u] - r.floating[f], k = d[u] - r.reference[u], x = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let S = x ? x[_] : 0;
  S && await (o.isElement == null ? void 0 : o.isElement(x)) || (S = a.floating[_] || r.floating[f]);
  const R = b / 2 - k / 2, P = S / 2 - g[f] / 2 - 1, H = Br(c[v], P), M = Br(c[w], P), A = H, D = S - g[f] - M, T = S / 2 - g[f] / 2 + R, I = zr(A, T, D), W = Cs(i) != null && T != I && r.reference[f] / 2 - (T < A ? H : M) - g[f] / 2 < 0 ? T < A ? A - T : D - T : 0;
  return { [u]: d[u] - W, data: { [u]: I, centerOffset: T - I + W } };
} }), Bu = ["top", "right", "bottom", "left"];
Bu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const zu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _i(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zu[t]);
}
function Fu(e, t, n) {
  n === void 0 && (n = !1);
  const s = Cs(e), i = xs(e), r = Jo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = _i(o)), { main: o, cross: _i(o) };
}
const Vu = { start: "end", end: "start" };
function $r(e) {
  return e.replace(/start|end/g, (t) => Vu[t]);
}
const rr = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: g = !0, ...y } = $s(e, t), v = Me(s), w = Me(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (w || !g ? [_i(o)] : function(A) {
      const D = _i(A);
      return [$r(A), D, $r(D)];
    }(o));
    d || f === "none" || b.push(...function(A, D, T, I) {
      const W = Cs(A);
      let V = function(ot, gn, Ts) {
        const yn = ["left", "right"], Es = ["right", "left"], wr = ["top", "bottom"], $d = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Ts ? gn ? Es : yn : gn ? yn : Es;
          case "left":
          case "right":
            return gn ? wr : $d;
          default:
            return [];
        }
      }(Me(A), T === "start", I);
      return W && (V = V.map((ot) => ot + "-" + W), D && (V = V.concat(V.map($r)))), V;
    }(o, g, f, _));
    const k = [o, ...b], x = await Cc(t, y), S = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && S.push(x[v]), c) {
      const { main: A, cross: D } = Fu(s, r, _);
      S.push(x[A], x[D]);
    }
    if (R = [...R, { placement: s, overflows: S }], !S.every((A) => A <= 0)) {
      var P, H;
      const A = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, D = k[A];
      if (D)
        return { data: { index: A, overflows: R }, reset: { placement: D } };
      let T = (H = R.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!T)
        switch (u) {
          case "bestFit": {
            var M;
            const I = (M = R.map((W) => [W.placement, W.overflows.filter((V) => V > 0).reduce((V, ot) => V + ot, 0)]).sort((W, V) => W[1] - V[1])[0]) == null ? void 0 : M[0];
            I && (T = I);
            break;
          }
          case "initialPlacement":
            T = o;
        }
      if (s !== T)
        return { reset: { placement: T } };
    }
    return {};
  } };
}, or = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Me(a), u = Cs(a), f = xs(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = $s(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: b } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), f ? { x: _ * y, y: w * g } : { x: w * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Uu(e) {
  return e === "x" ? "y" : "x";
}
const bi = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = $s(e, t), h = { x: n, y: s }, c = await Cc(t, l), d = xs(Me(i)), u = Uu(d);
    let f = h[d], g = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      f = zr(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      g = zr(g + c[u === "y" ? "top" : "left"], g, g - c[v]);
    }
    const y = a.fn({ ...t, [d]: f, [u]: g });
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
function xc(e) {
  return e instanceof ut(e).Node;
}
function fe(e) {
  return xc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function xt(e) {
  return e instanceof ut(e).HTMLElement;
}
function qt(e) {
  return e instanceof ut(e).Element;
}
function Qa(e) {
  return typeof ShadowRoot < "u" && (e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot);
}
function Jn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function qu(e) {
  return ["table", "td", "th"].includes(fe(e));
}
function Vr(e) {
  const t = Zo(), n = bt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Zo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function ar(e) {
  return ["html", "body", "#document"].includes(fe(e));
}
const Ur = Math.min, Ze = Math.max, Ci = Math.round, Rs = Math.floor, Pe = (e) => ({ x: e, y: e });
function $c(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = xt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = Ci(n) !== r || Ci(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function Qo(e) {
  return qt(e) ? e : e.contextElement;
}
function Qe(e) {
  const t = Qo(e);
  if (!xt(t))
    return Pe(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = $c(t);
  let o = (r ? Ci(n.width) : n.width) / s, a = (r ? Ci(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const tl = Pe(0);
function kc(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Zo())
    return tl;
  const r = e ? ut(e) : window;
  return !n || t && n !== r ? tl : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Le(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = Qo(e);
  let o = Pe(1);
  t && (s ? qt(s) && (o = Qe(s)) : o = Qe(e));
  const a = kc(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = ut(r), f = s && qt(s) ? ut(s) : s;
    let g = u.frameElement;
    for (; g && s && f !== u; ) {
      const y = Qe(g), v = g.getBoundingClientRect(), w = getComputedStyle(g), _ = v.left + (g.clientLeft + parseFloat(w.paddingLeft)) * y.x, b = v.top + (g.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += b, g = ut(g).frameElement;
    }
  }
  return vi({ width: c, height: d, x: l, y: h });
}
function Gt(e) {
  return ((xc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function lr(e) {
  return qt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Sc(e) {
  return Le(Gt(e)).left + lr(e).scrollLeft;
}
function pn(e) {
  if (fe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Qa(e) && e.host || Gt(e);
  return Qa(t) ? t.host : t;
}
function Mc(e) {
  const t = pn(e);
  return ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xt(t) && Jn(t) ? t : Mc(t);
}
function xi(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Mc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ut(s);
  return i ? t.concat(r, r.visualViewport || [], Jn(s) ? s : []) : t.concat(s, xi(s));
}
function el(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = ut(i), a = Gt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = Zo();
        (!f || f && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Gt(i), o = lr(i), a = i.ownerDocument.body, l = Ze(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Ze(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Sc(i);
      const d = -o.scrollTop;
      return bt(a).direction === "rtl" && (c += Ze(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Gt(e));
  else if (qt(t))
    s = function(i, r) {
      const o = Le(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = xt(i) ? Qe(i) : Pe(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = kc(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return vi(s);
}
function Tc(e, t) {
  const n = pn(e);
  return !(n === t || !qt(n) || ar(n)) && (bt(n).position === "fixed" || Tc(n, t));
}
function nl(e, t) {
  return xt(e) && bt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function sl(e, t) {
  const n = ut(e);
  if (!xt(e))
    return n;
  let s = nl(e, t);
  for (; s && qu(s) && bt(s).position === "static"; )
    s = nl(s, t);
  return s && (fe(s) === "html" || fe(s) === "body" && bt(s).position === "static" && !Vr(s)) ? n : s || function(i) {
    let r = pn(i);
    for (; xt(r) && !ar(r); ) {
      if (Vr(r))
        return r;
      r = pn(r);
    }
    return null;
  }(e) || n;
}
function Gu(e, t, n) {
  const s = xt(t), i = Gt(t), r = n === "fixed", o = Le(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Pe(0);
  if (s || !s && !r)
    if ((fe(t) !== "body" || Jn(i)) && (a = lr(t)), xt(t)) {
      const h = Le(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Sc(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Yu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = xi(h).filter((v) => qt(v) && fe(v) !== "body"), f = null;
    const g = bt(h).position === "fixed";
    let y = g ? pn(h) : h;
    for (; qt(y) && !ar(y); ) {
      const v = bt(y), w = Vr(y);
      w || v.position !== "fixed" || (f = null), (g ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Jn(y) && !w && Tc(h, y)) ? u = u.filter((_) => _ !== y) : f = v, y = pn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = el(t, c, i);
    return h.top = Ze(d.top, h.top), h.right = Ur(d.right, h.right), h.bottom = Ur(d.bottom, h.bottom), h.left = Ze(d.left, h.left), h;
  }, el(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = xt(n), r = Gt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Pe(1);
  const l = Pe(0);
  if ((i || !i && s !== "fixed") && ((fe(n) !== "body" || Jn(r)) && (o = lr(n)), xt(n))) {
    const h = Le(n);
    a = Qe(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: qt, getDimensions: function(e) {
  return $c(e);
}, getOffsetParent: sl, getDocumentElement: Gt, getScale: Qe, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || sl, r = this.getDimensions;
  return { reference: Gu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => bt(e).direction === "rtl" };
function ta(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Qo(e), c = i || r ? [...h ? xi(h) : [], ...xi(t)] : [];
  c.forEach((v) => {
    i && v.addEventListener("scroll", n, { passive: !0 }), r && v.addEventListener("resize", n);
  });
  const d = h && a ? function(v, w) {
    let _, b = null;
    const k = Gt(v);
    function x() {
      clearTimeout(_), b && b.disconnect(), b = null;
    }
    return function S(R, P) {
      R === void 0 && (R = !1), P === void 0 && (P = 1), x();
      const { left: H, top: M, width: A, height: D } = v.getBoundingClientRect();
      if (R || w(), !A || !D)
        return;
      const T = { rootMargin: -Rs(M) + "px " + -Rs(k.clientWidth - (H + A)) + "px " + -Rs(k.clientHeight - (M + D)) + "px " + -Rs(H) + "px", threshold: Ze(0, Ur(1, P)) || 1 };
      let I = !0;
      function W(V) {
        const ot = V[0].intersectionRatio;
        if (ot !== P) {
          if (!I)
            return S();
          ot ? S(!1, ot) : _ = setTimeout(() => {
            S(!1, 1e-7);
          }, 100);
        }
        I = !1;
      }
      try {
        b = new IntersectionObserver(W, { ...T, root: k.ownerDocument });
      } catch {
        b = new IntersectionObserver(W, T);
      }
      b.observe(v);
    }(!0), x;
  }(h, n) : null;
  let u, f = -1, g = null;
  o && (g = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), h && !l && g.observe(h), g.observe(t));
  let y = l ? Le(e) : null;
  return l && function v() {
    const w = Le(e);
    !y || w.x === y.x && w.y === y.y && w.width === y.width && w.height === y.height || n(), y = w, u = requestAnimationFrame(v);
  }(), n(), () => {
    c.forEach((v) => {
      i && v.removeEventListener("scroll", n), r && v.removeEventListener("resize", n);
    }), d && d(), g && g.disconnect(), g = null, l && cancelAnimationFrame(u);
  };
}
const cr = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Yu, ...n }, r = { ...i.platform, _c: s };
  return Ou(e, t, { ...i, platform: r });
};
var Ec = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, il = (e, t, n) => (Ec(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ku = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ju = (e, t, n, s) => (Ec(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), $n;
let Nc = class extends ue {
  constructor() {
    super(...arguments), Ku(this, $n, 0);
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
    !t || !n || cr(n, t, {
      placement: "right-start",
      middleware: [rr(), bi(), or(1)]
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
      className: E("absolute", n.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), ju(this, $n, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ p("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), il(this, $n) && clearTimeout(il(this, $n));
  }
};
$n = /* @__PURE__ */ new WeakMap();
Nc.defaultProps = {
  ...ue.defaultProps,
  popup: !0
};
var ea = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Dt = (e, t, n) => (ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, As = (e, t, n, s) => (ea(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), rl = (e, t, n) => (ea(e, t, "access private method"), n), se, kn, Ys, Ks, qr, Rc, Gr, Ac;
const kr = "show", Xu = '[data-toggle="contextmenu"]';
class rt extends mt {
  constructor() {
    super(...arguments), Fe(this, qr), Fe(this, Gr), Fe(this, se, void 0), Fe(this, kn, void 0), Fe(this, Ys, void 0), Fe(this, Ks, void 0);
  }
  get isShown() {
    return Dt(this, se) && m(Dt(this, se)).hasClass(kr);
  }
  get menu() {
    return Dt(this, se) || this.ensureMenu();
  }
  get trigger() {
    return Dt(this, Ys) || this.element;
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
    return this.isShown || (As(this, Ys, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(kr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Dt(this, Ks)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Dt(this, se)).removeClass(kr), this.emit("hidden"), !0);
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
    }), As(this, se, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(rr())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    As(this, Ks, ta(n, s, () => {
      cr(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        if (m(s).css({ left: i, top: r }), o.arrow && this.arrowEl) {
          const l = a.split("-")[0], h = rl(this, qr, Rc).call(this, l), { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...rl(this, Gr, Ac).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Xn(j(Nc, t), this.menu), !0);
  }
  getPopperElement() {
    return Dt(this, kn) || As(this, kn, {
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
Ys = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
qr = /* @__PURE__ */ new WeakSet();
Rc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Gr = /* @__PURE__ */ new WeakSet();
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
  const n = t.closest(Xu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${rt.KEY}:options`, i = n.data(s), r = rt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${rt.NAMESPACE}`, rt.clear.bind(rt));
var na = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sn = (e, t, n) => (na(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Yr = (e, t, n, s) => (na(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ju = (e, t, n) => (na(e, t, "access private method"), n), Fn, Mn, $i, Kr, Pc;
const ol = '[data-toggle="dropdown"]', Lc = class extends rt {
  constructor() {
    super(...arguments), Ps(this, Kr), Ps(this, Fn, !1), Ps(this, Mn, 0), this.hideLater = () => {
      Sn(this, $i).call(this), Yr(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, Ps(this, $i, () => {
      clearTimeout(Sn(this, Mn)), Yr(this, Mn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Lc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Sn(this, Fn) && this.isHover && Ju(this, Kr, Pc).call(this), this.$element.addClass(this.elementShowClass)), n;
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
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(or(t)), (s = e.middleware) == null || s.push(Fr({ element: this.arrowEl }))), e;
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
let Yt = Lc;
Fn = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakSet();
Pc = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Sn(this, $i)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Yr(this, Fn, !0);
};
Yt.MENU_CLASS = "dropdown-menu";
Yt.NAME = "Dropdown";
Yt.DEFAULT = {
  ...rt.DEFAULT,
  trigger: "click"
};
const Ls = `${Yt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(ol).not(":disabled,.disabled");
  if (!t.length) {
    Yt.clear({ event: e });
    return;
  }
  const n = t.data(Ls), s = Yt.ensure(t, n);
  n || t.data(Ls, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(ol);
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
class Zu extends z {
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
      className: E("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, sn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ p("div", { ...s, children: n });
  }
}
ss = new WeakMap(), sn = new WeakMap();
class Qu extends Zu {
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
    return s.caret = i, /* @__PURE__ */ p(et, { ...s });
  }
}
function Dc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ p(Qu, { type: n, ...s });
}
let Ic = class extends z {
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
    return /* @__PURE__ */ p(et, { ...i }, s);
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
      ...f
    } = t;
    return /* @__PURE__ */ p(
      "div",
      {
        className: E("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function tf({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ p(Ic, { type: n, ...s });
}
let pt = class extends He {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = E(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: E(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ p(t, { ...a });
  }
};
pt.ItemComponents = {
  item: Wu,
  dropdown: Dc,
  "btn-group": tf
};
pt.ROOT_TAG = "nav";
pt.NAME = "toolbar";
pt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function ef({
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
  a === !0 ? d = /* @__PURE__ */ p(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ p("span", { class: "close" }) }) : Q(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ p(et, { ...a, onClick: l }));
  const u = Q(n) ? n : n ? /* @__PURE__ */ p(pt, { ...n }) : null;
  return /* @__PURE__ */ p("div", { className: E("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ p(nt, { icon: h, className: "alert-icon" }),
    Q(i) ? i : /* @__PURE__ */ p("div", { className: E("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ p("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ p("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function nf(e) {
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
function sf({
  margin: e,
  type: t,
  placement: n,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ p(
    ef,
    {
      className: E("messager", r, t, s === !0 ? nf(n) : s, i ? "in" : ""),
      ...a
    }
  );
}
var rf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, of = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wn = (e, t, n) => (rf(e, t, "access private method"), n), _e, qe;
class sa extends q {
  constructor() {
    super(...arguments), of(this, _e), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), wn(this, _e, qe).call(this, () => {
      this._show = !0, this.render(), wn(this, _e, qe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && wn(this, _e, qe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && wn(this, _e, qe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), wn(this, _e, qe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
_e = /* @__PURE__ */ new WeakSet();
qe = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
sa.NAME = "MessagerItem";
sa.Component = sf;
var ia = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Te = (e, t, n) => (ia(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Is = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, js = (e, t, n, s) => (ia(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Wc = (e, t, n) => (ia(e, t, "access private method"), n), tn, Vt, jr, Oc, ra, Hc;
const Bc = class extends mt {
  constructor() {
    super(...arguments), Is(this, jr), Is(this, ra), Is(this, tn, void 0), Is(this, Vt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Te(this, Vt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), Wc(this, jr, Oc).call(this).show();
  }
  hide() {
    var e;
    (e = Te(this, Vt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Bc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let zc = Bc;
tn = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
jr = /* @__PURE__ */ new WeakSet();
Oc = function() {
  if (Te(this, Vt))
    Te(this, Vt).setOptions(this.options);
  else {
    const e = Wc(this, ra, Hc).call(this), t = new sa(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), js(this, tn, void 0), js(this, Vt, void 0);
    }), js(this, Vt, t);
  }
  return Te(this, Vt);
};
ra = /* @__PURE__ */ new WeakSet();
Hc = function() {
  if (Te(this, tn))
    return Te(this, tn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), js(this, tn, n[0])), n[0];
};
zc.NAME = "messager";
zc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Fc = class extends z {
  render(t) {
    const { percent: n = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: h, textY: c } = t, d = s / 2;
    let { circleWidth: u = 0.2 } = t;
    u < 1 && (u = s * u);
    const f = (s - u) / 2;
    return /* @__PURE__ */ p("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ p("circle", { cx: d, cy: d, r: f, "stroke-width": u, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ p("circle", { cx: d, cy: d, r: f, "stroke-width": u, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * f * 2, "stroke-dashoffset": Math.PI * f * 2 * (100 - n) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ p("text", { x: h ?? d, y: c ?? d + u / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${f}px` }, children: o === !0 ? Math.round(n) : o }) : null
    ] });
  }
};
Fc.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Vc extends q {
}
Vc.NAME = "ProgressCircle";
Vc.Component = Fc;
var Ft;
class af {
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
const al = /* @__PURE__ */ new Set([
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
class Uc extends af {
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
    return typeof t == "string" && (al.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Uc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (al.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let qc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var is, oe, Tt, rn, on, Xs;
const Wa = class {
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
    O(this, is, n), O(this, oe, `ZUI_STORE:${t ?? qc()}`), O(this, Tt, n === "local" ? localStorage : sessionStorage);
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
    return this.type === "session" ? this : (C(this, rn) || O(this, rn, new Wa(C(this, oe), "session")), C(this, rn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, Tt).getItem(Lt(this, on, Xs).call(this, t));
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
    C(this, Tt).setItem(Lt(this, on, Xs).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, Tt).removeItem(Lt(this, on, Xs).call(this, t));
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
let ki = Wa;
is = new WeakMap(), oe = new WeakMap(), Tt = new WeakMap(), rn = new WeakMap(), on = new WeakSet(), Xs = function(t) {
  return `${C(this, oe)}:${t}`;
};
const lf = new ki("DEFAULT");
function cf(e, t = "local") {
  return new ki(e, t);
}
Object.assign(lf, { create: cf });
function hf(e) {
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
function df(e) {
  const [t, n, s] = typeof e == "string" ? hf(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function ll(e, t) {
  return df(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function cl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function uf(e, t, n) {
  e = e % 360 / 360, t = cl(t), n = cl(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function ff(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function pf(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Gc = class extends z {
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
      saturation: f = 0.4,
      lightness: g = 0.6,
      children: y,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: o, color: a };
    let b = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, b = s) : (w.push(`size-${s}`), b = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let k;
    if (d)
      w.push("has-img"), k = /* @__PURE__ */ p("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const x = pf(l, c);
      if (w.push("has-text", `has-text-${x.length}`), o)
        !a && o && (_.color = ll(o));
      else {
        const R = h ?? l, P = (typeof R == "number" ? R : ff(R)) * u % 360;
        if (_.background = `hsl(${P},${f * 100}%,${g * 100}%)`, !a) {
          const H = uf(P, f, g);
          _.color = ll(H);
        }
      }
      let S;
      b && b < 14 * x.length && (S = { transform: `scale(${b / (14 * x.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ p("div", { "data-actualSize": b, className: "avatar-text", style: S, children: x });
    }
    return /* @__PURE__ */ p(
      "div",
      {
        className: E(w),
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
class Yc extends q {
}
Yc.NAME = "Avatar";
Yc.Component = Gc;
class Kc extends q {
}
Kc.NAME = "BtnGroup";
Kc.Component = Ic;
const hl = Symbol("EVENT_PICK");
var rs;
class oa extends z {
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
    return E(
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
        return /* @__PURE__ */ p("input", { id: r, type: "hidden", className: "pick-value", name: s, value: i });
    return null;
  }
  componentDidMount() {
    const { id: n, state: s } = this.props;
    m(`#${n}`).on(`change.pick.zui.${n}`, (i, r) => {
      if (r === hl)
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
    r && n.state.value !== i.value && m(`#${s}`).trigger("change", hl);
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
var Se, Et, ae;
class jc extends z {
  constructor(n) {
    super(n);
    L(this, Se, void 0);
    L(this, Et, void 0);
    L(this, ae, void 0);
    O(this, Se, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, Se)) == null ? void 0 : n.current;
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
    return E(
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
      ref: C(this, Se),
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
    return /* @__PURE__ */ p("div", { ...this._getProps(n), children: this._renderPop(n) });
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
    C(this, Et) || O(this, Et, ta(s, n, () => {
      const { placement: o, width: a } = i;
      cr(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? rr() : null, bi(), or(1)].filter(Boolean)
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
    n && (n(), O(this, Et, void 0)), O(this, ae, void 0), O(this, Se, void 0), m(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(n) {
    return Nu(this._render(n), this._getContainer(n));
  }
}
Se = new WeakMap(), Et = new WeakMap(), ae = new WeakMap();
var Xc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ee = (e, t, n) => (Xc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (Xc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Js, vt, Tn;
let gt = class extends z {
  constructor(t) {
    super(t), Sr(this, Js, void 0), Sr(this, vt, 0), Sr(this, Tn, K()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      this.props.disabled && (n = !1);
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      ee(this, vt) && (clearTimeout(ee(this, vt)), Ve(this, vt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await pi(200, (a) => {
        Ve(this, vt, a);
      }), Ve(this, vt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await pi(50, (a) => {
        Ve(this, vt, a);
      }), Ve(this, vt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, Ve(this, Js, t.id ?? `_pick${m.guid++}`);
  }
  get id() {
    return ee(this, Js);
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
    (n = this.props.beforeDestroy) == null || n.call(this), ee(this, vt) && clearTimeout(ee(this, vt));
    const t = ee(this, Tn).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ p(o, { ref: ee(this, Tn), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ p(mn, { children: [
      /* @__PURE__ */ p(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Js = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
gt.Trigger = oa;
gt.Pop = jc;
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
let Jc = class extends gt {
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
      s ? /* @__PURE__ */ p(nt, { icon: s }, "icon") : /* @__PURE__ */ p("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = m.extend({
      color: n.value
    }, s.style), s.className = E("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, n) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = n;
    let a;
    return i && (a = /* @__PURE__ */ p("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ p("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ p("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ p("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ p("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ p(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ p("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ p(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Jc.defaultProps = {
  ...gt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Zc extends q {
}
Zc.NAME = "ColorPicker";
Zc.Component = Jc;
const Zn = 24 * 60 * 60 * 1e3, Z = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), mf = (e, t, n = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    n = t.replace(s.toString(), ""), t = s;
  }
  return e = new Date(Z(e).getTime()), n === "month" ? e.setMonth(e.getMonth() + t) : n === "year" ? e.setFullYear(e.getFullYear() + t) : n === "week" ? e.setDate(e.getDate() + t * 7) : n === "hour" ? e.setHours(e.getHours() + t) : n === "minute" ? e.setMinutes(e.getMinutes() + t) : n === "second" ? e.setSeconds(e.getSeconds() + t) : e.setDate(e.getDate() + t), e;
}, ks = (e, t = /* @__PURE__ */ new Date()) => Z(e).toDateString() === Z(t).toDateString(), Xr = (e, t = /* @__PURE__ */ new Date()) => Z(e).getFullYear() === Z(t).getFullYear(), Qc = (e, t = /* @__PURE__ */ new Date()) => (e = Z(e), t = Z(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Gp = (e, t = /* @__PURE__ */ new Date()) => {
  e = Z(e), t = Z(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Yp = (e, t) => ks(Z(t), e), Kp = (e, t) => ks(Z(t).getTime() - Zn, e), jp = (e, t) => ks(Z(t).getTime() + Zn, e), $t = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Xr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Xp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = $t(e, Xr(e) ? s.month : s.full);
  if (ks(e, t))
    return i;
  const r = $t(t, Xr(e, t) ? Qc(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var os, as;
class gf extends z {
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
    return /* @__PURE__ */ p("div", { className: "time-picker-menu row", ref: C(this, os), children: [
      /* @__PURE__ */ p(
        ue,
        {
          className: l,
          items: o,
          onClickItem: C(this, as).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ p(
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
var yf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ws = (e, t, n) => (yf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Os = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Jr, Zr, Qr, to;
const dl = (e) => {
  if (!e)
    return;
  const t = Z(`1999-01-01 ${e}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let th = class extends gt {
  constructor(t) {
    super(t), Os(this, Jr, () => {
      this.toggle(!0);
    }), Os(this, Zr, (s) => {
      this.setTime(s.target.value);
    }), Os(this, Qr, (s, i) => {
      this.setTime({ [s]: i });
    }), Os(this, to, () => {
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
    const s = dl(n), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? $t(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(n);
    });
  }
  getTime() {
    const t = dl(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: s, name: i, icon: r, required: o, disabled: a, readonly: l } = t, { value: h = "", open: c } = n, d = `time-picker-${this.id}`;
    let u;
    return c && !o && h.length ? u = /* @__PURE__ */ p("button", { type: "button", className: "btn size-sm square ghost", onClick: Ws(this, to), children: /* @__PURE__ */ p("span", { className: "close" }) }) : r && (r === !0 ? u = /* @__PURE__ */ p("i", { class: "i-time" }) : u = /* @__PURE__ */ p(nt, { icon: r })), [
      /* @__PURE__ */ p("input", { name: i, id: d, type: "text", class: "form-control", placeholder: s, value: h, disabled: a, readOnly: l, onFocus: Ws(this, Jr), onChange: Ws(this, Zr) }, "input"),
      u ? /* @__PURE__ */ p("label", { for: d, class: "input-control-suffix", children: u }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: E(s.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, s] = this.getTime() || [];
    return /* @__PURE__ */ p(gf, { hour: n, minute: s, minuteStep: t.minuteStep, onChange: Ws(this, Qr) });
  }
};
Jr = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
to = /* @__PURE__ */ new WeakMap();
th.defaultProps = {
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
const wf = (e, t, n = 0) => {
  const s = new Date(e, t - 1, 1), i = new Date(e, t, 0), r = s.getDay(), o = s.getTime() - (7 + r - n) % 7 * Zn;
  return {
    days: i.getDate(),
    startTime: o,
    firstDay: s.getTime()
  };
}, ul = (e, t) => new Set((Array.isArray(e) ? e : [e]).map((n) => $t(n, t)));
var Wi;
class vf extends z {
  constructor() {
    super(...arguments);
    L(this, Wi, (n) => {
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
    for (let S = 0; S < 7; S++) {
      const R = (i + S) % 7;
      d.push(/* @__PURE__ */ p("div", { className: E("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ p("div", { children: r ? r[R] : R }) }, S));
    }
    const { startTime: f, days: g, firstDay: y } = wf(a, l, i), v = y + g * Zn;
    let w = f;
    const _ = [], b = "yyyy-MM-dd", k = ul(h, b), x = ul(c, b);
    for (; w <= v; ) {
      const S = [];
      for (let R = 0; R < 7; R++) {
        const P = new Date(w), H = P.getDate(), M = $t(P, b), A = P.getDay(), D = Qc(P, y), T = E("col mini-calendar-day", {
          active: k.has(M),
          selected: x.has(M),
          "is-first": H === 1,
          "is-in-month": D,
          "is-out-month": !D,
          "is-today": ks(P, s),
          "is-weekend": A === 0 || A === 6
        });
        S.push(
          /* @__PURE__ */ p("div", { className: T, "data-date": M, children: /* @__PURE__ */ p("a", { className: u, onClick: C(this, Wi), children: H === 1 && o ? o[P.getMonth()] : P.getDate() }) }, M)
        ), w += Zn;
      }
      _.push(/* @__PURE__ */ p("div", { className: "row", children: S }, w));
    }
    return /* @__PURE__ */ p("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ p("div", { className: "row", children: d }),
      _
    ] });
  }
}
Wi = new WeakMap();
var ls, Oi;
class fl extends z {
  constructor() {
    super(...arguments);
    L(this, ls, K());
    L(this, Oi, (n) => {
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
      a.push(/* @__PURE__ */ p(et, { type: "ghost", "data-value": h, active: h === o, className: E(l === h ? "is-current" : ""), onClick: C(this, Oi), children: h }, h));
    return /* @__PURE__ */ p("div", { className: s, ref: C(this, ls), children: a });
  }
}
ls = new WeakMap(), Oi = new WeakMap();
var an, cs, hs, ds, us, fs, Hi, eh, Bi, nh;
class _f extends z {
  constructor(n) {
    super(n);
    L(this, Hi);
    L(this, Bi);
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
        o.length > 3 && (h = mf(h, o.substring(5).replace("+", ""))), o = $t(h, "yyyy-MM-dd");
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
    } = s, f = u === "day", g = Z(n.minDate || "1970-1-1"), y = Z(n.maxDate || "2099-12-1");
    return /* @__PURE__ */ p("div", { className: "date-picker-menu row", ref: C(this, an), onClick: C(this, cs), children: [
      Lt(this, Hi, eh).call(this, n),
      /* @__PURE__ */ p("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ p("div", { className: "row p-2", children: [
          /* @__PURE__ */ p(et, { type: u === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: it(r, c) }),
          /* @__PURE__ */ p(et, { type: u === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ p("div", { className: "flex-auto" }),
          f ? /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ p(et, { type: "ghost", size: "sm", square: !0, onClick: C(this, hs), children: /* @__PURE__ */ p("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ p(et, { type: "ghost", size: "sm", square: !0, onClick: C(this, ds), children: /* @__PURE__ */ p("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        f ? /* @__PURE__ */ p(
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
        u === "year" ? /* @__PURE__ */ p(
          fl,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: C(this, us)
          }
        ) : u === "month" ? /* @__PURE__ */ p(
          fl,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: C(this, fs)
          }
        ) : null,
        f ? Lt(this, Bi, nh).call(this, n) : null
      ] })
    ] });
  }
}
an = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), ds = new WeakMap(), us = new WeakMap(), fs = new WeakMap(), Hi = new WeakSet(), eh = function(n) {
  let { menu: s } = n;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ p(ue, { ...s })) : null;
}, Bi = new WeakSet(), nh = function(n) {
  let { actions: s } = n;
  const { todayText: i, clearText: r } = n;
  return s || (s = [{ text: i, "data-set-date": $t(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ p("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ p(pt, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ p(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var bf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mr = (e, t, n) => (bf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Tr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, eo, no, so;
let sh = class extends gt {
  constructor(t) {
    super(t), Tr(this, eo, () => {
      this.toggle(!0);
    }), Tr(this, no, (s) => {
      this.setDate(s.target.value);
    }), Tr(this, so, () => {
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
    return h && !r && l.length ? d = /* @__PURE__ */ p("button", { type: "button", className: "btn size-sm square ghost", onClick: Mr(this, so), children: /* @__PURE__ */ p("span", { className: "close" }) }) : i && (i === !0 ? d = /* @__PURE__ */ p("i", { class: "i-calendar" }) : d = /* @__PURE__ */ p(nt, { icon: i })), [
      /* @__PURE__ */ p("input", { id: c, type: "text", class: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, onFocus: Mr(this, eo), onChange: Mr(this, no) }, "input"),
      d ? /* @__PURE__ */ p("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: E(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const s = super._getPopProps(t, n);
    return {
      ...s,
      className: E(s.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = tt.getLang("today"), clearText: l, menu: h, actions: c, minDate: d, maxDate: u, required: f } = t;
    return /* @__PURE__ */ p(
      _f,
      {
        onChange: this.setDate,
        date: n.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: f ? "" : l,
        menu: h,
        actions: c,
        minDate: d,
        maxDate: u
      }
    );
  }
};
eo = /* @__PURE__ */ new WeakMap();
no = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
sh.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class ih extends q {
}
ih.NAME = "TimePicker";
ih.Component = th;
class rh extends q {
}
rh.NAME = "DatePicker";
rh.Component = sh;
var aa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, $e = (e, t, n) => (aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ke = (e, t, n, s) => (aa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Er = (e, t, n) => (aa(e, t, "access private method"), n), je, be, En, io, Nn, Zs;
const Nr = "show", pl = "in", Cf = '[data-dismiss="modal"]', Rn = class extends mt {
  constructor() {
    super(...arguments), vn(this, Nn), vn(this, je, 0), vn(this, be, void 0), vn(this, En, void 0), vn(this, io, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Cf) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Nr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return $e(this, be);
  }
  _observeResize() {
    var e;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (e = $e(this, be)) == null || e.disconnect();
      const { dialog: t } = this;
      if (t) {
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const s = t.clientWidth, i = t.clientHeight, [r, o] = $e(this, En) || [];
          (r !== s || o !== i) && (Ke(this, En, [s, i]), this.layout());
        });
        n.observe(t), Ke(this, be, n);
      }
    }
  }
  afterInit() {
    this.on("click", $e(this, io)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var e;
    super.destroy(), (e = $e(this, be)) == null || e.disconnect(), Ke(this, be, void 0);
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${Rn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Nr, i).css({
      zIndex: `${Rn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Er(this, Nn, Zs).call(this, () => {
      m(t).addClass(pl), Er(this, Nn, Zs).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(pl), this.emit("hide"), Er(this, Nn, Zs).call(this, () => {
      m(this.modalElement).removeClass(Nr), this.emit("hidden");
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
    (t = Rn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Rn.query(e)) == null || t.show();
  }
};
let te = Rn;
je = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
io = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakSet();
Zs = function(e, t) {
  $e(this, je) && (clearTimeout($e(this, je)), Ke(this, je, 0)), e && (this.options.animation ? Ke(this, je, window.setTimeout(e, t ?? this.options.transTime)) : e());
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
class oh extends z {
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
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ p("div", { className: E("modal-header", n), children: /* @__PURE__ */ p("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Q(t) ? t : /* @__PURE__ */ p("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ p(pt, { ...t }) : null,
      n ? /* @__PURE__ */ p("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ p("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: n
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ p("div", { className: E("modal-body", n), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: n,
      footerActions: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ p("div", { className: E("modal-footer", n), children: s ? /* @__PURE__ */ p(pt, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ p("div", { className: E("modal-dialog", t), style: n, children: /* @__PURE__ */ p("div", { className: E("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
oh.defaultProps = { closeBtn: !0 };
var ln, cn, hn;
class xf extends z {
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
    return /* @__PURE__ */ p(
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
var la = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, wt = (e, t, n) => (la(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _n = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ue = (e, t, n, s) => (la(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Qs = (e, t, n) => (la(e, t, "access private method"), n), Wt, An, Ot, Si, ca, ti, ro;
function $f(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function kf(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ p(jo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Sf(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ p(xf, { url: n })
  };
}
const Mf = {
  custom: $f,
  ajax: kf,
  iframe: Sf
}, Rr = "loading", Pn = class extends te {
  constructor() {
    super(...arguments), _n(this, Si), _n(this, ti), _n(this, Wt, void 0), _n(this, An, void 0), _n(this, Ot, void 0);
  }
  get id() {
    return wt(this, An);
  }
  get loading() {
    var e;
    return (e = wt(this, Wt)) == null ? void 0 : e.classList.contains(Rr);
  }
  get shown() {
    var e;
    return !!((e = wt(this, Wt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = wt(this, Wt);
    if (!e) {
      const { options: t } = this;
      let n = wt(this, An);
      n || (n = t.id || `modal-${m.guid++}`, Ue(this, An, n));
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
    const e = wt(this, Wt);
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
    const e = wt(this, Wt);
    e && (m(e).removeData(this.constructor.KEY).remove(), Ue(this, Wt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    wt(this, Ot) && clearTimeout(wt(this, Ot));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Mf[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Rr), i && Ue(this, Ot, window.setTimeout(() => {
      Ue(this, Ot, 0), Qs(this, ti, ro).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Qs(this, ti, ro).call(this, this.options.failedTip) : a && typeof a == "object" && await Qs(this, Si, ca).call(this, a), wt(this, Ot) && (clearTimeout(wt(this, Ot)), Ue(this, Ot, 0)), this.layout(), await pi(100), n.removeClass(Rr), !0;
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
    let d = typeof n == "object" && n.html ? /* @__PURE__ */ p("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ p("div", { children: n });
    s ? d = /* @__PURE__ */ p("div", { className: E("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ p("div", { className: `icon ${s} ${i}` }),
      d
    ] }) : d = /* @__PURE__ */ p("div", { className: E("modal-body", c.bodyClass), children: d });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = tt.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && u.push(y);
    }, []);
    let f;
    const g = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: y, event: v }) => {
        const w = Pn.query(v.target, l);
        f = y.key, (o == null ? void 0 : o(y, w)) !== !1 && w && w.hide();
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
    }), f;
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
let ah = Pn;
Wt = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakSet();
ca = function(e) {
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
      /* @__PURE__ */ p(oh, { ...e }),
      this.modalElement
    );
  });
};
ti = /* @__PURE__ */ new WeakSet();
ro = function(e) {
  if (e)
    return Qs(this, Si, ca).call(this, {
      body: /* @__PURE__ */ p("div", { className: "modal-load-failed", children: e })
    });
};
ah.DEFAULT = {
  ...te.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var ha = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, oo = (e, t, n) => (ha(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ml = (e, t, n, s) => (ha(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ao = (e, t, n) => (ha(e, t, "access private method"), n), Ee, da, lh, lo, ch, ua, hh;
const Tf = '[data-toggle="modal"]';
class dh extends mt {
  constructor() {
    super(...arguments), Hs(this, da), Hs(this, lo), Hs(this, ua), Hs(this, Ee, void 0);
  }
  get modal() {
    return oo(this, Ee);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = ao(this, lo, ch).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = oo(this, Ee)) == null ? void 0 : t.hide();
  }
}
Ee = /* @__PURE__ */ new WeakMap();
da = /* @__PURE__ */ new WeakSet();
lh = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
lo = /* @__PURE__ */ new WeakSet();
ch = function() {
  const e = ao(this, da, lh).call(this);
  let t = oo(this, Ee);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = ao(this, ua, hh).call(this);
    if (!n)
      return;
    t = te.ensure(n, e);
  } else
    t = ah.ensure(this.container, e);
  return ml(this, Ee, t), t.on("destroyed", () => {
    ml(this, Ee, void 0);
  }), t;
};
ua = /* @__PURE__ */ new WeakSet();
hh = function() {
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
dh.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Tf);
  if (n) {
    const i = dh.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let uh = class extends He {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = E(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
uh.NAME = "nav";
class fh extends q {
}
fh.NAME = "Nav";
fh.Component = uh;
function Qn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Ef({
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
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : it(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : it(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ p(et, { type: n, ...a });
}
function Nf({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Qn(i, n);
  return s = typeof s == "function" ? s(a) : it(s, a), /* @__PURE__ */ p(gc, { ...o, children: [
    r,
    s
  ] });
}
function Rf({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ p(et, { type: n, ...l })), c = (u, f) => {
    const g = [];
    for (let y = u; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Qn(i, y);
      o && (l.url = typeof o == "function" ? o(v) : it(o, v)), g.push(/* @__PURE__ */ p(et, { type: n, ...l, onClick: r }));
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
  return o.text = typeof a == "function" ? a(t) : it(a, t), i.menu = { ...i.menu, className: E((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ p(Dc, { type: "dropdown", dropdown: i, ...o });
}
function Pf({
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
  }, f = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const v = Qn(i, d);
    a && !a({ info: v, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(v) : it(l, v));
  }, g = Qn(i, t || 0);
  return c.url = typeof l == "function" ? l(g) : it(l, g), /* @__PURE__ */ p("div", { className: E("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ p("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ p(et, { type: s, ...c, onClick: f })
  ] });
}
let hr = class extends pt {
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
hr.NAME = "pager";
hr.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
hr.ItemComponents = {
  ...pt.ItemComponents,
  link: Ef,
  info: Nf,
  nav: Rf,
  "size-menu": Af,
  goto: Pf
};
class ph extends q {
}
ph.NAME = "Pager";
ph.Component = hr;
class mh extends q {
}
mh.NAME = "Pick";
mh.Component = gt;
var dn, ps, ms, zi;
class gh extends z {
  constructor(n) {
    super(n);
    L(this, dn, K());
    L(this, ps, K());
    L(this, ms, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s }), n.stopPropagation();
    });
    L(this, zi, (n) => {
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
    return r ? l = /* @__PURE__ */ p("div", { className: "picker-search-measure", ref: C(this, ps), children: o }) : a ? l = /* @__PURE__ */ p("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, zi), children: /* @__PURE__ */ p("span", { className: "close" }) }) : l = /* @__PURE__ */ p("span", { className: "magnifier" }), /* @__PURE__ */ p("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ p(
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
dn = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), zi = new WeakMap();
var un, gs, ys, ws;
class Lf extends oa {
  constructor() {
    super(...arguments);
    L(this, un, void 0);
    L(this, gs, void 0);
    L(this, ys, void 0);
    L(this, ws, void 0);
    O(this, un, K()), O(this, gs, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), O(this, ys, (n) => {
      this.props.changeState({ search: n });
    }), O(this, ws, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ p("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ p("span", { className: "text", children: n.text ?? n.value }),
      this.props.disabled ? null : /* @__PURE__ */ p("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, gs), "data-value": n.value, children: /* @__PURE__ */ p("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, un).current) == null || s.focus();
  }
  _getClass(n) {
    return E(
      super._getClass(n),
      "picker-select picker-select-multi form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ p(
      gh,
      {
        inline: !0,
        ref: C(this, un),
        defaultSearch: s,
        onSearch: C(this, ys),
        onClear: C(this, ws),
        placeholder: i
      }
    );
  }
  _renderTrigger(n) {
    const { state: { selections: s = [], open: i }, search: r, placeholder: o, children: a } = this.props, l = i && r;
    return !l && !s.length ? /* @__PURE__ */ p("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ p("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ p("span", { class: "caret" }, "caret")
    ];
  }
}
un = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), ws = new WeakMap();
var vs, Fi, Vi, Ui, qi, yh;
class Df extends oa {
  constructor() {
    super(...arguments);
    L(this, qi);
    L(this, vs, K());
    L(this, Fi, (n) => {
      this.props.disabled || (this.props.onClear(), n.stopPropagation());
    });
    L(this, Vi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, Ui, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, vs).current) == null || s.focus();
  }
  _getClass(n) {
    return E(
      super._getClass(n),
      "picker-select picker-select-single form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ p(
      gh,
      {
        ref: C(this, vs),
        defaultSearch: s,
        onSearch: C(this, Vi),
        onClear: C(this, Ui),
        placeholder: Lt(this, qi, yh).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a, disabled: l, clearable: h } = n, [c] = i, d = r && a;
    let u;
    d ? u = this._renderSearch(n) : c ? u = /* @__PURE__ */ p("span", { className: "picker-single-selection", children: c.text ?? c.value }, "main") : u = /* @__PURE__ */ p("span", { className: "picker-select-placeholder", children: o }, "main");
    const f = h && !d ? /* @__PURE__ */ p("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: C(this, Fi), children: /* @__PURE__ */ p("span", { className: "close" }) }, "deselect") : null;
    return [
      u,
      s,
      f,
      d ? null : /* @__PURE__ */ p("span", { className: "caret" }, "caret")
    ];
  }
}
vs = new WeakMap(), Fi = new WeakMap(), Vi = new WeakMap(), Ui = new WeakMap(), qi = new WeakSet(), yh = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const If = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, c) => {
    c && (r.push(/* @__PURE__ */ p("span", { class: n, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var Gi, Yi, wh, Ki, vh, ji;
class Wf extends jc {
  constructor() {
    super(...arguments);
    L(this, Yi);
    L(this, Ki);
    L(this, Gi, K());
    L(this, ji, ({ item: n }) => {
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
      const s = Lt(this, Yi, wh).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return E(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ p(
      ue,
      {
        ref: C(this, Gi),
        className: "picker-menu-list",
        items: Lt(this, Ki, vh).call(this),
        onClickItem: C(this, ji),
        ...s
      }
    );
  }
}
Gi = new WeakMap(), Yi = new WeakSet(), wh = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Ki = new WeakSet(), vh = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: f,
      text: g,
      className: y,
      ...v
    } = d;
    u === i && (a = !0);
    const w = g ?? u;
    return c.push({
      key: u,
      active: o.has(u),
      text: typeof w == "string" ? If(l, [w]) : /* @__PURE__ */ p(bs, { content: w }),
      className: E(y, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = E(h[0].className, "hover")), h;
}, ji = new WeakMap();
var _h = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, St = (e, t, n) => (_h(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Bs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ne = (e, t, n, s) => (_h(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ln, Ht, Ce, Dn;
let fa = class extends gt {
  constructor(t) {
    super(t), Bs(this, Ln, void 0), Bs(this, Ht, void 0), Bs(this, Ce, 0), Bs(this, Dn, void 0), this.isEmptyValue = (r) => St(this, Dn).has(r), this.toggleValue = (r, o) => {
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
      if (await pi(s || 500), St(this, Ht) !== t || (r = await n(i, { signal: t.signal }), St(this, Ht) !== t))
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
    St(this, Ce) && clearTimeout(St(this, Ce)), ne(this, Ce, window.setTimeout(() => {
      ne(this, Ce, 0), this.update();
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
    (t = St(this, Ht)) == null || t.abort(), ne(this, Ht, void 0), ne(this, Ln, void 0), clearTimeout(St(this, Ce)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Lf : Df);
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
Ce = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
fa.defaultProps = {
  ...gt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
fa.Pop = Wf;
class bh extends q {
}
bh.NAME = "Picker";
bh.Component = fa;
class Ch extends mt {
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
    return i && s.middleware.push(rr()), r && s.middleware.push(r === !0 ? bi() : bi(r)), o && s.middleware.push(Fr({ element: this.$arrow[0] })), a && s.middleware.push(or(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = ta(t, n, () => {
      cr(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Fr || !o.arrow)
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
Ch.NAME = "Popovers";
Ch.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var pa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (pa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), we = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ei = (e, t, n, s) => (pa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), gl = (e, t, n) => (pa(e, t, "access private method"), n), ni, si, Ne, co, ii, ri, oi, ho;
let xh = class extends z {
  constructor(t) {
    super(t), we(this, oi), we(this, ni, void 0), we(this, si, K()), we(this, Ne, 0), we(this, co, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), we(this, ii, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (gl(this, oi, ho).call(this), ei(this, Ne, window.setTimeout(() => {
          r(i, n), ei(this, Ne, 0);
        }, this.props.delay || 0)));
      });
    }), we(this, ri, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, ei(this, ni, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return Mt(this, ni);
  }
  get input() {
    return Mt(this, si).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    gl(this, oi, ho).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: f } = t, { focus: g, value: y } = n, { id: v } = this, w = typeof y != "string" || !y.trim().length;
    let _, b, k;
    return u && (k = u === !0 ? /* @__PURE__ */ p("span", { class: "magnifier" }) : /* @__PURE__ */ p(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ p("label", { for: v, class: "input-control-prefix", children: k }, "prefix")), f && !w ? b = /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Mt(this, co),
        children: f === !0 ? /* @__PURE__ */ p("span", { class: "close" }) : /* @__PURE__ */ p(nt, { icon: f })
      }
    ) : d && u && (b = k), b && (b = /* @__PURE__ */ p("label", { for: v, class: "input-control-suffix", children: b }, "suffix")), /* @__PURE__ */ p("div", { class: E("search-box input-control", r, { focus: g, empty: w, "has-prefix-icon": _, "has-suffix-icon": b }), style: o, children: [
      _,
      /* @__PURE__ */ p(
        "input",
        {
          ref: Mt(this, si),
          id: v,
          type: "text",
          class: E("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: Mt(this, ii),
          onChange: Mt(this, ii),
          onFocus: Mt(this, ri),
          onBlur: Mt(this, ri)
        }
      ),
      b
    ] });
  }
};
ni = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
co = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakSet();
ho = function() {
  Mt(this, Ne) && clearTimeout(Mt(this, Ne)), ei(this, Ne, 0);
};
xh.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class $h extends q {
}
$h.NAME = "SearchBox";
$h.Component = xh;
class kh extends q {
}
kh.NAME = "Toolbar";
kh.Component = pt;
function Ss(e) {
  return e.split("-")[1];
}
function ma(e) {
  return e === "y" ? "height" : "width";
}
function en(e) {
  return e.split("-")[0];
}
function dr(e) {
  return ["top", "bottom"].includes(en(e)) ? "x" : "y";
}
function yl(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = dr(t), l = ma(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
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
const Of = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = yl(h, s, l), u = s, f = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: b, data: k, reset: x } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, f = { ...f, [v]: { ...f[v], ...k } }, x && g <= 50 && (g++, typeof x == "object" && (x.placement && (u = x.placement), x.rects && (h = x.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : x.rects), { x: c, y: d } = yl(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function Sh(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Mi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Hf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = t, g = Sh(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = Mi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = Mi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + g.top) / b.y, bottom: (k.bottom - v.bottom + g.bottom) / b.y, left: (v.left - k.left + g.left) / b.x, right: (k.right - v.right + g.right) / b.x };
}
const Bf = Math.min, zf = Math.max;
function Ff(e, t, n) {
  return zf(e, Bf(t, n));
}
const Vf = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Sh(s), c = { x: i, y: r }, d = dr(o), u = ma(d), f = await l.getDimensions(n), g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let b = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  b === 0 && (b = a.floating[u]);
  const k = v / 2 - w / 2, x = h[g], S = b - f[u] - h[y], R = b / 2 - f[u] / 2 + k, P = Ff(x, R, S), H = Ss(o) != null && R != P && a.reference[u] / 2 - (R < x ? h[g] : h[y]) - f[u] / 2 < 0;
  return { [d]: c[d] - (H ? R < x ? x - R : S - R : 0), data: { [d]: P, centerOffset: R - P } };
} }), Uf = ["top", "right", "bottom", "left"];
Uf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const qf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ti(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qf[t]);
}
function Gf(e, t, n) {
  n === void 0 && (n = !1);
  const s = Ss(e), i = dr(e), r = ma(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ti(o)), { main: o, cross: Ti(o) };
}
const Yf = { start: "end", end: "start" };
function Ar(e) {
  return e.replace(/start|end/g, (t) => Yf[t]);
}
const Kf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: g = !0, ...y } = e, v = en(s), w = en(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (w || !g ? [Ti(o)] : function(M) {
      const A = Ti(M);
      return [Ar(M), A, Ar(A)];
    }(o));
    d || f === "none" || b.push(...function(M, A, D, T) {
      const I = Ss(M);
      let W = function(V, ot, gn) {
        const Ts = ["left", "right"], yn = ["right", "left"], Es = ["top", "bottom"], wr = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return gn ? ot ? yn : Ts : ot ? Ts : yn;
          case "left":
          case "right":
            return ot ? Es : wr;
          default:
            return [];
        }
      }(en(M), D === "start", T);
      return I && (W = W.map((V) => V + "-" + I), A && (W = W.concat(W.map(Ar)))), W;
    }(o, g, f, _));
    const k = [o, ...b], x = await Hf(t, y), S = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && S.push(x[v]), c) {
      const { main: M, cross: A } = Gf(s, r, _);
      S.push(x[M], x[A]);
    }
    if (R = [...R, { placement: s, overflows: S }], !S.every((M) => M <= 0)) {
      var P;
      const M = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, A = k[M];
      if (A)
        return { data: { index: M, overflows: R }, reset: { placement: A } };
      let D = "bottom";
      switch (u) {
        case "bestFit": {
          var H;
          const T = (H = R.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, V) => W + V, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : H[0].placement;
          T && (D = T);
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
}, jf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = en(a), u = Ss(a), f = dr(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: b } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), f ? { x: _ * y, y: w * g } : { x: w * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function dt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  return dt(e).getComputedStyle(e);
}
function pe(e) {
  return Th(e) ? (e.nodeName || "").toLowerCase() : "";
}
let zs;
function Mh() {
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
function Th(e) {
  return e instanceof dt(e).Node;
}
function wl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot;
}
function ur(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Xf(e) {
  return ["table", "td", "th"].includes(pe(e));
}
function uo(e) {
  const t = /firefox/i.test(Mh()), n = At(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Eh() {
  return !/^((?!chrome|android).)*safari/i.test(Mh());
}
function ga(e) {
  return ["html", "body", "#document"].includes(pe(e));
}
const vl = Math.min, Vn = Math.max, Ei = Math.round;
function Nh(e) {
  const t = At(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = Ei(n) !== i || Ei(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Rh(e) {
  return Ct(e) ? e : e.contextElement;
}
const Ah = { x: 1, y: 1 };
function nn(e) {
  const t = Rh(e);
  if (!Jt(t))
    return Ah;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Nh(t);
  let o = (r ? Ei(n.width) : n.width) / s, a = (r ? Ei(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function De(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Rh(e);
  let l = Ah;
  t && (s ? Ct(s) && (l = nn(s)) : l = nn(e));
  const h = a ? dt(a) : window, c = !Eh() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, g = o.height / l.y;
  if (a) {
    const y = dt(a), v = s && Ct(s) ? dt(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = nn(w), b = w.getBoundingClientRect(), k = getComputedStyle(w);
      b.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, b.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, g *= _.y, d += b.x, u += b.y, w = dt(w).frameElement;
    }
  }
  return { width: f, height: g, top: u, right: d + f, bottom: u + g, left: d, x: d, y: u };
}
function de(e) {
  return ((Th(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fr(e) {
  return Ct(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ph(e) {
  return De(de(e)).left + fr(e).scrollLeft;
}
function Jf(e, t, n) {
  const s = Jt(t), i = de(t), r = De(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((pe(t) !== "body" || ur(i)) && (o = fr(t)), Jt(t)) {
      const l = De(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Ph(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function ts(e) {
  if (pe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (wl(e) ? e.host : null) || de(e);
  return wl(t) ? t.host : t;
}
function _l(e) {
  return Jt(e) && At(e).position !== "fixed" ? e.offsetParent : null;
}
function bl(e) {
  const t = dt(e);
  let n = _l(e);
  for (; n && Xf(n) && At(n).position === "static"; )
    n = _l(n);
  return n && (pe(n) === "html" || pe(n) === "body" && At(n).position === "static" && !uo(n)) ? t : n || function(s) {
    let i = ts(s);
    for (; Jt(i) && !ga(i); ) {
      if (uo(i))
        return i;
      i = ts(i);
    }
    return null;
  }(e) || t;
}
function Lh(e) {
  const t = ts(e);
  return ga(t) ? e.ownerDocument.body : Jt(t) && ur(t) ? t : Lh(t);
}
function Un(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Lh(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = dt(s);
  return i ? t.concat(r, r.visualViewport || [], ur(s) ? s : []) : t.concat(s, Un(s));
}
function Cl(e, t, n) {
  return t === "viewport" ? Mi(function(s, i) {
    const r = dt(s), o = de(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = Eh();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : Ct(t) ? function(s, i) {
    const r = De(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Jt(s) ? nn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : Mi(function(s) {
    var i;
    const r = de(s), o = fr(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Vn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Vn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Ph(s);
    const d = -o.scrollTop;
    return At(a || r).direction === "rtl" && (c += Vn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(de(e)));
}
const Zf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Un(h).filter((v) => Ct(v) && pe(v) !== "body"), f = null;
    const g = At(h).position === "fixed";
    let y = g ? ts(h) : h;
    for (; Ct(y) && !ga(y); ) {
      const v = At(y), w = uo(y);
      (g ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : u = u.filter((_) => _ !== y), y = ts(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Cl(t, c, i);
    return h.top = Vn(d.top, h.top), h.right = vl(d.right, h.right), h.bottom = vl(d.bottom, h.bottom), h.left = Vn(d.left, h.left), h;
  }, Cl(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Jt(n), r = de(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((pe(n) !== "body" || ur(r)) && (o = fr(n)), Jt(n))) {
    const h = De(n);
    a = nn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ct, getDimensions: function(e) {
  return Nh(e);
}, getOffsetParent: bl, getDocumentElement: de, getScale: nn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || bl, r = this.getDimensions;
  return { reference: Jf(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => At(e).direction === "rtl" };
function Qf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...Ct(e) ? Un(e) : e.contextElement ? Un(e.contextElement) : [], ...Un(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let f = !0;
    d = new ResizeObserver(() => {
      f || n(), f = !1;
    }), Ct(e) && !a && d.observe(e), Ct(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? De(e) : null;
  return a && function f() {
    const g = De(e);
    !u || g.x === u.x && g.y === u.y && g.width === u.width && g.height === u.height || n(), u = g, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((g) => {
      l && g.removeEventListener("scroll", n), r && g.removeEventListener("resize", n);
    }), (f = d) == null || f.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const tp = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Zf, ...n }, r = { ...i.platform, _c: s };
  return Of(e, t, { ...i, platform: r });
};
var ya = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (ya(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ie = (e, t, n, s) => (ya(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Rt = (e, t, n) => (ya(e, t, "access private method"), n), qn, Gn, In, Xe, lt, fo, Ni, pr, wa, va, Dh, po, Ih, _a, Wh, ba, Oh, Ca, Hh, mo, Bh, xa, zh, Yn, go, Fh;
const Je = class extends mt {
  constructor() {
    super(...arguments), X(this, pr), X(this, va), X(this, po), X(this, _a), X(this, ba), X(this, Ca), X(this, mo), X(this, xa), X(this, go), X(this, qn, !1), X(this, Gn, void 0), X(this, In, 0), X(this, Xe, void 0), X(this, lt, void 0), X(this, fo, void 0), X(this, Ni, void 0), this.hideLater = () => {
      U(this, Yn).call(this), Ie(this, In, window.setTimeout(this.hide.bind(this), 100));
    }, X(this, Yn, () => {
      clearTimeout(U(this, In)), Ie(this, In, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Xe)) == null ? void 0 : e.classList.contains(Je.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Xe) || Rt(this, po, Ih).call(this);
  }
  get trigger() {
    return U(this, fo) || this.element;
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
    return this.setOptions(e), !U(this, qn) && this.isHover && Rt(this, go, Fh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Je.CLASS_SHOW), Rt(this, mo, Bh).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, Ni)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Xe)) == null || t.classList.remove(Je.CLASS_SHOW), !0;
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
fo = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
pr = /* @__PURE__ */ new WeakSet();
wa = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
va = /* @__PURE__ */ new WeakSet();
Dh = function() {
  const e = Rt(this, pr, wa).call(this);
  return Ie(this, lt, document.createElement("div")), U(this, lt).style.position = this.options.strategy, U(this, lt).style.width = `${e}px`, U(this, lt).style.height = `${e}px`, U(this, lt).style.transform = "rotate(45deg)", U(this, lt);
};
po = /* @__PURE__ */ new WeakSet();
Ih = function() {
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
  if (this.options.arrow && (t == null || t.append(Rt(this, va, Dh).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Ie(this, Xe, t), t;
};
_a = /* @__PURE__ */ new WeakSet();
Wh = function() {
  var i;
  const e = Rt(this, pr, wa).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [jf(e), Kf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, lt) && ((i = s.middleware) == null || i.push(Vf({ element: U(this, lt) }))), s;
};
ba = /* @__PURE__ */ new WeakSet();
Oh = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Ca = /* @__PURE__ */ new WeakSet();
Hh = function(e) {
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
mo = /* @__PURE__ */ new WeakSet();
Bh = function() {
  const e = Rt(this, _a, Wh).call(this), t = Rt(this, xa, zh).call(this);
  Ie(this, Ni, Qf(t, this.tooltip, () => {
    this.element && tp(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = Rt(this, ba, Oh).call(this, o);
      if (i.arrow && U(this, lt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, lt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Rt(this, Ca, Hh).call(this, o)
        });
      }
    });
  }));
};
xa = /* @__PURE__ */ new WeakSet();
zh = function() {
  return U(this, Gn) || Ie(this, Gn, {
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
go = /* @__PURE__ */ new WeakSet();
Fh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Yn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ie(this, qn, !0);
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
function ep({
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
  trailingIcon: f,
  hint: g,
  checked: y,
  actions: v,
  show: w,
  level: _ = 0,
  items: b,
  ...k
}) {
  const x = Array.isArray(v) ? { items: v } : v;
  return x && (x.btnProps || (x.btnProps = { size: "sm" }), x.className = E("tree-actions not-nested-toggle", x.className)), /* @__PURE__ */ p(
    "div",
    {
      className: E("tree-item-content", n, { disabled: l, active: h }),
      title: g,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${_} * var(--tree-indent, 20px))` }, r),
      "data-level": _,
      ...o,
      ...k,
      children: [
        /* @__PURE__ */ p("span", { class: `tree-toggle-icon${b ? " state" : ""}`, children: b ? /* @__PURE__ */ p("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ p("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ p("label", {}) }) : null,
        /* @__PURE__ */ p(nt, { icon: c, className: "tree-icon" }),
        a ? /* @__PURE__ */ p("a", { className: "text tree-link not-nested-toggle", href: a, children: d }) : /* @__PURE__ */ p("span", { class: "text", children: d }),
        /* @__PURE__ */ p(bs, { content: i }),
        s,
        x ? /* @__PURE__ */ p(pt, { ...x }) : null,
        /* @__PURE__ */ p(nt, { icon: f, className: "tree-trailing-icon" })
      ]
    }
  );
}
let $a = class extends ir {
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
    return n && (t.className = E(t.className, "tree-hover")), t;
  }
};
$a.ItemComponents = {
  item: ep
};
$a.NAME = "tree";
class Vh extends q {
}
Vh.NAME = "Tree";
Vh.Component = $a;
class Uh extends mt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? mu(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
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
    return m(`<span class="file-size text-gray">${pu(t)}</span>`);
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
Uh.DEFAULT = {
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
class np extends Uh {
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
np.DEFAULT = {
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
var _s, Xi, Ji, Zi, El;
let sp = (El = class extends z {
  constructor() {
    super(...arguments);
    L(this, _s, K());
    L(this, Xi, (n) => {
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
    L(this, Ji, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, Zi, (n) => {
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
          this.setState({ loading: !1, content: /* @__PURE__ */ p(jo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ p("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: f } = this.state;
    let { content: g } = this.state;
    return g === void 0 && m.isPlainObject(d) && d.html && (g = /* @__PURE__ */ p("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ p("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ p(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, Ji),
        onDragEnd: C(this, Zi),
        "data-id": c,
        ref: C(this, _s),
        children: [
          /* @__PURE__ */ p("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ p("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ p("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ p("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Xi), children: /* @__PURE__ */ p("div", { class: "more-vert" }) }) }) : null
          ] }),
          g
        ]
      }
    ) });
  }
}, _s = new WeakMap(), Xi = new WeakMap(), Ji = new WeakMap(), Zi = new WeakMap(), El);
var qh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Kt = (e, t, n) => (qh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _t = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, kt = (e, t, n) => (qh(e, t, "access private method"), n), Zt, ka, Gh, Sa, Yh, yo, Kh, Ma, jh, Ri, wo, mr, vo, Ta, Xh, _o, bo, gr, Ea;
const Na = class extends z {
  constructor() {
    super(...arguments), _t(this, ka), _t(this, Sa), _t(this, yo), _t(this, Ma), _t(this, Ri), _t(this, mr), _t(this, Ta), _t(this, Zt, /* @__PURE__ */ new Map()), this.state = {}, _t(this, _o, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), _t(this, bo, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = kt(this, yo, Kh).call(this), { cellHeight: n, grid: s } = this.props, i = Kt(this, Zt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ p("div", { class: "dashboard", children: /* @__PURE__ */ p("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ p(
        sp,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Kt(this, _o),
          onDragEnd: Kt(this, bo)
        },
        r.id
      );
    }) }) });
  }
};
let Ra = Na;
Zt = /* @__PURE__ */ new WeakMap();
ka = /* @__PURE__ */ new WeakSet();
Gh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Sa = /* @__PURE__ */ new WeakSet();
Yh = function() {
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
    } = i, [u, f] = kt(this, ka, Gh).call(this, o);
    return {
      id: `${r}`,
      width: u,
      height: f,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...d
    };
  });
};
yo = /* @__PURE__ */ new WeakSet();
Kh = function() {
  Kt(this, Zt).clear();
  let e = 0;
  const t = kt(this, Sa, Yh).call(this);
  return t.forEach((n) => {
    kt(this, Ma, jh).call(this, n);
    const [, s, , i] = Kt(this, Zt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Ma = /* @__PURE__ */ new WeakSet();
jh = function(e) {
  const t = Kt(this, Zt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = kt(this, Ta, Xh).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    kt(this, mr, vo).call(this, n, [s, i, r, o]);
};
Ri = /* @__PURE__ */ new WeakSet();
wo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Kt(this, Zt).entries())
    if (s !== n && kt(t = Na, gr, Ea).call(t, i, e))
      return !1;
  return !0;
};
mr = /* @__PURE__ */ new WeakSet();
vo = function(e, t) {
  var n;
  Kt(this, Zt).set(e, t);
  for (const [s, i] of Kt(this, Zt).entries())
    s !== e && kt(n = Na, gr, Ea).call(n, i, t) && (i[1] = t[1] + t[3], kt(this, mr, vo).call(this, s, i));
};
Ta = /* @__PURE__ */ new WeakSet();
Xh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (kt(this, Ri, wo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (kt(this, Ri, wo).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
_o = /* @__PURE__ */ new WeakMap();
bo = /* @__PURE__ */ new WeakMap();
gr = /* @__PURE__ */ new WeakSet();
Ea = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
_t(Ra, gr);
Ra.defaultProps = {
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
class Jh extends q {
}
Jh.NAME = "Dashboard";
Jh.Component = Ra;
var le, ce;
class xl extends z {
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
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, y = {};
    return s === "horz" ? (g.height = i, g.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (g.width = i, g.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ p(
      "div",
      {
        className: E("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ p(
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
const Ai = /* @__PURE__ */ new Map(), Pi = [];
function Zh(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Ai.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Ai.set(n, e), t != null && t.buildIn && !Pi.includes(n) && Pi.push(n);
}
function ye(e, t) {
  Zh(e, t);
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
function Qh(e) {
  return Ai.delete(e);
}
function ip(e) {
  if (typeof e == "string") {
    const t = Ai.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function td(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = ip(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && td(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function rp(e = [], t = !0) {
  return t && Pi.length && e.unshift(...Pi), e != null && e.length ? td([], e, /* @__PURE__ */ new Set()) : [];
}
function ed() {
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
function op(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function $l(e, t) {
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
function ap(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = $l(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
  }, f = [], g = {};
  let y = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: b, onAddCol: k } = _;
    b && Object.entries(b).forEach(([x, S]) => {
      w[x] || (w[x] = []), w[x].push(S);
    }), k && v.push(k);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: b = "", name: k } = _, x = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: b
    }, S = {
      name: k,
      type: b,
      setting: x,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, R = w[b];
    R && R.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, x) : I;
      W && Object.assign(x, W, _);
    });
    const { fixed: P, flex: H, minWidth: M = r, maxWidth: A = o } = x, D = $l(x.width || i, i);
    S.flex = H === !0 ? 1 : typeof H == "number" ? H : 0, S.width = op(D < 1 ? Math.round(D * s) : D, M, A), v.forEach((I) => I.call(e, S)), f.push(S), g[S.name] = S;
    const T = P ? P === "left" ? d : u : c;
    T.list.push(S), T.totalWidth += S.width, T.width = T.totalWidth, S.flex && T.flexList.push(S), typeof x.order == "number" && (y = !0);
  }), y) {
    const _ = (b, k) => (b.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return Pr(d, !0), Pr(u, !0), c.widthSetting = s - d.width - u.width, Pr(c), {
    list: f,
    map: g,
    left: d,
    center: c,
    right: u
  };
}
function lp({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: h, left: c, top: d, ...u }) {
  var D;
  const f = {
    left: c ?? e.left,
    top: d ?? s.top,
    width: h ?? e.realWidth,
    height: n,
    ...o
  }, { align: g, border: y } = e.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...r
  }, w = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], _ = ["dtable-cell-content", e.setting.cellClass], b = (D = s.data) == null ? void 0 : D[e.name], k = [a ?? b ?? ""], x = i ? i(k, { row: s, col: e, value: b }, j) : k, S = [], R = [], P = {}, H = {};
  let M = "div";
  x == null || x.forEach((T) => {
    if (typeof T == "object" && T && !Q(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const I = T.outer ? S : R;
      T.html ? I.push(/* @__PURE__ */ p("div", { className: E("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? f : v, T.style), T.className && (T.outer ? w : _).push(T.className), T.children && I.push(T.children), T.attrs && Object.assign(T.outer ? P : H, T.attrs)), T.tagName && !T.outer && (M = T.tagName);
    } else
      R.push(T);
  });
  const A = M;
  return /* @__PURE__ */ p(
    "div",
    {
      className: E(w),
      style: f,
      "data-col": e.name,
      "data-row": s.id,
      "data-type": e.type || null,
      ...u,
      ...P,
      children: [
        R.length > 0 && /* @__PURE__ */ p(A, { className: E(_), style: v, ...H, children: R }),
        S
      ]
    }
  );
}
function Lr({
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
  CellComponent: c = lp,
  onRenderCell: d
}) {
  var y;
  const u = Array.isArray(e) ? e : [e], f = ((y = u[0]) == null ? void 0 : y.top) ?? 0, g = u.length;
  return /* @__PURE__ */ p(
    "div",
    {
      className: E("dtable-cells", h),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ p("div", { className: "dtable-cells-container", style: { left: -s, top: -i + f }, children: u.reduce((v, w, _) => {
        const b = t.length;
        return t.forEach((k, x) => {
          v.push(
            /* @__PURE__ */ p(
              c,
              {
                className: E(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  x ? "" : "is-first-in-row",
                  x === b - 1 ? "is-last-in-row" : "",
                  _ ? "" : "is-first-row",
                  _ === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: w,
                top: w.top - f,
                height: n,
                onRenderCell: d
              },
              `${w.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function nd({
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
  i.list.length && (u = /* @__PURE__ */ p(
    Lr,
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
  let f = null;
  r.list.length && (f = /* @__PURE__ */ p(
    Lr,
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
  return o.list.length && (g = /* @__PURE__ */ p(
    Lr,
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
  )), /* @__PURE__ */ p(
    "div",
    {
      className: E("dtable-block", h),
      style: { ...c, top: e, height: t },
      children: [
        u,
        f,
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
}, G = (e, t, n, s) => (Aa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ht = (e, t, n) => (Aa(e, t, "access private method"), n), Ge, Wn, Re, Ut, ke, at, zt, Bt, On, ai, Li, es, ie, Hn, Bn, Co, sd, xo, id, $o, rd, ko, od, li, So, yr, Di, Mo, To, Eo, No, zn, ci, Pa, ad, La, ld, Ro, cd;
let Da = class extends z {
  constructor(t) {
    super(t), B(this, Co), B(this, xo), B(this, $o), B(this, ko), B(this, li), B(this, zn), B(this, Pa), B(this, La), B(this, Ro), this.ref = K(), B(this, Ge, 0), B(this, Wn, void 0), B(this, Re, !1), B(this, Ut, void 0), B(this, ke, void 0), B(this, at, []), B(this, zt, void 0), B(this, Bt, /* @__PURE__ */ new Map()), B(this, On, {}), B(this, ai, void 0), B(this, Li, []), B(this, es, { in: !1 }), this.updateLayout = () => {
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
    }), B(this, yr, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, at).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, Di, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, Mo, (n) => {
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
    }), B(this, To, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), B(this, Eo, (n) => {
      const s = m(n.target).closest(".dtable-cell");
      if (!s.length)
        return ht(this, zn, ci).call(this, !1);
      ht(this, zn, ci).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), B(this, No, () => {
      ht(this, zn, ci).call(this, !1);
    }), G(this, Wn, t.id ?? `dtable-${qc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, ke, Object.freeze(rp(t.plugins))), N(this, ke).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(N(this, On), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = N(this, zt)) == null ? void 0 : t.options) || N(this, Ut) || ed();
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
    N(this, Re) ? this.forceUpdate() : ht(this, li, So).call(this), N(this, at).forEach((n) => {
      let { events: s } = n;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", N(this, Mo)), this.on("keydown", N(this, To));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", N(this, Eo)), this.on("mouseleave", N(this, No))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(n), G(this, ai, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, at).forEach((n) => {
      var s;
      (s = n.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    N(this, Re) ? ht(this, li, So).call(this) : N(this, at).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = N(this, ai)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of N(this, Bt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), N(this, Hn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), N(this, Bn)) : t.removeEventListener(s, N(this, ie));
    N(this, at).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), N(this, ke).forEach((s) => {
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
    const f = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (f.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (f.scrollTop = u)), Object.keys(f).length ? (this.setState(f, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, f), n == null || n.call(this, !0);
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
    return tt(N(this, Li), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = ht(this, Ro, cd).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      ht(this, Co, sd).call(this, t),
      ht(this, xo, id).call(this, t),
      ht(this, $o, rd).call(this, t),
      ht(this, ko, od).call(this, t)
    ), N(this, at).forEach((u) => {
      var g;
      const f = (g = u.onRender) == null ? void 0 : g.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && d.push(f.children));
    })), /* @__PURE__ */ p(
      "div",
      {
        id: N(this, Wn),
        className: E(c),
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
Re = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
ke = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
es = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
Co = /* @__PURE__ */ new WeakSet();
sd = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ p(
      nd,
      {
        className: "dtable-header",
        cols: n,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, yr)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ p(
    Xo,
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
id = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ p(
    nd,
    {
      className: "dtable-body",
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, yr)
    },
    "body"
  );
};
$o = /* @__PURE__ */ new WeakSet();
rd = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ p(
    Xo,
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
ko = /* @__PURE__ */ new WeakSet();
od = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ p(
      xl,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, Di),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ p("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ p("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ p(
      xl,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, Di),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
li = /* @__PURE__ */ new WeakSet();
So = function() {
  var e;
  G(this, Re, !1), (e = this.options.afterRender) == null || e.call(this), N(this, at).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
yr = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakMap();
To = /* @__PURE__ */ new WeakMap();
Eo = /* @__PURE__ */ new WeakMap();
No = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakSet();
ci = function(e) {
  const { element: t, options: n } = this;
  if (!t)
    return;
  const s = m(t), i = e ? { in: !0, row: e[0], col: e[1] } : { in: !1 };
  n.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, es);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, es, i);
};
Pa = /* @__PURE__ */ new WeakSet();
ad = function() {
  if (N(this, Ut))
    return !1;
  const t = { ...ed(), ...N(this, ke).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return G(this, Ut, t), G(this, at, N(this, ke).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), G(this, Li, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
La = /* @__PURE__ */ new WeakSet();
ld = function() {
  var P, H;
  const { plugins: e } = this;
  let t = N(this, Ut);
  const n = {
    flex: /* @__PURE__ */ p("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ p("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((M) => {
    var D;
    const A = (D = M.beforeLayout) == null ? void 0 : D.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(n, M.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: M } = this;
    if (M)
      i = M.clientWidth;
    else {
      G(this, Re, !0);
      return;
    }
  }
  const r = ap(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (M, A, D) => {
    var I, W;
    const T = { data: D ?? { [a]: M }, id: M, index: h.length, top: 0 };
    if (D || (T.lazy = !0), h.push(T), ((I = t.onAddRow) == null ? void 0 : I.call(this, T, A)) !== !1) {
      for (const V of e)
        if (((W = V.onAddRow) == null ? void 0 : W.call(this, T, A)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let M = 0; M < o; M++)
      c(`${M}`, M);
  else
    Array.isArray(o) && o.forEach((M, A) => {
      typeof M == "object" ? c(`${M[a] ?? ""}`, A, M) : c(`${M ?? ""}`, A);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const M = t.onAddRows.call(this, d);
    M && (d = M);
  }
  for (const M of e) {
    const A = (P = M.onAddRows) == null ? void 0 : P.call(this, d);
    A && (d = A);
  }
  d.forEach((M, A) => {
    u[M.id] = M, M.index = A, M.top = M.index * l;
  });
  const { header: f, footer: g } = t, y = f ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const b = d.length * l, k = y + v + b;
  if (typeof w == "function" && (w = w.call(this, k)), w === "auto")
    _ = k;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, k));
  else if (w === "100%") {
    const { parent: M } = this;
    if (M)
      _ = M.clientHeight;
    else {
      _ = 0, G(this, Re, !0);
      return;
    }
  } else
    _ = w;
  const x = _ - y - v, S = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: x,
    rowsHeightTotal: b,
    header: f,
    footer: g,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, R = (H = t.onLayout) == null ? void 0 : H.call(this, S);
  R && Object.assign(S, R), e.forEach((M) => {
    if (M.onLayout) {
      const A = M.onLayout.call(this, S);
      A && Object.assign(S, A);
    }
  }), G(this, zt, S);
};
Ro = /* @__PURE__ */ new WeakSet();
cd = function() {
  (ht(this, Pa, ad).call(this) || !N(this, zt)) && ht(this, La, ld).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: f } = this.options;
  for (let g = h; g < d; g++) {
    const y = o[g];
    y.lazy && f && (y.data = f([y.id])[0], y.lazy = !1), u.push(y);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
Da.addPlugin = Zh;
Da.removePlugin = Qh;
function cp(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !hd.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function hp(e) {
  return this.state.checkedRows[e] ?? !1;
}
function hd() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function dp() {
  return Object.keys(this.state.checkedRows);
}
function up(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function kl(e, t, n = !1) {
  return /* @__PURE__ */ p("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ p("label", {}) });
}
const Sl = 'input[type="checkbox"],.dtable-checkbox', fp = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: kl
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
    toggleCheckRows: cp,
    isRowChecked: hp,
    isAllRowChecked: hd,
    getChecks: dp,
    toggleCheckable: up
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
        /* @__PURE__ */ p("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: kl(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ p("div", { children: r.join(", ") })
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
    const n = t.closest(Sl);
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onCellClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (n.closest(Sl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, pp = ye(fp);
var dd = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(dd || {});
function Ii(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Ii.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ii.call(this, t.parent).level + 1 : 0, t;
}
function mp(e) {
  return e !== void 0 ? Ii.call(this, e) : this.data.nestedMap;
}
function gp(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ud.call(this)), t) {
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
function ud() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function fd(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = fd(e, t, o.children, s + 1)));
  }
  return t;
}
function pd(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, pd(e, r, n, s);
  }), i;
}
function md(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && md(e, r.parent, n, s, i);
}
const yp = {
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
        const o = pd(this, i, r, s);
        o != null && o.parent && md(this, o.parent, r, s, n);
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
    getNestedInfo: mp,
    toggleRow: gp,
    isAllCollapsed: ud,
    getNestedRowInfo: Ii
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
    ), fd(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ p("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ p("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ p("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ p("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ p("span", { className: "toggle-icon" }) }),
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
}, wp = ye(yp);
function gd(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ p("a", { href: it(i, t.row.data), ...s, ...r, ...a, children: n });
}
function Ia(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : it(e, n);
}
function yd(e, t, n, s) {
  var i;
  return n ? (n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), $t(n, e, s ?? n))) : s;
}
function wd(e, t) {
  const { link: n } = t.col.setting, s = gd(n, t, e[0]);
  return s && (e[0] = s), e;
}
function vd(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = Ia(n, t, e[0])), e;
}
function _d(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function bd(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = yd(s, t, e[0], i), e;
}
function Ao(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : Ia(s, t, i);
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
        return e[0] = /* @__PURE__ */ p("svg", { width: n, height: n, children: [
          /* @__PURE__ */ p("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ p("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ p("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = bd(e, t, n)), e = _d(e, t), e = vd(e, t), s ? e = Ao(e, t) : e = wd(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = it(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, _p = ye(vp, { buildIn: !0 });
function Dr(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], d = {
    size: "xs",
    className: E(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ p(Gc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, f = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ p("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ p("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ p("span", { children: c })
    ] }));
  return e;
}
const bp = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Dr
    },
    avatarBtn: {
      onRenderCell: Dr
    },
    avatarName: {
      onRenderCell: Dr
    }
  }
}, Cp = ye(bp, { buildIn: !0 }), xp = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ p("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ p("a", { href: it(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, $p = ye(xp, { buildIn: !0 }), Ir = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, kp = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Ir(t.left.list), Ir(t.center.list), Ir(t.right.list);
  }
}, Sp = ye(kp), Mp = {
  name: "cellspan",
  when: (e) => !!e.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(e) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: n, overlayedCellSet: s } = this.data, { rows: i, cols: r, rowHeight: o } = e;
    n.clear(), s.clear();
    const a = (l, h, c) => {
      const { index: d } = h;
      l.forEach((u, f) => {
        const { index: g } = u, y = `C${g}R${d}`;
        if (s.has(y))
          return;
        const v = t.call(this, { row: h, col: u });
        if (!v)
          return;
        const w = Math.min(v.colSpan || 1, l.length - f), _ = Math.min(v.rowSpan || 1, i.length - c);
        if (w <= 1 && _ <= 1)
          return;
        let b = 0;
        for (let k = 0; k < w; k++) {
          b += l[f + k].realWidth;
          for (let x = 0; x < _; x++) {
            const S = `C${g + k}R${d + x}`;
            S !== y && s.add(S);
          }
        }
        n.set(y, {
          colSpan: w,
          rowSpan: _,
          width: b,
          height: o * _
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((c) => {
        a(r[c].list, l, h);
      });
    });
  },
  onRenderCell(e, { row: t, col: n }) {
    const s = `C${n.index}R${t.index}`;
    if (this.data.overlayedCellSet.has(s))
      e.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(s);
      i && e.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return e;
  }
}, Tp = ye(Mp), Ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: dd,
  avatar: Cp,
  cellspan: Tp,
  checkable: pp,
  group: Sp,
  nested: wp,
  renderDatetime: yd,
  renderDatetimeCell: bd,
  renderFormat: Ia,
  renderFormatCell: vd,
  renderHtmlCell: Ao,
  renderLink: gd,
  renderLinkCell: wd,
  renderMapCell: _d,
  rich: _p,
  sortType: $p
}, Symbol.toStringTag, { value: "Module" }));
class Ms extends q {
}
Ms.NAME = "DTable";
Ms.Component = Da;
Ms.definePlugin = ye;
Ms.removePlugin = Qh;
Ms.plugins = Ep;
var Cd = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ml = (e, t, n) => (Cd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Np = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Tl = (e, t, n, s) => (Cd(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ye;
const Rp = "nav", hi = '[data-toggle="tab"]', Ap = "active";
class xd extends mt {
  constructor() {
    super(...arguments), Np(this, Ye, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(hi);
    let i = t ? m(t).closest(hi) : s.filter(`.${Ap}`);
    if (!i.length && (i = n.find(hi).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = m(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Ml(this, Ye) && clearTimeout(Ml(this, Ye)), Tl(this, Ye, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Tl(this, Ye, 0);
    }, 10)));
  }
}
Ye = /* @__PURE__ */ new WeakMap();
xd.NAME = "Tabs";
m(document).on("click.tabs.zui", hi, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Rp}`);
  n.length && xd.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  yc as ActionMenu,
  vc as ActionMenuNested,
  Yc as Avatar,
  Kc as BtnGroup,
  Zc as ColorPicker,
  mt as Component,
  q as ComponentFromReact,
  rt as ContextMenu,
  bs as CustomContent,
  Xo as CustomRender,
  Ms as DTable,
  Jh as Dashboard,
  rh as DatePicker,
  Yt as Dropdown,
  Uc as EventBus,
  dc as HElement,
  jo as HtmlContent,
  nt as Icon,
  _c as Menu,
  zc as Messager,
  ah as Modal,
  te as ModalBase,
  dh as ModalTrigger,
  fh as Nav,
  ph as Pager,
  mh as Pick,
  bh as Picker,
  Ch as Popovers,
  Vc as ProgressCircle,
  z as ReactComponent,
  $h as SearchBox,
  Zn as TIME_DAY,
  xd as Tabs,
  ih as TimePicker,
  kh as Toolbar,
  ft as Tooltip,
  Vh as Tree,
  Uh as Upload,
  np as UploadImgs,
  mf as addDate,
  m as cash,
  E as classes,
  Fs as componentsMap,
  mu as convertBytes,
  _u as create,
  Z as createDate,
  Nu as createPortal,
  K as createRef,
  fu as deepGet,
  uu as deepGetPath,
  Lp as defineFn,
  pi as delay,
  Dp as dom,
  pu as formatBytes,
  $t as formatDate,
  Xp as formatDateSpan,
  it as formatString,
  jl as getClassList,
  mi as getComponent,
  j as h,
  Ip as hh,
  ku as htm,
  tt as i18n,
  ks as isSameDay,
  Qc as isSameMonth,
  Gp as isSameWeek,
  Xr as isSameYear,
  Yp as isToday,
  jp as isTomorrow,
  Q as isValidElement,
  Kp as isYesterday,
  al as nativeEvents,
  Xn as render,
  uc as renderCustomContent,
  Mu as renderCustomResult,
  lf as store,
  Xl as storeData,
  vu as takeData
};
//# sourceMappingURL=zui.js.map
