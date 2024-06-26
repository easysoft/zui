var hs = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var st = (n, t, e) => (hs(n, t, "read from private field"), e ? e.call(n) : t.get(n)), ot = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, gt = (n, t, e, s) => (hs(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var us = (n, t, e) => (hs(n, t, "access private method"), e);
const xu = "3.0.0-alpha.4", Tu = 1719390324982, Lt = document, kn = window, Er = Lt.documentElement, he = Lt.createElement.bind(Lt), $r = he("div"), ds = he("table"), Ha = he("tbody"), qi = he("tr"), { isArray: Kn, prototype: Mr } = Array, { concat: Wa, filter: Js, indexOf: Ar, map: Ir, push: ja, slice: Pr, some: Zs, splice: Ba } = Mr, Va = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ua = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ka = /<.+>/, qa = /^\w+$/;
function Xs(n, t) {
  const e = Ga(t);
  return !n || !e && !ae(t) && !Y(t) ? [] : !e && Ua.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && qa.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class qn {
  constructor(t, e) {
    if (!t)
      return;
    if (ks(t))
      return t;
    let s = t;
    if (tt(t)) {
      const i = e || Lt;
      if (s = Va.test(t) && ae(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ka.test(t) ? Lr(t) : ks(i) ? i.find(t) : tt(i) ? d(i).find(t) : Xs(t, i), !s)
        return;
    } else if (ue(t))
      return this.ready(t);
    (s.nodeType || s === kn) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new qn(t, e);
  }
}
const C = qn.prototype, d = C.init;
d.fn = d.prototype = C;
C.length = 0;
C.splice = Ba;
typeof Symbol == "function" && (C[Symbol.iterator] = Mr[Symbol.iterator]);
function ks(n) {
  return n instanceof qn;
}
function we(n) {
  return !!n && n === n.window;
}
function ae(n) {
  return !!n && n.nodeType === 9;
}
function Ga(n) {
  return !!n && n.nodeType === 11;
}
function Y(n) {
  return !!n && n.nodeType === 1;
}
function Ya(n) {
  return !!n && n.nodeType === 3;
}
function Ja(n) {
  return typeof n == "boolean";
}
function ue(n) {
  return typeof n == "function";
}
function tt(n) {
  return typeof n == "string";
}
function dt(n) {
  return n === void 0;
}
function Be(n) {
  return n === null;
}
function Rr(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Qs(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
d.isWindow = we;
d.isFunction = ue;
d.isArray = Kn;
d.isNumeric = Rr;
d.isPlainObject = Qs;
function J(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Qs(n)) {
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
d.each = J;
C.each = function(n) {
  return J(this, n);
};
C.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function xn(...n) {
  const t = Ja(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return xn(t, d, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (Kn(r[o]) || Qs(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), xn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
d.extend = xn;
C.extend = function(n) {
  return xn(C, n);
};
const Za = /\S+/g;
function Gn(n) {
  return tt(n) ? n.match(Za) || [] : [];
}
C.toggleClass = function(n, t) {
  const e = Gn(n), s = !dt(t);
  return this.each((i, r) => {
    Y(r) && J(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(n) {
  return this.toggleClass(n, !0);
};
C.removeAttr = function(n) {
  const t = Gn(n);
  return this.each((e, s) => {
    Y(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Xa(n, t) {
  if (n) {
    if (tt(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return Be(e) ? void 0 : e;
      }
      return dt(t) ? this : Be(t) ? this.removeAttr(n) : this.each((e, s) => {
        Y(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
C.attr = Xa;
C.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
C.hasClass = function(n) {
  return !!n && Zs.call(this, (t) => Y(t) && t.classList.contains(n));
};
C.get = function(n) {
  return dt(n) ? Pr.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
C.eq = function(n) {
  return d(this.get(n));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function Qa(n) {
  return dt(n) ? this.get().map((t) => Y(t) || Ya(t) ? t.textContent : "").join("") : this.each((t, e) => {
    Y(e) && (e.textContent = n);
  });
}
C.text = Qa;
function zt(n, t, e) {
  if (!Y(n))
    return;
  const s = kn.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function xt(n, t) {
  return parseInt(zt(n, t), 10) || 0;
}
function Gi(n, t) {
  return xt(n, `border${t ? "Left" : "Top"}Width`) + xt(n, `padding${t ? "Left" : "Top"}`) + xt(n, `padding${t ? "Right" : "Bottom"}`) + xt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const fs = {};
function tl(n) {
  if (fs[n])
    return fs[n];
  const t = he(n);
  Lt.body.insertBefore(t, null);
  const e = zt(t, "display");
  return Lt.body.removeChild(t), fs[n] = e !== "none" ? e : "block";
}
function Yi(n) {
  return zt(n, "display") === "none";
}
function Dr(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function Yn(n) {
  return tt(n) ? (t, e) => Dr(e, n) : ue(n) ? n : ks(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
C.filter = function(n) {
  const t = Yn(n);
  return d(Js.call(this, (e, s) => t.call(e, s, e)));
};
function Qt(n, t) {
  return t ? n.filter(t) : n;
}
C.detach = function(n) {
  return Qt(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const el = /^\s*<(\w+)[^>]*>/, nl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ji = {
  "*": $r,
  tr: Ha,
  td: qi,
  th: qi,
  thead: ds,
  tbody: ds,
  tfoot: ds
};
function Lr(n) {
  if (!tt(n))
    return [];
  if (nl.test(n))
    return [he(RegExp.$1)];
  const t = el.test(n) && RegExp.$1, e = Ji[t] || Ji["*"];
  return e.innerHTML = n, d(e.childNodes).detach().get();
}
d.parseHTML = Lr;
C.has = function(n) {
  const t = tt(n) ? (e, s) => Xs(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
C.not = function(n) {
  const t = Yn(n);
  return this.filter((e, s) => (!tt(n) || Y(s)) && !t.call(s, e, s));
};
function Ot(n, t, e, s) {
  const i = [], r = ue(t), o = s && Yn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && ja.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function zr(n) {
  return n.multiple && n.options ? Ot(Js.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function sl(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || Ur.test(e.type)) {
      const i = Kn(n) ? Ir.call(n, String) : Be(n) ? [] : [String(n)];
      s ? J(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = dt(n) || Be(n) ? "" : n;
  }) : this[0] && zr(this[0]);
}
C.val = sl;
C.is = function(n) {
  const t = Yn(n);
  return Zs.call(this, (e, s) => t.call(e, s, e));
};
d.guid = 1;
function Et(n) {
  return n.length > 1 ? Js.call(n, (t, e, s) => Ar.call(s, t) === e) : n;
}
d.unique = Et;
C.add = function(n, t) {
  return d(Et(this.get().concat(d(n, t).get())));
};
C.children = function(n) {
  return Qt(d(Et(Ot(this, (t) => t.children))), n);
};
C.parent = function(n) {
  return Qt(d(Et(Ot(this, "parentNode"))), n);
};
C.index = function(n) {
  const t = n ? d(n)[0] : this[0], e = n ? this : d(t).parent().children();
  return Ar.call(e, t);
};
C.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
C.siblings = function(n) {
  return Qt(d(Et(Ot(this, (t) => d(t).parent().children().not(t)))), n);
};
C.find = function(n) {
  return d(Et(Ot(this, (t) => Xs(n, t))));
};
const il = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rl = /^$|^module$|\/(java|ecma)script/i, ol = ["type", "src", "nonce", "noModule"];
function al(n, t) {
  const e = d(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (rl.test(i.type) && Er.contains(i)) {
      const r = he("script");
      r.text = i.textContent.replace(il, ""), J(ol, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ll(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && al(t, n.ownerDocument);
}
function te(n, t, e, s, i, r, o, a) {
  return J(n, (l, c) => {
    J(d(c), (u, h) => {
      J(d(t), (g, f) => {
        const _ = e ? h : f, m = e ? f : h, y = e ? u : g;
        ll(_, y ? m.cloneNode(!0) : m, s, i, !y);
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
function cl(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (dt(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    Y(s) && (t ? d(s).empty().append(n) : s.innerHTML = n);
  });
}
C.html = cl;
C.appendTo = function(n) {
  return te(arguments, this, !0, !1, !0);
};
C.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = d(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
C.before = function() {
  return te(arguments, this, !1, !0);
};
C.wrapAll = function(n) {
  let t = d(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
C.wrap = function(n) {
  return this.each((t, e) => {
    const s = d(n)[0];
    d(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
C.insertAfter = function(n) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(n) {
  return te(arguments, this, !0, !0);
};
C.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(n) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return d(Et(Ot(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
C.next = function(n, t, e) {
  return Qt(d(Et(Ot(this, "nextElementSibling", t, e))), n);
};
C.nextAll = function(n) {
  return this.next(n, !0);
};
C.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
C.parents = function(n, t) {
  return Qt(d(Et(Ot(this, "parentElement", !0, t))), n);
};
C.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
C.prev = function(n, t, e) {
  return Qt(d(Et(Ot(this, "previousElementSibling", t, e))), n);
};
C.prevAll = function(n) {
  return this.prev(n, !0);
};
C.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
C.map = function(n) {
  return d(Wa.apply([], Ir.call(this, (t, e) => n.call(t, e, t))));
};
C.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && zt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Er;
  });
};
C.slice = function(n, t) {
  return d(Pr.call(this, n, t));
};
const hl = /-([a-z])/g;
function ti(n) {
  return n.replace(hl, (t, e) => e.toUpperCase());
}
C.ready = function(n) {
  const t = () => setTimeout(n, 0, d);
  return Lt.readyState !== "loading" ? t() : Lt.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = d(t);
    e.replaceWith(e.children());
  }), this;
};
C.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + kn.pageYOffset,
    left: t.left + kn.pageXOffset
  };
};
C.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = zt(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && Y(i)) {
      const r = d(i).offset();
      e.top -= r.top + xt(i, "borderTopWidth"), e.left -= r.left + xt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - xt(n, "marginTop"),
    left: e.left - xt(n, "marginLeft")
  };
};
const Fr = {
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
C.prop = function(n, t) {
  if (n) {
    if (tt(n))
      return n = Fr[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
C.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Fr[n] || n];
  });
};
const ul = /^--/;
function ei(n) {
  return ul.test(n);
}
const ps = {}, { style: dl } = $r, fl = ["webkit", "moz", "ms"];
function pl(n, t = ei(n)) {
  if (t)
    return n;
  if (!ps[n]) {
    const e = ti(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${fl.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in dl)
        return ps[n] = o, !1;
    });
  }
  return ps[n];
}
const gl = {
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
function Or(n, t, e = ei(n)) {
  return !e && !gl[n] && Rr(t) ? `${t}px` : t;
}
function ml(n, t) {
  if (tt(n)) {
    const e = ei(n);
    return n = pl(n, e), arguments.length < 2 ? this[0] && zt(this[0], n, e) : n ? (t = Or(n, t, e), this.each((s, i) => {
      Y(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
C.css = ml;
function Hr(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const _l = /^\s+|\s+$/;
function Zi(n, t) {
  const e = n.dataset[t] || n.dataset[ti(t)];
  return _l.test(e) ? e : Hr(JSON.parse, e);
}
function yl(n, t, e) {
  e = Hr(JSON.stringify, e), n.dataset[ti(t)] = e;
}
function vl(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = Zi(this[0], s);
    return e;
  }
  if (tt(n))
    return arguments.length < 2 ? this[0] && Zi(this[0], n) : dt(t) ? this : this.each((e, s) => {
      yl(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
C.data = vl;
function Wr(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
J([!0, !1], (n, t) => {
  J(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    C[i] = function(r) {
      if (this[0])
        return we(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ae(this[0]) ? Wr(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? xt(this[0], `margin${e ? "Top" : "Left"}`) + xt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  C[e] = function(s) {
    if (!this[0])
      return dt(s) ? void 0 : this;
    if (!arguments.length)
      return we(this[0]) ? this[0].document.documentElement[`client${t}`] : ae(this[0]) ? Wr(this[0], t) : this[0].getBoundingClientRect()[e] - Gi(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = zt(o, "boxSizing");
      o.style[e] = Or(e, i + (a === "border-box" ? Gi(o, !n) : 0));
    });
  };
});
const Xi = "___cd";
C.toggle = function(n) {
  return this.each((t, e) => {
    if (!Y(e))
      return;
    const s = Yi(e);
    (dt(n) ? s : n) ? (e.style.display = e[Xi] || "", Yi(e) && (e.style.display = tl(e.tagName))) : s || (e[Xi] = zt(e, "display"), e.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Qi = "___ce", ni = ".", si = { focus: "focusin", blur: "focusout" }, jr = { mouseenter: "mouseover", mouseleave: "mouseout" }, bl = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function ii(n) {
  return jr[n] || si[n] || n;
}
function ri(n) {
  const t = n.split(ni);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(n, t) {
  if (tt(n)) {
    const [s, i] = ri(n), r = ii(s);
    if (!r)
      return this;
    const o = bl.test(r) ? "MouseEvents" : "HTMLEvents";
    n = Lt.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(ni), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in si;
  return this.each((s, i) => {
    e && ue(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Br(n) {
  return n[Qi] = n[Qi] || {};
}
function wl(n, t, e, s, i) {
  const r = Br(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function Vr(n, t) {
  return !t || !Zs.call(t, (e) => n.indexOf(e) < 0);
}
function Tn(n, t, e, s, i) {
  const r = Br(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Vr(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Tn(n, t, e, s, i);
}
C.off = function(n, t, e) {
  if (dt(n))
    this.each((s, i) => {
      !Y(i) && !ae(i) && !we(i) || Tn(i);
    });
  else if (tt(n))
    ue(t) && (e = t, t = ""), J(Gn(n), (s, i) => {
      const [r, o] = ri(i), a = ii(r);
      this.each((l, c) => {
        !Y(c) && !ae(c) && !we(c) || Tn(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
C.remove = function(n) {
  return Qt(this, n).detach().off(), this;
};
C.replaceWith = function(n) {
  return this.before(n).remove();
};
C.replaceAll = function(n) {
  return d(n).replaceWith(this), this;
};
function Cl(n, t, e, s, i) {
  if (!tt(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return tt(t) || (dt(t) || Be(t) ? t = "" : dt(e) ? (e = t, t = "") : (s = e, e = t, t = "")), ue(s) || (s = e, e = void 0), s ? (J(Gn(n), (r, o) => {
    const [a, l] = ri(o), c = ii(a), u = a in jr, h = a in si;
    c && this.each((g, f) => {
      if (!Y(f) && !ae(f) && !we(f))
        return;
      const _ = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Vr(l, m.namespace.split(ni)) || !t && (h && (m.target !== f || m.___ot === c) || u && m.relatedTarget && f.contains(m.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let b = m.target;
          for (; !Dr(b, t); )
            if (b === f || (b = b.parentNode, !b))
              return;
          y = b;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return y;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const v = s.call(y, m, m.___td);
        i && Tn(f, c, l, t, _), v === !1 && (m.preventDefault(), m.stopPropagation());
      };
      _.guid = s.guid = s.guid || d.guid++, wl(f, c, l, t, _);
    });
  }), this) : this;
}
C.on = Cl;
function Sl(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
C.one = Sl;
const kl = /\r?\n/g;
function xl(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(kl, `\r
`))}`;
}
const Tl = /file|reset|submit|button|image/i, Ur = /radio|checkbox/i;
C.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    J(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Tl.test(i.type) || Ur.test(i.type) && !i.checked)
        return;
      const r = zr(i);
      if (!dt(r)) {
        const o = Kn(r) ? r : [r];
        J(o, (a, l) => {
          n += xl(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = d;
function Nl(n, t) {
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
function El(n, t, e) {
  try {
    const s = Nl(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function V(n, ...t) {
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
var oi = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(oi || {});
function $t(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / oi[e]).toFixed(t) + e);
}
const dn = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * oi[s];
};
let ai = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Rt;
function $l() {
  return ai;
}
function Ml(n) {
  ai = n.toLowerCase().replace("-", "_");
}
function Kr(n, t) {
  Rt || (Rt = {}), typeof n == "string" && (n = { [n]: t ?? {} }), d.extend(!0, Rt, n);
}
function O(n, t, e, s, i, r) {
  Array.isArray(n) ? Rt && n.unshift(Rt) : n = Rt ? [Rt, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || ai;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === Rt ? `${r}.${t}` : t;
    if (a = El(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? V(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Al(n, t, e, s) {
  return O(void 0, n, t, e, s);
}
O.addLang = Kr;
O.getLang = Al;
O.getCode = $l;
O.setCode = Ml;
O.map = Rt;
Kr({
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
function tr(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function ye(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => ye(n, t, s)) : !(e instanceof Blob) && d.isPlainObject(e) ? Object.entries(e).forEach(([s, i]) => {
    ye(n, `${t}[${s}]`, i);
  }) : n.append(t, e instanceof Blob ? e : String(e)));
}
function Il(n, t) {
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
function Pl(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    ye(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    ye(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    ye(e, i, s);
  }) : d.isPlainObject(n) && Object.entries(n).forEach(([s, i]) => {
    ye(e, s, i);
  })), e;
}
class qr {
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
      dataFilter: u,
      beforeSend: h,
      success: g,
      error: f,
      complete: _,
      ...m
    } = this.setting;
    if ((h == null ? void 0 : h(m)) === !1)
      return;
    e && (m.method = e);
    let y = s;
    y && (i && (y = Pl(y)), m.body = y), o && (m.mode = "cors");
    const v = m.headers || {};
    tr(v, "X-Requested-With", "XMLHttpRequest"), r && tr(v, "Content-Type", r), m.headers = v, m.signal && m.signal.addEventListener("abort", () => {
      this.abort();
    }), g && this.success(g), f && this.fail(f), _ && this.complete(_), m.signal = this._controller.signal, this.url = t, this.request = m;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((s) => {
      s.call(this, ...e);
    });
  }
  async send() {
    var u;
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: s, dataFilter: i, throws: r, jsonParser: o } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let a, l, c;
    try {
      a = await fetch(this.url, this.request), this.response = a;
      const { statusText: h } = a;
      if (a.ok) {
        const g = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), f = g ? "blob" : e || Il(a.headers.get("Content-Type"), s);
        g || f === "blob" || f === "file" ? c = await a.blob() : f === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const _ = (i == null ? void 0 : i(c, f)) ?? c;
        this._emit("success", _, h, a);
      } else
        throw this.data = await a.text(), new Error(h);
    } catch (h) {
      l = h;
      let g = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : g = !0), this.error = l, g || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
d.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : d.extend(t, n);
  const e = new qr(t);
  return e.send(), e;
};
d.getJSON = (n, t, e) => (typeof t == "function" && (e = t, t = void 0), d.ajax({
  url: n,
  data: t,
  success: e,
  dataType: "json"
}));
d.get = (n, t, e, s, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, s = void 0) : s = e, d.ajax({
    method: i,
    url: n,
    data: o,
    success: r,
    dataType: s
  });
};
d.post = (n, t, e, s) => d.get(n, t, e, s, "POST");
d.fn.load = function(n, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [s, i] = n.split(" ");
  return d.get(s, t, (r, o, a) => {
    i && (r = d(r).find(i).html()), d(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function li(n, t = [], e) {
  const s = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    s.url = n;
  else if (typeof n == "object")
    d.extend(s, n);
  else if (typeof n == "function") {
    const o = n(...t);
    return o instanceof Promise ? await o : o;
  }
  e && d.extend(s, typeof e == "function" ? e(s) : e);
  const i = new qr(s), [r] = await i.send();
  return r;
}
function Nu(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
d.fetch = li;
function ht() {
  return d.guid++;
}
function xs(n, t) {
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
        if (xs(n[o], t[o]))
          return !0;
      return !0;
    }
    const i = Object.keys(n), r = Object.keys(t);
    if (i.length !== r.length)
      return !0;
    for (const o of i)
      if (xs(n[o], t[o]))
        return !0;
    return !0;
  }
  return !0;
}
class Nn {
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
    return (!e || t.some((s, i) => xs(s instanceof Nn ? s.value : s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof Nn ? s.cache : s)), this._value;
  }
}
function Gr(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Gr(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...n) => Gr(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
d.classes = x;
d.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = d(s);
    n === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(n, ...t));
  });
};
const Re = /* @__PURE__ */ new WeakMap();
function Yr(n, t, e) {
  const s = Re.has(n), i = s ? Re.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, d(n).dataset(), i), Re.set(n, i)) : Re.delete(n);
}
function Jr(n, t, e) {
  let s = Re.get(n) || {};
  return !e && n instanceof Element && (s = Object.assign({}, d(n).dataset(), s)), t === void 0 ? s : s[t];
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...n) {
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? this.length ? Jr(this[0], t) : void 0 : this.each((s, i) => Yr(i, t, e));
};
d.fn.removeData = function(n = null) {
  return this.each((t, e) => Yr(e, n));
};
function Ts(n, t = "z-") {
  const e = d(n)[0];
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
function er(n, t, e = "z-") {
  const s = d(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function Rl(...n) {
  var e;
  const t = n.length;
  if (!t)
    return Ts(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = Ts(this)) == null ? void 0 : e[s] : (d.isPlainObject(s) && er(this, s), this);
  }
  return er(this, { [n[0]]: n[1] }), this;
}
d.fn.z = Rl;
d.fn._attr = d.fn.attr;
d.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
d.Event || (d.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
});
const En = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Dl = {};
d.share = Dl;
var Jn, H, Zr, bt, ie, nr, Xr, Ns, ci, Es, $s, Ve = {}, Qr = [], Ll = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Zn = Array.isArray;
function Kt(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function to(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function mt(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Jn.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return mn(n, o, s, i, null);
}
function mn(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Zr, __i: -1, __u: 0 };
  return i == null && H.vnode != null && H.vnode(r), r;
}
function q() {
  return { current: null };
}
function xe(n) {
  return n.children;
}
function j(n, t) {
  this.props = n, this.context = t;
}
function le(n, t) {
  if (t == null)
    return n.__ ? le(n.__, n.__i + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? le(n) : null;
}
function eo(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return eo(n);
  }
}
function sr(n) {
  (!n.__d && (n.__d = !0) && ie.push(n) && !$n.__r++ || nr !== H.debounceRendering) && ((nr = H.debounceRendering) || Xr)($n);
}
function $n() {
  var n, t, e, s, i, r, o, a;
  for (ie.sort(Ns); n = ie.shift(); )
    n.__d && (t = ie.length, s = void 0, r = (i = (e = n).__v).__e, o = [], a = [], e.__P && ((s = Kt({}, i)).__v = i.__v + 1, H.vnode && H.vnode(s), hi(e.__P, s, i, e.__n, e.__P.ownerSVGElement !== void 0, 32 & i.__u ? [r] : null, o, r ?? le(i), !!(32 & i.__u), a), s.__v = i.__v, s.__.__k[s.__i] = s, io(o, s, a), s.__e != r && eo(s)), ie.length > t && ie.sort(Ns));
  $n.__r = 0;
}
function no(n, t, e, s, i, r, o, a, l, c, u) {
  var h, g, f, _, m, y = s && s.__k || Qr, v = t.length;
  for (e.__d = l, zl(e, t, y), l = e.__d, h = 0; h < v; h++)
    (f = e.__k[h]) != null && typeof f != "boolean" && typeof f != "function" && (g = f.__i === -1 ? Ve : y[f.__i] || Ve, f.__i = h, hi(n, f, g, i, r, o, a, l, c, u), _ = f.__e, f.ref && g.ref != f.ref && (g.ref && ui(g.ref, null, f), u.push(f.ref, f.__c || _, f)), m == null && _ != null && (m = _), 65536 & f.__u || g.__k === f.__k ? (l && !l.isConnected && (l = le(g)), l = so(f, l, n)) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : _ && (l = _.nextSibling), f.__d = void 0, f.__u &= -196609);
  e.__d = l, e.__e = m;
}
function zl(n, t, e) {
  var s, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (n.__k = [], s = 0; s < l; s++)
    o = s + h, (i = n.__k[s] = (i = t[s]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? mn(null, i, null, null, null) : Zn(i) ? mn(xe, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? mn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = n, i.__b = n.__b + 1, a = Fl(i, e, o, u), i.__i = a, r = null, a !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a === o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : a < o ? a == o - 1 && (h = a - o) : h = 0, a !== s + h && (i.__u |= 65536))) : (r = e[o]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = le(r)), Ms(r, r, !1), e[o] = null, u--);
  if (u)
    for (s = 0; s < c; s++)
      (r = e[s]) != null && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = le(r)), Ms(r, r));
}
function so(n, t, e) {
  var s, i;
  if (typeof n.type == "function") {
    for (s = n.__k, i = 0; s && i < s.length; i++)
      s[i] && (s[i].__ = n, t = so(s[i], t, e));
    return t;
  }
  n.__e != t && (e.insertBefore(n.__e, t || null), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Mn(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (Zn(n) ? n.some(function(e) {
    Mn(e, t);
  }) : t.push(n)), t;
}
function Fl(n, t, e, s) {
  var i = n.key, r = n.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type && !(131072 & l.__u))
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
function ir(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Ll.test(t) ? e : e + "px";
}
function fn(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || ir(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || ir(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in n || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = ci, n.addEventListener(t, r ? $s : Es, r)) : n.removeEventListener(t, r ? $s : Es, r);
    else {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t in n)
        try {
          n[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? n.removeAttribute(t) : n.setAttribute(t, e));
    }
}
function rr(n) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + n];
      if (t.t == null)
        t.t = ci++;
      else if (t.t < e.u)
        return;
      return e(H.event ? H.event(t) : t);
    }
  };
}
function hi(n, t, e, s, i, r, o, a, l, c) {
  var u, h, g, f, _, m, y, v, b, w, S, k, T, A, I, M = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = H.__b) && u(t);
  t:
    if (typeof M == "function")
      try {
        if (v = t.props, b = (u = M.contextType) && s[u.__c], w = u ? b ? b.props.value : u.__ : s, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : ("prototype" in M && M.prototype.render ? t.__c = h = new M(v, w) : (t.__c = h = new j(v, w), h.constructor = M, h.render = Hl), b && b.sub(h), h.props = v, h.state || (h.state = {}), h.context = w, h.__n = s, g = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), M.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = Kt({}, h.__s)), Kt(h.__s, M.getDerivedStateFromProps(v, h.__s))), f = h.props, _ = h.state, h.__v = t, g)
          M.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (M.getDerivedStateFromProps == null && v !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(v, w), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(v, h.__s, w) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = v, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(E) {
              E && (E.__ = t);
            }), S = 0; S < h._sb.length; S++)
              h.__h.push(h._sb[S]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(v, h.__s, w), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(f, _, m);
          });
        }
        if (h.context = w, h.props = v, h.__P = n, h.__e = !1, k = H.__r, T = 0, "prototype" in M && M.prototype.render) {
          for (h.state = h.__s, h.__d = !1, k && k(t), u = h.render(h.props, h.state, h.context), A = 0; A < h._sb.length; A++)
            h.__h.push(h._sb[A]);
          h._sb = [];
        } else
          do
            h.__d = !1, k && k(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++T < 25);
        h.state = h.__s, h.getChildContext != null && (s = Kt(Kt({}, s), h.getChildContext())), g || h.getSnapshotBeforeUpdate == null || (m = h.getSnapshotBeforeUpdate(f, _)), no(n, Zn(I = u != null && u.type === xe && u.key == null ? u.props.children : u) ? I : [I], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (E) {
        t.__v = null, l || r != null ? (t.__e = a, t.__u |= l ? 160 : 32, r[r.indexOf(a)] = null) : (t.__e = e.__e, t.__k = e.__k), H.__e(E, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Ol(e.__e, t, e, s, i, r, o, l, c);
  (u = H.diffed) && u(t);
}
function io(n, t, e) {
  t.__d = void 0;
  for (var s = 0; s < e.length; s++)
    ui(e[s], e[++s], e[++s]);
  H.__c && H.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      H.__e(r, i.__v);
    }
  });
}
function Ol(n, t, e, s, i, r, o, a, l) {
  var c, u, h, g, f, _, m, y = e.props, v = t.props, b = t.type;
  if (b === "svg" && (i = !0), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!b && (b ? f.localName === b : f.nodeType === 3)) {
        n = f, r[c] = null;
        break;
      }
  }
  if (n == null) {
    if (b === null)
      return document.createTextNode(v);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, v.is && v), r = null, a = !1;
  }
  if (b === null)
    y === v || a && n.data === v || (n.data = v);
  else {
    if (r = r && Jn.call(n.childNodes), y = e.props || Ve, !a && r != null)
      for (y = {}, c = 0; c < n.attributes.length; c++)
        y[(f = n.attributes[c]).name] = f.value;
    for (c in y)
      if (f = y[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = f;
        else if (c !== "key" && !(c in v)) {
          if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v)
            continue;
          fn(n, c, null, f, i);
        }
      }
    for (c in v)
      f = v[c], c == "children" ? g = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? _ = f : c == "checked" ? m = f : c === "key" || a && typeof f != "function" || y[c] === f || fn(n, c, f, y[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (h && (n.innerHTML = ""), no(n, Zn(g) ? g : [g], t, e, s, i && b !== "foreignObject", r, o, r ? r[0] : e.__k && le(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && to(r[c]);
    a || (c = "value", _ !== void 0 && (_ !== n[c] || b === "progress" && !_ || b === "option" && _ !== y[c]) && fn(n, c, _, y[c], !1), c = "checked", m !== void 0 && m !== n[c] && fn(n, c, m, y[c], !1));
  }
  return n;
}
function ui(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    H.__e(s, e);
  }
}
function Ms(n, t, e) {
  var s, i;
  if (H.unmount && H.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || ui(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        H.__e(r, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Ms(s[i], t, e || typeof n.type != "function");
  e || n.__e == null || to(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function Hl(n, t, e) {
  return this.constructor(n, e);
}
function ve(n, t, e) {
  var s, i, r, o;
  H.__ && H.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], hi(t, n = (!s && e || t).__k = mt(xe, null, [n]), i || Ve, Ve, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? Jn.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), io(r, n, o);
}
Jn = Qr.slice, H = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Zr = 0, bt = function(n) {
  return n != null && n.constructor == null;
}, j.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof n == "function" && (n = n(Kt({}, e), this.props)), n && Kt(e, n), n != null && this.__v && (t && this._sb.push(t), sr(this));
}, j.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), sr(this));
}, j.prototype.render = xe, ie = [], Xr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ns = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, $n.__r = 0, ci = 0, Es = rr(!1), $s = rr(!0);
function z(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...Mn(r), ...Mn(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = d.extend(r, i))), n[s] = i);
    });
  }), n;
}
function ro(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
const De = /* @__PURE__ */ new Map();
function An(n) {
  const { zui: t } = window;
  return (!De.size || n && !De.has(n.toUpperCase())) && Object.keys(t).forEach((e) => {
    const s = t[e];
    !s.NAME || !s.ZUI || De.set(e.toLowerCase(), s);
  }), n ? De.get(n.toLowerCase()) : void 0;
}
function Wl(n, t, e) {
  const s = An(n);
  return s ? !s.MULTI_INSTANCE && s.get(t) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: t, options: e }), null) : new s(t, e) : null;
}
function Eu(n) {
  if (n) {
    const t = An(n);
    t && t.defineFn();
  } else
    An(), De.forEach((t) => {
      t.defineFn();
    });
}
d.fn.zuiInit = function() {
  return this.find("[zui-create],[data-zui]").each(function() {
    const n = d(this);
    let t = Ts(n, "data-");
    const [e, s] = (t.zui || n.attr("zui-create")).split(":");
    n.zui(e) || (s ? t = d.share[s] : delete t.zui, requestAnimationFrame(() => Wl(e, this, t)));
  }), this.find("[zui-init]").each(function() {
    const n = d(this);
    n.z("zuiInited") || d.runJS(n.z("zuiInited", !0).attr("zui-init"), ["$element", n]);
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this.find('[data-on="inited"]').each((n, t) => {
    const e = d(t);
    e.zui() || e.trigger("inited");
  }), this;
};
d.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = Jr(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), n === !0 ? r : o;
  }
  const s = An(n);
  if (s)
    return t === !0 ? s.getAll(e) : s.query(e, t);
};
d(() => {
  d("body").zuiInit();
});
function jl(n, t = !0) {
  const e = d(n), s = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = s === document.body || e.is("html") ? window.innerWidth - document.body.clientWidth : s.offsetWidth - s.clientWidth;
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
d.fn.disableScroll = function(n = !0) {
  return this.each((t, e) => {
    jl(e, n);
  });
};
d.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function Bl(n) {
  const t = d(this), e = t.dataset();
  if (!(e.on || "click").split(" ").includes(n.type))
    return;
  const s = e.selector ? d(n.target).closest(e.selector) : t;
  if (!s.length)
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
  if (i(e.prevent) && n.preventDefault(), i(e.stop) && n.stopPropagation(), i(e.self) && n.currentTarget !== n.target)
    return;
  const o = [["$element", t], ["event", n], ["options", e], ["$target", s]];
  if (e.if && !d.runJS(e.if, ...o))
    return;
  const a = e.call;
  if (a) {
    let l = window[a];
    const c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(a);
    if (l || (l = d.runJS(a, ...o)), !c || !d.isFunction(l))
      return;
    const u = [], h = e.params;
    e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((g) => (g = g.trim(), g === "$element" ? t : g === "event" ? n : g === "options" ? e : g.startsWith("$element.") || g.startsWith("event.") || g.startsWith("options.") ? d.runJS(g, ...o) : r(g)))) : u.push(h), l(...u);
  }
  e.do && d.runJS(e.do, ...o);
}
d(document).on("click.zui.global change.zui.global inited.zui.global", "[data-on]", Bl);
function oo(n) {
  if (typeof n == "function")
    return oo(n());
  if (typeof n == "number")
    return [n];
  let t = n.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = n.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function _n(n) {
  if (n == null)
    return null;
  const [t, e = "px"] = oo(n);
  return Number.isNaN(t) ? typeof n == "string" ? n : null : `${t}${e}`;
}
async function or(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), or(o, t);
  }
  const e = await fetch(n);
  return or(e);
}
class Vl {
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
const Ft = new Vl(document);
d.bus = Ft;
d.on = Ft.on.bind(Ft);
d.one = Ft.one.bind(Ft);
d.off = Ft.off.bind(Ft);
d.trigger = Ft.trigger.bind(Ft);
var Ul = ["Shift", "Meta", "Alt", "Control"], ao = typeof navigator == "object" ? navigator.platform : "", lo = /Mac|iPod|iPhone|iPad/.test(ao), Kl = lo ? "Meta" : "Control", ql = ao === "Win32" ? ["Control", "Alt"] : lo ? ["Alt"] : [];
function gs(n, t) {
  return typeof n.getModifierState == "function" && (n.getModifierState(t) || ql.includes(t) && n.getModifierState("AltGraph"));
}
function Gl(n) {
  return n.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), s = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? Kl : i;
    }), s];
  });
}
function co(n, t) {
  var e;
  t === void 0 && (t = {});
  var s = (e = t.timeout) != null ? e : 1e3, i = Object.keys(n).map(function(a) {
    return [Gl(a), n[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(g, f) {
        return !(f[1].toUpperCase() !== g.key.toUpperCase() && f[1] !== g.code || f[0].find(function(_) {
          return !gs(g, _);
        }) || Ul.find(function(_) {
          return !f[0].includes(_) && f[1] !== _ && gs(g, _);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : gs(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Yl(n, t, e) {
  var s;
  e === void 0 && (e = {});
  var i = (s = e.event) != null ? s : "keydown", r = co(t, e);
  return n.addEventListener(i, r), function() {
    n.removeEventListener(i, r);
  };
}
function ho(n, t = {}) {
  if (!n)
    return;
  const e = Object.keys(t).reduce((s, i) => (t[i].optional || (s[i] = {
    ...t[i]
  }), s), {});
  return Object.keys(n).forEach((s) => {
    const i = n[s];
    i ? i === !0 ? t[s] && (e[s] = {
      ...t[s]
    }) : e[s] = i : delete e[s];
  }), Object.keys(e).reduce((s, i) => {
    const { keys: r, handler: o } = e[i];
    return typeof r == "string" ? s[r] = o : r.forEach((a) => {
      s[a] = o;
    }), s;
  }, {});
}
function uo(n, t, e) {
  const { timeout: s, event: i = "keydown", scope: r, when: o } = e || {}, a = co(t, { timeout: s }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return d(n).on(`${i}${l}`, function(u) {
    o && o(u) === !1 || d(u.target).data(c) || a(u);
  }).on(`compositionstart${l}`, (u) => {
    d(u.target).data(c, !0);
  }).on(`compositionend${l}`, (u) => {
    d(u.target).removeData(c);
  });
}
function fo(n, t) {
  return d(n).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const $u = Yl;
d.fn.hotkeys = function(n, t) {
  return uo(this, n, t);
};
d.fn.unbindHotkeys = function(n) {
  return fo(this, n);
};
d.hotkeys = function(n, t) {
  uo(window, n, t);
};
d.unbindHotkeys = function(n) {
  fo(window, n);
};
function di() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Jl(n) {
  (typeof n == "string" || n instanceof Element || n instanceof d) && (n = { target: n });
  const { target: t, onError: e, onSuccess: s, afterExit: i, afterEnter: r } = n, o = d(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), s == null || s.call(a), d(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, d(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const u = di();
    let h = u;
    u ? d(u).addClass("is-in-fullscreen") : (h = d(document).find(".is-in-fullscreen")[0] || document, d(h).removeClass("is-in-fullscreen")), d("body").toggleClass("has-in-fullscreen", !!u);
    const g = { event: c, target: h, fullscreenElement: u };
    d(h).trigger(u ? "enterFullscreen" : "exitFullscreen", g).trigger("toggleFullscreen", g);
  }));
}
async function po(n) {
  const t = di();
  return n === !1 && !!t === n ? n : t ? (document.exitFullscreen(), !1) : (await Jl(n), !0);
}
d.fn.fullscreen = function(n) {
  return po({
    target: this,
    ...n
  });
};
d.getFullscreenElement = di;
d.toggleFullscreen = po;
function de(n) {
  return n.parentNode === document ? !1 : n.parentNode ? de(n.parentNode) : !0;
}
d.isDetached = de;
d.fn.isDetached = function() {
  const n = this[0];
  return !n || de(n);
};
class Ht {
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
    const l = d(t);
    if (l.data(s) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const c = l[0], u = ht();
    this._gid = u, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((g) => {
      g.forEach((f) => {
        f.removedNodes.forEach((_) => {
          _ === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, de(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${u}`, l.data(s, this).attr(i, `${u}`), o) {
      const g = `${s}:ALL`;
      let f = l.data(g);
      f || (f = /* @__PURE__ */ new Map(), l.data(g, f)), f.set(this._key, this);
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
    return t && d.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const s = d.Event(t);
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
    const { i18nData: i } = this;
    return O(i, t, e, s, this.options.lang, this.constructor.NAME) ?? O(i, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    const s = d(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return s.data(this.KEY);
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
    const s = this.get(t, e == null ? void 0 : e.key);
    if (s) {
      if (this.isValid(s))
        return e && s.setOptions(e), s;
      s.destroy();
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
  static getAll(t) {
    const { MULTI_INSTANCE: e, SELECTOR: s } = this, i = [];
    return d(t || document).find(s).each((r, o) => {
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
  static query(t, e, s) {
    if (t === void 0) {
      let i = this.getAll();
      return s && (i = i.filter(s)), i.pop();
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
    const s = this;
    d.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, u) => {
          let h = s.get(u);
          if (h ? o && h.render(o) : h = new s(u, o), a) {
            let g = h[a], f = h;
            g === void 0 && (f = h.$, g = f[a]), typeof g == "function" ? l = g.call(f, ...r) : l = g;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
Ht.DEFAULT = {};
Ht.MULTI_INSTANCE = !1;
class Zl extends Ht {
  init() {
    const { offset: t = 1, side: e, zIndex: s, pinnedClass: i = "is-pinned", targets: r, scrollContainer: o } = this.options, { $element: a } = this, l = r ? a.find(r) : a;
    if (l.css({ position: "sticky", zIndex: s }), e && l.css(e, -t), o) {
      const c = a.closest(o)[0];
      if (c) {
        const u = () => {
          this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
            if (this._raf = 0, c.scrollTop === 0 && (!e || e === "top")) {
              l.toggleClass(i, !1);
              return;
            }
            const h = c.getBoundingClientRect();
            l.each((g, f) => {
              const m = f.getBoundingClientRect()[e || "top"] === h[e || "top"];
              f.classList.toggle(i, m);
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
Zl.NAME = "Sticky";
function Xn(n, t = {}) {
  const e = d(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t;
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (t.checkZeroSize && !(o * a))
    return !1;
  if (!s)
    if (t.container)
      s = d(e).closest(t.container)[0].getBoundingClientRect();
    else {
      const { innerHeight: _, innerWidth: m } = window, { clientHeight: y, clientWidth: v } = document.documentElement;
      s = { left: 0, top: 0, width: m || v, height: _ || y };
    }
  const { left: l, top: c, width: u, height: h } = s;
  if (t.fullyCheck)
    return i >= l && r >= c && i + o <= u + l && r + a <= h + c;
  const g = i <= l + u && i + o >= l;
  return r <= c + h && r + a >= c && g;
}
d.fn.isVisible = function(n) {
  return Xn(this, n);
};
function fi(n, t, e = !1) {
  const s = d(n);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${ht()}`;
      s.append(`<script id="${i}">${t}<\/script>`), e && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    fi(s, r.innerHTML), r.remove();
  });
}
d.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
d.fn.runJS = function(n) {
  return this.each((t, e) => {
    fi(e, n);
  });
};
function Xl(n, t = "both") {
  return (t === "vert" || t === "both") && n.clientHeight < n.scrollHeight || (t === "horz" || t === "both") && n.clientWidth < n.scrollWidth;
}
function go(n, t) {
  const e = d(n), { ifNeeded: s = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = d(a).closest(i);
      if (!l.length || !Xl(l[0]))
        return;
    }
    if (s) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (Xn(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
d.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    go(e, n);
  });
};
d.setLibRoot = function(n) {
  d.libRoot = n;
};
d.registerLib = function(n, t) {
  d.libMap || (d.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), d.libMap[n] = t;
};
function Ql(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i } = n;
    if (d(i ? `#${i}` : `link[href="${s}"]`).length) {
      t();
      return;
    }
    const o = document.createElement("link");
    o.onload = () => {
      t();
    }, o.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${s}`));
    }, o.rel = "stylesheet", o.href = s, i && (o.id = i), d("head").append(o);
  });
}
function tc(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i } = n, r = d(i ? `#${i}` : `script[src="${s}"]`);
    if (r.length) {
      if (r.dataset("loaded"))
        t();
      else {
        const g = r.data("loadCalls") || [];
        g.push(t), r.data("loadCalls", g);
      }
      return;
    }
    const { async: o = !0, defer: a = !1, noModule: l = !1, type: c, integrity: u } = n, h = document.createElement("script");
    h.async = o, h.defer = a, h.noModule = l, c && (h.type = c), u && (h.integrity = u), h.onload = () => {
      t(), (d(h).dataset("loaded", !0).data("loadCalls") || []).forEach((f) => f()), d(h).removeData("loadCalls");
    }, h.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${s}`));
    }, d("head").append(h), h.src = s;
  });
}
d.getLib = async function(n, t, e) {
  var f;
  typeof n == "string" && (n = ((f = d.libMap) == null ? void 0 : f[n]) || { src: n });
  let s = Array.isArray(n) ? { src: n } : d.extend({}, n);
  typeof t == "function" ? s.success = t : t && d.extend(s, t), e && (s.success = e);
  let { src: i } = s;
  const { name: r, success: o } = s, a = d.libMap && r ? d.libMap[r] : null;
  if (a && (s = d.extend({}, a, s), i = a.src || s.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = s;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r, u = () => c ? window[c] : void 0;
  typeof l == "string" && (l = () => !!u());
  const h = () => (o == null || o(), u());
  if (typeof l == "function" && await l())
    return h();
  const { root: g = d.libRoot } = s;
  for (let _ of i) {
    typeof _ == "string" && (_ = { src: _ });
    let { src: m } = _;
    g && (m = `${g}${g.endsWith("/") || m.startsWith("/") ? "" : "/"}${m}`);
    const y = {
      ...s,
      ..._,
      src: m
    };
    if (_.type === "css" || !_.type && m.endsWith(".css")) {
      await Ql(y);
      continue;
    }
    await tc(y);
  }
  return h();
};
d.getScript = d.getLib;
function mo(n, t) {
  const e = d(n), s = new ResizeObserver(t);
  return e.each((i, r) => {
    s.observe(r);
  }), s;
}
d.fn.resize = function(n) {
  return mo(this, n);
};
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: de,
  isVisible: Xn,
  listenResize: mo,
  runJS: fi,
  scrollIntoView: go
}, Symbol.toStringTag, { value: "Module" })), _o = {};
function rt(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    rt(e, n[e]);
  }) : t && (_o[n.toLowerCase()] = t);
}
function ec(n) {
  return _o[n.toLowerCase()];
}
class Z extends j {
  constructor() {
    super(...arguments), this._gid = ht();
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
  i18n(t, e, s) {
    const { i18nData: i } = this;
    return O(i, t, e, s, this.props.lang, this.constructor.NAME) ?? O(i, t, e, s, this.props.lang) ?? `{i18n:${t}}`;
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
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, ...h } = t, g = new Set(this.constructor.customProps), f = "dangerouslySetInnerHTML", _ = Object.keys(h).reduce((m, y) => {
      if (!g.has(y) && (y === f || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(y))) {
        const v = h[y];
        m[y] = y !== f && v && typeof v == "object" ? JSON.stringify(v) : v;
      }
      return m;
    }, {});
    return { ref: o, className: x(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ..._, ...s, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? ec(e) : e) || e;
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
    return r && ([e, i, s] = r), mt(e, i, s);
  }
}
Z.HElement = !0;
Z.customProps = [];
var nc = 0;
function p(n, t, e, s, i, r) {
  t || (t = {});
  var o, a, l = t;
  if ("ref" in l)
    for (a in l = {}, t)
      a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --nc, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return H.vnode && H.vnode(c), c;
}
class Ce extends j {
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
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ p(Z, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function sc(n) {
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
    ...u
  } = n, h = [e], g = { ...s }, f = [], _ = [];
  return i.forEach((m) => {
    const y = [];
    if (typeof m == "string" && a && a[m] && (m = a[m]), typeof m == "function")
      if (l)
        y.push(...l.call(o, m, f, ...r));
      else {
        const v = m.call(o, f, ...r);
        v && (Array.isArray(v) ? y.push(...v) : y.push(v));
      }
    else
      y.push(m);
    y.forEach((v) => {
      v != null && (typeof v == "object" && !bt(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? f.push(
        /* @__PURE__ */ p("div", { className: x(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? _.push(v.__html) : (v.style && Object.assign(g, v.style), v.className && h.push(v.className), v.children && f.push(v.children), v.attrs && Object.assign(u, v.attrs)) : f.push(v));
    });
  }), _.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: x(h),
    style: g,
    ...u
  }, f];
}
function yo({
  tag: n = "div",
  ...t
}) {
  const [e, s] = sc(t);
  return mt(n, e, ...s);
}
function As(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => As({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ p("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ p(Ce, { ...z(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = z({ children: o.map((a) => As({ ...i, content: a, generatorThis: s, generatorArgs: e })) }, r)), /* @__PURE__ */ p(Z, { ...z(i, r) });
  }
  return bt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function W(n) {
  const t = As(n);
  return t == null || typeof t == "boolean" ? null : bt(t) ? t : /* @__PURE__ */ p(xe, { children: t });
}
const ar = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function X(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (bt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(ar(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? ar(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ p("i", { className: x(i), ...s });
}
function ic(n) {
  return this.getChildContext = () => n.context, n.children;
}
function vo(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    ve(null, t._temp), t._temp = null, t._container = null;
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
  }), ve(
    mt(ic, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function rc(n, t) {
  const e = mt(vo, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
rt({
  HElement: Z,
  element: Z,
  HtmlContent: Ce,
  html: Ce,
  CustomContent: W,
  custom: W,
  Icon: X,
  Portal: vo
});
class U extends Ht {
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
    const { element: e } = this, { Component: s, replace: i } = this.constructor, { $replace: r = i, ...o } = this.setOptions(t), a = {
      ref: this._ref,
      ...o
    };
    if (r && s.HElement && (e.tagName.toLowerCase() === r || r === !0)) {
      const l = Array.from(e.attributes).reduce((c, u) => {
        const { name: h, value: g } = u;
        return c[h === "class" ? "className" : h] = g, c;
      }, {});
      return ve(
        mt(s, z({ component: e.tagName.toLowerCase(), attrs: l }, a)),
        e.parentElement,
        e
      );
    }
    ve(
      mt(s, a),
      e
    );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return ve(mt(this.Component, t), e), e.innerHTML;
  }
}
U.replace = !1;
class K extends Z {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ p(X, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ p(X, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ p("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ p(X, { icon: l }),
      e ? null : c ? /* @__PURE__ */ p("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: s, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: u } = t;
    return ["btn", e, s, {
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
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      type: l ? void 0 : "button",
      disabled: !l && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = x([c.className, o])), r || (s !== void 0 && (c[l ? "href" : "data-url"] = s), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const oc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: K
}, Symbol.toStringTag, { value: "Module" }));
rt(oc);
let et = class extends Z {
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
        return /* @__PURE__ */ p(W, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ p(W, { "z-key": e.key, "z-item": s, "z-type": r, content: { ...e } });
    if (l = l || a.default || Z, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = z({}, c, e), l = l[0];
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: u } = this, { defaultItemProps: h = {}, defaultItemPropsMap: g = {} } = this.constructor;
    if (e = z(
      { type: l },
      h,
      g[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", u] },
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
et.NAME = "";
et.ITEM_NAME = "item";
et.TAG = "ul";
et.ItemComponents = {
  default: Z,
  divider: [Z, { className: "divider" }],
  space: [Z, (n) => {
    const { space: t, flex: e, style: s } = n;
    return {
      style: { width: t, height: t, flex: e, ...s }
    };
  }]
};
et.defaultItemProps = {
  component: "li"
};
et.defaultItemPropsMap = {};
et.defaultItemType = "item";
et.defaultProps = {
  itemKey: "id"
};
const ac = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: et
}, Symbol.toStringTag, { value: "Module" }));
class pi extends U {
}
pi.NAME = "CommonList";
pi.Component = et;
pi.replace = et.TAG;
rt(ac);
function lc(n) {
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
function cc(n) {
  const [t, e, s] = typeof n == "string" ? lc(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function lr(n, t) {
  return cc(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function cr(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function hc(n, t, e) {
  n = n % 360 / 360, t = cr(t), e = cr(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function uc(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function dc(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let Qn = class extends j {
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
      code: u,
      maxTextLength: h = 2,
      src: g,
      hueDistance: f = 43,
      saturation: _ = 0.4,
      lightness: m = 0.6,
      children: y,
      ...v
    } = this.props, b = ["avatar", t], w = { ...e, background: o, color: a };
    let S = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, S = s) : (b.push(`size-${s}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? b.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let k;
    if (g)
      b.push("has-img"), k = /* @__PURE__ */ p("img", { className: "avatar-img", src: g, alt: c });
    else if (l)
      b.push("has-icon"), k = /* @__PURE__ */ p(X, { icon: l });
    else if (c != null && c.length) {
      const T = dc(c, h), A = T.length;
      if (b.push("has-text", `has-text-${A}`), o === void 0) {
        const M = u ?? c, E = (typeof M == "number" ? M : uc(M)) * f % 360;
        if (w.background = `hsl(${E},${_ * 100}%,${m * 100}%)`, !a) {
          const P = hc(E, _, m);
          w.color = lr(P);
        }
      } else
        !a && o && (w.color = lr(o));
      let I;
      S && S < 16 * A && (I = { transform: `scale(${S / (16 * A)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ p("div", { "data-actualSize": S, className: "avatar-text", style: I, children: T });
    }
    return /* @__PURE__ */ p(
      "div",
      {
        className: x(b),
        style: w,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Qn
}, Symbol.toStringTag, { value: "Module" }));
let wt = class extends et {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    e.type || (e = d.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = z({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = z({}, e, ro({ btnType: s, size: i }));
  }
};
wt.NAME = "btn-group";
wt.TAG = "nav";
wt.ItemComponents = {
  ...et.ItemComponents,
  default: K
};
wt.defaultItemProps = {
  component: void 0
};
const ts = class bo extends wt {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = x(s.className, `gap-${e}`) : s.style = d.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = z({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = z(s, r)), /* @__PURE__ */ p(bo, { ...r });
  }
};
ts.NAME = "toolbar";
ts.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
ts.ItemComponents = {
  ...wt.ItemComponents,
  btnGroup: wt,
  "btn-group": wt
};
let Ct = ts;
const pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: Ct
}, Symbol.toStringTag, { value: "Module" }));
class es extends Z {
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
      /* @__PURE__ */ p("label", { htmlFor: r, children: /* @__PURE__ */ p(W, { content: o }) }, "label")
    ];
  }
}
class gc extends es {
}
gc.defaultProps = {
  type: "radio"
};
class mc extends es {
}
mc.defaultProps = {
  type: "switch"
};
class Ue extends Z {
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
    } = t, u = [];
    if (i && u.push(/* @__PURE__ */ p(W, { content: i }, "toggleIcon")), a !== void 0 && u.push(/* @__PURE__ */ p(es, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && u.push(/* @__PURE__ */ p(X, { className: "item-icon", icon: e }, "icon")), s) {
      const g = typeof s == "function" ? s.call(this, t) : s;
      g && (g.className = x("item-avatar", g.className), u.push(/* @__PURE__ */ p(Qn, { ...g }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ p(W, { content: r }, "leading") : null;
    return h && u.push(h), c ? u.length ? [
      /* @__PURE__ */ p("div", { className: x("item-leading", o), children: u }, "leading")
    ] : [] : u;
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
      content: u,
      contentClass: h,
      contentAttrs: g
    } = t, f = l && !e, _ = f ? "a" : "div";
    let { title: m, text: y } = t;
    return m === void 0 && (m = y, y = null), [
      /* @__PURE__ */ p("div", { className: x("item-content", h), ...g, children: [
        m ? /* @__PURE__ */ p(_, { className: x("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ p(W, { content: m }) }, "title") : null,
        o ? /* @__PURE__ */ p("div", { className: x("item-subtitle", a), children: /* @__PURE__ */ p(W, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ p("div", { className: x("item-text text", s), children: y }, "text") : null,
        u ? /* @__PURE__ */ p(W, { content: u }, "extraContent") : null
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
    r && a.push(/* @__PURE__ */ p(X, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(Ct.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = s ? /* @__PURE__ */ p(W, { content: s }, "trailing") : null;
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
      disabled: u,
      divider: h,
      checked: g,
      multiline: f,
      title: _,
      subtitle: m,
      hint: y,
      selected: v
    } = t, b = s || (o && !a ? "a" : "div"), w = b === "a", S = z({
      key: "item",
      title: y,
      className: x("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: v,
        checked: g,
        multiline: f ?? !!(_ && m),
        state: w && !u
      })
    }, w ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ p(b, { ...S, children: [
      this._renderLeading(t),
      this._renderContent(t, w),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Mn(s)]];
  }
}
class sn extends et {
  constructor(t) {
    super(t), this._activeSet = new Nn(() => {
      const e = /* @__PURE__ */ new Set(), { active: s } = this.props;
      Array.isArray(s) ? s.forEach((r) => e.add(r)) : typeof s == "string" ? e.add(s) : s && Object.keys(s).forEach((r) => s[r] && e.add(r));
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
        const s = await li(t, [this], { throws: !0 });
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
    return t === void 0 && (t = !this.isAllChecked()), this.toggleChecked(this._renderedItems.map((e) => e.key), t);
  }
  async toggleChecked(t, e) {
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
    Object.keys(s).length && await this.changeState((i) => ({
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
    typeof t == "string" && (t = [t]), t.length && (e = e ?? !this.isActive(t[0]), await this.changeState((s) => ({ activeMap: this.props.multipleActive ? t.reduce((r, o) => (r[o] = e, r), { ...s.activeMap }) : { [t[0]]: e } }), () => {
      var s;
      (s = this.props.onActive) == null || s.call(this, t, e);
    }));
  }
  getNextItem(t, e, s = 1, i = void 0) {
    i = i || this._renderedItems;
    const r = i.length;
    if (t === void 0)
      return i[s ? 0 : r - 1];
    let o = i.findIndex((l) => l.key === t);
    if (o < 0 || r < 2)
      return i[s ? 0 : r - 1];
    let a = 0;
    for (e = e || ((l) => l.type === "item" && !l.disabled); a < r; ) {
      o = (o + s + r) % r;
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
    const s = this.getNextItem(this.getActiveKey(), t, e);
    s && this.toggleActive(s.key);
  }
  activePrev(t) {
    this.activeNext(t, -1);
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
    const { divider: i, multiline: r } = t;
    e = z({}, ro({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      l && (e.checked = this.isChecked(e.key, s, e.checked), typeof l == "object" && (e.checkbox = e.checkbox ? d.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
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
    if (s === "any" ? s = ".item-checkbox,.item-content,.item-icon" : s === !0 && (s = ".item-checkbox"), s && !(e != null && e.renderedItem.disabled) && e && t.target.closest(s)) {
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
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: s } = this.state;
    return s && e.push(s), e;
  }
}
sn.ItemComponents = {
  ...et.ItemComponents,
  default: Z,
  item: Ue,
  heading: Ue
};
sn.NAME = "list";
const ms = "```ZUI_STR\n";
class rn {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new rn(this._id, "session")), this._altStorage);
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
      if (s.startsWith(ms))
        return s.substring(ms.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${ms}${e}` : JSON.stringify(e));
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
const Is = new rn("DEFAULT");
function _c(n, t = "local") {
  return new rn(n, t);
}
Object.assign(Is, { create: _c });
function wo(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), wo(s, t);
  });
}
function yc(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function _s(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function gi(n, t, e, s, i = 0, r) {
  return n.reduce((o, a, l) => {
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
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? gi(a.items, t, e, o, i + 1, h) : o;
  }, s);
}
function vc(n, t, e = /* @__PURE__ */ new Map()) {
  return gi(n, t, (s, i) => (s.set(i.keyPath, i), s), e);
}
class Te extends sn {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (d.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = Is.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && _s(o).forEach((a) => {
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
    return this._itemMap || (this._itemMap = vc(this._items, this.props.itemKey)), this._itemMap;
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
  async toggle(t, e) {
    const s = this.isExpanded(t);
    if (e === s)
      return;
    e === void 0 && (e = !s);
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
      return l = e ? _s(t).reduce((c, u) => (c[u] = e, c), l) : l, this.isHoverTrigger && !e && Object.keys(l).forEach((c) => {
        !l[c] || !c.startsWith(`${t}:`) || _s(t).forEach((u) => {
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
    return Array.from(this.getItemMap().values()).reduce((t, { keyPath: e, data: s }) => {
      const i = this.state.checked[e];
      return (i === !0 || s.checked && i !== !1) === !0 && t.push(e), t;
    }, []);
  }
  isChecked(t, e, s = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.isRoot ? this.state.checked[t] ?? i.checked ?? s : this.props.checkedState[`${this.props.parentKey}:${t}`] ?? i.checked ?? s;
  }
  async toggleChecked(t, e) {
    let s;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), s = t.reduce((a, l) => (a[l] = e, a), {});
    } else
      typeof t == "object" ? s = t : (e === void 0 && (e = !this.isChecked(t)), s = { [t]: e });
    if (!Object.keys(s).length)
      return;
    if (this.isRoot) {
      const a = this.getItemMap();
      await this.changeState(({ checked: l }) => {
        const c = (u) => s[u.keyPath] ?? l[u.keyPath] ?? u.data.checked ?? !1;
        return Object.keys(s).forEach((u) => {
          e = s[u];
          const h = a.get(u);
          h && (wo(h, (g) => {
            c(g) !== e && (s[g.keyPath] = e);
          }), yc(h, (g) => {
            const { children: f } = g, _ = f.reduce((m, y) => (c(y) && m++, m), 0);
            s[g.keyPath] = _ === f.length ? !0 : _ ? "indeterminate" : !1;
          }));
        }), {
          checked: {
            ...l,
            ...s
          }
        };
      }, () => {
        var c;
        const l = this.state.checked;
        (c = this.props.onCheck) == null || c.call(this, s, Object.keys(l).filter((u) => l[u] === !0));
      });
      return;
    }
    const { parentKey: i, onCheck: r } = this.props, o = Object.keys(s).reduce((a, l) => (a[`${i !== void 0 ? `${i}:` : ""}${l}`] = s[l], a), {});
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
    if (typeof t == "string" && (t = [t]), t = t.map((s) => this.getKeyPath(s)), this.isRoot) {
      await super.toggleActive(t, e), this.props.toggleOnActive && t.forEach((s) => {
        this.isActive(s) && !this.isExpanded(s) && this.toggle(s, !0);
      });
      return;
    }
    this.props.onActive.call(this, t, e ?? !this.isActive(t[0]));
  }
  activeNext(t, e = 1) {
    const s = this.getNextItem(this.getActiveKey(), t, e);
    s && this.toggleActive(s._keyPath);
  }
  getNextItem(t, e, s = 1, i = void 0) {
    return i = i || gi(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
      _keyPath: o.keyPath,
      type: "item",
      ...o.data,
      ...this._renderedItemMap.get(o.keyPath),
      key: o.keyPath
    }), r), []), super.getNextItem(t, e, s, i);
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
    this._storeID && Is.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, s, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return z(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: s.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${s.key}` : s.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      checkedState: t.checkedState || this.state.checked,
      onCheck: a ? this._handleNestedCheck : t.onCheck,
      onToggle: a ? this._handleNestedToggle : t.onToggle,
      beforeRenderItem: a ? this._beforeRenderNestedItem : t.beforeRenderItem,
      active: a ? this.getActiveKeys() : t.active,
      onActive: a ? this.toggleActive.bind(this) : t.onActive
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
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ p("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ p("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (s = /* @__PURE__ */ p(X, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ p("span", { className: x(`${this.name}-toggle nested-toggle-icon`, i), children: s });
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
      z(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return z(i, {
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
    return e = z(e, {
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
    if (!e.items || i.defaultPrevented || l && s === void 0 || !l && i.type !== "click" || o.closest(".not-nested-toggle") || a && !e.disabled && !o.closest(a) || !a && !e.disabled && o.closest("a,.btn,.item-checkbox,.open-url") && !o.closest(".nested-toggle-icon,.item-icon"))
      return t;
    const c = typeof s == "boolean" ? s : void 0;
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
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = z(super._getProps(t), {
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
}
Te.defaultProps = {
  ...sn.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Te.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "beforeRenderItem", "onToggle", "checkbox", "getItem", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive"];
const Ne = class Co extends Te {
  _getClassName(t) {
    return [super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact }];
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: s, maxHeight: i } = t, r = z({}, e, s || i ? { style: { height: s, maxHeight: i } } : null);
    return r.className = x(this._getWrapClass(t), r.className), r;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ p(W, { content: t.header, generatorThis: this }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ p(W, { content: t.footer, generatorThis: this }, "footer");
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ p("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : super.render(t);
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = z(s, r)), /* @__PURE__ */ p(Co, { ...r });
  }
};
Ne.NAME = "menu";
Ne.TAG = "menu";
Ne.inheritNestedProps = [...Te.inheritNestedProps, "compact"];
Ne.ItemComponents = {
  ...Te.ItemComponents,
  item: [Ue, { innerComponent: "a" }]
};
Ne.defaultProps = {
  ...Te.defaultProps,
  scrollbarHover: !0
};
let ft = Ne;
let ns = class extends j {
  constructor(t) {
    super(t), this._input = q(), this._timer = 0, this._handleClearBtnClick = (e) => {
      e.stopPropagation(), this.clear(e);
    }, this._handleChange = (e) => {
      const s = this.state.value, i = e.target.value, { onChange: r, delay: o } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (o ? (this._clearTimer(), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, o)) : r(i, e));
      });
    }, this._handleFocus = (e) => {
      const s = e.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${ht()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = ho(t, {
        clear: {
          keys: "Escape",
          handler: (s) => {
            this.clear(s);
          }
        },
        enter: {
          keys: "Enter",
          handler: (s) => {
            var i, r;
            (r = (i = this.props).onEnter) == null || r.call(i, this.state.value, s);
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
      const { onChange: s, onClear: i } = this.props;
      i == null || i(t), this.focus(), e.trim() !== "" && (s == null || s("", t));
    });
  }
  _clearTimer() {
    this._timer && clearTimeout(this._timer), this._timer = 0;
  }
  render(t, e) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: g, clearIcon: f, value: _, compact: m, prefixClass: y, suffixClass: v } = t, { focus: b, value: w } = e, { id: S } = this, k = _ ?? w, T = typeof k != "string" || !k.trim().length;
    let A, I, M;
    return g && (M = g === !0 ? /* @__PURE__ */ p("span", { class: "magnifier" }) : /* @__PURE__ */ p(X, { icon: g })), !h && g && (A = /* @__PURE__ */ p("label", { for: S, class: x("input-control-prefix", y), children: M }, "prefix")), f && !T ? I = /* @__PURE__ */ p(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ p("span", { class: "close" }) : /* @__PURE__ */ p(X, { icon: f })
      }
    ) : h && g && (I = M), I && (I = /* @__PURE__ */ p("label", { for: S, class: x("input-control-suffix", v), children: I }, "suffix")), /* @__PURE__ */ p("div", { class: x("search-box input-control", r, { focus: b, empty: T, compact: m, "has-prefix-icon": A, "has-suffix-icon": I }), style: o, children: [
      A,
      /* @__PURE__ */ p(
        "input",
        {
          ref: this._input,
          id: S,
          type: "text",
          class: x("form-control", { "rounded-full": c, "size-sm": m }, i),
          style: s,
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
ns.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: ns
}, Symbol.toStringTag, { value: "Module" }));
let _t = class extends ft {
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
    var s;
    if (!this.isRoot)
      return;
    const t = d(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((s = this._searchKeys) != null && s.length) && !e.length && !t.children(".item").not(".is-not-match").length);
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
    return i && (this.isRoot && this.props.limit && this._showCount >= this.props.limit ? !1 : (i.hidden = !this._isItemMatch(t, e, s, t.parentKey), i.hidden || this._showCount++, i));
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
    return typeof e == "object" && d.extend(s, e), t.search !== void 0 && (s.value = this._searchKeys.join(" "), s.disabled = !0), /* @__PURE__ */ p(ns, { ...s }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, s = this.isRoot && t.searchBox && t.searchPlacement !== "bottom", { noMatchHint: i } = t;
    return !e && !s && !i ? null : [
      i ? /* @__PURE__ */ p("div", { className: "search-menu-no-match-hint", children: i }, "noMatchHint") : null,
      e || s ? /* @__PURE__ */ p("header", { className: "search-menu-header", children: [
        e ? super._renderWrapperHeader(t) : null,
        s ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, s = this.isRoot && t.searchBox && t.searchPlacement === "bottom";
    return !e && !s ? null : /* @__PURE__ */ p("footer", { className: "search-menu-footer", children: [
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
    return d.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, s = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((u, h) => {
        h && (o.push(/* @__PURE__ */ p("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
_t.inheritNestedProps = [...ft.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
_t.defaultProps = {
  ...ft.defaultProps,
  defaultNestedShow: !0,
  wrap: !0
};
const wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: ft,
  SearchMenu: _t
}, Symbol.toStringTag, { value: "Module" }));
class mi extends U {
}
mi.NAME = "Menu";
mi.Component = ft;
mi.replace = ft.TAG;
class _i extends U {
}
_i.NAME = "SearchMenu";
_i.Component = _t;
_i.replace = _t.TAG;
rt(wc);
function Cc({
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
  iconClass: u,
  ...h
}) {
  let g;
  a === !0 ? g = /* @__PURE__ */ p(K, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ p("span", { class: "close" }) }) : bt(a) ? g = a : typeof a == "object" && (g = /* @__PURE__ */ p(K, { ...a, onClick: l }));
  const f = Ct.render(e, []);
  return /* @__PURE__ */ p("div", { className: x("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ p(X, { icon: c, className: x("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ p(W, { content: i }) : /* @__PURE__ */ p("div", { className: x("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ p(W, { content: s }) : s && /* @__PURE__ */ p("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ p("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    g,
    o
  ] });
}
function Sc(n) {
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
function kc({
  margin: n,
  type: t,
  placement: e,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return typeof a.html == "string" && (a.content = { html: a.html }, delete a.html), /* @__PURE__ */ p(
    Cc,
    {
      className: x("messager", r, t, s === !0 ? Sc(e) : s, i ? "in" : ""),
      ...a
    }
  );
}
var xc = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Tc = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ie = (n, t, e) => (xc(n, t, "access private method"), e), ee, pe;
class yi extends U {
  constructor() {
    super(...arguments), Tc(this, ee), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), Ie(this, ee, pe).call(this, () => {
      this._show = !0, this.render(), Ie(this, ee, pe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Ie(this, ee, pe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Ie(this, ee, pe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Ie(this, ee, pe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ee = /* @__PURE__ */ new WeakSet();
pe = function(n, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, t);
};
yi.NAME = "MessagerItem";
yi.Component = kc;
const on = class So extends Ht {
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
      const t = this._getHolder(), e = new yi(t, this.options);
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
    let s = e.find(`#messager-${this.gid}`);
    return s.length || (s = d(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = s[0]), s[0];
  }
  static show(t, e) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, r = { type: e, key: `messager_${ht()}`, ...i };
    r.type && d.extend(r, this.TypeOptions[r.type]);
    const o = So.ensure(s || "body", r);
    return o.hide(), o.show(), o;
  }
};
on.NAME = "messager";
on.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
on.MULTI_INSTANCE = !0;
on.TypeOptions = {};
let Lu = on;
class vi extends j {
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
vi.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const Nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: vi
}, Symbol.toStringTag, { value: "Module" }));
rt(Nc);
let ss = class extends j {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, g = s / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = s * f);
    const _ = (s - f) / 2;
    return /* @__PURE__ */ p("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ p("circle", { cx: g, cy: g, r: _, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ p("circle", { cx: g, cy: g, r: _, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * _ * 2, "stroke-dashoffset": Math.PI * _ * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ p("text", { x: c ?? g, y: u ?? g + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${_}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
ss.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class ko extends U {
}
ko.NAME = "ProgressCircle";
ko.Component = ss;
const Ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: ss
}, Symbol.toStringTag, { value: "Module" }));
rt(Ec);
class xo extends U {
}
xo.NAME = "Avatar";
xo.Component = Qn;
rt(fc);
class To extends U {
}
To.NAME = "BtnGroup";
To.Component = wt;
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: wt
}, Symbol.toStringTag, { value: "Module" }));
rt($c);
const No = Symbol("EVENT_PICK");
class bi extends j {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!d(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let r = s === "open" ? !0 : void 0;
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
    const { state: e, className: s, disabled: i, readonly: r, pickerName: o, empty: a } = t, { open: l } = e;
    return x(
      "pick",
      s,
      o ? `${o}-pick` : "",
      l && "is-open focus",
      i && "disabled",
      r && "readonly",
      a ? "is-empty-value" : ""
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
        d(`#${o}`).val(s);
      else
        return /* @__PURE__ */ p("input", { id: o, type: "hidden", className: "pick-value", name: e, value: s, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    d(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, s) => {
      if (typeof s == "symbol")
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
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && d(`#${e}`).trigger("change", No), this._skipTriggerChange = !1);
  }
  render(t) {
    return mt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Gt = Math.min, lt = Math.max, In = Math.round, pn = Math.floor, Yt = (n) => ({
  x: n,
  y: n
}), Mc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ac = {
  start: "end",
  end: "start"
};
function Ps(n, t, e) {
  return lt(n, Gt(t, e));
}
function Ee(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function Jt(n) {
  return n.split("-")[0];
}
function $e(n) {
  return n.split("-")[1];
}
function Eo(n) {
  return n === "x" ? "y" : "x";
}
function wi(n) {
  return n === "y" ? "height" : "width";
}
function an(n) {
  return ["top", "bottom"].includes(Jt(n)) ? "y" : "x";
}
function Ci(n) {
  return Eo(an(n));
}
function Ic(n, t, e) {
  e === void 0 && (e = !1);
  const s = $e(n), i = Ci(n), r = wi(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Pn(o)), [o, Pn(o)];
}
function Pc(n) {
  const t = Pn(n);
  return [Rs(n), t, Rs(t)];
}
function Rs(n) {
  return n.replace(/start|end/g, (t) => Ac[t]);
}
function Rc(n, t, e) {
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
function Dc(n, t, e, s) {
  const i = $e(n);
  let r = Rc(Jt(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Rs)))), r;
}
function Pn(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Mc[t]);
}
function Lc(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function $o(n) {
  return typeof n != "number" ? Lc(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Rn(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function hr(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = an(t), o = Ci(t), a = wi(o), l = Jt(t), c = r === "y", u = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, g = s[a] / 2 - i[a] / 2;
  let f;
  switch (l) {
    case "top":
      f = {
        x: u,
        y: s.y - i.height
      };
      break;
    case "bottom":
      f = {
        x: u,
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
  switch ($e(t)) {
    case "start":
      f[o] -= g * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += g * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const zc = async (n, t, e) => {
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
    x: u,
    y: h
  } = hr(c, s, l), g = s, f = {}, _ = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: y,
      fn: v
    } = a[m], {
      x: b,
      y: w,
      data: S,
      reset: k
    } = await v({
      x: u,
      y: h,
      initialPlacement: s,
      placement: g,
      strategy: i,
      middlewareData: f,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    u = b ?? u, h = w ?? h, f = {
      ...f,
      [y]: {
        ...f[y],
        ...S
      }
    }, k && _ <= 50 && (_++, typeof k == "object" && (k.placement && (g = k.placement), k.rects && (c = k.rects === !0 ? await o.getElementRects({
      reference: n,
      floating: t,
      strategy: i
    }) : k.rects), {
      x: u,
      y: h
    } = hr(c, g, l)), m = -1);
  }
  return {
    x: u,
    y: h,
    placement: g,
    strategy: i,
    middlewareData: f
  };
};
async function Si(n, t) {
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
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: g = !1,
    padding: f = 0
  } = Ee(t, n), _ = $o(f), y = a[g ? h === "floating" ? "reference" : "floating" : h], v = Rn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), b = h === "floating" ? {
    x: s,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), S = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Rn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (v.top - k.top + _.top) / S.y,
    bottom: (k.bottom - v.bottom + _.bottom) / S.y,
    left: (v.left - k.left + _.left) / S.x,
    right: (k.right - v.right + _.right) / S.x
  };
}
const Fc = (n) => ({
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
      padding: u = 0
    } = Ee(n, t) || {};
    if (c == null)
      return {};
    const h = $o(u), g = {
      x: e,
      y: s
    }, f = Ci(i), _ = wi(f), m = await o.getDimensions(c), y = f === "y", v = y ? "top" : "left", b = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", S = r.reference[_] + r.reference[f] - g[f] - r.floating[_], k = g[f] - r.reference[f], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let A = T ? T[w] : 0;
    (!A || !await (o.isElement == null ? void 0 : o.isElement(T))) && (A = a.floating[w] || r.floating[_]);
    const I = S / 2 - k / 2, M = A / 2 - m[_] / 2 - 1, E = Gt(h[v], M), P = Gt(h[b], M), R = E, L = A - m[_] - P, $ = A / 2 - m[_] / 2 + I, F = Ps(R, $, L), Q = !l.arrow && $e(i) != null && $ !== F && r.reference[_] / 2 - ($ < R ? E : P) - m[_] / 2 < 0, pt = Q ? $ < R ? $ - R : $ - L : 0;
    return {
      [f]: g[f] + pt,
      data: {
        [f]: F,
        centerOffset: $ - F - pt,
        ...Q && {
          alignmentOffset: pt
        }
      },
      reset: Q
    };
  }
}), Oc = function(n) {
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
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: g,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: m = !0,
        ...y
      } = Ee(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const v = Jt(i), b = Jt(a) === a, w = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = g || (b || !m ? [Pn(a)] : Pc(a));
      !g && _ !== "none" && S.push(...Dc(a, m, _, w));
      const k = [a, ...S], T = await Si(t, y), A = [];
      let I = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (u && A.push(T[v]), h) {
        const R = Ic(i, o, w);
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
        let $ = (E = I.filter((F) => F.overflows[0] <= 0).sort((F, Q) => F.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!$)
          switch (f) {
            case "bestFit": {
              var P;
              const F = (P = I.map((Q) => [Q.placement, Q.overflows.filter((pt) => pt > 0).reduce((pt, cs) => pt + cs, 0)]).sort((Q, pt) => Q[1] - pt[1])[0]) == null ? void 0 : P[0];
              F && ($ = F);
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
async function Hc(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = Jt(e), a = $e(e), l = an(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = Ee(t, n);
  let {
    mainAxis: g,
    crossAxis: f,
    alignmentAxis: _
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
  return a && typeof _ == "number" && (f = a === "end" ? _ * -1 : _), l ? {
    x: f * u,
    y: g * c
  } : {
    x: g * c,
    y: f * u
  };
}
const Wc = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      var e, s;
      const {
        x: i,
        y: r,
        placement: o,
        middlewareData: a
      } = t, l = await Hc(t, n);
      return o === ((e = a.offset) == null ? void 0 : e.placement) && (s = a.arrow) != null && s.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, jc = function(n) {
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
      } = Ee(n, t), c = {
        x: e,
        y: s
      }, u = await Si(t, l), h = an(Jt(i)), g = Eo(h);
      let f = c[g], _ = c[h];
      if (r) {
        const y = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", b = f + u[y], w = f - u[v];
        f = Ps(b, f, w);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = _ + u[y], w = _ - u[v];
        _ = Ps(b, _, w);
      }
      const m = a.fn({
        ...t,
        [g]: f,
        [h]: _
      });
      return {
        ...m,
        data: {
          x: m.x - e,
          y: m.y - s
        }
      };
    }
  };
}, Bc = function(n) {
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
      } = Ee(n, t), l = await Si(t, a), c = Jt(e), u = $e(e), h = an(e) === "y", {
        width: g,
        height: f
      } = s.floating;
      let _, m;
      c === "top" || c === "bottom" ? (_ = c, m = u === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (m = c, _ = u === "end" ? "top" : "bottom");
      const y = f - l[_], v = g - l[m], b = !t.middlewareData.shift;
      let w = y, S = v;
      if (h) {
        const T = g - l.left - l.right;
        S = u || b ? Gt(v, T) : T;
      } else {
        const T = f - l.top - l.bottom;
        w = u || b ? Gt(y, T) : T;
      }
      if (b && !u) {
        const T = lt(l.left, 0), A = lt(l.right, 0), I = lt(l.top, 0), M = lt(l.bottom, 0);
        h ? S = g - 2 * (T !== 0 || A !== 0 ? T + A : lt(l.left, l.right)) : w = f - 2 * (I !== 0 || M !== 0 ? I + M : lt(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: S,
        availableHeight: w
      });
      const k = await i.getDimensions(r.floating);
      return g !== k.width || f !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Me(n) {
  return Mo(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ut(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Wt(n) {
  var t;
  return (t = (Mo(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function Mo(n) {
  return n instanceof Node || n instanceof ut(n).Node;
}
function Tt(n) {
  return n instanceof Element || n instanceof ut(n).Element;
}
function Nt(n) {
  return n instanceof HTMLElement || n instanceof ut(n).HTMLElement;
}
function ur(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof ut(n).ShadowRoot;
}
function ln(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = St(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function Vc(n) {
  return ["table", "td", "th"].includes(Me(n));
}
function ki(n) {
  const t = xi(), e = St(n);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function Uc(n) {
  let t = Zt(n);
  for (; Nt(t) && !Se(t); ) {
    if (ki(t))
      return t;
    t = Zt(t);
  }
  return null;
}
function xi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Se(n) {
  return ["html", "body", "#document"].includes(Me(n));
}
function St(n) {
  return ut(n).getComputedStyle(n);
}
function is(n) {
  return Tt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Zt(n) {
  if (Me(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ur(n) && n.host || // Fallback.
    Wt(n)
  );
  return ur(t) ? t.host : t;
}
function Ao(n) {
  const t = Zt(n);
  return Se(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Nt(t) && ln(t) ? t : Ao(t);
}
function Ke(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Ao(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = ut(i);
  return r ? t.concat(o, o.visualViewport || [], ln(i) ? i : [], o.frameElement && e ? Ke(o.frameElement) : []) : t.concat(i, Ke(i, [], e));
}
function Io(n) {
  const t = St(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Nt(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = In(e) !== r || In(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function Ti(n) {
  return Tt(n) ? n : n.contextElement;
}
function be(n) {
  const t = Ti(n);
  if (!Nt(t))
    return Yt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Io(t);
  let o = (r ? In(e.width) : e.width) / s, a = (r ? In(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Kc = /* @__PURE__ */ Yt(0);
function Po(n) {
  const t = ut(n);
  return !xi() || !t.visualViewport ? Kc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qc(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ut(n) ? !1 : t;
}
function ce(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = Ti(n);
  let o = Yt(1);
  t && (s ? Tt(s) && (o = be(s)) : o = be(n));
  const a = qc(r, e, s) ? Po(r) : Yt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const g = ut(r), f = s && Tt(s) ? ut(s) : s;
    let _ = g, m = _.frameElement;
    for (; m && s && f !== _; ) {
      const y = be(m), v = m.getBoundingClientRect(), b = St(m), w = v.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x, S = v.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, u *= y.x, h *= y.y, l += w, c += S, _ = ut(m), m = _.frameElement;
    }
  }
  return Rn({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
const Gc = [":popover-open", ":modal"];
function Ni(n) {
  return Gc.some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
function Yc(n) {
  let {
    elements: t,
    rect: e,
    offsetParent: s,
    strategy: i
  } = n;
  const r = i === "fixed", o = Wt(s), a = t ? Ni(t.floating) : !1;
  if (s === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Yt(1);
  const u = Yt(0), h = Nt(s);
  if ((h || !h && !r) && ((Me(s) !== "body" || ln(o)) && (l = is(s)), Nt(s))) {
    const g = ce(s);
    c = be(s), u.x = g.x + s.clientLeft, u.y = g.y + s.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + u.y
  };
}
function Jc(n) {
  return Array.from(n.getClientRects());
}
function Ro(n) {
  return ce(Wt(n)).left + is(n).scrollLeft;
}
function Zc(n) {
  const t = Wt(n), e = is(n), s = n.ownerDocument.body, i = lt(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = lt(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + Ro(n);
  const a = -e.scrollTop;
  return St(s).direction === "rtl" && (o += lt(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Xc(n, t) {
  const e = ut(n), s = Wt(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = xi();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Qc(n, t) {
  const e = ce(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = Nt(n) ? be(n) : Yt(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function dr(n, t, e) {
  let s;
  if (t === "viewport")
    s = Xc(n, e);
  else if (t === "document")
    s = Zc(Wt(n));
  else if (Tt(t))
    s = Qc(t, e);
  else {
    const i = Po(n);
    s = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Rn(s);
}
function Do(n, t) {
  const e = Zt(n);
  return e === t || !Tt(e) || Se(e) ? !1 : St(e).position === "fixed" || Do(e, t);
}
function th(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = Ke(n, [], !1).filter((a) => Tt(a) && Me(a) !== "body"), i = null;
  const r = St(n).position === "fixed";
  let o = r ? Zt(n) : n;
  for (; Tt(o) && !Se(o); ) {
    const a = St(o), l = ki(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ln(o) && !l && Do(n, o)) ? s = s.filter((u) => u !== o) : i = a, o = Zt(o);
  }
  return t.set(n, s), s;
}
function eh(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? Ni(t) ? [] : th(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, u) => {
    const h = dr(t, u, i);
    return c.top = lt(h.top, c.top), c.right = Gt(h.right, c.right), c.bottom = Gt(h.bottom, c.bottom), c.left = lt(h.left, c.left), c;
  }, dr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function nh(n) {
  const {
    width: t,
    height: e
  } = Io(n);
  return {
    width: t,
    height: e
  };
}
function sh(n, t, e) {
  const s = Nt(t), i = Wt(t), r = e === "fixed", o = ce(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yt(0);
  if (s || !s && !r)
    if ((Me(t) !== "body" || ln(i)) && (a = is(t)), s) {
      const h = ce(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Ro(i));
  const c = o.left + a.scrollLeft - l.x, u = o.top + a.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: o.width,
    height: o.height
  };
}
function ys(n) {
  return St(n).position === "static";
}
function fr(n, t) {
  return !Nt(n) || St(n).position === "fixed" ? null : t ? t(n) : n.offsetParent;
}
function Lo(n, t) {
  const e = ut(n);
  if (Ni(n))
    return e;
  if (!Nt(n)) {
    let i = Zt(n);
    for (; i && !Se(i); ) {
      if (Tt(i) && !ys(i))
        return i;
      i = Zt(i);
    }
    return e;
  }
  let s = fr(n, t);
  for (; s && Vc(s) && ys(s); )
    s = fr(s, t);
  return s && Se(s) && ys(s) && !ki(s) ? e : s || Uc(n) || e;
}
const ih = async function(n) {
  const t = this.getOffsetParent || Lo, e = this.getDimensions, s = await e(n.floating);
  return {
    reference: sh(n.reference, await t(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function rh(n) {
  return St(n).direction === "rtl";
}
const oh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Yc,
  getDocumentElement: Wt,
  getClippingRect: eh,
  getOffsetParent: Lo,
  getElementRects: ih,
  getClientRects: Jc,
  getDimensions: nh,
  getScale: be,
  isElement: Tt,
  isRTL: rh
};
function ah(n, t) {
  let e = null, s;
  const i = Wt(n);
  function r() {
    var a;
    clearTimeout(s), (a = e) == null || a.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: u,
      width: h,
      height: g
    } = n.getBoundingClientRect();
    if (a || t(), !h || !g)
      return;
    const f = pn(u), _ = pn(i.clientWidth - (c + h)), m = pn(i.clientHeight - (u + g)), y = pn(c), b = {
      rootMargin: -f + "px " + -_ + "px " + -m + "px " + -y + "px",
      threshold: lt(0, Gt(1, l)) || 1
    };
    let w = !0;
    function S(k) {
      const T = k[0].intersectionRatio;
      if (T !== l) {
        if (!w)
          return o();
        T ? o(!1, T) : s = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(S, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(S, b);
    }
    e.observe(n);
  }
  return o(!0), r;
}
function zo(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = Ti(n), u = i || r ? [...c ? Ke(c) : [], ...Ke(t)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", e, {
      passive: !0
    }), r && v.addEventListener("resize", e);
  });
  const h = c && a ? ah(c, e) : null;
  let g = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && f && (f.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let _, m = l ? ce(n) : null;
  l && y();
  function y() {
    const v = ce(n);
    m && (v.x !== m.x || v.y !== m.y || v.width !== m.width || v.height !== m.height) && e(), m = v, _ = requestAnimationFrame(y);
  }
  return e(), () => {
    var v;
    u.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h == null || h(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(_);
  };
}
const Ei = Wc, $i = jc, Mi = Oc, Fo = Bc, lh = Fc, Ai = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: oh,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return zc(n, t, {
    ...i,
    platform: r
  });
};
class Oo extends j {
  constructor(t) {
    super(t), this._ref = q(), this._handleDocClick = (e) => {
      const { state: { open: s }, id: i, togglePop: r } = this.props, o = d(e.target);
      s !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
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
    const { togglePop: e } = this.props, s = d(t.target), i = s.closest("[data-pick-value]");
    if (i.length)
      return t.stopPropagation(), e(!1, { value: `${i.dataset("pickValue")}` });
    if (s.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: s, pickerName: i, empty: r } = t, { open: o } = s;
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
      style: s,
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    } = t, l = d.extend({
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
      const e = d(t.container || "body");
      let s = e.find(".pick-container");
      s.length || (s = d("<div>").addClass("pick-container").appendTo(e)), this._container = s[0];
    }
    return this._container;
  }
  _render(t) {
    return /* @__PURE__ */ p("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  _getStyle(t = {}, e) {
    var c;
    const s = (c = this.trigger) == null ? void 0 : c.getBoundingClientRect();
    if (!s)
      return {};
    const { width: i, minWidth: r, maxWidth: o, maxHeight: a } = this.props, l = s.width;
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = _n(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
      let u;
      if (e.includes("bottom"))
        u = window.innerHeight - s.bottom - 2;
      else {
        const h = this.element.getBoundingClientRect().height;
        u = s.top, h > u && typeof t.top == "number" && (t.top += h - u);
      }
      u && (t.maxHeight = typeof a == "number" ? Math.min(u, a) : u);
    } else
      a && (t.maxHeight = a);
    return t;
  }
  layout() {
    const { element: t, trigger: e, props: s } = this, { state: i } = s;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = zo(e, t, () => {
      const { placement: r, width: o } = s;
      Ai(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Mi() : null, $i(), Ei(1)].filter(Boolean)
      }).then(({ x: a, y: l, placement: c }) => {
        var u, h;
        if (de(e) || !Xn(e)) {
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
    var e, s;
    d(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, d(`#pick-pop-${this.props.id}`).remove(), (s = (e = this.props).beforeDestroy) == null || s.call(e);
  }
  render(t) {
    return rc(this._render(t), this._getContainer(t));
  }
}
let yt = class extends j {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = q(), this._trigger = q(), this.toggle = async (e, s) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      this._toggleTimer && (clearTimeout(this._toggleTimer), this._toggleTimer = 0);
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await En(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await En(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1
    }, this._id = t.id ?? `_pick${ht()}`, this.changeState = this.changeState.bind(this);
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
    const { onChange: s } = this.props;
    s && s.call(this, t, e);
  }
  _handlePopToggle(t) {
    const { onPopShown: e, onPopHidden: s } = this.props;
    t === !0 && e ? e.call(this) : !t && s && s.call(this);
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
    if (!s == !i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r.call(this) : !i && o && o.call(this);
  }
  componentDidUpdate(t, e) {
    const { open: s, value: i } = this.state, { open: r, value: o } = e;
    !!s != !!r && this._handlePopToggle(!!s), i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), this._toggleTimer && clearTimeout(this._toggleTimer);
    const t = this._pop.current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let r;
    if (s && (!t.hidePopWhenEmpty || !this._isEmptyValue())) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ p(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ p(xe, { children: [
      /* @__PURE__ */ p(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
yt.Trigger = bi;
yt.Pop = Oo;
yt.defaultProps = {
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
let Ho = class extends yt {
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
    if (t && d(t).css("backgroundColor", r), e && d(e).css("borderColor", r), s && d(s).css("color", r), i) {
      const o = d(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s } = t, { value: i } = e;
    return [
      s ? /* @__PURE__ */ p(X, { icon: s }, "icon") : /* @__PURE__ */ p("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = d.extend({
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
        r.map((l) => /* @__PURE__ */ p("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ p(X, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ p("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ p(X, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Ho.defaultProps = {
  ...yt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class Wo extends U {
}
Wo.NAME = "ColorPicker";
Wo.Component = Ho;
const qe = 24 * 60 * 60 * 1e3, B = (n) => n === void 0 ? /* @__PURE__ */ new Date() : (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n), ch = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(B(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, oe = (n, t = /* @__PURE__ */ new Date()) => B(n).toDateString() === B(t).toDateString(), Ds = (n, t = /* @__PURE__ */ new Date()) => B(n).getFullYear() === B(t).getFullYear(), jo = (n, t = /* @__PURE__ */ new Date()) => (n = B(n), t = B(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), Hu = (n, t = /* @__PURE__ */ new Date()) => {
  n = B(n), t = B(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Wu = (n, t) => oe(B(t), n), ju = (n, t) => oe(B(t).getTime() - qe, n), Bu = (n, t) => oe(B(t).getTime() + qe, n), Bo = (n) => n != null && !isNaN(B(n).getTime()), kt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = B(n), !Bo(n))
    return e;
  if (typeof t == "function")
    return t(n);
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Ds(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Vu = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = kt(n, Ds(n) ? s.month : s.full);
  if (oe(n, t))
    return i;
  const r = kt(t, Ds(n, t) ? jo(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
class Vo extends j {
  constructor() {
    super(...arguments), this._ref = q(), this._handleClickItem = (t, e) => {
      var s, i;
      (i = (s = this.props).onChange) == null || i.call(s, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      d(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
    }, 100);
  }
  render(t) {
    const { minuteStep: e = 5, hour: s, minute: i } = t, r = [], o = [];
    for (let l = 0; l < 24; ++l)
      r.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: s === l });
    for (let l = 0; l < 60; l += e)
      o.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: i === l });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ p("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ p(
        ft,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ p(
        ft,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const pr = (n) => {
  if (!n)
    return;
  const t = B(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Uo = class extends yt {
  constructor(t) {
    super(t), this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (s) => {
      this.setTime(s.target.value);
    }, this._handleSetTime = (s, i) => {
      this.setTime({ [s]: String(i) });
    }, this._handleClearBtnClick = () => {
      this.setTime("");
    };
    const e = this.state;
    e.value === "now" && (e.value = kt(/* @__PURE__ */ new Date(), t.format));
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
    const s = pr(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? kt(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(e);
    });
  }
  getTime() {
    const t = pr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ p("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ p("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ p("i", { class: "i-time" }) : h = /* @__PURE__ */ p(X, { icon: i })), [
      /* @__PURE__ */ p("input", { id: u, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ p("label", { for: u, className: "input-control-suffix", children: h }, "icon") : null
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
    return /* @__PURE__ */ p(Vo, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Uo.defaultProps = {
  ...yt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function hh(n, t, e) {
  return t && n < t ? t : e && n > e ? e : n;
}
function je(n) {
  if (n == null)
    return null;
  if (typeof n == "function" && (n = n()), typeof n == "string" && n.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    n.length > 6 ? n = ch(t, n.substring(5).replace("+", "")) : n = t;
  } else
    n = B(n);
  return Bo(n) ? n : null;
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
const uh = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * qe;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, gr = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => kt(e, t)));
class dh extends j {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const s = d(t.target).closest(".mini-calendar-day").dataset("date");
      s && e(s);
    };
  }
  render(t) {
    var M, E;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: s = 1,
      weekNames: i = O.getLang("weekNames"),
      monthNames: r = O.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h
    } = t, g = [], f = "btn ghost square rounded-full";
    for (let P = 0; P < 7; P++) {
      const R = (s + P) % 7;
      g.push(/* @__PURE__ */ p("div", { className: x("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ p("div", { children: i ? i[R] : R }) }, P));
    }
    const { startTime: _, days: m, firstDay: y } = uh(o, a, s), v = y + m * qe;
    let b = _;
    const w = [], S = "yyyy-MM-dd", k = gr(l, S), T = gr(c, S), A = ((M = u ? B(u) : null) == null ? void 0 : M.getTime()) ?? Number.MAX_SAFE_INTEGER, I = ((E = h ? B(h) : null) == null ? void 0 : E.getTime()) ?? 0;
    for (; b <= v; ) {
      const P = [];
      for (let R = 0; R < 7; R++) {
        const L = new Date(b), $ = L.getDate(), F = kt(L, S), Q = L.getDay(), pt = jo(L, y), cs = x("col mini-calendar-day", {
          active: k.has(F),
          selected: T.has(F),
          "is-first": $ === 1,
          "is-in-month": pt,
          "is-out-month": !pt,
          "is-today": oe(L, e),
          "is-weekend": Q === 0 || Q === 6,
          disabled: !oe(L, A) && !oe(L, I) && (b > A || b < I)
        });
        P.push(
          /* @__PURE__ */ p("div", { className: cs, "data-date": F, children: /* @__PURE__ */ p("button", { type: "button", className: f, onClick: this._handleClickDate, children: $ === 1 && r ? r[L.getMonth()] : L.getDate() }) }, F)
        ), b += qe;
      }
      w.push(/* @__PURE__ */ p("div", { className: "row", children: P }, b));
    }
    return /* @__PURE__ */ p("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ p("div", { className: "row", children: g }),
      w
    ] });
  }
}
var jn, Bn;
class mr extends j {
  constructor() {
    super(...arguments);
    ot(this, jn, q());
    ot(this, Bn, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = d(e.target).closest("[data-value]").dataset("value");
      r && (s(+r), e.stopPropagation());
    });
  }
  render(e) {
    const { className: s, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ p(K, { type: "ghost", "data-value": c, active: c === o, className: x(l === c ? "is-current" : ""), onClick: st(this, Bn), children: c }, c));
    return /* @__PURE__ */ p("div", { className: s, ref: st(this, jn), children: a });
  }
}
jn = new WeakMap(), Bn = new WeakMap();
var Ze, Xe, Qe, tn, en, nn, Vn, Ko, Un, qo;
class fh extends j {
  constructor(e) {
    super(e);
    ot(this, Vn);
    ot(this, Un);
    ot(this, Ze, void 0);
    ot(this, Xe, void 0);
    ot(this, Qe, void 0);
    ot(this, tn, void 0);
    ot(this, en, void 0);
    ot(this, nn, void 0);
    gt(this, Ze, q()), gt(this, Xe, (r) => {
      const o = d(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), gt(this, Qe, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), gt(this, tn, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), gt(this, en, (r) => {
      this.setState({ year: r, select: "day" });
    }), gt(this, nn, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: s } = e, i = je(s) || /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((s) => s.select === e ? { select: "day" } : { select: e });
  }
  render(e, s) {
    const {
      date: i,
      yearText: r = O.getLang("yearFormat") || "{0}",
      weekNames: o = O.getLang("weekNames"),
      monthNames: a = O.getLang("monthNames"),
      minDate: l,
      maxDate: c,
      weekStart: u
    } = e, h = je(i), {
      year: g,
      month: f,
      select: _
    } = s, m = _ === "day", y = l || B("1970-1-1"), v = c || B("2099-12-31");
    return /* @__PURE__ */ p("div", { className: "date-picker-menu row", ref: st(this, Ze), onClick: st(this, Xe), children: [
      us(this, Vn, Ko).call(this, e),
      /* @__PURE__ */ p("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ p("div", { className: "row p-2", children: [
          /* @__PURE__ */ p(K, { type: _ === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: V(r, g) }),
          /* @__PURE__ */ p(K, { type: _ === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[f - 1] : f }),
          /* @__PURE__ */ p("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ p(K, { type: "ghost", size: "sm", square: !0, onClick: st(this, Qe), children: /* @__PURE__ */ p("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ p(K, { type: "ghost", size: "sm", square: !0, onClick: st(this, tn), children: /* @__PURE__ */ p("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ p(
          dh,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: v,
            minDate: y,
            year: g,
            month: f,
            selections: h || [],
            onClickDate: this.changeDate
          }
        ) : null,
        _ === "year" ? /* @__PURE__ */ p(
          mr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: g,
            min: y.getFullYear(),
            max: v.getFullYear(),
            onChange: st(this, en)
          }
        ) : _ === "month" ? /* @__PURE__ */ p(
          mr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: f,
            min: 1,
            max: 12,
            onChange: st(this, nn)
          }
        ) : null,
        m ? us(this, Un, qo).call(this, e) : null
      ] })
    ] });
  }
}
Ze = new WeakMap(), Xe = new WeakMap(), Qe = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), nn = new WeakMap(), Vn = new WeakSet(), Ko = function(e) {
  return ft.render(e.menu, [], {
    onClickItem: (s) => {
      const i = s.item.value;
      typeof i == "string" && this.changeDate(i);
    }
  }, this);
}, Un = new WeakSet(), qo = function(e) {
  let { actions: s } = e;
  const { todayText: i = O.getLang("today"), clearText: r } = e;
  return s === void 0 && (s = [{ text: i, "data-set-date": kt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ p("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ p(Ct, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ p(K, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let rs = class extends yt {
  constructor(t) {
    super(t), this._date = null, this.setDate = (s) => {
      const { disabled: i, readonly: r } = this.props;
      if (i || r)
        return;
      const o = this._calcValue(s);
      this.setState({ value: o }, () => {
        this._afterSetDate();
      });
    }, this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (s) => {
      this.setDate(s.target.value);
    }, this._handleClearBtnClick = () => {
      this.setDate("");
    }, this._handleSetDate = (s) => {
      this.setDate(s);
    };
    const { value: e } = this.state;
    this.state.value = this._calcValue(e);
  }
  getDate() {
    return this._date;
  }
  _calcValue(t) {
    const { onInvalid: e, defaultValue: s = "", required: i, allowInvalid: r, format: o } = this.props;
    let a = this._parseDate(t);
    if (!a && e) {
      const l = e(t);
      l && (a = this._parseDate(l));
    }
    return this._date = a, a ? kt(a, o) : r ? t : i ? s : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: s } = this.props;
    return [je(typeof e == "function" ? e(t) : e), je(typeof s == "function" ? s(t) : s)];
  }
  _parseDate(t) {
    const e = je(t);
    return e ? hh(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let g;
    u && !r && c.length ? g = /* @__PURE__ */ p("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ p("span", { className: "close" }) }) : i && (i === !0 ? g = /* @__PURE__ */ p("i", { class: "i-calendar" }) : g = /* @__PURE__ */ p(X, { icon: i }));
    const f = u ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ p(
        "input",
        {
          id: h,
          type: "text",
          className: "form-control",
          placeholder: s,
          value: f,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: this._handleInputFocus,
          onChange: this._handleInputChange
        },
        "input"
      ),
      g ? /* @__PURE__ */ p("label", { for: h, className: "input-control-suffix", children: g }, "icon") : null
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
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: u, required: h } = t, [g, f] = this._getDateRange(e.value);
    return /* @__PURE__ */ p(
      fh,
      {
        onChange: this._handleSetDate,
        date: this._date,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: h ? "" : l,
        menu: c,
        actions: u,
        minDate: g,
        maxDate: f
      }
    );
  }
};
rs.defaultProps = {
  ...yt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let Go = class extends rs {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = B(t), s = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(s.getHours()), e.setMinutes(s.getMinutes()), this.setDate(kt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const s = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? s.setHours(e) : s.setMinutes(e), this.setDate(kt(s, this.props.format));
    };
  }
  getTime() {
    const t = this.getDate();
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _afterSetDate() {
  }
  _renderPop(t, e) {
    const [s, i] = this.getTime() || [];
    return /* @__PURE__ */ p("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ p("div", { className: "divider" }),
      /* @__PURE__ */ p(
        Vo,
        {
          hour: s,
          minute: i,
          minuteStep: t.minuteStep,
          onChange: this._handleSetTime
        }
      )
    ] });
  }
};
Go.defaultProps = {
  ...rs.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Yo extends U {
}
Yo.NAME = "TimePicker";
Yo.Component = Uo;
class Jo extends U {
}
Jo.NAME = "DatePicker";
Jo.Component = rs;
class Zo extends U {
}
Zo.NAME = "DatetimePicker";
Zo.Component = Go;
const _r = "show", yr = "in", ph = '[data-dismiss="modal"]', vs = "modal-hide", Ae = class ne extends Ht {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(ph) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize(), this.on("hidden", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && !ne.getAll().some((s) => s.shown) && d("html").enableScroll();
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
    const { modalElement: e } = this, s = d(e);
    if (this._shown)
      return s.removeClass(vs).css("z-index", `${ne.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [vs]: !1
    }, _r, o).css({
      zIndex: `${ne.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !s.closest(c.modalElement).length && c.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((c) => {
      c !== this && !s.closest(c.modalElement).length && c.hide();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      s.addClass(yr), this._setTimer(() => {
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
    this._shown = !1, d(this.modalElement).removeClass(yr), this.emit("hide"), this._setTimer(() => {
      d(this.modalElement).removeClass(_r), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((e) => {
      e.shown && e !== this && e.show();
    }), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = d(s);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const u = { width: "", height: "" };
      typeof e == "object" ? (u.width = e.width, u.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (u.width = e), i.css(u);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), d(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return ne.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = ne.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = ne.query(t, void 0, (s) => !s.shown)) == null || e.show();
  }
};
Ae.NAME = "Modal";
Ae.MULTI_INSTANCE = !0;
Ae.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Ae.hideOthers = !0;
Ae.zIndex = 1500;
let Ge = Ae;
d(window).on(`resize.${Ge.NAMESPACE}`, () => {
  Ge.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class Xo extends j {
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
    return bt(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ p("div", { className: x("modal-header", e), children: /* @__PURE__ */ p("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : bt(t) ? t : /* @__PURE__ */ p("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ p(Ct, { ...t }) : null,
      e ? /* @__PURE__ */ p("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ p("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? bt(t) ? t : /* @__PURE__ */ p("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return bt(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ p("div", { className: x("modal-footer", e), children: s ? /* @__PURE__ */ p(Ct, { ...s }) : null });
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
Xo.defaultProps = { closeBtn: !0 };
class Qo extends j {
  constructor() {
    super(...arguments), this._ref = q(), this.state = {}, this._handleIframeLoad = () => {
      const t = this.iframeDoc;
      if (!t)
        return;
      const { iframeBodyClass: e, watchHeight: s } = this.props;
      s && this._watchIframeHeight(), e && t.body.classList.add(e);
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
      const s = t.body, i = t.documentElement, r = Math.ceil(Math.max(s.scrollHeight, s.offsetHeight, i.offsetHeight)) + 1;
      this.setState({ height: r });
    }), e.observe(t.body), e.observe(t.documentElement), this._rob = e;
  }
  render() {
    return /* @__PURE__ */ p(
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
Qo.defaultProps = {
  watchHeight: !0
};
var Ii = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, vt = (n, t, e) => (Ii(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Pe = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, fe = (n, t, e, s) => (Ii(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), yn = (n, t, e) => (Ii(n, t, "access private method"), e), Mt, Le, At, Dn, Pi, vn, Ls;
function gh(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function mh(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await d.ajax({
    url: s,
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
    body: e === "html" ? /* @__PURE__ */ p(Ce, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function _h(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ p(Qo, { url: e, watchHeight: !o })
  };
}
const yh = {
  custom: gh,
  ajax: mh,
  iframe: _h
}, vr = "loading", ta = class ge extends Ge {
  constructor() {
    super(...arguments), Pe(this, Dn), Pe(this, vn), Pe(this, Mt, void 0), Pe(this, Le, void 0), Pe(this, At, void 0);
  }
  get id() {
    return vt(this, Le);
  }
  get loading() {
    var t;
    return (t = vt(this, Mt)) == null ? void 0 : t.classList.contains(vr);
  }
  get shown() {
    var t;
    return !!((t = vt(this, Mt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = vt(this, Mt);
    if (!t) {
      const { options: e } = this;
      let s = vt(this, Le);
      s || (s = e.id || `modal-${ht()}`, fe(this, Le, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], !t) {
        const r = this.key;
        t = d("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      fe(this, Mt, t);
    }
    return t;
  }
  get $emitter() {
    const t = vt(this, Mt);
    return t ? d(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destoryOnHide && this.options.type !== "static" && this.on("hidden", (t) => {
      t.target.closest(".modal") === this.modalElement && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = vt(this, Mt);
    t && (d(t).removeData(this.constructor.KEY).remove(), fe(this, Mt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, At) && clearTimeout(vt(this, At));
    const { modalElement: t, options: e } = this, s = d(t), { type: i, loadTimeout: r, loadingClass: o = vr, loadingText: a = null } = e;
    if (!i || i === "static")
      return !0;
    const l = yh[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", a).addClass(o), r && fe(this, At, window.setTimeout(() => {
      fe(this, At, 0), yn(this, vn, Ls).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return c === !1 ? await yn(this, vn, Ls).call(this, this.options.failedTip) : c && typeof c == "object" && await yn(this, Dn, Pi).call(this, c), vt(this, At) && (clearTimeout(vt(this, At)), fe(this, At, 0)), this.layout(), await En(100), s.removeClass(o), !0;
  }
  static isValid(t) {
    return !d.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), !r.type && t.id && (r.type = "static"), r.key === void 0 && (r.key = r.id);
      const o = ge.ensure(s, r), a = `${ge.NAMESPACE}.open${ht()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...u } = t, h = (typeof l == "function" ? l() : l) || {};
    let g = typeof s == "object" && s.html ? /* @__PURE__ */ p("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ p("div", { children: s });
    i ? g = /* @__PURE__ */ p("div", { className: x("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ p("div", { className: `icon ${i} ${r}` }),
      g
    ] }) : g = /* @__PURE__ */ p("div", { className: x("modal-body", h.bodyClass), children: g });
    const f = [];
    (Array.isArray(o) ? o : [o]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = O.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let _;
    const m = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: v }) => {
        const b = ge.query(v.target);
        if (!b || b.key !== c)
          return;
        _ = y.key, (a == null ? void 0 : a(y, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await ge.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: g,
      modal: !0,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: m, ...h },
      ...u
    }), _;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: s, ...i } = t;
    return await ge.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Mt = /* @__PURE__ */ new WeakMap();
Le = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakSet();
Pi = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return d(this.modalElement).html(n[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, ve(
      /* @__PURE__ */ p(Xo, { ...n }),
      this.modalElement
    );
  });
};
vn = /* @__PURE__ */ new WeakSet();
Ls = function(n) {
  if (n)
    return yn(this, Dn, Pi).call(this, {
      body: /* @__PURE__ */ p("div", { className: "modal-load-failed", children: n })
    });
};
ta.DEFAULT = {
  ...Ge.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let zs = ta;
const vh = '[data-toggle="modal"]';
class Fs extends Ht {
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
      e = Ge.ensure(s, t);
    } else
      e = zs.ensure(this.container, t);
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
Fs.NAME = "ModalTrigger";
d(document).on(`click${Fs.NAMESPACE}`, vh, (n) => {
  const t = d(n.currentTarget);
  if (t.length && !t.is("[disabled],.disabled,.open-in-parent,no-global-listener")) {
    const e = Fs.ensure(t);
    e && (e.show(), n.preventDefault());
  }
});
const bh = {
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
let Xt = class extends Z {
  constructor(t) {
    super(t), this._input = q(), this._file = q(), this._id = `file-selector-input-${ht()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: s } = this.state;
      this.cancelRenameFile(), !(!e || !s) && this.renameFile(e, s);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const s = e.target;
      s.files && (this.selectFiles(s.files), this.setState({ inputKey: ht() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const s = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      s.length && (this.selectFiles(s), this.setState({ inputKey: ht() }));
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
    const { multiple: t, maxFileCount: e, name: s = "" } = this.props;
    return !!(e !== 1 && (t ?? s.endsWith("[]")));
  }
  get info() {
    const { maxFileSize: t = 0, maxFileCount: e = Number.MAX_SAFE_INTEGER } = this.props;
    return {
      size: $t(this.size, 1),
      maxFileSize: $t(typeof t == "string" ? dn(t) : t, 1),
      maxFileCount: e,
      count: this.count
    };
  }
  get files() {
    return this._data.files;
  }
  componentDidMount() {
    const t = this.state.files.reduce((e, s) => (s.file && e.push(s.file), e), []);
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
      for (let s = 0; s < t.length && (await this.addFile(t[s]), !this._skipAddMore); s++)
        ;
    }
  }
  async _checkDuplicated(t) {
    const { allowSameName: e, onDuplicated: s, duplicatedTip: i = this.i18n("duplicatedTip") } = this.props, { name: r } = t, o = e ? this.getFile(t.id) : this.getFileByName(r);
    return o ? ((s == null ? void 0 : s.call(this, r, t, o)) === !0 || i && await this._showAlert(i, {
      name: r,
      size: $t(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: s, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? dn(e) : e;
    return t.size <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: $t(t.size, 1)
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: s, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? dn(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: $t(t.size, 1),
      totalSize: $t(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: s, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((s == null ? void 0 : s.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: $t(t.size, 1),
      exceededCount: r
    }), !0);
  }
  async addFile(t) {
    const { onAdd: e, disabled: s } = this.props;
    if (s)
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
    const s = this.getFile(t);
    if (!s || s.name === e)
      return;
    const { onRename: i } = this.props;
    if (i && await i.call(this, e, s.name, s) === !1)
      return;
    const r = s.file;
    if (r) {
      const l = new File([r], e, { type: r.type, lastModified: r.lastModified }), c = Array.from(this._data.files).indexOf(r);
      c >= 0 && this._data.items.remove(c), this._data.items.add(l), this._syncFiles(!0), s.file = l;
    }
    s.name = e, s.ext = this.constructor.getExt(e);
    const { files: o } = this.state, a = o.indexOf(s);
    a >= 0 ? o.splice(a, 1, s) : o.push(s), this.setState({ files: [...o] });
  }
  async removeFile(t) {
    const e = this.getFile(t);
    if (!e)
      return;
    const { onRemove: s, removeConfirm: i } = this.props;
    if (i) {
      let o = i;
      if (typeof o == "string" && (o = { message: o }), typeof o.message == "string" && (o.message = V(o.message, {
        name: e.name,
        size: $t(e.size, 1)
      })), !await zs.confirm(o))
        return;
    }
    if (s && await s.call(this, e) === !1)
      return;
    if (e.file) {
      const o = Array.from(this._data.files).indexOf(e.file);
      o >= 0 && this._data.items.remove(o);
    }
    const r = this.state.files.indexOf(e);
    r >= 0 && (this.state.files.splice(r, 1), this.setState({ files: this.state.files }), this._syncFiles(!0));
  }
  _syncFiles(t = !1) {
    const e = this._data.files, s = this._file.current;
    s.files = e, t && d(s).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = V(t.message, { ...this.info, ...e })), zs.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? V(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ p("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: s, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = z({
      component: "label",
      attrs: {
        for: s ? void 0 : this._id
      },
      disabled: s,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ p("div", { className: "file-selector-tip", children: /* @__PURE__ */ p(W, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ p(K, { ...o, ...c, className: x(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ p("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ p(K, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: s, onChange: i } = t;
    return /* @__PURE__ */ p("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: s, style: "display:none", onChange: i }, "form");
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
    let s;
    if (e)
      s = { src: e };
    else {
      const i = this._getIcon(t);
      i && (s = { icon: i });
    }
    return s && {
      size: this.props.mode === "grid" ? void 0 : "sm",
      ...s
    };
  }
  _getFileActions(t) {
    if (this.props.disabled)
      return;
    let { removeBtn: e, renameBtn: s } = this.props;
    typeof e == "function" && (e = e.call(this, t)), typeof e == "string" ? e = { text: e } : e === !0 && (e = { hint: this.i18n("removeFile"), icon: "trash" }), typeof s == "function" && (s = s.call(this, t)), typeof s == "string" ? s = { text: s } : s === !0 && (s = { hint: this.i18n("renameFile"), icon: "edit" });
    const i = [];
    return s && i.push({
      "data-rename-file": t.id,
      ...s
    }), e && i.push({
      "data-remove-file": t.id,
      ...e
    }), i;
  }
  _renderFile(t) {
    let { itemProps: e } = this.props;
    return e = z({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: $t(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ p(Ue, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: s = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ p("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ p("div", { className: "form-control size-sm", children: s }),
        /* @__PURE__ */ p("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = z({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ p(K, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ p(K, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ p(Ue, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: s } = this.state;
    return /* @__PURE__ */ p("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === s ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: s = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": _n(s),
      "--file-selector-grid-height": _n(i),
      "--file-selector-grid-gap": _n(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ p("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
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
    const { name: e, size: s, type: i } = t;
    if (t instanceof File)
      return {
        name: e,
        size: s,
        type: i,
        file: t,
        id: [e, s].join(":"),
        ext: this.getExt(e)
      };
    const r = typeof s == "string" ? dn(s) : s;
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
    const s = e.split(",");
    return t.filter((i) => this.isAccept(i, s));
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
Xt.i18n = bh;
Xt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let Ri = class extends Xt {
};
Ri.defaultProps = {
  ...Xt.defaultProps,
  mode: "grid",
  accept: Xt.imageAccepts
};
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Xt,
  ImageSelector: Ri
}, Symbol.toStringTag, { value: "Module" }));
class Di extends U {
}
Di.NAME = "FileSelector";
Di.Component = Xt;
Di.replace = !0;
class Li extends U {
}
Li.NAME = "ImageSelector";
Li.Component = Ri;
Li.replace = !0;
rt(wh);
const zi = class ea extends sn {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = z(s, r)), /* @__PURE__ */ mt(ea, { ...r });
  }
};
zi.NAME = "nav";
zi.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let na = zi;
const Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: na
}, Symbol.toStringTag, { value: "Module" }));
class sa extends U {
}
sa.NAME = "Nav";
sa.Component = na;
rt(Ch);
function Ye(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function ia({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Ye(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : V(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : V(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ p(K, { type: e, ...a });
}
function ra({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Ye(i, e);
  return s = typeof s == "function" ? s(a) : V(s, a), /* @__PURE__ */ p(Z, { ...o, children: [
    r,
    s
  ] });
}
function Sh({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ p(K, { type: t, ...o })), l = (u, h) => {
    const g = [];
    for (let f = u; f <= h; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const _ = Ye(s, f);
      i && (o.url = typeof i == "function" ? i(_) : V(i, _)), g.push(/* @__PURE__ */ p(K, { type: t, ...o }));
    }
    return g;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let kh = class extends j {
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
      headingClass: u,
      titleClass: h,
      contentClass: g,
      arrowStyle: f,
      onlyInner: _
    } = t;
    let m = /* @__PURE__ */ p(W, { content: r }, "content");
    (g || i) && (m = /* @__PURE__ */ p("div", { className: g, children: m }, "content"));
    const y = [], v = l ? /* @__PURE__ */ p("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ p("span", { className: "close" }) }) : null;
    return i ? y.push(/* @__PURE__ */ p("div", { className: u, children: [
      i ? /* @__PURE__ */ p(W, { className: h, content: i }) : null,
      v
    ] }, "heading")) : y.push(v), y.push(m), c && y.push(/* @__PURE__ */ p("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), _ ? y : /* @__PURE__ */ p("div", { id: e, className: x("popover", a, { popup: s, "has-heading": i }), style: o, children: y });
  }
};
class Fi extends U {
}
Fi.NAME = "PopoverPanel";
Fi.Component = kh;
const xh = '[data-toggle="popover"]', br = "show", wr = "in";
class ct extends Ht {
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
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
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
    const { delay: e, event: s, hideOthers: i } = t || {};
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
    const r = this.initTarget();
    if (!r)
      return;
    this._targetElement = r;
    const o = d(r), { animation: a, mask: l, onShow: c, onShown: u, trigger: h } = this.options;
    o.addClass(br), a && o.addClass(a === !0 ? "fade" : a), this._shown = !0, this.render(), c == null || c.call(this), this.emit("show");
    const g = this.constructor, { hideOthers: f } = this.options;
    (i || g.hideOthers && this.options.hideOthers !== !1 || f) && g.getAll().forEach((m) => {
      m !== this && m.shown && !o.closest(m.element).length && m.hide();
    });
    const { namespace: _ } = this;
    h === "hover" && (this._clearDelayHide(), o.off(_).on(`pointerenter${_}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${_}`, () => {
      this.delayHide();
    })), o.on(`click${_}`, '[data-dismiss="popover"]', () => {
      this.hide();
    }), this._virtual || d(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(wr), this._resetTimer(() => {
        u == null || u.call(this), this.emit("shown");
      }, 200), l && d(document).off(`click${this.namespace}`, this._onClickDoc).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o } = this.options, a = d(this._targetElement);
    this._shown = !1, i == null || i.call(this), this.emit("hide"), a.removeClass(wr), o === "hover" && (this._clearDelayHide(), a.off(this.namespace)), this._virtual || d(this._triggerElement).removeClass("with-popover-show").removeAttr("data-pop-placement"), d(document).off(this.namespace), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), a.removeClass(br), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, s && !t ? 200 : 0);
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
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = zo(t, e, () => {
      const { animation: i, name: r = "popover" } = this.options;
      if (!this._virtual) {
        const o = {}, { width: a, height: l } = this.options;
        a && (o.width = typeof a == "function" ? a() : a === "100%" ? d(t).outerWidth() : a), l && (o.height = typeof l == "function" ? l() : l), Object.keys(o).length && d(e).css(o);
      }
      Ai(...this._getLayoutOptions()).then(({ x: o, y: a, middlewareData: l, placement: c, strategy: u }) => {
        if (t instanceof HTMLElement && de(t)) {
          this.hide(!0);
          return;
        }
        const h = {
          position: u,
          left: o,
          top: a
        }, g = d(e).css(h), f = c.split("-")[0], _ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[f], m = l.arrow;
        m && g.attr("data-pop-placement", f).find(".arrow").css({
          left: m.x,
          top: m.y
        }).attr("class", `arrow ${r}-arrow arrow-${_}`), i === !0 && g.attr("class", `${g.attr("class").split(" ").filter((y) => y !== "fade" && !y.startsWith("fade-from")).join(" ")} fade-from-${_}`), this._virtual || d(this._triggerElement).attr("data-pop-placement", f);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = d(e);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new Fi(e, s), r.on("inited", () => this.layout())), this._panel = r;
    } else
      s.arrow && (i.find(".arrow").length || i.append(d('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, u = l ? e.querySelector(".arrow") : null, h = u ? typeof l == "number" ? l : 5 : 0;
    return [t, e, {
      placement: s,
      strategy: c,
      middleware: [
        i ? Mi() : null,
        o ? $i(typeof o == "object" ? o : void 0) : null,
        a || h ? Ei((a || 0) + h) : null,
        l ? lh({ element: u }) : null,
        r ? Fo({
          apply({ availableWidth: g, availableHeight: f, placement: _ }) {
            d(e).css({ maxHeight: f - (["top", "bottom"].includes(_.split("-")[0]) ? h : 0) - 2, maxWidth: g - 2 });
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
      closeBtn: u,
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
      closeBtn: u,
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
    const { container: t = "body" } = this.options, e = d(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = d("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
  }
  static show(t) {
    const { element: e, event: s, ...i } = t, r = e || (s == null ? void 0 : s.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: s, ...i });
  }
}
ct.NAME = "Popover";
ct.Z_INDEX = 1700;
ct.MULTI_INSTANCE = !0;
ct.DEFAULT = {
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
ct.hideOthers = !1;
d(document).on(`click${ct.NAMESPACE} mouseenter${ct.NAMESPACE}`, xh, (n) => {
  const t = d(n.currentTarget);
  if (t.length && !t.data(ct.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ct.ensure(t, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const Th = '[data-toggle="dropdown"]';
class qt extends ct {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      const e = d(t.target);
      !e.closest(".not-hide-menu,.form-control,input,label,.nested-toggle-icon").length && (this._virtual || !e.closest(this._triggerElement).length) && this.hide();
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
      content: mt(Oi, this._getMenuOptions())
    } : t;
  }
}
qt.NAME = "Dropdown";
qt.DEFAULT = {
  ...ct.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0
};
d(document).on(`click${qt.NAMESPACE} mouseenter${qt.NAMESPACE}`, Th, (n) => {
  const t = d(n.currentTarget);
  if (t.length && !t.data(qt.KEY) && !t.is("[disabled],.disabled")) {
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
    !r.target && !r.items && !r.menu && (r.target = t.next(".dropdown-menu")), qt.ensure(t, r), n.preventDefault();
  }
});
class os extends K {
  constructor() {
    super(...arguments), this._ref = q();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = d(this.triggerElement), a = qt.get(this.triggerElement), l = {
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
    (t = qt.get(this.triggerElement)) == null || t.destroy();
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
os.defaultProps = {
  caret: !0
};
Object.assign(wt.ItemComponents, { dropdown: os });
Object.assign(Ct.ItemComponents, { dropdown: os });
class Oi extends _t {
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  layout() {
    var r;
    if (this.props.tree || this.isRoot)
      return;
    const t = (r = this.element) == null ? void 0 : r.parentElement, i = d(t).parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    !t || !i || Ai(i, t, {
      placement: this.props.placement,
      middleware: [Mi(), $i(), Ei(1), Fo({
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
  _getNestedProps(t, e, s, i) {
    return z(this.isHoverTrigger ? {
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
    const s = d(t.target).closest(".dropdown-menu[z-key]");
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
}
Oi.defaultProps = {
  ..._t.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Oi.inheritNestedProps = [..._t.inheritNestedProps, "container", "tree"];
function Nh({
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
    const u = { ...t, recPerPage: c };
    return {
      ...r,
      key: c,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(u) : V(e, u)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : V(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ p(os, { dropdown: i, ...o });
}
function oa({
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
  const u = { ...c };
  let h;
  const g = (m) => {
    var y;
    h = Number((y = m.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, f = (m) => {
    if (!(m != null && m.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = Ye(i, h);
    a && !a({ info: y, event: m }) || (m.target.href = u.url = typeof l == "function" ? l(y) : V(l, y));
  }, _ = Ye(i, t || 0);
  return u.url = typeof l == "function" ? l(_) : V(l, _), /* @__PURE__ */ p("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ p("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: g }),
    /* @__PURE__ */ p(K, { type: s, ...u, onClick: f })
  ] });
}
let cn = class extends Ct {
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
      return !1;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? d.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && d.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
cn.NAME = "pager";
cn.ItemComponents = {
  ...Ct.ItemComponents,
  info: ra,
  link: ia,
  nav: Sh,
  "size-menu": Nh,
  goto: oa
};
cn.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class aa extends U {
}
aa.NAME = "Pager";
aa.Component = cn;
const Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: cn,
  PagerGoto: oa,
  PagerInfoItem: ra,
  PagerLink: ia
}, Symbol.toStringTag, { value: "Module" }));
rt(Eh);
class Hi extends U {
}
Hi.NAME = "Pick";
Hi.Component = yt;
Hi.replace = !0;
class la extends j {
  constructor(t) {
    super(t), this._searchInput = q(), this._measure = q(), this._changeTimer = 0, this._handleChange = (e) => {
      const s = e.target.value;
      this.setState({ search: s }, () => {
        const { onSearch: i } = this.props;
        i && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, i(s);
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
      const e = ho(t, {
        clear: {
          keys: "Escape",
          handler: () => {
            this.state.search.trim().length ? this.clear() : this.$pop.trigger("hidePop");
          }
        },
        enter: {
          keys: "Enter",
          handler: (s) => {
            s.preventDefault(), this.$pop.trigger("selectActive"), this.clear();
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
      e && (this._hotkeysScope = `PickerSearch_${ht()}`, d(this._searchInput.current).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = this._measure, { current: s } = this._searchInput;
      if (e && s) {
        const i = d(s).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && d(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
  }
  render(t, e) {
    const { placeholder: s, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ p("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ p("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ p("span", { className: "close" }) }) : a = /* @__PURE__ */ p("span", { className: "magnifier" }), /* @__PURE__ */ p("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ p(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: s,
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
class $h extends bi {
  constructor() {
    super(...arguments), this._search = q(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ p("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ p("span", { className: "text", children: /* @__PURE__ */ p(W, { content: e }) }),
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
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: s, hotkeys: i } = t;
    return /* @__PURE__ */ p(
      la,
      {
        inline: !0,
        id: t.id,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: s,
        hotkeys: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: s, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c } = this.props, u = s && r;
    let h;
    const g = !u && !e.length;
    return a && (!g || o === void 0) ? (typeof a == "function" ? h = a.call(this, l, e) : typeof a == "string" && (h = V(a, { value: i, values: l, count: l.length })), h = /* @__PURE__ */ p("div", { className: "picker-multi-selections", children: h }, "selections")) : g ? h = /* @__PURE__ */ p("span", { className: "picker-select-placeholder", children: o }, "selections") : h = /* @__PURE__ */ p("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      u ? this._renderSearch(t) : null
    ] }, "selections"), [
      h,
      c,
      /* @__PURE__ */ p("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        d(`#${o}`).val(s);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ p("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ p("option", { value: u, children: u }, u)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: s } = this.props;
    d(`#${t}`).val(e.length ? e : [s]);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== s.value) {
      const a = d(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== s.value && a.trigger("change", No), this._skipTriggerChange = !1;
    }
  }
}
class Mh extends bi {
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
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: s } = t;
    return /* @__PURE__ */ p(
      la,
      {
        ref: this._search,
        id: t.id,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder(),
        hotkeys: s
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: s = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: u, display: h } = t, [g] = s, f = r && a;
    let _;
    if (f)
      _ = this._renderSearch(t);
    else if (g || o === void 0 && h) {
      const { text: v } = g || { text: "", value: "" };
      typeof h == "function" ? _ = h.call(this, i, s) : typeof h == "string" ? _ = V(h, g) : _ = /* @__PURE__ */ p(W, { content: v }), _ = /* @__PURE__ */ p("span", { className: "picker-single-selection", title: typeof v == "string" ? v : void 0, children: _ }, "main");
    } else
      _ = /* @__PURE__ */ p("span", { className: "picker-select-placeholder", children: o }, "main");
    const m = u && !f ? /* @__PURE__ */ p("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ p("span", { className: "close" }) }, "deselect") : null;
    return [
      _,
      e,
      m,
      f ? null : /* @__PURE__ */ p("span", { className: "caret" }, "caret")
    ];
  }
}
class hn extends ft {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
}
hn.NAME = "tree";
hn.defaultProps = {
  ...ft.defaultProps,
  indent: 12
};
hn.defaultItemProps = {
  ...ft.defaultItemProps,
  innerComponent: "div"
};
hn.inheritNestedProps = [...ft.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class as extends _t {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return hn.getTreeItem(t, super._getItem(t, e, s));
  }
}
as.NAME = "tree";
as.inheritNestedProps = [..._t.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
as.defaultItemProps = {
  ..._t.defaultProps,
  innerComponent: "div"
};
function ca(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && ca(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class Ah extends Oo {
  constructor() {
    super(...arguments), this._menu = q(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((u, h, g) => {
        const f = this._getItem(h, g);
        return f && (f.selected ? o = !0 : r = !1, u.push(f)), u;
      }, []));
      const a = r || s.has(t.value);
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
      var s;
      return (s = this._renderItemCallback) == null ? void 0 : s.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const s = t.value, i = e.target;
      if (t.disabled || s === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((u) => this._disabledSet.has(u.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...ca(t.items).values()].filter((g) => !g.items && !this._disabledSet.has(g.value)).map((g) => g.value);
          d(i).closest(".item").children(".item-inner.selected").length ? c(h) : a(h);
        } else
          o(s);
      else
        a(s), l(!1, { search: "" });
    };
  }
  get menu() {
    return this._menu.current;
  }
  componentDidMount() {
    var t, e;
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), d(this.element).on("activeNext.zui.Picker", () => {
      var s;
      (s = this.menu) == null || s.activeNext();
    }).on("activePrev.zui.Picker", () => {
      var s;
      (s = this.menu) == null || s.activePrev();
    }).on("selectActive.zui.Picker", () => {
      const s = this.menu;
      if (!s)
        return;
      const i = s.getActiveKey();
      if (i !== void 0) {
        const r = s.getRenderedItem(i);
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
    const { menu: e, tree: s, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c } = t, { items: u, search: h } = i;
    return z({
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
    }, e, s);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const s = this._getMenuProps(t);
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ p(as, { ...s }) : /* @__PURE__ */ p(_t, { ...s });
  }
}
function se(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && se(s.items, e), e.set(s.value === void 0 ? "" : String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let Wi = class extends yt {
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
    const { valueSplitter: e = ",", emptyValue: s = "" } = this.props;
    this._emptyValueSet = new Set(s.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => {
        typeof r.value == "number" && (r.value = String(r.value));
      }), t.limitValueInList) {
        const r = se(i);
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
    const s = [...se(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(s);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = se(t), s = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || s.has(i.value));
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
    else {
      if (await En(s || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = V(o, { search: encodeURIComponent(i) })), r = await li(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = /* @__PURE__ */ new Map();
        Array.isArray(s.items) && s.items !== i.items && se(s.items, o), se(r, o), i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: s } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || s.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      a = a.filter((l) => (l.key = l.key ?? l.value, typeof l.value == "number" && (l.value = String(l.value)), !this.isEmptyValue(l.value))), r.loading = !1, r.items = a, i.items = s.items, i.search = e.search;
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
  _handleChange(t, e) {
    if (super._handleChange(t, e), t !== e) {
      const { onDeselect: s, onSelect: i, onClear: r, multiple: o } = this.props, a = this.formatValueList(e), l = this.valueList;
      if (r && !l.length && a.length && r.call(this), s) {
        const c = a.filter((u) => !l.includes(u));
        c.length && s.call(this, o ? c : c[0]);
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
    return t.Trigger || (t.multiple ? $h : Mh);
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
  formatValueList(t) {
    let e;
    return typeof t == "string" && t.length ? e = t.split(this.props.valueSplitter ?? ",") : Array.isArray(t) ? e = t : e = [t], d.unique(e).reduce((s, i) => (i == null || (i = typeof i != "string" ? String(i) : i, this.isEmptyValue(i) || s.push(i)), s), []);
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
        const a = se(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    return super.setValue(i, e);
  }
};
Wi.defaultProps = {
  ...yt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
Wi.Pop = Ah;
class ha extends U {
}
ha.NAME = "Picker";
ha.Component = Wi;
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
class ua extends U {
}
ua.NAME = "SearchBox";
ua.Component = ns;
rt(bc);
class da extends U {
}
da.NAME = "Toolbar";
da.Component = Ct;
rt(pc);
const Ih = '[data-toggle="tooltip"]';
class Bt extends ct {
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
Bt.NAME = "Tooltip";
Bt.DEFAULT = {
  ...ct.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
Bt.hideOthers = !0;
d(document).on(`click${Bt.NAMESPACE} mouseenter${Bt.NAMESPACE}`, Ih, (n) => {
  const t = d(n.currentTarget);
  if (t.length && !t.data(Bt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Bt.ensure(t, { show: Bt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
var Vt, Ut;
class Cr extends j {
  constructor(e) {
    super(e);
    ot(this, Vt, void 0);
    ot(this, Ut, void 0);
    gt(this, Vt, 0), gt(this, Ut, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (st(this, Vt) && cancelAnimationFrame(st(this, Vt)), gt(this, Vt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), gt(this, Vt, 0);
      })), s.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (s) => {
      this.state.dragStart || this.setState({ dragStart: { x: s.clientX, y: s.clientY, offset: this.scrollPos } }), s.preventDefault(), s.stopPropagation();
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
    e && (gt(this, Ut, typeof e == "string" ? document : e.current), st(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), st(this, Ut) && st(this, Ut).removeEventListener("wheel", this._handleWheel);
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
      right: u
    } = this.props, { maxScrollPos: h, scrollPos: g } = this, { dragStart: f } = this.state, _ = {
      left: a,
      top: l,
      bottom: c,
      right: u,
      ...o
    }, m = {};
    return s === "horz" ? (_.height = i, _.width = e, m.width = this.barSize, m.left = Math.round(Math.min(h, g) * (e - m.width) / h)) : (_.width = i, _.height = e, m.height = this.barSize, m.top = Math.round(Math.min(h, g) * (e - m.height) / h)), /* @__PURE__ */ p(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: _,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ p(
          "div",
          {
            className: "scrollbar-bar",
            style: m,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Vt = new WeakMap(), Ut = new WeakMap();
const Ln = /* @__PURE__ */ new Map(), zn = [];
function fa(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && Ln.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Ln.set(e, n), t != null && t.buildIn && !zn.includes(e) && zn.push(e);
}
function nt(n, t) {
  fa(n, t);
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
function pa(n) {
  return Ln.delete(n);
}
function Ph(n) {
  if (typeof n == "string") {
    const t = Ln.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function ga(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Ph(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && ga(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Rh(n = [], t = !0) {
  return t && zn.length && n.unshift(...zn), n != null && n.length ? ga([], n, /* @__PURE__ */ new Set()) : [];
}
function ma() {
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
function Dh(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function Sr(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function bs(n, t = !1) {
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
function Lh(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(n)), b = Sr(b, 0), b < 1 && (b = Math.round(b * s)), b), u = {
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
  }, g = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, f = [], _ = {};
  let m = !1;
  const y = [], v = {};
  if (e.forEach((b) => {
    const { colTypes: w, onAddCol: S } = b;
    w && Object.entries(w).forEach(([k, T]) => {
      v[k] || (v[k] = []), v[k].push(T);
    }), S && y.push(S);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: w = "", name: S } = b, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: w
    }, T = {
      name: S,
      type: w,
      setting: k,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, A = v[w];
    A && A.forEach(($) => {
      const F = typeof $ == "function" ? $.call(n, k) : $;
      F && Object.assign(k, F, b);
    });
    const { fixed: I, flex: M, minWidth: E = r, maxWidth: P = o } = k, R = Sr(k.width || i, i);
    T.flex = M === !0 ? 1 : typeof M == "number" ? M : 0, T.width = Dh(R < 1 ? Math.round(R * s) : R, E, P), y.forEach(($) => $.call(n, T)), f.push(T), _[T.name] = T;
    const L = I ? I === "left" ? h : g : u;
    L.list.push(T), L.totalWidth += T.width, L.width = L.totalWidth, T.flex && L.flexList.push(T), typeof k.order == "number" && (m = !0);
  }), m) {
    const b = (w, S) => (w.setting.order ?? 0) - (S.setting.order ?? 0);
    f.sort(b), h.list.sort(b), u.list.sort(b), g.list.sort(b);
  }
  return bs(h, !0), bs(g, !0), u.widthSetting = s - h.width - g.width, bs(u), {
    list: f,
    map: _,
    left: h,
    center: u,
    right: g
  };
}
function zh(n) {
  var L;
  const { col: t, className: e, height: s, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: g, ...f } = n, _ = {
    left: h ?? t.left,
    top: g ?? i.top,
    width: u ?? t.realWidth,
    height: s,
    ...a
  }, { align: m, border: y } = t.setting, v = {
    justifyContent: m ? m === "left" ? "start" : m === "right" ? "end" : m : void 0,
    ...t.setting.cellStyle,
    ...o
  }, b = ["dtable-cell", c, e, t.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", t.setting.cellClass], S = (L = i.data) == null ? void 0 : L[t.name], k = [l ?? S ?? ""], T = r ? r(k, { row: i, col: t, value: S }, n, mt) : k, A = [], I = [], M = {}, E = {};
  let P = "div";
  T == null || T.forEach(($) => {
    if (typeof $ == "object" && $ && !bt($) && ("html" in $ || "className" in $ || "style" in $ || "attrs" in $ || "children" in $ || "tagName" in $)) {
      const F = $.outer ? A : I;
      $.html ? F.push(/* @__PURE__ */ p("div", { className: x("dtable-cell-html", $.className), style: $.style, dangerouslySetInnerHTML: { __html: $.html }, ...$.attrs ?? {} })) : ($.style && Object.assign($.outer ? _ : v, $.style), $.className && ($.outer ? b : w).push($.className), $.children && F.push($.children), $.attrs && Object.assign($.outer ? M : E, $.attrs)), $.tagName && !$.outer && (P = $.tagName);
    } else
      I.push($);
  });
  const R = P;
  return /* @__PURE__ */ p(
    "div",
    {
      className: x(b),
      style: _,
      "data-col": t.name,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...M,
      children: [
        I.length > 0 && /* @__PURE__ */ p(R, { className: x(w), style: v, ...E, children: I }),
        A
      ]
    }
  );
}
function ws({
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
  CellComponent: u = zh,
  onRenderCell: h
}) {
  var m;
  const g = Array.isArray(n) ? n : [n], f = ((m = g[0]) == null ? void 0 : m.top) ?? 0, _ = g.length;
  return /* @__PURE__ */ p(
    "div",
    {
      className: x("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ p("div", { className: "dtable-cells-container", style: { left: -s, top: -i + f }, children: g.reduce((y, v, b) => {
        const w = t.length;
        return t.forEach((S, k) => {
          y.push(
            /* @__PURE__ */ p(
              u,
              {
                className: x(
                  `is-${v.index % 2 ? "odd" : "even"}-row`,
                  k ? "" : "is-first-in-row",
                  k === w - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === _ - 1 ? "is-last-row" : ""
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
function _a({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: u,
  onRenderCell: h,
  children: g
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ p(
    ws,
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
  let _ = null;
  r.list.length && (_ = /* @__PURE__ */ p(
    ws,
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
  let m = null;
  return o.list.length && (m = /* @__PURE__ */ p(
    ws,
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
      style: { ...u, top: n, height: t },
      children: [
        f,
        _,
        m,
        g
      ]
    }
  );
}
var ji = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, N = (n, t, e) => (ji(n, t, "read from private field"), e ? e.call(n) : t.get(n)), D = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, G = (n, t, e, s) => (ji(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), at = (n, t, e) => (ji(n, t, "access private method"), e), me, ze, ke, Dt, re, it, Pt, It, Fe, bn, Fn, Je, jt, Oe, He, Os, ya, Hs, va, Ws, ba, js, wa, wn, Bs, ls, On, Vs, Us, Ks, qs, We, Cn, Hn, Bi, Vi, Ca, Gs, Sa;
let Ui = class extends j {
  constructor(t) {
    super(t), D(this, Os), D(this, Hs), D(this, Ws), D(this, js), D(this, wn), D(this, We), D(this, Hn), D(this, Vi), D(this, Gs), this.ref = q(), D(this, me, 0), D(this, ze, void 0), D(this, ke, !1), D(this, Dt, void 0), D(this, re, void 0), D(this, it, []), D(this, Pt, void 0), D(this, It, /* @__PURE__ */ new Map()), D(this, Fe, {}), D(this, bn, void 0), D(this, Fn, []), D(this, Je, { in: !1 }), this.updateLayout = () => {
      N(this, me) && cancelAnimationFrame(N(this, me)), G(this, me, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, me, 0);
      }));
    }, D(this, jt, (e, s) => {
      s = s || e.type;
      const i = N(this, It).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), D(this, Oe, (e) => {
      N(this, jt).call(this, e, `window_${e.type}`);
    }), D(this, He, (e) => {
      N(this, jt).call(this, e, `document_${e.type}`);
    }), D(this, ls, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, s, i, r)), N(this, it).forEach((c) => {
        c[l] && (e = c[l].call(this, e, s, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, s, i, r)), e;
    }), D(this, On, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), D(this, Vs, (e) => {
      var a, l, c;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
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
    }), D(this, Us, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), D(this, Ks, (e) => {
      const s = d(e.target).closest(".dtable-cell");
      if (!s.length)
        return at(this, We, Cn).call(this, !1);
      at(this, We, Cn).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), D(this, qs, () => {
      at(this, We, Cn).call(this, !1);
    }), G(this, ze, t.id ?? `dtable-${ht()}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, re, Object.freeze(Rh(t.plugins))), N(this, re).forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(N(this, Fe), i.call(this)), r && Object.assign(this.state, r.call(this));
    }), at(this, Hn, Bi).call(this), N(this, it).forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = N(this, Pt)) == null ? void 0 : t.options) || N(this, Dt) || ma();
  }
  get plugins() {
    return N(this, it);
  }
  get layout() {
    return N(this, Pt);
  }
  get id() {
    return N(this, ze);
  }
  get data() {
    return N(this, Fe);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, Je);
  }
  componentWillReceiveProps() {
    G(this, Dt, void 0);
  }
  componentDidMount() {
    N(this, ke) ? this.forceUpdate() : at(this, wn, Bs).call(this), this.on("click", N(this, Vs)), this.on("keydown", N(this, Us));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", N(this, Ks)), this.on("mouseleave", N(this, qs)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        G(this, bn, r);
        const { parent: o } = this;
        s.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : d(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      s.includes("window") && this.on("window_resize", this.updateLayout);
    }
    N(this, it).forEach((s) => {
      var r;
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, a]) => {
        a && this.on(o, a);
      })), (r = s.onMounted) == null || r.call(this);
    });
  }
  componentDidUpdate() {
    at(this, wn, Bs).call(this), N(this, it).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = N(this, bn)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of N(this, It).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), N(this, Oe)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), N(this, He)) : t.removeEventListener(s, N(this, jt));
    N(this, it).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), N(this, re).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), G(this, Fe, {}), N(this, It).clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = N(this, It).get(t);
    i ? i.push(e) : (N(this, It).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Oe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, He)) : (r = this.element) == null || r.addEventListener(t, N(this, jt)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = N(this, It).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (N(this, It).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Oe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, He)) : (o = this.element) == null || o.removeEventListener(t, N(this, jt)));
  }
  emitCustomEvent(t, e) {
    N(this, jt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var s;
      this._noAnimation = void 0, (s = this.element) == null || s.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: u } = t;
    let { scrollLeft: h, scrollTop: g } = t;
    if (u === "up" || u === "down")
      g = i + (u === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (u === "left" || u === "right")
      h = s + (u === "right" ? 1 : -1) * c;
    else if (u === "top")
      g = 0;
    else if (u === "bottom")
      g = r - o;
    else if (u === "begin")
      h = 0;
    else if (u === "end")
      h = l - c;
    else {
      const { offsetLeft: _, offsetTop: m } = t;
      typeof _ == "number" && (h = s + _), typeof m == "number" && (g = i + m);
    }
    const f = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== s && (f.scrollLeft = h)), typeof g == "number" && (g = Math.max(0, Math.min(g, r - o)), g !== i && (f.scrollTop = g)), Object.keys(f).length ? (this.setState(f, () => {
      var _;
      (_ = this.options.onScroll) == null || _.call(this, f), e == null || e.call(this, !0);
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
    if (!N(this, Dt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      G(this, Pt, void 0);
    else if (s === "options") {
      if (G(this, Dt, void 0), !N(this, Pt))
        return;
      G(this, Pt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = d(e).closest(".dtable-cell");
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
    return O(N(this, Fn), t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = at(this, Gs, Sa).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: u, style: h = {} } = this.options, g = ["dtable", e, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], f = [];
    if (t) {
      const _ = !t.rows.length;
      if (c) {
        const m = c.call(this, t);
        m && (t = m);
      }
      N(this, it).forEach((m) => {
        var v;
        const y = (v = m.beforeRender) == null ? void 0 : v.call(this, t);
        y && (t = y);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, h["--dtable-header-height"] = `${t.headerHeight}px`, g.push(
        t.className,
        _ ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && f.push(...t.children), _ && u ? (delete h.height, f.push(
        /* @__PURE__ */ p("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ p(W, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (f.push(
        at(this, Os, ya).call(this, t),
        at(this, Hs, va).call(this, t),
        at(this, Ws, ba).call(this, t)
      ), t.scrollable && f.push(at(this, js, wa).call(this, t))), N(this, it).forEach((m) => {
        var v;
        const y = (v = m.onRender) == null ? void 0 : v.call(this, t);
        y && (y.style && Object.assign(h, y.style), y.className && g.push(y.className), y.children && f.push(y.children));
      });
    }
    return /* @__PURE__ */ p(
      "div",
      {
        id: N(this, ze),
        className: x(g),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: f
      }
    );
  }
};
me = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakMap();
ke = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
it = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
bn = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakMap();
He = /* @__PURE__ */ new WeakMap();
Os = /* @__PURE__ */ new WeakSet();
ya = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ p(
      _a,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, ls),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ p(
    yo,
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
Hs = /* @__PURE__ */ new WeakSet();
va = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ p(
    _a,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, ls),
      children: l
    },
    "body"
  );
};
Ws = /* @__PURE__ */ new WeakSet();
ba = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ p(
    yo,
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
js = /* @__PURE__ */ new WeakSet();
wa = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = n, { scrollbarSize: h = 12, horzScrollbarPos: g, vertScrollbarPos: f } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ p(
      Cr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, On),
        left: s,
        bottom: (g === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ p("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: u + a } }),
    /* @__PURE__ */ p("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: u + a } })
  ), l > a && t.push(
    /* @__PURE__ */ p(
      Cr,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, On),
        right: f === "outside" ? -h : 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
wn = /* @__PURE__ */ new WeakSet();
Bs = function() {
  var n;
  G(this, ke, !1), N(this, it).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (n = this.options.afterRender) == null || n.call(this);
};
ls = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakSet();
Cn = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = d(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, Je);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, Je, i);
};
Hn = /* @__PURE__ */ new WeakSet();
Bi = function() {
  if (N(this, Dt))
    return !1;
  const t = { ...ma(), ...N(this, re).reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return G(this, Dt, t), G(this, it, N(this, re).reduce((e, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(s)), e;
  }, [])), G(this, Fn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Vi = /* @__PURE__ */ new WeakSet();
Ca = function() {
  var I, M;
  const { plugins: n } = this;
  let t = N(this, Dt);
  const e = {
    flex: /* @__PURE__ */ p("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ p("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((E) => {
    var R;
    const P = (R = E.beforeLayout) == null ? void 0 : R.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, E.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: E } = this;
    if (E)
      i = E.clientWidth;
    else {
      G(this, ke, !0);
      return;
    }
  }
  const r = Lh(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], u = (E, P, R) => {
    var $, F;
    const L = { data: R ?? { [a]: E }, id: E, index: c.length, top: 0 };
    if (R || (L.lazy = !0), c.push(L), (($ = t.onAddRow) == null ? void 0 : $.call(this, L, P)) !== !1) {
      for (const Q of n)
        if (((F = Q.onAddRow) == null ? void 0 : F.call(this, L, P)) === !1)
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
  const g = {};
  if (t.onAddRows) {
    const E = t.onAddRows.call(this, h, r);
    E && (h = E);
  }
  for (const E of n) {
    const P = (I = E.onAddRows) == null ? void 0 : I.call(this, h, r);
    P && (h = P);
  }
  h.forEach((E, P) => {
    g[E.id] = E, E.index = P, E.top = E.index * l;
  });
  const { header: f, footer: _ } = t, m = f ? t.headerHeight || l : 0, y = _ ? t.footerHeight || l : 0;
  let v = t.height, b = 0;
  const w = h.length * l, S = m + y + w;
  if (typeof v == "function" && (v = v.call(this, S)), v === "auto")
    b = S;
  else if (typeof v == "object")
    b = Math.min(v.max, Math.max(v.min, S));
  else if (v === "100%") {
    const { parent: E } = this;
    if (E)
      b = E.clientHeight;
    else {
      b = 0, G(this, ke, !0);
      return;
    }
  } else
    b = v;
  const k = b - m - y, T = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: g,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: w,
    header: f,
    footer: _,
    footerGenerators: e,
    headerHeight: m,
    footerHeight: y,
    cols: r
  }, A = (M = t.onLayout) == null ? void 0 : M.call(this, T);
  A && Object.assign(T, A), n.forEach((E) => {
    if (E.onLayout) {
      const P = E.onLayout.call(this, T);
      P && Object.assign(T, P);
    }
  }), G(this, Pt, T);
};
Gs = /* @__PURE__ */ new WeakSet();
Sa = function() {
  (at(this, Hn, Bi).call(this) || !N(this, Pt)) && at(this, Vi, Ca).call(this);
  const { layout: n } = this;
  if (!n)
    return;
  const { cols: { center: t } } = n;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let s = 0;
  t.list.forEach((_) => {
    _.left = s, s += _.realWidth, _.visible = _.left + _.realWidth >= e && _.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), g = [], { rowDataGetter: f } = this.options;
  for (let _ = c; _ < h; _++) {
    const m = o[_];
    m.lazy && f && (m.data = f([m.id])[0], m.lazy = !1), g.push(m);
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
Ui.addPlugin = fa;
Ui.removePlugin = pa;
function ka(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ p("a", { href: V(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Ki(n, t, e) {
  if (n == null)
    return;
  const s = t.row.data;
  return e = e ?? (s == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : V(n, { ...s, 0: e });
}
function xa(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? s ?? "" : n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), kt(e, n, s ?? e))) : s ?? e;
}
function Ta(n, t) {
  const { link: e } = t.col.setting, s = ka(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Na(n, t) {
  const { format: e, digits: s } = t.col.setting;
  let i = n[0];
  return typeof s == "number" && !Number.isNaN(Number(i)) && (i = Number(i), s >= 0 && (i = i.toFixed(s))), e && (i = Ki(e, t, i)), n[0] = i, n;
}
function Ea(n, t) {
  const { map: e, mapSplitter: s = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = n[0];
    typeof r == "string" && s && (r = r.split(s)), typeof e == "function" ? n[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), n[0] = r.map((o) => e[o] ?? o).join(i ?? s));
  }
  return n;
}
function $a(n, t, e) {
  const s = {};
  return typeof n == "function" ? Object.assign(s, n(e)) : Object.keys(n).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[n[i]];
    r !== void 0 && (s[i] = r);
  }), Object.keys(s).length && t.push({ style: s }), t;
}
function Ma(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = xa(s, t, n[0], i), n;
}
function Ys(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Ki(s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const Fh = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return Ys(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: u = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ p(
          vi,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ p(
          ss,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: u,
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
    if (e && (n = Ma(n, t, e)), n = Ea(n, t), n = Na(n, t), s ? n = Ys(n, t) : n = Ta(n, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = V(i, t.row.data) : typeof n[0] == "string" && (o = n[0]), n.push({ attrs: { title: o } });
    }
    return r && (n = $a(r, n, t)), n;
  }
}, Oh = nt(Fh, { buildIn: !0 }), Hh = {
  default: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return s === i ? 0 : s == null ? 1 : String(s).localeCompare(String(i));
  },
  date: (n, t, e) => {
    var r, o;
    const s = B(((r = n.data) == null ? void 0 : r[e.name]) ?? 0), i = B(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return s.getTime() - i.getTime();
  },
  number: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(s) - Number.parseFloat(i);
  }
}, Wh = {
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
      ...Hh,
      ...typeof s == "function" ? { default: s } : typeof s == "object" ? s : {}
    };
    return [...n].sort((r, o) => {
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
  onHeaderCellClick(n, t) {
    if (!n.target.closest(".dtable-sort-link"))
      return;
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
    return n[0] = /* @__PURE__ */ p("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      n[0],
      a
    ] }), n.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), n;
  }
}, jh = nt(Wh, { buildIn: !0 }), Bh = {
  html: { component: Ce }
}, Vh = {
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
        component: Ce,
        props: { html: V(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Bh[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((g) => {
        if (g) {
          const { props: f } = g;
          f && d.extend(u, typeof f == "function" ? f.call(this, t) : f), l = g.component || l;
        }
      }, { props: {} });
      const h = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ p(h, { ...u }) };
    }), n;
  }
}, Uh = nt(Vh);
function Kh(n, t) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const e = this.state.checkedRows, s = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, u) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === u || (u ? e[c] = !0 : delete e[c], s[c] = u);
  };
  if (n === void 0 ? (t === void 0 && (t = !Aa.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    o(c, t ?? !e[c]);
  })), Object.keys(s).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, s, e);
    c && Object.keys(c).forEach((u) => {
      const h = i ? i.call(this, u) : !0;
      !h || !r && h === "disabled" || (c[u] ? e[u] = !0 : delete e[u]);
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, s);
    });
  }
  return s;
}
function qh(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Aa() {
  var i, r;
  const n = (i = this.layout) == null ? void 0 : i.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e, allowCheckDisabled: s } = this.options;
  return e ? t === ((r = this.layout) == null ? void 0 : r.allRows.reduce((o, a) => {
    const l = e ? e.call(this, a.id) : !0;
    return o + (!l || !s && l === "disabled" ? 0 : 1);
  }, 0)) : t === n;
}
function Gh() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function Yh(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function kr(n, t, e = !1, s = void 0) {
  return /* @__PURE__ */ p(es, { className: "dtable-checkbox", checked: n, disabled: e, label: s });
}
const xr = 'input[type="checkbox"],.dtable-checkbox', Jh = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: kr
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
    toggleCheckRows: Kh,
    isRowChecked: qh,
    isAllRowChecked: Aa,
    getChecks: Gh,
    toggleCheckable: Yh
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
        /* @__PURE__ */ p("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: kr(n, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ p(W, { className: "dtable-check-info", content: s.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ p("div", { className: "dtable-check-info", children: r.join(", ") })
      ];
    }
  },
  onCreate() {
    const { checkedRows: n } = this.options;
    n && this.setState((t) => ({
      checkedRows: {
        ...t.checkedRows,
        ...n.reduce((e, s) => (e[s] = !0, e), {})
      }
    }));
  },
  onRenderCell(n, { row: t, col: e }) {
    var c;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return n;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, s) : o, l = this.isRowChecked(s);
    if (a) {
      const u = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, s, r === "disabled");
      n.push(
        u,
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
    const e = t.closest(xr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = d(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(xr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, Zh = nt(Jh), Xh = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new rn(`DTable:${this.id}`) };
  }
}, Qh = nt(Xh);
var Ia = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Ia || {});
function Wn(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = Wn.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Wn.call(this, t.parent).level + 1 : 0, t;
}
function tu(n) {
  return n !== void 0 ? Wn.call(this, n) : this.data.nestedMap;
}
function eu(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Pa.call(this)), t) {
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
function Pa() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Ra(n, t = 0, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = Ra(n, t, o.children, s + 1)));
  }
  return t;
}
function Da(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, Da(n, r, e, s);
  }), i;
}
function La(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && La(n, r.parent, e, s, i);
}
const gn = "dtable-nested-toggle", nu = {
  name: "nested",
  plugins: [Qh],
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
        const o = Da(this, i, r, s);
        o != null && o.parent && La(this, o.parent, r, s, e);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((t) => t.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map(), nestedRowMap: /* @__PURE__ */ new Map() };
  },
  state() {
    return { nestedState: {} };
  },
  methods: {
    getNestedInfo: tu,
    toggleRow: eu,
    isAllCollapsed: Pa,
    getNestedRowInfo: Wn
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
    this.data.nestedMap.clear(), this.data.nestedRowMap.clear();
  },
  onAddRow(n) {
    this.data.nestedRowMap.set(n.id, n);
  },
  onAddRows(n) {
    const { nestedMap: t, nestedRowMap: e } = this.data;
    return n.forEach((s) => {
      var a, l;
      const i = t.get(s.id) ?? {
        state: "",
        level: 0
      };
      let r = ((a = s.data) == null ? void 0 : a[this.options.nestedParentKey ?? "parent"]) ?? [];
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
      if (i.parent = o === "0" ? void 0 : o, (l = s.data) != null && l[this.options.asParentKey ?? "asParent"] && (i.children = []), t.set(s.id, i), o) {
        let c = t.get(o);
        c || (c = {
          state: "",
          level: 0
        }, t.set(o, c)), c.children || (c.children = []), c.children.push(s.id);
      }
    }), n = n.filter(
      (s) => this.getNestedRowInfo(s.id).state !== "hidden"
      /* hidden */
    ), Ra(this.data.nestedMap), n.sort((s, i) => {
      const r = this.getNestedRowInfo(s.id), o = this.getNestedRowInfo(i.id), a = (r.order ?? 0) - (o.order ?? 0);
      return a === 0 ? s.index - i.index : a;
    }), n;
  },
  onRenderCell(n, t) {
    var c;
    const { row: e, col: s } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = s.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const u = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(u) && u > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ p("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: V(a, r) }) : h = /* @__PURE__ */ p(W, { className: "dtable-child-label", content: a, generatorThis: t }), n.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && n.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, s, r)) ?? /* @__PURE__ */ p("a", { className: `${gn} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ p("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: u = o } = s.setting;
      u && (u === !0 && (u = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ p("div", { className: "dtable-nested-indent", style: { width: u * l.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ p("a", { className: `${gn} state`, children: /* @__PURE__ */ p("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${gn}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${gn}`)))
      return this.toggleRow(t), !0;
  }
}, su = nt(nu);
function Cs(n, { row: t, col: e }) {
  const { data: s } = t, i = s ? s[e.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarCodeKey: a, avatarNameKey: l = `${e.name}Name` } = e.setting;
  let { avatarProps: c = {} } = e.setting;
  typeof c == "function" && (c = c(e, t));
  const u = (s ? s[l] : i) || n[0], h = {
    size: "xs",
    src: s ? s[o] : void 0,
    text: u,
    code: a ? s ? s[a] : void 0 : i,
    ...c,
    className: x(r, c.className, "flex-none")
  };
  if (n[0] = /* @__PURE__ */ p(Qn, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: g } = e.setting, f = typeof g == "function" ? g(e, t) : g;
    n[0] = /* @__PURE__ */ p("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      n[0],
      /* @__PURE__ */ p("div", { children: u })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ p("span", { children: u })
    ] }));
  return n;
}
const iu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Cs
    },
    avatarBtn: {
      onRenderCell: Cs
    },
    avatarName: {
      onRenderCell: Cs
    }
  }
}, ru = nt(iu, { buildIn: !0 }), ou = {
  name: "sort-type",
  onRenderHeaderCell(n, t) {
    const { col: e } = t, { setting: s } = e;
    let { sortType: i } = s;
    if (e.setting.sort !== void 0 || i === !1)
      return n;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ p("div", { className: `dtable-sort dtable-sort-${a}` });
      n.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = s;
      if (c) {
        const u = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, u, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...g } = c;
        n[0] = /* @__PURE__ */ p("a", { className: "dtable-sort-link", href: V(h, { ...s, sortType: u }), ...g, children: [
          n[0],
          l
        ] });
      } else
        n.push(l);
    }
    return n;
  }
}, au = nt(ou, { buildIn: !0 }), Ss = (n) => {
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
    Ss(t.left.list), Ss(t.center.list), Ss(t.right.list);
  }
}, cu = nt(lu);
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
        n.push(/* @__PURE__ */ p("div", { class: "dtable-header-group", style: o, children: e }));
      }
      n.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return n;
  }
}, uu = nt(hu), du = {
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
    const a = (l, c, u) => {
      const { index: h } = c;
      l.forEach((g, f) => {
        const { index: _ } = g, m = `C${_}R${h}`;
        if (s.has(m))
          return;
        const y = t.call(this, { row: c, col: g });
        if (!y)
          return;
        const v = Math.min(y.colSpan || 1, l.length - f), b = Math.min(y.rowSpan || 1, i.length - u);
        if (v <= 1 && b <= 1)
          return;
        let w = 0;
        for (let S = 0; S < v; S++) {
          w += l[f + S].realWidth;
          for (let k = 0; k < b; k++) {
            const T = `C${_ + S}R${h + k}`;
            T !== m && s.add(T);
          }
        }
        e.set(m, {
          colSpan: v,
          rowSpan: b,
          width: w,
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
}, fu = nt(du), pu = {
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
      });
    }
  }
}, za = nt(pu);
function gu() {
  var b, w;
  const { scrollToMouse: n } = this.data;
  if (!n)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: s } = n;
  if (!t || Date.now() - e < s)
    return;
  const i = (w = (b = this.ref.current) == null ? void 0 : b.querySelector(".dtable-body")) == null ? void 0 : w.getBoundingClientRect();
  if (!i)
    return;
  const { maxStep: r, detectPadding: o, speed: a, side: l } = n, { x: c, y: u } = t, { left: h, top: g, right: f, bottom: _ } = i;
  let m = 0;
  c < h - o ? m = -Math.max(r, h - o - c) : c > f - o && (m = Math.max(r, c - (f - o)));
  let y = 0;
  if (u < g - o ? y = -Math.max(r, g - o - u) : u > _ - o && (y = Math.max(r, u - (_ - o))), l) {
    const S = new Set((Array.isArray(l) ? l : [l]).reduce((k, T) => (T === "x" ? k.push("left", "right") : T === "y" ? k.push("top", "bottom") : k.push(T), k), []));
    (!S.has("left") && m < 0 || !S.has("right") && m > 0) && (m = 0), (!S.has("top") && y < 0 || !S.has("bottom") && y > 0) && (y = 0);
  }
  const v = {};
  m !== 0 && (v.scrollLeft = this.layout.scrollLeft + a * m), y !== 0 && (v.scrollTop = this.layout.scrollTop + a * y), this.scroll(v);
}
const mu = {
  name: "autoscroll",
  plugins: [za],
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
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, u = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : u > c + a && (r.scrollTop = u - c + e);
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
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(gu.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, _u = nt(mu);
const yu = {
  name: "sortable",
  defaultOptions: {
    sortable: !0,
    canSortTo(n, t) {
      return this.options.nested ? this.getNestedRowInfo(n.id).parent === this.getNestedRowInfo(t.id).parent : !0;
    }
  },
  when: (n) => !!n.sortable,
  plugins: [za, _u],
  events: {
    click(n) {
      this.data.ignoreNextClick && (n.preventDefault(), this.data.ignoreNextClick = void 0), n.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(n) {
      var a;
      if (this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick), this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options, e = d(n.target);
      if (!e.closest(t).length)
        return;
      const i = this.getPointerInfo(n);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, n)) === !1)
        return;
      e.closest("a,button,img").attr("draggable", "false").length && n.preventDefault();
      const o = n.clientY;
      this.data.sortableInfo = { from: r, offset: o - i.cellElement.getBoundingClientRect().top, startMouseY: o, lastMouseY: o };
    },
    document_mouseup(n) {
      var s;
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      this.stopScrollToMouse();
      const e = this.getSortingState(n);
      if (e) {
        let i, r;
        const { sortingFrom: o, sortingTo: a, sortingSide: l } = e;
        if (a && l) {
          const c = [...this.layout.rows], u = o.index, h = a.index, g = c.splice(u, 1);
          c.splice(h, 0, g[0]), i = {}, r = [], c.forEach(({ id: f }, _) => {
            i[f] = _, r.push(f);
          }), ((s = this.options.onSort) == null ? void 0 : s.call(this, o, a, l, r)) === !1 && (i = void 0, r = void 0);
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && (this.data.ignoreNextClick = window.setTimeout(() => {
          this.data.ignoreNextClick = void 0;
        })), this.disableAnimation(), this.update({
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
    document_mousemovesmooth(n) {
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      const e = this.getSortingState(n);
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.lastMouseY = n.clientY, t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(n) {
      var T;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: s, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, u = l.height - s - i, h = n.clientX - l.left, g = n.clientY - l.top - s;
      if (h < 0 || h > c || g < 0 || g > u)
        return e.state;
      const f = g + o, _ = r.find((A) => A.top <= f && A.top + a > f);
      if (!_)
        return e.state;
      const m = e.from, y = _.id !== m.id ? _.id : void 0, v = y ? this.getRowInfo(y) : void 0, b = g, w = f < _.top + a / 2 ? "before" : "after";
      return v && ((T = this.options.canSortTo) == null ? void 0 : T.call(this, m, v, w)) !== !1 ? {
        sortingFrom: m,
        sortingPos: b,
        sortingTo: v,
        sortingSide: w
      } : {
        sortingFrom: m,
        sortingPos: b,
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
      const u = r.id === a.id;
      u && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), s.index > a.index && (u && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : s.index < a.index && (u && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && n.push({
      outer: !0,
      style: l,
      className: c
    }), n;
  }
}, vu = nt(yu), bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Ia,
  avatar: ru,
  cellspan: fu,
  checkable: Zh,
  custom: Uh,
  group: cu,
  headerGroup: uu,
  nested: su,
  renderDatetime: xa,
  renderDatetimeCell: Ma,
  renderFormat: Ki,
  renderFormatCell: Na,
  renderHtmlCell: Ys,
  renderLink: ka,
  renderLinkCell: Ta,
  renderMapCell: Ea,
  renderStyleMapCell: $a,
  rich: Oh,
  sort: jh,
  sortType: au,
  sortable: vu
}, Symbol.toStringTag, { value: "Module" }));
class un extends U {
  setOptions(t) {
    return t = super.setOptions(t), t.parent || (t.parent = this.element), t;
  }
}
un.NAME = "DTable";
un.Component = Ui;
un.definePlugin = nt;
un.removePlugin = pa;
un.plugins = bu;
var Fa = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Tr = (n, t, e) => (Fa(n, t, "read from private field"), e ? e.call(n) : t.get(n)), wu = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Nr = (n, t, e, s) => (Fa(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), _e;
const Cu = "nav", Sn = '[data-toggle="tab"]', Su = "active";
class Oa extends Ht {
  constructor() {
    super(...arguments), wu(this, _e, 0);
  }
  active(t) {
    const e = this.$element, s = e.find(Sn);
    let i = t ? d(t).closest(Sn) : s.filter(`.${Su}`);
    if (!i.length && (i = e.find(Sn).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = d(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Tr(this, _e) && clearTimeout(Tr(this, _e)), Nr(this, _e, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), Nr(this, _e, 0);
    }, 10)));
  }
}
_e = /* @__PURE__ */ new WeakMap();
Oa.NAME = "Tabs";
d(document).on("click.tabs.zui", Sn, (n) => {
  n.preventDefault();
  const t = d(n.target), e = t.closest(`.${Cu}`);
  e.length && Oa.ensure(e).active(t);
});
export {
  d as $,
  qr as Ajax,
  xo as Avatar,
  Tu as BUILD,
  To as BtnGroup,
  Vl as Bus,
  Wo as ColorPicker,
  pi as CommonList,
  Ht as Component,
  U as ComponentFromReact,
  Nn as Computed,
  W as CustomContent,
  yo as CustomRender,
  un as DTable,
  Jo as DatePicker,
  Zo as DatetimePicker,
  qt as Dropdown,
  Di as FileSelector,
  Z as HElement,
  Ce as HtmlContent,
  X as Icon,
  Li as ImageSelector,
  mi as Menu,
  Lu as Messager,
  zs as Modal,
  Ge as ModalBase,
  Fs as ModalTrigger,
  sa as Nav,
  aa as Pager,
  Hi as Pick,
  ha as Picker,
  vo as Portal,
  ko as ProgressCircle,
  j as ReactComponent,
  ua as SearchBox,
  _i as SearchMenu,
  Zl as Sticky,
  qe as TIME_DAY,
  Oa as Tabs,
  Yo as TimePicker,
  da as Toolbar,
  Bt as Tooltip,
  xu as VERSION,
  ch as addDate,
  uo as bindHotkeys,
  Ft as bus,
  d as cash,
  x as classes,
  De as componentsMap,
  dn as convertBytes,
  Wl as create,
  B as createDate,
  Pl as createFormData,
  rc as createPortal,
  q as createRef,
  El as deepGet,
  Nl as deepGetPath,
  Eu as defineFn,
  En as delay,
  jl as disableScroll,
  Mu as dom,
  or as downloadFile,
  Jl as enterFullscreen,
  li as fetchData,
  $t as formatBytes,
  kt as formatDate,
  Vu as formatDateSpan,
  V as formatString,
  Gr as getClassList,
  An as getComponent,
  di as getFullscreenElement,
  ho as getHotkeysMap,
  ec as getReactComponent,
  Ts as getZData,
  mt as h,
  $u as hotkeys,
  O as i18n,
  xs as isDiff,
  Nu as isFetchSetting,
  oe as isSameDay,
  jo as isSameMonth,
  Hu as isSameWeek,
  Ds as isSameYear,
  Wu as isToday,
  Bu as isTomorrow,
  Bo as isValidDate,
  bt as isValidElement,
  ju as isYesterday,
  z as mergeProps,
  ht as nextGid,
  oo as parseSize,
  _o as reactComponents,
  rt as registerReactComponent,
  ro as removeUndefinedProps,
  ve as render,
  As as renderCustomContent,
  sc as renderCustomResult,
  er as setZData,
  Dl as shareData,
  Is as store,
  Yr as storeData,
  Jr as takeData,
  _n as toCssSize,
  po as toggleFullscreen,
  fo as unbindHotkeys
};
//# sourceMappingURL=zui.esm.js.map
