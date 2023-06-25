var ji = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var C = (e, t, n) => (ji(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, D = (e, t, n, s) => (ji(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var nt = (e, t, n) => (ji(e, t, "access private method"), n);
const Gt = document, qs = window, Qa = Gt.documentElement, Le = Gt.createElement.bind(Gt), tl = Le("div"), Yi = Le("table"), Wh = Le("tbody"), da = Le("tr"), { isArray: Si, prototype: el } = Array, { concat: Dh, filter: tr, indexOf: nl, map: sl, push: Ih, slice: il, some: er, splice: Oh } = el, Hh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Bh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, zh = /<.+>/, Fh = /^\w+$/;
function nr(e, t) {
  const n = Uh(t);
  return !e || !n && !Ee(t) && !G(t) ? [] : !n && Bh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Fh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class Mi {
  constructor(t, n) {
    if (!t)
      return;
    if (co(t))
      return t;
    let s = t;
    if (et(t)) {
      const i = n || Gt;
      if (s = Hh.test(t) && Ee(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : zh.test(t) ? al(t) : co(i) ? i.find(t) : et(i) ? m(i).find(t) : nr(t, i), !s)
        return;
    } else if (Pe(t))
      return this.ready(t);
    (s.nodeType || s === qs) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new Mi(t, n);
  }
}
const x = Mi.prototype, m = x.init;
m.fn = m.prototype = x;
x.length = 0;
x.splice = Oh;
typeof Symbol == "function" && (x[Symbol.iterator] = el[Symbol.iterator]);
function co(e) {
  return e instanceof Mi;
}
function un(e) {
  return !!e && e === e.window;
}
function Ee(e) {
  return !!e && e.nodeType === 9;
}
function Uh(e) {
  return !!e && e.nodeType === 11;
}
function G(e) {
  return !!e && e.nodeType === 1;
}
function Vh(e) {
  return !!e && e.nodeType === 3;
}
function qh(e) {
  return typeof e == "boolean";
}
function Pe(e) {
  return typeof e == "function";
}
function et(e) {
  return typeof e == "string";
}
function at(e) {
  return e === void 0;
}
function Gn(e) {
  return e === null;
}
function ol(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function sr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = un;
m.isFunction = Pe;
m.isArray = Si;
m.isNumeric = ol;
m.isPlainObject = sr;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (sr(e)) {
    const s = Object.keys(e);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (t.call(e[r], r, e[r]) === !1)
        return e;
    }
  } else
    for (let s = 0, i = e.length; s < i; s++)
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  return e;
}
m.each = K;
x.each = function(e) {
  return K(this, e);
};
x.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Gs(...e) {
  const t = qh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Gs(t, m, n);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      t && (Si(o[r]) || sr(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), Gs(t, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
m.extend = Gs;
x.extend = function(e) {
  return Gs(x, e);
};
const Gh = /\S+/g;
function Ei(e) {
  return et(e) ? e.match(Gh) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = Ei(e), s = !at(t);
  return this.each((i, o) => {
    G(o) && K(n, (r, a) => {
      s ? t ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
x.addClass = function(e) {
  return this.toggleClass(e, !0);
};
x.removeAttr = function(e) {
  const t = Ei(e);
  return this.each((n, s) => {
    G(s) && K(t, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function jh(e, t) {
  if (e) {
    if (et(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !G(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Gn(n) ? void 0 : n;
      }
      return at(t) ? this : Gn(t) ? this.removeAttr(e) : this.each((n, s) => {
        G(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = jh;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && er.call(this, (t) => G(t) && t.classList.contains(e));
};
x.get = function(e) {
  return at(e) ? il.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
x.eq = function(e) {
  return m(this.get(e));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Yh(e) {
  return at(e) ? this.get().map((t) => G(t) || Vh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    G(n) && (n.textContent = e);
  });
}
x.text = Yh;
function jt(e, t, n) {
  if (!G(e))
    return;
  const s = qs.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function kt(e, t) {
  return parseInt(jt(e, t), 10) || 0;
}
function fa(e, t) {
  return kt(e, `border${t ? "Left" : "Top"}Width`) + kt(e, `padding${t ? "Left" : "Top"}`) + kt(e, `padding${t ? "Right" : "Bottom"}`) + kt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Ki = {};
function Kh(e) {
  if (Ki[e])
    return Ki[e];
  const t = Le(e);
  Gt.body.insertBefore(t, null);
  const n = jt(t, "display");
  return Gt.body.removeChild(t), Ki[e] = n !== "none" ? n : "block";
}
function pa(e) {
  return jt(e, "display") === "none";
}
function rl(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Ti(e) {
  return et(e) ? (t, n) => rl(n, e) : Pe(e) ? e : co(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = Ti(e);
  return m(tr.call(this, (n, s) => t.call(n, s, n)));
};
function de(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return de(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Xh = /^\s*<(\w+)[^>]*>/, Jh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ga = {
  "*": tl,
  tr: Wh,
  td: da,
  th: da,
  thead: Yi,
  tbody: Yi,
  tfoot: Yi
};
function al(e) {
  if (!et(e))
    return [];
  if (Jh.test(e))
    return [Le(RegExp.$1)];
  const t = Xh.test(e) && RegExp.$1, n = ga[t] || ga["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = al;
x.has = function(e) {
  const t = et(e) ? (n, s) => nr(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = Ti(e);
  return this.filter((n, s) => (!et(e) || G(s)) && !t.call(s, n, s));
};
function Zt(e, t, n, s) {
  const i = [], o = Pe(t), r = s && Ti(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (o) {
      const h = t(e[a]);
      h.length && Ih.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function ll(e) {
  return e.multiple && e.options ? Zt(tr.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Zh(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ml.test(n.type)) {
      const i = Si(e) ? sl.call(e, String) : Gn(e) ? [] : [String(e)];
      s ? K(n.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = at(e) || Gn(e) ? "" : e;
  }) : this[0] && ll(this[0]);
}
x.val = Zh;
x.is = function(e) {
  const t = Ti(e);
  return er.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Et(e) {
  return e.length > 1 ? tr.call(e, (t, n, s) => nl.call(s, t) === n) : e;
}
m.unique = Et;
x.add = function(e, t) {
  return m(Et(this.get().concat(m(e, t).get())));
};
x.children = function(e) {
  return de(m(Et(Zt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return de(m(Et(Zt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return nl.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return de(m(Et(Zt(this, (t) => m(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return m(Et(Zt(this, (t) => nr(e, t))));
};
const Qh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, tu = /^$|^module$|\/(java|ecma)script/i, eu = ["type", "src", "nonce", "noModule"];
function nu(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (tu.test(i.type) && Qa.contains(i)) {
      const o = Le("script");
      o.text = i.textContent.replace(Qh, ""), K(eu, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function su(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && nu(t, e.ownerDocument);
}
function fe(e, t, n, s, i, o, r, a) {
  return K(e, (l, h) => {
    K(m(h), (c, u) => {
      K(m(t), (f, d) => {
        const p = n ? u : d, y = n ? d : u, v = n ? c : f;
        su(p, v ? y.cloneNode(!0) : y, s, i, !v);
      }, a);
    }, r);
  }, o), t;
}
x.after = function() {
  return fe(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return fe(arguments, this, !1, !1, !0);
};
function iu(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (at(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    G(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = iu;
x.appendTo = function(e) {
  return fe(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return fe(arguments, this, !1, !0);
};
x.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
x.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
x.insertAfter = function(e) {
  return fe(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return fe(arguments, this, !0, !0);
};
x.prepend = function() {
  return fe(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return fe(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return m(Et(Zt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return de(m(Et(Zt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return de(m(Et(Zt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return de(m(Et(Zt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return m(Dh.apply([], sl.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && jt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Qa;
  });
};
x.slice = function(e, t) {
  return m(il.call(this, e, t));
};
const ou = /-([a-z])/g;
function ir(e) {
  return e.replace(ou, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return Gt.readyState !== "loading" ? t() : Gt.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
x.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + qs.pageYOffset,
    left: t.left + qs.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = jt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && jt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && G(i)) {
      const o = m(i).offset();
      n.top -= o.top + kt(i, "borderTopWidth"), n.left -= o.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - kt(e, "marginTop"),
    left: n.left - kt(e, "marginLeft")
  };
};
const cl = {
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
x.prop = function(e, t) {
  if (e) {
    if (et(e))
      return e = cl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[cl[e] || e];
  });
};
const ru = /^--/;
function or(e) {
  return ru.test(e);
}
const Xi = {}, { style: au } = tl, lu = ["webkit", "moz", "ms"];
function cu(e, t = or(e)) {
  if (t)
    return e;
  if (!Xi[e]) {
    const n = ir(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${lu.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in au)
        return Xi[e] = r, !1;
    });
  }
  return Xi[e];
}
const hu = {
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
function hl(e, t, n = or(e)) {
  return !n && !hu[e] && ol(t) ? `${t}px` : t;
}
function uu(e, t) {
  if (et(e)) {
    const n = or(e);
    return e = cu(e, n), arguments.length < 2 ? this[0] && jt(this[0], e, n) : e ? (t = hl(e, t, n), this.each((s, i) => {
      G(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = uu;
function ul(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const du = /^\s+|\s+$/;
function ma(e, t) {
  const n = e.dataset[t] || e.dataset[ir(t)];
  return du.test(n) ? n : ul(JSON.parse, n);
}
function fu(e, t, n) {
  n = ul(JSON.stringify, n), e.dataset[ir(t)] = n;
}
function pu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ma(this[0], s);
    return n;
  }
  if (et(e))
    return arguments.length < 2 ? this[0] && ma(this[0], e) : at(t) ? this : this.each((n, s) => {
      fu(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = pu;
function dl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(o) {
      if (this[0])
        return un(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Ee(this[0]) ? dl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (o && t ? kt(this[0], `margin${n ? "Top" : "Left"}`) + kt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return at(s) ? void 0 : this;
    if (!arguments.length)
      return un(this[0]) ? this[0].document.documentElement[`client${t}`] : Ee(this[0]) ? dl(this[0], t) : this[0].getBoundingClientRect()[n] - fa(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!G(r))
        return;
      const a = jt(r, "boxSizing");
      r.style[n] = hl(n, i + (a === "border-box" ? fa(r, !e) : 0));
    });
  };
});
const ya = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!G(n))
      return;
    const s = pa(n);
    (at(e) ? s : e) ? (n.style.display = n[ya] || "", pa(n) && (n.style.display = Kh(n.tagName))) : s || (n[ya] = jt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const wa = "___ce", rr = ".", ar = { focus: "focusin", blur: "focusout" }, fl = { mouseenter: "mouseover", mouseleave: "mouseout" }, gu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function lr(e) {
  return fl[e] || ar[e] || e;
}
function cr(e) {
  const t = e.split(rr);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (et(e)) {
    const [s, i] = cr(e), o = lr(s);
    if (!o)
      return this;
    const r = gu.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Gt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(rr), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in ar;
  return this.each((s, i) => {
    n && Pe(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function pl(e) {
  return e[wa] = e[wa] || {};
}
function mu(e, t, n, s, i) {
  const o = pl(e);
  o[t] = o[t] || [], o[t].push([n, s, i]), e.addEventListener(t, i);
}
function gl(e, t) {
  return !t || !er.call(t, (n) => e.indexOf(n) < 0);
}
function js(e, t, n, s, i) {
  const o = pl(e);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !gl(r, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in o)
      js(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (at(e))
    this.each((s, i) => {
      !G(i) && !Ee(i) && !un(i) || js(i);
    });
  else if (et(e))
    Pe(t) && (n = t, t = ""), K(Ei(e), (s, i) => {
      const [o, r] = cr(i), a = lr(o);
      this.each((l, h) => {
        !G(h) && !Ee(h) && !un(h) || js(h, a, r, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return de(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function yu(e, t, n, s, i) {
  if (!et(e)) {
    for (const o in e)
      this.on(o, t, n, e[o], i);
    return this;
  }
  return et(t) || (at(t) || Gn(t) ? t = "" : at(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Pe(s) || (s = n, n = void 0), s ? (K(Ei(e), (o, r) => {
    const [a, l] = cr(r), h = lr(a), c = a in fl, u = a in ar;
    h && this.each((f, d) => {
      if (!G(d) && !Ee(d) && !un(d))
        return;
      const p = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !gl(l, y.namespace.split(rr)) || !t && (u && (y.target !== d || y.___ot === h) || c && y.relatedTarget && d.contains(y.relatedTarget)))
          return;
        let v = d;
        if (t) {
          let _ = y.target;
          for (; !rl(_, t); )
            if (_ === d || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return d;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, y, y.___td);
        i && js(d, h, l, t, p), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      p.guid = s.guid = s.guid || m.guid++, mu(d, h, l, t, p);
    });
  }), this) : this;
}
x.on = yu;
function wu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = wu;
const vu = /\r?\n/g;
function _u(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(vu, `\r
`))}`;
}
const bu = /file|reset|submit|button|image/i, ml = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || bu.test(i.type) || ml.test(i.type) && !i.checked)
        return;
      const o = ll(i);
      if (!at(o)) {
        const r = Si(o) ? o : [o];
        K(r, (a, l) => {
          e += _u(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function xu(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let s = e;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let o = t.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function $u(e, t, n) {
  try {
    const s = xu(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function ot(e, ...t) {
  if (t.length === 0)
    return e;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((s) => {
      const i = n[s] ?? "";
      e = e.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), e;
  }
  for (let n = 0; n < t.length; n++) {
    const s = t[n] ?? "";
    e = e.replace(new RegExp(`\\{${n}\\}`, "g"), `${s}`);
  }
  return e;
}
var hr = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(hr || {});
function ku(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / hr[n]).toFixed(t) + n);
}
const qf = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * hr[s];
};
let ur = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ne;
function Cu() {
  return ur;
}
function Su(e) {
  ur = e.toLowerCase();
}
function yl(e, t) {
  ne || (ne = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, ne, e);
}
function Yt(e, t, n, s, i, o) {
  Array.isArray(e) ? ne && e.unshift(ne) : e = ne ? [ne, e] : [e], typeof n == "string" && (o = i, i = s, s = n, n = void 0);
  const r = i || ur;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const c = o && l === ne ? `${o}.${t}` : t;
    if (a = $u(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? ot(a, ...Array.isArray(n) ? n : [n]) : a;
}
function Mu(e, t, n, s) {
  return Yt(void 0, e, t, n, s);
}
Yt.addLang = yl;
Yt.getLang = Mu;
Yt.getCode = Cu;
Yt.setCode = Su;
yl({
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
function wl(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = n.get(i);
    typeof r == "number" ? t[r][1] = !!o : (n.set(i, t.length), t.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? wl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), t.sort((i, o) => (n.get(i[0]) || 0) - (n.get(o[0]) || 0));
}
const T = (...e) => wl(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = T;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(e, ...t));
  });
};
const _n = /* @__PURE__ */ new WeakMap();
function vl(e, t, n) {
  const s = _n.has(e), i = s ? _n.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), _n.set(e, i)) : _n.delete(e);
}
function Eu(e, t) {
  let n = _n.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Eu(this[0], t) : this.each((s, i) => vl(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => vl(n, e));
};
m.fn._attr = m.fn.attr;
m.fn.extend({
  attr(...e) {
    const [t, n] = e;
    return !e.length || e.length === 1 && typeof t == "string" ? this._attr.apply(this, e) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(t) : this._attr(t, n);
  }
});
m.Event = (e, t) => {
  const [n, ...s] = e.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = t, i;
};
const ho = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
});
function _l(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: o, height: r } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, f = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= f && i + r <= u;
  const d = i <= u && i + r >= 0, p = s <= f && s + o >= 0;
  return d && p;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    _l(n, e);
  });
};
function dr(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    dr(s, o.innerHTML), o.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    dr(n, e);
  });
};
const Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: _l,
  runJS: dr
}, Symbol.toStringTag, { value: "Module" }));
var Ri, F, bl, tt, ve, va, xl, uo, Ys = {}, $l = [], Tu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, fr = Array.isArray;
function le(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function kl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ri.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return Ss(e, r, s, i, null);
}
function Ss(e, t, n, s, i) {
  var o = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++bl };
  return i == null && F.vnode != null && F.vnode(o), o;
}
function wt() {
  return { current: null };
}
function rs(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function jn(e, t) {
  if (t == null)
    return e.__ ? jn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? jn(e) : null;
}
function Cl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Cl(e);
  }
}
function _a(e) {
  (!e.__d && (e.__d = !0) && ve.push(e) && !Ks.__r++ || va !== F.debounceRendering) && ((va = F.debounceRendering) || xl)(Ks);
}
function Ks() {
  var e, t, n, s, i, o, r, a;
  for (ve.sort(uo); e = ve.shift(); )
    e.__d && (t = ve.length, s = void 0, i = void 0, r = (o = (n = e).__v).__e, (a = n.__P) && (s = [], (i = le({}, o)).__v = o.__v + 1, pr(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? jn(o), o.__h), Rl(s, o), o.__e != r && Cl(o)), ve.length > t && ve.sort(uo));
  Ks.__r = 0;
}
function Sl(e, t, n, s, i, o, r, a, l, h) {
  var c, u, f, d, p, y, v, w = s && s.__k || $l, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((d = n.__k[c] = (d = t[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Ss(null, d, null, null, d) : fr(d) ? Ss(rs, { children: d }, null, null, null) : d.__b > 0 ? Ss(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
      if (d.__ = n, d.__b = n.__b + 1, (f = w[c]) === null || f && d.key == f.key && d.type === f.type)
        w[c] = void 0;
      else
        for (u = 0; u < _; u++) {
          if ((f = w[u]) && d.key == f.key && d.type === f.type) {
            w[u] = void 0;
            break;
          }
          f = null;
        }
      pr(e, d, f = f || Ys, i, o, r, a, l, h), p = d.__e, (u = d.ref) && f.ref != u && (v || (v = []), f.ref && v.push(f.ref, null, d), v.push(u, d.__c || p, d)), p != null ? (y == null && (y = p), typeof d.type == "function" && d.__k === f.__k ? d.__d = l = Ml(d, l, e) : l = El(e, d, f, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = jn(f));
    }
  for (n.__e = y, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = Tl(s).nextSibling), Al(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      Nl(v[c], v[++c], v[++c]);
}
function Ml(e, t, n) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, t = typeof s.type == "function" ? Ml(s, t, n) : El(n, s, s, i, s.__e, t));
  return t;
}
function El(e, t, n, s, i, o) {
  var r, a, l;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (n == null || i != o || i.parentNode == null)
    t:
      if (o == null || o.parentNode !== e)
        e.appendChild(i), r = null;
      else {
        for (a = o, l = 0; (a = a.nextSibling) && l < s.length; l += 1)
          if (a == i)
            break t;
        e.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function Tl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = Tl(n)))
        return s;
  }
  return null;
}
function Ru(e, t, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Xs(e, o, null, n[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Xs(e, o, t[o], n[o], s);
}
function ba(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Tu.test(t) ? n : n + "px";
}
function Xs(e, t, n, s, i) {
  var o;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || ba(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || ba(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? s || e.addEventListener(t, o ? $a : xa, o) : e.removeEventListener(t, o ? $a : xa, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
        try {
          e[t] = n ?? "";
          break t;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function xa(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function $a(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function pr(e, t, n, s, i, o, r, a, l) {
  var h, c, u, f, d, p, y, v, w, _, $, S, k, E, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (h = F.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new z(v, _), c.constructor = A, c.render = Au), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = le({}, c.__s)), le(c.__s, A.getDerivedStateFromProps(v, c.__s))), f = c.props, d = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, S = F.__r, k = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(t), h = c.render(c.props, c.state, c.context), E = 0; E < c._sb.length; E++)
            c.__h.push(c._sb[E]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (s = le(le({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(f, d)), Sl(e, fr(N = h != null && h.type === rs && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, o, r, a, l), c.base = t.__e, t.__h = null, c.__h.length && r.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Nu(n.__e, t, n, s, i, o, r, l);
    (h = F.diffed) && h(t);
  } catch (H) {
    t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), F.__e(H, t, n);
  }
}
function Rl(e, t) {
  F.__c && F.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      F.__e(s, n.__v);
    }
  });
}
function Nu(e, t, n, s, i, o, r, a) {
  var l, h, c, u = n.props, f = t.props, d = t.type, p = 0;
  if (d === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((l = o[p]) && "setAttribute" in l == !!d && (d ? l.localName === d : l.nodeType === 3)) {
        e = l, o[p] = null;
        break;
      }
  }
  if (e == null) {
    if (d === null)
      return document.createTextNode(f);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), o = null, a = !1;
  }
  if (d === null)
    u === f || a && e.data === f || (e.data = f);
  else {
    if (o = o && Ri.call(e.childNodes), h = (u = n.props || Ys).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Ru(e, f, u, i, a), c)
      t.__k = [];
    else if (Sl(e, fr(p = t.props.children) ? p : [p], t, n, s, i && d !== "foreignObject", o, r, o ? o[0] : n.__k && jn(n, 0), a), o != null)
      for (p = o.length; p--; )
        o[p] != null && kl(o[p]);
    a || ("value" in f && (p = f.value) !== void 0 && (p !== e.value || d === "progress" && !p || d === "option" && p !== u.value) && Xs(e, "value", p, u.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== e.checked && Xs(e, "checked", p, u.checked, !1));
  }
  return e;
}
function Nl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    F.__e(s, n);
  }
}
function Al(e, t, n) {
  var s, i;
  if (F.unmount && F.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || Nl(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        F.__e(o, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Al(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || kl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Au(e, t, n) {
  return this.constructor(e, n);
}
function Yn(e, t, n) {
  var s, i, o;
  F.__ && F.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, o = [], pr(t, e = (!s && n || t).__k = q(rs, null, [e]), i || Ys, Ys, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? Ri.call(t.childNodes) : null, o, !s && n ? n : i ? i.__e : t.firstChild, s), Rl(o, e);
}
Ri = $l.slice, F = { __e: function(e, t, n, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, bl = 0, tt = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = le({}, this.state), typeof e == "function" && (e = e(le({}, n), this.props)), e && le(n, e), e != null && this.__v && (t && this._sb.push(t), _a(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), _a(this));
}, z.prototype.render = rs, ve = [], xl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, uo = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ks.__r = 0;
var Ll = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, n[t[o++]]) : t[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[t[++o]] = a : r === 6 ? s[1][t[++o]] += a + "" : r ? (i = e.apply(a, Ll(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : s.push(a);
  }
  return s;
}, ka = /* @__PURE__ */ new Map();
function Lu(e) {
  var t = ka.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ka.set(this, t)), (t = Ll(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(f) {
      o === 1 && (f || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, f, r) : o === 3 && (f || r) ? (l.push(3, f, r), o = 2) : o === 2 && r === "..." && f ? l.push(4, f, 0) : o === 2 && r && !f ? l.push(5, 0, !0, r) : o >= 5 && ((r || !f && o === 5) && (l.push(o, 0, r, i), o = 6), f && (l.push(o, f, 0, i), o = 6)), r = "";
    }, c = 0; c < n.length; c++) {
      c && (o === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || n[c][u + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const jf = Lu.bind(q);
function Pu(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: o, ...r } = e;
  return q(t, { class: T(n), style: s, ...r, ...o }, i);
}
var Wu = 0;
function g(e, t, n, s, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Wu, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return F.vnode && F.vnode(h), h;
}
var Qn;
class Pl extends z {
  constructor() {
    super(...arguments);
    L(this, Qn, wt());
  }
  componentDidMount() {
    this.props.executeScript && m(C(this, Qn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...o } = n;
    return /* @__PURE__ */ g(Pu, { ref: C(this, Qn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Qn = new WeakMap();
function Du(e) {
  const {
    tag: t,
    className: n,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...c
  } = e, u = [n], f = { ...s }, d = [], p = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(r, y, d, ...o));
      else {
        const w = y.call(r, d, ...o);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(y);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !tt(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? d.push(
        /* @__PURE__ */ g("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(f, w.style), w.className && u.push(w.className), w.children && d.push(w.children), w.attrs && Object.assign(c, w.attrs)) : d.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: f,
    ...c
  }, d];
}
function gr({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Du(t);
  return q(e, n, ...s);
}
function Kn(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (tt(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ g("i", { className: T(i), ...s });
}
function Iu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Ou(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Yn(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== n && t.componentWillUnmount(), e._vnode ? (t._temp || (t._container = n, t._temp = {
    nodeType: 1,
    parentNode: n,
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
  }), Yn(
    q(Iu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Wl(e, t) {
  const n = q(Ou, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var mr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, De = (e, t, n) => (mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ie = (e, t, n, s) => (mr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ys = (e, t, n) => (mr(e, t, "access private method"), n), ge, bn, Ms, Es, ze, xn;
const Dl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    gn(this, ze), gn(this, ge, void 0), gn(this, bn, void 0), gn(this, Ms, void 0), gn(this, Es, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: o } = this.constructor, r = m(e);
    if (r.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Ie(this, Ms, a), Ie(this, bn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ie(this, ge, { ...i, ...r.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, r.data(n, this).attr(s, `${a}`), o) {
      const l = `${n}:ALL`;
      let h = r.data(l);
      h || (h = /* @__PURE__ */ new Map(), r.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ie(this, Es, !0), this.emit("inited", this.options), this.afterInit();
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
  get inited() {
    return De(this, Es);
  }
  /**
   * Get the component element.
   */
  get element() {
    return De(this, bn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return De(this, ge);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return De(this, Ms);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return m(this.element);
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
  render(e) {
    this.setOptions(e);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: n } = this.constructor, { $element: s } = this;
    if (this.emit("destroyed"), s.off(this.namespace).removeData(e).attr(t, null), n) {
      const i = this.$element.data(`${e}:ALL`);
      if (i)
        if (i.delete(this._key), i.size === 0)
          this.$element.removeData(`${e}:ALL`);
        else {
          const o = i.values().next().value;
          s.data(e, o).attr(t, o.gid);
        }
    }
    Ie(this, ge, void 0), Ie(this, bn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(De(this, ge), e), De(this, ge);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(ys(this, ze, xn).call(this, e));
    return this.$element.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t) {
    this.$element.on(ys(this, ze, xn).call(this, e), t);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.$element.one(ys(this, ze, xn).call(this, e), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e, t) {
    this.$element.off(ys(this, ze, xn).call(this, e), t);
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(e, t, n) {
    return Yt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Yt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${this._key}${this.constructor.NAMESPACE}`;
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(e, t) {
    const n = m(e);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const s = n.data(`${this.KEY}:ALL`);
      return s ? s.get(t) : void 0;
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
  static ensure(e, t) {
    const n = this.get(e, t == null ? void 0 : t.key);
    return n ? (t && n.setOptions(t), n) : new this(e, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(e) {
    const { MULTI_INSTANCE: t, DATA_KEY: n } = this, s = [];
    return m(e || document).find(`[${n}]`).each((i, o) => {
      if (t) {
        const a = m(o).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const r = m(o).data(this.KEY);
      r && s.push(r);
    }), s;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(e, t) {
    return e === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(m(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    m.fn.extend({
      [e || this.NAME.replace(/(^[A-Z]+)/, (t) => t.toLowerCase())](t, ...n) {
        return this.each((s, i) => {
          var r;
          const o = this.ensure(i, typeof t == "object" ? t : void 0);
          typeof t == "string" && ((r = o[t]) == null || r.call(o, ...n));
        });
      }
    });
  }
};
let ut = Dl;
ge = /* @__PURE__ */ new WeakMap();
bn = /* @__PURE__ */ new WeakMap();
Ms = /* @__PURE__ */ new WeakMap();
Es = /* @__PURE__ */ new WeakMap();
ze = /* @__PURE__ */ new WeakSet();
xn = function(e) {
  return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
};
ut.DEFAULT = {};
ut.NAME = Dl.name;
ut.MULTI_INSTANCE = !1;
class Q extends ut {
  constructor() {
    super(...arguments), this.ref = wt();
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
    var t, n;
    (n = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || n.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    Yn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Hu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: T(t),
    style: s,
    ...i
  }, n);
}
function Il({
  type: e,
  component: t = "a",
  className: n,
  children: s,
  attrs: i,
  url: o,
  disabled: r,
  active: a,
  icon: l,
  text: h,
  target: c,
  trailingIcon: u,
  hint: f,
  checked: d,
  onClick: p,
  ...y
}) {
  const v = [
    typeof d == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${d ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(Kn, { icon: l }),
    /* @__PURE__ */ g("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ g(Kn, { icon: u })
  ];
  return q(t, {
    className: T(n, { disabled: r, active: a }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...y,
    ...i
  }, ...v);
}
function Bu({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  style: o,
  onClick: r
}) {
  return q(e, {
    className: T(t),
    style: o,
    onClick: r,
    ...s
  }, n, typeof i == "function" ? i() : i);
}
function zu({
  component: e = "div",
  className: t,
  style: n,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return q(e, {
    className: T(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: r,
    ...o
  }, a);
}
function Fu({ type: e, ...t }) {
  return /* @__PURE__ */ g(gr, { ...t });
}
function Ol({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return q(e, {
    className: T(t),
    style: s,
    ...i
  }, n);
}
const fo = class extends z {
  constructor() {
    super(...arguments), this.ref = wt();
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
    var e, t;
    (t = (e = this.props).beforeDestroy) == null || t.call(e, { menu: this });
  }
  afterRender(e) {
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { menu: this, firstRender: e });
  }
  handleItemClick(e, t, n, s) {
    n && n.call(s.target, s, e, t);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: e, index: t, event: s });
  }
  beforeRender() {
    var n;
    const e = { ...this.props }, t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: s, onClickItem: i } = e, o = { ...t };
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = T(o.className), o;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const p = i[t.type || "item"];
        if (p)
          return /* @__PURE__ */ g(p, { ...s });
      } else if (typeof i == "function") {
        const p = i.call(this, s, q);
        if (tt(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: o = "item", component: r, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...f } = s;
    if (o === "html")
      return /* @__PURE__ */ g(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, f.className),
          ...l,
          style: c || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        a
      );
    const d = !r || typeof r == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || fo.ItemComponents[o] : r;
    return Object.assign(f, {
      type: o,
      component: typeof r == "string" ? r : void 0
    }), e.checkbox && o === "item" && f.checked === void 0 && (f.checked = !!f.active), this.renderTypedItem(d, {
      className: T(h),
      children: u,
      style: c,
      key: a,
      ...l
    }, {
      ...f,
      type: o,
      component: typeof r == "string" ? r : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: o, ...r } = t;
    return /* @__PURE__ */ g(
      "li",
      {
        className: T(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...r,
        children: [
          /* @__PURE__ */ g(e, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      o
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: s,
      className: i,
      items: o,
      children: r,
      itemRender: a,
      onClickItem: l,
      beforeRender: h,
      afterRender: c,
      beforeDestroy: u,
      ...f
    } = e, d = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ g(d, { class: T(this.name, i), style: n, ...f, ref: this.ref, children: [
      o && o.map(this.renderItem.bind(this, e)),
      r
    ] });
  }
};
let We = fo;
We.ItemComponents = {
  divider: Hu,
  item: Il,
  heading: Bu,
  space: zu,
  custom: Fu,
  basic: Ol
};
We.ROOT_TAG = "menu";
We.NAME = "action-menu";
class Hl extends Q {
}
Hl.NAME = "ActionMenu";
Hl.Component = We;
function Uu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(Il, { ...s });
}
var Bl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (Bl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ji = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Vu = (e, t, n, s) => (Bl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ts, At, $n;
let Ni = class extends We {
  constructor(t) {
    super(t), Ji(this, Ts, /* @__PURE__ */ new Set()), Ji(this, At, void 0), Ji(this, $n, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), Vu(this, At, t.nestedShow === void 0), ft(this, At) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: o, indent: r, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), !o && r && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${r}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: o, beforeRender: r, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: ft(this, At) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: c,
      onClickItem: l,
      afterRender: h,
      beforeRender: r,
      beforeDestroy: o,
      itemRender: a,
      level: (u || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ g(s, { ...i, "data-level": i.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, n) {
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s);
    if (i.level = t.level || 0, !this.isNestedItem(i))
      return i;
    const o = i.key ?? i.id ?? `${t.level || 0}:${s}`;
    ft(this, Ts).add(o);
    const r = this.isNestedMenuShow(o);
    if (r && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ft(this, $n).bind(this, o, !0),
        onMouseLeave: ft(this, $n).bind(this, o, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ft(this, $n).call(this, o, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(r, i);
    return a && (i.children = [i.children, a]), i.show = r, i.rootClass = [i.rootClass, "has-nested-menu", r ? "show" : ""], i;
  }
  isNestedMenuShow(t) {
    const n = ft(this, At) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggleNestedMenu(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(t, n);
    if (!ft(this, At))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ft(this, Ts).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), n === void 0)
      n = !i[t];
    else if (!!i[t] == !!n)
      return !1;
    return n ? i[t] = n : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  showNestedMenu(t) {
    return this.toggleNestedMenu(t, !0);
  }
  hideNestedMenu(t) {
    return this.toggleNestedMenu(t, !1);
  }
  showAllNestedMenu() {
    ft(this, At) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ft(this, At) && this.setState({ nestedShow: !1 });
  }
};
Ts = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Ni.ItemComponents = {
  item: Uu
};
class zl extends Q {
}
zl.NAME = "ActionMenuNested";
zl.Component = Ni;
let Ai = class extends Ni {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = T(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      "menu-popup": t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ g("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Ai.NAME = "menu";
class Fl extends Q {
}
Fl.NAME = "Menu";
Fl.Component = Ai;
class Kt extends z {
  render() {
    const {
      component: t,
      type: n,
      btnType: s,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: c,
      loading: u,
      loadingIcon: f,
      loadingText: d,
      icon: p,
      text: y,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: $,
      ...S
    } = this.props, k = t || (a ? "a" : "button"), E = y == null || typeof y == "string" && !y.length || u && !d, N = w && E && !p && !v && !r && !u;
    return q(
      k,
      {
        className: T("btn", n, o, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: _ === void 0 ? !N && !r && E : _
        }, i ? `size-${i}` : ""),
        title: $,
        [k === "a" ? "href" : "data-url"]: a,
        [k === "a" ? "target" : "data-target"]: l,
        type: k === "button" ? s : void 0,
        ...S
      },
      /* @__PURE__ */ g(Kn, { icon: u ? `icon ${f || "icon-spinner-snake"} spin` : p }),
      E ? null : /* @__PURE__ */ g("span", { className: "text", children: u ? d : y }),
      u ? null : r,
      u ? null : typeof v == "string" ? /* @__PURE__ */ g("i", { class: `icon ${v}` }) : v,
      u ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function qu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Kt, { type: n, ...s });
}
function as(e) {
  return e.split("-")[1];
}
function yr(e) {
  return e === "y" ? "height" : "width";
}
function ke(e) {
  return e.split("-")[0];
}
function ls(e) {
  return ["top", "bottom"].includes(ke(e)) ? "x" : "y";
}
function Ca(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = ls(t), l = yr(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (ke(t)) {
    case "top":
      u = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: o, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: r };
      break;
    case "left":
      u = { x: s.x - i.width, y: r };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (as(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Gu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = Ca(h, s, l), f = s, d = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: $, data: S, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, d = { ...d, [v]: { ...d[v], ...S } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = Ca(h, f, l)), y = -1);
  }
  return { x: c, y: u, placement: f, strategy: i, middlewareData: d };
};
function cs(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ul(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Js(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Vl(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = !1, padding: d = 0 } = cs(t, e), p = Ul(d), y = a[f ? u === "floating" ? "reference" : "floating" : u], v = Js(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(y))) == null || n ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, S = Js(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - S.top + p.top) / $.y, bottom: (S.bottom - v.bottom + p.bottom) / $.y, left: (v.left - S.left + p.left) / $.x, right: (S.right - v.right + p.right) / $.x };
}
const po = Math.min, ju = Math.max;
function go(e, t, n) {
  return ju(e, po(t, n));
}
const mo = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: o, platform: r, elements: a } = t, { element: l, padding: h = 0 } = cs(e, t) || {};
  if (l == null)
    return {};
  const c = Ul(h), u = { x: n, y: s }, f = ls(i), d = yr(f), p = await r.getDimensions(l), y = f === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", $ = o.reference[d] + o.reference[f] - u[f] - o.floating[d], S = u[f] - o.reference[f], k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let E = k ? k[_] : 0;
  E && await (r.isElement == null ? void 0 : r.isElement(k)) || (E = a.floating[_] || o.floating[d]);
  const N = $ / 2 - S / 2, A = E / 2 - p[d] / 2 - 1, H = po(c[v], A), b = po(c[w], A), R = H, I = E - p[d] - b, P = E / 2 - p[d] / 2 + N, O = go(R, P, I), W = as(i) != null && P != O && o.reference[d] / 2 - (P < R ? H : b) - p[d] / 2 < 0 ? P < R ? R - P : I - P : 0;
  return { [f]: u[f] - W, data: { [f]: O, centerOffset: P - O + W } };
} }), Yu = ["top", "right", "bottom", "left"];
Yu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ku = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Zs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ku[t]);
}
function Xu(e, t, n) {
  n === void 0 && (n = !1);
  const s = as(e), i = ls(e), o = yr(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Zs(r)), { main: r, cross: Zs(r) };
}
const Ju = { start: "end", end: "start" };
function Zi(e) {
  return e.replace(/start|end/g, (t) => Ju[t]);
}
const hs = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: p = !0, ...y } = cs(e, t), v = ke(s), w = ke(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Zs(r)] : function(R) {
      const I = Zs(R);
      return [Zi(R), I, Zi(I)];
    }(r));
    u || d === "none" || $.push(...function(R, I, P, O) {
      const W = as(R);
      let U = function(dt, Tt, gs) {
        const pn = ["left", "right"], ms = ["right", "left"], Gi = ["top", "bottom"], Ph = ["bottom", "top"];
        switch (dt) {
          case "top":
          case "bottom":
            return gs ? Tt ? ms : pn : Tt ? pn : ms;
          case "left":
          case "right":
            return Tt ? Gi : Ph;
          default:
            return [];
        }
      }(ke(R), P === "start", O);
      return W && (U = U.map((dt) => dt + "-" + W), I && (U = U.concat(U.map(Zi)))), U;
    }(r, p, d, _));
    const S = [r, ...$], k = await Vl(t, y), E = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push(k[v]), c) {
      const { main: R, cross: I } = Xu(s, o, _);
      E.push(k[R], k[I]);
    }
    if (N = [...N, { placement: s, overflows: E }], !E.every((R) => R <= 0)) {
      var A, H;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, I = S[R];
      if (I)
        return { data: { index: R, overflows: N }, reset: { placement: I } };
      let P = (H = N.filter((O) => O.overflows[0] <= 0).sort((O, W) => O.overflows[1] - W.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!P)
        switch (f) {
          case "bestFit": {
            var b;
            const O = (b = N.map((W) => [W.placement, W.overflows.filter((U) => U > 0).reduce((U, dt) => U + dt, 0)]).sort((W, U) => W[1] - U[1])[0]) == null ? void 0 : b[0];
            O && (P = O);
            break;
          }
          case "initialPlacement":
            P = r;
        }
      if (s !== P)
        return { reset: { placement: P } };
    }
    return {};
  } };
}, Li = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = ke(a), f = as(a), d = ls(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, y = c && d ? -1 : 1, v = cs(r, o);
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return f && typeof $ == "number" && (_ = f === "end" ? -1 * $ : $), d ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Zu(e) {
  return e === "x" ? "y" : "x";
}
const Qs = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = cs(e, t), h = { x: n, y: s }, c = await Vl(t, l), u = ls(ke(i)), f = Zu(u);
    let d = h[u], p = h[f];
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      d = go(d + c[u === "y" ? "top" : "left"], d, d - c[v]);
    }
    if (r) {
      const v = f === "y" ? "bottom" : "right";
      p = go(p + c[f === "y" ? "top" : "left"], p, p - c[v]);
    }
    const y = a.fn({ ...t, [u]: d, [f]: p });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function ht(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  return ht(e).getComputedStyle(e);
}
function ql(e) {
  return e instanceof ht(e).Node;
}
function he(e) {
  return ql(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  return e instanceof ht(e).HTMLElement;
}
function Ft(e) {
  return e instanceof ht(e).Element;
}
function Sa(e) {
  return typeof ShadowRoot < "u" && (e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot);
}
function Xn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Qu(e) {
  return ["table", "td", "th"].includes(he(e));
}
function yo(e) {
  const t = wr(), n = mt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function wr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Pi(e) {
  return ["html", "body", "#document"].includes(he(e));
}
const Ma = Math.min, On = Math.max, ti = Math.round, ws = Math.floor, Te = (e) => ({ x: e, y: e });
function Gl(e) {
  const t = mt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = vt(e), o = i ? e.offsetWidth : n, r = i ? e.offsetHeight : s, a = ti(n) !== o || ti(s) !== r;
  return a && (n = o, s = r), { width: n, height: s, $: a };
}
function vr(e) {
  return Ft(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = vr(e);
  if (!vt(t))
    return Te(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: o } = Gl(t);
  let r = (o ? ti(n.width) : n.width) / s, a = (o ? ti(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const Ea = Te(0);
function jl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !wr())
    return Ea;
  const o = e ? ht(e) : window;
  return !n || t && n !== o ? Ea : { x: ((s = o.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = o.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Re(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = vr(e);
  let r = Te(1);
  t && (s ? Ft(s) && (r = Ke(s)) : r = Ke(e));
  const a = jl(o, n, s);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, c = i.width / r.x, u = i.height / r.y;
  if (o) {
    const f = ht(o), d = s && Ft(s) ? ht(s) : s;
    let p = f.frameElement;
    for (; p && s && d !== f; ) {
      const y = Ke(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * y.x, $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, u *= y.y, l += _, h += $, p = ht(p).frameElement;
    }
  }
  return Js({ width: c, height: u, x: l, y: h });
}
function Ut(e) {
  return ((ql(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Wi(e) {
  return Ft(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Yl(e) {
  return Re(Ut(e)).left + Wi(e).scrollLeft;
}
function dn(e) {
  if (he(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Sa(e) && e.host || Ut(e);
  return Sa(t) ? t.host : t;
}
function Kl(e) {
  const t = dn(e);
  return Pi(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && Xn(t) ? t : Kl(t);
}
function ei(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Kl(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ht(s);
  return i ? t.concat(o, o.visualViewport || [], Xn(s) ? s : []) : t.concat(s, ei(s));
}
function Ta(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, o) {
      const r = ht(i), a = Ut(i), l = r.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, f = 0;
      if (l) {
        h = l.width, c = l.height;
        const d = wr();
        (!d || d && o === "fixed") && (u = l.offsetLeft, f = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: f };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const o = Ut(i), r = Wi(i), a = i.ownerDocument.body, l = On(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = On(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -r.scrollLeft + Yl(i);
      const u = -r.scrollTop;
      return mt(a).direction === "rtl" && (c += On(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(Ut(e));
  else if (Ft(t))
    s = function(i, o) {
      const r = Re(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = vt(i) ? Ke(i) : Te(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = jl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Js(s);
}
function Xl(e, t) {
  const n = dn(e);
  return !(n === t || !Ft(n) || Pi(n)) && (mt(n).position === "fixed" || Xl(n, t));
}
function Ra(e, t) {
  return vt(e) && mt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function Na(e, t) {
  const n = ht(e);
  if (!vt(e))
    return n;
  let s = Ra(e, t);
  for (; s && Qu(s) && mt(s).position === "static"; )
    s = Ra(s, t);
  return s && (he(s) === "html" || he(s) === "body" && mt(s).position === "static" && !yo(s)) ? n : s || function(i) {
    let o = dn(i);
    for (; vt(o) && !Pi(o); ) {
      if (yo(o))
        return o;
      o = dn(o);
    }
    return null;
  }(e) || n;
}
function td(e, t, n) {
  const s = vt(t), i = Ut(t), o = n === "fixed", r = Re(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Te(0);
  if (s || !s && !o)
    if ((he(t) !== "body" || Xn(i)) && (a = Wi(t)), vt(t)) {
      const h = Re(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Yl(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
const ed = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let f = ei(h).filter((v) => Ft(v) && he(v) !== "body"), d = null;
    const p = mt(h).position === "fixed";
    let y = p ? dn(h) : h;
    for (; Ft(y) && !Pi(y); ) {
      const v = mt(y), w = yo(y);
      w || v.position !== "fixed" || (d = null), (p ? !w && !d : !w && v.position === "static" && d && ["absolute", "fixed"].includes(d.position) || Xn(y) && !w && Xl(h, y)) ? f = f.filter((_) => _ !== y) : d = v, y = dn(y);
    }
    return c.set(h, f), f;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = Ta(t, c, i);
    return h.top = On(u.top, h.top), h.right = Ma(u.right, h.right), h.bottom = Ma(u.bottom, h.bottom), h.left = On(u.left, h.left), h;
  }, Ta(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = vt(n), o = Ut(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Te(1);
  const l = Te(0);
  if ((i || !i && s !== "fixed") && ((he(n) !== "body" || Xn(o)) && (r = Wi(n)), vt(n))) {
    const h = Re(n);
    a = Ke(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: Ft, getDimensions: function(e) {
  return Gl(e);
}, getOffsetParent: Na, getDocumentElement: Ut, getScale: Ke, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Na, o = this.getDimensions;
  return { reference: td(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => mt(e).direction === "rtl" };
function Di(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = vr(e), c = i || o ? [...h ? ei(h) : [], ...ei(t)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, { passive: !0 }), o && y.addEventListener("resize", n);
  });
  const u = h && a ? function(y, v) {
    let w, _ = null;
    const $ = Ut(y);
    function S() {
      clearTimeout(w), _ && _.disconnect(), _ = null;
    }
    return function k(E, N) {
      E === void 0 && (E = !1), N === void 0 && (N = 1), S();
      const { left: A, top: H, width: b, height: R } = y.getBoundingClientRect();
      if (E || v(), !b || !R)
        return;
      const I = ws(H), P = ws($.clientWidth - (A + b)), O = ws($.clientHeight - (H + R)), W = ws(A);
      let U = !0;
      _ = new IntersectionObserver((dt) => {
        const Tt = dt[0].intersectionRatio;
        if (Tt !== N) {
          if (!U)
            return k();
          Tt === 0 ? w = setTimeout(() => {
            k(!1, 1e-7);
          }, 100) : k(!1, Tt);
        }
        U = !1;
      }, { rootMargin: -I + "px " + -P + "px " + -O + "px " + -W + "px", threshold: N }), _.observe(y);
    }(!0), S;
  }(h, n) : null;
  let f, d = null;
  r && (d = new ResizeObserver(n), h && !l && d.observe(h), d.observe(t));
  let p = l ? Re(e) : null;
  return l && function y() {
    const v = Re(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, f = requestAnimationFrame(y);
  }(), n(), () => {
    c.forEach((y) => {
      i && y.removeEventListener("scroll", n), o && y.removeEventListener("resize", n);
    }), u && u(), d && d.disconnect(), d = null, l && cancelAnimationFrame(f);
  };
}
const us = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: ed, ...n }, o = { ...i.platform, _c: s };
  return Gu(e, t, { ...i, platform: o });
};
let nd = class extends Ai {
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  getPopperOptions() {
    return {
      middleware: [hs()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && us(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
      Object.assign(this.ref.current.style, {
        left: `${n}px`,
        top: `${s}px`,
        position: "absolute"
      });
    });
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && this.createPopper();
  }
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, "menu-popup"), t;
  }
  renderToggleIcon() {
    return /* @__PURE__ */ g("span", { class: "contextmenu-toggle-icon caret-right" });
  }
};
var _r = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rt = (e, t, n) => (_r(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Oe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vs = (e, t, n, s) => (_r(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Aa = (e, t, n) => (_r(e, t, "access private method"), n), te, kn, Rs, Ns, wo, Jl, vo, Zl;
const Qi = "show", sd = '[data-toggle="contextmenu"]';
class it extends ut {
  constructor() {
    super(...arguments), Oe(this, wo), Oe(this, vo), Oe(this, te, void 0), Oe(this, kn, void 0), Oe(this, Rs, void 0), Oe(this, Ns, void 0);
  }
  get isShown() {
    return Rt(this, te) && m(Rt(this, te)).hasClass(Qi);
  }
  get menu() {
    return Rt(this, te) || this.ensureMenu();
  }
  get trigger() {
    return Rt(this, Rs) || this.element;
  }
  get isDynamic() {
    return this.options.items || this.options.menu;
  }
  init() {
    const { $element: t } = this;
    !t.is("body") && !t.attr("data-toggle") && t.attr("data-toggle", this.constructor.NAME.toLowerCase());
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.isDynamic && this.destroy();
    });
  }
  show(t) {
    return this.isShown || (vs(this, Rs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Qi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Rt(this, Ns)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Rt(this, te)).removeClass(Qi), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Rt(this, te)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = m(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = m(document).find(i)), !(s != null && s.length)) {
        const o = t.next();
        o.hasClass(n) ? s = o : s = t.parent().find(`.${n}`);
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
    }), vs(this, te, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(hs())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    vs(this, Ns, Di(n, s, () => {
      us(n, s, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
        m(s).css({ left: `${i}px`, top: `${o}px` });
        const l = a.split("-")[0], h = Aa(this, wo, Jl).call(this, l);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: u } = r.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...Aa(this, vo, Zl).call(this, l)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: n } = this.options;
    let s = n || (t == null ? void 0 : t.items);
    if (s)
      return typeof s == "function" && (s = s(this)), {
        nestedTrigger: "hover",
        ...t,
        items: s
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Yn(q(nd, t), this.menu), !0);
  }
  getPopperElement() {
    return Rt(this, kn) || vs(this, kn, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: n, clientY: s } = t;
          return {
            width: 0,
            height: 0,
            top: s,
            right: n,
            bottom: s,
            left: n
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), Rt(this, kn);
  }
  static clear(t) {
    var a, l;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = t || {};
    if (n && i && ((l = (a = n.target).closest) != null && l.call(a, i)) || n && n.button === 2)
      return;
    const o = this.getAll(), r = new Set(s || []);
    for (const h of o)
      r.has(h.element) || h.hide();
  }
  static show(t) {
    const { event: n, ...s } = t, i = this.ensure(document.body);
    return i.setOptions(s), i.show(n), n instanceof Event && n.stopPropagation(), i;
  }
  static hide(t) {
    const n = this.query(t);
    return n == null || n.hide(), n;
  }
}
te = /* @__PURE__ */ new WeakMap();
kn = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ns = /* @__PURE__ */ new WeakMap();
wo = /* @__PURE__ */ new WeakSet();
Jl = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
vo = /* @__PURE__ */ new WeakSet();
Zl = function(e) {
  const t = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${e[0].toUpperCase()}${e.substring(1)}Style`]: "none",
    [`border${t[e]}Style`]: "none"
  };
};
it.MENU_CLASS = "contextmenu";
it.NAME = "ContextMenu";
it.MULTI_INSTANCE = !0;
it.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${it.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${it.MENU_CLASS}`).length)
    return;
  const n = t.closest(sd).not(":disabled,.disabled");
  if (n.length) {
    const s = `${it.KEY}:options`, i = n.data(s), o = it.ensure(n, i);
    i || n.data(s, o.options), o.show(e), e.preventDefault();
  }
}).on(`click${it.NAMESPACE}`, it.clear.bind(it));
var br = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Cn = (e, t, n) => (br(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _o = (e, t, n, s) => (br(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), id = (e, t, n) => (br(e, t, "access private method"), n), Hn, Sn, ni, bo, Ql;
const La = '[data-toggle="dropdown"]', tc = class extends it {
  constructor() {
    super(...arguments), _s(this, bo), _s(this, Hn, !1), _s(this, Sn, 0), this.hideLater = () => {
      Cn(this, ni).call(this), _o(this, Sn, window.setTimeout(this.hide.bind(this), 100));
    }, _s(this, ni, () => {
      clearTimeout(Cn(this, Sn)), _o(this, Sn, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && tc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Cn(this, Hn) && this.isHover && id(this, bo, Ql).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Cn(this, Hn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(Li(t)), (s = e.middleware) == null || s.push(mo({ element: this.arrowEl }))), e;
  }
  ensureMenu() {
    const e = super.ensureMenu();
    if (this.options.arrow) {
      const t = this.getArrowSize(), n = m('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${t}px`,
        height: `${t}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = n[0];
    }
    return e;
  }
  getMenuOptions() {
    const e = super.getMenuOptions();
    if (e && this.options.arrow) {
      const { afterRender: t } = e;
      e.afterRender = (...n) => {
        this.arrowEl && m(this.menu).find(".menu").each((s, i) => {
          m(i).find(".arrow-el").length === 0 && m(i).parent().hasClass("dropdown-menu") && m(i).append(this.arrowEl);
        }), t == null || t(...n);
      };
    }
    return e;
  }
};
let Vt = tc;
Hn = /* @__PURE__ */ new WeakMap();
Sn = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
bo = /* @__PURE__ */ new WeakSet();
Ql = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Cn(this, ni)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), _o(this, Hn, !0);
};
Vt.MENU_CLASS = "dropdown-menu";
Vt.NAME = "Dropdown";
Vt.DEFAULT = {
  ...it.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const bs = `${Vt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(La).not(":disabled,.disabled");
  if (!t.length) {
    Vt.clear({ event: e });
    return;
  }
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(La);
  if (!t.length)
    return;
  const n = t.data(bs), s = Vt.ensure(t, n);
  n || t.data(bs, s.options), s.isHover && s.show();
});
let xs = 0;
window.addEventListener("scroll", (e) => {
  xs && clearTimeout(xs), xs = window.setTimeout(() => {
    Vt.clear({ event: e }), xs = 0;
  }, 50);
}, !0);
var ts, Qe;
class od extends z {
  constructor(n) {
    var s;
    super(n);
    L(this, ts, void 0);
    L(this, Qe, wt());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return C(this, Qe);
  }
  get triggerElement() {
    return C(this, Qe).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...s } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var r;
        const o = ((r = i.placement) == null ? void 0 : r.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), D(this, ts, Vt.ensure(this.triggerElement, {
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
    (n = C(this, ts)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...o } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: C(this, Qe)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
ts = new WeakMap(), Qe = new WeakMap();
class rd extends od {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: t, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const r = (n ? t : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ g(Kt, { ...s });
  }
}
function ec({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(rd, { type: n, ...s });
}
let nc = class extends z {
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
  handleItemClick(t, n, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props }, n = (s = t.beforeRender) == null ? void 0 : s.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: s = n, ...i } = t;
    return /* @__PURE__ */ g(Kt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = t, a = { key: s, ...n };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
      if (tt(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const t = this.beforeRender(), {
      className: n,
      items: s,
      size: i,
      type: o,
      btnProps: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: c,
      afterRender: u,
      beforeDestroy: f,
      ...d
    } = t;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("btn-group", i ? `size-${i}` : "", n),
        ...d,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function ad({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(nc, { type: n, ...s });
}
let _t = class extends We {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = T(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...n,
      ...r,
      ...s,
      className: T(`${this.name}-${i}`, n.className, r.className, s.className),
      style: Object.assign({}, n.style, r.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ g(t, { ...a });
  }
};
_t.ItemComponents = {
  item: qu,
  dropdown: ec,
  "btn-group": ad
};
_t.ROOT_TAG = "nav";
_t.NAME = "toolbar";
_t.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function ld({
  className: e,
  style: t,
  actions: n,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  ...c
}) {
  let u;
  a === !0 ? u = /* @__PURE__ */ g(Kt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : tt(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ g(Kt, { ...a, onClick: l }));
  const f = tt(n) ? n : n ? /* @__PURE__ */ g(_t, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: T("alert", e), style: t, ...c, children: [
    tt(h) ? h : typeof h == "string" ? /* @__PURE__ */ g("i", { className: `icon ${h}` }) : null,
    tt(i) ? i : /* @__PURE__ */ g("div", { className: T("alert-content", o), children: [
      tt(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    u,
    r
  ] });
}
function cd(e) {
  if (e === "center")
    return "fade-from-center";
  if (e) {
    if (e.includes("top"))
      return "fade-from-top";
    if (e.includes("bottom"))
      return "fade-from-bottom";
  }
  return "fade";
}
let hd = class extends z {
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
  render() {
    const {
      afterRender: t,
      beforeDestroy: n,
      margin: s,
      type: i,
      placement: o,
      animation: r,
      show: a,
      className: l,
      time: h,
      ...c
    } = this.props;
    return /* @__PURE__ */ g(
      ld,
      {
        className: T("messager", l, i, r === !0 ? cd(o) : r, a ? "in" : ""),
        ...c
      }
    );
  }
};
var ud = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, dd = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, mn = (e, t, n) => (ud(e, t, "access private method"), n), me, Fe;
class xr extends Q {
  constructor() {
    super(...arguments), dd(this, me), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: n } = this.options;
      n && this.$element.css("margin", `${n}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      m(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), mn(this, me, Fe).call(this, () => {
      this._show = !0, this.render(), mn(this, me, Fe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && mn(this, me, Fe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && mn(this, me, Fe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), mn(this, me, Fe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
me = /* @__PURE__ */ new WeakSet();
Fe = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
xr.NAME = "MessagerItem";
xr.Component = hd;
var $r = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ce = (e, t, n) => ($r(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $s = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, As = (e, t, n, s) => ($r(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), sc = (e, t, n) => ($r(e, t, "access private method"), n), Xe, Ht, xo, ic, kr, oc;
const rc = class extends ut {
  constructor() {
    super(...arguments), $s(this, xo), $s(this, kr), $s(this, Xe, void 0), $s(this, Ht, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ce(this, Ht)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), sc(this, xo, ic).call(this).show();
  }
  hide() {
    var e;
    (e = Ce(this, Ht)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = rc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let Cr = rc;
Xe = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
xo = /* @__PURE__ */ new WeakSet();
ic = function() {
  if (Ce(this, Ht))
    Ce(this, Ht).setOptions(this.options);
  else {
    const e = sc(this, kr, oc).call(this), t = new xr(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), As(this, Xe, void 0), As(this, Ht, void 0);
    }), As(this, Ht, t);
  }
  return Ce(this, Ht);
};
kr = /* @__PURE__ */ new WeakSet();
oc = function() {
  if (Ce(this, Xe))
    return Ce(this, Xe);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), As(this, Xe, n[0])), n[0];
};
Cr.NAME = "messager";
Cr.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
m(document).on("to-show.messager.zui", (e, t) => {
  t && Cr.show(t);
});
let Sr = class extends z {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ g("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ g("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(t) })
    ] });
  }
};
Sr.NAME = "zui.progress-circle";
Sr.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class ac extends Q {
}
ac.NAME = "ProgressCircle";
ac.Component = Sr;
let fd = class extends z {
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
      component: t,
      className: n,
      children: s,
      text: i,
      icon: o,
      surffixIcon: r,
      disabled: a,
      defaultChecked: l,
      onChange: h,
      ...c
    } = this.props, u = this.state.checked ? 1 : 0, f = t || "div", d = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, p = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, y = [
      /* @__PURE__ */ g("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ g("label", { children: [
        d,
        i,
        p
      ] })
    ];
    return q(
      f,
      {
        className: T("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...y,
      s
    );
  }
};
class lc extends Q {
}
lc.NAME = "Switch";
lc.Component = fd;
class cc extends Q {
}
cc.NAME = "BtnGroup";
cc.Component = nc;
class pd extends ut {
  init() {
    this.fileMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer();
    const { multiple: t, defaultFileList: n } = this.options;
    t || (this.options.maxCount = 1), this.initInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s } = this.options;
    this.$label = m(`<label class="btn primary" for="${t}">${n}</label>`), this.$list = m('<div class="file-list"></div>');
    const i = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...i);
  }
  initInputCash() {
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = m("<input />").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (o) => {
      const r = o.target.files;
      if (!r)
        return;
      const a = [...r];
      this.addFileItem(a), i == null || i(a);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    this.options.multiple || (this.fileMap.clear(), this.dataTransfer.items.clear()), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files);
  }
  addFileItem(t) {
    const { multiple: n, maxCount: s } = this.options;
    if (n) {
      for (const r of t) {
        if (s && this.fileMap.size >= s)
          return;
        this.addFile(r);
        const a = this.createFileItem(r);
        this.itemMap.set(r.name, a), this.$list.append(a);
      }
      return;
    }
    const i = t[0];
    this.addFile(i);
    const o = this.createFileItem(i);
    this.itemMap.clear(), this.itemMap.set(i.name, o), this.$list.empty().append(o);
  }
  deleteFile(t) {
    var n, s;
    (s = (n = this.options).onDelete) == null || s.call(n, t), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((i) => this.dataTransfer.items.add(i)), this.$input.prop("files", this.dataTransfer.files);
  }
  deleteFileItem(t) {
    var s;
    const n = this.fileMap.get(t);
    n && ((s = this.itemMap.get(n.name)) == null || s.remove(), this.itemMap.delete(n.name), this.deleteFile(n));
  }
  renameFile(t, n) {
    var s, i;
    (i = (s = this.options).onRename) == null || i.call(s, n, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], n), this.fileMap.set(n, t).forEach((o) => this.dataTransfer.items.add(o)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, n) {
    const s = this.itemMap.get(t.name);
    s && (this.itemMap.set(n, s).delete(t.name), this.renameFile(t, n));
  }
  createFileItem(t) {
    const { showIcon: n } = this.options;
    return m('<li class="file-item"></li>').append(n ? this.fileIcon() : null).append(this.fileInfo(t)).append(this.renameInput(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(t || '<i class="icon icon-paper-clip"></i>');
  }
  fileInfo(t) {
    const n = m(`<span class="file-name">${t.name}</span>`), s = m(`<span class="file-size text-gray">${ku(t.size)}</span>`), i = m('<div class="file-info"></div>').append(n).append(s), { renameBtn: o, renameText: r, deleteBtn: a, deleteText: l } = this.options;
    return o && i.append(
      m("<span />").addClass("btn size-sm rounded-sm text-primary canvas file-action file-rename").html(r).on("click", () => {
        i.addClass("hidden").closest(".file-item").find(".input-group.hidden").removeClass("hidden");
      })
    ), a && i.append(
      m("<span />").html(l).addClass("btn size-sm rounded-sm text-primary canvas file-action file-delete").on("click", () => this.deleteFileItem(n.html()))
    ), i;
  }
  renameInput(t) {
    const { renameConfirmText: n, renameCancelText: s } = this.options, i = m('<div class="input-group hidden"></div>'), o = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name), r = m("<button />").addClass("btn").prop("type", "button").html(n).on("click", () => {
      i.addClass("hidden"), this.renameFileItem(t, o.val()), i.closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(o.val());
    }), a = m("<button />").prop("type", "button").addClass("btn").html(s).on("click", () => {
      o.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), l = m('<div class="btn-group"></div').append(r).append(a);
    return i.append(o).append(l);
  }
}
pd.DEFAULT = {
  name: "file",
  icon: null,
  uploadText: "上传文件",
  renameText: "重命名",
  deleteText: "删除",
  renameBtn: !1,
  deleteBtn: !1,
  showIcon: !0,
  renameConfirmText: "确定",
  renameCancelText: "取消",
  multiple: !1,
  listPosition: "bottom"
};
var Ot;
class gd {
  constructor(t = "") {
    L(this, Ot, void 0);
    typeof t == "object" ? D(this, Ot, t) : D(this, Ot, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    C(this, Ot).addEventListener(t, n, s);
  }
  once(t, n, s) {
    C(this, Ot).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    C(this, Ot).removeEventListener(t, n, s);
  }
  emit(t) {
    return C(this, Ot).dispatchEvent(t), t;
  }
}
Ot = new WeakMap();
const Pa = /* @__PURE__ */ new Set([
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
class hc extends gd {
  on(t, n, s) {
    super.on(t, n, s);
  }
  off(t, n, s) {
    super.off(t, n, s);
  }
  once(t, n, s) {
    super.once(t, n, s);
  }
  emit(t, n) {
    return typeof t == "string" && (Pa.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(hc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Pa.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let uc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var es, se, xt, tn, en, Ls;
const ua = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, en);
    L(this, es, void 0);
    L(this, se, void 0);
    L(this, xt, void 0);
    L(this, tn, void 0);
    D(this, es, n), D(this, se, `ZUI_STORE:${t ?? uc()}`), D(this, xt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return C(this, es);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (C(this, tn) || D(this, tn, new ua(C(this, se), "session")), C(this, tn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = C(this, xt).getItem(nt(this, en, Ls).call(this, t));
    return typeof s == "string" ? JSON.parse(s) : s ?? n;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, n) {
    if (n == null)
      return this.remove(t);
    C(this, xt).setItem(nt(this, en, Ls).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    C(this, xt).removeItem(nt(this, en, Ls).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < C(this, xt).length; n++) {
      const s = C(this, xt).key(n);
      if (s != null && s.startsWith(C(this, se))) {
        const i = C(this, xt).getItem(s);
        typeof i == "string" && t(s.substring(C(this, se).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((n, s) => {
      t[n] = s;
    }), t;
  }
};
let si = ua;
es = new WeakMap(), se = new WeakMap(), xt = new WeakMap(), tn = new WeakMap(), en = new WeakSet(), Ls = function(t) {
  return `${C(this, se)}:${t}`;
};
const md = new si("DEFAULT");
function yd(e, t = "local") {
  return new si(e, t);
}
Object.assign(md, { create: yd });
function wd(e) {
  if (e.indexOf("#") === 0 && (e = e.slice(1)), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6)
    throw new Error(`Invalid HEX color "${e}".`);
  return [
    parseInt(e.slice(0, 2), 16),
    // r
    parseInt(e.slice(2, 4), 16),
    // g
    parseInt(e.slice(4, 6), 16)
    // b
  ];
}
function vd(e) {
  const [t, n, s] = typeof e == "string" ? wd(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Wa(e, t) {
  return vd(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Da(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function _d(e, t, n) {
  e = e % 360 / 360, t = Da(t), n = Da(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function bd(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function xd(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let dc = class extends z {
  render() {
    const {
      className: t,
      style: n,
      size: s = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: c = 2,
      src: u,
      hueDistance: f = 43,
      saturation: d = 0.4,
      lightness: p = 0.6,
      children: y,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: r, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? _.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let S;
    if (u)
      w.push("has-img"), S = /* @__PURE__ */ g("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const k = xd(l, c);
      if (w.push("has-text", `has-text-${k.length}`), r)
        !a && r && (_.color = Wa(r));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : bd(N)) * f % 360;
        if (_.background = `hsl(${A},${d * 100}%,${p * 100}%)`, !a) {
          const H = _d(A, d, p);
          _.color = Wa(H);
        }
      }
      let E;
      $ && $ < 14 * k.length && (E = { transform: `scale(${$ / (14 * k.length)})`, whiteSpace: "nowrap" }), S = /* @__PURE__ */ g("div", { "data-actualSize": $, className: "avatar-text", style: E, children: k });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: T(w),
        style: _,
        ...v,
        children: [
          S,
          y
        ]
      }
    );
  }
};
class fc extends Q {
}
fc.NAME = "Avatar";
fc.Component = dc;
var Mr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, _e = (e, t, n) => (Mr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), yn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bn = (e, t, n, s) => (Mr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), to = (e, t, n) => (Mr(e, t, "access private method"), n), Ge, Ps, ye, $o, Mn, Ws;
const eo = "show", Ia = "in", $d = '[data-dismiss="modal"]', En = class extends ut {
  constructor() {
    super(...arguments), yn(this, Mn), yn(this, Ge, 0), yn(this, Ps, void 0), yn(this, ye, void 0), yn(this, $o, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest($d) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(eo);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", _e(this, $o)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!_e(this, ye) || _e(this, ye)[0] !== n || _e(this, ye)[1] !== s) && (Bn(this, ye, [n, s]), this.layout());
        });
        t.observe(e), Bn(this, Ps, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = _e(this, Ps)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${En.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: o } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, eo, i).css({
      zIndex: `${En.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), to(this, Mn, Ws).call(this, () => {
      m(t).addClass(Ia), to(this, Mn, Ws).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(Ia), this.emit("hide"), to(this, Mn, Ws).call(this, () => {
      m(this.modalElement).removeClass(eo), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    t = t ?? this.options.size, m(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof t == "object" ? (s.width = t.width, s.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? m(n).attr("data-size", t) : t && (s.width = t), m(n).css(s), e = e ?? this.options.position ?? "fit";
    const i = n.clientWidth, o = n.clientHeight;
    Bn(this, ye, [i, o]), typeof e == "function" && (e = e({ width: i, height: o }));
    const r = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (r.alignSelf = "flex-start", r.top = e) : typeof e == "object" && e ? (r.alignSelf = "flex-start", Object.assign(r, e)) : e === "fit" ? (r.alignSelf = "flex-start", r.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? r.alignSelf = "flex-end" : e === "top" ? r.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (r.alignSelf = "flex-start", r.top = e), m(n).css(r), m(this.modalElement).css("justifyContent", r.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = En.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = En.query(e)) == null || t.show();
  }
};
let Qt = En;
Ge = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
ye = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakSet();
Ws = function(e, t) {
  _e(this, Ge) && (clearTimeout(_e(this, Ge)), Bn(this, Ge, 0)), e && (this.options.animation ? Bn(this, Ge, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Qt.NAME = "Modal";
Qt.MULTI_INSTANCE = !0;
Qt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Qt.zIndex = 2e3;
m(window).on("resize.modal.zui", () => {
  Qt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  Qt.hide(t == null ? void 0 : t.target);
});
class pc extends z {
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
      title: n
    } = this.props;
    return tt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : tt(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(_t, { ...t }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? tt(t) ? t : /* @__PURE__ */ g("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return tt(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(_t, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      children: s
    } = this.props;
    return /* @__PURE__ */ g("div", { className: T("modal-dialog", t), style: n, children: /* @__PURE__ */ g("div", { className: "modal-content", children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      s,
      this.renderFooter()
    ] }) });
  }
}
pc.defaultProps = { closeBtn: !0 };
var nn, sn, on;
class kd extends z {
  constructor() {
    super(...arguments);
    L(this, nn, void 0);
    L(this, sn, void 0);
    L(this, on, void 0);
    D(this, nn, wt()), this.state = {}, D(this, on, () => {
      var i, o;
      const n = (o = (i = C(this, nn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!n)
        return;
      let s = C(this, sn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = n.body, a = n.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), D(this, sn, s);
    });
  }
  componentDidMount() {
    C(this, on).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = C(this, sn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: C(this, nn),
        onLoad: C(this, on)
      }
    );
  }
}
nn = new WeakMap(), sn = new WeakMap(), on = new WeakMap();
var Er = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Nt = (e, t, n) => (Er(e, t, "read from private field"), n ? n.call(e) : t.get(e)), wn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, He = (e, t, n, s) => (Er(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ds = (e, t, n) => (Er(e, t, "access private method"), n), we, Tn, Lt, ii, Tr, Is, ko;
function Cd(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Sd(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (n !== "html")
    try {
      const u = JSON.parse(c);
      return {
        title: r,
        ...o,
        ...u
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [c] : {
    title: r,
    ...o,
    body: n === "html" ? /* @__PURE__ */ g(Pl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Md(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(kd, { url: n })
  };
}
const Ed = {
  custom: Cd,
  ajax: Sd,
  iframe: Md
}, no = "loading", Rn = class extends Qt {
  constructor() {
    super(...arguments), wn(this, ii), wn(this, Is), wn(this, we, void 0), wn(this, Tn, void 0), wn(this, Lt, void 0);
  }
  get id() {
    return Nt(this, Tn);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(no);
  }
  get shown() {
    var e;
    return !!((e = Nt(this, we)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = Nt(this, we);
    if (!e) {
      const { options: t } = this;
      let n = Nt(this, Tn);
      n || (n = t.id || `modal-${m.guid++}`, He(this, Tn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      He(this, we, e);
    }
    return e;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(e) {
    return super.show(e) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const e = Nt(this, we);
    e && (m(e).removeData(this.constructor.KEY).remove(), He(this, we, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Nt(this, Lt) && clearTimeout(Nt(this, Lt));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: o = null } = t, r = Ed[s];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", o).addClass(no), i && He(this, Lt, window.setTimeout(() => {
      He(this, Lt, 0), Ds(this, Is, ko).call(this, this.options.timeoutTip);
    }, i));
    const a = await r.call(this, e, t);
    return a === !1 ? await Ds(this, Is, ko).call(this, this.options.failedTip) : a && typeof a == "object" && await Ds(this, ii, Tr).call(this, a), Nt(this, Lt) && (clearTimeout(Nt(this, Lt)), He(this, Lt, 0)), await ho(100), n.removeClass(no), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = Rn.ensure(n, { show: !0, ...s });
      i.one("hidden", () => t(i)), i.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: o = "confirm", onClickAction: r, custom: a, key: l = "__alert", ...h } = e;
    let c = /* @__PURE__ */ g("div", { children: n });
    s ? c = /* @__PURE__ */ g("div", { className: "modal-body row gap-4 items-center", children: [
      /* @__PURE__ */ g("div", { className: `icon ${s} ${i}` }),
      c
    ] }) : c = /* @__PURE__ */ g("div", { className: "modal-body", children: c });
    const u = [];
    (Array.isArray(o) ? o : [o]).forEach((p) => {
      p = {
        ...typeof p == "string" ? { key: p } : p
      }, typeof p.key == "string" && (p.text || (p.text = Yt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let f;
    const d = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: y }) => {
        const v = Rn.query(y.target, l);
        f = p.key, (r == null ? void 0 : r(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await Rn.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: d, ...typeof a == "function" ? a() : a },
      ...h
    }), f;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await Rn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, r) => {
        n == null || n(o.key === "confirm", r), t == null || t(o, r);
      },
      ...s
    }) === "confirm";
  }
};
let gc = Rn;
we = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
Lt = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakSet();
Tr = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return this.modalElement.innerHTML = e[0], m(this.modalElement).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Yn(
      /* @__PURE__ */ g(pc, { ...e }),
      this.modalElement
    );
  });
};
Is = /* @__PURE__ */ new WeakSet();
ko = function(e) {
  if (e)
    return Ds(this, ii, Tr).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
gc.DEFAULT = {
  ...Qt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var Rr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Co = (e, t, n) => (Rr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ks = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oa = (e, t, n, s) => (Rr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), So = (e, t, n) => (Rr(e, t, "access private method"), n), Se, Nr, mc, Mo, yc, Ar, wc;
const Td = '[data-toggle="modal"]';
class vc extends ut {
  constructor() {
    super(...arguments), ks(this, Nr), ks(this, Mo), ks(this, Ar), ks(this, Se, void 0);
  }
  get modal() {
    return Co(this, Se);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = So(this, Mo, yc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = Co(this, Se)) == null ? void 0 : t.hide();
  }
}
Se = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakSet();
mc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
Mo = /* @__PURE__ */ new WeakSet();
yc = function() {
  const e = So(this, Nr, mc).call(this);
  let t = Co(this, Se);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = So(this, Ar, wc).call(this);
    if (!n)
      return;
    t = Qt.ensure(n, e);
  } else
    t = gc.ensure(this.container, e);
  return Oa(this, Se, t), t.on("destroyed", () => {
    Oa(this, Se, void 0);
  }), t;
};
Ar = /* @__PURE__ */ new WeakSet();
wc = function() {
  let e = this.options.target;
  if (!e) {
    const { $element: t } = this;
    if (t.is("a")) {
      const n = t.attr("href");
      n != null && n.startsWith("#") && (e = n);
    }
  }
  return this.container.querySelector(e || ".modal");
};
vc.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Td);
  if (n) {
    const i = vc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let _c = class extends We {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
_c.NAME = "nav";
class bc extends Q {
}
bc.NAME = "Nav";
bc.Component = _c;
function Jn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Rd({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = Jn(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : ot(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : ot(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ g(Kt, { type: n, ...a });
}
const Dt = 24 * 60 * 60 * 1e3, lt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ds = (e, t = /* @__PURE__ */ new Date()) => (e = lt(e), t = lt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), Eo = (e, t = /* @__PURE__ */ new Date()) => lt(e).getFullYear() === lt(t).getFullYear(), Nd = (e, t = /* @__PURE__ */ new Date()) => (e = lt(e), t = lt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), ip = (e, t = /* @__PURE__ */ new Date()) => {
  e = lt(e), t = lt(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, op = (e, t) => ds(lt(t), e), rp = (e, t) => ds(lt(t).getTime() - Dt, e), ap = (e, t) => ds(lt(t).getTime() + Dt, e), lp = (e, t) => ds(lt(t).getTime() - 2 * Dt, e), To = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = lt(e), Number.isNaN(e.getDay()))
    return n;
  const s = {
    "M+": e.getMonth() + 1,
    "d+": e.getDate(),
    "h+": e.getHours(),
    "H+": e.getHours() % 12,
    "m+": e.getMinutes(),
    "s+": e.getSeconds(),
    "S+": e.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Eo(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, cp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = To(e, Eo(e) ? s.month : s.full);
  if (ds(e, t))
    return i;
  const o = To(t, Eo(e, t) ? Nd(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, hp = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Dt * 7;
    case "oneMonth":
      return t - Dt * 31;
    case "threeMonth":
      return t - Dt * 31 * 3;
    case "halfYear":
      return t - Dt * 183;
    case "oneYear":
      return t - Dt * 365;
    case "twoYear":
      return t - 2 * (Dt * 365);
    default:
      return 0;
  }
}, Ha = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ha(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Ha(e, "day", n, s);
    case "week":
      e *= 7;
      break;
    case "day":
      e *= 24;
      break;
    case "hour":
      e *= 60;
      break;
    case "minute":
      e *= 6e4;
      break;
    default:
      e = 0;
  }
  return n ? s + e : s - e;
};
function Ad({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = Jn(i, n);
  return s = typeof s == "function" ? s(a) : ot(s, a), /* @__PURE__ */ g(Ol, { ...r, children: [
    o,
    s
  ] });
}
function Ld({
  key: e,
  type: t,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(Kt, { type: n, ...l })), c = (f, d) => {
    const p = [];
    for (let y = f; y <= d; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Jn(i, y);
      r && (l.url = typeof r == "function" ? r(v) : ot(r, v)), p.push(/* @__PURE__ */ g(Kt, { type: n, ...l, onClick: o }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function Pd({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const c = { ...t, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof n == "function" ? n(c) : ot(n, c)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(t) : ot(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(ec, { type: "dropdown", dropdown: i, ...r });
}
function Wd({
  key: e,
  page: t,
  type: n,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const c = { ...h };
  let u;
  const f = (y) => {
    var v;
    u = Number((v = y.target) == null ? void 0 : v.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, d = (y) => {
    if (!(y != null && y.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const v = Jn(i, u);
    a && !a({ info: v, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(v) : ot(l, v));
  }, p = Jn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : ot(l, p), /* @__PURE__ */ g("div", { className: T("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ g(Kt, { type: s, ...c, onClick: d })
  ] });
}
let Ii = class extends _t {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: s = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: s, pageTotal: s ? Math.ceil(n / s) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), o = n.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
};
Ii.NAME = "pager";
Ii.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Ii.ItemComponents = {
  ..._t.ItemComponents,
  link: Rd,
  info: Ad,
  nav: Ld,
  "size-menu": Pd,
  goto: Wd
};
class xc extends Q {
}
xc.NAME = "Pager";
xc.Component = Ii;
class Dd extends z {
  constructor() {
    super(...arguments), this._handleClick = (t) => {
      m(t.target).closest("a,.btn").length || this.props.togglePop();
    }, this._handleFocus = () => {
      this.props.changeState({ focus: !0 });
    }, this._handleBlur = () => {
      this.props.changeState({ focus: !1 });
    };
  }
  _getClass() {
    const { state: t, className: n } = this.props, { open: s, disabled: i, focus: o } = t;
    return T(
      "pick",
      n,
      s && "is-open",
      o && "focus",
      i && "disabled"
    );
  }
  _renderTrigger() {
    return this.props, JSON.stringify(this.props.state);
  }
  _renderValue() {
    const { name: t, state: n } = this.props;
    return t ? /* @__PURE__ */ g("input", { type: "hidden", className: "pick-value", name: t, value: n.value }) : null;
  }
  render(t) {
    const { id: n, style: s } = t;
    return /* @__PURE__ */ g(
      "div",
      {
        id: `pick-${n}`,
        className: this._getClass(),
        style: s,
        tabIndex: -1,
        onClick: this._handleClick,
        onFocus: this._handleFocus,
        onBlur: this._handleBlur,
        children: [
          this._renderTrigger(),
          this._renderValue()
        ]
      }
    );
  }
}
var xe, $t, ie;
class Id extends z {
  constructor() {
    super(...arguments);
    L(this, xe, void 0);
    L(this, $t, void 0);
    L(this, ie, void 0);
    this.state = { show: !1 }, D(this, xe, wt());
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = C(this, xe)) == null ? void 0 : n.current;
  }
  get container() {
    return C(this, ie);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: o } = i;
    return T(
      "pick-pop",
      s,
      o === !0 && "in"
    );
  }
  _getContainer(n) {
    if (!C(this, ie)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), D(this, ie, i[0]);
    }
    return C(this, ie);
  }
  _renderPop(n) {
    const { id: s, style: i, children: o } = n;
    return /* @__PURE__ */ g(
      "div",
      {
        id: `pick-pop-${s}`,
        className: this._getClass(n),
        style: i,
        ref: C(this, xe),
        children: o
      }
    );
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: o } = i;
    if (!n || !s || !o.open) {
      C(this, $t) && (C(this, $t).call(this), D(this, $t, void 0));
      return;
    }
    C(this, $t) || D(this, $t, Di(s, n, () => {
      const { direction: r, width: a, maxHeight: l, maxWidth: h, minHeight: c, minWidth: u } = i;
      us(s, n, {
        placement: `${r === "top" ? "top" : "bottom"}-start`,
        middleware: [r === "auto" ? hs() : null, Qs(), Li(1)].filter(Boolean)
      }).then(({ x: f, y: d }) => {
        m(n).css({
          left: f,
          top: d,
          width: a === "100%" ? m(n).width() : void 0,
          maxHeight: l,
          maxWidth: h,
          minHeight: c,
          minWidth: u
        });
      }), a === "100%" && m(n).css({ width: m(n).width() });
    }));
  }
  componentDidMount() {
    this.layout();
  }
  componentWillUnmount() {
    const n = C(this, $t);
    n && (n(), D(this, $t, void 0)), D(this, ie, void 0), D(this, xe, void 0);
  }
  render(n) {
    return Wl(this._renderPop(n), this._getContainer(n));
  }
}
xe = new WeakMap(), $t = new WeakMap(), ie = new WeakMap();
var $c = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vn = (e, t, n) => ($c(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ba = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Be = (e, t, n, s) => ($c(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Os, pt;
let Oi = class extends z {
  constructor(t) {
    super(t), Ba(this, Os, void 0), Ba(this, pt, 0), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      vn(this, pt) && (clearTimeout(vn(this, pt)), Be(this, pt, 0));
      let i = await this.changeState((r) => (n = n ?? !r.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = i;
      return o === "closing" ? (await ho(200, (r) => {
        Be(this, pt, r);
      }), Be(this, pt, 0), i = await this.changeState({ open: !1 })) : o === "opening" && (await ho(50, (r) => {
        Be(this, pt, r);
      }), Be(this, pt, 0), i = await this.changeState({ open: !0 })), i;
    }, this._handleDocClick = (n) => {
      const { open: s } = this.state, { id: i } = this;
      s && !m(n.target).closest(`#pick-${i},#pick-pop-${i}`).length && this.toggle(!1);
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      focus: !1,
      disabled: !1
    }, Be(this, Os, t.id ?? `_${m.guid++}`);
  }
  get id() {
    return vn(this, Os);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
      className: t.className,
      style: t.style,
      name: t.name,
      changeState: this.changeState,
      togglePop: this.toggle
    };
  }
  _getPopProps(t, n) {
    return {
      id: this.id,
      state: n,
      className: t.popClass,
      style: t.popStyle,
      changeState: this.changeState,
      togglePop: this.toggle,
      direction: t.popDirection,
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
  _renderTrigger(t, n) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, n) {
    return null;
  }
  _afterRender(t = !1) {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: t });
  }
  componentDidMount() {
    this._afterRender(!0), m(document).on("click", this._handleDocClick);
  }
  componentWillUpdate(t, n) {
    const { open: s } = this.state, { open: i } = n;
    if (s === i)
      return;
    const { onPopShow: o, onPopHide: r } = this.props;
    i && o ? o() : !i && r && r();
  }
  componentDidUpdate(t, n) {
    const { open: s } = this.state, { open: i } = n;
    if (!!s != !!i) {
      const { onPopShown: o, onPopHidden: r } = this.props;
      s && o ? o() : !s && r && r();
    }
    this._afterRender();
  }
  componentWillUnmount() {
    var t;
    m(document).off("click", this._handleDocClick), (t = this.props.beforeDestroy) == null || t.call(this), vn(this, pt) && clearTimeout(vn(this, pt));
  }
  render(t, n) {
    const {
      Trigger: s = this.constructor.Trigger,
      Pop: i = this.constructor.Pop
    } = t, { open: o } = n;
    return /* @__PURE__ */ g(rs, { children: [
      /* @__PURE__ */ g(s, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      o ? /* @__PURE__ */ g(i, { ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop") : null
    ] });
  }
};
Os = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Oi.Trigger = Dd;
Oi.Pop = Id;
Oi.defaultProps = {
  popContainer: "body",
  popClass: "menu-popup",
  popWidth: "100%",
  popDirection: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300
};
class kc extends Q {
}
kc.NAME = "Pick";
kc.Component = Oi;
var wi, vi, Cc;
class Od extends z {
  constructor() {
    super(...arguments);
    L(this, vi);
    L(this, wi, (n) => {
      var r;
      const { onDeselect: s, selections: i } = this.props, o = (r = n.target.closest(".picker-deselect-btn")) == null ? void 0 : r.dataset.idx;
      o && s && (i != null && i.length) && (n.stopPropagation(), s([i[+o]], n));
    });
  }
  render() {
    const {
      className: n,
      style: s,
      disabled: i,
      focused: o,
      onClick: r,
      children: a
    } = this.props;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("picker-select picker-select-multi form-control", n, { disabled: i, focused: o }),
        style: s,
        onClick: r,
        children: [
          nt(this, vi, Cc).call(this),
          a,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
wi = new WeakMap(), vi = new WeakSet(), Cc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: n.map((i, o) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: C(this, wi), "data-idx": o, children: /* @__PURE__ */ g("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: s });
};
var _i;
class Hd extends z {
  constructor() {
    super(...arguments);
    L(this, _i, (n) => {
      const { onDeselect: s, selections: i } = this.props;
      s && (i != null && i.length) && (n.stopPropagation(), s(i, n));
    });
  }
  render() {
    const {
      className: n,
      style: s,
      disabled: i,
      placeholder: o,
      focused: r,
      selections: a = [],
      onDeselect: l,
      onClick: h,
      children: c
    } = this.props, [u] = a, f = u ? /* @__PURE__ */ g("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }), d = u && l ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: C(this, _i), children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("picker-select picker-select-single form-control", n, { disabled: i, focused: r }),
        style: s,
        onClick: h,
        children: [
          f,
          c,
          d,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
_i = new WeakMap();
var Bd = ["Shift", "Meta", "Alt", "Control"], zd = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function so(e, t) {
  return typeof e.getModifierState == "function" && e.getModifierState(t);
}
function Fd(e) {
  return e.trim().split(" ").map(function(t) {
    var n = t.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? zd : i;
    }), s];
  });
}
function Ud(e, t) {
  var n;
  t === void 0 && (t = {});
  var s = (n = t.timeout) != null ? n : 1e3, i = Object.keys(e).map(function(a) {
    return [Fd(a), e[a]];
  }), o = /* @__PURE__ */ new Map(), r = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var h = l[0], c = l[1], u = o.get(h) || h;
      (function(f, d) {
        return !(d[1].toUpperCase() !== f.key.toUpperCase() && d[1] !== f.code || d[0].find(function(p) {
          return !so(f, p);
        }) || Bd.find(function(p) {
          return !d[0].includes(p) && d[1] !== p && so(f, p);
        }));
      })(a, u[0]) ? u.length > 1 ? o.set(h, u.slice(1)) : (o.delete(h), c(a)) : so(a, a.key) || o.delete(h);
    }), r && clearTimeout(r), r = setTimeout(o.clear.bind(o), s));
  };
}
function Vd(e, t, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", o = Ud(t, n);
  return e.addEventListener(i, o), function() {
    e.removeEventListener(i, o);
  };
}
const qd = (e, t) => e.reduce((n, s) => [...n].reduce((i, o) => {
  if (typeof o != "string")
    return i.push(o), i;
  const r = o.toLowerCase().split(s);
  if (r.length === 1)
    return i.push(o), i;
  let a = 0;
  return r.forEach((l, h) => {
    h && (i.push(/* @__PURE__ */ g("span", { class: "picker-menu-item-match", children: o.substring(a, a + s.length) })), a += s.length), i.push(o.substring(a, a + l.length)), a += l.length;
  }), i;
}, []), t);
var oe, rn, an, ns, ln, Hs, $e, Nn, bi, Sc, cn, ss, hn, is, xi, Mc;
class Gd extends z {
  constructor() {
    super(...arguments);
    L(this, ln);
    L(this, $e);
    L(this, bi);
    L(this, xi);
    L(this, oe, void 0);
    L(this, rn, void 0);
    L(this, an, void 0);
    L(this, ns, void 0);
    L(this, cn, void 0);
    L(this, ss, void 0);
    L(this, hn, void 0);
    L(this, is, void 0);
    this.state = { keys: "", show: !1 }, D(this, oe, 0), D(this, rn, wt()), D(this, an, wt()), D(this, cn, (n) => {
      m(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), D(this, ss, ({ item: n }) => {
      this.select(n.key);
    }), D(this, hn, (n) => {
      this.setState({ keys: n.target.value });
    }), D(this, is, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    m(document).on("click", C(this, cn)), this.show(this.focus.bind(this)), D(this, ns, Vd(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = nt(this, $e, Nn).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var o;
        if (!this.state.show)
          return;
        const s = (o = nt(this, $e, Nn).call(this)) == null ? void 0 : o.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var o;
        if (!this.state.show)
          return;
        const s = (o = nt(this, $e, Nn).call(this)) == null ? void 0 : o.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = nt(this, ln, Hs).call(this);
    n && m(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = m(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    m(document).off("click", C(this, cn)), (s = C(this, ns)) == null || s.call(this);
    const n = nt(this, ln, Hs).call(this);
    n && m(n).off(".pickerMenu.zui");
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
    (n = C(this, rn).current) == null || n.focus();
  }
  hide() {
    this.state.show && (C(this, oe) && window.clearTimeout(C(this, oe)), this.setState({ show: !1 }, () => {
      D(this, oe, window.setTimeout(() => {
        var n, s;
        D(this, oe, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  select(n) {
    const s = this.props.items.find((i) => i.value === n);
    s && this.props.onSelectItem(s);
  }
  setHoverItem(n) {
    this.setState({ hover: n }, () => {
      const s = nt(this, $e, Nn).call(this);
      s != null && s.length && s[0].scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  render() {
    const {
      id: n,
      className: s,
      style: i = {},
      maxHeight: o,
      maxWidth: r,
      width: a,
      menu: l,
      checkbox: h
    } = this.props, { show: c, keys: u } = this.state, f = u.trim().length;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("picker-menu menu-popup", s, { shown: c, "has-search": f }),
        id: `picker-menu-${n}`,
        style: { maxHeight: o, maxWidth: r, width: a, ...i },
        children: [
          nt(this, xi, Mc).call(this),
          /* @__PURE__ */ g(
            Ai,
            {
              ref: C(this, an),
              className: "picker-menu-list",
              items: nt(this, bi, Sc).call(this),
              onClickItem: C(this, ss),
              checkbox: h,
              ...l
            }
          )
        ]
      }
    );
  }
}
oe = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), ns = new WeakMap(), ln = new WeakSet(), Hs = function() {
  var n;
  return (n = C(this, an).current) == null ? void 0 : n.ref.current;
}, $e = new WeakSet(), Nn = function() {
  const n = nt(this, ln, Hs).call(this);
  if (n)
    return m(n).find(".menu-item>a.hover");
}, bi = new WeakSet(), Sc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), { keys: o, hover: r } = this.state, a = o.toLowerCase().split(" ").filter((c) => c.length);
  let l = !1;
  const h = s.reduce((c, u) => {
    const {
      value: f,
      keys: d,
      text: p,
      className: y,
      ...v
    } = u;
    if (!a.length || a.every((w) => f.toLowerCase().includes(w) || (d == null ? void 0 : d.toLowerCase().includes(w)) || typeof p == "string" && p.toLowerCase().includes(w))) {
      let w = p ?? f;
      typeof w == "string" && a.length && (w = qd(a, [w])), f === r && (l = !0), c.push({
        key: f,
        active: i.has(f),
        text: w,
        className: T(y, { hover: f === r }),
        "data-value": f,
        ...v
      });
    }
    return c;
  }, []);
  return !l && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, cn = new WeakMap(), ss = new WeakMap(), hn = new WeakMap(), is = new WeakMap(), xi = new WeakSet(), Mc = function() {
  const {
    search: n,
    searchHint: s
  } = this.props, { keys: i } = this.state, o = i.trim().length;
  return n ? /* @__PURE__ */ g("div", { className: "picker-menu-search", children: [
    /* @__PURE__ */ g(
      "input",
      {
        className: "form-control picker-menu-search-input",
        type: "text",
        placeholder: s,
        value: i,
        onChange: C(this, hn),
        onInput: C(this, hn),
        ref: C(this, rn)
      }
    ),
    o ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: C(this, is), children: /* @__PURE__ */ g("span", { className: "close" }) }) : /* @__PURE__ */ g("span", { className: "magnifier" })
  ] }) : null;
};
var Lr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Z = (e, t, n) => (Lr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, oi = (e, t, n, s) => (Lr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), jd = (e, t, n, s) => ({
  set _(i) {
    oi(e, t, i, n);
  },
  get _() {
    return Z(e, t, s);
  }
}), st = (e, t, n) => (Lr(e, t, "access private method"), n), Bs, fn, ri, Bt, Ue, An, ai, Pr, zs, Ro, No, Ec, Wr, Dr, Ir, Or, Hr, Tc, Ao, Rc, Br, Nc, Fs, Lo;
let Ac = class extends z {
  constructor(t) {
    super(t), X(this, Ue), X(this, ai), X(this, zs), X(this, No), X(this, Hr), X(this, Ao), X(this, Br), X(this, Fs), X(this, Bs, 0), X(this, fn, m.guid++), X(this, ri, wt()), X(this, Bt, void 0), X(this, Wr, (n) => {
      const { valueList: s } = this, i = new Set(n.map((r) => r.value)), o = s.filter((r) => !i.has(r));
      this.setValue(o);
    }), X(this, Dr, () => {
      requestAnimationFrame(() => this.toggle());
    }), X(this, Ir, () => {
      this.close();
    }), X(this, Or, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = Z(this, ri).current) == null || s.hide();
      });
    }), this.state = {
      value: st(this, zs, Ro).call(this, t.defaultValue) ?? "",
      open: !1,
      loading: !1,
      search: "",
      items: Array.isArray(t.items) ? t.items : []
    };
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return st(this, ai, Pr).call(this, this.state.value);
  }
  componentDidMount() {
    st(this, Fs, Lo).call(this, !0);
  }
  componentDidUpdate() {
    st(this, Fs, Lo).call(this);
  }
  componentWillUnmount() {
    var n;
    var t;
    (n = this.props.beforeDestroy) == null || n.call(this), (t = Z(this, Bt)) == null || t.call(this), oi(this, Bt, void 0);
  }
  async loadItems() {
    let { items: t } = this.props;
    if (typeof t == "function") {
      const s = ++jd(this, Bs)._;
      if (await st(this, Ue, An).call(this, { loading: !0, items: [] }), t = await t(), Z(this, Bs) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(t) && this.state.items !== t && (n.items = t), this.state.loading && (n.loading = !1), Object.keys(n).length && await st(this, Ue, An).call(this, n), t;
  }
  getItemList() {
    return this.state.items;
  }
  getItemMap() {
    return this.getItemList().reduce((t, n) => (t[n.value] = n, t), {});
  }
  getItemByValue(t) {
    return this.getItemList().find((n) => n.value === t);
  }
  getSelections() {
    const t = this.getItemMap();
    return this.valueList.map((n) => t[n] || { value: n });
  }
  async toggle(t) {
    if (t === void 0)
      t = !this.state.open;
    else if (t === this.state.open)
      return;
    await st(this, Ue, An).call(this, { open: t }), t && this.loadItems();
  }
  open() {
    return this.toggle(!0);
  }
  close() {
    return this.toggle(!1);
  }
  getValue() {
    return this.props.multiple ? this.valueList : this.value;
  }
  async setValue(t, n) {
    var s;
    await st(this, Ue, An).call(this, { value: st(this, zs, Ro).call(this, t), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
  }
  toggleValue(t, n) {
    const { valueList: s } = this, i = s.indexOf(t);
    if (n !== !!i)
      return i > -1 ? s.splice(i, 1) : s.push(t), this.setValue(s);
  }
  render() {
    const {
      className: t,
      style: n,
      children: s,
      multiple: i,
      Select: o,
      name: r
    } = this.props, a = o || (i ? Od : Hd), l = st(this, No, Ec).call(this);
    return /* @__PURE__ */ g(
      "div",
      {
        id: `picker-${Z(this, fn)}`,
        className: T("picker", t),
        style: n,
        children: [
          /* @__PURE__ */ g(a, { ...l }),
          s,
          st(this, Ao, Rc).call(this),
          r ? /* @__PURE__ */ g("input", { type: "hidden", className: "picker-value", name: r, value: this.state.value }) : null
        ]
      }
    );
  }
};
Bs = /* @__PURE__ */ new WeakMap();
fn = /* @__PURE__ */ new WeakMap();
ri = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakSet();
An = function(e) {
  return new Promise((t) => {
    this.setState(e, t);
  });
};
ai = /* @__PURE__ */ new WeakSet();
Pr = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
zs = /* @__PURE__ */ new WeakSet();
Ro = function(e) {
  const t = st(this, ai, Pr).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
No = /* @__PURE__ */ new WeakSet();
Ec = function() {
  const { placeholder: e, disabled: t, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: e,
    disabled: t,
    multiple: n,
    selections: this.getSelections(),
    onClick: Z(this, Dr),
    onDeselect: Z(this, Wr)
  };
};
Wr = /* @__PURE__ */ new WeakMap();
Dr = /* @__PURE__ */ new WeakMap();
Ir = /* @__PURE__ */ new WeakMap();
Or = /* @__PURE__ */ new WeakMap();
Hr = /* @__PURE__ */ new WeakSet();
Tc = function() {
  const { search: e, menuClass: t, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: o, menuMinWidth: r, multiple: a, searchHint: l, menuCheckbox: h } = this.props, { items: c } = this.state;
  return {
    id: `${Z(this, fn)}`,
    items: c,
    selections: this.valueList,
    search: e === !0 || typeof e == "number" && e <= c.length,
    searchHint: l,
    style: s,
    multiple: a,
    className: t,
    width: n === "100%" ? "auto" : n,
    maxHeight: i,
    maxWidth: o,
    minWidth: r,
    checkbox: h,
    onRequestHide: Z(this, Ir),
    onSelectItem: Z(this, Or)
  };
};
Ao = /* @__PURE__ */ new WeakSet();
Rc = function() {
  const { open: e } = this.state;
  if (!e)
    return null;
  const t = m(this.props.container || "body");
  let n = t.find(".pickers-container");
  n.length || (n = m("<div>").addClass("pickers-container").appendTo(t));
  const { Menu: s = Gd } = this.props;
  return Wl(/* @__PURE__ */ g(s, { ...st(this, Hr, Tc).call(this), ref: Z(this, ri) }), n[0]);
};
Br = /* @__PURE__ */ new WeakSet();
Nc = function() {
  const e = m(`#picker-${Z(this, fn)}`)[0], t = m(`#picker-menu-${Z(this, fn)}`)[0];
  if (!t || !e || !this.state.open) {
    Z(this, Bt) && (Z(this, Bt).call(this), oi(this, Bt, void 0));
    return;
  }
  Z(this, Bt) || oi(this, Bt, Di(e, t, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    us(e, t, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? hs() : null, Qs(), Li(1)].filter(Boolean)
    }).then(({ x: i, y: o }) => {
      m(t).css({ left: i, top: o, width: s === "100%" ? m(e).width() : void 0 });
    }), s === "100%" && m(t).css({ width: m(e).width() });
  }));
};
Fs = /* @__PURE__ */ new WeakSet();
Lo = function(e = !1) {
  var t;
  (t = this.props.afterRender) == null || t.call(this, { firstRender: e }), st(this, Br, Nc).call(this);
};
Ac.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class Lc extends Q {
}
Lc.NAME = "Picker";
Lc.Component = Ac;
class Pc extends ut {
  constructor() {
    super(...arguments), this.cleanup = () => {
    }, this.toggle = () => {
    };
  }
  init() {
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      if (this.$target.hasClass("hidden")) {
        this.show();
        return;
      }
      this.hide();
    }, this.$element.addClass("z-50").on("click", this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off("click", this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: n } = this.options, s = {
      placement: t,
      strategy: n,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && s.middleware.push(hs()), o && s.middleware.push(o === !0 ? Qs() : Qs(o)), r && s.middleware.push(mo({ element: this.$arrow[0] })), a && s.middleware.push(Li(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = Di(t, n, () => {
      us(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !mo || !r.arrow)
          return;
        const { x: a, y: l } = r.arrow, h = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[o.split("-")[0]];
        Object.assign(this.$arrow[0].style, {
          left: a != null ? `${a}px` : "",
          top: l != null ? `${l}px` : "",
          right: "",
          bottom: "",
          [h]: "-4px"
        });
      });
    });
  }
  initTarget() {
    const t = this.$element.data("target");
    if (!t)
      throw new Error("popsvers trigger must have target.");
    const n = m(t);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      m(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const t = m('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = m('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
Pc.NAME = "Popovers";
Pc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class Wc extends Q {
}
Wc.NAME = "Toolbar";
Wc.Component = _t;
function fs(e) {
  return e.split("-")[1];
}
function zr(e) {
  return e === "y" ? "height" : "width";
}
function Je(e) {
  return e.split("-")[0];
}
function Hi(e) {
  return ["top", "bottom"].includes(Je(e)) ? "x" : "y";
}
function za(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = Hi(t), l = zr(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (Je(t)) {
    case "top":
      u = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      u = { x: o, y: s.y + s.height };
      break;
    case "right":
      u = { x: s.x + s.width, y: r };
      break;
    case "left":
      u = { x: s.x - i.width, y: r };
      break;
    default:
      u = { x: s.x, y: s.y };
  }
  switch (fs(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Yd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = za(h, s, l), f = s, d = {}, p = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: $, data: S, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, d = { ...d, [v]: { ...d[v], ...S } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = za(h, f, l)), y = -1);
  }
  return { x: c, y: u, placement: f, strategy: i, middlewareData: d };
};
function Dc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function li(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Kd(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = !1, padding: d = 0 } = t, p = Dc(d), y = a[f ? u === "floating" ? "reference" : "floating" : u], v = li(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(y))) == null || n ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, S = li(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - S.top + p.top) / $.y, bottom: (S.bottom - v.bottom + p.bottom) / $.y, left: (v.left - S.left + p.left) / $.x, right: (S.right - v.right + p.right) / $.x };
}
const Xd = Math.min, Jd = Math.max;
function Zd(e, t, n) {
  return Jd(e, Xd(t, n));
}
const Qd = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Dc(s), c = { x: i, y: o }, u = Hi(r), f = zr(u), d = await l.getDimensions(n), p = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", v = a.reference[f] + a.reference[u] - c[u] - a.floating[f], w = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[f]);
  const S = v / 2 - w / 2, k = h[p], E = $ - d[f] - h[y], N = $ / 2 - d[f] / 2 + S, A = Zd(k, N, E), H = fs(r) != null && N != A && a.reference[f] / 2 - (N < k ? h[p] : h[y]) - d[f] / 2 < 0;
  return { [u]: c[u] - (H ? N < k ? k - N : E - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), tf = ["top", "right", "bottom", "left"];
tf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const ef = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ci(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ef[t]);
}
function nf(e, t, n) {
  n === void 0 && (n = !1);
  const s = fs(e), i = Hi(e), o = zr(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = ci(r)), { main: r, cross: ci(r) };
}
const sf = { start: "end", end: "start" };
function io(e) {
  return e.replace(/start|end/g, (t) => sf[t]);
}
const of = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: p = !0, ...y } = e, v = Je(s), w = Je(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [ci(r)] : function(b) {
      const R = ci(b);
      return [io(b), R, io(R)];
    }(r));
    u || d === "none" || $.push(...function(b, R, I, P) {
      const O = fs(b);
      let W = function(U, dt, Tt) {
        const gs = ["left", "right"], pn = ["right", "left"], ms = ["top", "bottom"], Gi = ["bottom", "top"];
        switch (U) {
          case "top":
          case "bottom":
            return Tt ? dt ? pn : gs : dt ? gs : pn;
          case "left":
          case "right":
            return dt ? ms : Gi;
          default:
            return [];
        }
      }(Je(b), I === "start", P);
      return O && (W = W.map((U) => U + "-" + O), R && (W = W.concat(W.map(io)))), W;
    }(r, p, d, _));
    const S = [r, ...$], k = await Kd(t, y), E = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && E.push(k[v]), c) {
      const { main: b, cross: R } = nf(s, o, _);
      E.push(k[b], k[R]);
    }
    if (N = [...N, { placement: s, overflows: E }], !E.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = S[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let I = "bottom";
      switch (f) {
        case "bestFit": {
          var H;
          const P = (H = N.map((O) => [O, O.overflows.filter((W) => W > 0).reduce((W, U) => W + U, 0)]).sort((O, W) => O[1] - W[1])[0]) == null ? void 0 : H[0].placement;
          P && (I = P);
          break;
        }
        case "initialPlacement":
          I = r;
      }
      if (s !== I)
        return { reset: { placement: I } };
    }
    return {};
  } };
}, rf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = Je(a), f = fs(a), d = Hi(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, y = c && d ? -1 : 1, v = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return f && typeof $ == "number" && (_ = f === "end" ? -1 * $ : $), d ? { x: _ * y, y: w * p } : { x: w * p, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ct(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function St(e) {
  return ct(e).getComputedStyle(e);
}
function ue(e) {
  return Oc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Cs;
function Ic() {
  if (Cs)
    return Cs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Cs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Cs) : navigator.userAgent;
}
function Xt(e) {
  return e instanceof ct(e).HTMLElement;
}
function yt(e) {
  return e instanceof ct(e).Element;
}
function Oc(e) {
  return e instanceof ct(e).Node;
}
function Fa(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ct(e).ShadowRoot || e instanceof ShadowRoot;
}
function Bi(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = St(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function af(e) {
  return ["table", "td", "th"].includes(ue(e));
}
function Po(e) {
  const t = /firefox/i.test(Ic()), n = St(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function Hc() {
  return !/^((?!chrome|android).)*safari/i.test(Ic());
}
function Fr(e) {
  return ["html", "body", "#document"].includes(ue(e));
}
const Ua = Math.min, zn = Math.max, hi = Math.round;
function Bc(e) {
  const t = St(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = hi(n) !== i || hi(s) !== o;
  return r && (n = i, s = o), { width: n, height: s, fallback: r };
}
function zc(e) {
  return yt(e) ? e : e.contextElement;
}
const Fc = { x: 1, y: 1 };
function Ze(e) {
  const t = zc(e);
  if (!Xt(t))
    return Fc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: o } = Bc(t);
  let r = (o ? hi(n.width) : n.width) / s, a = (o ? hi(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Ne(e, t, n, s) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = zc(e);
  let l = Fc;
  t && (s ? yt(s) && (l = Ze(s)) : l = Ze(e));
  const h = a ? ct(a) : window, c = !Hc() && n;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, f = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, d = r.width / l.x, p = r.height / l.y;
  if (a) {
    const y = ct(a), v = s && yt(s) ? ct(s) : s;
    let w = y.frameElement;
    for (; w && s && v !== y; ) {
      const _ = Ze(w), $ = w.getBoundingClientRect(), S = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(S.paddingLeft)) * _.x, $.y += (w.clientTop + parseFloat(S.paddingTop)) * _.y, u *= _.x, f *= _.y, d *= _.x, p *= _.y, u += $.x, f += $.y, w = ct(w).frameElement;
    }
  }
  return { width: d, height: p, top: f, right: u + d, bottom: f + p, left: u, x: u, y: f };
}
function ce(e) {
  return ((Oc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function zi(e) {
  return yt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Uc(e) {
  return Ne(ce(e)).left + zi(e).scrollLeft;
}
function lf(e, t, n) {
  const s = Xt(t), i = ce(t), o = Ne(e, !0, n === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((ue(t) !== "body" || Bi(i)) && (r = zi(t)), Xt(t)) {
      const l = Ne(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Uc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function Zn(e) {
  if (ue(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Fa(e) ? e.host : null) || ce(e);
  return Fa(t) ? t.host : t;
}
function Va(e) {
  return Xt(e) && St(e).position !== "fixed" ? e.offsetParent : null;
}
function qa(e) {
  const t = ct(e);
  let n = Va(e);
  for (; n && af(n) && St(n).position === "static"; )
    n = Va(n);
  return n && (ue(n) === "html" || ue(n) === "body" && St(n).position === "static" && !Po(n)) ? t : n || function(s) {
    let i = Zn(s);
    for (; Xt(i) && !Fr(i); ) {
      if (Po(i))
        return i;
      i = Zn(i);
    }
    return null;
  }(e) || t;
}
function Vc(e) {
  const t = Zn(e);
  return Fr(t) ? e.ownerDocument.body : Xt(t) && Bi(t) ? t : Vc(t);
}
function Fn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Vc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ct(s);
  return i ? t.concat(o, o.visualViewport || [], Bi(s) ? s : []) : t.concat(s, Fn(s));
}
function Ga(e, t, n) {
  return t === "viewport" ? li(function(s, i) {
    const o = ct(s), r = ce(s), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const f = Hc();
      (f || !f && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : yt(t) ? function(s, i) {
    const o = Ne(s, !0, i === "fixed"), r = o.top + s.clientTop, a = o.left + s.clientLeft, l = Xt(s) ? Ze(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, f = r * l.y;
    return { top: f, left: u, right: u + h, bottom: f + c, x: u, y: f, width: h, height: c };
  }(t, n) : li(function(s) {
    var i;
    const o = ce(s), r = zi(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = zn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = zn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -r.scrollLeft + Uc(s);
    const u = -r.scrollTop;
    return St(a || o).direction === "rtl" && (c += zn(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(ce(e)));
}
const cf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let f = Fn(h).filter((v) => yt(v) && ue(v) !== "body"), d = null;
    const p = St(h).position === "fixed";
    let y = p ? Zn(h) : h;
    for (; yt(y) && !Fr(y); ) {
      const v = St(y), w = Po(y);
      (p ? w || d : w || v.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = v : f = f.filter((_) => _ !== y), y = Zn(y);
    }
    return c.set(h, f), f;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = Ga(t, c, i);
    return h.top = zn(u.top, h.top), h.right = Ua(u.right, h.right), h.bottom = Ua(u.bottom, h.bottom), h.left = zn(u.left, h.left), h;
  }, Ga(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Xt(n), o = ce(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((ue(n) !== "body" || Bi(o)) && (r = zi(n)), Xt(n))) {
    const h = Ne(n);
    a = Ze(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: yt, getDimensions: function(e) {
  return Bc(e);
}, getOffsetParent: qa, getDocumentElement: ce, getScale: Ze, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || qa, o = this.getDimensions;
  return { reference: lf(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => St(e).direction === "rtl" };
function hf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || o ? [...yt(e) ? Fn(e) : e.contextElement ? Fn(e.contextElement) : [], ...Fn(t)] : [];
  h.forEach((d) => {
    l && d.addEventListener("scroll", n, { passive: !0 }), o && d.addEventListener("resize", n);
  });
  let c, u = null;
  if (r) {
    let d = !0;
    u = new ResizeObserver(() => {
      d || n(), d = !1;
    }), yt(e) && !a && u.observe(e), yt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let f = a ? Ne(e) : null;
  return a && function d() {
    const p = Ne(e);
    !f || p.x === f.x && p.y === f.y && p.width === f.width && p.height === f.height || n(), f = p, c = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), o && p.removeEventListener("resize", n);
    }), (d = u) == null || d.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const uf = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: cf, ...n }, o = { ...i.platform, _c: s };
  return Yd(e, t, { ...i, platform: o });
};
var Ur = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, V = (e, t, n) => (Ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), j = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ae = (e, t, n, s) => (Ur(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ct = (e, t, n) => (Ur(e, t, "access private method"), n), Un, Vn, Ln, je, rt, Wo, ui, Fi, Vr, qr, qc, Do, Gc, Gr, jc, jr, Yc, Yr, Kc, Io, Xc, Kr, Jc, qn, Oo, Zc;
const Ye = class extends ut {
  constructor() {
    super(...arguments), j(this, Fi), j(this, qr), j(this, Do), j(this, Gr), j(this, jr), j(this, Yr), j(this, Io), j(this, Kr), j(this, Oo), j(this, Un, !1), j(this, Vn, void 0), j(this, Ln, 0), j(this, je, void 0), j(this, rt, void 0), j(this, Wo, void 0), j(this, ui, void 0), this.hideLater = () => {
      V(this, qn).call(this), Ae(this, Ln, window.setTimeout(this.hide.bind(this), 100));
    }, j(this, qn, () => {
      clearTimeout(V(this, Ln)), Ae(this, Ln, 0);
    });
  }
  get isShown() {
    var e;
    return (e = V(this, je)) == null ? void 0 : e.classList.contains(Ye.CLASS_SHOW);
  }
  get tooltip() {
    return V(this, je) || Ct(this, Do, Gc).call(this);
  }
  get trigger() {
    return V(this, Wo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ye.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !V(this, Un) && this.isHover && Ct(this, Oo, Zc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ye.CLASS_SHOW), Ct(this, Io, Xc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = V(this, ui)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = V(this, je)) == null || t.classList.remove(Ye.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    V(this, Un) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", V(this, qn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, o] of n)
      s.has(i) || o.hide();
  }
};
let Mt = Ye;
Un = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
rt = /* @__PURE__ */ new WeakMap();
Wo = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakSet();
Vr = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
qr = /* @__PURE__ */ new WeakSet();
qc = function() {
  const e = Ct(this, Fi, Vr).call(this);
  return Ae(this, rt, document.createElement("div")), V(this, rt).style.position = this.options.strategy, V(this, rt).style.width = `${e}px`, V(this, rt).style.height = `${e}px`, V(this, rt).style.transform = "rotate(45deg)", V(this, rt);
};
Do = /* @__PURE__ */ new WeakSet();
Gc = function() {
  var n;
  const e = Ye.TOOLTIP_CLASS;
  let t;
  if (this.isDynamic) {
    t = document.createElement("div");
    const s = this.options.className ? this.options.className.split(" ") : [];
    let i = [e, this.options.type || ""];
    i = i.concat(s), t.classList.add(...i), t[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const s = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (s != null && s.startsWith("#") && (t = document.querySelector(s)), !t) {
      const i = this.element.nextElementSibling;
      i != null && i.classList.contains(e) ? t = i : t = (n = this.element.parentNode) == null ? void 0 : n.querySelector(`.${e}`);
    }
  }
  if (this.options.arrow && (t == null || t.append(Ct(this, qr, qc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Ae(this, je, t), t;
};
Gr = /* @__PURE__ */ new WeakSet();
jc = function() {
  var i;
  const e = Ct(this, Fi, Vr).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [rf(e), of()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && V(this, rt) && ((i = s.middleware) == null || i.push(Qd({ element: V(this, rt) }))), s;
};
jr = /* @__PURE__ */ new WeakSet();
Yc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Yr = /* @__PURE__ */ new WeakSet();
Kc = function(e) {
  return e === "bottom" ? {
    borderBottomStyle: "none",
    borderRightStyle: "none"
  } : e === "top" ? {
    borderTopStyle: "none",
    borderLeftStyle: "none"
  } : e === "left" ? {
    borderBottomStyle: "none",
    borderLeftStyle: "none"
  } : {
    borderTopStyle: "none",
    borderRightStyle: "none"
  };
};
Io = /* @__PURE__ */ new WeakSet();
Xc = function() {
  const e = Ct(this, Gr, jc).call(this), t = Ct(this, Kr, Jc).call(this);
  Ae(this, ui, hf(t, this.tooltip, () => {
    uf(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: o }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const r = o.split("-")[0], a = Ct(this, jr, Yc).call(this, r);
      if (i.arrow && V(this, rt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(V(this, rt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-V(this, rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Ct(this, Yr, Kc).call(this, r)
        });
      }
    });
  }));
};
Kr = /* @__PURE__ */ new WeakSet();
Jc = function() {
  return V(this, Vn) || Ae(this, Vn, {
    getBoundingClientRect: () => {
      const { element: e } = this;
      if (e instanceof MouseEvent) {
        const { clientX: t, clientY: n } = e;
        return {
          width: 0,
          height: 0,
          top: n,
          right: t,
          bottom: n,
          left: t
        };
      }
      return e instanceof HTMLElement ? e.getBoundingClientRect() : e;
    },
    contextElement: this.element
  }), V(this, Vn);
};
qn = /* @__PURE__ */ new WeakMap();
Oo = /* @__PURE__ */ new WeakSet();
Zc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", V(this, qn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ae(this, Un, !0);
};
Mt.NAME = "tooltip";
Mt.TOOLTIP_CLASS = "tooltip";
Mt.CLASS_SHOW = "show";
Mt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
Mt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Mt.MENU_SELECTOR);
  if (n) {
    const i = Mt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    Mt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, Mt.MENU_SELECTOR);
  if (!n)
    return;
  const s = Mt.ensure(n);
  s.isHover && s.show();
});
function df({
  type: e,
  component: t,
  className: n,
  children: s,
  style: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: c,
  target: u,
  trailingIcon: f,
  hint: d,
  checked: p,
  actions: y,
  show: v,
  level: w = 0,
  items: _,
  ...$
}) {
  const S = Array.isArray(y) ? { items: y } : y;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = T("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ g(
    "div",
    {
      className: T("tree-item-content", n, { disabled: a, active: l }),
      title: d,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
      "data-level": w,
      ...o,
      ...$,
      children: [
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ g("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(Kn, { icon: h, className: "tree-icon" }),
        r ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: r, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        S ? /* @__PURE__ */ g(_t, { ...S }) : null,
        /* @__PURE__ */ g(Kn, { icon: f, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Xr = class extends Ni {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t), { collapsedIcon: s, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...n
    };
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(n) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: n } = this.props;
    return n && (t.className = T(t.className, "tree-hover")), t;
  }
};
Xr.ItemComponents = {
  item: df
};
Xr.NAME = "tree";
class Qc extends Q {
}
Qc.NAME = "Tree";
Qc.Component = Xr;
var os, $i, ki, Ci;
class ff extends z {
  constructor(n) {
    super(n);
    L(this, os, wt());
    L(this, $i, (n) => {
      n.stopPropagation(), it.show({
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
    L(this, ki, (n) => {
      var o, r, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = n.dataTransfer) == null || o.setData("application/id", this.props.block.id), (a = (r = this.props).onDragStart) == null || a.call(r, n);
    });
    L(this, Ci, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ g("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return C(this, os).current;
  }
  componentDidMount() {
    this.load(), m(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    m(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(ot(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g(Pl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ g("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: o, style: r, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: f, dragging: d } = this.state;
    return /* @__PURE__ */ g("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ g(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${d ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: C(this, ki),
        onDragEnd: C(this, Ci),
        "data-id": c,
        ref: C(this, os),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: C(this, $i), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          f
        ]
      }
    ) });
  }
}
os = new WeakMap(), $i = new WeakMap(), ki = new WeakMap(), Ci = new WeakMap();
var th = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, qt = (e, t, n) => (th(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, bt = (e, t, n) => (th(e, t, "access private method"), n), Jt, Jr, eh, Zr, nh, Ho, sh, Qr, ih, di, Bo, Ui, zo, ta, oh, Fo, Uo, Vi, ea;
const na = class extends z {
  constructor() {
    super(...arguments), gt(this, Jr), gt(this, Zr), gt(this, Ho), gt(this, Qr), gt(this, di), gt(this, Ui), gt(this, ta), gt(this, Jt, /* @__PURE__ */ new Map()), this.state = {}, gt(this, Fo, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), gt(this, Uo, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = bt(this, Ho, sh).call(this), { cellHeight: n, grid: s } = this.props, i = qt(this, Jt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((o, r) => {
      const { id: a } = o, [l, h, c, u] = i.get(a) || [0, 0, o.width, o.height];
      return /* @__PURE__ */ g(
        ff,
        {
          id: a,
          index: r,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: o,
          moreMenu: !0,
          onDragStart: qt(this, Fo),
          onDragEnd: qt(this, Uo)
        },
        o.id
      );
    }) }) });
  }
};
let sa = na;
Jt = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakSet();
eh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Zr = /* @__PURE__ */ new WeakSet();
nh = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: o,
      size: r,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...u
    } = i, [f, d] = bt(this, Jr, eh).call(this, r);
    return {
      id: `${o}`,
      width: f,
      height: d,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...u
    };
  });
};
Ho = /* @__PURE__ */ new WeakSet();
sh = function() {
  qt(this, Jt).clear();
  let e = 0;
  const t = bt(this, Zr, nh).call(this);
  return t.forEach((n) => {
    bt(this, Qr, ih).call(this, n);
    const [, s, , i] = qt(this, Jt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Qr = /* @__PURE__ */ new WeakSet();
ih = function(e) {
  const t = qt(this, Jt), { id: n, left: s, top: i, width: o, height: r } = e;
  if (s < 0 || i < 0) {
    const [a, l] = bt(this, ta, oh).call(this, o, r, s, i);
    t.set(n, [a, l, o, r]);
  } else
    bt(this, Ui, zo).call(this, n, [s, i, o, r]);
};
di = /* @__PURE__ */ new WeakSet();
Bo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of qt(this, Jt).entries())
    if (s !== n && bt(t = na, Vi, ea).call(t, i, e))
      return !1;
  return !0;
};
Ui = /* @__PURE__ */ new WeakSet();
zo = function(e, t) {
  var n;
  qt(this, Jt).set(e, t);
  for (const [s, i] of qt(this, Jt).entries())
    s !== e && bt(n = na, Vi, ea).call(n, i, t) && (i[1] = t[1] + t[3], bt(this, Ui, zo).call(this, s, i));
};
ta = /* @__PURE__ */ new WeakSet();
oh = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (bt(this, di, Bo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, o = s < 0 ? 0 : s, r = !1;
  const a = this.props.grid;
  for (; !r; ) {
    if (bt(this, di, Bo).call(this, [i, o, e, t])) {
      r = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, o += 1)) : o += 1;
  }
  return [i, o];
};
Fo = /* @__PURE__ */ new WeakMap();
Uo = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakSet();
ea = function([e, t, n, s], [i, o, r, a]) {
  return !(e + n <= i || i + r <= e || t + s <= o || o + a <= t);
};
gt(sa, Vi);
sa.defaultProps = {
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
class rh extends Q {
}
rh.NAME = "Dashboard";
rh.Component = sa;
var re, ae;
class ja extends z {
  constructor(n) {
    super(n);
    L(this, re, void 0);
    L(this, ae, void 0);
    D(this, re, 0), D(this, ae, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (C(this, re) && cancelAnimationFrame(C(this, re)), D(this, re, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), D(this, re, 0);
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
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, h = (r === "horz" ? s.clientX - o.left : s.clientY - o.top) - this.barSize / 2;
      this.scroll(h * l / a), s.preventDefault();
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
    const { clientSize: n, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(n * n / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (D(this, ae, typeof n == "string" ? document : n.current), C(this, ae).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), C(this, ae) && C(this, ae).removeEventListener("wheel", this._handleWheel);
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
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: c
    } = this.props, { maxScrollPos: u, scrollPos: f } = this, { dragStart: d } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...r
    }, y = {};
    return s === "horz" ? (p.height = i, p.width = n, y.width = this.barSize, y.left = Math.round(Math.min(u, f) * (n - y.width) / u)) : (p.width = i, p.height = n, y.height = this.barSize, y.top = Math.round(Math.min(u, f) * (n - y.height) / u)), /* @__PURE__ */ g(
      "div",
      {
        className: T("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": d
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ g(
          "div",
          {
            className: "scrollbar-bar",
            style: y,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
re = new WeakMap(), ae = new WeakMap();
function ah({ col: e, className: t, height: n, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, ...h }) {
  var H;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...r
  }, { align: u, border: f } = e.setting, d = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...o
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": f === !0 || f === "left",
    "has-border-right": f === !0 || f === "right"
  }], y = ["dtable-cell-content", e.setting.cellClass], v = (H = s.data) == null ? void 0 : H[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, $ = [], S = [], k = {}, E = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !tt(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : S;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : d, b.style), b.className && (b.outer ? p : y).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? k : E, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      S.push(b);
  });
  const A = N;
  return /* @__PURE__ */ g(
    "div",
    {
      className: T(p),
      style: c,
      "data-col": e.name,
      "data-type": e.type,
      ...h,
      ...k,
      children: [
        S.length > 0 && /* @__PURE__ */ g(A, { className: T(y), style: d, ...E, children: S }),
        $
      ]
    }
  );
}
function oo({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: a = ah, onRenderCell: l }) {
  return /* @__PURE__ */ g("div", { className: T("dtable-cells", t), style: { top: n, left: s, width: i, height: o }, children: r.map((h) => h.visible ? /* @__PURE__ */ g(
    a,
    {
      col: h,
      row: e,
      onRenderCell: l
    },
    h.name
  ) : null) });
}
function lh({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  CellComponent: l = ah,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ g(
    oo,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let d = null;
  o.list.length && (d = /* @__PURE__ */ g(
    oo,
    {
      className: "dtable-flexable",
      cols: o.list,
      left: i.width - a,
      width: Math.max(o.width, o.totalWidth),
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let p = null;
  r.list.length && (p = /* @__PURE__ */ g(
    oo,
    {
      className: "dtable-fixed-right",
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  const y = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ g(
    "div",
    {
      className: T("dtable-row", t),
      style: y,
      "data-id": e.id,
      ...u,
      children: [
        f,
        d,
        p
      ]
    }
  );
}
function pf({ height: e, onRenderRow: t, ...n }) {
  const s = {
    height: e,
    ...n,
    row: { id: "HEADER", index: -1, top: 0 },
    className: "dtable-in-header",
    top: 0
  };
  if (t) {
    const i = t({ props: s }, q);
    i && Object.assign(s, i);
  }
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(lh, { ...s }) });
}
function gf({
  className: e,
  style: t,
  top: n,
  rows: s,
  height: i,
  rowHeight: o,
  scrollTop: r,
  onRenderRow: a,
  ...l
}) {
  return t = { ...t, top: n, height: i }, /* @__PURE__ */ g("div", { className: T("dtable-rows", e), style: t, children: s.map((h) => {
    const c = {
      className: `dtable-row-${h.index % 2 ? "odd" : "even"}`,
      row: h,
      top: h.top - r,
      height: o,
      ...l
    }, u = a == null ? void 0 : a({ props: c, row: h }, q);
    return u && Object.assign(c, u), /* @__PURE__ */ g(lh, { ...c }, h.id);
  }) });
}
const fi = /* @__PURE__ */ new Map(), pi = [];
function ch(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && fi.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  fi.set(n, e), t != null && t.buildIn && !pi.includes(n) && pi.push(n);
}
function pe(e, t) {
  ch(e, t);
  const n = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...o } = e;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = e, n;
}
function hh(e) {
  return fi.delete(e);
}
function mf(e) {
  if (typeof e == "string") {
    const t = fi.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function uh(e, t, n) {
  return t.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = mf(s);
    i && (n.has(i.name) || ((o = i.plugins) != null && o.length && uh(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function yf(e = [], t = !0) {
  return t && pi.length && e.unshift(...pi), e != null && e.length ? uh([], e, /* @__PURE__ */ new Set()) : [];
}
function dh() {
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
function wf(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ya(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function ro(e, t = !1) {
  if (!e.list.length)
    return;
  if (e.widthSetting && e.width !== e.widthSetting) {
    e.width = e.widthSetting;
    const s = e.width - e.totalWidth;
    if (t || s > 0) {
      const i = e.flexList.length ? e.flexList : e.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math.min(s, Math.ceil(s * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let n = 0;
  e.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = n, n += s.realWidth;
  });
}
function vf(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Ya(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, u = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, f = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, d = [], p = {};
  let y = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: $, onAddCol: S } = _;
    $ && Object.entries($).forEach(([k, E]) => {
      w[k] || (w[k] = []), w[k].push(E);
    }), S && v.push(S);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: $ = "", name: S } = _, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ..._,
      type: $
    }, E = {
      name: S,
      type: $,
      setting: k,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: d.length
    }, N = w[$];
    N && N.forEach((O) => {
      const W = typeof O == "function" ? O.call(e, k) : O;
      W && Object.assign(k, W, _);
    });
    const { fixed: A, flex: H, minWidth: b = o, maxWidth: R = r } = k, I = Ya(k.width || i, i);
    E.flex = H === !0 ? 1 : typeof H == "number" ? H : 0, E.width = wf(I < 1 ? Math.round(I * s) : I, b, R), v.forEach((O) => O.call(e, E)), d.push(E), p[E.name] = E;
    const P = A ? A === "left" ? u : f : c;
    P.list.push(E), P.totalWidth += E.width, P.width = P.totalWidth, E.flex && P.flexList.push(E), typeof k.order == "number" && (y = !0);
  }), y) {
    const _ = ($, S) => ($.setting.order ?? 0) - (S.setting.order ?? 0);
    d.sort(_), u.list.sort(_), c.list.sort(_), f.list.sort(_);
  }
  return ro(u, !0), ro(f, !0), c.widthSetting = s - u.width - f.width, ro(c), {
    list: d,
    map: p,
    left: u,
    center: c,
    right: f
  };
}
var ia = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, M = (e, t, n) => (ia(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (ia(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Wt = (e, t, n) => (ia(e, t, "access private method"), n), Ve, Pn, Me, zt, be, J, It, Pt, Wn, Us, gi, ee, Dn, In, Vo, fh, qo, ph, Go, gh, jo, mh, Vs, Yo, oa, ra, qi, mi, Ko, Xo, aa, yh, la, wh, Jo, vh;
let ca = class extends z {
  constructor(t) {
    super(t), B(this, Vo), B(this, qo), B(this, Go), B(this, jo), B(this, Vs), B(this, aa), B(this, la), B(this, Jo), this.ref = wt(), B(this, Ve, 0), B(this, Pn, void 0), B(this, Me, !1), B(this, zt, void 0), B(this, be, void 0), B(this, J, []), B(this, It, void 0), B(this, Pt, /* @__PURE__ */ new Map()), B(this, Wn, {}), B(this, Us, void 0), B(this, gi, []), this.updateLayout = () => {
      M(this, Ve) && cancelAnimationFrame(M(this, Ve)), Y(this, Ve, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, Ve, 0);
      }));
    }, B(this, ee, (n, s) => {
      s = s || n.type;
      const i = M(this, Pt).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, Dn, (n) => {
      M(this, ee).call(this, n, `window_${n.type}`);
    }), B(this, In, (n) => {
      M(this, ee).call(this, n, `document_${n.type}`);
    }), B(this, oa, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return M(this, J).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, n, s);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    }), B(this, ra, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), M(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), B(this, qi, (n, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), n[0] = s.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return M(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), r.setting[a] && (n = r.setting[a].call(this, n, s, i)), n;
    }), B(this, mi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, Ko, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: o, element: r }), M(this, J).forEach((f) => {
          var d;
          (d = f.onHeaderCellClick) == null || d.call(this, n, { colName: o, element: r });
        }));
      else {
        const { rowElement: f } = s, d = this.layout.visibleRows.find((p) => p.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
            return;
          for (const p of M(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: d, element: f })) === !0)
          return;
        for (const p of M(this, J))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: d, element: f })) === !0)
            return;
      }
    }), B(this, Xo, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, Pn, t.id ?? `dtable-${uc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, be, Object.freeze(yf(t.plugins))), M(this, be).forEach((n) => {
      var r;
      const { methods: s, data: i, state: o } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(M(this, Wn), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = n.onCreate) == null || r.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = M(this, It)) == null ? void 0 : t.options) || M(this, zt) || dh();
  }
  get plugins() {
    return M(this, J);
  }
  get layout() {
    return M(this, It);
  }
  get id() {
    return M(this, Pn);
  }
  get data() {
    return M(this, Wn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, zt, void 0);
  }
  componentDidMount() {
    if (M(this, Me) ? this.forceUpdate() : Wt(this, Vs, Yo).call(this), M(this, J).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", M(this, Ko)), this.on("keydown", M(this, Xo)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Us, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    M(this, J).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    M(this, Me) ? Wt(this, Vs, Yo).call(this) : M(this, J).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = M(this, Us)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of M(this, Pt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), M(this, Dn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), M(this, In)) : t.removeEventListener(s, M(this, ee));
    M(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), M(this, be).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Wn, {}), M(this, Pt).clear();
  }
  on(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = M(this, Pt).get(t);
    i ? i.push(n) : (M(this, Pt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), M(this, Dn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), M(this, In)) : (o = this.ref.current) == null || o.addEventListener(t, M(this, ee)));
  }
  off(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = M(this, Pt).get(t);
    if (!i)
      return;
    const o = i.indexOf(n);
    o >= 0 && i.splice(o, 1), i.length || (M(this, Pt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), M(this, Dn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), M(this, In)) : (r = this.ref.current) == null || r.removeEventListener(t, M(this, ee)));
  }
  emitCustomEvent(t, n) {
    M(this, ee).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: u, scrollTop: f } = t;
    if (c === "up" || c === "down")
      f = i + (c === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      f = 0;
    else if (c === "bottom")
      f = o - r;
    else if (c === "begin")
      u = 0;
    else if (c === "end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: y } = t;
      typeof p == "number" && (u = s + p), typeof y == "number" && (u = i + y);
    }
    const d = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (d.scrollLeft = u)), typeof f == "number" && (f = Math.max(0, Math.min(f, o - r)), f !== i && (d.scrollTop = f)), Object.keys(d).length ? (this.setState(d, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, d), n == null || n.call(this, !0);
    }), !0) : (n == null || n.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: n } = this.layout;
    return typeof t == "number" ? n.list[t] : n.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: n, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? n[t] : s[t] || i.find((o) => o.id === t);
  }
  getCellValue(t, n) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let o = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: r } = this.options;
    return r && (o = r.call(this, s, i, o)), o;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!M(this, zt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, It, void 0);
    else if (s === "options") {
      if (Y(this, zt, void 0), !M(this, It))
        return;
      Y(this, It, void 0);
    }
    this.setState(i ?? ((o) => ({ renderCount: o.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const s = n.closest(".dtable-cell");
    if (!s)
      return;
    const i = s.closest(".dtable-row");
    if (!i)
      return;
    const o = s == null ? void 0 : s.getAttribute("data-col"), r = i == null ? void 0 : i.getAttribute("data-id");
    if (!(typeof o != "string" || typeof r != "string"))
      return {
        cellElement: s,
        rowElement: i,
        colName: o,
        rowID: r,
        target: n
      };
  }
  i18n(t, n, s) {
    return Yt(M(this, gi), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Wt(this, Jo, vh).call(this), { className: n, rowHover: s, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": o,
      "dtable-bordered": r,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], u = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), u.push(
      Wt(this, Vo, fh).call(this, t),
      Wt(this, qo, ph).call(this, t),
      Wt(this, Go, gh).call(this, t),
      Wt(this, jo, mh).call(this, t)
    ), M(this, J).forEach((f) => {
      var p;
      const d = (p = f.onRender) == null ? void 0 : p.call(this, t);
      d && (d.style && Object.assign(h, d.style), d.className && c.push(d.className), d.children && u.push(d.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: M(this, Pn),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
Ve = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
be = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Us = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
Vo = /* @__PURE__ */ new WeakSet();
fh = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      pf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: M(this, qi),
        onRenderRow: M(this, ra)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    gr,
    {
      className: "dtable-header",
      style: { height: s },
      renders: o,
      generateArgs: [e],
      generatorThis: this
    },
    "header"
  );
};
qo = /* @__PURE__ */ new WeakSet();
ph = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    gf,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: M(this, qi),
      onRenderRow: M(this, oa)
    },
    "rows"
  );
};
Go = /* @__PURE__ */ new WeakSet();
gh = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    gr,
    {
      className: "dtable-footer",
      style: { height: e.footerHeight, top: e.rowsHeight + e.headerHeight },
      renders: n,
      generateArgs: [e],
      generatorThis: this,
      generators: e.footerGenerators
    },
    "footer"
  );
};
jo = /* @__PURE__ */ new WeakSet();
mh = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: f } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ g(
      ja,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: o,
        clientSize: i,
        onScroll: M(this, mi),
        left: s,
        bottom: (f === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      ja,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: M(this, mi),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Vs = /* @__PURE__ */ new WeakSet();
Yo = function() {
  var e;
  Y(this, Me, !1), (e = this.options.afterRender) == null || e.call(this), M(this, J).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
oa = /* @__PURE__ */ new WeakMap();
ra = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Ko = /* @__PURE__ */ new WeakMap();
Xo = /* @__PURE__ */ new WeakMap();
aa = /* @__PURE__ */ new WeakSet();
yh = function() {
  if (M(this, zt))
    return !1;
  const t = { ...dh(), ...M(this, be).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, M(this, be).reduce((n, s) => {
    const { when: i, options: o } = s;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), n.push(s)), n;
  }, [])), Y(this, zt, t), Y(this, gi, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
la = /* @__PURE__ */ new WeakSet();
wh = function() {
  var A, H;
  const { plugins: e } = this;
  let t = M(this, zt);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var I;
    const R = (I = b.beforeLayout) == null ? void 0 : I.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, Me, !0);
      return;
    }
  }
  const o = vf(this, t, e, i), { data: r, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, I) => {
    var O, W;
    const P = { data: I ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (I || (P.lazy = !0), h.push(P), ((O = t.onAddRow) == null ? void 0 : O.call(this, P, R)) !== !1) {
      for (const U of e)
        if (((W = U.onAddRow) == null ? void 0 : W.call(this, P, R)) === !1)
          return;
    }
  };
  if (typeof r == "number")
    for (let b = 0; b < r; b++)
      c(`${b}`, b);
  else
    Array.isArray(r) && r.forEach((b, R) => {
      typeof b == "object" ? c(`${b[a] ?? ""}`, R, b) : c(`${b ?? ""}`, R);
    });
  let u = h;
  const f = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, u);
    b && (u = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    f[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: d, footer: p } = t, y = d ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const $ = u.length * l, S = y + v + $;
  if (typeof w == "function" && (w = w.call(this, S)), w === "auto")
    _ = S;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, S));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, Me, !0);
      return;
    }
  } else
    _ = w;
  const k = _ - y - v, E = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: u,
    rowsMap: f,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: $,
    header: d,
    footer: p,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: v,
    cols: o
  }, N = (H = t.onLayout) == null ? void 0 : H.call(this, E);
  N && Object.assign(E, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, E);
      R && Object.assign(E, R);
    }
  }), Y(this, It, E);
};
Jo = /* @__PURE__ */ new WeakSet();
vh = function() {
  (Wt(this, aa, yh).call(this) || !M(this, It)) && Wt(this, la, wh).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((p) => {
    p.left = s, s += p.realWidth, p.visible = p.left + p.realWidth >= n && p.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = e, l = Math.min(Math.max(0, i - o), this.state.scrollTop), h = Math.floor(l / a), c = l + o, u = Math.min(r.length, Math.ceil(c / a)), f = [], { rowDataGetter: d } = this.options;
  for (let p = h; p < u; p++) {
    const y = r[p];
    y.lazy && d && (y.data = d([y.id])[0], y.lazy = !1), f.push(y);
  }
  return e.visibleRows = f, e.scrollTop = l, e.scrollLeft = n, e;
};
ca.addPlugin = ch;
ca.removePlugin = hh;
function Ka(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const _f = {
  name: "col-hover",
  defaultOptions: {
    colHover: !1
  },
  when: (e) => !!e.colHover,
  events: {
    mouseover(e) {
      var i;
      const { colHover: t } = this.options;
      if (!t)
        return;
      const n = (i = e.target) == null ? void 0 : i.closest(".dtable-cell");
      if (!n || t === "header" && !n.closest(".dtable-header"))
        return;
      const s = (n == null ? void 0 : n.getAttribute("data-col")) ?? !1;
      Ka(this, s);
    },
    mouseleave() {
      Ka(this, !1);
    }
  }
}, bf = pe(_f, { buildIn: !0 });
function xf(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, c) => {
    const u = o ? o.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !_h.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((h) => {
    r(h, t ?? !s[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, e, i, s);
    h && Object.keys(h).forEach((c) => {
      h[c] ? s[c] = !0 : delete s[c];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var c;
      (c = this.options.onCheckChange) == null || c.call(this, i);
    });
  }
  return i;
}
function $f(e) {
  return this.state.checkedRows[e] ?? !1;
}
function _h() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (n.call(this, r.id) ? 1 : 0), 0)) : t === e;
}
function kf() {
  return Object.keys(this.state.checkedRows);
}
function Cf(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Xa(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const Sf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Xa
  },
  when: (e) => e.checkable !== void 0,
  options(e) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? e.checkable = t : e.checkable === "auto" && (e.checkable = !!e.cols.some((n) => n.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: xf,
    isRowChecked: $f,
    isAllRowChecked: _h,
    getChecks: kf,
    toggleCheckable: Cf
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
      const e = this.isAllRowChecked();
      return [
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Xa(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ g("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var l;
    const { id: s } = t, { canRowCheckable: i } = this.options, o = i ? i.call(this, s) : !0;
    if (!o)
      return e;
    const { checkbox: r } = n.setting;
    if (typeof r == "function" ? r.call(this, s) : r) {
      const h = this.isRowChecked(s), c = (l = this.options.checkboxRender) == null ? void 0 : l.call(this, h, s, o === "disabled");
      e.unshift(c), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var r;
    const { id: s } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s);
      e.unshift(l), e.push({ className: "has-checkbox" });
    }
    return e;
  },
  onRenderRow({ props: e, row: t }) {
    if (this.isRowChecked(t.id))
      return { className: T(e.className, "is-checked") };
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest('input[type="checkbox"],.dtable-checkbox');
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onRowClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Mf = pe(Sf);
var bh = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(bh || {});
function yi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = yi.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? yi.call(this, t.parent).level + 1 : 0, t;
}
function Ef(e) {
  return e !== void 0 ? yi.call(this, e) : this.data.nestedMap;
}
function Tf(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !xh.call(this)), t) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (n[o] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[i[0]]), i.forEach((o) => {
      const r = s.get(o);
      t && (r != null && r.children) ? n[o] = !0 : delete n[o];
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
function xh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function $h(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const r = e.get(o);
    r && (r.level === s && (r.order = t++), (i = r.children) != null && i.length && (t = $h(e, t, r.children, s + 1)));
  }
  return t;
}
function kh(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = n, kh(e, o, n, s);
  }), i;
}
function Ch(e, t, n, s, i) {
  var a;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), o.parent && Ch(e, o.parent, n, s, i);
}
const Rf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(e, t) {
      const { nestedMap: n } = this.data, s = n.get(e.id), i = n.get(t.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(e, t, n) {
      if (!this.options.checkable || !(e != null && e.length))
        return;
      const s = {};
      return Object.entries(t).forEach(([i, o]) => {
        const r = kh(this, i, o, s);
        r != null && r.parent && Ch(this, r.parent, o, s, n);
      }), s;
    }
  },
  options(e) {
    return e.nested === "auto" && (e.nested = !!e.cols.some((t) => t.nestedToggle)), e;
  },
  when: (e) => !!e.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Ef,
    toggleRow: Tf,
    isAllCollapsed: xh,
    getNestedRowInfo: yi
  },
  beforeLayout() {
    var e;
    (e = this.data.nestedMap) == null || e.clear();
  },
  onAddRow(e) {
    var i, o;
    const { nestedMap: t } = this.data, n = String((i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (o = e.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(e.id, s), n) {
      let r = t.get(n);
      r || (r = {
        state: "",
        level: 0
      }, t.set(n, r)), r.children || (r.children = []), r.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), $h(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? t.index - n.index : o;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: o } = t.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, s, t, i)) ?? /* @__PURE__ */ g("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), r.level) {
      let { nestedIndent: l = o } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ g("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: T(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = T(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(e, { rowID: t }) {
    const n = e.target;
    if (!(!n || !this.getNestedRowInfo(t).children || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, Nf = pe(Rf);
function Sh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...o } = e, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ g("a", { href: ot(i, t.row.data), ...s, ...o, ...a, children: n });
}
function ha(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : ot(e, n);
}
function Mh(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), To(n, e, s ?? n));
}
function Eh(e, t) {
  const { link: n } = t.col.setting, s = Sh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Th(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ha(n, t, e[0])), e;
}
function Rh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function Nh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = Mh(s, t, e[0], i), e;
}
function Zo(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : ha(s, t, i);
  return e[0] = {
    html: o
  }, e;
}
const Af = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Zo(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = t.setting, r = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ g("svg", { width: n, height: n, children: [
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ g("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ g("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
        ] }), e;
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
  onRenderCell(e, t) {
    const { formatDate: n, html: s, hint: i } = t.col.setting;
    if (n && (e = Nh(e, t, n)), e = Rh(e, t), e = Th(e, t), s ? e = Zo(e, t) : e = Eh(e, t), i) {
      let o = e[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = ot(i, t.row.data)), e.push({ attrs: { title: o } });
    }
    return e;
  }
}, Lf = pe(Af, { buildIn: !0 });
function ao(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], u = {
    size: "xs",
    className: T(o, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ g(dc, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: f } = n.setting, d = typeof f == "function" ? f(n, t) : f;
    e[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...d, children: [
      e[0],
      /* @__PURE__ */ g("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ g("span", { children: c })
    ] }));
  return e;
}
const Pf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ao
    },
    avatarBtn: {
      onRenderCell: ao
    },
    avatarName: {
      onRenderCell: ao
    }
  }
}, Wf = pe(Pf, { buildIn: !0 }), Df = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = n.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, n, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        e[0] = /* @__PURE__ */ g("a", { href: ot(a, { ...n.setting, sortType: r }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, If = pe(Df, { buildIn: !0 }), lo = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Of = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    lo(t.left.list), lo(t.center.list), lo(t.right.list);
  }
}, Hf = pe(Of), Bf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: bh,
  avatar: Wf,
  checkable: Mf,
  colHover: bf,
  group: Hf,
  nested: Nf,
  renderDatetime: Mh,
  renderDatetimeCell: Nh,
  renderFormat: ha,
  renderFormatCell: Th,
  renderHtmlCell: Zo,
  renderLink: Sh,
  renderLinkCell: Eh,
  renderMapCell: Rh,
  rich: Lf,
  sortType: If
}, Symbol.toStringTag, { value: "Module" }));
class ps extends Q {
}
ps.NAME = "DTable";
ps.Component = ca;
ps.definePlugin = pe;
ps.removePlugin = hh;
ps.plugins = Bf;
var Ah = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ja = (e, t, n) => (Ah(e, t, "read from private field"), n ? n.call(e) : t.get(e)), zf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Za = (e, t, n, s) => (Ah(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), qe;
const Ff = "nav", Qo = '[data-toggle="tab"]', Uf = "active";
class Lh extends ut {
  constructor() {
    super(...arguments), zf(this, qe, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Qo);
    let i = t ? m(t).first() : s.filter(`.${Uf}`);
    if (!i.length && (i = n.find(Qo).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = m(o);
    r.length && (r.parent().children(".tab-pane").removeClass("active in"), r.addClass("active"), Ja(this, qe) && clearTimeout(Ja(this, qe)), Za(this, qe, setTimeout(() => {
      r.addClass("in"), Za(this, qe, 0);
    }, 10)));
  }
}
qe = /* @__PURE__ */ new WeakMap();
Lh.NAME = "Tabs";
m(document).on("click.tabs.zui", Qo, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Ff}`);
  n.length && Lh.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  Hl as ActionMenu,
  zl as ActionMenuNested,
  fc as Avatar,
  cc as BtnGroup,
  ut as Component,
  Q as ComponentFromReact,
  it as ContextMenu,
  gr as CustomRender,
  ps as DTable,
  rh as Dashboard,
  Vt as Dropdown,
  hc as EventBus,
  Pu as HElement,
  Pl as HtmlContent,
  Kn as Icon,
  Fl as Menu,
  Cr as Messager,
  gc as Modal,
  Qt as ModalBase,
  vc as ModalTrigger,
  bc as Nav,
  xc as Pager,
  kc as Pick,
  Lc as Picker,
  Pc as Popovers,
  ac as ProgressCircle,
  z as ReactComponent,
  lc as Switch,
  Dt as TIME_DAY,
  Lh as Tabs,
  Wc as Toolbar,
  Mt as Tooltip,
  Qc as Tree,
  pd as Upload,
  Ha as calculateTimestamp,
  m as cash,
  T as classes,
  qf as convertBytes,
  lt as createDate,
  Wl as createPortal,
  wt as createRef,
  $u as deepGet,
  xu as deepGetPath,
  ho as delay,
  Gf as dom,
  ku as formatBytes,
  To as formatDate,
  cp as formatDateSpan,
  ot as formatString,
  wl as getClassList,
  hp as getTimeBeforeDesc,
  q as h,
  jf as hh,
  Lu as htm,
  Yt as i18n,
  lp as isDBY,
  ds as isSameDay,
  Nd as isSameMonth,
  ip as isSameWeek,
  Eo as isSameYear,
  op as isToday,
  ap as isTomorrow,
  tt as isValidElement,
  rp as isYesterday,
  Pa as nativeEvents,
  Yn as render,
  Du as renderCustomResult,
  md as store,
  vl as storeData,
  Eu as takeData
};
//# sourceMappingURL=zui.js.map
