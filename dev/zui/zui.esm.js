var cn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var nt = (s, t, e) => (cn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), at = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, gt = (s, t, e, n) => (cn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var hn = (s, t, e) => (cn(s, t, "access private method"), e);
const lu = "3.0.0-alpha.4", cu = 1712629418471, Rt = document, ys = window, Cr = Rt.documentElement, le = Rt.createElement.bind(Rt), Sr = le("div"), un = le("table"), Ma = le("tbody"), Wi = le("tr"), { isArray: Ws, prototype: kr } = Array, { concat: Aa, filter: Kn, indexOf: xr, map: Tr, push: Ia, slice: Nr, some: qn, splice: Pa } = kr, Ra = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Da = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, La = /<.+>/, Fa = /^\w+$/;
function Gn(s, t) {
  const e = za(t);
  return !s || !e && !oe(t) && !Y(t) ? [] : !e && Da.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Fa.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class Hs {
  constructor(t, e) {
    if (!t)
      return;
    if (Cn(t))
      return t;
    let n = t;
    if (et(t)) {
      const i = e || Rt;
      if (n = Ra.test(t) && oe(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : La.test(t) ? Mr(t) : Cn(i) ? i.find(t) : et(i) ? d(i).find(t) : Gn(t, i), !n)
        return;
    } else if (ce(t))
      return this.ready(t);
    (n.nodeType || n === ys) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new Hs(t, e);
  }
}
const C = Hs.prototype, d = C.init;
d.fn = d.prototype = C;
C.length = 0;
C.splice = Pa;
typeof Symbol == "function" && (C[Symbol.iterator] = kr[Symbol.iterator]);
function Cn(s) {
  return s instanceof Hs;
}
function ye(s) {
  return !!s && s === s.window;
}
function oe(s) {
  return !!s && s.nodeType === 9;
}
function za(s) {
  return !!s && s.nodeType === 11;
}
function Y(s) {
  return !!s && s.nodeType === 1;
}
function Oa(s) {
  return !!s && s.nodeType === 3;
}
function Wa(s) {
  return typeof s == "boolean";
}
function ce(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function ft(s) {
  return s === void 0;
}
function Oe(s) {
  return s === null;
}
function Er(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Yn(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
d.isWindow = ye;
d.isFunction = ce;
d.isArray = Ws;
d.isNumeric = Er;
d.isPlainObject = Yn;
function Z(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Yn(s)) {
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
d.each = Z;
C.each = function(s) {
  return Z(this, s);
};
C.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function vs(...s) {
  const t = Wa(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return vs(t, d, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (Ws(r[o]) || Yn(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), vs(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
d.extend = vs;
C.extend = function(s) {
  return vs(C, s);
};
const Ha = /\S+/g;
function js(s) {
  return et(s) ? s.match(Ha) || [] : [];
}
C.toggleClass = function(s, t) {
  const e = js(s), n = !ft(t);
  return this.each((i, r) => {
    Y(r) && Z(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(s) {
  return this.toggleClass(s, !0);
};
C.removeAttr = function(s) {
  const t = js(s);
  return this.each((e, n) => {
    Y(n) && Z(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function ja(s, t) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return Oe(e) ? void 0 : e;
      }
      return ft(t) ? this : Oe(t) ? this.removeAttr(s) : this.each((e, n) => {
        Y(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
C.attr = ja;
C.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
C.hasClass = function(s) {
  return !!s && qn.call(this, (t) => Y(t) && t.classList.contains(s));
};
C.get = function(s) {
  return ft(s) ? Nr.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
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
function Ba(s) {
  return ft(s) ? this.get().map((t) => Y(t) || Oa(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Y(e) && (e.textContent = s);
  });
}
C.text = Ba;
function Dt(s, t, e) {
  if (!Y(s))
    return;
  const n = ys.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function kt(s, t) {
  return parseInt(Dt(s, t), 10) || 0;
}
function Hi(s, t) {
  return kt(s, `border${t ? "Left" : "Top"}Width`) + kt(s, `padding${t ? "Left" : "Top"}`) + kt(s, `padding${t ? "Right" : "Bottom"}`) + kt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const dn = {};
function Va(s) {
  if (dn[s])
    return dn[s];
  const t = le(s);
  Rt.body.insertBefore(t, null);
  const e = Dt(t, "display");
  return Rt.body.removeChild(t), dn[s] = e !== "none" ? e : "block";
}
function ji(s) {
  return Dt(s, "display") === "none";
}
function $r(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function Bs(s) {
  return et(s) ? (t, e) => $r(e, s) : ce(s) ? s : Cn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
C.filter = function(s) {
  const t = Bs(s);
  return d(Kn.call(this, (e, n) => t.call(e, n, e)));
};
function Qt(s, t) {
  return t ? s.filter(t) : s;
}
C.detach = function(s) {
  return Qt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Ua = /^\s*<(\w+)[^>]*>/, Ka = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Bi = {
  "*": Sr,
  tr: Ma,
  td: Wi,
  th: Wi,
  thead: un,
  tbody: un,
  tfoot: un
};
function Mr(s) {
  if (!et(s))
    return [];
  if (Ka.test(s))
    return [le(RegExp.$1)];
  const t = Ua.test(s) && RegExp.$1, e = Bi[t] || Bi["*"];
  return e.innerHTML = s, d(e.childNodes).detach().get();
}
d.parseHTML = Mr;
C.has = function(s) {
  const t = et(s) ? (e, n) => Gn(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
C.not = function(s) {
  const t = Bs(s);
  return this.filter((e, n) => (!et(s) || Y(n)) && !t.call(n, e, n));
};
function zt(s, t, e, n) {
  const i = [], r = ce(t), o = n && Bs(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Ia.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Ar(s) {
  return s.multiple && s.options ? zt(Kn.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function qa(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Or.test(e.type)) {
      const i = Ws(s) ? Tr.call(s, String) : Oe(s) ? [] : [String(s)];
      n ? Z(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ft(s) || Oe(s) ? "" : s;
  }) : this[0] && Ar(this[0]);
}
C.val = qa;
C.is = function(s) {
  const t = Bs(s);
  return qn.call(this, (e, n) => t.call(e, n, e));
};
d.guid = 1;
function Nt(s) {
  return s.length > 1 ? Kn.call(s, (t, e, n) => xr.call(n, t) === e) : s;
}
d.unique = Nt;
C.add = function(s, t) {
  return d(Nt(this.get().concat(d(s, t).get())));
};
C.children = function(s) {
  return Qt(d(Nt(zt(this, (t) => t.children))), s);
};
C.parent = function(s) {
  return Qt(d(Nt(zt(this, "parentNode"))), s);
};
C.index = function(s) {
  const t = s ? d(s)[0] : this[0], e = s ? this : d(t).parent().children();
  return xr.call(e, t);
};
C.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
C.siblings = function(s) {
  return Qt(d(Nt(zt(this, (t) => d(t).parent().children().not(t)))), s);
};
C.find = function(s) {
  return d(Nt(zt(this, (t) => Gn(s, t))));
};
const Ga = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ya = /^$|^module$|\/(java|ecma)script/i, Ja = ["type", "src", "nonce", "noModule"];
function Za(s, t) {
  const e = d(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Ya.test(i.type) && Cr.contains(i)) {
      const r = le("script");
      r.text = i.textContent.replace(Ga, ""), Z(Ja, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Xa(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && Za(t, s.ownerDocument);
}
function te(s, t, e, n, i, r, o, a) {
  return Z(s, (l, c) => {
    Z(d(c), (u, h) => {
      Z(d(t), (p, f) => {
        const g = e ? h : f, _ = e ? f : h, y = e ? u : p;
        Xa(g, y ? _.cloneNode(!0) : _, n, i, !y);
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
function Qa(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ft(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    Y(n) && (t ? d(n).empty().append(s) : n.innerHTML = s);
  });
}
C.html = Qa;
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
  return d(Nt(zt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
C.next = function(s, t, e) {
  return Qt(d(Nt(zt(this, "nextElementSibling", t, e))), s);
};
C.nextAll = function(s) {
  return this.next(s, !0);
};
C.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
C.parents = function(s, t) {
  return Qt(d(Nt(zt(this, "parentElement", !0, t))), s);
};
C.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
C.prev = function(s, t, e) {
  return Qt(d(Nt(zt(this, "previousElementSibling", t, e))), s);
};
C.prevAll = function(s) {
  return this.prev(s, !0);
};
C.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
C.map = function(s) {
  return d(Aa.apply([], Tr.call(this, (t, e) => s.call(t, e, t))));
};
C.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Dt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Cr;
  });
};
C.slice = function(s, t) {
  return d(Nr.call(this, s, t));
};
const tl = /-([a-z])/g;
function Jn(s) {
  return s.replace(tl, (t, e) => e.toUpperCase());
}
C.ready = function(s) {
  const t = () => setTimeout(s, 0, d);
  return Rt.readyState !== "loading" ? t() : Rt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + ys.pageYOffset,
    left: t.left + ys.pageXOffset
  };
};
C.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Dt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Dt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && Y(i)) {
      const r = d(i).offset();
      e.top -= r.top + kt(i, "borderTopWidth"), e.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - kt(s, "marginTop"),
    left: e.left - kt(s, "marginLeft")
  };
};
const Ir = {
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
    if (et(s))
      return s = Ir[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
C.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Ir[s] || s];
  });
};
const el = /^--/;
function Zn(s) {
  return el.test(s);
}
const fn = {}, { style: sl } = Sr, nl = ["webkit", "moz", "ms"];
function il(s, t = Zn(s)) {
  if (t)
    return s;
  if (!fn[s]) {
    const e = Jn(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${nl.join(`${n} `)}${n}`.split(" ");
    Z(i, (r, o) => {
      if (o in sl)
        return fn[s] = o, !1;
    });
  }
  return fn[s];
}
const rl = {
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
function Pr(s, t, e = Zn(s)) {
  return !e && !rl[s] && Er(t) ? `${t}px` : t;
}
function ol(s, t) {
  if (et(s)) {
    const e = Zn(s);
    return s = il(s, e), arguments.length < 2 ? this[0] && Dt(this[0], s, e) : s ? (t = Pr(s, t, e), this.each((n, i) => {
      Y(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
C.css = ol;
function Rr(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const al = /^\s+|\s+$/;
function Vi(s, t) {
  const e = s.dataset[t] || s.dataset[Jn(t)];
  return al.test(e) ? e : Rr(JSON.parse, e);
}
function ll(s, t, e) {
  e = Rr(JSON.stringify, e), s.dataset[Jn(t)] = e;
}
function cl(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Vi(this[0], n);
    return e;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && Vi(this[0], s) : ft(t) ? this : this.each((e, n) => {
      ll(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
C.data = cl;
function Dr(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Z([!0, !1], (s, t) => {
  Z(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    C[i] = function(r) {
      if (this[0])
        return ye(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : oe(this[0]) ? Dr(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? kt(this[0], `margin${e ? "Top" : "Left"}`) + kt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  C[e] = function(n) {
    if (!this[0])
      return ft(n) ? void 0 : this;
    if (!arguments.length)
      return ye(this[0]) ? this[0].document.documentElement[`client${t}`] : oe(this[0]) ? Dr(this[0], t) : this[0].getBoundingClientRect()[e] - Hi(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = Dt(o, "boxSizing");
      o.style[e] = Pr(e, i + (a === "border-box" ? Hi(o, !s) : 0));
    });
  };
});
const Ui = "___cd";
C.toggle = function(s) {
  return this.each((t, e) => {
    if (!Y(e))
      return;
    const n = ji(e);
    (ft(s) ? n : s) ? (e.style.display = e[Ui] || "", ji(e) && (e.style.display = Va(e.tagName))) : n || (e[Ui] = Dt(e, "display"), e.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Ki = "___ce", Xn = ".", Qn = { focus: "focusin", blur: "focusout" }, Lr = { mouseenter: "mouseover", mouseleave: "mouseout" }, hl = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ti(s) {
  return Lr[s] || Qn[s] || s;
}
function ei(s) {
  const t = s.split(Xn);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(s, t) {
  if (et(s)) {
    const [n, i] = ei(s), r = ti(n);
    if (!r)
      return this;
    const o = hl.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Rt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Xn), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Qn;
  return this.each((n, i) => {
    e && ce(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Fr(s) {
  return s[Ki] = s[Ki] || {};
}
function ul(s, t, e, n, i) {
  const r = Fr(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function zr(s, t) {
  return !t || !qn.call(t, (e) => s.indexOf(e) < 0);
}
function ws(s, t, e, n, i) {
  const r = Fr(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !zr(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      ws(s, t, e, n, i);
}
C.off = function(s, t, e) {
  if (ft(s))
    this.each((n, i) => {
      !Y(i) && !oe(i) && !ye(i) || ws(i);
    });
  else if (et(s))
    ce(t) && (e = t, t = ""), Z(js(s), (n, i) => {
      const [r, o] = ei(i), a = ti(r);
      this.each((l, c) => {
        !Y(c) && !oe(c) && !ye(c) || ws(c, a, o, t, e);
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
function dl(s, t, e, n, i) {
  if (!et(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return et(t) || (ft(t) || Oe(t) ? t = "" : ft(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ce(n) || (n = e, e = void 0), n ? (Z(js(s), (r, o) => {
    const [a, l] = ei(o), c = ti(a), u = a in Lr, h = a in Qn;
    c && this.each((p, f) => {
      if (!Y(f) && !oe(f) && !ye(f))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !zr(l, _.namespace.split(Xn)) || !t && (h && (_.target !== f || _.___ot === c) || u && _.relatedTarget && f.contains(_.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let w = _.target;
          for (; !$r(w, t); )
            if (w === f || (w = w.parentNode, !w))
              return;
          y = w;
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
        i && ws(f, c, l, t, g), v === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || d.guid++, ul(f, c, l, t, g);
    });
  }), this) : this;
}
C.on = dl;
function fl(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
C.one = fl;
const pl = /\r?\n/g;
function ml(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(pl, `\r
`))}`;
}
const gl = /file|reset|submit|button|image/i, Or = /radio|checkbox/i;
C.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Z(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || gl.test(i.type) || Or.test(i.type) && !i.checked)
        return;
      const r = Ar(i);
      if (!ft(r)) {
        const o = Ws(r) ? r : [r];
        Z(o, (a, l) => {
          s += ml(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = d;
function _l(s, t) {
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
function yl(s, t, e) {
  try {
    const n = _l(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function U(s, ...t) {
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
var si = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(si || {});
function Et(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / si[e]).toFixed(t) + e);
}
const os = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * si[n];
};
let ni = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), jt;
function vl() {
  return ni;
}
function wl(s) {
  ni = s.toLowerCase();
}
function Wr(s, t) {
  jt || (jt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), d.extend(!0, jt, s);
}
function j(s, t, e, n, i, r) {
  Array.isArray(s) ? jt && s.unshift(jt) : s = jt ? [jt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || ni;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === jt ? `${r}.${t}` : t;
    if (a = yl(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? U(a, ...Array.isArray(e) ? e : [e]) : a;
}
function bl(s, t, e, n) {
  return j(void 0, s, t, e, n);
}
j.addLang = Wr;
j.getLang = bl;
j.getCode = vl;
j.setCode = wl;
Wr({
  zh_cn: {
    confirm: "确定",
    save: "保存",
    cancel: "取消",
    delete: "删除",
    reset: "重置",
    add: "添加"
  },
  zh_tw: {
    confirm: "確定",
    save: "儲存",
    cancel: "取消",
    delete: "刪除",
    reset: "重置",
    add: "添加"
  },
  en: {
    confirm: "Confirm",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    reset: "Reset",
    add: "Add"
  }
});
function qi(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Me(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Me(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Cl(s, t) {
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
function Sl(s, t) {
  const e = t || new FormData();
  return s && (typeof s == "string" && (s = new URLSearchParams(s)), s instanceof URLSearchParams ? s.forEach((n, i) => {
    Me(e, i, n);
  }) : Array.isArray(s) ? s.forEach(([n, i]) => {
    Me(e, n, i);
  }) : s instanceof FormData ? s.forEach((n, i) => {
    Me(e, i, n);
  }) : d.isPlainObject(s) && Object.entries(s).forEach(([n, i]) => {
    Me(e, n, i);
  })), e;
}
class Hr {
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
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let y = n;
    y && (i && (y = Sl(y)), _.body = y), o && (_.mode = "cors");
    const v = _.headers || {};
    qi(v, "X-Requested-With", "XMLHttpRequest"), r && qi(v, "Content-Type", r), _.headers = v, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), f && this.fail(f), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
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
        const p = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), f = p ? "blob" : e || Cl(a.headers.get("Content-Type"), n);
        p || f === "blob" || f === "file" ? c = await a.blob() : f === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const g = (i == null ? void 0 : i(c, f)) ?? c;
        this._emit("success", g, h, a);
      } else
        throw new Error(h);
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
  const e = new Hr(t);
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
    i && (r = d(r).find(i).html()), d(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function ii(s, t = [], e) {
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
  const i = new Hr(n), [r] = await i.send();
  return r;
}
function hu(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
d.fetch = ii;
function ut() {
  return d.guid++;
}
function Sn(s, t) {
  if (s === t)
    return !1;
  if (s && t && typeof s == "object" && typeof t == "object") {
    const e = Array.isArray(s), n = Array.isArray(t);
    if (e !== n)
      return !0;
    if (e && n) {
      if (s.length !== t.length)
        return !0;
      for (let o = 0; o < s.length; o++)
        if (Sn(s[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(s), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (Sn(s[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class bs {
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
    return (!e || t.some((n, i) => Sn(n instanceof bs ? n.value : n, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((n) => n instanceof bs ? n.cache : n)), this._value;
  }
}
function jr(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? jr(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...s) => jr(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
d.classes = x;
d.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = d(n);
    s === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(s, ...t));
  });
};
const Ae = /* @__PURE__ */ new WeakMap();
function Br(s, t, e) {
  const n = Ae.has(s), i = n ? Ae.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, d(s).dataset(), i), Ae.set(s, i)) : Ae.delete(s);
}
function Vr(s, t, e) {
  let n = Ae.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, d(s).dataset(), n)), t === void 0 ? n : n[t];
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...s) {
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? this.length ? Vr(this[0], t) : void 0 : this.each((n, i) => Br(i, t, e));
};
d.fn.removeData = function(s = null) {
  return this.each((t, e) => Br(e, s));
};
function kn(s, t = "z-") {
  const e = d(s)[0];
  if (e)
    return Array.from(e.attributes).reduce((n, i) => {
      let { name: r, value: o } = i;
      if (r.startsWith(t)) {
        r = r.slice(t.length).replace(/-([a-z])/g, (a) => a[1].toUpperCase());
        try {
          o.startsWith("RAWJS<") && o.endsWith(">RAWJS") ? o = new Function(`return ${o.substring(6, o.length - 6)}`)() : o = JSON.parse(o);
        } catch {
        }
        n[r] = o;
      }
      return n;
    }, {});
}
function Gi(s, t, e = "z-") {
  const n = d(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function kl(...s) {
  var e;
  const t = s.length;
  if (!t)
    return kn(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = kn(this)) == null ? void 0 : e[n] : (d.isPlainObject(n) && Gi(this, n), this);
  }
  return Gi(this, { [s[0]]: s[1] }), this;
}
d.fn.z = kl;
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
d.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const Cs = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), xl = {};
d.share = xl;
var Vs, F, Ur, bt, ne, Yi, Kr, xn, We = {}, qr = [], Tl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Us = Array.isArray;
function Kt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Gr(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function xt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Vs.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return hs(s, o, n, i, null);
}
function hs(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Ur, __i: -1, __u: 0 };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function q() {
  return { current: null };
}
function Se(s) {
  return s.children;
}
function H(s, t) {
  this.props = s, this.context = t;
}
function ve(s, t) {
  if (t == null)
    return s.__ ? ve(s.__, s.__i + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ve(s) : null;
}
function Yr(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Yr(s);
  }
}
function Ji(s) {
  (!s.__d && (s.__d = !0) && ne.push(s) && !Ss.__r++ || Yi !== F.debounceRendering) && ((Yi = F.debounceRendering) || Kr)(Ss);
}
function Ss() {
  var s, t, e, n, i, r, o, a, l;
  for (ne.sort(xn); s = ne.shift(); )
    s.__d && (t = ne.length, n = void 0, r = (i = (e = s).__v).__e, a = [], l = [], (o = e.__P) && ((n = Kt({}, i)).__v = i.__v + 1, F.vnode && F.vnode(n), ri(o, n, i, e.__n, o.ownerSVGElement !== void 0, 32 & i.__u ? [r] : null, a, r ?? ve(i), !!(32 & i.__u), l), n.__.__k[n.__i] = n, Xr(a, n, l), n.__e != r && Yr(n)), ne.length > t && ne.sort(xn));
  Ss.__r = 0;
}
function Jr(s, t, e, n, i, r, o, a, l, c, u) {
  var h, p, f, g, _, y = n && n.__k || qr, v = t.length;
  for (e.__d = l, Nl(e, t, y), l = e.__d, h = 0; h < v; h++)
    (f = e.__k[h]) != null && typeof f != "boolean" && typeof f != "function" && (p = f.__i === -1 ? We : y[f.__i] || We, f.__i = h, ri(s, f, p, i, r, o, a, l, c, u), g = f.__e, f.ref && p.ref != f.ref && (p.ref && oi(p.ref, null, f), u.push(f.ref, f.__c || g, f)), _ == null && g != null && (_ = g), 65536 & f.__u || p.__k === f.__k ? l = Zr(f, l, s) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : g && (l = g.nextSibling), f.__d = void 0, f.__u &= -196609);
  e.__d = l, e.__e = _;
}
function Nl(s, t, e) {
  var n, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (s.__k = [], n = 0; n < l; n++)
    (i = s.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? hs(null, i, null, null, i) : Us(i) ? hs(Se, { children: i }, null, null, null) : i.__b > 0 ? hs(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = s, i.__b = s.__b + 1, a = El(i, e, o = n + h, u), i.__i = a, r = null, a !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a === o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : h = a < o && a == o - 1 ? a - o : 0, a !== n + h && (i.__u |= 65536))) : (r = e[n]) && r.key == null && r.__e && (r.__e == s.__d && (s.__d = ve(r)), Tn(r, r, !1), e[n] = null, u--);
  if (u)
    for (n = 0; n < c; n++)
      (r = e[n]) != null && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ve(r)), Tn(r, r));
}
function Zr(s, t, e) {
  var n, i;
  if (typeof s.type == "function") {
    for (n = s.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = s, t = Zr(n[i], t, e));
    return t;
  }
  return s.__e != t && (e.insertBefore(s.__e, t || null), t = s.__e), t && t.nextSibling;
}
function ks(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Us(s) ? s.some(function(e) {
    ks(e, t);
  }) : t.push(s)), t;
}
function El(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
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
function Zi(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Tl.test(t) ? e : e + "px";
}
function as(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Zi(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Zi(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), s.addEventListener(t, r ? Qi : Xi, r)) : s.removeEventListener(t, r ? Qi : Xi, r);
    else {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, e));
    }
}
function Xi(s) {
  var t = this.l[s.type + !1];
  if (s.t) {
    if (s.t <= t.u)
      return;
  } else
    s.t = Date.now();
  return t(F.event ? F.event(s) : s);
}
function Qi(s) {
  return this.l[s.type + !0](F.event ? F.event(s) : s);
}
function ri(s, t, e, n, i, r, o, a, l, c) {
  var u, h, p, f, g, _, y, v, w, b, S, k, T, A, I, M = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = F.__b) && u(t);
  t:
    if (typeof M == "function")
      try {
        if (v = t.props, w = (u = M.contextType) && n[u.__c], b = u ? w ? w.props.value : u.__ : n, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : ("prototype" in M && M.prototype.render ? t.__c = h = new M(v, b) : (t.__c = h = new H(v, b), h.constructor = M, h.render = Ml), w && w.sub(h), h.props = v, h.state || (h.state = {}), h.context = b, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), M.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Kt({}, h.__s)), Kt(h.__s, M.getDerivedStateFromProps(v, h.__s))), f = h.props, g = h.state, h.__v = t, p)
          M.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && v !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(v, b), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(v, h.__s, b) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = v, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), S = 0; S < h._sb.length; S++)
              h.__h.push(h._sb[S]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(v, h.__s, b), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(f, g, _);
          });
        }
        if (h.context = b, h.props = v, h.__P = s, h.__e = !1, k = F.__r, T = 0, "prototype" in M && M.prototype.render) {
          for (h.state = h.__s, h.__d = !1, k && k(t), u = h.render(h.props, h.state, h.context), A = 0; A < h._sb.length; A++)
            h.__h.push(h._sb[A]);
          h._sb = [];
        } else
          do
            h.__d = !1, k && k(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++T < 25);
        h.state = h.__s, h.getChildContext != null && (n = Kt(Kt({}, n), h.getChildContext())), p || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(f, g)), Jr(s, Us(I = u != null && u.type === Se && u.key == null ? u.props.children : u) ? I : [I], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (E) {
        t.__v = null, l || r != null ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = e.__e, t.__k = e.__k), F.__e(E, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = $l(e.__e, t, e, n, i, r, o, l, c);
  (u = F.diffed) && u(t);
}
function Xr(s, t, e) {
  t.__d = void 0;
  for (var n = 0; n < e.length; n++)
    oi(e[n], e[++n], e[++n]);
  F.__c && F.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      F.__e(r, i.__v);
    }
  });
}
function $l(s, t, e, n, i, r, o, a, l) {
  var c, u, h, p, f, g, _, y = e.props, v = t.props, w = t.type;
  if (w === "svg" && (i = !0), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!w && (w ? f.localName === w : f.nodeType === 3)) {
        s = f, r[c] = null;
        break;
      }
  }
  if (s == null) {
    if (w === null)
      return document.createTextNode(v);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", w) : document.createElement(w, v.is && v), r = null, a = !1;
  }
  if (w === null)
    y === v || a && s.data === v || (s.data = v);
  else {
    if (r = r && Vs.call(s.childNodes), y = e.props || We, !a && r != null)
      for (y = {}, c = 0; c < s.attributes.length; c++)
        y[(f = s.attributes[c]).name] = f.value;
    for (c in y)
      f = y[c], c == "children" || (c == "dangerouslySetInnerHTML" ? h = f : c === "key" || c in v || as(s, c, null, f, i));
    for (c in v)
      f = v[c], c == "children" ? p = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? g = f : c == "checked" ? _ = f : c === "key" || a && typeof f != "function" || y[c] === f || as(s, c, f, y[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === s.innerHTML) || (s.innerHTML = u.__html), t.__k = [];
    else if (h && (s.innerHTML = ""), Jr(s, Us(p) ? p : [p], t, e, n, i && w !== "foreignObject", r, o, r ? r[0] : e.__k && ve(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && Gr(r[c]);
    a || (c = "value", g !== void 0 && (g !== s[c] || w === "progress" && !g || w === "option" && g !== y[c]) && as(s, c, g, y[c], !1), c = "checked", _ !== void 0 && _ !== s[c] && as(s, c, _, y[c], !1));
  }
  return s;
}
function oi(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    F.__e(n, e);
  }
}
function Tn(s, t, e) {
  var n, i;
  if (F.unmount && F.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || oi(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Tn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Gr(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Ml(s, t, e) {
  return this.constructor(s, e);
}
function He(s, t, e) {
  var n, i, r, o;
  F.__ && F.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], ri(t, s = (!n && e || t).__k = xt(Se, null, [s]), i || We, We, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Vs.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Xr(r, s, o);
}
Vs = qr.slice, F = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Ur = 0, bt = function(s) {
  return s != null && s.constructor == null;
}, H.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof s == "function" && (s = s(Kt({}, e), this.props)), s && Kt(e, s), s != null && this.__v && (t && this._sb.push(t), Ji(this));
}, H.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Ji(this));
}, H.prototype.render = Se, ne = [], Kr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Ss.__r = 0;
function W(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...ks(r), ...ks(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = d.extend(r, i))), s[n] = i);
    });
  }), s;
}
function Qr(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const Ie = /* @__PURE__ */ new Map();
function xs(s) {
  const { zui: t } = window;
  return (!Ie.size || s && !Ie.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Ie.set(e.toLowerCase(), n);
  }), s ? Ie.get(s.toLowerCase()) : void 0;
}
function Al(s, t, e) {
  const n = xs(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function uu(s) {
  if (s) {
    const t = xs(s);
    t && t.defineFn();
  } else
    xs(), Ie.forEach((t) => {
      t.defineFn();
    });
}
d.fn.zuiInit = function() {
  return this.find("[zui-create],[data-zui]").each(function() {
    const s = d(this);
    let t = kn(s, "data-");
    const [e, n] = (t.zui || s.attr("zui-create")).split(":");
    s.zui(e) || (n ? t = d.share[n] : delete t.zui, requestAnimationFrame(() => Al(e, this, t)));
  }), this.find("[zui-init]").each(function() {
    const s = d(this);
    s.z("zuiInited") || d.runJS(s.z("zuiInited", !0).attr("zui-init"), ["$element", s]);
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this.find('[data-on="inited"]').each((s, t) => {
    const e = d(t);
    e.zui() || e.trigger("inited");
  }), this;
};
d.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Vr(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = xs(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
d(() => {
  d("body").zuiInit();
});
function Il(s, t = !0) {
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
    Il(e, s);
  });
};
d.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Pl(s) {
  const t = d(this), e = t.dataset();
  if (!(e.on || "click").split(" ").includes(s.type))
    return;
  const n = e.selector ? d(s.target).closest(e.selector) : t;
  if (!n.length)
    return;
  const i = (l) => l === "" ? !0 : l, r = (l) => {
    if (typeof l == "string")
      try {
        l = JSON.parse(l);
      } catch {
      }
    return l;
  };
  if (i(e.once)) {
    if (e.onceCalled)
      return;
    t.dataset("once-called", !0);
  }
  if (i(e.prevent) && s.preventDefault(), i(e.stop) && s.stopPropagation(), i(e.self) && s.currentTarget !== s.target)
    return;
  const o = [["$element", t], ["event", s], ["options", e], ["$target", n]];
  if (e.if && !d.runJS(e.if, ...o))
    return;
  const a = e.call;
  if (a) {
    let l = window[a];
    const c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(a);
    if (l || (l = d.runJS(a, ...o)), !c || !d.isFunction(l))
      return;
    const u = [], h = e.params;
    e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((p) => (p = p.trim(), p === "$element" ? t : p === "event" ? s : p === "options" ? e : p.startsWith("$element.") || p.startsWith("event.") || p.startsWith("options.") ? d.runJS(p, ...o) : r(p)))) : u.push(h), l(...u);
  }
  e.do && d.runJS(e.do, ...o);
}
d(document).on("click.zui.global change.zui.global inited.zui.global", "[data-on]", Pl);
function to(s) {
  if (typeof s == "function")
    return to(s());
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function us(s) {
  if (s == null)
    return null;
  const [t, e = "px"] = to(s);
  return Number.isNaN(t) ? typeof s == "string" ? s : null : `${t}${e}`;
}
async function tr(s, t) {
  var n, i, r;
  if (s instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(s), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), s;
  }
  if (s instanceof Response) {
    const o = await s.blob();
    return t = t || ((r = (i = (n = s.headers.get("Content-Disposition")) == null ? void 0 : n.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), tr(o, t);
  }
  const e = await fetch(s);
  return tr(e);
}
class Rl {
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
const Lt = new Rl(document);
d.bus = Lt;
d.on = Lt.on.bind(Lt);
d.one = Lt.one.bind(Lt);
d.off = Lt.off.bind(Lt);
d.trigger = Lt.trigger.bind(Lt);
var Dl = ["Shift", "Meta", "Alt", "Control"], eo = typeof navigator == "object" ? navigator.platform : "", so = /Mac|iPod|iPhone|iPad/.test(eo), Ll = so ? "Meta" : "Control", Fl = eo === "Win32" ? ["Control", "Alt"] : so ? ["Alt"] : [];
function pn(s, t) {
  return typeof s.getModifierState == "function" && (s.getModifierState(t) || Fl.includes(t) && s.getModifierState("AltGraph"));
}
function zl(s) {
  return s.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), n = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? Ll : i;
    }), n];
  });
}
function no(s, t) {
  var e;
  t === void 0 && (t = {});
  var n = (e = t.timeout) != null ? e : 1e3, i = Object.keys(s).map(function(a) {
    return [zl(a), s[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(p, f) {
        return !(f[1].toUpperCase() !== p.key.toUpperCase() && f[1] !== p.code || f[0].find(function(g) {
          return !pn(p, g);
        }) || Dl.find(function(g) {
          return !f[0].includes(g) && f[1] !== g && pn(p, g);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : pn(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), n));
  };
}
function Ol(s, t, e) {
  var n;
  e === void 0 && (e = {});
  var i = (n = e.event) != null ? n : "keydown", r = no(t, e);
  return s.addEventListener(i, r), function() {
    s.removeEventListener(i, r);
  };
}
function io(s, t = {}) {
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
function ro(s, t, e) {
  const { timeout: n, event: i = "keydown", scope: r, when: o } = e || {}, a = no(t, { timeout: n });
  return d(s).on(`${i}.zui.hotkeys${r ? `.${r}` : ""}`, function(l) {
    o && o(l) === !1 || a(l);
  });
}
function oo(s, t) {
  return d(s).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const du = Ol;
d.fn.hotkeys = function(s, t) {
  return ro(this, s, t);
};
d.fn.unbindHotkeys = function(s) {
  return oo(this, s);
};
d.hotkeys = function(s, t) {
  ro(window, s, t);
};
d.unbindHotkeys = function(s) {
  oo(window, s);
};
function ai() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Wl(s) {
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
    const u = ai();
    let h = u;
    u ? d(u).addClass("is-in-fullscreen") : (h = d(document).find(".is-in-fullscreen")[0] || document, d(h).removeClass("is-in-fullscreen")), d("body").toggleClass("has-in-fullscreen", !!u);
    const p = { event: c, target: h, fullscreenElement: u };
    d(h).trigger(u ? "enterFullscreen" : "exitFullscreen", p).trigger("toggleFullscreen", p);
  }));
}
async function ao(s) {
  const t = ai();
  return s === !1 && !!t === s ? s : t ? (document.exitFullscreen(), !1) : (await Wl(s), !0);
}
d.fn.fullscreen = function(s) {
  return ao({
    target: this,
    ...s
  });
};
d.getFullscreenElement = ai;
d.toggleFullscreen = ao;
function he(s) {
  return s.parentNode === document ? !1 : s.parentNode ? he(s.parentNode) : !0;
}
d.isDetached = he;
d.fn.isDetached = function() {
  const s = this[0];
  return !s || he(s);
};
class Ot {
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
    const l = d(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], u = ut();
    this._gid = u, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((p) => {
      p.forEach((f) => {
        f.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, he(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${u}`, l.data(n, this).attr(i, `${u}`), o) {
      const p = `${n}:ALL`;
      let f = l.data(p);
      f || (f = /* @__PURE__ */ new Map(), l.data(p, f)), f.set(this._key, this);
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
  static get SELECTOR() {
    return `[${this.DATA_KEY}]`;
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
    return t && d.extend(this._options, t), this._options;
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
    return j(i, t, e, n, this.options.lang, this.constructor.NAME) ?? j(i, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const { MULTI_INSTANCE: e, SELECTOR: n } = this, i = [];
    return d(t || document).find(n).each((r, o) => {
      if (e) {
        const l = d(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = d(o).data(this.KEY);
      a && i.push(a);
    }), i.sort((r, o) => r.gid - o.gid);
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
      return n && (i = i.filter(n)), i.pop();
    }
    return this.get(d(t).closest(this.SELECTOR), e);
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
}
Ot.DEFAULT = {};
Ot.MULTI_INSTANCE = !1;
class Hl extends Ot {
  init() {
    const { offset: t = 1, side: e, zIndex: n, pinnedClass: i = "is-pinned" } = this.options, { $element: r } = this;
    r.css({ position: "sticky", zIndex: n }), e && r.css(e, -t), this._ob = new IntersectionObserver(
      ([o]) => o.target.classList.toggle(i, o.intersectionRatio < t),
      { threshold: [1] }
    ), this._ob.observe(r[0]);
  }
  destroy() {
    this._ob.disconnect();
  }
}
Hl.NAME = "Sticky";
function Ks(s, t) {
  const e = d(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!(o * a))
    return !1;
  if (!n) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: y, clientWidth: v } = document.documentElement;
    n = { left: 0, top: 0, width: _ || v, height: g || y };
  }
  const { left: l, top: c, width: u, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= u && r + a <= h;
  const p = i <= u && i + o >= l;
  return r <= h && r + a >= c && p;
}
d.fn.isVisible = function(s) {
  return Ks(this, s);
};
function li(s, t, e = !1) {
  const n = d(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${ut()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    li(n, r.innerHTML), r.remove();
  });
}
d.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
d.fn.runJS = function(s) {
  return this.each((t, e) => {
    li(e, s);
  });
};
function jl(s, t = "both") {
  return (t === "vert" || t === "both") && s.clientHeight < s.scrollHeight || (t === "horz" || t === "both") && s.clientWidth < s.scrollWidth;
}
function lo(s, t) {
  const e = d(s), { ifNeeded: n = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = d(a).closest(i);
      if (!l.length || !jl(l[0]))
        return;
    }
    if (n) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (Ks(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
d.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    lo(e, s);
  });
};
d.setLibRoot = function(s) {
  d.libRoot = s;
};
d.registerLib = function(s, t) {
  d.libMap || (d.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), d.libMap[s] = t;
};
function Bl(s) {
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
function Vl(s) {
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
    }, h.src = n, d("head").append(h);
  });
}
d.getLib = async function(s, t, e) {
  let n = typeof s == "string" || Array.isArray(s) ? { src: s } : d.extend({}, s);
  typeof t == "function" ? n.success = t : t && d.extend(n, t), e && (n.success = e);
  let { src: i } = n;
  const { name: r, success: o } = n, a = d.libMap && r && d.libMap[r];
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
  for (let f of i) {
    typeof f == "string" && (f = { src: f });
    let { src: g } = f;
    p && (g = `${p}${p.endsWith("/") || g.startsWith("/") ? "" : "/"}${g}`);
    const _ = {
      ...n,
      ...f,
      src: g
    };
    if (f.type === "css" || !f.type && g.endsWith(".css")) {
      await Bl(_);
      continue;
    }
    await Vl(_);
  }
  return h();
};
d.getScript = d.getLib;
const fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: he,
  isVisible: Ks,
  runJS: li,
  scrollIntoView: lo
}, Symbol.toStringTag, { value: "Module" })), co = {};
function rt(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    rt(e, s[e]);
  }) : t && (co[s.toLowerCase()] = t);
}
function Ul(s) {
  return co[s.toLowerCase()];
}
class X extends H {
  constructor() {
    super(...arguments), this._gid = ut();
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
    return j(i, t, e, n, this.props.lang, this.constructor.NAME) ?? j(i, t, e, n, this.props.lang) ?? `{i18n:${t}}`;
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
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, ...h } = t, p = new Set(this.constructor.customProps), f = "dangerouslySetInnerHTML", g = Object.keys(h).reduce((_, y) => {
      if (!p.has(y) && (y === f || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(y))) {
        const v = h[y];
        _[y] = y !== f && v && typeof v == "object" ? JSON.stringify(v) : v;
      }
      return _;
    }, {});
    return { ref: o, className: x(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...g, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? Ul(e) : e) || e;
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
    return r && ([e, i, n] = r), xt(e, i, n);
  }
}
X.HElement = !0;
X.customProps = [];
var Kl = 0;
function m(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Kl, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(c), c;
}
class we extends H {
  constructor() {
    super(...arguments), this._ref = q();
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
    return /* @__PURE__ */ m(X, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function ql(s) {
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
  } = s, h = [e], p = { ...n }, f = [], g = [];
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
      v != null && (typeof v == "object" && !bt(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? f.push(
        /* @__PURE__ */ m("div", { className: x(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(p, v.style), v.className && h.push(v.className), v.children && f.push(v.children), v.attrs && Object.assign(u, v.attrs)) : f.push(v));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: x(h),
    style: p,
    ...u
  }, f];
}
function ho({
  tag: s = "div",
  ...t
}) {
  const [e, n] = ql(t);
  return xt(s, e, ...n);
}
function Nn(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => Nn({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ m("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ m(we, { ...W(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = W({ children: o.map((a) => Nn({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ m(X, { ...W(i, r) });
  }
  return bt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", s), console.groupEnd()), null);
}
function V(s) {
  const t = Nn(s);
  return t == null || typeof t == "boolean" ? null : bt(t) ? t : /* @__PURE__ */ m(Se, { children: t });
}
const er = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function Q(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (bt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(er(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? er(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ m("i", { className: x(i), ...n });
}
function Gl(s) {
  return this.getChildContext = () => s.context, s.children;
}
function uo(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    He(null, t._temp), t._temp = null, t._container = null;
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
  }), He(
    xt(Gl, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Yl(s, t) {
  const e = xt(uo, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
rt({
  HElement: X,
  element: X,
  HtmlContent: we,
  html: we,
  CustomContent: V,
  custom: V,
  Icon: Q,
  Portal: uo
});
class B extends Ot {
  constructor() {
    super(...arguments), this._ref = q();
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
  render(t) {
    const { element: e } = this, { Component: n, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this._ref,
      ...o
    };
    if (r && n.HElement && (e.tagName.toLowerCase() === r || r === !0)) {
      const l = Array.from(e.attributes).reduce((c, u) => {
        const { name: h, value: p } = u;
        return c[h === "class" ? "className" : h] = p, c;
      }, {});
      return He(
        xt(n, W({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    He(
      xt(n, a),
      e
    );
  }
}
B.replace = !1;
class K extends X {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ m(Q, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(Q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ m("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ m(Q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ m("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
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
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: K
}, Symbol.toStringTag, { value: "Module" }));
rt(Jl);
let ot = class extends X {
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
        return /* @__PURE__ */ m(V, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || X;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = W({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ m(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: u } = this, { defaultItemProps: h = {}, defaultItemPropsMap: p = {} } = this.constructor;
    if (e = W(
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
ot.NAME = "";
ot.ITEM_NAME = "item";
ot.TAG = "ul";
ot.ItemComponents = {
  default: X,
  divider: [X, { className: "divider" }],
  space: [X, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
ot.defaultItemProps = {
  component: "li"
};
ot.defaultItemPropsMap = {};
ot.defaultItemType = "item";
const Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: ot
}, Symbol.toStringTag, { value: "Module" }));
class ci extends B {
}
ci.NAME = "CommonList";
ci.Component = ot;
ci.replace = ot.TAG;
rt(Zl);
function Xl(s) {
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
function Ql(s) {
  const [t, e, n] = typeof s == "string" ? Xl(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function sr(s, t) {
  return Ql(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function nr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function tc(s, t, e) {
  s = s % 360 / 360, t = nr(t), e = nr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function ec(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function sc(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let qs = class extends H {
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
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: y,
      ...v
    } = this.props, w = ["avatar", t], b = { ...e, background: o, color: a };
    let S = 32;
    n && (typeof n == "number" ? (b.width = `${n}px`, b.height = `${n}px`, b.fontSize = `${Math.max(12, Math.round(n / 2))}px`, S = n) : (w.push(`size-${n}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : r && (typeof r == "number" ? b.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let k;
    if (p)
      w.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      w.push("has-icon"), k = /* @__PURE__ */ m(Q, { icon: l });
    else if (c != null && c.length) {
      const T = sc(c, h);
      if (w.push("has-text", `has-text-${T.length}`), o === void 0) {
        const I = u ?? c, M = (typeof I == "number" ? I : ec(I)) * f % 360;
        if (b.background = `hsl(${M},${g * 100}%,${_ * 100}%)`, !a) {
          const E = tc(M, g, _);
          b.color = sr(E);
        }
      } else
        !a && o && (b.color = sr(o));
      let A;
      S && S < 14 * T.length && (A = { transform: `scale(${S / (14 * T.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": S, className: "avatar-text", style: A, children: T });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: x(w),
        style: b,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: qs
}, Symbol.toStringTag, { value: "Module" }));
let Ct = class extends ot {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    e.type || (e = d.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = W({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = W({}, e, Qr({ btnType: n, size: i }));
  }
};
Ct.NAME = "btn-group";
Ct.TAG = "nav";
Ct.ItemComponents = {
  ...ot.ItemComponents,
  default: K
};
Ct.defaultItemProps = {
  component: void 0
};
const Gs = class fo extends Ct {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = x(n.className, `gap-${e}`) : n.style = d.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = W({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = W(n, r)), /* @__PURE__ */ m(fo, { ...r });
  }
};
Gs.NAME = "toolbar";
Gs.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Gs.ItemComponents = {
  ...Ct.ItemComponents,
  btnGroup: Ct,
  "btn-group": Ct
};
let St = Gs;
const ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: St
}, Symbol.toStringTag, { value: "Module" }));
class Ys extends X {
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
      e ? /* @__PURE__ */ m(
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
      /* @__PURE__ */ m("label", { htmlFor: r, children: /* @__PURE__ */ m(V, { content: o }) }, "label")
    ];
  }
}
class rc extends Ys {
}
rc.defaultProps = {
  type: "radio"
};
class oc extends Ys {
}
oc.defaultProps = {
  type: "switch"
};
class je extends X {
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
    if (i && u.push(/* @__PURE__ */ m(V, { content: i }, "toggleIcon")), a !== void 0 && u.push(/* @__PURE__ */ m(Ys, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && u.push(/* @__PURE__ */ m(Q, { className: "item-icon", icon: e }, "icon")), n) {
      const p = typeof n == "function" ? n.call(this, t) : n;
      p && (p.className = x("item-avatar", p.className), u.push(/* @__PURE__ */ m(qs, { ...p }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ m(V, { content: r }, "leading") : null;
    return h && u.push(h), c ? u.length ? [
      /* @__PURE__ */ m("div", { className: x("item-leading", o), children: u }, "leading")
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
    } = t, f = l && !e, g = f ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ m("div", { className: x("item-content", h), ...p, children: [
        _ ? /* @__PURE__ */ m(g, { className: x("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ m(V, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ m("div", { className: x("item-subtitle", a), children: /* @__PURE__ */ m(V, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ m("div", { className: x("item-text text", n), children: y }, "text") : null,
        u ? /* @__PURE__ */ m(V, { content: u }, "extraContent") : null
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
    r && a.push(/* @__PURE__ */ m(Q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(St.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = n ? /* @__PURE__ */ m(V, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ m("div", { className: x("item-trailing", i), children: [
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
      title: g,
      subtitle: _,
      hint: y,
      selected: v
    } = t, w = n || (o && !a ? "a" : "div"), b = w === "a", S = W({
      key: "item",
      title: y,
      className: x("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: v,
        checked: p,
        multiline: f ?? !!(g && _),
        state: b && !u
      })
    }, b ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ m(w, { ...S, children: [
      this._renderLeading(t),
      this._renderContent(t, b),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...ks(n)]];
  }
}
class Js extends ot {
  constructor(t) {
    super(t), this._activeSet = new bs(() => {
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
    this.setState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof n == "function" ? n.call(this, e) : n) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const n = await ii(t, [this], { throws: !0 });
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
      if (l && e.call(this, l, o))
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
    e = W({}, Qr({
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
    if (n === "any" ? n = ".item-checkbox,.item-content,.item-icon" : n === !0 && (n = ".item-checkbox"), n && e && t.target.closest(n)) {
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
      className: x(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
}
Js.ItemComponents = {
  ...ot.ItemComponents,
  default: X,
  item: je,
  heading: je
};
Js.NAME = "list";
const mn = "```ZUI_STR\n";
class ts {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new ts(this._id, "session")), this._altStorage);
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
      if (n.startsWith(mn))
        return n.substring(mn.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${mn}${e}` : JSON.stringify(e));
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
const En = new ts("DEFAULT");
function ac(s, t = "local") {
  return new ts(s, t);
}
Object.assign(En, { create: ac });
function po(s, t) {
  const { children: e } = s;
  e.length && e.forEach((n) => {
    t(n), po(n, t);
  });
}
function lc(s, t) {
  let e = s.parent;
  for (; e; )
    t(e), e = e.parent;
}
function gn(s) {
  return s.split(":").reduce((t, e, n) => (t.push(n ? t[n - 1] + ":" + e : e), t), []);
}
function hi(s, t, e, n, i = 0, r) {
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
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? hi(a.items, t, e, o, i + 1, h) : o;
  }, n);
}
function cc(s, t, e = /* @__PURE__ */ new Map()) {
  return hi(s, t, (n, i) => (n.set(i.keyPath, i), n), e);
}
class ke extends Js {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: n, nestedShow: i } = t;
    if (d.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), n && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const r = En.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && gn(o).forEach((a) => {
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
  setItems(t, e) {
    this.isRoot && (this._needInitChecks = !0), super.setItems(t, e);
  }
  getItemMap() {
    return this._itemMap || (this._itemMap = cc(this._items, this.props.itemKey)), this._itemMap;
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
      return l = e ? gn(t).reduce((c, u) => (c[u] = e, c), l) : l, this.isHoverTrigger && !e && Object.keys(l).forEach((c) => {
        !l[c] || !c.startsWith(`${t}:`) || gn(t).forEach((u) => {
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
          h && (po(h, (p) => {
            c(p) !== e && (n[p.keyPath] = e);
          }), lc(h, (p) => {
            const { children: f } = p, g = f.reduce((_, y) => (c(y) && _++, _), 0);
            n[p.keyPath] = g === f.length ? !0 : g ? "indeterminate" : !1;
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
    return i = i || hi(this._items, this.props.itemKey, (r, o) => (r.push({
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
    this._storeID && En.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return W(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: n.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
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
    return /* @__PURE__ */ m(o, { ...r }, `nested:${n.key}`);
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ m("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ m("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ m(Q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ m("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: n });
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
      W(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return W(i, {
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
    return e = W(e, {
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
    if (!e.items || i.defaultPrevented || l && n === void 0 || !l && i.type !== "click" || o.closest(".not-nested-toggle") || a && !o.closest(a) || !a && o.closest("a,.btn,.item-checkbox,.open-url") && !o.closest(".nested-toggle-icon,.item-icon"))
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
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = W(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = x(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || this.isHoverTrigger), super._beforeRender(t);
  }
}
ke.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
ke.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive"];
let J = class extends ke {
  _getClassName(t) {
    return x(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact });
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: n, maxHeight: i } = t, r = W({}, e, n || i ? { style: { height: n, maxHeight: i } } : null);
    return r.className = x(this._getWrapClass(t), r.className), r;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ m(V, { content: t.header }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ m(V, { content: t.footer }, "footer");
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ m("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : super.render(t);
  }
};
J.NAME = "menu";
J.TAG = "menu";
J.inheritNestedProps = [...ke.inheritNestedProps, "compact"];
J.ItemComponents = {
  ...ke.ItemComponents,
  item: [je, { innerComponent: "a" }]
};
J.defaultProps = {
  ...ke.defaultProps,
  scrollbarHover: !0
};
let Zs = class extends H {
  constructor(t) {
    super(t), this._input = q(), this._timer = 0, this._handleClearBtnClick = (e) => {
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
      const e = io(t, {
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
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: p, clearIcon: f, value: g, compact: _, prefixClass: y, suffixClass: v } = t, { focus: w, value: b } = e, { id: S } = this, k = g ?? b, T = typeof k != "string" || !k.trim().length;
    let A, I, M;
    return p && (M = p === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(Q, { icon: p })), !h && p && (A = /* @__PURE__ */ m("label", { for: S, class: x("input-control-prefix", y), children: M }, "prefix")), f && !T ? I = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(Q, { icon: f })
      }
    ) : h && p && (I = M), I && (I = /* @__PURE__ */ m("label", { for: S, class: x("input-control-suffix", v), children: I }, "suffix")), /* @__PURE__ */ m("div", { class: x("search-box input-control", r, { focus: w, empty: T, compact: _, "has-prefix-icon": A, "has-suffix-icon": I }), style: o, children: [
      A,
      /* @__PURE__ */ m(
        "input",
        {
          ref: this._input,
          id: S,
          type: "text",
          class: x("form-control", { "rounded-full": c, "size-sm": _ }, i),
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
      I
    ] });
  }
};
Zs.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: Zs
}, Symbol.toStringTag, { value: "Module" }));
let yt = class extends J {
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
    var e;
    if (!this.isRoot)
      return;
    const t = d(this.element);
    t.find(".item.is-nested.is-not-match").filter((n, i) => this._matchedParents.has(i.getAttribute("z-key-path") || "")).addClass("has-match-child"), t.parent().toggleClass("no-match-child", !!((e = this._searchKeys) != null && e.length) && !t.children(".item").not(".is-not-match").length);
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
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return x(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _renderSearchBox(t) {
    const { searchBox: e } = t;
    if (!e || !this.isRoot)
      return null;
    const n = {
      compact: !0,
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && d.extend(n, e), t.search !== void 0 && (n.value = this._searchKeys.join(" "), n.disabled = !0), /* @__PURE__ */ m(Zs, { ...n }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, n = this.isRoot && t.searchBox && t.searchPlacement !== "bottom", { noMatchHint: i } = t;
    return !e && !n && !i ? null : [
      i ? /* @__PURE__ */ m("div", { className: "search-menu-no-match-hint", children: i }, "noMatchHint") : null,
      e || n ? /* @__PURE__ */ m("header", { className: "search-menu-header", children: [
        e ? super._renderWrapperHeader(t) : null,
        n ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, n = this.isRoot && t.searchBox && t.searchPlacement === "bottom";
    return !e && !n ? null : /* @__PURE__ */ m("footer", { className: "search-menu-footer", children: [
      e ? super._renderWrapperFooter(t) : null,
      this._renderSearchBox(t)
    ] }, "footer");
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
        h && (o.push(/* @__PURE__ */ m("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
yt.inheritNestedProps = [...J.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
yt.defaultProps = {
  ...J.defaultProps,
  defaultNestedShow: !0,
  wrap: !0
};
const uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: J,
  SearchMenu: yt
}, Symbol.toStringTag, { value: "Module" }));
class ui extends B {
}
ui.NAME = "Menu";
ui.Component = J;
ui.replace = J.TAG;
class di extends B {
}
di.NAME = "SearchMenu";
di.Component = yt;
di.replace = yt.TAG;
rt(uc);
function dc({
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
  a === !0 ? p = /* @__PURE__ */ m(K, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : bt(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ m(K, { ...a, onClick: l }));
  const f = St.render(e, []);
  return /* @__PURE__ */ m("div", { className: x("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ m(Q, { icon: c, className: x("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ m(V, { content: i }) : /* @__PURE__ */ m("div", { className: x("alert-content", r), children: [
      typeof n != "string" ? /* @__PURE__ */ m(V, { content: n }) : n && /* @__PURE__ */ m("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      n ? f : null
    ] }),
    n ? null : f,
    p,
    o
  ] });
}
function fc(s) {
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
function pc({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ m(
    dc,
    {
      className: x("messager", r, t, n === !0 ? fc(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var mc = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, gc = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ee = (s, t, e) => (mc(s, t, "access private method"), e), ee, de;
class fi extends B {
  constructor() {
    super(...arguments), gc(this, ee), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), Ee(this, ee, de).call(this, () => {
      this._show = !0, this.render(), Ee(this, ee, de).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Ee(this, ee, de).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Ee(this, ee, de).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Ee(this, ee, de).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ee = /* @__PURE__ */ new WeakSet();
de = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
fi.NAME = "MessagerItem";
fi.Component = pc;
const Xs = class mo extends Ot {
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
      const t = this._getHolder(), e = new fi(t, this.options);
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
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = mo.ensure(e || "body", { key: `messager_${ut()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Xs.NAME = "messager";
Xs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Xs.MULTI_INSTANCE = !0;
let wu = Xs;
class pi extends H {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ m("div", { class: x("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ m("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
pi.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const _c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: pi
}, Symbol.toStringTag, { value: "Module" }));
rt(_c);
let Qs = class extends H {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, p = n / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = n * f);
    const g = (n - f) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ m("circle", { cx: p, cy: p, r: g, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: p, cy: p, r: g, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ m("text", { x: c ?? p, y: u ?? p + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
Qs.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class go extends B {
}
go.NAME = "ProgressCircle";
go.Component = Qs;
const yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: Qs
}, Symbol.toStringTag, { value: "Module" }));
rt(yc);
class _o extends B {
}
_o.NAME = "Avatar";
_o.Component = qs;
rt(nc);
class yo extends B {
}
yo.NAME = "BtnGroup";
yo.Component = Ct;
const vc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Ct
}, Symbol.toStringTag, { value: "Module" }));
rt(vc);
const vo = Symbol("EVENT_PICK");
class mi extends H {
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
    return x(
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
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: e, value: n, readonly: r, disabled: i });
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
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && d(`#${e}`).trigger("change", vo), this._skipTriggerChange = !1);
  }
  render(t) {
    return xt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Gt = Math.min, ct = Math.max, Ts = Math.round, ls = Math.floor, Yt = (s) => ({
  x: s,
  y: s
}), wc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bc = {
  start: "end",
  end: "start"
};
function $n(s, t, e) {
  return ct(s, Gt(t, e));
}
function xe(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Jt(s) {
  return s.split("-")[0];
}
function Te(s) {
  return s.split("-")[1];
}
function wo(s) {
  return s === "x" ? "y" : "x";
}
function gi(s) {
  return s === "y" ? "height" : "width";
}
function es(s) {
  return ["top", "bottom"].includes(Jt(s)) ? "y" : "x";
}
function _i(s) {
  return wo(es(s));
}
function Cc(s, t, e) {
  e === void 0 && (e = !1);
  const n = Te(s), i = _i(s), r = gi(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ns(o)), [o, Ns(o)];
}
function Sc(s) {
  const t = Ns(s);
  return [Mn(s), t, Mn(t)];
}
function Mn(s) {
  return s.replace(/start|end/g, (t) => bc[t]);
}
function kc(s, t, e) {
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
function xc(s, t, e, n) {
  const i = Te(s);
  let r = kc(Jt(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Mn)))), r;
}
function Ns(s) {
  return s.replace(/left|right|bottom|top/g, (t) => wc[t]);
}
function Tc(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function bo(s) {
  return typeof s != "number" ? Tc(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Es(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function ir(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = es(t), o = _i(t), a = gi(o), l = Jt(t), c = r === "y", u = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
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
  switch (Te(t)) {
    case "start":
      f[o] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += p * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const Nc = async (s, t, e) => {
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
  } = ir(c, n, l), p = n, f = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: v
    } = a[_], {
      x: w,
      y: b,
      data: S,
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
    if (u = w ?? u, h = b ?? h, f = {
      ...f,
      [y]: {
        ...f[y],
        ...S
      }
    }, k && g <= 50) {
      g++, typeof k == "object" && (k.placement && (p = k.placement), k.rects && (c = k.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : k.rects), {
        x: u,
        y: h
      } = ir(c, p, l)), _ = -1;
      continue;
    }
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: i,
    middlewareData: f
  };
};
async function yi(s, t) {
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
  } = xe(t, s), g = bo(f), y = a[p ? h === "floating" ? "reference" : "floating" : h], v = Es(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), S = await (r.isElement == null ? void 0 : r.isElement(b)) ? await (r.getScale == null ? void 0 : r.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Es(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: b,
    strategy: l
  }) : w);
  return {
    top: (v.top - k.top + g.top) / S.y,
    bottom: (k.bottom - v.bottom + g.bottom) / S.y,
    left: (v.left - k.left + g.left) / S.x,
    right: (k.right - v.right + g.right) / S.x
  };
}
const Ec = (s) => ({
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
    } = xe(s, t) || {};
    if (c == null)
      return {};
    const h = bo(u), p = {
      x: e,
      y: n
    }, f = _i(i), g = gi(f), _ = await o.getDimensions(c), y = f === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", b = y ? "clientHeight" : "clientWidth", S = r.reference[g] + r.reference[f] - p[f] - r.floating[g], k = p[f] - r.reference[f], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let A = T ? T[b] : 0;
    (!A || !await (o.isElement == null ? void 0 : o.isElement(T))) && (A = a.floating[b] || r.floating[g]);
    const I = S / 2 - k / 2, M = A / 2 - _[g] / 2 - 1, E = Gt(h[v], M), P = Gt(h[w], M), R = E, L = A - _[g] - P, $ = A / 2 - _[g] / 2 + I, O = $n(R, $, L), tt = !l.arrow && Te(i) != null && $ != O && r.reference[g] / 2 - ($ < R ? E : P) - _[g] / 2 < 0, mt = tt ? $ < R ? $ - R : $ - L : 0;
    return {
      [f]: p[f] + mt,
      data: {
        [f]: O,
        centerOffset: $ - O - mt,
        ...tt && {
          alignmentOffset: mt
        }
      },
      reset: tt
    };
  }
}), vi = function(s) {
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
        fallbackAxisSideDirection: g = "none",
        flipAlignment: _ = !0,
        ...y
      } = xe(s, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const v = Jt(i), w = Jt(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = p || (w || !_ ? [Ns(a)] : Sc(a));
      !p && g !== "none" && S.push(...xc(a, _, g, b));
      const k = [a, ...S], T = await yi(t, y), A = [];
      let I = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (u && A.push(T[v]), h) {
        const R = Cc(i, o, b);
        A.push(T[R[0]], T[R[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var M, E;
        const R = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, L = k[R];
        if (L)
          return {
            data: {
              index: R,
              overflows: I
            },
            reset: {
              placement: L
            }
          };
        let $ = (E = I.filter((O) => O.overflows[0] <= 0).sort((O, tt) => O.overflows[1] - tt.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var P;
              const O = (P = I.map((tt) => [tt.placement, tt.overflows.filter((mt) => mt > 0).reduce((mt, ln) => mt + ln, 0)]).sort((tt, mt) => tt[1] - mt[1])[0]) == null ? void 0 : P[0];
              O && ($ = O);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (i !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function $c(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Jt(e), a = Te(e), l = es(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = xe(t, s);
  let {
    mainAxis: p,
    crossAxis: f,
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
  return a && typeof g == "number" && (f = a === "end" ? g * -1 : g), l ? {
    x: f * u,
    y: p * c
  } : {
    x: p * c,
    y: f * u
  };
}
const wi = function(s) {
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
      } = t, l = await $c(t, s);
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
}, bi = function(s) {
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
              y: w
            } = y;
            return {
              x: v,
              y: w
            };
          }
        },
        ...l
      } = xe(s, t), c = {
        x: e,
        y: n
      }, u = await yi(t, l), h = es(Jt(i)), p = wo(h);
      let f = c[p], g = c[h];
      if (r) {
        const y = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", w = f + u[y], b = f - u[v];
        f = $n(w, f, b);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", w = g + u[y], b = g - u[v];
        g = $n(w, g, b);
      }
      const _ = a.fn({
        ...t,
        [p]: f,
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
}, Co = function(s) {
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
      } = xe(s, t), l = await yi(t, a), c = Jt(e), u = Te(e), h = es(e) === "y", {
        width: p,
        height: f
      } = n.floating;
      let g, _;
      c === "top" || c === "bottom" ? (g = c, _ = u === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, g = u === "end" ? "top" : "bottom");
      const y = f - l[g], v = p - l[_], w = !t.middlewareData.shift;
      let b = y, S = v;
      if (h) {
        const T = p - l.left - l.right;
        S = u || w ? Gt(v, T) : T;
      } else {
        const T = f - l.top - l.bottom;
        b = u || w ? Gt(y, T) : T;
      }
      if (w && !u) {
        const T = ct(l.left, 0), A = ct(l.right, 0), I = ct(l.top, 0), M = ct(l.bottom, 0);
        h ? S = p - 2 * (T !== 0 || A !== 0 ? T + A : ct(l.left, l.right)) : b = f - 2 * (I !== 0 || M !== 0 ? I + M : ct(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: S,
        availableHeight: b
      });
      const k = await i.getDimensions(r.floating);
      return p !== k.width || f !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Zt(s) {
  return So(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function dt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(s) {
  var t;
  return (t = (So(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function So(s) {
  return s instanceof Node || s instanceof dt(s).Node;
}
function Ft(s) {
  return s instanceof Element || s instanceof dt(s).Element;
}
function Tt(s) {
  return s instanceof HTMLElement || s instanceof dt(s).HTMLElement;
}
function rr(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof dt(s).ShadowRoot;
}
function ss(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = _t(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Mc(s) {
  return ["table", "td", "th"].includes(Zt(s));
}
function Ci(s) {
  const t = Si(), e = _t(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Ac(s) {
  let t = be(s);
  for (; Tt(t) && !tn(t); ) {
    if (Ci(t))
      return t;
    t = be(t);
  }
  return null;
}
function Si() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function tn(s) {
  return ["html", "body", "#document"].includes(Zt(s));
}
function _t(s) {
  return dt(s).getComputedStyle(s);
}
function en(s) {
  return Ft(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function be(s) {
  if (Zt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    rr(s) && s.host || // Fallback.
    Wt(s)
  );
  return rr(t) ? t.host : t;
}
function ko(s) {
  const t = be(s);
  return tn(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : Tt(t) && ss(t) ? t : ko(t);
}
function Be(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = ko(s), r = i === ((n = s.ownerDocument) == null ? void 0 : n.body), o = dt(i);
  return r ? t.concat(o, o.visualViewport || [], ss(i) ? i : [], o.frameElement && e ? Be(o.frameElement) : []) : t.concat(i, Be(i, [], e));
}
function xo(s) {
  const t = _t(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Tt(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Ts(e) !== r || Ts(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function ki(s) {
  return Ft(s) ? s : s.contextElement;
}
function _e(s) {
  const t = ki(s);
  if (!Tt(t))
    return Yt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = xo(t);
  let o = (r ? Ts(e.width) : e.width) / n, a = (r ? Ts(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Ic = /* @__PURE__ */ Yt(0);
function To(s) {
  const t = dt(s);
  return !Si() || !t.visualViewport ? Ic : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Pc(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== dt(s) ? !1 : t;
}
function ae(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = ki(s);
  let o = Yt(1);
  t && (n ? Ft(n) && (o = _e(n)) : o = _e(s));
  const a = Pc(r, e, n) ? To(r) : Yt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const p = dt(r), f = n && Ft(n) ? dt(n) : n;
    let g = p.frameElement;
    for (; g && n && f !== p; ) {
      const _ = _e(g), y = g.getBoundingClientRect(), v = _t(g), w = y.left + (g.clientLeft + parseFloat(v.paddingLeft)) * _.x, b = y.top + (g.clientTop + parseFloat(v.paddingTop)) * _.y;
      l *= _.x, c *= _.y, u *= _.x, h *= _.y, l += w, c += b, g = dt(g).frameElement;
    }
  }
  return Es({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
function Rc(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = Tt(e), r = Wt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Yt(1);
  const l = Yt(0);
  if ((i || !i && n !== "fixed") && ((Zt(e) !== "body" || ss(r)) && (o = en(e)), Tt(e))) {
    const c = ae(e);
    a = _e(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Dc(s) {
  return Array.from(s.getClientRects());
}
function No(s) {
  return ae(Wt(s)).left + en(s).scrollLeft;
}
function Lc(s) {
  const t = Wt(s), e = en(s), n = s.ownerDocument.body, i = ct(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ct(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + No(s);
  const a = -e.scrollTop;
  return _t(n).direction === "rtl" && (o += ct(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Fc(s, t) {
  const e = dt(s), n = Wt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = Si();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function zc(s, t) {
  const e = ae(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = Tt(s) ? _e(s) : Yt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function or(s, t, e) {
  let n;
  if (t === "viewport")
    n = Fc(s, e);
  else if (t === "document")
    n = Lc(Wt(s));
  else if (Ft(t))
    n = zc(t, e);
  else {
    const i = To(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Es(n);
}
function Eo(s, t) {
  const e = be(s);
  return e === t || !Ft(e) || tn(e) ? !1 : _t(e).position === "fixed" || Eo(e, t);
}
function Oc(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Be(s, [], !1).filter((a) => Ft(a) && Zt(a) !== "body"), i = null;
  const r = _t(s).position === "fixed";
  let o = r ? be(s) : s;
  for (; Ft(o) && !tn(o); ) {
    const a = _t(o), l = Ci(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ss(o) && !l && Eo(s, o)) ? n = n.filter((u) => u !== o) : i = a, o = be(o);
  }
  return t.set(s, n), n;
}
function Wc(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Oc(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, u) => {
    const h = or(t, u, i);
    return c.top = ct(h.top, c.top), c.right = Gt(h.right, c.right), c.bottom = Gt(h.bottom, c.bottom), c.left = ct(h.left, c.left), c;
  }, or(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Hc(s) {
  return xo(s);
}
function jc(s, t, e) {
  const n = Tt(t), i = Wt(t), r = e === "fixed", o = ae(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yt(0);
  if (n || !n && !r)
    if ((Zt(t) !== "body" || ss(i)) && (a = en(t)), n) {
      const c = ae(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = No(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ar(s, t) {
  return !Tt(s) || _t(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function $o(s, t) {
  const e = dt(s);
  if (!Tt(s))
    return e;
  let n = ar(s, t);
  for (; n && Mc(n) && _t(n).position === "static"; )
    n = ar(n, t);
  return n && (Zt(n) === "html" || Zt(n) === "body" && _t(n).position === "static" && !Ci(n)) ? e : n || Ac(s) || e;
}
const Bc = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || $o, r = this.getDimensions;
  return {
    reference: jc(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Vc(s) {
  return _t(s).direction === "rtl";
}
const Uc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Rc,
  getDocumentElement: Wt,
  getClippingRect: Wc,
  getOffsetParent: $o,
  getElementRects: Bc,
  getClientRects: Dc,
  getDimensions: Hc,
  getScale: _e,
  isElement: Ft,
  isRTL: Vc
};
function Kc(s, t) {
  let e = null, n;
  const i = Wt(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
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
    const f = ls(u), g = ls(i.clientWidth - (c + h)), _ = ls(i.clientHeight - (u + p)), y = ls(c), w = {
      rootMargin: -f + "px " + -g + "px " + -_ + "px " + -y + "px",
      threshold: ct(0, Gt(1, l)) || 1
    };
    let b = !0;
    function S(k) {
      const T = k[0].intersectionRatio;
      if (T !== l) {
        if (!b)
          return o();
        T ? o(!1, T) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      e = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(S, w);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Mo(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = ki(s), u = i || r ? [...c ? Be(c) : [], ...Be(t)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", e, {
      passive: !0
    }), r && v.addEventListener("resize", e);
  });
  const h = c && a ? Kc(c, e) : null;
  let p = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === c && f && (f.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      f && f.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let g, _ = l ? ae(s) : null;
  l && y();
  function y() {
    const v = ae(s);
    _ && (v.x !== _.x || v.y !== _.y || v.width !== _.width || v.height !== _.height) && e(), _ = v, g = requestAnimationFrame(y);
  }
  return e(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", e), r && v.removeEventListener("resize", e);
    }), h && h(), f && f.disconnect(), f = null, l && cancelAnimationFrame(g);
  };
}
const xi = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Uc,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Nc(s, t, {
    ...i,
    platform: r
  });
};
class Ao extends H {
  constructor(t) {
    super(t), this._ref = q(), this._handleDocClick = (e) => {
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
    return x(
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
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  _getWidthSetting() {
    const { width: t, minWidth: e, maxWidth: n } = this.props, i = {}, r = d(this.trigger).outerWidth();
    return typeof t == "function" ? i.width = t() : t === "100%" ? i.width = r : t && (i.width = us(t)), e === "100%" && (i.minWidth = r), n === "100%" && (i.maxWidth = r), i;
  }
  layout() {
    const { element: t, trigger: e, props: n } = this, { state: i } = n;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = Mo(e, t, () => {
      const { placement: r, width: o } = n;
      xi(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? vi() : null, bi(), wi(1)].filter(Boolean)
      }).then(({ x: a, y: l }) => {
        var c, u;
        if (he(e) || !Ks(e)) {
          d(t).css({ display: "none" });
          return;
        }
        d(t).css({
          left: a,
          top: l,
          ...this._getWidthSetting()
        }), (u = (c = this.props).onLayout) == null || u.call(c, t);
      }), o === "100%" && d(t).css(this._getWidthSetting());
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
    return Yl(this._render(t), this._getContainer(t));
  }
}
let vt = class extends H {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = q(), this._trigger = q(), this.toggle = async (e, n) => {
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
      return o === "closing" ? (await Cs(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await Cs(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1
    }, this._id = t.id ?? `_pick${ut()}`, this.changeState = this.changeState.bind(this);
  }
  get id() {
    return this._id;
  }
  get pop() {
    return this._pop.current;
  }
  get value() {
    return this.state.value;
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
    t && e ? e.call(this) : !t && n && n.call(this);
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
    if (n === i)
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
      r = /* @__PURE__ */ m(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ m(Se, { children: [
      /* @__PURE__ */ m(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
vt.Trigger = mi;
vt.Pop = Ao;
vt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Io = class extends vt {
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
      n ? /* @__PURE__ */ m(Q, { icon: n }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = d.extend({
      color: e.value
    }, n.style), n.className = x("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ m(Q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(Q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Io.defaultProps = {
  ...vt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class Po extends B {
}
Po.NAME = "ColorPicker";
Po.Component = Io;
const Ve = 24 * 60 * 60 * 1e3, z = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), qc = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(z(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, re = (s, t = /* @__PURE__ */ new Date()) => z(s).toDateString() === z(t).toDateString(), An = (s, t = /* @__PURE__ */ new Date()) => z(s).getFullYear() === z(t).getFullYear(), Ro = (s, t = /* @__PURE__ */ new Date()) => (s = z(s), t = z(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), ku = (s, t = /* @__PURE__ */ new Date()) => {
  s = z(s), t = z(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, xu = (s, t) => re(z(t), s), Tu = (s, t) => re(z(t).getTime() - Ve, s), Nu = (s, t) => re(z(t).getTime() + Ve, s), Do = (s) => !Number.isNaN(z(s).getTime()), pt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = z(s), !Do(s))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", An(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Eu = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = pt(s, An(s) ? n.month : n.full);
  if (re(s, t))
    return i;
  const r = pt(t, An(s, t) ? Ro(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
class Lo extends H {
  constructor() {
    super(...arguments), this._ref = q(), this._handleClickItem = (t, e) => {
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
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ m(
        J,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        J,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const lr = (s) => {
  if (!s)
    return;
  const t = z(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Fo = class extends vt {
  constructor(t) {
    super(t), this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (n) => {
      this.setTime(n.target.value);
    }, this._handleSetTime = (n, i) => {
      this.setTime({ [n]: String(i) });
    }, this._handleClearBtnClick = () => {
      this.setTime("");
    };
    const e = this.state;
    e.value === "now" && (e.value = pt(/* @__PURE__ */ new Date(), t.format));
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
    const n = lr(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? pt(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = lr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ m("i", { class: "i-time" }) : h = /* @__PURE__ */ m(Q, { icon: i })), [
      /* @__PURE__ */ m("input", { id: u, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ m("label", { for: u, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ m(Lo, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Fo.defaultProps = {
  ...vt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
j.addLang({
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
const Gc = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Ve;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, cr = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => pt(e, t)));
class Yc extends H {
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
    var M, E;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: n = 1,
      weekNames: i = j.getLang("weekNames"),
      monthNames: r = j.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h
    } = t, p = [], f = "btn ghost square rounded-full";
    for (let P = 0; P < 7; P++) {
      const R = (n + P) % 7;
      p.push(/* @__PURE__ */ m("div", { className: x("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ m("div", { children: i ? i[R] : R }) }, P));
    }
    const { startTime: g, days: _, firstDay: y } = Gc(o, a, n), v = y + _ * Ve;
    let w = g;
    const b = [], S = "yyyy-MM-dd", k = cr(l, S), T = cr(c, S), A = ((M = u ? z(u) : null) == null ? void 0 : M.getTime()) ?? Number.MAX_SAFE_INTEGER, I = ((E = h ? z(h) : null) == null ? void 0 : E.getTime()) ?? 0;
    for (; w <= v; ) {
      const P = [];
      for (let R = 0; R < 7; R++) {
        const L = new Date(w), $ = L.getDate(), O = pt(L, S), tt = L.getDay(), mt = Ro(L, y), ln = x("col mini-calendar-day", {
          active: k.has(O),
          selected: T.has(O),
          "is-first": $ === 1,
          "is-in-month": mt,
          "is-out-month": !mt,
          "is-today": re(L, e),
          "is-weekend": tt === 0 || tt === 6,
          disabled: !re(L, A) && !re(L, I) && (w > A || w < I)
        });
        P.push(
          /* @__PURE__ */ m("div", { className: ln, "data-date": O, children: /* @__PURE__ */ m("button", { type: "button", className: f, onClick: this._handleClickDate, children: $ === 1 && r ? r[L.getMonth()] : L.getDate() }) }, O)
        ), w += Ve;
      }
      b.push(/* @__PURE__ */ m("div", { className: "row", children: P }, w));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: p }),
      b
    ] });
  }
}
var Ls, Fs;
class hr extends H {
  constructor() {
    super(...arguments);
    at(this, Ls, q());
    at(this, Fs, (e) => {
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
      a.push(/* @__PURE__ */ m(K, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: nt(this, Fs), children: c }, c));
    return /* @__PURE__ */ m("div", { className: n, ref: nt(this, Ls), children: a });
  }
}
Ls = new WeakMap(), Fs = new WeakMap();
var Ge, Ye, Je, Ze, Xe, Qe, zs, zo, Os, Oo;
class Jc extends H {
  constructor(e) {
    super(e);
    at(this, zs);
    at(this, Os);
    at(this, Ge, void 0);
    at(this, Ye, void 0);
    at(this, Je, void 0);
    at(this, Ze, void 0);
    at(this, Xe, void 0);
    at(this, Qe, void 0);
    gt(this, Ge, q()), gt(this, Ye, (r) => {
      const o = d(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), gt(this, Je, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), gt(this, Ze, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), gt(this, Xe, (r) => {
      this.setState({ year: r, select: "day" });
    }), gt(this, Qe, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = qc(l, r.substring(5).replace("+", ""))), r = pt(l, "yyyy-MM-dd");
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
  render(e, n) {
    const {
      date: i,
      yearText: r = j.getLang("yearFormat") || "{0}",
      weekNames: o = j.getLang("weekNames"),
      monthNames: a = j.getLang("monthNames"),
      minDate: l = "1970-1-1",
      maxDate: c = "2099-1-1",
      weekStart: u
    } = e, h = i ? new Date(i) : void 0, {
      year: p,
      month: f,
      select: g
    } = n, _ = g === "day", y = z(typeof l == "function" ? l(h) : l), v = z(typeof c == "function" ? c(h) : c);
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: nt(this, Ge), onClick: nt(this, Ye), children: [
      hn(this, zs, zo).call(this, e),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(K, { type: g === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: U(r, p) }),
          /* @__PURE__ */ m(K, { type: g === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[f - 1] : f }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          _ ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(K, { type: "ghost", size: "sm", square: !0, onClick: nt(this, Je), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(K, { type: "ghost", size: "sm", square: !0, onClick: nt(this, Ze), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        _ ? /* @__PURE__ */ m(
          Yc,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: v,
            minDate: y,
            year: p,
            month: f,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        g === "year" ? /* @__PURE__ */ m(
          hr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: p,
            min: y.getFullYear(),
            max: v.getFullYear(),
            onChange: nt(this, Xe)
          }
        ) : g === "month" ? /* @__PURE__ */ m(
          hr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: f,
            min: 1,
            max: 12,
            onChange: nt(this, Qe)
          }
        ) : null,
        _ ? hn(this, Os, Oo).call(this, e) : null
      ] })
    ] });
  }
}
Ge = new WeakMap(), Ye = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), Xe = new WeakMap(), Qe = new WeakMap(), zs = new WeakSet(), zo = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m(J, { ...n })) : null;
}, Os = new WeakSet(), Oo = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": pt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(St, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ m(K, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let sn = class extends vt {
  constructor(t) {
    super(t), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, readonly: l, format: c, minDate: u, maxDate: h } = this.props;
      if (a || l)
        return;
      let p = z(n);
      if (u) {
        const g = z(typeof u == "function" ? u(p) : u);
        p < g && (p = g);
      }
      if (h) {
        const g = z(typeof h == "function" ? h(p) : h);
        p > g && (p = g);
      }
      const f = !n || Number.isNaN(p.getDay());
      this.setState({ value: f ? o ? r : "" : pt(p, c) }, () => {
        !f && i && i(n), this._afterSetDate();
      });
    }, this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (n) => {
      this.setDate(n.target.value);
    }, this._handleClearBtnClick = () => {
      this.setDate("");
    }, this._handleSetDate = (n) => {
      this.setDate(n);
    };
    const { value: e } = this.state;
    e && (this.state.value = pt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  getDate() {
    const { value: t } = this.state;
    if (!t.length)
      return null;
    const e = z(t);
    return Do(e) ? e : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let p;
    u && !r && c.length ? p = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? p = /* @__PURE__ */ m("i", { class: "i-calendar" }) : p = /* @__PURE__ */ m(Q, { icon: i }));
    const f = u ? c : l ? l(c) : c;
    return [
      /* @__PURE__ */ m(
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
      p ? /* @__PURE__ */ m("label", { for: h, className: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: x(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = j.getLang("today"), clearText: l, menu: c, actions: u, minDate: h, maxDate: p, required: f } = t;
    return /* @__PURE__ */ m(
      Jc,
      {
        onChange: this._handleSetDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: f ? "" : l,
        menu: c,
        actions: u,
        minDate: h,
        maxDate: p
      }
    );
  }
};
sn.defaultProps = {
  ...vt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
let Wo = class extends sn {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = z(t), n = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(n.getHours()), e.setMinutes(n.getMinutes()), this.setDate(pt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const n = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? n.setHours(e) : n.setMinutes(e), this.setDate(pt(n, this.props.format));
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
    return /* @__PURE__ */ m("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ m("div", { className: "divider" }),
      /* @__PURE__ */ m(
        Lo,
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
Wo.defaultProps = {
  ...sn.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Ho extends B {
}
Ho.NAME = "TimePicker";
Ho.Component = Fo;
class jo extends B {
}
jo.NAME = "DatePicker";
jo.Component = sn;
class Bo extends B {
}
Bo.NAME = "DatetimePicker";
Bo.Component = Wo;
const ur = "show", dr = "in", Zc = '[data-dismiss="modal"]', _n = "modal-hide", Ne = class se extends Ot {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Zc) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
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
    if (this._shown)
      return n.removeClass(_n).css("z-index", `${se.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    n.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [_n]: !1
    }, ur, o).css({
      zIndex: `${se.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !n.closest(c.modalElement).length && c.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((c) => {
      c !== this && !n.closest(c.modalElement).length && c.hide();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      n.addClass(dr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    d(this.modalElement).addClass(_n);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, d(this.modalElement).removeClass(dr), this.emit("hide"), this._setTimer(() => {
      d(this.modalElement).removeClass(ur), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && ((e = t.getAll().findLast((n) => n.shown && n !== this)) == null || e.show()), !0;
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
Ne.NAME = "Modal";
Ne.MULTI_INSTANCE = !0;
Ne.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Ne.hideOthers = !0;
Ne.zIndex = 1500;
let Ue = Ne;
d(window).on(`resize.${Ue.NAMESPACE}`, () => {
  Ue.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class Vo extends H {
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
    return bt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: x("modal-header", e), children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : bt(t) ? t : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ m(St, { ...t }) : null,
      e ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? bt(t) ? t : /* @__PURE__ */ m("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return bt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ m("div", { className: x("modal-footer", e), children: n ? /* @__PURE__ */ m(St, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ m("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ m("div", { className: x("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Vo.defaultProps = { closeBtn: !0 };
class Uo extends H {
  constructor() {
    super(...arguments), this._ref = q(), this.state = {}, this._watchIframeHeight = () => {
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
    return /* @__PURE__ */ m(
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
Uo.defaultProps = {
  watchHeight: !0
};
var Ti = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, wt = (s, t, e) => (Ti(s, t, "read from private field"), e ? e.call(s) : t.get(s)), $e = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ue = (s, t, e, n) => (Ti(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ds = (s, t, e) => (Ti(s, t, "access private method"), e), $t, Pe, Mt, $s, Ni, fs, In;
function Xc(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function Qc(s, t) {
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
    body: e === "html" ? /* @__PURE__ */ m(we, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function th(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ m(Uo, { url: e, watchHeight: !o })
  };
}
const eh = {
  custom: Xc,
  ajax: Qc,
  iframe: th
}, fr = "loading", Ko = class fe extends Ue {
  constructor() {
    super(...arguments), $e(this, $s), $e(this, fs), $e(this, $t, void 0), $e(this, Pe, void 0), $e(this, Mt, void 0);
  }
  get id() {
    return wt(this, Pe);
  }
  get loading() {
    var t;
    return (t = wt(this, $t)) == null ? void 0 : t.classList.contains(fr);
  }
  get shown() {
    var t;
    return !!((t = wt(this, $t)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = wt(this, $t);
    if (!t) {
      const { options: e } = this;
      let n = wt(this, Pe);
      n || (n = e.id || `modal-${ut()}`, ue(this, Pe, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = d("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      ue(this, $t, t);
    }
    return t;
  }
  get $emitter() {
    const t = wt(this, $t);
    return t ? d(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destoryOnHide && this.on("hidden", (t) => {
      t.target.closest(".modal") === this.modalElement && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = wt(this, $t);
    t && (d(t).removeData(this.constructor.KEY).remove(), ue(this, $t, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    wt(this, Mt) && clearTimeout(wt(this, Mt));
    const { modalElement: t, options: e } = this, n = d(t), { type: i, loadTimeout: r, loadingClass: o = fr, loadingText: a = null } = e, l = eh[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", a).addClass(o), r && ue(this, Mt, window.setTimeout(() => {
      ue(this, Mt, 0), ds(this, fs, In).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return c === !1 ? await ds(this, fs, In).call(this, this.options.failedTip) : c && typeof c == "object" && await ds(this, $s, Ni).call(this, c), wt(this, Mt) && (clearTimeout(wt(this, Mt)), ue(this, Mt, 0)), this.layout(), await Cs(100), n.removeClass(o), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), r.key === void 0 && (r.key = r.id);
      const o = fe.ensure(n, r), a = `${fe.NAMESPACE}.open${ut()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...u } = t, h = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ m("div", { children: n });
    i ? p = /* @__PURE__ */ m("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${i} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ m("div", { className: x("modal-body", h.bodyClass), children: p });
    const f = [];
    (Array.isArray(o) ? o : [o]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = j.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let g;
    const _ = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: v }) => {
        const w = fe.query(v.target);
        if (!w || w.key !== c)
          return;
        g = y.key, (a == null ? void 0 : a(y, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await fe.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: _, ...h },
      ...u
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await fe.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
$t = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
$s = /* @__PURE__ */ new WeakSet();
Ni = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return d(this.modalElement).html(s[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, He(
      /* @__PURE__ */ m(Vo, { ...s }),
      this.modalElement
    );
  });
};
fs = /* @__PURE__ */ new WeakSet();
In = function(s) {
  if (s)
    return ds(this, $s, Ni).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: s })
    });
};
Ko.DEFAULT = {
  ...Ue.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Pn = Ko;
const sh = '[data-toggle="modal"]';
class Rn extends Ot {
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
      e = Ue.ensure(n, t);
    } else
      e = Pn.ensure(this.container, t);
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
Rn.NAME = "ModalTrigger";
d(document).on(`click${Rn.NAMESPACE}`, sh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = Rn.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
const nh = {
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
let Xt = class extends X {
  constructor(t) {
    super(t), this._input = q(), this._file = q(), this._id = `file-selector-input-${ut()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
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
      size: Et(this.size, 1),
      maxFileSize: Et(typeof t == "string" ? os(t) : t, 1),
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
      size: Et(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: n, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? os(e) : e;
    return t.size <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Et(t.size, 1)
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: n, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? os(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Et(t.size, 1),
      totalSize: Et(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: n, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((n == null ? void 0 : n.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Et(t.size, 1),
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
      if (typeof o == "string" && (o = { message: o }), typeof o.message == "string" && (o.message = U(o.message, {
        name: e.name,
        size: Et(e.size, 1)
      })), !await Pn.confirm(o))
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
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = U(t.message, { ...this.info, ...e })), Pn.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? U(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ m("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: n, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = W({
      component: "label",
      attrs: {
        for: n ? void 0 : this._id
      },
      disabled: n,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ m("div", { className: "file-selector-tip", children: /* @__PURE__ */ m(V, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ m(K, { ...o, ...c, className: x(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ m("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ m(K, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: n, onChange: i } = t;
    return /* @__PURE__ */ m("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: n, style: "display:none", onChange: i }, "form");
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
    return e = W({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: Et(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ m(je, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: n = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ m("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ m("div", { className: "form-control size-sm", children: n }),
        /* @__PURE__ */ m("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = W({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ m(K, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ m(K, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ m(je, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: n } = this.state;
    return /* @__PURE__ */ m("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === n ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: n = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": us(n),
      "--file-selector-grid-height": us(i),
      "--file-selector-grid-gap": us(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ m("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
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
    const r = typeof n == "string" ? os(n) : n;
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
Xt.i18n = nh;
Xt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let Ei = class extends Xt {
};
Ei.defaultProps = {
  ...Xt.defaultProps,
  mode: "grid",
  accept: Xt.imageAccepts
};
const ih = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Xt,
  ImageSelector: Ei
}, Symbol.toStringTag, { value: "Module" }));
class $i extends B {
}
$i.NAME = "FileSelector";
$i.Component = Xt;
$i.replace = !0;
class Mi extends B {
}
Mi.NAME = "ImageSelector";
Mi.Component = Ei;
Mi.replace = !0;
rt(ih);
let nn = class extends Js {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
nn.NAME = "nav";
nn.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
const rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: nn
}, Symbol.toStringTag, { value: "Module" }));
class qo extends B {
}
qo.NAME = "Nav";
qo.Component = nn;
rt(rh);
function Ke(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Go({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Ke(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : U(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : U(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ m(K, { type: e, ...a });
}
function Yo({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Ke(i, e);
  return n = typeof n == "function" ? n(a) : U(n, a), /* @__PURE__ */ m(X, { ...o, children: [
    r,
    n
  ] });
}
function oh({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ m(K, { type: t, ...o })), l = (u, h) => {
    const p = [];
    for (let f = u; f <= h; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const g = Ke(n, f);
      i && (o.url = typeof i == "function" ? i(g) : U(i, g)), p.push(/* @__PURE__ */ m(K, { type: t, ...o }));
    }
    return p;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let ah = class extends H {
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
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ m(V, { content: r }, "content");
    (p || i) && (_ = /* @__PURE__ */ m("div", { className: p, children: _ }, "content"));
    const y = [], v = l ? /* @__PURE__ */ m("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ m("div", { className: u, children: [
      i ? /* @__PURE__ */ m(V, { className: h, content: i }) : null,
      v
    ] }, "heading")) : y.push(v), y.push(_), c && y.push(/* @__PURE__ */ m("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), g ? y : /* @__PURE__ */ m("div", { id: e, className: x("popover", a, { popup: n, "has-heading": i }), style: o, children: y });
  }
};
class Ai extends B {
}
Ai.NAME = "PopoverPanel";
Ai.Component = ah;
const lh = '[data-toggle="popover"]', pr = "show", mr = "in";
class ht extends Ot {
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
      const e = d(t.target);
      !e.closest(`#${this._id}`).length && (this._virtual || !e.closest(this._triggerElement).length) && this._targetElement !== e.closest(".popover")[0] && this.hide();
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
        !this.shown && c && this.setOptions({ target: c }), this.toggle({ event: l }), l.preventDefault();
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), d(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n, hideOthers: i } = t || {};
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
    const o = d(r), { animation: a, mask: l, onShow: c, onShown: u, trigger: h } = this.options;
    o.addClass(pr), a && o.addClass(a === !0 ? "fade" : a), this._shown = !0, this.render(), c == null || c.call(this), this.emit("show");
    const p = this.constructor, { hideOthers: f } = this.options;
    (i || p.hideOthers && this.options.hideOthers !== !1 || f) && p.getAll().forEach((_) => {
      _ !== this && _.shown && !o.closest(_.element).length && _.hide();
    });
    const { namespace: g } = this;
    h === "hover" && (this._clearDelayHide(), o.off(g).on(`pointerenter${g}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${g}`, () => {
      this.delayHide();
    })), o.on(`click${g}`, '[data-dismiss="popover"]', () => {
      this.hide();
    }), this._virtual || d(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(mr), this._resetTimer(() => {
        u == null || u.call(this), this.emit("shown");
      }, 200), l && d(document).off(`click${this.namespace}`, this._onClickDoc).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: n, onHide: i, onHidden: r, trigger: o } = this.options, a = d(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(mr), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || d(this._triggerElement).removeClass("with-popover-show").removeAttr("data-pop-placement"), d(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(pr), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, n && !t ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), d(document).off(this.namespace), !this._virtual) {
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
    n || (this._layoutWatcher = Mo(t, e, () => {
      const { animation: i, name: r = "popover" } = this.options;
      if (!this._virtual) {
        const o = {}, { width: a, height: l } = this.options;
        a && (o.width = typeof a == "function" ? a() : a === "100%" ? d(t).width() : a), l && (o.height = typeof l == "function" ? l() : l), Object.keys(o).length && d(e).css(o);
      }
      xi(...this._getLayoutOptions()).then(({ x: o, y: a, middlewareData: l, placement: c, strategy: u }) => {
        if (t instanceof HTMLElement && he(t)) {
          this.hide(!0);
          return;
        }
        const h = {
          position: u,
          left: o,
          top: a
        }, p = d(e).css(h), f = c.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[f], _ = l.arrow;
        _ && p.attr("data-pop-placement", f).find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), i === !0 && p.attr("class", `${p.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || d(this._triggerElement).attr("data-pop-placement", f);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = d(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Ai(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(d('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
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
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, u = l ? e.querySelector(".arrow") : null, h = u ? typeof l == "number" ? l : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: c,
      middleware: [
        i ? vi() : null,
        o ? bi(typeof o == "object" ? o : void 0) : null,
        a || h ? wi((a || 0) + h) : null,
        l ? Ec({ element: u }) : null,
        r ? Co({
          apply({ availableWidth: p, availableHeight: f, placement: g }) {
            d(e).css({ maxHeight: f - (["top", "bottom"].includes(g.split("-")[0]) ? h : 0) - 2, maxWidth: p - 2 });
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
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
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
}
ht.NAME = "Popover";
ht.Z_INDEX = 1700;
ht.MULTI_INSTANCE = !0;
ht.DEFAULT = {
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
ht.hideOthers = !1;
d(document).on(`click${ht.NAMESPACE} mouseenter${ht.NAMESPACE}`, lh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.data(ht.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ht.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const ch = '[data-toggle="dropdown"]';
class qt extends ht {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      const e = d(t.target);
      !e.closest(".not-hide-menu,.form-control,input,label,.nested-toggle-icon").length && (this._virtual || !e.closest(this._triggerElement).length) && this.hide();
    };
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
      content: xt(Ii, this._getMenuOptions())
    } : t;
  }
}
qt.NAME = "Dropdown";
qt.DEFAULT = {
  ...ht.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0
};
d(document).on(`click${qt.NAMESPACE} mouseenter${qt.NAMESPACE}`, ch, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.data(qt.KEY) && !t.is("[disabled],.disabled")) {
    const e = t.data() || {}, n = e.trigger || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== n)
      return;
    const r = {
      ...e,
      show: !0,
      triggerEvent: s
    };
    if (!r.target && t.is("a")) {
      const o = t.attr("href");
      o && "#.".includes(o[0]) && (r.target = o);
    }
    !r.target && !r.items && !r.menu && (r.target = t.next(".dropdown-menu")), qt.ensure(t, r), s.preventDefault();
  }
});
class rn extends K {
  constructor() {
    super(...arguments), this._ref = q();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = d(this.triggerElement), a = qt.get(this.triggerElement), l = {
      items: n,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...t
    };
    a ? a.setOptions(l) : o.data(l);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = qt.get(this.triggerElement)) == null || t.destroy();
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
rn.defaultProps = {
  caret: !0
};
Object.assign(Ct.ItemComponents, { dropdown: rn });
Object.assign(St.ItemComponents, { dropdown: rn });
class Ii extends yt {
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  layout() {
    var r;
    if (this.props.tree || this.isRoot)
      return;
    const t = (r = this.element) == null ? void 0 : r.parentElement, i = d(t).parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    !t || !i || xi(i, t, {
      placement: this.props.placement,
      middleware: [vi(), bi(), wi(1), Co({
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
    return W(this.isHoverTrigger ? {
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
      return /* @__PURE__ */ m("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ m("span", { className: "caret-right" }) });
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
}
Ii.defaultProps = {
  ...yt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Ii.inheritNestedProps = [...yt.inheritNestedProps, "container", "tree"];
function hh({
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
      url: typeof e == "function" ? e(u) : U(e, u)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : U(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(rn, { dropdown: i, ...o });
}
function Jo({
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
    const y = Ke(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = u.url = typeof l == "function" ? l(y) : U(l, y));
  }, g = Ke(i, t || 0);
  return u.url = typeof l == "function" ? l(g) : U(l, g), /* @__PURE__ */ m("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ m(K, { type: n, ...u, onClick: f })
  ] });
}
let ns = class extends St {
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
ns.NAME = "pager";
ns.ItemComponents = {
  ...St.ItemComponents,
  info: Yo,
  link: Go,
  nav: oh,
  "size-menu": hh,
  goto: Jo
};
ns.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class Zo extends B {
}
Zo.NAME = "Pager";
Zo.Component = ns;
const uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: ns,
  PagerGoto: Jo,
  PagerInfoItem: Yo,
  PagerLink: Go
}, Symbol.toStringTag, { value: "Module" }));
rt(uh);
class Pi extends B {
}
Pi.NAME = "Pick";
Pi.Component = vt;
Pi.replace = !0;
class Xo extends H {
  constructor(t) {
    super(t), this._searchInput = q(), this._measure = q(), this._changeTimer = 0, this._handleChange = (e) => {
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
      const e = io(t, {
        clear: {
          keys: "Escape",
          handler: () => {
            this.state.search.trim().length ? this.clear() : this.$pop.trigger("hidePop");
          }
        },
        enter: {
          keys: "Enter",
          handler: () => {
            this.$pop.trigger("selectActive");
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
    return i ? a = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ m("span", { className: "close" }) }) : a = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
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
class dh extends mi {
  constructor() {
    super(...arguments), this._search = q(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ m("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ m("span", { className: "text", children: /* @__PURE__ */ m(V, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return x(
      super._getClass(t),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n, hotkeys: i } = t;
    return /* @__PURE__ */ m(
      Xo,
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
    return a && (!p || o === void 0) ? (typeof a == "function" ? h = a.call(this, l, e) : typeof a == "string" && (h = U(a, { value: i, values: l, count: l.length })), h = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: h }, "selections")) : p ? h = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "selections") : h = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      u ? this._renderSearch(t) : null
    ] }, "selections"), [
      h,
      c,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        d(`#${o}`).val(n);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ m("option", { value: u, children: u }, u)) });
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
      this._skipTriggerChange !== n.value && a.trigger("change", vo), this._skipTriggerChange = !1;
    }
  }
}
class fh extends mi {
  constructor() {
    super(...arguments), this._search = q(), this._handleDeselectClick = (t) => {
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
    return x(
      super._getClass(t),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: n } = t;
    return /* @__PURE__ */ m(
      Xo,
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
    let g;
    if (f)
      g = this._renderSearch(t);
    else if (p || o === void 0 && h) {
      const { text: v } = p || { text: "", value: "" };
      typeof h == "function" ? g = h.call(this, i, n) : typeof h == "string" ? g = U(h, p) : g = /* @__PURE__ */ m(V, { content: v }), g = /* @__PURE__ */ m("span", { className: "picker-single-selection", title: typeof v == "string" ? v : void 0, children: g }, "main");
    } else
      g = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "main");
    const _ = u && !f ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      g,
      e,
      _,
      f ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
class is extends J {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
}
is.NAME = "tree";
is.defaultProps = {
  ...J.defaultProps,
  indent: 12
};
is.defaultItemProps = {
  ...J.defaultItemProps,
  innerComponent: "div"
};
is.inheritNestedProps = [...J.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class on extends yt {
  _getItem(t, e, n) {
    return is.getTreeItem(t, super._getItem(t, e, n));
  }
}
on.NAME = "tree";
on.inheritNestedProps = [...yt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
on.defaultItemProps = {
  ...yt.defaultProps,
  innerComponent: "div"
};
function Qo(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Qo(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class ph extends Ao {
  constructor() {
    super(...arguments), this._menu = q(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
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
        className: x(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
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
          const h = [...Qo(t.items).values()].filter((p) => !p.items && !this._disabledSet.has(p.value)).map((p) => p.value);
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
    return x(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r, header: o, footer: a, noMatchHint: l } = t, { items: c, search: u } = i;
    return W({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      items: c,
      defaultNestedShow: !0,
      activeOnHover: !0,
      search: u,
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
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ m(on, { ...n }) : /* @__PURE__ */ m(yt, { ...n });
  }
}
function pe(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && pe(n.items, e), e.set(String(n.value), n), e), t || /* @__PURE__ */ new Map());
}
let Ri = class extends vt {
  constructor(t) {
    super(t), this._updateTimer = 0, this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r = []) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((c) => !a.has(c));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const o = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), d.extend(this.state, {
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
        const r = pe(i);
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value ?? "");
    }
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  deselectAll() {
    this.setValue([]);
  }
  selectAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return;
    const n = [...pe(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(n);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = pe(t), n = new Set(this.valueList);
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
      if (await Cs(n || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = U(o, { search: encodeURIComponent(i) })), r = await ii(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = pe(r);
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || n.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      a = a.filter((l) => (l.key = l.key ?? l.value, l.value = String(l.value), !this.isEmptyValue(l.value))), n.maxItemsCount && (a = a.slice(0, n.maxItemsCount)), r.loading = !1, r.items = a, i.items = a, i.search = e.search;
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
      footer: this._renderToolbar(),
      valueList: this.valueList,
      noMatchHint: t.searchEmptyHint ?? j.getLang("searchEmptyHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? dh : fh);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: j.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: j.getLang("cancelSelect")
    }]), St.render(t, [], { size: "sm", getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], d.unique(e).reduce((n, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || n.push(i)), n), []);
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
        const a = pe(Array.isArray(r) ? r : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    return super.setValue(i, e);
  }
};
Ri.defaultProps = {
  ...vt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
Ri.Pop = ph;
class ta extends B {
}
ta.NAME = "Picker";
ta.Component = Ri;
j.addLang({
  zh_cn: {
    selectAll: "全选",
    cancelSelect: "取消选择",
    searchEmptyHint: "无匹配选项"
  },
  zh_tw: {
    selectAll: "全選",
    cancelSelect: "取消選擇",
    searchEmptyHint: "無匹配選項"
  },
  en: {
    selectAll: "Select All",
    cancelSelect: "Cancel Select",
    searchEmptyHint: "No matching options"
  }
});
class ea extends B {
}
ea.NAME = "SearchBox";
ea.Component = Zs;
rt(hc);
class sa extends B {
}
sa.NAME = "Toolbar";
sa.Component = St;
rt(ic);
const mh = '[data-toggle="tooltip"]';
class Bt extends ht {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: x("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Bt.NAME = "Tooltip";
Bt.DEFAULT = {
  ...ht.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
Bt.hideOthers = !0;
d(document).on(`click${Bt.NAMESPACE} mouseenter${Bt.NAMESPACE}`, mh, (s) => {
  const t = d(s.currentTarget);
  if (t.length && !t.data(Bt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Bt.ensure(t, { show: Bt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
var Vt, Ut;
class gr extends H {
  constructor(e) {
    super(e);
    at(this, Vt, void 0);
    at(this, Ut, void 0);
    gt(this, Vt, 0), gt(this, Ut, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (nt(this, Vt) && cancelAnimationFrame(nt(this, Vt)), gt(this, Vt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), gt(this, Vt, 0);
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
    e && (gt(this, Ut, typeof e == "string" ? document : e.current), nt(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), nt(this, Ut) && nt(this, Ut).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: u,
      ...o
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, p) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, p) * (e - _.height) / h)), /* @__PURE__ */ m(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": f
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
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
Vt = new WeakMap(), Ut = new WeakMap();
const Ms = /* @__PURE__ */ new Map(), As = [];
function na(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && Ms.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Ms.set(e, s), t != null && t.buildIn && !As.includes(e) && As.push(e);
}
function st(s, t) {
  na(s, t);
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
function ia(s) {
  return Ms.delete(s);
}
function gh(s) {
  if (typeof s == "string") {
    const t = Ms.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function ra(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = gh(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && ra(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function _h(s = [], t = !0) {
  return t && As.length && s.unshift(...As), s != null && s.length ? ra([], s, /* @__PURE__ */ new Set()) : [];
}
function oa() {
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
function yh(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function _r(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function yn(s, t = !1) {
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
function vh(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (w) => (typeof w == "function" && (w = w.call(s)), w = _r(w, 0), w < 1 && (w = Math.round(w * n)), w), u = {
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
  }, f = [], g = {};
  let _ = !1;
  const y = [], v = {};
  if (e.forEach((w) => {
    const { colTypes: b, onAddCol: S } = w;
    b && Object.entries(b).forEach(([k, T]) => {
      v[k] || (v[k] = []), v[k].push(T);
    }), S && y.push(S);
  }), t.cols.forEach((w) => {
    if (w.hidden)
      return;
    const { type: b = "", name: S } = w, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...w,
      type: b
    }, T = {
      name: S,
      type: b,
      setting: k,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, A = v[b];
    A && A.forEach(($) => {
      const O = typeof $ == "function" ? $.call(s, k) : $;
      O && Object.assign(k, O, w);
    });
    const { fixed: I, flex: M, minWidth: E = r, maxWidth: P = o } = k, R = _r(k.width || i, i);
    T.flex = M === !0 ? 1 : typeof M == "number" ? M : 0, T.width = yh(R < 1 ? Math.round(R * n) : R, E, P), y.forEach(($) => $.call(s, T)), f.push(T), g[T.name] = T;
    const L = I ? I === "left" ? h : p : u;
    L.list.push(T), L.totalWidth += T.width, L.width = L.totalWidth, T.flex && L.flexList.push(T), typeof k.order == "number" && (_ = !0);
  }), _) {
    const w = (b, S) => (b.setting.order ?? 0) - (S.setting.order ?? 0);
    f.sort(w), h.list.sort(w), u.list.sort(w), p.list.sort(w);
  }
  return yn(h, !0), yn(p, !0), u.widthSetting = n - h.width - p.width, yn(u), {
    list: f,
    map: g,
    left: h,
    center: u,
    right: p
  };
}
function wh(s) {
  var L;
  const { col: t, className: e, height: n, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: p, ...f } = s, g = {
    left: h ?? t.left,
    top: p ?? i.top,
    width: u ?? t.realWidth,
    height: n,
    ...a
  }, { align: _, border: y } = t.setting, v = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...t.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], b = ["dtable-cell-content", t.setting.cellClass], S = (L = i.data) == null ? void 0 : L[t.name], k = [l ?? S ?? ""], T = r ? r(k, { row: i, col: t, value: S }, s, xt) : k, A = [], I = [], M = {}, E = {};
  let P = "div";
  T == null || T.forEach(($) => {
    if (typeof $ == "object" && $ && !bt($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $ || "tagName" in $)) {
      const O = $.outer ? A : I;
      $.html ? O.push(/* @__PURE__ */ m("div", { className: x("dtable-cell-html", $.className), style: $.style, dangerouslySetInnerHTML: { __html: $.html }, ...$.attrs ?? {} })) : ($.style && Object.assign($.outer ? g : v, $.style), $.className && ($.outer ? w : b).push($.className), $.children && O.push($.children), $.attrs && Object.assign($.outer ? M : E, $.attrs)), $.tagName && !$.outer && (P = $.tagName);
    } else
      I.push($);
  });
  const R = P;
  return /* @__PURE__ */ m(
    "div",
    {
      className: x(w),
      style: g,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...M,
      children: [
        I.length > 0 && /* @__PURE__ */ m(R, { className: x(b), style: v, ...E, children: I }),
        A
      ]
    }
  );
}
function vn({
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
  CellComponent: u = wh,
  onRenderCell: h
}) {
  var _;
  const p = Array.isArray(s) ? s : [s], f = ((_ = p[0]) == null ? void 0 : _.top) ?? 0, g = p.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -n, top: -i + f }, children: p.reduce((y, v, w) => {
        const b = t.length;
        return t.forEach((S, k) => {
          y.push(
            /* @__PURE__ */ m(
              u,
              {
                className: x(
                  `is-${v.index % 2 ? "odd" : "even"}-row`,
                  k ? "" : "is-first-in-row",
                  k === b - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === g - 1 ? "is-last-row" : ""
                ),
                col: S,
                row: v,
                top: v.top - f,
                height: e,
                onRenderCell: h
              },
              `${v.index}:${S.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function aa({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: u,
  onRenderCell: h,
  children: p
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ m(
    vn,
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
  r.list.length && (g = /* @__PURE__ */ m(
    vn,
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
  return o.list.length && (_ = /* @__PURE__ */ m(
    vn,
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
  )), /* @__PURE__ */ m(
    "div",
    {
      className: x("dtable-block", c),
      style: { ...u, top: s, height: t },
      children: [
        f,
        g,
        _,
        p
      ]
    }
  );
}
var Di = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, N = (s, t, e) => (Di(s, t, "read from private field"), e ? e.call(s) : t.get(s)), D = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, G = (s, t, e, n) => (Di(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), lt = (s, t, e) => (Di(s, t, "access private method"), e), me, Re, Ce, Pt, ie, it, It, At, De, ps, Is, qe, Ht, Le, Fe, Dn, la, Ln, ca, Fn, ha, zn, ua, ms, On, an, Ps, Wn, Hn, jn, Bn, ze, gs, Rs, Li, Fi, da, Vn, fa;
let zi = class extends H {
  constructor(t) {
    super(t), D(this, Dn), D(this, Ln), D(this, Fn), D(this, zn), D(this, ms), D(this, ze), D(this, Rs), D(this, Fi), D(this, Vn), this.ref = q(), D(this, me, 0), D(this, Re, void 0), D(this, Ce, !1), D(this, Pt, void 0), D(this, ie, void 0), D(this, it, []), D(this, It, void 0), D(this, At, /* @__PURE__ */ new Map()), D(this, De, {}), D(this, ps, void 0), D(this, Is, []), D(this, qe, { in: !1 }), this.updateLayout = () => {
      N(this, me) && cancelAnimationFrame(N(this, me)), G(this, me, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, me, 0);
      }));
    }, D(this, Ht, (e, n) => {
      n = n || e.type;
      const i = N(this, At).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), D(this, Le, (e) => {
      N(this, Ht).call(this, e, `window_${e.type}`);
    }), D(this, Fe, (e) => {
      N(this, Ht).call(this, e, `document_${e.type}`);
    }), D(this, an, (e, n, i, r) => {
      const { row: o, col: a } = n;
      n.value = this.getCellValue(o, a), e[0] = n.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, n, i, r)), N(this, it).forEach((c) => {
        c[l] && (e = c[l].call(this, e, n, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, n, i, r)), e;
    }), D(this, Ps, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), D(this, Wn, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), N(this, it).forEach((u) => {
          var h;
          (h = u.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const u = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
            return;
          for (const h of N(this, it))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
              return;
        }
      }
    }), D(this, Hn, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), D(this, jn, (e) => {
      const n = d(e.target).closest(".dtable-cell");
      if (!n.length)
        return lt(this, ze, gs).call(this, !1);
      lt(this, ze, gs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), D(this, Bn, () => {
      lt(this, ze, gs).call(this, !1);
    }), G(this, Re, t.id ?? `dtable-${ut()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, ie, Object.freeze(_h(t.plugins))), N(this, ie).forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(N(this, De), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), lt(this, Rs, Li).call(this), N(this, it).forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, It)) == null ? void 0 : t.options) || N(this, Pt) || oa();
  }
  get plugins() {
    return N(this, it);
  }
  get layout() {
    return N(this, It);
  }
  get id() {
    return N(this, Re);
  }
  get data() {
    return N(this, De);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, qe);
  }
  componentWillReceiveProps() {
    G(this, Pt, void 0);
  }
  componentDidMount() {
    N(this, Ce) ? this.forceUpdate() : lt(this, ms, On).call(this), this.on("click", N(this, Wn)), this.on("keydown", N(this, Hn));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", N(this, jn)), this.on("mouseleave", N(this, Bn)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const n = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        G(this, ps, r);
        const { parent: o } = this;
        n.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : d(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      n.includes("window") && this.on("window_resize", this.updateLayout);
    }
    N(this, it).forEach((n) => {
      var r;
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, a]) => {
        a && this.on(o, a);
      })), (r = n.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    lt(this, ms, On).call(this), N(this, it).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, ps)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of N(this, At).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), N(this, Le)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), N(this, Fe)) : t.removeEventListener(n, N(this, Ht));
    N(this, it).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), N(this, ie).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), G(this, De, {}), N(this, At).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = N(this, At).get(t);
    i ? i.push(e) : (N(this, At).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Le)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Fe)) : (r = this.element) == null || r.addEventListener(t, N(this, Ht)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = N(this, At).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Le)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Fe)) : (o = this.element) == null || o.removeEventListener(t, N(this, Ht)));
  }
  emitCustomEvent(t, e) {
    N(this, Ht).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (p = i + _);
    }
    const f = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (f.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (f.scrollTop = p)), Object.keys(f).length ? (this.setState(f, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, f), e == null || e.call(this, !0);
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
    if (!N(this, Pt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      G(this, It, void 0);
    else if (n === "options") {
      if (G(this, Pt, void 0), !N(this, It))
        return;
      G(this, It, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
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
    return j(N(this, Is), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = lt(this, Vn, fa).call(this);
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
      const g = !t.rows.length;
      if (c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      N(this, it).forEach((_) => {
        var v;
        const y = (v = _.beforeRender) == null ? void 0 : v.call(this, t);
        y && (t = y);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, p.push(
        t.className,
        g ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && f.push(...t.children), g && u ? (delete h.height, f.push(
        /* @__PURE__ */ m("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ m(V, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (f.push(
        lt(this, Dn, la).call(this, t),
        lt(this, Ln, ca).call(this, t),
        lt(this, Fn, ha).call(this, t)
      ), t.scrollable && f.push(lt(this, zn, ua).call(this, t))), N(this, it).forEach((_) => {
        var v;
        const y = (v = _.onRender) == null ? void 0 : v.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && p.push(y.className), y.children && f.push(y.children));
      });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        id: N(this, Re),
        className: x(p),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: f
      }
    );
  }
};
me = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakSet();
la = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ m(
      aa,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, an),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    ho,
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
Ln = /* @__PURE__ */ new WeakSet();
ca = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ m(
    aa,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, an),
      children: l
    },
    "body"
  );
};
Fn = /* @__PURE__ */ new WeakSet();
ha = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    ho,
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
zn = /* @__PURE__ */ new WeakSet();
ua = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = s, { scrollbarSize: h = 12, horzScrollbarPos: p } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ m(
      gr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, Ps),
        left: n,
        bottom: (p === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: u + a } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: u + a } })
  ), l > a && t.push(
    /* @__PURE__ */ m(
      gr,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, Ps),
        right: 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
ms = /* @__PURE__ */ new WeakSet();
On = function() {
  var s;
  G(this, Ce, !1), N(this, it).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (s = this.options.afterRender) == null || s.call(this);
};
an = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
jn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakSet();
gs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = d(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, qe);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, qe, i);
};
Rs = /* @__PURE__ */ new WeakSet();
Li = function() {
  if (N(this, Pt))
    return !1;
  const t = { ...oa(), ...N(this, ie).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return G(this, Pt, t), G(this, it, N(this, ie).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), G(this, Is, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Fi = /* @__PURE__ */ new WeakSet();
da = function() {
  var I, M;
  const { plugins: s } = this;
  let t = N(this, Pt);
  const e = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((E) => {
    var R;
    const P = (R = E.beforeLayout) == null ? void 0 : R.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, E.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: E } = this;
    if (E)
      i = E.clientWidth;
    else {
      G(this, Ce, !0);
      return;
    }
  }
  const r = vh(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], u = (E, P, R) => {
    var $, O;
    const L = { data: R ?? { [a]: E }, id: E, index: c.length, top: 0 };
    if (R || (L.lazy = !0), c.push(L), (($ = t.onAddRow) == null ? void 0 : $.call(this, L, P)) !== !1) {
      for (const tt of s)
        if (((O = tt.onAddRow) == null ? void 0 : O.call(this, L, P)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let E = 0; E < o; E++)
      u(`${E}`, E);
  else
    Array.isArray(o) && o.forEach((E, P) => {
      typeof E == "object" ? u(`${E[a] ?? ""}`, P, E) : u(`${E ?? ""}`, P);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const E = t.onAddRows.call(this, h, r);
    E && (h = E);
  }
  for (const E of s) {
    const P = (I = E.onAddRows) == null ? void 0 : I.call(this, h, r);
    P && (h = P);
  }
  h.forEach((E, P) => {
    p[E.id] = E, E.index = P, E.top = E.index * l;
  });
  const { header: f, footer: g } = t, _ = f ? t.headerHeight || l : 0, y = g ? t.footerHeight || l : 0;
  let v = t.height, w = 0;
  const b = h.length * l, S = _ + y + b;
  if (typeof v == "function" && (v = v.call(this, S)), v === "auto")
    w = S;
  else if (typeof v == "object")
    w = Math.min(v.max, Math.max(v.min, S));
  else if (v === "100%") {
    const { parent: E } = this;
    if (E)
      w = E.clientHeight;
    else {
      w = 0, G(this, Ce, !0);
      return;
    }
  } else
    w = v;
  const k = w - _ - y, T = {
    options: t,
    allRows: c,
    width: i,
    height: w,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: b,
    header: f,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: y,
    cols: r
  }, A = (M = t.onLayout) == null ? void 0 : M.call(this, T);
  A && Object.assign(T, A), s.forEach((E) => {
    if (E.onLayout) {
      const P = E.onLayout.call(this, T);
      P && Object.assign(T, P);
    }
  }), G(this, It, T);
};
Vn = /* @__PURE__ */ new WeakSet();
fa = function() {
  (lt(this, Rs, Li).call(this) || !N(this, It)) && lt(this, Fi, da).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), p = [], { rowDataGetter: f } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
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
zi.addPlugin = na;
zi.removePlugin = ia;
function pa(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ m("a", { href: U(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Oi(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : U(s, e);
}
function ma(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? n ?? "" : s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), pt(e, s, n ?? e))) : n ?? e;
}
function ga(s, t) {
  const { link: e } = t.col.setting, n = pa(e, t, s[0]);
  return n && (s[0] = n), s;
}
function _a(s, t) {
  const { format: e, digits: n } = t.col.setting;
  let i = s[0];
  return typeof n == "number" && !Number.isNaN(Number(i)) && (i = Number(i), n >= 0 && (i = i.toFixed(n))), e && (i = Oi(e, t, i)), s[0] = i, s;
}
function ya(s, t) {
  const { map: e, mapSplitter: n = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = s[0];
    typeof r == "string" && n && (r = r.split(n)), typeof e == "function" ? s[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), s[0] = r.map((o) => e[o] ?? o).join(i ?? n));
  }
  return s;
}
function va(s, t, e) {
  const n = {};
  return typeof s == "function" ? Object.assign(n, s(e)) : Object.keys(s).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[s[i]];
    r !== void 0 && (n[i] = r);
  }), Object.keys(n).length && t.push({ style: n }), t;
}
function wa(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = ma(n, t, s[0], i), s;
}
function Un(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Oi(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const bh = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Un(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: u = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ m(
          pi,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ m(
          Qs,
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
    if (e && (s = wa(s, t, e)), s = ya(s, t), s = _a(s, t), n ? s = Un(s, t) : s = ga(s, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = U(i, t.row.data) : typeof s[0] == "string" && (o = s[0]), s.push({ attrs: { title: o } });
    }
    return r && (s = va(r, s, t)), s;
  }
}, Ch = st(bh, { buildIn: !0 }), Sh = {
  default: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return n === i ? 0 : n == null ? 1 : String(n).localeCompare(String(i));
  },
  date: (s, t, e) => {
    var r, o;
    const n = z(((r = s.data) == null ? void 0 : r[e.name]) ?? 0), i = z(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return n.getTime() - i.getTime();
  },
  number: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(n) - Number.parseFloat(i);
  }
}, kh = {
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
      ...Sh,
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
    const o = ((l = n == null ? void 0 : n.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${o}` });
    return s[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      s[0],
      a
    ] }), s.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), s;
  }
}, xh = st(kh, { buildIn: !0 }), Th = {
  html: { component: we }
}, Nh = {
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
        component: we,
        props: { html: U(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Th[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((p) => {
        if (p) {
          const { props: f } = p;
          f && d.extend(u, typeof f == "function" ? f.call(this, t) : f), l = p.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(h, { ...u }) };
    }), s;
  }
}, Eh = st(Nh);
function $h(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, u) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === u || (u ? n[c] = !0 : delete n[c], i[c] = u);
  };
  if (s === void 0 ? (t === void 0 && (t = !ba.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !n[c]);
  })), Object.keys(i).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    c && Object.keys(c).forEach((u) => {
      c[u] ? n[u] = !0 : delete n[u];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function Mh(s) {
  return this.state.checkedRows[s] ?? !1;
}
function ba() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function Ah() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function Ih(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function yr(s, t, e = !1, n = void 0) {
  return /* @__PURE__ */ m(Ys, { className: "dtable-checkbox", checked: s, disabled: e, label: n });
}
const vr = 'input[type="checkbox"],.dtable-checkbox', Ph = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: yr
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
    toggleCheckRows: $h,
    isRowChecked: Mh,
    isAllRowChecked: ba,
    getChecks: Ah,
    toggleCheckable: Ih
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: yr(s, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [/* @__PURE__ */ m(V, { className: "dtable-check-info", content: n.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ m("div", { className: "dtable-check-info", children: r.join(", ") })
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
    const e = t.closest(vr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = d(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(vr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Rh = st(Ph), Dh = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new ts(`DTable:${this.id}`) };
  }
}, Lh = st(Dh);
var Ca = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Ca || {});
function Ds(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = Ds.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ds.call(this, t.parent).level + 1 : 0, t;
}
function Fh(s) {
  return s !== void 0 ? Ds.call(this, s) : this.data.nestedMap;
}
function zh(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Sa.call(this)), t) {
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
function Sa() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function ka(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = ka(s, t, o.children, n + 1)));
  }
  return t;
}
function xa(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, xa(s, r, e, n);
  }), i;
}
function Ta(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Ta(s, r.parent, e, n, i);
}
const cs = "dtable-nested-toggle", Oh = {
  name: "nested",
  plugins: [Lh],
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
        const o = xa(this, i, r, n);
        o != null && o.parent && Ta(this, o.parent, r, n, e);
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
    getNestedInfo: Fh,
    toggleRow: zh,
    isAllCollapsed: Sa,
    getNestedRowInfo: Ds
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
    return s.forEach((n) => {
      var a, l;
      const i = t.get(n.id) ?? {
        state: "",
        level: 0
      };
      let r = ((a = n.data) == null ? void 0 : a[this.options.nestedParentKey ?? "parent"]) ?? [];
      Array.isArray(r) || (r = [r]);
      let o;
      for (r = [...r]; r.length; ) {
        let c = r.pop();
        if (c === void 0)
          continue;
        if (c = String(c), e.get(c)) {
          o = c;
          break;
        }
      }
      if (i.parent = o === "0" ? void 0 : o, (l = n.data) != null && l[this.options.asParentKey ?? "asParent"] && (i.children = []), t.set(n.id, i), o) {
        let c = t.get(o);
        c || (c = {
          state: "",
          level: 0
        }, t.set(o, c)), c.children || (c.children = []), c.children.push(n.id);
      }
    }), s = s.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), ka(this.data.nestedMap), s.sort((n, i) => {
      const r = this.getNestedRowInfo(n.id), o = this.getNestedRowInfo(i.id), a = (r.order ?? 0) - (o.order ?? 0);
      return a === 0 ? n.index - i.index : a;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ m("a", { className: `${cs} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ m("a", { className: `${cs} state`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(`.${cs}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${cs}`)))
      return this.toggleRow(t), !0;
  }
}, Wh = st(Oh);
function wn(s, { row: t, col: e }) {
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
    className: x(r, c.className, "flex-none")
  };
  if (s[0] = /* @__PURE__ */ m(qs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, f = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      s[0],
      /* @__PURE__ */ m("div", { children: u })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ m("span", { children: u })
    ] }));
  return s;
}
const Hh = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: wn
    },
    avatarBtn: {
      onRenderCell: wn
    },
    avatarName: {
      onRenderCell: wn
    }
  }
}, jh = st(Hh, { buildIn: !0 }), Bh = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { setting: n } = e;
    let { sortType: i } = n;
    if (e.setting.sort !== void 0 || i === !1)
      return s;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${a}` });
      s.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = n;
      if (c) {
        const u = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, u, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...p } = c;
        s[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: U(h, { ...n, sortType: u }), ...p, children: [
          s[0],
          l
        ] });
      } else
        s.push(l);
    }
    return s;
  }
}, Vh = st(Bh, { buildIn: !0 }), bn = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Uh = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    bn(t.left.list), bn(t.center.list), bn(t.right.list);
  }
}, Kh = st(Uh);
const qh = {
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
        s.push(/* @__PURE__ */ m("div", { class: "dtable-header-group", style: o, children: e }));
      }
      s.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return s;
  }
}, Gh = st(qh), Yh = {
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
        const { index: g } = p, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const y = t.call(this, { row: c, col: p });
        if (!y)
          return;
        const v = Math.min(y.colSpan || 1, l.length - f), w = Math.min(y.rowSpan || 1, i.length - u);
        if (v <= 1 && w <= 1)
          return;
        let b = 0;
        for (let S = 0; S < v; S++) {
          b += l[f + S].realWidth;
          for (let k = 0; k < w; k++) {
            const T = `C${g + S}R${h + k}`;
            T !== _ && n.add(T);
          }
        }
        e.set(_, {
          colSpan: v,
          rowSpan: w,
          width: b,
          height: o * w
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
}, Jh = st(Yh), Zh = {
  name: "mousemove",
  events: {
    mousemove(s) {
      this.data.mmRafID && (cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = 0), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", s);
      }), s.preventDefault();
    },
    document_mousemove(s) {
      this.data.dmmRafID && (cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = 0), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", s);
      }), s.preventDefault();
    }
  }
}, Na = st(Zh);
function Xh() {
  var w, b;
  const { scrollToMouse: s } = this.data;
  if (!s)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: n } = s;
  if (!t || Date.now() - e < n)
    return;
  const i = (b = (w = this.ref.current) == null ? void 0 : w.querySelector(".dtable-body")) == null ? void 0 : b.getBoundingClientRect();
  if (!i)
    return;
  const { maxStep: r, detectPadding: o, speed: a, side: l } = s, { x: c, y: u } = t, { left: h, top: p, right: f, bottom: g } = i;
  let _ = 0;
  c < h - o ? _ = -Math.max(r, h - o - c) : c > f - o && (_ = Math.max(r, c - (f - o)));
  let y = 0;
  if (u < p - o ? y = -Math.max(r, p - o - u) : u > g - o && (y = Math.max(r, u - (g - o))), l) {
    const S = new Set((Array.isArray(l) ? l : [l]).reduce((k, T) => (T === "x" ? k.push("left", "right") : T === "y" ? k.push("top", "bottom") : k.push(T), k), []));
    (!S.has("left") && _ < 0 || !S.has("right") && _ > 0) && (_ = 0), (!S.has("top") && y < 0 || !S.has("bottom") && y > 0) && (y = 0);
  }
  const v = {};
  _ !== 0 && (v.scrollLeft = this.layout.scrollLeft + a * _), y !== 0 && (v.scrollTop = this.layout.scrollTop + a * y), this.scroll(v);
}
const Qh = {
  name: "autoscroll",
  plugins: [Na],
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
        speed: 0.2,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...s
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(Xh.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, tu = st(Qh);
const eu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(s, t) {
      return this.options.nested ? this.getNestedRowInfo(s.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (s) => !!s.sortable,
  plugins: [Na, tu],
  events: {
    mousedown(s) {
      var r;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!d(s.target).closest(t).length)
        return;
      const n = this.getPointerInfo(s);
      if (!n || n.rowID === "HEADER")
        return;
      const i = this.getRowInfo(n.rowID);
      !i || ((r = this.options.onSortStart) == null ? void 0 : r.call(this, i, s)) === !1 || (this.data.sortableInfo = { from: i, offset: s.clientY - n.cellElement.getBoundingClientRect().top });
    },
    document_mouseup(s) {
      var e;
      if (!this.data.sortableInfo)
        return;
      this.stopScrollToMouse();
      const t = this.getSortingState(s);
      if (t) {
        let n, i;
        const { sortingFrom: r, sortingTo: o, sortingSide: a } = t;
        if (o && a) {
          const l = [...this.layout.rows], c = r.index, u = o.index, h = l.splice(c, 1);
          l.splice(u, 0, h[0]), n = {}, i = [], l.forEach(({ id: p }, f) => {
            n[p] = f, i.push(p);
          }), ((e = this.options.onSort) == null ? void 0 : e.call(this, r, o, a, i)) === !1 && (n = void 0, i = void 0);
        }
        this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: d.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, n ? { rowOrders: n } : null)
        }, () => {
          var l;
          (l = this.options.onSortEnd) == null || l.call(this, r, o, a, i), setTimeout(() => {
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
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(s) {
      var T;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: n, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, u = l.height - n - i, h = s.clientX - l.left, p = s.clientY - l.top - n;
      if (h < 0 || h > c || p < 0 || p > u)
        return e.state;
      const f = p + o, g = r.find((A) => A.top <= f && A.top + a > f);
      if (!g)
        return e.state;
      const _ = e.from, y = g.id !== _.id ? g.id : void 0, v = y ? this.getRowInfo(y) : void 0, w = p, b = f < g.top + a / 2 ? "before" : "after";
      return v && ((T = this.options.canSortTo) == null ? void 0 : T.call(this, _, v, b)) !== !1 ? {
        sortingFrom: _,
        sortingPos: w,
        sortingTo: v,
        sortingSide: b
      } : {
        sortingFrom: _,
        sortingPos: w,
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
    t && (e.some((n) => n.id === t.id) || (s.visibleRows = [...e, t]), s.className = x(s.className, "dtable-sorting"));
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
}, su = st(eu), nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Ca,
  avatar: jh,
  cellspan: Jh,
  checkable: Rh,
  custom: Eh,
  group: Kh,
  headerGroup: Gh,
  nested: Wh,
  renderDatetime: ma,
  renderDatetimeCell: wa,
  renderFormat: Oi,
  renderFormatCell: _a,
  renderHtmlCell: Un,
  renderLink: pa,
  renderLinkCell: ga,
  renderMapCell: ya,
  renderStyleMapCell: va,
  rich: Ch,
  sort: xh,
  sortType: Vh,
  sortable: su
}, Symbol.toStringTag, { value: "Module" }));
class rs extends B {
  setOptions(t) {
    return t = super.setOptions(t), t.parent || (t.parent = this.element), t;
  }
}
rs.NAME = "DTable";
rs.Component = zi;
rs.definePlugin = st;
rs.removePlugin = ia;
rs.plugins = nu;
var Ea = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, wr = (s, t, e) => (Ea(s, t, "read from private field"), e ? e.call(s) : t.get(s)), iu = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, br = (s, t, e, n) => (Ea(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ge;
const ru = "nav", _s = '[data-toggle="tab"]', ou = "active";
class $a extends Ot {
  constructor() {
    super(...arguments), iu(this, ge, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(_s);
    let i = t ? d(t).closest(_s) : n.filter(`.${ou}`);
    if (!i.length && (i = e.find(_s).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = d(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), wr(this, ge) && clearTimeout(wr(this, ge)), br(this, ge, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), br(this, ge, 0);
    }, 10)));
  }
}
ge = /* @__PURE__ */ new WeakMap();
$a.NAME = "Tabs";
d(document).on("click.tabs.zui", _s, (s) => {
  s.preventDefault();
  const t = d(s.target), e = t.closest(`.${ru}`);
  e.length && $a.ensure(e).active(t);
});
export {
  d as $,
  Hr as Ajax,
  _o as Avatar,
  cu as BUILD,
  yo as BtnGroup,
  Rl as Bus,
  Po as ColorPicker,
  ci as CommonList,
  Ot as Component,
  B as ComponentFromReact,
  bs as Computed,
  V as CustomContent,
  ho as CustomRender,
  rs as DTable,
  jo as DatePicker,
  Bo as DatetimePicker,
  qt as Dropdown,
  $i as FileSelector,
  X as HElement,
  we as HtmlContent,
  Q as Icon,
  Mi as ImageSelector,
  ui as Menu,
  wu as Messager,
  Pn as Modal,
  Ue as ModalBase,
  Rn as ModalTrigger,
  qo as Nav,
  Zo as Pager,
  Pi as Pick,
  ta as Picker,
  uo as Portal,
  go as ProgressCircle,
  H as ReactComponent,
  ea as SearchBox,
  di as SearchMenu,
  Hl as Sticky,
  Ve as TIME_DAY,
  $a as Tabs,
  Ho as TimePicker,
  sa as Toolbar,
  Bt as Tooltip,
  lu as VERSION,
  qc as addDate,
  ro as bindHotkeys,
  Lt as bus,
  d as cash,
  x as classes,
  Ie as componentsMap,
  os as convertBytes,
  Al as create,
  z as createDate,
  Sl as createFormData,
  Yl as createPortal,
  q as createRef,
  yl as deepGet,
  _l as deepGetPath,
  uu as defineFn,
  Cs as delay,
  Il as disableScroll,
  fu as dom,
  tr as downloadFile,
  Wl as enterFullscreen,
  ii as fetchData,
  Et as formatBytes,
  pt as formatDate,
  Eu as formatDateSpan,
  U as formatString,
  jr as getClassList,
  xs as getComponent,
  ai as getFullscreenElement,
  io as getHotkeysMap,
  Ul as getReactComponent,
  kn as getZData,
  xt as h,
  du as hotkeys,
  j as i18n,
  Sn as isDiff,
  hu as isFetchSetting,
  re as isSameDay,
  Ro as isSameMonth,
  ku as isSameWeek,
  An as isSameYear,
  xu as isToday,
  Nu as isTomorrow,
  Do as isValidDate,
  bt as isValidElement,
  Tu as isYesterday,
  W as mergeProps,
  ut as nextGid,
  to as parseSize,
  co as reactComponents,
  rt as registerReactComponent,
  Qr as removeUndefinedProps,
  He as render,
  Nn as renderCustomContent,
  ql as renderCustomResult,
  Gi as setZData,
  xl as shareData,
  En as store,
  Br as storeData,
  Vr as takeData,
  us as toCssSize,
  ao as toggleFullscreen,
  oo as unbindHotkeys
};
//# sourceMappingURL=zui.esm.js.map
