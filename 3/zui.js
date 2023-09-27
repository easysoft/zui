var zn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var M = (s, t, e) => (zn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), H = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, F = (s, t, e, n) => (zn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var ye = (s, t, e) => (zn(s, t, "access private method"), e);
const Wt = document, Xs = window, Mo = Wt.documentElement, me = Wt.createElement.bind(Wt), Io = me("div"), Vn = me("table"), Zl = me("tbody"), Or = me("tr"), { isArray: bn, prototype: Ao } = Array, { concat: Ql, filter: Ui, indexOf: Po, map: Do, push: tc, slice: Lo, some: ji, splice: ec } = Ao, sc = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, nc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ic = /<.+>/, rc = /^\w+$/;
function Ki(s, t) {
  const e = oc(t);
  return !s || !e && !de(t) && !X(t) ? [] : !e && nc.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && rc.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class wn {
  constructor(t, e) {
    if (!t)
      return;
    if (ri(t))
      return t;
    let n = t;
    if (st(t)) {
      const i = e || Wt;
      if (n = sc.test(t) && de(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : ic.test(t) ? Ho(t) : ri(i) ? i.find(t) : st(i) ? u(i).find(t) : Ki(t, i), !n)
        return;
    } else if (ge(t))
      return this.ready(t);
    (n.nodeType || n === Xs) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new wn(t, e);
  }
}
const x = wn.prototype, u = x.init;
u.fn = u.prototype = x;
x.length = 0;
x.splice = ec;
typeof Symbol == "function" && (x[Symbol.iterator] = Ao[Symbol.iterator]);
function ri(s) {
  return s instanceof wn;
}
function Ae(s) {
  return !!s && s === s.window;
}
function de(s) {
  return !!s && s.nodeType === 9;
}
function oc(s) {
  return !!s && s.nodeType === 11;
}
function X(s) {
  return !!s && s.nodeType === 1;
}
function ac(s) {
  return !!s && s.nodeType === 3;
}
function lc(s) {
  return typeof s == "boolean";
}
function ge(s) {
  return typeof s == "function";
}
function st(s) {
  return typeof s == "string";
}
function ut(s) {
  return s === void 0;
}
function ns(s) {
  return s === null;
}
function Ro(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function qi(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Ae;
u.isFunction = ge;
u.isArray = bn;
u.isNumeric = Ro;
u.isPlainObject = qi;
function J(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (qi(s)) {
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
u.each = J;
x.each = function(s) {
  return J(this, s);
};
x.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Js(...s) {
  const t = lc(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Js(t, u, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (bn(r[o]) || qi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Js(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = Js;
x.extend = function(s) {
  return Js(x, s);
};
const cc = /\S+/g;
function Cn(s) {
  return st(s) ? s.match(cc) || [] : [];
}
x.toggleClass = function(s, t) {
  const e = Cn(s), n = !ut(t);
  return this.each((i, r) => {
    X(r) && J(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(s) {
  return this.toggleClass(s, !0);
};
x.removeAttr = function(s) {
  const t = Cn(s);
  return this.each((e, n) => {
    X(n) && J(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function hc(s, t) {
  if (s) {
    if (st(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return ns(e) ? void 0 : e;
      }
      return ut(t) ? this : ns(t) ? this.removeAttr(s) : this.each((e, n) => {
        X(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
x.attr = hc;
x.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
x.hasClass = function(s) {
  return !!s && ji.call(this, (t) => X(t) && t.classList.contains(s));
};
x.get = function(s) {
  return ut(s) ? Lo.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
x.eq = function(s) {
  return u(this.get(s));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function dc(s) {
  return ut(s) ? this.get().map((t) => X(t) || ac(t) ? t.textContent : "").join("") : this.each((t, e) => {
    X(e) && (e.textContent = s);
  });
}
x.text = dc;
function Ht(s, t, e) {
  if (!X(s))
    return;
  const n = Xs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function kt(s, t) {
  return parseInt(Ht(s, t), 10) || 0;
}
function Fr(s, t) {
  return kt(s, `border${t ? "Left" : "Top"}Width`) + kt(s, `padding${t ? "Left" : "Top"}`) + kt(s, `padding${t ? "Right" : "Bottom"}`) + kt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const Un = {};
function uc(s) {
  if (Un[s])
    return Un[s];
  const t = me(s);
  Wt.body.insertBefore(t, null);
  const e = Ht(t, "display");
  return Wt.body.removeChild(t), Un[s] = e !== "none" ? e : "block";
}
function Br(s) {
  return Ht(s, "display") === "none";
}
function Wo(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function kn(s) {
  return st(s) ? (t, e) => Wo(e, s) : ge(s) ? s : ri(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
x.filter = function(s) {
  const t = kn(s);
  return u(Ui.call(this, (e, n) => t.call(e, n, e)));
};
function Qt(s, t) {
  return t ? s.filter(t) : s;
}
x.detach = function(s) {
  return Qt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const fc = /^\s*<(\w+)[^>]*>/, pc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, zr = {
  "*": Io,
  tr: Zl,
  td: Or,
  th: Or,
  thead: Vn,
  tbody: Vn,
  tfoot: Vn
};
function Ho(s) {
  if (!st(s))
    return [];
  if (pc.test(s))
    return [me(RegExp.$1)];
  const t = fc.test(s) && RegExp.$1, e = zr[t] || zr["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = Ho;
x.has = function(s) {
  const t = st(s) ? (e, n) => Ki(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
x.not = function(s) {
  const t = kn(s);
  return this.filter((e, n) => (!st(s) || X(n)) && !t.call(n, e, n));
};
function Ft(s, t, e, n) {
  const i = [], r = ge(t), o = n && kn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && tc.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Oo(s) {
  return s.multiple && s.options ? Ft(Ui.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function mc(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || qo.test(e.type)) {
      const i = bn(s) ? Do.call(s, String) : ns(s) ? [] : [String(s)];
      n ? J(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ut(s) || ns(s) ? "" : s;
  }) : this[0] && Oo(this[0]);
}
x.val = mc;
x.is = function(s) {
  const t = kn(s);
  return ji.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function Nt(s) {
  return s.length > 1 ? Ui.call(s, (t, e, n) => Po.call(n, t) === e) : s;
}
u.unique = Nt;
x.add = function(s, t) {
  return u(Nt(this.get().concat(u(s, t).get())));
};
x.children = function(s) {
  return Qt(u(Nt(Ft(this, (t) => t.children))), s);
};
x.parent = function(s) {
  return Qt(u(Nt(Ft(this, "parentNode"))), s);
};
x.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return Po.call(e, t);
};
x.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
x.siblings = function(s) {
  return Qt(u(Nt(Ft(this, (t) => u(t).parent().children().not(t)))), s);
};
x.find = function(s) {
  return u(Nt(Ft(this, (t) => Ki(s, t))));
};
const gc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _c = /^$|^module$|\/(java|ecma)script/i, yc = ["type", "src", "nonce", "noModule"];
function vc(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (_c.test(i.type) && Mo.contains(i)) {
      const r = me("script");
      r.text = i.textContent.replace(gc, ""), J(yc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function bc(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && vc(t, s.ownerDocument);
}
function te(s, t, e, n, i, r, o, a) {
  return J(s, (l, c) => {
    J(u(c), (d, h) => {
      J(u(t), (m, p) => {
        const g = e ? h : p, _ = e ? p : h, v = e ? d : m;
        bc(g, v ? _.cloneNode(!0) : _, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return te(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return te(arguments, this, !1, !1, !0);
};
function wc(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ut(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    X(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
x.html = wc;
x.appendTo = function(s) {
  return te(arguments, this, !0, !1, !0);
};
x.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
x.before = function() {
  return te(arguments, this, !1, !0);
};
x.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
x.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
x.insertAfter = function(s) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(s) {
  return te(arguments, this, !0, !0);
};
x.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(s) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return u(Nt(Ft(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
x.next = function(s, t, e) {
  return Qt(u(Nt(Ft(this, "nextElementSibling", t, e))), s);
};
x.nextAll = function(s) {
  return this.next(s, !0);
};
x.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
x.parents = function(s, t) {
  return Qt(u(Nt(Ft(this, "parentElement", !0, t))), s);
};
x.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
x.prev = function(s, t, e) {
  return Qt(u(Nt(Ft(this, "previousElementSibling", t, e))), s);
};
x.prevAll = function(s) {
  return this.prev(s, !0);
};
x.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
x.map = function(s) {
  return u(Ql.apply([], Do.call(this, (t, e) => s.call(t, e, t))));
};
x.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Ht(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Mo;
  });
};
x.slice = function(s, t) {
  return u(Lo.call(this, s, t));
};
const Cc = /-([a-z])/g;
function Gi(s) {
  return s.replace(Cc, (t, e) => e.toUpperCase());
}
x.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Wt.readyState !== "loading" ? t() : Wt.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
x.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Xs.pageYOffset,
    left: t.left + Xs.pageXOffset
  };
};
x.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Ht(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Ht(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && X(i)) {
      const r = u(i).offset();
      e.top -= r.top + kt(i, "borderTopWidth"), e.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - kt(s, "marginTop"),
    left: e.left - kt(s, "marginLeft")
  };
};
const Fo = {
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
x.prop = function(s, t) {
  if (s) {
    if (st(s))
      return s = Fo[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
x.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[Fo[s] || s];
  });
};
const kc = /^--/;
function Yi(s) {
  return kc.test(s);
}
const jn = {}, { style: xc } = Io, $c = ["webkit", "moz", "ms"];
function Sc(s, t = Yi(s)) {
  if (t)
    return s;
  if (!jn[s]) {
    const e = Gi(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${$c.join(`${n} `)}${n}`.split(" ");
    J(i, (r, o) => {
      if (o in xc)
        return jn[s] = o, !1;
    });
  }
  return jn[s];
}
const Nc = {
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
function Bo(s, t, e = Yi(s)) {
  return !e && !Nc[s] && Ro(t) ? `${t}px` : t;
}
function Tc(s, t) {
  if (st(s)) {
    const e = Yi(s);
    return s = Sc(s, e), arguments.length < 2 ? this[0] && Ht(this[0], s, e) : s ? (t = Bo(s, t, e), this.each((n, i) => {
      X(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
x.css = Tc;
function zo(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const Ec = /^\s+|\s+$/;
function Vr(s, t) {
  const e = s.dataset[t] || s.dataset[Gi(t)];
  return Ec.test(e) ? e : zo(JSON.parse, e);
}
function Mc(s, t, e) {
  e = zo(JSON.stringify, e), s.dataset[Gi(t)] = e;
}
function Ic(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Vr(this[0], n);
    return e;
  }
  if (st(s))
    return arguments.length < 2 ? this[0] && Vr(this[0], s) : ut(t) ? this : this.each((e, n) => {
      Mc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
x.data = Ic;
function Vo(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
J([!0, !1], (s, t) => {
  J(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    x[i] = function(r) {
      if (this[0])
        return Ae(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : de(this[0]) ? Vo(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? kt(this[0], `margin${e ? "Top" : "Left"}`) + kt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  x[e] = function(n) {
    if (!this[0])
      return ut(n) ? void 0 : this;
    if (!arguments.length)
      return Ae(this[0]) ? this[0].document.documentElement[`client${t}`] : de(this[0]) ? Vo(this[0], t) : this[0].getBoundingClientRect()[e] - Fr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Ht(o, "boxSizing");
      o.style[e] = Bo(e, i + (a === "border-box" ? Fr(o, !s) : 0));
    });
  };
});
const Ur = "___cd";
x.toggle = function(s) {
  return this.each((t, e) => {
    if (!X(e))
      return;
    const n = Br(e);
    (ut(s) ? n : s) ? (e.style.display = e[Ur] || "", Br(e) && (e.style.display = uc(e.tagName))) : n || (e[Ur] = Ht(e, "display"), e.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const jr = "___ce", Xi = ".", Ji = { focus: "focusin", blur: "focusout" }, Uo = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ac = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zi(s) {
  return Uo[s] || Ji[s] || s;
}
function Qi(s) {
  const t = s.split(Xi);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(s, t) {
  if (st(s)) {
    const [n, i] = Qi(s), r = Zi(n);
    if (!r)
      return this;
    const o = Ac.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Wt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Xi), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Ji;
  return this.each((n, i) => {
    e && ge(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function jo(s) {
  return s[jr] = s[jr] || {};
}
function Pc(s, t, e, n, i) {
  const r = jo(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function Ko(s, t) {
  return !t || !ji.call(t, (e) => s.indexOf(e) < 0);
}
function Zs(s, t, e, n, i) {
  const r = jo(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Ko(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Zs(s, t, e, n, i);
}
x.off = function(s, t, e) {
  if (ut(s))
    this.each((n, i) => {
      !X(i) && !de(i) && !Ae(i) || Zs(i);
    });
  else if (st(s))
    ge(t) && (e = t, t = ""), J(Cn(s), (n, i) => {
      const [r, o] = Qi(i), a = Zi(r);
      this.each((l, c) => {
        !X(c) && !de(c) && !Ae(c) || Zs(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
x.remove = function(s) {
  return Qt(this, s).detach().off(), this;
};
x.replaceWith = function(s) {
  return this.before(s).remove();
};
x.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function Dc(s, t, e, n, i) {
  if (!st(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return st(t) || (ut(t) || ns(t) ? t = "" : ut(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ge(n) || (n = e, e = void 0), n ? (J(Cn(s), (r, o) => {
    const [a, l] = Qi(o), c = Zi(a), d = a in Uo, h = a in Ji;
    c && this.each((m, p) => {
      if (!X(p) && !de(p) && !Ae(p))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Ko(l, _.namespace.split(Xi)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let b = _.target;
          for (; !Wo(b, t); )
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
        i && Zs(p, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || u.guid++, Pc(p, c, l, t, g);
    });
  }), this) : this;
}
x.on = Dc;
function Lc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
x.one = Lc;
const Rc = /\r?\n/g;
function Wc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(Rc, `\r
`))}`;
}
const Hc = /file|reset|submit|button|image/i, qo = /radio|checkbox/i;
x.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    J(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Hc.test(i.type) || qo.test(i.type) && !i.checked)
        return;
      const r = Oo(i);
      if (!ut(r)) {
        const o = bn(r) ? r : [r];
        J(o, (a, l) => {
          s += Wc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function Oc(s, t) {
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
function Fc(s, t, e) {
  try {
    const n = Oc(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function Q(s, ...t) {
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
var tr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(tr || {});
function Bc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / tr[e]).toFixed(t) + e);
}
const zc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * tr[n];
};
let er = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), jt;
function Vc() {
  return er;
}
function Uc(s) {
  er = s.toLowerCase();
}
function Go(s, t) {
  jt || (jt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, jt, s);
}
function Z(s, t, e, n, i, r) {
  Array.isArray(s) ? jt && s.unshift(jt) : s = jt ? [jt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || er;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === jt ? `${r}.${t}` : t;
    if (a = Fc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? Q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function jc(s, t, e, n) {
  return Z(void 0, s, t, e, n);
}
Z.addLang = Go;
Z.getLang = jc;
Z.getCode = Vc;
Z.setCode = Uc;
Go({
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
function Kr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function Yo(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => Yo(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Kc(s, t) {
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
class Xo {
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
    v && (i && (u.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((b, [C, $]) => (Yo(b, C, $), b), new FormData()))), _.body = v), o && (_.mode = "cors");
    const y = _.headers || {};
    Kr(y, "X-Requested-With", "XMLHttpRequest"), r && Kr(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
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
        const d = e || Kc(o.headers.get("Content-Type"), n);
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
u.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : u.extend(t, s);
  const e = new Xo(t);
  return e.send(), e;
};
u.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, u.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
u.post = (s, t, e, n) => u.get(s, t, e, n, "POST");
u.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return u.get(n, t, (r, o, a) => {
    i && (r = u(r).find(i).html()), u(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function xn(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    u.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    if (o instanceof Promise)
      return await o;
    u.extend(n, o);
  }
  e && u.extend(n, typeof e == "function" ? e(n) : e);
  const i = new Xo(n), [r] = await i.send();
  return r;
}
function qr(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
u.fetch = xn;
function Xt() {
  return u.guid++;
}
function Jo(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Jo(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const k = (...s) => Jo(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = k;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(s, ...t));
  });
};
const Ke = /* @__PURE__ */ new WeakMap();
function Zo(s, t, e) {
  const n = Ke.has(s), i = n ? Ke.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), Ke.set(s, i)) : Ke.delete(s);
}
function Qo(s, t, e) {
  let n = Ke.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Qo(this[0], t) : this.each((n, i) => Zo(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => Zo(e, s));
};
function oi(s, t = "z-") {
  const e = u(s)[0];
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
function Gr(s, t, e = "z-") {
  const n = u(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function qc(...s) {
  var e;
  const t = s.length;
  if (!t)
    return oi(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = oi(this)) == null ? void 0 : e[n] : (u.isPlainObject(n) && Gr(this, n), this);
  }
  return Gr(this, { [s[0]]: s[1] }), this;
}
u.fn.z = qc;
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const Qs = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), Gc = {};
u.share = Gc;
var $n, z, ta, rt, ie, Yr, ea, ai, xe = {}, sa = [], Yc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Sn = Array.isArray;
function Yt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function na(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function $t(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? $n.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return Rs(s, o, n, i, null);
}
function Rs(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ta };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function V() {
  return { current: null };
}
function Le(s) {
  return s.children;
}
function O(s, t) {
  this.props = s, this.context = t;
}
function is(s, t) {
  if (t == null)
    return s.__ ? is(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? is(s) : null;
}
function ia(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return ia(s);
  }
}
function Xr(s) {
  (!s.__d && (s.__d = !0) && ie.push(s) && !tn.__r++ || Yr !== z.debounceRendering) && ((Yr = z.debounceRendering) || ea)(tn);
}
function tn() {
  var s, t, e, n, i, r, o, a, l;
  for (ie.sort(ai); s = ie.shift(); )
    s.__d && (t = ie.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = Yt({}, o)).__v = o.__v + 1, sr(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? is(o), o.__h, i), la(n, o, i), o.__e != a && ia(o)), ie.length > t && ie.sort(ai));
  tn.__r = 0;
}
function ra(s, t, e, n, i, r, o, a, l, c, d) {
  var h, m, p, g, _, v, y, b, C, $ = 0, w = n && n.__k || sa, S = w.length, I = S, D = t.length;
  for (e.__k = [], h = 0; h < D; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Rs(null, g, null, null, g) : Sn(g) ? Rs(Le, { children: g }, null, null, null) : g.__b > 0 ? Rs(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (b = Xc(g, w, y = h + $, I)) === -1 ? p = xe : (p = w[b] || xe, w[b] = void 0, I--), sr(s, g, p, i, r, o, a, l, c, d), _ = g.__e, (m = g.ref) && p.ref != m && (p.ref && nr(p.ref, null, g), d.push(m, g.__c || _, g)), _ != null && (v == null && (v = _), (C = p === xe || p.__v === null) ? b == -1 && $-- : b !== y && (b === y + 1 ? $++ : b > y ? I > D - y ? $ += b - y : $-- : $ = b < y && b == y - 1 ? b - y : 0), y = h + $, typeof g.type != "function" || b === y && p.__k !== g.__k ? typeof g.type == "function" || b === y && !C ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = aa(s, _, l) : l = oa(g, l, s), typeof e.type == "function" && (e.__d = l))) : (p = w[h]) && p.key == null && p.__e && (p.__e == l && (l = is(p)), li(p, p, !1), w[h] = null);
  for (e.__e = v, h = S; h--; )
    w[h] != null && (typeof e.type == "function" && w[h].__e != null && w[h].__e == e.__d && (e.__d = w[h].__e.nextSibling), li(w[h], w[h]));
}
function oa(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? oa(n, t, e) : aa(e, n.__e, t));
  return t;
}
function rs(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Sn(s) ? s.some(function(e) {
    rs(e, t);
  }) : t.push(s)), t;
}
function aa(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function Xc(s, t, e, n) {
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
function Jc(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || en(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || en(s, r, t[r], e[r], n);
}
function Jr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Yc.test(t) ? e : e + "px";
}
function en(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Jr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Jr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? Qr : Zr, r) : s.removeEventListener(t, r ? Qr : Zr, r);
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
function Zr(s) {
  return this.l[s.type + !1](z.event ? z.event(s) : s);
}
function Qr(s) {
  return this.l[s.type + !0](z.event ? z.event(s) : s);
}
function sr(s, t, e, n, i, r, o, a, l, c) {
  var d, h, m, p, g, _, v, y, b, C, $, w, S, I, D, P = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = z.__b) && d(t);
  t:
    if (typeof P == "function")
      try {
        if (y = t.props, b = (d = P.contextType) && n[d.__c], C = d ? b ? b.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? t.__c = h = new P(y, C) : (t.__c = h = new O(y, C), h.constructor = P, h.render = Qc), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = C, h.__n = n, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), P.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Yt({}, h.__s)), Yt(h.__s, P.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, h.__v = t, m)
          P.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && y !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, C), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, C) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(T) {
              T && (T.__ = t);
            }), $ = 0; $ < h._sb.length; $++)
              h.__h.push(h._sb[$]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, C), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, g, _);
          });
        }
        if (h.context = C, h.props = y, h.__P = s, h.__e = !1, w = z.__r, S = 0, "prototype" in P && P.prototype.render) {
          for (h.state = h.__s, h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), I = 0; I < h._sb.length; I++)
            h.__h.push(h._sb[I]);
          h._sb = [];
        } else
          do
            h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++S < 25);
        h.state = h.__s, h.getChildContext != null && (n = Yt(Yt({}, n), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, g)), ra(s, Sn(D = d != null && d.type === Le && d.key == null ? d.props.children : d) ? D : [D], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (T) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(T, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Zc(e.__e, t, e, n, i, r, o, l, c);
  (d = z.diffed) && d(t);
}
function la(s, t, e) {
  for (var n = 0; n < e.length; n++)
    nr(e[n], e[++n], e[++n]);
  z.__c && z.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      z.__e(r, i.__v);
    }
  });
}
function Zc(s, t, e, n, i, r, o, a, l) {
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
    if (r = r && $n.call(s.childNodes), d = (m = e.props || xe).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (m = {}, _ = 0; _ < s.attributes.length; _++)
          m[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Jc(s, p, m, i, a), h)
      t.__k = [];
    else if (ra(s, Sn(_ = t.props.children) ? _ : [_], t, e, n, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && is(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && na(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== s.value || g === "progress" && !_ || g === "option" && _ !== m.value) && en(s, "value", _, m.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== s.checked && en(s, "checked", _, m.checked, !1));
  }
  return s;
}
function nr(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    z.__e(n, e);
  }
}
function li(s, t, e) {
  var n, i;
  if (z.unmount && z.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || nr(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && li(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || na(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Qc(s, t, e) {
  return this.constructor(s, e);
}
function os(s, t, e) {
  var n, i, r, o;
  z.__ && z.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], sr(t, s = (!n && e || t).__k = $t(Le, null, [s]), i || xe, xe, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? $n.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), la(r, s, o);
}
$n = sa.slice, z = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, ta = 0, rt = function(s) {
  return s != null && s.constructor === void 0;
}, O.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof s == "function" && (s = s(Yt({}, e), this.props)), s && Yt(e, s), s != null && this.__v && (t && this._sb.push(t), Xr(this));
}, O.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Xr(this));
}, O.prototype.render = Le, ie = [], ea = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ai = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, tn.__r = 0;
function R(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...rs(r), ...rs(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = u.extend(r, i))), s[n] = i);
    });
  }), s;
}
function ca(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const qe = /* @__PURE__ */ new Map();
function sn(s) {
  const { zui: t } = window;
  return (!qe.size || s && !qe.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || qe.set(e.toLowerCase(), n);
  }), s ? qe.get(s.toLowerCase()) : void 0;
}
function th(s, t, e) {
  const n = sn(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function _u(s) {
  if (s) {
    const t = sn(s);
    t && t.defineFn();
  } else
    sn(), qe.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = oi(s, "data-");
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => th(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Qo(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = sn(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function eh(s, t = !0) {
  const e = u(s), n = e[0], i = "zui-disable-scroll";
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
u.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    eh(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function ir(s) {
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function to(s) {
  const [t, e = "px"] = ir(s);
  return `${t}${e}`;
}
function rr(s, t) {
  const e = u(s)[0];
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
u.fn.isVisible = function(s) {
  return rr(this, s);
};
function or(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${Xt()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    or(n, r.innerHTML), r.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    or(e, s);
  });
};
function ha(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (rr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    ha(e, s);
  });
};
u.setLibRoot = function(s) {
  u.libRoot = s;
};
u.registerLib = function(s, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), u.libMap[s] = t;
};
u.getLib = function(s, t, e) {
  return new Promise((n, i) => {
    let r = typeof s == "string" ? { src: s } : u.extend({}, s);
    typeof t == "function" ? r.success = t : t && u.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[o];
    a && (r = u.extend({}, a, r), o = a.src || r.src);
    const { root: l = u.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = r, g = u(p ? `#${p}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const w = g.data("loadCalls") || [];
        w.push(m), g.data("loadCalls", w);
      }
      return;
    }
    const { async: _ = !0, defer: v = !1, noModule: y = !1, type: b, integrity: C } = r, $ = document.createElement("script");
    $.async = _, $.defer = v, $.noModule = y, b && ($.type = b), C && ($.integrity = C), $.onload = () => {
      m(), (u($).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), u($).removeData("loadCalls");
    }, $.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, $.src = o, u("head").append($);
  });
};
u.getScript = u.getLib;
const yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: rr,
  runJS: or,
  scrollIntoView: ha
}, Symbol.toStringTag, { value: "Module" })), da = {};
function _e(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    _e(e, s[e]);
  }) : t && (da[s.toLowerCase()] = t);
}
function sh(s) {
  return da[s.toLowerCase()];
}
class K extends O {
  constructor() {
    super(...arguments), this._gid = Xt();
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
    return { ref: o, className: k(this._getClassName(t)) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...h, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? sh(e) : e) || e;
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
    return r && ([e, i, n] = r), $t(e, i, n);
  }
}
K.HElement = !0;
var nh = 0;
function f(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --nh, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(c), c;
}
class ue extends O {
  constructor() {
    super(...arguments), this._ref = V();
  }
  _runJS() {
    this.props.executeScript && u(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ f(K, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function ih(s) {
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
      y != null && (typeof y == "object" && !rt(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ f("div", { className: k(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(h),
    style: m,
    ...d
  }, p];
}
function ua({
  tag: s = "div",
  ...t
}) {
  const [e, n] = ih(t);
  return $t(s, e, ...n);
}
function ci(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => ci({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "object" && (r.html || r.component)) {
    if (r.html)
      return /* @__PURE__ */ f(ue, { ...R(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = R({ children: o.map((a) => ci({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ f(K, { ...R(i, r) });
  }
  return rt(r) || r === null, r;
}
function B(s) {
  const t = ci(s);
  return t == null || typeof t == "boolean" ? null : rt(t) ? t : /* @__PURE__ */ f(Le, { children: t });
}
const eo = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function q(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (rt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(eo(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? eo(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: k(i), ...n });
}
function rh(s) {
  return this.getChildContext = () => s.context, s.children;
}
function fa(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    os(null, t._temp), t._temp = null, t._container = null;
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
  }), os(
    $t(rh, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function oh(s, t) {
  const e = $t(fa, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
_e({
  HElement: K,
  element: K,
  HtmlContent: ue,
  html: ue,
  CustomContent: B,
  custom: B,
  Icon: q,
  Portal: fa
});
function pa(s) {
  return s.parentNode === document ? !1 : s.parentNode ? pa(s.parentNode) : !0;
}
class at {
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
    const l = u(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = Xt();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, pa(c) && this.destroy();
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
    return u(this.element);
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
    return t && u.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = u.Event(t);
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
    return Z(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Z(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = u(t);
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
    return u(t || document).find(`[${n}]`).each((r, o) => {
      if (e) {
        const l = u(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(o).data(this.KEY);
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
    return this.get(u(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    u.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    u.fn.extend({
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
at.DEFAULT = {};
at.MULTI_INSTANCE = !1;
class W extends at {
  constructor() {
    super(...arguments), this.ref = V();
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
    const { element: e } = this, { Component: n, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this.ref,
      ...o
    };
    if (r && n.HElement) {
      const l = Array.from(e.attributes).reduce((c, d) => {
        const { name: h, value: m } = d;
        return c[h === "class" ? "className" : h] = m, c;
      }, {});
      return os(
        $t(n, R({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    os(
      $t(n, a),
      e
    );
  }
}
W.replace = !1;
class tt extends K {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(q, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ f("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
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
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = k([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: tt
}, Symbol.toStringTag, { value: "Module" }));
_e(ah);
let ft = class extends K {
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
        return /* @__PURE__ */ f(B, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || K;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = R({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ f(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: m = {} } = this.constructor;
    if (e = R(
      { type: l },
      h,
      m[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _index: n,
        key: String((a ? e[a] : e.key) ?? e.key ?? n)
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
ft.NAME = "";
ft.ITEM_NAME = "item";
ft.TAG = "ul";
ft.ItemComponents = {
  default: K,
  divider: [K, { className: "divider" }],
  space: [K, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
ft.defaultItemProps = {
  component: "li"
};
ft.defaultItemPropsMap = {};
ft.defaultItemType = "item";
const lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: ft
}, Symbol.toStringTag, { value: "Module" }));
class ar extends W {
}
ar.NAME = "CommonList";
ar.Component = ft;
ar.replace = !0;
_e(lh);
function ch(s) {
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
function hh(s) {
  const [t, e, n] = typeof s == "string" ? ch(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function so(s, t) {
  return hh(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function no(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function dh(s, t, e) {
  s = s % 360 / 360, t = no(t), e = no(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function ma(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function uh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let ks = class extends O {
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
    } = this.props, b = ["avatar", t], C = { ...e, background: o, color: a };
    let $ = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, $ = n) : (b.push(`size-${n}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? C.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let w;
    if (m)
      b.push("has-img"), w = /* @__PURE__ */ f("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      b.push("has-icon"), w = /* @__PURE__ */ f(q, { icon: l });
    else if (c != null && c.length) {
      const S = uh(c, h);
      if (b.push("has-text", `has-text-${S.length}`), o)
        !a && o && (C.color = so(o));
      else {
        const D = d ?? c, P = (typeof D == "number" ? D : ma(D)) * p % 360;
        if (C.background = `hsl(${P},${g * 100}%,${_ * 100}%)`, !a) {
          const T = dh(P, g, _);
          C.color = so(T);
        }
      }
      let I;
      $ && $ < 14 * S.length && (I = { transform: `scale(${$ / (14 * S.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ f("div", { "data-actualSize": $, className: "avatar-text", style: I, children: S });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: k(b),
        style: C,
        ...y,
        children: [
          w,
          v
        ]
      }
    );
  }
};
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: ks
}, Symbol.toStringTag, { value: "Module" }));
let vt = class extends ft {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    !e.type && (e.dropdown || e.items) && (e = u.extend({ type: "dropdown" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = R({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = R({}, e, ca({ btnType: n, size: i }));
  }
};
vt.NAME = "btn-group";
vt.TAG = "nav";
vt.ItemComponents = {
  ...ft.ItemComponents,
  default: tt
};
vt.defaultItemProps = {
  component: void 0
};
const Nn = class ga extends vt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = k(n.className, `gap-${e}`) : n.style = u.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && ((i.type === "btn-group" || i.type === "btnGroup") && (i.btnProps = R({}, this._shareBtnProps, i.btnProps)), i);
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = R(n, r)), /* @__PURE__ */ f(ga, { ...r });
  }
};
Nn.NAME = "toolbar";
Nn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Nn.ItemComponents = {
  ...vt.ItemComponents,
  btnGroup: vt,
  "btn-group": vt
};
let ot = Nn;
const ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: ot
}, Symbol.toStringTag, { value: "Module" }));
class Tn extends K {
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
      e ? /* @__PURE__ */ f(
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
      /* @__PURE__ */ f("label", { htmlFor: r, children: /* @__PURE__ */ f(B, { content: o }) }, "label")
    ];
  }
}
class mh extends Tn {
}
mh.defaultProps = {
  type: "radio"
};
class gh extends Tn {
}
gh.defaultProps = {
  type: "switch"
};
class nn extends K {
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
    if (i && d.push(/* @__PURE__ */ f(B, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(Tn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(q, { className: "item-icon", icon: e }, "icon")), n) {
      const m = typeof n == "function" ? n.call(this, t) : n;
      m && (m.className = k("item-avatar", m.className), d.push(/* @__PURE__ */ f(ks, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ f(B, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ f("div", { className: k("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t, e) {
    const {
      textClass: n,
      titleClass: i,
      subtitle: r,
      subtitleClass: o,
      url: a,
      target: l,
      content: c,
      contentClass: d
    } = t, h = a && !e, m = h ? "a" : "div";
    let { title: p, text: g } = t;
    return p === void 0 && (p = g, g = null), [
      /* @__PURE__ */ f("div", { className: k("item-content", d), children: [
        p ? /* @__PURE__ */ f(m, { className: k("item-title", i), href: h ? a : void 0, target: h ? l : void 0, children: /* @__PURE__ */ f(B, { content: p }) }, "title") : null,
        r ? /* @__PURE__ */ f("div", { className: k("item-subtitle", o), children: /* @__PURE__ */ f(B, { content: r }) }, "subtitle") : null,
        g ? /* @__PURE__ */ f("div", { className: k("item-text text", n), children: g }, "text") : null,
        c ? /* @__PURE__ */ f(B, { content: c }, "extraContent") : null
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
    if (r && a.push(/* @__PURE__ */ f(q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o) {
      let c = typeof o == "function" ? o.call(this, t) : o;
      Array.isArray(c) && (c = {
        items: c
      }), a.push(
        /* @__PURE__ */ f(ot, { size: "sm", ...c }, "actions")
      );
    }
    const l = n ? /* @__PURE__ */ f(B, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ f("div", { className: k("item-trailing", i), children: [
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
    } = t, y = n || (o && !a ? "a" : "div"), b = y === "a", C = R({
      key: "item",
      className: k("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": v,
        checked: m,
        multiline: p ?? !!(g && _),
        state: b
      })
    }, b ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ f(y, { ...C, children: [
      this._renderLeading(t),
      this._renderContent(t, b),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...rs(n)]];
  }
}
let ee = class extends ft {
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
        const r = await xn(t, [this], { throws: !0 });
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
    i = R({}, ca({
      divider: r,
      hover: o,
      multiline: a
    }), i);
    const { itemName: l, name: c } = this;
    if (i.innerClass = [l ? `${l}-inner${c ? ` ${c}-${i.type}-inner` : ""}` : "", i.innerClass], i.type === "item") {
      const { checkbox: d } = t;
      d && (i.checked === void 0 && (i.checked = !1), typeof d == "object" && (i.checkbox = i.checkbox ? u.extend({}, d, i.checkbox) : d));
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
      className: k(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
};
ee.ItemComponents = {
  ...ft.ItemComponents,
  default: K,
  item: nn,
  heading: nn
};
ee.NAME = "list";
let _a = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const Kn = "```ZUI_STR\n";
var fs, oe, Ne, wt, Te, Ee, Ws;
const Hr = class Hr {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    H(this, Ee);
    H(this, fs, void 0);
    H(this, oe, void 0);
    H(this, Ne, void 0);
    H(this, wt, void 0);
    H(this, Te, void 0);
    F(this, fs, e), F(this, Ne, t ?? _a()), F(this, oe, `ZUI_STORE:${M(this, Ne)}`), F(this, wt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return M(this, fs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (M(this, Te) || F(this, Te, new Hr(M(this, Ne), "session")), M(this, Te));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = M(this, wt).getItem(ye(this, Ee, Ws).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(Kn))
        return n.substring(Kn.length);
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
    M(this, wt).setItem(ye(this, Ee, Ws).call(this, t), typeof e == "string" ? `${Kn}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    M(this, wt).removeItem(ye(this, Ee, Ws).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < M(this, wt).length; e++) {
      const n = M(this, wt).key(e);
      if (n != null && n.startsWith(M(this, oe))) {
        const i = M(this, wt).getItem(n);
        typeof i == "string" && t(n.substring(M(this, oe).length + 1), JSON.parse(i));
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
fs = new WeakMap(), oe = new WeakMap(), Ne = new WeakMap(), wt = new WeakMap(), Te = new WeakMap(), Ee = new WeakSet(), Ws = function(t) {
  return `${M(this, oe)}:${t}`;
};
let rn = Hr;
const Rt = new rn("DEFAULT");
function _h(s, t = "local") {
  return new rn(s, t);
}
Object.assign(Rt, { create: _h });
let Re = class extends ee {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0;
    const { defaultNestedShow: e } = t;
    u.extend(this.state, typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} });
    const { preserve: n } = t;
    if (n && !this._controlled) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const i = Rt.get(this._storeID);
      i && u.extend(this.state, i);
    }
    this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e) {
    const { nestedShow: n } = this, i = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return typeof n == "boolean" ? n : !!(n[i] ?? this.state.defaultShow);
  }
  toggle(t, e) {
    var i;
    if (this._controlled)
      return;
    const n = this.isExpanded(t);
    if (e === void 0)
      e = !n;
    else if (e === n)
      return;
    if (((i = this.props.onToggle) == null ? void 0 : i.call(this, t, e)) !== !1)
      return this.setState((r) => ({
        nestedShow: {
          ...r.nestedShow,
          [t]: e
        }
      }), this._preserveState);
  }
  toggleAll(t) {
    if (!this._controlled)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  _preserveState() {
    this._storeID && Rt.set(this._storeID, this.state);
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return R(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : void 0,
      beforeRenderItem: this._beforeRenderNestedItem
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ f(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ f("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ f("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ f(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ f("span", { className: k(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key;
    if (i.items) {
      const a = i.expanded ?? this.isExpanded(o, r);
      R(i, {
        expanded: a,
        className: ["is-nested", `is-nested-${a ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return R(i, {
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
    return e = R(e, {
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
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = R(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = k(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
Re.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Re.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class ya extends W {
}
ya.NAME = "List";
ya.Component = ee;
class va extends W {
}
va.NAME = "NestedList";
va.Component = Re;
let nt = class extends Re {
  _getClassName(t) {
    return k(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
nt.NAME = "menu";
nt.TAG = "menu";
nt.inheritNestedProps = [...Re.inheritNestedProps, "compact"];
nt.ItemComponents = {
  ...Re.ItemComponents,
  item: [nn, { innerComponent: "a" }]
};
var ba = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Fe = (s, t, e) => (ba(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ms = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, io = (s, t, e) => (ba(s, t, "access private method"), e), hi, Hs, Os, Fs, di;
let lr = class extends O {
  constructor(t) {
    super(t), Ms(this, Fs), this._input = V(), this._timer = 0, Ms(this, hi, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Ms(this, Hs, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (io(this, Fs, di).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), Ms(this, Os, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${Xt()}`;
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
    io(this, Fs, di).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p, value: g } = t, { focus: _, value: v } = e, { id: y } = this, b = g ?? v, C = typeof b != "string" || !b.trim().length;
    let $, w, S;
    return m && (S = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(q, { icon: m })), !h && m && ($ = /* @__PURE__ */ f("label", { for: y, class: "input-control-prefix", children: S }, "prefix")), p && !C ? w = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Fe(this, hi),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(q, { icon: p })
      }
    ) : h && m && (w = S), w && (w = /* @__PURE__ */ f("label", { for: y, class: "input-control-suffix", children: w }, "suffix")), /* @__PURE__ */ f("div", { class: k("search-box input-control", r, { focus: _, empty: C, "has-prefix-icon": $, "has-suffix-icon": w }), style: o, children: [
      $,
      /* @__PURE__ */ f(
        "input",
        {
          ref: this._input,
          id: y,
          type: "text",
          class: k("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: b,
          onInput: Fe(this, Hs),
          onChange: Fe(this, Hs),
          onFocus: Fe(this, Os),
          onBlur: Fe(this, Os)
        }
      ),
      w
    ] });
  }
};
hi = /* @__PURE__ */ new WeakMap();
Hs = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakSet();
di = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
lr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Tt = class extends nt {
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
    this.isRoot && u(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
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
    e = rs(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && u.extend(i, n), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ f(lr, { ...i }, "search")), e;
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
    return u.unique(t.toLowerCase().split(" ").filter((e) => e.length));
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
        h && (o.push(/* @__PURE__ */ f("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Tt.inheritNestedProps = [...nt.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Tt.defaultProps = {
  ...nt.defaultProps,
  defaultNestedShow: !0
};
class wa extends W {
}
wa.NAME = "Menu";
wa.Component = nt;
class Ca extends W {
}
Ca.NAME = "SearchMenu";
Ca.Component = Tt;
function yh({
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
  a === !0 ? m = /* @__PURE__ */ f(tt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : rt(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ f(tt, { ...a, onClick: l }));
  const p = rt(e) ? e : e ? /* @__PURE__ */ f(ot, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: k("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(q, { icon: c, className: k("alert-icon", d) }),
    rt(i) ? i : /* @__PURE__ */ f("div", { className: k("alert-content", r), children: [
      rt(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    m,
    o
  ] });
}
function vh(s) {
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
function bh({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    yh,
    {
      className: k("messager", r, t, n === !0 ? vh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var wh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ch = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Be = (s, t, e) => (wh(s, t, "access private method"), e), se, we;
class cr extends W {
  constructor() {
    super(...arguments), Ch(this, se), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      u(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Be(this, se, we).call(this, () => {
      this._show = !0, this.render(), Be(this, se, we).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Be(this, se, we).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Be(this, se, we).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Be(this, se, we).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
se = /* @__PURE__ */ new WeakSet();
we = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
cr.NAME = "MessagerItem";
cr.Component = bh;
var hr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, le = (s, t, e) => (hr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Is = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Bs = (s, t, e, n) => (hr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ka = (s, t, e) => (hr(s, t, "access private method"), e), $e, Pt, ui, xa, dr, $a;
const En = class Sa extends at {
  constructor() {
    super(...arguments), Is(this, ui), Is(this, dr), Is(this, $e, void 0), Is(this, Pt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = le(this, Pt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), ka(this, ui, xa).call(this).show();
  }
  hide() {
    var t;
    (t = le(this, Pt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = Sa.ensure(e || "body", { key: `messager_${Xt()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
$e = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakSet();
xa = function() {
  if (le(this, Pt))
    le(this, Pt).setOptions(this.options);
  else {
    const s = ka(this, dr, $a).call(this), t = new cr(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Bs(this, $e, void 0), Bs(this, Pt, void 0);
    }), Bs(this, Pt, t);
  }
  return le(this, Pt);
};
dr = /* @__PURE__ */ new WeakSet();
$a = function() {
  if (le(this, $e))
    return le(this, $e);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Bs(this, $e, e[0])), e[0];
};
En.NAME = "messager";
En.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
En.MULTI_INSTANCE = !0;
let Nu = En;
let ur = class extends O {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = n / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = n * p);
    const g = (n - p) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
ur.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Na extends W {
}
Na.NAME = "ProgressCircle";
Na.Component = ur;
const ze = '[droppable="true"]';
class Mn extends at {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
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
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      const h = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || ze);
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(ze).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
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
      const { dragElement: e } = this, n = u(t.target).closest(ze)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(ze)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(ze)[0];
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
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), u(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), u(document).off(this.namespace), super.destroy();
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
    n && u(e).removeClass(n), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: n, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = u(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), n && o.removeClass(n), this._$targets = void 0);
  }
}
Mn.NAME = "Draggable";
Mn.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const kh = '[moveable="true"]';
class In extends at {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = u(t.target), a = n === "self" ? this.$element : o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), u(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      this._state && (t.preventDefault(), this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
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
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var l;
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = u(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        n.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        n.strategy = this.options.move || "none";
      const d = c.position();
      n = u.extend(n, {
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
      n = u.extend({}, i, n, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = n;
    const { strategy: r, target: o } = n, a = u(o);
    r === "position" ? a.css({ left: n.left, top: n.top }) : r === "transform" ? a.css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`) : r === "scroll" && (o.scrollLeft = n.scrollLeft - n.deltaX, o.scrollTop = n.scrollTop - n.deltaY), (l = this.options.onChange) == null || l.call(this, n, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: n } = this;
    if (n) {
      const i = u(n);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
In.NAME = "Moveable";
In.DEFAULT = {
  selector: kh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const fr = class Ta extends at {
  async afterInit() {
    const t = await Ta.loadModule();
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
    return this.Module || (this.Module = await u.getLib("sortablejs")), this.Module;
  }
};
fr.NAME = "Sortable";
fr.DEFAULT = {
  animation: 150
};
let Eu = fr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
class Ea extends W {
}
Ea.NAME = "Avatar";
Ea.Component = ks;
_e(fh);
class Ma extends W {
}
Ma.NAME = "BtnGroup";
Ma.Component = vt;
const xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: vt
}, Symbol.toStringTag, { value: "Module" }));
_e(xh);
const fi = Symbol("EVENT_PICK");
class pr extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = u(t.target), a = i == null ? void 0 : i(t);
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
    return k(
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
        u(`#${i}`).val(n);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: e, value: n });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t}`, (n, i) => {
      if (i === fi)
        return;
      const r = n.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", fi), this._skipTriggerChange = !1);
  }
  render(t) {
    return $t(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Pe = Math.min, ce = Math.max, on = Math.round, As = Math.floor, Jt = (s) => ({
  x: s,
  y: s
}), $h = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Sh = {
  start: "end",
  end: "start"
};
function pi(s, t, e) {
  return ce(s, Pe(t, e));
}
function xs(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function fe(s) {
  return s.split("-")[0];
}
function $s(s) {
  return s.split("-")[1];
}
function Ia(s) {
  return s === "x" ? "y" : "x";
}
function mr(s) {
  return s === "y" ? "height" : "width";
}
function An(s) {
  return ["top", "bottom"].includes(fe(s)) ? "y" : "x";
}
function gr(s) {
  return Ia(An(s));
}
function Nh(s, t, e) {
  e === void 0 && (e = !1);
  const n = $s(s), i = gr(s), r = mr(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = an(o)), [o, an(o)];
}
function Th(s) {
  const t = an(s);
  return [mi(s), t, mi(t)];
}
function mi(s) {
  return s.replace(/start|end/g, (t) => Sh[t]);
}
function Eh(s, t, e) {
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
function Mh(s, t, e, n) {
  const i = $s(s);
  let r = Eh(fe(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(mi)))), r;
}
function an(s) {
  return s.replace(/left|right|bottom|top/g, (t) => $h[t]);
}
function Ih(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function Aa(s) {
  return typeof s != "number" ? Ih(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function ln(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function ro(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = An(t), o = gr(t), a = mr(o), l = fe(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, m = n[a] / 2 - i[a] / 2;
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
  switch ($s(t)) {
    case "start":
      p[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const Ah = async (s, t, e) => {
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
  } = ro(c, n, l), m = n, p = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: b,
      y: C,
      data: $,
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
    if (d = b ?? d, h = C ?? h, p = {
      ...p,
      [v]: {
        ...p[v],
        ...$
      }
    }, w && g <= 50) {
      g++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (c = w.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : w.rects), {
        x: d,
        y: h
      } = ro(c, m, l)), _ = -1;
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
async function Pa(s, t) {
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
  } = xs(t, s), g = Aa(p), v = a[m ? h === "floating" ? "reference" : "floating" : h], y = ln(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = ln(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: C,
    strategy: l
  }) : b);
  return {
    top: (y.top - w.top + g.top) / $.y,
    bottom: (w.bottom - y.bottom + g.bottom) / $.y,
    left: (y.left - w.left + g.left) / $.x,
    right: (w.right - y.right + g.right) / $.x
  };
}
const gi = (s) => ({
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
    } = xs(s, t) || {};
    if (l == null)
      return {};
    const d = Aa(c), h = {
      x: e,
      y: n
    }, m = gr(i), p = mr(m), g = await o.getDimensions(l), _ = m === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", C = r.reference[p] + r.reference[m] - h[m] - r.floating[p], $ = h[m] - r.reference[m], w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let S = w ? w[b] : 0;
    (!S || !await (o.isElement == null ? void 0 : o.isElement(w))) && (S = a.floating[b] || r.floating[p]);
    const I = C / 2 - $ / 2, D = S / 2 - g[p] / 2 - 1, P = Pe(d[v], D), T = Pe(d[y], D), A = P, j = S - g[p] - T, E = S / 2 - g[p] / 2 + I, U = pi(A, E, j), bt = $s(i) != null && E != U && r.reference[p] / 2 - (E < A ? P : T) - g[p] / 2 < 0 ? E < A ? A - E : j - E : 0;
    return {
      [m]: h[m] - bt,
      data: {
        [m]: U,
        centerOffset: E - U + bt
      }
    };
  }
}), Pn = function(s) {
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
      } = xs(s, t), v = fe(n), y = fe(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), C = h || (y || !g ? [an(o)] : Th(o));
      !h && p !== "none" && C.push(...Mh(o, g, p, b));
      const $ = [o, ...C], w = await Pa(t, _), S = [];
      let I = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && S.push(w[v]), d) {
        const A = Nh(n, r, b);
        S.push(w[A[0]], w[A[1]]);
      }
      if (I = [...I, {
        placement: n,
        overflows: S
      }], !S.every((A) => A <= 0)) {
        var D, P;
        const A = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1, j = $[A];
        if (j)
          return {
            data: {
              index: A,
              overflows: I
            },
            reset: {
              placement: j
            }
          };
        let E = (P = I.filter((U) => U.overflows[0] <= 0).sort((U, ct) => U.overflows[1] - ct.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!E)
          switch (m) {
            case "bestFit": {
              var T;
              const U = (T = I.map((ct) => [ct.placement, ct.overflows.filter((bt) => bt > 0).reduce((bt, Jl) => bt + Jl, 0)]).sort((ct, bt) => ct[1] - bt[1])[0]) == null ? void 0 : T[0];
              U && (E = U);
              break;
            }
            case "initialPlacement":
              E = o;
              break;
          }
        if (n !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function Ph(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = fe(e), a = $s(e), l = An(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = xs(t, s);
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
const Dn = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await Ph(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, as = function(s) {
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
      } = xs(s, t), c = {
        x: e,
        y: n
      }, d = await Pa(t, l), h = An(fe(i)), m = Ia(h);
      let p = c[m], g = c[h];
      if (r) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = p + d[v], C = p - d[y];
        p = pi(b, p, C);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = g + d[v], C = g - d[y];
        g = pi(b, g, C);
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
function Zt(s) {
  return Da(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function dt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(s) {
  var t;
  return (t = (Da(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Da(s) {
  return s instanceof Node || s instanceof dt(s).Node;
}
function Ot(s) {
  return s instanceof Element || s instanceof dt(s).Element;
}
function St(s) {
  return s instanceof HTMLElement || s instanceof dt(s).HTMLElement;
}
function oo(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof dt(s).ShadowRoot;
}
function Ss(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = gt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Dh(s) {
  return ["table", "td", "th"].includes(Zt(s));
}
function _r(s) {
  const t = yr(), e = gt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Lh(s) {
  let t = De(s);
  for (; St(t) && !Ln(t); ) {
    if (_r(t))
      return t;
    t = De(t);
  }
  return null;
}
function yr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ln(s) {
  return ["html", "body", "#document"].includes(Zt(s));
}
function gt(s) {
  return dt(s).getComputedStyle(s);
}
function Rn(s) {
  return Ot(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function De(s) {
  if (Zt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    oo(s) && s.host || // Fallback.
    Bt(s)
  );
  return oo(t) ? t.host : t;
}
function La(s) {
  const t = De(s);
  return Ln(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : St(t) && Ss(t) ? t : La(t);
}
function ls(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = La(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = dt(n);
  return i ? t.concat(r, r.visualViewport || [], Ss(n) ? n : [], r.frameElement ? ls(r.frameElement) : []) : t.concat(n, ls(n));
}
function Ra(s) {
  const t = gt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = St(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = on(e) !== r || on(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function vr(s) {
  return Ot(s) ? s : s.contextElement;
}
function Se(s) {
  const t = vr(s);
  if (!St(t))
    return Jt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Ra(t);
  let o = (r ? on(e.width) : e.width) / n, a = (r ? on(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Rh = /* @__PURE__ */ Jt(0);
function Wa(s) {
  const t = dt(s);
  return !yr() || !t.visualViewport ? Rh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wh(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== dt(s) ? !1 : t;
}
function pe(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = vr(s);
  let o = Jt(1);
  t && (n ? Ot(n) && (o = Se(n)) : o = Se(s));
  const a = Wh(r, e, n) ? Wa(r) : Jt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = dt(r), p = n && Ot(n) ? dt(n) : n;
    let g = m.frameElement;
    for (; g && n && p !== m; ) {
      const _ = Se(g), v = g.getBoundingClientRect(), y = gt(g), b = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, C = v.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += b, c += C, g = dt(g).frameElement;
    }
  }
  return ln({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Hh(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = St(e), r = Bt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Jt(1);
  const l = Jt(0);
  if ((i || !i && n !== "fixed") && ((Zt(e) !== "body" || Ss(r)) && (o = Rn(e)), St(e))) {
    const c = pe(e);
    a = Se(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Oh(s) {
  return Array.from(s.getClientRects());
}
function Ha(s) {
  return pe(Bt(s)).left + Rn(s).scrollLeft;
}
function Fh(s) {
  const t = Bt(s), e = Rn(s), n = s.ownerDocument.body, i = ce(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ce(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Ha(s);
  const a = -e.scrollTop;
  return gt(n).direction === "rtl" && (o += ce(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Bh(s, t) {
  const e = dt(s), n = Bt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = yr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function zh(s, t) {
  const e = pe(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = St(s) ? Se(s) : Jt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function ao(s, t, e) {
  let n;
  if (t === "viewport")
    n = Bh(s, e);
  else if (t === "document")
    n = Fh(Bt(s));
  else if (Ot(t))
    n = zh(t, e);
  else {
    const i = Wa(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return ln(n);
}
function Oa(s, t) {
  const e = De(s);
  return e === t || !Ot(e) || Ln(e) ? !1 : gt(e).position === "fixed" || Oa(e, t);
}
function Vh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = ls(s).filter((a) => Ot(a) && Zt(a) !== "body"), i = null;
  const r = gt(s).position === "fixed";
  let o = r ? De(s) : s;
  for (; Ot(o) && !Ln(o); ) {
    const a = gt(o), l = _r(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ss(o) && !l && Oa(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = De(o);
  }
  return t.set(s, n), n;
}
function Uh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Vh(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = ao(t, d, i);
    return c.top = ce(h.top, c.top), c.right = Pe(h.right, c.right), c.bottom = Pe(h.bottom, c.bottom), c.left = ce(h.left, c.left), c;
  }, ao(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function jh(s) {
  return Ra(s);
}
function Kh(s, t, e) {
  const n = St(t), i = Bt(t), r = e === "fixed", o = pe(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Jt(0);
  if (n || !n && !r)
    if ((Zt(t) !== "body" || Ss(i)) && (a = Rn(t)), n) {
      const c = pe(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Ha(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function lo(s, t) {
  return !St(s) || gt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Fa(s, t) {
  const e = dt(s);
  if (!St(s))
    return e;
  let n = lo(s, t);
  for (; n && Dh(n) && gt(n).position === "static"; )
    n = lo(n, t);
  return n && (Zt(n) === "html" || Zt(n) === "body" && gt(n).position === "static" && !_r(n)) ? e : n || Lh(s) || e;
}
const qh = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || Fa, r = this.getDimensions;
  return {
    reference: Kh(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Gh(s) {
  return gt(s).direction === "rtl";
}
const Yh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hh,
  getDocumentElement: Bt,
  getClippingRect: Uh,
  getOffsetParent: Fa,
  getElementRects: qh,
  getClientRects: Oh,
  getDimensions: jh,
  getScale: Se,
  isElement: Ot,
  isRTL: Gh
};
function Xh(s, t) {
  let e = null, n;
  const i = Bt(s);
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
    const p = As(d), g = As(i.clientWidth - (c + h)), _ = As(i.clientHeight - (d + m)), v = As(c), b = {
      rootMargin: -p + "px " + -g + "px " + -_ + "px " + -v + "px",
      threshold: ce(0, Pe(1, l)) || 1
    };
    let C = !0;
    function $(w) {
      const S = w[0].intersectionRatio;
      if (S !== l) {
        if (!C)
          return o();
        S ? o(!1, S) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      C = !1;
    }
    try {
      e = new IntersectionObserver($, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver($, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function br(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = vr(s), d = i || r ? [...c ? ls(c) : [], ...ls(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? Xh(c, e) : null;
  let m = -1, p = null;
  o && (p = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let g, _ = l ? pe(s) : null;
  l && v();
  function v() {
    const y = pe(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const Wn = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Yh,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Ah(s, t, {
    ...i,
    platform: r
  });
};
var ae, Ct, Kt;
class Ba extends O {
  constructor(e) {
    super(e);
    H(this, ae, void 0);
    H(this, Ct, void 0);
    H(this, Kt, void 0);
    F(this, ae, V()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = M(this, ae)) == null ? void 0 : e.current;
  }
  get container() {
    return M(this, Kt);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = u(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), n(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: r } = i;
    return k(
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
    } = e, c = u.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: M(this, ae),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!M(this, Kt)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), F(this, Kt, i[0]);
    }
    return M(this, Kt);
  }
  _render(e) {
    return /* @__PURE__ */ f("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: n, props: i } = this, { state: r } = i;
    if (!e || !n || !r.open) {
      M(this, Ct) && (M(this, Ct).call(this), F(this, Ct, void 0));
      return;
    }
    M(this, Ct) || F(this, Ct, br(n, e, () => {
      const { placement: o, width: a } = i;
      Wn(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Pn() : null, as(), Dn(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        u(e).css({
          left: l,
          top: c,
          width: a === "100%" ? u(n).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
      }), a === "100%" && u(e).css({ width: u(e).width() });
    }));
  }
  componentDidMount() {
    var e, n;
    this.layout(), u(document).on("click", this._handleDocClick), (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    u(document).off("click", this._handleDocClick);
    const e = M(this, Ct);
    e && (e(), F(this, Ct, void 0)), F(this, Kt, void 0), F(this, ae, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return oh(this._render(e), this._getContainer(e));
  }
}
ae = new WeakMap(), Ct = new WeakMap(), Kt = new WeakMap();
var za = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Vt = (s, t, e) => (za(s, t, "read from private field"), e ? e.call(s) : t.get(s)), qn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ve = (s, t, e, n) => (za(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), zs, yt, Ge;
let lt = class extends O {
  constructor(t) {
    super(t), qn(this, zs, void 0), qn(this, yt, 0), qn(this, Ge, V()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Vt(this, yt) && (clearTimeout(Vt(this, yt)), ve(this, yt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await Qs(200, (a) => {
        ve(this, yt, a);
      }), ve(this, yt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Qs(50, (a) => {
        ve(this, yt, a);
      }), ve(this, yt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ve(this, zs, t.id ?? `_pick${Xt()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Vt(this, zs);
  }
  get pop() {
    return Vt(this, Ge).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), Vt(this, yt) && clearTimeout(Vt(this, yt));
    const t = Vt(this, Ge).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: Vt(this, Ge), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Le, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
zs = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
lt.Trigger = pr;
lt.Pop = Ba;
lt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Va = class extends lt {
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
    if (t && u(t).css("backgroundColor", r), e && u(e).css("borderColor", r), n && u(n).css("color", r), i) {
      const o = u(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ f(q, { icon: n }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = u.extend({
      color: e.value
    }, n.style), n.className = k("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Va.defaultProps = {
  ...lt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Ua extends W {
}
Ua.NAME = "ColorPicker";
Ua.Component = Va;
const cs = 24 * 60 * 60 * 1e3, G = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Jh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(G(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, Ns = (s, t = /* @__PURE__ */ new Date()) => G(s).toDateString() === G(t).toDateString(), _i = (s, t = /* @__PURE__ */ new Date()) => G(s).getFullYear() === G(t).getFullYear(), ja = (s, t = /* @__PURE__ */ new Date()) => (s = G(s), t = G(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Au = (s, t = /* @__PURE__ */ new Date()) => {
  s = G(s), t = G(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Pu = (s, t) => Ns(G(t), s), Du = (s, t) => Ns(G(t).getTime() - cs, s), Lu = (s, t) => Ns(G(t).getTime() + cs, s), et = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = G(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", _i(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Ru = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = et(s, _i(s) ? n.month : n.full);
  if (Ns(s, t))
    return i;
  const r = et(t, _i(s, t) ? ja(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var ps, ms;
class Ka extends O {
  constructor() {
    super(...arguments);
    H(this, ps, V());
    H(this, ms, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(M(this, ps).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: M(this, ps), children: [
      /* @__PURE__ */ f(
        nt,
        {
          className: l,
          items: o,
          onClickItem: M(this, ms).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        nt,
        {
          className: l,
          items: a,
          onClickItem: M(this, ms).bind(this, "minute")
        }
      )
    ] });
  }
}
ps = new WeakMap(), ms = new WeakMap();
var Zh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ps = (s, t, e) => (Zh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ds = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, yi, vi, bi, wi;
const co = (s) => {
  if (!s)
    return;
  const t = G(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let qa = class extends lt {
  constructor(t) {
    super(t), Ds(this, yi, () => {
      this.toggle(!0);
    }), Ds(this, vi, (n) => {
      this.setTime(n.target.value);
    }), Ds(this, bi, (n, i) => {
      this.setTime({ [n]: i });
    }), Ds(this, wi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = et(/* @__PURE__ */ new Date(), t.format));
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
    const n = co(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? et(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = co(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Ps(this, wi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Ps(this, yi), onChange: Ps(this, vi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(Ka, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: Ps(this, bi) });
  }
};
yi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
wi = /* @__PURE__ */ new WeakMap();
qa.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
Z.addLang({
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
const Qh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * cs;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, ho = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => et(e, t)));
var gn;
class td extends O {
  constructor() {
    super(...arguments);
    H(this, gn, (e) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(e) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = Z.getLang("weekNames"),
      monthNames: o = Z.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const I = (i + S) % 7;
      h.push(/* @__PURE__ */ f("div", { className: k("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[I] : I }) }, S));
    }
    const { startTime: p, days: g, firstDay: _ } = Qh(a, l, i), v = _ + g * cs;
    let y = p;
    const b = [], C = "yyyy-MM-dd", $ = ho(c, C), w = ho(d, C);
    for (; y <= v; ) {
      const S = [];
      for (let I = 0; I < 7; I++) {
        const D = new Date(y), P = D.getDate(), T = et(D, C), A = D.getDay(), j = ja(D, _), E = k("col mini-calendar-day", {
          active: $.has(T),
          selected: w.has(T),
          "is-first": P === 1,
          "is-in-month": j,
          "is-out-month": !j,
          "is-today": Ns(D, n),
          "is-weekend": A === 0 || A === 6
        });
        S.push(
          /* @__PURE__ */ f("div", { className: E, "data-date": T, children: /* @__PURE__ */ f("a", { className: m, onClick: M(this, gn), children: P === 1 && o ? o[D.getMonth()] : D.getDate() }) }, T)
        ), y += cs;
      }
      b.push(/* @__PURE__ */ f("div", { className: "row", children: S }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      b
    ] });
  }
}
gn = new WeakMap();
var gs, _n;
class uo extends O {
  constructor() {
    super(...arguments);
    H(this, gs, V());
    H(this, _n, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(M(this, gs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ f(tt, { type: "ghost", "data-value": c, active: c === o, className: k(l === c ? "is-current" : ""), onClick: M(this, _n), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: M(this, gs), children: a });
  }
}
gs = new WeakMap(), _n = new WeakMap();
var Me, _s, ys, vs, bs, ws, yn, Ya, vn, Xa;
class Ga extends O {
  constructor(e) {
    super(e);
    H(this, yn);
    H(this, vn);
    H(this, Me, void 0);
    H(this, _s, void 0);
    H(this, ys, void 0);
    H(this, vs, void 0);
    H(this, bs, void 0);
    H(this, ws, void 0);
    F(this, Me, V()), F(this, _s, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), F(this, ys, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), F(this, vs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), F(this, bs, (r) => {
      this.setState({ year: r, select: "day" });
    }), F(this, ws, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Jh(l, r.substring(5).replace("+", ""))), r = et(l, "yyyy-MM-dd");
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
    u(M(this, Me).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = Z.getLang("yearFormat") || "{0}",
      weekNames: o = Z.getLang("weekNames"),
      monthNames: a = Z.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = n, p = m === "day", g = G(e.minDate || "1970-1-1"), _ = G(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: M(this, Me), onClick: M(this, _s), children: [
      ye(this, yn, Ya).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(tt, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Q(r, d) }),
          /* @__PURE__ */ f(tt, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(tt, { type: "ghost", size: "sm", square: !0, onClick: M(this, ys), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(tt, { type: "ghost", size: "sm", square: !0, onClick: M(this, vs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          td,
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
        m === "year" ? /* @__PURE__ */ f(
          uo,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: M(this, bs)
          }
        ) : m === "month" ? /* @__PURE__ */ f(
          uo,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: M(this, ws)
          }
        ) : null,
        p ? ye(this, vn, Xa).call(this, e) : null
      ] })
    ] });
  }
}
Me = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), vs = new WeakMap(), bs = new WeakMap(), ws = new WeakMap(), yn = new WeakSet(), Ya = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(nt, { ...n })) : null;
}, vn = new WeakSet(), Xa = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": et(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(ot, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ f(tt, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var ed = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Gn = (s, t, e) => (ed(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Yn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ci, ki, xi;
let Ja = class extends lt {
  constructor(t) {
    super(t), Yn(this, Ci, () => {
      this.toggle(!0);
    }), Yn(this, ki, (n) => {
      this.setDate(n.target.value);
    }), Yn(this, xi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = G(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : et(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = et(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Gn(this, xi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Gn(this, Ci), onChange: Gn(this, ki) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = Z.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ f(
      Ga,
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
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
Ja.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Za extends W {
}
Za.NAME = "TimePicker";
Za.Component = qa;
class Qa extends W {
}
Qa.NAME = "DatePicker";
Qa.Component = Ja;
class sd extends O {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(Ga, { ...e }),
      /* @__PURE__ */ f(Ka, { ...n })
    ] });
  }
}
var nd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ve = (s, t, e) => (nd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ue = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, $i, Si, Ni, Ti, Ei;
const fo = (s) => {
  if (!s)
    return;
  const t = G(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let tl = class extends lt {
  constructor(t) {
    super(t), Ue(this, $i, () => {
      this.toggle(!0);
    }), Ue(this, Si, (o) => {
      this.setDate(o.target.value);
    }), Ue(this, Ni, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), Ue(this, Ti, (o, a) => {
      this.setTime({ [o]: a });
    }), Ue(this, Ei, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = G(o), g = !o || Number.isNaN(p.getDay()), _ = et(p, d), [, v = "00:00"] = this.state.value.split(m);
      this.setState({ value: g ? c ? l : "" : `${_}${m}${v}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = et(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
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
    const d = fo(c), h = this.state.value.split(o)[0] || et(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${et(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = fo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Ve(this, Ni),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: l,
          disabled: o,
          readOnly: a,
          onFocus: Ve(this, $i),
          onChange: (m) => {
            Ve(this, Si).call(this, m), Ve(this, Ei).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = Z.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: g } = t, [_, v] = this.getTime() || [], y = {
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
        onChange: Ve(this, Ti)
      }
    };
    return /* @__PURE__ */ f(sd, { ...y });
  }
};
$i = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
tl.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class el extends W {
}
el.NAME = "DatetimePicker";
el.Component = tl;
const po = "show", mo = "in", id = '[data-dismiss="modal"]', Xn = "modal-hide", We = class Ye extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(id) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
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
      return u(e).removeClass(Xn).css("z-index", `${Ye.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i,
      [Xn]: !1
    }, po, r).css({
      zIndex: `${Ye.zIndex++}`,
      ...o
    });
    const a = this.constructor;
    return a.hideOthersOnShow && a.getAll().forEach((l) => {
      l !== this && l.shown && l.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(mo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    u(this.modalElement).addClass(Xn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, u(this.modalElement).removeClass(mo), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(po), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthersOnShow && ((e = t.getAll().findLast((n) => n.shown && n !== this)) == null || e.show()), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = u(n);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = Ye.query(t, void 0, (n) => n.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ye.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
We.NAME = "Modal";
We.MULTI_INSTANCE = !0;
We.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
We.hideOthersOnShow = !0;
We.zIndex = 1500;
let hs = We;
u(window).on(`resize.${hs.NAMESPACE}`, () => {
  hs.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class sl extends O {
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
    return rt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: k("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : rt(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(ot, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? rt(t) ? t : /* @__PURE__ */ f("div", { className: k("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return rt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: k("modal-footer", e), children: n ? /* @__PURE__ */ f(ot, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: k("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: k("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
sl.defaultProps = { closeBtn: !0 };
class nl extends O {
  constructor() {
    super(...arguments), this._ref = V(), this.state = {}, this._watchIframeHeight = () => {
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
    return /* @__PURE__ */ f(
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
nl.defaultProps = {
  watchHeight: !0
};
var wr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, _t = (s, t, e) => (wr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), je = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, be = (s, t, e, n) => (wr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Vs = (s, t, e) => (wr(s, t, "access private method"), e), Et, Xe, Mt, cn, Cr, Us, Mi;
function rd(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function od(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
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
    body: e === "html" ? /* @__PURE__ */ f(ue, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function ad(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(nl, { url: e, watchHeight: !o })
  };
}
const ld = {
  custom: rd,
  ajax: od,
  iframe: ad
}, Jn = "loading", il = class ne extends hs {
  constructor() {
    super(...arguments), je(this, cn), je(this, Us), je(this, Et, void 0), je(this, Xe, void 0), je(this, Mt, void 0);
  }
  get id() {
    return _t(this, Xe);
  }
  get loading() {
    var t;
    return (t = _t(this, Et)) == null ? void 0 : t.classList.contains(Jn);
  }
  get shown() {
    var t;
    return !!((t = _t(this, Et)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = _t(this, Et);
    if (!t) {
      const { options: e } = this;
      let n = _t(this, Xe);
      n || (n = e.id || `modal-${Xt()}`, be(this, Xe, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      be(this, Et, t);
    }
    return t;
  }
  get $emitter() {
    const t = _t(this, Et);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ne.getAll().some((t) => t.shown) || u("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (u("body").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = _t(this, Et);
    t && (u(t).removeData(this.constructor.KEY).remove(), be(this, Et, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    _t(this, Mt) && clearTimeout(_t(this, Mt));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = ld[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(Jn), r && be(this, Mt, window.setTimeout(() => {
      be(this, Mt, 0), Vs(this, Us, Mi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Vs(this, Us, Mi).call(this, this.options.failedTip) : l && typeof l == "object" && await Vs(this, cn, Cr).call(this, l), _t(this, Mt) && (clearTimeout(_t(this, Mt)), be(this, Mt, 0)), this.layout(), await Qs(100), n.removeClass(Jn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ne.ensure(n, r), a = `${ne.NAMESPACE}.open${Xt()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? m = /* @__PURE__ */ f("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ f("div", { className: k("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = Z.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && p.push(v);
    }, []);
    let g;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: v, event: y }) => {
        const b = ne.query(y.target, c);
        g = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await ne.open({
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
    return await ne.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Et = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
cn = /* @__PURE__ */ new WeakSet();
Cr = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, os(
      /* @__PURE__ */ f(sl, { ...s }),
      this.modalElement
    );
  });
};
Us = /* @__PURE__ */ new WeakSet();
Mi = function(s) {
  if (s)
    return Vs(this, cn, Cr).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
il.DEFAULT = {
  ...hs.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let cd = il;
const hd = '[data-toggle="modal"]';
class Ii extends at {
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
      e = hs.ensure(n, t);
    } else
      e = cd.ensure(this.container, t);
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
Ii.NAME = "ModalTrigger";
u(document).on(`click${Ii.NAMESPACE}`, hd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Ii.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let kr = class extends ee {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
kr.NAME = "nav";
kr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class rl extends W {
}
rl.NAME = "Nav";
rl.Component = kr;
function ds(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function dd({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = ds(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : Q(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ f(tt, { type: e, ...a });
}
function ud({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ds(i, e);
  return n = typeof n == "function" ? n(a) : Q(n, a), /* @__PURE__ */ f(K, { ...o, children: [
    r,
    n
  ] });
}
function fd({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ f(tt, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const g = ds(n, p);
      i && (o.url = typeof i == "function" ? i(g) : Q(i, g)), m.push(/* @__PURE__ */ f(tt, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let pd = class extends O {
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
    let _ = /* @__PURE__ */ f(B, { content: r }, "content");
    (m || i) && (_ = /* @__PURE__ */ f("div", { className: m, children: _ }, "content"));
    const v = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(_), c && v.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: k("popover", a, { popup: n }), style: o, children: v });
  }
};
class xr extends W {
}
xr.NAME = "PopoverPanel";
xr.Component = pd;
const md = '[data-toggle="popover"]', go = "show", _o = "in";
class mt extends at {
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
      const e = u(t.target);
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
      const o = u(i), { namespace: a } = this;
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), u(t)[0]) : this._createTarget();
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
    const r = u(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(go), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(_o), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(_o), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(go), t && this._resetTimer(() => {
        this.destroy();
      }, typeof t == "number" ? t : 0), this._destoryTarget();
    }, e ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), u(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      u(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = br(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), Wn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const m = u(e).css({
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
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && m.attr("class", `${m.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new xr(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
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
        i ? Pn() : null,
        r ? as(typeof r == "object" ? r : void 0) : null,
        o || d ? Dn((o || 0) + d) : null,
        a ? gi({ element: c }) : null
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
    const { container: t = "body" } = this.options, e = u(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
}
mt.NAME = "Popover";
mt.Z_INDEX = 1700;
mt.MULTI_INSTANCE = !0;
mt.DEFAULT = {
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
u(document).on(`click${mt.NAMESPACE} mouseenter${mt.NAMESPACE}`, md, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(mt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    mt.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const gd = '[data-toggle="dropdown"]';
class xt extends mt {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
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
      content: $t($r, this._getMenuOptions())
    };
  }
}
xt.NAME = "Dropdown";
xt.DEFAULT = {
  ...mt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${xt.NAMESPACE} mouseenter${xt.NAMESPACE}`, gd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(xt.KEY)) {
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
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), xt.ensure(t, i), s.preventDefault();
  }
});
class Hn extends tt {
  constructor() {
    super(...arguments), this._ref = V();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e, onClickItem: n } = this.props, i = u(this.triggerElement), r = xt.get(this.triggerElement), o = {
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
    (t = xt.get(this.triggerElement)) == null || t.destroy();
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
Hn.defaultProps = {
  caret: !0
};
Object.assign(vt.ItemComponents, { dropdown: Hn });
Object.assign(ot.ItemComponents, { dropdown: Hn });
class $r extends Tt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this.element, e = t == null ? void 0 : t.parentElement;
    !t || !e || Wn(e, t, {
      placement: this.props.placement,
      middleware: [Pn(), as(), Dn(1)]
    }).then(({ x: n, y: i }) => {
      u(t).css({
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
      return /* @__PURE__ */ f("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ f("span", { className: "caret-right" }) });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
$r.defaultProps = {
  ...Tt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
$r.inheritNestedProps = [...Tt.inheritNestedProps, "popup"];
function _d({
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
      url: typeof e == "function" ? e(d) : Q(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Q(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Hn, { type: "dropdown", dropdown: i, ...o });
}
function yd({
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
    const v = ds(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(v) : Q(l, v));
  }, g = ds(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : Q(l, g), /* @__PURE__ */ f("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ f(tt, { type: n, ...d, onClick: p })
  ] });
}
let On = class extends ot {
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
      return i;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? u.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && u.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
On.NAME = "pager";
On.ItemComponents = {
  ...ot.ItemComponents,
  info: ud,
  link: dd,
  nav: fd,
  "size-menu": _d,
  goto: yd
};
On.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class ol extends W {
}
ol.NAME = "Pager";
ol.Component = On;
class al extends W {
}
al.NAME = "Pick";
al.Component = lt;
var Ie, Cs;
class ll extends O {
  constructor(e) {
    super(e);
    H(this, Ie, void 0);
    H(this, Cs, void 0);
    this._searchInput = V(), this._measure = V(), this._changeTimer = 0, F(this, Ie, (n) => {
      const i = n.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), n.stopPropagation();
    }), F(this, Cs, (n) => {
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
        const r = u(i).parent();
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
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: M(this, Cs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: M(this, Ie),
          onInput: M(this, Ie),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ie = new WeakMap(), Cs = new WeakMap();
class vd extends pr {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(B, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      ll,
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
    return !a && !e.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        u(`#${i}`).val(n);
      else {
        const a = r.length ? r : [o];
        return /* @__PURE__ */ f("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ f("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    u(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = u(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", fi), this._skipTriggerChange = !1;
    }
  }
}
class bd extends pr {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
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
    return k(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ f(
      ll,
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
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ f(B, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      m,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
let He = class extends nt {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
He.NAME = "tree";
He.defaultProps = {
  ...nt.defaultProps,
  indent: 12
};
He.defaultItemProps = {
  ...nt.defaultItemProps,
  innerComponent: "div"
};
He.inheritNestedProps = [...nt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let Ts = class extends Tt {
  _getItem(t, e, n) {
    return He.getTreeItem(t, super._getItem(t, e, n));
  }
};
Ts.NAME = "tree";
Ts.inheritNestedProps = [...Tt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
Ts.defaultItemProps = {
  ...Tt.defaultProps,
  innerComponent: "div"
};
function cl(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && cl(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class wd extends Ba {
  constructor() {
    super(...arguments), this._menu = V(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
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
        className: k(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
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
          const h = [...cl(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          u(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return u(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return R({
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
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ f(Ts, { hover: !0, ...n }) : /* @__PURE__ */ f(Tt, { ...n });
  }
}
function js(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && js(n.items, e), e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
let Sr = class extends lt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = V(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
    }, this.isSelected = (r) => this.valueList.includes(r), u.extend(this.state, {
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
        const r = js(i);
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
    else if (await Qs(n || 500), this._abort !== t || (r = await xn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = js(r);
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
    return t.Trigger || (t.multiple ? vd : bd);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = u.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = u.unique(t)), e.filter((n) => !this.isEmptyValue(n));
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
        const a = js(Array.isArray(r) ? r : this.state.items);
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
Sr.defaultProps = {
  ...lt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
Sr.Pop = wd;
class hl extends W {
}
hl.NAME = "Picker";
hl.Component = Sr;
class dl extends at {
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
    return i && n.middleware.push(Pn()), r && n.middleware.push(r === !0 ? as() : as(r)), o && n.middleware.push(gi({ element: this.$arrow[0] })), a && n.middleware.push(Dn(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = br(t, e, () => {
      Wn(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !gi || !o.arrow)
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
    const e = u(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    e.addClass(n), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
      u(i.target).data("dismiss") === "popovers" && this.hide();
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
    const e = u('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = u('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
dl.NAME = "Popovers";
dl.DEFAULT = {
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
class ul extends W {
}
ul.NAME = "SearchBox";
ul.Component = lr;
function Zn(s, t) {
  const [e, n] = ir(s);
  return n === "%" ? t * e / 100 : e;
}
const yo = "is-sidebar-resizing", Qn = "has-sidebar-animation";
class fl extends at {
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), n = e[0], i = e.width();
    this._container = n;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      gutterWidth: a = ir(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: m,
      minWidth: p = 0,
      maxWidth: g = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, v = _ ? u(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = Zn(m || t.width(), i), this._minWidth = Zn(p, i), this._maxWidth = Zn(g, i), this._width = (r ? Rt.get(this._storeID) : null) || this._defaultWidth, this._parent = v[0], v.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let y = t.find(".sidebar-gutter");
    y.length || (y = u('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = y, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (y.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), y.on("click", ".gutter-toggle", () => this.toggle())), c && y.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new In(y, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, v.addClass(yo).removeClass(Qn);
      },
      onMove: (b, C) => {
        Math.abs(C.deltaX) < 10 || this.update(this._startWidth + C.deltaX);
      },
      onMoveEnd: () => {
        d && v.addClass(Qn), v.removeClass(yo);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      v.addClass(Qn);
    }));
  }
  destroy() {
    var t;
    super.destroy(), this._raf && cancelAnimationFrame(this._raf), this._$gutter.off("click dbclick"), (t = this._moveable) == null || t.destroy();
  }
  toggle(t) {
    t = t ?? !!this._width, t && (this._widthBack = this._width), this.update(t ? 0 : this._widthBack || this._defaultWidth);
  }
  update(t, e) {
    if (!e) {
      this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        this._raf = 0, this.update(t, !0);
      });
      return;
    }
    if (t = t < this._minWidth ? 0 : Math.min(this._maxWidth, t, this._container.clientWidth), t === this._width)
      return;
    const { preserve: n, onResize: i, onToggle: r } = this.options, o = !this._width, a = !t;
    this._width = t, n && Rt.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
  }
  render() {
    const { side: t, width: e } = this, n = !e;
    this.$element.toggleClass("is-collapsed", n), u(this._parent).css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", n);
  }
}
fl.NAME = "Sidebar";
fl.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class pl extends W {
}
pl.NAME = "Toolbar";
pl.Component = ot;
_e(ph);
const Cd = '[data-toggle="tooltip"]';
class Dt extends mt {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: k("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Dt.NAME = "Tooltip";
Dt.DEFAULT = {
  ...mt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Dt.NAMESPACE} mouseenter${Dt.NAMESPACE}`, Cd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(Dt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Dt.ensure(t, { show: Dt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
class Nr extends W {
}
Nr.NAME = "Tree";
Nr.Component = He;
Nr.replace = !0;
class ml extends W {
}
ml.NAME = "SearchTree";
ml.Component = Ts;
class Tr extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? zc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const m = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = u(`<span class="text-primary">${e}</span>`);
    if (n) {
      const h = u(`<i class="icon icon-${n} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = u(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
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
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
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
    return this.addFile(t), u('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return u(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: n, renameClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Dt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Dt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${Bc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, r = u('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, r = u('<div class="input-group input-rename-container hidden"></div>'), o = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
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
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
Tr.NAME = "Upload";
Tr.DEFAULT = {
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
class gl extends Tr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = u(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = u(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = u('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(u(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = u('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})`, backgroundSize: "cover" }).prependTo(e);
    }, n.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = u(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return u('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(u(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
gl.NAME = "UploadImgs";
gl.DEFAULT = {
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
let Ai = class extends K {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: n,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ f("div", { className: k("card-content", r), children: [
          e ? /* @__PURE__ */ f("div", { className: k("card-subtitle", n), children: /* @__PURE__ */ f(B, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ f(B, { content: i }, "extraContent") : null
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
    return /* @__PURE__ */ f("div", { className: k("card-heading", m), children: [
      e ? /* @__PURE__ */ f(q, { className: "card-icon", icon: e }, "icon") : null,
      n ? /* @__PURE__ */ f("span", { className: k("card-prefix", i), children: n }, "prefix") : null,
      r ? /* @__PURE__ */ f(p, { className: k("card-title", o), href: a, ...l, children: /* @__PURE__ */ f(B, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ f("span", { className: k("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ f(B, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: n
    } = t;
    if (e)
      return /* @__PURE__ */ f("div", { className: k("card-header", n), children: /* @__PURE__ */ f(B, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: n,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ f("div", { className: k("card-footer", n), children: [
        /* @__PURE__ */ f(B, { content: e }, "footer"),
        ot.render(i, [t], { key: "foot-actions", className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ot.render(t.actions, [t], { key: "actions", className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const n = R({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ f(ee, { ...n });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const n = typeof e == "function" ? e.call(this, t) : e;
      if (n)
        return n.className = k("item-avatar", n.className), /* @__PURE__ */ f(ks, { ...n }, "avatar");
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
}, Oe = class extends ee {
};
Oe.NAME = "card-list";
Oe.TAG = "div";
Oe.ItemComponents = {
  ...ee.ItemComponents,
  default: Ai,
  item: Ai
};
Oe.defaultItemProps = {
  component: "div"
};
class _l extends W {
}
_l.NAME = "Card";
_l.Component = Ai;
class yl extends W {
}
yl.NAME = "CardList";
yl.Component = Oe;
class Er extends xt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Er.NAME = "ContextMenu";
Er.DEFAULT = {
  ...xt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function kd(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ f(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(ue, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const ti = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), vo = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], Ls = "Dashboard:Block.cache:";
let vl = class extends O {
  constructor(t) {
    super(t), this._ref = V(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      Er.show({
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
        const i = await u.fetch(e, [t, n], ({ url: r }) => ({ url: Q(r, n), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, n);
        });
      } catch (i) {
        const r = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
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
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? Rt.set(`${Ls}${n}:${t}`, e) : Rt.session.set(`${Ls}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? Rt.get(`${Ls}${e}:${t}`) : Rt.session.get(`${Ls}${t}`);
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
      t.sort((l, c) => vo(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => vo(a[1], l[1]));
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
    this._draggable = new Mn(t, {
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
    if (n && ti(t, n))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && ti(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && ti(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
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
    this.loadNext(), u(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), u(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ f(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: n * r[1], width: `${100 * r[2] / i}%`, height: n * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: p } = l, [g, _, v, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              kd,
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
vl.defaultProps = {
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
class bl extends W {
}
bl.NAME = "Dashboard";
bl.Component = vl;
var qt, Gt;
class bo extends O {
  constructor(e) {
    super(e);
    H(this, qt, void 0);
    H(this, Gt, void 0);
    F(this, qt, 0), F(this, Gt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (M(this, qt) && cancelAnimationFrame(M(this, qt)), F(this, qt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), F(this, qt, 0);
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
    e && (F(this, Gt, typeof e == "string" ? document : e.current), M(this, Gt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), M(this, Gt) && M(this, Gt).removeEventListener("wheel", this._handleWheel);
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
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
qt = new WeakMap(), Gt = new WeakMap();
const hn = /* @__PURE__ */ new Map(), dn = [];
function wl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && hn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  hn.set(e, s), t != null && t.buildIn && !dn.includes(e) && dn.push(e);
}
function zt(s, t) {
  wl(s, t);
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
function Cl(s) {
  return hn.delete(s);
}
function xd(s) {
  if (typeof s == "string") {
    const t = hn.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function kl(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = xd(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && kl(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function $d(s = [], t = !0) {
  return t && dn.length && s.unshift(...dn), s != null && s.length ? kl([], s, /* @__PURE__ */ new Set()) : [];
}
function xl() {
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
function Sd(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function wo(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function ei(s, t = !1) {
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
function Nd(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = wo(b, 0), b < 1 && (b = Math.round(b * n)), b), d = {
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
    const { colTypes: C, onAddCol: $ } = b;
    C && Object.entries(C).forEach(([w, S]) => {
      y[w] || (y[w] = []), y[w].push(S);
    }), $ && v.push($);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: C = "", name: $ } = b, w = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: C
    }, S = {
      name: $,
      type: C,
      setting: w,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, I = y[C];
    I && I.forEach((U) => {
      const ct = typeof U == "function" ? U.call(s, w) : U;
      ct && Object.assign(w, ct, b);
    });
    const { fixed: D, flex: P, minWidth: T = r, maxWidth: A = o } = w, j = wo(w.width || i, i);
    S.flex = P === !0 ? 1 : typeof P == "number" ? P : 0, S.width = Sd(j < 1 ? Math.round(j * n) : j, T, A), v.forEach((U) => U.call(s, S)), p.push(S), g[S.name] = S;
    const E = D ? D === "left" ? h : m : d;
    E.list.push(S), E.totalWidth += S.width, E.width = E.totalWidth, S.flex && E.flexList.push(S), typeof w.order == "number" && (_ = !0);
  }), _) {
    const b = (C, $) => (C.setting.order ?? 0) - ($.setting.order ?? 0);
    p.sort(b), h.list.sort(b), d.list.sort(b), m.list.sort(b);
  }
  return ei(h, !0), ei(m, !0), d.widthSetting = n - h.width - m.width, ei(d), {
    list: p,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function Td({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var j;
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
  }], b = ["dtable-cell-content", s.setting.cellClass], C = (j = n.data) == null ? void 0 : j[s.name], $ = [a ?? C ?? ""], w = i ? i($, { row: n, col: s, value: C }, $t) : $, S = [], I = [], D = {}, P = {};
  let T = "div";
  w == null || w.forEach((E) => {
    if (typeof E == "object" && E && !rt(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const U = E.outer ? S : I;
      E.html ? U.push(/* @__PURE__ */ f("div", { className: k("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? p : v, E.style), E.className && (E.outer ? y : b).push(E.className), E.children && U.push(E.children), E.attrs && Object.assign(E.outer ? D : P, E.attrs)), E.tagName && !E.outer && (T = E.tagName);
    } else
      I.push(E);
  });
  const A = T;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k(y),
      style: p,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...m,
      ...D,
      children: [
        I.length > 0 && /* @__PURE__ */ f(A, { className: k(b), style: v, ...P, children: I }),
        S
      ]
    }
  );
}
function si({
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
  CellComponent: d = Td,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(s) ? s : [s], p = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + p }, children: m.reduce((v, y, b) => {
        const C = t.length;
        return t.forEach(($, w) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: k(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  w ? "" : "is-first-in-row",
                  w === C - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === g - 1 ? "is-last-row" : ""
                ),
                col: $,
                row: y,
                top: y.top - p,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${$.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function $l({
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
  i.list.length && (p = /* @__PURE__ */ f(
    si,
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
  r.list.length && (g = /* @__PURE__ */ f(
    si,
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
  return o.list.length && (_ = /* @__PURE__ */ f(
    si,
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
  )), /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-block", c),
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
var Mr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, N = (s, t, e) => (Mr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Y = (s, t, e, n) => (Mr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), pt = (s, t, e) => (Mr(s, t, "access private method"), e), Ce, Je, he, Lt, re, it, At, It, Ze, Ks, un, us, Ut, Qe, ts, Pi, Sl, Di, Nl, Li, Tl, Ri, El, qs, Wi, Fn, fn, Hi, Oi, Fi, Bi, es, Gs, Ir, Ml, Ar, Il, zi, Al;
let Pr = class extends O {
  constructor(t) {
    super(t), L(this, Pi), L(this, Di), L(this, Li), L(this, Ri), L(this, qs), L(this, es), L(this, Ir), L(this, Ar), L(this, zi), this.ref = V(), L(this, Ce, 0), L(this, Je, void 0), L(this, he, !1), L(this, Lt, void 0), L(this, re, void 0), L(this, it, []), L(this, At, void 0), L(this, It, /* @__PURE__ */ new Map()), L(this, Ze, {}), L(this, Ks, void 0), L(this, un, []), L(this, us, { in: !1 }), this.updateLayout = () => {
      N(this, Ce) && cancelAnimationFrame(N(this, Ce)), Y(this, Ce, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ce, 0);
      }));
    }, L(this, Ut, (e, n) => {
      n = n || e.type;
      const i = N(this, It).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Qe, (e) => {
      N(this, Ut).call(this, e, `window_${e.type}`);
    }), L(this, ts, (e) => {
      N(this, Ut).call(this, e, `document_${e.type}`);
    }), L(this, Fn, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, it).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), L(this, fn, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Hi, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), N(this, it).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of N(this, it))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), L(this, Oi, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), L(this, Fi, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return pt(this, es, Gs).call(this, !1);
      pt(this, es, Gs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), L(this, Bi, () => {
      pt(this, es, Gs).call(this, !1);
    }), Y(this, Je, t.id ?? `dtable-${_a(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, re, Object.freeze($d(t.plugins))), N(this, re).forEach((e) => {
      var o;
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(N(this, Ze), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = e.onCreate) == null || o.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, At)) == null ? void 0 : t.options) || N(this, Lt) || xl();
  }
  get plugins() {
    return N(this, it);
  }
  get layout() {
    return N(this, At);
  }
  get id() {
    return N(this, Je);
  }
  get data() {
    return N(this, Ze);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, us);
  }
  componentWillReceiveProps() {
    Y(this, Lt, void 0);
  }
  componentDidMount() {
    N(this, he) ? this.forceUpdate() : pt(this, qs, Wi).call(this), N(this, it).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", N(this, Hi)), this.on("keydown", N(this, Oi));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", N(this, Fi)), this.on("mouseleave", N(this, Bi))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), Y(this, Ks, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, it).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    N(this, he) ? pt(this, qs, Wi).call(this) : N(this, it).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, Ks)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of N(this, It).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), N(this, Qe)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), N(this, ts)) : t.removeEventListener(n, N(this, Ut));
    N(this, it).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), N(this, re).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), Y(this, Ze, {}), N(this, It).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    i ? i.push(e) : (N(this, It).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Qe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, ts)) : (r = this.element) == null || r.addEventListener(t, N(this, Ut)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = N(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Qe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, ts)) : (o = this.element) == null || o.removeEventListener(t, N(this, Ut)));
  }
  emitCustomEvent(t, e) {
    N(this, Ut).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
    if (!N(this, Lt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      Y(this, At, void 0);
    else if (n === "options") {
      if (Y(this, Lt, void 0), !N(this, At))
        return;
      Y(this, At, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = u(e).closest(".dtable-cell");
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
    return Z(N(this, un), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = pt(this, zi, Al).call(this);
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
      N(this, it).forEach((_) => {
        var y;
        const v = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        v && (t = v);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), g && d ? (delete h.height, p.push(
        /* @__PURE__ */ f("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ f(B, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        pt(this, Pi, Sl).call(this, t),
        pt(this, Di, Nl).call(this, t),
        pt(this, Li, Tl).call(this, t)
      ), t.scrollable && p.push(pt(this, Ri, El).call(this, t))), N(this, it).forEach((_) => {
        var y;
        const v = (y = _.onRender) == null ? void 0 : y.call(this, t);
        v && (v.style && Object.assign(h, v.style), v.className && m.push(v.className), v.children && p.push(v.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: N(this, Je),
        className: k(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
Ce = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
un = /* @__PURE__ */ new WeakMap();
us = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
ts = /* @__PURE__ */ new WeakMap();
Pi = /* @__PURE__ */ new WeakSet();
Sl = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      $l,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, Fn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ua,
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
Di = /* @__PURE__ */ new WeakSet();
Nl = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    $l,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, Fn),
      children: l
    },
    "body"
  );
};
Li = /* @__PURE__ */ new WeakSet();
Tl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ua,
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
Ri = /* @__PURE__ */ new WeakSet();
El = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      bo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, fn),
        left: n,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      bo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, fn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
qs = /* @__PURE__ */ new WeakSet();
Wi = function() {
  var s;
  Y(this, he, !1), (s = this.options.afterRender) == null || s.call(this), N(this, it).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Fn = /* @__PURE__ */ new WeakMap();
fn = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakMap();
Bi = /* @__PURE__ */ new WeakMap();
es = /* @__PURE__ */ new WeakSet();
Gs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, us);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), Y(this, us, i);
};
Ir = /* @__PURE__ */ new WeakSet();
Ml = function() {
  if (N(this, Lt))
    return !1;
  const t = { ...xl(), ...N(this, re).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return Y(this, Lt, t), Y(this, it, N(this, re).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), Y(this, un, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Ar = /* @__PURE__ */ new WeakSet();
Il = function() {
  var D, P;
  const { plugins: s } = this;
  let t = N(this, Lt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((T) => {
    var j;
    const A = (j = T.beforeLayout) == null ? void 0 : j.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(e, T.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      Y(this, he, !0);
      return;
    }
  }
  const r = Nd(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (T, A, j) => {
    var U, ct;
    const E = { data: j ?? { [a]: T }, id: T, index: c.length, top: 0 };
    if (j || (E.lazy = !0), c.push(E), ((U = t.onAddRow) == null ? void 0 : U.call(this, E, A)) !== !1) {
      for (const bt of s)
        if (((ct = bt.onAddRow) == null ? void 0 : ct.call(this, E, A)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let T = 0; T < o; T++)
      d(`${T}`, T);
  else
    Array.isArray(o) && o.forEach((T, A) => {
      typeof T == "object" ? d(`${T[a] ?? ""}`, A, T) : d(`${T ?? ""}`, A);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, h);
    T && (h = T);
  }
  for (const T of s) {
    const A = (D = T.onAddRows) == null ? void 0 : D.call(this, h);
    A && (h = A);
  }
  h.forEach((T, A) => {
    m[T.id] = T, T.index = A, T.top = T.index * l;
  });
  const { header: p, footer: g } = t, _ = p ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let y = t.height, b = 0;
  const C = h.length * l, $ = _ + v + C;
  if (typeof y == "function" && (y = y.call(this, $)), y === "auto")
    b = $;
  else if (typeof y == "object")
    b = Math.min(y.max, Math.max(y.min, $));
  else if (y === "100%") {
    const { parent: T } = this;
    if (T)
      b = T.clientHeight;
    else {
      b = 0, Y(this, he, !0);
      return;
    }
  } else
    b = y;
  const w = b - _ - v, S = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: w,
    rowsHeightTotal: C,
    header: p,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: r
  }, I = (P = t.onLayout) == null ? void 0 : P.call(this, S);
  I && Object.assign(S, I), s.forEach((T) => {
    if (T.onLayout) {
      const A = T.onLayout.call(this, S);
      A && Object.assign(S, A);
    }
  }), Y(this, At, S);
};
zi = /* @__PURE__ */ new WeakSet();
Al = function() {
  (pt(this, Ir, Ml).call(this) || !N(this, At)) && pt(this, Ar, Il).call(this);
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
Pr.addPlugin = wl;
Pr.removePlugin = Cl;
class Pl extends O {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: k("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
Pl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Dl(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: Q(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Dr(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : Q(s, e);
}
function Ll(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), et(e, s, n ?? e))) : n ?? e;
}
function Rl(s, t) {
  const { link: e } = t.col.setting, n = Dl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function Wl(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Dr(e, t, s[0])), s;
}
function Hl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function Ol(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = Ll(n, t, s[0], i), s;
}
function Vi(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Dr(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const Ed = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Vi(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          Pl,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          ur,
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
    if (e && (s = Ol(s, t, e)), s = Hl(s, t), s = Wl(s, t), n ? s = Vi(s, t) : s = Rl(s, t), i) {
      let r = s[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = Q(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, Md = zt(Ed, { buildIn: !0 }), Id = {
  html: { component: ue }
}, Ad = {
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
        component: ue,
        props: { html: Q(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Id[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && u.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), s;
  }
}, Pd = zt(Ad);
function Dd(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !Fl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Ld(s) {
  return this.state.checkedRows[s] ?? !1;
}
function Fl() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function Rd() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function Wd(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function Co(s, t, e = !1) {
  return /* @__PURE__ */ f(Tn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const ko = 'input[type="checkbox"],.dtable-checkbox', Hd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Co
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
    toggleCheckRows: Dd,
    isRowChecked: Ld,
    isAllRowChecked: Fl,
    getChecks: Rd,
    toggleCheckable: Wd
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Co(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
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
    const e = t.closest(ko);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(ko).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Od = zt(Hd);
var Bl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Bl || {});
function pn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = pn.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? pn.call(this, t.parent).level + 1 : 0, t;
}
function Fd(s) {
  return s !== void 0 ? pn.call(this, s) : this.data.nestedMap;
}
function Bd(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !zl.call(this)), t) {
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
function zl() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Vl(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Vl(s, t, o.children, n + 1)));
  }
  return t;
}
function Ul(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Ul(s, r, e, n);
  }), i;
}
function jl(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && jl(s, r.parent, e, n, i);
}
const zd = {
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
        const o = Ul(this, i, r, n);
        o != null && o.parent && jl(this, o.parent, r, n, e);
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
    getNestedInfo: Fd,
    toggleRow: Bd,
    isAllCollapsed: zl,
    getNestedRowInfo: pn
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
    ), Vl(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
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
}, Vd = zt(zd);
function ni(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: k(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(ks, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      s[0],
      /* @__PURE__ */ f("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ f("span", { children: d })
    ] }));
  return s;
}
const Ud = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ni
    },
    avatarBtn: {
      onRenderCell: ni
    },
    avatarName: {
      onRenderCell: ni
    }
  }
}, jd = zt(Ud, { buildIn: !0 }), Kd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, r = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        s[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: Q(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          r
        ] });
      } else
        s.push(r);
    }
    return s;
  }
}, qd = zt(Kd, { buildIn: !0 }), ii = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Gd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    ii(t.left.list), ii(t.center.list), ii(t.right.list);
  }
}, Yd = zt(Gd), Xd = {
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
        let C = 0;
        for (let $ = 0; $ < y; $++) {
          C += l[p + $].realWidth;
          for (let w = 0; w < b; w++) {
            const S = `C${g + $}R${h + w}`;
            S !== _ && n.add(S);
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
}, Jd = zt(Xd), Zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Bl,
  avatar: jd,
  cellspan: Jd,
  checkable: Od,
  custom: Pd,
  group: Yd,
  nested: Vd,
  renderDatetime: Ll,
  renderDatetimeCell: Ol,
  renderFormat: Dr,
  renderFormatCell: Wl,
  renderHtmlCell: Vi,
  renderLink: Dl,
  renderLinkCell: Rl,
  renderMapCell: Hl,
  rich: Md,
  sortType: qd
}, Symbol.toStringTag, { value: "Module" }));
class Es extends W {
}
Es.NAME = "DTable";
Es.Component = Pr;
Es.definePlugin = zt;
Es.removePlugin = Cl;
Es.plugins = Zd;
class Lr extends K {
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
    return R(super._getProps(t), {
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
      /* @__PURE__ */ f("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ f("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ f(q, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ f("span", { className: k("as-prefix", n), children: /* @__PURE__ */ f(B, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ f("span", { className: k("as-title", r), children: /* @__PURE__ */ f(B, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ f("span", { className: k("as-subtitle", a), children: /* @__PURE__ */ f(B, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ f(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        ot.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ f("div", { className: "kanban-header-sub-cols", children: h.map((m, p) => /* @__PURE__ */ f(Lr, { index: p, ...m }, m.name)) }, "subs") : null
    ];
  }
}
function Qd(s) {
  const { cols: t } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-header", children: [
    /* @__PURE__ */ f("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ f("div", { className: "kanban-header-cols", children: t.map((e, n) => /* @__PURE__ */ f(Lr, { index: n, ...e }, e.name)) }, "cols")
  ] });
}
class Kl extends O {
  constructor() {
    super(...arguments), this._listRef = V(), this._renderItem = (t) => {
      const { itemRender: e, lane: n, name: i } = this.props, r = e.call(this, { item: t, lane: n, col: i });
      return typeof r == "object" && r.html && u.extend(r, {}), r;
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      u(this._listRef.current).trigger("laneColResize", e[0]);
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
    return /* @__PURE__ */ f("div", { className: "kanban-lane-col", style: {
      "--kanban-col-color": o,
      "--kanban-col-width": n,
      minWidth: i,
      maxWidth: r
    }, children: [
      a ? /* @__PURE__ */ f("div", { className: k("kanban-col-content", l), children: /* @__PURE__ */ f(B, { content: a, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ f(
        Oe,
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
Kl.defaultProps = {
  watchSize: !0
};
class tu extends K {
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
    return R(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: e,
        minHeight: n,
        maxHeight: i
      }
    });
  }
  _renderCol(t, e, n, i) {
    return /* @__PURE__ */ f(Kl, { itemRender: n, lane: t, items: i[e.name], ...e }, e.name);
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
      /* @__PURE__ */ f("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ f("div", { className: k("kanban-lane-title", i), children: /* @__PURE__ */ f(B, { content: n }) }, "title"),
        ot.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ f("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function eu(s) {
  const { lanes: t, cols: e, items: n = {}, itemRender: i } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ f(tu, { index: o, cols: e, items: n[r.name], itemRender: i, ...r }, r.name)) });
}
const ht = 12, su = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function xo(s, t) {
  return t === "top" ? { x: s.x + s.width / 2, y: s.y } : t === "left" ? { x: s.x, y: s.y + s.height / 2 } : t === "right" ? { x: s.x + s.width, y: s.y + s.height / 2 } : { x: s.x + s.width / 2, y: s.y + s.height };
}
function nu(s, t) {
  return (s.x - t.x) * (s.x - t.x) + (s.y - t.y) * (s.y - t.y);
}
function iu(s, t, e, n) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = n ? [n] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = xo(s, c), m = xo(t, d), p = nu(h, m) * (su[c] === d ? 1 : 2);
      p < o && (o = p, e = c, n = d, a = h, l = m);
    });
  }), {
    fromSide: e,
    toSide: n,
    fromPos: a,
    toPos: l
  };
}
function ru(s, t) {
  return { x: (s.x + t.x) / 2, y: (s.y + t.y) / 2 };
}
function ql(s, t) {
  return {
    x: Math.min(s.x, t.x),
    y: Math.min(s.y, t.y),
    width: Math.abs(s.x - t.x),
    height: Math.abs(s.y - t.y)
  };
}
function $o(s, t, e) {
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
function ou(s, t, e, n, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = ql(s, t), d = ht - o, h = ht - a;
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
    const m = ru(s, t), p = l / 2, g = c / 2, _ = {
      ax: s.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (n === "left" ? -p : n === "right" ? p : 0),
      by: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.ax + d} ${_.ay + h} L ${m.x + d} ${m.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${s.x + d} ${s.y + h} L ${t.x + d} ${t.y + h}`;
}
function au(s) {
  const { fromRect: t, toRect: e } = s, n = `${s.from}-${s.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = iu(i, r), d = ql(l, c), { x: h, y: m, width: p, height: g } = d;
  l.x += ht - h, l.y += ht - m, c.x += ht - h, c.y += ht - m;
  const {
    weight: _ = 2,
    fromPoint: v,
    toPoint: y = "arrow"
  } = s, b = {
    left: `${0 - ht}px`,
    top: `${0 - ht}px`,
    width: `${p + 2 * ht}px`,
    height: `${g + 2 * ht}px`
  }, C = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": v && v !== "none" ? `url(#marker-start-${n}-${v})` : void 0,
    "marker-end": y && y !== "none" ? `url(#marker-end-${n}-${y})` : void 0,
    d: ou(l, c, o, a, s.shape, _)
  }, $ = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: C.d,
    class: "opacity-0"
  }, w = {
    width: p + 2 * ht,
    height: g + 2 * ht
  }, S = [];
  return s.lineStyle === "dashed" ? C["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : s.lineStyle === "dotted" && (C["stroke-dasharray"] = `${_} ${_}`), v && v !== "none" && S.push($o(v, "start", n)), y && y !== "none" && S.push($o(y, "end", n)), {
    x: h,
    y: m,
    width: p,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: b,
    svgPathProps: C,
    svgPathBackProps: $,
    svgProps: w,
    markers: S,
    padding: ht
  };
}
function lu(s) {
  const { text: t, textSize: e } = s, { x: n, y: i, padding: r, width: o, height: a, svgProps: l, markers: c, svgPathProps: d, svgPathBackProps: h, fromPos: m } = au(s);
  return /* @__PURE__ */ f("div", { className: "kanban-link", style: { left: n, top: i, width: o, height: a }, children: [
    /* @__PURE__ */ f("svg", { ...l, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
      c.length ? /* @__PURE__ */ f("defs", { children: c.map(({ path: p, id: g, ..._ }) => /* @__PURE__ */ f("marker", { ..._, id: g, children: /* @__PURE__ */ f("path", { ...p }) }, g)) }) : null,
      /* @__PURE__ */ f("path", { className: "pointer-events-auto", ...h }),
      /* @__PURE__ */ f("path", { ...d })
    ] }),
    /* @__PURE__ */ f("div", { className: "kanban-link-start-point", style: { left: m.x - r, top: m.y - r } }),
    t ? /* @__PURE__ */ f("div", { className: "kanban-link-text", style: { fontSize: `${e || 12}px` }, children: t }) : null
  ] });
}
class cu extends O {
  constructor() {
    super(...arguments), this._ref = V(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    u(t).on("laneColResize.kanban.link", (n, i) => {
      console.log("> laneColResize", n, i), this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && u(t).off(".kanban.link"), this._raf && cancelAnimationFrame(this._raf);
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._idSet], e = u(this._kanban).find(".kanban-body"), { top: n, left: i } = this._kanban.getBoundingClientRect(), r = {};
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
    return this._idSet.add(n), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ f(lu, { ...t, fromRect: r, toRect: o }, `${n}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ f("div", { className: "kanban-links", ref: this._ref, children: e.map((n) => this._renderLink(n)) });
  }
}
function hu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getCol: n, colProps: i } = t;
  let r = !1;
  const o = [], a = /* @__PURE__ */ new Map();
  return s = s.reduce((l, c, d) => {
    if (i && (c = R({}, i, c)), n) {
      const h = n.call(this, c);
      h !== !1 && (c = h || c);
    }
    return c.deleted || (typeof c.width == "function" && (c = R({}, c, {
      width: c.width.call(this, c)
    })), typeof c.order == "number" ? r = !0 : c.order = d, e == null || e.call(this, c), c.parentName !== void 0 ? o.push(c) : (a.set(c.name, c), l.push(c))), l;
  }, []), o.forEach((l) => {
    const c = a.get(l.parentName);
    c && (c.subCols = ss(c.subCols, [l], "name"));
  }), r && (s.sort(mn), [...a.values()].forEach((l) => {
    l.subCols && l.subCols.sort(mn);
  })), s;
}
function du(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getLane: n, laneProps: i } = t;
  let r = !1;
  return s = s.reduce((o, a, l) => {
    if (i && (a = R({}, i, a)), n) {
      const c = n.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.height == "function" && (a = R({}, a, {
      height: a.height.call(this, a)
    })), typeof a.order == "number" ? r = !0 : a.order = l, a.color || (a = {
      color: `hsl(${43 * ma(a.name) % 360}deg 40% 50%)`,
      ...a
    }), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && s.sort(mn), s;
}
function So(s, t, e, n, i) {
  if (!(s != null && s.length))
    return [];
  const { itemProps: r, getItem: o } = n;
  let a = !1;
  return s = s.reduce((l, c) => {
    r && (c = R({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && s.sort(mn), s;
}
function mn(s, t) {
  return s.order - t.order;
}
function ss(s, t, e) {
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
function No(s, t, e) {
  const n = ss(s.lanes, t.lanes, e), i = ss(s.cols, t.cols, e), r = ss(s.links, t.links, e), o = t.items || {}, a = Object.keys(o).reduce((l, c) => {
    const d = o[c];
    return l[c] = { ...l[c] }, Object.keys(d).forEach((h) => {
      l[c][h] = ss(l[c][h], d[h], e);
    }), l;
  }, { ...s.items });
  return { lanes: n, cols: i, items: a, links: r };
}
let Bn = class extends K {
  constructor() {
    super(...arguments), this._ref = V();
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
    const { draggable: t } = this.props;
    t && this._ref.current && (this._draggable = new Mn(this._ref.current, u.extend({
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
        const r = await xn(t, [this], { throws: !0 });
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !qr(e) || e === this._loadedSetting || this.load();
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
      changes: No(e.changes || {}, t, this.props.itemKey || "id")
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
    const { data: e, itemKey: n = "id" } = t, { data: i, changes: r } = this.state;
    let o = (i || qr(e) ? i : e) || {};
    r && (o = No(o, r, n));
    let a = !1;
    const { items: l = {} } = o, c = hu.call(this, o.cols, t, (g) => {
      g.parentName !== void 0 && (a = !0);
    }), d = /* @__PURE__ */ new Set(), h = (g) => {
      d.add(String(g[n]));
    }, m = du.call(this, o.lanes, t, (g) => {
      const _ = l[g.name];
      _ && c.forEach((v) => {
        var y;
        _[v.name] = So.call(this, _[v.name], g, v, t, h), (y = v.subCols) == null || y.forEach((b) => {
          _[b.name] = So.call(this, _[b.name], g, b, t, h);
        });
      });
    });
    let { links: p = [] } = o;
    return p = p.reduce((g, _) => (!_.deleted && d.has(String(_.from)) && d.has(String(_.to)) && g.push(_), g), []), this._data = { cols: c, lanes: m, items: l, links: p, hasSubCols: a }, this._data;
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this._data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    return R(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": t.laneNameWidth,
        "--kanban-cols-gap": t.colsGap ? to(t.colsGap) : void 0,
        "--kanban-lanes-gap": t.lanesGap ? to(t.lanesGap) : void 0
      }
    });
  }
  _getChildren(t) {
    const { cols: e, lanes: n, items: i, links: r } = this._getData(t);
    return console.log("> Kanban.render", { cols: e, lanes: n, items: i, links: r }), [
      /* @__PURE__ */ f(Qd, { cols: e }, "header"),
      /* @__PURE__ */ f(
        eu,
        {
          itemRender: t.itemRender,
          cols: e,
          lanes: n,
          items: i
        },
        "body"
      ),
      r != null && r.length ? /* @__PURE__ */ f(cu, { links: r }, "links") : null,
      t.children
    ];
  }
};
Bn.defaultProps = {
  draggable: !0,
  sticky: !0,
  itemKey: "id"
};
class uu extends Bn {
  constructor(t) {
    super(t), this._handleClickHeading = (e) => {
      u(e.target).closest("a,.btn,button").not(".kanban-group-toggle").length || this.setState((n) => ({ collapsed: !n.collapsed }));
    }, this.state = {
      ...this.state,
      collapsed: t.collapsed
    };
  }
  render(t) {
    const { heading: e, toggleFromHeading: n } = t, { collapsed: i } = this.state, r = R({ className: "kanban-heading", onClick: n ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e);
    return /* @__PURE__ */ f("div", { className: k("kanban-group", i ? "is-collapsed" : "is-expanded", e ? "has-heading" : ""), children: [
      e && /* @__PURE__ */ f(nn, { ...r }, "heading"),
      i ? null : super.render(t)
    ] });
  }
}
let Gl = class extends K {
  constructor(t) {
    super(t), this.state = {}, this._ref = V(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new In(this._ref.current, u.extend({ selector: "self", move: "scroll", onMoveStart: (n, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return n.clientY < r && n.clientY > r - 20 || n.clientX < o && n.clientX > o - 20 ? !1 : !u(n.target).closest("a,input,.btn,.state,.kanban-item").length;
    } }, typeof t == "object" ? t : null))), e) {
      const n = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? u(e) : u(this._ref.current).parent()).each((r, o) => {
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
    const e = u(t), n = e.width(), i = e.height();
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
    return R(super._getProps(t), {
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
        o || (o = V(), this._kanbanRefs.set(r, o));
        const a = n.heading !== void 0 || n.type === "group" ? uu : Bn;
        return /* @__PURE__ */ f(a, { ref: o, sticky: t.sticky, ...n }, r);
      }),
      t.children
    ];
  }
};
Gl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class Rr extends W {
}
Rr.NAME = "Kanban";
Rr.replace = !0;
Rr.Component = Bn;
class Wr extends W {
}
Wr.NAME = "KanbanList";
Wr.replace = !0;
Wr.Component = Gl;
var Yl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, To = (s, t, e) => (Yl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), fu = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Eo = (s, t, e, n) => (Yl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ke;
const pu = "nav", Ys = '[data-toggle="tab"]', mu = "active";
class Xl extends at {
  constructor() {
    super(...arguments), fu(this, ke, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(Ys);
    let i = t ? u(t).closest(Ys) : n.filter(`.${mu}`);
    if (!i.length && (i = e.find(Ys).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), To(this, ke) && clearTimeout(To(this, ke)), Eo(this, ke, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Eo(this, ke, 0);
    }, 10)));
  }
}
ke = /* @__PURE__ */ new WeakMap();
Xl.NAME = "Tabs";
u(document).on("click.tabs.zui", Ys, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${pu}`);
  e.length && Xl.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  Xo as Ajax,
  Ea as Avatar,
  Ma as BtnGroup,
  _l as Card,
  yl as CardList,
  Ua as ColorPicker,
  ar as CommonList,
  at as Component,
  W as ComponentFromReact,
  Er as ContextMenu,
  B as CustomContent,
  ua as CustomRender,
  Es as DTable,
  bl as Dashboard,
  Qa as DatePicker,
  el as DatetimePicker,
  Mn as Draggable,
  xt as Dropdown,
  K as HElement,
  ue as HtmlContent,
  q as Icon,
  Rr as Kanban,
  Wr as KanbanList,
  ya as List,
  wa as Menu,
  Nu as Messager,
  cd as Modal,
  hs as ModalBase,
  Ii as ModalTrigger,
  In as Moveable,
  rl as Nav,
  va as NestedList,
  ol as Pager,
  al as Pick,
  hl as Picker,
  mt as Popover,
  xr as PopoverPanel,
  dl as Popovers,
  fa as Portal,
  Na as ProgressCircle,
  O as ReactComponent,
  ul as SearchBox,
  Ca as SearchMenu,
  ml as SearchTree,
  fl as Sidebar,
  Eu as Sortable,
  cs as TIME_DAY,
  Xl as Tabs,
  Za as TimePicker,
  pl as Toolbar,
  Dt as Tooltip,
  Nr as Tree,
  Tr as Upload,
  gl as UploadImgs,
  Jh as addDate,
  u as cash,
  k as classes,
  qe as componentsMap,
  zc as convertBytes,
  th as create,
  G as createDate,
  oh as createPortal,
  V as createRef,
  Fc as deepGet,
  Oc as deepGetPath,
  _u as defineFn,
  Qs as delay,
  eh as disableScroll,
  yu as dom,
  xn as fetchData,
  Bc as formatBytes,
  et as formatDate,
  Ru as formatDateSpan,
  Q as formatString,
  Jo as getClassList,
  sn as getComponent,
  sh as getReactComponent,
  oi as getZData,
  $t as h,
  Z as i18n,
  qr as isFetchSetting,
  Ns as isSameDay,
  ja as isSameMonth,
  Au as isSameWeek,
  _i as isSameYear,
  Pu as isToday,
  Lu as isTomorrow,
  rt as isValidElement,
  Du as isYesterday,
  R as mergeProps,
  Xt as nextGid,
  ir as parseSize,
  da as reactComponents,
  _e as registerReactComponent,
  ca as removeUndefinedProps,
  os as render,
  ci as renderCustomContent,
  ih as renderCustomResult,
  Gr as setZData,
  Gc as shareData,
  Rt as store,
  Zo as storeData,
  Qo as takeData,
  to as toCssSize
};
//# sourceMappingURL=zui.js.map
