var Vn = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var D = (n, t, e) => (Vn(n, t, "read from private field"), e ? e.call(n) : t.get(n)), j = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, K = (n, t, e, s) => (Vn(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var jn = (n, t, e) => (Vn(n, t, "access private method"), e);
const Ht = document, Qs = window, zo = Ht.documentElement, ge = Ht.createElement.bind(Ht), Uo = ge("div"), Kn = ge("table"), ac = ge("tbody"), Gr = ge("tr"), { isArray: Cn, prototype: Vo } = Array, { concat: lc, filter: qi, indexOf: jo, map: Ko, push: cc, slice: Go, some: Yi, splice: hc } = Vo, dc = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, uc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, fc = /<.+>/, pc = /^\w+$/;
function Xi(n, t) {
  const e = mc(t);
  return !n || !e && !ue(t) && !Z(t) ? [] : !e && uc.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && pc.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class kn {
  constructor(t, e) {
    if (!t)
      return;
    if (li(t))
      return t;
    let s = t;
    if (it(t)) {
      const i = e || Ht;
      if (s = dc.test(t) && ue(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : fc.test(t) ? Xo(t) : li(i) ? i.find(t) : it(i) ? f(i).find(t) : Xi(t, i), !s)
        return;
    } else if (_e(t))
      return this.ready(t);
    (s.nodeType || s === Qs) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new kn(t, e);
  }
}
const $ = kn.prototype, f = $.init;
f.fn = f.prototype = $;
$.length = 0;
$.splice = hc;
typeof Symbol == "function" && ($[Symbol.iterator] = Vo[Symbol.iterator]);
function li(n) {
  return n instanceof kn;
}
function Ae(n) {
  return !!n && n === n.window;
}
function ue(n) {
  return !!n && n.nodeType === 9;
}
function mc(n) {
  return !!n && n.nodeType === 11;
}
function Z(n) {
  return !!n && n.nodeType === 1;
}
function gc(n) {
  return !!n && n.nodeType === 3;
}
function _c(n) {
  return typeof n == "boolean";
}
function _e(n) {
  return typeof n == "function";
}
function it(n) {
  return typeof n == "string";
}
function pt(n) {
  return n === void 0;
}
function es(n) {
  return n === null;
}
function qo(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Zi(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
f.isWindow = Ae;
f.isFunction = _e;
f.isArray = Cn;
f.isNumeric = qo;
f.isPlainObject = Zi;
function J(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Zi(n)) {
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
function tn(...n) {
  const t = _c(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return tn(t, f, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (Cn(r[o]) || Zi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), tn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
f.extend = tn;
$.extend = function(n) {
  return tn($, n);
};
const yc = /\S+/g;
function xn(n) {
  return it(n) ? n.match(yc) || [] : [];
}
$.toggleClass = function(n, t) {
  const e = xn(n), s = !pt(t);
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
  const t = xn(n);
  return this.each((e, s) => {
    Z(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function bc(n, t) {
  if (n) {
    if (it(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !Z(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return es(e) ? void 0 : e;
      }
      return pt(t) ? this : es(t) ? this.removeAttr(n) : this.each((e, s) => {
        Z(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
$.attr = bc;
$.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
$.hasClass = function(n) {
  return !!n && Yi.call(this, (t) => Z(t) && t.classList.contains(n));
};
$.get = function(n) {
  return pt(n) ? Go.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
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
function vc(n) {
  return pt(n) ? this.get().map((t) => Z(t) || gc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Z(e) && (e.textContent = n);
  });
}
$.text = vc;
function Ft(n, t, e) {
  if (!Z(n))
    return;
  const s = Qs.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function xt(n, t) {
  return parseInt(Ft(n, t), 10) || 0;
}
function qr(n, t) {
  return xt(n, `border${t ? "Left" : "Top"}Width`) + xt(n, `padding${t ? "Left" : "Top"}`) + xt(n, `padding${t ? "Right" : "Bottom"}`) + xt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const Gn = {};
function wc(n) {
  if (Gn[n])
    return Gn[n];
  const t = ge(n);
  Ht.body.insertBefore(t, null);
  const e = Ft(t, "display");
  return Ht.body.removeChild(t), Gn[n] = e !== "none" ? e : "block";
}
function Yr(n) {
  return Ft(n, "display") === "none";
}
function Yo(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function Sn(n) {
  return it(n) ? (t, e) => Yo(e, n) : _e(n) ? n : li(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
$.filter = function(n) {
  const t = Sn(n);
  return f(qi.call(this, (e, s) => t.call(e, s, e)));
};
function ee(n, t) {
  return t ? n.filter(t) : n;
}
$.detach = function(n) {
  return ee(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Cc = /^\s*<(\w+)[^>]*>/, kc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Xr = {
  "*": Uo,
  tr: ac,
  td: Gr,
  th: Gr,
  thead: Kn,
  tbody: Kn,
  tfoot: Kn
};
function Xo(n) {
  if (!it(n))
    return [];
  if (kc.test(n))
    return [ge(RegExp.$1)];
  const t = Cc.test(n) && RegExp.$1, e = Xr[t] || Xr["*"];
  return e.innerHTML = n, f(e.childNodes).detach().get();
}
f.parseHTML = Xo;
$.has = function(n) {
  const t = it(n) ? (e, s) => Xi(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
$.not = function(n) {
  const t = Sn(n);
  return this.filter((e, s) => (!it(n) || Z(s)) && !t.call(s, e, s));
};
function Ut(n, t, e, s) {
  const i = [], r = _e(t), o = s && Sn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && cc.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Zo(n) {
  return n.multiple && n.options ? Ut(qi.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function xc(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || ra.test(e.type)) {
      const i = Cn(n) ? Ko.call(n, String) : es(n) ? [] : [String(n)];
      s ? J(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = pt(n) || es(n) ? "" : n;
  }) : this[0] && Zo(this[0]);
}
$.val = xc;
$.is = function(n) {
  const t = Sn(n);
  return Yi.call(this, (e, s) => t.call(e, s, e));
};
f.guid = 1;
function Nt(n) {
  return n.length > 1 ? qi.call(n, (t, e, s) => jo.call(s, t) === e) : n;
}
f.unique = Nt;
$.add = function(n, t) {
  return f(Nt(this.get().concat(f(n, t).get())));
};
$.children = function(n) {
  return ee(f(Nt(Ut(this, (t) => t.children))), n);
};
$.parent = function(n) {
  return ee(f(Nt(Ut(this, "parentNode"))), n);
};
$.index = function(n) {
  const t = n ? f(n)[0] : this[0], e = n ? this : f(t).parent().children();
  return jo.call(e, t);
};
$.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
$.siblings = function(n) {
  return ee(f(Nt(Ut(this, (t) => f(t).parent().children().not(t)))), n);
};
$.find = function(n) {
  return f(Nt(Ut(this, (t) => Xi(n, t))));
};
const Sc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, $c = /^$|^module$|\/(java|ecma)script/i, Tc = ["type", "src", "nonce", "noModule"];
function Nc(n, t) {
  const e = f(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if ($c.test(i.type) && zo.contains(i)) {
      const r = ge("script");
      r.text = i.textContent.replace(Sc, ""), J(Tc, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Mc(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && Nc(t, n.ownerDocument);
}
function se(n, t, e, s, i, r, o, a) {
  return J(n, (l, c) => {
    J(f(c), (d, h) => {
      J(f(t), (g, p) => {
        const m = e ? h : p, _ = e ? p : h, y = e ? d : g;
        Mc(m, y ? _.cloneNode(!0) : _, s, i, !y);
      }, a);
    }, o);
  }, r), t;
}
$.after = function() {
  return se(arguments, this, !1, !1, !1, !0, !0);
};
$.append = function() {
  return se(arguments, this, !1, !1, !0);
};
function Ec(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (pt(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    Z(s) && (t ? f(s).empty().append(n) : s.innerHTML = n);
  });
}
$.html = Ec;
$.appendTo = function(n) {
  return se(arguments, this, !0, !1, !0);
};
$.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = f(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
$.before = function() {
  return se(arguments, this, !1, !0);
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
  return se(arguments, this, !0, !1, !1, !1, !1, !0);
};
$.insertBefore = function(n) {
  return se(arguments, this, !0, !0);
};
$.prepend = function() {
  return se(arguments, this, !1, !0, !0, !0, !0);
};
$.prependTo = function(n) {
  return se(arguments, this, !0, !0, !0, !1, !1, !0);
};
$.contents = function() {
  return f(Nt(Ut(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
$.next = function(n, t, e) {
  return ee(f(Nt(Ut(this, "nextElementSibling", t, e))), n);
};
$.nextAll = function(n) {
  return this.next(n, !0);
};
$.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
$.parents = function(n, t) {
  return ee(f(Nt(Ut(this, "parentElement", !0, t))), n);
};
$.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
$.prev = function(n, t, e) {
  return ee(f(Nt(Ut(this, "previousElementSibling", t, e))), n);
};
$.prevAll = function(n) {
  return this.prev(n, !0);
};
$.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
$.map = function(n) {
  return f(lc.apply([], Ko.call(this, (t, e) => n.call(t, e, t))));
};
$.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
$.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && Ft(e, "position") === "static"; )
      e = e.offsetParent;
    return e || zo;
  });
};
$.slice = function(n, t) {
  return f(Go.call(this, n, t));
};
const Ic = /-([a-z])/g;
function Ji(n) {
  return n.replace(Ic, (t, e) => e.toUpperCase());
}
$.ready = function(n) {
  const t = () => setTimeout(n, 0, f);
  return Ht.readyState !== "loading" ? t() : Ht.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + Qs.pageYOffset,
    left: t.left + Qs.pageXOffset
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
      e.top -= r.top + xt(i, "borderTopWidth"), e.left -= r.left + xt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - xt(n, "marginTop"),
    left: e.left - xt(n, "marginLeft")
  };
};
const Jo = {
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
      return n = Jo[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
$.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Jo[n] || n];
  });
};
const Ac = /^--/;
function Qi(n) {
  return Ac.test(n);
}
const qn = {}, { style: Dc } = Uo, Pc = ["webkit", "moz", "ms"];
function Lc(n, t = Qi(n)) {
  if (t)
    return n;
  if (!qn[n]) {
    const e = Ji(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Pc.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in Dc)
        return qn[n] = o, !1;
    });
  }
  return qn[n];
}
const Rc = {
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
function Qo(n, t, e = Qi(n)) {
  return !e && !Rc[n] && qo(t) ? `${t}px` : t;
}
function Wc(n, t) {
  if (it(n)) {
    const e = Qi(n);
    return n = Lc(n, e), arguments.length < 2 ? this[0] && Ft(this[0], n, e) : n ? (t = Qo(n, t, e), this.each((s, i) => {
      Z(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
$.css = Wc;
function ta(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const Oc = /^\s+|\s+$/;
function Zr(n, t) {
  const e = n.dataset[t] || n.dataset[Ji(t)];
  return Oc.test(e) ? e : ta(JSON.parse, e);
}
function Hc(n, t, e) {
  e = ta(JSON.stringify, e), n.dataset[Ji(t)] = e;
}
function Fc(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = Zr(this[0], s);
    return e;
  }
  if (it(n))
    return arguments.length < 2 ? this[0] && Zr(this[0], n) : pt(t) ? this : this.each((e, s) => {
      Hc(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
$.data = Fc;
function ea(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
J([!0, !1], (n, t) => {
  J(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    $[i] = function(r) {
      if (this[0])
        return Ae(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ue(this[0]) ? ea(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? xt(this[0], `margin${e ? "Top" : "Left"}`) + xt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  $[e] = function(s) {
    if (!this[0])
      return pt(s) ? void 0 : this;
    if (!arguments.length)
      return Ae(this[0]) ? this[0].document.documentElement[`client${t}`] : ue(this[0]) ? ea(this[0], t) : this[0].getBoundingClientRect()[e] - qr(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Z(o))
        return;
      const a = Ft(o, "boxSizing");
      o.style[e] = Qo(e, i + (a === "border-box" ? qr(o, !n) : 0));
    });
  };
});
const Jr = "___cd";
$.toggle = function(n) {
  return this.each((t, e) => {
    if (!Z(e))
      return;
    const s = Yr(e);
    (pt(n) ? s : n) ? (e.style.display = e[Jr] || "", Yr(e) && (e.style.display = wc(e.tagName))) : s || (e[Jr] = Ft(e, "display"), e.style.display = "none");
  });
};
$.hide = function() {
  return this.toggle(!1);
};
$.show = function() {
  return this.toggle(!0);
};
const Qr = "___ce", tr = ".", er = { focus: "focusin", blur: "focusout" }, sa = { mouseenter: "mouseover", mouseleave: "mouseout" }, Bc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function sr(n) {
  return sa[n] || er[n] || n;
}
function nr(n) {
  const t = n.split(tr);
  return [t[0], t.slice(1).sort()];
}
$.trigger = function(n, t) {
  if (it(n)) {
    const [s, i] = nr(n), r = sr(s);
    if (!r)
      return this;
    const o = Bc.test(r) ? "MouseEvents" : "HTMLEvents";
    n = Ht.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(tr), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in er;
  return this.each((s, i) => {
    e && _e(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function na(n) {
  return n[Qr] = n[Qr] || {};
}
function zc(n, t, e, s, i) {
  const r = na(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function ia(n, t) {
  return !t || !Yi.call(t, (e) => n.indexOf(e) < 0);
}
function en(n, t, e, s, i) {
  const r = na(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !ia(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      en(n, t, e, s, i);
}
$.off = function(n, t, e) {
  if (pt(n))
    this.each((s, i) => {
      !Z(i) && !ue(i) && !Ae(i) || en(i);
    });
  else if (it(n))
    _e(t) && (e = t, t = ""), J(xn(n), (s, i) => {
      const [r, o] = nr(i), a = sr(r);
      this.each((l, c) => {
        !Z(c) && !ue(c) && !Ae(c) || en(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
$.remove = function(n) {
  return ee(this, n).detach().off(), this;
};
$.replaceWith = function(n) {
  return this.before(n).remove();
};
$.replaceAll = function(n) {
  return f(n).replaceWith(this), this;
};
function Uc(n, t, e, s, i) {
  if (!it(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return it(t) || (pt(t) || es(t) ? t = "" : pt(e) ? (e = t, t = "") : (s = e, e = t, t = "")), _e(s) || (s = e, e = void 0), s ? (J(xn(n), (r, o) => {
    const [a, l] = nr(o), c = sr(a), d = a in sa, h = a in er;
    c && this.each((g, p) => {
      if (!Z(p) && !ue(p) && !Ae(p))
        return;
      const m = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !ia(l, _.namespace.split(tr)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let y = p;
        if (t) {
          let v = _.target;
          for (; !Yo(v, t); )
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
        i && en(p, c, l, t, m), b === !1 && (_.preventDefault(), _.stopPropagation());
      };
      m.guid = s.guid = s.guid || f.guid++, zc(p, c, l, t, m);
    });
  }), this) : this;
}
$.on = Uc;
function Vc(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
$.one = Vc;
const jc = /\r?\n/g;
function Kc(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(jc, `\r
`))}`;
}
const Gc = /file|reset|submit|button|image/i, ra = /radio|checkbox/i;
$.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    J(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Gc.test(i.type) || ra.test(i.type) && !i.checked)
        return;
      const r = Zo(i);
      if (!pt(r)) {
        const o = Cn(r) ? r : [r];
        J(o, (a, l) => {
          n += Kc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = f;
function qc(n, t) {
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
function Yc(n, t, e) {
  try {
    const s = qc(n, t), i = s[s.length - 1];
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
var ir = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(ir || {});
function Xc(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / ir[e]).toFixed(t) + e);
}
const Zc = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * ir[s];
};
let rr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Gt;
function Jc() {
  return rr;
}
function Qc(n) {
  rr = n.toLowerCase();
}
function oa(n, t) {
  Gt || (Gt = {}), typeof n == "string" && (n = { [n]: t ?? {} }), f.extend(!0, Gt, n);
}
function Q(n, t, e, s, i, r) {
  Array.isArray(n) ? Gt && n.unshift(Gt) : n = Gt ? [Gt, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || rr;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === Gt ? `${r}.${t}` : t;
    if (a = Yc(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? tt(a, ...Array.isArray(e) ? e : [e]) : a;
}
function th(n, t, e, s) {
  return Q(void 0, n, t, e, s);
}
Q.addLang = oa;
Q.getLang = th;
Q.getCode = Jc;
Q.setCode = Qc;
oa({
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
function to(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function je(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => je(n, t, s)) : n.append(t, e instanceof Blob ? e : String(e)));
}
function eh(n, t) {
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
function sh(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    je(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    je(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    je(e, i, s);
  }) : f.isPlainObject(n) && Object.entries(n).forEach(([s, i]) => {
    je(e, s, i);
  })), e;
}
class aa {
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
    y && (i && (y = sh(y)), _.body = y), o && (_.mode = "cors");
    const b = _.headers || {};
    to(b, "X-Requested-With", "XMLHttpRequest"), r && to(b, "Content-Type", r), _.headers = b, _.signal && _.signal.addEventListener("abort", () => {
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
        const h = (c = o.headers.get("Content-Disposition")) == null ? void 0 : c.startsWith("attachment"), g = h ? "blob" : e || eh(o.headers.get("Content-Type"), s);
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
  const e = new aa(t);
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
async function $n(n, t = [], e) {
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
  const i = new aa(s), [r] = await i.send();
  return r;
}
function eo(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
f.fetch = $n;
function Bt() {
  return f.guid++;
}
function ci(n, t) {
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
        if (ci(n[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(n), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (ci(n[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class ss {
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
    return (!e || t.some((s, i) => ci(s instanceof ss ? s.value : s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof ss ? s.cache : s)), this._value;
  }
}
function la(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? la(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...n) => la(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
f.classes = x;
f.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = f(s);
    n === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(n, ...t));
  });
};
const Ke = /* @__PURE__ */ new WeakMap();
function ca(n, t, e) {
  const s = Ke.has(n), i = s ? Ke.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, f(n).dataset(), i), Ke.set(n, i)) : Ke.delete(n);
}
function ha(n, t, e) {
  let s = Ke.get(n) || {};
  return !e && n instanceof Element && (s = Object.assign({}, f(n).dataset(), s)), t === void 0 ? s : s[t];
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...n) {
  if (!this.length)
    return;
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? ha(this[0], t) : this.each((s, i) => ca(i, t, e));
};
f.fn.removeData = function(n = null) {
  return this.each((t, e) => ca(e, n));
};
function hi(n, t = "z-") {
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
function so(n, t, e = "z-") {
  const s = f(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function nh(...n) {
  var e;
  const t = n.length;
  if (!t)
    return hi(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = hi(this)) == null ? void 0 : e[s] : (f.isPlainObject(s) && so(this, s), this);
  }
  return so(this, { [n[0]]: n[1] }), this;
}
f.fn.z = nh;
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
const sn = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), ih = {};
f.share = ih;
var Tn, z, da, gt, re, no, ua, di, Te = {}, fa = [], rh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Nn = Array.isArray;
function Zt(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function pa(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function $t(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Tn.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return Fs(n, o, s, i, null);
}
function Fs(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++da };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function B() {
  return { current: null };
}
function Le(n) {
  return n.children;
}
function H(n, t) {
  this.props = n, this.context = t;
}
function ns(n, t) {
  if (t == null)
    return n.__ ? ns(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__d || e.__e;
  return typeof n.type == "function" ? ns(n) : null;
}
function ma(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return ma(n);
  }
}
function io(n) {
  (!n.__d && (n.__d = !0) && re.push(n) && !nn.__r++ || no !== z.debounceRendering) && ((no = z.debounceRendering) || ua)(nn);
}
function nn() {
  var n, t, e, s, i, r, o, a, l;
  for (re.sort(di); n = re.shift(); )
    n.__d && (t = re.length, s = void 0, i = void 0, r = void 0, a = (o = (e = n).__v).__e, (l = e.__P) && (s = [], i = [], (r = Zt({}, o)).__v = o.__v + 1, or(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, s, a ?? ns(o), o.__h, i), ba(s, o, i), o.__e != a && ma(o)), re.length > t && re.sort(di));
  nn.__r = 0;
}
function ga(n, t, e, s, i, r, o, a, l, c, d) {
  var h, g, p, m, _, y, b, v, w, k = 0, C = s && s.__k || fa, S = C.length, E = S, I = t.length;
  for (e.__k = [], h = 0; h < I; h++)
    (m = e.__k[h] = (m = t[h]) == null || typeof m == "boolean" || typeof m == "function" ? null : typeof m == "string" || typeof m == "number" || typeof m == "bigint" ? Fs(null, m, null, null, m) : Nn(m) ? Fs(Le, { children: m }, null, null, null) : m.__b > 0 ? Fs(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) != null ? (m.__ = e, m.__b = e.__b + 1, (v = oh(m, C, b = h + k, E)) === -1 ? p = Te : (p = C[v] || Te, C[v] = void 0, E--), or(n, m, p, i, r, o, a, l, c, d), _ = m.__e, (g = m.ref) && p.ref != g && (p.ref && ar(p.ref, null, m), d.push(g, m.__c || _, m)), _ != null && (y == null && (y = _), (w = p === Te || p.__v === null) ? v == -1 && k-- : v !== b && (v === b + 1 ? k++ : v > b ? E > I - b ? k += v - b : k-- : k = v < b && v == b - 1 ? v - b : 0), b = h + k, typeof m.type != "function" || v === b && p.__k !== m.__k ? typeof m.type == "function" || v === b && !w ? m.__d !== void 0 ? (l = m.__d, m.__d = void 0) : l = _.nextSibling : l = ya(n, _, l) : l = _a(m, l, n), typeof e.type == "function" && (e.__d = l))) : (p = C[h]) && p.key == null && p.__e && (p.__e == l && (p.__ = s, l = ns(p)), ui(p, p, !1), C[h] = null);
  for (e.__e = y, h = S; h--; )
    C[h] != null && (typeof e.type == "function" && C[h].__e != null && C[h].__e == e.__d && (e.__d = C[h].__e.nextSibling), ui(C[h], C[h]));
}
function _a(n, t, e) {
  for (var s, i = n.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = n, t = typeof s.type == "function" ? _a(s, t, e) : ya(e, s.__e, t));
  return t;
}
function is(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (Nn(n) ? n.some(function(e) {
    is(e, t);
  }) : t.push(n)), t;
}
function ya(n, t, e) {
  return e == null || e.parentNode !== n ? n.insertBefore(t, null) : t == e && t.parentNode != null || n.insertBefore(t, e), t.nextSibling;
}
function oh(n, t, e, s) {
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
function ah(n, t, e, s, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || rn(n, r, null, e[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || rn(n, r, t[r], e[r], s);
}
function ro(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || rh.test(t) ? e : e + "px";
}
function rn(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || ro(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || ro(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = Date.now(), n.addEventListener(t, r ? ao : oo, r)) : n.removeEventListener(t, r ? ao : oo, r);
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
function oo(n) {
  var t = this.l[n.type + !1];
  if (n.t) {
    if (n.t <= t.u)
      return;
  } else
    n.t = Date.now();
  return t(z.event ? z.event(n) : n);
}
function ao(n) {
  return this.l[n.type + !0](z.event ? z.event(n) : n);
}
function or(n, t, e, s, i, r, o, a, l, c) {
  var d, h, g, p, m, _, y, b, v, w, k, C, S, E, I, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = z.__b) && d(t);
  t:
    if (typeof A == "function")
      try {
        if (b = t.props, v = (d = A.contextType) && s[d.__c], w = d ? v ? v.props.value : d.__ : s, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : ("prototype" in A && A.prototype.render ? t.__c = h = new A(b, w) : (t.__c = h = new H(b, w), h.constructor = A, h.render = ch), v && v.sub(h), h.props = b, h.state || (h.state = {}), h.context = w, h.__n = s, g = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), A.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Zt({}, h.__s)), Zt(h.__s, A.getDerivedStateFromProps(b, h.__s))), p = h.props, m = h.state, h.__v = t, g)
          A.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && b !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(b, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(b, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = b, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(N) {
              N && (N.__ = t);
            }), k = 0; k < h._sb.length; k++)
              h.__h.push(h._sb[k]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(b, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, m, _);
          });
        }
        if (h.context = w, h.props = b, h.__P = n, h.__e = !1, C = z.__r, S = 0, "prototype" in A && A.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), E = 0; E < h._sb.length; E++)
            h.__h.push(h._sb[E]);
          h._sb = [];
        } else
          do
            h.__d = !1, C && C(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++S < 25);
        h.state = h.__s, h.getChildContext != null && (s = Zt(Zt({}, s), h.getChildContext())), g || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, m)), ga(n, Nn(I = d != null && d.type === Le && d.key == null ? d.props.children : d) ? I : [I], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (N) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), z.__e(N, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = lh(e.__e, t, e, s, i, r, o, l, c);
  (d = z.diffed) && d(t);
}
function ba(n, t, e) {
  for (var s = 0; s < e.length; s++)
    ar(e[s], e[++s], e[++s]);
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
function lh(n, t, e, s, i, r, o, a, l) {
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
    if (r = r && Tn.call(n.childNodes), d = (g = e.props || Te).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (g = {}, _ = 0; _ < n.attributes.length; _++)
          g[n.attributes[_].name] = n.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }
    if (ah(n, p, g, i, a), h)
      t.__k = [];
    else if (ga(n, Nn(_ = t.props.children) ? _ : [_], t, e, s, i && m !== "foreignObject", r, o, r ? r[0] : e.__k && ns(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && pa(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== n.value || m === "progress" && !_ || m === "option" && _ !== g.value) && rn(n, "value", _, g.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== n.checked && rn(n, "checked", _, g.checked, !1));
  }
  return n;
}
function ar(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    z.__e(s, e);
  }
}
function ui(n, t, e) {
  var s, i;
  if (z.unmount && z.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || ar(s, null, t)), (s = n.__c) != null) {
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
      s[i] && ui(s[i], t, e || typeof n.type != "function");
  e || n.__e == null || pa(n.__e), n.__ = n.__e = n.__d = void 0;
}
function ch(n, t, e) {
  return this.constructor(n, e);
}
function rs(n, t, e) {
  var s, i, r, o;
  z.__ && z.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], or(t, n = (!s && e || t).__k = $t(Le, null, [n]), i || Te, Te, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? Tn.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), ba(r, n, o);
}
Tn = fa.slice, z = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, da = 0, gt = function(n) {
  return n != null && n.constructor === void 0;
}, H.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Zt({}, this.state), typeof n == "function" && (n = n(Zt({}, e), this.props)), n && Zt(e, n), n != null && this.__v && (t && this._sb.push(t), io(this));
}, H.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), io(this));
}, H.prototype.render = Le, re = [], ua = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, di = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, nn.__r = 0;
function W(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...is(r), ...is(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = f.extend(r, i))), n[s] = i);
    });
  }), n;
}
function va(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
const Ge = /* @__PURE__ */ new Map();
function on(n) {
  const { zui: t } = window;
  return (!Ge.size || n && !Ge.has(n.toUpperCase())) && Object.keys(t).forEach((e) => {
    const s = t[e];
    !s.NAME || !s.ZUI || Ge.set(e.toLowerCase(), s);
  }), n ? Ge.get(n.toLowerCase()) : void 0;
}
function hh(n, t, e) {
  const s = on(n);
  return s ? !s.MULTI_INSTANCE && s.get(t) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: t, options: e }), null) : new s(t, e) : null;
}
function zu(n) {
  if (n) {
    const t = on(n);
    t && t.defineFn();
  } else
    on(), Ge.forEach((t) => {
      t.defineFn();
    });
}
f.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = f(this);
    let t = hi(n, "data-");
    const [e, s] = t.zui.split(":");
    n.zui(e) || (s ? t = f.share[s] : delete t.zui, requestAnimationFrame(() => hh(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
f.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = ha(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), n === !0 ? r : o;
  }
  const s = on(n);
  if (s)
    return t === !0 ? s.getAll(e) : s.query(e, t);
};
f(() => {
  f("body").zuiInit();
});
function dh(n, t = !0) {
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
    dh(e, n);
  });
};
f.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function Mn(n) {
  if (typeof n == "number")
    return [n];
  let t = n.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = n.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Jt(n) {
  if (n == null)
    return null;
  const [t, e = "px"] = Mn(n);
  return Number.isNaN(t) ? typeof n == "string" ? n : null : `${t}${e}`;
}
async function lo(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = t), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), lo(o, t);
  }
  const e = await fetch(n);
  return lo(e);
}
function lr(n, t) {
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
  return lr(this, n);
};
function cr(n, t, e = !1) {
  const s = f(n);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${Bt()}`;
      s.append(`<script id="${i}">${t}<\/script>`), e && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    cr(s, r.innerHTML), r.remove();
  });
}
f.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
f.fn.runJS = function(n) {
  return this.each((t, e) => {
    cr(e, n);
  });
};
function wa(n, t) {
  const e = f(n), { ifNeeded: s = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (s) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (lr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
f.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    wa(e, n);
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
        const C = m.data("loadCalls") || [];
        C.push(g), m.data("loadCalls", C);
      }
      return;
    }
    const { async: _ = !0, defer: y = !1, noModule: b = !1, type: v, integrity: w } = r, k = document.createElement("script");
    k.async = _, k.defer = y, k.noModule = b, v && (k.type = v), w && (k.integrity = w), k.onload = () => {
      g(), (f(k).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), f(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, k.src = o, f("head").append(k);
  });
};
f.getScript = f.getLib;
function Re(n) {
  return n.parentNode === document ? !1 : n.parentNode ? Re(n.parentNode) : !0;
}
f.isDetached = Re;
f.fn.isDetached = function() {
  const n = this[0];
  return !n || Re(n);
};
const Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: Re,
  isVisible: lr,
  runJS: cr,
  scrollIntoView: wa
}, Symbol.toStringTag, { value: "Module" })), Ca = {};
function ne(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    ne(e, n[e]);
  }) : t && (Ca[n.toLowerCase()] = t);
}
function uh(n) {
  return Ca[n.toLowerCase()];
}
const co = "dangerouslySetInnerHTML";
class U extends H {
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
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: d, ...h } = t, g = new Set(this.constructor.customProps), p = Object.keys(h).reduce((m, _) => {
      if (!g.has(_) && (_ === co || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(_))) {
        const y = h[_];
        m[_] = _ !== co && y && typeof y == "object" ? JSON.stringify(y) : y;
      }
      return m;
    }, {});
    return { ref: o, className: x(this._getClassName(t), d) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...p, ...s, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? uh(e) : e) || e;
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
var fh = 0;
function u(n, t, e, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --fh, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(c), c;
}
class fe extends H {
  constructor() {
    super(...arguments), this._ref = B();
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
function ph(n) {
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
      b != null && (typeof b == "object" && !gt(b) && ("html" in b || "__html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b) ? b.html ? p.push(
        /* @__PURE__ */ u("div", { className: x(b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })
      ) : b.__html ? m.push(b.__html) : (b.style && Object.assign(g, b.style), b.className && h.push(b.className), b.children && p.push(b.children), b.attrs && Object.assign(d, b.attrs)) : p.push(b));
    });
  }), m.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: m } }), [{
    className: x(h),
    style: g,
    ...d
  }, p];
}
function ka({
  tag: n = "div",
  ...t
}) {
  const [e, s] = ph(t);
  return $t(n, e, ...s);
}
function fi(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => fi({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ u("div", { ...i, children: r }) : r;
  if (typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ u(fe, { ...W(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = W({ children: o.map((a) => fi({ ...i, content: a, generatorThis: s, generatorArgs: e })) }, r)), /* @__PURE__ */ u(U, { ...W(i, r) });
  }
  return gt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function R(n) {
  const t = fi(n);
  return t == null || typeof t == "boolean" ? null : gt(t) ? t : /* @__PURE__ */ u(Le, { children: t });
}
const ho = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function q(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (gt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(ho(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? ho(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ u("i", { className: x(i), ...s });
}
function mh(n) {
  return this.getChildContext = () => n.context, n.children;
}
function xa(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    rs(null, t._temp), t._temp = null, t._container = null;
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
  }), rs(
    $t(mh, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function gh(n, t) {
  const e = $t(xa, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
ne({
  HElement: U,
  element: U,
  HtmlContent: fe,
  html: fe,
  CustomContent: R,
  custom: R,
  Icon: q,
  Portal: xa
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
    const c = l[0], d = Bt();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((g) => {
      g.forEach((p) => {
        p.removedNodes.forEach((m) => {
          m === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Re(c) && this.destroy();
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
class O extends lt {
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
        const { name: h, value: g } = d;
        return c[h === "class" ? "className" : h] = g, c;
      }, {});
      return rs(
        $t(s, W({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    rs(
      $t(s, a),
      e
    );
  }
}
O.replace = !1;
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
    }, c ? `size-${c}` : "", typeof d == "string" ? d : { rounded: d }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: r,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (s !== void 0 && (c[l ? "href" : "data-url"] = s), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: st
}, Symbol.toStringTag, { value: "Module" }));
ne(_h);
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
        return /* @__PURE__ */ u(R, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || U;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = W({}, c, e), l = l[0];
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
    if (e = W(
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
const yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: ct
}, Symbol.toStringTag, { value: "Module" }));
class hr extends O {
}
hr.NAME = "CommonList";
hr.Component = ct;
hr.replace = ct.TAG;
ne(yh);
function bh(n) {
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
function vh(n) {
  const [t, e, s] = typeof n == "string" ? bh(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function uo(n, t) {
  return vh(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function fo(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function wh(n, t, e) {
  n = n % 360 / 360, t = fo(t), e = fo(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function Sa(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function Ch(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let Cs = class extends H {
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
    let k = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (v.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? v.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let C;
    if (g)
      v.push("has-img"), C = /* @__PURE__ */ u("img", { className: "avatar-img", src: g, alt: c });
    else if (l)
      v.push("has-icon"), C = /* @__PURE__ */ u(q, { icon: l });
    else if (c != null && c.length) {
      const S = Ch(c, h);
      if (v.push("has-text", `has-text-${S.length}`), o)
        !a && o && (w.color = uo(o));
      else {
        const I = d ?? c, A = (typeof I == "number" ? I : Sa(I)) * p % 360;
        if (w.background = `hsl(${A},${m * 100}%,${_ * 100}%)`, !a) {
          const N = wh(A, m, _);
          w.color = uo(N);
        }
      }
      let E;
      k && k < 14 * S.length && (E = { transform: `scale(${k / (14 * S.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ u("div", { "data-actualSize": k, className: "avatar-text", style: E, children: S });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        className: x(v),
        style: w,
        ...b,
        children: [
          C,
          y
        ]
      }
    );
  }
};
const kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Cs
}, Symbol.toStringTag, { value: "Module" }));
let wt = class extends ct {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    e.type || (e = f.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = W({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = W({}, e, va({ btnType: s, size: i }));
  }
};
wt.NAME = "btn-group";
wt.TAG = "nav";
wt.ItemComponents = {
  ...ct.ItemComponents,
  default: st
};
wt.defaultItemProps = {
  component: void 0
};
const En = class $a extends wt {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = x(s.className, `gap-${e}`) : s.style = f.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = W({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = W(s, r)), /* @__PURE__ */ u($a, { ...r });
  }
};
En.NAME = "toolbar";
En.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
En.ItemComponents = {
  ...wt.ItemComponents,
  btnGroup: wt,
  "btn-group": wt
};
let at = En;
const xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: at
}, Symbol.toStringTag, { value: "Module" }));
class In extends U {
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
      /* @__PURE__ */ u("label", { htmlFor: r, children: /* @__PURE__ */ u(R, { content: o }) }, "label")
    ];
  }
}
class Sh extends In {
}
Sh.defaultProps = {
  type: "radio"
};
class $h extends In {
}
$h.defaultProps = {
  type: "switch"
};
class an extends U {
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
    if (i && d.push(/* @__PURE__ */ u(R, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ u(In, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ u(q, { className: "item-icon", icon: e }, "icon")), s) {
      const g = typeof s == "function" ? s.call(this, t) : s;
      g && (g.className = x("item-avatar", g.className), d.push(/* @__PURE__ */ u(Cs, { ...g }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ u(R, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ u("div", { className: x("item-leading", o), children: d }, "leading")
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
      /* @__PURE__ */ u("div", { className: x("item-content", h), ...g, children: [
        _ ? /* @__PURE__ */ u(m, { className: x("item-title", i), href: p ? l : void 0, target: p ? c : void 0, ...r, children: /* @__PURE__ */ u(R, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ u("div", { className: x("item-subtitle", a), children: /* @__PURE__ */ u(R, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ u("div", { className: x("item-text text", s), children: y }, "text") : null,
        d ? /* @__PURE__ */ u(R, { content: d }, "extraContent") : null
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
    const l = s ? /* @__PURE__ */ u(R, { content: s }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ u("div", { className: x("item-trailing", i), children: [
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
    } = t, v = s || (o && !a ? "a" : "div"), w = v === "a", k = W({
      key: "item",
      title: y,
      className: x("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": b,
        checked: g,
        multiline: p ?? !!(m && _),
        state: w
      })
    }, w ? { href: o, target: l } : null, e, r);
    return /* @__PURE__ */ u(v, { ...k, children: [
      this._renderLeading(t),
      this._renderContent(t, w),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...is(s)]];
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
        const s = await $n(t, [this], { throws: !0 });
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
    e = W({}, va({
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
  item: an,
  heading: an
};
Mt.NAME = "list";
const Yn = "```ZUI_STR\n";
class ks {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new ks(this._id, "session")), this._altStorage);
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
      if (s.startsWith(Yn))
        return s.substring(Yn.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Yn}${e}` : JSON.stringify(e));
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
const Ot = new ks("DEFAULT");
function Th(n, t = "local") {
  return new ks(n, t);
}
Object.assign(Ot, { create: Th });
function Ta(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), Ta(s, t);
  });
}
function Nh(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function po(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function Na(n, t, e = /* @__PURE__ */ new Map(), s = 0, i) {
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
    i && i.children.push(c), e.set(l, c), Array.isArray(r.items) && Na(r.items, t, e, s + 1, c);
  }), e;
}
let ye = class extends Mt {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (f.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = Ot.get(this._storeID);
      r && f.extend(this.state, r);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && po(o).forEach((a) => {
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
    return this._itemMap || (this._itemMap = Na(this._items, this.props.itemKey)), this._itemMap;
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
      return this.setState((o) => ({
        nestedShow: po(t).reduce((a, l) => (a[l] = e, a), { ...o.nestedShow })
      }), this._preserveState);
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
            l && (Ta(l, (c) => {
              o(c) !== e && (s[c.keyPath] = e);
            }), Nh(l, (c) => {
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
    return W(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
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
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ u("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ u("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (s = /* @__PURE__ */ u(q, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ u("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: s });
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
  _renderItem(t, e, s) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = W(e, {
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
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = W(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * s}px`, "--list-indent": `${s}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = x(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
ye.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
ye.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "activeOnChecked", "checkedState"];
class dr extends O {
}
dr.NAME = "List";
dr.Component = Mt;
dr.replace = Mt.TAG;
class ur extends O {
}
ur.NAME = "NestedList";
ur.Component = ye;
ur.replace = ye.TAG;
let et = class extends ye {
  _getClassName(t) {
    return x(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
et.NAME = "menu";
et.TAG = "menu";
et.inheritNestedProps = [...ye.inheritNestedProps, "compact"];
et.ItemComponents = {
  ...ye.ItemComponents,
  item: [an, { innerComponent: "a" }]
};
var Ma = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, He = (n, t, e) => (Ma(n, t, "read from private field"), e ? e.call(n) : t.get(n)), As = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, mo = (n, t, e) => (Ma(n, t, "access private method"), e), pi, Bs, zs, Us, mi;
let fr = class extends H {
  constructor(t) {
    super(t), As(this, Us), this._input = B(), this._timer = 0, As(this, pi, (e) => {
      const s = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), s.trim() !== "" && (i == null || i("", e));
      });
    }), As(this, Bs, (e) => {
      const s = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (mo(this, Us, mi).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), As(this, zs, (e) => {
      const s = e.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${Bt()}`;
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
    mo(this, Us, mi).call(this);
  }
  render(t, e) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: g, clearIcon: p, value: m } = t, { focus: _, value: y } = e, { id: b } = this, v = m ?? y, w = typeof v != "string" || !v.trim().length;
    let k, C, S;
    return g && (S = g === !0 ? /* @__PURE__ */ u("span", { class: "magnifier" }) : /* @__PURE__ */ u(q, { icon: g })), !h && g && (k = /* @__PURE__ */ u("label", { for: b, class: "input-control-prefix", children: S }, "prefix")), p && !w ? C = /* @__PURE__ */ u(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: He(this, pi),
        children: p === !0 ? /* @__PURE__ */ u("span", { class: "close" }) : /* @__PURE__ */ u(q, { icon: p })
      }
    ) : h && g && (C = S), C && (C = /* @__PURE__ */ u("label", { for: b, class: "input-control-suffix", children: C }, "suffix")), /* @__PURE__ */ u("div", { class: x("search-box input-control", r, { focus: _, empty: w, "has-prefix-icon": k, "has-suffix-icon": C }), style: o, children: [
      k,
      /* @__PURE__ */ u(
        "input",
        {
          ref: this._input,
          id: b,
          type: "text",
          class: x("form-control", i, { "rounded-full": c }),
          style: s,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: v,
          onInput: He(this, Bs),
          onChange: He(this, Bs),
          onFocus: He(this, zs),
          onBlur: He(this, zs)
        }
      ),
      C
    ] });
  }
};
pi = /* @__PURE__ */ new WeakMap();
Bs = /* @__PURE__ */ new WeakMap();
zs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakSet();
mi = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
fr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Ct = class extends et {
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
  _getChildren(t) {
    let e = super._getChildren(t);
    const { searchBox: s } = t;
    if (!s || !this.isRoot)
      return e;
    e = is(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof s == "object" && f.extend(i, s), t.search !== void 0 && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ u(fr, { ...i }, "search")), e;
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
Ct.inheritNestedProps = [...et.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Ct.defaultProps = {
  ...et.defaultProps,
  defaultNestedShow: !0
};
class pr extends O {
}
pr.NAME = "Menu";
pr.Component = et;
pr.replace = et.TAG;
class mr extends O {
}
mr.NAME = "SearchMenu";
mr.Component = Ct;
mr.replace = Ct.TAG;
function Mh({
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
  a === !0 ? g = /* @__PURE__ */ u(st, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ u("span", { class: "close" }) }) : gt(a) ? g = a : typeof a == "object" && (g = /* @__PURE__ */ u(st, { ...a, onClick: l }));
  const p = gt(e) ? e : e ? /* @__PURE__ */ u(at, { ...e }) : null;
  return /* @__PURE__ */ u("div", { className: x("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ u(q, { icon: c, className: x("alert-icon", d) }),
    typeof i != "string" ? /* @__PURE__ */ u(R, { content: i }) : /* @__PURE__ */ u("div", { className: x("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ u(R, { content: s }) : s && /* @__PURE__ */ u("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ u("div", { className: "alert-text", children: i }),
      s ? p : null
    ] }),
    s ? null : p,
    g,
    o
  ] });
}
function Eh(n) {
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
function Ih({
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
    Mh,
    {
      className: x("messager", r, t, s === !0 ? Eh(e) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Ah = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Dh = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Fe = (n, t, e) => (Ah(n, t, "access private method"), e), ie, Ce;
class gr extends O {
  constructor() {
    super(...arguments), Dh(this, ie), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), Fe(this, ie, Ce).call(this, () => {
      this._show = !0, this.render(), Fe(this, ie, Ce).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Fe(this, ie, Ce).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Fe(this, ie, Ce).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Fe(this, ie, Ce).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ie = /* @__PURE__ */ new WeakSet();
Ce = function(n, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, t);
};
gr.NAME = "MessagerItem";
gr.Component = Ih;
var _r = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, ce = (n, t, e) => (_r(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ds = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Vs = (n, t, e, s) => (_r(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Ea = (n, t, e) => (_r(n, t, "access private method"), e), Ne, Lt, gi, Ia, yr, Aa;
const An = class Da extends lt {
  constructor() {
    super(...arguments), Ds(this, gi), Ds(this, yr), Ds(this, Ne, void 0), Ds(this, Lt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ce(this, Lt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Ea(this, gi, Ia).call(this).show();
  }
  hide() {
    var t;
    (t = ce(this, Lt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...s } = t, i = Da.ensure(e || "body", { key: `messager_${Bt()}`, ...s });
    return i.hide(), i.show(), i;
  }
};
Ne = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakSet();
Ia = function() {
  if (ce(this, Lt))
    ce(this, Lt).setOptions(this.options);
  else {
    const n = Ea(this, yr, Aa).call(this), t = new gr(n, this.options);
    t.on("hidden", () => {
      t.destroy(), n == null || n.remove(), Vs(this, Ne, void 0), Vs(this, Lt, void 0);
    }), Vs(this, Lt, t);
  }
  return ce(this, Lt);
};
yr = /* @__PURE__ */ new WeakSet();
Aa = function() {
  if (ce(this, Ne))
    return ce(this, Ne);
  const { placement: n = "top" } = this.options;
  let t = this.$element.find(`.messagers-${n}`);
  t.length || (t = f(`<div class="messagers messagers-${n}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Vs(this, Ne, e[0])), e[0];
};
An.NAME = "messager";
An.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
An.MULTI_INSTANCE = !0;
let Ju = An;
let Dn = class extends H {
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
Dn.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Pa extends O {
}
Pa.NAME = "ProgressCircle";
Pa.Component = Dn;
const Ph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: Dn
}, Symbol.toStringTag, { value: "Module" }));
ne(Ph);
const Be = '[droppable="true"]';
class Pn extends lt {
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
      let g = typeof o == "function" ? f(o.call(this, e)) : r.find(o || a || Be);
      if (h && (g = g.filter((p, m) => h.call(this, t, e, m) !== !1)), !g.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), g.addClass(c)), d && r.addClass(d), r.find(Be).removeAttr("droppable"), g.attr("droppable", "true"), this._$targets = g;
    }, this._handleDrag = (t) => {
      var s;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (s = this.options.onDrag) == null || s.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var s;
      const { dragElement: e } = this;
      this._clean(), e && ((s = this.options.onDragEnd) == null || s.call(this, t, e));
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var o, a;
      const { dragElement: e } = this, i = f(t.target).closest(Be)[0];
      if (!e || !i)
        return;
      const r = this.state.dropping;
      if (t.preventDefault(), this._setDragEffect(t), r !== i) {
        const { droppingClass: l } = this.options;
        l && (r && this._leaveDropElement(t, r), f(i).addClass(l)), this._setState({ dropping: i }), (o = this.options.onDragEnter) == null || o.call(this, t, e, i);
      }
      (a = this.options.onDragOver) == null || a.call(this, t, e, i);
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = f(t.target).filter(Be)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = f(t.target).closest(Be)[0];
      e && (t.preventDefault(), (s = this.options.onDrop) == null || s.call(this, t, this.dragElement, e)), this._clean();
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
Pn.NAME = "Draggable";
Pn.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Lh = '[moveable="true"]';
class xs extends lt {
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
xs.NAME = "Moveable";
xs.DEFAULT = {
  selector: Lh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const br = class La extends lt {
  async afterInit() {
    const t = await La.loadModule();
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
br.NAME = "Sortable";
br.DEFAULT = {
  animation: 150
};
let Rh = br;
f.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let vr = class extends Mt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new Rh(this.element, t));
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
vr.defaultProps = {
  sortable: !0
};
class wr extends O {
}
wr.NAME = "SortableList";
wr.Component = vr;
wr.replace = vr.TAG;
class Ra extends O {
}
Ra.NAME = "Avatar";
Ra.Component = Cs;
ne(kh);
class Wa extends O {
}
Wa.NAME = "BtnGroup";
Wa.Component = wt;
const Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: wt
}, Symbol.toStringTag, { value: "Module" }));
ne(Wh);
const _i = Symbol("EVENT_PICK");
class Cr extends H {
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
    const { state: e, className: s, disabled: i } = t, { open: r } = e;
    return x(
      "pick",
      s,
      r && "is-open focus",
      i && "disabled"
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
    const { name: e, state: { value: s = "" }, disabled: i, id: r } = t;
    if (e)
      if (this._hasInput)
        f(`#${r}`).val(s);
      else
        return /* @__PURE__ */ u("input", { id: r, type: "hidden", className: "pick-value", name: e, value: s, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    f(`#${t}`).on(`change.zui.pick.${t}`, (s, i) => {
      if (i === _i)
        return;
      const r = s.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && f(`#${e}`).trigger("change", _i), this._skipTriggerChange = !1);
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
const De = Math.min, he = Math.max, ln = Math.round, Ps = Math.floor, Qt = (n) => ({
  x: n,
  y: n
}), Oh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hh = {
  start: "end",
  end: "start"
};
function yi(n, t, e) {
  return he(n, De(t, e));
}
function Ss(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function pe(n) {
  return n.split("-")[0];
}
function $s(n) {
  return n.split("-")[1];
}
function Oa(n) {
  return n === "x" ? "y" : "x";
}
function kr(n) {
  return n === "y" ? "height" : "width";
}
function Ln(n) {
  return ["top", "bottom"].includes(pe(n)) ? "y" : "x";
}
function xr(n) {
  return Oa(Ln(n));
}
function Fh(n, t, e) {
  e === void 0 && (e = !1);
  const s = $s(n), i = xr(n), r = kr(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = cn(o)), [o, cn(o)];
}
function Bh(n) {
  const t = cn(n);
  return [bi(n), t, bi(t)];
}
function bi(n) {
  return n.replace(/start|end/g, (t) => Hh[t]);
}
function zh(n, t, e) {
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
function Uh(n, t, e, s) {
  const i = $s(n);
  let r = zh(pe(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(bi)))), r;
}
function cn(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Oh[t]);
}
function Vh(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function Ha(n) {
  return typeof n != "number" ? Vh(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function hn(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function go(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = Ln(t), o = xr(t), a = kr(o), l = pe(t), c = r === "y", d = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, g = s[a] / 2 - i[a] / 2;
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
  switch ($s(t)) {
    case "start":
      p[o] -= g * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += g * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const jh = async (n, t, e) => {
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
  } = go(c, s, l), g = s, p = {}, m = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: b
    } = a[_], {
      x: v,
      y: w,
      data: k,
      reset: C
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
        ...k
      }
    }, C && m <= 50) {
      m++, typeof C == "object" && (C.placement && (g = C.placement), C.rects && (c = C.rects === !0 ? await o.getElementRects({
        reference: n,
        floating: t,
        strategy: i
      }) : C.rects), {
        x: d,
        y: h
      } = go(c, g, l)), _ = -1;
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
async function Fa(n, t) {
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
  } = Ss(t, n), m = Ha(p), y = a[g ? h === "floating" ? "reference" : "floating" : h], b = hn(await r.getClippingRect({
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
  }, C = hn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: v,
    offsetParent: w,
    strategy: l
  }) : v);
  return {
    top: (b.top - C.top + m.top) / k.y,
    bottom: (C.bottom - b.bottom + m.bottom) / k.y,
    left: (b.left - C.left + m.left) / k.x,
    right: (C.right - b.right + m.right) / k.x
  };
}
const vi = (n) => ({
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
    } = Ss(n, t) || {};
    if (c == null)
      return {};
    const h = Ha(d), g = {
      x: e,
      y: s
    }, p = xr(i), m = kr(p), _ = await o.getDimensions(c), y = p === "y", b = y ? "top" : "left", v = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", k = r.reference[m] + r.reference[p] - g[p] - r.floating[m], C = g[p] - r.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let E = S ? S[w] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement(S))) && (E = a.floating[w] || r.floating[m]);
    const I = k / 2 - C / 2, A = E / 2 - _[m] / 2 - 1, N = De(h[b], A), P = De(h[v], A), F = N, V = E - _[m] - P, M = E / 2 - _[m] / 2 + I, Y = yi(F, M, V), mt = !l.arrow && $s(i) != null && M != Y && r.reference[m] / 2 - (M < F ? N : P) - _[m] / 2 < 0, Et = mt ? M < F ? M - F : M - V : 0;
    return {
      [p]: g[p] + Et,
      data: {
        [p]: Y,
        centerOffset: M - Y - Et,
        ...mt && {
          alignmentOffset: Et
        }
      },
      reset: mt
    };
  }
}), Rn = function(n) {
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
      } = Ss(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const b = pe(i), v = pe(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = g || (v || !_ ? [cn(a)] : Bh(a));
      !g && m !== "none" && k.push(...Uh(a, _, m, w));
      const C = [a, ...k], S = await Fa(t, y), E = [];
      let I = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (d && E.push(S[b]), h) {
        const F = Fh(i, o, w);
        E.push(S[F[0]], S[F[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: E
      }], !E.every((F) => F <= 0)) {
        var A, N;
        const F = (((A = r.flip) == null ? void 0 : A.index) || 0) + 1, V = C[F];
        if (V)
          return {
            data: {
              index: F,
              overflows: I
            },
            reset: {
              placement: V
            }
          };
        let M = (N = I.filter((Y) => Y.overflows[0] <= 0).sort((Y, mt) => Y.overflows[1] - mt.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!M)
          switch (p) {
            case "bestFit": {
              var P;
              const Y = (P = I.map((mt) => [mt.placement, mt.overflows.filter((Et) => Et > 0).reduce((Et, oc) => Et + oc, 0)]).sort((mt, Et) => mt[1] - Et[1])[0]) == null ? void 0 : P[0];
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
async function Kh(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = pe(e), a = $s(e), l = Ln(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = Ss(t, n);
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
const Wn = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s
      } = t, i = await Kh(t, n);
      return {
        x: e + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
}, os = function(n) {
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
      } = Ss(n, t), c = {
        x: e,
        y: s
      }, d = await Fa(t, l), h = Ln(pe(i)), g = Oa(h);
      let p = c[g], m = c[h];
      if (r) {
        const y = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", v = p + d[y], w = p - d[b];
        p = yi(v, p, w);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", v = m + d[y], w = m - d[b];
        m = yi(v, m, w);
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
};
function te(n) {
  return Ba(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ft(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vt(n) {
  var t;
  return (t = (Ba(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ba(n) {
  return n instanceof Node || n instanceof ft(n).Node;
}
function zt(n) {
  return n instanceof Element || n instanceof ft(n).Element;
}
function Tt(n) {
  return n instanceof HTMLElement || n instanceof ft(n).HTMLElement;
}
function _o(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof ft(n).ShadowRoot;
}
function Ts(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = yt(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function Gh(n) {
  return ["table", "td", "th"].includes(te(n));
}
function Sr(n) {
  const t = $r(), e = yt(n);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function qh(n) {
  let t = Pe(n);
  for (; Tt(t) && !On(t); ) {
    if (Sr(t))
      return t;
    t = Pe(t);
  }
  return null;
}
function $r() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function On(n) {
  return ["html", "body", "#document"].includes(te(n));
}
function yt(n) {
  return ft(n).getComputedStyle(n);
}
function Hn(n) {
  return zt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Pe(n) {
  if (te(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    _o(n) && n.host || // Fallback.
    Vt(n)
  );
  return _o(t) ? t.host : t;
}
function za(n) {
  const t = Pe(n);
  return On(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Tt(t) && Ts(t) ? t : za(t);
}
function as(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = za(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = ft(i);
  return r ? t.concat(o, o.visualViewport || [], Ts(i) ? i : [], o.frameElement && e ? as(o.frameElement) : []) : t.concat(i, as(i, [], e));
}
function Ua(n) {
  const t = yt(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Tt(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = ln(e) !== r || ln(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function Tr(n) {
  return zt(n) ? n : n.contextElement;
}
function Me(n) {
  const t = Tr(n);
  if (!Tt(t))
    return Qt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Ua(t);
  let o = (r ? ln(e.width) : e.width) / s, a = (r ? ln(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Yh = /* @__PURE__ */ Qt(0);
function Va(n) {
  const t = ft(n);
  return !$r() || !t.visualViewport ? Yh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Xh(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ft(n) ? !1 : t;
}
function me(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = Tr(n);
  let o = Qt(1);
  t && (s ? zt(s) && (o = Me(s)) : o = Me(n));
  const a = Xh(r, e, s) ? Va(r) : Qt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const g = ft(r), p = s && zt(s) ? ft(s) : s;
    let m = g.frameElement;
    for (; m && s && p !== g; ) {
      const _ = Me(m), y = m.getBoundingClientRect(), b = yt(m), v = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * _.x, w = y.top + (m.clientTop + parseFloat(b.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += v, c += w, m = ft(m).frameElement;
    }
  }
  return hn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function Zh(n) {
  let {
    rect: t,
    offsetParent: e,
    strategy: s
  } = n;
  const i = Tt(e), r = Vt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Qt(1);
  const l = Qt(0);
  if ((i || !i && s !== "fixed") && ((te(e) !== "body" || Ts(r)) && (o = Hn(e)), Tt(e))) {
    const c = me(e);
    a = Me(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Jh(n) {
  return Array.from(n.getClientRects());
}
function ja(n) {
  return me(Vt(n)).left + Hn(n).scrollLeft;
}
function Qh(n) {
  const t = Vt(n), e = Hn(n), s = n.ownerDocument.body, i = he(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = he(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + ja(n);
  const a = -e.scrollTop;
  return yt(s).direction === "rtl" && (o += he(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function td(n, t) {
  const e = ft(n), s = Vt(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = $r();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function ed(n, t) {
  const e = me(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = Tt(n) ? Me(n) : Qt(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function yo(n, t, e) {
  let s;
  if (t === "viewport")
    s = td(n, e);
  else if (t === "document")
    s = Qh(Vt(n));
  else if (zt(t))
    s = ed(t, e);
  else {
    const i = Va(n);
    s = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return hn(s);
}
function Ka(n, t) {
  const e = Pe(n);
  return e === t || !zt(e) || On(e) ? !1 : yt(e).position === "fixed" || Ka(e, t);
}
function sd(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = as(n, [], !1).filter((a) => zt(a) && te(a) !== "body"), i = null;
  const r = yt(n).position === "fixed";
  let o = r ? Pe(n) : n;
  for (; zt(o) && !On(o); ) {
    const a = yt(o), l = Sr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ts(o) && !l && Ka(n, o)) ? s = s.filter((d) => d !== o) : i = a, o = Pe(o);
  }
  return t.set(n, s), s;
}
function nd(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? sd(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, d) => {
    const h = yo(t, d, i);
    return c.top = he(h.top, c.top), c.right = De(h.right, c.right), c.bottom = De(h.bottom, c.bottom), c.left = he(h.left, c.left), c;
  }, yo(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function id(n) {
  return Ua(n);
}
function rd(n, t, e) {
  const s = Tt(t), i = Vt(t), r = e === "fixed", o = me(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Qt(0);
  if (s || !s && !r)
    if ((te(t) !== "body" || Ts(i)) && (a = Hn(t)), s) {
      const c = me(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = ja(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function bo(n, t) {
  return !Tt(n) || yt(n).position === "fixed" ? null : t ? t(n) : n.offsetParent;
}
function Ga(n, t) {
  const e = ft(n);
  if (!Tt(n))
    return e;
  let s = bo(n, t);
  for (; s && Gh(s) && yt(s).position === "static"; )
    s = bo(s, t);
  return s && (te(s) === "html" || te(s) === "body" && yt(s).position === "static" && !Sr(s)) ? e : s || qh(n) || e;
}
const od = async function(n) {
  let {
    reference: t,
    floating: e,
    strategy: s
  } = n;
  const i = this.getOffsetParent || Ga, r = this.getDimensions;
  return {
    reference: rd(t, await i(e), s),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function ad(n) {
  return yt(n).direction === "rtl";
}
const ld = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zh,
  getDocumentElement: Vt,
  getClippingRect: nd,
  getOffsetParent: Ga,
  getElementRects: od,
  getClientRects: Jh,
  getDimensions: id,
  getScale: Me,
  isElement: zt,
  isRTL: ad
};
function cd(n, t) {
  let e = null, s;
  const i = Vt(n);
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
    const p = Ps(d), m = Ps(i.clientWidth - (c + h)), _ = Ps(i.clientHeight - (d + g)), y = Ps(c), v = {
      rootMargin: -p + "px " + -m + "px " + -_ + "px " + -y + "px",
      threshold: he(0, De(1, l)) || 1
    };
    let w = !0;
    function k(C) {
      const S = C[0].intersectionRatio;
      if (S !== l) {
        if (!w)
          return o();
        S ? o(!1, S) : s = setTimeout(() => {
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
function Nr(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = Tr(n), d = i || r ? [...c ? as(c) : [], ...as(t)] : [];
  d.forEach((b) => {
    i && b.addEventListener("scroll", e, {
      passive: !0
    }), r && b.addEventListener("resize", e);
  });
  const h = c && a ? cd(c, e) : null;
  let g = -1, p = null;
  o && (p = new ResizeObserver((b) => {
    let [v] = b;
    v && v.target === c && p && (p.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let m, _ = l ? me(n) : null;
  l && y();
  function y() {
    const b = me(n);
    _ && (b.x !== _.x || b.y !== _.y || b.width !== _.width || b.height !== _.height) && e(), _ = b, m = requestAnimationFrame(y);
  }
  return e(), () => {
    d.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const Fn = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: ld,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return jh(n, t, {
    ...i,
    platform: r
  });
};
var le, kt, qt;
class qa extends H {
  constructor(e) {
    super(e);
    j(this, le, void 0);
    j(this, kt, void 0);
    j(this, qt, void 0);
    K(this, le, B()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = f(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = D(this, le)) == null ? void 0 : e.current;
  }
  get container() {
    return D(this, qt);
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
    return x(
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
      ref: D(this, le),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!D(this, qt)) {
      const s = f(e.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = f("<div>").addClass("pick-container").appendTo(s)), K(this, qt, i[0]);
    }
    return D(this, qt);
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
      D(this, kt) && (D(this, kt).call(this), K(this, kt, void 0));
      return;
    }
    D(this, kt) || K(this, kt, Nr(s, e, () => {
      const { placement: o, width: a } = i;
      Fn(s, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Rn() : null, os(), Wn(1)].filter(Boolean)
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
    const e = D(this, kt);
    e && (e(), K(this, kt, void 0)), K(this, qt, void 0), K(this, le, void 0), f(`#pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(e) {
    return gh(this._render(e), this._getContainer(e));
  }
}
le = new WeakMap(), kt = new WeakMap(), qt = new WeakMap();
var Ya = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, jt = (n, t, e) => (Ya(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Xn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ve = (n, t, e, s) => (Ya(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), js, vt, qe;
let ht = class extends H {
  constructor(t) {
    super(t), Xn(this, js, void 0), Xn(this, vt, 0), Xn(this, qe, B()), this.toggle = async (e, s) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      jt(this, vt) && (clearTimeout(jt(this, vt)), ve(this, vt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await sn(200, (a) => {
        ve(this, vt, a);
      }), ve(this, vt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await sn(50, (a) => {
        ve(this, vt, a);
      }), ve(this, vt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1
    }, ve(this, js, t.id ?? `_pick${Bt()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return jt(this, js);
  }
  get pop() {
    return jt(this, qe).current;
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
      state: e,
      className: t.className,
      style: t.style,
      name: t.name,
      tagName: t.tagName,
      attrs: t.attrs,
      disabled: t.disabled,
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
  setValue(t) {
    if (!this.props.disabled)
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
    (e = this.props.beforeDestroy) == null || e.call(this), jt(this, vt) && clearTimeout(jt(this, vt));
    const t = jt(this, qe).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ u(o, { ref: jt(this, qe), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ u(Le, { children: [
      /* @__PURE__ */ u(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
js = /* @__PURE__ */ new WeakMap();
vt = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
ht.Trigger = Cr;
ht.Pop = qa;
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
let Xa = class extends ht {
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
    }, s.style), s.className = x("color-picker", s.className, { disabled: t.disabled }), s;
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
Xa.defaultProps = {
  ...ht.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Za extends O {
}
Za.NAME = "ColorPicker";
Za.Component = Xa;
const ls = 24 * 60 * 60 * 1e3, G = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), hd = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(G(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, Ns = (n, t = /* @__PURE__ */ new Date()) => G(n).toDateString() === G(t).toDateString(), wi = (n, t = /* @__PURE__ */ new Date()) => G(n).getFullYear() === G(t).getFullYear(), Ja = (n, t = /* @__PURE__ */ new Date()) => (n = G(n), t = G(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), nf = (n, t = /* @__PURE__ */ new Date()) => {
  n = G(n), t = G(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, rf = (n, t) => Ns(G(t), n), of = (n, t) => Ns(G(t).getTime() - ls, n), af = (n, t) => Ns(G(t).getTime() + ls, n), nt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", wi(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, lf = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = nt(n, wi(n) ? s.month : s.full);
  if (Ns(n, t))
    return i;
  const r = nt(t, wi(n, t) ? Ja(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var fs, ps;
class Qa extends H {
  constructor() {
    super(...arguments);
    j(this, fs, B());
    j(this, ps, (e, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    f(D(this, fs).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: s = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += s)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ u("div", { className: "time-picker-menu row", ref: D(this, fs), children: [
      /* @__PURE__ */ u(
        et,
        {
          className: l,
          items: o,
          onClickItem: D(this, ps).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ u(
        et,
        {
          className: l,
          items: a,
          onClickItem: D(this, ps).bind(this, "minute")
        }
      )
    ] });
  }
}
fs = new WeakMap(), ps = new WeakMap();
var dd = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ls = (n, t, e) => (dd(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Rs = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ci, ki, xi, Si;
const vo = (n) => {
  if (!n)
    return;
  const t = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let tl = class extends ht {
  constructor(t) {
    super(t), Rs(this, Ci, () => {
      this.toggle(!0);
    }), Rs(this, ki, (s) => {
      this.setTime(s.target.value);
    }), Rs(this, xi, (s, i) => {
      this.setTime({ [s]: i });
    }), Rs(this, Si, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = nt(/* @__PURE__ */ new Date(), t.format));
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
    const s = vo(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? nt(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(e);
    });
  }
  getTime() {
    const t = vo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: Ls(this, Si), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-time" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: Ls(this, Ci), onChange: Ls(this, ki) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
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
    return /* @__PURE__ */ u(Qa, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: Ls(this, xi) });
  }
};
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
tl.defaultProps = {
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
const ud = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * ls;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, wo = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => nt(e, t)));
var yn;
class fd extends H {
  constructor() {
    super(...arguments);
    j(this, yn, (e) => {
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
    for (let S = 0; S < 7; S++) {
      const E = (i + S) % 7;
      h.push(/* @__PURE__ */ u("div", { className: x("col mini-calendar-day", { "is-weekend": E === 0 || E === 6 }), children: /* @__PURE__ */ u("div", { children: r ? r[E] : E }) }, S));
    }
    const { startTime: p, days: m, firstDay: _ } = ud(a, l, i), y = _ + m * ls;
    let b = p;
    const v = [], w = "yyyy-MM-dd", k = wo(c, w), C = wo(d, w);
    for (; b <= y; ) {
      const S = [];
      for (let E = 0; E < 7; E++) {
        const I = new Date(b), A = I.getDate(), N = nt(I, w), P = I.getDay(), F = Ja(I, _), V = x("col mini-calendar-day", {
          active: k.has(N),
          selected: C.has(N),
          "is-first": A === 1,
          "is-in-month": F,
          "is-out-month": !F,
          "is-today": Ns(I, s),
          "is-weekend": P === 0 || P === 6
        });
        S.push(
          /* @__PURE__ */ u("div", { className: V, "data-date": N, children: /* @__PURE__ */ u("a", { className: g, onClick: D(this, yn), children: A === 1 && o ? o[I.getMonth()] : I.getDate() }) }, N)
        ), b += ls;
      }
      v.push(/* @__PURE__ */ u("div", { className: "row", children: S }, b));
    }
    return /* @__PURE__ */ u("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ u("div", { className: "row", children: h }),
      v
    ] });
  }
}
yn = new WeakMap();
var ms, bn;
class Co extends H {
  constructor() {
    super(...arguments);
    j(this, ms, B());
    j(this, bn, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = f(e.target).closest("[data-value]").dataset("value");
      r && (s(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    f(D(this, ms).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: s, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ u(st, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: D(this, bn), children: c }, c));
    return /* @__PURE__ */ u("div", { className: s, ref: D(this, ms), children: a });
  }
}
ms = new WeakMap(), bn = new WeakMap();
var Ee, gs, _s, ys, bs, vs, vn, sl, wn, nl;
class el extends H {
  constructor(e) {
    super(e);
    j(this, vn);
    j(this, wn);
    j(this, Ee, void 0);
    j(this, gs, void 0);
    j(this, _s, void 0);
    j(this, ys, void 0);
    j(this, bs, void 0);
    j(this, vs, void 0);
    K(this, Ee, B()), K(this, gs, (r) => {
      const o = f(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), K(this, _s, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), K(this, ys, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), K(this, bs, (r) => {
      this.setState({ year: r, select: "day" });
    }), K(this, vs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = hd(l, r.substring(5).replace("+", ""))), r = nt(l, "yyyy-MM-dd");
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
    f(D(this, Ee).current).find(".active").scrollIntoView();
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
    return /* @__PURE__ */ u("div", { className: "date-picker-menu row", ref: D(this, Ee), onClick: D(this, gs), children: [
      jn(this, vn, sl).call(this, e),
      /* @__PURE__ */ u("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ u("div", { className: "row p-2", children: [
          /* @__PURE__ */ u(st, { type: g === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: tt(r, d) }),
          /* @__PURE__ */ u(st, { type: g === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ u("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ u(st, { type: "ghost", size: "sm", square: !0, onClick: D(this, _s), children: /* @__PURE__ */ u("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ u(st, { type: "ghost", size: "sm", square: !0, onClick: D(this, ys), children: /* @__PURE__ */ u("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ u(
          fd,
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
          Co,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: m.getFullYear(),
            max: _.getFullYear(),
            onChange: D(this, bs)
          }
        ) : g === "month" ? /* @__PURE__ */ u(
          Co,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: D(this, vs)
          }
        ) : null,
        p ? jn(this, wn, nl).call(this, e) : null
      ] })
    ] });
  }
}
Ee = new WeakMap(), gs = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), bs = new WeakMap(), vs = new WeakMap(), vn = new WeakSet(), sl = function(e) {
  let { menu: s } = e;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ u(et, { ...s })) : null;
}, wn = new WeakSet(), nl = function(e) {
  let { actions: s } = e;
  const { todayText: i, clearText: r } = e;
  return s || (s = [{ text: i, "data-set-date": nt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ u("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ u(at, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ u(st, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var pd = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Zn = (n, t, e) => (pd(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Jn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, $i, Ti, Ni;
let il = class extends ht {
  constructor(t) {
    super(t), Jn(this, $i, () => {
      this.toggle(!0);
    }), Jn(this, Ti, (s) => {
      this.setDate(s.target.value);
    }), Jn(this, Ni, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = G(s), d = !s || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : nt(c, l) }, () => {
        !d && i && i(s), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = nt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ u("button", { type: "button", className: "btn size-sm square ghost", onClick: Zn(this, Ni), children: /* @__PURE__ */ u("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ u("i", { class: "i-calendar" }) : h = /* @__PURE__ */ u(q, { icon: i })), [
      /* @__PURE__ */ u("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: Zn(this, $i), onChange: Zn(this, Ti) }, "input"),
      h ? /* @__PURE__ */ u("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
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
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = Q.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: g, required: p } = t;
    return /* @__PURE__ */ u(
      el,
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
$i = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
il.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class rl extends O {
}
rl.NAME = "TimePicker";
rl.Component = tl;
class ol extends O {
}
ol.NAME = "DatePicker";
ol.Component = il;
class md extends H {
  render(t) {
    const { date: e, time: s } = t;
    return /* @__PURE__ */ u("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ u(el, { ...e }),
      /* @__PURE__ */ u("div", { className: "divider" }),
      /* @__PURE__ */ u(Qa, { ...s })
    ] });
  }
}
var gd = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, ze = (n, t, e) => (gd(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ue = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Mi, Ei, Ii, Ai, Di;
const ko = (n) => {
  if (!n)
    return;
  const t = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let al = class extends ht {
  constructor(t) {
    super(t), Ue(this, Mi, () => {
      this.toggle(!0);
    }), Ue(this, Ei, (o) => {
      this.setDate(o.target.value);
    }), Ue(this, Ii, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), Ue(this, Ai, (o, a) => {
      this.setTime({ [o]: a });
    }), Ue(this, Di, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: g } = this.props;
      if (h)
        return;
      const p = G(o), m = !o || Number.isNaN(p.getDay()), _ = nt(p, d), [, y = "00:00"] = this.state.value.split(g);
      this.setState({ value: m ? c ? l : "" : `${_}${g}${y}` }, () => {
        !m && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: s, timeFormat: i, joiner: r } = t;
    e && (this.state.value = nt(e === "today" ? /* @__PURE__ */ new Date() : e, `${s}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: s, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, g = "00:00"] = this.state.value.split(o), [p, m] = g.split(":"), { hour: _ = +p, minute: y = +m } = t;
      c = `${_}:${y}`;
    }
    const d = ko(c), h = this.state.value.split(o)[0] || nt(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${nt(d, r)}` : s ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = ko(this.state.value);
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
        onClick: ze(this, Ii),
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
          onFocus: ze(this, Mi),
          onChange: (g) => {
            ze(this, Ei).call(this, g), ze(this, Di).call(this, g);
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
        onChange: ze(this, Ai)
      }
    };
    return /* @__PURE__ */ u(md, { ...b });
  }
};
Mi = /* @__PURE__ */ new WeakMap();
Ei = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
al.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class ll extends O {
}
ll.NAME = "DatetimePicker";
ll.Component = al;
const xo = "show", So = "in", _d = '[data-dismiss="modal"]', Qn = "modal-hide", We = class ke extends lt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(_d) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
      ke.getAll().some((t) => t.shown) || f("html").enableScroll();
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
      return s.removeClass(Qn).css("z-index", `${ke.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [Qn]: !1
    }, xo, o).css({
      zIndex: `${ke.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthersOnShow && this.options.hideOthersOnShow !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !s.closest(c.element).length && c.hideForOther();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      s.addClass(So), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    f(this.modalElement).addClass(Qn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, f(this.modalElement).removeClass(So), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(xo), this.emit("hidden");
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
    (e = ke.query(t, void 0, (s) => s.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = ke.query(t, void 0, (s) => !s.shown)) == null || e.show();
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
let cs = We;
f(window).on(`resize.${cs.NAMESPACE}`, () => {
  cs.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class cl extends H {
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
    return gt(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ u("div", { className: x("modal-header", e), children: /* @__PURE__ */ u("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : gt(t) ? t : /* @__PURE__ */ u("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ u(at, { ...t }) : null,
      e ? /* @__PURE__ */ u("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ u("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? gt(t) ? t : /* @__PURE__ */ u("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return gt(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ u("div", { className: x("modal-footer", e), children: s ? /* @__PURE__ */ u(at, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ u("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ u("div", { className: x("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
cl.defaultProps = { closeBtn: !0 };
class hl extends H {
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
hl.defaultProps = {
  watchHeight: !0
};
var Mr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, bt = (n, t, e) => (Mr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ve = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, we = (n, t, e, s) => (Mr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Ks = (n, t, e) => (Mr(n, t, "access private method"), e), It, Ye, At, dn, Er, Gs, Pi;
function yd(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function bd(n, t) {
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
    body: e === "html" ? /* @__PURE__ */ u(fe, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function vd(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ u(hl, { url: e, watchHeight: !o })
  };
}
const wd = {
  custom: yd,
  ajax: bd,
  iframe: vd
}, ti = "loading", dl = class xe extends cs {
  constructor() {
    super(...arguments), Ve(this, dn), Ve(this, Gs), Ve(this, It, void 0), Ve(this, Ye, void 0), Ve(this, At, void 0);
  }
  get id() {
    return bt(this, Ye);
  }
  get loading() {
    var t;
    return (t = bt(this, It)) == null ? void 0 : t.classList.contains(ti);
  }
  get shown() {
    var t;
    return !!((t = bt(this, It)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = bt(this, It);
    if (!t) {
      const { options: e } = this;
      let s = bt(this, Ye);
      s || (s = e.id || `modal-${Bt()}`, we(this, Ye, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], !t) {
        const r = this.key;
        t = f("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      we(this, It, t);
    }
    return t;
  }
  get $emitter() {
    const t = bt(this, It);
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
    const t = bt(this, It);
    t && (f(t).removeData(this.constructor.KEY).remove(), we(this, It, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    bt(this, At) && clearTimeout(bt(this, At));
    const { modalElement: t, options: e } = this, s = f(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = wd[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", o).addClass(ti), r && we(this, At, window.setTimeout(() => {
      we(this, At, 0), Ks(this, Gs, Pi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Ks(this, Gs, Pi).call(this, this.options.failedTip) : l && typeof l == "object" && await Ks(this, dn, Er).call(this, l), bt(this, At) && (clearTimeout(bt(this, At)), we(this, At, 0)), this.layout(), await sn(100), s.removeClass(ti), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = xe.ensure(s, r), a = `${xe.NAMESPACE}.open${Bt()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let g = typeof s == "object" && s.html ? /* @__PURE__ */ u("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ u("div", { children: s });
    i ? g = /* @__PURE__ */ u("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ u("div", { className: `icon ${i} ${r}` }),
      g
    ] }) : g = /* @__PURE__ */ u("div", { className: x("modal-body", h.bodyClass), children: g });
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
        const v = xe.query(b.target, c);
        m = y.key, (a == null ? void 0 : a(y, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await xe.open({
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
    return await xe.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
It = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
dn = /* @__PURE__ */ new WeakSet();
Er = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return f(this.modalElement).html(n[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, rs(
      /* @__PURE__ */ u(cl, { ...n }),
      this.modalElement
    );
  });
};
Gs = /* @__PURE__ */ new WeakSet();
Pi = function(n) {
  if (n)
    return Ks(this, dn, Er).call(this, {
      body: /* @__PURE__ */ u("div", { className: "modal-load-failed", children: n })
    });
};
dl.DEFAULT = {
  ...cs.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Cd = dl;
const kd = '[data-toggle="modal"]';
class Li extends lt {
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
      e = cs.ensure(s, t);
    } else
      e = Cd.ensure(this.container, t);
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
Li.NAME = "ModalTrigger";
f(document).on(`click${Li.NAMESPACE}`, kd, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = Li.ensure(t);
    e && (e.show(), n.preventDefault());
  }
});
let Ir = class extends Mt {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
};
Ir.NAME = "nav";
Ir.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class ul extends O {
}
ul.NAME = "Nav";
ul.Component = Ir;
function hs(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function xd({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = hs(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : tt(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : tt(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ u(st, { type: e, ...a });
}
function Sd({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = hs(i, e);
  return s = typeof s == "function" ? s(a) : tt(s, a), /* @__PURE__ */ u(U, { ...o, children: [
    r,
    s
  ] });
}
function $d({
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
      const m = hs(s, p);
      i && (o.url = typeof i == "function" ? i(m) : tt(i, m)), g.push(/* @__PURE__ */ u(st, { type: t, ...o }));
    }
    return g;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let Td = class extends H {
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
    let _ = /* @__PURE__ */ u(R, { content: r }, "content");
    (g || i) && (_ = /* @__PURE__ */ u("div", { className: g, children: _ }, "content"));
    const y = [], b = l ? /* @__PURE__ */ u("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ u("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ u("div", { className: d, children: [
      i ? /* @__PURE__ */ u("div", { className: h, children: i }) : null,
      b
    ] }, "heading")) : y.push(b), y.push(_), c && y.push(/* @__PURE__ */ u("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), m ? y : /* @__PURE__ */ u("div", { id: e, className: x("popover", a, { popup: s }), style: o, children: y });
  }
};
class Ar extends O {
}
Ar.NAME = "PopoverPanel";
Ar.Component = Td;
const Nd = '[data-toggle="popover"]', $o = "show", To = "in";
class _t extends lt {
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
        this.setOptions(o.dataset()), this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
        this.shown || this.setOptions(o.dataset()), this.toggle({ event: l }), l.preventDefault();
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
    if (r.addClass($o), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || f(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(To), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && f(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o } = this.options, a = f(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(To), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || f(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), f(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass($o), (e || t) && this._resetTimer(() => {
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
    s || (this._layoutWatcher = Nr(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && f(e).css({ width: f(t).width() }), Fn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        if (t instanceof HTMLElement && Re(t)) {
          this.hide(!0);
          return;
        }
        const g = f(e).css({
          position: h,
          left: a,
          top: l
        }), p = d.split("-")[0], m = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], _ = c.arrow;
        _ && g.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${o}-arrow arrow-${m}`), r === !0 && g.attr("class", `${g.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${m}`), this._virtual || f(this._triggerElement).attr("data-popover-placement", p);
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
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new Ar(e, s), r.on("inited", () => this.layout())), this._panel = r;
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, shift: r, offset: o, arrow: a, strategy: l } = this.options, c = a ? e.querySelector(".arrow") : null, d = c ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: s,
      strategy: l,
      middleware: [
        i ? Rn() : null,
        r ? os(typeof r == "object" ? r : void 0) : null,
        o || d ? Wn((o || 0) + d) : null,
        a ? vi({ element: c }) : null
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
f(document).on(`click${_t.NAMESPACE} mouseenter${_t.NAMESPACE}`, Nd, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.data(_t.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    _t.ensure(t, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const Md = '[data-toggle="dropdown"]';
class St extends _t {
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
      content: $t(Dr, this._getMenuOptions())
    } : t;
  }
}
St.NAME = "Dropdown";
St.DEFAULT = {
  ..._t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
f(document).on(`click${St.NAMESPACE} mouseenter${St.NAMESPACE}`, Md, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.data(St.KEY)) {
    const e = t.dataset() || {}, s = e.trigger || "click";
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
class Bn extends st {
  constructor() {
    super(...arguments), this._ref = B();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = f(this.triggerElement), a = St.get(this.triggerElement), l = {
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
Bn.defaultProps = {
  caret: !0
};
Object.assign(wt.ItemComponents, { dropdown: Bn });
Object.assign(at.ItemComponents, { dropdown: Bn });
class Dr extends Ct {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this.element, e = t == null ? void 0 : t.parentElement;
    !t || !e || Fn(e, t, {
      placement: this.props.placement,
      middleware: [Rn(), os(), Wn(1)]
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
Dr.defaultProps = {
  ...Ct.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Dr.inheritNestedProps = [...Ct.inheritNestedProps, "popup"];
function Ed({
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
  return o.text = typeof a == "function" ? a(t) : tt(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ u(Bn, { type: "dropdown", dropdown: i, ...o });
}
function Id({
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
    const y = hs(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(y) : tt(l, y));
  }, m = hs(i, t || 0);
  return d.url = typeof l == "function" ? l(m) : tt(l, m), /* @__PURE__ */ u("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ u("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: g }),
    /* @__PURE__ */ u(st, { type: s, ...d, onClick: p })
  ] });
}
let zn = class extends at {
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
zn.NAME = "pager";
zn.ItemComponents = {
  ...at.ItemComponents,
  info: Sd,
  link: xd,
  nav: $d,
  "size-menu": Ed,
  goto: Id
};
zn.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class fl extends O {
}
fl.NAME = "Pager";
fl.Component = zn;
class pl extends O {
}
pl.NAME = "Pick";
pl.Component = ht;
var Ie, ws;
class ml extends H {
  constructor(e) {
    super(e);
    j(this, Ie, void 0);
    j(this, ws, void 0);
    this._searchInput = B(), this._measure = B(), this._changeTimer = 0, K(this, Ie, (s) => {
      const i = s.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), s.stopPropagation();
    }), K(this, ws, (s) => {
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
    return r ? l = /* @__PURE__ */ u("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ u("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: D(this, ws), children: /* @__PURE__ */ u("span", { className: "close" }) }) : l = /* @__PURE__ */ u("span", { className: "magnifier" }), /* @__PURE__ */ u("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ u(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          autoComplete: "off",
          onChange: D(this, Ie),
          onInput: D(this, Ie),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ie = new WeakMap(), ws = new WeakMap();
class Ad extends Cr {
  constructor() {
    super(...arguments), this._search = B(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ u("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ u("span", { className: "text", children: /* @__PURE__ */ u(R, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ u("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ u("span", { className: "close" }) })
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
    const { state: { search: e }, searchHint: s } = t;
    return /* @__PURE__ */ u(
      ml,
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
    const { name: e, state: { value: s = "" }, disabled: i, id: r, valueList: o, emptyValue: a } = t;
    if (e)
      if (this.hasInput)
        f(`#${r}`).val(s);
      else {
        const l = o.length ? o : [a];
        return /* @__PURE__ */ u("select", { id: r, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, style: { display: "none" }, children: l.map((c) => /* @__PURE__ */ u("option", { value: c, children: c }, c)) });
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
      this._skipTriggerChange !== s.value && a.trigger("change", _i), this._skipTriggerChange = !1;
    }
  }
}
class Dd extends Cr {
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
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ u(
      ml,
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
    const { children: e, state: { selections: s = [], open: i }, placeholder: r, search: o, disabled: a, clearable: l } = t, [c] = s, d = i && o;
    let h;
    if (d)
      h = this._renderSearch(t);
    else if (c) {
      const { text: m } = c;
      h = /* @__PURE__ */ u("span", { className: "picker-single-selection", title: typeof m == "string" ? m : void 0, children: /* @__PURE__ */ u(R, { content: m }) }, "main");
    } else
      h = /* @__PURE__ */ u("span", { className: "picker-select-placeholder", children: r }, "main");
    const g = l && !d ? /* @__PURE__ */ u("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ u("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      g,
      d ? null : /* @__PURE__ */ u("span", { className: "caret" }, "caret")
    ];
  }
}
let be = class extends et {
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
be.NAME = "tree";
be.defaultProps = {
  ...et.defaultProps,
  indent: 12
};
be.defaultItemProps = {
  ...et.defaultItemProps,
  innerComponent: "div"
};
be.inheritNestedProps = [...et.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let Ms = class extends Ct {
  _getItem(t, e, s) {
    return be.getTreeItem(t, super._getItem(t, e, s));
  }
};
Ms.NAME = "tree";
Ms.inheritNestedProps = [...Ct.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
Ms.defaultItemProps = {
  ...Ct.defaultProps,
  innerComponent: "div"
};
function gl(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && gl(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class Pd extends qa {
  constructor() {
    super(...arguments), this._menu = B(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
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
          const h = [...gl(t.items).values()].filter((g) => !g.items && !this._disabledSet.has(g.value)).map((g) => g.value);
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
    return x(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: s, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return W({
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
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ u(Ms, { hover: !0, ...s }) : /* @__PURE__ */ u(Ct, { ...s });
  }
}
function qs(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && qs(s.items, e), e.set(String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let Pr = class extends ht {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = B(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
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
        const r = qs(i);
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
    else if (await sn(s || 500), this._abort !== t || (r = await $n(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = qs(r);
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
      ref: this._trigger,
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
    return t.Trigger || (t.multiple ? Ad : Dd);
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
    if (this.props.disabled)
      return Promise.resolve(this.state);
    let s = this.formatValueList(t);
    if (s.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = qs(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    if (e) {
      const r = this._trigger.current;
      r && (r._skipTriggerChange = i);
    }
    return this.changeState({ value: i });
  }
};
Pr.defaultProps = {
  ...ht.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0
};
Pr.Pop = Pd;
class _l extends O {
}
_l.NAME = "Picker";
_l.Component = Pr;
class yl extends lt {
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
    return i && s.middleware.push(Rn()), r && s.middleware.push(r === !0 ? os() : os(r)), o && s.middleware.push(vi({ element: this.$arrow[0] })), a && s.middleware.push(Wn(a)), s;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = Nr(t, e, () => {
      Fn(t, e, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !vi || !o.arrow)
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
yl.NAME = "Popovers";
yl.DEFAULT = {
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
class bl extends O {
}
bl.NAME = "SearchBox";
bl.Component = fr;
function ei(n, t) {
  const [e, s] = Mn(n);
  return s === "%" ? t * e / 100 : e;
}
const No = "is-sidebar-resizing", si = "has-sidebar-animation";
class vl extends lt {
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
      gutterWidth: a = Mn(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: g,
      minWidth: p = 0,
      maxWidth: m = Number.MAX_SAFE_INTEGER,
      parent: _
    } = this.options, y = _ ? f(_) : e;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = ei(g || t.width(), i), this._minWidth = ei(p, i), this._maxWidth = ei(m, i), this._width = (r ? Ot.get(this._storeID) : null) || this._defaultWidth, this._parent = y[0], y.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let b = t.find(".sidebar-gutter");
    b.length || (b = f('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = b, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (b.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), b.on("click", ".gutter-toggle", () => this.toggle())), c && b.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new xs(b, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, y.addClass(No).removeClass(si);
      },
      onMove: (v, w) => {
        Math.abs(w.deltaX) < 10 || this.update(this._startWidth + w.deltaX);
      },
      onMoveEnd: () => {
        d && y.addClass(si), y.removeClass(No);
      }
    })), d && (this._raf = requestAnimationFrame(() => {
      y.addClass(si);
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
    this.$element.toggleClass("is-collapsed", s), f(this._parent).css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", s);
  }
}
vl.NAME = "Sidebar";
vl.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class wl extends O {
}
wl.NAME = "Toolbar";
wl.Component = at;
ne(xh);
const Ld = '[data-toggle="tooltip"]';
class Rt extends _t {
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
  ..._t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
f(document).on(`click${Rt.NAMESPACE} mouseenter${Rt.NAMESPACE}`, Ld, (n) => {
  const t = f(n.currentTarget);
  if (t.length && !t.data(Rt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Rt.ensure(t, { show: Rt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
class Lr extends O {
}
Lr.NAME = "Tree";
Lr.Component = be;
Lr.replace = be.TAG;
class Cl extends O {
}
Cl.NAME = "SearchTree";
Cl.Component = Ms;
class Rr extends lt {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Zc(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
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
      return new Rt(r, { title: e }), r;
    }
    return f("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Rt(r, { title: e })), r;
    }
    return f("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return f(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return f(`<span class="file-size text-gray">${Xc(t)}</span>`);
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
Rr.NAME = "Upload";
Rr.DEFAULT = {
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
class kl extends Rr {
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
kl.NAME = "UploadImgs";
kl.DEFAULT = {
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
let xl = class extends U {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: s,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ u("div", { className: x("card-content", r), children: [
          e ? /* @__PURE__ */ u("div", { className: x("card-subtitle", s), children: /* @__PURE__ */ u(R, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ u(R, { content: i }, "extraContent") : null
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
    return /* @__PURE__ */ u("div", { className: x("card-heading", g), children: [
      e ? /* @__PURE__ */ u(q, { className: "card-icon", icon: e }, "icon") : null,
      s ? /* @__PURE__ */ u(R, { className: x("card-prefix", i), content: s }, "prefix") : null,
      r ? /* @__PURE__ */ u(p, { className: x("card-title", o), href: a, ...l, children: /* @__PURE__ */ u(R, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ u(R, { className: x("card-suffix", d), content: c }, "suffix") : null,
      h ? /* @__PURE__ */ u(R, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: s
    } = t;
    if (e)
      return /* @__PURE__ */ u("div", { className: x("card-header", s), children: /* @__PURE__ */ u(R, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: s,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ u("div", { className: x("card-footer", s), children: [
        /* @__PURE__ */ u(R, { content: e }, "footer"),
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
    const s = W({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ u(Mt, { ...s });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const s = typeof e == "function" ? e.call(this, t) : e;
      if (s)
        return s.className = x("item-avatar", s.className), /* @__PURE__ */ u(Cs, { ...s }, "avatar");
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
class Mo extends xl {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: s, innerComponent: i = "div" } = t, r = W({ className: x("card", s) }, e);
    return /* @__PURE__ */ u(i, { ...r, children: super._getChildren(t) });
  }
}
let Oe = class extends Mt {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: s } = t;
    return W({
      style: {
        "--list-gap": e ? Jt(e) : void 0,
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
  default: Mo,
  item: Mo
};
Oe.defaultItemProps = {
  component: "div"
};
class Wr extends O {
}
Wr.NAME = "Card";
Wr.Component = xl;
Wr.replace = !0;
class Sl extends O {
}
Sl.NAME = "CardList";
Sl.Component = Oe;
class Or extends St {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Or.NAME = "ContextMenu";
Or.DEFAULT = {
  ...St.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function Rd(n) {
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
        f.isPlainObject(l) && l.html ? /* @__PURE__ */ u(fe, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ u("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const ni = ([n, t, e, s], [i, r, o, a]) => !(n + e <= i || i + o <= n || t + s <= r || r + a <= t), Eo = (n, t) => n[1] === t[1] ? n[0] - t[0] : n[1] - t[1], Ws = "Dashboard:Block.cache:";
let $l = class extends H {
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
      Or.show({
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
        typeof s == "string" ? Ot.set(`${Ws}${s}:${t}`, e) : Ot.session.set(`${Ws}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? Ot.get(`${Ws}${e}:${t}`) : Ot.session.get(`${Ws}${t}`);
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
      t.sort((l, c) => Eo(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && s && i.set(e, s), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => Eo(a[1], l[1]));
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
    this._draggable = new Pn(t, {
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
    if (s && ni(t, s))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && ni(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: s } = this.state;
    for (s && ni(e, s) && (e[1] = s[1] + s[3]); !this._canPlace(e); )
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
              Rd,
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
$l.defaultProps = {
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
class Tl extends O {
}
Tl.NAME = "Dashboard";
Tl.Component = $l;
var Yt, Xt;
class Io extends H {
  constructor(e) {
    super(e);
    j(this, Yt, void 0);
    j(this, Xt, void 0);
    K(this, Yt, 0), K(this, Xt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (D(this, Yt) && cancelAnimationFrame(D(this, Yt)), K(this, Yt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), K(this, Yt, 0);
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
    e && (K(this, Xt, typeof e == "string" ? document : e.current), D(this, Xt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), D(this, Xt) && D(this, Xt).removeEventListener("wheel", this._handleWheel);
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
        className: x("scrollbar", r, {
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
Yt = new WeakMap(), Xt = new WeakMap();
const un = /* @__PURE__ */ new Map(), fn = [];
function Nl(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && un.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  un.set(e, n), t != null && t.buildIn && !fn.includes(e) && fn.push(e);
}
function rt(n, t) {
  Nl(n, t);
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
function Ml(n) {
  return un.delete(n);
}
function Wd(n) {
  if (typeof n == "string") {
    const t = un.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function El(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Wd(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && El(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Od(n = [], t = !0) {
  return t && fn.length && n.unshift(...fn), n != null && n.length ? El([], n, /* @__PURE__ */ new Set()) : [];
}
function Il() {
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
function Hd(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function Ao(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function ii(n, t = !1) {
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
function Fd(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (v) => (typeof v == "function" && (v = v.call(n)), v = Ao(v, 0), v < 1 && (v = Math.round(v * s)), v), d = {
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
    const { colTypes: w, onAddCol: k } = v;
    w && Object.entries(w).forEach(([C, S]) => {
      b[C] || (b[C] = []), b[C].push(S);
    }), k && y.push(k);
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
    }, S = {
      name: k,
      type: w,
      setting: C,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, E = b[w];
    E && E.forEach((M) => {
      const Y = typeof M == "function" ? M.call(n, C) : M;
      Y && Object.assign(C, Y, v);
    });
    const { fixed: I, flex: A, minWidth: N = r, maxWidth: P = o } = C, F = Ao(C.width || i, i);
    S.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, S.width = Hd(F < 1 ? Math.round(F * s) : F, N, P), y.forEach((M) => M.call(n, S)), p.push(S), m[S.name] = S;
    const V = I ? I === "left" ? h : g : d;
    V.list.push(S), V.totalWidth += S.width, V.width = V.totalWidth, S.flex && V.flexList.push(S), typeof C.order == "number" && (_ = !0);
  }), _) {
    const v = (w, k) => (w.setting.order ?? 0) - (k.setting.order ?? 0);
    p.sort(v), h.list.sort(v), d.list.sort(v), g.list.sort(v);
  }
  return ii(h, !0), ii(g, !0), d.widthSetting = s - h.width - g.width, ii(d), {
    list: p,
    map: m,
    left: h,
    center: d,
    right: g
  };
}
function Bd(n) {
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
  }], w = ["dtable-cell-content", t.setting.cellClass], k = (V = i.data) == null ? void 0 : V[t.name], C = [l ?? k ?? ""], S = r ? r(C, { row: i, col: t, value: k }, n, $t) : C, E = [], I = [], A = {}, N = {};
  let P = "div";
  S == null || S.forEach((M) => {
    if (typeof M == "object" && M && !gt(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const Y = M.outer ? E : I;
      M.html ? Y.push(/* @__PURE__ */ u("div", { className: x("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? m : b, M.style), M.className && (M.outer ? v : w).push(M.className), M.children && Y.push(M.children), M.attrs && Object.assign(M.outer ? A : N, M.attrs)), M.tagName && !M.outer && (P = M.tagName);
    } else
      I.push(M);
  });
  const F = P;
  return /* @__PURE__ */ u(
    "div",
    {
      className: x(v),
      style: m,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...p,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ u(F, { className: x(w), style: b, ...N, children: I }),
        E
      ]
    }
  );
}
function ri({
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
  CellComponent: d = Bd,
  onRenderCell: h
}) {
  var _;
  const g = Array.isArray(n) ? n : [n], p = ((_ = g[0]) == null ? void 0 : _.top) ?? 0, m = g.length;
  return /* @__PURE__ */ u(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ u("div", { className: "dtable-cells-container", style: { left: -s, top: -i + p }, children: g.reduce((y, b, v) => {
        const w = t.length;
        return t.forEach((k, C) => {
          y.push(
            /* @__PURE__ */ u(
              d,
              {
                className: x(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  C ? "" : "is-first-in-row",
                  C === w - 1 ? "is-last-in-row" : "",
                  v ? "" : "is-first-row",
                  v === m - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: b,
                top: b.top - p,
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
function Al({
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
    ri,
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
    ri,
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
    ri,
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
      className: x("dtable-block", c),
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
var Hr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, T = (n, t, e) => (Hr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), L = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, X = (n, t, e, s) => (Hr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), dt = (n, t, e) => (Hr(n, t, "access private method"), e), Se, Xe, de, Wt, oe, ot, Pt, Dt, Ze, Ys, pn, ds, Kt, Je, Qe, Ri, Dl, Wi, Pl, Oi, Ll, Hi, Rl, Xs, Fi, Un, mn, Bi, zi, Ui, Vi, ts, Zs, gn, Fr, Br, Wl, ji, Ol;
let zr = class extends H {
  constructor(t) {
    super(t), L(this, Ri), L(this, Wi), L(this, Oi), L(this, Hi), L(this, Xs), L(this, ts), L(this, gn), L(this, Br), L(this, ji), this.ref = B(), L(this, Se, 0), L(this, Xe, void 0), L(this, de, !1), L(this, Wt, void 0), L(this, oe, void 0), L(this, ot, []), L(this, Pt, void 0), L(this, Dt, /* @__PURE__ */ new Map()), L(this, Ze, {}), L(this, Ys, void 0), L(this, pn, []), L(this, ds, { in: !1 }), this.updateLayout = () => {
      T(this, Se) && cancelAnimationFrame(T(this, Se)), X(this, Se, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), X(this, Se, 0);
      }));
    }, L(this, Kt, (e, s) => {
      s = s || e.type;
      const i = T(this, Dt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, Je, (e) => {
      T(this, Kt).call(this, e, `window_${e.type}`);
    }), L(this, Qe, (e) => {
      T(this, Kt).call(this, e, `document_${e.type}`);
    }), L(this, Un, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return T(this, ot).forEach((c) => {
        c[l] && (e = c[l].call(this, e, s, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, s, i, r)), a.setting[l] && (e = a.setting[l].call(this, e, s, i, r)), e;
    }), L(this, mn, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Bi, (e) => {
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
    }), L(this, zi, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), L(this, Ui, (e) => {
      const s = f(e.target).closest(".dtable-cell");
      if (!s.length)
        return dt(this, ts, Zs).call(this, !1);
      dt(this, ts, Zs).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), L(this, Vi, () => {
      dt(this, ts, Zs).call(this, !1);
    }), X(this, Xe, t.id ?? `dtable-${Bt()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, X(this, oe, Object.freeze(Od(t.plugins))), T(this, oe).forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(T(this, Ze), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), dt(this, gn, Fr).call(this), T(this, ot).forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, Pt)) == null ? void 0 : t.options) || T(this, Wt) || Il();
  }
  get plugins() {
    return T(this, ot);
  }
  get layout() {
    return T(this, Pt);
  }
  get id() {
    return T(this, Xe);
  }
  get data() {
    return T(this, Ze);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, ds);
  }
  componentWillReceiveProps() {
    X(this, Wt, void 0);
  }
  componentDidMount() {
    T(this, de) ? this.forceUpdate() : dt(this, Xs, Fi).call(this), this.on("click", T(this, Bi)), this.on("keydown", T(this, zi));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", T(this, Ui)), this.on("mouseleave", T(this, Vi)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = new ResizeObserver(this.updateLayout);
        X(this, Ys, i);
        const { parent: r } = this;
        s.forEach((o) => {
          o !== "window" && (o === "parent" ? r && i.observe(r) : f(o).each((a, l) => i.observe(l)));
        });
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
    T(this, de) ? dt(this, Xs, Fi).call(this) : T(this, ot).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, Ys)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of T(this, Dt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), T(this, Je)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), T(this, Qe)) : t.removeEventListener(s, T(this, Kt));
    T(this, ot).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), T(this, oe).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), X(this, Ze, {}), T(this, Dt).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = T(this, Dt).get(t);
    i ? i.push(e) : (T(this, Dt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, Je)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, Qe)) : (r = this.element) == null || r.addEventListener(t, T(this, Kt)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = T(this, Dt).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (T(this, Dt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, Je)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, Qe)) : (o = this.element) == null || o.removeEventListener(t, T(this, Kt)));
  }
  emitCustomEvent(t, e) {
    T(this, Kt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
    if (!T(this, Wt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      X(this, Pt, void 0);
    else if (s === "options") {
      if (X(this, Wt, void 0), !T(this, Pt))
        return;
      X(this, Pt, void 0);
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
    return Q(T(this, pn), t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = dt(this, ji, Ol).call(this);
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
        /* @__PURE__ */ u("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ u(R, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        dt(this, Ri, Dl).call(this, t),
        dt(this, Wi, Pl).call(this, t),
        dt(this, Oi, Ll).call(this, t)
      ), t.scrollable && p.push(dt(this, Hi, Rl).call(this, t))), T(this, ot).forEach((_) => {
        var b;
        const y = (b = _.onRender) == null ? void 0 : b.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && g.push(y.className), y.children && p.push(y.children));
      });
    }
    return /* @__PURE__ */ u(
      "div",
      {
        id: T(this, Xe),
        className: x(g),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
Se = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakMap();
Wt = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
pn = /* @__PURE__ */ new WeakMap();
ds = /* @__PURE__ */ new WeakMap();
Kt = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakSet();
Dl = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ u(
      Al,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: T(this, Un),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    ka,
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
Wi = /* @__PURE__ */ new WeakSet();
Pl = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ u(
    Al,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: T(this, Un),
      children: l
    },
    "body"
  );
};
Oi = /* @__PURE__ */ new WeakSet();
Ll = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ u(
    ka,
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
Hi = /* @__PURE__ */ new WeakSet();
Rl = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = n, { scrollbarSize: h = 12, horzScrollbarPos: g } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ u(
      Io,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: T(this, mn),
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
      Io,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: T(this, mn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Xs = /* @__PURE__ */ new WeakSet();
Fi = function() {
  var n;
  X(this, de, !1), (n = this.options.afterRender) == null || n.call(this), T(this, ot).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Un = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
Bi = /* @__PURE__ */ new WeakMap();
zi = /* @__PURE__ */ new WeakMap();
Ui = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakMap();
ts = /* @__PURE__ */ new WeakSet();
Zs = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = f(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = T(this, ds);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), X(this, ds, i);
};
gn = /* @__PURE__ */ new WeakSet();
Fr = function() {
  if (T(this, Wt))
    return !1;
  const t = { ...Il(), ...T(this, oe).reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return X(this, Wt, t), X(this, ot, T(this, oe).reduce((e, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(s)), e;
  }, [])), X(this, pn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Br = /* @__PURE__ */ new WeakSet();
Wl = function() {
  var I, A;
  const { plugins: n } = this;
  let t = T(this, Wt);
  const e = {
    flex: /* @__PURE__ */ u("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ u("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((N) => {
    var F;
    const P = (F = N.beforeLayout) == null ? void 0 : F.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, N.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: N } = this;
    if (N)
      i = N.clientWidth;
    else {
      X(this, de, !0);
      return;
    }
  }
  const r = Fd(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (N, P, F) => {
    var M, Y;
    const V = { data: F ?? { [a]: N }, id: N, index: c.length, top: 0 };
    if (F || (V.lazy = !0), c.push(V), ((M = t.onAddRow) == null ? void 0 : M.call(this, V, P)) !== !1) {
      for (const mt of n)
        if (((Y = mt.onAddRow) == null ? void 0 : Y.call(this, V, P)) === !1)
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
    const N = t.onAddRows.call(this, h, r);
    N && (h = N);
  }
  for (const N of n) {
    const P = (I = N.onAddRows) == null ? void 0 : I.call(this, h, r);
    P && (h = P);
  }
  h.forEach((N, P) => {
    g[N.id] = N, N.index = P, N.top = N.index * l;
  });
  const { header: p, footer: m } = t, _ = p ? t.headerHeight || l : 0, y = m ? t.footerHeight || l : 0;
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
      v = 0, X(this, de, !0);
      return;
    }
  } else
    v = b;
  const C = v - _ - y, S = {
    options: t,
    allRows: c,
    width: i,
    height: v,
    rows: h,
    rowsMap: g,
    rowHeight: l,
    rowsHeight: C,
    rowsHeightTotal: w,
    header: p,
    footer: m,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: y,
    cols: r
  }, E = (A = t.onLayout) == null ? void 0 : A.call(this, S);
  E && Object.assign(S, E), n.forEach((N) => {
    if (N.onLayout) {
      const P = N.onLayout.call(this, S);
      P && Object.assign(S, P);
    }
  }), X(this, Pt, S);
};
ji = /* @__PURE__ */ new WeakSet();
Ol = function() {
  (dt(this, gn, Fr).call(this) || !T(this, Pt)) && dt(this, Br, Wl).call(this);
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
zr.addPlugin = Nl;
zr.removePlugin = Ml;
class Hl extends H {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ u("div", { class: x("progress", l), style: {
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
Hl.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Fl(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ u("a", { href: tt(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Ur(n, t, e) {
  var s;
  if (n != null)
    return e = e ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : tt(n, e);
}
function Bl(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), nt(e, n, s ?? e))) : s ?? e;
}
function zl(n, t) {
  const { link: e } = t.col.setting, s = Fl(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Ul(n, t) {
  const { format: e } = t.col.setting;
  return e && (n[0] = Ur(e, t, n[0])), n;
}
function Vl(n, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? n[0] = e(n[0], t) : typeof e == "object" && e && (n[0] = e[n[0]] ?? n[0]), n;
}
function jl(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = Bl(s, t, n[0], i), n;
}
function Ki(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Ur(s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const zd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return Ki(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ u(
          Hl,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ u(
          Dn,
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
    const { formatDate: e, html: s, hint: i } = t.col.setting;
    if (e && (n = jl(n, t, e)), n = Vl(n, t), n = Ul(n, t), s ? n = Ki(n, t) : n = zl(n, t), i) {
      let r = t.value;
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" ? r = tt(i, t.row.data) : typeof n[0] == "string" && (r = n[0]), n.push({ attrs: { title: r } });
    }
    return n;
  }
}, Ud = rt(zd, { buildIn: !0 }), Vd = {
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
}, jd = {
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
      ...Vd,
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
}, Kd = rt(jd, { buildIn: !0 }), Gd = {
  html: { component: fe }
}, qd = {
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
        props: { html: tt(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Gd[l], r == null ? void 0 : r[l]);
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
}, Yd = rt(qd);
function Xd(n, t, e = !1) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!s[c] === d || (d ? s[c] = !0 : delete s[c], i[c] = d);
  };
  if (n === void 0 ? (t === void 0 && (t = !Kl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function Zd(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Kl() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === n;
}
function Jd() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function Qd(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function Do(n, t, e = !1) {
  return /* @__PURE__ */ u(In, { className: "dtable-checkbox", checked: n, disabled: e });
}
const Po = 'input[type="checkbox"],.dtable-checkbox', tu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Do
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
    toggleCheckRows: Xd,
    isRowChecked: Zd,
    isAllRowChecked: Kl,
    getChecks: Jd,
    toggleCheckable: Qd
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
        /* @__PURE__ */ u("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Do(n) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ u(R, { className: "dtable-check-info", content: s.call(this, e) })];
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
    const e = t.closest(Po);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = f(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Po).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, eu = rt(tu), su = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new ks(`DTable:${this.id}`) };
  }
}, nu = rt(su);
var Gl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Gl || {});
function _n(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = _n.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? _n.call(this, t.parent).level + 1 : 0, t;
}
function iu(n) {
  return n !== void 0 ? _n.call(this, n) : this.data.nestedMap;
}
function ru(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !ql.call(this)), t) {
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
function ql() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Yl(n, t = 0, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Yl(n, t, o.children, s + 1)));
  }
  return t;
}
function Xl(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, Xl(n, r, e, s);
  }), i;
}
function Zl(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && Zl(n, r.parent, e, s, i);
}
const Os = "dtable-nested-toggle", ou = {
  name: "nested",
  plugins: [nu],
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
        const o = Xl(this, i, r, s);
        o != null && o.parent && Zl(this, o.parent, r, s, e);
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
    getNestedInfo: iu,
    toggleRow: ru,
    isAllCollapsed: ql,
    getNestedRowInfo: _n
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
    ), Yl(this.data.nestedMap), n.sort((t, e) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), n;
  },
  onRenderCell(n, { col: t, row: e }) {
    var a;
    const { id: s, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && n.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ u("a", { className: `${Os} state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
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
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ u("a", { className: `${Os} state`, children: /* @__PURE__ */ u("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${Os}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${Os}`)))
      return this.toggleRow(t), !0;
  }
}, au = rt(ou);
function oi(n, { row: t, col: e }) {
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
  if (n[0] = /* @__PURE__ */ u(Cs, { ...h }), e.type === "avatarBtn") {
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
const lu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: oi
    },
    avatarBtn: {
      onRenderCell: oi
    },
    avatarName: {
      onRenderCell: oi
    }
  }
}, cu = rt(lu, { buildIn: !0 }), hu = {
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
}, du = rt(hu, { buildIn: !0 }), ai = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === n[e - 1].setting.group || (t.setting.border = "left");
  });
}, uu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    ai(t.left.list), ai(t.center.list), ai(t.right.list);
  }
}, fu = rt(uu);
const pu = {
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
}, mu = rt(pu), gu = {
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
        for (let k = 0; k < b; k++) {
          w += l[p + k].realWidth;
          for (let C = 0; C < v; C++) {
            const S = `C${m + k}R${h + C}`;
            S !== _ && s.add(S);
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
}, _u = rt(gu), yu = {
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
}, Jl = rt(yu);
function bu() {
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
    const k = new Set((Array.isArray(l) ? l : [l]).reduce((C, S) => (S === "x" ? C.push("left", "right") : S === "y" ? C.push("top", "bottom") : C.push(S), C), []));
    (!k.has("left") && _ < 0 || !k.has("right") && _ > 0) && (_ = 0), (!k.has("top") && y < 0 || !k.has("bottom") && y > 0) && (y = 0);
  }
  const b = {};
  _ !== 0 && (b.scrollLeft = this.layout.scrollLeft + a * _), y !== 0 && (b.scrollTop = this.layout.scrollTop + a * y), this.scroll(b);
}
const vu = {
  name: "autoscroll",
  plugins: [Jl],
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
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(bu.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, wu = rt(vu);
const Cu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(n, t) {
      return this.options.nested ? this.getNestedRowInfo(n.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (n) => !!n.sortable,
  plugins: [Jl, wu],
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
      var S;
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
      return b && ((S = this.options.canSortTo) == null ? void 0 : S.call(this, _, b, w)) !== !1 ? {
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
}, ku = rt(Cu), xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Gl,
  avatar: cu,
  cellspan: _u,
  checkable: eu,
  custom: Yd,
  group: fu,
  headerGroup: mu,
  nested: au,
  renderDatetime: Bl,
  renderDatetimeCell: jl,
  renderFormat: Ur,
  renderFormatCell: Ul,
  renderHtmlCell: Ki,
  renderLink: Fl,
  renderLinkCell: zl,
  renderMapCell: Vl,
  rich: Ud,
  sort: Kd,
  sortType: du,
  sortable: ku
}, Symbol.toStringTag, { value: "Module" }));
class Es extends O {
}
Es.NAME = "DTable";
Es.Component = zr;
Es.definePlugin = rt;
Es.removePlugin = Ml;
Es.plugins = xu;
class Vr extends U {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: s,
      name: i
    } = t;
    return W(super._getProps(t), {
      style: {
        "--kanban-col-color": s,
        "--kanban-col-width": Jt(e)
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
          e ? /* @__PURE__ */ u("span", { className: x("as-prefix", s), children: /* @__PURE__ */ u(R, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ u("span", { className: x("as-title", r), children: /* @__PURE__ */ u(R, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ u("span", { className: x("as-subtitle", a), children: /* @__PURE__ */ u(R, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ u(q, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        at.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ u("div", { className: "kanban-header-sub-cols", children: h.map((g, p) => /* @__PURE__ */ u(Vr, { index: p, ...g }, g.name)) }, "subs") : null
    ];
  }
}
function Su(n) {
  const { cols: t } = n;
  return /* @__PURE__ */ u("div", { className: "kanban-header", children: [
    /* @__PURE__ */ u("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ u("div", { className: "kanban-header-cols", children: t.map((e, s) => /* @__PURE__ */ u(Vr, { index: s, ...e }, e.name)) }, "cols")
  ] });
}
class Ql extends H {
  constructor() {
    super(...arguments), this._listRef = B(), this._renderItem = (t) => {
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
      "--kanban-col-width": Jt(s)
    };
    return /* @__PURE__ */ u("div", { className: "kanban-lane-col", style: p, "z-lane": h, "z-col": d, children: [
      r ? /* @__PURE__ */ u("div", { className: x("kanban-col-content", o), children: /* @__PURE__ */ u(R, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ u("div", { className: "kanban-items scrollbar-thin scrollbar-hover", children: /* @__PURE__ */ u(
        Oe,
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
Ql.defaultProps = {
  watchSize: !0
};
class $u extends U {
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
    return W(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: Jt(e),
        minHeight: Jt(s),
        maxHeight: Jt(i)
      },
      "z-lane": o
    });
  }
  _renderCol(t, e, s, i) {
    return /* @__PURE__ */ u(Ql, { itemRender: s, lane: t, items: i[e.name], ...e }, e.name);
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
        /* @__PURE__ */ u("div", { className: x("kanban-lane-title", i), children: /* @__PURE__ */ u(R, { content: s }) }, "title"),
        at.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ u("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function Tu(n) {
  const { lanes: t, cols: e, items: s = {}, itemRender: i } = n;
  return /* @__PURE__ */ u("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ u($u, { index: o, cols: e, items: s[r.name], itemRender: i, ...r }, r.name)) });
}
const ut = 12, Nu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function Lo(n, t) {
  return t === "top" ? { x: n.x + n.width / 2, y: n.y } : t === "left" ? { x: n.x, y: n.y + n.height / 2 } : t === "right" ? { x: n.x + n.width, y: n.y + n.height / 2 } : { x: n.x + n.width / 2, y: n.y + n.height };
}
function Mu(n, t) {
  return (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y);
}
function Eu(n, t, e, s) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = s ? [s] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = Lo(n, c), g = Lo(t, d), p = Mu(h, g) * (Nu[c] === d ? 1 : 2);
      p < o && (o = p, e = c, s = d, a = h, l = g);
    });
  }), {
    fromSide: e,
    toSide: s,
    fromPos: a,
    toPos: l
  };
}
function Iu(n, t) {
  return { x: (n.x + t.x) / 2, y: (n.y + t.y) / 2 };
}
function tc(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    width: Math.abs(n.x - t.x),
    height: Math.abs(n.y - t.y)
  };
}
function Ro(n, t, e) {
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
function Au(n, t, e, s, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = tc(n, t), d = ut - o, h = ut - a;
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
    const g = Iu(n, t), p = l / 2, m = c / 2, _ = {
      ax: n.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: n.y + (e === "top" ? -m : e === "bottom" ? m : 0),
      bx: t.x + (s === "left" ? -p : s === "right" ? p : 0),
      by: t.y + (s === "top" ? -m : s === "bottom" ? m : 0)
    };
    return `M ${n.x + d} ${n.y + h} L ${_.ax + d} ${_.ay + h} L ${g.x + d} ${g.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${n.x + d} ${n.y + h} L ${t.x + d} ${t.y + h}`;
}
function Du(n) {
  const { fromRect: t, toRect: e } = n, s = `${n.from}-${n.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = Eu(i, r), d = tc(l, c), { x: h, y: g, width: p, height: m } = d;
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
    d: Au(l, c, o, a, n.shape, _)
  }, k = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, C = {
    width: p + 2 * ut,
    height: m + 2 * ut
  }, S = [];
  return n.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : n.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), y && y !== "none" && S.push(Ro(y, "start", s)), b && b !== "none" && S.push(Ro(b, "end", s)), {
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
    svgPathBackProps: k,
    svgProps: C,
    markers: S,
    padding: ut
  };
}
class ec extends H {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: s, textSize: i, color: r, onDelete: o } = t, { hover: a } = e, { x: l, y: c, padding: d, width: h, height: g, svgProps: p, markers: m, svgPathProps: _, svgPathBackProps: y, fromPos: b } = Du(t);
    return /* @__PURE__ */ u("div", { className: x("kanban-link", a ? "is-hover" : ""), style: { left: l, top: c, width: h, height: g, color: r }, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ u("svg", { ...p, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        m.length ? /* @__PURE__ */ u("defs", { children: m.map(({ path: v, id: w, ...k }) => /* @__PURE__ */ u("marker", { ...k, id: w, children: /* @__PURE__ */ u("path", { ...v }) }, w)) }) : null,
        /* @__PURE__ */ u("path", { ...y }),
        /* @__PURE__ */ u("path", { ..._ })
      ] }),
      /* @__PURE__ */ u("div", { className: "kanban-link-start-point", style: { left: b.x - d, top: b.y - d } }),
      o ? /* @__PURE__ */ u("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ u("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ u("i", { className: "close" }) }) }) : null,
      s ? /* @__PURE__ */ u("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: s }) : null
    ] });
  }
}
class Pu extends H {
  constructor() {
    super(...arguments), this._ref = B(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
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
    return this._idSet.add(s), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ u(ec, { ...t, fromRect: r, toRect: o, onDelete: this.props.onDeleteLink }, `${s}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ u("div", { className: "kanban-links", ref: this._ref, children: e.map((s) => this._renderLink(s)) });
  }
}
const Hs = ".kanban";
class Lu extends H {
  constructor() {
    super(...arguments), this._ref = B(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, e = t.closest(".kanban");
    this._kanban = e;
    const s = ".kanban-item,.kanban-link-editor-from";
    f(e).on(`mouseenter${Hs}`, s, (i) => {
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
    }).on(`mouseleave${Hs}`, s, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${Hs}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }), this._moveable = new xs(t, {
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
    t && f(t).off(Hs), this._raf && cancelAnimationFrame(this._raf);
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
      ec,
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
    ] })), r && o && (l = /* @__PURE__ */ u("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ u("div", { className: x("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
function Ru(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getCol: s, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return n = n.reduce((d, h, g) => {
    if (h = W({ itemGap: o, itemCountPerRow: r }, i, h), s) {
      const p = s.call(this, h);
      p !== !1 && (h = p || h);
    }
    return h.deleted || (typeof h.order == "number" ? a = !0 : h.order = g, typeof h.name != "string" && (h.name = String(h.name)), e == null || e.call(this, h), h.parentName !== void 0 ? (h.parentName = String(h.parentName), l.push(h)) : (c.set(h.name, h), d.push(h))), d;
  }, []), l.forEach((d) => {
    const h = c.get(d.parentName);
    h && (h.subCols = ae(h.subCols, [d], "name"));
  }), a && (n.sort(us), [...c.values()].forEach((d) => {
    d.subCols && d.subCols.sort(us);
  })), n;
}
function Wu(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getLane: s, laneProps: i } = t;
  let r = !1;
  return n = n.reduce((o, a, l) => {
    if (i && (a = W({}, i, a)), s) {
      const c = s.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.order == "number" ? r = !0 : a.order = l, a.color === void 0 && (a.color = `hsl(${43 * Sa(a.name) % 360}deg 40% 50%)`), typeof a.name != "string" && (a.name = String(a.name)), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && n.sort(us), n;
}
function Wo(n, t, e, s, i) {
  if (!(n != null && n.length))
    return [];
  const { itemProps: r, getItem: o } = s;
  let a = !1;
  return n = n.reduce((l, c) => {
    r && (c = W({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c, laneInfo: t, colInfo: e })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && n.sort(us), n;
}
function us(n, t) {
  return n.order - t.order;
}
function ae(n, t, e = "key") {
  if (!n)
    return t ? [...t] : [];
  const s = [...n];
  if (t) {
    let i = 0;
    const r = s.reduce((o, a, l) => (o.set(String(a[e]), l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
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
function sc(n, t) {
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
function Oo(n, t) {
  const { items: e, ...s } = n;
  return {
    items: sc(e, t),
    ...s
  };
}
function Gi(n, t, e) {
  const s = ae(n.lanes, t.lanes, "name"), i = ae(n.cols, t.cols, "name"), r = ae(n.links, t.links, e), o = ae(n.items, sc(t.items || [], e), e);
  return { lanes: s, cols: i, items: o, links: r };
}
let Is = class extends U {
  constructor() {
    super(...arguments), this._ref = B(), this._raf = 0, this._data = new ss(this._getData.bind(this), () => {
      const { getCol: t, colProps: e, itemCountPerRow: s, itemGap: i, getLane: r, laneProps: o, itemProps: a, getItem: l, responsive: c } = this.props;
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
        c
      ];
    }), this._kanbanData = new ss(() => {
      const { itemKey: t, props: e } = this, { data: s } = e, { data: i, changes: r } = this.state, o = (i || eo(s) ? i : Oo(s, t)) || {};
      return r ? Gi(o, r, t) : o;
    }, () => {
      const { data: t, changes: e } = this.state;
      return [
        t,
        e,
        this.props.data
      ];
    }), this._onAddLink = async (t, e) => {
      const { onAddLink: s } = this.props, i = { from: t, to: e, [this.itemKey]: `${t}:${e}` };
      await (s == null ? void 0 : s.call(this, i)) !== !1 && this.updateLink(i);
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
        const r = Oo(await $n(t, [this], { throws: !0 }), this.itemKey);
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
    t || !e || !eo(e) || e === this._loadedSetting || this.load();
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
      changes: Gi({ ...e.changes }, t, this.itemKey)
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
          const v = y.col, w = b.col, k = y.lane, C = b.lane, S = a[`${k}:${v}`] ?? a[v];
          return typeof S == "boolean" ? S : !S || S.includes(w) || S.includes(`${C}:${w}`) || S.includes(`${C}:`);
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
            const k = this.createSnap();
            r.call(this, v, y, k.restore) !== !1 && this.update(v);
          }
        }
        return (b = d.onDrop) == null ? void 0 : b.call(this, p, m, _);
      }
    };
    this._draggable = new Pn(e, g);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, s = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = s, o = {}, a = /* @__PURE__ */ new Map(), l = Ru.call(this, s.cols, e, (p) => {
      p.parentName !== void 0 && (i = !0), a.set(p.name, p);
    }), c = Wu.call(this, s.lanes, e, (p) => {
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
        m[_.name] = Wo.call(this, m[_.name], p, _, e), (y = _.subCols) == null || y.forEach((b) => {
          m[b.name] = Wo.call(this, m[b.name], p, b, e);
        });
      });
    });
    let { links: g = [] } = s;
    return g = g.reduce((p, m) => (!m.deleted && h.has(m.from) && h.has(m.to) && !d.has(m.from) && !d.has(m.to) && (m[t] === void 0 && (m[t] = `${m.from}:${m.to}`), p.push(m)), p), []), { cols: l, lanes: c, items: o, map: h, colMap: a, links: g, hasSubCols: i };
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
        const [y, b] = Mn(m);
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
    return W(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": Jt(s),
        "--kanban-lanes-gap": Jt(i)
      }
    });
  }
  _getChildren(t) {
    const e = this._data.value, { cols: s, lanes: i, items: r, links: o = [] } = e, { editLinks: a } = t, l = this._layoutCols(s, t), c = this._layoutLanes(i, t);
    return console.log("> Kanban.render", t.key, { ...e, layoutCols: l, layoutLanes: c, props: t, kanban: this }), [
      /* @__PURE__ */ u(Su, { cols: l }, "header"),
      /* @__PURE__ */ u(
        Tu,
        {
          itemRender: t.itemRender,
          cols: l,
          lanes: c,
          items: r
        },
        "body"
      ),
      o.length ? /* @__PURE__ */ u(Pu, { links: o, onDeleteLink: a ? this._onDeleteLink : void 0 }, "links") : null,
      a ? /* @__PURE__ */ u(Lu, { onAddLink: this._onAddLink }, "linkEditor") : null,
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
class Ho extends U {
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
      this.setState(t.items ? (i) => ({ ...t, items: ae(i.items, t.items) }) : t, s);
    });
  }
  _needUpdateKanban(t, e) {
    const s = this._needUpdateData, i = s.get(t), { kanbanItemKey: r = "id" } = this.props;
    s.set(t, Gi(i || {}, e, r));
  }
  _buildItems(t) {
    const { items: e = [], kanbanProps: s } = t;
    let { items: i } = this.state;
    i ? (i = ae(e, i).filter((l) => !l.deleted), i.sort(us)) : i = e;
    const r = this._kanbanRefs, o = new Set(r.keys()), a = i.map((l, c) => {
      const d = W(
        { className: "kanban-region-item", key: c },
        typeof s == "function" ? s.call(this, l, c) : s,
        l
      ), h = String(d.key);
      let g = r.get(h);
      return g || (g = B(), r.set(h, g)), d.ref = g, o.delete(h), /* @__PURE__ */ u(Is, { "z-key": h, ...d });
    });
    return o.forEach((l) => {
      r.delete(l);
    }), a;
  }
  _getClassName(t) {
    return ["kanban-region", t.className, this.state.collapsed ? "is-collapsed" : "is-expanded", t.heading ? "has-heading" : ""];
  }
  _getChildren(t) {
    const { heading: e, toggleFromHeading: s } = t, { collapsed: i, heading: r } = this.state, o = W({ className: "kanban-heading", onClick: s ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e, r);
    return [
      e && /* @__PURE__ */ u(an, { ...o }, "heading"),
      i ? null : this._buildItems(t)
    ];
  }
}
let nc = class extends U {
  constructor(t) {
    super(t), this.state = {}, this._ref = B(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new xs(this._ref.current, f.extend({ selector: "self", move: "scroll", onMoveStart: (s, i) => {
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
      if (a instanceof Ho && (i = a.getKanban(t), i))
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
    return W(super._getProps(t), {
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
        d || (d = B(), i.set(c, d)), r.delete(c);
        const h = a.heading !== void 0 || a.items ? Ho : Is;
        return /* @__PURE__ */ u(h, { ref: d, sticky: t.sticky, ...a, "z-key": c }, c);
      }),
      t.children
    ];
    return r.forEach((a) => {
      i.delete(a);
    }), o;
  }
};
nc.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class jr extends O {
}
jr.NAME = "Kanban";
jr.replace = !0;
jr.Component = Is;
class Kr extends O {
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
Kr.NAME = "KanbanList";
Kr.replace = !0;
Kr.Component = nc;
var ic = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Fo = (n, t, e) => (ic(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Ou = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Bo = (n, t, e, s) => (ic(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), $e;
const Hu = "nav", Js = '[data-toggle="tab"]', Fu = "active";
class rc extends lt {
  constructor() {
    super(...arguments), Ou(this, $e, 0);
  }
  active(t) {
    const e = this.$element, s = e.find(Js);
    let i = t ? f(t).closest(Js) : s.filter(`.${Fu}`);
    if (!i.length && (i = e.find(Js).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = f(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Fo(this, $e) && clearTimeout(Fo(this, $e)), Bo(this, $e, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Bo(this, $e, 0);
    }, 10)));
  }
}
$e = /* @__PURE__ */ new WeakMap();
rc.NAME = "Tabs";
f(document).on("click.tabs.zui", Js, (n) => {
  n.preventDefault();
  const t = f(n.target), e = t.closest(`.${Hu}`);
  e.length && rc.ensure(e).active(t);
});
export {
  f as $,
  aa as Ajax,
  Ra as Avatar,
  Wa as BtnGroup,
  Wr as Card,
  Sl as CardList,
  Za as ColorPicker,
  hr as CommonList,
  lt as Component,
  O as ComponentFromReact,
  ss as Computed,
  Or as ContextMenu,
  R as CustomContent,
  ka as CustomRender,
  Es as DTable,
  Tl as Dashboard,
  ol as DatePicker,
  ll as DatetimePicker,
  Pn as Draggable,
  St as Dropdown,
  U as HElement,
  fe as HtmlContent,
  q as Icon,
  jr as Kanban,
  Kr as KanbanList,
  dr as List,
  pr as Menu,
  Ju as Messager,
  Cd as Modal,
  cs as ModalBase,
  Li as ModalTrigger,
  xs as Moveable,
  ul as Nav,
  ur as NestedList,
  fl as Pager,
  pl as Pick,
  _l as Picker,
  _t as Popover,
  Ar as PopoverPanel,
  yl as Popovers,
  xa as Portal,
  Pa as ProgressCircle,
  H as ReactComponent,
  bl as SearchBox,
  mr as SearchMenu,
  Cl as SearchTree,
  vl as Sidebar,
  Rh as Sortable,
  wr as SortableList,
  ls as TIME_DAY,
  rc as Tabs,
  rl as TimePicker,
  wl as Toolbar,
  Rt as Tooltip,
  Lr as Tree,
  Rr as Upload,
  kl as UploadImgs,
  hd as addDate,
  f as cash,
  x as classes,
  Ge as componentsMap,
  Zc as convertBytes,
  hh as create,
  G as createDate,
  sh as createFormData,
  gh as createPortal,
  B as createRef,
  Yc as deepGet,
  qc as deepGetPath,
  zu as defineFn,
  sn as delay,
  dh as disableScroll,
  Uu as dom,
  lo as downloadFile,
  $n as fetchData,
  Xc as formatBytes,
  nt as formatDate,
  lf as formatDateSpan,
  tt as formatString,
  la as getClassList,
  on as getComponent,
  uh as getReactComponent,
  hi as getZData,
  $t as h,
  Q as i18n,
  ci as isDiff,
  eo as isFetchSetting,
  Ns as isSameDay,
  Ja as isSameMonth,
  nf as isSameWeek,
  wi as isSameYear,
  rf as isToday,
  af as isTomorrow,
  gt as isValidElement,
  of as isYesterday,
  W as mergeProps,
  Bt as nextGid,
  Mn as parseSize,
  Ca as reactComponents,
  ne as registerReactComponent,
  va as removeUndefinedProps,
  rs as render,
  fi as renderCustomContent,
  ph as renderCustomResult,
  so as setZData,
  ih as shareData,
  Ot as store,
  ca as storeData,
  ha as takeData,
  Jt as toCssSize
};
//# sourceMappingURL=zui.js.map
