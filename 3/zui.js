var hi = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var D = (s, t, e) => (hi(s, t, "read from private field"), e ? e.call(s) : t.get(s)), F = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, U = (s, t, e, n) => (hi(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Le = (s, t, e) => (hi(s, t, "access private method"), e);
const Xt = document, wn = window, Jo = Xt.documentElement, Ae = Xt.createElement.bind(Xt), Qo = Ae("div"), di = Ae("table"), Nc = Ae("tbody"), ao = Ae("tr"), { isArray: Un, prototype: ta } = Array, { concat: Ec, filter: cr, indexOf: ea, map: sa, push: Tc, slice: na, some: hr, splice: Mc } = ta, Ic = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ac = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pc = /<.+>/, Dc = /^\w+$/;
function dr(s, t) {
  const e = Lc(t);
  return !s || !e && !Ne(t) && !st(t) ? [] : !e && Ac.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Dc.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class jn {
  constructor(t, e) {
    if (!t)
      return;
    if ($i(t))
      return t;
    let n = t;
    if (ht(t)) {
      const i = e || Xt;
      if (n = Ic.test(t) && Ne(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Pc.test(t) ? oa(t) : $i(i) ? i.find(t) : ht(i) ? f(i).find(t) : dr(t, i), !n)
        return;
    } else if (Pe(t))
      return this.ready(t);
    (n.nodeType || n === wn) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new jn(t, e);
  }
}
const S = jn.prototype, f = S.init;
f.fn = f.prototype = S;
S.length = 0;
S.splice = Mc;
typeof Symbol == "function" && (S[Symbol.iterator] = ta[Symbol.iterator]);
function $i(s) {
  return s instanceof jn;
}
function Ye(s) {
  return !!s && s === s.window;
}
function Ne(s) {
  return !!s && s.nodeType === 9;
}
function Lc(s) {
  return !!s && s.nodeType === 11;
}
function st(s) {
  return !!s && s.nodeType === 1;
}
function Rc(s) {
  return !!s && s.nodeType === 3;
}
function zc(s) {
  return typeof s == "boolean";
}
function Pe(s) {
  return typeof s == "function";
}
function ht(s) {
  return typeof s == "string";
}
function wt(s) {
  return s === void 0;
}
function bs(s) {
  return s === null;
}
function ia(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function ur(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
f.isWindow = Ye;
f.isFunction = Pe;
f.isArray = Un;
f.isNumeric = ia;
f.isPlainObject = ur;
function it(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (ur(s)) {
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
f.each = it;
S.each = function(s) {
  return it(this, s);
};
S.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Cn(...s) {
  const t = zc(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Cn(t, f, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (Un(r[o]) || ur(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Cn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
f.extend = Cn;
S.extend = function(s) {
  return Cn(S, s);
};
const Wc = /\S+/g;
function Kn(s) {
  return ht(s) ? s.match(Wc) || [] : [];
}
S.toggleClass = function(s, t) {
  const e = Kn(s), n = !wt(t);
  return this.each((i, r) => {
    st(r) && it(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
S.addClass = function(s) {
  return this.toggleClass(s, !0);
};
S.removeAttr = function(s) {
  const t = Kn(s);
  return this.each((e, n) => {
    st(n) && it(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Oc(s, t) {
  if (s) {
    if (ht(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !st(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return bs(e) ? void 0 : e;
      }
      return wt(t) ? this : bs(t) ? this.removeAttr(s) : this.each((e, n) => {
        st(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
S.attr = Oc;
S.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
S.hasClass = function(s) {
  return !!s && hr.call(this, (t) => st(t) && t.classList.contains(s));
};
S.get = function(s) {
  return wt(s) ? na.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
S.eq = function(s) {
  return f(this.get(s));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function Hc(s) {
  return wt(s) ? this.get().map((t) => st(t) || Rc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    st(e) && (e.textContent = s);
  });
}
S.text = Hc;
function Zt(s, t, e) {
  if (!st(s))
    return;
  const n = wn.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function Rt(s, t) {
  return parseInt(Zt(s, t), 10) || 0;
}
function lo(s, t) {
  return Rt(s, `border${t ? "Left" : "Top"}Width`) + Rt(s, `padding${t ? "Left" : "Top"}`) + Rt(s, `padding${t ? "Right" : "Bottom"}`) + Rt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const ui = {};
function Bc(s) {
  if (ui[s])
    return ui[s];
  const t = Ae(s);
  Xt.body.insertBefore(t, null);
  const e = Zt(t, "display");
  return Xt.body.removeChild(t), ui[s] = e !== "none" ? e : "block";
}
function co(s) {
  return Zt(s, "display") === "none";
}
function ra(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function qn(s) {
  return ht(s) ? (t, e) => ra(e, s) : Pe(s) ? s : $i(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
S.filter = function(s) {
  const t = qn(s);
  return f(cr.call(this, (e, n) => t.call(e, n, e)));
};
function fe(s, t) {
  return t ? s.filter(t) : s;
}
S.detach = function(s) {
  return fe(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Fc = /^\s*<(\w+)[^>]*>/, Vc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ho = {
  "*": Qo,
  tr: Nc,
  td: ao,
  th: ao,
  thead: di,
  tbody: di,
  tfoot: di
};
function oa(s) {
  if (!ht(s))
    return [];
  if (Vc.test(s))
    return [Ae(RegExp.$1)];
  const t = Fc.test(s) && RegExp.$1, e = ho[t] || ho["*"];
  return e.innerHTML = s, f(e.childNodes).detach().get();
}
f.parseHTML = oa;
S.has = function(s) {
  const t = ht(s) ? (e, n) => dr(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
S.not = function(s) {
  const t = qn(s);
  return this.filter((e, n) => (!ht(s) || st(n)) && !t.call(n, e, n));
};
function Qt(s, t, e, n) {
  const i = [], r = Pe(t), o = n && qn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Tc.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function aa(s) {
  return s.multiple && s.options ? Qt(cr.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Uc(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || ma.test(e.type)) {
      const i = Un(s) ? sa.call(s, String) : bs(s) ? [] : [String(s)];
      n ? it(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = wt(s) || bs(s) ? "" : s;
  }) : this[0] && aa(this[0]);
}
S.val = Uc;
S.is = function(s) {
  const t = qn(s);
  return hr.call(this, (e, n) => t.call(e, n, e));
};
f.guid = 1;
function Ht(s) {
  return s.length > 1 ? cr.call(s, (t, e, n) => ea.call(n, t) === e) : s;
}
f.unique = Ht;
S.add = function(s, t) {
  return f(Ht(this.get().concat(f(s, t).get())));
};
S.children = function(s) {
  return fe(f(Ht(Qt(this, (t) => t.children))), s);
};
S.parent = function(s) {
  return fe(f(Ht(Qt(this, "parentNode"))), s);
};
S.index = function(s) {
  const t = s ? f(s)[0] : this[0], e = s ? this : f(t).parent().children();
  return ea.call(e, t);
};
S.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
S.siblings = function(s) {
  return fe(f(Ht(Qt(this, (t) => f(t).parent().children().not(t)))), s);
};
S.find = function(s) {
  return f(Ht(Qt(this, (t) => dr(s, t))));
};
const jc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Kc = /^$|^module$|\/(java|ecma)script/i, qc = ["type", "src", "nonce", "noModule"];
function Gc(s, t) {
  const e = f(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Kc.test(i.type) && Jo.contains(i)) {
      const r = Ae("script");
      r.text = i.textContent.replace(jc, ""), it(qc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Yc(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && Gc(t, s.ownerDocument);
}
function pe(s, t, e, n, i, r, o, a) {
  return it(s, (l, c) => {
    it(f(c), (d, h) => {
      it(f(t), (m, p) => {
        const g = e ? h : p, _ = e ? p : h, v = e ? d : m;
        Yc(g, v ? _.cloneNode(!0) : _, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
S.after = function() {
  return pe(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return pe(arguments, this, !1, !1, !0);
};
function Xc(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (wt(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    st(n) && (t ? f(n).empty().append(s) : n.innerHTML = s);
  });
}
S.html = Xc;
S.appendTo = function(s) {
  return pe(arguments, this, !0, !1, !0);
};
S.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = f(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
S.before = function() {
  return pe(arguments, this, !1, !0);
};
S.wrapAll = function(s) {
  let t = f(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
S.wrap = function(s) {
  return this.each((t, e) => {
    const n = f(s)[0];
    f(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
S.insertAfter = function(s) {
  return pe(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(s) {
  return pe(arguments, this, !0, !0);
};
S.prepend = function() {
  return pe(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(s) {
  return pe(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return f(Ht(Qt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
S.next = function(s, t, e) {
  return fe(f(Ht(Qt(this, "nextElementSibling", t, e))), s);
};
S.nextAll = function(s) {
  return this.next(s, !0);
};
S.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
S.parents = function(s, t) {
  return fe(f(Ht(Qt(this, "parentElement", !0, t))), s);
};
S.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
S.prev = function(s, t, e) {
  return fe(f(Ht(Qt(this, "previousElementSibling", t, e))), s);
};
S.prevAll = function(s) {
  return this.prev(s, !0);
};
S.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
S.map = function(s) {
  return f(Ec.apply([], sa.call(this, (t, e) => s.call(t, e, t))));
};
S.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Zt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Jo;
  });
};
S.slice = function(s, t) {
  return f(na.call(this, s, t));
};
const Zc = /-([a-z])/g;
function fr(s) {
  return s.replace(Zc, (t, e) => e.toUpperCase());
}
S.ready = function(s) {
  const t = () => setTimeout(s, 0, f);
  return Xt.readyState !== "loading" ? t() : Xt.addEventListener("DOMContentLoaded", t), this;
};
S.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = f(t);
    e.replaceWith(e.children());
  }), this;
};
S.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + wn.pageYOffset,
    left: t.left + wn.pageXOffset
  };
};
S.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Zt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && st(i)) {
      const r = f(i).offset();
      e.top -= r.top + Rt(i, "borderTopWidth"), e.left -= r.left + Rt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Rt(s, "marginTop"),
    left: e.left - Rt(s, "marginLeft")
  };
};
const la = {
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
S.prop = function(s, t) {
  if (s) {
    if (ht(s))
      return s = la[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
S.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[la[s] || s];
  });
};
const Jc = /^--/;
function pr(s) {
  return Jc.test(s);
}
const fi = {}, { style: Qc } = Qo, th = ["webkit", "moz", "ms"];
function eh(s, t = pr(s)) {
  if (t)
    return s;
  if (!fi[s]) {
    const e = fr(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${th.join(`${n} `)}${n}`.split(" ");
    it(i, (r, o) => {
      if (o in Qc)
        return fi[s] = o, !1;
    });
  }
  return fi[s];
}
const sh = {
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
function ca(s, t, e = pr(s)) {
  return !e && !sh[s] && ia(t) ? `${t}px` : t;
}
function nh(s, t) {
  if (ht(s)) {
    const e = pr(s);
    return s = eh(s, e), arguments.length < 2 ? this[0] && Zt(this[0], s, e) : s ? (t = ca(s, t, e), this.each((n, i) => {
      st(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
S.css = nh;
function ha(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const ih = /^\s+|\s+$/;
function uo(s, t) {
  const e = s.dataset[t] || s.dataset[fr(t)];
  return ih.test(e) ? e : ha(JSON.parse, e);
}
function rh(s, t, e) {
  e = ha(JSON.stringify, e), s.dataset[fr(t)] = e;
}
function oh(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = uo(this[0], n);
    return e;
  }
  if (ht(s))
    return arguments.length < 2 ? this[0] && uo(this[0], s) : wt(t) ? this : this.each((e, n) => {
      rh(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
S.data = oh;
function da(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
it([!0, !1], (s, t) => {
  it(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    S[i] = function(r) {
      if (this[0])
        return Ye(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : Ne(this[0]) ? da(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? Rt(this[0], `margin${e ? "Top" : "Left"}`) + Rt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
it(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  S[e] = function(n) {
    if (!this[0])
      return wt(n) ? void 0 : this;
    if (!arguments.length)
      return Ye(this[0]) ? this[0].document.documentElement[`client${t}`] : Ne(this[0]) ? da(this[0], t) : this[0].getBoundingClientRect()[e] - lo(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!st(o))
        return;
      const a = Zt(o, "boxSizing");
      o.style[e] = ca(e, i + (a === "border-box" ? lo(o, !s) : 0));
    });
  };
});
const fo = "___cd";
S.toggle = function(s) {
  return this.each((t, e) => {
    if (!st(e))
      return;
    const n = co(e);
    (wt(s) ? n : s) ? (e.style.display = e[fo] || "", co(e) && (e.style.display = Bc(e.tagName))) : n || (e[fo] = Zt(e, "display"), e.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const po = "___ce", mr = ".", gr = { focus: "focusin", blur: "focusout" }, ua = { mouseenter: "mouseover", mouseleave: "mouseout" }, ah = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function _r(s) {
  return ua[s] || gr[s] || s;
}
function yr(s) {
  const t = s.split(mr);
  return [t[0], t.slice(1).sort()];
}
S.trigger = function(s, t) {
  if (ht(s)) {
    const [n, i] = yr(s), r = _r(n);
    if (!r)
      return this;
    const o = ah.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Xt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(mr), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in gr;
  return this.each((n, i) => {
    e && Pe(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function fa(s) {
  return s[po] = s[po] || {};
}
function lh(s, t, e, n, i) {
  const r = fa(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function pa(s, t) {
  return !t || !hr.call(t, (e) => s.indexOf(e) < 0);
}
function xn(s, t, e, n, i) {
  const r = fa(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !pa(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      xn(s, t, e, n, i);
}
S.off = function(s, t, e) {
  if (wt(s))
    this.each((n, i) => {
      !st(i) && !Ne(i) && !Ye(i) || xn(i);
    });
  else if (ht(s))
    Pe(t) && (e = t, t = ""), it(Kn(s), (n, i) => {
      const [r, o] = yr(i), a = _r(r);
      this.each((l, c) => {
        !st(c) && !Ne(c) && !Ye(c) || xn(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
S.remove = function(s) {
  return fe(this, s).detach().off(), this;
};
S.replaceWith = function(s) {
  return this.before(s).remove();
};
S.replaceAll = function(s) {
  return f(s).replaceWith(this), this;
};
function ch(s, t, e, n, i) {
  if (!ht(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return ht(t) || (wt(t) || bs(t) ? t = "" : wt(e) ? (e = t, t = "") : (n = e, e = t, t = "")), Pe(n) || (n = e, e = void 0), n ? (it(Kn(s), (r, o) => {
    const [a, l] = yr(o), c = _r(a), d = a in ua, h = a in gr;
    c && this.each((m, p) => {
      if (!st(p) && !Ne(p) && !Ye(p))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !pa(l, _.namespace.split(mr)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let b = _.target;
          for (; !ra(b, t); )
            if (b === p || (b = b.parentNode, !b))
              return;
          v = b;
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
        i && xn(p, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || f.guid++, lh(p, c, l, t, g);
    });
  }), this) : this;
}
S.on = ch;
function hh(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
S.one = hh;
const dh = /\r?\n/g;
function uh(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(dh, `\r
`))}`;
}
const fh = /file|reset|submit|button|image/i, ma = /radio|checkbox/i;
S.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    it(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || fh.test(i.type) || ma.test(i.type) && !i.checked)
        return;
      const r = aa(i);
      if (!wt(r)) {
        const o = Un(r) ? r : [r];
        it(o, (a, l) => {
          s += uh(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = f;
function ph(s, t) {
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
function mh(s, t, e) {
  try {
    const n = ph(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function at(s, ...t) {
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
var vr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(vr || {});
function gh(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / vr[e]).toFixed(t) + e);
}
const _h = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * vr[n];
};
let br = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ie;
function yh() {
  return br;
}
function vh(s) {
  br = s.toLowerCase();
}
function ga(s, t) {
  ie || (ie = {}), typeof s == "string" && (s = { [s]: t ?? {} }), f.extend(!0, ie, s);
}
function rt(s, t, e, n, i, r) {
  Array.isArray(s) ? ie && s.unshift(ie) : s = ie ? [ie, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || br;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === ie ? `${r}.${t}` : t;
    if (a = mh(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? at(a, ...Array.isArray(e) ? e : [e]) : a;
}
function bh(s, t, e, n) {
  return rt(void 0, s, t, e, n);
}
rt.addLang = ga;
rt.getLang = bh;
rt.getCode = yh;
rt.setCode = vh;
ga({
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
function mo(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function _a(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => _a(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function wh(s, t) {
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
class ya {
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
      success: m,
      error: p,
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let v = n;
    v && (i && (f.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((b, [x, k]) => (_a(b, x, k), b), new FormData()))), _.body = v), o && (_.mode = "cors");
    const y = _.headers || {};
    mo(y, "X-Requested-With", "XMLHttpRequest"), r && mo(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), p && this.fail(p), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n.call(this, ...e);
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
        const d = e || wh(o.headers.get("Content-Type"), n);
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
f.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : f.extend(t, s);
  const e = new ya(t);
  return e.send(), e;
};
f.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), f.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
f.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, f.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
f.post = (s, t, e, n) => f.get(s, t, e, n, "POST");
f.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return f.get(n, t, (r, o, a) => {
    i && (r = f(r).find(i).html()), f(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function Gn(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    f.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    if (o instanceof Promise)
      return await o;
    f.extend(n, o);
  }
  e && f.extend(n, typeof e == "function" ? e(n) : e);
  const i = new ya(n), [r] = await i.send();
  return r;
}
function go(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
f.fetch = Gn;
function he() {
  return f.guid++;
}
function va(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? va(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const $ = (...s) => va(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
f.classes = $;
f.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = f(n);
    s === !0 ? i.attr("class", $(i.attr("class"), ...t)) : i.addClass($(s, ...t));
  });
};
const ls = /* @__PURE__ */ new WeakMap();
function ba(s, t, e) {
  const n = ls.has(s), i = n ? ls.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, f(s).dataset(), i), ls.set(s, i)) : ls.delete(s);
}
function wa(s, t, e) {
  let n = ls.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, f(s).dataset(), n)), t === void 0 ? n : n[t];
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? wa(this[0], t) : this.each((n, i) => ba(i, t, e));
};
f.fn.removeData = function(s = null) {
  return this.each((t, e) => ba(e, s));
};
function _o(s) {
  const t = f(s)[0];
  if (t)
    return Array.from(t.attributes).reduce((e, n) => {
      let { name: i, value: r } = n;
      if (i.startsWith("z-")) {
        i = i.slice(2).replace(/-([a-z])/g, (o) => o[1].toUpperCase());
        try {
          r = JSON.parse(r);
        } catch {
        }
        e[i] = r;
      }
      return e;
    }, {});
}
function yo(s, t) {
  const e = f(s);
  Object.keys(t).forEach((n) => {
    let i = t[n];
    typeof i != "string" && (i = JSON.stringify(i)), n = n.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`), e.attr(`z-${n}`, i);
  });
}
function Ch(...s) {
  var e;
  const t = s.length;
  if (!t)
    return _o(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = _o(this)) == null ? void 0 : e[n] : (f.isPlainObject(n) && yo(this, n), this);
  }
  yo(this, { [s[0]]: s[1] });
}
f.fn.z = Ch;
f.fn._attr = f.fn.attr;
f.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
f.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const kn = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), xh = {};
f.share = xh;
var Yn, q, Ca, ut, be, vo, xa, Si, Be = {}, ka = [], kh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xn = Array.isArray;
function ce(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function $a(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function Wt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Yn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return an(s, o, n, i, null);
}
function an(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ca };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function Y() {
  return { current: null };
}
function Je(s) {
  return s.children;
}
function V(s, t) {
  this.props = s, this.context = t;
}
function ws(s, t) {
  if (t == null)
    return s.__ ? ws(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ws(s) : null;
}
function Sa(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Sa(s);
  }
}
function bo(s) {
  (!s.__d && (s.__d = !0) && be.push(s) && !$n.__r++ || vo !== q.debounceRendering) && ((vo = q.debounceRendering) || xa)($n);
}
function $n() {
  var s, t, e, n, i, r, o, a, l;
  for (be.sort(Si); s = be.shift(); )
    s.__d && (t = be.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = ce({}, o)).__v = o.__v + 1, wr(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? ws(o), o.__h, i), Ma(n, o, i), o.__e != a && Sa(o)), be.length > t && be.sort(Si));
  $n.__r = 0;
}
function Na(s, t, e, n, i, r, o, a, l, c, d) {
  var h, m, p, g, _, v, y, b, x, k = 0, w = n && n.__k || ka, N = w.length, L = N, R = t.length;
  for (e.__k = [], h = 0; h < R; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? an(null, g, null, null, g) : Xn(g) ? an(Je, { children: g }, null, null, null) : g.__b > 0 ? an(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (b = $h(g, w, y = h + k, L)) === -1 ? p = Be : (p = w[b] || Be, w[b] = void 0, L--), wr(s, g, p, i, r, o, a, l, c, d), _ = g.__e, (m = g.ref) && p.ref != m && (p.ref && Cr(p.ref, null, g), d.push(m, g.__c || _, g)), _ != null && (v == null && (v = _), (x = p === Be || p.__v === null) ? b == -1 && k-- : b !== y && (b === y + 1 ? k++ : b > y ? L > R - y ? k += b - y : k-- : k = b < y && b == y - 1 ? b - y : 0), y = h + k, typeof g.type != "function" || b === y && p.__k !== g.__k ? typeof g.type == "function" || b === y && !x ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = Ta(s, _, l) : l = Ea(g, l, s), typeof e.type == "function" && (e.__d = l))) : (p = w[h]) && p.key == null && p.__e && (p.__e == l && (l = ws(p)), Ni(p, p, !1), w[h] = null);
  for (e.__e = v, h = N; h--; )
    w[h] != null && (typeof e.type == "function" && w[h].__e != null && w[h].__e == e.__d && (e.__d = w[h].__e.nextSibling), Ni(w[h], w[h]));
}
function Ea(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? Ea(n, t, e) : Ta(e, n.__e, t));
  return t;
}
function Cs(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Xn(s) ? s.some(function(e) {
    Cs(e, t);
  }) : t.push(s)), t;
}
function Ta(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function $h(s, t, e, n) {
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
function Sh(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Sn(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Sn(s, r, t[r], e[r], n);
}
function wo(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || kh.test(t) ? e : e + "px";
}
function Sn(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || wo(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || wo(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? xo : Co, r) : s.removeEventListener(t, r ? xo : Co, r);
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
function Co(s) {
  return this.l[s.type + !1](q.event ? q.event(s) : s);
}
function xo(s) {
  return this.l[s.type + !0](q.event ? q.event(s) : s);
}
function wr(s, t, e, n, i, r, o, a, l, c) {
  var d, h, m, p, g, _, v, y, b, x, k, w, N, L, R, W = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = q.__b) && d(t);
  t:
    if (typeof W == "function")
      try {
        if (y = t.props, b = (d = W.contextType) && n[d.__c], x = d ? b ? b.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in W && W.prototype.render ? t.__c = h = new W(y, x) : (t.__c = h = new V(y, x), h.constructor = W, h.render = Eh), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = x, h.__n = n, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), W.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = ce({}, h.__s)), ce(h.__s, W.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, h.__v = t, m)
          W.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (W.getDerivedStateFromProps == null && y !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, x), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, x) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), k = 0; k < h._sb.length; k++)
              h.__h.push(h._sb[k]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, x), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, g, _);
          });
        }
        if (h.context = x, h.props = y, h.__P = s, h.__e = !1, w = q.__r, N = 0, "prototype" in W && W.prototype.render) {
          for (h.state = h.__s, h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), L = 0; L < h._sb.length; L++)
            h.__h.push(h._sb[L]);
          h._sb = [];
        } else
          do
            h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++N < 25);
        h.state = h.__s, h.getChildContext != null && (n = ce(ce({}, n), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, g)), Na(s, Xn(R = d != null && d.type === Je && d.key == null ? d.props.children : d) ? R : [R], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (A) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), q.__e(A, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Nh(e.__e, t, e, n, i, r, o, l, c);
  (d = q.diffed) && d(t);
}
function Ma(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Cr(e[n], e[++n], e[++n]);
  q.__c && q.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      q.__e(r, i.__v);
    }
  });
}
function Nh(s, t, e, n, i, r, o, a, l) {
  var c, d, h, m = e.props, p = t.props, g = t.type, _ = 0;
  if (g === "svg" && (i = !0), r != null) {
    for (; _ < r.length; _++)
      if ((c = r[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        s = c, r[_] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), r = null, a = !1;
  }
  if (g === null)
    m === p || a && s.data === p || (s.data = p);
  else {
    if (r = r && Yn.call(s.childNodes), d = (m = e.props || Be).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (m = {}, _ = 0; _ < s.attributes.length; _++)
          m[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Sh(s, p, m, i, a), h)
      t.__k = [];
    else if (Na(s, Xn(_ = t.props.children) ? _ : [_], t, e, n, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && ws(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && $a(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== s.value || g === "progress" && !_ || g === "option" && _ !== m.value) && Sn(s, "value", _, m.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== s.checked && Sn(s, "checked", _, m.checked, !1));
  }
  return s;
}
function Cr(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    q.__e(n, e);
  }
}
function Ni(s, t, e) {
  var n, i;
  if (q.unmount && q.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Cr(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        q.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Ni(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || $a(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Eh(s, t, e) {
  return this.constructor(s, e);
}
function xs(s, t, e) {
  var n, i, r, o;
  q.__ && q.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], wr(t, s = (!n && e || t).__k = Wt(Je, null, [s]), i || Be, Be, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Yn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Ma(r, s, o);
}
Yn = ka.slice, q = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Ca = 0, ut = function(s) {
  return s != null && s.constructor === void 0;
}, V.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof s == "function" && (s = s(ce({}, e), this.props)), s && ce(e, s), s != null && this.__v && (t && this._sb.push(t), bo(this));
}, V.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), bo(this));
}, V.prototype.render = Je, be = [], xa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Si = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, $n.__r = 0;
function H(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Cs(r), ...Cs(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = f.extend(r, i))), s[n] = i);
    });
  }), s;
}
function Ia(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const cs = /* @__PURE__ */ new Map();
function Nn(s) {
  const { zui: t } = window;
  return (!cs.size || s && !cs.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || cs.set(e.toLowerCase(), n);
  }), s ? cs.get(s.toLowerCase()) : void 0;
}
function Th(s, t, e) {
  const n = Nn(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function Qu(s) {
  if (s) {
    const t = Nn(s);
    t && t.defineFn();
  } else
    Nn(), cs.forEach((t) => {
      t.defineFn();
    });
}
f.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = f(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = f.share[n] : delete t.zui, requestAnimationFrame(() => Th(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
f.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = wa(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = Nn(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
f(() => {
  f("body").zuiInit();
});
function Mh(s, t = !0) {
  const e = f(s), n = e[0], i = "zui-disable-scroll";
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
f.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    Mh(e, s);
  });
};
f.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Ih(s) {
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function ko(s) {
  const [t, e = "px"] = Ih(s);
  return `${t}${e}`;
}
function xr(s, t) {
  const e = f(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
    n = { left: 0, top: 0, width: _ || y, height: g || v };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const m = i <= d && i + o >= l;
  return r <= h && r + a >= c && m;
}
f.fn.isVisible = function(s) {
  return xr(this, s);
};
function kr(s, t, e = !1) {
  const n = f(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${he()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    kr(n, r.innerHTML), r.remove();
  });
}
f.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
f.fn.runJS = function(s) {
  return this.each((t, e) => {
    kr(e, s);
  });
};
function Aa(s, t) {
  const e = f(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (xr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
f.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Aa(e, s);
  });
};
f.setLibRoot = function(s) {
  f.libRoot = s;
};
f.registerLib = function(s, t) {
  f.libMap || (f.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), f.libMap[s] = t;
};
f.getLib = function(s, t, e) {
  return new Promise((n, i) => {
    let r = typeof s == "string" ? { src: s } : f.extend({}, s);
    typeof t == "function" ? r.success = t : t && f.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = f.libMap && f.libMap[o];
    a && (r = f.extend({}, a, r), o = a.src || r.src);
    const { root: l = f.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = r, g = f(p ? `#${p}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const w = g.data("loadCalls") || [];
        w.push(m), g.data("loadCalls", w);
      }
      return;
    }
    const { async: _ = !0, defer: v = !1, noModule: y = !1, type: b, integrity: x } = r, k = document.createElement("script");
    k.async = _, k.defer = v, k.noModule = y, b && (k.type = b), x && (k.integrity = x), k.onload = () => {
      m(), (f(k).dataset("loaded", !0).data("loadCalls") || []).forEach((N) => N()), f(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, k.src = o, f("head").append(k);
  });
};
f.getScript = f.getLib;
const tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: xr,
  runJS: kr,
  scrollIntoView: Aa
}, Symbol.toStringTag, { value: "Module" })), Pa = {};
function De(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    De(e, s[e]);
  }) : t && (Pa[s.toLowerCase()] = t);
}
function Ah(s) {
  return Pa[s.toLowerCase()];
}
class Z extends V {
  constructor() {
    super(...arguments), this._gid = he();
  }
  get gid() {
    return this._gid;
  }
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
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
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, ...d } = t, h = Object.keys(d).reduce((m, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(p)) && (m[p] = d[p]), m), {});
    return { ref: o, className: $(this._getClassName(t)) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...h, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? Ah(e) : e) || e;
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
    return r && ([e, i, n] = r), Wt(e, i, n);
  }
}
Z.HElement = !0;
var Ph = 0;
function u(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ph, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return q.vnode && q.vnode(c), c;
}
class Ee extends V {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  _runJS() {
    this.props.executeScript && f(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ u(Z, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Dh(s) {
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
  } = s, h = [e], m = { ...n }, p = [], g = [];
  return i.forEach((_) => {
    const v = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        v.push(...l.call(o, _, p, ...r));
      else {
        const y = _.call(o, p, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(_);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !ut(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ u("div", { className: $(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: $(h),
    style: m,
    ...d
  }, p];
}
function Da({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Dh(t);
  return Wt(s, e, ...n);
}
function Ei(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => Ei({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "object" && (r.html || r.component)) {
    if (r.html)
      return /* @__PURE__ */ u(Ee, { ...H(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = H({ children: o.map((a) => Ei({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ u(Z, { ...H(i, r) });
  }
  return ut(r) || r === null, r;
}
function j(s) {
  const t = Ei(s);
  return t == null || typeof t == "boolean" ? null : ut(t) ? t : /* @__PURE__ */ u(Je, { children: t });
}
const $o = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function J(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (ut(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push($o(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? $o(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ u("i", { className: $(i), ...n });
}
function Lh(s) {
  return this.getChildContext = () => s.context, s.children;
}
function La(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    xs(null, t._temp), t._temp = null, t._container = null;
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
  }), xs(
    Wt(Lh, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Rh(s, t) {
  const e = Wt(La, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
De({
  HElement: Z,
  element: Z,
  HtmlContent: Ee,
  html: Ee,
  CustomContent: j,
  custom: j,
  Icon: J,
  Portal: La
});
function Ra(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Ra(s.parentNode) : !0;
}
class mt {
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
    const l = f(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = he();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Ra(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), o) {
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
    return f(this.element);
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
    return t && f.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = f.Event(t);
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
    return rt(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? rt(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = f(t);
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
    return f(t || document).find(`[${n}]`).each((r, o) => {
      if (e) {
        const l = f(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = f(o).data(this.KEY);
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
  static query(t, e, n) {
    if (t === void 0) {
      let i = this.getAll();
      return n && (i = i.filter(n)), i.sort((r, o) => o.gid - r.gid)[0];
    }
    return this.get(f(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    f.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    f.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = n.get(d);
          if (h ? o && h.render(o) : h = new n(d, o), a) {
            let m = h[a], p = h;
            m === void 0 && (p = h.$, m = p[a]), typeof m == "function" ? l = m.call(p, ...r) : l = m;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
mt.DEFAULT = {};
mt.MULTI_INSTANCE = !1;
class B extends mt {
  constructor() {
    super(...arguments), this.ref = Y();
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
    const { element: e } = this, { Component: n, replace: i } = this.constructor, r = {
      ref: this.ref,
      ...this.setOptions(t)
    };
    if (i && n.HElement) {
      const o = Array.from(e.attributes).reduce((a, l) => {
        const { name: c, value: d } = l;
        return a[c === "class" ? "className" : c] = d, a;
      }, {});
      return xs(
        Wt(n, H({ component: e.tagName.toLowerCase(), attrs: o }, r)),
        e.parentElement,
        e
      );
    }
    xs(
      Wt(n, r),
      e
    );
  }
}
B.replace = !1;
class lt extends Z {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ u(J, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ u(J, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ u("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ u(J, { icon: l }),
      e ? null : c ? /* @__PURE__ */ u("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: d } = t;
    return ["btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof d == "string" ? d : { rounded: d }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: r,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = $([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: lt
}, Symbol.toStringTag, { value: "Module" }));
De(zh);
let Ct = class extends Z {
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
  _getItemFromEvent(t) {
    var a;
    const e = t.target.closest("[z-item]");
    if (!e || !((a = e.parentElement) != null && a.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const n = +e.getAttribute("z-item"), i = this._items[n];
    if (!i)
      return;
    const r = this.getKey(n);
    if (r === void 0)
      return;
    const o = this._renderedItems[n];
    return { index: n, item: i, element: e, event: t, key: r, renderedItem: o };
  }
  _handleClick(t) {
    const { onClickItem: e } = this.props;
    if (!e)
      return;
    const n = this._getItemFromEvent(t);
    n && e.call(this, n);
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
        return /* @__PURE__ */ u(j, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || Z;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = H({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ u(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: m = {} } = this.constructor;
    if (e = H(
      { type: l },
      h,
      m[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _index: n,
        key: String((a ? e[a] : e.key) ?? n)
      }
    ), o) {
      const p = o.call(this, e, n);
      if (p !== void 0)
        return p;
    }
    return e;
  }
  _getProps(t) {
    const e = super._getProps(t);
    return t.onClickItem ? { onClick: this._handleClick, ...e } : e;
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
    const n = [];
    return this._renderedItems = e.map((i, r) => {
      const o = this._getItem(t, i, r);
      return o && n.push(this._renderItem(t, o, r)), o || void 0;
    }), n;
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
Ct.NAME = "";
Ct.ITEM_NAME = "item";
Ct.TAG = "ul";
Ct.ItemComponents = {
  default: Z,
  divider: [Z, { className: "divider" }],
  space: [Z, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
Ct.defaultItemProps = {
  component: "li"
};
Ct.defaultItemPropsMap = {};
Ct.defaultItemType = "item";
const Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: Ct
}, Symbol.toStringTag, { value: "Module" }));
class $r extends B {
}
$r.NAME = "CommonList";
$r.Component = Ct;
$r.replace = !0;
De(Wh);
function Oh(s) {
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
function Hh(s) {
  const [t, e, n] = typeof s == "string" ? Oh(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function So(s, t) {
  return Hh(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function No(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function Bh(s, t, e) {
  s = s % 360 / 360, t = No(t), e = No(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function za(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function Fh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let Hs = class extends V {
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
      src: m,
      hueDistance: p = 43,
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: v,
      ...y
    } = this.props, b = ["avatar", t], x = { ...e, background: o, color: a };
    let k = 32;
    n && (typeof n == "number" ? (x.width = `${n}px`, x.height = `${n}px`, x.fontSize = `${Math.max(12, Math.round(n / 2))}px`, k = n) : (b.push(`size-${n}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? x.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let w;
    if (m)
      b.push("has-img"), w = /* @__PURE__ */ u("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      b.push("has-icon"), w = /* @__PURE__ */ u(J, { icon: l });
    else if (c != null && c.length) {
      const N = Fh(c, h);
      if (b.push("has-text", `has-text-${N.length}`), o)
        !a && o && (x.color = So(o));
      else {
        const R = d ?? c, W = (typeof R == "number" ? R : za(R)) * p % 360;
        if (x.background = `hsl(${W},${g * 100}%,${_ * 100}%)`, !a) {
          const A = Bh(W, g, _);
          x.color = So(A);
        }
      }
      let L;
      k && k < 14 * N.length && (L = { transform: `scale(${k / (14 * N.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ u("div", { "data-actualSize": k, className: "avatar-text", style: L, children: N });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        className: $(b),
        style: x,
        ...y,
        children: [
          w,
          v
        ]
      }
    );
  }
};
const Vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Hs
}, Symbol.toStringTag, { value: "Module" }));
let Pt = class extends Ct {
  _isBtnType(t) {
    return t.type === "item" || t.type === "dropdown";
  }
  _getItem(t, e, n) {
    !e.type && (e.dropdown || e.items) && (e = f.extend({ type: "dropdown" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = H({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = H({}, e, Ia({ btnType: n, size: i }));
  }
};
Pt.NAME = "btn-group";
Pt.TAG = "nav";
Pt.ItemComponents = {
  ...Ct.ItemComponents,
  default: lt
};
Pt.defaultItemProps = {
  component: void 0
};
const Zn = class Wa extends Pt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = $(n.className, `gap-${e}`) : n.style = f.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && ((i.type === "btn-group" || i.type === "btnGroup") && (i.btnProps = H({}, this._shareBtnProps, i.btnProps)), i);
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = H(n, r)), /* @__PURE__ */ u(Wa, { ...r });
  }
};
Zn.NAME = "toolbar";
Zn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Zn.ItemComponents = {
  ...Pt.ItemComponents,
  btnGroup: Pt,
  "btn-group": Pt
};
let ft = Zn;
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: ft
}, Symbol.toStringTag, { value: "Module" }));
class Jn extends Z {
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
      e ? /* @__PURE__ */ u(
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
      /* @__PURE__ */ u("label", { htmlFor: r, children: /* @__PURE__ */ u(j, { content: o }) }, "label")
    ];
  }
}
class jh extends Jn {
}
jh.defaultProps = {
  type: "radio"
};
class Kh extends Jn {
}
Kh.defaultProps = {
  type: "switch"
};
class En extends Z {
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
    if (i && d.push(/* @__PURE__ */ u(j, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ u(Jn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ u(J, { className: "item-icon", icon: e }, "icon")), n) {
      const m = typeof n == "function" ? n.call(this, t) : n;
      m && (m.className = $("item-avatar", m.className), d.push(/* @__PURE__ */ u(Hs, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ u(j, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ u("div", { className: $("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t) {
    const {
      textClass: e,
      titleClass: n,
      subtitle: i,
      subtitleClass: r,
      url: o,
      actions: a,
      target: l,
      content: c,
      contentClass: d
    } = t, h = o && a, m = h ? "a" : "div";
    let { title: p, text: g } = t;
    return p === void 0 && (p = g, g = null), [
      /* @__PURE__ */ u("div", { className: $("item-content", d), children: [
        p ? /* @__PURE__ */ u(m, { className: $("item-title", n), href: h ? o : void 0, target: h ? l : void 0, children: /* @__PURE__ */ u(j, { content: p }) }, "title") : null,
        i ? /* @__PURE__ */ u("div", { className: $("item-subtitle", r), children: /* @__PURE__ */ u(j, { content: i }) }, "subtitle") : null,
        g ? /* @__PURE__ */ u("div", { className: $("item-text text", e), children: g }, "text") : null,
        c ? /* @__PURE__ */ u(j, { content: c }, "extraContent") : null
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
    if (r && a.push(/* @__PURE__ */ u(J, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o) {
      let c = typeof o == "function" ? o.call(this, t) : o;
      Array.isArray(c) && (c = {
        items: c
      }), a.push(
        /* @__PURE__ */ u(ft, { size: "sm", ...c }, "actions")
      );
    }
    const l = n ? /* @__PURE__ */ u(j, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ u("div", { className: $("item-trailing", i), children: [
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
      disabled: d,
      divider: h,
      checked: m,
      multiline: p,
      title: g,
      subtitle: _,
      hover: v
    } = t, y = n || (o && !a ? "a" : "div"), b = y === "a", x = H({
      key: "item",
      className: $("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": v,
        checked: m,
        multiline: p ?? !!(g && _),
        state: b
      }),
      href: b ? o : void 0,
      target: b ? l : void 0
    }, e, r);
    return /* @__PURE__ */ u(y, { ...x, children: [
      this._renderLeading(t),
      this._renderContent(t),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Cs(n)]];
  }
}
let me = class extends Ct {
  constructor(t) {
    super(t), this.state = {};
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  load() {
    const { items: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      const i = { loading: !1 };
      try {
        const r = await Gn(t, [this], { throws: !0 });
        i.items = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    t || !e || Array.isArray(e) || e === this._loadedSetting || this.load();
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: n } = this.state;
    return n || (Array.isArray(e) ? e : []);
  }
  _getItem(t, e, n) {
    let i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { divider: r, hover: o, multiline: a } = t;
    i = H({}, Ia({
      divider: r,
      hover: o,
      multiline: a
    }), i);
    const { itemName: l, name: c } = this;
    if (i.innerClass = [l ? `${l}-inner${c ? ` ${c}-${i.type}-inner` : ""}` : "", i.innerClass], i.type === "item") {
      const { checkbox: d } = t;
      d && (i.checked === void 0 && (i.checked = !1), typeof d == "object" && (i.checkbox = i.checkbox ? f.extend({}, d, i.checkbox) : d));
    }
    return i.icon && (this._hasIcons = !0), i.checked !== void 0 && (this._hasCheckbox = !0), i;
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      onClick: this._handleClick,
      className: $(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
};
me.ItemComponents = {
  ...Ct.ItemComponents,
  default: Z,
  item: En,
  heading: En
};
me.NAME = "list";
let Qe = class extends me {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0, this.state.nestedShow = t.defaultNestedShow ?? {}, this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e, n) {
    const { nestedShow: i } = this, r = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return !!(typeof i == "object" ? i[r] ?? n : i);
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
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return H(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : void 0,
      beforeRenderItem: this._beforeRenderNestedItem
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ u(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ u("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ u("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ u(J, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ u("span", { className: $(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key;
    if (i.items) {
      const a = i.expanded ?? this.isExpanded(o, r);
      H(i, {
        expanded: a,
        className: ["is-nested", `is-nested-${a ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return H(i, {
      _keyPath: `${r !== void 0 ? `${r}:` : ""}${o}`,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t) {
    return this._itemsMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, n) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = H(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this.isRoot && this._itemsMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return (t.type === "mouseenter" || t.type === "mouseleave") && (e.hover = t.type === "mouseenter"), { ...e, parentKey: this.props.parentKey };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, key: r, parentKey: o } = t, { nestedTrigger: a, nestedToggle: l } = this.props, c = i.target;
    if (!e.items || i.defaultPrevented || a === "hover" && n === void 0 || a === "click" && i.type !== "click" || c.closest(".not-nested-toggle") || l && !c.closest(l) || !l && c.closest("a,.btn,.item-checkbox") && !c.closest(".nested-toggle-icon,.item-icon"))
      return;
    const d = typeof n == "boolean" ? n : void 0;
    this.toggle(`${o !== void 0 ? `${o}:` : ""}${r}`, d);
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
    var n;
    const e = this._getItemFromEvent(t);
    e && ((n = this.props.onHoverItem) == null || n.call(this, e), !this._controlled && this.props.nestedTrigger === "hover" && this._toggleFromEvent(e));
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = H(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = $(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
Qe.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Qe.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class Oa extends B {
}
Oa.NAME = "List";
Oa.Component = me;
class Ha extends B {
}
Ha.NAME = "NestedList";
Ha.Component = Qe;
let pt = class extends Qe {
  _getClassName(t) {
    return $(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
pt.NAME = "menu";
pt.TAG = "menu";
pt.inheritNestedProps = [...Qe.inheritNestedProps, "compact"];
pt.ItemComponents = {
  ...Qe.ItemComponents,
  item: [En, { innerComponent: "a" }]
};
var Ba = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, es = (s, t, e) => (Ba(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Js = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Eo = (s, t, e) => (Ba(s, t, "access private method"), e), Ti, ln, cn, hn, Mi;
let Sr = class extends V {
  constructor(t) {
    super(t), Js(this, hn), this._input = Y(), this._timer = 0, Js(this, Ti, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Js(this, ln, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (Eo(this, hn, Mi).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), Js(this, cn, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${he()}`;
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
  componentWillUnmount() {
    Eo(this, hn, Mi).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p, value: g } = t, { focus: _, value: v } = e, { id: y } = this, b = g ?? v, x = typeof b != "string" || !b.trim().length;
    let k, w, N;
    return m && (N = m === !0 ? /* @__PURE__ */ u("span", { class: "magnifier" }) : /* @__PURE__ */ u(J, { icon: m })), !h && m && (k = /* @__PURE__ */ u("label", { for: y, class: "input-control-prefix", children: N }, "prefix")), p && !x ? w = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: es(this, Ti),
        children: p === !0 ? /* @__PURE__ */ u("span", { class: "close" }) : /* @__PURE__ */ u(J, { icon: p })
      }
    ) : h && m && (w = N), w && (w = /* @__PURE__ */ u("label", { for: y, class: "input-control-suffix", children: w }, "suffix")), /* @__PURE__ */ u("div", { class: $("search-box input-control", r, { focus: _, empty: x, "has-prefix-icon": k, "has-suffix-icon": w }), style: o, children: [
      k,
      /* @__PURE__ */ u(
        "input",
        {
          ref: this._input,
          id: y,
          type: "text",
          class: $("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: b,
          onInput: es(this, ln),
          onChange: es(this, ln),
          onFocus: es(this, cn),
          onBlur: es(this, cn)
        }
      ),
      w
    ] });
  }
};
Ti = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
cn = /* @__PURE__ */ new WeakMap();
hn = /* @__PURE__ */ new WeakSet();
Mi = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
Sr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Bt = class extends pt {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const n = this.constructor.getSearchKeys(e);
      this._searchKeys = n, this.setState({ search: n.join(" ") });
    }, this._searchControlled = t.search !== void 0, this.state.search = this._searchControlled ? t.search : t.defaultSearch, this._searchKeys = this.constructor.getSearchKeys(this.state.search), this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
  }
  componentWillUpdate(t) {
    this.isRoot && (this._searchControlled = t.search !== void 0, this._searchControlled && t.search !== this.props.search && (this._searchKeys = this.constructor.getSearchKeys(t.search)));
  }
  componentDidMount() {
    super.componentDidMount(), this._updateMatchedParents();
  }
  componentDidUpdate() {
    super.componentDidUpdate(), this._updateMatchedParents();
  }
  isExpanded(t, e, n) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t, e, n);
  }
  _updateMatchedParents() {
    this.isRoot && f(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
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
    return i && (i.hidden = !this._isItemMatch(t, e, n, t.parentKey), i);
  }
  _renderItem(t, e, n) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, n);
  }
  _getChildren(t) {
    let e = super._getChildren(t);
    const { searchBox: n } = t;
    if (!n)
      return e;
    e = Cs(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && f.extend(i, n), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ u(Sr, { ...i }, "search")), e;
  }
  _getClassName(t) {
    const e = this.isRoot && this._searchKeys.length;
    return [super._getClassName(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : ""];
  }
  _beforeRender(t) {
    return this.isRoot && (this._matchedParents = /* @__PURE__ */ new Set()), super._beforeRender(t);
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
    return f.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, n = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((d, h) => {
        h && (o.push(/* @__PURE__ */ u("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Bt.inheritNestedProps = [...pt.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Bt.defaultProps = {
  ...pt.defaultProps,
  defaultNestedShow: !0
};
class Fa extends B {
}
Fa.NAME = "Menu";
Fa.Component = pt;
class Va extends B {
}
Va.NAME = "SearchMenu";
Va.Component = Bt;
function qh({
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
  let m;
  a === !0 ? m = /* @__PURE__ */ u(lt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ u("span", { class: "close" }) }) : ut(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ u(lt, { ...a, onClick: l }));
  const p = ut(e) ? e : e ? /* @__PURE__ */ u(ft, { ...e }) : null;
  return /* @__PURE__ */ u("div", { className: $("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ u(J, { icon: c, className: $("alert-icon", d) }),
    ut(i) ? i : /* @__PURE__ */ u("div", { className: $("alert-content", r), children: [
      ut(n) ? n : n && /* @__PURE__ */ u("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ u("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    m,
    o
  ] });
}
function Gh(s) {
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
function Yh({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ u(
    qh,
    {
      className: $("messager", r, t, n === !0 ? Gh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Xh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Zh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ss = (s, t, e) => (Xh(s, t, "access private method"), e), ye, We;
class Nr extends B {
  constructor() {
    super(...arguments), Zh(this, ye), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      f(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), ss(this, ye, We).call(this, () => {
      this._show = !0, this.render(), ss(this, ye, We).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && ss(this, ye, We).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && ss(this, ye, We).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), ss(this, ye, We).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ye = /* @__PURE__ */ new WeakSet();
We = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
Nr.NAME = "MessagerItem";
Nr.Component = Yh;
var Er = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ke = (s, t, e) => (Er(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Qs = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, dn = (s, t, e, n) => (Er(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ua = (s, t, e) => (Er(s, t, "access private method"), e), Fe, qt, Ii, ja, Tr, Ka;
const Qn = class qa extends mt {
  constructor() {
    super(...arguments), Qs(this, Ii), Qs(this, Tr), Qs(this, Fe, void 0), Qs(this, qt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ke(this, qt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Ua(this, Ii, ja).call(this).show();
  }
  hide() {
    var t;
    (t = ke(this, qt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = qa.ensure(e || "body", { key: `messager_${he()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Fe = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakSet();
ja = function() {
  if (ke(this, qt))
    ke(this, qt).setOptions(this.options);
  else {
    const s = Ua(this, Tr, Ka).call(this), t = new Nr(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), dn(this, Fe, void 0), dn(this, qt, void 0);
    }), dn(this, qt, t);
  }
  return ke(this, qt);
};
Tr = /* @__PURE__ */ new WeakSet();
Ka = function() {
  if (ke(this, Fe))
    return ke(this, Fe);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = f(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), dn(this, Fe, e[0])), e[0];
};
Qn.NAME = "messager";
Qn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Qn.MULTI_INSTANCE = !0;
let hf = Qn;
let Mr = class extends V {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = n / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = n * p);
    const g = (n - p) / 2;
    return /* @__PURE__ */ u("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ u("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ u("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ u("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
Mr.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Ga extends B {
}
Ga.NAME = "ProgressCircle";
Ga.Component = Mr;
const ns = '[droppable="true"]';
class ti extends mt {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = f(t.target), o = r.closest(e), a = o[0];
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
      l && (this.$element.find(l).removeClass(l), f(e).addClass(l));
      const h = typeof o == "function" ? f(o.call(this, e)) : r.find(o || a || ns);
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(ns).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
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
      const { dragElement: e } = this, n = f(t.target).closest(ns)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), f(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = f(t.target).filter(ns)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = f(t.target).closest(ns)[0];
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
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), f(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), f(document).off(this.namespace), super.destroy();
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
    n && f(e).removeClass(n), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: n, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = f(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), n && o.removeClass(n), this._$targets = void 0);
  }
}
ti.NAME = "Draggable";
ti.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Jh = '[moveable="true"]';
class Ir extends mt {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = f(t.target), a = n === "self" ? this.$element : o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), f(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
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
    this._clean(), f(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var l;
    t.preventDefault();
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = f(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        n.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        n.strategy = this.options.move || "none";
      const d = c.position();
      n = f.extend(n, {
        target: e,
        startX: n.x,
        startY: n.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: d.left,
        startTop: d.top,
        left: d.left,
        top: d.top,
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      });
    } else if (i) {
      const c = n.x - i.startX, d = n.y - i.startY;
      n = f.extend({}, i, n, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = n;
    const { strategy: r, target: o } = n, a = f(o);
    r === "position" ? a.css({ left: n.left, top: n.top }) : r === "transform" ? a.css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`) : r === "scroll" && (o.scrollLeft = n.scrollLeft - n.deltaX, o.scrollTop = n.scrollTop - n.deltaY), (l = this.options.onChange) == null || l.call(this, n, i, t);
  }
  _clean() {
    f(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: n } = this;
    if (n) {
      const i = f(n);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
Ir.NAME = "Moveable";
Ir.DEFAULT = {
  selector: Jh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const Ar = class Ya extends mt {
  async afterInit() {
    const t = await Ya.loadModule();
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
    return this.Module || (this.Module = await f.getLib("sortablejs")), this.Module;
  }
};
Ar.NAME = "Sortable";
Ar.DEFAULT = {
  animation: 150
};
let uf = Ar;
f.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
var xt = typeof window < "u" ? window : null, Pr = xt === null, ks = Pr ? void 0 : xt.document, Nt = "addEventListener", Et = "removeEventListener", pi = "getBoundingClientRect", is = "_a", Tt = "_b", Ft = "_c", tn = "horizontal", Mt = function() {
  return !1;
}, Qh = Pr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(s) {
  var t = ks.createElement("div");
  return t.style.cssText = "width:" + s + "calc(9px)", !!t.style.length;
}).shift() + "calc", Xa = function(s) {
  return typeof s == "string" || s instanceof String;
}, To = function(s) {
  if (Xa(s)) {
    var t = ks.querySelector(s);
    if (!t)
      throw new Error("Selector " + s + " did not match a DOM element");
    return t;
  }
  return s;
}, ot = function(s, t, e) {
  var n = s[t];
  return n !== void 0 ? n : e;
}, en = function(s, t, e, n) {
  if (t) {
    if (n === "end")
      return 0;
    if (n === "center")
      return s / 2;
  } else if (e) {
    if (n === "start")
      return 0;
    if (n === "center")
      return s / 2;
  }
  return s;
}, td = function(s, t) {
  var e = ks.createElement("div");
  return e.className = "gutter gutter-" + t, e;
}, ed = function(s, t, e) {
  var n = {};
  return Xa(t) ? n[s] = t : n[s] = Qh + "(" + t + "% - " + e + "px)", n;
}, sd = function(s, t) {
  var e;
  return e = {}, e[s] = t + "px", e;
}, Za = function(s, t) {
  if (t === void 0 && (t = {}), Pr)
    return {};
  var e = s, n, i, r, o, a, l;
  Array.from && (e = Array.from(e));
  var c = To(e[0]), d = c.parentNode, h = getComputedStyle ? getComputedStyle(d) : null, m = h ? h.flexDirection : null, p = ot(t, "sizes") || e.map(function() {
    return 100 / e.length;
  }), g = ot(t, "minSize", 100), _ = Array.isArray(g) ? g : e.map(function() {
    return g;
  }), v = ot(t, "maxSize", 1 / 0), y = Array.isArray(v) ? v : e.map(function() {
    return v;
  }), b = ot(t, "expandToMin", !1), x = ot(t, "gutterSize", 10), k = ot(t, "gutterAlign", "center"), w = ot(t, "snapOffset", 30), N = Array.isArray(w) ? w : e.map(function() {
    return w;
  }), L = ot(t, "dragInterval", 1), R = ot(t, "direction", tn), W = ot(
    t,
    "cursor",
    R === tn ? "col-resize" : "row-resize"
  ), A = ot(t, "gutter", td), z = ot(
    t,
    "elementStyle",
    ed
  ), G = ot(t, "gutterStyle", sd);
  R === tn ? (n = "width", i = "clientX", r = "left", o = "right", a = "clientWidth") : R === "vertical" && (n = "height", i = "clientY", r = "top", o = "bottom", a = "clientHeight");
  function T(M, C, E, P) {
    var nt = z(n, C, E, P);
    Object.keys(nt).forEach(function(X) {
      M.style[X] = nt[X];
    });
  }
  function K(M, C, E) {
    var P = G(n, C, E);
    Object.keys(P).forEach(function(nt) {
      M.style[nt] = P[nt];
    });
  }
  function tt() {
    return l.map(function(M) {
      return M.size;
    });
  }
  function _t(M) {
    return "touches" in M ? M.touches[0][i] : M[i];
  }
  function Ys(M) {
    var C = l[this.a], E = l[this.b], P = C.size + E.size;
    C.size = M / this.size * P, E.size = P - M / this.size * P, T(C.element, C.size, this[Tt], C.i), T(E.element, E.size, this[Ft], E.i);
  }
  function wc(M) {
    var C, E = l[this.a], P = l[this.b];
    this.dragging && (C = _t(M) - this.start + (this[Tt] - this.dragOffset), L > 1 && (C = Math.round(C / L) * L), C <= E.minSize + E.snapOffset + this[Tt] ? C = E.minSize + this[Tt] : C >= this.size - (P.minSize + P.snapOffset + this[Ft]) && (C = this.size - (P.minSize + this[Ft])), C >= E.maxSize - E.snapOffset + this[Tt] ? C = E.maxSize + this[Tt] : C <= this.size - (P.maxSize - P.snapOffset + this[Ft]) && (C = this.size - (P.maxSize + this[Ft])), Ys.call(this, C), ot(t, "onDrag", Mt)(tt()));
  }
  function io() {
    var M = l[this.a].element, C = l[this.b].element, E = M[pi](), P = C[pi]();
    this.size = E[n] + P[n] + this[Tt] + this[Ft], this.start = E[r], this.end = E[o];
  }
  function Cc(M) {
    if (!getComputedStyle)
      return null;
    var C = getComputedStyle(M);
    if (!C)
      return null;
    var E = M[a];
    return E === 0 ? null : (R === tn ? E -= parseFloat(C.paddingLeft) + parseFloat(C.paddingRight) : E -= parseFloat(C.paddingTop) + parseFloat(C.paddingBottom), E);
  }
  function ro(M) {
    var C = Cc(d);
    if (C === null || _.reduce(function(X, yt) {
      return X + yt;
    }, 0) > C)
      return M;
    var E = 0, P = [], nt = M.map(function(X, yt) {
      var _e = C * X / 100, Xs = en(
        x,
        yt === 0,
        yt === M.length - 1,
        k
      ), Zs = _[yt] + Xs;
      return _e < Zs ? (E += Zs - _e, P.push(0), Zs) : (P.push(_e - Zs), _e);
    });
    return E === 0 ? M : nt.map(function(X, yt) {
      var _e = X;
      if (E > 0 && P[yt] - E > 0) {
        var Xs = Math.min(
          E,
          P[yt] - E
        );
        E -= Xs, _e = X - Xs;
      }
      return _e / C * 100;
    });
  }
  function xc() {
    var M = this, C = l[M.a].element, E = l[M.b].element;
    M.dragging && ot(t, "onDragEnd", Mt)(tt()), M.dragging = !1, xt[Et]("mouseup", M.stop), xt[Et]("touchend", M.stop), xt[Et]("touchcancel", M.stop), xt[Et]("mousemove", M.move), xt[Et]("touchmove", M.move), M.stop = null, M.move = null, C[Et]("selectstart", Mt), C[Et]("dragstart", Mt), E[Et]("selectstart", Mt), E[Et]("dragstart", Mt), C.style.userSelect = "", C.style.webkitUserSelect = "", C.style.MozUserSelect = "", C.style.pointerEvents = "", E.style.userSelect = "", E.style.webkitUserSelect = "", E.style.MozUserSelect = "", E.style.pointerEvents = "", M.gutter.style.cursor = "", M.parent.style.cursor = "", ks.body.style.cursor = "";
  }
  function kc(M) {
    if (!("button" in M && M.button !== 0)) {
      var C = this, E = l[C.a].element, P = l[C.b].element;
      C.dragging || ot(t, "onDragStart", Mt)(tt()), M.preventDefault(), C.dragging = !0, C.move = wc.bind(C), C.stop = xc.bind(C), xt[Nt]("mouseup", C.stop), xt[Nt]("touchend", C.stop), xt[Nt]("touchcancel", C.stop), xt[Nt]("mousemove", C.move), xt[Nt]("touchmove", C.move), E[Nt]("selectstart", Mt), E[Nt]("dragstart", Mt), P[Nt]("selectstart", Mt), P[Nt]("dragstart", Mt), E.style.userSelect = "none", E.style.webkitUserSelect = "none", E.style.MozUserSelect = "none", E.style.pointerEvents = "none", P.style.userSelect = "none", P.style.webkitUserSelect = "none", P.style.MozUserSelect = "none", P.style.pointerEvents = "none", C.gutter.style.cursor = W, C.parent.style.cursor = W, ks.body.style.cursor = W, io.call(C), C.dragOffset = _t(M) - C.end;
    }
  }
  p = ro(p);
  var ge = [];
  l = e.map(function(M, C) {
    var E = {
      element: To(M),
      size: p[C],
      minSize: _[C],
      maxSize: y[C],
      snapOffset: N[C],
      i: C
    }, P;
    if (C > 0 && (P = {
      a: C - 1,
      b: C,
      dragging: !1,
      direction: R,
      parent: d
    }, P[Tt] = en(
      x,
      C - 1 === 0,
      !1,
      k
    ), P[Ft] = en(
      x,
      !1,
      C === e.length - 1,
      k
    ), m === "row-reverse" || m === "column-reverse")) {
      var nt = P.a;
      P.a = P.b, P.b = nt;
    }
    if (C > 0) {
      var X = A(C, R, E.element);
      K(X, x, C), P[is] = kc.bind(P), X[Nt](
        "mousedown",
        P[is]
      ), X[Nt](
        "touchstart",
        P[is]
      ), d.insertBefore(X, E.element), P.gutter = X;
    }
    return T(
      E.element,
      E.size,
      en(
        x,
        C === 0,
        C === e.length - 1,
        k
      ),
      C
    ), C > 0 && ge.push(P), E;
  });
  function oo(M) {
    var C = M.i === ge.length, E = C ? ge[M.i - 1] : ge[M.i];
    io.call(E);
    var P = C ? E.size - M.minSize - E[Ft] : M.minSize + E[Tt];
    Ys.call(E, P);
  }
  l.forEach(function(M) {
    var C = M.element[pi]()[n];
    C < M.minSize && (b ? oo(M) : M.minSize = C);
  });
  function $c(M) {
    var C = ro(M);
    C.forEach(function(E, P) {
      if (P > 0) {
        var nt = ge[P - 1], X = l[nt.a], yt = l[nt.b];
        X.size = C[P - 1], yt.size = E, T(X.element, X.size, nt[Tt], X.i), T(yt.element, yt.size, nt[Ft], yt.i);
      }
    });
  }
  function Sc(M, C) {
    ge.forEach(function(E) {
      if (C !== !0 ? E.parent.removeChild(E.gutter) : (E.gutter[Et](
        "mousedown",
        E[is]
      ), E.gutter[Et](
        "touchstart",
        E[is]
      )), M !== !0) {
        var P = z(
          n,
          E.a.size,
          E[Tt]
        );
        Object.keys(P).forEach(function(nt) {
          l[E.a].element.style[nt] = "", l[E.b].element.style[nt] = "";
        });
      }
    });
  }
  return {
    setSizes: $c,
    getSizes: tt,
    collapse: function(C) {
      oo(l[C]);
    },
    destroy: Sc,
    parent: d,
    pairs: ge
  };
};
class nd extends mt {
  // setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
  // It updates the sizes of the elements in the split.
  /**
   * setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
   * It updates the sizes of the elements in the split.
   *
   * @param sizes Sizes of the elements in the split.
   */
  setSizes(t) {
    return this._split.setSizes(t);
  }
  /**
   * getSizes returns an array of percents, suitable for using with setSizes or creation.
   *
   * @returns An array of percents, suitable for using with setSizes or creation.
   */
  getSizes() {
    return this._split.getSizes();
  }
  /**
   * collapse changes the size of element at index to 0.
   * Every element except the last is collapsed towards the front (left or top).
   * The last is collapsed towards the back.
   *
   * @param index Index of the element to collapse.
   */
  collapse(t) {
    return this._split.collapse(t);
  }
  /**
   * Destroy the instance. It removes the gutter elements, and the size CSS styles Split.js set.
   *
   * @param preserveStyles   Whether to preserve styles.
   * @param preserveGutters  Whether to preserve gutters.
   */
  destroy(t, e) {
    return super.destroy(), this._split.destroy(t, e);
  }
  afterInit() {
    const { elements: t = ".split-cell", ...e } = this.options, n = (Array.isArray(t) ? t : [t]).reduce((i, r) => (r && (r instanceof HTMLElement ? i.push(r) : (typeof r == "string" ? this.$element.children(r) : f(r)).each((o, a) => {
      i.push(a);
    })), i), []);
    this._split = Za(n, e);
  }
}
nd.SplitJS = Za;
let Ja = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const mi = "```ZUI_STR\n";
var Ms, Ce, Ue, Dt, je, Ke, un;
const no = class no {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    F(this, Ke);
    F(this, Ms, void 0);
    F(this, Ce, void 0);
    F(this, Ue, void 0);
    F(this, Dt, void 0);
    F(this, je, void 0);
    U(this, Ms, e), U(this, Ue, t ?? Ja()), U(this, Ce, `ZUI_STORE:${D(this, Ue)}`), U(this, Dt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return D(this, Ms);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (D(this, je) || U(this, je, new no(D(this, Ue), "session")), D(this, je));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = D(this, Dt).getItem(Le(this, Ke, un).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(mi))
        return n.substring(mi.length);
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
    D(this, Dt).setItem(Le(this, Ke, un).call(this, t), typeof e == "string" ? `${mi}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    D(this, Dt).removeItem(Le(this, Ke, un).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < D(this, Dt).length; e++) {
      const n = D(this, Dt).key(e);
      if (n != null && n.startsWith(D(this, Ce))) {
        const i = D(this, Dt).getItem(n);
        typeof i == "string" && t(n.substring(D(this, Ce).length + 1), JSON.parse(i));
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
Ms = new WeakMap(), Ce = new WeakMap(), Ue = new WeakMap(), Dt = new WeakMap(), je = new WeakMap(), Ke = new WeakSet(), un = function(t) {
  return `${D(this, Ce)}:${t}`;
};
let Tn = no;
const hs = new Tn("DEFAULT");
function id(s, t = "local") {
  return new Tn(s, t);
}
Object.assign(hs, { create: id });
class Qa extends B {
}
Qa.NAME = "Avatar";
Qa.Component = Hs;
De(Vh);
class tl extends B {
}
tl.NAME = "BtnGroup";
tl.Component = Pt;
const rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Pt
}, Symbol.toStringTag, { value: "Module" }));
De(rd);
const Ai = Symbol("EVENT_PICK");
class Dr extends V {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!f(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = f(t.target), a = i == null ? void 0 : i(t);
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
    return $(
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
        f(`#${i}`).val(n);
      else
        return /* @__PURE__ */ u("input", { id: i, type: "hidden", className: "pick-value", name: e, value: n });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    f(`#${t}`).on(`change.zui.pick.${t}`, (n, i) => {
      if (i === Ai)
        return;
      const r = n.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && f(`#${e}`).trigger("change", Ai), this._skipTriggerChange = !1);
  }
  render(t) {
    return Wt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Xe = Math.min, $e = Math.max, Mn = Math.round, sn = Math.floor, de = (s) => ({
  x: s,
  y: s
}), od = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ad = {
  start: "end",
  end: "start"
};
function Pi(s, t, e) {
  return $e(s, Xe(t, e));
}
function Bs(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Te(s) {
  return s.split("-")[0];
}
function Fs(s) {
  return s.split("-")[1];
}
function el(s) {
  return s === "x" ? "y" : "x";
}
function Lr(s) {
  return s === "y" ? "height" : "width";
}
function ei(s) {
  return ["top", "bottom"].includes(Te(s)) ? "y" : "x";
}
function Rr(s) {
  return el(ei(s));
}
function ld(s, t, e) {
  e === void 0 && (e = !1);
  const n = Fs(s), i = Rr(s), r = Lr(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = In(o)), [o, In(o)];
}
function cd(s) {
  const t = In(s);
  return [Di(s), t, Di(t)];
}
function Di(s) {
  return s.replace(/start|end/g, (t) => ad[t]);
}
function hd(s, t, e) {
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
function dd(s, t, e, n) {
  const i = Fs(s);
  let r = hd(Te(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Di)))), r;
}
function In(s) {
  return s.replace(/left|right|bottom|top/g, (t) => od[t]);
}
function ud(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function sl(s) {
  return typeof s != "number" ? ud(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function An(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function Mo(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = ei(t), o = Rr(t), a = Lr(o), l = Te(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, m = n[a] / 2 - i[a] / 2;
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
  switch (Fs(t)) {
    case "start":
      p[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const fd = async (s, t, e) => {
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
  } = Mo(c, n, l), m = n, p = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: b,
      y: x,
      data: k,
      reset: w
    } = await y({
      x: d,
      y: h,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = b ?? d, h = x ?? h, p = {
      ...p,
      [v]: {
        ...p[v],
        ...k
      }
    }, w && g <= 50) {
      g++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (c = w.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : w.rects), {
        x: d,
        y: h
      } = Mo(c, m, l)), _ = -1;
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
async function nl(s, t) {
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
    altBoundary: m = !1,
    padding: p = 0
  } = Bs(t, s), g = sl(p), v = a[m ? h === "floating" ? "reference" : "floating" : h], y = An(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(x)) ? await (r.getScale == null ? void 0 : r.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = An(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: x,
    strategy: l
  }) : b);
  return {
    top: (y.top - w.top + g.top) / k.y,
    bottom: (w.bottom - y.bottom + g.bottom) / k.y,
    left: (y.left - w.left + g.left) / k.x,
    right: (w.right - y.right + g.right) / k.x
  };
}
const Li = (s) => ({
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
    } = Bs(s, t) || {};
    if (l == null)
      return {};
    const d = sl(c), h = {
      x: e,
      y: n
    }, m = Rr(i), p = Lr(m), g = await o.getDimensions(l), _ = m === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", x = r.reference[p] + r.reference[m] - h[m] - r.floating[p], k = h[m] - r.reference[m], w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let N = w ? w[b] : 0;
    (!N || !await (o.isElement == null ? void 0 : o.isElement(w))) && (N = a.floating[b] || r.floating[p]);
    const L = x / 2 - k / 2, R = N / 2 - g[p] / 2 - 1, W = Xe(d[v], R), A = Xe(d[y], R), z = W, G = N - g[p] - A, T = N / 2 - g[p] / 2 + L, K = Pi(z, T, G), _t = Fs(i) != null && T != K && r.reference[p] / 2 - (T < z ? W : A) - g[p] / 2 < 0 ? T < z ? z - T : G - T : 0;
    return {
      [m]: h[m] - _t,
      data: {
        [m]: K,
        centerOffset: T - K + _t
      }
    };
  }
}), si = function(s) {
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
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ..._
      } = Bs(s, t), v = Te(n), y = Te(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = h || (y || !g ? [In(o)] : cd(o));
      !h && p !== "none" && x.push(...dd(o, g, p, b));
      const k = [o, ...x], w = await nl(t, _), N = [];
      let L = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && N.push(w[v]), d) {
        const z = ld(n, r, b);
        N.push(w[z[0]], w[z[1]]);
      }
      if (L = [...L, {
        placement: n,
        overflows: N
      }], !N.every((z) => z <= 0)) {
        var R, W;
        const z = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, G = k[z];
        if (G)
          return {
            data: {
              index: z,
              overflows: L
            },
            reset: {
              placement: G
            }
          };
        let T = (W = L.filter((K) => K.overflows[0] <= 0).sort((K, tt) => K.overflows[1] - tt.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!T)
          switch (m) {
            case "bestFit": {
              var A;
              const K = (A = L.map((tt) => [tt.placement, tt.overflows.filter((_t) => _t > 0).reduce((_t, Ys) => _t + Ys, 0)]).sort((tt, _t) => tt[1] - _t[1])[0]) == null ? void 0 : A[0];
              K && (T = K);
              break;
            }
            case "initialPlacement":
              T = o;
              break;
          }
        if (n !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
async function pd(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Te(e), a = Fs(e), l = ei(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = Bs(t, s);
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
const ni = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await pd(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, $s = function(s) {
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
              x: y,
              y: b
            } = v;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = Bs(s, t), c = {
        x: e,
        y: n
      }, d = await nl(t, l), h = ei(Te(i)), m = el(h);
      let p = c[m], g = c[h];
      if (r) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = p + d[v], x = p - d[y];
        p = Pi(b, p, x);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = g + d[v], x = g - d[y];
        g = Pi(b, g, x);
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
function ue(s) {
  return il(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function bt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function te(s) {
  var t;
  return (t = (il(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function il(s) {
  return s instanceof Node || s instanceof bt(s).Node;
}
function Jt(s) {
  return s instanceof Element || s instanceof bt(s).Element;
}
function Ot(s) {
  return s instanceof HTMLElement || s instanceof bt(s).HTMLElement;
}
function Io(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof bt(s).ShadowRoot;
}
function Vs(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = St(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function md(s) {
  return ["table", "td", "th"].includes(ue(s));
}
function zr(s) {
  const t = Wr(), e = St(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function gd(s) {
  let t = Ze(s);
  for (; Ot(t) && !ii(t); ) {
    if (zr(t))
      return t;
    t = Ze(t);
  }
  return null;
}
function Wr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ii(s) {
  return ["html", "body", "#document"].includes(ue(s));
}
function St(s) {
  return bt(s).getComputedStyle(s);
}
function ri(s) {
  return Jt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Ze(s) {
  if (ue(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Io(s) && s.host || // Fallback.
    te(s)
  );
  return Io(t) ? t.host : t;
}
function rl(s) {
  const t = Ze(s);
  return ii(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : Ot(t) && Vs(t) ? t : rl(t);
}
function Ss(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = rl(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = bt(n);
  return i ? t.concat(r, r.visualViewport || [], Vs(n) ? n : [], r.frameElement ? Ss(r.frameElement) : []) : t.concat(n, Ss(n));
}
function ol(s) {
  const t = St(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Ot(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Mn(e) !== r || Mn(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Or(s) {
  return Jt(s) ? s : s.contextElement;
}
function Ve(s) {
  const t = Or(s);
  if (!Ot(t))
    return de(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = ol(t);
  let o = (r ? Mn(e.width) : e.width) / n, a = (r ? Mn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const _d = /* @__PURE__ */ de(0);
function al(s) {
  const t = bt(s);
  return !Wr() || !t.visualViewport ? _d : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function yd(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== bt(s) ? !1 : t;
}
function Me(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Or(s);
  let o = de(1);
  t && (n ? Jt(n) && (o = Ve(n)) : o = Ve(s));
  const a = yd(r, e, n) ? al(r) : de(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = bt(r), p = n && Jt(n) ? bt(n) : n;
    let g = m.frameElement;
    for (; g && n && p !== m; ) {
      const _ = Ve(g), v = g.getBoundingClientRect(), y = St(g), b = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, x = v.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += b, c += x, g = bt(g).frameElement;
    }
  }
  return An({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function vd(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = Ot(e), r = te(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = de(1);
  const l = de(0);
  if ((i || !i && n !== "fixed") && ((ue(e) !== "body" || Vs(r)) && (o = ri(e)), Ot(e))) {
    const c = Me(e);
    a = Ve(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function bd(s) {
  return Array.from(s.getClientRects());
}
function ll(s) {
  return Me(te(s)).left + ri(s).scrollLeft;
}
function wd(s) {
  const t = te(s), e = ri(s), n = s.ownerDocument.body, i = $e(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = $e(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + ll(s);
  const a = -e.scrollTop;
  return St(n).direction === "rtl" && (o += $e(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Cd(s, t) {
  const e = bt(s), n = te(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = Wr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function xd(s, t) {
  const e = Me(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = Ot(s) ? Ve(s) : de(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Ao(s, t, e) {
  let n;
  if (t === "viewport")
    n = Cd(s, e);
  else if (t === "document")
    n = wd(te(s));
  else if (Jt(t))
    n = xd(t, e);
  else {
    const i = al(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return An(n);
}
function cl(s, t) {
  const e = Ze(s);
  return e === t || !Jt(e) || ii(e) ? !1 : St(e).position === "fixed" || cl(e, t);
}
function kd(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Ss(s).filter((a) => Jt(a) && ue(a) !== "body"), i = null;
  const r = St(s).position === "fixed";
  let o = r ? Ze(s) : s;
  for (; Jt(o) && !ii(o); ) {
    const a = St(o), l = zr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Vs(o) && !l && cl(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Ze(o);
  }
  return t.set(s, n), n;
}
function $d(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? kd(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = Ao(t, d, i);
    return c.top = $e(h.top, c.top), c.right = Xe(h.right, c.right), c.bottom = Xe(h.bottom, c.bottom), c.left = $e(h.left, c.left), c;
  }, Ao(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Sd(s) {
  return ol(s);
}
function Nd(s, t, e) {
  const n = Ot(t), i = te(t), r = e === "fixed", o = Me(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = de(0);
  if (n || !n && !r)
    if ((ue(t) !== "body" || Vs(i)) && (a = ri(t)), n) {
      const c = Me(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = ll(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Po(s, t) {
  return !Ot(s) || St(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function hl(s, t) {
  const e = bt(s);
  if (!Ot(s))
    return e;
  let n = Po(s, t);
  for (; n && md(n) && St(n).position === "static"; )
    n = Po(n, t);
  return n && (ue(n) === "html" || ue(n) === "body" && St(n).position === "static" && !zr(n)) ? e : n || gd(s) || e;
}
const Ed = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || hl, r = this.getDimensions;
  return {
    reference: Nd(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Td(s) {
  return St(s).direction === "rtl";
}
const Md = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vd,
  getDocumentElement: te,
  getClippingRect: $d,
  getOffsetParent: hl,
  getElementRects: Ed,
  getClientRects: bd,
  getDimensions: Sd,
  getScale: Ve,
  isElement: Jt,
  isRTL: Td
};
function Id(s, t) {
  let e = null, n;
  const i = te(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: m
    } = s.getBoundingClientRect();
    if (a || t(), !h || !m)
      return;
    const p = sn(d), g = sn(i.clientWidth - (c + h)), _ = sn(i.clientHeight - (d + m)), v = sn(c), b = {
      rootMargin: -p + "px " + -g + "px " + -_ + "px " + -v + "px",
      threshold: $e(0, Xe(1, l)) || 1
    };
    let x = !0;
    function k(w) {
      const N = w[0].intersectionRatio;
      if (N !== l) {
        if (!x)
          return o();
        N ? o(!1, N) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      x = !1;
    }
    try {
      e = new IntersectionObserver(k, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(k, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Hr(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Or(s), d = i || r ? [...c ? Ss(c) : [], ...Ss(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? Id(c, e) : null;
  let m = -1, p = null;
  o && (p = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let g, _ = l ? Me(s) : null;
  l && v();
  function v() {
    const y = Me(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const oi = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Md,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return fd(s, t, {
    ...i,
    platform: r
  });
};
var xe, Lt, oe;
class dl extends V {
  constructor(e) {
    super(e);
    F(this, xe, void 0);
    F(this, Lt, void 0);
    F(this, oe, void 0);
    U(this, xe, Y()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = f(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = D(this, xe)) == null ? void 0 : e.current;
  }
  get container() {
    return D(this, oe);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = f(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), n(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: r } = i;
    return $(
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
    } = e, c = f.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: D(this, xe),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!D(this, oe)) {
      const n = f(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = f("<div>").addClass("pick-container").appendTo(n)), U(this, oe, i[0]);
    }
    return D(this, oe);
  }
  _render(e) {
    return /* @__PURE__ */ u("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: n, props: i } = this, { state: r } = i;
    if (!e || !n || !r.open) {
      D(this, Lt) && (D(this, Lt).call(this), U(this, Lt, void 0));
      return;
    }
    D(this, Lt) || U(this, Lt, Hr(n, e, () => {
      const { placement: o, width: a } = i;
      oi(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? si() : null, $s(), ni(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        f(e).css({
          left: l,
          top: c,
          width: a === "100%" ? f(n).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
      }), a === "100%" && f(e).css({ width: f(e).width() });
    }));
  }
  componentDidMount() {
    var e, n;
    this.layout(), f(document).on("click", this._handleDocClick), (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    f(document).off("click", this._handleDocClick);
    const e = D(this, Lt);
    e && (e(), U(this, Lt, void 0)), U(this, oe, void 0), U(this, xe, void 0), f(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return Rh(this._render(e), this._getContainer(e));
  }
}
xe = new WeakMap(), Lt = new WeakMap(), oe = new WeakMap();
var ul = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, se = (s, t, e) => (ul(s, t, "read from private field"), e ? e.call(s) : t.get(s)), gi = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Re = (s, t, e, n) => (ul(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), fn, At, ds;
let gt = class extends V {
  constructor(t) {
    super(t), gi(this, fn, void 0), gi(this, At, 0), gi(this, ds, Y()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      se(this, At) && (clearTimeout(se(this, At)), Re(this, At, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await kn(200, (a) => {
        Re(this, At, a);
      }), Re(this, At, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await kn(50, (a) => {
        Re(this, At, a);
      }), Re(this, At, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, Re(this, fn, t.id ?? `_pick${he()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return se(this, fn);
  }
  get pop() {
    return se(this, ds).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), se(this, At) && clearTimeout(se(this, At));
    const t = se(this, ds).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ u(o, { ref: se(this, ds), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ u(Je, { children: [
      /* @__PURE__ */ u(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
fn = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
ds = /* @__PURE__ */ new WeakMap();
gt.Trigger = Dr;
gt.Pop = dl;
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
let fl = class extends gt {
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
    if (t && f(t).css("backgroundColor", r), e && f(e).css("borderColor", r), n && f(n).css("color", r), i) {
      const o = f(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ u(J, { icon: n }, "icon") : /* @__PURE__ */ u("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = f.extend({
      color: e.value
    }, n.style), n.className = $("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ u("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ u("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ u("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ u("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ u(J, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ u("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ u(J, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
fl.defaultProps = {
  ...gt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class pl extends B {
}
pl.NAME = "ColorPicker";
pl.Component = fl;
const Ns = 24 * 60 * 60 * 1e3, Q = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Ad = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(Q(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, Us = (s, t = /* @__PURE__ */ new Date()) => Q(s).toDateString() === Q(t).toDateString(), Ri = (s, t = /* @__PURE__ */ new Date()) => Q(s).getFullYear() === Q(t).getFullYear(), ml = (s, t = /* @__PURE__ */ new Date()) => (s = Q(s), t = Q(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), mf = (s, t = /* @__PURE__ */ new Date()) => {
  s = Q(s), t = Q(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, gf = (s, t) => Us(Q(t), s), _f = (s, t) => Us(Q(t).getTime() - Ns, s), yf = (s, t) => Us(Q(t).getTime() + Ns, s), ct = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = Q(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Ri(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, vf = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = ct(s, Ri(s) ? n.month : n.full);
  if (Us(s, t))
    return i;
  const r = ct(t, Ri(s, t) ? ml(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var Is, As;
class gl extends V {
  constructor() {
    super(...arguments);
    F(this, Is, Y());
    F(this, As, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    f(D(this, Is).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ u("div", { className: "time-picker-menu row", ref: D(this, Is), children: [
      /* @__PURE__ */ u(
        pt,
        {
          className: l,
          items: o,
          onClickItem: D(this, As).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ u(
        pt,
        {
          className: l,
          items: a,
          onClickItem: D(this, As).bind(this, "minute")
        }
      )
    ] });
  }
}
Is = new WeakMap(), As = new WeakMap();
var Pd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, nn = (s, t, e) => (Pd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), rn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, zi, Wi, Oi, Hi;
const Do = (s) => {
  if (!s)
    return;
  const t = Q(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let _l = class extends gt {
  constructor(t) {
    super(t), rn(this, zi, () => {
      this.toggle(!0);
    }), rn(this, Wi, (n) => {
      this.setTime(n.target.value);
    }), rn(this, Oi, (n, i) => {
      this.setTime({ [n]: i });
    }), rn(this, Hi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = ct(/* @__PURE__ */ new Date(), t.format));
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
    const n = Do(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? ct(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = Do(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: nn(this, Hi), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-time" }) : h = /* @__PURE__ */ u(J, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: nn(this, zi), onChange: nn(this, Wi) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ u(gl, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: nn(this, Oi) });
  }
};
zi = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakMap();
_l.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
rt.addLang({
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
const Dd = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Ns;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, Lo = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => ct(e, t)));
var Hn;
class Ld extends V {
  constructor() {
    super(...arguments);
    F(this, Hn, (e) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = f(e.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(e) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = rt.getLang("weekNames"),
      monthNames: o = rt.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let N = 0; N < 7; N++) {
      const L = (i + N) % 7;
      h.push(/* @__PURE__ */ u("div", { className: $("col mini-calendar-day", { "is-weekend": L === 0 || L === 6 }), children: /* @__PURE__ */ u("div", { children: r ? r[L] : L }) }, N));
    }
    const { startTime: p, days: g, firstDay: _ } = Dd(a, l, i), v = _ + g * Ns;
    let y = p;
    const b = [], x = "yyyy-MM-dd", k = Lo(c, x), w = Lo(d, x);
    for (; y <= v; ) {
      const N = [];
      for (let L = 0; L < 7; L++) {
        const R = new Date(y), W = R.getDate(), A = ct(R, x), z = R.getDay(), G = ml(R, _), T = $("col mini-calendar-day", {
          active: k.has(A),
          selected: w.has(A),
          "is-first": W === 1,
          "is-in-month": G,
          "is-out-month": !G,
          "is-today": Us(R, n),
          "is-weekend": z === 0 || z === 6
        });
        N.push(
          /* @__PURE__ */ u("div", { className: T, "data-date": A, children: /* @__PURE__ */ u("a", { className: m, onClick: D(this, Hn), children: W === 1 && o ? o[R.getMonth()] : R.getDate() }) }, A)
        ), y += Ns;
      }
      b.push(/* @__PURE__ */ u("div", { className: "row", children: N }, y));
    }
    return /* @__PURE__ */ u("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ u("div", { className: "row", children: h }),
      b
    ] });
  }
}
Hn = new WeakMap();
var Ps, Bn;
class Ro extends V {
  constructor() {
    super(...arguments);
    F(this, Ps, Y());
    F(this, Bn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = f(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    f(D(this, Ps).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ u(lt, { type: "ghost", "data-value": c, active: c === o, className: $(l === c ? "is-current" : ""), onClick: D(this, Bn), children: c }, c));
    return /* @__PURE__ */ u("div", { className: n, ref: D(this, Ps), children: a });
  }
}
Ps = new WeakMap(), Bn = new WeakMap();
var qe, Ds, Ls, Rs, zs, Ws, Fn, vl, Vn, bl;
class yl extends V {
  constructor(e) {
    super(e);
    F(this, Fn);
    F(this, Vn);
    F(this, qe, void 0);
    F(this, Ds, void 0);
    F(this, Ls, void 0);
    F(this, Rs, void 0);
    F(this, zs, void 0);
    F(this, Ws, void 0);
    U(this, qe, Y()), U(this, Ds, (r) => {
      const o = f(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), U(this, Ls, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), U(this, Rs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), U(this, zs, (r) => {
      this.setState({ year: r, select: "day" });
    }), U(this, Ws, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Ad(l, r.substring(5).replace("+", ""))), r = ct(l, "yyyy-MM-dd");
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
    f(D(this, qe).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = rt.getLang("yearFormat") || "{0}",
      weekNames: o = rt.getLang("weekNames"),
      monthNames: a = rt.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = n, p = m === "day", g = Q(e.minDate || "1970-1-1"), _ = Q(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ u("div", { className: "date-picker-menu row", ref: D(this, qe), onClick: D(this, Ds), children: [
      Le(this, Fn, vl).call(this, e),
      /* @__PURE__ */ u("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ u("div", { className: "row p-2", children: [
          /* @__PURE__ */ u(lt, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: at(r, d) }),
          /* @__PURE__ */ u(lt, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ u("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ u(lt, { type: "ghost", size: "sm", square: !0, onClick: D(this, Ls), children: /* @__PURE__ */ u("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ u(lt, { type: "ghost", size: "sm", square: !0, onClick: D(this, Rs), children: /* @__PURE__ */ u("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ u(
          Ld,
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
        m === "year" ? /* @__PURE__ */ u(
          Ro,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: D(this, zs)
          }
        ) : m === "month" ? /* @__PURE__ */ u(
          Ro,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: D(this, Ws)
          }
        ) : null,
        p ? Le(this, Vn, bl).call(this, e) : null
      ] })
    ] });
  }
}
qe = new WeakMap(), Ds = new WeakMap(), Ls = new WeakMap(), Rs = new WeakMap(), zs = new WeakMap(), Ws = new WeakMap(), Fn = new WeakSet(), vl = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ u(pt, { ...n })) : null;
}, Vn = new WeakSet(), bl = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": ct(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ u("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ u(ft, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ u(lt, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Rd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, _i = (s, t, e) => (Rd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), yi = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Bi, Fi, Vi;
let wl = class extends gt {
  constructor(t) {
    super(t), yi(this, Bi, () => {
      this.toggle(!0);
    }), yi(this, Fi, (n) => {
      this.setDate(n.target.value);
    }), yi(this, Vi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = Q(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : ct(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = ct(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: _i(this, Vi), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(J, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: _i(this, Bi), onChange: _i(this, Fi) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: $(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = rt.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ u(
      yl,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
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
Bi = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakMap();
wl.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Cl extends B {
}
Cl.NAME = "TimePicker";
Cl.Component = _l;
class xl extends B {
}
xl.NAME = "DatePicker";
xl.Component = wl;
class zd extends V {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ u("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ u(yl, { ...e }),
      /* @__PURE__ */ u(gl, { ...n })
    ] });
  }
}
var Wd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, rs = (s, t, e) => (Wd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), os = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ui, ji, Ki, qi, Gi;
const zo = (s) => {
  if (!s)
    return;
  const t = Q(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let kl = class extends gt {
  constructor(t) {
    super(t), os(this, Ui, () => {
      this.toggle(!0);
    }), os(this, ji, (o) => {
      this.setDate(o.target.value);
    }), os(this, Ki, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), os(this, qi, (o, a) => {
      this.setTime({ [o]: a });
    }), os(this, Gi, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = Q(o), g = !o || Number.isNaN(p.getDay()), _ = ct(p, d), [, v = "00:00"] = this.state.value.split(m);
      this.setState({ value: g ? c ? l : "" : `${_}${m}${v}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = ct(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, m = "00:00"] = this.state.value.split(o), [p, g] = m.split(":"), { hour: _ = +p, minute: v = +g } = t;
      c = `${_}:${v}`;
    }
    const d = zo(c), h = this.state.value.split(o)[0] || ct(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${ct(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = zo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: rs(this, Ki),
        children: /* @__PURE__ */ u("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(J, { icon: i })), [
      /* @__PURE__ */ u(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: l,
          disabled: o,
          readOnly: a,
          onFocus: rs(this, Ui),
          onChange: (m) => {
            rs(this, ji).call(this, m), rs(this, Gi).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ u("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: $(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = rt.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: g } = t, [_, v] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
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
        onChange: rs(this, qi)
      }
    };
    return /* @__PURE__ */ u(zd, { ...y });
  }
};
Ui = /* @__PURE__ */ new WeakMap();
ji = /* @__PURE__ */ new WeakMap();
Ki = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakMap();
Gi = /* @__PURE__ */ new WeakMap();
kl.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class $l extends B {
}
$l.NAME = "DatetimePicker";
$l.Component = kl;
const Wo = "show", Oo = "in", Od = '[data-dismiss="modal"]', js = class us extends mt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Od) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
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
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  show(t) {
    const { modalElement: e } = this;
    if (this._shown)
      return f(e).css("z-index", `${us.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    return f(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, Wo, r).css({
      zIndex: `${us.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      f(e).addClass(Oo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this._shown ? (this._shown = !1, f(this.modalElement).removeClass(Oo), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(Wo), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = f(n);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = us.query(t, void 0, (n) => n.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = us.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
js.NAME = "Modal";
js.MULTI_INSTANCE = !0;
js.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
js.zIndex = 1500;
let Ie = js;
f(window).on(`resize.${Ie.NAMESPACE}`, () => {
  Ie.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
f(document).on(`to-hide.${Ie.NAMESPACE}`, (s, t) => {
  Ie.hide(t == null ? void 0 : t.target);
});
class Sl extends V {
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
    return ut(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ u("div", { className: $("modal-header", e), children: /* @__PURE__ */ u("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : ut(t) ? t : /* @__PURE__ */ u("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ u(ft, { ...t }) : null,
      e ? /* @__PURE__ */ u("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? ut(t) ? t : /* @__PURE__ */ u("div", { className: $("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return ut(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ u("div", { className: $("modal-footer", e), children: n ? /* @__PURE__ */ u(ft, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ u("div", { className: $("modal-dialog", t), style: e, children: /* @__PURE__ */ u("div", { className: $("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Sl.defaultProps = { closeBtn: !0 };
class Nl extends V {
  constructor() {
    super(...arguments), this._ref = Y(), this.state = {}, this._watchIframeHeight = () => {
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
    return /* @__PURE__ */ u(
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
Nl.defaultProps = {
  watchHeight: !0
};
var Br = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, It = (s, t, e) => (Br(s, t, "read from private field"), e ? e.call(s) : t.get(s)), as = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ze = (s, t, e, n) => (Br(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), pn = (s, t, e) => (Br(s, t, "access private method"), e), Vt, fs, Ut, Pn, Fr, mn, Yi;
function Hd(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function Bd(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await f.ajax({
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
    body: e === "html" ? /* @__PURE__ */ u(Ee, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Fd(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ u(Nl, { url: e, watchHeight: !o })
  };
}
const Vd = {
  custom: Hd,
  ajax: Bd,
  iframe: Fd
}, vi = "loading", El = class ve extends Ie {
  constructor() {
    super(...arguments), as(this, Pn), as(this, mn), as(this, Vt, void 0), as(this, fs, void 0), as(this, Ut, void 0);
  }
  get id() {
    return It(this, fs);
  }
  get loading() {
    var t;
    return (t = It(this, Vt)) == null ? void 0 : t.classList.contains(vi);
  }
  get shown() {
    var t;
    return !!((t = It(this, Vt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = It(this, Vt);
    if (!t) {
      const { options: e } = this;
      let n = It(this, fs);
      n || (n = e.id || `modal-${he()}`, ze(this, fs, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = f("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      ze(this, Vt, t);
    }
    return t;
  }
  get $emitter() {
    const t = It(this, Vt);
    return t ? f(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ve.getAll().some((t) => t.shown) || f("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (f("body").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = It(this, Vt);
    t && (f(t).removeData(this.constructor.KEY).remove(), ze(this, Vt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    It(this, Ut) && clearTimeout(It(this, Ut));
    const { modalElement: t, options: e } = this, n = f(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = Vd[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(vi), r && ze(this, Ut, window.setTimeout(() => {
      ze(this, Ut, 0), pn(this, mn, Yi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await pn(this, mn, Yi).call(this, this.options.failedTip) : l && typeof l == "object" && await pn(this, Pn, Fr).call(this, l), It(this, Ut) && (clearTimeout(It(this, Ut)), ze(this, Ut, 0)), this.layout(), await kn(100), n.removeClass(vi), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ve.ensure(n, r), a = `${ve.NAMESPACE}.open${he()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof n == "object" && n.html ? /* @__PURE__ */ u("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ u("div", { children: n });
    i ? m = /* @__PURE__ */ u("div", { className: $("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ u("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ u("div", { className: $("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = rt.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && p.push(v);
    }, []);
    let g;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: v, event: y }) => {
        const b = ve.query(y.target, c);
        g = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await ve.open({
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
    return await ve.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Vt = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakSet();
Fr = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return f(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, xs(
      /* @__PURE__ */ u(Sl, { ...s }),
      this.modalElement
    );
  });
};
mn = /* @__PURE__ */ new WeakSet();
Yi = function(s) {
  if (s)
    return pn(this, Pn, Fr).call(this, {
      body: /* @__PURE__ */ u("div", { className: "modal-load-failed", children: s })
    });
};
El.DEFAULT = {
  ...Ie.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Ud = El;
const jd = '[data-toggle="modal"]';
class Xi extends mt {
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
      e = Ie.ensure(n, t);
    } else
      e = Ud.ensure(this.container, t);
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
Xi.NAME = "ModalTrigger";
f(document).on(`click${Xi.NAMESPACE}`, jd, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Xi.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let Vr = class extends me {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
Vr.NAME = "nav";
Vr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class Tl extends B {
}
Tl.NAME = "Nav";
Tl.Component = Vr;
function Es(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Kd({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Es(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : at(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : at(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ u(lt, { type: e, ...a });
}
function qd({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Es(i, e);
  return n = typeof n == "function" ? n(a) : at(n, a), /* @__PURE__ */ u(Z, { ...o, children: [
    r,
    n
  ] });
}
function Gd({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ u(lt, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const g = Es(n, p);
      i && (o.url = typeof i == "function" ? i(g) : at(i, g)), m.push(/* @__PURE__ */ u(lt, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let Yd = class extends V {
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
      contentClass: m,
      arrowStyle: p,
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ u(j, { content: r }, "content");
    (m || i) && (_ = /* @__PURE__ */ u("div", { className: m, children: _ }, "content"));
    const v = [], y = l ? /* @__PURE__ */ u("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ u("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ u("div", { className: d, children: [
      i ? /* @__PURE__ */ u("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(_), c && v.push(/* @__PURE__ */ u("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), g ? v : /* @__PURE__ */ u("div", { id: e, className: $("popover", a, { popup: n }), style: o, children: v });
  }
};
class Ur extends B {
}
Ur.NAME = "PopoverPanel";
Ur.Component = Yd;
const Xd = '[data-toggle="popover"]', Ho = "show", Bo = "in";
class $t extends mt {
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
      const e = f(t.target);
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
      const o = f(i), { namespace: a } = this;
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), f(t)[0]) : this._createTarget();
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
    const r = f(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(Ho), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || f(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(Bo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && f(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = f(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(Bo), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || f(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), f(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(Ho), t && this._resetTimer(() => {
        this.destroy();
      }, typeof t == "number" ? t : 0), this._destoryTarget();
    }, e ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), f(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      f(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Hr(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && f(e).css({ width: f(t).width() }), oi(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const m = f(e).css({
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
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && m.attr("class", `${m.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || f(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = f(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Ur(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
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
        i ? si() : null,
        r ? $s(typeof r == "object" ? r : void 0) : null,
        o || d ? ni((o || 0) + d) : null,
        a ? Li({ element: c }) : null
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
    const { container: t = "body" } = this.options, e = f(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = f("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
}
$t.NAME = "Popover";
$t.Z_INDEX = 1700;
$t.MULTI_INSTANCE = !0;
$t.DEFAULT = {
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
f(document).on(`click${$t.NAMESPACE} mouseenter${$t.NAMESPACE}`, Xd, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.data($t.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    $t.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const Zd = '[data-toggle="dropdown"]';
class zt extends $t {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      f(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, onClickItem: i } = this.options;
    return {
      items: t,
      placement: e,
      onClickItem: i,
      ...n
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: Wt(jr, this._getMenuOptions())
    };
  }
}
zt.NAME = "Dropdown";
zt.DEFAULT = {
  ...$t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
f(document).on(`click${zt.NAMESPACE} mouseenter${zt.NAMESPACE}`, Zd, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.data(zt.KEY)) {
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
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), zt.ensure(t, i), s.preventDefault();
  }
});
class ai extends lt {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e, onClickItem: n } = this.props, i = f(this.triggerElement), r = zt.get(this.triggerElement), o = {
      items: e,
      onClickItem: n,
      ...t
    };
    r ? r.setOptions(o) : i.data(o);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = zt.get(this.triggerElement)) == null || t.destroy();
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
ai.defaultProps = {
  caret: !0
};
Object.assign(Pt.ItemComponents, { dropdown: ai });
Object.assign(ft.ItemComponents, { dropdown: ai });
class jr extends Bt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this._ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || oi(e, t, {
      placement: this.props.placement,
      middleware: [si(), $s(), ni(1)]
    }).then(({ x: n, y: i }) => {
      f(t).css({
        left: n,
        top: i
      });
    });
  }
  _afterRender(t) {
    super._afterRender(t), this.isRoot || (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  _renderNestedToggle(t, e) {
    if (typeof e == "boolean")
      return /* @__PURE__ */ u("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ u("span", { className: "caret-right" }) });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
jr.defaultProps = {
  ...Bt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
jr.inheritNestedProps = [...Bt.inheritNestedProps, "popup"];
function Jd({
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
      url: typeof e == "function" ? e(d) : at(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : at(a, t), i.menu = { ...i.menu, className: $((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ u(ai, { type: "dropdown", dropdown: i, ...o });
}
function Qd({
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
  const m = (_) => {
    var v;
    h = Number((v = _.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = Es(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(v) : at(l, v));
  }, g = Es(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : at(l, g), /* @__PURE__ */ u("div", { className: $("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ u("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ u(lt, { type: n, ...d, onClick: p })
  ] });
}
const re = class extends ft {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n), r = e.type || "item", o = this._pagerInfo;
    return r === "info" ? f.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && f.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
re.NAME = "pager";
re.ItemComponents = {
  ...ft.ItemComponents,
  info: qd,
  link: [Kd, re.getBtnProps],
  nav: [Gd, re.getBtnProps],
  "size-menu": [Jd, re.getBtnProps],
  goto: [Qd, re.getBtnProps]
};
re.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let tu = re;
class Ml extends B {
}
Ml.NAME = "Pager";
Ml.Component = tu;
class Il extends B {
}
Il.NAME = "Pick";
Il.Component = gt;
var Ge, Os;
class Al extends V {
  constructor(e) {
    super(e);
    F(this, Ge, void 0);
    F(this, Os, void 0);
    this._searchInput = Y(), this._measure = Y(), this._changeTimer = 0, U(this, Ge, (n) => {
      const i = n.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), n.stopPropagation();
    }), U(this, Os, (n) => {
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
        const r = f(i).parent();
        r.width(Math.ceil(Math.min(n.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer);
  }
  render(e, n) {
    const { placeholder: i, inline: r } = e, { search: o } = n, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ u("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ u("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: D(this, Os), children: /* @__PURE__ */ u("span", { className: "close" }) }) : l = /* @__PURE__ */ u("span", { className: "magnifier" }), /* @__PURE__ */ u("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ u(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: D(this, Ge),
          onInput: D(this, Ge),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ge = new WeakMap(), Os = new WeakMap();
class eu extends Dr {
  constructor() {
    super(...arguments), this._search = Y(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ u("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ u("span", { className: "text", children: /* @__PURE__ */ u(j, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ u("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ u("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ u(
      Al,
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
    return !a && !e.length ? /* @__PURE__ */ u("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ u("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ u("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        f(`#${i}`).val(n);
      else {
        const a = r.length ? r : [o];
        return /* @__PURE__ */ u("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ u("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    f(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = f(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", Ai), this._skipTriggerChange = !1;
    }
  }
}
class su extends Dr {
  constructor() {
    super(...arguments), this._search = Y(), this._handleDeselectClick = (t) => {
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
    return $(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ u(
      Al,
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
      h = /* @__PURE__ */ u("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ u(j, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ u("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = l && !d ? /* @__PURE__ */ u("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ u("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      m,
      d ? null : /* @__PURE__ */ u("span", { className: "caret" }, "caret")
    ];
  }
}
let Ks = class extends pt {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Ks.NAME = "tree";
Ks.defaultItemProps = {
  ...pt.defaultItemProps,
  innerComponent: "div"
};
Ks.inheritNestedProps = [...pt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let qs = class extends Bt {
  _getItem(t, e, n) {
    return Ks.getTreeItem(t, super._getItem(t, e, n));
  }
};
qs.NAME = "tree";
qs.inheritNestedProps = [...Bt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
qs.defaultItemProps = {
  ...Bt.defaultProps,
  innerComponent: "div"
};
function Pl(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Pl(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class nu extends dl {
  constructor() {
    super(...arguments), this._menu = Y(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, m) => {
        const p = this._getItem(h, m);
        return p && (p.active ? o = !0 : r = !1, d.push(p)), d;
      }, []));
      const a = r || n.has(t.value);
      t = {
        ...t,
        active: a,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: $(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      };
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && (l.disabled && this._disabledSet.add(l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var n;
      return (n = this._renderItemCallback) == null ? void 0 : n.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value, i = e.target;
      if (t.disabled || n === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((d) => this._disabledSet.has(d.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...Pl(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          f(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return f(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return H({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      items: o,
      defaultNestedShow: !0,
      search: a,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"]
    }, e, n);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._disabledSet.clear();
    const n = this._getMenuProps(t);
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ u(qs, { hover: !0, ...n }) : /* @__PURE__ */ u(Bt, { ...n });
  }
}
function gn(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && gn(n.items, e), e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
let Kr = class extends gt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = Y(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
    }, this.isSelected = (r) => this.valueList.includes(r), f.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: n = "" } = this.props;
    this._emptyValueSet = new Set(n.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = gn(i);
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value ?? "");
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
    else if (await kn(n || 500), this._abort !== t || (r = await Gn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = gn(r);
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
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
      searchHint: t.searchHint,
      valueList: this.valueList,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? eu : su);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = f.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = f.unique(t)), e.filter((n) => !this.isEmptyValue(n));
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
        const a = gn(Array.isArray(r) ? r : this.state.items);
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
Kr.defaultProps = {
  ...gt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
Kr.Pop = nu;
class Dl extends B {
}
Dl.NAME = "Picker";
Dl.Component = Kr;
class Ll extends mt {
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
    return i && n.middleware.push(si()), r && n.middleware.push(r === !0 ? $s() : $s(r)), o && n.middleware.push(Li({ element: this.$arrow[0] })), a && n.middleware.push(ni(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = Hr(t, e, () => {
      oi(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !Li || !o.arrow)
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
    const e = f(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    e.addClass(n), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
      f(i.target).data("dismiss") === "popovers" && this.hide();
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
    const e = f('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = f('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
Ll.NAME = "Popovers";
Ll.DEFAULT = {
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
class Rl extends B {
}
Rl.NAME = "SearchBox";
Rl.Component = Sr;
class zl extends B {
}
zl.NAME = "Toolbar";
zl.Component = ft;
De(Uh);
const iu = '[data-toggle="tooltip"]';
class Gt extends $t {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: $("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Gt.NAME = "Tooltip";
Gt.DEFAULT = {
  ...$t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
f(document).on(`click${Gt.NAMESPACE} mouseenter${Gt.NAMESPACE}`, iu, (s) => {
  const t = f(s.currentTarget);
  if (t.length && !t.data(Gt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Gt.ensure(t, { show: Gt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
class Wl extends B {
}
Wl.NAME = "Tree";
Wl.Component = Ks;
class Ol extends B {
}
Ol.NAME = "SearchTree";
Ol.Component = qs;
class qr extends mt {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? _h(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = f('<ul class="file-list py-1"></ul>');
    const l = f(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = f(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const m = f(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = f(`<span class="text-primary">${e}</span>`);
    if (n) {
      const h = f(`<i class="icon icon-${n} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = f(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
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
    this.$input = f("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
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
    return this.addFile(t), f('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return f(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: n, renameClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Gt(r, { title: e }), r;
    }
    return f("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Gt(r, { title: e })), r;
    }
    return f("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return f(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return f(`<span class="file-size text-gray">${gh(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, r = f('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = f(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, r = f('<div class="input-group input-rename-container hidden"></div>'), o = f("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const h = r.closest(".file-item"), m = h.find(".file-name");
        if (m.html() === o.val()) {
          r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), m.html(o.val());
      } else
        d.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = f("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = f("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = f('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
qr.NAME = "Upload";
qr.DEFAULT = {
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
class Hl extends qr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = f(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(f('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = f('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = f('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = f(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = f(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = f('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(f(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = f('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      f('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})`, backgroundSize: "cover" }).prependTo(e);
    }, n.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = f(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return f('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(f(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = f("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
Hl.NAME = "UploadImgs";
Hl.DEFAULT = {
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
let Zi = class extends Z {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: n,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ u("div", { className: $("card-content", r), children: [
          e ? /* @__PURE__ */ u("div", { className: $("card-subtitle", n), children: /* @__PURE__ */ u(j, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ u(j, { content: i }, "extraContent") : null
        ] }, "content")
      ];
  }
  _renderHeading(t) {
    const {
      icon: e,
      prefix: n,
      prefixClass: i,
      title: r,
      titleClass: o,
      titleUrl: a,
      titleAttrs: l,
      suffix: c,
      suffixClass: d,
      heading: h,
      headingClass: m
    } = t;
    if (!e && !n && !r && !c && !h)
      return;
    const p = a ? "a" : "span";
    return /* @__PURE__ */ u("div", { className: $("card-heading", m), children: [
      e ? /* @__PURE__ */ u(J, { className: "card-icon", icon: e }, "icon") : null,
      n ? /* @__PURE__ */ u("span", { className: $("card-prefix", i), children: n }, "prefix") : null,
      r ? /* @__PURE__ */ u(p, { className: $("card-title", o), href: a, ...l, children: /* @__PURE__ */ u(j, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ u("span", { className: $("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ u(j, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: n
    } = t;
    if (e)
      return /* @__PURE__ */ u("div", { className: $("card-header", n), children: /* @__PURE__ */ u(j, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: n,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ u("div", { className: $("card-footer", n), children: [
        /* @__PURE__ */ u(j, { content: e }, "footer"),
        ft.render(i, [t], { key: "foot-actions", className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ft.render(t.actions, [t], { key: "actions", className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const n = H({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ u(me, { ...n });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const n = typeof e == "function" ? e.call(this, t) : e;
      if (n)
        return n.className = $("item-avatar", n.className), /* @__PURE__ */ u(Hs, { ...n }, "avatar");
    }
  }
  _getClassName(t) {
    return ["card", t.className];
  }
  _getChildren(t) {
    return [
      this._renderActions(t),
      this._renderHeader(t),
      this._renderAvatar(t),
      this._renderHeading(t),
      this._renderContent(t),
      this._renderList(t),
      this._renderFooter(t),
      t.children
    ];
  }
}, ts = class extends me {
};
ts.NAME = "card-list";
ts.TAG = "div";
ts.ItemComponents = {
  ...me.ItemComponents,
  default: Zi,
  item: Zi
};
ts.defaultItemProps = {
  component: "div"
};
class Bl extends B {
}
Bl.NAME = "Card";
Bl.Component = Zi;
class Fl extends B {
}
Fl.NAME = "CardList";
Fl.Component = ts;
class Gr extends zt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Gr.NAME = "ContextMenu";
Gr.DEFAULT = {
  ...zt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function ru(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ u("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ u(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ u("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ u("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ u("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ u("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ u("div", { class: "more-vert" }) }) }) : null
        ] }),
        f.isPlainObject(l) && l.html ? /* @__PURE__ */ u(Ee, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ u("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const bi = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), Fo = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], on = "Dashboard:Block.cache:";
let Vl = class extends V {
  constructor(t) {
    super(t), this._ref = Y(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      Gr.show({
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
        const i = await f.fetch(e, [t, n], ({ url: r }) => ({ url: at(r, n), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, n);
        });
      } catch (i) {
        const r = /* @__PURE__ */ u("div", { class: "panel center text-danger p-5", children: [
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
    return !!f(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? hs.set(`${on}${n}:${t}`, e) : hs.session.set(`${on}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? hs.get(`${on}${e}:${t}`) : hs.session.get(`${on}${t}`);
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
        top: m = -1,
        fetch: p = e,
        menu: g = n,
        content: _,
        ...v
      } = o, [y, b] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: b,
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
      t.sort((l, c) => Fo(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => Fo(a[1], l[1]));
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
    this._draggable = new ti(t, {
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
        const { cellHeight: n, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / n)), m = this.state.dropping;
        m && m[0] === d && m[1] === h || this.setState({ dropping: [d, h, o, a] });
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
    if (n && bi(t, n))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && bi(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && bi(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
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
    this.loadNext(), f(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), f(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ u("div", { class: "dashboard", children: /* @__PURE__ */ u(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ u(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: n * r[1], width: `${100 * r[2] / i}%`, height: n * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: p } = l, [g, _, v, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ u(
              ru,
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
Vl.defaultProps = {
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
class Ul extends B {
}
Ul.NAME = "Dashboard";
Ul.Component = Vl;
var ae, le;
class Vo extends V {
  constructor(e) {
    super(e);
    F(this, ae, void 0);
    F(this, le, void 0);
    U(this, ae, 0), U(this, le, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (D(this, ae) && cancelAnimationFrame(D(this, ae)), U(this, ae, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), U(this, ae, 0);
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
    e && (U(this, le, typeof e == "string" ? document : e.current), D(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), D(this, le) && D(this, le).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: m } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ u(
      "div",
      {
        className: $("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ u(
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
ae = new WeakMap(), le = new WeakMap();
const Dn = /* @__PURE__ */ new Map(), Ln = [];
function jl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && Dn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Dn.set(e, s), t != null && t.buildIn && !Ln.includes(e) && Ln.push(e);
}
function ee(s, t) {
  jl(s, t);
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
function Kl(s) {
  return Dn.delete(s);
}
function ou(s) {
  if (typeof s == "string") {
    const t = Dn.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function ql(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = ou(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && ql(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function au(s = [], t = !0) {
  return t && Ln.length && s.unshift(...Ln), s != null && s.length ? ql([], s, /* @__PURE__ */ new Set()) : [];
}
function Gl() {
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
function lu(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function Uo(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function wi(s, t = !1) {
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
function cu(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = Uo(b, 0), b < 1 && (b = Math.round(b * n)), b), d = {
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
  if (e.forEach((b) => {
    const { colTypes: x, onAddCol: k } = b;
    x && Object.entries(x).forEach(([w, N]) => {
      y[w] || (y[w] = []), y[w].push(N);
    }), k && v.push(k);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: x = "", name: k } = b, w = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: x
    }, N = {
      name: k,
      type: x,
      setting: w,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, L = y[x];
    L && L.forEach((K) => {
      const tt = typeof K == "function" ? K.call(s, w) : K;
      tt && Object.assign(w, tt, b);
    });
    const { fixed: R, flex: W, minWidth: A = r, maxWidth: z = o } = w, G = Uo(w.width || i, i);
    N.flex = W === !0 ? 1 : typeof W == "number" ? W : 0, N.width = lu(G < 1 ? Math.round(G * n) : G, A, z), v.forEach((K) => K.call(s, N)), p.push(N), g[N.name] = N;
    const T = R ? R === "left" ? h : m : d;
    T.list.push(N), T.totalWidth += N.width, T.width = T.totalWidth, N.flex && T.flexList.push(N), typeof w.order == "number" && (_ = !0);
  }), _) {
    const b = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    p.sort(b), h.list.sort(b), d.list.sort(b), m.list.sort(b);
  }
  return wi(h, !0), wi(m, !0), d.widthSetting = n - h.width - m.width, wi(d), {
    list: p,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function hu({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var G;
  const p = {
    left: d ?? s.left,
    top: h ?? n.top,
    width: c ?? s.realWidth,
    height: e,
    ...o
  }, { align: g, border: _ } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...r
  }, y = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], b = ["dtable-cell-content", s.setting.cellClass], x = (G = n.data) == null ? void 0 : G[s.name], k = [a ?? x ?? ""], w = i ? i(k, { row: n, col: s, value: x }, Wt) : k, N = [], L = [], R = {}, W = {};
  let A = "div";
  w == null || w.forEach((T) => {
    if (typeof T == "object" && T && !ut(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const K = T.outer ? N : L;
      T.html ? K.push(/* @__PURE__ */ u("div", { className: $("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? p : v, T.style), T.className && (T.outer ? y : b).push(T.className), T.children && K.push(T.children), T.attrs && Object.assign(T.outer ? R : W, T.attrs)), T.tagName && !T.outer && (A = T.tagName);
    } else
      L.push(T);
  });
  const z = A;
  return /* @__PURE__ */ u(
    "div",
    {
      className: $(y),
      style: p,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...m,
      ...R,
      children: [
        L.length > 0 && /* @__PURE__ */ u(z, { className: $(b), style: v, ...W, children: L }),
        N
      ]
    }
  );
}
function Ci({
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
  CellComponent: d = hu,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(s) ? s : [s], p = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ u(
    "div",
    {
      className: $("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ u("div", { className: "dtable-cells-container", style: { left: -n, top: -i + p }, children: m.reduce((v, y, b) => {
        const x = t.length;
        return t.forEach((k, w) => {
          v.push(
            /* @__PURE__ */ u(
              d,
              {
                className: $(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  w ? "" : "is-first-in-row",
                  w === x - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: y,
                top: y.top - p,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function Yl({
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
  children: m
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ u(
    Ci,
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
  r.list.length && (g = /* @__PURE__ */ u(
    Ci,
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
  let _ = null;
  return o.list.length && (_ = /* @__PURE__ */ u(
    Ci,
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
  )), /* @__PURE__ */ u(
    "div",
    {
      className: $("dtable-block", c),
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
var Yr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, I = (s, t, e) => (Yr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), O = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, et = (s, t, e, n) => (Yr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), kt = (s, t, e) => (Yr(s, t, "access private method"), e), Oe, ps, Se, Yt, we, dt, Kt, jt, ms, _n, Rn, Ts, ne, gs, _s, Ji, Xl, Qi, Zl, tr, Jl, er, Ql, yn, sr, li, zn, nr, ir, rr, or, ys, vn, Xr, tc, Zr, ec, ar, sc;
let Jr = class extends V {
  constructor(t) {
    super(t), O(this, Ji), O(this, Qi), O(this, tr), O(this, er), O(this, yn), O(this, ys), O(this, Xr), O(this, Zr), O(this, ar), this.ref = Y(), O(this, Oe, 0), O(this, ps, void 0), O(this, Se, !1), O(this, Yt, void 0), O(this, we, void 0), O(this, dt, []), O(this, Kt, void 0), O(this, jt, /* @__PURE__ */ new Map()), O(this, ms, {}), O(this, _n, void 0), O(this, Rn, []), O(this, Ts, { in: !1 }), this.updateLayout = () => {
      I(this, Oe) && cancelAnimationFrame(I(this, Oe)), et(this, Oe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), et(this, Oe, 0);
      }));
    }, O(this, ne, (e, n) => {
      n = n || e.type;
      const i = I(this, jt).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), O(this, gs, (e) => {
      I(this, ne).call(this, e, `window_${e.type}`);
    }), O(this, _s, (e) => {
      I(this, ne).call(this, e, `document_${e.type}`);
    }), O(this, li, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return I(this, dt).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), O(this, zn, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), O(this, nr, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), I(this, dt).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of I(this, dt))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), O(this, ir, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), O(this, rr, (e) => {
      const n = f(e.target).closest(".dtable-cell");
      if (!n.length)
        return kt(this, ys, vn).call(this, !1);
      kt(this, ys, vn).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), O(this, or, () => {
      kt(this, ys, vn).call(this, !1);
    }), et(this, ps, t.id ?? `dtable-${Ja(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, et(this, we, Object.freeze(au(t.plugins))), I(this, we).forEach((e) => {
      var o;
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(I(this, ms), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = e.onCreate) == null || o.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = I(this, Kt)) == null ? void 0 : t.options) || I(this, Yt) || Gl();
  }
  get plugins() {
    return I(this, dt);
  }
  get layout() {
    return I(this, Kt);
  }
  get id() {
    return I(this, ps);
  }
  get data() {
    return I(this, ms);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return I(this, Ts);
  }
  componentWillReceiveProps() {
    et(this, Yt, void 0);
  }
  componentDidMount() {
    I(this, Se) ? this.forceUpdate() : kt(this, yn, sr).call(this), I(this, dt).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", I(this, nr)), this.on("keydown", I(this, ir));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", I(this, rr)), this.on("mouseleave", I(this, or))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), et(this, _n, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    I(this, dt).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    I(this, Se) ? kt(this, yn, sr).call(this) : I(this, dt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = I(this, _n)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of I(this, jt).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), I(this, gs)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), I(this, _s)) : t.removeEventListener(n, I(this, ne));
    I(this, dt).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), I(this, we).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), et(this, ms, {}), I(this, jt).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = I(this, jt).get(t);
    i ? i.push(e) : (I(this, jt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), I(this, gs)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), I(this, _s)) : (r = this.element) == null || r.addEventListener(t, I(this, ne)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = I(this, jt).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (I(this, jt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), I(this, gs)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), I(this, _s)) : (o = this.element) == null || o.removeEventListener(t, I(this, ne)));
  }
  emitCustomEvent(t, e) {
    I(this, ne).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: m } = t;
    if (d === "up" || d === "down")
      m = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      m = 0;
    else if (d === "bottom")
      m = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (h = i + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (p.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - o)), m !== i && (p.scrollTop = m)), Object.keys(p).length ? (this.setState(p, () => {
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
    if (!I(this, Yt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      et(this, Kt, void 0);
    else if (n === "options") {
      if (et(this, Yt, void 0), !I(this, Kt))
        return;
      et(this, Kt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = f(e).closest(".dtable-cell");
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
    return rt(I(this, Rn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = kt(this, ar, sc).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, m = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      const g = !t.rows.length;
      if (m.push(t.className, g ? "dtable-is-empty" : ""), c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      I(this, dt).forEach((_) => {
        var y;
        const v = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        v && (t = v);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), g && d ? (delete h.height, p.push(
        /* @__PURE__ */ u("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ u(j, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        kt(this, Ji, Xl).call(this, t),
        kt(this, Qi, Zl).call(this, t),
        kt(this, tr, Jl).call(this, t)
      ), t.scrollable && p.push(kt(this, er, Ql).call(this, t))), I(this, dt).forEach((_) => {
        var y;
        const v = (y = _.onRender) == null ? void 0 : y.call(this, t);
        v && (v.style && Object.assign(h, v.style), v.className && m.push(v.className), v.children && p.push(v.children));
      });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        id: I(this, ps),
        className: $(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
Oe = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
dt = /* @__PURE__ */ new WeakMap();
Kt = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
ms = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ts = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
Ji = /* @__PURE__ */ new WeakSet();
Xl = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ u(
      Yl,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: I(this, li),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    Da,
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
Qi = /* @__PURE__ */ new WeakSet();
Zl = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ u(
    Yl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: I(this, li),
      children: l
    },
    "body"
  );
};
tr = /* @__PURE__ */ new WeakSet();
Jl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    Da,
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
er = /* @__PURE__ */ new WeakSet();
Ql = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ u(
      Vo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: I(this, zn),
        left: n,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ u("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ u("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ u(
      Vo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: I(this, zn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
yn = /* @__PURE__ */ new WeakSet();
sr = function() {
  var s;
  et(this, Se, !1), (s = this.options.afterRender) == null || s.call(this), I(this, dt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
li = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
nr = /* @__PURE__ */ new WeakMap();
ir = /* @__PURE__ */ new WeakMap();
rr = /* @__PURE__ */ new WeakMap();
or = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakSet();
vn = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = f(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = I(this, Ts);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), et(this, Ts, i);
};
Xr = /* @__PURE__ */ new WeakSet();
tc = function() {
  if (I(this, Yt))
    return !1;
  const t = { ...Gl(), ...I(this, we).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return et(this, Yt, t), et(this, dt, I(this, we).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), et(this, Rn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Zr = /* @__PURE__ */ new WeakSet();
ec = function() {
  var R, W;
  const { plugins: s } = this;
  let t = I(this, Yt);
  const e = {
    flex: /* @__PURE__ */ u("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ u("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((A) => {
    var G;
    const z = (G = A.beforeLayout) == null ? void 0 : G.call(this, t);
    z && (t = { ...t, ...z }), Object.assign(e, A.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: A } = this;
    if (A)
      i = A.clientWidth;
    else {
      et(this, Se, !0);
      return;
    }
  }
  const r = cu(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (A, z, G) => {
    var K, tt;
    const T = { data: G ?? { [a]: A }, id: A, index: c.length, top: 0 };
    if (G || (T.lazy = !0), c.push(T), ((K = t.onAddRow) == null ? void 0 : K.call(this, T, z)) !== !1) {
      for (const _t of s)
        if (((tt = _t.onAddRow) == null ? void 0 : tt.call(this, T, z)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let A = 0; A < o; A++)
      d(`${A}`, A);
  else
    Array.isArray(o) && o.forEach((A, z) => {
      typeof A == "object" ? d(`${A[a] ?? ""}`, z, A) : d(`${A ?? ""}`, z);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const A = t.onAddRows.call(this, h);
    A && (h = A);
  }
  for (const A of s) {
    const z = (R = A.onAddRows) == null ? void 0 : R.call(this, h);
    z && (h = z);
  }
  h.forEach((A, z) => {
    m[A.id] = A, A.index = z, A.top = A.index * l;
  });
  const { header: p, footer: g } = t, _ = p ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let y = t.height, b = 0;
  const x = h.length * l, k = _ + v + x;
  if (typeof y == "function" && (y = y.call(this, k)), y === "auto")
    b = k;
  else if (typeof y == "object")
    b = Math.min(y.max, Math.max(y.min, k));
  else if (y === "100%") {
    const { parent: A } = this;
    if (A)
      b = A.clientHeight;
    else {
      b = 0, et(this, Se, !0);
      return;
    }
  } else
    b = y;
  const w = b - _ - v, N = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: w,
    rowsHeightTotal: x,
    header: p,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: r
  }, L = (W = t.onLayout) == null ? void 0 : W.call(this, N);
  L && Object.assign(N, L), s.forEach((A) => {
    if (A.onLayout) {
      const z = A.onLayout.call(this, N);
      z && Object.assign(N, z);
    }
  }), et(this, Kt, N);
};
ar = /* @__PURE__ */ new WeakSet();
sc = function() {
  (kt(this, Xr, tc).call(this) || !I(this, Kt)) && kt(this, Zr, ec).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), m = [], { rowDataGetter: p } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
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
Jr.addPlugin = jl;
Jr.removePlugin = Kl;
class nc extends V {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ u("div", { class: $("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ u("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
nc.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function ic(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ u("a", { href: at(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Qr(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : at(s, e);
}
function rc(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), ct(e, s, n ?? e))) : n ?? e;
}
function oc(s, t) {
  const { link: e } = t.col.setting, n = ic(e, t, s[0]);
  return n && (s[0] = n), s;
}
function ac(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Qr(e, t, s[0])), s;
}
function lc(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function cc(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = rc(n, t, s[0], i), s;
}
function lr(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Qr(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const du = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return lr(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ u(
          nc,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ u(
          Mr,
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
    if (e && (s = cc(s, t, e)), s = lc(s, t), s = ac(s, t), n ? s = lr(s, t) : s = oc(s, t), i) {
      let r = s[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = at(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, uu = ee(du, { buildIn: !0 }), fu = {
  html: { component: Ee }
}, pu = {
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
        component: Ee,
        props: { html: at(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(fu[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && f.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ u(h, { ...d }) };
    }), s;
  }
}, mu = ee(pu);
function gu(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !hc.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function _u(s) {
  return this.state.checkedRows[s] ?? !1;
}
function hc() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function yu() {
  return Object.keys(this.state.checkedRows);
}
function vu(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function jo(s, t, e = !1) {
  return /* @__PURE__ */ u(Jn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const Ko = 'input[type="checkbox"],.dtable-checkbox', bu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: jo
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
    toggleCheckRows: gu,
    isRowChecked: _u,
    isAllRowChecked: hc,
    getChecks: yu,
    toggleCheckable: vu
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
        /* @__PURE__ */ u("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: jo(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ u("div", { children: r.join(", ") })
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
    const e = t.closest(Ko);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = f(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Ko).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, wu = ee(bu);
var dc = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(dc || {});
function Wn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Wn.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Wn.call(this, t.parent).level + 1 : 0, t;
}
function Cu(s) {
  return s !== void 0 ? Wn.call(this, s) : this.data.nestedMap;
}
function xu(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !uc.call(this)), t) {
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
function uc() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function fc(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = fc(s, t, o.children, n + 1)));
  }
  return t;
}
function pc(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, pc(s, r, e, n);
  }), i;
}
function mc(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && mc(s, r.parent, e, n, i);
}
const ku = {
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
        const o = pc(this, i, r, n);
        o != null && o.parent && mc(this, o.parent, r, n, e);
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
    getNestedInfo: Cu,
    toggleRow: xu,
    isAllCollapsed: uc,
    getNestedRowInfo: Wn
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
    ), fc(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ u("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ u("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ u("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
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
}, $u = ee(ku);
function xi(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: $(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ u(Hs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    s[0] = /* @__PURE__ */ u("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      s[0],
      /* @__PURE__ */ u("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ u("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ u("span", { children: d })
    ] }));
  return s;
}
const Su = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: xi
    },
    avatarBtn: {
      onRenderCell: xi
    },
    avatarName: {
      onRenderCell: xi
    }
  }
}, Nu = ee(Su, { buildIn: !0 }), Eu = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, r = /* @__PURE__ */ u("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        s[0] = /* @__PURE__ */ u("a", { className: "dtable-sort-link", href: at(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          r
        ] });
      } else
        s.push(r);
    }
    return s;
  }
}, Tu = ee(Eu, { buildIn: !0 }), ki = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Mu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    ki(t.left.list), ki(t.center.list), ki(t.right.list);
  }
}, Iu = ee(Mu), Au = {
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
      l.forEach((m, p) => {
        const { index: g } = m, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const v = t.call(this, { row: c, col: m });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - p), b = Math.min(v.rowSpan || 1, i.length - d);
        if (y <= 1 && b <= 1)
          return;
        let x = 0;
        for (let k = 0; k < y; k++) {
          x += l[p + k].realWidth;
          for (let w = 0; w < b; w++) {
            const N = `C${g + k}R${h + w}`;
            N !== _ && n.add(N);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: b,
          width: x,
          height: o * b
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
}, Pu = ee(Au), Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: dc,
  avatar: Nu,
  cellspan: Pu,
  checkable: wu,
  custom: mu,
  group: Iu,
  nested: $u,
  renderDatetime: rc,
  renderDatetimeCell: cc,
  renderFormat: Qr,
  renderFormatCell: ac,
  renderHtmlCell: lr,
  renderLink: ic,
  renderLinkCell: oc,
  renderMapCell: lc,
  rich: uu,
  sortType: Tu
}, Symbol.toStringTag, { value: "Module" }));
class Gs extends B {
}
Gs.NAME = "DTable";
Gs.Component = Jr;
Gs.definePlugin = ee;
Gs.removePlugin = Kl;
Gs.plugins = Du;
class to extends Z {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      minWidth: n,
      maxWidth: i,
      color: r
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-col-color": r,
        "--kanban-col-width": e,
        minWidth: n,
        maxWidth: i
      }
    });
  }
  _getChildren(t) {
    const {
      prefix: e,
      prefixClass: n,
      title: i,
      titleClass: r,
      subtitle: o,
      subtitleClass: a,
      icon: l,
      trailingIcon: c,
      actions: d,
      subCols: h
    } = t;
    return [
      /* @__PURE__ */ u("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ u("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ u(J, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ u("span", { className: $("as-prefix", n), children: /* @__PURE__ */ u(j, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ u("span", { className: $("as-title", r), children: /* @__PURE__ */ u(j, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ u("span", { className: $("as-subtitle", a), children: /* @__PURE__ */ u(j, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ u(J, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        ft.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ u("div", { className: "kanban-header-sub-cols", children: h.map((m, p) => /* @__PURE__ */ u(to, { index: p, ...m }, m.name)) }, "subs") : null
    ];
  }
}
function Lu(s) {
  const { cols: t } = s;
  return /* @__PURE__ */ u("div", { className: "kanban-header", children: [
    /* @__PURE__ */ u("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ u("div", { className: "kanban-header-cols", children: t.map((e, n) => /* @__PURE__ */ u(to, { index: n, ...e }, e.name)) }, "cols")
  ] });
}
class gc extends V {
  constructor() {
    super(...arguments), this._listRef = Y(), this._renderItem = (t) => {
      const { itemRender: e, lane: n, name: i } = this.props, r = e.call(this, { item: t, lane: n, col: i });
      return typeof r == "object" && r.html && f.extend(r, {}), r;
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      f(this._listRef.current).trigger("laneColResize", e[0]);
    }), this._ob.observe(t));
  }
  componentWillUnmount() {
    var t;
    (t = this._ob) == null || t.disconnect();
  }
  render(t) {
    const { items: e } = t, {
      width: n,
      minWidth: i,
      maxWidth: r,
      color: o,
      content: a,
      contentClass: l,
      itemRender: c,
      watchSize: d
    } = t;
    return /* @__PURE__ */ u("div", { className: "kanban-lane-col", style: {
      "--kanban-col-color": o,
      "--kanban-col-width": n,
      minWidth: i,
      maxWidth: r
    }, children: [
      a ? /* @__PURE__ */ u("div", { className: $("kanban-col-content", l), children: /* @__PURE__ */ u(j, { content: a, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ u(
        ts,
        {
          forwardRef: d ? this._listRef : void 0,
          className: "kanban-items scrollbar-thin scrollbar-hover",
          itemProps: { className: "kanban-item" },
          items: e,
          itemRender: c ? this._renderItem : void 0
        },
        "list"
      )
    ] });
  }
}
gc.defaultProps = {
  watchSize: !0
};
class Ru extends Z {
  _getClassName(t) {
    return ["kanban-lane", t.className, t.index ? "" : "is-first"];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: n,
      maxHeight: i,
      color: r
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: e,
        minHeight: n,
        maxHeight: i
      }
    });
  }
  _renderCol(t, e, n, i) {
    return /* @__PURE__ */ u(gc, { itemRender: n, lane: t, items: i[e.name], ...e }, e.name);
  }
  _getChildren(t) {
    const {
      name: e,
      title: n,
      titleClass: i,
      actions: r,
      cols: o,
      items: a = {},
      itemRender: l
    } = t;
    return [
      /* @__PURE__ */ u("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ u("div", { className: $("kanban-lane-title", i), children: /* @__PURE__ */ u(j, { content: n }) }, "title"),
        ft.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ u("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function zu(s) {
  const { lanes: t, cols: e, items: n = {}, itemRender: i } = s;
  return /* @__PURE__ */ u("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ u(Ru, { index: o, cols: e, items: n[r.name], itemRender: i, ...r }, r.name)) });
}
const vt = 12, Wu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function qo(s, t) {
  return t === "top" ? { x: s.x + s.width / 2, y: s.y } : t === "left" ? { x: s.x, y: s.y + s.height / 2 } : t === "right" ? { x: s.x + s.width, y: s.y + s.height / 2 } : { x: s.x + s.width / 2, y: s.y + s.height };
}
function Ou(s, t) {
  return (s.x - t.x) * (s.x - t.x) + (s.y - t.y) * (s.y - t.y);
}
function Hu(s, t, e, n) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = n ? [n] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = qo(s, c), m = qo(t, d), p = Ou(h, m) * (Wu[c] === d ? 1 : 2);
      p < o && (o = p, e = c, n = d, a = h, l = m);
    });
  }), {
    fromSide: e,
    toSide: n,
    fromPos: a,
    toPos: l
  };
}
function Bu(s, t) {
  return { x: (s.x + t.x) / 2, y: (s.y + t.y) / 2 };
}
function _c(s, t) {
  return {
    x: Math.min(s.x, t.x),
    y: Math.min(s.y, t.y),
    width: Math.abs(s.x - t.x),
    height: Math.abs(s.y - t.y)
  };
}
function Go(s, t, e) {
  const n = {
    id: `marker-${t}-${e}-${s}`,
    orient: "auto",
    markerUnits: "strokeWidth",
    refX: t === "start" ? 0 : 6,
    refY: 3,
    markerWidth: 6,
    markerHeight: 6,
    path: {
      d: "",
      fill: "currentColor"
    }
  };
  return s === "arrow" ? t === "start" ? n.path.d = "M6,0 L6,6 L0,3 z" : n.path.d = "M0,0 L0,6 L6,3 z" : s === "dot" ? n.path.d = "M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0" : s === "square" ? n.path.d = "M0,0 L0,6 L6,6 L6,0 z" : s === "diamond" && (n.path.d = "M3,0 L6,3 L3,6 L0,3 z"), n;
}
function Fu(s, t, e, n, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = _c(s, t), d = vt - o, h = vt - a;
  if (i === "curve") {
    const m = l * 0.7, p = c * 0.7, g = r * 2, _ = {
      a1x: s.x + (e === "left" ? -g : e === "right" ? g : 0),
      a1y: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      ax: s.x + (e === "left" ? -m : e === "right" ? m : 0),
      ay: s.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      bx: t.x + (n === "left" ? -(m - g) : n === "right" ? m - g : 0),
      by: t.y + (n === "top" ? -(p - g) : n === "bottom" ? p - g : 0),
      b1x: t.x + (n === "left" ? -g : n === "right" ? g : 0),
      b1y: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const m = Bu(s, t), p = l / 2, g = c / 2, _ = {
      ax: s.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (n === "left" ? -p : n === "right" ? p : 0),
      by: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.ax + d} ${_.ay + h} L ${m.x + d} ${m.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${s.x + d} ${s.y + h} L ${t.x + d} ${t.y + h}`;
}
function Vu(s) {
  const { fromRect: t, toRect: e } = s, n = `${s.from}-${s.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = Hu(i, r), d = _c(l, c), { x: h, y: m, width: p, height: g } = d;
  l.x += vt - h, l.y += vt - m, c.x += vt - h, c.y += vt - m;
  const {
    weight: _ = 2,
    fromPoint: v,
    toPoint: y = "arrow"
  } = s, b = {
    left: `${0 - vt}px`,
    top: `${0 - vt}px`,
    width: `${p + 2 * vt}px`,
    height: `${g + 2 * vt}px`
  }, x = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": v && v !== "none" ? `url(#marker-start-${n}-${v})` : void 0,
    "marker-end": y && y !== "none" ? `url(#marker-end-${n}-${y})` : void 0,
    d: Fu(l, c, o, a, s.shape, _)
  }, k = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: x.d,
    class: "opacity-0"
  }, w = {
    width: p + 2 * vt,
    height: g + 2 * vt
  }, N = [];
  return s.lineStyle === "dashed" ? x["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : s.lineStyle === "dotted" && (x["stroke-dasharray"] = `${_} ${_}`), v && v !== "none" && N.push(Go(v, "start", n)), y && y !== "none" && N.push(Go(y, "end", n)), {
    x: h,
    y: m,
    width: p,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: b,
    svgPathProps: x,
    svgPathBackProps: k,
    svgProps: w,
    markers: N,
    padding: vt
  };
}
function Uu(s) {
  const { text: t, textSize: e } = s, { x: n, y: i, padding: r, width: o, height: a, svgProps: l, markers: c, svgPathProps: d, svgPathBackProps: h, fromPos: m } = Vu(s);
  return /* @__PURE__ */ u("div", { className: "kanban-link", style: { left: n, top: i, width: o, height: a }, children: [
    /* @__PURE__ */ u("svg", { ...l, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
      c.length ? /* @__PURE__ */ u("defs", { children: c.map(({ path: p, id: g, ..._ }) => /* @__PURE__ */ u("marker", { ..._, id: g, children: /* @__PURE__ */ u("path", { ...p }) }, g)) }) : null,
      /* @__PURE__ */ u("path", { className: "pointer-events-auto", ...h }),
      /* @__PURE__ */ u("path", { ...d })
    ] }),
    /* @__PURE__ */ u("div", { className: "kanban-link-start-point", style: { left: m.x - r, top: m.y - r } }),
    t ? /* @__PURE__ */ u("div", { className: "kanban-link-text", style: { fontSize: `${e || 12}px` }, children: t }) : null
  ] });
}
class ju extends V {
  constructor() {
    super(...arguments), this._ref = Y(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    f(t).on("laneColResize.kanban.link", (n, i) => {
      console.log("> laneColResize", n, i), this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && f(t).off(".kanban.link"), this._raf && cancelAnimationFrame(this._raf);
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._idSet], e = f(this._kanban).find(".kanban-body"), { top: n, left: i } = this._kanban.getBoundingClientRect(), r = {};
    t.forEach((o) => {
      const a = e.find(`.kanban-item[z-key="${o}"]`)[0];
      if (a) {
        const { top: l, left: c, bottom: d, right: h } = a.getBoundingClientRect();
        r[o] = { top: l - n, left: c - i, bottom: d - n, right: h - i };
      }
    }), this.setState({ layout: r });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: n, to: i } = t, r = e[n], o = e[i];
    return this._idSet.add(n), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ u(Uu, { ...t, fromRect: r, toRect: o }, `${n}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ u("div", { className: "kanban-links", ref: this._ref, children: e.map((n) => this._renderLink(n)) });
  }
}
function Ku(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getCol: n, colProps: i } = t;
  let r = !1;
  const o = [], a = /* @__PURE__ */ new Map();
  return s = s.reduce((l, c, d) => {
    if (i && (c = H({}, i, c)), n) {
      const h = n.call(this, c);
      h !== !1 && (c = h || c);
    }
    return c.deleted || (typeof c.width == "function" && (c = H({}, c, {
      width: c.width.call(this, c)
    })), typeof c.order == "number" ? r = !0 : c.order = d, e == null || e.call(this, c), c.parentName !== void 0 ? o.push(c) : (a.set(c.name, c), l.push(c))), l;
  }, []), o.forEach((l) => {
    const c = a.get(l.parentName);
    c && (c.subCols = vs(c.subCols, [l], "name"));
  }), r && (s.sort(On), [...a.values()].forEach((l) => {
    l.subCols && l.subCols.sort(On);
  })), s;
}
function qu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getLane: n, laneProps: i } = t;
  let r = !1;
  return s = s.reduce((o, a, l) => {
    if (i && (a = H({}, i, a)), n) {
      const c = n.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.height == "function" && (a = H({}, a, {
      height: a.height.call(this, a)
    })), typeof a.order == "number" ? r = !0 : a.order = l, a.color || (a = {
      color: `hsl(${43 * za(a.name) % 360}deg 40% 50%)`,
      ...a
    }), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && s.sort(On), s;
}
function On(s, t) {
  return s.order - t.order;
}
function vs(s, t, e) {
  if (!s)
    return t ? [...t] : [];
  const n = [...s];
  if (t) {
    let i = 0;
    const r = n.reduce((o, a, l) => (o.set(a[e], l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
    t.forEach((o) => {
      const a = o[e];
      r.has(a) ? n[r.get(a)] = {
        ...n[r.get(a)],
        ...o
      } : n.push({
        order: i++,
        ...o
      });
    });
  }
  return n;
}
function Yo(s, t, e) {
  const n = vs(s.lanes, t.lanes, e), i = vs(s.cols, t.cols, e), r = vs(s.links, t.links, e), o = t.items || {}, a = Object.keys(o).reduce((l, c) => {
    const d = o[c];
    return l[c] = { ...l[c] }, Object.keys(d).forEach((h) => {
      l[c][h] = vs(l[c][h], d[h], e);
    }), l;
  }, { ...s.items });
  return { lanes: n, cols: i, items: a, links: r };
}
let ci = class extends Z {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
    const { draggable: t } = this.props;
    t && this._ref.current && (this._draggable = new ti(this._ref.current, f.extend({
      selector: ".kanban-item"
    }, typeof t == "object" ? t : null)));
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy();
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = await Gn(t, [this], { throws: !0 });
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !go(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this._data.cols.find((e) => e.name === t);
  }
  getLane(t) {
    return this._data.lanes.find((e) => e.name === t);
  }
  getData() {
    return this._data;
  }
  update(t) {
    return this.changeState((e) => ({
      changes: Yo(e.changes || {}, t, this.props.itemKey || "id")
    }));
  }
  addItem(t, e, n) {
    return this.updateItem(t, e, n);
  }
  updateItem(t, e, n) {
    return this.update({
      items: {
        [t]: {
          [e]: Array.isArray(n) ? n : [n]
        }
      }
    });
  }
  deleteItem(t, e, n) {
    return this.updateItem(t, e, Array.isArray(n) ? n.map((i) => ({ [this.props.itemKey || "id"]: i, deleted: !0 })) : { [this.props.itemKey || "id"]: n, deleted: !0 });
  }
  updateLane(t) {
    return this.update({
      lanes: Array.isArray(t) ? t : [t]
    });
  }
  addLane(t) {
    return this.updateLane(t);
  }
  deleteLane(t) {
    return this.updateLane(Array.isArray(t) ? t.map((e) => ({ name: e, deleted: !0 })) : { name: t, deleted: !0 });
  }
  updateCol(t) {
    return this.update({
      cols: Array.isArray(t) ? t : [t]
    });
  }
  addCol(t) {
    return this.updateCol(t);
  }
  deleteCol(t) {
    return this.updateCol(Array.isArray(t) ? t.map((e) => ({ name: e, deleted: !0 })) : { name: t, deleted: !0 });
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData(t) {
    const { data: e, getItem: n, itemProps: i, itemKey: r = "id" } = t, { data: o, changes: a } = this.state;
    let l = (o || go(e) ? o : e) || {};
    a && (l = Yo(l, a, r));
    let c = !1;
    const { items: d = {} } = l, h = /* @__PURE__ */ new Set(), m = Ku.call(this, l.cols, t, (_) => {
      _.parentName !== void 0 && (c = !0);
    }), p = qu.call(this, l.lanes, t, (_) => {
      const v = d[_.name];
      v && m.forEach((y) => {
        let b = v[y.name];
        if (b) {
          let x = !1;
          b = b.reduce((k, w) => {
            i && (w = H({}, i, w));
            const N = (n == null ? void 0 : n.call(this, { col: y.name, lane: _.name, item: w })) ?? w;
            return N !== !1 && !N.deleted && (typeof N.order == "number" ? x = !0 : N.order = k.length - 1, k.push(N), h.add(String(N[r]))), k;
          }, []), x && b.sort(On), v[y.name] = b;
        }
      });
    });
    let { links: g = [] } = l;
    return g = g.reduce((_, v) => (!v.deleted && h.has(String(v.from)) && h.has(String(v.to)) && _.push(v), _), []), this._data = { cols: m, lanes: p, items: d, links: g, hasSubCols: c }, this._data;
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this._data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": t.laneNameWidth,
        "--kanban-cols-gap": t.colsGap ? ko(t.colsGap) : void 0,
        "--kanban-lanes-gap": t.lanesGap ? ko(t.lanesGap) : void 0
      }
    });
  }
  _getChildren(t) {
    const { cols: e, lanes: n, items: i, links: r } = this._getData(t);
    return console.log("> Kanban.render", { cols: e, lanes: n, items: i, links: r }), [
      /* @__PURE__ */ u(Lu, { cols: e }, "header"),
      /* @__PURE__ */ u(
        zu,
        {
          itemRender: t.itemRender,
          cols: e,
          lanes: n,
          items: i
        },
        "body"
      ),
      r != null && r.length ? /* @__PURE__ */ u(ju, { links: r }, "links") : null,
      t.children
    ];
  }
};
ci.defaultProps = {
  draggable: !0,
  sticky: !0,
  itemKey: "id"
};
class Gu extends ci {
  constructor(t) {
    super(t), this._handleClickHeading = (e) => {
      f(e.target).closest("a,.btn,button").not(".kanban-group-toggle").length || this.setState((n) => ({ collapsed: !n.collapsed }));
    }, this.state = {
      ...this.state,
      collapsed: t.collapsed
    };
  }
  render(t) {
    const { heading: e, toggleFromHeading: n } = t, { collapsed: i } = this.state, r = H({ className: "kanban-heading", onClick: n ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e);
    return /* @__PURE__ */ u("div", { className: $("kanban-group", i ? "is-collapsed" : "is-expanded", e ? "has-heading" : ""), children: [
      e && /* @__PURE__ */ u(En, { ...r }, "heading"),
      i ? null : super.render(t)
    ] });
  }
}
let yc = class extends Z {
  constructor(t) {
    super(t), this.state = {}, this._ref = Y(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new Ir(this._ref.current, f.extend({ selector: "self", move: "scroll", onMoveStart: (n, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return n.clientY < r && n.clientY > r - 20 || n.clientX < o && n.clientX > o - 20 ? !1 : !f(n.target).closest("a,.btn,.state,.kanban-item").length;
    } }, typeof t == "object" ? t : null))), e) {
      const n = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? f(e) : f(this._ref.current).parent()).each((r, o) => {
        n.observe(o);
      }), this._rob = n;
    }
    console.timeEnd("kanbanList.init");
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(t)) == null ? void 0 : e.current;
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = f(t), n = e.width(), i = e.height();
    this.setState({ width: n, height: i });
  }
  _tryUpdateLayout() {
    this._layoutTimer && cancelAnimationFrame(this._layoutTimer), this._layoutTimer = requestAnimationFrame(() => {
      this.updateLayout(), this._layoutTimer = 0;
    });
  }
  _getClassName(t) {
    return ["kanban-list", t.className, t.sticky ? "has-sticky" : "", t.moveable ? "is-moveable" : "", t.scrollbarHover ? "scrollbar-hover" : ""];
  }
  _getProps(t) {
    const { width: e, height: n } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof n == "function" ? n.call(this) : n, { width: o, height: a } = this.state ?? {};
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || n}px`
      }
    });
  }
  _getChildren(t) {
    const { items: e = [] } = t;
    return [
      ...e.map((n, i) => {
        const r = String(n.key ?? i);
        let o = this._kanbanRefs.get(r);
        o || (o = Y(), this._kanbanRefs.set(r, o));
        const a = n.heading !== void 0 || n.type === "group" ? Gu : ci;
        return /* @__PURE__ */ u(a, { ref: o, sticky: t.sticky, ...n }, r);
      }),
      t.children
    ];
  }
};
yc.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class eo extends B {
}
eo.NAME = "Kanban";
eo.replace = !0;
eo.Component = ci;
class so extends B {
}
so.NAME = "KanbanList";
so.replace = !0;
so.Component = yc;
var vc = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Xo = (s, t, e) => (vc(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Yu = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Zo = (s, t, e, n) => (vc(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), He;
const Xu = "nav", bn = '[data-toggle="tab"]', Zu = "active";
class bc extends mt {
  constructor() {
    super(...arguments), Yu(this, He, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(bn);
    let i = t ? f(t).closest(bn) : n.filter(`.${Zu}`);
    if (!i.length && (i = e.find(bn).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = f(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Xo(this, He) && clearTimeout(Xo(this, He)), Zo(this, He, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Zo(this, He, 0);
    }, 10)));
  }
}
He = /* @__PURE__ */ new WeakMap();
bc.NAME = "Tabs";
f(document).on("click.tabs.zui", bn, (s) => {
  s.preventDefault();
  const t = f(s.target), e = t.closest(`.${Xu}`);
  e.length && bc.ensure(e).active(t);
});
f(() => {
  f(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  f as $,
  ya as Ajax,
  Qa as Avatar,
  tl as BtnGroup,
  Bl as Card,
  Fl as CardList,
  pl as ColorPicker,
  $r as CommonList,
  mt as Component,
  B as ComponentFromReact,
  Gr as ContextMenu,
  j as CustomContent,
  Da as CustomRender,
  Gs as DTable,
  Ul as Dashboard,
  xl as DatePicker,
  $l as DatetimePicker,
  ti as Draggable,
  zt as Dropdown,
  Z as HElement,
  Ee as HtmlContent,
  J as Icon,
  eo as Kanban,
  so as KanbanList,
  Oa as List,
  Fa as Menu,
  hf as Messager,
  Ud as Modal,
  Ie as ModalBase,
  Xi as ModalTrigger,
  Ir as Moveable,
  Tl as Nav,
  Ha as NestedList,
  Ml as Pager,
  Il as Pick,
  Dl as Picker,
  $t as Popover,
  Ur as PopoverPanel,
  Ll as Popovers,
  La as Portal,
  Ga as ProgressCircle,
  V as ReactComponent,
  Rl as SearchBox,
  Va as SearchMenu,
  Ol as SearchTree,
  uf as Sortable,
  nd as Split,
  Ns as TIME_DAY,
  bc as Tabs,
  Cl as TimePicker,
  zl as Toolbar,
  Gt as Tooltip,
  Wl as Tree,
  qr as Upload,
  Hl as UploadImgs,
  Ad as addDate,
  f as cash,
  $ as classes,
  cs as componentsMap,
  _h as convertBytes,
  Th as create,
  Q as createDate,
  Rh as createPortal,
  Y as createRef,
  mh as deepGet,
  ph as deepGetPath,
  Qu as defineFn,
  kn as delay,
  Mh as disableScroll,
  tf as dom,
  Gn as fetchData,
  gh as formatBytes,
  ct as formatDate,
  vf as formatDateSpan,
  at as formatString,
  va as getClassList,
  Nn as getComponent,
  Ah as getReactComponent,
  _o as getZData,
  Wt as h,
  rt as i18n,
  go as isFetchSetting,
  Us as isSameDay,
  ml as isSameMonth,
  mf as isSameWeek,
  Ri as isSameYear,
  gf as isToday,
  yf as isTomorrow,
  ut as isValidElement,
  _f as isYesterday,
  H as mergeProps,
  he as nextGid,
  Ih as parseSize,
  Pa as reactComponents,
  De as registerReactComponent,
  Ia as removeUndefinedProps,
  xs as render,
  Ei as renderCustomContent,
  Dh as renderCustomResult,
  yo as setZData,
  xh as shareData,
  hs as store,
  ba as storeData,
  wa as takeData,
  ko as toCssSize
};
//# sourceMappingURL=zui.js.map
