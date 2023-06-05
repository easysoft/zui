var Ki = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var E = (t, e, n) => (Ki(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, O = (t, e, n, s) => (Ki(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var st = (t, e, n) => (Ki(t, e, "access private method"), n);
const Gt = document, Ks = window, ul = Gt.documentElement, Oe = Gt.createElement.bind(Gt), fl = Oe("div"), Xi = Oe("table"), lu = Oe("tbody"), ka = Oe("tr"), { isArray: Ri, prototype: dl } = Array, { concat: cu, filter: so, indexOf: pl, map: ml, push: hu, slice: gl, some: io, splice: uu } = dl, fu = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, du = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, pu = /<.+>/, mu = /^\w+$/;
function ro(t, e) {
  const n = gu(e);
  return !t || !n && !We(e) && !X(e) ? [] : !n && du.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && mu.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Ai {
  constructor(e, n) {
    if (!e)
      return;
    if (hr(e))
      return e;
    let s = e;
    if (nt(e)) {
      const i = n || Gt;
      if (s = fu.test(e) && We(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : pu.test(e) ? wl(e) : hr(i) ? i.find(e) : nt(i) ? _(i).find(e) : ro(e, i), !s)
        return;
    } else if (He(e))
      return this.ready(e);
    (s.nodeType || s === Ks) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(e, n) {
    return new Ai(e, n);
  }
}
const b = Ai.prototype, _ = b.init;
_.fn = _.prototype = b;
b.length = 0;
b.splice = uu;
typeof Symbol == "function" && (b[Symbol.iterator] = dl[Symbol.iterator]);
function hr(t) {
  return t instanceof Ai;
}
function _n(t) {
  return !!t && t === t.window;
}
function We(t) {
  return !!t && t.nodeType === 9;
}
function gu(t) {
  return !!t && t.nodeType === 11;
}
function X(t) {
  return !!t && t.nodeType === 1;
}
function _u(t) {
  return !!t && t.nodeType === 3;
}
function yu(t) {
  return typeof t == "boolean";
}
function He(t) {
  return typeof t == "function";
}
function nt(t) {
  return typeof t == "string";
}
function ft(t) {
  return t === void 0;
}
function Qn(t) {
  return t === null;
}
function _l(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function oo(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
_.isWindow = _n;
_.isFunction = He;
_.isArray = Ri;
_.isNumeric = _l;
_.isPlainObject = oo;
function Z(t, e, n) {
  if (n) {
    let s = t.length;
    for (; s--; )
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  } else if (oo(t)) {
    const s = Object.keys(t);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (e.call(t[o], o, t[o]) === !1)
        return t;
    }
  } else
    for (let s = 0, i = t.length; s < i; s++)
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  return t;
}
_.each = Z;
b.each = function(t) {
  return Z(this, t);
};
b.empty = function() {
  return this.each((t, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Xs(...t) {
  const e = yu(t[0]) ? t.shift() : !1, n = t.shift(), s = t.length;
  if (!n)
    return {};
  if (!s)
    return Xs(e, _, n);
  for (let i = 0; i < s; i++) {
    const r = t[i];
    for (const o in r)
      e && (Ri(r[o]) || oo(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Xs(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
_.extend = Xs;
b.extend = function(t) {
  return Xs(b, t);
};
const wu = /\S+/g;
function Ni(t) {
  return nt(t) ? t.match(wu) || [] : [];
}
b.toggleClass = function(t, e) {
  const n = Ni(t), s = !ft(e);
  return this.each((i, r) => {
    X(r) && Z(n, (o, a) => {
      s ? e ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
b.addClass = function(t) {
  return this.toggleClass(t, !0);
};
b.removeAttr = function(t) {
  const e = Ni(t);
  return this.each((n, s) => {
    X(s) && Z(e, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function vu(t, e) {
  if (t) {
    if (nt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Qn(n) ? void 0 : n;
      }
      return ft(e) ? this : Qn(e) ? this.removeAttr(t) : this.each((n, s) => {
        X(s) && s.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
b.attr = vu;
b.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
b.hasClass = function(t) {
  return !!t && io.call(this, (e) => X(e) && e.classList.contains(t));
};
b.get = function(t) {
  return ft(t) ? gl.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
};
b.eq = function(t) {
  return _(this.get(t));
};
b.first = function() {
  return this.eq(0);
};
b.last = function() {
  return this.eq(-1);
};
function bu(t) {
  return ft(t) ? this.get().map((e) => X(e) || _u(e) ? e.textContent : "").join("") : this.each((e, n) => {
    X(n) && (n.textContent = t);
  });
}
b.text = bu;
function Yt(t, e, n) {
  if (!X(t))
    return;
  const s = Ks.getComputedStyle(t, null);
  return n ? s.getPropertyValue(e) || void 0 : s[e] || t.style[e];
}
function Mt(t, e) {
  return parseInt(Yt(t, e), 10) || 0;
}
function $a(t, e) {
  return Mt(t, `border${e ? "Left" : "Top"}Width`) + Mt(t, `padding${e ? "Left" : "Top"}`) + Mt(t, `padding${e ? "Right" : "Bottom"}`) + Mt(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ji = {};
function xu(t) {
  if (Ji[t])
    return Ji[t];
  const e = Oe(t);
  Gt.body.insertBefore(e, null);
  const n = Yt(e, "display");
  return Gt.body.removeChild(e), Ji[t] = n !== "none" ? n : "block";
}
function Sa(t) {
  return Yt(t, "display") === "none";
}
function yl(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Li(t) {
  return nt(t) ? (e, n) => yl(n, t) : He(t) ? t : hr(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
b.filter = function(t) {
  const e = Li(t);
  return _(so.call(this, (n, s) => e.call(n, s, n)));
};
function _e(t, e) {
  return e ? t.filter(e) : t;
}
b.detach = function(t) {
  return _e(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ku = /^\s*<(\w+)[^>]*>/, $u = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ca = {
  "*": fl,
  tr: lu,
  td: ka,
  th: ka,
  thead: Xi,
  tbody: Xi,
  tfoot: Xi
};
function wl(t) {
  if (!nt(t))
    return [];
  if ($u.test(t))
    return [Oe(RegExp.$1)];
  const e = ku.test(t) && RegExp.$1, n = Ca[e] || Ca["*"];
  return n.innerHTML = t, _(n.childNodes).detach().get();
}
_.parseHTML = wl;
b.has = function(t) {
  const e = nt(t) ? (n, s) => ro(t, s).length : (n, s) => s.contains(t);
  return this.filter(e);
};
b.not = function(t) {
  const e = Li(t);
  return this.filter((n, s) => (!nt(t) || X(s)) && !e.call(s, n, s));
};
function te(t, e, n, s) {
  const i = [], r = He(e), o = s && Li(s);
  for (let a = 0, c = t.length; a < c; a++)
    if (r) {
      const h = e(t[a]);
      h.length && hu.apply(i, h);
    } else {
      let h = t[a][e];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[e] : null;
    }
  return i;
}
function vl(t) {
  return t.multiple && t.options ? te(so.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function Su(t) {
  return arguments.length ? this.each((e, n) => {
    const s = n.multiple && n.options;
    if (s || Ml.test(n.type)) {
      const i = Ri(t) ? ml.call(t, String) : Qn(t) ? [] : [String(t)];
      s ? Z(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ft(t) || Qn(t) ? "" : t;
  }) : this[0] && vl(this[0]);
}
b.val = Su;
b.is = function(t) {
  const e = Li(t);
  return io.call(this, (n, s) => e.call(n, s, n));
};
_.guid = 1;
function Wt(t) {
  return t.length > 1 ? so.call(t, (e, n, s) => pl.call(s, e) === n) : t;
}
_.unique = Wt;
b.add = function(t, e) {
  return _(Wt(this.get().concat(_(t, e).get())));
};
b.children = function(t) {
  return _e(_(Wt(te(this, (e) => e.children))), t);
};
b.parent = function(t) {
  return _e(_(Wt(te(this, "parentNode"))), t);
};
b.index = function(t) {
  const e = t ? _(t)[0] : this[0], n = t ? this : _(e).parent().children();
  return pl.call(n, e);
};
b.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
b.siblings = function(t) {
  return _e(_(Wt(te(this, (e) => _(e).parent().children().not(e)))), t);
};
b.find = function(t) {
  return _(Wt(te(this, (e) => ro(t, e))));
};
const Cu = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Eu = /^$|^module$|\/(java|ecma)script/i, Mu = ["type", "src", "nonce", "noModule"];
function Tu(t, e) {
  const n = _(t);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Eu.test(i.type) && ul.contains(i)) {
      const r = Oe("script");
      r.text = i.textContent.replace(Cu, ""), Z(Mu, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function Ru(t, e, n, s, i) {
  s ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && Tu(e, t.ownerDocument);
}
function ye(t, e, n, s, i, r, o, a) {
  return Z(t, (c, h) => {
    Z(_(h), (l, f) => {
      Z(_(e), (d, u) => {
        const p = n ? f : u, m = n ? u : f, w = n ? l : d;
        Ru(p, w ? m.cloneNode(!0) : m, s, i, !w);
      }, a);
    }, o);
  }, r), e;
}
b.after = function() {
  return ye(arguments, this, !1, !1, !1, !0, !0);
};
b.append = function() {
  return ye(arguments, this, !1, !1, !0);
};
function Au(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ft(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, s) => {
    X(s) && (e ? _(s).empty().append(t) : s.innerHTML = t);
  });
}
b.html = Au;
b.appendTo = function(t) {
  return ye(arguments, this, !0, !1, !0);
};
b.wrapInner = function(t) {
  return this.each((e, n) => {
    const s = _(n), i = s.contents();
    i.length ? i.wrapAll(t) : s.append(t);
  });
};
b.before = function() {
  return ye(arguments, this, !1, !0);
};
b.wrapAll = function(t) {
  let e = _(t), n = e[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(e), this.appendTo(n);
};
b.wrap = function(t) {
  return this.each((e, n) => {
    const s = _(t)[0];
    _(n).wrapAll(e ? s.cloneNode(!0) : s);
  });
};
b.insertAfter = function(t) {
  return ye(arguments, this, !0, !1, !1, !1, !1, !0);
};
b.insertBefore = function(t) {
  return ye(arguments, this, !0, !0);
};
b.prepend = function() {
  return ye(arguments, this, !1, !0, !0, !0, !0);
};
b.prependTo = function(t) {
  return ye(arguments, this, !0, !0, !0, !1, !1, !0);
};
b.contents = function() {
  return _(Wt(te(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
b.next = function(t, e, n) {
  return _e(_(Wt(te(this, "nextElementSibling", e, n))), t);
};
b.nextAll = function(t) {
  return this.next(t, !0);
};
b.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
b.parents = function(t, e) {
  return _e(_(Wt(te(this, "parentElement", !0, e))), t);
};
b.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
b.prev = function(t, e, n) {
  return _e(_(Wt(te(this, "previousElementSibling", e, n))), t);
};
b.prevAll = function(t) {
  return this.prev(t, !0);
};
b.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
b.map = function(t) {
  return _(cu.apply([], ml.call(this, (e, n) => t.call(e, n, e))));
};
b.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
b.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Yt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || ul;
  });
};
b.slice = function(t, e) {
  return _(gl.call(this, t, e));
};
const Nu = /-([a-z])/g;
function ao(t) {
  return t.replace(Nu, (e, n) => n.toUpperCase());
}
b.ready = function(t) {
  const e = () => setTimeout(t, 0, _);
  return Gt.readyState !== "loading" ? e() : Gt.addEventListener("DOMContentLoaded", e), this;
};
b.unwrap = function() {
  return this.parent().each((t, e) => {
    if (e.tagName === "BODY")
      return;
    const n = _(e);
    n.replaceWith(n.children());
  }), this;
};
b.offset = function() {
  const t = this[0];
  if (!t)
    return;
  const e = t.getBoundingClientRect();
  return {
    top: e.top + Ks.pageYOffset,
    left: e.left + Ks.pageXOffset
  };
};
b.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Yt(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = t.ownerDocument;
    let i = t.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Yt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && X(i)) {
      const r = _(i).offset();
      n.top -= r.top + Mt(i, "borderTopWidth"), n.left -= r.left + Mt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - Mt(t, "marginTop"),
    left: n.left - Mt(t, "marginLeft")
  };
};
const bl = {
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
b.prop = function(t, e) {
  if (t) {
    if (nt(t))
      return t = bl[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, s) => {
        s[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
b.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[bl[t] || t];
  });
};
const Lu = /^--/;
function lo(t) {
  return Lu.test(t);
}
const Zi = {}, { style: Wu } = fl, Du = ["webkit", "moz", "ms"];
function Pu(t, e = lo(t)) {
  if (e)
    return t;
  if (!Zi[t]) {
    const n = ao(t), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Du.join(`${s} `)}${s}`.split(" ");
    Z(i, (r, o) => {
      if (o in Wu)
        return Zi[t] = o, !1;
    });
  }
  return Zi[t];
}
const Iu = {
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
function xl(t, e, n = lo(t)) {
  return !n && !Iu[t] && _l(e) ? `${e}px` : e;
}
function Ou(t, e) {
  if (nt(t)) {
    const n = lo(t);
    return t = Pu(t, n), arguments.length < 2 ? this[0] && Yt(this[0], t, n) : t ? (e = xl(t, e, n), this.each((s, i) => {
      X(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
b.css = Ou;
function kl(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Hu = /^\s+|\s+$/;
function Ea(t, e) {
  const n = t.dataset[e] || t.dataset[ao(e)];
  return Hu.test(n) ? n : kl(JSON.parse, n);
}
function Bu(t, e, n) {
  n = kl(JSON.stringify, n), t.dataset[ao(e)] = n;
}
function zu(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Ea(this[0], s);
    return n;
  }
  if (nt(t))
    return arguments.length < 2 ? this[0] && Ea(this[0], t) : ft(e) ? this : this.each((n, s) => {
      Bu(s, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
b.data = zu;
function $l(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Z([!0, !1], (t, e) => {
  Z(["Width", "Height"], (n, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    b[i] = function(r) {
      if (this[0])
        return _n(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : We(this[0]) ? $l(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (r && e ? Mt(this[0], `margin${n ? "Top" : "Left"}`) + Mt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  b[n] = function(s) {
    if (!this[0])
      return ft(s) ? void 0 : this;
    if (!arguments.length)
      return _n(this[0]) ? this[0].document.documentElement[`client${e}`] : We(this[0]) ? $l(this[0], e) : this[0].getBoundingClientRect()[n] - $a(this[0], !t);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Yt(o, "boxSizing");
      o.style[n] = xl(n, i + (a === "border-box" ? $a(o, !t) : 0));
    });
  };
});
const Ma = "___cd";
b.toggle = function(t) {
  return this.each((e, n) => {
    if (!X(n))
      return;
    const s = Sa(n);
    (ft(t) ? s : t) ? (n.style.display = n[Ma] || "", Sa(n) && (n.style.display = xu(n.tagName))) : s || (n[Ma] = Yt(n, "display"), n.style.display = "none");
  });
};
b.hide = function() {
  return this.toggle(!1);
};
b.show = function() {
  return this.toggle(!0);
};
const Ta = "___ce", co = ".", ho = { focus: "focusin", blur: "focusout" }, Sl = { mouseenter: "mouseover", mouseleave: "mouseout" }, Fu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function uo(t) {
  return Sl[t] || ho[t] || t;
}
function fo(t) {
  const e = t.split(co);
  return [e[0], e.slice(1).sort()];
}
b.trigger = function(t, e) {
  if (nt(t)) {
    const [s, i] = fo(t), r = uo(s);
    if (!r)
      return this;
    const o = Fu.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Gt.createEvent(o), t.initEvent(r, !0, !0), t.namespace = i.join(co), t.___ot = s;
  }
  t.___td = e;
  const n = t.___ot in ho;
  return this.each((s, i) => {
    n && He(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function Cl(t) {
  return t[Ta] = t[Ta] || {};
}
function Uu(t, e, n, s, i) {
  const r = Cl(t);
  r[e] = r[e] || [], r[e].push([n, s, i]), t.addEventListener(e, i);
}
function El(t, e) {
  return !e || !io.call(e, (n) => t.indexOf(n) < 0);
}
function Js(t, e, n, s, i) {
  const r = Cl(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, a, c]) => {
      if (i && c.guid !== i.guid || !El(o, n) || s && s !== a)
        return !0;
      t.removeEventListener(e, c);
    }));
  else
    for (e in r)
      Js(t, e, n, s, i);
}
b.off = function(t, e, n) {
  if (ft(t))
    this.each((s, i) => {
      !X(i) && !We(i) && !_n(i) || Js(i);
    });
  else if (nt(t))
    He(e) && (n = e, e = ""), Z(Ni(t), (s, i) => {
      const [r, o] = fo(i), a = uo(r);
      this.each((c, h) => {
        !X(h) && !We(h) && !_n(h) || Js(h, a, o, e, n);
      });
    });
  else
    for (const s in t)
      this.off(s, t[s]);
  return this;
};
b.remove = function(t) {
  return _e(this, t).detach().off(), this;
};
b.replaceWith = function(t) {
  return this.before(t).remove();
};
b.replaceAll = function(t) {
  return _(t).replaceWith(this), this;
};
function Vu(t, e, n, s, i) {
  if (!nt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return nt(e) || (ft(e) || Qn(e) ? e = "" : ft(n) ? (n = e, e = "") : (s = n, n = e, e = "")), He(s) || (s = n, n = void 0), s ? (Z(Ni(t), (r, o) => {
    const [a, c] = fo(o), h = uo(a), l = a in Sl, f = a in ho;
    h && this.each((d, u) => {
      if (!X(u) && !We(u) && !_n(u))
        return;
      const p = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !El(c, m.namespace.split(co)) || !e && (f && (m.target !== u || m.___ot === h) || l && m.relatedTarget && u.contains(m.relatedTarget)))
          return;
        let w = u;
        if (e) {
          let v = m.target;
          for (; !yl(v, e); )
            if (v === u || (v = v.parentNode, !v))
              return;
          w = v;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return u;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const g = s.call(w, m, m.___td);
        i && Js(u, h, c, e, p), g === !1 && (m.preventDefault(), m.stopPropagation());
      };
      p.guid = s.guid = s.guid || _.guid++, Uu(u, h, c, e, p);
    });
  }), this) : this;
}
b.on = Vu;
function ju(t, e, n, s) {
  return this.on(t, e, n, s, !0);
}
b.one = ju;
const qu = /\r?\n/g;
function Gu(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(qu, `\r
`))}`;
}
const Yu = /file|reset|submit|button|image/i, Ml = /radio|checkbox/i;
b.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Z(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Yu.test(i.type) || Ml.test(i.type) && !i.checked)
        return;
      const r = vl(i);
      if (!ft(r)) {
        const o = Ri(r) ? r : [r];
        Z(o, (a, c) => {
          t += Gu(i.name, c);
        });
      }
    });
  }), t.slice(1);
};
window.$ = _;
function Ku(t, e) {
  if (t == null)
    return [t, void 0];
  typeof e == "string" && (e = e.split("."));
  const n = e.join(".");
  let s = t;
  const i = [s];
  for (; typeof s == "object" && s !== null && e.length; ) {
    let r = e.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${n}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${n}".`);
  return i;
}
function Xu(t, e, n) {
  try {
    const s = Ku(t, e), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function Qi(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function ur(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Qi(t) && Qi(n))
    for (const s in n)
      Qi(n[s]) ? (t[s] || Object.assign(t, { [s]: {} }), ur(t[s], n[s])) : Object.assign(t, { [s]: n[s] });
  return ur(t, ...e);
}
function dt(t, ...e) {
  if (e.length === 0)
    return t;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const n = e[0];
    return Object.keys(n).forEach((s) => {
      const i = n[s] ?? 0;
      t = t.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), t;
  }
  for (let n = 0; n < e.length; n++) {
    const s = e[n] ?? "";
    t = t.replace(new RegExp(`\\{${n}\\}`, "g"), `${s}`);
  }
  return t;
}
var po = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(po || {});
function $p(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / po[n]).toFixed(e) + n);
}
const Sp = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const s = n[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * po[s];
};
let mo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), re;
function Ju() {
  return mo;
}
function Zu(t) {
  mo = t.toLowerCase();
}
function Tl(t, e) {
  re || (re = {}), typeof t == "string" && (t = { [t]: e ?? {} }), ur(re, t);
}
function Kt(t, e, n, s, i, r) {
  Array.isArray(t) ? re && t.unshift(re) : t = re ? [re, t] : [t], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || mo;
  let a;
  for (const c of t) {
    if (!c)
      continue;
    const h = c[o];
    if (!h)
      continue;
    const l = r && c === re ? `${r}.${e}` : e;
    if (a = Xu(h, l), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? dt(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Qu(t, e, n, s) {
  return Kt(void 0, t, e, n, s);
}
Kt.addLang = Tl;
Kt.getLang = Qu;
Kt.getCode = Ju;
Kt.setCode = Zu;
Tl({
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
function Rl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? e[o][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Rl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...t) => Rl(...t).reduce((e, [n, s]) => (s && e.push(n), e), []).join(" ");
_.classes = M;
_.fn.setClass = function(t, ...e) {
  return this.each((n, s) => {
    const i = _(s);
    t === !0 ? i.attr("class", M(i.attr("class"), ...e)) : i.addClass(M(t, ...e));
  });
};
const En = /* @__PURE__ */ new WeakMap();
function Al(t, e, n) {
  const s = En.has(t), i = s ? En.get(t) : {};
  typeof e == "string" ? i[e] = n : e === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, e), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && t instanceof Element && Object.assign(i, _(t).dataset(), i), En.set(t, i)) : En.delete(t);
}
function tf(t, e) {
  let n = En.get(t);
  return !n && t instanceof Element && (n = _(t).dataset()), e === void 0 ? n || {} : n == null ? void 0 : n[e];
}
_.fn.dataset = _.fn.data;
_.fn.data = function(...t) {
  if (!this.length)
    return;
  const [e, n] = t;
  return !t.length || t.length === 1 && typeof e == "string" ? tf(this[0], e) : this.each((s, i) => Al(i, e, n));
};
_.fn.removeData = function(t = null) {
  return this.each((e, n) => Al(n, t));
};
_.fn._attr = _.fn.attr;
_.fn.extend({
  attr(...t) {
    const [e, n] = t;
    return !t.length || t.length === 1 && typeof e == "string" ? this._attr.apply(this, t) : typeof e == "object" ? (e && Object.keys(e).forEach((s) => {
      const i = e[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(e) : this._attr(e, n);
  }
});
_.Event = (t, e) => {
  const [n, ...s] = t.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = e, i;
};
function Nl(t, e) {
  const n = _(t)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: c } = window, { clientHeight: h, clientWidth: l } = document.documentElement, f = a || h, d = c || l;
  if (e != null && e.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= d && i + o <= f;
  const u = i <= f && i + o >= 0, p = s <= d && s + r >= 0;
  return u && p;
}
_.fn.isVisible = function(t) {
  return this.each((e, n) => {
    Nl(n, t);
  });
};
function go(t, e) {
  const n = _(t);
  if (e !== void 0) {
    n.append(`<script>${e}<\/script>`);
    return;
  }
  n.find("script").each((s, i) => {
    go(n, i.innerHTML), i.remove();
  });
}
_.fn.runJS = function(t) {
  return this.each((e, n) => {
    go(n, t);
  });
};
const Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Nl,
  runJS: go
}, Symbol.toStringTag, { value: "Module" }));
var Wi, z, Ll, rt, Ce, Ra, Wl, fr, Zs = {}, Dl = [], ef = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, _o = Array.isArray;
function he(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Pl(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function ot(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Wi.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return Ts(t, o, s, i, null);
}
function Ts(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ll };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Xt() {
  return { current: null };
}
function Di(t) {
  return t.children;
}
function G(t, e) {
  this.props = t, this.context = e;
}
function ts(t, e) {
  if (e == null)
    return t.__ ? ts(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ts(t) : null;
}
function Il(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Il(t);
  }
}
function Aa(t) {
  (!t.__d && (t.__d = !0) && Ce.push(t) && !Qs.__r++ || Ra !== z.debounceRendering) && ((Ra = z.debounceRendering) || Wl)(Qs);
}
function Qs() {
  var t, e, n, s, i, r, o, a;
  for (Ce.sort(fr); t = Ce.shift(); )
    t.__d && (e = Ce.length, s = void 0, i = void 0, o = (r = (n = t).__v).__e, (a = n.__P) && (s = [], (i = he({}, r)).__v = r.__v + 1, yo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? ts(r), r.__h), Fl(s, r), r.__e != o && Il(r)), Ce.length > e && Ce.sort(fr));
  Qs.__r = 0;
}
function Ol(t, e, n, s, i, r, o, a, c, h) {
  var l, f, d, u, p, m, w, g = s && s.__k || Dl, v = g.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if ((u = n.__k[l] = (u = e[l]) == null || typeof u == "boolean" || typeof u == "function" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ts(null, u, null, null, u) : _o(u) ? Ts(Di, { children: u }, null, null, null) : u.__b > 0 ? Ts(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
      if (u.__ = n, u.__b = n.__b + 1, (d = g[l]) === null || d && u.key == d.key && u.type === d.type)
        g[l] = void 0;
      else
        for (f = 0; f < v; f++) {
          if ((d = g[f]) && u.key == d.key && u.type === d.type) {
            g[f] = void 0;
            break;
          }
          d = null;
        }
      yo(t, u, d = d || Zs, i, r, o, a, c, h), p = u.__e, (f = u.ref) && d.ref != f && (w || (w = []), d.ref && w.push(d.ref, null, u), w.push(f, u.__c || p, u)), p != null ? (m == null && (m = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = Hl(u, c, t) : c = Bl(t, u, d, g, p, c), typeof n.type == "function" && (n.__d = c)) : c && d.__e == c && c.parentNode != t && (c = ts(d));
    }
  for (n.__e = m, l = v; l--; )
    g[l] != null && (typeof n.type == "function" && g[l].__e != null && g[l].__e == n.__d && (n.__d = zl(s).nextSibling), Vl(g[l], g[l]));
  if (w)
    for (l = 0; l < w.length; l++)
      Ul(w[l], w[++l], w[++l]);
}
function Hl(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? Hl(s, e, n) : Bl(n, s, s, i, s.__e, e));
  return e;
}
function Bl(t, e, n, s, i, r) {
  var o, a, c;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (a = r, c = 0; (a = a.nextSibling) && c < s.length; c += 1)
          if (a == i)
            break t;
        t.insertBefore(i, r), o = r;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function zl(t) {
  var e, n, s;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (s = zl(n)))
        return s;
  }
  return null;
}
function nf(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ti(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ti(t, r, e[r], n[r], s);
}
function Na(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ef.test(e) ? n : n + "px";
}
function ti(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || Na(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || Na(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? Wa : La, r) : t.removeEventListener(e, r ? Wa : La, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function La(t) {
  return this.l[t.type + !1](z.event ? z.event(t) : t);
}
function Wa(t) {
  return this.l[t.type + !0](z.event ? z.event(t) : t);
}
function yo(t, e, n, s, i, r, o, a, c) {
  var h, l, f, d, u, p, m, w, g, v, x, k, S, N, R, T = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = z.__b) && h(e);
  try {
    t:
      if (typeof T == "function") {
        if (w = e.props, g = (h = T.contextType) && s[h.__c], v = h ? g ? g.props.value : h.__ : s, n.__c ? m = (l = e.__c = n.__c).__ = l.__E : ("prototype" in T && T.prototype.render ? e.__c = l = new T(w, v) : (e.__c = l = new G(w, v), l.constructor = T, l.render = rf), g && g.sub(l), l.props = w, l.state || (l.state = {}), l.context = v, l.__n = s, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), T.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = he({}, l.__s)), he(l.__s, T.getDerivedStateFromProps(w, l.__s))), d = l.props, u = l.state, l.__v = e, f)
          T.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && w !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, v) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (l.props = w, l.state = l.__s, l.__d = !1), l.__e = !1, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), x = 0; x < l._sb.length; x++)
              l.__h.push(l._sb[x]);
            l._sb = [], l.__h.length && o.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(d, u, p);
          });
        }
        if (l.context = v, l.props = w, l.__P = t, k = z.__r, S = 0, "prototype" in T && T.prototype.render) {
          for (l.state = l.__s, l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++S < 25);
        l.state = l.__s, l.getChildContext != null && (s = he(he({}, s), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, u)), Ol(t, _o(R = h != null && h.type === Di && h.key == null ? h.props.children : h) ? R : [R], e, n, s, i, r, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), m && (l.__E = l.__ = null), l.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = sf(n.__e, e, n, s, i, r, o, c);
    (h = z.diffed) && h(e);
  } catch (D) {
    e.__v = null, (c || r != null) && (e.__e = a, e.__h = !!c, r[r.indexOf(a)] = null), z.__e(D, e, n);
  }
}
function Fl(t, e) {
  z.__c && z.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      z.__e(s, n.__v);
    }
  });
}
function sf(t, e, n, s, i, r, o, a) {
  var c, h, l, f = n.props, d = e.props, u = e.type, p = 0;
  if (u === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        t = c, r[p] = null;
        break;
      }
  }
  if (t == null) {
    if (u === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, a = !1;
  }
  if (u === null)
    f === d || a && t.data === d || (t.data = d);
  else {
    if (r = r && Wi.call(t.childNodes), h = (f = n.props || Zs).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (nf(t, d, f, i, a), l)
      e.__k = [];
    else if (Ol(t, _o(p = e.props.children) ? p : [p], e, n, s, i && u !== "foreignObject", r, o, r ? r[0] : n.__k && ts(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && Pl(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || u === "progress" && !p || u === "option" && p !== f.value) && ti(t, "value", p, f.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && ti(t, "checked", p, f.checked, !1));
  }
  return t;
}
function Ul(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    z.__e(s, n);
  }
}
function Vl(t, e, n) {
  var s, i;
  if (z.unmount && z.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Ul(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, e);
      }
    s.base = s.__P = null, t.__c = void 0;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Vl(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || Pl(t.__e), t.__ = t.__e = t.__d = void 0;
}
function rf(t, e, n) {
  return this.constructor(t, n);
}
function es(t, e, n) {
  var s, i, r;
  z.__ && z.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, r = [], yo(e, t = (!s && n || e).__k = ot(Di, null, [t]), i || Zs, Zs, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? Wi.call(e.childNodes) : null, r, !s && n ? n : i ? i.__e : e.firstChild, s), Fl(r, t);
}
Wi = Dl.slice, z = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Ll = 0, rt = function(t) {
  return t != null && t.constructor === void 0;
}, G.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof t == "function" && (t = t(he({}, n), this.props)), t && he(n, t), t != null && this.__v && (e && this._sb.push(e), Aa(this));
}, G.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Aa(this));
}, G.prototype.render = Di, Ce = [], Wl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, fr = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Qs.__r = 0;
var jl = function(t, e, n, s) {
  var i;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var o = e[r++], a = e[r] ? (e[0] |= o ? 1 : 2, n[e[r++]]) : e[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[e[++r]] = a : o === 6 ? s[1][e[++r]] += a + "" : o ? (i = t.apply(a, jl(t, a, n, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = i)) : s.push(a);
  }
  return s;
}, Da = /* @__PURE__ */ new Map();
function of(t) {
  var e = Da.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Da.set(this, e)), (e = jl(this, e.get(t) || (e.set(t, e = function(n) {
    for (var s, i, r = 1, o = "", a = "", c = [0], h = function(d) {
      r === 1 && (d || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, d, o) : r === 3 && (d || o) ? (c.push(3, d, o), r = 2) : r === 2 && o === "..." && d ? c.push(4, d, 0) : r === 2 && o && !d ? c.push(5, 0, !0, o) : r >= 5 && ((o || !d && r === 5) && (c.push(r, 0, o, i), r = 6), d && (c.push(r, d, 0, i), r = 6)), o = "";
    }, l = 0; l < n.length; l++) {
      l && (r === 1 && h(), h(l));
      for (var f = 0; f < n[l].length; f++)
        s = n[l][f], r === 1 ? s === "<" ? (h(), c = [c], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[l][f + 1] === ">") ? (h(), r === 3 && (c = c[0]), r = c, (c = c[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, c = c[0]);
    }
    return h(), c;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
const Ep = of.bind(ot);
function af(t) {
  const { tagName: e = "div", class: n, className: s, style: i, children: r, attrs: o, ...a } = t;
  return ot(e, { class: M(n, s), style: i, ...a, ...o }, r);
}
var lf = 0;
function y(t, e, n, s, i, r) {
  var o, a, c = {};
  for (a in e)
    a == "ref" ? o = e[a] : c[a] = e[a];
  var h = { type: t, props: c, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --lf, __source: i, __self: r };
  if (typeof t == "function" && (o = t.defaultProps))
    for (a in o)
      c[a] === void 0 && (c[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var as;
class ql extends G {
  constructor() {
    super(...arguments);
    L(this, as, Xt());
  }
  componentDidMount() {
    this.props.executeScript && _(E(this, as).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ y(af, { ref: E(this, as), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
as = new WeakMap();
function cf(t) {
  const {
    tag: e,
    className: n,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: c,
    onRenderItem: h,
    ...l
  } = t, f = [n], d = { ...s }, u = [], p = [];
  return i.forEach((m) => {
    const w = [];
    typeof m == "string" && a && a[m] && (m = a[m]), typeof m == "function" ? c ? w.push(...c.call(o, m, u, ...r)) : w.push(...m.call(o, u, ...r) ?? []) : w.push(m), w.forEach((g) => {
      g != null && (typeof g == "object" && !rt(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? u.push(
        /* @__PURE__ */ y("div", { className: M(g.className), style: g.style, dangerouslySetInnerHTML: { __html: g.html }, ...g.attrs ?? {} })
      ) : g.__html ? p.push(g.__html) : (g.style && Object.assign(d, g.style), g.className && f.push(g.className), g.children && u.push(g.children), g.attrs && Object.assign(l, g.attrs)) : u.push(g));
    });
  }), p.length && Object.assign(l, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(f),
    style: d,
    ...l
  }, u];
}
function wo({
  tag: t = "div",
  ...e
}) {
  const [n, s] = cf(e);
  return ot(t, n, ...s);
}
function dr(t) {
  if (rt(t))
    return t;
  if (typeof t == "string")
    return t.startsWith("icon-") || (t = `icon-${t}`), /* @__PURE__ */ y("i", { class: `icon ${t}` });
}
function hf(t) {
  return this.getChildContext = () => t.context, t.children;
}
function uf(t) {
  const e = this, n = t._container;
  e.componentWillUnmount = function() {
    es(null, e._temp), e._temp = null, e._container = null;
  }, e._container && e._container !== n && e.componentWillUnmount(), t._vnode ? (e._temp || (e._container = n, e._temp = {
    nodeType: 1,
    parentNode: n,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(s, i) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), e._container.removeChild(s);
    }
  }), es(
    ot(hf, { context: e.context }, t._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function ff(t, e) {
  const n = ot(uf, { _vnode: t, _container: e });
  return n.containerInfo = e, n;
}
var Gl = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, xn = (t, e, n) => (Gl(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tr = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, kn = (t, e, n, s) => (Gl(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ke, Mn, Rs;
const Yl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    tr(this, ke, void 0), tr(this, Mn, void 0), tr(this, Rs, void 0);
    const { KEY: n, DATA_KEY: s, DEFAULT: i } = this.constructor, r = _(t);
    if (r.data(n))
      throw new Error("[ZUI] The component has been initialized on element.");
    const o = _.guid++;
    kn(this, Rs, o), r.data(n, this).attr(s, `${o}`), kn(this, Mn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), kn(this, ke, { ...i, ...r.dataset() }), this.setOptions(e), this.init(), requestAnimationFrame(() => {
      this.emit("inited", this.options), this.afterInit();
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
  /**
   * Get the component element.
   */
  get element() {
    return xn(this, Mn);
  }
  /**
   * Get the component options.
   */
  get options() {
    return xn(this, ke);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return xn(this, Rs);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return _(this.element);
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
    const { NAMESPACE: t, KEY: e, DATA_KEY: n } = this.constructor;
    this.$element.off(t).removeData(e).attr(n, null), kn(this, ke, void 0), kn(this, Mn, void 0), this.emit("destroyed");
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && _.extend(xn(this, ke), t), xn(this, ke);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = _.Event(this.constructor.wrapEventNames(t));
    return this.$element.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e) {
    this.$element.on(this.constructor.wrapEventNames(t), e);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(t, e) {
    this.$element.one(this.constructor.wrapEventNames(t), e);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(t, e) {
    this.$element.off(this.constructor.wrapEventNames(t), e);
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
    return Kt(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Kt(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  static wrapEventNames(t) {
    return t.split(" ").map((e) => e.includes(".") ? e : `${e}${this.NAMESPACE}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(t) {
    return _(t).data(this.KEY);
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
    const n = this.get(t);
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
    return _(t || document).find(`[${this.DATA_KEY}]`).map((e, n) => _(n).data(this.KEY)).get();
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t) {
    return t === void 0 ? this.getAll().sort((e, n) => e.gid - n.gid)[0] : this.get(_(t).closest(`[${this.DATA_KEY}]`));
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    _.fn.extend({
      [t || this.NAME.replace(/(^[A-Z]+)/, (e) => e.toLowerCase())](e, ...n) {
        return this.each((s, i) => {
          var o;
          const r = this.ensure(i, typeof e == "object" ? e : void 0);
          typeof e == "string" && ((o = r[e]) == null || o.call(r, ...n));
        });
      }
    });
  }
};
let Dt = Yl;
ke = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Dt.DEFAULT = {};
Dt.NAME = Yl.name;
class at extends Dt {
  constructor() {
    super(...arguments), this.ref = Xt();
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
    var e, n;
    (n = (e = this.$) == null ? void 0 : e.componentWillUnmount) == null || n.call(e), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(e) {
    es(
      ot(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
var vo, q, Kl, Xl, Fn, Pa, Jl = {}, Zl = [], df = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ue(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Ql(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function vn(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? vo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return As(t, o, s, i, null);
}
function As(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Kl };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function pf() {
  return { current: null };
}
function bo(t) {
  return t.children;
}
function Un(t, e) {
  this.props = t, this.context = e;
}
function ns(t, e) {
  if (e == null)
    return t.__ ? ns(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? ns(t) : null;
}
function tc(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return tc(t);
  }
}
function Ia(t) {
  (!t.__d && (t.__d = !0) && Fn.push(t) && !ei.__r++ || Pa !== q.debounceRendering) && ((Pa = q.debounceRendering) || setTimeout)(ei);
}
function ei() {
  for (var t; ei.__r = Fn.length; )
    t = Fn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), Fn = [], t.some(function(e) {
      var n, s, i, r, o, a;
      e.__d && (o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ue({}, r)).__v = r.__v + 1, ic(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? ns(r), r.__h), gf(s, r), r.__e != o && tc(r)));
    });
}
function ec(t, e, n, s, i, r, o, a, c, h) {
  var l, f, d, u, p, m, w, g = s && s.__k || Zl, v = g.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if ((u = n.__k[l] = (u = e[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? As(null, u, null, null, u) : Array.isArray(u) ? As(bo, { children: u }, null, null, null) : u.__b > 0 ? As(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
      if (u.__ = n, u.__b = n.__b + 1, (d = g[l]) === null || d && u.key == d.key && u.type === d.type)
        g[l] = void 0;
      else
        for (f = 0; f < v; f++) {
          if ((d = g[f]) && u.key == d.key && u.type === d.type) {
            g[f] = void 0;
            break;
          }
          d = null;
        }
      ic(t, u, d = d || Jl, i, r, o, a, c, h), p = u.__e, (f = u.ref) && d.ref != f && (w || (w = []), d.ref && w.push(d.ref, null, u), w.push(f, u.__c || p, u)), p != null ? (m == null && (m = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = nc(u, c, t) : c = sc(t, u, d, g, p, c), typeof n.type == "function" && (n.__d = c)) : c && d.__e == c && c.parentNode != t && (c = ns(d));
    }
  for (n.__e = m, l = v; l--; )
    g[l] != null && oc(g[l], g[l]);
  if (w)
    for (l = 0; l < w.length; l++)
      rc(w[l], w[++l], w[++l]);
}
function nc(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? nc(s, e, n) : sc(n, s, s, i, s.__e, e));
  return e;
}
function sc(t, e, n, s, i, r) {
  var o, a, c;
  if (e.__d !== void 0)
    o = e.__d, e.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== t)
        t.appendChild(i), o = null;
      else {
        for (a = r, c = 0; (a = a.nextSibling) && c < s.length; c += 2)
          if (a == i)
            break t;
        t.insertBefore(i, r), o = r;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function mf(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || ni(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ni(t, r, e[r], n[r], s);
}
function Oa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || df.test(e) ? n : n + "px";
}
function ni(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || Oa(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || Oa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? Ba : Ha, r) : t.removeEventListener(e, r ? Ba : Ha, r);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
        try {
          t[e] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
}
function Ha(t) {
  this.l[t.type + !1](q.event ? q.event(t) : t);
}
function Ba(t) {
  this.l[t.type + !0](q.event ? q.event(t) : t);
}
function ic(t, e, n, s, i, r, o, a, c) {
  var h, l, f, d, u, p, m, w, g, v, x, k, S, N, R, T = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = q.__b) && h(e);
  try {
    t:
      if (typeof T == "function") {
        if (w = e.props, g = (h = T.contextType) && s[h.__c], v = h ? g ? g.props.value : h.__ : s, n.__c ? m = (l = e.__c = n.__c).__ = l.__E : ("prototype" in T && T.prototype.render ? e.__c = l = new T(w, v) : (e.__c = l = new Un(w, v), l.constructor = T, l.render = yf), g && g.sub(l), l.props = w, l.state || (l.state = {}), l.context = v, l.__n = s, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), T.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ue({}, l.__s)), ue(l.__s, T.getDerivedStateFromProps(w, l.__s))), d = l.props, u = l.state, f)
          T.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (T.getDerivedStateFromProps == null && w !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, v) === !1 || e.__v === n.__v) {
            for (l.props = w, l.state = l.__s, e.__v !== n.__v && (l.__d = !1), l.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), x = 0; x < l._sb.length; x++)
              l.__h.push(l._sb[x]);
            l._sb = [], l.__h.length && o.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(d, u, p);
          });
        }
        if (l.context = v, l.props = w, l.__v = e, l.__P = t, k = q.__r, S = 0, "prototype" in T && T.prototype.render) {
          for (l.state = l.__s, l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++S < 25);
        l.state = l.__s, l.getChildContext != null && (s = ue(ue({}, s), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, u)), R = h != null && h.type === bo && h.key == null ? h.props.children : h, ec(t, Array.isArray(R) ? R : [R], e, n, s, i, r, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), m && (l.__E = l.__ = null), l.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = _f(n.__e, e, n, s, i, r, o, c);
    (h = q.diffed) && h(e);
  } catch (D) {
    e.__v = null, (c || r != null) && (e.__e = a, e.__h = !!c, r[r.indexOf(a)] = null), q.__e(D, e, n);
  }
}
function gf(t, e) {
  q.__c && q.__c(e, t), t.some(function(n) {
    try {
      t = n.__h, n.__h = [], t.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      q.__e(s, n.__v);
    }
  });
}
function _f(t, e, n, s, i, r, o, a) {
  var c, h, l, f = n.props, d = e.props, u = e.type, p = 0;
  if (u === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!u && (u ? c.localName === u : c.nodeType === 3)) {
        t = c, r[p] = null;
        break;
      }
  }
  if (t == null) {
    if (u === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", u) : document.createElement(u, d.is && d), r = null, a = !1;
  }
  if (u === null)
    f === d || a && t.data === d || (t.data = d);
  else {
    if (r = r && vo.call(t.childNodes), h = (f = n.props || Jl).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (mf(t, d, f, i, a), l)
      e.__k = [];
    else if (p = e.props.children, ec(t, Array.isArray(p) ? p : [p], e, n, s, i && u !== "foreignObject", r, o, r ? r[0] : n.__k && ns(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && Ql(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || u === "progress" && !p || u === "option" && p !== f.value) && ni(t, "value", p, f.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && ni(t, "checked", p, f.checked, !1));
  }
  return t;
}
function rc(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    q.__e(s, n);
  }
}
function oc(t, e, n) {
  var s, i;
  if (q.unmount && q.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || rc(s, null, e)), (s = t.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        q.__e(r, e);
      }
    s.base = s.__P = null, t.__c = void 0;
  }
  if (s = t.__k)
    for (i = 0; i < s.length; i++)
      s[i] && oc(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || Ql(t.__e), t.__ = t.__e = t.__d = void 0;
}
function yf(t, e, n) {
  return this.constructor(t, n);
}
vo = Zl.slice, q = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Kl = 0, Xl = function(t) {
  return t != null && t.constructor === void 0;
}, Un.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ue({}, this.state), typeof t == "function" && (t = t(ue({}, n), this.props)), t && ue(n, t), t != null && this.__v && (e && this._sb.push(e), Ia(this));
}, Un.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ia(this));
}, Un.prototype.render = bo, Fn = [], ei.__r = 0;
var wf = 0;
function vt(t, e, n, s, i) {
  var r, o, a = {};
  for (o in e)
    o == "ref" ? r = e[o] : a[o] = e[o];
  var c = { type: t, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wf, __source: i, __self: s };
  if (typeof t == "function" && (r = t.defaultProps))
    for (o in r)
      a[o] === void 0 && (a[o] = r[o]);
  return q.vnode && q.vnode(c), c;
}
function vf({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return vn(t, {
    className: M(e),
    style: s,
    ...i
  }, n);
}
function ac({
  type: t,
  component: e = "a",
  className: n,
  children: s,
  attrs: i,
  url: r,
  disabled: o,
  active: a,
  icon: c,
  text: h,
  target: l,
  trailingIcon: f,
  hint: d,
  checked: u,
  onClick: p,
  ...m
}) {
  const w = [
    typeof u == "boolean" ? /* @__PURE__ */ vt("div", { class: `checkbox-primary${u ? " checked" : ""}`, children: /* @__PURE__ */ vt("label", {}) }) : null,
    dr(c),
    /* @__PURE__ */ vt("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    dr(f)
  ];
  return vn(e, {
    className: M(n, { disabled: o, active: a }),
    title: d,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: l,
    onClick: p,
    ...m,
    ...i
  }, ...w);
}
function bf({
  component: t = "div",
  className: e,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return vn(t, {
    className: M(e),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function xf({
  component: t = "div",
  className: e,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return vn(t, {
    className: M(e),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function kf({ type: t, ...e }) {
  return /* @__PURE__ */ vt(wo, { ...e });
}
function lc({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return vn(t, {
    className: M(e),
    style: s,
    ...i
  }, n);
}
const pr = class extends Un {
  constructor() {
    super(...arguments), this.ref = pf();
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
  handleItemClick(t, e, n, s) {
    n && n.call(s.target, s);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: t, index: e, event: s });
  }
  beforeRender() {
    var n;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this));
    const e = (n = t.beforeRender) == null ? void 0 : n.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, n) {
    const { commonItemProps: s, onClickItem: i } = t, r = { key: n, ...e };
    return s && Object.assign(r, s[e.type || "item"]), (i || e.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, e.onClick)), r.className = M(r.className), r;
  }
  renderItem(t, e, n) {
    const s = this.getItemRenderProps(t, e, n), { itemRender: i } = t;
    if (i) {
      if (typeof i == "object") {
        const p = i[e.type || "item"];
        if (p)
          return /* @__PURE__ */ vt(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, vn);
        if (Xl(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: c, rootClass: h, rootStyle: l, rootChildren: f, ...d } = s;
    if (r === "html")
      return /* @__PURE__ */ vt(
        "li",
        {
          className: M("action-menu-item", `${this.name}-html`, h, d.className),
          ...c,
          style: l || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const u = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || pr.ItemComponents[r] : o;
    return Object.assign(d, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), t.checkbox && r === "item" && d.checked === void 0 && (d.checked = d.active), this.renderTypedItem(u, {
      className: M(h),
      children: f,
      style: l,
      key: a,
      ...c
    }, {
      ...d,
      type: r,
      component: typeof o == "string" ? o : void 0
    });
  }
  renderTypedItem(t, e, n) {
    const { children: s, className: i, key: r, ...o } = e;
    return /* @__PURE__ */ vt(
      "li",
      {
        className: M("action-menu-item", `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ vt(t, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      r
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: e,
      style: n,
      commonItemProps: s,
      className: i,
      items: r,
      children: o,
      itemRender: a,
      onClickItem: c,
      beforeRender: h,
      afterRender: l,
      beforeDestroy: f,
      activeClass: d,
      activeKey: u,
      ...p
    } = t, m = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ vt(m, { class: M(this.name, i), style: n, ...p, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      o
    ] });
  }
};
let Be = pr;
Be.ItemComponents = {
  divider: vf,
  item: ac,
  heading: bf,
  space: xf,
  custom: kf,
  basic: lc
};
Be.ROOT_TAG = "menu";
Be.NAME = "action-menu";
class cc extends at {
}
cc.NAME = "ActionMenu";
cc.Component = Be;
function hc({
  ...t
}) {
  return /* @__PURE__ */ vt(ac, { ...t });
}
var uc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, _t = (t, e, n) => (uc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), er = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $f = (t, e, n, s) => (uc(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ns, It, Tn;
let xo = class extends Be {
  constructor(e) {
    super(e), er(this, Ns, /* @__PURE__ */ new Set()), er(this, It, void 0), er(this, Tn, (n, s, i) => {
      this.toggleNestedMenu(n, s), i.preventDefault();
    }), $f(this, It, e.nestedShow === void 0), _t(this, It) && (this.state = { nestedShow: e.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const e = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, ...o } = e;
    return o;
  }
  renderNestedMenu(e) {
    let { items: n } = e;
    if (!n || (typeof n == "function" && (n = n(e, this)), !n.length))
      return;
    const s = this.constructor, { name: i, controlledMenu: r, nestedShow: o, beforeDestroy: a, beforeRender: c, itemRender: h, activeClass: l, activeKey: f, onClickItem: d, afterRender: u, commonItemProps: p, activeIcon: m } = this.props;
    return /* @__PURE__ */ vt(
      s,
      {
        items: n,
        name: i,
        nestedShow: _t(this, It) ? this.state.nestedShow : o,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: r || this,
        commonItemProps: p,
        onClickItem: d,
        afterRender: u,
        beforeRender: c,
        beforeDestroy: a,
        itemRender: h,
        activeClass: l,
        activeKey: f,
        activeIcon: m
      }
    );
  }
  isNestedItem(e) {
    return (!e.type || e.type === "item") && !!e.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(e, n) {
  }
  getItemRenderProps(e, n, s) {
    const i = super.getItemRenderProps(e, n, s);
    if (!this.isNestedItem(i))
      return i;
    const r = i.key ?? s;
    _t(this, Ns).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ], i.component = hc), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: _t(this, Tn).bind(this, r, !0),
        onMouseLeave: _t(this, Tn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: c } = i;
      i.onClick = (h) => {
        _t(this, Tn).call(this, r, void 0, h), c == null || c(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isNestedMenuShow(e) {
    const n = _t(this, It) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[e] : !!n;
  }
  toggleNestedMenu(e, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(e, n);
    if (!_t(this, It))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [..._t(this, Ns).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
      n = !i[e];
    else if (!!i[e] == !!n)
      return !1;
    return n ? i[e] = n : delete i[e], this.setState({ nestedShow: { ...i } }), !0;
  }
  showNestedMenu(e) {
    return this.toggleNestedMenu(e, !0);
  }
  hideNestedMenu(e) {
    return this.toggleNestedMenu(e, !1);
  }
  showAllNestedMenu() {
    _t(this, It) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    _t(this, It) && this.setState({ nestedShow: !1 });
  }
};
Ns = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
xo.ItemComponents = {
  item: hc
};
class fc extends at {
}
fc.NAME = "ActionMenuNested";
fc.Component = xo;
let Pi = class extends xo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((s) => s.icon)), e.className = M(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((s) => this.isNestedItem(s)),
      "menu-popup": e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ y("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
};
Pi.NAME = "menu";
class dc extends at {
}
dc.NAME = "Menu";
dc.Component = Pi;
class Jt extends G {
  render() {
    const {
      component: e,
      type: n,
      btnType: s,
      size: i,
      className: r,
      children: o,
      url: a,
      target: c,
      disabled: h,
      active: l,
      loading: f,
      loadingIcon: d,
      loadingText: u,
      icon: p,
      text: m,
      trailingIcon: w,
      caret: g,
      square: v,
      hint: x,
      ...k
    } = this.props, S = e || (a ? "a" : "button"), N = m == null || typeof m == "string" && !m.length || f && !u, R = g && N && !p && !w && !o && !f;
    return ot(
      S,
      {
        className: M("btn", n, r, {
          "btn-caret": R,
          disabled: h || f,
          active: l,
          loading: f,
          square: v === void 0 ? !R && !o && N : v
        }, i ? `size-${i}` : ""),
        title: x,
        [S === "a" ? "href" : "data-url"]: a,
        [S === "a" ? "target" : "data-target"]: c,
        type: S === "button" ? s : void 0,
        ...k
      },
      f ? /* @__PURE__ */ y("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : dr(p),
      N ? null : /* @__PURE__ */ y("span", { className: "text", children: f ? u : m }),
      f ? null : o,
      f ? null : typeof w == "string" ? /* @__PURE__ */ y("i", { class: `icon ${w}` }) : w,
      f ? null : g ? /* @__PURE__ */ y("span", { className: typeof g == "string" ? `caret-${g}` : "caret" }) : null
    );
  }
}
function Sf({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Jt, { type: n, ...s });
}
function ps(t) {
  return t.split("-")[1];
}
function ko(t) {
  return t === "y" ? "height" : "width";
}
function Re(t) {
  return t.split("-")[0];
}
function ms(t) {
  return ["top", "bottom"].includes(Re(t)) ? "x" : "y";
}
function za(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ms(e), c = ko(a), h = s[c] / 2 - i[c] / 2, l = a === "x";
  let f;
  switch (Re(e)) {
    case "top":
      f = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      f = { x: r, y: s.y + s.height };
      break;
    case "right":
      f = { x: s.x + s.width, y: o };
      break;
    case "left":
      f = { x: s.x - i.width, y: o };
      break;
    default:
      f = { x: s.x, y: s.y };
  }
  switch (ps(e)) {
    case "start":
      f[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      f[a] += h * (n && l ? -1 : 1);
  }
  return f;
}
const Cf = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: l, y: f } = za(h, s, c), d = s, u = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: w, fn: g } = a[m], { x: v, y: x, data: k, reset: S } = await g({ x: l, y: f, initialPlacement: s, placement: d, strategy: i, middlewareData: u, rects: h, platform: o, elements: { reference: t, floating: e } });
    l = v ?? l, f = x ?? f, u = { ...u, [w]: { ...u[w], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : S.rects), { x: l, y: f } = za(h, d, c)), m = -1);
  }
  return { x: l, y: f, placement: d, strategy: i, middlewareData: u };
};
function pc(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function si(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function mc(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: c } = t, { boundary: h = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: d = !1, padding: u = 0 } = e, p = pc(u), m = a[d ? f === "floating" ? "reference" : "floating" : f], w = si(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: l, strategy: c })), g = f === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, k = si(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: g, offsetParent: v, strategy: c }) : g);
  return { top: (w.top - k.top + p.top) / x.y, bottom: (k.bottom - w.bottom + p.bottom) / x.y, left: (w.left - k.left + p.left) / x.x, right: (k.right - w.right + p.right) / x.x };
}
const Ef = Math.min, Mf = Math.max;
function mr(t, e, n) {
  return Mf(t, Ef(e, n));
}
const Tf = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: c, elements: h } = e;
  if (n == null)
    return {};
  const l = pc(s), f = { x: i, y: r }, d = ms(o), u = ko(d), p = await c.getDimensions(n), m = d === "y", w = m ? "top" : "left", g = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", x = a.reference[u] + a.reference[d] - f[d] - a.floating[u], k = f[d] - a.reference[d], S = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
  let N = S ? S[v] : 0;
  N && await (c.isElement == null ? void 0 : c.isElement(S)) || (N = h.floating[v] || a.floating[u]);
  const R = x / 2 - k / 2, T = l[w], D = N - p[u] - l[g], C = N / 2 - p[u] / 2 + R, W = mr(T, C, D), U = ps(o) != null && C != W && a.reference[u] / 2 - (C < T ? l[w] : l[g]) - p[u] / 2 < 0;
  return { [d]: f[d] - (U ? C < T ? T - C : D - C : 0), data: { [d]: W, centerOffset: C - W } };
} }), Rf = ["top", "right", "bottom", "left"];
Rf.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Af = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ii(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Af[e]);
}
function Nf(t, e, n) {
  n === void 0 && (n = !1);
  const s = ps(t), i = ms(t), r = ko(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = ii(o)), { main: o, cross: ii(o) };
}
const Lf = { start: "end", end: "start" };
function nr(t) {
  return t.replace(/start|end/g, (e) => Lf[e]);
}
const $o = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: c } = e, { mainAxis: h = !0, crossAxis: l = !0, fallbackPlacements: f, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: u = "none", flipAlignment: p = !0, ...m } = t, w = Re(s), g = Re(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = f || (g || !p ? [ii(o)] : function(W) {
      const U = ii(W);
      return [nr(W), U, nr(U)];
    }(o));
    f || u === "none" || x.push(...function(W, U, V, B) {
      const H = ps(W);
      let j = function(gt, ve, St) {
        const ee = ["left", "right"], be = ["right", "left"], Fe = ["top", "bottom"], A = ["bottom", "top"];
        switch (gt) {
          case "top":
          case "bottom":
            return St ? ve ? be : ee : ve ? ee : be;
          case "left":
          case "right":
            return ve ? Fe : A;
          default:
            return [];
        }
      }(Re(W), V === "start", B);
      return H && (j = j.map((gt) => gt + "-" + H), U && (j = j.concat(j.map(nr)))), j;
    }(o, p, u, v));
    const k = [o, ...x], S = await mc(e, m), N = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && N.push(S[w]), l) {
      const { main: W, cross: U } = Nf(s, r, v);
      N.push(S[W], S[U]);
    }
    if (R = [...R, { placement: s, overflows: N }], !N.every((W) => W <= 0)) {
      var T, D;
      const W = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, U = k[W];
      if (U)
        return { data: { index: W, overflows: R }, reset: { placement: U } };
      let V = (D = R.filter((B) => B.overflows[0] <= 0).sort((B, H) => B.overflows[1] - H.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!V)
        switch (d) {
          case "bestFit": {
            var C;
            const B = (C = R.map((H) => [H.placement, H.overflows.filter((j) => j > 0).reduce((j, gt) => j + gt, 0)]).sort((H, j) => H[1] - j[1])[0]) == null ? void 0 : C[0];
            B && (V = B);
            break;
          }
          case "initialPlacement":
            V = o;
        }
      if (s !== V)
        return { reset: { placement: V } };
    }
    return {};
  } };
}, gc = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: c, elements: h } = r, l = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), f = Re(a), d = ps(a), u = ms(a) === "x", p = ["left", "top"].includes(f) ? -1 : 1, m = l && u ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: g, crossAxis: v, alignmentAxis: x } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return d && typeof x == "number" && (v = d === "end" ? -1 * x : x), u ? { x: v * m, y: g * p } : { x: g * p, y: v * m };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Wf(t) {
  return t === "x" ? "y" : "x";
}
const Df = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: s, placement: i } = e, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (w) => {
      let { x: g, y: v } = w;
      return { x: g, y: v };
    } }, ...c } = t, h = { x: n, y: s }, l = await mc(e, c), f = ms(Re(i)), d = Wf(f);
    let u = h[f], p = h[d];
    if (r) {
      const w = f === "y" ? "bottom" : "right";
      u = mr(u + l[f === "y" ? "top" : "left"], u, u - l[w]);
    }
    if (o) {
      const w = d === "y" ? "bottom" : "right";
      p = mr(p + l[d === "y" ? "top" : "left"], p, p - l[w]);
    }
    const m = a.fn({ ...e, [f]: u, [d]: p });
    return { ...m, data: { x: m.x - n, y: m.y - s } };
  } };
};
function ht(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function bt(t) {
  return ht(t).getComputedStyle(t);
}
function _c(t) {
  return t instanceof ht(t).Node;
}
function me(t) {
  return _c(t) ? (t.nodeName || "").toLowerCase() : "";
}
let vs;
function yc() {
  if (vs)
    return vs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (vs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), vs) : navigator.userAgent;
}
function kt(t) {
  return t instanceof ht(t).HTMLElement;
}
function ut(t) {
  return t instanceof ht(t).Element;
}
function Fa(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ht(t).ShadowRoot || t instanceof ShadowRoot;
}
function ss(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = bt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Pf(t) {
  return ["table", "td", "th"].includes(me(t));
}
function gr(t) {
  const e = /firefox/i.test(yc()), n = bt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function _r() {
  return /^((?!chrome|android).)*safari/i.test(yc());
}
function Ii(t) {
  return ["html", "body", "#document"].includes(me(t));
}
const Ua = Math.min, Vn = Math.max, ri = Math.round;
function wc(t) {
  const e = bt(t);
  let n = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = kt(t), r = i ? t.offsetWidth : n, o = i ? t.offsetHeight : s, a = ri(n) !== r || ri(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, fallback: a };
}
function vc(t) {
  return ut(t) ? t : t.contextElement;
}
const bc = { x: 1, y: 1 };
function en(t) {
  const e = vc(t);
  if (!kt(e))
    return bc;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = wc(e);
  let o = (r ? ri(n.width) : n.width) / s, a = (r ? ri(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function De(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = vc(t);
  let c = bc;
  e && (s ? ut(s) && (c = en(s)) : c = en(t));
  const h = a ? ht(a) : window, l = _r() && n;
  let f = (o.left + (l && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, d = (o.top + (l && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, u = o.width / c.x, p = o.height / c.y;
  if (a) {
    const m = ht(a), w = s && ut(s) ? ht(s) : s;
    let g = m.frameElement;
    for (; g && s && w !== m; ) {
      const v = en(g), x = g.getBoundingClientRect(), k = getComputedStyle(g);
      x.x += (g.clientLeft + parseFloat(k.paddingLeft)) * v.x, x.y += (g.clientTop + parseFloat(k.paddingTop)) * v.y, f *= v.x, d *= v.y, u *= v.x, p *= v.y, f += x.x, d += x.y, g = ht(g).frameElement;
    }
  }
  return si({ width: u, height: p, x: f, y: d });
}
function fe(t) {
  return ((_c(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Oi(t) {
  return ut(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function xc(t) {
  return De(fe(t)).left + Oi(t).scrollLeft;
}
function yn(t) {
  if (me(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || Fa(t) && t.host || fe(t);
  return Fa(e) ? e.host : e;
}
function kc(t) {
  const e = yn(t);
  return Ii(e) ? e.ownerDocument.body : kt(e) && ss(e) ? e : kc(e);
}
function jn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = kc(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ht(s);
  return i ? e.concat(r, r.visualViewport || [], ss(s) ? s : []) : e.concat(s, jn(s));
}
function Va(t, e, n) {
  let s;
  if (e === "viewport")
    s = function(o, a) {
      const c = ht(o), h = fe(o), l = c.visualViewport;
      let f = h.clientWidth, d = h.clientHeight, u = 0, p = 0;
      if (l) {
        f = l.width, d = l.height;
        const m = _r();
        (!m || m && a === "fixed") && (u = l.offsetLeft, p = l.offsetTop);
      }
      return { width: f, height: d, x: u, y: p };
    }(t, n);
  else if (e === "document")
    s = function(o) {
      const a = fe(o), c = Oi(o), h = o.ownerDocument.body, l = Vn(a.scrollWidth, a.clientWidth, h.scrollWidth, h.clientWidth), f = Vn(a.scrollHeight, a.clientHeight, h.scrollHeight, h.clientHeight);
      let d = -c.scrollLeft + xc(o);
      const u = -c.scrollTop;
      return bt(h).direction === "rtl" && (d += Vn(a.clientWidth, h.clientWidth) - l), { width: l, height: f, x: d, y: u };
    }(fe(t));
  else if (ut(e))
    s = function(o, a) {
      const c = De(o, !0, a === "fixed"), h = c.top + o.clientTop, l = c.left + o.clientLeft, f = kt(o) ? en(o) : { x: 1, y: 1 };
      return { width: o.clientWidth * f.x, height: o.clientHeight * f.y, x: l * f.x, y: h * f.y };
    }(e, n);
  else {
    const o = { ...e };
    if (_r()) {
      var i, r;
      const a = ht(t);
      o.x -= ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0, o.y -= ((r = a.visualViewport) == null ? void 0 : r.offsetTop) || 0;
    }
    s = o;
  }
  return si(s);
}
function $c(t, e) {
  const n = yn(t);
  return !(n === e || !ut(n) || Ii(n)) && (bt(n).position === "fixed" || $c(n, e));
}
function ja(t, e) {
  return kt(t) && bt(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function qa(t, e) {
  const n = ht(t);
  if (!kt(t))
    return n;
  let s = ja(t, e);
  for (; s && Pf(s) && bt(s).position === "static"; )
    s = ja(s, e);
  return s && (me(s) === "html" || me(s) === "body" && bt(s).position === "static" && !gr(s)) ? n : s || function(i) {
    let r = yn(i);
    for (; kt(r) && !Ii(r); ) {
      if (gr(r))
        return r;
      r = yn(r);
    }
    return null;
  }(t) || n;
}
function If(t, e, n) {
  const s = kt(e), i = fe(e), r = De(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((me(e) !== "body" || ss(i)) && (o = Oi(e)), kt(e)) {
      const c = De(e, !0);
      a.x = c.x + e.clientLeft, a.y = c.y + e.clientTop;
    } else
      i && (a.x = xc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
const Of = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, l) {
    const f = l.get(h);
    if (f)
      return f;
    let d = jn(h).filter((w) => ut(w) && me(w) !== "body"), u = null;
    const p = bt(h).position === "fixed";
    let m = p ? yn(h) : h;
    for (; ut(m) && !Ii(m); ) {
      const w = bt(m), g = gr(m);
      g || w.position !== "fixed" || (u = null), (p ? !g && !u : !g && w.position === "static" && u && ["absolute", "fixed"].includes(u.position) || ss(m) && !g && $c(h, m)) ? d = d.filter((v) => v !== m) : u = w, m = yn(m);
    }
    return l.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], c = o.reduce((h, l) => {
    const f = Va(e, l, i);
    return h.top = Vn(f.top, h.top), h.right = Ua(f.right, h.right), h.bottom = Ua(f.bottom, h.bottom), h.left = Vn(f.left, h.left), h;
  }, Va(e, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = kt(n), r = fe(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((me(n) !== "body" || ss(r)) && (o = Oi(n)), kt(n))) {
    const h = De(n);
    a = en(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + c.x, y: e.y * a.y - o.scrollTop * a.y + c.y };
}, isElement: ut, getDimensions: function(t) {
  return wc(t);
}, getOffsetParent: qa, getDocumentElement: fe, getScale: en, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || qa, r = this.getDimensions;
  return { reference: If(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => bt(t).direction === "rtl" };
function Sc(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, c = i || r ? [...ut(t) ? jn(t) : t.contextElement ? jn(t.contextElement) : [], ...jn(e)] : [];
  c.forEach((d) => {
    const u = !ut(d) && d.toString().includes("V");
    !i || a && !u || d.addEventListener("scroll", n, { passive: !0 }), r && d.addEventListener("resize", n);
  });
  let h, l = null;
  o && (l = new ResizeObserver(() => {
    n();
  }), ut(t) && !a && l.observe(t), ut(t) || !t.contextElement || a || l.observe(t.contextElement), l.observe(e));
  let f = a ? De(t) : null;
  return a && function d() {
    const u = De(t);
    !f || u.x === f.x && u.y === f.y && u.width === f.width && u.height === f.height || n(), f = u, h = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    c.forEach((u) => {
      i && u.removeEventListener("scroll", n), r && u.removeEventListener("resize", n);
    }), (d = l) == null || d.disconnect(), l = null, a && cancelAnimationFrame(h);
  };
}
const So = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Of, ...n }, r = { ...i.platform, _c: s };
  return Cf(t, e, { ...i, platform: r });
};
let Hf = class extends Pi {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  componentWillUnmount() {
    super.componentWillUnmount();
  }
  getPopperOptions() {
    return {
      middleware: [$o()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  createPopper() {
    const e = this.getPopperOptions();
    this.ref.current && So(this.getPopperElement(), this.ref.current, e).then(({ x: n, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && this.createPopper();
  }
  beforeRender() {
    const e = super.beforeRender();
    return e.className = M(e.className, "menu-popup"), e;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ y("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var Co = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Pt = (t, e, n) => (Co(t, e, "read from private field"), n ? n.call(t) : e.get(t)), je = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, bs = (t, e, n, s) => (Co(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ga = (t, e, n) => (Co(t, e, "access private method"), n), ne, Rn, Ls, Ws, yr, Cc, wr, Ec;
const sr = "show", Bf = '[data-toggle="contextmenu"]';
class Tt extends Dt {
  constructor() {
    super(...arguments), je(this, yr), je(this, wr), je(this, ne, void 0), je(this, Rn, void 0), je(this, Ls, void 0), je(this, Ws, void 0);
  }
  get isShown() {
    return Pt(this, ne) && _(Pt(this, ne)).hasClass(sr);
  }
  get menu() {
    return Pt(this, ne) || this.ensureMenu();
  }
  get trigger() {
    return Pt(this, Ls) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  show(e) {
    return this.isShown || (bs(this, Ls, e), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (_(this.menu).addClass(sr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = Pt(this, Ws)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (_(Pt(this, ne)).removeClass(sr), this.emit("hidden"), !0);
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    var e;
    super.destroy(), this.hide(), (e = Pt(this, ne)) == null || e.remove();
  }
  ensureMenu() {
    const { $element: e } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = _(`<div class="${n}" />`).appendTo("body");
    else if (e.length) {
      const i = e.attr("href") || e.dataset("target") || "";
      if (i[0] === "#" && (s = _(document).find(i)), !(s != null && s.length)) {
        const r = e.next();
        r.hasClass(n) ? s = r : s = e.parent().find(`.${n}`);
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
    }), bs(this, ne, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: e, strategy: n } = this.options, s = {
      middleware: [],
      placement: e,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push($o())), s;
  }
  createPopper() {
    const e = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    bs(this, Ws, Sc(n, s, () => {
      So(n, s, e).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        _(s).css({ left: `${i}px`, top: `${r}px` });
        const c = a.split("-")[0], h = Ga(this, yr, Cc).call(this, c);
        if (o.arrow && this.arrowEl) {
          const { x: l, y: f } = o.arrow;
          _(this.arrowEl).css({
            left: l != null ? `${l}px` : "",
            top: f != null ? `${f}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...Ga(this, wr, Ec).call(this, c)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: e, items: n } = this.options;
    let s = n || (e == null ? void 0 : e.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...e,
        items: s
      };
  }
  renderMenu() {
    const e = this.getMenuOptions();
    return !e || this.emit("updateMenu", e, this.trigger).defaultPrevented ? !1 : (es(ot(Hf, e), this.menu), !0);
  }
  getPopperElement() {
    return Pt(this, Rn) || bs(this, Rn, {
      getBoundingClientRect: () => {
        const { trigger: e } = this;
        if (e instanceof MouseEvent) {
          const { clientX: n, clientY: s } = e;
          return {
            width: 0,
            height: 0,
            top: s,
            right: n,
            bottom: s,
            left: n
          };
        }
        return e instanceof HTMLElement ? e.getBoundingClientRect() : e;
      },
      contextElement: this.element
    }), Pt(this, Rn);
  }
  static clear(e) {
    var a, c;
    e instanceof Event && (e = { event: e });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = e || {};
    if (n && i && ((c = (a = n.target).closest) != null && c.call(a, i)) || n && n.button === 2)
      return;
    const r = this.getAll(), o = new Set(s || []);
    for (const h of r)
      o.has(h.element) || h.hide();
  }
  static show(e) {
    const { event: n, ...s } = e, i = this.ensure(document.body);
    return i.setOptions(s), i.show(n), n instanceof Event && n.stopPropagation(), i;
  }
  static hide(e) {
    const n = this.query(e);
    return n == null || n.hide(), n;
  }
}
ne = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
yr = /* @__PURE__ */ new WeakSet();
Cc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
wr = /* @__PURE__ */ new WeakSet();
Ec = function(t) {
  const e = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${t[0].toUpperCase()}${t.substring(1)}Style`]: "none",
    [`border${e[t]}Style`]: "none"
  };
};
Tt.MENU_CLASS = "contextmenu";
Tt.NAME = "ContextMenu";
Tt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
};
_(document).on("contextmenu", (t) => {
  const e = _(t.target);
  if (e.closest(`.${Tt.MENU_CLASS}`).length)
    return;
  const n = e.closest(Bf).not(":disabled,.disabled");
  n.length && (Tt.ensure(n).show(t), t.preventDefault());
}).on("click", Tt.clear.bind(Tt));
var Eo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, An = (t, e, n) => (Eo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), xs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, vr = (t, e, n, s) => (Eo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), zf = (t, e, n) => (Eo(t, e, "access private method"), n), qn, Nn, oi, br, Mc;
const Ya = '[data-toggle="dropdown"]', Tc = class extends Tt {
  constructor() {
    super(...arguments), xs(this, br), xs(this, qn, !1), xs(this, Nn, 0), this.hideLater = () => {
      An(this, oi).call(this), vr(this, Nn, window.setTimeout(this.hide.bind(this), 100));
    }, xs(this, oi, () => {
      clearTimeout(An(this, Nn)), vr(this, Nn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && Tc.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const n = super.show(t);
    return n && (!An(this, qn) && this.isHover && zf(this, br, Mc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    An(this, qn) && _(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((n = t.middleware) == null || n.push(gc(e)), (s = t.middleware) == null || s.push(Tf({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const e = this.getArrowSize(), n = _("<div />").css({
        position: "absolute",
        width: `${e}px`,
        height: `${e}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0], _(t).append(n);
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: e } = t;
      t.afterRender = (...n) => {
        this.arrowEl && _(this.menu).find(".menu").append(this.arrowEl), e == null || e(...n);
      };
    }
    return t;
  }
};
let de = Tc;
qn = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
br = /* @__PURE__ */ new WeakSet();
Mc = function() {
  _(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, An(this, oi)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), vr(this, qn, !0);
};
de.MENU_CLASS = "dropdown-menu";
de.NAME = "Dropdown";
de.DEFAULT = {
  ...Tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
_(document).on("click", function(t) {
  const e = _(t.target).closest(Ya).not(":disabled,.disabled");
  if (e.length) {
    const n = de.ensure(e);
    n.options.trigger === "click" && n.toggle();
  } else
    de.clear({ event: t });
}).on("mouseover", function(t) {
  var s, i;
  const e = (i = (s = t.target).closest) == null ? void 0 : i.call(s, Ya);
  if (!e)
    return;
  const n = de.ensure(e);
  n.isHover && n.show();
});
let ks = 0;
window.addEventListener("scroll", (t) => {
  ks && clearTimeout(ks), ks = window.setTimeout(() => {
    de.clear({ event: t }), ks = 0;
  }, 50);
}, !0);
var ls, on;
class Ff extends G {
  constructor(n) {
    var s;
    super(n);
    L(this, ls, void 0);
    L(this, on, Xt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, on);
  }
  get triggerElement() {
    return E(this, on).current;
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
    }), O(this, ls, de.ensure(this.triggerElement, {
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
    (n = E(this, ls)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, on)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ y("div", { ...s, children: n });
  }
}
ls = new WeakMap(), on = new WeakMap();
class Uf extends Ff {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: e, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const o = n ? e : (r = this.props.dropdown) == null ? void 0 : r.placement;
      i = (o === "top" ? "up" : o === "bottom" ? "down" : o) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ y(Jt, { ...s });
  }
}
function Rc({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Uf, { type: n, ...s });
}
let Ac = class extends G {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  handleItemClick(e, n, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: e, index: n, event: i });
  }
  beforeRender() {
    var s;
    const e = { ...this.props }, n = (s = e.beforeRender) == null ? void 0 : s.call(this, e);
    return n && Object.assign(e, n), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, n) {
    const { key: s = n, ...i } = e;
    return /* @__PURE__ */ y(Jt, { ...i }, s);
  }
  renderItem(e, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = e, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const c = i.call(this, a, ot);
      if (rt(c))
        return c;
      typeof c == "object" && Object.assign(a, c);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const e = this.beforeRender(), {
      className: n,
      items: s,
      size: i,
      type: r,
      btnProps: o,
      children: a,
      itemRender: c,
      onClickItem: h,
      beforeRender: l,
      afterRender: f,
      beforeDestroy: d,
      ...u
    } = e;
    return /* @__PURE__ */ y(
      "div",
      {
        className: M("btn-group", i ? `size-${i}` : "", n),
        ...u,
        children: [
          s && s.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function Vf({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Ac, { type: n, ...s });
}
let Lt = class extends Be {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = M(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: M(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ y(e, { ...a });
  }
};
Lt.ItemComponents = {
  item: Sf,
  dropdown: Rc,
  "btn-group": Vf
};
Lt.ROOT_TAG = "nav";
Lt.NAME = "toolbar";
Lt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function jf({
  className: t,
  style: e,
  actions: n,
  heading: s,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: c,
  icon: h,
  ...l
}) {
  let f;
  a === !0 ? f = /* @__PURE__ */ y(Jt, { className: "alert-close btn ghost", square: !0, onClick: c, children: /* @__PURE__ */ y("span", { class: "close" }) }) : rt(a) ? f = a : typeof a == "object" && (f = /* @__PURE__ */ y(Jt, { ...a, onClick: c }));
  const d = rt(n) ? n : n ? /* @__PURE__ */ y(Lt, { ...n }) : null;
  return /* @__PURE__ */ y("div", { className: M("alert", t), style: e, ...l, children: [
    rt(h) ? h : typeof h == "string" ? /* @__PURE__ */ y("i", { className: `icon ${h}` }) : null,
    rt(i) ? i : /* @__PURE__ */ y("div", { className: M("alert-content", r), children: [
      rt(s) ? s : s && /* @__PURE__ */ y("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ y("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    f,
    o
  ] });
}
function qf(t) {
  if (t === "center")
    return "fade-from-center";
  if (t) {
    if (t.includes("top"))
      return "fade-from-top";
    if (t.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let Gf = class extends G {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  render() {
    const {
      afterRender: e,
      beforeDestroy: n,
      margin: s,
      type: i,
      placement: r,
      animation: o,
      show: a,
      className: c,
      time: h,
      ...l
    } = this.props;
    return /* @__PURE__ */ y(
      jf,
      {
        className: M("messager", c, i, o === !0 ? qf(r) : o, a ? "in" : ""),
        ...l
      }
    );
  }
};
var Yf = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Kf = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $n = (t, e, n) => (Yf(t, e, "access private method"), n), $e, Ye;
class Mo extends at {
  constructor() {
    super(...arguments), Kf(this, $e), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: e }) => {
      e && this.show();
      const { margin: n } = this.options;
      n && this.$element.css("margin", `${n}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (e) => {
      _(e.target).closest('.alert-close,[data-dismiss="messager"]').length && (e.preventDefault(), e.stopPropagation(), this.hide());
    });
  }
  setOptions(e) {
    return e = super.setOptions(e), {
      ...e,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), $n(this, $e, Ye).call(this, () => {
      this._show = !0, this.render(), $n(this, $e, Ye).call(this, () => {
        this.emit("shown");
        const { time: e } = this.options;
        e && $n(this, $e, Ye).call(this, () => this.hide(), e);
      });
    }, 100);
  }
  hide() {
    this._show && $n(this, $e, Ye).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), $n(this, $e, Ye).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
$e = /* @__PURE__ */ new WeakSet();
Ye = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
};
Mo.NAME = "MessagerItem";
Mo.Component = Gf;
var To = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ae = (t, e, n) => (To(t, e, "read from private field"), n ? n.call(t) : e.get(t)), $s = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ds = (t, e, n, s) => (To(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Nc = (t, e, n) => (To(t, e, "access private method"), n), nn, Ut, xr, Lc, Ro, Wc;
const Dc = class extends Dt {
  constructor() {
    super(...arguments), $s(this, xr), $s(this, Ro), $s(this, nn, void 0), $s(this, Ut, void 0);
  }
  get isShown() {
    var t;
    return !!((t = Ae(this, Ut)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Nc(this, xr, Lc).call(this).show();
  }
  hide() {
    var t;
    (t = Ae(this, Ut)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, s = Dc.ensure(e || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Ao = Dc;
nn = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakSet();
Lc = function() {
  if (Ae(this, Ut))
    Ae(this, Ut).setOptions(this.options);
  else {
    const t = Nc(this, Ro, Wc).call(this), e = new Mo(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), Ds(this, nn, void 0), Ds(this, Ut, void 0);
    }), Ds(this, Ut, e);
  }
  return Ae(this, Ut);
};
Ro = /* @__PURE__ */ new WeakSet();
Wc = function() {
  if (Ae(this, nn))
    return Ae(this, nn);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = _(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let n = e.find(`#messager-${this.gid}`);
  return n.length || (n = _(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), Ds(this, nn, n[0])), n[0];
};
Ao.NAME = "messager";
Ao.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
_(document).on("zui.messager.show", (t, e) => {
  e && Ao.show(e);
});
let No = class extends G {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ y("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - e) / 100, "stroke-width": s }),
      /* @__PURE__ */ y("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(e) })
    ] });
  }
};
No.NAME = "zui.progress-circle";
No.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Pc extends at {
}
Pc.NAME = "ProgressCircle";
Pc.Component = No;
let Xf = class extends G {
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
      component: e,
      className: n,
      children: s,
      text: i,
      icon: r,
      surffixIcon: o,
      disabled: a,
      defaultChecked: c,
      onChange: h,
      ...l
    } = this.props, f = this.state.checked ? 1 : 0, d = e || "div", u = typeof r == "string" ? /* @__PURE__ */ y("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ y("i", { class: `icon ${o}` }) : o, m = [
      /* @__PURE__ */ y("input", { onChange: h, type: "checkbox", value: f, checked: !!this.state.checked }),
      /* @__PURE__ */ y("label", { children: [
        u,
        i,
        p
      ] })
    ];
    return ot(
      d,
      {
        className: M("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...l
      },
      ...m,
      s
    );
  }
};
class Ic extends at {
}
Ic.NAME = "Switch";
Ic.Component = Xf;
/*! js-cookie v3.0.1 | MIT */
function Ss(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var s in n)
      t[s] = n[s];
  }
  return t;
}
var Jf = {
  read: function(t) {
    return t[0] === '"' && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(t) {
    return encodeURIComponent(t).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function kr(t, e) {
  function n(i, r, o) {
    if (!(typeof document > "u")) {
      o = Ss({}, e, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var c in o)
        o[c] && (a += "; " + c, o[c] !== !0 && (a += "=" + o[c].split(";")[0]));
      return document.cookie = i + "=" + t.write(r, i) + a;
    }
  }
  function s(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var r = document.cookie ? document.cookie.split("; ") : [], o = {}, a = 0; a < r.length; a++) {
        var c = r[a].split("="), h = c.slice(1).join("=");
        try {
          var l = decodeURIComponent(c[0]);
          if (o[l] = t.read(h, l), i === l)
            break;
        } catch {
        }
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: n,
      get: s,
      remove: function(i, r) {
        n(
          i,
          "",
          Ss({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return kr(this.converter, Ss({}, this.attributes, i));
      },
      withConverter: function(i) {
        return kr(Ss({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Zf = kr(Jf, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Zf });
var Ft;
class Qf {
  constructor(e = "") {
    L(this, Ft, void 0);
    typeof e == "object" ? O(this, Ft, e) : O(this, Ft, document.appendChild(document.createComment(e)));
  }
  on(e, n, s) {
    E(this, Ft).addEventListener(e, n, s);
  }
  once(e, n, s) {
    E(this, Ft).addEventListener(e, n, { once: !0, ...s });
  }
  off(e, n, s) {
    E(this, Ft).removeEventListener(e, n, s);
  }
  emit(e) {
    return E(this, Ft).dispatchEvent(e), e;
  }
}
Ft = new WeakMap();
const Ka = /* @__PURE__ */ new Set([
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
class Oc extends Qf {
  on(e, n, s) {
    super.on(e, n, s);
  }
  off(e, n, s) {
    super.off(e, n, s);
  }
  once(e, n, s) {
    super.once(e, n, s);
  }
  emit(e, n) {
    return typeof e == "string" && (Ka.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Oc.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Ka.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
let Hi = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var cs, oe, Et, an, ln, Ps;
const ya = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    L(this, ln);
    L(this, cs, void 0);
    L(this, oe, void 0);
    L(this, Et, void 0);
    L(this, an, void 0);
    O(this, cs, n), O(this, oe, `ZUI_STORE:${e ?? Hi()}`), O(this, Et, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, cs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, an) || O(this, an, new ya(E(this, oe), "session")), E(this, an));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const s = E(this, Et).getItem(st(this, ln, Ps).call(this, e));
    return typeof s == "string" ? JSON.parse(s) : s ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, n) {
    if (n == null)
      return this.remove(e);
    E(this, Et).setItem(st(this, ln, Ps).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    E(this, Et).removeItem(st(this, ln, Ps).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < E(this, Et).length; n++) {
      const s = E(this, Et).key(n);
      if (s != null && s.startsWith(E(this, oe))) {
        const i = E(this, Et).getItem(s);
        typeof i == "string" && e(s.substring(E(this, oe).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((n, s) => {
      e[n] = s;
    }), e;
  }
};
let ai = ya;
cs = new WeakMap(), oe = new WeakMap(), Et = new WeakMap(), an = new WeakMap(), ln = new WeakSet(), Ps = function(e) {
  return `${E(this, oe)}:${e}`;
};
const td = new ai("DEFAULT");
function ed(t, e = "local") {
  return new ai(t, e);
}
Object.assign(td, { create: ed });
function nd(t) {
  if (t.indexOf("#") === 0 && (t = t.slice(1)), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6)
    throw new Error(`Invalid HEX color "${t}".`);
  return [
    parseInt(t.slice(0, 2), 16),
    // r
    parseInt(t.slice(2, 4), 16),
    // g
    parseInt(t.slice(4, 6), 16)
    // b
  ];
}
function sd(t) {
  const [e, n, s] = typeof t == "string" ? nd(t) : t;
  return e * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Xa(t, e) {
  return sd(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Ja(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function id(t, e, n) {
  t = t % 360 / 360, e = Ja(e), n = Ja(n);
  const s = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function rd(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function od(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t[0].toUpperCase() : t.length <= e ? t : t.substring(0, e);
}
let Hc = class extends G {
  render() {
    const {
      className: e,
      style: n,
      size: s = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      text: c,
      code: h,
      maxTextLength: l = 2,
      src: f,
      hueDistance: d = 43,
      saturation: u = 0.4,
      lightness: p = 0.6,
      children: m,
      ...w
    } = this.props, g = ["avatar", e], v = { ...n, background: o, color: a };
    let x = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (g.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? g.push("circle") : r && (typeof r == "number" ? v.borderRadius = `${r}px` : g.push(`rounded-${r}`));
    let k;
    if (f)
      g.push("has-img"), k = /* @__PURE__ */ y("img", { className: "avatar-img", src: f, alt: c });
    else if (c != null && c.length) {
      const S = od(c, l);
      if (g.push("has-text", `has-text-${S.length}`), o)
        !a && o && (v.color = Xa(o));
      else {
        const R = h ?? c, T = (typeof R == "number" ? R : rd(R)) * d % 360;
        if (v.background = `hsl(${T},${u * 100}%,${p * 100}%)`, !a) {
          const D = id(T, u, p);
          v.color = Xa(D);
        }
      }
      let N;
      x && x < 14 * S.length && (N = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ y("div", { "data-actualSize": x, className: "avatar-text", style: N, children: S });
    }
    return /* @__PURE__ */ y(
      "div",
      {
        className: M(g),
        style: v,
        ...w,
        children: [
          k,
          m
        ]
      }
    );
  }
};
class Bc extends at {
}
Bc.NAME = "Avatar";
Bc.Component = Hc;
class zc extends at {
}
zc.NAME = "BtnGroup";
zc.Component = Ac;
var Lo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ee = (t, e, n) => (Lo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Sn = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Gn = (t, e, n, s) => (Lo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ir = (t, e, n) => (Lo(t, e, "access private method"), n), Je, Is, Se, $r, Ln, Os;
const rr = "show", Za = "in", ad = '[data-dismiss="modal"]', Hs = class extends Dt {
  constructor() {
    super(...arguments), Sn(this, Ln), Sn(this, Je, 0), Sn(this, Is, void 0), Sn(this, Se, void 0), Sn(this, $r, (t) => {
      const e = t.target;
      (e.closest(ad) || this.options.backdrop === !0 && !e.closest(".modal-dialog") && e.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(rr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Ee(this, $r)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const e = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const n = t.clientWidth, s = t.clientHeight;
          (!Ee(this, Se) || Ee(this, Se)[0] !== n || Ee(this, Se)[1] !== s) && (Gn(this, Se, [n, s]), this.layout());
        });
        e.observe(t), Gn(this, Is, e);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = Ee(this, Is)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: e } = this, { animation: n, backdrop: s, className: i, style: r } = this.options;
    return _(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, rr, i).css({
      zIndex: `${Hs.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), ir(this, Ln, Os).call(this, () => {
      _(e).addClass(Za), ir(this, Ln, Os).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (_(this.modalElement).removeClass(Za), this.emit("hide"), ir(this, Ln, Os).call(this, () => {
      _(this.modalElement).removeClass(rr), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.isShown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    e = e ?? this.options.size, _(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof e == "object" ? (s.width = e.width, s.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? _(n).attr("data-size", e) : e && (s.width = e), _(n).css(s), t = t ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Gn(this, Se, [i, r]), typeof t == "function" && (t = t({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (o.alignSelf = "flex-start", o.top = t) : typeof t == "object" && t ? (o.alignSelf = "flex-start", Object.assign(o, t)) : t === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : t === "bottom" ? o.alignSelf = "flex-end" : t === "top" ? o.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (o.alignSelf = "flex-start", o.top = t), _(n).css(o), _(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(t) {
    var e;
    (e = Hs.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Hs.query(t)) == null || e.show();
  }
};
let we = Hs;
Je = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
$r = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakSet();
Os = function(t, e) {
  Ee(this, Je) && (clearTimeout(Ee(this, Je)), Gn(this, Je, 0)), t && (this.options.animation ? Gn(this, Je, window.setTimeout(t, e ?? this.options.transTime)) : t());
};
we.NAME = "Modal";
we.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
we.zIndex = 2e3;
_(window).on("resize", () => {
  we.getAll().forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
_(document).on("zui.modal.hide", (t, e) => {
  we.hide(e == null ? void 0 : e.target);
});
class Fc extends G {
  componentDidMount() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e;
    (e = this.props.afterRender) == null || e.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this);
  }
  renderHeader() {
    const {
      header: e,
      title: n
    } = this.props;
    return rt(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-header", children: /* @__PURE__ */ y("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : rt(e) ? e : /* @__PURE__ */ y("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ y(Lt, { ...e }) : null,
      n ? /* @__PURE__ */ y("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ y("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? rt(e) ? e : /* @__PURE__ */ y("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return rt(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-footer", children: n ? /* @__PURE__ */ y(Lt, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ y("div", { className: M("modal-dialog", e), style: n, children: /* @__PURE__ */ y("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
Fc.defaultProps = { closeBtn: !0 };
var cn, hn, un;
class ld extends G {
  constructor() {
    super(...arguments);
    L(this, cn, void 0);
    L(this, hn, void 0);
    L(this, un, void 0);
    O(this, cn, Xt()), this.state = {}, O(this, un, () => {
      var i, r;
      const n = (r = (i = E(this, cn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = E(this, hn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, c = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: c });
      }), s.observe(n.body), s.observe(n.documentElement), O(this, hn, s);
    });
  }
  componentDidMount() {
    E(this, un).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, hn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ y(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, cn),
        onLoad: E(this, un)
      }
    );
  }
}
cn = new WeakMap(), hn = new WeakMap(), un = new WeakMap();
var Wo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, qe = (t, e, n) => (Wo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ge = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Cn = (t, e, n, s) => (Wo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ze = (t, e, n) => (Wo(t, e, "access private method"), n), Bs, zs, Ot, is, Bi, Sr, Uc, Fs, Cr;
function cd(t, e) {
  const { custom: n, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function hd(t, e) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: c = !0 } = e, l = await (await fetch(s, i)).text();
  if (n !== "html")
    try {
      const f = JSON.parse(l);
      return {
        title: o,
        ...r,
        ...f
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [l] : {
    title: o,
    ...r,
    body: n === "html" ? /* @__PURE__ */ y(ql, { className: "modal-body", html: l, executeScript: c }) : l
  };
}
async function ud(t, e) {
  const { url: n, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ y(ld, { url: n })
  };
}
const fd = {
  custom: cd,
  ajax: hd,
  iframe: ud
}, se = class extends we {
  constructor() {
    super(...arguments), Ge(this, is), Ge(this, Sr), Ge(this, Fs), Ge(this, Bs, void 0), Ge(this, zs, void 0), Ge(this, Ot, void 0);
  }
  get id() {
    return qe(this, zs);
  }
  get loading() {
    var t;
    return (t = this.modalElement) == null ? void 0 : t.classList.contains(se.LOADING_CLASS);
  }
  get modalElement() {
    let t = qe(this, Bs);
    if (!t) {
      const { id: e } = this;
      t = _(this.element).find(`#${e}`)[0], t || (t = _("<div>").attr("id", e).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), Cn(this, Bs, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), Cn(this, zs, this.options.id || `modal-${Hi()}`);
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    qe(this, Ot) && clearTimeout(qe(this, Ot));
    const { modalElement: t, options: e } = this, { type: n, loadTimeout: s } = e, i = fd[n];
    if (!i)
      return console.warn(`Modal: Cannot build modal with type "${n}"`), !1;
    t.classList.add(se.LOADING_CLASS), await Ze(this, Sr, Uc).call(this), s && Cn(this, Ot, window.setTimeout(() => {
      Cn(this, Ot, 0), Ze(this, Fs, Cr).call(this, this.options.timeoutTip);
    }, s));
    const r = await i.call(this, t, e);
    return r === !1 ? await Ze(this, Fs, Cr).call(this, this.options.failedTip) : r && typeof r == "object" && await Ze(this, is, Bi).call(this, r), qe(this, Ot) && (clearTimeout(qe(this, Ot)), Cn(this, Ot, 0)), t.classList.remove(se.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...s } = t, i = new se(n, { show: !0, ...s });
      i.one("hidden", () => e(i)), i.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, ...c } = t;
    let h = /* @__PURE__ */ y("div", { children: n });
    s ? h = /* @__PURE__ */ y("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ y("div", { className: `icon ${s} ${i}` }),
      h
    ] }) : h = /* @__PURE__ */ y("div", { className: "modal-body", children: h });
    const l = [];
    (Array.isArray(r) ? r : [r]).forEach((u) => {
      u = {
        ...typeof u == "string" ? { key: u } : u
      }, typeof u.key == "string" && (u.text || (u.text = Kt.getLang(u.key, u.key)), u.btnType || (u.btnType = `btn-wide ${u.key === "confirm" ? "primary" : "btn-default"}`)), u && l.push(u);
    }, []);
    let f;
    const d = l.length ? {
      gap: 4,
      items: l,
      onClickItem: ({ item: u, event: p }) => {
        const m = se.query(p.target);
        f = u.key, (o == null ? void 0 : o(u, m)) !== !1 && m && m.hide();
      }
    } : void 0;
    return se.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: d, ...typeof a == "function" ? a() : a },
      ...c
    }).then(() => f);
  }
  static confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...s } = t;
    return se.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (i, r) => {
        n == null || n(i.key === "confirm", r), e == null || e(i, r);
      },
      ...s
    }).then((i) => i === "confirm");
  }
};
let Do = se;
Bs = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
is = /* @__PURE__ */ new WeakSet();
Bi = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], _(this.modalElement).runJS(), e();
    const { afterRender: n, ...s } = t;
    t = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), e();
      },
      ...s
    }, es(
      /* @__PURE__ */ y(Fc, { ...t }),
      this.modalElement
    );
  });
};
Sr = /* @__PURE__ */ new WeakSet();
Uc = function() {
  const { loadingText: t } = this.options;
  return Ze(this, is, Bi).call(this, {
    body: /* @__PURE__ */ y("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ y("span", { className: "spinner" }),
      t ? /* @__PURE__ */ y("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
};
Fs = /* @__PURE__ */ new WeakSet();
Cr = function(t) {
  if (t)
    return Ze(this, is, Bi).call(this, {
      body: /* @__PURE__ */ y("div", { className: "modal-load-failed", children: t })
    });
};
Do.LOADING_CLASS = "loading";
Do.DEFAULT = {
  ...we.DEFAULT,
  loadTimeout: 1e4
};
var Po = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Er = (t, e, n) => (Po(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Cs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Qa = (t, e, n, s) => (Po(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Mr = (t, e, n) => (Po(t, e, "access private method"), n), Ne, Io, Vc, Tr, jc, Oo, qc;
const dd = '[data-toggle="modal"]';
class Gc extends Dt {
  constructor() {
    super(...arguments), Cs(this, Io), Cs(this, Tr), Cs(this, Oo), Cs(this, Ne, void 0);
  }
  get modal() {
    return Er(this, Ne);
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    const e = Mr(this, Tr, jc).call(this);
    return e == null ? void 0 : e.show();
  }
  hide() {
    var e;
    (e = Er(this, Ne)) == null || e.hide();
  }
}
Ne = /* @__PURE__ */ new WeakMap();
Io = /* @__PURE__ */ new WeakSet();
Vc = function() {
  const {
    container: t,
    ...e
  } = this.options, n = e, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), n;
};
Tr = /* @__PURE__ */ new WeakSet();
jc = function() {
  const t = Mr(this, Io, Vc).call(this);
  let e = Er(this, Ne);
  return e ? e.setOptions(t) : t.type === "static" ? (e = we.ensure(Mr(this, Oo, qc).call(this), t), Qa(this, Ne, e)) : (e = Do.ensure(this.container, t), Qa(this, Ne, e)), e;
};
Oo = /* @__PURE__ */ new WeakSet();
qc = function() {
  let t = this.options.target;
  if (!t) {
    const { $element: e } = this;
    if (e.is("a")) {
      const n = e.attr("href");
      n != null && n.startsWith("#") && (t = n);
    }
  }
  return this.container.querySelector(t || ".modal");
};
Gc.NAME = "ModalTrigger";
_(document).on("click", (t) => {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, dd);
  if (n) {
    const i = Gc.ensure(n);
    i && i.show();
  }
});
let Yc = class extends Be {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = M(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
};
Yc.NAME = "nav";
class Kc extends at {
}
Kc.NAME = "Nav";
Kc.Component = Yc;
function rs(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function pd({
  key: t,
  type: e,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const c = rs(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(c) : dt(i, c)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(c) : dt(o, c)), a.disabled === void 0 && (a.disabled = s !== void 0 && c.page === r.page), /* @__PURE__ */ y(Jt, { type: n, ...a });
}
const zt = 24 * 60 * 60 * 1e3, pt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : /* @__PURE__ */ new Date(), gs = (t, e = /* @__PURE__ */ new Date()) => (t = pt(t), e = pt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Rr = (t, e = /* @__PURE__ */ new Date()) => pt(t).getFullYear() === pt(e).getFullYear(), md = (t, e = /* @__PURE__ */ new Date()) => (t = pt(t), e = pt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Op = (t, e = /* @__PURE__ */ new Date()) => {
  t = pt(t), e = pt(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Hp = (t, e) => gs(pt(e), t), Bp = (t, e) => gs(pt(e).getTime() - zt, t), zp = (t, e) => gs(pt(e).getTime() + zt, t), Fp = (t, e) => gs(pt(e).getTime() - 2 * zt, t), Ar = (t, e = "yyyy-MM-dd hh:mm", n = "") => {
  if (t = pt(t), Number.isNaN(t.getDay()))
    return n;
  const s = {
    "M+": t.getMonth() + 1,
    "d+": t.getDate(),
    "h+": t.getHours(),
    "H+": t.getHours() % 12,
    "m+": t.getMinutes(),
    "s+": t.getSeconds(),
    "S+": t.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", Rr(t) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const r = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), e;
}, Up = (t, e, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = Ar(t, Rr(t) ? s.month : s.full);
  if (gs(t, e))
    return i;
  const r = Ar(e, Rr(t, e) ? md(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Vp = (t) => {
  const e = (/* @__PURE__ */ new Date()).getTime();
  switch (t) {
    case "oneWeek":
      return e - zt * 7;
    case "oneMonth":
      return e - zt * 31;
    case "threeMonth":
      return e - zt * 31 * 3;
    case "halfYear":
      return e - zt * 183;
    case "oneYear":
      return e - zt * 365;
    case "twoYear":
      return e - 2 * (zt * 365);
    default:
      return 0;
  }
}, tl = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, tl(t, "day", n, s);
    case "quarter":
      t *= 3;
      break;
    case "month":
      return t *= 30, tl(t, "day", n, s);
    case "week":
      t *= 7;
      break;
    case "day":
      t *= 24;
      break;
    case "hour":
      t *= 60;
      break;
    case "minute":
      t *= 6e4;
      break;
    default:
      t = 0;
  }
  return n ? s + t : s - t;
};
function gd({
  key: t,
  type: e,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = rs(i, n);
  return s = typeof s == "function" ? s(a) : dt(s, a), /* @__PURE__ */ y(lc, { ...o, children: [
    r,
    s
  ] });
}
function _d({
  key: t,
  type: e,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const c = { ...a, square: !0 }, h = () => (c.text = "", c.icon = "icon-ellipsis-h", c.disabled = !0, /* @__PURE__ */ y(Jt, { type: n, ...c })), l = (d, u) => {
    const p = [];
    for (let m = d; m <= u; m++) {
      c.text = m, delete c.icon, c.disabled = !1;
      const w = rs(i, m);
      o && (c.url = typeof o == "function" ? o(w) : dt(o, w)), p.push(/* @__PURE__ */ y(Jt, { type: n, ...c, onClick: r }));
    }
    return p;
  };
  let f = [];
  return f = [...l(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? f = [...f, ...l(2, i.pageTotal)] : i.page < s - 2 ? f = [...f, ...l(2, s - 2), h(), ...l(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? f = [...f, h(), ...l(i.pageTotal - s + 3, i.pageTotal)] : f = [...f, h(), ...l(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...l(i.pageTotal, i.pageTotal)]), f;
}
function yd({
  type: t,
  pagerInfo: e,
  linkCreator: n,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  ...r
}) {
  var a;
  i.items = i.items ?? s.map((c) => {
    const h = { ...e, recPerPage: c };
    return {
      text: `${c}`,
      active: c === e.recPerPage,
      url: typeof n == "function" ? n(h) : dt(n, h)
    };
  });
  const { text: o = "" } = r;
  return r.text = typeof o == "function" ? o(e) : dt(o, e), i.menu = { ...i.menu, className: M((a = i.menu) == null ? void 0 : a.className, "pager-size-menu") }, /* @__PURE__ */ y(Rc, { type: "dropdown", dropdown: i, ...r });
}
function wd({
  key: t,
  page: e,
  type: n,
  btnType: s,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: c,
  ...h
}) {
  const l = { ...h };
  let f;
  const d = (m) => {
    var w;
    f = Number((w = m.target) == null ? void 0 : w.value) || 1, f = f > i.pageTotal ? i.pageTotal : f;
  }, u = (m) => {
    if (!(m != null && m.target))
      return;
    f = f <= i.pageTotal ? f : i.pageTotal;
    const w = rs(i, f);
    a && !a({ info: w, event: m }) || (m.target.href = l.url = typeof c == "function" ? c(w) : dt(c, w));
  }, p = rs(i, e || 0);
  return l.url = typeof c == "function" ? c(p) : dt(c, p), /* @__PURE__ */ y("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ y("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ y(Jt, { type: s, ...l, onClick: u })
  ] });
}
let zi = class extends Lt {
  get pagerInfo() {
    const { page: e = 1, recTotal: n = 0, recPerPage: s = 10 } = this.props;
    return { page: e, recTotal: n, recPerPage: s, pageTotal: s ? Math.ceil(n / s) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, n, s) {
    const i = super.getItemRenderProps(e, n, s), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
};
zi.NAME = "pager";
zi.defaultProps = {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
zi.ItemComponents = {
  ...Lt.ItemComponents,
  link: pd,
  info: gd,
  nav: _d,
  "size-menu": yd,
  goto: wd
};
class Xc extends at {
}
Xc.NAME = "Pager";
Xc.Component = zi;
var xi, ki, Jc;
class vd extends G {
  constructor() {
    super(...arguments);
    L(this, ki);
    L(this, xi, (n) => {
      var o;
      const { onDeselect: s, selections: i } = this.props, r = (o = n.target.closest(".picker-deselect-btn")) == null ? void 0 : o.dataset.idx;
      r && s && (i != null && i.length) && (n.stopPropagation(), s([i[+r]], n));
    });
  }
  render() {
    const {
      className: n,
      style: s,
      disabled: i,
      focused: r,
      onClick: o,
      children: a
    } = this.props;
    return /* @__PURE__ */ y(
      "div",
      {
        className: M("picker-select picker-select-multi form-control", n, { disabled: i, focused: r }),
        style: s,
        onClick: o,
        children: [
          st(this, ki, Jc).call(this),
          a,
          /* @__PURE__ */ y("span", { class: "caret" })
        ]
      }
    );
  }
}
xi = new WeakMap(), ki = new WeakSet(), Jc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ y("div", { className: "picker-multi-selections", children: n.map((i, r) => /* @__PURE__ */ y("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ y("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, xi), "data-idx": r, children: /* @__PURE__ */ y("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: s });
};
var $i;
class bd extends G {
  constructor() {
    super(...arguments);
    L(this, $i, (n) => {
      const { onDeselect: s, selections: i } = this.props;
      s && (i != null && i.length) && (n.stopPropagation(), s(i, n));
    });
  }
  render() {
    const {
      className: n,
      style: s,
      disabled: i,
      placeholder: r,
      focused: o,
      selections: a = [],
      onDeselect: c,
      onClick: h,
      children: l
    } = this.props, [f] = a, d = f ? /* @__PURE__ */ y("span", { className: "picker-single-selection", children: f.text ?? f.value }) : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: r }), u = f && c ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, $i), children: /* @__PURE__ */ y("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ y(
      "div",
      {
        className: M("picker-select picker-select-single form-control", n, { disabled: i, focused: o }),
        style: s,
        onClick: h,
        children: [
          d,
          l,
          u,
          /* @__PURE__ */ y("span", { class: "caret" })
        ]
      }
    );
  }
}
$i = new WeakMap();
var xd = ["Shift", "Meta", "Alt", "Control"], kd = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function or(t, e) {
  return typeof t.getModifierState == "function" && t.getModifierState(e);
}
function $d(t) {
  return t.trim().split(" ").map(function(e) {
    var n = e.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? kd : i;
    }), s];
  });
}
function Sd(t, e) {
  var n;
  e === void 0 && (e = {});
  var s = (n = e.timeout) != null ? n : 1e3, i = Object.keys(t).map(function(a) {
    return [$d(a), t[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(c) {
      var h = c[0], l = c[1], f = r.get(h) || h;
      (function(d, u) {
        return !(u[1].toUpperCase() !== d.key.toUpperCase() && u[1] !== d.code || u[0].find(function(p) {
          return !or(d, p);
        }) || xd.find(function(p) {
          return !u[0].includes(p) && u[1] !== p && or(d, p);
        }));
      })(a, f[0]) ? f.length > 1 ? r.set(h, f.slice(1)) : (r.delete(h), l(a)) : or(a, a.key) || r.delete(h);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Cd(t, e, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", r = Sd(e, n);
  return t.addEventListener(i, r), function() {
    t.removeEventListener(i, r);
  };
}
const Ed = (t, e) => t.reduce((n, s) => [...n].reduce((i, r) => {
  if (typeof r != "string")
    return i.push(r), i;
  const o = r.toLowerCase().split(s);
  if (o.length === 1)
    return i.push(r), i;
  let a = 0;
  return o.forEach((c, h) => {
    h && (i.push(/* @__PURE__ */ y("span", { class: "picker-menu-item-match", children: r.substring(a, a + s.length) })), a += s.length), i.push(r.substring(a, a + c.length)), a += c.length;
  }), i;
}, []), e);
var ae, fn, dn, hs, pn, Us, Te, Wn, Si, Zc, mn, us, gn, fs, Ci, Qc;
class Md extends G {
  constructor() {
    super(...arguments);
    L(this, pn);
    L(this, Te);
    L(this, Si);
    L(this, Ci);
    L(this, ae, void 0);
    L(this, fn, void 0);
    L(this, dn, void 0);
    L(this, hs, void 0);
    L(this, mn, void 0);
    L(this, us, void 0);
    L(this, gn, void 0);
    L(this, fs, void 0);
    this.state = { keys: "", show: !1 }, O(this, ae, 0), O(this, fn, Xt()), O(this, dn, Xt()), O(this, mn, (n) => {
      _(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), O(this, us, ({ item: n }) => {
      this.select(n.key);
    }), O(this, gn, (n) => {
      this.setState({ keys: n.target.value });
    }), O(this, fs, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    _(document).on("click", E(this, mn)), this.show(this.focus.bind(this)), O(this, hs, Cd(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = st(this, Te, Wn).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = st(this, Te, Wn).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = st(this, Te, Wn).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = st(this, pn, Us).call(this);
    n && _(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = _(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    _(document).off("click", E(this, mn)), (s = E(this, hs)) == null || s.call(this);
    const n = st(this, pn, Us).call(this);
    n && _(n).off(".pickerMenu.zui");
  }
  show(n) {
    if (this.state.show) {
      n == null || n();
      return;
    }
    this.setState({ show: !0 }, n);
  }
  focus() {
    var n;
    (n = E(this, fn).current) == null || n.focus();
  }
  hide() {
    this.state.show && (E(this, ae) && window.clearTimeout(E(this, ae)), this.setState({ show: !1 }, () => {
      O(this, ae, window.setTimeout(() => {
        var n, s;
        O(this, ae, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  select(n) {
    const s = this.props.items.find((i) => i.value === n);
    s && this.props.onSelectItem(s);
  }
  setHoverItem(n) {
    this.setState({ hover: n }, () => {
      const s = st(this, Te, Wn).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  render() {
    const {
      id: n,
      className: s,
      style: i = {},
      maxHeight: r,
      maxWidth: o,
      width: a,
      menu: c,
      checkbox: h
    } = this.props, { show: l, keys: f } = this.state, d = f.trim().length;
    return /* @__PURE__ */ y(
      "div",
      {
        className: M("picker-menu menu-popup", s, { shown: l, "has-search": d }),
        id: `picker-menu-${n}`,
        style: { maxHeight: r, maxWidth: o, width: a, ...i },
        children: [
          st(this, Ci, Qc).call(this),
          /* @__PURE__ */ y(
            Pi,
            {
              ref: E(this, dn),
              className: "picker-menu-list",
              items: st(this, Si, Zc).call(this),
              onClickItem: E(this, us),
              checkbox: h,
              ...c
            }
          )
        ]
      }
    );
  }
}
ae = new WeakMap(), fn = new WeakMap(), dn = new WeakMap(), hs = new WeakMap(), pn = new WeakSet(), Us = function() {
  var n;
  return (n = E(this, dn).current) == null ? void 0 : n.ref.current;
}, Te = new WeakSet(), Wn = function() {
  const n = st(this, pn, Us).call(this);
  if (n)
    return _(n).find(".menu-item>a.hover");
}, Si = new WeakSet(), Zc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), { keys: r, hover: o } = this.state, a = r.toLowerCase().split(" ").filter((l) => l.length);
  let c = !1;
  const h = s.reduce((l, f) => {
    const {
      value: d,
      keys: u,
      text: p,
      className: m,
      ...w
    } = f;
    if (!a.length || a.every((g) => d.toLowerCase().includes(g) || (u == null ? void 0 : u.toLowerCase().includes(g)) || typeof p == "string" && p.toLowerCase().includes(g))) {
      let g = p ?? d;
      typeof g == "string" && a.length && (g = Ed(a, [g])), d === o && (c = !0), l.push({
        key: d,
        active: i.has(d),
        text: g,
        className: M(m, { hover: d === o }),
        "data-value": d,
        ...w
      });
    }
    return l;
  }, []);
  return !c && h.length && (h[0].className = M(h[0].className, "hover")), h;
}, mn = new WeakMap(), us = new WeakMap(), gn = new WeakMap(), fs = new WeakMap(), Ci = new WeakSet(), Qc = function() {
  const {
    search: n,
    searchHint: s
  } = this.props, { keys: i } = this.state, r = i.trim().length;
  return n ? /* @__PURE__ */ y("div", { className: "picker-menu-search", children: [
    /* @__PURE__ */ y(
      "input",
      {
        className: "form-control picker-menu-search-input",
        type: "text",
        placeholder: s,
        value: i,
        onChange: E(this, gn),
        onInput: E(this, gn),
        ref: E(this, fn)
      }
    ),
    r ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: E(this, fs), children: /* @__PURE__ */ y("span", { className: "close" }) }) : /* @__PURE__ */ y("span", { className: "magnifier" })
  ] }) : null;
};
var Ho = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, et = (t, e, n) => (Ho(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Q = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, li = (t, e, n, s) => (Ho(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Td = (t, e, n, s) => ({
  set _(i) {
    li(t, e, i, n);
  },
  get _() {
    return et(t, e, s);
  }
}), it = (t, e, n) => (Ho(t, e, "access private method"), n), Vs, wn, ci, Vt, Ke, Dn, hi, Bo, js, Nr, Lr, th, zo, Fo, Uo, Vo, jo, eh, Wr, nh, qo, sh, qs, Dr;
let ih = class extends G {
  constructor(e) {
    super(e), Q(this, Ke), Q(this, hi), Q(this, js), Q(this, Lr), Q(this, jo), Q(this, Wr), Q(this, qo), Q(this, qs), Q(this, Vs, 0), Q(this, wn, Hi()), Q(this, ci, Xt()), Q(this, Vt, void 0), Q(this, zo, (n) => {
      const { valueList: s } = this, i = new Set(n.map((o) => o.value)), r = s.filter((o) => !i.has(o));
      this.setValue(r);
    }), Q(this, Fo, () => {
      requestAnimationFrame(() => this.toggle());
    }), Q(this, Uo, () => {
      this.close();
    }), Q(this, Vo, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = et(this, ci).current) == null || s.hide();
      });
    }), this.state = {
      value: it(this, js, Nr).call(this, e.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(e.items) ? e.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return it(this, hi, Bo).call(this, this.state.value);
  }
  componentDidMount() {
    it(this, qs, Dr).call(this, !0);
  }
  componentDidUpdate() {
    it(this, qs, Dr).call(this);
  }
  componentWillUnmount() {
    var n;
    var e;
    (n = this.props.beforeDestroy) == null || n.call(this), (e = et(this, Vt)) == null || e.call(this), li(this, Vt, void 0);
  }
  async loadItemList() {
    let { items: e } = this.props;
    if (typeof e == "function") {
      const s = ++Td(this, Vs)._;
      if (await it(this, Ke, Dn).call(this, { loading: !0, items: [] }), e = await e(), et(this, Vs) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(e) && this.state.items !== e && (n.items = e), this.state.loading && (n.loading = !1), Object.keys(n).length && await it(this, Ke, Dn).call(this, n), e;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((e, n) => (e[n.value] = n, e), {});
  }
  getItemByValue(e) {
    return this.getItemList().find((n) => n.value === e);
  }
  getSelections() {
    const e = this.getItemMap();
    return this.valueList.map((n) => e[n] || { value: n });
  }
  async toggle(e) {
    if (e === void 0)
      e = !this.state.open;
    else if (e === this.state.open)
      return;
    await it(this, Ke, Dn).call(this, { open: e }), e && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  getValue() {
    return this.props.multiple ? this.valueList : this.value;
  }
  async setValue(e, n) {
    var s;
    await it(this, Ke, Dn).call(this, { value: it(this, js, Nr).call(this, e), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
  }
  toggleValue(e, n) {
    const { valueList: s } = this, i = s.indexOf(e);
    if (n !== !!i)
      return i > -1 ? s.splice(i, 1) : s.push(e), this.setValue(s);
  }
  render() {
    const {
      className: e,
      style: n,
      children: s,
      multiple: i,
      Select: r,
      name: o
    } = this.props, a = r || (i ? vd : bd), c = it(this, Lr, th).call(this);
    return /* @__PURE__ */ y(
      "div",
      {
        id: `picker-${et(this, wn)}`,
        className: M("picker", e),
        style: n,
        children: [
          /* @__PURE__ */ y(a, { ...c }),
          s,
          it(this, Wr, nh).call(this),
          o ? /* @__PURE__ */ y("input", { type: "hidden", className: "picker-value", name: o, value: this.state.value }) : null
        ]
      }
    );
  }
};
Vs = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Ke = /* @__PURE__ */ new WeakSet();
Dn = function(t) {
  return new Promise((e) => {
    this.setState(t, e);
  });
};
hi = /* @__PURE__ */ new WeakSet();
Bo = function(t) {
  return typeof t == "string" ? t.length ? _.unique(t.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(t) ? _.unique(t) : [];
};
js = /* @__PURE__ */ new WeakSet();
Nr = function(t) {
  const e = it(this, hi, Bo).call(this, t);
  return e.length ? e.join(this.props.valueSplitter ?? ",") : void 0;
};
Lr = /* @__PURE__ */ new WeakSet();
th = function() {
  const { placeholder: t, disabled: e, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: t,
    disabled: e,
    multiple: n,
    selections: this.getSelections(),
    onClick: et(this, Fo),
    onDeselect: et(this, zo)
  };
};
zo = /* @__PURE__ */ new WeakMap();
Fo = /* @__PURE__ */ new WeakMap();
Uo = /* @__PURE__ */ new WeakMap();
Vo = /* @__PURE__ */ new WeakMap();
jo = /* @__PURE__ */ new WeakSet();
eh = function() {
  const { search: t, menuClass: e, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: r, menuMinWidth: o, multiple: a, searchHint: c, menuCheckbox: h } = this.props, { items: l } = this.state;
  return {
    id: et(this, wn),
    items: l,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= l.length,
    searchHint: c,
    style: s,
    multiple: a,
    className: e,
    width: n === "100%" ? "auto" : n,
    maxHeight: i,
    maxWidth: r,
    minWidth: o,
    checkbox: h,
    onRequestHide: et(this, Uo),
    onSelectItem: et(this, Vo)
  };
};
Wr = /* @__PURE__ */ new WeakSet();
nh = function() {
  const { open: t } = this.state;
  if (!t)
    return null;
  const e = _(this.props.container || "body");
  let n = e.find(".pickers-container");
  n.length || (n = _("<div>").addClass("pickers-container").appendTo(e));
  const { Menu: s = Md } = this.props;
  return ff(/* @__PURE__ */ y(s, { ...it(this, jo, eh).call(this), ref: et(this, ci) }), n[0]);
};
qo = /* @__PURE__ */ new WeakSet();
sh = function() {
  const t = _(`#picker-${et(this, wn)}`)[0], e = _(`#picker-menu-${et(this, wn)}`)[0];
  if (!e || !t || !this.state.open) {
    et(this, Vt) && (et(this, Vt).call(this), li(this, Vt, void 0));
    return;
  }
  et(this, Vt) || li(this, Vt, Sc(t, e, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    So(t, e, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? $o() : null, Df(), gc(1)].filter(Boolean)
    }).then(({ x: i, y: r }) => {
      _(e).css({ left: i, top: r, width: s === "100%" ? _(t).width() : void 0 });
    }), s === "100%" && _(e).css({ width: _(t).width() });
  }));
};
qs = /* @__PURE__ */ new WeakSet();
Dr = function(t = !1) {
  var e;
  (e = this.props.afterRender) == null || e.call(this, { firstRender: t }), it(this, qo, sh).call(this);
};
ih.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class rh extends at {
}
rh.NAME = "Picker";
rh.Component = ih;
class oh extends at {
}
oh.NAME = "Toolbar";
oh.Component = Lt;
function _s(t) {
  return t.split("-")[1];
}
function Go(t) {
  return t === "y" ? "height" : "width";
}
function sn(t) {
  return t.split("-")[0];
}
function Fi(t) {
  return ["top", "bottom"].includes(sn(t)) ? "x" : "y";
}
function el(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Fi(e), c = Go(a), h = s[c] / 2 - i[c] / 2, l = a === "x";
  let f;
  switch (sn(e)) {
    case "top":
      f = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      f = { x: r, y: s.y + s.height };
      break;
    case "right":
      f = { x: s.x + s.width, y: o };
      break;
    case "left":
      f = { x: s.x - i.width, y: o };
      break;
    default:
      f = { x: s.x, y: s.y };
  }
  switch (_s(e)) {
    case "start":
      f[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      f[a] += h * (n && l ? -1 : 1);
  }
  return f;
}
const Rd = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: l, y: f } = el(h, s, c), d = s, u = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: w, fn: g } = a[m], { x: v, y: x, data: k, reset: S } = await g({ x: l, y: f, initialPlacement: s, placement: d, strategy: i, middlewareData: u, rects: h, platform: o, elements: { reference: t, floating: e } });
    l = v ?? l, f = x ?? f, u = { ...u, [w]: { ...u[w], ...k } }, S && p <= 50 && (p++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : S.rects), { x: l, y: f } = el(h, d, c)), m = -1);
  }
  return { x: l, y: f, placement: d, strategy: i, middlewareData: u };
};
function ah(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function ui(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Ad(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: c } = t, { boundary: h = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: d = !1, padding: u = 0 } = e, p = ah(u), m = a[d ? f === "floating" ? "reference" : "floating" : f], w = ui(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: l, strategy: c })), g = f === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, k = ui(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: g, offsetParent: v, strategy: c }) : g);
  return { top: (w.top - k.top + p.top) / x.y, bottom: (k.bottom - w.bottom + p.bottom) / x.y, left: (w.left - k.left + p.left) / x.x, right: (k.right - w.right + p.right) / x.x };
}
const Nd = Math.min, Ld = Math.max;
function Wd(t, e, n) {
  return Ld(t, Nd(e, n));
}
const Dd = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: c } = e;
  if (n == null)
    return {};
  const h = ah(s), l = { x: i, y: r }, f = Fi(o), d = Go(f), u = await c.getDimensions(n), p = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", w = a.reference[d] + a.reference[f] - l[f] - a.floating[d], g = l[f] - a.reference[f], v = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
  let x = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[d]);
  const k = w / 2 - g / 2, S = h[p], N = x - u[d] - h[m], R = x / 2 - u[d] / 2 + k, T = Wd(S, R, N), D = _s(o) != null && R != T && a.reference[d] / 2 - (R < S ? h[p] : h[m]) - u[d] / 2 < 0;
  return { [f]: l[f] - (D ? R < S ? S - R : N - R : 0), data: { [f]: T, centerOffset: R - T } };
} }), Pd = ["top", "right", "bottom", "left"];
Pd.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Id = { left: "right", right: "left", bottom: "top", top: "bottom" };
function fi(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Id[e]);
}
function Od(t, e, n) {
  n === void 0 && (n = !1);
  const s = _s(t), i = Fi(t), r = Go(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = fi(o)), { main: o, cross: fi(o) };
}
const Hd = { start: "end", end: "start" };
function ar(t) {
  return t.replace(/start|end/g, (e) => Hd[e]);
}
const Bd = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: c } = e, { mainAxis: h = !0, crossAxis: l = !0, fallbackPlacements: f, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: u = "none", flipAlignment: p = !0, ...m } = t, w = sn(s), g = sn(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = f || (g || !p ? [fi(o)] : function(C) {
      const W = fi(C);
      return [ar(C), W, ar(W)];
    }(o));
    f || u === "none" || x.push(...function(C, W, U, V) {
      const B = _s(C);
      let H = function(j, gt, ve) {
        const St = ["left", "right"], ee = ["right", "left"], be = ["top", "bottom"], Fe = ["bottom", "top"];
        switch (j) {
          case "top":
          case "bottom":
            return ve ? gt ? ee : St : gt ? St : ee;
          case "left":
          case "right":
            return gt ? be : Fe;
          default:
            return [];
        }
      }(sn(C), U === "start", V);
      return B && (H = H.map((j) => j + "-" + B), W && (H = H.concat(H.map(ar)))), H;
    }(o, p, u, v));
    const k = [o, ...x], S = await Ad(e, m), N = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && N.push(S[w]), l) {
      const { main: C, cross: W } = Od(s, r, v);
      N.push(S[C], S[W]);
    }
    if (R = [...R, { placement: s, overflows: N }], !N.every((C) => C <= 0)) {
      var T;
      const C = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, W = k[C];
      if (W)
        return { data: { index: C, overflows: R }, reset: { placement: W } };
      let U = "bottom";
      switch (d) {
        case "bestFit": {
          var D;
          const V = (D = R.map((B) => [B, B.overflows.filter((H) => H > 0).reduce((H, j) => H + j, 0)]).sort((B, H) => B[1] - H[1])[0]) == null ? void 0 : D[0].placement;
          V && (U = V);
          break;
        }
        case "initialPlacement":
          U = o;
      }
      if (s !== U)
        return { reset: { placement: U } };
    }
    return {};
  } };
}, zd = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: c, elements: h } = r, l = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), f = sn(a), d = _s(a), u = Fi(a) === "x", p = ["left", "top"].includes(f) ? -1 : 1, m = l && u ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: g, crossAxis: v, alignmentAxis: x } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return d && typeof x == "number" && (v = d === "end" ? -1 * x : x), u ? { x: v * m, y: g * p } : { x: g * p, y: v * m };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function mt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function At(t) {
  return mt(t).getComputedStyle(t);
}
function ge(t) {
  return ch(t) ? (t.nodeName || "").toLowerCase() : "";
}
let Es;
function lh() {
  if (Es)
    return Es;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Es = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Es) : navigator.userAgent;
}
function Zt(t) {
  return t instanceof mt(t).HTMLElement;
}
function xt(t) {
  return t instanceof mt(t).Element;
}
function ch(t) {
  return t instanceof mt(t).Node;
}
function nl(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof mt(t).ShadowRoot || t instanceof ShadowRoot;
}
function Ui(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = At(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Fd(t) {
  return ["table", "td", "th"].includes(ge(t));
}
function Pr(t) {
  const e = /firefox/i.test(lh()), n = At(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function hh() {
  return !/^((?!chrome|android).)*safari/i.test(lh());
}
function Yo(t) {
  return ["html", "body", "#document"].includes(ge(t));
}
const sl = Math.min, Yn = Math.max, di = Math.round;
function uh(t) {
  const e = At(t);
  let n = parseFloat(e.width), s = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, o = di(n) !== i || di(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function fh(t) {
  return xt(t) ? t : t.contextElement;
}
const dh = { x: 1, y: 1 };
function rn(t) {
  const e = fh(t);
  if (!Zt(e))
    return dh;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = uh(e);
  let o = (r ? di(n.width) : n.width) / s, a = (r ? di(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Pe(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = fh(t);
  let c = dh;
  e && (s ? xt(s) && (c = rn(s)) : c = rn(t));
  const h = a ? mt(a) : window, l = !hh() && n;
  let f = (o.left + (l && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, d = (o.top + (l && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, u = o.width / c.x, p = o.height / c.y;
  if (a) {
    const m = mt(a), w = s && xt(s) ? mt(s) : s;
    let g = m.frameElement;
    for (; g && s && w !== m; ) {
      const v = rn(g), x = g.getBoundingClientRect(), k = getComputedStyle(g);
      x.x += (g.clientLeft + parseFloat(k.paddingLeft)) * v.x, x.y += (g.clientTop + parseFloat(k.paddingTop)) * v.y, f *= v.x, d *= v.y, u *= v.x, p *= v.y, f += x.x, d += x.y, g = mt(g).frameElement;
    }
  }
  return { width: u, height: p, top: d, right: f + u, bottom: d + p, left: f, x: f, y: d };
}
function pe(t) {
  return ((ch(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Vi(t) {
  return xt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function ph(t) {
  return Pe(pe(t)).left + Vi(t).scrollLeft;
}
function Ud(t, e, n) {
  const s = Zt(e), i = pe(e), r = Pe(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ge(e) !== "body" || Ui(i)) && (o = Vi(e)), Zt(e)) {
      const c = Pe(e, !0);
      a.x = c.x + e.clientLeft, a.y = c.y + e.clientTop;
    } else
      i && (a.x = ph(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function os(t) {
  if (ge(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (nl(t) ? t.host : null) || pe(t);
  return nl(e) ? e.host : e;
}
function il(t) {
  return Zt(t) && At(t).position !== "fixed" ? t.offsetParent : null;
}
function rl(t) {
  const e = mt(t);
  let n = il(t);
  for (; n && Fd(n) && At(n).position === "static"; )
    n = il(n);
  return n && (ge(n) === "html" || ge(n) === "body" && At(n).position === "static" && !Pr(n)) ? e : n || function(s) {
    let i = os(s);
    for (; Zt(i) && !Yo(i); ) {
      if (Pr(i))
        return i;
      i = os(i);
    }
    return null;
  }(t) || e;
}
function mh(t) {
  const e = os(t);
  return Yo(e) ? t.ownerDocument.body : Zt(e) && Ui(e) ? e : mh(e);
}
function Kn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = mh(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = mt(s);
  return i ? e.concat(r, r.visualViewport || [], Ui(s) ? s : []) : e.concat(s, Kn(s));
}
function ol(t, e, n) {
  return e === "viewport" ? ui(function(s, i) {
    const r = mt(s), o = pe(s), a = r.visualViewport;
    let c = o.clientWidth, h = o.clientHeight, l = 0, f = 0;
    if (a) {
      c = a.width, h = a.height;
      const d = hh();
      (d || !d && i === "fixed") && (l = a.offsetLeft, f = a.offsetTop);
    }
    return { width: c, height: h, x: l, y: f };
  }(t, n)) : xt(e) ? function(s, i) {
    const r = Pe(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, c = Zt(s) ? rn(s) : { x: 1, y: 1 }, h = s.clientWidth * c.x, l = s.clientHeight * c.y, f = a * c.x, d = o * c.y;
    return { top: d, left: f, right: f + h, bottom: d + l, x: f, y: d, width: h, height: l };
  }(e, n) : ui(function(s) {
    var i;
    const r = pe(s), o = Vi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, c = Yn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Yn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let l = -o.scrollLeft + ph(s);
    const f = -o.scrollTop;
    return At(a || r).direction === "rtl" && (l += Yn(r.clientWidth, a ? a.clientWidth : 0) - c), { width: c, height: h, x: l, y: f };
  }(pe(t)));
}
const Vd = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, l) {
    const f = l.get(h);
    if (f)
      return f;
    let d = Kn(h).filter((w) => xt(w) && ge(w) !== "body"), u = null;
    const p = At(h).position === "fixed";
    let m = p ? os(h) : h;
    for (; xt(m) && !Yo(m); ) {
      const w = At(m), g = Pr(m);
      (p ? g || u : g || w.position !== "static" || !u || !["absolute", "fixed"].includes(u.position)) ? u = w : d = d.filter((v) => v !== m), m = os(m);
    }
    return l.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], c = o.reduce((h, l) => {
    const f = ol(e, l, i);
    return h.top = Yn(f.top, h.top), h.right = sl(f.right, h.right), h.bottom = sl(f.bottom, h.bottom), h.left = Yn(f.left, h.left), h;
  }, ol(e, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = Zt(n), r = pe(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ge(n) !== "body" || Ui(r)) && (o = Vi(n)), Zt(n))) {
    const h = Pe(n);
    a = rn(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + c.x, y: e.y * a.y - o.scrollTop * a.y + c.y };
}, isElement: xt, getDimensions: function(t) {
  return uh(t);
}, getOffsetParent: rl, getDocumentElement: pe, getScale: rn, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || rl, r = this.getDimensions;
  return { reference: Ud(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => At(t).direction === "rtl" };
function jd(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, c = i && !a, h = c || r ? [...xt(t) ? Kn(t) : t.contextElement ? Kn(t.contextElement) : [], ...Kn(e)] : [];
  h.forEach((u) => {
    c && u.addEventListener("scroll", n, { passive: !0 }), r && u.addEventListener("resize", n);
  });
  let l, f = null;
  if (o) {
    let u = !0;
    f = new ResizeObserver(() => {
      u || n(), u = !1;
    }), xt(t) && !a && f.observe(t), xt(t) || !t.contextElement || a || f.observe(t.contextElement), f.observe(e);
  }
  let d = a ? Pe(t) : null;
  return a && function u() {
    const p = Pe(t);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, l = requestAnimationFrame(u);
  }(), n(), () => {
    var u;
    h.forEach((p) => {
      c && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (u = f) == null || u.disconnect(), f = null, a && cancelAnimationFrame(l);
  };
}
const qd = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Vd, ...n }, r = { ...i.platform, _c: s };
  return Rd(t, e, { ...i, platform: r });
};
var Ko = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, F = (t, e, n) => (Ko(t, e, "read from private field"), n ? n.call(t) : e.get(t)), J = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ie = (t, e, n, s) => (Ko(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Rt = (t, e, n) => (Ko(t, e, "access private method"), n), Xn, Jn, Pn, Qe, ct, Ir, pi, ji, Xo, Jo, gh, Or, _h, Zo, yh, Qo, wh, ta, vh, Hr, bh, ea, xh, Zn, Br, kh;
const tn = class extends Dt {
  constructor() {
    super(...arguments), J(this, ji), J(this, Jo), J(this, Or), J(this, Zo), J(this, Qo), J(this, ta), J(this, Hr), J(this, ea), J(this, Br), J(this, Xn, !1), J(this, Jn, void 0), J(this, Pn, 0), J(this, Qe, void 0), J(this, ct, void 0), J(this, Ir, void 0), J(this, pi, void 0), this.hideLater = () => {
      F(this, Zn).call(this), Ie(this, Pn, window.setTimeout(this.hide.bind(this), 100));
    }, J(this, Zn, () => {
      clearTimeout(F(this, Pn)), Ie(this, Pn, 0);
    });
  }
  get isShown() {
    var t;
    return (t = F(this, Qe)) == null ? void 0 : t.classList.contains(tn.CLASS_SHOW);
  }
  get tooltip() {
    return F(this, Qe) || Rt(this, Or, _h).call(this);
  }
  get trigger() {
    return F(this, Ir) || this.element;
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
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !F(this, Xn) && this.isHover && Rt(this, Br, kh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(tn.CLASS_SHOW), Rt(this, Hr, bh).call(this), !0;
  }
  hide() {
    var e;
    var t;
    return (t = F(this, pi)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = F(this, Qe)) == null || e.classList.remove(tn.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    F(this, Xn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", F(this, Zn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t || {}, n = this.getAll().entries(), s = new Set(e || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let Nt = tn;
Xn = /* @__PURE__ */ new WeakMap();
Jn = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakMap();
ji = /* @__PURE__ */ new WeakSet();
Xo = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
};
Jo = /* @__PURE__ */ new WeakSet();
gh = function() {
  const t = Rt(this, ji, Xo).call(this);
  return Ie(this, ct, document.createElement("div")), F(this, ct).style.position = this.options.strategy, F(this, ct).style.width = `${t}px`, F(this, ct).style.height = `${t}px`, F(this, ct).style.transform = "rotate(45deg)", F(this, ct);
};
Or = /* @__PURE__ */ new WeakSet();
_h = function() {
  var n;
  const t = tn.TOOLTIP_CLASS;
  let e;
  if (this.isDynamic) {
    e = document.createElement("div");
    const s = this.options.className ? this.options.className.split(" ") : [];
    let i = [t, this.options.type || ""];
    i = i.concat(s), e.classList.add(...i), e[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const s = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (s != null && s.startsWith("#") && (e = document.querySelector(s)), !e) {
      const i = this.element.nextElementSibling;
      i != null && i.classList.contains(t) ? e = i : e = (n = this.element.parentNode) == null ? void 0 : n.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (e == null || e.append(Rt(this, Jo, gh).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), Ie(this, Qe, e), e;
};
Zo = /* @__PURE__ */ new WeakSet();
yh = function() {
  var i;
  const t = Rt(this, ji, Xo).call(this), { strategy: e, placement: n } = this.options, s = {
    middleware: [zd(t), Bd()],
    strategy: e,
    placement: n
  };
  return this.options.arrow && F(this, ct) && ((i = s.middleware) == null || i.push(Dd({ element: F(this, ct) }))), s;
};
Qo = /* @__PURE__ */ new WeakSet();
wh = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
ta = /* @__PURE__ */ new WeakSet();
vh = function(t) {
  return t === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : t === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : t === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
};
Hr = /* @__PURE__ */ new WeakSet();
bh = function() {
  const t = Rt(this, Zo, yh).call(this), e = Rt(this, ea, xh).call(this);
  Ie(this, pi, jd(e, this.tooltip, () => {
    qd(e, this.tooltip, t).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = Rt(this, Qo, wh).call(this, o);
      if (i.arrow && F(this, ct)) {
        const { x: c, y: h } = i.arrow;
        Object.assign(F(this, ct).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-F(this, ct).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Rt(this, ta, vh).call(this, o)
        });
      }
    });
  }));
};
ea = /* @__PURE__ */ new WeakSet();
xh = function() {
  return F(this, Jn) || Ie(this, Jn, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: e, clientY: n } = t;
        return {
          width: 0,
          height: 0,
          top: n,
          right: e,
          bottom: n,
          left: e
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), F(this, Jn);
};
Zn = /* @__PURE__ */ new WeakMap();
Br = /* @__PURE__ */ new WeakSet();
kh = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", F(this, Zn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ie(this, Xn, !0);
};
Nt.NAME = "tooltip";
Nt.TOOLTIP_CLASS = "tooltip";
Nt.CLASS_SHOW = "show";
Nt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
Nt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, Nt.MENU_SELECTOR);
  if (n) {
    const i = Nt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    Nt.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var i;
  const e = t.target, n = (i = e.closest) == null ? void 0 : i.call(e, Nt.MENU_SELECTOR);
  if (!n)
    return;
  const s = Nt.ensure(n);
  s.isHover && s.show();
});
var Gd = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ms = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, mi = (t, e, n) => (Gd(t, e, "access private method"), n), zr, $h, Fr, Sh, na, Ch, sa, Eh;
class Yd extends Dt {
  constructor() {
    super(...arguments), Ms(this, zr), Ms(this, Fr), Ms(this, na), Ms(this, sa);
  }
  init() {
    _(this.element).on("submit", this.onSubmit.bind(this)).on("input mousedown change", this.onInput.bind(this));
  }
  enable(e = !0) {
    _(this.element).toggleClass("loading", !e);
  }
  disable() {
    this.enable(!1);
  }
  onInput(e) {
    const n = _(e.target).closest(".has-error");
    n.length && (n.removeClass("has-error"), n.closest(".form-group").find(`#${n.attr("id")}Tip`).remove());
  }
  onSubmit(e) {
    var i;
    e.preventDefault();
    const { element: n } = this, s = _.extend({}, this.options);
    this.emit("before", e, n, s), ((i = s.beforeSubmit) == null ? void 0 : i.call(s, e, n, s)) !== !1 && (this.disable(), mi(this, Fr, Sh).call(this, mi(this, zr, $h).call(this)).finally(() => {
      this.enable();
    }));
  }
  submit() {
    this.element.submit();
  }
  reset() {
    this.element.reset();
  }
}
zr = /* @__PURE__ */ new WeakSet();
$h = function() {
  const { element: t, options: e } = this;
  let n = new FormData(t), { submitEmptySelectValue: s = "" } = e;
  s !== !1 && (typeof s != "boolean" && (s = ""), _(t).find("select").each((r, o) => {
    const c = _(o).attr("name");
    n.has(c) || n.append(c, typeof s == "object" ? s[c] : s);
  }));
  const { beforeSend: i } = e;
  if (i) {
    const r = i(n);
    r instanceof FormData && (n = r);
  }
  return this.emit("send", n), n;
};
Fr = /* @__PURE__ */ new WeakSet();
Sh = async function(t) {
  var o, a;
  const { element: e, options: n } = this;
  let s, i, r;
  try {
    const c = await fetch(n.url || e.action, {
      method: e.method || "POST",
      body: t,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    });
    i = await c.text(), c.ok ? (r = JSON.parse(i), (!r || typeof r != "object") && (s = new Error("Invalid json format"))) : s = new Error(c.statusText);
  } catch (c) {
    s = c;
  }
  s ? (this.emit("error", s, i), (o = n.onError) == null || o.call(n, s, i)) : mi(this, sa, Eh).call(this, r), this.emit("complete", r, s), (a = n.onComplete) == null || a.call(n, r, s);
};
na = /* @__PURE__ */ new WeakSet();
Ch = function(t) {
  var n;
  let e;
  Object.entries(t).forEach(([s, i]) => {
    Array.isArray(i) && (i = i.join(""));
    const r = document.getElementById(s), o = r ? _(r) : _(this.element).find(`[name="${s}"]`);
    if (!o.length)
      return;
    o.addClass("has-error");
    const a = o.closest(".form-group,.form-batch-control");
    if (a.length) {
      const c = document.getElementById(`${s}Tip`);
      let h = c ? _(c) : null;
      h || (h = _(`<div class="form-tip ajax-form-tip text-danger" id="${s}Tip"></div>`).appendTo(a)), h.empty().text(i);
    }
    e || (e = o);
  }), e && ((n = e[0]) == null || n.focus());
};
sa = /* @__PURE__ */ new WeakSet();
Eh = function(t) {
  var o, a;
  const { options: e } = this, { message: n } = t;
  if (t.result === "success") {
    if (this.emit("success", t), ((o = e.onSuccess) == null ? void 0 : o.call(e, t)) === !1)
      return;
    typeof n == "string" && n.length && _(document).trigger("zui.messager.show", { content: n, type: "success" });
  } else {
    if (this.emit("fail", t), ((a = e.onFail) == null ? void 0 : a.call(e, t)) === !1)
      return;
    n && (typeof n == "string" && n.length ? _(document).trigger("zui.messager.show", { content: n, type: "danger" }) : typeof n == "object" && mi(this, na, Ch).call(this, n));
  }
  const s = t.closeModal || e.closeModal;
  s && _(this.element).trigger("zui.modal.hide", { target: typeof s == "string" ? s : void 0 });
  const i = t.callback || e.callback;
  if (typeof i == "string") {
    const c = i.indexOf("("), h = (c > 0 ? i.substring(0, c) : i).split(".");
    let l = window, f = h[0];
    h.length > 1 && (f = h[1], h[0] === "top" ? l = window.top : h[0] === "parent" ? l = window.parent : l = window[h[0]]);
    const d = l == null ? void 0 : l[f];
    if (typeof d == "function") {
      let u = [];
      return c > 0 && i[i.length - 1] == ")" ? u = JSON.parse("[" + i.substring(c + 1, i.length - 1) + "]") : u.push(t), d.apply(this, u);
    }
  } else
    i && typeof i == "object" && (i.target ? window[i.target] : window)[i.name].apply(this, Array.isArray(i.params) ? i.params : [i.params]);
  const r = t.load || e.load || t.locate;
  r && _(this.element).trigger("zui.locate", r);
};
Yd.NAME = "ajaxform";
function Kd(t, e) {
  var o, a, c, h;
  const { message: n } = t;
  if (t.result === "success") {
    if (((o = e.onSuccess) == null ? void 0 : o.call(e, t)) === !1)
      return;
    typeof n == "string" && n.length && ((a = e.onMessage) == null || a.call(e, n, t));
  } else {
    if (((c = e.onFail) == null ? void 0 : c.call(e, t)) === !1)
      return;
    n && ((h = e.onMessage) == null || h.call(e, n, t));
  }
  const s = t.closeModal || e.closeModal;
  s && _(e.element || document).trigger("zui.modal.hide", { target: typeof s == "string" ? s : void 0 });
  const i = t.callback || e.callback;
  if (typeof i == "string") {
    const l = i.indexOf("("), f = (l > 0 ? i.substring(0, l) : i).split(".");
    let d = window, u = f[0];
    f.length > 1 && (u = f[1], f[0] === "top" ? d = window.top : f[0] === "parent" ? d = window.parent : d = window[f[0]]);
    const p = d == null ? void 0 : d[u];
    if (typeof p == "function") {
      let m = [];
      return l > 0 && i[i.length - 1] == ")" ? m = JSON.parse("[" + i.substring(l + 1, i.length - 1) + "]") : m.push(t), p.apply(this, m);
    }
  } else
    i && typeof i == "object" && (i.target ? window[i.target] : window)[i.name].apply(this, Array.isArray(i.params) ? i.params : [i.params]);
  const r = t.load || e.load || t.locate;
  r && _(e.element || document).trigger("zui.locate", r);
}
async function Mh(t) {
  var h, l, f;
  if (((h = t.beforeSubmit) == null ? void 0 : h.call(t, t)) === !1)
    return [void 0, new Error("canceled")];
  const { loadingClass: e, element: n } = t;
  n && e && _(n).addClass(e);
  const { data: s } = t;
  let i;
  if (s instanceof FormData)
    i = s;
  else if (s) {
    i = new FormData();
    for (const [d, u] of Object.entries(s))
      if (Array.isArray(u)) {
        for (const p of u)
          i.append(d, p);
        continue;
      } else
        i.append(d, u);
  }
  const { beforeSend: r } = t;
  if (r) {
    const d = r(i);
    d instanceof FormData && (i = d);
  }
  let o, a, c;
  try {
    const d = await fetch(t.url, {
      method: t.method || "POST",
      body: i,
      credentials: "same-origin",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        ...t.headers
      }
    });
    a = await d.text(), d.ok ? (c = JSON.parse(a), (!c || typeof c != "object") && (o = new Error("Invalid json format"))) : o = new Error(d.statusText);
  } catch (d) {
    o = d;
  }
  return o ? (l = t.onError) == null || l.call(t, o, a) : Kd(c, t), (f = t.onComplete) == null || f.call(t, c, o), n && e && _(n).removeClass(e), [c, o];
}
_.extend(_, { ajaxSubmit: Mh });
_(document).on("click.ajaxSubmit.zui", ".ajax-submit", function(t) {
  t.preventDefault();
  const e = _(this), n = e.data();
  !n.url && e.is("a") && (n.url = e.attr("href") || ""), n.url && (n.element = this, Mh(n));
});
var ds, Ei, Mi, Ti;
class Xd extends G {
  constructor(n) {
    super(n);
    L(this, ds, Xt());
    L(this, Ei, (n) => {
      n.stopPropagation(), Tt.show({
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
    this.state = { content: /* @__PURE__ */ y("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, ds).current;
  }
  componentDidMount() {
    this.load(), _(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    _(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...r } = s;
    this.setState({ loading: !0 }, () => {
      fetch(dt(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ y(ql, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ y("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: c, menu: h, id: l } = a, { loading: f, content: d, dragging: u } = this.state;
    return /* @__PURE__ */ y("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ y(
      "div",
      {
        class: `dashboard-block load-indicator${f ? " loading" : ""}${h ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: E(this, Mi),
        onDragEnd: E(this, Ti),
        "data-id": l,
        ref: E(this, ds),
        children: [
          /* @__PURE__ */ y("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ y("div", { class: "dashboard-block-title", children: c }),
            h ? /* @__PURE__ */ y("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ y("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, Ei), children: /* @__PURE__ */ y("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
ds = new WeakMap(), Ei = new WeakMap(), Mi = new WeakMap(), Ti = new WeakMap();
var Th = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, qt = (t, e, n) => (Th(t, e, "read from private field"), n ? n.call(t) : e.get(t)), yt = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $t = (t, e, n) => (Th(t, e, "access private method"), n), Qt, ia, Rh, ra, Ah, Ur, Nh, oa, Lh, gi, Vr, qi, jr, aa, Wh, qr, Gr, Gi, la;
const ca = class extends G {
  constructor() {
    super(...arguments), yt(this, ia), yt(this, ra), yt(this, Ur), yt(this, oa), yt(this, gi), yt(this, qi), yt(this, aa), yt(this, Qt, /* @__PURE__ */ new Map()), this.state = {}, yt(this, qr, (t) => {
      var n;
      const e = (n = t.dataTransfer) == null ? void 0 : n.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), yt(this, Gr, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = $t(this, Ur, Nh).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Qt);
    return console.log("Dashboard.render", { blocks: t, map: i }, this), /* @__PURE__ */ y("div", { class: "dashboard", children: /* @__PURE__ */ y("div", { class: "dashboard-blocks", style: { height: e * n }, children: t.map((r, o) => {
      const { id: a } = r, [c, h, l, f] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ y(
        Xd,
        {
          id: a,
          index: o,
          left: `${100 * c / s}%`,
          top: n * h,
          height: n * f,
          width: `${100 * l / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: qt(this, qr),
          onDragEnd: qt(this, Gr)
        },
        r.id
      );
    }) }) });
  }
};
let ha = ca;
Qt = /* @__PURE__ */ new WeakMap();
ia = /* @__PURE__ */ new WeakSet();
Rh = function(t) {
  const { blockDefaultSize: e, blockSizeMap: n } = this.props;
  return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
};
ra = /* @__PURE__ */ new WeakSet();
Ah = function() {
  const { blocks: t, blockFetch: e, blockMenu: n } = this.props;
  return t.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: c = -1,
      fetch: h = e,
      menu: l = n,
      ...f
    } = i, [d, u] = $t(this, ia, Rh).call(this, o);
    return {
      id: `${r}`,
      width: d,
      height: u,
      left: a,
      top: c,
      fetch: h,
      menu: l,
      ...f
    };
  });
};
Ur = /* @__PURE__ */ new WeakSet();
Nh = function() {
  qt(this, Qt).clear();
  let t = 0;
  const e = $t(this, ra, Ah).call(this);
  return e.forEach((n) => {
    $t(this, oa, Lh).call(this, n);
    const [, s, , i] = qt(this, Qt).get(n.id);
    t = Math.max(t, s + i);
  }), { blocks: e, height: t };
};
oa = /* @__PURE__ */ new WeakSet();
Lh = function(t) {
  const e = qt(this, Qt), { id: n, left: s, top: i, width: r, height: o } = t;
  if (s < 0 || i < 0) {
    const [a, c] = $t(this, aa, Wh).call(this, r, o, s, i);
    e.set(n, [a, c, r, o]);
  } else
    $t(this, qi, jr).call(this, n, [s, i, r, o]);
};
gi = /* @__PURE__ */ new WeakSet();
Vr = function(t) {
  var e;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Qt).entries())
    if (s !== n && $t(e = ca, Gi, la).call(e, i, t))
      return !1;
  return !0;
};
qi = /* @__PURE__ */ new WeakSet();
jr = function(t, e) {
  var n;
  qt(this, Qt).set(t, e);
  for (const [s, i] of qt(this, Qt).entries())
    s !== t && $t(n = ca, Gi, la).call(n, i, e) && (i[1] = e[1] + e[3], $t(this, qi, jr).call(this, s, i));
};
aa = /* @__PURE__ */ new WeakSet();
Wh = function(t, e, n, s) {
  if (n >= 0 && s >= 0) {
    if ($t(this, gi, Vr).call(this, [n, s, t, e]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if ($t(this, gi, Vr).call(this, [i, r, t, e])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + t > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
qr = /* @__PURE__ */ new WeakMap();
Gr = /* @__PURE__ */ new WeakMap();
Gi = /* @__PURE__ */ new WeakSet();
la = function([t, e, n, s], [i, r, o, a]) {
  return !(t + n <= i || i + o <= t || e + s <= r || r + a <= e);
};
yt(ha, Gi);
ha.defaultProps = {
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
class Dh extends at {
}
Dh.NAME = "Dashboard";
Dh.Component = ha;
var le, ce;
class al extends G {
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
      i && (E(this, le) && cancelAnimationFrame(E(this, le)), O(this, le, requestAnimationFrame(() => {
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
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: c } = this.props, h = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
      this.scroll(h * c / a), s.preventDefault();
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
    n && (O(this, ce, typeof n == "string" ? document : n.current), E(this, ce).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, ce) && E(this, ce).removeEventListener("wheel", this._handleWheel);
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
      top: c,
      bottom: h,
      right: l
    } = this.props, { maxScrollPos: f, scrollPos: d } = this, { dragStart: u } = this.state, p = {
      left: a,
      top: c,
      bottom: h,
      right: l,
      ...o
    }, m = {};
    return s === "horz" ? (p.height = i, p.width = n, m.width = this.barSize, m.left = Math.round(Math.min(f, d) * (n - m.width) / f)) : (p.width = i, p.height = n, m.height = this.barSize, m.top = Math.round(Math.min(f, d) * (n - m.height) / f)), /* @__PURE__ */ y(
      "div",
      {
        className: M("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": u
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ y(
          "div",
          {
            className: "scrollbar-bar",
            style: m,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
le = new WeakMap(), ce = new WeakMap();
function Jd(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Ph({ col: t, className: e, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: c, ...h }) {
  var D;
  const l = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...o
  }, { align: f, border: d } = t.setting, u = {
    justifyContent: f ? f === "left" ? "start" : f === "right" ? "end" : f : void 0,
    ...t.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], m = ["dtable-cell-content", t.setting.cellClass], w = (D = s.data) == null ? void 0 : D[t.name], g = [a ?? w ?? ""], v = i ? i(g, { row: s, col: t, value: w }, ot) : g, x = [], k = [], S = {}, N = {};
  let R = "div";
  v == null || v.forEach((C) => {
    if (typeof C == "object" && C && !rt(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const W = C.outer ? x : k;
      C.html ? W.push(/* @__PURE__ */ y("div", { className: M("dtable-cell-html", C.className), style: C.style, dangerouslySetInnerHTML: { __html: C.html }, ...C.attrs ?? {} })) : (C.style && Object.assign(C.outer ? l : u, C.style), C.className && (C.outer ? p : m).push(C.className), C.children && W.push(C.children), C.attrs && Object.assign(C.outer ? S : N, C.attrs)), C.tagName && !C.outer && (R = C.tagName);
    } else
      k.push(C);
  });
  const T = R;
  return /* @__PURE__ */ y(
    "div",
    {
      className: M(p),
      style: l,
      "data-col": t.name,
      "data-type": t.type,
      ...h,
      ...S,
      children: [
        k.length > 0 && /* @__PURE__ */ y(T, { className: M(m), style: u, ...N, children: k }),
        x
      ]
    }
  );
}
function lr({ row: t, className: e, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Ph, onRenderCell: c }) {
  return /* @__PURE__ */ y("div", { className: M("dtable-cells", e), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ y(
    a,
    {
      col: h,
      row: t,
      onRenderCell: c
    },
    h.name
  ) : null) });
}
function Ih({
  row: t,
  className: e,
  top: n,
  height: s,
  fixedLeftCols: i,
  fixedRightCols: r,
  scrollCols: o,
  fixedLeftWidth: a,
  scrollWidth: c,
  scrollColsWidth: h,
  fixedRightWidth: l,
  scrollLeft: f,
  CellComponent: d = Ph,
  onRenderCell: u,
  style: p,
  ...m
}) {
  let w = null;
  i != null && i.length && (w = /* @__PURE__ */ y(
    lr,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: a,
      row: t,
      CellComponent: d,
      onRenderCell: u
    }
  ));
  let g = null;
  o != null && o.length && (g = /* @__PURE__ */ y(
    lr,
    {
      className: "dtable-flexable",
      cols: o,
      left: a - f,
      width: Math.max(c, h),
      row: t,
      CellComponent: d,
      onRenderCell: u
    }
  ));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ y(
    lr,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: a + c,
      width: l,
      row: t,
      CellComponent: d,
      onRenderCell: u
    }
  ));
  const x = { top: n, height: s, lineHeight: `${s - 2}px`, ...p };
  return /* @__PURE__ */ y(
    "div",
    {
      className: M("dtable-row", e),
      style: x,
      "data-id": t.id,
      ...m,
      children: [
        w,
        g,
        v
      ]
    }
  );
}
function Zd({ height: t, onRenderRow: e, ...n }) {
  const s = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: s }, ot);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ y("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ y(Ih, { ...s }) });
}
function Qd({
  className: t,
  style: e,
  top: n,
  rows: s,
  height: i,
  rowHeight: r,
  scrollTop: o,
  onRenderRow: a,
  ...c
}) {
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ y("div", { className: M("dtable-rows", t), style: e, children: s.map((h) => {
    const l = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...c
    }, f = a == null ? void 0 : a({ props: l, row: h }, ot);
    return f && Object.assign(l, f), /* @__PURE__ */ y(Ih, { ...l });
  }) });
}
const _i = /* @__PURE__ */ new Map(), yi = [];
function Oh(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && _i.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  _i.set(n, t), e != null && e.buildIn && !yi.includes(n) && yi.push(n);
}
function ze(t, e) {
  Oh(t, e);
  const n = (s) => {
    if (!s)
      return t;
    const { defaultOptions: i, ...r } = t;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = t, n;
}
function Hh(t) {
  return _i.delete(t);
}
function tp(t) {
  if (typeof t == "string") {
    const e = _i.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Bh(t, e, n) {
  return e.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = tp(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Bh(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function ep(t = [], e = !0) {
  return e && yi.length && t.unshift(...yi), t != null && t.length ? Bh([], t, /* @__PURE__ */ new Set()) : [];
}
function zh() {
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
var ua = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, $ = (t, e, n) => (ua(t, e, "read from private field"), n ? n.call(t) : e.get(t)), P = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, K = (t, e, n, s) => (ua(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Bt = (t, e, n) => (ua(t, e, "access private method"), n), Xe, In, Le, jt, Me, tt, Ct, Ht, On, Gs, wi, ie, Hn, Bn, Yr, Fh, Kr, Uh, Xr, Vh, Jr, jh, Ys, Zr, fa, da, Yi, vi, Qr, to, pa, qh, ma, Gh, eo, Yh;
let ga = class extends G {
  constructor(e) {
    super(e), P(this, Yr), P(this, Kr), P(this, Xr), P(this, Jr), P(this, Ys), P(this, pa), P(this, ma), P(this, eo), this.ref = Xt(), P(this, Xe, 0), P(this, In, void 0), P(this, Le, !1), P(this, jt, void 0), P(this, Me, void 0), P(this, tt, []), P(this, Ct, void 0), P(this, Ht, /* @__PURE__ */ new Map()), P(this, On, {}), P(this, Gs, void 0), P(this, wi, []), this.updateLayout = () => {
      $(this, Xe) && cancelAnimationFrame($(this, Xe)), K(this, Xe, requestAnimationFrame(() => {
        K(this, Ct, void 0), this.forceUpdate(), K(this, Xe, 0);
      }));
    }, P(this, ie, (n, s) => {
      s = s || n.type;
      const i = $(this, Ht).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), P(this, Hn, (n) => {
      $(this, ie).call(this, n, `window_${n.type}`);
    }), P(this, Bn, (n) => {
      $(this, ie).call(this, n, `document_${n.type}`);
    }), P(this, fa, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return $(this, tt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), P(this, da, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), $(this, tt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), P(this, Yi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[a] && (n = o.setting[a].call(this, n, s, i)), this.options[a] && (n = this.options[a].call(this, n, s, i)), $(this, tt).forEach((c) => {
        c[a] && (n = c[a].call(this, n, s, i));
      }), n;
    }), P(this, vi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), P(this, Qr, (n) => {
      var a, c, h, l, f;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), $(this, tt).forEach((d) => {
          var u;
          (u = d.onHeaderCellClick) == null || u.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, u = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, n, { colName: r, rowID: i, rowInfo: u, element: o, rowElement: d })) === !0)
            return;
          for (const p of $(this, tt))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: u, element: o, rowElement: d })) === !0)
              return;
        }
        if (((l = this.options.onRowClick) == null ? void 0 : l.call(this, n, { rowID: i, rowInfo: u, element: d })) === !0)
          return;
        for (const p of $(this, tt))
          if (((f = p.onRowClick) == null ? void 0 : f.call(this, n, { rowID: i, rowInfo: u, element: d })) === !0)
            return;
      }
    }), P(this, to, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), K(this, In, e.id ?? `dtable-${Hi(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, K(this, Me, Object.freeze(ep(e.plugins))), $(this, Me).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, c]) => {
        typeof c == "function" && Object.assign(this, { [a]: c.bind(this) });
      }), i && Object.assign($(this, On), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var e;
    return ((e = $(this, Ct)) == null ? void 0 : e.options) || $(this, jt) || zh();
  }
  get plugins() {
    return $(this, tt);
  }
  get layout() {
    return $(this, Ct);
  }
  get id() {
    return $(this, In);
  }
  get data() {
    return $(this, On);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    K(this, jt, void 0);
  }
  componentDidMount() {
    if ($(this, Le) ? this.forceUpdate() : Bt(this, Ys, Zr).call(this), $(this, tt).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", $(this, Qr)), this.on("keydown", $(this, to)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), K(this, Gs, n);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    $(this, tt).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    $(this, Le) ? Bt(this, Ys, Zr).call(this) : $(this, tt).forEach((e) => {
      var n;
      (n = e.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = $(this, Gs)) == null || n.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const s of $(this, Ht).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), $(this, Hn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), $(this, Bn)) : e.removeEventListener(s, $(this, ie));
    $(this, tt).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), $(this, Me).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), K(this, On, {}), $(this, Ht).clear();
  }
  on(e, n, s) {
    var r;
    s && (e = `${s}_${e}`);
    const i = $(this, Ht).get(e);
    i ? i.push(n) : ($(this, Ht).set(e, [n]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), $(this, Hn)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), $(this, Bn)) : (r = this.ref.current) == null || r.addEventListener(e, $(this, ie)));
  }
  off(e, n, s) {
    var o;
    s && (e = `${s}_${e}`);
    const i = $(this, Ht).get(e);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || ($(this, Ht).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), $(this, Hn)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), $(this, Bn)) : (o = this.ref.current) == null || o.removeEventListener(e, $(this, ie)));
  }
  emitCustomEvent(e, n) {
    $(this, ie).call(this, n instanceof Event ? n : new CustomEvent(e, { detail: n }), e);
  }
  scroll(e, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, colsInfo: { scrollWidth: c, scrollColsWidth: h } } = this.layout, { to: l } = e;
    let { scrollLeft: f, scrollTop: d } = e;
    if (l === "up" || l === "down")
      d = i + (l === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (l === "left" || l === "right")
      f = s + (l === "right" ? 1 : -1) * c;
    else if (l === "home")
      d = 0;
    else if (l === "end")
      d = r - o;
    else if (l === "left-begin")
      f = 0;
    else if (l === "right-end")
      f = h - c;
    else {
      const { offsetLeft: p, offsetTop: m } = e;
      typeof p == "number" && (f = s + p), typeof m == "number" && (f = i + m);
    }
    const u = {};
    return typeof f == "number" && (f = Math.max(0, Math.min(f, h - c)), f !== s && (u.scrollLeft = f)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - o)), d !== i && (u.scrollTop = d)), Object.keys(u).length ? (this.setState(u, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, u), n == null || n.call(this, !0);
    }), !0) : (n == null || n.call(this, !1), !1);
  }
  getColInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    const { colsMap: n, colsList: s } = this.layout;
    return typeof e == "number" ? s[e] : n[e];
  }
  getRowInfo(e) {
    if (e === void 0)
      return;
    if (typeof e == "object")
      return e;
    if (e === -1 || e === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: n, rowsMap: s } = this.layout;
    return typeof e == "number" ? n[e] : s[e];
  }
  getCellValue(e, n) {
    var a;
    const s = typeof e == "object" ? e : this.getRowInfo(e);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(e) {
    return this.layout.rows[e];
  }
  update(e = {}, n) {
    if (!$(this, jt))
      return;
    typeof e == "function" && (n = e, e = {});
    const { dirtyType: s, state: i } = e;
    if (s === "layout")
      K(this, Ct, void 0);
    else if (s === "options") {
      if (K(this, jt, void 0), !$(this, Ct))
        return;
      K(this, Ct, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(e) {
    const n = e.target;
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
  i18n(e, n, s) {
    return Kt($(this, wi), e, n, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.name === e);
  }
  render() {
    const e = Bt(this, eo, Yh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: c } = this.options, h = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, l = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": c
    }], f = [];
    return e && $(this, tt).forEach((d) => {
      var p;
      const u = (p = d.onRender) == null ? void 0 : p.call(this, e);
      u && (u.style && Object.assign(h, u.style), u.className && l.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ y(
      "div",
      {
        id: $(this, In),
        className: M(l),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: [
          e && Bt(this, Yr, Fh).call(this, e),
          e && Bt(this, Kr, Uh).call(this, e),
          e && Bt(this, Xr, Vh).call(this, e),
          e && Bt(this, Jr, jh).call(this, e)
        ]
      }
    );
  }
};
Xe = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
Yr = /* @__PURE__ */ new WeakSet();
Fh = function(t) {
  const { header: e, colsInfo: n, headerHeight: s, scrollLeft: i } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ y(
      Zd,
      {
        scrollLeft: i,
        height: s,
        onRenderCell: $(this, Yi),
        onRenderRow: $(this, da),
        ...n
      }
    );
  const r = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ y(
    wo,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [t],
      generatorThis: this
    }
  );
};
Kr = /* @__PURE__ */ new WeakSet();
Uh = function(t) {
  const { headerHeight: e, rowsHeight: n, visibleRows: s, rowHeight: i, colsInfo: r, scrollLeft: o, scrollTop: a } = t;
  return /* @__PURE__ */ y(
    Qd,
    {
      top: e,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      onRenderCell: $(this, Yi),
      onRenderRow: $(this, fa),
      ...r
    }
  );
};
Xr = /* @__PURE__ */ new WeakSet();
Vh = function(t) {
  const { footer: e } = t;
  if (!e)
    return null;
  const n = typeof e == "function" ? e.call(this, t) : Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ y(
    wo,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: n,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    }
  );
};
Jr = /* @__PURE__ */ new WeakSet();
jh = function(t) {
  const e = [], { scrollLeft: n, colsInfo: s, scrollTop: i, rowsHeight: r, rowsHeightTotal: o, footerHeight: a } = t, { scrollColsWidth: c, scrollWidth: h } = s, { scrollbarSize: l = 12, horzScrollbarPos: f } = this.options;
  return c > h && e.push(
    /* @__PURE__ */ y(
      al,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: c,
        clientSize: h,
        onScroll: $(this, vi),
        left: s.fixedLeftWidth,
        bottom: (f === "inside" ? 0 : -l) + a,
        size: l,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), o > r && e.push(
    /* @__PURE__ */ y(
      al,
      {
        type: "vert",
        scrollPos: i,
        scrollSize: o,
        clientSize: r,
        onScroll: $(this, vi),
        right: 0,
        size: l,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
};
Ys = /* @__PURE__ */ new WeakSet();
Zr = function() {
  var t;
  K(this, Le, !1), (t = this.options.afterRender) == null || t.call(this), $(this, tt).forEach((e) => {
    var n;
    return (n = e.afterRender) == null ? void 0 : n.call(this);
  });
};
fa = /* @__PURE__ */ new WeakMap();
da = /* @__PURE__ */ new WeakMap();
Yi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
to = /* @__PURE__ */ new WeakMap();
pa = /* @__PURE__ */ new WeakSet();
qh = function() {
  if ($(this, jt))
    return !1;
  const e = { ...zh(), ...$(this, Me).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return K(this, jt, e), K(this, tt, $(this, Me).reduce((n, s) => {
    const { when: i, options: r } = s;
    return (!i || i(e)) && (n.push(s), r && Object.assign(e, typeof r == "function" ? r.call(this, e) : r)), n;
  }, [])), K(this, wi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
ma = /* @__PURE__ */ new WeakSet();
Gh = function() {
  var be, Fe;
  const { plugins: t } = this;
  let e = $(this, jt);
  const n = {
    flex: /* @__PURE__ */ y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((A) => {
    var lt;
    const Y = (lt = A.beforeLayout) == null ? void 0 : lt.call(this, e);
    Y && (e = { ...e, ...Y }), Object.assign(n, A.footer);
  });
  let s = e.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: A } = this;
    if (A)
      i = A.clientWidth;
    else {
      i = 0, K(this, Le, !0);
      return;
    }
  } else
    s !== "auto" && (i = s ?? 0);
  const { defaultColWidth: r, minColWidth: o, maxColWidth: a } = e, c = [], h = [], l = [], f = {}, d = [], u = [];
  let p = 0, m = 0, w = 0;
  e.cols.forEach((A) => {
    if (A.hidden)
      return;
    const Y = A.type || "", lt = {
      fixed: !1,
      flex: !1,
      width: r,
      minWidth: o,
      maxWidth: a,
      ...A,
      type: Y
    }, I = {
      name: lt.name,
      type: Y,
      setting: lt,
      flex: 0,
      left: 0,
      width: lt.width || 0,
      realWidth: 0,
      visible: !0,
      index: d.length
    };
    t.forEach((wa) => {
      var va, ba;
      const ws = (va = wa.colTypes) == null ? void 0 : va[Y];
      if (ws) {
        const xa = typeof ws == "function" ? ws(I) : ws;
        xa && Object.assign(lt, xa, A);
      }
      (ba = wa.onAddCol) == null || ba.call(this, I);
    });
    const { fixed: Ue, flex: Ve, width: bn = r } = lt;
    I.flex = Ue ? 0 : Ve === !0 ? 1 : typeof Ve == "number" ? Ve : 0, I.width = Jd(bn < 1 ? Math.round(bn * i) : bn, lt.minWidth, lt.maxWidth), I.realWidth = I.realWidth || I.width, Ue === "left" ? (I.left = p, p += I.width, c.push(I)) : Ue === "right" ? (I.left = m, m += I.width, h.push(I)) : (I.left = w, w += I.width, l.push(I)), I.flex && u.push(I), d.push(I), f[I.name] = I;
  });
  const g = p + w + m;
  s === "auto" && (i = g);
  const { data: v, rowKey: x = "id", rowHeight: k } = e, S = [], N = (A, Y, lt) => {
    var Ue, Ve;
    const I = { data: lt ?? { [x]: A }, id: A, index: S.length, top: 0 };
    if (lt || (I.lazy = !0), S.push(I), ((Ue = e.onAddRow) == null ? void 0 : Ue.call(this, I, Y)) !== !1) {
      for (const bn of t)
        if (((Ve = bn.onAddRow) == null ? void 0 : Ve.call(this, I, Y)) === !1)
          return;
    }
  };
  if (typeof v == "number")
    for (let A = 0; A < v; A++)
      N(`${A}`, A);
  else
    Array.isArray(v) && v.forEach((A, Y) => {
      typeof A == "object" ? N(`${A[x] ?? ""}`, Y, A) : N(`${A ?? ""}`, Y);
    });
  let R = S;
  const T = {};
  if (e.onAddRows) {
    const A = e.onAddRows.call(this, R);
    A && (R = A);
  }
  for (const A of t) {
    const Y = (be = A.onAddRows) == null ? void 0 : be.call(this, R);
    Y && (R = Y);
  }
  R.forEach((A, Y) => {
    T[A.id] = A, A.index = Y, A.top = A.index * k;
  });
  const { header: D, footer: C } = e, W = D ? e.headerHeight || k : 0, U = C ? e.footerHeight || k : 0;
  let V = e.height, B = 0;
  const H = R.length * k, j = W + U + H;
  if (typeof V == "function" && (V = V.call(this, j)), V === "auto")
    B = j;
  else if (typeof V == "object")
    B = Math.min(V.max, Math.max(V.min, j));
  else if (V === "100%") {
    const { parent: A } = this;
    if (A)
      B = A.clientHeight;
    else {
      B = 0, K(this, Le, !0);
      return;
    }
  } else
    B = V;
  const gt = B - W - U, ve = i - p - m, St = {
    options: e,
    allRows: S,
    width: i,
    height: B,
    rows: R,
    rowsMap: T,
    rowHeight: k,
    rowsHeight: gt,
    rowsHeightTotal: H,
    header: D,
    footer: C,
    footerGenerators: n,
    headerHeight: W,
    footerHeight: U,
    colsMap: f,
    colsList: d,
    flexCols: u,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: h,
      scrollCols: l,
      fixedLeftWidth: p,
      scrollWidth: ve,
      scrollColsWidth: w,
      fixedRightWidth: m
    }
  }, ee = (Fe = e.onLayout) == null ? void 0 : Fe.call(this, St);
  ee && Object.assign(St, ee), t.forEach((A) => {
    if (A.onLayout) {
      const Y = A.onLayout.call(this, St);
      Y && Object.assign(St, Y);
    }
  }), K(this, Ct, St);
};
eo = /* @__PURE__ */ new WeakSet();
Yh = function() {
  (Bt(this, pa, qh).call(this) || !$(this, Ct)) && Bt(this, ma, Gh).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: e } = this.state;
  const { flexCols: n, colsInfo: { scrollCols: s, scrollWidth: i, scrollColsWidth: r } } = t;
  if (n.length) {
    const g = i - r;
    if (g > 0) {
      const v = n.reduce((k, S) => k + S.flex, 0);
      let x = 0;
      n.forEach((k) => {
        const S = Math.min(g - x, Math.ceil(g * (k.flex / v)));
        k.realWidth = S + k.width, x += k.realWidth;
      });
    } else
      n.forEach((v) => {
        v.realWidth = v.width;
      });
  }
  e = Math.min(Math.max(0, r - i), e);
  let o = 0;
  s.forEach((g) => {
    g.left = o, o += g.realWidth, g.visible = g.left + g.realWidth >= e && g.left <= e + i;
  });
  const { rowsHeightTotal: a, rowsHeight: c, rows: h, rowHeight: l } = t, f = Math.min(Math.max(0, a - c), this.state.scrollTop), d = Math.floor(f / l), u = f + c, p = Math.min(h.length, Math.ceil(u / l)), m = [], { rowDataGetter: w } = this.options;
  for (let g = d; g < p; g++) {
    const v = h[g];
    v.lazy && w && (v.data = w([v.id])[0], v.lazy = !1), m.push(v);
  }
  return t.visibleRows = m, t.scrollTop = f, t.scrollLeft = e, t;
};
ga.addPlugin = Oh;
ga.removePlugin = Hh;
function ll(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(s));
}
const np = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (t) => !!t.colHover,
  events: {
    mouseover(t) {
      var i;
      const { colHover: e } = this.options;
      if (!e)
        return;
      const n = (i = t.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || e === "header" && !n.closest(".dtable-header"))
        return;
      const s = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      ll(this, s);
    },
    mouseleave() {
      ll(this, !1);
    }
  }
}, sp = ze(np, { buildIn: !0 });
function ip(t, e) {
  var o, a;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, r = (c, h) => {
    i && !i.call(this, c) || !!n[c] === h || (h ? n[c] = !0 : delete n[c], s[c] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !Kh.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: c }) => {
    r(c, !!e);
  })) : (Array.isArray(t) || (t = [t]), t.forEach((c) => {
    r(c, e ?? !n[c]);
  })), Object.keys(s).length) {
    const c = (a = this.options.beforeCheckRows) == null ? void 0 : a.call(this, t, s, n);
    c && Object.keys(c).forEach((h) => {
      c[h] ? n[h] = !0 : delete n[h];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var h;
      (h = this.options.onCheckChange) == null || h.call(this, s);
    });
  }
  return s;
}
function rp(t) {
  return this.state.checkedRows[t] ?? !1;
}
function Kh() {
  var n, s;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function op() {
  return Object.keys(this.state.checkedRows);
}
function ap(t) {
  const { checkable: e } = this.options;
  t === void 0 && (t = !e), e !== t && this.setState({ forceCheckable: t });
}
function lp(t) {
  return /* @__PURE__ */ y("div", { class: `checkbox-primary dtable-checkbox${t ? " checked" : ""}`, children: /* @__PURE__ */ y("label", {}) });
}
const cp = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: lp
  },
  when: (t) => t.checkable !== void 0,
  options(t) {
    const { forceCheckable: e } = this.state;
    return e !== void 0 ? t.checkable = e : t.checkable === "auto" && (t.checkable = !!t.cols.some((n) => n.checkbox)), t;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: ip,
    isRowChecked: rp,
    isAllRowChecked: Kh,
    getChecks: op,
    toggleCheckable: ap
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
      const t = this.isAllRowChecked();
      return [
        /* @__PURE__ */ y("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ y("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ y("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(t, { row: e, col: n }) {
    var a;
    const { id: s } = e, { canRowCheckable: i } = this.options;
    if (i && !i.call(this, s))
      return t;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, s) : r) {
      const c = this.isRowChecked(s), h = (a = this.options.checkboxRender) == null ? void 0 : a.call(this, c, s);
      t.unshift(h), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var o;
    const { id: s } = e, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), c = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      t.unshift(c), t.push({ className: "has-checkbox" });
    }
    return t;
  },
  onRenderRow({ props: t, row: e }) {
    if (this.isRowChecked(e.id))
      return { className: M(t.className, "is-checked") };
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!e)
      return;
    const n = e.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), t.stopPropagation());
  },
  onRowClick(t, { rowID: e }) {
    const n = t.target;
    if (!n)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(e);
  }
}, hp = ze(cp);
var Xh = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Xh || {});
function bi(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const o = bi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? bi.call(this, e.parent).level + 1 : 0, e;
}
function up(t) {
  return t !== void 0 ? bi.call(this, t) : this.data.nestedMap;
}
function fp(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !Jh.call(this)), e) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(t) ? t : [t];
    e === void 0 && (e = !n[i[0]]), i.forEach((r) => {
      const o = s.get(r);
      e && (o != null && o.children) ? n[r] = !0 : delete n[r];
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
function Jh() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Zh(t, e = 0, n, s = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const o = t.get(r);
    o && (o.level === s && (o.order = e++), (i = o.children) != null && i.length && (e = Zh(t, e, o.children, s + 1)));
  }
  return e;
}
function Qh(t, e, n, s) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Qh(t, r, n, s);
  }), i;
}
function tu(t, e, n, s, i) {
  var a;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((c) => {
    const h = !!(s[c] !== void 0 ? s[c] : i[c]);
    return n === h;
  })) && (s[e] = n), r.parent && tu(t, r.parent, n, s, i);
}
const dp = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(t, e) {
      const { nestedMap: n } = this.data, s = n.get(t.id), i = n.get(e.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(t, e, n) {
      if (!this.options.checkable || !(t != null && t.length))
        return;
      const s = {};
      return Object.entries(e).forEach(([i, r]) => {
        const o = Qh(this, i, r, s);
        o != null && o.parent && tu(this, o.parent, r, s, n);
      }), s;
    }
  },
  options(t) {
    return t.nested === "auto" && (t.nested = !!t.cols.some((e) => e.nestedToggle)), t;
  },
  when: (t) => !!t.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: up,
    toggleRow: fp,
    isAllCollapsed: Jh,
    getNestedRowInfo: bi
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(t) {
    var i, r;
    const { nestedMap: e } = this.data, n = String((i = t.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = e.get(t.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (r = t.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), e.set(t.id, s), n) {
      let o = e.get(n);
      o || (o = {
        state: "",
        level: 0
      }, e.set(n, o)), o.children || (o.children = []), o.children.push(t.id);
    }
  },
  onAddRows(t) {
    return t = t.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), Zh(this.data.nestedMap), t.sort((e, n) => {
      const s = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = e.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && t.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, e, i)) ?? /* @__PURE__ */ y("a", { role: "button", className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: c = r } = e.setting;
      c && (c === !0 && (c = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ y("div", { className: "dtable-nested-indent", style: { width: c * o.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: s } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ y("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ y("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: M(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = M(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
  },
  onHeaderCellClick(t) {
    const e = t.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(t, { rowID: e }) {
    const n = t.target;
    if (!(!n || !this.getNestedRowInfo(e).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, pp = ze(dp);
function eu(t, e, n, s) {
  if (!t)
    return n;
  typeof t == "function" && (t = t(e)), typeof t == "string" && (t = { url: t });
  const { url: i, ...r } = t;
  return /* @__PURE__ */ y("a", { href: dt(i, e.row.data), ...s, ...r, children: n });
}
function _a(t, e, n) {
  var s;
  if (t != null)
    return n = n ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof t == "function" ? t(n, e) : dt(t, n);
}
function nu(t, e, n, s) {
  var i;
  return n = n ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), t === !1 ? n : (t === !0 && (t = "[yyyy-]MM-dd hh:mm"), typeof t == "function" && (t = t(n, e)), Ar(n, t, s));
}
function su(t, e) {
  const { link: n } = e.col.setting, s = eu(n, e, t[0]);
  return s && (t[0] = s), t;
}
function iu(t, e) {
  const { format: n } = e.col.setting;
  return n && (t[0] = _a(n, e, t[0])), t;
}
function ru(t, e) {
  const { map: n } = e.col.setting;
  return typeof n == "function" ? t[0] = n(t[0], e) : typeof n == "object" && n && (t[0] = n[t[0]] ?? t[0]), t;
}
function zn(t, e, n = "[yyyy-]MM-dd hh:mm") {
  const { format: s = n, invalidDate: i } = e.col.setting;
  return t[0] = nu(s, e, t[0], i), t;
}
function no(t, e, n = !1) {
  const { html: s = n } = e.col.setting;
  if (s === !1)
    return t;
  const i = t[0], r = s === !0 ? i : _a(s, e, i);
  return t[0] = {
    html: r
  }, t;
}
const mp = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t, e) {
        return no(t, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, o = (n - s) / 2, a = n / 2, c = t[0];
        return t[0] = /* @__PURE__ */ y("svg", { width: n, height: n, children: [
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - c) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ y("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(c) })
        ] }), t;
      }
    },
    datetime: {
      onRenderCell(t, e) {
        return zn(t, e, "[yyyy-]MM-dd hh:mm");
      }
    },
    date: {
      onRenderCell(t, e) {
        return zn(t, e, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(t, e) {
        return zn(t, e, "hh:mm");
      }
    }
  },
  onRenderCell(t, e) {
    const { formatDate: n, html: s } = e.col.setting;
    return n && (t = zn(t, e, n)), t = ru(t, e), t = iu(t, e), s ? t = no(t, e) : t = su(t, e), t;
  }
}, gp = ze(mp, { buildIn: !0 });
function cr(t, { row: e, col: n }) {
  const { data: s } = e, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return t;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: c, avatarNameKey: h = `${n.name}Name` } = n.setting, l = (s ? s[h] : i) || t[0], f = {
    size: "xs",
    className: M(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: l,
    code: c ? s ? s[c] : void 0 : i,
    ...a
  };
  if (t[0] = /* @__PURE__ */ y(Hc, { ...f }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, u = typeof d == "function" ? d(n, e) : d;
    t[0] = /* @__PURE__ */ y("button", { type: "button", className: "btn btn-avatar", ...u, children: [
      t[0],
      /* @__PURE__ */ y("div", { children: l })
    ] });
  } else
    n.type === "avatarName" && (t[0] = /* @__PURE__ */ y("div", { className: "flex items-center gap-1", children: [
      t[0],
      /* @__PURE__ */ y("span", { children: l })
    ] }));
  return t;
}
const _p = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: cr
    },
    avatarBtn: {
      onRenderCell: cr
    },
    avatarName: {
      onRenderCell: cr
    }
  }
}, yp = ze(_p, { buildIn: !0 }), wp = {
  name: "sort-type",
  onRenderHeaderCell(t, e) {
    const { col: n } = e, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      t.push(
        /* @__PURE__ */ y("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...c } = r;
        t[0] = /* @__PURE__ */ y("a", { href: dt(a, { ...n.setting, sortType: o }), ...c, children: t[0] });
      }
    }
    return t;
  }
}, vp = ze(wp, { buildIn: !0 }), bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Xh,
  avatar: yp,
  checkable: hp,
  colHover: sp,
  nested: pp,
  renderDatetime: nu,
  renderDatetimeCell: zn,
  renderFormat: _a,
  renderFormatCell: iu,
  renderHtmlCell: no,
  renderLink: eu,
  renderLinkCell: su,
  renderMapCell: ru,
  rich: gp,
  sortType: vp
}, Symbol.toStringTag, { value: "Module" }));
class ys extends at {
}
ys.NAME = "DTable";
ys.Component = ga;
ys.definePlugin = ze;
ys.removePlugin = Hh;
ys.plugins = bp;
var ou = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, xe = (t, e, n) => (ou(t, e, "read from private field"), n ? n.call(t) : e.get(t)), xp = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, cl = (t, e, n, s) => (ou(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), wt;
const hl = "nav-tabs";
class au extends Dt {
  constructor() {
    super(...arguments), xp(this, wt, void 0);
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", "tab");
  }
  showTarget() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && cl(this, wt, _(n)[0]), this.addActive(e.closest(`.${hl}`)[0], e.parent()[0]), xe(this, wt) && (this.addActive(_(xe(this, wt))[0], xe(this, wt)), xe(this, wt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && cl(this, wt, _(n)[0]), xe(this, wt) && (this.addActive(xe(this, wt).parentElement, xe(this, wt)), this.addActive(e.closest(`.${hl}`)[0], e.parent()[0]));
  }
  addActive(e, n) {
    const s = e.children;
    Array.from(s).forEach((r) => {
      r.classList.remove("active"), r.classList.contains("fade") && r.classList.remove("in");
    }), n.classList.add("active"), n.classList.contains("fade") && this.transition(n).then(function() {
      n.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(e) {
    return new Promise(function(n) {
      setTimeout(() => {
        e.classList.add("in"), n();
      }, 100);
    });
  }
}
wt = /* @__PURE__ */ new WeakMap();
au.NAME = "NavTabs";
_(document).on("click", '[data-toggle="tab"],[data-tab]', (t) => {
  t.preventDefault(), au.ensure(t.target).showTarget();
});
_(() => {
  _(".disabled, [disabled]").on("click", (t) => {
    t.preventDefault(), t.stopImmediatePropagation();
  });
});
export {
  _ as $,
  cc as ActionMenu,
  fc as ActionMenuNested,
  Yd as AjaxForm,
  Bc as Avatar,
  zc as BtnGroup,
  Dt as Component,
  at as ComponentFromReact,
  Tt as ContextMenu,
  wo as CustomRender,
  ys as DTable,
  Dh as Dashboard,
  de as Dropdown,
  Oc as EventBus,
  af as HElement,
  ql as HtmlContent,
  dc as Menu,
  Ao as Messager,
  Do as Modal,
  we as ModalBase,
  Gc as ModalTrigger,
  Kc as Nav,
  au as NavTabs,
  Xc as Pager,
  rh as Picker,
  Pc as ProgressCircle,
  G as ReactComponent,
  Ic as Switch,
  zt as TIME_DAY,
  oh as Toolbar,
  Nt as Tooltip,
  Mh as ajaxSubmit,
  tl as calculateTimestamp,
  _ as cash,
  M as classes,
  Sp as convertBytes,
  pt as createDate,
  ff as createPortal,
  Xt as createRef,
  Cp as dom,
  $p as formatBytes,
  Ar as formatDate,
  Up as formatDateSpan,
  dt as formatString,
  Rl as getClassList,
  Vp as getTimeBeforeDesc,
  ot as h,
  Ep as hh,
  of as htm,
  Kt as i18n,
  Fp as isDBY,
  Qi as isObject,
  gs as isSameDay,
  md as isSameMonth,
  Op as isSameWeek,
  Rr as isSameYear,
  Hp as isToday,
  zp as isTomorrow,
  rt as isValidElement,
  Bp as isYesterday,
  ur as mergeDeep,
  Ka as nativeEvents,
  es as render,
  cf as renderCustomResult,
  dr as renderIcon,
  td as store,
  Al as storeData,
  tf as takeData
};
