var Yi = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var E = (t, e, n) => (Yi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), L = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, O = (t, e, n, s) => (Yi(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var st = (t, e, n) => (Yi(t, e, "access private method"), n);
const Gt = document, Ys = window, hl = Gt.documentElement, Oe = Gt.createElement.bind(Gt), ul = Oe("div"), Ki = Oe("table"), lu = Oe("tbody"), xa = Oe("tr"), { isArray: Ti, prototype: fl } = Array, { concat: cu, filter: no, indexOf: dl, map: pl, push: hu, slice: ml, some: so, splice: uu } = fl, fu = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, du = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, pu = /<.+>/, mu = /^\w+$/;
function io(t, e) {
  const n = gu(e);
  return !t || !n && !We(e) && !X(e) ? [] : !n && du.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && mu.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class Ri {
  constructor(e, n) {
    if (!e)
      return;
    if (cr(e))
      return e;
    let s = e;
    if (nt(e)) {
      const i = n || Gt;
      if (s = fu.test(e) && We(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : pu.test(e) ? yl(e) : cr(i) ? i.find(e) : nt(i) ? _(i).find(e) : io(e, i), !s)
        return;
    } else if (He(e))
      return this.ready(e);
    (s.nodeType || s === Ys) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(e, n) {
    return new Ri(e, n);
  }
}
const b = Ri.prototype, _ = b.init;
_.fn = _.prototype = b;
b.length = 0;
b.splice = uu;
typeof Symbol == "function" && (b[Symbol.iterator] = fl[Symbol.iterator]);
function cr(t) {
  return t instanceof Ri;
}
function gn(t) {
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
function ut(t) {
  return t === void 0;
}
function Zn(t) {
  return t === null;
}
function gl(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function ro(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
_.isWindow = gn;
_.isFunction = He;
_.isArray = Ti;
_.isNumeric = gl;
_.isPlainObject = ro;
function Z(t, e, n) {
  if (n) {
    let s = t.length;
    for (; s--; )
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  } else if (ro(t)) {
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
function Ks(...t) {
  const e = yu(t[0]) ? t.shift() : !1, n = t.shift(), s = t.length;
  if (!n)
    return {};
  if (!s)
    return Ks(e, _, n);
  for (let i = 0; i < s; i++) {
    const r = t[i];
    for (const o in r)
      e && (Ti(r[o]) || ro(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Ks(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
_.extend = Ks;
b.extend = function(t) {
  return Ks(b, t);
};
const wu = /\S+/g;
function Ai(t) {
  return nt(t) ? t.match(wu) || [] : [];
}
b.toggleClass = function(t, e) {
  const n = Ai(t), s = !ut(e);
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
  const e = Ai(t);
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
        return Zn(n) ? void 0 : n;
      }
      return ut(e) ? this : Zn(e) ? this.removeAttr(t) : this.each((n, s) => {
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
  return !!t && so.call(this, (e) => X(e) && e.classList.contains(t));
};
b.get = function(t) {
  return ut(t) ? ml.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
  return ut(t) ? this.get().map((e) => X(e) || _u(e) ? e.textContent : "").join("") : this.each((e, n) => {
    X(n) && (n.textContent = t);
  });
}
b.text = bu;
function Yt(t, e, n) {
  if (!X(t))
    return;
  const s = Ys.getComputedStyle(t, null);
  return n ? s.getPropertyValue(e) || void 0 : s[e] || t.style[e];
}
function Mt(t, e) {
  return parseInt(Yt(t, e), 10) || 0;
}
function ka(t, e) {
  return Mt(t, `border${e ? "Left" : "Top"}Width`) + Mt(t, `padding${e ? "Left" : "Top"}`) + Mt(t, `padding${e ? "Right" : "Bottom"}`) + Mt(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Xi = {};
function xu(t) {
  if (Xi[t])
    return Xi[t];
  const e = Oe(t);
  Gt.body.insertBefore(e, null);
  const n = Yt(e, "display");
  return Gt.body.removeChild(e), Xi[t] = n !== "none" ? n : "block";
}
function Sa(t) {
  return Yt(t, "display") === "none";
}
function _l(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function Ni(t) {
  return nt(t) ? (e, n) => _l(n, t) : He(t) ? t : cr(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
b.filter = function(t) {
  const e = Ni(t);
  return _(no.call(this, (n, s) => e.call(n, s, n)));
};
function _e(t, e) {
  return e ? t.filter(e) : t;
}
b.detach = function(t) {
  return _e(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const ku = /^\s*<(\w+)[^>]*>/, Su = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, $a = {
  "*": ul,
  tr: lu,
  td: xa,
  th: xa,
  thead: Ki,
  tbody: Ki,
  tfoot: Ki
};
function yl(t) {
  if (!nt(t))
    return [];
  if (Su.test(t))
    return [Oe(RegExp.$1)];
  const e = ku.test(t) && RegExp.$1, n = $a[e] || $a["*"];
  return n.innerHTML = t, _(n.childNodes).detach().get();
}
_.parseHTML = yl;
b.has = function(t) {
  const e = nt(t) ? (n, s) => io(t, s).length : (n, s) => s.contains(t);
  return this.filter(e);
};
b.not = function(t) {
  const e = Ni(t);
  return this.filter((n, s) => (!nt(t) || X(s)) && !e.call(s, n, s));
};
function te(t, e, n, s) {
  const i = [], r = He(e), o = s && Ni(s);
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
function wl(t) {
  return t.multiple && t.options ? te(no.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function $u(t) {
  return arguments.length ? this.each((e, n) => {
    const s = n.multiple && n.options;
    if (s || El.test(n.type)) {
      const i = Ti(t) ? pl.call(t, String) : Zn(t) ? [] : [String(t)];
      s ? Z(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ut(t) || Zn(t) ? "" : t;
  }) : this[0] && wl(this[0]);
}
b.val = $u;
b.is = function(t) {
  const e = Ni(t);
  return so.call(this, (n, s) => e.call(n, s, n));
};
_.guid = 1;
function Wt(t) {
  return t.length > 1 ? no.call(t, (e, n, s) => dl.call(s, e) === n) : t;
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
  return dl.call(n, e);
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
  return _(Wt(te(this, (e) => io(t, e))));
};
const Cu = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Eu = /^$|^module$|\/(java|ecma)script/i, Mu = ["type", "src", "nonce", "noModule"];
function Tu(t, e) {
  const n = _(t);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Eu.test(i.type) && hl.contains(i)) {
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
  if (ut(t))
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
  return _(cu.apply([], pl.call(this, (e, n) => t.call(e, n, e))));
};
b.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
b.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Yt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || hl;
  });
};
b.slice = function(t, e) {
  return _(ml.call(this, t, e));
};
const Nu = /-([a-z])/g;
function oo(t) {
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
    top: e.top + Ys.pageYOffset,
    left: e.left + Ys.pageXOffset
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
const vl = {
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
      return t = vl[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, s) => {
        s[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
b.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[vl[t] || t];
  });
};
const Lu = /^--/;
function ao(t) {
  return Lu.test(t);
}
const Ji = {}, { style: Wu } = ul, Du = ["webkit", "moz", "ms"];
function Pu(t, e = ao(t)) {
  if (e)
    return t;
  if (!Ji[t]) {
    const n = oo(t), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Du.join(`${s} `)}${s}`.split(" ");
    Z(i, (r, o) => {
      if (o in Wu)
        return Ji[t] = o, !1;
    });
  }
  return Ji[t];
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
function bl(t, e, n = ao(t)) {
  return !n && !Iu[t] && gl(e) ? `${e}px` : e;
}
function Ou(t, e) {
  if (nt(t)) {
    const n = ao(t);
    return t = Pu(t, n), arguments.length < 2 ? this[0] && Yt(this[0], t, n) : t ? (e = bl(t, e, n), this.each((s, i) => {
      X(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
b.css = Ou;
function xl(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Hu = /^\s+|\s+$/;
function Ca(t, e) {
  const n = t.dataset[e] || t.dataset[oo(e)];
  return Hu.test(n) ? n : xl(JSON.parse, n);
}
function Bu(t, e, n) {
  n = xl(JSON.stringify, n), t.dataset[oo(e)] = n;
}
function zu(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Ca(this[0], s);
    return n;
  }
  if (nt(t))
    return arguments.length < 2 ? this[0] && Ca(this[0], t) : ut(e) ? this : this.each((n, s) => {
      Bu(s, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
b.data = zu;
function kl(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Z([!0, !1], (t, e) => {
  Z(["Width", "Height"], (n, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    b[i] = function(r) {
      if (this[0])
        return gn(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : We(this[0]) ? kl(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (r && e ? Mt(this[0], `margin${n ? "Top" : "Left"}`) + Mt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  b[n] = function(s) {
    if (!this[0])
      return ut(s) ? void 0 : this;
    if (!arguments.length)
      return gn(this[0]) ? this[0].document.documentElement[`client${e}`] : We(this[0]) ? kl(this[0], e) : this[0].getBoundingClientRect()[n] - ka(this[0], !t);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Yt(o, "boxSizing");
      o.style[n] = bl(n, i + (a === "border-box" ? ka(o, !t) : 0));
    });
  };
});
const Ea = "___cd";
b.toggle = function(t) {
  return this.each((e, n) => {
    if (!X(n))
      return;
    const s = Sa(n);
    (ut(t) ? s : t) ? (n.style.display = n[Ea] || "", Sa(n) && (n.style.display = xu(n.tagName))) : s || (n[Ea] = Yt(n, "display"), n.style.display = "none");
  });
};
b.hide = function() {
  return this.toggle(!1);
};
b.show = function() {
  return this.toggle(!0);
};
const Ma = "___ce", lo = ".", co = { focus: "focusin", blur: "focusout" }, Sl = { mouseenter: "mouseover", mouseleave: "mouseout" }, Fu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ho(t) {
  return Sl[t] || co[t] || t;
}
function uo(t) {
  const e = t.split(lo);
  return [e[0], e.slice(1).sort()];
}
b.trigger = function(t, e) {
  if (nt(t)) {
    const [s, i] = uo(t), r = ho(s);
    if (!r)
      return this;
    const o = Fu.test(r) ? "MouseEvents" : "HTMLEvents";
    t = Gt.createEvent(o), t.initEvent(r, !0, !0), t.namespace = i.join(lo), t.___ot = s;
  }
  t.___td = e;
  const n = t.___ot in co;
  return this.each((s, i) => {
    n && He(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function $l(t) {
  return t[Ma] = t[Ma] || {};
}
function Uu(t, e, n, s, i) {
  const r = $l(t);
  r[e] = r[e] || [], r[e].push([n, s, i]), t.addEventListener(e, i);
}
function Cl(t, e) {
  return !e || !so.call(e, (n) => t.indexOf(n) < 0);
}
function Xs(t, e, n, s, i) {
  const r = $l(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, a, c]) => {
      if (i && c.guid !== i.guid || !Cl(o, n) || s && s !== a)
        return !0;
      t.removeEventListener(e, c);
    }));
  else
    for (e in r)
      Xs(t, e, n, s, i);
}
b.off = function(t, e, n) {
  if (ut(t))
    this.each((s, i) => {
      !X(i) && !We(i) && !gn(i) || Xs(i);
    });
  else if (nt(t))
    He(e) && (n = e, e = ""), Z(Ai(t), (s, i) => {
      const [r, o] = uo(i), a = ho(r);
      this.each((c, h) => {
        !X(h) && !We(h) && !gn(h) || Xs(h, a, o, e, n);
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
function ju(t, e, n, s, i) {
  if (!nt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return nt(e) || (ut(e) || Zn(e) ? e = "" : ut(n) ? (n = e, e = "") : (s = n, n = e, e = "")), He(s) || (s = n, n = void 0), s ? (Z(Ai(t), (r, o) => {
    const [a, c] = uo(o), h = ho(a), l = a in Sl, f = a in co;
    h && this.each((d, u) => {
      if (!X(u) && !We(u) && !gn(u))
        return;
      const p = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Cl(c, m.namespace.split(lo)) || !e && (f && (m.target !== u || m.___ot === h) || l && m.relatedTarget && u.contains(m.relatedTarget)))
          return;
        let w = u;
        if (e) {
          let v = m.target;
          for (; !_l(v, e); )
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
        i && Xs(u, h, c, e, p), g === !1 && (m.preventDefault(), m.stopPropagation());
      };
      p.guid = s.guid = s.guid || _.guid++, Uu(u, h, c, e, p);
    });
  }), this) : this;
}
b.on = ju;
function Vu(t, e, n, s) {
  return this.on(t, e, n, s, !0);
}
b.one = Vu;
const qu = /\r?\n/g;
function Gu(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(qu, `\r
`))}`;
}
const Yu = /file|reset|submit|button|image/i, El = /radio|checkbox/i;
b.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Z(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Yu.test(i.type) || El.test(i.type) && !i.checked)
        return;
      const r = wl(i);
      if (!ut(r)) {
        const o = Ti(r) ? r : [r];
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
function Zi(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function hr(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Zi(t) && Zi(n))
    for (const s in n)
      Zi(n[s]) ? (t[s] || Object.assign(t, { [s]: {} }), hr(t[s], n[s])) : Object.assign(t, { [s]: n[s] });
  return hr(t, ...e);
}
function ft(t, ...e) {
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
var fo = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(fo || {});
function Sp(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / fo[n]).toFixed(e) + n);
}
const $p = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const s = n[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * fo[s];
};
let po = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), re;
function Ju() {
  return po;
}
function Zu(t) {
  po = t.toLowerCase();
}
function Ml(t, e) {
  re || (re = {}), typeof t == "string" && (t = { [t]: e ?? {} }), hr(re, t);
}
function Kt(t, e, n, s, i, r) {
  Array.isArray(t) ? re && t.unshift(re) : t = re ? [re, t] : [t], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || po;
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
  return a === void 0 ? s : n ? ft(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Qu(t, e, n, s) {
  return Kt(void 0, t, e, n, s);
}
Kt.addLang = Ml;
Kt.getLang = Qu;
Kt.getCode = Ju;
Kt.setCode = Zu;
Ml({
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
function Tl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? e[o][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Tl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const M = (...t) => Tl(...t).reduce((e, [n, s]) => (s && e.push(n), e), []).join(" ");
_.classes = M;
_.fn.setClass = function(t, ...e) {
  return this.each((n, s) => {
    const i = _(s);
    t === !0 ? i.attr("class", M(i.attr("class"), ...e)) : i.addClass(M(t, ...e));
  });
};
const Cn = /* @__PURE__ */ new WeakMap();
function Rl(t, e, n) {
  const s = Cn.has(t), i = s ? Cn.get(t) : {};
  typeof e == "string" ? i[e] = n : e === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, e), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && t instanceof Element && Object.assign(i, _(t).dataset(), i), Cn.set(t, i)) : Cn.delete(t);
}
function tf(t, e) {
  let n = Cn.get(t);
  return !n && t instanceof Element && (n = _(t).dataset()), e === void 0 ? n || {} : n == null ? void 0 : n[e];
}
_.fn.dataset = _.fn.data;
_.fn.data = function(...t) {
  if (!this.length)
    return;
  const [e, n] = t;
  return !t.length || t.length === 1 && typeof e == "string" ? tf(this[0], e) : this.each((s, i) => Rl(i, e, n));
};
_.fn.removeData = function(t = null) {
  return this.each((e, n) => Rl(n, t));
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
function Al(t, e) {
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
    Al(n, t);
  });
};
function mo(t, e) {
  const n = _(t);
  if (e !== void 0) {
    n.append(`<script>${e}<\/script>`);
    return;
  }
  n.find("script").each((s, i) => {
    mo(n, i.innerHTML), i.remove();
  });
}
_.fn.runJS = function(t) {
  return this.each((e, n) => {
    mo(n, t);
  });
};
const Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Al,
  runJS: mo
}, Symbol.toStringTag, { value: "Module" }));
var Li, z, Nl, it, Ce, Ta, Ll, ur, Js = {}, Wl = [], ef = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, go = Array.isArray;
function he(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Dl(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function rt(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Li.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return Ms(t, o, s, i, null);
}
function Ms(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Nl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function Xt() {
  return { current: null };
}
function Wi(t) {
  return t.children;
}
function G(t, e) {
  this.props = t, this.context = e;
}
function Qn(t, e) {
  if (e == null)
    return t.__ ? Qn(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Qn(t) : null;
}
function Pl(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Pl(t);
  }
}
function Ra(t) {
  (!t.__d && (t.__d = !0) && Ce.push(t) && !Zs.__r++ || Ta !== z.debounceRendering) && ((Ta = z.debounceRendering) || Ll)(Zs);
}
function Zs() {
  var t, e, n, s, i, r, o, a;
  for (Ce.sort(ur); t = Ce.shift(); )
    t.__d && (e = Ce.length, s = void 0, i = void 0, o = (r = (n = t).__v).__e, (a = n.__P) && (s = [], (i = he({}, r)).__v = r.__v + 1, _o(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Qn(r), r.__h), zl(s, r), r.__e != o && Pl(r)), Ce.length > e && Ce.sort(ur));
  Zs.__r = 0;
}
function Il(t, e, n, s, i, r, o, a, c, h) {
  var l, f, d, u, p, m, w, g = s && s.__k || Wl, v = g.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if ((u = n.__k[l] = (u = e[l]) == null || typeof u == "boolean" || typeof u == "function" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Ms(null, u, null, null, u) : go(u) ? Ms(Wi, { children: u }, null, null, null) : u.__b > 0 ? Ms(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
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
      _o(t, u, d = d || Js, i, r, o, a, c, h), p = u.__e, (f = u.ref) && d.ref != f && (w || (w = []), d.ref && w.push(d.ref, null, u), w.push(f, u.__c || p, u)), p != null ? (m == null && (m = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = Ol(u, c, t) : c = Hl(t, u, d, g, p, c), typeof n.type == "function" && (n.__d = c)) : c && d.__e == c && c.parentNode != t && (c = Qn(d));
    }
  for (n.__e = m, l = v; l--; )
    g[l] != null && (typeof n.type == "function" && g[l].__e != null && g[l].__e == n.__d && (n.__d = Bl(s).nextSibling), Ul(g[l], g[l]));
  if (w)
    for (l = 0; l < w.length; l++)
      Fl(w[l], w[++l], w[++l]);
}
function Ol(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? Ol(s, e, n) : Hl(n, s, s, i, s.__e, e));
  return e;
}
function Hl(t, e, n, s, i, r) {
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
function Bl(t) {
  var e, n, s;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (s = Bl(n)))
        return s;
  }
  return null;
}
function nf(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Qs(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Qs(t, r, e[r], n[r], s);
}
function Aa(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || ef.test(e) ? n : n + "px";
}
function Qs(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || Aa(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || Aa(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? La : Na, r) : t.removeEventListener(e, r ? La : Na, r);
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
function Na(t) {
  return this.l[t.type + !1](z.event ? z.event(t) : t);
}
function La(t) {
  return this.l[t.type + !0](z.event ? z.event(t) : t);
}
function _o(t, e, n, s, i, r, o, a, c) {
  var h, l, f, d, u, p, m, w, g, v, x, k, $, N, R, T = e.type;
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
        if (l.context = v, l.props = w, l.__P = t, k = z.__r, $ = 0, "prototype" in T && T.prototype.render) {
          for (l.state = l.__s, l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++$ < 25);
        l.state = l.__s, l.getChildContext != null && (s = he(he({}, s), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, u)), Il(t, go(R = h != null && h.type === Wi && h.key == null ? h.props.children : h) ? R : [R], e, n, s, i, r, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), m && (l.__E = l.__ = null), l.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = sf(n.__e, e, n, s, i, r, o, c);
    (h = z.diffed) && h(e);
  } catch (D) {
    e.__v = null, (c || r != null) && (e.__e = a, e.__h = !!c, r[r.indexOf(a)] = null), z.__e(D, e, n);
  }
}
function zl(t, e) {
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
    if (r = r && Li.call(t.childNodes), h = (f = n.props || Js).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (nf(t, d, f, i, a), l)
      e.__k = [];
    else if (Il(t, go(p = e.props.children) ? p : [p], e, n, s, i && u !== "foreignObject", r, o, r ? r[0] : n.__k && Qn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && Dl(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || u === "progress" && !p || u === "option" && p !== f.value) && Qs(t, "value", p, f.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Qs(t, "checked", p, f.checked, !1));
  }
  return t;
}
function Fl(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    z.__e(s, n);
  }
}
function Ul(t, e, n) {
  var s, i;
  if (z.unmount && z.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Fl(s, null, e)), (s = t.__c) != null) {
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
      s[i] && Ul(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || Dl(t.__e), t.__ = t.__e = t.__d = void 0;
}
function rf(t, e, n) {
  return this.constructor(t, n);
}
function ts(t, e, n) {
  var s, i, r;
  z.__ && z.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, r = [], _o(e, t = (!s && n || e).__k = rt(Wi, null, [t]), i || Js, Js, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? Li.call(e.childNodes) : null, r, !s && n ? n : i ? i.__e : e.firstChild, s), zl(r, t);
}
Li = Wl.slice, z = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Nl = 0, it = function(t) {
  return t != null && t.constructor === void 0;
}, G.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = he({}, this.state), typeof t == "function" && (t = t(he({}, n), this.props)), t && he(n, t), t != null && this.__v && (e && this._sb.push(e), Ra(this));
}, G.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ra(this));
}, G.prototype.render = Wi, Ce = [], Ll = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ur = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Zs.__r = 0;
var jl = function(t, e, n, s) {
  var i;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var o = e[r++], a = e[r] ? (e[0] |= o ? 1 : 2, n[e[r++]]) : e[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[e[++r]] = a : o === 6 ? s[1][e[++r]] += a + "" : o ? (i = t.apply(a, jl(t, a, n, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = i)) : s.push(a);
  }
  return s;
}, Wa = /* @__PURE__ */ new Map();
function of(t) {
  var e = Wa.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Wa.set(this, e)), (e = jl(this, e.get(t) || (e.set(t, e = function(n) {
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
const Ep = of.bind(rt);
function af(t) {
  const { tagName: e = "div", class: n, className: s, style: i, children: r, attrs: o, ...a } = t;
  return rt(e, { class: M(n, s), style: i, ...a, ...o }, r);
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
var os;
class Vl extends G {
  constructor() {
    super(...arguments);
    L(this, os, Xt());
  }
  componentDidMount() {
    this.props.executeScript && _(E(this, os).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ y(af, { ref: E(this, os), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
os = new WeakMap();
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
      g != null && (typeof g == "object" && !it(g) && ("html" in g || "__html" in g || "className" in g || "style" in g || "attrs" in g || "children" in g) ? g.html ? u.push(
        /* @__PURE__ */ y("div", { className: M(g.className), style: g.style, dangerouslySetInnerHTML: { __html: g.html }, ...g.attrs ?? {} })
      ) : g.__html ? p.push(g.__html) : (g.style && Object.assign(d, g.style), g.className && f.push(g.className), g.children && u.push(g.children), g.attrs && Object.assign(l, g.attrs)) : u.push(g));
    });
  }), p.length && Object.assign(l, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: M(f),
    style: d,
    ...l
  }, u];
}
function yo({
  tag: t = "div",
  ...e
}) {
  const [n, s] = cf(e);
  return rt(t, n, ...s);
}
function fr(t) {
  if (it(t))
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
    ts(null, e._temp), e._temp = null, e._container = null;
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
  }), ts(
    rt(hf, { context: e.context }, t._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function ff(t, e) {
  const n = rt(uf, { _vnode: t, _container: e });
  return n.containerInfo = e, n;
}
var ql = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, bn = (t, e, n) => (ql(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Qi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, xn = (t, e, n, s) => (ql(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), ke, En, Ts;
const Gl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    Qi(this, ke, void 0), Qi(this, En, void 0), Qi(this, Ts, void 0);
    const { KEY: n, DATA_KEY: s, DEFAULT: i } = this.constructor, r = _(t);
    if (r.data(n))
      throw new Error("[ZUI] The component has been initialized on element.");
    const o = _.guid++;
    xn(this, Ts, o), r.data(n, this).attr(s, `${o}`), xn(this, En, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), xn(this, ke, { ...i, ...r.dataset() }), this.setOptions(e), this.init(), requestAnimationFrame(() => {
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
    return bn(this, En);
  }
  /**
   * Get the component options.
   */
  get options() {
    return bn(this, ke);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return bn(this, Ts);
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
    this.$element.off(t).removeData(e).attr(n, null), xn(this, ke, void 0), xn(this, En, void 0), this.emit("destroyed");
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && _.extend(bn(this, ke), t), bn(this, ke);
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
let Dt = Gl;
ke = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
Ts = /* @__PURE__ */ new WeakMap();
Dt.DEFAULT = {};
Dt.NAME = Gl.name;
class ot extends Dt {
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
    ts(
      rt(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
var wo, q, Yl, Kl, zn, Da, Xl = {}, Jl = [], df = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ue(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function Zl(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function wn(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? wo.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return Rs(t, o, s, i, null);
}
function Rs(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Yl };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function pf() {
  return { current: null };
}
function vo(t) {
  return t.children;
}
function Fn(t, e) {
  this.props = t, this.context = e;
}
function es(t, e) {
  if (e == null)
    return t.__ ? es(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? es(t) : null;
}
function Ql(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ql(t);
  }
}
function Pa(t) {
  (!t.__d && (t.__d = !0) && zn.push(t) && !ti.__r++ || Da !== q.debounceRendering) && ((Da = q.debounceRendering) || setTimeout)(ti);
}
function ti() {
  for (var t; ti.__r = zn.length; )
    t = zn.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), zn = [], t.some(function(e) {
      var n, s, i, r, o, a;
      e.__d && (o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ue({}, r)).__v = r.__v + 1, sc(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? es(r), r.__h), gf(s, r), r.__e != o && Ql(r)));
    });
}
function tc(t, e, n, s, i, r, o, a, c, h) {
  var l, f, d, u, p, m, w, g = s && s.__k || Jl, v = g.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if ((u = n.__k[l] = (u = e[l]) == null || typeof u == "boolean" ? null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? Rs(null, u, null, null, u) : Array.isArray(u) ? Rs(vo, { children: u }, null, null, null) : u.__b > 0 ? Rs(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v) : u) != null) {
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
      sc(t, u, d = d || Xl, i, r, o, a, c, h), p = u.__e, (f = u.ref) && d.ref != f && (w || (w = []), d.ref && w.push(d.ref, null, u), w.push(f, u.__c || p, u)), p != null ? (m == null && (m = p), typeof u.type == "function" && u.__k === d.__k ? u.__d = c = ec(u, c, t) : c = nc(t, u, d, g, p, c), typeof n.type == "function" && (n.__d = c)) : c && d.__e == c && c.parentNode != t && (c = es(d));
    }
  for (n.__e = m, l = v; l--; )
    g[l] != null && rc(g[l], g[l]);
  if (w)
    for (l = 0; l < w.length; l++)
      ic(w[l], w[++l], w[++l]);
}
function ec(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? ec(s, e, n) : nc(n, s, s, i, s.__e, e));
  return e;
}
function nc(t, e, n, s, i, r) {
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
    r === "children" || r === "key" || r in e || ei(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || ei(t, r, e[r], n[r], s);
}
function Ia(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || df.test(e) ? n : n + "px";
}
function ei(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || Ia(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || Ia(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? Ha : Oa, r) : t.removeEventListener(e, r ? Ha : Oa, r);
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
function Oa(t) {
  this.l[t.type + !1](q.event ? q.event(t) : t);
}
function Ha(t) {
  this.l[t.type + !0](q.event ? q.event(t) : t);
}
function sc(t, e, n, s, i, r, o, a, c) {
  var h, l, f, d, u, p, m, w, g, v, x, k, $, N, R, T = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = q.__b) && h(e);
  try {
    t:
      if (typeof T == "function") {
        if (w = e.props, g = (h = T.contextType) && s[h.__c], v = h ? g ? g.props.value : h.__ : s, n.__c ? m = (l = e.__c = n.__c).__ = l.__E : ("prototype" in T && T.prototype.render ? e.__c = l = new T(w, v) : (e.__c = l = new Fn(w, v), l.constructor = T, l.render = yf), g && g.sub(l), l.props = w, l.state || (l.state = {}), l.context = v, l.__n = s, f = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), T.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ue({}, l.__s)), ue(l.__s, T.getDerivedStateFromProps(w, l.__s))), d = l.props, u = l.state, f)
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
        if (l.context = v, l.props = w, l.__v = e, l.__P = t, k = q.__r, $ = 0, "prototype" in T && T.prototype.render) {
          for (l.state = l.__s, l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++$ < 25);
        l.state = l.__s, l.getChildContext != null && (s = ue(ue({}, s), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, u)), R = h != null && h.type === vo && h.key == null ? h.props.children : h, tc(t, Array.isArray(R) ? R : [R], e, n, s, i, r, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), m && (l.__E = l.__ = null), l.__e = !1;
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
    if (r = r && wo.call(t.childNodes), h = (f = n.props || Xl).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (f = {}, p = 0; p < t.attributes.length; p++)
          f[t.attributes[p].name] = t.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (mf(t, d, f, i, a), l)
      e.__k = [];
    else if (p = e.props.children, tc(t, Array.isArray(p) ? p : [p], e, n, s, i && u !== "foreignObject", r, o, r ? r[0] : n.__k && es(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && Zl(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || u === "progress" && !p || u === "option" && p !== f.value) && ei(t, "value", p, f.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && ei(t, "checked", p, f.checked, !1));
  }
  return t;
}
function ic(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    q.__e(s, n);
  }
}
function rc(t, e, n) {
  var s, i;
  if (q.unmount && q.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || ic(s, null, e)), (s = t.__c) != null) {
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
      s[i] && rc(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || Zl(t.__e), t.__ = t.__e = t.__d = void 0;
}
function yf(t, e, n) {
  return this.constructor(t, n);
}
wo = Jl.slice, q = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Yl = 0, Kl = function(t) {
  return t != null && t.constructor === void 0;
}, Fn.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ue({}, this.state), typeof t == "function" && (t = t(ue({}, n), this.props)), t && ue(n, t), t != null && this.__v && (e && this._sb.push(e), Pa(this));
}, Fn.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Pa(this));
}, Fn.prototype.render = vo, zn = [], ti.__r = 0;
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
  return wn(t, {
    className: M(e),
    style: s,
    ...i
  }, n);
}
function oc({
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
    fr(c),
    /* @__PURE__ */ vt("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    fr(f)
  ];
  return wn(e, {
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
  return wn(t, {
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
  return wn(t, {
    className: M(e),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function kf({ type: t, ...e }) {
  return /* @__PURE__ */ vt(yo, { ...e });
}
function ac({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return wn(t, {
    className: M(e),
    style: s,
    ...i
  }, n);
}
const dr = class extends Fn {
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
        const p = i.call(this, s, wn);
        if (Kl(p))
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
    const u = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || dr.ItemComponents[r] : o;
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
let Be = dr;
Be.ItemComponents = {
  divider: vf,
  item: oc,
  heading: bf,
  space: xf,
  custom: kf,
  basic: ac
};
Be.ROOT_TAG = "menu";
Be.NAME = "action-menu";
class lc extends ot {
}
lc.NAME = "ActionMenu";
lc.Component = Be;
function cc({
  ...t
}) {
  return /* @__PURE__ */ vt(oc, { ...t });
}
var hc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, _t = (t, e, n) => (hc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tr = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Sf = (t, e, n, s) => (hc(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), As, It, Mn;
let bo = class extends Be {
  constructor(e) {
    super(e), tr(this, As, /* @__PURE__ */ new Set()), tr(this, It, void 0), tr(this, Mn, (n, s, i) => {
      this.toggleNestedMenu(n, s), i.preventDefault();
    }), Sf(this, It, e.nestedShow === void 0), _t(this, It) && (this.state = { nestedShow: e.defaultNestedShow ?? {} });
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
    _t(this, As).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ], i.component = cc), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: _t(this, Mn).bind(this, r, !0),
        onMouseLeave: _t(this, Mn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: c } = i;
      i.onClick = (h) => {
        _t(this, Mn).call(this, r, void 0, h), c == null || c(h);
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
    if (typeof i == "boolean" && (i === !0 ? i = [..._t(this, As).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
As = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
bo.ItemComponents = {
  item: cc
};
class uc extends ot {
}
uc.NAME = "ActionMenuNested";
uc.Component = bo;
let Di = class extends bo {
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
Di.NAME = "menu";
class fc extends ot {
}
fc.NAME = "Menu";
fc.Component = Di;
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
    } = this.props, $ = e || (a ? "a" : "button"), N = m == null || typeof m == "string" && !m.length || f && !u, R = g && N && !p && !w && !o && !f;
    return rt(
      $,
      {
        className: M("btn", n, r, {
          "btn-caret": R,
          disabled: h || f,
          active: l,
          loading: f,
          square: v === void 0 ? !R && !o && N : v
        }, i ? `size-${i}` : ""),
        title: x,
        [$ === "a" ? "href" : "data-url"]: a,
        [$ === "a" ? "target" : "data-target"]: c,
        type: $ === "button" ? s : void 0,
        ...k
      },
      f ? /* @__PURE__ */ y("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : fr(p),
      N ? null : /* @__PURE__ */ y("span", { className: "text", children: f ? u : m }),
      f ? null : o,
      f ? null : typeof w == "string" ? /* @__PURE__ */ y("i", { class: `icon ${w}` }) : w,
      f ? null : g ? /* @__PURE__ */ y("span", { className: typeof g == "string" ? `caret-${g}` : "caret" }) : null
    );
  }
}
function $f({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Jt, { type: n, ...s });
}
function ds(t) {
  return t.split("-")[1];
}
function xo(t) {
  return t === "y" ? "height" : "width";
}
function Re(t) {
  return t.split("-")[0];
}
function ps(t) {
  return ["top", "bottom"].includes(Re(t)) ? "x" : "y";
}
function Ba(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = ps(e), c = xo(a), h = s[c] / 2 - i[c] / 2, l = a === "x";
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
  switch (ds(e)) {
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
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: l, y: f } = Ba(h, s, c), d = s, u = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: w, fn: g } = a[m], { x: v, y: x, data: k, reset: $ } = await g({ x: l, y: f, initialPlacement: s, placement: d, strategy: i, middlewareData: u, rects: h, platform: o, elements: { reference: t, floating: e } });
    l = v ?? l, f = x ?? f, u = { ...u, [w]: { ...u[w], ...k } }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (d = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : $.rects), { x: l, y: f } = Ba(h, d, c)), m = -1);
  }
  return { x: l, y: f, placement: d, strategy: i, middlewareData: u };
};
function dc(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function ni(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function pc(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: c } = t, { boundary: h = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: d = !1, padding: u = 0 } = e, p = dc(u), m = a[d ? f === "floating" ? "reference" : "floating" : f], w = ni(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: l, strategy: c })), g = f === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, k = ni(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: g, offsetParent: v, strategy: c }) : g);
  return { top: (w.top - k.top + p.top) / x.y, bottom: (k.bottom - w.bottom + p.bottom) / x.y, left: (w.left - k.left + p.left) / x.x, right: (k.right - w.right + p.right) / x.x };
}
const Ef = Math.min, Mf = Math.max;
function pr(t, e, n) {
  return Mf(t, Ef(e, n));
}
const Tf = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: c, elements: h } = e;
  if (n == null)
    return {};
  const l = dc(s), f = { x: i, y: r }, d = ps(o), u = xo(d), p = await c.getDimensions(n), m = d === "y", w = m ? "top" : "left", g = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", x = a.reference[u] + a.reference[d] - f[d] - a.floating[u], k = f[d] - a.reference[d], $ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
  let N = $ ? $[v] : 0;
  N && await (c.isElement == null ? void 0 : c.isElement($)) || (N = h.floating[v] || a.floating[u]);
  const R = x / 2 - k / 2, T = l[w], D = N - p[u] - l[g], C = N / 2 - p[u] / 2 + R, W = pr(T, C, D), U = ds(o) != null && C != W && a.reference[u] / 2 - (C < T ? l[w] : l[g]) - p[u] / 2 < 0;
  return { [d]: f[d] - (U ? C < T ? T - C : D - C : 0), data: { [d]: W, centerOffset: C - W } };
} }), Rf = ["top", "right", "bottom", "left"];
Rf.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Af = { left: "right", right: "left", bottom: "top", top: "bottom" };
function si(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Af[e]);
}
function Nf(t, e, n) {
  n === void 0 && (n = !1);
  const s = ds(t), i = ps(t), r = xo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = si(o)), { main: o, cross: si(o) };
}
const Lf = { start: "end", end: "start" };
function er(t) {
  return t.replace(/start|end/g, (e) => Lf[e]);
}
const ko = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: c } = e, { mainAxis: h = !0, crossAxis: l = !0, fallbackPlacements: f, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: u = "none", flipAlignment: p = !0, ...m } = t, w = Re(s), g = Re(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = f || (g || !p ? [si(o)] : function(W) {
      const U = si(W);
      return [er(W), U, er(U)];
    }(o));
    f || u === "none" || x.push(...function(W, U, j, B) {
      const H = ds(W);
      let V = function(gt, ve, $t) {
        const ee = ["left", "right"], be = ["right", "left"], Fe = ["top", "bottom"], A = ["bottom", "top"];
        switch (gt) {
          case "top":
          case "bottom":
            return $t ? ve ? be : ee : ve ? ee : be;
          case "left":
          case "right":
            return ve ? Fe : A;
          default:
            return [];
        }
      }(Re(W), j === "start", B);
      return H && (V = V.map((gt) => gt + "-" + H), U && (V = V.concat(V.map(er)))), V;
    }(o, p, u, v));
    const k = [o, ...x], $ = await pc(e, m), N = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && N.push($[w]), l) {
      const { main: W, cross: U } = Nf(s, r, v);
      N.push($[W], $[U]);
    }
    if (R = [...R, { placement: s, overflows: N }], !N.every((W) => W <= 0)) {
      var T, D;
      const W = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, U = k[W];
      if (U)
        return { data: { index: W, overflows: R }, reset: { placement: U } };
      let j = (D = R.filter((B) => B.overflows[0] <= 0).sort((B, H) => B.overflows[1] - H.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!j)
        switch (d) {
          case "bestFit": {
            var C;
            const B = (C = R.map((H) => [H.placement, H.overflows.filter((V) => V > 0).reduce((V, gt) => V + gt, 0)]).sort((H, V) => H[1] - V[1])[0]) == null ? void 0 : C[0];
            B && (j = B);
            break;
          }
          case "initialPlacement":
            j = o;
        }
      if (s !== j)
        return { reset: { placement: j } };
    }
    return {};
  } };
}, mc = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: c, elements: h } = r, l = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), f = Re(a), d = ds(a), u = ps(a) === "x", p = ["left", "top"].includes(f) ? -1 : 1, m = l && u ? -1 : 1, w = typeof o == "function" ? o(r) : o;
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
    } }, ...c } = t, h = { x: n, y: s }, l = await pc(e, c), f = ps(Re(i)), d = Wf(f);
    let u = h[f], p = h[d];
    if (r) {
      const w = f === "y" ? "bottom" : "right";
      u = pr(u + l[f === "y" ? "top" : "left"], u, u - l[w]);
    }
    if (o) {
      const w = d === "y" ? "bottom" : "right";
      p = pr(p + l[d === "y" ? "top" : "left"], p, p - l[w]);
    }
    const m = a.fn({ ...e, [f]: u, [d]: p });
    return { ...m, data: { x: m.x - n, y: m.y - s } };
  } };
};
function ct(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function bt(t) {
  return ct(t).getComputedStyle(t);
}
function gc(t) {
  return t instanceof ct(t).Node;
}
function me(t) {
  return gc(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ws;
function _c() {
  if (ws)
    return ws;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ws = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ws) : navigator.userAgent;
}
function kt(t) {
  return t instanceof ct(t).HTMLElement;
}
function ht(t) {
  return t instanceof ct(t).Element;
}
function za(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ct(t).ShadowRoot || t instanceof ShadowRoot;
}
function ns(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = bt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Pf(t) {
  return ["table", "td", "th"].includes(me(t));
}
function mr(t) {
  const e = /firefox/i.test(_c()), n = bt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function gr() {
  return /^((?!chrome|android).)*safari/i.test(_c());
}
function Pi(t) {
  return ["html", "body", "#document"].includes(me(t));
}
const Fa = Math.min, Un = Math.max, ii = Math.round;
function yc(t) {
  const e = bt(t);
  let n = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = kt(t), r = i ? t.offsetWidth : n, o = i ? t.offsetHeight : s, a = ii(n) !== r || ii(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, fallback: a };
}
function wc(t) {
  return ht(t) ? t : t.contextElement;
}
const vc = { x: 1, y: 1 };
function tn(t) {
  const e = wc(t);
  if (!kt(e))
    return vc;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = yc(e);
  let o = (r ? ii(n.width) : n.width) / s, a = (r ? ii(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function De(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = wc(t);
  let c = vc;
  e && (s ? ht(s) && (c = tn(s)) : c = tn(t));
  const h = a ? ct(a) : window, l = gr() && n;
  let f = (o.left + (l && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, d = (o.top + (l && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, u = o.width / c.x, p = o.height / c.y;
  if (a) {
    const m = ct(a), w = s && ht(s) ? ct(s) : s;
    let g = m.frameElement;
    for (; g && s && w !== m; ) {
      const v = tn(g), x = g.getBoundingClientRect(), k = getComputedStyle(g);
      x.x += (g.clientLeft + parseFloat(k.paddingLeft)) * v.x, x.y += (g.clientTop + parseFloat(k.paddingTop)) * v.y, f *= v.x, d *= v.y, u *= v.x, p *= v.y, f += x.x, d += x.y, g = ct(g).frameElement;
    }
  }
  return ni({ width: u, height: p, x: f, y: d });
}
function fe(t) {
  return ((gc(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ii(t) {
  return ht(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function bc(t) {
  return De(fe(t)).left + Ii(t).scrollLeft;
}
function _n(t) {
  if (me(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || za(t) && t.host || fe(t);
  return za(e) ? e.host : e;
}
function xc(t) {
  const e = _n(t);
  return Pi(e) ? e.ownerDocument.body : kt(e) && ns(e) ? e : xc(e);
}
function jn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = xc(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = ct(s);
  return i ? e.concat(r, r.visualViewport || [], ns(s) ? s : []) : e.concat(s, jn(s));
}
function Ua(t, e, n) {
  let s;
  if (e === "viewport")
    s = function(o, a) {
      const c = ct(o), h = fe(o), l = c.visualViewport;
      let f = h.clientWidth, d = h.clientHeight, u = 0, p = 0;
      if (l) {
        f = l.width, d = l.height;
        const m = gr();
        (!m || m && a === "fixed") && (u = l.offsetLeft, p = l.offsetTop);
      }
      return { width: f, height: d, x: u, y: p };
    }(t, n);
  else if (e === "document")
    s = function(o) {
      const a = fe(o), c = Ii(o), h = o.ownerDocument.body, l = Un(a.scrollWidth, a.clientWidth, h.scrollWidth, h.clientWidth), f = Un(a.scrollHeight, a.clientHeight, h.scrollHeight, h.clientHeight);
      let d = -c.scrollLeft + bc(o);
      const u = -c.scrollTop;
      return bt(h).direction === "rtl" && (d += Un(a.clientWidth, h.clientWidth) - l), { width: l, height: f, x: d, y: u };
    }(fe(t));
  else if (ht(e))
    s = function(o, a) {
      const c = De(o, !0, a === "fixed"), h = c.top + o.clientTop, l = c.left + o.clientLeft, f = kt(o) ? tn(o) : { x: 1, y: 1 };
      return { width: o.clientWidth * f.x, height: o.clientHeight * f.y, x: l * f.x, y: h * f.y };
    }(e, n);
  else {
    const o = { ...e };
    if (gr()) {
      var i, r;
      const a = ct(t);
      o.x -= ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0, o.y -= ((r = a.visualViewport) == null ? void 0 : r.offsetTop) || 0;
    }
    s = o;
  }
  return ni(s);
}
function kc(t, e) {
  const n = _n(t);
  return !(n === e || !ht(n) || Pi(n)) && (bt(n).position === "fixed" || kc(n, e));
}
function ja(t, e) {
  return kt(t) && bt(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function Va(t, e) {
  const n = ct(t);
  if (!kt(t))
    return n;
  let s = ja(t, e);
  for (; s && Pf(s) && bt(s).position === "static"; )
    s = ja(s, e);
  return s && (me(s) === "html" || me(s) === "body" && bt(s).position === "static" && !mr(s)) ? n : s || function(i) {
    let r = _n(i);
    for (; kt(r) && !Pi(r); ) {
      if (mr(r))
        return r;
      r = _n(r);
    }
    return null;
  }(t) || n;
}
function If(t, e, n) {
  const s = kt(e), i = fe(e), r = De(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((me(e) !== "body" || ns(i)) && (o = Ii(e)), kt(e)) {
      const c = De(e, !0);
      a.x = c.x + e.clientLeft, a.y = c.y + e.clientTop;
    } else
      i && (a.x = bc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
const Of = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, l) {
    const f = l.get(h);
    if (f)
      return f;
    let d = jn(h).filter((w) => ht(w) && me(w) !== "body"), u = null;
    const p = bt(h).position === "fixed";
    let m = p ? _n(h) : h;
    for (; ht(m) && !Pi(m); ) {
      const w = bt(m), g = mr(m);
      g || w.position !== "fixed" || (u = null), (p ? !g && !u : !g && w.position === "static" && u && ["absolute", "fixed"].includes(u.position) || ns(m) && !g && kc(h, m)) ? d = d.filter((v) => v !== m) : u = w, m = _n(m);
    }
    return l.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], c = o.reduce((h, l) => {
    const f = Ua(e, l, i);
    return h.top = Un(f.top, h.top), h.right = Fa(f.right, h.right), h.bottom = Fa(f.bottom, h.bottom), h.left = Un(f.left, h.left), h;
  }, Ua(e, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = kt(n), r = fe(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((me(n) !== "body" || ns(r)) && (o = Ii(n)), kt(n))) {
    const h = De(n);
    a = tn(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + c.x, y: e.y * a.y - o.scrollTop * a.y + c.y };
}, isElement: ht, getDimensions: function(t) {
  return yc(t);
}, getOffsetParent: Va, getDocumentElement: fe, getScale: tn, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || Va, r = this.getDimensions;
  return { reference: If(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => bt(t).direction === "rtl" };
function Sc(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, c = i || r ? [...ht(t) ? jn(t) : t.contextElement ? jn(t.contextElement) : [], ...jn(e)] : [];
  c.forEach((d) => {
    const u = !ht(d) && d.toString().includes("V");
    !i || a && !u || d.addEventListener("scroll", n, { passive: !0 }), r && d.addEventListener("resize", n);
  });
  let h, l = null;
  o && (l = new ResizeObserver(() => {
    n();
  }), ht(t) && !a && l.observe(t), ht(t) || !t.contextElement || a || l.observe(t.contextElement), l.observe(e));
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
let Hf = class extends Di {
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
      middleware: [ko()],
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
var $o = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Pt = (t, e, n) => ($o(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ve = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, vs = (t, e, n, s) => ($o(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), qa = (t, e, n) => ($o(t, e, "access private method"), n), ne, Tn, Ns, Ls, _r, $c, yr, Cc;
const nr = "show", Bf = '[data-toggle="contextmenu"]';
class Tt extends Dt {
  constructor() {
    super(...arguments), Ve(this, _r), Ve(this, yr), Ve(this, ne, void 0), Ve(this, Tn, void 0), Ve(this, Ns, void 0), Ve(this, Ls, void 0);
  }
  get isShown() {
    return Pt(this, ne) && _(Pt(this, ne)).hasClass(nr);
  }
  get menu() {
    return Pt(this, ne) || this.ensureMenu();
  }
  get trigger() {
    return Pt(this, Ns) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  show(e) {
    return this.isShown || (vs(this, Ns, e), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (_(this.menu).addClass(nr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = Pt(this, Ls)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (_(Pt(this, ne)).removeClass(nr), this.emit("hidden"), !0);
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
    }), vs(this, ne, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: e, strategy: n } = this.options, s = {
      middleware: [],
      placement: e,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(ko())), s;
  }
  createPopper() {
    const e = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    vs(this, Ls, Sc(n, s, () => {
      So(n, s, e).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        _(s).css({ left: `${i}px`, top: `${r}px` });
        const c = a.split("-")[0], h = qa(this, _r, $c).call(this, c);
        if (o.arrow && this.arrowEl) {
          const { x: l, y: f } = o.arrow;
          _(this.arrowEl).css({
            left: l != null ? `${l}px` : "",
            top: f != null ? `${f}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...qa(this, yr, Cc).call(this, c)
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
    return !e || this.emit("updateMenu", e, this.trigger).defaultPrevented ? !1 : (ts(rt(Hf, e), this.menu), !0);
  }
  getPopperElement() {
    return Pt(this, Tn) || vs(this, Tn, {
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
    }), Pt(this, Tn);
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
Tn = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakMap();
_r = /* @__PURE__ */ new WeakSet();
$c = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
yr = /* @__PURE__ */ new WeakSet();
Cc = function(t) {
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
var Co = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Rn = (t, e, n) => (Co(t, e, "read from private field"), n ? n.call(t) : e.get(t)), bs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, wr = (t, e, n, s) => (Co(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), zf = (t, e, n) => (Co(t, e, "access private method"), n), Vn, An, ri, vr, Ec;
const Ga = '[data-toggle="dropdown"]', Mc = class extends Tt {
  constructor() {
    super(...arguments), bs(this, vr), bs(this, Vn, !1), bs(this, An, 0), this.hideLater = () => {
      Rn(this, ri).call(this), wr(this, An, window.setTimeout(this.hide.bind(this), 100));
    }, bs(this, ri, () => {
      clearTimeout(Rn(this, An)), wr(this, An, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && Mc.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const n = super.show(t);
    return n && (!Rn(this, Vn) && this.isHover && zf(this, vr, Ec).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    Rn(this, Vn) && _(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((n = t.middleware) == null || n.push(mc(e)), (s = t.middleware) == null || s.push(Tf({ element: this.arrowEl }))), t;
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
let de = Mc;
Vn = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
vr = /* @__PURE__ */ new WeakSet();
Ec = function() {
  _(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Rn(this, ri)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), wr(this, Vn, !0);
};
de.MENU_CLASS = "dropdown-menu";
de.NAME = "Dropdown";
de.DEFAULT = {
  ...Tt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
_(document).on("click", function(t) {
  const e = _(t.target).closest(Ga).not(":disabled,.disabled");
  if (e.length) {
    const n = de.ensure(e);
    n.options.trigger === "click" && n.toggle();
  } else
    de.clear({ event: t });
}).on("mouseover", function(t) {
  var s, i;
  const e = (i = (s = t.target).closest) == null ? void 0 : i.call(s, Ga);
  if (!e)
    return;
  const n = de.ensure(e);
  n.isHover && n.show();
});
let xs = 0;
window.addEventListener("scroll", (t) => {
  xs && clearTimeout(xs), xs = window.setTimeout(() => {
    de.clear({ event: t }), xs = 0;
  }, 50);
}, !0);
var as, rn;
class Ff extends G {
  constructor(n) {
    var s;
    super(n);
    L(this, as, void 0);
    L(this, rn, Xt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, rn);
  }
  get triggerElement() {
    return E(this, rn).current;
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
    }), O(this, as, de.ensure(this.triggerElement, {
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
    (n = E(this, as)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: M("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, rn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ y("div", { ...s, children: n });
  }
}
as = new WeakMap(), rn = new WeakMap();
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
function Tc({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Uf, { type: n, ...s });
}
let Rc = class extends G {
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
      const c = i.call(this, a, rt);
      if (it(c))
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
function jf({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ y(Rc, { type: n, ...s });
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
  item: $f,
  dropdown: Tc,
  "btn-group": jf
};
Lt.ROOT_TAG = "nav";
Lt.NAME = "toolbar";
Lt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Vf({
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
  a === !0 ? f = /* @__PURE__ */ y(Jt, { className: "alert-close btn ghost", square: !0, onClick: c, children: /* @__PURE__ */ y("span", { class: "close" }) }) : it(a) ? f = a : typeof a == "object" && (f = /* @__PURE__ */ y(Jt, { ...a, onClick: c }));
  const d = it(n) ? n : n ? /* @__PURE__ */ y(Lt, { ...n }) : null;
  return /* @__PURE__ */ y("div", { className: M("alert", t), style: e, ...l, children: [
    it(h) ? h : typeof h == "string" ? /* @__PURE__ */ y("i", { className: `icon ${h}` }) : null,
    it(i) ? i : /* @__PURE__ */ y("div", { className: M("alert-content", r), children: [
      it(s) ? s : s && /* @__PURE__ */ y("div", { className: "alert-heading", children: s }),
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
      Vf,
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
}, kn = (t, e, n) => (Yf(t, e, "access private method"), n), Se, Ye;
class Eo extends ot {
  constructor() {
    super(...arguments), Kf(this, Se), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: e }) => {
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
    this.render(), this.emit("show"), kn(this, Se, Ye).call(this, () => {
      this._show = !0, this.render(), kn(this, Se, Ye).call(this, () => {
        this.emit("shown");
        const { time: e } = this.options;
        e && kn(this, Se, Ye).call(this, () => this.hide(), e);
      });
    }, 100);
  }
  hide() {
    this._show && kn(this, Se, Ye).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), kn(this, Se, Ye).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
Se = /* @__PURE__ */ new WeakSet();
Ye = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
};
Eo.NAME = "MessagerItem";
Eo.Component = Gf;
var Mo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ae = (t, e, n) => (Mo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ks = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ws = (t, e, n, s) => (Mo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ac = (t, e, n) => (Mo(t, e, "access private method"), n), en, Ut, br, Nc, To, Lc;
const Wc = class extends Dt {
  constructor() {
    super(...arguments), ks(this, br), ks(this, To), ks(this, en, void 0), ks(this, Ut, void 0);
  }
  get isShown() {
    var t;
    return !!((t = Ae(this, Ut)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Ac(this, br, Nc).call(this).show();
  }
  hide() {
    var t;
    (t = Ae(this, Ut)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, s = Wc.ensure(e || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Ro = Wc;
en = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
br = /* @__PURE__ */ new WeakSet();
Nc = function() {
  if (Ae(this, Ut))
    Ae(this, Ut).setOptions(this.options);
  else {
    const t = Ac(this, To, Lc).call(this), e = new Eo(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), Ws(this, en, void 0), Ws(this, Ut, void 0);
    }), Ws(this, Ut, e);
  }
  return Ae(this, Ut);
};
To = /* @__PURE__ */ new WeakSet();
Lc = function() {
  if (Ae(this, en))
    return Ae(this, en);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = _(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let n = e.find(`#messager-${this.gid}`);
  return n.length || (n = _(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), Ws(this, en, n[0])), n[0];
};
Ro.NAME = "messager";
Ro.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
_(document).on("zui.messager.show", (t, e) => {
  e && Ro.show(e);
});
let Ao = class extends G {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ y("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ y("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - e) / 100, "stroke-width": s }),
      /* @__PURE__ */ y("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(e) })
    ] });
  }
};
Ao.NAME = "zui.progress-circle";
Ao.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Dc extends ot {
}
Dc.NAME = "ProgressCircle";
Dc.Component = Ao;
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
    return rt(
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
class Pc extends ot {
}
Pc.NAME = "Switch";
Pc.Component = Xf;
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
function xr(t, e) {
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
        return xr(this.converter, Ss({}, this.attributes, i));
      },
      withConverter: function(i) {
        return xr(Ss({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Zf = xr(Jf, { path: "/" });
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
const Ya = /* @__PURE__ */ new Set([
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
class Ic extends Qf {
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
    return typeof e == "string" && (Ya.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Ic.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Ya.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
let Oi = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var ls, oe, Et, on, an, Ds;
const _a = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    L(this, an);
    L(this, ls, void 0);
    L(this, oe, void 0);
    L(this, Et, void 0);
    L(this, on, void 0);
    O(this, ls, n), O(this, oe, `ZUI_STORE:${e ?? Oi()}`), O(this, Et, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, ls);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, on) || O(this, on, new _a(E(this, oe), "session")), E(this, on));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const s = E(this, Et).getItem(st(this, an, Ds).call(this, e));
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
    E(this, Et).setItem(st(this, an, Ds).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    E(this, Et).removeItem(st(this, an, Ds).call(this, e));
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
let oi = _a;
ls = new WeakMap(), oe = new WeakMap(), Et = new WeakMap(), on = new WeakMap(), an = new WeakSet(), Ds = function(e) {
  return `${E(this, oe)}:${e}`;
};
const td = new oi("DEFAULT");
function ed(t, e = "local") {
  return new oi(t, e);
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
function Ka(t, e) {
  return sd(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Xa(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function id(t, e, n) {
  t = t % 360 / 360, e = Xa(e), n = Xa(n);
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
let Oc = class extends G {
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
      const $ = od(c, l);
      if (g.push("has-text", `has-text-${$.length}`), o)
        !a && o && (v.color = Ka(o));
      else {
        const R = h ?? c, T = (typeof R == "number" ? R : rd(R)) * d % 360;
        if (v.background = `hsl(${T},${u * 100}%,${p * 100}%)`, !a) {
          const D = id(T, u, p);
          v.color = Ka(D);
        }
      }
      let N;
      x && x < 14 * $.length && (N = { transform: `scale(${x / (14 * $.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ y("div", { "data-actualSize": x, className: "avatar-text", style: N, children: $ });
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
class Hc extends ot {
}
Hc.NAME = "Avatar";
Hc.Component = Oc;
class Bc extends ot {
}
Bc.NAME = "BtnGroup";
Bc.Component = Rc;
var No = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ee = (t, e, n) => (No(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Sn = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, qn = (t, e, n, s) => (No(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), sr = (t, e, n) => (No(t, e, "access private method"), n), Xe, Ps, $e, kr, Nn, Is;
const ir = "show", Ja = "in", ad = '[data-dismiss="modal"]', Os = class extends Dt {
  constructor() {
    super(...arguments), Sn(this, Nn), Sn(this, Xe, 0), Sn(this, Ps, void 0), Sn(this, $e, void 0), Sn(this, kr, (t) => {
      const e = t.target;
      (e.closest(ad) || this.options.backdrop === !0 && !e.closest(".modal-dialog") && e.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(ir);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Ee(this, kr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const e = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const n = t.clientWidth, s = t.clientHeight;
          (!Ee(this, $e) || Ee(this, $e)[0] !== n || Ee(this, $e)[1] !== s) && (qn(this, $e, [n, s]), this.layout());
        });
        e.observe(t), qn(this, Ps, e);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = Ee(this, Ps)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: e } = this, { animation: n, backdrop: s, className: i, style: r } = this.options;
    return _(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, ir, i).css({
      zIndex: `${Os.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), sr(this, Nn, Is).call(this, () => {
      _(e).addClass(Ja), sr(this, Nn, Is).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (_(this.modalElement).removeClass(Ja), this.emit("hide"), sr(this, Nn, Is).call(this, () => {
      _(this.modalElement).removeClass(ir), this.emit("hidden");
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
    qn(this, $e, [i, r]), typeof t == "function" && (t = t({ width: i, height: r }));
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
    (e = Os.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Os.query(t)) == null || e.show();
  }
};
let we = Os;
Xe = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakSet();
Is = function(t, e) {
  Ee(this, Xe) && (clearTimeout(Ee(this, Xe)), qn(this, Xe, 0)), t && (this.options.animation ? qn(this, Xe, window.setTimeout(t, e ?? this.options.transTime)) : t());
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
class zc extends G {
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
    return it(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-header", children: /* @__PURE__ */ y("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : it(e) ? e : /* @__PURE__ */ y("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ y(Lt, { ...e }) : null,
      n ? /* @__PURE__ */ y("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ y("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? it(e) ? e : /* @__PURE__ */ y("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return it(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ y("div", { className: "modal-footer", children: n ? /* @__PURE__ */ y(Lt, { ...n }) : null });
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
zc.defaultProps = { closeBtn: !0 };
var ln, cn, hn;
class ld extends G {
  constructor() {
    super(...arguments);
    L(this, ln, void 0);
    L(this, cn, void 0);
    L(this, hn, void 0);
    O(this, ln, Xt()), this.state = {}, O(this, hn, () => {
      var i, r;
      const n = (r = (i = E(this, ln).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = E(this, cn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, c = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: c });
      }), s.observe(n.body), s.observe(n.documentElement), O(this, cn, s);
    });
  }
  componentDidMount() {
    E(this, hn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, cn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ y(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, ln),
        onLoad: E(this, hn)
      }
    );
  }
}
ln = new WeakMap(), cn = new WeakMap(), hn = new WeakMap();
var Lo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, qe = (t, e, n) => (Lo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ge = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, $n = (t, e, n, s) => (Lo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Je = (t, e, n) => (Lo(t, e, "access private method"), n), Hs, Bs, Ot, ss, Hi, Sr, Fc, zs, $r;
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
    body: n === "html" ? /* @__PURE__ */ y(Vl, { className: "modal-body", html: l, executeScript: c }) : l
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
    super(...arguments), Ge(this, ss), Ge(this, Sr), Ge(this, zs), Ge(this, Hs, void 0), Ge(this, Bs, void 0), Ge(this, Ot, void 0);
  }
  get id() {
    return qe(this, Bs);
  }
  get loading() {
    var t;
    return (t = this.modalElement) == null ? void 0 : t.classList.contains(se.LOADING_CLASS);
  }
  get modalElement() {
    let t = qe(this, Hs);
    if (!t) {
      const { id: e } = this;
      t = _(this.element).find(`#${e}`)[0], t || (t = _("<div>").attr("id", e).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), $n(this, Hs, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), $n(this, Bs, this.options.id || `modal-${Oi()}`);
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
    t.classList.add(se.LOADING_CLASS), await Je(this, Sr, Fc).call(this), s && $n(this, Ot, window.setTimeout(() => {
      $n(this, Ot, 0), Je(this, zs, $r).call(this, this.options.timeoutTip);
    }, s));
    const r = await i.call(this, t, e);
    return r === !1 ? await Je(this, zs, $r).call(this, this.options.failedTip) : r && typeof r == "object" && await Je(this, ss, Hi).call(this, r), qe(this, Ot) && (clearTimeout(qe(this, Ot)), $n(this, Ot, 0)), t.classList.remove(se.LOADING_CLASS), !0;
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
let Wo = se;
Hs = /* @__PURE__ */ new WeakMap();
Bs = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
ss = /* @__PURE__ */ new WeakSet();
Hi = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], _(this.modalElement).runJS(), e();
    const { afterRender: n, ...s } = t;
    t = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), e();
      },
      ...s
    }, ts(
      /* @__PURE__ */ y(zc, { ...t }),
      this.modalElement
    );
  });
};
Sr = /* @__PURE__ */ new WeakSet();
Fc = function() {
  const { loadingText: t } = this.options;
  return Je(this, ss, Hi).call(this, {
    body: /* @__PURE__ */ y("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ y("span", { className: "spinner" }),
      t ? /* @__PURE__ */ y("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
};
zs = /* @__PURE__ */ new WeakSet();
$r = function(t) {
  if (t)
    return Je(this, ss, Hi).call(this, {
      body: /* @__PURE__ */ y("div", { className: "modal-load-failed", children: t })
    });
};
Wo.LOADING_CLASS = "loading";
Wo.DEFAULT = {
  ...we.DEFAULT,
  loadTimeout: 1e4
};
var Do = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Cr = (t, e, n) => (Do(t, e, "read from private field"), n ? n.call(t) : e.get(t)), $s = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Za = (t, e, n, s) => (Do(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Er = (t, e, n) => (Do(t, e, "access private method"), n), Ne, Po, Uc, Mr, jc, Io, Vc;
const dd = '[data-toggle="modal"]';
class qc extends Dt {
  constructor() {
    super(...arguments), $s(this, Po), $s(this, Mr), $s(this, Io), $s(this, Ne, void 0);
  }
  get modal() {
    return Cr(this, Ne);
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    const e = Er(this, Mr, jc).call(this);
    return e == null ? void 0 : e.show();
  }
  hide() {
    var e;
    (e = Cr(this, Ne)) == null || e.hide();
  }
}
Ne = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
Uc = function() {
  const {
    container: t,
    ...e
  } = this.options, n = e, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), n;
};
Mr = /* @__PURE__ */ new WeakSet();
jc = function() {
  const t = Er(this, Po, Uc).call(this);
  let e = Cr(this, Ne);
  return e ? e.setOptions(t) : t.type === "static" ? (e = we.ensure(Er(this, Io, Vc).call(this), t), Za(this, Ne, e)) : (e = Wo.ensure(this.container, t), Za(this, Ne, e)), e;
};
Io = /* @__PURE__ */ new WeakSet();
Vc = function() {
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
qc.NAME = "ModalTrigger";
_(document).on("click", (t) => {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, dd);
  if (n) {
    const i = qc.ensure(n);
    i && i.show();
  }
});
let Gc = class extends Be {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = M(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
};
Gc.NAME = "nav";
class Yc extends ot {
}
Yc.NAME = "Nav";
Yc.Component = Gc;
function is(t, e) {
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
  const c = is(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(c) : ft(i, c)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(c) : ft(o, c)), a.disabled === void 0 && (a.disabled = s !== void 0 && c.page === r.page), /* @__PURE__ */ y(Jt, { type: n, ...a });
}
const zt = 24 * 60 * 60 * 1e3, dt = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : /* @__PURE__ */ new Date(), ms = (t, e = /* @__PURE__ */ new Date()) => (t = dt(t), e = dt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), Tr = (t, e = /* @__PURE__ */ new Date()) => dt(t).getFullYear() === dt(e).getFullYear(), md = (t, e = /* @__PURE__ */ new Date()) => (t = dt(t), e = dt(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), Op = (t, e = /* @__PURE__ */ new Date()) => {
  t = dt(t), e = dt(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Hp = (t, e) => ms(dt(e), t), Bp = (t, e) => ms(dt(e).getTime() - zt, t), zp = (t, e) => ms(dt(e).getTime() + zt, t), Fp = (t, e) => ms(dt(e).getTime() - 2 * zt, t), Rr = (t, e = "yyyy-MM-dd hh:mm", n = "") => {
  if (t = dt(t), Number.isNaN(t.getDay()))
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", Tr(t) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
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
  }, i = Rr(t, Tr(t) ? s.month : s.full);
  if (ms(t, e))
    return i;
  const r = Rr(e, Tr(t, e) ? md(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, jp = (t) => {
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
}, Qa = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Qa(t, "day", n, s);
    case "quarter":
      t *= 3;
      break;
    case "month":
      return t *= 30, Qa(t, "day", n, s);
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
  const a = is(i, n);
  return s = typeof s == "function" ? s(a) : ft(s, a), /* @__PURE__ */ y(ac, { ...o, children: [
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
      const w = is(i, m);
      o && (c.url = typeof o == "function" ? o(w) : ft(o, w)), p.push(/* @__PURE__ */ y(Jt, { type: n, ...c, onClick: r }));
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
      url: typeof n == "function" ? n(h) : ft(n, h)
    };
  });
  const { text: o = "" } = r;
  return r.text = typeof o == "function" ? o(e) : ft(o, e), i.menu = { ...i.menu, className: M((a = i.menu) == null ? void 0 : a.className, "pager-size-menu") }, /* @__PURE__ */ y(Tc, { type: "dropdown", dropdown: i, ...r });
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
    const w = is(i, f);
    a && !a({ info: w, event: m }) || (m.target.href = l.url = typeof c == "function" ? c(w) : ft(c, w));
  }, p = is(i, e || 0);
  return l.url = typeof c == "function" ? c(p) : ft(c, p), /* @__PURE__ */ y("div", { className: M("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ y("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ y(Jt, { type: s, ...l, onClick: u })
  ] });
}
let Bi = class extends Lt {
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
Bi.NAME = "pager";
Bi.defaultProps = {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Bi.ItemComponents = {
  ...Lt.ItemComponents,
  link: pd,
  info: gd,
  nav: _d,
  "size-menu": yd,
  goto: wd
};
class Kc extends ot {
}
Kc.NAME = "Pager";
Kc.Component = Bi;
var bi, xi, Xc;
class vd extends G {
  constructor() {
    super(...arguments);
    L(this, xi);
    L(this, bi, (n) => {
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
          st(this, xi, Xc).call(this),
          a,
          /* @__PURE__ */ y("span", { class: "caret" })
        ]
      }
    );
  }
}
bi = new WeakMap(), xi = new WeakSet(), Xc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ y("div", { className: "picker-multi-selections", children: n.map((i, r) => /* @__PURE__ */ y("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ y("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, bi), "data-idx": r, children: /* @__PURE__ */ y("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: s });
};
var ki;
class bd extends G {
  constructor() {
    super(...arguments);
    L(this, ki, (n) => {
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
    } = this.props, [f] = a, d = f ? /* @__PURE__ */ y("span", { className: "picker-single-selection", children: f.text ?? f.value }) : /* @__PURE__ */ y("span", { className: "picker-select-placeholder", children: r }), u = f && c ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, ki), children: /* @__PURE__ */ y("span", { className: "close" }) }) : null;
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
ki = new WeakMap();
var xd = ["Shift", "Meta", "Alt", "Control"], kd = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function rr(t, e) {
  return typeof t.getModifierState == "function" && t.getModifierState(e);
}
function Sd(t) {
  return t.trim().split(" ").map(function(e) {
    var n = e.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? kd : i;
    }), s];
  });
}
function $d(t, e) {
  var n;
  e === void 0 && (e = {});
  var s = (n = e.timeout) != null ? n : 1e3, i = Object.keys(t).map(function(a) {
    return [Sd(a), t[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(c) {
      var h = c[0], l = c[1], f = r.get(h) || h;
      (function(d, u) {
        return !(u[1].toUpperCase() !== d.key.toUpperCase() && u[1] !== d.code || u[0].find(function(p) {
          return !rr(d, p);
        }) || xd.find(function(p) {
          return !u[0].includes(p) && u[1] !== p && rr(d, p);
        }));
      })(a, f[0]) ? f.length > 1 ? r.set(h, f.slice(1)) : (r.delete(h), l(a)) : rr(a, a.key) || r.delete(h);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Cd(t, e, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", r = $d(e, n);
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
var ae, un, fn, cs, dn, Fs, Te, Ln, Si, Jc, pn, hs, mn, us, $i, Zc;
class Md extends G {
  constructor() {
    super(...arguments);
    L(this, dn);
    L(this, Te);
    L(this, Si);
    L(this, $i);
    L(this, ae, void 0);
    L(this, un, void 0);
    L(this, fn, void 0);
    L(this, cs, void 0);
    L(this, pn, void 0);
    L(this, hs, void 0);
    L(this, mn, void 0);
    L(this, us, void 0);
    this.state = { keys: "", show: !1 }, O(this, ae, 0), O(this, un, Xt()), O(this, fn, Xt()), O(this, pn, (n) => {
      _(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), O(this, hs, ({ item: n }) => {
      this.select(n.key);
    }), O(this, mn, (n) => {
      this.setState({ keys: n.target.value });
    }), O(this, us, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    _(document).on("click", E(this, pn)), this.show(this.focus.bind(this)), O(this, cs, Cd(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = st(this, Te, Ln).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = st(this, Te, Ln).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var r;
        if (!this.state.show)
          return;
        const s = (r = st(this, Te, Ln).call(this)) == null ? void 0 : r.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = st(this, dn, Fs).call(this);
    n && _(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = _(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    _(document).off("click", E(this, pn)), (s = E(this, cs)) == null || s.call(this);
    const n = st(this, dn, Fs).call(this);
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
    (n = E(this, un).current) == null || n.focus();
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
      const s = st(this, Te, Ln).call(this);
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
          st(this, $i, Zc).call(this),
          /* @__PURE__ */ y(
            Di,
            {
              ref: E(this, fn),
              className: "picker-menu-list",
              items: st(this, Si, Jc).call(this),
              onClickItem: E(this, hs),
              checkbox: h,
              ...c
            }
          )
        ]
      }
    );
  }
}
ae = new WeakMap(), un = new WeakMap(), fn = new WeakMap(), cs = new WeakMap(), dn = new WeakSet(), Fs = function() {
  var n;
  return (n = E(this, fn).current) == null ? void 0 : n.ref.current;
}, Te = new WeakSet(), Ln = function() {
  const n = st(this, dn, Fs).call(this);
  if (n)
    return _(n).find(".menu-item>a.hover");
}, Si = new WeakSet(), Jc = function() {
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
}, pn = new WeakMap(), hs = new WeakMap(), mn = new WeakMap(), us = new WeakMap(), $i = new WeakSet(), Zc = function() {
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
        onChange: E(this, mn),
        onInput: E(this, mn),
        ref: E(this, un)
      }
    ),
    r ? /* @__PURE__ */ y("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: E(this, us), children: /* @__PURE__ */ y("span", { className: "close" }) }) : /* @__PURE__ */ y("span", { className: "magnifier" })
  ] }) : null;
};
var Oo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, et = (t, e, n) => (Oo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Q = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ai = (t, e, n, s) => (Oo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Td = (t, e, n, s) => ({
  set _(i) {
    ai(t, e, i, n);
  },
  get _() {
    return et(t, e, s);
  }
}), pt = (t, e, n) => (Oo(t, e, "access private method"), n), Us, yn, li, jt, Wn, js, ci, Ho, Ar, Qc, Nr, th, Bo, zo, Fo, Uo, jo, eh, Lr, nh, Vo, sh, Vs, Wr;
let ih = class extends G {
  constructor(e) {
    super(e), Q(this, Wn), Q(this, ci), Q(this, Ar), Q(this, Nr), Q(this, jo), Q(this, Lr), Q(this, Vo), Q(this, Vs), Q(this, Us, 0), Q(this, yn, Oi()), Q(this, li, Xt()), Q(this, jt, void 0), Q(this, Bo, (n) => {
      const { valueList: s } = this, i = new Set(n.map((o) => o.value)), r = s.filter((o) => !i.has(o));
      this.setState({ value: r.length ? r.join(this.props.valueSplitter ?? ",") : void 0 });
    }), Q(this, zo, () => {
      requestAnimationFrame(() => this.toggle());
    }), Q(this, Fo, () => {
      this.close();
    }), Q(this, Uo, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var s;
        (s = et(this, li).current) == null || s.hide();
      });
    }), this.state = {
      value: pt(this, Ar, Qc).call(this, e.defaultValue) ?? "",
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
    return pt(this, ci, Ho).call(this, this.state.value);
  }
  componentDidMount() {
    pt(this, Vs, Wr).call(this, !0);
  }
  componentDidUpdate() {
    pt(this, Vs, Wr).call(this);
  }
  componentWillUnmount() {
    var n;
    var e;
    (n = this.props.beforeDestroy) == null || n.call(this), (e = et(this, jt)) == null || e.call(this), ai(this, jt, void 0);
  }
  async loadItemList() {
    let { items: e } = this.props;
    if (typeof e == "function") {
      const s = ++Td(this, Us)._;
      if (await pt(this, Wn, js).call(this, { loading: !0, items: [] }), e = await e(), et(this, Us) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(e) && this.state.items !== e && (n.items = e), this.state.loading && (n.loading = !1), Object.keys(n).length && await pt(this, Wn, js).call(this, n), e;
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
    await pt(this, Wn, js).call(this, { open: e }), e && this.loadItemList();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  toggleValue(e, n) {
    const { valueList: s } = this, i = s.indexOf(e);
    n !== !!i && (i > -1 ? s.splice(i, 1) : s.push(e), this.setState({ value: s.join(this.props.valueSplitter ?? ",") }));
  }
  render() {
    const {
      className: e,
      style: n,
      children: s,
      multiple: i,
      Select: r,
      name: o
    } = this.props, a = r || (i ? vd : bd), c = pt(this, Nr, th).call(this);
    return /* @__PURE__ */ y(
      "div",
      {
        id: `picker-${et(this, yn)}`,
        className: M("picker", e),
        style: n,
        children: [
          /* @__PURE__ */ y(a, { ...c }),
          s,
          pt(this, Lr, nh).call(this),
          o ? /* @__PURE__ */ y("input", { type: "hidden", className: "picker-value", name: o, value: this.state.value }) : null
        ]
      }
    );
  }
};
Us = /* @__PURE__ */ new WeakMap();
yn = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakSet();
js = function(t) {
  return new Promise((e) => {
    this.setState(t, e);
  });
};
ci = /* @__PURE__ */ new WeakSet();
Ho = function(t) {
  return typeof t == "string" ? t.length ? _.unique(t.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(t) ? _.unique(t) : [];
};
Ar = /* @__PURE__ */ new WeakSet();
Qc = function(t) {
  const e = pt(this, ci, Ho).call(this, t);
  return e.length ? e.join(this.props.valueSplitter ?? ",") : void 0;
};
Nr = /* @__PURE__ */ new WeakSet();
th = function() {
  const { placeholder: t, disabled: e, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: t,
    disabled: e,
    multiple: n,
    selections: this.getSelections(),
    onClick: et(this, zo),
    onDeselect: et(this, Bo)
  };
};
Bo = /* @__PURE__ */ new WeakMap();
zo = /* @__PURE__ */ new WeakMap();
Fo = /* @__PURE__ */ new WeakMap();
Uo = /* @__PURE__ */ new WeakMap();
jo = /* @__PURE__ */ new WeakSet();
eh = function() {
  const { search: t, menuClass: e, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: r, menuMinWidth: o, multiple: a, searchHint: c, menuCheckbox: h } = this.props, { items: l } = this.state;
  return {
    id: et(this, yn),
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
    onRequestHide: et(this, Fo),
    onSelectItem: et(this, Uo)
  };
};
Lr = /* @__PURE__ */ new WeakSet();
nh = function() {
  const { open: t } = this.state;
  if (!t)
    return null;
  const e = _(this.props.container || "body");
  let n = e.find(".pickers-container");
  n.length || (n = _("<div>").addClass("pickers-container").appendTo(e));
  const { Menu: s = Md } = this.props;
  return ff(/* @__PURE__ */ y(s, { ...pt(this, jo, eh).call(this), ref: et(this, li) }), n[0]);
};
Vo = /* @__PURE__ */ new WeakSet();
sh = function() {
  const t = _(`#picker-${et(this, yn)}`)[0], e = _(`#picker-menu-${et(this, yn)}`)[0];
  if (!e || !t || !this.state.open) {
    et(this, jt) && (et(this, jt).call(this), ai(this, jt, void 0));
    return;
  }
  et(this, jt) || ai(this, jt, Sc(t, e, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    So(t, e, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? ko() : null, Df(), mc(1)].filter(Boolean)
    }).then(({ x: i, y: r }) => {
      _(e).css({ left: i, top: r, width: s === "100%" ? _(t).width() : void 0 });
    }), s === "100%" && _(e).css({ width: _(t).width() });
  }));
};
Vs = /* @__PURE__ */ new WeakSet();
Wr = function(t = !1) {
  var e;
  (e = this.props.afterRender) == null || e.call(this, { firstRender: t }), pt(this, Vo, sh).call(this);
};
ih.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class rh extends ot {
}
rh.NAME = "Picker";
rh.Component = ih;
class oh extends ot {
}
oh.NAME = "Toolbar";
oh.Component = Lt;
function gs(t) {
  return t.split("-")[1];
}
function qo(t) {
  return t === "y" ? "height" : "width";
}
function nn(t) {
  return t.split("-")[0];
}
function zi(t) {
  return ["top", "bottom"].includes(nn(t)) ? "x" : "y";
}
function tl(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = zi(e), c = qo(a), h = s[c] / 2 - i[c] / 2, l = a === "x";
  let f;
  switch (nn(e)) {
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
  switch (gs(e)) {
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
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: l, y: f } = tl(h, s, c), d = s, u = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: w, fn: g } = a[m], { x: v, y: x, data: k, reset: $ } = await g({ x: l, y: f, initialPlacement: s, placement: d, strategy: i, middlewareData: u, rects: h, platform: o, elements: { reference: t, floating: e } });
    l = v ?? l, f = x ?? f, u = { ...u, [w]: { ...u[w], ...k } }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (d = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : $.rects), { x: l, y: f } = tl(h, d, c)), m = -1);
  }
  return { x: l, y: f, placement: d, strategy: i, middlewareData: u };
};
function ah(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function hi(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function Ad(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: c } = t, { boundary: h = "clippingAncestors", rootBoundary: l = "viewport", elementContext: f = "floating", altBoundary: d = !1, padding: u = 0 } = e, p = ah(u), m = a[d ? f === "floating" ? "reference" : "floating" : f], w = hi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(m))) == null || n ? m : m.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: l, strategy: c })), g = f === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, k = hi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: g, offsetParent: v, strategy: c }) : g);
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
  const h = ah(s), l = { x: i, y: r }, f = zi(o), d = qo(f), u = await c.getDimensions(n), p = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", w = a.reference[d] + a.reference[f] - l[f] - a.floating[d], g = l[f] - a.reference[f], v = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
  let x = v ? f === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[d]);
  const k = w / 2 - g / 2, $ = h[p], N = x - u[d] - h[m], R = x / 2 - u[d] / 2 + k, T = Wd($, R, N), D = gs(o) != null && R != T && a.reference[d] / 2 - (R < $ ? h[p] : h[m]) - u[d] / 2 < 0;
  return { [f]: l[f] - (D ? R < $ ? $ - R : N - R : 0), data: { [f]: T, centerOffset: R - T } };
} }), Pd = ["top", "right", "bottom", "left"];
Pd.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const Id = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ui(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Id[e]);
}
function Od(t, e, n) {
  n === void 0 && (n = !1);
  const s = gs(t), i = zi(t), r = qo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = ui(o)), { main: o, cross: ui(o) };
}
const Hd = { start: "end", end: "start" };
function or(t) {
  return t.replace(/start|end/g, (e) => Hd[e]);
}
const Bd = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: c } = e, { mainAxis: h = !0, crossAxis: l = !0, fallbackPlacements: f, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: u = "none", flipAlignment: p = !0, ...m } = t, w = nn(s), g = nn(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = f || (g || !p ? [ui(o)] : function(C) {
      const W = ui(C);
      return [or(C), W, or(W)];
    }(o));
    f || u === "none" || x.push(...function(C, W, U, j) {
      const B = gs(C);
      let H = function(V, gt, ve) {
        const $t = ["left", "right"], ee = ["right", "left"], be = ["top", "bottom"], Fe = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return ve ? gt ? ee : $t : gt ? $t : ee;
          case "left":
          case "right":
            return gt ? be : Fe;
          default:
            return [];
        }
      }(nn(C), U === "start", j);
      return B && (H = H.map((V) => V + "-" + B), W && (H = H.concat(H.map(or)))), H;
    }(o, p, u, v));
    const k = [o, ...x], $ = await Ad(e, m), N = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && N.push($[w]), l) {
      const { main: C, cross: W } = Od(s, r, v);
      N.push($[C], $[W]);
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
          const j = (D = R.map((B) => [B, B.overflows.filter((H) => H > 0).reduce((H, V) => H + V, 0)]).sort((B, H) => B[1] - H[1])[0]) == null ? void 0 : D[0].placement;
          j && (U = j);
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
      const { placement: a, platform: c, elements: h } = r, l = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), f = nn(a), d = gs(a), u = zi(a) === "x", p = ["left", "top"].includes(f) ? -1 : 1, m = l && u ? -1 : 1, w = typeof o == "function" ? o(r) : o;
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
let Cs;
function lh() {
  if (Cs)
    return Cs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (Cs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), Cs) : navigator.userAgent;
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
function el(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof mt(t).ShadowRoot || t instanceof ShadowRoot;
}
function Fi(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = At(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Fd(t) {
  return ["table", "td", "th"].includes(ge(t));
}
function Dr(t) {
  const e = /firefox/i.test(lh()), n = At(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function hh() {
  return !/^((?!chrome|android).)*safari/i.test(lh());
}
function Go(t) {
  return ["html", "body", "#document"].includes(ge(t));
}
const nl = Math.min, Gn = Math.max, fi = Math.round;
function uh(t) {
  const e = At(t);
  let n = parseFloat(e.width), s = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, o = fi(n) !== i || fi(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function fh(t) {
  return xt(t) ? t : t.contextElement;
}
const dh = { x: 1, y: 1 };
function sn(t) {
  const e = fh(t);
  if (!Zt(e))
    return dh;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = uh(e);
  let o = (r ? fi(n.width) : n.width) / s, a = (r ? fi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Pe(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = fh(t);
  let c = dh;
  e && (s ? xt(s) && (c = sn(s)) : c = sn(t));
  const h = a ? mt(a) : window, l = !hh() && n;
  let f = (o.left + (l && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, d = (o.top + (l && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, u = o.width / c.x, p = o.height / c.y;
  if (a) {
    const m = mt(a), w = s && xt(s) ? mt(s) : s;
    let g = m.frameElement;
    for (; g && s && w !== m; ) {
      const v = sn(g), x = g.getBoundingClientRect(), k = getComputedStyle(g);
      x.x += (g.clientLeft + parseFloat(k.paddingLeft)) * v.x, x.y += (g.clientTop + parseFloat(k.paddingTop)) * v.y, f *= v.x, d *= v.y, u *= v.x, p *= v.y, f += x.x, d += x.y, g = mt(g).frameElement;
    }
  }
  return { width: u, height: p, top: d, right: f + u, bottom: d + p, left: f, x: f, y: d };
}
function pe(t) {
  return ((ch(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ui(t) {
  return xt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function ph(t) {
  return Pe(pe(t)).left + Ui(t).scrollLeft;
}
function Ud(t, e, n) {
  const s = Zt(e), i = pe(e), r = Pe(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ge(e) !== "body" || Fi(i)) && (o = Ui(e)), Zt(e)) {
      const c = Pe(e, !0);
      a.x = c.x + e.clientLeft, a.y = c.y + e.clientTop;
    } else
      i && (a.x = ph(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function rs(t) {
  if (ge(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (el(t) ? t.host : null) || pe(t);
  return el(e) ? e.host : e;
}
function sl(t) {
  return Zt(t) && At(t).position !== "fixed" ? t.offsetParent : null;
}
function il(t) {
  const e = mt(t);
  let n = sl(t);
  for (; n && Fd(n) && At(n).position === "static"; )
    n = sl(n);
  return n && (ge(n) === "html" || ge(n) === "body" && At(n).position === "static" && !Dr(n)) ? e : n || function(s) {
    let i = rs(s);
    for (; Zt(i) && !Go(i); ) {
      if (Dr(i))
        return i;
      i = rs(i);
    }
    return null;
  }(t) || e;
}
function mh(t) {
  const e = rs(t);
  return Go(e) ? t.ownerDocument.body : Zt(e) && Fi(e) ? e : mh(e);
}
function Yn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = mh(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = mt(s);
  return i ? e.concat(r, r.visualViewport || [], Fi(s) ? s : []) : e.concat(s, Yn(s));
}
function rl(t, e, n) {
  return e === "viewport" ? hi(function(s, i) {
    const r = mt(s), o = pe(s), a = r.visualViewport;
    let c = o.clientWidth, h = o.clientHeight, l = 0, f = 0;
    if (a) {
      c = a.width, h = a.height;
      const d = hh();
      (d || !d && i === "fixed") && (l = a.offsetLeft, f = a.offsetTop);
    }
    return { width: c, height: h, x: l, y: f };
  }(t, n)) : xt(e) ? function(s, i) {
    const r = Pe(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, c = Zt(s) ? sn(s) : { x: 1, y: 1 }, h = s.clientWidth * c.x, l = s.clientHeight * c.y, f = a * c.x, d = o * c.y;
    return { top: d, left: f, right: f + h, bottom: d + l, x: f, y: d, width: h, height: l };
  }(e, n) : hi(function(s) {
    var i;
    const r = pe(s), o = Ui(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, c = Gn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Gn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let l = -o.scrollLeft + ph(s);
    const f = -o.scrollTop;
    return At(a || r).direction === "rtl" && (l += Gn(r.clientWidth, a ? a.clientWidth : 0) - c), { width: c, height: h, x: l, y: f };
  }(pe(t)));
}
const jd = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, l) {
    const f = l.get(h);
    if (f)
      return f;
    let d = Yn(h).filter((w) => xt(w) && ge(w) !== "body"), u = null;
    const p = At(h).position === "fixed";
    let m = p ? rs(h) : h;
    for (; xt(m) && !Go(m); ) {
      const w = At(m), g = Dr(m);
      (p ? g || u : g || w.position !== "static" || !u || !["absolute", "fixed"].includes(u.position)) ? u = w : d = d.filter((v) => v !== m), m = rs(m);
    }
    return l.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], c = o.reduce((h, l) => {
    const f = rl(e, l, i);
    return h.top = Gn(f.top, h.top), h.right = nl(f.right, h.right), h.bottom = nl(f.bottom, h.bottom), h.left = Gn(f.left, h.left), h;
  }, rl(e, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = Zt(n), r = pe(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ge(n) !== "body" || Fi(r)) && (o = Ui(n)), Zt(n))) {
    const h = Pe(n);
    a = sn(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + c.x, y: e.y * a.y - o.scrollTop * a.y + c.y };
}, isElement: xt, getDimensions: function(t) {
  return uh(t);
}, getOffsetParent: il, getDocumentElement: pe, getScale: sn, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || il, r = this.getDimensions;
  return { reference: Ud(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => At(t).direction === "rtl" };
function Vd(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, c = i && !a, h = c || r ? [...xt(t) ? Yn(t) : t.contextElement ? Yn(t.contextElement) : [], ...Yn(e)] : [];
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
  const s = /* @__PURE__ */ new Map(), i = { platform: jd, ...n }, r = { ...i.platform, _c: s };
  return Rd(t, e, { ...i, platform: r });
};
var Yo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, F = (t, e, n) => (Yo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), J = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ie = (t, e, n, s) => (Yo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Rt = (t, e, n) => (Yo(t, e, "access private method"), n), Kn, Xn, Dn, Ze, lt, Pr, di, ji, Ko, Xo, gh, Ir, _h, Jo, yh, Zo, wh, Qo, vh, Or, bh, ta, xh, Jn, Hr, kh;
const Qe = class extends Dt {
  constructor() {
    super(...arguments), J(this, ji), J(this, Xo), J(this, Ir), J(this, Jo), J(this, Zo), J(this, Qo), J(this, Or), J(this, ta), J(this, Hr), J(this, Kn, !1), J(this, Xn, void 0), J(this, Dn, 0), J(this, Ze, void 0), J(this, lt, void 0), J(this, Pr, void 0), J(this, di, void 0), this.hideLater = () => {
      F(this, Jn).call(this), Ie(this, Dn, window.setTimeout(this.hide.bind(this), 100));
    }, J(this, Jn, () => {
      clearTimeout(F(this, Dn)), Ie(this, Dn, 0);
    });
  }
  get isShown() {
    var t;
    return (t = F(this, Ze)) == null ? void 0 : t.classList.contains(Qe.CLASS_SHOW);
  }
  get tooltip() {
    return F(this, Ze) || Rt(this, Ir, _h).call(this);
  }
  get trigger() {
    return F(this, Pr) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Qe.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !F(this, Kn) && this.isHover && Rt(this, Hr, kh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Qe.CLASS_SHOW), Rt(this, Or, bh).call(this), !0;
  }
  hide() {
    var e;
    var t;
    return (t = F(this, di)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = F(this, Ze)) == null || e.classList.remove(Qe.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    F(this, Kn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", F(this, Jn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t || {}, n = this.getAll().entries(), s = new Set(e || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let Nt = Qe;
Kn = /* @__PURE__ */ new WeakMap();
Xn = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
Pr = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
ji = /* @__PURE__ */ new WeakSet();
Ko = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
};
Xo = /* @__PURE__ */ new WeakSet();
gh = function() {
  const t = Rt(this, ji, Ko).call(this);
  return Ie(this, lt, document.createElement("div")), F(this, lt).style.position = this.options.strategy, F(this, lt).style.width = `${t}px`, F(this, lt).style.height = `${t}px`, F(this, lt).style.transform = "rotate(45deg)", F(this, lt);
};
Ir = /* @__PURE__ */ new WeakSet();
_h = function() {
  var n;
  const t = Qe.TOOLTIP_CLASS;
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
  if (this.options.arrow && (e == null || e.append(Rt(this, Xo, gh).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), Ie(this, Ze, e), e;
};
Jo = /* @__PURE__ */ new WeakSet();
yh = function() {
  var i;
  const t = Rt(this, ji, Ko).call(this), { strategy: e, placement: n } = this.options, s = {
    middleware: [zd(t), Bd()],
    strategy: e,
    placement: n
  };
  return this.options.arrow && F(this, lt) && ((i = s.middleware) == null || i.push(Dd({ element: F(this, lt) }))), s;
};
Zo = /* @__PURE__ */ new WeakSet();
wh = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
Qo = /* @__PURE__ */ new WeakSet();
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
Or = /* @__PURE__ */ new WeakSet();
bh = function() {
  const t = Rt(this, Jo, yh).call(this), e = Rt(this, ta, xh).call(this);
  Ie(this, di, Vd(e, this.tooltip, () => {
    qd(e, this.tooltip, t).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = Rt(this, Zo, wh).call(this, o);
      if (i.arrow && F(this, lt)) {
        const { x: c, y: h } = i.arrow;
        Object.assign(F(this, lt).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-F(this, lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Rt(this, Qo, vh).call(this, o)
        });
      }
    });
  }));
};
ta = /* @__PURE__ */ new WeakSet();
xh = function() {
  return F(this, Xn) || Ie(this, Xn, {
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
  }), F(this, Xn);
};
Jn = /* @__PURE__ */ new WeakMap();
Hr = /* @__PURE__ */ new WeakSet();
kh = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", F(this, Jn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ie(this, Kn, !0);
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
}, Es = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, pi = (t, e, n) => (Gd(t, e, "access private method"), n), Br, Sh, zr, $h, ea, Ch, na, Eh;
class Yd extends Dt {
  constructor() {
    super(...arguments), Es(this, Br), Es(this, zr), Es(this, ea), Es(this, na);
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
    this.emit("before", e, n, s), ((i = s.beforeSubmit) == null ? void 0 : i.call(s, e, n, s)) !== !1 && (this.disable(), pi(this, zr, $h).call(this, pi(this, Br, Sh).call(this)).finally(() => {
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
Br = /* @__PURE__ */ new WeakSet();
Sh = function() {
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
zr = /* @__PURE__ */ new WeakSet();
$h = async function(t) {
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
  s ? (this.emit("error", s, i), (o = n.onError) == null || o.call(n, s, i)) : pi(this, na, Eh).call(this, r), this.emit("complete", r, s), (a = n.onComplete) == null || a.call(n, r, s);
};
ea = /* @__PURE__ */ new WeakSet();
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
na = /* @__PURE__ */ new WeakSet();
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
    n && (typeof n == "string" && n.length ? _(document).trigger("zui.messager.show", { content: n, type: "danger" }) : typeof n == "object" && pi(this, ea, Ch).call(this, n));
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
var fs, Ci, Ei, Mi;
class Xd extends G {
  constructor(n) {
    super(n);
    L(this, fs, Xt());
    L(this, Ci, (n) => {
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
    L(this, Ei, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    L(this, Mi, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ y("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, fs).current;
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
      fetch(ft(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ y(Vl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
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
        onDragStart: E(this, Ei),
        onDragEnd: E(this, Mi),
        "data-id": l,
        ref: E(this, fs),
        children: [
          /* @__PURE__ */ y("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ y("div", { class: "dashboard-block-title", children: c }),
            h ? /* @__PURE__ */ y("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ y("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, Ci), children: /* @__PURE__ */ y("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
fs = new WeakMap(), Ci = new WeakMap(), Ei = new WeakMap(), Mi = new WeakMap();
var Th = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, qt = (t, e, n) => (Th(t, e, "read from private field"), n ? n.call(t) : e.get(t)), yt = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, St = (t, e, n) => (Th(t, e, "access private method"), n), Qt, sa, Rh, ia, Ah, Fr, Nh, ra, Lh, mi, Ur, Vi, jr, oa, Wh, Vr, qr, qi, aa;
const la = class extends G {
  constructor() {
    super(...arguments), yt(this, sa), yt(this, ia), yt(this, Fr), yt(this, ra), yt(this, mi), yt(this, Vi), yt(this, oa), yt(this, Qt, /* @__PURE__ */ new Map()), this.state = {}, yt(this, Vr, (t) => {
      var n;
      const e = (n = t.dataTransfer) == null ? void 0 : n.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), yt(this, qr, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = St(this, Fr, Nh).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Qt);
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
          onDragStart: qt(this, Vr),
          onDragEnd: qt(this, qr)
        },
        r.id
      );
    }) }) });
  }
};
let ca = la;
Qt = /* @__PURE__ */ new WeakMap();
sa = /* @__PURE__ */ new WeakSet();
Rh = function(t) {
  const { blockDefaultSize: e, blockSizeMap: n } = this.props;
  return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
};
ia = /* @__PURE__ */ new WeakSet();
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
    } = i, [d, u] = St(this, sa, Rh).call(this, o);
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
Fr = /* @__PURE__ */ new WeakSet();
Nh = function() {
  qt(this, Qt).clear();
  let t = 0;
  const e = St(this, ia, Ah).call(this);
  return e.forEach((n) => {
    St(this, ra, Lh).call(this, n);
    const [, s, , i] = qt(this, Qt).get(n.id);
    t = Math.max(t, s + i);
  }), { blocks: e, height: t };
};
ra = /* @__PURE__ */ new WeakSet();
Lh = function(t) {
  const e = qt(this, Qt), { id: n, left: s, top: i, width: r, height: o } = t;
  if (s < 0 || i < 0) {
    const [a, c] = St(this, oa, Wh).call(this, r, o, s, i);
    e.set(n, [a, c, r, o]);
  } else
    St(this, Vi, jr).call(this, n, [s, i, r, o]);
};
mi = /* @__PURE__ */ new WeakSet();
Ur = function(t) {
  var e;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Qt).entries())
    if (s !== n && St(e = la, qi, aa).call(e, i, t))
      return !1;
  return !0;
};
Vi = /* @__PURE__ */ new WeakSet();
jr = function(t, e) {
  var n;
  qt(this, Qt).set(t, e);
  for (const [s, i] of qt(this, Qt).entries())
    s !== t && St(n = la, qi, aa).call(n, i, e) && (i[1] = e[1] + e[3], St(this, Vi, jr).call(this, s, i));
};
oa = /* @__PURE__ */ new WeakSet();
Wh = function(t, e, n, s) {
  if (n >= 0 && s >= 0) {
    if (St(this, mi, Ur).call(this, [n, s, t, e]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (St(this, mi, Ur).call(this, [i, r, t, e])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + t > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Vr = /* @__PURE__ */ new WeakMap();
qr = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakSet();
aa = function([t, e, n, s], [i, r, o, a]) {
  return !(t + n <= i || i + o <= t || e + s <= r || r + a <= e);
};
yt(ca, qi);
ca.defaultProps = {
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
class Dh extends ot {
}
Dh.NAME = "Dashboard";
Dh.Component = ca;
var le, ce;
class ol extends G {
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
  }], m = ["dtable-cell-content", t.setting.cellClass], w = (D = s.data) == null ? void 0 : D[t.name], g = [a ?? w ?? ""], v = i ? i(g, { row: s, col: t, value: w }, rt) : g, x = [], k = [], $ = {}, N = {};
  let R = "div";
  v == null || v.forEach((C) => {
    if (typeof C == "object" && C && !it(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const W = C.outer ? x : k;
      C.html ? W.push(/* @__PURE__ */ y("div", { className: M("dtable-cell-html", C.className), style: C.style, dangerouslySetInnerHTML: { __html: C.html }, ...C.attrs ?? {} })) : (C.style && Object.assign(C.outer ? l : u, C.style), C.className && (C.outer ? p : m).push(C.className), C.children && W.push(C.children), C.attrs && Object.assign(C.outer ? $ : N, C.attrs)), C.tagName && !C.outer && (R = C.tagName);
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
      ...$,
      children: [
        k.length > 0 && /* @__PURE__ */ y(T, { className: M(m), style: u, ...N, children: k }),
        x
      ]
    }
  );
}
function ar({ row: t, className: e, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Ph, onRenderCell: c }) {
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
    ar,
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
    ar,
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
    ar,
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
    const i = e({ props: s }, rt);
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
    }, f = a == null ? void 0 : a({ props: l, row: h }, rt);
    return f && Object.assign(l, f), /* @__PURE__ */ y(Ih, { ...l });
  }) });
}
const gi = /* @__PURE__ */ new Map(), _i = [];
function Oh(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && gi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  gi.set(n, t), e != null && e.buildIn && !_i.includes(n) && _i.push(n);
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
  return gi.delete(t);
}
function tp(t) {
  if (typeof t == "string") {
    const e = gi.get(t);
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
  return e && _i.length && t.unshift(..._i), t != null && t.length ? Bh([], t, /* @__PURE__ */ new Set()) : [];
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
var ha = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, S = (t, e, n) => (ha(t, e, "read from private field"), n ? n.call(t) : e.get(t)), P = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, K = (t, e, n, s) => (ha(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Bt = (t, e, n) => (ha(t, e, "access private method"), n), Ke, Pn, Le, Vt, Me, tt, Ct, Ht, In, qs, yi, ie, On, Hn, Gr, Fh, Yr, Uh, Kr, jh, Xr, Vh, Gs, Jr, ua, fa, Gi, wi, Zr, Qr, da, qh, pa, Gh, to, Yh;
let ma = class extends G {
  constructor(e) {
    super(e), P(this, Gr), P(this, Yr), P(this, Kr), P(this, Xr), P(this, Gs), P(this, da), P(this, pa), P(this, to), this.ref = Xt(), P(this, Ke, 0), P(this, Pn, void 0), P(this, Le, !1), P(this, Vt, void 0), P(this, Me, void 0), P(this, tt, []), P(this, Ct, void 0), P(this, Ht, /* @__PURE__ */ new Map()), P(this, In, {}), P(this, qs, void 0), P(this, yi, []), this.updateLayout = () => {
      S(this, Ke) && cancelAnimationFrame(S(this, Ke)), K(this, Ke, requestAnimationFrame(() => {
        K(this, Ct, void 0), this.forceUpdate(), K(this, Ke, 0);
      }));
    }, P(this, ie, (n, s) => {
      s = s || n.type;
      const i = S(this, Ht).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), P(this, On, (n) => {
      S(this, ie).call(this, n, `window_${n.type}`);
    }), P(this, Hn, (n) => {
      S(this, ie).call(this, n, `document_${n.type}`);
    }), P(this, ua, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return S(this, tt).forEach((i) => {
        if (i.onRenderRow) {
          const r = i.onRenderRow.call(this, n, s);
          r && Object.assign(n.props, r);
        }
      }), n.props;
    }), P(this, fa, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, tt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), P(this, Gi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[a] && (n = o.setting[a].call(this, n, s, i)), this.options[a] && (n = this.options[a].call(this, n, s, i)), S(this, tt).forEach((c) => {
        c[a] && (n = c[a].call(this, n, s, i));
      }), n;
    }), P(this, wi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), P(this, Zr, (n) => {
      var a, c, h, l, f;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), S(this, tt).forEach((d) => {
          var u;
          (u = d.onHeaderCellClick) == null || u.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, u = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, n, { colName: r, rowID: i, rowInfo: u, element: o, rowElement: d })) === !0)
            return;
          for (const p of S(this, tt))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: u, element: o, rowElement: d })) === !0)
              return;
        }
        if (((l = this.options.onRowClick) == null ? void 0 : l.call(this, n, { rowID: i, rowInfo: u, element: d })) === !0)
          return;
        for (const p of S(this, tt))
          if (((f = p.onRowClick) == null ? void 0 : f.call(this, n, { rowID: i, rowInfo: u, element: d })) === !0)
            return;
      }
    }), P(this, Qr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), K(this, Pn, e.id ?? `dtable-${Oi(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, K(this, Me, Object.freeze(ep(e.plugins))), S(this, Me).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, c]) => {
        typeof c == "function" && Object.assign(this, { [a]: c.bind(this) });
      }), i && Object.assign(S(this, In), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var e;
    return ((e = S(this, Ct)) == null ? void 0 : e.options) || S(this, Vt) || zh();
  }
  get plugins() {
    return S(this, tt);
  }
  get layout() {
    return S(this, Ct);
  }
  get id() {
    return S(this, Pn);
  }
  get data() {
    return S(this, In);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    K(this, Vt, void 0);
  }
  componentDidMount() {
    if (S(this, Le) ? this.forceUpdate() : Bt(this, Gs, Jr).call(this), S(this, tt).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, Zr)), this.on("keydown", S(this, Qr)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), K(this, qs, n);
        }
      }
      this.on("window_resize", this.updateLayout);
    }
    S(this, tt).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, Le) ? Bt(this, Gs, Jr).call(this) : S(this, tt).forEach((e) => {
      var n;
      (n = e.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, qs)) == null || n.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const s of S(this, Ht).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, On)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Hn)) : e.removeEventListener(s, S(this, ie));
    S(this, tt).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, Me).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), K(this, In, {}), S(this, Ht).clear();
  }
  on(e, n, s) {
    var r;
    s && (e = `${s}_${e}`);
    const i = S(this, Ht).get(e);
    i ? i.push(n) : (S(this, Ht).set(e, [n]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), S(this, On)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), S(this, Hn)) : (r = this.ref.current) == null || r.addEventListener(e, S(this, ie)));
  }
  off(e, n, s) {
    var o;
    s && (e = `${s}_${e}`);
    const i = S(this, Ht).get(e);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (S(this, Ht).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), S(this, On)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), S(this, Hn)) : (o = this.ref.current) == null || o.removeEventListener(e, S(this, ie)));
  }
  emitCustomEvent(e, n) {
    S(this, ie).call(this, n instanceof Event ? n : new CustomEvent(e, { detail: n }), e);
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
    if (!S(this, Vt))
      return;
    typeof e == "function" && (n = e, e = {});
    const { dirtyType: s, state: i } = e;
    if (s === "layout")
      K(this, Ct, void 0);
    else if (s === "options") {
      if (K(this, Vt, void 0), !S(this, Ct))
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
    return Kt(S(this, yi), e, n, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.name === e);
  }
  render() {
    const e = Bt(this, to, Yh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: c } = this.options, h = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, l = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": c
    }], f = [];
    return e && S(this, tt).forEach((d) => {
      var p;
      const u = (p = d.onRender) == null ? void 0 : p.call(this, e);
      u && (u.style && Object.assign(h, u.style), u.className && l.push(u.className), u.children && f.push(u.children));
    }), /* @__PURE__ */ y(
      "div",
      {
        id: S(this, Pn),
        className: M(l),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: [
          e && Bt(this, Gr, Fh).call(this, e),
          e && Bt(this, Yr, Uh).call(this, e),
          e && Bt(this, Kr, jh).call(this, e),
          e && Bt(this, Xr, Vh).call(this, e)
        ]
      }
    );
  }
};
Ke = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
Ct = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
Gr = /* @__PURE__ */ new WeakSet();
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
        onRenderCell: S(this, Gi),
        onRenderRow: S(this, fa),
        ...n
      }
    );
  const r = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ y(
    yo,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [t],
      generatorThis: this
    }
  );
};
Yr = /* @__PURE__ */ new WeakSet();
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
      onRenderCell: S(this, Gi),
      onRenderRow: S(this, ua),
      ...r
    }
  );
};
Kr = /* @__PURE__ */ new WeakSet();
jh = function(t) {
  const { footer: e } = t;
  if (!e)
    return null;
  const n = typeof e == "function" ? e.call(this, t) : Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ y(
    yo,
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
Xr = /* @__PURE__ */ new WeakSet();
Vh = function(t) {
  const e = [], { scrollLeft: n, colsInfo: s, scrollTop: i, rowsHeight: r, rowsHeightTotal: o, footerHeight: a } = t, { scrollColsWidth: c, scrollWidth: h } = s, { scrollbarSize: l = 12, horzScrollbarPos: f } = this.options;
  return c > h && e.push(
    /* @__PURE__ */ y(
      ol,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: c,
        clientSize: h,
        onScroll: S(this, wi),
        left: s.fixedLeftWidth,
        bottom: (f === "inside" ? 0 : -l) + a,
        size: l,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), o > r && e.push(
    /* @__PURE__ */ y(
      ol,
      {
        type: "vert",
        scrollPos: i,
        scrollSize: o,
        clientSize: r,
        onScroll: S(this, wi),
        right: 0,
        size: l,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
};
Gs = /* @__PURE__ */ new WeakSet();
Jr = function() {
  var t;
  K(this, Le, !1), (t = this.options.afterRender) == null || t.call(this), S(this, tt).forEach((e) => {
    var n;
    return (n = e.afterRender) == null ? void 0 : n.call(this);
  });
};
ua = /* @__PURE__ */ new WeakMap();
fa = /* @__PURE__ */ new WeakMap();
Gi = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
da = /* @__PURE__ */ new WeakSet();
qh = function() {
  if (S(this, Vt))
    return !1;
  const e = { ...zh(), ...S(this, Me).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return K(this, Vt, e), K(this, tt, S(this, Me).reduce((n, s) => {
    const { when: i, options: r } = s;
    return (!i || i(e)) && (n.push(s), r && Object.assign(e, typeof r == "function" ? r.call(this, e) : r)), n;
  }, [])), K(this, yi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
pa = /* @__PURE__ */ new WeakSet();
Gh = function() {
  var be, Fe;
  const { plugins: t } = this;
  let e = S(this, Vt);
  const n = {
    flex: /* @__PURE__ */ y("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ y("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((A) => {
    var at;
    const Y = (at = A.beforeLayout) == null ? void 0 : at.call(this, e);
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
    const Y = A.type || "", at = {
      fixed: !1,
      flex: !1,
      width: r,
      minWidth: o,
      maxWidth: a,
      ...A,
      type: Y
    }, I = {
      name: at.name,
      type: Y,
      setting: at,
      flex: 0,
      left: 0,
      width: at.width || 0,
      realWidth: 0,
      visible: !0,
      index: d.length
    };
    t.forEach((ya) => {
      var wa, va;
      const ys = (wa = ya.colTypes) == null ? void 0 : wa[Y];
      if (ys) {
        const ba = typeof ys == "function" ? ys(I) : ys;
        ba && Object.assign(at, ba, A);
      }
      (va = ya.onAddCol) == null || va.call(this, I);
    });
    const { fixed: Ue, flex: je, width: vn = r } = at;
    I.flex = Ue ? 0 : je === !0 ? 1 : typeof je == "number" ? je : 0, I.width = Jd(vn < 1 ? Math.round(vn * i) : vn, at.minWidth, at.maxWidth), I.realWidth = I.realWidth || I.width, Ue === "left" ? (I.left = p, p += I.width, c.push(I)) : Ue === "right" ? (I.left = m, m += I.width, h.push(I)) : (I.left = w, w += I.width, l.push(I)), I.flex && u.push(I), d.push(I), f[I.name] = I;
  });
  const g = p + w + m;
  s === "auto" && (i = g);
  const { data: v, rowKey: x = "id", rowHeight: k } = e, $ = [], N = (A, Y, at) => {
    var Ue, je;
    const I = { data: at ?? { [x]: A }, id: A, index: $.length, top: 0 };
    if (at || (I.lazy = !0), $.push(I), ((Ue = e.onAddRow) == null ? void 0 : Ue.call(this, I, Y)) !== !1) {
      for (const vn of t)
        if (((je = vn.onAddRow) == null ? void 0 : je.call(this, I, Y)) === !1)
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
  let R = $;
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
  let j = e.height, B = 0;
  const H = R.length * k, V = W + U + H;
  if (typeof j == "function" && (j = j.call(this, V)), j === "auto")
    B = V;
  else if (typeof j == "object")
    B = Math.min(j.max, Math.max(j.min, V));
  else if (j === "100%") {
    const { parent: A } = this;
    if (A)
      B = A.clientHeight;
    else {
      B = 0, K(this, Le, !0);
      return;
    }
  } else
    B = j;
  const gt = B - W - U, ve = i - p - m, $t = {
    options: e,
    allRows: $,
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
  }, ee = (Fe = e.onLayout) == null ? void 0 : Fe.call(this, $t);
  ee && Object.assign($t, ee), t.forEach((A) => {
    if (A.onLayout) {
      const Y = A.onLayout.call(this, $t);
      Y && Object.assign($t, Y);
    }
  }), K(this, Ct, $t);
};
to = /* @__PURE__ */ new WeakSet();
Yh = function() {
  (Bt(this, da, qh).call(this) || !S(this, Ct)) && Bt(this, pa, Gh).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: e } = this.state;
  const { flexCols: n, colsInfo: { scrollCols: s, scrollWidth: i, scrollColsWidth: r } } = t;
  if (n.length) {
    const g = i - r;
    if (g > 0) {
      const v = n.reduce((k, $) => k + $.flex, 0);
      let x = 0;
      n.forEach((k) => {
        const $ = Math.min(g - x, Math.ceil(g * (k.flex / v)));
        k.realWidth = $ + k.width, x += k.realWidth;
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
ma.addPlugin = Oh;
ma.removePlugin = Hh;
function al(t, e) {
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
      al(this, s);
    },
    mouseleave() {
      al(this, !1);
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
function vi(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const o = vi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? vi.call(this, e.parent).level + 1 : 0, e;
}
function up(t) {
  return t !== void 0 ? vi.call(this, t) : this.data.nestedMap;
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
    getNestedRowInfo: vi
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
  return /* @__PURE__ */ y("a", { href: ft(i, e.row.data), ...s, ...r, children: n });
}
function ga(t, e, n) {
  var s;
  if (t != null)
    return n = n ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof t == "function" ? t(n, e) : ft(t, n);
}
function nu(t, e, n, s) {
  var i;
  return n = n ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), t === !1 ? n : (t === !0 && (t = "[yyyy-]MM-dd hh:mm"), typeof t == "function" && (t = t(n, e)), Rr(n, t, s));
}
function su(t, e) {
  const { link: n } = e.col.setting, s = eu(n, e, t[0]);
  return s && (t[0] = s), t;
}
function iu(t, e) {
  const { format: n } = e.col.setting;
  return n && (t[0] = ga(n, e, t[0])), t;
}
function ru(t, e) {
  const { map: n } = e.col.setting;
  return typeof n == "function" ? t[0] = n(t[0], e) : typeof n == "object" && n && (t[0] = n[t[0]] ?? t[0]), t;
}
function Bn(t, e, n = "[yyyy-]MM-dd hh:mm") {
  const { format: s = n, invalidDate: i } = e.col.setting;
  return t[0] = nu(s, e, t[0], i), t;
}
function eo(t, e, n = !1) {
  const { html: s = n } = e.col.setting;
  if (s === !1)
    return t;
  const i = t[0], r = s === !0 ? i : ga(s, e, i);
  return t[0] = {
    html: r
  }, t;
}
const mp = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t, e) {
        return eo(t, e, !0);
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
        return Bn(t, e, "[yyyy-]MM-dd hh:mm");
      }
    },
    date: {
      onRenderCell(t, e) {
        return Bn(t, e, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(t, e) {
        return Bn(t, e, "hh:mm");
      }
    }
  },
  onRenderCell(t, e) {
    const { formatDate: n, html: s } = e.col.setting;
    return n && (t = Bn(t, e, n)), t = ru(t, e), t = iu(t, e), s ? t = eo(t, e) : t = su(t, e), t;
  }
}, gp = ze(mp, { buildIn: !0 });
function lr(t, { row: e, col: n }) {
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
  if (t[0] = /* @__PURE__ */ y(Oc, { ...f }), n.type === "avatarBtn") {
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
      onRenderCell: lr
    },
    avatarBtn: {
      onRenderCell: lr
    },
    avatarName: {
      onRenderCell: lr
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
        t[0] = /* @__PURE__ */ y("a", { href: ft(a, { ...n.setting, sortType: o }), ...c, children: t[0] });
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
  renderDatetimeCell: Bn,
  renderFormat: ga,
  renderFormatCell: iu,
  renderHtmlCell: eo,
  renderLink: eu,
  renderLinkCell: su,
  renderMapCell: ru,
  rich: gp,
  sortType: vp
}, Symbol.toStringTag, { value: "Module" }));
class _s extends ot {
}
_s.NAME = "DTable";
_s.Component = ma;
_s.definePlugin = ze;
_s.removePlugin = Hh;
_s.plugins = bp;
var ou = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, xe = (t, e, n) => (ou(t, e, "read from private field"), n ? n.call(t) : e.get(t)), xp = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ll = (t, e, n, s) => (ou(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), wt;
const cl = "nav-tabs";
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
    n.startsWith("#") && ll(this, wt, _(n)[0]), this.addActive(e.closest(`.${cl}`)[0], e.parent()[0]), xe(this, wt) && (this.addActive(_(xe(this, wt))[0], xe(this, wt)), xe(this, wt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && ll(this, wt, _(n)[0]), xe(this, wt) && (this.addActive(xe(this, wt).parentElement, xe(this, wt)), this.addActive(e.closest(`.${cl}`)[0], e.parent()[0]));
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
  lc as ActionMenu,
  uc as ActionMenuNested,
  Yd as AjaxForm,
  Hc as Avatar,
  Bc as BtnGroup,
  Dt as Component,
  ot as ComponentFromReact,
  Tt as ContextMenu,
  yo as CustomRender,
  _s as DTable,
  Dh as Dashboard,
  de as Dropdown,
  Ic as EventBus,
  af as HElement,
  Vl as HtmlContent,
  fc as Menu,
  Ro as Messager,
  Wo as Modal,
  we as ModalBase,
  qc as ModalTrigger,
  Yc as Nav,
  au as NavTabs,
  Kc as Pager,
  rh as Picker,
  Dc as ProgressCircle,
  G as ReactComponent,
  Pc as Switch,
  zt as TIME_DAY,
  oh as Toolbar,
  Nt as Tooltip,
  Mh as ajaxSubmit,
  Qa as calculateTimestamp,
  _ as cash,
  M as classes,
  $p as convertBytes,
  dt as createDate,
  ff as createPortal,
  Xt as createRef,
  Cp as dom,
  Sp as formatBytes,
  Rr as formatDate,
  Up as formatDateSpan,
  ft as formatString,
  Tl as getClassList,
  jp as getTimeBeforeDesc,
  rt as h,
  Ep as hh,
  of as htm,
  Kt as i18n,
  Fp as isDBY,
  Zi as isObject,
  ms as isSameDay,
  md as isSameMonth,
  Op as isSameWeek,
  Tr as isSameYear,
  Hp as isToday,
  zp as isTomorrow,
  it as isValidElement,
  Bp as isYesterday,
  hr as mergeDeep,
  Ya as nativeEvents,
  ts as render,
  cf as renderCustomResult,
  fr as renderIcon,
  td as store,
  Rl as storeData,
  tf as takeData
};
