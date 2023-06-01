var zi = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var E = (t, e, n) => (zi(t, e, "read from private field"), n ? n.call(t) : e.get(t)), W = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, B = (t, e, n, s) => (zi(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n);
var Ue = (t, e, n) => (zi(t, e, "access private method"), n);
const qt = document, Fs = window, nl = qt.documentElement, Pe = qt.createElement.bind(qt), sl = Pe("div"), Fi = Pe("table"), Zh = Pe("tbody"), pa = Pe("tr"), { isArray: xi, prototype: il } = Array, { concat: Qh, filter: Yr, indexOf: rl, map: ol, push: tu, slice: al, some: Kr, splice: eu } = il, nu = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, su = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, iu = /<.+>/, ru = /^\w+$/;
function Xr(t, e) {
  const n = ou(e);
  return !t || !n && !Ne(e) && !X(e) ? [] : !n && su.test(t) ? e.getElementsByClassName(t.slice(1).replace(/\\/g, "")) : !n && ru.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t);
}
class ki {
  constructor(e, n) {
    if (!e)
      return;
    if (er(e))
      return e;
    let s = e;
    if (nt(e)) {
      const i = n || qt;
      if (s = nu.test(e) && Ne(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : iu.test(e) ? hl(e) : er(i) ? i.find(e) : nt(i) ? _(i).find(e) : Xr(e, i), !s)
        return;
    } else if (Ie(e))
      return this.ready(e);
    (s.nodeType || s === Fs) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(e, n) {
    return new ki(e, n);
  }
}
const b = ki.prototype, _ = b.init;
_.fn = _.prototype = b;
b.length = 0;
b.splice = eu;
typeof Symbol == "function" && (b[Symbol.iterator] = il[Symbol.iterator]);
function er(t) {
  return t instanceof ki;
}
function dn(t) {
  return !!t && t === t.window;
}
function Ne(t) {
  return !!t && t.nodeType === 9;
}
function ou(t) {
  return !!t && t.nodeType === 11;
}
function X(t) {
  return !!t && t.nodeType === 1;
}
function au(t) {
  return !!t && t.nodeType === 3;
}
function lu(t) {
  return typeof t == "boolean";
}
function Ie(t) {
  return typeof t == "function";
}
function nt(t) {
  return typeof t == "string";
}
function ht(t) {
  return t === void 0;
}
function Yn(t) {
  return t === null;
}
function ll(t) {
  return !isNaN(parseFloat(t)) && isFinite(t);
}
function Jr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
_.isWindow = dn;
_.isFunction = Ie;
_.isArray = xi;
_.isNumeric = ll;
_.isPlainObject = Jr;
function Z(t, e, n) {
  if (n) {
    let s = t.length;
    for (; s--; )
      if (e.call(t[s], s, t[s]) === !1)
        return t;
  } else if (Jr(t)) {
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
function Us(...t) {
  const e = lu(t[0]) ? t.shift() : !1, n = t.shift(), s = t.length;
  if (!n)
    return {};
  if (!s)
    return Us(e, _, n);
  for (let i = 0; i < s; i++) {
    const r = t[i];
    for (const o in r)
      e && (xi(r[o]) || Jr(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), Us(e, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
_.extend = Us;
b.extend = function(t) {
  return Us(b, t);
};
const cu = /\S+/g;
function Si(t) {
  return nt(t) ? t.match(cu) || [] : [];
}
b.toggleClass = function(t, e) {
  const n = Si(t), s = !ht(e);
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
  const e = Si(t);
  return this.each((n, s) => {
    X(s) && Z(e, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function hu(t, e) {
  if (t) {
    if (nt(t)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const n = this[0].getAttribute(t);
        return Yn(n) ? void 0 : n;
      }
      return ht(e) ? this : Yn(e) ? this.removeAttr(t) : this.each((n, s) => {
        X(s) && s.setAttribute(t, e);
      });
    }
    for (const n in t)
      this.attr(n, t[n]);
    return this;
  }
}
b.attr = hu;
b.removeClass = function(t) {
  return arguments.length ? this.toggleClass(t, !1) : this.attr("class", "");
};
b.hasClass = function(t) {
  return !!t && Kr.call(this, (e) => X(e) && e.classList.contains(t));
};
b.get = function(t) {
  return ht(t) ? al.call(this) : (t = Number(t), this[t < 0 ? t + this.length : t]);
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
function uu(t) {
  return ht(t) ? this.get().map((e) => X(e) || au(e) ? e.textContent : "").join("") : this.each((e, n) => {
    X(n) && (n.textContent = t);
  });
}
b.text = uu;
function Gt(t, e, n) {
  if (!X(t))
    return;
  const s = Fs.getComputedStyle(t, null);
  return n ? s.getPropertyValue(e) || void 0 : s[e] || t.style[e];
}
function Et(t, e) {
  return parseInt(Gt(t, e), 10) || 0;
}
function ga(t, e) {
  return Et(t, `border${e ? "Left" : "Top"}Width`) + Et(t, `padding${e ? "Left" : "Top"}`) + Et(t, `padding${e ? "Right" : "Bottom"}`) + Et(t, `border${e ? "Right" : "Bottom"}Width`);
}
const Ui = {};
function fu(t) {
  if (Ui[t])
    return Ui[t];
  const e = Pe(t);
  qt.body.insertBefore(e, null);
  const n = Gt(e, "display");
  return qt.body.removeChild(e), Ui[t] = n !== "none" ? n : "block";
}
function ma(t) {
  return Gt(t, "display") === "none";
}
function cl(t, e) {
  const n = t && (t.matches || t.webkitMatchesSelector || t.msMatchesSelector);
  return !!n && !!e && n.call(t, e);
}
function $i(t) {
  return nt(t) ? (e, n) => cl(n, t) : Ie(t) ? t : er(t) ? (e, n) => t.is(n) : t ? (e, n) => n === t : () => !1;
}
b.filter = function(t) {
  const e = $i(t);
  return _(Yr.call(this, (n, s) => e.call(n, s, n)));
};
function ge(t, e) {
  return e ? t.filter(e) : t;
}
b.detach = function(t) {
  return ge(this, t).each((e, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const du = /^\s*<(\w+)[^>]*>/, pu = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, _a = {
  "*": sl,
  tr: Zh,
  td: pa,
  th: pa,
  thead: Fi,
  tbody: Fi,
  tfoot: Fi
};
function hl(t) {
  if (!nt(t))
    return [];
  if (pu.test(t))
    return [Pe(RegExp.$1)];
  const e = du.test(t) && RegExp.$1, n = _a[e] || _a["*"];
  return n.innerHTML = t, _(n.childNodes).detach().get();
}
_.parseHTML = hl;
b.has = function(t) {
  const e = nt(t) ? (n, s) => Xr(t, s).length : (n, s) => s.contains(t);
  return this.filter(e);
};
b.not = function(t) {
  const e = $i(t);
  return this.filter((n, s) => (!nt(t) || X(s)) && !e.call(s, n, s));
};
function Zt(t, e, n, s) {
  const i = [], r = Ie(e), o = s && $i(s);
  for (let a = 0, c = t.length; a < c; a++)
    if (r) {
      const h = e(t[a]);
      h.length && tu.apply(i, h);
    } else {
      let h = t[a][e];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[e] : null;
    }
  return i;
}
function ul(t) {
  return t.multiple && t.options ? Zt(Yr.call(t.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : t.value || "";
}
function gu(t) {
  return arguments.length ? this.each((e, n) => {
    const s = n.multiple && n.options;
    if (s || wl.test(n.type)) {
      const i = xi(t) ? ol.call(t, String) : Yn(t) ? [] : [String(t)];
      s ? Z(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ht(t) || Yn(t) ? "" : t;
  }) : this[0] && ul(this[0]);
}
b.val = gu;
b.is = function(t) {
  const e = $i(t);
  return Kr.call(this, (n, s) => e.call(n, s, n));
};
_.guid = 1;
function Lt(t) {
  return t.length > 1 ? Yr.call(t, (e, n, s) => rl.call(s, e) === n) : t;
}
_.unique = Lt;
b.add = function(t, e) {
  return _(Lt(this.get().concat(_(t, e).get())));
};
b.children = function(t) {
  return ge(_(Lt(Zt(this, (e) => e.children))), t);
};
b.parent = function(t) {
  return ge(_(Lt(Zt(this, "parentNode"))), t);
};
b.index = function(t) {
  const e = t ? _(t)[0] : this[0], n = t ? this : _(e).parent().children();
  return rl.call(n, e);
};
b.closest = function(t) {
  const e = this.filter(t);
  if (e.length)
    return e;
  const n = this.parent();
  return n.length ? n.closest(t) : e;
};
b.siblings = function(t) {
  return ge(_(Lt(Zt(this, (e) => _(e).parent().children().not(e)))), t);
};
b.find = function(t) {
  return _(Lt(Zt(this, (e) => Xr(t, e))));
};
const mu = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, _u = /^$|^module$|\/(java|ecma)script/i, yu = ["type", "src", "nonce", "noModule"];
function wu(t, e) {
  const n = _(t);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (_u.test(i.type) && nl.contains(i)) {
      const r = Pe("script");
      r.text = i.textContent.replace(mu, ""), Z(yu, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), e.head.insertBefore(r, null), e.head.removeChild(r);
    }
  });
}
function vu(t, e, n, s, i) {
  s ? t.insertBefore(e, n ? t.firstChild : null) : t.nodeName === "HTML" ? t.parentNode.replaceChild(e, t) : t.parentNode.insertBefore(e, n ? t : t.nextSibling), i && wu(e, t.ownerDocument);
}
function me(t, e, n, s, i, r, o, a) {
  return Z(t, (c, h) => {
    Z(_(h), (l, u) => {
      Z(_(e), (d, f) => {
        const p = n ? u : f, g = n ? f : u, w = n ? l : d;
        vu(p, w ? g.cloneNode(!0) : g, s, i, !w);
      }, a);
    }, o);
  }, r), e;
}
b.after = function() {
  return me(arguments, this, !1, !1, !1, !0, !0);
};
b.append = function() {
  return me(arguments, this, !1, !1, !0);
};
function bu(t) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ht(t))
    return this;
  const e = /<script[\s>]/.test(t);
  return this.each((n, s) => {
    X(s) && (e ? _(s).empty().append(t) : s.innerHTML = t);
  });
}
b.html = bu;
b.appendTo = function(t) {
  return me(arguments, this, !0, !1, !0);
};
b.wrapInner = function(t) {
  return this.each((e, n) => {
    const s = _(n), i = s.contents();
    i.length ? i.wrapAll(t) : s.append(t);
  });
};
b.before = function() {
  return me(arguments, this, !1, !0);
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
  return me(arguments, this, !0, !1, !1, !1, !1, !0);
};
b.insertBefore = function(t) {
  return me(arguments, this, !0, !0);
};
b.prepend = function() {
  return me(arguments, this, !1, !0, !0, !0, !0);
};
b.prependTo = function(t) {
  return me(arguments, this, !0, !0, !0, !1, !1, !0);
};
b.contents = function() {
  return _(Lt(Zt(this, (t) => t.tagName === "IFRAME" ? [t.contentDocument] : t.tagName === "TEMPLATE" ? t.content.childNodes : t.childNodes)));
};
b.next = function(t, e, n) {
  return ge(_(Lt(Zt(this, "nextElementSibling", e, n))), t);
};
b.nextAll = function(t) {
  return this.next(t, !0);
};
b.nextUntil = function(t, e) {
  return this.next(e, !0, t);
};
b.parents = function(t, e) {
  return ge(_(Lt(Zt(this, "parentElement", !0, e))), t);
};
b.parentsUntil = function(t, e) {
  return this.parents(e, t);
};
b.prev = function(t, e, n) {
  return ge(_(Lt(Zt(this, "previousElementSibling", e, n))), t);
};
b.prevAll = function(t) {
  return this.prev(t, !0);
};
b.prevUntil = function(t, e) {
  return this.prev(e, !0, t);
};
b.map = function(t) {
  return _(Qh.apply([], ol.call(this, (e, n) => t.call(e, n, e))));
};
b.clone = function() {
  return this.map((t, e) => e.cloneNode(!0));
};
b.offsetParent = function() {
  return this.map((t, e) => {
    let n = e.offsetParent;
    for (; n && Gt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || nl;
  });
};
b.slice = function(t, e) {
  return _(al.call(this, t, e));
};
const xu = /-([a-z])/g;
function Zr(t) {
  return t.replace(xu, (e, n) => n.toUpperCase());
}
b.ready = function(t) {
  const e = () => setTimeout(t, 0, _);
  return qt.readyState !== "loading" ? e() : qt.addEventListener("DOMContentLoaded", e), this;
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
    top: e.top + Fs.pageYOffset,
    left: e.left + Fs.pageXOffset
  };
};
b.position = function() {
  const t = this[0];
  if (!t)
    return;
  const e = Gt(t, "position") === "fixed", n = e ? t.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = t.ownerDocument;
    let i = t.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Gt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== t && X(i)) {
      const r = _(i).offset();
      n.top -= r.top + Et(i, "borderTopWidth"), n.left -= r.left + Et(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - Et(t, "marginTop"),
    left: n.left - Et(t, "marginLeft")
  };
};
const fl = {
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
      return t = fl[t] || t, arguments.length < 2 ? this[0] && this[0][t] : this.each((n, s) => {
        s[t] = e;
      });
    for (const n in t)
      this.prop(n, t[n]);
    return this;
  }
};
b.removeProp = function(t) {
  return this.each((e, n) => {
    delete n[fl[t] || t];
  });
};
const ku = /^--/;
function Qr(t) {
  return ku.test(t);
}
const ji = {}, { style: Su } = sl, $u = ["webkit", "moz", "ms"];
function Cu(t, e = Qr(t)) {
  if (e)
    return t;
  if (!ji[t]) {
    const n = Zr(t), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${$u.join(`${s} `)}${s}`.split(" ");
    Z(i, (r, o) => {
      if (o in Su)
        return ji[t] = o, !1;
    });
  }
  return ji[t];
}
const Eu = {
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
function dl(t, e, n = Qr(t)) {
  return !n && !Eu[t] && ll(e) ? `${e}px` : e;
}
function Mu(t, e) {
  if (nt(t)) {
    const n = Qr(t);
    return t = Cu(t, n), arguments.length < 2 ? this[0] && Gt(this[0], t, n) : t ? (e = dl(t, e, n), this.each((s, i) => {
      X(i) && (n ? i.style.setProperty(t, e) : i.style[t] = e);
    })) : this;
  }
  for (const n in t)
    this.css(n, t[n]);
  return this;
}
b.css = Mu;
function pl(t, e) {
  try {
    return t(e);
  } catch {
    return e;
  }
}
const Tu = /^\s+|\s+$/;
function ya(t, e) {
  const n = t.dataset[e] || t.dataset[Zr(e)];
  return Tu.test(n) ? n : pl(JSON.parse, n);
}
function Ru(t, e, n) {
  n = pl(JSON.stringify, n), t.dataset[Zr(e)] = n;
}
function Au(t, e) {
  if (!t) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ya(this[0], s);
    return n;
  }
  if (nt(t))
    return arguments.length < 2 ? this[0] && ya(this[0], t) : ht(e) ? this : this.each((n, s) => {
      Ru(s, t, e);
    });
  for (const n in t)
    this.data(n, t[n]);
  return this;
}
b.data = Au;
function gl(t, e) {
  const n = t.documentElement;
  return Math.max(t.body[`scroll${e}`], n[`scroll${e}`], t.body[`offset${e}`], n[`offset${e}`], n[`client${e}`]);
}
Z([!0, !1], (t, e) => {
  Z(["Width", "Height"], (n, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    b[i] = function(r) {
      if (this[0])
        return dn(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ne(this[0]) ? gl(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (r && e ? Et(this[0], `margin${n ? "Top" : "Left"}`) + Et(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (t, e) => {
  const n = e.toLowerCase();
  b[n] = function(s) {
    if (!this[0])
      return ht(s) ? void 0 : this;
    if (!arguments.length)
      return dn(this[0]) ? this[0].document.documentElement[`client${e}`] : Ne(this[0]) ? gl(this[0], e) : this[0].getBoundingClientRect()[n] - ga(this[0], !t);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Gt(o, "boxSizing");
      o.style[n] = dl(n, i + (a === "border-box" ? ga(o, !t) : 0));
    });
  };
});
const wa = "___cd";
b.toggle = function(t) {
  return this.each((e, n) => {
    if (!X(n))
      return;
    const s = ma(n);
    (ht(t) ? s : t) ? (n.style.display = n[wa] || "", ma(n) && (n.style.display = fu(n.tagName))) : s || (n[wa] = Gt(n, "display"), n.style.display = "none");
  });
};
b.hide = function() {
  return this.toggle(!1);
};
b.show = function() {
  return this.toggle(!0);
};
const va = "___ce", to = ".", eo = { focus: "focusin", blur: "focusout" }, ml = { mouseenter: "mouseover", mouseleave: "mouseout" }, Nu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function no(t) {
  return ml[t] || eo[t] || t;
}
function so(t) {
  const e = t.split(to);
  return [e[0], e.slice(1).sort()];
}
b.trigger = function(t, e) {
  if (nt(t)) {
    const [s, i] = so(t), r = no(s);
    if (!r)
      return this;
    const o = Nu.test(r) ? "MouseEvents" : "HTMLEvents";
    t = qt.createEvent(o), t.initEvent(r, !0, !0), t.namespace = i.join(to), t.___ot = s;
  }
  t.___td = e;
  const n = t.___ot in eo;
  return this.each((s, i) => {
    n && Ie(i[t.___ot]) && (i[`___i${t.type}`] = !0, i[t.___ot](), i[`___i${t.type}`] = !1), i.dispatchEvent(t);
  });
};
function _l(t) {
  return t[va] = t[va] || {};
}
function Lu(t, e, n, s, i) {
  const r = _l(t);
  r[e] = r[e] || [], r[e].push([n, s, i]), t.addEventListener(e, i);
}
function yl(t, e) {
  return !e || !Kr.call(e, (n) => t.indexOf(n) < 0);
}
function js(t, e, n, s, i) {
  const r = _l(t);
  if (e)
    r[e] && (r[e] = r[e].filter(([o, a, c]) => {
      if (i && c.guid !== i.guid || !yl(o, n) || s && s !== a)
        return !0;
      t.removeEventListener(e, c);
    }));
  else
    for (e in r)
      js(t, e, n, s, i);
}
b.off = function(t, e, n) {
  if (ht(t))
    this.each((s, i) => {
      !X(i) && !Ne(i) && !dn(i) || js(i);
    });
  else if (nt(t))
    Ie(e) && (n = e, e = ""), Z(Si(t), (s, i) => {
      const [r, o] = so(i), a = no(r);
      this.each((c, h) => {
        !X(h) && !Ne(h) && !dn(h) || js(h, a, o, e, n);
      });
    });
  else
    for (const s in t)
      this.off(s, t[s]);
  return this;
};
b.remove = function(t) {
  return ge(this, t).detach().off(), this;
};
b.replaceWith = function(t) {
  return this.before(t).remove();
};
b.replaceAll = function(t) {
  return _(t).replaceWith(this), this;
};
function Wu(t, e, n, s, i) {
  if (!nt(t)) {
    for (const r in t)
      this.on(r, e, n, t[r], i);
    return this;
  }
  return nt(e) || (ht(e) || Yn(e) ? e = "" : ht(n) ? (n = e, e = "") : (s = n, n = e, e = "")), Ie(s) || (s = n, n = void 0), s ? (Z(Si(t), (r, o) => {
    const [a, c] = so(o), h = no(a), l = a in ml, u = a in eo;
    h && this.each((d, f) => {
      if (!X(f) && !Ne(f) && !dn(f))
        return;
      const p = function(g) {
        if (g.target[`___i${g.type}`])
          return g.stopImmediatePropagation();
        if (g.namespace && !yl(c, g.namespace.split(to)) || !e && (u && (g.target !== f || g.___ot === h) || l && g.relatedTarget && f.contains(g.relatedTarget)))
          return;
        let w = f;
        if (e) {
          let v = g.target;
          for (; !cl(v, e); )
            if (v === f || (v = v.parentNode, !v))
              return;
          w = v;
        }
        Object.defineProperty(g, "currentTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(g, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(g, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const y = s.call(w, g, g.___td);
        i && js(f, h, c, e, p), y === !1 && (g.preventDefault(), g.stopPropagation());
      };
      p.guid = s.guid = s.guid || _.guid++, Lu(f, h, c, e, p);
    });
  }), this) : this;
}
b.on = Wu;
function Du(t, e, n, s) {
  return this.on(t, e, n, s, !0);
}
b.one = Du;
const Pu = /\r?\n/g;
function Iu(t, e) {
  return `&${encodeURIComponent(t)}=${encodeURIComponent(e.replace(Pu, `\r
`))}`;
}
const Ou = /file|reset|submit|button|image/i, wl = /radio|checkbox/i;
b.serialize = function() {
  let t = "";
  return this.each((e, n) => {
    Z(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Ou.test(i.type) || wl.test(i.type) && !i.checked)
        return;
      const r = ul(i);
      if (!ht(r)) {
        const o = xi(r) ? r : [r];
        Z(o, (a, c) => {
          t += Iu(i.name, c);
        });
      }
    });
  }), t.slice(1);
};
window.$ = _;
function Hu(t, e) {
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
function Bu(t, e, n) {
  try {
    const s = Hu(t, e), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function Vi(t) {
  return !!t && typeof t == "object" && !Array.isArray(t);
}
function nr(t, ...e) {
  if (!e.length)
    return t;
  const n = e.shift();
  if (Vi(t) && Vi(n))
    for (const s in n)
      Vi(n[s]) ? (t[s] || Object.assign(t, { [s]: {} }), nr(t[s], n[s])) : Object.assign(t, { [s]: n[s] });
  return nr(t, ...e);
}
function ut(t, ...e) {
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
var io = /* @__PURE__ */ ((t) => (t[t.B = 1] = "B", t[t.KB = 1024] = "KB", t[t.MB = 1048576] = "MB", t[t.GB = 1073741824] = "GB", t[t.TB = 1099511627776] = "TB", t))(io || {});
function cp(t, e = 2, n = "") {
  return Number.isNaN(t) ? "?KB" : (n || (t < 1024 ? n = "B" : t < 1048576 ? n = "KB" : t < 1073741824 ? n = "MB" : t < 1099511627776 ? n = "GB" : n = "TB"), (t / io[n]).toFixed(e) + n);
}
const hp = (t) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  t = t.toUpperCase();
  const n = t.match(e);
  if (!n)
    return 0;
  const s = n[1];
  return t = t.replace(s, ""), Number.parseInt(t, 10) * io[s];
};
let ro = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), se;
function zu() {
  return ro;
}
function Fu(t) {
  ro = t.toLowerCase();
}
function vl(t, e) {
  se || (se = {}), typeof t == "string" && (t = { [t]: e ?? {} }), nr(se, t);
}
function Yt(t, e, n, s, i, r) {
  Array.isArray(t) ? se && t.unshift(se) : t = se ? [se, t] : [t], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || ro;
  let a;
  for (const c of t) {
    if (!c)
      continue;
    const h = c[o];
    if (!h)
      continue;
    const l = r && c === se ? `${r}.${e}` : e;
    if (a = Bu(h, l), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? ut(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Uu(t, e, n, s) {
  return Yt(void 0, t, e, n, s);
}
Yt.addLang = vl;
Yt.getLang = Uu;
Yt.getCode = zu;
Yt.setCode = Fu;
vl({
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
function bl(...t) {
  const e = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? e[o][1] = !!r : (n.set(i, e.length), e.push([i, !!r]));
  };
  return t.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? bl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), e.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const T = (...t) => bl(...t).reduce((e, [n, s]) => (s && e.push(n), e), []).join(" ");
_.classes = T;
_.fn.setClass = function(t, ...e) {
  return this.each((n, s) => {
    const i = _(s);
    t === !0 ? i.attr("class", T(i.attr("class"), ...e)) : i.addClass(T(t, ...e));
  });
};
const kn = /* @__PURE__ */ new WeakMap();
function xl(t, e, n) {
  const s = kn.has(t), i = s ? kn.get(t) : {};
  typeof e == "string" ? i[e] = n : e === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, e), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && t instanceof Element && Object.assign(i, _(t).dataset(), i), kn.set(t, i)) : kn.delete(t);
}
function ju(t, e) {
  let n = kn.get(t);
  return !n && t instanceof Element && (n = _(t).dataset()), e === void 0 ? n || {} : n == null ? void 0 : n[e];
}
_.fn.dataset = _.fn.data;
_.fn.data = function(...t) {
  if (!this.length)
    return;
  const [e, n] = t;
  return !t.length || t.length === 1 && typeof e == "string" ? ju(this[0], e) : this.each((s, i) => xl(i, e, n));
};
_.fn.removeData = function(t = null) {
  return this.each((e, n) => xl(n, t));
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
function kl(t, e) {
  const n = _(t)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: r, height: o } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: c } = window, { clientHeight: h, clientWidth: l } = document.documentElement, u = a || h, d = c || l;
  if (e != null && e.fullyCheck)
    return s >= 0 && i >= 0 && s + r <= d && i + o <= u;
  const f = i <= u && i + o >= 0, p = s <= d && s + r >= 0;
  return f && p;
}
_.fn.isVisible = function(t) {
  return this.each((e, n) => {
    kl(n, t);
  });
};
function oo(t, e) {
  const n = _(t);
  if (e !== void 0) {
    n.append(`<script>${e}<\/script>`);
    return;
  }
  n.find("script").each((s, i) => {
    oo(n, i.innerHTML), i.remove();
  });
}
_.fn.runJS = function(t) {
  return this.each((e, n) => {
    oo(n, t);
  });
};
const up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: kl,
  runJS: oo
}, Symbol.toStringTag, { value: "Module" }));
var Ci, z, Sl, st, $e, ba, $l, sr, Vs = {}, Cl = [], Vu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ao = Array.isArray;
function le(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function El(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function it(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Ci.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return ks(t, o, s, i, null);
}
function ks(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Sl };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function _e() {
  return { current: null };
}
function Ei(t) {
  return t.children;
}
function G(t, e) {
  this.props = t, this.context = e;
}
function Kn(t, e) {
  if (e == null)
    return t.__ ? Kn(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Kn(t) : null;
}
function Ml(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Ml(t);
  }
}
function xa(t) {
  (!t.__d && (t.__d = !0) && $e.push(t) && !qs.__r++ || ba !== z.debounceRendering) && ((ba = z.debounceRendering) || $l)(qs);
}
function qs() {
  var t, e, n, s, i, r, o, a;
  for ($e.sort(sr); t = $e.shift(); )
    t.__d && (e = $e.length, s = void 0, i = void 0, o = (r = (n = t).__v).__e, (a = n.__P) && (s = [], (i = le({}, r)).__v = r.__v + 1, lo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Kn(r), r.__h), Ll(s, r), r.__e != o && Ml(r)), $e.length > e && $e.sort(sr));
  qs.__r = 0;
}
function Tl(t, e, n, s, i, r, o, a, c, h) {
  var l, u, d, f, p, g, w, y = s && s.__k || Cl, v = y.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if ((f = n.__k[l] = (f = e[l]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? ks(null, f, null, null, f) : ao(f) ? ks(Ei, { children: f }, null, null, null) : f.__b > 0 ? ks(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = y[l]) === null || d && f.key == d.key && f.type === d.type)
        y[l] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((d = y[u]) && f.key == d.key && f.type === d.type) {
            y[u] = void 0;
            break;
          }
          d = null;
        }
      lo(t, f, d = d || Vs, i, r, o, a, c, h), p = f.__e, (u = f.ref) && d.ref != u && (w || (w = []), d.ref && w.push(d.ref, null, f), w.push(u, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = c = Rl(f, c, t) : c = Al(t, f, d, y, p, c), typeof n.type == "function" && (n.__d = c)) : c && d.__e == c && c.parentNode != t && (c = Kn(d));
    }
  for (n.__e = g, l = v; l--; )
    y[l] != null && (typeof n.type == "function" && y[l].__e != null && y[l].__e == n.__d && (n.__d = Nl(s).nextSibling), Dl(y[l], y[l]));
  if (w)
    for (l = 0; l < w.length; l++)
      Wl(w[l], w[++l], w[++l]);
}
function Rl(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? Rl(s, e, n) : Al(n, s, s, i, s.__e, e));
  return e;
}
function Al(t, e, n, s, i, r) {
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
function Nl(t) {
  var e, n, s;
  if (t.type == null || typeof t.type == "string")
    return t.__e;
  if (t.__k) {
    for (e = t.__k.length - 1; e >= 0; e--)
      if ((n = t.__k[e]) && (s = Nl(n)))
        return s;
  }
  return null;
}
function qu(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Gs(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Gs(t, r, e[r], n[r], s);
}
function ka(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Vu.test(e) ? n : n + "px";
}
function Gs(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || ka(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || ka(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? $a : Sa, r) : t.removeEventListener(e, r ? $a : Sa, r);
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
function Sa(t) {
  return this.l[t.type + !1](z.event ? z.event(t) : t);
}
function $a(t) {
  return this.l[t.type + !0](z.event ? z.event(t) : t);
}
function lo(t, e, n, s, i, r, o, a, c) {
  var h, l, u, d, f, p, g, w, y, v, x, k, $, N, R, M = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = z.__b) && h(e);
  try {
    t:
      if (typeof M == "function") {
        if (w = e.props, y = (h = M.contextType) && s[h.__c], v = h ? y ? y.props.value : h.__ : s, n.__c ? g = (l = e.__c = n.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? e.__c = l = new M(w, v) : (e.__c = l = new G(w, v), l.constructor = M, l.render = Yu), y && y.sub(l), l.props = w, l.state || (l.state = {}), l.context = v, l.__n = s, u = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = le({}, l.__s)), le(l.__s, M.getDerivedStateFromProps(w, l.__s))), d = l.props, f = l.state, l.__v = e, u)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && w !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, v) === !1 || e.__v === n.__v) {
            for (e.__v !== n.__v && (l.props = w, l.state = l.__s, l.__d = !1), l.__e = !1, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), x = 0; x < l._sb.length; x++)
              l.__h.push(l._sb[x]);
            l._sb = [], l.__h.length && o.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(d, f, p);
          });
        }
        if (l.context = v, l.props = w, l.__P = t, k = z.__r, $ = 0, "prototype" in M && M.prototype.render) {
          for (l.state = l.__s, l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++$ < 25);
        l.state = l.__s, l.getChildContext != null && (s = le(le({}, s), l.getChildContext())), u || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, f)), Tl(t, ao(R = h != null && h.type === Ei && h.key == null ? h.props.children : h) ? R : [R], e, n, s, i, r, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), g && (l.__E = l.__ = null), l.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Gu(n.__e, e, n, s, i, r, o, c);
    (h = z.diffed) && h(e);
  } catch (D) {
    e.__v = null, (c || r != null) && (e.__e = a, e.__h = !!c, r[r.indexOf(a)] = null), z.__e(D, e, n);
  }
}
function Ll(t, e) {
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
function Gu(t, e, n, s, i, r, o, a) {
  var c, h, l, u = n.props, d = e.props, f = e.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, r[p] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), r = null, a = !1;
  }
  if (f === null)
    u === d || a && t.data === d || (t.data = d);
  else {
    if (r = r && Ci.call(t.childNodes), h = (u = n.props || Vs).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < t.attributes.length; p++)
          u[t.attributes[p].name] = t.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (qu(t, d, u, i, a), l)
      e.__k = [];
    else if (Tl(t, ao(p = e.props.children) ? p : [p], e, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Kn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && El(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || f === "progress" && !p || f === "option" && p !== u.value) && Gs(t, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Gs(t, "checked", p, u.checked, !1));
  }
  return t;
}
function Wl(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    z.__e(s, n);
  }
}
function Dl(t, e, n) {
  var s, i;
  if (z.unmount && z.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Wl(s, null, e)), (s = t.__c) != null) {
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
      s[i] && Dl(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || El(t.__e), t.__ = t.__e = t.__d = void 0;
}
function Yu(t, e, n) {
  return this.constructor(t, n);
}
function Xn(t, e, n) {
  var s, i, r;
  z.__ && z.__(t, e), i = (s = typeof n == "function") ? null : n && n.__k || e.__k, r = [], lo(e, t = (!s && n || e).__k = it(Ei, null, [t]), i || Vs, Vs, e.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : e.firstChild ? Ci.call(e.childNodes) : null, r, !s && n ? n : i ? i.__e : e.firstChild, s), Ll(r, t);
}
Ci = Cl.slice, z = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Sl = 0, st = function(t) {
  return t != null && t.constructor === void 0;
}, G.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = le({}, this.state), typeof t == "function" && (t = t(le({}, n), this.props)), t && le(n, t), t != null && this.__v && (e && this._sb.push(e), xa(this));
}, G.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), xa(this));
}, G.prototype.render = Ei, $e = [], $l = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, sr = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, qs.__r = 0;
var Pl = function(t, e, n, s) {
  var i;
  e[0] = 0;
  for (var r = 1; r < e.length; r++) {
    var o = e[r++], a = e[r] ? (e[0] |= o ? 1 : 2, n[e[r++]]) : e[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[e[++r]] = a : o === 6 ? s[1][e[++r]] += a + "" : o ? (i = t.apply(a, Pl(t, a, n, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[r - 2] = 0, e[r] = i)) : s.push(a);
  }
  return s;
}, Ca = /* @__PURE__ */ new Map();
function Ku(t) {
  var e = Ca.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Ca.set(this, e)), (e = Pl(this, e.get(t) || (e.set(t, e = function(n) {
    for (var s, i, r = 1, o = "", a = "", c = [0], h = function(d) {
      r === 1 && (d || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, d, o) : r === 3 && (d || o) ? (c.push(3, d, o), r = 2) : r === 2 && o === "..." && d ? c.push(4, d, 0) : r === 2 && o && !d ? c.push(5, 0, !0, o) : r >= 5 && ((o || !d && r === 5) && (c.push(r, 0, o, i), r = 6), d && (c.push(r, d, 0, i), r = 6)), o = "";
    }, l = 0; l < n.length; l++) {
      l && (r === 1 && h(), h(l));
      for (var u = 0; u < n[l].length; u++)
        s = n[l][u], r === 1 ? s === "<" ? (h(), c = [c], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[l][u + 1] === ">") ? (h(), r === 3 && (c = c[0]), r = c, (c = c[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, c = c[0]);
    }
    return h(), c;
  }(t)), e), arguments, [])).length > 1 ? e : e[0];
}
const fp = Ku.bind(it);
function Xu(t) {
  const { tagName: e = "div", class: n, className: s, style: i, children: r, attrs: o, ...a } = t;
  return it(e, { class: T(n, s), style: i, ...a, ...o }, r);
}
var Ju = 0;
function m(t, e, n, s, i, r) {
  var o, a, c = {};
  for (a in e)
    a == "ref" ? o = e[a] : c[a] = e[a];
  var h = { type: t, props: c, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ju, __source: i, __self: r };
  if (typeof t == "function" && (o = t.defaultProps))
    for (a in o)
      c[a] === void 0 && (c[a] = o[a]);
  return z.vnode && z.vnode(h), h;
}
var ns;
class Il extends G {
  constructor() {
    super(...arguments);
    W(this, ns, _e());
  }
  componentDidMount() {
    this.props.executeScript && _(E(this, ns).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ m(Xu, { ref: E(this, ns), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
ns = new WeakMap();
function Zu(t) {
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
  } = t, u = [n], d = { ...s }, f = [], p = [];
  return i.forEach((g) => {
    const w = [];
    typeof g == "string" && a && a[g] && (g = a[g]), typeof g == "function" ? c ? w.push(...c.call(o, g, f, ...r)) : w.push(...g.call(o, f, ...r) ?? []) : w.push(g), w.forEach((y) => {
      y != null && (typeof y == "object" && !st(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? f.push(
        /* @__PURE__ */ m("div", { className: T(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? p.push(y.__html) : (y.style && Object.assign(d, y.style), y.className && u.push(y.className), y.children && f.push(y.children), y.attrs && Object.assign(l, y.attrs)) : f.push(y));
    });
  }), p.length && Object.assign(l, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: d,
    ...l
  }, f];
}
function co({
  tag: t = "div",
  ...e
}) {
  const [n, s] = Zu(e);
  return it(t, n, ...s);
}
function ir(t) {
  if (st(t))
    return t;
  if (typeof t == "string")
    return t.startsWith("icon-") || (t = `icon-${t}`), /* @__PURE__ */ m("i", { class: `icon ${t}` });
}
function Qu(t) {
  return this.getChildContext = () => t.context, t.children;
}
function tf(t) {
  const e = this, n = t._container;
  e.componentWillUnmount = function() {
    Xn(null, e._temp), e._temp = null, e._container = null;
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
  }), Xn(
    it(Qu, { context: e.context }, t._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function ef(t, e) {
  const n = it(tf, { _vnode: t, _container: e });
  return n.containerInfo = e, n;
}
var Ol = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, yn = (t, e, n) => (Ol(t, e, "read from private field"), n ? n.call(t) : e.get(t)), qi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, wn = (t, e, n, s) => (Ol(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), xe, Sn, Ss;
const Hl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    qi(this, xe, void 0), qi(this, Sn, void 0), qi(this, Ss, void 0);
    const { KEY: n, DATA_KEY: s, DEFAULT: i } = this.constructor, r = _(t);
    if (r.data(n))
      throw new Error("[ZUI] The component has been initialized on element.");
    const o = _.guid++;
    wn(this, Ss, o), r.data(n, this).attr(s, `${o}`), wn(this, Sn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), wn(this, xe, { ...i, ...r.dataset() }), this.setOptions(e), this.init(), requestAnimationFrame(() => {
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
    return yn(this, Sn);
  }
  /**
   * Get the component options.
   */
  get options() {
    return yn(this, xe);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return yn(this, Ss);
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
    this.$element.off(t).removeData(e).attr(n, null), wn(this, xe, void 0), wn(this, Sn, void 0), this.emit("destroyed");
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t) {
    return t && _.extend(yn(this, xe), t), yn(this, xe);
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
    return Yt(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Yt(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
let Wt = Hl;
xe = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
Ss = /* @__PURE__ */ new WeakMap();
Wt.DEFAULT = {};
Wt.NAME = Hl.name;
class rt extends Wt {
  constructor() {
    super(...arguments), this.ref = _e();
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
    Xn(
      it(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
var ho, q, Bl, zl, In, Ea, Fl = {}, Ul = [], nf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ce(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function jl(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function mn(t, e, n) {
  var s, i, r, o = {};
  for (r in e)
    r == "key" ? s = e[r] : r == "ref" ? i = e[r] : o[r] = e[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ho.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null)
    for (r in t.defaultProps)
      o[r] === void 0 && (o[r] = t.defaultProps[r]);
  return $s(t, o, s, i, null);
}
function $s(t, e, n, s, i) {
  var r = { type: t, props: e, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Bl };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function sf() {
  return { current: null };
}
function uo(t) {
  return t.children;
}
function On(t, e) {
  this.props = t, this.context = e;
}
function Jn(t, e) {
  if (e == null)
    return t.__ ? Jn(t.__, t.__.__k.indexOf(t) + 1) : null;
  for (var n; e < t.__k.length; e++)
    if ((n = t.__k[e]) != null && n.__e != null)
      return n.__e;
  return typeof t.type == "function" ? Jn(t) : null;
}
function Vl(t) {
  var e, n;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
    return Vl(t);
  }
}
function Ma(t) {
  (!t.__d && (t.__d = !0) && In.push(t) && !Ys.__r++ || Ea !== q.debounceRendering) && ((Ea = q.debounceRendering) || setTimeout)(Ys);
}
function Ys() {
  for (var t; Ys.__r = In.length; )
    t = In.sort(function(e, n) {
      return e.__v.__b - n.__v.__b;
    }), In = [], t.some(function(e) {
      var n, s, i, r, o, a;
      e.__d && (o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ce({}, r)).__v = r.__v + 1, Kl(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? Jn(r), r.__h), of(s, r), r.__e != o && Vl(r)));
    });
}
function ql(t, e, n, s, i, r, o, a, c, h) {
  var l, u, d, f, p, g, w, y = s && s.__k || Ul, v = y.length;
  for (n.__k = [], l = 0; l < e.length; l++)
    if ((f = n.__k[l] = (f = e[l]) == null || typeof f == "boolean" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? $s(null, f, null, null, f) : Array.isArray(f) ? $s(uo, { children: f }, null, null, null) : f.__b > 0 ? $s(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = y[l]) === null || d && f.key == d.key && f.type === d.type)
        y[l] = void 0;
      else
        for (u = 0; u < v; u++) {
          if ((d = y[u]) && f.key == d.key && f.type === d.type) {
            y[u] = void 0;
            break;
          }
          d = null;
        }
      Kl(t, f, d = d || Fl, i, r, o, a, c, h), p = f.__e, (u = f.ref) && d.ref != u && (w || (w = []), d.ref && w.push(d.ref, null, f), w.push(u, f.__c || p, f)), p != null ? (g == null && (g = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = c = Gl(f, c, t) : c = Yl(t, f, d, y, p, c), typeof n.type == "function" && (n.__d = c)) : c && d.__e == c && c.parentNode != t && (c = Jn(d));
    }
  for (n.__e = g, l = v; l--; )
    y[l] != null && Jl(y[l], y[l]);
  if (w)
    for (l = 0; l < w.length; l++)
      Xl(w[l], w[++l], w[++l]);
}
function Gl(t, e, n) {
  for (var s, i = t.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = t, e = typeof s.type == "function" ? Gl(s, e, n) : Yl(n, s, s, i, s.__e, e));
  return e;
}
function Yl(t, e, n, s, i, r) {
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
function rf(t, e, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in e || Ks(t, r, null, n[r], s);
  for (r in e)
    i && typeof e[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === e[r] || Ks(t, r, e[r], n[r], s);
}
function Ta(t, e, n) {
  e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || nf.test(e) ? n : n + "px";
}
function Ks(t, e, n, s, i) {
  var r;
  t:
    if (e === "style")
      if (typeof n == "string")
        t.style.cssText = n;
      else {
        if (typeof s == "string" && (t.style.cssText = s = ""), s)
          for (e in s)
            n && e in n || Ta(t.style, e, "");
        if (n)
          for (e in n)
            s && n[e] === s[e] || Ta(t.style, e, n[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      r = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + r] = n, n ? s || t.addEventListener(e, r ? Aa : Ra, r) : t.removeEventListener(e, r ? Aa : Ra, r);
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
function Ra(t) {
  this.l[t.type + !1](q.event ? q.event(t) : t);
}
function Aa(t) {
  this.l[t.type + !0](q.event ? q.event(t) : t);
}
function Kl(t, e, n, s, i, r, o, a, c) {
  var h, l, u, d, f, p, g, w, y, v, x, k, $, N, R, M = e.type;
  if (e.constructor !== void 0)
    return null;
  n.__h != null && (c = n.__h, a = e.__e = n.__e, e.__h = null, r = [a]), (h = q.__b) && h(e);
  try {
    t:
      if (typeof M == "function") {
        if (w = e.props, y = (h = M.contextType) && s[h.__c], v = h ? y ? y.props.value : h.__ : s, n.__c ? g = (l = e.__c = n.__c).__ = l.__E : ("prototype" in M && M.prototype.render ? e.__c = l = new M(w, v) : (e.__c = l = new On(w, v), l.constructor = M, l.render = lf), y && y.sub(l), l.props = w, l.state || (l.state = {}), l.context = v, l.__n = s, u = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), M.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ce({}, l.__s)), ce(l.__s, M.getDerivedStateFromProps(w, l.__s))), d = l.props, f = l.state, u)
          M.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && w !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(w, v), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(w, l.__s, v) === !1 || e.__v === n.__v) {
            for (l.props = w, l.state = l.__s, e.__v !== n.__v && (l.__d = !1), l.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(D) {
              D && (D.__ = e);
            }), x = 0; x < l._sb.length; x++)
              l.__h.push(l._sb[x]);
            l._sb = [], l.__h.length && o.push(l);
            break t;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(w, l.__s, v), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(d, f, p);
          });
        }
        if (l.context = v, l.props = w, l.__v = e, l.__P = t, k = q.__r, $ = 0, "prototype" in M && M.prototype.render) {
          for (l.state = l.__s, l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), N = 0; N < l._sb.length; N++)
            l.__h.push(l._sb[N]);
          l._sb = [];
        } else
          do
            l.__d = !1, k && k(e), h = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++$ < 25);
        l.state = l.__s, l.getChildContext != null && (s = ce(ce({}, s), l.getChildContext())), u || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(d, f)), R = h != null && h.type === uo && h.key == null ? h.props.children : h, ql(t, Array.isArray(R) ? R : [R], e, n, s, i, r, o, a, c), l.base = e.__e, e.__h = null, l.__h.length && o.push(l), g && (l.__E = l.__ = null), l.__e = !1;
      } else
        r == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = af(n.__e, e, n, s, i, r, o, c);
    (h = q.diffed) && h(e);
  } catch (D) {
    e.__v = null, (c || r != null) && (e.__e = a, e.__h = !!c, r[r.indexOf(a)] = null), q.__e(D, e, n);
  }
}
function of(t, e) {
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
function af(t, e, n, s, i, r, o, a) {
  var c, h, l, u = n.props, d = e.props, f = e.type, p = 0;
  if (f === "svg" && (i = !0), r != null) {
    for (; p < r.length; p++)
      if ((c = r[p]) && "setAttribute" in c == !!f && (f ? c.localName === f : c.nodeType === 3)) {
        t = c, r[p] = null;
        break;
      }
  }
  if (t == null) {
    if (f === null)
      return document.createTextNode(d);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), r = null, a = !1;
  }
  if (f === null)
    u === d || a && t.data === d || (t.data = d);
  else {
    if (r = r && ho.call(t.childNodes), h = (u = n.props || Fl).dangerouslySetInnerHTML, l = d.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (u = {}, p = 0; p < t.attributes.length; p++)
          u[t.attributes[p].name] = t.attributes[p].value;
      (l || h) && (l && (h && l.__html == h.__html || l.__html === t.innerHTML) || (t.innerHTML = l && l.__html || ""));
    }
    if (rf(t, d, u, i, a), l)
      e.__k = [];
    else if (p = e.props.children, ql(t, Array.isArray(p) ? p : [p], e, n, s, i && f !== "foreignObject", r, o, r ? r[0] : n.__k && Jn(n, 0), a), r != null)
      for (p = r.length; p--; )
        r[p] != null && jl(r[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== t.value || f === "progress" && !p || f === "option" && p !== u.value) && Ks(t, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== t.checked && Ks(t, "checked", p, u.checked, !1));
  }
  return t;
}
function Xl(t, e, n) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (s) {
    q.__e(s, n);
  }
}
function Jl(t, e, n) {
  var s, i;
  if (q.unmount && q.unmount(t), (s = t.ref) && (s.current && s.current !== t.__e || Xl(s, null, e)), (s = t.__c) != null) {
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
      s[i] && Jl(s[i], e, n || typeof t.type != "function");
  n || t.__e == null || jl(t.__e), t.__ = t.__e = t.__d = void 0;
}
function lf(t, e, n) {
  return this.constructor(t, n);
}
ho = Ul.slice, q = { __e: function(t, e, n, s) {
  for (var i, r, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Bl = 0, zl = function(t) {
  return t != null && t.constructor === void 0;
}, On.prototype.setState = function(t, e) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof t == "function" && (t = t(ce({}, n), this.props)), t && ce(n, t), t != null && this.__v && (e && this._sb.push(e), Ma(this));
}, On.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ma(this));
}, On.prototype.render = uo, In = [], Ys.__r = 0;
var cf = 0;
function Ct(t, e, n, s, i) {
  var r, o, a = {};
  for (o in e)
    o == "ref" ? r = e[o] : a[o] = e[o];
  var c = { type: t, props: a, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --cf, __source: i, __self: s };
  if (typeof t == "function" && (r = t.defaultProps))
    for (o in r)
      a[o] === void 0 && (a[o] = r[o]);
  return q.vnode && q.vnode(c), c;
}
function hf({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return mn(t, {
    className: T(e),
    style: s,
    ...i
  }, n);
}
function Zl({
  component: t = "a",
  className: e,
  children: n,
  attrs: s,
  url: i,
  disabled: r,
  active: o,
  icon: a,
  text: c,
  target: h,
  trailingIcon: l,
  hint: u,
  onClick: d,
  ...f
}) {
  const p = [
    ir(a),
    /* @__PURE__ */ Ct("span", { className: "text", children: c }),
    typeof n == "function" ? n() : n,
    ir(l)
  ];
  return mn(t, {
    className: T(e, { disabled: r, active: o }),
    title: u,
    [t === "a" ? "href" : "data-url"]: i,
    [t === "a" ? "target" : "data-target"]: h,
    onClick: d,
    ...f,
    ...s
  }, ...p);
}
function uf({
  component: t = "div",
  className: e,
  text: n,
  attrs: s,
  children: i,
  style: r,
  onClick: o
}) {
  return mn(t, {
    className: T(e),
    style: r,
    onClick: o,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function ff({
  component: t = "div",
  className: e,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return mn(t, {
    className: T(e),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function df({ type: t, ...e }) {
  return /* @__PURE__ */ Ct(co, { ...e });
}
function Ql({
  component: t = "div",
  className: e,
  children: n,
  style: s,
  attrs: i
}) {
  return mn(t, {
    className: T(e),
    style: s,
    ...i
  }, n);
}
const rr = class extends On {
  constructor() {
    super(...arguments), this.ref = sf();
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
    return s && Object.assign(r, s[e.type || "item"]), (i || e.onClick) && (r.onClick = this.handleItemClick.bind(this, r, n, e.onClick)), r.className = T(r.className), r;
  }
  renderItem(t, e, n) {
    const s = this.getItemRenderProps(t, e, n), { itemRender: i } = t;
    if (i) {
      if (typeof i == "object") {
        const p = i[e.type || "item"];
        if (p)
          return /* @__PURE__ */ Ct(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, mn);
        if (zl(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: c, rootClass: h, rootStyle: l, rootChildren: u, ...d } = s;
    if (r === "html")
      return /* @__PURE__ */ Ct(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, d.className),
          ...c,
          style: l || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || rr.ItemComponents[r] : o;
    return Object.assign(d, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), this.renderTypedItem(f, {
      className: T(h),
      children: u,
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
    const { children: s, className: i, key: r, ...o } = e, { activeClass: a = "", activeKey: c, activeIcon: h } = this.props, l = h && c === r ? /* @__PURE__ */ Ct("i", { className: `checked icon icon-${h}` }) : null, u = c === r;
    return /* @__PURE__ */ Ct(
      "li",
      {
        className: T("action-menu-item", `${this.name}-${n.type}`, i, { [a]: u }),
        ...o,
        children: [
          /* @__PURE__ */ Ct(t, { ...n }),
          l,
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
      beforeDestroy: u,
      activeClass: d,
      activeKey: f,
      ...p
    } = t, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ Ct(g, { class: T(this.name, i), style: n, ...p, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      o
    ] });
  }
};
let Oe = rr;
Oe.ItemComponents = {
  divider: hf,
  item: Zl,
  heading: uf,
  space: ff,
  custom: df,
  basic: Ql
};
Oe.ROOT_TAG = "menu";
Oe.NAME = "action-menu";
class tc extends rt {
}
tc.NAME = "ActionMenu";
tc.Component = Oe;
function ec({
  ...t
}) {
  return /* @__PURE__ */ Ct(Zl, { ...t });
}
var nc = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, mt = (t, e, n) => (nc(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Gi = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, pf = (t, e, n, s) => (nc(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Cs, Pt, $n;
let fo = class extends Oe {
  constructor(e) {
    super(e), Gi(this, Cs, /* @__PURE__ */ new Set()), Gi(this, Pt, void 0), Gi(this, $n, (n, s, i) => {
      this.toggleNestedMenu(n, s), i.preventDefault();
    }), pf(this, Pt, e.nestedShow === void 0), mt(this, Pt) && (this.state = { nestedShow: e.defaultNestedShow ?? {} });
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
    const s = this.constructor, { name: i, controlledMenu: r, nestedShow: o, beforeDestroy: a, beforeRender: c, itemRender: h, activeClass: l, activeKey: u, onClickItem: d, afterRender: f, commonItemProps: p, activeIcon: g } = this.props;
    return /* @__PURE__ */ Ct(
      s,
      {
        items: n,
        name: i,
        nestedShow: mt(this, Pt) ? this.state.nestedShow : o,
        nestedTrigger: this.nestedTrigger,
        controlledMenu: r || this,
        commonItemProps: p,
        onClickItem: d,
        afterRender: f,
        beforeRender: c,
        beforeDestroy: a,
        itemRender: h,
        activeClass: l,
        activeKey: u,
        activeIcon: g
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
    mt(this, Cs).add(r);
    const o = this.isNestedMenuShow(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ], i.component = ec), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: mt(this, $n).bind(this, r, !0),
        onMouseLeave: mt(this, $n).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: c } = i;
      i.onClick = (h) => {
        mt(this, $n).call(this, r, void 0, h), c == null || c(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isNestedMenuShow(e) {
    const n = mt(this, Pt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[e] : !!n;
  }
  toggleNestedMenu(e, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(e, n);
    if (!mt(this, Pt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...mt(this, Cs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
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
    mt(this, Pt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    mt(this, Pt) && this.setState({ nestedShow: !1 });
  }
};
Cs = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
fo.ItemComponents = {
  item: ec
};
class sc extends rt {
}
sc.NAME = "ActionMenuNested";
sc.Component = fo;
let Mi = class extends fo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: n } = e;
    return n === void 0 && (n = e.items.some((s) => s.icon)), e.className = T(e.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": e.items.some((s) => this.isNestedItem(s)),
      "menu-popup": e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
};
Mi.NAME = "menu";
class ic extends rt {
}
ic.NAME = "Menu";
ic.Component = Mi;
class Kt extends G {
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
      loading: u,
      loadingIcon: d,
      loadingText: f,
      icon: p,
      text: g,
      trailingIcon: w,
      caret: y,
      square: v,
      hint: x,
      ...k
    } = this.props, $ = e || (a ? "a" : "button"), N = g == null || typeof g == "string" && !g.length || u && !f, R = y && N && !p && !w && !o && !u;
    return it(
      $,
      {
        className: T("btn", n, r, {
          "btn-caret": R,
          disabled: h || u,
          active: l,
          loading: u,
          square: v === void 0 ? !R && !o && N : v
        }, i ? `size-${i}` : ""),
        title: x,
        [$ === "a" ? "href" : "data-url"]: a,
        [$ === "a" ? "target" : "data-target"]: c,
        type: $ === "button" ? s : void 0,
        ...k
      },
      u ? /* @__PURE__ */ m("i", { class: `spin icon ${d || "icon-spinner-snake"}` }) : ir(p),
      N ? null : /* @__PURE__ */ m("span", { className: "text", children: u ? f : g }),
      u ? null : o,
      u ? null : typeof w == "string" ? /* @__PURE__ */ m("i", { class: `icon ${w}` }) : w,
      u ? null : y ? /* @__PURE__ */ m("span", { className: typeof y == "string" ? `caret-${y}` : "caret" }) : null
    );
  }
}
function gf({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Kt, { type: n, ...s });
}
function ls(t) {
  return t.split("-")[1];
}
function po(t) {
  return t === "y" ? "height" : "width";
}
function Me(t) {
  return t.split("-")[0];
}
function cs(t) {
  return ["top", "bottom"].includes(Me(t)) ? "x" : "y";
}
function Na(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = cs(e), c = po(a), h = s[c] / 2 - i[c] / 2, l = a === "x";
  let u;
  switch (Me(e)) {
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
  switch (ls(e)) {
    case "start":
      u[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && l ? -1 : 1);
  }
  return u;
}
const mf = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: l, y: u } = Na(h, s, c), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: w, fn: y } = a[g], { x: v, y: x, data: k, reset: $ } = await y({ x: l, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    l = v ?? l, u = x ?? u, f = { ...f, [w]: { ...f[w], ...k } }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (d = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : $.rects), { x: l, y: u } = Na(h, d, c)), g = -1);
  }
  return { x: l, y: u, placement: d, strategy: i, middlewareData: f };
};
function rc(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function Xs(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function oc(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: c } = t, { boundary: h = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = rc(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], w = Xs(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: l, strategy: c })), y = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, k = Xs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: y, offsetParent: v, strategy: c }) : y);
  return { top: (w.top - k.top + p.top) / x.y, bottom: (k.bottom - w.bottom + p.bottom) / x.y, left: (w.left - k.left + p.left) / x.x, right: (k.right - w.right + p.right) / x.x };
}
const _f = Math.min, yf = Math.max;
function or(t, e, n) {
  return yf(t, _f(e, n));
}
const wf = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: c, elements: h } = e;
  if (n == null)
    return {};
  const l = rc(s), u = { x: i, y: r }, d = cs(o), f = po(d), p = await c.getDimensions(n), g = d === "y", w = g ? "top" : "left", y = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", x = a.reference[f] + a.reference[d] - u[d] - a.floating[f], k = u[d] - a.reference[d], $ = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
  let N = $ ? $[v] : 0;
  N && await (c.isElement == null ? void 0 : c.isElement($)) || (N = h.floating[v] || a.floating[f]);
  const R = x / 2 - k / 2, M = l[w], D = N - p[f] - l[y], C = N / 2 - p[f] / 2 + R, L = or(M, C, D), U = ls(o) != null && C != L && a.reference[f] / 2 - (C < M ? l[w] : l[y]) - p[f] / 2 < 0;
  return { [d]: u[d] - (U ? C < M ? M - C : D - C : 0), data: { [d]: L, centerOffset: C - L } };
} }), vf = ["top", "right", "bottom", "left"];
vf.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const bf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Js(t) {
  return t.replace(/left|right|bottom|top/g, (e) => bf[e]);
}
function xf(t, e, n) {
  n === void 0 && (n = !1);
  const s = ls(t), i = cs(t), r = po(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = Js(o)), { main: o, cross: Js(o) };
}
const kf = { start: "end", end: "start" };
function Yi(t) {
  return t.replace(/start|end/g, (e) => kf[e]);
}
const go = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: c } = e, { mainAxis: h = !0, crossAxis: l = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = t, w = Me(s), y = Me(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = u || (y || !p ? [Js(o)] : function(L) {
      const U = Js(L);
      return [Yi(L), U, Yi(U)];
    }(o));
    u || f === "none" || x.push(...function(L, U, j, H) {
      const O = ls(L);
      let V = function(gt, we, kt) {
        const Qt = ["left", "right"], ve = ["right", "left"], Be = ["top", "bottom"], A = ["bottom", "top"];
        switch (gt) {
          case "top":
          case "bottom":
            return kt ? we ? ve : Qt : we ? Qt : ve;
          case "left":
          case "right":
            return we ? Be : A;
          default:
            return [];
        }
      }(Me(L), j === "start", H);
      return O && (V = V.map((gt) => gt + "-" + O), U && (V = V.concat(V.map(Yi)))), V;
    }(o, p, f, v));
    const k = [o, ...x], $ = await oc(e, g), N = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && N.push($[w]), l) {
      const { main: L, cross: U } = xf(s, r, v);
      N.push($[L], $[U]);
    }
    if (R = [...R, { placement: s, overflows: N }], !N.every((L) => L <= 0)) {
      var M, D;
      const L = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, U = k[L];
      if (U)
        return { data: { index: L, overflows: R }, reset: { placement: U } };
      let j = (D = R.filter((H) => H.overflows[0] <= 0).sort((H, O) => H.overflows[1] - O.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!j)
        switch (d) {
          case "bestFit": {
            var C;
            const H = (C = R.map((O) => [O.placement, O.overflows.filter((V) => V > 0).reduce((V, gt) => V + gt, 0)]).sort((O, V) => O[1] - V[1])[0]) == null ? void 0 : C[0];
            H && (j = H);
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
}, Sf = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: c, elements: h } = r, l = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), u = Me(a), d = ls(a), f = cs(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = l && f ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: y, crossAxis: v, alignmentAxis: x } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return d && typeof x == "number" && (v = d === "end" ? -1 * x : x), f ? { x: v * g, y: y * p } : { x: y * p, y: v * g };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function $f(t) {
  return t === "x" ? "y" : "x";
}
const Cf = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: s, placement: i } = e, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (w) => {
      let { x: y, y: v } = w;
      return { x: y, y: v };
    } }, ...c } = t, h = { x: n, y: s }, l = await oc(e, c), u = cs(Me(i)), d = $f(u);
    let f = h[u], p = h[d];
    if (r) {
      const w = u === "y" ? "bottom" : "right";
      f = or(f + l[u === "y" ? "top" : "left"], f, f - l[w]);
    }
    if (o) {
      const w = d === "y" ? "bottom" : "right";
      p = or(p + l[d === "y" ? "top" : "left"], p, p - l[w]);
    }
    const g = a.fn({ ...e, [u]: f, [d]: p });
    return { ...g, data: { x: g.x - n, y: g.y - s } };
  } };
};
function lt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function wt(t) {
  return lt(t).getComputedStyle(t);
}
function ac(t) {
  return t instanceof lt(t).Node;
}
function de(t) {
  return ac(t) ? (t.nodeName || "").toLowerCase() : "";
}
let ps;
function lc() {
  if (ps)
    return ps;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (ps = t.brands.map((e) => e.brand + "/" + e.version).join(" "), ps) : navigator.userAgent;
}
function bt(t) {
  return t instanceof lt(t).HTMLElement;
}
function ct(t) {
  return t instanceof lt(t).Element;
}
function La(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof lt(t).ShadowRoot || t instanceof ShadowRoot;
}
function Zn(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = wt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Ef(t) {
  return ["table", "td", "th"].includes(de(t));
}
function ar(t) {
  const e = /firefox/i.test(lc()), n = wt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function lr() {
  return /^((?!chrome|android).)*safari/i.test(lc());
}
function Ti(t) {
  return ["html", "body", "#document"].includes(de(t));
}
const Wa = Math.min, Hn = Math.max, Zs = Math.round;
function cc(t) {
  const e = wt(t);
  let n = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = bt(t), r = i ? t.offsetWidth : n, o = i ? t.offsetHeight : s, a = Zs(n) !== r || Zs(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, fallback: a };
}
function hc(t) {
  return ct(t) ? t : t.contextElement;
}
const uc = { x: 1, y: 1 };
function Qe(t) {
  const e = hc(t);
  if (!bt(e))
    return uc;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = cc(e);
  let o = (r ? Zs(n.width) : n.width) / s, a = (r ? Zs(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function Le(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = hc(t);
  let c = uc;
  e && (s ? ct(s) && (c = Qe(s)) : c = Qe(t));
  const h = a ? lt(a) : window, l = lr() && n;
  let u = (o.left + (l && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, d = (o.top + (l && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, f = o.width / c.x, p = o.height / c.y;
  if (a) {
    const g = lt(a), w = s && ct(s) ? lt(s) : s;
    let y = g.frameElement;
    for (; y && s && w !== g; ) {
      const v = Qe(y), x = y.getBoundingClientRect(), k = getComputedStyle(y);
      x.x += (y.clientLeft + parseFloat(k.paddingLeft)) * v.x, x.y += (y.clientTop + parseFloat(k.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, p *= v.y, u += x.x, d += x.y, y = lt(y).frameElement;
    }
  }
  return Xs({ width: f, height: p, x: u, y: d });
}
function he(t) {
  return ((ac(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Ri(t) {
  return ct(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function fc(t) {
  return Le(he(t)).left + Ri(t).scrollLeft;
}
function pn(t) {
  if (de(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || La(t) && t.host || he(t);
  return La(e) ? e.host : e;
}
function dc(t) {
  const e = pn(t);
  return Ti(e) ? e.ownerDocument.body : bt(e) && Zn(e) ? e : dc(e);
}
function Bn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = dc(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = lt(s);
  return i ? e.concat(r, r.visualViewport || [], Zn(s) ? s : []) : e.concat(s, Bn(s));
}
function Da(t, e, n) {
  let s;
  if (e === "viewport")
    s = function(o, a) {
      const c = lt(o), h = he(o), l = c.visualViewport;
      let u = h.clientWidth, d = h.clientHeight, f = 0, p = 0;
      if (l) {
        u = l.width, d = l.height;
        const g = lr();
        (!g || g && a === "fixed") && (f = l.offsetLeft, p = l.offsetTop);
      }
      return { width: u, height: d, x: f, y: p };
    }(t, n);
  else if (e === "document")
    s = function(o) {
      const a = he(o), c = Ri(o), h = o.ownerDocument.body, l = Hn(a.scrollWidth, a.clientWidth, h.scrollWidth, h.clientWidth), u = Hn(a.scrollHeight, a.clientHeight, h.scrollHeight, h.clientHeight);
      let d = -c.scrollLeft + fc(o);
      const f = -c.scrollTop;
      return wt(h).direction === "rtl" && (d += Hn(a.clientWidth, h.clientWidth) - l), { width: l, height: u, x: d, y: f };
    }(he(t));
  else if (ct(e))
    s = function(o, a) {
      const c = Le(o, !0, a === "fixed"), h = c.top + o.clientTop, l = c.left + o.clientLeft, u = bt(o) ? Qe(o) : { x: 1, y: 1 };
      return { width: o.clientWidth * u.x, height: o.clientHeight * u.y, x: l * u.x, y: h * u.y };
    }(e, n);
  else {
    const o = { ...e };
    if (lr()) {
      var i, r;
      const a = lt(t);
      o.x -= ((i = a.visualViewport) == null ? void 0 : i.offsetLeft) || 0, o.y -= ((r = a.visualViewport) == null ? void 0 : r.offsetTop) || 0;
    }
    s = o;
  }
  return Xs(s);
}
function pc(t, e) {
  const n = pn(t);
  return !(n === e || !ct(n) || Ti(n)) && (wt(n).position === "fixed" || pc(n, e));
}
function Pa(t, e) {
  return bt(t) && wt(t).position !== "fixed" ? e ? e(t) : t.offsetParent : null;
}
function Ia(t, e) {
  const n = lt(t);
  if (!bt(t))
    return n;
  let s = Pa(t, e);
  for (; s && Ef(s) && wt(s).position === "static"; )
    s = Pa(s, e);
  return s && (de(s) === "html" || de(s) === "body" && wt(s).position === "static" && !ar(s)) ? n : s || function(i) {
    let r = pn(i);
    for (; bt(r) && !Ti(r); ) {
      if (ar(r))
        return r;
      r = pn(r);
    }
    return null;
  }(t) || n;
}
function Mf(t, e, n) {
  const s = bt(e), i = he(e), r = Le(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((de(e) !== "body" || Zn(i)) && (o = Ri(e)), bt(e)) {
      const c = Le(e, !0);
      a.x = c.x + e.clientLeft, a.y = c.y + e.clientTop;
    } else
      i && (a.x = fc(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
const Tf = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, l) {
    const u = l.get(h);
    if (u)
      return u;
    let d = Bn(h).filter((w) => ct(w) && de(w) !== "body"), f = null;
    const p = wt(h).position === "fixed";
    let g = p ? pn(h) : h;
    for (; ct(g) && !Ti(g); ) {
      const w = wt(g), y = ar(g);
      y || w.position !== "fixed" || (f = null), (p ? !y && !f : !y && w.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Zn(g) && !y && pc(h, g)) ? d = d.filter((v) => v !== g) : f = w, g = pn(g);
    }
    return l.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], c = o.reduce((h, l) => {
    const u = Da(e, l, i);
    return h.top = Hn(u.top, h.top), h.right = Wa(u.right, h.right), h.bottom = Wa(u.bottom, h.bottom), h.left = Hn(u.left, h.left), h;
  }, Da(e, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = bt(n), r = he(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((de(n) !== "body" || Zn(r)) && (o = Ri(n)), bt(n))) {
    const h = Le(n);
    a = Qe(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + c.x, y: e.y * a.y - o.scrollTop * a.y + c.y };
}, isElement: ct, getDimensions: function(t) {
  return cc(t);
}, getOffsetParent: Ia, getDocumentElement: he, getScale: Qe, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || Ia, r = this.getDimensions;
  return { reference: Mf(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => wt(t).direction === "rtl" };
function gc(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, c = i || r ? [...ct(t) ? Bn(t) : t.contextElement ? Bn(t.contextElement) : [], ...Bn(e)] : [];
  c.forEach((d) => {
    const f = !ct(d) && d.toString().includes("V");
    !i || a && !f || d.addEventListener("scroll", n, { passive: !0 }), r && d.addEventListener("resize", n);
  });
  let h, l = null;
  o && (l = new ResizeObserver(() => {
    n();
  }), ct(t) && !a && l.observe(t), ct(t) || !t.contextElement || a || l.observe(t.contextElement), l.observe(e));
  let u = a ? Le(t) : null;
  return a && function d() {
    const f = Le(t);
    !u || f.x === u.x && f.y === u.y && f.width === u.width && f.height === u.height || n(), u = f, h = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    c.forEach((f) => {
      i && f.removeEventListener("scroll", n), r && f.removeEventListener("resize", n);
    }), (d = l) == null || d.disconnect(), l = null, a && cancelAnimationFrame(h);
  };
}
const mo = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Tf, ...n }, r = { ...i.platform, _c: s };
  return mf(t, e, { ...i, platform: r });
};
let Rf = class extends Mi {
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
      middleware: [go()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var e;
    return (e = this.ref.current) == null ? void 0 : e.parentElement;
  }
  createPopper() {
    const e = this.getPopperOptions();
    this.ref.current && mo(this.getPopperElement(), this.ref.current, e).then(({ x: n, y: s }) => {
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
    return e.className = T(e.className, "menu-popup"), e;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var _o = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Dt = (t, e, n) => (_o(t, e, "read from private field"), n ? n.call(t) : e.get(t)), je = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, gs = (t, e, n, s) => (_o(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Oa = (t, e, n) => (_o(t, e, "access private method"), n), te, Cn, Es, Ms, cr, mc, hr, _c;
const Ki = "show", Af = '[data-toggle="contextmenu"]';
class Mt extends Wt {
  constructor() {
    super(...arguments), je(this, cr), je(this, hr), je(this, te, void 0), je(this, Cn, void 0), je(this, Es, void 0), je(this, Ms, void 0);
  }
  get isShown() {
    return Dt(this, te) && _(Dt(this, te)).hasClass(Ki);
  }
  get menu() {
    return Dt(this, te) || this.ensureMenu();
  }
  get trigger() {
    return Dt(this, Es) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  show(e) {
    return this.isShown || (gs(this, Es, e), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (_(this.menu).addClass(Ki), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = Dt(this, Ms)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (_(Dt(this, te)).removeClass(Ki), this.emit("hidden"), !0);
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    var e;
    super.destroy(), this.hide(), (e = Dt(this, te)) == null || e.remove();
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
    }), gs(this, te, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: e, strategy: n } = this.options, s = {
      middleware: [],
      placement: e,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(go())), s;
  }
  createPopper() {
    const e = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    gs(this, Ms, gc(n, s, () => {
      mo(n, s, e).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        _(s).css({ left: `${i}px`, top: `${r}px` });
        const c = a.split("-")[0], h = Oa(this, cr, mc).call(this, c);
        if (o.arrow && this.arrowEl) {
          const { x: l, y: u } = o.arrow;
          _(this.arrowEl).css({
            left: l != null ? `${l}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...Oa(this, hr, _c).call(this, c)
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
    return !e || this.emit("updateMenu", e, this.trigger).defaultPrevented ? !1 : (Xn(it(Rf, e), this.menu), !0);
  }
  getPopperElement() {
    return Dt(this, Cn) || gs(this, Cn, {
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
    }), Dt(this, Cn);
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
te = /* @__PURE__ */ new WeakMap();
Cn = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakSet();
mc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
hr = /* @__PURE__ */ new WeakSet();
_c = function(t) {
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
Mt.MENU_CLASS = "contextmenu";
Mt.NAME = "ContextMenu";
Mt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0
};
_(document).on("contextmenu", (t) => {
  const e = _(t.target);
  if (e.closest(`.${Mt.MENU_CLASS}`).length)
    return;
  const n = e.closest(Af).not(":disabled,.disabled");
  n.length && (Mt.ensure(n).show(t), t.preventDefault());
}).on("click", Mt.clear.bind(Mt));
var yo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, En = (t, e, n) => (yo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ms = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ur = (t, e, n, s) => (yo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Nf = (t, e, n) => (yo(t, e, "access private method"), n), zn, Mn, Qs, fr, yc;
const Ha = '[data-toggle="dropdown"]', wc = class extends Mt {
  constructor() {
    super(...arguments), ms(this, fr), ms(this, zn, !1), ms(this, Mn, 0), this.hideLater = () => {
      En(this, Qs).call(this), ur(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, ms(this, Qs, () => {
      clearTimeout(En(this, Mn)), ur(this, Mn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && wc.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const n = super.show(t);
    return n && (!En(this, zn) && this.isHover && Nf(this, fr, yc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    En(this, zn) && _(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((n = t.middleware) == null || n.push(Sf(e)), (s = t.middleware) == null || s.push(wf({ element: this.arrowEl }))), t;
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
let ue = wc;
zn = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Qs = /* @__PURE__ */ new WeakMap();
fr = /* @__PURE__ */ new WeakSet();
yc = function() {
  _(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, En(this, Qs)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), ur(this, zn, !0);
};
ue.MENU_CLASS = "dropdown-menu";
ue.NAME = "Dropdown";
ue.DEFAULT = {
  ...Mt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
_(document).on("click", function(t) {
  const e = _(t.target).closest(Ha).not(":disabled,.disabled");
  if (e.length) {
    const n = ue.ensure(e);
    n.options.trigger === "click" && n.toggle();
  } else
    ue.clear({ event: t });
}).on("mouseover", function(t) {
  var s, i;
  const e = (i = (s = t.target).closest) == null ? void 0 : i.call(s, Ha);
  if (!e)
    return;
  const n = ue.ensure(e);
  n.isHover && n.show();
});
let _s = 0;
window.addEventListener("scroll", (t) => {
  _s && clearTimeout(_s), _s = window.setTimeout(() => {
    ue.clear({ event: t }), _s = 0;
  }, 50);
}, !0);
var ss, sn;
class Lf extends G {
  constructor(n) {
    var s;
    super(n);
    W(this, ss, void 0);
    W(this, sn, _e());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, sn);
  }
  get triggerElement() {
    return E(this, sn).current;
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
    }), B(this, ss, ue.ensure(this.triggerElement, {
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
    (n = E(this, ss)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, sn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...s, children: n });
  }
}
ss = new WeakMap(), sn = new WeakMap();
class Wf extends Lf {
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
    return s.caret = i, /* @__PURE__ */ m(Kt, { ...s });
  }
}
function vc({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(Wf, { type: n, ...s });
}
let bc = class extends G {
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
    return /* @__PURE__ */ m(Kt, { ...i }, s);
  }
  renderItem(e, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = e, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const c = i.call(this, a, it);
      if (st(c))
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
      afterRender: u,
      beforeDestroy: d,
      ...f
    } = e;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function Df({
  key: t,
  type: e,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ m(bc, { type: n, ...s });
}
let Nt = class extends Oe {
  beforeRender() {
    const { gap: e, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = T(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: T(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ m(e, { ...a });
  }
};
Nt.ItemComponents = {
  item: gf,
  dropdown: vc,
  "btn-group": Df
};
Nt.ROOT_TAG = "nav";
Nt.NAME = "toolbar";
Nt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Pf({
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
  let u;
  a === !0 ? u = /* @__PURE__ */ m(Kt, { className: "alert-close btn ghost", square: !0, onClick: c, children: /* @__PURE__ */ m("span", { class: "close" }) }) : st(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ m(Kt, { ...a, onClick: c }));
  const d = st(n) ? n : n ? /* @__PURE__ */ m(Nt, { ...n }) : null;
  return /* @__PURE__ */ m("div", { className: T("alert", t), style: e, ...l, children: [
    st(h) ? h : typeof h == "string" ? /* @__PURE__ */ m("i", { className: `icon ${h}` }) : null,
    st(i) ? i : /* @__PURE__ */ m("div", { className: T("alert-content", r), children: [
      st(s) ? s : s && /* @__PURE__ */ m("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    o
  ] });
}
function If(t) {
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
let Of = class extends G {
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
    return /* @__PURE__ */ m(
      Pf,
      {
        className: T("messager", c, i, o === !0 ? If(r) : o, a ? "in" : ""),
        ...l
      }
    );
  }
};
var Hf = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Bf = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, vn = (t, e, n) => (Hf(t, e, "access private method"), n), ke, Ge;
class wo extends rt {
  constructor() {
    super(...arguments), Bf(this, ke), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: e }) => {
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
    this.render(), this.emit("show"), vn(this, ke, Ge).call(this, () => {
      this._show = !0, this.render(), vn(this, ke, Ge).call(this, () => {
        this.emit("shown");
        const { time: e } = this.options;
        e && vn(this, ke, Ge).call(this, () => this.hide(), e);
      });
    }, 100);
  }
  hide() {
    this._show && vn(this, ke, Ge).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), vn(this, ke, Ge).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ke = /* @__PURE__ */ new WeakSet();
Ge = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
};
wo.NAME = "MessagerItem";
wo.Component = Of;
var vo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Te = (t, e, n) => (vo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ys = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Ts = (t, e, n, s) => (vo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), xc = (t, e, n) => (vo(t, e, "access private method"), n), tn, Ft, dr, kc, bo, Sc;
const $c = class extends Wt {
  constructor() {
    super(...arguments), ys(this, dr), ys(this, bo), ys(this, tn, void 0), ys(this, Ft, void 0);
  }
  get isShown() {
    var t;
    return !!((t = Te(this, Ft)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), xc(this, dr, kc).call(this).show();
  }
  hide() {
    var t;
    (t = Te(this, Ft)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, s = $c.ensure(e || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let xo = $c;
tn = /* @__PURE__ */ new WeakMap();
Ft = /* @__PURE__ */ new WeakMap();
dr = /* @__PURE__ */ new WeakSet();
kc = function() {
  if (Te(this, Ft))
    Te(this, Ft).setOptions(this.options);
  else {
    const t = xc(this, bo, Sc).call(this), e = new wo(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), Ts(this, tn, void 0), Ts(this, Ft, void 0);
    }), Ts(this, Ft, e);
  }
  return Te(this, Ft);
};
bo = /* @__PURE__ */ new WeakSet();
Sc = function() {
  if (Te(this, tn))
    return Te(this, tn);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = _(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let n = e.find(`#messager-${this.gid}`);
  return n.length || (n = _(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), Ts(this, tn, n[0])), n[0];
};
xo.NAME = "messager";
xo.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
_(document).on("zui.messager.show", (t, e) => {
  e && xo.show(e);
});
let ko = class extends G {
  render() {
    const { percent: e, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: r } = this.props, o = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ m("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, stroke: r, "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - e) / 100, "stroke-width": s }),
      /* @__PURE__ */ m("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${o}px` }, children: Math.round(e) })
    ] });
  }
};
ko.NAME = "zui.progress-circle";
ko.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Cc extends rt {
}
Cc.NAME = "ProgressCircle";
Cc.Component = ko;
let zf = class extends G {
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
    } = this.props, u = this.state.checked ? 1 : 0, d = e || "div", f = typeof r == "string" ? /* @__PURE__ */ m("i", { class: `icon ${r}` }) : r, p = typeof o == "string" ? /* @__PURE__ */ m("i", { class: `icon ${o}` }) : o, g = [
      /* @__PURE__ */ m("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ m("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return it(
      d,
      {
        className: T("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...l
      },
      ...g,
      s
    );
  }
};
class Ec extends rt {
}
Ec.NAME = "Switch";
Ec.Component = zf;
/*! js-cookie v3.0.1 | MIT */
function ws(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var s in n)
      t[s] = n[s];
  }
  return t;
}
var Ff = {
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
function pr(t, e) {
  function n(i, r, o) {
    if (!(typeof document > "u")) {
      o = ws({}, e, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
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
          ws({}, r, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return pr(this.converter, ws({}, this.attributes, i));
      },
      withConverter: function(i) {
        return pr(ws({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Uf = pr(Ff, { path: "/" });
window.$ && Object.assign(window.$, { cookie: Uf });
var zt;
class jf {
  constructor(e = "") {
    W(this, zt, void 0);
    typeof e == "object" ? B(this, zt, e) : B(this, zt, document.appendChild(document.createComment(e)));
  }
  on(e, n, s) {
    E(this, zt).addEventListener(e, n, s);
  }
  once(e, n, s) {
    E(this, zt).addEventListener(e, n, { once: !0, ...s });
  }
  off(e, n, s) {
    E(this, zt).removeEventListener(e, n, s);
  }
  emit(e) {
    return E(this, zt).dispatchEvent(e), e;
  }
}
zt = new WeakMap();
const Ba = /* @__PURE__ */ new Set([
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
class Mc extends jf {
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
    return typeof e == "string" && (Ba.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), super.emit(Mc.createEvent(e, n));
  }
  static createEvent(e, n) {
    return typeof e == "string" && (Ba.has(e) ? (e = new Event(e), Object.assign(e, { detail: n })) : e = new CustomEvent(e, { detail: n })), e;
  }
}
let Ai = (t = 21) => crypto.getRandomValues(new Uint8Array(t)).reduce((e, n) => (n &= 63, n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_", e), "");
var is, ie, $t, rn, on, Rs;
const ca = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, n = "local") {
    W(this, on);
    W(this, is, void 0);
    W(this, ie, void 0);
    W(this, $t, void 0);
    W(this, rn, void 0);
    B(this, is, n), B(this, ie, `ZUI_STORE:${e ?? Ai()}`), B(this, $t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, is);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, rn) || B(this, rn, new ca(E(this, ie), "session")), E(this, rn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(e, n) {
    const s = E(this, $t).getItem(Ue(this, on, Rs).call(this, e));
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
    E(this, $t).setItem(Ue(this, on, Rs).call(this, e), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    E(this, $t).removeItem(Ue(this, on, Rs).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let n = 0; n < E(this, $t).length; n++) {
      const s = E(this, $t).key(n);
      if (s != null && s.startsWith(E(this, ie))) {
        const i = E(this, $t).getItem(s);
        typeof i == "string" && e(s.substring(E(this, ie).length + 1), JSON.parse(i));
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
let ti = ca;
is = new WeakMap(), ie = new WeakMap(), $t = new WeakMap(), rn = new WeakMap(), on = new WeakSet(), Rs = function(e) {
  return `${E(this, ie)}:${e}`;
};
const Vf = new ti("DEFAULT");
function qf(t, e = "local") {
  return new ti(t, e);
}
Object.assign(Vf, { create: qf });
function Gf(t) {
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
function Yf(t) {
  const [e, n, s] = typeof t == "string" ? Gf(t) : t;
  return e * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function za(t, e) {
  return Yf(t) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Fa(t, e = 255) {
  return Math.min(Math.max(t, 0), e);
}
function Kf(t, e, n) {
  t = t % 360 / 360, e = Fa(e), n = Fa(n);
  const s = n <= 0.5 ? n * (e + 1) : n + e - n * e, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(t + 1 / 3) * 255,
    r(t) * 255,
    r(t - 1 / 3) * 255
  ];
}
function Xf(t) {
  let e = 0;
  if (typeof t != "string" && (t = String(t)), t && t.length)
    for (let n = 0; n < t.length; ++n)
      e += (n + 1) * t.charCodeAt(n);
  return e;
}
function Jf(t, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(t) ? t.length <= e ? t : t.substring(t.length - e) : /^[A-Za-z\d\s]+$/.test(t) ? t[0].toUpperCase() : t.length <= e ? t : t.substring(0, e);
}
let Tc = class extends G {
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
      src: u,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: g,
      ...w
    } = this.props, y = ["avatar", e], v = { ...n, background: o, color: a };
    let x = 32;
    s && (typeof s == "number" ? (v.width = `${s}px`, v.height = `${s}px`, v.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (y.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? y.push("circle") : r && (typeof r == "number" ? v.borderRadius = `${r}px` : y.push(`rounded-${r}`));
    let k;
    if (u)
      y.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: u, alt: c });
    else if (c != null && c.length) {
      const $ = Jf(c, l);
      if (y.push("has-text", `has-text-${$.length}`), o)
        !a && o && (v.color = za(o));
      else {
        const R = h ?? c, M = (typeof R == "number" ? R : Xf(R)) * d % 360;
        if (v.background = `hsl(${M},${f * 100}%,${p * 100}%)`, !a) {
          const D = Kf(M, f, p);
          v.color = za(D);
        }
      }
      let N;
      x && x < 14 * $.length && (N = { transform: `scale(${x / (14 * $.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": x, className: "avatar-text", style: N, children: $ });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: T(y),
        style: v,
        ...w,
        children: [
          k,
          g
        ]
      }
    );
  }
};
class Rc extends rt {
}
Rc.NAME = "Avatar";
Rc.Component = Tc;
class Ac extends rt {
}
Ac.NAME = "BtnGroup";
Ac.Component = bc;
var So = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ce = (t, e, n) => (So(t, e, "read from private field"), n ? n.call(t) : e.get(t)), bn = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, Fn = (t, e, n, s) => (So(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Xi = (t, e, n) => (So(t, e, "access private method"), n), Ke, As, Se, gr, Tn, Ns;
const Ji = "show", Ua = "in", Zf = '[data-dismiss="modal"]', Ls = class extends Wt {
  constructor() {
    super(...arguments), bn(this, Tn), bn(this, Ke, 0), bn(this, As, void 0), bn(this, Se, void 0), bn(this, gr, (t) => {
      const e = t.target;
      (e.closest(Zf) || this.options.backdrop === !0 && !e.closest(".modal-dialog") && e.closest(".modal")) && this.hide();
    });
  }
  get modalElement() {
    return this.element;
  }
  get isShown() {
    return this.modalElement.classList.contains(Ji);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", Ce(this, gr)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: t } = this;
      if (t) {
        const e = new ResizeObserver(() => {
          if (!this.isShown)
            return;
          const n = t.clientWidth, s = t.clientHeight;
          (!Ce(this, Se) || Ce(this, Se)[0] !== n || Ce(this, Se)[1] !== s) && (Fn(this, Se, [n, s]), this.layout());
        });
        e.observe(t), Fn(this, As, e);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var t;
    super.destroy(), (t = Ce(this, As)) == null || t.disconnect();
  }
  show(t) {
    if (this.isShown)
      return !1;
    this.setOptions(t);
    const { modalElement: e } = this, { animation: n, backdrop: s, className: i, style: r } = this.options;
    return _(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Ji, i).css({
      zIndex: `${Ls.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Xi(this, Tn, Ns).call(this, () => {
      _(e).addClass(Ua), Xi(this, Tn, Ns).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.isShown ? (_(this.modalElement).removeClass(Ua), this.emit("hide"), Xi(this, Tn, Ns).call(this, () => {
      _(this.modalElement).removeClass(Ji), this.emit("hidden");
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
    Fn(this, Se, [i, r]), typeof t == "function" && (t = t({ width: i, height: r }));
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
    (e = Ls.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ls.query(t)) == null || e.show();
  }
};
let ye = Ls;
Ke = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
Se = /* @__PURE__ */ new WeakMap();
gr = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakSet();
Ns = function(t, e) {
  Ce(this, Ke) && (clearTimeout(Ce(this, Ke)), Fn(this, Ke, 0)), t && (this.options.animation ? Fn(this, Ke, window.setTimeout(t, e ?? this.options.transTime)) : t());
};
ye.NAME = "Modal";
ye.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
ye.zIndex = 2e3;
_(window).on("resize", () => {
  ye.getAll().forEach((t) => {
    const e = t;
    e.isShown && e.options.responsive && e.layout();
  });
});
_(document).on("zui.modal.hide", (t, e) => {
  ye.hide(e == null ? void 0 : e.target);
});
class Nc extends G {
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
    return st(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-header", children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: n
    } = this.props;
    return !n && !e ? null : st(e) ? e : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ m(Nt, { ...e }) : null,
      n ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e
    } = this.props;
    return e ? st(e) ? e : /* @__PURE__ */ m("div", { className: "modal-body", children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerActions: n
    } = this.props;
    return st(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: "modal-footer", children: n ? /* @__PURE__ */ m(Nt, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ m("div", { className: T("modal-dialog", e), style: n, children: /* @__PURE__ */ m("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
Nc.defaultProps = { closeBtn: !0 };
var an, ln, cn;
class Qf extends G {
  constructor() {
    super(...arguments);
    W(this, an, void 0);
    W(this, ln, void 0);
    W(this, cn, void 0);
    B(this, an, _e()), this.state = {}, B(this, cn, () => {
      var i, r;
      const n = (r = (i = E(this, an).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = E(this, ln);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, c = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: c });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, ln, s);
    });
  }
  componentDidMount() {
    E(this, cn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, ln)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, an),
        onLoad: E(this, cn)
      }
    );
  }
}
an = new WeakMap(), ln = new WeakMap(), cn = new WeakMap();
var $o = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Ve = (t, e, n) => ($o(t, e, "read from private field"), n ? n.call(t) : e.get(t)), qe = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, xn = (t, e, n, s) => ($o(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Xe = (t, e, n) => ($o(t, e, "access private method"), n), Ws, Ds, It, Qn, Ni, mr, Lc, Ps, _r;
function td(t, e) {
  const { custom: n, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function ed(t, e) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: c = !0 } = e, l = await (await fetch(s, i)).text();
  if (n !== "html")
    try {
      const u = JSON.parse(l);
      return {
        title: o,
        ...r,
        ...u
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [l] : {
    title: o,
    ...r,
    body: n === "html" ? /* @__PURE__ */ m(Il, { className: "modal-body", html: l, executeScript: c }) : l
  };
}
async function nd(t, e) {
  const { url: n, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ m(Qf, { url: n })
  };
}
const sd = {
  custom: td,
  ajax: ed,
  iframe: nd
}, ee = class extends ye {
  constructor() {
    super(...arguments), qe(this, Qn), qe(this, mr), qe(this, Ps), qe(this, Ws, void 0), qe(this, Ds, void 0), qe(this, It, void 0);
  }
  get id() {
    return Ve(this, Ds);
  }
  get loading() {
    var t;
    return (t = this.modalElement) == null ? void 0 : t.classList.contains(ee.LOADING_CLASS);
  }
  get modalElement() {
    let t = Ve(this, Ws);
    if (!t) {
      const { id: e } = this;
      t = _(this.element).find(`#${e}`)[0], t || (t = _("<div>").attr("id", e).css(this.options.style || {}).setClass("modal modal-async", this.options.className).appendTo(this.element)[0]), xn(this, Ws, t);
    }
    return t;
  }
  afterInit() {
    super.afterInit(), xn(this, Ds, this.options.id || `modal-${Ai()}`);
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
    Ve(this, It) && clearTimeout(Ve(this, It));
    const { modalElement: t, options: e } = this, { type: n, loadTimeout: s } = e, i = sd[n];
    if (!i)
      return console.warn(`Modal: Cannot build modal with type "${n}"`), !1;
    t.classList.add(ee.LOADING_CLASS), await Xe(this, mr, Lc).call(this), s && xn(this, It, window.setTimeout(() => {
      xn(this, It, 0), Xe(this, Ps, _r).call(this, this.options.timeoutTip);
    }, s));
    const r = await i.call(this, t, e);
    return r === !1 ? await Xe(this, Ps, _r).call(this, this.options.failedTip) : r && typeof r == "object" && await Xe(this, Qn, Ni).call(this, r), Ve(this, It) && (clearTimeout(Ve(this, It)), xn(this, It, 0)), t.classList.remove(ee.LOADING_CLASS), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...s } = t, i = new ee(n, { show: !0, ...s });
      i.one("hidden", () => e(i)), i.show();
    });
  }
  static alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, ...c } = t;
    let h = /* @__PURE__ */ m("div", { children: n });
    s ? h = /* @__PURE__ */ m("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ m("div", { className: `icon ${s} ${i}` }),
      h
    ] }) : h = /* @__PURE__ */ m("div", { className: "modal-body", children: h });
    const l = [];
    (Array.isArray(r) ? r : [r]).forEach((f) => {
      f = {
        ...typeof f == "string" ? { key: f } : f
      }, typeof f.key == "string" && (f.text || (f.text = Yt.getLang(f.key, f.key)), f.btnType || (f.btnType = `btn-wide ${f.key === "confirm" ? "primary" : "btn-default"}`)), f && l.push(f);
    }, []);
    let u;
    const d = l.length ? {
      gap: 4,
      items: l,
      onClickItem: ({ item: f, event: p }) => {
        const g = ee.query(p.target);
        u = f.key, (o == null ? void 0 : o(f, g)) !== !1 && g && g.hide();
      }
    } : void 0;
    return ee.open({
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: h,
      backdrop: "static",
      custom: { footerActions: d, ...typeof a == "function" ? a() : a },
      ...c
    }).then(() => u);
  }
  static confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...s } = t;
    return ee.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (i, r) => {
        n == null || n(i.key === "confirm", r), e == null || e(i, r);
      },
      ...s
    }).then((i) => i === "confirm");
  }
};
let Co = ee;
Ws = /* @__PURE__ */ new WeakMap();
Ds = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Qn = /* @__PURE__ */ new WeakSet();
Ni = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return this.modalElement.innerHTML = t[0], _(this.modalElement).runJS(), e();
    const { afterRender: n, ...s } = t;
    t = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), e();
      },
      ...s
    }, Xn(
      /* @__PURE__ */ m(Nc, { ...t }),
      this.modalElement
    );
  });
};
mr = /* @__PURE__ */ new WeakSet();
Lc = function() {
  const { loadingText: t } = this.options;
  return Xe(this, Qn, Ni).call(this, {
    body: /* @__PURE__ */ m("div", { className: "modal-loading-indicator", children: [
      /* @__PURE__ */ m("span", { className: "spinner" }),
      t ? /* @__PURE__ */ m("span", { className: "modal-loading-text", children: t }) : null
    ] })
  });
};
Ps = /* @__PURE__ */ new WeakSet();
_r = function(t) {
  if (t)
    return Xe(this, Qn, Ni).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
};
Co.LOADING_CLASS = "loading";
Co.DEFAULT = {
  ...ye.DEFAULT,
  loadTimeout: 1e4
};
var Eo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, yr = (t, e, n) => (Eo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), vs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ja = (t, e, n, s) => (Eo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), wr = (t, e, n) => (Eo(t, e, "access private method"), n), Re, Mo, Wc, vr, Dc, To, Pc;
const id = '[data-toggle="modal"]';
class Ic extends Wt {
  constructor() {
    super(...arguments), vs(this, Mo), vs(this, vr), vs(this, To), vs(this, Re, void 0);
  }
  get modal() {
    return yr(this, Re);
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    const e = wr(this, vr, Dc).call(this);
    return e == null ? void 0 : e.show();
  }
  hide() {
    var e;
    (e = yr(this, Re)) == null || e.hide();
  }
}
Re = /* @__PURE__ */ new WeakMap();
Mo = /* @__PURE__ */ new WeakSet();
Wc = function() {
  const {
    container: t,
    ...e
  } = this.options, n = e, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), n;
};
vr = /* @__PURE__ */ new WeakSet();
Dc = function() {
  const t = wr(this, Mo, Wc).call(this);
  let e = yr(this, Re);
  return e ? e.setOptions(t) : t.type === "static" ? (e = ye.ensure(wr(this, To, Pc).call(this), t), ja(this, Re, e)) : (e = Co.ensure(this.container, t), ja(this, Re, e)), e;
};
To = /* @__PURE__ */ new WeakSet();
Pc = function() {
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
Ic.NAME = "ModalTrigger";
_(document).on("click", (t) => {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, id);
  if (n) {
    const i = Ic.ensure(n);
    i && i.show();
  }
});
let Oc = class extends Oe {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = T(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
};
Oc.NAME = "nav";
class Hc extends rt {
}
Hc.NAME = "Nav";
Hc.Component = Oc;
function ts(t, e) {
  const n = t.pageTotal || Math.ceil(t.recTotal / t.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = n : e === "prev" ? e = t.page - 1 : e === "next" ? e = t.page + 1 : e === "current" ? e = t.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? n + e : e, n)) : t.page, {
    ...t,
    pageTotal: n,
    page: e
  };
}
function rd({
  key: t,
  type: e,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const c = ts(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(c) : ut(i, c)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(c) : ut(o, c)), a.disabled === void 0 && (a.disabled = s !== void 0 && c.page === r.page), /* @__PURE__ */ m(Kt, { type: n, ...a });
}
const Bt = 24 * 60 * 60 * 1e3, ft = (t) => t ? (t instanceof Date || (typeof t == "string" && (t = t.trim(), /^\d+$/.test(t) && (t = Number.parseInt(t, 10))), typeof t == "number" && t < 1e10 && (t *= 1e3), t = new Date(t)), t) : /* @__PURE__ */ new Date(), hs = (t, e = /* @__PURE__ */ new Date()) => (t = ft(t), e = ft(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()), br = (t, e = /* @__PURE__ */ new Date()) => ft(t).getFullYear() === ft(e).getFullYear(), od = (t, e = /* @__PURE__ */ new Date()) => (t = ft(t), e = ft(e), t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()), kp = (t, e = /* @__PURE__ */ new Date()) => {
  t = ft(t), e = ft(e);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(t.getTime() / n), i = Math.floor(e.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Sp = (t, e) => hs(ft(e), t), $p = (t, e) => hs(ft(e).getTime() - Bt, t), Cp = (t, e) => hs(ft(e).getTime() + Bt, t), Ep = (t, e) => hs(ft(e).getTime() - 2 * Bt, t), xr = (t, e = "yyyy-MM-dd hh:mm", n = "") => {
  if (t = ft(t), Number.isNaN(t.getDay()))
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", br(t) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${t.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const r = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), e;
}, Mp = (t, e, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = xr(t, br(t) ? s.month : s.full);
  if (hs(t, e))
    return i;
  const r = xr(e, br(t, e) ? od(t, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
}, Tp = (t) => {
  const e = (/* @__PURE__ */ new Date()).getTime();
  switch (t) {
    case "oneWeek":
      return e - Bt * 7;
    case "oneMonth":
      return e - Bt * 31;
    case "threeMonth":
      return e - Bt * 31 * 3;
    case "halfYear":
      return e - Bt * 183;
    case "oneYear":
      return e - Bt * 365;
    case "twoYear":
      return e - 2 * (Bt * 365);
    default:
      return 0;
  }
}, Va = (t, e, n = !0, s = Date.now()) => {
  switch (e) {
    case "year":
      return t *= 365, Va(t, "day", n, s);
    case "quarter":
      t *= 3;
      break;
    case "month":
      return t *= 30, Va(t, "day", n, s);
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
function ad({
  key: t,
  type: e,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ts(i, n);
  return s = typeof s == "function" ? s(a) : ut(s, a), /* @__PURE__ */ m(Ql, { ...o, children: [
    r,
    s
  ] });
}
function ld({
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
  const c = { ...a, square: !0 }, h = () => (c.text = "", c.icon = "icon-ellipsis-h", c.disabled = !0, /* @__PURE__ */ m(Kt, { type: n, ...c })), l = (d, f) => {
    const p = [];
    for (let g = d; g <= f; g++) {
      c.text = g, delete c.icon, c.disabled = !1;
      const w = ts(i, g);
      o && (c.url = typeof o == "function" ? o(w) : ut(o, w)), p.push(/* @__PURE__ */ m(Kt, { type: n, ...c, onClick: r }));
    }
    return p;
  };
  let u = [];
  return u = [...l(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...l(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...l(2, s - 2), h(), ...l(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...l(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...l(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...l(i.pageTotal, i.pageTotal)]), u;
}
function cd({
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
      url: typeof n == "function" ? n(h) : ut(n, h)
    };
  });
  const { text: o = "" } = r;
  return r.text = typeof o == "function" ? o(e) : ut(o, e), i.menu = { ...i.menu, className: T((a = i.menu) == null ? void 0 : a.className, "pager-size-menu") }, /* @__PURE__ */ m(vc, { type: "dropdown", dropdown: i, ...r });
}
function hd({
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
  let u;
  const d = (g) => {
    var w;
    u = Number((w = g.target) == null ? void 0 : w.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (g) => {
    if (!(g != null && g.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const w = ts(i, u);
    a && !a({ info: w, event: g }) || (g.target.href = l.url = typeof c == "function" ? c(w) : ut(c, w));
  }, p = ts(i, e || 0);
  return l.url = typeof c == "function" ? c(p) : ut(c, p), /* @__PURE__ */ m("div", { className: T("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ m(Kt, { type: s, ...l, onClick: f })
  ] });
}
let Li = class extends Nt {
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
Li.NAME = "pager";
Li.defaultProps = {
  gap: 1,
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Li.ItemComponents = {
  ...Nt.ItemComponents,
  link: rd,
  info: ad,
  nav: ld,
  "size-menu": cd,
  goto: hd
};
class Bc extends rt {
}
Bc.NAME = "Pager";
Bc.Component = Li;
var gi, mi, zc;
class ud extends G {
  constructor() {
    super(...arguments);
    W(this, mi);
    W(this, gi, (n) => {
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
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("picker-select picker-select-multi form-control", n, { disabled: i, focused: r }),
        style: s,
        onClick: o,
        children: [
          Ue(this, mi, zc).call(this),
          a,
          /* @__PURE__ */ m("span", { class: "caret" })
        ]
      }
    );
  }
}
gi = new WeakMap(), mi = new WeakSet(), zc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: n.map((i, r) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, gi), "data-idx": r, children: /* @__PURE__ */ m("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: s });
};
var _i;
class fd extends G {
  constructor() {
    super(...arguments);
    W(this, _i, (n) => {
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
    } = this.props, [u] = a, d = u ? /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }), f = u && c ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, _i), children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("picker-select picker-select-single form-control", n, { disabled: i, focused: o }),
        style: s,
        onClick: h,
        children: [
          d,
          l,
          f,
          /* @__PURE__ */ m("span", { class: "caret" })
        ]
      }
    );
  }
}
_i = new WeakMap();
var re, hn, yi, Fc, un, rs, fn, os;
class dd extends G {
  constructor() {
    super(...arguments);
    W(this, yi);
    W(this, re, void 0);
    W(this, hn, void 0);
    W(this, un, void 0);
    W(this, rs, void 0);
    W(this, fn, void 0);
    W(this, os, void 0);
    this.state = { keys: "", show: !1 }, B(this, re, 0), B(this, hn, _e()), B(this, un, (n) => {
      _(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), B(this, rs, ({ item: n }) => {
      const s = this.props.items.find((i) => i.value === n.key);
      s && this.props.onSelectItem(s);
    }), B(this, fn, (n) => {
      this.setState({ keys: n.target.value });
    }), B(this, os, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    _(document).on("click", E(this, un)), this.show(this.focus.bind(this));
  }
  componentWillUnmount() {
    _(document).off("click", E(this, un));
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
    (n = E(this, hn).current) == null || n.focus();
  }
  hide() {
    this.state.show && (E(this, re) && window.clearTimeout(E(this, re)), this.setState({ show: !1 }, () => {
      B(this, re, window.setTimeout(() => {
        var n, s;
        B(this, re, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  render() {
    const {
      id: n,
      search: s,
      className: i,
      style: r = {},
      maxHeight: o,
      maxWidth: a,
      width: c,
      menu: h,
      searchHint: l
    } = this.props, { show: u, keys: d } = this.state, f = d.trim().length;
    return /* @__PURE__ */ m(
      "div",
      {
        className: T("picker-menu menu-popup", i, { shown: u, "has-search": f }),
        id: `picker-menu-${n}`,
        style: { maxHeight: o, maxWidth: a, width: c, ...r },
        children: [
          s ? /* @__PURE__ */ m("div", { className: "picker-menu-search", children: [
            /* @__PURE__ */ m(
              "input",
              {
                className: "form-control picker-menu-search-input",
                type: "text",
                placeholder: l,
                value: d,
                onChange: E(this, fn),
                onInput: E(this, fn),
                ref: E(this, hn)
              }
            ),
            f ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: E(this, os), children: /* @__PURE__ */ m("span", { className: "close" }) }) : /* @__PURE__ */ m("span", { className: "magnifier" })
          ] }) : null,
          /* @__PURE__ */ m(Mi, { className: "picker-menu-list", items: Ue(this, yi, Fc).call(this), onClickItem: E(this, rs), ...h })
        ]
      }
    );
  }
}
re = new WeakMap(), hn = new WeakMap(), yi = new WeakSet(), Fc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), r = this.state.keys.toLowerCase().split(" ").filter((o) => o.length);
  return s.reduce((o, a) => {
    const {
      value: c,
      keys: h,
      text: l,
      ...u
    } = a;
    if (!r.length || r.every((d) => c.toLowerCase().includes(d) || (h == null ? void 0 : h.toLowerCase().includes(d)) || typeof l == "string" && l.toLowerCase().includes(d))) {
      let d = l ?? c;
      typeof d == "string" && r.length && (d = /* @__PURE__ */ m("span", { dangerouslySetInnerHTML: { __html: r.reduce((f, p) => f.replace(p, `<span class="picker-menu-item-match">${p}</span>`), d) } })), o.push({
        key: c,
        active: i.has(c),
        text: d,
        ...u
      });
    }
    return o;
  }, []);
}, un = new WeakMap(), rs = new WeakMap(), fn = new WeakMap(), os = new WeakMap();
var Ro = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, et = (t, e, n) => (Ro(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Q = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, ei = (t, e, n, s) => (Ro(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), pd = (t, e, n, s) => ({
  set _(i) {
    ei(t, e, i, n);
  },
  get _() {
    return et(t, e, s);
  }
}), dt = (t, e, n) => (Ro(t, e, "access private method"), n), Is, gn, ni, Ut, Rn, Os, si, Ao, kr, Uc, Sr, jc, No, Lo, Wo, Do, Po, Vc, $r, qc, Io, Gc, Hs, Cr;
let Yc = class extends G {
  constructor(e) {
    super(e), Q(this, Rn), Q(this, si), Q(this, kr), Q(this, Sr), Q(this, Po), Q(this, $r), Q(this, Io), Q(this, Hs), Q(this, Is, 0), Q(this, gn, Ai()), Q(this, ni, _e()), Q(this, Ut, void 0), Q(this, No, (n) => {
      const { valueList: s } = this, i = new Set(n.map((o) => o.value)), r = s.filter((o) => !i.has(o));
      this.setState({ value: r.length ? r.join(this.props.valueSplitter ?? ",") : void 0 });
    }), Q(this, Lo, () => {
      requestAnimationFrame(() => this.toggle());
    }), Q(this, Wo, () => {
      this.close();
    }), Q(this, Do, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setState({ value: n.value }, () => {
        var s;
        (s = et(this, ni).current) == null || s.hide();
      });
    }), this.state = {
      value: dt(this, kr, Uc).call(this, e.defaultValue) ?? "",
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
    return dt(this, si, Ao).call(this, this.state.value);
  }
  componentDidMount() {
    dt(this, Hs, Cr).call(this, !0);
  }
  componentDidUpdate() {
    dt(this, Hs, Cr).call(this);
  }
  componentWillUnmount() {
    var n;
    var e;
    (n = this.props.beforeDestroy) == null || n.call(this), (e = et(this, Ut)) == null || e.call(this), ei(this, Ut, void 0);
  }
  async loadItemList() {
    let { items: e } = this.props;
    if (typeof e == "function") {
      const s = ++pd(this, Is)._;
      if (await dt(this, Rn, Os).call(this, { loading: !0, items: [] }), e = await e(), et(this, Is) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(e) && this.state.items !== e && (n.items = e), this.state.loading && (n.loading = !1), Object.keys(n).length && await dt(this, Rn, Os).call(this, n), e;
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
    await dt(this, Rn, Os).call(this, { open: e }), e && this.loadItemList();
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
    } = this.props, a = r || (i ? ud : fd), c = dt(this, Sr, jc).call(this);
    return /* @__PURE__ */ m(
      "div",
      {
        id: `picker-${et(this, gn)}`,
        className: T("picker", e),
        style: n,
        children: [
          /* @__PURE__ */ m(a, { ...c }),
          s,
          dt(this, $r, qc).call(this),
          o ? /* @__PURE__ */ m("input", { type: "hidden", className: "picker-value", name: o, value: this.state.value }) : null
        ]
      }
    );
  }
};
Is = /* @__PURE__ */ new WeakMap();
gn = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakSet();
Os = function(t) {
  return new Promise((e) => {
    this.setState(t, e);
  });
};
si = /* @__PURE__ */ new WeakSet();
Ao = function(t) {
  return typeof t == "string" ? t.length ? _.unique(t.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(t) ? _.unique(t) : [];
};
kr = /* @__PURE__ */ new WeakSet();
Uc = function(t) {
  const e = dt(this, si, Ao).call(this, t);
  return e.length ? e.join(this.props.valueSplitter ?? ",") : void 0;
};
Sr = /* @__PURE__ */ new WeakSet();
jc = function() {
  const { placeholder: t, disabled: e, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: t,
    disabled: e,
    multiple: n,
    selections: this.getSelections(),
    onClick: et(this, Lo),
    onDeselect: et(this, No)
  };
};
No = /* @__PURE__ */ new WeakMap();
Lo = /* @__PURE__ */ new WeakMap();
Wo = /* @__PURE__ */ new WeakMap();
Do = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakSet();
Vc = function() {
  const { search: t, menuClass: e, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: r, multiple: o, searchHint: a } = this.props, { items: c } = this.state;
  return {
    id: et(this, gn),
    items: c,
    selections: this.valueList,
    search: t === !0 || typeof t == "number" && t <= c.length,
    searchHint: a,
    style: s,
    multiple: o,
    className: e,
    width: n === "100%" ? "auto" : n,
    maxHeight: i,
    maxWidth: r,
    onRequestHide: et(this, Wo),
    onSelectItem: et(this, Do)
  };
};
$r = /* @__PURE__ */ new WeakSet();
qc = function() {
  const { open: t } = this.state;
  if (!t)
    return null;
  const e = _(this.props.container || "body");
  let n = e.find(".pickers-container");
  n.length || (n = _("<div>").addClass("pickers-container").appendTo(e));
  const { Menu: s = dd } = this.props;
  return ef(/* @__PURE__ */ m(s, { ...dt(this, Po, Vc).call(this), ref: et(this, ni) }), n[0]);
};
Io = /* @__PURE__ */ new WeakSet();
Gc = function() {
  const t = _(`#picker-${et(this, gn)}`)[0], e = _(`#picker-menu-${et(this, gn)}`)[0];
  if (!e || !t || !this.state.open) {
    et(this, Ut) && (et(this, Ut).call(this), ei(this, Ut, void 0));
    return;
  }
  et(this, Ut) || ei(this, Ut, gc(t, e, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    mo(t, e, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? go() : null, Cf()].filter(Boolean)
    }).then(({ x: i, y: r }) => {
      _(e).css({ left: i, top: r, width: s === "100%" ? _(t).width() : void 0 });
    }), s === "100%" && _(e).css({ width: _(t).width() });
  }));
};
Hs = /* @__PURE__ */ new WeakSet();
Cr = function(t = !1) {
  var e;
  (e = this.props.afterRender) == null || e.call(this, { firstRender: t }), dt(this, Io, Gc).call(this);
};
Yc.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class Kc extends rt {
}
Kc.NAME = "Picker";
Kc.Component = Yc;
class Xc extends rt {
}
Xc.NAME = "Toolbar";
Xc.Component = Nt;
function us(t) {
  return t.split("-")[1];
}
function Oo(t) {
  return t === "y" ? "height" : "width";
}
function en(t) {
  return t.split("-")[0];
}
function Wi(t) {
  return ["top", "bottom"].includes(en(t)) ? "x" : "y";
}
function qa(t, e, n) {
  let { reference: s, floating: i } = t;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Wi(e), c = Oo(a), h = s[c] / 2 - i[c] / 2, l = a === "x";
  let u;
  switch (en(e)) {
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
  switch (us(e)) {
    case "start":
      u[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && l ? -1 : 1);
  }
  return u;
}
const gd = async (t, e, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let h = await o.getElementRects({ reference: t, floating: e, strategy: i }), { x: l, y: u } = qa(h, s, c), d = s, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: w, fn: y } = a[g], { x: v, y: x, data: k, reset: $ } = await y({ x: l, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: o, elements: { reference: t, floating: e } });
    l = v ?? l, u = x ?? u, f = { ...f, [w]: { ...f[w], ...k } }, $ && p <= 50 && (p++, typeof $ == "object" && ($.placement && (d = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: t, floating: e, strategy: i }) : $.rects), { x: l, y: u } = qa(h, d, c)), g = -1);
  }
  return { x: l, y: u, placement: d, strategy: i, middlewareData: f };
};
function Jc(t) {
  return typeof t != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(t) : { top: t, right: t, bottom: t, left: t };
}
function ii(t) {
  return { ...t, top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height };
}
async function md(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: c } = t, { boundary: h = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = e, p = Jc(f), g = a[d ? u === "floating" ? "reference" : "floating" : u], w = ii(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(g))) == null || n ? g : g.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: l, strategy: c })), y = u === "floating" ? { ...o.floating, x: s, y: i } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(v)) && await (r.getScale == null ? void 0 : r.getScale(v)) || { x: 1, y: 1 }, k = ii(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: y, offsetParent: v, strategy: c }) : y);
  return { top: (w.top - k.top + p.top) / x.y, bottom: (k.bottom - w.bottom + p.bottom) / x.y, left: (w.left - k.left + p.left) / x.x, right: (k.right - w.right + p.right) / x.x };
}
const _d = Math.min, yd = Math.max;
function wd(t, e, n) {
  return yd(t, _d(e, n));
}
const vd = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { element: n, padding: s = 0 } = t || {}, { x: i, y: r, placement: o, rects: a, platform: c } = e;
  if (n == null)
    return {};
  const h = Jc(s), l = { x: i, y: r }, u = Wi(o), d = Oo(u), f = await c.getDimensions(n), p = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", w = a.reference[d] + a.reference[u] - l[u] - a.floating[d], y = l[u] - a.reference[u], v = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n));
  let x = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
  x === 0 && (x = a.floating[d]);
  const k = w / 2 - y / 2, $ = h[p], N = x - f[d] - h[g], R = x / 2 - f[d] / 2 + k, M = wd($, R, N), D = us(o) != null && R != M && a.reference[d] / 2 - (R < $ ? h[p] : h[g]) - f[d] / 2 < 0;
  return { [u]: l[u] - (D ? R < $ ? $ - R : N - R : 0), data: { [u]: M, centerOffset: R - M } };
} }), bd = ["top", "right", "bottom", "left"];
bd.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
const xd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ri(t) {
  return t.replace(/left|right|bottom|top/g, (e) => xd[e]);
}
function kd(t, e, n) {
  n === void 0 && (n = !1);
  const s = us(t), i = Wi(t), r = Oo(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = ri(o)), { main: o, cross: ri(o) };
}
const Sd = { start: "end", end: "start" };
function Zi(t) {
  return t.replace(/start|end/g, (e) => Sd[e]);
}
const $d = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: c } = e, { mainAxis: h = !0, crossAxis: l = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...g } = t, w = en(s), y = en(o) === o, v = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), x = u || (y || !p ? [ri(o)] : function(C) {
      const L = ri(C);
      return [Zi(C), L, Zi(L)];
    }(o));
    u || f === "none" || x.push(...function(C, L, U, j) {
      const H = us(C);
      let O = function(V, gt, we) {
        const kt = ["left", "right"], Qt = ["right", "left"], ve = ["top", "bottom"], Be = ["bottom", "top"];
        switch (V) {
          case "top":
          case "bottom":
            return we ? gt ? Qt : kt : gt ? kt : Qt;
          case "left":
          case "right":
            return gt ? ve : Be;
          default:
            return [];
        }
      }(en(C), U === "start", j);
      return H && (O = O.map((V) => V + "-" + H), L && (O = O.concat(O.map(Zi)))), O;
    }(o, p, f, v));
    const k = [o, ...x], $ = await md(e, g), N = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && N.push($[w]), l) {
      const { main: C, cross: L } = kd(s, r, v);
      N.push($[C], $[L]);
    }
    if (R = [...R, { placement: s, overflows: N }], !N.every((C) => C <= 0)) {
      var M;
      const C = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1, L = k[C];
      if (L)
        return { data: { index: C, overflows: R }, reset: { placement: L } };
      let U = "bottom";
      switch (d) {
        case "bestFit": {
          var D;
          const j = (D = R.map((H) => [H, H.overflows.filter((O) => O > 0).reduce((O, V) => O + V, 0)]).sort((H, O) => H[1] - O[1])[0]) == null ? void 0 : D[0].placement;
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
}, Cd = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    const { x: n, y: s } = e, i = await async function(r, o) {
      const { placement: a, platform: c, elements: h } = r, l = await (c.isRTL == null ? void 0 : c.isRTL(h.floating)), u = en(a), d = us(a), f = Wi(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, g = l && f ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: y, crossAxis: v, alignmentAxis: x } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return d && typeof x == "number" && (v = d === "end" ? -1 * x : x), f ? { x: v * g, y: y * p } : { x: y * p, y: v * g };
    }(e, t);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function pt(t) {
  var e;
  return ((e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Rt(t) {
  return pt(t).getComputedStyle(t);
}
function pe(t) {
  return Qc(t) ? (t.nodeName || "").toLowerCase() : "";
}
let bs;
function Zc() {
  if (bs)
    return bs;
  const t = navigator.userAgentData;
  return t && Array.isArray(t.brands) ? (bs = t.brands.map((e) => e.brand + "/" + e.version).join(" "), bs) : navigator.userAgent;
}
function Xt(t) {
  return t instanceof pt(t).HTMLElement;
}
function vt(t) {
  return t instanceof pt(t).Element;
}
function Qc(t) {
  return t instanceof pt(t).Node;
}
function Ga(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof pt(t).ShadowRoot || t instanceof ShadowRoot;
}
function Di(t) {
  const { overflow: e, overflowX: n, overflowY: s, display: i } = Rt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(i);
}
function Ed(t) {
  return ["table", "td", "th"].includes(pe(t));
}
function Er(t) {
  const e = /firefox/i.test(Zc()), n = Rt(t), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || e && n.willChange === "filter" || e && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function th() {
  return !/^((?!chrome|android).)*safari/i.test(Zc());
}
function Ho(t) {
  return ["html", "body", "#document"].includes(pe(t));
}
const Ya = Math.min, Un = Math.max, oi = Math.round;
function eh(t) {
  const e = Rt(t);
  let n = parseFloat(e.width), s = parseFloat(e.height);
  const i = t.offsetWidth, r = t.offsetHeight, o = oi(n) !== i || oi(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function nh(t) {
  return vt(t) ? t : t.contextElement;
}
const sh = { x: 1, y: 1 };
function nn(t) {
  const e = nh(t);
  if (!Xt(e))
    return sh;
  const n = e.getBoundingClientRect(), { width: s, height: i, fallback: r } = eh(e);
  let o = (r ? oi(n.width) : n.width) / s, a = (r ? oi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function We(t, e, n, s) {
  var i, r;
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), a = nh(t);
  let c = sh;
  e && (s ? vt(s) && (c = nn(s)) : c = nn(t));
  const h = a ? pt(a) : window, l = !th() && n;
  let u = (o.left + (l && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, d = (o.top + (l && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, f = o.width / c.x, p = o.height / c.y;
  if (a) {
    const g = pt(a), w = s && vt(s) ? pt(s) : s;
    let y = g.frameElement;
    for (; y && s && w !== g; ) {
      const v = nn(y), x = y.getBoundingClientRect(), k = getComputedStyle(y);
      x.x += (y.clientLeft + parseFloat(k.paddingLeft)) * v.x, x.y += (y.clientTop + parseFloat(k.paddingTop)) * v.y, u *= v.x, d *= v.y, f *= v.x, p *= v.y, u += x.x, d += x.y, y = pt(y).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function fe(t) {
  return ((Qc(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function Pi(t) {
  return vt(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function ih(t) {
  return We(fe(t)).left + Pi(t).scrollLeft;
}
function Md(t, e, n) {
  const s = Xt(e), i = fe(e), r = We(t, !0, n === "fixed", e);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((pe(e) !== "body" || Di(i)) && (o = Pi(e)), Xt(e)) {
      const c = We(e, !0);
      a.x = c.x + e.clientLeft, a.y = c.y + e.clientTop;
    } else
      i && (a.x = ih(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function es(t) {
  if (pe(t) === "html")
    return t;
  const e = t.assignedSlot || t.parentNode || (Ga(t) ? t.host : null) || fe(t);
  return Ga(e) ? e.host : e;
}
function Ka(t) {
  return Xt(t) && Rt(t).position !== "fixed" ? t.offsetParent : null;
}
function Xa(t) {
  const e = pt(t);
  let n = Ka(t);
  for (; n && Ed(n) && Rt(n).position === "static"; )
    n = Ka(n);
  return n && (pe(n) === "html" || pe(n) === "body" && Rt(n).position === "static" && !Er(n)) ? e : n || function(s) {
    let i = es(s);
    for (; Xt(i) && !Ho(i); ) {
      if (Er(i))
        return i;
      i = es(i);
    }
    return null;
  }(t) || e;
}
function rh(t) {
  const e = es(t);
  return Ho(e) ? t.ownerDocument.body : Xt(e) && Di(e) ? e : rh(e);
}
function jn(t, e) {
  var n;
  e === void 0 && (e = []);
  const s = rh(t), i = s === ((n = t.ownerDocument) == null ? void 0 : n.body), r = pt(s);
  return i ? e.concat(r, r.visualViewport || [], Di(s) ? s : []) : e.concat(s, jn(s));
}
function Ja(t, e, n) {
  return e === "viewport" ? ii(function(s, i) {
    const r = pt(s), o = fe(s), a = r.visualViewport;
    let c = o.clientWidth, h = o.clientHeight, l = 0, u = 0;
    if (a) {
      c = a.width, h = a.height;
      const d = th();
      (d || !d && i === "fixed") && (l = a.offsetLeft, u = a.offsetTop);
    }
    return { width: c, height: h, x: l, y: u };
  }(t, n)) : vt(e) ? function(s, i) {
    const r = We(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, c = Xt(s) ? nn(s) : { x: 1, y: 1 }, h = s.clientWidth * c.x, l = s.clientHeight * c.y, u = a * c.x, d = o * c.y;
    return { top: d, left: u, right: u + h, bottom: d + l, x: u, y: d, width: h, height: l };
  }(e, n) : ii(function(s) {
    var i;
    const r = fe(s), o = Pi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, c = Un(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Un(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let l = -o.scrollLeft + ih(s);
    const u = -o.scrollTop;
    return Rt(a || r).direction === "rtl" && (l += Un(r.clientWidth, a ? a.clientWidth : 0) - c), { width: c, height: h, x: l, y: u };
  }(fe(t)));
}
const Td = { getClippingRect: function(t) {
  let { element: e, boundary: n, rootBoundary: s, strategy: i } = t;
  const r = n === "clippingAncestors" ? function(h, l) {
    const u = l.get(h);
    if (u)
      return u;
    let d = jn(h).filter((w) => vt(w) && pe(w) !== "body"), f = null;
    const p = Rt(h).position === "fixed";
    let g = p ? es(h) : h;
    for (; vt(g) && !Ho(g); ) {
      const w = Rt(g), y = Er(g);
      (p ? y || f : y || w.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = w : d = d.filter((v) => v !== g), g = es(g);
    }
    return l.set(h, d), d;
  }(e, this._c) : [].concat(n), o = [...r, s], a = o[0], c = o.reduce((h, l) => {
    const u = Ja(e, l, i);
    return h.top = Un(u.top, h.top), h.right = Ya(u.right, h.right), h.bottom = Ya(u.bottom, h.bottom), h.left = Un(u.left, h.left), h;
  }, Ja(e, a, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
  let { rect: e, offsetParent: n, strategy: s } = t;
  const i = Xt(n), r = fe(n);
  if (n === r)
    return e;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((pe(n) !== "body" || Di(r)) && (o = Pi(n)), Xt(n))) {
    const h = We(n);
    a = nn(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - o.scrollLeft * a.x + c.x, y: e.y * a.y - o.scrollTop * a.y + c.y };
}, isElement: vt, getDimensions: function(t) {
  return eh(t);
}, getOffsetParent: Xa, getDocumentElement: fe, getScale: nn, async getElementRects(t) {
  let { reference: e, floating: n, strategy: s } = t;
  const i = this.getOffsetParent || Xa, r = this.getDimensions;
  return { reference: Md(e, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (t) => Array.from(t.getClientRects()), isRTL: (t) => Rt(t).direction === "rtl" };
function Rd(t, e, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, c = i && !a, h = c || r ? [...vt(t) ? jn(t) : t.contextElement ? jn(t.contextElement) : [], ...jn(e)] : [];
  h.forEach((f) => {
    c && f.addEventListener("scroll", n, { passive: !0 }), r && f.addEventListener("resize", n);
  });
  let l, u = null;
  if (o) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), vt(t) && !a && u.observe(t), vt(t) || !t.contextElement || a || u.observe(t.contextElement), u.observe(e);
  }
  let d = a ? We(t) : null;
  return a && function f() {
    const p = We(t);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, l = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      c && p.removeEventListener("scroll", n), r && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(l);
  };
}
const Ad = (t, e, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Td, ...n }, r = { ...i.platform, _c: s };
  return gd(t, e, { ...i, platform: r });
};
var Bo = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, F = (t, e, n) => (Bo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), J = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, De = (t, e, n, s) => (Bo(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Tt = (t, e, n) => (Bo(t, e, "access private method"), n), Vn, qn, An, Je, at, Mr, ai, Ii, zo, Fo, oh, Tr, ah, Uo, lh, jo, ch, Vo, hh, Rr, uh, qo, fh, Gn, Ar, dh;
const Ze = class extends Wt {
  constructor() {
    super(...arguments), J(this, Ii), J(this, Fo), J(this, Tr), J(this, Uo), J(this, jo), J(this, Vo), J(this, Rr), J(this, qo), J(this, Ar), J(this, Vn, !1), J(this, qn, void 0), J(this, An, 0), J(this, Je, void 0), J(this, at, void 0), J(this, Mr, void 0), J(this, ai, void 0), this.hideLater = () => {
      F(this, Gn).call(this), De(this, An, window.setTimeout(this.hide.bind(this), 100));
    }, J(this, Gn, () => {
      clearTimeout(F(this, An)), De(this, An, 0);
    });
  }
  get isShown() {
    var t;
    return (t = F(this, Je)) == null ? void 0 : t.classList.contains(Ze.CLASS_SHOW);
  }
  get tooltip() {
    return F(this, Je) || Tt(this, Tr, ah).call(this);
  }
  get trigger() {
    return F(this, Mr) || this.element;
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
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !F(this, Vn) && this.isHover && Tt(this, Ar, dh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ze.CLASS_SHOW), Tt(this, Rr, uh).call(this), !0;
  }
  hide() {
    var e;
    var t;
    return (t = F(this, ai)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = F(this, Je)) == null || e.classList.remove(Ze.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    F(this, Vn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", F(this, Gn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t || {}, n = this.getAll().entries(), s = new Set(e || []);
    for (const [i, r] of n)
      s.has(i) || r.hide();
  }
};
let At = Ze;
Vn = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakSet();
zo = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
};
Fo = /* @__PURE__ */ new WeakSet();
oh = function() {
  const t = Tt(this, Ii, zo).call(this);
  return De(this, at, document.createElement("div")), F(this, at).style.position = this.options.strategy, F(this, at).style.width = `${t}px`, F(this, at).style.height = `${t}px`, F(this, at).style.transform = "rotate(45deg)", F(this, at);
};
Tr = /* @__PURE__ */ new WeakSet();
ah = function() {
  var n;
  const t = Ze.TOOLTIP_CLASS;
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
  if (this.options.arrow && (e == null || e.append(Tt(this, Fo, oh).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), De(this, Je, e), e;
};
Uo = /* @__PURE__ */ new WeakSet();
lh = function() {
  var i;
  const t = Tt(this, Ii, zo).call(this), { strategy: e, placement: n } = this.options, s = {
    middleware: [Cd(t), $d()],
    strategy: e,
    placement: n
  };
  return this.options.arrow && F(this, at) && ((i = s.middleware) == null || i.push(vd({ element: F(this, at) }))), s;
};
jo = /* @__PURE__ */ new WeakSet();
ch = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
};
Vo = /* @__PURE__ */ new WeakSet();
hh = function(t) {
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
Rr = /* @__PURE__ */ new WeakSet();
uh = function() {
  const t = Tt(this, Uo, lh).call(this), e = Tt(this, qo, fh).call(this);
  De(this, ai, Rd(e, this.tooltip, () => {
    Ad(e, this.tooltip, t).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = Tt(this, jo, ch).call(this, o);
      if (i.arrow && F(this, at)) {
        const { x: c, y: h } = i.arrow;
        Object.assign(F(this, at).style, {
          left: c != null ? `${c}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-F(this, at).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Tt(this, Vo, hh).call(this, o)
        });
      }
    });
  }));
};
qo = /* @__PURE__ */ new WeakSet();
fh = function() {
  return F(this, qn) || De(this, qn, {
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
  }), F(this, qn);
};
Gn = /* @__PURE__ */ new WeakMap();
Ar = /* @__PURE__ */ new WeakSet();
dh = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", F(this, Gn)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), De(this, Vn, !0);
};
At.NAME = "tooltip";
At.TOOLTIP_CLASS = "tooltip";
At.CLASS_SHOW = "show";
At.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
At.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(t) {
  var s;
  const e = t.target, n = (s = e.closest) == null ? void 0 : s.call(e, At.MENU_SELECTOR);
  if (n) {
    const i = At.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    At.clear({ event: t });
});
document.addEventListener("mouseover", function(t) {
  var i;
  const e = t.target, n = (i = e.closest) == null ? void 0 : i.call(e, At.MENU_SELECTOR);
  if (!n)
    return;
  const s = At.ensure(n);
  s.isHover && s.show();
});
var Nd = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, xs = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, li = (t, e, n) => (Nd(t, e, "access private method"), n), Nr, ph, Lr, gh, Go, mh, Yo, _h;
class Ld extends Wt {
  constructor() {
    super(...arguments), xs(this, Nr), xs(this, Lr), xs(this, Go), xs(this, Yo);
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
    this.emit("before", e, n, s), ((i = s.beforeSubmit) == null ? void 0 : i.call(s, e, n, s)) !== !1 && (this.disable(), li(this, Lr, gh).call(this, li(this, Nr, ph).call(this)).finally(() => {
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
Nr = /* @__PURE__ */ new WeakSet();
ph = function() {
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
Lr = /* @__PURE__ */ new WeakSet();
gh = async function(t) {
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
  s ? (this.emit("error", s, i), (o = n.onError) == null || o.call(n, s, i)) : li(this, Yo, _h).call(this, r), this.emit("complete", r, s), (a = n.onComplete) == null || a.call(n, r, s);
};
Go = /* @__PURE__ */ new WeakSet();
mh = function(t) {
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
Yo = /* @__PURE__ */ new WeakSet();
_h = function(t) {
  var o, a;
  const { options: e } = this, { message: n } = t;
  if (t.result === "success") {
    if (this.emit("success", t), ((o = e.onSuccess) == null ? void 0 : o.call(e, t)) === !1)
      return;
    typeof n == "string" && n.length && _(document).trigger("zui.messager.show", { content: n, type: "success" });
  } else {
    if (this.emit("fail", t), ((a = e.onFail) == null ? void 0 : a.call(e, t)) === !1)
      return;
    n && (typeof n == "string" && n.length ? _(document).trigger("zui.messager.show", { content: n, type: "danger" }) : typeof n == "object" && li(this, Go, mh).call(this, n));
  }
  const s = t.closeModal || e.closeModal;
  s && _(this.element).trigger("zui.modal.hide", { target: typeof s == "string" ? s : void 0 });
  const i = t.callback || e.callback;
  if (typeof i == "string") {
    const c = i.indexOf("("), h = (c > 0 ? i.substring(0, c) : i).split(".");
    let l = window, u = h[0];
    h.length > 1 && (u = h[1], h[0] === "top" ? l = window.top : h[0] === "parent" ? l = window.parent : l = window[h[0]]);
    const d = l == null ? void 0 : l[u];
    if (typeof d == "function") {
      let f = [];
      return c > 0 && i[i.length - 1] == ")" ? f = JSON.parse("[" + i.substring(c + 1, i.length - 1) + "]") : f.push(t), d.apply(this, f);
    }
  } else
    i && typeof i == "object" && (i.target ? window[i.target] : window)[i.name].apply(this, Array.isArray(i.params) ? i.params : [i.params]);
  const r = t.load || e.load || t.locate;
  r && _(this.element).trigger("zui.locate", r);
};
Ld.NAME = "ajaxform";
function Wd(t, e) {
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
    const l = i.indexOf("("), u = (l > 0 ? i.substring(0, l) : i).split(".");
    let d = window, f = u[0];
    u.length > 1 && (f = u[1], u[0] === "top" ? d = window.top : u[0] === "parent" ? d = window.parent : d = window[u[0]]);
    const p = d == null ? void 0 : d[f];
    if (typeof p == "function") {
      let g = [];
      return l > 0 && i[i.length - 1] == ")" ? g = JSON.parse("[" + i.substring(l + 1, i.length - 1) + "]") : g.push(t), p.apply(this, g);
    }
  } else
    i && typeof i == "object" && (i.target ? window[i.target] : window)[i.name].apply(this, Array.isArray(i.params) ? i.params : [i.params]);
  const r = t.load || e.load || t.locate;
  r && _(e.element || document).trigger("zui.locate", r);
}
async function yh(t) {
  var h, l, u;
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
    for (const [d, f] of Object.entries(s))
      if (Array.isArray(f)) {
        for (const p of f)
          i.append(d, p);
        continue;
      } else
        i.append(d, f);
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
  return o ? (l = t.onError) == null || l.call(t, o, a) : Wd(c, t), (u = t.onComplete) == null || u.call(t, c, o), n && e && _(n).removeClass(e), [c, o];
}
_.extend(_, { ajaxSubmit: yh });
_(document).on("click.ajaxSubmit.zui", ".ajax-submit", function(t) {
  t.preventDefault();
  const e = _(this), n = e.data();
  !n.url && e.is("a") && (n.url = e.attr("href") || ""), n.url && (n.element = this, yh(n));
});
var as, wi, vi, bi;
class Dd extends G {
  constructor(n) {
    super(n);
    W(this, as, _e());
    W(this, wi, (n) => {
      n.stopPropagation(), Mt.show({
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
    W(this, vi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    W(this, bi, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, as).current;
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
      fetch(ut(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ m(Il, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ m("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: c, menu: h, id: l } = a, { loading: u, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: E(this, vi),
        onDragEnd: E(this, bi),
        "data-id": l,
        ref: E(this, as),
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: c }),
            h ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, wi), children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
as = new WeakMap(), wi = new WeakMap(), vi = new WeakMap(), bi = new WeakMap();
var wh = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, Vt = (t, e, n) => (wh(t, e, "read from private field"), n ? n.call(t) : e.get(t)), _t = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, xt = (t, e, n) => (wh(t, e, "access private method"), n), Jt, Ko, vh, Xo, bh, Wr, xh, Jo, kh, ci, Dr, Oi, Pr, Zo, Sh, Ir, Or, Hi, Qo;
const ta = class extends G {
  constructor() {
    super(...arguments), _t(this, Ko), _t(this, Xo), _t(this, Wr), _t(this, Jo), _t(this, ci), _t(this, Oi), _t(this, Zo), _t(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, _t(this, Ir, (t) => {
      var n;
      const e = (n = t.dataTransfer) == null ? void 0 : n.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }), _t(this, Or, (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    });
  }
  render() {
    const { blocks: t, height: e } = xt(this, Wr, xh).call(this), { cellHeight: n, grid: s } = this.props, i = Vt(this, Jt);
    return console.log("Dashboard.render", { blocks: t, map: i }, this), /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: e * n }, children: t.map((r, o) => {
      const { id: a } = r, [c, h, l, u] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        Dd,
        {
          id: a,
          index: o,
          left: `${100 * c / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * l / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Vt(this, Ir),
          onDragEnd: Vt(this, Or)
        },
        r.id
      );
    }) }) });
  }
};
let ea = ta;
Jt = /* @__PURE__ */ new WeakMap();
Ko = /* @__PURE__ */ new WeakSet();
vh = function(t) {
  const { blockDefaultSize: e, blockSizeMap: n } = this.props;
  return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
};
Xo = /* @__PURE__ */ new WeakSet();
bh = function() {
  const { blocks: t, blockFetch: e, blockMenu: n } = this.props;
  return t.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: c = -1,
      fetch: h = e,
      menu: l = n,
      ...u
    } = i, [d, f] = xt(this, Ko, vh).call(this, o);
    return {
      id: `${r}`,
      width: d,
      height: f,
      left: a,
      top: c,
      fetch: h,
      menu: l,
      ...u
    };
  });
};
Wr = /* @__PURE__ */ new WeakSet();
xh = function() {
  Vt(this, Jt).clear();
  let t = 0;
  const e = xt(this, Xo, bh).call(this);
  return e.forEach((n) => {
    xt(this, Jo, kh).call(this, n);
    const [, s, , i] = Vt(this, Jt).get(n.id);
    t = Math.max(t, s + i);
  }), { blocks: e, height: t };
};
Jo = /* @__PURE__ */ new WeakSet();
kh = function(t) {
  const e = Vt(this, Jt), { id: n, left: s, top: i, width: r, height: o } = t;
  if (s < 0 || i < 0) {
    const [a, c] = xt(this, Zo, Sh).call(this, r, o, s, i);
    e.set(n, [a, c, r, o]);
  } else
    xt(this, Oi, Pr).call(this, n, [s, i, r, o]);
};
ci = /* @__PURE__ */ new WeakSet();
Dr = function(t) {
  var e;
  const { dragging: n } = this.state;
  for (const [s, i] of Vt(this, Jt).entries())
    if (s !== n && xt(e = ta, Hi, Qo).call(e, i, t))
      return !1;
  return !0;
};
Oi = /* @__PURE__ */ new WeakSet();
Pr = function(t, e) {
  var n;
  Vt(this, Jt).set(t, e);
  for (const [s, i] of Vt(this, Jt).entries())
    s !== t && xt(n = ta, Hi, Qo).call(n, i, e) && (i[1] = e[1] + e[3], xt(this, Oi, Pr).call(this, s, i));
};
Zo = /* @__PURE__ */ new WeakSet();
Sh = function(t, e, n, s) {
  if (n >= 0 && s >= 0) {
    if (xt(this, ci, Dr).call(this, [n, s, t, e]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (xt(this, ci, Dr).call(this, [i, r, t, e])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + t > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Ir = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakSet();
Qo = function([t, e, n, s], [i, r, o, a]) {
  return !(t + n <= i || i + o <= t || e + s <= r || r + a <= e);
};
_t(ea, Hi);
ea.defaultProps = {
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
class $h extends rt {
}
$h.NAME = "Dashboard";
$h.Component = ea;
var oe, ae;
class Za extends G {
  constructor(n) {
    super(n);
    W(this, oe, void 0);
    W(this, ae, void 0);
    B(this, oe, 0), B(this, ae, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (E(this, oe) && cancelAnimationFrame(E(this, oe)), B(this, oe, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), B(this, oe, 0);
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
    n && (B(this, ae, typeof n == "string" ? document : n.current), E(this, ae).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, ae) && E(this, ae).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: u, scrollPos: d } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: c,
      bottom: h,
      right: l,
      ...o
    }, g = {};
    return s === "horz" ? (p.height = i, p.width = n, g.width = this.barSize, g.left = Math.round(Math.min(u, d) * (n - g.width) / u)) : (p.width = i, p.height = n, g.height = this.barSize, g.top = Math.round(Math.min(u, d) * (n - g.height) / u)), /* @__PURE__ */ m(
      "div",
      {
        className: T("scrollbar", r, {
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
            style: g,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
oe = new WeakMap(), ae = new WeakMap();
function Pd(t, e, n) {
  return t && (e && (t = Math.max(e, t)), n && (t = Math.min(n, t))), t;
}
function Ch({ col: t, className: e, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: c, ...h }) {
  var D;
  const l = {
    left: t.left,
    width: t.realWidth,
    height: n,
    ...o
  }, { align: u, border: d } = t.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...t.setting.cellStyle,
    ...r
  }, p = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], g = ["dtable-cell-content", t.setting.cellClass], w = (D = s.data) == null ? void 0 : D[t.name], y = [a ?? w ?? ""], v = i ? i(y, { row: s, col: t, value: w }, it) : y, x = [], k = [], $ = {}, N = {};
  let R = "div";
  v == null || v.forEach((C) => {
    if (typeof C == "object" && C && !st(C) && ("html" in C || "className" in C || "style" in C || "attrs" in C || "children" in C || "tagName" in C)) {
      const L = C.outer ? x : k;
      C.html ? L.push(/* @__PURE__ */ m("div", { className: T("dtable-cell-html", C.className), style: C.style, dangerouslySetInnerHTML: { __html: C.html }, ...C.attrs ?? {} })) : (C.style && Object.assign(C.outer ? l : f, C.style), C.className && (C.outer ? p : g).push(C.className), C.children && L.push(C.children), C.attrs && Object.assign(C.outer ? $ : N, C.attrs)), C.tagName && !C.outer && (R = C.tagName);
    } else
      k.push(C);
  });
  const M = R;
  return /* @__PURE__ */ m(
    "div",
    {
      className: T(p),
      style: l,
      "data-col": t.name,
      "data-type": t.type,
      ...h,
      ...$,
      children: [
        k.length > 0 && /* @__PURE__ */ m(M, { className: T(g), style: f, ...N, children: k }),
        x
      ]
    }
  );
}
function Qi({ row: t, className: e, top: n = 0, left: s = 0, width: i, height: r, cols: o, CellComponent: a = Ch, onRenderCell: c }) {
  return /* @__PURE__ */ m("div", { className: T("dtable-cells", e), style: { top: n, left: s, width: i, height: r }, children: o.map((h) => h.visible ? /* @__PURE__ */ m(
    a,
    {
      col: h,
      row: t,
      onRenderCell: c
    },
    h.name
  ) : null) });
}
function Eh({
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
  scrollLeft: u,
  CellComponent: d = Ch,
  onRenderCell: f,
  style: p,
  ...g
}) {
  let w = null;
  i != null && i.length && (w = /* @__PURE__ */ m(
    Qi,
    {
      className: "dtable-fixed-left",
      cols: i,
      width: a,
      row: t,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  let y = null;
  o != null && o.length && (y = /* @__PURE__ */ m(
    Qi,
    {
      className: "dtable-flexable",
      cols: o,
      left: a - u,
      width: Math.max(c, h),
      row: t,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ m(
    Qi,
    {
      className: "dtable-fixed-right",
      cols: r,
      left: a + c,
      width: l,
      row: t,
      CellComponent: d,
      onRenderCell: f
    }
  ));
  const x = { top: n, height: s, lineHeight: `${s - 2}px`, ...p };
  return /* @__PURE__ */ m(
    "div",
    {
      className: T("dtable-row", e),
      style: x,
      "data-id": t.id,
      ...g,
      children: [
        w,
        y,
        v
      ]
    }
  );
}
function Id({ height: t, onRenderRow: e, ...n }) {
  const s = {
    height: t,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (e) {
    const i = e({ props: s }, it);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ m("div", { className: "dtable-header", style: { height: t }, children: /* @__PURE__ */ m(Eh, { ...s }) });
}
function Od({
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
  return e = { ...e, top: n, height: i }, /* @__PURE__ */ m("div", { className: T("dtable-rows", t), style: e, children: s.map((h) => {
    const l = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - o,
      height: r,
      ...c
    }, u = a == null ? void 0 : a({ props: l, row: h }, it);
    return u && Object.assign(l, u), /* @__PURE__ */ m(Eh, { ...l });
  }) });
}
const hi = /* @__PURE__ */ new Map(), ui = [];
function Mh(t, e) {
  const { name: n } = t;
  if (!(e != null && e.override) && hi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  hi.set(n, t), e != null && e.buildIn && !ui.includes(n) && ui.push(n);
}
function He(t, e) {
  Mh(t, e);
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
function Th(t) {
  return hi.delete(t);
}
function Hd(t) {
  if (typeof t == "string") {
    const e = hi.get(t);
    return e || console.warn(`DTable: Cannot found plugin "${t}"`), e;
  }
  if (typeof t == "function" && "plugin" in t)
    return t.plugin;
  if (typeof t == "object")
    return t;
  console.warn("DTable: Invalid plugin", t);
}
function Rh(t, e, n) {
  return e.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Hd(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && Rh(t, i.plugins, n), t.push(i), n.add(i.name)));
  }), t;
}
function Bd(t = [], e = !0) {
  return e && ui.length && t.unshift(...ui), t != null && t.length ? Rh([], t, /* @__PURE__ */ new Set()) : [];
}
function Ah() {
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
var na = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, S = (t, e, n) => (na(t, e, "read from private field"), n ? n.call(t) : e.get(t)), P = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, K = (t, e, n, s) => (na(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), Ht = (t, e, n) => (na(t, e, "access private method"), n), Ye, Nn, Ae, jt, Ee, tt, St, Ot, Ln, Bs, fi, ne, Wn, Dn, Hr, Nh, Br, Lh, zr, Wh, Fr, Dh, zs, Ur, sa, ia, Bi, di, jr, Vr, ra, Ph, oa, Ih, qr, Oh;
let aa = class extends G {
  constructor(e) {
    super(e), P(this, Hr), P(this, Br), P(this, zr), P(this, Fr), P(this, zs), P(this, ra), P(this, oa), P(this, qr), this.ref = _e(), P(this, Ye, 0), P(this, Nn, void 0), P(this, Ae, !1), P(this, jt, void 0), P(this, Ee, void 0), P(this, tt, []), P(this, St, void 0), P(this, Ot, /* @__PURE__ */ new Map()), P(this, Ln, {}), P(this, Bs, void 0), P(this, fi, []), this.updateLayout = () => {
      S(this, Ye) && cancelAnimationFrame(S(this, Ye)), K(this, Ye, requestAnimationFrame(() => {
        K(this, St, void 0), this.forceUpdate(), K(this, Ye, 0);
      }));
    }, P(this, ne, (n, s) => {
      s = s || n.type;
      const i = S(this, Ot).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), P(this, Wn, (n) => {
      S(this, ne).call(this, n, `window_${n.type}`);
    }), P(this, Dn, (n) => {
      S(this, ne).call(this, n, `document_${n.type}`);
    }), P(this, sa, (n, s) => {
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
    }), P(this, ia, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, tt).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), P(this, Bi, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[a] && (n = o.setting[a].call(this, n, s, i)), this.options[a] && (n = this.options[a].call(this, n, s, i)), S(this, tt).forEach((c) => {
        c[a] && (n = c[a].call(this, n, s, i));
      }), n;
    }), P(this, di, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), P(this, jr, (n) => {
      var a, c, h, l, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), S(this, tt).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: r, element: o });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (o) {
          if (((c = this.options.onCellClick) == null ? void 0 : c.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
            return;
          for (const p of S(this, tt))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: f, element: o, rowElement: d })) === !0)
              return;
        }
        if (((l = this.options.onRowClick) == null ? void 0 : l.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of S(this, tt))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), P(this, Vr, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), K(this, Nn, e.id ?? `dtable-${Ai(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, K(this, Ee, Object.freeze(Bd(e.plugins))), S(this, Ee).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, c]) => {
        typeof c == "function" && Object.assign(this, { [a]: c.bind(this) });
      }), i && Object.assign(S(this, Ln), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var e;
    return ((e = S(this, St)) == null ? void 0 : e.options) || S(this, jt) || Ah();
  }
  get plugins() {
    return S(this, tt);
  }
  get layout() {
    return S(this, St);
  }
  get id() {
    return S(this, Nn);
  }
  get data() {
    return S(this, Ln);
  }
  get parent() {
    var e;
    return this.props.parent ?? ((e = this.ref.current) == null ? void 0 : e.parentElement);
  }
  componentWillReceiveProps() {
    K(this, jt, void 0);
  }
  componentDidMount() {
    if (S(this, Ae) ? this.forceUpdate() : Ht(this, zs, Ur).call(this), S(this, tt).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, jr)), this.on("keydown", S(this, Vr)), this.options.responsive) {
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), K(this, Bs, n);
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
    S(this, Ae) ? Ht(this, zs, Ur).call(this) : S(this, tt).forEach((e) => {
      var n;
      (n = e.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, Bs)) == null || n.disconnect();
    const { current: e } = this.ref;
    if (e)
      for (const s of S(this, Ot).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, Wn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Dn)) : e.removeEventListener(s, S(this, ne));
    S(this, tt).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, Ee).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), K(this, Ln, {}), S(this, Ot).clear();
  }
  on(e, n, s) {
    var r;
    s && (e = `${s}_${e}`);
    const i = S(this, Ot).get(e);
    i ? i.push(n) : (S(this, Ot).set(e, [n]), e.startsWith("window_") ? window.addEventListener(e.replace("window_", ""), S(this, Wn)) : e.startsWith("document_") ? document.addEventListener(e.replace("document_", ""), S(this, Dn)) : (r = this.ref.current) == null || r.addEventListener(e, S(this, ne)));
  }
  off(e, n, s) {
    var o;
    s && (e = `${s}_${e}`);
    const i = S(this, Ot).get(e);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (S(this, Ot).delete(e), e.startsWith("window_") ? window.removeEventListener(e.replace("window_", ""), S(this, Wn)) : e.startsWith("document_") ? document.removeEventListener(e.replace("document_", ""), S(this, Dn)) : (o = this.ref.current) == null || o.removeEventListener(e, S(this, ne)));
  }
  emitCustomEvent(e, n) {
    S(this, ne).call(this, n instanceof Event ? n : new CustomEvent(e, { detail: n }), e);
  }
  scroll(e, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, colsInfo: { scrollWidth: c, scrollColsWidth: h } } = this.layout, { to: l } = e;
    let { scrollLeft: u, scrollTop: d } = e;
    if (l === "up" || l === "down")
      d = i + (l === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (l === "left" || l === "right")
      u = s + (l === "right" ? 1 : -1) * c;
    else if (l === "home")
      d = 0;
    else if (l === "end")
      d = r - o;
    else if (l === "left-begin")
      u = 0;
    else if (l === "right-end")
      u = h - c;
    else {
      const { offsetLeft: p, offsetTop: g } = e;
      typeof p == "number" && (u = s + p), typeof g == "number" && (u = i + g);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, h - c)), u !== s && (f.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, r - o)), d !== i && (f.scrollTop = d)), Object.keys(f).length ? (this.setState(f, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, f), n == null || n.call(this, !0);
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
    if (!S(this, jt))
      return;
    typeof e == "function" && (n = e, e = {});
    const { dirtyType: s, state: i } = e;
    if (s === "layout")
      K(this, St, void 0);
    else if (s === "options") {
      if (K(this, jt, void 0), !S(this, St))
        return;
      K(this, St, void 0);
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
    return Yt(S(this, fi), e, n, s, this.options.lang) ?? `{i18n:${e}}`;
  }
  getPlugin(e) {
    return this.plugins.find((n) => n.name === e);
  }
  render() {
    const e = Ht(this, qr, Oh).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: c } = this.options, h = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height }, l = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "dtable-scrolled-down": ((e == null ? void 0 : e.scrollTop) ?? 0) > 0,
      "scrollbar-hover": c
    }], u = [];
    return e && S(this, tt).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, e);
      f && (f.style && Object.assign(h, f.style), f.className && l.push(f.className), f.children && u.push(f.children));
    }), /* @__PURE__ */ m(
      "div",
      {
        id: S(this, Nn),
        className: T(l),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: [
          e && Ht(this, Hr, Nh).call(this, e),
          e && Ht(this, Br, Lh).call(this, e),
          e && Ht(this, zr, Wh).call(this, e),
          e && Ht(this, Fr, Dh).call(this, e)
        ]
      }
    );
  }
};
Ye = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
Ee = /* @__PURE__ */ new WeakMap();
tt = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
Bs = /* @__PURE__ */ new WeakMap();
fi = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
Hr = /* @__PURE__ */ new WeakSet();
Nh = function(t) {
  const { header: e, colsInfo: n, headerHeight: s, scrollLeft: i } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ m(
      Id,
      {
        scrollLeft: i,
        height: s,
        onRenderCell: S(this, Bi),
        onRenderRow: S(this, ia),
        ...n
      }
    );
  const r = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    co,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [t],
      generatorThis: this
    }
  );
};
Br = /* @__PURE__ */ new WeakSet();
Lh = function(t) {
  const { headerHeight: e, rowsHeight: n, visibleRows: s, rowHeight: i, colsInfo: r, scrollLeft: o, scrollTop: a } = t;
  return /* @__PURE__ */ m(
    Od,
    {
      top: e,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      onRenderCell: S(this, Bi),
      onRenderRow: S(this, sa),
      ...r
    }
  );
};
zr = /* @__PURE__ */ new WeakSet();
Wh = function(t) {
  const { footer: e } = t;
  if (!e)
    return null;
  const n = typeof e == "function" ? e.call(this, t) : Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    co,
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
Fr = /* @__PURE__ */ new WeakSet();
Dh = function(t) {
  const e = [], { scrollLeft: n, colsInfo: s, scrollTop: i, rowsHeight: r, rowsHeightTotal: o, footerHeight: a } = t, { scrollColsWidth: c, scrollWidth: h } = s, { scrollbarSize: l = 12, horzScrollbarPos: u } = this.options;
  return c > h && e.push(
    /* @__PURE__ */ m(
      Za,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: c,
        clientSize: h,
        onScroll: S(this, di),
        left: s.fixedLeftWidth,
        bottom: (u === "inside" ? 0 : -l) + a,
        size: l,
        wheelContainer: this.ref
      },
      "horz"
    )
  ), o > r && e.push(
    /* @__PURE__ */ m(
      Za,
      {
        type: "vert",
        scrollPos: i,
        scrollSize: o,
        clientSize: r,
        onScroll: S(this, di),
        right: 0,
        size: l,
        top: t.headerHeight,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
};
zs = /* @__PURE__ */ new WeakSet();
Ur = function() {
  var t;
  K(this, Ae, !1), (t = this.options.afterRender) == null || t.call(this), S(this, tt).forEach((e) => {
    var n;
    return (n = e.afterRender) == null ? void 0 : n.call(this);
  });
};
sa = /* @__PURE__ */ new WeakMap();
ia = /* @__PURE__ */ new WeakMap();
Bi = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
jr = /* @__PURE__ */ new WeakMap();
Vr = /* @__PURE__ */ new WeakMap();
ra = /* @__PURE__ */ new WeakSet();
Ph = function() {
  if (S(this, jt))
    return !1;
  const e = { ...Ah(), ...S(this, Ee).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return K(this, jt, e), K(this, tt, S(this, Ee).reduce((n, s) => {
    const { when: i, options: r } = s;
    return (!i || i(e)) && (n.push(s), r && Object.assign(e, typeof r == "function" ? r.call(this, e) : r)), n;
  }, [])), K(this, fi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
oa = /* @__PURE__ */ new WeakSet();
Ih = function() {
  var ve, Be;
  const { plugins: t } = this;
  let e = S(this, jt);
  const n = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((A) => {
    var ot;
    const Y = (ot = A.beforeLayout) == null ? void 0 : ot.call(this, e);
    Y && (e = { ...e, ...Y }), Object.assign(n, A.footer);
  });
  let s = e.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: A } = this;
    if (A)
      i = A.clientWidth;
    else {
      i = 0, K(this, Ae, !0);
      return;
    }
  } else
    s !== "auto" && (i = s ?? 0);
  const { defaultColWidth: r, minColWidth: o, maxColWidth: a } = e, c = [], h = [], l = [], u = {}, d = [], f = [];
  let p = 0, g = 0, w = 0;
  e.cols.forEach((A) => {
    if (A.hidden)
      return;
    const Y = A.type || "", ot = {
      fixed: !1,
      flex: !1,
      width: r,
      minWidth: o,
      maxWidth: a,
      ...A,
      type: Y
    }, I = {
      name: ot.name,
      type: Y,
      setting: ot,
      flex: 0,
      left: 0,
      width: ot.width || 0,
      realWidth: 0,
      visible: !0,
      index: d.length
    };
    t.forEach((ha) => {
      var ua, fa;
      const ds = (ua = ha.colTypes) == null ? void 0 : ua[Y];
      if (ds) {
        const da = typeof ds == "function" ? ds(I) : ds;
        da && Object.assign(ot, da, A);
      }
      (fa = ha.onAddCol) == null || fa.call(this, I);
    });
    const { fixed: ze, flex: Fe, width: _n = r } = ot;
    I.flex = ze ? 0 : Fe === !0 ? 1 : typeof Fe == "number" ? Fe : 0, I.width = Pd(_n < 1 ? Math.round(_n * i) : _n, ot.minWidth, ot.maxWidth), I.realWidth = I.realWidth || I.width, ze === "left" ? (I.left = p, p += I.width, c.push(I)) : ze === "right" ? (I.left = g, g += I.width, h.push(I)) : (I.left = w, w += I.width, l.push(I)), I.flex && f.push(I), d.push(I), u[I.name] = I;
  });
  const y = p + w + g;
  s === "auto" && (i = y);
  const { data: v, rowKey: x = "id", rowHeight: k } = e, $ = [], N = (A, Y, ot) => {
    var ze, Fe;
    const I = { data: ot ?? { [x]: A }, id: A, index: $.length, top: 0 };
    if (ot || (I.lazy = !0), $.push(I), ((ze = e.onAddRow) == null ? void 0 : ze.call(this, I, Y)) !== !1) {
      for (const _n of t)
        if (((Fe = _n.onAddRow) == null ? void 0 : Fe.call(this, I, Y)) === !1)
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
  const M = {};
  if (e.onAddRows) {
    const A = e.onAddRows.call(this, R);
    A && (R = A);
  }
  for (const A of t) {
    const Y = (ve = A.onAddRows) == null ? void 0 : ve.call(this, R);
    Y && (R = Y);
  }
  R.forEach((A, Y) => {
    M[A.id] = A, A.index = Y, A.top = A.index * k;
  });
  const { header: D, footer: C } = e, L = D ? e.headerHeight || k : 0, U = C ? e.footerHeight || k : 0;
  let j = e.height, H = 0;
  const O = R.length * k, V = L + U + O;
  if (typeof j == "function" && (j = j.call(this, V)), j === "auto")
    H = V;
  else if (typeof j == "object")
    H = Math.min(j.max, Math.max(j.min, V));
  else if (j === "100%") {
    const { parent: A } = this;
    if (A)
      H = A.clientHeight;
    else {
      H = 0, K(this, Ae, !0);
      return;
    }
  } else
    H = j;
  const gt = H - L - U, we = i - p - g, kt = {
    options: e,
    allRows: $,
    width: i,
    height: H,
    rows: R,
    rowsMap: M,
    rowHeight: k,
    rowsHeight: gt,
    rowsHeightTotal: O,
    header: D,
    footer: C,
    footerGenerators: n,
    headerHeight: L,
    footerHeight: U,
    colsMap: u,
    colsList: d,
    flexCols: f,
    colsInfo: {
      fixedLeftCols: c,
      fixedRightCols: h,
      scrollCols: l,
      fixedLeftWidth: p,
      scrollWidth: we,
      scrollColsWidth: w,
      fixedRightWidth: g
    }
  }, Qt = (Be = e.onLayout) == null ? void 0 : Be.call(this, kt);
  Qt && Object.assign(kt, Qt), t.forEach((A) => {
    if (A.onLayout) {
      const Y = A.onLayout.call(this, kt);
      Y && Object.assign(kt, Y);
    }
  }), K(this, St, kt);
};
qr = /* @__PURE__ */ new WeakSet();
Oh = function() {
  (Ht(this, ra, Ph).call(this) || !S(this, St)) && Ht(this, oa, Ih).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  let { scrollLeft: e } = this.state;
  const { flexCols: n, colsInfo: { scrollCols: s, scrollWidth: i, scrollColsWidth: r } } = t;
  if (n.length) {
    const y = i - r;
    if (y > 0) {
      const v = n.reduce((k, $) => k + $.flex, 0);
      let x = 0;
      n.forEach((k) => {
        const $ = Math.min(y - x, Math.ceil(y * (k.flex / v)));
        k.realWidth = $ + k.width, x += k.realWidth;
      });
    } else
      n.forEach((v) => {
        v.realWidth = v.width;
      });
  }
  e = Math.min(Math.max(0, r - i), e);
  let o = 0;
  s.forEach((y) => {
    y.left = o, o += y.realWidth, y.visible = y.left + y.realWidth >= e && y.left <= e + i;
  });
  const { rowsHeightTotal: a, rowsHeight: c, rows: h, rowHeight: l } = t, u = Math.min(Math.max(0, a - c), this.state.scrollTop), d = Math.floor(u / l), f = u + c, p = Math.min(h.length, Math.ceil(f / l)), g = [], { rowDataGetter: w } = this.options;
  for (let y = d; y < p; y++) {
    const v = h[y];
    v.lazy && w && (v.data = w([v.id])[0], v.lazy = !1), g.push(v);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = e, t;
};
aa.addPlugin = Mh;
aa.removePlugin = Th;
function Qa(t, e) {
  e !== void 0 ? t.data.hoverCol = e : e = t.data.hoverCol;
  const { current: n } = t.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof e == "string" && e.length && n.querySelectorAll(`.dtable-cell[data-col="${e}"]`).forEach((i) => i.classList.add(s));
}
const zd = {
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
      Qa(this, s);
    },
    mouseleave() {
      Qa(this, !1);
    }
  }
}, Fd = He(zd, { buildIn: !0 });
function Ud(t, e) {
  var o, a;
  typeof t == "boolean" && (e = t, t = void 0);
  const n = this.state.checkedRows, s = {}, { canRowCheckable: i } = this.options, r = (c, h) => {
    i && !i.call(this, c) || !!n[c] === h || (h ? n[c] = !0 : delete n[c], s[c] = h);
  };
  if (t === void 0 ? (e === void 0 && (e = !Hh.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: c }) => {
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
function jd(t) {
  return this.state.checkedRows[t] ?? !1;
}
function Hh() {
  var n, s;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((n = this.layout) == null ? void 0 : n.allRows.reduce((i, r) => i + (e.call(this, r.id) ? 1 : 0), 0)) : t === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function Vd() {
  return Object.keys(this.state.checkedRows);
}
function qd(t) {
  const { checkable: e } = this.options;
  t === void 0 && (t = !e), e !== t && this.setState({ forceCheckable: t });
}
function Gd(t) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${t ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const Yd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Gd
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
    toggleCheckRows: Ud,
    isRowChecked: jd,
    isAllRowChecked: Hh,
    getChecks: Vd,
    toggleCheckable: qd
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: /* @__PURE__ */ m("input", { type: "checkbox", checked: t }) })
      ];
    },
    checkedInfo(t, e) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ m("div", { children: r.join(", ") })
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
      return { className: T(t.className, "is-checked") };
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
}, Kd = He(Yd);
var Bh = /* @__PURE__ */ ((t) => (t.unknown = "", t.collapsed = "collapsed", t.expanded = "expanded", t.hidden = "hidden", t.normal = "normal", t))(Bh || {});
function pi(t) {
  const e = this.data.nestedMap.get(t);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const n = this.state.collapsedRows, s = e.children && n && n[t];
  let i = !1, { parent: r } = e;
  for (; r; ) {
    const o = pi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? pi.call(this, e.parent).level + 1 : 0, e;
}
function Xd(t) {
  return t !== void 0 ? pi.call(this, t) : this.data.nestedMap;
}
function Jd(t, e) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (t === "HEADER")
    if (e === void 0 && (e = !zh.call(this)), e) {
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
function zh() {
  const t = this.data.nestedMap.values();
  for (const e of t)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Fh(t, e = 0, n, s = 0) {
  var i;
  n || (n = [...t.keys()]);
  for (const r of n) {
    const o = t.get(r);
    o && (o.level === s && (o.order = e++), (i = o.children) != null && i.length && (e = Fh(t, e, o.children, s + 1)));
  }
  return e;
}
function Uh(t, e, n, s) {
  const i = t.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, Uh(t, r, n, s);
  }), i;
}
function jh(t, e, n, s, i) {
  var a;
  const r = t.getNestedRowInfo(e);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((c) => {
    const h = !!(s[c] !== void 0 ? s[c] : i[c]);
    return n === h;
  })) && (s[e] = n), r.parent && jh(t, r.parent, n, s, i);
}
const Zd = {
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
        const o = Uh(this, i, r, s);
        o != null && o.parent && jh(this, o.parent, r, s, n);
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
    getNestedInfo: Xd,
    toggleRow: Jd,
    isAllCollapsed: zh,
    getNestedRowInfo: pi
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
    ), Fh(this.data.nestedMap), t.sort((e, n) => {
      const s = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? e.index - n.index : r;
    }), t;
  },
  onRenderCell(t, { col: e, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = e.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && t.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, e, i)) ?? /* @__PURE__ */ m("a", { role: "button", className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: c = r } = e.setting;
      c && (c === !0 && (c = this.options.nestedIndent ?? 12), t.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: c * o.level + "px" } })));
    }
    return t;
  },
  onRenderHeaderCell(t, { row: e, col: n }) {
    var i;
    const { id: s } = e;
    return n.setting.nestedToggle && t.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ m("a", { type: "button", className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) })), t;
  },
  onRenderRow({ props: t, row: e }) {
    const n = this.getNestedRowInfo(e.id);
    return {
      className: T(t.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: t }) {
    return t.className = T(t.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), t;
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
}, Qd = He(Zd);
function Vh(t, e, n, s) {
  if (!t)
    return n;
  typeof t == "function" && (t = t(e)), typeof t == "string" && (t = { url: t });
  const { url: i, ...r } = t;
  return /* @__PURE__ */ m("a", { href: ut(i, e.row.data), ...s, ...r, children: n });
}
function la(t, e, n) {
  var s;
  if (t != null)
    return n = n ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof t == "function" ? t(n, e) : ut(t, n);
}
function qh(t, e, n, s) {
  var i;
  return n = n ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), t === !1 ? n : (t === !0 && (t = "[yyyy-]MM-dd hh:mm"), typeof t == "function" && (t = t(n, e)), xr(n, t, s));
}
function Gh(t, e) {
  const { link: n } = e.col.setting, s = Vh(n, e, t[0]);
  return s && (t[0] = s), t;
}
function Yh(t, e) {
  const { format: n } = e.col.setting;
  return n && (t[0] = la(n, e, t[0])), t;
}
function Kh(t, e) {
  const { map: n } = e.col.setting;
  return typeof n == "function" ? t[0] = n(t[0], e) : typeof n == "object" && n && (t[0] = n[t[0]] ?? t[0]), t;
}
function Pn(t, e, n = "[yyyy-]MM-dd hh:mm") {
  const { format: s = n, invalidDate: i } = e.col.setting;
  return t[0] = qh(s, e, t[0], i), t;
}
function Gr(t, e, n = !1) {
  const { html: s = n } = e.col.setting;
  if (s === !1)
    return t;
  const i = t[0], r = s === !0 ? i : la(s, e, i);
  return t[0] = {
    html: r
  }, t;
}
const tp = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(t, e) {
        return Gr(t, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(t, { col: e }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = e.setting, o = (n - s) / 2, a = n / 2, c = t[0];
        return t[0] = /* @__PURE__ */ m("svg", { width: n, height: n, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - c) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(c) })
        ] }), t;
      }
    },
    datetime: {
      onRenderCell(t, e) {
        return Pn(t, e, "[yyyy-]MM-dd hh:mm");
      }
    },
    date: {
      onRenderCell(t, e) {
        return Pn(t, e, "yyyy-MM-dd");
      }
    },
    time: {
      onRenderCell(t, e) {
        return Pn(t, e, "hh:mm");
      }
    }
  },
  onRenderCell(t, e) {
    const { formatDate: n, html: s } = e.col.setting;
    return n && (t = Pn(t, e, n)), t = Kh(t, e), t = Yh(t, e), s ? t = Gr(t, e) : t = Gh(t, e), t;
  }
}, ep = He(tp, { buildIn: !0 });
function tr(t, { row: e, col: n }) {
  const { data: s } = e, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return t;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: c, avatarNameKey: h = `${n.name}Name` } = n.setting, l = (s ? s[h] : i) || t[0], u = {
    size: "xs",
    className: T(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: l,
    code: c ? s ? s[c] : void 0 : i,
    ...a
  };
  if (t[0] = /* @__PURE__ */ m(Tc, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, e) : d;
    t[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      t[0],
      /* @__PURE__ */ m("div", { children: l })
    ] });
  } else
    n.type === "avatarName" && (t[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      t[0],
      /* @__PURE__ */ m("span", { children: l })
    ] }));
  return t;
}
const np = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: tr
    },
    avatarBtn: {
      onRenderCell: tr
    },
    avatarName: {
      onRenderCell: tr
    }
  }
}, sp = He(np, { buildIn: !0 }), ip = {
  name: "sort-type",
  onRenderHeaderCell(t, e) {
    const { col: n } = e, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      t.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...c } = r;
        t[0] = /* @__PURE__ */ m("a", { href: ut(a, { ...n.setting, sortType: o }), ...c, children: t[0] });
      }
    }
    return t;
  }
}, rp = He(ip, { buildIn: !0 }), op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Bh,
  avatar: sp,
  checkable: Kd,
  colHover: Fd,
  nested: Qd,
  renderDatetime: qh,
  renderDatetimeCell: Pn,
  renderFormat: la,
  renderFormatCell: Yh,
  renderHtmlCell: Gr,
  renderLink: Vh,
  renderLinkCell: Gh,
  renderMapCell: Kh,
  rich: ep,
  sortType: rp
}, Symbol.toStringTag, { value: "Module" }));
class fs extends rt {
}
fs.NAME = "DTable";
fs.Component = aa;
fs.definePlugin = He;
fs.removePlugin = Th;
fs.plugins = op;
var Xh = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
}, be = (t, e, n) => (Xh(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ap = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
}, tl = (t, e, n, s) => (Xh(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), yt;
const el = "nav-tabs";
class Jh extends Wt {
  constructor() {
    super(...arguments), ap(this, yt, void 0);
  }
  init() {
    const { $element: e } = this;
    !e.is("body") && !e.attr("data-toggle") && e.attr("data-toggle", "tab");
  }
  showTarget() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && tl(this, yt, _(n)[0]), this.addActive(e.closest(`.${el}`)[0], e.parent()[0]), be(this, yt) && (this.addActive(_(be(this, yt))[0], be(this, yt)), be(this, yt).dispatchEvent(new CustomEvent("show.zui3.tab")));
  }
  show() {
    const { $element: e } = this, n = e.attr("href") || e.dataset("target") || e.dataset("tab") || "";
    n.startsWith("#") && tl(this, yt, _(n)[0]), be(this, yt) && (this.addActive(be(this, yt).parentElement, be(this, yt)), this.addActive(e.closest(`.${el}`)[0], e.parent()[0]));
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
yt = /* @__PURE__ */ new WeakMap();
Jh.NAME = "NavTabs";
_(document).on("click", '[data-toggle="tab"],[data-tab]', (t) => {
  t.preventDefault(), Jh.ensure(t.target).showTarget();
});
_(() => {
  _(".disabled, [disabled]").on("click", (t) => {
    t.preventDefault(), t.stopImmediatePropagation();
  });
});
export {
  _ as $,
  tc as ActionMenu,
  sc as ActionMenuNested,
  Ld as AjaxForm,
  Rc as Avatar,
  Ac as BtnGroup,
  Wt as Component,
  rt as ComponentFromReact,
  Mt as ContextMenu,
  co as CustomRender,
  fs as DTable,
  $h as Dashboard,
  ue as Dropdown,
  Mc as EventBus,
  Xu as HElement,
  Il as HtmlContent,
  ic as Menu,
  xo as Messager,
  Co as Modal,
  ye as ModalBase,
  Ic as ModalTrigger,
  Hc as Nav,
  Jh as NavTabs,
  Bc as Pager,
  Kc as Picker,
  Cc as ProgressCircle,
  G as ReactComponent,
  Ec as Switch,
  Bt as TIME_DAY,
  Xc as Toolbar,
  At as Tooltip,
  yh as ajaxSubmit,
  Va as calculateTimestamp,
  _ as cash,
  T as classes,
  hp as convertBytes,
  ft as createDate,
  ef as createPortal,
  _e as createRef,
  up as dom,
  cp as formatBytes,
  xr as formatDate,
  Mp as formatDateSpan,
  ut as formatString,
  bl as getClassList,
  Tp as getTimeBeforeDesc,
  it as h,
  fp as hh,
  Ku as htm,
  Yt as i18n,
  Ep as isDBY,
  Vi as isObject,
  hs as isSameDay,
  od as isSameMonth,
  kp as isSameWeek,
  br as isSameYear,
  Sp as isToday,
  Cp as isTomorrow,
  st as isValidElement,
  $p as isYesterday,
  nr as mergeDeep,
  Ba as nativeEvents,
  Xn as render,
  Zu as renderCustomResult,
  ir as renderIcon,
  Vf as store,
  xl as storeData,
  ju as takeData
};
