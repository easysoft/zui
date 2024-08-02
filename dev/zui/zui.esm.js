var bn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var ot = (s, t, e) => (bn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), lt = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, mt = (s, t, e, n) => (bn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var wn = (s, t, e) => (bn(s, t, "access private method"), e);
const Pu = "3.0.0", Ru = 1722577250753, Ht = document, Es = window, Hr = Ht.documentElement, de = Ht.createElement.bind(Ht), Wr = de("div"), Cn = de("table"), Ja = de("tbody"), ar = de("tr"), { isArray: Xs, prototype: jr } = Array, { concat: Za, filter: oi, indexOf: Br, map: Vr, push: Xa, slice: Ur, some: ai, splice: Qa } = jr, tl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, el = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, sl = /<.+>/, nl = /^\w+$/;
function li(s, t) {
  const e = il(t);
  return !s || !e && !le(t) && !X(t) ? [] : !e && el.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && nl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class Qs {
  constructor(t, e) {
    if (!t)
      return;
    if (Ln(t))
      return t;
    let n = t;
    if (nt(t)) {
      const i = e || Ht;
      if (n = tl.test(t) && le(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : sl.test(t) ? Gr(t) : Ln(i) ? i.find(t) : nt(i) ? d(i).find(t) : li(t, i), !n)
        return;
    } else if (fe(t))
      return this.ready(t);
    (n.nodeType || n === Es) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new Qs(t, e);
  }
}
const C = Qs.prototype, d = C.init;
d.fn = d.prototype = C;
C.length = 0;
C.splice = Qa;
typeof Symbol == "function" && (C[Symbol.iterator] = jr[Symbol.iterator]);
function Ln(s) {
  return s instanceof Qs;
}
function ke(s) {
  return !!s && s === s.window;
}
function le(s) {
  return !!s && s.nodeType === 9;
}
function il(s) {
  return !!s && s.nodeType === 11;
}
function X(s) {
  return !!s && s.nodeType === 1;
}
function rl(s) {
  return !!s && s.nodeType === 3;
}
function ol(s) {
  return typeof s == "boolean";
}
function fe(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function ft(s) {
  return s === void 0;
}
function Ke(s) {
  return s === null;
}
function Kr(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function ci(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
d.isWindow = ke;
d.isFunction = fe;
d.isArray = Xs;
d.isNumeric = Kr;
d.isPlainObject = ci;
function Q(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (ci(s)) {
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
d.each = Q;
C.each = function(s) {
  return Q(this, s);
};
C.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function $s(...s) {
  const t = ol(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return $s(t, d, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (Xs(r[o]) || ci(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), $s(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
d.extend = $s;
C.extend = function(s) {
  return $s(C, s);
};
const al = /\S+/g;
function tn(s) {
  return nt(s) ? s.match(al) || [] : [];
}
C.toggleClass = function(s, t) {
  const e = tn(s), n = !ft(t);
  return this.each((i, r) => {
    X(r) && Q(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(s) {
  return this.toggleClass(s, !0);
};
C.removeAttr = function(s) {
  const t = tn(s);
  return this.each((e, n) => {
    X(n) && Q(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function ll(s, t) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return Ke(e) ? void 0 : e;
      }
      return ft(t) ? this : Ke(t) ? this.removeAttr(s) : this.each((e, n) => {
        X(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
C.attr = ll;
C.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
C.hasClass = function(s) {
  return !!s && ai.call(this, (t) => X(t) && t.classList.contains(s));
};
C.get = function(s) {
  return ft(s) ? Ur.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
C.eq = function(s) {
  return d(this.get(s));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function cl(s) {
  return ft(s) ? this.get().map((t) => X(t) || rl(t) ? t.textContent : "").join("") : this.each((t, e) => {
    X(e) && (e.textContent = s);
  });
}
C.text = cl;
function Wt(s, t, e) {
  if (!X(s))
    return;
  const n = Es.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function At(s, t) {
  return parseInt(Wt(s, t), 10) || 0;
}
function lr(s, t) {
  return At(s, `border${t ? "Left" : "Top"}Width`) + At(s, `padding${t ? "Left" : "Top"}`) + At(s, `padding${t ? "Right" : "Bottom"}`) + At(s, `border${t ? "Right" : "Bottom"}Width`);
}
const Sn = {};
function hl(s) {
  if (Sn[s])
    return Sn[s];
  const t = de(s);
  Ht.body.insertBefore(t, null);
  const e = Wt(t, "display");
  return Ht.body.removeChild(t), Sn[s] = e !== "none" ? e : "block";
}
function cr(s) {
  return Wt(s, "display") === "none";
}
function qr(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function en(s) {
  return nt(s) ? (t, e) => qr(e, s) : fe(s) ? s : Ln(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
C.filter = function(s) {
  const t = en(s);
  return d(oi.call(this, (e, n) => t.call(e, n, e)));
};
function Qt(s, t) {
  return t ? s.filter(t) : s;
}
C.detach = function(s) {
  return Qt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const ul = /^\s*<(\w+)[^>]*>/, dl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, hr = {
  "*": Wr,
  tr: Ja,
  td: ar,
  th: ar,
  thead: Cn,
  tbody: Cn,
  tfoot: Cn
};
function Gr(s) {
  if (!nt(s))
    return [];
  if (dl.test(s))
    return [de(RegExp.$1)];
  const t = ul.test(s) && RegExp.$1, e = hr[t] || hr["*"];
  return e.innerHTML = s, d(e.childNodes).detach().get();
}
d.parseHTML = Gr;
C.has = function(s) {
  const t = nt(s) ? (e, n) => li(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
C.not = function(s) {
  const t = en(s);
  return this.filter((e, n) => (!nt(s) || X(n)) && !t.call(n, e, n));
};
function Bt(s, t, e, n) {
  const i = [], r = fe(t), o = n && en(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Xa.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Yr(s) {
  return s.multiple && s.options ? Bt(oi.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function fl(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || no.test(e.type)) {
      const i = Xs(s) ? Vr.call(s, String) : Ke(s) ? [] : [String(s)];
      n ? Q(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ft(s) || Ke(s) ? "" : s;
  }) : this[0] && Yr(this[0]);
}
C.val = fl;
C.is = function(s) {
  const t = en(s);
  return ai.call(this, (e, n) => t.call(e, n, e));
};
d.guid = 1;
function Rt(s) {
  return s.length > 1 ? oi.call(s, (t, e, n) => Br.call(n, t) === e) : s;
}
d.unique = Rt;
C.add = function(s, t) {
  return d(Rt(this.get().concat(d(s, t).get())));
};
C.children = function(s) {
  return Qt(d(Rt(Bt(this, (t) => t.children))), s);
};
C.parent = function(s) {
  return Qt(d(Rt(Bt(this, "parentNode"))), s);
};
C.index = function(s) {
  const t = s ? d(s)[0] : this[0], e = s ? this : d(t).parent().children();
  return Br.call(e, t);
};
C.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
C.siblings = function(s) {
  return Qt(d(Rt(Bt(this, (t) => d(t).parent().children().not(t)))), s);
};
C.find = function(s) {
  return d(Rt(Bt(this, (t) => li(s, t))));
};
const pl = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gl = /^$|^module$|\/(java|ecma)script/i, ml = ["type", "src", "nonce", "noModule"];
function _l(s, t) {
  const e = d(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (gl.test(i.type) && Hr.contains(i)) {
      const r = de("script");
      r.text = i.textContent.replace(pl, ""), Q(ml, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function yl(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && _l(t, s.ownerDocument);
}
function te(s, t, e, n, i, r, o, a) {
  return Q(s, (l, c) => {
    Q(d(c), (u, h) => {
      Q(d(t), (p, f) => {
        const m = e ? h : f, _ = e ? f : h, y = e ? u : p;
        yl(m, y ? _.cloneNode(!0) : _, n, i, !y);
      }, a);
    }, o);
  }, r), t;
}
C.after = function() {
  return te(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return te(arguments, this, !1, !1, !0);
};
function vl(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ft(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    X(n) && (t ? d(n).empty().append(s) : n.innerHTML = s);
  });
}
C.html = vl;
C.appendTo = function(s) {
  return te(arguments, this, !0, !1, !0);
};
C.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = d(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
C.before = function() {
  return te(arguments, this, !1, !0);
};
C.wrapAll = function(s) {
  let t = d(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
C.wrap = function(s) {
  return this.each((t, e) => {
    const n = d(s)[0];
    d(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
C.insertAfter = function(s) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(s) {
  return te(arguments, this, !0, !0);
};
C.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(s) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return d(Rt(Bt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
C.next = function(s, t, e) {
  return Qt(d(Rt(Bt(this, "nextElementSibling", t, e))), s);
};
C.nextAll = function(s) {
  return this.next(s, !0);
};
C.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
C.parents = function(s, t) {
  return Qt(d(Rt(Bt(this, "parentElement", !0, t))), s);
};
C.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
C.prev = function(s, t, e) {
  return Qt(d(Rt(Bt(this, "previousElementSibling", t, e))), s);
};
C.prevAll = function(s) {
  return this.prev(s, !0);
};
C.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
C.map = function(s) {
  return d(Za.apply([], Vr.call(this, (t, e) => s.call(t, e, t))));
};
C.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Wt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Hr;
  });
};
C.slice = function(s, t) {
  return d(Ur.call(this, s, t));
};
const bl = /-([a-z])/g;
function hi(s) {
  return s.replace(bl, (t, e) => e.toUpperCase());
}
C.ready = function(s) {
  const t = () => setTimeout(s, 0, d);
  return Ht.readyState !== "loading" ? t() : Ht.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = d(t);
    e.replaceWith(e.children());
  }), this;
};
C.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Es.pageYOffset,
    left: t.left + Es.pageXOffset
  };
};
C.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Wt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Wt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && X(i)) {
      const r = d(i).offset();
      e.top -= r.top + At(i, "borderTopWidth"), e.left -= r.left + At(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - At(s, "marginTop"),
    left: e.left - At(s, "marginLeft")
  };
};
const Jr = {
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
C.prop = function(s, t) {
  if (s) {
    if (nt(s))
      return s = Jr[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
C.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Jr[s] || s];
  });
};
const wl = /^--/;
function ui(s) {
  return wl.test(s);
}
const kn = {}, { style: Cl } = Wr, Sl = ["webkit", "moz", "ms"];
function kl(s, t = ui(s)) {
  if (t)
    return s;
  if (!kn[s]) {
    const e = hi(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Sl.join(`${n} `)}${n}`.split(" ");
    Q(i, (r, o) => {
      if (o in Cl)
        return kn[s] = o, !1;
    });
  }
  return kn[s];
}
const xl = {
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
function Zr(s, t, e = ui(s)) {
  return !e && !xl[s] && Kr(t) ? `${t}px` : t;
}
function Tl(s, t) {
  if (nt(s)) {
    const e = ui(s);
    return s = kl(s, e), arguments.length < 2 ? this[0] && Wt(this[0], s, e) : s ? (t = Zr(s, t, e), this.each((n, i) => {
      X(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
C.css = Tl;
function Xr(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const Nl = /^\s+|\s+$/;
function ur(s, t) {
  const e = s.dataset[t] || s.dataset[hi(t)];
  return Nl.test(e) ? e : Xr(JSON.parse, e);
}
function El(s, t, e) {
  e = Xr(JSON.stringify, e), s.dataset[hi(t)] = e;
}
function $l(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = ur(this[0], n);
    return e;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && ur(this[0], s) : ft(t) ? this : this.each((e, n) => {
      El(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
C.data = $l;
function Qr(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Q([!0, !1], (s, t) => {
  Q(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    C[i] = function(r) {
      if (this[0])
        return ke(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : le(this[0]) ? Qr(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? At(this[0], `margin${e ? "Top" : "Left"}`) + At(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Q(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  C[e] = function(n) {
    if (!this[0])
      return ft(n) ? void 0 : this;
    if (!arguments.length)
      return ke(this[0]) ? this[0].document.documentElement[`client${t}`] : le(this[0]) ? Qr(this[0], t) : this[0].getBoundingClientRect()[e] - lr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Wt(o, "boxSizing");
      o.style[e] = Zr(e, i + (a === "border-box" ? lr(o, !s) : 0));
    });
  };
});
const dr = "___cd";
C.toggle = function(s) {
  return this.each((t, e) => {
    if (!X(e))
      return;
    const n = cr(e);
    (ft(s) ? n : s) ? (e.style.display = e[dr] || "", cr(e) && (e.style.display = hl(e.tagName))) : n || (e[dr] = Wt(e, "display"), e.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const fr = "___ce", di = ".", fi = { focus: "focusin", blur: "focusout" }, to = { mouseenter: "mouseover", mouseleave: "mouseout" }, Al = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function pi(s) {
  return to[s] || fi[s] || s;
}
function gi(s) {
  const t = s.split(di);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(s, t) {
  if (nt(s)) {
    const [n, i] = gi(s), r = pi(n);
    if (!r)
      return this;
    const o = Al.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Ht.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(di), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in fi;
  return this.each((n, i) => {
    e && fe(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function eo(s) {
  return s[fr] = s[fr] || {};
}
function Ml(s, t, e, n, i) {
  const r = eo(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function so(s, t) {
  return !t || !ai.call(t, (e) => s.indexOf(e) < 0);
}
function As(s, t, e, n, i) {
  const r = eo(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !so(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      As(s, t, e, n, i);
}
C.off = function(s, t, e) {
  if (ft(s))
    this.each((n, i) => {
      !X(i) && !le(i) && !ke(i) || As(i);
    });
  else if (nt(s))
    fe(t) && (e = t, t = ""), Q(tn(s), (n, i) => {
      const [r, o] = gi(i), a = pi(r);
      this.each((l, c) => {
        !X(c) && !le(c) && !ke(c) || As(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
C.remove = function(s) {
  return Qt(this, s).detach().off(), this;
};
C.replaceWith = function(s) {
  return this.before(s).remove();
};
C.replaceAll = function(s) {
  return d(s).replaceWith(this), this;
};
function Il(s, t, e, n, i) {
  if (!nt(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return nt(t) || (ft(t) || Ke(t) ? t = "" : ft(e) ? (e = t, t = "") : (n = e, e = t, t = "")), fe(n) || (n = e, e = void 0), n ? (Q(tn(s), (r, o) => {
    const [a, l] = gi(o), c = pi(a), u = a in to, h = a in fi;
    c && this.each((p, f) => {
      if (!X(f) && !le(f) && !ke(f))
        return;
      const m = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !so(l, _.namespace.split(di)) || !t && (h && (_.target !== f || _.___ot === c) || u && _.relatedTarget && f.contains(_.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let b = _.target;
          for (; !qr(b, t); )
            if (b === f || (b = b.parentNode, !b))
              return;
          y = b;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const v = n.call(y, _, _.___td);
        i && As(f, c, l, t, m), v === !1 && (_.preventDefault(), _.stopPropagation());
      };
      m.guid = n.guid = n.guid || d.guid++, Ml(f, c, l, t, m);
    });
  }), this) : this;
}
C.on = Il;
function Pl(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
C.one = Pl;
const Rl = /\r?\n/g;
function Dl(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(Rl, `\r
`))}`;
}
const Ll = /file|reset|submit|button|image/i, no = /radio|checkbox/i;
C.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Q(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Ll.test(i.type) || no.test(i.type) && !i.checked)
        return;
      const r = Yr(i);
      if (!ft(r)) {
        const o = Xs(r) ? r : [r];
        Q(o, (a, l) => {
          s += Dl(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = d;
function zl(s, t) {
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
function io(s, t, e) {
  try {
    const n = zl(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function q(s, ...t) {
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
var mi = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(mi || {});
function Dt(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / mi[e]).toFixed(t) + e);
}
const gs = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * mi[n];
};
let _i = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ft;
function Ol() {
  return _i;
}
function Fl(s) {
  _i = s.toLowerCase().replace("-", "_");
}
function ro(s, t) {
  Ft || (Ft = {}), typeof s == "string" && (s = { [s]: t ?? {} }), d.extend(!0, Ft, s);
}
function H(s, t, e, n, i, r) {
  Array.isArray(s) ? Ft && s.unshift(Ft) : s = Ft ? [Ft, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || _i;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === Ft ? `${r}.${t}` : t;
    if (a = io(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Hl(s, t, e, n) {
  return H(void 0, s, t, e, n);
}
H.addLang = ro;
H.getLang = Hl;
H.getCode = Ol;
H.setCode = Fl;
H.map = Ft;
ro({
  zh_cn: {
    confirm: "确定",
    save: "保存",
    cancel: "取消",
    delete: "删除",
    reset: "重置",
    add: "添加",
    copy: "复制",
    close: "关闭"
  },
  zh_tw: {
    confirm: "確定",
    save: "儲存",
    cancel: "取消",
    delete: "刪除",
    reset: "重置",
    add: "添加",
    Copy: "複製",
    close: "關閉"
  },
  en: {
    confirm: "Confirm",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    reset: "Reset",
    add: "Add",
    copy: "Copy",
    close: "Close"
  }
});
function pr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function be(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => be(s, t, n)) : !(e instanceof Blob) && d.isPlainObject(e) ? Object.entries(e).forEach(([n, i]) => {
    be(s, `${t}[${n}]`, i);
  }) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Wl(s, t) {
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
function jl(s, t) {
  const e = t || new FormData();
  return s && (typeof s == "string" && (s = new URLSearchParams(s)), s instanceof URLSearchParams ? s.forEach((n, i) => {
    be(e, i, n);
  }) : Array.isArray(s) ? s.forEach(([n, i]) => {
    be(e, n, i);
  }) : s instanceof FormData ? s.forEach((n, i) => {
    be(e, i, n);
  }) : d.isPlainObject(s) && Object.entries(s).forEach(([n, i]) => {
    be(e, n, i);
  })), e;
}
class oo {
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
      dataFilter: u,
      beforeSend: h,
      success: p,
      error: f,
      complete: m,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let y = n;
    y && (i && (y = jl(y)), _.body = y), o && (_.mode = "cors");
    const v = _.headers || {};
    pr(v, "X-Requested-With", "XMLHttpRequest"), r && pr(v, "Content-Type", r), _.headers = v, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), f && this.fail(f), m && this.complete(m), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n.call(this, ...e);
    });
  }
  async send() {
    var u;
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: r, jsonParser: o } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let a, l, c;
    try {
      a = await fetch(this.url, this.request), this.response = a;
      const { statusText: h } = a;
      if (a.ok) {
        const p = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), f = p ? "blob" : e || Wl(a.headers.get("Content-Type"), n);
        p || f === "blob" || f === "file" ? c = await a.blob() : f === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const m = (i == null ? void 0 : i(c, f)) ?? c;
        this._emit("success", m, h, a);
      } else
        throw this.data = await a.text(), new Error(h);
    } catch (h) {
      l = h;
      let p = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : p = !0), this.error = l, p || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
d.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : d.extend(t, s);
  const e = new oo(t);
  return e.send(), e;
};
d.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), d.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
d.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, d.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
d.post = (s, t, e, n) => d.get(s, t, e, n, "POST");
d.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return d.get(n, t, (r, o, a) => {
    i && (r = d(r).find(i).html()), d(this).html(r).zuiInit(), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function yi(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    d.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    return o instanceof Promise ? await o : o;
  }
  e && d.extend(n, typeof e == "function" ? e(n) : e);
  const i = new oo(n), [r] = await i.send();
  return r;
}
function Du(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
d.fetch = yi;
function ut() {
  return d.guid++;
}
function zn(s, t) {
  if (s === t)
    return !1;
  if (s && t) {
    const e = typeof s, n = typeof t;
    if (e !== n)
      return !0;
    if (e === "object" && n === "object") {
      const i = Array.isArray(s), r = Array.isArray(t);
      if (i !== r)
        return !0;
      if (i && r) {
        if (s.length !== t.length)
          return !0;
        for (let l = 0; l < s.length; l++)
          if (zn(s[l], t[l]))
            return !0;
        return !0;
      }
      const o = Object.keys(s), a = Object.keys(t);
      if (o.length !== a.length)
        return !0;
      for (const l of o)
        if (zn(s[l], t[l]))
          return !0;
      return !0;
    }
    if (e === "function" && n === "function")
      return s.toString() !== t.toString();
  }
  return !0;
}
class Ms {
  /**
   * Creates a new Computed instance.
   * @param compute      The function that computes the value.
   * @param dependencies The dependencies of the computed value.
   */
  constructor(t, e) {
    this._compute = t, this._dependencies = e;
  }
  /**
   * Gets the computed value.
   */
  get value() {
    return this.compute();
  }
  /**
   * Gets the cached value of the computed value.
   */
  get cache() {
    return this._lastDependencies ? this._value : this.compute();
  }
  /**
   * Forces the computed value to be recomputed.
   * @param dependencies The new dependencies to use for recomputing the value.
   * @returns The recomputed value.
   */
  forceCompute(t) {
    return this._lastDependencies = void 0, this.compute(t);
  }
  /**
   * Computes the value of the computed value.
   * @param dependencies The dependencies to use for computing the value.
   * @returns The computed value.
   */
  compute(t) {
    t !== void 0 && (this._dependencies = t), t = this._dependencies, typeof t == "function" && (t = t());
    const e = this._lastDependencies;
    return (!e || t.some((n, i) => zn(n instanceof Ms ? n.value : n, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((n) => n instanceof Ms ? n.cache : n)), this._value;
  }
}
function ao(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ao(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const T = (...s) => ao(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
d.classes = T;
d.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = d(n);
    s === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(s, ...t));
  });
};
const we = /* @__PURE__ */ new WeakMap();
function vi(s, t, e) {
  const n = we.has(s), i = n ? we.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, d(s).dataset(), i), we.set(s, i)) : we.delete(s);
}
function bi(s, t, e) {
  let n = we.get(s) || {};
  return e && s instanceof Element && (n = Object.assign({}, d(s).dataset(), n)), t === void 0 ? n : n[t];
}
function Lu(s) {
  we.delete(s);
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...s) {
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? this.length ? bi(this[0], t, !0) : void 0 : this.each((n, i) => vi(i, t, e));
};
d.fn.removeData = function(s = null) {
  return this.each((t, e) => vi(e, s));
};
function qe(s, ...t) {
  return s.includes("RAWJS") && (s = s.split('"RAWJS<').join("").split('>RAWJS"').join("").split("<RAWJS_QUOTE>").join('"').split("<RAWJS_LINE>").join(`
`)), new Function(`return ${s}`)(...t);
}
function zu(s, ...t) {
  return s.includes("RAWJS") ? qe(s, ...t) : JSON.parse(s);
}
function Ge(s, t) {
  const e = d(s)[0];
  if (!e)
    return;
  const { prefix: n, getter: i, evalValue: r, json: o = !0, evalArgs: a = [] } = {
    prefix: "z-",
    ...typeof t == "string" ? { prefix: t } : t
  }, l = Array.isArray(r) ? new Set(r) : void 0;
  return Array.from(e.attributes).reduce((c, u) => {
    let { name: h } = u;
    const { value: p } = u;
    let f = p;
    if (h.startsWith(n)) {
      if (h = h.slice(n.length).replace(/-([a-z])/g, (m) => m[1].toUpperCase()), i)
        f = i(h, p);
      else
        try {
          r && (!l || l.has(h)) || r === void 0 && p.includes("RAWJS") ? f = qe(p, ...a) : o && (f = JSON.parse(p));
        } catch {
        }
      c[h] = f;
    }
    return c;
  }, {});
}
function gr(s, t, e = "z-") {
  const n = d(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function Bl(...s) {
  var e;
  const t = s.length;
  if (!t)
    return Ge(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = Ge(this)) == null ? void 0 : e[n] : (d.isPlainObject(n) && gr(this, n), this);
  }
  return gr(this, { [s[0]]: s[1] }), this;
}
d.fn.z = Bl;
d.fn._attr = d.fn.attr;
d.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
d.Event || (d.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
});
const Is = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), Vl = {};
d.share = Vl;
var sn, W, lo, Ct, ie, mr, co, On, wi, Fn, Hn, Ye = {}, ho = [], Ul = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, nn = Array.isArray;
function Gt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function uo(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function _t(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? sn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return ws(s, o, n, i, null);
}
function ws(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++lo, __i: -1, __u: 0 };
  return i == null && W.vnode != null && W.vnode(r), r;
}
function Z() {
  return { current: null };
}
function Ee(s) {
  return s.children;
}
function B(s, t) {
  this.props = s, this.context = t;
}
function ce(s, t) {
  if (t == null)
    return s.__ ? ce(s.__, s.__i + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ce(s) : null;
}
function fo(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return fo(s);
  }
}
function _r(s) {
  (!s.__d && (s.__d = !0) && ie.push(s) && !Ps.__r++ || mr !== W.debounceRendering) && ((mr = W.debounceRendering) || co)(Ps);
}
function Ps() {
  var s, t, e, n, i, r, o, a;
  for (ie.sort(On); s = ie.shift(); )
    s.__d && (t = ie.length, n = void 0, r = (i = (e = s).__v).__e, o = [], a = [], e.__P && ((n = Gt({}, i)).__v = i.__v + 1, W.vnode && W.vnode(n), Ci(e.__P, n, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, o, r ?? ce(i), !!(32 & i.__u), a), n.__v = i.__v, n.__.__k[n.__i] = n, mo(o, n, a), n.__e != r && fo(n)), ie.length > t && ie.sort(On));
  Ps.__r = 0;
}
function po(s, t, e, n, i, r, o, a, l, c, u) {
  var h, p, f, m, _, y = n && n.__k || ho, v = t.length;
  for (e.__d = l, Kl(e, t, y), l = e.__d, h = 0; h < v; h++)
    (f = e.__k[h]) != null && typeof f != "boolean" && typeof f != "function" && (p = f.__i === -1 ? Ye : y[f.__i] || Ye, f.__i = h, Ci(s, f, p, i, r, o, a, l, c, u), m = f.__e, f.ref && p.ref != f.ref && (p.ref && Si(p.ref, null, f), u.push(f.ref, f.__c || m, f)), _ == null && m != null && (_ = m), 65536 & f.__u || p.__k === f.__k ? (l && typeof f.type == "string" && !s.contains(l) && (l = ce(p)), l = go(f, l, s)) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : m && (l = m.nextSibling), f.__d = void 0, f.__u &= -196609);
  e.__d = l, e.__e = _;
}
function Kl(s, t, e) {
  var n, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (s.__k = [], n = 0; n < l; n++)
    o = n + h, (i = s.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? ws(null, i, null, null, null) : nn(i) ? ws(Ee, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? ws(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = s, i.__b = s.__b + 1, a = ql(i, e, o, u), i.__i = a, r = null, a !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a == o - 1 ? h = a - o : a == o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : a < o && h++, a !== n + h && (i.__u |= 65536))) : (r = e[o]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ce(r)), Wn(r, r, !1), e[o] = null, u--);
  if (u)
    for (n = 0; n < c; n++)
      (r = e[n]) != null && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ce(r)), Wn(r, r));
}
function go(s, t, e) {
  var n, i;
  if (typeof s.type == "function") {
    for (n = s.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = s, t = go(n[i], t, e));
    return t;
  }
  s.__e != t && (e.insertBefore(s.__e, t || null), t = s.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Rs(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (nn(s) ? s.some(function(e) {
    Rs(e, t);
  }) : t.push(s)), t;
}
function ql(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type && !(131072 & l.__u))
    return e;
  if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; o >= 0 || a < t.length; ) {
      if (o >= 0) {
        if ((l = t[o]) && !(131072 & l.__u) && i == l.key && r === l.type)
          return o;
        o--;
      }
      if (a < t.length) {
        if ((l = t[a]) && !(131072 & l.__u) && i == l.key && r === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function yr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Ul.test(t) ? e : e + "px";
}
function ms(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || yr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || yr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in s || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n ? e.u = n.u : (e.u = wi, s.addEventListener(t, r ? Hn : Fn, r)) : s.removeEventListener(t, r ? Hn : Fn, r);
    else {
      if (i == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, t == "popover" && e == 1 ? "" : e));
    }
}
function vr(s) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + s];
      if (t.t == null)
        t.t = wi++;
      else if (t.t < e.u)
        return;
      return e(W.event ? W.event(t) : t);
    }
  };
}
function Ci(s, t, e, n, i, r, o, a, l, c) {
  var u, h, p, f, m, _, y, v, b, S, w, k, N, M, $, A, x = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = W.__b) && u(t);
  t:
    if (typeof x == "function")
      try {
        if (v = t.props, b = "prototype" in x && x.prototype.render, S = (u = x.contextType) && n[u.__c], w = u ? S ? S.props.value : u.__ : n, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : (b ? t.__c = h = new x(v, w) : (t.__c = h = new B(v, w), h.constructor = x, h.render = Yl), S && S.sub(h), h.props = v, h.state || (h.state = {}), h.context = w, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), b && h.__s == null && (h.__s = h.state), b && x.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Gt({}, h.__s)), Gt(h.__s, x.getDerivedStateFromProps(v, h.__s))), f = h.props, m = h.state, h.__v = t, p)
          b && x.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), b && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (b && x.getDerivedStateFromProps == null && v !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(v, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(v, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = v, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), k = 0; k < h._sb.length; k++)
              h.__h.push(h._sb[k]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(v, h.__s, w), b && h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(f, m, _);
          });
        }
        if (h.context = w, h.props = v, h.__P = s, h.__e = !1, N = W.__r, M = 0, b) {
          for (h.state = h.__s, h.__d = !1, N && N(t), u = h.render(h.props, h.state, h.context), $ = 0; $ < h._sb.length; $++)
            h.__h.push(h._sb[$]);
          h._sb = [];
        } else
          do
            h.__d = !1, N && N(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++M < 25);
        h.state = h.__s, h.getChildContext != null && (n = Gt(Gt({}, n), h.getChildContext())), b && !p && h.getSnapshotBeforeUpdate != null && (_ = h.getSnapshotBeforeUpdate(f, m)), po(s, nn(A = u != null && u.type === Ee && u.key == null ? u.props.children : u) ? A : [A], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (I) {
        t.__v = null, l || r != null ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = e.__e, t.__k = e.__k), W.__e(I, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Gl(e.__e, t, e, n, i, r, o, l, c);
  (u = W.diffed) && u(t);
}
function mo(s, t, e) {
  t.__d = void 0;
  for (var n = 0; n < e.length; n++)
    Si(e[n], e[++n], e[++n]);
  W.__c && W.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      W.__e(r, i.__v);
    }
  });
}
function Gl(s, t, e, n, i, r, o, a, l) {
  var c, u, h, p, f, m, _, y = e.props, v = t.props, b = t.type;
  if (b === "svg" ? i = "http://www.w3.org/2000/svg" : b === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!b && (b ? f.localName === b : f.nodeType === 3)) {
        s = f, r[c] = null;
        break;
      }
  }
  if (s == null) {
    if (b === null)
      return document.createTextNode(v);
    s = document.createElementNS(i, b, v.is && v), r = null, a = !1;
  }
  if (b === null)
    y === v || a && s.data === v || (s.data = v);
  else {
    if (r = r && sn.call(s.childNodes), y = e.props || Ye, !a && r != null)
      for (y = {}, c = 0; c < s.attributes.length; c++)
        y[(f = s.attributes[c]).name] = f.value;
    for (c in y)
      if (f = y[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = f;
        else if (c !== "key" && !(c in v)) {
          if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v)
            continue;
          ms(s, c, null, f, i);
        }
      }
    for (c in v)
      f = v[c], c == "children" ? p = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? m = f : c == "checked" ? _ = f : c === "key" || a && typeof f != "function" || y[c] === f || ms(s, c, f, y[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === s.innerHTML) || (s.innerHTML = u.__html), t.__k = [];
    else if (h && (s.innerHTML = ""), po(s, nn(p) ? p : [p], t, e, n, b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : e.__k && ce(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && uo(r[c]);
    a || (c = "value", m !== void 0 && (m !== s[c] || b === "progress" && !m || b === "option" && m !== y[c]) && ms(s, c, m, y[c], i), c = "checked", _ !== void 0 && _ !== s[c] && ms(s, c, _, y[c], i));
  }
  return s;
}
function Si(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    W.__e(n, e);
  }
}
function Wn(s, t, e) {
  var n, i;
  if (W.unmount && W.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Si(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        W.__e(r, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Wn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || uo(s.__e), s.__c = s.__ = s.__e = s.__d = void 0;
}
function Yl(s, t, e) {
  return this.constructor(s, e);
}
function Ce(s, t, e) {
  var n, i, r, o;
  W.__ && W.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Ci(t, s = (!n && e || t).__k = _t(Ee, null, [s]), i || Ye, Ye, t.namespaceURI, !n && e ? [e] : i ? null : t.firstChild ? sn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), mo(r, s, o);
}
sn = ho.slice, W = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, lo = 0, Ct = function(s) {
  return s != null && s.constructor == null;
}, B.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof s == "function" && (s = s(Gt({}, e), this.props)), s && Gt(e, s), s != null && this.__v && (t && this._sb.push(t), _r(this));
}, B.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), _r(this));
}, B.prototype.render = Ee, ie = [], co = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, On = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Ps.__r = 0, wi = 0, Fn = vr(!1), Hn = vr(!0);
function F(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Rs(r), ...Rs(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = d.extend(r, i))), s[n] = i);
    });
  }), s;
}
function _o(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
function Jl(s, t = !0) {
  const e = d(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = n === document.body || e.is("html") ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
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
d.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    Jl(e, s);
  });
};
d.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function xn(s, t, e) {
  if (!(e.on || "click").split(" ").includes(t.type))
    return;
  const n = e.selector ? d(t.target).closest(e.selector) : s;
  if (!n.length)
    return;
  const i = (c) => c === "" ? !0 : c, r = (c) => {
    if (typeof c == "string")
      try {
        c = JSON.parse(c);
      } catch {
      }
    return c;
  };
  if (i(e.once)) {
    if (e.onceCalled)
      return;
    s.dataset("once-called", !0);
  }
  if (i(e.prevent) && t.preventDefault(), i(e.stop) && t.stopPropagation(), i(e.self) && t.currentTarget !== t.target)
    return;
  const o = [["$element", s], ["event", t], ["options", e], ["$target", n]], a = (c) => typeof c == "function" ? c(...o) : d.runJS(c, ...o);
  if (e.if !== void 0 && !a(e.if))
    return;
  const l = e.call;
  if (l) {
    let c;
    if (typeof l == "string" ? c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(l) ? io(window, l) : a(l) : c = l, typeof c == "function") {
      const u = [], h = e.params;
      e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((p) => (p = p.trim(), p === "$element" ? s : p === "event" ? t : p === "options" ? e : p.startsWith("$element.") || p.startsWith("event.") || p.startsWith("options.") ? a(p) : r(p)))) : Array.isArray(h) ? u.push(...h) : u.push(h), c(...u);
    }
  }
  e.do && a(e.do);
}
function Zl(s) {
  const t = d(this), e = s.type, n = t.attr("zui-on");
  if (n) {
    const [o, a] = n.split("~").map((l) => l.trim());
    o && xn(t, s, d.extend({
      on: o
    }, a ? a.startsWith("{") ? qe(a) : { do: a } : Ge(t, { prefix: "data-", evalValue: ["call", "if", "do"] })));
  }
  const i = t.attr(`zui-on-${e}`);
  i && xn(t, s, d.extend({
    on: e
  }, i.startsWith("{") ? qe(i) : { do: i })), t.attr("data-on") && xn(t, s, Ge(t, { prefix: "data-", evalValue: ["call", "if", "do"] }));
}
function Xl(s) {
  d(document).off(".zui.global").on(s.map((t) => `${t}.zui.global`).join(" "), `[zui-on],${s.map((t) => `[zui-on-${t}]`)},[data-on]`, Zl);
}
Xl(["click", "change", "inited"]);
function yo(s) {
  if (typeof s == "function")
    return yo(s());
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Cs(s) {
  if (s == null)
    return null;
  const [t, e = "px"] = yo(s);
  return Number.isNaN(t) ? typeof s == "string" ? s : null : `${t}${e}`;
}
async function br(s, t) {
  var n, i, r;
  if (s instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(s), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), s;
  }
  if (s instanceof Response) {
    const o = await s.blob();
    return t = t || ((r = (i = (n = s.headers.get("Content-Disposition")) == null ? void 0 : n.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), br(o, t);
  }
  const e = await fetch(s);
  return br(e);
}
class Ql {
  constructor(t) {
    this._$target = d(t);
  }
  on(...t) {
    return this._$target.on(...t), this;
  }
  one(...t) {
    return this._$target.one(...t), this;
  }
  off(...t) {
    return this._$target.off(...t), this;
  }
  trigger(...t) {
    return this._$target.trigger(...t), this;
  }
}
const jt = new Ql(document);
d.bus = jt;
d.on = jt.on.bind(jt);
d.one = jt.one.bind(jt);
d.off = jt.off.bind(jt);
d.trigger = jt.trigger.bind(jt);
var tc = ["Shift", "Meta", "Alt", "Control"], vo = typeof navigator == "object" ? navigator.platform : "", bo = /Mac|iPod|iPhone|iPad/.test(vo), ec = bo ? "Meta" : "Control", sc = vo === "Win32" ? ["Control", "Alt"] : bo ? ["Alt"] : [];
function Tn(s, t) {
  return typeof s.getModifierState == "function" && (s.getModifierState(t) || sc.includes(t) && s.getModifierState("AltGraph"));
}
function nc(s) {
  return s.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), n = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? ec : i;
    }), n];
  });
}
function wo(s, t) {
  var e;
  t === void 0 && (t = {});
  var n = (e = t.timeout) != null ? e : 1e3, i = Object.keys(s).map(function(a) {
    return [nc(a), s[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(p, f) {
        return !(f[1].toUpperCase() !== p.key.toUpperCase() && f[1] !== p.code || f[0].find(function(m) {
          return !Tn(p, m);
        }) || tc.find(function(m) {
          return !f[0].includes(m) && f[1] !== m && Tn(p, m);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : Tn(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), n));
  };
}
function ic(s, t, e) {
  var n;
  e === void 0 && (e = {});
  var i = (n = e.event) != null ? n : "keydown", r = wo(t, e);
  return s.addEventListener(i, r), function() {
    s.removeEventListener(i, r);
  };
}
function Co(s, t = {}) {
  if (!s)
    return;
  const e = Object.keys(t).reduce((n, i) => (t[i].optional || (n[i] = {
    ...t[i]
  }), n), {});
  return Object.keys(s).forEach((n) => {
    const i = s[n];
    i ? i === !0 ? t[n] && (e[n] = {
      ...t[n]
    }) : e[n] = i : delete e[n];
  }), Object.keys(e).reduce((n, i) => {
    const { keys: r, handler: o } = e[i];
    return typeof r == "string" ? n[r] = o : r.forEach((a) => {
      n[a] = o;
    }), n;
  }, {});
}
function So(s, t, e) {
  const { timeout: n, event: i = "keydown", scope: r, when: o } = e || {}, a = wo(t, { timeout: n }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return d(s).on(`${i}${l}`, function(u) {
    o && o(u) === !1 || d(u.target).data(c) || a(u);
  }).on(`compositionstart${l}`, (u) => {
    d(u.target).data(c, !0);
  }).on(`compositionend${l}`, (u) => {
    d(u.target).removeData(c);
  });
}
function ko(s, t) {
  return d(s).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const Ou = ic;
d.fn.hotkeys = function(s, t) {
  return So(this, s, t);
};
d.fn.unbindHotkeys = function(s) {
  return ko(this, s);
};
d.hotkeys = function(s, t) {
  So(window, s, t);
};
d.unbindHotkeys = function(s) {
  ko(window, s);
};
function ki() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function rc(s) {
  (typeof s == "string" || s instanceof Element || s instanceof d) && (s = { target: s });
  const { target: t, onError: e, onSuccess: n, afterExit: i, afterEnter: r } = s, o = d(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), n == null || n.call(a), d(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, d(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const u = ki();
    let h = u;
    u ? d(u).addClass("is-in-fullscreen") : (h = d(document).find(".is-in-fullscreen")[0] || document, d(h).removeClass("is-in-fullscreen")), d("body").toggleClass("has-in-fullscreen", !!u);
    const p = { event: c, target: h, fullscreenElement: u };
    d(h).trigger(u ? "enterFullscreen" : "exitFullscreen", p).trigger("toggleFullscreen", p);
  }));
}
async function xo(s) {
  const t = ki();
  return s === !1 && !!t === s ? s : t ? (document.exitFullscreen(), !1) : (await rc(s), !0);
}
d.fn.fullscreen = function(s) {
  return xo({
    target: this,
    ...s
  });
};
d.getFullscreenElement = ki;
d.toggleFullscreen = xo;
function pe(s) {
  return s.parentNode === document ? !1 : s.parentNode ? pe(s.parentNode) : !0;
}
d.isDetached = pe;
d.fn.isDetached = function() {
  const s = this[0];
  return !s || pe(s);
};
const ge = class To {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0, this._destroyed = !1;
    const { KEY: n, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a, ATTR_KEY: l, ALL: c, TYPED_ALL: u } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const h = d(t);
    if (h.data(n) && !o)
      throw new Error(`[ZUI] The component "${a}" has been initialized on element.`);
    const p = h[0], f = ut();
    if (this._gid = f, this._element = p, this._options = { ...r, ...(e == null ? void 0 : e.$optionsFromDataset) !== !1 ? h.dataset() : {} }, this.setOptions(e), this._key = this.options.key ?? `__${f}`, c.has(p) ? c.get(p).add(this) : c.set(p, /* @__PURE__ */ new Set([this])), u.has(a) ? u.get(a).add(this) : u.set(a, /* @__PURE__ */ new Set([this])), h.data(n, this).attr(l, "").attr(i, `${f}`), o) {
      const m = `${n}:ALL`;
      let _ = h.data(m);
      _ || (_ = /* @__PURE__ */ new Map(), h.data(m, _)), _.set(this._key, this);
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
  /**
   * @deprecated Use ATTR_KEY instead.
   */
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  /**
   * Component attribute key, like "z-use-menu"
   */
  static get ATTR_KEY() {
    return `z-use-${this.NAME}`;
  }
  /**
   * The component default selector.
   */
  static get SELECTOR() {
    return `[${this.DATA_KEY}]`;
  }
  /**
   * Get the component initialized flag.
   */
  get inited() {
    return this._inited;
  }
  /**
   * Get the component destroyed flag.
   */
  get destroyed() {
    return this._destroyed;
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
    return d(this.element);
  }
  /**
   * Get the component event emitter.
   */
  get $emitter() {
    return this.$element;
  }
  /**
   * Get the component i18n data.
   */
  get i18nData() {
    return [this.options.i18n, this.constructor.i18n];
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
  render(t, e) {
    this.setOptions(t, e);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: t, DATA_KEY: e, ALL: n, TYPED_ALL: i, NAME: r, MULTI_INSTANCE: o, ATTR_KEY: a } = this.constructor, { $element: l, element: c } = this;
    if (this.emit("destroyed"), this._destroyed = !0, l.off(this.namespace).removeData(t).removeAttr(a).removeAttr(e), o) {
      const p = this.$element.data(`${t}:ALL`);
      if (p)
        if (p.delete(this._key), p.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const f = p.values().next().value;
          l.data(t, f).attr(e, f.gid);
        }
    }
    const u = n.get(c);
    u && (u.delete(this), u.size === 0 && n.delete(c));
    const h = i.get(r);
    h && (h.delete(this), h.size === 0 && i.delete(r));
  }
  /**
   * Auto destroy the component when detached.
   */
  autoDestroy(t = 100) {
    this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
      this._autoDestory = 0, pe(this.element) && this.destroy();
    }, t);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t, e) {
    return e ? this._options = {
      ...this.constructor.DEFAULT,
      ...(t == null ? void 0 : t.$optionsFromDataset) !== !1 ? this.$element.dataset() : {},
      ...t
    } : t && d.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = d.Event(t);
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
    const { i18nData: i } = this;
    return H(i, t, e, n, this.options.lang, this.constructor.NAME) ?? H(i, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = d(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return n.data(this.KEY);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static isValid(t) {
    return !0;
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
    if (n) {
      if (this.isValid(n))
        return e && n.setOptions(e), n;
      n.destroy();
    }
    return new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t, e) {
    var l;
    const { SELECTOR: n, ALL: i, TYPED_ALL: r } = this, o = [], a = (c) => {
      c instanceof this && (!e || e(c) !== !1) && o.push(c);
    };
    return t ? d(t).find(n).each((c, u) => {
      var h;
      (h = i.get(u)) == null || h.forEach(a);
    }) : this !== To ? (l = r.get(this.NAME)) == null || l.forEach(a) : i.forEach((c) => {
      c.forEach(a);
    }), o.sort((c, u) => c.gid - u.gid);
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t, e, n) {
    return t === void 0 ? this.getAll(void 0, n).pop() : this.get(d(t).closest(this.SELECTOR), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    d.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    d.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, u) => {
          let h = n.get(u);
          if (h ? o && h.render(o) : h = new n(u, o), a) {
            let p = h[a], f = h;
            p === void 0 && (f = h.$, p = f[a]), typeof p == "function" ? l = p.call(f, ...r) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
  static register(t, e) {
    var i, r;
    t = t || this, e = (e ?? t.NAME).toLowerCase(), this.map.set(e, t);
    const n = (r = (i = t.toggle) == null ? void 0 : i.name) == null ? void 0 : r.toLowerCase();
    n && n !== e && this.toggleMap.set(n, t);
  }
};
ge.DEFAULT = {};
ge.MULTI_INSTANCE = !1;
ge.ALL = /* @__PURE__ */ new Map();
ge.TYPED_ALL = /* @__PURE__ */ new Map();
ge.map = /* @__PURE__ */ new Map();
ge.toggleMap = /* @__PURE__ */ new Map();
let gt = ge;
function rn(s) {
  return gt.map.get(s.toLowerCase());
}
function No(s, t, e = {}) {
  let n = rn(s);
  if (n || (n = Eo(s)), !n)
    return null;
  const { $update: i, ...r } = e;
  if (!n.MULTI_INSTANCE) {
    const o = n.get(t);
    if (o)
      return i && o.render(r, i === "reset"), o;
  }
  return new n(t, r);
}
function oc(s, t, e = {}) {
  requestAnimationFrame(() => No(s, t, e));
}
function ac(s, t) {
  gt.register(s, t);
}
function Eo(s) {
  const { zui: t } = window;
  if (t) {
    s = s == null ? void 0 : s.toLowerCase();
    for (const e in t) {
      const n = e.toLowerCase() === s;
      if (s && !n)
        continue;
      const i = t[e];
      if (!(typeof i != "function" || !i.NAME || !i.ZUI) && (gt.map.has(e.toLowerCase()) || ac(i), n))
        return i;
    }
  }
}
function Fu(s) {
  var t;
  s ? (t = rn(s)) == null || t.defineFn() : window._zuiDefined || (Eo(), gt.map.forEach((e) => {
    e.defineFn();
  }), Object.assign(window, { _zuiDefined: !0 }));
}
function lc(s, t = {}) {
  const e = d(s);
  let n = e.attr("zui-create");
  const { update: i, onCreate: r } = t, o = (a, l) => {
    if (l = {
      $update: i,
      $optionsFromDataset: !1,
      ...l
    }, r) {
      const u = r(a, l);
      if (u === !1)
        return;
      u && (l = u);
    }
    const c = l.$lib;
    if (c) {
      delete l.$lib, d.getLib(c).then(() => No(a, s, l));
      return;
    }
    oc(a, s, l);
  };
  if (typeof n == "string") {
    n = n.trim();
    const a = n.length ? n.split(",").map((u) => u.trim()) : [], l = Ge(s, { prefix: "zui-create-", evalValue: !0 }), c = Object.keys(l);
    if (!c.length && a.length === 1)
      o(a[0], e.dataset());
    else {
      const u = /* @__PURE__ */ new Set();
      [...a, ...c].forEach((h) => {
        if (u.has(h))
          return;
        const p = l[h];
        o(h, p), delete l[h], u.add(h);
      });
    }
  } else {
    const a = e.dataset(), l = a == null ? void 0 : a.zui;
    if (!l)
      return;
    console.warn("[ZUI] create component instance with [data-zui] is deprecated, use [zui-create] instead.", { element: s, options: t }), delete a.zui, o(l, a);
  }
}
function cc() {
  d(document).on("click.zui.toggle mouseenter.zui.toggle", "[data-toggle],[zui-toggle]", function(s) {
    const t = d(this), e = t.dataset("toggle") || t.attr("zui-toggle");
    if (!e)
      return;
    const n = gt.toggleMap.get(e) || rn(e), i = n == null ? void 0 : n.toggle;
    if (!i)
      return;
    const { trigger: r = "click", skip: o = "[disabled],.disabled", check: a } = i, l = s.type === "mouseover" ? "hover" : "click";
    if (!r.includes(l) || a && !a.call(n, this, l, s) || o && t.is(o))
      return;
    const { onGet: c, onCreate: u, setOptions: h = !0, getOptions: p, prevent: f = !0, handler: m, onToggle: _, convertHref: y } = i;
    let v = t.dataset();
    const b = t.attr(`zui-toggle-${e}`);
    if (b && (v = d.extend(v, qe(b))), y && t.is("a")) {
      const w = t.attr("href");
      if (w) {
        const k = y === !0 ? { selector: "target", url: "url" } : y;
        "#.".includes(w[0]) ? k.selector && v[k.selector] === void 0 && (v[k.selector] = w) : k.url && v[k.url] === void 0 && (v[k.url] = w);
      }
    }
    if (p && (v = p.call(n, this, v, s)), m) {
      m.call(n, this, v, l, s), f && s.preventDefault();
      return;
    }
    let S = c ? c.call(n, this) : n.get(this);
    if (S)
      h && S.setOptions(v);
    else {
      const w = u ? u.call(n, this, s, v) : new n(this, v);
      if (!w)
        return;
      S = w;
    }
    if (_) {
      if (_.call(n, S, this, s) === !1)
        return;
    } else {
      const { shown: w, show: k, hide: N, toggle: M } = S;
      let $;
      if (M ? $ = M : k && N ? w ? $ = N : $ = k : k && ($ = k), $)
        $.call(S);
      else
        return;
    }
    f && s.preventDefault();
  });
}
function hc(s, t) {
  const e = bi(s), n = [];
  return Object.keys(e).forEach((i) => {
    if (!i.startsWith("zui."))
      return;
    const r = e[i];
    (t == null ? void 0 : t(r, i)) !== !1 && n.push(e[i]);
  }), n;
}
let _s = 0;
function $o(s = 100) {
  if (_s && clearTimeout(_s), s) {
    _s = window.setTimeout(() => $o(0), s);
    return;
  }
  _s = 0, gt.ALL.forEach((t) => {
    t.forEach((e) => e.autoDestroy());
  });
}
function uc() {
  if (bi(document.body, "_autoDestoryMob"))
    return;
  const s = new MutationObserver((t) => {
    let e = !1;
    for (const n of t)
      if (n.removedNodes.length) {
        e = !0;
        break;
      }
    e && $o();
  });
  s.observe(document.body, { childList: !0, subtree: !0 }), vi(document.body, "_autoDestoryMob", s);
}
d.fn.zuiInit = function(s) {
  return this.find("[zui-create],[data-zui]").each(function() {
    var t;
    ((t = s == null ? void 0 : s.beforeCreate) == null ? void 0 : t.call(s, this)) !== !1 && lc(this, s);
  }), this.find("[zui-init]").each(function() {
    this.hasAttribute("z-zui-inited") || (this.setAttribute("z-zui-inited", ""), d.runJS(this.getAttribute("zui-init"), ["$element", d(this)]));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this.find('[data-on="inited"],[zui-on-inited]').each((t, e) => {
    const n = d(e);
    n.zui() || n.trigger("inited");
  }), this;
};
d.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = {};
    let r;
    return hc(e, (o, a) => {
      i[a] = o, (!r || r.gid < o.gid) && (r = i[a]);
    }), s === !0 ? i : r;
  }
  const n = rn(s);
  return n ? t === !0 ? n.getAll(e) : n.query(e, t) : d(e).data(`zui.${s}`);
};
d.fn.zuiCall = function(s, t = []) {
  return this.each(function() {
    const e = s.split("."), n = e.length > 1 ? e[0] : void 0, i = e[e.length > 1 ? 1 : 0], r = d(this).zui(n), o = r == null ? void 0 : r[i];
    typeof o == "function" && o.apply(r, t);
  }), this;
};
d(() => {
  d("body").zuiInit({ update: !0 }), cc(), uc();
});
class dc extends gt {
  init() {
    const { offset: t = 1, side: e, zIndex: n, pinnedClass: i = "is-pinned", targets: r, scrollContainer: o } = this.options, { $element: a } = this, l = r ? a.find(r) : a;
    if (l.css({ position: "sticky", zIndex: n }), e && l.css(e, -t), o) {
      const c = a.closest(o)[0];
      if (c) {
        const u = () => {
          this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
            if (this._raf = 0, c.scrollTop === 0 && (!e || e === "top")) {
              l.toggleClass(i, !1);
              return;
            }
            const h = c.getBoundingClientRect();
            l.each((p, f) => {
              const _ = f.getBoundingClientRect()[e || "top"] === h[e || "top"];
              f.classList.toggle(i, _);
            });
          });
        };
        this._scrollListener = u, c.addEventListener("scroll", u);
      }
      this._container = c;
    } else
      this._ob = new IntersectionObserver(
        (c) => {
          c.forEach((u) => {
            u.target.classList.toggle(i, u.intersectionRatio < t);
          });
        },
        { threshold: [1] }
      ), l.each((c, u) => this._ob.observe(u));
  }
  destroy() {
    var t;
    (t = this._ob) == null || t.disconnect(), this._container && (this._container.removeEventListener("scroll", this._scrollListener), this._raf && cancelAnimationFrame(this._raf));
  }
}
dc.NAME = "Sticky";
function on(s, t = {}) {
  const e = d(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t;
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (t.checkZeroSize && !(o * a))
    return !1;
  if (!n)
    if (t.container)
      n = d(e).closest(t.container)[0].getBoundingClientRect();
    else {
      const { innerHeight: m, innerWidth: _ } = window, { clientHeight: y, clientWidth: v } = document.documentElement;
      n = { left: 0, top: 0, width: _ || v, height: m || y };
    }
  const { left: l, top: c, width: u, height: h } = n;
  if (t.fullyCheck)
    return i >= l && r >= c && i + o <= u + l && r + a <= h + c;
  const p = i <= l + u && i + o >= l;
  return r <= c + h && r + a >= c && p;
}
d.fn.isVisible = function(s) {
  return on(this, s);
};
function Ds(s, t, e = !1) {
  var i;
  const n = d(s);
  if (t !== void 0) {
    if (typeof t == "string" && t.length) {
      const r = `zui-runjs-${ut()}`;
      n.append(`<script id="${r}">${t}<\/script>`), e && n.find(`#${r}`).remove();
    }
    return;
  }
  if (n.is("script")) {
    const r = (i = n[0]) == null ? void 0 : i.textContent;
    r && Ds(n.parent(), r);
    return;
  }
  n.find("script").each((r, o) => {
    Ds(n, o.textContent), o.remove();
  });
}
d.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
d.fn.runJS = function(s) {
  return this.each((t, e) => {
    Ds(e, s);
  });
};
function fc(s, t = "both") {
  return (t === "vert" || t === "both") && s.clientHeight < s.scrollHeight || (t === "horz" || t === "both") && s.clientWidth < s.scrollWidth;
}
function Ao(s, t) {
  const e = d(s), { ifNeeded: n = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = d(a).closest(i);
      if (!l.length || !fc(l[0]))
        return;
    }
    if (n) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (on(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
d.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Ao(e, s);
  });
};
d.setLibRoot = function(s) {
  d.libRoot = s;
};
d.registerLib = function(s, t) {
  d.libMap || (d.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), d.libMap[s] = t;
};
function pc(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s;
    if (d(i ? `#${i}` : `link[href="${n}"]`).length) {
      t();
      return;
    }
    const o = document.createElement("link");
    o.onload = () => {
      t();
    }, o.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${n}`));
    }, o.rel = "stylesheet", o.href = n, i && (o.id = i), d("head").append(o);
  });
}
function gc(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s, r = d(i ? `#${i}` : `script[src="${n}"]`);
    if (r.length) {
      if (r.dataset("loaded"))
        t();
      else {
        const p = r.data("loadCalls") || [];
        p.push(t), r.data("loadCalls", p);
      }
      return;
    }
    const { async: o = !0, defer: a = !1, noModule: l = !1, type: c, integrity: u } = s, h = document.createElement("script");
    h.async = o, h.defer = a, h.noModule = l, c && (h.type = c), u && (h.integrity = u), h.onload = () => {
      t(), (d(h).dataset("loaded", !0).data("loadCalls") || []).forEach((f) => f()), d(h).removeData("loadCalls");
    }, h.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${n}`));
    }, d("head").append(h), h.src = n;
  });
}
d.getLib = async function(s, t, e) {
  var f;
  typeof s == "string" && (s = ((f = d.libMap) == null ? void 0 : f[s]) || { src: s });
  let n = Array.isArray(s) ? { src: s } : d.extend({}, s);
  typeof t == "function" ? n.success = t : t && d.extend(n, t), e && (n.success = e);
  let { src: i } = n;
  const { name: r, success: o } = n, a = d.libMap && r ? d.libMap[r] : null;
  if (a && (n = d.extend({}, a, n), i = a.src || n.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = n;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r, u = () => c ? window[c] : void 0;
  typeof l == "string" && (l = () => !!u());
  const h = () => (o == null || o(), u());
  if (typeof l == "function" && await l())
    return h();
  const { root: p = d.libRoot } = n;
  for (let m of i) {
    typeof m == "string" && (m = { src: m });
    let { src: _ } = m;
    p && (_ = `${p}${p.endsWith("/") || _.startsWith("/") ? "" : "/"}${_}`);
    const y = {
      ...n,
      ...m,
      src: _
    };
    if (m.type === "css" || !m.type && _.endsWith(".css")) {
      await pc(y);
      continue;
    }
    await gc(y);
  }
  return h();
};
d.getScript = d.getLib;
function Mo(s, t) {
  const e = d(s), n = new ResizeObserver(t);
  return e.each((i, r) => {
    n.observe(r);
  }), n;
}
d.fn.resize = function(s) {
  return Mo(this, s);
};
const Hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: pe,
  isVisible: on,
  listenResize: Mo,
  runJS: Ds,
  scrollIntoView: Ao
}, Symbol.toStringTag, { value: "Module" })), Io = {};
function at(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    at(e, s[e]);
  }) : t && (Io[s.toLowerCase()] = t);
}
function mc(s) {
  return Io[s.toLowerCase()];
}
class tt extends B {
  constructor(t) {
    super(t), this._gid = ut(), this.state = this.getDefaultState(t);
  }
  get gid() {
    return this._gid;
  }
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
  }
  /**
   * Get the component i18n data.
   */
  get i18nData() {
    return [this.props.i18n, this.constructor.i18n];
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDefaultState(t) {
    return {};
  }
  resetState(t, e) {
    const n = this.getDefaultState(t);
    e ? this.state = n : this.changeState(n);
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
    const { i18nData: i } = this;
    return H(i, t, e, n, this.props.lang, this.constructor.NAME) ?? H(i, t, e, n, this.props.lang) ?? `{i18n:${t}}`;
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
      });
    });
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, ...h } = t, p = new Set(this.constructor.customProps), f = "dangerouslySetInnerHTML", m = Object.keys(h).reduce((_, y) => {
      if (!p.has(y) && (y === f || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(y))) {
        const v = h[y];
        _[y] = y !== f && v && typeof v == "object" ? JSON.stringify(v) : v;
      }
      return _;
    }, {});
    return { ref: o, className: T(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...m, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? mc(e) : e) || e;
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
    const r = this._onRender(e, i, n, t);
    return r && ([e, i, n] = r), _t(e, i, n);
  }
}
tt.HElement = !0;
tt.customProps = [];
var _c = 0;
function g(s, t, e, n, i, r) {
  t || (t = {});
  var o, a, l = t;
  if ("ref" in l)
    for (a in l = {}, t)
      a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --_c, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return W.vnode && W.vnode(c), c;
}
class xe extends B {
  constructor() {
    super(...arguments), this._ref = Z();
  }
  _runJS() {
    this.props.executeScript && d(this._ref.current).runJS().zuiInit();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ g(tt, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function yc(s) {
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
    ...u
  } = s, h = [e], p = { ...n }, f = [], m = [];
  return i.forEach((_) => {
    const y = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        y.push(...l.call(o, _, f, ...r));
      else {
        const v = _.call(o, f, ...r);
        v && (Array.isArray(v) ? y.push(...v) : y.push(v));
      }
    else
      y.push(_);
    y.forEach((v) => {
      v != null && (typeof v == "object" && !Ct(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? f.push(
        /* @__PURE__ */ g("div", { className: T(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? m.push(v.__html) : (v.style && Object.assign(p, v.style), v.className && h.push(v.className), v.children && f.push(v.children), v.attrs && Object.assign(u, v.attrs)) : f.push(v));
    });
  }), m.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: T(h),
    style: p,
    ...u
  }, f];
}
function Po({
  tag: s = "div",
  ...t
}) {
  const [e, n] = yc(t);
  return _t(s, e, ...n);
}
function jn(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => jn({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ g("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ g(xe, { ...F(i, r) });
    const { children: o, ...a } = r;
    return o && (r = F({ children: (Array.isArray(o) ? o : [o]).map((l) => jn({ ...i, content: l, generatorThis: n, generatorArgs: e })) }, a)), /* @__PURE__ */ g(tt, { ...F(i, r) });
  }
  return Ct(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", s), console.groupEnd()), null);
}
function z(s) {
  const t = jn(s);
  return t == null || typeof t == "boolean" ? null : Ct(t) ? t : /* @__PURE__ */ g(Ee, { children: t });
}
const wr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function et(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (Ct(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(wr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? wr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ g("i", { className: T(i), ...n });
}
function vc(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Ro(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    Ce(null, t._temp), t._temp = null, t._container = null;
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
  }), Ce(
    _t(vc, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function bc(s, t) {
  const e = _t(Ro, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
at({
  HElement: tt,
  element: tt,
  HtmlContent: xe,
  html: xe,
  CustomContent: z,
  custom: z,
  Icon: et,
  Portal: Ro
});
class U extends gt {
  constructor() {
    super(...arguments), this._ref = Z();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this._ref.current;
  }
  /**
   * The i18n data.
   */
  get i18nData() {
    const { i18n: t, i18nData: e } = this.constructor.Component;
    return e ? [...e, this.constructor.i18n] : [t, ...super.i18nData];
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
  render(t, e) {
    var h;
    const { element: n, $: i } = this, { Component: r, replace: o } = this.constructor, { $replace: a = o, $optionsFromDataset: l, ...c } = this.setOptions(t, e), u = {
      ref: this._ref,
      ...c
    };
    if (e && ((h = i == null ? void 0 : i.resetState) == null || h.call(i, c)), a && r.HElement && (n.tagName.toLowerCase() === a || a === !0)) {
      const p = Array.from(n.attributes).reduce((f, m) => {
        const { name: _, value: y } = m;
        return f[_ === "class" ? "className" : _] = y, f;
      }, {});
      Ce(
        _t(r, F({ component: n.tagName.toLowerCase(), attrs: p }, u)),
        n.parentElement,
        n
      );
    } else
      Ce(
        _t(r, u),
        n
      );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return Ce(_t(this.Component, t), e), e.innerHTML;
  }
}
U.replace = !1;
class J extends tt {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ g(et, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ g(et, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ g("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ g(et, { icon: l }),
      e ? null : c ? /* @__PURE__ */ g("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: u } = t;
    return ["btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof u == "string" ? `rounded-${u}` : { rounded: u }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      type: l ? void 0 : "button",
      disabled: !l && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = T([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: J
}, Symbol.toStringTag, { value: "Module" }));
at(wc);
let it = class extends tt {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this);
  }
  /**
   * Get the root element name, used for class name.
   */
  get name() {
    return this.props.name || this.constructor.NAME;
  }
  /**
   * Get the item element name, used for class name.
   */
  get itemName() {
    return this.props.itemName || this.constructor.ITEM_NAME;
  }
  getItems() {
    return this._items;
  }
  getRenderedItem(t) {
    return this._renderedItems.find((e) => e.key === t);
  }
  getItem(t) {
    return this._items[this.getItemIndex(t)];
  }
  getItemIndex(t) {
    return this._renderedItems.findIndex((e) => e.key === t);
  }
  getItemByIndex(t) {
    return this._items[t];
  }
  /**
   * Get the item key by index.
   *
   * @param index The rendered item index.
   * @returns The item key, if the item is not rendered, return undefined.
   */
  getKey(t) {
    var e, n;
    return (n = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : n.key;
  }
  _getItemFromEvent(t, e) {
    var l;
    const n = (e || t.target).closest("[z-item]");
    if (!n || !((l = n.parentElement) != null && l.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const i = +n.getAttribute("z-item"), r = this._items[i];
    if (!r)
      return;
    const o = this.getKey(i);
    if (o === void 0)
      return;
    const a = this._renderedItems[i];
    return { index: i, item: r, element: n, event: t, key: o, renderedItem: a, relativeTarget: this.props.relativeTarget };
  }
  _handleClick(t) {
    var n, i;
    const e = this._getItemFromEvent(t);
    if (e)
      return (n = this.props.onClickItem) == null || n.call(this, e), (i = e.item.onClick) == null || i.call(this, t, e), e;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, n) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const c = i.call(this, e, n);
      c !== void 0 && (e = c);
    }
    const { type: r } = e;
    let { itemRender: o } = t;
    if (o && typeof o == "object" && (o = o[r]), o) {
      const c = o.call(this, e, n);
      if (c !== void 0)
        return /* @__PURE__ */ g(z, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ g(z, { "z-key": e.key, "z-item": n, "z-type": r, content: { ...e } });
    if (l = l || a.default || tt, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = F({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ g(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, n) {
    if (!e)
      return !1;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: u } = this, { defaultItemProps: h = {}, defaultItemPropsMap: p = {} } = this.constructor;
    if (e = F(
      { type: l },
      h,
      p[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", u] },
      e,
      {
        _item: e,
        _index: n,
        key: String((a ? e[a] : e.key) ?? e.key ?? n),
        onClick: void 0
      }
    ), o) {
      const f = o.call(this, e, n);
      if (f !== void 0)
        return f;
    }
    return e;
  }
  _getProps(t) {
    const e = super._getProps(t);
    return { onClick: this._handleClick, ...e };
  }
  /**
   * Get the list root element classname list.
   *
   * @param props  Current list properties.
   * @returns The list root element classname list.
   */
  _getClassName(t) {
    return [this.name, t.className];
  }
  /**
   * Get final rendered item list.
   *
   * @param props  Current list properties.
   * @returns Item list.
   */
  _getItems(t) {
    let { items: e = [] } = t;
    return typeof e == "function" ? e = e.call(this) : Array.isArray(e) || (e = []), e;
  }
  /**
   * Render items.
   *
   * @param props  props  Current list properties.
   * @param items  Render items.
   * @returns React render children.
   */
  _renderItems(t, e) {
    return this._renderedItems = e.map((n, i) => {
      const r = this._getItem(t, n, i);
      return r || void 0;
    }), this._renderedItems.reduce((n, i, r) => (i && n.push(this._renderItem(t, i, r)), n), []);
  }
  /**
   * Get root element rendered children.
   *
   * @param props Current list properties.
   * @returns React render children.
   */
  _getChildren(t) {
    const e = this._getItems(t);
    this._items = e;
    const n = this._renderItems(t, e);
    return t.children && n.push(t.children), n;
  }
  /**
   * Get root element rendered component type.
   *
   * @param props Current list properties.
   * @returns React component type.
   */
  _getComponent(t) {
    return t.component || this.constructor.TAG;
  }
};
it.NAME = "";
it.ITEM_NAME = "item";
it.TAG = "ul";
it.ItemComponents = {
  default: tt,
  divider: [tt, { className: "divider" }],
  space: [tt, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
it.defaultItemProps = {
  component: "li"
};
it.defaultItemPropsMap = {};
it.defaultItemType = "item";
it.defaultProps = {
  itemKey: "id"
};
const Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: it
}, Symbol.toStringTag, { value: "Module" }));
class an extends U {
}
an.NAME = "CommonList";
an.Component = it;
an.replace = it.TAG;
an.register();
at(Cc);
function Sc(s) {
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
function kc(s) {
  const [t, e, n] = typeof s == "string" ? Sc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Cr(s, t) {
  return kc(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Sr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function xc(s, t, e) {
  s = s % 360 / 360, t = Sr(t), e = Sr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function Tc(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function Nc(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let ln = class extends B {
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
      code: u,
      maxTextLength: h = 2,
      src: p,
      hueDistance: f = 43,
      saturation: m = 0.4,
      lightness: _ = 0.6,
      children: y,
      ...v
    } = this.props, b = ["avatar", t], S = { ...e, background: o, color: a };
    let w = 32;
    n && (typeof n == "number" ? (S.width = `${n}px`, S.height = `${n}px`, S.fontSize = `${Math.max(12, Math.round(n / 2))}px`, w = n) : (b.push(`size-${n}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? S.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let k;
    if (p)
      b.push("has-img"), k = /* @__PURE__ */ g("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      b.push("has-icon"), k = /* @__PURE__ */ g(et, { icon: l });
    else if (c != null && c.length) {
      const N = Nc(c, h), M = N.length;
      if (b.push("has-text", `has-text-${M}`), o === void 0) {
        const A = u ?? c, x = (typeof A == "number" ? A : Tc(A)) * f % 360;
        if (S.background = `hsl(${x},${m * 100}%,${_ * 100}%)`, !a) {
          const I = xc(x, m, _);
          S.color = Cr(I);
        }
      } else
        !a && o && (S.color = Cr(o));
      let $;
      w && w < 16 * M && ($ = { transform: `scale(${w / (16 * M)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ g("div", { "data-actualSize": w, className: "avatar-text", style: $, children: N });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: T(b),
        style: S,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: ln
}, Symbol.toStringTag, { value: "Module" }));
let St = class extends it {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    if (!e)
      return !1;
    e.type || (e = d.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = F({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = F({}, e, _o({ btnType: n, size: i }));
  }
};
St.NAME = "btn-group";
St.TAG = "nav";
St.ItemComponents = {
  ...it.ItemComponents,
  default: J
};
St.defaultItemProps = {
  component: void 0
};
const cn = class Do extends St {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = T(n.className, `gap-${e}`) : n.style = d.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = F({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = F(n, r)), /* @__PURE__ */ g(Do, { ...r });
  }
};
cn.NAME = "toolbar";
cn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
cn.ItemComponents = {
  ...St.ItemComponents,
  btnGroup: St,
  "btn-group": St
};
let kt = cn;
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: kt
}, Symbol.toStringTag, { value: "Module" }));
class hn extends tt {
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
      e ? /* @__PURE__ */ g(
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
      /* @__PURE__ */ g("label", { htmlFor: r, children: /* @__PURE__ */ g(z, { content: o }) }, "label")
    ];
  }
}
class Ac extends hn {
}
Ac.defaultProps = {
  type: "radio"
};
class Mc extends hn {
}
Mc.defaultProps = {
  type: "switch"
};
class Je extends tt {
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
    } = t, u = [];
    if (i && u.push(/* @__PURE__ */ g(z, { content: i }, "toggleIcon")), a !== void 0 && u.push(/* @__PURE__ */ g(hn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && u.push(/* @__PURE__ */ g(et, { className: "item-icon", icon: e }, "icon")), n) {
      const p = typeof n == "function" ? n.call(this, t) : n;
      p && (p.className = T("item-avatar", p.className), u.push(/* @__PURE__ */ g(ln, { ...p }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ g(z, { content: r }, "leading") : null;
    return h && u.push(h), c ? u.length ? [
      /* @__PURE__ */ g("div", { className: T("item-leading", o), children: u }, "leading")
    ] : [] : u;
  }
  _renderContent(t, e) {
    const {
      textClass: n,
      titleClass: i,
      titleAttrs: r,
      subtitle: o,
      subtitleClass: a,
      url: l,
      target: c,
      content: u,
      contentClass: h,
      contentAttrs: p
    } = t, f = l && !e, m = f ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ g("div", { className: T("item-content", h), ...p, children: [
        _ ? /* @__PURE__ */ g(m, { className: T("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ g(z, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ g("div", { className: T("item-subtitle", a), children: /* @__PURE__ */ g(z, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ g("div", { className: T("item-text text", n), children: y }, "text") : null,
        u ? /* @__PURE__ */ g(z, { content: u }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: r,
      actions: o
    } = t, a = [];
    r && a.push(/* @__PURE__ */ g(et, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(kt.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = n ? /* @__PURE__ */ g(z, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ g("div", { className: T("item-trailing", i), children: [
        a,
        l
      ] }, "trailing")
    ] : [] : a;
  }
  _render(t, e) {
    const {
      innerComponent: n,
      innerClass: i,
      innerAttrs: r,
      url: o,
      actions: a,
      target: l,
      active: c,
      disabled: u,
      divider: h,
      checked: p,
      multiline: f,
      title: m,
      subtitle: _,
      hint: y,
      selected: v
    } = t, b = n || (o && !a ? "a" : "div"), S = b === "a", w = F({
      key: "item",
      title: y,
      className: T("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: v,
        checked: p,
        multiline: f ?? !!(m && _),
        state: S && !u
      })
    }, S ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ g(b, { ...w, children: [
      this._renderLeading(t),
      this._renderContent(t, S),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Rs(n)]];
  }
}
class ls extends it {
  constructor(t) {
    super(t), this._activeSet = new Ms(() => {
      const e = /* @__PURE__ */ new Set(), { active: n } = this.props;
      Array.isArray(n) ? n.forEach((r) => e.add(r)) : typeof n == "string" ? e.add(n) : n && Object.keys(n).forEach((r) => n[r] && e.add(r));
      const { activeMap: i } = this.state;
      return Object.keys(i).forEach((r) => i[r] ? e.add(r) : e.delete(r)), e;
    }, () => [this.state.activeMap, this.props.active]), this.state = {
      checked: {},
      activeMap: {}
    };
  }
  get namespace() {
    return `.zui.${this.constructor.NAME}.list_${this.gid}`;
  }
  get isLazyItems() {
    const { items: t } = this.props;
    return t && !Array.isArray(t);
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this.props.activeOnHover && !this.props.multipleActive && d(this.element).on(`mouseenter${this.namespace}`, "[z-item]", (t) => {
      const e = this._getItemFromEvent(t);
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && !this.isActive(e.key) && this.toggleActive(e.key, !0);
    });
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    d(this.element).off(this.namespace), (t = this.props.beforeDestroy) == null || t.call(this);
  }
  setItems(t, e) {
    const { onLoadFail: n } = this.props;
    return this.changeState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof n == "function" ? n.call(this, e) : n) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const n = await yi(t, [this], { throws: !0 });
        this.setItems((e == null ? void 0 : e.call(this, n)) || n);
      } catch (n) {
        this.setItems(void 0, n);
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    return t || !e || Array.isArray(e) || e === this._loadedSetting ? !1 : (this.load(), !0);
  }
  isChecked(t, e, n = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.state.checked[t] ?? i.checked ?? n;
  }
  isAllChecked() {
    return this._renderedItems.every(({ key: t }, e) => this.isChecked(t, e) === !0);
  }
  toggleAllChecked(t) {
    return t === void 0 && (t = !this.isAllChecked()), this.toggleChecked(this._renderedItems.map((e) => e.key), t);
  }
  async toggleChecked(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), n = t.reduce((i, r) => (i[r] = e, i), {});
    } else if (typeof t == "object")
      n = t;
    else {
      const i = this.isChecked(t);
      e === void 0 && (e = !i), n = { [t]: e };
    }
    Object.keys(n).length && await this.changeState((i) => ({
      checked: {
        ...i.checked,
        ...n
      }
    }), () => {
      var r;
      const i = this.state.checked;
      (r = this.props.onCheck) == null || r.call(this, n, Object.keys(i).filter((o) => i[o] === !0));
    });
  }
  getChecks() {
    return this._renderedItems.reduce((t, { key: e }, n) => (e !== void 0 && this.isChecked(e, n) === !0 && t.push(e), t), []);
  }
  isActive(t) {
    return typeof t == "object" && (t = t.key), this._activeSet.cache.has(t);
  }
  getActiveKeys() {
    return [...this._activeSet.value];
  }
  getActiveKey() {
    return this.getActiveKeys()[0];
  }
  async toggleActive(t, e) {
    typeof t == "string" && (t = [t]), t.length && (e = e ?? !this.isActive(t[0]), await this.changeState((n) => ({ activeMap: this.props.multipleActive ? t.reduce((r, o) => (r[o] = e, r), { ...n.activeMap }) : { [t[0]]: e } }), () => {
      var n;
      (n = this.props.onActive) == null || n.call(this, t, e);
    }));
  }
  getNextItem(t, e, n = 1, i = void 0) {
    i = i || this._renderedItems;
    const r = i.length;
    if (t === void 0)
      return i[n ? 0 : r - 1];
    let o = i.findIndex((l) => l.key === t);
    if (o < 0 || r < 2)
      return i[n ? 0 : r - 1];
    let a = 0;
    for (e = e || ((l) => l.type === "item" && !l.disabled); a < r; ) {
      o = (o + n + r) % r;
      const l = i[o];
      if (l && !l.disabled && !l.hidden && e.call(this, l, o))
        return l;
      a++;
    }
  }
  getPrevItem(t, e) {
    return this.getNextItem(t, e, -1);
  }
  activeNext(t, e = 1) {
    const n = this.getNextItem(this.getActiveKey(), t, e);
    n && this.toggleActive(n.key);
  }
  activePrev(t) {
    this.activeNext(t, -1);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: n } = this.state;
    return n || (Array.isArray(e) ? e : []);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, n) {
    const { divider: i, multiline: r } = t;
    e = F({}, _o({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      l && (e.checked = this.isChecked(e.key, n, e.checked), typeof l == "object" && (e.checkbox = e.checkbox ? d.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
    }
    return e.icon && (this._hasIcons = !0), e.checked !== void 0 && (this._hasCheckbox = !0), e;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && this._getRenderedItem(t, i, n);
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    let { checkOnClick: n } = this.props;
    if (n === "any" ? n = ".item-checkbox,.item-content,.item-icon" : n === !0 && (n = ".item-checkbox"), n && !(e != null && e.renderedItem.disabled) && e && t.target.closest(n)) {
      this.toggleChecked(e.key), t.stopPropagation();
      return;
    }
    return e;
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      className: T(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
}
ls.ItemComponents = {
  ...it.ItemComponents,
  default: tt,
  item: Je,
  heading: Je
};
ls.NAME = "list";
const Nn = "```ZUI_STR\n";
class cs {
  /**
   * Create new store instance.
   * @param id   Store profile ID.
   * @param type Store type.
   */
  constructor(t = "", e = "local") {
    this._type = e, this._id = t, this._name = `ZUI_STORE:${this._id}`, this._storage = e === "local" ? localStorage : sessionStorage;
  }
  /**
   * Get store type.
   */
  get type() {
    return this._type;
  }
  /**
   * Get session type store instance.
   */
  get session() {
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new cs(this._id, "session")), this._altStorage);
  }
  _getKey(t) {
    return `${this._name}:${t}`;
  }
  /**
   * Switch store profile.
   *
   * @param id Store profile ID.
   */
  switch(t) {
    this._id = t, this._name = `ZUI_STORE:${this._id}`;
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = this._storage.getItem(this._getKey(t));
    if (typeof n == "string") {
      if (n.startsWith(Nn))
        return n.substring(Nn.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
  }
  /**
   * Set key-value pair in store.
   *
   * @param key Key to set.
   * @param value Value to set.
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Nn}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store.
   *
   * @param key Key to remove.
   */
  remove(t) {
    this._storage.removeItem(this._getKey(t));
  }
  /**
   * Iterate all key-value pairs in store.
   *
   * @param callback Callback function to call for each key-value pair in the store.
   */
  each(t) {
    for (let e = 0; e < this._storage.length; e++) {
      const n = this._storage.key(e);
      if (n != null && n.startsWith(this._name)) {
        const i = this._storage.getItem(n);
        typeof i == "string" && t(n.substring(this._name.length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store.
   *
   * @returns All key-value pairs in the store.
   */
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
}
const Bn = new cs("DEFAULT");
function Ic(s, t = "local") {
  return new cs(s, t);
}
Object.assign(Bn, { create: Ic });
function Lo(s, t) {
  const { children: e } = s;
  e.length && e.forEach((n) => {
    t(n), Lo(n, t);
  });
}
function Pc(s, t) {
  let e = s.parent;
  for (; e; )
    t(e), e = e.parent;
}
function En(s) {
  return s.split(":").reduce((t, e, n) => (t.push(n ? t[n - 1] + ":" + e : e), t), []);
}
function Vn(s, t, e, n, i = 0, r) {
  return s.reduce((o, a, l) => {
    if (!a)
      return o;
    const c = String((t ? a[t] : a.key) ?? a.key ?? l), u = r ? `${r.keyPath}:${c}` : c, h = {
      key: c,
      level: i,
      keyPath: u,
      parentKey: r == null ? void 0 : r.keyPath,
      parent: r,
      data: a,
      children: []
    };
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? Vn(a.items, t, e, o, i + 1, h) : o;
  }, n);
}
class $e extends ls {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: n, nestedShow: i } = t;
    if (d.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), n && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const r = Bn.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && En(o).forEach((a) => {
          r[a] = !0;
        });
      }), this._needInitChecks = !0;
    }
    this._renderedItemMap = /* @__PURE__ */ new Map(), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._handleNestedToggle = this._handleNestedToggle.bind(this), this._handleNestedCheck = this._handleNestedCheck.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return this.props.nestedShow ?? this.state.nestedShow ?? !1;
  }
  get isHoverTrigger() {
    return this.props.nestedTrigger === "hover";
  }
  async setItems(t, e) {
    var i;
    this.isRoot && (this._needInitChecks = !0);
    const n = await super.setItems(t, e);
    return t && ((i = this.props.parent) == null ? void 0 : i.checked) === !0 ? this.toggleChecked(this._renderedItems.map((r) => r.key), !0) : t != null && t.some((r) => r.checked) && (this._needInitChecks = !0, this.forceUpdate()), n;
  }
  getItemMap() {
    if (!this._itemMap) {
      let t = !1;
      const e = Vn(this._items, this.props.itemKey, (n, i) => (n.set(i.keyPath, i), i.data.items && !Array.isArray(i.data.items) && (t = !0), n), /* @__PURE__ */ new Map());
      if (t)
        return this._renderedItemMap.forEach((n, i) => {
          e.has(i) || e.set(i, {
            key: n.key,
            level: n._level,
            keyPath: i,
            parentKey: `${i.split(":").slice(0, -1).join(":")}`,
            children: [],
            data: n
          });
        }), e.forEach((n) => {
          const { parentKey: i } = n;
          if (!i)
            return;
          const r = e.get(i);
          r && (r.children.push(n), n.parent = r);
        }), e;
      this._itemMap = e;
    }
    return this._itemMap;
  }
  getRenderedItem(t) {
    return this._renderedItemMap.get(t);
  }
  getItem(t) {
    var n;
    if (this._itemMap)
      return (n = this._itemMap.get(t)) == null ? void 0 : n.data;
    const e = this.getRenderedItem(t);
    return e ? e._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  async toggle(t, e) {
    const n = this.isExpanded(t);
    if (e === n)
      return;
    e === void 0 && (e = !n);
    const { nestedShow: i, onToggle: r, accordion: o } = this.props;
    r && r.call(this, t, e) === !1 || i === void 0 && await this.changeState((a) => {
      let l = {
        ...a.nestedShow,
        [t]: e
      };
      if (e && o) {
        let c = `${t.split(":").slice(0, -1).join(":")}`;
        c.length && (c += ":"), Object.keys(l).forEach((u) => {
          u !== t && u.startsWith(c) && (l[u] = !1);
        });
      }
      return l = e ? En(t).reduce((c, u) => (c[u] = e, c), l) : l, this.isHoverTrigger && !e && Object.keys(l).forEach((c) => {
        !l[c] || !c.startsWith(`${t}:`) || En(t).forEach((u) => {
          l[u] = !0;
        });
      }), {
        nestedShow: l
      };
    }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap().values()).reduce((t, { keyPath: e, data: n }) => {
      const i = this.state.checked[e];
      return (i === !0 || n.checked && i !== !1) === !0 && t.push(e), t;
    }, []);
  }
  isChecked(t, e, n = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.isRoot ? this.state.checked[t] ?? i.checked ?? n : this.props.checkedState[`${this.props.parentKey}:${t}`] ?? i.checked ?? n;
  }
  async toggleChecked(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), n = t.reduce((a, l) => (a[l] = e, a), {});
    } else
      typeof t == "object" ? n = t : (e === void 0 && (e = !this.isChecked(t)), n = { [t]: e });
    if (!Object.keys(n).length)
      return;
    if (this.isRoot) {
      const a = this.getItemMap();
      await this.changeState(({ checked: l }) => {
        const c = (u) => n[u.keyPath] ?? l[u.keyPath] ?? u.data.checked ?? !1;
        return Object.keys(n).forEach((u) => {
          e = n[u];
          const h = a.get(u);
          h && (Lo(h, (p) => {
            c(p) !== e && (n[p.keyPath] = e);
          }), Pc(h, (p) => {
            const { children: f } = p, m = f.reduce((_, y) => (c(y) && _++, _), 0);
            n[p.keyPath] = m === f.length ? !0 : m ? "indeterminate" : !1;
          }));
        }), {
          checked: {
            ...l,
            ...n
          }
        };
      }, () => {
        var c;
        const l = this.state.checked;
        (c = this.props.onCheck) == null || c.call(this, n, Object.keys(l).filter((u) => l[u] === !0));
      });
      return;
    }
    const { parentKey: i, onCheck: r } = this.props, o = Object.keys(n).reduce((a, l) => (a[`${i !== void 0 ? `${i}:` : ""}${l}`] = n[l], a), {});
    r.call(this, o, []);
  }
  getKeyPath(t) {
    if (this.isRoot)
      return t;
    const e = this.props.parentKey;
    return t.startsWith(e + ":") ? t : `${e}:${t}`;
  }
  isActive(t) {
    if (typeof t == "object") {
      const e = t._keyPath ?? t.key;
      if (e === void 0)
        return !1;
      t = e;
    }
    return this._activeSet.cache.has(this.getKeyPath(t));
  }
  async toggleActive(t, e) {
    if (typeof t == "string" && (t = [t]), t = t.map((n) => this.getKeyPath(n)), this.isRoot) {
      await super.toggleActive(t, e), this.props.toggleOnActive && t.forEach((n) => {
        this.isActive(n) && !this.isExpanded(n) && this.toggle(n, !0);
      });
      return;
    }
    this.props.onActive.call(this, t, e ?? !this.isActive(t[0]));
  }
  activeNext(t, e = 1) {
    const n = this.getNextItem(this.getActiveKey(), t, e);
    n && this.toggleActive(n._keyPath);
  }
  getNextItem(t, e, n = 1, i = void 0) {
    return i = i || Vn(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
      _keyPath: o.keyPath,
      type: "item",
      ...o.data,
      ...this._renderedItemMap.get(o.keyPath),
      key: o.keyPath
    }), r), []), super.getNextItem(t, e, n, i);
  }
  _afterRender(t) {
    if (super._afterRender(t), this._needInitChecks) {
      const e = {};
      this.getItemMap().forEach((i) => {
        i.data.checked !== void 0 && (e[i.keyPath] = i.data.checked);
      }), this.toggleChecked(e), this._needInitChecks = !1;
    }
  }
  _preserveState() {
    this._storeID && Bn.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return F(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: n.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parent: n,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      checkedState: t.checkedState || this.state.checked,
      onCheck: a ? this._handleNestedCheck : t.onCheck,
      onToggle: a ? this._handleNestedToggle : t.onToggle,
      beforeRenderItem: a ? this._beforeRenderNestedItem : t.beforeRenderItem,
      active: a ? this.getActiveKeys() : t.active,
      onActive: a ? this.toggleActive.bind(this) : t.onActive
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ g(o, { ...r }, `nested:${n.key}`);
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ g("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ g("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ g(et, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ g("span", { className: T(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItems(t) {
    const e = super._getItems(t);
    return this.isRoot && e !== this._items && (this._itemMap = void 0), e;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key, a = `${r !== void 0 ? `${r}:` : ""}${o}`;
    if (i.items) {
      const l = i.expanded ?? this.isExpanded(a);
      F(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return F(i, {
      _level: t.level,
      _keyPath: a,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t) {
    return this._renderedItemMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, n) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = F(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t, e) {
    const n = super._getItemFromEvent(t, e);
    if (!n)
      return;
    (t.type === "mouseenter" || t.type === "mouseleave") && (n.hover = t.type === "mouseenter");
    const { parentKey: i } = this.props;
    return { ...n, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${n.key}`, target: e || t.target };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, keyPath: r, target: o } = t, { nestedToggle: a } = this.props, { isHoverTrigger: l } = this;
    if (!e.items || i.defaultPrevented || l && n === void 0 || !l && i.type !== "click" || o.closest(".not-nested-toggle") || a && !e.disabled && !o.closest(a) || !a && !e.disabled && o.closest("a,.btn,.item-checkbox,.open-url") && !o.closest(".nested-toggle-icon,.item-icon"))
      return t;
    const c = typeof n == "boolean" ? n : void 0;
    this.toggle(r, c), i.preventDefault();
  }
  _handleNestedToggle(t, e) {
    this.toggle(t, e);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    return e && this._toggleFromEvent(e);
  }
  _handleHover(t) {
    var i;
    const e = this._getItemFromEvent(t);
    if (!e || ((i = this.props.onHoverItem) == null || i.call(this, e), !this.isHoverTrigger))
      return;
    const n = this._hoverInfo;
    n && (n.info.keyPath === e.keyPath ? clearTimeout(n.timer) : this._toggleFromEvent(n.info)), this._hoverInfo = {
      info: e,
      timer: window.setTimeout(() => {
        this._hoverInfo = void 0, this._toggleFromEvent(e);
      }, e.hover ? 0 : 200)
    };
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = F(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = T(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || this.isHoverTrigger), super._beforeRender(t);
  }
}
$e.defaultProps = {
  ...ls.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
$e.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive"];
const Ae = class zo extends $e {
  _getClassName(t) {
    return [super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact }];
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: n, maxHeight: i } = t, r = F({}, e, n || i ? { style: { height: n, maxHeight: i } } : null);
    return r.className = T(this._getWrapClass(t), r.className), r;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ g(z, { content: t.header, generatorThis: this }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ g(z, { content: t.footer, generatorThis: this }, "footer");
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ g("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : super.render(t);
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = F(n, r)), /* @__PURE__ */ g(zo, { ...r });
  }
};
Ae.NAME = "menu";
Ae.TAG = "menu";
Ae.inheritNestedProps = [...$e.inheritNestedProps, "compact"];
Ae.ItemComponents = {
  ...$e.ItemComponents,
  item: [Je, { innerComponent: "a" }]
};
Ae.defaultProps = {
  ...$e.defaultProps,
  scrollbarHover: !0
};
let pt = Ae;
let un = class extends B {
  constructor(t) {
    super(t), this._input = Z(), this._timer = 0, this._handleClearBtnClick = (e) => {
      e.stopPropagation(), this.clear(e);
    }, this._handleChange = (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r, delay: o } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (o ? (this._clearTimer(), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, o)) : r(i, e));
      });
    }, this._handleFocus = (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${ut()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = Co(t, {
        clear: {
          keys: "Escape",
          handler: (n) => {
            this.clear(n);
          }
        },
        enter: {
          keys: "Enter",
          handler: (n) => {
            var i, r;
            (r = (i = this.props).onEnter) == null || r.call(i, this.state.value, n);
          }
        }
      });
      e && (this._hotkeysScope = `SearchBox_${this._gid}`, d(this.input).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentWillUnmount() {
    this._hotkeysScope && d(this.input).unbindHotkeys(this._hotkeysScope);
  }
  get id() {
    return this._gid;
  }
  get input() {
    return this._input.current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  blur() {
    var t;
    (t = this.input) == null || t.blur();
  }
  clear(t) {
    const e = this.state.value;
    this.setState({ value: "" }, () => {
      const { onChange: n, onClear: i } = this.props;
      i == null || i(t), this.focus(), e.trim() !== "" && (n == null || n("", t));
    });
  }
  _clearTimer() {
    this._timer && clearTimeout(this._timer), this._timer = 0;
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: p, clearIcon: f, value: m, compact: _, prefixClass: y, suffixClass: v } = t, { focus: b, value: S } = e, { id: w } = this, k = m ?? S, N = typeof k != "string" || !k.trim().length;
    let M, $, A;
    return p && (A = p === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(et, { icon: p })), !h && p && (M = /* @__PURE__ */ g("label", { for: w, class: T("input-control-prefix", y), children: A }, "prefix")), f && !N ? $ = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(et, { icon: f })
      }
    ) : h && p && ($ = A), $ && ($ = /* @__PURE__ */ g("label", { for: w, class: T("input-control-suffix", v), children: $ }, "suffix")), /* @__PURE__ */ g("div", { class: T("search-box input-control", r, { focus: b, empty: N, compact: _, "has-prefix-icon": M, "has-suffix-icon": $ }), style: o, children: [
      M,
      /* @__PURE__ */ g(
        "input",
        {
          ref: this._input,
          id: w,
          type: "text",
          class: T("form-control", { "rounded-full": c, "size-sm": _ }, i),
          style: n,
          placeholder: u,
          disabled: l,
          readonly: a,
          value: k,
          onInput: this._handleChange,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleFocus
        },
        "input"
      ),
      $
    ] });
  }
};
un.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const Rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: un
}, Symbol.toStringTag, { value: "Module" }));
let yt = class extends pt {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const n = this.constructor.getSearchKeys(e);
      this._searchKeys = n, this.setState({ search: n.join(" ") });
    }, this.state.search = t.search ?? t.defaultSearch, this._searchKeys = this.constructor.getSearchKeys(this.state.search), this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
  }
  componentWillUpdate(t) {
    this.isRoot && t.search !== void 0 && t.search !== this.props.search && (this._searchKeys = this.constructor.getSearchKeys(t.search));
  }
  componentDidMount() {
    super.componentDidMount(), this._updateMatchedParents();
  }
  componentDidUpdate() {
    super.componentDidUpdate(), this._updateMatchedParents();
  }
  isExpanded(t) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t);
  }
  _updateMatchedParents() {
    var n;
    if (!this.isRoot)
      return;
    const t = d(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((n = this._searchKeys) != null && n.length) && !e.length && !t.children(".item").not(".is-not-match").length);
  }
  _isItemMatch(t, e, n, i) {
    const { isItemMatch: r } = t, o = r ? r.call(this, e, this._searchKeys, n, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (this.isRoot && o && i !== void 0) {
      let a = "";
      String(i).split(":").forEach((l) => {
        a += `${a.length ? ":" : ""}${l}`, this._matchedParents.add(a);
      });
    }
    return o;
  }
  _isNestedItemMatch(t, e, n, i) {
    return this._isItemMatch(this.props, t, n, i);
  }
  _getNestedProps(t, e, n, i) {
    const r = super._getNestedProps(t, e, n, i);
    return this.isRoot && (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")), r;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && (this.isRoot && this.props.limit && this._showCount >= this.props.limit ? !1 : (i.hidden = !this._isItemMatch(t, e, n, t.parentKey), i.hidden || this._showCount++, i));
  }
  _renderItem(t, e, n) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, n);
  }
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return T(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _renderSearchBox(t) {
    const { searchBox: e } = t;
    if (!e || !this.isRoot)
      return null;
    const n = {
      compact: !0,
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && d.extend(n, e), t.search !== void 0 && (n.value = this._searchKeys.join(" "), n.disabled = !0), /* @__PURE__ */ g(un, { ...n }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, n = this.isRoot && t.searchBox && t.searchPlacement !== "bottom", { noMatchHint: i } = t;
    return !e && !n && !i ? null : [
      i ? /* @__PURE__ */ g("div", { className: "search-menu-no-match-hint", children: i }, "noMatchHint") : null,
      e || n ? /* @__PURE__ */ g("header", { className: "search-menu-header", children: [
        e ? super._renderWrapperHeader(t) : null,
        n ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, n = this.isRoot && t.searchBox && t.searchPlacement === "bottom";
    return !e && !n ? null : /* @__PURE__ */ g("footer", { className: "search-menu-footer", children: [
      e ? super._renderWrapperFooter(t) : null,
      this._renderSearchBox(t)
    ] }, "footer");
  }
  _beforeRender(t) {
    return this.isRoot && (this._matchedParents = /* @__PURE__ */ new Set(), this._showCount = 0), super._beforeRender(t);
  }
  /**
   * Check whether item is matched.
   *
   * @param item          Item to match.
   * @param searchKeys    Search keys.
   * @returns Whether item is matched.
   */
  static isItemMatch(t, e, n = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => n.some((r) => {
      const o = t[r];
      return typeof o == "string" && o.length && o.toLowerCase().includes(i);
    })) : !0;
  }
  /**
   * Convert search string to search keys.
   *
   * @param search    Search string.
   * @returns Search keys array.
   */
  static getSearchKeys(t = "") {
    return d.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, n = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((u, h) => {
        h && (o.push(/* @__PURE__ */ g("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
yt.inheritNestedProps = [...pt.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
yt.defaultProps = {
  ...pt.defaultProps,
  defaultNestedShow: !0,
  wrap: !0
};
const Dc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: pt,
  SearchMenu: yt
}, Symbol.toStringTag, { value: "Module" }));
class xi extends U {
}
xi.NAME = "Menu";
xi.Component = pt;
xi.replace = pt.TAG;
class Ti extends U {
}
Ti.NAME = "SearchMenu";
Ti.Component = yt;
Ti.replace = yt.TAG;
at(Dc);
function Lc({
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
  iconClass: u,
  ...h
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ g(J, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : Ct(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ g(J, { ...a, onClick: l }));
  const f = kt.render(e, []);
  return /* @__PURE__ */ g("div", { className: T("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ g(et, { icon: c, className: T("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ g(z, { content: i }) : /* @__PURE__ */ g("div", { className: T("alert-content", r), children: [
      typeof n != "string" ? /* @__PURE__ */ g(z, { content: n }) : n && /* @__PURE__ */ g("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      n ? f : null
    ] }),
    n ? null : f,
    p,
    o
  ] });
}
function zc(s) {
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
function Oc({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return typeof a.html == "string" && (a.content = { html: a.html }, delete a.html), /* @__PURE__ */ g(
    Lc,
    {
      className: T("messager", r, t, n === !0 ? zc(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Fc = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Hc = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Le = (s, t, e) => (Fc(s, t, "access private method"), e), ee, _e;
class Ni extends U {
  constructor() {
    super(...arguments), Hc(this, ee), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      d(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Le(this, ee, _e).call(this, () => {
      this._show = !0, this.render(), Le(this, ee, _e).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Le(this, ee, _e).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Le(this, ee, _e).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Le(this, ee, _e).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ee = /* @__PURE__ */ new WeakSet();
_e = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
Ni.NAME = "MessagerItem";
Ni.Component = Oc;
const hs = class Oo extends gt {
  get isShown() {
    var t;
    return !!((t = this._item) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), this._getItem().show();
  }
  hide() {
    var t;
    (t = this._item) == null || t.hide();
  }
  _getItem() {
    if (this._item)
      this._item.setOptions(this.options);
    else {
      const t = this._getHolder(), e = new Ni(t, this.options);
      e.on("hidden", () => {
        e.destroy(), t == null || t.remove(), this._holder = void 0, this._item = void 0;
      }), this._item = e;
    }
    return this._item;
  }
  _getHolder() {
    if (this._holder)
      return this._holder;
    const { placement: t = "top" } = this.options;
    let e = this.$element.find(`.messagers-${t}`);
    e.length || (e = d(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
    let n = e.find(`#messager-${this.gid}`);
    return n.length || (n = d(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = n[0]), n[0];
  }
  static show(t, e) {
    typeof t == "string" && (t = { content: t });
    const { container: n, ...i } = t, r = { type: e, key: `messager_${ut()}`, ...i };
    r.type && d.extend(r, this.TypeOptions[r.type]);
    const o = Oo.ensure(n || "body", r);
    return o.hide(), o.show(), o;
  }
};
hs.NAME = "messager";
hs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
hs.MULTI_INSTANCE = !0;
hs.TypeOptions = {};
let Ku = hs, dn = class extends B {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ g("div", { class: T("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ g("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
};
dn.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const Wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: dn
}, Symbol.toStringTag, { value: "Module" }));
at(Wc);
class Ei extends U {
}
Ei.NAME = "ProgressBar";
Ei.Component = dn;
Ei.register();
let fn = class extends B {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, p = n / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = n * f);
    const m = (n - f) / 2;
    return /* @__PURE__ */ g("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ g("circle", { cx: p, cy: p, r: m, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ g("circle", { cx: p, cy: p, r: m, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * m * 2, "stroke-dashoffset": Math.PI * m * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ g("text", { x: c ?? p, y: u ?? p + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${m}px`, stroke: "currentColor" }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
fn.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class $i extends U {
}
$i.NAME = "ProgressCircle";
$i.Component = fn;
$i.register();
const jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: fn
}, Symbol.toStringTag, { value: "Module" }));
at(jc);
class Fo extends U {
}
Fo.NAME = "Avatar";
Fo.Component = ln;
at(Ec);
class Ho extends U {
}
Ho.NAME = "BtnGroup";
Ho.Component = St;
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: St
}, Symbol.toStringTag, { value: "Module" }));
at(Bc);
const Wo = Symbol("EVENT_PICK");
class Ai extends B {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!d(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = d(t.target), a = i == null ? void 0 : i(t);
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
    const { state: e, className: n, disabled: i, readonly: r, pickerName: o, empty: a } = t, { open: l } = e;
    return T(
      "pick",
      n,
      o ? `${o}-pick` : "",
      l && "is-open focus",
      i && "disabled",
      r && "readonly",
      a ? "is-empty-value" : ""
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
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o } = t;
    if (e)
      if (this._hasInput)
        d(`#${o}`).val(n);
      else
        return /* @__PURE__ */ g("input", { id: o, type: "hidden", className: "pick-value", name: e, value: n, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    d(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, n) => {
      if (typeof n == "symbol")
        return;
      const i = e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    d(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && d(`#${e}`).trigger("change", Wo), this._skipTriggerChange = !1);
  }
  render(t) {
    return _t(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Mt = Math.min, ht = Math.max, Ls = Math.round, ys = Math.floor, Yt = (s) => ({
  x: s,
  y: s
}), Vc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Uc = {
  start: "end",
  end: "start"
};
function Un(s, t, e) {
  return ht(s, Mt(t, e));
}
function Me(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Jt(s) {
  return s.split("-")[0];
}
function Ie(s) {
  return s.split("-")[1];
}
function jo(s) {
  return s === "x" ? "y" : "x";
}
function Mi(s) {
  return s === "y" ? "height" : "width";
}
function he(s) {
  return ["top", "bottom"].includes(Jt(s)) ? "y" : "x";
}
function Ii(s) {
  return jo(he(s));
}
function Kc(s, t, e) {
  e === void 0 && (e = !1);
  const n = Ie(s), i = Ii(s), r = Mi(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = zs(o)), [o, zs(o)];
}
function qc(s) {
  const t = zs(s);
  return [Kn(s), t, Kn(t)];
}
function Kn(s) {
  return s.replace(/start|end/g, (t) => Uc[t]);
}
function Gc(s, t, e) {
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
function Yc(s, t, e, n) {
  const i = Ie(s);
  let r = Gc(Jt(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Kn)))), r;
}
function zs(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Vc[t]);
}
function Jc(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function Bo(s) {
  return typeof s != "number" ? Jc(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Os(s) {
  const {
    x: t,
    y: e,
    width: n,
    height: i
  } = s;
  return {
    width: n,
    height: i,
    top: e,
    left: t,
    right: t + n,
    bottom: e + i,
    x: t,
    y: e
  };
}
function kr(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = he(t), o = Ii(t), a = Mi(o), l = Jt(t), c = r === "y", u = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      f = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (Ie(t)) {
    case "start":
      f[o] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += p * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const Zc = async (s, t, e) => {
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
    x: u,
    y: h
  } = kr(c, n, l), p = n, f = {}, m = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: v
    } = a[_], {
      x: b,
      y: S,
      data: w,
      reset: k
    } = await v({
      x: u,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: f,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    u = b ?? u, h = S ?? h, f = {
      ...f,
      [y]: {
        ...f[y],
        ...w
      }
    }, k && m <= 50 && (m++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (c = k.rects === !0 ? await o.getElementRects({
      reference: s,
      floating: t,
      strategy: i
    }) : k.rects), {
      x: u,
      y: h
    } = kr(c, p, l)), _ = -1);
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function Pi(s, t) {
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
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: f = 0
  } = Me(t, s), m = Bo(f), y = a[p ? h === "floating" ? "reference" : "floating" : h], v = Os(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = h === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), w = await (r.isElement == null ? void 0 : r.isElement(S)) ? await (r.getScale == null ? void 0 : r.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Os(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: S,
    strategy: l
  }) : b);
  return {
    top: (v.top - k.top + m.top) / w.y,
    bottom: (k.bottom - v.bottom + m.bottom) / w.y,
    left: (v.left - k.left + m.left) / w.x,
    right: (k.right - v.right + m.right) / w.x
  };
}
const Xc = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: r,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Me(s, t) || {};
    if (c == null)
      return {};
    const h = Bo(u), p = {
      x: e,
      y: n
    }, f = Ii(i), m = Mi(f), _ = await o.getDimensions(c), y = f === "y", v = y ? "top" : "left", b = y ? "bottom" : "right", S = y ? "clientHeight" : "clientWidth", w = r.reference[m] + r.reference[f] - p[f] - r.floating[m], k = p[f] - r.reference[f], N = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let M = N ? N[S] : 0;
    (!M || !await (o.isElement == null ? void 0 : o.isElement(N))) && (M = a.floating[S] || r.floating[m]);
    const $ = w / 2 - k / 2, A = M / 2 - _[m] / 2 - 1, x = Mt(h[v], A), I = Mt(h[b], A), D = x, O = M - _[m] - I, L = M / 2 - _[m] / 2 + $, j = Un(D, L, O), K = !l.arrow && Ie(i) != null && L !== j && r.reference[m] / 2 - (L < D ? x : I) - _[m] / 2 < 0, Y = K ? L < D ? L - D : L - O : 0;
    return {
      [f]: p[f] + Y,
      data: {
        [f]: j,
        centerOffset: L - j - Y,
        ...K && {
          alignmentOffset: Y
        }
      },
      reset: K
    };
  }
}), Qc = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e, n;
      const {
        placement: i,
        middlewareData: r,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: _ = !0,
        ...y
      } = Me(s, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const v = Jt(i), b = he(a), S = Jt(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = p || (S || !_ ? [zs(a)] : qc(a)), N = m !== "none";
      !p && N && k.push(...Yc(a, _, m, w));
      const M = [a, ...k], $ = await Pi(t, y), A = [];
      let x = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (u && A.push($[v]), h) {
        const L = Kc(i, o, w);
        A.push($[L[0]], $[L[1]]);
      }
      if (x = [...x, {
        placement: i,
        overflows: A
      }], !A.every((L) => L <= 0)) {
        var I, D;
        const L = (((I = r.flip) == null ? void 0 : I.index) || 0) + 1, j = M[L];
        if (j)
          return {
            data: {
              index: L,
              overflows: x
            },
            reset: {
              placement: j
            }
          };
        let K = (D = x.filter((Y) => Y.overflows[0] <= 0).sort((Y, P) => Y.overflows[1] - P.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!K)
          switch (f) {
            case "bestFit": {
              var O;
              const Y = (O = x.filter((P) => {
                if (N) {
                  const bt = he(P.placement);
                  return bt === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  bt === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((bt) => bt > 0).reduce((bt, Ya) => bt + Ya, 0)]).sort((P, bt) => P[1] - bt[1])[0]) == null ? void 0 : O[0];
              Y && (K = Y);
              break;
            }
            case "initialPlacement":
              K = a;
              break;
          }
        if (i !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
async function th(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Jt(e), a = Ie(e), l = he(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = Me(t, s);
  let {
    mainAxis: p,
    crossAxis: f,
    alignmentAxis: m
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
  return a && typeof m == "number" && (f = a === "end" ? m * -1 : m), l ? {
    x: f * u,
    y: p * c
  } : {
    x: p * c,
    y: f * u
  };
}
const eh = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      var e, n;
      const {
        x: i,
        y: r,
        placement: o,
        middlewareData: a
      } = t, l = await th(t, s);
      return o === ((e = a.offset) == null ? void 0 : e.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, sh = function(s) {
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
          fn: (y) => {
            let {
              x: v,
              y: b
            } = y;
            return {
              x: v,
              y: b
            };
          }
        },
        ...l
      } = Me(s, t), c = {
        x: e,
        y: n
      }, u = await Pi(t, l), h = he(Jt(i)), p = jo(h);
      let f = c[p], m = c[h];
      if (r) {
        const y = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", b = f + u[y], S = f - u[v];
        f = Un(b, f, S);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = m + u[y], S = m - u[v];
        m = Un(b, m, S);
      }
      const _ = a.fn({
        ...t,
        [p]: f,
        [h]: m
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
}, nh = function(s) {
  return s === void 0 && (s = {}), {
    name: "size",
    options: s,
    async fn(t) {
      const {
        placement: e,
        rects: n,
        platform: i,
        elements: r
      } = t, {
        apply: o = () => {
        },
        ...a
      } = Me(s, t), l = await Pi(t, a), c = Jt(e), u = Ie(e), h = he(e) === "y", {
        width: p,
        height: f
      } = n.floating;
      let m, _;
      c === "top" || c === "bottom" ? (m = c, _ = u === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, m = u === "end" ? "top" : "bottom");
      const y = f - l.top - l.bottom, v = p - l.left - l.right, b = Mt(f - l[m], y), S = Mt(p - l[_], v), w = !t.middlewareData.shift;
      let k = b, N = S;
      if (h ? N = u || w ? Mt(S, v) : v : k = u || w ? Mt(b, y) : y, w && !u) {
        const $ = ht(l.left, 0), A = ht(l.right, 0), x = ht(l.top, 0), I = ht(l.bottom, 0);
        h ? N = p - 2 * ($ !== 0 || A !== 0 ? $ + A : ht(l.left, l.right)) : k = f - 2 * (x !== 0 || I !== 0 ? x + I : ht(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: N,
        availableHeight: k
      });
      const M = await i.getDimensions(r.floating);
      return p !== M.width || f !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pe(s) {
  return Vo(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function dt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vt(s) {
  var t;
  return (t = (Vo(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Vo(s) {
  return s instanceof Node || s instanceof dt(s).Node;
}
function It(s) {
  return s instanceof Element || s instanceof dt(s).Element;
}
function Pt(s) {
  return s instanceof HTMLElement || s instanceof dt(s).HTMLElement;
}
function xr(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof dt(s).ShadowRoot;
}
function us(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = xt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function ih(s) {
  return ["table", "td", "th"].includes(Pe(s));
}
function pn(s) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return s.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ri(s) {
  const t = Di(), e = xt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function rh(s) {
  let t = Zt(s);
  for (; Pt(t) && !Te(t); ) {
    if (pn(t))
      return null;
    if (Ri(t))
      return t;
    t = Zt(t);
  }
  return null;
}
function Di() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Te(s) {
  return ["html", "body", "#document"].includes(Pe(s));
}
function xt(s) {
  return dt(s).getComputedStyle(s);
}
function gn(s) {
  return It(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.scrollX,
    scrollTop: s.scrollY
  };
}
function Zt(s) {
  if (Pe(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    xr(s) && s.host || // Fallback.
    Vt(s)
  );
  return xr(t) ? t.host : t;
}
function Uo(s) {
  const t = Zt(s);
  return Te(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : Pt(t) && us(t) ? t : Uo(t);
}
function Ze(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Uo(s), r = i === ((n = s.ownerDocument) == null ? void 0 : n.body), o = dt(i);
  return r ? t.concat(o, o.visualViewport || [], us(i) ? i : [], o.frameElement && e ? Ze(o.frameElement) : []) : t.concat(i, Ze(i, [], e));
}
function Ko(s) {
  const t = xt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Pt(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Ls(e) !== r || Ls(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Li(s) {
  return It(s) ? s : s.contextElement;
}
function Se(s) {
  const t = Li(s);
  if (!Pt(t))
    return Yt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Ko(t);
  let o = (r ? Ls(e.width) : e.width) / n, a = (r ? Ls(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const oh = /* @__PURE__ */ Yt(0);
function qo(s) {
  const t = dt(s);
  return !Di() || !t.visualViewport ? oh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ah(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== dt(s) ? !1 : t;
}
function ue(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Li(s);
  let o = Yt(1);
  t && (n ? It(n) && (o = Se(n)) : o = Se(s));
  const a = ah(r, e, n) ? qo(r) : Yt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const p = dt(r), f = n && It(n) ? dt(n) : n;
    let m = p, _ = m.frameElement;
    for (; _ && n && f !== m; ) {
      const y = Se(_), v = _.getBoundingClientRect(), b = xt(_), S = v.left + (_.clientLeft + parseFloat(b.paddingLeft)) * y.x, w = v.top + (_.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, u *= y.x, h *= y.y, l += S, c += w, m = dt(_), _ = m.frameElement;
    }
  }
  return Os({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
function lh(s) {
  let {
    elements: t,
    rect: e,
    offsetParent: n,
    strategy: i
  } = s;
  const r = i === "fixed", o = Vt(n), a = t ? pn(t.floating) : !1;
  if (n === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Yt(1);
  const u = Yt(0), h = Pt(n);
  if ((h || !h && !r) && ((Pe(n) !== "body" || us(o)) && (l = gn(n)), Pt(n))) {
    const p = ue(n);
    c = Se(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + u.y
  };
}
function ch(s) {
  return Array.from(s.getClientRects());
}
function Go(s) {
  return ue(Vt(s)).left + gn(s).scrollLeft;
}
function hh(s) {
  const t = Vt(s), e = gn(s), n = s.ownerDocument.body, i = ht(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ht(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Go(s);
  const a = -e.scrollTop;
  return xt(n).direction === "rtl" && (o += ht(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function uh(s, t) {
  const e = dt(s), n = Vt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = Di();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function dh(s, t) {
  const e = ue(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = Pt(s) ? Se(s) : Yt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Tr(s, t, e) {
  let n;
  if (t === "viewport")
    n = uh(s, e);
  else if (t === "document")
    n = hh(Vt(s));
  else if (It(t))
    n = dh(t, e);
  else {
    const i = qo(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Os(n);
}
function Yo(s, t) {
  const e = Zt(s);
  return e === t || !It(e) || Te(e) ? !1 : xt(e).position === "fixed" || Yo(e, t);
}
function fh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Ze(s, [], !1).filter((a) => It(a) && Pe(a) !== "body"), i = null;
  const r = xt(s).position === "fixed";
  let o = r ? Zt(s) : s;
  for (; It(o) && !Te(o); ) {
    const a = xt(o), l = Ri(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || us(o) && !l && Yo(s, o)) ? n = n.filter((u) => u !== o) : i = a, o = Zt(o);
  }
  return t.set(s, n), n;
}
function ph(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? pn(t) ? [] : fh(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, u) => {
    const h = Tr(t, u, i);
    return c.top = ht(h.top, c.top), c.right = Mt(h.right, c.right), c.bottom = Mt(h.bottom, c.bottom), c.left = ht(h.left, c.left), c;
  }, Tr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function gh(s) {
  const {
    width: t,
    height: e
  } = Ko(s);
  return {
    width: t,
    height: e
  };
}
function mh(s, t, e) {
  const n = Pt(t), i = Vt(t), r = e === "fixed", o = ue(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yt(0);
  if (n || !n && !r)
    if ((Pe(t) !== "body" || us(i)) && (a = gn(t)), n) {
      const h = ue(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Go(i));
  const c = o.left + a.scrollLeft - l.x, u = o.top + a.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: o.width,
    height: o.height
  };
}
function $n(s) {
  return xt(s).position === "static";
}
function Nr(s, t) {
  return !Pt(s) || xt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Jo(s, t) {
  const e = dt(s);
  if (pn(s))
    return e;
  if (!Pt(s)) {
    let i = Zt(s);
    for (; i && !Te(i); ) {
      if (It(i) && !$n(i))
        return i;
      i = Zt(i);
    }
    return e;
  }
  let n = Nr(s, t);
  for (; n && ih(n) && $n(n); )
    n = Nr(n, t);
  return n && Te(n) && $n(n) && !Ri(n) ? e : n || rh(s) || e;
}
const _h = async function(s) {
  const t = this.getOffsetParent || Jo, e = this.getDimensions, n = await e(s.floating);
  return {
    reference: mh(s.reference, await t(s.floating), s.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function yh(s) {
  return xt(s).direction === "rtl";
}
const vh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: lh,
  getDocumentElement: Vt,
  getClippingRect: ph,
  getOffsetParent: Jo,
  getElementRects: _h,
  getClientRects: ch,
  getDimensions: gh,
  getScale: Se,
  isElement: It,
  isRTL: yh
};
function bh(s, t) {
  let e = null, n;
  const i = Vt(s);
  function r() {
    var a;
    clearTimeout(n), (a = e) == null || a.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: u,
      width: h,
      height: p
    } = s.getBoundingClientRect();
    if (a || t(), !h || !p)
      return;
    const f = ys(u), m = ys(i.clientWidth - (c + h)), _ = ys(i.clientHeight - (u + p)), y = ys(c), b = {
      rootMargin: -f + "px " + -m + "px " + -_ + "px " + -y + "px",
      threshold: ht(0, Mt(1, l)) || 1
    };
    let S = !0;
    function w(k) {
      const N = k[0].intersectionRatio;
      if (N !== l) {
        if (!S)
          return o();
        N ? o(!1, N) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
    }
    try {
      e = new IntersectionObserver(w, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(w, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Zo(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Li(s), u = i || r ? [...c ? Ze(c) : [], ...Ze(t)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", e, {
      passive: !0
    }), r && v.addEventListener("resize", e);
  });
  const h = c && a ? bh(c, e) : null;
  let p = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = f) == null || S.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let m, _ = l ? ue(s) : null;
  l && y();
  function y() {
    const v = ue(s);
    _ && (v.x !== _.x || v.y !== _.y || v.width !== _.width || v.height !== _.height) && e(), _ = v, m = requestAnimationFrame(y);
  }
  return e(), () => {
    var v;
    u.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h == null || h(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(m);
  };
}
const zi = eh, Oi = sh, Fi = Qc, Xo = nh, wh = Xc, Hi = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: vh,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Zc(s, t, {
    ...i,
    platform: r
  });
};
class Qo extends B {
  constructor(t) {
    super(t), this._ref = Z(), this._handleDocClick = (e) => {
      const { state: { open: n }, id: i, togglePop: r } = this.props, o = d(e.target);
      n !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return d(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, n = d(t.target), i = n.closest("[data-pick-value]");
    if (i.length)
      return t.stopPropagation(), e(!1, { value: `${i.dataset("pickValue")}` });
    if (n.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: n, pickerName: i, empty: r } = t, { open: o } = n;
    return T(
      "pick-pop",
      i ? `${i}-pick-pop` : "",
      e,
      o === !0 && "in",
      r ? "is-empty-value" : ""
    );
  }
  _getProps(t) {
    const {
      id: e,
      style: n,
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    } = t, l = d.extend({
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    }, n);
    return {
      id: `pick-pop-${e}`,
      className: this._getClass(t),
      style: l,
      ref: this._ref,
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!this._container) {
      const e = d(t.container || "body");
      let n = e.find(".pick-container");
      n.length || (n = d("<div>").addClass("pick-container").appendTo(e)), this._container = n[0];
    }
    return this._container;
  }
  _render(t) {
    return /* @__PURE__ */ g("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  _getStyle(t = {}, e) {
    var c;
    const n = (c = this.trigger) == null ? void 0 : c.getBoundingClientRect();
    if (!n)
      return {};
    const { width: i, minWidth: r, maxWidth: o, maxHeight: a } = this.props, l = n.width;
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = Cs(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
      let u;
      if (e.includes("bottom"))
        u = window.innerHeight - n.bottom - 2;
      else {
        const h = this.element.getBoundingClientRect().height;
        u = n.top, h > u && typeof t.top == "number" && (t.top += h - u);
      }
      u && (t.maxHeight = typeof a == "number" ? Math.min(u, a) : u);
    } else
      a && (t.maxHeight = a);
    return t;
  }
  layout() {
    const { element: t, trigger: e, props: n } = this, { state: i } = n;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = Zo(e, t, () => {
      const { placement: r, width: o } = n;
      Hi(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Fi() : null, Oi(), zi(1)].filter(Boolean)
      }).then(({ x: a, y: l, placement: c }) => {
        var u, h;
        if (pe(e) || !on(e)) {
          d(t).css({ display: "none" });
          return;
        }
        d(t).css(this._getStyle({
          left: a,
          top: l
        }, c)), (h = (u = this.props).onLayout) == null || h.call(u, t);
      }), o === "100%" && d(t).css(this._getStyle());
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), d(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, n;
    d(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, d(`#pick-pop-${this.props.id}`).remove(), (n = (e = this.props).beforeDestroy) == null || n.call(e);
  }
  render(t) {
    return bc(this._render(t), this._getContainer(t));
  }
}
let vt = class extends B {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = Z(), this._trigger = Z(), this.toggle = async (e, n) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      this._toggleTimer && (clearTimeout(this._toggleTimer), this._toggleTimer = 0);
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await Is(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await Is(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this._id = t.id ?? `_pick${ut()}`, this.changeState = this.changeState.bind(this), this.state = this.getDefaultState(t);
  }
  get id() {
    return this._id;
  }
  get pop() {
    return this._pop.current;
  }
  get trigger() {
    return this._trigger.current;
  }
  get value() {
    return this.state.value;
  }
  getDefaultState(t) {
    return {
      value: String((t || this.props).defaultValue ?? ""),
      open: !1
    };
  }
  resetState(t, e) {
    const n = this.getDefaultState(t);
    e ? this.state = n : this.changeState(n);
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
      ref: this._trigger,
      state: e,
      className: t.className,
      pickerName: t.pickerName,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      disabled: t.disabled,
      readonly: t.readonly,
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
      pickerName: t.pickerName,
      style: t.popStyle,
      disabled: t.disabled,
      readonly: t.readonly,
      changeState: this.changeState,
      togglePop: this.toggle,
      placement: t.popPlacement,
      container: t.popContainer,
      width: t.popWidth,
      height: t.popHeight,
      minHeight: t.popMinHeight,
      maxHeight: t.popMaxHeight,
      maxWidth: t.popMaxWidth,
      minWidth: t.popMinWidth,
      limitInScreen: t.limitPopInScreen
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
  _isEmptyValue() {
    const { value: t } = this.state;
    return t == null || t === "";
  }
  _handleChange(t, e) {
    const { onChange: n } = this.props;
    n && n.call(this, t, e);
  }
  _handlePopToggle(t) {
    const { onPopShown: e, onPopHidden: n } = this.props;
    t === !0 && e ? e.call(this) : !t && n && n.call(this);
  }
  setValue(t, e) {
    if (e) {
      const n = this._trigger.current;
      n && (n._skipTriggerChange = t);
    }
    return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: n } = this.state, { open: i } = e;
    if (!n == !i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r.call(this) : !i && o && o.call(this);
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: r, value: o } = e;
    !!n != !!r && this._handlePopToggle(!!n), i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), this._toggleTimer && clearTimeout(this._toggleTimer);
    const t = this._pop.current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n && (!t.hidePopWhenEmpty || !this._isEmptyValue())) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ g(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ g(Ee, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
vt.Trigger = Ai;
vt.Pop = Qo;
vt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  limitPopInScreen: !0,
  clickType: "open"
};
let ta = class extends vt {
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return e.value === void 0 && (t || this.props).required && (e.value = this.getColors()[0]), e;
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
    if (t && d(t).css("backgroundColor", r), e && d(e).css("borderColor", r), n && d(n).css("color", r), i) {
      const o = d(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ g(et, { icon: n }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = d.extend({
      color: e.value
    }, n.style), n.className = T("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ g("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ g("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ g("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(et, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(et, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
ta.defaultProps = {
  ...vt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class ea extends U {
}
ea.NAME = "ColorPicker";
ea.Component = ta;
const Xe = 24 * 60 * 60 * 1e3, V = (s) => s === void 0 ? /* @__PURE__ */ new Date() : (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s), Ch = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(V(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, oe = (s, t = /* @__PURE__ */ new Date()) => V(s).toDateString() === V(t).toDateString(), qn = (s, t = /* @__PURE__ */ new Date()) => V(s).getFullYear() === V(t).getFullYear(), sa = (s, t = /* @__PURE__ */ new Date()) => (s = V(s), t = V(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Zu = (s, t = /* @__PURE__ */ new Date()) => {
  s = V(s), t = V(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Xu = (s, t) => oe(V(t), s), Qu = (s, t) => oe(V(t).getTime() - Xe, s), td = (s, t) => oe(V(t).getTime() + Xe, s), na = (s) => s != null && !isNaN(V(s).getTime()), Tt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = V(s), !na(s))
    return e;
  if (typeof t == "function")
    return t(s);
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", qn(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, ed = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = Tt(s, qn(s) ? n.month : n.full);
  if (oe(s, t))
    return i;
  const r = Tt(t, qn(s, t) ? sa(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
class ia extends B {
  constructor() {
    super(...arguments), this._ref = Z(), this._handleClickItem = (t, e) => {
      var n, i;
      (i = (n = this.props).onChange) == null || i.call(n, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      d(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
    }, 100);
  }
  render(t) {
    const { minuteStep: e = 5, hour: n, minute: i } = t, r = [], o = [];
    for (let l = 0; l < 24; ++l)
      r.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: n === l });
    for (let l = 0; l < 60; l += e)
      o.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: i === l });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ g("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ g(
        pt,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ g(
        pt,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const Er = (s) => {
  if (!s)
    return;
  const t = V(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let ra = class extends vt {
  constructor() {
    super(...arguments), this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (t) => {
      this.setTime(t.target.value);
    }, this._handleSetTime = (t, e) => {
      this.setTime({ [t]: String(e) });
    }, this._handleClearBtnClick = () => {
      this.setTime("");
    };
  }
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return e.value === "now" && (e.value = Tt(/* @__PURE__ */ new Date(), (t || this.props).format)), e;
  }
  setTime(t) {
    if (this.props.disabled || this.props.readonly)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: c = +a, minute: u = +l } = t;
      e = `${c}:${u}`;
    }
    const n = Er(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? Tt(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = Er(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ g("i", { class: "i-time" }) : h = /* @__PURE__ */ g(et, { icon: i })), [
      /* @__PURE__ */ g("input", { id: u, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ g("label", { for: u, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: T(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ g(ia, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
ra.defaultProps = {
  ...vt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function Sh(s, t, e) {
  return t && s < t ? t : e && s > e ? e : s;
}
function Ve(s) {
  if (s == null)
    return null;
  if (typeof s == "function" && (s = s()), typeof s == "string" && s.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    s.length > 6 ? s = Ch(t, s.substring(5).replace("+", "")) : s = t;
  } else
    s = V(s);
  return na(s) ? s : null;
}
H.addLang({
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
const kh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Xe;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, $r = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => Tt(e, t)));
class xh extends B {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const n = d(t.target).closest(".mini-calendar-day").dataset("date");
      n && e(n);
    };
  }
  render(t) {
    var A, x;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: n = 1,
      weekNames: i = H.getLang("weekNames"),
      monthNames: r = H.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h
    } = t, p = [], f = "btn ghost square rounded-full";
    for (let I = 0; I < 7; I++) {
      const D = (n + I) % 7;
      p.push(/* @__PURE__ */ g("div", { className: T("col mini-calendar-day", { "is-weekend": D === 0 || D === 6 }), children: /* @__PURE__ */ g("div", { children: i ? i[D] : D }) }, I));
    }
    const { startTime: m, days: _, firstDay: y } = kh(o, a, n), v = y + _ * Xe;
    let b = m;
    const S = [], w = "yyyy-MM-dd", k = $r(l, w), N = $r(c, w), M = ((A = u ? V(u) : null) == null ? void 0 : A.getTime()) ?? Number.MAX_SAFE_INTEGER, $ = ((x = h ? V(h) : null) == null ? void 0 : x.getTime()) ?? 0;
    for (; b <= v; ) {
      const I = [];
      for (let D = 0; D < 7; D++) {
        const O = new Date(b), L = O.getDate(), j = Tt(O, w), K = O.getDay(), Y = sa(O, y), P = T("col mini-calendar-day", {
          active: k.has(j),
          selected: N.has(j),
          "is-first": L === 1,
          "is-in-month": Y,
          "is-out-month": !Y,
          "is-today": oe(O, e),
          "is-weekend": K === 0 || K === 6,
          disabled: !oe(O, M) && !oe(O, $) && (b > M || b < $)
        });
        I.push(
          /* @__PURE__ */ g("div", { className: P, "data-date": j, children: /* @__PURE__ */ g("button", { type: "button", className: f, onClick: this._handleClickDate, children: L === 1 && r ? r[O.getMonth()] : O.getDate() }) }, j)
        ), b += Xe;
      }
      S.push(/* @__PURE__ */ g("div", { className: "row", children: I }, b));
    }
    return /* @__PURE__ */ g("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ g("div", { className: "row", children: p }),
      S
    ] });
  }
}
var Gs, Ys;
class Ar extends B {
  constructor() {
    super(...arguments);
    lt(this, Gs, Z());
    lt(this, Ys, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = d(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ g(J, { type: "ghost", "data-value": c, active: c === o, className: T(l === c ? "is-current" : ""), onClick: ot(this, Ys), children: c }, c));
    return /* @__PURE__ */ g("div", { className: n, ref: ot(this, Gs), children: a });
  }
}
Gs = new WeakMap(), Ys = new WeakMap();
var ss, ns, is, rs, os, as, Js, oa, Zs, aa;
class Th extends B {
  constructor(e) {
    super(e);
    lt(this, Js);
    lt(this, Zs);
    lt(this, ss, void 0);
    lt(this, ns, void 0);
    lt(this, is, void 0);
    lt(this, rs, void 0);
    lt(this, os, void 0);
    lt(this, as, void 0);
    mt(this, ss, Z()), mt(this, ns, (r) => {
      const o = d(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), mt(this, is, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), mt(this, rs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), mt(this, os, (r) => {
      this.setState({ year: r, select: "day" });
    }), mt(this, as, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: n } = e, i = Ve(n) || /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((n) => n.select === e ? { select: "day" } : { select: e });
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = H.getLang("yearFormat") || "{0}",
      weekNames: o = H.getLang("weekNames"),
      monthNames: a = H.getLang("monthNames"),
      minDate: l,
      maxDate: c,
      weekStart: u
    } = e, h = Ve(i), {
      year: p,
      month: f,
      select: m
    } = n, _ = m === "day", y = l || V("1970-1-1"), v = c || V("2099-12-31");
    return /* @__PURE__ */ g("div", { className: "date-picker-menu row", ref: ot(this, ss), onClick: ot(this, ns), children: [
      wn(this, Js, oa).call(this, e),
      /* @__PURE__ */ g("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ g("div", { className: "row p-2", children: [
          /* @__PURE__ */ g(J, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: q(r, p) }),
          /* @__PURE__ */ g(J, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[f - 1] : f }),
          /* @__PURE__ */ g("div", { className: "flex-auto" }),
          _ ? /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ g(J, { type: "ghost", size: "sm", square: !0, onClick: ot(this, is), children: /* @__PURE__ */ g("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ g(J, { type: "ghost", size: "sm", square: !0, onClick: ot(this, rs), children: /* @__PURE__ */ g("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        _ ? /* @__PURE__ */ g(
          xh,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: v,
            minDate: y,
            year: p,
            month: f,
            selections: h || [],
            onClickDate: this.changeDate
          }
        ) : null,
        m === "year" ? /* @__PURE__ */ g(
          Ar,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: p,
            min: y.getFullYear(),
            max: v.getFullYear(),
            onChange: ot(this, os)
          }
        ) : m === "month" ? /* @__PURE__ */ g(
          Ar,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: f,
            min: 1,
            max: 12,
            onChange: ot(this, as)
          }
        ) : null,
        _ ? wn(this, Zs, aa).call(this, e) : null
      ] })
    ] });
  }
}
ss = new WeakMap(), ns = new WeakMap(), is = new WeakMap(), rs = new WeakMap(), os = new WeakMap(), as = new WeakMap(), Js = new WeakSet(), oa = function(e) {
  return pt.render(e.menu, [], {
    onClickItem: (n) => {
      const i = n.item.value;
      typeof i == "string" && this.changeDate(i);
    }
  }, this);
}, Zs = new WeakSet(), aa = function(e) {
  let { actions: n } = e;
  const { todayText: i = H.getLang("today"), clearText: r } = e;
  return n === void 0 && (n = [{ text: i, "data-set-date": Tt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ g("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ g(kt, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ g(J, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let mn = class extends vt {
  constructor() {
    super(...arguments), this.setDate = (t) => {
      const { disabled: e, readonly: n } = this.props;
      if (e || n)
        return;
      const i = this._calcValue(t);
      this.setState({ value: i }, () => {
        this._afterSetDate();
      });
    }, this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (t) => {
      this.setDate(t.target.value);
    }, this._handleClearBtnClick = () => {
      this.setDate("");
    }, this._handleSetDate = (t) => {
      this.setDate(t);
    };
  }
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return {
      ...e,
      value: this._calcValue(e.value)
    };
  }
  getDate() {
    return this._date;
  }
  _calcValue(t) {
    const { onInvalid: e, defaultValue: n = "", required: i, allowInvalid: r, format: o } = this.props;
    let a = this._parseDate(t);
    if (!a && e) {
      const l = e(t);
      l && (a = this._parseDate(l));
    }
    return this._date = a, a ? Tt(a, o) : r ? t : i ? n : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: n } = this.props;
    return [Ve(typeof e == "function" ? e(t) : e), Ve(typeof n == "function" ? n(t) : n)];
  }
  _parseDate(t) {
    const e = Ve(t);
    return e ? Sh(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let p;
    u && !r && c.length ? p = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? p = /* @__PURE__ */ g("i", { class: "i-calendar" }) : p = /* @__PURE__ */ g(et, { icon: i }));
    const f = u ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ g(
        "input",
        {
          id: h,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: f,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: this._handleInputFocus,
          onChange: this._handleInputChange
        },
        "input"
      ),
      p ? /* @__PURE__ */ g("label", { for: h, className: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: T(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: T(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: u, required: h } = t, [p, f] = this._getDateRange(e.value);
    return /* @__PURE__ */ g(
      Th,
      {
        onChange: this._handleSetDate,
        date: this._date,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: h ? "" : l,
        menu: c,
        actions: u,
        minDate: p,
        maxDate: f
      }
    );
  }
};
mn.defaultProps = {
  ...vt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let la = class extends mn {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = V(t), n = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(n.getHours()), e.setMinutes(n.getMinutes()), this.setDate(Tt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const n = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? n.setHours(e) : n.setMinutes(e), this.setDate(Tt(n, this.props.format));
    };
  }
  getTime() {
    const t = this.getDate();
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _afterSetDate() {
  }
  _renderPop(t, e) {
    const [n, i] = this.getTime() || [];
    return /* @__PURE__ */ g("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ g("div", { className: "divider" }),
      /* @__PURE__ */ g(
        ia,
        {
          hour: n,
          minute: i,
          minuteStep: t.minuteStep,
          onChange: this._handleSetTime
        }
      )
    ] });
  }
};
la.defaultProps = {
  ...mn.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Wi extends U {
}
Wi.NAME = "TimePicker";
Wi.Component = ra;
Wi.register();
class ji extends U {
}
ji.NAME = "DatePicker";
ji.Component = mn;
ji.register();
class Bi extends U {
}
Bi.NAME = "DatetimePicker";
Bi.Component = la;
Bi.register();
const Mr = "show", An = "in", Nh = '[data-dismiss="modal"]', vs = "modal-hide", Re = class se extends gt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Nh) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  static get SELECTOR() {
    return ".modal";
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this._shown;
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
          if (!this._shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        n.observe(e), this._rob = n;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize(), this.on("hidden", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && !se.getAll().some((n) => n.shown) && d("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && d("html").disableScroll();
    }), this.shown && d("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    const { modalElement: e } = this, n = d(e);
    if (this._shown && n.hasClass(An))
      return n.removeClass(vs).css("z-index", `${se.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    n.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [vs]: !1
    }, Mr, o).css({
      zIndex: `${se.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !n.closest(c.modalElement).length && c.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((c) => {
      c !== this && !n.closest(c.modalElement).length && c.hide();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      n.addClass(An), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    d(this.modalElement).addClass(vs);
  }
  hide() {
    if (!this._shown)
      return !1;
    this._shown = !1, d(this.modalElement).removeClass(An), this.emit("hide"), this._setTimer(() => {
      d(this.modalElement).removeClass(Mr), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((e) => {
      e.shown && e !== this && d(e.modalElement).removeClass(vs);
    }), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = d(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const u = { width: "", height: "" };
      typeof e == "object" ? (u.width = e.width, u.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (u.width = e), i.css(u);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), d(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return se.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = se.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = se.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
Re.NAME = "Modal";
Re.MULTI_INSTANCE = !0;
Re.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Re.hideOthers = !0;
Re.zIndex = 1500;
let Qe = Re;
d(window).on(`resize.${Qe.NAMESPACE}`, () => {
  Qe.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class ca extends B {
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
    return Ct(t) ? t : t === !1 || !n ? null : t ? /* @__PURE__ */ g(z, { className: T("modal-header", e), content: t }) : /* @__PURE__ */ g("div", { className: T("modal-header", e), children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : Ct(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(kt, { ...t }) : null,
      e ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? Ct(t) ? t : /* @__PURE__ */ g(z, { className: T("modal-body", e), content: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return Ct(t) ? t : t === !1 || !n ? null : t ? /* @__PURE__ */ g(z, { className: T("modal-footer", e), content: t }) : /* @__PURE__ */ g("div", { className: T("modal-footer", e), children: n ? /* @__PURE__ */ g(kt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ g("div", { className: T("modal-dialog", t), style: e, children: /* @__PURE__ */ g("div", { className: T("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
ca.defaultProps = { closeBtn: !0 };
class ha extends B {
  constructor() {
    super(...arguments), this._ref = Z(), this.state = {}, this._handleIframeLoad = () => {
      const t = this.iframeDoc;
      if (!t)
        return;
      const { iframeBodyClass: e, watchHeight: n } = this.props;
      n && this._watchIframeHeight(), e && t.body.classList.add(e);
    };
  }
  get iframeDoc() {
    var t, e;
    return (e = (t = this._ref.current) == null ? void 0 : t.contentWindow) == null ? void 0 : e.document;
  }
  componentDidMount() {
    this.props.watchHeight && this._watchIframeHeight();
  }
  componentWillUnmount() {
    var t;
    (t = this._rob) == null || t.disconnect();
  }
  _watchIframeHeight() {
    const t = this.iframeDoc;
    if (!t)
      return;
    let e = this._rob;
    e == null || e.disconnect(), e = new ResizeObserver(() => {
      const n = t.body, i = t.documentElement, r = Math.ceil(Math.max(n.scrollHeight, n.offsetHeight, i.offsetHeight)) + 1;
      this.setState({ height: r });
    }), e.observe(t.body), e.observe(t.documentElement), this._rob = e;
  }
  render() {
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: this.props.url,
        ref: this._ref,
        onLoad: this._handleIframeLoad
      }
    );
  }
}
ha.defaultProps = {
  watchHeight: !0
};
var Vi = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, wt = (s, t, e) => (Vi(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ze = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, me = (s, t, e, n) => (Vi(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ss = (s, t, e) => (Vi(s, t, "access private method"), e), Lt, Oe, zt, Fs, Ui, ks, Gn;
function Eh(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function $h(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await d.ajax({
    url: n,
    headers: {
      "X-ZUI-Modal": "true"
    },
    ...i
  });
  if (e !== "html")
    try {
      const u = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...u
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [c] : {
    title: o,
    ...r,
    body: e === "html" ? /* @__PURE__ */ g(xe, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Ah(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ g(ha, { url: e, watchHeight: !o })
  };
}
const Mh = {
  custom: Eh,
  ajax: $h,
  iframe: Ah
}, Ir = "loading", ua = class ye extends Qe {
  constructor() {
    super(...arguments), ze(this, Fs), ze(this, ks), ze(this, Lt, void 0), ze(this, Oe, void 0), ze(this, zt, void 0);
  }
  get id() {
    return wt(this, Oe);
  }
  get loading() {
    var t;
    return (t = wt(this, Lt)) == null ? void 0 : t.classList.contains(Ir);
  }
  get shown() {
    var t;
    return !!((t = wt(this, Lt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = wt(this, Lt);
    if (!t) {
      const { options: e } = this;
      let n = wt(this, Oe);
      n || (n = e.id || `modal-${ut()}`, me(this, Oe, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], t)
        d(t).data(this.constructor.KEY, this);
      else {
        const r = this.key;
        t = d("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      me(this, Lt, t);
    }
    return t;
  }
  get $emitter() {
    const t = wt(this, Lt);
    return t ? d(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destroyOnHide && this.options.type !== "static" && this.on("hidden", (t) => {
      d(t.target).data("key") === this.key && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = wt(this, Lt);
    t && (d(t).removeData(this.constructor.KEY).remove(), me(this, Lt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    wt(this, zt) && clearTimeout(wt(this, zt));
    const { modalElement: t, options: e } = this, n = d(t), { type: i, loadTimeout: r, loadingClass: o = Ir, loadingText: a = null } = e;
    if (!i || i === "static")
      return !0;
    const l = Mh[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", a).addClass(o), r && me(this, zt, window.setTimeout(() => {
      me(this, zt, 0), Ss(this, ks, Gn).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return this._destroyed ? !1 : (c === !1 ? await Ss(this, ks, Gn).call(this, this.options.failedTip) : c && typeof c == "object" && await Ss(this, Fs, Ui).call(this, c), wt(this, zt) && (clearTimeout(wt(this, zt)), me(this, zt, 0)), this.layout(), await Is(100), n.removeClass(o), !0);
  }
  static isValid(t) {
    return !d.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), !r.type && t.id && (r.type = "static"), r.key === void 0 && (r.key = r.id);
      const o = ye.ensure(n, r), a = `${ye.NAMESPACE}.open${ut()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...u } = t, h = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ g("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ g("div", { children: n });
    i ? p = /* @__PURE__ */ g("div", { className: T("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ g("div", { className: `icon ${i} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ g("div", { className: T("modal-body", h.bodyClass), children: p });
    const f = [];
    (Array.isArray(o) ? o : [o]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = H.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let m;
    const _ = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: v }) => {
        const b = ye.query(v.target);
        if (!b || b.key !== c)
          return;
        m = y.key, (a == null ? void 0 : a(y, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await ye.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      modal: !0,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: _, ...h },
      ...u
    }), m;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ye.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Lt = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakSet();
Ui = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return d(this.modalElement).html(s[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, Ce(
      /* @__PURE__ */ g(ca, { ...s }),
      this.modalElement
    );
  });
};
ks = /* @__PURE__ */ new WeakSet();
Gn = function(s) {
  if (s)
    return Ss(this, Fs, Ui).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: s })
    });
};
ua.DEFAULT = {
  ...Qe.DEFAULT,
  loadTimeout: 1e4,
  destroyOnHide: !0
};
let Hs = ua;
Hs.register();
class Ue extends gt {
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
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), n.key === void 0 && (n.key = `${this._key}`), n;
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
      e = Qe.ensure(n, t);
    } else
      e = Hs.ensure(this.container, t);
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
Ue.NAME = "ModalTrigger";
Ue.toggle = {
  name: "modal",
  skip: "[disabled],.disabled,.open-in-parent",
  convertHref: !0,
  onGet(s) {
    return Ue.get(s);
  },
  onCreate(s, t, e) {
    return new Ue(s, e);
  }
};
Ue.register();
const Ih = {
  zh_cn: {
    selectFile: "选择文件",
    fileSelectTip: "（不超过 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超过了 {maxSize} 的限制。",
    exceededTotalSizeTip: "文件 “{name}”（{size}） 超过了总大小 {totalFileSize} 的限制。",
    exceededCountTip: "文件 “{name}”（{size}） 超过了数量 {maxFileCount} 的限制。"
  },
  zh_tw: {
    selectFile: "選擇文件",
    fileSelectTip: "（不超過 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超過了 {maxFileSize} 的限制。",
    exceededTotalSizeTip: "文件 “{name}”（{size}） 超過了總大小 {totalFileSize} 的限制。",
    exceededCountTip: "文件 “{name}”（{size}） 超過了數量 {maxFileCount} 的限制。"
  },
  en: {
    selectFile: "Select File",
    fileSelectTip: "(Not exceeding {maxFileSize})",
    removeFile: "Remove File",
    renameFile: "Rename",
    duplicatedTip: "File “{name}” ({size}) already exists.",
    exceededSizeTip: "File “{name}” ({size}) exceeds the limit of {maxFileSize}.",
    exceededTotalSizeTip: "File “{name}” ({size}) exceeds the total size limit of {totalFileSize}.",
    exceededCountTip: "File “{name}” ({size}) exceeds the limit of {maxFileCount}."
  }
};
let Xt = class extends tt {
  constructor(t) {
    super(t), this._input = Z(), this._file = Z(), this._id = `file-selector-input-${ut()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: n } = this.state;
      this.cancelRenameFile(), !(!e || !n) && this.renameFile(e, n);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const n = e.target;
      n.files && (this.selectFiles(n.files), this.setState({ inputKey: ut() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const n = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      n.length && (this.selectFiles(n), this.setState({ inputKey: ut() }));
    }, this._handleRenameChange = (e) => {
      this.setState({
        newName: e.target.value
      });
    }, this._handleClick = (e) => {
      if (this.props.disabled)
        return;
      const i = d(e.target).closest("[data-remove-file],[data-rename-file]");
      if (!i.length)
        return;
      const r = i.data();
      r.renameFile ? this.startRenameFile(r.renameFile) : r.removeFile && this.removeFile(r.removeFile);
    }, this.state = {
      files: (t.defaultFiles || []).map((e) => this.constructor.getInfo(e)),
      inputKey: 0
    };
  }
  get size() {
    return this.state.files.reduce((t, e) => t + e.size, 0);
  }
  get count() {
    return this.state.files.length;
  }
  get multiple() {
    const { multiple: t, maxFileCount: e, name: n = "" } = this.props;
    return !!(e !== 1 && (t ?? n.endsWith("[]")));
  }
  get info() {
    const { maxFileSize: t = 0, maxFileCount: e = Number.MAX_SAFE_INTEGER } = this.props;
    return {
      size: Dt(this.size, 1),
      maxFileSize: Dt(typeof t == "string" ? gs(t) : t, 1),
      maxFileCount: e,
      count: this.count
    };
  }
  get files() {
    return this._data.files;
  }
  componentDidMount() {
    const t = this.state.files.reduce((e, n) => (n.file && e.push(n.file), e), []);
    t.length && (t.forEach((e) => this._data.items.add(e)), this._syncFiles());
  }
  getFile(t) {
    return this.state.files.find((e) => e.id === t);
  }
  getFileByName(t) {
    return this.state.files.find((e) => e.name === t);
  }
  select() {
    var t;
    (t = this._input.current) == null || t.click();
  }
  async selectFiles(t) {
    var e;
    if (((e = this.props.onSelect) == null ? void 0 : e.call(this, t)) !== !1) {
      this._skipAddMore = !1;
      for (let n = 0; n < t.length && (await this.addFile(t[n]), !this._skipAddMore); n++)
        ;
    }
  }
  async _checkDuplicated(t) {
    const { allowSameName: e, onDuplicated: n, duplicatedTip: i = this.i18n("duplicatedTip") } = this.props, { name: r } = t, o = e ? this.getFile(t.id) : this.getFileByName(r);
    return o ? ((n == null ? void 0 : n.call(this, r, t, o)) === !0 || i && await this._showAlert(i, {
      name: r,
      size: Dt(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: n, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? gs(e) : e;
    return t.size <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Dt(t.size, 1)
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: n, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? gs(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Dt(t.size, 1),
      totalSize: Dt(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: n, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((n == null ? void 0 : n.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Dt(t.size, 1),
      exceededCount: r
    }), !0);
  }
  async addFile(t) {
    const { onAdd: e, disabled: n } = this.props;
    if (n)
      return !1;
    const i = this.constructor.getInfo(t);
    return await this._checkExceededCount(i) ? (this._skipAddMore = !0, !1) : await this._checkDuplicated(i) ? !1 : await this._checkExceededSize(i) ? (this._skipAddMore = !0, !1) : await this._checkTotalSize(i) ? (this._skipAddMore = !0, !1) : e && e.call(this, i) === !1 ? !1 : (this._data.items.add(t), this._syncFiles(!0), await this.changeState((c) => ({ files: [...c.files, i] })), !0);
  }
  startRenameFile(t) {
    this.setState({ renaming: t, newName: void 0 }, () => {
      const e = d(this._file.current).closest(".file-selector").find(".file-selector-rename-input")[0];
      e && (e.select(), e.focus());
    });
  }
  async renameFile(t, e) {
    const n = this.getFile(t);
    if (!n || n.name === e)
      return;
    const { onRename: i } = this.props;
    if (i && await i.call(this, e, n.name, n) === !1)
      return;
    const r = n.file;
    if (r) {
      const l = new File([r], e, { type: r.type, lastModified: r.lastModified }), c = Array.from(this._data.files).indexOf(r);
      c >= 0 && this._data.items.remove(c), this._data.items.add(l), this._syncFiles(!0), n.file = l;
    }
    n.name = e, n.ext = this.constructor.getExt(e);
    const { files: o } = this.state, a = o.indexOf(n);
    a >= 0 ? o.splice(a, 1, n) : o.push(n), this.setState({ files: [...o] });
  }
  async removeFile(t) {
    const e = this.getFile(t);
    if (!e)
      return;
    const { onRemove: n, removeConfirm: i } = this.props;
    if (i) {
      let o = i;
      if (typeof o == "string" && (o = { message: o }), typeof o.message == "string" && (o.message = q(o.message, {
        name: e.name,
        size: Dt(e.size, 1)
      })), !await Hs.confirm(o))
        return;
    }
    if (n && await n.call(this, e) === !1)
      return;
    if (e.file) {
      const o = Array.from(this._data.files).indexOf(e.file);
      o >= 0 && this._data.items.remove(o);
    }
    const r = this.state.files.indexOf(e);
    r >= 0 && (this.state.files.splice(r, 1), this.setState({ files: this.state.files }), this._syncFiles(!0));
  }
  _syncFiles(t = !1) {
    const e = this._data.files, n = this._file.current;
    n.files = e, t && d(n).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = q(t.message, { ...this.info, ...e })), Hs.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? q(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ g("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: n, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = F({
      component: "label",
      attrs: {
        for: n ? void 0 : this._id
      },
      disabled: n,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ g("div", { className: "file-selector-tip", children: /* @__PURE__ */ g(z, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ g(J, { ...o, ...c, className: T(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ g("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ g(J, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: n, onChange: i } = t;
    return /* @__PURE__ */ g("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: n, style: "display:none", onChange: i }, "form");
  }
  _getIcon(t) {
    let { fileIcons: e } = this.props;
    if (e)
      return typeof e == "string" && (e = { default: e }), e[t.ext] ?? e.default;
  }
  _getThumbnail(t) {
    if ((t.file || t.url) && this.props.thumbnail && this.constructor.isImage(t))
      return t.url || URL.createObjectURL(t.file);
  }
  _getAvatar(t) {
    const e = this._getThumbnail(t);
    let n;
    if (e)
      n = { src: e };
    else {
      const i = this._getIcon(t);
      i && (n = { icon: i });
    }
    return n && {
      size: this.props.mode === "grid" ? void 0 : "sm",
      ...n
    };
  }
  _getFileActions(t) {
    if (this.props.disabled)
      return;
    let { removeBtn: e, renameBtn: n } = this.props;
    typeof e == "function" && (e = e.call(this, t)), typeof e == "string" ? e = { text: e } : e === !0 && (e = { hint: this.i18n("removeFile"), icon: "trash" }), typeof n == "function" && (n = n.call(this, t)), typeof n == "string" ? n = { text: n } : n === !0 && (n = { hint: this.i18n("renameFile"), icon: "edit" });
    const i = [];
    return n && i.push({
      "data-rename-file": t.id,
      ...n
    }), e && i.push({
      "data-remove-file": t.id,
      ...e
    }), i;
  }
  _renderFile(t) {
    let { itemProps: e } = this.props;
    return e = F({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: Dt(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ g(Je, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: n = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ g("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ g("div", { className: "form-control size-sm", children: n }),
        /* @__PURE__ */ g("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = F({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ g(J, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ g(J, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ g(Je, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: n } = this.state;
    return /* @__PURE__ */ g("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === n ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: n = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": Cs(n),
      "--file-selector-grid-height": Cs(i),
      "--file-selector-grid-gap": Cs(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ g("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
      a.map((c) => c.id === l ? this._renderFileRename(c) : this._renderFile(c)),
      this._renderUpload(t)
    ] }, "grid");
  }
  _getClassName(t) {
    return ["file-selector", `is-mode-${t.mode}`, t.className, this.state.dragging ? "is-dragging" : ""];
  }
  _getChildren(t) {
    const e = t.mode === "grid";
    return [
      e ? null : this._renderUpload(t),
      e ? this._renderGrid(t) : this._renderList(t),
      this._renderInput(t),
      this._renderForForm(t)
    ];
  }
  static getExt(t) {
    return (t.split(".").pop() || "").toLowerCase();
  }
  static getInfo(t) {
    const { name: e, size: n, type: i } = t;
    if (t instanceof File)
      return {
        name: e,
        size: n,
        type: i,
        file: t,
        id: [e, n].join(":"),
        ext: this.getExt(e)
      };
    const r = typeof n == "string" ? gs(n) : n;
    return {
      name: e,
      size: r,
      id: t.id ?? [e, r].join(":"),
      type: i ?? "",
      ext: this.getExt(e),
      file: t.file,
      url: t.url
    };
  }
  static isAccept(t, e) {
    return !e || !e.length ? !0 : (Array.isArray(e) ? e : e.split(",")).some((i) => t.type && i === t.type ? !0 : i.startsWith(".") ? t.name.endsWith(i) : i.endsWith("/*") ? t.type.startsWith(i.slice(0, -1)) : !1);
  }
  static isImage(t) {
    return this.isAccept(t, this.imageAccepts);
  }
  static filterFiles(t, e) {
    if (!e || !e.length)
      return t;
    t instanceof FileList && (t = Array.from(t));
    const n = e.split(",");
    return t.filter((i) => this.isAccept(i, n));
  }
};
Xt.defaultProps = {
  mode: "button",
  maxFileSize: "100MB",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
Xt.i18n = Ih;
Xt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let Ki = class extends Xt {
};
Ki.defaultProps = {
  ...Xt.defaultProps,
  mode: "grid",
  accept: Xt.imageAccepts
};
const Ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Xt,
  ImageSelector: Ki
}, Symbol.toStringTag, { value: "Module" }));
class qi extends U {
}
qi.NAME = "FileSelector";
qi.Component = Xt;
qi.replace = !0;
class Gi extends U {
}
Gi.NAME = "ImageSelector";
Gi.Component = Ki;
Gi.replace = !0;
at(Ph);
const Yi = class da extends ls {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = F(n, r)), /* @__PURE__ */ _t(da, { ...r });
  }
};
Yi.NAME = "nav";
Yi.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let fa = Yi;
const Rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: fa
}, Symbol.toStringTag, { value: "Module" }));
class pa extends U {
}
pa.NAME = "Nav";
pa.Component = fa;
at(Rh);
function ts(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function ga({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = ts(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : q(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ g(J, { type: e, ...a });
}
function ma({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ts(i, e);
  return n = typeof n == "function" ? n(a) : q(n, a), /* @__PURE__ */ g(tt, { ...o, children: [
    r,
    n
  ] });
}
function Dh({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ g(J, { type: t, ...o })), l = (u, h) => {
    const p = [];
    for (let f = u; f <= h; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const m = ts(n, f);
      i && (o.url = typeof i == "function" ? i(m) : q(i, m)), p.push(/* @__PURE__ */ g(J, { type: t, ...o }));
    }
    return p;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let Lh = class extends B {
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
      headingClass: u,
      titleClass: h,
      contentClass: p,
      arrowStyle: f,
      onlyInner: m
    } = t;
    let _ = /* @__PURE__ */ g(z, { content: r }, "content");
    (p || i) && (_ = /* @__PURE__ */ g("div", { className: p, children: _ }, "content"));
    const y = [], v = l ? /* @__PURE__ */ g("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ g("div", { className: u, children: [
      i ? /* @__PURE__ */ g(z, { className: h, content: i }) : null,
      v
    ] }, "heading")) : y.push(v), y.push(_), c && y.push(/* @__PURE__ */ g("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), m ? y : /* @__PURE__ */ g("div", { id: e, className: T("popover", a, { popup: n, "has-heading": i }), style: o, children: y });
  }
};
class Ji extends U {
}
Ji.NAME = "PopoverPanel";
Ji.Component = Lh;
const Pr = "show", Rr = "in", De = class _a extends gt {
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
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  get zIndex() {
    return this._zIndex;
  }
  afterInit() {
    const { trigger: t, id: e, triggerEvent: n } = this.options;
    this._triggerEvent = n, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = d(i), { namespace: a } = this;
      t === "hover" ? o.on(`pointerenter${a}`, (l) => {
        if (o.is("[disabled],.disabled"))
          return;
        const c = o.dataset("target");
        c && this.setOptions({ target: c }), this.show({ delay: !0, event: l });
      }).on(`pointerleave${a} pointercancel${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
        if (o.is("[disabled],.disabled"))
          return;
        const c = o.dataset("target");
        !this.shown && c && this.setOptions({ target: c }), this.toggle({ event: l, delay: !0 }), l.preventDefault();
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), typeof t == "string" && (t === "$next" ? t = d(this._triggerElement).next() : t.startsWith("$target:") && (t = d(this._triggerElement).closest(t.slice(8)))), d(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n, hideOthers: i = this.options.hideOthers } = t || {};
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
    const r = this.initTarget();
    if (!r)
      return;
    this._targetElement = r;
    const o = d(r), { animation: a, onShow: l, onShown: c, trigger: u } = this.options, { SHOWN_POPOVERS: h } = this.constructor;
    o.addClass(Pr), a && o.addClass(a === !0 ? "fade" : a), this._zIndex = _a.Z_INDEX++, this._shown = !0, this.render(), h.set(this.gid, this), l == null || l.call(this), this.emit("show"), i && h.forEach((f) => {
      f !== this && f.hide();
    });
    const { namespace: p } = this;
    u === "hover" && (this._clearDelayHide(), o.off(p).on(`pointerenter${p}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${p}`, () => {
      this.delayHide();
    })), this._virtual || d(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(Rr), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: n, onHide: i, onHidden: r, trigger: o, hideNewOnHide: a } = this.options, l = d(this._targetElement), { SHOWN_POPOVERS: c } = this.constructor;
    this._shown = !1, c.delete(this.gid), i == null || i.call(this), this.emit("hide"), l.removeClass(Rr), o === "hover" && (this._clearDelayHide(), l.off(this.namespace)), this._virtual || d(this._triggerElement).removeClass("with-popover-show").removeAttr("data-pop-placement"), a && c.forEach((u) => {
      u !== this && u.zIndex > this.zIndex && u.hide();
    }), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), l.removeClass(Pr), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, n && !t ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), !this._virtual) {
      const { namespace: t } = this;
      d(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Zo(t, e, () => {
      const { animation: i, name: r = "popover" } = this.options;
      if (!this._virtual) {
        const o = {}, { width: a, height: l } = this.options;
        a && (o.width = typeof a == "function" ? a() : a === "100%" ? d(t).outerWidth() : a), l && (o.height = typeof l == "function" ? l() : l), Object.keys(o).length && d(e).css(o);
      }
      Hi(...this._getLayoutOptions()).then(({ x: o, y: a, middlewareData: l, placement: c, strategy: u }) => {
        if (t instanceof HTMLElement && pe(t)) {
          this.hide(!0);
          return;
        }
        const h = {
          position: u,
          left: o,
          top: a
        }, p = d(e).css(h), f = c.split("-")[0], m = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[f], _ = l.arrow;
        _ && p.attr("data-pop-placement", f).find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${m}`), i === !0 && p.attr("class", `${p.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${m}`), this._virtual || d(this._triggerElement).attr("data-pop-placement", f);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = d(e);
    if (i.z("popover", this.gid).toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Ji(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(d('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
  }
  handleClickOutside(t) {
    if (this.options.mask) {
      const e = this._triggerElement;
      e instanceof HTMLElement && d(t.target).closest(e).length || this.hide();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleClickTarget(t) {
  }
  delayHide(t = 100) {
    this._resetTimer(), this._clearDelayHide(), this._hideTimer = window.setTimeout(() => {
      this._hideTimer = 0, this.hide();
    }, t);
  }
  _clearDelayHide() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = 0);
  }
  _getLayoutOptions() {
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, u = l ? e.querySelector(".arrow") : null, h = u ? typeof l == "number" ? l : 5 : 0, p = () => typeof a == "function" ? a : typeof a == "object" ? {
      mainAxis: (a.mainAxis || 0) + h,
      ...a
    } : (a || 0) + h;
    return [t, e, {
      placement: n,
      strategy: c,
      middleware: [
        i ? Fi() : null,
        o ? Oi(typeof o == "object" ? o : void 0) : null,
        a || h ? zi(p()) : null,
        l ? wh({ element: u }) : null,
        r ? Xo({
          apply({ availableWidth: f, availableHeight: m, placement: _ }) {
            d(e).css({ maxHeight: m - (["top", "bottom"].includes(_.split("-")[0]) ? h : 0) - 2, maxWidth: f - 2 });
          }
        }) : null
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
      closeBtn: u,
      arrow: h
    } = this.options;
    return {
      popup: e,
      title: n,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this._zIndex, ...l },
      className: c,
      closeBtn: u,
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
    const { container: t = "body" } = this.options, e = d(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = d("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
};
De.NAME = "Popover";
De.Z_INDEX = 1700;
De.MULTI_INSTANCE = !0;
De.DEFAULT = {
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
  popup: !0,
  hideNewOnHide: !0
};
De.SHOWN_POPOVERS = /* @__PURE__ */ new Map();
let Nt = De;
Nt.toggle = {
  trigger: ["click", "hover"],
  convertHref: { selector: "target" },
  check(s, t) {
    const e = d(s);
    return e.data(this.KEY) ? !1 : t === "hover" ? (e.dataset("trigger") || this.DEFAULT.trigger) === "hover" : !0;
  },
  getOptions(s, t, e) {
    return {
      triggerEvent: e,
      ...t
    };
  },
  onToggle(s, t, e) {
    s.toggle({ event: e });
  }
};
Nt.register();
d(() => {
  d(document).on(`click.${Nt.NAMESPACE}`, (s) => {
    const { SHOWN_POPOVERS: t } = Nt;
    if (!t.size)
      return;
    const e = d(s.target), n = e.closest("[z-popover]"), i = n.length ? n.z("popover") : 0, r = i ? t.get(i) : null;
    if (r) {
      const a = r.options.name ?? r.constructor.ZUI;
      if (e.closest(`[data-dismiss="${a}"]`).length) {
        r.hide();
        return;
      }
      if (r.handleClickTarget(s))
        return;
    }
    const o = [...t.values()].sort((a, l) => l.zIndex - a.zIndex);
    for (const a of o)
      if (a !== r && a.handleClickOutside(s))
        return;
  });
});
Object.assign(window, { Popover: Nt });
class ae extends Nt {
  handleClickTarget(t) {
    const e = d(t.target), { notHideOnClick: n } = this.options;
    return (!n || !e.closest(n).length) && this.hide(), !0;
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, tree: i, onClickItem: r, relativeTarget: o = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      tree: i,
      onClickItem: r,
      nestedToggle: ".item",
      accordion: !0,
      relativeTarget: { target: o, event: this.options.triggerEvent, dropdown: this },
      popup: !0,
      ...n
    };
  }
  _getRenderOptions() {
    const t = super._getRenderOptions();
    return this._dynamic ? {
      ...t,
      contentClass: "",
      popup: !1,
      content: _t(Zi, this._getMenuOptions())
    } : t;
  }
}
ae.NAME = "Dropdown";
ae.DEFAULT = {
  ...Nt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0,
  notHideOnClick: ".not-hide-menu,.form-control,input,label,.nested-toggle-icon"
};
ae.toggle = {
  ...Nt.toggle,
  getOptions(s, t, e) {
    return t = Nt.toggle.getOptions.call(this, s, t, e), !t.target && !t.items && !t.menu && (t.target = d(s).next(".dropdown-menu")), t;
  }
};
ae.register();
class _n extends J {
  constructor() {
    super(...arguments), this._ref = Z();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = ae.get(this.triggerElement), a = {
      items: n,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...d(this.triggerElement).dataset(),
      ...t
    };
    o ? o.setOptions(a) : new ae(this.triggerElement, a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = ae.get(this.triggerElement)) == null || t.destroy();
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
_n.defaultProps = {
  caret: !0
};
Object.assign(St.ItemComponents, { dropdown: _n });
Object.assign(kt.ItemComponents, { dropdown: _n });
class Zi extends yt {
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  layout() {
    var r;
    if (this.props.tree || this.isRoot)
      return;
    const t = (r = this.element) == null ? void 0 : r.parentElement, i = d(t).parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    !t || !i || Hi(i, t, {
      placement: this.props.placement,
      middleware: [Fi(), Oi(), zi(1), Xo({
        apply({ availableWidth: o, availableHeight: a }) {
          d(t).css({ maxHeight: a - 2, maxWidth: o - 2 });
        }
      })]
    }).then(({ x: o, y: a }) => {
      d(t).css({
        left: o,
        top: a
      });
    });
  }
  _getClassName(t) {
    return ["dropdown-menu scrollbar-hover scrollbar-thin", super._getClassName(t)];
  }
  _afterRender(t) {
    super._afterRender(t), this.layout();
  }
  _getNestedProps(t, e, n, i) {
    return F(this.isHoverTrigger ? {
      "z-key": n.key,
      "z-hover": this.props.parentKey ?? "root",
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : {}, super._getNestedProps(t, e, n, i));
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return e;
    const n = d(t.target).closest(".dropdown-menu[z-key]");
    if (n.length) {
      const i = n.attr("z-key"), r = n.parent().parent().children(".dropdown-menu").children(`[z-key="${i}"]`);
      if (r.length)
        return super._getItemFromEvent(t, r[0]);
    }
  }
  _renderNestedList(t, e, n, i) {
    const r = super._renderNestedList(t, e, n, i);
    if (this.props.tree)
      return r;
    this._nestedContextMenu.push(r);
  }
  _getWrapClass(t) {
    return [super._getWrapClass(t), t.tree ? "is-tree" : this.isRoot ? "is-contextmenu" : "is-contextmenu popup"];
  }
  _renderWrapperFooter(t) {
    const e = super._renderWrapperFooter(t), n = this._nestedContextMenu;
    return this.props.tree || !n.length ? e : [e, ...n];
  }
  _renderNestedToggle(t, e) {
    if (this.props.tree)
      return super._renderNestedToggle(t, e);
    if (typeof e == "boolean")
      return /* @__PURE__ */ g("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ g("span", { className: "caret-right" }) });
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
}
Zi.defaultProps = {
  ...yt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Zi.inheritNestedProps = [...yt.inheritNestedProps, "container", "tree"];
function zh({
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
    const u = { ...t, recPerPage: c };
    return {
      ...r,
      key: c,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(u) : q(e, u)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : q(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(_n, { dropdown: i, ...o });
}
function ya({
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
  const u = { ...c };
  let h;
  const p = (_) => {
    var y;
    h = Number((y = _.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, f = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = ts(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = u.url = typeof l == "function" ? l(y) : q(l, y));
  }, m = ts(i, t || 0);
  return u.url = typeof l == "function" ? l(m) : q(l, m), /* @__PURE__ */ g("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ g(J, { type: n, ...u, onClick: f })
  ] });
}
let ds = class extends kt {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return !1;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? d.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && d.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
ds.NAME = "pager";
ds.ItemComponents = {
  ...kt.ItemComponents,
  info: ma,
  link: ga,
  nav: Dh,
  "size-menu": zh,
  goto: ya
};
ds.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class va extends U {
}
va.NAME = "Pager";
va.Component = ds;
const Oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: ds,
  PagerGoto: ya,
  PagerInfoItem: ma,
  PagerLink: ga
}, Symbol.toStringTag, { value: "Module" }));
at(Oh);
class Xi extends U {
}
Xi.NAME = "Pick";
Xi.Component = vt;
Xi.replace = !0;
class ba extends B {
  constructor(t) {
    super(t), this._searchInput = Z(), this._measure = Z(), this._changeTimer = 0, this._handleChange = (e) => {
      const n = e.target.value;
      this.setState({ search: n }, () => {
        const { onSearch: i } = this.props;
        i && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, i(n);
        }, this.props.debounce || 300));
      }), e.stopPropagation();
    }, this._handleClear = (e) => {
      e.stopPropagation(), this.clear();
    }, this.state = { search: t.defaultSearch ?? "" };
  }
  get $pop() {
    return d(`#pick-pop-${this.props.id}`);
  }
  focus() {
    var t;
    (t = this._searchInput.current) == null || t.focus();
  }
  clear() {
    var t, e;
    (e = (t = this.props).onClear) == null || e.call(t), this.setState({ search: "" }, () => this.focus());
  }
  componentDidMount() {
    this.focus();
    const { hotkeys: t } = this.props;
    if (t) {
      const e = Co(t, {
        clear: {
          keys: "Escape",
          handler: () => {
            this.state.search.trim().length ? this.clear() : this.$pop.trigger("hidePop");
          }
        },
        enter: {
          keys: "Enter",
          handler: (n) => {
            n.preventDefault(), this.$pop.trigger("selectActive"), this.clear();
          }
        },
        activeNext: {
          keys: "ArrowDown",
          handler: () => {
            this.$pop.trigger("activeNext");
          }
        },
        activePrev: {
          keys: "ArrowUp",
          handler: () => {
            this.$pop.trigger("activePrev");
          }
        }
      });
      e && (this._hotkeysScope = `PickerSearch_${ut()}`, d(this._searchInput.current).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = this._measure, { current: n } = this._searchInput;
      if (e && n) {
        const i = d(n).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && d(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
  }
  render(t, e) {
    const { placeholder: n, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ g("span", { className: "close" }) }) : a = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: n,
          value: r,
          autoComplete: "off",
          onChange: this._handleChange,
          onInput: this._handleChange,
          ref: this._searchInput
        }
      ),
      a
    ] });
  }
}
class Fh extends Ai {
  constructor() {
    super(...arguments), this._search = Z(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ g("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ g("span", { className: "text", children: /* @__PURE__ */ g(z, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ g("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return T(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n, hotkeys: i } = t;
    return /* @__PURE__ */ g(
      ba,
      {
        inline: !0,
        id: t.id,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: n,
        hotkeys: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: n, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c } = this.props, u = n && r;
    let h;
    const p = !u && !e.length;
    return a && (!p || o === void 0) ? (typeof a == "function" ? h = a.call(this, l, e) : typeof a == "string" && (h = q(a, { value: i, values: l, count: l.length })), h = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: h }, "selections")) : p ? h = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "selections") : h = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      u ? this._renderSearch(t) : null
    ] }, "selections"), [
      h,
      c,
      /* @__PURE__ */ g("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        d(`#${o}`).val(n);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ g("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ g("option", { value: u, children: u }, u)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    d(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = d(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", Wo), this._skipTriggerChange = !1;
    }
  }
}
class Hh extends Ai {
  constructor() {
    super(...arguments), this._search = Z(), this._handleDeselectClick = (t) => {
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
    return T(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: n } = t;
    return /* @__PURE__ */ g(
      ba,
      {
        ref: this._search,
        id: t.id,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder(),
        hotkeys: n
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: n = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: u, display: h } = t, [p] = n, f = r && a;
    let m;
    if (f)
      m = this._renderSearch(t);
    else if (p || o === void 0 && h) {
      const { text: v } = p || { text: "", value: "" };
      typeof h == "function" ? m = h.call(this, i, n) : typeof h == "string" ? m = q(h, p) : m = /* @__PURE__ */ g(z, { content: v }), m = /* @__PURE__ */ g("span", { className: "picker-single-selection", title: typeof v == "string" ? v : void 0, children: m }, "main");
    } else
      m = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "main");
    const _ = u && !f ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null;
    return [
      m,
      e,
      _,
      f ? null : /* @__PURE__ */ g("span", { className: "caret" }, "caret")
    ];
  }
}
class fs extends pt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
}
fs.NAME = "tree";
fs.defaultProps = {
  ...pt.defaultProps,
  indent: 12
};
fs.defaultItemProps = {
  ...pt.defaultItemProps,
  innerComponent: "div"
};
fs.inheritNestedProps = [...pt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class yn extends yt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return fs.getTreeItem(t, super._getItem(t, e, n));
  }
}
yn.NAME = "tree";
yn.inheritNestedProps = [...yt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
yn.defaultItemProps = {
  ...yt.defaultProps,
  innerComponent: "div"
};
function wa(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && wa(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class Wh extends Qo {
  constructor() {
    super(...arguments), this._menu = Z(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((u, h, p) => {
        const f = this._getItem(h, p);
        return f && (f.selected ? o = !0 : r = !1, u.push(f)), u;
      }, []));
      const a = r || n.has(t.value);
      t = {
        selected: a,
        hint: typeof t.text == "string" ? t.text : void 0,
        ...t,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: T(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      }, a && !t.disabled && this._firstSelected === void 0 && (this._firstSelected = t.key), t.content && t.text && delete t.text;
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && (l.disabled && this._disabledSet.add(l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var n;
      return (n = this._renderItemCallback) == null ? void 0 : n.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value, i = e.target;
      if (t.disabled || n === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((u) => this._disabledSet.has(u.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...wa(t.items).values()].filter((p) => !p.items && !this._disabledSet.has(p.value)).map((p) => p.value);
          d(i).closest(".item").children(".item-inner.selected").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  get menu() {
    return this._menu.current;
  }
  componentDidMount() {
    var t, e;
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), d(this.element).on("activeNext.zui.Picker", () => {
      var n;
      (n = this.menu) == null || n.activeNext();
    }).on("activePrev.zui.Picker", () => {
      var n;
      (n = this.menu) == null || n.activePrev();
    }).on("selectActive.zui.Picker", () => {
      const n = this.menu;
      if (!n)
        return;
      const i = n.getActiveKey();
      if (i !== void 0) {
        const r = n.getRenderedItem(i);
        r && d(this.element).find(`.item[z-key-path="${r._keyPath}"]`).trigger("click");
      }
    }).on("hidePop.zui.Picker", () => {
      this.props.togglePop(!1);
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), d(this.element).off(".zui.Picker");
  }
  _getClass(t) {
    return T(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c } = t, { items: u, search: h } = i;
    return F({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      limit: c,
      items: u,
      defaultNestedShow: !0,
      activeOnHover: !0,
      search: h,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"],
      header: o,
      footer: a,
      noMatchHint: l
    }, e, n);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const n = this._getMenuProps(t);
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ g(yn, { ...n }) : /* @__PURE__ */ g(yt, { ...n });
  }
}
function ne(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && ne(n.items, e), e.set(n.value === void 0 ? "" : String(n.value), n), e), t || /* @__PURE__ */ new Map());
}
let Qi = class extends vt {
  constructor(t) {
    super(t), this._updateTimer = 0, this.toggleValue = (e, n) => {
      if (!this.props.multiple)
        return n || e !== this.value ? this.setValue(e) : this.setValue();
      const { valueList: i } = this, r = i.indexOf(e);
      if (n !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(e), this.setValue(i);
    }, this.deselect = (e = []) => {
      const { valueList: n } = this, i = new Set(this.formatValueList(e)), r = n.filter((o) => !i.has(o));
      this.setValue(r);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (e) => {
      const n = this.formatValueList(e), i = this.props.multiple ? [...this.valueList, ...n] : n[0];
      return this.setValue(i);
    }, this.isSelected = (e) => this.valueList.includes(e), this.setValue = this.setValue.bind(this), this.isEmptyValue = this.isEmptyValue.bind(this);
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  getDefaultState(t) {
    const { items: e, valueSplitter: n = ",", emptyValue: i = "" } = t || this.props, r = {
      ...super.getDefaultState(t),
      loading: !1,
      search: "",
      items: e,
      selections: []
    };
    if (this._emptyValueSet = new Set(i.split(n)), Array.isArray(e) && e.length) {
      const { limitValueInList: o, required: a, multiple: l } = this.props;
      if (e.forEach((c) => {
        typeof c.value == "number" && (c.value = String(c.value));
      }), o) {
        const c = ne(e);
        r.value = this.formatValueList(r.value, n).filter((u) => c.has(u)).join(n);
      }
      !this.formatValueList(r.value, n).length && a && !l && (r.value = e[0].value ?? "");
    }
    return r;
  }
  isEmptyValue(t) {
    return this._emptyValueSet.has(t);
  }
  deselectAll() {
    this.setValue([]);
  }
  selectAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return;
    const n = [...ne(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(n);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = ne(t), n = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || n.has(i.value));
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: n } = this.props, { search: i } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else {
      if (await Is(n || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = q(o, { search: encodeURIComponent(i) })), r = await yi(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = /* @__PURE__ */ new Map();
        Array.isArray(n.items) && n.items !== i.items && ne(n.items, o), ne(r, o), i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || n.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      a = a.filter((l) => (l.key = l.key ?? l.value, typeof l.value == "number" && (l.value = String(l.value)), !this.isEmptyValue(l.value))), r.loading = !1, r.items = a, i.items = n.items, i.search = e.search;
    } else
      i.items && !e.open && n.cache === !1 && !Array.isArray(n.items) && (i.items = void 0);
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
  _handleChange(t, e) {
    if (super._handleChange(t, e), t !== e) {
      const { onDeselect: n, onSelect: i, onClear: r, multiple: o } = this.props, a = this.formatValueList(e), l = this.valueList;
      if (r && !l.length && a.length && r.call(this), n) {
        const c = a.filter((u) => !l.includes(u));
        c.length && n.call(this, o ? c : c[0]);
      }
      if (i) {
        const c = l.filter((u) => !a.includes(u));
        c.length && i.call(this, o ? c : c[0]);
      }
    }
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
      multiple: t.multiple,
      hotkeys: t.hotkeys,
      placeholder: t.placeholder,
      search: t.search,
      display: t.display,
      searchHint: t.searchHint,
      clearable: !!this.valueList.length && !t.required,
      valueList: this.valueList,
      emptyValue: this.firstEmptyValue,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getPopProps(t, e) {
    return {
      ...super._getPopProps(t, e),
      menu: t.menu,
      tree: t.tree,
      checkbox: t.checkbox,
      multiple: t.multiple,
      search: t.search,
      maxItemsCount: t.maxItemsCount,
      footer: this._renderToolbar(),
      valueList: this.valueList,
      noMatchHint: e.loading ? H.getLang("loadingHint") : t.searchEmptyHint ?? H.getLang("searchEmptyHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Fh : Hh);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: H.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: H.getLang("cancelSelect")
    }]), kt.render(t, [], { size: "sm", getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t, e) {
    let n;
    return typeof t == "string" && t.length ? n = t.split(e ?? this.props.valueSplitter ?? ",") : Array.isArray(t) ? n = t : n = [t], d.unique(n).reduce((i, r) => (r == null || (r = typeof r != "string" ? String(r) : r, this.isEmptyValue(r) || i.push(r)), i), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    let n = this.formatValueList(t);
    if (n.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = ne(Array.isArray(r) ? r : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    return super.setValue(i, e);
  }
};
Qi.defaultProps = {
  ...vt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
Qi.Pop = Wh;
class tr extends U {
}
tr.NAME = "Picker";
tr.Component = Qi;
tr.register();
H.addLang({
  zh_cn: {
    selectAll: "全选",
    cancelSelect: "取消选择",
    searchEmptyHint: "无匹配选项",
    loadingHint: "正在加载..."
  },
  zh_tw: {
    selectAll: "全選",
    cancelSelect: "取消選擇",
    searchEmptyHint: "無匹配選項",
    loadingHint: "正在載入..."
  },
  en: {
    selectAll: "Select All",
    cancelSelect: "Cancel Select",
    searchEmptyHint: "No matching options",
    loadingHint: "Loading..."
  }
});
class Ca extends U {
}
Ca.NAME = "SearchBox";
Ca.Component = un;
at(Rc);
class Sa extends U {
}
Sa.NAME = "Toolbar";
Sa.Component = kt;
at($c);
class er extends Nt {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: T("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
er.NAME = "Tooltip";
er.DEFAULT = {
  ...Nt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3,
  hideOthers: !0,
  hideNewOnHide: !1
};
er.register();
var Kt, qt;
class Dr extends B {
  constructor(e) {
    super(e);
    lt(this, Kt, void 0);
    lt(this, qt, void 0);
    mt(this, Kt, 0), mt(this, qt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (ot(this, Kt) && cancelAnimationFrame(ot(this, Kt)), mt(this, Kt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), mt(this, Kt, 0);
      })), n.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.preventDefault(), n.stopPropagation();
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
    e && (mt(this, qt, typeof e == "string" ? document : e.current), ot(this, qt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), ot(this, qt) && ot(this, qt).removeEventListener("wheel", this._handleWheel);
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
      right: u
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: f } = this.state, m = {
      left: a,
      top: l,
      bottom: c,
      right: u,
      ...o
    }, _ = {};
    return n === "horz" ? (m.height = i, m.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, p) * (e - _.width) / h)) : (m.width = i, m.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, p) * (e - _.height) / h)), /* @__PURE__ */ g(
      "div",
      {
        className: T("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": f
        }),
        style: m,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ g(
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
Kt = new WeakMap(), qt = new WeakMap();
const Ws = /* @__PURE__ */ new Map(), js = [];
function ka(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && Ws.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Ws.set(e, s), t != null && t.buildIn && !js.includes(e) && js.push(e);
}
function rt(s, t) {
  ka(s, t);
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
function xa(s) {
  return Ws.delete(s);
}
function jh(s) {
  if (typeof s == "string") {
    const t = Ws.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function Ta(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = jh(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && Ta(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function Bh(s = [], t = !0) {
  if (t && js.length && s.unshift(...js), !(s != null && s.length))
    return [];
  const e = Ta([], s, /* @__PURE__ */ new Set()), n = [], i = e.reduce((r, o, a) => {
    var l;
    return r.set(o.name, a * 1e3), (l = o.requireAfter) != null && l.length && n.push(o), r;
  }, /* @__PURE__ */ new Map());
  return n.length && (n.forEach((r) => {
    const o = r.requireAfter.reduce((a, l) => (i.has(l) && a.push(i.get(l)), a), []);
    o.length && i.set(r.name, Math.max(...o) + 1);
  }), e.sort((r, o) => i.get(r.name) - i.get(o.name))), e;
}
function Na() {
  return {
    cols: [],
    data: [],
    rowKey: "id",
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 24,
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
function Vh(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function Lr(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function Mn(s, t = !1, e = 0) {
  if (!s.list.length)
    return;
  if (e && !s.widthSetting && s.width > e && (s.widthSetting = e), s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const i = s.width - s.totalWidth;
    if (!t && i > 0 || t && i !== 0) {
      const r = s.flexList.length ? s.flexList : s.list, o = r.reduce((a, l) => a + (l.flex || 1), 0);
      r.forEach((a) => {
        const l = Math[i < 0 ? "max" : "min"](i, Math.ceil(i * ((a.flex || 1) / o)));
        a.realWidth = a.width + l;
      });
    }
  }
  let n = 0;
  s.list.forEach((i, r) => {
    i.realWidth || (i.realWidth = i.width), i.left = n, i.sideIndex = r, n += i.realWidth;
  });
}
function zr(s) {
  return s ? s === "left" ? "left" : "right" : "center";
}
function Uh(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (w) => (typeof w == "function" && (w = w.call(s)), w = Lr(w, 0), w < 1 && (w = Math.round(w * n)), w), u = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, h = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(a)
  }, p = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, f = {
    left: h,
    center: u,
    right: p
  }, m = [], _ = {};
  let y = !1;
  const v = [], b = {};
  if (e.forEach((w) => {
    const { colTypes: k, onAddCol: N } = w;
    k && Object.entries(k).forEach(([M, $]) => {
      b[M] || (b[M] = []), b[M].push($);
    }), N && v.push(N);
  }), t.cols.forEach((w, k) => {
    if (w.hidden)
      return;
    const { type: N = "", name: M } = w, $ = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...w,
      type: N
    }, A = {
      name: M,
      type: N,
      setting: $,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: k,
      side: zr($.fixed),
      sideIndex: 0,
      order: $.order,
      border: $.border
    }, x = b[N];
    x && x.forEach((K) => {
      const Y = typeof K == "function" ? K.call(s, $) : K;
      Y && Object.assign($, Y, w);
    });
    const { flex: I, minWidth: D = r, maxWidth: O = o } = $, L = Lr($.width || i, i);
    A.flex = I === !0 ? 1 : typeof I == "number" ? I : 0, A.width = Vh(L < 1 ? Math.round(L * n) : L, D, O), A.side = zr($.fixed), v.forEach((K) => K.call(s, A)), m.push(A), _[A.name] = A;
    const j = f[A.side];
    j.list.push(A), j.totalWidth += A.width, j.width = j.totalWidth, A.flex && j.flexList.push(A), typeof A.order == "number" && (y = !0);
  }), y) {
    const w = (k, N) => (k.order ?? k.index) - (N.order ?? N.index);
    m.sort(w), h.list.sort(w), u.list.sort(w), p.list.sort(w);
  }
  Mn(p, !0);
  const S = n - p.width - Math.max(40, r);
  return Mn(h, !0, S), u.widthSetting = n - h.width - p.width, Mn(u), {
    list: m,
    map: _,
    ...f
  };
}
function Kh(s) {
  var Y;
  const { col: t, className: e, height: n, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: p, ...f } = s, m = {
    left: h ?? t.left,
    top: p ?? i.top,
    width: u ?? t.realWidth,
    height: n,
    ...a
  }, { align: _, cellStyle: y, cellClass: v, className: b } = t.setting, S = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...y,
    ...o
  }, { name: w, border: k } = t, N = ["dtable-cell", c, e, b, {
    "has-border-left": k === !0 || k === "left",
    "has-border-right": k === !0 || k === "right"
  }], M = ["dtable-cell-content", v], $ = (Y = i.data) == null ? void 0 : Y[w], A = [l ?? $ ?? ""], x = r ? r(A, { row: i, col: t, value: $ }, s, _t) : A, I = [], D = [], O = {}, L = {};
  let j = "div";
  x == null || x.forEach((P) => {
    if (typeof P == "object" && P && !Ct(P) && ("html" in P || "className" in P || "style" in P || "attrs" in P || "children" in P || "tagName" in P)) {
      const bt = P.outer ? I : D;
      P.html ? bt.push(/* @__PURE__ */ g("div", { className: T("dtable-cell-html", P.className), style: P.style, dangerouslySetInnerHTML: { __html: P.html }, ...P.attrs ?? {} })) : (P.style && Object.assign(P.outer ? m : S, P.style), P.className && (P.outer ? N : M).push(P.className), P.children && bt.push(P.children), P.attrs && Object.assign(P.outer ? O : L, P.attrs)), P.tagName && !P.outer && (j = P.tagName);
    } else
      D.push(P);
  });
  const K = j;
  return /* @__PURE__ */ g(
    "div",
    {
      className: T(N),
      style: m,
      "data-col": w,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...O,
      children: [
        D.length > 0 && /* @__PURE__ */ g(K, { className: T(M), style: S, ...L, children: D }),
        I
      ]
    }
  );
}
function In({
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
  CellComponent: u = Kh,
  cellClass: h,
  onRenderCell: p
}) {
  var y;
  const f = Array.isArray(s) ? s : [s], m = ((y = f[0]) == null ? void 0 : y.top) ?? 0, _ = f.length;
  return /* @__PURE__ */ g(
    "div",
    {
      className: T("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ g("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: f.reduce((v, b, S) => {
        const w = t.length;
        return t.forEach((k, N) => {
          v.push(
            /* @__PURE__ */ g(
              u,
              {
                className: T(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  N ? "" : "is-first-in-row",
                  N === w - 1 ? "is-last-in-row" : "",
                  S ? "" : "is-first-row",
                  S === _ - 1 ? "is-last-row" : "",
                  h
                ),
                col: k,
                row: b,
                top: b.top - m,
                height: e,
                onRenderCell: p
              },
              `${b.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function Ea({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  cellClass: u,
  style: h,
  onRenderCell: p,
  children: f
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ g(
    In,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: p
    },
    "left"
  ));
  let _ = null;
  r.list.length && (_ = /* @__PURE__ */ g(
    In,
    {
      rows: n,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: p
    },
    "center"
  ));
  let y = null;
  return o.list.length && (y = /* @__PURE__ */ g(
    In,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: p
    },
    "right"
  )), /* @__PURE__ */ g(
    "div",
    {
      className: T("dtable-block", c),
      style: { ...h, top: s, height: t },
      children: [
        m,
        _,
        y,
        f
      ]
    }
  );
}
var sr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, E = (s, t, e) => (sr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), R = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, G = (s, t, e, n) => (sr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ct = (s, t, e) => (sr(s, t, "access private method"), e), ve, Fe, Ne, $t, re, st, Et, Ot, He, xs, Bs, es, Ut, We, je, Yn, $a, Jn, Aa, Zn, Ma, Xn, Ia, Ts, Qn, vn, Vs, ti, ei, si, ni, Be, Ns, Us, nr, ir, Pa, ii, Ra;
let rr = class extends B {
  constructor(t) {
    super(t), R(this, Yn), R(this, Jn), R(this, Zn), R(this, Xn), R(this, Ts), R(this, Be), R(this, Us), R(this, ir), R(this, ii), this.ref = Z(), R(this, ve, 0), R(this, Fe, void 0), R(this, Ne, !1), R(this, $t, void 0), R(this, re, void 0), R(this, st, []), R(this, Et, void 0), R(this, Ot, /* @__PURE__ */ new Map()), R(this, He, {}), R(this, xs, void 0), R(this, Bs, []), R(this, es, { in: !1 }), this.updateLayout = () => {
      E(this, ve) && cancelAnimationFrame(E(this, ve)), G(this, ve, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, ve, 0);
      }));
    }, R(this, Ut, (e, n) => {
      n = n || e.type;
      const i = E(this, Ot).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), R(this, We, (e) => {
      E(this, Ut).call(this, e, `window_${e.type}`);
    }), R(this, je, (e) => {
      E(this, Ut).call(this, e, `document_${e.type}`);
    }), R(this, vn, (e, n, i, r) => {
      const { row: o, col: a } = n;
      n.value = this.getCellValue(o, a), e[0] = n.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, n, i, r)), E(this, st).forEach((c) => {
        c[l] && (e = c[l].call(this, e, n, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, n, i, r)), e;
    }), R(this, Vs, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), R(this, ti, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), E(this, st).forEach((u) => {
          var h;
          (h = u.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const u = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
            return;
          for (const h of E(this, st))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
              return;
        }
      }
    }), R(this, ei, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), R(this, si, (e) => {
      const n = d(e.target).closest(".dtable-cell");
      if (!n.length)
        return ct(this, Be, Ns).call(this, !1);
      ct(this, Be, Ns).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), R(this, ni, () => {
      ct(this, Be, Ns).call(this, !1);
    }), G(this, Fe, t.id ?? `dtable-${ut()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, re, Object.freeze(Bh(t.plugins))), E(this, re).forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(E(this, He), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), ct(this, Us, nr).call(this), E(this, st).forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Et)) == null ? void 0 : t.options) || E(this, $t) || Na();
  }
  get plugins() {
    return E(this, st);
  }
  get layout() {
    return E(this, Et);
  }
  get id() {
    return E(this, Fe);
  }
  get data() {
    return E(this, He);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return E(this, es);
  }
  componentWillReceiveProps() {
    G(this, $t, void 0);
  }
  componentDidMount() {
    E(this, Ne) ? this.forceUpdate() : ct(this, Ts, Qn).call(this), this.on("click", E(this, ti)), this.on("keydown", E(this, ei));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", E(this, si)), this.on("mouseleave", E(this, ni)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const n = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        G(this, xs, r);
        const { parent: o } = this;
        n.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : d(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      n.includes("window") && this.on("window_resize", this.updateLayout);
    }
    E(this, st).forEach((n) => {
      var r;
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, a]) => {
        a && this.on(o, a);
      })), (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    ct(this, Ts, Qn).call(this), E(this, st).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = E(this, xs)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of E(this, Ot).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), E(this, We)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), E(this, je)) : t.removeEventListener(n, E(this, Ut));
    E(this, st).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), E(this, re).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), G(this, He, {}), E(this, Ot).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  resetState(t, e) {
    G(this, $t, void 0), G(this, Et, void 0), t = t || this.props;
    const n = {};
    E(this, st).forEach((i) => {
      const { resetState: r, state: o } = i;
      r && (typeof r == "function" ? Object.assign(n, r.call(this, t)) : o && Object.assign(n, o.call(this)));
    }), Object.keys(n).length && this.setState(n);
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = E(this, Ot).get(t);
    i ? i.push(e) : (E(this, Ot).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, We)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, je)) : (r = this.element) == null || r.addEventListener(t, E(this, Ut)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = E(this, Ot).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (E(this, Ot).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, We)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, je)) : (o = this.element) == null || o.removeEventListener(t, E(this, Ut)));
  }
  emitCustomEvent(t, e) {
    E(this, Ut).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var n;
      this._noAnimation = void 0, (n = this.element) == null || n.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: u } = t;
    let { scrollLeft: h, scrollTop: p } = t;
    if (u === "up" || u === "down")
      p = i + (u === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (u === "left" || u === "right")
      h = n + (u === "right" ? 1 : -1) * c;
    else if (u === "top")
      p = 0;
    else if (u === "bottom")
      p = r - o;
    else if (u === "begin")
      h = 0;
    else if (u === "end")
      h = l - c;
    else {
      const { offsetLeft: m, offsetTop: _ } = t;
      typeof m == "number" && (h = n + m), typeof _ == "number" && (p = i + _);
    }
    const f = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (f.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (f.scrollTop = p)), Object.keys(f).length ? (this.setState(f, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, f), e == null || e.call(this, !0);
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
    if (!E(this, $t))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      G(this, Et, void 0);
    else if (n === "options") {
      if (G(this, $t, void 0), !E(this, Et))
        return;
      G(this, Et, void 0);
    }
    this.setState(i || ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = d(e).closest(".dtable-cell");
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
    return H(E(this, Bs), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = ct(this, ii, Ra).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: u, style: h = {} } = this.options, p = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], f = [];
    if (t) {
      const m = !t.rows.length;
      if (c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      E(this, st).forEach((_) => {
        var v;
        const y = (v = _.beforeRender) == null ? void 0 : v.call(this, t);
        y && (t = y);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, h["--dtable-header-height"] = `${t.headerHeight}px`, p.push(
        t.className,
        m ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && f.push(...t.children), m && u ? (delete h.height, f.push(
        /* @__PURE__ */ g("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ g(z, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (f.push(
        ct(this, Yn, $a).call(this, t),
        ct(this, Jn, Aa).call(this, t),
        ct(this, Zn, Ma).call(this, t)
      ), t.scrollable && f.push(ct(this, Xn, Ia).call(this, t))), E(this, st).forEach((_) => {
        var v;
        const y = (v = _.onRender) == null ? void 0 : v.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && p.push(y.className), y.children && f.push(y.children));
      });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        id: E(this, Fe),
        className: T(p),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: f
      }
    );
  }
};
ve = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
$t = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
Bs = /* @__PURE__ */ new WeakMap();
es = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
Yn = /* @__PURE__ */ new WeakSet();
$a = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      Ea,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        cellClass: "dtable-header-cell",
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: E(this, vn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    Po,
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
Jn = /* @__PURE__ */ new WeakSet();
Aa = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ g(
    Ea,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: E(this, vn),
      children: l
    },
    "body"
  );
};
Zn = /* @__PURE__ */ new WeakSet();
Ma = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    Po,
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
Xn = /* @__PURE__ */ new WeakSet();
Ia = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = s, { scrollbarSize: h = 12, horzScrollbarPos: p, vertScrollbarPos: f } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      Dr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: E(this, Vs),
        left: n,
        bottom: (p === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: u + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: u + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      Dr,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, Vs),
        right: f === "outside" ? -h : 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Ts = /* @__PURE__ */ new WeakSet();
Qn = function() {
  var s;
  G(this, Ne, !1), E(this, st).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (s = this.options.afterRender) == null || s.call(this);
};
vn = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakSet();
Ns = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = d(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = E(this, es);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, es, i);
};
Us = /* @__PURE__ */ new WeakSet();
nr = function() {
  if (E(this, $t))
    return !1;
  const t = { ...Na(), ...E(this, re).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return G(this, $t, t), G(this, st, E(this, re).reduce((e, n) => {
    const { options: i } = n;
    let r = t;
    return i && (r = Object.assign({ ...r }, typeof i == "function" ? i.call(this, t) : i)), r !== t && Object.assign(t, r), e.push(n), e;
  }, []).filter((e) => {
    const { when: n } = e;
    return !n || n.call(this, t);
  })), G(this, Bs, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
ir = /* @__PURE__ */ new WeakSet();
Pa = function() {
  var $, A;
  const { plugins: s } = this;
  let t = E(this, $t);
  const e = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((x) => {
    var D;
    const I = (D = x.beforeLayout) == null ? void 0 : D.call(this, t);
    I && (t = { ...t, ...I }), Object.assign(e, x.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: x } = this;
    if (x)
      i = x.clientWidth;
    else {
      G(this, Ne, !0);
      return;
    }
  }
  const r = Uh(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], u = (x, I, D) => {
    var L, j;
    const O = { data: D ?? { [a]: x }, id: x, index: c.length, top: 0 };
    if (D || (O.lazy = !0), c.push(O), ((L = t.onAddRow) == null ? void 0 : L.call(this, O, I)) !== !1) {
      for (const K of s)
        if (((j = K.onAddRow) == null ? void 0 : j.call(this, O, I)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let x = 0; x < o; x++)
      u(`${x}`, x);
  else
    Array.isArray(o) && o.forEach((x, I) => {
      typeof x == "object" ? u(`${x[a] ?? ""}`, I, x) : u(`${x ?? ""}`, I);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const x = t.onAddRows.call(this, h, r);
    x && (h = x);
  }
  for (const x of s) {
    const I = ($ = x.onAddRows) == null ? void 0 : $.call(this, h, r);
    I && (h = I);
  }
  h.forEach((x, I) => {
    p[x.id] = x, x.index = I, x.top = x.index * l;
  });
  const { header: f, footer: m } = t, _ = f ? t.headerHeight || l : 0, y = m ? t.footerHeight || l : 0;
  let v = t.height, b = 0;
  const S = h.length * l, w = _ + y + S;
  if (typeof v == "function" && (v = v.call(this, w)), v === "auto")
    b = w;
  else if (typeof v == "object")
    b = Math.min(v.max, Math.max(v.min, w));
  else if (v === "100%") {
    const { parent: x } = this;
    if (x)
      b = x.clientHeight;
    else {
      b = 0, G(this, Ne, !0);
      return;
    }
  } else
    b = v;
  const k = b - _ - y, N = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: S,
    header: f,
    footer: m,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: y,
    cols: r
  }, M = (A = t.onLayout) == null ? void 0 : A.call(this, N);
  M && Object.assign(N, M), s.forEach((x) => {
    if (x.onLayout) {
      const I = x.onLayout.call(this, N);
      I && Object.assign(N, I);
    }
  }), G(this, Et, N);
};
ii = /* @__PURE__ */ new WeakSet();
Ra = function() {
  (ct(this, Us, nr).call(this) || !E(this, Et)) && ct(this, ir, Pa).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((m) => {
    m.left = n, n += m.realWidth, m.visible = m.left + m.realWidth >= e && m.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), p = [], { rowDataGetter: f } = this.options;
  for (let m = c; m < h; m++) {
    const _ = o[m];
    _.lazy && f && (_.data = f([_.id])[0], _.lazy = !1), p.push(_);
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
rr.addPlugin = ka;
rr.removePlugin = xa;
function Da(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: q(i, t.row.data), ...n, ...r, ...a, children: e });
}
function or(s, t, e) {
  if (s == null)
    return;
  const n = t.row.data;
  return e = e ?? (n == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : q(s, { ...n, 0: e });
}
function La(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? n ?? "" : s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), Tt(e, s, n ?? e))) : n ?? e;
}
function za(s, t) {
  const { link: e } = t.col.setting, n = Da(e, t, s[0]);
  return n && (s[0] = n), s;
}
function Oa(s, t) {
  const { format: e, digits: n } = t.col.setting;
  let i = s[0];
  return typeof n == "number" && !Number.isNaN(Number(i)) && (i = Number(i), n >= 0 && (i = i.toFixed(n))), e && (i = or(e, t, i)), s[0] = i, s;
}
function Fa(s, t) {
  const { map: e, mapSplitter: n = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = s[0];
    typeof r == "string" && n && (r = r.split(n)), typeof e == "function" ? s[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), s[0] = r.map((o) => e[o] ?? o).join(i ?? n));
  }
  return s;
}
function Ha(s, t, e) {
  const n = {};
  return typeof s == "function" ? Object.assign(n, s(e)) : Object.keys(s).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[s[i]];
    r !== void 0 && (n[i] = r);
  }), Object.keys(n).length && t.push({ style: n }), t;
}
function Wa(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = La(n, t, s[0], i), s;
}
function ri(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : or(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const qh = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return ri(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: u = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ g(
          dn,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ g(
          fn,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: u,
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
    const { formatDate: e, html: n, hint: i, styleMap: r } = t.col.setting;
    if (e && (s = Wa(s, t, e)), s = Fa(s, t), s = Oa(s, t), n ? s = ri(s, t) : s = za(s, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = q(i, t.row.data) : typeof s[0] == "string" && (o = s[0]), s.push({ attrs: { title: o } });
    }
    return r && (s = Ha(r, s, t)), s;
  }
}, Gh = rt(qh, { buildIn: !0 }), Yh = {
  default: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return n === i ? 0 : n == null ? 1 : String(n).localeCompare(String(i));
  },
  date: (s, t, e) => {
    var r, o;
    const n = V(((r = s.data) == null ? void 0 : r[e.name]) ?? 0), i = V(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return n.getTime() - i.getTime();
  },
  number: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(n) - Number.parseFloat(i);
  }
}, Jh = {
  name: "sort",
  defaultOptions: { sort: !0 },
  when: (s) => !!s.sort,
  onCreate() {
    const { sortBy: s } = this.options;
    s && (this.state.sortBy = Array.isArray(s) ? s : [s]);
  },
  onAddRows(s, t) {
    const { sortBy: e } = this.state;
    if (!e || !e.length)
      return;
    const { sort: n } = this.options, i = {
      ...Yh,
      ...typeof n == "function" ? { default: n } : typeof n == "object" ? n : {}
    };
    return [...s].sort((r, o) => {
      for (const { name: a, order: l } of e) {
        const c = t.map[a];
        if (!c)
          continue;
        let u = c.setting.sort;
        if (u === !0 ? u = i.default : typeof u == "string" && (u = i[u]), !u)
          continue;
        const h = u.call(this, r, o, c);
        if (h)
          return l === "asc" ? h : -h;
      }
      return 0;
    });
  },
  onHeaderCellClick(s, t) {
    if (!s.target.closest(".dtable-sort-link"))
      return;
    const e = this.getColInfo(t.colName);
    if (!e || !e.setting.sort)
      return;
    const { sortBy: n = [] } = this.state, i = n.findIndex((a) => a.name === e.name), { multiSort: r } = this.options;
    let o = "asc";
    if (i >= 0) {
      const a = n[i].order;
      a === "asc" ? o = "desc" : a === "desc" && (o = "none"), r && n.splice(i, 1);
    }
    r || (n.length = 0), this.update({ dirtyType: "layout", state: { sortBy: [{ name: t.colName, order: o }, ...n].filter((a) => a.order !== "none") } });
  },
  onRenderHeaderCell(s, t) {
    var l;
    const { col: e } = t, { sortBy: n } = this.state;
    if (!e.setting.sort)
      return s;
    const o = ((l = n == null ? void 0 : n.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${o}` });
    return s[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      s[0],
      a
    ] }), s.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), s;
  }
}, Zh = rt(Jh, { buildIn: !0 }), Xh = {
  html: { component: xe }
}, Qh = {
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
        component: xe,
        props: { html: q(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Xh[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((p) => {
        if (p) {
          const { props: f } = p;
          f && d.extend(u, typeof f == "function" ? f.call(this, t) : f), l = p.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ g(h, { ...u }) };
    }), s;
  }
}, tu = rt(Qh);
function eu(s, t) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const e = this.state.checkedRows, n = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, u) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === u || (u ? e[c] = !0 : delete e[c], n[c] = u);
  };
  if (s === void 0 ? (t === void 0 && (t = !ja.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !e[c]);
  })), Object.keys(n).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, n, e);
    c && Object.keys(c).forEach((u) => {
      const h = i ? i.call(this, u) : !0;
      !h || !r && h === "disabled" || (c[u] ? e[u] = !0 : delete e[u]);
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, n);
    });
  }
  return n;
}
function su(s) {
  return this.state.checkedRows[s] ?? !1;
}
function ja() {
  var i, r;
  const s = (i = this.layout) == null ? void 0 : i.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e, allowCheckDisabled: n } = this.options;
  return e ? t === ((r = this.layout) == null ? void 0 : r.allRows.reduce((o, a) => {
    const l = e ? e.call(this, a.id) : !0;
    return o + (!l || !n && l === "disabled" ? 0 : 1);
  }, 0)) : t === s;
}
function nu() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function iu(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function Or(s, t, e = !1, n = void 0) {
  return /* @__PURE__ */ g(hn, { className: "dtable-checkbox", checked: s, disabled: e, label: n });
}
const Fr = 'input[type="checkbox"],.dtable-checkbox', ru = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Or
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
    toggleCheckRows: eu,
    isRowChecked: su,
    isAllRowChecked: ja,
    getChecks: nu,
    toggleCheckable: iu
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Or(s, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [/* @__PURE__ */ g(z, { className: "dtable-check-info", content: n.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ g("div", { className: "dtable-check-info", children: r.join(", ") })
      ];
    }
  },
  onCreate() {
    const { checkedRows: s } = this.options;
    s && this.setState((t) => ({
      checkedRows: {
        ...t.checkedRows,
        ...s.reduce((e, n) => (e[n] = !0, e), {})
      }
    }));
  },
  onRenderCell(s, { row: t, col: e }) {
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const u = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, r === "disabled");
      s.push(
        u,
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
    if (this.data.disableCheckable)
      return;
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(Fr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = d(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Fr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, ou = rt(ru), au = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new cs(`DTable:${this.id}`) };
  }
}, lu = rt(au);
var Ba = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Ba || {});
function Ks(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = Ks.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ks.call(this, t.parent).level + 1 : 0, t;
}
function cu(s) {
  return s !== void 0 ? Ks.call(this, s) : this.data.nestedMap;
}
function hu(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Va.call(this)), t) {
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
    state: { nestedState: { ...e } }
  }, () => {
    const { onNestedChange: i, preserveNested: r } = this.options;
    i == null || i.call(this), r && this.data.store.set("nestedState", e);
  });
}
function Va() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Ua(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Ua(s, t, o.children, n + 1)));
  }
  return t;
}
function Ka(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Ka(s, r, e, n);
  }), i;
}
function qa(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && qa(s, r.parent, e, n, i);
}
const bs = "dtable-nested-toggle", uu = {
  name: "nested",
  plugins: [lu],
  requireAfter: ["sortable"],
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
      if (!this.options.checkable || !(s != null && s.length) || this.options.noNestedCheck)
        return;
      const n = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = Ka(this, i, r, n);
        o != null && o.parent && qa(this, o.parent, r, n, e);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((t) => t.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map(), nestedRowMap: /* @__PURE__ */ new Map() };
  },
  state() {
    return { nestedState: {} };
  },
  methods: {
    getNestedInfo: cu,
    toggleRow: hu,
    isAllCollapsed: Va,
    getNestedRowInfo: Ks
  },
  onCreate() {
    let { defaultNestedState: s } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (s = t);
    }
    this.state.nestedState = s || {};
  },
  beforeLayout() {
    this.data.nestedMap.clear(), this.data.nestedRowMap.clear();
  },
  onAddRow(s) {
    this.data.nestedRowMap.set(s.id, s);
  },
  onAddRows(s) {
    const { nestedMap: t, nestedRowMap: e } = this.data;
    s.forEach((i) => {
      var l, c;
      const r = t.get(i.id) ?? {
        state: "",
        level: 0
      };
      let o = ((l = i.data) == null ? void 0 : l[this.options.nestedParentKey ?? "parent"]) ?? [];
      Array.isArray(o) || (o = [o]);
      let a;
      for (o = [...o]; o.length; ) {
        let u = o.pop();
        if (u === void 0)
          continue;
        if (u = String(u), e.get(u)) {
          a = u;
          break;
        }
      }
      if (r.parent = a === "0" ? void 0 : a, (c = i.data) != null && c[this.options.asParentKey ?? "asParent"] && (r.children = []), t.set(i.id, r), a) {
        let u = t.get(a);
        u || (u = {
          state: "",
          level: 0
        }, t.set(a, u)), u.children || (u.children = []), u.children.push(i.id);
      }
    });
    const n = /* @__PURE__ */ new Map();
    return s = s.filter((i) => {
      const r = this.getNestedRowInfo(i.id);
      return n.set(i.id, r), r.state !== "hidden";
    }), Ua(n), s.sort((i, r) => {
      const o = n.get(i.id), a = n.get(r.id), l = (o.order ?? 0) - (a.order ?? 0);
      return l === 0 ? i.index - r.index : l;
    }), s;
  },
  onRenderCell(s, t) {
    var c;
    const { row: e, col: n } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = n.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const u = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(u) && u > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ g("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: q(a, r) }) : h = /* @__PURE__ */ g(z, { className: "dtable-child-label", content: a, generatorThis: t }), s.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && s.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, n, r)) ?? /* @__PURE__ */ g("a", { className: `${bs} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: u = o } = n.setting;
      u && (u === !0 && (u = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: u * l.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ g("a", { className: `${bs} state`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(`.${bs}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${bs}`)))
      return this.toggleRow(t), !0;
  }
}, du = rt(uu);
function Pn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarCodeKey: a, avatarNameKey: l = `${e.name}Name` } = e.setting;
  let { avatarProps: c = {} } = e.setting;
  typeof c == "function" && (c = c(e, t));
  const u = (n ? n[l] : i) || s[0], h = {
    size: "xs",
    src: n ? n[o] : void 0,
    text: u,
    code: a ? n ? n[a] : void 0 : i,
    ...c,
    className: T(r, c.className, "flex-none")
  };
  if (s[0] = /* @__PURE__ */ g(ln, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, f = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      s[0],
      /* @__PURE__ */ g("div", { children: u })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ g("span", { children: u })
    ] }));
  return s;
}
const fu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Pn
    },
    avatarBtn: {
      onRenderCell: Pn
    },
    avatarName: {
      onRenderCell: Pn
    }
  }
}, pu = rt(fu, { buildIn: !0 }), gu = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { setting: n } = e;
    let { sortType: i } = n;
    if (e.setting.sort !== void 0 || i === !1)
      return s;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${a}` });
      s.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = n;
      if (c) {
        const u = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, u, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...p } = c;
        s[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: q(h, { ...n, sortType: u }), ...p, children: [
          s[0],
          l
        ] });
      } else
        s.push(l);
    }
    return s;
  }
}, mu = rt(gu, { buildIn: !0 }), Rn = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, _u = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Rn(t.left.list), Rn(t.center.list), Rn(t.right.list);
  }
}, yu = rt(_u);
const vu = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data() {
    return { headerGroups: /* @__PURE__ */ new Map() };
  },
  when: (s) => !!s.headerGroup,
  beforeLayout(s) {
    const { headerGroups: t } = this.data;
    t.clear();
    const { cols: e } = s;
    if (!(e != null && e.length))
      return;
    const n = {};
    return e.forEach((i, r) => {
      const { headerGroup: o } = i;
      if (!o) {
        n[i.name] = r;
        return;
      }
      let a = t.get(o);
      a ? a.cols.push(i.name) : (a = { cols: [i.name], index: r }, t.set(o, a)), n[i.name] = a.index + a.cols.length / e.length;
    }), e.sort((i, r) => n[i.name] - n[r.name]), {
      headerHeight: !s.headerHeight && s.rowHeight ? s.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(s, { col: t }) {
    const { headerGroup: e } = t.setting;
    if (e) {
      const n = this.data.headerGroups.get(e), i = this.layout.headerHeight / 2;
      if (t.name === n.cols[0]) {
        const r = n.cols.reduce((a, l) => {
          var c;
          return a + (((c = this.getColInfo(l)) == null ? void 0 : c.realWidth) ?? 0);
        }, 0), o = {
          height: i - 1,
          width: r - 1
        };
        s.push(/* @__PURE__ */ g("div", { class: "dtable-header-group", style: o, children: e }));
      }
      s.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return s;
  }
}, bu = rt(vu), wu = {
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
    const a = (l, c, u) => {
      const { index: h } = c;
      l.forEach((p, f) => {
        const { index: m } = p, _ = `C${m}R${h}`;
        if (n.has(_))
          return;
        const y = t.call(this, { row: c, col: p });
        if (!y)
          return;
        const v = Math.min(y.colSpan || 1, l.length - f), b = Math.min(y.rowSpan || 1, i.length - u);
        if (v <= 1 && b <= 1)
          return;
        let S = 0;
        for (let w = 0; w < v; w++) {
          S += l[f + w].realWidth;
          for (let k = 0; k < b; k++) {
            const N = `C${m + w}R${h + k}`;
            N !== _ && n.add(N);
          }
        }
        e.set(_, {
          colSpan: v,
          rowSpan: b,
          width: S,
          height: o * b
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((u) => {
        a(r[u].list, l, c);
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
}, Cu = rt(wu), Su = {
  name: "mousemove",
  events: {
    click(s) {
      this.data.ignoreNextClick && (s.preventDefault(), this.data.ignoreNextClick = void 0);
    },
    mousedown() {
      this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick);
    },
    mousemove(s) {
      this.data.mmRafID && (cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = 0), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", s);
      }), s.preventDefault();
    },
    document_mousemove(s) {
      this.data.dmmRafID && (cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = 0), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", s);
      });
    }
  },
  methods: {
    ignoreNextClick(s = 10) {
      this.data.ignoreNextClick = window.setTimeout(() => {
        this.data.ignoreNextClick = void 0;
      }, s);
    }
  }
}, Ga = rt(Su);
function ku() {
  var S, w, k, N;
  const { scrollToMouse: s } = this.data;
  if (!s)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: n } = s;
  if (!t || Date.now() - e < n)
    return;
  const i = (w = (S = this.ref.current) == null ? void 0 : S.querySelector(".dtable-body")) == null ? void 0 : w.getBoundingClientRect();
  if (!i)
    return;
  const r = (N = (k = this.ref.current) == null ? void 0 : k.querySelector(".dtable-scroll-center")) == null ? void 0 : N.getBoundingClientRect(), { maxStep: o, detectPadding: a, speed: l, side: c } = s, { x: u, y: h } = t, { top: p, bottom: f } = i, { left: m, right: _ } = r || i;
  let y = 0;
  u < m - a ? y = -Math.max(o, m - a - u) : u > _ - a && (y = Math.max(o, u - (_ - a)));
  let v = 0;
  if (h < p - a ? v = -Math.max(o, p - a - h) : h > f - a && (v = Math.max(o, h - (f - a))), c) {
    const M = new Set((Array.isArray(c) ? c : [c]).reduce(($, A) => (A === "x" ? $.push("left", "right") : A === "y" ? $.push("top", "bottom") : $.push(A), $), []));
    (!M.has("left") && y < 0 || !M.has("right") && y > 0) && (y = 0), (!M.has("top") && v < 0 || !M.has("bottom") && v > 0) && (v = 0);
  }
  const b = {};
  y !== 0 && (b.scrollLeft = this.layout.scrollLeft + l * y), v !== 0 && (b.scrollTop = this.layout.scrollTop + l * v), this.scroll(b);
}
const xu = {
  name: "autoscroll",
  plugins: [Ga],
  events: {
    document_mousemovesmooth(s) {
      if (!this.data.scrollToMouse)
        return;
      const { clientX: t, clientY: e } = s;
      this.data.scrollToMouse.position = { x: t, y: e };
    }
  },
  methods: {
    scrollTo({ col: s, row: t, extra: e = 2 }) {
      const n = this.getColInfo(s), i = this.getRowInfo(t);
      if (!n && !i)
        return !1;
      const r = {}, { layout: o } = this;
      if (n) {
        const { scrollLeft: a, cols: l } = o, c = n.left + n.realWidth;
        n.left < a ? r.scrollLeft = n.left - e : c > l.center.width + a && (r.scrollLeft = c - l.center.width + e);
      }
      if (i) {
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, u = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : u > c + a && (r.scrollTop = u - c + e);
      }
      return this.scroll(r), !0;
    },
    startScrollToMouse(s) {
      const t = {
        interval: 60,
        speed: 0.5,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...s
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(ku.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, Tu = rt(xu);
const Nu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (s) => !!s.sortable,
  plugins: [Ga, Tu],
  events: {
    click(s) {
      s.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(s) {
      var a;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options, e = d(s.target);
      if (!e.closest(t).length)
        return;
      const i = this.getPointerInfo(s);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, s)) === !1)
        return;
      e.closest("a,button,img").attr("draggable", "false").length && s.preventDefault();
      const o = s.clientY;
      this.data.sortableInfo = { from: r, offset: o - i.cellElement.getBoundingClientRect().top, startMouseY: o, lastMouseY: o };
    },
    document_mouseup(s) {
      var n;
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      this.stopScrollToMouse();
      const e = this.getSortingState(s);
      if (e) {
        let i, r;
        const { sortingFrom: o, sortingTo: a, sortingSide: l } = e;
        if (a && l) {
          const c = [...this.layout.rows], u = o.index, h = a.index, p = c.splice(u, 1);
          c.splice(h, 0, p[0]), i = {}, r = [], c.forEach(({ id: f }, m) => {
            i[f] = m, r.push(f);
          }), ((n = this.options.onSort) == null ? void 0 : n.call(this, o, a, l, r)) === !1 && (i = void 0, r = void 0);
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && this.ignoreNextClick(), this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: d.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, i ? { rowOrders: i } : null)
        }, () => {
          var c;
          (c = this.options.onSortEnd) == null || c.call(this, o, a, l, r), setTimeout(() => {
            this.data.disableCheckable = void 0;
          }, 50);
        });
      }
      this.data.sortableInfo = void 0;
    },
    document_mousemovesmooth(s) {
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      const e = this.getSortingState(s);
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.lastMouseY = s.clientY, t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(s) {
      var N;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: n, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, u = l.height - n - i, h = s.clientX - l.left, p = s.clientY - l.top - n;
      if (h < 0 || h > c || p < 0 || p > u)
        return e.state;
      const f = p + o, m = r.find((M) => M.top <= f && M.top + a > f);
      if (!m)
        return e.state;
      const _ = e.from, y = m.id !== _.id ? m.id : void 0, v = y ? this.getRowInfo(y) : void 0, b = p, S = f < m.top + a / 2 ? "before" : "after";
      return v && ((N = this.options.canSortTo) == null ? void 0 : N.call(this, _, v, S)) !== !1 ? {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: v,
        sortingSide: S
      } : {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: void 0,
        sortingSide: void 0
      };
    }
  },
  onAddRows(s) {
    const { rowOrders: t } = this.state;
    if (t)
      return s = s.sort((e, n) => t[e.id] - t[n.id]), s;
  },
  beforeRender(s) {
    const { sortingFrom: t } = this.state, { visibleRows: e } = s;
    t && (e.some((n) => n.id === t.id) || (s.visibleRows = [...e, t]), s.className = T(s.className, "dtable-sorting"));
  },
  onRenderCell(s, t, e) {
    const { sortingFrom: n, sortingPos: i, sortingTo: r, sortingSide: o } = this.state;
    if (!n)
      return s;
    const a = t.row, l = {}, c = [];
    if (n.id === a.id)
      l.top = i - this.data.sortableInfo.offset + ((e.top ?? a.top) - (a.top - this.layout.scrollTop)), c.push("is-sorting-from");
    else if (r) {
      const u = r.id === a.id;
      u && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), n.index > a.index && (u && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : n.index < a.index && (u && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && s.push({
      outer: !0,
      style: l,
      className: c
    }), s;
  }
}, Eu = rt(Nu), $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Ba,
  avatar: pu,
  cellspan: Cu,
  checkable: ou,
  custom: tu,
  group: yu,
  headerGroup: bu,
  nested: du,
  renderDatetime: La,
  renderDatetimeCell: Wa,
  renderFormat: or,
  renderFormatCell: Oa,
  renderHtmlCell: ri,
  renderLink: Da,
  renderLinkCell: za,
  renderMapCell: Fa,
  renderStyleMapCell: Ha,
  rich: Gh,
  sort: Zh,
  sortType: mu,
  sortable: Eu
}, Symbol.toStringTag, { value: "Module" }));
class ps extends U {
  setOptions(t, e) {
    return t = super.setOptions(t, e), t.parent || (t.parent = this.element), t;
  }
}
ps.NAME = "DTable";
ps.Component = rr;
ps.definePlugin = rt;
ps.removePlugin = xa;
ps.plugins = $u;
const Au = "nav", Dn = '[data-toggle="tab"]', Mu = "active";
class qs extends gt {
  constructor() {
    super(...arguments), this._timer = 0;
  }
  active(t) {
    const e = this.$element, n = e.find(Dn);
    let i = t ? d(t).closest(Dn) : n.filter(`.${Mu}`);
    if (!i.length && (i = e.find(Dn).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = d(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), this._timer = 0;
    }, 10));
  }
}
qs.NAME = "Tabs";
qs.toggle = {
  name: "tab",
  handler(s, t) {
    const e = d(s), n = e.closest(`.${Au}`);
    n.length && qs.ensure(n, t).active(e);
  }
};
qs.register();
export {
  d as $,
  oo as Ajax,
  Fo as Avatar,
  Ru as BUILD,
  Ho as BtnGroup,
  Ql as Bus,
  ea as ColorPicker,
  an as CommonList,
  gt as Component,
  U as ComponentFromReact,
  Ms as Computed,
  z as CustomContent,
  Po as CustomRender,
  ps as DTable,
  ji as DatePicker,
  Bi as DatetimePicker,
  ae as Dropdown,
  qi as FileSelector,
  tt as HElement,
  xe as HtmlContent,
  et as Icon,
  Gi as ImageSelector,
  xi as Menu,
  Ku as Messager,
  Hs as Modal,
  Qe as ModalBase,
  Ue as ModalTrigger,
  pa as Nav,
  va as Pager,
  Xi as Pick,
  tr as Picker,
  Ro as Portal,
  $i as ProgressCircle,
  B as ReactComponent,
  Ca as SearchBox,
  Ti as SearchMenu,
  dc as Sticky,
  Xe as TIME_DAY,
  qs as Tabs,
  Wi as TimePicker,
  Sa as Toolbar,
  er as Tooltip,
  Pu as VERSION,
  Ch as addDate,
  So as bindHotkeys,
  jt as bus,
  d as cash,
  T as classes,
  Lu as clearData,
  gs as convertBytes,
  No as create,
  V as createDate,
  jl as createFormData,
  bc as createPortal,
  Z as createRef,
  io as deepGet,
  zl as deepGetPath,
  Fu as defineFn,
  Is as delay,
  Jl as disableScroll,
  Hu as dom,
  br as downloadFile,
  rc as enterFullscreen,
  qe as evalValue,
  yi as fetchData,
  Dt as formatBytes,
  Tt as formatDate,
  ed as formatDateSpan,
  q as formatString,
  ao as getClassList,
  rn as getComponent,
  ki as getFullscreenElement,
  Co as getHotkeysMap,
  mc as getReactComponent,
  Tc as getUniqueCode,
  Ge as getZData,
  _t as h,
  Ou as hotkeys,
  H as i18n,
  Eo as initGlobalComponents,
  zn as isDiff,
  Du as isFetchSetting,
  oe as isSameDay,
  sa as isSameMonth,
  Zu as isSameWeek,
  qn as isSameYear,
  Xu as isToday,
  td as isTomorrow,
  na as isValidDate,
  Ct as isValidElement,
  Qu as isYesterday,
  F as mergeProps,
  ut as nextGid,
  zu as parseRawData,
  yo as parseSize,
  Io as reactComponents,
  ac as registerComponent,
  Xl as registerGlobalListener,
  at as registerReactComponent,
  _o as removeUndefinedProps,
  Ce as render,
  jn as renderCustomContent,
  yc as renderCustomResult,
  gr as setZData,
  Vl as shareData,
  Bn as store,
  vi as storeData,
  bi as takeData,
  Cs as toCssSize,
  xo as toggleFullscreen,
  ko as unbindHotkeys
};
//# sourceMappingURL=zui.esm.js.map
