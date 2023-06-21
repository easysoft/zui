var Pi = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var E = (e, t, n) => (Pi(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Pi(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var nt = (e, t, n) => (Pi(e, t, "access private method"), n);
const Ut = document, Ws = window, Fa = Ut.documentElement, Te = Ut.createElement.bind(Ut), Ua = Te("div"), Di = Te("table"), bh = Te("tbody"), na = Te("tr"), { isArray: pi, prototype: Va } = Array, { concat: xh, filter: Fo, indexOf: qa, map: ja, push: $h, slice: Ga, some: Uo, splice: kh } = Va, Ch = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Sh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Mh = /<.+>/, Eh = /^\w+$/;
function Vo(e, t) {
  const n = Th(t);
  return !e || !n && !ke(t) && !j(t) ? [] : !n && Sh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Eh.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class mi {
  constructor(t, n) {
    if (!t)
      return;
    if (Ji(t))
      return t;
    let s = t;
    if (tt(t)) {
      const i = n || Ut;
      if (s = Ch.test(t) && ke(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Mh.test(t) ? Xa(t) : Ji(i) ? i.find(t) : tt(i) ? y(i).find(t) : Vo(t, i), !s)
        return;
    } else if (Re(t))
      return this.ready(t);
    (s.nodeType || s === Ws) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new mi(t, n);
  }
}
const x = mi.prototype, y = x.init;
y.fn = y.prototype = x;
x.length = 0;
x.splice = kh;
typeof Symbol == "function" && (x[Symbol.iterator] = Va[Symbol.iterator]);
function Ji(e) {
  return e instanceof mi;
}
function rn(e) {
  return !!e && e === e.window;
}
function ke(e) {
  return !!e && e.nodeType === 9;
}
function Th(e) {
  return !!e && e.nodeType === 11;
}
function j(e) {
  return !!e && e.nodeType === 1;
}
function Rh(e) {
  return !!e && e.nodeType === 3;
}
function Nh(e) {
  return typeof e == "boolean";
}
function Re(e) {
  return typeof e == "function";
}
function tt(e) {
  return typeof e == "string";
}
function rt(e) {
  return e === void 0;
}
function Bn(e) {
  return e === null;
}
function Ya(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function qo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
y.isWindow = rn;
y.isFunction = Re;
y.isArray = pi;
y.isNumeric = Ya;
y.isPlainObject = qo;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (qo(e)) {
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
y.each = K;
x.each = function(e) {
  return K(this, e);
};
x.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ps(...e) {
  const t = Nh(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ps(t, y, n);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      t && (pi(o[r]) || qo(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), Ps(t, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
y.extend = Ps;
x.extend = function(e) {
  return Ps(x, e);
};
const Ah = /\S+/g;
function gi(e) {
  return tt(e) ? e.match(Ah) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = gi(e), s = !rt(t);
  return this.each((i, o) => {
    j(o) && K(n, (r, a) => {
      s ? t ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
x.addClass = function(e) {
  return this.toggleClass(e, !0);
};
x.removeAttr = function(e) {
  const t = gi(e);
  return this.each((n, s) => {
    j(s) && K(t, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function Lh(e, t) {
  if (e) {
    if (tt(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !j(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Bn(n) ? void 0 : n;
      }
      return rt(t) ? this : Bn(t) ? this.removeAttr(e) : this.each((n, s) => {
        j(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = Lh;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Uo.call(this, (t) => j(t) && t.classList.contains(e));
};
x.get = function(e) {
  return rt(e) ? Ga.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
x.eq = function(e) {
  return y(this.get(e));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Wh(e) {
  return rt(e) ? this.get().map((t) => j(t) || Rh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    j(n) && (n.textContent = e);
  });
}
x.text = Wh;
function Vt(e, t, n) {
  if (!j(e))
    return;
  const s = Ws.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function bt(e, t) {
  return parseInt(Vt(e, t), 10) || 0;
}
function sa(e, t) {
  return bt(e, `border${t ? "Left" : "Top"}Width`) + bt(e, `padding${t ? "Left" : "Top"}`) + bt(e, `padding${t ? "Right" : "Bottom"}`) + bt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Ii = {};
function Ph(e) {
  if (Ii[e])
    return Ii[e];
  const t = Te(e);
  Ut.body.insertBefore(t, null);
  const n = Vt(t, "display");
  return Ut.body.removeChild(t), Ii[e] = n !== "none" ? n : "block";
}
function ia(e) {
  return Vt(e, "display") === "none";
}
function Ka(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function yi(e) {
  return tt(e) ? (t, n) => Ka(n, e) : Re(e) ? e : Ji(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = yi(e);
  return y(Fo.call(this, (n, s) => t.call(n, s, n)));
};
function ce(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return ce(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Dh = /^\s*<(\w+)[^>]*>/, Ih = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, oa = {
  "*": Ua,
  tr: bh,
  td: na,
  th: na,
  thead: Di,
  tbody: Di,
  tfoot: Di
};
function Xa(e) {
  if (!tt(e))
    return [];
  if (Ih.test(e))
    return [Te(RegExp.$1)];
  const t = Dh.test(e) && RegExp.$1, n = oa[t] || oa["*"];
  return n.innerHTML = e, y(n.childNodes).detach().get();
}
y.parseHTML = Xa;
x.has = function(e) {
  const t = tt(e) ? (n, s) => Vo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = yi(e);
  return this.filter((n, s) => (!tt(e) || j(s)) && !t.call(s, n, s));
};
function Kt(e, t, n, s) {
  const i = [], o = Re(t), r = s && yi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (o) {
      const h = t(e[a]);
      h.length && $h.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ja(e) {
  return e.multiple && e.options ? Kt(Fo.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Oh(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || ol.test(n.type)) {
      const i = pi(e) ? ja.call(e, String) : Bn(e) ? [] : [String(e)];
      s ? K(n.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = rt(e) || Bn(e) ? "" : e;
  }) : this[0] && Ja(this[0]);
}
x.val = Oh;
x.is = function(e) {
  const t = yi(e);
  return Uo.call(this, (n, s) => t.call(n, s, n));
};
y.guid = 1;
function St(e) {
  return e.length > 1 ? Fo.call(e, (t, n, s) => qa.call(s, t) === n) : e;
}
y.unique = St;
x.add = function(e, t) {
  return y(St(this.get().concat(y(e, t).get())));
};
x.children = function(e) {
  return ce(y(St(Kt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return ce(y(St(Kt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? y(e)[0] : this[0], n = e ? this : y(t).parent().children();
  return qa.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return ce(y(St(Kt(this, (t) => y(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return y(St(Kt(this, (t) => Vo(e, t))));
};
const Hh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Bh = /^$|^module$|\/(java|ecma)script/i, zh = ["type", "src", "nonce", "noModule"];
function Fh(e, t) {
  const n = y(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Bh.test(i.type) && Fa.contains(i)) {
      const o = Te("script");
      o.text = i.textContent.replace(Hh, ""), K(zh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function Uh(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Fh(t, e.ownerDocument);
}
function he(e, t, n, s, i, o, r, a) {
  return K(e, (l, h) => {
    K(y(h), (c, u) => {
      K(y(t), (d, f) => {
        const p = n ? u : f, m = n ? f : u, v = n ? c : d;
        Uh(p, v ? m.cloneNode(!0) : m, s, i, !v);
      }, a);
    }, r);
  }, o), t;
}
x.after = function() {
  return he(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return he(arguments, this, !1, !1, !0);
};
function Vh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    j(s) && (t ? y(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = Vh;
x.appendTo = function(e) {
  return he(arguments, this, !0, !1, !0);
};
x.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = y(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
x.before = function() {
  return he(arguments, this, !1, !0);
};
x.wrapAll = function(e) {
  let t = y(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
x.wrap = function(e) {
  return this.each((t, n) => {
    const s = y(e)[0];
    y(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
x.insertAfter = function(e) {
  return he(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(e) {
  return he(arguments, this, !0, !0);
};
x.prepend = function() {
  return he(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(e) {
  return he(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return y(St(Kt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return ce(y(St(Kt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return ce(y(St(Kt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return ce(y(St(Kt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return y(xh.apply([], ja.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Vt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Fa;
  });
};
x.slice = function(e, t) {
  return y(Ga.call(this, e, t));
};
const qh = /-([a-z])/g;
function jo(e) {
  return e.replace(qh, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, y);
  return Ut.readyState !== "loading" ? t() : Ut.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = y(t);
    n.replaceWith(n.children());
  }), this;
};
x.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + Ws.pageYOffset,
    left: t.left + Ws.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Vt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Vt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && j(i)) {
      const o = y(i).offset();
      n.top -= o.top + bt(i, "borderTopWidth"), n.left -= o.left + bt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - bt(e, "marginTop"),
    left: n.left - bt(e, "marginLeft")
  };
};
const Za = {
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
    if (tt(e))
      return e = Za[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Za[e] || e];
  });
};
const jh = /^--/;
function Go(e) {
  return jh.test(e);
}
const Oi = {}, { style: Gh } = Ua, Yh = ["webkit", "moz", "ms"];
function Kh(e, t = Go(e)) {
  if (t)
    return e;
  if (!Oi[e]) {
    const n = jo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Yh.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Gh)
        return Oi[e] = r, !1;
    });
  }
  return Oi[e];
}
const Xh = {
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
function Qa(e, t, n = Go(e)) {
  return !n && !Xh[e] && Ya(t) ? `${t}px` : t;
}
function Jh(e, t) {
  if (tt(e)) {
    const n = Go(e);
    return e = Kh(e, n), arguments.length < 2 ? this[0] && Vt(this[0], e, n) : e ? (t = Qa(e, t, n), this.each((s, i) => {
      j(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Jh;
function tl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Zh = /^\s+|\s+$/;
function ra(e, t) {
  const n = e.dataset[t] || e.dataset[jo(t)];
  return Zh.test(n) ? n : tl(JSON.parse, n);
}
function Qh(e, t, n) {
  n = tl(JSON.stringify, n), e.dataset[jo(t)] = n;
}
function tu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = ra(this[0], s);
    return n;
  }
  if (tt(e))
    return arguments.length < 2 ? this[0] && ra(this[0], e) : rt(t) ? this : this.each((n, s) => {
      Qh(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = tu;
function el(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(o) {
      if (this[0])
        return rn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ke(this[0]) ? el(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (o && t ? bt(this[0], `margin${n ? "Top" : "Left"}`) + bt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return rt(s) ? void 0 : this;
    if (!arguments.length)
      return rn(this[0]) ? this[0].document.documentElement[`client${t}`] : ke(this[0]) ? el(this[0], t) : this[0].getBoundingClientRect()[n] - sa(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!j(r))
        return;
      const a = Vt(r, "boxSizing");
      r.style[n] = Qa(n, i + (a === "border-box" ? sa(r, !e) : 0));
    });
  };
});
const aa = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!j(n))
      return;
    const s = ia(n);
    (rt(e) ? s : e) ? (n.style.display = n[aa] || "", ia(n) && (n.style.display = Ph(n.tagName))) : s || (n[aa] = Vt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const la = "___ce", Yo = ".", Ko = { focus: "focusin", blur: "focusout" }, nl = { mouseenter: "mouseover", mouseleave: "mouseout" }, eu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Xo(e) {
  return nl[e] || Ko[e] || e;
}
function Jo(e) {
  const t = e.split(Yo);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (tt(e)) {
    const [s, i] = Jo(e), o = Xo(s);
    if (!o)
      return this;
    const r = eu.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Ut.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Yo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Ko;
  return this.each((s, i) => {
    n && Re(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function sl(e) {
  return e[la] = e[la] || {};
}
function nu(e, t, n, s, i) {
  const o = sl(e);
  o[t] = o[t] || [], o[t].push([n, s, i]), e.addEventListener(t, i);
}
function il(e, t) {
  return !t || !Uo.call(t, (n) => e.indexOf(n) < 0);
}
function Ds(e, t, n, s, i) {
  const o = sl(e);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !il(r, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in o)
      Ds(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (rt(e))
    this.each((s, i) => {
      !j(i) && !ke(i) && !rn(i) || Ds(i);
    });
  else if (tt(e))
    Re(t) && (n = t, t = ""), K(gi(e), (s, i) => {
      const [o, r] = Jo(i), a = Xo(o);
      this.each((l, h) => {
        !j(h) && !ke(h) && !rn(h) || Ds(h, a, r, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
x.remove = function(e) {
  return ce(this, e).detach().off(), this;
};
x.replaceWith = function(e) {
  return this.before(e).remove();
};
x.replaceAll = function(e) {
  return y(e).replaceWith(this), this;
};
function su(e, t, n, s, i) {
  if (!tt(e)) {
    for (const o in e)
      this.on(o, t, n, e[o], i);
    return this;
  }
  return tt(t) || (rt(t) || Bn(t) ? t = "" : rt(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Re(s) || (s = n, n = void 0), s ? (K(gi(e), (o, r) => {
    const [a, l] = Jo(r), h = Xo(a), c = a in nl, u = a in Ko;
    h && this.each((d, f) => {
      if (!j(f) && !ke(f) && !rn(f))
        return;
      const p = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !il(l, m.namespace.split(Yo)) || !t && (u && (m.target !== f || m.___ot === h) || c && m.relatedTarget && f.contains(m.relatedTarget)))
          return;
        let v = f;
        if (t) {
          let _ = m.target;
          for (; !Ka(_, t); )
            if (_ === f || (_ = _.parentNode, !_))
              return;
          v = _;
        }
        Object.defineProperty(m, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(m, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, m, m.___td);
        i && Ds(f, h, l, t, p), w === !1 && (m.preventDefault(), m.stopPropagation());
      };
      p.guid = s.guid = s.guid || y.guid++, nu(f, h, l, t, p);
    });
  }), this) : this;
}
x.on = su;
function iu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = iu;
const ou = /\r?\n/g;
function ru(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(ou, `\r
`))}`;
}
const au = /file|reset|submit|button|image/i, ol = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || au.test(i.type) || ol.test(i.type) && !i.checked)
        return;
      const o = Ja(i);
      if (!rt(o)) {
        const r = pi(o) ? o : [o];
        K(r, (a, l) => {
          e += ru(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = y;
function lu(e, t) {
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
function cu(e, t, n) {
  try {
    const s = lu(e, t), i = s[s.length - 1];
    return i === void 0 ? n : i;
  } catch {
    return n;
  }
}
function it(e, ...t) {
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
var Zo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Zo || {});
function hu(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Zo[n]).toFixed(t) + n);
}
const Nd = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Zo[s];
};
let Qo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Qt;
function uu() {
  return Qo;
}
function fu(e) {
  Qo = e.toLowerCase();
}
function rl(e, t) {
  Qt || (Qt = {}), typeof e == "string" && (e = { [e]: t ?? {} }), y.extend(!0, Qt, e);
}
function qt(e, t, n, s, i, o) {
  Array.isArray(e) ? Qt && e.unshift(Qt) : e = Qt ? [Qt, e] : [e], typeof n == "string" && (o = i, i = s, s = n, n = void 0);
  const r = i || Qo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const c = o && l === Qt ? `${o}.${t}` : t;
    if (a = cu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? it(a, ...Array.isArray(n) ? n : [n]) : a;
}
function du(e, t, n, s) {
  return qt(void 0, e, t, n, s);
}
qt.addLang = rl;
qt.getLang = du;
qt.getCode = uu;
qt.setCode = fu;
rl({
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
function al(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = n.get(i);
    typeof r == "number" ? t[r][1] = !!o : (n.set(i, t.length), t.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? al(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), t.sort((i, o) => (n.get(i[0]) || 0) - (n.get(o[0]) || 0));
}
const T = (...e) => al(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
y.classes = T;
y.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = y(s);
    e === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(e, ...t));
  });
};
const pn = /* @__PURE__ */ new WeakMap();
function ll(e, t, n) {
  const s = pn.has(e), i = s ? pn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, y(e).dataset(), i), pn.set(e, i)) : pn.delete(e);
}
function pu(e, t) {
  let n = pn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, y(e).dataset(), n)), t === void 0 ? n : n[t];
}
y.fn.dataset = y.fn.data;
y.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? pu(this[0], t) : this.each((s, i) => ll(i, t, n));
};
y.fn.removeData = function(e = null) {
  return this.each((t, n) => ll(n, e));
};
y.fn._attr = y.fn.attr;
y.fn.extend({
  attr(...e) {
    const [t, n] = e;
    return !e.length || e.length === 1 && typeof t == "string" ? this._attr.apply(this, e) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : n === null ? this.removeAttr(t) : this._attr(t, n);
  }
});
y.Event = (e, t) => {
  const [n, ...s] = e.split("."), i = new Event(n, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = n, i.___td = t, i;
};
const mu = (e) => new Promise((t) => setTimeout(t, e));
function cl(e, t) {
  const n = y(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: o, height: r } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, d = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= d && i + r <= u;
  const f = i <= u && i + r >= 0, p = s <= d && s + o >= 0;
  return f && p;
}
y.fn.isVisible = function(e) {
  return this.each((t, n) => {
    cl(n, e);
  });
};
function tr(e, t, n = !1) {
  const s = y(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${y.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    tr(s, o.innerHTML), o.remove();
  });
}
y.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
y.fn.runJS = function(e) {
  return this.each((t, n) => {
    tr(n, e);
  });
};
const Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: cl,
  runJS: tr
}, Symbol.toStringTag, { value: "Module" }));
var wi, z, hl, Q, ge, ca, ul, Zi, Is = {}, fl = [], gu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, er = Array.isArray;
function ie(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function dl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? wi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return gs(e, r, s, i, null);
}
function gs(e, t, n, s, i) {
  var o = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++hl };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Ct() {
  return { current: null };
}
function vi(e) {
  return e.children;
}
function V(e, t) {
  this.props = e, this.context = t;
}
function zn(e, t) {
  if (t == null)
    return e.__ ? zn(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? zn(e) : null;
}
function pl(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return pl(e);
  }
}
function ha(e) {
  (!e.__d && (e.__d = !0) && ge.push(e) && !Os.__r++ || ca !== z.debounceRendering) && ((ca = z.debounceRendering) || ul)(Os);
}
function Os() {
  var e, t, n, s, i, o, r, a;
  for (ge.sort(Zi); e = ge.shift(); )
    e.__d && (t = ge.length, s = void 0, i = void 0, r = (o = (n = e).__v).__e, (a = n.__P) && (s = [], (i = ie({}, o)).__v = o.__v + 1, nr(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? zn(o), o.__h), vl(s, o), o.__e != r && pl(o)), ge.length > t && ge.sort(Zi));
  Os.__r = 0;
}
function ml(e, t, n, s, i, o, r, a, l, h) {
  var c, u, d, f, p, m, v, w = s && s.__k || fl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((f = n.__k[c] = (f = t[c]) == null || typeof f == "boolean" || typeof f == "function" ? null : typeof f == "string" || typeof f == "number" || typeof f == "bigint" ? gs(null, f, null, null, f) : er(f) ? gs(vi, { children: f }, null, null, null) : f.__b > 0 ? gs(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) != null) {
      if (f.__ = n, f.__b = n.__b + 1, (d = w[c]) === null || d && f.key == d.key && f.type === d.type)
        w[c] = void 0;
      else
        for (u = 0; u < _; u++) {
          if ((d = w[u]) && f.key == d.key && f.type === d.type) {
            w[u] = void 0;
            break;
          }
          d = null;
        }
      nr(e, f, d = d || Is, i, o, r, a, l, h), p = f.__e, (u = f.ref) && d.ref != u && (v || (v = []), d.ref && v.push(d.ref, null, f), v.push(u, f.__c || p, f)), p != null ? (m == null && (m = p), typeof f.type == "function" && f.__k === d.__k ? f.__d = l = gl(f, l, e) : l = yl(e, f, d, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && d.__e == l && l.parentNode != e && (l = zn(d));
    }
  for (n.__e = m, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = wl(s).nextSibling), bl(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      _l(v[c], v[++c], v[++c]);
}
function gl(e, t, n) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, t = typeof s.type == "function" ? gl(s, t, n) : yl(n, s, s, i, s.__e, t));
  return t;
}
function yl(e, t, n, s, i, o) {
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
function wl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = wl(n)))
        return s;
  }
  return null;
}
function yu(e, t, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Hs(e, o, null, n[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Hs(e, o, t[o], n[o], s);
}
function ua(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || gu.test(t) ? n : n + "px";
}
function Hs(e, t, n, s, i) {
  var o;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || ua(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || ua(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? s || e.addEventListener(t, o ? da : fa, o) : e.removeEventListener(t, o ? da : fa, o);
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
function fa(e) {
  return this.l[e.type + !1](z.event ? z.event(e) : e);
}
function da(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function nr(e, t, n, s, i, o, r, a, l) {
  var h, c, u, d, f, p, m, v, w, _, $, C, k, M, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = vu), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ie({}, c.__s)), ie(c.__s, A.getDerivedStateFromProps(v, c.__s))), d = c.props, f = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== d && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(d, f, p);
          });
        }
        if (c.context = _, c.props = v, c.__P = e, C = z.__r, k = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), M = 0; M < c._sb.length; M++)
            c.__h.push(c._sb[M]);
          c._sb = [];
        } else
          do
            c.__d = !1, C && C(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++k < 25);
        c.state = c.__s, c.getChildContext != null && (s = ie(ie({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(d, f)), ml(e, er(N = h != null && h.type === vi && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, o, r, a, l), c.base = t.__e, t.__h = null, c.__h.length && r.push(c), m && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = wu(n.__e, t, n, s, i, o, r, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function vl(e, t) {
  z.__c && z.__c(t, e), e.some(function(n) {
    try {
      e = n.__h, n.__h = [], e.some(function(s) {
        s.call(n);
      });
    } catch (s) {
      z.__e(s, n.__v);
    }
  });
}
function wu(e, t, n, s, i, o, r, a) {
  var l, h, c, u = n.props, d = t.props, f = t.type, p = 0;
  if (f === "svg" && (i = !0), o != null) {
    for (; p < o.length; p++)
      if ((l = o[p]) && "setAttribute" in l == !!f && (f ? l.localName === f : l.nodeType === 3)) {
        e = l, o[p] = null;
        break;
      }
  }
  if (e == null) {
    if (f === null)
      return document.createTextNode(d);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, d.is && d), o = null, a = !1;
  }
  if (f === null)
    u === d || a && e.data === d || (e.data = d);
  else {
    if (o = o && wi.call(e.childNodes), h = (u = n.props || Is).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (yu(e, d, u, i, a), c)
      t.__k = [];
    else if (ml(e, er(p = t.props.children) ? p : [p], t, n, s, i && f !== "foreignObject", o, r, o ? o[0] : n.__k && zn(n, 0), a), o != null)
      for (p = o.length; p--; )
        o[p] != null && dl(o[p]);
    a || ("value" in d && (p = d.value) !== void 0 && (p !== e.value || f === "progress" && !p || f === "option" && p !== u.value) && Hs(e, "value", p, u.value, !1), "checked" in d && (p = d.checked) !== void 0 && p !== e.checked && Hs(e, "checked", p, u.checked, !1));
  }
  return e;
}
function _l(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function bl(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || _l(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        z.__e(o, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && bl(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || dl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function vu(e, t, n) {
  return this.constructor(e, n);
}
function Fn(e, t, n) {
  var s, i, o;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, o = [], nr(t, e = (!s && n || t).__k = q(vi, null, [e]), i || Is, Is, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? wi.call(t.childNodes) : null, o, !s && n ? n : i ? i.__e : t.firstChild, s), vl(o, e);
}
wi = fl.slice, z = { __e: function(e, t, n, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, hl = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ie({}, this.state), typeof e == "function" && (e = e(ie({}, n), this.props)), e && ie(n, e), e != null && this.__v && (t && this._sb.push(t), ha(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ha(this));
}, V.prototype.render = vi, ge = [], ul = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Zi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Os.__r = 0;
var xl = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, n[t[o++]]) : t[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[t[++o]] = a : r === 6 ? s[1][t[++o]] += a + "" : r ? (i = e.apply(a, xl(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : s.push(a);
  }
  return s;
}, pa = /* @__PURE__ */ new Map();
function _u(e) {
  var t = pa.get(this);
  return t || (t = /* @__PURE__ */ new Map(), pa.set(this, t)), (t = xl(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, r) : o === 3 && (d || r) ? (l.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? l.push(4, d, 0) : o === 2 && r && !d ? l.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (l.push(o, 0, r, i), o = 6), d && (l.push(o, d, 0, i), o = 6)), r = "";
    }, c = 0; c < n.length; c++) {
      c && (o === 1 && h(), h(c));
      for (var u = 0; u < n[c].length; u++)
        s = n[c][u], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || n[c][u + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const Ld = _u.bind(q);
function bu(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: o, ...r } = e;
  return q(t, { class: T(n), style: s, ...r, ...o }, i);
}
var xu = 0;
function g(e, t, n, s, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --xu, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return z.vnode && z.vnode(h), h;
}
var Gn;
class $l extends V {
  constructor() {
    super(...arguments);
    L(this, Gn, Ct());
  }
  componentDidMount() {
    this.props.executeScript && y(E(this, Gn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...o } = n;
    return /* @__PURE__ */ g(bu, { ref: E(this, Gn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Gn = new WeakMap();
function $u(e) {
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
  } = e, u = [n], d = { ...s }, f = [], p = [];
  return i.forEach((m) => {
    const v = [];
    if (typeof m == "string" && a && a[m] && (m = a[m]), typeof m == "function")
      if (l)
        v.push(...l.call(r, m, f, ...o));
      else {
        const w = m.call(r, f, ...o);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(m);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Q(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ g("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && u.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(c, w.attrs)) : f.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: d,
    ...c
  }, f];
}
function sr({
  tag: e = "div",
  ...t
}) {
  const [n, s] = $u(t);
  return q(e, n, ...s);
}
function Un(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Q(t))
    return t;
  const i = ["icon", n];
  return typeof t == "string" ? i.push(t.startsWith("icon-") ? t : `icon-${t}`) : typeof t == "object" && (i.push(t.className), Object.assign(s, t)), /* @__PURE__ */ g("i", { className: T(i), ...s });
}
function ku(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Cu(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    Fn(null, t._temp), t._temp = null, t._container = null;
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
  }), Fn(
    q(ku, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Su(e, t) {
  const n = q(Cu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var ir = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ae = (e, t, n) => (ir(e, t, "read from private field"), n ? n.call(e) : t.get(e)), hn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Le = (e, t, n, s) => (ir(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ls = (e, t, n) => (ir(e, t, "access private method"), n), fe, mn, ys, ws, De, gn;
const kl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    hn(this, De), hn(this, fe, void 0), hn(this, mn, void 0), hn(this, ys, void 0), hn(this, ws, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: o } = this.constructor, r = y(e);
    if (r.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = y.guid++;
    if (Le(this, ys, a), Le(this, mn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Le(this, fe, { ...i, ...r.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, r.data(n, this).attr(s, `${a}`), o) {
      const l = `${n}:ALL`;
      let h = r.data(l);
      h || (h = /* @__PURE__ */ new Map(), r.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Le(this, ws, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ae(this, ws);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ae(this, mn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ae(this, fe);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ae(this, ys);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return y(this.element);
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
    Le(this, fe, void 0), Le(this, mn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && y.extend(Ae(this, fe), e), Ae(this, fe);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = y.Event(ls(this, De, gn).call(this, e));
    return this.$element.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t) {
    this.$element.on(ls(this, De, gn).call(this, e), t);
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.$element.one(ls(this, De, gn).call(this, e), t);
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e, t) {
    this.$element.off(ls(this, De, gn).call(this, e), t);
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
    return qt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? qt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
    const n = y(e);
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
    return y(e || document).find(`[${n}]`).each((i, o) => {
      if (t) {
        const a = y(o).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const r = y(o).data(this.KEY);
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
    return e === void 0 ? this.getAll().sort((n, s) => n.gid - s.gid)[0] : this.get(y(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    y.fn.extend({
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
let ht = kl;
fe = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakSet();
gn = function(e) {
  return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
};
ht.DEFAULT = {};
ht.NAME = kl.name;
ht.MULTI_INSTANCE = !1;
class et extends ht {
  constructor() {
    super(...arguments), this.ref = Ct();
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
    Fn(
      q(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Mu({
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
function Cl({
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
  hint: d,
  checked: f,
  onClick: p,
  ...m
}) {
  const v = [
    typeof f == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${f ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(Un, { icon: l }),
    /* @__PURE__ */ g("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ g(Un, { icon: u })
  ];
  return q(t, {
    className: T(n, { disabled: r, active: a }),
    title: d,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...m,
    ...i
  }, ...v);
}
function Eu({
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
function Tu({
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
function Ru({ type: e, ...t }) {
  return /* @__PURE__ */ g(sr, { ...t });
}
function Sl({
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
const Qi = class extends V {
  constructor() {
    super(...arguments), this.ref = Ct();
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
        if (Q(p))
          return p;
        typeof p == "object" && Object.assign(s, p);
      }
    }
    const { type: o = "item", component: r, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: u, ...d } = s;
    if (o === "html")
      return /* @__PURE__ */ g(
        "li",
        {
          className: T("action-menu-item", `${this.name}-html`, h, d.className),
          ...l,
          style: c || d.style,
          dangerouslySetInnerHTML: { __html: d.html }
        },
        a
      );
    const f = !r || typeof r == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || Qi.ItemComponents[o] : r;
    return Object.assign(d, {
      type: o,
      component: typeof r == "string" ? r : void 0
    }), e.checkbox && o === "item" && d.checked === void 0 && (d.checked = !!d.active), this.renderTypedItem(f, {
      className: T(h),
      children: u,
      style: c,
      key: a,
      ...l
    }, {
      ...d,
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
      ...d
    } = e, f = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ g(f, { class: T(this.name, i), style: n, ...d, ref: this.ref, children: [
      o && o.map(this.renderItem.bind(this, e)),
      r
    ] });
  }
};
let Ne = Qi;
Ne.ItemComponents = {
  divider: Mu,
  item: Cl,
  heading: Eu,
  space: Tu,
  custom: Ru,
  basic: Sl
};
Ne.ROOT_TAG = "menu";
Ne.NAME = "action-menu";
class Ml extends et {
}
Ml.NAME = "ActionMenu";
Ml.Component = Ne;
function Nu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(Cl, { ...s });
}
var El = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (El(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Hi = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Au = (e, t, n, s) => (El(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), vs, Rt, yn;
let _i = class extends Ne {
  constructor(t) {
    super(t), Hi(this, vs, /* @__PURE__ */ new Set()), Hi(this, Rt, void 0), Hi(this, yn, (n, s, i) => {
      y(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), Au(this, Rt, t.nestedShow === void 0), ft(this, Rt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
      nestedShow: ft(this, Rt) ? this.state.nestedShow : i,
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
    ft(this, vs).add(o);
    const r = this.isNestedMenuShow(o);
    if (r && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ft(this, yn).bind(this, o, !0),
        onMouseLeave: ft(this, yn).bind(this, o, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ft(this, yn).call(this, o, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(r, i);
    return a && (i.children = [i.children, a]), i.show = r, i.rootClass = [i.rootClass, "has-nested-menu", r ? "show" : ""], i;
  }
  isNestedMenuShow(t) {
    const n = ft(this, Rt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggleNestedMenu(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggleNestedMenu(t, n);
    if (!ft(this, Rt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ft(this, vs).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), n === void 0)
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
    ft(this, Rt) && this.setState({ nestedShow: !0 });
  }
  hideAllNestedMenu() {
    ft(this, Rt) && this.setState({ nestedShow: !1 });
  }
};
vs = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
yn = /* @__PURE__ */ new WeakMap();
_i.ItemComponents = {
  item: Nu
};
class Tl extends et {
}
Tl.NAME = "ActionMenuNested";
Tl.Component = _i;
let bi = class extends _i {
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
bi.NAME = "menu";
class Rl extends et {
}
Rl.NAME = "Menu";
Rl.Component = bi;
class jt extends V {
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
      loadingIcon: d,
      loadingText: f,
      icon: p,
      text: m,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: $,
      ...C
    } = this.props, k = t || (a ? "a" : "button"), M = m == null || typeof m == "string" && !m.length || u && !f, N = w && M && !p && !v && !r && !u;
    return q(
      k,
      {
        className: T("btn", n, o, {
          "btn-caret": N,
          disabled: h || u,
          active: c,
          loading: u,
          square: _ === void 0 ? !N && !r && M : _
        }, i ? `size-${i}` : ""),
        title: $,
        [k === "a" ? "href" : "data-url"]: a,
        [k === "a" ? "target" : "data-target"]: l,
        type: k === "button" ? s : void 0,
        ...C
      },
      /* @__PURE__ */ g(Un, { icon: u ? `icon ${d || "icon-spinner-snake"} spin` : p }),
      M ? null : /* @__PURE__ */ g("span", { className: "text", children: u ? f : m }),
      u ? null : r,
      u ? null : typeof v == "string" ? /* @__PURE__ */ g("i", { class: `icon ${v}` }) : v,
      u ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Lu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(jt, { type: n, ...s });
}
function ts(e) {
  return e.split("-")[1];
}
function or(e) {
  return e === "y" ? "height" : "width";
}
function _e(e) {
  return e.split("-")[0];
}
function es(e) {
  return ["top", "bottom"].includes(_e(e)) ? "x" : "y";
}
function ma(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = es(t), l = or(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (_e(t)) {
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
  switch (ts(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Wu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = ma(h, s, l), d = s, f = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: v, fn: w } = a[m], { x: _, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, f = { ...f, [v]: { ...f[v], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = ma(h, d, l)), m = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function ns(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nl(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Bs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Al(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = ns(t, e), p = Nl(f), m = a[d ? u === "floating" ? "reference" : "floating" : u], v = Bs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(m))) == null || n ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, C = Bs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / $.y, bottom: (C.bottom - v.bottom + p.bottom) / $.y, left: (v.left - C.left + p.left) / $.x, right: (C.right - v.right + p.right) / $.x };
}
const to = Math.min, Pu = Math.max;
function eo(e, t, n) {
  return Pu(e, to(t, n));
}
const no = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: o, platform: r, elements: a } = t, { element: l, padding: h = 0 } = ns(e, t) || {};
  if (l == null)
    return {};
  const c = Nl(h), u = { x: n, y: s }, d = es(i), f = or(d), p = await r.getDimensions(l), m = d === "y", v = m ? "top" : "left", w = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", $ = o.reference[f] + o.reference[d] - u[d] - o.floating[f], C = u[d] - o.reference[d], k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = k ? k[_] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(k)) || (M = a.floating[_] || o.floating[f]);
  const N = $ / 2 - C / 2, A = M / 2 - p[f] / 2 - 1, O = to(c[v], A), b = to(c[w], A), R = O, D = M - p[f] - b, W = M / 2 - p[f] / 2 + N, I = eo(R, W, D), P = ts(i) != null && W != I && o.reference[f] / 2 - (W < R ? O : b) - p[f] / 2 < 0 ? W < R ? R - W : D - W : 0;
  return { [d]: u[d] - P, data: { [d]: I, centerOffset: W - I + P } };
} }), Du = ["top", "right", "bottom", "left"];
Du.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Iu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function zs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Iu[t]);
}
function Ou(e, t, n) {
  n === void 0 && (n = !1);
  const s = ts(e), i = es(e), o = or(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = zs(r)), { main: r, cross: zs(r) };
}
const Hu = { start: "end", end: "start" };
function Bi(e) {
  return e.replace(/start|end/g, (t) => Hu[t]);
}
const xi = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...m } = ns(e, t), v = _e(s), w = _e(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [zs(r)] : function(R) {
      const D = zs(R);
      return [Bi(R), D, Bi(D)];
    }(r));
    u || f === "none" || $.push(...function(R, D, W, I) {
      const P = ts(R);
      let F = function(ut, Mt, rs) {
        const cn = ["left", "right"], as = ["right", "left"], Wi = ["top", "bottom"], _h = ["bottom", "top"];
        switch (ut) {
          case "top":
          case "bottom":
            return rs ? Mt ? as : cn : Mt ? cn : as;
          case "left":
          case "right":
            return Mt ? Wi : _h;
          default:
            return [];
        }
      }(_e(R), W === "start", I);
      return P && (F = F.map((ut) => ut + "-" + P), D && (F = F.concat(F.map(Bi)))), F;
    }(r, p, f, _));
    const C = [r, ...$], k = await Al(t, m), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(k[v]), c) {
      const { main: R, cross: D } = Ou(s, o, _);
      M.push(k[R], k[D]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, D = C[R];
      if (D)
        return { data: { index: R, overflows: N }, reset: { placement: D } };
      let W = (O = N.filter((I) => I.overflows[0] <= 0).sort((I, P) => I.overflows[1] - P.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!W)
        switch (d) {
          case "bestFit": {
            var b;
            const I = (b = N.map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, ut) => F + ut, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : b[0];
            I && (W = I);
            break;
          }
          case "initialPlacement":
            W = r;
        }
      if (s !== W)
        return { reset: { placement: W } };
    }
    return {};
  } };
}, rr = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = _e(a), d = ts(a), f = es(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, m = c && f ? -1 : 1, v = ns(r, o);
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof $ == "number" && (_ = d === "end" ? -1 * $ : $), f ? { x: _ * m, y: w * p } : { x: w * p, y: _ * m };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Bu(e) {
  return e === "x" ? "y" : "x";
}
const so = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ns(e, t), h = { x: n, y: s }, c = await Al(t, l), u = es(_e(i)), d = Bu(u);
    let f = h[u], p = h[d];
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      f = eo(f + c[u === "y" ? "top" : "left"], f, f - c[v]);
    }
    if (r) {
      const v = d === "y" ? "bottom" : "right";
      p = eo(p + c[d === "y" ? "top" : "left"], p, p - c[v]);
    }
    const m = a.fn({ ...t, [u]: f, [d]: p });
    return { ...m, data: { x: m.x - n, y: m.y - s } };
  } };
};
function ct(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  return ct(e).getComputedStyle(e);
}
function Ll(e) {
  return e instanceof ct(e).Node;
}
function ae(e) {
  return Ll(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  return e instanceof ct(e).HTMLElement;
}
function Bt(e) {
  return e instanceof ct(e).Element;
}
function ga(e) {
  return typeof ShadowRoot < "u" && (e instanceof ct(e).ShadowRoot || e instanceof ShadowRoot);
}
function Vn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function zu(e) {
  return ["table", "td", "th"].includes(ae(e));
}
function io(e) {
  const t = ar(), n = mt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function ar() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function $i(e) {
  return ["html", "body", "#document"].includes(ae(e));
}
const ya = Math.min, An = Math.max, Fs = Math.round, cs = Math.floor, Ce = (e) => ({ x: e, y: e });
function Wl(e) {
  const t = mt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = yt(e), o = i ? e.offsetWidth : n, r = i ? e.offsetHeight : s, a = Fs(n) !== o || Fs(s) !== r;
  return a && (n = o, s = r), { width: n, height: s, $: a };
}
function lr(e) {
  return Bt(e) ? e : e.contextElement;
}
function Ve(e) {
  const t = lr(e);
  if (!yt(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: o } = Wl(t);
  let r = (o ? Fs(n.width) : n.width) / s, a = (o ? Fs(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const wa = Ce(0);
function Pl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !ar())
    return wa;
  const o = e ? ct(e) : window;
  return !n || t && n !== o ? wa : { x: ((s = o.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = o.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Se(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = lr(e);
  let r = Ce(1);
  t && (s ? Bt(s) && (r = Ve(s)) : r = Ve(e));
  const a = Pl(o, n, s);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, c = i.width / r.x, u = i.height / r.y;
  if (o) {
    const d = ct(o), f = s && Bt(s) ? ct(s) : s;
    let p = d.frameElement;
    for (; p && s && f !== d; ) {
      const m = Ve(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * m.x, $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * m.y;
      l *= m.x, h *= m.y, c *= m.x, u *= m.y, l += _, h += $, p = ct(p).frameElement;
    }
  }
  return Bs({ width: c, height: u, x: l, y: h });
}
function zt(e) {
  return ((Ll(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ki(e) {
  return Bt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Dl(e) {
  return Se(zt(e)).left + ki(e).scrollLeft;
}
function an(e) {
  if (ae(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ga(e) && e.host || zt(e);
  return ga(t) ? t.host : t;
}
function Il(e) {
  const t = an(e);
  return $i(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yt(t) && Vn(t) ? t : Il(t);
}
function Us(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Il(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ct(s);
  return i ? t.concat(o, o.visualViewport || [], Vn(s) ? s : []) : t.concat(s, Us(s));
}
function va(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, o) {
      const r = ct(i), a = zt(i), l = r.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, d = 0;
      if (l) {
        h = l.width, c = l.height;
        const f = ar();
        (!f || f && o === "fixed") && (u = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: d };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const o = zt(i), r = ki(i), a = i.ownerDocument.body, l = An(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = An(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -r.scrollLeft + Dl(i);
      const u = -r.scrollTop;
      return mt(a).direction === "rtl" && (c += An(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(zt(e));
  else if (Bt(t))
    s = function(i, o) {
      const r = Se(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = yt(i) ? Ve(i) : Ce(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Pl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Bs(s);
}
function Ol(e, t) {
  const n = an(e);
  return !(n === t || !Bt(n) || $i(n)) && (mt(n).position === "fixed" || Ol(n, t));
}
function _a(e, t) {
  return yt(e) && mt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ba(e, t) {
  const n = ct(e);
  if (!yt(e))
    return n;
  let s = _a(e, t);
  for (; s && zu(s) && mt(s).position === "static"; )
    s = _a(s, t);
  return s && (ae(s) === "html" || ae(s) === "body" && mt(s).position === "static" && !io(s)) ? n : s || function(i) {
    let o = an(i);
    for (; yt(o) && !$i(o); ) {
      if (io(o))
        return o;
      o = an(o);
    }
    return null;
  }(e) || n;
}
function Fu(e, t, n) {
  const s = yt(t), i = zt(t), o = n === "fixed", r = Se(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ce(0);
  if (s || !s && !o)
    if ((ae(t) !== "body" || Vn(i)) && (a = ki(t)), yt(t)) {
      const h = Se(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Dl(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
const Uu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Us(h).filter((v) => Bt(v) && ae(v) !== "body"), f = null;
    const p = mt(h).position === "fixed";
    let m = p ? an(h) : h;
    for (; Bt(m) && !$i(m); ) {
      const v = mt(m), w = io(m);
      w || v.position !== "fixed" || (f = null), (p ? !w && !f : !w && v.position === "static" && f && ["absolute", "fixed"].includes(f.position) || Vn(m) && !w && Ol(h, m)) ? d = d.filter((_) => _ !== m) : f = v, m = an(m);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = va(t, c, i);
    return h.top = An(u.top, h.top), h.right = ya(u.right, h.right), h.bottom = ya(u.bottom, h.bottom), h.left = An(u.left, h.left), h;
  }, va(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = yt(n), o = zt(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Ce(1);
  const l = Ce(0);
  if ((i || !i && s !== "fixed") && ((ae(n) !== "body" || Vn(o)) && (r = ki(n)), yt(n))) {
    const h = Se(n);
    a = Ve(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: Bt, getDimensions: function(e) {
  return Wl(e);
}, getOffsetParent: ba, getDocumentElement: zt, getScale: Ve, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || ba, o = this.getDimensions;
  return { reference: Fu(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => mt(e).direction === "rtl" };
function cr(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = lr(e), c = i || o ? [...h ? Us(h) : [], ...Us(t)] : [];
  c.forEach((m) => {
    i && m.addEventListener("scroll", n, { passive: !0 }), o && m.addEventListener("resize", n);
  });
  const u = h && a ? function(m, v) {
    let w, _ = null;
    const $ = zt(m);
    function C() {
      clearTimeout(w), _ && _.disconnect(), _ = null;
    }
    return function k(M, N) {
      M === void 0 && (M = !1), N === void 0 && (N = 1), C();
      const { left: A, top: O, width: b, height: R } = m.getBoundingClientRect();
      if (M || v(), !b || !R)
        return;
      const D = cs(O), W = cs($.clientWidth - (A + b)), I = cs($.clientHeight - (O + R)), P = cs(A);
      let F = !0;
      _ = new IntersectionObserver((ut) => {
        const Mt = ut[0].intersectionRatio;
        if (Mt !== N) {
          if (!F)
            return k();
          Mt === 0 ? w = setTimeout(() => {
            k(!1, 1e-7);
          }, 100) : k(!1, Mt);
        }
        F = !1;
      }, { rootMargin: -D + "px " + -W + "px " + -I + "px " + -P + "px", threshold: N }), _.observe(m);
    }(!0), C;
  }(h, n) : null;
  let d, f = null;
  r && (f = new ResizeObserver(n), h && !l && f.observe(h), f.observe(t));
  let p = l ? Se(e) : null;
  return l && function m() {
    const v = Se(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, d = requestAnimationFrame(m);
  }(), n(), () => {
    c.forEach((m) => {
      i && m.removeEventListener("scroll", n), o && m.removeEventListener("resize", n);
    }), u && u(), f && f.disconnect(), f = null, l && cancelAnimationFrame(d);
  };
}
const Ci = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Uu, ...n }, o = { ...i.platform, _c: s };
  return Wu(e, t, { ...i, platform: o });
};
let Vu = class extends bi {
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
      middleware: [xi()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && Ci(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
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
var hr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Et = (e, t, n) => (hr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), We = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, hs = (e, t, n, s) => (hr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), xa = (e, t, n) => (hr(e, t, "access private method"), n), Jt, wn, _s, bs, oo, Hl, ro, Bl;
const zi = "show", qu = '[data-toggle="contextmenu"]';
class pt extends ht {
  constructor() {
    super(...arguments), We(this, oo), We(this, ro), We(this, Jt, void 0), We(this, wn, void 0), We(this, _s, void 0), We(this, bs, void 0);
  }
  get isShown() {
    return Et(this, Jt) && y(Et(this, Jt)).hasClass(zi);
  }
  get menu() {
    return Et(this, Jt) || this.ensureMenu();
  }
  get trigger() {
    return Et(this, _s) || this.element;
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
    return this.isShown || (hs(this, _s, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (y(this.menu).addClass(zi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Et(this, bs)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (y(Et(this, Jt)).removeClass(zi), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Et(this, Jt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = y(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = y(document).find(i)), !(s != null && s.length)) {
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
    }), hs(this, Jt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(xi())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    hs(this, bs, cr(n, s, () => {
      Ci(n, s, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
        y(s).css({ left: `${i}px`, top: `${o}px` });
        const l = a.split("-")[0], h = xa(this, oo, Hl).call(this, l);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: u } = r.arrow;
          y(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...xa(this, ro, Bl).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Fn(q(Vu, t), this.menu), !0);
  }
  getPopperElement() {
    return Et(this, wn) || hs(this, wn, {
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
    }), Et(this, wn);
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
Jt = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
bs = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakSet();
Hl = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
ro = /* @__PURE__ */ new WeakSet();
Bl = function(e) {
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
pt.MENU_CLASS = "contextmenu";
pt.NAME = "ContextMenu";
pt.MULTI_INSTANCE = !0;
pt.DEFAULT = {
  placement: "bottom-start",
  strategy: "fixed",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
y(document).on("contextmenu.contextmenu.zui", (e) => {
  const t = y(e.target);
  if (t.closest(`.${pt.MENU_CLASS}`).length)
    return;
  const n = t.closest(qu).not(":disabled,.disabled");
  if (n.length) {
    const s = pt.ensure(n, n.data("options"));
    n.data("options") || n.data("options", s.options), s.show(e), e.preventDefault();
  }
}).on("click.contextmenu.zui", pt.clear.bind(pt));
var ur = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vn = (e, t, n) => (ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), us = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ao = (e, t, n, s) => (ur(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ju = (e, t, n) => (ur(e, t, "access private method"), n), Ln, _n, Vs, lo, zl;
const $a = '[data-toggle="dropdown"]', Fl = class extends pt {
  constructor() {
    super(...arguments), us(this, lo), us(this, Ln, !1), us(this, _n, 0), this.hideLater = () => {
      vn(this, Vs).call(this), ao(this, _n, window.setTimeout(this.hide.bind(this), 100));
    }, us(this, Vs, () => {
      clearTimeout(vn(this, _n)), ao(this, _n, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Fl.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!vn(this, Ln) && this.isHover && ju(this, lo, zl).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    vn(this, Ln) && y(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(rr(t)), (s = e.middleware) == null || s.push(no({ element: this.arrowEl }))), e;
  }
  ensureMenu() {
    const e = super.ensureMenu();
    if (this.options.arrow) {
      const t = this.getArrowSize(), n = y('<div class="arrow-el" />').css({
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
        this.arrowEl && y(this.menu).find(".menu").each((s, i) => {
          y(i).find(".arrow-el").length === 0 && y(i).parent().hasClass("dropdown-menu") && y(i).append(this.arrowEl);
        }), t == null || t(...n);
      };
    }
    return e;
  }
};
let oe = Fl;
Ln = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
lo = /* @__PURE__ */ new WeakSet();
zl = function() {
  y(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, vn(this, Vs)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), ao(this, Ln, !0);
};
oe.MENU_CLASS = "dropdown-menu";
oe.NAME = "Dropdown";
oe.DEFAULT = {
  ...pt.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
y(document).on("click", function(e) {
  const t = y(e.target).closest($a).not(":disabled,.disabled");
  if (t.length) {
    const n = oe.ensure(t);
    n.options.trigger === "click" && n.toggle();
  } else
    oe.clear({ event: e });
}).on("mouseover", function(e) {
  var s, i;
  const t = (i = (s = e.target).closest) == null ? void 0 : i.call(s, $a);
  if (!t)
    return;
  const n = oe.ensure(t);
  n.isHover && n.show();
});
let fs = 0;
window.addEventListener("scroll", (e) => {
  fs && clearTimeout(fs), fs = window.setTimeout(() => {
    oe.clear({ event: e }), fs = 0;
  }, 50);
}, !0);
var Yn, Ye;
class Gu extends V {
  constructor(n) {
    var s;
    super(n);
    L(this, Yn, void 0);
    L(this, Ye, Ct());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return E(this, Ye);
  }
  get triggerElement() {
    return E(this, Ye).current;
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
    }), B(this, Yn, oe.ensure(this.triggerElement, {
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
    (n = E(this, Yn)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...o } = this.props;
    return {
      className: T("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: E(this, Ye)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ g("div", { ...s, children: n });
  }
}
Yn = new WeakMap(), Ye = new WeakMap();
class Yu extends Gu {
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
    return s.caret = i, /* @__PURE__ */ g(jt, { ...s });
  }
}
function Ul({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Yu, { type: n, ...s });
}
let Vl = class extends V {
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
    return /* @__PURE__ */ g(jt, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = t, a = { key: s, ...n };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, q);
      if (Q(l))
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
      beforeDestroy: d,
      ...f
    } = t;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("btn-group", i ? `size-${i}` : "", n),
        ...f,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Ku({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Vl, { type: n, ...s });
}
let wt = class extends Ne {
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
wt.ItemComponents = {
  item: Lu,
  dropdown: Ul,
  "btn-group": Ku
};
wt.ROOT_TAG = "nav";
wt.NAME = "toolbar";
wt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Xu({
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
  a === !0 ? u = /* @__PURE__ */ g(jt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : Q(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ g(jt, { ...a, onClick: l }));
  const d = Q(n) ? n : n ? /* @__PURE__ */ g(wt, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: T("alert", e), style: t, ...c, children: [
    Q(h) ? h : typeof h == "string" ? /* @__PURE__ */ g("i", { className: `icon ${h}` }) : null,
    Q(i) ? i : /* @__PURE__ */ g("div", { className: T("alert-content", o), children: [
      Q(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    u,
    r
  ] });
}
function Ju(e) {
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
let Zu = class extends V {
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
      Xu,
      {
        className: T("messager", l, i, r === !0 ? Ju(o) : r, a ? "in" : ""),
        ...c
      }
    );
  }
};
var Qu = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, tf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, un = (e, t, n) => (Qu(e, t, "access private method"), n), de, Ie;
class fr extends et {
  constructor() {
    super(...arguments), tf(this, de), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      y(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), un(this, de, Ie).call(this, () => {
      this._show = !0, this.render(), un(this, de, Ie).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && un(this, de, Ie).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && un(this, de, Ie).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), un(this, de, Ie).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
de = /* @__PURE__ */ new WeakSet();
Ie = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
fr.NAME = "MessagerItem";
fr.Component = Zu;
var dr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, be = (e, t, n) => (dr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ds = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, xs = (e, t, n, s) => (dr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ql = (e, t, n) => (dr(e, t, "access private method"), n), qe, It, co, jl, pr, Gl;
const Yl = class extends ht {
  constructor() {
    super(...arguments), ds(this, co), ds(this, pr), ds(this, qe, void 0), ds(this, It, void 0);
  }
  get isShown() {
    var e;
    return !!((e = be(this, It)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), ql(this, co, jl).call(this).show();
  }
  hide() {
    var e;
    (e = be(this, It)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Yl.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let mr = Yl;
qe = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
co = /* @__PURE__ */ new WeakSet();
jl = function() {
  if (be(this, It))
    be(this, It).setOptions(this.options);
  else {
    const e = ql(this, pr, Gl).call(this), t = new fr(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), xs(this, qe, void 0), xs(this, It, void 0);
    }), xs(this, It, t);
  }
  return be(this, It);
};
pr = /* @__PURE__ */ new WeakSet();
Gl = function() {
  if (be(this, qe))
    return be(this, qe);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = y(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = y(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), xs(this, qe, n[0])), n[0];
};
mr.NAME = "messager";
mr.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
y(document).on("zui.messager.show", (e, t) => {
  t && mr.show(t);
});
let gr = class extends V {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ g("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ g("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(t) })
    ] });
  }
};
gr.NAME = "zui.progress-circle";
gr.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Kl extends et {
}
Kl.NAME = "ProgressCircle";
Kl.Component = gr;
let ef = class extends V {
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
    } = this.props, u = this.state.checked ? 1 : 0, d = t || "div", f = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, p = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, m = [
      /* @__PURE__ */ g("input", { onChange: h, type: "checkbox", value: u, checked: !!this.state.checked }),
      /* @__PURE__ */ g("label", { children: [
        f,
        i,
        p
      ] })
    ];
    return q(
      d,
      {
        className: T("switch", n, { disabled: a }),
        onClick: this.handleOnClick,
        ...c
      },
      ...m,
      s
    );
  }
};
class Xl extends et {
}
Xl.NAME = "Switch";
Xl.Component = ef;
class Jl extends et {
}
Jl.NAME = "BtnGroup";
Jl.Component = Vl;
class nf extends ht {
  init() {
    this.fileMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer();
    const { multiple: t, defaultFileList: n } = this.options;
    t || (this.options.maxCount = 1), this.initInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, listPosition: s } = this.options;
    this.$label = y(`<label class="btn primary" for="${t}">${n}</label>`), this.$list = y('<div class="file-list"></div>');
    const i = s === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...i);
  }
  initInputCash() {
    const { name: t, multiple: n, accept: s, onChange: i } = this.options;
    this.$input = y("<input />").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (o) => {
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
    return y('<li class="file-item"></li>').append(n ? this.fileIcon() : null).append(this.fileInfo(t)).append(this.renameInput(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return y(t || '<i class="icon icon-paper-clip"></i>');
  }
  fileInfo(t) {
    const n = y(`<span class="file-name">${t.name}</span>`), s = y(`<span class="file-size text-gray">${hu(t.size)}</span>`), i = y('<div class="file-info"></div>').append(n).append(s), { renameBtn: o, renameText: r, deleteBtn: a, deleteText: l } = this.options;
    return o && i.append(
      y("<span />").addClass("btn size-sm rounded-sm text-primary canvas file-action file-rename").html(r).on("click", () => {
        i.addClass("hidden").closest(".file-item").find(".input-group.hidden").removeClass("hidden");
      })
    ), a && i.append(
      y("<span />").html(l).addClass("btn size-sm rounded-sm text-primary canvas file-action file-delete").on("click", () => this.deleteFileItem(n.html()))
    ), i;
  }
  renameInput(t) {
    const { renameConfirmText: n, renameCancelText: s } = this.options, i = y('<div class="input-group hidden"></div>'), o = y("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name), r = y("<button />").addClass("btn").prop("type", "button").html(n).on("click", () => {
      i.addClass("hidden"), this.renameFileItem(t, o.val()), i.closest(".file-item").find(".file-info.hidden").removeClass("hidden").find(".file-name").html(o.val());
    }), a = y("<button />").prop("type", "button").addClass("btn").html(s).on("click", () => {
      o.val(t.name), i.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), l = y('<div class="btn-group"></div').append(r).append(a);
    return i.append(o).append(l);
  }
}
nf.DEFAULT = {
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
var Dt;
class sf {
  constructor(t = "") {
    L(this, Dt, void 0);
    typeof t == "object" ? B(this, Dt, t) : B(this, Dt, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    E(this, Dt).addEventListener(t, n, s);
  }
  once(t, n, s) {
    E(this, Dt).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    E(this, Dt).removeEventListener(t, n, s);
  }
  emit(t) {
    return E(this, Dt).dispatchEvent(t), t;
  }
}
Dt = new WeakMap();
const ka = /* @__PURE__ */ new Set([
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
class Zl extends sf {
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
    return typeof t == "string" && (ka.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Zl.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (ka.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let Ql = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Kn, te, _t, Ke, Xe, $s;
const ea = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, Xe);
    L(this, Kn, void 0);
    L(this, te, void 0);
    L(this, _t, void 0);
    L(this, Ke, void 0);
    B(this, Kn, n), B(this, te, `ZUI_STORE:${t ?? Ql()}`), B(this, _t, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return E(this, Kn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (E(this, Ke) || B(this, Ke, new ea(E(this, te), "session")), E(this, Ke));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = E(this, _t).getItem(nt(this, Xe, $s).call(this, t));
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
    E(this, _t).setItem(nt(this, Xe, $s).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    E(this, _t).removeItem(nt(this, Xe, $s).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < E(this, _t).length; n++) {
      const s = E(this, _t).key(n);
      if (s != null && s.startsWith(E(this, te))) {
        const i = E(this, _t).getItem(s);
        typeof i == "string" && t(s.substring(E(this, te).length + 1), JSON.parse(i));
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
let qs = ea;
Kn = new WeakMap(), te = new WeakMap(), _t = new WeakMap(), Ke = new WeakMap(), Xe = new WeakSet(), $s = function(t) {
  return `${E(this, te)}:${t}`;
};
const of = new qs("DEFAULT");
function rf(e, t = "local") {
  return new qs(e, t);
}
Object.assign(of, { create: rf });
function af(e) {
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
function lf(e) {
  const [t, n, s] = typeof e == "string" ? af(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Ca(e, t) {
  return lf(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Sa(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function cf(e, t, n) {
  e = e % 360 / 360, t = Sa(t), n = Sa(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function hf(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function uf(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let tc = class extends V {
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
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: p = 0.6,
      children: m,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: r, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? _.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let C;
    if (u)
      w.push("has-img"), C = /* @__PURE__ */ g("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const k = uf(l, c);
      if (w.push("has-text", `has-text-${k.length}`), r)
        !a && r && (_.color = Ca(r));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : hf(N)) * d % 360;
        if (_.background = `hsl(${A},${f * 100}%,${p * 100}%)`, !a) {
          const O = cf(A, f, p);
          _.color = Ca(O);
        }
      }
      let M;
      $ && $ < 14 * k.length && (M = { transform: `scale(${$ / (14 * k.length)})`, whiteSpace: "nowrap" }), C = /* @__PURE__ */ g("div", { "data-actualSize": $, className: "avatar-text", style: M, children: k });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: T(w),
        style: _,
        ...v,
        children: [
          C,
          m
        ]
      }
    );
  }
};
class ec extends et {
}
ec.NAME = "Avatar";
ec.Component = tc;
var yr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ye = (e, t, n) => (yr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Wn = (e, t, n, s) => (yr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Fi = (e, t, n) => (yr(e, t, "access private method"), n), ze, ks, pe, ho, bn, Cs;
const Ui = "show", Ma = "in", ff = '[data-dismiss="modal"]', xn = class extends ht {
  constructor() {
    super(...arguments), fn(this, bn), fn(this, ze, 0), fn(this, ks, void 0), fn(this, pe, void 0), fn(this, ho, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(ff) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Ui);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", ye(this, ho)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!ye(this, pe) || ye(this, pe)[0] !== n || ye(this, pe)[1] !== s) && (Wn(this, pe, [n, s]), this.layout());
        });
        t.observe(e), Wn(this, ks, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = ye(this, ks)) == null || e.disconnect();
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return y(t).css("z-index", `${xn.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: o } = this.options;
    return y(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Ui, i).css({
      zIndex: `${xn.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), Fi(this, bn, Cs).call(this, () => {
      y(t).addClass(Ma), Fi(this, bn, Cs).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (y(this.modalElement).removeClass(Ma), this.emit("hide"), Fi(this, bn, Cs).call(this, () => {
      y(this.modalElement).removeClass(Ui), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    t = t ?? this.options.size, y(n).removeAttr("data-size");
    const s = { width: "", height: "" };
    typeof t == "object" ? (s.width = t.width, s.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? y(n).attr("data-size", t) : t && (s.width = t), y(n).css(s), e = e ?? this.options.position ?? "fit";
    const i = n.clientWidth, o = n.clientHeight;
    Wn(this, pe, [i, o]), typeof e == "function" && (e = e({ width: i, height: o }));
    const r = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (r.alignSelf = "flex-start", r.top = e) : typeof e == "object" && e ? (r.alignSelf = "flex-start", Object.assign(r, e)) : e === "fit" ? (r.alignSelf = "flex-start", r.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : e === "bottom" ? r.alignSelf = "flex-end" : e === "top" ? r.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (r.alignSelf = "flex-start", r.top = e), y(n).css(r), y(this.modalElement).css("justifyContent", r.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = xn.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = xn.query(e)) == null || t.show();
  }
};
let Xt = xn;
ze = /* @__PURE__ */ new WeakMap();
ks = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakMap();
ho = /* @__PURE__ */ new WeakMap();
bn = /* @__PURE__ */ new WeakSet();
Cs = function(e, t) {
  ye(this, ze) && (clearTimeout(ye(this, ze)), Wn(this, ze, 0)), e && (this.options.animation ? Wn(this, ze, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Xt.NAME = "Modal";
Xt.MULTI_INSTANCE = !0;
Xt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Xt.zIndex = 2e3;
y(window).on("resize.modal.zui", () => {
  Xt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
y(document).on("to-hide.modal.zui", (e, t) => {
  Xt.hide(t == null ? void 0 : t.target);
});
class nc extends V {
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
    return Q(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-header", children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Q(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(wt, { ...t }) : null,
      n ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ g("div", { className: "modal-body", children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerActions: n
    } = this.props;
    return Q(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ g("div", { className: "modal-footer", children: n ? /* @__PURE__ */ g(wt, { ...n }) : null });
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
nc.defaultProps = { closeBtn: !0 };
var Je, Ze, Qe;
class df extends V {
  constructor() {
    super(...arguments);
    L(this, Je, void 0);
    L(this, Ze, void 0);
    L(this, Qe, void 0);
    B(this, Je, Ct()), this.state = {}, B(this, Qe, () => {
      var i, o;
      const n = (o = (i = E(this, Je).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!n)
        return;
      let s = E(this, Ze);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = n.body, a = n.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), B(this, Ze, s);
    });
  }
  componentDidMount() {
    E(this, Qe).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = E(this, Ze)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ g(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: E(this, Je),
        onLoad: E(this, Qe)
      }
    );
  }
}
Je = new WeakMap(), Ze = new WeakMap(), Qe = new WeakMap();
var wr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Tt = (e, t, n) => (wr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Pe = (e, t, n, s) => (wr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ss = (e, t, n) => (wr(e, t, "access private method"), n), me, $n, Nt, js, vr, Ms, uo;
function pf(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function mf(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ g($l, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function gf(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(df, { url: n })
  };
}
const yf = {
  custom: pf,
  ajax: mf,
  iframe: gf
}, Vi = "loading", kn = class extends Xt {
  constructor() {
    super(...arguments), dn(this, js), dn(this, Ms), dn(this, me, void 0), dn(this, $n, void 0), dn(this, Nt, void 0);
  }
  get id() {
    return Tt(this, $n);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(Vi);
  }
  get shown() {
    var e;
    return !!((e = Tt(this, me)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = Tt(this, me);
    if (!e) {
      const { options: t } = this;
      let n = Tt(this, $n);
      n || (n = t.id || `modal-${y.guid++}`, Pe(this, $n, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = y("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Pe(this, me, e);
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
    const e = Tt(this, me);
    e && (y(e).removeData(this.constructor.KEY).remove(), Pe(this, me, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Tt(this, Nt) && clearTimeout(Tt(this, Nt));
    const { modalElement: e, options: t } = this, n = y(e), { type: s, loadTimeout: i, loadingText: o = null } = t, r = yf[s];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", o).addClass(Vi), i && Pe(this, Nt, window.setTimeout(() => {
      Pe(this, Nt, 0), Ss(this, Ms, uo).call(this, this.options.timeoutTip);
    }, i));
    const a = await r.call(this, e, t);
    return a === !1 ? await Ss(this, Ms, uo).call(this, this.options.failedTip) : a && typeof a == "object" && await Ss(this, js, vr).call(this, a), Tt(this, Nt) && (clearTimeout(Tt(this, Nt)), Pe(this, Nt, 0)), await mu(100), n.removeClass(Vi), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = kn.ensure(n, { show: !0, ...s });
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
      }, typeof p.key == "string" && (p.text || (p.text = qt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let d;
    const f = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: m }) => {
        const v = kn.query(m.target, l);
        d = p.key, (r == null ? void 0 : r(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await kn.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: c,
      backdrop: "static",
      custom: { footerActions: f, ...typeof a == "function" ? a() : a },
      ...h
    }), d;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await kn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, r) => {
        n == null || n(o.key === "confirm", r), t == null || t(o, r);
      },
      ...s
    }) === "confirm";
  }
};
let sc = kn;
me = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
js = /* @__PURE__ */ new WeakSet();
vr = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return this.modalElement.innerHTML = e[0], y(this.modalElement).runJS(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), t();
      },
      ...s
    }, Fn(
      /* @__PURE__ */ g(nc, { ...e }),
      this.modalElement
    );
  });
};
Ms = /* @__PURE__ */ new WeakSet();
uo = function(e) {
  if (e)
    return Ss(this, js, vr).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
sc.DEFAULT = {
  ...Xt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var _r = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, fo = (e, t, n) => (_r(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ea = (e, t, n, s) => (_r(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), po = (e, t, n) => (_r(e, t, "access private method"), n), xe, br, ic, mo, oc, xr, rc;
const wf = '[data-toggle="modal"]';
class ac extends ht {
  constructor() {
    super(...arguments), ps(this, br), ps(this, mo), ps(this, xr), ps(this, xe, void 0);
  }
  get modal() {
    return fo(this, xe);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = po(this, mo, oc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = fo(this, xe)) == null ? void 0 : t.hide();
  }
}
xe = /* @__PURE__ */ new WeakMap();
br = /* @__PURE__ */ new WeakSet();
ic = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
mo = /* @__PURE__ */ new WeakSet();
oc = function() {
  const e = po(this, br, ic).call(this);
  let t = fo(this, xe);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = po(this, xr, rc).call(this);
    if (!n)
      return;
    t = Xt.ensure(n, e);
  } else
    t = sc.ensure(this.container, e);
  return Ea(this, xe, t), t.on("destroyed", () => {
    Ea(this, xe, void 0);
  }), t;
};
xr = /* @__PURE__ */ new WeakSet();
rc = function() {
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
ac.NAME = "ModalTrigger";
y(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, wf);
  if (n) {
    const i = ac.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let lc = class extends Ne {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
lc.NAME = "nav";
class cc extends et {
}
cc.NAME = "Nav";
cc.Component = lc;
function qn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function vf({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = qn(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : it(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : it(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ g(jt, { type: n, ...a });
}
const Wt = 24 * 60 * 60 * 1e3, at = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ss = (e, t = /* @__PURE__ */ new Date()) => (e = at(e), t = at(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), go = (e, t = /* @__PURE__ */ new Date()) => at(e).getFullYear() === at(t).getFullYear(), _f = (e, t = /* @__PURE__ */ new Date()) => (e = at(e), t = at(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Vd = (e, t = /* @__PURE__ */ new Date()) => {
  e = at(e), t = at(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, qd = (e, t) => ss(at(t), e), jd = (e, t) => ss(at(t).getTime() - Wt, e), Gd = (e, t) => ss(at(t).getTime() + Wt, e), Yd = (e, t) => ss(at(t).getTime() - 2 * Wt, e), yo = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = at(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", go(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, Kd = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = yo(e, go(e) ? s.month : s.full);
  if (ss(e, t))
    return i;
  const o = yo(t, go(e, t) ? _f(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Xd = (e) => {
  const t = (/* @__PURE__ */ new Date()).getTime();
  switch (e) {
    case "oneWeek":
      return t - Wt * 7;
    case "oneMonth":
      return t - Wt * 31;
    case "threeMonth":
      return t - Wt * 31 * 3;
    case "halfYear":
      return t - Wt * 183;
    case "oneYear":
      return t - Wt * 365;
    case "twoYear":
      return t - 2 * (Wt * 365);
    default:
      return 0;
  }
}, Ta = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ta(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Ta(e, "day", n, s);
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
function bf({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = qn(i, n);
  return s = typeof s == "function" ? s(a) : it(s, a), /* @__PURE__ */ g(Sl, { ...r, children: [
    o,
    s
  ] });
}
function xf({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(jt, { type: n, ...l })), c = (d, f) => {
    const p = [];
    for (let m = d; m <= f; m++) {
      l.text = m, delete l.icon, l.disabled = !1;
      const v = qn(i, m);
      r && (l.url = typeof r == "function" ? r(v) : it(r, v)), p.push(/* @__PURE__ */ g(jt, { type: n, ...l, onClick: o }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function $f({
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
      url: typeof n == "function" ? n(c) : it(n, c)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(t) : it(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(Ul, { type: "dropdown", dropdown: i, ...r });
}
function kf({
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
  const d = (m) => {
    var v;
    u = Number((v = m.target) == null ? void 0 : v.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, f = (m) => {
    if (!(m != null && m.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const v = qn(i, u);
    a && !a({ info: v, event: m }) || (m.target.href = c.url = typeof l == "function" ? l(v) : it(l, v));
  }, p = qn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : it(l, p), /* @__PURE__ */ g("div", { className: T("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ g(jt, { type: s, ...c, onClick: f })
  ] });
}
let Si = class extends wt {
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
Si.NAME = "pager";
Si.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Si.ItemComponents = {
  ...wt.ItemComponents,
  link: vf,
  info: bf,
  nav: xf,
  "size-menu": $f,
  goto: kf
};
class hc extends et {
}
hc.NAME = "Pager";
hc.Component = Si;
var ri, ai, uc;
class Cf extends V {
  constructor() {
    super(...arguments);
    L(this, ai);
    L(this, ri, (n) => {
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
          nt(this, ai, uc).call(this),
          a,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
ri = new WeakMap(), ai = new WeakSet(), uc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: n.map((i, o) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, ri), "data-idx": o, children: /* @__PURE__ */ g("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: s });
};
var li;
class Sf extends V {
  constructor() {
    super(...arguments);
    L(this, li, (n) => {
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
    } = this.props, [u] = a, d = u ? /* @__PURE__ */ g("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }), f = u && l ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, li), children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("picker-select picker-select-single form-control", n, { disabled: i, focused: r }),
        style: s,
        onClick: h,
        children: [
          d,
          c,
          f,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
li = new WeakMap();
var Mf = ["Shift", "Meta", "Alt", "Control"], Ef = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function qi(e, t) {
  return typeof e.getModifierState == "function" && e.getModifierState(t);
}
function Tf(e) {
  return e.trim().split(" ").map(function(t) {
    var n = t.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? Ef : i;
    }), s];
  });
}
function Rf(e, t) {
  var n;
  t === void 0 && (t = {});
  var s = (n = t.timeout) != null ? n : 1e3, i = Object.keys(e).map(function(a) {
    return [Tf(a), e[a]];
  }), o = /* @__PURE__ */ new Map(), r = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var h = l[0], c = l[1], u = o.get(h) || h;
      (function(d, f) {
        return !(f[1].toUpperCase() !== d.key.toUpperCase() && f[1] !== d.code || f[0].find(function(p) {
          return !qi(d, p);
        }) || Mf.find(function(p) {
          return !f[0].includes(p) && f[1] !== p && qi(d, p);
        }));
      })(a, u[0]) ? u.length > 1 ? o.set(h, u.slice(1)) : (o.delete(h), c(a)) : qi(a, a.key) || o.delete(h);
    }), r && clearTimeout(r), r = setTimeout(o.clear.bind(o), s));
  };
}
function Nf(e, t, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", o = Rf(t, n);
  return e.addEventListener(i, o), function() {
    e.removeEventListener(i, o);
  };
}
const Af = (e, t) => e.reduce((n, s) => [...n].reduce((i, o) => {
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
var ee, tn, en, Xn, nn, Es, ve, Cn, ci, fc, sn, Jn, on, Zn, hi, dc;
class Lf extends V {
  constructor() {
    super(...arguments);
    L(this, nn);
    L(this, ve);
    L(this, ci);
    L(this, hi);
    L(this, ee, void 0);
    L(this, tn, void 0);
    L(this, en, void 0);
    L(this, Xn, void 0);
    L(this, sn, void 0);
    L(this, Jn, void 0);
    L(this, on, void 0);
    L(this, Zn, void 0);
    this.state = { keys: "", show: !1 }, B(this, ee, 0), B(this, tn, Ct()), B(this, en, Ct()), B(this, sn, (n) => {
      y(n.target).closest(`#picker-menu-${this.props.id}`).length || this.hide();
    }), B(this, Jn, ({ item: n }) => {
      this.select(n.key);
    }), B(this, on, (n) => {
      this.setState({ keys: n.target.value });
    }), B(this, Zn, (n) => {
      n.stopPropagation(), this.setState({ keys: "" }, this.focus.bind(this));
    });
  }
  componentDidMount() {
    y(document).on("click", E(this, sn)), this.show(this.focus.bind(this)), B(this, Xn, Nf(window, {
      Escape: () => {
        this.state.show && (this.state.keys ? this.setState({ keys: "" }) : this.hide());
      },
      Enter: () => {
        if (!this.state.show)
          return;
        const s = nt(this, ve, Cn).call(this);
        s != null && s.length && this.select(s.dataset("value"));
      },
      ArrowUp: () => {
        var o;
        if (!this.state.show)
          return;
        const s = (o = nt(this, ve, Cn).call(this)) == null ? void 0 : o.parent();
        if (!(s != null && s.length))
          return;
        let i = s.prev();
        i.length || (i = s.parent().children().last()), this.setHoverItem(i.children("a").dataset("value"));
      },
      ArrowDown: () => {
        var o;
        if (!this.state.show)
          return;
        const s = (o = nt(this, ve, Cn).call(this)) == null ? void 0 : o.parent();
        if (!(s != null && s.length))
          return;
        let i = s.next();
        i.length || (i = s.parent().children().first()), this.setHoverItem(i.children("a").dataset("value"));
      }
    }));
    const n = nt(this, nn, Es).call(this);
    n && y(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = y(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    y(document).off("click", E(this, sn)), (s = E(this, Xn)) == null || s.call(this);
    const n = nt(this, nn, Es).call(this);
    n && y(n).off(".pickerMenu.zui");
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
    (n = E(this, tn).current) == null || n.focus();
  }
  hide() {
    this.state.show && (E(this, ee) && window.clearTimeout(E(this, ee)), this.setState({ show: !1 }, () => {
      B(this, ee, window.setTimeout(() => {
        var n, s;
        B(this, ee, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
      }, 200));
    }));
  }
  select(n) {
    const s = this.props.items.find((i) => i.value === n);
    s && this.props.onSelectItem(s);
  }
  setHoverItem(n) {
    this.setState({ hover: n }, () => {
      const s = nt(this, ve, Cn).call(this);
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
    } = this.props, { show: c, keys: u } = this.state, d = u.trim().length;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("picker-menu menu-popup", s, { shown: c, "has-search": d }),
        id: `picker-menu-${n}`,
        style: { maxHeight: o, maxWidth: r, width: a, ...i },
        children: [
          nt(this, hi, dc).call(this),
          /* @__PURE__ */ g(
            bi,
            {
              ref: E(this, en),
              className: "picker-menu-list",
              items: nt(this, ci, fc).call(this),
              onClickItem: E(this, Jn),
              checkbox: h,
              ...l
            }
          )
        ]
      }
    );
  }
}
ee = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), Xn = new WeakMap(), nn = new WeakSet(), Es = function() {
  var n;
  return (n = E(this, en).current) == null ? void 0 : n.ref.current;
}, ve = new WeakSet(), Cn = function() {
  const n = nt(this, nn, Es).call(this);
  if (n)
    return y(n).find(".menu-item>a.hover");
}, ci = new WeakSet(), fc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), { keys: o, hover: r } = this.state, a = o.toLowerCase().split(" ").filter((c) => c.length);
  let l = !1;
  const h = s.reduce((c, u) => {
    const {
      value: d,
      keys: f,
      text: p,
      className: m,
      ...v
    } = u;
    if (!a.length || a.every((w) => d.toLowerCase().includes(w) || (f == null ? void 0 : f.toLowerCase().includes(w)) || typeof p == "string" && p.toLowerCase().includes(w))) {
      let w = p ?? d;
      typeof w == "string" && a.length && (w = Af(a, [w])), d === r && (l = !0), c.push({
        key: d,
        active: i.has(d),
        text: w,
        className: T(m, { hover: d === r }),
        "data-value": d,
        ...v
      });
    }
    return c;
  }, []);
  return !l && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, sn = new WeakMap(), Jn = new WeakMap(), on = new WeakMap(), Zn = new WeakMap(), hi = new WeakSet(), dc = function() {
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
        onChange: E(this, on),
        onInput: E(this, on),
        ref: E(this, tn)
      }
    ),
    o ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-menu-search-clear square size-sm ghost", onClick: E(this, Zn), children: /* @__PURE__ */ g("span", { className: "close" }) }) : /* @__PURE__ */ g("span", { className: "magnifier" })
  ] }) : null;
};
var $r = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Z = (e, t, n) => ($r(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Gs = (e, t, n, s) => ($r(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Wf = (e, t, n, s) => ({
  set _(i) {
    Gs(e, t, i, n);
  },
  get _() {
    return Z(e, t, s);
  }
}), st = (e, t, n) => ($r(e, t, "access private method"), n), Ts, ln, Ys, Ot, Oe, Sn, Ks, kr, Rs, wo, vo, pc, Cr, Sr, Mr, Er, Tr, mc, _o, gc, Rr, yc, Ns, bo;
let wc = class extends V {
  constructor(t) {
    super(t), X(this, Oe), X(this, Ks), X(this, Rs), X(this, vo), X(this, Tr), X(this, _o), X(this, Rr), X(this, Ns), X(this, Ts, 0), X(this, ln, y.guid++), X(this, Ys, Ct()), X(this, Ot, void 0), X(this, Cr, (n) => {
      const { valueList: s } = this, i = new Set(n.map((r) => r.value)), o = s.filter((r) => !i.has(r));
      this.setValue(o);
    }), X(this, Sr, () => {
      requestAnimationFrame(() => this.toggle());
    }), X(this, Mr, () => {
      this.close();
    }), X(this, Er, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = Z(this, Ys).current) == null || s.hide();
      });
    }), this.state = {
      value: st(this, Rs, wo).call(this, t.defaultValue) ?? "",
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
    return st(this, Ks, kr).call(this, this.state.value);
  }
  componentDidMount() {
    st(this, Ns, bo).call(this, !0);
  }
  componentDidUpdate() {
    st(this, Ns, bo).call(this);
  }
  componentWillUnmount() {
    var n;
    var t;
    (n = this.props.beforeDestroy) == null || n.call(this), (t = Z(this, Ot)) == null || t.call(this), Gs(this, Ot, void 0);
  }
  async loadItems() {
    let { items: t } = this.props;
    if (typeof t == "function") {
      const s = ++Wf(this, Ts)._;
      if (await st(this, Oe, Sn).call(this, { loading: !0, items: [] }), t = await t(), Z(this, Ts) !== s)
        return [];
    }
    const n = {};
    return Array.isArray(t) && this.state.items !== t && (n.items = t), this.state.loading && (n.loading = !1), Object.keys(n).length && await st(this, Oe, Sn).call(this, n), t;
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
    await st(this, Oe, Sn).call(this, { open: t }), t && this.loadItems();
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
    await st(this, Oe, Sn).call(this, { value: st(this, Rs, wo).call(this, t), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
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
    } = this.props, a = o || (i ? Cf : Sf), l = st(this, vo, pc).call(this);
    return /* @__PURE__ */ g(
      "div",
      {
        id: `picker-${Z(this, ln)}`,
        className: T("picker", t),
        style: n,
        children: [
          /* @__PURE__ */ g(a, { ...l }),
          s,
          st(this, _o, gc).call(this),
          r ? /* @__PURE__ */ g("input", { type: "hidden", className: "picker-value", name: r, value: this.state.value }) : null
        ]
      }
    );
  }
};
Ts = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakSet();
Sn = function(e) {
  return new Promise((t) => {
    this.setState(e, t);
  });
};
Ks = /* @__PURE__ */ new WeakSet();
kr = function(e) {
  return typeof e == "string" ? e.length ? y.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? y.unique(e) : [];
};
Rs = /* @__PURE__ */ new WeakSet();
wo = function(e) {
  const t = st(this, Ks, kr).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
vo = /* @__PURE__ */ new WeakSet();
pc = function() {
  const { placeholder: e, disabled: t, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: e,
    disabled: t,
    multiple: n,
    selections: this.getSelections(),
    onClick: Z(this, Sr),
    onDeselect: Z(this, Cr)
  };
};
Cr = /* @__PURE__ */ new WeakMap();
Sr = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakSet();
mc = function() {
  const { search: e, menuClass: t, menuWidth: n, menuStyle: s, menuMaxHeight: i, menuMaxWidth: o, menuMinWidth: r, multiple: a, searchHint: l, menuCheckbox: h } = this.props, { items: c } = this.state;
  return {
    id: `${Z(this, ln)}`,
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
    onRequestHide: Z(this, Mr),
    onSelectItem: Z(this, Er)
  };
};
_o = /* @__PURE__ */ new WeakSet();
gc = function() {
  const { open: e } = this.state;
  if (!e)
    return null;
  const t = y(this.props.container || "body");
  let n = t.find(".pickers-container");
  n.length || (n = y("<div>").addClass("pickers-container").appendTo(t));
  const { Menu: s = Lf } = this.props;
  return Su(/* @__PURE__ */ g(s, { ...st(this, Tr, mc).call(this), ref: Z(this, Ys) }), n[0]);
};
Rr = /* @__PURE__ */ new WeakSet();
yc = function() {
  const e = y(`#picker-${Z(this, ln)}`)[0], t = y(`#picker-menu-${Z(this, ln)}`)[0];
  if (!t || !e || !this.state.open) {
    Z(this, Ot) && (Z(this, Ot).call(this), Gs(this, Ot, void 0));
    return;
  }
  Z(this, Ot) || Gs(this, Ot, cr(e, t, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    Ci(e, t, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? xi() : null, so(), rr(1)].filter(Boolean)
    }).then(({ x: i, y: o }) => {
      y(t).css({ left: i, top: o, width: s === "100%" ? y(e).width() : void 0 });
    }), s === "100%" && y(t).css({ width: y(e).width() });
  }));
};
Ns = /* @__PURE__ */ new WeakSet();
bo = function(e = !1) {
  var t;
  (t = this.props.afterRender) == null || t.call(this, { firstRender: e }), st(this, Rr, yc).call(this);
};
wc.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class vc extends et {
}
vc.NAME = "Picker";
vc.Component = wc;
class _c extends ht {
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
    return i && s.middleware.push(xi()), o && s.middleware.push(o === !0 ? so() : so(o)), r && s.middleware.push(no({ element: this.$arrow[0] })), a && s.middleware.push(rr(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = cr(t, n, () => {
      Ci(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !no || !r.arrow)
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
    const n = y(t);
    if (!n.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    n.addClass(s), n.addClass("hidden"), n.addClass("z-50"), n.on("click", (i) => {
      y(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = n;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const t = y('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = y('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
_c.NAME = "Popovers";
_c.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class bc extends et {
}
bc.NAME = "Toolbar";
bc.Component = wt;
function is(e) {
  return e.split("-")[1];
}
function Nr(e) {
  return e === "y" ? "height" : "width";
}
function je(e) {
  return e.split("-")[0];
}
function Mi(e) {
  return ["top", "bottom"].includes(je(e)) ? "x" : "y";
}
function Ra(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = Mi(t), l = Nr(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let u;
  switch (je(t)) {
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
  switch (is(t)) {
    case "start":
      u[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      u[a] += h * (n && c ? -1 : 1);
  }
  return u;
}
const Pf = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = Ra(h, s, l), d = s, f = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: v, fn: w } = a[m], { x: _, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, f = { ...f, [v]: { ...f[v], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (d = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = Ra(h, d, l)), m = -1);
  }
  return { x: c, y: u, placement: d, strategy: i, middlewareData: f };
};
function xc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Xs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Df(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = t, p = xc(f), m = a[d ? u === "floating" ? "reference" : "floating" : u], v = Xs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(m))) == null || n ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, C = Xs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / $.y, bottom: (C.bottom - v.bottom + p.bottom) / $.y, left: (v.left - C.left + p.left) / $.x, right: (C.right - v.right + p.right) / $.x };
}
const If = Math.min, Of = Math.max;
function Hf(e, t, n) {
  return Of(e, If(t, n));
}
const Bf = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = xc(s), c = { x: i, y: o }, u = Mi(r), d = Nr(u), f = await l.getDimensions(n), p = u === "y" ? "top" : "left", m = u === "y" ? "bottom" : "right", v = a.reference[d] + a.reference[u] - c[u] - a.floating[d], w = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const C = v / 2 - w / 2, k = h[p], M = $ - f[d] - h[m], N = $ / 2 - f[d] / 2 + C, A = Hf(k, N, M), O = is(r) != null && N != A && a.reference[d] / 2 - (N < k ? h[p] : h[m]) - f[d] / 2 < 0;
  return { [u]: c[u] - (O ? N < k ? k - N : M - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), zf = ["top", "right", "bottom", "left"];
zf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ff = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Js(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ff[t]);
}
function Uf(e, t, n) {
  n === void 0 && (n = !1);
  const s = is(e), i = Mi(e), o = Nr(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Js(r)), { main: r, cross: Js(r) };
}
const Vf = { start: "end", end: "start" };
function ji(e) {
  return e.replace(/start|end/g, (t) => Vf[t]);
}
const qf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: p = !0, ...m } = e, v = je(s), w = je(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Js(r)] : function(b) {
      const R = Js(b);
      return [ji(b), R, ji(R)];
    }(r));
    u || f === "none" || $.push(...function(b, R, D, W) {
      const I = is(b);
      let P = function(F, ut, Mt) {
        const rs = ["left", "right"], cn = ["right", "left"], as = ["top", "bottom"], Wi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Mt ? ut ? cn : rs : ut ? rs : cn;
          case "left":
          case "right":
            return ut ? as : Wi;
          default:
            return [];
        }
      }(je(b), D === "start", W);
      return I && (P = P.map((F) => F + "-" + I), R && (P = P.concat(P.map(ji)))), P;
    }(r, p, f, _));
    const C = [r, ...$], k = await Df(t, m), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(k[v]), c) {
      const { main: b, cross: R } = Uf(s, o, _);
      M.push(k[b], k[R]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let D = "bottom";
      switch (d) {
        case "bestFit": {
          var O;
          const W = (O = N.map((I) => [I, I.overflows.filter((P) => P > 0).reduce((P, F) => P + F, 0)]).sort((I, P) => I[1] - P[1])[0]) == null ? void 0 : O[0].placement;
          W && (D = W);
          break;
        }
        case "initialPlacement":
          D = r;
      }
      if (s !== D)
        return { reset: { placement: D } };
    }
    return {};
  } };
}, jf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = je(a), d = is(a), f = Mi(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, m = c && f ? -1 : 1, v = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return d && typeof $ == "number" && (_ = d === "end" ? -1 * $ : $), f ? { x: _ * m, y: w * p } : { x: w * p, y: _ * m };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function lt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
  return lt(e).getComputedStyle(e);
}
function le(e) {
  return kc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ms;
function $c() {
  if (ms)
    return ms;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ms = e.brands.map((t) => t.brand + "/" + t.version).join(" "), ms) : navigator.userAgent;
}
function Gt(e) {
  return e instanceof lt(e).HTMLElement;
}
function gt(e) {
  return e instanceof lt(e).Element;
}
function kc(e) {
  return e instanceof lt(e).Node;
}
function Na(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof lt(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ei(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = $t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Gf(e) {
  return ["table", "td", "th"].includes(le(e));
}
function xo(e) {
  const t = /firefox/i.test($c()), n = $t(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function Cc() {
  return !/^((?!chrome|android).)*safari/i.test($c());
}
function Ar(e) {
  return ["html", "body", "#document"].includes(le(e));
}
const Aa = Math.min, Pn = Math.max, Zs = Math.round;
function Sc(e) {
  const t = $t(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Zs(n) !== i || Zs(s) !== o;
  return r && (n = i, s = o), { width: n, height: s, fallback: r };
}
function Mc(e) {
  return gt(e) ? e : e.contextElement;
}
const Ec = { x: 1, y: 1 };
function Ge(e) {
  const t = Mc(e);
  if (!Gt(t))
    return Ec;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: o } = Sc(t);
  let r = (o ? Zs(n.width) : n.width) / s, a = (o ? Zs(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Me(e, t, n, s) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = Mc(e);
  let l = Ec;
  t && (s ? gt(s) && (l = Ge(s)) : l = Ge(e));
  const h = a ? lt(a) : window, c = !Cc() && n;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, f = r.width / l.x, p = r.height / l.y;
  if (a) {
    const m = lt(a), v = s && gt(s) ? lt(s) : s;
    let w = m.frameElement;
    for (; w && s && v !== m; ) {
      const _ = Ge(w), $ = w.getBoundingClientRect(), C = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(C.paddingLeft)) * _.x, $.y += (w.clientTop + parseFloat(C.paddingTop)) * _.y, u *= _.x, d *= _.y, f *= _.x, p *= _.y, u += $.x, d += $.y, w = lt(w).frameElement;
    }
  }
  return { width: f, height: p, top: d, right: u + f, bottom: d + p, left: u, x: u, y: d };
}
function re(e) {
  return ((kc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ti(e) {
  return gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Tc(e) {
  return Me(re(e)).left + Ti(e).scrollLeft;
}
function Yf(e, t, n) {
  const s = Gt(t), i = re(t), o = Me(e, !0, n === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((le(t) !== "body" || Ei(i)) && (r = Ti(t)), Gt(t)) {
      const l = Me(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Tc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function jn(e) {
  if (le(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Na(e) ? e.host : null) || re(e);
  return Na(t) ? t.host : t;
}
function La(e) {
  return Gt(e) && $t(e).position !== "fixed" ? e.offsetParent : null;
}
function Wa(e) {
  const t = lt(e);
  let n = La(e);
  for (; n && Gf(n) && $t(n).position === "static"; )
    n = La(n);
  return n && (le(n) === "html" || le(n) === "body" && $t(n).position === "static" && !xo(n)) ? t : n || function(s) {
    let i = jn(s);
    for (; Gt(i) && !Ar(i); ) {
      if (xo(i))
        return i;
      i = jn(i);
    }
    return null;
  }(e) || t;
}
function Rc(e) {
  const t = jn(e);
  return Ar(t) ? e.ownerDocument.body : Gt(t) && Ei(t) ? t : Rc(t);
}
function Dn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Rc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = lt(s);
  return i ? t.concat(o, o.visualViewport || [], Ei(s) ? s : []) : t.concat(s, Dn(s));
}
function Pa(e, t, n) {
  return t === "viewport" ? Xs(function(s, i) {
    const o = lt(s), r = re(s), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = Cc();
      (d || !d && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : gt(t) ? function(s, i) {
    const o = Me(s, !0, i === "fixed"), r = o.top + s.clientTop, a = o.left + s.clientLeft, l = Gt(s) ? Ge(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, d = r * l.y;
    return { top: d, left: u, right: u + h, bottom: d + c, x: u, y: d, width: h, height: c };
  }(t, n) : Xs(function(s) {
    var i;
    const o = re(s), r = Ti(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Pn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Pn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -r.scrollLeft + Tc(s);
    const u = -r.scrollTop;
    return $t(a || o).direction === "rtl" && (c += Pn(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(re(e)));
}
const Kf = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let d = Dn(h).filter((v) => gt(v) && le(v) !== "body"), f = null;
    const p = $t(h).position === "fixed";
    let m = p ? jn(h) : h;
    for (; gt(m) && !Ar(m); ) {
      const v = $t(m), w = xo(m);
      (p ? w || f : w || v.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = v : d = d.filter((_) => _ !== m), m = jn(m);
    }
    return c.set(h, d), d;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = Pa(t, c, i);
    return h.top = Pn(u.top, h.top), h.right = Aa(u.right, h.right), h.bottom = Aa(u.bottom, h.bottom), h.left = Pn(u.left, h.left), h;
  }, Pa(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Gt(n), o = re(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((le(n) !== "body" || Ei(o)) && (r = Ti(n)), Gt(n))) {
    const h = Me(n);
    a = Ge(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: gt, getDimensions: function(e) {
  return Sc(e);
}, getOffsetParent: Wa, getDocumentElement: re, getScale: Ge, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Wa, o = this.getDimensions;
  return { reference: Yf(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => $t(e).direction === "rtl" };
function Xf(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || o ? [...gt(e) ? Dn(e) : e.contextElement ? Dn(e.contextElement) : [], ...Dn(t)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", n, { passive: !0 }), o && f.addEventListener("resize", n);
  });
  let c, u = null;
  if (r) {
    let f = !0;
    u = new ResizeObserver(() => {
      f || n(), f = !1;
    }), gt(e) && !a && u.observe(e), gt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let d = a ? Me(e) : null;
  return a && function f() {
    const p = Me(e);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, c = requestAnimationFrame(f);
  }(), n(), () => {
    var f;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), o && p.removeEventListener("resize", n);
    }), (f = u) == null || f.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Jf = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Kf, ...n }, o = { ...i.platform, _c: s };
  return Pf(e, t, { ...i, platform: o });
};
var Lr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Lr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), G = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ee = (e, t, n, s) => (Lr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), xt = (e, t, n) => (Lr(e, t, "access private method"), n), In, On, Mn, Fe, ot, $o, Qs, Ri, Wr, Pr, Nc, ko, Ac, Dr, Lc, Ir, Wc, Or, Pc, Co, Dc, Hr, Ic, Hn, So, Oc;
const Ue = class extends ht {
  constructor() {
    super(...arguments), G(this, Ri), G(this, Pr), G(this, ko), G(this, Dr), G(this, Ir), G(this, Or), G(this, Co), G(this, Hr), G(this, So), G(this, In, !1), G(this, On, void 0), G(this, Mn, 0), G(this, Fe, void 0), G(this, ot, void 0), G(this, $o, void 0), G(this, Qs, void 0), this.hideLater = () => {
      U(this, Hn).call(this), Ee(this, Mn, window.setTimeout(this.hide.bind(this), 100));
    }, G(this, Hn, () => {
      clearTimeout(U(this, Mn)), Ee(this, Mn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = U(this, Fe)) == null ? void 0 : e.classList.contains(Ue.CLASS_SHOW);
  }
  get tooltip() {
    return U(this, Fe) || xt(this, ko, Ac).call(this);
  }
  get trigger() {
    return U(this, $o) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${Ue.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !U(this, In) && this.isHover && xt(this, So, Oc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ue.CLASS_SHOW), xt(this, Co, Dc).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, Qs)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Fe)) == null || t.classList.remove(Ue.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    U(this, In) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", U(this, Hn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e || {}, n = this.getAll().entries(), s = new Set(t || []);
    for (const [i, o] of n)
      s.has(i) || o.hide();
  }
};
let kt = Ue;
In = /* @__PURE__ */ new WeakMap();
On = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
ot = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakMap();
Qs = /* @__PURE__ */ new WeakMap();
Ri = /* @__PURE__ */ new WeakSet();
Wr = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
Pr = /* @__PURE__ */ new WeakSet();
Nc = function() {
  const e = xt(this, Ri, Wr).call(this);
  return Ee(this, ot, document.createElement("div")), U(this, ot).style.position = this.options.strategy, U(this, ot).style.width = `${e}px`, U(this, ot).style.height = `${e}px`, U(this, ot).style.transform = "rotate(45deg)", U(this, ot);
};
ko = /* @__PURE__ */ new WeakSet();
Ac = function() {
  var n;
  const e = Ue.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(xt(this, Pr, Nc).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Ee(this, Fe, t), t;
};
Dr = /* @__PURE__ */ new WeakSet();
Lc = function() {
  var i;
  const e = xt(this, Ri, Wr).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [jf(e), qf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, ot) && ((i = s.middleware) == null || i.push(Bf({ element: U(this, ot) }))), s;
};
Ir = /* @__PURE__ */ new WeakSet();
Wc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Or = /* @__PURE__ */ new WeakSet();
Pc = function(e) {
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
Co = /* @__PURE__ */ new WeakSet();
Dc = function() {
  const e = xt(this, Dr, Lc).call(this), t = xt(this, Hr, Ic).call(this);
  Ee(this, Qs, Xf(t, this.tooltip, () => {
    Jf(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: o }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const r = o.split("-")[0], a = xt(this, Ir, Wc).call(this, r);
      if (i.arrow && U(this, ot)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, ot).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, ot).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...xt(this, Or, Pc).call(this, r)
        });
      }
    });
  }));
};
Hr = /* @__PURE__ */ new WeakSet();
Ic = function() {
  return U(this, On) || Ee(this, On, {
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
  }), U(this, On);
};
Hn = /* @__PURE__ */ new WeakMap();
So = /* @__PURE__ */ new WeakSet();
Oc = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", U(this, Hn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Ee(this, In, !0);
};
kt.NAME = "tooltip";
kt.TOOLTIP_CLASS = "tooltip";
kt.CLASS_SHOW = "show";
kt.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
kt.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, kt.MENU_SELECTOR);
  if (n) {
    const i = kt.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    kt.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, kt.MENU_SELECTOR);
  if (!n)
    return;
  const s = kt.ensure(n);
  s.isHover && s.show();
});
function Zf({
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
  trailingIcon: d,
  hint: f,
  checked: p,
  actions: m,
  show: v,
  level: w = 0,
  items: _,
  ...$
}) {
  const C = Array.isArray(m) ? { items: m } : m;
  return C && (C.btnProps || (C.btnProps = { size: "sm" }), C.className = T("tree-actions not-nested-toggle", C.className)), /* @__PURE__ */ g(
    "div",
    {
      className: T("tree-item-content", n, { disabled: a, active: l }),
      title: f,
      "data-target": u,
      style: Object.assign({ paddingLeft: `${w * 20}px` }, i),
      "data-level": w,
      ...o,
      ...$,
      children: [
        /* @__PURE__ */ g("span", { class: `tree-toggle-icon${_ ? " state" : ""}`, children: _ ? /* @__PURE__ */ g("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof p == "boolean" ? /* @__PURE__ */ g("div", { class: `tree-checkbox checkbox-primary${p ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
        /* @__PURE__ */ g(Un, { icon: h, className: "tree-icon" }),
        r ? /* @__PURE__ */ g("a", { className: "text tree-link not-nested-toggle", href: r, children: c }) : /* @__PURE__ */ g("span", { class: "text", children: c }),
        typeof s == "function" ? s() : s,
        C ? /* @__PURE__ */ g(wt, { ...C }) : null,
        /* @__PURE__ */ g(Un, { icon: d, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Br = class extends _i {
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
Br.ItemComponents = {
  item: Zf
};
Br.NAME = "tree";
class Hc extends et {
}
Hc.NAME = "Tree";
Hc.Component = Br;
var Qn, ui, fi, di;
class Qf extends V {
  constructor(n) {
    super(n);
    L(this, Qn, Ct());
    L(this, ui, (n) => {
      n.stopPropagation(), pt.show({
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
    L(this, fi, (n) => {
      var o, r, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = n.dataTransfer) == null || o.setData("application/id", this.props.block.id), (a = (r = this.props).onDragStart) == null || a.call(r, n);
    });
    L(this, di, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
    this.state = { content: /* @__PURE__ */ g("div", { class: "dashboard-block-body", children: n.block.content }) };
  }
  get element() {
    return E(this, Qn).current;
  }
  componentDidMount() {
    this.load(), y(this.element).on("load.zui.dashboard", this.load.bind(this));
  }
  componentWillUnmount() {
    y(this.element).off("load.zui.dashboard");
  }
  load() {
    const { block: n } = this.props;
    let s = n.fetch;
    if (!s || this.state.loading)
      return;
    typeof s == "string" ? s = { url: s } : typeof s == "function" && (s = s(n.id, n));
    const { url: i, ...o } = s;
    this.setState({ loading: !0 }, () => {
      fetch(it(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g($l, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ g("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          r.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: o, style: r, block: a } = this.props, { title: l, menu: h, id: c } = a, { loading: u, content: d, dragging: f } = this.state;
    return /* @__PURE__ */ g("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: o, ...r }, children: /* @__PURE__ */ g(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${f ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: E(this, fi),
        onDragEnd: E(this, di),
        "data-id": c,
        ref: E(this, Qn),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, ui), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          d
        ]
      }
    ) });
  }
}
Qn = new WeakMap(), ui = new WeakMap(), fi = new WeakMap(), di = new WeakMap();
var Bc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ft = (e, t, n) => (Bc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vt = (e, t, n) => (Bc(e, t, "access private method"), n), Yt, zr, zc, Fr, Fc, Mo, Uc, Ur, Vc, ti, Eo, Ni, To, Vr, qc, Ro, No, Ai, qr;
const jr = class extends V {
  constructor() {
    super(...arguments), dt(this, zr), dt(this, Fr), dt(this, Mo), dt(this, Ur), dt(this, ti), dt(this, Ni), dt(this, Vr), dt(this, Yt, /* @__PURE__ */ new Map()), this.state = {}, dt(this, Ro, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), dt(this, No, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = vt(this, Mo, Uc).call(this), { cellHeight: n, grid: s } = this.props, i = Ft(this, Yt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((o, r) => {
      const { id: a } = o, [l, h, c, u] = i.get(a) || [0, 0, o.width, o.height];
      return /* @__PURE__ */ g(
        Qf,
        {
          id: a,
          index: r,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: o,
          moreMenu: !0,
          onDragStart: Ft(this, Ro),
          onDragEnd: Ft(this, No)
        },
        o.id
      );
    }) }) });
  }
};
let Gr = jr;
Yt = /* @__PURE__ */ new WeakMap();
zr = /* @__PURE__ */ new WeakSet();
zc = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Fr = /* @__PURE__ */ new WeakSet();
Fc = function() {
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
    } = i, [d, f] = vt(this, zr, zc).call(this, r);
    return {
      id: `${o}`,
      width: d,
      height: f,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...u
    };
  });
};
Mo = /* @__PURE__ */ new WeakSet();
Uc = function() {
  Ft(this, Yt).clear();
  let e = 0;
  const t = vt(this, Fr, Fc).call(this);
  return t.forEach((n) => {
    vt(this, Ur, Vc).call(this, n);
    const [, s, , i] = Ft(this, Yt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Ur = /* @__PURE__ */ new WeakSet();
Vc = function(e) {
  const t = Ft(this, Yt), { id: n, left: s, top: i, width: o, height: r } = e;
  if (s < 0 || i < 0) {
    const [a, l] = vt(this, Vr, qc).call(this, o, r, s, i);
    t.set(n, [a, l, o, r]);
  } else
    vt(this, Ni, To).call(this, n, [s, i, o, r]);
};
ti = /* @__PURE__ */ new WeakSet();
Eo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Ft(this, Yt).entries())
    if (s !== n && vt(t = jr, Ai, qr).call(t, i, e))
      return !1;
  return !0;
};
Ni = /* @__PURE__ */ new WeakSet();
To = function(e, t) {
  var n;
  Ft(this, Yt).set(e, t);
  for (const [s, i] of Ft(this, Yt).entries())
    s !== e && vt(n = jr, Ai, qr).call(n, i, t) && (i[1] = t[1] + t[3], vt(this, Ni, To).call(this, s, i));
};
Vr = /* @__PURE__ */ new WeakSet();
qc = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (vt(this, ti, Eo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, o = s < 0 ? 0 : s, r = !1;
  const a = this.props.grid;
  for (; !r; ) {
    if (vt(this, ti, Eo).call(this, [i, o, e, t])) {
      r = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, o += 1)) : o += 1;
  }
  return [i, o];
};
Ro = /* @__PURE__ */ new WeakMap();
No = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakSet();
qr = function([e, t, n, s], [i, o, r, a]) {
  return !(e + n <= i || i + r <= e || t + s <= o || o + a <= t);
};
dt(Gr, Ai);
Gr.defaultProps = {
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
class jc extends et {
}
jc.NAME = "Dashboard";
jc.Component = Gr;
var ne, se;
class Da extends V {
  constructor(n) {
    super(n);
    L(this, ne, void 0);
    L(this, se, void 0);
    B(this, ne, 0), B(this, se, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (E(this, ne) && cancelAnimationFrame(E(this, ne)), B(this, ne, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), B(this, ne, 0);
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
    n && (B(this, se, typeof n == "string" ? document : n.current), E(this, se).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, se) && E(this, se).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: u, scrollPos: d } = this, { dragStart: f } = this.state, p = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...r
    }, m = {};
    return s === "horz" ? (p.height = i, p.width = n, m.width = this.barSize, m.left = Math.round(Math.min(u, d) * (n - m.width) / u)) : (p.width = i, p.height = n, m.height = this.barSize, m.top = Math.round(Math.min(u, d) * (n - m.height) / u)), /* @__PURE__ */ g(
      "div",
      {
        className: T("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: p,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ g(
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
ne = new WeakMap(), se = new WeakMap();
function Gc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, ...h }) {
  var O;
  const c = {
    left: e.left,
    width: e.realWidth,
    height: n,
    ...r
  }, { align: u, border: d } = e.setting, f = {
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...e.setting.cellStyle,
    ...o
  }, p = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": d === !0 || d === "left",
    "has-border-right": d === !0 || d === "right"
  }], m = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, $ = [], C = [], k = {}, M = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Q(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : C;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : f, b.style), b.className && (b.outer ? p : m).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? k : M, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
    } else
      C.push(b);
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
        C.length > 0 && /* @__PURE__ */ g(A, { className: T(m), style: f, ...M, children: C }),
        $
      ]
    }
  );
}
function Gi({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: a = Gc, onRenderCell: l }) {
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
function Yc({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  CellComponent: l = Gc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ g(
    Gi,
    {
      className: "dtable-fixed-left",
      cols: i.list,
      width: i.width,
      row: e,
      CellComponent: l,
      onRenderCell: h
    }
  ));
  let f = null;
  o.list.length && (f = /* @__PURE__ */ g(
    Gi,
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
    Gi,
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
  const m = { top: n, height: s, lineHeight: `${s - 2}px`, ...c };
  return /* @__PURE__ */ g(
    "div",
    {
      className: T("dtable-row", t),
      style: m,
      "data-id": e.id,
      ...u,
      children: [
        d,
        f,
        p
      ]
    }
  );
}
function td({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(Yc, { ...s }) });
}
function ed({
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
    return u && Object.assign(c, u), /* @__PURE__ */ g(Yc, { ...c }, h.id);
  }) });
}
const ei = /* @__PURE__ */ new Map(), ni = [];
function Kc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && ei.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ei.set(n, e), t != null && t.buildIn && !ni.includes(n) && ni.push(n);
}
function ue(e, t) {
  Kc(e, t);
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
function Xc(e) {
  return ei.delete(e);
}
function nd(e) {
  if (typeof e == "string") {
    const t = ei.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Jc(e, t, n) {
  return t.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = nd(s);
    i && (n.has(i.name) || ((o = i.plugins) != null && o.length && Jc(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function sd(e = [], t = !0) {
  return t && ni.length && e.unshift(...ni), e != null && e.length ? Jc([], e, /* @__PURE__ */ new Set()) : [];
}
function Zc() {
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
function id(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Ia(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Yi(e, t = !1) {
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
function od(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Ia(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
  }, d = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, f = [], p = {};
  let m = !1;
  const v = [], w = {};
  if (n.forEach((_) => {
    const { colTypes: $, onAddCol: C } = _;
    $ && Object.entries($).forEach(([k, M]) => {
      w[k] || (w[k] = []), w[k].push(M);
    }), C && v.push(C);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: $ = "", name: C } = _, k = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ..._,
      type: $
    }, M = {
      name: C,
      type: $,
      setting: k,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: f.length
    }, N = w[$];
    N && N.forEach((I) => {
      const P = typeof I == "function" ? I.call(e, k) : I;
      P && Object.assign(k, P, _);
    });
    const { fixed: A, flex: O, minWidth: b = o, maxWidth: R = r } = k, D = Ia(k.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = id(D < 1 ? Math.round(D * s) : D, b, R), v.forEach((I) => I.call(e, M)), f.push(M), p[M.name] = M;
    const W = A ? A === "left" ? u : d : c;
    W.list.push(M), W.totalWidth += M.width, W.width = W.totalWidth, M.flex && W.flexList.push(M), typeof k.order == "number" && (m = !0);
  }), m) {
    const _ = ($, C) => ($.setting.order ?? 0) - (C.setting.order ?? 0);
    f.sort(_), u.list.sort(_), c.list.sort(_), d.list.sort(_);
  }
  return Yi(u, !0), Yi(d, !0), c.widthSetting = s - u.width - d.width, Yi(c), {
    list: f,
    map: p,
    left: u,
    center: c,
    right: d
  };
}
var Yr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, S = (e, t, n) => (Yr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Yr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lt = (e, t, n) => (Yr(e, t, "access private method"), n), He, En, $e, Ht, we, J, Pt, At, Tn, As, si, Zt, Rn, Nn, Ao, Qc, Lo, th, Wo, eh, Po, nh, Ls, Do, Kr, Xr, Li, ii, Io, Oo, Jr, sh, Zr, ih, Ho, oh;
let Qr = class extends V {
  constructor(t) {
    super(t), H(this, Ao), H(this, Lo), H(this, Wo), H(this, Po), H(this, Ls), H(this, Jr), H(this, Zr), H(this, Ho), this.ref = Ct(), H(this, He, 0), H(this, En, void 0), H(this, $e, !1), H(this, Ht, void 0), H(this, we, void 0), H(this, J, []), H(this, Pt, void 0), H(this, At, /* @__PURE__ */ new Map()), H(this, Tn, {}), H(this, As, void 0), H(this, si, []), this.updateLayout = () => {
      S(this, He) && cancelAnimationFrame(S(this, He)), Y(this, He, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, He, 0);
      }));
    }, H(this, Zt, (n, s) => {
      s = s || n.type;
      const i = S(this, At).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), H(this, Rn, (n) => {
      S(this, Zt).call(this, n, `window_${n.type}`);
    }), H(this, Nn, (n) => {
      S(this, Zt).call(this, n, `document_${n.type}`);
    }), H(this, Kr, (n, s) => {
      if (this.options.onRenderRow) {
        const i = this.options.onRenderRow.call(this, n, s);
        i && Object.assign(n.props, i);
      }
      return S(this, J).forEach((i) => {
        if (i.onRenderRow) {
          const o = i.onRenderRow.call(this, n, s);
          o && Object.assign(n.props, o);
        }
      }), n.props;
    }), H(this, Xr, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Li, (n, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), n[0] = s.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), r.setting[a] && (n = r.setting[a].call(this, n, s, i)), n;
    }), H(this, ii, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Io, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: o, element: r }), S(this, J).forEach((d) => {
          var f;
          (f = d.onHeaderCellClick) == null || f.call(this, n, { colName: o, element: r });
        }));
      else {
        const { rowElement: d } = s, f = this.layout.visibleRows.find((p) => p.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
            return;
          for (const p of S(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: o, rowID: i, rowInfo: f, element: r, rowElement: d })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
          return;
        for (const p of S(this, J))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: f, element: d })) === !0)
            return;
      }
    }), H(this, Oo, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, En, t.id ?? `dtable-${Ql(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, we, Object.freeze(sd(t.plugins))), S(this, we).forEach((n) => {
      var r;
      const { methods: s, data: i, state: o } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Tn), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = n.onCreate) == null || r.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = S(this, Pt)) == null ? void 0 : t.options) || S(this, Ht) || Zc();
  }
  get plugins() {
    return S(this, J);
  }
  get layout() {
    return S(this, Pt);
  }
  get id() {
    return S(this, En);
  }
  get data() {
    return S(this, Tn);
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.ref.current) == null ? void 0 : t.parentElement);
  }
  componentWillReceiveProps() {
    Y(this, Ht, void 0);
  }
  componentDidMount() {
    if (S(this, $e) ? this.forceUpdate() : Lt(this, Ls, Do).call(this), S(this, J).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, Io)), this.on("keydown", S(this, Oo)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, As, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, J).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, $e) ? Lt(this, Ls, Do).call(this) : S(this, J).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, As)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of S(this, At).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, Rn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Nn)) : t.removeEventListener(s, S(this, Zt));
    S(this, J).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), S(this, we).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), Y(this, Tn, {}), S(this, At).clear();
  }
  on(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = S(this, At).get(t);
    i ? i.push(n) : (S(this, At).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), S(this, Rn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), S(this, Nn)) : (o = this.ref.current) == null || o.addEventListener(t, S(this, Zt)));
  }
  off(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = S(this, At).get(t);
    if (!i)
      return;
    const o = i.indexOf(n);
    o >= 0 && i.splice(o, 1), i.length || (S(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), S(this, Rn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), S(this, Nn)) : (r = this.ref.current) == null || r.removeEventListener(t, S(this, Zt)));
  }
  emitCustomEvent(t, n) {
    S(this, Zt).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: u, scrollTop: d } = t;
    if (c === "up" || c === "down")
      d = i + (c === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (c === "left" || c === "right")
      u = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      d = 0;
    else if (c === "bottom")
      d = o - r;
    else if (c === "begin")
      u = 0;
    else if (c === "end")
      u = l - h;
    else {
      const { offsetLeft: p, offsetTop: m } = t;
      typeof p == "number" && (u = s + p), typeof m == "number" && (u = i + m);
    }
    const f = {};
    return typeof u == "number" && (u = Math.max(0, Math.min(u, l - h)), u !== s && (f.scrollLeft = u)), typeof d == "number" && (d = Math.max(0, Math.min(d, o - r)), d !== i && (f.scrollTop = d)), Object.keys(f).length ? (this.setState(f, () => {
      var p;
      (p = this.options.onScroll) == null || p.call(this, f), n == null || n.call(this, !0);
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
    if (!S(this, Ht))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      Y(this, Pt, void 0);
    else if (s === "options") {
      if (Y(this, Ht, void 0), !S(this, Pt))
        return;
      Y(this, Pt, void 0);
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
    return qt(S(this, si), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Lt(this, Ho, oh).call(this), { className: n, rowHover: s, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      Lt(this, Ao, Qc).call(this, t),
      Lt(this, Lo, th).call(this, t),
      Lt(this, Wo, eh).call(this, t),
      Lt(this, Po, nh).call(this, t)
    ), S(this, J).forEach((d) => {
      var p;
      const f = (p = d.onRender) == null ? void 0 : p.call(this, t);
      f && (f.style && Object.assign(h, f.style), f.className && c.push(f.className), f.children && u.push(f.children));
    })), /* @__PURE__ */ g(
      "div",
      {
        id: S(this, En),
        className: T(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: u
      }
    );
  }
};
He = /* @__PURE__ */ new WeakMap();
En = /* @__PURE__ */ new WeakMap();
$e = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
we = /* @__PURE__ */ new WeakMap();
J = /* @__PURE__ */ new WeakMap();
Pt = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
As = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
Zt = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Ao = /* @__PURE__ */ new WeakSet();
Qc = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      td,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: S(this, Li),
        onRenderRow: S(this, Xr)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    sr,
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
Lo = /* @__PURE__ */ new WeakSet();
th = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    ed,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: S(this, Li),
      onRenderRow: S(this, Kr)
    },
    "rows"
  );
};
Wo = /* @__PURE__ */ new WeakSet();
eh = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    sr,
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
Po = /* @__PURE__ */ new WeakSet();
nh = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: d } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ g(
      Da,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: o,
        clientSize: i,
        onScroll: S(this, ii),
        left: s,
        bottom: (d === "inside" ? 0 : -u) + h,
        size: u,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      Da,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, ii),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Ls = /* @__PURE__ */ new WeakSet();
Do = function() {
  var e;
  Y(this, $e, !1), (e = this.options.afterRender) == null || e.call(this), S(this, J).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Kr = /* @__PURE__ */ new WeakMap();
Xr = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
Io = /* @__PURE__ */ new WeakMap();
Oo = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakSet();
sh = function() {
  if (S(this, Ht))
    return !1;
  const t = { ...Zc(), ...S(this, we).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, S(this, we).reduce((n, s) => {
    const { when: i, options: o } = s;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), n.push(s)), n;
  }, [])), Y(this, Ht, t), Y(this, si, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Zr = /* @__PURE__ */ new WeakSet();
ih = function() {
  var A, O;
  const { plugins: e } = this;
  let t = S(this, Ht);
  const n = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((b) => {
    var D;
    const R = (D = b.beforeLayout) == null ? void 0 : D.call(this, t);
    R && (t = { ...t, ...R }), Object.assign(n, b.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: b } = this;
    if (b)
      i = b.clientWidth;
    else {
      Y(this, $e, !0);
      return;
    }
  }
  const o = od(this, t, e, i), { data: r, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, D) => {
    var I, P;
    const W = { data: D ?? { [a]: b }, id: b, index: h.length, top: 0 };
    if (D || (W.lazy = !0), h.push(W), ((I = t.onAddRow) == null ? void 0 : I.call(this, W, R)) !== !1) {
      for (const F of e)
        if (((P = F.onAddRow) == null ? void 0 : P.call(this, W, R)) === !1)
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
  const d = {};
  if (t.onAddRows) {
    const b = t.onAddRows.call(this, u);
    b && (u = b);
  }
  for (const b of e) {
    const R = (A = b.onAddRows) == null ? void 0 : A.call(this, u);
    R && (u = R);
  }
  u.forEach((b, R) => {
    d[b.id] = b, b.index = R, b.top = b.index * l;
  });
  const { header: f, footer: p } = t, m = f ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
  let w = t.height, _ = 0;
  const $ = u.length * l, C = m + v + $;
  if (typeof w == "function" && (w = w.call(this, C)), w === "auto")
    _ = C;
  else if (typeof w == "object")
    _ = Math.min(w.max, Math.max(w.min, C));
  else if (w === "100%") {
    const { parent: b } = this;
    if (b)
      _ = b.clientHeight;
    else {
      _ = 0, Y(this, $e, !0);
      return;
    }
  } else
    _ = w;
  const k = _ - m - v, M = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: u,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: $,
    header: f,
    footer: p,
    footerGenerators: n,
    headerHeight: m,
    footerHeight: v,
    cols: o
  }, N = (O = t.onLayout) == null ? void 0 : O.call(this, M);
  N && Object.assign(M, N), e.forEach((b) => {
    if (b.onLayout) {
      const R = b.onLayout.call(this, M);
      R && Object.assign(M, R);
    }
  }), Y(this, Pt, M);
};
Ho = /* @__PURE__ */ new WeakSet();
oh = function() {
  (Lt(this, Jr, sh).call(this) || !S(this, Pt)) && Lt(this, Zr, ih).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = e, l = Math.min(Math.max(0, i - o), this.state.scrollTop), h = Math.floor(l / a), c = l + o, u = Math.min(r.length, Math.ceil(c / a)), d = [], { rowDataGetter: f } = this.options;
  for (let p = h; p < u; p++) {
    const m = r[p];
    m.lazy && f && (m.data = f([m.id])[0], m.lazy = !1), d.push(m);
  }
  return e.visibleRows = d, e.scrollTop = l, e.scrollLeft = n, e;
};
Qr.addPlugin = Kc;
Qr.removePlugin = Xc;
function Oa(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const rd = {
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
      Oa(this, s);
    },
    mouseleave() {
      Oa(this, !1);
    }
  }
}, ad = ue(rd, { buildIn: !0 });
function ld(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, c) => {
    const u = o ? o.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !rh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function cd(e) {
  return this.state.checkedRows[e] ?? !1;
}
function rh() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (n.call(this, r.id) ? 1 : 0), 0)) : t === e;
}
function hd() {
  return Object.keys(this.state.checkedRows);
}
function ud(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Ha(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const fd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Ha
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
    toggleCheckRows: ld,
    isRowChecked: cd,
    isAllRowChecked: rh,
    getChecks: hd,
    toggleCheckable: ud
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Ha(e) })
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
    const n = y(e.target);
    if (!n.length || n.closest("btn,a,button").length)
      return;
    (n.closest('input[type="checkbox"],.dtable-checkbox').not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, dd = ue(fd);
var ah = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(ah || {});
function oi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = oi.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? oi.call(this, t.parent).level + 1 : 0, t;
}
function pd(e) {
  return e !== void 0 ? oi.call(this, e) : this.data.nestedMap;
}
function md(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !lh.call(this)), t) {
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
function lh() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function ch(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const r = e.get(o);
    r && (r.level === s && (r.order = t++), (i = r.children) != null && i.length && (t = ch(e, t, r.children, s + 1)));
  }
  return t;
}
function hh(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = n, hh(e, o, n, s);
  }), i;
}
function uh(e, t, n, s, i) {
  var a;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), o.parent && uh(e, o.parent, n, s, i);
}
const gd = {
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
        const r = hh(this, i, o, s);
        r != null && r.parent && uh(this, r.parent, o, s, n);
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
    getNestedInfo: pd,
    toggleRow: md,
    isAllCollapsed: lh,
    getNestedRowInfo: oi
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
    ), ch(this.data.nestedMap), e.sort((t, n) => {
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
}, yd = ue(gd);
function fh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...o } = e, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ g("a", { href: it(i, t.row.data), ...s, ...o, ...a, children: n });
}
function ta(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : it(e, n);
}
function dh(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), yo(n, e, s ?? n));
}
function ph(e, t) {
  const { link: n } = t.col.setting, s = fh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function mh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ta(n, t, e[0])), e;
}
function gh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function yh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = dh(s, t, e[0], i), e;
}
function Bo(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : ta(s, t, i);
  return e[0] = {
    html: o
  }, e;
}
const wd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Bo(e, t, !0);
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
    if (n && (e = yh(e, t, n)), e = gh(e, t), e = mh(e, t), s ? e = Bo(e, t) : e = ph(e, t), i) {
      let o = e[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = it(i, t.row.data)), e.push({ attrs: { title: o } });
    }
    return e;
  }
}, vd = ue(wd, { buildIn: !0 });
function Ki(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ g(tc, { ...u }), n.type === "avatarBtn") {
    const { avatarBtnProps: d } = n.setting, f = typeof d == "function" ? d(n, t) : d;
    e[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...f, children: [
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
const _d = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Ki
    },
    avatarBtn: {
      onRenderCell: Ki
    },
    avatarName: {
      onRenderCell: Ki
    }
  }
}, bd = ue(_d, { buildIn: !0 }), xd = {
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
        e[0] = /* @__PURE__ */ g("a", { href: it(a, { ...n.setting, sortType: r }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, $d = ue(xd, { buildIn: !0 }), Xi = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, kd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Xi(t.left.list), Xi(t.center.list), Xi(t.right.list);
  }
}, Cd = ue(kd), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ah,
  avatar: bd,
  checkable: dd,
  colHover: ad,
  group: Cd,
  nested: yd,
  renderDatetime: dh,
  renderDatetimeCell: yh,
  renderFormat: ta,
  renderFormatCell: mh,
  renderHtmlCell: Bo,
  renderLink: fh,
  renderLinkCell: ph,
  renderMapCell: gh,
  rich: vd,
  sortType: $d
}, Symbol.toStringTag, { value: "Module" }));
class os extends et {
}
os.NAME = "DTable";
os.Component = Qr;
os.definePlugin = ue;
os.removePlugin = Xc;
os.plugins = Sd;
var wh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ba = (e, t, n) => (wh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Md = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, za = (e, t, n, s) => (wh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Be;
const Ed = "nav", zo = '[data-toggle="tab"]', Td = "active";
class vh extends ht {
  constructor() {
    super(...arguments), Md(this, Be, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(zo);
    let i = t ? y(t).first() : s.filter(`.${Td}`);
    if (!i.length && (i = n.find(zo).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = y(o);
    r.length && (r.parent().children(".tab-pane").removeClass("active in"), r.addClass("active"), Ba(this, Be) && clearTimeout(Ba(this, Be)), za(this, Be, setTimeout(() => {
      r.addClass("in"), za(this, Be, 0);
    }, 10)));
  }
}
Be = /* @__PURE__ */ new WeakMap();
vh.NAME = "Tabs";
y(document).on("click.tabs.zui", zo, (e) => {
  e.preventDefault();
  const t = y(e.target), n = t.closest(`.${Ed}`);
  n.length && vh.ensure(n).active(t);
});
y(() => {
  y(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  y as $,
  Ml as ActionMenu,
  Tl as ActionMenuNested,
  ec as Avatar,
  Jl as BtnGroup,
  ht as Component,
  et as ComponentFromReact,
  pt as ContextMenu,
  sr as CustomRender,
  os as DTable,
  jc as Dashboard,
  oe as Dropdown,
  Zl as EventBus,
  bu as HElement,
  $l as HtmlContent,
  Un as Icon,
  Rl as Menu,
  mr as Messager,
  sc as Modal,
  Xt as ModalBase,
  ac as ModalTrigger,
  cc as Nav,
  hc as Pager,
  vc as Picker,
  _c as Popovers,
  Kl as ProgressCircle,
  V as ReactComponent,
  Xl as Switch,
  Wt as TIME_DAY,
  vh as Tabs,
  bc as Toolbar,
  kt as Tooltip,
  Hc as Tree,
  nf as Upload,
  Ta as calculateTimestamp,
  y as cash,
  T as classes,
  Nd as convertBytes,
  at as createDate,
  Su as createPortal,
  Ct as createRef,
  cu as deepGet,
  lu as deepGetPath,
  mu as delay,
  Ad as dom,
  hu as formatBytes,
  yo as formatDate,
  Kd as formatDateSpan,
  it as formatString,
  al as getClassList,
  Xd as getTimeBeforeDesc,
  q as h,
  Ld as hh,
  _u as htm,
  qt as i18n,
  Yd as isDBY,
  ss as isSameDay,
  _f as isSameMonth,
  Vd as isSameWeek,
  go as isSameYear,
  qd as isToday,
  Gd as isTomorrow,
  Q as isValidElement,
  jd as isYesterday,
  ka as nativeEvents,
  Fn as render,
  $u as renderCustomResult,
  of as store,
  ll as storeData,
  pu as takeData
};
//# sourceMappingURL=zui.js.map
