var an = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var it = (s, t, e) => (an(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ot = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, pt = (s, t, e, n) => (an(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var ln = (s, t, e) => (an(s, t, "access private method"), e);
const bu = "3.0.0", wu = 1723286456588, Dt = document, ms = window, Er = Dt.documentElement, oe = Dt.createElement.bind(Dt), $r = oe("div"), cn = oe("table"), za = oe("tbody"), Gi = oe("tr"), { isArray: Fs, prototype: Ar } = Array, { concat: Oa, filter: Kn, indexOf: Mr, map: Pr, push: Fa, slice: Ir, some: qn, splice: Ha } = Ar, Wa = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ja = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ba = /<.+>/, Va = /^\w+$/;
function Gn(s, t) {
  const e = Ua(t);
  return !s || !e && !se(t) && !Z(t) ? [] : !e && ja.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Va.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class Hs {
  constructor(t, e) {
    if (!t)
      return;
    if (Cn(t))
      return t;
    let n = t;
    if (et(t)) {
      const i = e || Dt;
      if (n = Wa.test(t) && se(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ba.test(t) ? Lr(t) : Cn(i) ? i.find(t) : et(i) ? f(i).find(t) : Gn(t, i), !n)
        return;
    } else if (ae(t))
      return this.ready(t);
    (n.nodeType || n === ms) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new Hs(t, e);
  }
}
const S = Hs.prototype, f = S.init;
f.fn = f.prototype = S;
S.length = 0;
S.splice = Ha;
typeof Symbol == "function" && (S[Symbol.iterator] = Ar[Symbol.iterator]);
function Cn(s) {
  return s instanceof Hs;
}
function _e(s) {
  return !!s && s === s.window;
}
function se(s) {
  return !!s && s.nodeType === 9;
}
function Ua(s) {
  return !!s && s.nodeType === 11;
}
function Z(s) {
  return !!s && s.nodeType === 1;
}
function Ka(s) {
  return !!s && s.nodeType === 3;
}
function qa(s) {
  return typeof s == "boolean";
}
function ae(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function ut(s) {
  return s === void 0;
}
function ze(s) {
  return s === null;
}
function Rr(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Yn(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
f.isWindow = _e;
f.isFunction = ae;
f.isArray = Fs;
f.isNumeric = Rr;
f.isPlainObject = Yn;
function X(s, t, e) {
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
f.each = X;
S.each = function(s) {
  return X(this, s);
};
S.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function _s(...s) {
  const t = qa(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return _s(t, f, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (Fs(r[o]) || Yn(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), _s(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
f.extend = _s;
S.extend = function(s) {
  return _s(S, s);
};
const Ga = /\S+/g;
function Ws(s) {
  return et(s) ? s.match(Ga) || [] : [];
}
S.toggleClass = function(s, t) {
  const e = Ws(s), n = !ut(t);
  return this.each((i, r) => {
    Z(r) && X(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
S.addClass = function(s) {
  return this.toggleClass(s, !0);
};
S.removeAttr = function(s) {
  const t = Ws(s);
  return this.each((e, n) => {
    Z(n) && X(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Ya(s, t) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !Z(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return ze(e) ? void 0 : e;
      }
      return ut(t) ? this : ze(t) ? this.removeAttr(s) : this.each((e, n) => {
        Z(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
S.attr = Ya;
S.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
S.hasClass = function(s) {
  return !!s && qn.call(this, (t) => Z(t) && t.classList.contains(s));
};
S.get = function(s) {
  return ut(s) ? Ir.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
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
function Ja(s) {
  return ut(s) ? this.get().map((t) => Z(t) || Ka(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Z(e) && (e.textContent = s);
  });
}
S.text = Ja;
function Lt(s, t, e) {
  if (!Z(s))
    return;
  const n = ms.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function Tt(s, t) {
  return parseInt(Lt(s, t), 10) || 0;
}
function Yi(s, t) {
  return Tt(s, `border${t ? "Left" : "Top"}Width`) + Tt(s, `padding${t ? "Left" : "Top"}`) + Tt(s, `padding${t ? "Right" : "Bottom"}`) + Tt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const hn = {};
function Za(s) {
  if (hn[s])
    return hn[s];
  const t = oe(s);
  Dt.body.insertBefore(t, null);
  const e = Lt(t, "display");
  return Dt.body.removeChild(t), hn[s] = e !== "none" ? e : "block";
}
function Ji(s) {
  return Lt(s, "display") === "none";
}
function Dr(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function js(s) {
  return et(s) ? (t, e) => Dr(e, s) : ae(s) ? s : Cn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
S.filter = function(s) {
  const t = js(s);
  return f(Kn.call(this, (e, n) => t.call(e, n, e)));
};
function Gt(s, t) {
  return t ? s.filter(t) : s;
}
S.detach = function(s) {
  return Gt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Xa = /^\s*<(\w+)[^>]*>/, Qa = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Zi = {
  "*": $r,
  tr: za,
  td: Gi,
  th: Gi,
  thead: cn,
  tbody: cn,
  tfoot: cn
};
function Lr(s) {
  if (!et(s))
    return [];
  if (Qa.test(s))
    return [oe(RegExp.$1)];
  const t = Xa.test(s) && RegExp.$1, e = Zi[t] || Zi["*"];
  return e.innerHTML = s, f(e.childNodes).detach().get();
}
f.parseHTML = Lr;
S.has = function(s) {
  const t = et(s) ? (e, n) => Gn(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
S.not = function(s) {
  const t = js(s);
  return this.filter((e, n) => (!et(s) || Z(n)) && !t.call(n, e, n));
};
function Ot(s, t, e, n) {
  const i = [], r = ae(t), o = n && js(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Fa.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function zr(s) {
  return s.multiple && s.options ? Ot(Kn.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function tl(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Ur.test(e.type)) {
      const i = Fs(s) ? Pr.call(s, String) : ze(s) ? [] : [String(s)];
      n ? X(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ut(s) || ze(s) ? "" : s;
  }) : this[0] && zr(this[0]);
}
S.val = tl;
S.is = function(s) {
  const t = js(s);
  return qn.call(this, (e, n) => t.call(e, n, e));
};
f.guid = 1;
function At(s) {
  return s.length > 1 ? Kn.call(s, (t, e, n) => Mr.call(n, t) === e) : s;
}
f.unique = At;
S.add = function(s, t) {
  return f(At(this.get().concat(f(s, t).get())));
};
S.children = function(s) {
  return Gt(f(At(Ot(this, (t) => t.children))), s);
};
S.parent = function(s) {
  return Gt(f(At(Ot(this, "parentNode"))), s);
};
S.index = function(s) {
  const t = s ? f(s)[0] : this[0], e = s ? this : f(t).parent().children();
  return Mr.call(e, t);
};
S.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
S.siblings = function(s) {
  return Gt(f(At(Ot(this, (t) => f(t).parent().children().not(t)))), s);
};
S.find = function(s) {
  return f(At(Ot(this, (t) => Gn(s, t))));
};
const el = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sl = /^$|^module$|\/(java|ecma)script/i, nl = ["type", "src", "nonce", "noModule"];
function il(s, t) {
  const e = f(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (sl.test(i.type) && Er.contains(i)) {
      const r = oe("script");
      r.text = i.textContent.replace(el, ""), X(nl, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function rl(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && il(t, s.ownerDocument);
}
function Yt(s, t, e, n, i, r, o, a) {
  return X(s, (l, c) => {
    X(f(c), (u, h) => {
      X(f(t), (p, d) => {
        const m = e ? h : d, _ = e ? d : h, v = e ? u : p;
        rl(m, v ? _.cloneNode(!0) : _, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
S.after = function() {
  return Yt(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return Yt(arguments, this, !1, !1, !0);
};
function ol(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ut(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    Z(n) && (t ? f(n).empty().append(s) : n.innerHTML = s);
  });
}
S.html = ol;
S.appendTo = function(s) {
  return Yt(arguments, this, !0, !1, !0);
};
S.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = f(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
S.before = function() {
  return Yt(arguments, this, !1, !0);
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
  return Yt(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(s) {
  return Yt(arguments, this, !0, !0);
};
S.prepend = function() {
  return Yt(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(s) {
  return Yt(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return f(At(Ot(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
S.next = function(s, t, e) {
  return Gt(f(At(Ot(this, "nextElementSibling", t, e))), s);
};
S.nextAll = function(s) {
  return this.next(s, !0);
};
S.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
S.parents = function(s, t) {
  return Gt(f(At(Ot(this, "parentElement", !0, t))), s);
};
S.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
S.prev = function(s, t, e) {
  return Gt(f(At(Ot(this, "previousElementSibling", t, e))), s);
};
S.prevAll = function(s) {
  return this.prev(s, !0);
};
S.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
S.map = function(s) {
  return f(Oa.apply([], Pr.call(this, (t, e) => s.call(t, e, t))));
};
S.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Lt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Er;
  });
};
S.slice = function(s, t) {
  return f(Ir.call(this, s, t));
};
const al = /-([a-z])/g;
function Jn(s) {
  return s.replace(al, (t, e) => e.toUpperCase());
}
S.ready = function(s) {
  const t = () => setTimeout(s, 0, f);
  return Dt.readyState !== "loading" ? t() : Dt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + ms.pageYOffset,
    left: t.left + ms.pageXOffset
  };
};
S.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Lt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Lt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && Z(i)) {
      const r = f(i).offset();
      e.top -= r.top + Tt(i, "borderTopWidth"), e.left -= r.left + Tt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Tt(s, "marginTop"),
    left: e.left - Tt(s, "marginLeft")
  };
};
const Or = {
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
    if (et(s))
      return s = Or[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
S.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Or[s] || s];
  });
};
const ll = /^--/;
function Zn(s) {
  return ll.test(s);
}
const un = {}, { style: cl } = $r, hl = ["webkit", "moz", "ms"];
function ul(s, t = Zn(s)) {
  if (t)
    return s;
  if (!un[s]) {
    const e = Jn(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${hl.join(`${n} `)}${n}`.split(" ");
    X(i, (r, o) => {
      if (o in cl)
        return un[s] = o, !1;
    });
  }
  return un[s];
}
const dl = {
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
function Fr(s, t, e = Zn(s)) {
  return !e && !dl[s] && Rr(t) ? `${t}px` : t;
}
function fl(s, t) {
  if (et(s)) {
    const e = Zn(s);
    return s = ul(s, e), arguments.length < 2 ? this[0] && Lt(this[0], s, e) : s ? (t = Fr(s, t, e), this.each((n, i) => {
      Z(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
S.css = fl;
function Hr(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const pl = /^\s+|\s+$/;
function Xi(s, t) {
  const e = s.dataset[t] || s.dataset[Jn(t)];
  return pl.test(e) ? e : Hr(JSON.parse, e);
}
function gl(s, t, e) {
  e = Hr(JSON.stringify, e), s.dataset[Jn(t)] = e;
}
function ml(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Xi(this[0], n);
    return e;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && Xi(this[0], s) : ut(t) ? this : this.each((e, n) => {
      gl(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
S.data = ml;
function Wr(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
X([!0, !1], (s, t) => {
  X(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    S[i] = function(r) {
      if (this[0])
        return _e(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : se(this[0]) ? Wr(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? Tt(this[0], `margin${e ? "Top" : "Left"}`) + Tt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
X(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  S[e] = function(n) {
    if (!this[0])
      return ut(n) ? void 0 : this;
    if (!arguments.length)
      return _e(this[0]) ? this[0].document.documentElement[`client${t}`] : se(this[0]) ? Wr(this[0], t) : this[0].getBoundingClientRect()[e] - Yi(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!Z(o))
        return;
      const a = Lt(o, "boxSizing");
      o.style[e] = Fr(e, i + (a === "border-box" ? Yi(o, !s) : 0));
    });
  };
});
const Qi = "___cd";
S.toggle = function(s) {
  return this.each((t, e) => {
    if (!Z(e))
      return;
    const n = Ji(e);
    (ut(s) ? n : s) ? (e.style.display = e[Qi] || "", Ji(e) && (e.style.display = Za(e.tagName))) : n || (e[Qi] = Lt(e, "display"), e.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const tr = "___ce", Xn = ".", Qn = { focus: "focusin", blur: "focusout" }, jr = { mouseenter: "mouseover", mouseleave: "mouseout" }, _l = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ti(s) {
  return jr[s] || Qn[s] || s;
}
function ei(s) {
  const t = s.split(Xn);
  return [t[0], t.slice(1).sort()];
}
S.trigger = function(s, t) {
  if (et(s)) {
    const [n, i] = ei(s), r = ti(n);
    if (!r)
      return this;
    const o = _l.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Dt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Xn), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Qn;
  return this.each((n, i) => {
    e && ae(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Br(s) {
  return s[tr] = s[tr] || {};
}
function yl(s, t, e, n, i) {
  const r = Br(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function Vr(s, t) {
  return !t || !qn.call(t, (e) => s.indexOf(e) < 0);
}
function ys(s, t, e, n, i) {
  const r = Br(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Vr(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      ys(s, t, e, n, i);
}
S.off = function(s, t, e) {
  if (ut(s))
    this.each((n, i) => {
      !Z(i) && !se(i) && !_e(i) || ys(i);
    });
  else if (et(s))
    ae(t) && (e = t, t = ""), X(Ws(s), (n, i) => {
      const [r, o] = ei(i), a = ti(r);
      this.each((l, c) => {
        !Z(c) && !se(c) && !_e(c) || ys(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
S.remove = function(s) {
  return Gt(this, s).detach().off(), this;
};
S.replaceWith = function(s) {
  return this.before(s).remove();
};
S.replaceAll = function(s) {
  return f(s).replaceWith(this), this;
};
function vl(s, t, e, n, i) {
  if (!et(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return et(t) || (ut(t) || ze(t) ? t = "" : ut(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ae(n) || (n = e, e = void 0), n ? (X(Ws(s), (r, o) => {
    const [a, l] = ei(o), c = ti(a), u = a in jr, h = a in Qn;
    c && this.each((p, d) => {
      if (!Z(d) && !se(d) && !_e(d))
        return;
      const m = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Vr(l, _.namespace.split(Xn)) || !t && (h && (_.target !== d || _.___ot === c) || u && _.relatedTarget && d.contains(_.relatedTarget)))
          return;
        let v = d;
        if (t) {
          let b = _.target;
          for (; !Dr(b, t); )
            if (b === d || (b = b.parentNode, !b))
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
            return d;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(v, _, _.___td);
        i && ys(d, c, l, t, m), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      m.guid = n.guid = n.guid || f.guid++, yl(d, c, l, t, m);
    });
  }), this) : this;
}
S.on = vl;
function bl(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
S.one = bl;
const wl = /\r?\n/g;
function Cl(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(wl, `\r
`))}`;
}
const Sl = /file|reset|submit|button|image/i, Ur = /radio|checkbox/i;
S.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    X(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Sl.test(i.type) || Ur.test(i.type) && !i.checked)
        return;
      const r = zr(i);
      if (!ut(r)) {
        const o = Fs(r) ? r : [r];
        X(o, (a, l) => {
          s += Cl(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = f;
function xl(s, t) {
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
function Kr(s, t, e) {
  try {
    const n = xl(s, t), i = n[n.length - 1];
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
function Mt(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / si[e]).toFixed(t) + e);
}
const is = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * si[n];
};
let ni = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Rt;
function kl() {
  return ni;
}
function Tl(s) {
  ni = s.toLowerCase().replace("-", "_");
}
function qr(s, t) {
  Rt || (Rt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), f.extend(!0, Rt, s);
}
function O(s, t, e, n, i, r) {
  Array.isArray(s) ? Rt && s.unshift(Rt) : s = Rt ? [Rt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || ni;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === Rt ? `${r}.${t}` : t;
    if (a = Kr(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? U(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Nl(s, t, e, n) {
  return O(void 0, s, t, e, n);
}
O.addLang = qr;
O.getLang = Nl;
O.getCode = kl;
O.setCode = Tl;
O.map = Rt;
qr({
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
function er(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function fe(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => fe(s, t, n)) : !(e instanceof Blob) && f.isPlainObject(e) ? Object.entries(e).forEach(([n, i]) => {
    fe(s, `${t}[${n}]`, i);
  }) : s.append(t, e instanceof Blob ? e : String(e)));
}
function El(s, t) {
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
function $l(s, t) {
  const e = t || new FormData();
  return s && (typeof s == "string" && (s = new URLSearchParams(s)), s instanceof URLSearchParams ? s.forEach((n, i) => {
    fe(e, i, n);
  }) : Array.isArray(s) ? s.forEach(([n, i]) => {
    fe(e, n, i);
  }) : s instanceof FormData ? s.forEach((n, i) => {
    fe(e, i, n);
  }) : f.isPlainObject(s) && Object.entries(s).forEach(([n, i]) => {
    fe(e, n, i);
  })), e;
}
class Gr {
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
      error: d,
      complete: m,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let v = n;
    v && (i && (v = $l(v)), _.body = v), o && (_.mode = "cors");
    const y = _.headers || {};
    er(y, "X-Requested-With", "XMLHttpRequest"), r && er(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), d && this.fail(d), m && this.complete(m), _.signal = this._controller.signal, this.url = t, this.request = _;
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
        const p = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), d = p ? "blob" : e || El(a.headers.get("Content-Type"), n);
        p || d === "blob" || d === "file" ? c = await a.blob() : d === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const m = (i == null ? void 0 : i(c, d)) ?? c;
        this._emit("success", m, h, a);
      } else
        throw this.data = await a.text(), new Error(h);
    } catch (h) {
      this.data === void 0 && c !== void 0 && (this.data = c), l = h;
      let p = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : p = !0), this.error = l, p || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
f.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : f.extend(t, s);
  const e = new Gr(t);
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
    i && (r = f(r).find(i).html()), f(this).html(r).zuiInit(), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function ii(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    f.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    return o instanceof Promise ? await o : o;
  }
  e && f.extend(n, typeof e == "function" ? e(n) : e);
  const i = new Gr(n), [r] = await i.send();
  return r;
}
function Cu(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
f.fetch = ii;
function ct() {
  return f.guid++;
}
function Sn(s, t) {
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
          if (Sn(s[l], t[l]))
            return !0;
        return !0;
      }
      const o = Object.keys(s), a = Object.keys(t);
      if (o.length !== a.length)
        return !0;
      for (const l of o)
        if (Sn(s[l], t[l]))
          return !0;
      return !0;
    }
    if (e === "function" && n === "function")
      return s.toString() !== t.toString();
  }
  return !0;
}
class vs {
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
    return (!e || t.some((n, i) => Sn(n instanceof vs ? n.value : n, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((n) => n instanceof vs ? n.cache : n)), this._value;
  }
}
function Yr(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Yr(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const T = (...s) => Yr(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
f.classes = T;
f.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = f(n);
    s === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(s, ...t));
  });
};
const pe = /* @__PURE__ */ new WeakMap();
function ri(s, t, e) {
  const n = pe.has(s), i = n ? pe.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, f(s).dataset(), i), pe.set(s, i)) : pe.delete(s);
}
function oi(s, t, e) {
  let n = pe.get(s) || {};
  return e && s instanceof Element && (n = Object.assign({}, f(s).dataset(), n)), t === void 0 ? n : n[t];
}
function Su(s) {
  pe.delete(s);
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...s) {
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? this.length ? oi(this[0], t, !0) : void 0 : this.each((n, i) => ri(i, t, e));
};
f.fn.removeData = function(s = null) {
  return this.each((t, e) => ri(e, s));
};
function ye(s, ...t) {
  return s.includes("RAWJS") && (s = s.split('"RAWJS<').join("").split('>RAWJS"').join("").split("<RAWJS_QUOTE>").join('"').split("<RAWJS_LINE>").join(`
`)), new Function(`return ${s}`)(...t);
}
function xu(s, ...t) {
  return s.includes("RAWJS") ? ye(s, ...t) : JSON.parse(s);
}
function Oe(s, t) {
  const e = f(s)[0];
  if (!e)
    return;
  const { prefix: n, getter: i, evalValue: r, json: o = !0, evalArgs: a = [] } = {
    prefix: "z-",
    ...typeof t == "string" ? { prefix: t } : t
  }, l = Array.isArray(r) ? new Set(r) : void 0;
  return Array.from(e.attributes).reduce((c, u) => {
    let { name: h } = u;
    const { value: p } = u;
    let d = p;
    if (h.startsWith(n)) {
      if (h = h.slice(n.length).replace(/-([a-z])/g, (m) => m[1].toUpperCase()), i)
        d = i(h, p);
      else
        try {
          r && (!l || l.has(h)) || r === void 0 && p.includes("RAWJS") ? d = ye(p, ...a) : o && (d = JSON.parse(p));
        } catch {
        }
      c[h] = d;
    }
    return c;
  }, {});
}
function sr(s, t, e = "z-") {
  const n = f(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function Al(...s) {
  var e;
  const t = s.length;
  if (!t)
    return Oe(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = Oe(this)) == null ? void 0 : e[n] : (f.isPlainObject(n) && sr(this, n), this);
  }
  return sr(this, { [s[0]]: s[1] }), this;
}
f.fn.z = Al;
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
f.Event || (f.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
});
const bs = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), Ml = {};
f.share = Ml;
var Bs, F, Jr, bt, Qt, nr, Zr, xn, ai, kn, Tn, Fe = {}, Xr = [], Pl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vs = Array.isArray;
function Bt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Qr(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function gt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Bs.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return hs(s, o, n, i, null);
}
function hs(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Jr, __i: -1, __u: 0 };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function Y() {
  return { current: null };
}
function we(s) {
  return s.children;
}
function W(s, t) {
  this.props = s, this.context = t;
}
function ne(s, t) {
  if (t == null)
    return s.__ ? ne(s.__, s.__i + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ne(s) : null;
}
function to(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return to(s);
  }
}
function ir(s) {
  (!s.__d && (s.__d = !0) && Qt.push(s) && !ws.__r++ || nr !== F.debounceRendering) && ((nr = F.debounceRendering) || Zr)(ws);
}
function ws() {
  var s, t, e, n, i, r, o, a;
  for (Qt.sort(xn); s = Qt.shift(); )
    s.__d && (t = Qt.length, n = void 0, r = (i = (e = s).__v).__e, o = [], a = [], e.__P && ((n = Bt({}, i)).__v = i.__v + 1, F.vnode && F.vnode(n), li(e.__P, n, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, o, r ?? ne(i), !!(32 & i.__u), a), n.__v = i.__v, n.__.__k[n.__i] = n, no(o, n, a), n.__e != r && to(n)), Qt.length > t && Qt.sort(xn));
  ws.__r = 0;
}
function eo(s, t, e, n, i, r, o, a, l, c, u) {
  var h, p, d, m, _, v = n && n.__k || Xr, y = t.length;
  for (e.__d = l, Il(e, t, v), l = e.__d, h = 0; h < y; h++)
    (d = e.__k[h]) != null && typeof d != "boolean" && typeof d != "function" && (p = d.__i === -1 ? Fe : v[d.__i] || Fe, d.__i = h, li(s, d, p, i, r, o, a, l, c, u), m = d.__e, d.ref && p.ref != d.ref && (p.ref && ci(p.ref, null, d), u.push(d.ref, d.__c || m, d)), _ == null && m != null && (_ = m), 65536 & d.__u || p.__k === d.__k ? (l && typeof d.type == "string" && !s.contains(l) && (l = ne(p)), l = so(d, l, s)) : typeof d.type == "function" && d.__d !== void 0 ? l = d.__d : m && (l = m.nextSibling), d.__d = void 0, d.__u &= -196609);
  e.__d = l, e.__e = _;
}
function Il(s, t, e) {
  var n, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (s.__k = [], n = 0; n < l; n++)
    o = n + h, (i = s.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? hs(null, i, null, null, null) : Vs(i) ? hs(we, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? hs(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = s, i.__b = s.__b + 1, a = Rl(i, e, o, u), i.__i = a, r = null, a !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a == o - 1 ? h = a - o : a == o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : a < o && h++, a !== n + h && (i.__u |= 65536))) : (r = e[o]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ne(r)), Nn(r, r, !1), e[o] = null, u--);
  if (u)
    for (n = 0; n < c; n++)
      (r = e[n]) != null && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ne(r)), Nn(r, r));
}
function so(s, t, e) {
  var n, i;
  if (typeof s.type == "function") {
    for (n = s.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = s, t = so(n[i], t, e));
    return t;
  }
  s.__e != t && (e.insertBefore(s.__e, t || null), t = s.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Cs(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Vs(s) ? s.some(function(e) {
    Cs(e, t);
  }) : t.push(s)), t;
}
function Rl(s, t, e, n) {
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
function rr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Pl.test(t) ? e : e + "px";
}
function rs(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || rr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || rr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in s || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n ? e.u = n.u : (e.u = ai, s.addEventListener(t, r ? Tn : kn, r)) : s.removeEventListener(t, r ? Tn : kn, r);
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
function or(s) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + s];
      if (t.t == null)
        t.t = ai++;
      else if (t.t < e.u)
        return;
      return e(F.event ? F.event(t) : t);
    }
  };
}
function li(s, t, e, n, i, r, o, a, l, c) {
  var u, h, p, d, m, _, v, y, b, C, w, x, N, A, E, $, k = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = F.__b) && u(t);
  t:
    if (typeof k == "function")
      try {
        if (y = t.props, b = "prototype" in k && k.prototype.render, C = (u = k.contextType) && n[u.__c], w = u ? C ? C.props.value : u.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : (b ? t.__c = h = new k(y, w) : (t.__c = h = new W(y, w), h.constructor = k, h.render = Ll), C && C.sub(h), h.props = y, h.state || (h.state = {}), h.context = w, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), b && h.__s == null && (h.__s = h.state), b && k.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Bt({}, h.__s)), Bt(h.__s, k.getDerivedStateFromProps(y, h.__s))), d = h.props, m = h.state, h.__v = t, p)
          b && k.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), b && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (b && k.getDerivedStateFromProps == null && y !== d && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(M) {
              M && (M.__ = t);
            }), x = 0; x < h._sb.length; x++)
              h.__h.push(h._sb[x]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, w), b && h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(d, m, _);
          });
        }
        if (h.context = w, h.props = y, h.__P = s, h.__e = !1, N = F.__r, A = 0, b) {
          for (h.state = h.__s, h.__d = !1, N && N(t), u = h.render(h.props, h.state, h.context), E = 0; E < h._sb.length; E++)
            h.__h.push(h._sb[E]);
          h._sb = [];
        } else
          do
            h.__d = !1, N && N(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++A < 25);
        h.state = h.__s, h.getChildContext != null && (n = Bt(Bt({}, n), h.getChildContext())), b && !p && h.getSnapshotBeforeUpdate != null && (_ = h.getSnapshotBeforeUpdate(d, m)), eo(s, Vs($ = u != null && u.type === we && u.key == null ? u.props.children : u) ? $ : [$], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (M) {
        t.__v = null, l || r != null ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = e.__e, t.__k = e.__k), F.__e(M, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Dl(e.__e, t, e, n, i, r, o, l, c);
  (u = F.diffed) && u(t);
}
function no(s, t, e) {
  t.__d = void 0;
  for (var n = 0; n < e.length; n++)
    ci(e[n], e[++n], e[++n]);
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
function Dl(s, t, e, n, i, r, o, a, l) {
  var c, u, h, p, d, m, _, v = e.props, y = t.props, b = t.type;
  if (b === "svg" ? i = "http://www.w3.org/2000/svg" : b === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((d = r[c]) && "setAttribute" in d == !!b && (b ? d.localName === b : d.nodeType === 3)) {
        s = d, r[c] = null;
        break;
      }
  }
  if (s == null) {
    if (b === null)
      return document.createTextNode(y);
    s = document.createElementNS(i, b, y.is && y), r = null, a = !1;
  }
  if (b === null)
    v === y || a && s.data === y || (s.data = y);
  else {
    if (r = r && Bs.call(s.childNodes), v = e.props || Fe, !a && r != null)
      for (v = {}, c = 0; c < s.attributes.length; c++)
        v[(d = s.attributes[c]).name] = d.value;
    for (c in v)
      if (d = v[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = d;
        else if (c !== "key" && !(c in y)) {
          if (c == "value" && "defaultValue" in y || c == "checked" && "defaultChecked" in y)
            continue;
          rs(s, c, null, d, i);
        }
      }
    for (c in y)
      d = y[c], c == "children" ? p = d : c == "dangerouslySetInnerHTML" ? u = d : c == "value" ? m = d : c == "checked" ? _ = d : c === "key" || a && typeof d != "function" || v[c] === d || rs(s, c, d, v[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === s.innerHTML) || (s.innerHTML = u.__html), t.__k = [];
    else if (h && (s.innerHTML = ""), eo(s, Vs(p) ? p : [p], t, e, n, b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : e.__k && ne(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && Qr(r[c]);
    a || (c = "value", m !== void 0 && (m !== s[c] || b === "progress" && !m || b === "option" && m !== v[c]) && rs(s, c, m, v[c], i), c = "checked", _ !== void 0 && _ !== s[c] && rs(s, c, _, v[c], i));
  }
  return s;
}
function ci(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    F.__e(n, e);
  }
}
function Nn(s, t, e) {
  var n, i;
  if (F.unmount && F.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || ci(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Nn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Qr(s.__e), s.__c = s.__ = s.__e = s.__d = void 0;
}
function Ll(s, t, e) {
  return this.constructor(s, e);
}
function ge(s, t, e) {
  var n, i, r, o;
  F.__ && F.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], li(t, s = (!n && e || t).__k = gt(we, null, [s]), i || Fe, Fe, t.namespaceURI, !n && e ? [e] : i ? null : t.firstChild ? Bs.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), no(r, s, o);
}
Bs = Xr.slice, F = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Jr = 0, bt = function(s) {
  return s != null && s.constructor == null;
}, W.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Bt({}, this.state), typeof s == "function" && (s = s(Bt({}, e), this.props)), s && Bt(e, s), s != null && this.__v && (t && this._sb.push(t), ir(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ir(this));
}, W.prototype.render = we, Qt = [], Zr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, xn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, ws.__r = 0, ai = 0, kn = or(!1), Tn = or(!0);
function L(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Cs(r), ...Cs(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = f.extend(r, i))), s[n] = i);
    });
  }), s;
}
function io(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
function zl(s, t = !0) {
  const e = f(s), n = e[0], i = "zui-disable-scroll";
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
f.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    zl(e, s);
  });
};
f.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function dn(s, t, e) {
  if (!(e.on || "click").split(" ").includes(t.type))
    return;
  const n = e.selector ? f(t.target).closest(e.selector) : s;
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
  const o = [["$element", s], ["event", t], ["options", e], ["$target", n]], a = (c) => typeof c == "function" ? c(...o) : f.runJS(c, ...o);
  if (e.if !== void 0 && !a(e.if))
    return;
  const l = e.call;
  if (l) {
    let c;
    if (typeof l == "string" ? c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(l) ? Kr(window, l) : a(l) : c = l, typeof c == "function") {
      const u = [], h = e.params;
      e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((p) => (p = p.trim(), p === "$element" ? s : p === "event" ? t : p === "options" ? e : p.startsWith("$element.") || p.startsWith("event.") || p.startsWith("options.") ? a(p) : r(p)))) : Array.isArray(h) ? u.push(...h) : u.push(h), c(...u);
    }
  }
  e.do && a(e.do);
}
function Ol(s) {
  const t = f(this), e = s.type, n = t.attr("zui-on");
  if (n) {
    const [o, a] = n.split("~").map((l) => l.trim());
    o && dn(t, s, f.extend({
      on: o
    }, a ? a.startsWith("{") ? ye(a) : { do: a } : Oe(t, { prefix: "data-", evalValue: ["call", "if", "do"] })));
  }
  const i = t.attr(`zui-on-${e}`);
  i && dn(t, s, f.extend({
    on: e
  }, i.startsWith("{") ? ye(i) : { do: i })), t.attr("data-on") && dn(t, s, Oe(t, { prefix: "data-", evalValue: ["call", "if", "do"] }));
}
function Fl(s) {
  f(document).off(".zui.global").on(s.map((t) => `${t}.zui.global`).join(" "), `[zui-on],${s.map((t) => `[zui-on-${t}]`)},[data-on]`, Ol);
}
Fl(["click", "change", "inited"]);
function hi(s) {
  if (typeof s == "function")
    return hi(s());
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function us(s) {
  if (s == null)
    return null;
  const [t, e = "px"] = hi(s);
  return Number.isNaN(t) ? typeof s == "string" ? s : null : `${t}${e}`;
}
async function ar(s, t) {
  var n, i, r;
  if (s instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(s), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), s;
  }
  if (s instanceof Response) {
    const o = await s.blob();
    return t = t || ((r = (i = (n = s.headers.get("Content-Disposition")) == null ? void 0 : n.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), ar(o, t);
  }
  const e = await fetch(s);
  return ar(e);
}
class Hl {
  constructor(t) {
    this._$target = f(t);
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
const zt = new Hl(document);
f.bus = zt;
f.on = zt.on.bind(zt);
f.one = zt.one.bind(zt);
f.off = zt.off.bind(zt);
f.trigger = zt.trigger.bind(zt);
var Wl = ["Shift", "Meta", "Alt", "Control"], ro = typeof navigator == "object" ? navigator.platform : "", oo = /Mac|iPod|iPhone|iPad/.test(ro), jl = oo ? "Meta" : "Control", Bl = ro === "Win32" ? ["Control", "Alt"] : oo ? ["Alt"] : [];
function fn(s, t) {
  return typeof s.getModifierState == "function" && (s.getModifierState(t) || Bl.includes(t) && s.getModifierState("AltGraph"));
}
function Vl(s) {
  return s.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), n = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? jl : i;
    }), n];
  });
}
function ao(s, t) {
  var e;
  t === void 0 && (t = {});
  var n = (e = t.timeout) != null ? e : 1e3, i = Object.keys(s).map(function(a) {
    return [Vl(a), s[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(p, d) {
        return !(d[1].toUpperCase() !== p.key.toUpperCase() && d[1] !== p.code || d[0].find(function(m) {
          return !fn(p, m);
        }) || Wl.find(function(m) {
          return !d[0].includes(m) && d[1] !== m && fn(p, m);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : fn(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), n));
  };
}
function Ul(s, t, e) {
  var n;
  e === void 0 && (e = {});
  var i = (n = e.event) != null ? n : "keydown", r = ao(t, e);
  return s.addEventListener(i, r), function() {
    s.removeEventListener(i, r);
  };
}
function lo(s, t = {}) {
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
function co(s, t, e) {
  const { timeout: n, event: i = "keydown", scope: r, when: o } = e || {}, a = ao(t, { timeout: n }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return f(s).on(`${i}${l}`, function(u) {
    o && o(u) === !1 || f(u.target).data(c) || a(u);
  }).on(`compositionstart${l}`, (u) => {
    f(u.target).data(c, !0);
  }).on(`compositionend${l}`, (u) => {
    f(u.target).removeData(c);
  });
}
function ho(s, t) {
  return f(s).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const ku = Ul;
f.fn.hotkeys = function(s, t) {
  return co(this, s, t);
};
f.fn.unbindHotkeys = function(s) {
  return ho(this, s);
};
f.hotkeys = function(s, t) {
  co(window, s, t);
};
f.unbindHotkeys = function(s) {
  ho(window, s);
};
function ui() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Kl(s) {
  (typeof s == "string" || s instanceof Element || s instanceof f) && (s = { target: s });
  const { target: t, onError: e, onSuccess: n, afterExit: i, afterEnter: r } = s, o = f(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), n == null || n.call(a), f(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, f(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const u = ui();
    let h = u;
    u ? f(u).addClass("is-in-fullscreen") : (h = f(document).find(".is-in-fullscreen")[0] || document, f(h).removeClass("is-in-fullscreen")), f("body").toggleClass("has-in-fullscreen", !!u);
    const p = { event: c, target: h, fullscreenElement: u };
    f(h).trigger(u ? "enterFullscreen" : "exitFullscreen", p).trigger("toggleFullscreen", p);
  }));
}
async function uo(s) {
  const t = ui();
  return s === !1 && !!t === s ? s : t ? (document.exitFullscreen(), !1) : (await Kl(s), !0);
}
f.fn.fullscreen = function(s) {
  return uo({
    target: this,
    ...s
  });
};
f.getFullscreenElement = ui;
f.toggleFullscreen = uo;
function le(s) {
  return s.parentNode === document ? !1 : s.parentNode ? le(s.parentNode) : !0;
}
f.isDetached = le;
f.fn.isDetached = function() {
  const s = this[0];
  return !s || le(s);
};
const ce = class fo {
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
    const h = f(t);
    if (h.data(n) && !o)
      throw new Error(`[ZUI] The component "${a}" has been initialized on element.`);
    const p = h[0], d = ct();
    if (this._gid = d, this._element = p, this._options = { ...r, ...(e == null ? void 0 : e.$optionsFromDataset) !== !1 ? h.dataset() : {} }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, c.has(p) ? c.get(p).add(this) : c.set(p, /* @__PURE__ */ new Set([this])), u.has(a) ? u.get(a).add(this) : u.set(a, /* @__PURE__ */ new Set([this])), h.data(n, this).attr(l, "").attr(i, `${d}`), o) {
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
    return f(this.element);
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
          const d = p.values().next().value;
          l.data(t, d).attr(e, d.gid);
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
      this._autoDestory = 0, le(this.element) && this.destroy();
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
    } : t && f.extend(this._options, t), this._options;
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
    const { i18nData: i } = this;
    return O(i, t, e, n, this.options.lang, this.constructor.NAME) ?? O(i, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    return t ? f(t).find(n).each((c, u) => {
      var h;
      (h = i.get(u)) == null || h.forEach(a);
    }) : this !== fo ? (l = r.get(this.NAME)) == null || l.forEach(a) : i.forEach((c) => {
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
    return t === void 0 ? this.getAll(void 0, n).pop() : this.get(f(t).closest(this.SELECTOR), e);
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
        return this.each((c, u) => {
          let h = n.get(u);
          if (h ? o && h.render(o) : h = new n(u, o), a) {
            let p = h[a], d = h;
            p === void 0 && (d = h.$, p = d[a]), typeof p == "function" ? l = p.call(d, ...r) : l = p;
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
ce.DEFAULT = {};
ce.MULTI_INSTANCE = !1;
ce.ALL = /* @__PURE__ */ new Map();
ce.TYPED_ALL = /* @__PURE__ */ new Map();
ce.map = /* @__PURE__ */ new Map();
ce.toggleMap = /* @__PURE__ */ new Map();
let ft = ce;
function Us(s) {
  return ft.map.get(s.toLowerCase());
}
function po(s, t, e = {}) {
  let n = Us(s);
  if (n || (n = go(s)), !n)
    return null;
  const { $update: i, ...r } = e;
  if (!n.MULTI_INSTANCE) {
    const o = n.get(t);
    if (o)
      return i && o.render(r, i === "reset"), o;
  }
  return new n(t, r);
}
function ql(s, t, e = {}) {
  requestAnimationFrame(() => po(s, t, e));
}
function Gl(s, t) {
  ft.register(s, t);
}
function go(s) {
  const { zui: t } = window;
  if (t) {
    s = s == null ? void 0 : s.toLowerCase();
    for (const e in t) {
      const n = e.toLowerCase() === s;
      if (s && !n)
        continue;
      const i = t[e];
      if (!(typeof i != "function" || !i.NAME || !i.ZUI) && (ft.map.has(e.toLowerCase()) || Gl(i), n))
        return i;
    }
  }
}
function Tu(s) {
  var t;
  s ? (t = Us(s)) == null || t.defineFn() : window._zuiDefined || (go(), ft.map.forEach((e) => {
    e.defineFn();
  }), Object.assign(window, { _zuiDefined: !0 }));
}
function Yl(s, t = {}) {
  const e = f(s);
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
      delete l.$lib, f.getLib(c).then(() => po(a, s, l));
      return;
    }
    ql(a, s, l);
  };
  if (typeof n == "string") {
    n = n.trim();
    const a = n.length ? n.split(",").map((u) => u.trim()) : [], l = Oe(s, { prefix: "zui-create-", evalValue: !0 }), c = Object.keys(l);
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
function Jl() {
  f(document).on("click.zui.toggle mouseenter.zui.toggle", "[data-toggle],[zui-toggle]", function(s) {
    const t = f(this), e = t.dataset("toggle") || t.attr("zui-toggle");
    if (!e)
      return;
    const n = ft.toggleMap.get(e) || Us(e), i = n == null ? void 0 : n.toggle;
    if (!i)
      return;
    const { trigger: r = "click", skip: o = "[disabled],.disabled", check: a } = i, l = s.type === "mouseover" ? "hover" : "click";
    if (!r.includes(l) || a && !a.call(n, this, l, s) || o && t.is(o))
      return;
    const { onGet: c, onCreate: u, setOptions: h = !0, getOptions: p, prevent: d = !0, handler: m, onToggle: _, convertHref: v } = i;
    let y = t.dataset();
    const b = t.attr(`zui-toggle-${e}`);
    if (b && (y = f.extend(y, ye(b))), v && t.is("a")) {
      const w = t.attr("href");
      if (w) {
        const x = v === !0 ? { selector: "target", url: "url" } : v;
        "#.".includes(w[0]) ? x.selector && y[x.selector] === void 0 && (y[x.selector] = w) : x.url && y[x.url] === void 0 && (y[x.url] = w);
      }
    }
    if (p && (y = p.call(n, this, y, s)), m) {
      m.call(n, this, y, l, s), d && s.preventDefault();
      return;
    }
    let C = c ? c.call(n, this) : n.get(this);
    if (C)
      h && C.setOptions(y);
    else {
      const w = u ? u.call(n, this, s, y) : new n(this, y);
      if (!w)
        return;
      C = w;
    }
    if (_) {
      if (_.call(n, C, this, s) === !1)
        return;
    } else {
      const { shown: w, show: x, hide: N, toggle: A } = C;
      let E;
      if (A ? E = A : x && N ? w ? E = N : E = x : x && (E = x), E)
        E.call(C);
      else
        return;
    }
    d && s.preventDefault();
  });
}
function Zl(s, t) {
  const e = oi(s), n = [];
  return Object.keys(e).forEach((i) => {
    if (!i.startsWith("zui."))
      return;
    const r = e[i];
    (t == null ? void 0 : t(r, i)) !== !1 && n.push(e[i]);
  }), n;
}
let os = 0;
function mo(s = 100) {
  if (os && clearTimeout(os), s) {
    os = window.setTimeout(() => mo(0), s);
    return;
  }
  os = 0, ft.ALL.forEach((t) => {
    t.forEach((e) => e.autoDestroy());
  });
}
function Xl() {
  if (!document.body || oi(document.body, "_autoDestoryMob"))
    return;
  const s = new MutationObserver((t) => {
    let e = !1;
    for (const n of t)
      if (n.removedNodes.length) {
        e = !0;
        break;
      }
    e && mo();
  });
  s.observe(document.body, { childList: !0, subtree: !0 }), ri(document.body, "_autoDestoryMob", s);
}
f.fn.zuiInit = function(s) {
  return this.find("[zui-create],[data-zui]").each(function() {
    var t;
    ((t = s == null ? void 0 : s.beforeCreate) == null ? void 0 : t.call(s, this)) !== !1 && Yl(this, s);
  }), this.find("[zui-init]").each(function() {
    this.hasAttribute("z-zui-inited") || (this.setAttribute("z-zui-inited", ""), f.runJS(this.getAttribute("zui-init"), ["$element", f(this)]));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this.find('[data-on="inited"],[zui-on-inited]').each((t, e) => {
    const n = f(e);
    n.zui() || n.trigger("inited");
  }), this;
};
f.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = {};
    let r;
    return Zl(e, (o, a) => {
      i[a] = o, (!r || r.gid < o.gid) && (r = i[a]);
    }), s === !0 ? i : r;
  }
  const n = Us(s);
  return n ? t === !0 ? n.getAll(e) : n.query(e, t) : f(e).data(`zui.${s}`);
};
f.fn.zuiCall = function(s, t = []) {
  return this.each(function() {
    const e = s.split("."), n = e.length > 1 ? e[0] : void 0, i = e[e.length > 1 ? 1 : 0], r = f(this).zui(n), o = r == null ? void 0 : r[i];
    typeof o == "function" && o.apply(r, t);
  }), this;
};
f(() => {
  f("body").zuiInit({ update: !0 }), Jl(), Xl();
});
class Ql extends ft {
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
            l.each((p, d) => {
              const _ = d.getBoundingClientRect()[e || "top"] === h[e || "top"];
              d.classList.toggle(i, _);
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
Ql.NAME = "Sticky";
function Ks(s, t = {}) {
  const e = f(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t;
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (t.checkZeroSize && !(o * a))
    return !1;
  if (!n)
    if (t.container)
      n = f(e).closest(t.container)[0].getBoundingClientRect();
    else {
      const { innerHeight: m, innerWidth: _ } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
      n = { left: 0, top: 0, width: _ || y, height: m || v };
    }
  const { left: l, top: c, width: u, height: h } = n;
  if (t.fullyCheck)
    return i >= l && r >= c && i + o <= u + l && r + a <= h + c;
  const p = i <= l + u && i + o >= l;
  return r <= c + h && r + a >= c && p;
}
f.fn.isVisible = function(s) {
  return Ks(this, s);
};
function Ss(s, t, e = !1) {
  var i;
  const n = f(s);
  if (t !== void 0) {
    if (typeof t == "string" && t.length) {
      const r = `zui-runjs-${ct()}`;
      n.append(`<script id="${r}">${t}<\/script>`), e && n.find(`#${r}`).remove();
    }
    return;
  }
  if (n.is("script")) {
    const r = (i = n[0]) == null ? void 0 : i.textContent;
    r && Ss(n.parent(), r);
    return;
  }
  n.find("script").each((r, o) => {
    Ss(n, o.textContent), o.remove();
  });
}
f.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
f.fn.runJS = function(s) {
  return this.each((t, e) => {
    Ss(e, s);
  });
};
function tc(s, t = "both") {
  return (t === "vert" || t === "both") && s.clientHeight < s.scrollHeight || (t === "horz" || t === "both") && s.clientWidth < s.scrollWidth;
}
function _o(s, t) {
  const e = f(s), { ifNeeded: n = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = f(a).closest(i);
      if (!l.length || !tc(l[0]))
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
f.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    _o(e, s);
  });
};
f.setLibRoot = function(s) {
  f.libRoot = s;
};
f.registerLib = function(s, t) {
  f.libMap || (f.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), f.libMap[s] = t;
};
function ec(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s;
    if (f(i ? `#${i}` : `link[href="${n}"]`).length) {
      t();
      return;
    }
    const o = document.createElement("link");
    o.onload = () => {
      t();
    }, o.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${n}`));
    }, o.rel = "stylesheet", o.href = n, i && (o.id = i), f("head").append(o);
  });
}
function sc(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s, r = f(i ? `#${i}` : `script[src="${n}"]`);
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
      t(), (f(h).dataset("loaded", !0).data("loadCalls") || []).forEach((d) => d()), f(h).removeData("loadCalls");
    }, h.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${n}`));
    }, f("head").append(h), h.src = n;
  });
}
f.getLib = async function(s, t, e) {
  var d;
  typeof s == "string" && (s = ((d = f.libMap) == null ? void 0 : d[s]) || { src: s });
  let n = Array.isArray(s) ? { src: s } : f.extend({}, s);
  typeof t == "function" ? n.success = t : t && f.extend(n, t), e && (n.success = e);
  let { src: i } = n;
  const { name: r, success: o } = n, a = f.libMap && r ? f.libMap[r] : null;
  if (a && (n = f.extend({}, a, n), i = a.src || n.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = n;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r, u = () => c ? window[c] : void 0;
  typeof l == "string" && (l = () => !!u());
  const h = () => (o == null || o(), u());
  if (typeof l == "function" && await l())
    return h();
  const { root: p = f.libRoot } = n;
  for (let m of i) {
    typeof m == "string" && (m = { src: m });
    let { src: _ } = m;
    p && (_ = `${p}${p.endsWith("/") || _.startsWith("/") ? "" : "/"}${_}`);
    const v = {
      ...n,
      ...m,
      src: _
    };
    if (m.type === "css" || !m.type && _.endsWith(".css")) {
      await ec(v);
      continue;
    }
    await sc(v);
  }
  return h();
};
f.getScript = f.getLib;
function yo(s, t) {
  const e = f(s), n = new ResizeObserver(t);
  return e.each((i, r) => {
    n.observe(r);
  }), n;
}
f.fn.resize = function(s) {
  return yo(this, s);
};
const Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: le,
  isVisible: Ks,
  listenResize: yo,
  runJS: Ss,
  scrollIntoView: _o
}, Symbol.toStringTag, { value: "Module" })), vo = {};
function rt(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    rt(e, s[e]);
  }) : t && (vo[s.toLowerCase()] = t);
}
function nc(s) {
  return vo[s.toLowerCase()];
}
class Q extends W {
  constructor(t) {
    super(t), this._gid = ct(), this.state = this.getDefaultState(t);
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
    return O(i, t, e, n, this.props.lang, this.constructor.NAME) ?? O(i, t, e, n, this.props.lang) ?? `{i18n:${t}}`;
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
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, ...h } = t, p = new Set(this.constructor.customProps), d = "dangerouslySetInnerHTML", m = Object.keys(h).reduce((_, v) => {
      if (!p.has(v) && (v === d || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(v))) {
        const y = h[v];
        _[v] = v !== d && y && typeof y == "object" ? JSON.stringify(y) : y;
      }
      return _;
    }, {});
    return { ref: o, className: T(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...m, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? nc(e) : e) || e;
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
    return r && ([e, i, n] = r), gt(e, i, n);
  }
}
Q.HElement = !0;
Q.customProps = [];
var ic = 0;
function g(s, t, e, n, i, r) {
  t || (t = {});
  var o, a, l = t;
  if ("ref" in l)
    for (a in l = {}, t)
      a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --ic, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(c), c;
}
class ve extends W {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  _runJS() {
    this.props.executeScript && f(this._ref.current).runJS().zuiInit();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ g(Q, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function rc(s) {
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
  } = s, h = [e], p = { ...n }, d = [], m = [];
  return i.forEach((_) => {
    const v = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        v.push(...l.call(o, _, d, ...r));
      else {
        const y = _.call(o, d, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(_);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !bt(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? d.push(
        /* @__PURE__ */ g("div", { className: T(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? m.push(y.__html) : (y.style && Object.assign(p, y.style), y.className && h.push(y.className), y.children && d.push(y.children), y.attrs && Object.assign(u, y.attrs)) : d.push(y));
    });
  }), m.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: T(h),
    style: p,
    ...u
  }, d];
}
function bo({
  tag: s = "div",
  ...t
}) {
  const [e, n] = rc(t);
  return gt(s, e, ...n);
}
function En(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => En({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ g("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ g(ve, { ...L(i, r) });
    const { children: o, ...a } = r;
    return o && (r = L({ children: (Array.isArray(o) ? o : [o]).map((l) => En({ ...i, content: l, generatorThis: n, generatorArgs: e })) }, a)), /* @__PURE__ */ g(Q, { ...L(i, r) });
  }
  return bt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", s), console.groupEnd()), null);
}
function D(s) {
  const t = En(s);
  return t == null || typeof t == "boolean" ? null : bt(t) ? t : /* @__PURE__ */ g(we, { children: t });
}
const lr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function tt(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (bt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(lr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? lr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ g("i", { className: T(i), ...n });
}
function oc(s) {
  return this.getChildContext = () => s.context, s.children;
}
function wo(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    ge(null, t._temp), t._temp = null, t._container = null;
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
  }), ge(
    gt(oc, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function ac(s, t) {
  const e = gt(wo, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
rt({
  HElement: Q,
  element: Q,
  HtmlContent: ve,
  html: ve,
  CustomContent: D,
  custom: D,
  Icon: tt,
  Portal: wo
});
class B extends ft {
  constructor() {
    super(...arguments), this._ref = Y();
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
      const p = Array.from(n.attributes).reduce((d, m) => {
        const { name: _, value: v } = m;
        return d[_ === "class" ? "className" : _] = v, d;
      }, {});
      ge(
        gt(r, L({ component: n.tagName.toLowerCase(), attrs: p }, u)),
        n.parentElement,
        n
      );
    } else
      ge(
        gt(r, u),
        n
      );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return ge(gt(this.Component, t), e), e.innerHTML;
  }
}
B.replace = !1;
class G extends Q {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ g(tt, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ g(tt, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ g("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ g(tt, { icon: l }),
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
const lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: G
}, Symbol.toStringTag, { value: "Module" }));
rt(lc);
let st = class extends Q {
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
        return /* @__PURE__ */ g(D, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ g(D, { "z-key": e.key, "z-item": n, "z-type": r, content: { ...e } });
    if (l = l || a.default || Q, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = L({}, c, e), l = l[0];
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
    if (e = L(
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
      const d = o.call(this, e, n);
      if (d !== void 0)
        return d;
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
st.NAME = "";
st.ITEM_NAME = "item";
st.TAG = "ul";
st.ItemComponents = {
  default: Q,
  divider: [Q, { className: "divider" }],
  space: [Q, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
st.defaultItemProps = {
  component: "li"
};
st.defaultItemPropsMap = {};
st.defaultItemType = "item";
st.defaultProps = {
  itemKey: "id"
};
const cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: st
}, Symbol.toStringTag, { value: "Module" }));
class qs extends B {
}
qs.NAME = "CommonList";
qs.Component = st;
qs.replace = st.TAG;
qs.register();
rt(cc);
function hc(s) {
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
function uc(s) {
  const [t, e, n] = typeof s == "string" ? hc(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function cr(s, t) {
  return uc(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function hr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function dc(s, t, e) {
  s = s % 360 / 360, t = hr(t), e = hr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function fc(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function pc(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let Gs = class extends W {
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
      hueDistance: d = 43,
      saturation: m = 0.4,
      lightness: _ = 0.6,
      children: v,
      ...y
    } = this.props, b = ["avatar", t], C = { ...e, background: o, color: a };
    let w = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, w = n) : (b.push(`size-${n}`), w = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? C.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let x;
    if (p)
      b.push("has-img"), x = /* @__PURE__ */ g("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      b.push("has-icon"), x = /* @__PURE__ */ g(tt, { icon: l });
    else if (c != null && c.length) {
      const N = pc(c, h), A = N.length;
      if (b.push("has-text", `has-text-${A}`), o === void 0) {
        const $ = u ?? c, k = (typeof $ == "number" ? $ : fc($)) * d % 360;
        if (C.background = `hsl(${k},${m * 100}%,${_ * 100}%)`, !a) {
          const M = dc(k, m, _);
          C.color = cr(M);
        }
      } else
        !a && o && (C.color = cr(o));
      let E;
      w && w < 16 * A && (E = { transform: `scale(${w / (16 * A)})`, whiteSpace: "nowrap" }), x = /* @__PURE__ */ g("div", { "data-actualSize": w, className: "avatar-text", style: E, children: N });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: T(b),
        style: C,
        ...y,
        children: [
          x,
          v
        ]
      }
    );
  }
};
const gc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Gs
}, Symbol.toStringTag, { value: "Module" }));
let wt = class extends st {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    if (!e)
      return !1;
    e.type || (e = f.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = L({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = L({}, e, io({ btnType: n, size: i }));
  }
};
wt.NAME = "btn-group";
wt.TAG = "nav";
wt.ItemComponents = {
  ...st.ItemComponents,
  default: G
};
wt.defaultItemProps = {
  component: void 0
};
const Ys = class Co extends wt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = T(n.className, `gap-${e}`) : n.style = f.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = L({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = L(n, r)), /* @__PURE__ */ g(Co, { ...r });
  }
};
Ys.NAME = "toolbar";
Ys.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Ys.ItemComponents = {
  ...wt.ItemComponents,
  btnGroup: wt,
  "btn-group": wt
};
let Ct = Ys;
const mc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: Ct
}, Symbol.toStringTag, { value: "Module" }));
class Js extends Q {
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
      /* @__PURE__ */ g("label", { htmlFor: r, children: /* @__PURE__ */ g(D, { content: o }) }, "label")
    ];
  }
}
class _c extends Js {
}
_c.defaultProps = {
  type: "radio"
};
class yc extends Js {
}
yc.defaultProps = {
  type: "switch"
};
class He extends Q {
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
    if (i && u.push(/* @__PURE__ */ g(D, { content: i }, "toggleIcon")), a !== void 0 && u.push(/* @__PURE__ */ g(Js, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && u.push(/* @__PURE__ */ g(tt, { className: "item-icon", icon: e }, "icon")), n) {
      const p = typeof n == "function" ? n.call(this, t) : n;
      p && (p.className = T("item-avatar", p.className), u.push(/* @__PURE__ */ g(Gs, { ...p }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ g(D, { content: r }, "leading") : null;
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
    } = t, d = l && !e, m = d ? "a" : "div";
    let { title: _, text: v } = t;
    return _ === void 0 && (_ = v, v = null), [
      /* @__PURE__ */ g("div", { className: T("item-content", h), ...p, children: [
        _ ? /* @__PURE__ */ g(m, { className: T("item-title", i), href: d ? l : void 0, target: d ? c : void 0, ...r, children: /* @__PURE__ */ g(D, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ g("div", { className: T("item-subtitle", a), children: /* @__PURE__ */ g(D, { content: o }) }, "subtitle") : null,
        v ? /* @__PURE__ */ g("div", { className: T("item-text text", n), children: v }, "text") : null,
        u ? /* @__PURE__ */ g(D, { content: u }, "extraContent") : null
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
    r && a.push(/* @__PURE__ */ g(tt, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(Ct.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = n ? /* @__PURE__ */ g(D, { content: n }, "trailing") : null;
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
      multiline: d,
      title: m,
      subtitle: _,
      hint: v,
      selected: y
    } = t, b = n || (o && !a ? "a" : "div"), C = b === "a", w = L({
      key: "item",
      title: v,
      className: T("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: y,
        checked: p,
        multiline: d ?? !!(m && _),
        state: C && !u
      })
    }, C ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ g(b, { ...w, children: [
      this._renderLeading(t),
      this._renderContent(t, C),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Cs(n)]];
  }
}
class Ze extends st {
  constructor(t) {
    super(t), this._activeSet = new vs(() => {
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
    this._afterRender(!0), this.tryLoad(), this.props.activeOnHover && !this.props.multipleActive && f(this.element).on(`mouseenter${this.namespace}`, "[z-item]", (t) => {
      const e = this._getItemFromEvent(t);
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && !this.isActive(e.key) && this.toggleActive(e.key, !0);
    });
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    f(this.element).off(this.namespace), (t = this.props.beforeDestroy) == null || t.call(this);
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
    e = L({}, io({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      e.checkbox === !1 ? e.checked = void 0 : (l || e.checkbox) && (e.checked = this.isChecked(e.key, n, e.checked), typeof l == "object" && e.checkbox !== !1 && (e.checkbox = e.checkbox ? f.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
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
    var o;
    const e = super._handleClick(t);
    let { checkOnClick: n } = this.props;
    n === "any" ? n = ".item-checkbox,.item-content,.item-icon" : n === !0 && (n = ".item-checkbox");
    const i = (o = e == null ? void 0 : e.renderedItem) == null ? void 0 : o.checkbox;
    if (i !== !1 && (this.props.checkbox || i) && n && !(e != null && e.renderedItem.disabled) && e && t.target.closest(n)) {
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
Ze.ItemComponents = {
  ...st.ItemComponents,
  default: Q,
  item: He,
  heading: He
};
Ze.NAME = "list";
const pn = "```ZUI_STR\n";
class Xe {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new Xe(this._id, "session")), this._altStorage);
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
      if (n.startsWith(pn))
        return n.substring(pn.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${pn}${e}` : JSON.stringify(e));
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
const $n = new Xe("DEFAULT");
function vc(s, t = "local") {
  return new Xe(s, t);
}
Object.assign($n, { create: vc });
function So(s, t) {
  const { children: e } = s;
  e.length && e.forEach((n) => {
    t(n), So(n, t);
  });
}
function bc(s, t) {
  let e = s.parent;
  for (; e; )
    t(e), e = e.parent;
}
function ur(s) {
  return s.split(":").reduce((t, e, n) => (t.push(n ? t[n - 1] + ":" + e : e), t), []);
}
function An(s, t, e, n, i = 0, r) {
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
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? An(a.items, t, e, o, i + 1, h) : o;
  }, n);
}
class Ce extends Ze {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: n, nestedShow: i } = t;
    if (f.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), n && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const r = $n.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && ur(o).forEach((a) => {
          r[a] = !0;
        });
      }), this._needInitChecks = !0;
    }
    this._renderedItemMap = /* @__PURE__ */ new Map(), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._handleNestedToggle = this._handleNestedToggle.bind(this), this._handleNestedCheck = this._handleNestedCheck.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return this.props.nestedShow ?? this.state.nestedShow ?? !1;
  }
  async setItems(t, e) {
    var i;
    this.isRoot && (this._needInitChecks = !0);
    const n = await super.setItems(t, e);
    return t && ((i = this.props.parent) == null ? void 0 : i.checked) === !0 ? this.toggleChecked(this._renderedItems.map((r) => r.key), !0) : t != null && t.some((r) => r.checked) && (this._needInitChecks = !0, this.forceUpdate()), n;
  }
  getItemMap(t) {
    if (t && (this._itemMap || this._itemMapCache))
      return this._itemMap || this._itemMapCache;
    if (!this._itemMap) {
      let e = !1;
      const n = An(this._items, this.props.itemKey, (i, r) => (i.set(r.keyPath, r), r.data.items && !Array.isArray(r.data.items) && (e = !0), i), /* @__PURE__ */ new Map());
      if (e)
        return this._renderedItemMap.forEach((i, r) => {
          n.has(r) || n.set(r, {
            key: i.key,
            level: i._level,
            keyPath: r,
            parentKey: `${r.split(":").slice(0, -1).join(":")}`,
            children: [],
            data: i
          });
        }), n.forEach((i) => {
          const { parentKey: r } = i;
          if (!r)
            return;
          const o = n.get(r);
          o && (o.children.push(i), i.parent = o);
        }), this._itemMapCache = n, n;
      this._itemMap = n;
    }
    return this._itemMap;
  }
  getRenderedItem(t) {
    return this._renderedItemMap.get(t);
  }
  getItem(t) {
    var i;
    const e = this._itemMap || this._itemMapCache;
    if (e)
      return (i = e.get(t)) == null ? void 0 : i.data;
    const n = this.getRenderedItem(t);
    return n ? n._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  async toggle(t, e, n) {
    const i = this.isExpanded(t);
    if (!n && e === i)
      return;
    e === void 0 && (e = !i);
    const { nestedShow: r, onToggle: o, accordion: a } = this.props;
    o && o.call(this, t, e, n) === !1 || r === void 0 && await this.changeState((l) => {
      let c = {
        ...n ? {} : l.nestedShow,
        [t]: e
      };
      if (e && a) {
        let u = `${t.split(":").slice(0, -1).join(":")}`;
        u.length && (u += ":"), Object.keys(c).forEach((h) => {
          h !== t && h.startsWith(u) && (c[h] = !1);
        });
      }
      return c = e ? ur(t).reduce((u, h) => (u[h] = e, u), c) : c, {
        nestedShow: c
      };
    }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap(!0).values()).reduce((t, { keyPath: e, data: n }) => {
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
      await this.changeState(({ checked: a, nestedShow: l }) => {
        const c = (d) => n[d.keyPath] ?? a[d.keyPath] ?? d.data.checked ?? !1, u = this.getItemMap(), h = {}, { expandChildrenOnCheck: p } = this.props;
        return Object.keys(n).forEach((d) => {
          e = n[d];
          const m = u.get(d);
          m && (So(m, (_) => {
            c(_) !== e && (n[_.keyPath] = e);
          }), bc(m, (_) => {
            const { children: v } = _, y = v.reduce((b, C) => (c(C) && b++, b), 0);
            n[_.keyPath] = y === v.length ? !0 : y ? "indeterminate" : !1;
          }), p && e && m.data.items && (h[d] = !0));
        }), {
          checked: {
            ...a,
            ...n
          },
          nestedShow: {
            ...l,
            ...h
          }
        };
      }, () => {
        var l;
        const a = this.state.checked;
        (l = this.props.onCheck) == null || l.call(this, n, Object.keys(a).filter((c) => a[c] === !0));
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
    return i = i || An(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
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
    this._storeID && $n.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return L(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
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
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ g("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ g("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ g(tt, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ g("span", { className: T(`${this.name}-toggle nested-toggle-icon`, i), children: n });
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
      L(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return L(i, {
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
    return e = L(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t, e) {
    e = e || t.target;
    let n = super._getItemFromEvent(t, e);
    if (!n) {
      const r = e.closest("[z-list]");
      if (r) {
        const o = r.getAttribute("z-list"), a = this.getItem(o), l = this.getRenderedItem(o);
        if (!a || !l)
          return;
        n = {
          target: e,
          index: l._index,
          item: a,
          element: r,
          event: t,
          key: o,
          keyPath: o,
          renderedItem: l
        };
      }
      return;
    }
    (t.type === "mouseenter" || t.type === "mouseleave" || t.type === "mouseover") && (n.hover = t.type !== "mouseleave");
    const { parentKey: i } = this.props;
    return { ...n, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${n.key}`, target: e };
  }
  _handleNestedToggle(t, e, n) {
    this.toggle(t, e, n);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    if (e) {
      const { item: n, keyPath: i, target: r } = e, { nestedToggle: o } = this.props;
      if (!n.items || t.defaultPrevented || r.closest(".not-nested-toggle") || o && !n.disabled && !r.closest(o) || !o && !n.disabled && r.closest("a,.btn,.item-checkbox,.open-url") && !r.closest(".nested-toggle-icon,.item-icon"))
        return e;
      this.toggle(i), t.preventDefault();
    }
    return e;
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = L(super._getProps(t), {
      "z-level": e,
      "z-list": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = T(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, super._beforeRender(t);
  }
}
Ce.defaultProps = {
  ...Ze.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Ce.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive"];
const Se = class xo extends Ce {
  constructor(t) {
    super(t), this._handleHover = this._handleHover.bind(this);
  }
  get isHoverTrigger() {
    return this.props.nestedTrigger === "hover";
  }
  _getClassName(t) {
    return [super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact }];
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: n, maxHeight: i, parentKey: r } = t, o = L(
      { "z-list-wrapper": r },
      e,
      n || i ? { style: { height: n, maxHeight: i } } : null,
      this.isRoot && this.isHoverTrigger ? {
        onMouseEnter: this._handleHover,
        onMouseLeave: this._handleHover,
        onMouseOver: this._handleHover
      } : null
    );
    return o.className = T(this._getWrapClass(t), o.className), o;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ g(D, { content: t.header, generatorThis: this }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ g(D, { content: t.footer, generatorThis: this }, "footer");
  }
  _handleHover(t) {
    const e = t.target;
    if (!(e instanceof HTMLElement) || !this.isHoverTrigger)
      return;
    let n;
    if (t.type !== "mouseleave") {
      const c = e.closest("[z-item]");
      if (c)
        n = c.getAttribute("z-key-path"), c.classList.contains("is-nested") || (n = c.getAttribute("z-parent"));
      else {
        const u = e.closest("[z-list-wrapper]");
        n = u == null ? void 0 : u.getAttribute("z-list-wrapper");
      }
    }
    const i = this._hoverInfo, r = i == null ? void 0 : i.keyPath;
    if (r === n)
      return;
    i != null && i.timer && clearTimeout(i.timer);
    const o = typeof n == "string", l = o ? typeof r == "string" && (i != null && i.shown) ? 50 : 200 : i != null && i.shown ? 100 : 200;
    this._hoverInfo = {
      keyPath: n,
      timer: window.setTimeout(() => {
        o ? (this.toggle(n, !0, !0), this._hoverInfo.shown = !0) : (this.toggleAll(!1), this._hoverInfo = void 0);
      }, l)
    };
  }
  componentWillUnmount() {
    var e;
    super.componentWillUnmount();
    const t = (e = this._hoverInfo) == null ? void 0 : e.timer;
    t && clearTimeout(t);
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
      }), n && (r = L(n, r)), /* @__PURE__ */ g(xo, { ...r });
  }
};
Se.NAME = "menu";
Se.TAG = "menu";
Se.inheritNestedProps = [...Ce.inheritNestedProps, "compact"];
Se.ItemComponents = {
  ...Ce.ItemComponents,
  item: [He, { innerComponent: "a" }]
};
Se.defaultProps = {
  ...Ce.defaultProps,
  scrollbarHover: !0
};
let dt = Se;
let Zs = class extends W {
  constructor(t) {
    super(t), this._input = Y(), this._timer = 0, this._handleClearBtnClick = (e) => {
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
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${ct()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = lo(t, {
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
      e && (this._hotkeysScope = `SearchBox_${this._gid}`, f(this.input).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentWillUnmount() {
    this._hotkeysScope && f(this.input).unbindHotkeys(this._hotkeysScope);
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
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: p, clearIcon: d, value: m, compact: _, prefixClass: v, suffixClass: y } = t, { focus: b, value: C } = e, { id: w } = this, x = m ?? C, N = typeof x != "string" || !x.trim().length;
    let A, E, $;
    return p && ($ = p === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(tt, { icon: p })), !h && p && (A = /* @__PURE__ */ g("label", { for: w, class: T("input-control-prefix", v), children: $ }, "prefix")), d && !N ? E = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: d === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(tt, { icon: d })
      }
    ) : h && p && (E = $), E && (E = /* @__PURE__ */ g("label", { for: w, class: T("input-control-suffix", y), children: E }, "suffix")), /* @__PURE__ */ g("div", { class: T("search-box input-control", r, { focus: b, empty: N, compact: _, "has-prefix-icon": A, "has-suffix-icon": E }), style: o, children: [
      A,
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
          value: x,
          onInput: this._handleChange,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleFocus
        },
        "input"
      ),
      E
    ] });
  }
};
Zs.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: Zs
}, Symbol.toStringTag, { value: "Module" }));
let mt = class extends dt {
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
    const t = f(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((n = this._searchKeys) != null && n.length) && !e.length && !t.children(".item").not(".is-not-match").length);
  }
  _isItemMatch(t, e, n, i) {
    const { isItemMatch: r, nestedSearch: o } = t, a = r ? r.call(this, e, this._searchKeys, n, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (o && this.isRoot && a && i !== void 0) {
      let l = "";
      String(i).split(":").forEach((c) => {
        l += `${l.length ? ":" : ""}${c}`, this._matchedParents.add(l);
      });
    }
    return a;
  }
  _isNestedItemMatch(t, e, n, i) {
    return this._isItemMatch(this.props, t, n, i);
  }
  _getNestedProps(t, e, n, i) {
    const r = super._getNestedProps(t, e, n, i);
    return this.isRoot && t.nestedSearch ? (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")) : t.nestedSearch || L(r, { search: void 0, defaultSearch: void 0 }, n.listProps), r;
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
  _getSearchBoxProps(t) {
    const { searchBox: e } = t, n = {
      compact: !0,
      className: "not-nested-toggle",
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && L(n, e), t.search !== void 0 && (n.value = this._searchKeys.join(" "), n.disabled = !0), n;
  }
  _renderSearchBox(t) {
    const e = this._getSearchBoxProps(t);
    return /* @__PURE__ */ g(Zs, { ...e }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, { noMatchHint: n, searchBox: i, searchPlacement: r, nestedSearch: o } = t, a = (!o || this.isRoot) && i && r !== "bottom";
    return !e && !a && !n ? null : [
      n ? /* @__PURE__ */ g("div", { className: "search-menu-no-match-hint", children: n }, "noMatchHint") : null,
      e || a ? /* @__PURE__ */ g("header", { className: "search-menu-header", children: [
        e ? super._renderWrapperHeader(t) : null,
        a ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, { searchBox: n, searchPlacement: i, nestedSearch: r } = t, o = (!r || this.isRoot) && n && i === "bottom";
    return !e && !o ? null : /* @__PURE__ */ g("footer", { className: "search-menu-footer", children: [
      e ? super._renderWrapperFooter(t) : null,
      o ? this._renderSearchBox(t) : null
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
      return l.forEach((u, h) => {
        h && (o.push(/* @__PURE__ */ g("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
mt.inheritNestedProps = [...dt.inheritNestedProps, "isItemMatch", "search", "underlineKeys", "nestedSearch"];
mt.defaultProps = {
  ...dt.defaultProps,
  defaultNestedShow: !0,
  wrap: !0,
  nestedSearch: !0,
  underlineKeys: !0
};
const Cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: dt,
  SearchMenu: mt
}, Symbol.toStringTag, { value: "Module" }));
class di extends B {
}
di.NAME = "Menu";
di.Component = dt;
di.replace = dt.TAG;
class fi extends B {
}
fi.NAME = "SearchMenu";
fi.Component = mt;
fi.replace = mt.TAG;
rt(Cc);
function Sc({
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
  a === !0 ? p = /* @__PURE__ */ g(G, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : bt(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ g(G, { ...a, onClick: l }));
  const d = Ct.render(e, []);
  return /* @__PURE__ */ g("div", { className: T("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ g(tt, { icon: c, className: T("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ g(D, { content: i }) : /* @__PURE__ */ g("div", { className: T("alert-content", r), children: [
      typeof n != "string" ? /* @__PURE__ */ g(D, { content: n }) : n && /* @__PURE__ */ g("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      n ? d : null
    ] }),
    n ? null : d,
    p,
    o
  ] });
}
function xc(s) {
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
function kc({
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
    Sc,
    {
      className: T("messager", r, t, n === !0 ? xc(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Tc = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Nc = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, $e = (s, t, e) => (Tc(s, t, "access private method"), e), Jt, ue;
class pi extends B {
  constructor() {
    super(...arguments), Nc(this, Jt), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), $e(this, Jt, ue).call(this, () => {
      this._show = !0, this.render(), $e(this, Jt, ue).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && $e(this, Jt, ue).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && $e(this, Jt, ue).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), $e(this, Jt, ue).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
Jt = /* @__PURE__ */ new WeakSet();
ue = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
pi.NAME = "MessagerItem";
pi.Component = kc;
const Qe = class ko extends ft {
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
      const t = this._getHolder(), e = new pi(t, this.options);
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
    e.length || (e = f(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
    let n = e.find(`#messager-${this.gid}`);
    return n.length || (n = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = n[0]), n[0];
  }
  static show(t, e) {
    typeof t == "string" && (t = { content: t });
    const { container: n, ...i } = t, r = { type: e, key: `messager_${ct()}`, ...i };
    r.type && f.extend(r, this.TypeOptions[r.type]);
    const o = ko.ensure(n || "body", r);
    return o.hide(), o.show(), o;
  }
};
Qe.NAME = "messager";
Qe.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Qe.MULTI_INSTANCE = !0;
Qe.TypeOptions = {};
let Iu = Qe, Xs = class extends W {
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
Xs.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: Xs
}, Symbol.toStringTag, { value: "Module" }));
rt(Ec);
class gi extends B {
}
gi.NAME = "ProgressBar";
gi.Component = Xs;
gi.register();
let Qs = class extends W {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, p = n / 2;
    let { circleWidth: d = 0.1 } = t;
    d < 1 && (d = n * d);
    const m = (n - d) / 2;
    return /* @__PURE__ */ g("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ g("circle", { cx: p, cy: p, r: m, "stroke-width": d, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ g("circle", { cx: p, cy: p, r: m, "stroke-width": d, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * m * 2, "stroke-dashoffset": Math.PI * m * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ g("text", { x: c ?? p, y: u ?? p + d / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${m}px`, stroke: "currentColor" }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
Qs.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class mi extends B {
}
mi.NAME = "ProgressCircle";
mi.Component = Qs;
mi.register();
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: Qs
}, Symbol.toStringTag, { value: "Module" }));
rt($c);
class To extends B {
}
To.NAME = "Avatar";
To.Component = Gs;
rt(gc);
class No extends B {
}
No.NAME = "BtnGroup";
No.Component = wt;
const Ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: wt
}, Symbol.toStringTag, { value: "Module" }));
rt(Ac);
const Eo = Symbol("EVENT_PICK");
class _i extends W {
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
        f(`#${o}`).val(n);
      else
        return /* @__PURE__ */ g("input", { id: o, type: "hidden", className: "pick-value", name: e, value: n, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    f(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, n) => {
      if (typeof n == "symbol")
        return;
      const i = e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && f(`#${e}`).trigger("change", Eo), this._skipTriggerChange = !1);
  }
  render(t) {
    return gt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Nt = Math.min, lt = Math.max, xs = Math.round, as = Math.floor, Vt = (s) => ({
  x: s,
  y: s
}), Mc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Pc = {
  start: "end",
  end: "start"
};
function Mn(s, t, e) {
  return lt(s, Nt(t, e));
}
function xe(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Ut(s) {
  return s.split("-")[0];
}
function ke(s) {
  return s.split("-")[1];
}
function $o(s) {
  return s === "x" ? "y" : "x";
}
function yi(s) {
  return s === "y" ? "height" : "width";
}
function ie(s) {
  return ["top", "bottom"].includes(Ut(s)) ? "y" : "x";
}
function vi(s) {
  return $o(ie(s));
}
function Ic(s, t, e) {
  e === void 0 && (e = !1);
  const n = ke(s), i = vi(s), r = yi(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = ks(o)), [o, ks(o)];
}
function Rc(s) {
  const t = ks(s);
  return [Pn(s), t, Pn(t)];
}
function Pn(s) {
  return s.replace(/start|end/g, (t) => Pc[t]);
}
function Dc(s, t, e) {
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
function Lc(s, t, e, n) {
  const i = ke(s);
  let r = Dc(Ut(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Pn)))), r;
}
function ks(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Mc[t]);
}
function zc(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function Ao(s) {
  return typeof s != "number" ? zc(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Ts(s) {
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
function dr(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = ie(t), o = vi(t), a = yi(o), l = Ut(t), c = r === "y", u = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      d = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      d = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  switch (ke(t)) {
    case "start":
      d[o] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      d[o] += p * (e && c ? -1 : 1);
      break;
  }
  return d;
}
const Oc = async (s, t, e) => {
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
  } = dr(c, n, l), p = n, d = {}, m = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: b,
      y: C,
      data: w,
      reset: x
    } = await y({
      x: u,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    u = b ?? u, h = C ?? h, d = {
      ...d,
      [v]: {
        ...d[v],
        ...w
      }
    }, x && m <= 50 && (m++, typeof x == "object" && (x.placement && (p = x.placement), x.rects && (c = x.rects === !0 ? await o.getElementRects({
      reference: s,
      floating: t,
      strategy: i
    }) : x.rects), {
      x: u,
      y: h
    } = dr(c, p, l)), _ = -1);
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: i,
    middlewareData: d
  };
};
async function bi(s, t) {
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
    padding: d = 0
  } = xe(t, s), m = Ao(d), v = a[p ? h === "floating" ? "reference" : "floating" : h], y = Ts(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = h === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), w = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = Ts(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: C,
    strategy: l
  }) : b);
  return {
    top: (y.top - x.top + m.top) / w.y,
    bottom: (x.bottom - y.bottom + m.bottom) / w.y,
    left: (y.left - x.left + m.left) / w.x,
    right: (x.right - y.right + m.right) / w.x
  };
}
const Fc = (s) => ({
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
    const h = Ao(u), p = {
      x: e,
      y: n
    }, d = vi(i), m = yi(d), _ = await o.getDimensions(c), v = d === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", w = r.reference[m] + r.reference[d] - p[d] - r.floating[m], x = p[d] - r.reference[d], N = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let A = N ? N[C] : 0;
    (!A || !await (o.isElement == null ? void 0 : o.isElement(N))) && (A = a.floating[C] || r.floating[m]);
    const E = w / 2 - x / 2, $ = A / 2 - _[m] / 2 - 1, k = Nt(h[y], $), M = Nt(h[b], $), I = k, z = A - _[m] - M, R = A / 2 - _[m] / 2 + E, H = Mn(I, R, z), V = !l.arrow && ke(i) != null && R !== H && r.reference[m] / 2 - (R < I ? k : M) - _[m] / 2 < 0, q = V ? R < I ? R - I : R - z : 0;
    return {
      [d]: p[d] + q,
      data: {
        [d]: H,
        centerOffset: R - H - q,
        ...V && {
          alignmentOffset: q
        }
      },
      reset: V
    };
  }
}), Hc = function(s) {
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
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: _ = !0,
        ...v
      } = xe(s, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const y = Ut(i), b = ie(a), C = Ut(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), x = p || (C || !_ ? [ks(a)] : Rc(a)), N = m !== "none";
      !p && N && x.push(...Lc(a, _, m, w));
      const A = [a, ...x], E = await bi(t, v), $ = [];
      let k = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (u && $.push(E[y]), h) {
        const R = Ic(i, o, w);
        $.push(E[R[0]], E[R[1]]);
      }
      if (k = [...k, {
        placement: i,
        overflows: $
      }], !$.every((R) => R <= 0)) {
        var M, I;
        const R = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, H = A[R];
        if (H)
          return {
            data: {
              index: R,
              overflows: k
            },
            reset: {
              placement: H
            }
          };
        let V = (I = k.filter((q) => q.overflows[0] <= 0).sort((q, P) => q.overflows[1] - P.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!V)
          switch (d) {
            case "bestFit": {
              var z;
              const q = (z = k.filter((P) => {
                if (N) {
                  const yt = ie(P.placement);
                  return yt === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  yt === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((yt) => yt > 0).reduce((yt, La) => yt + La, 0)]).sort((P, yt) => P[1] - yt[1])[0]) == null ? void 0 : z[0];
              q && (V = q);
              break;
            }
            case "initialPlacement":
              V = a;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function Wc(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Ut(e), a = ke(e), l = ie(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = xe(t, s);
  let {
    mainAxis: p,
    crossAxis: d,
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
  return a && typeof m == "number" && (d = a === "end" ? m * -1 : m), l ? {
    x: d * u,
    y: p * c
  } : {
    x: p * c,
    y: d * u
  };
}
const jc = function(s) {
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
      } = t, l = await Wc(t, s);
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
}, Bc = function(s) {
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
      } = xe(s, t), c = {
        x: e,
        y: n
      }, u = await bi(t, l), h = ie(Ut(i)), p = $o(h);
      let d = c[p], m = c[h];
      if (r) {
        const v = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", b = d + u[v], C = d - u[y];
        d = Mn(b, d, C);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = m + u[v], C = m - u[y];
        m = Mn(b, m, C);
      }
      const _ = a.fn({
        ...t,
        [p]: d,
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
}, Vc = function(s) {
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
      } = xe(s, t), l = await bi(t, a), c = Ut(e), u = ke(e), h = ie(e) === "y", {
        width: p,
        height: d
      } = n.floating;
      let m, _;
      c === "top" || c === "bottom" ? (m = c, _ = u === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, m = u === "end" ? "top" : "bottom");
      const v = d - l.top - l.bottom, y = p - l.left - l.right, b = Nt(d - l[m], v), C = Nt(p - l[_], y), w = !t.middlewareData.shift;
      let x = b, N = C;
      if (h ? N = u || w ? Nt(C, y) : y : x = u || w ? Nt(b, v) : v, w && !u) {
        const E = lt(l.left, 0), $ = lt(l.right, 0), k = lt(l.top, 0), M = lt(l.bottom, 0);
        h ? N = p - 2 * (E !== 0 || $ !== 0 ? E + $ : lt(l.left, l.right)) : x = d - 2 * (k !== 0 || M !== 0 ? k + M : lt(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: N,
        availableHeight: x
      });
      const A = await i.getDimensions(r.floating);
      return p !== A.width || d !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Te(s) {
  return Mo(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ht(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ft(s) {
  var t;
  return (t = (Mo(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mo(s) {
  return s instanceof Node || s instanceof ht(s).Node;
}
function Et(s) {
  return s instanceof Element || s instanceof ht(s).Element;
}
function $t(s) {
  return s instanceof HTMLElement || s instanceof ht(s).HTMLElement;
}
function fr(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof ht(s).ShadowRoot;
}
function ts(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = St(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Uc(s) {
  return ["table", "td", "th"].includes(Te(s));
}
function tn(s) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return s.matches(t);
    } catch {
      return !1;
    }
  });
}
function wi(s) {
  const t = Ci(), e = St(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Kc(s) {
  let t = Kt(s);
  for (; $t(t) && !be(t); ) {
    if (tn(t))
      return null;
    if (wi(t))
      return t;
    t = Kt(t);
  }
  return null;
}
function Ci() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function be(s) {
  return ["html", "body", "#document"].includes(Te(s));
}
function St(s) {
  return ht(s).getComputedStyle(s);
}
function en(s) {
  return Et(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.scrollX,
    scrollTop: s.scrollY
  };
}
function Kt(s) {
  if (Te(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    fr(s) && s.host || // Fallback.
    Ft(s)
  );
  return fr(t) ? t.host : t;
}
function Po(s) {
  const t = Kt(s);
  return be(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : $t(t) && ts(t) ? t : Po(t);
}
function We(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Po(s), r = i === ((n = s.ownerDocument) == null ? void 0 : n.body), o = ht(i);
  return r ? t.concat(o, o.visualViewport || [], ts(i) ? i : [], o.frameElement && e ? We(o.frameElement) : []) : t.concat(i, We(i, [], e));
}
function Io(s) {
  const t = St(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = $t(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = xs(e) !== r || xs(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Si(s) {
  return Et(s) ? s : s.contextElement;
}
function me(s) {
  const t = Si(s);
  if (!$t(t))
    return Vt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Io(t);
  let o = (r ? xs(e.width) : e.width) / n, a = (r ? xs(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const qc = /* @__PURE__ */ Vt(0);
function Ro(s) {
  const t = ht(s);
  return !Ci() || !t.visualViewport ? qc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gc(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ht(s) ? !1 : t;
}
function re(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Si(s);
  let o = Vt(1);
  t && (n ? Et(n) && (o = me(n)) : o = me(s));
  const a = Gc(r, e, n) ? Ro(r) : Vt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const p = ht(r), d = n && Et(n) ? ht(n) : n;
    let m = p, _ = m.frameElement;
    for (; _ && n && d !== m; ) {
      const v = me(_), y = _.getBoundingClientRect(), b = St(_), C = y.left + (_.clientLeft + parseFloat(b.paddingLeft)) * v.x, w = y.top + (_.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, c *= v.y, u *= v.x, h *= v.y, l += C, c += w, m = ht(_), _ = m.frameElement;
    }
  }
  return Ts({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
function Yc(s) {
  let {
    elements: t,
    rect: e,
    offsetParent: n,
    strategy: i
  } = s;
  const r = i === "fixed", o = Ft(n), a = t ? tn(t.floating) : !1;
  if (n === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Vt(1);
  const u = Vt(0), h = $t(n);
  if ((h || !h && !r) && ((Te(n) !== "body" || ts(o)) && (l = en(n)), $t(n))) {
    const p = re(n);
    c = me(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + u.y
  };
}
function Jc(s) {
  return Array.from(s.getClientRects());
}
function Do(s) {
  return re(Ft(s)).left + en(s).scrollLeft;
}
function Zc(s) {
  const t = Ft(s), e = en(s), n = s.ownerDocument.body, i = lt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = lt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Do(s);
  const a = -e.scrollTop;
  return St(n).direction === "rtl" && (o += lt(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Xc(s, t) {
  const e = ht(s), n = Ft(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = Ci();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Qc(s, t) {
  const e = re(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = $t(s) ? me(s) : Vt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function pr(s, t, e) {
  let n;
  if (t === "viewport")
    n = Xc(s, e);
  else if (t === "document")
    n = Zc(Ft(s));
  else if (Et(t))
    n = Qc(t, e);
  else {
    const i = Ro(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Ts(n);
}
function Lo(s, t) {
  const e = Kt(s);
  return e === t || !Et(e) || be(e) ? !1 : St(e).position === "fixed" || Lo(e, t);
}
function th(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = We(s, [], !1).filter((a) => Et(a) && Te(a) !== "body"), i = null;
  const r = St(s).position === "fixed";
  let o = r ? Kt(s) : s;
  for (; Et(o) && !be(o); ) {
    const a = St(o), l = wi(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ts(o) && !l && Lo(s, o)) ? n = n.filter((u) => u !== o) : i = a, o = Kt(o);
  }
  return t.set(s, n), n;
}
function eh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? tn(t) ? [] : th(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, u) => {
    const h = pr(t, u, i);
    return c.top = lt(h.top, c.top), c.right = Nt(h.right, c.right), c.bottom = Nt(h.bottom, c.bottom), c.left = lt(h.left, c.left), c;
  }, pr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sh(s) {
  const {
    width: t,
    height: e
  } = Io(s);
  return {
    width: t,
    height: e
  };
}
function nh(s, t, e) {
  const n = $t(t), i = Ft(t), r = e === "fixed", o = re(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Vt(0);
  if (n || !n && !r)
    if ((Te(t) !== "body" || ts(i)) && (a = en(t)), n) {
      const h = re(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Do(i));
  const c = o.left + a.scrollLeft - l.x, u = o.top + a.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: o.width,
    height: o.height
  };
}
function gn(s) {
  return St(s).position === "static";
}
function gr(s, t) {
  return !$t(s) || St(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function zo(s, t) {
  const e = ht(s);
  if (tn(s))
    return e;
  if (!$t(s)) {
    let i = Kt(s);
    for (; i && !be(i); ) {
      if (Et(i) && !gn(i))
        return i;
      i = Kt(i);
    }
    return e;
  }
  let n = gr(s, t);
  for (; n && Uc(n) && gn(n); )
    n = gr(n, t);
  return n && be(n) && gn(n) && !wi(n) ? e : n || Kc(s) || e;
}
const ih = async function(s) {
  const t = this.getOffsetParent || zo, e = this.getDimensions, n = await e(s.floating);
  return {
    reference: nh(s.reference, await t(s.floating), s.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function rh(s) {
  return St(s).direction === "rtl";
}
const oh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Yc,
  getDocumentElement: Ft,
  getClippingRect: eh,
  getOffsetParent: zo,
  getElementRects: ih,
  getClientRects: Jc,
  getDimensions: sh,
  getScale: me,
  isElement: Et,
  isRTL: rh
};
function ah(s, t) {
  let e = null, n;
  const i = Ft(s);
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
    const d = as(u), m = as(i.clientWidth - (c + h)), _ = as(i.clientHeight - (u + p)), v = as(c), b = {
      rootMargin: -d + "px " + -m + "px " + -_ + "px " + -v + "px",
      threshold: lt(0, Nt(1, l)) || 1
    };
    let C = !0;
    function w(x) {
      const N = x[0].intersectionRatio;
      if (N !== l) {
        if (!C)
          return o();
        N ? o(!1, N) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
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
function Oo(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Si(s), u = i || r ? [...c ? We(c) : [], ...We(t)] : [];
  u.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? ah(c, e) : null;
  let p = -1, d = null;
  o && (d = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = d) == null || C.observe(t);
    })), e();
  }), c && !l && d.observe(c), d.observe(t));
  let m, _ = l ? re(s) : null;
  l && v();
  function v() {
    const y = re(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, m = requestAnimationFrame(v);
  }
  return e(), () => {
    var y;
    u.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h == null || h(), (y = d) == null || y.disconnect(), d = null, l && cancelAnimationFrame(m);
  };
}
const xi = jc, ki = Bc, Ti = Hc, Fo = Vc, lh = Fc, Ni = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: oh,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Oc(s, t, {
    ...i,
    platform: r
  });
};
class Ho extends W {
  constructor(t) {
    super(t), this._ref = Y(), this._handleDocClick = (e) => {
      const { state: { open: n }, id: i, togglePop: r } = this.props, o = f(e.target);
      n !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, n = f(t.target), i = n.closest("[data-pick-value]");
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
    } = t, l = f.extend({
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
      const e = f(t.container || "body");
      let n = e.find(".pick-container");
      n.length || (n = f("<div>").addClass("pick-container").appendTo(e)), this._container = n[0];
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
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = us(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
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
    this._layoutWatcher || (this._layoutWatcher = Oo(e, t, () => {
      const { placement: r, width: o } = n;
      Ni(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Ti() : null, ki(), xi(1)].filter(Boolean)
      }).then(({ x: a, y: l, placement: c }) => {
        var u, h;
        if (le(e) || !Ks(e)) {
          f(t).css({ display: "none" });
          return;
        }
        f(t).css(this._getStyle({
          left: a,
          top: l
        }, c)), (h = (u = this.props).onLayout) == null || h.call(u, t);
      }), o === "100%" && f(t).css(this._getStyle());
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), f(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, n;
    f(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, f(`#pick-pop-${this.props.id}`).remove(), (n = (e = this.props).beforeDestroy) == null || n.call(e);
  }
  render(t) {
    return ac(this._render(t), this._getContainer(t));
  }
}
let _t = class extends W {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = Y(), this._trigger = Y(), this.toggle = async (e, n) => {
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
      return o === "closing" ? (await bs(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await bs(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this._id = t.id ?? `_pick${ct()}`, this.changeState = this.changeState.bind(this), this.state = this.getDefaultState(t);
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
    return /* @__PURE__ */ g(we, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
_t.Trigger = _i;
_t.Pop = Ho;
_t.defaultProps = {
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
let Wo = class extends _t {
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
      n ? /* @__PURE__ */ g(tt, { icon: n }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = f.extend({
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
        r.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(tt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(tt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Wo.defaultProps = {
  ..._t.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class jo extends B {
}
jo.NAME = "ColorPicker";
jo.Component = Wo;
const je = 24 * 60 * 60 * 1e3, j = (s) => s === void 0 ? /* @__PURE__ */ new Date() : (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s), ch = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(j(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, te = (s, t = /* @__PURE__ */ new Date()) => j(s).toDateString() === j(t).toDateString(), In = (s, t = /* @__PURE__ */ new Date()) => j(s).getFullYear() === j(t).getFullYear(), Bo = (s, t = /* @__PURE__ */ new Date()) => (s = j(s), t = j(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Ou = (s, t = /* @__PURE__ */ new Date()) => {
  s = j(s), t = j(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Fu = (s, t) => te(j(t), s), Hu = (s, t) => te(j(t).getTime() - je, s), Wu = (s, t) => te(j(t).getTime() + je, s), Vo = (s) => s != null && !isNaN(j(s).getTime()), xt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = j(s), !Vo(s))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", In(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, ju = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = xt(s, In(s) ? n.month : n.full);
  if (te(s, t))
    return i;
  const r = xt(t, In(s, t) ? Bo(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
class Uo extends W {
  constructor() {
    super(...arguments), this._ref = Y(), this._handleClickItem = (t, e) => {
      var n, i;
      (i = (n = this.props).onChange) == null || i.call(n, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      f(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
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
        dt,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ g(
        dt,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const mr = (s) => {
  if (!s)
    return;
  const t = j(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ko = class extends _t {
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
    return e.value === "now" && (e.value = xt(/* @__PURE__ */ new Date(), (t || this.props).format)), e;
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
    const n = mr(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? xt(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = mr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ g("i", { class: "i-time" }) : h = /* @__PURE__ */ g(tt, { icon: i })), [
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
    return /* @__PURE__ */ g(Uo, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Ko.defaultProps = {
  ..._t.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function hh(s, t, e) {
  return t && s < t ? t : e && s > e ? e : s;
}
function De(s) {
  if (s == null)
    return null;
  if (typeof s == "function" && (s = s()), typeof s == "string" && s.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    s.length > 6 ? s = ch(t, s.substring(5).replace("+", "")) : s = t;
  } else
    s = j(s);
  return Vo(s) ? s : null;
}
O.addLang({
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
const uh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * je;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, _r = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => xt(e, t)));
class dh extends W {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const n = f(t.target).closest(".mini-calendar-day").dataset("date");
      n && e(n);
    };
  }
  render(t) {
    var $, k;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: n = 1,
      weekNames: i = O.getLang("weekNames"),
      monthNames: r = O.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h
    } = t, p = [], d = "btn ghost square rounded-full";
    for (let M = 0; M < 7; M++) {
      const I = (n + M) % 7;
      p.push(/* @__PURE__ */ g("div", { className: T("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ g("div", { children: i ? i[I] : I }) }, M));
    }
    const { startTime: m, days: _, firstDay: v } = uh(o, a, n), y = v + _ * je;
    let b = m;
    const C = [], w = "yyyy-MM-dd", x = _r(l, w), N = _r(c, w), A = (($ = u ? j(u) : null) == null ? void 0 : $.getTime()) ?? Number.MAX_SAFE_INTEGER, E = ((k = h ? j(h) : null) == null ? void 0 : k.getTime()) ?? 0;
    for (; b <= y; ) {
      const M = [];
      for (let I = 0; I < 7; I++) {
        const z = new Date(b), R = z.getDate(), H = xt(z, w), V = z.getDay(), q = Bo(z, v), P = T("col mini-calendar-day", {
          active: x.has(H),
          selected: N.has(H),
          "is-first": R === 1,
          "is-in-month": q,
          "is-out-month": !q,
          "is-today": te(z, e),
          "is-weekend": V === 0 || V === 6,
          disabled: !te(z, A) && !te(z, E) && (b > A || b < E)
        });
        M.push(
          /* @__PURE__ */ g("div", { className: P, "data-date": H, children: /* @__PURE__ */ g("button", { type: "button", className: d, onClick: this._handleClickDate, children: R === 1 && r ? r[z.getMonth()] : z.getDate() }) }, H)
        ), b += je;
      }
      C.push(/* @__PURE__ */ g("div", { className: "row", children: M }, b));
    }
    return /* @__PURE__ */ g("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ g("div", { className: "row", children: p }),
      C
    ] });
  }
}
var Ds, Ls;
class yr extends W {
  constructor() {
    super(...arguments);
    ot(this, Ds, Y());
    ot(this, Ls, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = f(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ g(G, { type: "ghost", "data-value": c, active: c === o, className: T(l === c ? "is-current" : ""), onClick: it(this, Ls), children: c }, c));
    return /* @__PURE__ */ g("div", { className: n, ref: it(this, Ds), children: a });
  }
}
Ds = new WeakMap(), Ls = new WeakMap();
var Ue, Ke, qe, Ge, Ye, Je, zs, qo, Os, Go;
class fh extends W {
  constructor(e) {
    super(e);
    ot(this, zs);
    ot(this, Os);
    ot(this, Ue, void 0);
    ot(this, Ke, void 0);
    ot(this, qe, void 0);
    ot(this, Ge, void 0);
    ot(this, Ye, void 0);
    ot(this, Je, void 0);
    pt(this, Ue, Y()), pt(this, Ke, (r) => {
      const o = f(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), pt(this, qe, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), pt(this, Ge, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), pt(this, Ye, (r) => {
      this.setState({ year: r, select: "day" });
    }), pt(this, Je, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: n } = e, i = De(n) || /* @__PURE__ */ new Date();
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
      yearText: r = O.getLang("yearFormat") || "{0}",
      weekNames: o = O.getLang("weekNames"),
      monthNames: a = O.getLang("monthNames"),
      minDate: l,
      maxDate: c,
      weekStart: u
    } = e, h = De(i), {
      year: p,
      month: d,
      select: m
    } = n, _ = m === "day", v = l || j("1970-1-1"), y = c || j("2099-12-31");
    return /* @__PURE__ */ g("div", { className: "date-picker-menu row", ref: it(this, Ue), onClick: it(this, Ke), children: [
      ln(this, zs, qo).call(this, e),
      /* @__PURE__ */ g("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ g("div", { className: "row p-2", children: [
          /* @__PURE__ */ g(G, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: U(r, p) }),
          /* @__PURE__ */ g(G, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ g("div", { className: "flex-auto" }),
          _ ? /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ g(G, { type: "ghost", size: "sm", square: !0, onClick: it(this, qe), children: /* @__PURE__ */ g("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ g(G, { type: "ghost", size: "sm", square: !0, onClick: it(this, Ge), children: /* @__PURE__ */ g("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        _ ? /* @__PURE__ */ g(
          dh,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: y,
            minDate: v,
            year: p,
            month: d,
            selections: h || [],
            onClickDate: this.changeDate
          }
        ) : null,
        m === "year" ? /* @__PURE__ */ g(
          yr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: p,
            min: v.getFullYear(),
            max: y.getFullYear(),
            onChange: it(this, Ye)
          }
        ) : m === "month" ? /* @__PURE__ */ g(
          yr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: it(this, Je)
          }
        ) : null,
        _ ? ln(this, Os, Go).call(this, e) : null
      ] })
    ] });
  }
}
Ue = new WeakMap(), Ke = new WeakMap(), qe = new WeakMap(), Ge = new WeakMap(), Ye = new WeakMap(), Je = new WeakMap(), zs = new WeakSet(), qo = function(e) {
  return dt.render(e.menu, [], {
    onClickItem: (n) => {
      const i = n.item.value;
      typeof i == "string" && this.changeDate(i);
    }
  }, this);
}, Os = new WeakSet(), Go = function(e) {
  let { actions: n } = e;
  const { todayText: i = O.getLang("today"), clearText: r } = e;
  return n === void 0 && (n = [{ text: i, "data-set-date": xt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ g("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ g(Ct, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ g(G, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let sn = class extends _t {
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
    return this._date = a, a ? xt(a, o) : r ? t : i ? n : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: n } = this.props;
    return [De(typeof e == "function" ? e(t) : e), De(typeof n == "function" ? n(t) : n)];
  }
  _parseDate(t) {
    const e = De(t);
    return e ? hh(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let p;
    u && !r && c.length ? p = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? p = /* @__PURE__ */ g("i", { class: "i-calendar" }) : p = /* @__PURE__ */ g(tt, { icon: i }));
    const d = u ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ g(
        "input",
        {
          id: h,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: d,
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
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: u, required: h } = t, [p, d] = this._getDateRange(e.value);
    return /* @__PURE__ */ g(
      fh,
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
        maxDate: d
      }
    );
  }
};
sn.defaultProps = {
  ..._t.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let Yo = class extends sn {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = j(t), n = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(n.getHours()), e.setMinutes(n.getMinutes()), this.setDate(xt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const n = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? n.setHours(e) : n.setMinutes(e), this.setDate(xt(n, this.props.format));
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
        Uo,
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
Yo.defaultProps = {
  ...sn.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Ei extends B {
}
Ei.NAME = "TimePicker";
Ei.Component = Ko;
Ei.register();
class $i extends B {
}
$i.NAME = "DatePicker";
$i.Component = sn;
$i.register();
class Ai extends B {
}
Ai.NAME = "DatetimePicker";
Ai.Component = Yo;
Ai.register();
const vr = "show", mn = "in", ph = '[data-dismiss="modal"]', ls = "modal-hide", Ne = class Zt extends ft {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(ph) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
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
      t.target.closest(".modal") === e && !Zt.getAll().some((n) => n.shown) && f("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && f("html").disableScroll();
    }), this.shown && f("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    const { modalElement: e } = this, n = f(e);
    if (this._shown && n.hasClass(mn))
      return n.removeClass(ls).css("z-index", `${Zt.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    n.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [ls]: !1
    }, vr, o).css({
      zIndex: `${Zt.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !n.closest(c.modalElement).length && c.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((c) => {
      c !== this && !n.closest(c.modalElement).length && c.hide();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      n.addClass(mn), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    f(this.modalElement).addClass(ls);
  }
  hide() {
    if (!this._shown)
      return !1;
    this._shown = !1, f(this.modalElement).removeClass(mn), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(vr), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((e) => {
      e.shown && e !== this && f(e.modalElement).removeClass(ls);
    }), !0;
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return Zt.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = Zt.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Zt.query(t, void 0, (n) => !n.shown)) == null || e.show();
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
let Be = Ne;
f(window).on(`resize.${Be.NAMESPACE}`, () => {
  Be.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class Jo extends W {
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
    return bt(t) ? t : t === !1 || !n ? null : t ? /* @__PURE__ */ g(D, { className: T("modal-header", e), content: t }) : /* @__PURE__ */ g("div", { className: T("modal-header", e), children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : bt(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(Ct, { ...t }) : null,
      e ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? bt(t) ? t : /* @__PURE__ */ g(D, { className: T("modal-body", e), content: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return bt(t) ? t : t === !1 || !n ? null : t ? /* @__PURE__ */ g(D, { className: T("modal-footer", e), content: t }) : /* @__PURE__ */ g("div", { className: T("modal-footer", e), children: n ? /* @__PURE__ */ g(Ct, { ...n }) : null });
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
Jo.defaultProps = { closeBtn: !0 };
class Zo extends W {
  constructor() {
    super(...arguments), this._ref = Y(), this.state = {}, this._handleIframeLoad = () => {
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
Zo.defaultProps = {
  watchHeight: !0
};
var Mi = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, vt = (s, t, e) => (Mi(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ae = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, he = (s, t, e, n) => (Mi(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ds = (s, t, e) => (Mi(s, t, "access private method"), e), Pt, Me, It, Ns, Pi, fs, Rn;
function gh(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function mh(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await f.ajax({
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
    body: e === "html" ? /* @__PURE__ */ g(ve, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function _h(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ g(Zo, { url: e, watchHeight: !o })
  };
}
const yh = {
  custom: gh,
  ajax: mh,
  iframe: _h
}, br = "loading", Xo = class de extends Be {
  constructor() {
    super(...arguments), Ae(this, Ns), Ae(this, fs), Ae(this, Pt, void 0), Ae(this, Me, void 0), Ae(this, It, void 0);
  }
  get id() {
    return vt(this, Me);
  }
  get loading() {
    var t;
    return (t = vt(this, Pt)) == null ? void 0 : t.classList.contains(br);
  }
  get shown() {
    var t;
    return !!((t = vt(this, Pt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = vt(this, Pt);
    if (!t) {
      const { options: e } = this;
      let n = vt(this, Me);
      n || (n = e.id || `modal-${ct()}`, he(this, Me, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], t)
        f(t).data(this.constructor.KEY, this);
      else {
        const r = this.key;
        t = f("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      he(this, Pt, t);
    }
    return t;
  }
  get $emitter() {
    const t = vt(this, Pt);
    return t ? f(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destroyOnHide && this.options.type !== "static" && this.on("hidden", (t) => {
      f(t.target).data("key") === this.key && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = vt(this, Pt);
    t && (f(t).removeData(this.constructor.KEY).remove(), he(this, Pt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, It) && clearTimeout(vt(this, It));
    const { modalElement: t, options: e } = this, n = f(t), { type: i, loadTimeout: r, loadingClass: o = br, loadingText: a = null } = e;
    if (!i || i === "static")
      return !0;
    const l = yh[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", a).addClass(o), r && he(this, It, window.setTimeout(() => {
      he(this, It, 0), ds(this, fs, Rn).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return this._destroyed ? !1 : (c === !1 ? await ds(this, fs, Rn).call(this, this.options.failedTip) : c && typeof c == "object" && await ds(this, Ns, Pi).call(this, c), vt(this, It) && (clearTimeout(vt(this, It)), he(this, It, 0)), this.layout(), await bs(100), n.removeClass(o), !0);
  }
  static isValid(t) {
    return !f.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), !r.type && t.id && (r.type = "static"), r.key === void 0 && (r.key = r.id);
      const o = de.ensure(n, r), a = `${de.NAMESPACE}.open${ct()}`;
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
    const d = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = O.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && d.push(v);
    }, []);
    let m;
    const _ = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: v, event: y }) => {
        const b = de.query(y.target);
        if (!b || b.key !== c)
          return;
        m = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await de.open({
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
    return await de.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Pt = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakSet();
Pi = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return f(this.modalElement).html(s[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, ge(
      /* @__PURE__ */ g(Jo, { ...s }),
      this.modalElement
    );
  });
};
fs = /* @__PURE__ */ new WeakSet();
Rn = function(s) {
  if (s)
    return ds(this, Ns, Pi).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: s })
    });
};
Xo.DEFAULT = {
  ...Be.DEFAULT,
  loadTimeout: 1e4,
  destroyOnHide: !0
};
let Es = Xo;
Es.register();
class Le extends ft {
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
      e = Be.ensure(n, t);
    } else
      e = Es.ensure(this.container, t);
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
Le.NAME = "ModalTrigger";
Le.toggle = {
  name: "modal",
  skip: "[disabled],.disabled,.open-in-parent",
  convertHref: !0,
  onGet(s) {
    return Le.get(s);
  },
  onCreate(s, t, e) {
    return new Le(s, e);
  }
};
Le.register();
const vh = {
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
let qt = class extends Q {
  constructor(t) {
    super(t), this._input = Y(), this._file = Y(), this._id = `file-selector-input-${ct()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: n } = this.state;
      this.cancelRenameFile(), !(!e || !n) && this.renameFile(e, n);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const n = e.target;
      n.files && (this.selectFiles(n.files), this.setState({ inputKey: ct() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const n = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      n.length && (this.selectFiles(n), this.setState({ inputKey: ct() }));
    }, this._handleRenameChange = (e) => {
      this.setState({
        newName: e.target.value
      });
    }, this._handleClick = (e) => {
      if (this.props.disabled)
        return;
      const i = f(e.target).closest("[data-remove-file],[data-rename-file]");
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
      size: Mt(this.size, 1),
      maxFileSize: Mt(typeof t == "string" ? is(t) : t, 1),
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
      size: Mt(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: n, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? is(e) : e;
    return t.size <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Mt(t.size, 1)
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: n, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? is(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Mt(t.size, 1),
      totalSize: Mt(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: n, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((n == null ? void 0 : n.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Mt(t.size, 1),
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
      const e = f(this._file.current).closest(".file-selector").find(".file-selector-rename-input")[0];
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
        size: Mt(e.size, 1)
      })), !await Es.confirm(o))
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
    n.files = e, t && f(n).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = U(t.message, { ...this.info, ...e })), Es.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? U(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ g("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: n, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = L({
      component: "label",
      attrs: {
        for: n ? void 0 : this._id
      },
      disabled: n,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ g("div", { className: "file-selector-tip", children: /* @__PURE__ */ g(D, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ g(G, { ...o, ...c, className: T(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ g("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ g(G, { rounded: "full", size: "sm", ...o }),
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
    return e = L({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: Mt(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ g(He, { ...e }, t.id);
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
      e = L({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ g(G, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ g(G, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ g(He, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: n } = this.state;
    return /* @__PURE__ */ g("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === n ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: n = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": us(n),
      "--file-selector-grid-height": us(i),
      "--file-selector-grid-gap": us(r)
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
    const r = typeof n == "string" ? is(n) : n;
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
qt.defaultProps = {
  mode: "button",
  maxFileSize: "100MB",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
qt.i18n = vh;
qt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let Ii = class extends qt {
};
Ii.defaultProps = {
  ...qt.defaultProps,
  mode: "grid",
  accept: qt.imageAccepts
};
const bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: qt,
  ImageSelector: Ii
}, Symbol.toStringTag, { value: "Module" }));
class Ri extends B {
}
Ri.NAME = "FileSelector";
Ri.Component = qt;
Ri.replace = !0;
class Di extends B {
}
Di.NAME = "ImageSelector";
Di.Component = Ii;
Di.replace = !0;
rt(bh);
const Li = class Qo extends Ze {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = L(n, r)), /* @__PURE__ */ gt(Qo, { ...r });
  }
};
Li.NAME = "nav";
Li.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let ta = Li;
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: ta
}, Symbol.toStringTag, { value: "Module" }));
class ea extends B {
}
ea.NAME = "Nav";
ea.Component = ta;
rt(wh);
function Ve(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function sa({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Ve(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : U(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : U(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ g(G, { type: e, ...a });
}
function na({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Ve(i, e);
  return n = typeof n == "function" ? n(a) : U(n, a), /* @__PURE__ */ g(Q, { ...o, children: [
    r,
    n
  ] });
}
function Ch({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ g(G, { type: t, ...o })), l = (u, h) => {
    const p = [];
    for (let d = u; d <= h; d++) {
      o.text = d, delete o.icon, o.disabled = !1;
      const m = Ve(n, d);
      i && (o.url = typeof i == "function" ? i(m) : U(i, m)), p.push(/* @__PURE__ */ g(G, { type: t, ...o }));
    }
    return p;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let Sh = class extends W {
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
      arrowStyle: d,
      onlyInner: m,
      footer: _,
      footerClass: v
    } = t;
    let y = /* @__PURE__ */ g(D, { content: r }, "content");
    (p || i) && (y = /* @__PURE__ */ g("div", { className: p, children: y }, "content"));
    let b = /* @__PURE__ */ g(D, { content: _ }, "footer");
    (v || i) && (b = /* @__PURE__ */ g("div", { className: v, children: b }, "footer"));
    const C = [], w = l ? /* @__PURE__ */ g("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return i ? C.push(/* @__PURE__ */ g("div", { className: u, children: [
      i ? /* @__PURE__ */ g(D, { className: h, content: i }) : null,
      w
    ] }, "heading")) : C.push(w), C.push(y, b), c && C.push(/* @__PURE__ */ g("div", { className: typeof c == "string" ? c : "arrow", style: d }, "arrow")), m ? C : /* @__PURE__ */ g("div", { id: e, className: T("popover", a, { popup: n, "has-heading": i }), style: o, children: C });
  }
};
class zi extends B {
}
zi.NAME = "PopoverPanel";
zi.Component = Sh;
const wr = "show", Cr = "in", Ee = class ia extends ft {
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
      const o = f(i), { namespace: a } = this;
      if (t) {
        const l = () => {
          let c = o.dataset();
          const u = o.attr(`zui-toggle-${this.constructor.ZUI}`);
          u && (c = f.extend(c, ye(u))), this.setOptions(c);
        };
        t === "hover" ? o.on(`pointerenter${a}`, (c) => {
          o.is("[disabled],.disabled") || (l(), this.show({ delay: !0, event: c }));
        }).on(`pointerleave${a} pointercancel${a}`, () => {
          this.delayHide();
        }) : o.on(`${t}${a}`, (c) => {
          o.is("[disabled],.disabled") || (this.shown || l(), this.toggle({ event: c, delay: !0 }), c.preventDefault());
        });
      }
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), typeof t == "string" && (t === "$next" ? t = f(this._triggerElement).next() : t.startsWith("$target:") && (t = f(this._triggerElement).closest(t.slice(8)))), f(t)[0]) : this._createTarget();
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
    const o = f(r), { animation: a, onShow: l, onShown: c, trigger: u, elementShowClass: h } = this.options, { SHOWN_POPOVERS: p } = this.constructor;
    o.addClass(wr), a && o.addClass(a === !0 ? "fade" : a), this._zIndex = ia.Z_INDEX++, this._shown = !0, this.render(), p.set(this.gid, this), l == null || l.call(this), this.emit("show"), i && p.forEach((m) => {
      m !== this && m.hide();
    });
    const { namespace: d } = this;
    u === "hover" && (this._clearDelayHide(), o.off(d).on(`pointerenter${d}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${d}`, () => {
      this.delayHide();
    })), !this._virtual && h && f(this._triggerElement).addClass(h), this._resetTimer(() => {
      o.addClass(Cr), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: n, onHide: i, onHidden: r, trigger: o, hideNewOnHide: a, elementShowClass: l } = this.options, c = f(this._targetElement), { SHOWN_POPOVERS: u } = this.constructor;
    this._shown = !1, u.delete(this.gid), i == null || i.call(this), this.emit("hide"), c.removeClass(Cr), o === "hover" && (this._clearDelayHide(), c.off(this.namespace)), !this._virtual && l && f(this._triggerElement).removeClass(l).removeAttr("data-pop-placement"), a && u.forEach((h) => {
      h !== this && h.zIndex > this.zIndex && h.hide();
    }), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), c.removeClass(wr), (e || t) && this._resetTimer(() => {
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
    n || (this._layoutWatcher = Oo(t, e, () => {
      const { animation: i, name: r = "popover", minWidth: o, minHeight: a } = this.options;
      if (!this._virtual) {
        const l = {}, { width: c, height: u } = this.options;
        c && (l.width = typeof c == "function" ? c() : c === "100%" ? f(t).outerWidth() : c), u && (l.height = typeof u == "function" ? u() : u), Object.keys(l).length && f(e).css(l);
      }
      Ni(...this._getLayoutOptions()).then(({ x: l, y: c, middlewareData: u, placement: h, strategy: p }) => {
        if (t instanceof HTMLElement && le(t)) {
          this.hide(!0);
          return;
        }
        const d = {
          position: p,
          left: l,
          top: c,
          minWidth: o,
          minHeight: a
        }, m = f(e).css(d), _ = h.split("-")[0], v = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[_], y = u.arrow;
        y && m.attr("data-pop-placement", _).find(".arrow").css({
          left: y.x,
          top: y.y
        }).attr("class", `arrow ${r}-arrow arrow-${v}`), i === !0 && m.attr("class", `${m.attr("class").split(" ").filter((b) => b !== "fade" && !b.startsWith("fade-from")).join(" ")} fade-from-${v}`), this._virtual || f(this._triggerElement).attr("data-pop-placement", _);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = f(e);
    if (i.z("popover", this.gid).toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new zi(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
  }
  handleClickOutside(t) {
    if (this.options.mask) {
      const e = this._triggerElement;
      e instanceof HTMLElement && f(t.target).closest(e).length || this.hide();
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
        i ? Ti() : null,
        o ? ki(typeof o == "object" ? o : void 0) : null,
        a || h ? xi(p()) : null,
        l ? lh({ element: u }) : null,
        r ? Fo({
          apply({ availableWidth: d, availableHeight: m, placement: _ }) {
            f(e).css({ maxHeight: m - (["top", "bottom"].includes(_.split("-")[0]) ? h : 0) - 2, maxWidth: d - 2 });
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
      arrow: h,
      footer: p,
      footerClass: d = `${t}-footer`
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
      onlyInner: !0,
      footer: p,
      footerClass: d
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
};
Ee.NAME = "Popover";
Ee.Z_INDEX = 1700;
Ee.MULTI_INSTANCE = !0;
Ee.DEFAULT = {
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
  elementShowClass: "with-popover-show",
  hideNewOnHide: !0
};
Ee.SHOWN_POPOVERS = /* @__PURE__ */ new Map();
let kt = Ee;
kt.toggle = {
  trigger: ["click", "hover"],
  convertHref: { selector: "target" },
  check(s, t) {
    const e = f(s);
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
kt.register();
f(() => {
  f(document).on(`click.${kt.NAMESPACE}`, (s) => {
    const { SHOWN_POPOVERS: t } = kt;
    if (!t.size)
      return;
    const e = f(s.target), n = e.closest("[z-popover]"), i = n.length ? n.z("popover") : 0, r = i ? t.get(i) : null;
    if (r) {
      const a = r.options.name ?? r.constructor.ZUI;
      if (e.closest(`[data-dismiss="popover"],[data-dismiss="${a}"]`).length) {
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
Object.assign(window, { Popover: kt });
class ee extends kt {
  handleClickTarget(t) {
    const e = f(t.target), { notHideOnClick: n } = this.options;
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
      content: gt(Oi, this._getMenuOptions())
    } : t;
  }
}
ee.NAME = "Dropdown";
ee.DEFAULT = {
  ...kt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0,
  notHideOnClick: ".not-hide-menu,.form-control,input,label,.nested-toggle-icon"
};
ee.toggle = {
  ...kt.toggle,
  getOptions(s, t, e) {
    return t = kt.toggle.getOptions.call(this, s, t, e), !t.target && !t.items && !t.menu && (t.target = f(s).next(".dropdown-menu")), t;
  }
};
ee.register();
class nn extends G {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = ee.get(this.triggerElement), a = {
      items: n,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...f(this.triggerElement).dataset(),
      ...t
    };
    o ? o.setOptions(a) : new ee(this.triggerElement, a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = ee.get(this.triggerElement)) == null || t.destroy();
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
nn.defaultProps = {
  caret: !0
};
Object.assign(wt.ItemComponents, { dropdown: nn });
Object.assign(Ct.ItemComponents, { dropdown: nn });
class Oi extends mt {
  constructor() {
    super(...arguments), this._handleSearchFocus = () => {
      this._searchFocused = !0;
    }, this._handleSearchBlur = () => {
      this._searchFocused = !1;
    };
  }
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  layout() {
    var a;
    if (this.props.tree || this.isRoot)
      return;
    const t = (a = this.element) == null ? void 0 : a.parentElement, e = f(t);
    t && this._searchFocused && this._position && e.css(this._position);
    const r = e.parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    if (!t || !r)
      return;
    let { maxHeight: o } = this.props;
    Ni(r, t, {
      placement: this.props.placement,
      middleware: [Ti(), ki(), xi(1), Fo({
        apply({ availableWidth: l, availableHeight: c }) {
          if (o) {
            const [u, h] = hi(o);
            o = Math.min(h === "%" ? u * window.innerHeight : u, c - 2);
          } else
            o = c;
          e.css({ maxHeight: o, maxWidth: l - 2 });
        }
      })]
    }).then(({ x: l, y: c }) => {
      e.css({
        left: l,
        top: c
      }), this._position = { left: l, top: c, width: t.offsetWidth, height: t.offsetHeight };
    });
  }
  _getClassName(t) {
    return ["dropdown-menu scrollbar-hover scrollbar-thin", super._getClassName(t)];
  }
  _afterRender(t) {
    super._afterRender(t), this.layout();
  }
  _getNestedProps(t, e, n, i) {
    return L(this.isHoverTrigger ? {
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
    const n = f(t.target).closest(".dropdown-menu[z-key]");
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
  _getSearchBoxProps(t) {
    return {
      ...super._getSearchBoxProps(t),
      onFocus: this._handleSearchFocus,
      onBlur: this._handleSearchBlur
    };
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
}
Oi.defaultProps = {
  ...mt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1,
  nestedSearch: !1
};
Oi.inheritNestedProps = [...mt.inheritNestedProps, "container", "tree"];
function xh({
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
  return o.text = typeof a == "function" ? a(t) : U(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(nn, { dropdown: i, ...o });
}
function ra({
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
    var v;
    h = Number((v = _.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, d = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = Ve(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = u.url = typeof l == "function" ? l(v) : U(l, v));
  }, m = Ve(i, t || 0);
  return u.url = typeof l == "function" ? l(m) : U(l, m), /* @__PURE__ */ g("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ g(G, { type: n, ...u, onClick: d })
  ] });
}
let es = class extends Ct {
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
    return r === "info" ? f.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && f.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
es.NAME = "pager";
es.ItemComponents = {
  ...Ct.ItemComponents,
  info: na,
  link: sa,
  nav: Ch,
  "size-menu": xh,
  goto: ra
};
es.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class oa extends B {
}
oa.NAME = "Pager";
oa.Component = es;
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: es,
  PagerGoto: ra,
  PagerInfoItem: na,
  PagerLink: sa
}, Symbol.toStringTag, { value: "Module" }));
rt(kh);
class Fi extends B {
}
Fi.NAME = "Pick";
Fi.Component = _t;
Fi.replace = !0;
class aa extends W {
  constructor(t) {
    super(t), this._searchInput = Y(), this._measure = Y(), this._changeTimer = 0, this._handleChange = (e) => {
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
    return f(`#pick-pop-${this.props.id}`);
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
      const e = lo(t, {
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
      e && (this._hotkeysScope = `PickerSearch_${ct()}`, f(this._searchInput.current).hotkeys(e, {
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
        const i = f(n).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && f(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
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
class Th extends _i {
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
      return /* @__PURE__ */ g("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ g("span", { className: "text", children: /* @__PURE__ */ g(D, { content: e }) }),
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
      aa,
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
    return a && (!p || o === void 0) ? (typeof a == "function" ? h = a.call(this, l, e) : typeof a == "string" && (h = U(a, { value: i, values: l, count: l.length })), h = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: h }, "selections")) : p ? h = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "selections") : h = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
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
        f(`#${o}`).val(n);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ g("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ g("option", { value: u, children: u }, u)) });
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
      this._skipTriggerChange !== n.value && a.trigger("change", Eo), this._skipTriggerChange = !1;
    }
  }
}
class Nh extends _i {
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
    return T(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: n } = t;
    return /* @__PURE__ */ g(
      aa,
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
    const { children: e, state: { selections: n = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: u, display: h } = t, [p] = n, d = r && a;
    let m;
    if (d)
      m = this._renderSearch(t);
    else if (p || o === void 0 && h) {
      const { text: y } = p || { text: "", value: "" };
      typeof h == "function" ? m = h.call(this, i, n) : typeof h == "string" ? m = U(h, p) : m = /* @__PURE__ */ g(D, { content: y }), m = /* @__PURE__ */ g("span", { className: "picker-single-selection", title: typeof y == "string" ? y : void 0, children: m }, "main");
    } else
      m = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "main");
    const _ = u && !d ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null;
    return [
      m,
      e,
      _,
      d ? null : /* @__PURE__ */ g("span", { className: "caret" }, "caret")
    ];
  }
}
class ss extends dt {
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
ss.NAME = "tree";
ss.defaultProps = {
  ...dt.defaultProps,
  indent: 12
};
ss.defaultItemProps = {
  ...dt.defaultItemProps,
  innerComponent: "div"
};
ss.inheritNestedProps = [...dt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class rn extends mt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return ss.getTreeItem(t, super._getItem(t, e, n));
  }
}
rn.NAME = "tree";
rn.inheritNestedProps = [...mt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
rn.defaultItemProps = {
  ...mt.defaultProps,
  innerComponent: "div"
};
function la(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && la(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class Eh extends Ho {
  constructor() {
    super(...arguments), this._menu = Y(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((u, h, p) => {
        const d = this._getItem(h, p);
        return d && (d.selected ? o = !0 : r = !1, u.push(d)), u;
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
          const h = [...la(t.items).values()].filter((p) => !p.items && !this._disabledSet.has(p.value)).map((p) => p.value);
          f(i).closest(".item").children(".item-inner.selected").length ? c(h) : a(h);
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
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), f(this.element).on("activeNext.zui.Picker", () => {
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
        r && f(this.element).find(`.item[z-key-path="${r._keyPath}"]`).trigger("click");
      }
    }).on("hidePop.zui.Picker", () => {
      this.props.togglePop(!1);
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), f(this.element).off(".zui.Picker");
  }
  _getClass(t) {
    return T(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c } = t, { items: u, search: h } = i;
    return L({
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
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ g(rn, { ...n }) : /* @__PURE__ */ g(mt, { ...n });
  }
}
function Xt(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Xt(n.items, e), e.set(n.value === void 0 ? "" : String(n.value), n), e), t || /* @__PURE__ */ new Map());
}
let Hi = class extends _t {
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
        const c = Xt(e);
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
    const n = [...Xt(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(n);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = Xt(t), n = new Set(this.valueList);
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
      if (await bs(n || 500), this._abort !== t)
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
        const r = i.items || n.items, o = /* @__PURE__ */ new Map();
        Array.isArray(n.items) && n.items !== i.items && Xt(n.items, o), Xt(r, o), i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
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
      noMatchHint: e.loading ? O.getLang("loadingHint") : t.searchEmptyHint ?? O.getLang("searchEmptyHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Th : Nh);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: O.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: O.getLang("cancelSelect")
    }]), Ct.render(t, [], { size: "sm", getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t, e) {
    let n;
    return typeof t == "string" && t.length ? n = t.split(e ?? this.props.valueSplitter ?? ",") : Array.isArray(t) ? n = t : n = [t], f.unique(n).reduce((i, r) => (r == null || (r = typeof r != "string" ? String(r) : r, this.isEmptyValue(r) || i.push(r)), i), []);
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
        const a = Xt(Array.isArray(r) ? r : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    return super.setValue(i, e);
  }
};
Hi.defaultProps = {
  ..._t.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
Hi.Pop = Eh;
class Wi extends B {
}
Wi.NAME = "Picker";
Wi.Component = Hi;
Wi.register();
O.addLang({
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
class ji extends B {
}
ji.NAME = "SearchBox";
ji.Component = Zs;
ji.register();
rt(wc);
class ca extends B {
}
ca.NAME = "Toolbar";
ca.Component = Ct;
rt(mc);
class Bi extends kt {
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
Bi.NAME = "Tooltip";
Bi.DEFAULT = {
  ...kt.DEFAULT,
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
Bi.register();
var Wt, jt;
class Sr extends W {
  constructor(e) {
    super(e);
    ot(this, Wt, void 0);
    ot(this, jt, void 0);
    pt(this, Wt, 0), pt(this, jt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (it(this, Wt) && cancelAnimationFrame(it(this, Wt)), pt(this, Wt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), pt(this, Wt, 0);
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
    e && (pt(this, jt, typeof e == "string" ? document : e.current), it(this, jt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), it(this, jt) && it(this, jt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: d } = this.state, m = {
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
          "is-dragging": d
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
Wt = new WeakMap(), jt = new WeakMap();
const $s = /* @__PURE__ */ new Map(), As = [];
function ha(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && $s.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  $s.set(e, s), t != null && t.buildIn && !As.includes(e) && As.push(e);
}
function nt(s, t) {
  ha(s, t);
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
function ua(s) {
  return $s.delete(s);
}
function $h(s) {
  if (typeof s == "string") {
    const t = $s.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function da(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = $h(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && da(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function Ah(s = [], t = !0) {
  if (t && As.length && s.unshift(...As), !(s != null && s.length))
    return [];
  const e = da([], s, /* @__PURE__ */ new Set()), n = [], i = e.reduce((r, o, a) => {
    var l;
    return r.set(o.name, a * 1e3), (l = o.requireAfter) != null && l.length && n.push(o), r;
  }, /* @__PURE__ */ new Map());
  return n.length && (n.forEach((r) => {
    const o = r.requireAfter.reduce((a, l) => (i.has(l) && a.push(i.get(l)), a), []);
    o.length && i.set(r.name, Math.max(...o) + 1);
  }), e.sort((r, o) => i.get(r.name) - i.get(o.name))), e;
}
function fa() {
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
function Mh(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function xr(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function _n(s, t = !1, e = 0) {
  if (!s.list.length)
    return;
  if (t && s.widthSetting && (s.widthSetting = Math.min(s.widthSetting, s.width)), e && (!s.widthSetting || s.widthSetting > e) && s.width > e && (s.widthSetting = e), s.widthSetting && s.width !== s.widthSetting) {
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
function kr(s) {
  return s ? s === "left" ? "left" : "right" : "center";
}
function Ph(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (w) => (typeof w == "function" && (w = w.call(s)), w = xr(w, 0), w < 1 && (w = Math.round(w * n)), w), u = {
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
  }, d = {
    left: h,
    center: u,
    right: p
  }, m = [], _ = {};
  let v = !1;
  const y = [], b = {};
  if (e.forEach((w) => {
    const { colTypes: x, onAddCol: N } = w;
    x && Object.entries(x).forEach(([A, E]) => {
      b[A] || (b[A] = []), b[A].push(E);
    }), N && y.push(N);
  }), t.cols.forEach((w, x) => {
    if (w.hidden)
      return;
    const { type: N = "", name: A } = w, E = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...w,
      type: N
    }, $ = {
      name: A,
      type: N,
      setting: E,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: x,
      side: kr(E.fixed),
      sideIndex: 0,
      order: E.order,
      border: E.border
    }, k = b[N];
    k && k.forEach((V) => {
      const q = typeof V == "function" ? V.call(s, E) : V;
      q && Object.assign(E, q, w);
    });
    const { flex: M, minWidth: I = r, maxWidth: z = o } = E, R = xr(E.width || i, i);
    $.flex = M === !0 ? 1 : typeof M == "number" ? M : 0, $.width = Mh(R < 1 ? Math.round(R * n) : R, I, z), $.side = kr(E.fixed), y.forEach((V) => V.call(s, $)), m.push($), _[$.name] = $;
    const H = d[$.side];
    H.list.push($), H.totalWidth += $.width, H.width = H.totalWidth, $.flex && H.flexList.push($), typeof $.order == "number" && (v = !0);
  }), v) {
    const w = (x, N) => (x.order ?? x.index) - (N.order ?? N.index);
    m.sort(w), h.list.sort(w), u.list.sort(w), p.list.sort(w);
  }
  _n(p, !0);
  const C = n - p.width - Math.max(40, r);
  return _n(h, !0, C), u.widthSetting = n - h.width - p.width, _n(u), {
    list: m,
    map: _,
    ...d
  };
}
function Ih(s) {
  var q;
  const { col: t, className: e, height: n, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: p, ...d } = s, m = {
    left: h ?? t.left,
    top: p ?? i.top,
    width: u ?? t.realWidth,
    height: n,
    ...a
  }, { align: _, cellStyle: v, cellClass: y, className: b } = t.setting, C = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...v,
    ...o
  }, { name: w, border: x } = t, N = ["dtable-cell", c, e, b, {
    "has-border-left": x === !0 || x === "left",
    "has-border-right": x === !0 || x === "right"
  }], A = ["dtable-cell-content", y], E = (q = i.data) == null ? void 0 : q[w], $ = [l ?? E ?? ""], k = r ? r($, { row: i, col: t, value: E }, s, gt) : $, M = [], I = [], z = {}, R = {};
  let H = "div";
  k == null || k.forEach((P) => {
    if (typeof P == "object" && P && !bt(P) && ("html" in P || "className" in P || "style" in P || "attrs" in P || "children" in P || "tagName" in P)) {
      const yt = P.outer ? M : I;
      P.html ? yt.push(/* @__PURE__ */ g("div", { className: T("dtable-cell-html", P.className), style: P.style, dangerouslySetInnerHTML: { __html: P.html }, ...P.attrs ?? {} })) : (P.style && Object.assign(P.outer ? m : C, P.style), P.className && (P.outer ? N : A).push(P.className), P.children && yt.push(P.children), P.attrs && Object.assign(P.outer ? z : R, P.attrs)), P.tagName && !P.outer && (H = P.tagName);
    } else
      I.push(P);
  });
  const V = H;
  return /* @__PURE__ */ g(
    "div",
    {
      className: T(N),
      style: m,
      "data-col": w,
      "data-row": i.id,
      "data-type": t.type || null,
      ...d,
      ...z,
      children: [
        I.length > 0 && /* @__PURE__ */ g(V, { className: T(A), style: C, ...R, children: I }),
        M
      ]
    }
  );
}
function yn({
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
  CellComponent: u = Ih,
  cellClass: h,
  onRenderCell: p
}) {
  var v;
  const d = Array.isArray(s) ? s : [s], m = ((v = d[0]) == null ? void 0 : v.top) ?? 0, _ = d.length;
  return /* @__PURE__ */ g(
    "div",
    {
      className: T("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ g("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: d.reduce((y, b, C) => {
        const w = t.length;
        return t.forEach((x, N) => {
          y.push(
            /* @__PURE__ */ g(
              u,
              {
                className: T(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  N ? "" : "is-first-in-row",
                  N === w - 1 ? "is-last-in-row" : "",
                  C ? "" : "is-first-row",
                  C === _ - 1 ? "is-last-row" : "",
                  h
                ),
                col: x,
                row: b,
                top: b.top - m,
                height: e,
                onRenderCell: p
              },
              `${b.index}:${x.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function pa({
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
  children: d
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ g(
    yn,
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
    yn,
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
  let v = null;
  return o.list.length && (v = /* @__PURE__ */ g(
    yn,
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
        v,
        d
      ]
    }
  );
}
var ga = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, K = (s, t, e) => (ga(s, t, "read from private field"), e ? e.call(s) : t.get(s)), J = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, at = (s, t, e) => (ga(s, t, "access private method"), e), Ht, Pe, Ie, Dn, ma, Ln, _a, zn, ya, On, va, ps, Fn, on, Ms, Hn, Wn, jn, Bn, Re, gs, Ps, Vi, Ui, ba, Vn, wa;
let Ki = class extends W {
  constructor(t) {
    super(t), J(this, Dn), J(this, Ln), J(this, zn), J(this, On), J(this, ps), J(this, Re), J(this, Ps), J(this, Ui), J(this, Vn), this.ref = Y(), this._rafId = 0, this._needRender = !1, this._plugins = [], this._lastUsedPlugins = /* @__PURE__ */ new Map(), this._events = /* @__PURE__ */ new Map(), this._data = {}, this._i18nMaps = [], this._hover = { in: !1 }, this.updateLayout = () => {
      this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), this._rafId = 0;
      });
    }, J(this, Ht, (e, n) => {
      n = n || e.type;
      const i = this._events.get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), J(this, Pe, (e) => {
      K(this, Ht).call(this, e, `window_${e.type}`);
    }), J(this, Ie, (e) => {
      K(this, Ht).call(this, e, `document_${e.type}`);
    }), J(this, on, (e, n, i, r) => {
      const { row: o, col: a } = n;
      n.value = this.getCellValue(o, a), e[0] = n.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, n, i, r)), this._plugins.forEach((c) => {
        c[l] && (e = c[l].call(this, e, n, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, n, i, r)), e;
    }), J(this, Ms, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), J(this, Hn, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), this._plugins.forEach((u) => {
          var h;
          (h = u.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const u = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
            return;
          for (const h of this._plugins)
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
              return;
        }
      }
    }), J(this, Wn, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), J(this, jn, (e) => {
      const n = f(e.target).closest(".dtable-cell");
      if (!n.length)
        return at(this, Re, gs).call(this, !1);
      at(this, Re, gs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), J(this, Bn, () => {
      at(this, Re, gs).call(this, !1);
    }), this._id = t.id ?? `dtable-${ct()}`, this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, this._allPlugins = Object.freeze(Ah(t.plugins)), this._allPlugins.forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(this._data, i.call(this)), r && Object.assign(this.state, r.call(this));
    }), at(this, Ps, Vi).call(this), this._plugins.forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = this._layout) == null ? void 0 : t.options) || this._options || fa();
  }
  get plugins() {
    return this._plugins;
  }
  get layout() {
    return this._layout;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return this._hover;
  }
  componentWillReceiveProps() {
    this._options = void 0;
  }
  componentDidMount() {
    this._needRender ? this.forceUpdate() : at(this, ps, Fn).call(this), this.on("click", K(this, Hn)), this.on("keydown", K(this, Wn));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", K(this, jn)), this.on("mouseleave", K(this, Bn)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const n = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        this._rob = r;
        const { parent: o } = this;
        n.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : f(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      n.includes("window") && this.on("window_resize", this.updateLayout);
    }
    this._checkPluginsState();
  }
  componentDidUpdate() {
    at(this, ps, Fn).call(this), this._checkPluginsState(), this._plugins.forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = this._rob) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of this._events.keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), K(this, Pe)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), K(this, Ie)) : t.removeEventListener(n, K(this, Ht));
    this._plugins.forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), this._allPlugins.forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), this._data = {}, this._events.clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  resetState(t, e) {
    this._options = void 0, this._layout = void 0, t = t || this.props;
    const n = {};
    this._plugins.forEach((i) => {
      const { resetState: r, state: o } = i;
      r && (typeof r == "function" ? Object.assign(n, r.call(this, t)) : o && Object.assign(n, o.call(this)));
    }), Object.keys(n).length && this.setState(n);
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = this._events.get(t);
    i ? i.push(e) : (this._events.set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), K(this, Pe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), K(this, Ie)) : (r = this.element) == null || r.addEventListener(t, K(this, Ht)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = this._events.get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (this._events.delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), K(this, Pe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), K(this, Ie)) : (o = this.element) == null || o.removeEventListener(t, K(this, Ht)));
  }
  emitCustomEvent(t, e) {
    K(this, Ht).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
    const d = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (d.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (d.scrollTop = p)), Object.keys(d).length ? (this.setState(d, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, d), e == null || e.call(this, !0);
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
    if (!this._options)
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      this._layout = void 0;
    else if (n === "options") {
      if (this._options = void 0, !this._layout)
        return;
      this._layout = void 0;
    }
    this.setState(i || ((r) => ({ renderCount: r.renderCount + 1 })), e);
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
    return O(this._i18nMaps, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  _checkPluginsState() {
    const t = new Set(this._lastUsedPlugins.keys());
    this._plugins.forEach((e) => {
      var i;
      if (t.has(e.name)) {
        t.delete(e.name);
        return;
      }
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([r, o]) => {
        o && this.on(r, o);
      })), (i = e.onMounted) == null || i.call(this), this._lastUsedPlugins.set(e.name, e);
    }), t.size && t.forEach((e) => {
      var i;
      const n = this._lastUsedPlugins.get(e);
      (i = n == null ? void 0 : n.onUnmounted) == null || i.call(this), this._lastUsedPlugins.delete(e);
    });
  }
  render() {
    let t = at(this, Vn, wa).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: u, style: h = {} } = this.options, p = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], d = [];
    if (t) {
      const m = !t.rows.length;
      if (c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      this._plugins.forEach((_) => {
        var y;
        const v = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        v && (t = v);
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
      ), t.children && d.push(...t.children), m && u ? (delete h.height, d.push(
        /* @__PURE__ */ g("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ g(D, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (d.push(
        at(this, Dn, ma).call(this, t),
        at(this, Ln, _a).call(this, t),
        at(this, zn, ya).call(this, t)
      ), t.scrollable && d.push(at(this, On, va).call(this, t))), this._plugins.forEach((_) => {
        var y;
        const v = (y = _.onRender) == null ? void 0 : y.call(this, t);
        v && (v.style && Object.assign(h, v.style), v.className && p.push(v.className), v.children && d.push(v.children));
      });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        id: this._id,
        className: T(p),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Ht = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakMap();
Ie = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakSet();
ma = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      pa,
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
        onRenderCell: K(this, on),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    bo,
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
_a = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ g(
    pa,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: K(this, on),
      children: l
    },
    "body"
  );
};
zn = /* @__PURE__ */ new WeakSet();
ya = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    bo,
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
On = /* @__PURE__ */ new WeakSet();
va = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = s, { scrollbarSize: h = 12, horzScrollbarPos: p, vertScrollbarPos: d } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      Sr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: K(this, Ms),
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
      Sr,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: K(this, Ms),
        right: d === "outside" ? -h : 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
ps = /* @__PURE__ */ new WeakSet();
Fn = function() {
  var s;
  this._needRender = !1, this._plugins.forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (s = this.options.afterRender) == null || s.call(this);
};
on = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
Hn = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
jn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakSet();
gs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = f(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = this._hover;
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), this._hover = i;
};
Ps = /* @__PURE__ */ new WeakSet();
Vi = function() {
  if (this._options)
    return !1;
  const t = { ...fa(), ...this._allPlugins.reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return this._options = t, this._plugins = this._allPlugins.reduce((e, n) => {
    const { options: i } = n;
    let r = t;
    return i && (r = Object.assign({ ...r }, typeof i == "function" ? i.call(this, t) : i)), r !== t && Object.assign(t, r), e.push(n), e;
  }, []).filter((e) => {
    const { when: n } = e;
    return !n || n.call(this, t);
  }), this._i18nMaps = [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean), !0;
};
Ui = /* @__PURE__ */ new WeakSet();
ba = function() {
  var E, $;
  const { plugins: s } = this;
  let t = this._options;
  const e = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((k) => {
    var I;
    const M = (I = k.beforeLayout) == null ? void 0 : I.call(this, t);
    M && (t = { ...t, ...M }), Object.assign(e, k.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: k } = this;
    if (k)
      i = k.clientWidth;
    else {
      this._needRender = !0;
      return;
    }
  }
  const r = Ph(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], u = (k, M, I) => {
    var R, H;
    const z = { data: I ?? { [a]: k }, id: k, index: c.length, top: 0 };
    if (I || (z.lazy = !0), c.push(z), ((R = t.onAddRow) == null ? void 0 : R.call(this, z, M)) !== !1) {
      for (const V of s)
        if (((H = V.onAddRow) == null ? void 0 : H.call(this, z, M)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let k = 0; k < o; k++)
      u(`${k}`, k);
  else
    Array.isArray(o) && o.forEach((k, M) => {
      typeof k == "object" ? u(`${k[a] ?? ""}`, M, k) : u(`${k ?? ""}`, M);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const k = t.onAddRows.call(this, h, r);
    k && (h = k);
  }
  for (const k of s) {
    const M = (E = k.onAddRows) == null ? void 0 : E.call(this, h, r);
    M && (h = M);
  }
  h.forEach((k, M) => {
    p[k.id] = k, k.index = M, k.top = k.index * l;
  });
  const { header: d, footer: m } = t, _ = d ? t.headerHeight || l : 0, v = m ? t.footerHeight || l : 0;
  let y = t.height, b = 0;
  const C = h.length * l, w = _ + v + C;
  if (typeof y == "function" && (y = y.call(this, w)), y === "auto")
    b = w;
  else if (typeof y == "object")
    b = Math.min(y.max, Math.max(y.min, w));
  else if (y === "100%") {
    const { parent: k } = this;
    if (k)
      b = k.clientHeight;
    else {
      b = 0, this._needRender = !0;
      return;
    }
  } else
    b = y;
  const x = b - _ - v, N = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: x,
    rowsHeightTotal: C,
    header: d,
    footer: m,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: r
  }, A = ($ = t.onLayout) == null ? void 0 : $.call(this, N);
  A && Object.assign(N, A), s.forEach((k) => {
    if (k.onLayout) {
      const M = k.onLayout.call(this, N);
      M && Object.assign(N, M);
    }
  }), this._layout = N;
};
Vn = /* @__PURE__ */ new WeakSet();
wa = function() {
  (at(this, Ps, Vi).call(this) || !this._layout) && at(this, Ui, ba).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), p = [], { rowDataGetter: d } = this.options;
  for (let m = c; m < h; m++) {
    const _ = o[m];
    _.lazy && d && (_.data = d([_.id])[0], _.lazy = !1), p.push(_);
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
Ki.addPlugin = ha;
Ki.removePlugin = ua;
function Ca(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: U(i, t.row.data), ...n, ...r, ...a, children: e });
}
function qi(s, t, e) {
  if (s == null)
    return;
  const n = t.row.data;
  return e = e ?? (n == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : U(s, { ...n, 0: e });
}
function Sa(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? n ?? "" : s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), xt(e, s, n ?? e))) : n ?? e;
}
function xa(s, t) {
  const { link: e } = t.col.setting, n = Ca(e, t, s[0]);
  return n && (s[0] = n), s;
}
function ka(s, t) {
  const { format: e, digits: n } = t.col.setting;
  let i = s[0];
  return typeof n == "number" && !Number.isNaN(Number(i)) && (i = Number(i), n >= 0 && (i = i.toFixed(n))), e && (i = qi(e, t, i)), s[0] = i, s;
}
function Ta(s, t) {
  const { map: e, mapSplitter: n = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = s[0];
    typeof r == "string" && n && (r = r.split(n)), typeof e == "function" ? s[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), s[0] = r.map((o) => e[o] ?? o).join(i ?? n));
  }
  return s;
}
function Na(s, t, e) {
  const n = {};
  return typeof s == "function" ? Object.assign(n, s(e)) : Object.keys(s).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[s[i]];
    r !== void 0 && (n[i] = r);
  }), Object.keys(n).length && t.push({ style: n }), t;
}
function Ea(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = Sa(n, t, s[0], i), s;
}
function Un(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : qi(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const Rh = {
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
        return s[0] = e === "bar" ? /* @__PURE__ */ g(
          Xs,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ g(
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
    if (e && (s = Ea(s, t, e)), s = Ta(s, t), s = ka(s, t), n ? s = Un(s, t) : s = xa(s, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = U(i, t.row.data) : typeof s[0] == "string" && (o = s[0]), s.push({ attrs: { title: o } });
    }
    return r && (s = Na(r, s, t)), s;
  }
}, Dh = nt(Rh, { buildIn: !0 }), Lh = {
  default: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return n === i ? 0 : n == null ? 1 : String(n).localeCompare(String(i));
  },
  date: (s, t, e) => {
    var r, o;
    const n = j(((r = s.data) == null ? void 0 : r[e.name]) ?? 0), i = j(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return n.getTime() - i.getTime();
  },
  number: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(n) - Number.parseFloat(i);
  }
}, zh = {
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
      ...Lh,
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
}, Oh = nt(zh, { buildIn: !0 }), Fh = {
  html: { component: ve }
}, Hh = {
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
        component: ve,
        props: { html: U(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Fh[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((p) => {
        if (p) {
          const { props: d } = p;
          d && f.extend(u, typeof d == "function" ? d.call(this, t) : d), l = p.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ g(h, { ...u }) };
    }), s;
  }
}, Wh = nt(Hh);
function jh(s, t) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const e = this.state.checkedRows, n = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, u) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === u || (u ? e[c] = !0 : delete e[c], n[c] = u);
  };
  if (s === void 0 ? (t === void 0 && (t = !$a.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Bh(s) {
  return this.state.checkedRows[s] ?? !1;
}
function $a() {
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
function Vh() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function Uh(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function Tr(s, t, e = !1, n = void 0) {
  return /* @__PURE__ */ g(Js, { className: "dtable-checkbox", checked: s, disabled: e, label: n });
}
const Nr = 'input[type="checkbox"],.dtable-checkbox', Kh = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Tr
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
    toggleCheckRows: jh,
    isRowChecked: Bh,
    isAllRowChecked: $a,
    getChecks: Vh,
    toggleCheckable: Uh
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Tr(s, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [/* @__PURE__ */ g(D, { className: "dtable-check-info", content: n.call(this, e) })];
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
    const e = t.closest(Nr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = f(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Nr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, qh = nt(Kh), Gh = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new Xe(`DTable:${this.id}`) };
  }
}, Yh = nt(Gh);
var Aa = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Aa || {});
function Is(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = Is.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Is.call(this, t.parent).level + 1 : 0, t;
}
function Jh(s) {
  return s !== void 0 ? Is.call(this, s) : this.data.nestedMap;
}
function Zh(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Ma.call(this)), t) {
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
function Ma() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Pa(s, t = 1, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Pa(s, t, o.children, n + 1)));
  }
  return t;
}
function Ia(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Ia(s, r, e, n);
  }), i;
}
function Ra(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Ra(s, r.parent, e, n, i);
}
const cs = "dtable-nested-toggle", Xh = {
  name: "nested",
  plugins: [Yh],
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
        const o = Ia(this, i, r, n);
        o != null && o.parent && Ra(this, o.parent, r, n, e);
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
    getNestedInfo: Jh,
    toggleRow: Zh,
    isAllCollapsed: Ma,
    getNestedRowInfo: Is
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
    s.forEach((r) => {
      var c, u;
      const o = t.get(r.id) ?? {
        state: "",
        level: 0
      };
      let a = ((c = r.data) == null ? void 0 : c[this.options.nestedParentKey ?? "parent"]) ?? [];
      Array.isArray(a) || (a = [a]);
      let l;
      for (a = [...a]; a.length; ) {
        let h = a.pop();
        if (h === void 0)
          continue;
        if (h = String(h), e.get(h)) {
          l = h;
          break;
        }
      }
      if (o.parent = l === "0" ? void 0 : l, (u = r.data) != null && u[this.options.asParentKey ?? "asParent"] && (o.children = []), t.set(r.id, o), l) {
        let h = t.get(l);
        h || (h = {
          state: "",
          level: 0
        }, t.set(l, h)), h.children || (h.children = []), h.children.push(r.id);
      }
    });
    const n = /* @__PURE__ */ new Map(), i = s.length * 100;
    return s = s.filter((r) => {
      const o = this.getNestedRowInfo(r.id);
      return n.set(r.id, o), o.state !== "hidden";
    }), Pa(n), s.sort((r, o) => {
      const a = n.get(r.id), l = n.get(o.id);
      return ((a == null ? void 0 : a.order) ?? i + r.index) - ((l == null ? void 0 : l.order) ?? i + o.index);
    }), s;
  },
  onRenderCell(s, t) {
    var c;
    const { row: e, col: n } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = n.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const u = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(u) && u > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ g("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: U(a, r) }) : h = /* @__PURE__ */ g(D, { className: "dtable-child-label", content: a, generatorThis: t }), s.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && s.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, n, r)) ?? /* @__PURE__ */ g("a", { className: `${cs} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
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
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ g("a", { className: `${cs} state`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
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
}, Qh = nt(Xh);
function vn(s, { row: t, col: e }) {
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
  if (s[0] = /* @__PURE__ */ g(Gs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, d = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...d, children: [
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
const tu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: vn
    },
    avatarBtn: {
      onRenderCell: vn
    },
    avatarName: {
      onRenderCell: vn
    }
  }
}, eu = nt(tu, { buildIn: !0 }), su = {
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
        s[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: U(h, { ...n, sortType: u }), ...p, children: [
          s[0],
          l
        ] });
      } else
        s.push(l);
    }
    return s;
  }
}, nu = nt(su, { buildIn: !0 }), bn = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, iu = {
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
}, ru = nt(iu);
const ou = {
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
}, au = nt(ou), lu = {
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
      l.forEach((p, d) => {
        const { index: m } = p, _ = `C${m}R${h}`;
        if (n.has(_))
          return;
        const v = t.call(this, { row: c, col: p });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - d), b = Math.min(v.rowSpan || 1, i.length - u);
        if (y <= 1 && b <= 1)
          return;
        let C = 0;
        for (let w = 0; w < y; w++) {
          C += l[d + w].realWidth;
          for (let x = 0; x < b; x++) {
            const N = `C${m + w}R${h + x}`;
            N !== _ && n.add(N);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: b,
          width: C,
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
}, cu = nt(lu), hu = {
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
}, Da = nt(hu);
function uu() {
  var C, w, x, N;
  const { scrollToMouse: s } = this.data;
  if (!s)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: n } = s;
  if (!t || Date.now() - e < n)
    return;
  const i = (w = (C = this.ref.current) == null ? void 0 : C.querySelector(".dtable-body")) == null ? void 0 : w.getBoundingClientRect();
  if (!i)
    return;
  const r = (N = (x = this.ref.current) == null ? void 0 : x.querySelector(".dtable-scroll-center")) == null ? void 0 : N.getBoundingClientRect(), { maxStep: o, detectPadding: a, speed: l, side: c } = s, { x: u, y: h } = t, { top: p, bottom: d } = i, { left: m, right: _ } = r || i;
  let v = 0;
  u < m - a ? v = -Math.max(o, m - a - u) : u > _ - a && (v = Math.max(o, u - (_ - a)));
  let y = 0;
  if (h < p - a ? y = -Math.max(o, p - a - h) : h > d - a && (y = Math.max(o, h - (d - a))), c) {
    const A = new Set((Array.isArray(c) ? c : [c]).reduce((E, $) => ($ === "x" ? E.push("left", "right") : $ === "y" ? E.push("top", "bottom") : E.push($), E), []));
    (!A.has("left") && v < 0 || !A.has("right") && v > 0) && (v = 0), (!A.has("top") && y < 0 || !A.has("bottom") && y > 0) && (y = 0);
  }
  const b = {};
  v !== 0 && (b.scrollLeft = this.layout.scrollLeft + l * v), y !== 0 && (b.scrollTop = this.layout.scrollTop + l * y), this.scroll(b);
}
const du = {
  name: "autoscroll",
  plugins: [Da],
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
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(uu.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, fu = nt(du);
const pu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (s) => !!s.sortable,
  plugins: [Da, fu],
  resetState: !0,
  state() {
    return {
      rowOrders: void 0,
      sortingFrom: void 0,
      sortingPos: void 0,
      sortingTo: void 0,
      sortingSide: void 0
    };
  },
  events: {
    click(s) {
      s.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(s) {
      var a;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!f(s.target).closest(t).length)
        return;
      const i = this.getPointerInfo(s);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, s)) === !1)
        return;
      s.preventDefault();
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
          const c = this.layout.rows.map((d) => d.id), u = [...c], h = o.index, p = a.index;
          if (!(h === p + 1 && l === "after") && !(h === p - 1 && l === "before")) {
            const d = c.splice(h, 1);
            c.splice(p, 0, d[0]), i = {}, r = [], c.forEach((m, _) => {
              i[m] = _, r.push(m);
            }), (u.join() === r.join() || ((n = this.options.onSort) == null ? void 0 : n.call(this, o, a, l, r)) === !1) && (i = void 0, r = void 0);
          }
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && this.ignoreNextClick(), this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: (c) => f.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, i ? { rowOrders: {
            ...c.rowOrders,
            ...i
          } } : null)
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
      const d = p + o, m = r.find((A) => A.top <= d && A.top + a > d);
      if (!m)
        return e.state;
      const _ = e.from, v = m.id !== _.id ? m.id : void 0, y = v ? this.getRowInfo(v) : void 0, b = p, C = d < m.top + a / 2 ? "before" : "after";
      return y && ((N = this.options.canSortTo) == null ? void 0 : N.call(this, _, y, C)) !== !1 ? {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: y,
        sortingSide: C
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
    if (!t)
      return;
    const e = s.length * 100;
    return s = s.sort((n, i) => {
      const r = t[n.id] ?? e + n.index, o = t[i.id] ?? e + i.index;
      return r - o;
    }), s;
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
}, gu = nt(pu), mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Aa,
  avatar: eu,
  cellspan: cu,
  checkable: qh,
  custom: Wh,
  group: ru,
  headerGroup: au,
  nested: Qh,
  renderDatetime: Sa,
  renderDatetimeCell: Ea,
  renderFormat: qi,
  renderFormatCell: ka,
  renderHtmlCell: Un,
  renderLink: Ca,
  renderLinkCell: xa,
  renderMapCell: Ta,
  renderStyleMapCell: Na,
  rich: Dh,
  sort: Oh,
  sortType: nu,
  sortable: gu
}, Symbol.toStringTag, { value: "Module" }));
class ns extends B {
  setOptions(t, e) {
    return t = super.setOptions(t, e), t.parent || (t.parent = this.element), t;
  }
}
ns.NAME = "DTable";
ns.Component = Ki;
ns.definePlugin = nt;
ns.removePlugin = ua;
ns.plugins = mu;
const _u = "nav", wn = '[data-toggle="tab"]', yu = "active";
class Rs extends ft {
  constructor() {
    super(...arguments), this._timer = 0;
  }
  active(t) {
    const e = this.$element, n = e.find(wn);
    let i = t ? f(t).closest(wn) : n.filter(`.${yu}`);
    if (!i.length && (i = e.find(wn).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = f(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), this._timer = 0;
    }, 10));
  }
}
Rs.NAME = "Tabs";
Rs.toggle = {
  name: "tab",
  handler(s, t) {
    const e = f(s), n = e.closest(`.${_u}`);
    n.length && Rs.ensure(n, t).active(e);
  }
};
Rs.register();
export {
  f as $,
  Gr as Ajax,
  To as Avatar,
  wu as BUILD,
  No as BtnGroup,
  Hl as Bus,
  jo as ColorPicker,
  qs as CommonList,
  ft as Component,
  B as ComponentFromReact,
  vs as Computed,
  D as CustomContent,
  bo as CustomRender,
  ns as DTable,
  $i as DatePicker,
  Ai as DatetimePicker,
  ee as Dropdown,
  Ri as FileSelector,
  Q as HElement,
  ve as HtmlContent,
  tt as Icon,
  Di as ImageSelector,
  di as Menu,
  Iu as Messager,
  Es as Modal,
  Be as ModalBase,
  Le as ModalTrigger,
  ea as Nav,
  oa as Pager,
  Fi as Pick,
  Wi as Picker,
  wo as Portal,
  mi as ProgressCircle,
  W as ReactComponent,
  ji as SearchBox,
  fi as SearchMenu,
  Ql as Sticky,
  je as TIME_DAY,
  Rs as Tabs,
  Ei as TimePicker,
  ca as Toolbar,
  Bi as Tooltip,
  bu as VERSION,
  ch as addDate,
  co as bindHotkeys,
  zt as bus,
  f as cash,
  T as classes,
  Su as clearData,
  is as convertBytes,
  po as create,
  j as createDate,
  $l as createFormData,
  ac as createPortal,
  Y as createRef,
  Kr as deepGet,
  xl as deepGetPath,
  Tu as defineFn,
  bs as delay,
  zl as disableScroll,
  Nu as dom,
  ar as downloadFile,
  Kl as enterFullscreen,
  ye as evalValue,
  ii as fetchData,
  Mt as formatBytes,
  xt as formatDate,
  ju as formatDateSpan,
  U as formatString,
  Yr as getClassList,
  Us as getComponent,
  ui as getFullscreenElement,
  lo as getHotkeysMap,
  nc as getReactComponent,
  fc as getUniqueCode,
  Oe as getZData,
  gt as h,
  ku as hotkeys,
  O as i18n,
  go as initGlobalComponents,
  Sn as isDiff,
  Cu as isFetchSetting,
  te as isSameDay,
  Bo as isSameMonth,
  Ou as isSameWeek,
  In as isSameYear,
  Fu as isToday,
  Wu as isTomorrow,
  Vo as isValidDate,
  bt as isValidElement,
  Hu as isYesterday,
  L as mergeProps,
  ct as nextGid,
  xu as parseRawData,
  hi as parseSize,
  vo as reactComponents,
  Gl as registerComponent,
  Fl as registerGlobalListener,
  rt as registerReactComponent,
  io as removeUndefinedProps,
  ge as render,
  En as renderCustomContent,
  rc as renderCustomResult,
  sr as setZData,
  Ml as shareData,
  $n as store,
  ri as storeData,
  oi as takeData,
  us as toCssSize,
  uo as toggleFullscreen,
  ho as unbindHotkeys
};
//# sourceMappingURL=zui.esm.js.map
