var Vn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var D = (s, t, e) => (Vn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), U = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, j = (s, t, e, n) => (Vn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Un = (s, t, e) => (Vn(s, t, "access private method"), e);
const Ht = document, Xs = window, Lo = Ht.documentElement, me = Ht.createElement.bind(Ht), Ro = me("div"), jn = me("table"), tc = me("tbody"), zr = me("tr"), { isArray: vn, prototype: Wo } = Array, { concat: ec, filter: Ki, indexOf: Ho, map: Oo, push: sc, slice: Fo, some: qi, splice: nc } = Wo, ic = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, rc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, oc = /<.+>/, ac = /^\w+$/;
function Gi(s, t) {
  const e = lc(t);
  return !s || !e && !de(t) && !J(t) ? [] : !e && rc.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && ac.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class wn {
  constructor(t, e) {
    if (!t)
      return;
    if (ai(t))
      return t;
    let n = t;
    if (nt(t)) {
      const i = e || Ht;
      if (n = ic.test(t) && de(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : oc.test(t) ? Vo(t) : ai(i) ? i.find(t) : nt(i) ? u(i).find(t) : Gi(t, i), !n)
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
const S = wn.prototype, u = S.init;
u.fn = u.prototype = S;
S.length = 0;
S.splice = nc;
typeof Symbol == "function" && (S[Symbol.iterator] = Wo[Symbol.iterator]);
function ai(s) {
  return s instanceof wn;
}
function Ne(s) {
  return !!s && s === s.window;
}
function de(s) {
  return !!s && s.nodeType === 9;
}
function lc(s) {
  return !!s && s.nodeType === 11;
}
function J(s) {
  return !!s && s.nodeType === 1;
}
function cc(s) {
  return !!s && s.nodeType === 3;
}
function hc(s) {
  return typeof s == "boolean";
}
function ge(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function ut(s) {
  return s === void 0;
}
function ts(s) {
  return s === null;
}
function Bo(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Yi(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Ne;
u.isFunction = ge;
u.isArray = vn;
u.isNumeric = Bo;
u.isPlainObject = Yi;
function Z(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Yi(s)) {
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
u.each = Z;
S.each = function(s) {
  return Z(this, s);
};
S.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Js(...s) {
  const t = hc(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Js(t, u, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (vn(r[o]) || Yi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Js(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = Js;
S.extend = function(s) {
  return Js(S, s);
};
const dc = /\S+/g;
function Cn(s) {
  return nt(s) ? s.match(dc) || [] : [];
}
S.toggleClass = function(s, t) {
  const e = Cn(s), n = !ut(t);
  return this.each((i, r) => {
    J(r) && Z(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
S.addClass = function(s) {
  return this.toggleClass(s, !0);
};
S.removeAttr = function(s) {
  const t = Cn(s);
  return this.each((e, n) => {
    J(n) && Z(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function uc(s, t) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !J(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return ts(e) ? void 0 : e;
      }
      return ut(t) ? this : ts(t) ? this.removeAttr(s) : this.each((e, n) => {
        J(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
S.attr = uc;
S.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
S.hasClass = function(s) {
  return !!s && qi.call(this, (t) => J(t) && t.classList.contains(s));
};
S.get = function(s) {
  return ut(s) ? Fo.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
S.eq = function(s) {
  return u(this.get(s));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function fc(s) {
  return ut(s) ? this.get().map((t) => J(t) || cc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    J(e) && (e.textContent = s);
  });
}
S.text = fc;
function Ot(s, t, e) {
  if (!J(s))
    return;
  const n = Xs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function kt(s, t) {
  return parseInt(Ot(s, t), 10) || 0;
}
function Vr(s, t) {
  return kt(s, `border${t ? "Left" : "Top"}Width`) + kt(s, `padding${t ? "Left" : "Top"}`) + kt(s, `padding${t ? "Right" : "Bottom"}`) + kt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const Kn = {};
function pc(s) {
  if (Kn[s])
    return Kn[s];
  const t = me(s);
  Ht.body.insertBefore(t, null);
  const e = Ot(t, "display");
  return Ht.body.removeChild(t), Kn[s] = e !== "none" ? e : "block";
}
function Ur(s) {
  return Ot(s, "display") === "none";
}
function zo(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function kn(s) {
  return nt(s) ? (t, e) => zo(e, s) : ge(s) ? s : ai(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
S.filter = function(s) {
  const t = kn(s);
  return u(Ki.call(this, (e, n) => t.call(e, n, e)));
};
function te(s, t) {
  return t ? s.filter(t) : s;
}
S.detach = function(s) {
  return te(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const mc = /^\s*<(\w+)[^>]*>/, gc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, jr = {
  "*": Ro,
  tr: tc,
  td: zr,
  th: zr,
  thead: jn,
  tbody: jn,
  tfoot: jn
};
function Vo(s) {
  if (!nt(s))
    return [];
  if (gc.test(s))
    return [me(RegExp.$1)];
  const t = mc.test(s) && RegExp.$1, e = jr[t] || jr["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = Vo;
S.has = function(s) {
  const t = nt(s) ? (e, n) => Gi(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
S.not = function(s) {
  const t = kn(s);
  return this.filter((e, n) => (!nt(s) || J(n)) && !t.call(n, e, n));
};
function zt(s, t, e, n) {
  const i = [], r = ge(t), o = n && kn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && sc.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Uo(s) {
  return s.multiple && s.options ? zt(Ki.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function _c(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || Zo.test(e.type)) {
      const i = vn(s) ? Oo.call(s, String) : ts(s) ? [] : [String(s)];
      n ? Z(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ut(s) || ts(s) ? "" : s;
  }) : this[0] && Uo(this[0]);
}
S.val = _c;
S.is = function(s) {
  const t = kn(s);
  return qi.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function Tt(s) {
  return s.length > 1 ? Ki.call(s, (t, e, n) => Ho.call(n, t) === e) : s;
}
u.unique = Tt;
S.add = function(s, t) {
  return u(Tt(this.get().concat(u(s, t).get())));
};
S.children = function(s) {
  return te(u(Tt(zt(this, (t) => t.children))), s);
};
S.parent = function(s) {
  return te(u(Tt(zt(this, "parentNode"))), s);
};
S.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return Ho.call(e, t);
};
S.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
S.siblings = function(s) {
  return te(u(Tt(zt(this, (t) => u(t).parent().children().not(t)))), s);
};
S.find = function(s) {
  return u(Tt(zt(this, (t) => Gi(s, t))));
};
const yc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, bc = /^$|^module$|\/(java|ecma)script/i, vc = ["type", "src", "nonce", "noModule"];
function wc(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (bc.test(i.type) && Lo.contains(i)) {
      const r = me("script");
      r.text = i.textContent.replace(yc, ""), Z(vc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Cc(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && wc(t, s.ownerDocument);
}
function ee(s, t, e, n, i, r, o, a) {
  return Z(s, (l, c) => {
    Z(u(c), (d, h) => {
      Z(u(t), (g, m) => {
        const p = e ? h : m, _ = e ? m : h, b = e ? d : g;
        Cc(p, b ? _.cloneNode(!0) : _, n, i, !b);
      }, a);
    }, o);
  }, r), t;
}
S.after = function() {
  return ee(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return ee(arguments, this, !1, !1, !0);
};
function kc(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ut(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    J(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
S.html = kc;
S.appendTo = function(s) {
  return ee(arguments, this, !0, !1, !0);
};
S.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
S.before = function() {
  return ee(arguments, this, !1, !0);
};
S.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
S.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
S.insertAfter = function(s) {
  return ee(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(s) {
  return ee(arguments, this, !0, !0);
};
S.prepend = function() {
  return ee(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(s) {
  return ee(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return u(Tt(zt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
S.next = function(s, t, e) {
  return te(u(Tt(zt(this, "nextElementSibling", t, e))), s);
};
S.nextAll = function(s) {
  return this.next(s, !0);
};
S.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
S.parents = function(s, t) {
  return te(u(Tt(zt(this, "parentElement", !0, t))), s);
};
S.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
S.prev = function(s, t, e) {
  return te(u(Tt(zt(this, "previousElementSibling", t, e))), s);
};
S.prevAll = function(s) {
  return this.prev(s, !0);
};
S.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
S.map = function(s) {
  return u(ec.apply([], Oo.call(this, (t, e) => s.call(t, e, t))));
};
S.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Ot(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Lo;
  });
};
S.slice = function(s, t) {
  return u(Fo.call(this, s, t));
};
const xc = /-([a-z])/g;
function Xi(s) {
  return s.replace(xc, (t, e) => e.toUpperCase());
}
S.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Ht.readyState !== "loading" ? t() : Ht.addEventListener("DOMContentLoaded", t), this;
};
S.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
S.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Xs.pageYOffset,
    left: t.left + Xs.pageXOffset
  };
};
S.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Ot(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Ot(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && J(i)) {
      const r = u(i).offset();
      e.top -= r.top + kt(i, "borderTopWidth"), e.left -= r.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - kt(s, "marginTop"),
    left: e.left - kt(s, "marginLeft")
  };
};
const jo = {
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
    if (nt(s))
      return s = jo[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
S.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[jo[s] || s];
  });
};
const $c = /^--/;
function Ji(s) {
  return $c.test(s);
}
const qn = {}, { style: Sc } = Ro, Tc = ["webkit", "moz", "ms"];
function Nc(s, t = Ji(s)) {
  if (t)
    return s;
  if (!qn[s]) {
    const e = Xi(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Tc.join(`${n} `)}${n}`.split(" ");
    Z(i, (r, o) => {
      if (o in Sc)
        return qn[s] = o, !1;
    });
  }
  return qn[s];
}
const Mc = {
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
function Ko(s, t, e = Ji(s)) {
  return !e && !Mc[s] && Bo(t) ? `${t}px` : t;
}
function Ec(s, t) {
  if (nt(s)) {
    const e = Ji(s);
    return s = Nc(s, e), arguments.length < 2 ? this[0] && Ot(this[0], s, e) : s ? (t = Ko(s, t, e), this.each((n, i) => {
      J(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
S.css = Ec;
function qo(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const Ic = /^\s+|\s+$/;
function Kr(s, t) {
  const e = s.dataset[t] || s.dataset[Xi(t)];
  return Ic.test(e) ? e : qo(JSON.parse, e);
}
function Ac(s, t, e) {
  e = qo(JSON.stringify, e), s.dataset[Xi(t)] = e;
}
function Dc(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = Kr(this[0], n);
    return e;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && Kr(this[0], s) : ut(t) ? this : this.each((e, n) => {
      Ac(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
S.data = Dc;
function Go(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Z([!0, !1], (s, t) => {
  Z(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    S[i] = function(r) {
      if (this[0])
        return Ne(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : de(this[0]) ? Go(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? kt(this[0], `margin${e ? "Top" : "Left"}`) + kt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  S[e] = function(n) {
    if (!this[0])
      return ut(n) ? void 0 : this;
    if (!arguments.length)
      return Ne(this[0]) ? this[0].document.documentElement[`client${t}`] : de(this[0]) ? Go(this[0], t) : this[0].getBoundingClientRect()[e] - Vr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!J(o))
        return;
      const a = Ot(o, "boxSizing");
      o.style[e] = Ko(e, i + (a === "border-box" ? Vr(o, !s) : 0));
    });
  };
});
const qr = "___cd";
S.toggle = function(s) {
  return this.each((t, e) => {
    if (!J(e))
      return;
    const n = Ur(e);
    (ut(s) ? n : s) ? (e.style.display = e[qr] || "", Ur(e) && (e.style.display = pc(e.tagName))) : n || (e[qr] = Ot(e, "display"), e.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const Gr = "___ce", Zi = ".", Qi = { focus: "focusin", blur: "focusout" }, Yo = { mouseenter: "mouseover", mouseleave: "mouseout" }, Pc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function tr(s) {
  return Yo[s] || Qi[s] || s;
}
function er(s) {
  const t = s.split(Zi);
  return [t[0], t.slice(1).sort()];
}
S.trigger = function(s, t) {
  if (nt(s)) {
    const [n, i] = er(s), r = tr(n);
    if (!r)
      return this;
    const o = Pc.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Ht.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Zi), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Qi;
  return this.each((n, i) => {
    e && ge(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Xo(s) {
  return s[Gr] = s[Gr] || {};
}
function Lc(s, t, e, n, i) {
  const r = Xo(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function Jo(s, t) {
  return !t || !qi.call(t, (e) => s.indexOf(e) < 0);
}
function Zs(s, t, e, n, i) {
  const r = Xo(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Jo(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Zs(s, t, e, n, i);
}
S.off = function(s, t, e) {
  if (ut(s))
    this.each((n, i) => {
      !J(i) && !de(i) && !Ne(i) || Zs(i);
    });
  else if (nt(s))
    ge(t) && (e = t, t = ""), Z(Cn(s), (n, i) => {
      const [r, o] = er(i), a = tr(r);
      this.each((l, c) => {
        !J(c) && !de(c) && !Ne(c) || Zs(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
S.remove = function(s) {
  return te(this, s).detach().off(), this;
};
S.replaceWith = function(s) {
  return this.before(s).remove();
};
S.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function Rc(s, t, e, n, i) {
  if (!nt(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return nt(t) || (ut(t) || ts(t) ? t = "" : ut(e) ? (e = t, t = "") : (n = e, e = t, t = "")), ge(n) || (n = e, e = void 0), n ? (Z(Cn(s), (r, o) => {
    const [a, l] = er(o), c = tr(a), d = a in Yo, h = a in Qi;
    c && this.each((g, m) => {
      if (!J(m) && !de(m) && !Ne(m))
        return;
      const p = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Jo(l, _.namespace.split(Zi)) || !t && (h && (_.target !== m || _.___ot === c) || d && _.relatedTarget && m.contains(_.relatedTarget)))
          return;
        let b = m;
        if (t) {
          let v = _.target;
          for (; !zo(v, t); )
            if (v === m || (v = v.parentNode, !v))
              return;
          b = v;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return b;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(b, _, _.___td);
        i && Zs(m, c, l, t, p), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      p.guid = n.guid = n.guid || u.guid++, Lc(m, c, l, t, p);
    });
  }), this) : this;
}
S.on = Rc;
function Wc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
S.one = Wc;
const Hc = /\r?\n/g;
function Oc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(Hc, `\r
`))}`;
}
const Fc = /file|reset|submit|button|image/i, Zo = /radio|checkbox/i;
S.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Z(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Fc.test(i.type) || Zo.test(i.type) && !i.checked)
        return;
      const r = Uo(i);
      if (!ut(r)) {
        const o = vn(r) ? r : [r];
        Z(o, (a, l) => {
          s += Oc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function Bc(s, t) {
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
function zc(s, t, e) {
  try {
    const n = Bc(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function tt(s, ...t) {
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
var sr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(sr || {});
function Vc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / sr[e]).toFixed(t) + e);
}
const Uc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * sr[n];
};
let nr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Kt;
function jc() {
  return nr;
}
function Kc(s) {
  nr = s.toLowerCase();
}
function Qo(s, t) {
  Kt || (Kt = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, Kt, s);
}
function Q(s, t, e, n, i, r) {
  Array.isArray(s) ? Kt && s.unshift(Kt) : s = Kt ? [Kt, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || nr;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === Kt ? `${r}.${t}` : t;
    if (a = zc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? tt(a, ...Array.isArray(e) ? e : [e]) : a;
}
function qc(s, t, e, n) {
  return Q(void 0, s, t, e, n);
}
Q.addLang = Qo;
Q.getLang = qc;
Q.getCode = jc;
Q.setCode = Kc;
Qo({
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
function Yr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function ze(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => ze(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Gc(s, t) {
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
function Yc(s, t) {
  const e = t || new FormData();
  return s && (typeof s == "string" && (s = new URLSearchParams(s)), s instanceof URLSearchParams ? s.forEach((n, i) => {
    ze(e, i, n);
  }) : Array.isArray(s) ? s.forEach(([n, i]) => {
    ze(e, n, i);
  }) : s instanceof FormData ? s.forEach((n, i) => {
    ze(e, i, n);
  }) : u.isPlainObject(s) && Object.entries(s).forEach(([n, i]) => {
    ze(e, n, i);
  })), e;
}
class ta {
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
      success: g,
      error: m,
      complete: p,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let b = n;
    b && (i && (b = Yc(b)), _.body = b), o && (_.mode = "cors");
    const y = _.headers || {};
    Yr(y, "X-Requested-With", "XMLHttpRequest"), r && Yr(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), g && this.success(g), m && this.fail(m), p && this.complete(p), _.signal = this._controller.signal, this.url = t, this.request = _;
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
        const d = e || Gc(o.headers.get("Content-Type"), n);
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
  const e = new ta(t);
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
  const i = new ta(n), [r] = await i.send();
  return r;
}
function Xr(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
u.fetch = xn;
function Ft() {
  return u.guid++;
}
function li(s, t) {
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
        if (li(s[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(s), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (li(s[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class es {
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
    return (!e || t.some((n, i) => li(n instanceof es ? n.value : n, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((n) => n instanceof es ? n.cache : n)), this._value;
  }
}
function ea(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ea(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...s) => ea(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = x;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(s, ...t));
  });
};
const Ve = /* @__PURE__ */ new WeakMap();
function sa(s, t, e) {
  const n = Ve.has(s), i = n ? Ve.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), Ve.set(s, i)) : Ve.delete(s);
}
function na(s, t, e) {
  let n = Ve.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? na(this[0], t) : this.each((n, i) => sa(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => sa(e, s));
};
function ci(s, t = "z-") {
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
function Jr(s, t, e = "z-") {
  const n = u(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function Xc(...s) {
  var e;
  const t = s.length;
  if (!t)
    return ci(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = ci(this)) == null ? void 0 : e[n] : (u.isPlainObject(n) && Jr(this, n), this);
  }
  return Jr(this, { [s[0]]: s[1] }), this;
}
u.fn.z = Xc;
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
}), Jc = {};
u.share = Jc;
var $n, B, ia, gt, re, Zr, ra, hi, ke = {}, oa = [], Zc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Sn = Array.isArray;
function Xt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function aa(s) {
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
  return Ws(s, o, n, i, null);
}
function Ws(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ia };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function z() {
  return { current: null };
}
function Ie(s) {
  return s.children;
}
function W(s, t) {
  this.props = s, this.context = t;
}
function ss(s, t) {
  if (t == null)
    return s.__ ? ss(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__d || e.__e;
  return typeof s.type == "function" ? ss(s) : null;
}
function la(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return la(s);
  }
}
function Qr(s) {
  (!s.__d && (s.__d = !0) && re.push(s) && !tn.__r++ || Zr !== B.debounceRendering) && ((Zr = B.debounceRendering) || ra)(tn);
}
function tn() {
  var s, t, e, n, i, r, o, a, l;
  for (re.sort(hi); s = re.shift(); )
    s.__d && (t = re.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = Xt({}, o)).__v = o.__v + 1, ir(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? ss(o), o.__h, i), ua(n, o, i), o.__e != a && la(o)), re.length > t && re.sort(hi));
  tn.__r = 0;
}
function ca(s, t, e, n, i, r, o, a, l, c, d) {
  var h, g, m, p, _, b, y, v, w, k = 0, C = n && n.__k || oa, $ = C.length, E = $, I = t.length;
  for (e.__k = [], h = 0; h < I; h++)
    (p = e.__k[h] = (p = t[h]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Ws(null, p, null, null, p) : Sn(p) ? Ws(Ie, { children: p }, null, null, null) : p.__b > 0 ? Ws(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null ? (p.__ = e, p.__b = e.__b + 1, (v = Qc(p, C, y = h + k, E)) === -1 ? m = ke : (m = C[v] || ke, C[v] = void 0, E--), ir(s, p, m, i, r, o, a, l, c, d), _ = p.__e, (g = p.ref) && m.ref != g && (m.ref && rr(m.ref, null, p), d.push(g, p.__c || _, p)), _ != null && (b == null && (b = _), (w = m === ke || m.__v === null) ? v == -1 && k-- : v !== y && (v === y + 1 ? k++ : v > y ? E > I - y ? k += v - y : k-- : k = v < y && v == y - 1 ? v - y : 0), y = h + k, typeof p.type != "function" || v === y && m.__k !== p.__k ? typeof p.type == "function" || v === y && !w ? p.__d !== void 0 ? (l = p.__d, p.__d = void 0) : l = _.nextSibling : l = da(s, _, l) : l = ha(p, l, s), typeof e.type == "function" && (e.__d = l))) : (m = C[h]) && m.key == null && m.__e && (m.__e == l && (m.__ = n, l = ss(m)), di(m, m, !1), C[h] = null);
  for (e.__e = b, h = $; h--; )
    C[h] != null && (typeof e.type == "function" && C[h].__e != null && C[h].__e == e.__d && (e.__d = C[h].__e.nextSibling), di(C[h], C[h]));
}
function ha(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? ha(n, t, e) : da(e, n.__e, t));
  return t;
}
function ns(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Sn(s) ? s.some(function(e) {
    ns(e, t);
  }) : t.push(s)), t;
}
function da(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function Qc(s, t, e, n) {
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
function th(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || en(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || en(s, r, t[r], e[r], n);
}
function to(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Zc.test(t) ? e : e + "px";
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
            e && t in e || to(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || to(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n ? e.u = n.u : (e.u = Date.now(), s.addEventListener(t, r ? so : eo, r)) : s.removeEventListener(t, r ? so : eo, r);
    else if (t !== "dangerouslySetInnerHTML") {
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
function eo(s) {
  var t = this.l[s.type + !1];
  if (s.t) {
    if (s.t <= t.u)
      return;
  } else
    s.t = Date.now();
  return t(B.event ? B.event(s) : s);
}
function so(s) {
  return this.l[s.type + !0](B.event ? B.event(s) : s);
}
function ir(s, t, e, n, i, r, o, a, l, c) {
  var d, h, g, m, p, _, b, y, v, w, k, C, $, E, I, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = B.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (y = t.props, v = (d = A.contextType) && n[d.__c], w = d ? v ? v.props.value : d.__ : n, e.__c ? b = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(y, w) : (t.__c = h = new W(y, w), h.constructor = A, h.render = sh), v && v.sub(h), h.props = y, h.state || (h.state = {}), h.context = w, h.__n = n, g = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Xt({}, h.__s)), Xt(h.__s, A.getDerivedStateFromProps(y, h.__s))), m = h.props, p = h.state, h.__v = t, g)
          A.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && y !== m && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(N) {
              N && (N.__ = t);
            }), k = 0; k < h._sb.length; k++)
              h.__h.push(h._sb[k]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(m, p, _);
          });
        }
        if (h.context = w, h.props = y, h.__P = s, h.__e = !1, C = B.__r, $ = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), E = 0; E < h._sb.length; E++)
            h.__h.push(h._sb[E]);
          h._sb = [];
        } else
          do
            h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++$ < 25);
        h.state = h.__s, h.getChildContext != null && (n = Xt(Xt({}, n), h.getChildContext())), g || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(m, p)), ca(s, Sn(I = d != null && d.type === Ie && d.key == null ? d.props.children : d) ? I : [I], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), b && (h.__E = h.__ = null);
      } catch (N) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), B.__e(N, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = eh(e.__e, t, e, n, i, r, o, l, c);
  (d = B.diffed) && d(t);
}
function ua(s, t, e) {
  for (var n = 0; n < e.length; n++)
    rr(e[n], e[++n], e[++n]);
  B.__c && B.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      B.__e(r, i.__v);
    }
  });
}
function eh(s, t, e, n, i, r, o, a, l) {
  var c, d, h, g = e.props, m = t.props, p = t.type, _ = 0;
  if (p === "svg" && (i = !0), r != null) {
    for (; _ < r.length; _++)
      if ((c = r[_]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
        s = c, r[_] = null;
        break;
      }
  }
  if (s == null) {
    if (p === null)
      return document.createTextNode(m);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, m.is && m), r = null, a = !1;
  }
  if (p === null)
    g === m || a && s.data === m || (s.data = m);
  else {
    if (r = r && $n.call(s.childNodes), d = (g = e.props || ke).dangerouslySetInnerHTML, h = m.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (g = {}, _ = 0; _ < s.attributes.length; _++)
          g[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (th(s, m, g, i, a), h)
      t.__k = [];
    else if (ca(s, Sn(_ = t.props.children) ? _ : [_], t, e, n, i && p !== "foreignObject", r, o, r ? r[0] : e.__k && ss(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && aa(r[_]);
    a || ("value" in m && (_ = m.value) !== void 0 && (_ !== s.value || p === "progress" && !_ || p === "option" && _ !== g.value) && en(s, "value", _, g.value, !1), "checked" in m && (_ = m.checked) !== void 0 && _ !== s.checked && en(s, "checked", _, g.checked, !1));
  }
  return s;
}
function rr(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    B.__e(n, e);
  }
}
function di(s, t, e) {
  var n, i;
  if (B.unmount && B.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || rr(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && di(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || aa(s.__e), s.__ = s.__e = s.__d = void 0;
}
function sh(s, t, e) {
  return this.constructor(s, e);
}
function is(s, t, e) {
  var n, i, r, o;
  B.__ && B.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], ir(t, s = (!n && e || t).__k = $t(Ie, null, [s]), i || ke, ke, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? $n.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), ua(r, s, o);
}
$n = oa.slice, B = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, ia = 0, gt = function(s) {
  return s != null && s.constructor === void 0;
}, W.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Xt({}, this.state), typeof s == "function" && (s = s(Xt({}, e), this.props)), s && Xt(e, s), s != null && this.__v && (t && this._sb.push(t), Qr(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Qr(this));
}, W.prototype.render = Ie, re = [], ra = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, hi = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, tn.__r = 0;
function R(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...ns(r), ...ns(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = u.extend(r, i))), s[n] = i);
    });
  }), s;
}
function fa(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const Ue = /* @__PURE__ */ new Map();
function sn(s) {
  const { zui: t } = window;
  return (!Ue.size || s && !Ue.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Ue.set(e.toLowerCase(), n);
  }), s ? Ue.get(s.toLowerCase()) : void 0;
}
function nh(s, t, e) {
  const n = sn(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function Nu(s) {
  if (s) {
    const t = sn(s);
    t && t.defineFn();
  } else
    sn(), Ue.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = ci(s, "data-");
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => nh(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = na(e, void 0, !0), r = {};
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
function ih(s, t = !0) {
  const e = u(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
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
    ih(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Tn(s) {
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Jt(s) {
  if (s == null)
    return null;
  const [t, e = "px"] = Tn(s);
  return Number.isNaN(t) ? typeof s == "string" ? s : null : `${t}${e}`;
}
function or(s, t) {
  const e = u(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: p, innerWidth: _ } = window, { clientHeight: b, clientWidth: y } = document.documentElement;
    n = { left: 0, top: 0, width: _ || y, height: p || b };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const g = i <= d && i + o >= l;
  return r <= h && r + a >= c && g;
}
u.fn.isVisible = function(s) {
  return or(this, s);
};
function ar(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${Ft()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    ar(n, r.innerHTML), r.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    ar(e, s);
  });
};
function pa(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (or(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    pa(e, s);
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
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, g = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      g();
      return;
    }
    const { id: m } = r, p = u(m ? `#${m}` : `script[src="${o}"]`);
    if (p.length) {
      if (p.dataset("loaded"))
        g();
      else {
        const C = p.data("loadCalls") || [];
        C.push(g), p.data("loadCalls", C);
      }
      return;
    }
    const { async: _ = !0, defer: b = !1, noModule: y = !1, type: v, integrity: w } = r, k = document.createElement("script");
    k.async = _, k.defer = b, k.noModule = y, v && (k.type = v), w && (k.integrity = w), k.onload = () => {
      g(), (u(k).dataset("loaded", !0).data("loadCalls") || []).forEach(($) => $()), u(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, k.src = o, u("head").append(k);
  });
};
u.getScript = u.getLib;
function Nn(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Nn(s.parentNode) : !0;
}
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: Nn,
  isVisible: or,
  runJS: ar,
  scrollIntoView: pa
}, Symbol.toStringTag, { value: "Module" })), ma = {};
function _e(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    _e(e, s[e]);
  }) : t && (ma[s.toLowerCase()] = t);
}
function rh(s) {
  return ma[s.toLowerCase()];
}
const no = "dangerouslySetInnerHTML";
class K extends W {
  constructor() {
    super(...arguments), this._gid = Ft();
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
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: d, ...h } = t, g = Object.keys(h).reduce((m, p) => {
      if (p === no || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(p)) {
        const _ = h[p];
        m[p] = p !== no && _ && typeof _ == "object" ? JSON.stringify(_) : _;
      }
      return m;
    }, {});
    return { ref: o, className: x(this._getClassName(t), d) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...g, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? rh(e) : e) || e;
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
var oh = 0;
function f(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --oh, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return B.vnode && B.vnode(c), c;
}
class ue extends W {
  constructor() {
    super(...arguments), this._ref = z();
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
function ah(s) {
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
  } = s, h = [e], g = { ...n }, m = [], p = [];
  return i.forEach((_) => {
    const b = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        b.push(...l.call(o, _, m, ...r));
      else {
        const y = _.call(o, m, ...r);
        y && (Array.isArray(y) ? b.push(...y) : b.push(y));
      }
    else
      b.push(_);
    b.forEach((y) => {
      y != null && (typeof y == "object" && !gt(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? m.push(
        /* @__PURE__ */ f("div", { className: x(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? p.push(y.__html) : (y.style && Object.assign(g, y.style), y.className && h.push(y.className), y.children && m.push(y.children), y.attrs && Object.assign(d, y.attrs)) : m.push(y));
    });
  }), p.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: x(h),
    style: g,
    ...d
  }, m];
}
function ga({
  tag: s = "div",
  ...t
}) {
  const [e, n] = ah(t);
  return $t(s, e, ...n);
}
function ui(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => ui({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "object" && (r.html || r.component)) {
    if (r.html)
      return /* @__PURE__ */ f(ue, { ...R(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = R({ children: o.map((a) => ui({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ f(K, { ...R(i, r) });
  }
  return gt(r) || r === null, r;
}
function F(s) {
  const t = ui(s);
  return t == null || typeof t == "boolean" ? null : gt(t) ? t : /* @__PURE__ */ f(Ie, { children: t });
}
const io = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function q(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (gt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(io(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? io(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: x(i), ...n });
}
function lh(s) {
  return this.getChildContext = () => s.context, s.children;
}
function _a(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    is(null, t._temp), t._temp = null, t._container = null;
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
  }), is(
    $t(lh, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function ch(s, t) {
  const e = $t(_a, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
_e({
  HElement: K,
  element: K,
  HtmlContent: ue,
  html: ue,
  CustomContent: F,
  custom: F,
  Icon: q,
  Portal: _a
});
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
    const c = l[0], d = Ft();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((g) => {
      g.forEach((m) => {
        m.removedNodes.forEach((p) => {
          p === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Nn(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), o) {
      const g = `${n}:ALL`;
      let m = l.data(g);
      m || (m = /* @__PURE__ */ new Map(), l.data(g, m)), m.set(this._key, this);
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
    return Q(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? Q(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
            let g = h[a], m = h;
            g === void 0 && (m = h.$, g = m[a]), typeof g == "function" ? l = g.call(m, ...r) : l = g;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
at.DEFAULT = {};
at.MULTI_INSTANCE = !1;
class H extends at {
  constructor() {
    super(...arguments), this._ref = z();
  }
  /**
   * The React component instance.
   */
  get $() {
    return this._ref.current;
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
    if (r && n.HElement) {
      const l = Array.from(e.attributes).reduce((c, d) => {
        const { name: h, value: g } = d;
        return c[h === "class" ? "className" : h] = g, c;
      }, {});
      return is(
        $t(n, R({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    is(
      $t(n, a),
      e
    );
  }
}
H.replace = !1;
class et extends K {
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
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: et
}, Symbol.toStringTag, { value: "Module" }));
_e(hh);
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
    return { index: n, item: i, element: e, event: t, key: r, renderedItem: o, relativeTarget: this.props.relativeTarget };
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
        return /* @__PURE__ */ f(F, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: g = {} } = this.constructor;
    if (e = R(
      { type: l },
      h,
      g[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _index: n,
        key: String((a ? e[a] : e.key) ?? e.key ?? n),
        onClick: void 0
      }
    ), o) {
      const m = o.call(this, e, n);
      if (m !== void 0)
        return m;
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
const dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: ft
}, Symbol.toStringTag, { value: "Module" }));
class lr extends H {
}
lr.NAME = "CommonList";
lr.Component = ft;
lr.replace = !0;
_e(dh);
function uh(s) {
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
function fh(s) {
  const [t, e, n] = typeof s == "string" ? uh(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function ro(s, t) {
  return fh(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function oo(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function ph(s, t, e) {
  s = s % 360 / 360, t = oo(t), e = oo(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function ya(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function mh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let vs = class extends W {
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
      src: g,
      hueDistance: m = 43,
      saturation: p = 0.4,
      lightness: _ = 0.6,
      children: b,
      ...y
    } = this.props, v = ["avatar", t], w = { ...e, background: o, color: a };
    let k = 32;
    n && (typeof n == "number" ? (w.width = `${n}px`, w.height = `${n}px`, w.fontSize = `${Math.max(12, Math.round(n / 2))}px`, k = n) : (v.push(`size-${n}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? v.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let C;
    if (g)
      v.push("has-img"), C = /* @__PURE__ */ f("img", { className: "avatar-img", src: g, alt: c });
    else if (l)
      v.push("has-icon"), C = /* @__PURE__ */ f(q, { icon: l });
    else if (c != null && c.length) {
      const $ = mh(c, h);
      if (v.push("has-text", `has-text-${$.length}`), o)
        !a && o && (w.color = ro(o));
      else {
        const I = d ?? c, A = (typeof I == "number" ? I : ya(I)) * m % 360;
        if (w.background = `hsl(${A},${p * 100}%,${_ * 100}%)`, !a) {
          const N = ph(A, p, _);
          w.color = ro(N);
        }
      }
      let E;
      k && k < 14 * $.length && (E = { transform: `scale(${k / (14 * $.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ f("div", { "data-actualSize": k, className: "avatar-text", style: E, children: $ });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: x(v),
        style: w,
        ...y,
        children: [
          C,
          b
        ]
      }
    );
  }
};
const gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: vs
}, Symbol.toStringTag, { value: "Module" }));
let wt = class extends ft {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    e.type || (e = u.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = R({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = R({}, e, fa({ btnType: n, size: i }));
  }
};
wt.NAME = "btn-group";
wt.TAG = "nav";
wt.ItemComponents = {
  ...ft.ItemComponents,
  default: et
};
wt.defaultItemProps = {
  component: void 0
};
const Mn = class ba extends wt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = x(n.className, `gap-${e}`) : n.style = u.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = R({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = R(n, r)), /* @__PURE__ */ f(ba, { ...r });
  }
};
Mn.NAME = "toolbar";
Mn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Mn.ItemComponents = {
  ...wt.ItemComponents,
  btnGroup: wt,
  "btn-group": wt
};
let ot = Mn;
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: ot
}, Symbol.toStringTag, { value: "Module" }));
class En extends K {
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
      /* @__PURE__ */ f("label", { htmlFor: r, children: /* @__PURE__ */ f(F, { content: o }) }, "label")
    ];
  }
}
class yh extends En {
}
yh.defaultProps = {
  type: "radio"
};
class bh extends En {
}
bh.defaultProps = {
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
    if (i && d.push(/* @__PURE__ */ f(F, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(En, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(q, { className: "item-icon", icon: e }, "icon")), n) {
      const g = typeof n == "function" ? n.call(this, t) : n;
      g && (g.className = x("item-avatar", g.className), d.push(/* @__PURE__ */ f(vs, { ...g }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ f(F, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ f("div", { className: x("item-leading", o), children: d }, "leading")
    ] : [] : d;
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
      content: d,
      contentClass: h,
      contentAttrs: g,
      hint: m
    } = t, p = l && !e, _ = p ? "a" : "div";
    let { title: b, text: y } = t;
    return b === void 0 && (b = y, y = null), [
      /* @__PURE__ */ f("div", { className: x("item-content", h), title: m, ...g, children: [
        b ? /* @__PURE__ */ f(_, { className: x("item-title", i), href: p ? l : void 0, target: p ? c : void 0, ...r, children: /* @__PURE__ */ f(F, { content: b }) }, "title") : null,
        o ? /* @__PURE__ */ f("div", { className: x("item-subtitle", a), children: /* @__PURE__ */ f(F, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ f("div", { className: x("item-text text", n), children: y }, "text") : null,
        d ? /* @__PURE__ */ f(F, { content: d }, "extraContent") : null
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
    r && a.push(/* @__PURE__ */ f(q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(ot.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = n ? /* @__PURE__ */ f(F, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ f("div", { className: x("item-trailing", i), children: [
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
      checked: g,
      multiline: m,
      title: p,
      subtitle: _,
      hover: b
    } = t, y = n || (o && !a ? "a" : "div"), v = y === "a", w = R({
      key: "item",
      className: x("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": b,
        checked: g,
        multiline: m ?? !!(p && _),
        state: v
      })
    }, v ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ f(y, { ...w, children: [
      this._renderLeading(t),
      this._renderContent(t, v),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...ns(n)]];
  }
}
let se = class extends ft {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, n) {
    const { divider: i, hover: r, multiline: o } = t;
    e = R({}, fa({
      divider: i,
      hover: r,
      multiline: o
    }), e);
    const { itemName: a, name: l } = this;
    if (e.innerClass = [a ? `${a}-inner${l ? ` ${l}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: c } = t;
      c && (e.checked === void 0 && (e.checked = !1), typeof c == "object" && (e.checkbox = e.checkbox ? u.extend({}, c, e.checkbox) : c));
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
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      onClick: this._handleClick,
      className: x(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
};
se.ItemComponents = {
  ...ft.ItemComponents,
  default: K,
  item: nn,
  heading: nn
};
se.NAME = "list";
const Gn = "```ZUI_STR\n";
class ws {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new ws(this._id, "session")), this._altStorage);
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
      if (n.startsWith(Gn))
        return n.substring(Gn.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Gn}${e}` : JSON.stringify(e));
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
const Wt = new ws("DEFAULT");
function vh(s, t = "local") {
  return new ws(s, t);
}
Object.assign(Wt, { create: vh });
let Ae = class extends se {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0;
    const { defaultNestedShow: e } = t;
    u.extend(this.state, typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} });
    const { preserve: n } = t;
    if (n && !this._controlled) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const i = Wt.get(this._storeID);
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
    this._storeID && Wt.set(this._storeID, this.state);
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
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ f("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ f("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ f(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ f("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: n });
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
    const e = super._handleClick(t);
    return e && !this._controlled && this._toggleFromEvent(e), e;
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
    return r.className = x(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
Ae.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Ae.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class va extends H {
}
va.NAME = "List";
va.Component = se;
class wa extends H {
}
wa.NAME = "NestedList";
wa.Component = Ae;
let it = class extends Ae {
  _getClassName(t) {
    return x(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
it.NAME = "menu";
it.TAG = "menu";
it.inheritNestedProps = [...Ae.inheritNestedProps, "compact"];
it.ItemComponents = {
  ...Ae.ItemComponents,
  item: [nn, { innerComponent: "a" }]
};
var Ca = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Re = (s, t, e) => (Ca(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ms = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ao = (s, t, e) => (Ca(s, t, "access private method"), e), fi, Hs, Os, Fs, pi;
let cr = class extends W {
  constructor(t) {
    super(t), Ms(this, Fs), this._input = z(), this._timer = 0, Ms(this, fi, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Ms(this, Hs, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (ao(this, Fs, pi).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), Ms(this, Os, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${Ft()}`;
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
    ao(this, Fs, pi).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: g, clearIcon: m, value: p } = t, { focus: _, value: b } = e, { id: y } = this, v = p ?? b, w = typeof v != "string" || !v.trim().length;
    let k, C, $;
    return g && ($ = g === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(q, { icon: g })), !h && g && (k = /* @__PURE__ */ f("label", { for: y, class: "input-control-prefix", children: $ }, "prefix")), m && !w ? C = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Re(this, fi),
        children: m === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(q, { icon: m })
      }
    ) : h && g && (C = $), C && (C = /* @__PURE__ */ f("label", { for: y, class: "input-control-suffix", children: C }, "suffix")), /* @__PURE__ */ f("div", { class: x("search-box input-control", r, { focus: _, empty: w, "has-prefix-icon": k, "has-suffix-icon": C }), style: o, children: [
      k,
      /* @__PURE__ */ f(
        "input",
        {
          ref: this._input,
          id: y,
          type: "text",
          class: x("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: v,
          onInput: Re(this, Hs),
          onChange: Re(this, Hs),
          onFocus: Re(this, Os),
          onBlur: Re(this, Os)
        }
      ),
      C
    ] });
  }
};
fi = /* @__PURE__ */ new WeakMap();
Hs = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakSet();
pi = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
cr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Nt = class extends it {
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
  isExpanded(t, e) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t, e);
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
    if (!n || !this.isRoot)
      return e;
    e = ns(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && u.extend(i, n), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ f(cr, { ...i }, "search")), e;
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
Nt.inheritNestedProps = [...it.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Nt.defaultProps = {
  ...it.defaultProps,
  defaultNestedShow: !0
};
class hr extends H {
}
hr.NAME = "Menu";
hr.Component = it;
hr.replace = !0;
class dr extends H {
}
dr.NAME = "SearchMenu";
dr.Component = Nt;
dr.replace = !0;
function wh({
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
  let g;
  a === !0 ? g = /* @__PURE__ */ f(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : gt(a) ? g = a : typeof a == "object" && (g = /* @__PURE__ */ f(et, { ...a, onClick: l }));
  const m = gt(e) ? e : e ? /* @__PURE__ */ f(ot, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: x("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(q, { icon: c, className: x("alert-icon", d) }),
    typeof i != "string" ? /* @__PURE__ */ f(F, { content: i }) : /* @__PURE__ */ f("div", { className: x("alert-content", r), children: [
      typeof n != "string" ? /* @__PURE__ */ f(F, { content: n }) : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? m : null
    ] }),
    n ? null : m,
    g,
    o
  ] });
}
function Ch(s) {
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
function kh({
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
    wh,
    {
      className: x("messager", r, t, n === !0 ? Ch(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var xh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, $h = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, We = (s, t, e) => (xh(s, t, "access private method"), e), ne, ve;
class ur extends H {
  constructor() {
    super(...arguments), $h(this, ne), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), We(this, ne, ve).call(this, () => {
      this._show = !0, this.render(), We(this, ne, ve).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && We(this, ne, ve).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && We(this, ne, ve).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), We(this, ne, ve).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ne = /* @__PURE__ */ new WeakSet();
ve = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
ur.NAME = "MessagerItem";
ur.Component = kh;
var fr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, le = (s, t, e) => (fr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Es = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Bs = (s, t, e, n) => (fr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ka = (s, t, e) => (fr(s, t, "access private method"), e), xe, Pt, mi, xa, pr, $a;
const In = class Sa extends at {
  constructor() {
    super(...arguments), Es(this, mi), Es(this, pr), Es(this, xe, void 0), Es(this, Pt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = le(this, Pt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), ka(this, mi, xa).call(this).show();
  }
  hide() {
    var t;
    (t = le(this, Pt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = Sa.ensure(e || "body", { key: `messager_${Ft()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
xe = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakSet();
xa = function() {
  if (le(this, Pt))
    le(this, Pt).setOptions(this.options);
  else {
    const s = ka(this, pr, $a).call(this), t = new ur(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Bs(this, xe, void 0), Bs(this, Pt, void 0);
    }), Bs(this, Pt, t);
  }
  return le(this, Pt);
};
pr = /* @__PURE__ */ new WeakSet();
$a = function() {
  if (le(this, xe))
    return le(this, xe);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Bs(this, xe, e[0])), e[0];
};
In.NAME = "messager";
In.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
In.MULTI_INSTANCE = !0;
let Hu = In;
let mr = class extends W {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, g = n / 2;
    let { circleWidth: m = 0.1 } = t;
    m < 1 && (m = n * m);
    const p = (n - m) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: g, cy: g, r: p, "stroke-width": m, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: g, cy: g, r: p, "stroke-width": m, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * p * 2, "stroke-dashoffset": Math.PI * p * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: c ?? g, y: d ?? g + m / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${p}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
mr.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Ta extends H {
}
Ta.NAME = "ProgressCircle";
Ta.Component = mr;
const He = '[droppable="true"]';
class An extends at {
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
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d, canDrop: h } = n;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      let g = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || He);
      if (h && (g = g.filter((m, p) => h.call(this, t, e, p) !== !1)), !g.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), g.addClass(c)), d && r.addClass(d), r.find(He).removeAttr("droppable"), g.attr("droppable", "true"), this._$targets = g;
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
      var o, a;
      const { dragElement: e } = this, i = u(t.target).closest(He)[0];
      if (!e || !i)
        return;
      const r = this.state.dropping;
      if (t.preventDefault(), this._setDragEffect(t), r !== i) {
        const { droppingClass: l } = this.options;
        l && (r && this._leaveDropElement(t, r), u(i).addClass(l)), this._setState({ dropping: i }), (o = this.options.onDragEnter) == null || o.call(this, t, e, i);
      }
      (a = this.options.onDragOver) == null || a.call(this, t, e, i);
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(He)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(He)[0];
      e && (t.preventDefault(), (n = this.options.onDrop) == null || n.call(this, t, this.dragElement, e)), this._clean();
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
An.NAME = "Draggable";
An.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Sh = '[moveable="true"]';
class Cs extends at {
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
Cs.NAME = "Moveable";
Cs.DEFAULT = {
  selector: Sh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const gr = class Na extends at {
  async afterInit() {
    const t = await Na.loadModule();
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
gr.NAME = "Sortable";
gr.DEFAULT = {
  animation: 150
};
let Fu = gr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
class Ma extends H {
}
Ma.NAME = "Avatar";
Ma.Component = vs;
_e(gh);
class Ea extends H {
}
Ea.NAME = "BtnGroup";
Ea.Component = wt;
const Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: wt
}, Symbol.toStringTag, { value: "Module" }));
_e(Th);
const gi = Symbol("EVENT_PICK");
class _r extends W {
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
    return x(
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
      if (i === gi)
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
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", gi), this._skipTriggerChange = !1);
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
const Me = Math.min, ce = Math.max, rn = Math.round, Is = Math.floor, Zt = (s) => ({
  x: s,
  y: s
}), Nh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mh = {
  start: "end",
  end: "start"
};
function _i(s, t, e) {
  return ce(s, Me(t, e));
}
function ks(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function fe(s) {
  return s.split("-")[0];
}
function xs(s) {
  return s.split("-")[1];
}
function Ia(s) {
  return s === "x" ? "y" : "x";
}
function yr(s) {
  return s === "y" ? "height" : "width";
}
function Dn(s) {
  return ["top", "bottom"].includes(fe(s)) ? "y" : "x";
}
function br(s) {
  return Ia(Dn(s));
}
function Eh(s, t, e) {
  e === void 0 && (e = !1);
  const n = xs(s), i = br(s), r = yr(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = on(o)), [o, on(o)];
}
function Ih(s) {
  const t = on(s);
  return [yi(s), t, yi(t)];
}
function yi(s) {
  return s.replace(/start|end/g, (t) => Mh[t]);
}
function Ah(s, t, e) {
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
function Dh(s, t, e, n) {
  const i = xs(s);
  let r = Ah(fe(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(yi)))), r;
}
function on(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Nh[t]);
}
function Ph(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function Aa(s) {
  return typeof s != "number" ? Ph(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function an(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function lo(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = Dn(t), o = br(t), a = yr(o), l = fe(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, g = n[a] / 2 - i[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      m = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (xs(t)) {
    case "start":
      m[o] -= g * (e && c ? -1 : 1);
      break;
    case "end":
      m[o] += g * (e && c ? -1 : 1);
      break;
  }
  return m;
}
const Lh = async (s, t, e) => {
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
  } = lo(c, n, l), g = n, m = {}, p = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: b,
      fn: y
    } = a[_], {
      x: v,
      y: w,
      data: k,
      reset: C
    } = await y({
      x: d,
      y: h,
      initialPlacement: n,
      placement: g,
      strategy: i,
      middlewareData: m,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = v ?? d, h = w ?? h, m = {
      ...m,
      [b]: {
        ...m[b],
        ...k
      }
    }, C && p <= 50) {
      p++, typeof C == "object" && (C.placement && (g = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: d,
        y: h
      } = lo(c, g, l)), _ = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: g,
    strategy: i,
    middlewareData: m
  };
};
async function Da(s, t) {
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
    altBoundary: g = !1,
    padding: m = 0
  } = ks(t, s), p = Aa(m), b = a[g ? h === "floating" ? "reference" : "floating" : h], y = an(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(b))) == null || e ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), v = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = an(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: w,
    strategy: l
  }) : v);
  return {
    top: (y.top - C.top + p.top) / k.y,
    bottom: (C.bottom - y.bottom + p.bottom) / k.y,
    left: (y.left - C.left + p.left) / k.x,
    right: (C.right - y.right + p.right) / k.x
  };
}
const bi = (s) => ({
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
      padding: d = 0
    } = ks(s, t) || {};
    if (c == null)
      return {};
    const h = Aa(d), g = {
      x: e,
      y: n
    }, m = br(i), p = yr(m), _ = await o.getDimensions(c), b = m === "y", y = b ? "top" : "left", v = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", k = r.reference[p] + r.reference[m] - g[m] - r.floating[p], C = g[m] - r.reference[m], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let E = $ ? $[w] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement($))) && (E = a.floating[w] || r.floating[p]);
    const I = k / 2 - C / 2, A = E / 2 - _[p] / 2 - 1, N = Me(h[y], A), P = Me(h[v], A), O = N, V = E - _[p] - P, M = E / 2 - _[p] / 2 + I, G = _i(O, M, V), mt = !l.arrow && xs(i) != null && M != G && r.reference[p] / 2 - (M < O ? N : P) - _[p] / 2 < 0, Mt = mt ? M < O ? M - O : M - V : 0;
    return {
      [m]: g[m] + Mt,
      data: {
        [m]: G,
        centerOffset: M - G - Mt,
        ...mt && {
          alignmentOffset: Mt
        }
      },
      reset: mt
    };
  }
}), Pn = function(s) {
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
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: _ = !0,
        ...b
      } = ks(s, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const y = fe(i), v = fe(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = g || (v || !_ ? [on(a)] : Ih(a));
      !g && p !== "none" && k.push(...Dh(a, _, p, w));
      const C = [a, ...k], $ = await Da(t, b), E = [];
      let I = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (d && E.push($[y]), h) {
        const O = Eh(i, o, w);
        E.push($[O[0]], $[O[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: E
      }], !E.every((O) => O <= 0)) {
        var A, N;
        const O = (((A = r.flip) == null ? void 0 : A.index) || 0) + 1, V = C[O];
        if (V)
          return {
            data: {
              index: O,
              overflows: I
            },
            reset: {
              placement: V
            }
          };
        let M = (N = I.filter((G) => G.overflows[0] <= 0).sort((G, mt) => G.overflows[1] - mt.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!M)
          switch (m) {
            case "bestFit": {
              var P;
              const G = (P = I.map((mt) => [mt.placement, mt.overflows.filter((Mt) => Mt > 0).reduce((Mt, Ql) => Mt + Ql, 0)]).sort((mt, Mt) => mt[1] - Mt[1])[0]) == null ? void 0 : P[0];
              G && (M = G);
              break;
            }
            case "initialPlacement":
              M = a;
              break;
          }
        if (i !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function Rh(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = fe(e), a = xs(e), l = Dn(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = ks(t, s);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: p
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
  return a && typeof p == "number" && (m = a === "end" ? p * -1 : p), l ? {
    x: m * d,
    y: g * c
  } : {
    x: g * c,
    y: m * d
  };
}
const Ln = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await Rh(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, rs = function(s) {
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
          fn: (b) => {
            let {
              x: y,
              y: v
            } = b;
            return {
              x: y,
              y: v
            };
          }
        },
        ...l
      } = ks(s, t), c = {
        x: e,
        y: n
      }, d = await Da(t, l), h = Dn(fe(i)), g = Ia(h);
      let m = c[g], p = c[h];
      if (r) {
        const b = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", v = m + d[b], w = m - d[y];
        m = _i(v, m, w);
      }
      if (o) {
        const b = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", v = p + d[b], w = p - d[y];
        p = _i(v, p, w);
      }
      const _ = a.fn({
        ...t,
        [g]: m,
        [h]: p
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
function Qt(s) {
  return Pa(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function dt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vt(s) {
  var t;
  return (t = (Pa(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pa(s) {
  return s instanceof Node || s instanceof dt(s).Node;
}
function Bt(s) {
  return s instanceof Element || s instanceof dt(s).Element;
}
function St(s) {
  return s instanceof HTMLElement || s instanceof dt(s).HTMLElement;
}
function co(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof dt(s).ShadowRoot;
}
function $s(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = yt(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Wh(s) {
  return ["table", "td", "th"].includes(Qt(s));
}
function vr(s) {
  const t = wr(), e = yt(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Hh(s) {
  let t = Ee(s);
  for (; St(t) && !Rn(t); ) {
    if (vr(t))
      return t;
    t = Ee(t);
  }
  return null;
}
function wr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rn(s) {
  return ["html", "body", "#document"].includes(Qt(s));
}
function yt(s) {
  return dt(s).getComputedStyle(s);
}
function Wn(s) {
  return Bt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Ee(s) {
  if (Qt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    co(s) && s.host || // Fallback.
    Vt(s)
  );
  return co(t) ? t.host : t;
}
function La(s) {
  const t = Ee(s);
  return Rn(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : St(t) && $s(t) ? t : La(t);
}
function os(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = La(s), r = i === ((n = s.ownerDocument) == null ? void 0 : n.body), o = dt(i);
  return r ? t.concat(o, o.visualViewport || [], $s(i) ? i : [], o.frameElement && e ? os(o.frameElement) : []) : t.concat(i, os(i, [], e));
}
function Ra(s) {
  const t = yt(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = St(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = rn(e) !== r || rn(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Cr(s) {
  return Bt(s) ? s : s.contextElement;
}
function $e(s) {
  const t = Cr(s);
  if (!St(t))
    return Zt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Ra(t);
  let o = (r ? rn(e.width) : e.width) / n, a = (r ? rn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Oh = /* @__PURE__ */ Zt(0);
function Wa(s) {
  const t = dt(s);
  return !wr() || !t.visualViewport ? Oh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Fh(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== dt(s) ? !1 : t;
}
function pe(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Cr(s);
  let o = Zt(1);
  t && (n ? Bt(n) && (o = $e(n)) : o = $e(s));
  const a = Fh(r, e, n) ? Wa(r) : Zt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const g = dt(r), m = n && Bt(n) ? dt(n) : n;
    let p = g.frameElement;
    for (; p && n && m !== g; ) {
      const _ = $e(p), b = p.getBoundingClientRect(), y = yt(p), v = b.left + (p.clientLeft + parseFloat(y.paddingLeft)) * _.x, w = b.top + (p.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += v, c += w, p = dt(p).frameElement;
    }
  }
  return an({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Bh(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = St(e), r = Vt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Zt(1);
  const l = Zt(0);
  if ((i || !i && n !== "fixed") && ((Qt(e) !== "body" || $s(r)) && (o = Wn(e)), St(e))) {
    const c = pe(e);
    a = $e(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function zh(s) {
  return Array.from(s.getClientRects());
}
function Ha(s) {
  return pe(Vt(s)).left + Wn(s).scrollLeft;
}
function Vh(s) {
  const t = Vt(s), e = Wn(s), n = s.ownerDocument.body, i = ce(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ce(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Ha(s);
  const a = -e.scrollTop;
  return yt(n).direction === "rtl" && (o += ce(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Uh(s, t) {
  const e = dt(s), n = Vt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = wr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function jh(s, t) {
  const e = pe(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = St(s) ? $e(s) : Zt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function ho(s, t, e) {
  let n;
  if (t === "viewport")
    n = Uh(s, e);
  else if (t === "document")
    n = Vh(Vt(s));
  else if (Bt(t))
    n = jh(t, e);
  else {
    const i = Wa(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return an(n);
}
function Oa(s, t) {
  const e = Ee(s);
  return e === t || !Bt(e) || Rn(e) ? !1 : yt(e).position === "fixed" || Oa(e, t);
}
function Kh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = os(s, [], !1).filter((a) => Bt(a) && Qt(a) !== "body"), i = null;
  const r = yt(s).position === "fixed";
  let o = r ? Ee(s) : s;
  for (; Bt(o) && !Rn(o); ) {
    const a = yt(o), l = vr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || $s(o) && !l && Oa(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Ee(o);
  }
  return t.set(s, n), n;
}
function qh(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Kh(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = ho(t, d, i);
    return c.top = ce(h.top, c.top), c.right = Me(h.right, c.right), c.bottom = Me(h.bottom, c.bottom), c.left = ce(h.left, c.left), c;
  }, ho(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Gh(s) {
  return Ra(s);
}
function Yh(s, t, e) {
  const n = St(t), i = Vt(t), r = e === "fixed", o = pe(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Zt(0);
  if (n || !n && !r)
    if ((Qt(t) !== "body" || $s(i)) && (a = Wn(t)), n) {
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
function uo(s, t) {
  return !St(s) || yt(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Fa(s, t) {
  const e = dt(s);
  if (!St(s))
    return e;
  let n = uo(s, t);
  for (; n && Wh(n) && yt(n).position === "static"; )
    n = uo(n, t);
  return n && (Qt(n) === "html" || Qt(n) === "body" && yt(n).position === "static" && !vr(n)) ? e : n || Hh(s) || e;
}
const Xh = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || Fa, r = this.getDimensions;
  return {
    reference: Yh(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Jh(s) {
  return yt(s).direction === "rtl";
}
const Zh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bh,
  getDocumentElement: Vt,
  getClippingRect: qh,
  getOffsetParent: Fa,
  getElementRects: Xh,
  getClientRects: zh,
  getDimensions: Gh,
  getScale: $e,
  isElement: Bt,
  isRTL: Jh
};
function Qh(s, t) {
  let e = null, n;
  const i = Vt(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: g
    } = s.getBoundingClientRect();
    if (a || t(), !h || !g)
      return;
    const m = Is(d), p = Is(i.clientWidth - (c + h)), _ = Is(i.clientHeight - (d + g)), b = Is(c), v = {
      rootMargin: -m + "px " + -p + "px " + -_ + "px " + -b + "px",
      threshold: ce(0, Me(1, l)) || 1
    };
    let w = !0;
    function k(C) {
      const $ = C[0].intersectionRatio;
      if ($ !== l) {
        if (!w)
          return o();
        $ ? o(!1, $) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(k, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(k, v);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function kr(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Cr(s), d = i || r ? [...c ? os(c) : [], ...os(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? Qh(c, e) : null;
  let g = -1, m = null;
  o && (m = new ResizeObserver((y) => {
    let [v] = y;
    v && v.target === c && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      m && m.observe(t);
    })), e();
  }), c && !l && m.observe(c), m.observe(t));
  let p, _ = l ? pe(s) : null;
  l && b();
  function b() {
    const y = pe(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, p = requestAnimationFrame(b);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), m && m.disconnect(), m = null, l && cancelAnimationFrame(p);
  };
}
const Hn = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Zh,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Lh(s, t, {
    ...i,
    platform: r
  });
};
var ae, Ct, qt;
class Ba extends W {
  constructor(e) {
    super(e);
    U(this, ae, void 0);
    U(this, Ct, void 0);
    U(this, qt, void 0);
    j(this, ae, z()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = D(this, ae)) == null ? void 0 : e.current;
  }
  get container() {
    return D(this, qt);
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
    return x(
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
      ref: D(this, ae),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!D(this, qt)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), j(this, qt, i[0]);
    }
    return D(this, qt);
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
      D(this, Ct) && (D(this, Ct).call(this), j(this, Ct, void 0));
      return;
    }
    D(this, Ct) || j(this, Ct, kr(n, e, () => {
      const { placement: o, width: a } = i;
      Hn(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Pn() : null, rs(), Ln(1)].filter(Boolean)
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
    const e = D(this, Ct);
    e && (e(), j(this, Ct, void 0)), j(this, qt, void 0), j(this, ae, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return ch(this._render(e), this._getContainer(e));
  }
}
ae = new WeakMap(), Ct = new WeakMap(), qt = new WeakMap();
var za = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ut = (s, t, e) => (za(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Yn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ye = (s, t, e, n) => (za(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), zs, vt, je;
let lt = class extends W {
  constructor(t) {
    super(t), Yn(this, zs, void 0), Yn(this, vt, 0), Yn(this, je, z()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Ut(this, vt) && (clearTimeout(Ut(this, vt)), ye(this, vt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await Qs(200, (a) => {
        ye(this, vt, a);
      }), ye(this, vt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Qs(50, (a) => {
        ye(this, vt, a);
      }), ye(this, vt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ye(this, zs, t.id ?? `_pick${Ft()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Ut(this, zs);
  }
  get pop() {
    return Ut(this, je).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), Ut(this, vt) && clearTimeout(Ut(this, vt));
    const t = Ut(this, je).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: Ut(this, je), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Ie, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
zs = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
lt.Trigger = _r;
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
    }, n.style), n.className = x("color-picker", n.className, { disabled: t.disabled }), n;
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
class Ua extends H {
}
Ua.NAME = "ColorPicker";
Ua.Component = Va;
const as = 24 * 60 * 60 * 1e3, Y = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), td = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(Y(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, Ss = (s, t = /* @__PURE__ */ new Date()) => Y(s).toDateString() === Y(t).toDateString(), vi = (s, t = /* @__PURE__ */ new Date()) => Y(s).getFullYear() === Y(t).getFullYear(), ja = (s, t = /* @__PURE__ */ new Date()) => (s = Y(s), t = Y(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Vu = (s, t = /* @__PURE__ */ new Date()) => {
  s = Y(s), t = Y(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Uu = (s, t) => Ss(Y(t), s), ju = (s, t) => Ss(Y(t).getTime() - as, s), Ku = (s, t) => Ss(Y(t).getTime() + as, s), st = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = Y(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", vi(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, qu = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = st(s, vi(s) ? n.month : n.full);
  if (Ss(s, t))
    return i;
  const r = st(t, vi(s, t) ? ja(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var ds, us;
class Ka extends W {
  constructor() {
    super(...arguments);
    U(this, ds, z());
    U(this, us, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(D(this, ds).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: D(this, ds), children: [
      /* @__PURE__ */ f(
        it,
        {
          className: l,
          items: o,
          onClickItem: D(this, us).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        it,
        {
          className: l,
          items: a,
          onClickItem: D(this, us).bind(this, "minute")
        }
      )
    ] });
  }
}
ds = new WeakMap(), us = new WeakMap();
var ed = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, As = (s, t, e) => (ed(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ds = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, wi, Ci, ki, xi;
const fo = (s) => {
  if (!s)
    return;
  const t = Y(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let qa = class extends lt {
  constructor(t) {
    super(t), Ds(this, wi, () => {
      this.toggle(!0);
    }), Ds(this, Ci, (n) => {
      this.setTime(n.target.value);
    }), Ds(this, ki, (n, i) => {
      this.setTime({ [n]: i });
    }), Ds(this, xi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = st(/* @__PURE__ */ new Date(), t.format));
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
    const n = fo(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? st(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = fo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: As(this, xi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: As(this, wi), onChange: As(this, Ci) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
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
    return /* @__PURE__ */ f(Ka, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: As(this, ki) });
  }
};
wi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
qa.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
Q.addLang({
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
const sd = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * as;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, po = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => st(e, t)));
var gn;
class nd extends W {
  constructor() {
    super(...arguments);
    U(this, gn, (e) => {
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
      weekNames: r = Q.getLang("weekNames"),
      monthNames: o = Q.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], g = "btn ghost square rounded-full";
    for (let $ = 0; $ < 7; $++) {
      const E = (i + $) % 7;
      h.push(/* @__PURE__ */ f("div", { className: x("col mini-calendar-day", { "is-weekend": E === 0 || E === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[E] : E }) }, $));
    }
    const { startTime: m, days: p, firstDay: _ } = sd(a, l, i), b = _ + p * as;
    let y = m;
    const v = [], w = "yyyy-MM-dd", k = po(c, w), C = po(d, w);
    for (; y <= b; ) {
      const $ = [];
      for (let E = 0; E < 7; E++) {
        const I = new Date(y), A = I.getDate(), N = st(I, w), P = I.getDay(), O = ja(I, _), V = x("col mini-calendar-day", {
          active: k.has(N),
          selected: C.has(N),
          "is-first": A === 1,
          "is-in-month": O,
          "is-out-month": !O,
          "is-today": Ss(I, n),
          "is-weekend": P === 0 || P === 6
        });
        $.push(
          /* @__PURE__ */ f("div", { className: V, "data-date": N, children: /* @__PURE__ */ f("a", { className: g, onClick: D(this, gn), children: A === 1 && o ? o[I.getMonth()] : I.getDate() }) }, N)
        ), y += as;
      }
      v.push(/* @__PURE__ */ f("div", { className: "row", children: $ }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      v
    ] });
  }
}
gn = new WeakMap();
var fs, _n;
class mo extends W {
  constructor() {
    super(...arguments);
    U(this, fs, z());
    U(this, _n, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(D(this, fs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ f(et, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: D(this, _n), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: D(this, fs), children: a });
  }
}
fs = new WeakMap(), _n = new WeakMap();
var Se, ps, ms, gs, _s, ys, yn, Ya, bn, Xa;
class Ga extends W {
  constructor(e) {
    super(e);
    U(this, yn);
    U(this, bn);
    U(this, Se, void 0);
    U(this, ps, void 0);
    U(this, ms, void 0);
    U(this, gs, void 0);
    U(this, _s, void 0);
    U(this, ys, void 0);
    j(this, Se, z()), j(this, ps, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), j(this, ms, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), j(this, gs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), j(this, _s, (r) => {
      this.setState({ year: r, select: "day" });
    }), j(this, ys, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = td(l, r.substring(5).replace("+", ""))), r = st(l, "yyyy-MM-dd");
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
    u(D(this, Se).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = Q.getLang("yearFormat") || "{0}",
      weekNames: o = Q.getLang("weekNames"),
      monthNames: a = Q.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: g
    } = n, m = g === "day", p = Y(e.minDate || "1970-1-1"), _ = Y(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: D(this, Se), onClick: D(this, ps), children: [
      Un(this, yn, Ya).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(et, { type: g === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: tt(r, d) }),
          /* @__PURE__ */ f(et, { type: g === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: D(this, ms), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: D(this, gs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          nd,
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
        g === "year" ? /* @__PURE__ */ f(
          mo,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: p.getFullYear(),
            max: _.getFullYear(),
            onChange: D(this, _s)
          }
        ) : g === "month" ? /* @__PURE__ */ f(
          mo,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: D(this, ys)
          }
        ) : null,
        m ? Un(this, bn, Xa).call(this, e) : null
      ] })
    ] });
  }
}
Se = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), yn = new WeakSet(), Ya = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(it, { ...n })) : null;
}, bn = new WeakSet(), Xa = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": st(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(ot, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ f(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var id = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Xn = (s, t, e) => (id(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Jn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, $i, Si, Ti;
let Ja = class extends lt {
  constructor(t) {
    super(t), Jn(this, $i, () => {
      this.toggle(!0);
    }), Jn(this, Si, (n) => {
      this.setDate(n.target.value);
    }), Jn(this, Ti, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = Y(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : st(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Xn(this, Ti), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(q, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Xn(this, $i), onChange: Xn(this, Si) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
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
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = Q.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: g, required: m } = t;
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
        clearText: m ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: g
      }
    );
  }
};
$i = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Ja.defaultProps = {
  ...lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Za extends H {
}
Za.NAME = "TimePicker";
Za.Component = qa;
class Qa extends H {
}
Qa.NAME = "DatePicker";
Qa.Component = Ja;
class rd extends W {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(Ga, { ...e }),
      /* @__PURE__ */ f(Ka, { ...n })
    ] });
  }
}
var od = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Oe = (s, t, e) => (od(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Fe = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ni, Mi, Ei, Ii, Ai;
const go = (s) => {
  if (!s)
    return;
  const t = Y(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let tl = class extends lt {
  constructor(t) {
    super(t), Fe(this, Ni, () => {
      this.toggle(!0);
    }), Fe(this, Mi, (o) => {
      this.setDate(o.target.value);
    }), Fe(this, Ei, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), Fe(this, Ii, (o, a) => {
      this.setTime({ [o]: a });
    }), Fe(this, Ai, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: g } = this.props;
      if (h)
        return;
      const m = Y(o), p = !o || Number.isNaN(m.getDay()), _ = st(m, d), [, b = "00:00"] = this.state.value.split(g);
      this.setState({ value: p ? c ? l : "" : `${_}${g}${b}` }, () => {
        !p && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, g = "00:00"] = this.state.value.split(o), [m, p] = g.split(":"), { hour: _ = +m, minute: b = +p } = t;
      c = `${_}:${b}`;
    }
    const d = go(c), h = this.state.value.split(o)[0] || st(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${st(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = go(this.state.value);
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
        onClick: Oe(this, Ei),
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
          onFocus: Oe(this, Ni),
          onChange: (g) => {
            Oe(this, Mi).call(this, g), Oe(this, Ai).call(this, g);
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
      className: x(n.className, "datetime-picker input-control has-suffix-icon")
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
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = Q.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: g, required: m, minuteStep: p } = t, [_, b] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: m ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: g
      },
      time: {
        hour: _,
        minute: b,
        minuteStep: p,
        onChange: Oe(this, Ii)
      }
    };
    return /* @__PURE__ */ f(rd, { ...y });
  }
};
Ni = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
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
class el extends H {
}
el.NAME = "DatetimePicker";
el.Component = tl;
const _o = "show", yo = "in", ad = '[data-dismiss="modal"]', Zn = "modal-hide", De = class Ke extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(ad) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
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
      return u(e).removeClass(Zn).css("z-index", `${Ke.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i,
      [Zn]: !1
    }, _o, r).css({
      zIndex: `${Ke.zIndex++}`,
      ...o
    });
    const a = this.constructor;
    return a.hideOthersOnShow && a.getAll().forEach((l) => {
      l !== this && l.shown && l.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(yo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    u(this.modalElement).addClass(Zn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, u(this.modalElement).removeClass(yo), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(_o), this.emit("hidden");
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
    (e = Ke.query(t, void 0, (n) => n.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ke.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
De.NAME = "Modal";
De.MULTI_INSTANCE = !0;
De.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
De.hideOthersOnShow = !0;
De.zIndex = 1500;
let ls = De;
u(window).on(`resize.${ls.NAMESPACE}`, () => {
  ls.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class sl extends W {
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
    return gt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: x("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : gt(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(ot, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? gt(t) ? t : /* @__PURE__ */ f("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return gt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: x("modal-footer", e), children: n ? /* @__PURE__ */ f(ot, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: x("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
sl.defaultProps = { closeBtn: !0 };
class nl extends W {
  constructor() {
    super(...arguments), this._ref = z(), this.state = {}, this._watchIframeHeight = () => {
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
var xr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, bt = (s, t, e) => (xr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Be = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, be = (s, t, e, n) => (xr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Vs = (s, t, e) => (xr(s, t, "access private method"), e), Et, qe, It, ln, $r, Us, Di;
function ld(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function cd(s, t) {
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
async function hd(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(nl, { url: e, watchHeight: !o })
  };
}
const dd = {
  custom: ld,
  ajax: cd,
  iframe: hd
}, Qn = "loading", il = class ie extends ls {
  constructor() {
    super(...arguments), Be(this, ln), Be(this, Us), Be(this, Et, void 0), Be(this, qe, void 0), Be(this, It, void 0);
  }
  get id() {
    return bt(this, qe);
  }
  get loading() {
    var t;
    return (t = bt(this, Et)) == null ? void 0 : t.classList.contains(Qn);
  }
  get shown() {
    var t;
    return !!((t = bt(this, Et)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = bt(this, Et);
    if (!t) {
      const { options: e } = this;
      let n = bt(this, qe);
      n || (n = e.id || `modal-${Ft()}`, be(this, qe, n));
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
    const t = bt(this, Et);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ie.getAll().some((t) => t.shown) || u("html").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (u("html").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = bt(this, Et);
    t && (u(t).removeData(this.constructor.KEY).remove(), be(this, Et, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    bt(this, It) && clearTimeout(bt(this, It));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = dd[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(Qn), r && be(this, It, window.setTimeout(() => {
      be(this, It, 0), Vs(this, Us, Di).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Vs(this, Us, Di).call(this, this.options.failedTip) : l && typeof l == "object" && await Vs(this, ln, $r).call(this, l), bt(this, It) && (clearTimeout(bt(this, It)), be(this, It, 0)), this.layout(), await Qs(100), n.removeClass(Qn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ie.ensure(n, r), a = `${ie.NAMESPACE}.open${Ft()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let g = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? g = /* @__PURE__ */ f("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      g
    ] }) : g = /* @__PURE__ */ f("div", { className: x("modal-body", h.bodyClass), children: g });
    const m = [];
    (Array.isArray(o) ? o : [o]).forEach((b) => {
      b = {
        ...typeof b == "string" ? { key: b } : b
      }, typeof b.key == "string" && (b.text || (b.text = Q.getLang(b.key, b.key)), b.btnType || (b.btnType = `btn-wide ${b.key === "confirm" ? "primary" : "btn-default"}`)), b && m.push(b);
    }, []);
    let p;
    const _ = m.length ? {
      gap: 4,
      items: m,
      onClickItem: ({ item: b, event: y }) => {
        const v = ie.query(y.target, c);
        p = b.key, (a == null ? void 0 : a(b, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await ie.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: g,
      backdrop: "static",
      custom: { footerActions: _, ...h },
      ...d
    }), p;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ie.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Et = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakSet();
$r = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, is(
      /* @__PURE__ */ f(sl, { ...s }),
      this.modalElement
    );
  });
};
Us = /* @__PURE__ */ new WeakSet();
Di = function(s) {
  if (s)
    return Vs(this, ln, $r).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
il.DEFAULT = {
  ...ls.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let ud = il;
const fd = '[data-toggle="modal"]';
class Pi extends at {
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
      e = ls.ensure(n, t);
    } else
      e = ud.ensure(this.container, t);
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
Pi.NAME = "ModalTrigger";
u(document).on(`click${Pi.NAMESPACE}`, fd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = Pi.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let Sr = class extends se {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
Sr.NAME = "nav";
Sr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class rl extends H {
}
rl.NAME = "Nav";
rl.Component = Sr;
function cs(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function pd({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = cs(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : tt(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : tt(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ f(et, { type: e, ...a });
}
function md({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = cs(i, e);
  return n = typeof n == "function" ? n(a) : tt(n, a), /* @__PURE__ */ f(K, { ...o, children: [
    r,
    n
  ] });
}
function gd({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ f(et, { type: t, ...o })), l = (d, h) => {
    const g = [];
    for (let m = d; m <= h; m++) {
      o.text = m, delete o.icon, o.disabled = !1;
      const p = cs(n, m);
      i && (o.url = typeof i == "function" ? i(p) : tt(i, p)), g.push(/* @__PURE__ */ f(et, { type: t, ...o }));
    }
    return g;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let _d = class extends W {
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
      contentClass: g,
      arrowStyle: m,
      onlyInner: p
    } = t;
    let _ = /* @__PURE__ */ f(F, { content: r }, "content");
    (g || i) && (_ = /* @__PURE__ */ f("div", { className: g, children: _ }, "content"));
    const b = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? b.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : b.push(y), b.push(_), c && b.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: m }, "arrow")), p ? b : /* @__PURE__ */ f("div", { id: e, className: x("popover", a, { popup: n }), style: o, children: b });
  }
};
class Tr extends H {
}
Tr.NAME = "PopoverPanel";
Tr.Component = _d;
const yd = '[data-toggle="popover"]', bo = "show", vo = "in";
class _t extends at {
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
    if (r.addClass(bo), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(vo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: n, onHide: i, onHidden: r, trigger: o } = this.options, a = u(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(vo), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(bo), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, n ? 200 : 0);
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
    n || (this._layoutWatcher = kr(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), Hn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        if (t instanceof HTMLElement && Nn(t)) {
          this.hide(!0);
          return;
        }
        const g = u(e).css({
          position: h,
          left: a,
          top: l
        }), m = d.split("-")[0], p = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[m], _ = c.arrow;
        _ && g.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${o}-arrow arrow-${p}`), r === !0 && g.attr("class", `${g.attr("class").split(" ").filter((b) => b !== "fade" && !b.startsWith("fade-from")).join(" ")} fade-from-${p}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", m);
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
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Tr(e, n), r.on("inited", () => this.layout())), this._panel = r;
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
        r ? rs(typeof r == "object" ? r : void 0) : null,
        o || d ? Ln((o || 0) + d) : null,
        a ? bi({ element: c }) : null
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
_t.NAME = "Popover";
_t.Z_INDEX = 1700;
_t.MULTI_INSTANCE = !0;
_t.DEFAULT = {
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
u(document).on(`click${_t.NAMESPACE} mouseenter${_t.NAMESPACE}`, yd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(_t.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    _t.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const bd = '[data-toggle="dropdown"]';
class xt extends _t {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, onClickItem: i, relativeTarget: r = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      onClickItem: i,
      relativeTarget: { target: r, event: this.options.triggerEvent, dropdown: this },
      ...n
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: $t(Nr, this._getMenuOptions())
    };
  }
}
xt.NAME = "Dropdown";
xt.DEFAULT = {
  ..._t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${xt.NAMESPACE} mouseenter${xt.NAMESPACE}`, bd, (s) => {
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
class On extends et {
  constructor() {
    super(...arguments), this._ref = z();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = u(this.triggerElement), a = xt.get(this.triggerElement), l = {
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
On.defaultProps = {
  caret: !0
};
Object.assign(wt.ItemComponents, { dropdown: On });
Object.assign(ot.ItemComponents, { dropdown: On });
class Nr extends Nt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this.element, e = t == null ? void 0 : t.parentElement;
    !t || !e || Hn(e, t, {
      placement: this.props.placement,
      middleware: [Pn(), rs(), Ln(1)]
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
Nr.defaultProps = {
  ...Nt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Nr.inheritNestedProps = [...Nt.inheritNestedProps, "popup"];
function vd({
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
      url: typeof e == "function" ? e(d) : tt(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : tt(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(On, { type: "dropdown", dropdown: i, ...o });
}
function wd({
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
  const g = (_) => {
    var b;
    h = Number((b = _.target) == null ? void 0 : b.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, m = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const b = cs(i, h);
    a && !a({ info: b, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(b) : tt(l, b));
  }, p = cs(i, t || 0);
  return d.url = typeof l == "function" ? l(p) : tt(l, p), /* @__PURE__ */ f("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: g }),
    /* @__PURE__ */ f(et, { type: n, ...d, onClick: m })
  ] });
}
let Fn = class extends ot {
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
Fn.NAME = "pager";
Fn.ItemComponents = {
  ...ot.ItemComponents,
  info: md,
  link: pd,
  nav: gd,
  "size-menu": vd,
  goto: wd
};
Fn.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class ol extends H {
}
ol.NAME = "Pager";
ol.Component = Fn;
class al extends H {
}
al.NAME = "Pick";
al.Component = lt;
var Te, bs;
class ll extends W {
  constructor(e) {
    super(e);
    U(this, Te, void 0);
    U(this, bs, void 0);
    this._searchInput = z(), this._measure = z(), this._changeTimer = 0, j(this, Te, (n) => {
      const i = n.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), n.stopPropagation();
    }), j(this, bs, (n) => {
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
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: D(this, bs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: D(this, Te),
          onInput: D(this, Te),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Te = new WeakMap(), bs = new WeakMap();
class Cd extends _r {
  constructor() {
    super(...arguments), this._search = z(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(F, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
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
      this._skipTriggerChange !== n.value && a.trigger("change", gi), this._skipTriggerChange = !1;
    }
  }
}
class kd extends _r {
  constructor() {
    super(...arguments), this._search = z(), this._handleDeselectClick = (t) => {
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
      const { text: p } = c;
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof p == "string" ? p : void 0, children: /* @__PURE__ */ f(F, { content: p }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const g = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      g,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
let Pe = class extends it {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Pe.NAME = "tree";
Pe.defaultProps = {
  ...it.defaultProps,
  indent: 12
};
Pe.defaultItemProps = {
  ...it.defaultItemProps,
  innerComponent: "div"
};
Pe.inheritNestedProps = [...it.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let Ts = class extends Nt {
  _getItem(t, e, n) {
    return Pe.getTreeItem(t, super._getItem(t, e, n));
  }
};
Ts.NAME = "tree";
Ts.inheritNestedProps = [...Nt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
Ts.defaultItemProps = {
  ...Nt.defaultProps,
  innerComponent: "div"
};
function cl(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && cl(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class xd extends Ba {
  constructor() {
    super(...arguments), this._menu = z(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, g) => {
        const m = this._getItem(h, g);
        return m && (m.active ? o = !0 : r = !1, d.push(m)), d;
      }, []));
      const a = r || n.has(t.value);
      t = {
        ...t,
        active: a,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: x(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
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
          const h = [...cl(t.items).values()].filter((g) => !g.items && !this._disabledSet.has(g.value)).map((g) => g.value);
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
    return x(
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
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ f(Ts, { hover: !0, ...n }) : /* @__PURE__ */ f(Nt, { ...n });
  }
}
function js(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && js(n.items, e), e.set(String(n.value), n), e), t || /* @__PURE__ */ new Map());
}
let Mr = class extends lt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = z(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
    return t.Trigger || (t.multiple ? Cd : kd);
  }
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], u.unique(e).reduce((n, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || n.push(i)), n), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    if (this.props.disabled)
      return Promise.resolve(this.state);
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
Mr.defaultProps = {
  ...lt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
Mr.Pop = xd;
class hl extends H {
}
hl.NAME = "Picker";
hl.Component = Mr;
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
    return i && n.middleware.push(Pn()), r && n.middleware.push(r === !0 ? rs() : rs(r)), o && n.middleware.push(bi({ element: this.$arrow[0] })), a && n.middleware.push(Ln(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = kr(t, e, () => {
      Hn(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !bi || !o.arrow)
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
class ul extends H {
}
ul.NAME = "SearchBox";
ul.Component = cr;
function ti(s, t) {
  const [e, n] = Tn(s);
  return n === "%" ? t * e / 100 : e;
}
const wo = "is-sidebar-resizing", ei = "has-sidebar-animation";
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
      gutterWidth: a = Tn(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: g,
      minWidth: m = 0,
      maxWidth: p = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, b = _ ? u(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = ti(g || t.width(), i), this._minWidth = ti(m, i), this._maxWidth = ti(p, i), this._width = (r ? Wt.get(this._storeID) : null) || this._defaultWidth, this._parent = b[0], b.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let y = t.find(".sidebar-gutter");
    y.length || (y = u('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = y, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (y.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), y.on("click", ".gutter-toggle", () => this.toggle())), c && y.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new Cs(y, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, b.addClass(wo).removeClass(ei);
      },
      onMove: (v, w) => {
        Math.abs(w.deltaX) < 10 || this.update(this._startWidth + w.deltaX);
      },
      onMoveEnd: () => {
        d && b.addClass(ei), b.removeClass(wo);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      b.addClass(ei);
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
    this._width = t, n && Wt.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
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
class pl extends H {
}
pl.NAME = "Toolbar";
pl.Component = ot;
_e(_h);
const $d = '[data-toggle="tooltip"]';
class Lt extends _t {
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
Lt.NAME = "Tooltip";
Lt.DEFAULT = {
  ..._t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Lt.NAMESPACE} mouseenter${Lt.NAMESPACE}`, $d, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(Lt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Lt.ensure(t, { show: Lt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
class Er extends H {
}
Er.NAME = "Tree";
Er.Component = Pe;
Er.replace = !0;
class ml extends H {
}
ml.NAME = "SearchTree";
ml.Component = Ts;
class Ir extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? Uc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const g = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(g);
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
      return new Lt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Lt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${Vc(t)}</span>`);
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
        const h = r.closest(".file-item"), g = h.find(".file-name");
        if (g.html() === o.val()) {
          r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), g.html(o.val());
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
Ir.NAME = "Upload";
Ir.DEFAULT = {
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
class gl extends Ir {
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
let _l = class extends K {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: n,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ f("div", { className: x("card-content", r), children: [
          e ? /* @__PURE__ */ f("div", { className: x("card-subtitle", n), children: /* @__PURE__ */ f(F, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ f(F, { content: i }, "extraContent") : null
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
      headingClass: g
    } = t;
    if (!e && !n && !r && !c && !h)
      return;
    const m = a ? "a" : "span";
    return /* @__PURE__ */ f("div", { className: x("card-heading", g), children: [
      e ? /* @__PURE__ */ f(q, { className: "card-icon", icon: e }, "icon") : null,
      n ? /* @__PURE__ */ f("span", { className: x("card-prefix", i), children: n }, "prefix") : null,
      r ? /* @__PURE__ */ f(m, { className: x("card-title", o), href: a, ...l, children: /* @__PURE__ */ f(F, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ f("span", { className: x("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ f(F, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: n
    } = t;
    if (e)
      return /* @__PURE__ */ f("div", { className: x("card-header", n), children: /* @__PURE__ */ f(F, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: n,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ f("div", { className: x("card-footer", n), children: [
        /* @__PURE__ */ f(F, { content: e }, "footer"),
        ot.render(i, [t], { key: "foot-actions", relativeTarget: t, className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return ot.render(t.actions, [t], { key: "actions", relativeTarget: t, className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const n = R({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ f(se, { ...n });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const n = typeof e == "function" ? e.call(this, t) : e;
      if (n)
        return n.className = x("item-avatar", n.className), /* @__PURE__ */ f(vs, { ...n }, "avatar");
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
};
class Co extends _l {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: n, innerComponent: i = "div" } = t, r = R({ className: x("card", n) }, e);
    return /* @__PURE__ */ f(i, { ...r, children: super._getChildren(t) });
  }
}
let Le = class extends se {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: n } = t;
    return R({
      style: {
        "--list-gap": e ? Jt(e) : void 0,
        "--list-count-per-row": n
      }
    }, super._getProps(t));
  }
  _getRenderedItem(t, e) {
    return e;
  }
};
Le.NAME = "card-list";
Le.TAG = "div";
Le.ItemComponents = {
  ...se.ItemComponents,
  default: Co,
  item: Co
};
Le.defaultItemProps = {
  component: "div"
};
class Ar extends H {
}
Ar.NAME = "Card";
Ar.Component = _l;
Ar.replace = !0;
class yl extends H {
}
yl.NAME = "CardList";
yl.Component = Le;
class Dr extends xt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Dr.NAME = "ContextMenu";
Dr.DEFAULT = {
  ...xt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function Sd(s) {
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
const si = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), ko = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], Ps = "Dashboard:Block.cache:";
let bl = class extends W {
  constructor(t) {
    super(t), this._ref = z(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      Dr.show({
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
        const i = await u.fetch(e, [t, n], ({ url: r }) => ({ url: tt(r, n), dataType: "html" }));
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
        typeof n == "string" ? Wt.set(`${Ps}${n}:${t}`, e) : Wt.session.set(`${Ps}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? Wt.get(`${Ps}${e}:${t}`) : Wt.session.get(`${Ps}${t}`);
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
        top: g = -1,
        fetch: m = e,
        menu: p = n,
        content: _,
        ...b
      } = o, [y, v] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: v,
        left: Math.min(h, i - y),
        top: g,
        fetch: m,
        menu: p,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!m,
        ...b
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
      t.sort((l, c) => ko(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => ko(a[1], l[1]));
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
    this._draggable = new An(t, {
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
        const { cellHeight: n, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / n)), g = this.state.dropping;
        g && g[0] === d && g[1] === h || this.setState({ dropping: [d, h, o, a] });
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
    if (n && si(t, n))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && si(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && si(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
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
            const { id: d, menu: h, content: g, title: m } = l, [p, _, b, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              Sd,
              {
                id: d,
                index: c,
                left: `${100 * p / i}%`,
                top: n * _,
                width: `${100 * b / i}%`,
                height: n * y,
                content: g,
                title: m,
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
bl.defaultProps = {
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
class vl extends H {
}
vl.NAME = "Dashboard";
vl.Component = bl;
var Gt, Yt;
class xo extends W {
  constructor(e) {
    super(e);
    U(this, Gt, void 0);
    U(this, Yt, void 0);
    j(this, Gt, 0), j(this, Yt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (D(this, Gt) && cancelAnimationFrame(D(this, Gt)), j(this, Gt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), j(this, Gt, 0);
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
    e && (j(this, Yt, typeof e == "string" ? document : e.current), D(this, Yt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), D(this, Yt) && D(this, Yt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: g } = this, { dragStart: m } = this.state, p = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return n === "horz" ? (p.height = i, p.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, g) * (e - _.width) / h)) : (p.width = i, p.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, g) * (e - _.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": m
        }),
        style: p,
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
Gt = new WeakMap(), Yt = new WeakMap();
const cn = /* @__PURE__ */ new Map(), hn = [];
function wl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && cn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  cn.set(e, s), t != null && t.buildIn && !hn.includes(e) && hn.push(e);
}
function pt(s, t) {
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
  return cn.delete(s);
}
function Td(s) {
  if (typeof s == "string") {
    const t = cn.get(s);
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
    const i = Td(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && kl(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function Nd(s = [], t = !0) {
  return t && hn.length && s.unshift(...hn), s != null && s.length ? kl([], s, /* @__PURE__ */ new Set()) : [];
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
function Md(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function $o(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function ni(s, t = !1) {
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
function Ed(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (v) => (typeof v == "function" && (v = v.call(s)), v = $o(v, 0), v < 1 && (v = Math.round(v * n)), v), d = {
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
  }, g = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, m = [], p = {};
  let _ = !1;
  const b = [], y = {};
  if (e.forEach((v) => {
    const { colTypes: w, onAddCol: k } = v;
    w && Object.entries(w).forEach(([C, $]) => {
      y[C] || (y[C] = []), y[C].push($);
    }), k && b.push(k);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: w = "", name: k } = v, C = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...v,
      type: w
    }, $ = {
      name: k,
      type: w,
      setting: C,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, E = y[w];
    E && E.forEach((M) => {
      const G = typeof M == "function" ? M.call(s, C) : M;
      G && Object.assign(C, G, v);
    });
    const { fixed: I, flex: A, minWidth: N = r, maxWidth: P = o } = C, O = $o(C.width || i, i);
    $.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, $.width = Md(O < 1 ? Math.round(O * n) : O, N, P), b.forEach((M) => M.call(s, $)), m.push($), p[$.name] = $;
    const V = I ? I === "left" ? h : g : d;
    V.list.push($), V.totalWidth += $.width, V.width = V.totalWidth, $.flex && V.flexList.push($), typeof C.order == "number" && (_ = !0);
  }), _) {
    const v = (w, k) => (w.setting.order ?? 0) - (k.setting.order ?? 0);
    m.sort(v), h.list.sort(v), d.list.sort(v), g.list.sort(v);
  }
  return ni(h, !0), ni(g, !0), d.widthSetting = n - h.width - g.width, ni(d), {
    list: m,
    map: p,
    left: h,
    center: d,
    right: g
  };
}
function Id(s) {
  var V;
  const { col: t, className: e, height: n, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: d, left: h, top: g, ...m } = s, p = {
    left: h ?? t.left,
    top: g ?? i.top,
    width: d ?? t.realWidth,
    height: n,
    ...a
  }, { align: _, border: b } = t.setting, y = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...t.setting.cellStyle,
    ...o
  }, v = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": b === !0 || b === "left",
    "has-border-right": b === !0 || b === "right"
  }], w = ["dtable-cell-content", t.setting.cellClass], k = (V = i.data) == null ? void 0 : V[t.name], C = [l ?? k ?? ""], $ = r ? r(C, { row: i, col: t, value: k }, s, $t) : C, E = [], I = [], A = {}, N = {};
  let P = "div";
  $ == null || $.forEach((M) => {
    if (typeof M == "object" && M && !gt(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const G = M.outer ? E : I;
      M.html ? G.push(/* @__PURE__ */ f("div", { className: x("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? p : y, M.style), M.className && (M.outer ? v : w).push(M.className), M.children && G.push(M.children), M.attrs && Object.assign(M.outer ? A : N, M.attrs)), M.tagName && !M.outer && (P = M.tagName);
    } else
      I.push(M);
  });
  const O = P;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x(v),
      style: p,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...m,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ f(O, { className: x(w), style: y, ...N, children: I }),
        E
      ]
    }
  );
}
function ii({
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
  CellComponent: d = Id,
  onRenderCell: h
}) {
  var _;
  const g = Array.isArray(s) ? s : [s], m = ((_ = g[0]) == null ? void 0 : _.top) ?? 0, p = g.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: g.reduce((b, y, v) => {
        const w = t.length;
        return t.forEach((k, C) => {
          b.push(
            /* @__PURE__ */ f(
              d,
              {
                className: x(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  C ? "" : "is-first-in-row",
                  C === w - 1 ? "is-last-in-row" : "",
                  v ? "" : "is-first-row",
                  v === p - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: y,
                top: y.top - m,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${k.name}`
            )
          );
        }), b;
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
  children: g
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ f(
    ii,
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
  let p = null;
  r.list.length && (p = /* @__PURE__ */ f(
    ii,
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
    ii,
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
      className: x("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        m,
        p,
        _,
        g
      ]
    }
  );
}
var Pr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, T = (s, t, e) => (Pr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, X = (s, t, e, n) => (Pr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ct = (s, t, e) => (Pr(s, t, "access private method"), e), we, Ge, he, Rt, oe, rt, Dt, At, Ye, Ks, dn, hs, jt, Xe, Je, Li, Sl, Ri, Tl, Wi, Nl, Hi, Ml, qs, Oi, Bn, un, Fi, Bi, zi, Vi, Ze, Gs, fn, Lr, Rr, El, Ui, Il;
let Wr = class extends W {
  constructor(t) {
    super(t), L(this, Li), L(this, Ri), L(this, Wi), L(this, Hi), L(this, qs), L(this, Ze), L(this, fn), L(this, Rr), L(this, Ui), this.ref = z(), L(this, we, 0), L(this, Ge, void 0), L(this, he, !1), L(this, Rt, void 0), L(this, oe, void 0), L(this, rt, []), L(this, Dt, void 0), L(this, At, /* @__PURE__ */ new Map()), L(this, Ye, {}), L(this, Ks, void 0), L(this, dn, []), L(this, hs, { in: !1 }), this.updateLayout = () => {
      T(this, we) && cancelAnimationFrame(T(this, we)), X(this, we, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), X(this, we, 0);
      }));
    }, L(this, jt, (e, n) => {
      n = n || e.type;
      const i = T(this, At).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Xe, (e) => {
      T(this, jt).call(this, e, `window_${e.type}`);
    }), L(this, Je, (e) => {
      T(this, jt).call(this, e, `document_${e.type}`);
    }), L(this, Bn, (e, n, i, r) => {
      const { row: o, col: a } = n;
      n.value = this.getCellValue(o, a), e[0] = n.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return T(this, rt).forEach((c) => {
        c[l] && (e = c[l].call(this, e, n, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, n, i, r)), a.setting[l] && (e = a.setting[l].call(this, e, n, i, r)), e;
    }), L(this, un, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Fi, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), T(this, rt).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of T(this, rt))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), L(this, Bi, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), L(this, zi, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return ct(this, Ze, Gs).call(this, !1);
      ct(this, Ze, Gs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), L(this, Vi, () => {
      ct(this, Ze, Gs).call(this, !1);
    }), X(this, Ge, t.id ?? `dtable-${Ft()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, X(this, oe, Object.freeze(Nd(t.plugins))), T(this, oe).forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(T(this, Ye), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), ct(this, fn, Lr).call(this), T(this, rt).forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, Dt)) == null ? void 0 : t.options) || T(this, Rt) || xl();
  }
  get plugins() {
    return T(this, rt);
  }
  get layout() {
    return T(this, Dt);
  }
  get id() {
    return T(this, Ge);
  }
  get data() {
    return T(this, Ye);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, hs);
  }
  componentWillReceiveProps() {
    X(this, Rt, void 0);
  }
  componentDidMount() {
    T(this, he) ? this.forceUpdate() : ct(this, qs, Oi).call(this), this.on("click", T(this, Fi)), this.on("keydown", T(this, Bi));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", T(this, zi)), this.on("mouseleave", T(this, Vi)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const n = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = new ResizeObserver(this.updateLayout);
        X(this, Ks, i);
        const { parent: r } = this;
        n.forEach((o) => {
          o !== "window" && (o === "parent" ? r && i.observe(r) : u(o).each((a, l) => i.observe(l)));
        });
      }
      n.includes("window") && this.on("window_resize", this.updateLayout);
    }
    T(this, rt).forEach((n) => {
      var r;
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, a]) => {
        a && this.on(o, a);
      }), (r = n.onMounted) == null || r.call(this));
    });
  }
  componentDidUpdate() {
    T(this, he) ? ct(this, qs, Oi).call(this) : T(this, rt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, Ks)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of T(this, At).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), T(this, Xe)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), T(this, Je)) : t.removeEventListener(n, T(this, jt));
    T(this, rt).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), T(this, oe).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), X(this, Ye, {}), T(this, At).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = T(this, At).get(t);
    i ? i.push(e) : (T(this, At).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, Xe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, Je)) : (r = this.element) == null || r.addEventListener(t, T(this, jt)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = T(this, At).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (T(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, Xe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, Je)) : (o = this.element) == null || o.removeEventListener(t, T(this, jt)));
  }
  emitCustomEvent(t, e) {
    T(this, jt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var n;
      this._noAnimation = void 0, (n = this.element) == null || n.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: g } = t;
    if (d === "up" || d === "down")
      g = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      g = 0;
    else if (d === "bottom")
      g = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: p, offsetTop: _ } = t;
      typeof p == "number" && (h = n + p), typeof _ == "number" && (g = i + _);
    }
    const m = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (m.scrollLeft = h)), typeof g == "number" && (g = Math.max(0, Math.min(g, r - o)), g !== i && (m.scrollTop = g)), Object.keys(m).length ? (this.setState(m, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, m), e == null || e.call(this, !0);
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
    if (!T(this, Rt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      X(this, Dt, void 0);
    else if (n === "options") {
      if (X(this, Rt, void 0), !T(this, Dt))
        return;
      X(this, Dt, void 0);
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
    return Q(T(this, dn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = ct(this, Ui, Il).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, g = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], m = [];
    if (t) {
      const p = !t.rows.length;
      if (c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      T(this, rt).forEach((_) => {
        var y;
        const b = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        b && (t = b);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, g.push(
        t.className,
        p ? "dtable-is-empty" : "",
        {
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && m.push(...t.children), p && d ? (delete h.height, m.push(
        /* @__PURE__ */ f("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ f(F, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (m.push(
        ct(this, Li, Sl).call(this, t),
        ct(this, Ri, Tl).call(this, t),
        ct(this, Wi, Nl).call(this, t)
      ), t.scrollable && m.push(ct(this, Hi, Ml).call(this, t))), T(this, rt).forEach((_) => {
        var y;
        const b = (y = _.onRender) == null ? void 0 : y.call(this, t);
        b && (b.style && Object.assign(h, b.style), b.className && g.push(b.className), b.children && m.push(b.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: T(this, Ge),
        className: x(g),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: m
      }
    );
  }
};
we = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
dn = /* @__PURE__ */ new WeakMap();
hs = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakSet();
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
        onRenderCell: T(this, Bn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ga,
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
Ri = /* @__PURE__ */ new WeakSet();
Tl = function(s) {
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
      onRenderCell: T(this, Bn),
      children: l
    },
    "body"
  );
};
Wi = /* @__PURE__ */ new WeakSet();
Nl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    ga,
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
Hi = /* @__PURE__ */ new WeakSet();
Ml = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: g } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      xo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: T(this, un),
        left: n,
        bottom: (g === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      xo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: T(this, un),
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
Oi = function() {
  var s;
  X(this, he, !1), (s = this.options.afterRender) == null || s.call(this), T(this, rt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Bn = /* @__PURE__ */ new WeakMap();
un = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakMap();
Bi = /* @__PURE__ */ new WeakMap();
zi = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakSet();
Gs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = T(this, hs);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), X(this, hs, i);
};
fn = /* @__PURE__ */ new WeakSet();
Lr = function() {
  if (T(this, Rt))
    return !1;
  const t = { ...xl(), ...T(this, oe).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return X(this, Rt, t), X(this, rt, T(this, oe).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), X(this, dn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Rr = /* @__PURE__ */ new WeakSet();
El = function() {
  var I, A;
  const { plugins: s } = this;
  let t = T(this, Rt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((N) => {
    var O;
    const P = (O = N.beforeLayout) == null ? void 0 : O.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, N.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: N } = this;
    if (N)
      i = N.clientWidth;
    else {
      X(this, he, !0);
      return;
    }
  }
  const r = Ed(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (N, P, O) => {
    var M, G;
    const V = { data: O ?? { [a]: N }, id: N, index: c.length, top: 0 };
    if (O || (V.lazy = !0), c.push(V), ((M = t.onAddRow) == null ? void 0 : M.call(this, V, P)) !== !1) {
      for (const mt of s)
        if (((G = mt.onAddRow) == null ? void 0 : G.call(this, V, P)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let N = 0; N < o; N++)
      d(`${N}`, N);
  else
    Array.isArray(o) && o.forEach((N, P) => {
      typeof N == "object" ? d(`${N[a] ?? ""}`, P, N) : d(`${N ?? ""}`, P);
    });
  let h = c;
  const g = {};
  if (t.onAddRows) {
    const N = t.onAddRows.call(this, h);
    N && (h = N);
  }
  for (const N of s) {
    const P = (I = N.onAddRows) == null ? void 0 : I.call(this, h);
    P && (h = P);
  }
  h.forEach((N, P) => {
    g[N.id] = N, N.index = P, N.top = N.index * l;
  });
  const { header: m, footer: p } = t, _ = m ? t.headerHeight || l : 0, b = p ? t.footerHeight || l : 0;
  let y = t.height, v = 0;
  const w = h.length * l, k = _ + b + w;
  if (typeof y == "function" && (y = y.call(this, k)), y === "auto")
    v = k;
  else if (typeof y == "object")
    v = Math.min(y.max, Math.max(y.min, k));
  else if (y === "100%") {
    const { parent: N } = this;
    if (N)
      v = N.clientHeight;
    else {
      v = 0, X(this, he, !0);
      return;
    }
  } else
    v = y;
  const C = v - _ - b, $ = {
    options: t,
    allRows: c,
    width: i,
    height: v,
    rows: h,
    rowsMap: g,
    rowHeight: l,
    rowsHeight: C,
    rowsHeightTotal: w,
    header: m,
    footer: p,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: b,
    cols: r
  }, E = (A = t.onLayout) == null ? void 0 : A.call(this, $);
  E && Object.assign($, E), s.forEach((N) => {
    if (N.onLayout) {
      const P = N.onLayout.call(this, $);
      P && Object.assign($, P);
    }
  }), X(this, Dt, $);
};
Ui = /* @__PURE__ */ new WeakSet();
Il = function() {
  (ct(this, fn, Lr).call(this) || !T(this, Dt)) && ct(this, Rr, El).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((p) => {
    p.left = n, n += p.realWidth, p.visible = p.left + p.realWidth >= e && p.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), g = [], { rowDataGetter: m } = this.options;
  for (let p = c; p < h; p++) {
    const _ = o[p];
    _.lazy && m && (_.data = m([_.id])[0], _.lazy = !1), g.push(_);
  }
  return Object.assign(s, {
    visibleRows: g,
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
Wr.addPlugin = wl;
Wr.removePlugin = Cl;
class Al extends W {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: x("progress", l), style: {
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
Al.defaultProps = {
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
  }), /* @__PURE__ */ f("a", { href: tt(i, t.row.data), ...n, ...r, ...a, children: e });
}
function Hr(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : tt(s, e);
}
function Pl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), st(e, s, n ?? e))) : n ?? e;
}
function Ll(s, t) {
  const { link: e } = t.col.setting, n = Dl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function Rl(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = Hr(e, t, s[0])), s;
}
function Wl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function Hl(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = Pl(n, t, s[0], i), s;
}
function ji(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : Hr(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const Ad = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return ji(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          Al,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          mr,
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
    if (e && (s = Hl(s, t, e)), s = Wl(s, t), s = Rl(s, t), n ? s = ji(s, t) : s = Ll(s, t), i) {
      let r = t.value;
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" ? r = tt(i, t.row.data) : typeof s[0] == "string" && (r = s[0]), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, Dd = pt(Ad, { buildIn: !0 }), Pd = {
  html: { component: ue }
}, Ld = {
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
        props: { html: tt(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Pd[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((g) => {
        if (g) {
          const { props: m } = g;
          m && u.extend(d, typeof m == "function" ? m.call(this, t) : m), l = g.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), s;
  }
}, Rd = pt(Ld);
function Wd(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !Ol.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Hd(s) {
  return this.state.checkedRows[s] ?? !1;
}
function Ol() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function Od() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function Fd(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function So(s, t, e = !1) {
  return /* @__PURE__ */ f(En, { className: "dtable-checkbox", checked: s, disabled: e });
}
const To = 'input[type="checkbox"],.dtable-checkbox', Bd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: So
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
    toggleCheckRows: Wd,
    isRowChecked: Hd,
    isAllRowChecked: Ol,
    getChecks: Od,
    toggleCheckable: Fd
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: So(s) })
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
    if (this.data.disableCheckable)
      return;
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(To);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(To).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, zd = pt(Bd), Vd = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new ws(`DTable:${this.id}`) };
  }
}, Ud = pt(Vd);
var Fl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Fl || {});
function pn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = pn.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? pn.call(this, t.parent).level + 1 : 0, t;
}
function jd(s) {
  return s !== void 0 ? pn.call(this, s) : this.data.nestedMap;
}
function Kd(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !Bl.call(this)), t) {
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
function Bl() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function zl(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = zl(s, t, o.children, n + 1)));
  }
  return t;
}
function Vl(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Vl(s, r, e, n);
  }), i;
}
function Ul(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Ul(s, r.parent, e, n, i);
}
const Ls = "dtable-nested-toggle", qd = {
  name: "nested",
  plugins: [Ud],
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
        const o = Vl(this, i, r, n);
        o != null && o.parent && Ul(this, o.parent, r, n, e);
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
    getNestedInfo: jd,
    toggleRow: Kd,
    isAllCollapsed: Bl,
    getNestedRowInfo: pn
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
    this.data.nestedMap.clear();
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
    ), zl(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ f("a", { className: `${Ls} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
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
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ f("a", { className: `${Ls} state`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(`.${Ls}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${Ls}`)))
      return this.toggleRow(t), !0;
  }
}, Gd = pt(qd);
function ri(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: x(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(vs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: g } = e.setting, m = typeof g == "function" ? g(e, t) : g;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...m, children: [
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
const Yd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ri
    },
    avatarBtn: {
      onRenderCell: ri
    },
    avatarName: {
      onRenderCell: ri
    }
  }
}, Xd = pt(Yd, { buildIn: !0 }), Jd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t;
    let { sortType: n } = e.setting;
    const { sortLink: i, orderBy: r } = this.options;
    if (r && r[e.name] !== void 0 && (n = r[e.name]), n) {
      const o = n === !0 ? "none" : n, a = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${o}` });
      s.push(
        { outer: !0, attrs: { "data-sort": o } }
      );
      let { sortLink: l = i } = e.setting;
      if (l) {
        const c = o === "asc" ? "desc" : "asc";
        typeof l == "function" && (l = l.call(this, e, c, o)), typeof l == "string" && (l = { url: l });
        const { url: d, ...h } = l;
        s[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: tt(d, { ...e.setting, sortType: c }), ...h, children: [
          s[0],
          a
        ] });
      } else
        s.push(a);
    }
    return s;
  }
}, Zd = pt(Jd, { buildIn: !0 }), oi = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Qd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    oi(t.left.list), oi(t.center.list), oi(t.right.list);
  }
}, tu = pt(Qd), eu = {
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
      l.forEach((g, m) => {
        const { index: p } = g, _ = `C${p}R${h}`;
        if (n.has(_))
          return;
        const b = t.call(this, { row: c, col: g });
        if (!b)
          return;
        const y = Math.min(b.colSpan || 1, l.length - m), v = Math.min(b.rowSpan || 1, i.length - d);
        if (y <= 1 && v <= 1)
          return;
        let w = 0;
        for (let k = 0; k < y; k++) {
          w += l[m + k].realWidth;
          for (let C = 0; C < v; C++) {
            const $ = `C${p + k}R${h + C}`;
            $ !== _ && n.add($);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: v,
          width: w,
          height: o * v
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
}, su = pt(eu), nu = {
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
}, jl = pt(nu);
function iu() {
  var v, w;
  const { scrollToMouse: s } = this.data;
  if (!s)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: n } = s;
  if (!t || Date.now() - e < n)
    return;
  const i = (w = (v = this.ref.current) == null ? void 0 : v.querySelector(".dtable-body")) == null ? void 0 : w.getBoundingClientRect();
  if (!i)
    return;
  const { maxStep: r, detectPadding: o, speed: a, side: l } = s, { x: c, y: d } = t, { left: h, top: g, right: m, bottom: p } = i;
  let _ = 0;
  c < h - o ? _ = -Math.max(r, h - o - c) : c > m - o && (_ = Math.max(r, c - (m - o)));
  let b = 0;
  if (d < g - o ? b = -Math.max(r, g - o - d) : d > p - o && (b = Math.max(r, d - (p - o))), l) {
    const k = new Set((Array.isArray(l) ? l : [l]).reduce((C, $) => ($ === "x" ? C.push("left", "right") : $ === "y" ? C.push("top", "bottom") : C.push($), C), []));
    (!k.has("left") && _ < 0 || !k.has("right") && _ > 0) && (_ = 0), (!k.has("top") && b < 0 || !k.has("bottom") && b > 0) && (b = 0);
  }
  const y = {};
  _ !== 0 && (y.scrollLeft = this.layout.scrollLeft + a * _), b !== 0 && (y.scrollTop = this.layout.scrollTop + a * b), this.scroll(y);
}
const ru = {
  name: "autoscroll",
  plugins: [jl],
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
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, d = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : d > c + a && (r.scrollTop = d - c + e);
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
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(iu.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, ou = pt(ru);
const au = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(s, t) {
      return this.options.nested ? this.getNestedRowInfo(s.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (s) => !!s.sortable,
  plugins: [jl, ou],
  events: {
    mousedown(s) {
      var r;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!u(s.target).closest(t).length)
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
        let n;
        const { sortingFrom: i, sortingTo: r, sortingSide: o } = t;
        if (r && o) {
          const a = [...this.layout.rows], l = i.index, c = r.index, d = a.splice(l, 1);
          a.splice(c, 0, d[0]), n = {};
          const h = [];
          a.forEach(({ id: g }, m) => {
            n[g] = m, h.push(g);
          }), ((e = this.options.onSort) == null ? void 0 : e.call(this, i, r, o, h)) === !1 && (n = void 0);
        }
        this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: u.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, n ? { rowOrders: n } : null)
        }, () => {
          var a;
          (a = this.options.onSortEnd) == null || a.call(this, i, r, o), setTimeout(() => {
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
      var $;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: n, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, d = l.height - n - i, h = s.clientX - l.left, g = s.clientY - l.top - n;
      if (h < 0 || h > c || g < 0 || g > d)
        return e.state;
      const m = g + o, p = r.find((E) => E.top <= m && E.top + a > m);
      if (!p)
        return e.state;
      const _ = e.from, b = p.id !== _.id ? p.id : void 0, y = b ? this.getRowInfo(b) : void 0, v = g, w = m < p.top + a / 2 ? "before" : "after";
      return y && (($ = this.options.canSortTo) == null ? void 0 : $.call(this, _, y, w)) !== !1 ? {
        sortingFrom: _,
        sortingPos: v,
        sortingTo: y,
        sortingSide: w
      } : {
        sortingFrom: _,
        sortingPos: v,
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
      const d = r.id === a.id;
      d && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), n.index > a.index && (d && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : n.index < a.index && (d && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && s.push({
      outer: !0,
      style: l,
      className: c
    }), s;
  }
}, lu = pt(au), cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Fl,
  avatar: Xd,
  cellspan: su,
  checkable: zd,
  custom: Rd,
  group: tu,
  nested: Gd,
  renderDatetime: Pl,
  renderDatetimeCell: Hl,
  renderFormat: Hr,
  renderFormatCell: Rl,
  renderHtmlCell: ji,
  renderLink: Dl,
  renderLinkCell: Ll,
  renderMapCell: Wl,
  rich: Dd,
  sortType: Zd,
  sortable: lu
}, Symbol.toStringTag, { value: "Module" }));
class Ns extends H {
}
Ns.NAME = "DTable";
Ns.Component = Wr;
Ns.definePlugin = pt;
Ns.removePlugin = Cl;
Ns.plugins = cu;
class Or extends K {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: n,
      name: i
    } = t;
    return R(super._getProps(t), {
      style: {
        "--kanban-col-color": n,
        "--kanban-col-width": Jt(e)
      },
      "z-col": i
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
          e ? /* @__PURE__ */ f("span", { className: x("as-prefix", n), children: /* @__PURE__ */ f(F, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ f("span", { className: x("as-title", r), children: /* @__PURE__ */ f(F, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ f("span", { className: x("as-subtitle", a), children: /* @__PURE__ */ f(F, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ f(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        ot.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ f("div", { className: "kanban-header-sub-cols", children: h.map((g, m) => /* @__PURE__ */ f(Or, { index: m, ...g }, g.name)) }, "subs") : null
    ];
  }
}
function hu(s) {
  const { cols: t } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-header", children: [
    /* @__PURE__ */ f("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ f("div", { className: "kanban-header-cols", children: t.map((e, n) => /* @__PURE__ */ f(Or, { index: n, ...e }, e.name)) }, "cols")
  ] });
}
class Kl extends W {
  constructor() {
    super(...arguments), this._listRef = z(), this._renderItem = (t) => {
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
      color: i,
      content: r,
      contentClass: o,
      itemRender: a,
      itemGap: l,
      watchSize: c,
      name: d,
      lane: h,
      itemCountPerRow: g
    } = t, m = {
      "--kanban-col-color": i,
      "--kanban-col-width": Jt(n)
    };
    return /* @__PURE__ */ f("div", { className: "kanban-lane-col", style: m, "z-lane": h, "z-col": d, children: [
      r ? /* @__PURE__ */ f("div", { className: x("kanban-col-content", o), children: /* @__PURE__ */ f(F, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ f("div", { className: "kanban-items scrollbar-thin scrollbar-hover", children: /* @__PURE__ */ f(
        Le,
        {
          forwardRef: c ? this._listRef : void 0,
          itemProps: { className: "kanban-item card-list-item" },
          items: e,
          itemRender: a ? this._renderItem : void 0,
          countPerRow: g,
          gap: l
        },
        "list"
      ) })
    ] });
  }
}
Kl.defaultProps = {
  watchSize: !0
};
class du extends K {
  _getClassName(t) {
    const { className: e, index: n, maxHeight: i, height: r } = t;
    return ["kanban-lane", e, { "is-first": !n, "is-auto-height": !i && (!r || r === "auto") }];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: n,
      maxHeight: i,
      color: r,
      name: o
    } = t;
    return R(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: Jt(e),
        minHeight: Jt(n),
        maxHeight: Jt(i)
      },
      "z-lane": o
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
        /* @__PURE__ */ f("div", { className: x("kanban-lane-title", i), children: /* @__PURE__ */ f(F, { content: n }) }, "title"),
        ot.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ f("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function uu(s) {
  const { lanes: t, cols: e, items: n = {}, itemRender: i } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ f(du, { index: o, cols: e, items: n[r.name], itemRender: i, ...r }, r.name)) });
}
const ht = 12, fu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function No(s, t) {
  return t === "top" ? { x: s.x + s.width / 2, y: s.y } : t === "left" ? { x: s.x, y: s.y + s.height / 2 } : t === "right" ? { x: s.x + s.width, y: s.y + s.height / 2 } : { x: s.x + s.width / 2, y: s.y + s.height };
}
function pu(s, t) {
  return (s.x - t.x) * (s.x - t.x) + (s.y - t.y) * (s.y - t.y);
}
function mu(s, t, e, n) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = n ? [n] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = No(s, c), g = No(t, d), m = pu(h, g) * (fu[c] === d ? 1 : 2);
      m < o && (o = m, e = c, n = d, a = h, l = g);
    });
  }), {
    fromSide: e,
    toSide: n,
    fromPos: a,
    toPos: l
  };
}
function gu(s, t) {
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
function Mo(s, t, e) {
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
function _u(s, t, e, n, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = ql(s, t), d = ht - o, h = ht - a;
  if (i === "curve") {
    const g = l * 0.7, m = c * 0.7, p = r * 2, _ = {
      a1x: s.x + (e === "left" ? -p : e === "right" ? p : 0),
      a1y: s.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      ax: s.x + (e === "left" ? -g : e === "right" ? g : 0),
      ay: s.y + (e === "top" ? -m : e === "bottom" ? m : 0),
      bx: t.x + (n === "left" ? -(g - p) : n === "right" ? g - p : 0),
      by: t.y + (n === "top" ? -(m - p) : n === "bottom" ? m - p : 0),
      b1x: t.x + (n === "left" ? -p : n === "right" ? p : 0),
      b1y: t.y + (n === "top" ? -p : n === "bottom" ? p : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const g = gu(s, t), m = l / 2, p = c / 2, _ = {
      ax: s.x + (e === "left" ? -m : e === "right" ? m : 0),
      ay: s.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      bx: t.x + (n === "left" ? -m : n === "right" ? m : 0),
      by: t.y + (n === "top" ? -p : n === "bottom" ? p : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.ax + d} ${_.ay + h} L ${g.x + d} ${g.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${s.x + d} ${s.y + h} L ${t.x + d} ${t.y + h}`;
}
function yu(s) {
  const { fromRect: t, toRect: e } = s, n = `${s.from}-${s.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = mu(i, r), d = ql(l, c), { x: h, y: g, width: m, height: p } = d;
  l.x += ht - h, l.y += ht - g, c.x += ht - h, c.y += ht - g;
  const {
    weight: _ = 1,
    fromPoint: b,
    toPoint: y = "arrow"
  } = s, v = {
    left: `${0 - ht}px`,
    top: `${0 - ht}px`,
    width: `${m + 2 * ht}px`,
    height: `${p + 2 * ht}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": b && b !== "none" ? `url(#marker-start-${n}-${b})` : void 0,
    "marker-end": y && y !== "none" ? `url(#marker-end-${n}-${y})` : void 0,
    d: _u(l, c, o, a, s.shape, _)
  }, k = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, C = {
    width: m + 2 * ht,
    height: p + 2 * ht
  }, $ = [];
  return s.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : s.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), b && b !== "none" && $.push(Mo(b, "start", n)), y && y !== "none" && $.push(Mo(y, "end", n)), {
    x: h,
    y: g,
    width: m,
    height: p,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: v,
    svgPathProps: w,
    svgPathBackProps: k,
    svgProps: C,
    markers: $,
    padding: ht
  };
}
class Gl extends W {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: n, textSize: i, color: r, onDelete: o } = t, { hover: a } = e, { x: l, y: c, padding: d, width: h, height: g, svgProps: m, markers: p, svgPathProps: _, svgPathBackProps: b, fromPos: y } = yu(t);
    return /* @__PURE__ */ f("div", { className: x("kanban-link", a ? "is-hover" : ""), style: { left: l, top: c, width: h, height: g, color: r }, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ f("svg", { ...m, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        p.length ? /* @__PURE__ */ f("defs", { children: p.map(({ path: v, id: w, ...k }) => /* @__PURE__ */ f("marker", { ...k, id: w, children: /* @__PURE__ */ f("path", { ...v }) }, w)) }) : null,
        /* @__PURE__ */ f("path", { ...b }),
        /* @__PURE__ */ f("path", { ..._ })
      ] }),
      /* @__PURE__ */ f("div", { className: "kanban-link-start-point", style: { left: y.x - d, top: y.y - d } }),
      o ? /* @__PURE__ */ f("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ f("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ f("i", { className: "close" }) }) }) : null,
      n ? /* @__PURE__ */ f("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: n }) : null
    ] });
  }
}
class bu extends W {
  constructor() {
    super(...arguments), this._ref = z(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    u(t).on("laneColResize.kanban", () => {
      this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && u(t).off(".kanban"), this._raf && cancelAnimationFrame(this._raf);
  }
  componentDidUpdate(t) {
    t.links !== this.props.links && this._tryUpdateLayout();
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._idSet], e = u(this._kanban).find(".kanban-body"), { top: n, left: i } = this._kanban.getBoundingClientRect(), r = {};
    t.forEach((o) => {
      const a = e.find(`.kanban-item[z-key="${o}"]`).children()[0];
      if (a) {
        const { top: l, left: c, bottom: d, right: h } = a.getBoundingClientRect();
        r[o] = { top: l - n, left: c - i, bottom: d - n, right: h - i };
      }
    }), this.setState({ layout: r });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: n, to: i } = t, r = e[n], o = e[i];
    return this._idSet.add(n), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ f(Gl, { ...t, fromRect: r, toRect: o, onDelete: this.props.onDeleteLink }, `${n}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ f("div", { className: "kanban-links", ref: this._ref, children: e.map((n) => this._renderLink(n)) });
  }
}
const Rs = ".kanban";
class vu extends W {
  constructor() {
    super(...arguments), this._ref = z(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, e = t.closest(".kanban");
    this._kanban = e;
    const n = ".kanban-item,.kanban-link-editor-from";
    u(e).on(`mouseenter${Rs}`, n, (i) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const r = u(i.target).closest(n), o = r.attr("z-key");
      this.state.from === o || r.hasClass("is-dragging") || this.setState({
        from: o,
        to: void 0,
        fromRect: this._getRect(r.children()[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${Rs}`, n, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${Rs}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }), this._moveable = new Cs(t, {
      selector: ".kanban-link-editor-point",
      move: "none",
      onMoveStart: () => {
        if (!this.state.from)
          return !1;
        u(e).addClass("is-adding-link");
      },
      onMove: (i) => {
        const { top: r, left: o } = this._kanban.getBoundingClientRect(), a = { left: i.clientX - o, top: i.clientY - r };
        let l, c;
        const d = u(i.target).closest(n);
        d.length && l !== this.state.from && (l = d.attr("z-key"), c = this._getRect(d.children()[0])), this.setState({ dragPos: a, to: l, toRect: c });
      },
      onMoveEnd: () => {
        const { from: i, to: r } = this.state, { onAddLink: o } = this.props;
        i !== r && o && i !== void 0 && r !== void 0 && (o == null || o.call(this, i, r)), this._cancelHover(), u(e).removeClass("is-adding-link");
      }
    });
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && u(t).off(Rs), this._raf && cancelAnimationFrame(this._raf);
  }
  _getRect(t) {
    const e = t.getBoundingClientRect(), { top: n, left: i } = this._kanban.getBoundingClientRect();
    return {
      left: e.left - i,
      top: e.top - n,
      width: e.width,
      height: e.height
    };
  }
  _cancelHover() {
    this.setState({
      from: void 0,
      to: void 0,
      fromRect: void 0,
      dragPos: void 0
    });
  }
  _renderLink(t) {
    const { fromRect: e, toRect: n, from: i, to: r = "", dragPos: o } = t;
    if (!e || !i || !o)
      return null;
    const a = n ? {
      left: n.left,
      top: n.top,
      right: n.left + n.width,
      bottom: n.top + n.height
    } : {
      left: o.left,
      top: o.top,
      right: o.left,
      bottom: o.top
    };
    return /* @__PURE__ */ f(
      Gl,
      {
        from: i,
        to: r,
        lineStyle: "dotted",
        color: "var(--color-primary-500)",
        fromRect: {
          left: e.left,
          top: e.top,
          right: e.left + e.width,
          bottom: e.top + e.height
        },
        toRect: a
      },
      "link"
    );
  }
  render(t, e) {
    const { from: n, fromRect: i, to: r, toRect: o } = e;
    let a, l;
    return n && i && (a = /* @__PURE__ */ f("div", { className: "kanban-link-editor-from not-moveable", "z-key": n, style: i, children: [
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ f("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ f("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ f("div", { className: x("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
function wu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getCol: n, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return s = s.reduce((d, h, g) => {
    if (h = R({ itemGap: o, itemCountPerRow: r }, i, h), n) {
      const m = n.call(this, h);
      m !== !1 && (h = m || h);
    }
    return h.deleted || (typeof h.order == "number" ? a = !0 : h.order = g, typeof h.name != "string" && (h.name = String(h.name)), e == null || e.call(this, h), h.parentName !== void 0 ? (h.parentName = String(h.parentName), l.push(h)) : (c.set(h.name, h), d.push(h))), d;
  }, []), l.forEach((d) => {
    const h = c.get(d.parentName);
    h && (h.subCols = Qe(h.subCols, [d], "name"));
  }), a && (s.sort(mn), [...c.values()].forEach((d) => {
    d.subCols && d.subCols.sort(mn);
  })), s;
}
function Cu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getLane: n, laneProps: i } = t;
  let r = !1;
  return s = s.reduce((o, a, l) => {
    if (i && (a = R({}, i, a)), n) {
      const c = n.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.order == "number" ? r = !0 : a.order = l, a.color === void 0 && (a.color = `hsl(${43 * ya(a.name) % 360}deg 40% 50%)`), typeof a.name != "string" && (a.name = String(a.name)), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && s.sort(mn), s;
}
function Eo(s, t, e, n, i) {
  if (!(s != null && s.length))
    return [];
  const { itemProps: r, getItem: o } = n;
  let a = !1;
  return s = s.reduce((l, c) => {
    r && (c = R({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c, laneInfo: t, colInfo: e })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && s.sort(mn), s;
}
function mn(s, t) {
  return s.order - t.order;
}
function Qe(s, t, e) {
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
function Yl(s, t) {
  return Array.isArray(s) ? s.map((e) => ({
    ...e,
    [t]: String(e[t])
  })) : Object.keys(s).reduce((e, n) => {
    const i = s[n];
    return Object.keys(i).forEach((r) => {
      e.push(...(i[r] || []).map((o) => ({
        ...o,
        lane: n,
        col: r,
        [t]: String(o[t])
      })));
    }), e;
  }, []);
}
function Io(s, t) {
  const { items: e, ...n } = s;
  return {
    items: Yl(e, t),
    ...n
  };
}
function Ao(s, t, e) {
  const n = Qe(s.lanes, t.lanes, "name"), i = Qe(s.cols, t.cols, "name"), r = Qe(s.links, t.links, e), o = Qe(s.items, Yl(t.items || [], e), e);
  return { lanes: n, cols: i, items: o, links: r };
}
let zn = class extends K {
  constructor() {
    super(...arguments), this._ref = z(), this._raf = 0, this._data = new es(this._getData.bind(this), () => {
      const { getCol: t, colProps: e, itemCountPerRow: n, itemGap: i, getLane: r, laneProps: o, itemProps: a, getItem: l, responsive: c } = this.props;
      return [
        this._kanbanData,
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        l,
        c
      ];
    }), this._kanbanData = new es(() => {
      const { itemKey: t, props: e } = this, { data: n } = e, { data: i, changes: r } = this.state, o = (i || Xr(n) ? i : Io(n, t)) || {};
      return r ? Ao(o, r, t) : o;
    }, () => {
      const { data: t, changes: e } = this.state;
      return [
        t,
        e,
        this.props.data
      ];
    }), this._onAddLink = async (t, e) => {
      const { onAddLink: n } = this.props, i = { from: t, to: e, [this.itemKey]: `${t}:${e}` };
      await (n == null ? void 0 : n.call(this, i)) !== !1 && this.updateLink(i);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    };
  }
  get data() {
    return this._data.cache;
  }
  get itemKey() {
    return this.props.itemKey || "id";
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this._initDraggable();
    const { responsive: t } = this.props, e = this._ref.current;
    if (e && t) {
      const n = new ResizeObserver(this.updateLayout.bind(this));
      u(typeof t != "boolean" ? t : e.closest(".kanban-list") || e.parentElement).each((r, o) => {
        n.observe(o);
      }), this._rob = n, this.state.containerWidth || this.updateLayout();
    }
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e, n;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy(), (n = this._rob) == null || n.disconnect();
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = Io(await xn(t, [this], { throws: !0 }), this.itemKey);
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  updateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      const t = this._ref.current;
      if (t) {
        const { responsive: e, laneNameWidth: n = 20 } = this.props, i = u(typeof e != "boolean" ? e : t.closest(".kanban-list") || t.parentElement), r = i[0];
        let o = i.width() - n - (r.offsetWidth - r.clientWidth);
        const a = t.closest(".kanban-group");
        a && (o -= a.clientWidth - u(a).width()), this.setState({ containerWidth: o });
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Xr(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this.data.colMap.get(String(t));
  }
  getLane(t) {
    return t = String(t), this.data.lanes.find((e) => e.name === t);
  }
  getItem(t) {
    return this.data.map.get(String(t));
  }
  update(t) {
    return console.log("> Kanban.update", t, this), this.changeState((e) => ({
      changes: Ao({ ...e.changes }, t, this.itemKey)
    }));
  }
  createSnap() {
    return {
      date: Date.now(),
      kanban: this,
      data: u.extend(!0, {}, this._data),
      restore() {
        this.kanban.changeState({ changes: this.data });
      }
    };
  }
  addItem(t, e, n) {
    return this.updateItem(t, e, n);
  }
  updateItem(t, e, n) {
    const i = Array.isArray(t) ? t : [t];
    return this.update({
      items: e || n ? i.map((r) => ({
        ...r,
        lane: e ?? r.lane,
        col: n ?? r.col
      })) : i
    });
  }
  deleteItem(t) {
    return this.updateItem(Array.isArray(t) ? t.map((e) => ({ [this.props.itemKey || "id"]: e, deleted: !0 })) : { [this.itemKey]: t, deleted: !0 });
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
  updateLink(t, e) {
    return this.update({
      links: (Array.isArray(t) ? t : [t]).map((n) => ({
        ...n,
        ...e,
        [this.itemKey]: `${n.from}:${n.to}`
      }))
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
  }
  _getElementInfo(t) {
    const e = u(t), n = e.closest(".kanban-item");
    if (n.length) {
      const o = this.getItem(n.attr("z-key"));
      if (o)
        return { type: "item", element: t, item: o, lane: o.lane, col: o.col };
    }
    const i = e.closest(".kanban-header-col,.kanban-lane-col");
    if (i.length)
      return { type: "col", element: t, col: i.attr("z-col"), lane: i.attr("z-lane") };
    const r = e.closest(".kanban-lane").attr("z-lane");
    if (r !== void 0)
      return { type: "lane", element: t, lane: r };
  }
  _getDropInfo(t, e, n) {
    const i = this._getElementInfo(e);
    if (!i)
      return;
    const r = this._getElementInfo(n);
    if (!r)
      return;
    let o;
    if (i.type === "item" && r.type === "col")
      o = "inside";
    else {
      const a = n.getBoundingClientRect();
      i.type === "col" ? o = t.clientX < a.left + a.width / 2 ? "before" : "after" : o = t.clientY < a.top + a.height / 2 ? "before" : "after";
    }
    return {
      side: o,
      event: t,
      drag: i,
      drop: r
    };
  }
  _getDropChanges(t) {
    const { drag: e, drop: n } = t, i = this.data, r = {}, { itemKey: o } = this;
    if (e.type === "item") {
      const a = e.item, l = i.items[n.lane][n.col], c = [...l], d = {
        [o]: a[o],
        order: a.order
      }, h = n.col === a.col, g = n.lane === a.lane;
      if (h && g && a[o] === n.item[o])
        return r;
      h || (d.col = n.col), g || (d.lane = n.lane);
      let m = !1;
      if (n.type === "col" && (!g || !h))
        c.push(d), m = !0;
      else if (n.type === "item") {
        const p = n.item, _ = n.col !== a.col || n.lane !== a.lane ? -1 : c.findIndex((y) => y[o] === a[o]);
        _ >= 0 && c.splice(_, 1);
        const b = c.findIndex((y) => y[o] === p[o]);
        c.splice(t.side === "before" ? b : b + 1, 0, d), m = !0;
      }
      if (m) {
        r.items = [];
        let p = -1;
        c.forEach((_, b) => {
          const y = Math.max(0, p + 1, _.order ?? b), v = l[b];
          p = y, (v !== _ || y !== v.order) && (_ = {
            ..._,
            order: y
          }), _ !== v && r.items.push(_);
        });
      }
    }
    return r;
  }
  _initDraggable() {
    const { draggable: t } = this.props, e = this._ref.current;
    if (!t || !e)
      return;
    const { dragTypes: n = "item", onDragStart: i, onDrop: r, canDrop: o, dropRules: a } = this.props, l = typeof n == "string" ? n.split(",") : n, c = {
      item: ".kanban-item",
      lane: ".kanban-lane-name",
      col: ".kanban-header-col"
    }, d = typeof t == "object" ? t : {}, h = (m, p) => {
      u(m).attr({
        "z-drag-type": p ? p.drag.type : null,
        "z-drop-type": p ? p.drop.type : null,
        "z-drop-side": p ? p.side : null
      });
    }, g = {
      ...d,
      selector: d.selector || l.map((m) => c[m] || "").join(""),
      target: d.target || ((m) => {
        const p = this._getElementInfo(m);
        if (!p)
          return;
        const _ = {
          lane: ".kanban-lane",
          col: ".kanban-header-col",
          item: ".kanban-item,.kanban-items"
        }[p.type];
        return u(e).find(_);
      }),
      canDrop: d.canDrop || o || a ? (m, p, _) => {
        const b = this._getElementInfo(p);
        if (!b)
          return !1;
        const y = this._getElementInfo(_);
        if (!y)
          return !1;
        if (b.type === "item" && a) {
          const v = b.col, w = y.col, k = b.lane, C = y.lane, $ = a[`${k}:${v}`] ?? a[v];
          return typeof $ == "boolean" ? $ : !$ || $.includes(w) || $.includes(`${C}:${w}`) || $.includes(`${C}:`);
        }
        if (o)
          return o.call(this, b, y);
      } : void 0,
      onDragStart: (m, p) => {
        var b;
        const _ = this._getElementInfo(p);
        return _ ? i ? i.call(this, { event: m, drag: _ }) : (b = d.onDragStart) == null ? void 0 : b.call(this, m, p) : !1;
      },
      onDragOver: (m, p, _) => {
        const b = this._getDropInfo(m, p, _);
        b && h(_, b);
      },
      onDragLeave: (m, p, _) => {
        h(_);
      },
      onDrop: (m, p, _) => {
        var y;
        h(_);
        const b = this._getDropInfo(m, p, _);
        if (!b)
          return !1;
        if (r) {
          const v = this._getDropChanges(b);
          if (Object.keys(v).length) {
            const w = this.createSnap();
            r.call(this, v, b, w.restore) !== !1 && this.update(v);
          }
        }
        return (y = d.onDrop) == null ? void 0 : y.call(this, m, p, _);
      }
    };
    this._draggable = new An(e, g);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, n = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = n, o = {}, a = /* @__PURE__ */ new Map(), l = wu.call(this, n.cols, e, (m) => {
      m.parentName !== void 0 && (i = !0), a.set(m.name, m);
    }), c = Cu.call(this, n.lanes, e, (m) => {
      o[m.name] = l.reduce((p, _) => (_.subCols ? _.subCols.forEach((b) => {
        p[b.name] = [];
      }) : p[_.name] = [], p), {});
    }), d = /* @__PURE__ */ new Set(), h = r.reduce((m, p) => {
      if (p.deleted)
        return d.add(p[t]), m;
      m.set(p[t], p);
      const _ = o[p.lane];
      if (_) {
        const b = _[p.col];
        b && b.push(p);
      }
      return m;
    }, /* @__PURE__ */ new Map());
    c.forEach((m) => {
      const p = o[m.name];
      p && l.forEach((_) => {
        var b;
        p[_.name] = Eo.call(this, p[_.name], m, _, e), (b = _.subCols) == null || b.forEach((y) => {
          p[y.name] = Eo.call(this, p[y.name], m, y, e);
        });
      });
    });
    let { links: g = [] } = n;
    return g = g.reduce((m, p) => (!p.deleted && h.has(p.from) && h.has(p.to) && !d.has(p.from) && !d.has(p.to) && (p[t] === void 0 && (p[t] = `${p.from}:${p.to}`), m.push(p)), m), []), { cols: l, lanes: c, items: o, map: h, colMap: a, links: g, hasSubCols: i };
  }
  _layoutCols(t, e) {
    const { containerWidth: n = 0 } = this.state, { colsGap: i = 8, minColWidth: r = 150, maxColWidth: o = 600, colWidth: a = 200 } = e, l = [];
    let c = 0;
    const d = (h) => {
      const { minWidth: g = r, maxWidth: m = o } = h;
      let { width: p = a } = h;
      typeof p == "function" && (p = p.call(this, h));
      const _ = p === "auto";
      if (_)
        p = g;
      else {
        const [b, y] = Tn(p);
        y === "%" ? p = n * b / 100 : p = b;
      }
      return p = Math.min(m, Math.max(g, p)), c += p + (c ? i : 0), h = { ...h, width: p, maxWidth: m, minWidth: g }, _ && l.push(h), h;
    };
    if (t = t.map((h) => h.subCols ? {
      ...h,
      subCols: h.subCols.map(d)
    } : d(h)), l.length && c < n) {
      const h = Math.floor((n - c) / l.length);
      l.forEach((g) => {
        g.width = Math.min(g.maxWidth, Math.max(g.minWidth, g.width + h));
      });
    }
    return t;
  }
  _layoutLanes(t, e) {
    const { laneHeight: n, maxLaneHeight: i, minLaneHeight: r } = e;
    return !n && !i && !r ? t : t.map((o) => ({
      height: typeof n == "function" ? n.call(this, o) : n,
      maxHeight: i,
      minHeight: r,
      ...o
    }));
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this.data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    const { laneNameWidth: e, colsGap: n, lanesGap: i } = t;
    return R(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": Jt(n),
        "--kanban-lanes-gap": Jt(i)
      }
    });
  }
  _getChildren(t) {
    const e = this._data.value, { cols: n, lanes: i, items: r, links: o = [] } = e, { editLinks: a } = t, l = this._layoutCols(n, t), c = this._layoutLanes(i, t);
    return console.log("> Kanban.render", { ...e, layoutCols: l, layoutLanes: c, props: t, kanban: this }), [
      /* @__PURE__ */ f(hu, { cols: l }, "header"),
      /* @__PURE__ */ f(
        uu,
        {
          itemRender: t.itemRender,
          cols: l,
          lanes: c,
          items: r
        },
        "body"
      ),
      o.length ? /* @__PURE__ */ f(bu, { links: o, onDeleteLink: a ? this._onDeleteLink : void 0 }, "links") : null,
      a ? /* @__PURE__ */ f(vu, { onAddLink: this._onAddLink }, "linkEditor") : null,
      t.children
    ];
  }
};
zn.defaultProps = {
  draggable: !0,
  sticky: !0,
  responsive: !0,
  itemKey: "id",
  colWidth: 200,
  colsGap: 8
};
class ku extends zn {
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
    return /* @__PURE__ */ f("div", { className: x("kanban-group", i ? "is-collapsed" : "is-expanded", e ? "has-heading" : ""), children: [
      e && /* @__PURE__ */ f(nn, { ...r }, "heading"),
      i ? null : super.render(t)
    ] });
  }
}
let Xl = class extends K {
  constructor(t) {
    super(t), this.state = {}, this._ref = z(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new Cs(this._ref.current, u.extend({ selector: "self", move: "scroll", onMoveStart: (n, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return n.clientY < r && n.clientY > r - 20 || n.clientX < o && n.clientX > o - 20 ? !1 : !u(n.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
    } }, typeof t == "object" ? t : null))), e) {
      const n = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? u(e) : u(this._ref.current).parent()).each((r, o) => {
        n.observe(o);
      }), this._rob = n;
    }
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(String(t))) == null ? void 0 : e.current;
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
    const { items: e = [], kanbanProps: n } = t;
    return [
      ...e.map((i, r) => {
        n && (i = typeof n == "function" ? n.call(this, i, r) : u.extend({}, n, i));
        const o = String(i.key ?? r);
        let a = this._kanbanRefs.get(o);
        a || (a = z(), this._kanbanRefs.set(o, a));
        const l = i.heading !== void 0 || i.type === "group" ? ku : zn;
        return /* @__PURE__ */ f(l, { ref: a, sticky: t.sticky, ...i, "z-key": o }, o);
      }),
      t.children
    ];
  }
};
Xl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class Fr extends H {
}
Fr.NAME = "Kanban";
Fr.replace = !0;
Fr.Component = zn;
class Br extends H {
  updateKanban(t, e) {
    if (t = Array.isArray(t) ? t : [t], e)
      return this.render({ items: t });
    const n = this.options.items || [], i = new Map(n.map((o, a) => [o.key, a])), r = [...n];
    return t.forEach((o) => {
      if (i.has(o.key)) {
        const a = i.get(o.key);
        r[a] = { ...n[a], ...o };
      } else
        r.push(o);
    }), this.render({ items: r.filter((o) => !o.deleted) });
  }
}
Br.NAME = "KanbanList";
Br.replace = !0;
Br.Component = Xl;
var Jl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Do = (s, t, e) => (Jl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), xu = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Po = (s, t, e, n) => (Jl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ce;
const $u = "nav", Ys = '[data-toggle="tab"]', Su = "active";
class Zl extends at {
  constructor() {
    super(...arguments), xu(this, Ce, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(Ys);
    let i = t ? u(t).closest(Ys) : n.filter(`.${Su}`);
    if (!i.length && (i = e.find(Ys).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Do(this, Ce) && clearTimeout(Do(this, Ce)), Po(this, Ce, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Po(this, Ce, 0);
    }, 10)));
  }
}
Ce = /* @__PURE__ */ new WeakMap();
Zl.NAME = "Tabs";
u(document).on("click.tabs.zui", Ys, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${$u}`);
  e.length && Zl.ensure(e).active(t);
});
export {
  u as $,
  ta as Ajax,
  Ma as Avatar,
  Ea as BtnGroup,
  Ar as Card,
  yl as CardList,
  Ua as ColorPicker,
  lr as CommonList,
  at as Component,
  H as ComponentFromReact,
  es as Computed,
  Dr as ContextMenu,
  F as CustomContent,
  ga as CustomRender,
  Ns as DTable,
  vl as Dashboard,
  Qa as DatePicker,
  el as DatetimePicker,
  An as Draggable,
  xt as Dropdown,
  K as HElement,
  ue as HtmlContent,
  q as Icon,
  Fr as Kanban,
  Br as KanbanList,
  va as List,
  hr as Menu,
  Hu as Messager,
  ud as Modal,
  ls as ModalBase,
  Pi as ModalTrigger,
  Cs as Moveable,
  rl as Nav,
  wa as NestedList,
  ol as Pager,
  al as Pick,
  hl as Picker,
  _t as Popover,
  Tr as PopoverPanel,
  dl as Popovers,
  _a as Portal,
  Ta as ProgressCircle,
  W as ReactComponent,
  ul as SearchBox,
  dr as SearchMenu,
  ml as SearchTree,
  fl as Sidebar,
  Fu as Sortable,
  as as TIME_DAY,
  Zl as Tabs,
  Za as TimePicker,
  pl as Toolbar,
  Lt as Tooltip,
  Er as Tree,
  Ir as Upload,
  gl as UploadImgs,
  td as addDate,
  u as cash,
  x as classes,
  Ue as componentsMap,
  Uc as convertBytes,
  nh as create,
  Y as createDate,
  Yc as createFormData,
  ch as createPortal,
  z as createRef,
  zc as deepGet,
  Bc as deepGetPath,
  Nu as defineFn,
  Qs as delay,
  ih as disableScroll,
  Mu as dom,
  xn as fetchData,
  Vc as formatBytes,
  st as formatDate,
  qu as formatDateSpan,
  tt as formatString,
  ea as getClassList,
  sn as getComponent,
  rh as getReactComponent,
  ci as getZData,
  $t as h,
  Q as i18n,
  li as isDiff,
  Xr as isFetchSetting,
  Ss as isSameDay,
  ja as isSameMonth,
  Vu as isSameWeek,
  vi as isSameYear,
  Uu as isToday,
  Ku as isTomorrow,
  gt as isValidElement,
  ju as isYesterday,
  R as mergeProps,
  Ft as nextGid,
  Tn as parseSize,
  ma as reactComponents,
  _e as registerReactComponent,
  fa as removeUndefinedProps,
  is as render,
  ui as renderCustomContent,
  ah as renderCustomResult,
  Jr as setZData,
  Jc as shareData,
  Wt as store,
  sa as storeData,
  na as takeData,
  Jt as toCssSize
};
//# sourceMappingURL=zui.js.map
