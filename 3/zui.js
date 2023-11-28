var Fn = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var D = (n, t, e) => (Fn(n, t, "read from private field"), e ? e.call(n) : t.get(n)), j = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, K = (n, t, e, s) => (Fn(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var zn = (n, t, e) => (Fn(n, t, "access private method"), e);
const Bt = document, Ys = window, Wo = Bt.documentElement, ye = Bt.createElement.bind(Bt), Oo = ye("div"), Un = ye("table"), sc = ye("tbody"), Vr = ye("tr"), { isArray: bn, prototype: Ho } = Array, { concat: nc, filter: Ui, indexOf: Bo, map: Fo, push: ic, slice: zo, some: Vi, splice: rc } = Ho, oc = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, ac = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, lc = /<.+>/, cc = /^\w+$/;
function ji(n, t) {
  const e = hc(t);
  return !n || !e && !me(t) && !Z(t) ? [] : !e && ac.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && cc.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class vn {
  constructor(t, e) {
    if (!t)
      return;
    if (ri(t))
      return t;
    let s = t;
    if (it(t)) {
      const i = e || Bt;
      if (s = oc.test(t) && me(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : lc.test(t) ? jo(t) : ri(i) ? i.find(t) : it(i) ? f(i).find(t) : ji(t, i), !s)
        return;
    } else if (be(t))
      return this.ready(t);
    (s.nodeType || s === Ys) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new vn(t, e);
  }
}
const $ = vn.prototype, f = $.init;
f.fn = f.prototype = $;
$.length = 0;
$.splice = rc;
typeof Symbol == "function" && ($[Symbol.iterator] = Ho[Symbol.iterator]);
function ri(n) {
  return n instanceof vn;
}
function De(n) {
  return !!n && n === n.window;
}
function me(n) {
  return !!n && n.nodeType === 9;
}
function hc(n) {
  return !!n && n.nodeType === 11;
}
function Z(n) {
  return !!n && n.nodeType === 1;
}
function dc(n) {
  return !!n && n.nodeType === 3;
}
function uc(n) {
  return typeof n == "boolean";
}
function be(n) {
  return typeof n == "function";
}
function it(n) {
  return typeof n == "string";
}
function mt(n) {
  return n === void 0;
}
function ns(n) {
  return n === null;
}
function Uo(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Ki(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
f.isWindow = De;
f.isFunction = be;
f.isArray = bn;
f.isNumeric = Uo;
f.isPlainObject = Ki;
function J(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Ki(n)) {
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
f.each = J;
$.each = function(n) {
  return J(this, n);
};
$.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Xs(...n) {
  const t = uc(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return Xs(t, f, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (bn(r[o]) || Ki(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Xs(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
f.extend = Xs;
$.extend = function(n) {
  return Xs($, n);
};
const fc = /\S+/g;
function wn(n) {
  return it(n) ? n.match(fc) || [] : [];
}
$.toggleClass = function(n, t) {
  const e = wn(n), s = !mt(t);
  return this.each((i, r) => {
    Z(r) && J(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
$.addClass = function(n) {
  return this.toggleClass(n, !0);
};
$.removeAttr = function(n) {
  const t = wn(n);
  return this.each((e, s) => {
    Z(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function pc(n, t) {
  if (n) {
    if (it(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !Z(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return ns(e) ? void 0 : e;
      }
      return mt(t) ? this : ns(t) ? this.removeAttr(n) : this.each((e, s) => {
        Z(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
$.attr = pc;
$.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
$.hasClass = function(n) {
  return !!n && Vi.call(this, (t) => Z(t) && t.classList.contains(n));
};
$.get = function(n) {
  return mt(n) ? zo.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
$.eq = function(n) {
  return f(this.get(n));
};
$.first = function() {
  return this.eq(0);
};
$.last = function() {
  return this.eq(-1);
};
function mc(n) {
  return mt(n) ? this.get().map((t) => Z(t) || dc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Z(e) && (e.textContent = n);
  });
}
$.text = mc;
function Ft(n, t, e) {
  if (!Z(n))
    return;
  const s = Ys.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function St(n, t) {
  return parseInt(Ft(n, t), 10) || 0;
}
function jr(n, t) {
  return St(n, `border${t ? "Left" : "Top"}Width`) + St(n, `padding${t ? "Left" : "Top"}`) + St(n, `padding${t ? "Right" : "Bottom"}`) + St(n, `border${t ? "Right" : "Bottom"}Width`);
}
const Vn = {};
function gc(n) {
  if (Vn[n])
    return Vn[n];
  const t = ye(n);
  Bt.body.insertBefore(t, null);
  const e = Ft(t, "display");
  return Bt.body.removeChild(t), Vn[n] = e !== "none" ? e : "block";
}
function Kr(n) {
  return Ft(n, "display") === "none";
}
function Vo(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function Cn(n) {
  return it(n) ? (t, e) => Vo(e, n) : be(n) ? n : ri(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
$.filter = function(n) {
  const t = Cn(n);
  return f(Ui.call(this, (e, s) => t.call(e, s, e)));
};
function oe(n, t) {
  return t ? n.filter(t) : n;
}
$.detach = function(n) {
  return oe(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const _c = /^\s*<(\w+)[^>]*>/, yc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Gr = {
  "*": Oo,
  tr: sc,
  td: Vr,
  th: Vr,
  thead: Un,
  tbody: Un,
  tfoot: Un
};
function jo(n) {
  if (!it(n))
    return [];
  if (yc.test(n))
    return [ye(RegExp.$1)];
  const t = _c.test(n) && RegExp.$1, e = Gr[t] || Gr["*"];
  return e.innerHTML = n, f(e.childNodes).detach().get();
}
f.parseHTML = jo;
$.has = function(n) {
  const t = it(n) ? (e, s) => ji(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
$.not = function(n) {
  const t = Cn(n);
  return this.filter((e, s) => (!it(n) || Z(s)) && !t.call(s, e, s));
};
function jt(n, t, e, s) {
  const i = [], r = be(t), o = s && Cn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && ic.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Ko(n) {
  return n.multiple && n.options ? jt(Ui.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function bc(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || ta.test(e.type)) {
      const i = bn(n) ? Fo.call(n, String) : ns(n) ? [] : [String(n)];
      s ? J(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = mt(n) || ns(n) ? "" : n;
  }) : this[0] && Ko(this[0]);
}
$.val = bc;
$.is = function(n) {
  const t = Cn(n);
  return Vi.call(this, (e, s) => t.call(e, s, e));
};
f.guid = 1;
function Mt(n) {
  return n.length > 1 ? Ui.call(n, (t, e, s) => Bo.call(s, t) === e) : n;
}
f.unique = Mt;
$.add = function(n, t) {
  return f(Mt(this.get().concat(f(n, t).get())));
};
$.children = function(n) {
  return oe(f(Mt(jt(this, (t) => t.children))), n);
};
$.parent = function(n) {
  return oe(f(Mt(jt(this, "parentNode"))), n);
};
$.index = function(n) {
  const t = n ? f(n)[0] : this[0], e = n ? this : f(t).parent().children();
  return Bo.call(e, t);
};
$.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
$.siblings = function(n) {
  return oe(f(Mt(jt(this, (t) => f(t).parent().children().not(t)))), n);
};
$.find = function(n) {
  return f(Mt(jt(this, (t) => ji(n, t))));
};
const vc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wc = /^$|^module$|\/(java|ecma)script/i, Cc = ["type", "src", "nonce", "noModule"];
function kc(n, t) {
  const e = f(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (wc.test(i.type) && Wo.contains(i)) {
      const r = ye("script");
      r.text = i.textContent.replace(vc, ""), J(Cc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function xc(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && kc(t, n.ownerDocument);
}
function ae(n, t, e, s, i, r, o, a) {
  return J(n, (l, c) => {
    J(f(c), (d, h) => {
      J(f(t), (g, p) => {
        const m = e ? h : p, _ = e ? p : h, y = e ? d : g;
        xc(m, y ? _.cloneNode(!0) : _, s, i, !y);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return ae(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return ae(arguments, this, !1, !1, !0);
};
function Sc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (mt(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    Z(s) && (t ? f(s).empty().append(n) : s.innerHTML = n);
  });
}
$.html = Sc;
$.appendTo = function(n) {
  return ae(arguments, this, !0, !1, !0);
};
$.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = f(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
$.before = function() {
  return ae(arguments, this, !1, !0);
};
$.wrapAll = function(n) {
  let t = f(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
$.wrap = function(n) {
  return this.each((t, e) => {
    const s = f(n)[0];
    f(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
$.insertAfter = function(n) {
  return ae(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(n) {
  return ae(arguments, this, !0, !0);
};
$.prepend = function() {
  return ae(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(n) {
  return ae(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return f(Mt(jt(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
$.next = function(n, t, e) {
  return oe(f(Mt(jt(this, "nextElementSibling", t, e))), n);
};
$.nextAll = function(n) {
  return this.next(n, !0);
};
$.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
$.parents = function(n, t) {
  return oe(f(Mt(jt(this, "parentElement", !0, t))), n);
};
$.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
$.prev = function(n, t, e) {
  return oe(f(Mt(jt(this, "previousElementSibling", t, e))), n);
};
$.prevAll = function(n) {
  return this.prev(n, !0);
};
$.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
$.map = function(n) {
  return f(nc.apply([], Fo.call(this, (t, e) => n.call(t, e, t))));
};
$.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && Ft(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Wo;
  });
};
$.slice = function(n, t) {
  return f(zo.call(this, n, t));
};
const $c = /-([a-z])/g;
function Gi(n) {
  return n.replace($c, (t, e) => e.toUpperCase());
}
$.ready = function(n) {
  const t = () => setTimeout(n, 0, f);
  return Bt.readyState !== "loading" ? t() : Bt.addEventListener("DOMContentLoaded", t), this;
};
$.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = f(t);
    e.replaceWith(e.children());
  }), this;
};
$.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + Ys.pageYOffset,
    left: t.left + Ys.pageXOffset
  };
};
$.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = Ft(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Ft(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && Z(i)) {
      const r = f(i).offset();
      e.top -= r.top + St(i, "borderTopWidth"), e.left -= r.left + St(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - St(n, "marginTop"),
    left: e.left - St(n, "marginLeft")
  };
};
const Go = {
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
$.prop = function(n, t) {
  if (n) {
    if (it(n))
      return n = Go[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
$.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Go[n] || n];
  });
};
const Tc = /^--/;
function qi(n) {
  return Tc.test(n);
}
const jn = {}, { style: Nc } = Oo, Mc = ["webkit", "moz", "ms"];
function Ec(n, t = qi(n)) {
  if (t)
    return n;
  if (!jn[n]) {
    const e = Gi(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Mc.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in Nc)
        return jn[n] = o, !1;
    });
  }
  return jn[n];
}
const Ic = {
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
function qo(n, t, e = qi(n)) {
  return !e && !Ic[n] && Uo(t) ? `${t}px` : t;
}
function Ac(n, t) {
  if (it(n)) {
    const e = qi(n);
    return n = Ec(n, e), arguments.length < 2 ? this[0] && Ft(this[0], n, e) : n ? (t = qo(n, t, e), this.each((s, i) => {
      Z(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
$.css = Ac;
function Yo(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const Dc = /^\s+|\s+$/;
function qr(n, t) {
  const e = n.dataset[t] || n.dataset[Gi(t)];
  return Dc.test(e) ? e : Yo(JSON.parse, e);
}
function Pc(n, t, e) {
  e = Yo(JSON.stringify, e), n.dataset[Gi(t)] = e;
}
function Lc(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = qr(this[0], s);
    return e;
  }
  if (it(n))
    return arguments.length < 2 ? this[0] && qr(this[0], n) : mt(t) ? this : this.each((e, s) => {
      Pc(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
$.data = Lc;
function Xo(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
J([!0, !1], (n, t) => {
  J(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return De(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : me(this[0]) ? Xo(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? St(this[0], `margin${e ? "Top" : "Left"}`) + St(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  $[e] = function(s) {
    if (!this[0])
      return mt(s) ? void 0 : this;
    if (!arguments.length)
      return De(this[0]) ? this[0].document.documentElement[`client${t}`] : me(this[0]) ? Xo(this[0], t) : this[0].getBoundingClientRect()[e] - jr(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Z(o))
        return;
      const a = Ft(o, "boxSizing");
      o.style[e] = qo(e, i + (a === "border-box" ? jr(o, !n) : 0));
    });
  };
});
const Yr = "___cd";
$.toggle = function(n) {
  return this.each((t, e) => {
    if (!Z(e))
      return;
    const s = Kr(e);
    (mt(n) ? s : n) ? (e.style.display = e[Yr] || "", Kr(e) && (e.style.display = gc(e.tagName))) : s || (e[Yr] = Ft(e, "display"), e.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const Xr = "___ce", Yi = ".", Xi = { focus: "focusin", blur: "focusout" }, Zo = { mouseenter: "mouseover", mouseleave: "mouseout" }, Rc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Zi(n) {
  return Zo[n] || Xi[n] || n;
}
function Ji(n) {
  const t = n.split(Yi);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(n, t) {
  if (it(n)) {
    const [s, i] = Ji(n), r = Zi(s);
    if (!r)
      return this;
    const o = Rc.test(r) ? "MouseEvents" : "HTMLEvents";
    n = Bt.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(Yi), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in Xi;
  return this.each((s, i) => {
    e && be(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Jo(n) {
  return n[Xr] = n[Xr] || {};
}
function Wc(n, t, e, s, i) {
  const r = Jo(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function Qo(n, t) {
  return !t || !Vi.call(t, (e) => n.indexOf(e) < 0);
}
function Zs(n, t, e, s, i) {
  const r = Jo(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Qo(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Zs(n, t, e, s, i);
}
$.off = function(n, t, e) {
  if (mt(n))
    this.each((s, i) => {
      !Z(i) && !me(i) && !De(i) || Zs(i);
    });
  else if (it(n))
    be(t) && (e = t, t = ""), J(wn(n), (s, i) => {
      const [r, o] = Ji(i), a = Zi(r);
      this.each((l, c) => {
        !Z(c) && !me(c) && !De(c) || Zs(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
$.remove = function(n) {
  return oe(this, n).detach().off(), this;
};
$.replaceWith = function(n) {
  return this.before(n).remove();
};
$.replaceAll = function(n) {
  return f(n).replaceWith(this), this;
};
function Oc(n, t, e, s, i) {
  if (!it(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return it(t) || (mt(t) || ns(t) ? t = "" : mt(e) ? (e = t, t = "") : (s = e, e = t, t = "")), be(s) || (s = e, e = void 0), s ? (J(wn(n), (r, o) => {
    const [a, l] = Ji(o), c = Zi(a), d = a in Zo, h = a in Xi;
    c && this.each((g, p) => {
      if (!Z(p) && !me(p) && !De(p))
        return;
      const m = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !Qo(l, _.namespace.split(Yi)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let y = p;
        if (t) {
          let v = _.target;
          for (; !Vo(v, t); )
            if (v === p || (v = v.parentNode, !v))
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
            return p;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const b = s.call(y, _, _.___td);
        i && Zs(p, c, l, t, m), b === !1 && (_.preventDefault(), _.stopPropagation());
      };
      m.guid = s.guid = s.guid || f.guid++, Wc(p, c, l, t, m);
    });
  }), this) : this;
}
$.on = Oc;
function Hc(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
$.one = Hc;
const Bc = /\r?\n/g;
function Fc(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(Bc, `\r
`))}`;
}
const zc = /file|reset|submit|button|image/i, ta = /radio|checkbox/i;
$.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    J(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || zc.test(i.type) || ta.test(i.type) && !i.checked)
        return;
      const r = Ko(i);
      if (!mt(r)) {
        const o = bn(r) ? r : [r];
        J(o, (a, l) => {
          n += Fc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = f;
function Uc(n, t) {
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
function Vc(n, t, e) {
  try {
    const s = Uc(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function tt(n, ...t) {
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
var Qi = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Qi || {});
function jc(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / Qi[e]).toFixed(t) + e);
}
const Kc = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Qi[s];
};
let tr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Xt;
function Gc() {
  return tr;
}
function qc(n) {
  tr = n.toLowerCase();
}
function ea(n, t) {
  Xt || (Xt = {}), typeof n == "string" && (n = { [n]: t ?? {} }), f.extend(!0, Xt, n);
}
function Q(n, t, e, s, i, r) {
  Array.isArray(n) ? Xt && n.unshift(Xt) : n = Xt ? [Xt, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || tr;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === Xt ? `${r}.${t}` : t;
    if (a = Vc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? tt(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Yc(n, t, e, s) {
  return Q(void 0, n, t, e, s);
}
Q.addLang = ea;
Q.getLang = Yc;
Q.getCode = Gc;
Q.setCode = qc;
ea({
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
function Zr(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function Ge(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => Ge(n, t, s)) : n.append(t, e instanceof Blob ? e : String(e)));
}
function Xc(n, t) {
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
function Zc(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    Ge(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    Ge(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    Ge(e, i, s);
  }) : f.isPlainObject(n) && Object.entries(n).forEach(([s, i]) => {
    Ge(e, s, i);
  })), e;
}
class sa {
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
      success: g,
      error: p,
      complete: m,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let y = s;
    y && (i && (y = Zc(y)), _.body = y), o && (_.mode = "cors");
    const b = _.headers || {};
    Zr(b, "X-Requested-With", "XMLHttpRequest"), r && Zr(b, "Content-Type", r), _.headers = b, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), g && this.success(g), p && this.fail(p), m && this.complete(m), _.signal = this._controller.signal, this.url = t, this.request = _;
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
        const h = (c = o.headers.get("Content-Disposition")) == null ? void 0 : c.startsWith("attachment"), g = h ? "blob" : e || Xc(o.headers.get("Content-Type"), s);
        h || g === "blob" || g === "file" ? l = await o.blob() : g === "json" ? l = await o.json() : l = await o.text(), this.data = l;
        const p = (i == null ? void 0 : i(l, g)) ?? l;
        this._emit("success", p, d, o);
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
f.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : f.extend(t, n);
  const e = new sa(t);
  return e.send(), e;
};
f.getJSON = (n, t, e) => (typeof t == "function" && (e = t, t = void 0), f.ajax({
  url: n,
  data: t,
  success: e,
  dataType: "json"
}));
f.get = (n, t, e, s, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, s = void 0) : s = e, f.ajax({
    method: i,
    url: n,
    data: o,
    success: r,
    dataType: s
  });
};
f.post = (n, t, e, s) => f.get(n, t, e, s, "POST");
f.fn.load = function(n, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [s, i] = n.split(" ");
  return f.get(s, t, (r, o, a) => {
    i && (r = f(r).find(i).html()), f(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function kn(n, t = [], e) {
  const s = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    s.url = n;
  else if (typeof n == "object")
    f.extend(s, n);
  else if (typeof n == "function") {
    const o = n(...t);
    return o instanceof Promise ? await o : o;
  }
  e && f.extend(s, typeof e == "function" ? e(s) : e);
  const i = new sa(s), [r] = await i.send();
  return r;
}
function Jr(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
f.fetch = kn;
function zt() {
  return f.guid++;
}
function oi(n, t) {
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
        if (oi(n[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(n), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (oi(n[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class is {
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
    return (!e || t.some((s, i) => oi(s instanceof is ? s.value : s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof is ? s.cache : s)), this._value;
  }
}
function na(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? na(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const S = (...n) => na(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
f.classes = S;
f.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = f(s);
    n === !0 ? i.attr("class", S(i.attr("class"), ...t)) : i.addClass(S(n, ...t));
  });
};
const qe = /* @__PURE__ */ new WeakMap();
function ia(n, t, e) {
  const s = qe.has(n), i = s ? qe.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, f(n).dataset(), i), qe.set(n, i)) : qe.delete(n);
}
function ra(n, t, e) {
  let s = qe.get(n) || {};
  return !e && n instanceof Element && (s = Object.assign({}, f(n).dataset(), s)), t === void 0 ? s : s[t];
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...n) {
  if (!this.length)
    return;
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? ra(this[0], t) : this.each((s, i) => ia(i, t, e));
};
f.fn.removeData = function(n = null) {
  return this.each((t, e) => ia(e, n));
};
function ai(n, t = "z-") {
  const e = f(n)[0];
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
function Qr(n, t, e = "z-") {
  const s = f(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function Jc(...n) {
  var e;
  const t = n.length;
  if (!t)
    return ai(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = ai(this)) == null ? void 0 : e[s] : (f.isPlainObject(s) && Qr(this, s), this);
  }
  return Qr(this, { [n[0]]: n[1] }), this;
}
f.fn.z = Jc;
f.fn._attr = f.fn.attr;
f.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
f.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
};
const Js = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Qc = {};
f.share = Qc;
var xn, z, oa, _t, he, to, aa, li, Ne = {}, la = [], th = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Sn = Array.isArray;
function te(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function ca(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function Tt(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? xn.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return Hs(n, o, s, i, null);
}
function Hs(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++oa };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function F() {
  return { current: null };
}
function Re(n) {
  return n.children;
}
function H(n, t) {
  this.props = n, this.context = t;
}
function rs(n, t) {
  if (t == null)
    return n.__ ? rs(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__d || e.__e;
  return typeof n.type == "function" ? rs(n) : null;
}
function ha(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return ha(n);
  }
}
function eo(n) {
  (!n.__d && (n.__d = !0) && he.push(n) && !Qs.__r++ || to !== z.debounceRendering) && ((to = z.debounceRendering) || aa)(Qs);
}
function Qs() {
  var n, t, e, s, i, r, o, a, l;
  for (he.sort(li); n = he.shift(); )
    n.__d && (t = he.length, s = void 0, i = void 0, r = void 0, a = (o = (e = n).__v).__e, (l = e.__P) && (s = [], i = [], (r = te({}, o)).__v = o.__v + 1, er(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, s, a ?? rs(o), o.__h, i), pa(s, o, i), o.__e != a && ha(o)), he.length > t && he.sort(li));
  Qs.__r = 0;
}
function da(n, t, e, s, i, r, o, a, l, c, d) {
  var h, g, p, m, _, y, b, v, w, C = 0, x = s && s.__k || la, k = x.length, E = k, I = t.length;
  for (e.__k = [], h = 0; h < I; h++)
    (m = e.__k[h] = (m = t[h]) == null || typeof m == "boolean" || typeof m == "function" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? Hs(null, m, null, null, m) : Sn(m) ? Hs(Re, { children: m }, null, null, null) : m.__b > 0 ? Hs(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) != null ? (m.__ = e, m.__b = e.__b + 1, (v = eh(m, x, b = h + C, E)) === -1 ? p = Ne : (p = x[v] || Ne, x[v] = void 0, E--), er(n, m, p, i, r, o, a, l, c, d), _ = m.__e, (g = m.ref) && p.ref != g && (p.ref && sr(p.ref, null, m), d.push(g, m.__c || _, m)), _ != null && (y == null && (y = _), (w = p === Ne || p.__v === null) ? v == -1 && C-- : v !== b && (v === b + 1 ? C++ : v > b ? E > I - b ? C += v - b : C-- : C = v < b && v == b - 1 ? v - b : 0), b = h + C, typeof m.type != "function" || v === b && p.__k !== m.__k ? typeof m.type == "function" || v === b && !w ? m.__d !== void 0 ? (l = m.__d, m.__d = void 0) : l = _.nextSibling : l = fa(n, _, l) : l = ua(m, l, n), typeof e.type == "function" && (e.__d = l))) : (p = x[h]) && p.key == null && p.__e && (p.__e == l && (p.__ = s, l = rs(p)), ci(p, p, !1), x[h] = null);
  for (e.__e = y, h = k; h--; )
    x[h] != null && (typeof e.type == "function" && x[h].__e != null && x[h].__e == e.__d && (e.__d = x[h].__e.nextSibling), ci(x[h], x[h]));
}
function ua(n, t, e) {
  for (var s, i = n.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = n, t = typeof s.type == "function" ? ua(s, t, e) : fa(e, s.__e, t));
  return t;
}
function tn(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (Sn(n) ? n.some(function(e) {
    tn(e, t);
  }) : t.push(n)), t;
}
function fa(n, t, e) {
  return e == null || e.parentNode !== n ? n.insertBefore(t, null) : t == e && t.parentNode != null || n.insertBefore(t, e), t.nextSibling;
}
function eh(n, t, e, s) {
  var i = n.key, r = n.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
    return e;
  if (s > (l != null ? 1 : 0))
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
function sh(n, t, e, s, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || en(n, r, null, e[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || en(n, r, t[r], e[r], s);
}
function so(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || th.test(t) ? e : e + "px";
}
function en(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || so(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || so(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = Date.now(), n.addEventListener(t, r ? io : no, r)) : n.removeEventListener(t, r ? io : no, r);
    else if (t !== "dangerouslySetInnerHTML") {
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
function no(n) {
  var t = this.l[n.type + !1];
  if (n.t) {
    if (n.t <= t.u)
      return;
  } else
    n.t = Date.now();
  return t(z.event ? z.event(n) : n);
}
function io(n) {
  return this.l[n.type + !0](z.event ? z.event(n) : n);
}
function er(n, t, e, s, i, r, o, a, l, c) {
  var d, h, g, p, m, _, y, b, v, w, C, x, k, E, I, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = z.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (b = t.props, v = (d = A.contextType) && s[d.__c], w = d ? v ? v.props.value : d.__ : s, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(b, w) : (t.__c = h = new H(b, w), h.constructor = A, h.render = ih), v && v.sub(h), h.props = b, h.state || (h.state = {}), h.context = w, h.__n = s, g = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = te({}, h.__s)), te(h.__s, A.getDerivedStateFromProps(b, h.__s))), p = h.props, m = h.state, h.__v = t, g)
          A.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && b !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(b, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(b, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = b, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(N) {
              N && (N.__ = t);
            }), C = 0; C < h._sb.length; C++)
              h.__h.push(h._sb[C]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(b, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, m, _);
          });
        }
        if (h.context = w, h.props = b, h.__P = n, h.__e = !1, x = z.__r, k = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, x && x(t), d = h.render(h.props, h.state, h.context), E = 0; E < h._sb.length; E++)
            h.__h.push(h._sb[E]);
          h._sb = [];
        } else
          do
            h.__d = !1, x && x(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++k < 25);
        h.state = h.__s, h.getChildContext != null && (s = te(te({}, s), h.getChildContext())), g || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, m)), da(n, Sn(I = d != null && d.type === Re && d.key == null ? d.props.children : d) ? I : [I], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (N) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(N, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = nh(e.__e, t, e, s, i, r, o, l, c);
  (d = z.diffed) && d(t);
}
function pa(n, t, e) {
  for (var s = 0; s < e.length; s++)
    sr(e[s], e[++s], e[++s]);
  z.__c && z.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      z.__e(r, i.__v);
    }
  });
}
function nh(n, t, e, s, i, r, o, a, l) {
  var c, d, h, g = e.props, p = t.props, m = t.type, _ = 0;
  if (m === "svg" && (i = !0), r != null) {
    for (; _ < r.length; _++)
      if ((c = r[_]) && "setAttribute" in c == !!m && (m ? c.localName === m : c.nodeType === 3)) {
        n = c, r[_] = null;
        break;
      }
  }
  if (n == null) {
    if (m === null)
      return document.createTextNode(p);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, p.is && p), r = null, a = !1;
  }
  if (m === null)
    g === p || a && n.data === p || (n.data = p);
  else {
    if (r = r && xn.call(n.childNodes), d = (g = e.props || Ne).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (g = {}, _ = 0; _ < n.attributes.length; _++)
          g[n.attributes[_].name] = n.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }
    if (sh(n, p, g, i, a), h)
      t.__k = [];
    else if (da(n, Sn(_ = t.props.children) ? _ : [_], t, e, s, i && m !== "foreignObject", r, o, r ? r[0] : e.__k && rs(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && ca(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== n.value || m === "progress" && !_ || m === "option" && _ !== g.value) && en(n, "value", _, g.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== n.checked && en(n, "checked", _, g.checked, !1));
  }
  return n;
}
function sr(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    z.__e(s, e);
  }
}
function ci(n, t, e) {
  var s, i;
  if (z.unmount && z.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || sr(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ci(s[i], t, e || typeof n.type != "function");
  e || n.__e == null || ca(n.__e), n.__ = n.__e = n.__d = void 0;
}
function ih(n, t, e) {
  return this.constructor(n, e);
}
function os(n, t, e) {
  var s, i, r, o;
  z.__ && z.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], er(t, n = (!s && e || t).__k = Tt(Re, null, [n]), i || Ne, Ne, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? xn.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), pa(r, n, o);
}
xn = la.slice, z = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, oa = 0, _t = function(n) {
  return n != null && n.constructor === void 0;
}, H.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof n == "function" && (n = n(te({}, e), this.props)), n && te(e, n), n != null && this.__v && (t && this._sb.push(t), eo(this));
}, H.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), eo(this));
}, H.prototype.render = Re, he = [], aa = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, li = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Qs.__r = 0;
function L(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...tn(r), ...tn(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = f.extend(r, i))), n[s] = i);
    });
  }), n;
}
function ma(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
const Ye = /* @__PURE__ */ new Map();
function sn(n) {
  const { zui: t } = window;
  return (!Ye.size || n && !Ye.has(n.toUpperCase())) && Object.keys(t).forEach((e) => {
    const s = t[e];
    !s.NAME || !s.ZUI || Ye.set(e.toLowerCase(), s);
  }), n ? Ye.get(n.toLowerCase()) : void 0;
}
function rh(n, t, e) {
  const s = sn(n);
  return s ? !s.MULTI_INSTANCE && s.get(t) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: t, options: e }), null) : new s(t, e) : null;
}
function Ou(n) {
  if (n) {
    const t = sn(n);
    t && t.defineFn();
  } else
    sn(), Ye.forEach((t) => {
      t.defineFn();
    });
}
f.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = f(this);
    let t = ai(n, "data-");
    const [e, s] = t.zui.split(":");
    n.zui(e) || (s ? t = f.share[s] : delete t.zui, requestAnimationFrame(() => rh(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
f.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = ra(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), n === !0 ? r : o;
  }
  const s = sn(n);
  if (s)
    return t === !0 ? s.getAll(e) : s.query(e, t);
};
f(() => {
  f("body").zuiInit();
});
function oh(n, t = !0) {
  const e = f(n), s = e[0], i = "zui-disable-scroll";
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
f.fn.disableScroll = function(n = !0) {
  return this.each((t, e) => {
    oh(e, n);
  });
};
f.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function $n(n) {
  if (typeof n == "number")
    return [n];
  let t = n.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = n.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function ee(n) {
  if (n == null)
    return null;
  const [t, e = "px"] = $n(n);
  return Number.isNaN(t) ? typeof n == "string" ? n : null : `${t}${e}`;
}
async function ro(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = t), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), ro(o, t);
  }
  const e = await fetch(n);
  return ro(e);
}
class ah {
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
const Ut = new ah(document);
f.bus = Ut;
f.on = Ut.on.bind(Ut);
f.one = Ut.one.bind(Ut);
f.off = Ut.off.bind(Ut);
f.trigger = Ut.trigger.bind(Ut);
function nr(n, t) {
  const e = f(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!s) {
    const { innerHeight: m, innerWidth: _ } = window, { clientHeight: y, clientWidth: b } = document.documentElement;
    s = { left: 0, top: 0, width: _ || b, height: m || y };
  }
  const { left: l, top: c, width: d, height: h } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const g = i <= d && i + o >= l;
  return r <= h && r + a >= c && g;
}
f.fn.isVisible = function(n) {
  return nr(this, n);
};
function ir(n, t, e = !1) {
  const s = f(n);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${zt()}`;
      s.append(`<script id="${i}">${t}<\/script>`), e && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    ir(s, r.innerHTML), r.remove();
  });
}
f.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
f.fn.runJS = function(n) {
  return this.each((t, e) => {
    ir(e, n);
  });
};
function ga(n, t) {
  const e = f(n), { ifNeeded: s = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (s) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (nr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
f.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    ga(e, n);
  });
};
f.setLibRoot = function(n) {
  f.libRoot = n;
};
f.registerLib = function(n, t) {
  f.libMap || (f.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), f.libMap[n] = t;
};
f.getLib = function(n, t, e) {
  return new Promise((s, i) => {
    let r = typeof n == "string" ? { src: n } : f.extend({}, n);
    typeof t == "function" ? r.success = t : t && f.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = f.libMap && f.libMap[o];
    a && (r = f.extend({}, a, r), o = a.src || r.src);
    const { root: l = f.libRoot } = r;
    l && (o = `${l}${l.endsWith("/") && o.startsWith("/") ? "" : "/"}${o}`);
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, g = () => {
      s(h()), c == null || c();
    };
    if (h()) {
      g();
      return;
    }
    const { id: p } = r, m = f(p ? `#${p}` : `script[src="${o}"]`);
    if (m.length) {
      if (m.dataset("loaded"))
        g();
      else {
        const x = m.data("loadCalls") || [];
        x.push(g), m.data("loadCalls", x);
      }
      return;
    }
    const { async: _ = !0, defer: y = !1, noModule: b = !1, type: v, integrity: w } = r, C = document.createElement("script");
    C.async = _, C.defer = y, C.noModule = b, v && (C.type = v), w && (C.integrity = w), C.onload = () => {
      g(), (f(C).dataset("loaded", !0).data("loadCalls") || []).forEach((k) => k()), f(C).removeData("loadCalls");
    }, C.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, C.src = o, f("head").append(C);
  });
};
f.getScript = f.getLib;
function We(n) {
  return n.parentNode === document ? !1 : n.parentNode ? We(n.parentNode) : !0;
}
f.isDetached = We;
f.fn.isDetached = function() {
  const n = this[0];
  return !n || We(n);
};
const Hu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: We,
  isVisible: nr,
  runJS: ir,
  scrollIntoView: ga
}, Symbol.toStringTag, { value: "Module" })), _a = {};
function le(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    le(e, n[e]);
  }) : t && (_a[n.toLowerCase()] = t);
}
function lh(n) {
  return _a[n.toLowerCase()];
}
class U extends H {
  constructor() {
    super(...arguments), this._gid = zt();
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
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: d, ...h } = t, g = new Set(this.constructor.customProps), p = "dangerouslySetInnerHTML", m = Object.keys(h).reduce((_, y) => {
      if (!g.has(y) && (y === p || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(y))) {
        const b = h[y];
        _[y] = y !== p && b && typeof b == "object" ? JSON.stringify(b) : b;
      }
      return _;
    }, {});
    return { ref: o, className: S(this._getClassName(t), d) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...m, ...s, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? lh(e) : e) || e;
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
    return r && ([e, i, s] = r), Tt(e, i, s);
  }
}
U.HElement = !0;
U.customProps = [];
var ch = 0;
function u(n, t, e, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --ch, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(c), c;
}
class ge extends H {
  constructor() {
    super(...arguments), this._ref = F();
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
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ u(U, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function hh(n) {
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
  } = n, h = [e], g = { ...s }, p = [], m = [];
  return i.forEach((_) => {
    const y = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        y.push(...l.call(o, _, p, ...r));
      else {
        const b = _.call(o, p, ...r);
        b && (Array.isArray(b) ? y.push(...b) : y.push(b));
      }
    else
      y.push(_);
    y.forEach((b) => {
      b != null && (typeof b == "object" && !_t(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? p.push(
        /* @__PURE__ */ u("div", { className: S(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? m.push(b.__html) : (b.style && Object.assign(g, b.style), b.className && h.push(b.className), b.children && p.push(b.children), b.attrs && Object.assign(d, b.attrs)) : p.push(b));
    });
  }), m.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: S(h),
    style: g,
    ...d
  }, p];
}
function ya({
  tag: n = "div",
  ...t
}) {
  const [e, s] = hh(t);
  return Tt(n, e, ...s);
}
function hi(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => hi({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ u("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ u(ge, { ...L(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = L({ children: o.map((a) => hi({ ...i, content: a, generatorThis: s, generatorArgs: e })) }, r)), /* @__PURE__ */ u(U, { ...L(i, r) });
  }
  return _t(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function P(n) {
  const t = hi(n);
  return t == null || typeof t == "boolean" ? null : _t(t) ? t : /* @__PURE__ */ u(Re, { children: t });
}
const oo = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function q(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (_t(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(oo(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? oo(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ u("i", { className: S(i), ...s });
}
function dh(n) {
  return this.getChildContext = () => n.context, n.children;
}
function ba(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    os(null, t._temp), t._temp = null, t._container = null;
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
  }), os(
    Tt(dh, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function uh(n, t) {
  const e = Tt(ba, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
le({
  HElement: U,
  element: U,
  HtmlContent: ge,
  html: ge,
  CustomContent: P,
  custom: P,
  Icon: q,
  Portal: ba
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
    const l = f(t);
    if (l.data(s) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], d = zt();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((g) => {
      g.forEach((p) => {
        p.removedNodes.forEach((m) => {
          m === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, We(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(s, this).attr(i, `${d}`), o) {
      const g = `${s}:ALL`;
      let p = l.data(g);
      p || (p = /* @__PURE__ */ new Map(), l.data(g, p)), p.set(this._key, this);
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
    return t && f.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const s = f.Event(t);
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
    return Q(this.options.i18n, t, e, s, this.options.lang, this.constructor.NAME) ?? Q(this.options.i18n, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    const s = f(t);
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
    return f(t || document).find(`[${s}]`).each((r, o) => {
      if (e) {
        const l = f(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = f(o).data(this.KEY);
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
    const s = this;
    f.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = s.get(d);
          if (h ? o && h.render(o) : h = new s(d, o), a) {
            let g = h[a], p = h;
            g === void 0 && (p = h.$, g = p[a]), typeof g == "function" ? l = g.call(p, ...r) : l = g;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
lt.DEFAULT = {};
lt.MULTI_INSTANCE = !1;
class R extends lt {
  constructor() {
    super(...arguments), this._ref = F();
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
        const { name: h, value: g } = d;
        return c[h === "class" ? "className" : h] = g, c;
      }, {});
      return os(
        Tt(s, L({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    os(
      Tt(s, a),
      e
    );
  }
}
R.replace = !1;
class st extends U {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ u(q, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ u(q, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ u("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ u(q, { icon: l }),
      e ? null : c ? /* @__PURE__ */ u("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
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
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = S([c.className, o])), r || (s !== void 0 && (c[l ? "href" : "data-url"] = s), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: st
}, Symbol.toStringTag, { value: "Module" }));
le(fh);
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
  _getItemFromEvent(t) {
    var a;
    const e = t.target.closest("[z-item]");
    if (!e || !((a = e.parentElement) != null && a.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const s = +e.getAttribute("z-item"), i = this._items[s];
    if (!i)
      return;
    const r = this.getKey(s);
    if (r === void 0)
      return;
    const o = this._renderedItems[s];
    return { index: s, item: i, element: e, event: t, key: r, renderedItem: o, relativeTarget: this.props.relativeTarget };
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
        return /* @__PURE__ */ u(P, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || U;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = L({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ u(l, { "z-key": e.key, "z-item": s, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: g = {} } = this.constructor;
    if (e = L(
      { type: l },
      h,
      g[l],
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
      const p = o.call(this, e, s);
      if (p !== void 0)
        return p;
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
const ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: ct
}, Symbol.toStringTag, { value: "Module" }));
class rr extends R {
}
rr.NAME = "CommonList";
rr.Component = ct;
rr.replace = ct.TAG;
le(ph);
function mh(n) {
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
function gh(n) {
  const [t, e, s] = typeof n == "string" ? mh(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function ao(n, t) {
  return gh(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function lo(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function _h(n, t, e) {
  n = n % 360 / 360, t = lo(t), e = lo(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function va(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function yh(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let ks = class extends H {
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
      src: g,
      hueDistance: p = 43,
      saturation: m = 0.4,
      lightness: _ = 0.6,
      children: y,
      ...b
    } = this.props, v = ["avatar", t], w = { ...e, background: o, color: a };
    let C = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, C = s) : (v.push(`size-${s}`), C = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? v.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let x;
    if (g)
      v.push("has-img"), x = /* @__PURE__ */ u("img", { className: "avatar-img", src: g, alt: c });
    else if (l)
      v.push("has-icon"), x = /* @__PURE__ */ u(q, { icon: l });
    else if (c != null && c.length) {
      const k = yh(c, h);
      if (v.push("has-text", `has-text-${k.length}`), o === void 0) {
        const I = d ?? c, A = (typeof I == "number" ? I : va(I)) * p % 360;
        if (w.background = `hsl(${A},${m * 100}%,${_ * 100}%)`, !a) {
          const N = _h(A, m, _);
          w.color = ao(N);
        }
      } else
        !a && o && (w.color = ao(o));
      let E;
      C && C < 14 * k.length && (E = { transform: `scale(${C / (14 * k.length)})`, whiteSpace: "nowrap" }), x = /* @__PURE__ */ u("div", { "data-actualSize": C, className: "avatar-text", style: E, children: k });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        className: S(v),
        style: w,
        ...b,
        children: [
          x,
          y
        ]
      }
    );
  }
};
const bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: ks
}, Symbol.toStringTag, { value: "Module" }));
let Ct = class extends ct {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    e.type || (e = f.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = L({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = L({}, e, ma({ btnType: s, size: i }));
  }
};
Ct.NAME = "btn-group";
Ct.TAG = "nav";
Ct.ItemComponents = {
  ...ct.ItemComponents,
  default: st
};
Ct.defaultItemProps = {
  component: void 0
};
const Tn = class wa extends Ct {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = S(s.className, `gap-${e}`) : s.style = f.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = L({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = L(s, r)), /* @__PURE__ */ u(wa, { ...r });
  }
};
Tn.NAME = "toolbar";
Tn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Tn.ItemComponents = {
  ...Ct.ItemComponents,
  btnGroup: Ct,
  "btn-group": Ct
};
let at = Tn;
const vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: at
}, Symbol.toStringTag, { value: "Module" }));
class Nn extends U {
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
      e ? /* @__PURE__ */ u(
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
      /* @__PURE__ */ u("label", { htmlFor: r, children: /* @__PURE__ */ u(P, { content: o }) }, "label")
    ];
  }
}
class wh extends Nn {
}
wh.defaultProps = {
  type: "radio"
};
class Ch extends Nn {
}
Ch.defaultProps = {
  type: "switch"
};
class nn extends U {
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
    if (i && d.push(/* @__PURE__ */ u(P, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ u(Nn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ u(q, { className: "item-icon", icon: e }, "icon")), s) {
      const g = typeof s == "function" ? s.call(this, t) : s;
      g && (g.className = S("item-avatar", g.className), d.push(/* @__PURE__ */ u(ks, { ...g }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ u(P, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ u("div", { className: S("item-leading", o), children: d }, "leading")
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
      contentAttrs: g
    } = t, p = l && !e, m = p ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ u("div", { className: S("item-content", h), ...g, children: [
        _ ? /* @__PURE__ */ u(m, { className: S("item-title", i), href: p ? l : void 0, target: p ? c : void 0, ...r, children: /* @__PURE__ */ u(P, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ u("div", { className: S("item-subtitle", a), children: /* @__PURE__ */ u(P, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ u("div", { className: S("item-text text", s), children: y }, "text") : null,
        d ? /* @__PURE__ */ u(P, { content: d }, "extraContent") : null
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
    r && a.push(/* @__PURE__ */ u(q, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(at.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = s ? /* @__PURE__ */ u(P, { content: s }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ u("div", { className: S("item-trailing", i), children: [
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
      checked: g,
      multiline: p,
      title: m,
      subtitle: _,
      hint: y,
      hover: b
    } = t, v = s || (o && !a ? "a" : "div"), w = v === "a", C = L({
      key: "item",
      title: y,
      className: S("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": b,
        checked: g,
        multiline: p ?? !!(m && _),
        state: w
      })
    }, w ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ u(v, { ...C, children: [
      this._renderLeading(t),
      this._renderContent(t, w),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...tn(s)]];
  }
}
let Et = class extends ct {
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
        const s = await kn(t, [this], { throws: !0 });
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
    e = L({}, ma({
      divider: i,
      hover: r,
      multiline: o
    }), e);
    const { itemName: a, name: l } = this;
    if (e.innerClass = [a ? `${a}-inner${l ? ` ${l}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: c } = t;
      c && (e.checked = this.isChecked(e.key, s, e.checked), typeof c == "object" && (e.checkbox = e.checkbox ? f.extend({}, c, e.checkbox) : c), t.activeOnChecked && e.checked && (e.active = !0));
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
      className: S(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: s } = this.state;
    return s && e.push(s), e;
  }
};
Et.ItemComponents = {
  ...ct.ItemComponents,
  default: U,
  item: nn,
  heading: nn
};
Et.NAME = "list";
const Kn = "```ZUI_STR\n";
class xs {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new xs(this._id, "session")), this._altStorage);
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
      if (s.startsWith(Kn))
        return s.substring(Kn.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Kn}${e}` : JSON.stringify(e));
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
const Ht = new xs("DEFAULT");
function kh(n, t = "local") {
  return new xs(n, t);
}
Object.assign(Ht, { create: kh });
function Ca(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), Ca(s, t);
  });
}
function xh(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function co(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function ka(n, t, e = /* @__PURE__ */ new Map(), s = 0, i) {
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
    i && i.children.push(c), e.set(l, c), Array.isArray(r.items) && ka(r.items, t, e, s + 1, c);
  }), e;
}
let ve = class extends Et {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (f.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = Ht.get(this._storeID);
      r && f.extend(this.state, r);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && co(o).forEach((a) => {
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
  setItems(t, e) {
    this.isRoot && (this._needInitChecks = !0), super.setItems(t, e);
  }
  getItemMap() {
    return this._itemMap || (this._itemMap = ka(this._items, this.props.itemKey)), this._itemMap;
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
    const { nestedShow: i, onToggle: r } = this.props;
    if (!(r && r.call(this, t, e) === !1) && i === void 0)
      return this.setState((o) => {
        const a = {
          ...o.nestedShow,
          [t]: e
        };
        return {
          nestedShow: e ? co(t).reduce((l, c) => (l[c] = e, l), a) : a
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
            l && (Ca(l, (c) => {
              o(c) !== e && (s[c.keyPath] = e);
            }), xh(l, (c) => {
              const { children: d } = c, h = d.reduce((g, p) => (o(p) && g++, g), 0);
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
    this._storeID && Ht.set(this._storeID, this.state);
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, s, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return L(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
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
    return /* @__PURE__ */ u(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let s, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ u("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ u("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (s = /* @__PURE__ */ u(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ u("span", { className: S(`${this.name}-toggle nested-toggle-icon`, i), children: s });
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
  _renderItem(t, e, s) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = L(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, s);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (!e)
      return;
    (t.type === "mouseenter" || t.type === "mouseleave") && (e.hover = t.type === "mouseenter");
    const { parentKey: s } = this.props;
    return { ...e, parentKey: s, keyPath: `${s !== void 0 ? `${s}:` : ""}${e.key}` };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: s, event: i, keyPath: r } = t, { nestedTrigger: o, nestedToggle: a } = this.props, l = i.target;
    if (!e.items || i.defaultPrevented || o === "hover" && s === void 0 || o === "click" && i.type !== "click" || l.closest(".not-nested-toggle") || a && !l.closest(a) || !a && l.closest("a,.btn,.item-checkbox") && !l.closest(".nested-toggle-icon,.item-icon"))
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
    var s;
    const e = this._getItemFromEvent(t);
    e && ((s = this.props.onHoverItem) == null || s.call(this, e), this.props.nestedTrigger === "hover" && this._toggleFromEvent(e));
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = L(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * s}px`, "--list-indent": `${s}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = S(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
ve.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
ve.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "activeOnChecked", "checkedState", "onClickItem"];
class or extends R {
}
or.NAME = "List";
or.Component = Et;
or.replace = Et.TAG;
class ar extends R {
}
ar.NAME = "NestedList";
ar.Component = ve;
ar.replace = ve.TAG;
let et = class extends ve {
  _getClassName(t) {
    return S(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? null : { popup: t.popup, compact: t.compact });
  }
  _getWrapperProps(t) {
    const { wrap: e, wrapClass: s, height: i, maxHeight: r } = t, o = L({ className: s }, typeof e == "object" ? e : null, i || r ? { style: { height: i, maxHeight: r } } : null);
    return o.className = S("menu-wrapper", { popup: t.popup, compact: t.compact }, o.className), o;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ u(P, { content: t.header }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ u(P, { content: t.footer }, "footer");
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ u("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : super.render(t);
  }
};
et.NAME = "menu";
et.TAG = "menu";
et.inheritNestedProps = [...ve.inheritNestedProps, "compact"];
et.ItemComponents = {
  ...ve.ItemComponents,
  item: [nn, { innerComponent: "a" }]
};
let lr = class extends H {
  constructor(t) {
    super(t), this._input = F(), this._timer = 0, this._handleClearBtnClick = (e) => {
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
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${zt()}`;
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
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: g, clearIcon: p, value: m, compact: _ } = t, { focus: y, value: b } = e, { id: v } = this, w = m ?? b, C = typeof w != "string" || !w.trim().length;
    let x, k, E;
    return g && (E = g === !0 ? /* @__PURE__ */ u("span", { class: "magnifier" }) : /* @__PURE__ */ u(q, { icon: g })), !h && g && (x = /* @__PURE__ */ u("label", { for: v, class: "input-control-prefix", children: E }, "prefix")), p && !C ? k = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: p === !0 ? /* @__PURE__ */ u("span", { class: "close" }) : /* @__PURE__ */ u(q, { icon: p })
      }
    ) : h && g && (k = E), k && (k = /* @__PURE__ */ u("label", { for: v, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ u("div", { class: S("search-box input-control", r, { focus: y, empty: C, compact: _, "has-prefix-icon": x, "has-suffix-icon": k }), style: o, children: [
      x,
      /* @__PURE__ */ u(
        "input",
        {
          ref: this._input,
          id: v,
          type: "text",
          class: S("form-control", i, { "rounded-full": c, "size-sm": _ }),
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
      k
    ] });
  }
};
lr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let kt = class extends et {
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
    this.isRoot && f(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
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
  _getWrapperProps(t) {
    const e = super._getWrapperProps(t), s = this.isRoot && this._searchKeys.length;
    return e.className = S(e.className, "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", s ? "is-search-mode" : "", s && t.expandOnSearch ? "no-toggle-on-search" : ""), e;
  }
  _renderSearchBox(t) {
    const { searchBox: e } = t;
    if (!e || !this.isRoot)
      return null;
    const s = {
      compact: !0,
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && f.extend(s, e), t.search !== void 0 && (s.value = this._searchKeys.join(" "), s.disabled = !0), /* @__PURE__ */ u(lr, { ...s }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, s = this.isRoot && t.searchBox && t.searchPlacement !== "bottom";
    return !e && !s ? null : /* @__PURE__ */ u("header", { className: "search-menu-header", children: [
      e ? this._renderWrapperHeader(t) : null,
      s ? this._renderSearchBox(t) : null
    ] }, "header");
  }
  _renderWrapperFooter(t) {
    const e = t.footer, s = this.isRoot && t.searchBox && t.searchPlacement === "bottom";
    return !e && !s ? null : /* @__PURE__ */ u("footer", { className: "search-menu-footer", children: [
      e ? this._renderWrapperFooter(t) : null,
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
    return f.unique(t.toLowerCase().split(" ").filter((e) => e.length));
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
        h && (o.push(/* @__PURE__ */ u("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
kt.inheritNestedProps = [...et.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
kt.defaultProps = {
  ...et.defaultProps,
  defaultNestedShow: !0,
  wrap: !0
};
class cr extends R {
}
cr.NAME = "Menu";
cr.Component = et;
cr.replace = et.TAG;
class hr extends R {
}
hr.NAME = "SearchMenu";
hr.Component = kt;
hr.replace = kt.TAG;
function Sh({
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
  let g;
  a === !0 ? g = /* @__PURE__ */ u(st, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ u("span", { class: "close" }) }) : _t(a) ? g = a : typeof a == "object" && (g = /* @__PURE__ */ u(st, { ...a, onClick: l }));
  const p = _t(e) ? e : e ? /* @__PURE__ */ u(at, { ...e }) : null;
  return /* @__PURE__ */ u("div", { className: S("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ u(q, { icon: c, className: S("alert-icon", d) }),
    typeof i != "string" ? /* @__PURE__ */ u(P, { content: i }) : /* @__PURE__ */ u("div", { className: S("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ u(P, { content: s }) : s && /* @__PURE__ */ u("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ u("div", { className: "alert-text", children: i }),
      s ? p : null
    ] }),
    s ? null : p,
    g,
    o
  ] });
}
function $h(n) {
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
function Th({
  margin: n,
  type: t,
  placement: e,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ u(
    Sh,
    {
      className: S("messager", r, t, s === !0 ? $h(e) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Nh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Mh = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ze = (n, t, e) => (Nh(n, t, "access private method"), e), ce, ke;
class dr extends R {
  constructor() {
    super(...arguments), Mh(this, ce), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), ze(this, ce, ke).call(this, () => {
      this._show = !0, this.render(), ze(this, ce, ke).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && ze(this, ce, ke).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && ze(this, ce, ke).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), ze(this, ce, ke).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ce = /* @__PURE__ */ new WeakSet();
ke = function(n, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, t);
};
dr.NAME = "MessagerItem";
dr.Component = Th;
var ur = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, pe = (n, t, e) => (ur(n, t, "read from private field"), e ? e.call(n) : t.get(n)), As = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Bs = (n, t, e, s) => (ur(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), xa = (n, t, e) => (ur(n, t, "access private method"), e), Me, Rt, di, Sa, fr, $a;
const Mn = class Ta extends lt {
  constructor() {
    super(...arguments), As(this, di), As(this, fr), As(this, Me, void 0), As(this, Rt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = pe(this, Rt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), xa(this, di, Sa).call(this).show();
  }
  hide() {
    var t;
    (t = pe(this, Rt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...s } = t, i = Ta.ensure(e || "body", { key: `messager_${zt()}`, ...s });
    return i.hide(), i.show(), i;
  }
};
Me = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakSet();
Sa = function() {
  if (pe(this, Rt))
    pe(this, Rt).setOptions(this.options);
  else {
    const n = xa(this, fr, $a).call(this), t = new dr(n, this.options);
    t.on("hidden", () => {
      t.destroy(), n == null || n.remove(), Bs(this, Me, void 0), Bs(this, Rt, void 0);
    }), Bs(this, Rt, t);
  }
  return pe(this, Rt);
};
fr = /* @__PURE__ */ new WeakSet();
$a = function() {
  if (pe(this, Me))
    return pe(this, Me);
  const { placement: n = "top" } = this.options;
  let t = this.$element.find(`.messagers-${n}`);
  t.length || (t = f(`<div class="messagers messagers-${n}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Bs(this, Me, e[0])), e[0];
};
Mn.NAME = "messager";
Mn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Mn.MULTI_INSTANCE = !0;
let qu = Mn;
let En = class extends H {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, g = s / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = s * p);
    const m = (s - p) / 2;
    return /* @__PURE__ */ u("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ u("circle", { cx: g, cy: g, r: m, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ u("circle", { cx: g, cy: g, r: m, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * m * 2, "stroke-dashoffset": Math.PI * m * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ u("text", { x: c ?? g, y: d ?? g + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${m}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
En.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Na extends R {
}
Na.NAME = "ProgressCircle";
Na.Component = En;
const Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: En
}, Symbol.toStringTag, { value: "Module" }));
le(Eh);
const Ue = '[droppable="true"]';
class In extends lt {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: s, beforeDrag: i } = this.options, r = f(t.target), o = r.closest(e), a = o[0];
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
      l && (this.$element.find(l).removeClass(l), f(e).addClass(l));
      let g = typeof o == "function" ? f(o.call(this, e)) : r.find(o || a || Ue);
      if (h && (g = g.filter((p, m) => h.call(this, t, e, m) !== !1)), !g.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), g.addClass(c)), d && r.addClass(d), r.find(Ue).removeAttr("droppable"), g.attr("droppable", "true"), this._$targets = g;
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
      const { dragElement: e } = this, i = f(t.target).closest(Ue)[0];
      if (!e || !i)
        return;
      const r = this.state.dropping;
      if (t.preventDefault(), this._setDragEffect(t), r !== i) {
        const { droppingClass: l } = this.options;
        l && (r && this._leaveDropElement(t, r), f(i).addClass(l)), this._setState({ dropping: i }), (o = this.options.onDragEnter) == null || o.call(this, t, e, i);
      }
      (a = this.options.onDragOver) == null || a.call(this, t, e, i);
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = f(t.target).filter(Ue)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = f(t.target).closest(Ue)[0];
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
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), f(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), f(document).off(this.namespace), super.destroy();
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
    s && f(e).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    this._needClean = !0;
    const { draggingClass: t, droppableClass: e, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = f(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), s && o.removeClass(s), this._$targets = void 0);
  }
}
In.NAME = "Draggable";
In.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Ih = '[moveable="true"]';
class Ss extends lt {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, handle: i, onMoveStart: r } = e, o = f(t.target), a = s === "self" ? this.$element : o.closest(s), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), f(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
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
    this._clean(), f(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var l;
    let s = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = f(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        s.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        s.strategy = this.options.move || "none";
      const d = c.position();
      s = f.extend(s, {
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
      s = f.extend({}, i, s, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = s;
    const { strategy: r, target: o } = s, a = f(o);
    r === "position" ? a.css({ left: s.left, top: s.top }) : r === "transform" ? a.css("transform", `translate(${s.deltaX}px, ${s.deltaY}px)`) : r === "scroll" && (o.scrollLeft = s.scrollLeft - s.deltaX, o.scrollTop = s.scrollTop - s.deltaY), (l = this.options.onChange) == null || l.call(this, s, i, t);
  }
  _clean() {
    f(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: s } = this;
    if (s) {
      const i = f(s);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
Ss.NAME = "Moveable";
Ss.DEFAULT = {
  selector: Ih,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const pr = class Ma extends lt {
  async afterInit() {
    const t = await Ma.loadModule();
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
pr.NAME = "Sortable";
pr.DEFAULT = {
  animation: 150
};
let Ea = pr;
f.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let mr = class extends Et {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new Ea(this.element, t));
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
mr.defaultProps = {
  sortable: !0
};
let Kt = class extends et {
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Kt.NAME = "tree";
Kt.defaultProps = {
  ...et.defaultProps,
  indent: 12
};
Kt.defaultItemProps = {
  ...et.defaultItemProps,
  innerComponent: "div"
};
Kt.inheritNestedProps = [...et.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let $s = class extends kt {
  _getItem(t, e, s) {
    return Kt.getTreeItem(t, super._getItem(t, e, s));
  }
};
$s.NAME = "tree";
$s.inheritNestedProps = [...kt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
$s.defaultItemProps = {
  ...kt.defaultProps,
  innerComponent: "div"
};
let An = class extends Kt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new Ea(this.element, t));
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
An.defaultProps = {
  sortable: !0
};
An.inheritNestedProps = [...Kt.inheritNestedProps, "onSort", "sortable"];
class gr extends R {
}
gr.NAME = "SortableList";
gr.Component = mr;
gr.replace = mr.TAG;
class _r extends R {
}
_r.NAME = "SortableTree";
_r.Component = An;
_r.replace = An.TAG;
class Ia extends R {
}
Ia.NAME = "Avatar";
Ia.Component = ks;
le(bh);
class Aa extends R {
}
Aa.NAME = "BtnGroup";
Aa.Component = Ct;
const Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Ct
}, Symbol.toStringTag, { value: "Module" }));
le(Ah);
const ui = Symbol("EVENT_PICK");
class yr extends H {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!f(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let r = s === "open" ? !0 : void 0;
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
    const { state: e, className: s, disabled: i, readonly: r } = t, { open: o } = e;
    return S(
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
        f(`#${o}`).val(s);
      else
        return /* @__PURE__ */ u("input", { id: o, type: "hidden", className: "pick-value", name: e, value: s, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    f(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, s) => {
      if (s === ui)
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
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && f(`#${e}`).trigger("change", ui), this._skipTriggerChange = !1);
  }
  render(t) {
    return Tt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const se = Math.min, ft = Math.max, rn = Math.round, Ds = Math.floor, ne = (n) => ({
  x: n,
  y: n
}), Dh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ph = {
  start: "end",
  end: "start"
};
function fi(n, t, e) {
  return ft(n, se(t, e));
}
function Oe(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function ie(n) {
  return n.split("-")[0];
}
function He(n) {
  return n.split("-")[1];
}
function Da(n) {
  return n === "x" ? "y" : "x";
}
function br(n) {
  return n === "y" ? "height" : "width";
}
function Ts(n) {
  return ["top", "bottom"].includes(ie(n)) ? "y" : "x";
}
function vr(n) {
  return Da(Ts(n));
}
function Lh(n, t, e) {
  e === void 0 && (e = !1);
  const s = He(n), i = vr(n), r = br(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = on(o)), [o, on(o)];
}
function Rh(n) {
  const t = on(n);
  return [pi(n), t, pi(t)];
}
function pi(n) {
  return n.replace(/start|end/g, (t) => Ph[t]);
}
function Wh(n, t, e) {
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
function Oh(n, t, e, s) {
  const i = He(n);
  let r = Wh(ie(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(pi)))), r;
}
function on(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Dh[t]);
}
function Hh(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Pa(n) {
  return typeof n != "number" ? Hh(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function an(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function ho(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = Ts(t), o = vr(t), a = br(o), l = ie(t), c = r === "y", d = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, g = s[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: s.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: s.y + s.height
      };
      break;
    case "right":
      p = {
        x: s.x + s.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: s.x - i.width,
        y: h
      };
      break;
    default:
      p = {
        x: s.x,
        y: s.y
      };
  }
  switch (He(t)) {
    case "start":
      p[o] -= g * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += g * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const Bh = async (n, t, e) => {
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
  } = ho(c, s, l), g = s, p = {}, m = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: b
    } = a[_], {
      x: v,
      y: w,
      data: C,
      reset: x
    } = await b({
      x: d,
      y: h,
      initialPlacement: s,
      placement: g,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    if (d = v ?? d, h = w ?? h, p = {
      ...p,
      [y]: {
        ...p[y],
        ...C
      }
    }, x && m <= 50) {
      m++, typeof x == "object" && (x.placement && (g = x.placement), x.rects && (c = x.rects === !0 ? await o.getElementRects({
        reference: n,
        floating: t,
        strategy: i
      }) : x.rects), {
        x: d,
        y: h
      } = ho(c, g, l)), _ = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: g,
    strategy: i,
    middlewareData: p
  };
};
async function wr(n, t) {
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
    altBoundary: g = !1,
    padding: p = 0
  } = Oe(t, n), m = Pa(p), y = a[g ? h === "floating" ? "reference" : "floating" : h], b = an(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), v = h === "floating" ? {
    ...o.floating,
    x: s,
    y: i
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), C = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = an(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: w,
    strategy: l
  }) : v);
  return {
    top: (b.top - x.top + m.top) / C.y,
    bottom: (x.bottom - b.bottom + m.bottom) / C.y,
    left: (b.left - x.left + m.left) / C.x,
    right: (x.right - b.right + m.right) / C.x
  };
}
const mi = (n) => ({
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
    } = Oe(n, t) || {};
    if (c == null)
      return {};
    const h = Pa(d), g = {
      x: e,
      y: s
    }, p = vr(i), m = br(p), _ = await o.getDimensions(c), y = p === "y", b = y ? "top" : "left", v = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", C = r.reference[m] + r.reference[p] - g[p] - r.floating[m], x = g[p] - r.reference[p], k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let E = k ? k[w] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement(k))) && (E = a.floating[w] || r.floating[m]);
    const I = C / 2 - x / 2, A = E / 2 - _[m] / 2 - 1, N = se(h[b], A), W = se(h[v], A), B = N, V = E - _[m] - W, M = E / 2 - _[m] / 2 + I, Y = fi(B, M, V), gt = !l.arrow && He(i) != null && M != Y && r.reference[m] / 2 - (M < B ? N : W) - _[m] / 2 < 0, It = gt ? M < B ? M - B : M - V : 0;
    return {
      [p]: g[p] + It,
      data: {
        [p]: Y,
        centerOffset: M - Y - It,
        ...gt && {
          alignmentOffset: It
        }
      },
      reset: gt
    };
  }
}), Dn = function(n) {
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
        fallbackPlacements: g,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: _ = !0,
        ...y
      } = Oe(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const b = ie(i), v = ie(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = g || (v || !_ ? [on(a)] : Rh(a));
      !g && m !== "none" && C.push(...Oh(a, _, m, w));
      const x = [a, ...C], k = await wr(t, y), E = [];
      let I = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (d && E.push(k[b]), h) {
        const B = Lh(i, o, w);
        E.push(k[B[0]], k[B[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: E
      }], !E.every((B) => B <= 0)) {
        var A, N;
        const B = (((A = r.flip) == null ? void 0 : A.index) || 0) + 1, V = x[B];
        if (V)
          return {
            data: {
              index: B,
              overflows: I
            },
            reset: {
              placement: V
            }
          };
        let M = (N = I.filter((Y) => Y.overflows[0] <= 0).sort((Y, gt) => Y.overflows[1] - gt.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!M)
          switch (p) {
            case "bestFit": {
              var W;
              const Y = (W = I.map((gt) => [gt.placement, gt.overflows.filter((It) => It > 0).reduce((It, ec) => It + ec, 0)]).sort((gt, It) => gt[1] - It[1])[0]) == null ? void 0 : W[0];
              Y && (M = Y);
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
async function Fh(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = ie(e), a = He(e), l = Ts(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = Oe(t, n);
  let {
    mainAxis: g,
    crossAxis: p,
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
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), l ? {
    x: p * d,
    y: g * c
  } : {
    x: g * c,
    y: p * d
  };
}
const Pn = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s
      } = t, i = await Fh(t, n);
      return {
        x: e + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
}, as = function(n) {
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
      } = Oe(n, t), c = {
        x: e,
        y: s
      }, d = await wr(t, l), h = Ts(ie(i)), g = Da(h);
      let p = c[g], m = c[h];
      if (r) {
        const y = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", v = p + d[y], w = p - d[b];
        p = fi(v, p, w);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", v = m + d[y], w = m - d[b];
        m = fi(v, m, w);
      }
      const _ = a.fn({
        ...t,
        [g]: p,
        [h]: m
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
}, zh = function(n) {
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
      } = Oe(n, t), l = await wr(t, a), c = ie(e), d = He(e), h = Ts(e) === "y", {
        width: g,
        height: p
      } = s.floating;
      let m, _;
      c === "top" || c === "bottom" ? (m = c, _ = d === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (_ = c, m = d === "end" ? "top" : "bottom");
      const y = p - l[m], b = g - l[_], v = !t.middlewareData.shift;
      let w = y, C = b;
      if (h) {
        const k = g - l.left - l.right;
        C = d || v ? se(b, k) : k;
      } else {
        const k = p - l.top - l.bottom;
        w = d || v ? se(y, k) : k;
      }
      if (v && !d) {
        const k = ft(l.left, 0), E = ft(l.right, 0), I = ft(l.top, 0), A = ft(l.bottom, 0);
        h ? C = g - 2 * (k !== 0 || E !== 0 ? k + E : ft(l.left, l.right)) : w = p - 2 * (I !== 0 || A !== 0 ? I + A : ft(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: C,
        availableHeight: w
      });
      const x = await i.getDimensions(r.floating);
      return g !== x.width || p !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function re(n) {
  return La(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function pt(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Gt(n) {
  var t;
  return (t = (La(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function La(n) {
  return n instanceof Node || n instanceof pt(n).Node;
}
function Vt(n) {
  return n instanceof Element || n instanceof pt(n).Element;
}
function Nt(n) {
  return n instanceof HTMLElement || n instanceof pt(n).HTMLElement;
}
function uo(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof pt(n).ShadowRoot;
}
function Ns(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = bt(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function Uh(n) {
  return ["table", "td", "th"].includes(re(n));
}
function Cr(n) {
  const t = kr(), e = bt(n);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function Vh(n) {
  let t = Pe(n);
  for (; Nt(t) && !Ln(t); ) {
    if (Cr(t))
      return t;
    t = Pe(t);
  }
  return null;
}
function kr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ln(n) {
  return ["html", "body", "#document"].includes(re(n));
}
function bt(n) {
  return pt(n).getComputedStyle(n);
}
function Rn(n) {
  return Vt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Pe(n) {
  if (re(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    uo(n) && n.host || // Fallback.
    Gt(n)
  );
  return uo(t) ? t.host : t;
}
function Ra(n) {
  const t = Pe(n);
  return Ln(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Nt(t) && Ns(t) ? t : Ra(t);
}
function ls(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Ra(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = pt(i);
  return r ? t.concat(o, o.visualViewport || [], Ns(i) ? i : [], o.frameElement && e ? ls(o.frameElement) : []) : t.concat(i, ls(i, [], e));
}
function Wa(n) {
  const t = bt(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Nt(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = rn(e) !== r || rn(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function xr(n) {
  return Vt(n) ? n : n.contextElement;
}
function Ee(n) {
  const t = xr(n);
  if (!Nt(t))
    return ne(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Wa(t);
  let o = (r ? rn(e.width) : e.width) / s, a = (r ? rn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const jh = /* @__PURE__ */ ne(0);
function Oa(n) {
  const t = pt(n);
  return !kr() || !t.visualViewport ? jh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Kh(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== pt(n) ? !1 : t;
}
function _e(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = xr(n);
  let o = ne(1);
  t && (s ? Vt(s) && (o = Ee(s)) : o = Ee(n));
  const a = Kh(r, e, s) ? Oa(r) : ne(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const g = pt(r), p = s && Vt(s) ? pt(s) : s;
    let m = g.frameElement;
    for (; m && s && p !== g; ) {
      const _ = Ee(m), y = m.getBoundingClientRect(), b = bt(m), v = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * _.x, w = y.top + (m.clientTop + parseFloat(b.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += v, c += w, m = pt(m).frameElement;
    }
  }
  return an({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Gh(n) {
  let {
    rect: t,
    offsetParent: e,
    strategy: s
  } = n;
  const i = Nt(e), r = Gt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = ne(1);
  const l = ne(0);
  if ((i || !i && s !== "fixed") && ((re(e) !== "body" || Ns(r)) && (o = Rn(e)), Nt(e))) {
    const c = _e(e);
    a = Ee(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function qh(n) {
  return Array.from(n.getClientRects());
}
function Ha(n) {
  return _e(Gt(n)).left + Rn(n).scrollLeft;
}
function Yh(n) {
  const t = Gt(n), e = Rn(n), s = n.ownerDocument.body, i = ft(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = ft(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + Ha(n);
  const a = -e.scrollTop;
  return bt(s).direction === "rtl" && (o += ft(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Xh(n, t) {
  const e = pt(n), s = Gt(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = kr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Zh(n, t) {
  const e = _e(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = Nt(n) ? Ee(n) : ne(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function fo(n, t, e) {
  let s;
  if (t === "viewport")
    s = Xh(n, e);
  else if (t === "document")
    s = Yh(Gt(n));
  else if (Vt(t))
    s = Zh(t, e);
  else {
    const i = Oa(n);
    s = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return an(s);
}
function Ba(n, t) {
  const e = Pe(n);
  return e === t || !Vt(e) || Ln(e) ? !1 : bt(e).position === "fixed" || Ba(e, t);
}
function Jh(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = ls(n, [], !1).filter((a) => Vt(a) && re(a) !== "body"), i = null;
  const r = bt(n).position === "fixed";
  let o = r ? Pe(n) : n;
  for (; Vt(o) && !Ln(o); ) {
    const a = bt(o), l = Cr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ns(o) && !l && Ba(n, o)) ? s = s.filter((d) => d !== o) : i = a, o = Pe(o);
  }
  return t.set(n, s), s;
}
function Qh(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? Jh(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, d) => {
    const h = fo(t, d, i);
    return c.top = ft(h.top, c.top), c.right = se(h.right, c.right), c.bottom = se(h.bottom, c.bottom), c.left = ft(h.left, c.left), c;
  }, fo(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function td(n) {
  return Wa(n);
}
function ed(n, t, e) {
  const s = Nt(t), i = Gt(t), r = e === "fixed", o = _e(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ne(0);
  if (s || !s && !r)
    if ((re(t) !== "body" || Ns(i)) && (a = Rn(t)), s) {
      const c = _e(t, !0, r, t);
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
function po(n, t) {
  return !Nt(n) || bt(n).position === "fixed" ? null : t ? t(n) : n.offsetParent;
}
function Fa(n, t) {
  const e = pt(n);
  if (!Nt(n))
    return e;
  let s = po(n, t);
  for (; s && Uh(s) && bt(s).position === "static"; )
    s = po(s, t);
  return s && (re(s) === "html" || re(s) === "body" && bt(s).position === "static" && !Cr(s)) ? e : s || Vh(n) || e;
}
const sd = async function(n) {
  let {
    reference: t,
    floating: e,
    strategy: s
  } = n;
  const i = this.getOffsetParent || Fa, r = this.getDimensions;
  return {
    reference: ed(t, await i(e), s),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function nd(n) {
  return bt(n).direction === "rtl";
}
const id = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gh,
  getDocumentElement: Gt,
  getClippingRect: Qh,
  getOffsetParent: Fa,
  getElementRects: sd,
  getClientRects: qh,
  getDimensions: td,
  getScale: Ee,
  isElement: Vt,
  isRTL: nd
};
function rd(n, t) {
  let e = null, s;
  const i = Gt(n);
  function r() {
    clearTimeout(s), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: g
    } = n.getBoundingClientRect();
    if (a || t(), !h || !g)
      return;
    const p = Ds(d), m = Ds(i.clientWidth - (c + h)), _ = Ds(i.clientHeight - (d + g)), y = Ds(c), v = {
      rootMargin: -p + "px " + -m + "px " + -_ + "px " + -y + "px",
      threshold: ft(0, se(1, l)) || 1
    };
    let w = !0;
    function C(x) {
      const k = x[0].intersectionRatio;
      if (k !== l) {
        if (!w)
          return o();
        k ? o(!1, k) : s = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(C, {
        ...v,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(C, v);
    }
    e.observe(n);
  }
  return o(!0), r;
}
function Sr(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = xr(n), d = i || r ? [...c ? ls(c) : [], ...ls(t)] : [];
  d.forEach((b) => {
    i && b.addEventListener("scroll", e, {
      passive: !0
    }), r && b.addEventListener("resize", e);
  });
  const h = c && a ? rd(c, e) : null;
  let g = -1, p = null;
  o && (p = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === c && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let m, _ = l ? _e(n) : null;
  l && y();
  function y() {
    const b = _e(n);
    _ && (b.x !== _.x || b.y !== _.y || b.width !== _.width || b.height !== _.height) && e(), _ = b, m = requestAnimationFrame(y);
  }
  return e(), () => {
    d.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const Wn = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: id,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return Bh(n, t, {
    ...i,
    platform: r
  });
};
var fe, xt, Zt;
class za extends H {
  constructor(e) {
    super(e);
    j(this, fe, void 0);
    j(this, xt, void 0);
    j(this, Zt, void 0);
    K(this, fe, F()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = f(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = D(this, fe)) == null ? void 0 : e.current;
  }
  get container() {
    return D(this, Zt);
  }
  _handleClick(e) {
    const { togglePop: s } = this.props, i = f(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), s(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(e) {
    const { className: s, state: i } = e, { open: r } = i;
    return S(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: s,
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
      id: `pick-pop-${s}`,
      className: this._getClass(e),
      style: c,
      ref: D(this, fe),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!D(this, Zt)) {
      const s = f(e.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = f("<div>").addClass("pick-container").appendTo(s)), K(this, Zt, i[0]);
    }
    return D(this, Zt);
  }
  _render(e) {
    return /* @__PURE__ */ u("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: s, props: i } = this, { state: r } = i;
    if (!e || !s || !r.open) {
      D(this, xt) && (D(this, xt).call(this), K(this, xt, void 0));
      return;
    }
    D(this, xt) || K(this, xt, Sr(s, e, () => {
      const { placement: o, width: a } = i;
      Wn(s, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Dn() : null, as(), Pn(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        f.isDetached(s) || (f(e).css({
          left: l,
          top: c,
          width: a === "100%" ? f(s).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e));
      }), a === "100%" && f(e).css({ width: f(e).width() });
    }));
  }
  componentDidMount() {
    var e, s;
    this.layout(), f(document).on("click", this._handleDocClick), (s = (e = this.props).afterRender) == null || s.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, s;
    (s = (e = this.props).afterRender) == null || s.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    f(document).off("click", this._handleDocClick);
    const e = D(this, xt);
    e && (e(), K(this, xt, void 0)), K(this, Zt, void 0), K(this, fe, void 0), f(`#pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(e) {
    return uh(this._render(e), this._getContainer(e));
  }
}
fe = new WeakMap(), xt = new WeakMap(), Zt = new WeakMap();
var Ua = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, qt = (n, t, e) => (Ua(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Gn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, we = (n, t, e, s) => (Ua(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Fs, wt, Xe;
let ht = class extends H {
  constructor(t) {
    super(t), Gn(this, Fs, void 0), Gn(this, wt, 0), Gn(this, Xe, F()), this._trigger = F(), this.toggle = async (e, s) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      qt(this, wt) && (clearTimeout(qt(this, wt)), we(this, wt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await Js(200, (a) => {
        we(this, wt, a);
      }), we(this, wt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Js(50, (a) => {
        we(this, wt, a);
      }), we(this, wt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1
    }, we(this, Fs, t.id ?? `_pick${zt()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return qt(this, Fs);
  }
  get pop() {
    return qt(this, Xe).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), qt(this, wt) && clearTimeout(qt(this, wt));
    const t = qt(this, Xe).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ u(o, { ref: qt(this, Xe), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ u(Re, { children: [
      /* @__PURE__ */ u(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Fs = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
ht.Trigger = yr;
ht.Pop = za;
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
let Va = class extends ht {
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
    if (t && f(t).css("backgroundColor", r), e && f(e).css("borderColor", r), s && f(s).css("color", r), i) {
      const o = f(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s } = t, { value: i } = e;
    return [
      s ? /* @__PURE__ */ u(q, { icon: s }, "icon") : /* @__PURE__ */ u("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = f.extend({
      color: e.value
    }, s.style), s.className = S("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, e) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ u("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ u("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ u("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ u("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ u(q, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ u("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ u(q, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Va.defaultProps = {
  ...ht.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class ja extends R {
}
ja.NAME = "ColorPicker";
ja.Component = Va;
const cs = 24 * 60 * 60 * 1e3, G = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), od = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(G(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, Ms = (n, t = /* @__PURE__ */ new Date()) => G(n).toDateString() === G(t).toDateString(), gi = (n, t = /* @__PURE__ */ new Date()) => G(n).getFullYear() === G(t).getFullYear(), Ka = (n, t = /* @__PURE__ */ new Date()) => (n = G(n), t = G(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), sf = (n, t = /* @__PURE__ */ new Date()) => {
  n = G(n), t = G(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, nf = (n, t) => Ms(G(t), n), rf = (n, t) => Ms(G(t).getTime() - cs, n), of = (n, t) => Ms(G(t).getTime() + cs, n), nt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = G(n), Number.isNaN(n.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", gi(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, af = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = nt(n, gi(n) ? s.month : s.full);
  if (Ms(n, t))
    return i;
  const r = nt(t, gi(n, t) ? Ka(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var ps, ms;
class Ga extends H {
  constructor() {
    super(...arguments);
    j(this, ps, F());
    j(this, ms, (e, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    f(D(this, ps).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: s = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += s)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ u("div", { className: "time-picker-menu row", ref: D(this, ps), children: [
      /* @__PURE__ */ u(
        et,
        {
          className: l,
          items: o,
          onClickItem: D(this, ms).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ u(
        et,
        {
          className: l,
          items: a,
          onClickItem: D(this, ms).bind(this, "minute")
        }
      )
    ] });
  }
}
ps = new WeakMap(), ms = new WeakMap();
var ad = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ps = (n, t, e) => (ad(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ls = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, _i, yi, bi, vi;
const mo = (n) => {
  if (!n)
    return;
  const t = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let qa = class extends ht {
  constructor(t) {
    super(t), Ls(this, _i, () => {
      this.toggle(!0);
    }), Ls(this, yi, (s) => {
      this.setTime(s.target.value);
    }), Ls(this, bi, (s, i) => {
      this.setTime({ [s]: i });
    }), Ls(this, vi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = nt(/* @__PURE__ */ new Date(), t.format));
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
    const s = mo(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? nt(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(e);
    });
  }
  getTime() {
    const t = mo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: Ps(this, vi), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-time" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: Ps(this, _i), onChange: Ps(this, yi) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: S(s.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, s] = this.getTime() || [];
    return /* @__PURE__ */ u(Ga, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: Ps(this, bi) });
  }
};
_i = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
vi = /* @__PURE__ */ new WeakMap();
qa.defaultProps = {
  ...ht.defaultProps,
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
const ld = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * cs;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, go = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => nt(e, t)));
var mn;
class cd extends H {
  constructor() {
    super(...arguments);
    j(this, mn, (e) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = f(e.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(e) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = Q.getLang("weekNames"),
      monthNames: o = Q.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], g = "btn ghost square rounded-full";
    for (let k = 0; k < 7; k++) {
      const E = (i + k) % 7;
      h.push(/* @__PURE__ */ u("div", { className: S("col mini-calendar-day", { "is-weekend": E === 0 || E === 6 }), children: /* @__PURE__ */ u("div", { children: r ? r[E] : E }) }, k));
    }
    const { startTime: p, days: m, firstDay: _ } = ld(a, l, i), y = _ + m * cs;
    let b = p;
    const v = [], w = "yyyy-MM-dd", C = go(c, w), x = go(d, w);
    for (; b <= y; ) {
      const k = [];
      for (let E = 0; E < 7; E++) {
        const I = new Date(b), A = I.getDate(), N = nt(I, w), W = I.getDay(), B = Ka(I, _), V = S("col mini-calendar-day", {
          active: C.has(N),
          selected: x.has(N),
          "is-first": A === 1,
          "is-in-month": B,
          "is-out-month": !B,
          "is-today": Ms(I, s),
          "is-weekend": W === 0 || W === 6
        });
        k.push(
          /* @__PURE__ */ u("div", { className: V, "data-date": N, children: /* @__PURE__ */ u("a", { className: g, onClick: D(this, mn), children: A === 1 && o ? o[I.getMonth()] : I.getDate() }) }, N)
        ), b += cs;
      }
      v.push(/* @__PURE__ */ u("div", { className: "row", children: k }, b));
    }
    return /* @__PURE__ */ u("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ u("div", { className: "row", children: h }),
      v
    ] });
  }
}
mn = new WeakMap();
var gs, gn;
class _o extends H {
  constructor() {
    super(...arguments);
    j(this, gs, F());
    j(this, gn, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = f(e.target).closest("[data-value]").dataset("value");
      r && (s(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    f(D(this, gs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: s, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ u(st, { type: "ghost", "data-value": c, active: c === o, className: S(l === c ? "is-current" : ""), onClick: D(this, gn), children: c }, c));
    return /* @__PURE__ */ u("div", { className: s, ref: D(this, gs), children: a });
  }
}
gs = new WeakMap(), gn = new WeakMap();
var Ie, _s, ys, bs, vs, ws, _n, Xa, yn, Za;
class Ya extends H {
  constructor(e) {
    super(e);
    j(this, _n);
    j(this, yn);
    j(this, Ie, void 0);
    j(this, _s, void 0);
    j(this, ys, void 0);
    j(this, bs, void 0);
    j(this, vs, void 0);
    j(this, ws, void 0);
    K(this, Ie, F()), K(this, _s, (r) => {
      const o = f(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), K(this, ys, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), K(this, bs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), K(this, vs, (r) => {
      this.setState({ year: r, select: "day" });
    }), K(this, ws, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = od(l, r.substring(5).replace("+", ""))), r = nt(l, "yyyy-MM-dd");
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
    f(D(this, Ie).current).find(".active").scrollIntoView();
  }
  render(e, s) {
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
    } = s, p = g === "day", m = G(e.minDate || "1970-1-1"), _ = G(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ u("div", { className: "date-picker-menu row", ref: D(this, Ie), onClick: D(this, _s), children: [
      zn(this, _n, Xa).call(this, e),
      /* @__PURE__ */ u("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ u("div", { className: "row p-2", children: [
          /* @__PURE__ */ u(st, { type: g === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: tt(r, d) }),
          /* @__PURE__ */ u(st, { type: g === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ u("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ u(st, { type: "ghost", size: "sm", square: !0, onClick: D(this, ys), children: /* @__PURE__ */ u("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ u(st, { type: "ghost", size: "sm", square: !0, onClick: D(this, bs), children: /* @__PURE__ */ u("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ u(
          cd,
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
        g === "year" ? /* @__PURE__ */ u(
          _o,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: m.getFullYear(),
            max: _.getFullYear(),
            onChange: D(this, vs)
          }
        ) : g === "month" ? /* @__PURE__ */ u(
          _o,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: D(this, ws)
          }
        ) : null,
        p ? zn(this, yn, Za).call(this, e) : null
      ] })
    ] });
  }
}
Ie = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), bs = new WeakMap(), vs = new WeakMap(), ws = new WeakMap(), _n = new WeakSet(), Xa = function(e) {
  let { menu: s } = e;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ u(et, { ...s })) : null;
}, yn = new WeakSet(), Za = function(e) {
  let { actions: s } = e;
  const { todayText: i, clearText: r } = e;
  return s || (s = [{ text: i, "data-set-date": nt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ u("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ u(at, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ u(st, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var hd = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, qn = (n, t, e) => (hd(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Yn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, wi, Ci, ki;
let Ja = class extends ht {
  constructor(t) {
    super(t), Yn(this, wi, () => {
      this.toggle(!0);
    }), Yn(this, Ci, (s) => {
      this.setDate(s.target.value);
    }), Yn(this, ki, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, readonly: l, format: c } = this.props;
      if (a || l)
        return;
      const d = G(s), h = !s || Number.isNaN(d.getDay());
      this.setState({ value: h ? o ? r : "" : nt(d, c) }, () => {
        !h && i && i(s), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = nt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: qn(this, ki), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: qn(this, wi), onChange: qn(this, Ci) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: S(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: S(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = Q.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: g, required: p } = t;
    return /* @__PURE__ */ u(
      Ya,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: g
      }
    );
  }
};
wi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
Ja.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Qa extends R {
}
Qa.NAME = "TimePicker";
Qa.Component = qa;
class tl extends R {
}
tl.NAME = "DatePicker";
tl.Component = Ja;
class dd extends H {
  render(t) {
    const { date: e, time: s } = t;
    return /* @__PURE__ */ u("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ u(Ya, { ...e }),
      /* @__PURE__ */ u("div", { className: "divider" }),
      /* @__PURE__ */ u(Ga, { ...s })
    ] });
  }
}
var ud = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ve = (n, t, e) => (ud(n, t, "read from private field"), e ? e.call(n) : t.get(n)), je = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, xi, Si, $i, Ti, Ni;
const yo = (n) => {
  if (!n)
    return;
  const t = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let el = class extends ht {
  constructor(t) {
    super(t), je(this, xi, () => {
      this.toggle(!0);
    }), je(this, Si, (o) => {
      this.setDate(o.target.value);
    }), je(this, $i, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), je(this, Ti, (o, a) => {
      this.setTime({ [o]: a });
    }), je(this, Ni, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, readonly: g, joiner: p } = this.props;
      if (h || g)
        return;
      const m = G(o), _ = !o || Number.isNaN(m.getDay()), y = nt(m, d), [, b = "00:00"] = this.state.value.split(p);
      this.setState({ value: _ ? c ? l : "" : `${y}${p}${b}` }, () => {
        !_ && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: s, timeFormat: i, joiner: r } = t;
    e && (this.state.value = nt(e === "today" ? /* @__PURE__ */ new Date() : e, `${s}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: s, defaultValue: i, timeFormat: r, joiner: o, disabled: a, readonly: l, dateFormat: c } = this.props;
    if (a || l)
      return;
    let d = "";
    if (typeof t == "string")
      d = t;
    else {
      const [, p = "00:00"] = this.state.value.split(o), [m, _] = p.split(":"), { hour: y = +m, minute: b = +_ } = t;
      d = `${y}:${b}`;
    }
    const h = yo(d), g = this.state.value.split(o)[0] || nt(/* @__PURE__ */ new Date(), c);
    this.setState({ value: h ? `${g}${o}${nt(h, r)}` : s ? i : "" }, () => {
      !h && e && e(d);
    });
  }
  getTime() {
    const t = yo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Ve(this, $i),
        children: /* @__PURE__ */ u("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u(
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
          onFocus: Ve(this, xi),
          onChange: (g) => {
            Ve(this, Si).call(this, g), Ve(this, Ni).call(this, g);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ u("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: S(s.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: S(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = Q.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: g, required: p, minuteStep: m } = t, [_, y] = this.getTime() || [], b = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: g
      },
      time: {
        hour: _,
        minute: y,
        minuteStep: m,
        onChange: Ve(this, Ti)
      }
    };
    return /* @__PURE__ */ u(dd, { ...b });
  }
};
xi = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
el.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class sl extends R {
}
sl.NAME = "DatetimePicker";
sl.Component = el;
const bo = "show", vo = "in", fd = '[data-dismiss="modal"]', Xn = "modal-hide", Be = class xe extends lt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(fd) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
      xe.getAll().some((t) => t.shown) || f("html").enableScroll();
    }), this.on("show", () => {
      f("html").disableScroll();
    }), this.shown && f("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    const { modalElement: e } = this, s = f(e);
    if (this._shown)
      return s.removeClass(Xn).css("z-index", `${xe.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [Xn]: !1
    }, bo, o).css({
      zIndex: `${xe.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthersOnShow && this.options.hideOthersOnShow !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !s.closest(c.element).length && c.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      s.addClass(vo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    f(this.modalElement).addClass(Xn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, f(this.modalElement).removeClass(vo), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(bo), this.emit("hidden");
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
    const i = f(s);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = xe.query(t, void 0, (s) => s.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = xe.query(t, void 0, (s) => !s.shown)) == null || e.show();
  }
};
Be.NAME = "Modal";
Be.MULTI_INSTANCE = !0;
Be.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Be.hideOthersOnShow = !0;
Be.zIndex = 1500;
let hs = Be;
f(window).on(`resize.${hs.NAMESPACE}`, () => {
  hs.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class nl extends H {
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
    return _t(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ u("div", { className: S("modal-header", e), children: /* @__PURE__ */ u("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : _t(t) ? t : /* @__PURE__ */ u("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ u(at, { ...t }) : null,
      e ? /* @__PURE__ */ u("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? _t(t) ? t : /* @__PURE__ */ u("div", { className: S("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return _t(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ u("div", { className: S("modal-footer", e), children: s ? /* @__PURE__ */ u(at, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ u("div", { className: S("modal-dialog", t), style: e, children: /* @__PURE__ */ u("div", { className: S("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
nl.defaultProps = { closeBtn: !0 };
class il extends H {
  constructor() {
    super(...arguments), this._ref = F(), this.state = {}, this._watchIframeHeight = () => {
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
il.defaultProps = {
  watchHeight: !0
};
var $r = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, vt = (n, t, e) => ($r(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ke = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ce = (n, t, e, s) => ($r(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), zs = (n, t, e) => ($r(n, t, "access private method"), e), At, Ze, Dt, ln, Tr, Us, Mi;
function pd(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function md(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await f.ajax({
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
    body: e === "html" ? /* @__PURE__ */ u(ge, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function gd(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ u(il, { url: e, watchHeight: !o })
  };
}
const _d = {
  custom: pd,
  ajax: md,
  iframe: gd
}, Zn = "loading", rl = class Se extends hs {
  constructor() {
    super(...arguments), Ke(this, ln), Ke(this, Us), Ke(this, At, void 0), Ke(this, Ze, void 0), Ke(this, Dt, void 0);
  }
  get id() {
    return vt(this, Ze);
  }
  get loading() {
    var t;
    return (t = vt(this, At)) == null ? void 0 : t.classList.contains(Zn);
  }
  get shown() {
    var t;
    return !!((t = vt(this, At)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = vt(this, At);
    if (!t) {
      const { options: e } = this;
      let s = vt(this, Ze);
      s || (s = e.id || `modal-${zt()}`, Ce(this, Ze, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], !t) {
        const r = this.key;
        t = f("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      Ce(this, At, t);
    }
    return t;
  }
  get $emitter() {
    const t = vt(this, At);
    return t ? f(t) : this.$element;
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
    const t = vt(this, At);
    t && (f(t).removeData(this.constructor.KEY).remove(), Ce(this, At, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, Dt) && clearTimeout(vt(this, Dt));
    const { modalElement: t, options: e } = this, s = f(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = _d[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", o).addClass(Zn), r && Ce(this, Dt, window.setTimeout(() => {
      Ce(this, Dt, 0), zs(this, Us, Mi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await zs(this, Us, Mi).call(this, this.options.failedTip) : l && typeof l == "object" && await zs(this, ln, Tr).call(this, l), vt(this, Dt) && (clearTimeout(vt(this, Dt)), Ce(this, Dt, 0)), this.layout(), await Js(100), s.removeClass(Zn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), r.key === void 0 && (r.key = r.id);
      const o = Se.ensure(s, r), a = `${Se.NAMESPACE}.open${zt()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let g = typeof s == "object" && s.html ? /* @__PURE__ */ u("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ u("div", { children: s });
    i ? g = /* @__PURE__ */ u("div", { className: S("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ u("div", { className: `icon ${i} ${r}` }),
      g
    ] }) : g = /* @__PURE__ */ u("div", { className: S("modal-body", h.bodyClass), children: g });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = Q.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && p.push(y);
    }, []);
    let m;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: y, event: b }) => {
        const v = Se.query(b.target, c);
        m = y.key, (a == null ? void 0 : a(y, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Se.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: g,
      backdrop: "static",
      hideOthersOnShow: !1,
      custom: { footerActions: _, ...h },
      ...d
    }), m;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: s, ...i } = t;
    return await Se.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
At = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakSet();
Tr = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return f(this.modalElement).html(n[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, os(
      /* @__PURE__ */ u(nl, { ...n }),
      this.modalElement
    );
  });
};
Us = /* @__PURE__ */ new WeakSet();
Mi = function(n) {
  if (n)
    return zs(this, ln, Tr).call(this, {
      body: /* @__PURE__ */ u("div", { className: "modal-load-failed", children: n })
    });
};
rl.DEFAULT = {
  ...hs.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let yd = rl;
const bd = '[data-toggle="modal"]';
class Ei extends lt {
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
      e = hs.ensure(s, t);
    } else
      e = yd.ensure(this.container, t);
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
Ei.NAME = "ModalTrigger";
f(document).on(`click${Ei.NAMESPACE}`, bd, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = Ei.ensure(t);
    e && (e.show(), n.preventDefault());
  }
});
let Nr = class extends Et {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
};
Nr.NAME = "nav";
Nr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class ol extends R {
}
ol.NAME = "Nav";
ol.Component = Nr;
function ds(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function vd({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = ds(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : tt(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : tt(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ u(st, { type: e, ...a });
}
function wd({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = ds(i, e);
  return s = typeof s == "function" ? s(a) : tt(s, a), /* @__PURE__ */ u(U, { ...o, children: [
    r,
    s
  ] });
}
function Cd({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ u(st, { type: t, ...o })), l = (d, h) => {
    const g = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const m = ds(s, p);
      i && (o.url = typeof i == "function" ? i(m) : tt(i, m)), g.push(/* @__PURE__ */ u(st, { type: t, ...o }));
    }
    return g;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let kd = class extends H {
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
      contentClass: g,
      arrowStyle: p,
      onlyInner: m
    } = t;
    let _ = /* @__PURE__ */ u(P, { content: r }, "content");
    (g || i) && (_ = /* @__PURE__ */ u("div", { className: g, children: _ }, "content"));
    const y = [], b = l ? /* @__PURE__ */ u("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ u("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ u("div", { className: d, children: [
      i ? /* @__PURE__ */ u("div", { className: h, children: i }) : null,
      b
    ] }, "heading")) : y.push(b), y.push(_), c && y.push(/* @__PURE__ */ u("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), m ? y : /* @__PURE__ */ u("div", { id: e, className: S("popover", a, { popup: s }), style: o, children: y });
  }
};
class Mr extends R {
}
Mr.NAME = "PopoverPanel";
Mr.Component = kd;
const xd = '[data-toggle="popover"]', wo = "show", Co = "in";
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
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = f(i), { namespace: a } = this;
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), f(t)[0]) : this._createTarget();
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
    const r = f(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(wo), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || f(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(Co), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && f(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o } = this.options, a = f(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(Co), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || f(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), f(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(wo), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, s ? 200 : 0);
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
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = Sr(t, e, () => {
      const { animation: i, name: r = "popover" } = this.options;
      if (!this._virtual) {
        const o = {}, { width: a, height: l } = this.options;
        a && (o.width = typeof a == "function" ? a() : a === "100%" ? f(t).width() : a), l && (o.height = typeof l == "function" ? l() : l), Object.keys(o).length && f(e).css(o);
      }
      Wn(...this._getLayoutOptions()).then(({ x: o, y: a, middlewareData: l, placement: c, strategy: d }) => {
        if (t instanceof HTMLElement && We(t)) {
          this.hide(!0);
          return;
        }
        const h = {
          position: d,
          left: o,
          top: a
        }, g = f(e).css(h), p = c.split("-")[0], m = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], _ = l.arrow;
        _ && g.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${r}-arrow arrow-${m}`), i === !0 && g.attr("class", `${g.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${m}`), this._virtual || f(this._triggerElement).attr("data-popover-placement", p);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = f(e);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new Mr(e, s), r.on("inited", () => this.layout())), this._panel = r;
    } else
      s.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
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
        i ? Dn() : null,
        r ? zh({
          apply({ availableWidth: g, availableHeight: p, placement: m }) {
            f(e).css({ maxHeight: p - (["top", "bottom"].includes(m.split("-")[0]) ? h : 0) - 2, maxWidth: g - 2 });
          }
        }) : null,
        o ? as(typeof o == "object" ? o : void 0) : null,
        a || h ? Pn((a || 0) + h) : null,
        l ? mi({ element: d }) : null
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
    const { container: t = "body" } = this.options, e = f(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = f("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
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
f(document).on(`click${yt.NAMESPACE} mouseenter${yt.NAMESPACE}`, xd, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.data(yt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    yt.ensure(t, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const Sd = '[data-toggle="dropdown"]';
class $t extends yt {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      f(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: s, onClickItem: i, relativeTarget: r = this._triggerElement } = this.options;
    return {
      items: t,
      placement: e,
      onClickItem: i,
      relativeTarget: { target: r, event: this.options.triggerEvent, dropdown: this },
      ...s
    };
  }
  _getRenderOptions() {
    const t = super._getRenderOptions();
    return this._dynamic ? {
      ...t,
      contentClass: "",
      popup: !1,
      content: Tt(Er, this._getMenuOptions())
    } : t;
  }
}
$t.NAME = "Dropdown";
$t.DEFAULT = {
  ...yt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
f(document).on(`click${$t.NAMESPACE} mouseenter${$t.NAMESPACE}`, Sd, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.data($t.KEY)) {
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
    !r.target && !r.items && !r.menu && (r.target = t.next(".dropdown-menu")), $t.ensure(t, r), n.preventDefault();
  }
});
class On extends st {
  constructor() {
    super(...arguments), this._ref = F();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = f(this.triggerElement), a = $t.get(this.triggerElement), l = {
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
    (t = $t.get(this.triggerElement)) == null || t.destroy();
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
On.defaultProps = {
  caret: !0
};
Object.assign(Ct.ItemComponents, { dropdown: On });
Object.assign(at.ItemComponents, { dropdown: On });
class Er extends kt {
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
      middleware: [Dn(), as(), Pn(1)]
    }).then(({ x: s, y: i }) => {
      f(t).css({
        left: s,
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
Er.defaultProps = {
  ...kt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Er.inheritNestedProps = [...kt.inheritNestedProps, "popup"];
function $d({
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
      url: typeof e == "function" ? e(d) : tt(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : tt(a, t), i.menu = { ...i.menu, className: S((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ u(On, { type: "dropdown", dropdown: i, ...o });
}
function Td({
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
  const g = (_) => {
    var y;
    h = Number((y = _.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = ds(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(y) : tt(l, y));
  }, m = ds(i, t || 0);
  return d.url = typeof l == "function" ? l(m) : tt(l, m), /* @__PURE__ */ u("div", { className: S("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ u("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: g }),
    /* @__PURE__ */ u(st, { type: s, ...d, onClick: p })
  ] });
}
let Hn = class extends at {
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
    return r === "info" ? f.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && f.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
Hn.NAME = "pager";
Hn.ItemComponents = {
  ...at.ItemComponents,
  info: wd,
  link: vd,
  nav: Cd,
  "size-menu": $d,
  goto: Td
};
Hn.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class al extends R {
}
al.NAME = "Pager";
al.Component = Hn;
class ll extends R {
}
ll.NAME = "Pick";
ll.Component = ht;
var Ae, Cs;
class cl extends H {
  constructor(e) {
    super(e);
    j(this, Ae, void 0);
    j(this, Cs, void 0);
    this._searchInput = F(), this._measure = F(), this._changeTimer = 0, K(this, Ae, (s) => {
      const i = s.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), s.stopPropagation();
    }), K(this, Cs, (s) => {
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
        const r = f(i).parent();
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
    return r ? l = /* @__PURE__ */ u("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ u("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: D(this, Cs), children: /* @__PURE__ */ u("span", { className: "close" }) }) : l = /* @__PURE__ */ u("span", { className: "magnifier" }), /* @__PURE__ */ u("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ u(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          autoComplete: "off",
          onChange: D(this, Ae),
          onInput: D(this, Ae),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ae = new WeakMap(), Cs = new WeakMap();
class Nd extends yr {
  constructor() {
    super(...arguments), this._search = F(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ u("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ u("span", { className: "text", children: /* @__PURE__ */ u(P, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ u("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ u("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return S(
      super._getClass(t),
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: s } = t;
    return /* @__PURE__ */ u(
      cl,
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
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        f(`#${o}`).val(s);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ u("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((d) => /* @__PURE__ */ u("option", { value: d, children: d }, d)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: s } = this.props;
    f(`#${t}`).val(e.length ? e : [s]);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== s.value) {
      const a = f(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== s.value && a.trigger("change", ui), this._skipTriggerChange = !1;
    }
  }
}
class Md extends yr {
  constructor() {
    super(...arguments), this._search = F(), this._handleDeselectClick = (t) => {
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
    return S(
      super._getClass(t),
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ u(
      cl,
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
    let g;
    if (h)
      g = this._renderSearch(t);
    else if (d) {
      const { text: _ } = d;
      g = /* @__PURE__ */ u("span", { className: "picker-single-selection", title: typeof _ == "string" ? _ : void 0, children: /* @__PURE__ */ u(P, { content: _ }) }, "main");
    } else
      g = /* @__PURE__ */ u("span", { className: "picker-select-placeholder", children: r }, "main");
    const p = c && !h ? /* @__PURE__ */ u("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, readonly: l, onClick: this._handleDeselectClick, children: /* @__PURE__ */ u("span", { className: "close" }) }, "deselect") : null;
    return [
      g,
      e,
      p,
      h ? null : /* @__PURE__ */ u("span", { className: "caret" }, "caret")
    ];
  }
}
function hl(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && hl(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class Ed extends za {
  constructor() {
    super(...arguments), this._menu = F(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, g) => {
        const p = this._getItem(h, g);
        return p && (p.active ? o = !0 : r = !1, d.push(p)), d;
      }, []));
      const a = r || s.has(t.value);
      t = {
        ...t,
        active: a,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: S(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
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
          const h = [...hl(t.items).values()].filter((g) => !g.items && !this._disabledSet.has(g.value)).map((g) => g.value);
          f(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(s);
      else
        a(s), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return f(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return S(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: s, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return L({
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
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ u($s, { hover: !0, ...s }) : /* @__PURE__ */ u(kt, { ...s });
  }
}
function Vs(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && Vs(s.items, e), e.set(String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let Ir = class extends ht {
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
    }, this.isSelected = (r) => this.valueList.includes(r), f.extend(this.state, {
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
        const r = Vs(i);
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
    else if (await Js(s || 500), this._abort !== t || (r = await kn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = Vs(r);
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
    return t.Trigger || (t.multiple ? Nd : Md);
  }
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], f.unique(e).reduce((s, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || s.push(i)), s), []);
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
        const a = Vs(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    return super.setValue(i, e);
  }
};
Ir.defaultProps = {
  ...ht.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0
};
Ir.Pop = Ed;
class dl extends R {
}
dl.NAME = "Picker";
dl.Component = Ir;
class ul extends lt {
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
    return i && s.middleware.push(Dn()), r && s.middleware.push(r === !0 ? as() : as(r)), o && s.middleware.push(mi({ element: this.$arrow[0] })), a && s.middleware.push(Pn(a)), s;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = Sr(t, e, () => {
      Wn(t, e, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !mi || !o.arrow)
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
    const { strategy: s } = this.options;
    e.addClass(s), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
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
ul.NAME = "Popovers";
ul.DEFAULT = {
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
class fl extends R {
}
fl.NAME = "SearchBox";
fl.Component = lr;
function Jn(n, t) {
  const [e, s] = $n(n);
  return s === "%" ? t * e / 100 : e;
}
const ko = "is-sidebar-resizing", Qn = "has-sidebar-animation";
class pl extends lt {
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
      gutterWidth: a = $n(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: g,
      minWidth: p = 0,
      maxWidth: m = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, y = _ ? f(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = Jn(g || t.width(), i), this._minWidth = Jn(p, i), this._maxWidth = Jn(m, i), this._width = (r ? Ht.get(this._storeID) : null) || this._defaultWidth, this._parent = y[0], y.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let b = t.find(".sidebar-gutter");
    b.length || (b = f('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = b, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (b.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), b.on("click", ".gutter-toggle", () => this.toggle())), c && b.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new Ss(b, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, y.addClass(ko).removeClass(Qn);
      },
      onMove: (v, w) => {
        const { deltaX: C } = w;
        Math.abs(C) < 10 || this.update(this._startWidth + C * (o === "left" ? 1 : -1));
      },
      onMoveEnd: () => {
        d && y.addClass(Qn), y.removeClass(ko);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      y.addClass(Qn);
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
    this._width = t, s && Ht.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
  }
  render() {
    const { side: t, width: e } = this, s = !e;
    this.$element.toggleClass("is-collapsed", s), f(this._parent).css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", s);
  }
}
pl.NAME = "Sidebar";
pl.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class ml extends R {
}
ml.NAME = "Toolbar";
ml.Component = at;
le(vh);
const Id = '[data-toggle="tooltip"]';
class Wt extends yt {
  _getRenderOptions() {
    const { type: t, className: e, title: s, content: i } = this.options;
    let r = s, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: S("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Wt.NAME = "Tooltip";
Wt.DEFAULT = {
  ...yt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
f(document).on(`click${Wt.NAMESPACE} mouseenter${Wt.NAMESPACE}`, Id, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.data(Wt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Wt.ensure(t, { show: Wt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
class Ar extends R {
}
Ar.NAME = "Tree";
Ar.Component = Kt;
Ar.replace = Kt.TAG;
class gl extends R {
}
gl.NAME = "SearchTree";
gl.Component = $s;
class Dr extends lt {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Kc(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = f('<ul class="file-list py-1"></ul>');
    const l = f(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = f(`<label class="btn ${r}" for="${t}">${e}</label>`), s) {
        const g = f(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(g);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = f(`<span class="text-primary">${e}</span>`);
    if (s) {
      const h = f(`<i class="icon icon-${s} mr-1"></i>`);
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
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: s } = this.options;
    this.$input = f("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
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
    return this.addFile(t), f('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return f(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Wt(r, { title: e }), r;
    }
    return f("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Wt(r, { title: e })), r;
    }
    return f("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return f(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return f(`<span class="file-size text-gray">${jc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: s, showSize: i } = this.options, r = f('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = f(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: s, duplicatedHint: i } = this.options, r = f('<div class="input-group input-rename-container hidden"></div>'), o = f("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
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
    }), a = f("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = f("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = f('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
Dr.NAME = "Upload";
Dr.DEFAULT = {
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
class _l extends Dr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = f(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(f('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = f('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = f('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = f(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
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
      f('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})`, backgroundSize: "cover" }).prependTo(e);
    }, s.readAsDataURL(t);
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
    const { duplicatedHint: e } = this.options, s = f("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
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
_l.NAME = "UploadImgs";
_l.DEFAULT = {
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
let yl = class extends U {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: s,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ u("div", { className: S("card-content", r), children: [
          e ? /* @__PURE__ */ u("div", { className: S("card-subtitle", s), children: /* @__PURE__ */ u(P, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ u(P, { content: i }, "extraContent") : null
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
      headingClass: g
    } = t;
    if (!e && !s && !r && !c && !h)
      return;
    const p = a ? "a" : "span";
    return /* @__PURE__ */ u("div", { className: S("card-heading", g), children: [
      e ? /* @__PURE__ */ u(q, { className: "card-icon", icon: e }, "icon") : null,
      s ? /* @__PURE__ */ u(P, { className: S("card-prefix", i), content: s }, "prefix") : null,
      r ? /* @__PURE__ */ u(p, { className: S("card-title", o), href: a, ...l, children: /* @__PURE__ */ u(P, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ u(P, { className: S("card-suffix", d), content: c }, "suffix") : null,
      h ? /* @__PURE__ */ u(P, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: s
    } = t;
    if (e)
      return /* @__PURE__ */ u("div", { className: S("card-header", s), children: /* @__PURE__ */ u(P, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: s,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ u("div", { className: S("card-footer", s), children: [
        /* @__PURE__ */ u(P, { content: e }, "footer"),
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
    const s = L({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ u(Et, { ...s });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const s = typeof e == "function" ? e.call(this, t) : e;
      if (s)
        return s.className = S("item-avatar", s.className), /* @__PURE__ */ u(ks, { ...s }, "avatar");
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
class xo extends yl {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: s, innerComponent: i = "div" } = t, r = L({ className: S("card", s) }, e);
    return /* @__PURE__ */ u(i, { ...r, children: super._getChildren(t) });
  }
}
let Fe = class extends Et {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: s } = t;
    return L({
      style: {
        "--list-gap": e ? ee(e) : void 0,
        "--list-count-per-row": s
      }
    }, super._getProps(t));
  }
  _getRenderedItem(t, e) {
    return e;
  }
};
Fe.NAME = "card-list";
Fe.TAG = "div";
Fe.ItemComponents = {
  ...Et.ItemComponents,
  default: xo,
  item: xo
};
Fe.defaultItemProps = {
  component: "div"
};
class Pr extends R {
}
Pr.NAME = "Card";
Pr.Component = yl;
Pr.replace = !0;
class bl extends R {
}
bl.NAME = "CardList";
bl.Component = Fe;
class Lr extends $t {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Lr.NAME = "ContextMenu";
Lr.DEFAULT = {
  ...$t.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function Ad(n) {
  const { left: t, top: e, id: s, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = n;
  return /* @__PURE__ */ u("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ u(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": s,
      children: [
        /* @__PURE__ */ u("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ u("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ u("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ u("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ u("div", { class: "more-vert" }) }) }) : null
        ] }),
        f.isPlainObject(l) && l.html ? /* @__PURE__ */ u(ge, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ u("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const ti = ([n, t, e, s], [i, r, o, a]) => !(n + e <= i || i + o <= n || t + s <= r || r + a <= t), So = (n, t) => n[1] === t[1] ? n[0] - t[0] : n[1] - t[1], Rs = "Dashboard:Block.cache:";
let vl = class extends H {
  constructor(t) {
    super(t), this._ref = F(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      Lr.show({
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
        const i = await f.fetch(e, [t, s], ({ url: r }) => ({ url: tt(r, s), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, s);
        });
      } catch (i) {
        const r = /* @__PURE__ */ u("div", { class: "panel center text-danger p-5", children: [
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
    return !!f(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? Ht.set(`${Rs}${s}:${t}`, e) : Ht.session.set(`${Rs}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? Ht.get(`${Rs}${e}:${t}`) : Ht.session.get(`${Rs}${t}`);
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
        top: g = -1,
        fetch: p = e,
        menu: m = s,
        content: _,
        ...y
      } = o, [b, v] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: b,
        height: v,
        left: Math.min(h, i - b),
        top: g,
        fetch: p,
        menu: m,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!p,
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
      t.sort((l, c) => So(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && s && i.set(e, s), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => So(a[1], l[1]));
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
    this._draggable = new In(t, {
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
        const { cellHeight: s, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / s)), g = this.state.dropping;
        g && g[0] === d && g[1] === h || this.setState({ dropping: [d, h, o, a] });
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
    if (s && ti(t, s))
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
    const { dropping: s } = this.state;
    for (s && ti(e, s) && (e[1] = s[1] + s[3]); !this._canPlace(e); )
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
    const { blocks: t, height: e } = this._layout(), { cellHeight: s, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ u("div", { class: "dashboard", children: /* @__PURE__ */ u(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * s },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ u(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: s * r[1], width: `${100 * r[2] / i}%`, height: s * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: g, title: p } = l, [m, _, y, b] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ u(
              Ad,
              {
                id: d,
                index: c,
                left: `${100 * m / i}%`,
                top: s * _,
                width: `${100 * y / i}%`,
                height: s * b,
                content: g,
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
class wl extends R {
}
wl.NAME = "Dashboard";
wl.Component = vl;
var Jt, Qt;
class $o extends H {
  constructor(e) {
    super(e);
    j(this, Jt, void 0);
    j(this, Qt, void 0);
    K(this, Jt, 0), K(this, Qt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (D(this, Jt) && cancelAnimationFrame(D(this, Jt)), K(this, Jt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), K(this, Jt, 0);
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
    e && (K(this, Qt, typeof e == "string" ? document : e.current), D(this, Qt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), D(this, Qt) && D(this, Qt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: g } = this, { dragStart: p } = this.state, m = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return s === "horz" ? (m.height = i, m.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, g) * (e - _.width) / h)) : (m.width = i, m.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, g) * (e - _.height) / h)), /* @__PURE__ */ u(
      "div",
      {
        className: S("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": p
        }),
        style: m,
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
Jt = new WeakMap(), Qt = new WeakMap();
const cn = /* @__PURE__ */ new Map(), hn = [];
function Cl(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && cn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  cn.set(e, n), t != null && t.buildIn && !hn.includes(e) && hn.push(e);
}
function rt(n, t) {
  Cl(n, t);
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
function kl(n) {
  return cn.delete(n);
}
function Dd(n) {
  if (typeof n == "string") {
    const t = cn.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function xl(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Dd(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && xl(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Pd(n = [], t = !0) {
  return t && hn.length && n.unshift(...hn), n != null && n.length ? xl([], n, /* @__PURE__ */ new Set()) : [];
}
function Sl() {
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
function Ld(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function To(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function ei(n, t = !1) {
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
function Rd(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (v) => (typeof v == "function" && (v = v.call(n)), v = To(v, 0), v < 1 && (v = Math.round(v * s)), v), d = {
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
  }, p = [], m = {};
  let _ = !1;
  const y = [], b = {};
  if (e.forEach((v) => {
    const { colTypes: w, onAddCol: C } = v;
    w && Object.entries(w).forEach(([x, k]) => {
      b[x] || (b[x] = []), b[x].push(k);
    }), C && y.push(C);
  }), t.cols.forEach((v) => {
    if (v.hidden)
      return;
    const { type: w = "", name: C } = v, x = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...v,
      type: w
    }, k = {
      name: C,
      type: w,
      setting: x,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, E = b[w];
    E && E.forEach((M) => {
      const Y = typeof M == "function" ? M.call(n, x) : M;
      Y && Object.assign(x, Y, v);
    });
    const { fixed: I, flex: A, minWidth: N = r, maxWidth: W = o } = x, B = To(x.width || i, i);
    k.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, k.width = Ld(B < 1 ? Math.round(B * s) : B, N, W), y.forEach((M) => M.call(n, k)), p.push(k), m[k.name] = k;
    const V = I ? I === "left" ? h : g : d;
    V.list.push(k), V.totalWidth += k.width, V.width = V.totalWidth, k.flex && V.flexList.push(k), typeof x.order == "number" && (_ = !0);
  }), _) {
    const v = (w, C) => (w.setting.order ?? 0) - (C.setting.order ?? 0);
    p.sort(v), h.list.sort(v), d.list.sort(v), g.list.sort(v);
  }
  return ei(h, !0), ei(g, !0), d.widthSetting = s - h.width - g.width, ei(d), {
    list: p,
    map: m,
    left: h,
    center: d,
    right: g
  };
}
function Wd(n) {
  var V;
  const { col: t, className: e, height: s, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: d, left: h, top: g, ...p } = n, m = {
    left: h ?? t.left,
    top: g ?? i.top,
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
  }], w = ["dtable-cell-content", t.setting.cellClass], C = (V = i.data) == null ? void 0 : V[t.name], x = [l ?? C ?? ""], k = r ? r(x, { row: i, col: t, value: C }, n, Tt) : x, E = [], I = [], A = {}, N = {};
  let W = "div";
  k == null || k.forEach((M) => {
    if (typeof M == "object" && M && !_t(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const Y = M.outer ? E : I;
      M.html ? Y.push(/* @__PURE__ */ u("div", { className: S("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? m : b, M.style), M.className && (M.outer ? v : w).push(M.className), M.children && Y.push(M.children), M.attrs && Object.assign(M.outer ? A : N, M.attrs)), M.tagName && !M.outer && (W = M.tagName);
    } else
      I.push(M);
  });
  const B = W;
  return /* @__PURE__ */ u(
    "div",
    {
      className: S(v),
      style: m,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...p,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ u(B, { className: S(w), style: b, ...N, children: I }),
        E
      ]
    }
  );
}
function si({
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
  CellComponent: d = Wd,
  onRenderCell: h
}) {
  var _;
  const g = Array.isArray(n) ? n : [n], p = ((_ = g[0]) == null ? void 0 : _.top) ?? 0, m = g.length;
  return /* @__PURE__ */ u(
    "div",
    {
      className: S("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ u("div", { className: "dtable-cells-container", style: { left: -s, top: -i + p }, children: g.reduce((y, b, v) => {
        const w = t.length;
        return t.forEach((C, x) => {
          y.push(
            /* @__PURE__ */ u(
              d,
              {
                className: S(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  x ? "" : "is-first-in-row",
                  x === w - 1 ? "is-last-in-row" : "",
                  v ? "" : "is-first-row",
                  v === m - 1 ? "is-last-row" : ""
                ),
                col: C,
                row: b,
                top: b.top - p,
                height: e,
                onRenderCell: h
              },
              `${b.index}:${C.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function $l({
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
  children: g
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ u(
    si,
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
  let m = null;
  r.list.length && (m = /* @__PURE__ */ u(
    si,
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
  return o.list.length && (_ = /* @__PURE__ */ u(
    si,
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
  )), /* @__PURE__ */ u(
    "div",
    {
      className: S("dtable-block", c),
      style: { ...d, top: n, height: t },
      children: [
        p,
        m,
        _,
        g
      ]
    }
  );
}
var Rr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, T = (n, t, e) => (Rr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), O = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, X = (n, t, e, s) => (Rr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), dt = (n, t, e) => (Rr(n, t, "access private method"), e), $e, Je, Le, Ot, de, ot, Lt, Pt, Qe, js, dn, us, Yt, ts, es, Ii, Tl, Ai, Nl, Di, Ml, Pi, El, Ks, Li, Bn, un, Ri, Wi, Oi, Hi, ss, Gs, fn, Wr, Or, Il, Bi, Al;
let Hr = class extends H {
  constructor(t) {
    super(t), O(this, Ii), O(this, Ai), O(this, Di), O(this, Pi), O(this, Ks), O(this, ss), O(this, fn), O(this, Or), O(this, Bi), this.ref = F(), O(this, $e, 0), O(this, Je, void 0), O(this, Le, !1), O(this, Ot, void 0), O(this, de, void 0), O(this, ot, []), O(this, Lt, void 0), O(this, Pt, /* @__PURE__ */ new Map()), O(this, Qe, {}), O(this, js, void 0), O(this, dn, []), O(this, us, { in: !1 }), this.updateLayout = () => {
      T(this, $e) && cancelAnimationFrame(T(this, $e)), X(this, $e, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), X(this, $e, 0);
      }));
    }, O(this, Yt, (e, s) => {
      s = s || e.type;
      const i = T(this, Pt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), O(this, ts, (e) => {
      T(this, Yt).call(this, e, `window_${e.type}`);
    }), O(this, es, (e) => {
      T(this, Yt).call(this, e, `document_${e.type}`);
    }), O(this, Bn, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, s, i, r)), T(this, ot).forEach((c) => {
        c[l] && (e = c[l].call(this, e, s, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, s, i, r)), e;
    }), O(this, un, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), O(this, Ri, (e) => {
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
    }), O(this, Wi, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), O(this, Oi, (e) => {
      const s = f(e.target).closest(".dtable-cell");
      if (!s.length)
        return dt(this, ss, Gs).call(this, !1);
      dt(this, ss, Gs).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), O(this, Hi, () => {
      dt(this, ss, Gs).call(this, !1);
    }), X(this, Je, t.id ?? `dtable-${zt()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, X(this, de, Object.freeze(Pd(t.plugins))), T(this, de).forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(T(this, Qe), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), dt(this, fn, Wr).call(this), T(this, ot).forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, Lt)) == null ? void 0 : t.options) || T(this, Ot) || Sl();
  }
  get plugins() {
    return T(this, ot);
  }
  get layout() {
    return T(this, Lt);
  }
  get id() {
    return T(this, Je);
  }
  get data() {
    return T(this, Qe);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, us);
  }
  componentWillReceiveProps() {
    X(this, Ot, void 0);
  }
  componentDidMount() {
    T(this, Le) ? this.forceUpdate() : dt(this, Ks, Li).call(this), this.on("click", T(this, Ri)), this.on("keydown", T(this, Wi));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", T(this, Oi)), this.on("mouseleave", T(this, Hi)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        X(this, js, r);
        const { parent: o } = this;
        s.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : f(a).each((l, c) => r.observe(c)));
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
    dt(this, Ks, Li).call(this), T(this, ot).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, js)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of T(this, Pt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), T(this, ts)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), T(this, es)) : t.removeEventListener(s, T(this, Yt));
    T(this, ot).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), T(this, de).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), X(this, Qe, {}), T(this, Pt).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = T(this, Pt).get(t);
    i ? i.push(e) : (T(this, Pt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, ts)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, es)) : (r = this.element) == null || r.addEventListener(t, T(this, Yt)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = T(this, Pt).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (T(this, Pt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, ts)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, es)) : (o = this.element) == null || o.removeEventListener(t, T(this, Yt)));
  }
  emitCustomEvent(t, e) {
    T(this, Yt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
    let { scrollLeft: h, scrollTop: g } = t;
    if (d === "up" || d === "down")
      g = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = s + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      g = 0;
    else if (d === "bottom")
      g = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: m, offsetTop: _ } = t;
      typeof m == "number" && (h = s + m), typeof _ == "number" && (g = i + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== s && (p.scrollLeft = h)), typeof g == "number" && (g = Math.max(0, Math.min(g, r - o)), g !== i && (p.scrollTop = g)), Object.keys(p).length ? (this.setState(p, () => {
      var m;
      (m = this.options.onScroll) == null || m.call(this, p), e == null || e.call(this, !0);
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
    if (!T(this, Ot))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      X(this, Lt, void 0);
    else if (s === "options") {
      if (X(this, Ot, void 0), !T(this, Lt))
        return;
      X(this, Lt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = f(e).closest(".dtable-cell");
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
    return Q(T(this, dn), t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = dt(this, Bi, Al).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, g = ["dtable", e, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], p = [];
    if (t) {
      const m = !t.rows.length;
      if (c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      T(this, ot).forEach((_) => {
        var b;
        const y = (b = _.beforeRender) == null ? void 0 : b.call(this, t);
        y && (t = y);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, g.push(
        t.className,
        m ? "dtable-is-empty" : "",
        {
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && p.push(...t.children), m && d ? (delete h.height, p.push(
        /* @__PURE__ */ u("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ u(P, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        dt(this, Ii, Tl).call(this, t),
        dt(this, Ai, Nl).call(this, t),
        dt(this, Di, Ml).call(this, t)
      ), t.scrollable && p.push(dt(this, Pi, El).call(this, t))), T(this, ot).forEach((_) => {
        var b;
        const y = (b = _.onRender) == null ? void 0 : b.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && g.push(y.className), y.children && p.push(y.children));
      });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        id: T(this, Je),
        className: S(g),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
$e = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakMap();
dn = /* @__PURE__ */ new WeakMap();
us = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakMap();
ts = /* @__PURE__ */ new WeakMap();
es = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakSet();
Tl = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ u(
      $l,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: T(this, Bn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    ya,
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
Ai = /* @__PURE__ */ new WeakSet();
Nl = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ u(
    $l,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
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
Di = /* @__PURE__ */ new WeakSet();
Ml = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    ya,
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
Pi = /* @__PURE__ */ new WeakSet();
El = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = n, { scrollbarSize: h = 12, horzScrollbarPos: g } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ u(
      $o,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: T(this, un),
        left: s,
        bottom: (g === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ u("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: d + a } }),
    /* @__PURE__ */ u("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ u(
      $o,
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
Ks = /* @__PURE__ */ new WeakSet();
Li = function() {
  var n;
  X(this, Le, !1), T(this, ot).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (n = this.options.afterRender) == null || n.call(this);
};
Bn = /* @__PURE__ */ new WeakMap();
un = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
Oi = /* @__PURE__ */ new WeakMap();
Hi = /* @__PURE__ */ new WeakMap();
ss = /* @__PURE__ */ new WeakSet();
Gs = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = f(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = T(this, us);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), X(this, us, i);
};
fn = /* @__PURE__ */ new WeakSet();
Wr = function() {
  if (T(this, Ot))
    return !1;
  const t = { ...Sl(), ...T(this, de).reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return X(this, Ot, t), X(this, ot, T(this, de).reduce((e, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(s)), e;
  }, [])), X(this, dn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Or = /* @__PURE__ */ new WeakSet();
Il = function() {
  var I, A;
  const { plugins: n } = this;
  let t = T(this, Ot);
  const e = {
    flex: /* @__PURE__ */ u("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ u("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((N) => {
    var B;
    const W = (B = N.beforeLayout) == null ? void 0 : B.call(this, t);
    W && (t = { ...t, ...W }), Object.assign(e, N.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: N } = this;
    if (N)
      i = N.clientWidth;
    else {
      X(this, Le, !0);
      return;
    }
  }
  const r = Rd(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (N, W, B) => {
    var M, Y;
    const V = { data: B ?? { [a]: N }, id: N, index: c.length, top: 0 };
    if (B || (V.lazy = !0), c.push(V), ((M = t.onAddRow) == null ? void 0 : M.call(this, V, W)) !== !1) {
      for (const gt of n)
        if (((Y = gt.onAddRow) == null ? void 0 : Y.call(this, V, W)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let N = 0; N < o; N++)
      d(`${N}`, N);
  else
    Array.isArray(o) && o.forEach((N, W) => {
      typeof N == "object" ? d(`${N[a] ?? ""}`, W, N) : d(`${N ?? ""}`, W);
    });
  let h = c;
  const g = {};
  if (t.onAddRows) {
    const N = t.onAddRows.call(this, h, r);
    N && (h = N);
  }
  for (const N of n) {
    const W = (I = N.onAddRows) == null ? void 0 : I.call(this, h, r);
    W && (h = W);
  }
  h.forEach((N, W) => {
    g[N.id] = N, N.index = W, N.top = N.index * l;
  });
  const { header: p, footer: m } = t, _ = p ? t.headerHeight || l : 0, y = m ? t.footerHeight || l : 0;
  let b = t.height, v = 0;
  const w = h.length * l, C = _ + y + w;
  if (typeof b == "function" && (b = b.call(this, C)), b === "auto")
    v = C;
  else if (typeof b == "object")
    v = Math.min(b.max, Math.max(b.min, C));
  else if (b === "100%") {
    const { parent: N } = this;
    if (N)
      v = N.clientHeight;
    else {
      v = 0, X(this, Le, !0);
      return;
    }
  } else
    v = b;
  const x = v - _ - y, k = {
    options: t,
    allRows: c,
    width: i,
    height: v,
    rows: h,
    rowsMap: g,
    rowHeight: l,
    rowsHeight: x,
    rowsHeightTotal: w,
    header: p,
    footer: m,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: y,
    cols: r
  }, E = (A = t.onLayout) == null ? void 0 : A.call(this, k);
  E && Object.assign(k, E), n.forEach((N) => {
    if (N.onLayout) {
      const W = N.onLayout.call(this, k);
      W && Object.assign(k, W);
    }
  }), X(this, Lt, k);
};
Bi = /* @__PURE__ */ new WeakSet();
Al = function() {
  (dt(this, fn, Wr).call(this) || !T(this, Lt)) && dt(this, Or, Il).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  const { cols: { center: t } } = n;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let s = 0;
  t.list.forEach((m) => {
    m.left = s, s += m.realWidth, m.visible = m.left + m.realWidth >= e && m.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), g = [], { rowDataGetter: p } = this.options;
  for (let m = c; m < h; m++) {
    const _ = o[m];
    _.lazy && p && (_.data = p([_.id])[0], _.lazy = !1), g.push(_);
  }
  return Object.assign(n, {
    visibleRows: g,
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
Hr.addPlugin = Cl;
Hr.removePlugin = kl;
class Dl extends H {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ u("div", { class: S("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": s,
      ...c
    }, children: [
      /* @__PURE__ */ u("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
Dl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Pl(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ u("a", { href: tt(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Br(n, t, e) {
  var s;
  if (n != null)
    return e = e ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : tt(n, e);
}
function Ll(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), nt(e, n, s ?? e))) : s ?? e;
}
function Rl(n, t) {
  const { link: e } = t.col.setting, s = Pl(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Wl(n, t) {
  const { format: e } = t.col.setting;
  return e && (n[0] = Br(e, t, n[0])), n;
}
function Ol(n, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? n[0] = e(n[0], t) : typeof e == "object" && e && (n[0] = e[n[0]] ?? n[0]), n;
}
function Hl(n, t, e) {
  const s = {};
  return typeof n == "function" ? Object.assign(s, n(e)) : Object.keys(n).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[n[i]];
    r !== void 0 && (s[i] = r);
  }), Object.keys(s).length && t.push({ style: s }), t;
}
function Bl(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = Ll(s, t, n[0], i), n;
}
function Fi(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Br(s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const Od = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return Fi(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ u(
          Dl,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ u(
          En,
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
    if (e && (n = Bl(n, t, e)), n = Ol(n, t), n = Wl(n, t), s ? n = Fi(n, t) : n = Rl(n, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = tt(i, t.row.data) : typeof n[0] == "string" && (o = n[0]), n.push({ attrs: { title: o } });
    }
    return r && (n = Hl(r, n, t)), n;
  }
}, Hd = rt(Od, { buildIn: !0 }), Bd = {
  default: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return s === i ? 0 : s == null ? 1 : String(s).localeCompare(String(i));
  },
  date: (n, t, e) => {
    var r, o;
    const s = G(((r = n.data) == null ? void 0 : r[e.name]) ?? 0), i = G(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return s.getTime() - i.getTime();
  },
  number: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(s) - Number.parseFloat(i);
  }
}, Fd = {
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
      ...Bd,
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
    const o = ((l = s == null ? void 0 : s.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ u("div", { className: `dtable-sort dtable-sort-${o}` });
    return n.push(
      { outer: !0, attrs: { "data-sort": o } },
      a
    ), n;
  }
}, zd = rt(Fd, { buildIn: !0 }), Ud = {
  html: { component: ge }
}, Vd = {
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
        component: ge,
        props: { html: tt(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Ud[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((g) => {
        if (g) {
          const { props: p } = g;
          p && f.extend(d, typeof p == "function" ? p.call(this, t) : p), l = g.component || l;
        }
      }, { props: {} });
      const h = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ u(h, { ...d }) };
    }), n;
  }
}, jd = rt(Vd);
function Kd(n, t, e = !1) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!s[c] === d || (d ? s[c] = !0 : delete s[c], i[c] = d);
  };
  if (n === void 0 ? (t === void 0 && (t = !Fl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Gd(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Fl() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === n;
}
function qd() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function Yd(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function No(n, t, e = !1) {
  return /* @__PURE__ */ u(Nn, { className: "dtable-checkbox", checked: n, disabled: e });
}
const Mo = 'input[type="checkbox"],.dtable-checkbox', Xd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: No
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
    toggleCheckRows: Kd,
    isRowChecked: Gd,
    isAllRowChecked: Fl,
    getChecks: qd,
    toggleCheckable: Yd
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
        /* @__PURE__ */ u("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: No(n) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ u(P, { className: "dtable-check-info", content: s.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ u("div", { className: "dtable-check-info", children: r.join(", ") })
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
    const e = t.closest(Mo);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = f(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Mo).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Zd = rt(Xd), Jd = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new xs(`DTable:${this.id}`) };
  }
}, Qd = rt(Jd);
var zl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(zl || {});
function pn(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = pn.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? pn.call(this, t.parent).level + 1 : 0, t;
}
function tu(n) {
  return n !== void 0 ? pn.call(this, n) : this.data.nestedMap;
}
function eu(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Ul.call(this)), t) {
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
function Ul() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Vl(n, t = 0, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Vl(n, t, o.children, s + 1)));
  }
  return t;
}
function jl(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, jl(n, r, e, s);
  }), i;
}
function Kl(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && Kl(n, r.parent, e, s, i);
}
const Ws = "dtable-nested-toggle", su = {
  name: "nested",
  plugins: [Qd],
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
        const o = jl(this, i, r, s);
        o != null && o.parent && Kl(this, o.parent, r, s, e);
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
    getNestedInfo: tu,
    toggleRow: eu,
    isAllCollapsed: Ul,
    getNestedRowInfo: pn
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
    ), Vl(this.data.nestedMap), n.sort((t, e) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), n;
  },
  onRenderCell(n, { col: t, row: e }) {
    var a;
    const { id: s, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && n.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ u("a", { className: `${Ws} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ u("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ u("a", { className: `${Ws} state`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${Ws}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${Ws}`)))
      return this.toggleRow(t), !0;
  }
}, nu = rt(su);
function ni(n, { row: t, col: e }) {
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
    className: S(r, c.className, "flex-none")
  };
  if (n[0] = /* @__PURE__ */ u(ks, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: g } = e.setting, p = typeof g == "function" ? g(e, t) : g;
    n[0] = /* @__PURE__ */ u("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      n[0],
      /* @__PURE__ */ u("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ u("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ u("span", { children: d })
    ] }));
  return n;
}
const iu = {
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
}, ru = rt(iu, { buildIn: !0 }), ou = {
  name: "sort-type",
  onRenderHeaderCell(n, t) {
    const { col: e } = t;
    if (e.setting.sort !== void 0)
      return n;
    let { sortType: s } = e.setting;
    const { sortLink: i, orderBy: r } = this.options;
    if (r && r[e.name] !== void 0 && (s = r[e.name]), s) {
      const o = s === !0 ? "none" : s, a = /* @__PURE__ */ u("div", { className: `dtable-sort dtable-sort-${o}` });
      n.push(
        { outer: !0, attrs: { "data-sort": o } }
      );
      let { sortLink: l = i } = e.setting;
      if (l) {
        const c = o === "asc" ? "desc" : "asc";
        typeof l == "function" && (l = l.call(this, e, c, o)), typeof l == "string" && (l = { url: l });
        const { url: d, ...h } = l;
        n[0] = /* @__PURE__ */ u("a", { className: "dtable-sort-link", href: tt(d, { ...e.setting, sortType: c }), ...h, children: [
          n[0],
          a
        ] });
      } else
        n.push(a);
    }
    return n;
  }
}, au = rt(ou, { buildIn: !0 }), ii = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === n[e - 1].setting.group || (t.setting.border = "left");
  });
}, lu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    ii(t.left.list), ii(t.center.list), ii(t.right.list);
  }
}, cu = rt(lu);
const hu = {
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
        n.push(/* @__PURE__ */ u("div", { class: "dtable-header-group", style: o, children: e }));
      }
      n.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return n;
  }
}, du = rt(hu), uu = {
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
      l.forEach((g, p) => {
        const { index: m } = g, _ = `C${m}R${h}`;
        if (s.has(_))
          return;
        const y = t.call(this, { row: c, col: g });
        if (!y)
          return;
        const b = Math.min(y.colSpan || 1, l.length - p), v = Math.min(y.rowSpan || 1, i.length - d);
        if (b <= 1 && v <= 1)
          return;
        let w = 0;
        for (let C = 0; C < b; C++) {
          w += l[p + C].realWidth;
          for (let x = 0; x < v; x++) {
            const k = `C${m + C}R${h + x}`;
            k !== _ && s.add(k);
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
}, fu = rt(uu), pu = {
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
}, Gl = rt(pu);
function mu() {
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
  const { maxStep: r, detectPadding: o, speed: a, side: l } = n, { x: c, y: d } = t, { left: h, top: g, right: p, bottom: m } = i;
  let _ = 0;
  c < h - o ? _ = -Math.max(r, h - o - c) : c > p - o && (_ = Math.max(r, c - (p - o)));
  let y = 0;
  if (d < g - o ? y = -Math.max(r, g - o - d) : d > m - o && (y = Math.max(r, d - (m - o))), l) {
    const C = new Set((Array.isArray(l) ? l : [l]).reduce((x, k) => (k === "x" ? x.push("left", "right") : k === "y" ? x.push("top", "bottom") : x.push(k), x), []));
    (!C.has("left") && _ < 0 || !C.has("right") && _ > 0) && (_ = 0), (!C.has("top") && y < 0 || !C.has("bottom") && y > 0) && (y = 0);
  }
  const b = {};
  _ !== 0 && (b.scrollLeft = this.layout.scrollLeft + a * _), y !== 0 && (b.scrollTop = this.layout.scrollTop + a * y), this.scroll(b);
}
const gu = {
  name: "autoscroll",
  plugins: [Gl],
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
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(mu.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, _u = rt(gu);
const yu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(n, t) {
      return this.options.nested ? this.getNestedRowInfo(n.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (n) => !!n.sortable,
  plugins: [Gl, _u],
  events: {
    mousedown(n) {
      var r;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!f(n.target).closest(t).length)
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
          a.forEach(({ id: g }, p) => {
            s[g] = p, h.push(g);
          }), ((e = this.options.onSort) == null ? void 0 : e.call(this, i, r, o, h)) === !1 && (s = void 0);
        }
        this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: f.extend({
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
      var k;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: s, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, d = l.height - s - i, h = n.clientX - l.left, g = n.clientY - l.top - s;
      if (h < 0 || h > c || g < 0 || g > d)
        return e.state;
      const p = g + o, m = r.find((E) => E.top <= p && E.top + a > p);
      if (!m)
        return e.state;
      const _ = e.from, y = m.id !== _.id ? m.id : void 0, b = y ? this.getRowInfo(y) : void 0, v = g, w = p < m.top + a / 2 ? "before" : "after";
      return b && ((k = this.options.canSortTo) == null ? void 0 : k.call(this, _, b, w)) !== !1 ? {
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
    t && (e.some((s) => s.id === t.id) || (n.visibleRows = [...e, t]), n.className = S(n.className, "dtable-sorting"));
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
}, bu = rt(yu), vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: zl,
  avatar: ru,
  cellspan: fu,
  checkable: Zd,
  custom: jd,
  group: cu,
  headerGroup: du,
  nested: nu,
  renderDatetime: Ll,
  renderDatetimeCell: Bl,
  renderFormat: Br,
  renderFormatCell: Wl,
  renderHtmlCell: Fi,
  renderLink: Pl,
  renderLinkCell: Rl,
  renderMapCell: Ol,
  renderStyleMapCell: Hl,
  rich: Hd,
  sort: zd,
  sortType: au,
  sortable: bu
}, Symbol.toStringTag, { value: "Module" }));
class Es extends R {
}
Es.NAME = "DTable";
Es.Component = Hr;
Es.definePlugin = rt;
Es.removePlugin = kl;
Es.plugins = vu;
class Fr extends U {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: s,
      name: i
    } = t;
    return L(super._getProps(t), {
      style: {
        "--kanban-col-color": s,
        "--kanban-col-width": ee(e)
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
      /* @__PURE__ */ u("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ u("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ u(q, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ u("span", { className: S("as-prefix", s), children: /* @__PURE__ */ u(P, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ u("span", { className: S("as-title", r), children: /* @__PURE__ */ u(P, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ u("span", { className: S("as-subtitle", a), children: /* @__PURE__ */ u(P, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ u(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        at.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ u("div", { className: "kanban-header-sub-cols", children: h.map((g, p) => /* @__PURE__ */ u(Fr, { index: p, ...g }, g.name)) }, "subs") : null
    ];
  }
}
function wu(n) {
  const { cols: t } = n;
  return /* @__PURE__ */ u("div", { className: "kanban-header", children: [
    /* @__PURE__ */ u("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ u("div", { className: "kanban-header-cols", children: t.map((e, s) => /* @__PURE__ */ u(Fr, { index: s, ...e }, e.name)) }, "cols")
  ] });
}
class ql extends H {
  constructor() {
    super(...arguments), this._listRef = F(), this._renderItem = (t) => {
      const { itemRender: e, lane: s, name: i } = this.props, r = e.call(this, { item: t, lane: s, col: i });
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
      width: s,
      color: i,
      content: r,
      contentClass: o,
      itemRender: a,
      itemGap: l,
      watchSize: c,
      name: d,
      lane: h,
      itemCountPerRow: g
    } = t, p = {
      "--kanban-col-color": i,
      "--kanban-col-width": ee(s)
    };
    return /* @__PURE__ */ u("div", { className: "kanban-lane-col", style: p, "z-lane": h, "z-col": d, children: [
      r ? /* @__PURE__ */ u("div", { className: S("kanban-col-content", o), children: /* @__PURE__ */ u(P, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ u("div", { className: "kanban-items scrollbar-thin scrollbar-hover", children: /* @__PURE__ */ u(
        Fe,
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
ql.defaultProps = {
  watchSize: !0
};
class Cu extends U {
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
    return L(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: ee(e),
        minHeight: ee(s),
        maxHeight: ee(i)
      },
      "z-lane": o
    });
  }
  _renderCol(t, e, s, i) {
    return /* @__PURE__ */ u(ql, { itemRender: s, lane: t, items: i[e.name], ...e }, e.name);
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
      /* @__PURE__ */ u("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ u("div", { className: S("kanban-lane-title", i), children: /* @__PURE__ */ u(P, { content: s }) }, "title"),
        at.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ u("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function ku(n) {
  const { lanes: t, cols: e, items: s = {}, itemRender: i } = n;
  return /* @__PURE__ */ u("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ u(Cu, { index: o, cols: e, items: s[r.name], itemRender: i, ...r }, r.name)) });
}
const ut = 12, xu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function Eo(n, t) {
  return t === "top" ? { x: n.x + n.width / 2, y: n.y } : t === "left" ? { x: n.x, y: n.y + n.height / 2 } : t === "right" ? { x: n.x + n.width, y: n.y + n.height / 2 } : { x: n.x + n.width / 2, y: n.y + n.height };
}
function Su(n, t) {
  return (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y);
}
function $u(n, t, e, s) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = s ? [s] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = Eo(n, c), g = Eo(t, d), p = Su(h, g) * (xu[c] === d ? 1 : 2);
      p < o && (o = p, e = c, s = d, a = h, l = g);
    });
  }), {
    fromSide: e,
    toSide: s,
    fromPos: a,
    toPos: l
  };
}
function Tu(n, t) {
  return { x: (n.x + t.x) / 2, y: (n.y + t.y) / 2 };
}
function Yl(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    width: Math.abs(n.x - t.x),
    height: Math.abs(n.y - t.y)
  };
}
function Io(n, t, e) {
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
function Nu(n, t, e, s, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = Yl(n, t), d = ut - o, h = ut - a;
  if (i === "curve") {
    const g = l * 0.7, p = c * 0.7, m = r * 2, _ = {
      a1x: n.x + (e === "left" ? -m : e === "right" ? m : 0),
      a1y: n.y + (e === "top" ? -m : e === "bottom" ? m : 0),
      ax: n.x + (e === "left" ? -g : e === "right" ? g : 0),
      ay: n.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      bx: t.x + (s === "left" ? -(g - m) : s === "right" ? g - m : 0),
      by: t.y + (s === "top" ? -(p - m) : s === "bottom" ? p - m : 0),
      b1x: t.x + (s === "left" ? -m : s === "right" ? m : 0),
      b1y: t.y + (s === "top" ? -m : s === "bottom" ? m : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const g = Tu(n, t), p = l / 2, m = c / 2, _ = {
      ax: n.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: n.y + (e === "top" ? -m : e === "bottom" ? m : 0),
      bx: t.x + (s === "left" ? -p : s === "right" ? p : 0),
      by: t.y + (s === "top" ? -m : s === "bottom" ? m : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.ax + d} ${_.ay + h} L ${g.x + d} ${g.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${n.x + d} ${n.y + h} L ${t.x + d} ${t.y + h}`;
}
function Mu(n) {
  const { fromRect: t, toRect: e } = n, s = `${n.from}-${n.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = $u(i, r), d = Yl(l, c), { x: h, y: g, width: p, height: m } = d;
  l.x += ut - h, l.y += ut - g, c.x += ut - h, c.y += ut - g;
  const {
    weight: _ = 1,
    fromPoint: y,
    toPoint: b = "arrow"
  } = n, v = {
    left: `${0 - ut}px`,
    top: `${0 - ut}px`,
    width: `${p + 2 * ut}px`,
    height: `${m + 2 * ut}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": y && y !== "none" ? `url(#marker-start-${s}-${y})` : void 0,
    "marker-end": b && b !== "none" ? `url(#marker-end-${s}-${b})` : void 0,
    d: Nu(l, c, o, a, n.shape, _)
  }, C = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, x = {
    width: p + 2 * ut,
    height: m + 2 * ut
  }, k = [];
  return n.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : n.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), y && y !== "none" && k.push(Io(y, "start", s)), b && b !== "none" && k.push(Io(b, "end", s)), {
    x: h,
    y: g,
    width: p,
    height: m,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: v,
    svgPathProps: w,
    svgPathBackProps: C,
    svgProps: x,
    markers: k,
    padding: ut
  };
}
class Xl extends H {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: s, textSize: i, color: r, onDelete: o } = t, { hover: a } = e, { x: l, y: c, padding: d, width: h, height: g, svgProps: p, markers: m, svgPathProps: _, svgPathBackProps: y, fromPos: b } = Mu(t);
    return /* @__PURE__ */ u("div", { className: S("kanban-link", a ? "is-hover" : ""), style: { left: l, top: c, width: h, height: g, color: r }, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ u("svg", { ...p, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        m.length ? /* @__PURE__ */ u("defs", { children: m.map(({ path: v, id: w, ...C }) => /* @__PURE__ */ u("marker", { ...C, id: w, children: /* @__PURE__ */ u("path", { ...v }) }, w)) }) : null,
        /* @__PURE__ */ u("path", { ...y }),
        /* @__PURE__ */ u("path", { ..._ })
      ] }),
      /* @__PURE__ */ u("div", { className: "kanban-link-start-point", style: { left: b.x - d, top: b.y - d } }),
      o ? /* @__PURE__ */ u("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ u("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ u("i", { className: "close" }) }) }) : null,
      s ? /* @__PURE__ */ u("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: s }) : null
    ] });
  }
}
class Eu extends H {
  constructor() {
    super(...arguments), this._ref = F(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    f(t).on("laneColResize.kanban", () => {
      this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && f(t).off(".kanban"), this._raf && cancelAnimationFrame(this._raf);
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
    const t = [...this._idSet], e = f(this._kanban).find(".kanban-body"), { top: s, left: i } = this._kanban.getBoundingClientRect(), r = {};
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
    return this._idSet.add(s), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ u(Xl, { ...t, fromRect: r, toRect: o, onDelete: this.props.onDeleteLink }, `${s}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ u("div", { className: "kanban-links", ref: this._ref, children: e.map((s) => this._renderLink(s)) });
  }
}
const Os = ".kanbanLinkEditor";
class Iu extends H {
  constructor() {
    super(...arguments), this._ref = F(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, e = t.closest(".kanban");
    this._kanban = e;
    const s = ".kanban-item,.kanban-link-editor-from";
    f(e).on(`mouseenter${Os}`, s, (i) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const r = f(i.target).closest(s), o = r.attr("z-key");
      this.state.from === o || r.hasClass("is-dragging") || this.setState({
        from: o,
        to: void 0,
        fromRect: this._getRect(r.children()[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${Os}`, s, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${Os}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }), this._moveable = new Ss(t, {
      selector: ".kanban-link-editor-point",
      move: "none",
      onMoveStart: () => {
        if (!this.state.from)
          return !1;
        f(e).addClass("is-adding-link");
      },
      onMove: (i) => {
        const { top: r, left: o } = this._kanban.getBoundingClientRect(), a = { left: i.clientX - o, top: i.clientY - r };
        let l, c;
        const d = f(i.target).closest(s);
        d.length && l !== this.state.from && (l = d.attr("z-key"), c = this._getRect(d.children()[0])), this.setState({ dragPos: a, to: l, toRect: c });
      },
      onMoveEnd: () => {
        const { from: i, to: r } = this.state, { onAddLink: o } = this.props;
        i !== r && o && i !== void 0 && r !== void 0 && (o == null || o.call(this, i, r)), this._cancelHover(), f(e).removeClass("is-adding-link");
      }
    });
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && f(t).off(Os), this._raf && cancelAnimationFrame(this._raf);
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
    return /* @__PURE__ */ u(
      Xl,
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
    return s && i && (a = /* @__PURE__ */ u("div", { className: "kanban-link-editor-from not-moveable", "z-key": s, style: i, children: [
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ u("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ u("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ u("div", { className: S("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
function Au(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getCol: s, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return n = n.reduce((d, h, g) => {
    if (h = L({ itemGap: o, itemCountPerRow: r }, i, h), s) {
      const p = s.call(this, h);
      p !== !1 && (h = p || h);
    }
    return h.deleted || (typeof h.order == "number" ? a = !0 : h.order = g, typeof h.name != "string" && (h.name = String(h.name)), e == null || e.call(this, h), h.parentName !== void 0 ? (h.parentName = String(h.parentName), l.push(h)) : (c.set(h.name, h), d.push(h))), d;
  }, []), l.forEach((d) => {
    const h = c.get(d.parentName);
    h && (h.subCols = ue(h.subCols, [d], "name"));
  }), a && (n.sort(fs), [...c.values()].forEach((d) => {
    d.subCols && d.subCols.sort(fs);
  })), n;
}
function Du(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getLane: s, laneProps: i } = t;
  let r = !1;
  return n = n.reduce((o, a, l) => {
    if (i && (a = L({}, i, a)), s) {
      const c = s.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.order == "number" ? r = !0 : a.order = l, a.color === void 0 && (a.color = `hsl(${43 * va(a.name) % 360}deg 40% 50%)`), typeof a.name != "string" && (a.name = String(a.name)), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && n.sort(fs), n;
}
function Ao(n, t, e, s, i) {
  if (!(n != null && n.length))
    return [];
  const { itemProps: r, getItem: o } = s;
  let a = !1;
  return n = n.reduce((l, c) => {
    r && (c = L({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c, laneInfo: t, colInfo: e })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && n.sort(fs), n;
}
function fs(n, t) {
  return n.order - t.order;
}
function ue(n, t, e = "key") {
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
function Zl(n, t) {
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
function Do(n, t) {
  const { items: e, ...s } = n;
  return {
    items: Zl(e, t),
    ...s
  };
}
function zi(n, t, e) {
  var a;
  const s = ue(n.lanes, t.lanes, "name"), i = ue(n.cols, t.cols, "name"), r = ue(n.links, (a = t.links) == null ? void 0 : a.map((l) => (l[e] === void 0 && (l[e] = `${l.from}:${l.to}`), l)), e), o = ue(n.items, Zl(t.items || [], e), e);
  return { lanes: s, cols: i, items: o, links: r };
}
let Is = class extends U {
  constructor() {
    super(...arguments), this._ref = F(), this._raf = 0, this._data = new is(this._getData.bind(this), () => {
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
    }), this._kanbanData = new is(() => {
      const { itemKey: t, props: e } = this, { data: s } = e, { data: i, changes: r } = this.state, o = (i || Jr(s) ? i : Do(s, t)) || {};
      return r ? zi(o, r, t) : o;
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
      f(typeof t != "boolean" ? t : e.closest(".kanban-list") || e.parentElement).each((r, o) => {
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
        const r = Do(await kn(t, [this], { throws: !0 }), this.itemKey);
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
        const { responsive: e, laneNameWidth: s = 20 } = this.props, i = f(typeof e != "boolean" ? e : t.closest(".kanban-list") || t.parentElement), r = i[0];
        let o = i.width() - s - (r.offsetWidth - r.clientWidth);
        const a = t.closest(".kanban-region");
        a && (o -= a.clientWidth - f(a).width()), this.setState({ containerWidth: o });
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Jr(e) || e === this._loadedSetting || this.load();
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
      changes: zi({ ...e.changes }, t, this.itemKey)
    }));
  }
  createSnap() {
    return {
      date: Date.now(),
      kanban: this,
      data: f.extend(!0, {}, this._data),
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
    const e = f(t), s = e.closest(".kanban-item");
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
      }, g = s.col === l.col, p = s.lane === l.lane;
      if (g && p && l[o] === s.item[o])
        return { changes: r, data: a };
      g || (h.col = s.col), p || (h.lane = s.lane);
      let m = !1;
      if (s.type === "col" && (!p || !g))
        d.push(h), m = !0;
      else if (s.type === "item") {
        const _ = s.item, y = s.col !== l.col || s.lane !== l.lane ? -1 : d.findIndex((v) => v[o] === l[o]);
        y >= 0 && d.splice(y, 1);
        const b = d.findIndex((v) => v[o] === _[o]);
        d.splice(t.side === "before" ? b : b + 1, 0, h), m = !0;
      }
      if (m) {
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
    }, d = typeof t == "object" ? t : {}, h = (p, m) => {
      f(p).attr({
        "z-drag-type": m ? m.drag.type : null,
        "z-drop-type": m ? m.drop.type : null,
        "z-drop-side": m ? m.side : null
      });
    }, g = {
      ...d,
      selector: d.selector || l.map((p) => c[p] || "").join(""),
      target: d.target || ((p) => {
        const m = this._getElementInfo(p);
        if (!m)
          return;
        const _ = {
          lane: ".kanban-lane",
          col: ".kanban-header-col",
          item: ".kanban-item,.kanban-items"
        }[m.type];
        return f(e).find(_);
      }),
      canDrop: d.canDrop || o || a ? (p, m, _) => {
        const y = this._getElementInfo(m);
        if (!y)
          return !1;
        const b = this._getElementInfo(_);
        if (!b)
          return !1;
        if (y.type === "item" && a) {
          const v = y.col, w = b.col, C = y.lane, x = b.lane, k = a[`${C}:${v}`] ?? a[v];
          return typeof k == "boolean" ? k : !k || k.includes(w) || k.includes(`${x}:${w}`) || k.includes(`${x}:`);
        }
        if (o)
          return o.call(this, y, b);
      } : void 0,
      onDragStart: (p, m) => {
        var y;
        const _ = this._getElementInfo(m);
        return _ ? i ? i.call(this, { event: p, drag: _ }) : (y = d.onDragStart) == null ? void 0 : y.call(this, p, m) : !1;
      },
      onDragOver: (p, m, _) => {
        const y = this._getDropInfo(p, m, _);
        y && h(_, y);
      },
      onDragLeave: (p, m, _) => {
        h(_);
      },
      onDrop: (p, m, _) => {
        var b;
        h(_);
        const y = this._getDropInfo(p, m, _);
        if (!y)
          return !1;
        if (r) {
          const { changes: v, data: w } = this._getDropChanges(y);
          if (Object.keys(v).length) {
            y.data = w;
            const C = this.createSnap();
            r.call(this, v, y, C.restore) !== !1 && this.update(v);
          }
        }
        return (b = d.onDrop) == null ? void 0 : b.call(this, p, m, _);
      }
    };
    this._draggable = new In(e, g);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, s = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = s, o = {}, a = /* @__PURE__ */ new Map(), l = Au.call(this, s.cols, e, (p) => {
      p.parentName !== void 0 && (i = !0), a.set(p.name, p);
    }), c = Du.call(this, s.lanes, e, (p) => {
      o[p.name] = l.reduce((m, _) => (_.subCols ? _.subCols.forEach((y) => {
        m[y.name] = [];
      }) : m[_.name] = [], m), {});
    }), d = /* @__PURE__ */ new Set(), h = r.reduce((p, m) => {
      if (m.deleted)
        return d.add(m[t]), p;
      p.set(m[t], m);
      const _ = o[m.lane];
      if (_) {
        const y = _[m.col];
        y && y.push(m);
      }
      return p;
    }, /* @__PURE__ */ new Map());
    c.forEach((p) => {
      const m = o[p.name];
      m && l.forEach((_) => {
        var y;
        m[_.name] = Ao.call(this, m[_.name], p, _, e), (y = _.subCols) == null || y.forEach((b) => {
          m[b.name] = Ao.call(this, m[b.name], p, b, e);
        });
      });
    });
    let { links: g = [] } = s;
    return g = g.reduce((p, m) => {
      var _;
      if (!m.deleted && h.has(m.from) && h.has(m.to) && !d.has(m.from) && !d.has(m.to)) {
        m[t] === void 0 && (m[t] = `${m.from}:${m.to}`);
        const y = ((_ = e.getLink) == null ? void 0 : _.call(this, m)) ?? m;
        y !== !1 && !y.deleted && p.push(y);
      }
      return p;
    }, []), { cols: l, lanes: c, items: o, map: h, colMap: a, links: g, hasSubCols: i };
  }
  _layoutCols(t, e) {
    const { containerWidth: s = 0 } = this.state, { colsGap: i = 8, minColWidth: r = 150, maxColWidth: o = 600, colWidth: a = 200 } = e, l = [];
    let c = 0;
    const d = (h) => {
      const { minWidth: g = r, maxWidth: p = o } = h;
      let { width: m = a } = h;
      typeof m == "function" && (m = m.call(this, h));
      const _ = m === "auto";
      if (_)
        m = g;
      else {
        const [y, b] = $n(m);
        b === "%" ? m = s * y / 100 : m = y;
      }
      return m = Math.min(p, Math.max(g, m)), c += m + (c ? i : 0), h = { ...h, width: m, maxWidth: p, minWidth: g }, _ && l.push(h), h;
    };
    if (t = t.map((h) => h.subCols ? {
      ...h,
      subCols: h.subCols.map(d)
    } : d(h)), l.length && c < s) {
      const h = Math.floor((s - c) / l.length);
      l.forEach((g) => {
        g.width = Math.min(g.maxWidth, Math.max(g.minWidth, g.width + h));
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
    return L(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": ee(s),
        "--kanban-lanes-gap": ee(i)
      }
    });
  }
  _getChildren(t) {
    const e = this._data.value, { cols: s, lanes: i, items: r, links: o = [] } = e, { editLinks: a } = t, l = this._layoutCols(s, t), c = this._layoutLanes(i, t);
    return console.log("> Kanban.render", t.key, { ...e, layoutCols: l, layoutLanes: c, props: t, kanban: this }), [
      /* @__PURE__ */ u(wu, { cols: l }, "header"),
      /* @__PURE__ */ u(
        ku,
        {
          itemRender: t.itemRender,
          cols: l,
          lanes: c,
          items: r
        },
        "body"
      ),
      o.length ? /* @__PURE__ */ u(Eu, { links: o, onDeleteLink: a ? this._onDeleteLink : void 0 }, "links") : null,
      a ? /* @__PURE__ */ u(Iu, { onAddLink: this._onAddLink }, "linkEditor") : null,
      t.children
    ];
  }
};
Is.defaultProps = {
  draggable: !0,
  sticky: !0,
  responsive: !0,
  itemKey: "id",
  colWidth: 200,
  colsGap: 8
};
Is.customProps = ["onDrop", "onDragStart"];
class Po extends U {
  constructor(t) {
    super(t), this._kanbanRefs = /* @__PURE__ */ new Map(), this._needUpdateData = /* @__PURE__ */ new Map(), this._handleClickHeading = (e) => {
      f(e.target).closest("a,.btn,button").not(".kanban-region-toggle").length || this.setState((s) => ({ collapsed: !s.collapsed }));
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
      this.setState(t.items ? (i) => ({ ...t, items: ue(i.items, t.items) }) : t, s);
    });
  }
  _needUpdateKanban(t, e) {
    const s = this._needUpdateData, i = s.get(t), { kanbanItemKey: r = "id" } = this.props;
    s.set(t, zi(i || {}, e, r));
  }
  _buildItems(t) {
    const { items: e = [], kanbanProps: s, kanbanItemKey: i = "id" } = t;
    let { items: r } = this.state;
    r ? (r = ue(e, r, i).filter((c) => !c.deleted), r.sort(fs)) : r = e;
    const o = this._kanbanRefs, a = new Set(o.keys()), l = r.map((c, d) => {
      const h = L(
        { className: "kanban-region-item", key: d },
        typeof s == "function" ? s.call(this, c, d) : s,
        c
      ), g = String(h.key);
      let p = o.get(g);
      return p || (p = F(), o.set(g, p)), h.ref = p, a.delete(g), /* @__PURE__ */ u(Is, { "z-key": g, ...h });
    });
    return a.forEach((c) => {
      o.delete(c);
    }), l;
  }
  _getClassName(t) {
    return ["kanban-region", t.className, this.state.collapsed ? "is-collapsed" : "is-expanded", t.heading ? "has-heading" : ""];
  }
  _getChildren(t) {
    const { heading: e, toggleFromHeading: s } = t, { collapsed: i, heading: r } = this.state, o = L({ className: "kanban-heading", onClick: s ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e, r);
    return [
      e && /* @__PURE__ */ u(nn, { ...o }, "heading"),
      i ? null : this._buildItems(t)
    ];
  }
}
let Jl = class extends U {
  constructor(t) {
    super(t), this.state = {}, this._ref = F(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new Ss(this._ref.current, f.extend({ selector: "self", move: "scroll", onMoveStart: (s, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return s.clientY < r && s.clientY > r - 20 || s.clientX < o && s.clientX > o - 20 ? !1 : !f(s.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
    } }, typeof t == "object" ? t : null))), e) {
      const s = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? f(e) : f(this._ref.current).parent()).each((r, o) => {
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
      if (a instanceof Po && (i = a.getKanban(t), i))
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
    const e = f(t), s = e.width(), i = e.height();
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
    return L(super._getProps(t), {
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
        s && (a = typeof s == "function" ? s.call(this, a, l) : f.extend({}, s, a));
        const c = String(a.key ?? l);
        let d = i.get(c);
        d || (d = F(), i.set(c, d)), r.delete(c);
        const h = a.heading !== void 0 || a.items ? Po : Is;
        return /* @__PURE__ */ u(h, { ref: d, sticky: t.sticky, ...a, "z-key": c }, c);
      }),
      t.children
    ];
    return r.forEach((a) => {
      i.delete(a);
    }), o;
  }
};
Jl.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class zr extends R {
}
zr.NAME = "Kanban";
zr.replace = !0;
zr.Component = Is;
class Ur extends R {
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
Ur.NAME = "KanbanList";
Ur.replace = !0;
Ur.Component = Jl;
var Ql = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Lo = (n, t, e) => (Ql(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Pu = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ro = (n, t, e, s) => (Ql(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Te;
const Lu = "nav", qs = '[data-toggle="tab"]', Ru = "active";
class tc extends lt {
  constructor() {
    super(...arguments), Pu(this, Te, 0);
  }
  active(t) {
    const e = this.$element, s = e.find(qs);
    let i = t ? f(t).closest(qs) : s.filter(`.${Ru}`);
    if (!i.length && (i = e.find(qs).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = f(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Lo(this, Te) && clearTimeout(Lo(this, Te)), Ro(this, Te, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Ro(this, Te, 0);
    }, 10)));
  }
}
Te = /* @__PURE__ */ new WeakMap();
tc.NAME = "Tabs";
f(document).on("click.tabs.zui", qs, (n) => {
  n.preventDefault();
  const t = f(n.target), e = t.closest(`.${Lu}`);
  e.length && tc.ensure(e).active(t);
});
export {
  f as $,
  sa as Ajax,
  Ia as Avatar,
  Aa as BtnGroup,
  ah as Bus,
  Pr as Card,
  bl as CardList,
  ja as ColorPicker,
  rr as CommonList,
  lt as Component,
  R as ComponentFromReact,
  is as Computed,
  Lr as ContextMenu,
  P as CustomContent,
  ya as CustomRender,
  Es as DTable,
  wl as Dashboard,
  tl as DatePicker,
  sl as DatetimePicker,
  In as Draggable,
  $t as Dropdown,
  U as HElement,
  ge as HtmlContent,
  q as Icon,
  zr as Kanban,
  Ur as KanbanList,
  or as List,
  cr as Menu,
  qu as Messager,
  yd as Modal,
  hs as ModalBase,
  Ei as ModalTrigger,
  Ss as Moveable,
  ol as Nav,
  ar as NestedList,
  al as Pager,
  ll as Pick,
  dl as Picker,
  yt as Popover,
  Mr as PopoverPanel,
  ul as Popovers,
  ba as Portal,
  Na as ProgressCircle,
  H as ReactComponent,
  fl as SearchBox,
  hr as SearchMenu,
  gl as SearchTree,
  pl as Sidebar,
  Ea as Sortable,
  gr as SortableList,
  _r as SortableTree,
  cs as TIME_DAY,
  tc as Tabs,
  Qa as TimePicker,
  ml as Toolbar,
  Wt as Tooltip,
  Ar as Tree,
  Dr as Upload,
  _l as UploadImgs,
  od as addDate,
  Ut as bus,
  f as cash,
  S as classes,
  Ye as componentsMap,
  Kc as convertBytes,
  rh as create,
  G as createDate,
  Zc as createFormData,
  uh as createPortal,
  F as createRef,
  Vc as deepGet,
  Uc as deepGetPath,
  Ou as defineFn,
  Js as delay,
  oh as disableScroll,
  Hu as dom,
  ro as downloadFile,
  kn as fetchData,
  jc as formatBytes,
  nt as formatDate,
  af as formatDateSpan,
  tt as formatString,
  na as getClassList,
  sn as getComponent,
  lh as getReactComponent,
  ai as getZData,
  Tt as h,
  Q as i18n,
  oi as isDiff,
  Jr as isFetchSetting,
  Ms as isSameDay,
  Ka as isSameMonth,
  sf as isSameWeek,
  gi as isSameYear,
  nf as isToday,
  of as isTomorrow,
  _t as isValidElement,
  rf as isYesterday,
  L as mergeProps,
  zt as nextGid,
  $n as parseSize,
  _a as reactComponents,
  le as registerReactComponent,
  ma as removeUndefinedProps,
  os as render,
  hi as renderCustomContent,
  hh as renderCustomResult,
  Qr as setZData,
  Qc as shareData,
  Ht as store,
  ia as storeData,
  ra as takeData,
  ee as toCssSize
};
//# sourceMappingURL=zui.js.map
