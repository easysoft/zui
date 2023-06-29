var Ji = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (Ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Ji(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var ye = (e, t, n) => (Ji(e, t, "access private method"), n);
const Gt = document, Ys = window, Qa = Gt.documentElement, He = Gt.createElement.bind(Gt), tl = He("div"), Zi = He("table"), Hh = He("tbody"), da = He("tr"), { isArray: Ri, prototype: el } = Array, { concat: Bh, filter: to, indexOf: nl, map: sl, push: zh, slice: il, some: eo, splice: Fh } = el, Uh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Vh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, qh = /<.+>/, Gh = /^\w+$/;
function no(e, t) {
  const n = jh(t);
  return !e || !n && !Pe(t) && !G(t) ? [] : !n && Vh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Gh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
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
      if (s = Uh.test(t) && Pe(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : qh.test(t) ? al(t) : fr(i) ? i.find(t) : Q(i) ? g(i).find(t) : no(t, i), !s)
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
const $ = Ni.prototype, g = $.init;
g.fn = g.prototype = $;
$.length = 0;
$.splice = Fh;
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
function jh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Yh(e) {
  return !!e && e.nodeType === 3;
}
function Kh(e) {
  return typeof e == "boolean";
}
function Be(e) {
  return typeof e == "function";
}
function Q(e) {
  return typeof e == "string";
}
function ot(e) {
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
g.isWindow = pn;
g.isFunction = Be;
g.isArray = Ri;
g.isNumeric = rl;
g.isPlainObject = so;
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
g.each = X;
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
  const t = Kh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ks(t, g, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (Ri(r[o]) || so(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Ks(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
g.extend = Ks;
$.extend = function(e) {
  return Ks($, e);
};
const Xh = /\S+/g;
function Ai(e) {
  return Q(e) ? e.match(Xh) || [] : [];
}
$.toggleClass = function(e, t) {
  const n = Ai(e), s = !ot(t);
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
function Jh(e, t) {
  if (e) {
    if (Q(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return jn(n) ? void 0 : n;
      }
      return ot(t) ? this : jn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
$.attr = Jh;
$.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
$.hasClass = function(e) {
  return !!e && eo.call(this, (t) => G(t) && t.classList.contains(e));
};
$.get = function(e) {
  return ot(e) ? il.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function Zh(e) {
  return ot(e) ? this.get().map((t) => G(t) || Yh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
$.text = Zh;
function jt(e, t, n) {
  if (!G(e))
    return;
  const s = Ys.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function kt(e, t) {
  return parseInt(jt(e, t), 10) || 0;
}
function ua(e, t) {
  return kt(e, `border${t ? "Left" : "Top"}Width`) + kt(e, `padding${t ? "Left" : "Top"}`) + kt(e, `padding${t ? "Right" : "Bottom"}`) + kt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Qi = {};
function Qh(e) {
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
  return g(to.call(this, (n, s) => t.call(n, s, n)));
};
function fe(e, t) {
  return t ? e.filter(t) : e;
}
$.detach = function(e) {
  return fe(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const td = /^\s*<(\w+)[^>]*>/, ed = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, pa = {
  "*": tl,
  tr: Hh,
  td: da,
  th: da,
  thead: Zi,
  tbody: Zi,
  tfoot: Zi
};
function al(e) {
  if (!Q(e))
    return [];
  if (ed.test(e))
    return [He(RegExp.$1)];
  const t = td.test(e) && RegExp.$1, n = pa[t] || pa["*"];
  return n.innerHTML = e, g(n.childNodes).detach().get();
}
g.parseHTML = al;
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
      h.length && zh.apply(i, h);
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
function nd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ml.test(n.type)) {
      const i = Ri(e) ? sl.call(e, String) : jn(e) ? [] : [String(e)];
      s ? X(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ot(e) || jn(e) ? "" : e;
  }) : this[0] && ll(this[0]);
}
$.val = nd;
$.is = function(e) {
  const t = Li(e);
  return eo.call(this, (n, s) => t.call(n, s, n));
};
g.guid = 1;
function Mt(e) {
  return e.length > 1 ? to.call(e, (t, n, s) => nl.call(s, t) === n) : e;
}
g.unique = Mt;
$.add = function(e, t) {
  return g(Mt(this.get().concat(g(e, t).get())));
};
$.children = function(e) {
  return fe(g(Mt(Zt(this, (t) => t.children))), e);
};
$.parent = function(e) {
  return fe(g(Mt(Zt(this, "parentNode"))), e);
};
$.index = function(e) {
  const t = e ? g(e)[0] : this[0], n = e ? this : g(t).parent().children();
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
  return fe(g(Mt(Zt(this, (t) => g(t).parent().children().not(t)))), e);
};
$.find = function(e) {
  return g(Mt(Zt(this, (t) => no(e, t))));
};
const sd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, id = /^$|^module$|\/(java|ecma)script/i, rd = ["type", "src", "nonce", "noModule"];
function od(e, t) {
  const n = g(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (id.test(i.type) && Qa.contains(i)) {
      const r = He("script");
      r.text = i.textContent.replace(sd, ""), X(rd, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ad(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && od(t, e.ownerDocument);
}
function pe(e, t, n, s, i, r, o, a) {
  return X(e, (l, h) => {
    X(g(h), (c, d) => {
      X(g(t), (u, f) => {
        const p = n ? d : f, y = n ? f : d, v = n ? c : u;
        ad(p, v ? y.cloneNode(!0) : y, s, i, !v);
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
function ld(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ot(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? g(s).empty().append(e) : s.innerHTML = e);
  });
}
$.html = ld;
$.appendTo = function(e) {
  return pe(arguments, this, !0, !1, !0);
};
$.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = g(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
$.before = function() {
  return pe(arguments, this, !1, !0);
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
  return g(Mt(Zt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
$.next = function(e, t, n) {
  return fe(g(Mt(Zt(this, "nextElementSibling", t, n))), e);
};
$.nextAll = function(e) {
  return this.next(e, !0);
};
$.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
$.parents = function(e, t) {
  return fe(g(Mt(Zt(this, "parentElement", !0, t))), e);
};
$.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
$.prev = function(e, t, n) {
  return fe(g(Mt(Zt(this, "previousElementSibling", t, n))), e);
};
$.prevAll = function(e) {
  return this.prev(e, !0);
};
$.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
$.map = function(e) {
  return g(Bh.apply([], sl.call(this, (t, n) => e.call(t, n, t))));
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
  return g(il.call(this, e, t));
};
const cd = /-([a-z])/g;
function io(e) {
  return e.replace(cd, (t, n) => n.toUpperCase());
}
$.ready = function(e) {
  const t = () => setTimeout(e, 0, g);
  return Gt.readyState !== "loading" ? t() : Gt.addEventListener("DOMContentLoaded", t), this;
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
      const r = g(i).offset();
      n.top -= r.top + kt(i, "borderTopWidth"), n.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - kt(e, "marginTop"),
    left: n.left - kt(e, "marginLeft")
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
const hd = /^--/;
function ro(e) {
  return hd.test(e);
}
const tr = {}, { style: dd } = tl, ud = ["webkit", "moz", "ms"];
function fd(e, t = ro(e)) {
  if (t)
    return e;
  if (!tr[e]) {
    const n = io(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${ud.join(`${s} `)}${s}`.split(" ");
    X(i, (r, o) => {
      if (o in dd)
        return tr[e] = o, !1;
    });
  }
  return tr[e];
}
const pd = {
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
  return !n && !pd[e] && rl(t) ? `${t}px` : t;
}
function gd(e, t) {
  if (Q(e)) {
    const n = ro(e);
    return e = fd(e, n), arguments.length < 2 ? this[0] && jt(this[0], e, n) : e ? (t = hl(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
$.css = gd;
function dl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const md = /^\s+|\s+$/;
function ga(e, t) {
  const n = e.dataset[t] || e.dataset[io(t)];
  return md.test(n) ? n : dl(JSON.parse, n);
}
function yd(e, t, n) {
  n = dl(JSON.stringify, n), e.dataset[io(t)] = n;
}
function wd(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ga(this[0], s);
    return n;
  }
  if (Q(e))
    return arguments.length < 2 ? this[0] && ga(this[0], e) : ot(t) ? this : this.each((n, s) => {
      yd(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
$.data = wd;
function ul(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
X([!0, !1], (e, t) => {
  X(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return pn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Pe(this[0]) ? ul(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? kt(this[0], `margin${n ? "Top" : "Left"}`) + kt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
X(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  $[n] = function(s) {
    if (!this[0])
      return ot(s) ? void 0 : this;
    if (!arguments.length)
      return pn(this[0]) ? this[0].document.documentElement[`client${t}`] : Pe(this[0]) ? ul(this[0], t) : this[0].getBoundingClientRect()[n] - ua(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!G(o))
        return;
      const a = jt(o, "boxSizing");
      o.style[n] = hl(n, i + (a === "border-box" ? ua(o, !e) : 0));
    });
  };
});
const ma = "___cd";
$.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = fa(n);
    (ot(e) ? s : e) ? (n.style.display = n[ma] || "", fa(n) && (n.style.display = Qh(n.tagName))) : s || (n[ma] = jt(n, "display"), n.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const ya = "___ce", oo = ".", ao = { focus: "focusin", blur: "focusout" }, fl = { mouseenter: "mouseover", mouseleave: "mouseout" }, vd = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
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
    const o = vd.test(r) ? "MouseEvents" : "HTMLEvents";
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
function _d(e, t, n, s, i) {
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
  if (ot(e))
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
  return g(e).replaceWith(this), this;
};
function bd(e, t, n, s, i) {
  if (!Q(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return Q(t) || (ot(t) || jn(t) ? t = "" : ot(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Be(s) || (s = n, n = void 0), s ? (X(Ai(e), (r, o) => {
    const [a, l] = co(o), h = lo(a), c = a in fl, d = a in ao;
    h && this.each((u, f) => {
      if (!G(f) && !Pe(f) && !pn(f))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !gl(l, y.namespace.split(oo)) || !t && (d && (y.target !== f || y.___ot === h) || c && y.relatedTarget && f.contains(y.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = y.target;
          for (; !ol(_, t); )
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
        i && Xs(f, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || g.guid++, _d(f, h, l, t, p);
    });
  }), this) : this;
}
$.on = bd;
function xd(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
$.one = xd;
const $d = /\r?\n/g;
function Cd(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace($d, `\r
`))}`;
}
const kd = /file|reset|submit|button|image/i, ml = /radio|checkbox/i;
$.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    X(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || kd.test(i.type) || ml.test(i.type) && !i.checked)
        return;
      const r = ll(i);
      if (!ot(r)) {
        const o = Ri(r) ? r : [r];
        X(o, (a, l) => {
          e += Cd(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = g;
function Sd(e, t) {
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
function Ed(e, t, n) {
  try {
    const s = Sd(e, t), i = s[s.length - 1];
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
function yl(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / ho[n]).toFixed(t) + n);
}
const Md = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * ho[s];
};
let uo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ie;
function Td() {
  return uo;
}
function Rd(e) {
  uo = e.toLowerCase();
}
function wl(e, t) {
  ie || (ie = {}), typeof e == "string" && (e = { [e]: t ?? {} }), g.extend(!0, ie, e);
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
    if (a = Ed(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? et(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Nd(e, t, n, s) {
  return Yt(void 0, e, t, n, s);
}
Yt.addLang = wl;
Yt.getLang = Nd;
Yt.getCode = Td;
Yt.setCode = Rd;
wl({
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
function vl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? vl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...e) => vl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
g.classes = M;
g.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = g(s);
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
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, g(e).dataset(), i), xn.set(e, i)) : xn.delete(e);
}
function Ad(e, t) {
  let n = xn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, g(e).dataset(), n)), t === void 0 ? n : n[t];
}
g.fn.dataset = g.fn.data;
g.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Ad(this[0], t) : this.each((s, i) => _l(i, t, n));
};
g.fn.removeData = function(e = null) {
  return this.each((t, n) => _l(n, e));
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
const Js = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), er = /* @__PURE__ */ new Map();
function Ld(e, t, n) {
  const { zui: s } = window;
  er.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && er.set(r.toLowerCase(), s[r]);
  });
  const i = er.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
g(() => {
  g("[data-zui]").each(function() {
    const t = g(this).dataset(), n = t.zui;
    delete t.zui, Ld(n, this, t);
  });
});
function bl(e, t) {
  const n = g(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, d = a || h, u = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= u && i + o <= d;
  const f = i <= d && i + o >= 0, p = s <= u && s + r >= 0;
  return f && p;
}
g.fn.isVisible = function(e) {
  return this.each((t, n) => {
    bl(n, e);
  });
};
function fo(e, t, n = !1) {
  const s = g(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${g.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    fo(s, r.innerHTML), r.remove();
  });
}
g.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
g.fn.runJS = function(e) {
  return this.each((t, n) => {
    fo(n, e);
  });
};
const Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: bl,
  runJS: fo
}, Symbol.toStringTag, { value: "Module" }));
var Pi, z, xl, K, ke, wa, $l, pr, Zs = {}, Cl = [], Pd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, po = Array.isArray;
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
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++xl };
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
function Sl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Sl(e);
  }
}
function va(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !Qs.__r++ || wa !== z.debounceRendering) && ((wa = z.debounceRendering) || $l)(Qs);
}
function Qs() {
  var e, t, n, s, i, r, o, a;
  for (ke.sort(pr); e = ke.shift(); )
    e.__d && (t = ke.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ce({}, r)).__v = r.__v + 1, go(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Yn(r), r.__h), Nl(s, r), r.__e != o && Sl(r)), ke.length > t && ke.sort(pr));
  Qs.__r = 0;
}
function El(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, f, p, y, v, w = s && s.__k || Cl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? Ss(null, f, null, null, f) : po(f) ? Ss(mn, { children: f }, null, null, null) : f.__b > 0 ? Ss(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
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
      go(e, f, u = u || Zs, i, r, o, a, l, h), p = f.__e, (d = f.ref) && u.ref != d && (v || (v = []), u.ref && v.push(u.ref, null, f), v.push(d, f.__c || p, f)), p != null ? (y == null && (y = p), typeof f.type == "function" && f.__k === u.__k ? f.__d = l = Ml(f, l, e) : l = Tl(e, f, u, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = Yn(u));
    }
  for (n.__e = y, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = Rl(s).nextSibling), Ll(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      Al(v[c], v[++c], v[++c]);
}
function Ml(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? Ml(s, t, n) : Tl(n, s, s, i, s.__e, t));
  return t;
}
function Tl(e, t, n, s, i, r) {
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
function Rl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = Rl(n)))
        return s;
  }
  return null;
}
function Wd(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || ti(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || ti(e, r, t[r], n[r], s);
}
function _a(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Pd.test(t) ? n : n + "px";
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
            n && t in n || _a(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || _a(e.style, t, n[t]);
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
  var h, c, d, u, f, p, y, v, w, _, x, k, S, T, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = Dd), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ce({}, c.__s)), ce(c.__s, A.getDerivedStateFromProps(v, c.__s))), u = c.props, f = c.state, c.__v = t, d)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
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
        if (c.context = _, c.props = v, c.__P = e, k = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, k && k(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = ce(ce({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(u, f)), El(e, po(N = h != null && h.type === mn && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Id(n.__e, t, n, s, i, r, o, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function Nl(e, t) {
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
function Id(e, t, n, s, i, r, o, a) {
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
    if (r = r && Pi.call(e.childNodes), h = (d = n.props || Zs).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, p = 0; p < e.attributes.length; p++)
          d[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Wd(e, u, d, i, a), c)
      t.__k = [];
    else if (El(e, po(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Yn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && kl(r[p]);
    a || ("value" in u && (p = u.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== d.value) && ti(e, "value", p, d.value, !1), "checked" in u && (p = u.checked) !== void 0 && p !== e.checked && ti(e, "checked", p, d.checked, !1));
  }
  return e;
}
function Al(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function Ll(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Al(s, null, t)), (s = e.__c) != null) {
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
      s[i] && Ll(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Dd(e, t, n) {
  return this.constructor(e, n);
}
function Kn(e, t, n) {
  var s, i, r;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], go(t, e = (!s && n || t).__k = q(mn, null, [e]), i || Zs, Zs, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? Pi.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), Nl(r, e);
}
Pi = Cl.slice, z = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, xl = 0, K = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof e == "function" && (e = e(ce({}, n), this.props)), e && ce(n, e), e != null && this.__v && (t && this._sb.push(t), va(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), va(this));
}, V.prototype.render = mn, ke = [], $l = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Qs.__r = 0;
var Pl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, Pl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, $a = /* @__PURE__ */ new Map();
function Od(e) {
  var t = $a.get(this);
  return t || (t = /* @__PURE__ */ new Map(), $a.set(this, t)), (t = Pl(this, t.get(e) || (t.set(e, t = function(n) {
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
const Uf = Od.bind(q);
function Wl(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return q(t, { ref: o, class: M(n), style: s, ...a, ...r }, i);
}
var Hd = 0;
function m(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Hd, __source: i, __self: r };
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
    this.props.executeScript && g(C(this, Qn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ m(Wl, { forwardRef: C(this, Qn), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
Qn = new WeakMap();
function Bd(e) {
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
      w != null && (typeof w == "object" && !K(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ m("div", { className: M(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(u, w.style), w.className && d.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(d),
    style: u,
    ...c
  }, f];
}
function yo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Bd(t);
  return q(e, n, ...s);
}
function Il(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => Il(s, t, n)) : K(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ m(mo, { ...e }) : /* @__PURE__ */ m(Wl, { ...e }) : e;
}
function Wi(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = Il(t, n, s);
  return i == null || typeof i == "boolean" ? null : K(i) ? i : /* @__PURE__ */ m(mn, { children: i });
}
function it(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (K(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(t.startsWith("icon-") ? t : `icon-${t}`);
  else if (typeof t == "object") {
    const { className: r, ...o } = t;
    return i.push(r), Object.assign(s, o), /* @__PURE__ */ m(it, { className: M(i), ...s });
  }
  return /* @__PURE__ */ m("i", { className: M(i), ...s });
}
function zd(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Fd(e) {
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
    q(zd, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Ud(e, t) {
  const n = q(Fd, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var Dl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Fe = (e, t, n) => (Dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ys = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ue = (e, t, n, s) => (Dl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), _e, $n, Es, Ms;
const Ol = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    ys(this, _e, void 0), ys(this, $n, void 0), ys(this, Es, void 0), ys(this, Ms, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = g(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = g.guid++;
    if (Ue(this, Es, a), Ue(this, $n, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ue(this, _e, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
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
    return Fe(this, _e);
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
    Ue(this, _e, void 0), Ue(this, $n, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && g.extend(Fe(this, _e), e), Fe(this, _e);
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
let ht = Ol;
_e = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
ht.DEFAULT = {};
ht.NAME = Ol.name;
ht.MULTI_INSTANCE = !1;
class J extends ht {
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
function Vd({
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
function Hl({
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
    typeof p == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    /* @__PURE__ */ m(it, { icon: h }),
    /* @__PURE__ */ m("span", { className: "text", children: c }),
    /* @__PURE__ */ m(Wi, { content: i }),
    s,
    /* @__PURE__ */ m(it, { icon: u })
  ];
  return q(t, {
    className: M(n, { disabled: a, active: l }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...v,
    ...r
  }, ...w);
}
function qd({
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
  }, n, /* @__PURE__ */ m(Wi, { content: r }), i);
}
function Gd({
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
function jd({ type: e, ...t }) {
  return /* @__PURE__ */ m(yo, { ...t });
}
function Bl({
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
  }, /* @__PURE__ */ m(Wi, { content: s }), n);
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
    const { commonItemProps: s, onClickItem: i, itemRenderProps: r } = e, o = { ...t };
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = M(o.className), r && Object.assign(o, r(o)), o;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const p = i[t.type || "item"];
        if (p)
          return /* @__PURE__ */ m(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (K(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || gr.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(f, {
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
    return /* @__PURE__ */ m(
      "li",
      {
        className: M(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ m(e, { ...n }),
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
    return /* @__PURE__ */ m(f, { class: M(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let ze = gr;
ze.ItemComponents = {
  divider: Vd,
  item: Hl,
  heading: qd,
  space: Gd,
  custom: jd,
  basic: Bl
};
ze.ROOT_TAG = "menu";
ze.NAME = "action-menu";
class zl extends J {
}
zl.NAME = "ActionMenu";
zl.Component = ze;
function Yd({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ m(Hl, { ...s });
}
var Fl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ut = (e, t, n) => (Fl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), nr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Kd = (e, t, n, s) => (Fl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ts, Nt, Cn;
let Ii = class extends ze {
  constructor(t) {
    super(t), nr(this, Ts, /* @__PURE__ */ new Set()), nr(this, Nt, void 0), nr(this, Cn, (n, s, i) => {
      g(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Kd(this, Nt, t.nestedShow === void 0), ut(this, Nt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    return /* @__PURE__ */ m(s, { ...i, "data-level": i.level });
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
    ut(this, Ts).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, Cn).bind(this, r, !0),
        onMouseLeave: ut(this, Cn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, Cn).call(this, r, void 0, h), l == null || l(h);
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
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, Ts).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
Ts = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Ii.ItemComponents = {
  item: Yd
};
class Ul extends J {
}
Ul.NAME = "ActionMenuNested";
Ul.Component = Ii;
let Di = class extends Ii {
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
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Di.NAME = "menu";
class Vl extends J {
}
Vl.NAME = "Menu";
Vl.Component = Di;
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
        className: M("btn", n, r, {
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
      d ? /* @__PURE__ */ m(it, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(it, { icon: p }),
      T ? null : /* @__PURE__ */ m("span", { className: "text", children: d ? f : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ m(it, { icon: v }),
      d ? null : w ? /* @__PURE__ */ m("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Xd({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Kt, { type: n, ...s });
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
function Ca(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = hs(t), l = wo(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Te(t)) {
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
  switch (cs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Jd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = Ca(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = Ca(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function ds(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ql(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function ei(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Gl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = ds(t, e), p = ql(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = ei(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = ei(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const mr = Math.min, Zd = Math.max;
function yr(e, t, n) {
  return Zd(e, mr(t, n));
}
const wr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = ds(e, t) || {};
  if (l == null)
    return {};
  const c = ql(h), d = { x: n, y: s }, u = hs(i), f = wo(u), p = await o.getDimensions(l), y = u === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", x = r.reference[f] + r.reference[u] - d[u] - r.floating[f], k = d[u] - r.reference[u], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = S ? S[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement(S)) || (T = a.floating[_] || r.floating[f]);
  const N = x / 2 - k / 2, A = T / 2 - p[f] / 2 - 1, O = mr(c[v], A), b = mr(c[w], A), R = O, I = T - p[f] - b, P = T / 2 - p[f] / 2 + N, D = yr(R, P, I), W = cs(i) != null && P != D && r.reference[f] / 2 - (P < R ? O : b) - p[f] / 2 < 0 ? P < R ? R - P : I - P : 0;
  return { [u]: d[u] - W, data: { [u]: D, centerOffset: P - D + W } };
} }), Qd = ["top", "right", "bottom", "left"];
Qd.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const tu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tu[t]);
}
function eu(e, t, n) {
  n === void 0 && (n = !1);
  const s = cs(e), i = hs(e), r = wo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ni(o)), { main: o, cross: ni(o) };
}
const nu = { start: "end", end: "start" };
function sr(e) {
  return e.replace(/start|end/g, (t) => nu[t]);
}
const Oi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = ds(e, t), v = Te(s), w = Te(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [ni(o)] : function(R) {
      const I = ni(R);
      return [sr(R), I, sr(I)];
    }(o));
    d || f === "none" || x.push(...function(R, I, P, D) {
      const W = cs(R);
      let F = function(dt, Tt, gs) {
        const yn = ["left", "right"], ms = ["right", "left"], Xi = ["top", "bottom"], Oh = ["bottom", "top"];
        switch (dt) {
          case "top":
          case "bottom":
            return gs ? Tt ? ms : yn : Tt ? yn : ms;
          case "left":
          case "right":
            return Tt ? Xi : Oh;
          default:
            return [];
        }
      }(Te(R), P === "start", D);
      return W && (F = F.map((dt) => dt + "-" + W), I && (F = F.concat(F.map(sr)))), F;
    }(o, p, f, _));
    const k = [o, ...x], S = await Gl(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: R, cross: I } = eu(s, r, _);
      T.push(S[R], S[I]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, I = k[R];
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
}, vo = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Te(a), u = cs(a), f = hs(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = ds(o, r);
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function su(e) {
  return e === "x" ? "y" : "x";
}
const vr = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ds(e, t), h = { x: n, y: s }, c = await Gl(t, l), d = hs(Te(i)), u = su(d);
    let f = h[d], p = h[u];
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      f = yr(f + c[d === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      p = yr(p + c[u === "y" ? "top" : "left"], p, p - c[v]);
    }
    const y = a.fn({ ...t, [d]: f, [u]: p });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function ct(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function yt(e) {
  return ct(e).getComputedStyle(e);
}
function jl(e) {
  return e instanceof ct(e).Node;
}
function de(e) {
  return jl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  return e instanceof ct(e).HTMLElement;
}
function Ft(e) {
  return e instanceof ct(e).Element;
}
function ka(e) {
  return typeof ShadowRoot < "u" && (e instanceof ct(e).ShadowRoot || e instanceof ShadowRoot);
}
function Xn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function iu(e) {
  return ["table", "td", "th"].includes(de(e));
}
function _r(e) {
  const t = _o(), n = yt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function _o() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Hi(e) {
  return ["html", "body", "#document"].includes(de(e));
}
const Sa = Math.min, On = Math.max, si = Math.round, ws = Math.floor, We = (e) => ({ x: e, y: e });
function Yl(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = vt(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = si(n) !== r || si(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function bo(e) {
  return Ft(e) ? e : e.contextElement;
}
function en(e) {
  const t = bo(e);
  if (!vt(t))
    return We(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Yl(t);
  let o = (r ? si(n.width) : n.width) / s, a = (r ? si(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const Ea = We(0);
function Kl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !_o())
    return Ea;
  const r = e ? ct(e) : window;
  return !n || t && n !== r ? Ea : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Ie(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = bo(e);
  let o = We(1);
  t && (s ? Ft(s) && (o = en(s)) : o = en(e));
  const a = Kl(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = ct(r), f = s && Ft(s) ? ct(s) : s;
    let p = u.frameElement;
    for (; p && s && f !== u; ) {
      const y = en(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, x = v.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += x, p = ct(p).frameElement;
    }
  }
  return ei({ width: c, height: d, x: l, y: h });
}
function Ut(e) {
  return ((jl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Bi(e) {
  return Ft(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Xl(e) {
  return Ie(Ut(e)).left + Bi(e).scrollLeft;
}
function gn(e) {
  if (de(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ka(e) && e.host || Ut(e);
  return ka(t) ? t.host : t;
}
function Jl(e) {
  const t = gn(e);
  return Hi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Xn(t) ? t : Jl(t);
}
function ii(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Jl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ct(s);
  return i ? t.concat(r, r.visualViewport || [], Xn(s) ? s : []) : t.concat(s, ii(s));
}
function Ma(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = ct(i), a = Ut(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = _o();
        (!f || f && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Ut(i), o = Bi(i), a = i.ownerDocument.body, l = On(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = On(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Xl(i);
      const d = -o.scrollTop;
      return yt(a).direction === "rtl" && (c += On(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Ut(e));
  else if (Ft(t))
    s = function(i, r) {
      const o = Ie(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = vt(i) ? en(i) : We(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Kl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return ei(s);
}
function Zl(e, t) {
  const n = gn(e);
  return !(n === t || !Ft(n) || Hi(n)) && (yt(n).position === "fixed" || Zl(n, t));
}
function Ta(e, t) {
  return vt(e) && yt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Ra(e, t) {
  const n = ct(e);
  if (!vt(e))
    return n;
  let s = Ta(e, t);
  for (; s && iu(s) && yt(s).position === "static"; )
    s = Ta(s, t);
  return s && (de(s) === "html" || de(s) === "body" && yt(s).position === "static" && !_r(s)) ? n : s || function(i) {
    let r = gn(i);
    for (; vt(r) && !Hi(r); ) {
      if (_r(r))
        return r;
      r = gn(r);
    }
    return null;
  }(e) || n;
}
function ru(e, t, n) {
  const s = vt(t), i = Ut(t), r = n === "fixed", o = Ie(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = We(0);
  if (s || !s && !r)
    if ((de(t) !== "body" || Xn(i)) && (a = Bi(t)), vt(t)) {
      const h = Ie(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Xl(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const ou = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = ii(h).filter((v) => Ft(v) && de(v) !== "body"), f = null;
    const p = yt(h).position === "fixed";
    let y = p ? gn(h) : h;
    for (; Ft(y) && !Hi(y); ) {
      const v = yt(y), w = _r(y);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Xn(y) && !w && Zl(h, y)) ? u = u.filter((_) => _ !== y) : f = v, y = gn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Ma(t, c, i);
    return h.top = On(d.top, h.top), h.right = Sa(d.right, h.right), h.bottom = Sa(d.bottom, h.bottom), h.left = On(d.left, h.left), h;
  }, Ma(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = vt(n), r = Ut(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = We(1);
  const l = We(0);
  if ((i || !i && s !== "fixed") && ((de(n) !== "body" || Xn(r)) && (o = Bi(n)), vt(n))) {
    const h = Ie(n);
    a = en(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ft, getDimensions: function(e) {
  return Yl(e);
}, getOffsetParent: Ra, getDocumentElement: Ut, getScale: en, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Ra, r = this.getDimensions;
  return { reference: ru(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => yt(e).direction === "rtl" };
function xo(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = bo(e), c = i || r ? [...h ? ii(h) : [], ...ii(t)] : [];
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
      const { left: A, top: O, width: b, height: R } = y.getBoundingClientRect();
      if (T || v(), !b || !R)
        return;
      const I = ws(O), P = ws(x.clientWidth - (A + b)), D = ws(x.clientHeight - (O + R)), W = ws(A);
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
  let p = l ? Ie(e) : null;
  return l && function y() {
    const v = Ie(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, u = requestAnimationFrame(y);
  }(), n(), () => {
    c.forEach((y) => {
      i && y.removeEventListener("scroll", n), r && y.removeEventListener("resize", n);
    }), d && d(), f && f.disconnect(), f = null, l && cancelAnimationFrame(u);
  };
}
const zi = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: ou, ...n }, r = { ...i.platform, _c: s };
  return Jd(e, t, { ...i, platform: r });
};
let au = class extends Di {
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
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var $o = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rt = (e, t, n) => ($o(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ve = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vs = (e, t, n, s) => ($o(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Na = (e, t, n) => ($o(e, t, "access private method"), n), ee, kn, Rs, Ns, br, Ql, xr, tc;
const ir = "show", lu = '[data-toggle="contextmenu"]';
class tt extends ht {
  constructor() {
    super(...arguments), Ve(this, br), Ve(this, xr), Ve(this, ee, void 0), Ve(this, kn, void 0), Ve(this, Rs, void 0), Ve(this, Ns, void 0);
  }
  get isShown() {
    return Rt(this, ee) && g(Rt(this, ee)).hasClass(ir);
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
    return this.isShown || (vs(this, Rs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (g(this.menu).addClass(ir), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Rt(this, Ns)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (g(Rt(this, ee)).removeClass(ir), this.emit("hidden"), !0);
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
      s = g(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = g(document).find(i)), !(s != null && s.length)) {
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
    }), vs(this, ee, s[0]), s[0];
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
    vs(this, Ns, xo(n, s, () => {
      zi(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        g(s).css({ left: `${i}px`, top: `${r}px` });
        const l = a.split("-")[0], h = Na(this, br, Ql).call(this, l);
        if (o.arrow && this.arrowEl) {
          const { x: c, y: d } = o.arrow;
          g(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...Na(this, xr, tc).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Kn(q(au, t), this.menu), !0);
  }
  getPopperElement() {
    return Rt(this, kn) || vs(this, kn, {
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
    }), Rt(this, kn);
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
kn = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
br = /* @__PURE__ */ new WeakSet();
Ql = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
xr = /* @__PURE__ */ new WeakSet();
tc = function(e) {
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
g(document).on(`contextmenu${tt.NAMESPACE}`, (e) => {
  const t = g(e.target);
  if (t.closest(`.${tt.MENU_CLASS}`).length)
    return;
  const n = t.closest(lu).not(":disabled,.disabled");
  if (n.length) {
    const s = `${tt.KEY}:options`, i = n.data(s), r = tt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${tt.NAMESPACE}`, tt.clear.bind(tt));
var Co = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Sn = (e, t, n) => (Co(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $r = (e, t, n, s) => (Co(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), cu = (e, t, n) => (Co(e, t, "access private method"), n), Hn, En, ri, Cr, ec;
const Aa = '[data-toggle="dropdown"]', nc = class extends tt {
  constructor() {
    super(...arguments), _s(this, Cr), _s(this, Hn, !1), _s(this, En, 0), this.hideLater = () => {
      Sn(this, ri).call(this), $r(this, En, window.setTimeout(this.hide.bind(this), 100));
    }, _s(this, ri, () => {
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
    (t == null ? void 0 : t.clearOthers) !== !1 && nc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Sn(this, Hn) && this.isHover && cu(this, Cr, ec).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Sn(this, Hn) && g(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(vo(t)), (s = e.middleware) == null || s.push(wr({ element: this.arrowEl }))), e;
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
let Vt = nc;
Hn = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
Cr = /* @__PURE__ */ new WeakSet();
ec = function() {
  g(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Sn(this, ri)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), $r(this, Hn, !0);
};
Vt.MENU_CLASS = "dropdown-menu";
Vt.NAME = "Dropdown";
Vt.DEFAULT = {
  ...tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const bs = `${Vt.KEY}:options`;
g(document).on("click", function(e) {
  const t = g(e.target).closest(Aa).not(":disabled,.disabled");
  if (!t.length) {
    Vt.clear({ event: e });
    return;
  }
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = g(e.target).closest(Aa);
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
class hu extends V {
  constructor(n) {
    var s;
    super(n);
    L(this, ts, void 0);
    L(this, on, nt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, on);
  }
  get triggerElement() {
    return C(this, on).current;
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
    (n = C(this, ts)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, on)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...s, children: n });
  }
}
ts = new WeakMap(), on = new WeakMap();
class du extends hu {
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
    return s.caret = i, /* @__PURE__ */ m(Kt, { ...s });
  }
}
function sc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(du, { type: n, ...s });
}
let ic = class extends V {
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
    return /* @__PURE__ */ m(Kt, { ...i }, s);
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
      afterRender: d,
      beforeDestroy: u,
      ...f
    } = t;
    return /* @__PURE__ */ m(
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
function uu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(ic, { type: n, ...s });
}
let _t = class extends ze {
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
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ m(t, { ...a });
  }
};
_t.ItemComponents = {
  item: Xd,
  dropdown: sc,
  "btn-group": uu
};
_t.ROOT_TAG = "nav";
_t.NAME = "toolbar";
_t.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function fu({
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
  a === !0 ? d = /* @__PURE__ */ m(Kt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : K(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ m(Kt, { ...a, onClick: l }));
  const u = K(n) ? n : n ? /* @__PURE__ */ m(_t, { ...n }) : null;
  return /* @__PURE__ */ m("div", { className: M("alert", e), style: t, ...c, children: [
    K(h) ? h : typeof h == "string" ? /* @__PURE__ */ m("i", { className: `icon ${h}` }) : null,
    K(i) ? i : /* @__PURE__ */ m("div", { className: M("alert-content", r), children: [
      K(s) ? s : s && /* @__PURE__ */ m("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function pu(e) {
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
let gu = class extends V {
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
    return /* @__PURE__ */ m(
      fu,
      {
        className: M("messager", l, i, o === !0 ? pu(r) : o, a ? "in" : ""),
        ...c
      }
    );
  }
};
var mu = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, yu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wn = (e, t, n) => (mu(e, t, "access private method"), n), be, Ye;
class ko extends J {
  constructor() {
    super(...arguments), yu(this, be), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
ko.NAME = "MessagerItem";
ko.Component = gu;
var So = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Re = (e, t, n) => (So(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, As = (e, t, n, s) => (So(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), rc = (e, t, n) => (So(e, t, "access private method"), n), nn, Bt, kr, oc, Eo, ac;
const lc = class extends ht {
  constructor() {
    super(...arguments), $s(this, kr), $s(this, Eo), $s(this, nn, void 0), $s(this, Bt, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Re(this, Bt)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), rc(this, kr, oc).call(this).show();
  }
  hide() {
    var e;
    (e = Re(this, Bt)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = lc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Mo = lc;
nn = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakSet();
oc = function() {
  if (Re(this, Bt))
    Re(this, Bt).setOptions(this.options);
  else {
    const e = rc(this, Eo, ac).call(this), t = new ko(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), As(this, nn, void 0), As(this, Bt, void 0);
    }), As(this, Bt, t);
  }
  return Re(this, Bt);
};
Eo = /* @__PURE__ */ new WeakSet();
ac = function() {
  if (Re(this, nn))
    return Re(this, nn);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = g(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = g(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), As(this, nn, n[0])), n[0];
};
Mo.NAME = "messager";
Mo.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
g(document).on("to-show.messager.zui", (e, t) => {
  t && Mo.show(t);
});
let wu = class extends V {
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
    } = this.props, d = this.state.checked ? 1 : 0, u = t || "div", f = typeof r == "string" ? /* @__PURE__ */ m("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ m("i", { class: `icon ${o}` }) : o, y = [
      /* @__PURE__ */ m("input", { onChange: h, type: "checkbox", value: d, checked: !!this.state.checked }),
      /* @__PURE__ */ m("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return q(
      u,
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
class cc extends J {
}
cc.NAME = "Switch";
cc.Component = wu;
class hc extends J {
}
hc.NAME = "BtnGroup";
hc.Component = ic;
function us(e) {
  return e.split("-")[1];
}
function To(e) {
  return e === "y" ? "height" : "width";
}
function sn(e) {
  return e.split("-")[0];
}
function Fi(e) {
  return ["top", "bottom"].includes(sn(e)) ? "x" : "y";
}
function La(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Fi(t), l = To(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (sn(t)) {
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
  switch (us(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const vu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = La(h, s, l), u = s, f = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: S } = await w({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = x ?? d, f = { ...f, [v]: { ...f[v], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : S.rects), { x: c, y: d } = La(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: f };
};
function dc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function oi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function _u(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: f = 0 } = t, p = dc(f), y = a[u ? d === "floating" ? "reference" : "floating" : d], v = oi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, k = oi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + p.top) / x.y, bottom: (k.bottom - v.bottom + p.bottom) / x.y, left: (v.left - k.left + p.left) / x.x, right: (k.right - v.right + p.right) / x.x };
}
const bu = Math.min, xu = Math.max;
function $u(e, t, n) {
  return xu(e, bu(t, n));
}
const Cu = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = dc(s), c = { x: i, y: r }, d = Fi(o), u = To(d), f = await l.getDimensions(n), p = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", v = a.reference[u] + a.reference[d] - c[d] - a.floating[u], w = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let x = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[u]);
  const k = v / 2 - w / 2, S = h[p], T = x - f[u] - h[y], N = x / 2 - f[u] / 2 + k, A = $u(S, N, T), O = us(o) != null && N != A && a.reference[u] / 2 - (N < S ? h[p] : h[y]) - f[u] / 2 < 0;
  return { [d]: c[d] - (O ? N < S ? S - N : T - N : 0), data: { [d]: A, centerOffset: N - A } };
} }), ku = ["top", "right", "bottom", "left"];
ku.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Su = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ai(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Su[t]);
}
function Eu(e, t, n) {
  n === void 0 && (n = !1);
  const s = us(e), i = Fi(e), r = To(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ai(o)), { main: o, cross: ai(o) };
}
const Mu = { start: "end", end: "start" };
function rr(e) {
  return e.replace(/start|end/g, (t) => Mu[t]);
}
const Tu = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...y } = e, v = sn(s), w = sn(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = d || (w || !p ? [ai(o)] : function(b) {
      const R = ai(b);
      return [rr(b), R, rr(R)];
    }(o));
    d || f === "none" || x.push(...function(b, R, I, P) {
      const D = us(b);
      let W = function(F, dt, Tt) {
        const gs = ["left", "right"], yn = ["right", "left"], ms = ["top", "bottom"], Xi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Tt ? dt ? yn : gs : dt ? gs : yn;
          case "left":
          case "right":
            return dt ? ms : Xi;
          default:
            return [];
        }
      }(sn(b), I === "start", P);
      return D && (W = W.map((F) => F + "-" + D), R && (W = W.concat(W.map(rr)))), W;
    }(o, p, f, _));
    const k = [o, ...x], S = await _u(t, y), T = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push(S[v]), c) {
      const { main: b, cross: R } = Eu(s, r, _);
      T.push(S[b], S[R]);
    }
    if (N = [...N, { placement: s, overflows: T }], !T.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = k[b];
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
}, Ru = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = sn(a), u = us(a), f = Fi(a) === "x", p = ["left", "top"].includes(d) ? -1 : 1, y = c && f ? -1 : 1, v = typeof o == "function" ? o(r) : o;
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return u && typeof x == "number" && (_ = u === "end" ? -1 * x : x), f ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function lt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  return lt(e).getComputedStyle(e);
}
function ue(e) {
  return fc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Cs;
function uc() {
  if (Cs)
    return Cs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Cs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Cs) : navigator.userAgent;
}
function Xt(e) {
  return e instanceof lt(e).HTMLElement;
}
function wt(e) {
  return e instanceof lt(e).Element;
}
function fc(e) {
  return e instanceof lt(e).Node;
}
function Pa(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ui(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = Et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Nu(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function Sr(e) {
  const t = /firefox/i.test(uc()), n = Et(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function pc() {
  return !/^((?!chrome|android).)*safari/i.test(uc());
}
function Ro(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const Wa = Math.min, Bn = Math.max, li = Math.round;
function gc(e) {
  const t = Et(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = li(n) !== i || li(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function mc(e) {
  return wt(e) ? e : e.contextElement;
}
const yc = { x: 1, y: 1 };
function rn(e) {
  const t = mc(e);
  if (!Xt(t))
    return yc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = gc(t);
  let o = (r ? li(n.width) : n.width) / s, a = (r ? li(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function De(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = mc(e);
  let l = yc;
  t && (s ? wt(s) && (l = rn(s)) : l = rn(e));
  const h = a ? lt(a) : window, c = !pc() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, f = o.width / l.x, p = o.height / l.y;
  if (a) {
    const y = lt(a), v = s && wt(s) ? lt(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = rn(w), x = w.getBoundingClientRect(), k = getComputedStyle(w);
      x.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, x.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, d *= _.x, u *= _.y, f *= _.x, p *= _.y, d += x.x, u += x.y, w = lt(w).frameElement;
    }
  }
  return { width: f, height: p, top: u, right: d + f, bottom: u + p, left: d, x: d, y: u };
}
function he(e) {
  return ((fc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Vi(e) {
  return wt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function wc(e) {
  return De(he(e)).left + Vi(e).scrollLeft;
}
function Au(e, t, n) {
  const s = Xt(t), i = he(t), r = De(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ue(t) !== "body" || Ui(i)) && (o = Vi(t)), Xt(t)) {
      const l = De(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = wc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function Jn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Pa(e) ? e.host : null) || he(e);
  return Pa(t) ? t.host : t;
}
function Ia(e) {
  return Xt(e) && Et(e).position !== "fixed" ? e.offsetParent : null;
}
function Da(e) {
  const t = lt(e);
  let n = Ia(e);
  for (; n && Nu(n) && Et(n).position === "static"; )
    n = Ia(n);
  return n && (ue(n) === "html" || ue(n) === "body" && Et(n).position === "static" && !Sr(n)) ? t : n || function(s) {
    let i = Jn(s);
    for (; Xt(i) && !Ro(i); ) {
      if (Sr(i))
        return i;
      i = Jn(i);
    }
    return null;
  }(e) || t;
}
function vc(e) {
  const t = Jn(e);
  return Ro(t) ? e.ownerDocument.body : Xt(t) && Ui(t) ? t : vc(t);
}
function zn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = vc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = lt(s);
  return i ? t.concat(r, r.visualViewport || [], Ui(s) ? s : []) : t.concat(s, zn(s));
}
function Oa(e, t, n) {
  return t === "viewport" ? oi(function(s, i) {
    const r = lt(s), o = he(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = pc();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : wt(t) ? function(s, i) {
    const r = De(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Xt(s) ? rn(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : oi(function(s) {
    var i;
    const r = he(s), o = Vi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Bn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Bn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + wc(s);
    const d = -o.scrollTop;
    return Et(a || r).direction === "rtl" && (c += Bn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(he(e)));
}
const Lu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = zn(h).filter((v) => wt(v) && ue(v) !== "body"), f = null;
    const p = Et(h).position === "fixed";
    let y = p ? Jn(h) : h;
    for (; wt(y) && !Ro(y); ) {
      const v = Et(y), w = Sr(y);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : u = u.filter((_) => _ !== y), y = Jn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Oa(t, c, i);
    return h.top = Bn(d.top, h.top), h.right = Wa(d.right, h.right), h.bottom = Wa(d.bottom, h.bottom), h.left = Bn(d.left, h.left), h;
  }, Oa(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Xt(n), r = he(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || Ui(r)) && (o = Vi(n)), Xt(n))) {
    const h = De(n);
    a = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: wt, getDimensions: function(e) {
  return gc(e);
}, getOffsetParent: Da, getDocumentElement: he, getScale: rn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Da, r = this.getDimensions;
  return { reference: Au(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Et(e).direction === "rtl" };
function Pu(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...wt(e) ? zn(e) : e.contextElement ? zn(e.contextElement) : [], ...zn(t)] : [];
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
  let u = a ? De(e) : null;
  return a && function f() {
    const p = De(e);
    !u || p.x === u.x && p.y === u.y && p.width === u.width && p.height === u.height || n(), u = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = d) == null || f.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const Wu = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Lu, ...n }, r = { ...i.platform, _c: s };
  return vu(e, t, { ...i, platform: r });
};
var No = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (No(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (No(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), St = (e, t, n) => (No(e, t, "access private method"), n), Fn, Un, Mn, Je, st, Er, ci, qi, Ao, Lo, _c, Mr, bc, Po, xc, Wo, $c, Io, Cc, Tr, kc, Do, Sc, Vn, Rr, Ec;
const Ze = class extends ht {
  constructor() {
    super(...arguments), j(this, qi), j(this, Lo), j(this, Mr), j(this, Po), j(this, Wo), j(this, Io), j(this, Tr), j(this, Do), j(this, Rr), j(this, Fn, !1), j(this, Un, void 0), j(this, Mn, 0), j(this, Je, void 0), j(this, st, void 0), j(this, Er, void 0), j(this, ci, void 0), this.hideLater = () => {
      U(this, Vn).call(this), Oe(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, Vn, () => {
      clearTimeout(U(this, Mn)), Oe(this, Mn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Je)) == null ? void 0 : e.classList.contains(Ze.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Je) || St(this, Mr, bc).call(this);
  }
  get trigger() {
    return U(this, Er) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ze.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, Fn) && this.isHover && St(this, Rr, Ec).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ze.CLASS_SHOW), St(this, Tr, kc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ci)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Je)) == null || t.classList.remove(Ze.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, Fn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Vn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let rt = Ze;
Fn = /* @__PURE__ */ new WeakMap();
Un = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakSet();
Ao = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
Lo = /* @__PURE__ */ new WeakSet();
_c = function() {
  const e = St(this, qi, Ao).call(this);
  return Oe(this, st, document.createElement("div")), U(this, st).style.position = this.options.strategy, U(this, st).style.width = `${e}px`, U(this, st).style.height = `${e}px`, U(this, st).style.transform = "rotate(45deg)", U(this, st);
};
Mr = /* @__PURE__ */ new WeakSet();
bc = function() {
  var n;
  const e = Ze.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(St(this, Lo, _c).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Oe(this, Je, t), t;
};
Po = /* @__PURE__ */ new WeakSet();
xc = function() {
  var i;
  const e = St(this, qi, Ao).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Ru(e), Tu()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, st) && ((i = s.middleware) == null || i.push(Cu({ element: U(this, st) }))), s;
};
Wo = /* @__PURE__ */ new WeakSet();
$c = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Io = /* @__PURE__ */ new WeakSet();
Cc = function(e) {
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
Tr = /* @__PURE__ */ new WeakSet();
kc = function() {
  const e = St(this, Po, xc).call(this), t = St(this, Do, Sc).call(this);
  Oe(this, ci, Pu(t, this.tooltip, () => {
    Wu(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = St(this, Wo, $c).call(this, o);
      if (i.arrow && U(this, st)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, st).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, st).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...St(this, Io, Cc).call(this, o)
        });
      }
    });
  }));
};
Do = /* @__PURE__ */ new WeakSet();
Sc = function() {
  return U(this, Un) || Oe(this, Un, {
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
  }), U(this, Un);
};
Vn = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakSet();
Ec = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Vn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Oe(this, Fn, !0);
};
rt.NAME = "tooltip";
rt.TOOLTIP_CLASS = "tooltip";
rt.CLASS_SHOW = "show";
rt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
rt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, rt.MENU_SELECTOR);
  if (n) {
    const i = rt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    rt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, rt.MENU_SELECTOR);
  if (!n)
    return;
  const s = rt.ensure(n);
  s.isHover && s.show();
});
class Mc extends ht {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Md(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
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
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = g("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (r) => {
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
          return alert(r);
        if (this.currentBytes + l.size > this.limitBytes)
          return alert(i);
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
    var r, o;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    if (!s)
      return;
    const i = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), i == null || i.addClass("hidden"), setTimeout(() => i == null ? void 0 : i.remove(), 3e3), (o = (r = this.options).onDelete) == null || o.call(r, s), this.fileMap.delete(s.name), this.currentBytes -= s.size, this.dataTransfer = new DataTransfer(), this.fileMap.forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files);
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
  fileRenameBtn(t) {
    const { useIconBtn: n, renameIcon: s, renameClass: i } = this.options;
    if (n) {
      const r = g(`<button class="btn btn-link h-5 w-5 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("cursor-pointer file-action file-rename");
      return new rt(r, { title: t }), r;
    }
    return g("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn(t) {
    const { useIconBtn: n, deleteIcon: s, deleteClass: i } = this.options;
    if (n) {
      const r = g(`<button class="btn btn-link h-5 w-5 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("cursor-pointer file-action file-delete");
      return new rt(r, { title: t }), r;
    }
    return g("<button />").html(t).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return g(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return g(`<span class="file-size text-gray">${yl(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: n, renameText: s, deleteBtn: i, deleteText: r, showSize: o } = this.options, a = g('<div class="file-info flex items-center gap-2"></div>');
    return a.append(this.fileName(t.name)), o && a.append(this.fileSize(t.size)), n && a.append(
      this.fileRenameBtn(s).on("click", (l) => {
        a.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const h = g(l.target).closest("li").find("input")[0];
        h.focus(), h.value.lastIndexOf(".") !== -1 && h.setSelectionRange(0, h.value.lastIndexOf("."));
      })
    ), i && a.append(
      this.fileDeleteBtn(r).on("click", () => this.deleteFileItem(t.name))
    ), a;
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
Mc.DEFAULT = {
  uploadText: "上传文件",
  confirmText: "确定",
  cancelText: "取消",
  useIconBtn: !0,
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
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
class Iu extends Mc {
  init() {
    super.init(), this.$list.addClass("flex");
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, commentText: i, addImgsText: r, totalSizeText: o } = this.options;
    if (this.$list = g('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = g('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 160 }), n) {
      const u = g(`<span class="upload-tip absolute inset-0 flex justify-center items-center">${n}</span>`);
      this.$label.append(u);
    }
    if (this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), i) {
      const u = g(`<div class="text-secondary py-2">${i}</div>`);
      this.$element.append(u);
    }
    const a = g('<div class="flex justify-between"></div>'), l = g('<div class="flex gap-3"></div>'), h = g(`<label class="btn primary" for="${t}"><i class="icon icon-plus"></i>${r}</label>`), c = g(`<button class="btn primary"><i class="icon icon-arrow-up"></i>${s}</button>`);
    l.append(h).append(c);
    const d = g("<div></div>").html(o.replace("%s", this.fileMap.size.toString()).replace("%s", yl(this.currentBytes)));
    a.append(l).append(d), this.$element.append(a);
  }
  addFileItem(t) {
    const { accept: n } = this.options, s = n.replace(/\s/g, "").split(",");
    t = t.filter((i) => s.includes(i.type)), super.addFileItem(t);
  }
  createFileItem(t) {
    const n = super.createFileItem(t);
    if (n.addClass("relative").removeClass("flex items-center gap-2 my-1"), this.setImageUrl(t, n), n.append(this.toUploadTip()), this.options.showSize) {
      const i = this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ bottom: 36, left: 4 });
      n.append(i);
    }
    const s = g(`<div class="file-name text-center py-1 ellipsis">${t.name}</div>`).css({ width: 120 }).on("click", (i) => {
      g(i.target).closest(".file-item").find(".file-rename").trigger("click");
    });
    return n.append(s), n;
  }
  setImageUrl(t, n) {
    const s = new FileReader();
    s.onload = () => {
      g('<div class="img flex-none" />').css({ backgroundImage: `url(${s.result})` }).prependTo(n);
    }, s.readAsDataURL(t);
  }
  toUploadTip() {
    const { toUploadText: t } = this.options, n = g('<i class="icon icon-arrow-up absolute"></i>').css({ top: 4, left: 4 });
    return new rt(n, { title: t }), n;
  }
  createFileInfo(t) {
    const { renameBtn: n, renameText: s, deleteBtn: i, deleteText: r } = this.options, o = g("<div />").addClass("hidden absolute top-0 right-0 left-0 file-info flex items-center justify-end").css({ background: "rgba(255, 255, 255, .85)" }), a = g("<div></div>");
    return n && a.append(
      this.fileRenameBtn(s).on("click", (l) => {
        const h = g(l.target).closest("li");
        h.find(".file-name").addClass("hidden"), h.find(".input-rename-container").removeClass("hidden");
        const c = h.find("input")[0];
        c.focus(), c.value.lastIndexOf(".") !== -1 && c.setSelectionRange(0, c.value.lastIndexOf("."));
      })
    ), i && a.append(
      this.fileDeleteBtn(r).on("click", () => this.deleteFileItem(t.name))
    ), o.append(a), o;
  }
  createRenameContainer(t) {
    const { duplicatedHint: n } = this.options, s = g("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120, height: 30 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = s.closest(".file-item").find(".file-name");
        if (r.html() === s.val()) {
          s.addClass("hidden"), r.removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(n);
        this.renameFileItem(t, s.val()), s.addClass("hidden"), r.html(s.val()).removeClass("hidden");
      } else
        i.key === "Escape" && s.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = s.closest(".file-item").find(".file-name");
      if (i.html() === s.val()) {
        s.addClass("hidden"), i.removeClass("hidden");
        return;
      }
      if (this.fileMap.has(s.val()))
        return alert(n);
      this.renameFileItem(t, s.val()), s.addClass("hidden"), i.html(s.val()).removeClass("hidden");
    });
    return s;
  }
}
Iu.DEFAULT = {
  uploadText: "开始上传",
  confirmText: "确定",
  cancelText: "取消",
  renameBtn: !0,
  renameText: "重命名",
  renameIcon: "edit",
  deleteBtn: !0,
  deleteText: "删除",
  deleteIcon: "trash",
  deleteClass: "text-danger",
  showIcon: !1,
  multiple: !0,
  listPosition: "bottom",
  limitSize: !1,
  icon: "file-o",
  btnClass: "",
  draggable: !0,
  accept: "image/jpg, image/jpeg, image/gif, image/png",
  showSize: !0,
  useIconBtn: !0,
  commentText: "",
  addImgsText: "添加文件",
  toUploadText: "待上传",
  totalSizeText: "共 %s 个文件，总大小 %s。"
};
var Ht;
class Du {
  constructor(t = "") {
    L(this, Ht, void 0);
    typeof t == "object" ? B(this, Ht, t) : B(this, Ht, document.appendChild(document.createComment(t)));
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
const Ha = /* @__PURE__ */ new Set([
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
class Tc extends Du {
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
    return typeof t == "string" && (Ha.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Tc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Ha.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Rc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var es, re, $t, an, ln, Ls;
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
    L(this, $t, void 0);
    L(this, an, void 0);
    B(this, es, n), B(this, re, `ZUI_STORE:${t ?? Rc()}`), B(this, $t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, es);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, an) || B(this, an, new ha(C(this, re), "session")), C(this, an));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, $t).getItem(ye(this, ln, Ls).call(this, t));
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
    C(this, $t).setItem(ye(this, ln, Ls).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, $t).removeItem(ye(this, ln, Ls).call(this, t));
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
let hi = ha;
es = new WeakMap(), re = new WeakMap(), $t = new WeakMap(), an = new WeakMap(), ln = new WeakSet(), Ls = function(t) {
  return `${C(this, re)}:${t}`;
};
const Ou = new hi("DEFAULT");
function Hu(e, t = "local") {
  return new hi(e, t);
}
Object.assign(Ou, { create: Hu });
function Bu(e) {
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
function zu(e) {
  const [t, n, s] = typeof e == "string" ? Bu(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Ba(e, t) {
  return zu(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function za(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function Fu(e, t, n) {
  e = e % 360 / 360, t = za(t), n = za(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function Uu(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function Vu(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Nc = class extends V {
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
      w.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const S = Vu(l, c);
      if (w.push("has-text", `has-text-${S.length}`), o)
        !a && o && (_.color = Ba(o));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : Uu(N)) * u % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = Fu(A, f, p);
          _.color = Ba(O);
        }
      }
      let T;
      x && x < 14 * S.length && (T = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": x, className: "avatar-text", style: T, children: S });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: M(w),
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
class Ac extends J {
}
Ac.NAME = "Avatar";
Ac.Component = Nc;
class Oo extends V {
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
    return M(
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
    return n ? /* @__PURE__ */ m("input", { type: "hidden", className: "pick-value", name: n, value: s.value }) : null;
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
var Me, Ct, oe;
class Lc extends V {
  constructor(n) {
    super(n);
    L(this, Me, void 0);
    L(this, Ct, void 0);
    L(this, oe, void 0);
    B(this, Me, nt()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = g(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return g(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, Me)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, oe);
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
      ref: C(this, Me),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!C(this, oe)) {
      const s = g(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = g("<div>").addClass("pick-container").appendTo(s)), B(this, oe, i[0]);
    }
    return C(this, oe);
  }
  _render(n) {
    return /* @__PURE__ */ m("div", { ...this._getProps(n), children: this._renderPop(n) });
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      C(this, Ct) && (C(this, Ct).call(this), B(this, Ct, void 0));
      return;
    }
    C(this, Ct) || B(this, Ct, xo(s, n, () => {
      const { placement: o, width: a } = i;
      zi(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Oi() : null, vr(), vo(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        g(n).css({
          left: l,
          top: h,
          width: a === "100%" ? g(s).outerWidth() : void 0
        });
      }), a === "100%" && g(n).css({ width: g(n).width() });
    }));
  }
  componentDidMount() {
    this.layout(), g(document).on("click", this._handleDocClick);
  }
  componentWillUnmount() {
    g(document).off("click", this._handleDocClick);
    const n = C(this, Ct);
    n && (n(), B(this, Ct, void 0)), B(this, oe, void 0), B(this, Me, void 0);
  }
  render(n) {
    return Ud(this._render(n), this._getContainer(n));
  }
}
Me = new WeakMap(), Ct = new WeakMap(), oe = new WeakMap();
var Pc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vn = (e, t, n) => (Pc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Fa = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, qe = (e, t, n, s) => (Pc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ps, pt;
let ge = class extends V {
  constructor(t) {
    super(t), Fa(this, Ps, void 0), Fa(this, pt, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      vn(this, pt) && (clearTimeout(vn(this, pt)), qe(this, pt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Js(200, (a) => {
        qe(this, pt, a);
      }), qe(this, pt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Js(50, (a) => {
        qe(this, pt, a);
      }), qe(this, pt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, qe(this, Ps, t.id ?? `_${g.guid++}`);
  }
  get id() {
    return vn(this, Ps);
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
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this), vn(this, pt) && clearTimeout(vn(this, pt));
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ m(o, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ m(mn, { children: [
      /* @__PURE__ */ m(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
Ps = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
ge.Trigger = Oo;
ge.Pop = Lc;
ge.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Wc = class extends ge {
  _handleChange(t, n) {
    super._handleChange(t, n);
    const { syncBackground: s, syncBorder: i, syncColor: r, syncText: o } = this.props, a = t || "";
    s && g(s).css("backgroundColor", a), i && g(i).css("borderColor", a), r && g(r).css("color", a), o && g(o).text(a);
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ m(it, { icon: s }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = g.extend({
      color: n.value
    }, s.style), s;
  }
  _renderPop(t, n) {
    const { colors: s = [], closeBtn: i, heading: r } = t, { value: o } = n;
    let a;
    return r && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      r,
      i ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        s.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ m(it, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(it, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Wc.defaultProps = {
  ...ge.defaultProps,
  className: "color-picker rounded btn square size-sm ghost",
  popClass: "color-picker-pop menu-popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Ic extends J {
}
Ic.NAME = "ColorPicker";
Ic.Component = Wc;
var Ho = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Se = (e, t, n) => (Ho(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _n = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, qn = (e, t, n, s) => (Ho(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), or = (e, t, n) => (Ho(e, t, "access private method"), n), Qe, Ws, xe, Nr, Tn, Is;
const ar = "show", Ua = "in", qu = '[data-dismiss="modal"]', Rn = class extends ht {
  constructor() {
    super(...arguments), _n(this, Tn), _n(this, Qe, 0), _n(this, Ws, void 0), _n(this, xe, void 0), _n(this, Nr, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(qu) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(ar);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Se(this, Nr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!Se(this, xe) || Se(this, xe)[0] !== n || Se(this, xe)[1] !== s) && (qn(this, xe, [n, s]), this.layout());
        });
        t.observe(e), qn(this, Ws, t);
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
      return g(t).css("z-index", `${Rn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return g(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, ar, i).css({
      zIndex: `${Rn.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), or(this, Tn, Is).call(this, () => {
      g(t).addClass(Ua), or(this, Tn, Is).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (g(this.modalElement).removeClass(Ua), this.emit("hide"), or(this, Tn, Is).call(this, () => {
      g(this.modalElement).removeClass(ar), this.emit("hidden");
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
    qn(this, xe, [r, o]), typeof e == "function" && (e = e({ width: r, height: o }));
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
    (t = Rn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = Rn.query(e)) == null || t.show();
  }
};
let Qt = Rn;
Qe = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakSet();
Is = function(e, t) {
  Se(this, Qe) && (clearTimeout(Se(this, Qe)), qn(this, Qe, 0)), e && (this.options.animation ? qn(this, Qe, window.setTimeout(e, t ?? this.options.transTime)) : e());
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
class Dc extends V {
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
    return K(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-header", children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : K(t) ? t : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ m(_t, { ...t }) : null,
      n ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? K(t) ? t : /* @__PURE__ */ m("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return K(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-footer", children: n ? /* @__PURE__ */ m(_t, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ m("div", { className: M("modal-dialog", t), style: n, children: /* @__PURE__ */ m("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
Dc.defaultProps = { closeBtn: !0 };
var cn, hn, dn;
class Gu extends V {
  constructor() {
    super(...arguments);
    L(this, cn, void 0);
    L(this, hn, void 0);
    L(this, dn, void 0);
    B(this, cn, nt()), this.state = {}, B(this, dn, () => {
      var i, r;
      const n = (r = (i = C(this, cn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = C(this, hn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, hn, s);
    });
  }
  componentDidMount() {
    C(this, dn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, hn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, cn),
        onLoad: C(this, dn)
      }
    );
  }
}
cn = new WeakMap(), hn = new WeakMap(), dn = new WeakMap();
var Bo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (Bo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), bn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (Bo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ds = (e, t, n) => (Bo(e, t, "access private method"), n), At, Nn, Lt, di, zo, Os, Ar;
function ju(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Yu(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ m(mo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Ku(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ m(Gu, { url: n })
  };
}
const Xu = {
  custom: ju,
  ajax: Yu,
  iframe: Ku
}, lr = "loading", An = class extends Qt {
  constructor() {
    super(...arguments), bn(this, di), bn(this, Os), bn(this, At, void 0), bn(this, Nn, void 0), bn(this, Lt, void 0);
  }
  get id() {
    return ft(this, Nn);
  }
  get loading() {
    var e;
    return (e = ft(this, At)) == null ? void 0 : e.classList.contains(lr);
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
      n || (n = t.id || `modal-${g.guid++}`, Ge(this, Nn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = g("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ge(this, At, e);
    }
    return e;
  }
  get $emitter() {
    const e = ft(this, At);
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
    const e = ft(this, At);
    e && (g(e).removeData(this.constructor.KEY).remove(), Ge(this, At, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, Lt) && clearTimeout(ft(this, Lt));
    const { modalElement: e, options: t } = this, n = g(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Xu[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(lr), i && Ge(this, Lt, window.setTimeout(() => {
      Ge(this, Lt, 0), Ds(this, Os, Ar).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await Ds(this, Os, Ar).call(this, this.options.failedTip) : a && typeof a == "object" && await Ds(this, di, zo).call(this, a), ft(this, Lt) && (clearTimeout(ft(this, Lt)), Ge(this, Lt, 0)), this.layout(), await Js(100), n.removeClass(lr), !0;
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
    let c = typeof n == "object" && n.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ m("div", { children: n });
    s ? c = /* @__PURE__ */ m("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ m("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ m("div", { className: "modal-body", children: c });
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
let Oc = An;
At = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakSet();
zo = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return g(this.modalElement).html(e[0]).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Kn(
      /* @__PURE__ */ m(Dc, { ...e }),
      this.modalElement
    );
  });
};
Os = /* @__PURE__ */ new WeakSet();
Ar = function(e) {
  if (e)
    return Ds(this, di, zo).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: e })
    });
};
Oc.DEFAULT = {
  ...Qt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var Fo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Lr = (e, t, n) => (Fo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ks = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Va = (e, t, n, s) => (Fo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Pr = (e, t, n) => (Fo(e, t, "access private method"), n), Ne, Uo, Hc, Wr, Bc, Vo, zc;
const Ju = '[data-toggle="modal"]';
class Fc extends ht {
  constructor() {
    super(...arguments), ks(this, Uo), ks(this, Wr), ks(this, Vo), ks(this, Ne, void 0);
  }
  get modal() {
    return Lr(this, Ne);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = Pr(this, Wr, Bc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = Lr(this, Ne)) == null ? void 0 : t.hide();
  }
}
Ne = /* @__PURE__ */ new WeakMap();
Uo = /* @__PURE__ */ new WeakSet();
Hc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
Wr = /* @__PURE__ */ new WeakSet();
Bc = function() {
  const e = Pr(this, Uo, Hc).call(this);
  let t = Lr(this, Ne);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = Pr(this, Vo, zc).call(this);
    if (!n)
      return;
    t = Qt.ensure(n, e);
  } else
    t = Oc.ensure(this.container, e);
  return Va(this, Ne, t), t.on("destroyed", () => {
    Va(this, Ne, void 0);
  }), t;
};
Vo = /* @__PURE__ */ new WeakSet();
zc = function() {
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
Fc.NAME = "ModalTrigger";
g(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Ju);
  if (n) {
    const i = Fc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let Uc = class extends ze {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = M(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Uc.NAME = "nav";
class Vc extends J {
}
Vc.NAME = "Nav";
Vc.Component = Uc;
function Zn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Zu({
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
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : et(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : et(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ m(Kt, { type: n, ...a });
}
const Dt = 24 * 60 * 60 * 1e3, at = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), fs = (e, t = /* @__PURE__ */ new Date()) => (e = at(e), t = at(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Ir = (e, t = /* @__PURE__ */ new Date()) => at(e).getFullYear() === at(t).getFullYear(), Qu = (e, t = /* @__PURE__ */ new Date()) => (e = at(e), t = at(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), ep = (e, t = /* @__PURE__ */ new Date()) => {
  e = at(e), t = at(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, np = (e, t) => fs(at(t), e), sp = (e, t) => fs(at(t).getTime() - Dt, e), ip = (e, t) => fs(at(t).getTime() + Dt, e), rp = (e, t) => fs(at(t).getTime() - 2 * Dt, e), Dr = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = at(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Ir(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, op = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Dr(e, Ir(e) ? s.month : s.full);
  if (fs(e, t))
    return i;
  const r = Dr(t, Ir(e, t) ? Qu(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, ap = (e) => {
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
}, qa = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, qa(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, qa(e, "day", n, s);
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
function tf({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Zn(i, n);
  return s = typeof s == "function" ? s(a) : et(s, a), /* @__PURE__ */ m(Bl, { ...o, children: [
    r,
    s
  ] });
}
function ef({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(Kt, { type: n, ...l })), c = (u, f) => {
    const p = [];
    for (let y = u; y <= f; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Zn(i, y);
      o && (l.url = typeof o == "function" ? o(v) : et(o, v)), p.push(/* @__PURE__ */ m(Kt, { type: n, ...l, onClick: r }));
    }
    return p;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function nf({
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
  return o.text = typeof a == "function" ? a(t) : et(a, t), i.menu = { ...i.menu, className: M((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(sc, { type: "dropdown", dropdown: i, ...o });
}
function sf({
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
    a && !a({ info: v, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(v) : et(l, v));
  }, p = Zn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : et(l, p), /* @__PURE__ */ m("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ m(Kt, { type: s, ...c, onClick: f })
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
  link: Zu,
  info: tf,
  nav: ef,
  "size-menu": nf,
  goto: sf
};
class qc extends J {
}
qc.NAME = "Pager";
qc.Component = Gi;
class Gc extends J {
}
Gc.NAME = "Pick";
Gc.Component = ge;
var un, ns, ss, wi;
class jc extends V {
  constructor(n) {
    super(n);
    L(this, un, nt());
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
    (n = C(this, un).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = C(this, ns), { current: i } = C(this, un);
      if (s && i) {
        const r = g(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: C(this, ns), children: o }) : a ? l = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: C(this, wi), children: /* @__PURE__ */ m("span", { className: "close" }) }) : l = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: C(this, ss),
          onInput: C(this, ss),
          ref: C(this, un)
        }
      ),
      l
    ] });
  }
}
un = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), wi = new WeakMap();
var fn, is, rs, os;
class rf extends Oo {
  constructor() {
    super(...arguments);
    L(this, fn, void 0);
    L(this, is, void 0);
    L(this, rs, void 0);
    L(this, os, void 0);
    B(this, fn, nt()), B(this, is, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = g(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), B(this, rs, (n) => {
      this.props.changeState({ search: n });
    }), B(this, os, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ m("span", { className: "text", children: n.text ?? n.value }),
      /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, is), "data-value": n.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, fn).current) == null || s.focus();
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ m(
      jc,
      {
        inline: !0,
        ref: C(this, fn),
        defaultSearch: s,
        onSearch: C(this, rs),
        onClear: C(this, os),
        placeholder: i
      }
    );
  }
  _renderTrigger(n) {
    const { state: { selections: s = [], open: i }, search: r, placeholder: o, children: a } = this.props, l = i && r;
    return !l && !s.length ? /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
}
fn = new WeakMap(), is = new WeakMap(), rs = new WeakMap(), os = new WeakMap();
var as, vi, _i, bi, xi, Yc;
class of extends Oo {
  constructor() {
    super(...arguments);
    L(this, xi);
    L(this, as, nt());
    L(this, vi, (n) => {
      this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation();
    });
    L(this, _i, (n) => {
      this.props.changeState({ search: n });
    });
    L(this, bi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = C(this, as).current) == null || s.focus();
  }
  _getClass(n) {
    return M(
      super._getClass(n),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ m(
      jc,
      {
        ref: C(this, as),
        defaultSearch: s,
        onSearch: C(this, _i),
        onClear: C(this, bi),
        placeholder: ye(this, xi, Yc).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a } = n, [l] = i, h = r && a;
    let c;
    h ? c = this._renderSearch(n) : l ? c = /* @__PURE__ */ m("span", { className: "picker-single-selection", children: l.text ?? l.value }, "main") : c = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "main");
    const d = l && !h ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, vi), children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      c,
      s,
      d,
      h ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
as = new WeakMap(), vi = new WeakMap(), _i = new WeakMap(), bi = new WeakMap(), xi = new WeakSet(), Yc = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const af = (e, t) => e.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ m("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var $i, Ci, Kc, ki, Xc, Si;
class lf extends Lc {
  constructor() {
    super(...arguments);
    L(this, Ci);
    L(this, ki);
    L(this, $i, nt());
    L(this, Si, ({ item: n }) => {
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
      const s = ye(this, Ci, Kc).call(this);
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
    return /* @__PURE__ */ m(
      Di,
      {
        ref: C(this, $i),
        className: "picker-menu-list",
        items: ye(this, ki, Xc).call(this),
        onClickItem: C(this, Si),
        ...s
      }
    );
  }
}
$i = new WeakMap(), Ci = new WeakSet(), Kc = function() {
  const n = this.element;
  if (n)
    return g(n).find(".menu-item>a.hover");
}, ki = new WeakSet(), Xc = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = g.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
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
      text: typeof w == "string" ? af(l, [w]) : /* @__PURE__ */ m(Wi, { content: w }),
      className: M(y, { hover: u === i }),
      "data-value": u,
      ...v
    }), c;
  }, []);
  return !a && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, Si = new WeakMap();
var qo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, te = (e, t, n) => (qo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), je = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, we = (e, t, n, s) => (qo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), mt = (e, t, n) => (qo(e, t, "access private method"), n), Ln, Pt, $e, tn, Gn, Go, Jc, ne, Ce;
let jo = class extends ge {
  constructor(t) {
    super(t), je(this, tn), je(this, Go), je(this, ne), je(this, Ln, void 0), je(this, Pt, void 0), je(this, $e, 0), this.toggleValue = (n, s) => {
      if (!this.props.multiple)
        return s || n !== this.value ? mt(this, ne, Ce).call(this, n) : mt(this, ne, Ce).call(this);
      const { valueList: i } = this, r = i.indexOf(n);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(n), mt(this, ne, Ce).call(this, i);
    }, this.deselect = (n) => {
      const { valueList: s } = this, i = new Set(mt(this, tn, Gn).call(this, n)), r = s.filter((o) => !i.has(o));
      mt(this, ne, Ce).call(this, r);
    }, this.clear = () => {
      mt(this, ne, Ce).call(this);
    }, this.select = (n) => {
      const s = mt(this, tn, Gn).call(this, n), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return mt(this, ne, Ce).call(this, i);
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
    return mt(this, tn, Gn).call(this, this.state.value);
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
    return we(this, Pt, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = te(this, Ln) || {}, r = {};
    if (we(this, Ln, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
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
    (t = te(this, Pt)) == null || t.abort(), we(this, Pt, void 0), we(this, Ln, void 0), clearTimeout(te(this, $e)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? rf : of);
  }
};
Ln = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakSet();
Gn = function(e) {
  return typeof e == "string" ? e.length ? g.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? g.unique(e) : [];
};
Go = /* @__PURE__ */ new WeakSet();
Jc = function(e) {
  const t = mt(this, tn, Gn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
ne = /* @__PURE__ */ new WeakSet();
Ce = function(e) {
  const t = e === void 0 ? e : mt(this, Go, Jc).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
jo.defaultProps = {
  ...ge.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
jo.Pop = lf;
class Zc extends J {
}
Zc.NAME = "Picker";
Zc.Component = jo;
class Qc extends ht {
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
    return i && s.middleware.push(Oi()), r && s.middleware.push(r === !0 ? vr() : vr(r)), o && s.middleware.push(wr({ element: this.$arrow[0] })), a && s.middleware.push(vo(a)), s;
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
Qc.NAME = "Popovers";
Qc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var Yo = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, xt = (e, t, n) => (Yo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ve = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Hs = (e, t, n, s) => (Yo(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ga = (e, t, n) => (Yo(e, t, "access private method"), n), Bs, zs, Ae, Or, Fs, Us, Vs, Hr;
let th = class extends V {
  constructor(t) {
    super(t), ve(this, Vs), ve(this, Bs, void 0), ve(this, zs, nt()), ve(this, Ae, 0), ve(this, Or, (n) => {
      n.stopPropagation(), this.setState({ value: "" }, () => {
        var s, i;
        (i = (s = this.props).onClear) == null || i.call(s, n), this.focus();
      });
    }), ve(this, Fs, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (Ga(this, Vs, Hr).call(this), Hs(this, Ae, window.setTimeout(() => {
          r(i, n), Hs(this, Ae, 0);
        }, this.props.delay || 0)));
      });
    }), ve(this, Us, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Hs(this, Bs, t.id || `search-box-${g.guid++}`);
  }
  get id() {
    return xt(this, Bs);
  }
  get input() {
    return xt(this, zs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Ga(this, Vs, Hr).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: f } = t, { focus: p, value: y } = n, { id: v } = this, w = typeof y != "string" || !y.trim().length;
    let _, x, k;
    return u && (k = u === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(it, { icon: u })), !d && u && (_ = /* @__PURE__ */ m("label", { for: v, class: "input-control-prefix", children: k }, "prefix")), f && !w ? x = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: xt(this, Or),
        children: f === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(it, { icon: f })
      }
    ) : d && u && (x = k), x && (x = /* @__PURE__ */ m("label", { for: v, class: "input-control-suffix", children: x }, "suffix")), /* @__PURE__ */ m("div", { class: M("search-box input-control", r, { focus: p, empty: w, "has-prefix-icon": _, "has-suffix-icon": x }), style: o, children: [
      _,
      /* @__PURE__ */ m(
        "input",
        {
          ref: xt(this, zs),
          id: v,
          type: "text",
          class: M("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: xt(this, Fs),
          onChange: xt(this, Fs),
          onFocus: xt(this, Us),
          onBlur: xt(this, Us)
        }
      ),
      x
    ] });
  }
};
Bs = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakSet();
Hr = function() {
  xt(this, Ae) && clearTimeout(xt(this, Ae)), Hs(this, Ae, 0);
};
th.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class eh extends J {
}
eh.NAME = "SearchBox";
eh.Component = th;
class nh extends J {
}
nh.NAME = "Toolbar";
nh.Component = _t;
function cf({
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
  return k && (k.btnProps || (k.btnProps = { size: "sm" }), k.className = M("tree-actions not-nested-toggle", k.className)), /* @__PURE__ */ m(
    "div",
    {
      className: M("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...r,
      ...x,
      children: [
        /* @__PURE__ */ m("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ m("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ m("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
        /* @__PURE__ */ m(it, { icon: h, className: "tree-icon" }),
        o ? /* @__PURE__ */ m("a", { className: "text tree-link not-nested-toggle", href: o, children: c }) : /* @__PURE__ */ m("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        k ? /* @__PURE__ */ m(_t, { ...k }) : null,
        /* @__PURE__ */ m(it, { icon: u, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Ko = class extends Ii {
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
  item: cf
};
Ko.NAME = "tree";
class sh extends J {
}
sh.NAME = "Tree";
sh.Component = Ko;
var ls, Ei, Mi, Ti;
class hf extends V {
  constructor() {
    super(...arguments);
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
  }
  get element() {
    return C(this, ls).current;
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
      fetch(et(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ m(mo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ m("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: f } = this.state;
    let { content: p } = this.state;
    return p === void 0 && g.isPlainObject(d) && d.html && (p = /* @__PURE__ */ m("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, Mi),
        onDragEnd: C(this, Ti),
        "data-id": c,
        ref: C(this, ls),
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, Ei), children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          p
        ]
      }
    ) });
  }
}
ls = new WeakMap(), Ei = new WeakMap(), Mi = new WeakMap(), Ti = new WeakMap();
var ih = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, qt = (e, t, n) => (ih(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, bt = (e, t, n) => (ih(e, t, "access private method"), n), Jt, Xo, rh, Jo, oh, Br, ah, Zo, lh, ui, zr, ji, Fr, Qo, ch, Ur, Vr, Yi, ta;
const ea = class extends V {
  constructor() {
    super(...arguments), gt(this, Xo), gt(this, Jo), gt(this, Br), gt(this, Zo), gt(this, ui), gt(this, ji), gt(this, Qo), gt(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, gt(this, Ur, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), gt(this, Vr, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = bt(this, Br, ah).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        hf,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
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
rh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Jo = /* @__PURE__ */ new WeakSet();
oh = function() {
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
    } = i, [u, f] = bt(this, Xo, rh).call(this, o);
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
Br = /* @__PURE__ */ new WeakSet();
ah = function() {
  qt(this, Jt).clear();
  let e = 0;
  const t = bt(this, Jo, oh).call(this);
  return t.forEach((n) => {
    bt(this, Zo, lh).call(this, n);
    const [, s, , i] = qt(this, Jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Zo = /* @__PURE__ */ new WeakSet();
lh = function(e) {
  const t = qt(this, Jt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = bt(this, Qo, ch).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    bt(this, ji, Fr).call(this, n, [s, i, r, o]);
};
ui = /* @__PURE__ */ new WeakSet();
zr = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Jt).entries())
    if (s !== n && bt(t = ea, Yi, ta).call(t, i, e))
      return !1;
  return !0;
};
ji = /* @__PURE__ */ new WeakSet();
Fr = function(e, t) {
  var n;
  qt(this, Jt).set(e, t);
  for (const [s, i] of qt(this, Jt).entries())
    s !== e && bt(n = ea, Yi, ta).call(n, i, t) && (i[1] = t[1] + t[3], bt(this, ji, Fr).call(this, s, i));
};
Qo = /* @__PURE__ */ new WeakSet();
ch = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (bt(this, ui, zr).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (bt(this, ui, zr).call(this, [i, r, e, t])) {
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
gt(na, Yi);
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
class hh extends J {
}
hh.NAME = "Dashboard";
hh.Component = na;
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
      i && (C(this, ae) && cancelAnimationFrame(C(this, ae)), B(this, ae, requestAnimationFrame(() => {
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
    n && (B(this, le, typeof n == "string" ? document : n.current), C(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
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
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ m(
      "div",
      {
        className: M("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
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
function dh({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, ...h }) {
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
    if (typeof b == "object" && b && !K(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? x : k;
      b.html ? R.push(/* @__PURE__ */ m("div", { className: M("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? S : T, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      k.push(b);
  });
  const A = N;
  return /* @__PURE__ */ m(
    "div",
    {
      className: M(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...S,
      children: [
        k.length > 0 && /* @__PURE__ */ m(A, { className: M(y), style: f, ...T, children: k }),
        x
      ]
    }
  );
}
function cr({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = dh, onRenderCell: l }) {
  return /* @__PURE__ */ m("div", { className: M("dtable-cells", t), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ m(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function uh({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  CellComponent: l = dh,
  onRenderCell: h,
  style: c,
  ...d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ m(
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
  r.list.length && (f = /* @__PURE__ */ m(
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
  o.list.length && (p = /* @__PURE__ */ m(
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
  return /* @__PURE__ */ m(
    "div",
    {
      className: M("dtable-row", t),
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
function df({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ m("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ m(uh, { ...s }) });
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
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ m("div", { className: M("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...l
    }, d = a == null ? void 0 : a({ props: c, row: h }, q);
    return d && Object.assign(c, d), /* @__PURE__ */ m(uh, { ...c }, h.id);
  }) });
}
const fi = /* @__PURE__ */ new Map(), pi = [];
function fh(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && fi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  fi.set(n, e), t != null && t.buildIn && !pi.includes(n) && pi.push(n);
}
function me(e, t) {
  fh(e, t);
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
function ph(e) {
  return fi.delete(e);
}
function ff(e) {
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
function gh(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = ff(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && gh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function pf(e = [], t = !0) {
  return t && pi.length && e.unshift(...pi), e != null && e.length ? gh([], e, /* @__PURE__ */ new Set()) : [];
}
function mh() {
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
function gf(e, t, n) {
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
function mf(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Ya(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
    const { fixed: A, flex: O, minWidth: b = r, maxWidth: R = o } = S, I = Ya(S.width || i, i);
    T.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, T.width = gf(I < 1 ? Math.round(I * s) : I, b, R), v.forEach((D) => D.call(e, T)), f.push(T), p[T.name] = T;
    const P = A ? A === "left" ? d : u : c;
    P.list.push(T), P.totalWidth += T.width, P.width = P.totalWidth, T.flex && P.flexList.push(T), typeof S.order == "number" && (y = !0);
  }), y) {
    const _ = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return hr(d, !0), hr(u, !0), c.widthSetting = s - d.width - u.width, hr(c), {
    list: f,
    map: p,
    left: d,
    center: c,
    right: u
  };
}
var sa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, E = (e, t, n) => (sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (sa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), It = (e, t, n) => (sa(e, t, "access private method"), n), Ke, Pn, Le, zt, Ee, Z, Ot, Wt, Wn, qs, gi, se, In, Dn, qr, yh, Gr, wh, jr, vh, Yr, _h, Gs, Kr, ia, ra, Ki, mi, Xr, Jr, oa, bh, aa, xh, Zr, $h;
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
    }), H(this, In, (n) => {
      E(this, se).call(this, n, `window_${n.type}`);
    }), H(this, Dn, (n) => {
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
      var a, l, h, c, d;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), E(this, Z).forEach((u) => {
          var f;
          (f = u.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: u } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
            return;
          for (const p of E(this, Z))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: u })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
          return;
        for (const p of E(this, Z))
          if (((d = p.onRowClick) == null ? void 0 : d.call(this, n, { rowID: i, rowInfo: f, element: u })) === !0)
            return;
      }
    }), H(this, Jr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Pn, t.id ?? `dtable-${Rc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, Ee, Object.freeze(pf(t.plugins))), E(this, Ee).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, Wn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Ot)) == null ? void 0 : t.options) || E(this, zt) || mh();
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
    if (E(this, Le) ? this.forceUpdate() : It(this, Gs, Kr).call(this), E(this, Z).forEach((t) => {
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
    E(this, Le) ? It(this, Gs, Kr).call(this) : E(this, Z).forEach((t) => {
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
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, In)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, Dn)) : t.removeEventListener(s, E(this, se));
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
    i ? i.push(n) : (E(this, Wt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, In)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, Dn)) : (r = this.ref.current) == null || r.addEventListener(t, E(this, se)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, Wt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (E(this, Wt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, In)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, Dn)) : (o = this.ref.current) == null || o.removeEventListener(t, E(this, se)));
  }
  emitCustomEvent(t, n) {
    E(this, se).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
    const t = It(this, Zr, $h).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      It(this, qr, yh).call(this, t),
      It(this, Gr, wh).call(this, t),
      It(this, jr, vh).call(this, t),
      It(this, Yr, _h).call(this, t)
    ), E(this, Z).forEach((u) => {
      var p;
      const f = (p = u.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && d.push(f.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: E(this, Pn),
        className: M(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
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
In = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
qr = /* @__PURE__ */ new WeakSet();
yh = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ m(
      df,
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
  return /* @__PURE__ */ m(
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
wh = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ m(
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
vh = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
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
_h = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ m(
      ja,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, mi),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ m(
      ja,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, mi),
        right: 0,
        size: d,
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
bh = function() {
  if (E(this, zt))
    return !1;
  const t = { ...mh(), ...E(this, Ee).reduce((n, s) => {
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
xh = function() {
  var A, O;
  const { plugins: e } = this;
  let t = E(this, zt);
  const n = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
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
      Y(this, Le, !0);
      return;
    }
  }
  const r = mf(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, I) => {
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
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, d);
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
      _ = 0, Y(this, Le, !0);
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
Zr = /* @__PURE__ */ new WeakSet();
$h = function() {
  (It(this, oa, bh).call(this) || !E(this, Ot)) && It(this, aa, xh).call(this);
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
la.addPlugin = fh;
la.removePlugin = ph;
function Ka(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const yf = {
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
}, wf = me(yf, { buildIn: !0 });
function vf(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !Ch.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function Ch() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function bf() {
  return Object.keys(this.state.checkedRows);
}
function xf(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Xa(e, t, n = !1) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const $f = {
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
    toggleCheckRows: vf,
    isRowChecked: _f,
    isAllRowChecked: Ch,
    getChecks: bf,
    toggleCheckable: xf
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Xa(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ m("div", { children: r.join(", ") })
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
    const n = g(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Cf = me($f);
var kh = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(kh || {});
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
function Sf(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !Sh.call(this)), t) {
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
function Sh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Eh(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Eh(e, t, o.children, s + 1)));
  }
  return t;
}
function Mh(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Mh(e, r, n, s);
  }), i;
}
function Th(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && Th(e, r.parent, n, s, i);
}
const Ef = {
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
        const o = Mh(this, i, r, s);
        o != null && o.parent && Th(this, o.parent, r, s, n);
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
    toggleRow: Sf,
    isAllCollapsed: Sh,
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
    ), Eh(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ m("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ m("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), e;
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
}, Mf = me(Ef);
function Rh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ m("a", { href: et(i, t.row.data), ...s, ...r, ...a, children: n });
}
function ca(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : et(e, n);
}
function Nh(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), Dr(n, e, s ?? n));
}
function Ah(e, t) {
  const { link: n } = t.col.setting, s = Rh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Lh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ca(n, t, e[0])), e;
}
function Ph(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Wh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Nh(s, t, e[0], i), e;
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
const Tf = {
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
        return e[0] = /* @__PURE__ */ m("svg", { width: n, height: n, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = Wh(e, t, n)), e = Ph(e, t), e = Lh(e, t), s ? e = Qr(e, t) : e = Ah(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = et(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, Rf = me(Tf, { buildIn: !0 });
function dr(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ m(Nc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, f = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      e[0],
      /* @__PURE__ */ m("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ m("span", { children: c })
    ] }));
  return e;
}
const Nf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: dr
    },
    avatarBtn: {
      onRenderCell: dr
    },
    avatarName: {
      onRenderCell: dr
    }
  }
}, Af = me(Nf, { buildIn: !0 }), Lf = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ m("a", { href: et(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, Pf = me(Lf, { buildIn: !0 }), ur = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Wf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    ur(t.left.list), ur(t.center.list), ur(t.right.list);
  }
}, If = me(Wf), Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: kh,
  avatar: Af,
  checkable: Cf,
  colHover: wf,
  group: If,
  nested: Mf,
  renderDatetime: Nh,
  renderDatetimeCell: Wh,
  renderFormat: ca,
  renderFormatCell: Lh,
  renderHtmlCell: Qr,
  renderLink: Rh,
  renderLinkCell: Ah,
  renderMapCell: Ph,
  rich: Rf,
  sortType: Pf
}, Symbol.toStringTag, { value: "Module" }));
class ps extends J {
}
ps.NAME = "DTable";
ps.Component = la;
ps.definePlugin = me;
ps.removePlugin = ph;
ps.plugins = Df;
var Ih = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ja = (e, t, n) => (Ih(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Of = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Za = (e, t, n, s) => (Ih(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Xe;
const Hf = "nav", js = '[data-toggle="tab"]', Bf = "active";
class Dh extends ht {
  constructor() {
    super(...arguments), Of(this, Xe, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(js);
    let i = t ? g(t).closest(js) : s.filter(`.${Bf}`);
    if (!i.length && (i = n.find(js).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = g(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Ja(this, Xe) && clearTimeout(Ja(this, Xe)), Za(this, Xe, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Za(this, Xe, 0);
    }, 10)));
  }
}
Xe = /* @__PURE__ */ new WeakMap();
Dh.NAME = "Tabs";
g(document).on("click.tabs.zui", js, (e) => {
  e.preventDefault();
  const t = g(e.target), n = t.closest(`.${Hf}`);
  n.length && Dh.ensure(n).active(t);
});
g(() => {
  g(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  g as $,
  zl as ActionMenu,
  Ul as ActionMenuNested,
  Ac as Avatar,
  hc as BtnGroup,
  Ic as ColorPicker,
  ht as Component,
  J as ComponentFromReact,
  tt as ContextMenu,
  Wi as CustomContent,
  yo as CustomRender,
  ps as DTable,
  hh as Dashboard,
  Vt as Dropdown,
  Tc as EventBus,
  Wl as HElement,
  mo as HtmlContent,
  it as Icon,
  Vl as Menu,
  Mo as Messager,
  Oc as Modal,
  Qt as ModalBase,
  Fc as ModalTrigger,
  Vc as Nav,
  qc as Pager,
  Gc as Pick,
  Zc as Picker,
  Qc as Popovers,
  V as ReactComponent,
  eh as SearchBox,
  cc as Switch,
  Dt as TIME_DAY,
  Dh as Tabs,
  nh as Toolbar,
  rt as Tooltip,
  sh as Tree,
  Mc as Upload,
  Iu as UploadImgs,
  qa as calculateTimestamp,
  g as cash,
  M as classes,
  er as componentsMap,
  Md as convertBytes,
  Ld as create,
  at as createDate,
  Ud as createPortal,
  nt as createRef,
  Ed as deepGet,
  Sd as deepGetPath,
  Js as delay,
  Ff as dom,
  yl as formatBytes,
  Dr as formatDate,
  op as formatDateSpan,
  et as formatString,
  vl as getClassList,
  ap as getTimeBeforeDesc,
  q as h,
  Uf as hh,
  Od as htm,
  Yt as i18n,
  rp as isDBY,
  fs as isSameDay,
  Qu as isSameMonth,
  ep as isSameWeek,
  Ir as isSameYear,
  np as isToday,
  ip as isTomorrow,
  K as isValidElement,
  sp as isYesterday,
  Ha as nativeEvents,
  Kn as render,
  Il as renderCustomContent,
  Bd as renderCustomResult,
  Ou as store,
  _l as storeData,
  Ad as takeData
};
//# sourceMappingURL=zui.js.map
