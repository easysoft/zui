var On = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var z = (n, t, e) => (On(n, t, "read from private field"), e ? e.call(n) : t.get(n)), q = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, rt = (n, t, e, s) => (On(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var Hn = (n, t, e) => (On(n, t, "access private method"), e);
const Ht = document, Gs = window, Po = Ht.documentElement, me = Ht.createElement.bind(Ht), Lo = me("div"), Fn = me("table"), Ql = me("tbody"), Br = me("tr"), { isArray: gn, prototype: Ro } = Array, { concat: tc, filter: Fi, indexOf: Wo, map: Oo, push: ec, slice: Ho, some: Bi, splice: sc } = Ro, nc = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ic = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, rc = /<.+>/, oc = /^\w+$/;
function zi(n, t) {
  const e = ac(t);
  return !n || !e && !ue(t) && !X(t) ? [] : !e && ic.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && oc.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class _n {
  constructor(t, e) {
    if (!t)
      return;
    if (si(t))
      return t;
    let s = t;
    if (nt(t)) {
      const i = e || Ht;
      if (s = nc.test(t) && ue(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : rc.test(t) ? zo(t) : si(i) ? i.find(t) : nt(i) ? u(i).find(t) : zi(t, i), !s)
        return;
    } else if (ge(t))
      return this.ready(t);
    (s.nodeType || s === Gs) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new _n(t, e);
  }
}
const S = _n.prototype, u = S.init;
u.fn = u.prototype = S;
S.length = 0;
S.splice = sc;
typeof Symbol == "function" && (S[Symbol.iterator] = Ro[Symbol.iterator]);
function si(n) {
  return n instanceof _n;
}
function Me(n) {
  return !!n && n === n.window;
}
function ue(n) {
  return !!n && n.nodeType === 9;
}
function ac(n) {
  return !!n && n.nodeType === 11;
}
function X(n) {
  return !!n && n.nodeType === 1;
}
function lc(n) {
  return !!n && n.nodeType === 3;
}
function cc(n) {
  return typeof n == "boolean";
}
function ge(n) {
  return typeof n == "function";
}
function nt(n) {
  return typeof n == "string";
}
function mt(n) {
  return n === void 0;
}
function ts(n) {
  return n === null;
}
function Fo(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Ui(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
u.isWindow = Me;
u.isFunction = ge;
u.isArray = gn;
u.isNumeric = Fo;
u.isPlainObject = Ui;
function Z(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Ui(n)) {
    const s = Object.keys(n);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (t.call(n[o], o, n[o]) === !1)
        return n;
    }
  } else
    for (let s = 0, i = n.length; s < i; s++)
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  return n;
}
u.each = Z;
S.each = function(n) {
  return Z(this, n);
};
S.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function qs(...n) {
  const t = cc(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return qs(t, u, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (gn(r[o]) || Ui(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), qs(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = qs;
S.extend = function(n) {
  return qs(S, n);
};
const hc = /\S+/g;
function yn(n) {
  return nt(n) ? n.match(hc) || [] : [];
}
S.toggleClass = function(n, t) {
  const e = yn(n), s = !mt(t);
  return this.each((i, r) => {
    X(r) && Z(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
S.addClass = function(n) {
  return this.toggleClass(n, !0);
};
S.removeAttr = function(n) {
  const t = yn(n);
  return this.each((e, s) => {
    X(s) && Z(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function dc(n, t) {
  if (n) {
    if (nt(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !X(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return ts(e) ? void 0 : e;
      }
      return mt(t) ? this : ts(t) ? this.removeAttr(n) : this.each((e, s) => {
        X(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
S.attr = dc;
S.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
S.hasClass = function(n) {
  return !!n && Bi.call(this, (t) => X(t) && t.classList.contains(n));
};
S.get = function(n) {
  return mt(n) ? Ho.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
S.eq = function(n) {
  return u(this.get(n));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function uc(n) {
  return mt(n) ? this.get().map((t) => X(t) || lc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    X(e) && (e.textContent = n);
  });
}
S.text = uc;
function Ft(n, t, e) {
  if (!X(n))
    return;
  const s = Gs.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function xt(n, t) {
  return parseInt(Ft(n, t), 10) || 0;
}
function zr(n, t) {
  return xt(n, `border${t ? "Left" : "Top"}Width`) + xt(n, `padding${t ? "Left" : "Top"}`) + xt(n, `padding${t ? "Right" : "Bottom"}`) + xt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const Bn = {};
function fc(n) {
  if (Bn[n])
    return Bn[n];
  const t = me(n);
  Ht.body.insertBefore(t, null);
  const e = Ft(t, "display");
  return Ht.body.removeChild(t), Bn[n] = e !== "none" ? e : "block";
}
function Ur(n) {
  return Ft(n, "display") === "none";
}
function Bo(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function bn(n) {
  return nt(n) ? (t, e) => Bo(e, n) : ge(n) ? n : si(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
S.filter = function(n) {
  const t = bn(n);
  return u(Fi.call(this, (e, s) => t.call(e, s, e)));
};
function ie(n, t) {
  return t ? n.filter(t) : n;
}
S.detach = function(n) {
  return ie(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const pc = /^\s*<(\w+)[^>]*>/, mc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Vr = {
  "*": Lo,
  tr: Ql,
  td: Br,
  th: Br,
  thead: Fn,
  tbody: Fn,
  tfoot: Fn
};
function zo(n) {
  if (!nt(n))
    return [];
  if (mc.test(n))
    return [me(RegExp.$1)];
  const t = pc.test(n) && RegExp.$1, e = Vr[t] || Vr["*"];
  return e.innerHTML = n, u(e.childNodes).detach().get();
}
u.parseHTML = zo;
S.has = function(n) {
  const t = nt(n) ? (e, s) => zi(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
S.not = function(n) {
  const t = bn(n);
  return this.filter((e, s) => (!nt(n) || X(s)) && !t.call(s, e, s));
};
function Vt(n, t, e, s) {
  const i = [], r = ge(t), o = s && bn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && ec.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Uo(n) {
  return n.multiple && n.options ? Vt(Fi.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function gc(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || Zo.test(e.type)) {
      const i = gn(n) ? Oo.call(n, String) : ts(n) ? [] : [String(n)];
      s ? Z(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = mt(n) || ts(n) ? "" : n;
  }) : this[0] && Uo(this[0]);
}
S.val = gc;
S.is = function(n) {
  const t = bn(n);
  return Bi.call(this, (e, s) => t.call(e, s, e));
};
u.guid = 1;
function Nt(n) {
  return n.length > 1 ? Fi.call(n, (t, e, s) => Wo.call(s, t) === e) : n;
}
u.unique = Nt;
S.add = function(n, t) {
  return u(Nt(this.get().concat(u(n, t).get())));
};
S.children = function(n) {
  return ie(u(Nt(Vt(this, (t) => t.children))), n);
};
S.parent = function(n) {
  return ie(u(Nt(Vt(this, "parentNode"))), n);
};
S.index = function(n) {
  const t = n ? u(n)[0] : this[0], e = n ? this : u(t).parent().children();
  return Wo.call(e, t);
};
S.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
S.siblings = function(n) {
  return ie(u(Nt(Vt(this, (t) => u(t).parent().children().not(t)))), n);
};
S.find = function(n) {
  return u(Nt(Vt(this, (t) => zi(n, t))));
};
const _c = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, yc = /^$|^module$|\/(java|ecma)script/i, bc = ["type", "src", "nonce", "noModule"];
function vc(n, t) {
  const e = u(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (yc.test(i.type) && Po.contains(i)) {
      const r = me("script");
      r.text = i.textContent.replace(_c, ""), Z(bc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function wc(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && vc(t, n.ownerDocument);
}
function re(n, t, e, s, i, r, o, a) {
  return Z(n, (l, c) => {
    Z(u(c), (d, h) => {
      Z(u(t), (m, f) => {
        const g = e ? h : f, _ = e ? f : h, y = e ? d : m;
        wc(g, y ? _.cloneNode(!0) : _, s, i, !y);
      }, a);
    }, o);
  }, r), t;
}
S.after = function() {
  return re(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return re(arguments, this, !1, !1, !0);
};
function Cc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (mt(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    X(s) && (t ? u(s).empty().append(n) : s.innerHTML = n);
  });
}
S.html = Cc;
S.appendTo = function(n) {
  return re(arguments, this, !0, !1, !0);
};
S.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = u(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
S.before = function() {
  return re(arguments, this, !1, !0);
};
S.wrapAll = function(n) {
  let t = u(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
S.wrap = function(n) {
  return this.each((t, e) => {
    const s = u(n)[0];
    u(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
S.insertAfter = function(n) {
  return re(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(n) {
  return re(arguments, this, !0, !0);
};
S.prepend = function() {
  return re(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(n) {
  return re(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return u(Nt(Vt(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
S.next = function(n, t, e) {
  return ie(u(Nt(Vt(this, "nextElementSibling", t, e))), n);
};
S.nextAll = function(n) {
  return this.next(n, !0);
};
S.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
S.parents = function(n, t) {
  return ie(u(Nt(Vt(this, "parentElement", !0, t))), n);
};
S.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
S.prev = function(n, t, e) {
  return ie(u(Nt(Vt(this, "previousElementSibling", t, e))), n);
};
S.prevAll = function(n) {
  return this.prev(n, !0);
};
S.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
S.map = function(n) {
  return u(tc.apply([], Oo.call(this, (t, e) => n.call(t, e, t))));
};
S.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && Ft(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Po;
  });
};
S.slice = function(n, t) {
  return u(Ho.call(this, n, t));
};
const kc = /-([a-z])/g;
function Vi(n) {
  return n.replace(kc, (t, e) => e.toUpperCase());
}
S.ready = function(n) {
  const t = () => setTimeout(n, 0, u);
  return Ht.readyState !== "loading" ? t() : Ht.addEventListener("DOMContentLoaded", t), this;
};
S.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
S.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + Gs.pageYOffset,
    left: t.left + Gs.pageXOffset
  };
};
S.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = Ft(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ft(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && X(i)) {
      const r = u(i).offset();
      e.top -= r.top + xt(i, "borderTopWidth"), e.left -= r.left + xt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - xt(n, "marginTop"),
    left: e.left - xt(n, "marginLeft")
  };
};
const Vo = {
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
S.prop = function(n, t) {
  if (n) {
    if (nt(n))
      return n = Vo[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
S.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Vo[n] || n];
  });
};
const xc = /^--/;
function ji(n) {
  return xc.test(n);
}
const zn = {}, { style: Sc } = Lo, $c = ["webkit", "moz", "ms"];
function Tc(n, t = ji(n)) {
  if (t)
    return n;
  if (!zn[n]) {
    const e = Vi(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${$c.join(`${s} `)}${s}`.split(" ");
    Z(i, (r, o) => {
      if (o in Sc)
        return zn[n] = o, !1;
    });
  }
  return zn[n];
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
function jo(n, t, e = ji(n)) {
  return !e && !Nc[n] && Fo(t) ? `${t}px` : t;
}
function Mc(n, t) {
  if (nt(n)) {
    const e = ji(n);
    return n = Tc(n, e), arguments.length < 2 ? this[0] && Ft(this[0], n, e) : n ? (t = jo(n, t, e), this.each((s, i) => {
      X(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
S.css = Mc;
function Ko(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const Ec = /^\s+|\s+$/;
function jr(n, t) {
  const e = n.dataset[t] || n.dataset[Vi(t)];
  return Ec.test(e) ? e : Ko(JSON.parse, e);
}
function Ic(n, t, e) {
  e = Ko(JSON.stringify, e), n.dataset[Vi(t)] = e;
}
function Ac(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = jr(this[0], s);
    return e;
  }
  if (nt(n))
    return arguments.length < 2 ? this[0] && jr(this[0], n) : mt(t) ? this : this.each((e, s) => {
      Ic(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
S.data = Ac;
function Go(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Z([!0, !1], (n, t) => {
  Z(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    S[i] = function(r) {
      if (this[0])
        return Me(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ue(this[0]) ? Go(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? xt(this[0], `margin${e ? "Top" : "Left"}`) + xt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Z(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  S[e] = function(s) {
    if (!this[0])
      return mt(s) ? void 0 : this;
    if (!arguments.length)
      return Me(this[0]) ? this[0].document.documentElement[`client${t}`] : ue(this[0]) ? Go(this[0], t) : this[0].getBoundingClientRect()[e] - zr(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!X(o))
        return;
      const a = Ft(o, "boxSizing");
      o.style[e] = jo(e, i + (a === "border-box" ? zr(o, !n) : 0));
    });
  };
});
const Kr = "___cd";
S.toggle = function(n) {
  return this.each((t, e) => {
    if (!X(e))
      return;
    const s = Ur(e);
    (mt(n) ? s : n) ? (e.style.display = e[Kr] || "", Ur(e) && (e.style.display = fc(e.tagName))) : s || (e[Kr] = Ft(e, "display"), e.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const Gr = "___ce", Ki = ".", Gi = { focus: "focusin", blur: "focusout" }, qo = { mouseenter: "mouseover", mouseleave: "mouseout" }, Dc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function qi(n) {
  return qo[n] || Gi[n] || n;
}
function Yi(n) {
  const t = n.split(Ki);
  return [t[0], t.slice(1).sort()];
}
S.trigger = function(n, t) {
  if (nt(n)) {
    const [s, i] = Yi(n), r = qi(s);
    if (!r)
      return this;
    const o = Dc.test(r) ? "MouseEvents" : "HTMLEvents";
    n = Ht.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(Ki), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in Gi;
  return this.each((s, i) => {
    e && ge(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Yo(n) {
  return n[Gr] = n[Gr] || {};
}
function Pc(n, t, e, s, i) {
  const r = Yo(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function Xo(n, t) {
  return !t || !Bi.call(t, (e) => n.indexOf(e) < 0);
}
function Ys(n, t, e, s, i) {
  const r = Yo(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Xo(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Ys(n, t, e, s, i);
}
S.off = function(n, t, e) {
  if (mt(n))
    this.each((s, i) => {
      !X(i) && !ue(i) && !Me(i) || Ys(i);
    });
  else if (nt(n))
    ge(t) && (e = t, t = ""), Z(yn(n), (s, i) => {
      const [r, o] = Yi(i), a = qi(r);
      this.each((l, c) => {
        !X(c) && !ue(c) && !Me(c) || Ys(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
S.remove = function(n) {
  return ie(this, n).detach().off(), this;
};
S.replaceWith = function(n) {
  return this.before(n).remove();
};
S.replaceAll = function(n) {
  return u(n).replaceWith(this), this;
};
function Lc(n, t, e, s, i) {
  if (!nt(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return nt(t) || (mt(t) || ts(t) ? t = "" : mt(e) ? (e = t, t = "") : (s = e, e = t, t = "")), ge(s) || (s = e, e = void 0), s ? (Z(yn(n), (r, o) => {
    const [a, l] = Yi(o), c = qi(a), d = a in qo, h = a in Gi;
    c && this.each((m, f) => {
      if (!X(f) && !ue(f) && !Me(f))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Xo(l, _.namespace.split(Ki)) || !t && (h && (_.target !== f || _.___ot === c) || d && _.relatedTarget && f.contains(_.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let v = _.target;
          for (; !Bo(v, t); )
            if (v === f || (v = v.parentNode, !v))
              return;
          y = v;
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
        const b = s.call(y, _, _.___td);
        i && Ys(f, c, l, t, g), b === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = s.guid = s.guid || u.guid++, Pc(f, c, l, t, g);
    });
  }), this) : this;
}
S.on = Lc;
function Rc(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
S.one = Rc;
const Wc = /\r?\n/g;
function Oc(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(Wc, `\r
`))}`;
}
const Hc = /file|reset|submit|button|image/i, Zo = /radio|checkbox/i;
S.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    Z(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Hc.test(i.type) || Zo.test(i.type) && !i.checked)
        return;
      const r = Uo(i);
      if (!mt(r)) {
        const o = gn(r) ? r : [r];
        Z(o, (a, l) => {
          n += Oc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = u;
function Fc(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let s = n;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Bc(n, t, e) {
  try {
    const s = Fc(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function Q(n, ...t) {
  if (t.length === 0)
    return n;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const e = t[0];
    return Object.keys(e).forEach((s) => {
      const i = e[s] ?? "";
      n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), n;
  }
  for (let e = 0; e < t.length; e++) {
    const s = t[e] ?? "";
    n = n.replace(new RegExp(`\\{${e}\\}`, "g"), `${s}`);
  }
  return n;
}
var Xi = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Xi || {});
function zc(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / Xi[e]).toFixed(t) + e);
}
const Uc = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Xi[s];
};
let Zi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Yt;
function Vc() {
  return Zi;
}
function jc(n) {
  Zi = n.toLowerCase();
}
function Jo(n, t) {
  Yt || (Yt = {}), typeof n == "string" && (n = { [n]: t ?? {} }), u.extend(!0, Yt, n);
}
function J(n, t, e, s, i, r) {
  Array.isArray(n) ? Yt && n.unshift(Yt) : n = Yt ? [Yt, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || Zi;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === Yt ? `${r}.${t}` : t;
    if (a = Bc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? Q(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Kc(n, t, e, s) {
  return J(void 0, n, t, e, s);
}
J.addLang = Jo;
J.getLang = Kc;
J.getCode = Vc;
J.setCode = jc;
Jo({
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
function qr(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function Ve(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => Ve(n, t, s)) : n.append(t, e instanceof Blob ? e : String(e)));
}
function Gc(n, t) {
  if (n) {
    const e = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [s, i] of Object.entries(e))
      if (i.split(",").map((r) => r.trim()).includes(n))
        return s;
  }
  return "text";
}
function qc(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    Ve(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    Ve(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    Ve(e, i, s);
  }) : u.isPlainObject(n) && Object.entries(n).forEach(([s, i]) => {
    Ve(e, s, i);
  })), e;
}
class Qo {
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
    return this.completed ? e && this.error ? e(this.error) : t(this.data) : (this.success((s) => t(s)), e && this.fail(e)), this;
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
      data: s,
      processData: i = !0,
      contentType: r,
      crossDomain: o,
      accepts: a,
      dataType: l,
      timeout: c,
      dataFilter: d,
      beforeSend: h,
      success: m,
      error: f,
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let y = s;
    y && (i && (y = qc(y)), _.body = y), o && (_.mode = "cors");
    const b = _.headers || {};
    qr(b, "X-Requested-With", "XMLHttpRequest"), r && qr(b, "Content-Type", r), _.headers = b, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), f && this.fail(f), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((s) => {
      s.call(this, ...e);
    });
  }
  async send() {
    var c;
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: s, dataFilter: i, throws: r } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let o, a, l;
    try {
      o = await fetch(this.url, this.request), this.response = o;
      const { statusText: d } = o;
      if (o.ok) {
        const h = (c = o.headers.get("Content-Disposition")) == null ? void 0 : c.startsWith("attachment"), m = h ? "blob" : e || Gc(o.headers.get("Content-Type"), s);
        h || m === "blob" || m === "file" ? l = await o.blob() : m === "json" ? l = await o.json() : l = await o.text(), this.data = l;
        const f = (i == null ? void 0 : i(l, m)) ?? l;
        this._emit("success", f, d, o);
      } else
        throw new Error(d);
    } catch (d) {
      a = d;
      let h = !1;
      a.name === "AbortError" && (this._abortError ? a = this._abortError : h = !0), this.error = a, h || this._emit("error", a, o == null ? void 0 : o.statusText, a.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", o, o == null ? void 0 : o.statusText), a && r)
      throw a;
    return [l, a, o];
  }
}
u.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : u.extend(t, n);
  const e = new Qo(t);
  return e.send(), e;
};
u.getJSON = (n, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: n,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (n, t, e, s, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, s = void 0) : s = e, u.ajax({
    method: i,
    url: n,
    data: o,
    success: r,
    dataType: s
  });
};
u.post = (n, t, e, s) => u.get(n, t, e, s, "POST");
u.fn.load = function(n, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [s, i] = n.split(" ");
  return u.get(s, t, (r, o, a) => {
    i && (r = u(r).find(i).html()), u(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function vn(n, t = [], e) {
  const s = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    s.url = n;
  else if (typeof n == "object")
    u.extend(s, n);
  else if (typeof n == "function") {
    const o = n(...t);
    return o instanceof Promise ? await o : o;
  }
  e && u.extend(s, typeof e == "function" ? e(s) : e);
  const i = new Qo(s), [r] = await i.send();
  return r;
}
function Yr(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
u.fetch = vn;
function Bt() {
  return u.guid++;
}
function ni(n, t) {
  if (n === t)
    return !1;
  if (n && t && typeof n == "object" && typeof t == "object") {
    const e = Array.isArray(n), s = Array.isArray(t);
    if (e !== s)
      return !0;
    if (e && s) {
      if (n.length !== t.length)
        return !0;
      for (let o = 0; o < n.length; o++)
        if (ni(n[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(n), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (ni(n[o], t[o]))
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
    return (!e || t.some((s, i) => ni(s instanceof es ? s.value : s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof es ? s.cache : s)), this._value;
  }
}
function ta(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ta(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...n) => ta(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
u.classes = x;
u.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = u(s);
    n === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(n, ...t));
  });
};
const je = /* @__PURE__ */ new WeakMap();
function ea(n, t, e) {
  const s = je.has(n), i = s ? je.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, u(n).dataset(), i), je.set(n, i)) : je.delete(n);
}
function sa(n, t, e) {
  let s = je.get(n) || {};
  return !e && n instanceof Element && (s = Object.assign({}, u(n).dataset(), s)), t === void 0 ? s : s[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...n) {
  if (!this.length)
    return;
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? sa(this[0], t) : this.each((s, i) => ea(i, t, e));
};
u.fn.removeData = function(n = null) {
  return this.each((t, e) => ea(e, n));
};
function ii(n, t = "z-") {
  const e = u(n)[0];
  if (e)
    return Array.from(e.attributes).reduce((s, i) => {
      let { name: r, value: o } = i;
      if (r.startsWith(t)) {
        r = r.slice(t.length).replace(/-([a-z])/g, (a) => a[1].toUpperCase());
        try {
          o.startsWith("RAWJS<") && o.endsWith(">RAWJS") ? o = new Function(`return ${o.substring(6, o.length - 6)}`)() : o = JSON.parse(o);
        } catch {
        }
        s[r] = o;
      }
      return s;
    }, {});
}
function Xr(n, t, e = "z-") {
  const s = u(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function Yc(...n) {
  var e;
  const t = n.length;
  if (!t)
    return ii(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = ii(this)) == null ? void 0 : e[s] : (u.isPlainObject(s) && Xr(this, s), this);
  }
  return Xr(this, { [n[0]]: n[1] }), this;
}
u.fn.z = Yc;
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
};
const Xs = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Xc = {};
u.share = Xc;
var wn, F, na, _t, le, Zr, ia, ri, ss = {}, ra = [], Zc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Cn = Array.isArray;
function Jt(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function oa(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function $t(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? wn.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return Ws(n, o, s, i, null);
}
function Ws(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++na, __i: -1, __u: 0 };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function B() {
  return { current: null };
}
function De(n) {
  return n.children;
}
function O(n, t) {
  this.props = n, this.context = t;
}
function Ee(n, t) {
  if (t == null)
    return n.__ ? Ee(n.__, n.__i + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Ee(n) : null;
}
function aa(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return aa(n);
  }
}
function Jr(n) {
  (!n.__d && (n.__d = !0) && le.push(n) && !Zs.__r++ || Zr !== F.debounceRendering) && ((Zr = F.debounceRendering) || ia)(Zs);
}
function Zs() {
  var n, t, e, s, i, r, o, a, l;
  for (le.sort(ri); n = le.shift(); )
    n.__d && (t = le.length, s = void 0, r = (i = (e = n).__v).__e, a = [], l = [], (o = e.__P) && ((s = Jt({}, i)).__v = i.__v + 1, F.vnode && F.vnode(s), Ji(o, s, i, e.__n, o.ownerSVGElement !== void 0, 32 & i.__u ? [r] : null, a, r ?? Ee(i), !!(32 & i.__u), l), s.__.__k[s.__i] = s, ha(a, s, l), s.__e != r && aa(s)), le.length > t && le.sort(ri));
  Zs.__r = 0;
}
function la(n, t, e, s, i, r, o, a, l, c, d) {
  var h, m, f, g, _, y = s && s.__k || ra, b = t.length;
  for (e.__d = l, Jc(e, t, y), l = e.__d, h = 0; h < b; h++)
    (f = e.__k[h]) != null && typeof f != "boolean" && typeof f != "function" && (m = f.__i === -1 ? ss : y[f.__i] || ss, f.__i = h, Ji(n, f, m, i, r, o, a, l, c, d), g = f.__e, f.ref && m.ref != f.ref && (m.ref && Qi(m.ref, null, f), d.push(f.ref, f.__c || g, f)), _ == null && g != null && (_ = g), 65536 & f.__u || m.__k === f.__k ? l = ca(f, l, n) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : g && (l = g.nextSibling), f.__d = void 0, f.__u &= -196609);
  e.__d = l, e.__e = _;
}
function Jc(n, t, e) {
  var s, i, r, o, a, l = t.length, c = e.length, d = c, h = 0;
  for (n.__k = [], s = 0; s < l; s++)
    (i = n.__k[s] = (i = t[s]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Ws(null, i, null, null, i) : Cn(i) ? Ws(De, { children: i }, null, null, null) : i.__b > 0 ? Ws(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = n, i.__b = n.__b + 1, a = Qc(i, e, o = s + h, d), i.__i = a, r = null, a !== -1 && (d--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a === o + 1 ? h++ : a > o ? d > l - o ? h += a - o : h-- : h = a < o && a == o - 1 ? a - o : 0, a !== s + h && (i.__u |= 65536))) : (r = e[s]) && r.key == null && r.__e && (r.__e == n.__d && (n.__d = Ee(r)), oi(r, r, !1), e[s] = null, d--);
  if (d)
    for (s = 0; s < c; s++)
      (r = e[s]) != null && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = Ee(r)), oi(r, r));
}
function ca(n, t, e) {
  var s, i;
  if (typeof n.type == "function") {
    for (s = n.__k, i = 0; s && i < s.length; i++)
      s[i] && (s[i].__ = n, t = ca(s[i], t, e));
    return t;
  }
  return n.__e != t && (e.insertBefore(n.__e, t || null), t = n.__e), t && t.nextSibling;
}
function Js(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (Cn(n) ? n.some(function(e) {
    Js(e, t);
  }) : t.push(n)), t;
}
function Qc(n, t, e, s) {
  var i = n.key, r = n.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
    return e;
  if (s > (l != null && !(131072 & l.__u) ? 1 : 0))
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
function Qr(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Zc.test(t) ? e : e + "px";
}
function Ms(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || Qr(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || Qr(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = Date.now(), n.addEventListener(t, r ? eo : to, r)) : n.removeEventListener(t, r ? eo : to, r);
    else {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in n)
        try {
          n[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? n.removeAttribute(t) : n.setAttribute(t, e));
    }
}
function to(n) {
  var t = this.l[n.type + !1];
  if (n.t) {
    if (n.t <= t.u)
      return;
  } else
    n.t = Date.now();
  return t(F.event ? F.event(n) : n);
}
function eo(n) {
  return this.l[n.type + !0](F.event ? F.event(n) : n);
}
function Ji(n, t, e, s, i, r, o, a, l, c) {
  var d, h, m, f, g, _, y, b, v, w, k, $, C, E, I, A = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (d = F.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (b = t.props, v = (d = A.contextType) && s[d.__c], w = d ? v ? v.props.value : d.__ : s, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(b, w) : (t.__c = h = new O(b, w), h.constructor = A, h.render = eh), v && v.sub(h), h.props = b, h.state || (h.state = {}), h.context = w, h.__n = s, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Jt({}, h.__s)), Jt(h.__s, A.getDerivedStateFromProps(b, h.__s))), f = h.props, g = h.state, h.__v = t, m)
          A.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && b !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(b, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(b, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = b, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(N) {
              N && (N.__ = t);
            }), k = 0; k < h._sb.length; k++)
              h.__h.push(h._sb[k]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(b, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(f, g, _);
          });
        }
        if (h.context = w, h.props = b, h.__P = n, h.__e = !1, $ = F.__r, C = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, $ && $(t), d = h.render(h.props, h.state, h.context), E = 0; E < h._sb.length; E++)
            h.__h.push(h._sb[E]);
          h._sb = [];
        } else
          do
            h.__d = !1, $ && $(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++C < 25);
        h.state = h.__s, h.getChildContext != null && (s = Jt(Jt({}, s), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(f, g)), la(n, Cn(I = d != null && d.type === De && d.key == null ? d.props.children : d) ? I : [I], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (N) {
        t.__v = null, l || r != null ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = e.__e, t.__k = e.__k), F.__e(N, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = th(e.__e, t, e, s, i, r, o, l, c);
  (d = F.diffed) && d(t);
}
function ha(n, t, e) {
  t.__d = void 0;
  for (var s = 0; s < e.length; s++)
    Qi(e[s], e[++s], e[++s]);
  F.__c && F.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      F.__e(r, i.__v);
    }
  });
}
function th(n, t, e, s, i, r, o, a, l) {
  var c, d, h, m, f, g, _, y = e.props, b = t.props, v = t.type;
  if (v === "svg" && (i = !0), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!v && (v ? f.localName === v : f.nodeType === 3)) {
        n = f, r[c] = null;
        break;
      }
  }
  if (n == null) {
    if (v === null)
      return document.createTextNode(b);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, b.is && b), r = null, a = !1;
  }
  if (v === null)
    y === b || a && n.data === b || (n.data = b);
  else {
    if (r = r && wn.call(n.childNodes), y = e.props || ss, !a && r != null)
      for (y = {}, c = 0; c < n.attributes.length; c++)
        y[(f = n.attributes[c]).name] = f.value;
    for (c in y)
      f = y[c], c == "children" || (c == "dangerouslySetInnerHTML" ? h = f : c === "key" || c in b || Ms(n, c, null, f, i));
    for (c in b)
      f = b[c], c == "children" ? m = f : c == "dangerouslySetInnerHTML" ? d = f : c == "value" ? g = f : c == "checked" ? _ = f : c === "key" || a && typeof f != "function" || y[c] === f || Ms(n, c, f, y[c], i);
    if (d)
      a || h && (d.__html === h.__html || d.__html === n.innerHTML) || (n.innerHTML = d.__html), t.__k = [];
    else if (h && (n.innerHTML = ""), la(n, Cn(m) ? m : [m], t, e, s, i && v !== "foreignObject", r, o, r ? r[0] : e.__k && Ee(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && oa(r[c]);
    a || (c = "value", g !== void 0 && (g !== n[c] || v === "progress" && !g || v === "option" && g !== y[c]) && Ms(n, c, g, y[c], !1), c = "checked", _ !== void 0 && _ !== n[c] && Ms(n, c, _, y[c], !1));
  }
  return n;
}
function Qi(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    F.__e(s, e);
  }
}
function oi(n, t, e) {
  var s, i;
  if (F.unmount && F.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Qi(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && oi(s[i], t, e || typeof n.type != "function");
  e || n.__e == null || oa(n.__e), n.__ = n.__e = n.__d = void 0;
}
function eh(n, t, e) {
  return this.constructor(n, e);
}
function ns(n, t, e) {
  var s, i, r, o;
  F.__ && F.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Ji(t, n = (!s && e || t).__k = $t(De, null, [n]), i || ss, ss, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? wn.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), ha(r, n, o);
}
wn = ra.slice, F = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, na = 0, _t = function(n) {
  return n != null && n.constructor == null;
}, O.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Jt({}, this.state), typeof n == "function" && (n = n(Jt({}, e), this.props)), n && Jt(e, n), n != null && this.__v && (t && this._sb.push(t), Jr(this));
}, O.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Jr(this));
}, O.prototype.render = De, le = [], ia = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ri = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Zs.__r = 0;
function P(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...Js(r), ...Js(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = u.extend(r, i))), n[s] = i);
    });
  }), n;
}
function da(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
const Ke = /* @__PURE__ */ new Map();
function Qs(n) {
  const { zui: t } = window;
  return (!Ke.size || n && !Ke.has(n.toUpperCase())) && Object.keys(t).forEach((e) => {
    const s = t[e];
    !s.NAME || !s.ZUI || Ke.set(e.toLowerCase(), s);
  }), n ? Ke.get(n.toLowerCase()) : void 0;
}
function sh(n, t, e) {
  const s = Qs(n);
  return s ? !s.MULTI_INSTANCE && s.get(t) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: t, options: e }), null) : new s(t, e) : null;
}
function Pu(n) {
  if (n) {
    const t = Qs(n);
    t && t.defineFn();
  } else
    Qs(), Ke.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = u(this);
    let t = ii(n, "data-");
    const [e, s] = t.zui.split(":");
    n.zui(e) || (s ? t = u.share[s] : delete t.zui, requestAnimationFrame(() => sh(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = sa(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), n === !0 ? r : o;
  }
  const s = Qs(n);
  if (s)
    return t === !0 ? s.getAll(e) : s.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function nh(n, t = !0) {
  const e = u(n), s = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = s === document.body ? window.innerWidth - document.body.clientWidth : s.offsetWidth - s.clientWidth;
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
u.fn.disableScroll = function(n = !0) {
  return this.each((t, e) => {
    nh(e, n);
  });
};
u.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function kn(n) {
  if (typeof n == "number")
    return [n];
  let t = n.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = n.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Qt(n) {
  if (n == null)
    return null;
  const [t, e = "px"] = kn(n);
  return Number.isNaN(t) ? typeof n == "string" ? n : null : `${t}${e}`;
}
async function so(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = t), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), so(o, t);
  }
  const e = await fetch(n);
  return so(e);
}
class ih {
  constructor(t) {
    this._$target = u(t);
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
const zt = new ih(document);
u.bus = zt;
u.on = zt.on.bind(zt);
u.one = zt.one.bind(zt);
u.off = zt.off.bind(zt);
u.trigger = zt.trigger.bind(zt);
function tr(n, t) {
  const e = u(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: y, clientWidth: b } = document.documentElement;
    s = { left: 0, top: 0, width: _ || b, height: g || y };
  }
  const { left: l, top: c, width: d, height: h } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const m = i <= d && i + o >= l;
  return r <= h && r + a >= c && m;
}
u.fn.isVisible = function(n) {
  return tr(this, n);
};
function er(n, t, e = !1) {
  const s = u(n);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${Bt()}`;
      s.append(`<script id="${i}">${t}<\/script>`), e && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    er(s, r.innerHTML), r.remove();
  });
}
u.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
u.fn.runJS = function(n) {
  return this.each((t, e) => {
    er(e, n);
  });
};
function ua(n, t) {
  const e = u(n), { ifNeeded: s = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (s) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (tr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    ua(e, n);
  });
};
u.setLibRoot = function(n) {
  u.libRoot = n;
};
u.registerLib = function(n, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), u.libMap[n] = t;
};
u.getLib = function(n, t, e) {
  return new Promise((s, i) => {
    let r = typeof n == "string" ? { src: n } : u.extend({}, n);
    typeof t == "function" ? r.success = t : t && u.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[o];
    a && (r = u.extend({}, a, r), o = a.src || r.src);
    const { root: l = u.libRoot } = r;
    l && (o = `${l}${l.endsWith("/") && o.startsWith("/") ? "" : "/"}${o}`);
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      s(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: f } = r, g = u(f ? `#${f}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const $ = g.data("loadCalls") || [];
        $.push(m), g.data("loadCalls", $);
      }
      return;
    }
    const { async: _ = !0, defer: y = !1, noModule: b = !1, type: v, integrity: w } = r, k = document.createElement("script");
    k.async = _, k.defer = y, k.noModule = b, v && (k.type = v), w && (k.integrity = w), k.onload = () => {
      m(), (u(k).dataset("loaded", !0).data("loadCalls") || []).forEach((C) => C()), u(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, k.src = o, u("head").append(k);
  });
};
u.getScript = u.getLib;
function Pe(n) {
  return n.parentNode === document ? !1 : n.parentNode ? Pe(n.parentNode) : !0;
}
u.isDetached = Pe;
u.fn.isDetached = function() {
  const n = this[0];
  return !n || Pe(n);
};
const Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: Pe,
  isVisible: tr,
  runJS: er,
  scrollIntoView: ua
}, Symbol.toStringTag, { value: "Module" })), fa = {};
function oe(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    oe(e, n[e]);
  }) : t && (fa[n.toLowerCase()] = t);
}
function rh(n) {
  return fa[n.toLowerCase()];
}
class U extends O {
  constructor() {
    super(...arguments), this._gid = Bt();
  }
  get gid() {
    return this._gid;
  }
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
  }
  changeState(t, e) {
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
      });
    });
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: d, ...h } = t, m = new Set(this.constructor.customProps), f = "dangerouslySetInnerHTML", g = Object.keys(h).reduce((_, y) => {
      if (!m.has(y) && (y === f || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(y))) {
        const b = h[y];
        _[y] = y !== f && b && typeof b == "object" ? JSON.stringify(b) : b;
      }
      return _;
    }, {});
    return { ref: o, className: x(this._getClassName(t), d) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...g, ...s, ...i };
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
  _onRender(t, e, s, i) {
    return [t, e, s];
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), s = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, s, t);
    return r && ([e, i, s] = r), $t(e, i, s);
  }
}
U.HElement = !0;
U.customProps = [];
var oh = 0;
function p(n, t, e, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --oh, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(c), c;
}
class fe extends O {
  constructor() {
    super(...arguments), this._ref = B();
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
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ p(U, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function ah(n) {
  const {
    tag: t,
    className: e,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...d
  } = n, h = [e], m = { ...s }, f = [], g = [];
  return i.forEach((_) => {
    const y = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        y.push(...l.call(o, _, f, ...r));
      else {
        const b = _.call(o, f, ...r);
        b && (Array.isArray(b) ? y.push(...b) : y.push(b));
      }
    else
      y.push(_);
    y.forEach((b) => {
      b != null && (typeof b == "object" && !_t(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? f.push(
        /* @__PURE__ */ p("div", { className: x(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? g.push(b.__html) : (b.style && Object.assign(m, b.style), b.className && h.push(b.className), b.children && f.push(b.children), b.attrs && Object.assign(d, b.attrs)) : f.push(b));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: x(h),
    style: m,
    ...d
  }, f];
}
function pa({
  tag: n = "div",
  ...t
}) {
  const [e, s] = ah(t);
  return $t(n, e, ...s);
}
function ai(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => ai({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ p("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ p(fe, { ...P(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = P({ children: o.map((a) => ai({ ...i, content: a, generatorThis: s, generatorArgs: e })) }, r)), /* @__PURE__ */ p(U, { ...P(i, r) });
  }
  return _t(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function D(n) {
  const t = ai(n);
  return t == null || typeof t == "boolean" ? null : _t(t) ? t : /* @__PURE__ */ p(De, { children: t });
}
const no = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function K(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (_t(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(no(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? no(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ p("i", { className: x(i), ...s });
}
function lh(n) {
  return this.getChildContext = () => n.context, n.children;
}
function ma(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    ns(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== e && t.componentWillUnmount(), n._vnode ? (t._temp || (t._container = e, t._temp = {
    nodeType: 1,
    parentNode: e,
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
  }), ns(
    $t(lh, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function ch(n, t) {
  const e = $t(ma, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
oe({
  HElement: U,
  element: U,
  HtmlContent: fe,
  html: fe,
  CustomContent: D,
  custom: D,
  Icon: K,
  Portal: ma
});
class lt {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: s, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = u(t);
    if (l.data(s) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = Bt();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((f) => {
        f.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Pe(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(s, this).attr(i, `${d}`), o) {
      const m = `${s}:ALL`;
      let f = l.data(m);
      f || (f = /* @__PURE__ */ new Map(), l.data(m, f)), f.set(this._key, this);
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
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: s } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), (r = this._mobs) == null || r.disconnect(), i.off(this.namespace).removeData(t).attr(e, null), s) {
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
    const s = u.Event(t);
    return s.__src = this, this.$emitter.trigger(s, [this, ...e]), s;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e, s) {
    const i = this;
    this.$element[s != null && s.once ? "one" : "on"](this._wrapEvent(t), function(r, o) {
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
  i18n(t, e, s) {
    return J(this.options.i18n, t, e, s, this.options.lang, this.constructor.NAME) ?? J(this.options.i18n, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    const s = u(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return s.data(this.KEY);
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
    const s = this.get(t, e == null ? void 0 : e.key);
    return s ? (e && s.setOptions(e), s) : new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t) {
    const { MULTI_INSTANCE: e, DATA_KEY: s } = this, i = [];
    return u(t || document).find(`[${s}]`).each((r, o) => {
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
  static query(t, e, s) {
    if (t === void 0) {
      let i = this.getAll();
      return s && (i = i.filter(s)), i.pop();
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
    const s = this;
    u.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = s.get(d);
          if (h ? o && h.render(o) : h = new s(d, o), a) {
            let m = h[a], f = h;
            m === void 0 && (f = h.$, m = f[a]), typeof m == "function" ? l = m.call(f, ...r) : l = m;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
lt.DEFAULT = {};
lt.MULTI_INSTANCE = !1;
class L extends lt {
  constructor() {
    super(...arguments), this._ref = B();
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
    const { element: e } = this, { Component: s, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this._ref,
      ...o
    };
    if (r && s.HElement && (e.tagName.toLowerCase() === r || r === !0)) {
      const l = Array.from(e.attributes).reduce((c, d) => {
        const { name: h, value: m } = d;
        return c[h === "class" ? "className" : h] = m, c;
      }, {});
      return ns(
        $t(s, P({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    ns(
      $t(s, a),
      e
    );
  }
}
L.replace = !1;
class et extends U {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ p(K, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ p(K, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ p("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ p(K, { icon: l }),
      e ? null : c ? /* @__PURE__ */ p("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: s, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: d } = t;
    return ["btn", e, s, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof d == "string" ? `rounded-${d}` : { rounded: d }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: !l && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (s !== void 0 && (c[l ? "href" : "data-url"] = s), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: et
}, Symbol.toStringTag, { value: "Module" }));
oe(hh);
let ct = class extends U {
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
    var e, s;
    return (s = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : s.key;
  }
  _getItemFromEvent(t, e) {
    var l;
    const s = (e || t.target).closest("[z-item]");
    if (!s || !((l = s.parentElement) != null && l.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const i = +s.getAttribute("z-item"), r = this._items[i];
    if (!r)
      return;
    const o = this.getKey(i);
    if (o === void 0)
      return;
    const a = this._renderedItems[i];
    return { index: i, item: r, element: s, event: t, key: o, renderedItem: a, relativeTarget: this.props.relativeTarget };
  }
  _handleClick(t) {
    var s, i;
    const e = this._getItemFromEvent(t);
    if (e)
      return (s = this.props.onClickItem) == null || s.call(this, e), (i = e.item.onClick) == null || i.call(this, t, e), e;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, s) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const c = i.call(this, e, s);
      c !== void 0 && (e = c);
    }
    const { type: r } = e;
    let { itemRender: o } = t;
    if (o && typeof o == "object" && (o = o[r]), o) {
      const c = o.call(this, e, s);
      if (c !== void 0)
        return /* @__PURE__ */ p(D, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || U;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = P({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ p(l, { "z-key": e.key, "z-item": s, "z-type": r, ...e });
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, s) {
    if (!e)
      return !1;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: m = {} } = this.constructor;
    if (e = P(
      { type: l },
      h,
      m[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _item: e,
        _index: s,
        key: String((a ? e[a] : e.key) ?? e.key ?? s),
        onClick: void 0
      }
    ), o) {
      const f = o.call(this, e, s);
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
    return this._renderedItems = e.map((s, i) => {
      const r = this._getItem(t, s, i);
      return r || void 0;
    }), this._renderedItems.reduce((s, i, r) => (i && s.push(this._renderItem(t, i, r)), s), []);
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
    const s = this._renderItems(t, e);
    return t.children && s.push(t.children), s;
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
ct.NAME = "";
ct.ITEM_NAME = "item";
ct.TAG = "ul";
ct.ItemComponents = {
  default: U,
  divider: [U, { className: "divider" }],
  space: [U, (n) => {
    const { space: t, flex: e, style: s } = n;
    return {
      style: { width: t, height: t, flex: e, ...s }
    };
  }]
};
ct.defaultItemProps = {
  component: "li"
};
ct.defaultItemPropsMap = {};
ct.defaultItemType = "item";
const dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: ct
}, Symbol.toStringTag, { value: "Module" }));
class sr extends L {
}
sr.NAME = "CommonList";
sr.Component = ct;
sr.replace = ct.TAG;
oe(dh);
function uh(n) {
  if (n.indexOf("#") === 0 && (n = n.slice(1)), n.length === 3 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), n.length !== 6)
    throw new Error(`Invalid HEX color "${n}".`);
  return [
    parseInt(n.slice(0, 2), 16),
    // r
    parseInt(n.slice(2, 4), 16),
    // g
    parseInt(n.slice(4, 6), 16)
    // b
  ];
}
function fh(n) {
  const [t, e, s] = typeof n == "string" ? uh(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function io(n, t) {
  return fh(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function ro(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function ph(n, t, e) {
  n = n % 360 / 360, t = ro(t), e = ro(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function ga(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function mh(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let vs = class extends O {
  render() {
    const {
      className: t,
      style: e,
      size: s = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      icon: l,
      text: c,
      code: d,
      maxTextLength: h = 2,
      src: m,
      hueDistance: f = 43,
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: y,
      ...b
    } = this.props, v = ["avatar", t], w = { ...e, background: o, color: a };
    let k = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (v.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? v.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let $;
    if (m)
      v.push("has-img"), $ = /* @__PURE__ */ p("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      v.push("has-icon"), $ = /* @__PURE__ */ p(K, { icon: l });
    else if (c != null && c.length) {
      const C = mh(c, h);
      if (v.push("has-text", `has-text-${C.length}`), o === void 0) {
        const I = d ?? c, A = (typeof I == "number" ? I : ga(I)) * f % 360;
        if (w.background = `hsl(${A},${g * 100}%,${_ * 100}%)`, !a) {
          const N = ph(A, g, _);
          w.color = io(N);
        }
      } else
        !a && o && (w.color = io(o));
      let E;
      k && k < 14 * C.length && (E = { transform: `scale(${k / (14 * C.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ p("div", { "data-actualSize": k, className: "avatar-text", style: E, children: C });
    }
    return /* @__PURE__ */ p(
      "div",
      {
        className: x(v),
        style: w,
        ...b,
        children: [
          $,
          y
        ]
      }
    );
  }
};
const gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: vs
}, Symbol.toStringTag, { value: "Module" }));
let Ct = class extends ct {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    e.type || (e = u.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = P({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = P({}, e, da({ btnType: s, size: i }));
  }
};
Ct.NAME = "btn-group";
Ct.TAG = "nav";
Ct.ItemComponents = {
  ...ct.ItemComponents,
  default: et
};
Ct.defaultItemProps = {
  component: void 0
};
const xn = class _a extends Ct {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = x(s.className, `gap-${e}`) : s.style = u.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = P({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = P(s, r)), /* @__PURE__ */ p(_a, { ...r });
  }
};
xn.NAME = "toolbar";
xn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
xn.ItemComponents = {
  ...Ct.ItemComponents,
  btnGroup: Ct,
  "btn-group": Ct
};
let at = xn;
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: at
}, Symbol.toStringTag, { value: "Module" }));
class Sn extends U {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: s } = this.props, i = e.target.indeterminate ? "indeterminate" : e.target.checked;
      s && s.call(this, e, i), this._controlled || this.setState({ checked: i });
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? !1
    }, this._controlled = t.checked !== void 0;
  }
  get checked() {
    return this._controlled ? this.props.checked : this.state.checked;
  }
  _getClassName(t) {
    const { disabled: e, type: s = "checkbox" } = t, { checked: i } = this;
    return [t.className, s === "switch" ? s : `${s}-primary`, {
      disabled: e,
      checked: i === !0,
      indeterminate: i === "indeterminate"
    }];
  }
  _getChildren(t) {
    const { name: e, type: s, value: i, id: r, label: o } = t, { checked: a } = this;
    return [
      e ? /* @__PURE__ */ p(
        "input",
        {
          type: s === "radio" ? s : "checkbox",
          name: e,
          id: r,
          value: i,
          onChange: this._handleChange,
          indeterminate: a === "indeterminate",
          checked: typeof a == "boolean" ? a : void 0
        },
        "input"
      ) : null,
      /* @__PURE__ */ p("label", { htmlFor: r, children: /* @__PURE__ */ p(D, { content: o }) }, "label")
    ];
  }
}
class yh extends Sn {
}
yh.defaultProps = {
  type: "radio"
};
class bh extends Sn {
}
bh.defaultProps = {
  type: "switch"
};
class tn extends U {
  _renderLeading(t) {
    const {
      icon: e,
      avatar: s,
      toggleIcon: i,
      leading: r,
      leadingClass: o,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, d = [];
    if (i && d.push(/* @__PURE__ */ p(D, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ p(Sn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ p(K, { className: "item-icon", icon: e }, "icon")), s) {
      const m = typeof s == "function" ? s.call(this, t) : s;
      m && (m.className = x("item-avatar", m.className), d.push(/* @__PURE__ */ p(vs, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ p(D, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ p("div", { className: x("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t, e) {
    const {
      textClass: s,
      titleClass: i,
      titleAttrs: r,
      subtitle: o,
      subtitleClass: a,
      url: l,
      target: c,
      content: d,
      contentClass: h,
      contentAttrs: m
    } = t, f = l && !e, g = f ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ p("div", { className: x("item-content", h), ...m, children: [
        _ ? /* @__PURE__ */ p(g, { className: x("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ p(D, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ p("div", { className: x("item-subtitle", a), children: /* @__PURE__ */ p(D, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ p("div", { className: x("item-text text", s), children: y }, "text") : null,
        d ? /* @__PURE__ */ p(D, { content: d }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: s,
      trailingClass: i,
      trailingIcon: r,
      actions: o
    } = t, a = [];
    r && a.push(/* @__PURE__ */ p(K, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(at.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = s ? /* @__PURE__ */ p(D, { content: s }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ p("div", { className: x("item-trailing", i), children: [
        a,
        l
      ] }, "trailing")
    ] : [] : a;
  }
  _render(t, e) {
    const {
      innerComponent: s,
      innerClass: i,
      innerAttrs: r,
      url: o,
      actions: a,
      target: l,
      active: c,
      disabled: d,
      divider: h,
      checked: m,
      multiline: f,
      title: g,
      subtitle: _,
      hint: y,
      hover: b
    } = t, v = s || (o && !a ? "a" : "div"), w = v === "a", k = P({
      key: "item",
      title: y,
      className: x("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": b,
        checked: m,
        multiline: f ?? !!(g && _),
        state: w
      })
    }, w ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ p(v, { ...k, children: [
      this._renderLeading(t),
      this._renderContent(t, w),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Js(s)]];
  }
}
let Mt = class extends ct {
  constructor(t) {
    super(t), this.state = {
      checked: {}
    };
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
  setItems(t, e) {
    const { onLoadFail: s } = this.props;
    this.setState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof s == "function" ? s.call(this, e) : s) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const s = await vn(t, [this], { throws: !0 });
        this.setItems((e == null ? void 0 : e.call(this, s)) || s);
      } catch (s) {
        this.setItems(void 0, s);
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    return t || !e || Array.isArray(e) || e === this._loadedSetting ? !1 : (this.load(), !0);
  }
  isChecked(t, e, s = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.state.checked[t] ?? i.checked ?? s;
  }
  isAllChecked() {
    return this._renderedItems.every(({ key: t }, e) => this.isChecked(t, e) === !0);
  }
  toggleAllChecked(t) {
    t === void 0 && (t = !this.isAllChecked()), this.toggleChecked(this._renderedItems.map((e) => e.key), t);
  }
  toggleChecked(t, e) {
    let s;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), s = t.reduce((i, r) => (i[r] = e, i), {});
    } else if (typeof t == "object")
      s = t;
    else {
      const i = this.isChecked(t);
      e === void 0 && (e = !i), s = { [t]: e };
    }
    Object.keys(s).length && this.setState((i) => ({
      checked: {
        ...i.checked,
        ...s
      }
    }), () => {
      var r;
      const i = this.state.checked;
      (r = this.props.onCheck) == null || r.call(this, s, Object.keys(i).filter((o) => i[o] === !0));
    });
  }
  getChecks() {
    return this._renderedItems.reduce((t, { key: e }, s) => (e !== void 0 && this.isChecked(e, s) === !0 && t.push(e), t), []);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: s } = this.state;
    return s || (Array.isArray(e) ? e : []);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, s) {
    const { divider: i, hover: r, multiline: o } = t;
    e = P({}, da({
      divider: i,
      hover: r,
      multiline: o
    }), e);
    const { itemName: a, name: l } = this;
    if (e.innerClass = [a ? `${a}-inner${l ? ` ${l}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: c } = t;
      c && (e.checked = this.isChecked(e.key, s, e.checked), typeof c == "object" && (e.checkbox = e.checkbox ? u.extend({}, c, e.checkbox) : c), t.activeOnChecked && e.checked && (e.active = !0));
    }
    return e.icon && (this._hasIcons = !0), e.checked !== void 0 && (this._hasCheckbox = !0), e;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && this._getRenderedItem(t, i, s);
  }
  _renderItem(t, e, s) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, s);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    let { checkOnClick: s } = this.props;
    if (s === "any" ? s = ".item-checkbox,.item-content,.item-icon" : s === !0 && (s = ".item-checkbox"), s && e && t.target.closest(s)) {
      this.toggleChecked(e.key), t.stopPropagation();
      return;
    }
    return e;
  }
  _getClassName(t) {
    const { loading: e, loadFailed: s } = this.state;
    return [super._getClassName(t), e ? "loading" : s ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...s } = super._getProps(t);
    return {
      ...s,
      className: x(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: s } = this.state;
    return s && e.push(s), e;
  }
};
Mt.ItemComponents = {
  ...ct.ItemComponents,
  default: U,
  item: tn,
  heading: tn
};
Mt.NAME = "list";
const Un = "```ZUI_STR\n";
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
    const s = this._storage.getItem(this._getKey(t));
    if (typeof s == "string") {
      if (s.startsWith(Un))
        return s.substring(Un.length);
      try {
        return JSON.parse(s);
      } catch {
      }
    }
    return s ?? e;
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Un}${e}` : JSON.stringify(e));
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
      const s = this._storage.key(e);
      if (s != null && s.startsWith(this._name)) {
        const i = this._storage.getItem(s);
        typeof i == "string" && t(s.substring(this._name.length + 1), JSON.parse(i));
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
    return this.each((e, s) => {
      t[e] = s;
    }), t;
  }
}
const Ot = new ws("DEFAULT");
function vh(n, t = "local") {
  return new ws(n, t);
}
Object.assign(Ot, { create: vh });
function ya(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), ya(s, t);
  });
}
function wh(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function oo(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function ba(n, t, e = /* @__PURE__ */ new Map(), s = 0, i) {
  return n.forEach((r, o) => {
    const a = String((t ? r[t] : r.key) ?? r.key ?? o), l = i ? `${i.keyPath}:${a}` : a, c = {
      key: a,
      level: s,
      keyPath: l,
      parentKey: i == null ? void 0 : i.keyPath,
      parent: i,
      data: r,
      children: []
    };
    i && i.children.push(c), e.set(l, c), Array.isArray(r.items) && ba(r.items, t, e, s + 1, c);
  }), e;
}
let _e = class extends Mt {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (u.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = Ot.get(this._storeID);
      r && u.extend(this.state, r);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && oo(o).forEach((a) => {
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
    return this._itemMap || (this._itemMap = ba(this._items, this.props.itemKey)), this._itemMap;
  }
  getRenderedItem(t) {
    return this._renderedItemMap.get(t);
  }
  getItem(t) {
    var s;
    if (this._itemMap)
      return (s = this._itemMap.get(t)) == null ? void 0 : s.data;
    const e = this.getRenderedItem(t);
    return e ? e._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  toggle(t, e) {
    const s = this.isExpanded(t);
    if (e === s)
      return;
    e === void 0 && (e = !s);
    const { nestedShow: i, onToggle: r, accordion: o } = this.props;
    if (!(r && r.call(this, t, e) === !1) && i === void 0)
      return this.setState((a) => {
        const l = {
          ...a.nestedShow,
          [t]: e
        };
        if (e && o) {
          let c = `${t.split(":").slice(0, -1).join(":")}`;
          c.length && (c += ":"), Object.keys(l).forEach((d) => {
            d !== t && d.startsWith(c) && (l[d] = !1);
          });
        }
        return {
          nestedShow: e ? oo(t).reduce((c, d) => (c[d] = e, c), l) : l
        };
      }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap().values()).reduce((t, { keyPath: e, data: s }) => ((this.state.checked[e] === !0 || s.checked) === !0 && t.push(e), t), []);
  }
  isChecked(t, e, s = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.isRoot ? this.state.checked[t] ?? i.checked ?? s : this.props.checkedState[`${this.props.parentKey}:${t}`] ?? i.checked ?? s;
  }
  toggleChecked(t, e) {
    let s;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), s = t.reduce((i, r) => (i[r] = e, i), {});
    } else
      typeof t == "object" ? s = t : (e === void 0 && (e = !this.isChecked(t)), s = { [t]: e });
    if (Object.keys(s).length)
      if (this.isRoot) {
        const i = this.getItemMap();
        this.setState(({ checked: r }) => {
          const o = (a) => s[a.keyPath] ?? r[a.keyPath] ?? a.data.checked ?? !1;
          return Object.keys(s).forEach((a) => {
            e = s[a];
            const l = i.get(a);
            l && (ya(l, (c) => {
              o(c) !== e && (s[c.keyPath] = e);
            }), wh(l, (c) => {
              const { children: d } = c, h = d.reduce((m, f) => (o(f) && m++, m), 0);
              s[c.keyPath] = h === d.length ? !0 : h ? "indeterminate" : !1;
            }));
          }), {
            checked: {
              ...r,
              ...s
            }
          };
        }, () => {
          var o;
          const r = this.state.checked;
          (o = this.props.onCheck) == null || o.call(this, s, Object.keys(r).filter((a) => r[a] === !0));
        });
      } else {
        const { parentKey: i, onCheck: r } = this.props, o = Object.keys(s).reduce((a, l) => (a[`${i !== void 0 ? `${i}:` : ""}${l}`] = s[l], a), {});
        r.call(this, o, []);
      }
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
    this._storeID && Ot.set(this._storeID, this.state);
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, s, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return P(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      key: s.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${s.key}` : s.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      checkedState: t.checkedState || this.state.checked,
      onCheck: this.isRoot ? this._handleNestedCheck : t.onCheck,
      onToggle: this.isRoot ? this._handleNestedToggle : t.onToggle,
      beforeRenderItem: this.isRoot ? this._beforeRenderNestedItem : t.beforeRenderItem
    }, s.listProps);
  }
  _renderNestedList(t, e, s, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, s, i), o = this.constructor;
    return /* @__PURE__ */ p(o, { ...r }, `nested:${s.key}`);
  }
  _renderNestedToggle(t, e) {
    let s, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ p("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ p("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (s = /* @__PURE__ */ p(K, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ p("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: s });
  }
  _getItems(t) {
    const e = super._getItems(t);
    return this.isRoot && e !== this._items && (this._itemMap = void 0), e;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key, a = `${r !== void 0 ? `${r}:` : ""}${o}`;
    if (i.items) {
      const l = i.expanded ?? this.isExpanded(a);
      P(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return P(i, {
      _level: t.level,
      _keyPath: a,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t) {
    return this._renderedItemMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, s) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = P(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, s);
  }
  _getItemFromEvent(t, e) {
    const s = super._getItemFromEvent(t, e);
    if (!s)
      return;
    (t.type === "mouseenter" || t.type === "mouseleave") && (s.hover = t.type === "mouseenter");
    const { parentKey: i } = this.props;
    return { ...s, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${s.key}`, target: e || t.target };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: s, event: i, keyPath: r, target: o } = t, { nestedToggle: a } = this.props, { isHoverTrigger: l } = this;
    if (!e.items || i.defaultPrevented || l && s === void 0 || !l && i.type !== "click" || o.closest(".not-nested-toggle") || a && !o.closest(a) || !a && o.closest("a,.btn,.item-checkbox") && !o.closest(".nested-toggle-icon,.item-icon"))
      return t;
    const c = typeof s == "boolean" ? s : void 0;
    this.toggle(r, c);
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
    const s = this._hoverInfo;
    s && (s.info.keyPath === e.keyPath ? clearTimeout(s.timer) : this._toggleFromEvent(s.info)), this._hoverInfo = {
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
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = P(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * s}px`, "--list-indent": `${s}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = x(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || this.isHoverTrigger), super._beforeRender(t);
  }
};
_e.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
_e.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "activeOnChecked", "checkedState", "onClickItem"];
class nr extends L {
}
nr.NAME = "List";
nr.Component = Mt;
nr.replace = Mt.TAG;
class ir extends L {
}
ir.NAME = "NestedList";
ir.Component = _e;
ir.replace = _e.TAG;
let tt = class extends _e {
  _getClassName(t) {
    return x(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? null : { popup: t.popup, compact: t.compact });
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: s, maxHeight: i } = t, r = P({}, e, s || i ? { style: { height: s, maxHeight: i } } : null);
    return r.className = x(this._getWrapClass(t), r.className), r;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ p(D, { content: t.header }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ p(D, { content: t.footer }, "footer");
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ p("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : super.render(t);
  }
};
tt.NAME = "menu";
tt.TAG = "menu";
tt.inheritNestedProps = [..._e.inheritNestedProps, "compact"];
tt.ItemComponents = {
  ..._e.ItemComponents,
  item: [tn, { innerComponent: "a" }]
};
let rr = class extends O {
  constructor(t) {
    super(t), this._input = B(), this._timer = 0, this._handleClearBtnClick = (e) => {
      const s = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), s.trim() !== "" && (i == null || i("", e));
      });
    }, this._handleChange = (e) => {
      const s = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (this._clearTimer(), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }, this._handleFocus = (e) => {
      const s = e.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${Bt()}`;
  }
  get id() {
    return this._gid;
  }
  get input() {
    return this._input.current;
  }
  _clearTimer() {
    this._timer && clearTimeout(this._timer), this._timer = 0;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    this._clearTimer();
  }
  render(t, e) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: f, value: g, compact: _ } = t, { focus: y, value: b } = e, { id: v } = this, w = g ?? b, k = typeof w != "string" || !w.trim().length;
    let $, C, E;
    return m && (E = m === !0 ? /* @__PURE__ */ p("span", { class: "magnifier" }) : /* @__PURE__ */ p(K, { icon: m })), !h && m && ($ = /* @__PURE__ */ p("label", { for: v, class: "input-control-prefix", children: E }, "prefix")), f && !k ? C = /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ p("span", { class: "close" }) : /* @__PURE__ */ p(K, { icon: f })
      }
    ) : h && m && (C = E), C && (C = /* @__PURE__ */ p("label", { for: v, class: "input-control-suffix", children: C }, "suffix")), /* @__PURE__ */ p("div", { class: x("search-box input-control", r, { focus: y, empty: k, compact: _, "has-prefix-icon": $, "has-suffix-icon": C }), style: o, children: [
      $,
      /* @__PURE__ */ p(
        "input",
        {
          ref: this._input,
          id: v,
          type: "text",
          class: x("form-control", i, { "rounded-full": c, "size-sm": _ }),
          style: s,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: w,
          onInput: this._handleChange,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleFocus
        }
      ),
      C
    ] });
  }
};
rr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let kt = class extends tt {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const s = this.constructor.getSearchKeys(e);
      this._searchKeys = s, this.setState({ search: s.join(" ") });
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
    this.isRoot && u(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
  }
  _isItemMatch(t, e, s, i) {
    const { isItemMatch: r } = t, o = r ? r.call(this, e, this._searchKeys, s, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (this.isRoot && o && i !== void 0) {
      let a = "";
      String(i).split(":").forEach((l) => {
        a += `${a.length ? ":" : ""}${l}`, this._matchedParents.add(a);
      });
    }
    return o;
  }
  _isNestedItemMatch(t, e, s, i) {
    return this._isItemMatch(this.props, t, s, i);
  }
  _getNestedProps(t, e, s, i) {
    const r = super._getNestedProps(t, e, s, i);
    return this.isRoot && (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")), r;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && (i.hidden = !this._isItemMatch(t, e, s, t.parentKey), i);
  }
  _renderItem(t, e, s) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, s);
  }
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return x(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _renderSearchBox(t) {
    const { searchBox: e } = t;
    if (!e || !this.isRoot)
      return null;
    const s = {
      compact: !0,
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && u.extend(s, e), t.search !== void 0 && (s.value = this._searchKeys.join(" "), s.disabled = !0), /* @__PURE__ */ p(rr, { ...s }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, s = this.isRoot && t.searchBox && t.searchPlacement !== "bottom";
    return !e && !s ? null : /* @__PURE__ */ p("header", { className: "search-menu-header", children: [
      e ? super._renderWrapperHeader(t) : null,
      s ? this._renderSearchBox(t) : null
    ] }, "header");
  }
  _renderWrapperFooter(t) {
    const e = t.footer, s = this.isRoot && t.searchBox && t.searchPlacement === "bottom";
    return !e && !s ? null : /* @__PURE__ */ p("footer", { className: "search-menu-footer", children: [
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
  static isItemMatch(t, e, s = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => s.some((r) => {
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
  static underlineKeys(t, e, s = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((d, h) => {
        h && (o.push(/* @__PURE__ */ p("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
kt.inheritNestedProps = [...tt.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
kt.defaultProps = {
  ...tt.defaultProps,
  defaultNestedShow: !0,
  wrap: !0
};
class or extends L {
}
or.NAME = "Menu";
or.Component = tt;
or.replace = tt.TAG;
class ar extends L {
}
ar.NAME = "SearchMenu";
ar.Component = kt;
ar.replace = kt.TAG;
function Ch({
  className: n,
  style: t,
  actions: e,
  heading: s,
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
  a === !0 ? m = /* @__PURE__ */ p(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ p("span", { class: "close" }) }) : _t(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ p(et, { ...a, onClick: l }));
  const f = _t(e) ? e : e ? /* @__PURE__ */ p(at, { ...e }) : null;
  return /* @__PURE__ */ p("div", { className: x("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ p(K, { icon: c, className: x("alert-icon", d) }),
    typeof i != "string" ? /* @__PURE__ */ p(D, { content: i }) : /* @__PURE__ */ p("div", { className: x("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ p(D, { content: s }) : s && /* @__PURE__ */ p("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ p("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    m,
    o
  ] });
}
function kh(n) {
  if (n === "center")
    return "fade-from-center";
  if (n) {
    if (n.includes("top"))
      return "fade-from-top";
    if (n.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
function xh({
  margin: n,
  type: t,
  placement: e,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ p(
    Ch,
    {
      className: x("messager", r, t, s === !0 ? kh(e) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Sh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, $h = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, He = (n, t, e) => (Sh(n, t, "access private method"), e), ae, ve;
class lr extends L {
  constructor() {
    super(...arguments), $h(this, ae), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), He(this, ae, ve).call(this, () => {
      this._show = !0, this.render(), He(this, ae, ve).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && He(this, ae, ve).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && He(this, ae, ve).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), He(this, ae, ve).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ae = /* @__PURE__ */ new WeakSet();
ve = function(n, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, t);
};
lr.NAME = "MessagerItem";
lr.Component = xh;
var cr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, de = (n, t, e) => (cr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Es = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Os = (n, t, e, s) => (cr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), va = (n, t, e) => (cr(n, t, "access private method"), e), Se, Lt, li, wa, hr, Ca;
const $n = class ka extends lt {
  constructor() {
    super(...arguments), Es(this, li), Es(this, hr), Es(this, Se, void 0), Es(this, Lt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = de(this, Lt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), va(this, li, wa).call(this).show();
  }
  hide() {
    var t;
    (t = de(this, Lt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...s } = t, i = ka.ensure(e || "body", { key: `messager_${Bt()}`, ...s });
    return i.hide(), i.show(), i;
  }
};
Se = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakSet();
wa = function() {
  if (de(this, Lt))
    de(this, Lt).setOptions(this.options);
  else {
    const n = va(this, hr, Ca).call(this), t = new lr(n, this.options);
    t.on("hidden", () => {
      t.destroy(), n == null || n.remove(), Os(this, Se, void 0), Os(this, Lt, void 0);
    }), Os(this, Lt, t);
  }
  return de(this, Lt);
};
hr = /* @__PURE__ */ new WeakSet();
Ca = function() {
  if (de(this, Se))
    return de(this, Se);
  const { placement: n = "top" } = this.options;
  let t = this.$element.find(`.messagers-${n}`);
  t.length || (t = u(`<div class="messagers messagers-${n}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Os(this, Se, e[0])), e[0];
};
$n.NAME = "messager";
$n.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
$n.MULTI_INSTANCE = !0;
let Vu = $n;
let Tn = class extends O {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = s / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = s * f);
    const g = (s - f) / 2;
    return /* @__PURE__ */ p("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ p("circle", { cx: m, cy: m, r: g, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ p("circle", { cx: m, cy: m, r: g, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ p("text", { x: c ?? m, y: d ?? m + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
Tn.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class xa extends L {
}
xa.NAME = "ProgressCircle";
xa.Component = Tn;
const Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: Tn
}, Symbol.toStringTag, { value: "Module" }));
oe(Th);
const Fe = '[droppable="true"]';
class Nn extends lt {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: s, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
      !a || s && !r.closest(s).length || i && i.call(this, t, a) === !1 || (o.attr("draggable", "true"), this._setState({ dragging: a }));
    }, this._handleDragStart = (t) => {
      const { dragElement: e } = this;
      if (!e) {
        t.preventDefault();
        return;
      }
      const { options: s } = this, { onDragStart: i } = s;
      if (i && i.call(this, t, e) === !1) {
        this._clean();
        return;
      }
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d, canDrop: h } = s;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      let m = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || Fe);
      if (h && (m = m.filter((f, g) => h.call(this, t, e, g) !== !1)), !m.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), m.addClass(c)), d && r.addClass(d), r.find(Fe).removeAttr("droppable"), m.attr("droppable", "true"), this._$targets = m;
    }, this._handleDrag = (t) => {
      var s;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (s = this.options.onDrag) == null || s.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var s;
      const { dragElement: e } = this;
      e && ((s = this.options.onDragEnd) == null || s.call(this, t, e)), this._clean();
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var o, a;
      const { dragElement: e } = this, i = u(t.target).closest(Fe)[0];
      if (!e || !i)
        return;
      const r = this.state.dropping;
      if (t.preventDefault(), this._setDragEffect(t), r !== i) {
        const { droppingClass: l } = this.options;
        l && (r && this._leaveDropElement(t, r), u(i).addClass(l)), this._setState({ dropping: i }), (o = this.options.onDragEnter) == null || o.call(this, t, e, i);
      }
      (a = this.options.onDragOver) == null || a.call(this, t, e, i);
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = u(t.target).filter(Fe)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = u(t.target).closest(Fe)[0];
      e && (t.preventDefault(), (s = this.options.onDrop) == null || s.call(this, t, this.dragElement, e)), this._needClean = !0, setTimeout(() => {
        this._needClean && this._clean();
      }, 50);
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
    const e = this._state, { dragging: s = e.dragging, dropping: i = e.dropping } = t;
    s === e.dragging && i === e.dropping || (this._state = { dragging: s, dropping: i }, (r = this.options.onChange) == null || r.call(this, this._state, e));
  }
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: s } = this.options;
    s && u(e).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    this._needClean = !0;
    const { draggingClass: t, droppableClass: e, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = u(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), s && o.removeClass(s), this._$targets = void 0);
  }
}
Nn.NAME = "Draggable";
Nn.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Nh = '[moveable="true"]';
class Cs extends lt {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, handle: i, onMoveStart: r } = e, o = u(t.target), a = s === "self" ? this.$element : o.closest(s), l = a[0];
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
      var e, s;
      this._state && (this._raf && (cancelAnimationFrame(this._raf), this._raf = 0), this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state), (s = this.options.onMoveEnd) == null || s.call(this, t, this._state), this._clean());
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
    let s = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = u(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        s.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        s.strategy = this.options.move || "none";
      const d = c.position();
      s = u.extend(s, {
        target: e,
        startX: s.x,
        startY: s.y,
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
      const c = s.x - i.startX, d = s.y - i.startY;
      s = u.extend({}, i, s, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = s;
    const { strategy: r, target: o } = s, a = u(o);
    r === "position" ? a.css({ left: s.left, top: s.top }) : r === "transform" ? a.css("transform", `translate(${s.deltaX}px, ${s.deltaY}px)`) : r === "scroll" && (o.scrollLeft = s.scrollLeft - s.deltaX, o.scrollTop = s.scrollTop - s.deltaY), (l = this.options.onChange) == null || l.call(this, s, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: s } = this;
    if (s) {
      const i = u(s);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
Cs.NAME = "Moveable";
Cs.DEFAULT = {
  selector: Nh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const dr = class Sa extends lt {
  async afterInit() {
    const t = await Sa.loadModule();
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
dr.NAME = "Sortable";
dr.DEFAULT = {
  animation: 150
};
let $a = dr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let ur = class extends Mt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new $a(this.element, t));
  }
  getOrders() {
    var t;
    return ((t = this._sortable) == null ? void 0 : t.toArray()) || [];
  }
  _getItems(t) {
    const e = super._getItems(t), { orders: s } = this.state;
    if (s) {
      const i = [...e], r = s.reduce((o, a, l) => (o.set(a, l), o), /* @__PURE__ */ new Map());
      return i.sort((o, a) => {
        const l = r.get(o.key), c = r.get(a.key);
        return l === void 0 ? c === void 0 ? 0 : 1 : c === void 0 ? -1 : l - c;
      });
    }
    return e;
  }
  _getClassName(t) {
    return [super._getClassName(t), "sortable-list"];
  }
  _getSortableOptions() {
    const { sortable: t } = this.props;
    if (!t)
      return;
    const e = typeof t == "object" ? t : {};
    return {
      group: `SortableList.${this.gid}`,
      dataIdAttr: "z-key",
      draggable: ".list-item",
      ...e,
      onSort: (s) => {
        var r, o;
        const i = this.getOrders();
        this.setState({ orders: i }), (r = this.props.onSort) == null || r.call(this, s, i), (o = e.onSort) == null || o.call(this, s);
      }
    };
  }
};
ur.defaultProps = {
  sortable: !0
};
let jt = class extends tt {
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
jt.NAME = "tree";
jt.defaultProps = {
  ...tt.defaultProps,
  indent: 12
};
jt.defaultItemProps = {
  ...tt.defaultItemProps,
  innerComponent: "div"
};
jt.inheritNestedProps = [...tt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let ks = class extends kt {
  _getItem(t, e, s) {
    return jt.getTreeItem(t, super._getItem(t, e, s));
  }
};
ks.NAME = "tree";
ks.inheritNestedProps = [...kt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
ks.defaultItemProps = {
  ...kt.defaultProps,
  innerComponent: "div"
};
let Mn = class extends jt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new $a(this.element, t));
  }
  getOrders() {
    var t;
    return ((t = this._sortable) == null ? void 0 : t.toArray()) || [];
  }
  _getItems(t) {
    const e = super._getItems(t), { orders: s } = this.state;
    if (s) {
      const i = [...e], r = s.reduce((o, a, l) => (o.set(a, l), o), /* @__PURE__ */ new Map());
      return i.sort((o, a) => {
        const l = r.get(o.key), c = r.get(a.key);
        return l === void 0 ? c === void 0 ? 0 : 1 : c === void 0 ? -1 : l - c;
      });
    }
    return e;
  }
  _getClassName(t) {
    return [super._getClassName(t), "sortable-tree"];
  }
  _getSortableOptions() {
    const { sortable: t } = this.props;
    if (!t)
      return;
    const e = typeof t == "object" ? t : {};
    return {
      group: `SortableTree.${this.gid}`,
      dataIdAttr: "z-key",
      draggable: ".tree-item",
      ...e,
      onSort: (s) => {
        var r, o;
        const i = this.getOrders();
        this.setState({ orders: i }), (r = this.props.onSort) == null || r.call(this, s, i, this.props.parentKey), (o = e.onSort) == null || o.call(this, s);
      }
    };
  }
};
Mn.defaultProps = {
  sortable: !0
};
Mn.inheritNestedProps = [...jt.inheritNestedProps, "onSort", "sortable"];
class fr extends L {
}
fr.NAME = "SortableList";
fr.Component = ur;
fr.replace = ur.TAG;
class pr extends L {
}
pr.NAME = "SortableTree";
pr.Component = Mn;
pr.replace = Mn.TAG;
class Ta extends L {
}
Ta.NAME = "Avatar";
Ta.Component = vs;
oe(gh);
class Na extends L {
}
Na.NAME = "BtnGroup";
Na.Component = Ct;
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Ct
}, Symbol.toStringTag, { value: "Module" }));
oe(Mh);
const ci = Symbol("EVENT_PICK");
class mr extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let r = s === "open" ? !0 : void 0;
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
    const { state: e, className: s, disabled: i, readonly: r } = t, { open: o } = e;
    return x(
      "pick",
      s,
      o && "is-open focus",
      i && "disabled",
      r && "readonly"
    );
  }
  _getProps(t) {
    const { id: e, style: s, attrs: i } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: s,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: e, state: s } = t;
    return e ?? s.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o } = t;
    if (e)
      if (this._hasInput)
        u(`#${o}`).val(s);
      else
        return /* @__PURE__ */ p("input", { id: o, type: "hidden", className: "pick-value", name: e, value: s, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, s) => {
      if (s === ci)
        return;
      const i = e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && u(`#${e}`).trigger("change", ci), this._skipTriggerChange = !1);
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
const te = Math.min, ft = Math.max, en = Math.round, Is = Math.floor, ee = (n) => ({
  x: n,
  y: n
}), Eh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ih = {
  start: "end",
  end: "start"
};
function hi(n, t, e) {
  return ft(n, te(t, e));
}
function Le(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function se(n) {
  return n.split("-")[0];
}
function Re(n) {
  return n.split("-")[1];
}
function Ma(n) {
  return n === "x" ? "y" : "x";
}
function gr(n) {
  return n === "y" ? "height" : "width";
}
function xs(n) {
  return ["top", "bottom"].includes(se(n)) ? "y" : "x";
}
function _r(n) {
  return Ma(xs(n));
}
function Ah(n, t, e) {
  e === void 0 && (e = !1);
  const s = Re(n), i = _r(n), r = gr(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = sn(o)), [o, sn(o)];
}
function Dh(n) {
  const t = sn(n);
  return [di(n), t, di(t)];
}
function di(n) {
  return n.replace(/start|end/g, (t) => Ih[t]);
}
function Ph(n, t, e) {
  const s = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? i : s : t ? s : i;
    case "left":
    case "right":
      return t ? r : o;
    default:
      return [];
  }
}
function Lh(n, t, e, s) {
  const i = Re(n);
  let r = Ph(se(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(di)))), r;
}
function sn(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Eh[t]);
}
function Rh(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Ea(n) {
  return typeof n != "number" ? Rh(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function nn(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function ao(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = xs(t), o = _r(t), a = gr(o), l = se(t), c = r === "y", d = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, m = s[a] / 2 - i[a] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: d,
        y: s.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: s.y + s.height
      };
      break;
    case "right":
      f = {
        x: s.x + s.width,
        y: h
      };
      break;
    case "left":
      f = {
        x: s.x - i.width,
        y: h
      };
      break;
    default:
      f = {
        x: s.x,
        y: s.y
      };
  }
  switch (Re(t)) {
    case "start":
      f[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += m * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const Wh = async (n, t, e) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: n,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = ao(c, s, l), m = s, f = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: b
    } = a[_], {
      x: v,
      y: w,
      data: k,
      reset: $
    } = await b({
      x: d,
      y: h,
      initialPlacement: s,
      placement: m,
      strategy: i,
      middlewareData: f,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    if (d = v ?? d, h = w ?? h, f = {
      ...f,
      [y]: {
        ...f[y],
        ...k
      }
    }, $ && g <= 50) {
      g++, typeof $ == "object" && ($.placement && (m = $.placement), $.rects && (c = $.rects === !0 ? await o.getElementRects({
        reference: n,
        floating: t,
        strategy: i
      }) : $.rects), {
        x: d,
        y: h
      } = ao(c, m, l)), _ = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: m,
    strategy: i,
    middlewareData: f
  };
};
async function yr(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: r,
    rects: o,
    elements: a,
    strategy: l
  } = n, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: m = !1,
    padding: f = 0
  } = Le(t, n), g = Ea(f), y = a[m ? h === "floating" ? "reference" : "floating" : h], b = nn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), v = h === "floating" ? {
    ...o.floating,
    x: s,
    y: i
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), k = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = nn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: w,
    strategy: l
  }) : v);
  return {
    top: (b.top - $.top + g.top) / k.y,
    bottom: ($.bottom - b.bottom + g.bottom) / k.y,
    left: (b.left - $.left + g.left) / k.x,
    right: ($.right - b.right + g.right) / k.x
  };
}
const ui = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: s,
      placement: i,
      rects: r,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = Le(n, t) || {};
    if (c == null)
      return {};
    const h = Ea(d), m = {
      x: e,
      y: s
    }, f = _r(i), g = gr(f), _ = await o.getDimensions(c), y = f === "y", b = y ? "top" : "left", v = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", k = r.reference[g] + r.reference[f] - m[f] - r.floating[g], $ = m[f] - r.reference[f], C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let E = C ? C[w] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement(C))) && (E = a.floating[w] || r.floating[g]);
    const I = k / 2 - $ / 2, A = E / 2 - _[g] / 2 - 1, N = te(h[b], A), R = te(h[v], A), H = N, V = E - _[g] - R, M = E / 2 - _[g] / 2 + I, G = hi(H, M, V), gt = !l.arrow && Re(i) != null && M != G && r.reference[g] / 2 - (M < H ? N : R) - _[g] / 2 < 0, Et = gt ? M < H ? M - H : M - V : 0;
    return {
      [f]: m[f] + Et,
      data: {
        [f]: G,
        centerOffset: M - G - Et,
        ...gt && {
          alignmentOffset: Et
        }
      },
      reset: gt
    };
  }
}), En = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e, s;
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
        fallbackPlacements: m,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: _ = !0,
        ...y
      } = Le(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const b = se(i), v = se(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = m || (v || !_ ? [sn(a)] : Dh(a));
      !m && g !== "none" && k.push(...Lh(a, _, g, w));
      const $ = [a, ...k], C = await yr(t, y), E = [];
      let I = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (d && E.push(C[b]), h) {
        const H = Ah(i, o, w);
        E.push(C[H[0]], C[H[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: E
      }], !E.every((H) => H <= 0)) {
        var A, N;
        const H = (((A = r.flip) == null ? void 0 : A.index) || 0) + 1, V = $[H];
        if (V)
          return {
            data: {
              index: H,
              overflows: I
            },
            reset: {
              placement: V
            }
          };
        let M = (N = I.filter((G) => G.overflows[0] <= 0).sort((G, gt) => G.overflows[1] - gt.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!M)
          switch (f) {
            case "bestFit": {
              var R;
              const G = (R = I.map((gt) => [gt.placement, gt.overflows.filter((Et) => Et > 0).reduce((Et, Jl) => Et + Jl, 0)]).sort((gt, Et) => gt[1] - Et[1])[0]) == null ? void 0 : R[0];
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
async function Oh(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = se(e), a = Re(e), l = xs(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = Le(t, n);
  let {
    mainAxis: m,
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
    x: f * d,
    y: m * c
  } : {
    x: m * c,
    y: f * d
  };
}
const In = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s
      } = t, i = await Oh(t, n);
      return {
        x: e + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
}, is = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (y) => {
            let {
              x: b,
              y: v
            } = y;
            return {
              x: b,
              y: v
            };
          }
        },
        ...l
      } = Le(n, t), c = {
        x: e,
        y: s
      }, d = await yr(t, l), h = xs(se(i)), m = Ma(h);
      let f = c[m], g = c[h];
      if (r) {
        const y = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", v = f + d[y], w = f - d[b];
        f = hi(v, f, w);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", v = g + d[y], w = g - d[b];
        g = hi(v, g, w);
      }
      const _ = a.fn({
        ...t,
        [m]: f,
        [h]: g
      });
      return {
        ..._,
        data: {
          x: _.x - e,
          y: _.y - s
        }
      };
    }
  };
}, Ia = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(t) {
      const {
        placement: e,
        rects: s,
        platform: i,
        elements: r
      } = t, {
        apply: o = () => {
        },
        ...a
      } = Le(n, t), l = await yr(t, a), c = se(e), d = Re(e), h = xs(e) === "y", {
        width: m,
        height: f
      } = s.floating;
      let g, _;
      c === "top" || c === "bottom" ? (g = c, _ = d === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, g = d === "end" ? "top" : "bottom");
      const y = f - l[g], b = m - l[_], v = !t.middlewareData.shift;
      let w = y, k = b;
      if (h) {
        const C = m - l.left - l.right;
        k = d || v ? te(b, C) : C;
      } else {
        const C = f - l.top - l.bottom;
        w = d || v ? te(y, C) : C;
      }
      if (v && !d) {
        const C = ft(l.left, 0), E = ft(l.right, 0), I = ft(l.top, 0), A = ft(l.bottom, 0);
        h ? k = m - 2 * (C !== 0 || E !== 0 ? C + E : ft(l.left, l.right)) : w = f - 2 * (I !== 0 || A !== 0 ? I + A : ft(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: k,
        availableHeight: w
      });
      const $ = await i.getDimensions(r.floating);
      return m !== $.width || f !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ne(n) {
  return Aa(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function pt(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Kt(n) {
  var t;
  return (t = (Aa(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function Aa(n) {
  return n instanceof Node || n instanceof pt(n).Node;
}
function Ut(n) {
  return n instanceof Element || n instanceof pt(n).Element;
}
function Tt(n) {
  return n instanceof HTMLElement || n instanceof pt(n).HTMLElement;
}
function lo(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof pt(n).ShadowRoot;
}
function Ss(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = bt(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function Hh(n) {
  return ["table", "td", "th"].includes(ne(n));
}
function br(n) {
  const t = vr(), e = bt(n);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function Fh(n) {
  let t = Ie(n);
  for (; Tt(t) && !An(t); ) {
    if (br(t))
      return t;
    t = Ie(t);
  }
  return null;
}
function vr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function An(n) {
  return ["html", "body", "#document"].includes(ne(n));
}
function bt(n) {
  return pt(n).getComputedStyle(n);
}
function Dn(n) {
  return Ut(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Ie(n) {
  if (ne(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    lo(n) && n.host || // Fallback.
    Kt(n)
  );
  return lo(t) ? t.host : t;
}
function Da(n) {
  const t = Ie(n);
  return An(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Tt(t) && Ss(t) ? t : Da(t);
}
function rs(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Da(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = pt(i);
  return r ? t.concat(o, o.visualViewport || [], Ss(i) ? i : [], o.frameElement && e ? rs(o.frameElement) : []) : t.concat(i, rs(i, [], e));
}
function Pa(n) {
  const t = bt(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Tt(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = en(e) !== r || en(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function wr(n) {
  return Ut(n) ? n : n.contextElement;
}
function $e(n) {
  const t = wr(n);
  if (!Tt(t))
    return ee(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Pa(t);
  let o = (r ? en(e.width) : e.width) / s, a = (r ? en(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Bh = /* @__PURE__ */ ee(0);
function La(n) {
  const t = pt(n);
  return !vr() || !t.visualViewport ? Bh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zh(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== pt(n) ? !1 : t;
}
function pe(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = wr(n);
  let o = ee(1);
  t && (s ? Ut(s) && (o = $e(s)) : o = $e(n));
  const a = zh(r, e, s) ? La(r) : ee(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = pt(r), f = s && Ut(s) ? pt(s) : s;
    let g = m.frameElement;
    for (; g && s && f !== m; ) {
      const _ = $e(g), y = g.getBoundingClientRect(), b = bt(g), v = y.left + (g.clientLeft + parseFloat(b.paddingLeft)) * _.x, w = y.top + (g.clientTop + parseFloat(b.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += v, c += w, g = pt(g).frameElement;
    }
  }
  return nn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Uh(n) {
  let {
    rect: t,
    offsetParent: e,
    strategy: s
  } = n;
  const i = Tt(e), r = Kt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ee(1);
  const l = ee(0);
  if ((i || !i && s !== "fixed") && ((ne(e) !== "body" || Ss(r)) && (o = Dn(e)), Tt(e))) {
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
function Vh(n) {
  return Array.from(n.getClientRects());
}
function Ra(n) {
  return pe(Kt(n)).left + Dn(n).scrollLeft;
}
function jh(n) {
  const t = Kt(n), e = Dn(n), s = n.ownerDocument.body, i = ft(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = ft(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + Ra(n);
  const a = -e.scrollTop;
  return bt(s).direction === "rtl" && (o += ft(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Kh(n, t) {
  const e = pt(n), s = Kt(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = vr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Gh(n, t) {
  const e = pe(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = Tt(n) ? $e(n) : ee(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function co(n, t, e) {
  let s;
  if (t === "viewport")
    s = Kh(n, e);
  else if (t === "document")
    s = jh(Kt(n));
  else if (Ut(t))
    s = Gh(t, e);
  else {
    const i = La(n);
    s = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return nn(s);
}
function Wa(n, t) {
  const e = Ie(n);
  return e === t || !Ut(e) || An(e) ? !1 : bt(e).position === "fixed" || Wa(e, t);
}
function qh(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = rs(n, [], !1).filter((a) => Ut(a) && ne(a) !== "body"), i = null;
  const r = bt(n).position === "fixed";
  let o = r ? Ie(n) : n;
  for (; Ut(o) && !An(o); ) {
    const a = bt(o), l = br(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ss(o) && !l && Wa(n, o)) ? s = s.filter((d) => d !== o) : i = a, o = Ie(o);
  }
  return t.set(n, s), s;
}
function Yh(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? qh(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, d) => {
    const h = co(t, d, i);
    return c.top = ft(h.top, c.top), c.right = te(h.right, c.right), c.bottom = te(h.bottom, c.bottom), c.left = ft(h.left, c.left), c;
  }, co(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Xh(n) {
  return Pa(n);
}
function Zh(n, t, e) {
  const s = Tt(t), i = Kt(t), r = e === "fixed", o = pe(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ee(0);
  if (s || !s && !r)
    if ((ne(t) !== "body" || Ss(i)) && (a = Dn(t)), s) {
      const c = pe(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = Ra(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function ho(n, t) {
  return !Tt(n) || bt(n).position === "fixed" ? null : t ? t(n) : n.offsetParent;
}
function Oa(n, t) {
  const e = pt(n);
  if (!Tt(n))
    return e;
  let s = ho(n, t);
  for (; s && Hh(s) && bt(s).position === "static"; )
    s = ho(s, t);
  return s && (ne(s) === "html" || ne(s) === "body" && bt(s).position === "static" && !br(s)) ? e : s || Fh(n) || e;
}
const Jh = async function(n) {
  let {
    reference: t,
    floating: e,
    strategy: s
  } = n;
  const i = this.getOffsetParent || Oa, r = this.getDimensions;
  return {
    reference: Zh(t, await i(e), s),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Qh(n) {
  return bt(n).direction === "rtl";
}
const td = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uh,
  getDocumentElement: Kt,
  getClippingRect: Yh,
  getOffsetParent: Oa,
  getElementRects: Jh,
  getClientRects: Vh,
  getDimensions: Xh,
  getScale: $e,
  isElement: Ut,
  isRTL: Qh
};
function ed(n, t) {
  let e = null, s;
  const i = Kt(n);
  function r() {
    clearTimeout(s), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: m
    } = n.getBoundingClientRect();
    if (a || t(), !h || !m)
      return;
    const f = Is(d), g = Is(i.clientWidth - (c + h)), _ = Is(i.clientHeight - (d + m)), y = Is(c), v = {
      rootMargin: -f + "px " + -g + "px " + -_ + "px " + -y + "px",
      threshold: ft(0, te(1, l)) || 1
    };
    let w = !0;
    function k($) {
      const C = $[0].intersectionRatio;
      if (C !== l) {
        if (!w)
          return o();
        C ? o(!1, C) : s = setTimeout(() => {
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
    e.observe(n);
  }
  return o(!0), r;
}
function Cr(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = wr(n), d = i || r ? [...c ? rs(c) : [], ...rs(t)] : [];
  d.forEach((b) => {
    i && b.addEventListener("scroll", e, {
      passive: !0
    }), r && b.addEventListener("resize", e);
  });
  const h = c && a ? ed(c, e) : null;
  let m = -1, f = null;
  o && (f = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === c && f && (f.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      f && f.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let g, _ = l ? pe(n) : null;
  l && y();
  function y() {
    const b = pe(n);
    _ && (b.x !== _.x || b.y !== _.y || b.width !== _.width || b.height !== _.height) && e(), _ = b, g = requestAnimationFrame(y);
  }
  return e(), () => {
    d.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h && h(), f && f.disconnect(), f = null, l && cancelAnimationFrame(g);
  };
}
const Pn = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: td,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return Wh(n, t, {
    ...i,
    platform: r
  });
};
class Ha extends O {
  constructor(t) {
    super(t), this._ref = B(), this._handleDocClick = (e) => {
      const { state: { open: s }, id: i, togglePop: r } = this.props, o = u(e.target);
      s !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, s = u(t.target), i = s.closest("[data-pick-value]");
    if (i.length)
      return t.stopPropagation(), e(!1, { value: `${i.dataset("pickValue")}` });
    if (s.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: s } = t, { open: i } = s;
    return x(
      "pick-pop",
      e,
      i === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: e,
      style: s,
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    } = t, l = u.extend({
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    }, s);
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
      const e = u(t.container || "body");
      let s = e.find(".pick-container");
      s.length || (s = u("<div>").addClass("pick-container").appendTo(e)), this._container = s[0];
    }
    return this._container;
  }
  _render(t) {
    return /* @__PURE__ */ p("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: e, props: s } = this, { state: i } = s;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = Cr(e, t, () => {
      const { placement: r, width: o } = s;
      Pn(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? En() : null, is(), In(1)].filter(Boolean)
      }).then(({ x: a, y: l }) => {
        var c, d;
        u.isDetached(e) || (u(t).css({
          left: a,
          top: l,
          width: o === "100%" ? u(e).outerWidth() : void 0
        }), (d = (c = this.props).onLayout) == null || d.call(c, t));
      }), o === "100%" && u(t).css({ width: u(t).width() });
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), u(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, s;
    u(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, u(`#pick-pop-${this.props.id}`).remove(), (s = (e = this.props).beforeDestroy) == null || s.call(e);
  }
  render(t) {
    return ch(this._render(t), this._getContainer(t));
  }
}
var Fa = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Gt = (n, t, e) => (Fa(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Vn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ye = (n, t, e, s) => (Fa(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Hs, wt, Ge;
let ht = class extends O {
  constructor(t) {
    super(t), Vn(this, Hs, void 0), Vn(this, wt, 0), Vn(this, Ge, B()), this._trigger = B(), this.toggle = async (e, s) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      Gt(this, wt) && (clearTimeout(Gt(this, wt)), ye(this, wt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Xs(200, (a) => {
        ye(this, wt, a);
      }), ye(this, wt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Xs(50, (a) => {
        ye(this, wt, a);
      }), ye(this, wt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1
    }, ye(this, Hs, t.id ?? `_pick${Bt()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Gt(this, Hs);
  }
  get pop() {
    return Gt(this, Ge).current;
  }
  get value() {
    return this.state.value;
  }
  changeState(t, e) {
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
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
  _handleChange(t, e) {
    const { onChange: s } = this.props;
    s && s.call(this, t, e);
  }
  _handlePopToggle(t) {
    const { onPopShown: e, onPopHidden: s } = this.props;
    t && e ? e() : !t && s && s();
  }
  setValue(t, e) {
    if (e) {
      const s = this._trigger.current;
      s && (s._skipTriggerChange = t);
    }
    return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: s } = this.state, { open: i } = e;
    if (s === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, e) {
    const { open: s, value: i } = this.state, { open: r, value: o } = e;
    !!s != !!r && this._handlePopToggle(!!s), i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), Gt(this, wt) && clearTimeout(Gt(this, wt));
    const t = Gt(this, Ge).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ p(o, { ref: Gt(this, Ge), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ p(De, { children: [
      /* @__PURE__ */ p(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Hs = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
ht.Trigger = mr;
ht.Pop = Ha;
ht.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Ba = class extends ht {
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
    const { syncBackground: t, syncBorder: e, syncColor: s, syncValue: i } = this.props, r = this.state.value || "";
    if (t && u(t).css("backgroundColor", r), e && u(e).css("borderColor", r), s && u(s).css("color", r), i) {
      const o = u(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s } = t, { value: i } = e;
    return [
      s ? /* @__PURE__ */ p(K, { icon: s }, "icon") : /* @__PURE__ */ p("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = u.extend({
      color: e.value
    }, s.style), s.className = x("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, e) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ p("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ p("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ p("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ p("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ p("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ p(K, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ p("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ p(K, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Ba.defaultProps = {
  ...ht.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class za extends L {
}
za.NAME = "ColorPicker";
za.Component = Ba;
const os = 24 * 60 * 60 * 1e3, j = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), sd = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(j(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, $s = (n, t = /* @__PURE__ */ new Date()) => j(n).toDateString() === j(t).toDateString(), fi = (n, t = /* @__PURE__ */ new Date()) => j(n).getFullYear() === j(t).getFullYear(), Ua = (n, t = /* @__PURE__ */ new Date()) => (n = j(n), t = j(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), Ju = (n, t = /* @__PURE__ */ new Date()) => {
  n = j(n), t = j(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Qu = (n, t) => $s(j(t), n), tf = (n, t) => $s(j(t).getTime() - os, n), ef = (n, t) => $s(j(t).getTime() + os, n), st = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = j(n), Number.isNaN(n.getDay()))
    return e;
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", fi(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, sf = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = st(n, fi(n) ? s.month : s.full);
  if ($s(n, t))
    return i;
  const r = st(t, fi(n, t) ? Ua(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var ds, us;
class Va extends O {
  constructor() {
    super(...arguments);
    q(this, ds, B());
    q(this, us, (e, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    u(z(this, ds).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: s = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += s)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ p("div", { className: "time-picker-menu row", ref: z(this, ds), children: [
      /* @__PURE__ */ p(
        tt,
        {
          className: l,
          items: o,
          onClickItem: z(this, us).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ p(
        tt,
        {
          className: l,
          items: a,
          onClickItem: z(this, us).bind(this, "minute")
        }
      )
    ] });
  }
}
ds = new WeakMap(), us = new WeakMap();
var nd = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, As = (n, t, e) => (nd(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ds = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, pi, mi, gi, _i;
const uo = (n) => {
  if (!n)
    return;
  const t = j(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let ja = class extends ht {
  constructor(t) {
    super(t), Ds(this, pi, () => {
      this.toggle(!0);
    }), Ds(this, mi, (s) => {
      this.setTime(s.target.value);
    }), Ds(this, gi, (s, i) => {
      this.setTime({ [s]: i });
    }), Ds(this, _i, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = st(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled || this.props.readonly)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: c = +a, minute: d = +l } = t;
      e = `${c}:${d}`;
    }
    const s = uo(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? st(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(e);
    });
  }
  getTime() {
    const t = uo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ p("button", { type: "button", className: "btn size-sm square ghost", onClick: As(this, _i), children: /* @__PURE__ */ p("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ p("i", { class: "i-time" }) : h = /* @__PURE__ */ p(K, { icon: i })), [
      /* @__PURE__ */ p("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: As(this, pi), onChange: As(this, mi) }, "input"),
      h ? /* @__PURE__ */ p("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: x(s.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, s] = this.getTime() || [];
    return /* @__PURE__ */ p(Va, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: As(this, gi) });
  }
};
pi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
ja.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
J.addLang({
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
const id = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * os;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, fo = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => st(e, t)));
var un;
class rd extends O {
  constructor() {
    super(...arguments);
    q(this, un, (e) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(e) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = J.getLang("weekNames"),
      monthNames: o = J.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let C = 0; C < 7; C++) {
      const E = (i + C) % 7;
      h.push(/* @__PURE__ */ p("div", { className: x("col mini-calendar-day", { "is-weekend": E === 0 || E === 6 }), children: /* @__PURE__ */ p("div", { children: r ? r[E] : E }) }, C));
    }
    const { startTime: f, days: g, firstDay: _ } = id(a, l, i), y = _ + g * os;
    let b = f;
    const v = [], w = "yyyy-MM-dd", k = fo(c, w), $ = fo(d, w);
    for (; b <= y; ) {
      const C = [];
      for (let E = 0; E < 7; E++) {
        const I = new Date(b), A = I.getDate(), N = st(I, w), R = I.getDay(), H = Ua(I, _), V = x("col mini-calendar-day", {
          active: k.has(N),
          selected: $.has(N),
          "is-first": A === 1,
          "is-in-month": H,
          "is-out-month": !H,
          "is-today": $s(I, s),
          "is-weekend": R === 0 || R === 6
        });
        C.push(
          /* @__PURE__ */ p("div", { className: V, "data-date": N, children: /* @__PURE__ */ p("a", { className: m, onClick: z(this, un), children: A === 1 && o ? o[I.getMonth()] : I.getDate() }) }, N)
        ), b += os;
      }
      v.push(/* @__PURE__ */ p("div", { className: "row", children: C }, b));
    }
    return /* @__PURE__ */ p("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ p("div", { className: "row", children: h }),
      v
    ] });
  }
}
un = new WeakMap();
var fs, fn;
class po extends O {
  constructor() {
    super(...arguments);
    q(this, fs, B());
    q(this, fn, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (s(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(z(this, fs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: s, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ p(et, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: z(this, fn), children: c }, c));
    return /* @__PURE__ */ p("div", { className: s, ref: z(this, fs), children: a });
  }
}
fs = new WeakMap(), fn = new WeakMap();
var Te, ps, ms, gs, _s, ys, pn, Ga, mn, qa;
class Ka extends O {
  constructor(e) {
    super(e);
    q(this, pn);
    q(this, mn);
    q(this, Te, void 0);
    q(this, ps, void 0);
    q(this, ms, void 0);
    q(this, gs, void 0);
    q(this, _s, void 0);
    q(this, ys, void 0);
    rt(this, Te, B()), rt(this, ps, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), rt(this, ms, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), rt(this, gs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), rt(this, _s, (r) => {
      this.setState({ year: r, select: "day" });
    }), rt(this, ys, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = sd(l, r.substring(5).replace("+", ""))), r = st(l, "yyyy-MM-dd");
      }
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: s } = e, i = s ? new Date(s) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((s) => s.select === e ? { select: "day" } : { select: e });
  }
  componentDidMount() {
    u(z(this, Te).current).find(".active").scrollIntoView();
  }
  render(e, s) {
    const {
      date: i,
      yearText: r = J.getLang("yearFormat") || "{0}",
      weekNames: o = J.getLang("weekNames"),
      monthNames: a = J.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = s, f = m === "day", g = j(e.minDate || "1970-1-1"), _ = j(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ p("div", { className: "date-picker-menu row", ref: z(this, Te), onClick: z(this, ps), children: [
      Hn(this, pn, Ga).call(this, e),
      /* @__PURE__ */ p("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ p("div", { className: "row p-2", children: [
          /* @__PURE__ */ p(et, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Q(r, d) }),
          /* @__PURE__ */ p(et, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ p("div", { className: "flex-auto" }),
          f ? /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ p(et, { type: "ghost", size: "sm", square: !0, onClick: z(this, ms), children: /* @__PURE__ */ p("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ p(et, { type: "ghost", size: "sm", square: !0, onClick: z(this, gs), children: /* @__PURE__ */ p("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        f ? /* @__PURE__ */ p(
          rd,
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
        m === "year" ? /* @__PURE__ */ p(
          po,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: z(this, _s)
          }
        ) : m === "month" ? /* @__PURE__ */ p(
          po,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: z(this, ys)
          }
        ) : null,
        f ? Hn(this, mn, qa).call(this, e) : null
      ] })
    ] });
  }
}
Te = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), pn = new WeakSet(), Ga = function(e) {
  let { menu: s } = e;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ p(tt, { ...s })) : null;
}, mn = new WeakSet(), qa = function(e) {
  let { actions: s } = e;
  const { todayText: i, clearText: r } = e;
  return s || (s = [{ text: i, "data-set-date": st(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ p("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ p(at, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ p(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var od = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, jn = (n, t, e) => (od(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Kn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, yi, bi, vi;
let Ya = class extends ht {
  constructor(t) {
    super(t), Kn(this, yi, () => {
      this.toggle(!0);
    }), Kn(this, bi, (s) => {
      this.setDate(s.target.value);
    }), Kn(this, vi, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, readonly: l, format: c } = this.props;
      if (a || l)
        return;
      const d = j(s), h = !s || Number.isNaN(d.getDay());
      this.setState({ value: h ? o ? r : "" : st(d, c) }, () => {
        !h && i && i(s), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ p("button", { type: "button", className: "btn size-sm square ghost", onClick: jn(this, vi), children: /* @__PURE__ */ p("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ p("i", { class: "i-calendar" }) : h = /* @__PURE__ */ p(K, { icon: i })), [
      /* @__PURE__ */ p("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: jn(this, yi), onChange: jn(this, bi) }, "input"),
      h ? /* @__PURE__ */ p("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: x(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: x(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = J.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: f } = t;
    return /* @__PURE__ */ p(
      Ka,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: f ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      }
    );
  }
};
yi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
Ya.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Xa extends L {
}
Xa.NAME = "TimePicker";
Xa.Component = ja;
class Za extends L {
}
Za.NAME = "DatePicker";
Za.Component = Ya;
class ad extends O {
  render(t) {
    const { date: e, time: s } = t;
    return /* @__PURE__ */ p("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ p(Ka, { ...e }),
      /* @__PURE__ */ p("div", { className: "divider" }),
      /* @__PURE__ */ p(Va, { ...s })
    ] });
  }
}
var ld = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Be = (n, t, e) => (ld(n, t, "read from private field"), e ? e.call(n) : t.get(n)), ze = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, wi, Ci, ki, xi, Si;
const mo = (n) => {
  if (!n)
    return;
  const t = j(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ja = class extends ht {
  constructor(t) {
    super(t), ze(this, wi, () => {
      this.toggle(!0);
    }), ze(this, Ci, (o) => {
      this.setDate(o.target.value);
    }), ze(this, ki, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), ze(this, xi, (o, a) => {
      this.setTime({ [o]: a });
    }), ze(this, Si, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, readonly: m, joiner: f } = this.props;
      if (h || m)
        return;
      const g = j(o), _ = !o || Number.isNaN(g.getDay()), y = st(g, d), [, b = "00:00"] = this.state.value.split(f);
      this.setState({ value: _ ? c ? l : "" : `${y}${f}${b}` }, () => {
        !_ && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: s, timeFormat: i, joiner: r } = t;
    e && (this.state.value = st(e === "today" ? /* @__PURE__ */ new Date() : e, `${s}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: s, defaultValue: i, timeFormat: r, joiner: o, disabled: a, readonly: l, dateFormat: c } = this.props;
    if (a || l)
      return;
    let d = "";
    if (typeof t == "string")
      d = t;
    else {
      const [, f = "00:00"] = this.state.value.split(o), [g, _] = f.split(":"), { hour: y = +g, minute: b = +_ } = t;
      d = `${y}:${b}`;
    }
    const h = mo(d), m = this.state.value.split(o)[0] || st(/* @__PURE__ */ new Date(), c);
    this.setState({ value: h ? `${m}${o}${st(h, r)}` : s ? i : "" }, () => {
      !h && e && e(d);
    });
  }
  getTime() {
    const t = mo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Be(this, ki),
        children: /* @__PURE__ */ p("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ p("i", { class: "i-calendar" }) : h = /* @__PURE__ */ p(K, { icon: i })), [
      /* @__PURE__ */ p(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: s,
          value: l,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: Be(this, wi),
          onChange: (m) => {
            Be(this, Ci).call(this, m), Be(this, Si).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ p("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: x(s.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: x(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = J.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: f, minuteStep: g } = t, [_, y] = this.getTime() || [], b = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: f ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      },
      time: {
        hour: _,
        minute: y,
        minuteStep: g,
        onChange: Be(this, xi)
      }
    };
    return /* @__PURE__ */ p(ad, { ...b });
  }
};
wi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Ja.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Qa extends L {
}
Qa.NAME = "DatetimePicker";
Qa.Component = Ja;
const go = "show", _o = "in", cd = '[data-dismiss="modal"]', Gn = "modal-hide", We = class we extends lt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(cd) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
        const s = new ResizeObserver(() => {
          if (!this._shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        s.observe(e), this._rob = s;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize(), this.on("hidden", () => {
      we.getAll().some((t) => t.shown) || u("html").enableScroll();
    }), this.on("show", () => {
      u("html").disableScroll();
    }), this.shown && u("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    const { modalElement: e } = this, s = u(e);
    if (this._shown)
      return s.removeClass(Gn).css("z-index", `${we.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [Gn]: !1
    }, go, o).css({
      zIndex: `${we.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthersOnShow && this.options.hideOthersOnShow !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !s.closest(c.element).length && c.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      s.addClass(_o), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    u(this.modalElement).addClass(Gn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, u(this.modalElement).removeClass(_o), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(go), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthersOnShow && ((e = t.getAll().findLast((s) => s.shown && s !== this)) == null || e.show()), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = u(s);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const d = { width: "", height: "" };
      typeof e == "object" ? (d.width = e.width, d.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (d.width = e), i.css(d);
    }
    t = t ?? this.options.position ?? "fit";
    const r = s.clientWidth, o = s.clientHeight;
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
    (e = we.query(t, void 0, (s) => s.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = we.query(t, void 0, (s) => !s.shown)) == null || e.show();
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
let as = We;
u(window).on(`resize.${as.NAMESPACE}`, () => {
  as.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class tl extends O {
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
      title: s
    } = this.props;
    return _t(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ p("div", { className: x("modal-header", e), children: /* @__PURE__ */ p("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : _t(t) ? t : /* @__PURE__ */ p("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ p(at, { ...t }) : null,
      e ? /* @__PURE__ */ p("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ p("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? _t(t) ? t : /* @__PURE__ */ p("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return _t(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ p("div", { className: x("modal-footer", e), children: s ? /* @__PURE__ */ p(at, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ p("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ p("div", { className: x("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
tl.defaultProps = { closeBtn: !0 };
class el extends O {
  constructor() {
    super(...arguments), this._ref = B(), this.state = {}, this._watchIframeHeight = () => {
      var s, i;
      const t = (i = (s = this._ref.current) == null ? void 0 : s.contentWindow) == null ? void 0 : i.document;
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
    return /* @__PURE__ */ p(
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
el.defaultProps = {
  watchHeight: !0
};
var kr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, vt = (n, t, e) => (kr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ue = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, be = (n, t, e, s) => (kr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Fs = (n, t, e) => (kr(n, t, "access private method"), e), It, qe, At, rn, xr, Bs, $i;
function hd(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function dd(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
    url: s,
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
    body: e === "html" ? /* @__PURE__ */ p(fe, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function ud(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ p(el, { url: e, watchHeight: !o })
  };
}
const fd = {
  custom: hd,
  ajax: dd,
  iframe: ud
}, qn = "loading", sl = class Ce extends as {
  constructor() {
    super(...arguments), Ue(this, rn), Ue(this, Bs), Ue(this, It, void 0), Ue(this, qe, void 0), Ue(this, At, void 0);
  }
  get id() {
    return vt(this, qe);
  }
  get loading() {
    var t;
    return (t = vt(this, It)) == null ? void 0 : t.classList.contains(qn);
  }
  get shown() {
    var t;
    return !!((t = vt(this, It)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = vt(this, It);
    if (!t) {
      const { options: e } = this;
      let s = vt(this, qe);
      s || (s = e.id || `modal-${Bt()}`, be(this, qe, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      be(this, It, t);
    }
    return t;
  }
  get $emitter() {
    const t = vt(this, It);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destoryOnHide && this.on("hidden", () => {
      this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = vt(this, It);
    t && (u(t).removeData(this.constructor.KEY).remove(), be(this, It, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, At) && clearTimeout(vt(this, At));
    const { modalElement: t, options: e } = this, s = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = fd[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", o).addClass(qn), r && be(this, At, window.setTimeout(() => {
      be(this, At, 0), Fs(this, Bs, $i).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Fs(this, Bs, $i).call(this, this.options.failedTip) : l && typeof l == "object" && await Fs(this, rn, xr).call(this, l), vt(this, At) && (clearTimeout(vt(this, At)), be(this, At, 0)), this.layout(), await Xs(100), s.removeClass(qn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), r.key === void 0 && (r.key = r.id);
      const o = Ce.ensure(s, r), a = `${Ce.NAMESPACE}.open${Bt()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof s == "object" && s.html ? /* @__PURE__ */ p("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ p("div", { children: s });
    i ? m = /* @__PURE__ */ p("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ p("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ p("div", { className: x("modal-body", h.bodyClass), children: m });
    const f = [];
    (Array.isArray(o) ? o : [o]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = J.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let g;
    const _ = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: b }) => {
        const v = Ce.query(b.target, c);
        g = y.key, (a == null ? void 0 : a(y, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Ce.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      hideOthersOnShow: !1,
      custom: { footerActions: _, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: s, ...i } = t;
    return await Ce.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
It = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
rn = /* @__PURE__ */ new WeakSet();
xr = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return u(this.modalElement).html(n[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, ns(
      /* @__PURE__ */ p(tl, { ...n }),
      this.modalElement
    );
  });
};
Bs = /* @__PURE__ */ new WeakSet();
$i = function(n) {
  if (n)
    return Fs(this, rn, xr).call(this, {
      body: /* @__PURE__ */ p("div", { className: "modal-load-failed", children: n })
    });
};
sl.DEFAULT = {
  ...as.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let pd = sl;
const md = '[data-toggle="modal"]';
class Ti extends lt {
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
    } = this.options, s = e, i = this.$element.attr("href") || "";
    return s.type || (s.target || i[0] === "#" ? s.type = "static" : s.type = s.type || (s.url || i ? "ajax" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && i[0] !== "#" && (s.url = i), s.key === void 0 && (s.key = `${this._key}`), s;
  }
  _initModal() {
    const t = this._getBuilderOptions();
    let e = this._modal;
    if (e)
      return e.setOptions(t), e;
    if (t.type === "static") {
      const s = this._getStaticModalElement();
      if (!s)
        return;
      e = as.ensure(s, t);
    } else
      e = pd.ensure(this.container, t);
    return this._modal = e, e.on("destroyed", () => {
      this._modal = void 0;
    }), e;
  }
  _getStaticModalElement() {
    let t = this.options.target;
    if (!t) {
      const { $element: e } = this;
      if (e.is("a")) {
        const s = e.attr("href");
        s != null && s.startsWith("#") && (t = s);
      }
    }
    return this.container.querySelector(t || ".modal");
  }
}
Ti.NAME = "ModalTrigger";
u(document).on(`click${Ti.NAMESPACE}`, md, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = Ti.ensure(t);
    e && (e.show(), n.preventDefault());
  }
});
let Sr = class extends Mt {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
};
Sr.NAME = "nav";
Sr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class nl extends L {
}
nl.NAME = "Nav";
nl.Component = Sr;
function ls(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function gd({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = ls(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Q(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : Q(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ p(et, { type: e, ...a });
}
function _d({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ls(i, e);
  return s = typeof s == "function" ? s(a) : Q(s, a), /* @__PURE__ */ p(U, { ...o, children: [
    r,
    s
  ] });
}
function yd({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ p(et, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let f = d; f <= h; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const g = ls(s, f);
      i && (o.url = typeof i == "function" ? i(g) : Q(i, g)), m.push(/* @__PURE__ */ p(et, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let bd = class extends O {
  render(t) {
    const {
      id: e,
      popup: s,
      title: i,
      content: r,
      style: o,
      className: a,
      closeBtn: l,
      arrow: c,
      headingClass: d,
      titleClass: h,
      contentClass: m,
      arrowStyle: f,
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ p(D, { content: r }, "content");
    (m || i) && (_ = /* @__PURE__ */ p("div", { className: m, children: _ }, "content"));
    const y = [], b = l ? /* @__PURE__ */ p("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ p("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ p("div", { className: d, children: [
      i ? /* @__PURE__ */ p("div", { className: h, children: i }) : null,
      b
    ] }, "heading")) : y.push(b), y.push(_), c && y.push(/* @__PURE__ */ p("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), g ? y : /* @__PURE__ */ p("div", { id: e, className: x("popover", a, { popup: s }), style: o, children: y });
  }
};
class $r extends L {
}
$r.NAME = "PopoverPanel";
$r.Component = bd;
const vd = '[data-toggle="popover"]', yo = "show", bo = "in";
class yt extends lt {
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
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = u(i), { namespace: a } = this;
      t === "hover" ? o.on(`mouseenter${a}`, (l) => {
        const c = o.dataset("target");
        c && this.setOptions({ target: c }), this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), u(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: s } = t || {};
    if (s && (this._triggerEvent = s), e)
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
    if (r.addClass(yo), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(bo), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o } = this.options, a = u(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(bo), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(yo), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, s ? 200 : 0);
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
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = Cr(t, e, () => {
      const { animation: i, name: r = "popover" } = this.options;
      if (!this._virtual) {
        const o = {}, { width: a, height: l } = this.options;
        a && (o.width = typeof a == "function" ? a() : a === "100%" ? u(t).width() : a), l && (o.height = typeof l == "function" ? l() : l), Object.keys(o).length && u(e).css(o);
      }
      Pn(...this._getLayoutOptions()).then(({ x: o, y: a, middlewareData: l, placement: c, strategy: d }) => {
        if (t instanceof HTMLElement && Pe(t)) {
          this.hide(!0);
          return;
        }
        const h = {
          position: d,
          left: o,
          top: a
        }, m = u(e).css(h), f = c.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[f], _ = l.arrow;
        _ && m.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), i === !0 && m.attr("class", `${m.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", f);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new $r(e, s), r.on("inited", () => this.layout())), this._panel = r;
    } else
      s.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, d = l ? e.querySelector(".arrow") : null, h = d ? typeof l == "number" ? l : 5 : 0;
    return [t, e, {
      placement: s,
      strategy: c,
      middleware: [
        i ? En() : null,
        o ? is(typeof o == "object" ? o : void 0) : null,
        a || h ? In((a || 0) + h) : null,
        l ? ui({ element: d }) : null,
        r ? Ia({
          apply({ availableWidth: m, availableHeight: f, placement: g }) {
            u(e).css({ maxHeight: f - (["top", "bottom"].includes(g.split("-")[0]) ? h : 0) - 2, maxWidth: m - 2 });
          }
        }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: s,
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
      title: s,
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
    var t, e, s;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = u(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
  }
  static show(t) {
    const { element: e, event: s, ...i } = t, r = e || (s == null ? void 0 : s.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: s, ...i });
  }
}
yt.NAME = "Popover";
yt.Z_INDEX = 1700;
yt.MULTI_INSTANCE = !0;
yt.DEFAULT = {
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
u(document).on(`click${yt.NAMESPACE} mouseenter${yt.NAMESPACE}`, vd, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(yt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    yt.ensure(t, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const wd = '[data-toggle="dropdown"]';
class St extends yt {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label,.nested-toggle-icon,.item.is-nested").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: s, tree: i, onClickItem: r, relativeTarget: o = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      tree: i,
      onClickItem: r,
      nestedToggle: ".item",
      accordion: !0,
      relativeTarget: { target: o, event: this.options.triggerEvent, dropdown: this },
      popup: !0,
      ...s
    };
  }
  _getRenderOptions() {
    const t = super._getRenderOptions();
    return this._dynamic ? {
      ...t,
      contentClass: "",
      popup: !1,
      content: $t(Tr, this._getMenuOptions())
    } : t;
  }
}
St.NAME = "Dropdown";
St.DEFAULT = {
  ...yt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0
};
u(document).on(`click${St.NAMESPACE} mouseenter${St.NAMESPACE}`, wd, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(St.KEY)) {
    const e = t.data() || {}, s = e.trigger || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== s)
      return;
    const r = {
      ...e,
      show: !0,
      triggerEvent: n
    };
    if (!r.target && t.is("a")) {
      const o = t.attr("href");
      o && "#.".includes(o[0]) && (r.target = o);
    }
    !r.target && !r.items && !r.menu && (r.target = t.next(".dropdown-menu")), St.ensure(t, r), n.preventDefault();
  }
});
class Ln extends et {
  constructor() {
    super(...arguments), this._ref = B();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = u(this.triggerElement), a = St.get(this.triggerElement), l = {
      items: s,
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
    (t = St.get(this.triggerElement)) == null || t.destroy();
  }
  _getProps(t) {
    const { trigger: e, placement: s } = t;
    return {
      ...super._getProps(t),
      "data-toggle": "dropdown",
      "data-trigger": e,
      "data-placement": s,
      ref: this._ref
    };
  }
}
Ln.defaultProps = {
  caret: !0
};
Object.assign(Ct.ItemComponents, { dropdown: Ln });
Object.assign(at.ItemComponents, { dropdown: Ln });
class Tr extends kt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  layout() {
    var r;
    if (this.props.tree || this.isRoot)
      return;
    const t = (r = this.element) == null ? void 0 : r.parentElement, i = u(t).parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    !t || !i || Pn(i, t, {
      placement: this.props.placement,
      middleware: [En(), is(), In(1), Ia({
        apply({ availableWidth: o, availableHeight: a }) {
          u(t).css({ maxHeight: a - 2, maxWidth: o - 2 });
        }
      })]
    }).then(({ x: o, y: a }) => {
      u(t).css({
        position: "absolute",
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
  _getNestedProps(t, e, s, i) {
    return P(this.isHoverTrigger ? {
      "z-key": s.key,
      "z-hover": this.props.parentKey ?? "root",
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : {}, super._getNestedProps(t, e, s, i));
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return e;
    const s = u(t.target).closest(".dropdown-menu[z-key]");
    if (s.length) {
      const i = s.attr("z-key"), r = s.parent().parent().children(".dropdown-menu").children(`[z-key="${i}"]`);
      if (r.length)
        return super._getItemFromEvent(t, r[0]);
    }
  }
  _renderNestedList(t, e, s, i) {
    const r = super._renderNestedList(t, e, s, i);
    if (this.props.tree)
      return r;
    this._nestedContextMenu.push(r);
  }
  _getWrapClass(t) {
    return [super._getWrapClass(t), t.tree ? "is-tree" : this.isRoot ? "is-contextmenu" : "is-contextmenu popup"];
  }
  _renderWrapperFooter(t) {
    const e = super._renderWrapperFooter(t), s = this._nestedContextMenu;
    return this.props.tree || !s.length ? e : [e, ...s];
  }
  _renderNestedToggle(t, e) {
    if (this.props.tree)
      return super._renderNestedToggle(t, e);
    if (typeof e == "boolean")
      return /* @__PURE__ */ p("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ p("span", { className: "caret-right" }) });
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
Tr.defaultProps = {
  ...kt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Tr.inheritNestedProps = [...kt.inheritNestedProps, "container", "tree"];
function Cd({
  type: n,
  pagerInfo: t,
  linkCreator: e,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items || s.map((c) => {
    const d = { ...t, recPerPage: c };
    return {
      ...r,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(d) : Q(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : Q(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ p(Ln, { dropdown: i, ...o });
}
function kd({
  key: n,
  page: t,
  type: e,
  btnType: s,
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
    var y;
    h = Number((y = _.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, f = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = ls(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(y) : Q(l, y));
  }, g = ls(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : Q(l, g), /* @__PURE__ */ p("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ p("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ p(et, { type: s, ...d, onClick: f })
  ] });
}
let Rn = class extends at {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: s = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +s, recPerPage: +i, pageTotal: i ? Math.ceil(s / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? u.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && u.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
Rn.NAME = "pager";
Rn.ItemComponents = {
  ...at.ItemComponents,
  info: _d,
  link: gd,
  nav: yd,
  "size-menu": Cd,
  goto: kd
};
Rn.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class il extends L {
}
il.NAME = "Pager";
il.Component = Rn;
class rl extends L {
}
rl.NAME = "Pick";
rl.Component = ht;
var Ne, bs;
class ol extends O {
  constructor(e) {
    super(e);
    q(this, Ne, void 0);
    q(this, bs, void 0);
    this._searchInput = B(), this._measure = B(), this._changeTimer = 0, rt(this, Ne, (s) => {
      const i = s.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), s.stopPropagation();
    }), rt(this, bs, (s) => {
      var i, r;
      s.stopPropagation(), (r = (i = this.props).onClear) == null || r.call(i), this.setState({ search: "" }, () => this.focus());
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
      const { current: s } = this._measure, { current: i } = this._searchInput;
      if (s && i) {
        const r = u(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer);
  }
  render(e, s) {
    const { placeholder: i, inline: r } = e, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ p("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ p("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: z(this, bs), children: /* @__PURE__ */ p("span", { className: "close" }) }) : l = /* @__PURE__ */ p("span", { className: "magnifier" }), /* @__PURE__ */ p("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ p(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          autoComplete: "off",
          onChange: z(this, Ne),
          onInput: z(this, Ne),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ne = new WeakMap(), bs = new WeakMap();
class xd extends mr {
  constructor() {
    super(...arguments), this._search = B(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ p("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ p("span", { className: "text", children: /* @__PURE__ */ p(D, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ p("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ p("span", { className: "close" }) })
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
    const { state: { search: e }, searchHint: s } = t;
    return /* @__PURE__ */ p(
      ol,
      {
        inline: !0,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: s
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: s }, search: i, placeholder: r, children: o } = this.props, a = s && i;
    return !a && !e.length ? /* @__PURE__ */ p("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ p("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ p("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        u(`#${o}`).val(s);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ p("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((d) => /* @__PURE__ */ p("option", { value: d, children: d }, d)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: s } = this.props;
    u(`#${t}`).val(e.length ? e : [s]);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== s.value) {
      const a = u(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== s.value && a.trigger("change", ci), this._skipTriggerChange = !1;
    }
  }
}
class Sd extends mr {
  constructor() {
    super(...arguments), this._search = B(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  _getSearchPlaceholder() {
    const { searchHint: t, state: { value: e, selections: s } } = this.props;
    let i = t;
    if (i === void 0) {
      const r = s.find((o) => o.value === e);
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
    const { state: { search: e } } = t;
    return /* @__PURE__ */ p(
      ol,
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
    const { children: e, state: { selections: s = [], open: i }, placeholder: r, search: o, disabled: a, readonly: l, clearable: c } = t, [d] = s, h = i && o;
    let m;
    if (h)
      m = this._renderSearch(t);
    else if (d) {
      const { text: _ } = d;
      m = /* @__PURE__ */ p("span", { className: "picker-single-selection", title: typeof _ == "string" ? _ : void 0, children: /* @__PURE__ */ p(D, { content: _ }) }, "main");
    } else
      m = /* @__PURE__ */ p("span", { className: "picker-select-placeholder", children: r }, "main");
    const f = c && !h ? /* @__PURE__ */ p("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, readonly: l, onClick: this._handleDeselectClick, children: /* @__PURE__ */ p("span", { className: "close" }) }, "deselect") : null;
    return [
      m,
      e,
      f,
      h ? null : /* @__PURE__ */ p("span", { className: "caret" }, "caret")
    ];
  }
}
function al(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && al(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class $d extends Ha {
  constructor() {
    super(...arguments), this._menu = B(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, m) => {
        const f = this._getItem(h, m);
        return f && (f.active ? o = !0 : r = !1, d.push(f)), d;
      }, []));
      const a = r || s.has(t.value);
      t = {
        ...t,
        active: a,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: x(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      }, t.content && t.text && delete t.text;
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && (l.disabled && this._disabledSet.add(l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var s;
      return (s = this._renderItemCallback) == null ? void 0 : s.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const s = t.value, i = e.target;
      if (t.disabled || s === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((d) => this._disabledSet.has(d.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...al(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          u(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(s);
      else
        a(s), l(!1, { search: "" });
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
    const { menu: e, tree: s, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return P({
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
    }, e, s);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._disabledSet.clear();
    const s = this._getMenuProps(t);
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ p(ks, { hover: !0, ...s }) : /* @__PURE__ */ p(kt, { ...s });
  }
}
function zs(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && zs(s.items, e), e.set(String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let Nr = class extends ht {
  constructor(t) {
    super(t), this._updateTimer = 0, this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
    const { valueSplitter: e = ",", emptyValue: s = "" } = this.props;
    this._emptyValueSet = new Set(s.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = zs(i);
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
    const { items: e = [], searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else if (await Xs(s || 500), this._abort !== t || (r = await vn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = zs(r);
        i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: s } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || s.items !== i.items)) {
      await this.changeState({ loading: !0 });
      const a = await this.load();
      r.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, i.items = s.items, i.search = e.search;
    } else
      i.items && !e.open && s.cache === !1 && !Array.isArray(s.items) && (i.items = void 0);
    (t || i.value !== e.value) && (i.value = e.value);
    const o = r.items;
    s.required && !s.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
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
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
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
    return t.Trigger || (t.multiple ? xd : Sd);
  }
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], u.unique(e).reduce((s, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || s.push(i)), s), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    let s = this.formatValueList(t);
    if (s.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = zs(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    return super.setValue(i, e);
  }
};
Nr.defaultProps = {
  ...ht.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0
};
Nr.Pop = $d;
class ll extends L {
}
ll.NAME = "Picker";
ll.Component = Nr;
class cl extends lt {
  init() {
    const { trigger: t } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const e = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: s } = this.options;
      s === 0 ? e() : setTimeout(e, s);
    }, this.$element.addClass("z-50").on(t, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: e } = this.options, s = {
      placement: t,
      strategy: e,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && s.middleware.push(En()), r && s.middleware.push(r === !0 ? is() : is(r)), o && s.middleware.push(ui({ element: this.$arrow[0] })), a && s.middleware.push(In(a)), s;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = Cr(t, e, () => {
      Pn(t, e, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !ui || !o.arrow)
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
    const { strategy: s } = this.options;
    e.addClass(s), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
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
cl.NAME = "Popovers";
cl.DEFAULT = {
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
class hl extends L {
}
hl.NAME = "SearchBox";
hl.Component = rr;
function Yn(n, t) {
  const [e, s] = kn(n);
  return s === "%" ? t * e / 100 : e;
}
const vo = "is-sidebar-resizing", Xn = "has-sidebar-animation";
class dl extends lt {
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), s = e[0], i = e.width();
    this._container = s;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      gutterWidth: a = kn(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: m,
      minWidth: f = 0,
      maxWidth: g = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, y = _ ? u(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = Yn(m || t.width(), i), this._minWidth = Yn(f, i), this._maxWidth = Yn(g, i), this._width = (r ? Ot.get(this._storeID) : null) || this._defaultWidth, this._parent = y[0], y.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let b = t.find(".sidebar-gutter");
    b.length || (b = u('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = b, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (b.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), b.on("click", ".gutter-toggle", () => this.toggle())), c && b.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new Cs(b, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, y.addClass(vo).removeClass(Xn);
      },
      onMove: (v, w) => {
        const { deltaX: k } = w;
        Math.abs(k) < 10 || this.update(this._startWidth + k * (o === "left" ? 1 : -1));
      },
      onMoveEnd: () => {
        d && y.addClass(Xn), y.removeClass(vo);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      y.addClass(Xn);
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
    const { preserve: s, onResize: i, onToggle: r } = this.options, o = !this._width, a = !t;
    this._width = t, s && Ot.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
  }
  render() {
    const { side: t, width: e } = this, s = !e;
    this.$element.toggleClass("is-collapsed", s), u(this._parent).css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", s);
  }
}
dl.NAME = "Sidebar";
dl.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class ul extends L {
}
ul.NAME = "Toolbar";
ul.Component = at;
oe(_h);
const Td = '[data-toggle="tooltip"]';
class Rt extends yt {
  _getRenderOptions() {
    const { type: t, className: e, title: s, content: i } = this.options;
    let r = s, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: x("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Rt.NAME = "Tooltip";
Rt.DEFAULT = {
  ...yt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Rt.NAMESPACE} mouseenter${Rt.NAMESPACE}`, Td, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(Rt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Rt.ensure(t, { show: Rt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
class Mr extends L {
}
Mr.NAME = "Tree";
Mr.Component = jt;
Mr.replace = jt.TAG;
class fl extends L {
}
fl.NAME = "SearchTree";
fl.Component = ks;
class Er extends lt {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Uc(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), s) {
        const m = u(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = u(`<span class="text-primary">${e}</span>`);
    if (s) {
      const h = u(`<i class="icon icon-${s} mr-1"></i>`);
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
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: s } = this.options;
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    const { multiple: e, onSizeChange: s } = this.options;
    e || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const e = t.name.lastIndexOf(".");
    if (e === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const s = t.name.substring(0, e), i = t.name.substring(e);
    return this.renameDuplicatedFile(new File([t], `${s}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (!e)
      return t;
    const s = e.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: s, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (e) {
      const c = [];
      for (let d of t) {
        if (s && this.fileMap.size >= s)
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
    const s = this.fileMap.get(e);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((d) => this.dataTransfer.items.add(d)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var r, o;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), s && (t = this.fileMap.get(s) ?? t);
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
    const { useIconBtn: t, renameText: e, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Rt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Rt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${zc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: s, showSize: i } = this.options, r = u('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: s, duplicatedHint: i } = this.options, r = u('<div class="input-group input-rename-container hidden"></div>'), o = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
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
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
Er.NAME = "Upload";
Er.DEFAULT = {
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
class pl extends Er {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = u(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
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
    const s = e.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => s.includes(i.type));
  }
  createFileItem(t) {
    const e = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, e);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && e.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && e.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), e;
  }
  setImageUrl(t, e) {
    const s = new FileReader();
    s.onload = () => {
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})`, backgroundSize: "cover" }).prependTo(e);
    }, s.readAsDataURL(t);
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
    const { duplicatedHint: e } = this.options, s = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = s.closest(".file-item").find(".file-name");
        if (r.html() === s.val()) {
          s.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(e);
        this.renameFileItem(t, s.val()), s.addClass("hidden"), r.html(s.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && s.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = s.closest(".file-item").find(".file-name");
      if (i.html() === s.val()) {
        s.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(s.val()))
        return alert(e);
      this.renameFileItem(t, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
}
pl.NAME = "UploadImgs";
pl.DEFAULT = {
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
let ml = class extends U {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: s,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ p("div", { className: x("card-content", r), children: [
          e ? /* @__PURE__ */ p("div", { className: x("card-subtitle", s), children: /* @__PURE__ */ p(D, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ p(D, { content: i }, "extraContent") : null
        ] }, "content")
      ];
  }
  _renderHeading(t) {
    const {
      icon: e,
      prefix: s,
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
    if (!e && !s && !r && !c && !h)
      return;
    const f = a ? "a" : "span";
    return /* @__PURE__ */ p("div", { className: x("card-heading", m), children: [
      e ? /* @__PURE__ */ p(K, { className: "card-icon", icon: e }, "icon") : null,
      s ? /* @__PURE__ */ p(D, { className: x("card-prefix", i), content: s }, "prefix") : null,
      r ? /* @__PURE__ */ p(f, { className: x("card-title", o), href: a, ...l, children: /* @__PURE__ */ p(D, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ p(D, { className: x("card-suffix", d), content: c }, "suffix") : null,
      h ? /* @__PURE__ */ p(D, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: s
    } = t;
    if (e)
      return /* @__PURE__ */ p("div", { className: x("card-header", s), children: /* @__PURE__ */ p(D, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: s,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ p("div", { className: x("card-footer", s), children: [
        /* @__PURE__ */ p(D, { content: e }, "footer"),
        at.render(i, [t], { key: "foot-actions", relativeTarget: t, className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return at.render(t.actions, [t], { key: "actions", relativeTarget: t, className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const s = P({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ p(Mt, { ...s });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const s = typeof e == "function" ? e.call(this, t) : e;
      if (s)
        return s.className = x("item-avatar", s.className), /* @__PURE__ */ p(vs, { ...s }, "avatar");
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
class wo extends ml {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: s, innerComponent: i = "div" } = t, r = P({ className: x("card", s) }, e);
    return /* @__PURE__ */ p(i, { ...r, children: super._getChildren(t) });
  }
}
let Oe = class extends Mt {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: s } = t;
    return P({
      style: {
        "--list-gap": e ? Qt(e) : void 0,
        "--list-count-per-row": s
      }
    }, super._getProps(t));
  }
  _getRenderedItem(t, e) {
    return e;
  }
};
Oe.NAME = "card-list";
Oe.TAG = "div";
Oe.ItemComponents = {
  ...Mt.ItemComponents,
  default: wo,
  item: wo
};
Oe.defaultItemProps = {
  component: "div"
};
class Ir extends L {
}
Ir.NAME = "Card";
Ir.Component = ml;
Ir.replace = !0;
class gl extends L {
}
gl.NAME = "CardList";
gl.Component = Oe;
class Ar extends St {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Ar.NAME = "ContextMenu";
Ar.DEFAULT = {
  ...St.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function Nd(n) {
  const { left: t, top: e, id: s, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = n;
  return /* @__PURE__ */ p("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ p(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": s,
      children: [
        /* @__PURE__ */ p("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ p("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ p("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ p("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ p("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ p(fe, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ p("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const Zn = ([n, t, e, s], [i, r, o, a]) => !(n + e <= i || i + o <= n || t + s <= r || r + a <= t), Co = (n, t) => n[1] === t[1] ? n[0] - t[0] : n[1] - t[1], Ps = "Dashboard:Block.cache:";
let _l = class extends O {
  constructor(t) {
    super(t), this._ref = B(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: s } = this.state, i = {};
      let r = !1;
      s.forEach((o) => {
        const [a, l, c, d] = this._map.get(o.id), h = this._oldMap.get(o.id);
        (!h || h[0] !== a || h[1] !== l || h[2] !== c || h[3] !== d) && (r = !0, i[o.id] = { left: a, top: l, width: c, height: d }, this._oldMap.set(o.id, [a, l, c, d]));
      }), r && e(i);
    }, this._handleMenuClick = (e) => {
      const s = e.target.closest(".dashboard-block");
      if (!s)
        return;
      const i = s.dataset.id;
      if (!i)
        return;
      const r = this.getBlock(i);
      if (!r || !r.menu)
        return;
      const { menu: o } = r, { onClickMenu: a } = this.props;
      Ar.show({
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
    const { id: s } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === s);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
  }
  delete(t) {
    const { blocks: e } = this.state, s = e.findIndex((i) => i.id === t);
    s < 0 || (e.splice(s, 1), this.setState({ blocks: e }));
  }
  add(t) {
    t = Array.isArray(t) ? t : [t], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(t)] });
  }
  load(t, e) {
    const s = this.getBlock(t);
    !s || s.loading || (e = e || s.fetch, e && this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      try {
        const i = await u.fetch(e, [t, s], ({ url: r }) => ({ url: Q(r, s), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, s);
        });
      } catch (i) {
        const r = /* @__PURE__ */ p("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: r }, () => {
          var o;
          (o = this.props.onLoadFail) == null || o.call(this, i, s);
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
    for (const s of t) {
      if (s.loading)
        return;
      if (!s.visible && this._isVisible(s.id))
        return this.update({ id: s.id, visible: !0 });
      if (s.needLoad && s.visible) {
        e = s.id;
        break;
      }
    }
    e.length && requestAnimationFrame(() => this.load(e));
  }
  _isVisible(t) {
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? Ot.set(`${Ps}${s}:${t}`, e) : Ot.session.set(`${Ps}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? Ot.get(`${Ps}${e}:${t}`) : Ot.session.get(`${Ps}${t}`);
    if (s)
      return { html: s };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: s, grid: i } = this.props;
    return t.map((o) => {
      const {
        id: a,
        size: l,
        width: c,
        height: d,
        left: h = -1,
        top: m = -1,
        fetch: f = e,
        menu: g = s,
        content: _,
        ...y
      } = o, [b, v] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: b,
        height: v,
        left: Math.min(h, i - b),
        top: m,
        fetch: f,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!f,
        ...y
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: s } = this.props;
    return t = t ?? e, typeof t == "string" && (t = s[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    const { blocks: t, dragging: e, dropping: s } = this.state, i = this._map;
    if (i.size) {
      const a = [0, 0, 0, 0];
      t.sort((l, c) => Co(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && s && i.set(e, s), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => Co(a[1], l[1]));
    let o = 0;
    return r.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, o = Math.max(o, c + l[3]);
    }), s && (o = Math.max(o, s[1] + s[3])), { blocks: t, height: o };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new Nn(t, {
      selector: ".dashboard-block",
      target: () => t,
      beforeDrag: (e, s) => {
        const i = s.getBoundingClientRect();
        if (e.clientY - i.top > 48)
          return e.preventDefault(), !1;
        this._dragOffset = [e.clientX - i.left, e.clientY - i.top];
      },
      onDragStart: (e, s) => {
        const i = s.dataset.id;
        i !== void 0 && (this._dragging = this._map.get(i), this.setState({ dragging: i }));
      },
      onDragOver: (e) => {
        const { cellHeight: s, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / s)), m = this.state.dropping;
        m && m[0] === d && m[1] === h || this.setState({ dropping: [d, h, o, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: s } = this.state, i = { dragging: void 0, dropping: void 0 }, r = {};
        if (e && s) {
          const { blocks: o } = this.state;
          o.forEach((a, l) => {
            const [c, d] = e === a.id ? s : this._map.get(a.id);
            (a.left !== c || a.top !== d) && (o[l] = { ...a, left: c, top: d }, r[a.id] = { left: c, top: d });
          }), i.blocks = o;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: s, top: i, width: r, height: o } = t, a = [s, i, r, o];
    s < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: s } = this.state;
    if (s && Zn(t, s))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && Zn(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: s } = this.state;
    for (s && Zn(e, s) && (e[1] = s[1] + s[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [s, i, r, o] = e;
    let a = i;
    if (s >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [s, i, r, o]);
        return;
      }
      a = -1;
    }
    let l = s < 0 ? 0 : s, c = a < 0 ? 0 : a, d = !1;
    const h = this.props.grid;
    for (; !d; ) {
      if (this._canPlace([l, c, r, o])) {
        d = !0;
        break;
      }
      s < 0 ? (l += 1, l + r > h && (l = 0, c += 1)) : c += 1;
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
    const { blocks: t, height: e } = this._layout(), { cellHeight: s, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ p("div", { class: "dashboard", children: /* @__PURE__ */ p(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * s },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ p(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: s * r[1], width: `${100 * r[2] / i}%`, height: s * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: f } = l, [g, _, y, b] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ p(
              Nd,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: s * _,
                width: `${100 * y / i}%`,
                height: s * b,
                content: m,
                title: f,
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
_l.defaultProps = {
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
class yl extends L {
}
yl.NAME = "Dashboard";
yl.Component = _l;
var Xt, Zt;
class ko extends O {
  constructor(e) {
    super(e);
    q(this, Xt, void 0);
    q(this, Zt, void 0);
    rt(this, Xt, 0), rt(this, Zt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (z(this, Xt) && cancelAnimationFrame(z(this, Xt)), rt(this, Xt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), rt(this, Xt, 0);
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
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
      this.scroll(c * l / a), s.preventDefault();
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
    const { scrollSize: e, clientSize: s } = this.props;
    return Math.max(0, e - s);
  }
  get barSize() {
    const { clientSize: e, scrollSize: s, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (rt(this, Zt, typeof e == "string" ? document : e.current), z(this, Zt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), z(this, Zt) && z(this, Zt).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: s } = this.props;
    s && s(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: s,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: c,
      right: d
    } = this.props, { maxScrollPos: h, scrollPos: m } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return s === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ p(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ p(
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
Xt = new WeakMap(), Zt = new WeakMap();
const on = /* @__PURE__ */ new Map(), an = [];
function bl(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && on.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  on.set(e, n), t != null && t.buildIn && !an.includes(e) && an.push(e);
}
function it(n, t) {
  bl(n, t);
  const e = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...r } = n;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return e.plugin = n, e;
}
function vl(n) {
  return on.delete(n);
}
function Md(n) {
  if (typeof n == "string") {
    const t = on.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function wl(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Md(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && wl(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Ed(n = [], t = !0) {
  return t && an.length && n.unshift(...an), n != null && n.length ? wl([], n, /* @__PURE__ */ new Set()) : [];
}
function Cl() {
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
function Id(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function xo(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function Jn(n, t = !1) {
  if (!n.list.length)
    return;
  if (n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const s = n.width - n.totalWidth;
    if (!t && s > 0 || t && s !== 0) {
      const i = n.flexList.length ? n.flexList : n.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math[s < 0 ? "max" : "min"](s, Math.ceil(s * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let e = 0;
  n.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = e, e += s.realWidth;
  });
}
function Ad(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (v) => (typeof v == "function" && (v = v.call(n)), v = xo(v, 0), v < 1 && (v = Math.round(v * s)), v), d = {
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
  }, f = [], g = {};
  let _ = !1;
  const y = [], b = {};
  if (e.forEach((v) => {
    const { colTypes: w, onAddCol: k } = v;
    w && Object.entries(w).forEach(([$, C]) => {
      b[$] || (b[$] = []), b[$].push(C);
    }), k && y.push(k);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: w = "", name: k } = v, $ = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...v,
      type: w
    }, C = {
      name: k,
      type: w,
      setting: $,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, E = b[w];
    E && E.forEach((M) => {
      const G = typeof M == "function" ? M.call(n, $) : M;
      G && Object.assign($, G, v);
    });
    const { fixed: I, flex: A, minWidth: N = r, maxWidth: R = o } = $, H = xo($.width || i, i);
    C.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, C.width = Id(H < 1 ? Math.round(H * s) : H, N, R), y.forEach((M) => M.call(n, C)), f.push(C), g[C.name] = C;
    const V = I ? I === "left" ? h : m : d;
    V.list.push(C), V.totalWidth += C.width, V.width = V.totalWidth, C.flex && V.flexList.push(C), typeof $.order == "number" && (_ = !0);
  }), _) {
    const v = (w, k) => (w.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(v), h.list.sort(v), d.list.sort(v), m.list.sort(v);
  }
  return Jn(h, !0), Jn(m, !0), d.widthSetting = s - h.width - m.width, Jn(d), {
    list: f,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function Dd(n) {
  var V;
  const { col: t, className: e, height: s, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: d, left: h, top: m, ...f } = n, g = {
    left: h ?? t.left,
    top: m ?? i.top,
    width: d ?? t.realWidth,
    height: s,
    ...a
  }, { align: _, border: y } = t.setting, b = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...t.setting.cellStyle,
    ...o
  }, v = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", t.setting.cellClass], k = (V = i.data) == null ? void 0 : V[t.name], $ = [l ?? k ?? ""], C = r ? r($, { row: i, col: t, value: k }, n, $t) : $, E = [], I = [], A = {}, N = {};
  let R = "div";
  C == null || C.forEach((M) => {
    if (typeof M == "object" && M && !_t(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const G = M.outer ? E : I;
      M.html ? G.push(/* @__PURE__ */ p("div", { className: x("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? g : b, M.style), M.className && (M.outer ? v : w).push(M.className), M.children && G.push(M.children), M.attrs && Object.assign(M.outer ? A : N, M.attrs)), M.tagName && !M.outer && (R = M.tagName);
    } else
      I.push(M);
  });
  const H = R;
  return /* @__PURE__ */ p(
    "div",
    {
      className: x(v),
      style: g,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ p(H, { className: x(w), style: b, ...N, children: I }),
        E
      ]
    }
  );
}
function Qn({
  rows: n = [],
  cols: t,
  rowHeight: e,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: d = Dd,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(n) ? n : [n], f = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ p(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ p("div", { className: "dtable-cells-container", style: { left: -s, top: -i + f }, children: m.reduce((y, b, v) => {
        const w = t.length;
        return t.forEach((k, $) => {
          y.push(
            /* @__PURE__ */ p(
              d,
              {
                className: x(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  $ ? "" : "is-first-in-row",
                  $ === w - 1 ? "is-last-in-row" : "",
                  v ? "" : "is-first-row",
                  v === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: b,
                top: b.top - f,
                height: e,
                onRenderCell: h
              },
              `${b.index}:${k.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function kl({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: d,
  onRenderCell: h,
  children: m
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ p(
    Qn,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: h
    },
    "left"
  ));
  let g = null;
  r.list.length && (g = /* @__PURE__ */ p(
    Qn,
    {
      rows: s,
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
  return o.list.length && (_ = /* @__PURE__ */ p(
    Qn,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: h
    },
    "right"
  )), /* @__PURE__ */ p(
    "div",
    {
      className: x("dtable-block", c),
      style: { ...d, top: n, height: t },
      children: [
        f,
        g,
        _,
        m
      ]
    }
  );
}
var Dr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, T = (n, t, e) => (Dr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), W = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Y = (n, t, e, s) => (Dr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), dt = (n, t, e) => (Dr(n, t, "access private method"), e), ke, Ye, Ae, Wt, ce, ot, Pt, Dt, Xe, Us, ln, cs, qt, Ze, Je, Ni, xl, Mi, Sl, Ei, $l, Ii, Tl, Vs, Ai, Wn, cn, Di, Pi, Li, Ri, Qe, js, hn, Pr, Lr, Nl, Wi, Ml;
let Rr = class extends O {
  constructor(t) {
    super(t), W(this, Ni), W(this, Mi), W(this, Ei), W(this, Ii), W(this, Vs), W(this, Qe), W(this, hn), W(this, Lr), W(this, Wi), this.ref = B(), W(this, ke, 0), W(this, Ye, void 0), W(this, Ae, !1), W(this, Wt, void 0), W(this, ce, void 0), W(this, ot, []), W(this, Pt, void 0), W(this, Dt, /* @__PURE__ */ new Map()), W(this, Xe, {}), W(this, Us, void 0), W(this, ln, []), W(this, cs, { in: !1 }), this.updateLayout = () => {
      T(this, ke) && cancelAnimationFrame(T(this, ke)), Y(this, ke, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, ke, 0);
      }));
    }, W(this, qt, (e, s) => {
      s = s || e.type;
      const i = T(this, Dt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), W(this, Ze, (e) => {
      T(this, qt).call(this, e, `window_${e.type}`);
    }), W(this, Je, (e) => {
      T(this, qt).call(this, e, `document_${e.type}`);
    }), W(this, Wn, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, s, i, r)), T(this, ot).forEach((c) => {
        c[l] && (e = c[l].call(this, e, s, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, s, i, r)), e;
    }), W(this, cn, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), W(this, Di, (e) => {
      var a, l, c;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), T(this, ot).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of T(this, ot))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), W(this, Pi, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), W(this, Li, (e) => {
      const s = u(e.target).closest(".dtable-cell");
      if (!s.length)
        return dt(this, Qe, js).call(this, !1);
      dt(this, Qe, js).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), W(this, Ri, () => {
      dt(this, Qe, js).call(this, !1);
    }), Y(this, Ye, t.id ?? `dtable-${Bt()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, ce, Object.freeze(Ed(t.plugins))), T(this, ce).forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(T(this, Xe), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), dt(this, hn, Pr).call(this), T(this, ot).forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, Pt)) == null ? void 0 : t.options) || T(this, Wt) || Cl();
  }
  get plugins() {
    return T(this, ot);
  }
  get layout() {
    return T(this, Pt);
  }
  get id() {
    return T(this, Ye);
  }
  get data() {
    return T(this, Xe);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, cs);
  }
  componentWillReceiveProps() {
    Y(this, Wt, void 0);
  }
  componentDidMount() {
    T(this, Ae) ? this.forceUpdate() : dt(this, Vs, Ai).call(this), this.on("click", T(this, Di)), this.on("keydown", T(this, Pi));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", T(this, Li)), this.on("mouseleave", T(this, Ri)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        Y(this, Us, r);
        const { parent: o } = this;
        s.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : u(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      s.includes("window") && this.on("window_resize", this.updateLayout);
    }
    T(this, ot).forEach((s) => {
      var r;
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, a]) => {
        a && this.on(o, a);
      }), (r = s.onMounted) == null || r.call(this));
    });
  }
  componentDidUpdate() {
    dt(this, Vs, Ai).call(this), T(this, ot).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, Us)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of T(this, Dt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), T(this, Ze)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), T(this, Je)) : t.removeEventListener(s, T(this, qt));
    T(this, ot).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), T(this, ce).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Xe, {}), T(this, Dt).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = T(this, Dt).get(t);
    i ? i.push(e) : (T(this, Dt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, Ze)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, Je)) : (r = this.element) == null || r.addEventListener(t, T(this, qt)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = T(this, Dt).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (T(this, Dt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, Ze)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, Je)) : (o = this.element) == null || o.removeEventListener(t, T(this, qt)));
  }
  emitCustomEvent(t, e) {
    T(this, qt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var s;
      this._noAnimation = void 0, (s = this.element) == null || s.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: m } = t;
    if (d === "up" || d === "down")
      m = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = s + (d === "right" ? 1 : -1) * c;
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
      typeof g == "number" && (h = s + g), typeof _ == "number" && (m = i + _);
    }
    const f = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== s && (f.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - o)), m !== i && (f.scrollTop = m)), Object.keys(f).length ? (this.setState(f, () => {
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
    const { rows: e, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : s[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!T(this, Wt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Pt, void 0);
    else if (s === "options") {
      if (Y(this, Wt, void 0), !T(this, Pt))
        return;
      Y(this, Pt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = u(e).closest(".dtable-cell");
    if (!s.length)
      return;
    const i = s.attr("data-row"), r = s.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: s[0],
        colName: r,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, s) {
    return J(T(this, ln), t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = dt(this, Wi, Ml).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, m = ["dtable", e, {
      "dtable-hover-row": s,
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
      T(this, ot).forEach((_) => {
        var b;
        const y = (b = _.beforeRender) == null ? void 0 : b.call(this, t);
        y && (t = y);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push(
        t.className,
        g ? "dtable-is-empty" : "",
        {
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && f.push(...t.children), g && d ? (delete h.height, f.push(
        /* @__PURE__ */ p("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ p(D, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (f.push(
        dt(this, Ni, xl).call(this, t),
        dt(this, Mi, Sl).call(this, t),
        dt(this, Ei, $l).call(this, t)
      ), t.scrollable && f.push(dt(this, Ii, Tl).call(this, t))), T(this, ot).forEach((_) => {
        var b;
        const y = (b = _.onRender) == null ? void 0 : b.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && m.push(y.className), y.children && f.push(y.children));
      });
    }
    return /* @__PURE__ */ p(
      "div",
      {
        id: T(this, Ye),
        className: x(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: f
      }
    );
  }
};
ke = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
ce = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
cs = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakSet();
xl = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ p(
      kl,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: T(this, Wn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ p(
    pa,
    {
      className: "dtable-header",
      style: { height: s },
      renders: o,
      generateArgs: [n],
      generatorThis: this,
      children: r
    },
    "header"
  );
};
Mi = /* @__PURE__ */ new WeakSet();
Sl = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ p(
    kl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: T(this, Wn),
      children: l
    },
    "body"
  );
};
Ei = /* @__PURE__ */ new WeakSet();
$l = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ p(
    pa,
    {
      className: "dtable-footer",
      style: { height: n.footerHeight, top: n.rowsHeight + n.headerHeight },
      renders: e,
      generateArgs: [n],
      generatorThis: this,
      generators: n.footerGenerators,
      children: n.footerChildren
    },
    "footer"
  );
};
Ii = /* @__PURE__ */ new WeakSet();
Tl = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = n, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ p(
      ko,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: T(this, cn),
        left: s,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ p("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: d + a } }),
    /* @__PURE__ */ p("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ p(
      ko,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: T(this, cn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Vs = /* @__PURE__ */ new WeakSet();
Ai = function() {
  var n;
  Y(this, Ae, !1), T(this, ot).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (n = this.options.afterRender) == null || n.call(this);
};
Wn = /* @__PURE__ */ new WeakMap();
cn = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
Pi = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakSet();
js = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = u(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = T(this, cs);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), Y(this, cs, i);
};
hn = /* @__PURE__ */ new WeakSet();
Pr = function() {
  if (T(this, Wt))
    return !1;
  const t = { ...Cl(), ...T(this, ce).reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return Y(this, Wt, t), Y(this, ot, T(this, ce).reduce((e, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(s)), e;
  }, [])), Y(this, ln, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Lr = /* @__PURE__ */ new WeakSet();
Nl = function() {
  var I, A;
  const { plugins: n } = this;
  let t = T(this, Wt);
  const e = {
    flex: /* @__PURE__ */ p("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ p("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((N) => {
    var H;
    const R = (H = N.beforeLayout) == null ? void 0 : H.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(e, N.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: N } = this;
    if (N)
      i = N.clientWidth;
    else {
      Y(this, Ae, !0);
      return;
    }
  }
  const r = Ad(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (N, R, H) => {
    var M, G;
    const V = { data: H ?? { [a]: N }, id: N, index: c.length, top: 0 };
    if (H || (V.lazy = !0), c.push(V), ((M = t.onAddRow) == null ? void 0 : M.call(this, V, R)) !== !1) {
      for (const gt of n)
        if (((G = gt.onAddRow) == null ? void 0 : G.call(this, V, R)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let N = 0; N < o; N++)
      d(`${N}`, N);
  else
    Array.isArray(o) && o.forEach((N, R) => {
      typeof N == "object" ? d(`${N[a] ?? ""}`, R, N) : d(`${N ?? ""}`, R);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const N = t.onAddRows.call(this, h, r);
    N && (h = N);
  }
  for (const N of n) {
    const R = (I = N.onAddRows) == null ? void 0 : I.call(this, h, r);
    R && (h = R);
  }
  h.forEach((N, R) => {
    m[N.id] = N, N.index = R, N.top = N.index * l;
  });
  const { header: f, footer: g } = t, _ = f ? t.headerHeight || l : 0, y = g ? t.footerHeight || l : 0;
  let b = t.height, v = 0;
  const w = h.length * l, k = _ + y + w;
  if (typeof b == "function" && (b = b.call(this, k)), b === "auto")
    v = k;
  else if (typeof b == "object")
    v = Math.min(b.max, Math.max(b.min, k));
  else if (b === "100%") {
    const { parent: N } = this;
    if (N)
      v = N.clientHeight;
    else {
      v = 0, Y(this, Ae, !0);
      return;
    }
  } else
    v = b;
  const $ = v - _ - y, C = {
    options: t,
    allRows: c,
    width: i,
    height: v,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: w,
    header: f,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: y,
    cols: r
  }, E = (A = t.onLayout) == null ? void 0 : A.call(this, C);
  E && Object.assign(C, E), n.forEach((N) => {
    if (N.onLayout) {
      const R = N.onLayout.call(this, C);
      R && Object.assign(C, R);
    }
  }), Y(this, Pt, C);
};
Wi = /* @__PURE__ */ new WeakSet();
Ml = function() {
  (dt(this, hn, Pr).call(this) || !T(this, Pt)) && dt(this, Lr, Nl).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  const { cols: { center: t } } = n;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let s = 0;
  t.list.forEach((g) => {
    g.left = s, s += g.realWidth, g.visible = g.left + g.realWidth >= e && g.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), m = [], { rowDataGetter: f } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
    _.lazy && f && (_.data = f([_.id])[0], _.lazy = !1), m.push(_);
  }
  return Object.assign(n, {
    visibleRows: m,
    scrollTop: l,
    scrollLeft: e,
    headerChildren: [],
    bodyChildren: [],
    footerChildren: [],
    children: [],
    className: "",
    scrollable: !0
  }), n;
};
Rr.addPlugin = bl;
Rr.removePlugin = vl;
class El extends O {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ p("div", { class: x("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": s,
      ...c
    }, children: [
      /* @__PURE__ */ p("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
El.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Il(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ p("a", { href: Q(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Wr(n, t, e) {
  var s;
  if (n != null)
    return e = e ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : Q(n, e);
}
function Al(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), st(e, n, s ?? e))) : s ?? e;
}
function Dl(n, t) {
  const { link: e } = t.col.setting, s = Il(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Pl(n, t) {
  const { format: e } = t.col.setting;
  return e && (n[0] = Wr(e, t, n[0])), n;
}
function Ll(n, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? n[0] = e(n[0], t) : typeof e == "object" && e && (n[0] = e[n[0]] ?? n[0]), n;
}
function Rl(n, t, e) {
  const s = {};
  return typeof n == "function" ? Object.assign(s, n(e)) : Object.keys(n).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[n[i]];
    r !== void 0 && (s[i] = r);
  }), Object.keys(s).length && t.push({ style: s }), t;
}
function Wl(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = Al(s, t, n[0], i), n;
}
function Oi(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Wr(s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const Pd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return Oi(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ p(
          El,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ p(
          Tn,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: d,
            text: !0
          }
        ), n;
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
  onRenderCell(n, t) {
    const { formatDate: e, html: s, hint: i, styleMap: r } = t.col.setting;
    if (e && (n = Wl(n, t, e)), n = Ll(n, t), n = Pl(n, t), s ? n = Oi(n, t) : n = Dl(n, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = Q(i, t.row.data) : typeof n[0] == "string" && (o = n[0]), n.push({ attrs: { title: o } });
    }
    return r && (n = Rl(r, n, t)), n;
  }
}, Ld = it(Pd, { buildIn: !0 }), Rd = {
  default: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return s === i ? 0 : s == null ? 1 : String(s).localeCompare(String(i));
  },
  date: (n, t, e) => {
    var r, o;
    const s = j(((r = n.data) == null ? void 0 : r[e.name]) ?? 0), i = j(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return s.getTime() - i.getTime();
  },
  number: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(s) - Number.parseFloat(i);
  }
}, Wd = {
  name: "sort",
  defaultOptions: { sort: !0 },
  when: (n) => !!n.sort,
  onCreate() {
    const { sortBy: n } = this.options;
    n && (this.state.sortBy = Array.isArray(n) ? n : [n]);
  },
  onAddRows(n, t) {
    const { sortBy: e } = this.state;
    if (!e || !e.length)
      return;
    const { sort: s } = this.options, i = {
      ...Rd,
      ...typeof s == "function" ? { default: s } : typeof s == "object" ? s : {}
    };
    return [...n].sort((r, o) => {
      for (const { name: a, order: l } of e) {
        const c = t.map[a];
        if (!c)
          continue;
        let d = c.setting.sort;
        if (d === !0 ? d = i.default : typeof d == "string" && (d = i[d]), !d)
          continue;
        const h = d.call(this, r, o, c);
        if (h)
          return l === "asc" ? h : -h;
      }
      return 0;
    });
  },
  onHeaderCellClick(n, t) {
    const e = this.getColInfo(t.colName);
    if (!e || !e.setting.sort)
      return;
    const { sortBy: s = [] } = this.state, i = s.findIndex((a) => a.name === e.name), { multiSort: r } = this.options;
    let o = "asc";
    if (i >= 0) {
      const a = s[i].order;
      a === "asc" ? o = "desc" : a === "desc" && (o = "none"), r && s.splice(i, 1);
    }
    r || (s.length = 0), this.update({ dirtyType: "layout", state: { sortBy: [{ name: t.colName, order: o }, ...s].filter((a) => a.order !== "none") } });
  },
  onRenderHeaderCell(n, t) {
    var l;
    const { col: e } = t, { sortBy: s } = this.state;
    if (!e.setting.sort)
      return n;
    const o = ((l = s == null ? void 0 : s.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ p("div", { className: `dtable-sort dtable-sort-${o}` });
    return n.push(
      { outer: !0, attrs: { "data-sort": o } },
      a
    ), n;
  }
}, Od = it(Wd, { buildIn: !0 }), Hd = {
  html: { component: fe }
}, Fd = {
  name: "custom",
  onRenderCell(n, t) {
    const { col: e } = t;
    let { custom: s } = e.setting;
    if (typeof s == "function" && (s = s.call(this, t)), !s)
      return n;
    const i = Array.isArray(s) ? s : [s], { customMap: r } = this.options;
    return i.forEach((o) => {
      let a;
      typeof o == "string" ? a = o.startsWith("<") ? {
        component: fe,
        props: { html: Q(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Hd[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: f } = m;
          f && u.extend(d, typeof f == "function" ? f.call(this, t) : f), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ p(h, { ...d }) };
    }), n;
  }
}, Bd = it(Fd);
function zd(n, t, e = !1) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!s[c] === d || (d ? s[c] = !0 : delete s[c], i[c] = d);
  };
  if (n === void 0 ? (t === void 0 && (t = !Ol.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    o(c, t ?? !s[c]);
  })), Object.keys(i).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, i, s);
    c && Object.keys(c).forEach((d) => {
      c[d] ? s[d] = !0 : delete s[d];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function Ud(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Ol() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === n;
}
function Vd() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function jd(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function So(n, t, e = !1) {
  return /* @__PURE__ */ p(Sn, { className: "dtable-checkbox", checked: n, disabled: e });
}
const $o = 'input[type="checkbox"],.dtable-checkbox', Kd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: So
  },
  when: (n) => !!n.checkable,
  options(n) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? n.checkable = t : n.checkable === "auto" && (n.checkable = !!n.cols.some((e) => e.checkbox)), n;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: zd,
    isRowChecked: Ud,
    isAllRowChecked: Ol,
    getChecks: Vd,
    toggleCheckable: jd
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
      const n = this.isAllRowChecked();
      return [
        /* @__PURE__ */ p("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: So(n) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ p(D, { className: "dtable-check-info", content: s.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ p("div", { className: "dtable-check-info", children: r.join(", ") })
      ];
    }
  },
  onRenderCell(n, { row: t, col: e }) {
    var c;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return n;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, s) : o, l = this.isRowChecked(s);
    if (a) {
      const d = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, s, r === "disabled");
      n.push(
        d,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && n.push({ outer: !0, className: "is-checked" }), n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var o;
    const { id: s } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      n.push(l, { outer: !0, className: "has-checkbox" });
    }
    return n;
  },
  onHeaderCellClick(n) {
    if (this.data.disableCheckable)
      return;
    const t = n.target;
    if (!t)
      return;
    const e = t.closest($o);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = u(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest($o).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Gd = it(Kd), qd = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new ws(`DTable:${this.id}`) };
  }
}, Yd = it(qd);
var Hl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Hl || {});
function dn(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = dn.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? dn.call(this, t.parent).level + 1 : 0, t;
}
function Xd(n) {
  return n !== void 0 ? dn.call(this, n) : this.data.nestedMap;
}
function Zd(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Fl.call(this)), t) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (e[r] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      const o = s.get(r);
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
function Fl() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Bl(n, t = 0, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Bl(n, t, o.children, s + 1)));
  }
  return t;
}
function zl(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, zl(n, r, e, s);
  }), i;
}
function Ul(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && Ul(n, r.parent, e, s, i);
}
const Ls = "dtable-nested-toggle", Jd = {
  name: "nested",
  plugins: [Yd],
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, t) {
      const { nestedMap: e } = this.data, s = e.get(n.id), i = e.get(t.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(n, t, e) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const s = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = zl(this, i, r, s);
        o != null && o.parent && Ul(this, o.parent, r, s, e);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((t) => t.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  state() {
    return { nestedState: {} };
  },
  methods: {
    getNestedInfo: Xd,
    toggleRow: Zd,
    isAllCollapsed: Fl,
    getNestedRowInfo: dn
  },
  onCreate() {
    let { defaultNestedState: n } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (n = t);
    }
    this.state.nestedState = n || {};
  },
  beforeLayout() {
    this.data.nestedMap.clear();
  },
  onAddRow(n) {
    var i, r;
    const { nestedMap: t } = this.data, e = String((i = n.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(n.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = e === "0" ? void 0 : e, (r = n.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(n.id, s), e) {
      let o = t.get(e);
      o || (o = {
        state: "",
        level: 0
      }, t.set(e, o)), o.children || (o.children = []), o.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Bl(this.data.nestedMap), n.sort((t, e) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), n;
  },
  onRenderCell(n, { col: t, row: e }) {
    var a;
    const { id: s, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && n.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ p("a", { className: `${Ls} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ p("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ p("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ p("a", { className: `${Ls} state`, children: /* @__PURE__ */ p("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${Ls}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${Ls}`)))
      return this.toggleRow(t), !0;
  }
}, Qd = it(Jd);
function ti(n, { row: t, col: e }) {
  const { data: s } = t, i = s ? s[e.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarCodeKey: a, avatarNameKey: l = `${e.name}Name` } = e.setting;
  let { avatarProps: c = {} } = e.setting;
  typeof c == "function" && (c = c(e, t));
  const d = (s ? s[l] : i) || n[0], h = {
    size: "xs",
    src: s ? s[o] : void 0,
    text: d,
    code: a ? s ? s[a] : void 0 : i,
    ...c,
    className: x(r, c.className, "flex-none")
  };
  if (n[0] = /* @__PURE__ */ p(vs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, f = typeof m == "function" ? m(e, t) : m;
    n[0] = /* @__PURE__ */ p("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      n[0],
      /* @__PURE__ */ p("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ p("span", { children: d })
    ] }));
  return n;
}
const tu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ti
    },
    avatarBtn: {
      onRenderCell: ti
    },
    avatarName: {
      onRenderCell: ti
    }
  }
}, eu = it(tu, { buildIn: !0 }), su = {
  name: "sort-type",
  onRenderHeaderCell(n, t) {
    const { col: e } = t;
    if (e.setting.sort !== void 0)
      return n;
    let { sortType: s } = e.setting;
    const { sortLink: i, orderBy: r } = this.options;
    if (r && r[e.name] !== void 0 && (s = r[e.name]), s) {
      const o = s === !0 ? "none" : s, a = /* @__PURE__ */ p("div", { className: `dtable-sort dtable-sort-${o}` });
      n.push(
        { outer: !0, attrs: { "data-sort": o } }
      );
      let { sortLink: l = i } = e.setting;
      if (l) {
        const c = o === "asc" ? "desc" : "asc";
        typeof l == "function" && (l = l.call(this, e, c, o)), typeof l == "string" && (l = { url: l });
        const { url: d, ...h } = l;
        n[0] = /* @__PURE__ */ p("a", { className: "dtable-sort-link", href: Q(d, { ...e.setting, sortType: c }), ...h, children: [
          n[0],
          a
        ] });
      } else
        n.push(a);
    }
    return n;
  }
}, nu = it(su, { buildIn: !0 }), ei = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === n[e - 1].setting.group || (t.setting.border = "left");
  });
}, iu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    ei(t.left.list), ei(t.center.list), ei(t.right.list);
  }
}, ru = it(iu);
const ou = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data() {
    return { headerGroups: /* @__PURE__ */ new Map() };
  },
  when: (n) => !!n.headerGroup,
  beforeLayout(n) {
    const { headerGroups: t } = this.data;
    t.clear();
    const { cols: e } = n;
    if (!(e != null && e.length))
      return;
    const s = {};
    return e.forEach((i, r) => {
      const { headerGroup: o } = i;
      if (!o) {
        s[i.name] = r;
        return;
      }
      let a = t.get(o);
      a ? a.cols.push(i.name) : (a = { cols: [i.name], index: r }, t.set(o, a)), s[i.name] = a.index + a.cols.length / e.length;
    }), e.sort((i, r) => s[i.name] - s[r.name]), {
      headerHeight: !n.headerHeight && n.rowHeight ? n.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(n, { col: t }) {
    const { headerGroup: e } = t.setting;
    if (e) {
      const s = this.data.headerGroups.get(e), i = this.layout.headerHeight / 2;
      if (t.name === s.cols[0]) {
        const r = s.cols.reduce((a, l) => {
          var c;
          return a + (((c = this.getColInfo(l)) == null ? void 0 : c.realWidth) ?? 0);
        }, 0), o = {
          height: i - 1,
          width: r - 1
        };
        n.push(/* @__PURE__ */ p("div", { class: "dtable-header-group", style: o, children: e }));
      }
      n.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return n;
  }
}, au = it(ou), lu = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: s } = this.data, { rows: i, cols: r, rowHeight: o } = n;
    e.clear(), s.clear();
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((m, f) => {
        const { index: g } = m, _ = `C${g}R${h}`;
        if (s.has(_))
          return;
        const y = t.call(this, { row: c, col: m });
        if (!y)
          return;
        const b = Math.min(y.colSpan || 1, l.length - f), v = Math.min(y.rowSpan || 1, i.length - d);
        if (b <= 1 && v <= 1)
          return;
        let w = 0;
        for (let k = 0; k < b; k++) {
          w += l[f + k].realWidth;
          for (let $ = 0; $ < v; $++) {
            const C = `C${g + k}R${h + $}`;
            C !== _ && s.add(C);
          }
        }
        e.set(_, {
          colSpan: b,
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
  onRenderCell(n, { row: t, col: e }) {
    const s = `C${e.index}R${t.index}`;
    if (this.data.overlayedCellSet.has(s))
      n.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(s);
      i && n.push({
        outer: !0,
        style: {
          width: i.width,
          height: i.height
        }
      });
    }
    return n;
  }
}, cu = it(lu), hu = {
  name: "mousemove",
  events: {
    mousemove(n) {
      this.data.mmRafID && (cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = 0), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", n);
      }), n.preventDefault();
    },
    document_mousemove(n) {
      this.data.dmmRafID && (cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = 0), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", n);
      }), n.preventDefault();
    }
  }
}, Vl = it(hu);
function du() {
  var v, w;
  const { scrollToMouse: n } = this.data;
  if (!n)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: s } = n;
  if (!t || Date.now() - e < s)
    return;
  const i = (w = (v = this.ref.current) == null ? void 0 : v.querySelector(".dtable-body")) == null ? void 0 : w.getBoundingClientRect();
  if (!i)
    return;
  const { maxStep: r, detectPadding: o, speed: a, side: l } = n, { x: c, y: d } = t, { left: h, top: m, right: f, bottom: g } = i;
  let _ = 0;
  c < h - o ? _ = -Math.max(r, h - o - c) : c > f - o && (_ = Math.max(r, c - (f - o)));
  let y = 0;
  if (d < m - o ? y = -Math.max(r, m - o - d) : d > g - o && (y = Math.max(r, d - (g - o))), l) {
    const k = new Set((Array.isArray(l) ? l : [l]).reduce(($, C) => (C === "x" ? $.push("left", "right") : C === "y" ? $.push("top", "bottom") : $.push(C), $), []));
    (!k.has("left") && _ < 0 || !k.has("right") && _ > 0) && (_ = 0), (!k.has("top") && y < 0 || !k.has("bottom") && y > 0) && (y = 0);
  }
  const b = {};
  _ !== 0 && (b.scrollLeft = this.layout.scrollLeft + a * _), y !== 0 && (b.scrollTop = this.layout.scrollTop + a * y), this.scroll(b);
}
const uu = {
  name: "autoscroll",
  plugins: [Vl],
  events: {
    document_mousemovesmooth(n) {
      if (!this.data.scrollToMouse)
        return;
      const { clientX: t, clientY: e } = n;
      this.data.scrollToMouse.position = { x: t, y: e };
    }
  },
  methods: {
    scrollTo({ col: n, row: t, extra: e = 2 }) {
      const s = this.getColInfo(n), i = this.getRowInfo(t);
      if (!s && !i)
        return !1;
      const r = {}, { layout: o } = this;
      if (s) {
        const { scrollLeft: a, cols: l } = o, c = s.left + s.realWidth;
        s.left < a ? r.scrollLeft = s.left - e : c > l.center.width + a && (r.scrollLeft = c - l.center.width + e);
      }
      if (i) {
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, d = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : d > c + a && (r.scrollTop = d - c + e);
      }
      return this.scroll(r), !0;
    },
    startScrollToMouse(n) {
      const t = {
        interval: 60,
        speed: 0.2,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...n
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(du.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, fu = it(uu);
const pu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(n, t) {
      return this.options.nested ? this.getNestedRowInfo(n.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (n) => !!n.sortable,
  plugins: [Vl, fu],
  events: {
    mousedown(n) {
      var r;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!u(n.target).closest(t).length)
        return;
      const s = this.getPointerInfo(n);
      if (!s || s.rowID === "HEADER")
        return;
      const i = this.getRowInfo(s.rowID);
      !i || ((r = this.options.onSortStart) == null ? void 0 : r.call(this, i, n)) === !1 || (this.data.sortableInfo = { from: i, offset: n.clientY - s.cellElement.getBoundingClientRect().top });
    },
    document_mouseup(n) {
      var e;
      if (!this.data.sortableInfo)
        return;
      this.stopScrollToMouse();
      const t = this.getSortingState(n);
      if (t) {
        let s;
        const { sortingFrom: i, sortingTo: r, sortingSide: o } = t;
        if (r && o) {
          const a = [...this.layout.rows], l = i.index, c = r.index, d = a.splice(l, 1);
          a.splice(c, 0, d[0]), s = {};
          const h = [];
          a.forEach(({ id: m }, f) => {
            s[m] = f, h.push(m);
          }), ((e = this.options.onSort) == null ? void 0 : e.call(this, i, r, o, h)) === !1 && (s = void 0);
        }
        this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: u.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, s ? { rowOrders: s } : null)
        }, () => {
          var a;
          (a = this.options.onSortEnd) == null || a.call(this, i, r, o), setTimeout(() => {
            this.data.disableCheckable = void 0;
          }, 50);
        });
      }
      this.data.sortableInfo = void 0;
    },
    document_mousemovesmooth(n) {
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      const e = this.getSortingState(n);
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(n) {
      var C;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: s, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, d = l.height - s - i, h = n.clientX - l.left, m = n.clientY - l.top - s;
      if (h < 0 || h > c || m < 0 || m > d)
        return e.state;
      const f = m + o, g = r.find((E) => E.top <= f && E.top + a > f);
      if (!g)
        return e.state;
      const _ = e.from, y = g.id !== _.id ? g.id : void 0, b = y ? this.getRowInfo(y) : void 0, v = m, w = f < g.top + a / 2 ? "before" : "after";
      return b && ((C = this.options.canSortTo) == null ? void 0 : C.call(this, _, b, w)) !== !1 ? {
        sortingFrom: _,
        sortingPos: v,
        sortingTo: b,
        sortingSide: w
      } : {
        sortingFrom: _,
        sortingPos: v,
        sortingTo: void 0,
        sortingSide: void 0
      };
    }
  },
  onAddRows(n) {
    const { rowOrders: t } = this.state;
    if (t)
      return n = n.sort((e, s) => t[e.id] - t[s.id]), n;
  },
  beforeRender(n) {
    const { sortingFrom: t } = this.state, { visibleRows: e } = n;
    t && (e.some((s) => s.id === t.id) || (n.visibleRows = [...e, t]), n.className = x(n.className, "dtable-sorting"));
  },
  onRenderCell(n, t, e) {
    const { sortingFrom: s, sortingPos: i, sortingTo: r, sortingSide: o } = this.state;
    if (!s)
      return n;
    const a = t.row, l = {}, c = [];
    if (s.id === a.id)
      l.top = i - this.data.sortableInfo.offset + ((e.top ?? a.top) - (a.top - this.layout.scrollTop)), c.push("is-sorting-from");
    else if (r) {
      const d = r.id === a.id;
      d && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), s.index > a.index && (d && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : s.index < a.index && (d && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && n.push({
      outer: !0,
      style: l,
      className: c
    }), n;
  }
}, mu = it(pu), gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Hl,
  avatar: eu,
  cellspan: cu,
  checkable: Gd,
  custom: Bd,
  group: ru,
  headerGroup: au,
  nested: Qd,
  renderDatetime: Al,
  renderDatetimeCell: Wl,
  renderFormat: Wr,
  renderFormatCell: Pl,
  renderHtmlCell: Oi,
  renderLink: Il,
  renderLinkCell: Dl,
  renderMapCell: Ll,
  renderStyleMapCell: Rl,
  rich: Ld,
  sort: Od,
  sortType: nu,
  sortable: mu
}, Symbol.toStringTag, { value: "Module" }));
class Ts extends L {
}
Ts.NAME = "DTable";
Ts.Component = Rr;
Ts.definePlugin = it;
Ts.removePlugin = vl;
Ts.plugins = gu;
class Or extends U {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: s,
      name: i
    } = t;
    return P(super._getProps(t), {
      style: {
        "--kanban-col-color": s,
        "--kanban-col-width": Qt(e)
      },
      "z-col": i
    });
  }
  _getChildren(t) {
    const {
      prefix: e,
      prefixClass: s,
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
      /* @__PURE__ */ p("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ p("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ p(K, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ p("span", { className: x("as-prefix", s), children: /* @__PURE__ */ p(D, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ p("span", { className: x("as-title", r), children: /* @__PURE__ */ p(D, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ p("span", { className: x("as-subtitle", a), children: /* @__PURE__ */ p(D, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ p(K, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        at.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ p("div", { className: "kanban-header-sub-cols", children: h.map((m, f) => /* @__PURE__ */ p(Or, { index: f, ...m }, m.name)) }, "subs") : null
    ];
  }
}
function _u(n) {
  const { cols: t } = n;
  return /* @__PURE__ */ p("div", { className: "kanban-header", children: [
    /* @__PURE__ */ p("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ p("div", { className: "kanban-header-cols", children: t.map((e, s) => /* @__PURE__ */ p(Or, { index: s, ...e }, e.name)) }, "cols")
  ] });
}
class jl extends O {
  constructor() {
    super(...arguments), this._listRef = B(), this._renderItem = (t) => {
      const { itemRender: e, lane: s, name: i } = this.props, r = e.call(this, { item: t, lane: s, col: i });
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
      width: s,
      color: i,
      content: r,
      contentClass: o,
      itemRender: a,
      itemGap: l,
      watchSize: c,
      name: d,
      lane: h,
      itemCountPerRow: m
    } = t, f = {
      "--kanban-col-color": i,
      "--kanban-col-width": Qt(s)
    };
    return /* @__PURE__ */ p("div", { className: "kanban-lane-col", style: f, "z-lane": h, "z-col": d, children: [
      r ? /* @__PURE__ */ p("div", { className: x("kanban-col-content", o), children: /* @__PURE__ */ p(D, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ p("div", { className: "kanban-items scrollbar-thin scrollbar-hover", children: /* @__PURE__ */ p(
        Oe,
        {
          forwardRef: c ? this._listRef : void 0,
          itemProps: { className: "kanban-item card-list-item" },
          items: e,
          itemRender: a ? this._renderItem : void 0,
          countPerRow: m,
          gap: l
        },
        "list"
      ) })
    ] });
  }
}
jl.defaultProps = {
  watchSize: !0
};
class yu extends U {
  _getClassName(t) {
    const { className: e, index: s, maxHeight: i, height: r } = t;
    return ["kanban-lane", e, { "is-first": !s, "is-auto-height": !i && (!r || r === "auto") }];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: s,
      maxHeight: i,
      color: r,
      name: o
    } = t;
    return P(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: Qt(e),
        minHeight: Qt(s),
        maxHeight: Qt(i)
      },
      "z-lane": o
    });
  }
  _renderCol(t, e, s, i) {
    return /* @__PURE__ */ p(jl, { itemRender: s, lane: t, items: i[e.name], ...e }, e.name);
  }
  _getChildren(t) {
    const {
      name: e,
      title: s,
      titleClass: i,
      actions: r,
      cols: o,
      items: a = {},
      itemRender: l
    } = t;
    return [
      /* @__PURE__ */ p("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ p("div", { className: x("kanban-lane-title", i), children: /* @__PURE__ */ p(D, { content: s }) }, "title"),
        at.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ p("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function bu(n) {
  const { lanes: t, cols: e, items: s = {}, itemRender: i } = n;
  return /* @__PURE__ */ p("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ p(yu, { index: o, cols: e, items: s[r.name], itemRender: i, ...r }, r.name)) });
}
const ut = 12, vu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function To(n, t) {
  return t === "top" ? { x: n.x + n.width / 2, y: n.y } : t === "left" ? { x: n.x, y: n.y + n.height / 2 } : t === "right" ? { x: n.x + n.width, y: n.y + n.height / 2 } : { x: n.x + n.width / 2, y: n.y + n.height };
}
function wu(n, t) {
  return (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y);
}
function Cu(n, t, e, s) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = s ? [s] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = To(n, c), m = To(t, d), f = wu(h, m) * (vu[c] === d ? 1 : 2);
      f < o && (o = f, e = c, s = d, a = h, l = m);
    });
  }), {
    fromSide: e,
    toSide: s,
    fromPos: a,
    toPos: l
  };
}
function ku(n, t) {
  return { x: (n.x + t.x) / 2, y: (n.y + t.y) / 2 };
}
function Kl(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    width: Math.abs(n.x - t.x),
    height: Math.abs(n.y - t.y)
  };
}
function No(n, t, e) {
  const s = {
    id: `marker-${t}-${e}-${n}`,
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
  return n === "arrow" ? t === "start" ? s.path.d = "M6,0 L6,6 L0,3 z" : s.path.d = "M0,0 L0,6 L6,3 z" : n === "dot" ? s.path.d = "M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0" : n === "square" ? s.path.d = "M0,0 L0,6 L6,6 L6,0 z" : n === "diamond" && (s.path.d = "M3,0 L6,3 L3,6 L0,3 z"), s;
}
function xu(n, t, e, s, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = Kl(n, t), d = ut - o, h = ut - a;
  if (i === "curve") {
    const m = l * 0.7, f = c * 0.7, g = r * 2, _ = {
      a1x: n.x + (e === "left" ? -g : e === "right" ? g : 0),
      a1y: n.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      ax: n.x + (e === "left" ? -m : e === "right" ? m : 0),
      ay: n.y + (e === "top" ? -f : e === "bottom" ? f : 0),
      bx: t.x + (s === "left" ? -(m - g) : s === "right" ? m - g : 0),
      by: t.y + (s === "top" ? -(f - g) : s === "bottom" ? f - g : 0),
      b1x: t.x + (s === "left" ? -g : s === "right" ? g : 0),
      b1y: t.y + (s === "top" ? -g : s === "bottom" ? g : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const m = ku(n, t), f = l / 2, g = c / 2, _ = {
      ax: n.x + (e === "left" ? -f : e === "right" ? f : 0),
      ay: n.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (s === "left" ? -f : s === "right" ? f : 0),
      by: t.y + (s === "top" ? -g : s === "bottom" ? g : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.ax + d} ${_.ay + h} L ${m.x + d} ${m.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${n.x + d} ${n.y + h} L ${t.x + d} ${t.y + h}`;
}
function Su(n) {
  const { fromRect: t, toRect: e } = n, s = `${n.from}-${n.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = Cu(i, r), d = Kl(l, c), { x: h, y: m, width: f, height: g } = d;
  l.x += ut - h, l.y += ut - m, c.x += ut - h, c.y += ut - m;
  const {
    weight: _ = 1,
    fromPoint: y,
    toPoint: b = "arrow"
  } = n, v = {
    left: `${0 - ut}px`,
    top: `${0 - ut}px`,
    width: `${f + 2 * ut}px`,
    height: `${g + 2 * ut}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": y && y !== "none" ? `url(#marker-start-${s}-${y})` : void 0,
    "marker-end": b && b !== "none" ? `url(#marker-end-${s}-${b})` : void 0,
    d: xu(l, c, o, a, n.shape, _)
  }, k = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, $ = {
    width: f + 2 * ut,
    height: g + 2 * ut
  }, C = [];
  return n.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : n.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), y && y !== "none" && C.push(No(y, "start", s)), b && b !== "none" && C.push(No(b, "end", s)), {
    x: h,
    y: m,
    width: f,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: v,
    svgPathProps: w,
    svgPathBackProps: k,
    svgProps: $,
    markers: C,
    padding: ut
  };
}
class Gl extends O {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: s, textSize: i, color: r, onDelete: o } = t, { hover: a } = e, { x: l, y: c, padding: d, width: h, height: m, svgProps: f, markers: g, svgPathProps: _, svgPathBackProps: y, fromPos: b } = Su(t);
    return /* @__PURE__ */ p("div", { className: x("kanban-link", a ? "is-hover" : ""), style: { left: l, top: c, width: h, height: m, color: r }, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ p("svg", { ...f, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        g.length ? /* @__PURE__ */ p("defs", { children: g.map(({ path: v, id: w, ...k }) => /* @__PURE__ */ p("marker", { ...k, id: w, children: /* @__PURE__ */ p("path", { ...v }) }, w)) }) : null,
        /* @__PURE__ */ p("path", { ...y }),
        /* @__PURE__ */ p("path", { ..._ })
      ] }),
      /* @__PURE__ */ p("div", { className: "kanban-link-start-point", style: { left: b.x - d, top: b.y - d } }),
      o ? /* @__PURE__ */ p("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ p("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ p("i", { className: "close" }) }) }) : null,
      s ? /* @__PURE__ */ p("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: s }) : null
    ] });
  }
}
class $u extends O {
  constructor() {
    super(...arguments), this._ref = B(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
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
    const t = [...this._idSet], e = u(this._kanban).find(".kanban-body"), { top: s, left: i } = this._kanban.getBoundingClientRect(), r = {};
    t.forEach((o) => {
      const a = e.find(`.kanban-item[z-key="${o}"]`).children()[0];
      if (a) {
        const { top: l, left: c, bottom: d, right: h } = a.getBoundingClientRect();
        r[o] = { top: l - s, left: c - i, bottom: d - s, right: h - i };
      }
    }), this.setState({ layout: r });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: s, to: i } = t, r = e[s], o = e[i];
    return this._idSet.add(s), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ p(Gl, { ...t, fromRect: r, toRect: o, onDelete: this.props.onDeleteLink }, `${s}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ p("div", { className: "kanban-links", ref: this._ref, children: e.map((s) => this._renderLink(s)) });
  }
}
const Rs = ".kanbanLinkEditor";
class Tu extends O {
  constructor() {
    super(...arguments), this._ref = B(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, e = t.closest(".kanban");
    this._kanban = e;
    const s = ".kanban-item,.kanban-link-editor-from";
    u(e).on(`mouseenter${Rs}`, s, (i) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const r = u(i.target).closest(s), o = r.attr("z-key");
      this.state.from === o || r.hasClass("is-dragging") || this.setState({
        from: o,
        to: void 0,
        fromRect: this._getRect(r.children()[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${Rs}`, s, () => {
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
        const d = u(i.target).closest(s);
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
    const e = t.getBoundingClientRect(), { top: s, left: i } = this._kanban.getBoundingClientRect();
    return {
      left: e.left - i,
      top: e.top - s,
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
    const { fromRect: e, toRect: s, from: i, to: r = "", dragPos: o } = t;
    if (!e || !i || !o)
      return null;
    const a = s ? {
      left: s.left,
      top: s.top,
      right: s.left + s.width,
      bottom: s.top + s.height
    } : {
      left: o.left,
      top: o.top,
      right: o.left,
      bottom: o.top
    };
    return /* @__PURE__ */ p(
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
    const { from: s, fromRect: i, to: r, toRect: o } = e;
    let a, l;
    return s && i && (a = /* @__PURE__ */ p("div", { className: "kanban-link-editor-from not-moveable", "z-key": s, style: i, children: [
      /* @__PURE__ */ p("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ p("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ p("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ p("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ p("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ p("div", { className: x("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
function Nu(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getCol: s, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return n = n.reduce((d, h, m) => {
    if (h = P({ itemGap: o, itemCountPerRow: r }, i, h), s) {
      const f = s.call(this, h);
      f !== !1 && (h = f || h);
    }
    return h.deleted || (typeof h.order == "number" ? a = !0 : h.order = m, typeof h.name != "string" && (h.name = String(h.name)), e == null || e.call(this, h), h.parentName !== void 0 ? (h.parentName = String(h.parentName), l.push(h)) : (c.set(h.name, h), d.push(h))), d;
  }, []), l.forEach((d) => {
    const h = c.get(d.parentName);
    h && (h.subCols = he(h.subCols, [d], "name"));
  }), a && (n.sort(hs), [...c.values()].forEach((d) => {
    d.subCols && d.subCols.sort(hs);
  })), n;
}
function Mu(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getLane: s, laneProps: i } = t;
  let r = !1;
  return n = n.reduce((o, a, l) => {
    if (i && (a = P({}, i, a)), s) {
      const c = s.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.order == "number" ? r = !0 : a.order = l, a.color === void 0 && (a.color = `hsl(${43 * ga(a.name) % 360}deg 40% 50%)`), typeof a.name != "string" && (a.name = String(a.name)), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && n.sort(hs), n;
}
function Mo(n, t, e, s, i) {
  if (!(n != null && n.length))
    return [];
  const { itemProps: r, getItem: o } = s;
  let a = !1;
  return n = n.reduce((l, c) => {
    r && (c = P({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c, laneInfo: t, colInfo: e })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && n.sort(hs), n;
}
function hs(n, t) {
  return n.order - t.order;
}
function he(n, t, e = "key") {
  if (!n)
    return t ? [...t] : [];
  const s = [...n];
  if (t) {
    let i = 0;
    const r = s.reduce((o, a, l) => (o.set(String(a[e] ?? l), l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
    t.forEach((o) => {
      const a = String(o[e]);
      r.has(a) ? s[r.get(a)] = {
        ...s[r.get(a)],
        ...o
      } : s.push({
        order: i++,
        ...o
      });
    });
  }
  return s;
}
function ql(n, t) {
  return Array.isArray(n) ? n.map((e) => ({
    ...e,
    [t]: String(e[t])
  })) : Object.keys(n).reduce((e, s) => {
    const i = n[s];
    return Object.keys(i).forEach((r) => {
      e.push(...(i[r] || []).map((o) => ({
        ...o,
        lane: s,
        col: r,
        [t]: String(o[t])
      })));
    }), e;
  }, []);
}
function Eo(n, t) {
  const { items: e, ...s } = n;
  return {
    items: ql(e, t),
    ...s
  };
}
function Hi(n, t, e) {
  var a;
  const s = he(n.lanes, t.lanes, "name"), i = he(n.cols, t.cols, "name"), r = he(n.links, (a = t.links) == null ? void 0 : a.map((l) => (l[e] === void 0 && (l[e] = `${l.from}:${l.to}`), l)), e), o = he(n.items, ql(t.items || [], e), e);
  return { lanes: s, cols: i, items: o, links: r };
}
let Ns = class extends U {
  constructor() {
    super(...arguments), this._ref = B(), this._raf = 0, this._data = new es(this._getData.bind(this), () => {
      const { getCol: t, colProps: e, itemCountPerRow: s, itemGap: i, getLane: r, laneProps: o, itemProps: a, getItem: l, getLink: c, linkProps: d, responsive: h } = this.props;
      return [
        this._kanbanData,
        t,
        e,
        s,
        i,
        r,
        o,
        a,
        l,
        d,
        c,
        h
      ];
    }), this._kanbanData = new es(() => {
      const { itemKey: t, props: e } = this, { data: s } = e, { data: i, changes: r } = this.state, o = (i || Yr(s) ? i : Eo(s, t)) || {};
      return r ? Hi(o, r, t) : o;
    }, () => {
      const { data: t, changes: e } = this.state;
      return [
        t,
        e,
        this.props.data
      ];
    }), this._onAddLink = async (t, e) => {
      const { onAddLink: s } = this.props, i = { from: t, to: e, [this.itemKey]: `${t}:${e}` };
      await (s == null ? void 0 : s.call(this, i)) !== !1 && this.addLink(i);
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
      const s = new ResizeObserver(this.updateLayout.bind(this));
      u(typeof t != "boolean" ? t : e.closest(".kanban-list") || e.parentElement).each((r, o) => {
        s.observe(o);
      }), this._rob = s, this.state.containerWidth || this.updateLayout();
    }
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e, s;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy(), (s = this._rob) == null || s.disconnect();
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: s } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = Eo(await vn(t, [this], { throws: !0 }), this.itemKey);
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof s == "function" ? s.call(this, r) : s) || String(r);
      }
      this.setState(i);
    });
  }
  updateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._raf = 0;
      const t = this._ref.current;
      if (t) {
        const { responsive: e, laneNameWidth: s = 20 } = this.props, i = u(typeof e != "boolean" ? e : t.closest(".kanban-list") || t.parentElement), r = i[0];
        let o = i.width() - s - (r.offsetWidth - r.clientWidth);
        const a = t.closest(".kanban-region");
        a && (o -= a.clientWidth - u(a).width()), this.setState({ containerWidth: o });
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Yr(e) || e === this._loadedSetting || this.load();
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
    return this.changeState((e) => ({
      changes: Hi({ ...e.changes }, t, this.itemKey)
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
  addItem(t, e, s) {
    return this.updateItem(t, e, s);
  }
  updateItem(t, e, s) {
    const i = Array.isArray(t) ? t : [t];
    return this.update({
      items: e || s ? i.map((r) => ({
        ...r,
        lane: e ?? r.lane,
        col: s ?? r.col
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
      links: (Array.isArray(t) ? t : [t]).map((s) => ({
        deleted: !1,
        ...s,
        ...e,
        [this.itemKey]: `${s.from}:${s.to}`
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
    const e = u(t), s = e.closest(".kanban-item");
    if (s.length) {
      const o = this.getItem(s.attr("z-key"));
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
  _getDropInfo(t, e, s) {
    const i = this._getElementInfo(e);
    if (!i)
      return;
    const r = this._getElementInfo(s);
    if (!r)
      return;
    let o;
    if (i.type === "item" && r.type === "col")
      o = "inside";
    else {
      const a = s.getBoundingClientRect();
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
    const { drag: e, drop: s } = t, i = this.data, r = {}, { itemKey: o } = this, a = {
      list: [],
      lane: s.lane,
      col: s.col
    };
    if (e.type === "item") {
      const l = e.item, c = i.items[s.lane][s.col], d = [...c], h = {
        [o]: l[o],
        order: l.order
      }, m = s.col === l.col, f = s.lane === l.lane;
      if (m && f && l[o] === s.item[o])
        return { changes: r, data: a };
      m || (h.col = s.col), f || (h.lane = s.lane);
      let g = !1;
      if (s.type === "col" && (!f || !m))
        d.push(h), g = !0;
      else if (s.type === "item") {
        const _ = s.item, y = s.col !== l.col || s.lane !== l.lane ? -1 : d.findIndex((v) => v[o] === l[o]);
        y >= 0 && d.splice(y, 1);
        const b = d.findIndex((v) => v[o] === _[o]);
        d.splice(t.side === "before" ? b : b + 1, 0, h), g = !0;
      }
      if (g) {
        r.items = [];
        let _ = -1;
        d.forEach((y, b) => {
          const v = Math.max(0, _ + 1, y.order ?? b), w = c[b];
          _ = v, (w !== y || v !== w.order) && (y = {
            ...y,
            order: v
          }), y !== w && r.items.push(y), a.list.push(y[o]);
        });
      }
    }
    return { changes: r, data: a };
  }
  _initDraggable() {
    const { draggable: t } = this.props, e = this._ref.current;
    if (!t || !e)
      return;
    const { dragTypes: s = "item", onDragStart: i, onDrop: r, canDrop: o, dropRules: a } = this.props, l = typeof s == "string" ? s.split(",") : s, c = {
      item: ".kanban-item",
      lane: ".kanban-lane-name",
      col: ".kanban-header-col"
    }, d = typeof t == "object" ? t : {}, h = (f, g) => {
      u(f).attr({
        "z-drag-type": g ? g.drag.type : null,
        "z-drop-type": g ? g.drop.type : null,
        "z-drop-side": g ? g.side : null
      });
    }, m = {
      ...d,
      selector: d.selector || l.map((f) => c[f] || "").join(""),
      target: d.target || ((f) => {
        const g = this._getElementInfo(f);
        if (!g)
          return;
        const _ = {
          lane: ".kanban-lane",
          col: ".kanban-header-col",
          item: ".kanban-item,.kanban-items"
        }[g.type];
        return u(e).find(_);
      }),
      canDrop: d.canDrop || o || a ? (f, g, _) => {
        const y = this._getElementInfo(g);
        if (!y)
          return !1;
        const b = this._getElementInfo(_);
        if (!b)
          return !1;
        if (y.type === "item" && a) {
          const v = y.col, w = b.col, k = y.lane, $ = b.lane, C = a[`${k}:${v}`] ?? a[v];
          return typeof C == "boolean" ? C : !C || C.includes(w) || C.includes(`${$}:${w}`) || C.includes(`${$}:`);
        }
        if (o)
          return o.call(this, y, b);
      } : void 0,
      onDragStart: (f, g) => {
        var y;
        const _ = this._getElementInfo(g);
        return _ ? i ? i.call(this, { event: f, drag: _ }) : (y = d.onDragStart) == null ? void 0 : y.call(this, f, g) : !1;
      },
      onDragOver: (f, g, _) => {
        const y = this._getDropInfo(f, g, _);
        y && h(_, y);
      },
      onDragLeave: (f, g, _) => {
        h(_);
      },
      onDrop: (f, g, _) => {
        var b;
        h(_);
        const y = this._getDropInfo(f, g, _);
        if (!y)
          return !1;
        if (r) {
          const { changes: v, data: w } = this._getDropChanges(y);
          if (Object.keys(v).length) {
            y.data = w;
            const k = this.createSnap();
            r.call(this, v, y, k.restore) !== !1 && this.update(v);
          }
        }
        return (b = d.onDrop) == null ? void 0 : b.call(this, f, g, _);
      }
    };
    this._draggable = new Nn(e, m);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, s = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = s, o = {}, a = /* @__PURE__ */ new Map(), l = Nu.call(this, s.cols, e, (f) => {
      f.parentName !== void 0 && (i = !0), a.set(f.name, f);
    }), c = Mu.call(this, s.lanes, e, (f) => {
      o[f.name] = l.reduce((g, _) => (_.subCols ? _.subCols.forEach((y) => {
        g[y.name] = [];
      }) : g[_.name] = [], g), {});
    }), d = /* @__PURE__ */ new Set(), h = r.reduce((f, g) => {
      if (g.deleted)
        return d.add(g[t]), f;
      f.set(g[t], g);
      const _ = o[g.lane];
      if (_) {
        const y = _[g.col];
        y && y.push(g);
      }
      return f;
    }, /* @__PURE__ */ new Map());
    c.forEach((f) => {
      const g = o[f.name];
      g && l.forEach((_) => {
        var y;
        g[_.name] = Mo.call(this, g[_.name], f, _, e), (y = _.subCols) == null || y.forEach((b) => {
          g[b.name] = Mo.call(this, g[b.name], f, b, e);
        });
      });
    });
    let { links: m = [] } = s;
    return m = m.reduce((f, g) => {
      var _;
      if (!g.deleted && h.has(g.from) && h.has(g.to) && !d.has(g.from) && !d.has(g.to)) {
        g[t] === void 0 && (g[t] = `${g.from}:${g.to}`);
        const y = ((_ = e.getLink) == null ? void 0 : _.call(this, g)) ?? g;
        y !== !1 && !y.deleted && f.push(y);
      }
      return f;
    }, []), { cols: l, lanes: c, items: o, map: h, colMap: a, links: m, hasSubCols: i };
  }
  _layoutCols(t, e) {
    const { containerWidth: s = 0 } = this.state, { colsGap: i = 8, minColWidth: r = 150, maxColWidth: o = 600, colWidth: a = 200 } = e, l = [];
    let c = 0;
    const d = (h) => {
      const { minWidth: m = r, maxWidth: f = o } = h;
      let { width: g = a } = h;
      typeof g == "function" && (g = g.call(this, h));
      const _ = g === "auto";
      if (_)
        g = m;
      else {
        const [y, b] = kn(g);
        b === "%" ? g = s * y / 100 : g = y;
      }
      return g = Math.min(f, Math.max(m, g)), c += g + (c ? i : 0), h = { ...h, width: g, maxWidth: f, minWidth: m }, _ && l.push(h), h;
    };
    if (t = t.map((h) => h.subCols ? {
      ...h,
      subCols: h.subCols.map(d)
    } : d(h)), l.length && c < s) {
      const h = Math.floor((s - c) / l.length);
      l.forEach((m) => {
        m.width = Math.min(m.maxWidth, Math.max(m.minWidth, m.width + h));
      });
    }
    return t;
  }
  _layoutLanes(t, e) {
    const { laneHeight: s, maxLaneHeight: i, minLaneHeight: r } = e;
    return !s && !i && !r ? t : t.map((o) => ({
      height: typeof s == "function" ? s.call(this, o) : s,
      maxHeight: i,
      minHeight: r,
      ...o
    }));
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this.data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    const { laneNameWidth: e, colsGap: s, lanesGap: i } = t;
    return P(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": Qt(s),
        "--kanban-lanes-gap": Qt(i)
      }
    });
  }
  _getChildren(t) {
    const e = this._data.value, { cols: s, lanes: i, items: r, links: o = [] } = e, { editLinks: a } = t, l = this._layoutCols(s, t), c = this._layoutLanes(i, t);
    return console.log("> Kanban.render", t.key, { ...e, layoutCols: l, layoutLanes: c, props: t, kanban: this }), [
      /* @__PURE__ */ p(_u, { cols: l }, "header"),
      /* @__PURE__ */ p(
        bu,
        {
          itemRender: t.itemRender,
          cols: l,
          lanes: c,
          items: r
        },
        "body"
      ),
      o.length ? /* @__PURE__ */ p($u, { links: o, onDeleteLink: a ? this._onDeleteLink : void 0 }, "links") : null,
      a ? /* @__PURE__ */ p(Tu, { onAddLink: this._onAddLink }, "linkEditor") : null,
      t.children
    ];
  }
};
Ns.defaultProps = {
  draggable: !0,
  sticky: !0,
  responsive: !0,
  itemKey: "id",
  colWidth: 200,
  colsGap: 8
};
Ns.customProps = ["onDrop", "onDragStart"];
class Io extends U {
  constructor(t) {
    super(t), this._kanbanRefs = /* @__PURE__ */ new Map(), this._needUpdateData = /* @__PURE__ */ new Map(), this._handleClickHeading = (e) => {
      u(e.target).closest("a,.btn,button").not(".kanban-region-toggle").length || this.setState((s) => ({ collapsed: !s.collapsed }));
    }, this.state = {
      ...this.state,
      collapsed: t.collapsed
    };
  }
  componentDidUpdate() {
    if (this.state.collapsed)
      return;
    const t = this._needUpdateData;
    [...t.keys()].forEach((e) => {
      const s = this.getKanban(e);
      s && (s.update(t.get(e)), t.delete(e));
    });
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(String(t))) == null ? void 0 : e.current;
  }
  toggle(t) {
    this.setState((e) => ({ collapsed: t === void 0 ? !e.collapsed : !t }));
  }
  update(t) {
    console.log("> KanbanRegion.update", this.props.key, t, this);
    const { items: e } = t;
    return e && (t = { ...t }, t.items = e.map((s, i) => {
      const r = String(s.key || i);
      return s.deleted ? { key: r, deleted: !0 } : (s.data && typeof s.data == "object" && this.getKanban(r) && (this._needUpdateKanban(r, s.data), s = { ...s }, delete s.data), s);
    })), new Promise((s) => {
      this.setState(t.items ? (i) => ({ ...t, items: he(i.items, t.items) }) : t, s);
    });
  }
  _needUpdateKanban(t, e) {
    const s = this._needUpdateData, i = s.get(t), { kanbanItemKey: r = "id" } = this.props;
    s.set(t, Hi(i || {}, e, r));
  }
  _buildItems(t) {
    const { items: e = [], kanbanProps: s, kanbanItemKey: i = "id" } = t;
    let { items: r } = this.state;
    r ? (r = he(e, r, i).filter((c) => !c.deleted), r.sort(hs)) : r = e;
    const o = this._kanbanRefs, a = new Set(o.keys()), l = r.map((c, d) => {
      const h = P(
        { className: "kanban-region-item", key: d },
        typeof s == "function" ? s.call(this, c, d) : s,
        c
      ), m = String(h.key);
      let f = o.get(m);
      return f || (f = B(), o.set(m, f)), h.ref = f, a.delete(m), /* @__PURE__ */ p(Ns, { "z-key": m, ...h });
    });
    return a.forEach((c) => {
      o.delete(c);
    }), l;
  }
  _getClassName(t) {
    return ["kanban-region", t.className, this.state.collapsed ? "is-collapsed" : "is-expanded", t.heading ? "has-heading" : ""];
  }
  _getChildren(t) {
    const { heading: e, toggleFromHeading: s } = t, { collapsed: i, heading: r } = this.state, o = P({ className: "kanban-heading", onClick: s ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e, r);
    return [
      e && /* @__PURE__ */ p(tn, { ...o }, "heading"),
      i ? null : this._buildItems(t)
    ];
  }
}
let Yl = class extends U {
  constructor(t) {
    super(t), this.state = {}, this._ref = B(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new Cs(this._ref.current, u.extend({ selector: "self", move: "scroll", onMoveStart: (s, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return s.clientY < r && s.clientY > r - 20 || s.clientX < o && s.clientX > o - 20 ? !1 : !u(s.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
    } }, typeof t == "object" ? t : null))), e) {
      const s = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? u(e) : u(this._ref.current).parent()).each((r, o) => {
        s.observe(o);
      }), this._rob = s;
    }
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  getKanban(t) {
    const e = String(t), s = this._kanbanRefs;
    if (s.has(e))
      return s.get(e).current;
    let i = null;
    const r = Array.from(s.values());
    for (const o of r) {
      const a = o.current;
      if (a instanceof Io && (i = a.getKanban(t), i))
        break;
    }
    return i || null;
  }
  updateKanban(t, e) {
    const s = this.getKanban(t);
    return s ? s.update(e) : Promise.reject(new Error(`[ZUI] Kanban not found: ${t}`));
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = u(t), s = e.width(), i = e.height();
    this.setState({ width: s, height: i });
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
    const { width: e, height: s } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof s == "function" ? s.call(this) : s, { width: o, height: a } = this.state ?? {};
    return P(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || s}px`
      }
    });
  }
  _getChildren(t) {
    const { items: e = [], kanbanProps: s } = t, i = this._kanbanRefs, r = new Set(i.keys()), o = [
      ...e.map((a, l) => {
        s && (a = typeof s == "function" ? s.call(this, a, l) : u.extend({}, s, a));
        const c = String(a.key ?? l);
        let d = i.get(c);
        d || (d = B(), i.set(c, d)), r.delete(c);
        const h = a.heading !== void 0 || a.items ? Io : Ns;
        return /* @__PURE__ */ p(h, { ref: d, sticky: t.sticky, ...a, "z-key": c }, c);
      }),
      t.children
    ];
    return r.forEach((a) => {
      i.delete(a);
    }), o;
  }
};
Yl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class Hr extends L {
}
Hr.NAME = "Kanban";
Hr.replace = !0;
Hr.Component = Ns;
class Fr extends L {
  update(t, e) {
    if (t = Array.isArray(t) ? t : [t], e)
      return this.render({ items: t });
    const s = this.options.items || [], i = new Map(s.map((o, a) => [o.key, a])), r = [...s];
    return t.forEach((o) => {
      if (i.has(o.key)) {
        const a = i.get(o.key);
        r[a] = { ...s[a], ...o };
      } else
        r.push(o);
    }), this.render({ items: r.filter((o) => !o.deleted) });
  }
}
Fr.NAME = "KanbanList";
Fr.replace = !0;
Fr.Component = Yl;
var Xl = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ao = (n, t, e) => (Xl(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Eu = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Do = (n, t, e, s) => (Xl(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), xe;
const Iu = "nav", Ks = '[data-toggle="tab"]', Au = "active";
class Zl extends lt {
  constructor() {
    super(...arguments), Eu(this, xe, 0);
  }
  active(t) {
    const e = this.$element, s = e.find(Ks);
    let i = t ? u(t).closest(Ks) : s.filter(`.${Au}`);
    if (!i.length && (i = e.find(Ks).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Ao(this, xe) && clearTimeout(Ao(this, xe)), Do(this, xe, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Do(this, xe, 0);
    }, 10)));
  }
}
xe = /* @__PURE__ */ new WeakMap();
Zl.NAME = "Tabs";
u(document).on("click.tabs.zui", Ks, (n) => {
  n.preventDefault();
  const t = u(n.target), e = t.closest(`.${Iu}`);
  e.length && Zl.ensure(e).active(t);
});
export {
  u as $,
  Qo as Ajax,
  Ta as Avatar,
  Na as BtnGroup,
  ih as Bus,
  Ir as Card,
  gl as CardList,
  za as ColorPicker,
  sr as CommonList,
  lt as Component,
  L as ComponentFromReact,
  es as Computed,
  Ar as ContextMenu,
  D as CustomContent,
  pa as CustomRender,
  Ts as DTable,
  yl as Dashboard,
  Za as DatePicker,
  Qa as DatetimePicker,
  Nn as Draggable,
  St as Dropdown,
  U as HElement,
  fe as HtmlContent,
  K as Icon,
  Hr as Kanban,
  Fr as KanbanList,
  nr as List,
  or as Menu,
  Vu as Messager,
  pd as Modal,
  as as ModalBase,
  Ti as ModalTrigger,
  Cs as Moveable,
  nl as Nav,
  ir as NestedList,
  il as Pager,
  rl as Pick,
  ll as Picker,
  yt as Popover,
  $r as PopoverPanel,
  cl as Popovers,
  ma as Portal,
  xa as ProgressCircle,
  O as ReactComponent,
  hl as SearchBox,
  ar as SearchMenu,
  fl as SearchTree,
  dl as Sidebar,
  $a as Sortable,
  fr as SortableList,
  pr as SortableTree,
  os as TIME_DAY,
  Zl as Tabs,
  Xa as TimePicker,
  ul as Toolbar,
  Rt as Tooltip,
  Mr as Tree,
  Er as Upload,
  pl as UploadImgs,
  sd as addDate,
  zt as bus,
  u as cash,
  x as classes,
  Ke as componentsMap,
  Uc as convertBytes,
  sh as create,
  j as createDate,
  qc as createFormData,
  ch as createPortal,
  B as createRef,
  Bc as deepGet,
  Fc as deepGetPath,
  Pu as defineFn,
  Xs as delay,
  nh as disableScroll,
  Lu as dom,
  so as downloadFile,
  vn as fetchData,
  zc as formatBytes,
  st as formatDate,
  sf as formatDateSpan,
  Q as formatString,
  ta as getClassList,
  Qs as getComponent,
  rh as getReactComponent,
  ii as getZData,
  $t as h,
  J as i18n,
  ni as isDiff,
  Yr as isFetchSetting,
  $s as isSameDay,
  Ua as isSameMonth,
  Ju as isSameWeek,
  fi as isSameYear,
  Qu as isToday,
  ef as isTomorrow,
  _t as isValidElement,
  tf as isYesterday,
  P as mergeProps,
  Bt as nextGid,
  kn as parseSize,
  fa as reactComponents,
  oe as registerReactComponent,
  da as removeUndefinedProps,
  ns as render,
  ai as renderCustomContent,
  ah as renderCustomResult,
  Xr as setZData,
  Xc as shareData,
  Ot as store,
  ea as storeData,
  sa as takeData,
  Qt as toCssSize
};
//# sourceMappingURL=zui.js.map
