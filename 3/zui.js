var Ji = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var k = (e, t, n) => (Ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Ji(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var ye = (e, t, n) => (Ji(e, t, "access private method"), n);
const Gt = document, Ys = window, Qa = Gt.documentElement, He = Gt.createElement.bind(Gt), tl = He("div"), Zi = He("table"), Ih = He("tbody"), ua = He("tr"), { isArray: Ri, prototype: el } = Array, { concat: Oh, filter: to, indexOf: nl, map: sl, push: Hh, slice: il, some: eo, splice: Bh } = el, zh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Fh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Uh = /<.+>/, Vh = /^\w+$/;
function no(e, t) {
  const n = qh(t);
  return !e || !n && !Pe(t) && !G(t) ? [] : !n && Fh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Vh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Ni {
  constructor(t, n) {
    if (!t)
      return;
    if (fr(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Gt;
      if (s = zh.test(t) && Pe(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Uh.test(t) ? al(t) : fr(i) ? i.find(t) : Q(i) ? m(i).find(t) : no(t, i), !s)
        return;
    } else if (Be(t))
      return this.ready(t);
    (s.nodeType || s === Ys) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Ni(t, n);
  }
}
const $ = Ni.prototype, m = $.init;
m.fn = m.prototype = $;
$.length = 0;
$.splice = Bh;
typeof Symbol == "function" && ($[Symbol.iterator] = el[Symbol.iterator]);
function fr(e) {
  return e instanceof Ni;
}
function pn(e) {
  return !!e && e === e.window;
}
function Pe(e) {
  return !!e && e.nodeType === 9;
}
function qh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Gh(e) {
  return !!e && e.nodeType === 3;
}
function jh(e) {
  return typeof e == "boolean";
}
function Be(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function it(e) {
  return e === void 0;
}
function jn(e) {
  return e === null;
}
function rl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function so(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = pn;
m.isFunction = Be;
m.isArray = Ri;
m.isNumeric = rl;
m.isPlainObject = so;
function X(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (so(e)) {
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
m.each = X;
$.each = function(e) {
  return X(this, e);
};
$.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ks(...e) {
  const t = jh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ks(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Ri(r[o]) || so(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Ks(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = Ks;
$.extend = function(e) {
  return Ks($, e);
};
const Yh = /\S+/g;
function Ai(e) {
  return Q(e) ? e.match(Yh) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = Ai(e), s = !it(t);
  return this.each((i, r) => {
    G(r) && X(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(e) {
  return this.toggleClass(e, !0);
};
$.removeAttr = function(e) {
  const t = Ai(e);
  return this.each((n, s) => {
    G(s) && X(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Kh(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return jn(n) ? void 0 : n;
      }
      return it(t) ? this : jn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
$.attr = Kh;
$.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
$.hasClass = function(e) {
  return !!e && eo.call(this, (t) => G(t) && t.classList.contains(e));
};
$.get = function(e) {
  return it(e) ? il.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function Xh(e) {
  return it(e) ? this.get().map((t) => G(t) || Gh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
$.text = Xh;
function jt(e, t, n) {
  if (!G(e))
    return;
  const s = Ys.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function $t(e, t) {
  return parseInt(jt(e, t), 10) || 0;
}
function da(e, t) {
  return $t(e, `border${t ? "Left" : "Top"}Width`) + $t(e, `padding${t ? "Left" : "Top"}`) + $t(e, `padding${t ? "Right" : "Bottom"}`) + $t(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Qi = {};
function Jh(e) {
  if (Qi[e])
    return Qi[e];
  const t = He(e);
  Gt.body.insertBefore(t, null);
  const n = jt(t, "display");
  return Gt.body.removeChild(t), Qi[e] = n !== "none" ? n : "block";
}
function fa(e) {
  return jt(e, "display") === "none";
}
function ol(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Li(e) {
  return Q(e) ? (t, n) => ol(n, e) : Be(e) ? e : fr(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
$.filter = function(e) {
  const t = Li(e);
  return m(to.call(this, (n, s) => t.call(n, s, n)));
};
function fe(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return fe(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Zh = /^\s*<(\w+)[^>]*>/, Qh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, pa = {
  "*": tl,
  tr: Ih,
  td: ua,
  th: ua,
  thead: Zi,
  tbody: Zi,
  tfoot: Zi
};
function al(e) {
  if (!Q(e))
    return [];
  if (Qh.test(e))
    return [He(RegExp.$1)];
  const t = Zh.test(e) && RegExp.$1, n = pa[t] || pa["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = al;
$.has = function(e) {
  const t = Q(e) ? (n, s) => no(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
$.not = function(e) {
  const t = Li(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Zt(e, t, n, s) {
  const i = [], r = Be(t), o = s && Li(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Hh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function ll(e) {
  return e.multiple && e.options ? Zt(to.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function tu(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ml.test(n.type)) {
      const i = Ri(e) ? sl.call(e, String) : jn(e) ? [] : [String(e)];
      s ? X(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = it(e) || jn(e) ? "" : e;
  }) : this[0] && ll(this[0]);
}
$.val = tu;
$.is = function(e) {
  const t = Li(e);
  return eo.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Mt(e) {
  return e.length > 1 ? to.call(e, (t, n, s) => nl.call(s, t) === n) : e;
}
m.unique = Mt;
$.add = function(e, t) {
  return m(Mt(this.get().concat(m(e, t).get())));
};
$.children = function(e) {
  return fe(m(Mt(Zt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return fe(m(Mt(Zt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return nl.call(n, t);
};
$.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
$.siblings = function(e) {
  return fe(m(Mt(Zt(this, (t) => m(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return m(Mt(Zt(this, (t) => no(e, t))));
};
const eu = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, nu = /^$|^module$|\/(java|ecma)script/i, su = ["type", "src", "nonce", "noModule"];
function iu(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (nu.test(i.type) && Qa.contains(i)) {
      const r = He("script");
      r.text = i.textContent.replace(eu, ""), X(su, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ru(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && iu(t, e.ownerDocument);
}
function pe(e, t, n, s, i, r, o, a) {
  return X(e, (l, h) => {
    X(m(h), (c, u) => {
      X(m(t), (d, f) => {
        const p = n ? u : f, y = n ? f : u, _ = n ? c : d;
        ru(p, _ ? y.cloneNode(!0) : y, s, i, !_);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return pe(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return pe(arguments, this, !1, !1, !0);
};
function ou(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (it(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = ou;
$.appendTo = function(e) {
  return pe(arguments, this, !0, !1, !0);
};
$.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
$.before = function() {
  return pe(arguments, this, !1, !0);
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
  return pe(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(e) {
  return pe(arguments, this, !0, !0);
};
$.prepend = function() {
  return pe(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(e) {
  return pe(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return m(Mt(Zt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return fe(m(Mt(Zt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return fe(m(Mt(Zt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return fe(m(Mt(Zt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return m(Oh.apply([], sl.call(this, (t, n) => e.call(t, n, t))));
};
$.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && jt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Qa;
  });
};
$.slice = function(e, t) {
  return m(il.call(this, e, t));
};
const au = /-([a-z])/g;
function io(e) {
  return e.replace(au, (t, n) => n.toUpperCase());
}
$.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Gt.readyState !== "loading" ? t() : Gt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + Ys.pageYOffset,
    left: t.left + Ys.pageXOffset
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
    if (i !== e && G(i)) {
      const r = m(i).offset();
      n.top -= r.top + $t(i, "borderTopWidth"), n.left -= r.left + $t(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - $t(e, "marginTop"),
    left: n.left - $t(e, "marginLeft")
  };
};
const cl = {
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
    if (Q(e))
      return e = cl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
$.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[cl[e] || e];
  });
};
const lu = /^--/;
function ro(e) {
  return lu.test(e);
}
const tr = {}, { style: cu } = tl, hu = ["webkit", "moz", "ms"];
function uu(e, t = ro(e)) {
  if (t)
    return e;
  if (!tr[e]) {
    const n = io(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${hu.join(`${s} `)}${s}`.split(" ");
    X(i, (r, o) => {
      if (o in cu)
        return tr[e] = o, !1;
    });
  }
  return tr[e];
}
const du = {
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
function hl(e, t, n = ro(e)) {
  return !n && !du[e] && rl(t) ? `${t}px` : t;
}
function fu(e, t) {
  if (Q(e)) {
    const n = ro(e);
    return e = uu(e, n), arguments.length < 2 ? this[0] && jt(this[0], e, n) : e ? (t = hl(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
$.css = fu;
function ul(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const pu = /^\s+|\s+$/;
function ga(e, t) {
  const n = e.dataset[t] || e.dataset[io(t)];
  return pu.test(n) ? n : ul(JSON.parse, n);
}
function gu(e, t, n) {
  n = ul(JSON.stringify, n), e.dataset[io(t)] = n;
}
function mu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ga(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && ga(this[0], e) : it(t) ? this : this.each((n, s) => {
      gu(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
$.data = mu;
function dl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
X([!0, !1], (e, t) => {
  X(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return pn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Pe(this[0]) ? dl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? $t(this[0], `margin${n ? "Top" : "Left"}`) + $t(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
X(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return it(s) ? void 0 : this;
    if (!arguments.length)
      return pn(this[0]) ? this[0].document.documentElement[`client${t}`] : Pe(this[0]) ? dl(this[0], t) : this[0].getBoundingClientRect()[n] - da(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = jt(o, "boxSizing");
      o.style[n] = hl(n, i + (a === "border-box" ? da(o, !e) : 0));
    });
  };
});
const ma = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = fa(n);
    (it(e) ? s : e) ? (n.style.display = n[ma] || "", fa(n) && (n.style.display = Jh(n.tagName))) : s || (n[ma] = jt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const ya = "___ce", oo = ".", ao = { focus: "focusin", blur: "focusout" }, fl = { mouseenter: "mouseover", mouseleave: "mouseout" }, yu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function lo(e) {
  return fl[e] || ao[e] || e;
}
function co(e) {
  const t = e.split(oo);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = co(e), r = lo(s);
    if (!r)
      return this;
    const o = yu.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Gt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(oo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in ao;
  return this.each((s, i) => {
    n && Be(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function pl(e) {
  return e[ya] = e[ya] || {};
}
function wu(e, t, n, s, i) {
  const r = pl(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function gl(e, t) {
  return !t || !eo.call(t, (n) => e.indexOf(n) < 0);
}
function Xs(e, t, n, s, i) {
  const r = pl(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !gl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Xs(e, t, n, s, i);
}
$.off = function(e, t, n) {
  if (it(e))
    this.each((s, i) => {
      !G(i) && !Pe(i) && !pn(i) || Xs(i);
    });
  else if (Q(e))
    Be(t) && (n = t, t = ""), X(Ai(e), (s, i) => {
      const [r, o] = co(i), a = lo(r);
      this.each((l, h) => {
        !G(h) && !Pe(h) && !pn(h) || Xs(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
$.remove = function(e) {
  return fe(this, e).detach().off(), this;
};
$.replaceWith = function(e) {
  return this.before(e).remove();
};
$.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function _u(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (it(t) || jn(t) ? t = "" : it(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Be(s) || (s = n, n = void 0), s ? (X(Ai(e), (r, o) => {
    const [a, l] = co(o), h = lo(a), c = a in fl, u = a in ao;
    h && this.each((d, f) => {
      if (!G(f) && !Pe(f) && !pn(f))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !gl(l, y.namespace.split(oo)) || !t && (u && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let _ = f;
        if (t) {
          let v = y.target;
          for (; !ol(v, t); )
            if (v === f || (v = v.parentNode, !v))
              return;
          _ = v;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return _;
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
        const w = s.call(_, y, y.___td);
        i && Xs(f, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, wu(f, h, l, t, p);
    });
  }), this) : this;
}
$.on = _u;
function vu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
$.one = vu;
const bu = /\r?\n/g;
function xu(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(bu, `\r
`))}`;
}
const $u = /file|reset|submit|button|image/i, ml = /radio|checkbox/i;
$.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    X(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || $u.test(i.type) || ml.test(i.type) && !i.checked)
        return;
      const r = ll(i);
      if (!it(r)) {
        const o = Ri(r) ? r : [r];
        X(o, (a, l) => {
          e += xu(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function ku(e, t) {
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
function Cu(e, t, n) {
  try {
    const s = ku(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function et(e, ...t) {
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
var ho = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(ho || {});
function Su(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / ho[n]).toFixed(t) + n);
}
const Eu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * ho[s];
};
let uo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ie;
function Mu() {
  return uo;
}
function Tu(e) {
  uo = e.toLowerCase();
}
function yl(e, t) {
  ie || (ie = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ie, e);
}
function Yt(e, t, n, s, i, r) {
  Array.isArray(e) ? ie && e.unshift(ie) : e = ie ? [ie, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || uo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ie ? `${r}.${t}` : t;
    if (a = Cu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Ru(e, t, n, s) {
  return Yt(void 0, e, t, n, s);
}
Yt.addLang = yl;
Yt.getLang = Ru;
Yt.getCode = Mu;
Yt.setCode = Tu;
yl({
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
function wl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? wl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...e) => wl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = M;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", M(i.attr("class"), ...t)) : i.addClass(M(e, ...t));
  });
};
const xn = /* @__PURE__ */ new WeakMap();
function _l(e, t, n) {
  const s = xn.has(e), i = s ? xn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), xn.set(e, i)) : xn.delete(e);
}
function Nu(e, t) {
  let n = xn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Nu(this[0], t) : this.each((s, i) => _l(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => _l(n, e));
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
const Js = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), er = /* @__PURE__ */ new Map();
function Au(e, t, n) {
  const { zui: s } = window;
  er.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && er.set(r.toLowerCase(), s[r]);
  });
  const i = er.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
m(() => {
  m("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, Au(n, this, t);
  });
});
function vl(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, d = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= d && i + o <= u;
  const f = i <= u && i + o >= 0, p = s <= d && s + r >= 0;
  return f && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    vl(n, e);
  });
};
function fo(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    fo(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    fo(n, e);
  });
};
const zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: vl,
  runJS: fo
}, Symbol.toStringTag, { value: "Module" }));
var Pi, z, bl, K, Ce, wa, xl, pr, Zs = {}, $l = [], Lu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, po = Array.isArray;
function ce(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function kl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Pi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Ss(e, o, s, i, null);
}
function Ss(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++bl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function nt() {
  return { current: null };
}
function mn(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Yn(e, t) {
  if (t == null)
    return e.__ ? Yn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Yn(e) : null;
}
function Cl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cl(e);
  }
}
function _a(e) {
  (!e.__d && (e.__d = !0) && Ce.push(e) && !Qs.__r++ || wa !== z.debounceRendering) && ((wa = z.debounceRendering) || xl)(Qs);
}
function Qs() {
  var e, t, n, s, i, r, o, a;
  for (Ce.sort(pr); e = Ce.shift(); )
    e.__d && (t = Ce.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ce({}, r)).__v = r.__v + 1, go(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Yn(r), r.__h), Rl(s, r), r.__e != o && Cl(r)), Ce.length > t && Ce.sort(pr));
  Qs.__r = 0;
}
function Sl(e, t, n, s, i, r, o, a, l, h) {
  var c, u, d, f, p, y, _, w = s && s.__k || $l, v = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Ss(null, f, null, null, f) : po(f) ? Ss(mn, { children: f }, null, null, null) : f.__b > 0 ? Ss(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = w[c]) === null || d && f.key == d.key && f.type === d.type)
        w[c] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((d = w[u]) && f.key == d.key && f.type === d.type) {
            w[u] = void 0;
            break;
          }
          d = null;
        }
      go(e, f, d = d || Zs, i, r, o, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (_ || (_ = []), d.ref && _.push(d.ref, null, f), _.push(u, f.__c || p, f)), p != null ? (y == null && (y = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = El(f, l, e) : l = Ml(e, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = Yn(d));
    }
  for (n.__e = y, c = v; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = Tl(s).nextSibling), Al(w[c], w[c]));
  if (_)
    for (c = 0; c < _.length; c++)
      Nl(_[c], _[++c], _[++c]);
}
function El(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? El(s, t, n) : Ml(n, s, s, i, s.__e, t));
  return t;
}
function Ml(e, t, n, s, i, r) {
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
function Tl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = Tl(n)))
        return s;
  }
  return null;
}
function Pu(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ti(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ti(e, r, t[r], n[r], s);
}
function va(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Lu.test(t) ? n : n + "px";
}
function ti(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || va(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || va(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? xa : ba, r) : e.removeEventListener(t, r ? xa : ba, r);
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
function ba(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function xa(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function go(e, t, n, s, i, r, o, a, l) {
  var h, c, u, d, f, p, y, _, w, v, x, C, S, T, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (_ = t.props, w = (h = A.contextType) && s[h.__c], v = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(_, v) : (t.__c = c = new V(_, v), c.constructor = A, c.render = Du), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = v, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ce({}, c.__s)), ce(c.__s, A.getDerivedStateFromProps(_, c.__s))), d = c.props, f = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && _ !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, v), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, v) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = _, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), x = 0; x < c._sb.length; x++)
              c.__h.push(c._sb[x]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, v), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = v, c.props = _, c.__P = e, C = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = ce(ce({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), Sl(e, po(N = h != null && h.type === mn && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wu(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function Rl(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      z.__e(s, n.__v);
    }
  });
}
function Wu(e, t, n, s, i, r, o, a) {
  var l, h, c, u = n.props, d = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((l = r[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, r[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), r = null, a = !1;
  }
  if (f === null)
    u === d || a && e.data === d || (e.data = d);
  else {
    if (r = r && Pi.call(e.childNodes), h = (u = n.props || Zs).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Pu(e, d, u, i, a), c)
      t.__k = [];
    else if (Sl(e, po(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Yn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && kl(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== u.value) && ti(e, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && ti(e, "checked", p, u.checked, !1));
  }
  return e;
}
function Nl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function Al(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Nl(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Al(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Du(e, t, n) {
  return this.constructor(e, n);
}
function Kn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], go(t, e = (!s && n || t).__k = q(mn, null, [e]), i || Zs, Zs, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? Pi.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), Rl(r, e);
}
Pi = $l.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, bl = 0, K = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof e == "function" && (e = e(ce({}, n), this.props)), e && ce(n, e), e != null && this.__v && (t && this._sb.push(t), _a(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _a(this));
}, V.prototype.render = mn, Ce = [], xl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Qs.__r = 0;
var Ll = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, Ll(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, $a = /* @__PURE__ */ new Map();
function Iu(e) {
  var t = $a.get(this);
  return t || (t = /* @__PURE__ */ new Map(), $a.set(this, t)), (t = Ll(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, r = 1, o = "", a = "", l = [0], h = function(d) {
      r === 1 && (d || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, o) : r === 3 && (d || o) ? (l.push(3, d, o), r = 2) : r === 2 && o === "..." && d ? l.push(4, d, 0) : r === 2 && o && !d ? l.push(5, 0, !0, o) : r >= 5 && ((o || !d && r === 5) && (l.push(r, 0, o, i), r = 6), d && (l.push(r, d, 0, i), r = 6)), o = "";
    }, c = 0; c < n.length; c++) {
      c && (r === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], r === 1 ? s === "<" ? (h(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[c][u + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const Ff = Iu.bind(q);
function Pl(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return q(t, { ref: o, class: M(n), style: s, ...a, ...r }, i);
}
var Ou = 0;
function g(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ou, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var Qn;
class mo extends V {
  constructor() {
    super(...arguments);
    L(this, Qn, nt());
  }
  componentDidMount() {
    this.props.executeScript && m(k(this, Qn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ g(Pl, { forwardRef: k(this, Qn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Qn = new WeakMap();
function Hu(e) {
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
  } = e, u = [n], d = { ...s }, f = [], p = [];
  return i.forEach((y) => {
    const _ = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        _.push(...l.call(o, y, f, ...r));
      else {
        const w = y.call(o, f, ...r);
        w && (Array.isArray(w) ? _.push(...w) : _.push(w));
      }
    else
      _.push(y);
    _.forEach((w) => {
      w != null && (typeof w == "object" && !K(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ g("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(u),
    style: d,
    ...c
  }, f];
}
function yo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Hu(t);
  return q(e, n, ...s);
}
function Wl(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => Wl(s, t, n)) : K(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ g(mo, { ...e }) : /* @__PURE__ */ g(Pl, { ...e }) : e;
}
function Wi(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = Wl(t, n, s);
  return i == null || typeof i == "boolean" ? null : K(i) ? i : /* @__PURE__ */ g(mn, { children: i });
}
function Ct(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (K(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ g("i", { className: M(i), ...s });
}
function Bu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function zu(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Kn(null, t._temp), t._temp = null, t._container = null;
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
  }), Kn(
    q(Bu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Fu(e, t) {
  const n = q(zu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var Dl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Fe = (e, t, n) => (Dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ue = (e, t, n, s) => (Dl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ve, $n, Es, Ms;
const Il = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ys(this, ve, void 0), ys(this, $n, void 0), ys(this, Es, void 0), ys(this, Ms, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Ue(this, Es, a), Ue(this, $n, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ue(this, ve, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ue(this, Ms, !0), this.emit("inited", this.options), this.afterInit();
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
    return Fe(this, Ms);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Fe(this, $n);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Fe(this, ve);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Fe(this, Es);
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
    Ue(this, ve, void 0), Ue(this, $n, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Fe(this, ve), e), Fe(this, ve);
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
    return Yt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Yt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
let lt = Il;
ve = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
lt.DEFAULT = {};
lt.NAME = Il.name;
lt.MULTI_INSTANCE = !1;
class J extends lt {
  constructor() {
    super(...arguments), this.ref = nt();
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
    Kn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Uu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: M(t),
    style: s,
    ...i
  }, n);
}
function Ol({
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
  target: u,
  trailingIcon: d,
  hint: f,
  checked: p,
  onClick: y,
  ..._
}) {
  const w = [
    typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(Ct, { icon: h }),
    /* @__PURE__ */ g("span", { className: "text", children: c }),
    /* @__PURE__ */ g(Wi, { content: i }),
    s,
    /* @__PURE__ */ g(Ct, { icon: d })
  ];
  return q(t, {
    className: M(n, { disabled: a, active: l }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: u,
    onClick: y,
    ..._,
    ...r
  }, ...w);
}
function Vu({
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
    className: M(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ g(Wi, { content: r }), i);
}
function qu({
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
    className: M(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Gu({ type: e, ...t }) {
  return /* @__PURE__ */ g(yo, { ...t });
}
function Hl({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return q(e, {
    className: M(t),
    style: i,
    ...r
  }, /* @__PURE__ */ g(Wi, { content: s }), n);
}
const gr = class extends V {
  constructor() {
    super(...arguments), this.ref = nt();
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
    const { commonItemProps: s, onClickItem: i } = e, r = { ...t };
    return s && Object.assign(r, s[t.type || "item"]), (i || t.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, t.onClick)), r.className = M(r.className), r;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const p = i[t.type || "item"];
        if (p)
          return /* @__PURE__ */ g(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (K(p))
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
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || gr.ItemComponents[r] : o;
    return Object.assign(d, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && d.checked === void 0 && (d.checked = !!d.active), this.renderTypedItem(f, {
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
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: r, ...o } = t;
    return /* @__PURE__ */ g(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ g(e, { ...n }),
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
      beforeDestroy: u,
      ...d
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ g(f, { class: M(this.name, i), style: n, ...d, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let ze = gr;
ze.ItemComponents = {
  divider: Uu,
  item: Ol,
  heading: Vu,
  space: qu,
  custom: Gu,
  basic: Hl
};
ze.ROOT_TAG = "menu";
ze.NAME = "action-menu";
class Bl extends J {
}
Bl.NAME = "ActionMenu";
Bl.Component = ze;
function ju({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(Ol, { ...s });
}
var zl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ht = (e, t, n) => (zl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), nr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Yu = (e, t, n, s) => (zl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ts, Nt, kn;
let Di = class extends ze {
  constructor(t) {
    super(t), nr(this, Ts, /* @__PURE__ */ new Set()), nr(this, Nt, void 0), nr(this, kn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Yu(this, Nt, t.nestedShow === void 0), ht(this, Nt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: ht(this, Nt) ? this.state.nestedShow : i,
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
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ g(s, { ...i, "data-level": i.level });
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
    ht(this, Ts).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ht(this, kn).bind(this, r, !0),
        onMouseLeave: ht(this, kn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ht(this, kn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = ht(this, Nt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!ht(this, Nt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ht(this, Ts).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    ht(this, Nt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ht(this, Nt) && this.setState({ nestedShow: !1 });
  }
};
Ts = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Di.ItemComponents = {
  item: ju
};
class Fl extends J {
}
Fl.NAME = "ActionMenuNested";
Fl.Component = Di;
let Ii = class extends Di {
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
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ g("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Ii.NAME = "menu";
class Ul extends J {
}
Ul.NAME = "Menu";
Ul.Component = Ii;
class Kt extends V {
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
      loading: u,
      loadingIcon: d,
      loadingText: f,
      icon: p,
      text: y,
      trailingIcon: _,
      caret: w,
      square: v,
      hint: x,
      ...C
    } = this.props, S = t || (a ? "a" : "button"), T = y == null || typeof y == "string" && !y.length || u && !f, N = w && T && !p && !_ && !o && !u;
    return q(
      S,
      {
        className: M("btn", n, r, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: v === void 0 ? !N && !o && T : v
        }, i ? `size-${i}` : ""),
        title: x,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: l,
        type: S === "button" ? s : void 0,
        ...C
      },
      /* @__PURE__ */ g(Ct, { icon: u ? `icon ${d || "icon-spinner-snake"} spin` : p }),
      T ? null : /* @__PURE__ */ g("span", { className: "text", children: u ? f : y }),
      u ? null : o,
      u ? null : typeof _ == "string" ? /* @__PURE__ */ g("i", { class: `icon ${_}` }) : _,
      u ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Ku({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Kt, { type: n, ...s });
}
function cs(e) {
  return e.split("-")[1];
}
function wo(e) {
  return e === "y" ? "height" : "width";
}
function Te(e) {
  return e.split("-")[0];
}
function hs(e) {
  return ["top", "bottom"].includes(Te(e)) ? "x" : "y";
}
function ka(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = hs(t), l = wo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Te(t)) {
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
  switch (cs(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Xu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = ka(h, s, l), d = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: _, fn: w } = a[y], { x: v, y: x, data: C, reset: S } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = v ?? c, u = x ?? u, f = { ...f, [_]: { ...f[_], ...C } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: u } = ka(h, d, l)), y = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function us(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vl(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ei(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function ql(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = us(t, e), p = Vl(f), y = a[d ? u === "floating" ? "reference" : "floating" : u], _ = ei(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, C = ei(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - C.top + p.top) / x.y, bottom: (C.bottom - _.bottom + p.bottom) / x.y, left: (_.left - C.left + p.left) / x.x, right: (C.right - _.right + p.right) / x.x };
}
const mr = Math.min, Ju = Math.max;
function yr(e, t, n) {
  return Ju(e, mr(t, n));
}
const wr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = us(e, t) || {};
  if (l == null)
    return {};
  const c = Vl(h), u = { x: n, y: s }, d = hs(i), f = wo(d), p = await o.getDimensions(l), y = d === "y", _ = y ? "top" : "left", w = y ? "bottom" : "right", v = y ? "clientHeight" : "clientWidth", x = r.reference[f] + r.reference[d] - u[d] - r.floating[f], C = u[d] - r.reference[d], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = S ? S[v] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement(S)) || (T = a.floating[v] || r.floating[f]);
  const N = x / 2 - C / 2, A = T / 2 - p[f] / 2 - 1, O = mr(c[_], A), b = mr(c[w], A), R = O, D = T - p[f] - b, P = T / 2 - p[f] / 2 + N, I = yr(R, P, D), W = cs(i) != null && P != I && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : D - P : 0;
  return { [d]: u[d] - W, data: { [d]: I, centerOffset: P - I + W } };
} }), Zu = ["top", "right", "bottom", "left"];
Zu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Qu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qu[t]);
}
function td(e, t, n) {
  n === void 0 && (n = !1);
  const s = cs(e), i = hs(e), r = wo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ni(o)), { main: o, cross: ni(o) };
}
const ed = { start: "end", end: "start" };
function sr(e) {
  return e.replace(/start|end/g, (t) => ed[t]);
}
const Oi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = us(e, t), _ = Te(s), w = Te(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = u || (w || !p ? [ni(o)] : function(R) {
      const D = ni(R);
      return [sr(R), D, sr(D)];
    }(o));
    u || f === "none" || x.push(...function(R, D, P, I) {
      const W = cs(R);
      let F = function(ct, Tt, gs) {
        const yn = ["left", "right"], ms = ["right", "left"], Xi = ["top", "bottom"], Dh = ["bottom", "top"];
        switch (ct) {
          case "top":
          case "bottom":
            return gs ? Tt ? ms : yn : Tt ? yn : ms;
          case "left":
          case "right":
            return Tt ? Xi : Dh;
          default:
            return [];
        }
      }(Te(R), P === "start", I);
      return W && (F = F.map((ct) => ct + "-" + W), D && (F = F.concat(F.map(sr)))), F;
    }(o, p, f, v));
    const C = [o, ...x], S = await ql(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[_]), c) {
      const { main: R, cross: D } = td(s, r, v);
      T.push(S[R], S[D]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, D = C[R];
      if (D)
        return { data: { index: R, overflows: N }, reset: { placement: D } };
      let P = (O = N.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!P)
        switch (d) {
          case "bestFit": {
            var b;
            const I = (b = N.map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, ct) => F + ct, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : b[0];
            I && (P = I);
            break;
          }
          case "initialPlacement":
            P = o;
        }
      if (s !== P)
        return { reset: { placement: P } };
    }
    return {};
  } };
}, _o = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Te(a), d = cs(a), f = hs(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, y = c && f ? -1 : 1, _ = us(o, r);
      let { mainAxis: w, crossAxis: v, alignmentAxis: x } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return d && typeof x == "number" && (v = d === "end" ? -1 * x : x), f ? { x: v * y, y: w * p } : { x: w * p, y: v * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function nd(e) {
  return e === "x" ? "y" : "x";
}
const _r = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (_) => {
      let { x: w, y: v } = _;
      return { x: w, y: v };
    } }, ...l } = us(e, t), h = { x: n, y: s }, c = await ql(t, l), u = hs(Te(i)), d = nd(u);
    let f = h[u], p = h[d];
    if (r) {
      const _ = u === "y" ? "bottom" : "right";
      f = yr(f + c[u === "y" ? "top" : "left"], f, f - c[_]);
    }
    if (o) {
      const _ = d === "y" ? "bottom" : "right";
      p = yr(p + c[d === "y" ? "top" : "left"], p, p - c[_]);
    }
    const y = a.fn({ ...t, [u]: f, [d]: p });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function gt(e) {
  return at(e).getComputedStyle(e);
}
function Gl(e) {
  return e instanceof at(e).Node;
}
function ue(e) {
  return Gl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  return e instanceof at(e).HTMLElement;
}
function Ft(e) {
  return e instanceof at(e).Element;
}
function Ca(e) {
  return typeof ShadowRoot < "u" && (e instanceof at(e).ShadowRoot || e instanceof ShadowRoot);
}
function Xn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function sd(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function vr(e) {
  const t = vo(), n = gt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function vo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Hi(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const Sa = Math.min, On = Math.max, si = Math.round, ws = Math.floor, We = (e) => ({ x: e, y: e });
function jl(e) {
  const t = gt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = yt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = si(n) !== r || si(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function bo(e) {
  return Ft(e) ? e : e.contextElement;
}
function en(e) {
  const t = bo(e);
  if (!yt(t))
    return We(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = jl(t);
  let o = (r ? si(n.width) : n.width) / s, a = (r ? si(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const Ea = We(0);
function Yl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !vo())
    return Ea;
  const r = e ? at(e) : window;
  return !n || t && n !== r ? Ea : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function De(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = bo(e);
  let o = We(1);
  t && (s ? Ft(s) && (o = en(s)) : o = en(e));
  const a = Yl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, u = i.height / o.y;
  if (r) {
    const d = at(r), f = s && Ft(s) ? at(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const y = en(p), _ = p.getBoundingClientRect(), w = getComputedStyle(p), v = _.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, x = _.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, u *= y.y, l += v, h += x, p = at(p).frameElement;
    }
  }
  return ei({ width: c, height: u, x: l, y: h });
}
function Ut(e) {
  return ((Gl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bi(e) {
  return Ft(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Kl(e) {
  return De(Ut(e)).left + Bi(e).scrollLeft;
}
function gn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ca(e) && e.host || Ut(e);
  return Ca(t) ? t.host : t;
}
function Xl(e) {
  const t = gn(e);
  return Hi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yt(t) && Xn(t) ? t : Xl(t);
}
function ii(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Xl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = at(s);
  return i ? t.concat(r, r.visualViewport || [], Xn(s) ? s : []) : t.concat(s, ii(s));
}
function Ma(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = at(i), a = Ut(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = vo();
        (!f || f && r === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Ut(i), o = Bi(i), a = i.ownerDocument.body, l = On(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = On(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Kl(i);
      const u = -o.scrollTop;
      return gt(a).direction === "rtl" && (c += On(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(Ut(e));
  else if (Ft(t))
    s = function(i, r) {
      const o = De(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = yt(i) ? en(i) : We(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Yl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return ei(s);
}
function Jl(e, t) {
  const n = gn(e);
  return !(n === t || !Ft(n) || Hi(n)) && (gt(n).position === "fixed" || Jl(n, t));
}
function Ta(e, t) {
  return yt(e) && gt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Ra(e, t) {
  const n = at(e);
  if (!yt(e))
    return n;
  let s = Ta(e, t);
  for (; s && sd(s) && gt(s).position === "static"; )
    s = Ta(s, t);
  return s && (ue(s) === "html" || ue(s) === "body" && gt(s).position === "static" && !vr(s)) ? n : s || function(i) {
    let r = gn(i);
    for (; yt(r) && !Hi(r); ) {
      if (vr(r))
        return r;
      r = gn(r);
    }
    return null;
  }(e) || n;
}
function id(e, t, n) {
  const s = yt(t), i = Ut(t), r = n === "fixed", o = De(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = We(0);
  if (s || !s && !r)
    if ((ue(t) !== "body" || Xn(i)) && (a = Bi(t)), yt(t)) {
      const h = De(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Kl(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const rd = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = ii(h).filter((_) => Ft(_) && ue(_) !== "body"), f = null;
    const p = gt(h).position === "fixed";
    let y = p ? gn(h) : h;
    for (; Ft(y) && !Hi(y); ) {
      const _ = gt(y), w = vr(y);
      w || _.position !== "fixed" || (f = null), (p ? !w && !f : !w && _.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Xn(y) && !w && Jl(h, y)) ? d = d.filter((v) => v !== y) : f = _, y = gn(y);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = Ma(t, c, i);
    return h.top = On(u.top, h.top), h.right = Sa(u.right, h.right), h.bottom = Sa(u.bottom, h.bottom), h.left = On(u.left, h.left), h;
  }, Ma(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = yt(n), r = Ut(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = We(1);
  const l = We(0);
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || Xn(r)) && (o = Bi(n)), yt(n))) {
    const h = De(n);
    a = en(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ft, getDimensions: function(e) {
  return jl(e);
}, getOffsetParent: Ra, getDocumentElement: Ut, getScale: en, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Ra, r = this.getDimensions;
  return { reference: id(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => gt(e).direction === "rtl" };
function xo(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = bo(e), c = i || r ? [...h ? ii(h) : [], ...ii(t)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }), r && y.addEventListener("resize", n);
  });
  const u = h && a ? function(y, _) {
    let w, v = null;
    const x = Ut(y);
    function C() {
      clearTimeout(w), v && v.disconnect(), v = null;
    }
    return function S(T, N) {
      T === void 0 && (T = !1), N === void 0 && (N = 1), C();
      const { left: A, top: O, width: b, height: R } = y.getBoundingClientRect();
      if (T || _(), !b || !R)
        return;
      const D = ws(O), P = ws(x.clientWidth - (A + b)), I = ws(x.clientHeight - (O + R)), W = ws(A);
      let F = !0;
      v = new IntersectionObserver((ct) => {
        const Tt = ct[0].intersectionRatio;
        if (Tt !== N) {
          if (!F)
            return S();
          Tt === 0 ? w = setTimeout(() => {
            S(!1, 1e-7);
          }, 100) : S(!1, Tt);
        }
        F = !1;
      }, { rootMargin: -D + "px " + -P + "px " + -I + "px " + -W + "px", threshold: N }), v.observe(y);
    }(!0), C;
  }(h, n) : null;
  let d, f = null;
  o && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? De(e) : null;
  return l && function y() {
    const _ = De(e);
    !p || _.x === p.x && _.y === p.y && _.width === p.width && _.height === p.height || n(), p = _, d = requestAnimationFrame(y);
  }(), n(), () => {
    c.forEach((y) => {
      i && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, l && cancelAnimationFrame(d);
  };
}
const zi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: rd, ...n }, r = { ...i.platform, _c: s };
  return Xu(e, t, { ...i, platform: r });
};
let od = class extends Ii {
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
      middleware: [Oi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && zi(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && this.createPopper();
  }
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ g("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var $o = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rt = (e, t, n) => ($o(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ve = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _s = (e, t, n, s) => ($o(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Na = (e, t, n) => ($o(e, t, "access private method"), n), ee, Cn, Rs, Ns, br, Zl, xr, Ql;
const ir = "show", ad = '[data-toggle="contextmenu"]';
class tt extends lt {
  constructor() {
    super(...arguments), Ve(this, br), Ve(this, xr), Ve(this, ee, void 0), Ve(this, Cn, void 0), Ve(this, Rs, void 0), Ve(this, Ns, void 0);
  }
  get isShown() {
    return Rt(this, ee) && m(Rt(this, ee)).hasClass(ir);
  }
  get menu() {
    return Rt(this, ee) || this.ensureMenu();
  }
  get trigger() {
    return Rt(this, Rs) || this.element;
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
    return this.isShown || (_s(this, Rs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(ir), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Rt(this, Ns)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Rt(this, ee)).removeClass(ir), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Rt(this, ee)) == null || t.remove();
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
      s && s.addClass("menu-popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), _s(this, ee, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(Oi())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    _s(this, Ns, xo(n, s, () => {
      zi(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = Na(this, br, Zl).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: u } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...Na(this, xr, Ql).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Kn(q(od, t), this.menu), !0);
  }
  getPopperElement() {
    return Rt(this, Cn) || _s(this, Cn, {
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
    }), Rt(this, Cn);
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
ee = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
br = /* @__PURE__ */ new WeakSet();
Zl = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
xr = /* @__PURE__ */ new WeakSet();
Ql = function(e) {
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
tt.MENU_CLASS = "contextmenu";
tt.NAME = "ContextMenu";
tt.MULTI_INSTANCE = !0;
tt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${tt.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${tt.MENU_CLASS}`).length)
    return;
  const n = t.closest(ad).not(":disabled,.disabled");
  if (n.length) {
    const s = `${tt.KEY}:options`, i = n.data(s), r = tt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var ko = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sn = (e, t, n) => (ko(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $r = (e, t, n, s) => (ko(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ld = (e, t, n) => (ko(e, t, "access private method"), n), Hn, En, ri, kr, tc;
const Aa = '[data-toggle="dropdown"]', ec = class extends tt {
  constructor() {
    super(...arguments), vs(this, kr), vs(this, Hn, !1), vs(this, En, 0), this.hideLater = () => {
      Sn(this, ri).call(this), $r(this, En, window.setTimeout(this.hide.bind(this), 100));
    }, vs(this, ri, () => {
      clearTimeout(Sn(this, En)), $r(this, En, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && ec.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Sn(this, Hn) && this.isHover && ld(this, kr, tc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Sn(this, Hn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(_o(t)), (s = e.middleware) == null || s.push(wr({ element: this.arrowEl }))), e;
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
let Vt = ec;
Hn = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakSet();
tc = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Sn(this, ri)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), $r(this, Hn, !0);
};
Vt.MENU_CLASS = "dropdown-menu";
Vt.NAME = "Dropdown";
Vt.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const bs = `${Vt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(Aa).not(":disabled,.disabled");
  if (!t.length) {
    Vt.clear({ event: e });
    return;
  }
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(Aa);
  if (!t.length)
    return;
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.isHover && s.show();
});
let xs = 0;
window.addEventListener("scroll", (e) => {
  xs && clearTimeout(xs), xs = window.setTimeout(() => {
    Vt.clear({ event: e }), xs = 0;
  }, 50);
}, !0);
var ts, on;
class cd extends V {
  constructor(n) {
    var s;
    super(n);
    L(this, ts, void 0);
    L(this, on, nt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return k(this, on);
  }
  get triggerElement() {
    return k(this, on).current;
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
    }), B(this, ts, Vt.ensure(this.triggerElement, {
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
    (n = k(this, ts)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: k(this, on)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
ts = new WeakMap(), on = new WeakMap();
class hd extends cd {
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
    return s.caret = i, /* @__PURE__ */ g(Kt, { ...s });
  }
}
function nc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(hd, { type: n, ...s });
}
let sc = class extends V {
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
    return /* @__PURE__ */ g(Kt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
      if (K(l))
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
      afterRender: u,
      beforeDestroy: d,
      ...f
    } = t;
    return /* @__PURE__ */ g(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function ud({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(sc, { type: n, ...s });
}
let wt = class extends ze {
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
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ g(t, { ...a });
  }
};
wt.ItemComponents = {
  item: Ku,
  dropdown: nc,
  "btn-group": ud
};
wt.ROOT_TAG = "nav";
wt.NAME = "toolbar";
wt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function dd({
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
  let u;
  a === !0 ? u = /* @__PURE__ */ g(Kt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : K(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ g(Kt, { ...a, onClick: l }));
  const d = K(n) ? n : n ? /* @__PURE__ */ g(wt, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: M("alert", e), style: t, ...c, children: [
    K(h) ? h : typeof h == "string" ? /* @__PURE__ */ g("i", { className: `icon ${h}` }) : null,
    K(i) ? i : /* @__PURE__ */ g("div", { className: M("alert-content", r), children: [
      K(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    o
  ] });
}
function fd(e) {
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
let pd = class extends V {
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
    return /* @__PURE__ */ g(
      dd,
      {
        className: M("messager", l, i, o === !0 ? fd(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var gd = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, md = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wn = (e, t, n) => (gd(e, t, "access private method"), n), be, Ye;
class Co extends J {
  constructor() {
    super(...arguments), md(this, be), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), wn(this, be, Ye).call(this, () => {
      this._show = !0, this.render(), wn(this, be, Ye).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && wn(this, be, Ye).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && wn(this, be, Ye).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), wn(this, be, Ye).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
be = /* @__PURE__ */ new WeakSet();
Ye = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
Co.NAME = "MessagerItem";
Co.Component = pd;
var So = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Re = (e, t, n) => (So(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, As = (e, t, n, s) => (So(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ic = (e, t, n) => (So(e, t, "access private method"), n), nn, Bt, Cr, rc, Eo, oc;
const ac = class extends lt {
  constructor() {
    super(...arguments), $s(this, Cr), $s(this, Eo), $s(this, nn, void 0), $s(this, Bt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Re(this, Bt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), ic(this, Cr, rc).call(this).show();
  }
  hide() {
    var e;
    (e = Re(this, Bt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = ac.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Mo = ac;
nn = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakSet();
rc = function() {
  if (Re(this, Bt))
    Re(this, Bt).setOptions(this.options);
  else {
    const e = ic(this, Eo, oc).call(this), t = new Co(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), As(this, nn, void 0), As(this, Bt, void 0);
    }), As(this, Bt, t);
  }
  return Re(this, Bt);
};
Eo = /* @__PURE__ */ new WeakSet();
oc = function() {
  if (Re(this, nn))
    return Re(this, nn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), As(this, nn, n[0])), n[0];
};
Mo.NAME = "messager";
Mo.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && Mo.show(t);
});
let yd = class extends V {
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
      component: t,
      className: n,
      children: s,
      text: i,
      icon: r,
      surffixIcon: o,
      disabled: a,
      defaultChecked: l,
      onChange: h,
      ...c
    } = this.props, u = this.state.checked ? 1 : 0, d = t || "div", f = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, y = [
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
      ...y,
      s
    );
  }
};
class lc extends J {
}
lc.NAME = "Switch";
lc.Component = yd;
var Ht;
class wd {
  constructor(t = "") {
    L(this, Ht, void 0);
    typeof t == "object" ? B(this, Ht, t) : B(this, Ht, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    k(this, Ht).addEventListener(t, n, s);
  }
  once(t, n, s) {
    k(this, Ht).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    k(this, Ht).removeEventListener(t, n, s);
  }
  emit(t) {
    return k(this, Ht).dispatchEvent(t), t;
  }
}
Ht = new WeakMap();
const La = /* @__PURE__ */ new Set([
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
class cc extends wd {
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
    return typeof t == "string" && (La.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(cc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (La.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let hc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var es, re, bt, an, ln, Ls;
const ha = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, ln);
    L(this, es, void 0);
    L(this, re, void 0);
    L(this, bt, void 0);
    L(this, an, void 0);
    B(this, es, n), B(this, re, `ZUI_STORE:${t ?? hc()}`), B(this, bt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return k(this, es);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (k(this, an) || B(this, an, new ha(k(this, re), "session")), k(this, an));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = k(this, bt).getItem(ye(this, ln, Ls).call(this, t));
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
    k(this, bt).setItem(ye(this, ln, Ls).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    k(this, bt).removeItem(ye(this, ln, Ls).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < k(this, bt).length; n++) {
      const s = k(this, bt).key(n);
      if (s != null && s.startsWith(k(this, re))) {
        const i = k(this, bt).getItem(s);
        typeof i == "string" && t(s.substring(k(this, re).length + 1), JSON.parse(i));
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
let oi = ha;
es = new WeakMap(), re = new WeakMap(), bt = new WeakMap(), an = new WeakMap(), ln = new WeakSet(), Ls = function(t) {
  return `${k(this, re)}:${t}`;
};
const _d = new oi("DEFAULT");
function vd(e, t = "local") {
  return new oi(e, t);
}
Object.assign(_d, { create: vd });
function bd(e) {
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
function xd(e) {
  const [t, n, s] = typeof e == "string" ? bd(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Pa(e, t) {
  return xd(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Wa(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function $d(e, t, n) {
  e = e % 360 / 360, t = Wa(t), n = Wa(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function kd(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Cd(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let uc = class extends V {
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
      src: u,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: y,
      ..._
    } = this.props, w = ["avatar", t], v = { ...n, background: o, color: a };
    let x = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (w.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? v.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let C;
    if (u)
      w.push("has-img"), C = /* @__PURE__ */ g("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const S = Cd(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (v.color = Pa(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : kd(N)) * d % 360;
        if (v.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = $d(A, f, p);
          v.color = Pa(O);
        }
      }
      let T;
      x && x < 14 * S.length && (T = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ g("div", { "data-actualSize": x, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: M(w),
        style: v,
        ..._,
        children: [
          C,
          y
        ]
      }
    );
  }
};
class dc extends J {
}
dc.NAME = "Avatar";
dc.Component = uc;
class fc extends J {
}
fc.NAME = "BtnGroup";
fc.Component = sc;
class To extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n } = this.props, s = m(t.target);
    if (s.closest('[data-dismiss="pick"]').length) {
      n(!1);
      return;
    }
    s.closest("a,input").length || n(!0);
  }
  _getClass() {
    const { state: t, className: n } = this.props, { open: s, disabled: i } = t;
    return M(
      "pick",
      n,
      s && "is-open focus",
      i && "disabled"
    );
  }
  _renderTrigger() {
    const { children: t, state: n } = this.props;
    return t ?? n.value;
  }
  _renderValue() {
    const { name: t, state: n } = this.props;
    return t ? /* @__PURE__ */ g("input", { type: "hidden", className: "pick-value", name: t, value: n.value }) : null;
  }
  render(t) {
    const { id: n, style: s } = t;
    return /* @__PURE__ */ g(
      "div",
      {
        id: `pick-${n}`,
        className: this._getClass(),
        style: s,
        tabIndex: -1,
        onClick: this._handleClick,
        children: [
          this._renderTrigger(),
          this._renderValue()
        ]
      }
    );
  }
}
var Me, xt, oe;
class pc extends V {
  constructor(n) {
    super(n);
    L(this, Me, void 0);
    L(this, xt, void 0);
    L(this, oe, void 0);
    this.state = { show: !1 }, B(this, Me, nt()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = k(this, Me)) == null ? void 0 : n.current;
  }
  get container() {
    return k(this, oe);
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
  _getContainer(n) {
    if (!k(this, oe)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), B(this, oe, i[0]);
    }
    return k(this, oe);
  }
  _render(n) {
    const {
      id: s,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l,
      children: h
    } = n, c = m.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return /* @__PURE__ */ g(
      "div",
      {
        id: `pick-pop-${s}`,
        className: this._getClass(n),
        style: c,
        ref: k(this, Me),
        onClick: this._handleClick,
        children: [
          this._renderPop(n),
          h
        ]
      }
    );
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      k(this, xt) && (k(this, xt).call(this), B(this, xt, void 0));
      return;
    }
    k(this, xt) || B(this, xt, xo(s, n, () => {
      const { placement: o, width: a } = i;
      zi(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Oi() : null, _r(), _o(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        m(n).css({
          left: l,
          top: h,
          width: a === "100%" ? m(s).outerWidth() : void 0
        });
      }), a === "100%" && m(n).css({ width: m(n).width() });
    }));
  }
  componentDidMount() {
    this.layout(), m(document).on("click", this._handleDocClick);
  }
  componentWillUnmount() {
    m(document).off("click", this._handleDocClick);
    const n = k(this, xt);
    n && (n(), B(this, xt, void 0)), B(this, oe, void 0), B(this, Me, void 0);
  }
  render(n) {
    return Fu(this._render(n), this._getContainer(n));
  }
}
Me = new WeakMap(), xt = new WeakMap(), oe = new WeakMap();
var gc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, _n = (e, t, n) => (gc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Da = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, qe = (e, t, n, s) => (gc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ps, dt;
let ge = class extends V {
  constructor(t) {
    super(t), Da(this, Ps, void 0), Da(this, dt, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      _n(this, dt) && (clearTimeout(_n(this, dt)), qe(this, dt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Js(200, (a) => {
        qe(this, dt, a);
      }), qe(this, dt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Js(50, (a) => {
        qe(this, dt, a);
      }), qe(this, dt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, qe(this, Ps, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return _n(this, Ps);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
      className: t.className,
      style: t.style,
      name: t.name,
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
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), _n(this, dt) && clearTimeout(_n(this, dt));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ g(o, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ g(mn, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ps = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakMap();
ge.Trigger = To;
ge.Pop = pc;
ge.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300
};
let mc = class extends ge {
  _handleChange(t, n) {
    super._handleChange(t, n);
    const { syncBackground: s, syncBorder: i, syncColor: r, syncText: o } = this.props, a = t || "";
    s && m(s).css("backgroundColor", a), i && m(i).css("borderColor", a), r && m(r).css("color", a), o && m(o).text(a);
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ g(Ct, { icon: s }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = m.extend({
      color: n.value
    }, s.style), s;
  }
  _renderPop(t, n) {
    const { colors: s = [], closeBtn: i, heading: r } = t, { value: o } = n;
    let a;
    return r && (a = /* @__PURE__ */ g("div", { className: "color-picker-heading", children: [
      r,
      i ? /* @__PURE__ */ g("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ g("div", { className: "color-picker-row", children: [
        s.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(Ct, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(Ct, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
mc.defaultProps = {
  ...ge.defaultProps,
  className: "color-picker rounded btn square size-sm ghost",
  popClass: "color-picker-pop menu-popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class yc extends J {
}
yc.NAME = "ColorPicker";
yc.Component = mc;
var Ro = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Se = (e, t, n) => (Ro(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bn = (e, t, n, s) => (Ro(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), rr = (e, t, n) => (Ro(e, t, "access private method"), n), Je, Ws, xe, Sr, Mn, Ds;
const or = "show", Ia = "in", Sd = '[data-dismiss="modal"]', Tn = class extends lt {
  constructor() {
    super(...arguments), vn(this, Mn), vn(this, Je, 0), vn(this, Ws, void 0), vn(this, xe, void 0), vn(this, Sr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Sd) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(or);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Se(this, Sr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!Se(this, xe) || Se(this, xe)[0] !== n || Se(this, xe)[1] !== s) && (Bn(this, xe, [n, s]), this.layout());
        });
        t.observe(e), Bn(this, Ws, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = Se(this, Ws)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${Tn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, or, i).css({
      zIndex: `${Tn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), rr(this, Mn, Ds).call(this, () => {
      m(t).addClass(Ia), rr(this, Mn, Ds).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(Ia), this.emit("hide"), rr(this, Mn, Ds).call(this, () => {
      m(this.modalElement).removeClass(or), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const s = m(n);
    t = t ?? this.options.size, s.removeAttr("data-size");
    const i = { width: "", height: "" };
    typeof t == "object" ? (i.width = t.width, i.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? s.attr("data-size", t) : t && (i.width = t), s.css(i), e = e ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    Bn(this, xe, [r, o]), typeof e == "function" && (e = e({ width: r, height: o }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), s.css(a), m(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = Tn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Tn.query(e)) == null || t.show();
  }
};
let Qt = Tn;
Je = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakSet();
Ds = function(e, t) {
  Se(this, Je) && (clearTimeout(Se(this, Je)), Bn(this, Je, 0)), e && (this.options.animation ? Bn(this, Je, window.setTimeout(e, t ?? this.options.transTime)) : e());
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
m(window).on("resize.modal.zui", () => {
  Qt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  Qt.hide(t == null ? void 0 : t.target);
});
class wc extends V {
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
      title: n
    } = this.props;
    return K(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : K(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(wt, { ...t }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? K(t) ? t : /* @__PURE__ */ g("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return K(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(wt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ g("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ g("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
wc.defaultProps = { closeBtn: !0 };
var cn, hn, un;
class Ed extends V {
  constructor() {
    super(...arguments);
    L(this, cn, void 0);
    L(this, hn, void 0);
    L(this, un, void 0);
    B(this, cn, nt()), this.state = {}, B(this, un, () => {
      var i, r;
      const n = (r = (i = k(this, cn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = k(this, hn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, hn, s);
    });
  }
  componentDidMount() {
    k(this, un).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = k(this, hn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: k(this, cn),
        onLoad: k(this, un)
      }
    );
  }
}
cn = new WeakMap(), hn = new WeakMap(), un = new WeakMap();
var No = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ut = (e, t, n) => (No(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (No(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Is = (e, t, n) => (No(e, t, "access private method"), n), At, Rn, Lt, ai, Ao, Os, Er;
function Md(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Td(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
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
    body: n === "html" ? /* @__PURE__ */ g(mo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Rd(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(Ed, { url: n })
  };
}
const Nd = {
  custom: Md,
  ajax: Td,
  iframe: Rd
}, ar = "loading", Nn = class extends Qt {
  constructor() {
    super(...arguments), bn(this, ai), bn(this, Os), bn(this, At, void 0), bn(this, Rn, void 0), bn(this, Lt, void 0);
  }
  get id() {
    return ut(this, Rn);
  }
  get loading() {
    var e;
    return (e = ut(this, At)) == null ? void 0 : e.classList.contains(ar);
  }
  get shown() {
    var e;
    return !!((e = ut(this, At)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = ut(this, At);
    if (!e) {
      const { options: t } = this;
      let n = ut(this, Rn);
      n || (n = t.id || `modal-${m.guid++}`, Ge(this, Rn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ge(this, At, e);
    }
    return e;
  }
  get $emitter() {
    const e = ut(this, At);
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
    const e = ut(this, At);
    e && (m(e).removeData(this.constructor.KEY).remove(), Ge(this, At, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ut(this, Lt) && clearTimeout(ut(this, Lt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Nd[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(ar), i && Ge(this, Lt, window.setTimeout(() => {
      Ge(this, Lt, 0), Is(this, Os, Er).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Is(this, Os, Er).call(this, this.options.failedTip) : a && typeof a == "object" && await Is(this, ai, Ao).call(this, a), ut(this, Lt) && (clearTimeout(ut(this, Lt)), Ge(this, Lt, 0)), this.layout(), await Js(100), n.removeClass(ar), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = Nn.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e;
    let c = typeof n == "object" && n.html ? /* @__PURE__ */ g("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ g("div", { children: n });
    s ? c = /* @__PURE__ */ g("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ g("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ g("div", { className: "modal-body", children: c });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Yt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let d;
    const f = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: y }) => {
        const _ = Nn.query(y.target, l);
        d = p.key, (o == null ? void 0 : o(p, _)) !== !1 && _ && _.hide();
      }
    } : void 0;
    return await Nn.open({
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
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await Nn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let _c = Nn;
At = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakSet();
Ao = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return m(this.modalElement).html(e[0]).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Kn(
      /* @__PURE__ */ g(wc, { ...e }),
      this.modalElement
    );
  });
};
Os = /* @__PURE__ */ new WeakSet();
Er = function(e) {
  if (e)
    return Is(this, ai, Ao).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
_c.DEFAULT = {
  ...Qt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var Lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mr = (e, t, n) => (Lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ks = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oa = (e, t, n, s) => (Lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Tr = (e, t, n) => (Lo(e, t, "access private method"), n), Ne, Po, vc, Rr, bc, Wo, xc;
const Ad = '[data-toggle="modal"]';
class $c extends lt {
  constructor() {
    super(...arguments), ks(this, Po), ks(this, Rr), ks(this, Wo), ks(this, Ne, void 0);
  }
  get modal() {
    return Mr(this, Ne);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = Tr(this, Rr, bc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = Mr(this, Ne)) == null ? void 0 : t.hide();
  }
}
Ne = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
vc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
Rr = /* @__PURE__ */ new WeakSet();
bc = function() {
  const e = Tr(this, Po, vc).call(this);
  let t = Mr(this, Ne);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = Tr(this, Wo, xc).call(this);
    if (!n)
      return;
    t = Qt.ensure(n, e);
  } else
    t = _c.ensure(this.container, e);
  return Oa(this, Ne, t), t.on("destroyed", () => {
    Oa(this, Ne, void 0);
  }), t;
};
Wo = /* @__PURE__ */ new WeakSet();
xc = function() {
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
$c.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Ad);
  if (n) {
    const i = $c.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let kc = class extends ze {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
kc.NAME = "nav";
class Cc extends J {
}
Cc.NAME = "Nav";
Cc.Component = kc;
function Jn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Ld({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Jn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : et(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ g(Kt, { type: n, ...a });
}
const It = 24 * 60 * 60 * 1e3, rt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ds = (e, t = /* @__PURE__ */ new Date()) => (e = rt(e), t = rt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Nr = (e, t = /* @__PURE__ */ new Date()) => rt(e).getFullYear() === rt(t).getFullYear(), Pd = (e, t = /* @__PURE__ */ new Date()) => (e = rt(e), t = rt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), tp = (e, t = /* @__PURE__ */ new Date()) => {
  e = rt(e), t = rt(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, ep = (e, t) => ds(rt(t), e), np = (e, t) => ds(rt(t).getTime() - It, e), sp = (e, t) => ds(rt(t).getTime() + It, e), ip = (e, t) => ds(rt(t).getTime() - 2 * It, e), Ar = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = rt(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Nr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, rp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Ar(e, Nr(e) ? s.month : s.full);
  if (ds(e, t))
    return i;
  const r = Ar(t, Nr(e, t) ? Pd(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, op = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - It * 7;
    case "oneMonth":
      return t - It * 31;
    case "threeMonth":
      return t - It * 31 * 3;
    case "halfYear":
      return t - It * 183;
    case "oneYear":
      return t - It * 365;
    case "twoYear":
      return t - 2 * (It * 365);
    default:
      return 0;
  }
}, Ha = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ha(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Ha(e, "day", n, s);
    case "week":
      e *= 7;
      break;
    case "day":
      e *= 24;
      break;
    case "hour":
      e *= 60;
      break;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return n ? s + e : s - e;
};
function Wd({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Jn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ g(Hl, { ...o, children: [
    r,
    s
  ] });
}
function Dd({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(Kt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let y = d; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const _ = Jn(i, y);
      o && (l.url = typeof o == "function" ? o(_) : et(o, _)), p.push(/* @__PURE__ */ g(Kt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function Id({
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
      url: typeof n == "function" ? n(c) : et(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(nc, { type: "dropdown", dropdown: i, ...o });
}
function Od({
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
  let u;
  const d = (y) => {
    var _;
    u = Number((_ = y.target) == null ? void 0 : _.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (y) => {
    if (!(y != null && y.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const _ = Jn(i, u);
    a && !a({ info: _, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(_) : et(l, _));
  }, p = Jn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ g("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ g(Kt, { type: s, ...c, onClick: f })
  ] });
}
let Fi = class extends wt {
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
Fi.NAME = "pager";
Fi.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Fi.ItemComponents = {
  ...wt.ItemComponents,
  link: Ld,
  info: Wd,
  nav: Dd,
  "size-menu": Id,
  goto: Od
};
class Sc extends J {
}
Sc.NAME = "Pager";
Sc.Component = Fi;
class Ec extends J {
}
Ec.NAME = "Pick";
Ec.Component = ge;
var dn, ns, ss, wi;
class Mc extends V {
  constructor(n) {
    super(n);
    L(this, dn, nt());
    L(this, ns, nt());
    L(this, ss, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    L(this, wi, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = k(this, dn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = k(this, ns), { current: i } = k(this, dn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: k(this, ns), children: o }) : a ? l = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: k(this, wi), children: /* @__PURE__ */ g("span", { className: "close" }) }) : l = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: k(this, ss),
          onInput: k(this, ss),
          ref: k(this, dn)
        }
      ),
      l
    ] });
  }
}
dn = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), wi = new WeakMap();
var fn, is, rs, os;
class Hd extends To {
  constructor() {
    super(...arguments);
    L(this, fn, void 0);
    L(this, is, void 0);
    L(this, rs, void 0);
    L(this, os, void 0);
    B(this, fn, nt()), B(this, is, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), B(this, rs, (n) => {
      this.props.changeState({ search: n });
    }), B(this, os, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ g("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: k(this, is), "data-value": n.value, children: /* @__PURE__ */ g("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = k(this, fn).current) == null || s.focus();
  }
  _getClass() {
    return M(
      super._getClass(),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch() {
    const { state: { search: n }, searchHint: s } = this.props;
    return /* @__PURE__ */ g(
      Mc,
      {
        inline: !0,
        ref: k(this, fn),
        defaultSearch: n,
        onSearch: k(this, rs),
        onClear: k(this, os),
        placeholder: s
      }
    );
  }
  _renderTrigger() {
    const { state: { selections: n = [], open: s }, search: i, placeholder: r, children: o } = this.props, a = s && i;
    return !a && !n.length ? /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
        n.map(this._renderSelection),
        a ? this._renderSearch() : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ g("span", { class: "caret" }, "caret")
    ];
  }
}
fn = new WeakMap(), is = new WeakMap(), rs = new WeakMap(), os = new WeakMap();
var as, _i, vi, bi, xi, Tc;
class Bd extends To {
  constructor() {
    super(...arguments);
    L(this, xi);
    L(this, as, nt());
    L(this, _i, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    L(this, vi, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, bi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = k(this, as).current) == null || s.focus();
  }
  _getClass() {
    return M(
      super._getClass(),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch() {
    const { state: { search: n } } = this.props;
    return /* @__PURE__ */ g(
      Mc,
      {
        ref: k(this, as),
        defaultSearch: n,
        onSearch: k(this, vi),
        onClear: k(this, bi),
        placeholder: ye(this, xi, Tc).call(this)
      }
    );
  }
  _renderTrigger() {
    const { children: n, state: { selections: s = [], open: i }, placeholder: r, search: o } = this.props, [a] = s, l = i && o;
    let h;
    l ? h = this._renderSearch() : a ? h = /* @__PURE__ */ g("span", { className: "picker-single-selection", children: a.text ?? a.value }, "main") : h = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: r }, "main");
    const c = a && !l ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: k(this, _i), children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      n,
      c,
      l ? null : /* @__PURE__ */ g("span", { className: "caret" }, "caret")
    ];
  }
}
as = new WeakMap(), _i = new WeakMap(), vi = new WeakMap(), bi = new WeakMap(), xi = new WeakSet(), Tc = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const zd = (e, t) => e.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ g("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var $i, ki, Rc, Ci, Nc, Si;
class Fd extends pc {
  constructor() {
    super(...arguments);
    L(this, ki);
    L(this, Ci);
    L(this, $i, nt());
    L(this, Si, ({ item: n }) => {
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
      const s = ye(this, ki, Rc).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
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
    return /* @__PURE__ */ g(
      Ii,
      {
        ref: k(this, $i),
        className: "picker-menu-list",
        items: ye(this, Ci, Nc).call(this),
        onClickItem: k(this, Si),
        ...s
      }
    );
  }
}
$i = new WeakMap(), ki = new WeakSet(), Rc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Ci = new WeakSet(), Nc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, u) => {
    const {
      value: d = "",
      keys: f,
      text: p,
      className: y,
      ..._
    } = u;
    d === i && (a = !0);
    const w = p ?? d;
    return c.push({
      key: d,
      active: o.has(d),
      text: typeof w == "string" ? zd(l, [w]) : /* @__PURE__ */ g(Wi, { content: w }),
      className: M(y, { hover: d === i }),
      "data-value": d,
      ..._
    }), c;
  }, []);
  return !a && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, Si = new WeakMap();
var Do = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, te = (e, t, n) => (Do(e, t, "read from private field"), n ? n.call(e) : t.get(e)), je = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, we = (e, t, n, s) => (Do(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), pt = (e, t, n) => (Do(e, t, "access private method"), n), An, Pt, $e, Ze, zn, Io, Ac, ne, ke;
let Oo = class extends ge {
  constructor(t) {
    super(t), je(this, Ze), je(this, Io), je(this, ne), je(this, An, void 0), je(this, Pt, void 0), je(this, $e, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? pt(this, ne, ke).call(this, n) : pt(this, ne, ke).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), pt(this, ne, ke).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(pt(this, Ze, zn).call(this, n)), r = s.filter((o) => !i.has(o));
      pt(this, ne, ke).call(this, r);
    }, this.clear = () => {
      pt(this, ne, ke).call(this);
    }, this.select = (n) => {
      const s = pt(this, Ze, zn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return pt(this, ne, ke).call(this, i);
    }, this.isSelected = (n) => this.valueList.includes(n), m.extend(this.state, {
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
    return pt(this, Ze, zn).call(this, this.state.value);
  }
  async load() {
    let t = te(this, Pt);
    t && t.abort(), t = new AbortController(), we(this, Pt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await Js(s || 500), te(this, Pt) !== t || (r = await n(i, { signal: t.signal }), te(this, Pt) !== t))
        return r;
    } else if (i.length) {
      const o = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o.length ? r = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: u
        } = l;
        return o.every((d) => h.toLowerCase().includes(d) || c.toLowerCase().includes(d) || typeof u == "string" && u.toLowerCase().includes(d)) && a.push(l), a;
      }, []) : r = n;
    } else
      r = n;
    return we(this, Pt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = te(this, An) || {}, r = {};
    if (we(this, An, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    te(this, $e) && clearTimeout(te(this, $e)), we(this, $e, window.setTimeout(() => {
      we(this, $e, 0), this.update();
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
    (t = te(this, Pt)) == null || t.abort(), we(this, Pt, void 0), we(this, An, void 0), clearTimeout(te(this, $e)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Hd : Bd);
  }
};
An = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakSet();
zn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
Io = /* @__PURE__ */ new WeakSet();
Ac = function(e) {
  const t = pt(this, Ze, zn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
ne = /* @__PURE__ */ new WeakSet();
ke = function(e) {
  const t = e === void 0 ? e : pt(this, Io, Ac).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
Oo.defaultProps = {
  ...ge.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
Oo.Pop = Fd;
class Lc extends J {
}
Lc.NAME = "Picker";
Lc.Component = Oo;
class Pc extends lt {
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
    return i && s.middleware.push(Oi()), r && s.middleware.push(r === !0 ? _r() : _r(r)), o && s.middleware.push(wr({ element: this.$arrow[0] })), a && s.middleware.push(_o(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = xo(t, n, () => {
      zi(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !wr || !o.arrow)
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
Pc.NAME = "Popovers";
Pc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var Ho = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vt = (e, t, n) => (Ho(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _e = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Hs = (e, t, n, s) => (Ho(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ba = (e, t, n) => (Ho(e, t, "access private method"), n), Bs, zs, Ae, Lr, Fs, Us, Vs, Pr;
let Wc = class extends V {
  constructor(t) {
    super(t), _e(this, Vs), _e(this, Bs, void 0), _e(this, zs, nt()), _e(this, Ae, 0), _e(this, Lr, (n) => {
      this.setState({ value: "" }, () => {
        var s, i;
        (i = (s = this.props).onClear) == null || i.call(s, n), this.focus();
      });
    }), _e(this, Fs, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (Ba(this, Vs, Pr).call(this), Hs(this, Ae, window.setTimeout(() => {
          r(i, n), Hs(this, Ae, 0);
        }, this.props.delay || 0)));
      });
    }), _e(this, Us, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Hs(this, Bs, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return vt(this, Bs);
  }
  get input() {
    return vt(this, zs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Ba(this, Vs, Pr).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: u, searchIcon: d, clearIcon: f } = t, { focus: p, value: y } = n, { id: _ } = this, w = typeof y != "string" || !y.trim().length;
    let v, x, C;
    return d && (C = d === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(Ct, { icon: d })), !u && d && (v = /* @__PURE__ */ g("label", { for: _, class: "input-control-prefix", children: C }, "prefix")), f && !w ? x = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: vt(this, Lr),
        children: f === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(Ct, { icon: f })
      }
    ) : u && d && (x = C), x && (x = /* @__PURE__ */ g("label", { for: _, class: "input-control-suffix", children: x }, "suffix")), /* @__PURE__ */ g("div", { class: M("search-box input-control", r, { focus: p, empty: w, "has-prefix-icon": v, "has-suffix-icon": x }), style: o, children: [
      v,
      /* @__PURE__ */ g(
        "input",
        {
          ref: vt(this, zs),
          id: _,
          type: "text",
          class: M("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: vt(this, Fs),
          onChange: vt(this, Fs),
          onFocus: vt(this, Us),
          onBlur: vt(this, Us)
        }
      ),
      x
    ] });
  }
};
Bs = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
Lr = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakSet();
Pr = function() {
  vt(this, Ae) && clearTimeout(vt(this, Ae)), Hs(this, Ae, 0);
};
Wc.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Dc extends J {
}
Dc.NAME = "SearchBox";
Dc.Component = Wc;
class Ic extends J {
}
Ic.NAME = "Toolbar";
Ic.Component = wt;
function fs(e) {
  return e.split("-")[1];
}
function Bo(e) {
  return e === "y" ? "height" : "width";
}
function sn(e) {
  return e.split("-")[0];
}
function Ui(e) {
  return ["top", "bottom"].includes(sn(e)) ? "x" : "y";
}
function za(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Ui(t), l = Bo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (sn(t)) {
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
  switch (fs(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Ud = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = za(h, s, l), d = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: _, fn: w } = a[y], { x: v, y: x, data: C, reset: S } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = v ?? c, u = x ?? u, f = { ...f, [_]: { ...f[_], ...C } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: u } = za(h, d, l)), y = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function Oc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function li(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Vd(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = t, p = Oc(f), y = a[d ? u === "floating" ? "reference" : "floating" : u], _ = li(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, C = li(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: v, strategy: l }) : w);
  return { top: (_.top - C.top + p.top) / x.y, bottom: (C.bottom - _.bottom + p.bottom) / x.y, left: (_.left - C.left + p.left) / x.x, right: (C.right - _.right + p.right) / x.x };
}
const qd = Math.min, Gd = Math.max;
function jd(e, t, n) {
  return Gd(e, qd(t, n));
}
const Yd = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Oc(s), c = { x: i, y: r }, u = Ui(o), d = Bo(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", _ = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let x = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[d]);
  const C = _ / 2 - w / 2, S = h[p], T = x - f[d] - h[y], N = x / 2 - f[d] / 2 + C, A = jd(S, N, T), O = fs(o) != null && N != A && a.reference[d] / 2 - (N < S ? h[p] : h[y]) - f[d] / 2 < 0;
  return { [u]: c[u] - (O ? N < S ? S - N : T - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), Kd = ["top", "right", "bottom", "left"];
Kd.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Xd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ci(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Xd[t]);
}
function Jd(e, t, n) {
  n === void 0 && (n = !1);
  const s = fs(e), i = Ui(e), r = Bo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ci(o)), { main: o, cross: ci(o) };
}
const Zd = { start: "end", end: "start" };
function lr(e) {
  return e.replace(/start|end/g, (t) => Zd[t]);
}
const Qd = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = e, _ = sn(s), w = sn(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = u || (w || !p ? [ci(o)] : function(b) {
      const R = ci(b);
      return [lr(b), R, lr(R)];
    }(o));
    u || f === "none" || x.push(...function(b, R, D, P) {
      const I = fs(b);
      let W = function(F, ct, Tt) {
        const gs = ["left", "right"], yn = ["right", "left"], ms = ["top", "bottom"], Xi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Tt ? ct ? yn : gs : ct ? gs : yn;
          case "left":
          case "right":
            return ct ? ms : Xi;
          default:
            return [];
        }
      }(sn(b), D === "start", P);
      return I && (W = W.map((F) => F + "-" + I), R && (W = W.concat(W.map(lr)))), W;
    }(o, p, f, v));
    const C = [o, ...x], S = await Vd(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[_]), c) {
      const { main: b, cross: R } = Jd(s, r, v);
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
          var O;
          const P = (O = N.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, F) => W + F, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : O[0].placement;
          P && (D = P);
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
}, tf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = sn(a), d = fs(a), f = Ui(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, y = c && f ? -1 : 1, _ = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: v, alignmentAxis: x } = typeof _ == "number" ? { mainAxis: _, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ..._ };
      return d && typeof x == "number" && (v = d === "end" ? -1 * x : x), f ? { x: v * y, y: w * p } : { x: w * p, y: v * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ot(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function St(e) {
  return ot(e).getComputedStyle(e);
}
function de(e) {
  return Bc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Cs;
function Hc() {
  if (Cs)
    return Cs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Cs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Cs) : navigator.userAgent;
}
function Xt(e) {
  return e instanceof ot(e).HTMLElement;
}
function mt(e) {
  return e instanceof ot(e).Element;
}
function Bc(e) {
  return e instanceof ot(e).Node;
}
function Fa(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ot(e).ShadowRoot || e instanceof ShadowRoot;
}
function Vi(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function ef(e) {
  return ["table", "td", "th"].includes(de(e));
}
function Wr(e) {
  const t = /firefox/i.test(Hc()), n = St(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function zc() {
  return !/^((?!chrome|android).)*safari/i.test(Hc());
}
function zo(e) {
  return ["html", "body", "#document"].includes(de(e));
}
const Ua = Math.min, Fn = Math.max, hi = Math.round;
function Fc(e) {
  const t = St(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = hi(n) !== i || hi(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Uc(e) {
  return mt(e) ? e : e.contextElement;
}
const Vc = { x: 1, y: 1 };
function rn(e) {
  const t = Uc(e);
  if (!Xt(t))
    return Vc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Fc(t);
  let o = (r ? hi(n.width) : n.width) / s, a = (r ? hi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Ie(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Uc(e);
  let l = Vc;
  t && (s ? mt(s) && (l = rn(s)) : l = rn(e));
  const h = a ? ot(a) : window, c = !zc() && n;
  let u = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const y = ot(a), _ = s && mt(s) ? ot(s) : s;
    let w = y.frameElement;
    for (; w && s && _ !== y; ) {
      const v = rn(w), x = w.getBoundingClientRect(), C = getComputedStyle(w);
      x.x += (w.clientLeft + parseFloat(C.paddingLeft)) * v.x, x.y += (w.clientTop + parseFloat(C.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, p *= v.y, u += x.x, d += x.y, w = ot(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function he(e) {
  return ((Bc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function qi(e) {
  return mt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function qc(e) {
  return Ie(he(e)).left + qi(e).scrollLeft;
}
function nf(e, t, n) {
  const s = Xt(t), i = he(t), r = Ie(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((de(t) !== "body" || Vi(i)) && (o = qi(t)), Xt(t)) {
      const l = Ie(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = qc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Zn(e) {
  if (de(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Fa(e) ? e.host : null) || he(e);
  return Fa(t) ? t.host : t;
}
function Va(e) {
  return Xt(e) && St(e).position !== "fixed" ? e.offsetParent : null;
}
function qa(e) {
  const t = ot(e);
  let n = Va(e);
  for (; n && ef(n) && St(n).position === "static"; )
    n = Va(n);
  return n && (de(n) === "html" || de(n) === "body" && St(n).position === "static" && !Wr(n)) ? t : n || function(s) {
    let i = Zn(s);
    for (; Xt(i) && !zo(i); ) {
      if (Wr(i))
        return i;
      i = Zn(i);
    }
    return null;
  }(e) || t;
}
function Gc(e) {
  const t = Zn(e);
  return zo(t) ? e.ownerDocument.body : Xt(t) && Vi(t) ? t : Gc(t);
}
function Un(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Gc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ot(s);
  return i ? t.concat(r, r.visualViewport || [], Vi(s) ? s : []) : t.concat(s, Un(s));
}
function Ga(e, t, n) {
  return t === "viewport" ? li(function(s, i) {
    const r = ot(s), o = he(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = zc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : mt(t) ? function(s, i) {
    const r = Ie(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Xt(s) ? rn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = o * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(t, n) : li(function(s) {
    var i;
    const r = he(s), o = qi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Fn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Fn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + qc(s);
    const u = -o.scrollTop;
    return St(a || r).direction === "rtl" && (c += Fn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(he(e)));
}
const sf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Un(h).filter((_) => mt(_) && de(_) !== "body"), f = null;
    const p = St(h).position === "fixed";
    let y = p ? Zn(h) : h;
    for (; mt(y) && !zo(y); ) {
      const _ = St(y), w = Wr(y);
      (p ? w || f : w || _.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = _ : d = d.filter((v) => v !== y), y = Zn(y);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const u = Ga(t, c, i);
    return h.top = Fn(u.top, h.top), h.right = Ua(u.right, h.right), h.bottom = Ua(u.bottom, h.bottom), h.left = Fn(u.left, h.left), h;
  }, Ga(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Xt(n), r = he(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((de(n) !== "body" || Vi(r)) && (o = qi(n)), Xt(n))) {
    const h = Ie(n);
    a = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: mt, getDimensions: function(e) {
  return Fc(e);
}, getOffsetParent: qa, getDocumentElement: he, getScale: rn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || qa, r = this.getDimensions;
  return { reference: nf(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => St(e).direction === "rtl" };
function rf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...mt(e) ? Un(e) : e.contextElement ? Un(e.contextElement) : [], ...Un(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (o) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), mt(e) && !a && u.observe(e), mt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let d = a ? Ie(e) : null;
  return a && function f() {
    const p = Ie(e);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const of = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: sf, ...n }, r = { ...i.platform, _c: s };
  return Ud(e, t, { ...i, platform: r });
};
var Fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (Fo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), kt = (e, t, n) => (Fo(e, t, "access private method"), n), Vn, qn, Ln, Qe, st, Dr, ui, Gi, Uo, Vo, jc, Ir, Yc, qo, Kc, Go, Xc, jo, Jc, Or, Zc, Yo, Qc, Gn, Hr, th;
const tn = class extends lt {
  constructor() {
    super(...arguments), j(this, Gi), j(this, Vo), j(this, Ir), j(this, qo), j(this, Go), j(this, jo), j(this, Or), j(this, Yo), j(this, Hr), j(this, Vn, !1), j(this, qn, void 0), j(this, Ln, 0), j(this, Qe, void 0), j(this, st, void 0), j(this, Dr, void 0), j(this, ui, void 0), this.hideLater = () => {
      U(this, Gn).call(this), Oe(this, Ln, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Gn, () => {
      clearTimeout(U(this, Ln)), Oe(this, Ln, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Qe)) == null ? void 0 : e.classList.contains(tn.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Qe) || kt(this, Ir, Yc).call(this);
  }
  get trigger() {
    return U(this, Dr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${tn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Vn) && this.isHover && kt(this, Hr, th).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(tn.CLASS_SHOW), kt(this, Or, Zc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ui)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Qe)) == null || t.classList.remove(tn.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, Vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Gn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let Et = tn;
Vn = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Gi = /* @__PURE__ */ new WeakSet();
Uo = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
Vo = /* @__PURE__ */ new WeakSet();
jc = function() {
  const e = kt(this, Gi, Uo).call(this);
  return Oe(this, st, document.createElement("div")), U(this, st).style.position = this.options.strategy, U(this, st).style.width = `${e}px`, U(this, st).style.height = `${e}px`, U(this, st).style.transform = "rotate(45deg)", U(this, st);
};
Ir = /* @__PURE__ */ new WeakSet();
Yc = function() {
  var n;
  const e = tn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(kt(this, Vo, jc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Oe(this, Qe, t), t;
};
qo = /* @__PURE__ */ new WeakSet();
Kc = function() {
  var i;
  const e = kt(this, Gi, Uo).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [tf(e), Qd()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, st) && ((i = s.middleware) == null || i.push(Yd({ element: U(this, st) }))), s;
};
Go = /* @__PURE__ */ new WeakSet();
Xc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
jo = /* @__PURE__ */ new WeakSet();
Jc = function(e) {
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
Or = /* @__PURE__ */ new WeakSet();
Zc = function() {
  const e = kt(this, qo, Kc).call(this), t = kt(this, Yo, Qc).call(this);
  Oe(this, ui, rf(t, this.tooltip, () => {
    of(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = kt(this, Go, Xc).call(this, o);
      if (i.arrow && U(this, st)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, st).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, st).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...kt(this, jo, Jc).call(this, o)
        });
      }
    });
  }));
};
Yo = /* @__PURE__ */ new WeakSet();
Qc = function() {
  return U(this, qn) || Oe(this, qn, {
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
  }), U(this, qn);
};
Gn = /* @__PURE__ */ new WeakMap();
Hr = /* @__PURE__ */ new WeakSet();
th = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Gn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Oe(this, Vn, !0);
};
Et.NAME = "tooltip";
Et.TOOLTIP_CLASS = "tooltip";
Et.CLASS_SHOW = "show";
Et.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
Et.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Et.MENU_SELECTOR);
  if (n) {
    const i = Et.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    Et.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, Et.MENU_SELECTOR);
  if (!n)
    return;
  const s = Et.ensure(n);
  s.isHover && s.show();
});
function af({
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
  target: u,
  trailingIcon: d,
  hint: f,
  checked: p,
  actions: y,
  show: _,
  level: w = 0,
  items: v,
  ...x
}) {
  const C = Array.isArray(y) ? { items: y } : y;
  return C && (C.btnProps || (C.btnProps = { size: "sm" }), C.className = M("tree-actions not-nested-toggle", C.className)), /* @__PURE__ */ g(
    "div",
    {
      className: M("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...x,
      children: [
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${v ? " state" : ""}`, children: v ? /* @__PURE__ */ g("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(Ct, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        C ? /* @__PURE__ */ g(wt, { ...C }) : null,
        /* @__PURE__ */ g(Ct, { icon: d, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Ko = class extends Di {
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
Ko.ItemComponents = {
  item: af
};
Ko.NAME = "tree";
class eh extends J {
}
eh.NAME = "Tree";
eh.Component = Ko;
class lf extends lt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Eu(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, limitSize: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = m('<div class="file-list py-1"></div>');
    const l = i ? m(`<span class="upload-tip">${o}</span>`) : null;
    if (!a) {
      this.$label = m(`<label class="btn ${r}" for="${t}">${n}</label>`);
      const c = s === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(l), this.bindDragEvent();
    const h = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...h);
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
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (r) => {
      const o = r.target.files;
      if (!o)
        return;
      const a = [...o];
      this.addFileItem(a), i == null || i(a);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    this.options.multiple || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size;
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
  addFileItem(t) {
    const { multiple: n, limitCount: s, exceededSizeHint: i, exceededCountHint: r } = this.options;
    if (n) {
      for (let l of t) {
        if (s && this.fileMap.size >= s)
          return alert(i);
        if (this.currentBytes + l.size > this.limitBytes)
          return alert(r);
        l = this.renameDuplicatedFile(l);
        const h = this.createFileItem(l);
        this.itemMap.set(l.name, h), this.$list.append(h);
      }
      return;
    }
    const o = this.renameDuplicatedFile(t[0]);
    if (o.size > this.limitBytes)
      return;
    const a = this.createFileItem(o);
    this.itemMap.clear(), this.itemMap.set(o.name, a), this.$list.empty().append(a);
  }
  deleteFileItem(t) {
    var i, r, o;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    s && ((i = this.itemMap.get(s.name)) == null || i.remove(), this.itemMap.delete(s.name), (o = (r = this.options).onDelete) == null || o.call(r, s), this.fileMap.delete(s.name), this.currentBytes -= s.size, this.dataTransfer = new DataTransfer(), this.fileMap.forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
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
    return this.addFile(t), m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createfileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  createfileInfo(t) {
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${Su(t.size)}</span>`), i = m('<div class="file-info flex items-center gap-2"></div>').append(n).append(s), { renameBtn: r, renameText: o, deleteBtn: a, deleteText: l } = this.options;
    return r && i.append(
      m("<span />").addClass("btn size-sm rounded-sm text-primary canvas file-action file-rename").html(o).on("click", (h) => {
        i.addClass("hidden").closest(".file-item").find(".input-group.hidden").removeClass("hidden");
        const c = m(h.target).closest("li").find("input")[0];
        c.focus(), c.value.lastIndexOf(".") !== -1 && c.setSelectionRange(0, c.value.lastIndexOf("."));
      })
    ), a && i.append(
      m("<span />").html(l).addClass("btn size-sm rounded-sm text-primary canvas file-action file-delete").on("click", () => this.deleteFileItem(n.html()))
    ), i;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s, duplicatedHint: i } = this.options, r = m('<div class="input-group hidden"></div>'), o = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (c) => {
      if (c.key === "Enter") {
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(o.val());
      } else
        c.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = m("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(o.val());
    }), l = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = m('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(h);
  }
}
lf.DEFAULT = {
  uploadText: "上传文件",
  renameText: "重命名",
  deleteText: "删除",
  confirmText: "确定",
  cancelText: "取消",
  renameBtn: !0,
  deleteBtn: !0,
  showIcon: !0,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  draggable: !1
};
var ls, Ei, Mi, Ti;
class cf extends V {
  constructor(n) {
    super(n);
    L(this, ls, nt());
    L(this, Ei, (n) => {
      n.stopPropagation(), tt.show({
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
    L(this, Mi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, Ti, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    const { block: { content: s } } = n;
    this.state = {
      content: m.isPlainObject(s) && s.html ? /* @__PURE__ */ g("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ g("div", { class: "dashboard-block-body", children: n.block.content })
    };
  }
  get element() {
    return k(this, ls).current;
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
      fetch(et(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g(mo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
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
        onDragStart: k(this, Mi),
        onDragEnd: k(this, Ti),
        "data-id": c,
        ref: k(this, ls),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: k(this, Ei), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
ls = new WeakMap(), Ei = new WeakMap(), Mi = new WeakMap(), Ti = new WeakMap();
var nh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, qt = (e, t, n) => (nh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ft = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _t = (e, t, n) => (nh(e, t, "access private method"), n), Jt, Xo, sh, Jo, ih, Br, rh, Zo, oh, di, zr, ji, Fr, Qo, ah, Ur, Vr, Yi, ta;
const ea = class extends V {
  constructor() {
    super(...arguments), ft(this, Xo), ft(this, Jo), ft(this, Br), ft(this, Zo), ft(this, di), ft(this, ji), ft(this, Qo), ft(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, ft(this, Ur, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), ft(this, Vr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = _t(this, Br, rh).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ g(
        cf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: qt(this, Ur),
          onDragEnd: qt(this, Vr)
        },
        r.id
      );
    }) }) });
  }
};
let na = ea;
Jt = /* @__PURE__ */ new WeakMap();
Xo = /* @__PURE__ */ new WeakSet();
sh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Jo = /* @__PURE__ */ new WeakSet();
ih = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...u
    } = i, [d, f] = _t(this, Xo, sh).call(this, o);
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
Br = /* @__PURE__ */ new WeakSet();
rh = function() {
  qt(this, Jt).clear();
  let e = 0;
  const t = _t(this, Jo, ih).call(this);
  return t.forEach((n) => {
    _t(this, Zo, oh).call(this, n);
    const [, s, , i] = qt(this, Jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Zo = /* @__PURE__ */ new WeakSet();
oh = function(e) {
  const t = qt(this, Jt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = _t(this, Qo, ah).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    _t(this, ji, Fr).call(this, n, [s, i, r, o]);
};
di = /* @__PURE__ */ new WeakSet();
zr = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Jt).entries())
    if (s !== n && _t(t = ea, Yi, ta).call(t, i, e))
      return !1;
  return !0;
};
ji = /* @__PURE__ */ new WeakSet();
Fr = function(e, t) {
  var n;
  qt(this, Jt).set(e, t);
  for (const [s, i] of qt(this, Jt).entries())
    s !== e && _t(n = ea, Yi, ta).call(n, i, t) && (i[1] = t[1] + t[3], _t(this, ji, Fr).call(this, s, i));
};
Qo = /* @__PURE__ */ new WeakSet();
ah = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (_t(this, di, zr).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (_t(this, di, zr).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Ur = /* @__PURE__ */ new WeakMap();
Vr = /* @__PURE__ */ new WeakMap();
Yi = /* @__PURE__ */ new WeakSet();
ta = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
ft(na, Yi);
na.defaultProps = {
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
class lh extends J {
}
lh.NAME = "Dashboard";
lh.Component = na;
var ae, le;
class ja extends V {
  constructor(n) {
    super(n);
    L(this, ae, void 0);
    L(this, le, void 0);
    B(this, ae, 0), B(this, le, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (k(this, ae) && cancelAnimationFrame(k(this, ae)), B(this, ae, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, ae, 0);
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
    n && (B(this, le, typeof n == "string" ? document : n.current), k(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), k(this, le) && k(this, le).removeEventListener("wheel", this._handleWheel);
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
    }, y = {};
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(u, d) * (n - y.width) / u)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(u, d) * (n - y.height) / u)), /* @__PURE__ */ g(
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
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
ae = new WeakMap(), le = new WeakMap();
function ch({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...o
  }, { align: u, border: d } = e.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], y = ["dtable-cell-content", e.setting.cellClass], _ = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? _ ?? ""], v = i ? i(w, { row: s, col: e, value: _ }, q) : w, x = [], C = [], S = {}, T = {};
  let N = "div";
  v == null || v.forEach((b) => {
    if (typeof b == "object" && b && !K(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? x : C;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : T, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      C.push(b);
  });
  const A = N;
  return /* @__PURE__ */ g(
    "div",
    {
      className: M(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...S,
      children: [
        C.length > 0 && /* @__PURE__ */ g(A, { className: M(y), style: f, ...T, children: C }),
        x
      ]
    }
  );
}
function cr({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = ch, onRenderCell: l }) {
  return /* @__PURE__ */ g("div", { className: M("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ g(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function hh({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = ch,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ g(
    cr,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let f = null;
  r.list.length && (f = /* @__PURE__ */ g(
    cr,
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
  let p = null;
  o.list.length && (p = /* @__PURE__ */ g(
    cr,
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
  return /* @__PURE__ */ g(
    "div",
    {
      className: M("dtable-row", t),
      style: y,
      "data-id": e.id,
      ...u,
      children: [
        d,
        f,
        p
      ]
    }
  );
}
function hf({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(hh, { ...s }) });
}
function uf({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ g("div", { className: M("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ g(hh, { ...c }, h.id);
  }) });
}
const fi = /* @__PURE__ */ new Map(), pi = [];
function uh(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && fi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  fi.set(n, e), t != null && t.buildIn && !pi.includes(n) && pi.push(n);
}
function me(e, t) {
  uh(e, t);
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
function dh(e) {
  return fi.delete(e);
}
function df(e) {
  if (typeof e == "string") {
    const t = fi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function fh(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = df(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && fh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function ff(e = [], t = !0) {
  return t && pi.length && e.unshift(...pi), e != null && e.length ? fh([], e, /* @__PURE__ */ new Set()) : [];
}
function ph() {
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
function pf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ya(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function hr(e, t = !1) {
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
function gf(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (v) => (typeof v == "function" && (v = v.call(e)), v = Ya(v, 0), v < 1 && (v = Math.round(v * s)), v), c = {
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
  let y = !1;
  const _ = [], w = {};
  if (n.forEach((v) => {
    const { colTypes: x, onAddCol: C } = v;
    x && Object.entries(x).forEach(([S, T]) => {
      w[S] || (w[S] = []), w[S].push(T);
    }), C && _.push(C);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: x = "", name: C } = v, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...v,
      type: x
    }, T = {
      name: C,
      type: x,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[x];
    N && N.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, S) : I;
      W && Object.assign(S, W, v);
    });
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = S, D = Ya(S.width || i, i);
    T.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, T.width = pf(D < 1 ? Math.round(D * s) : D, b, R), _.forEach((I) => I.call(e, T)), f.push(T), p[T.name] = T;
    const P = A ? A === "left" ? u : d : c;
    P.list.push(T), P.totalWidth += T.width, P.width = P.totalWidth, T.flex && P.flexList.push(T), typeof S.order == "number" && (y = !0);
  }), y) {
    const v = (x, C) => (x.setting.order ?? 0) - (C.setting.order ?? 0);
    f.sort(v), u.list.sort(v), c.list.sort(v), d.list.sort(v);
  }
  return hr(u, !0), hr(d, !0), c.widthSetting = s - u.width - d.width, hr(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var sa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (sa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Dt = (e, t, n) => (sa(e, t, "access private method"), n), Ke, Pn, Le, zt, Ee, Z, Ot, Wt, Wn, qs, gi, se, Dn, In, qr, gh, Gr, mh, jr, yh, Yr, wh, Gs, Kr, ia, ra, Ki, mi, Xr, Jr, oa, _h, aa, vh, Zr, bh;
let la = class extends V {
  constructor(t) {
    super(t), H(this, qr), H(this, Gr), H(this, jr), H(this, Yr), H(this, Gs), H(this, oa), H(this, aa), H(this, Zr), this.ref = nt(), H(this, Ke, 0), H(this, Pn, void 0), H(this, Le, !1), H(this, zt, void 0), H(this, Ee, void 0), H(this, Z, []), H(this, Ot, void 0), H(this, Wt, /* @__PURE__ */ new Map()), H(this, Wn, {}), H(this, qs, void 0), H(this, gi, []), this.updateLayout = () => {
      E(this, Ke) && cancelAnimationFrame(E(this, Ke)), Y(this, Ke, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ke, 0);
      }));
    }, H(this, se, (n, s) => {
      s = s || n.type;
      const i = E(this, Wt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, Dn, (n) => {
      E(this, se).call(this, n, `window_${n.type}`);
    }), H(this, In, (n) => {
      E(this, se).call(this, n, `document_${n.type}`);
    }), H(this, ia, (n, s) => {
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
    }), H(this, ra, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), E(this, Z).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Ki, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, Z).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), H(this, mi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Xr, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, Z).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
            return;
          for (const p of E(this, Z))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of E(this, Z))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), H(this, Jr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Pn, t.id ?? `dtable-${hc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, Ee, Object.freeze(ff(t.plugins))), E(this, Ee).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, Wn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Ot)) == null ? void 0 : t.options) || E(this, zt) || ph();
  }
  get plugins() {
    return E(this, Z);
  }
  get layout() {
    return E(this, Ot);
  }
  get id() {
    return E(this, Pn);
  }
  get data() {
    return E(this, Wn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, zt, void 0);
  }
  componentDidMount() {
    if (E(this, Le) ? this.forceUpdate() : Dt(this, Gs, Kr).call(this), E(this, Z).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", E(this, Xr)), this.on("keydown", E(this, Jr)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, qs, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, Z).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    E(this, Le) ? Dt(this, Gs, Kr).call(this) : E(this, Z).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = E(this, qs)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of E(this, Wt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, Dn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, In)) : t.removeEventListener(s, E(this, se));
    E(this, Z).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, Ee).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Wn, {}), E(this, Wt).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, Wt).get(t);
    i ? i.push(n) : (E(this, Wt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, Dn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, In)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, se)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, Wt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, Wt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, Dn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, In)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, se)));
  }
  emitCustomEvent(t, n) {
    E(this, se).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: u, scrollTop: d } = t;
    if (c === "up" || c === "down")
      d = i + (c === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      d = 0;
    else if (c === "bottom")
      d = r - o;
    else if (c === "begin")
      u = 0;
    else if (c === "end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: y } = t;
      typeof p == "number" && (u = s + p), typeof y == "number" && (u = i + y);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (f.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - o)), d !== i && (f.scrollTop = d)), Object.keys(f).length ? (this.setState(f, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, f), n == null || n.call(this, !0);
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
    if (!E(this, zt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Ot, void 0);
    else if (s === "options") {
      if (Y(this, zt, void 0), !E(this, Ot))
        return;
      Y(this, Ot, void 0);
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
    return Yt(E(this, gi), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Dt(this, Zr, bh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], u = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), u.push(
      Dt(this, qr, gh).call(this, t),
      Dt(this, Gr, mh).call(this, t),
      Dt(this, jr, yh).call(this, t),
      Dt(this, Yr, wh).call(this, t)
    ), E(this, Z).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: E(this, Pn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Ke = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
Z = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
qr = /* @__PURE__ */ new WeakSet();
gh = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      hf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: E(this, Ki),
        onRenderRow: E(this, ra)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    yo,
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
Gr = /* @__PURE__ */ new WeakSet();
mh = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    uf,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, Ki),
      onRenderRow: E(this, ia)
    },
    "rows"
  );
};
jr = /* @__PURE__ */ new WeakSet();
yh = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    yo,
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
Yr = /* @__PURE__ */ new WeakSet();
wh = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: d } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      ja,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, mi),
        left: s,
        bottom: (d === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      ja,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, mi),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Gs = /* @__PURE__ */ new WeakSet();
Kr = function() {
  var e;
  Y(this, Le, !1), (e = this.options.afterRender) == null || e.call(this), E(this, Z).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
ia = /* @__PURE__ */ new WeakMap();
ra = /* @__PURE__ */ new WeakMap();
Ki = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Xr = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakMap();
oa = /* @__PURE__ */ new WeakSet();
_h = function() {
  if (E(this, zt))
    return !1;
  const t = { ...ph(), ...E(this, Ee).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, Z, E(this, Ee).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), Y(this, zt, t), Y(this, gi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
aa = /* @__PURE__ */ new WeakSet();
vh = function() {
  var A, O;
  const { plugins: e } = this;
  let t = E(this, zt);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var D;
    const R = (D = b.beforeLayout) == null ? void 0 : D.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Le, !0);
      return;
    }
  }
  const r = gf(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, D) => {
    var I, W;
    const P = { data: D ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (D || (P.lazy = !0), h.push(P), ((I = t.onAddRow) == null ? void 0 : I.call(this, P, R)) !== !1) {
      for (const F of e)
        if (((W = F.onAddRow) == null ? void 0 : W.call(this, P, R)) === !1)
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
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, u);
    b && (u = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    d[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = t, y = f ? t.headerHeight || l : 0, _ = p ? t.footerHeight || l : 0;
  let w = t.height, v = 0;
  const x = u.length * l, C = y + _ + x;
  if (typeof w == "function" && (w = w.call(this, C)), w === "auto")
    v = C;
  else if (typeof w == "object")
    v = Math.min(w.max, Math.max(w.min, C));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      v = b.clientHeight;
    else {
      v = 0, Y(this, Le, !0);
      return;
    }
  } else
    v = w;
  const S = v - y - _, T = {
    options: t,
    allRows: h,
    width: i,
    height: v,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: S,
    rowsHeightTotal: x,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: _,
    cols: r
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, T);
  N && Object.assign(T, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, T);
      R && Object.assign(T, R);
    }
  }), Y(this, Ot, T);
};
Zr = /* @__PURE__ */ new WeakSet();
bh = function() {
  (Dt(this, oa, _h).call(this) || !E(this, Ot)) && Dt(this, aa, vh).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((p) => {
    p.left = s, s += p.realWidth, p.visible = p.left + p.realWidth >= n && p.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, u = Math.min(o.length, Math.ceil(c / a)), d = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < u; p++) {
    const y = o[p];
    y.lazy && f && (y.data = f([y.id])[0], y.lazy = !1), d.push(y);
  }
  return e.visibleRows = d, e.scrollTop = l, e.scrollLeft = n, e;
};
la.addPlugin = uh;
la.removePlugin = dh;
function Ka(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const mf = {
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
      Ka(this, s);
    },
    mouseleave() {
      Ka(this, !1);
    }
  }
}, yf = me(mf, { buildIn: !0 });
function wf(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const u = r ? r.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !xh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function _f(e) {
  return this.state.checkedRows[e] ?? !1;
}
function xh() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function vf() {
  return Object.keys(this.state.checkedRows);
}
function bf(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Xa(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const xf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Xa
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
    toggleCheckRows: wf,
    isRowChecked: _f,
    isAllRowChecked: xh,
    getChecks: vf,
    toggleCheckable: bf
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Xa(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ g("div", { children: r.join(", ") })
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
      return { className: M(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, $f = me(xf);
var $h = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))($h || {});
function yi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = yi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? yi.call(this, t.parent).level + 1 : 0, t;
}
function kf(e) {
  return e !== void 0 ? yi.call(this, e) : this.data.nestedMap;
}
function Cf(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !kh.call(this)), t) {
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
function kh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Ch(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Ch(e, t, o.children, s + 1)));
  }
  return t;
}
function Sh(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Sh(e, r, n, s);
  }), i;
}
function Eh(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && Eh(e, r.parent, n, s, i);
}
const Sf = {
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
        const o = Sh(this, i, r, s);
        o != null && o.parent && Eh(this, o.parent, r, s, n);
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
    getNestedInfo: kf,
    toggleRow: Cf,
    isAllCollapsed: kh,
    getNestedRowInfo: yi
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
    ), Ch(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ g("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ g("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: M(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = M(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Ef = me(Sf);
function Mh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: et(i, t.row.data), ...s, ...r, ...a, children: n });
}
function ca(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function Th(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), Ar(n, e, s ?? n));
}
function Rh(e, t) {
  const { link: n } = t.col.setting, s = Mh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Nh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ca(n, t, e[0])), e;
}
function Ah(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Lh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Th(s, t, e[0], i), e;
}
function Qr(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : ca(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const Mf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Qr(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ g("svg", { width: n, height: n, children: [
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ g("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = Lh(e, t, n)), e = Ah(e, t), e = Nh(e, t), s ? e = Qr(e, t) : e = Rh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = et(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, Tf = me(Mf, { buildIn: !0 });
function ur(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], u = {
    size: "xs",
    className: M(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ g(uc, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, t) : d;
    e[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ g("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ g("span", { children: c })
    ] }));
  return e;
}
const Rf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ur
    },
    avatarBtn: {
      onRenderCell: ur
    },
    avatarName: {
      onRenderCell: ur
    }
  }
}, Nf = me(Rf, { buildIn: !0 }), Af = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ g("a", { href: et(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, Lf = me(Af, { buildIn: !0 }), dr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Pf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    dr(t.left.list), dr(t.center.list), dr(t.right.list);
  }
}, Wf = me(Pf), Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: $h,
  avatar: Nf,
  checkable: $f,
  colHover: yf,
  group: Wf,
  nested: Ef,
  renderDatetime: Th,
  renderDatetimeCell: Lh,
  renderFormat: ca,
  renderFormatCell: Nh,
  renderHtmlCell: Qr,
  renderLink: Mh,
  renderLinkCell: Rh,
  renderMapCell: Ah,
  rich: Tf,
  sortType: Lf
}, Symbol.toStringTag, { value: "Module" }));
class ps extends J {
}
ps.NAME = "DTable";
ps.Component = la;
ps.definePlugin = me;
ps.removePlugin = dh;
ps.plugins = Df;
var Ph = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ja = (e, t, n) => (Ph(e, t, "read from private field"), n ? n.call(e) : t.get(e)), If = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Za = (e, t, n, s) => (Ph(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Xe;
const Of = "nav", js = '[data-toggle="tab"]', Hf = "active";
class Wh extends lt {
  constructor() {
    super(...arguments), If(this, Xe, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(js);
    let i = t ? m(t).closest(js) : s.filter(`.${Hf}`);
    if (!i.length && (i = n.find(js).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = m(r);
    o.length && (o.parent().children(".tab-pane").removeClass("active in"), o.addClass("active"), Ja(this, Xe) && clearTimeout(Ja(this, Xe)), Za(this, Xe, setTimeout(() => {
      o.addClass("in"), Za(this, Xe, 0);
    }, 10)));
  }
}
Xe = /* @__PURE__ */ new WeakMap();
Wh.NAME = "Tabs";
m(document).on("click.tabs.zui", js, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Of}`);
  n.length && Wh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  Bl as ActionMenu,
  Fl as ActionMenuNested,
  dc as Avatar,
  fc as BtnGroup,
  yc as ColorPicker,
  lt as Component,
  J as ComponentFromReact,
  tt as ContextMenu,
  Wi as CustomContent,
  yo as CustomRender,
  ps as DTable,
  lh as Dashboard,
  Vt as Dropdown,
  cc as EventBus,
  Pl as HElement,
  mo as HtmlContent,
  Ct as Icon,
  Ul as Menu,
  Mo as Messager,
  _c as Modal,
  Qt as ModalBase,
  $c as ModalTrigger,
  Cc as Nav,
  Sc as Pager,
  Ec as Pick,
  Lc as Picker,
  Pc as Popovers,
  V as ReactComponent,
  Dc as SearchBox,
  lc as Switch,
  It as TIME_DAY,
  Wh as Tabs,
  Ic as Toolbar,
  Et as Tooltip,
  eh as Tree,
  lf as Upload,
  Ha as calculateTimestamp,
  m as cash,
  M as classes,
  er as componentsMap,
  Eu as convertBytes,
  Au as create,
  rt as createDate,
  Fu as createPortal,
  nt as createRef,
  Cu as deepGet,
  ku as deepGetPath,
  Js as delay,
  zf as dom,
  Su as formatBytes,
  Ar as formatDate,
  rp as formatDateSpan,
  et as formatString,
  wl as getClassList,
  op as getTimeBeforeDesc,
  q as h,
  Ff as hh,
  Iu as htm,
  Yt as i18n,
  ip as isDBY,
  ds as isSameDay,
  Pd as isSameMonth,
  tp as isSameWeek,
  Nr as isSameYear,
  ep as isToday,
  sp as isTomorrow,
  K as isValidElement,
  np as isYesterday,
  La as nativeEvents,
  Kn as render,
  Wl as renderCustomContent,
  Hu as renderCustomResult,
  _d as store,
  _l as storeData,
  Nu as takeData
};
//# sourceMappingURL=zui.js.map
