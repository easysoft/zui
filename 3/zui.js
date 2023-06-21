var Di = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var E = (e, t, n) => (Di(e, t, "read from private field"), n ? n.call(e) : t.get(e)), L = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, B = (e, t, n, s) => (Di(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var nt = (e, t, n) => (Di(e, t, "access private method"), n);
const Vt = document, Ps = window, Ua = Vt.documentElement, Te = Vt.createElement.bind(Vt), Va = Te("div"), Ii = Te("table"), xh = Te("tbody"), sa = Te("tr"), { isArray: mi, prototype: qa } = Array, { concat: $h, filter: Uo, indexOf: ja, map: Ga, push: kh, slice: Ya, some: Vo, splice: Ch } = qa, Sh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Mh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Eh = /<.+>/, Th = /^\w+$/;
function qo(e, t) {
  const n = Rh(t);
  return !e || !n && !ke(t) && !j(t) ? [] : !n && Mh.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Th.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class gi {
  constructor(t, n) {
    if (!t)
      return;
    if (Zi(t))
      return t;
    let s = t;
    if (tt(t)) {
      const i = n || Vt;
      if (s = Sh.test(t) && ke(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Eh.test(t) ? Ja(t) : Zi(i) ? i.find(t) : tt(i) ? y(i).find(t) : qo(t, i), !s)
        return;
    } else if (Re(t))
      return this.ready(t);
    (s.nodeType || s === Ps) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new gi(t, n);
  }
}
const x = gi.prototype, y = x.init;
y.fn = y.prototype = x;
x.length = 0;
x.splice = Ch;
typeof Symbol == "function" && (x[Symbol.iterator] = qa[Symbol.iterator]);
function Zi(e) {
  return e instanceof gi;
}
function rn(e) {
  return !!e && e === e.window;
}
function ke(e) {
  return !!e && e.nodeType === 9;
}
function Rh(e) {
  return !!e && e.nodeType === 11;
}
function j(e) {
  return !!e && e.nodeType === 1;
}
function Nh(e) {
  return !!e && e.nodeType === 3;
}
function Ah(e) {
  return typeof e == "boolean";
}
function Re(e) {
  return typeof e == "function";
}
function tt(e) {
  return typeof e == "string";
}
function at(e) {
  return e === void 0;
}
function Bn(e) {
  return e === null;
}
function Ka(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function jo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
y.isWindow = rn;
y.isFunction = Re;
y.isArray = mi;
y.isNumeric = Ka;
y.isPlainObject = jo;
function K(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (jo(e)) {
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
function Ds(...e) {
  const t = Ah(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return Ds(t, y, n);
  for (let i = 0; i < s; i++) {
    const o = e[i];
    for (const r in o)
      t && (mi(o[r]) || jo(o[r])) ? ((!n[r] || n[r].constructor !== o[r].constructor) && (n[r] = new o[r].constructor()), Ds(t, n[r], o[r])) : n[r] = o[r];
  }
  return n;
}
y.extend = Ds;
x.extend = function(e) {
  return Ds(x, e);
};
const Lh = /\S+/g;
function yi(e) {
  return tt(e) ? e.match(Lh) || [] : [];
}
x.toggleClass = function(e, t) {
  const n = yi(e), s = !at(t);
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
  const t = yi(e);
  return this.each((n, s) => {
    j(s) && K(t, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function Wh(e, t) {
  if (e) {
    if (tt(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !j(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Bn(n) ? void 0 : n;
      }
      return at(t) ? this : Bn(t) ? this.removeAttr(e) : this.each((n, s) => {
        j(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
x.attr = Wh;
x.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
x.hasClass = function(e) {
  return !!e && Vo.call(this, (t) => j(t) && t.classList.contains(e));
};
x.get = function(e) {
  return at(e) ? Ya.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
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
function Ph(e) {
  return at(e) ? this.get().map((t) => j(t) || Nh(t) ? t.textContent : "").join("") : this.each((t, n) => {
    j(n) && (n.textContent = e);
  });
}
x.text = Ph;
function qt(e, t, n) {
  if (!j(e))
    return;
  const s = Ps.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function bt(e, t) {
  return parseInt(qt(e, t), 10) || 0;
}
function ia(e, t) {
  return bt(e, `border${t ? "Left" : "Top"}Width`) + bt(e, `padding${t ? "Left" : "Top"}`) + bt(e, `padding${t ? "Right" : "Bottom"}`) + bt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Oi = {};
function Dh(e) {
  if (Oi[e])
    return Oi[e];
  const t = Te(e);
  Vt.body.insertBefore(t, null);
  const n = qt(t, "display");
  return Vt.body.removeChild(t), Oi[e] = n !== "none" ? n : "block";
}
function oa(e) {
  return qt(e, "display") === "none";
}
function Xa(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function wi(e) {
  return tt(e) ? (t, n) => Xa(n, e) : Re(e) ? e : Zi(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
x.filter = function(e) {
  const t = wi(e);
  return y(Uo.call(this, (n, s) => t.call(n, s, n)));
};
function ce(e, t) {
  return t ? e.filter(t) : e;
}
x.detach = function(e) {
  return ce(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Ih = /^\s*<(\w+)[^>]*>/, Oh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ra = {
  "*": Va,
  tr: xh,
  td: sa,
  th: sa,
  thead: Ii,
  tbody: Ii,
  tfoot: Ii
};
function Ja(e) {
  if (!tt(e))
    return [];
  if (Oh.test(e))
    return [Te(RegExp.$1)];
  const t = Ih.test(e) && RegExp.$1, n = ra[t] || ra["*"];
  return n.innerHTML = e, y(n.childNodes).detach().get();
}
y.parseHTML = Ja;
x.has = function(e) {
  const t = tt(e) ? (n, s) => qo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
x.not = function(e) {
  const t = wi(e);
  return this.filter((n, s) => (!tt(e) || j(s)) && !t.call(s, n, s));
};
function Xt(e, t, n, s) {
  const i = [], o = Re(t), r = s && wi(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (o) {
      const h = t(e[a]);
      h.length && kh.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Za(e) {
  return e.multiple && e.options ? Xt(Uo.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Hh(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || rl.test(n.type)) {
      const i = mi(e) ? Ga.call(e, String) : Bn(e) ? [] : [String(e)];
      s ? K(n.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = at(e) || Bn(e) ? "" : e;
  }) : this[0] && Za(this[0]);
}
x.val = Hh;
x.is = function(e) {
  const t = wi(e);
  return Vo.call(this, (n, s) => t.call(n, s, n));
};
y.guid = 1;
function St(e) {
  return e.length > 1 ? Uo.call(e, (t, n, s) => ja.call(s, t) === n) : e;
}
y.unique = St;
x.add = function(e, t) {
  return y(St(this.get().concat(y(e, t).get())));
};
x.children = function(e) {
  return ce(y(St(Xt(this, (t) => t.children))), e);
};
x.parent = function(e) {
  return ce(y(St(Xt(this, "parentNode"))), e);
};
x.index = function(e) {
  const t = e ? y(e)[0] : this[0], n = e ? this : y(t).parent().children();
  return ja.call(n, t);
};
x.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
x.siblings = function(e) {
  return ce(y(St(Xt(this, (t) => y(t).parent().children().not(t)))), e);
};
x.find = function(e) {
  return y(St(Xt(this, (t) => qo(e, t))));
};
const Bh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, zh = /^$|^module$|\/(java|ecma)script/i, Fh = ["type", "src", "nonce", "noModule"];
function Uh(e, t) {
  const n = y(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (zh.test(i.type) && Ua.contains(i)) {
      const o = Te("script");
      o.text = i.textContent.replace(Bh, ""), K(Fh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function Vh(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Uh(t, e.ownerDocument);
}
function he(e, t, n, s, i, o, r, a) {
  return K(e, (l, h) => {
    K(y(h), (c, u) => {
      K(y(t), (f, d) => {
        const p = n ? u : d, m = n ? d : u, v = n ? c : f;
        Vh(p, v ? m.cloneNode(!0) : m, s, i, !v);
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
function qh(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (at(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    j(s) && (t ? y(s).empty().append(e) : s.innerHTML = e);
  });
}
x.html = qh;
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
  return y(St(Xt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
x.next = function(e, t, n) {
  return ce(y(St(Xt(this, "nextElementSibling", t, n))), e);
};
x.nextAll = function(e) {
  return this.next(e, !0);
};
x.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
x.parents = function(e, t) {
  return ce(y(St(Xt(this, "parentElement", !0, t))), e);
};
x.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
x.prev = function(e, t, n) {
  return ce(y(St(Xt(this, "previousElementSibling", t, n))), e);
};
x.prevAll = function(e) {
  return this.prev(e, !0);
};
x.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
x.map = function(e) {
  return y($h.apply([], Ga.call(this, (t, n) => e.call(t, n, t))));
};
x.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && qt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Ua;
  });
};
x.slice = function(e, t) {
  return y(Ya.call(this, e, t));
};
const jh = /-([a-z])/g;
function Go(e) {
  return e.replace(jh, (t, n) => n.toUpperCase());
}
x.ready = function(e) {
  const t = () => setTimeout(e, 0, y);
  return Vt.readyState !== "loading" ? t() : Vt.addEventListener("DOMContentLoaded", t), this;
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
    top: t.top + Ps.pageYOffset,
    left: t.left + Ps.pageXOffset
  };
};
x.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = qt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && qt(i, "position") === "static"; )
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
const Qa = {
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
      return e = Qa[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
x.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Qa[e] || e];
  });
};
const Gh = /^--/;
function Yo(e) {
  return Gh.test(e);
}
const Hi = {}, { style: Yh } = Va, Kh = ["webkit", "moz", "ms"];
function Xh(e, t = Yo(e)) {
  if (t)
    return e;
  if (!Hi[e]) {
    const n = Go(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${Kh.join(`${s} `)}${s}`.split(" ");
    K(i, (o, r) => {
      if (r in Yh)
        return Hi[e] = r, !1;
    });
  }
  return Hi[e];
}
const Jh = {
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
function tl(e, t, n = Yo(e)) {
  return !n && !Jh[e] && Ka(t) ? `${t}px` : t;
}
function Zh(e, t) {
  if (tt(e)) {
    const n = Yo(e);
    return e = Xh(e, n), arguments.length < 2 ? this[0] && qt(this[0], e, n) : e ? (t = tl(e, t, n), this.each((s, i) => {
      j(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
x.css = Zh;
function el(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const Qh = /^\s+|\s+$/;
function aa(e, t) {
  const n = e.dataset[t] || e.dataset[Go(t)];
  return Qh.test(n) ? n : el(JSON.parse, n);
}
function tu(e, t, n) {
  n = el(JSON.stringify, n), e.dataset[Go(t)] = n;
}
function eu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = aa(this[0], s);
    return n;
  }
  if (tt(e))
    return arguments.length < 2 ? this[0] && aa(this[0], e) : at(t) ? this : this.each((n, s) => {
      tu(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
x.data = eu;
function nl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
K([!0, !1], (e, t) => {
  K(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(o) {
      if (this[0])
        return rn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ke(this[0]) ? nl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (o && t ? bt(this[0], `margin${n ? "Top" : "Left"}`) + bt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
K(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  x[n] = function(s) {
    if (!this[0])
      return at(s) ? void 0 : this;
    if (!arguments.length)
      return rn(this[0]) ? this[0].document.documentElement[`client${t}`] : ke(this[0]) ? nl(this[0], t) : this[0].getBoundingClientRect()[n] - ia(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!j(r))
        return;
      const a = qt(r, "boxSizing");
      r.style[n] = tl(n, i + (a === "border-box" ? ia(r, !e) : 0));
    });
  };
});
const la = "___cd";
x.toggle = function(e) {
  return this.each((t, n) => {
    if (!j(n))
      return;
    const s = oa(n);
    (at(e) ? s : e) ? (n.style.display = n[la] || "", oa(n) && (n.style.display = Dh(n.tagName))) : s || (n[la] = qt(n, "display"), n.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const ca = "___ce", Ko = ".", Xo = { focus: "focusin", blur: "focusout" }, sl = { mouseenter: "mouseover", mouseleave: "mouseout" }, nu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Jo(e) {
  return sl[e] || Xo[e] || e;
}
function Zo(e) {
  const t = e.split(Ko);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(e, t) {
  if (tt(e)) {
    const [s, i] = Zo(e), o = Jo(s);
    if (!o)
      return this;
    const r = nu.test(o) ? "MouseEvents" : "HTMLEvents";
    e = Vt.createEvent(r), e.initEvent(o, !0, !0), e.namespace = i.join(Ko), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Xo;
  return this.each((s, i) => {
    n && Re(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function il(e) {
  return e[ca] = e[ca] || {};
}
function su(e, t, n, s, i) {
  const o = il(e);
  o[t] = o[t] || [], o[t].push([n, s, i]), e.addEventListener(t, i);
}
function ol(e, t) {
  return !t || !Vo.call(t, (n) => e.indexOf(n) < 0);
}
function Is(e, t, n, s, i) {
  const o = il(e);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !ol(r, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in o)
      Is(e, t, n, s, i);
}
x.off = function(e, t, n) {
  if (at(e))
    this.each((s, i) => {
      !j(i) && !ke(i) && !rn(i) || Is(i);
    });
  else if (tt(e))
    Re(t) && (n = t, t = ""), K(yi(e), (s, i) => {
      const [o, r] = Zo(i), a = Jo(o);
      this.each((l, h) => {
        !j(h) && !ke(h) && !rn(h) || Is(h, a, r, t, n);
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
function iu(e, t, n, s, i) {
  if (!tt(e)) {
    for (const o in e)
      this.on(o, t, n, e[o], i);
    return this;
  }
  return tt(t) || (at(t) || Bn(t) ? t = "" : at(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Re(s) || (s = n, n = void 0), s ? (K(yi(e), (o, r) => {
    const [a, l] = Zo(r), h = Jo(a), c = a in sl, u = a in Xo;
    h && this.each((f, d) => {
      if (!j(d) && !ke(d) && !rn(d))
        return;
      const p = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !ol(l, m.namespace.split(Ko)) || !t && (u && (m.target !== d || m.___ot === h) || c && m.relatedTarget && d.contains(m.relatedTarget)))
          return;
        let v = d;
        if (t) {
          let _ = m.target;
          for (; !Xa(_, t); )
            if (_ === d || (_ = _.parentNode, !_))
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
            return d;
          }
        }), Object.defineProperty(m, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const w = s.call(v, m, m.___td);
        i && Is(d, h, l, t, p), w === !1 && (m.preventDefault(), m.stopPropagation());
      };
      p.guid = s.guid = s.guid || y.guid++, su(d, h, l, t, p);
    });
  }), this) : this;
}
x.on = iu;
function ou(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
x.one = ou;
const ru = /\r?\n/g;
function au(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(ru, `\r
`))}`;
}
const lu = /file|reset|submit|button|image/i, rl = /radio|checkbox/i;
x.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    K(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || lu.test(i.type) || rl.test(i.type) && !i.checked)
        return;
      const o = Za(i);
      if (!at(o)) {
        const r = mi(o) ? o : [o];
        K(r, (a, l) => {
          e += au(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = y;
function cu(e, t) {
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
function hu(e, t, n) {
  try {
    const s = cu(e, t), i = s[s.length - 1];
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
var Qo = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Qo || {});
function uu(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Qo[n]).toFixed(t) + n);
}
const Af = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Qo[s];
};
let tr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), te;
function du() {
  return tr;
}
function fu(e) {
  tr = e.toLowerCase();
}
function al(e, t) {
  te || (te = {}), typeof e == "string" && (e = { [e]: t ?? {} }), y.extend(!0, te, e);
}
function jt(e, t, n, s, i, o) {
  Array.isArray(e) ? te && e.unshift(te) : e = te ? [te, e] : [e], typeof n == "string" && (o = i, i = s, s = n, n = void 0);
  const r = i || tr;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const c = o && l === te ? `${o}.${t}` : t;
    if (a = hu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? ot(a, ...Array.isArray(n) ? n : [n]) : a;
}
function pu(e, t, n, s) {
  return jt(void 0, e, t, n, s);
}
jt.addLang = al;
jt.getLang = pu;
jt.getCode = du;
jt.setCode = fu;
al({
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
function ll(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = n.get(i);
    typeof r == "number" ? t[r][1] = !!o : (n.set(i, t.length), t.push([i, !!o]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ll(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), t.sort((i, o) => (n.get(i[0]) || 0) - (n.get(o[0]) || 0));
}
const T = (...e) => ll(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
y.classes = T;
y.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = y(s);
    e === !0 ? i.attr("class", T(i.attr("class"), ...t)) : i.addClass(T(e, ...t));
  });
};
const pn = /* @__PURE__ */ new WeakMap();
function cl(e, t, n) {
  const s = pn.has(e), i = s ? pn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, y(e).dataset(), i), pn.set(e, i)) : pn.delete(e);
}
function mu(e, t) {
  let n = pn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, y(e).dataset(), n)), t === void 0 ? n : n[t];
}
y.fn.dataset = y.fn.data;
y.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? mu(this[0], t) : this.each((s, i) => cl(i, t, n));
};
y.fn.removeData = function(e = null) {
  return this.each((t, n) => cl(n, e));
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
const gu = (e) => new Promise((t) => setTimeout(t, e));
function hl(e, t) {
  const n = y(e)[0];
  if (!n)
    return !1;
  const { left: s, top: i, width: o, height: r } = n.getBoundingClientRect(), { innerHeight: a, innerWidth: l } = window, { clientHeight: h, clientWidth: c } = document.documentElement, u = a || h, f = l || c;
  if (t != null && t.fullyCheck)
    return s >= 0 && i >= 0 && s + o <= f && i + r <= u;
  const d = i <= u && i + r >= 0, p = s <= f && s + o >= 0;
  return d && p;
}
y.fn.isVisible = function(e) {
  return this.each((t, n) => {
    hl(n, e);
  });
};
function er(e, t, n = !1) {
  const s = y(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${y.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    er(s, o.innerHTML), o.remove();
  });
}
y.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
y.fn.runJS = function(e) {
  return this.each((t, n) => {
    er(n, e);
  });
};
const Lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: hl,
  runJS: er
}, Symbol.toStringTag, { value: "Module" }));
var vi, z, ul, Q, ge, ha, dl, Qi, Os = {}, fl = [], yu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, nr = Array.isArray;
function oe(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function pl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function q(e, t, n) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? vi.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      r[o] === void 0 && (r[o] = e.defaultProps[o]);
  return ys(e, r, s, i, null);
}
function ys(e, t, n, s, i) {
  var o = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++ul };
  return i == null && z.vnode != null && z.vnode(o), o;
}
function Ct() {
  return { current: null };
}
function _i(e) {
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
function ml(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return ml(e);
  }
}
function ua(e) {
  (!e.__d && (e.__d = !0) && ge.push(e) && !Hs.__r++ || ha !== z.debounceRendering) && ((ha = z.debounceRendering) || dl)(Hs);
}
function Hs() {
  var e, t, n, s, i, o, r, a;
  for (ge.sort(Qi); e = ge.shift(); )
    e.__d && (t = ge.length, s = void 0, i = void 0, r = (o = (n = e).__v).__e, (a = n.__P) && (s = [], (i = oe({}, o)).__v = o.__v + 1, sr(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, s, r ?? zn(o), o.__h), _l(s, o), o.__e != r && ml(o)), ge.length > t && ge.sort(Qi));
  Hs.__r = 0;
}
function gl(e, t, n, s, i, o, r, a, l, h) {
  var c, u, f, d, p, m, v, w = s && s.__k || fl, _ = w.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((d = n.__k[c] = (d = t[c]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? ys(null, d, null, null, d) : nr(d) ? ys(_i, { children: d }, null, null, null) : d.__b > 0 ? ys(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
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
      sr(e, d, f = f || Os, i, o, r, a, l, h), p = d.__e, (u = d.ref) && f.ref != u && (v || (v = []), f.ref && v.push(f.ref, null, d), v.push(u, d.__c || p, d)), p != null ? (m == null && (m = p), typeof d.type == "function" && d.__k === f.__k ? d.__d = l = yl(d, l, e) : l = wl(e, d, f, w, p, l), typeof n.type == "function" && (n.__d = l)) : l && f.__e == l && l.parentNode != e && (l = zn(f));
    }
  for (n.__e = m, c = _; c--; )
    w[c] != null && (typeof n.type == "function" && w[c].__e != null && w[c].__e == n.__d && (n.__d = vl(s).nextSibling), xl(w[c], w[c]));
  if (v)
    for (c = 0; c < v.length; c++)
      bl(v[c], v[++c], v[++c]);
}
function yl(e, t, n) {
  for (var s, i = e.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = e, t = typeof s.type == "function" ? yl(s, t, n) : wl(n, s, s, i, s.__e, t));
  return t;
}
function wl(e, t, n, s, i, o) {
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
function vl(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = vl(n)))
        return s;
  }
  return null;
}
function wu(e, t, n, s, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || Bs(e, o, null, n[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || Bs(e, o, t[o], n[o], s);
}
function da(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || yu.test(t) ? n : n + "px";
}
function Bs(e, t, n, s, i) {
  var o;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || da(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || da(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? s || e.addEventListener(t, o ? pa : fa, o) : e.removeEventListener(t, o ? pa : fa, o);
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
function pa(e) {
  return this.l[e.type + !0](z.event ? z.event(e) : e);
}
function sr(e, t, n, s, i, o, r, a, l) {
  var h, c, u, f, d, p, m, v, w, _, $, C, k, M, N, A = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (h = z.__b) && h(t);
  try {
    t:
      if (typeof A == "function") {
        if (v = t.props, w = (h = A.contextType) && s[h.__c], _ = h ? w ? w.props.value : h.__ : s, n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? t.__c = c = new A(v, _) : (t.__c = c = new V(v, _), c.constructor = A, c.render = _u), w && w.sub(c), c.props = v, c.state || (c.state = {}), c.context = _, c.__n = s, u = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = oe({}, c.__s)), oe(c.__s, A.getDerivedStateFromProps(v, c.__s))), f = c.props, d = c.state, c.__v = t, u)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && v !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(v, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(v, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = v, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(O) {
              O && (O.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, d, p);
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
        c.state = c.__s, c.getChildContext != null && (s = oe(oe({}, s), c.getChildContext())), u || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(f, d)), gl(e, nr(N = h != null && h.type === _i && h.key == null ? h.props.children : h) ? N : [N], t, n, s, i, o, r, a, l), c.base = t.__e, t.__h = null, c.__h.length && r.push(c), m && (c.__E = c.__ = null), c.__e = !1;
      } else
        o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vu(n.__e, t, n, s, i, o, r, l);
    (h = z.diffed) && h(t);
  } catch (O) {
    t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), z.__e(O, t, n);
  }
}
function _l(e, t) {
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
function vu(e, t, n, s, i, o, r, a) {
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
    if (o = o && vi.call(e.childNodes), h = (u = n.props || Os).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (u = {}, p = 0; p < e.attributes.length; p++)
          u[e.attributes[p].name] = e.attributes[p].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (wu(e, f, u, i, a), c)
      t.__k = [];
    else if (gl(e, nr(p = t.props.children) ? p : [p], t, n, s, i && d !== "foreignObject", o, r, o ? o[0] : n.__k && zn(n, 0), a), o != null)
      for (p = o.length; p--; )
        o[p] != null && pl(o[p]);
    a || ("value" in f && (p = f.value) !== void 0 && (p !== e.value || d === "progress" && !p || d === "option" && p !== u.value) && Bs(e, "value", p, u.value, !1), "checked" in f && (p = f.checked) !== void 0 && p !== e.checked && Bs(e, "checked", p, u.checked, !1));
  }
  return e;
}
function bl(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    z.__e(s, n);
  }
}
function xl(e, t, n) {
  var s, i;
  if (z.unmount && z.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || bl(s, null, t)), (s = e.__c) != null) {
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
      s[i] && xl(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || pl(e.__e), e.__ = e.__e = e.__d = void 0;
}
function _u(e, t, n) {
  return this.constructor(e, n);
}
function Fn(e, t, n) {
  var s, i, o;
  z.__ && z.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, o = [], sr(t, e = (!s && n || t).__k = q(_i, null, [e]), i || Os, Os, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? vi.call(t.childNodes) : null, o, !s && n ? n : i ? i.__e : t.firstChild, s), _l(o, e);
}
vi = fl.slice, z = { __e: function(e, t, n, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, ul = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, V.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = oe({}, this.state), typeof e == "function" && (e = e(oe({}, n), this.props)), e && oe(n, e), e != null && this.__v && (t && this._sb.push(t), ua(this));
}, V.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), ua(this));
}, V.prototype.render = _i, ge = [], dl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Qi = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Hs.__r = 0;
var $l = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, n[t[o++]]) : t[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[t[++o]] = a : r === 6 ? s[1][t[++o]] += a + "" : r ? (i = e.apply(a, $l(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : s.push(a);
  }
  return s;
}, ma = /* @__PURE__ */ new Map();
function bu(e) {
  var t = ma.get(this);
  return t || (t = /* @__PURE__ */ new Map(), ma.set(this, t)), (t = $l(this, t.get(e) || (t.set(e, t = function(n) {
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
const Wf = bu.bind(q);
function xu(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: o, ...r } = e;
  return q(t, { class: T(n), style: s, ...r, ...o }, i);
}
var $u = 0;
function g(e, t, n, s, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --$u, __source: i, __self: o };
  if (typeof e == "function" && (r = e.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return z.vnode && z.vnode(h), h;
}
var Gn;
class kl extends V {
  constructor() {
    super(...arguments);
    L(this, Gn, Ct());
  }
  componentDidMount() {
    this.props.executeScript && y(E(this, Gn).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...o } = n;
    return /* @__PURE__ */ g(xu, { ref: E(this, Gn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Gn = new WeakMap();
function ku(e) {
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
  return i.forEach((m) => {
    const v = [];
    if (typeof m == "string" && a && a[m] && (m = a[m]), typeof m == "function")
      if (l)
        v.push(...l.call(r, m, d, ...o));
      else {
        const w = m.call(r, d, ...o);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(m);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !Q(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? d.push(
        /* @__PURE__ */ g("div", { className: T(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? p.push(w.__html) : (w.style && Object.assign(f, w.style), w.className && u.push(w.className), w.children && d.push(w.children), w.attrs && Object.assign(c, w.attrs)) : d.push(w));
    });
  }), p.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: p } }), [{
    className: T(u),
    style: f,
    ...c
  }, d];
}
function ir({
  tag: e = "div",
  ...t
}) {
  const [n, s] = ku(t);
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
function Cu(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Su(e) {
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
    q(Cu, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Mu(e, t) {
  const n = q(Su, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var or = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ae = (e, t, n) => (or(e, t, "read from private field"), n ? n.call(e) : t.get(e)), hn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Le = (e, t, n, s) => (or(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ls = (e, t, n) => (or(e, t, "access private method"), n), de, mn, ws, vs, De, gn;
const Cl = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    hn(this, De), hn(this, de, void 0), hn(this, mn, void 0), hn(this, ws, void 0), hn(this, vs, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: o } = this.constructor, r = y(e);
    if (r.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = y.guid++;
    if (Le(this, ws, a), Le(this, mn, r[0]), r.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Le(this, de, { ...i, ...r.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, r.data(n, this).attr(s, `${a}`), o) {
      const l = `${n}:ALL`;
      let h = r.data(l);
      h || (h = /* @__PURE__ */ new Map(), r.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Le(this, vs, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ae(this, vs);
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
    return Ae(this, de);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ae(this, ws);
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
    Le(this, de, void 0), Le(this, mn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && y.extend(Ae(this, de), e), Ae(this, de);
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
    return jt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? jt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
let ut = Cl;
de = /* @__PURE__ */ new WeakMap();
mn = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakSet();
gn = function(e) {
  return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
};
ut.DEFAULT = {};
ut.NAME = Cl.name;
ut.MULTI_INSTANCE = !1;
class et extends ut {
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
function Eu({
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
function Sl({
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
  ...m
}) {
  const v = [
    typeof d == "boolean" ? /* @__PURE__ */ g("div", { class: `checkbox-primary${d ? " checked" : ""}`, children: /* @__PURE__ */ g("label", {}) }) : null,
    /* @__PURE__ */ g(Un, { icon: l }),
    /* @__PURE__ */ g("span", { className: "text", children: h }),
    typeof s == "function" ? s() : s,
    /* @__PURE__ */ g(Un, { icon: u })
  ];
  return q(t, {
    className: T(n, { disabled: r, active: a }),
    title: f,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: c,
    onClick: p,
    ...m,
    ...i
  }, ...v);
}
function Tu({
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
function Ru({
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
function Nu({ type: e, ...t }) {
  return /* @__PURE__ */ g(ir, { ...t });
}
function Ml({
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
const to = class extends V {
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
    const d = !r || typeof r == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || to.ItemComponents[o] : r;
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
let Ne = to;
Ne.ItemComponents = {
  divider: Eu,
  item: Sl,
  heading: Tu,
  space: Ru,
  custom: Nu,
  basic: Ml
};
Ne.ROOT_TAG = "menu";
Ne.NAME = "action-menu";
class El extends et {
}
El.NAME = "ActionMenu";
El.Component = Ne;
function Au({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ g(Sl, { ...s });
}
var Tl = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ft = (e, t, n) => (Tl(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Bi = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Lu = (e, t, n, s) => (Tl(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), _s, Rt, yn;
let bi = class extends Ne {
  constructor(t) {
    super(t), Bi(this, _s, /* @__PURE__ */ new Set()), Bi(this, Rt, void 0), Bi(this, yn, (n, s, i) => {
      y(i.target).closest(".not-nested-toggle").length || (this.toggleNestedMenu(n, s), i.preventDefault());
    }), Lu(this, Rt, t.nestedShow === void 0), ft(this, Rt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
    ft(this, _s).add(o);
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
    if (typeof i == "boolean" && (i === !0 ? i = [...ft(this, _s).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), n === void 0)
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
_s = /* @__PURE__ */ new WeakMap();
Rt = /* @__PURE__ */ new WeakMap();
yn = /* @__PURE__ */ new WeakMap();
bi.ItemComponents = {
  item: Au
};
class Rl extends et {
}
Rl.NAME = "ActionMenuNested";
Rl.Component = bi;
let xi = class extends bi {
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
xi.NAME = "menu";
class Nl extends et {
}
Nl.NAME = "Menu";
Nl.Component = xi;
class Gt extends V {
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
      text: m,
      trailingIcon: v,
      caret: w,
      square: _,
      hint: $,
      ...C
    } = this.props, k = t || (a ? "a" : "button"), M = m == null || typeof m == "string" && !m.length || u && !d, N = w && M && !p && !v && !r && !u;
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
      /* @__PURE__ */ g(Un, { icon: u ? `icon ${f || "icon-spinner-snake"} spin` : p }),
      M ? null : /* @__PURE__ */ g("span", { className: "text", children: u ? d : m }),
      u ? null : r,
      u ? null : typeof v == "string" ? /* @__PURE__ */ g("i", { class: `icon ${v}` }) : v,
      u ? null : w ? /* @__PURE__ */ g("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Wu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Gt, { type: n, ...s });
}
function ts(e) {
  return e.split("-")[1];
}
function rr(e) {
  return e === "y" ? "height" : "width";
}
function _e(e) {
  return e.split("-")[0];
}
function es(e) {
  return ["top", "bottom"].includes(_e(e)) ? "x" : "y";
}
function ga(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = es(t), l = rr(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
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
const Pu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = ga(h, s, l), f = s, d = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: v, fn: w } = a[m], { x: _, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, d = { ...d, [v]: { ...d[v], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = ga(h, f, l)), m = -1);
  }
  return { x: c, y: u, placement: f, strategy: i, middlewareData: d };
};
function ns(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Al(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function zs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ll(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = !1, padding: d = 0 } = ns(t, e), p = Al(d), m = a[f ? u === "floating" ? "reference" : "floating" : u], v = zs(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(m))) == null || n ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, C = zs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / $.y, bottom: (C.bottom - v.bottom + p.bottom) / $.y, left: (v.left - C.left + p.left) / $.x, right: (C.right - v.right + p.right) / $.x };
}
const eo = Math.min, Du = Math.max;
function no(e, t, n) {
  return Du(e, eo(t, n));
}
const so = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: o, platform: r, elements: a } = t, { element: l, padding: h = 0 } = ns(e, t) || {};
  if (l == null)
    return {};
  const c = Al(h), u = { x: n, y: s }, f = es(i), d = rr(f), p = await r.getDimensions(l), m = f === "y", v = m ? "top" : "left", w = m ? "bottom" : "right", _ = m ? "clientHeight" : "clientWidth", $ = o.reference[d] + o.reference[f] - u[f] - o.floating[d], C = u[f] - o.reference[f], k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = k ? k[_] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(k)) || (M = a.floating[_] || o.floating[d]);
  const N = $ / 2 - C / 2, A = M / 2 - p[d] / 2 - 1, O = eo(c[v], A), b = eo(c[w], A), R = O, D = M - p[d] - b, W = M / 2 - p[d] / 2 + N, I = no(R, W, D), P = ts(i) != null && W != I && o.reference[d] / 2 - (W < R ? O : b) - p[d] / 2 < 0 ? W < R ? R - W : D - W : 0;
  return { [f]: u[f] - P, data: { [f]: I, centerOffset: W - I + P } };
} }), Iu = ["top", "right", "bottom", "left"];
Iu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Ou = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Fs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ou[t]);
}
function Hu(e, t, n) {
  n === void 0 && (n = !1);
  const s = ts(e), i = es(e), o = rr(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Fs(r)), { main: r, cross: Fs(r) };
}
const Bu = { start: "end", end: "start" };
function zi(e) {
  return e.replace(/start|end/g, (t) => Bu[t]);
}
const $i = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: p = !0, ...m } = ns(e, t), v = _e(s), w = _e(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Fs(r)] : function(R) {
      const D = Fs(R);
      return [zi(R), D, zi(D)];
    }(r));
    u || d === "none" || $.push(...function(R, D, W, I) {
      const P = ts(R);
      let F = function(dt, Mt, rs) {
        const cn = ["left", "right"], as = ["right", "left"], Pi = ["top", "bottom"], bh = ["bottom", "top"];
        switch (dt) {
          case "top":
          case "bottom":
            return rs ? Mt ? as : cn : Mt ? cn : as;
          case "left":
          case "right":
            return Mt ? Pi : bh;
          default:
            return [];
        }
      }(_e(R), W === "start", I);
      return P && (F = F.map((dt) => dt + "-" + P), D && (F = F.concat(F.map(zi)))), F;
    }(r, p, d, _));
    const C = [r, ...$], k = await Ll(t, m), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(k[v]), c) {
      const { main: R, cross: D } = Hu(s, o, _);
      M.push(k[R], k[D]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((R) => R <= 0)) {
      var A, O;
      const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, D = C[R];
      if (D)
        return { data: { index: R, overflows: N }, reset: { placement: D } };
      let W = (O = N.filter((I) => I.overflows[0] <= 0).sort((I, P) => I.overflows[1] - P.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!W)
        switch (f) {
          case "bestFit": {
            var b;
            const I = (b = N.map((P) => [P.placement, P.overflows.filter((F) => F > 0).reduce((F, dt) => F + dt, 0)]).sort((P, F) => P[1] - F[1])[0]) == null ? void 0 : b[0];
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
}, ar = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = _e(a), f = ts(a), d = es(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, m = c && d ? -1 : 1, v = ns(r, o);
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return f && typeof $ == "number" && (_ = f === "end" ? -1 * $ : $), d ? { x: _ * m, y: w * p } : { x: w * p, y: _ * m };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function zu(e) {
  return e === "x" ? "y" : "x";
}
const io = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = ns(e, t), h = { x: n, y: s }, c = await Ll(t, l), u = es(_e(i)), f = zu(u);
    let d = h[u], p = h[f];
    if (o) {
      const v = u === "y" ? "bottom" : "right";
      d = no(d + c[u === "y" ? "top" : "left"], d, d - c[v]);
    }
    if (r) {
      const v = f === "y" ? "bottom" : "right";
      p = no(p + c[f === "y" ? "top" : "left"], p, p - c[v]);
    }
    const m = a.fn({ ...t, [u]: d, [f]: p });
    return { ...m, data: { x: m.x - n, y: m.y - s } };
  } };
};
function ht(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mt(e) {
  return ht(e).getComputedStyle(e);
}
function Wl(e) {
  return e instanceof ht(e).Node;
}
function ae(e) {
  return Wl(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function yt(e) {
  return e instanceof ht(e).HTMLElement;
}
function Bt(e) {
  return e instanceof ht(e).Element;
}
function ya(e) {
  return typeof ShadowRoot < "u" && (e instanceof ht(e).ShadowRoot || e instanceof ShadowRoot);
}
function Vn(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = mt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Fu(e) {
  return ["table", "td", "th"].includes(ae(e));
}
function oo(e) {
  const t = lr(), n = mt(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function lr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function ki(e) {
  return ["html", "body", "#document"].includes(ae(e));
}
const wa = Math.min, An = Math.max, Us = Math.round, cs = Math.floor, Ce = (e) => ({ x: e, y: e });
function Pl(e) {
  const t = mt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = yt(e), o = i ? e.offsetWidth : n, r = i ? e.offsetHeight : s, a = Us(n) !== o || Us(s) !== r;
  return a && (n = o, s = r), { width: n, height: s, $: a };
}
function cr(e) {
  return Bt(e) ? e : e.contextElement;
}
function Ve(e) {
  const t = cr(e);
  if (!yt(t))
    return Ce(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: o } = Pl(t);
  let r = (o ? Us(n.width) : n.width) / s, a = (o ? Us(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const va = Ce(0);
function Dl(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !lr())
    return va;
  const o = e ? ht(e) : window;
  return !n || t && n !== o ? va : { x: ((s = o.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = o.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Se(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = cr(e);
  let r = Ce(1);
  t && (s ? Bt(s) && (r = Ve(s)) : r = Ve(e));
  const a = Dl(o, n, s);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, c = i.width / r.x, u = i.height / r.y;
  if (o) {
    const f = ht(o), d = s && Bt(s) ? ht(s) : s;
    let p = f.frameElement;
    for (; p && s && d !== f; ) {
      const m = Ve(p), v = p.getBoundingClientRect(), w = getComputedStyle(p), _ = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * m.x, $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * m.y;
      l *= m.x, h *= m.y, c *= m.x, u *= m.y, l += _, h += $, p = ht(p).frameElement;
    }
  }
  return zs({ width: c, height: u, x: l, y: h });
}
function zt(e) {
  return ((Wl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ci(e) {
  return Bt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Il(e) {
  return Se(zt(e)).left + Ci(e).scrollLeft;
}
function an(e) {
  if (ae(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || ya(e) && e.host || zt(e);
  return ya(t) ? t.host : t;
}
function Ol(e) {
  const t = an(e);
  return ki(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yt(t) && Vn(t) ? t : Ol(t);
}
function Vs(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Ol(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ht(s);
  return i ? t.concat(o, o.visualViewport || [], Vn(s) ? s : []) : t.concat(s, Vs(s));
}
function _a(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, o) {
      const r = ht(i), a = zt(i), l = r.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, u = 0, f = 0;
      if (l) {
        h = l.width, c = l.height;
        const d = lr();
        (!d || d && o === "fixed") && (u = l.offsetLeft, f = l.offsetTop);
      }
      return { width: h, height: c, x: u, y: f };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const o = zt(i), r = Ci(i), a = i.ownerDocument.body, l = An(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = An(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -r.scrollLeft + Il(i);
      const u = -r.scrollTop;
      return mt(a).direction === "rtl" && (c += An(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: u };
    }(zt(e));
  else if (Bt(t))
    s = function(i, o) {
      const r = Se(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = yt(i) ? Ve(i) : Ce(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Dl(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return zs(s);
}
function Hl(e, t) {
  const n = an(e);
  return !(n === t || !Bt(n) || ki(n)) && (mt(n).position === "fixed" || Hl(n, t));
}
function ba(e, t) {
  return yt(e) && mt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function xa(e, t) {
  const n = ht(e);
  if (!yt(e))
    return n;
  let s = ba(e, t);
  for (; s && Fu(s) && mt(s).position === "static"; )
    s = ba(s, t);
  return s && (ae(s) === "html" || ae(s) === "body" && mt(s).position === "static" && !oo(s)) ? n : s || function(i) {
    let o = an(i);
    for (; yt(o) && !ki(o); ) {
      if (oo(o))
        return o;
      o = an(o);
    }
    return null;
  }(e) || n;
}
function Uu(e, t, n) {
  const s = yt(t), i = zt(t), o = n === "fixed", r = Se(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Ce(0);
  if (s || !s && !o)
    if ((ae(t) !== "body" || Vn(i)) && (a = Ci(t)), yt(t)) {
      const h = Se(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Il(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
const Vu = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let f = Vs(h).filter((v) => Bt(v) && ae(v) !== "body"), d = null;
    const p = mt(h).position === "fixed";
    let m = p ? an(h) : h;
    for (; Bt(m) && !ki(m); ) {
      const v = mt(m), w = oo(m);
      w || v.position !== "fixed" || (d = null), (p ? !w && !d : !w && v.position === "static" && d && ["absolute", "fixed"].includes(d.position) || Vn(m) && !w && Hl(h, m)) ? f = f.filter((_) => _ !== m) : d = v, m = an(m);
    }
    return c.set(h, f), f;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = _a(t, c, i);
    return h.top = An(u.top, h.top), h.right = wa(u.right, h.right), h.bottom = wa(u.bottom, h.bottom), h.left = An(u.left, h.left), h;
  }, _a(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = yt(n), o = zt(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Ce(1);
  const l = Ce(0);
  if ((i || !i && s !== "fixed") && ((ae(n) !== "body" || Vn(o)) && (r = Ci(n)), yt(n))) {
    const h = Se(n);
    a = Ve(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: Bt, getDimensions: function(e) {
  return Pl(e);
}, getOffsetParent: xa, getDocumentElement: zt, getScale: Ve, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || xa, o = this.getDimensions;
  return { reference: Uu(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => mt(e).direction === "rtl" };
function hr(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = cr(e), c = i || o ? [...h ? Vs(h) : [], ...Vs(t)] : [];
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
      _ = new IntersectionObserver((dt) => {
        const Mt = dt[0].intersectionRatio;
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
  let f, d = null;
  r && (d = new ResizeObserver(n), h && !l && d.observe(h), d.observe(t));
  let p = l ? Se(e) : null;
  return l && function m() {
    const v = Se(e);
    !p || v.x === p.x && v.y === p.y && v.width === p.width && v.height === p.height || n(), p = v, f = requestAnimationFrame(m);
  }(), n(), () => {
    c.forEach((m) => {
      i && m.removeEventListener("scroll", n), o && m.removeEventListener("resize", n);
    }), u && u(), d && d.disconnect(), d = null, l && cancelAnimationFrame(f);
  };
}
const Si = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Vu, ...n }, o = { ...i.platform, _c: s };
  return Pu(e, t, { ...i, platform: o });
};
let qu = class extends xi {
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
      middleware: [$i()],
      placement: "right-start"
    };
  }
  getPopperElement() {
    var t;
    return (t = this.ref.current) == null ? void 0 : t.parentElement;
  }
  createPopper() {
    const t = this.getPopperOptions();
    this.ref.current && Si(this.getPopperElement(), this.ref.current, t).then(({ x: n, y: s }) => {
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
var ur = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Et = (e, t, n) => (ur(e, t, "read from private field"), n ? n.call(e) : t.get(e)), We = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, hs = (e, t, n, s) => (ur(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), $a = (e, t, n) => (ur(e, t, "access private method"), n), Zt, wn, bs, xs, ro, Bl, ao, zl;
const Fi = "show", ju = '[data-toggle="contextmenu"]';
class it extends ut {
  constructor() {
    super(...arguments), We(this, ro), We(this, ao), We(this, Zt, void 0), We(this, wn, void 0), We(this, bs, void 0), We(this, xs, void 0);
  }
  get isShown() {
    return Et(this, Zt) && y(Et(this, Zt)).hasClass(Fi);
  }
  get menu() {
    return Et(this, Zt) || this.ensureMenu();
  }
  get trigger() {
    return Et(this, bs) || this.element;
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
    return this.isShown || (hs(this, bs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (y(this.menu).addClass(Fi), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Et(this, xs)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (y(Et(this, Zt)).removeClass(Fi), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Et(this, Zt)) == null || t.remove();
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
    }), hs(this, Zt, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push($i())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    hs(this, xs, hr(n, s, () => {
      Si(n, s, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
        y(s).css({ left: `${i}px`, top: `${o}px` });
        const l = a.split("-")[0], h = $a(this, ro, Bl).call(this, l);
        if (r.arrow && this.arrowEl) {
          const { x: c, y: u } = r.arrow;
          y(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: u != null ? `${u}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...$a(this, ao, zl).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Fn(q(qu, t), this.menu), !0);
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
Zt = /* @__PURE__ */ new WeakMap();
wn = /* @__PURE__ */ new WeakMap();
bs = /* @__PURE__ */ new WeakMap();
xs = /* @__PURE__ */ new WeakMap();
ro = /* @__PURE__ */ new WeakSet();
Bl = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
ao = /* @__PURE__ */ new WeakSet();
zl = function(e) {
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
y(document).on(`contextmenu${it.NAMESPACE}`, (e) => {
  const t = y(e.target);
  if (t.closest(`.${it.MENU_CLASS}`).length)
    return;
  const n = t.closest(ju).not(":disabled,.disabled");
  if (n.length) {
    const s = `${it.KEY}:options`, i = n.data(s), o = it.ensure(n, i);
    i || n.data(s, o.options), o.show(e), e.preventDefault();
  }
}).on(`click${it.NAMESPACE}`, it.clear.bind(it));
var dr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vn = (e, t, n) => (dr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), us = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, lo = (e, t, n, s) => (dr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Gu = (e, t, n) => (dr(e, t, "access private method"), n), Ln, _n, qs, co, Fl;
const ka = '[data-toggle="dropdown"]', Ul = class extends it {
  constructor() {
    super(...arguments), us(this, co), us(this, Ln, !1), us(this, _n, 0), this.hideLater = () => {
      vn(this, qs).call(this), lo(this, _n, window.setTimeout(this.hide.bind(this), 100));
    }, us(this, qs, () => {
      clearTimeout(vn(this, _n)), lo(this, _n, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Ul.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!vn(this, Ln) && this.isHover && Gu(this, co, Fl).call(this), this.$element.addClass(this.elementShowClass)), n;
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
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(ar(t)), (s = e.middleware) == null || s.push(so({ element: this.arrowEl }))), e;
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
let Ft = Ul;
Ln = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
qs = /* @__PURE__ */ new WeakMap();
co = /* @__PURE__ */ new WeakSet();
Fl = function() {
  y(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, vn(this, qs)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), lo(this, Ln, !0);
};
Ft.MENU_CLASS = "dropdown-menu";
Ft.NAME = "Dropdown";
Ft.DEFAULT = {
  ...it.DEFAULT,
  strategy: "fixed",
  trigger: "click"
};
const ds = `${Ft.KEY}:options`;
y(document).on("click", function(e) {
  const t = y(e.target).closest(ka).not(":disabled,.disabled");
  if (!t.length) {
    Ft.clear({ event: e });
    return;
  }
  const n = t.data(ds), s = Ft.ensure(t, n);
  n || t.data(ds, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = y(e.target).closest(ka);
  if (!t.length)
    return;
  const n = t.data(ds), s = Ft.ensure(t, n);
  n || t.data(ds, s.options), s.isHover && s.show();
});
let fs = 0;
window.addEventListener("scroll", (e) => {
  fs && clearTimeout(fs), fs = window.setTimeout(() => {
    Ft.clear({ event: e }), fs = 0;
  }, 50);
}, !0);
var Yn, Ye;
class Yu extends V {
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
    }), B(this, Yn, Ft.ensure(this.triggerElement, {
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
class Ku extends Yu {
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
    return s.caret = i, /* @__PURE__ */ g(Gt, { ...s });
  }
}
function Vl({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(Ku, { type: n, ...s });
}
let ql = class extends V {
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
    return /* @__PURE__ */ g(Gt, { ...i }, s);
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
function Xu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ g(ql, { type: n, ...s });
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
  item: Wu,
  dropdown: Vl,
  "btn-group": Xu
};
wt.ROOT_TAG = "nav";
wt.NAME = "toolbar";
wt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Ju({
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
  a === !0 ? u = /* @__PURE__ */ g(Gt, { className: "alert-close btn ghost", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : Q(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ g(Gt, { ...a, onClick: l }));
  const f = Q(n) ? n : n ? /* @__PURE__ */ g(wt, { ...n }) : null;
  return /* @__PURE__ */ g("div", { className: T("alert", e), style: t, ...c, children: [
    Q(h) ? h : typeof h == "string" ? /* @__PURE__ */ g("i", { className: `icon ${h}` }) : null,
    Q(i) ? i : /* @__PURE__ */ g("div", { className: T("alert-content", o), children: [
      Q(s) ? s : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    u,
    r
  ] });
}
function Zu(e) {
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
let Qu = class extends V {
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
      Ju,
      {
        className: T("messager", l, i, r === !0 ? Zu(o) : r, a ? "in" : ""),
        ...c
      }
    );
  }
};
var td = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ed = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, un = (e, t, n) => (td(e, t, "access private method"), n), fe, Ie;
class fr extends et {
  constructor() {
    super(...arguments), ed(this, fe), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), un(this, fe, Ie).call(this, () => {
      this._show = !0, this.render(), un(this, fe, Ie).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && un(this, fe, Ie).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && un(this, fe, Ie).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), un(this, fe, Ie).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
fe = /* @__PURE__ */ new WeakSet();
Ie = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
fr.NAME = "MessagerItem";
fr.Component = Qu;
var pr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, be = (e, t, n) => (pr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ps = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, $s = (e, t, n, s) => (pr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), jl = (e, t, n) => (pr(e, t, "access private method"), n), qe, It, ho, Gl, mr, Yl;
const Kl = class extends ut {
  constructor() {
    super(...arguments), ps(this, ho), ps(this, mr), ps(this, qe, void 0), ps(this, It, void 0);
  }
  get isShown() {
    var e;
    return !!((e = be(this, It)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), jl(this, ho, Gl).call(this).show();
  }
  hide() {
    var e;
    (e = be(this, It)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Kl.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let gr = Kl;
qe = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
ho = /* @__PURE__ */ new WeakSet();
Gl = function() {
  if (be(this, It))
    be(this, It).setOptions(this.options);
  else {
    const e = jl(this, mr, Yl).call(this), t = new fr(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), $s(this, qe, void 0), $s(this, It, void 0);
    }), $s(this, It, t);
  }
  return be(this, It);
};
mr = /* @__PURE__ */ new WeakSet();
Yl = function() {
  if (be(this, qe))
    return be(this, qe);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = y(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = y(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), $s(this, qe, n[0])), n[0];
};
gr.NAME = "messager";
gr.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
y(document).on("to-show.messager.zui", (e, t) => {
  t && gr.show(t);
});
let yr = class extends V {
  render() {
    const { percent: t, circleSize: n, circleBorderSize: s, circleBgColor: i, circleColor: o } = this.props, r = (n - s) / 2, a = n / 2;
    return /* @__PURE__ */ g("svg", { width: n, height: n, class: "progress-circle", children: [
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r, stroke: i, "stroke-width": s }),
      /* @__PURE__ */ g("circle", { cx: a, cy: a, r, stroke: o, "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - t) / 100, "stroke-width": s }),
      /* @__PURE__ */ g("text", { x: a, y: a + s / 4, "dominant-baseline": "middle", style: { fontSize: `${r}px` }, children: Math.round(t) })
    ] });
  }
};
yr.NAME = "zui.progress-circle";
yr.defaultProps = {
  circleSize: 24,
  circleBorderSize: 2,
  circleBgColor: "var(--progress-circle-bg)",
  circleColor: "var(--progress-circle-bar-color)"
};
class Xl extends et {
}
Xl.NAME = "ProgressCircle";
Xl.Component = yr;
let nd = class extends V {
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
    } = this.props, u = this.state.checked ? 1 : 0, f = t || "div", d = typeof o == "string" ? /* @__PURE__ */ g("i", { class: `icon ${o}` }) : o, p = typeof r == "string" ? /* @__PURE__ */ g("i", { class: `icon ${r}` }) : r, m = [
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
      ...m,
      s
    );
  }
};
class Jl extends et {
}
Jl.NAME = "Switch";
Jl.Component = nd;
class Zl extends et {
}
Zl.NAME = "BtnGroup";
Zl.Component = ql;
class sd extends ut {
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
    const n = y(`<span class="file-name">${t.name}</span>`), s = y(`<span class="file-size text-gray">${uu(t.size)}</span>`), i = y('<div class="file-info"></div>').append(n).append(s), { renameBtn: o, renameText: r, deleteBtn: a, deleteText: l } = this.options;
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
sd.DEFAULT = {
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
class id {
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
const Ca = /* @__PURE__ */ new Set([
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
class Ql extends id {
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
    return typeof t == "string" && (Ca.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Ql.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (Ca.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let tc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var Kn, ee, _t, Ke, Xe, ks;
const na = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    L(this, Xe);
    L(this, Kn, void 0);
    L(this, ee, void 0);
    L(this, _t, void 0);
    L(this, Ke, void 0);
    B(this, Kn, n), B(this, ee, `ZUI_STORE:${t ?? tc()}`), B(this, _t, n === "local" ? localStorage : sessionStorage);
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
    return this.type === "session" ? this : (E(this, Ke) || B(this, Ke, new na(E(this, ee), "session")), E(this, Ke));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = E(this, _t).getItem(nt(this, Xe, ks).call(this, t));
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
    E(this, _t).setItem(nt(this, Xe, ks).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    E(this, _t).removeItem(nt(this, Xe, ks).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < E(this, _t).length; n++) {
      const s = E(this, _t).key(n);
      if (s != null && s.startsWith(E(this, ee))) {
        const i = E(this, _t).getItem(s);
        typeof i == "string" && t(s.substring(E(this, ee).length + 1), JSON.parse(i));
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
let js = na;
Kn = new WeakMap(), ee = new WeakMap(), _t = new WeakMap(), Ke = new WeakMap(), Xe = new WeakSet(), ks = function(t) {
  return `${E(this, ee)}:${t}`;
};
const od = new js("DEFAULT");
function rd(e, t = "local") {
  return new js(e, t);
}
Object.assign(od, { create: rd });
function ad(e) {
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
function ld(e) {
  const [t, n, s] = typeof e == "string" ? ad(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function Sa(e, t) {
  return ld(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Ma(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function cd(e, t, n) {
  e = e % 360 / 360, t = Ma(t), n = Ma(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(e + 1 / 3) * 255,
    o(e) * 255,
    o(e - 1 / 3) * 255
  ];
}
function hd(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function ud(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let ec = class extends V {
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
      children: m,
      ...v
    } = this.props, w = ["avatar", t], _ = { ...n, background: r, color: a };
    let $ = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, $ = s) : (w.push(`size-${s}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? _.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let C;
    if (u)
      w.push("has-img"), C = /* @__PURE__ */ g("img", { className: "avatar-img", src: u, alt: l });
    else if (l != null && l.length) {
      const k = ud(l, c);
      if (w.push("has-text", `has-text-${k.length}`), r)
        !a && r && (_.color = Sa(r));
      else {
        const N = h ?? l, A = (typeof N == "number" ? N : hd(N)) * f % 360;
        if (_.background = `hsl(${A},${d * 100}%,${p * 100}%)`, !a) {
          const O = cd(A, d, p);
          _.color = Sa(O);
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
class nc extends et {
}
nc.NAME = "Avatar";
nc.Component = ec;
var wr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ye = (e, t, n) => (wr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Wn = (e, t, n, s) => (wr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ui = (e, t, n) => (wr(e, t, "access private method"), n), ze, Cs, pe, uo, bn, Ss;
const Vi = "show", Ea = "in", dd = '[data-dismiss="modal"]', xn = class extends ut {
  constructor() {
    super(...arguments), dn(this, bn), dn(this, ze, 0), dn(this, Cs, void 0), dn(this, pe, void 0), dn(this, uo, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(dd) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Vi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  afterInit() {
    if (this.on("click", ye(this, uo)), this.options.responsive && typeof ResizeObserver < "u") {
      const { dialog: e } = this;
      if (e) {
        const t = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const n = e.clientWidth, s = e.clientHeight;
          (!ye(this, pe) || ye(this, pe)[0] !== n || ye(this, pe)[1] !== s) && (Wn(this, pe, [n, s]), this.layout());
        });
        t.observe(e), Wn(this, Cs, t);
      }
    }
    this.options.show && this.show();
  }
  destroy() {
    var e;
    super.destroy(), (e = ye(this, Cs)) == null || e.disconnect();
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
    }, Vi, i).css({
      zIndex: `${xn.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), Ui(this, bn, Ss).call(this, () => {
      y(t).addClass(Ea), Ui(this, bn, Ss).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (y(this.modalElement).removeClass(Ea), this.emit("hide"), Ui(this, bn, Ss).call(this, () => {
      y(this.modalElement).removeClass(Vi), this.emit("hidden");
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
let Jt = xn;
ze = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakMap();
pe = /* @__PURE__ */ new WeakMap();
uo = /* @__PURE__ */ new WeakMap();
bn = /* @__PURE__ */ new WeakSet();
Ss = function(e, t) {
  ye(this, ze) && (clearTimeout(ye(this, ze)), Wn(this, ze, 0)), e && (this.options.animation ? Wn(this, ze, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
Jt.NAME = "Modal";
Jt.MULTI_INSTANCE = !0;
Jt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Jt.zIndex = 2e3;
y(window).on("resize.modal.zui", () => {
  Jt.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
y(document).on("to-hide.modal.zui", (e, t) => {
  Jt.hide(t == null ? void 0 : t.target);
});
class sc extends V {
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
sc.defaultProps = { closeBtn: !0 };
var Je, Ze, Qe;
class fd extends V {
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
var vr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Tt = (e, t, n) => (vr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Pe = (e, t, n, s) => (vr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ms = (e, t, n) => (vr(e, t, "access private method"), n), me, $n, Nt, Gs, _r, Es, fo;
function pd(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function md(e, t) {
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
    body: n === "html" ? /* @__PURE__ */ g(kl, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function gd(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ g(fd, { url: n })
  };
}
const yd = {
  custom: pd,
  ajax: md,
  iframe: gd
}, qi = "loading", kn = class extends Jt {
  constructor() {
    super(...arguments), fn(this, Gs), fn(this, Es), fn(this, me, void 0), fn(this, $n, void 0), fn(this, Nt, void 0);
  }
  get id() {
    return Tt(this, $n);
  }
  get loading() {
    var e;
    return (e = this.modalElement) == null ? void 0 : e.classList.contains(qi);
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
    const { modalElement: e, options: t } = this, n = y(e), { type: s, loadTimeout: i, loadingText: o = null } = t, r = yd[s];
    if (!r)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", o).addClass(qi), i && Pe(this, Nt, window.setTimeout(() => {
      Pe(this, Nt, 0), Ms(this, Es, fo).call(this, this.options.timeoutTip);
    }, i));
    const a = await r.call(this, e, t);
    return a === !1 ? await Ms(this, Es, fo).call(this, this.options.failedTip) : a && typeof a == "object" && await Ms(this, Gs, _r).call(this, a), Tt(this, Nt) && (clearTimeout(Tt(this, Nt)), Pe(this, Nt, 0)), await gu(100), n.removeClass(qi), !0;
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
      }, typeof p.key == "string" && (p.text || (p.text = jt.getLang(p.key, p.key)), p.btnType || (p.btnType = `btn-wide ${p.key === "confirm" ? "primary" : "btn-default"}`)), p && u.push(p);
    }, []);
    let f;
    const d = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: p, event: m }) => {
        const v = kn.query(m.target, l);
        f = p.key, (r == null ? void 0 : r(p, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await kn.open({
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
    return await kn.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, r) => {
        n == null || n(o.key === "confirm", r), t == null || t(o, r);
      },
      ...s
    }) === "confirm";
  }
};
let ic = kn;
me = /* @__PURE__ */ new WeakMap();
$n = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Gs = /* @__PURE__ */ new WeakSet();
_r = function(e) {
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
      /* @__PURE__ */ g(sc, { ...e }),
      this.modalElement
    );
  });
};
Es = /* @__PURE__ */ new WeakSet();
fo = function(e) {
  if (e)
    return Ms(this, Gs, _r).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: e })
    });
};
ic.DEFAULT = {
  ...Jt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var br = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, po = (e, t, n) => (br(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ms = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ta = (e, t, n, s) => (br(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), mo = (e, t, n) => (br(e, t, "access private method"), n), xe, xr, oc, go, rc, $r, ac;
const wd = '[data-toggle="modal"]';
class lc extends ut {
  constructor() {
    super(...arguments), ms(this, xr), ms(this, go), ms(this, $r), ms(this, xe, void 0);
  }
  get modal() {
    return po(this, xe);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = mo(this, go, rc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = po(this, xe)) == null ? void 0 : t.hide();
  }
}
xe = /* @__PURE__ */ new WeakMap();
xr = /* @__PURE__ */ new WeakSet();
oc = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
go = /* @__PURE__ */ new WeakSet();
rc = function() {
  const e = mo(this, xr, oc).call(this);
  let t = po(this, xe);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = mo(this, $r, ac).call(this);
    if (!n)
      return;
    t = Jt.ensure(n, e);
  } else
    t = ic.ensure(this.container, e);
  return Ta(this, xe, t), t.on("destroyed", () => {
    Ta(this, xe, void 0);
  }), t;
};
$r = /* @__PURE__ */ new WeakSet();
ac = function() {
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
lc.NAME = "ModalTrigger";
y(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, wd);
  if (n) {
    const i = lc.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let cc = class extends Ne {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = T(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
cc.NAME = "nav";
class hc extends et {
}
hc.NAME = "Nav";
hc.Component = cc;
function qn(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function vd({
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
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : ot(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : ot(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ g(Gt, { type: n, ...a });
}
const Wt = 24 * 60 * 60 * 1e3, lt = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), ss = (e, t = /* @__PURE__ */ new Date()) => (e = lt(e), t = lt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()), yo = (e, t = /* @__PURE__ */ new Date()) => lt(e).getFullYear() === lt(t).getFullYear(), _d = (e, t = /* @__PURE__ */ new Date()) => (e = lt(e), t = lt(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), qf = (e, t = /* @__PURE__ */ new Date()) => {
  e = lt(e), t = lt(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, jf = (e, t) => ss(lt(t), e), Gf = (e, t) => ss(lt(t).getTime() - Wt, e), Yf = (e, t) => ss(lt(t).getTime() + Wt, e), Kf = (e, t) => ss(lt(t).getTime() - 2 * Wt, e), wo = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", yo(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, Xf = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = wo(e, yo(e) ? s.month : s.full);
  if (ss(e, t))
    return i;
  const o = wo(t, yo(e, t) ? _d(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
}, Jf = (e) => {
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
}, Ra = (e, t, n = !0, s = Date.now()) => {
  switch (t) {
    case "year":
      return e *= 365, Ra(e, "day", n, s);
    case "quarter":
      e *= 3;
      break;
    case "month":
      return e *= 30, Ra(e, "day", n, s);
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
function bd({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = qn(i, n);
  return s = typeof s == "function" ? s(a) : ot(s, a), /* @__PURE__ */ g(Ml, { ...r, children: [
    o,
    s
  ] });
}
function xd({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ g(Gt, { type: n, ...l })), c = (f, d) => {
    const p = [];
    for (let m = f; m <= d; m++) {
      l.text = m, delete l.icon, l.disabled = !1;
      const v = qn(i, m);
      r && (l.url = typeof r == "function" ? r(v) : ot(r, v)), p.push(/* @__PURE__ */ g(Gt, { type: n, ...l, onClick: o }));
    }
    return p;
  };
  let u = [];
  return u = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? u = [...u, ...c(2, i.pageTotal)] : i.page < s - 2 ? u = [...u, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? u = [...u, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : u = [...u, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), u;
}
function $d({
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
  return r.text = typeof a == "function" ? a(t) : ot(a, t), i.menu = { ...i.menu, className: T((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(Vl, { type: "dropdown", dropdown: i, ...r });
}
function kd({
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
  const f = (m) => {
    var v;
    u = Number((v = m.target) == null ? void 0 : v.value) || 1, u = u > i.pageTotal ? i.pageTotal : u;
  }, d = (m) => {
    if (!(m != null && m.target))
      return;
    u = u <= i.pageTotal ? u : i.pageTotal;
    const v = qn(i, u);
    a && !a({ info: v, event: m }) || (m.target.href = c.url = typeof l == "function" ? l(v) : ot(l, v));
  }, p = qn(i, t || 0);
  return c.url = typeof l == "function" ? l(p) : ot(l, p), /* @__PURE__ */ g("div", { className: T("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ g(Gt, { type: s, ...c, onClick: d })
  ] });
}
let Mi = class extends wt {
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
Mi.NAME = "pager";
Mi.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Mi.ItemComponents = {
  ...wt.ItemComponents,
  link: vd,
  info: bd,
  nav: xd,
  "size-menu": $d,
  goto: kd
};
class uc extends et {
}
uc.NAME = "Pager";
uc.Component = Mi;
var ai, li, dc;
class Cd extends V {
  constructor() {
    super(...arguments);
    L(this, li);
    L(this, ai, (n) => {
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
          nt(this, li, dc).call(this),
          a,
          /* @__PURE__ */ g("span", { class: "caret" })
        ]
      }
    );
  }
}
ai = new WeakMap(), li = new WeakSet(), dc = function() {
  const { selections: n = [], placeholder: s } = this.props;
  return n.length ? /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: n.map((i, o) => /* @__PURE__ */ g("div", { className: "picker-multi-selection", children: [
    i.text ?? i.value,
    /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: E(this, ai), "data-idx": o, children: /* @__PURE__ */ g("span", { className: "close" }) })
  ] })) }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: s });
};
var ci;
class Sd extends V {
  constructor() {
    super(...arguments);
    L(this, ci, (n) => {
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
    } = this.props, [u] = a, f = u ? /* @__PURE__ */ g("span", { className: "picker-single-selection", children: u.text ?? u.value }) : /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }), d = u && l ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", onClick: E(this, ci), children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
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
ci = new WeakMap();
var Md = ["Shift", "Meta", "Alt", "Control"], Ed = typeof navigator == "object" && /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "Meta" : "Control";
function ji(e, t) {
  return typeof e.getModifierState == "function" && e.getModifierState(t);
}
function Td(e) {
  return e.trim().split(" ").map(function(t) {
    var n = t.split(/\b\+/), s = n.pop();
    return [n = n.map(function(i) {
      return i === "$mod" ? Ed : i;
    }), s];
  });
}
function Rd(e, t) {
  var n;
  t === void 0 && (t = {});
  var s = (n = t.timeout) != null ? n : 1e3, i = Object.keys(e).map(function(a) {
    return [Td(a), e[a]];
  }), o = /* @__PURE__ */ new Map(), r = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var h = l[0], c = l[1], u = o.get(h) || h;
      (function(f, d) {
        return !(d[1].toUpperCase() !== f.key.toUpperCase() && d[1] !== f.code || d[0].find(function(p) {
          return !ji(f, p);
        }) || Md.find(function(p) {
          return !d[0].includes(p) && d[1] !== p && ji(f, p);
        }));
      })(a, u[0]) ? u.length > 1 ? o.set(h, u.slice(1)) : (o.delete(h), c(a)) : ji(a, a.key) || o.delete(h);
    }), r && clearTimeout(r), r = setTimeout(o.clear.bind(o), s));
  };
}
function Nd(e, t, n) {
  var s;
  n === void 0 && (n = {});
  var i = (s = n.event) != null ? s : "keydown", o = Rd(t, n);
  return e.addEventListener(i, o), function() {
    e.removeEventListener(i, o);
  };
}
const Ad = (e, t) => e.reduce((n, s) => [...n].reduce((i, o) => {
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
var ne, tn, en, Xn, nn, Ts, ve, Cn, hi, fc, sn, Jn, on, Zn, ui, pc;
class Ld extends V {
  constructor() {
    super(...arguments);
    L(this, nn);
    L(this, ve);
    L(this, hi);
    L(this, ui);
    L(this, ne, void 0);
    L(this, tn, void 0);
    L(this, en, void 0);
    L(this, Xn, void 0);
    L(this, sn, void 0);
    L(this, Jn, void 0);
    L(this, on, void 0);
    L(this, Zn, void 0);
    this.state = { keys: "", show: !1 }, B(this, ne, 0), B(this, tn, Ct()), B(this, en, Ct()), B(this, sn, (n) => {
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
    y(document).on("click", E(this, sn)), this.show(this.focus.bind(this)), B(this, Xn, Nd(window, {
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
    const n = nt(this, nn, Ts).call(this);
    n && y(n).on("mouseenter.pickerMenu.zui", ".menu-item", (s) => {
      const i = y(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    var s;
    y(document).off("click", E(this, sn)), (s = E(this, Xn)) == null || s.call(this);
    const n = nt(this, nn, Ts).call(this);
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
    this.state.show && (E(this, ne) && window.clearTimeout(E(this, ne)), this.setState({ show: !1 }, () => {
      B(this, ne, window.setTimeout(() => {
        var n, s;
        B(this, ne, 0), (s = (n = this.props).onRequestHide) == null || s.call(n);
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
    } = this.props, { show: c, keys: u } = this.state, f = u.trim().length;
    return /* @__PURE__ */ g(
      "div",
      {
        className: T("picker-menu menu-popup", s, { shown: c, "has-search": f }),
        id: `picker-menu-${n}`,
        style: { maxHeight: o, maxWidth: r, width: a, ...i },
        children: [
          nt(this, ui, pc).call(this),
          /* @__PURE__ */ g(
            xi,
            {
              ref: E(this, en),
              className: "picker-menu-list",
              items: nt(this, hi, fc).call(this),
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
ne = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), Xn = new WeakMap(), nn = new WeakSet(), Ts = function() {
  var n;
  return (n = E(this, en).current) == null ? void 0 : n.ref.current;
}, ve = new WeakSet(), Cn = function() {
  const n = nt(this, nn, Ts).call(this);
  if (n)
    return y(n).find(".menu-item>a.hover");
}, hi = new WeakSet(), fc = function() {
  const { selections: n, items: s } = this.props, i = new Set(n), { keys: o, hover: r } = this.state, a = o.toLowerCase().split(" ").filter((c) => c.length);
  let l = !1;
  const h = s.reduce((c, u) => {
    const {
      value: f,
      keys: d,
      text: p,
      className: m,
      ...v
    } = u;
    if (!a.length || a.every((w) => f.toLowerCase().includes(w) || (d == null ? void 0 : d.toLowerCase().includes(w)) || typeof p == "string" && p.toLowerCase().includes(w))) {
      let w = p ?? f;
      typeof w == "string" && a.length && (w = Ad(a, [w])), f === r && (l = !0), c.push({
        key: f,
        active: i.has(f),
        text: w,
        className: T(m, { hover: f === r }),
        "data-value": f,
        ...v
      });
    }
    return c;
  }, []);
  return !l && h.length && (h[0].className = T(h[0].className, "hover")), h;
}, sn = new WeakMap(), Jn = new WeakMap(), on = new WeakMap(), Zn = new WeakMap(), ui = new WeakSet(), pc = function() {
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
var kr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Z = (e, t, n) => (kr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ys = (e, t, n, s) => (kr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Wd = (e, t, n, s) => ({
  set _(i) {
    Ys(e, t, i, n);
  },
  get _() {
    return Z(e, t, s);
  }
}), st = (e, t, n) => (kr(e, t, "access private method"), n), Rs, ln, Ks, Ot, Oe, Sn, Xs, Cr, Ns, vo, _o, mc, Sr, Mr, Er, Tr, Rr, gc, bo, yc, Nr, wc, As, xo;
let vc = class extends V {
  constructor(t) {
    super(t), X(this, Oe), X(this, Xs), X(this, Ns), X(this, _o), X(this, Rr), X(this, bo), X(this, Nr), X(this, As), X(this, Rs, 0), X(this, ln, y.guid++), X(this, Ks, Ct()), X(this, Ot, void 0), X(this, Sr, (n) => {
      const { valueList: s } = this, i = new Set(n.map((r) => r.value)), o = s.filter((r) => !i.has(r));
      this.setValue(o);
    }), X(this, Mr, () => {
      requestAnimationFrame(() => this.toggle());
    }), X(this, Er, () => {
      this.close();
    }), X(this, Tr, (n) => {
      this.props.multiple ? this.toggleValue(n.value) : this.setValue(n.value).then(() => {
        var s;
        (s = Z(this, Ks).current) == null || s.hide();
      });
    }), this.state = {
      value: st(this, Ns, vo).call(this, t.defaultValue) ?? "",
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
    return st(this, Xs, Cr).call(this, this.state.value);
  }
  componentDidMount() {
    st(this, As, xo).call(this, !0);
  }
  componentDidUpdate() {
    st(this, As, xo).call(this);
  }
  componentWillUnmount() {
    var n;
    var t;
    (n = this.props.beforeDestroy) == null || n.call(this), (t = Z(this, Ot)) == null || t.call(this), Ys(this, Ot, void 0);
  }
  async loadItems() {
    let { items: t } = this.props;
    if (typeof t == "function") {
      const s = ++Wd(this, Rs)._;
      if (await st(this, Oe, Sn).call(this, { loading: !0, items: [] }), t = await t(), Z(this, Rs) !== s)
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
    await st(this, Oe, Sn).call(this, { value: st(this, Ns, vo).call(this, t), ...n }), (s = this.props.onChange) == null || s.call(this, this.getValue());
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
    } = this.props, a = o || (i ? Cd : Sd), l = st(this, _o, mc).call(this);
    return /* @__PURE__ */ g(
      "div",
      {
        id: `picker-${Z(this, ln)}`,
        className: T("picker", t),
        style: n,
        children: [
          /* @__PURE__ */ g(a, { ...l }),
          s,
          st(this, bo, yc).call(this),
          r ? /* @__PURE__ */ g("input", { type: "hidden", className: "picker-value", name: r, value: this.state.value }) : null
        ]
      }
    );
  }
};
Rs = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Oe = /* @__PURE__ */ new WeakSet();
Sn = function(e) {
  return new Promise((t) => {
    this.setState(e, t);
  });
};
Xs = /* @__PURE__ */ new WeakSet();
Cr = function(e) {
  return typeof e == "string" ? e.length ? y.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? y.unique(e) : [];
};
Ns = /* @__PURE__ */ new WeakSet();
vo = function(e) {
  const t = st(this, Xs, Cr).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
_o = /* @__PURE__ */ new WeakSet();
mc = function() {
  const { placeholder: e, disabled: t, multiple: n } = this.props, { open: s } = this.state;
  return {
    focused: s,
    placeholder: e,
    disabled: t,
    multiple: n,
    selections: this.getSelections(),
    onClick: Z(this, Mr),
    onDeselect: Z(this, Sr)
  };
};
Sr = /* @__PURE__ */ new WeakMap();
Mr = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakMap();
Rr = /* @__PURE__ */ new WeakSet();
gc = function() {
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
    onRequestHide: Z(this, Er),
    onSelectItem: Z(this, Tr)
  };
};
bo = /* @__PURE__ */ new WeakSet();
yc = function() {
  const { open: e } = this.state;
  if (!e)
    return null;
  const t = y(this.props.container || "body");
  let n = t.find(".pickers-container");
  n.length || (n = y("<div>").addClass("pickers-container").appendTo(t));
  const { Menu: s = Ld } = this.props;
  return Mu(/* @__PURE__ */ g(s, { ...st(this, Rr, gc).call(this), ref: Z(this, Ks) }), n[0]);
};
Nr = /* @__PURE__ */ new WeakSet();
wc = function() {
  const e = y(`#picker-${Z(this, ln)}`)[0], t = y(`#picker-menu-${Z(this, ln)}`)[0];
  if (!t || !e || !this.state.open) {
    Z(this, Ot) && (Z(this, Ot).call(this), Ys(this, Ot, void 0));
    return;
  }
  Z(this, Ot) || Ys(this, Ot, hr(e, t, () => {
    const { menuDirection: n, menuWidth: s } = this.props;
    Si(e, t, {
      placement: `${n === "top" ? "top" : "bottom"}-start`,
      middleware: [n === "auto" ? $i() : null, io(), ar(1)].filter(Boolean)
    }).then(({ x: i, y: o }) => {
      y(t).css({ left: i, top: o, width: s === "100%" ? y(e).width() : void 0 });
    }), s === "100%" && y(t).css({ width: y(e).width() });
  }));
};
As = /* @__PURE__ */ new WeakSet();
xo = function(e = !1) {
  var t;
  (t = this.props.afterRender) == null || t.call(this, { firstRender: e }), st(this, Nr, wc).call(this);
};
vc.defaultProps = {
  container: "body",
  valueSplitter: ",",
  search: !0,
  menuWidth: "100%",
  menuDirection: "auto",
  menuMaxHeight: 300
};
class _c extends et {
}
_c.NAME = "Picker";
_c.Component = vc;
class bc extends ut {
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
    return i && s.middleware.push($i()), o && s.middleware.push(o === !0 ? io() : io(o)), r && s.middleware.push(so({ element: this.$arrow[0] })), a && s.middleware.push(ar(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = hr(t, n, () => {
      Si(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !so || !r.arrow)
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
bc.NAME = "Popovers";
bc.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
class xc extends et {
}
xc.NAME = "Toolbar";
xc.Component = wt;
function is(e) {
  return e.split("-")[1];
}
function Ar(e) {
  return e === "y" ? "height" : "width";
}
function je(e) {
  return e.split("-")[0];
}
function Ei(e) {
  return ["top", "bottom"].includes(je(e)) ? "x" : "y";
}
function Na(e, t, n) {
  let { reference: s, floating: i } = e;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = Ei(t), l = Ar(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
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
const Pd = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = n, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: u } = Na(h, s, l), f = s, d = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    const { name: v, fn: w } = a[m], { x: _, y: $, data: C, reset: k } = await w({ x: c, y: u, initialPlacement: s, placement: f, strategy: i, middlewareData: d, rects: h, platform: r, elements: { reference: e, floating: t } });
    c = _ ?? c, u = $ ?? u, d = { ...d, [v]: { ...d[v], ...C } }, k && p <= 50 && (p++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (h = k.rects === !0 ? await r.getElementRects({ reference: e, floating: t, strategy: i }) : k.rects), { x: c, y: u } = Na(h, f, l)), m = -1);
  }
  return { x: c, y: u, placement: f, strategy: i, middlewareData: d };
};
function $c(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Js(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Dd(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: u = "floating", altBoundary: f = !1, padding: d = 0 } = t, p = $c(d), m = a[f ? u === "floating" ? "reference" : "floating" : u], v = Js(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(m))) == null || n ? m : m.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), w = u === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, C = Js(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - C.top + p.top) / $.y, bottom: (C.bottom - v.bottom + p.bottom) / $.y, left: (v.left - C.left + p.left) / $.x, right: (C.right - v.right + p.right) / $.x };
}
const Id = Math.min, Od = Math.max;
function Hd(e, t, n) {
  return Od(e, Id(t, n));
}
const Bd = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: o, placement: r, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = $c(s), c = { x: i, y: o }, u = Ei(r), f = Ar(u), d = await l.getDimensions(n), p = u === "y" ? "top" : "left", m = u === "y" ? "bottom" : "right", v = a.reference[f] + a.reference[u] - c[u] - a.floating[f], w = c[u] - a.reference[u], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let $ = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[f]);
  const C = v / 2 - w / 2, k = h[p], M = $ - d[f] - h[m], N = $ / 2 - d[f] / 2 + C, A = Hd(k, N, M), O = is(r) != null && N != A && a.reference[f] / 2 - (N < k ? h[p] : h[m]) - d[f] / 2 < 0;
  return { [u]: c[u] - (O ? N < k ? k - N : M - N : 0), data: { [u]: A, centerOffset: N - A } };
} }), zd = ["top", "right", "bottom", "left"];
zd.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Fd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Zs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Fd[t]);
}
function Ud(e, t, n) {
  n === void 0 && (n = !1);
  const s = is(e), i = Ei(e), o = Ar(i);
  let r = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = Zs(r)), { main: r, cross: Zs(r) };
}
const Vd = { start: "end", end: "start" };
function Gi(e) {
  return e.replace(/start|end/g, (t) => Vd[t]);
}
const qd = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: u, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: p = !0, ...m } = e, v = je(s), w = je(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = u || (w || !p ? [Zs(r)] : function(b) {
      const R = Zs(b);
      return [Gi(b), R, Gi(R)];
    }(r));
    u || d === "none" || $.push(...function(b, R, D, W) {
      const I = is(b);
      let P = function(F, dt, Mt) {
        const rs = ["left", "right"], cn = ["right", "left"], as = ["top", "bottom"], Pi = ["bottom", "top"];
        switch (F) {
          case "top":
          case "bottom":
            return Mt ? dt ? cn : rs : dt ? rs : cn;
          case "left":
          case "right":
            return dt ? as : Pi;
          default:
            return [];
        }
      }(je(b), D === "start", W);
      return I && (P = P.map((F) => F + "-" + I), R && (P = P.concat(P.map(Gi)))), P;
    }(r, p, d, _));
    const C = [r, ...$], k = await Dd(t, m), M = [];
    let N = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && M.push(k[v]), c) {
      const { main: b, cross: R } = Ud(s, o, _);
      M.push(k[b], k[R]);
    }
    if (N = [...N, { placement: s, overflows: M }], !M.every((b) => b <= 0)) {
      var A;
      const b = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = C[b];
      if (R)
        return { data: { index: b, overflows: N }, reset: { placement: R } };
      let D = "bottom";
      switch (f) {
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
}, jd = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), u = je(a), f = is(a), d = Ei(a) === "x", p = ["left", "top"].includes(u) ? -1 : 1, m = c && d ? -1 : 1, v = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return f && typeof $ == "number" && (_ = f === "end" ? -1 * $ : $), d ? { x: _ * m, y: w * p } : { x: w * p, y: _ * m };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function ct(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
  return ct(e).getComputedStyle(e);
}
function le(e) {
  return Cc(e) ? (e.nodeName || "").toLowerCase() : "";
}
let gs;
function kc() {
  if (gs)
    return gs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (gs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), gs) : navigator.userAgent;
}
function Yt(e) {
  return e instanceof ct(e).HTMLElement;
}
function gt(e) {
  return e instanceof ct(e).Element;
}
function Cc(e) {
  return e instanceof ct(e).Node;
}
function Aa(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ct(e).ShadowRoot || e instanceof ShadowRoot;
}
function Ti(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = $t(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function Gd(e) {
  return ["table", "td", "th"].includes(le(e));
}
function $o(e) {
  const t = /firefox/i.test(kc()), n = $t(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = n.contain;
    return o != null && o.includes(i);
  });
}
function Sc() {
  return !/^((?!chrome|android).)*safari/i.test(kc());
}
function Lr(e) {
  return ["html", "body", "#document"].includes(le(e));
}
const La = Math.min, Pn = Math.max, Qs = Math.round;
function Mc(e) {
  const t = $t(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, o = e.offsetHeight, r = Qs(n) !== i || Qs(s) !== o;
  return r && (n = i, s = o), { width: n, height: s, fallback: r };
}
function Ec(e) {
  return gt(e) ? e : e.contextElement;
}
const Tc = { x: 1, y: 1 };
function Ge(e) {
  const t = Ec(e);
  if (!Yt(t))
    return Tc;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: o } = Mc(t);
  let r = (o ? Qs(n.width) : n.width) / s, a = (o ? Qs(n.height) : n.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Me(e, t, n, s) {
  var i, o;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = Ec(e);
  let l = Tc;
  t && (s ? gt(s) && (l = Ge(s)) : l = Ge(e));
  const h = a ? ct(a) : window, c = !Sc() && n;
  let u = (r.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, f = (r.top + (c && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, d = r.width / l.x, p = r.height / l.y;
  if (a) {
    const m = ct(a), v = s && gt(s) ? ct(s) : s;
    let w = m.frameElement;
    for (; w && s && v !== m; ) {
      const _ = Ge(w), $ = w.getBoundingClientRect(), C = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(C.paddingLeft)) * _.x, $.y += (w.clientTop + parseFloat(C.paddingTop)) * _.y, u *= _.x, f *= _.y, d *= _.x, p *= _.y, u += $.x, f += $.y, w = ct(w).frameElement;
    }
  }
  return { width: d, height: p, top: f, right: u + d, bottom: f + p, left: u, x: u, y: f };
}
function re(e) {
  return ((Cc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ri(e) {
  return gt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Rc(e) {
  return Me(re(e)).left + Ri(e).scrollLeft;
}
function Yd(e, t, n) {
  const s = Yt(t), i = re(t), o = Me(e, !0, n === "fixed", t);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((le(t) !== "body" || Ti(i)) && (r = Ri(t)), Yt(t)) {
      const l = Me(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Rc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function jn(e) {
  if (le(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (Aa(e) ? e.host : null) || re(e);
  return Aa(t) ? t.host : t;
}
function Wa(e) {
  return Yt(e) && $t(e).position !== "fixed" ? e.offsetParent : null;
}
function Pa(e) {
  const t = ct(e);
  let n = Wa(e);
  for (; n && Gd(n) && $t(n).position === "static"; )
    n = Wa(n);
  return n && (le(n) === "html" || le(n) === "body" && $t(n).position === "static" && !$o(n)) ? t : n || function(s) {
    let i = jn(s);
    for (; Yt(i) && !Lr(i); ) {
      if ($o(i))
        return i;
      i = jn(i);
    }
    return null;
  }(e) || t;
}
function Nc(e) {
  const t = jn(e);
  return Lr(t) ? e.ownerDocument.body : Yt(t) && Ti(t) ? t : Nc(t);
}
function Dn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Nc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), o = ct(s);
  return i ? t.concat(o, o.visualViewport || [], Ti(s) ? s : []) : t.concat(s, Dn(s));
}
function Da(e, t, n) {
  return t === "viewport" ? Js(function(s, i) {
    const o = ct(s), r = re(s), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, c = 0, u = 0;
    if (a) {
      l = a.width, h = a.height;
      const f = Sc();
      (f || !f && i === "fixed") && (c = a.offsetLeft, u = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: u };
  }(e, n)) : gt(t) ? function(s, i) {
    const o = Me(s, !0, i === "fixed"), r = o.top + s.clientTop, a = o.left + s.clientLeft, l = Yt(s) ? Ge(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, u = a * l.x, f = r * l.y;
    return { top: f, left: u, right: u + h, bottom: f + c, x: u, y: f, width: h, height: c };
  }(t, n) : Js(function(s) {
    var i;
    const o = re(s), r = Ri(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Pn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Pn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -r.scrollLeft + Rc(s);
    const u = -r.scrollTop;
    return $t(a || o).direction === "rtl" && (c += Pn(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: u };
  }(re(e)));
}
const Kd = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const o = n === "clippingAncestors" ? function(h, c) {
    const u = c.get(h);
    if (u)
      return u;
    let f = Dn(h).filter((v) => gt(v) && le(v) !== "body"), d = null;
    const p = $t(h).position === "fixed";
    let m = p ? jn(h) : h;
    for (; gt(m) && !Lr(m); ) {
      const v = $t(m), w = $o(m);
      (p ? w || d : w || v.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = v : f = f.filter((_) => _ !== m), m = jn(m);
    }
    return c.set(h, f), f;
  }(t, this._c) : [].concat(n), r = [...o, s], a = r[0], l = r.reduce((h, c) => {
    const u = Da(t, c, i);
    return h.top = Pn(u.top, h.top), h.right = La(u.right, h.right), h.bottom = La(u.bottom, h.bottom), h.left = Pn(u.left, h.left), h;
  }, Da(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Yt(n), o = re(n);
  if (n === o)
    return t;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((le(n) !== "body" || Ti(o)) && (r = Ri(n)), Yt(n))) {
    const h = Me(n);
    a = Ge(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - r.scrollLeft * a.x + l.x, y: t.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: gt, getDimensions: function(e) {
  return Mc(e);
}, getOffsetParent: Pa, getDocumentElement: re, getScale: Ge, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || Pa, o = this.getDimensions;
  return { reference: Yd(t, await i(n), s), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => $t(e).direction === "rtl" };
function Xd(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || o ? [...gt(e) ? Dn(e) : e.contextElement ? Dn(e.contextElement) : [], ...Dn(t)] : [];
  h.forEach((d) => {
    l && d.addEventListener("scroll", n, { passive: !0 }), o && d.addEventListener("resize", n);
  });
  let c, u = null;
  if (r) {
    let d = !0;
    u = new ResizeObserver(() => {
      d || n(), d = !1;
    }), gt(e) && !a && u.observe(e), gt(e) || !e.contextElement || a || u.observe(e.contextElement), u.observe(t);
  }
  let f = a ? Me(e) : null;
  return a && function d() {
    const p = Me(e);
    !f || p.x === f.x && p.y === f.y && p.width === f.width && p.height === f.height || n(), f = p, c = requestAnimationFrame(d);
  }(), n(), () => {
    var d;
    h.forEach((p) => {
      l && p.removeEventListener("scroll", n), o && p.removeEventListener("resize", n);
    }), (d = u) == null || d.disconnect(), u = null, a && cancelAnimationFrame(c);
  };
}
const Jd = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Kd, ...n }, o = { ...i.platform, _c: s };
  return Pd(e, t, { ...i, platform: o });
};
var Wr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, U = (e, t, n) => (Wr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), G = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ee = (e, t, n, s) => (Wr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), xt = (e, t, n) => (Wr(e, t, "access private method"), n), In, On, Mn, Fe, rt, ko, ti, Ni, Pr, Dr, Ac, Co, Lc, Ir, Wc, Or, Pc, Hr, Dc, So, Ic, Br, Oc, Hn, Mo, Hc;
const Ue = class extends ut {
  constructor() {
    super(...arguments), G(this, Ni), G(this, Dr), G(this, Co), G(this, Ir), G(this, Or), G(this, Hr), G(this, So), G(this, Br), G(this, Mo), G(this, In, !1), G(this, On, void 0), G(this, Mn, 0), G(this, Fe, void 0), G(this, rt, void 0), G(this, ko, void 0), G(this, ti, void 0), this.hideLater = () => {
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
    return U(this, Fe) || xt(this, Co, Lc).call(this);
  }
  get trigger() {
    return U(this, ko) || this.element;
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
    return this.setOptions(e), !U(this, In) && this.isHover && xt(this, Mo, Hc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(Ue.CLASS_SHOW), xt(this, So, Ic).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = U(this, ti)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = U(this, Fe)) == null || t.classList.remove(Ue.CLASS_SHOW), !0;
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
rt = /* @__PURE__ */ new WeakMap();
ko = /* @__PURE__ */ new WeakMap();
ti = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakSet();
Pr = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
Dr = /* @__PURE__ */ new WeakSet();
Ac = function() {
  const e = xt(this, Ni, Pr).call(this);
  return Ee(this, rt, document.createElement("div")), U(this, rt).style.position = this.options.strategy, U(this, rt).style.width = `${e}px`, U(this, rt).style.height = `${e}px`, U(this, rt).style.transform = "rotate(45deg)", U(this, rt);
};
Co = /* @__PURE__ */ new WeakSet();
Lc = function() {
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
  if (this.options.arrow && (t == null || t.append(xt(this, Dr, Ac).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Ee(this, Fe, t), t;
};
Ir = /* @__PURE__ */ new WeakSet();
Wc = function() {
  var i;
  const e = xt(this, Ni, Pr).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [jd(e), qd()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && U(this, rt) && ((i = s.middleware) == null || i.push(Bd({ element: U(this, rt) }))), s;
};
Or = /* @__PURE__ */ new WeakSet();
Pc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Hr = /* @__PURE__ */ new WeakSet();
Dc = function(e) {
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
So = /* @__PURE__ */ new WeakSet();
Ic = function() {
  const e = xt(this, Ir, Wc).call(this), t = xt(this, Br, Oc).call(this);
  Ee(this, ti, Xd(t, this.tooltip, () => {
    Jd(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: o }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const r = o.split("-")[0], a = xt(this, Or, Pc).call(this, r);
      if (i.arrow && U(this, rt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(U(this, rt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-U(this, rt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...xt(this, Hr, Dc).call(this, r)
        });
      }
    });
  }));
};
Br = /* @__PURE__ */ new WeakSet();
Oc = function() {
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
Mo = /* @__PURE__ */ new WeakSet();
Hc = function() {
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
function Zd({
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
      title: d,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${w} * var(--tree-indent, 20px))` }, i),
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
        /* @__PURE__ */ g(Un, { icon: f, className: "tree-trailing-icon" })
      ]
    }
  );
}
let zr = class extends bi {
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
zr.ItemComponents = {
  item: Zd
};
zr.NAME = "tree";
class Bc extends et {
}
Bc.NAME = "Tree";
Bc.Component = zr;
var Qn, di, fi, pi;
class Qd extends V {
  constructor(n) {
    super(n);
    L(this, Qn, Ct());
    L(this, di, (n) => {
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
    L(this, fi, (n) => {
      var o, r, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (o = n.dataTransfer) == null || o.setData("application/id", this.props.block.id), (a = (r = this.props).onDragStart) == null || a.call(r, n);
    });
    L(this, pi, (n) => {
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
      fetch(ot(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...o
      }).then((r) => {
        r.ok ? r.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ g(kl, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
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
        onDragStart: E(this, fi),
        onDragEnd: E(this, pi),
        "data-id": c,
        ref: E(this, Qn),
        children: [
          /* @__PURE__ */ g("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ g("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ g("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ g("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: E(this, di), children: /* @__PURE__ */ g("div", { class: "more-vert" }) }) }) : null
          ] }),
          f
        ]
      }
    ) });
  }
}
Qn = new WeakMap(), di = new WeakMap(), fi = new WeakMap(), pi = new WeakMap();
var zc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ut = (e, t, n) => (zc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), pt = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, vt = (e, t, n) => (zc(e, t, "access private method"), n), Kt, Fr, Fc, Ur, Uc, Eo, Vc, Vr, qc, ei, To, Ai, Ro, qr, jc, No, Ao, Li, jr;
const Gr = class extends V {
  constructor() {
    super(...arguments), pt(this, Fr), pt(this, Ur), pt(this, Eo), pt(this, Vr), pt(this, ei), pt(this, Ai), pt(this, qr), pt(this, Kt, /* @__PURE__ */ new Map()), this.state = {}, pt(this, No, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), pt(this, Ao, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = vt(this, Eo, Vc).call(this), { cellHeight: n, grid: s } = this.props, i = Ut(this, Kt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ g("div", { class: "dashboard", children: /* @__PURE__ */ g("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((o, r) => {
      const { id: a } = o, [l, h, c, u] = i.get(a) || [0, 0, o.width, o.height];
      return /* @__PURE__ */ g(
        Qd,
        {
          id: a,
          index: r,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * u,
          width: `${100 * c / s}%`,
          block: o,
          moreMenu: !0,
          onDragStart: Ut(this, No),
          onDragEnd: Ut(this, Ao)
        },
        o.id
      );
    }) }) });
  }
};
let Yr = Gr;
Kt = /* @__PURE__ */ new WeakMap();
Fr = /* @__PURE__ */ new WeakSet();
Fc = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Ur = /* @__PURE__ */ new WeakSet();
Uc = function() {
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
    } = i, [f, d] = vt(this, Fr, Fc).call(this, r);
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
Eo = /* @__PURE__ */ new WeakSet();
Vc = function() {
  Ut(this, Kt).clear();
  let e = 0;
  const t = vt(this, Ur, Uc).call(this);
  return t.forEach((n) => {
    vt(this, Vr, qc).call(this, n);
    const [, s, , i] = Ut(this, Kt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Vr = /* @__PURE__ */ new WeakSet();
qc = function(e) {
  const t = Ut(this, Kt), { id: n, left: s, top: i, width: o, height: r } = e;
  if (s < 0 || i < 0) {
    const [a, l] = vt(this, qr, jc).call(this, o, r, s, i);
    t.set(n, [a, l, o, r]);
  } else
    vt(this, Ai, Ro).call(this, n, [s, i, o, r]);
};
ei = /* @__PURE__ */ new WeakSet();
To = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Ut(this, Kt).entries())
    if (s !== n && vt(t = Gr, Li, jr).call(t, i, e))
      return !1;
  return !0;
};
Ai = /* @__PURE__ */ new WeakSet();
Ro = function(e, t) {
  var n;
  Ut(this, Kt).set(e, t);
  for (const [s, i] of Ut(this, Kt).entries())
    s !== e && vt(n = Gr, Li, jr).call(n, i, t) && (i[1] = t[1] + t[3], vt(this, Ai, Ro).call(this, s, i));
};
qr = /* @__PURE__ */ new WeakSet();
jc = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (vt(this, ei, To).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, o = s < 0 ? 0 : s, r = !1;
  const a = this.props.grid;
  for (; !r; ) {
    if (vt(this, ei, To).call(this, [i, o, e, t])) {
      r = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, o += 1)) : o += 1;
  }
  return [i, o];
};
No = /* @__PURE__ */ new WeakMap();
Ao = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakSet();
jr = function([e, t, n, s], [i, o, r, a]) {
  return !(e + n <= i || i + r <= e || t + s <= o || o + a <= t);
};
pt(Yr, Li);
Yr.defaultProps = {
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
class Gc extends et {
}
Gc.NAME = "Dashboard";
Gc.Component = Yr;
var se, ie;
class Ia extends V {
  constructor(n) {
    super(n);
    L(this, se, void 0);
    L(this, ie, void 0);
    B(this, se, 0), B(this, ie, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (E(this, se) && cancelAnimationFrame(E(this, se)), B(this, se, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), B(this, se, 0);
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
    n && (B(this, ie, typeof n == "string" ? document : n.current), E(this, ie).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), E(this, ie) && E(this, ie).removeEventListener("wheel", this._handleWheel);
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
    }, m = {};
    return s === "horz" ? (p.height = i, p.width = n, m.width = this.barSize, m.left = Math.round(Math.min(u, f) * (n - m.width) / u)) : (p.width = i, p.height = n, m.height = this.barSize, m.top = Math.round(Math.min(u, f) * (n - m.height) / u)), /* @__PURE__ */ g(
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
            style: m,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
se = new WeakMap(), ie = new WeakMap();
function Yc({ col: e, className: t, height: n, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, ...h }) {
  var O;
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
  }], m = ["dtable-cell-content", e.setting.cellClass], v = (O = s.data) == null ? void 0 : O[e.name], w = [a ?? v ?? ""], _ = i ? i(w, { row: s, col: e, value: v }, q) : w, $ = [], C = [], k = {}, M = {};
  let N = "div";
  _ == null || _.forEach((b) => {
    if (typeof b == "object" && b && !Q(b) && ("html" in b || "className" in b || "style" in b || "attrs" in b || "children" in b || "tagName" in b)) {
      const R = b.outer ? $ : C;
      b.html ? R.push(/* @__PURE__ */ g("div", { className: T("dtable-cell-html", b.className), style: b.style, dangerouslySetInnerHTML: { __html: b.html }, ...b.attrs ?? {} })) : (b.style && Object.assign(b.outer ? c : d, b.style), b.className && (b.outer ? p : m).push(b.className), b.children && R.push(b.children), b.attrs && Object.assign(b.outer ? k : M, b.attrs)), b.tagName && !b.outer && (N = b.tagName);
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
        C.length > 0 && /* @__PURE__ */ g(A, { className: T(m), style: d, ...M, children: C }),
        $
      ]
    }
  );
}
function Yi({ row: e, className: t, top: n = 0, left: s = 0, width: i, height: o, cols: r, CellComponent: a = Yc, onRenderCell: l }) {
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
function Kc({
  row: e,
  className: t,
  top: n,
  height: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  CellComponent: l = Yc,
  onRenderCell: h,
  style: c,
  ...u
}) {
  let f = null;
  i.list.length && (f = /* @__PURE__ */ g(
    Yi,
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
    Yi,
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
    Yi,
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
        f,
        d,
        p
      ]
    }
  );
}
function tf({ height: e, onRenderRow: t, ...n }) {
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
  return /* @__PURE__ */ g("div", { className: "dtable-header", style: { height: e }, children: /* @__PURE__ */ g(Kc, { ...s }) });
}
function ef({
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
    return u && Object.assign(c, u), /* @__PURE__ */ g(Kc, { ...c }, h.id);
  }) });
}
const ni = /* @__PURE__ */ new Map(), si = [];
function Xc(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && ni.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  ni.set(n, e), t != null && t.buildIn && !si.includes(n) && si.push(n);
}
function ue(e, t) {
  Xc(e, t);
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
function Jc(e) {
  return ni.delete(e);
}
function nf(e) {
  if (typeof e == "string") {
    const t = ni.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function Zc(e, t, n) {
  return t.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = nf(s);
    i && (n.has(i.name) || ((o = i.plugins) != null && o.length && Zc(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function sf(e = [], t = !0) {
  return t && si.length && e.unshift(...si), e != null && e.length ? Zc([], e, /* @__PURE__ */ new Set()) : [];
}
function Qc() {
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
function of(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Oa(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Ki(e, t = !1) {
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
function rf(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Oa(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
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
      index: d.length
    }, N = w[$];
    N && N.forEach((I) => {
      const P = typeof I == "function" ? I.call(e, k) : I;
      P && Object.assign(k, P, _);
    });
    const { fixed: A, flex: O, minWidth: b = o, maxWidth: R = r } = k, D = Oa(k.width || i, i);
    M.flex = O === !0 ? 1 : typeof O == "number" ? O : 0, M.width = of(D < 1 ? Math.round(D * s) : D, b, R), v.forEach((I) => I.call(e, M)), d.push(M), p[M.name] = M;
    const W = A ? A === "left" ? u : f : c;
    W.list.push(M), W.totalWidth += M.width, W.width = W.totalWidth, M.flex && W.flexList.push(M), typeof k.order == "number" && (m = !0);
  }), m) {
    const _ = ($, C) => ($.setting.order ?? 0) - (C.setting.order ?? 0);
    d.sort(_), u.list.sort(_), c.list.sort(_), f.list.sort(_);
  }
  return Ki(u, !0), Ki(f, !0), c.widthSetting = s - u.width - f.width, Ki(c), {
    list: d,
    map: p,
    left: u,
    center: c,
    right: f
  };
}
var Kr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, S = (e, t, n) => (Kr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), H = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Y = (e, t, n, s) => (Kr(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Lt = (e, t, n) => (Kr(e, t, "access private method"), n), He, En, $e, Ht, we, J, Pt, At, Tn, Ls, ii, Qt, Rn, Nn, Lo, th, Wo, eh, Po, nh, Do, sh, Ws, Io, Xr, Jr, Wi, oi, Oo, Ho, Zr, ih, Qr, oh, Bo, rh;
let ta = class extends V {
  constructor(t) {
    super(t), H(this, Lo), H(this, Wo), H(this, Po), H(this, Do), H(this, Ws), H(this, Zr), H(this, Qr), H(this, Bo), this.ref = Ct(), H(this, He, 0), H(this, En, void 0), H(this, $e, !1), H(this, Ht, void 0), H(this, we, void 0), H(this, J, []), H(this, Pt, void 0), H(this, At, /* @__PURE__ */ new Map()), H(this, Tn, {}), H(this, Ls, void 0), H(this, ii, []), this.updateLayout = () => {
      S(this, He) && cancelAnimationFrame(S(this, He)), Y(this, He, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), Y(this, He, 0);
      }));
    }, H(this, Qt, (n, s) => {
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
      S(this, Qt).call(this, n, `window_${n.type}`);
    }), H(this, Nn, (n) => {
      S(this, Qt).call(this, n, `document_${n.type}`);
    }), H(this, Xr, (n, s) => {
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
    }), H(this, Jr, (n, s) => (this.options.onRenderHeaderRow && (n.props = this.options.onRenderHeaderRow.call(this, n, s)), S(this, J).forEach((i) => {
      i.onRenderHeaderRow && (n.props = i.onRenderHeaderRow.call(this, n, s));
    }), n.props)), H(this, Wi, (n, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), n[0] = s.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return S(this, J).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), r.setting[a] && (n = r.setting[a].call(this, n, s, i)), n;
    }), H(this, oi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), H(this, Oo, (n) => {
      var a, l, h, c, u;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: o, element: r }), S(this, J).forEach((f) => {
          var d;
          (d = f.onHeaderCellClick) == null || d.call(this, n, { colName: o, element: r });
        }));
      else {
        const { rowElement: f } = s, d = this.layout.visibleRows.find((p) => p.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
            return;
          for (const p of S(this, J))
            if (((h = p.onCellClick) == null ? void 0 : h.call(this, n, { colName: o, rowID: i, rowInfo: d, element: r, rowElement: f })) === !0)
              return;
        }
        if (((c = this.options.onRowClick) == null ? void 0 : c.call(this, n, { rowID: i, rowInfo: d, element: f })) === !0)
          return;
        for (const p of S(this, J))
          if (((u = p.onRowClick) == null ? void 0 : u.call(this, n, { rowID: i, rowInfo: d, element: f })) === !0)
            return;
      }
    }), H(this, Ho, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), Y(this, En, t.id ?? `dtable-${tc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, Y(this, we, Object.freeze(sf(t.plugins))), S(this, we).forEach((n) => {
      var r;
      const { methods: s, data: i, state: o } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(S(this, Tn), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = n.onCreate) == null || r.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = S(this, Pt)) == null ? void 0 : t.options) || S(this, Ht) || Qc();
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
    if (S(this, $e) ? this.forceUpdate() : Lt(this, Ws, Io).call(this), S(this, J).forEach((t) => {
      let { events: n } = t;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([s, i]) => {
        i && this.on(s, i);
      }));
    }), this.on("click", S(this, Oo)), this.on("keydown", S(this, Ho)), this.options.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: t } = this;
        if (t) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(t), Y(this, Ls, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    S(this, J).forEach((t) => {
      var n;
      (n = t.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    S(this, $e) ? Lt(this, Ws, Io).call(this) : S(this, J).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = S(this, Ls)) == null || n.disconnect();
    const { current: t } = this.ref;
    if (t)
      for (const s of S(this, At).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), S(this, Rn)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), S(this, Nn)) : t.removeEventListener(s, S(this, Qt));
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
    i ? i.push(n) : (S(this, At).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), S(this, Rn)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), S(this, Nn)) : (o = this.ref.current) == null || o.addEventListener(t, S(this, Qt)));
  }
  off(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = S(this, At).get(t);
    if (!i)
      return;
    const o = i.indexOf(n);
    o >= 0 && i.splice(o, 1), i.length || (S(this, At).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), S(this, Rn)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), S(this, Nn)) : (r = this.ref.current) == null || r.removeEventListener(t, S(this, Qt)));
  }
  emitCustomEvent(t, n) {
    S(this, Qt).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
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
      const { offsetLeft: p, offsetTop: m } = t;
      typeof p == "number" && (u = s + p), typeof m == "number" && (u = i + m);
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
    return jt(S(this, ii), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = Lt(this, Bo, rh).call(this), { className: n, rowHover: s, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
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
      Lt(this, Lo, th).call(this, t),
      Lt(this, Wo, eh).call(this, t),
      Lt(this, Po, nh).call(this, t),
      Lt(this, Do, sh).call(this, t)
    ), S(this, J).forEach((f) => {
      var p;
      const d = (p = f.onRender) == null ? void 0 : p.call(this, t);
      d && (d.style && Object.assign(h, d.style), d.className && c.push(d.className), d.children && u.push(d.children));
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
Ls = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
Qt = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Lo = /* @__PURE__ */ new WeakSet();
th = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      tf,
      {
        scrollLeft: i,
        height: s,
        cols: n,
        onRenderCell: S(this, Wi),
        onRenderRow: S(this, Jr)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    ir,
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
Wo = /* @__PURE__ */ new WeakSet();
eh = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a } = e;
  return /* @__PURE__ */ g(
    ef,
    {
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: S(this, Wi),
      onRenderRow: S(this, Xr)
    },
    "rows"
  );
};
Po = /* @__PURE__ */ new WeakSet();
nh = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    ir,
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
Do = /* @__PURE__ */ new WeakSet();
sh = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: u = 12, horzScrollbarPos: f } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ g(
      Ia,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: o,
        clientSize: i,
        onScroll: S(this, oi),
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
      Ia,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: S(this, oi),
        right: 0,
        size: u,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Ws = /* @__PURE__ */ new WeakSet();
Io = function() {
  var e;
  Y(this, $e, !1), (e = this.options.afterRender) == null || e.call(this), S(this, J).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
Xr = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Oo = /* @__PURE__ */ new WeakMap();
Ho = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakSet();
ih = function() {
  if (S(this, Ht))
    return !1;
  const t = { ...Qc(), ...S(this, we).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return Y(this, J, S(this, we).reduce((n, s) => {
    const { when: i, options: o } = s;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), n.push(s)), n;
  }, [])), Y(this, Ht, t), Y(this, ii, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Qr = /* @__PURE__ */ new WeakSet();
oh = function() {
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
  const o = rf(this, t, e, i), { data: r, rowKey: a = "id", rowHeight: l } = t, h = [], c = (b, R, D) => {
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
  const { header: d, footer: p } = t, m = d ? t.headerHeight || l : 0, v = p ? t.footerHeight || l : 0;
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
    rowsMap: f,
    rowHeight: l,
    rowsHeight: k,
    rowsHeightTotal: $,
    header: d,
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
Bo = /* @__PURE__ */ new WeakSet();
rh = function() {
  (Lt(this, Zr, ih).call(this) || !S(this, Pt)) && Lt(this, Qr, oh).call(this);
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
    const m = r[p];
    m.lazy && d && (m.data = d([m.id])[0], m.lazy = !1), f.push(m);
  }
  return e.visibleRows = f, e.scrollTop = l, e.scrollLeft = n, e;
};
ta.addPlugin = Xc;
ta.removePlugin = Jc;
function Ha(e, t) {
  t !== void 0 ? e.data.hoverCol = t : t = e.data.hoverCol;
  const { current: n } = e.ref;
  if (!n)
    return;
  const s = "dtable-col-hover";
  n.querySelectorAll(`.${s}`).forEach((i) => i.classList.remove(s)), typeof t == "string" && t.length && n.querySelectorAll(`.dtable-cell[data-col="${t}"]`).forEach((i) => i.classList.add(s));
}
const af = {
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
      Ha(this, s);
    },
    mouseleave() {
      Ha(this, !1);
    }
  }
}, lf = ue(af, { buildIn: !0 });
function cf(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, c) => {
    const u = o ? o.call(this, h) : !0;
    !u || n && u === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !ah.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function hf(e) {
  return this.state.checkedRows[e] ?? !1;
}
function ah() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (n.call(this, r.id) ? 1 : 0), 0)) : t === e;
}
function uf() {
  return Object.keys(this.state.checkedRows);
}
function df(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function Ba(e, t, n = !1) {
  return /* @__PURE__ */ g("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ g("label", {}) });
}
const ff = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Ba
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
    toggleCheckRows: cf,
    isRowChecked: hf,
    isAllRowChecked: ah,
    getChecks: uf,
    toggleCheckable: df
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Ba(e) })
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
}, pf = ue(ff);
var lh = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(lh || {});
function ri(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = ri.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? ri.call(this, t.parent).level + 1 : 0, t;
}
function mf(e) {
  return e !== void 0 ? ri.call(this, e) : this.data.nestedMap;
}
function gf(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !ch.call(this)), t) {
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
function ch() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function hh(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const o of n) {
    const r = e.get(o);
    r && (r.level === s && (r.order = t++), (i = r.children) != null && i.length && (t = hh(e, t, r.children, s + 1)));
  }
  return t;
}
function uh(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = n, uh(e, o, n, s);
  }), i;
}
function dh(e, t, n, s, i) {
  var a;
  const o = e.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), o.parent && dh(e, o.parent, n, s, i);
}
const yf = {
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
        const r = uh(this, i, o, s);
        r != null && r.parent && dh(this, r.parent, o, s, n);
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
    getNestedInfo: mf,
    toggleRow: gf,
    isAllCollapsed: ch,
    getNestedRowInfo: ri
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
    ), hh(this.data.nestedMap), e.sort((t, n) => {
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
}, wf = ue(yf);
function fh(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...o } = e, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ g("a", { href: ot(i, t.row.data), ...s, ...o, ...a, children: n });
}
function ea(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : ot(e, n);
}
function ph(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), wo(n, e, s ?? n));
}
function mh(e, t) {
  const { link: n } = t.col.setting, s = fh(n, t, e[0]);
  return s && (e[0] = s), e;
}
function gh(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = ea(n, t, e[0])), e;
}
function yh(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function wh(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = ph(s, t, e[0], i), e;
}
function zo(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], o = s === !0 ? i : ea(s, t, i);
  return e[0] = {
    html: o
  }, e;
}
const vf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return zo(e, t, !0);
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
    if (n && (e = wh(e, t, n)), e = yh(e, t), e = gh(e, t), s ? e = zo(e, t) : e = mh(e, t), i) {
      let o = e[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = ot(i, t.row.data)), e.push({ attrs: { title: o } });
    }
    return e;
  }
}, _f = ue(vf, { buildIn: !0 });
function Xi(e, { row: t, col: n }) {
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
  if (e[0] = /* @__PURE__ */ g(ec, { ...u }), n.type === "avatarBtn") {
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
const bf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Xi
    },
    avatarBtn: {
      onRenderCell: Xi
    },
    avatarName: {
      onRenderCell: Xi
    }
  }
}, xf = ue(bf, { buildIn: !0 }), $f = {
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
}, kf = ue($f, { buildIn: !0 }), Ji = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Cf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Ji(t.left.list), Ji(t.center.list), Ji(t.right.list);
  }
}, Sf = ue(Cf), Mf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: lh,
  avatar: xf,
  checkable: pf,
  colHover: lf,
  group: Sf,
  nested: wf,
  renderDatetime: ph,
  renderDatetimeCell: wh,
  renderFormat: ea,
  renderFormatCell: gh,
  renderHtmlCell: zo,
  renderLink: fh,
  renderLinkCell: mh,
  renderMapCell: yh,
  rich: _f,
  sortType: kf
}, Symbol.toStringTag, { value: "Module" }));
class os extends et {
}
os.NAME = "DTable";
os.Component = ta;
os.definePlugin = ue;
os.removePlugin = Jc;
os.plugins = Mf;
var vh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, za = (e, t, n) => (vh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ef = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Fa = (e, t, n, s) => (vh(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Be;
const Tf = "nav", Fo = '[data-toggle="tab"]', Rf = "active";
class _h extends ut {
  constructor() {
    super(...arguments), Ef(this, Be, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(Fo);
    let i = t ? y(t).first() : s.filter(`.${Rf}`);
    if (!i.length && (i = n.find(Fo).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = y(o);
    r.length && (r.parent().children(".tab-pane").removeClass("active in"), r.addClass("active"), za(this, Be) && clearTimeout(za(this, Be)), Fa(this, Be, setTimeout(() => {
      r.addClass("in"), Fa(this, Be, 0);
    }, 10)));
  }
}
Be = /* @__PURE__ */ new WeakMap();
_h.NAME = "Tabs";
y(document).on("click.tabs.zui", Fo, (e) => {
  e.preventDefault();
  const t = y(e.target), n = t.closest(`.${Tf}`);
  n.length && _h.ensure(n).active(t);
});
y(() => {
  y(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  y as $,
  El as ActionMenu,
  Rl as ActionMenuNested,
  nc as Avatar,
  Zl as BtnGroup,
  ut as Component,
  et as ComponentFromReact,
  it as ContextMenu,
  ir as CustomRender,
  os as DTable,
  Gc as Dashboard,
  Ft as Dropdown,
  Ql as EventBus,
  xu as HElement,
  kl as HtmlContent,
  Un as Icon,
  Nl as Menu,
  gr as Messager,
  ic as Modal,
  Jt as ModalBase,
  lc as ModalTrigger,
  hc as Nav,
  uc as Pager,
  _c as Picker,
  bc as Popovers,
  Xl as ProgressCircle,
  V as ReactComponent,
  Jl as Switch,
  Wt as TIME_DAY,
  _h as Tabs,
  xc as Toolbar,
  kt as Tooltip,
  Bc as Tree,
  sd as Upload,
  Ra as calculateTimestamp,
  y as cash,
  T as classes,
  Af as convertBytes,
  lt as createDate,
  Mu as createPortal,
  Ct as createRef,
  hu as deepGet,
  cu as deepGetPath,
  gu as delay,
  Lf as dom,
  uu as formatBytes,
  wo as formatDate,
  Xf as formatDateSpan,
  ot as formatString,
  ll as getClassList,
  Jf as getTimeBeforeDesc,
  q as h,
  Wf as hh,
  bu as htm,
  jt as i18n,
  Kf as isDBY,
  ss as isSameDay,
  _d as isSameMonth,
  qf as isSameWeek,
  yo as isSameYear,
  jf as isToday,
  Yf as isTomorrow,
  Q as isValidElement,
  Gf as isYesterday,
  Ca as nativeEvents,
  Fn as render,
  ku as renderCustomResult,
  od as store,
  cl as storeData,
  mu as takeData
};
//# sourceMappingURL=zui.js.map
