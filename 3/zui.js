var er = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (er(e, t, "read from private field"), n ? n.call(e) : t.get(e)), A = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, H = (e, t, n, s) => (er(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var ye = (e, t, n) => (er(e, t, "access private method"), n);
const Gt = document, Xs = window, nl = Gt.documentElement, Be = Gt.createElement.bind(Gt), sl = Be("div"), nr = Be("table"), Fh = Be("tbody"), pa = Be("tr"), { isArray: Li, prototype: il } = Array, { concat: Uh, filter: io, indexOf: rl, map: ol, push: Vh, slice: al, some: ro, splice: qh } = il, Gh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, jh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Yh = /<.+>/, Kh = /^\w+$/;
function oo(e, t) {
  const n = Xh(t);
  return !e || !n && !We(t) && !G(t) ? [] : !n && jh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Kh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Pi {
  constructor(t, n) {
    if (!t)
      return;
    if (wr(t))
      return t;
    let s = t;
    if (Q(t)) {
      const i = n || Gt;
      if (s = Gh.test(t) && We(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Yh.test(t) ? hl(t) : wr(i) ? i.find(t) : Q(i) ? m(i).find(t) : oo(t, i), !s)
        return;
    } else if (ze(t))
      return this.ready(t);
    (s.nodeType || s === Xs) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Pi(t, n);
  }
}
const $ = Pi.prototype, m = $.init;
m.fn = m.prototype = $;
$.length = 0;
$.splice = qh;
typeof Symbol == "function" && ($[Symbol.iterator] = il[Symbol.iterator]);
function wr(e) {
  return e instanceof Pi;
}
function gn(e) {
  return !!e && e === e.window;
}
function We(e) {
  return !!e && e.nodeType === 9;
}
function Xh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Jh(e) {
  return !!e && e.nodeType === 3;
}
function Zh(e) {
  return typeof e == "boolean";
}
function ze(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function rt(e) {
  return e === void 0;
}
function Yn(e) {
  return e === null;
}
function ll(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function ao(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = gn;
m.isFunction = ze;
m.isArray = Li;
m.isNumeric = ll;
m.isPlainObject = ao;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (ao(e)) {
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
m.each = K;
$.each = function(e) {
  return K(this, e);
};
$.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Js(...e) {
  const t = Zh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Js(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Li(r[o]) || ao(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Js(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = Js;
$.extend = function(e) {
  return Js($, e);
};
const Qh = /\S+/g;
function Wi(e) {
  return Q(e) ? e.match(Qh) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = Wi(e), s = !rt(t);
  return this.each((i, r) => {
    G(r) && K(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(e) {
  return this.toggleClass(e, !0);
};
$.removeAttr = function(e) {
  const t = Wi(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function td(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Yn(n) ? void 0 : n;
      }
      return rt(t) ? this : Yn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
$.attr = td;
$.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
$.hasClass = function(e) {
  return !!e && ro.call(this, (t) => G(t) && t.classList.contains(e));
};
$.get = function(e) {
  return rt(e) ? al.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function ed(e) {
  return rt(e) ? this.get().map((t) => G(t) || Jh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
$.text = ed;
function jt(e, t, n) {
  if (!G(e))
    return;
  const s = Xs.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function kt(e, t) {
  return parseInt(jt(e, t), 10) || 0;
}
function ma(e, t) {
  return kt(e, `border${t ? "Left" : "Top"}Width`) + kt(e, `padding${t ? "Left" : "Top"}`) + kt(e, `padding${t ? "Right" : "Bottom"}`) + kt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const sr = {};
function nd(e) {
  if (sr[e])
    return sr[e];
  const t = Be(e);
  Gt.body.insertBefore(t, null);
  const n = jt(t, "display");
  return Gt.body.removeChild(t), sr[e] = n !== "none" ? n : "block";
}
function ga(e) {
  return jt(e, "display") === "none";
}
function cl(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Ii(e) {
  return Q(e) ? (t, n) => cl(n, e) : ze(e) ? e : wr(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
$.filter = function(e) {
  const t = Ii(e);
  return m(io.call(this, (n, s) => t.call(n, s, n)));
};
function fe(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return fe(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const sd = /^\s*<(\w+)[^>]*>/, id = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ya = {
  "*": sl,
  tr: Fh,
  td: pa,
  th: pa,
  thead: nr,
  tbody: nr,
  tfoot: nr
};
function hl(e) {
  if (!Q(e))
    return [];
  if (id.test(e))
    return [Be(RegExp.$1)];
  const t = sd.test(e) && RegExp.$1, n = ya[t] || ya["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = hl;
$.has = function(e) {
  const t = Q(e) ? (n, s) => oo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
$.not = function(e) {
  const t = Ii(e);
  return this.filter((n, s) => (!Q(e) || G(s)) && !t.call(s, n, s));
};
function Zt(e, t, n, s) {
  const i = [], r = ze(t), o = s && Ii(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Vh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function dl(e) {
  return e.multiple && e.options ? Zt(io.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function rd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || vl.test(n.type)) {
      const i = Li(e) ? ol.call(e, String) : Yn(e) ? [] : [String(e)];
      s ? K(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = rt(e) || Yn(e) ? "" : e;
  }) : this[0] && dl(this[0]);
}
$.val = rd;
$.is = function(e) {
  const t = Ii(e);
  return ro.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Et(e) {
  return e.length > 1 ? io.call(e, (t, n, s) => rl.call(s, t) === n) : e;
}
m.unique = Et;
$.add = function(e, t) {
  return m(Et(this.get().concat(m(e, t).get())));
};
$.children = function(e) {
  return fe(m(Et(Zt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return fe(m(Et(Zt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return rl.call(n, t);
};
$.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
$.siblings = function(e) {
  return fe(m(Et(Zt(this, (t) => m(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return m(Et(Zt(this, (t) => oo(e, t))));
};
const od = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ad = /^$|^module$|\/(java|ecma)script/i, ld = ["type", "src", "nonce", "noModule"];
function cd(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (ad.test(i.type) && nl.contains(i)) {
      const r = Be("script");
      r.text = i.textContent.replace(od, ""), K(ld, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function hd(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && cd(t, e.ownerDocument);
}
function pe(e, t, n, s, i, r, o, a) {
  return K(e, (l, h) => {
    K(m(h), (c, d) => {
      K(m(t), (u, f) => {
        const p = n ? d : f, y = n ? f : d, v = n ? c : u;
        hd(p, v ? y.cloneNode(!0) : y, s, i, !v);
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
function dd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = dd;
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
  return m(Et(Zt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return fe(m(Et(Zt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return fe(m(Et(Zt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return fe(m(Et(Zt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return m(Uh.apply([], ol.call(this, (t, n) => e.call(t, n, t))));
};
$.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && jt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || nl;
  });
};
$.slice = function(e, t) {
  return m(al.call(this, e, t));
};
const ud = /-([a-z])/g;
function lo(e) {
  return e.replace(ud, (t, n) => n.toUpperCase());
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
    top: t.top + Xs.pageYOffset,
    left: t.left + Xs.pageXOffset
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
      n.top -= r.top + kt(i, "borderTopWidth"), n.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - kt(e, "marginTop"),
    left: n.left - kt(e, "marginLeft")
  };
};
const ul = {
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
      return e = ul[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
$.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[ul[e] || e];
  });
};
const fd = /^--/;
function co(e) {
  return fd.test(e);
}
const ir = {}, { style: pd } = sl, md = ["webkit", "moz", "ms"];
function gd(e, t = co(e)) {
  if (t)
    return e;
  if (!ir[e]) {
    const n = lo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${md.join(`${s} `)}${s}`.split(" ");
    K(i, (r, o) => {
      if (o in pd)
        return ir[e] = o, !1;
    });
  }
  return ir[e];
}
const yd = {
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
function fl(e, t, n = co(e)) {
  return !n && !yd[e] && ll(t) ? `${t}px` : t;
}
function wd(e, t) {
  if (Q(e)) {
    const n = co(e);
    return e = gd(e, n), arguments.length < 2 ? this[0] && jt(this[0], e, n) : e ? (t = fl(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
$.css = wd;
function pl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const vd = /^\s+|\s+$/;
function wa(e, t) {
  const n = e.dataset[t] || e.dataset[lo(t)];
  return vd.test(n) ? n : pl(JSON.parse, n);
}
function _d(e, t, n) {
  n = pl(JSON.stringify, n), e.dataset[lo(t)] = n;
}
function bd(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = wa(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && wa(this[0], e) : rt(t) ? this : this.each((n, s) => {
      _d(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
$.data = bd;
function ml(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return gn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : We(this[0]) ? ml(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? kt(this[0], `margin${n ? "Top" : "Left"}`) + kt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return rt(s) ? void 0 : this;
    if (!arguments.length)
      return gn(this[0]) ? this[0].document.documentElement[`client${t}`] : We(this[0]) ? ml(this[0], t) : this[0].getBoundingClientRect()[n] - ma(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = jt(o, "boxSizing");
      o.style[n] = fl(n, i + (a === "border-box" ? ma(o, !e) : 0));
    });
  };
});
const va = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = ga(n);
    (rt(e) ? s : e) ? (n.style.display = n[va] || "", ga(n) && (n.style.display = nd(n.tagName))) : s || (n[va] = jt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const _a = "___ce", ho = ".", uo = { focus: "focusin", blur: "focusout" }, gl = { mouseenter: "mouseover", mouseleave: "mouseout" }, xd = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function fo(e) {
  return gl[e] || uo[e] || e;
}
function po(e) {
  const t = e.split(ho);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(e, t) {
  if (Q(e)) {
    const [s, i] = po(e), r = fo(s);
    if (!r)
      return this;
    const o = xd.test(r) ? "MouseEvents" : "HTMLEvents";
    e = Gt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(ho), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in uo;
  return this.each((s, i) => {
    n && ze(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function yl(e) {
  return e[_a] = e[_a] || {};
}
function $d(e, t, n, s, i) {
  const r = yl(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function wl(e, t) {
  return !t || !ro.call(t, (n) => e.indexOf(n) < 0);
}
function Zs(e, t, n, s, i) {
  const r = yl(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !wl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Zs(e, t, n, s, i);
}
$.off = function(e, t, n) {
  if (rt(e))
    this.each((s, i) => {
      !G(i) && !We(i) && !gn(i) || Zs(i);
    });
  else if (Q(e))
    ze(t) && (n = t, t = ""), K(Wi(e), (s, i) => {
      const [r, o] = po(i), a = fo(r);
      this.each((l, h) => {
        !G(h) && !We(h) && !gn(h) || Zs(h, a, o, t, n);
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
function Cd(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (rt(t) || Yn(t) ? t = "" : rt(n) ? (n = t, t = "") : (s = n, n = t, t = "")), ze(s) || (s = n, n = void 0), s ? (K(Wi(e), (r, o) => {
    const [a, l] = po(o), h = fo(a), c = a in gl, d = a in uo;
    h && this.each((u, f) => {
      if (!G(f) && !We(f) && !gn(f))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !wl(l, y.namespace.split(ho)) || !t && (d && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = y.target;
          for (; !cl(_, t); )
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
        i && Zs(f, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, $d(f, h, l, t, p);
    });
  }), this) : this;
}
$.on = Cd;
function kd(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
$.one = kd;
const Sd = /\r?\n/g;
function Md(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(Sd, `\r
`))}`;
}
const Ed = /file|reset|submit|button|image/i, vl = /radio|checkbox/i;
$.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Ed.test(i.type) || vl.test(i.type) && !i.checked)
        return;
      const r = dl(i);
      if (!rt(r)) {
        const o = Li(r) ? r : [r];
        K(o, (a, l) => {
          e += Md(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function Td(e, t) {
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
function Rd(e, t, n) {
  try {
    const s = Td(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function st(e, ...t) {
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
var mo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(mo || {});
function Nd(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / mo[n]).toFixed(t) + n);
}
const Ad = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * mo[s];
};
let go = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ie;
function Ld() {
  return go;
}
function Pd(e) {
  go = e.toLowerCase();
}
function _l(e, t) {
  ie || (ie = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ie, e);
}
function Yt(e, t, n, s, i, r) {
  Array.isArray(e) ? ie && e.unshift(ie) : e = ie ? [ie, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || go;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === ie ? `${r}.${t}` : t;
    if (a = Rd(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? st(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Wd(e, t, n, s) {
  return Yt(void 0, e, t, n, s);
}
Yt.addLang = _l;
Yt.getLang = Wd;
Yt.getCode = Ld;
Yt.setCode = Pd;
_l({
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
function bl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? bl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const E = (...e) => bl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = E;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", E(i.attr("class"), ...t)) : i.addClass(E(e, ...t));
  });
};
const $n = /* @__PURE__ */ new WeakMap();
function xl(e, t, n) {
  const s = $n.has(e), i = s ? $n.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), $n.set(e, i)) : $n.delete(e);
}
function Id(e, t) {
  let n = $n.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Id(this[0], t) : this.each((s, i) => xl(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => xl(n, e));
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
const Qs = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), rr = /* @__PURE__ */ new Map();
function Dd(e, t, n) {
  const { zui: s } = window;
  rr.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && rr.set(r.toLowerCase(), s[r]);
  });
  const i = rr.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
m(() => {
  m("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, Dd(n, this, t);
  });
});
function yo(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, d = a || h, u = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= u && i + o <= d;
  const f = i <= d && i + o >= 0, p = s <= u && s + r >= 0;
  return f && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    yo(n, e);
  });
};
function wo(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    wo(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    wo(n, e);
  });
};
function $l(e, t) {
  const n = m(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && yo(o, { fullyCheck: !0 }) || o.scrollIntoView(i);
  }), n;
}
m.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    $l(n, e);
  });
};
const Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: yo,
  runJS: wo,
  scrollIntoView: $l
}, Symbol.toStringTag, { value: "Module" }));
var Di, z, Cl, Z, Se, ba, kl, vr, ti = {}, Sl = [], Od = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vo = Array.isArray;
function ce(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Ml(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Di.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Ms(e, o, s, i, null);
}
function Ms(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Cl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function tt() {
  return { current: null };
}
function wn(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function Kn(e, t) {
  if (t == null)
    return e.__ ? Kn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? Kn(e) : null;
}
function El(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return El(e);
  }
}
function xa(e) {
  (!e.__d && (e.__d = !0) && Se.push(e) && !ei.__r++ || ba !== z.debounceRendering) && ((ba = z.debounceRendering) || kl)(ei);
}
function ei() {
  var e, t, n, s, i, r, o, a;
  for (Se.sort(vr); e = Se.shift(); )
    e.__d && (t = Se.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ce({}, r)).__v = r.__v + 1, _o(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Kn(r), r.__h), Ll(s, r), r.__e != o && El(r)), Se.length > t && Se.sort(vr));
  ei.__r = 0;
}
function Tl(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, f, p, y, v, w = s && s.__k || Sl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Ms(null, f, null, null, f) : vo(f) ? Ms(wn, { children: f }, null, null, null) : f.__b > 0 ? Ms(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      _o(e, f, u = u || ti, i, r, o, a, l, h), p = f.__e, (d = f.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, f), v.push(d, f.__c || p, f)), p != null ? (y == null && (y = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = l = Rl(f, l, e) : l = Nl(e, f, u, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = Kn(u));
    }
  for (n.__e = y, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = Al(s).nextSibling), Wl(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      Pl(v[c], v[++c], v[++c]);
}
function Rl(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? Rl(s, t, n) : Nl(n, s, s, i, s.__e, t));
  return t;
}
function Nl(e, t, n, s, i, r) {
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
function Al(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = Al(n)))
        return s;
  }
  return null;
}
function Hd(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ni(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ni(e, r, t[r], n[r], s);
}
function $a(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Od.test(t) ? n : n + "px";
}
function ni(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || $a(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || $a(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? ka : Ca, r) : e.removeEventListener(t, r ? ka : Ca, r);
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
function Ca(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function ka(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function _o(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, f, p, y, v, w, _, x, k, S, T, N, L = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof L == "function") {
        if (v = t.props, w = (h = L.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in L && L.prototype.render ? t.__c = c = new L(v, _) : (t.__c = c = new V(v, _), c.constructor = L, c.render = zd), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ce({}, c.__s)), ce(c.__s, L.getDerivedStateFromProps(v, c.__s))), u = c.props, f = c.state, c.__v = t, d)
          L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (L.getDerivedStateFromProps == null && v !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), x = 0; x < c._sb.length; x++)
              c.__h.push(c._sb[x]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, k = z.__r, S = 0, "prototype" in L && L.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = ce(ce({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(u, f)), Tl(e, vo(N = h != null && h.type === wn && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Bd(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function Ll(e, t) {
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
function Bd(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((l = r[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, r[p] = null;
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
    if (r = r && Di.call(e.childNodes), h = (d = n.props || ti).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Hd(e, u, d, i, a), c)
      t.__k = [];
    else if (Tl(e, vo(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Kn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && Ml(r[p]);
    a || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== d.value) && ni(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && ni(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Pl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function Wl(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Pl(s, null, t)), (s = e.__c) != null) {
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
      s[i] && Wl(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || Ml(e.__e), e.__ = e.__e = e.__d = void 0;
}
function zd(e, t, n) {
  return this.constructor(e, n);
}
function Xn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], _o(t, e = (!s && n || t).__k = q(wn, null, [e]), i || ti, ti, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? Di.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), Ll(r, e);
}
Di = Sl.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, Cl = 0, Z = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof e == "function" && (e = e(ce({}, n), this.props)), e && ce(n, e), e != null && this.__v && (t && this._sb.push(t), xa(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), xa(this));
}, V.prototype.render = wn, Se = [], kl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, vr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, ei.__r = 0;
var Il = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, Il(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, Sa = /* @__PURE__ */ new Map();
function Fd(e) {
  var t = Sa.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Sa.set(this, t)), (t = Il(this, t.get(e) || (t.set(e, t = function(n) {
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
const jf = Fd.bind(q);
function Dl(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return q(t, { ref: o, class: E(n), style: s, ...a, ...r }, i);
}
var Ud = 0;
function g(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ud, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var ts;
class bo extends V {
  constructor() {
    super(...arguments);
    A(this, ts, tt());
  }
  componentDidMount() {
    this.props.executeScript && m(C(this, ts).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ g(Dl, { forwardRef: C(this, ts), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
ts = new WeakMap();
function Vd(e) {
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
  } = e, d = [n], u = { ...s }, f = [], p = [];
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
      w != null && (typeof w == "object" && !Z(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ g("div", { className: E(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: E(d),
    style: u,
    ...c
  }, f];
}
function xo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Vd(t);
  return q(e, n, ...s);
}
function Ol(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => Ol(s, t, n)) : Z(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ g(bo, { ...e }) : /* @__PURE__ */ g(Dl, { ...e }) : e;
}
function Oi(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = Ol(t, n, s);
  return i == null || typeof i == "boolean" ? null : Z(i) ? i : /* @__PURE__ */ g(wn, { children: i });
}
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(t.startsWith("icon-") ? t : `icon-${t}`);
  else if (typeof t == "object") {
    const { className: r, ...o } = t;
    return i.push(r), Object.assign(s, o), /* @__PURE__ */ g(nt, { className: E(i), ...s });
  }
  return /* @__PURE__ */ g("i", { className: E(i), ...s });
}
function qd(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Gd(e) {
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
    q(qd, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function jd(e, t) {
  const n = q(Gd, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var Hl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ue = (e, t, n) => (Hl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ws = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (Hl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), be, Cn, Es, Ts;
const Bl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ws(this, be, void 0), ws(this, Cn, void 0), ws(this, Es, void 0), ws(this, Ts, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Ve(this, Es, a), Ve(this, Cn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ve(this, be, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ve(this, Ts, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ue(this, Ts);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ue(this, Cn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ue(this, be);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ue(this, Es);
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
    Ve(this, be, void 0), Ve(this, Cn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Ue(this, be), e), Ue(this, be);
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
let ht = Bl;
be = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ts = /* @__PURE__ */ new WeakMap();
ht.DEFAULT = {};
ht.NAME = Bl.name;
ht.MULTI_INSTANCE = !1;
class X extends ht {
  constructor() {
    super(...arguments), this.ref = tt();
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
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Yd({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: E(t),
    style: s,
    ...i
  }, n);
}
function zl({
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
  checked: p,
  onClick: y,
  ...v
}) {
  const w = [
    typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(nt, { icon: h }),
    /* @__PURE__ */ g("span", { className: "text", children: c }),
    /* @__PURE__ */ g(Oi, { content: i }),
    s,
    /* @__PURE__ */ g(nt, { icon: u })
  ];
  return q(t, {
    className: E(n, { disabled: a, active: l }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...v,
    ...r
  }, ...w);
}
function Kd({
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
    className: E(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ g(Oi, { content: r }), i);
}
function Xd({
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
    className: E(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Jd({ type: e, ...t }) {
  return /* @__PURE__ */ g(xo, { ...t });
}
function Fl({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return q(e, {
    className: E(t),
    style: i,
    ...r
  }, /* @__PURE__ */ g(Oi, { content: s }), n);
}
const _r = class extends V {
  constructor() {
    super(...arguments), this.ref = tt();
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
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = E(o.className), r && (o = r(o)), o;
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
        if (Z(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ g(
        "li",
        {
          className: E("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || _r.ItemComponents[r] : o;
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
    return /* @__PURE__ */ g(
      "li",
      {
        className: E(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
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
      beforeDestroy: d,
      ...u
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ g(f, { class: E(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let Fe = _r;
Fe.ItemComponents = {
  divider: Yd,
  item: zl,
  heading: Kd,
  space: Xd,
  custom: Jd,
  basic: Fl
};
Fe.ROOT_TAG = "menu";
Fe.NAME = "action-menu";
class Ul extends X {
}
Ul.NAME = "ActionMenu";
Ul.Component = Fe;
function Zd({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(zl, { ...s });
}
var Vl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ut = (e, t, n) => (Vl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), or = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Qd = (e, t, n, s) => (Vl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Rs, Nt, kn;
let Hi = class extends Fe {
  constructor(t) {
    super(t), or(this, Rs, /* @__PURE__ */ new Set()), or(this, Nt, void 0), or(this, kn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Qd(this, Nt, t.nestedShow === void 0), ut(this, Nt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
      nestedShow: ut(this, Nt) ? this.state.nestedShow : i,
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
    ut(this, Rs).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, kn).bind(this, r, !0),
        onMouseLeave: ut(this, kn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, kn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = ut(this, Nt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!ut(this, Nt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, Rs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    ut(this, Nt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ut(this, Nt) && this.setState({ nestedShow: !1 });
  }
};
Rs = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Hi.ItemComponents = {
  item: Zd
};
class ql extends X {
}
ql.NAME = "ActionMenuNested";
ql.Component = Hi;
let Bi = class extends Hi {
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
    return /* @__PURE__ */ g("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Bi.NAME = "menu";
class Gl extends X {
}
Gl.NAME = "Menu";
Gl.Component = Bi;
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
      loading: d,
      loadingIcon: u,
      loadingText: f,
      icon: p,
      text: y,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: x,
      ...k
    } = this.props, S = t || (a ? "a" : "button"), T = y == null || typeof y == "string" && !y.length || d && !f, N = w && T && !p && !v && !o && !d;
    return q(
      S,
      {
        className: E("btn", n, r, {
          "btn-caret": N,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !N && !o && T : _
        }, i ? `size-${i}` : ""),
        title: x,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: l,
        type: S === "button" ? s : void 0,
        ...k
      },
      d ? /* @__PURE__ */ g(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ g(nt, { icon: p }),
      T ? null : /* @__PURE__ */ g("span", { className: "text", children: d ? f : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ g(nt, { icon: v }),
      d ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function tu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Kt, { type: n, ...s });
}
function hs(e) {
  return e.split("-")[1];
}
function $o(e) {
  return e === "y" ? "height" : "width";
}
function Re(e) {
  return e.split("-")[0];
}
function ds(e) {
  return ["top", "bottom"].includes(Re(e)) ? "x" : "y";
}
function Ma(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ds(t), l = $o(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
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
  switch (hs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const eu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Ma(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = Ma(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function us(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jl(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function si(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Yl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = us(t, e), p = jl(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = si(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = si(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const br = Math.min, nu = Math.max;
function xr(e, t, n) {
  return nu(e, br(t, n));
}
const $r = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = us(e, t) || {};
  if (l == null)
    return {};
  const c = jl(h), d = { x: n, y: s }, u = ds(i), f = $o(u), p = await o.getDimensions(l), y = u === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", x = r.reference[f] + r.reference[u] - d[u] - r.floating[f], k = d[u] - r.reference[u], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = S ? S[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement(S)) || (T = a.floating[_] || r.floating[f]);
  const N = x / 2 - k / 2, L = T / 2 - p[f] / 2 - 1, O = br(c[v], L), b = br(c[w], L), R = O, I = T - p[f] - b, P = T / 2 - p[f] / 2 + N, D = xr(R, P, I), W = hs(i) != null && P != D && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : I - P : 0;
  return { [u]: d[u] - W, data: { [u]: D, centerOffset: P - D + W } };
} }), su = ["top", "right", "bottom", "left"];
su.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const iu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ii(e) {
  return e.replace(/left|right|bottom|top/g, (t) => iu[t]);
}
function ru(e, t, n) {
  n === void 0 && (n = !1);
  const s = hs(e), i = ds(e), r = $o(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ii(o)), { main: o, cross: ii(o) };
}
const ou = { start: "end", end: "start" };
function ar(e) {
  return e.replace(/start|end/g, (t) => ou[t]);
}
const zi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = us(e, t), v = Re(s), w = Re(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [ii(o)] : function(R) {
      const I = ii(R);
      return [ar(R), I, ar(I)];
    }(o));
    d || f === "none" || x.push(...function(R, I, P, D) {
      const W = hs(R);
      let F = function(dt, Tt, gs) {
        const vn = ["left", "right"], ys = ["right", "left"], tr = ["top", "bottom"], zh = ["bottom", "top"];
        switch (dt) {
          case "top":
          case "bottom":
            return gs ? Tt ? ys : vn : Tt ? vn : ys;
          case "left":
          case "right":
            return Tt ? tr : zh;
          default:
            return [];
        }
      }(Re(R), P === "start", D);
      return W && (F = F.map((dt) => dt + "-" + W), I && (F = F.concat(F.map(ar)))), F;
    }(o, p, f, _));
    const k = [o, ...x], S = await Yl(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: R, cross: I } = ru(s, r, _);
      T.push(S[R], S[I]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((R) => R <= 0)) {
      var L, O;
      const R = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, I = k[R];
      if (I)
        return { data: { index: R, overflows: N }, reset: { placement: I } };
      let P = (O = N.filter((D) => D.overflows[0] <= 0).sort((D, W) => D.overflows[1] - W.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!P)
        switch (u) {
          case "bestFit": {
            var b;
            const D = (b = N.map((W) => [W.placement, W.overflows.filter((F) => F > 0).reduce((F, dt) => F + dt, 0)]).sort((W, F) => W[1] - F[1])[0]) == null ? void 0 : b[0];
            D && (P = D);
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
}, Fi = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Re(a), u = hs(a), f = ds(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = us(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function au(e) {
  return e === "x" ? "y" : "x";
}
const ri = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = us(e, t), h = { x: n, y: s }, c = await Yl(t, l), d = ds(Re(i)), u = au(d);
    let f = h[d], p = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      f = xr(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      p = xr(p + c[u === "y" ? "top" : "left"], p, p - c[v]);
    }
    const y = a.fn({ ...t, [d]: f, [u]: p });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function lt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e) {
  return lt(e).getComputedStyle(e);
}
function Kl(e) {
  return e instanceof lt(e).Node;
}
function de(e) {
  return Kl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  return e instanceof lt(e).HTMLElement;
}
function Ft(e) {
  return e instanceof lt(e).Element;
}
function Ea(e) {
  return typeof ShadowRoot < "u" && (e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot);
}
function Jn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function lu(e) {
  return ["table", "td", "th"].includes(de(e));
}
function Cr(e) {
  const t = Co(), n = yt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function Co() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Ui(e) {
  return ["html", "body", "#document"].includes(de(e));
}
const Ta = Math.min, Hn = Math.max, oi = Math.round, vs = Math.floor, Ie = (e) => ({ x: e, y: e });
function Xl(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = vt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = oi(n) !== r || oi(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function ko(e) {
  return Ft(e) ? e : e.contextElement;
}
function nn(e) {
  const t = ko(e);
  if (!vt(t))
    return Ie(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Xl(t);
  let o = (r ? oi(n.width) : n.width) / s, a = (r ? oi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const Ra = Ie(0);
function Jl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !Co())
    return Ra;
  const r = e ? lt(e) : window;
  return !n || t && n !== r ? Ra : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function De(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = ko(e);
  let o = Ie(1);
  t && (s ? Ft(s) && (o = nn(s)) : o = nn(e));
  const a = Jl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = lt(r), f = s && Ft(s) ? lt(s) : s;
    let p = u.frameElement;
    for (; p && s && f !== u; ) {
      const y = nn(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, x = v.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += x, p = lt(p).frameElement;
    }
  }
  return si({ width: c, height: d, x: l, y: h });
}
function Ut(e) {
  return ((Kl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Vi(e) {
  return Ft(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Zl(e) {
  return De(Ut(e)).left + Vi(e).scrollLeft;
}
function yn(e) {
  if (de(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Ea(e) && e.host || Ut(e);
  return Ea(t) ? t.host : t;
}
function Ql(e) {
  const t = yn(e);
  return Ui(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Jn(t) ? t : Ql(t);
}
function ai(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ql(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = lt(s);
  return i ? t.concat(r, r.visualViewport || [], Jn(s) ? s : []) : t.concat(s, ai(s));
}
function Na(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = lt(i), a = Ut(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = Co();
        (!f || f && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Ut(i), o = Vi(i), a = i.ownerDocument.body, l = Hn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = Hn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Zl(i);
      const d = -o.scrollTop;
      return yt(a).direction === "rtl" && (c += Hn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Ut(e));
  else if (Ft(t))
    s = function(i, r) {
      const o = De(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = vt(i) ? nn(i) : Ie(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Jl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return si(s);
}
function tc(e, t) {
  const n = yn(e);
  return !(n === t || !Ft(n) || Ui(n)) && (yt(n).position === "fixed" || tc(n, t));
}
function Aa(e, t) {
  return vt(e) && yt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function La(e, t) {
  const n = lt(e);
  if (!vt(e))
    return n;
  let s = Aa(e, t);
  for (; s && lu(s) && yt(s).position === "static"; )
    s = Aa(s, t);
  return s && (de(s) === "html" || de(s) === "body" && yt(s).position === "static" && !Cr(s)) ? n : s || function(i) {
    let r = yn(i);
    for (; vt(r) && !Ui(r); ) {
      if (Cr(r))
        return r;
      r = yn(r);
    }
    return null;
  }(e) || n;
}
function cu(e, t, n) {
  const s = vt(t), i = Ut(t), r = n === "fixed", o = De(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ie(0);
  if (s || !s && !r)
    if ((de(t) !== "body" || Jn(i)) && (a = Vi(t)), vt(t)) {
      const h = De(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Zl(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const hu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = ai(h).filter((v) => Ft(v) && de(v) !== "body"), f = null;
    const p = yt(h).position === "fixed";
    let y = p ? yn(h) : h;
    for (; Ft(y) && !Ui(y); ) {
      const v = yt(y), w = Cr(y);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Jn(y) && !w && tc(h, y)) ? u = u.filter((_) => _ !== y) : f = v, y = yn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Na(t, c, i);
    return h.top = Hn(d.top, h.top), h.right = Ta(d.right, h.right), h.bottom = Ta(d.bottom, h.bottom), h.left = Hn(d.left, h.left), h;
  }, Na(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = vt(n), r = Ut(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Ie(1);
  const l = Ie(0);
  if ((i || !i && s !== "fixed") && ((de(n) !== "body" || Jn(r)) && (o = Vi(n)), vt(n))) {
    const h = De(n);
    a = nn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ft, getDimensions: function(e) {
  return Xl(e);
}, getOffsetParent: La, getDocumentElement: Ut, getScale: nn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || La, r = this.getDimensions;
  return { reference: cu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => yt(e).direction === "rtl" };
function So(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = ko(e), c = i || r ? [...h ? ai(h) : [], ...ai(t)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }), r && y.addEventListener("resize", n);
  });
  const d = h && a ? function(y, v) {
    let w, _ = null;
    const x = Ut(y);
    function k() {
      clearTimeout(w), _ && _.disconnect(), _ = null;
    }
    return function S(T, N) {
      T === void 0 && (T = !1), N === void 0 && (N = 1), k();
      const { left: L, top: O, width: b, height: R } = y.getBoundingClientRect();
      if (T || v(), !b || !R)
        return;
      const I = vs(O), P = vs(x.clientWidth - (L + b)), D = vs(x.clientHeight - (O + R)), W = vs(L);
      let F = !0;
      _ = new IntersectionObserver((dt) => {
        const Tt = dt[0].intersectionRatio;
        if (Tt !== N) {
          if (!F)
            return S();
          Tt === 0 ? w = setTimeout(() => {
            S(!1, 1e-7);
          }, 100) : S(!1, Tt);
        }
        F = !1;
      }, { rootMargin: -I + "px " + -P + "px " + -D + "px " + -W + "px", threshold: N }), _.observe(y);
    }(!0), k;
  }(h, n) : null;
  let u, f = null;
  o && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? De(e) : null;
  return l && function y() {
    const v = De(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, u = requestAnimationFrame(y);
  }(), n(), () => {
    c.forEach((y) => {
      i && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, l && cancelAnimationFrame(u);
  };
}
const qi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: hu, ...n }, r = { ...i.platform, _c: s };
  return eu(e, t, { ...i, platform: r });
};
var an, el;
let du = (el = class extends Bi {
  constructor() {
    super(...arguments);
    A(this, an, 0);
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
    !n || !s || qi(s, n, {
      placement: "right-start",
      middleware: [zi(), ri(), Fi(1)]
    }).then(({ x: i, y: r }) => {
      m(n).css({
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
    super.afterRender(n), this.props.controlledMenu && (this.layout(), H(this, an, window.setTimeout(this.layout.bind(this), 100)));
  }
  beforeRender() {
    const n = super.beforeRender();
    return n.className = E(n.className, "popup"), n;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ g("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), C(this, an) && clearTimeout(C(this, an));
  }
}, an = new WeakMap(), el);
var Mo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rt = (e, t, n) => (Mo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _s = (e, t, n, s) => (Mo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Pa = (e, t, n) => (Mo(e, t, "access private method"), n), ee, Sn, Ns, As, kr, ec, Sr, nc;
const lr = "show", uu = '[data-toggle="contextmenu"]';
class et extends ht {
  constructor() {
    super(...arguments), qe(this, kr), qe(this, Sr), qe(this, ee, void 0), qe(this, Sn, void 0), qe(this, Ns, void 0), qe(this, As, void 0);
  }
  get isShown() {
    return Rt(this, ee) && m(Rt(this, ee)).hasClass(lr);
  }
  get menu() {
    return Rt(this, ee) || this.ensureMenu();
  }
  get trigger() {
    return Rt(this, Ns) || this.element;
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
    return this.isShown || (_s(this, Ns, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(lr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Rt(this, As)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Rt(this, ee)).removeClass(lr), this.emit("hidden"), !0);
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
      s && s.addClass("popup");
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
    return this.options.flip && ((i = s.middleware) == null || i.push(zi())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    _s(this, As, So(n, s, () => {
      qi(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = Pa(this, kr, ec).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...Pa(this, Sr, nc).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Xn(q(du, t), this.menu), !0);
  }
  getPopperElement() {
    return Rt(this, Sn) || _s(this, Sn, {
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
    }), Rt(this, Sn);
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
Sn = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakSet();
ec = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Sr = /* @__PURE__ */ new WeakSet();
nc = function(e) {
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
et.MENU_CLASS = "contextmenu";
et.NAME = "ContextMenu";
et.MULTI_INSTANCE = !0;
et.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${et.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${et.MENU_CLASS}`).length)
    return;
  const n = t.closest(uu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${et.KEY}:options`, i = n.data(s), r = et.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${et.NAMESPACE}`, et.clear.bind(et));
var Eo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mn = (e, t, n) => (Eo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Mr = (e, t, n, s) => (Eo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), fu = (e, t, n) => (Eo(e, t, "access private method"), n), Bn, En, li, Er, sc;
const Wa = '[data-toggle="dropdown"]', ic = class extends et {
  constructor() {
    super(...arguments), bs(this, Er), bs(this, Bn, !1), bs(this, En, 0), this.hideLater = () => {
      Mn(this, li).call(this), Mr(this, En, window.setTimeout(this.hide.bind(this), 100));
    }, bs(this, li, () => {
      clearTimeout(Mn(this, En)), Mr(this, En, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && ic.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Mn(this, Bn) && this.isHover && fu(this, Er, sc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Mn(this, Bn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(Fi(t)), (s = e.middleware) == null || s.push($r({ element: this.arrowEl }))), e;
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
let Vt = ic;
Bn = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakSet();
sc = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Mn(this, li)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Mr(this, Bn, !0);
};
Vt.MENU_CLASS = "dropdown-menu";
Vt.NAME = "Dropdown";
Vt.DEFAULT = {
  ...et.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const xs = `${Vt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(Wa).not(":disabled,.disabled");
  if (!t.length) {
    Vt.clear({ event: e });
    return;
  }
  const n = t.data(xs), s = Vt.ensure(t, n);
  n || t.data(xs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(Wa);
  if (!t.length)
    return;
  const n = t.data(xs), s = Vt.ensure(t, n);
  n || t.data(xs, s.options), s.isHover && s.show();
});
let $s = 0;
window.addEventListener("scroll", (e) => {
  $s && clearTimeout($s), $s = window.setTimeout(() => {
    Vt.clear({ event: e }), $s = 0;
  }, 50);
}, !0);
var es, ln;
class pu extends V {
  constructor(n) {
    var s;
    super(n);
    A(this, es, void 0);
    A(this, ln, tt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, ln);
  }
  get triggerElement() {
    return C(this, ln).current;
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
    }), H(this, es, Vt.ensure(this.triggerElement, {
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
    (n = C(this, es)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: E("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, ln)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
es = new WeakMap(), ln = new WeakMap();
class mu extends pu {
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
function rc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(mu, { type: n, ...s });
}
let oc = class extends V {
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
      if (Z(l))
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
    return /* @__PURE__ */ g(
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
function gu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(oc, { type: n, ...s });
}
let _t = class extends Fe {
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
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ g(t, { ...a });
  }
};
_t.ItemComponents = {
  item: tu,
  dropdown: rc,
  "btn-group": gu
};
_t.ROOT_TAG = "nav";
_t.NAME = "toolbar";
_t.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function yu({
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
  a === !0 ? d = /* @__PURE__ */ g(Kt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : Z(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ g(Kt, { ...a, onClick: l }));
  const u = Z(n) ? n : n ? /* @__PURE__ */ g(_t, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: E("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ g(nt, { icon: h }),
    Z(i) ? i : /* @__PURE__ */ g("div", { className: E("alert-content", r), children: [
      Z(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function wu(e) {
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
let vu = class extends V {
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
      yu,
      {
        className: E("messager", l, i, o === !0 ? wu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var _u = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, bu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _n = (e, t, n) => (_u(e, t, "access private method"), n), xe, Ke;
class To extends X {
  constructor() {
    super(...arguments), bu(this, xe), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), _n(this, xe, Ke).call(this, () => {
      this._show = !0, this.render(), _n(this, xe, Ke).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && _n(this, xe, Ke).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && _n(this, xe, Ke).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), _n(this, xe, Ke).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
xe = /* @__PURE__ */ new WeakSet();
Ke = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
To.NAME = "MessagerItem";
To.Component = vu;
var Ro = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ne = (e, t, n) => (Ro(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Cs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ls = (e, t, n, s) => (Ro(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ac = (e, t, n) => (Ro(e, t, "access private method"), n), sn, Bt, Tr, lc, No, cc;
const hc = class extends ht {
  constructor() {
    super(...arguments), Cs(this, Tr), Cs(this, No), Cs(this, sn, void 0), Cs(this, Bt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ne(this, Bt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), ac(this, Tr, lc).call(this).show();
  }
  hide() {
    var e;
    (e = Ne(this, Bt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = hc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let dc = hc;
sn = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakSet();
lc = function() {
  if (Ne(this, Bt))
    Ne(this, Bt).setOptions(this.options);
  else {
    const e = ac(this, No, cc).call(this), t = new To(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Ls(this, sn, void 0), Ls(this, Bt, void 0);
    }), Ls(this, Bt, t);
  }
  return Ne(this, Bt);
};
No = /* @__PURE__ */ new WeakSet();
cc = function() {
  if (Ne(this, sn))
    return Ne(this, sn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ls(this, sn, n[0])), n[0];
};
dc.NAME = "messager";
dc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let xu = class extends V {
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
    } = this.props, d = this.state.checked ? 1 : 0, u = t || "div", f = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, y = [
      /* @__PURE__ */ g("input", { onChange: h, type: "checkbox", value: d, checked: !!this.state.checked }),
      /* @__PURE__ */ g("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return q(
      u,
      {
        className: E("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...y,
      s
    );
  }
};
class uc extends X {
}
uc.NAME = "Switch";
uc.Component = xu;
var Ht;
class $u {
  constructor(t = "") {
    A(this, Ht, void 0);
    typeof t == "object" ? H(this, Ht, t) : H(this, Ht, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    C(this, Ht).addEventListener(t, n, s);
  }
  once(t, n, s) {
    C(this, Ht).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    C(this, Ht).removeEventListener(t, n, s);
  }
  emit(t) {
    return C(this, Ht).dispatchEvent(t), t;
  }
}
Ht = new WeakMap();
const Ia = /* @__PURE__ */ new Set([
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
class fc extends $u {
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
    return typeof t == "string" && (Ia.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(fc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Ia.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let pc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var ns, re, $t, cn, hn, Ps;
const fa = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    A(this, hn);
    A(this, ns, void 0);
    A(this, re, void 0);
    A(this, $t, void 0);
    A(this, cn, void 0);
    H(this, ns, n), H(this, re, `ZUI_STORE:${t ?? pc()}`), H(this, $t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, ns);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, cn) || H(this, cn, new fa(C(this, re), "session")), C(this, cn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, $t).getItem(ye(this, hn, Ps).call(this, t));
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
    C(this, $t).setItem(ye(this, hn, Ps).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, $t).removeItem(ye(this, hn, Ps).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < C(this, $t).length; n++) {
      const s = C(this, $t).key(n);
      if (s != null && s.startsWith(C(this, re))) {
        const i = C(this, $t).getItem(s);
        typeof i == "string" && t(s.substring(C(this, re).length + 1), JSON.parse(i));
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
let ci = fa;
ns = new WeakMap(), re = new WeakMap(), $t = new WeakMap(), cn = new WeakMap(), hn = new WeakSet(), Ps = function(t) {
  return `${C(this, re)}:${t}`;
};
const Cu = new ci("DEFAULT");
function ku(e, t = "local") {
  return new ci(e, t);
}
Object.assign(Cu, { create: ku });
function Su(e) {
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
function Mu(e) {
  const [t, n, s] = typeof e == "string" ? Su(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Da(e, t) {
  return Mu(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Oa(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Eu(e, t, n) {
  e = e % 360 / 360, t = Oa(t), n = Oa(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Tu(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Ru(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let mc = class extends V {
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
      lightness: p = 0.6,
      children: y,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: o, color: a };
    let x = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (w.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let k;
    if (d)
      w.push("has-img"), k = /* @__PURE__ */ g("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const S = Ru(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (_.color = Da(o));
      else {
        const N = h ?? l, L = (typeof N == "number" ? N : Tu(N)) * u % 360;
        if (_.background = `hsl(${L},${f * 100}%,${p * 100}%)`, !a) {
          const O = Eu(L, f, p);
          _.color = Da(O);
        }
      }
      let T;
      x && x < 14 * S.length && (T = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ g("div", { "data-actualSize": x, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ g(
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
class gc extends X {
}
gc.NAME = "Avatar";
gc.Component = mc;
class yc extends X {
}
yc.NAME = "BtnGroup";
yc.Component = oc;
class Ao extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  _handleClick(t) {
    t.stopPropagation();
    const { togglePop: n, clickType: s } = this.props, i = m(t.target);
    if (i.closest('[data-dismiss="pick"]').length) {
      n(!1);
      return;
    }
    i.closest("a,input").length || n(s === "open" ? !0 : void 0);
  }
  _getClass(t) {
    const { state: n, className: s } = t, { open: i, disabled: r } = n;
    return E(
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
    return n ? /* @__PURE__ */ g("input", { type: "hidden", className: "pick-value", name: n, value: s.value }) : null;
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
var Te, Ct, oe;
class wc extends V {
  constructor(n) {
    super(n);
    A(this, Te, void 0);
    A(this, Ct, void 0);
    A(this, oe, void 0);
    H(this, Te, tt()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, Te)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, oe);
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
      ref: C(this, Te),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!C(this, oe)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), H(this, oe, i[0]);
    }
    return C(this, oe);
  }
  _render(n) {
    return /* @__PURE__ */ g("div", { ...this._getProps(n), children: this._renderPop(n) });
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      C(this, Ct) && (C(this, Ct).call(this), H(this, Ct, void 0));
      return;
    }
    C(this, Ct) || H(this, Ct, So(s, n, () => {
      const { placement: o, width: a } = i;
      qi(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? zi() : null, ri(), Fi(1)].filter(Boolean)
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
    const n = C(this, Ct);
    n && (n(), H(this, Ct, void 0)), H(this, oe, void 0), H(this, Te, void 0), m(`pick-pop-${this.props.id}`).remove();
  }
  render(n) {
    return jd(this._render(n), this._getContainer(n));
  }
}
Te = new WeakMap(), Ct = new WeakMap(), oe = new WeakMap();
var vc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, we = (e, t, n) => (vc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), cr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (vc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ws, pt, Is;
let me = class extends V {
  constructor(t) {
    super(t), cr(this, Ws, void 0), cr(this, pt, 0), cr(this, Is, tt()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      we(this, pt) && (clearTimeout(we(this, pt)), Ge(this, pt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Qs(200, (a) => {
        Ge(this, pt, a);
      }), Ge(this, pt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Qs(50, (a) => {
        Ge(this, pt, a);
      }), Ge(this, pt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, Ge(this, Ws, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return we(this, Ws);
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
    (n = this.props.beforeDestroy) == null || n.call(this), we(this, pt) && clearTimeout(we(this, pt));
    const t = we(this, Is).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ g(o, { ref: we(this, Is), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ g(wn, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ws = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
me.Trigger = Ao;
me.Pop = wc;
me.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let _c = class extends me {
  _handleChange(t, n) {
    super._handleChange(t, n);
    const { syncBackground: s, syncBorder: i, syncColor: r, syncText: o } = this.props, a = t || "";
    s && m(s).css("backgroundColor", a), i && m(i).css("borderColor", a), r && m(r).css("color", a), o && m(o).text(a);
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ g(nt, { icon: s }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring", style: { background: i } })
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
        s.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
_c.defaultProps = {
  ...me.defaultProps,
  className: "color-picker rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class bc extends X {
}
bc.NAME = "ColorPicker";
bc.Component = _c;
var Lo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Me = (e, t, n) => (Lo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, zn = (e, t, n, s) => (Lo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), hr = (e, t, n) => (Lo(e, t, "access private method"), n), Ze, Ds, $e, Rr, Tn, Os;
const dr = "show", Ha = "in", Nu = '[data-dismiss="modal"]', Rn = class extends ht {
  constructor() {
    super(...arguments), bn(this, Tn), bn(this, Ze, 0), bn(this, Ds, void 0), bn(this, $e, void 0), bn(this, Rr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Nu) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(dr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Me(this, Rr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!Me(this, $e) || Me(this, $e)[0] !== n || Me(this, $e)[1] !== s) && (zn(this, $e, [n, s]), this.layout());
        });
        t.observe(e), zn(this, Ds, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = Me(this, Ds)) == null || e.disconnect();
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
    }, dr, i).css({
      zIndex: `${Rn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), hr(this, Tn, Os).call(this, () => {
      m(t).addClass(Ha), hr(this, Tn, Os).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(Ha), this.emit("hide"), hr(this, Tn, Os).call(this, () => {
      m(this.modalElement).removeClass(dr), this.emit("hidden");
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
    zn(this, $e, [r, o]), typeof e == "function" && (e = e({ width: r, height: o }));
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
    (t = Rn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Rn.query(e)) == null || t.show();
  }
};
let Qt = Rn;
Ze = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakSet();
Os = function(e, t) {
  Me(this, Ze) && (clearTimeout(Me(this, Ze)), zn(this, Ze, 0)), e && (this.options.animation ? zn(this, Ze, window.setTimeout(e, t ?? this.options.transTime)) : e());
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
class xc extends V {
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
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Z(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(_t, { ...t }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Z(t) ? t : /* @__PURE__ */ g("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(_t, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ g("div", { className: E("modal-dialog", t), style: n, children: /* @__PURE__ */ g("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
xc.defaultProps = { closeBtn: !0 };
var dn, un, fn;
class Au extends V {
  constructor() {
    super(...arguments);
    A(this, dn, void 0);
    A(this, un, void 0);
    A(this, fn, void 0);
    H(this, dn, tt()), this.state = {}, H(this, fn, () => {
      var i, r;
      const n = (r = (i = C(this, dn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, un);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), H(this, un, s);
    });
  }
  componentDidMount() {
    C(this, fn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, un)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, dn),
        onLoad: C(this, fn)
      }
    );
  }
}
dn = new WeakMap(), un = new WeakMap(), fn = new WeakMap();
var Po = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (Po(e, t, "read from private field"), n ? n.call(e) : t.get(e)), xn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, je = (e, t, n, s) => (Po(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Hs = (e, t, n) => (Po(e, t, "access private method"), n), At, Nn, Lt, hi, Wo, Bs, Nr;
function Lu(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Pu(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ g(bo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Wu(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(Au, { url: n })
  };
}
const Iu = {
  custom: Lu,
  ajax: Pu,
  iframe: Wu
}, ur = "loading", An = class extends Qt {
  constructor() {
    super(...arguments), xn(this, hi), xn(this, Bs), xn(this, At, void 0), xn(this, Nn, void 0), xn(this, Lt, void 0);
  }
  get id() {
    return ft(this, Nn);
  }
  get loading() {
    var e;
    return (e = ft(this, At)) == null ? void 0 : e.classList.contains(ur);
  }
  get shown() {
    var e;
    return !!((e = ft(this, At)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = ft(this, At);
    if (!e) {
      const { options: t } = this;
      let n = ft(this, Nn);
      n || (n = t.id || `modal-${m.guid++}`, je(this, Nn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      je(this, At, e);
    }
    return e;
  }
  get $emitter() {
    const e = ft(this, At);
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
    const e = ft(this, At);
    e && (m(e).removeData(this.constructor.KEY).remove(), je(this, At, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, Lt) && clearTimeout(ft(this, Lt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Iu[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(ur), i && je(this, Lt, window.setTimeout(() => {
      je(this, Lt, 0), Hs(this, Bs, Nr).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Hs(this, Bs, Nr).call(this, this.options.failedTip) : a && typeof a == "object" && await Hs(this, hi, Wo).call(this, a), ft(this, Lt) && (clearTimeout(ft(this, Lt)), je(this, Lt, 0)), this.layout(), await Qs(100), n.removeClass(ur), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = An.ensure(n, i);
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
    const d = [];
    (Array.isArray(r) ? r : [r]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Yt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && d.push(p);
    }, []);
    let u;
    const f = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: p, event: y }) => {
        const v = An.query(y.target, l);
        u = p.key, (o == null ? void 0 : o(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await An.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: f, ...typeof a == "function" ? a() : a },
      ...h
    }), u;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await An.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let $c = An;
At = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakSet();
Wo = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return m(this.modalElement).html(e[0]), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Xn(
      /* @__PURE__ */ g(xc, { ...e }),
      this.modalElement
    );
  });
};
Bs = /* @__PURE__ */ new WeakSet();
Nr = function(e) {
  if (e)
    return Hs(this, hi, Wo).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
$c.DEFAULT = {
  ...Qt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var Io = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ar = (e, t, n) => (Io(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ks = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ba = (e, t, n, s) => (Io(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lr = (e, t, n) => (Io(e, t, "access private method"), n), Ae, Do, Cc, Pr, kc, Oo, Sc;
const Du = '[data-toggle="modal"]';
class Mc extends ht {
  constructor() {
    super(...arguments), ks(this, Do), ks(this, Pr), ks(this, Oo), ks(this, Ae, void 0);
  }
  get modal() {
    return Ar(this, Ae);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = Lr(this, Pr, kc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = Ar(this, Ae)) == null ? void 0 : t.hide();
  }
}
Ae = /* @__PURE__ */ new WeakMap();
Do = /* @__PURE__ */ new WeakSet();
Cc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
Pr = /* @__PURE__ */ new WeakSet();
kc = function() {
  const e = Lr(this, Do, Cc).call(this);
  let t = Ar(this, Ae);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = Lr(this, Oo, Sc).call(this);
    if (!n)
      return;
    t = Qt.ensure(n, e);
  } else
    t = $c.ensure(this.container, e);
  return Ba(this, Ae, t), t.on("destroyed", () => {
    Ba(this, Ae, void 0);
  }), t;
};
Oo = /* @__PURE__ */ new WeakSet();
Sc = function() {
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
Mc.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Du);
  if (n) {
    const i = Mc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let Ec = class extends Fe {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = E(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Ec.NAME = "nav";
class Tc extends X {
}
Tc.NAME = "Nav";
Tc.Component = Ec;
function Zn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Ou({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Zn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : st(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : st(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ g(Kt, { type: n, ...a });
}
const Dt = 24 * 60 * 60 * 1e3, ot = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), fs = (e, t = /* @__PURE__ */ new Date()) => (e = ot(e), t = ot(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Wr = (e, t = /* @__PURE__ */ new Date()) => ot(e).getFullYear() === ot(t).getFullYear(), Hu = (e, t = /* @__PURE__ */ new Date()) => (e = ot(e), t = ot(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), rp = (e, t = /* @__PURE__ */ new Date()) => {
  e = ot(e), t = ot(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, op = (e, t) => fs(ot(t), e), ap = (e, t) => fs(ot(t).getTime() - Dt, e), lp = (e, t) => fs(ot(t).getTime() + Dt, e), cp = (e, t) => fs(ot(t).getTime() - 2 * Dt, e), Ir = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = ot(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Wr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, hp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Ir(e, Wr(e) ? s.month : s.full);
  if (fs(e, t))
    return i;
  const r = Ir(t, Wr(e, t) ? Hu(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, dp = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Dt * 7;
    case "oneMonth":
      return t - Dt * 31;
    case "threeMonth":
      return t - Dt * 31 * 3;
    case "halfYear":
      return t - Dt * 183;
    case "oneYear":
      return t - Dt * 365;
    case "twoYear":
      return t - 2 * (Dt * 365);
    default:
      return 0;
  }
}, za = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, za(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, za(e, "day", n, s);
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
function Bu({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Zn(i, n);
  return s = typeof s == "function" ? s(a) : st(s, a), /* @__PURE__ */ g(Fl, { ...o, children: [
    r,
    s
  ] });
}
function zu({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(Kt, { type: n, ...l })), c = (u, f) => {
    const p = [];
    for (let y = u; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Zn(i, y);
      o && (l.url = typeof o == "function" ? o(v) : st(o, v)), p.push(/* @__PURE__ */ g(Kt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function Fu({
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
      url: typeof n == "function" ? n(c) : st(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : st(a, t), i.menu = { ...i.menu, className: E((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(rc, { type: "dropdown", dropdown: i, ...o });
}
function Uu({
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
    const v = Zn(i, d);
    a && !a({ info: v, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(v) : st(l, v));
  }, p = Zn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : st(l, p), /* @__PURE__ */ g("div", { className: E("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ g(Kt, { type: s, ...c, onClick: f })
  ] });
}
let Gi = class extends _t {
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
Gi.NAME = "pager";
Gi.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Gi.ItemComponents = {
  ..._t.ItemComponents,
  link: Ou,
  info: Bu,
  nav: zu,
  "size-menu": Fu,
  goto: Uu
};
class Rc extends X {
}
Rc.NAME = "Pager";
Rc.Component = Gi;
class Nc extends X {
}
Nc.NAME = "Pick";
Nc.Component = me;
var pn, ss, is, bi;
class Ac extends V {
  constructor(n) {
    super(n);
    A(this, pn, tt());
    A(this, ss, tt());
    A(this, is, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    A(this, bi, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = C(this, pn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = C(this, ss), { current: i } = C(this, pn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: C(this, ss), children: o }) : a ? l = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, bi), children: /* @__PURE__ */ g("span", { className: "close" }) }) : l = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: C(this, is),
          onInput: C(this, is),
          ref: C(this, pn)
        }
      ),
      l
    ] });
  }
}
pn = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), bi = new WeakMap();
var mn, rs, os, as;
class Vu extends Ao {
  constructor() {
    super(...arguments);
    A(this, mn, void 0);
    A(this, rs, void 0);
    A(this, os, void 0);
    A(this, as, void 0);
    H(this, mn, tt()), H(this, rs, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), H(this, os, (n) => {
      this.props.changeState({ search: n });
    }), H(this, as, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ g("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, rs), "data-value": n.value, children: /* @__PURE__ */ g("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, mn).current) == null || s.focus();
  }
  _getClass(n) {
    return E(
      super._getClass(n),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ g(
      Ac,
      {
        inline: !0,
        ref: C(this, mn),
        defaultSearch: s,
        onSearch: C(this, os),
        onClear: C(this, as),
        placeholder: i
      }
    );
  }
  _renderTrigger(n) {
    const { state: { selections: s = [], open: i }, search: r, placeholder: o, children: a } = this.props, l = i && r;
    return !l && !s.length ? /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ g("span", { class: "caret" }, "caret")
    ];
  }
}
mn = new WeakMap(), rs = new WeakMap(), os = new WeakMap(), as = new WeakMap();
var ls, xi, $i, Ci, ki, Lc;
class qu extends Ao {
  constructor() {
    super(...arguments);
    A(this, ki);
    A(this, ls, tt());
    A(this, xi, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    A(this, $i, (n) => {
      this.props.changeState({ search: n });
    });
    A(this, Ci, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, ls).current) == null || s.focus();
  }
  _getClass(n) {
    return E(
      super._getClass(n),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ g(
      Ac,
      {
        ref: C(this, ls),
        defaultSearch: s,
        onSearch: C(this, $i),
        onClear: C(this, Ci),
        placeholder: ye(this, ki, Lc).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a } = n, [l] = i, h = r && a;
    let c;
    h ? c = this._renderSearch(n) : l ? c = /* @__PURE__ */ g("span", { className: "picker-single-selection", children: l.text ?? l.value }, "main") : c = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "main");
    const d = l && !h ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, xi), children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null;
    return [
      c,
      s,
      d,
      h ? null : /* @__PURE__ */ g("span", { className: "caret" }, "caret")
    ];
  }
}
ls = new WeakMap(), xi = new WeakMap(), $i = new WeakMap(), Ci = new WeakMap(), ki = new WeakSet(), Lc = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const Gu = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, c) => {
    c && (r.push(/* @__PURE__ */ g("span", { class: n, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var Si, Mi, Pc, Ei, Wc, Ti;
class ju extends wc {
  constructor() {
    super(...arguments);
    A(this, Mi);
    A(this, Ei);
    A(this, Si, tt());
    A(this, Ti, ({ item: n }) => {
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
      const s = ye(this, Mi, Pc).call(this);
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
    return /* @__PURE__ */ g(
      Bi,
      {
        ref: C(this, Si),
        className: "picker-menu-list",
        items: ye(this, Ei, Wc).call(this),
        onClickItem: C(this, Ti),
        ...s
      }
    );
  }
}
Si = new WeakMap(), Mi = new WeakSet(), Pc = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Ei = new WeakSet(), Wc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: f,
      text: p,
      className: y,
      ...v
    } = d;
    u === i && (a = !0);
    const w = p ?? u;
    return c.push({
      key: u,
      active: o.has(u),
      text: typeof w == "string" ? Gu(l, [w]) : /* @__PURE__ */ g(Oi, { content: w }),
      className: E(y, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = E(h[0].className, "hover")), h;
}, Ti = new WeakMap();
var Ho = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, te = (e, t, n) => (Ho(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ye = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ve = (e, t, n, s) => (Ho(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), gt = (e, t, n) => (Ho(e, t, "access private method"), n), Ln, Pt, Ce, Qe, Fn, Bo, Ic, ne, ke;
let zo = class extends me {
  constructor(t) {
    super(t), Ye(this, Qe), Ye(this, Bo), Ye(this, ne), Ye(this, Ln, void 0), Ye(this, Pt, void 0), Ye(this, Ce, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? gt(this, ne, ke).call(this, n) : gt(this, ne, ke).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), gt(this, ne, ke).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(gt(this, Qe, Fn).call(this, n)), r = s.filter((o) => !i.has(o));
      gt(this, ne, ke).call(this, r);
    }, this.clear = () => {
      gt(this, ne, ke).call(this);
    }, this.select = (n) => {
      const s = gt(this, Qe, Fn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return gt(this, ne, ke).call(this, i);
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
    return gt(this, Qe, Fn).call(this, this.state.value);
  }
  async load() {
    let t = te(this, Pt);
    t && t.abort(), t = new AbortController(), ve(this, Pt, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await Qs(s || 500), te(this, Pt) !== t || (r = await n(i, { signal: t.signal }), te(this, Pt) !== t))
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
    return ve(this, Pt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = te(this, Ln) || {}, r = {};
    if (ve(this, Ln, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const o = r.items || n.items, a = new Map(o.map((l) => [l.value, l]));
      r.selections = this.valueList.map((l) => a.get(l) || { value: l }), i.value = n.value;
    }
    Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    te(this, Ce) && clearTimeout(te(this, Ce)), ve(this, Ce, window.setTimeout(() => {
      ve(this, Ce, 0), this.update();
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
    (t = te(this, Pt)) == null || t.abort(), ve(this, Pt, void 0), ve(this, Ln, void 0), clearTimeout(te(this, Ce)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Vu : qu);
  }
};
Ln = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
Fn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
Bo = /* @__PURE__ */ new WeakSet();
Ic = function(e) {
  const t = gt(this, Qe, Fn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
ne = /* @__PURE__ */ new WeakSet();
ke = function(e) {
  const t = e === void 0 ? e : gt(this, Bo, Ic).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
zo.defaultProps = {
  ...me.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
zo.Pop = ju;
class Dc extends X {
}
Dc.NAME = "Picker";
Dc.Component = zo;
class Oc extends ht {
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
    return i && s.middleware.push(zi()), r && s.middleware.push(r === !0 ? ri() : ri(r)), o && s.middleware.push($r({ element: this.$arrow[0] })), a && s.middleware.push(Fi(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = So(t, n, () => {
      qi(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !$r || !o.arrow)
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
Oc.NAME = "Popovers";
Oc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var Fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xt = (e, t, n) => (Fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _e = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, zs = (e, t, n, s) => (Fo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Fa = (e, t, n) => (Fo(e, t, "access private method"), n), Fs, Us, Le, Dr, Vs, qs, Gs, Or;
let Hc = class extends V {
  constructor(t) {
    super(t), _e(this, Gs), _e(this, Fs, void 0), _e(this, Us, tt()), _e(this, Le, 0), _e(this, Dr, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), _e(this, Vs, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (Fa(this, Gs, Or).call(this), zs(this, Le, window.setTimeout(() => {
          r(i, n), zs(this, Le, 0);
        }, this.props.delay || 0)));
      });
    }), _e(this, qs, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, zs(this, Fs, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return xt(this, Fs);
  }
  get input() {
    return xt(this, Us).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Fa(this, Gs, Or).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: f } = t, { focus: p, value: y } = n, { id: v } = this, w = typeof y != "string" || !y.trim().length;
    let _, x, k;
    return u && (k = u === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ g("label", { for: v, class: "input-control-prefix", children: k }, "prefix")), f && !w ? x = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: xt(this, Dr),
        children: f === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(nt, { icon: f })
      }
    ) : d && u && (x = k), x && (x = /* @__PURE__ */ g("label", { for: v, class: "input-control-suffix", children: x }, "suffix")), /* @__PURE__ */ g("div", { class: E("search-box input-control", r, { focus: p, empty: w, "has-prefix-icon": _, "has-suffix-icon": x }), style: o, children: [
      _,
      /* @__PURE__ */ g(
        "input",
        {
          ref: xt(this, Us),
          id: v,
          type: "text",
          class: E("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: xt(this, Vs),
          onChange: xt(this, Vs),
          onFocus: xt(this, qs),
          onBlur: xt(this, qs)
        }
      ),
      x
    ] });
  }
};
Fs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakSet();
Or = function() {
  xt(this, Le) && clearTimeout(xt(this, Le)), zs(this, Le, 0);
};
Hc.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Bc extends X {
}
Bc.NAME = "SearchBox";
Bc.Component = Hc;
class zc extends X {
}
zc.NAME = "Toolbar";
zc.Component = _t;
function ps(e) {
  return e.split("-")[1];
}
function Uo(e) {
  return e === "y" ? "height" : "width";
}
function rn(e) {
  return e.split("-")[0];
}
function ji(e) {
  return ["top", "bottom"].includes(rn(e)) ? "x" : "y";
}
function Ua(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ji(t), l = Uo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (rn(t)) {
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
  switch (ps(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Yu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Ua(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = Ua(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function Fc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function di(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ku(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = t, p = Fc(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = di(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = di(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const Xu = Math.min, Ju = Math.max;
function Zu(e, t, n) {
  return Ju(e, Xu(t, n));
}
const Qu = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Fc(s), c = { x: i, y: r }, d = ji(o), u = Uo(d), f = await l.getDimensions(n), p = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let x = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[u]);
  const k = v / 2 - w / 2, S = h[p], T = x - f[u] - h[y], N = x / 2 - f[u] / 2 + k, L = Zu(S, N, T), O = ps(o) != null && N != L && a.reference[u] / 2 - (N < S ? h[p] : h[y]) - f[u] / 2 < 0;
  return { [d]: c[d] - (O ? N < S ? S - N : T - N : 0), data: { [d]: L, centerOffset: N - L } };
} }), tf = ["top", "right", "bottom", "left"];
tf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ef = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ui(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ef[t]);
}
function nf(e, t, n) {
  n === void 0 && (n = !1);
  const s = ps(e), i = ji(e), r = Uo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ui(o)), { main: o, cross: ui(o) };
}
const sf = { start: "end", end: "start" };
function fr(e) {
  return e.replace(/start|end/g, (t) => sf[t]);
}
const rf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = e, v = rn(s), w = rn(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [ui(o)] : function(b) {
      const R = ui(b);
      return [fr(b), R, fr(R)];
    }(o));
    d || f === "none" || x.push(...function(b, R, I, P) {
      const D = ps(b);
      let W = function(F, dt, Tt) {
        const gs = ["left", "right"], vn = ["right", "left"], ys = ["top", "bottom"], tr = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Tt ? dt ? vn : gs : dt ? gs : vn;
          case "left":
          case "right":
            return dt ? ys : tr;
          default:
            return [];
        }
      }(rn(b), I === "start", P);
      return D && (W = W.map((F) => F + "-" + D), R && (W = W.concat(W.map(fr)))), W;
    }(o, p, f, _));
    const k = [o, ...x], S = await Ku(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: b, cross: R } = nf(s, r, _);
      T.push(S[b], S[R]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((b) => b <= 0)) {
      var L;
      const b = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1, R = k[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let I = "bottom";
      switch (u) {
        case "bestFit": {
          var O;
          const P = (O = N.map((D) => [D, D.overflows.filter((W) => W > 0).reduce((W, F) => W + F, 0)]).sort((D, W) => D[1] - W[1])[0]) == null ? void 0 : O[0].placement;
          P && (I = P);
          break;
        }
        case "initialPlacement":
          I = o;
      }
      if (s !== I)
        return { reset: { placement: I } };
    }
    return {};
  } };
}, of = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = rn(a), u = ps(a), f = ji(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function at(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mt(e) {
  return at(e).getComputedStyle(e);
}
function ue(e) {
  return Vc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ss;
function Uc() {
  if (Ss)
    return Ss;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ss = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ss) : navigator.userAgent;
}
function Xt(e) {
  return e instanceof at(e).HTMLElement;
}
function wt(e) {
  return e instanceof at(e).Element;
}
function Vc(e) {
  return e instanceof at(e).Node;
}
function Va(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof at(e).ShadowRoot || e instanceof ShadowRoot;
}
function Yi(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function af(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function Hr(e) {
  const t = /firefox/i.test(Uc()), n = Mt(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function qc() {
  return !/^((?!chrome|android).)*safari/i.test(Uc());
}
function Vo(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const qa = Math.min, Un = Math.max, fi = Math.round;
function Gc(e) {
  const t = Mt(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = fi(n) !== i || fi(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function jc(e) {
  return wt(e) ? e : e.contextElement;
}
const Yc = { x: 1, y: 1 };
function on(e) {
  const t = jc(e);
  if (!Xt(t))
    return Yc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Gc(t);
  let o = (r ? fi(n.width) : n.width) / s, a = (r ? fi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Oe(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = jc(e);
  let l = Yc;
  t && (s ? wt(s) && (l = on(s)) : l = on(e));
  const h = a ? at(a) : window, c = !qc() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const y = at(a), v = s && wt(s) ? at(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = on(w), x = w.getBoundingClientRect(), k = getComputedStyle(w);
      x.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, x.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, p *= _.y, d += x.x, u += x.y, w = at(w).frameElement;
    }
  }
  return { width: f, height: p, top: u, right: d + f, bottom: u + p, left: d, x: d, y: u };
}
function he(e) {
  return ((Vc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ki(e) {
  return wt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Kc(e) {
  return Oe(he(e)).left + Ki(e).scrollLeft;
}
function lf(e, t, n) {
  const s = Xt(t), i = he(t), r = Oe(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ue(t) !== "body" || Yi(i)) && (o = Ki(t)), Xt(t)) {
      const l = Oe(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Kc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Qn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Va(e) ? e.host : null) || he(e);
  return Va(t) ? t.host : t;
}
function Ga(e) {
  return Xt(e) && Mt(e).position !== "fixed" ? e.offsetParent : null;
}
function ja(e) {
  const t = at(e);
  let n = Ga(e);
  for (; n && af(n) && Mt(n).position === "static"; )
    n = Ga(n);
  return n && (ue(n) === "html" || ue(n) === "body" && Mt(n).position === "static" && !Hr(n)) ? t : n || function(s) {
    let i = Qn(s);
    for (; Xt(i) && !Vo(i); ) {
      if (Hr(i))
        return i;
      i = Qn(i);
    }
    return null;
  }(e) || t;
}
function Xc(e) {
  const t = Qn(e);
  return Vo(t) ? e.ownerDocument.body : Xt(t) && Yi(t) ? t : Xc(t);
}
function Vn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Xc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = at(s);
  return i ? t.concat(r, r.visualViewport || [], Yi(s) ? s : []) : t.concat(s, Vn(s));
}
function Ya(e, t, n) {
  return t === "viewport" ? di(function(s, i) {
    const r = at(s), o = he(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = qc();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : wt(t) ? function(s, i) {
    const r = Oe(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Xt(s) ? on(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : di(function(s) {
    var i;
    const r = he(s), o = Ki(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Un(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Un(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Kc(s);
    const d = -o.scrollTop;
    return Mt(a || r).direction === "rtl" && (c += Un(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(he(e)));
}
const cf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = Vn(h).filter((v) => wt(v) && ue(v) !== "body"), f = null;
    const p = Mt(h).position === "fixed";
    let y = p ? Qn(h) : h;
    for (; wt(y) && !Vo(y); ) {
      const v = Mt(y), w = Hr(y);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : u = u.filter((_) => _ !== y), y = Qn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Ya(t, c, i);
    return h.top = Un(d.top, h.top), h.right = qa(d.right, h.right), h.bottom = qa(d.bottom, h.bottom), h.left = Un(d.left, h.left), h;
  }, Ya(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Xt(n), r = he(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || Yi(r)) && (o = Ki(n)), Xt(n))) {
    const h = Oe(n);
    a = on(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: wt, getDimensions: function(e) {
  return Gc(e);
}, getOffsetParent: ja, getDocumentElement: he, getScale: on, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || ja, r = this.getDimensions;
  return { reference: lf(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Mt(e).direction === "rtl" };
function hf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...wt(e) ? Vn(e) : e.contextElement ? Vn(e.contextElement) : [], ...Vn(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let f = !0;
    d = new ResizeObserver(() => {
      f || n(), f = !1;
    }), wt(e) && !a && d.observe(e), wt(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? Oe(e) : null;
  return a && function f() {
    const p = Oe(e);
    !u || p.x === u.x && p.y === u.y && p.width === u.width && p.height === u.height || n(), u = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = d) == null || f.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const df = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: cf, ...n }, r = { ...i.platform, _c: s };
  return Yu(e, t, { ...i, platform: r });
};
var qo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (qo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, He = (e, t, n, s) => (qo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), St = (e, t, n) => (qo(e, t, "access private method"), n), qn, Gn, Pn, tn, it, Br, pi, Xi, Go, jo, Jc, zr, Zc, Yo, Qc, Ko, th, Xo, eh, Fr, nh, Jo, sh, jn, Ur, ih;
const en = class extends ht {
  constructor() {
    super(...arguments), j(this, Xi), j(this, jo), j(this, zr), j(this, Yo), j(this, Ko), j(this, Xo), j(this, Fr), j(this, Jo), j(this, Ur), j(this, qn, !1), j(this, Gn, void 0), j(this, Pn, 0), j(this, tn, void 0), j(this, it, void 0), j(this, Br, void 0), j(this, pi, void 0), this.hideLater = () => {
      U(this, jn).call(this), He(this, Pn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, jn, () => {
      clearTimeout(U(this, Pn)), He(this, Pn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, tn)) == null ? void 0 : e.classList.contains(en.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, tn) || St(this, zr, Zc).call(this);
  }
  get trigger() {
    return U(this, Br) || this.element;
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
    return this.setOptions(e), !U(this, qn) && this.isHover && St(this, Ur, ih).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(en.CLASS_SHOW), St(this, Fr, nh).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, pi)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, tn)) == null || t.classList.remove(en.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, qn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, jn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
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
let ct = en;
qn = /* @__PURE__ */ new WeakMap();
Gn = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
Br = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakMap();
Xi = /* @__PURE__ */ new WeakSet();
Go = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
jo = /* @__PURE__ */ new WeakSet();
Jc = function() {
  const e = St(this, Xi, Go).call(this);
  return He(this, it, document.createElement("div")), U(this, it).style.position = this.options.strategy, U(this, it).style.width = `${e}px`, U(this, it).style.height = `${e}px`, U(this, it).style.transform = "rotate(45deg)", U(this, it);
};
zr = /* @__PURE__ */ new WeakSet();
Zc = function() {
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
  if (this.options.arrow && (t == null || t.append(St(this, jo, Jc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), He(this, tn, t), t;
};
Yo = /* @__PURE__ */ new WeakSet();
Qc = function() {
  var i;
  const e = St(this, Xi, Go).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [of(e), rf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, it) && ((i = s.middleware) == null || i.push(Qu({ element: U(this, it) }))), s;
};
Ko = /* @__PURE__ */ new WeakSet();
th = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Xo = /* @__PURE__ */ new WeakSet();
eh = function(e) {
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
Fr = /* @__PURE__ */ new WeakSet();
nh = function() {
  const e = St(this, Yo, Qc).call(this), t = St(this, Jo, sh).call(this);
  He(this, pi, hf(t, this.tooltip, () => {
    df(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = St(this, Ko, th).call(this, o);
      if (i.arrow && U(this, it)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, it).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, it).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...St(this, Xo, eh).call(this, o)
        });
      }
    });
  }));
};
Jo = /* @__PURE__ */ new WeakSet();
sh = function() {
  return U(this, Gn) || He(this, Gn, {
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
jn = /* @__PURE__ */ new WeakMap();
Ur = /* @__PURE__ */ new WeakSet();
ih = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, jn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), He(this, qn, !0);
};
ct.NAME = "tooltip";
ct.TOOLTIP_CLASS = "tooltip";
ct.CLASS_SHOW = "show";
ct.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
ct.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, ct.MENU_SELECTOR);
  if (n) {
    const i = ct.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    ct.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, ct.MENU_SELECTOR);
  if (!n)
    return;
  const s = ct.ensure(n);
  s.isHover && s.show();
});
function uf({
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
  hint: f,
  checked: p,
  actions: y,
  show: v,
  level: w = 0,
  items: _,
  ...x
}) {
  const k = Array.isArray(y) ? { items: y } : y;
  return k && (k.btnProps || (k.btnProps = { size: "sm" }), k.className = E("tree-actions not-nested-toggle", k.className)), /* @__PURE__ */ g(
    "div",
    {
      className: E("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...x,
      children: [
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ g("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(nt, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        k ? /* @__PURE__ */ g(_t, { ...k }) : null,
        /* @__PURE__ */ g(nt, { icon: u, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Zo = class extends Hi {
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
Zo.ItemComponents = {
  item: uf
};
Zo.NAME = "tree";
class rh extends X {
}
rh.NAME = "Tree";
rh.Component = Zo;
class oh extends ht {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Ad(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s, btnClass: i, tip: r, draggable: o } = this.options;
    this.$list = m('<ul class="file-list py-1"></ul>');
    const a = m(`<span class="upload-tip">${r}</span>`);
    if (!o) {
      this.$label = m(`<label class="btn ${i}" for="${t}">${n}</label>`);
      const h = s === "bottom" ? [this.$label, a, this.$list] : [this.$list, this.$label, a];
      this.$element.append(this.$input, ...h);
      return;
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(`<span class="text-primary">${n}</span>`).append(a), this.bindDragEvent();
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
      return new ct(r, { title: n }), r;
    }
    return m("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return new ct(r, { title: n }), r;
    }
    return m("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return m(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return m(`<span class="file-size text-gray">${Nd(t)}</span>`);
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
oh.DEFAULT = {
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
class ff extends oh {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = m(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(m('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, totalCountText: i } = this.options;
    this.$list = m('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = m('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 }), this.$tip = m('<div class="absolute inset-0 col justify-center items-center"></div>').append(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`), n && this.$tip.append(m(`<span class="upload-tip">${n}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = m('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(i.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
ff.DEFAULT = {
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
var cs, Ri, Ni, Ai;
class pf extends V {
  constructor() {
    super(...arguments);
    A(this, cs, tt());
    A(this, Ri, (n) => {
      n.stopPropagation(), et.show({
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
    A(this, Ni, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    A(this, Ai, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
  }
  get element() {
    return C(this, cs).current;
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
      fetch(st(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g(bo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ g("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: f } = this.state;
    let { content: p } = this.state;
    return p === void 0 && m.isPlainObject(d) && d.html && (p = /* @__PURE__ */ g("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ g("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ g(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, Ni),
        onDragEnd: C(this, Ai),
        "data-id": c,
        ref: C(this, cs),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Ri), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          p
        ]
      }
    ) });
  }
}
cs = new WeakMap(), Ri = new WeakMap(), Ni = new WeakMap(), Ai = new WeakMap();
var ah = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, qt = (e, t, n) => (ah(e, t, "read from private field"), n ? n.call(e) : t.get(e)), mt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, bt = (e, t, n) => (ah(e, t, "access private method"), n), Jt, Qo, lh, ta, ch, Vr, hh, ea, dh, mi, qr, Ji, Gr, na, uh, jr, Yr, Zi, sa;
const ia = class extends V {
  constructor() {
    super(...arguments), mt(this, Qo), mt(this, ta), mt(this, Vr), mt(this, ea), mt(this, mi), mt(this, Ji), mt(this, na), mt(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, mt(this, jr, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), mt(this, Yr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = bt(this, Vr, hh).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ g(
        pf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: qt(this, jr),
          onDragEnd: qt(this, Yr)
        },
        r.id
      );
    }) }) });
  }
};
let ra = ia;
Jt = /* @__PURE__ */ new WeakMap();
Qo = /* @__PURE__ */ new WeakSet();
lh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
ta = /* @__PURE__ */ new WeakSet();
ch = function() {
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
    } = i, [u, f] = bt(this, Qo, lh).call(this, o);
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
Vr = /* @__PURE__ */ new WeakSet();
hh = function() {
  qt(this, Jt).clear();
  let e = 0;
  const t = bt(this, ta, ch).call(this);
  return t.forEach((n) => {
    bt(this, ea, dh).call(this, n);
    const [, s, , i] = qt(this, Jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
ea = /* @__PURE__ */ new WeakSet();
dh = function(e) {
  const t = qt(this, Jt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = bt(this, na, uh).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    bt(this, Ji, Gr).call(this, n, [s, i, r, o]);
};
mi = /* @__PURE__ */ new WeakSet();
qr = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Jt).entries())
    if (s !== n && bt(t = ia, Zi, sa).call(t, i, e))
      return !1;
  return !0;
};
Ji = /* @__PURE__ */ new WeakSet();
Gr = function(e, t) {
  var n;
  qt(this, Jt).set(e, t);
  for (const [s, i] of qt(this, Jt).entries())
    s !== e && bt(n = ia, Zi, sa).call(n, i, t) && (i[1] = t[1] + t[3], bt(this, Ji, Gr).call(this, s, i));
};
na = /* @__PURE__ */ new WeakSet();
uh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (bt(this, mi, qr).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (bt(this, mi, qr).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
jr = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakMap();
Zi = /* @__PURE__ */ new WeakSet();
sa = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
mt(ra, Zi);
ra.defaultProps = {
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
class fh extends X {
}
fh.NAME = "Dashboard";
fh.Component = ra;
var ae, le;
class Ka extends V {
  constructor(n) {
    super(n);
    A(this, ae, void 0);
    A(this, le, void 0);
    H(this, ae, 0), H(this, le, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, ae) && cancelAnimationFrame(C(this, ae)), H(this, ae, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), H(this, ae, 0);
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
    n && (H(this, le, typeof n == "string" ? document : n.current), C(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), C(this, le) && C(this, le).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, y = {};
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ g(
      "div",
      {
        className: E("scrollbar", r, {
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
function ph({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...o
  }, { align: d, border: u } = e.setting, f = {
    justifyContent: d ? d === "left" ? "start" : d === "right" ? "end" : d : void 0,
    ...e.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": u === !0 || u === "left",
    "has-border-right": u === !0 || u === "right"
  }], y = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, x = [], k = [], S = {}, T = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Z(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? x : k;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: E("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : T, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      k.push(b);
  });
  const L = N;
  return /* @__PURE__ */ g(
    "div",
    {
      className: E(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...S,
      children: [
        k.length > 0 && /* @__PURE__ */ g(L, { className: E(y), style: f, ...T, children: k }),
        x
      ]
    }
  );
}
function pr({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = ph, onRenderCell: l }) {
  return /* @__PURE__ */ g("div", { className: E("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ g(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function mh({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = ph,
  onRenderCell: h,
  style: c,
  ...d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ g(
    pr,
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
    pr,
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
    pr,
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
      className: E("dtable-row", t),
      style: y,
      "data-id": e.id,
      ...d,
      children: [
        u,
        f,
        p
      ]
    }
  );
}
function mf({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(mh, { ...s }) });
}
function gf({
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ g("div", { className: E("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, d = a == null ? void 0 : a({ props: c, row: h }, q);
    return d && Object.assign(c, d), /* @__PURE__ */ g(mh, { ...c }, h.id);
  }) });
}
const gi = /* @__PURE__ */ new Map(), yi = [];
function gh(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && gi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  gi.set(n, e), t != null && t.buildIn && !yi.includes(n) && yi.push(n);
}
function ge(e, t) {
  gh(e, t);
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
function yh(e) {
  return gi.delete(e);
}
function yf(e) {
  if (typeof e == "string") {
    const t = gi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function wh(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = yf(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && wh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function wf(e = [], t = !0) {
  return t && yi.length && e.unshift(...yi), e != null && e.length ? wh([], e, /* @__PURE__ */ new Set()) : [];
}
function vh() {
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
function vf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Xa(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function mr(e, t = !1) {
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
function _f(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Xa(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
  }, f = [], p = {};
  let y = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: x, onAddCol: k } = _;
    x && Object.entries(x).forEach(([S, T]) => {
      w[S] || (w[S] = []), w[S].push(T);
    }), k && v.push(k);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: x = "", name: k } = _, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: x
    }, T = {
      name: k,
      type: x,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[x];
    N && N.forEach((D) => {
      const W = typeof D == "function" ? D.call(e, S) : D;
      W && Object.assign(S, W, _);
    });
    const { fixed: L, flex: O, minWidth: b = r, maxWidth: R = o } = S, I = Xa(S.width || i, i);
    T.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, T.width = vf(I < 1 ? Math.round(I * s) : I, b, R), v.forEach((D) => D.call(e, T)), f.push(T), p[T.name] = T;
    const P = L ? L === "left" ? d : u : c;
    P.list.push(T), P.totalWidth += T.width, P.width = P.totalWidth, T.flex && P.flexList.push(T), typeof S.order == "number" && (y = !0);
  }), y) {
    const _ = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return mr(d, !0), mr(u, !0), c.widthSetting = s - d.width - u.width, mr(c), {
    list: f,
    map: p,
    left: d,
    center: c,
    right: u
  };
}
var oa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, M = (e, t, n) => (oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (oa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), It = (e, t, n) => (oa(e, t, "access private method"), n), Xe, Wn, Pe, zt, Ee, J, Ot, Wt, In, js, wi, se, Dn, On, Kr, _h, Xr, bh, Jr, xh, Zr, $h, Ys, Qr, aa, la, Qi, vi, to, eo, ca, Ch, ha, kh, no, Sh;
let da = class extends V {
  constructor(t) {
    super(t), B(this, Kr), B(this, Xr), B(this, Jr), B(this, Zr), B(this, Ys), B(this, ca), B(this, ha), B(this, no), this.ref = tt(), B(this, Xe, 0), B(this, Wn, void 0), B(this, Pe, !1), B(this, zt, void 0), B(this, Ee, void 0), B(this, J, []), B(this, Ot, void 0), B(this, Wt, /* @__PURE__ */ new Map()), B(this, In, {}), B(this, js, void 0), B(this, wi, []), this.updateLayout = () => {
      M(this, Xe) && cancelAnimationFrame(M(this, Xe)), Y(this, Xe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Xe, 0);
      }));
    }, B(this, se, (n, s) => {
      s = s || n.type;
      const i = M(this, Wt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, Dn, (n) => {
      M(this, se).call(this, n, `window_${n.type}`);
    }), B(this, On, (n) => {
      M(this, se).call(this, n, `document_${n.type}`);
    }), B(this, aa, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return M(this, J).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), B(this, la, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), M(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), B(this, Qi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return M(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, vi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, to, (n) => {
      var a, l, h, c, d;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), M(this, J).forEach((u) => {
          var f;
          (f = u.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: u } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
            return;
          for (const p of M(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
          return;
        for (const p of M(this, J))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
            return;
      }
    }), B(this, eo, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Wn, t.id ?? `dtable-${pc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, Ee, Object.freeze(wf(t.plugins))), M(this, Ee).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(M(this, In), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = M(this, Ot)) == null ? void 0 : t.options) || M(this, zt) || vh();
  }
  get plugins() {
    return M(this, J);
  }
  get layout() {
    return M(this, Ot);
  }
  get id() {
    return M(this, Wn);
  }
  get data() {
    return M(this, In);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, zt, void 0);
  }
  componentDidMount() {
    if (M(this, Pe) ? this.forceUpdate() : It(this, Ys, Qr).call(this), M(this, J).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", M(this, to)), this.on("keydown", M(this, eo)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, js, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    M(this, J).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    M(this, Pe) ? It(this, Ys, Qr).call(this) : M(this, J).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = M(this, js)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of M(this, Wt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), M(this, Dn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), M(this, On)) : t.removeEventListener(s, M(this, se));
    M(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), M(this, Ee).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, In, {}), M(this, Wt).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = M(this, Wt).get(t);
    i ? i.push(n) : (M(this, Wt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), M(this, Dn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), M(this, On)) : (r = this.ref.current) == null || r.addEventListener(t, M(this, se)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = M(this, Wt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (M(this, Wt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), M(this, Dn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), M(this, On)) : (o = this.ref.current) == null || o.removeEventListener(t, M(this, se)));
  }
  emitCustomEvent(t, n) {
    M(this, se).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
      const { offsetLeft: p, offsetTop: y } = t;
      typeof p == "number" && (d = s + p), typeof y == "number" && (d = i + y);
    }
    const f = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (f.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (f.scrollTop = u)), Object.keys(f).length ? (this.setState(f, () => {
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
    if (!M(this, zt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Ot, void 0);
    else if (s === "options") {
      if (Y(this, zt, void 0), !M(this, Ot))
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
    return Yt(M(this, wi), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = It(this, no, Sh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      It(this, Kr, _h).call(this, t),
      It(this, Xr, bh).call(this, t),
      It(this, Jr, xh).call(this, t),
      It(this, Zr, $h).call(this, t)
    ), M(this, J).forEach((u) => {
      var p;
      const f = (p = u.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && d.push(f.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: M(this, Wn),
        className: E(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Xe = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakSet();
_h = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      mf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: M(this, Qi),
        onRenderRow: M(this, la)
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    xo,
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
Xr = /* @__PURE__ */ new WeakSet();
bh = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    gf,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: M(this, Qi),
      onRenderRow: M(this, aa)
    },
    "rows"
  );
};
Jr = /* @__PURE__ */ new WeakSet();
xh = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    xo,
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
Zr = /* @__PURE__ */ new WeakSet();
$h = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      Ka,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: M(this, vi),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      Ka,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: M(this, vi),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Ys = /* @__PURE__ */ new WeakSet();
Qr = function() {
  var e;
  Y(this, Pe, !1), (e = this.options.afterRender) == null || e.call(this), M(this, J).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
aa = /* @__PURE__ */ new WeakMap();
la = /* @__PURE__ */ new WeakMap();
Qi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
to = /* @__PURE__ */ new WeakMap();
eo = /* @__PURE__ */ new WeakMap();
ca = /* @__PURE__ */ new WeakSet();
Ch = function() {
  if (M(this, zt))
    return !1;
  const t = { ...vh(), ...M(this, Ee).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, M(this, Ee).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), Y(this, zt, t), Y(this, wi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
ha = /* @__PURE__ */ new WeakSet();
kh = function() {
  var L, O;
  const { plugins: e } = this;
  let t = M(this, zt);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var I;
    const R = (I = b.beforeLayout) == null ? void 0 : I.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Pe, !0);
      return;
    }
  }
  const r = _f(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, I) => {
    var D, W;
    const P = { data: I ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (I || (P.lazy = !0), h.push(P), ((D = t.onAddRow) == null ? void 0 : D.call(this, P, R)) !== !1) {
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
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, d);
    b && (d = b);
  }
  for (const b of e) {
    const R = (L = b.onAddRows) == null ? void 0 : L.call(this, d);
    R && (d = R);
  }
  d.forEach((b, R) => {
    u[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = t, y = f ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const x = d.length * l, k = y + v + x;
  if (typeof w == "function" && (w = w.call(this, k)), w === "auto")
    _ = k;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, k));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, Pe, !0);
      return;
    }
  } else
    _ = w;
  const S = _ - y - v, T = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: S,
    rowsHeightTotal: x,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, T);
  N && Object.assign(T, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, T);
      R && Object.assign(T, R);
    }
  }), Y(this, Ot, T);
};
no = /* @__PURE__ */ new WeakSet();
Sh = function() {
  (It(this, ca, Ch).call(this) || !M(this, Ot)) && It(this, ha, kh).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < d; p++) {
    const y = o[p];
    y.lazy && f && (y.data = f([y.id])[0], y.lazy = !1), u.push(y);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
da.addPlugin = gh;
da.removePlugin = yh;
function Ja(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const bf = {
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
      Ja(this, s);
    },
    mouseleave() {
      Ja(this, !1);
    }
  }
}, xf = ge(bf, { buildIn: !0 });
function $f(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !Mh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function Cf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function Mh() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function kf() {
  return Object.keys(this.state.checkedRows);
}
function Sf(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Za(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const Mf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Za
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
    toggleCheckRows: $f,
    isRowChecked: Cf,
    isAllRowChecked: Mh,
    getChecks: kf,
    toggleCheckable: Sf
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Za(e) })
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
      return { className: E(e.className, "is-checked") };
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
}, Ef = ge(Mf);
var Eh = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(Eh || {});
function _i(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = _i.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? _i.call(this, t.parent).level + 1 : 0, t;
}
function Tf(e) {
  return e !== void 0 ? _i.call(this, e) : this.data.nestedMap;
}
function Rf(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Th.call(this)), t) {
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
function Th() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Rh(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Rh(e, t, o.children, s + 1)));
  }
  return t;
}
function Nh(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Nh(e, r, n, s);
  }), i;
}
function Ah(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && Ah(e, r.parent, n, s, i);
}
const Nf = {
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
        const o = Nh(this, i, r, s);
        o != null && o.parent && Ah(this, o.parent, r, s, n);
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
    getNestedInfo: Tf,
    toggleRow: Rf,
    isAllCollapsed: Th,
    getNestedRowInfo: _i
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
    ), Rh(this.data.nestedMap), e.sort((t, n) => {
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
      className: E(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = E(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, Af = ge(Nf);
function Lh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: st(i, t.row.data), ...s, ...r, ...a, children: n });
}
function ua(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : st(e, n);
}
function Ph(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), Ir(n, e, s ?? n));
}
function Wh(e, t) {
  const { link: n } = t.col.setting, s = Lh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Ih(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ua(n, t, e[0])), e;
}
function Dh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Oh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Ph(s, t, e[0], i), e;
}
function so(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : ua(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const Lf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return so(e, t, !0);
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
    if (n && (e = Oh(e, t, n)), e = Dh(e, t), e = Ih(e, t), s ? e = so(e, t) : e = Wh(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = st(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, Pf = ge(Lf, { buildIn: !0 });
function gr(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ g(mc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, f = typeof u == "function" ? u(n, t) : u;
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
const Wf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: gr
    },
    avatarBtn: {
      onRenderCell: gr
    },
    avatarName: {
      onRenderCell: gr
    }
  }
}, If = ge(Wf, { buildIn: !0 }), Df = {
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
        e[0] = /* @__PURE__ */ g("a", { href: st(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, Of = ge(Df, { buildIn: !0 }), yr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Hf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    yr(t.left.list), yr(t.center.list), yr(t.right.list);
  }
}, Bf = ge(Hf), zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Eh,
  avatar: If,
  checkable: Ef,
  colHover: xf,
  group: Bf,
  nested: Af,
  renderDatetime: Ph,
  renderDatetimeCell: Oh,
  renderFormat: ua,
  renderFormatCell: Ih,
  renderHtmlCell: so,
  renderLink: Lh,
  renderLinkCell: Wh,
  renderMapCell: Dh,
  rich: Pf,
  sortType: Of
}, Symbol.toStringTag, { value: "Module" }));
class ms extends X {
}
ms.NAME = "DTable";
ms.Component = da;
ms.definePlugin = ge;
ms.removePlugin = yh;
ms.plugins = zf;
var Hh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Qa = (e, t, n) => (Hh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ff = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, tl = (e, t, n, s) => (Hh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Je;
const Uf = "nav", Ks = '[data-toggle="tab"]', Vf = "active";
class Bh extends ht {
  constructor() {
    super(...arguments), Ff(this, Je, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Ks);
    let i = t ? m(t).closest(Ks) : s.filter(`.${Vf}`);
    if (!i.length && (i = n.find(Ks).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = m(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Qa(this, Je) && clearTimeout(Qa(this, Je)), tl(this, Je, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), tl(this, Je, 0);
    }, 10)));
  }
}
Je = /* @__PURE__ */ new WeakMap();
Bh.NAME = "Tabs";
m(document).on("click.tabs.zui", Ks, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Uf}`);
  n.length && Bh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  Ul as ActionMenu,
  ql as ActionMenuNested,
  gc as Avatar,
  yc as BtnGroup,
  bc as ColorPicker,
  ht as Component,
  X as ComponentFromReact,
  et as ContextMenu,
  Oi as CustomContent,
  xo as CustomRender,
  ms as DTable,
  fh as Dashboard,
  Vt as Dropdown,
  fc as EventBus,
  Dl as HElement,
  bo as HtmlContent,
  nt as Icon,
  Gl as Menu,
  dc as Messager,
  $c as Modal,
  Qt as ModalBase,
  Mc as ModalTrigger,
  Tc as Nav,
  Rc as Pager,
  Nc as Pick,
  Dc as Picker,
  Oc as Popovers,
  V as ReactComponent,
  Bc as SearchBox,
  uc as Switch,
  Dt as TIME_DAY,
  Bh as Tabs,
  zc as Toolbar,
  ct as Tooltip,
  rh as Tree,
  oh as Upload,
  ff as UploadImgs,
  za as calculateTimestamp,
  m as cash,
  E as classes,
  rr as componentsMap,
  Ad as convertBytes,
  Dd as create,
  ot as createDate,
  jd as createPortal,
  tt as createRef,
  Rd as deepGet,
  Td as deepGetPath,
  Qs as delay,
  Gf as dom,
  Nd as formatBytes,
  Ir as formatDate,
  hp as formatDateSpan,
  st as formatString,
  bl as getClassList,
  dp as getTimeBeforeDesc,
  q as h,
  jf as hh,
  Fd as htm,
  Yt as i18n,
  cp as isDBY,
  fs as isSameDay,
  Hu as isSameMonth,
  rp as isSameWeek,
  Wr as isSameYear,
  op as isToday,
  lp as isTomorrow,
  Z as isValidElement,
  ap as isYesterday,
  Ia as nativeEvents,
  Xn as render,
  Ol as renderCustomContent,
  Vd as renderCustomResult,
  Cu as store,
  xl as storeData,
  Id as takeData
};
//# sourceMappingURL=zui.js.map
