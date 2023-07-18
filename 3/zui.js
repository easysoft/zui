var Xo = (s, n, t) => {
  if (!n.has(s))
    throw TypeError("Cannot " + t);
};
var f = (s, n, t) => (Xo(s, n, "read from private field"), t ? t.call(s) : n.get(s)), v = (s, n, t) => {
  if (n.has(s))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(s) : n.set(s, t);
}, C = (s, n, t, e) => (Xo(s, n, "write to private field"), e ? e.call(s, t) : n.set(s, t), t);
var A = (s, n, t) => (Xo(s, n, "access private method"), t);
const Ht = document, ri = window, wl = Ht.documentElement, Be = Ht.createElement.bind(Ht), vl = Be("div"), Jo = Be("table"), bh = Be("tbody"), da = Be("tr"), { isArray: Do, prototype: xl } = Array, { concat: wh, filter: Ir, indexOf: Cl, map: _l, push: vh, slice: $l, some: Dr, splice: xh } = xl, Ch = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, _h = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, $h = /<.+>/, Sh = /^\w+$/;
function Pr(s, n) {
  const t = kh(n);
  return !s || !t && !Ie(n) && !V(n) ? [] : !t && _h.test(s) ? n.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !t && Sh.test(s) ? n.getElementsByTagName(s) : n.querySelectorAll(s);
}
class Po {
  constructor(n, t) {
    if (!n)
      return;
    if (hr(n))
      return n;
    let e = n;
    if (nt(n)) {
      const i = t || Ht;
      if (e = Ch.test(n) && Ie(i) ? i.getElementById(n.slice(1).replace(/\\/g, "")) : $h.test(n) ? El(n) : hr(i) ? i.find(n) : nt(i) ? y(i).find(n) : Pr(n, i), !e)
        return;
    } else if (We(n))
      return this.ready(n);
    (e.nodeType || e === ri) && (e = [e]), this.length = e.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = e[i];
  }
  init(n, t) {
    return new Po(n, t);
  }
}
const T = Po.prototype, y = T.init;
y.fn = y.prototype = T;
T.length = 0;
T.splice = xh;
typeof Symbol == "function" && (T[Symbol.iterator] = xl[Symbol.iterator]);
function hr(s) {
  return s instanceof Po;
}
function Sn(s) {
  return !!s && s === s.window;
}
function Ie(s) {
  return !!s && s.nodeType === 9;
}
function kh(s) {
  return !!s && s.nodeType === 11;
}
function V(s) {
  return !!s && s.nodeType === 1;
}
function Eh(s) {
  return !!s && s.nodeType === 3;
}
function Th(s) {
  return typeof s == "boolean";
}
function We(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function rt(s) {
  return s === void 0;
}
function On(s) {
  return s === null;
}
function Sl(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Or(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const n = Object.getPrototypeOf(s);
  return n === null || n === Object.prototype;
}
y.isWindow = Sn;
y.isFunction = We;
y.isArray = Do;
y.isNumeric = Sl;
y.isPlainObject = Or;
function q(s, n, t) {
  if (t) {
    let e = s.length;
    for (; e--; )
      if (n.call(s[e], e, s[e]) === !1)
        return s;
  } else if (Or(s)) {
    const e = Object.keys(s);
    for (let i = 0, o = e.length; i < o; i++) {
      const r = e[i];
      if (n.call(s[r], r, s[r]) === !1)
        return s;
    }
  } else
    for (let e = 0, i = s.length; e < i; e++)
      if (n.call(s[e], e, s[e]) === !1)
        return s;
  return s;
}
y.each = q;
T.each = function(s) {
  return q(this, s);
};
T.empty = function() {
  return this.each((s, n) => {
    for (; n.firstChild; )
      n.removeChild(n.firstChild);
  });
};
function ai(...s) {
  const n = Th(s[0]) ? s.shift() : !1, t = s.shift(), e = s.length;
  if (!t)
    return {};
  if (!e)
    return ai(n, y, t);
  for (let i = 0; i < e; i++) {
    const o = s[i];
    for (const r in o)
      n && (Do(o[r]) || Or(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), ai(n, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
y.extend = ai;
T.extend = function(s) {
  return ai(T, s);
};
const Nh = /\S+/g;
function Oo(s) {
  return nt(s) ? s.match(Nh) || [] : [];
}
T.toggleClass = function(s, n) {
  const t = Oo(s), e = !rt(n);
  return this.each((i, o) => {
    V(o) && q(t, (r, a) => {
      e ? n ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
T.addClass = function(s) {
  return this.toggleClass(s, !0);
};
T.removeAttr = function(s) {
  const n = Oo(s);
  return this.each((t, e) => {
    V(e) && q(n, (i, o) => {
      e.removeAttribute(o);
    });
  });
};
function Mh(s, n) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(s);
        return On(t) ? void 0 : t;
      }
      return rt(n) ? this : On(n) ? this.removeAttr(s) : this.each((t, e) => {
        V(e) && e.setAttribute(s, n);
      });
    }
    for (const t in s)
      this.attr(t, s[t]);
    return this;
  }
}
T.attr = Mh;
T.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
T.hasClass = function(s) {
  return !!s && Dr.call(this, (n) => V(n) && n.classList.contains(s));
};
T.get = function(s) {
  return rt(s) ? $l.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
T.eq = function(s) {
  return y(this.get(s));
};
T.first = function() {
  return this.eq(0);
};
T.last = function() {
  return this.eq(-1);
};
function Rh(s) {
  return rt(s) ? this.get().map((n) => V(n) || Eh(n) ? n.textContent : "").join("") : this.each((n, t) => {
    V(t) && (t.textContent = s);
  });
}
T.text = Rh;
function Bt(s, n, t) {
  if (!V(s))
    return;
  const e = ri.getComputedStyle(s, null);
  return t ? e.getPropertyValue(n) || void 0 : e[n] || s.style[n];
}
function kt(s, n) {
  return parseInt(Bt(s, n), 10) || 0;
}
function fa(s, n) {
  return kt(s, `border${n ? "Left" : "Top"}Width`) + kt(s, `padding${n ? "Left" : "Top"}`) + kt(s, `padding${n ? "Right" : "Bottom"}`) + kt(s, `border${n ? "Right" : "Bottom"}Width`);
}
const Zo = {};
function Lh(s) {
  if (Zo[s])
    return Zo[s];
  const n = Be(s);
  Ht.body.insertBefore(n, null);
  const t = Bt(n, "display");
  return Ht.body.removeChild(n), Zo[s] = t !== "none" ? t : "block";
}
function pa(s) {
  return Bt(s, "display") === "none";
}
function kl(s, n) {
  const t = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!t && !!n && t.call(s, n);
}
function Ho(s) {
  return nt(s) ? (n, t) => kl(t, s) : We(s) ? s : hr(s) ? (n, t) => s.is(t) : s ? (n, t) => t === s : () => !1;
}
T.filter = function(s) {
  const n = Ho(s);
  return y(Ir.call(this, (t, e) => n.call(t, e, t)));
};
function ce(s, n) {
  return n ? s.filter(n) : s;
}
T.detach = function(s) {
  return ce(this, s).each((n, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const Ah = /^\s*<(\w+)[^>]*>/, Ih = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ma = {
  "*": vl,
  tr: bh,
  td: da,
  th: da,
  thead: Jo,
  tbody: Jo,
  tfoot: Jo
};
function El(s) {
  if (!nt(s))
    return [];
  if (Ih.test(s))
    return [Be(RegExp.$1)];
  const n = Ah.test(s) && RegExp.$1, t = ma[n] || ma["*"];
  return t.innerHTML = s, y(t.childNodes).detach().get();
}
y.parseHTML = El;
T.has = function(s) {
  const n = nt(s) ? (t, e) => Pr(s, e).length : (t, e) => e.contains(s);
  return this.filter(n);
};
T.not = function(s) {
  const n = Ho(s);
  return this.filter((t, e) => (!nt(s) || V(e)) && !n.call(e, t, e));
};
function Ft(s, n, t, e) {
  const i = [], o = We(n), r = e && Ho(e);
  for (let a = 0, l = s.length; a < l; a++)
    if (o) {
      const h = n(s[a]);
      h.length && vh.apply(i, h);
    } else {
      let h = s[a][n];
      for (; h != null && !(e && r(-1, h)); )
        i.push(h), h = t ? h[n] : null;
    }
  return i;
}
function Tl(s) {
  return s.multiple && s.options ? Ft(Ir.call(s.options, (n) => n.selected && !n.disabled && !n.parentNode.disabled), "value") : s.value || "";
}
function Dh(s) {
  return arguments.length ? this.each((n, t) => {
    const e = t.multiple && t.options;
    if (e || Pl.test(t.type)) {
      const i = Do(s) ? _l.call(s, String) : On(s) ? [] : [String(s)];
      e ? q(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = rt(s) || On(s) ? "" : s;
  }) : this[0] && Tl(this[0]);
}
T.val = Dh;
T.is = function(s) {
  const n = Ho(s);
  return Dr.call(this, (t, e) => n.call(t, e, t));
};
y.guid = 1;
function Nt(s) {
  return s.length > 1 ? Ir.call(s, (n, t, e) => Cl.call(e, n) === t) : s;
}
y.unique = Nt;
T.add = function(s, n) {
  return y(Nt(this.get().concat(y(s, n).get())));
};
T.children = function(s) {
  return ce(y(Nt(Ft(this, (n) => n.children))), s);
};
T.parent = function(s) {
  return ce(y(Nt(Ft(this, "parentNode"))), s);
};
T.index = function(s) {
  const n = s ? y(s)[0] : this[0], t = s ? this : y(n).parent().children();
  return Cl.call(t, n);
};
T.closest = function(s) {
  const n = this.filter(s);
  if (n.length)
    return n;
  const t = this.parent();
  return t.length ? t.closest(s) : n;
};
T.siblings = function(s) {
  return ce(y(Nt(Ft(this, (n) => y(n).parent().children().not(n)))), s);
};
T.find = function(s) {
  return y(Nt(Ft(this, (n) => Pr(s, n))));
};
const Ph = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Oh = /^$|^module$|\/(java|ecma)script/i, Hh = ["type", "src", "nonce", "noModule"];
function Bh(s, n) {
  const t = y(s);
  t.filter("script").add(t.find("script")).each((e, i) => {
    if (Oh.test(i.type) && wl.contains(i)) {
      const o = Be("script");
      o.text = i.textContent.replace(Ph, ""), q(Hh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), n.head.insertBefore(o, null), n.head.removeChild(o);
    }
  });
}
function Wh(s, n, t, e, i) {
  e ? s.insertBefore(n, t ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(n, s) : s.parentNode.insertBefore(n, t ? s : s.nextSibling), i && Bh(n, s.ownerDocument);
}
function he(s, n, t, e, i, o, r, a) {
  return q(s, (l, h) => {
    q(y(h), (u, c) => {
      q(y(n), (d, p) => {
        const g = t ? c : p, b = t ? p : c, x = t ? u : d;
        Wh(g, x ? b.cloneNode(!0) : b, e, i, !x);
      }, a);
    }, r);
  }, o), n;
}
T.after = function() {
  return he(arguments, this, !1, !1, !1, !0, !0);
};
T.append = function() {
  return he(arguments, this, !1, !1, !0);
};
function zh(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(s))
    return this;
  const n = /<script[\s>]/.test(s);
  return this.each((t, e) => {
    V(e) && (n ? y(e).empty().append(s) : e.innerHTML = s);
  });
}
T.html = zh;
T.appendTo = function(s) {
  return he(arguments, this, !0, !1, !0);
};
T.wrapInner = function(s) {
  return this.each((n, t) => {
    const e = y(t), i = e.contents();
    i.length ? i.wrapAll(s) : e.append(s);
  });
};
T.before = function() {
  return he(arguments, this, !1, !0);
};
T.wrapAll = function(s) {
  let n = y(s), t = n[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(n), this.appendTo(t);
};
T.wrap = function(s) {
  return this.each((n, t) => {
    const e = y(s)[0];
    y(t).wrapAll(n ? e.cloneNode(!0) : e);
  });
};
T.insertAfter = function(s) {
  return he(arguments, this, !0, !1, !1, !1, !1, !0);
};
T.insertBefore = function(s) {
  return he(arguments, this, !0, !0);
};
T.prepend = function() {
  return he(arguments, this, !1, !0, !0, !0, !0);
};
T.prependTo = function(s) {
  return he(arguments, this, !0, !0, !0, !1, !1, !0);
};
T.contents = function() {
  return y(Nt(Ft(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
T.next = function(s, n, t) {
  return ce(y(Nt(Ft(this, "nextElementSibling", n, t))), s);
};
T.nextAll = function(s) {
  return this.next(s, !0);
};
T.nextUntil = function(s, n) {
  return this.next(n, !0, s);
};
T.parents = function(s, n) {
  return ce(y(Nt(Ft(this, "parentElement", !0, n))), s);
};
T.parentsUntil = function(s, n) {
  return this.parents(n, s);
};
T.prev = function(s, n, t) {
  return ce(y(Nt(Ft(this, "previousElementSibling", n, t))), s);
};
T.prevAll = function(s) {
  return this.prev(s, !0);
};
T.prevUntil = function(s, n) {
  return this.prev(n, !0, s);
};
T.map = function(s) {
  return y(wh.apply([], _l.call(this, (n, t) => s.call(n, t, n))));
};
T.clone = function() {
  return this.map((s, n) => n.cloneNode(!0));
};
T.offsetParent = function() {
  return this.map((s, n) => {
    let t = n.offsetParent;
    for (; t && Bt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || wl;
  });
};
T.slice = function(s, n) {
  return y($l.call(this, s, n));
};
const Fh = /-([a-z])/g;
function Hr(s) {
  return s.replace(Fh, (n, t) => t.toUpperCase());
}
T.ready = function(s) {
  const n = () => setTimeout(s, 0, y);
  return Ht.readyState !== "loading" ? n() : Ht.addEventListener("DOMContentLoaded", n), this;
};
T.unwrap = function() {
  return this.parent().each((s, n) => {
    if (n.tagName === "BODY")
      return;
    const t = y(n);
    t.replaceWith(t.children());
  }), this;
};
T.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const n = s.getBoundingClientRect();
  return {
    top: n.top + ri.pageYOffset,
    left: n.left + ri.pageXOffset
  };
};
T.position = function() {
  const s = this[0];
  if (!s)
    return;
  const n = Bt(s, "position") === "fixed", t = n ? s.getBoundingClientRect() : this.offset();
  if (!n) {
    const e = s.ownerDocument;
    let i = s.offsetParent || e.documentElement;
    for (; (i === e.body || i === e.documentElement) && Bt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && V(i)) {
      const o = y(i).offset();
      t.top -= o.top + kt(i, "borderTopWidth"), t.left -= o.left + kt(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - kt(s, "marginTop"),
    left: t.left - kt(s, "marginLeft")
  };
};
const Nl = {
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
T.prop = function(s, n) {
  if (s) {
    if (nt(s))
      return s = Nl[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((t, e) => {
        e[s] = n;
      });
    for (const t in s)
      this.prop(t, s[t]);
    return this;
  }
};
T.removeProp = function(s) {
  return this.each((n, t) => {
    delete t[Nl[s] || s];
  });
};
const jh = /^--/;
function Br(s) {
  return jh.test(s);
}
const Qo = {}, { style: Vh } = vl, Uh = ["webkit", "moz", "ms"];
function qh(s, n = Br(s)) {
  if (n)
    return s;
  if (!Qo[s]) {
    const t = Hr(s), e = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${Uh.join(`${e} `)}${e}`.split(" ");
    q(i, (o, r) => {
      if (r in Vh)
        return Qo[s] = r, !1;
    });
  }
  return Qo[s];
}
const Yh = {
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
function Ml(s, n, t = Br(s)) {
  return !t && !Yh[s] && Sl(n) ? `${n}px` : n;
}
function Kh(s, n) {
  if (nt(s)) {
    const t = Br(s);
    return s = qh(s, t), arguments.length < 2 ? this[0] && Bt(this[0], s, t) : s ? (n = Ml(s, n, t), this.each((e, i) => {
      V(i) && (t ? i.style.setProperty(s, n) : i.style[s] = n);
    })) : this;
  }
  for (const t in s)
    this.css(t, s[t]);
  return this;
}
T.css = Kh;
function Rl(s, n) {
  try {
    return s(n);
  } catch {
    return n;
  }
}
const Gh = /^\s+|\s+$/;
function ga(s, n) {
  const t = s.dataset[n] || s.dataset[Hr(n)];
  return Gh.test(t) ? t : Rl(JSON.parse, t);
}
function Xh(s, n, t) {
  t = Rl(JSON.stringify, t), s.dataset[Hr(n)] = t;
}
function Jh(s, n) {
  if (!s) {
    if (!this[0])
      return;
    const t = {};
    for (const e in this[0].dataset)
      t[e] = ga(this[0], e);
    return t;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && ga(this[0], s) : rt(n) ? this : this.each((t, e) => {
      Xh(e, s, n);
    });
  for (const t in s)
    this.data(t, s[t]);
  return this;
}
T.data = Jh;
function Ll(s, n) {
  const t = s.documentElement;
  return Math.max(s.body[`scroll${n}`], t[`scroll${n}`], s.body[`offset${n}`], t[`offset${n}`], t[`client${n}`]);
}
q([!0, !1], (s, n) => {
  q(["Width", "Height"], (t, e) => {
    const i = `${n ? "outer" : "inner"}${e}`;
    T[i] = function(o) {
      if (this[0])
        return Sn(this[0]) ? n ? this[0][`inner${e}`] : this[0].document.documentElement[`client${e}`] : Ie(this[0]) ? Ll(this[0], e) : this[0][`${n ? "offset" : "client"}${e}`] + (o && n ? kt(this[0], `margin${t ? "Top" : "Left"}`) + kt(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
q(["Width", "Height"], (s, n) => {
  const t = n.toLowerCase();
  T[t] = function(e) {
    if (!this[0])
      return rt(e) ? void 0 : this;
    if (!arguments.length)
      return Sn(this[0]) ? this[0].document.documentElement[`client${n}`] : Ie(this[0]) ? Ll(this[0], n) : this[0].getBoundingClientRect()[t] - fa(this[0], !s);
    const i = parseInt(e, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Bt(r, "boxSizing");
      r.style[t] = Ml(t, i + (a === "border-box" ? fa(r, !s) : 0));
    });
  };
});
const ya = "___cd";
T.toggle = function(s) {
  return this.each((n, t) => {
    if (!V(t))
      return;
    const e = pa(t);
    (rt(s) ? e : s) ? (t.style.display = t[ya] || "", pa(t) && (t.style.display = Lh(t.tagName))) : e || (t[ya] = Bt(t, "display"), t.style.display = "none");
  });
};
T.hide = function() {
  return this.toggle(!1);
};
T.show = function() {
  return this.toggle(!0);
};
const ba = "___ce", Wr = ".", zr = { focus: "focusin", blur: "focusout" }, Al = { mouseenter: "mouseover", mouseleave: "mouseout" }, Zh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Fr(s) {
  return Al[s] || zr[s] || s;
}
function jr(s) {
  const n = s.split(Wr);
  return [n[0], n.slice(1).sort()];
}
T.trigger = function(s, n) {
  if (nt(s)) {
    const [e, i] = jr(s), o = Fr(e);
    if (!o)
      return this;
    const r = Zh.test(o) ? "MouseEvents" : "HTMLEvents";
    s = Ht.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(Wr), s.___ot = e;
  }
  s.___td = n;
  const t = s.___ot in zr;
  return this.each((e, i) => {
    t && We(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Il(s) {
  return s[ba] = s[ba] || {};
}
function Qh(s, n, t, e, i) {
  const o = Il(s);
  o[n] = o[n] || [], o[n].push([t, e, i]), s.addEventListener(n, i);
}
function Dl(s, n) {
  return !n || !Dr.call(n, (t) => s.indexOf(t) < 0);
}
function li(s, n, t, e, i) {
  const o = Il(s);
  if (n)
    o[n] && (o[n] = o[n].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Dl(r, t) || e && e !== a)
        return !0;
      s.removeEventListener(n, l);
    }));
  else
    for (n in o)
      li(s, n, t, e, i);
}
T.off = function(s, n, t) {
  if (rt(s))
    this.each((e, i) => {
      !V(i) && !Ie(i) && !Sn(i) || li(i);
    });
  else if (nt(s))
    We(n) && (t = n, n = ""), q(Oo(s), (e, i) => {
      const [o, r] = jr(i), a = Fr(o);
      this.each((l, h) => {
        !V(h) && !Ie(h) && !Sn(h) || li(h, a, r, n, t);
      });
    });
  else
    for (const e in s)
      this.off(e, s[e]);
  return this;
};
T.remove = function(s) {
  return ce(this, s).detach().off(), this;
};
T.replaceWith = function(s) {
  return this.before(s).remove();
};
T.replaceAll = function(s) {
  return y(s).replaceWith(this), this;
};
function tu(s, n, t, e, i) {
  if (!nt(s)) {
    for (const o in s)
      this.on(o, n, t, s[o], i);
    return this;
  }
  return nt(n) || (rt(n) || On(n) ? n = "" : rt(t) ? (t = n, n = "") : (e = t, t = n, n = "")), We(e) || (e = t, t = void 0), e ? (q(Oo(s), (o, r) => {
    const [a, l] = jr(r), h = Fr(a), u = a in Al, c = a in zr;
    h && this.each((d, p) => {
      if (!V(p) && !Ie(p) && !Sn(p))
        return;
      const g = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !Dl(l, b.namespace.split(Wr)) || !n && (c && (b.target !== p || b.___ot === h) || u && b.relatedTarget && p.contains(b.relatedTarget)))
          return;
        let x = p;
        if (n) {
          let _ = b.target;
          for (; !kl(_, n); )
            if (_ === p || (_ = _.parentNode, !_))
              return;
          x = _;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return x;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const w = e.call(x, b, b.___td);
        i && li(p, h, l, n, g), w === !1 && (b.preventDefault(), b.stopPropagation());
      };
      g.guid = e.guid = e.guid || y.guid++, Qh(p, h, l, n, g);
    });
  }), this) : this;
}
T.on = tu;
function eu(s, n, t, e) {
  return this.on(s, n, t, e, !0);
}
T.one = eu;
const nu = /\r?\n/g;
function su(s, n) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(n.replace(nu, `\r
`))}`;
}
const iu = /file|reset|submit|button|image/i, Pl = /radio|checkbox/i;
T.serialize = function() {
  let s = "";
  return this.each((n, t) => {
    q(t.elements || [t], (e, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || iu.test(i.type) || Pl.test(i.type) && !i.checked)
        return;
      const o = Tl(i);
      if (!rt(o)) {
        const r = Do(o) ? o : [o];
        q(r, (a, l) => {
          s += su(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = y;
function ou(s, n) {
  if (s == null)
    return [s, void 0];
  typeof n == "string" && (n = n.split("."));
  const t = n.join(".");
  let e = s;
  const i = [e];
  for (; typeof e == "object" && e !== null && n.length; ) {
    let o = n.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), e = e[o], i.push(e), r !== void 0)
      if (typeof e == "object" && e !== null)
        e instanceof Map ? e = e.get(r) : e = e[r], i.push(e);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (n.length)
    throw new Error(`Cannot access property with rest path "${n.join(".")}", the full path is "${t}".`);
  return i;
}
function ru(s, n, t) {
  try {
    const e = ou(s, n), i = e[e.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Y(s, ...n) {
  if (n.length === 0)
    return s;
  if (n.length === 1 && typeof n[0] == "object" && n[0]) {
    const t = n[0];
    return Object.keys(t).forEach((e) => {
      const i = t[e] ?? "";
      s = s.replace(new RegExp(`\\{${e}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let t = 0; t < n.length; t++) {
    const e = n[t] ?? "";
    s = s.replace(new RegExp(`\\{${t}\\}`, "g"), `${e}`);
  }
  return s;
}
var Vr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Vr || {});
function au(s, n = 2, t) {
  return Number.isNaN(s) ? "?KB" : (t || (s < 1024 ? t = "B" : s < 1048576 ? t = "KB" : s < 1073741824 ? t = "MB" : s < 1099511627776 ? t = "GB" : t = "TB"), (s / Vr[t]).toFixed(n) + t);
}
const lu = (s) => {
  const n = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const t = s.match(n);
  if (!t)
    return 0;
  const e = t[1];
  return s = s.replace(e, ""), Number.parseInt(s, 10) * Vr[e];
};
let Ur = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Vt;
function cu() {
  return Ur;
}
function hu(s) {
  Ur = s.toLowerCase();
}
function Ol(s, n) {
  Vt || (Vt = {}), typeof s == "string" && (s = { [s]: n ?? {} }), y.extend(!0, Vt, s);
}
function Z(s, n, t, e, i, o) {
  Array.isArray(s) ? Vt && s.unshift(Vt) : s = Vt ? [Vt, s] : [s], typeof t == "string" && (o = i, i = e, e = t, t = void 0);
  const r = i || Ur;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Vt ? `${o}.${n}` : n;
    if (a = ru(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? e : t ? Y(a, ...Array.isArray(t) ? t : [t]) : a;
}
function uu(s, n, t, e) {
  return Z(void 0, s, n, t, e);
}
Z.addLang = Ol;
Z.getLang = uu;
Z.getCode = cu;
Z.setCode = hu;
Ol({
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
function Hl(...s) {
  const n = [], t = /* @__PURE__ */ new Map(), e = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? n[r][1] = !!o : (t.set(i, n.length), n.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Hl(...i).forEach(e) : i && typeof i == "object" ? Object.entries(i).forEach(e) : typeof i == "string" && i.split(" ").forEach((o) => e(o, !0));
  }), n.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const R = (...s) => Hl(...s).reduce((n, [t, e]) => (e && n.push(t), n), []).join(" ");
y.classes = R;
y.fn.setClass = function(s, ...n) {
  return this.each((t, e) => {
    const i = y(e);
    s === !0 ? i.attr("class", R(i.attr("class"), ...n)) : i.addClass(R(s, ...n));
  });
};
const Ln = /* @__PURE__ */ new WeakMap();
function Bl(s, n, t) {
  const e = Ln.has(s), i = e ? Ln.get(s) : {};
  typeof n == "string" ? i[n] = t : n === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, n), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!e && s instanceof Element && Object.assign(i, y(s).dataset(), i), Ln.set(s, i)) : Ln.delete(s);
}
function Wl(s, n, t) {
  let e = Ln.get(s) || {};
  return !t && s instanceof Element && (e = Object.assign({}, y(s).dataset(), e)), n === void 0 ? e : e[n];
}
y.fn.dataset = y.fn.data;
y.fn.data = function(...s) {
  if (!this.length)
    return;
  const [n, t] = s;
  return !s.length || s.length === 1 && typeof n == "string" ? Wl(this[0], n) : this.each((e, i) => Bl(i, n, t));
};
y.fn.removeData = function(s = null) {
  return this.each((n, t) => Bl(t, s));
};
y.fn._attr = y.fn.attr;
y.fn.extend({
  attr(...s) {
    const [n, t] = s;
    return !s.length || s.length === 1 && typeof n == "string" ? this._attr.apply(this, s) : typeof n == "object" ? (n && Object.keys(n).forEach((e) => {
      const i = n[e];
      i === null ? this.removeAttr(e) : this._attr(e, i);
    }), this) : t === null ? this.removeAttr(n) : this._attr(n, t);
  }
});
y.Event = (s, n) => {
  const [t, ...e] = s.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = e.join("."), i.___ot = t, i.___td = n, i;
};
const ci = (s, n) => new Promise((t) => {
  const e = window.setTimeout(t, s);
  n && n(e);
}), ti = /* @__PURE__ */ new Map();
function hi(s) {
  const { zui: n } = window;
  return ti.size || Object.keys(n).forEach((t) => {
    const e = n[t];
    e.ZUI && ti.set(t.toLowerCase(), e);
  }), s ? ti.get(s.toLowerCase()) : void 0;
}
function du(s, n, t) {
  const e = hi(s);
  return e ? new e(n, t) : null;
}
function Lf(s) {
  if (s) {
    const n = hi(s);
    n && n.defineFn();
  } else
    hi(), ti.forEach((n) => {
      n.defineFn();
    });
}
y.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = y(this).dataset(), t = n.zui;
    delete n.zui, du(t, this, n);
  }), this;
};
y.fn.zui = function(s, n) {
  const t = this[0];
  if (!t)
    return;
  if (typeof s != "string") {
    const i = Wl(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), s === !0 ? o : r;
  }
  const e = hi(s);
  if (e)
    return n === !0 ? e.getAll(t) : e.query(t, n);
};
y(() => {
  y("body").zuiInit();
});
function qr(s, n) {
  const t = y(s)[0];
  if (!t)
    return !1;
  let { viewport: e } = n || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!e) {
    const { innerHeight: g, innerWidth: b } = window, { clientHeight: x, clientWidth: w } = document.documentElement;
    e = { left: 0, top: 0, width: b || w, height: g || x };
  }
  const { left: l, top: h, width: u, height: c } = e;
  if (n != null && n.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const d = i <= u && i + r >= l;
  return o <= c && o + a >= h && d;
}
y.fn.isVisible = function(s) {
  return this.each((n, t) => {
    qr(t, s);
  });
};
function Yr(s, n, t = !1) {
  const e = y(s);
  if (n !== void 0) {
    if (n.length) {
      const i = `zui-runjs-${y.guid++}`;
      e.append(`<script id="${i}">${n}<\/script>`), t && e.find(`#${i}`).remove();
    }
    return;
  }
  e.find("script").each((i, o) => {
    Yr(e, o.innerHTML), o.remove();
  });
}
y.runJS = (s, ...n) => (s = s.trim(), s.startsWith("return ") || (s = `return ${s}`), new Function(...n.map(([e]) => e), s)(...n.map(([, e]) => e)));
y.fn.runJS = function(s) {
  return this.each((n, t) => {
    Yr(t, s);
  });
};
function zl(s, n) {
  const t = y(s), { ifNeeded: e = !0, ...i } = n || {};
  return t.each((o, r) => {
    e && qr(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
y.fn.scrollIntoView = function(s) {
  return this.each((n, t) => {
    zl(t, s);
  });
};
y.getScript = function(s, n) {
  return new Promise((t) => {
    const e = y(`script[src="${s}"]`), i = () => {
      t(), n == null || n();
    };
    if (e.length) {
      if (e.dataset("loaded"))
        i();
      else {
        const r = e.data("loadCalls") || [];
        r.push(i), e.data("loadCalls", r);
      }
      return;
    }
    const o = document.createElement("script");
    o.async = !0, o.onload = () => {
      i(), (y(o).dataset("loaded", !0).data("loadCalls") || []).forEach((a) => a());
    }, o.src = s, y("head").append(o);
  });
};
const Af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: qr,
  runJS: Yr,
  scrollIntoView: zl
}, Symbol.toStringTag, { value: "Module" }));
var Bo, F, Fl, J, de, wa, jl, ur, Ue = {}, Vl = [], fu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Kr = Array.isArray;
function ee(s, n) {
  for (var t in n)
    s[t] = n[t];
  return s;
}
function Ul(s) {
  var n = s.parentNode;
  n && n.removeChild(s);
}
function U(s, n, t) {
  var e, i, o, r = {};
  for (o in n)
    o == "key" ? e = n[o] : o == "ref" ? i = n[o] : r[o] = n[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Bo.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return ei(s, r, e, i, null);
}
function ei(s, n, t, e, i) {
  var o = { type: s, props: n, key: t, ref: e, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Fl };
  return i == null && F.vnode != null && F.vnode(o), o;
}
function K() {
  return { current: null };
}
function Mn(s) {
  return s.children;
}
function W(s, n) {
  this.props = s, this.context = n;
}
function ui(s, n) {
  if (n == null)
    return s.__ ? ui(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; n < s.__k.length; n++)
    if ((t = s.__k[n]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? ui(s) : null;
}
function ql(s) {
  var n, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, n = 0; n < s.__k.length; n++)
      if ((t = s.__k[n]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return ql(s);
  }
}
function va(s) {
  (!s.__d && (s.__d = !0) && de.push(s) && !di.__r++ || wa !== F.debounceRendering) && ((wa = F.debounceRendering) || jl)(di);
}
function di() {
  var s, n, t, e, i, o, r, a, l;
  for (de.sort(ur); s = de.shift(); )
    s.__d && (n = de.length, e = void 0, i = void 0, o = void 0, a = (r = (t = s).__v).__e, (l = t.__P) && (e = [], i = [], (o = ee({}, r)).__v = r.__v + 1, Gr(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, e, a ?? ui(r), r.__h, i), Xl(e, r, i), r.__e != a && ql(r)), de.length > n && de.sort(ur));
  di.__r = 0;
}
function Yl(s, n, t, e, i, o, r, a, l, h, u) {
  var c, d, p, g, b, x, w, _, $, k, S = 0, N = e && e.__k || Vl, L = N.length, I = L, D = n.length;
  for (t.__k = [], c = 0; c < D; c++)
    (g = t.__k[c] = (g = n[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? ei(null, g, null, null, g) : Kr(g) ? ei(Mn, { children: g }, null, null, null) : g.__b > 0 ? ei(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, (_ = pu(g, N, w = c + S, I)) === -1 ? p = Ue : (p = N[_] || Ue, N[_] = void 0, I--), Gr(s, g, p, i, o, r, a, l, h, u), b = g.__e, (d = g.ref) && p.ref != d && (p.ref && Xr(p.ref, null, g), u.push(d, g.__c || b, g)), b != null && (x == null && (x = b), k = !($ = p === Ue || p.__v === null) && _ === w, $ ? _ == -1 && S-- : _ !== w && (_ === w + 1 ? (S++, k = !0) : _ > w ? I > D - w ? (S += _ - w, k = !0) : S-- : S = _ < w && _ == w - 1 ? _ - w : 0), w = c + S, k = k || _ == c && !$, typeof g.type != "function" || _ === w && p.__k !== g.__k ? typeof g.type == "function" || k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = b.nextSibling : l = Gl(s, b, l) : l = Kl(g, l, s), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = x, c = L; c--; )
    N[c] != null && (typeof t.type == "function" && N[c].__e != null && N[c].__e == t.__d && (t.__d = N[c].__e.nextSibling), Jl(N[c], N[c]));
}
function Kl(s, n, t) {
  for (var e, i = s.__k, o = 0; i && o < i.length; o++)
    (e = i[o]) && (e.__ = s, n = typeof e.type == "function" ? Kl(e, n, t) : Gl(t, e.__e, n));
  return n;
}
function Gl(s, n, t) {
  return t == null || t.parentNode !== s ? s.insertBefore(n, null) : n == t && n.parentNode != null || s.insertBefore(n, t), n.nextSibling;
}
function pu(s, n, t, e) {
  var i = s.key, o = s.type, r = t - 1, a = t + 1, l = n[t];
  if (l === null || l && i == l.key && o === l.type)
    return t;
  if (e > (l != null ? 1 : 0))
    for (; r >= 0 || a < n.length; ) {
      if (r >= 0) {
        if ((l = n[r]) && i == l.key && o === l.type)
          return r;
        r--;
      }
      if (a < n.length) {
        if ((l = n[a]) && i == l.key && o === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function mu(s, n, t, e, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in n || fi(s, o, null, t[o], e);
  for (o in n)
    i && typeof n[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === n[o] || fi(s, o, n[o], t[o], e);
}
function xa(s, n, t) {
  n[0] === "-" ? s.setProperty(n, t ?? "") : s[n] = t == null ? "" : typeof t != "number" || fu.test(n) ? t : t + "px";
}
function fi(s, n, t, e, i) {
  var o;
  t:
    if (n === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof e == "string" && (s.style.cssText = e = ""), e)
          for (n in e)
            t && n in t || xa(s.style, n, "");
        if (t)
          for (n in t)
            e && t[n] === e[n] || xa(s.style, n, t[n]);
      }
    else if (n[0] === "o" && n[1] === "n")
      o = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in s ? n.toLowerCase().slice(2) : n.slice(2), s.l || (s.l = {}), s.l[n + o] = t, t ? e || s.addEventListener(n, o ? _a : Ca, o) : s.removeEventListener(n, o ? _a : Ca, o);
    else if (n !== "dangerouslySetInnerHTML") {
      if (i)
        n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (n !== "width" && n !== "height" && n !== "href" && n !== "list" && n !== "form" && n !== "tabIndex" && n !== "download" && n !== "rowSpan" && n !== "colSpan" && n in s)
        try {
          s[n] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && n[4] !== "-" ? s.removeAttribute(n) : s.setAttribute(n, t));
    }
}
function Ca(s) {
  return this.l[s.type + !1](F.event ? F.event(s) : s);
}
function _a(s) {
  return this.l[s.type + !0](F.event ? F.event(s) : s);
}
function Gr(s, n, t, e, i, o, r, a, l, h) {
  var u, c, d, p, g, b, x, w, _, $, k, S, N, L, I, D = n.type;
  if (n.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = n.__e = t.__e, n.__h = null, o = [a]), (u = F.__b) && u(n);
  try {
    t:
      if (typeof D == "function") {
        if (w = n.props, _ = (u = D.contextType) && e[u.__c], $ = u ? _ ? _.props.value : u.__ : e, t.__c ? x = (c = n.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? n.__c = c = new D(w, $) : (n.__c = c = new W(w, $), c.constructor = D, c.render = yu), _ && _.sub(c), c.props = w, c.state || (c.state = {}), c.context = $, c.__n = e, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ee({}, c.__s)), ee(c.__s, D.getDerivedStateFromProps(w, c.__s))), p = c.props, g = c.state, c.__v = n, d)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, $), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, $) === !1 || n.__v === t.__v)) {
            for (n.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach(function(O) {
              O && (O.__ = n);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, $), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(p, g, b);
          });
        }
        if (c.context = $, c.props = w, c.__P = s, c.__e = !1, S = F.__r, N = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(n), u = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++)
            c.__h.push(c._sb[L]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(n), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++N < 25);
        c.state = c.__s, c.getChildContext != null && (e = ee(ee({}, e), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (b = c.getSnapshotBeforeUpdate(p, g)), Yl(s, Kr(I = u != null && u.type === Mn && u.key == null ? u.props.children : u) ? I : [I], n, t, e, i, o, r, a, l, h), c.base = n.__e, n.__h = null, c.__h.length && r.push(c), x && (c.__E = c.__ = null);
      } else
        o == null && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = gu(t.__e, n, t, e, i, o, r, l, h);
    (u = F.diffed) && u(n);
  } catch (O) {
    n.__v = null, (l || o != null) && (n.__e = a, n.__h = !!l, o[o.indexOf(a)] = null), F.__e(O, n, t);
  }
}
function Xl(s, n, t) {
  for (var e = 0; e < t.length; e++)
    Xr(t[e], t[++e], t[++e]);
  F.__c && F.__c(n, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      F.__e(o, i.__v);
    }
  });
}
function gu(s, n, t, e, i, o, r, a, l) {
  var h, u, c, d = t.props, p = n.props, g = n.type, b = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; b < o.length; b++)
      if ((h = o[b]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        s = h, o[b] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), o = null, a = !1;
  }
  if (g === null)
    d === p || a && s.data === p || (s.data = p);
  else {
    if (o = o && Bo.call(s.childNodes), u = (d = t.props || Ue).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (d = {}, b = 0; b < s.attributes.length; b++)
          d[s.attributes[b].name] = s.attributes[b].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === s.innerHTML) || (s.innerHTML = c && c.__html || ""));
    }
    if (mu(s, p, d, i, a), c)
      n.__k = [];
    else if (Yl(s, Kr(b = n.props.children) ? b : [b], n, t, e, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && ui(t, 0), a, l), o != null)
      for (b = o.length; b--; )
        o[b] != null && Ul(o[b]);
    a || ("value" in p && (b = p.value) !== void 0 && (b !== s.value || g === "progress" && !b || g === "option" && b !== d.value) && fi(s, "value", b, d.value, !1), "checked" in p && (b = p.checked) !== void 0 && b !== s.checked && fi(s, "checked", b, d.checked, !1));
  }
  return s;
}
function Xr(s, n, t) {
  try {
    typeof s == "function" ? s(n) : s.current = n;
  } catch (e) {
    F.__e(e, t);
  }
}
function Jl(s, n, t) {
  var e, i;
  if (F.unmount && F.unmount(s), (e = s.ref) && (e.current && e.current !== s.__e || Xr(e, null, n)), (e = s.__c) != null) {
    if (e.componentWillUnmount)
      try {
        e.componentWillUnmount();
      } catch (o) {
        F.__e(o, n);
      }
    e.base = e.__P = null, s.__c = void 0;
  }
  if (e = s.__k)
    for (i = 0; i < e.length; i++)
      e[i] && Jl(e[i], n, t || typeof s.type != "function");
  t || s.__e == null || Ul(s.__e), s.__ = s.__e = s.__d = void 0;
}
function yu(s, n, t) {
  return this.constructor(s, t);
}
function Hn(s, n, t) {
  var e, i, o, r;
  F.__ && F.__(s, n), i = (e = typeof t == "function") ? null : t && t.__k || n.__k, o = [], r = [], Gr(n, s = (!e && t || n).__k = U(Mn, null, [s]), i || Ue, Ue, n.ownerSVGElement !== void 0, !e && t ? [t] : i ? null : n.firstChild ? Bo.call(n.childNodes) : null, o, !e && t ? t : i ? i.__e : n.firstChild, e, r), Xl(o, s, r);
}
Bo = Vl.slice, F = { __e: function(s, n, t, e) {
  for (var i, o, r; n = n.__; )
    if ((i = n.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, e || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Fl = 0, J = function(s) {
  return s != null && s.constructor === void 0;
}, W.prototype.setState = function(s, n) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof s == "function" && (s = s(ee({}, t), this.props)), s && ee(t, s), s != null && this.__v && (n && this._sb.push(n), va(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), va(this));
}, W.prototype.render = Mn, de = [], jl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ur = function(s, n) {
  return s.__v.__b - n.__v.__b;
}, di.__r = 0;
var Zl = function(s, n, t, e) {
  var i;
  n[0] = 0;
  for (var o = 1; o < n.length; o++) {
    var r = n[o++], a = n[o] ? (n[0] |= r ? 1 : 2, t[n[o++]]) : n[++o];
    r === 3 ? e[0] = a : r === 4 ? e[1] = Object.assign(e[1] || {}, a) : r === 5 ? (e[1] = e[1] || {})[n[++o]] = a : r === 6 ? e[1][n[++o]] += a + "" : r ? (i = s.apply(a, Zl(s, a, t, ["", null])), e.push(i), a[0] ? n[0] |= 2 : (n[o - 2] = 0, n[o] = i)) : e.push(a);
  }
  return e;
}, $a = /* @__PURE__ */ new Map();
function bu(s) {
  var n = $a.get(this);
  return n || (n = /* @__PURE__ */ new Map(), $a.set(this, n)), (n = Zl(this, n.get(s) || (n.set(s, n = function(t) {
    for (var e, i, o = 1, r = "", a = "", l = [0], h = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, r) : o === 3 && (d || r) ? (l.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? l.push(4, d, 0) : o === 2 && r && !d ? l.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (l.push(o, 0, r, i), o = 6), d && (l.push(o, d, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        e = t[u][c], o === 1 ? e === "<" ? (h(), l = [l], o = 3) : r += e : o === 4 ? r === "--" && e === ">" ? (o = 1, r = "") : r = e + r[0] : a ? e === a ? a = "" : r += e : e === '"' || e === "'" ? a = e : e === ">" ? (h(), o = 1) : o && (e === "=" ? (o = 5, i = r, r = "") : e === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : e === " " || e === "	" || e === `
` || e === "\r" ? (h(), o = 2) : r += e), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(s)), n), arguments, [])).length > 1 ? n : n[0];
}
const If = bu.bind(U);
function Ql(s) {
  const { tagName: n = "div", className: t, style: e, children: i, attrs: o, forwardRef: r, ...a } = s;
  return U(n, { ref: r, class: R(t), style: e, ...a, ...o }, i);
}
var wu = 0;
function m(s, n, t, e, i, o) {
  var r, a, l = {};
  for (a in n)
    a == "ref" ? r = n[a] : l[a] = n[a];
  var h = { type: s, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --wu, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return F.vnode && F.vnode(h), h;
}
var jn, Vn, dr;
class Ws extends W {
  constructor() {
    super(...arguments);
    v(this, Vn);
    v(this, jn, K());
  }
  componentDidMount() {
    A(this, Vn, dr).call(this);
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && A(this, Vn, dr).call(this);
  }
  render(t) {
    const { executeScript: e, html: i, ...o } = t;
    return /* @__PURE__ */ m(Ql, { forwardRef: f(this, jn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
jn = new WeakMap(), Vn = new WeakSet(), dr = function() {
  this.props.executeScript && y(f(this, jn).current).runJS();
};
function vu(s) {
  const {
    tag: n,
    className: t,
    style: e,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...u
  } = s, c = [t], d = { ...e }, p = [], g = [];
  return i.forEach((b) => {
    const x = [];
    if (typeof b == "string" && a && a[b] && (b = a[b]), typeof b == "function")
      if (l)
        x.push(...l.call(r, b, p, ...o));
      else {
        const w = b.call(r, p, ...o);
        w && (Array.isArray(w) ? x.push(...w) : x.push(w));
      }
    else
      x.push(b);
    x.forEach((w) => {
      w != null && (typeof w == "object" && !J(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? p.push(
        /* @__PURE__ */ m("div", { className: R(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && c.push(w.className), w.children && p.push(w.children), w.attrs && Object.assign(u, w.attrs)) : p.push(w));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: R(c),
    style: d,
    ...u
  }, p];
}
function fr({
  tag: s = "div",
  ...n
}) {
  const [t, e] = vu(n);
  return U(s, t, ...e);
}
function tc(s, n, t) {
  return typeof s == "function" ? s.call(n, ...t) : Array.isArray(s) ? s.map((e) => tc(e, n, t)) : J(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ m(Ws, { ...s }) : /* @__PURE__ */ m(Ql, { ...s }) : s;
}
function zs(s) {
  const { content: n, generatorThis: t, generatorArgs: e } = s, i = tc(n, t, e);
  return i == null || typeof i == "boolean" ? null : J(i) ? i : /* @__PURE__ */ m(Mn, { children: i });
}
const Sa = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function et(s) {
  const { icon: n, className: t, ...e } = s;
  if (!n)
    return null;
  if (J(n))
    return n;
  const i = ["icon", t];
  if (typeof n == "string")
    i.push(Sa(n));
  else if (typeof n == "object") {
    const { className: o, icon: r, ...a } = n;
    i.push(o, r ? Sa(r) : ""), Object.assign(e, a);
  }
  return /* @__PURE__ */ m("i", { className: R(i), ...e });
}
function xu(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Cu(s) {
  const n = this, t = s._container;
  n.componentWillUnmount = function() {
    Hn(null, n._temp), n._temp = null, n._container = null;
  }, n._container && n._container !== t && n.componentWillUnmount(), s._vnode ? (n._temp || (n._container = t, n._temp = {
    nodeType: 1,
    parentNode: t,
    childNodes: [],
    appendChild(e) {
      this.childNodes.push(e), n._container.appendChild(e);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(e, i) {
      this.childNodes.push(e), n._container.appendChild(e);
    },
    removeChild(e) {
      this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), n._container.removeChild(e);
    }
  }), Hn(
    U(xu, { context: n.context }, s._vnode),
    n._temp
  )) : n._temp && n.componentWillUnmount();
}
function _u(s, n) {
  const t = U(Cu, { _vnode: s, _container: n });
  return t.containerInfo = n, t;
}
var Ut, Xe, Un, Je;
const Fe = class Fe {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(n, t) {
    /**
     * Store the component options.
     */
    v(this, Ut, void 0);
    /**
     * Store the component element.
     */
    v(this, Xe, void 0);
    /**
     * The component global ID.
     */
    v(this, Un, void 0);
    v(this, Je, void 0);
    C(this, Je, !1);
    const { KEY: e, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r } = this.constructor, a = y(n);
    if (a.data(e) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const l = y.guid++;
    if (C(this, Un, l), C(this, Xe, a[0]), a.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), C(this, Ut, { ...o, ...a.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${l}`, a.data(e, this).attr(i, `${l}`), r) {
      const h = `${e}:ALL`;
      let u = a.data(h);
      u || (u = /* @__PURE__ */ new Map(), a.data(h, u)), u.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      C(this, Je, !0), this.emit("inited", this.options), this.afterInit();
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (n) => n.toLowerCase());
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
    return f(this, Je);
  }
  /**
   * Get the component element.
   */
  get element() {
    return f(this, Xe);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return f(this, Ut);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return f(this, Un);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return y(this.element);
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
  render(n) {
    this.setOptions(n);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: n, DATA_KEY: t, MULTI_INSTANCE: e } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(n).attr(t, null), e) {
      const o = this.$element.data(`${n}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${n}:ALL`);
        else {
          const r = o.values().next().value;
          i.data(n, r).attr(t, r.gid);
        }
    }
    C(this, Ut, void 0), C(this, Xe, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(n) {
    return n && y.extend(f(this, Ut), n), f(this, Ut);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(n, ...t) {
    const e = y.Event(n);
    return e.__src = this, this.$emitter.trigger(e, [this, ...t]), e;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(n, t, e) {
    const i = this;
    this.$element[e != null && e.once ? "one" : "on"](this._wrapEvent(n), function(o, r) {
      (!o.__src || o.__src === i) && t.call(this, o, r);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(n, t) {
    this.on(n, t, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(n) {
    this.$element.off(this._wrapEvent(n));
  }
  /**
   * Get the i18n text.
   *
   * @param key          The i18n key.
   * @param args         The i18n arguments or the default value.
   * @param defaultValue The default value if the key is not found.
   * @returns            The i18n text.
   */
  i18n(n, t, e) {
    return Z(this.options.i18n, n, t, e, this.options.lang, this.constructor.NAME) ?? Z(this.options.i18n, n, t, e, this.options.lang) ?? `{i18n:${n}}`;
  }
  /**
   * Get event namespace.
   * @returns Event namespace.
   */
  get namespace() {
    return `.${this._key}${this.constructor.NAMESPACE}`;
  }
  /**
   * Wrap event names with component namespace.
   *
   * @param names The event names.
   * @returns     The wrapped event names.
   */
  _wrapEvent(n) {
    return n.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
  }
  /**
   * Get the component instance of the given element.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static get(n, t) {
    const e = y(n);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const i = e.data(`${this.KEY}:ALL`);
      return i ? i.get(t) : void 0;
    }
    return e.data(this.KEY);
  }
  /**
   * Ensure the component instance of the given element.
   *
   * @param this      Current component constructor.
   * @param selector  The component element selector.
   * @param options   The component options.
   * @returns         The component instance.
   */
  static ensure(n, t) {
    const e = this.get(n, t == null ? void 0 : t.key);
    return e ? (t && e.setOptions(t), e) : new this(n, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(n) {
    const { MULTI_INSTANCE: t, DATA_KEY: e } = this, i = [];
    return y(n || document).find(`[${e}]`).each((o, r) => {
      if (t) {
        const l = y(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = y(r).data(this.KEY);
      a && i.push(a);
    }), i;
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(n, t) {
    return n === void 0 ? this.getAll().sort((e, i) => e.gid - i.gid)[0] : this.get(y(n).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(n) {
    let t = n || this.ZUI;
    y.fn[t] && (t = `zui${this.NAME}`);
    const e = this;
    y.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, u) => {
          let c = e.get(u);
          if (c ? r && c.render(r) : c = new e(u, r), a) {
            let d = c[a];
            d !== void 0 && (d = c.$[a]), typeof d == "function" ? l = d(...o) : l = d;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
};
Ut = new WeakMap(), Xe = new WeakMap(), Un = new WeakMap(), Je = new WeakMap(), Fe.DEFAULT = {}, Fe.NAME = Fe.name, Fe.MULTI_INSTANCE = !1;
let dt = Fe;
class j extends dt {
  constructor() {
    super(...arguments), this.ref = K();
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
    var n, t;
    (t = (n = this.$) == null ? void 0 : n.componentWillUnmount) == null || t.call(n), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(n) {
    Hn(
      U(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(n)
      }),
      this.element
    );
  }
}
function $u({
  component: s = "div",
  className: n,
  children: t,
  style: e,
  attrs: i
}) {
  return U(s, {
    className: R(n),
    style: e,
    ...i
  }, t);
}
function ec({
  type: s,
  component: n = "a",
  className: t,
  children: e,
  content: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: u,
  target: c,
  trailingIcon: d,
  hint: p,
  checked: g,
  onClick: b,
  data: x,
  ...w
}) {
  const _ = [
    typeof g == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    /* @__PURE__ */ m(et, { icon: h }),
    /* @__PURE__ */ m("span", { className: "text", children: u }),
    /* @__PURE__ */ m(zs, { content: i }),
    e,
    /* @__PURE__ */ m(et, { icon: d })
  ];
  return U(n, {
    className: R(t, { disabled: a, active: l }),
    title: p,
    [n === "a" ? "href" : "data-url"]: r,
    [n === "a" ? "target" : "data-target"]: c,
    onClick: b,
    ...w,
    ...o
  }, ..._);
}
function Su({
  component: s = "div",
  className: n,
  text: t,
  attrs: e,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return U(s, {
    className: R(n),
    style: r,
    onClick: a,
    ...e
  }, t, /* @__PURE__ */ m(zs, { content: o }), i);
}
function ku({
  component: s = "div",
  className: n,
  style: t,
  space: e,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return U(s, {
    className: R(n),
    style: { width: e, height: e, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function Eu({ type: s, ...n }) {
  return /* @__PURE__ */ m(fr, { ...n });
}
function nc({
  component: s = "div",
  className: n,
  children: t,
  content: e,
  style: i,
  attrs: o
}) {
  return U(s, {
    className: R(n),
    style: i,
    ...o
  }, /* @__PURE__ */ m(zs, { content: e }), t);
}
var It;
let Wo = (It = class extends W {
  constructor() {
    super(...arguments), this.ref = K();
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
    var n, t;
    (t = (n = this.props).beforeDestroy) == null || t.call(n, { menu: this });
  }
  afterRender(n) {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { menu: this, firstRender: n });
  }
  handleItemClick(n, t, e, i) {
    e && e.call(i.target, i, n, t);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: n, index: t, event: i });
  }
  beforeRender() {
    var e;
    const n = { ...this.props };
    typeof n.items == "function" && (n.items = n.items(this)), n.items || (n.items = []);
    const t = (e = n.beforeRender) == null ? void 0 : e.call(n, { menu: this, options: n });
    return t && Object.assign(n, t), n;
  }
  getItemRenderProps(n, t, e) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = n;
    let a = { ...t };
    return i && Object.assign(a, i[t.type || "item"]), (o || t.onClick) && (a.onClick = this.handleItemClick.bind(this, a, e, t.onClick)), a.className = R(a.className), r && (a = r(a)), a;
  }
  renderItem(n, t, e) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(n, t, e), { itemRender: o } = n;
    if (o) {
      if (typeof o == "object") {
        const b = o[t.type || "item"];
        if (b)
          return /* @__PURE__ */ m(b, { ...i });
      } else if (typeof o == "function") {
        const b = o.call(this, i, U);
        if (J(b))
          return b;
        typeof b == "object" && Object.assign(i, b);
      }
    }
    const { type: r = "item", component: a, key: l = e, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: d, ...p } = i;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: R("action-menu-item", `${this.name}-html`, u, p.className),
          ...h,
          style: c || p.style,
          dangerouslySetInnerHTML: { __html: p.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || It.ItemComponents[r] : a;
    return Object.assign(p, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), n.checkbox && r === "item" && p.checked === void 0 && (p.checked = !!p.active), this.renderTypedItem(g, {
      className: R(u),
      children: d,
      style: c,
      key: l,
      ...h
    }, {
      ...p,
      type: r,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(n, t, e) {
    const { children: i, className: o, key: r, ...a } = t;
    return /* @__PURE__ */ m(
      "li",
      {
        className: R(`${this.constructor.NAME}-item`, `${this.name}-${e.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ m(n, { ...e }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const n = this.beforeRender(), {
      name: t,
      style: e,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: d,
      ...p
    } = n, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ m(g, { class: R(this.name, o), style: e, ...p, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, n)),
      a
    ] });
  }
}, It.ItemComponents = {
  divider: $u,
  item: ec,
  heading: Su,
  space: ku,
  custom: Eu,
  basic: nc
}, It.ROOT_TAG = "menu", It.NAME = "action-menu", It);
const ki = class ki extends j {
};
ki.NAME = "ActionMenu", ki.Component = Wo;
let ka = ki;
function Tu({
  items: s,
  show: n,
  level: t,
  ...e
}) {
  return /* @__PURE__ */ m(ec, { ...e });
}
var qn, gt, Ze, Yn;
let Jr = (Yn = class extends Wo {
  constructor(t) {
    super(t);
    v(this, qn, /* @__PURE__ */ new Set());
    v(this, gt, void 0);
    v(this, Ze, (t, e, i) => {
      y(i.target).closest(".not-nested-toggle").length || (this.toggle(t, e), i.preventDefault());
    });
    C(this, gt, t.nestedShow === void 0), f(this, gt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: e, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: a, ...l } = t;
    return typeof l.items == "function" && (l.items = l.items(this)), l.items || (l.items = []), l.items.some((h) => h.items) || (l.className = R(l.className, "no-nested-items")), !r && a && (l.style = Object.assign({
      [`--${this.name}-indent`]: `${a}px`
    }, l.style)), l;
  }
  getNestedMenuProps(t) {
    const { name: e, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: a, itemRender: l, onClickItem: h, afterRender: u, commonItemProps: c, level: d, itemRenderProps: p } = this.props;
    return {
      items: t,
      name: e,
      nestedShow: f(this, gt) ? this.state.nestedShow : o,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: i || this,
      commonItemProps: c,
      onClickItem: h,
      afterRender: u,
      beforeRender: a,
      beforeDestroy: r,
      itemRender: l,
      itemRenderProps: p,
      level: (d || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: e } = t;
    if (!e || (typeof e == "function" && (e = e(t, this)), !e.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(e);
    return /* @__PURE__ */ m(i, { ...o, "data-level": o.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, e) {
  }
  getItemRenderProps(t, e, i) {
    const o = super.getItemRenderProps(t, e, i);
    if (o.level = t.level || 0, !this.isNestedItem(o))
      return o;
    const r = o.key ?? o.id ?? `${t.level || 0}:${i}`;
    f(this, qn).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(e)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: f(this, Ze).bind(this, r, !0),
        onMouseLeave: f(this, Ze).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        f(this, Ze).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const e = f(this, gt) ? this.state.nestedShow : this.props.nestedShow;
    return e && typeof e == "object" ? e[t] : !!e;
  }
  toggle(t, e) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, e);
    if (!f(this, gt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...f(this, qn).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), e === void 0)
      e = !o[t];
    else if (!!o[t] == !!e)
      return !1;
    return e ? o[t] = e : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    f(this, gt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    f(this, gt) && this.setState({ nestedShow: !1 });
  }
}, qn = new WeakMap(), gt = new WeakMap(), Ze = new WeakMap(), Yn.ItemComponents = {
  item: Tu
}, Yn);
const Ei = class Ei extends j {
};
Ei.NAME = "ActionMenuNested", Ei.Component = Jr;
let Ea = Ei;
var Kn;
let De = (Kn = class extends Jr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const n = super.beforeRender();
    let { hasIcons: t } = n;
    return t === void 0 && (t = n.items.some((e) => e.icon)), n.className = R(n.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": n.items.some((e) => this.isNestedItem(e)),
      popup: n.popup
    }), n;
  }
  renderToggleIcon(n) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${n ? "down" : "right"}` });
  }
}, Kn.NAME = "menu", Kn);
const Ti = class Ti extends j {
};
Ti.NAME = "Menu", Ti.Component = De;
let Ta = Ti;
class tt extends W {
  render() {
    const {
      component: n,
      type: t,
      btnType: e,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: u,
      loading: c,
      loadingIcon: d,
      loadingText: p,
      icon: g,
      text: b,
      trailingIcon: x,
      caret: w,
      square: _,
      rounded: $ = !0,
      hint: k,
      ...S
    } = this.props, N = n || (a ? "a" : "button"), L = b == null || typeof b == "string" && !b.length || c && !p, I = w && L && !g && !x && !r && !c;
    return U(
      N,
      {
        className: R("btn", t, o, {
          "btn-caret": I,
          disabled: h || c,
          active: u,
          loading: c,
          square: _ === void 0 ? !I && !r && L : _
        }, i ? `size-${i}` : "", typeof $ == "string" ? $ : { rounded: $ }),
        title: k,
        [N === "a" ? "href" : "data-url"]: a,
        [N === "a" ? "target" : "data-target"]: l,
        type: N === "button" ? e : void 0,
        ...S
      },
      c ? /* @__PURE__ */ m(et, { icon: d || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(et, { icon: g }),
      L ? null : /* @__PURE__ */ m("span", { className: "text", children: c ? p : b }),
      c ? null : r,
      c ? null : /* @__PURE__ */ m(et, { icon: x }),
      c ? null : w ? /* @__PURE__ */ m("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function Nu({
  key: s,
  type: n,
  btnType: t,
  ...e
}) {
  return /* @__PURE__ */ m(tt, { type: t, ...e });
}
function Fs(s) {
  return s.split("-")[1];
}
function Zr(s) {
  return s === "y" ? "height" : "width";
}
function Re(s) {
  return s.split("-")[0];
}
function js(s) {
  return ["top", "bottom"].includes(Re(s)) ? "x" : "y";
}
function Na(s, n, t) {
  let { reference: e, floating: i } = s;
  const o = e.x + e.width / 2 - i.width / 2, r = e.y + e.height / 2 - i.height / 2, a = js(n), l = Zr(a), h = e[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (Re(n)) {
    case "top":
      c = { x: o, y: e.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: e.y + e.height };
      break;
    case "right":
      c = { x: e.x + e.width, y: r };
      break;
    case "left":
      c = { x: e.x - i.width, y: r };
      break;
    default:
      c = { x: e.x, y: e.y };
  }
  switch (Fs(n)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Mu = async (s, n, t) => {
  const { placement: e = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let h = await r.getElementRects({ reference: s, floating: n, strategy: i }), { x: u, y: c } = Na(h, e, l), d = e, p = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: x, fn: w } = a[b], { x: _, y: $, data: k, reset: S } = await w({ x: u, y: c, initialPlacement: e, placement: d, strategy: i, middlewareData: p, rects: h, platform: r, elements: { reference: s, floating: n } });
    u = _ ?? u, c = $ ?? c, p = { ...p, [x]: { ...p[x], ...k } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: n, strategy: i }) : S.rects), { x: u, y: c } = Na(h, d, l)), b = -1);
  }
  return { x: u, y: c, placement: d, strategy: i, middlewareData: p };
};
function Vs(s, n) {
  return typeof s == "function" ? s(n) : s;
}
function sc(s) {
  return typeof s != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function pi(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function ic(s, n) {
  var t;
  n === void 0 && (n = {});
  const { x: e, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: p = 0 } = Vs(n, s), g = sc(p), b = a[d ? c === "floating" ? "reference" : "floating" : c], x = pi(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: e, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, k = pi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (x.top - k.top + g.top) / $.y, bottom: (k.bottom - x.bottom + g.bottom) / $.y, left: (x.left - k.left + g.left) / $.x, right: (k.right - x.right + g.right) / $.x };
}
const pr = Math.min, Ru = Math.max;
function mr(s, n, t) {
  return Ru(s, pr(n, t));
}
const gr = (s) => ({ name: "arrow", options: s, async fn(n) {
  const { x: t, y: e, placement: i, rects: o, platform: r, elements: a } = n, { element: l, padding: h = 0 } = Vs(s, n) || {};
  if (l == null)
    return {};
  const u = sc(h), c = { x: t, y: e }, d = js(i), p = Zr(d), g = await r.getDimensions(l), b = d === "y", x = b ? "top" : "left", w = b ? "bottom" : "right", _ = b ? "clientHeight" : "clientWidth", $ = o.reference[p] + o.reference[d] - c[d] - o.floating[p], k = c[d] - o.reference[d], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let N = S ? S[_] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(S)) || (N = a.floating[_] || o.floating[p]);
  const L = $ / 2 - k / 2, I = N / 2 - g[p] / 2 - 1, D = pr(u[x], I), O = pr(u[w], I), P = D, M = N - g[p] - O, E = N / 2 - g[p] / 2 + L, H = mr(P, E, M), B = Fs(i) != null && E != H && o.reference[p] / 2 - (E < P ? D : O) - g[p] / 2 < 0 ? E < P ? P - E : M - E : 0;
  return { [d]: c[d] - B, data: { [d]: H, centerOffset: E - H + B } };
} }), Lu = ["top", "right", "bottom", "left"];
Lu.reduce((s, n) => s.concat(n, n + "-start", n + "-end"), []);
const Au = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(s) {
  return s.replace(/left|right|bottom|top/g, (n) => Au[n]);
}
function Iu(s, n, t) {
  t === void 0 && (t = !1);
  const e = Fs(s), i = js(s), o = Zr(i);
  let r = i === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = mi(r)), { main: r, cross: mi(r) };
}
const Du = { start: "end", end: "start" };
function tr(s) {
  return s.replace(/start|end/g, (n) => Du[n]);
}
const zo = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(n) {
    var t;
    const { placement: e, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = n, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...b } = Vs(s, n), x = Re(e), w = Re(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = c || (w || !g ? [mi(r)] : function(P) {
      const M = mi(P);
      return [tr(P), M, tr(M)];
    }(r));
    c || p === "none" || $.push(...function(P, M, E, H) {
      const B = Fs(P);
      let z = function(X, ue, Ys) {
        const Rn = ["left", "right"], Ks = ["right", "left"], Go = ["top", "bottom"], yh = ["bottom", "top"];
        switch (X) {
          case "top":
          case "bottom":
            return Ys ? ue ? Ks : Rn : ue ? Rn : Ks;
          case "left":
          case "right":
            return ue ? Go : yh;
          default:
            return [];
        }
      }(Re(P), E === "start", H);
      return B && (z = z.map((X) => X + "-" + B), M && (z = z.concat(z.map(tr)))), z;
    }(r, g, p, _));
    const k = [r, ...$], S = await ic(n, b), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[x]), u) {
      const { main: P, cross: M } = Iu(e, o, _);
      N.push(S[P], S[M]);
    }
    if (L = [...L, { placement: e, overflows: N }], !N.every((P) => P <= 0)) {
      var I, D;
      const P = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, M = k[P];
      if (M)
        return { data: { index: P, overflows: L }, reset: { placement: M } };
      let E = (D = L.filter((H) => H.overflows[0] <= 0).sort((H, B) => H.overflows[1] - B.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!E)
        switch (d) {
          case "bestFit": {
            var O;
            const H = (O = L.map((B) => [B.placement, B.overflows.filter((z) => z > 0).reduce((z, X) => z + X, 0)]).sort((B, z) => B[1] - z[1])[0]) == null ? void 0 : O[0];
            H && (E = H);
            break;
          }
          case "initialPlacement":
            E = r;
        }
      if (e !== E)
        return { reset: { placement: E } };
    }
    return {};
  } };
}, Fo = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(n) {
    const { x: t, y: e } = n, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = Re(a), d = Fs(a), p = js(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, b = u && p ? -1 : 1, x = Vs(r, o);
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return d && typeof $ == "number" && (_ = d === "end" ? -1 * $ : $), p ? { x: _ * b, y: w * g } : { x: w * g, y: _ * b };
    }(n, s);
    return { x: t + i.x, y: e + i.y, data: i };
  } };
};
function Pu(s) {
  return s === "x" ? "y" : "x";
}
const gi = function(s) {
  return s === void 0 && (s = {}), { name: "shift", options: s, async fn(n) {
    const { x: t, y: e, placement: i } = n, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (x) => {
      let { x: w, y: _ } = x;
      return { x: w, y: _ };
    } }, ...l } = Vs(s, n), h = { x: t, y: e }, u = await ic(n, l), c = js(Re(i)), d = Pu(c);
    let p = h[c], g = h[d];
    if (o) {
      const x = c === "y" ? "bottom" : "right";
      p = mr(p + u[c === "y" ? "top" : "left"], p, p - u[x]);
    }
    if (r) {
      const x = d === "y" ? "bottom" : "right";
      g = mr(g + u[d === "y" ? "top" : "left"], g, g - u[x]);
    }
    const b = a.fn({ ...n, [c]: p, [d]: g });
    return { ...b, data: { x: b.x - t, y: b.y - e } };
  } };
};
function ot(s) {
  var n;
  return (s == null || (n = s.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Tt(s) {
  return ot(s).getComputedStyle(s);
}
function oc(s) {
  return s instanceof ot(s).Node;
}
function oe(s) {
  return oc(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ft(s) {
  return s instanceof HTMLElement || s instanceof ot(s).HTMLElement;
}
function Ma(s) {
  return typeof ShadowRoot < "u" && (s instanceof ot(s).ShadowRoot || s instanceof ShadowRoot);
}
function Bn(s) {
  const { overflow: n, overflowX: t, overflowY: e, display: i } = Tt(s);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !["inline", "contents"].includes(i);
}
function Ou(s) {
  return ["table", "td", "th"].includes(oe(s));
}
function yr(s) {
  const n = Qr(), t = Tt(s);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !n && !!t.backdropFilter && t.backdropFilter !== "none" || !n && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((e) => (t.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some((e) => (t.contain || "").includes(e));
}
function Qr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function jo(s) {
  return ["html", "body", "#document"].includes(oe(s));
}
const br = Math.min, qe = Math.max, yi = Math.round, Gs = Math.floor, re = (s) => ({ x: s, y: s });
function rc(s) {
  const n = Tt(s);
  let t = parseFloat(n.width) || 0, e = parseFloat(n.height) || 0;
  const i = ft(s), o = i ? s.offsetWidth : t, r = i ? s.offsetHeight : e, a = yi(t) !== o || yi(e) !== r;
  return a && (t = o, e = r), { width: t, height: e, $: a };
}
function Dt(s) {
  return s instanceof Element || s instanceof ot(s).Element;
}
function ta(s) {
  return Dt(s) ? s : s.contextElement;
}
function Ye(s) {
  const n = ta(s);
  if (!ft(n))
    return re(1);
  const t = n.getBoundingClientRect(), { width: e, height: i, $: o } = rc(n);
  let r = (o ? yi(t.width) : t.width) / e, a = (o ? yi(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const Hu = re(0);
function ac(s) {
  const n = ot(s);
  return Qr() && n.visualViewport ? { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop } : Hu;
}
function Pe(s, n, t, e) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const i = s.getBoundingClientRect(), o = ta(s);
  let r = re(1);
  n && (e ? Dt(e) && (r = Ye(e)) : r = Ye(s));
  const a = function(d, p, g) {
    return p === void 0 && (p = !1), !(!g || p && g !== ot(d)) && p;
  }(o, t, e) ? ac(o) : re(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const d = ot(o), p = e && Dt(e) ? ot(e) : e;
    let g = d.frameElement;
    for (; g && e && p !== d; ) {
      const b = Ye(g), x = g.getBoundingClientRect(), w = getComputedStyle(g), _ = x.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, $ = x.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, h *= b.y, u *= b.x, c *= b.y, l += _, h += $, g = ot(g).frameElement;
    }
  }
  return pi({ width: u, height: c, x: l, y: h });
}
function Vo(s) {
  return Dt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Pt(s) {
  var n;
  return (n = (oc(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : n.documentElement;
}
function lc(s) {
  return Pe(Pt(s)).left + Vo(s).scrollLeft;
}
function kn(s) {
  if (oe(s) === "html")
    return s;
  const n = s.assignedSlot || s.parentNode || Ma(s) && s.host || Pt(s);
  return Ma(n) ? n.host : n;
}
function cc(s) {
  const n = kn(s);
  return jo(n) ? s.ownerDocument ? s.ownerDocument.body : s.body : ft(n) && Bn(n) ? n : cc(n);
}
function bi(s, n) {
  var t;
  n === void 0 && (n = []);
  const e = cc(s), i = e === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ot(e);
  return i ? n.concat(o, o.visualViewport || [], Bn(e) ? e : []) : n.concat(e, bi(e));
}
function Ra(s, n, t) {
  let e;
  if (n === "viewport")
    e = function(i, o) {
      const r = ot(i), a = Pt(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, d = 0;
      if (l) {
        h = l.width, u = l.height;
        const p = Qr();
        (!p || p && o === "fixed") && (c = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: d };
    }(s, t);
  else if (n === "document")
    e = function(i) {
      const o = Pt(i), r = Vo(i), a = i.ownerDocument.body, l = qe(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = qe(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + lc(i);
      const c = -r.scrollTop;
      return Tt(a).direction === "rtl" && (u += qe(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(Pt(s));
  else if (Dt(n))
    e = function(i, o) {
      const r = Pe(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = ft(i) ? Ye(i) : re(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(n, t);
  else {
    const i = ac(s);
    e = { ...n, x: n.x - i.x, y: n.y - i.y };
  }
  return pi(e);
}
function hc(s, n) {
  const t = kn(s);
  return !(t === n || !Dt(t) || jo(t)) && (Tt(t).position === "fixed" || hc(t, n));
}
function Bu(s, n, t) {
  const e = ft(n), i = Pt(n), o = t === "fixed", r = Pe(s, !0, o, n);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = re(0);
  if (e || !e && !o)
    if ((oe(n) !== "body" || Bn(i)) && (a = Vo(n)), ft(n)) {
      const h = Pe(n, !0, o, n);
      l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
    } else
      i && (l.x = lc(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function La(s, n) {
  return ft(s) && Tt(s).position !== "fixed" ? n ? n(s) : s.offsetParent : null;
}
function Aa(s, n) {
  const t = ot(s);
  if (!ft(s))
    return t;
  let e = La(s, n);
  for (; e && Ou(e) && Tt(e).position === "static"; )
    e = La(e, n);
  return e && (oe(e) === "html" || oe(e) === "body" && Tt(e).position === "static" && !yr(e)) ? t : e || function(i) {
    let o = kn(i);
    for (; ft(o) && !jo(o); ) {
      if (yr(o))
        return o;
      o = kn(o);
    }
    return null;
  }(s) || t;
}
const Wu = { convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: n, offsetParent: t, strategy: e } = s;
  const i = ft(t), o = Pt(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = re(1);
  const l = re(0);
  if ((i || !i && e !== "fixed") && ((oe(t) !== "body" || Bn(o)) && (r = Vo(t)), ft(t))) {
    const h = Pe(t);
    a = Ye(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - r.scrollLeft * a.x + l.x, y: n.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: Pt, getClippingRect: function(s) {
  let { element: n, boundary: t, rootBoundary: e, strategy: i } = s;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = bi(l).filter((b) => Dt(b) && oe(b) !== "body"), d = null;
    const p = Tt(l).position === "fixed";
    let g = p ? kn(l) : l;
    for (; Dt(g) && !jo(g); ) {
      const b = Tt(g), x = yr(g);
      x || b.position !== "fixed" || (d = null), (p ? !x && !d : !x && b.position === "static" && d && ["absolute", "fixed"].includes(d.position) || Bn(g) && !x && hc(l, g)) ? c = c.filter((w) => w !== g) : d = b, g = kn(g);
    }
    return h.set(l, c), c;
  }(n, this._c) : [].concat(t), e], r = o[0], a = o.reduce((l, h) => {
    const u = Ra(n, h, i);
    return l.top = qe(u.top, l.top), l.right = br(u.right, l.right), l.bottom = br(u.bottom, l.bottom), l.left = qe(u.left, l.left), l;
  }, Ra(n, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: Aa, getElementRects: async function(s) {
  let { reference: n, floating: t, strategy: e } = s;
  const i = this.getOffsetParent || Aa, o = this.getDimensions;
  return { reference: Bu(n, await i(t), e), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(s) {
  return Array.from(s.getClientRects());
}, getDimensions: function(s) {
  return rc(s);
}, getScale: Ye, isElement: Dt, isRTL: function(s) {
  return getComputedStyle(s).direction === "rtl";
} };
function ea(s, n, t, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = e, h = ta(s), u = i || o ? [...h ? bi(h) : [], ...bi(n)] : [];
  u.forEach((x) => {
    i && x.addEventListener("scroll", t, { passive: !0 }), o && x.addEventListener("resize", t);
  });
  const c = h && a ? function(x, w) {
    let _, $ = null;
    const k = Pt(x);
    function S() {
      clearTimeout(_), $ && $.disconnect(), $ = null;
    }
    return function N(L, I) {
      L === void 0 && (L = !1), I === void 0 && (I = 1), S();
      const { left: D, top: O, width: P, height: M } = x.getBoundingClientRect();
      if (L || w(), !P || !M)
        return;
      const E = { rootMargin: -Gs(O) + "px " + -Gs(k.clientWidth - (D + P)) + "px " + -Gs(k.clientHeight - (O + M)) + "px " + -Gs(D) + "px", threshold: qe(0, br(1, I)) || 1 };
      let H = !0;
      function B(z) {
        const X = z[0].intersectionRatio;
        if (X !== I) {
          if (!H)
            return N();
          X ? N(!1, X) : _ = setTimeout(() => {
            N(!1, 1e-7);
          }, 100);
        }
        H = !1;
      }
      try {
        $ = new IntersectionObserver(B, { ...E, root: k.ownerDocument });
      } catch {
        $ = new IntersectionObserver(B, E);
      }
      $.observe(x);
    }(!0), S;
  }(h, t) : null;
  let d, p = -1, g = null;
  r && (g = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === h && g && (g.unobserve(n), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      g && g.observe(n);
    })), t();
  }), h && !l && g.observe(h), g.observe(n));
  let b = l ? Pe(s) : null;
  return l && function x() {
    const w = Pe(s);
    !b || w.x === b.x && w.y === b.y && w.width === b.width && w.height === b.height || t(), b = w, d = requestAnimationFrame(x);
  }(), t(), () => {
    u.forEach((x) => {
      i && x.removeEventListener("scroll", t), o && x.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, l && cancelAnimationFrame(d);
  };
}
const Uo = (s, n, t) => {
  const e = /* @__PURE__ */ new Map(), i = { platform: Wu, ...t }, o = { ...i.platform, _c: e };
  return Mu(s, n, { ...i, platform: o });
};
var Qe, Gn;
let zu = (Gn = class extends De {
  constructor() {
    super(...arguments);
    v(this, Qe, 0);
  }
  get nestedTrigger() {
    return this.props.nestedTrigger || "hover";
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "menu-context";
  }
  layout() {
    const t = this.ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || Uo(e, t, {
      placement: "right-start",
      middleware: [zo(), gi(), Fo(1)]
    }).then(({ x: i, y: o }) => {
      y(t).css({
        left: i,
        top: o
      });
    });
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t);
    return {
      ...e,
      className: R("absolute", e.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), C(this, Qe, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), f(this, Qe) && clearTimeout(f(this, Qe));
  }
}, Qe = new WeakMap(), Gn.defaultProps = {
  ...De.defaultProps,
  popup: !0
}, Gn);
const er = "show", Fu = '[data-toggle="contextmenu"]';
var Mt, tn, Xn, Jn, Ni, uc, Mi, dc;
const je = class je extends dt {
  constructor() {
    super(...arguments);
    v(this, Ni);
    v(this, Mi);
    v(this, Mt, void 0);
    v(this, tn, void 0);
    v(this, Xn, void 0);
    v(this, Jn, void 0);
  }
  get isShown() {
    return f(this, Mt) && y(f(this, Mt)).hasClass(er);
  }
  get menu() {
    return f(this, Mt) || this.ensureMenu();
  }
  get trigger() {
    return f(this, Xn) || this.element;
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
    return this.isShown || (C(this, Xn, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (y(this.menu).addClass(er), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var e;
    return !this.isShown || ((e = f(this, Jn)) == null || e.call(this), this.emit("hide").defaultPrevented) ? !1 : (y(f(this, Mt)).removeClass(er), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = f(this, Mt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, e = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = y(`<div class="${e}" />`).appendTo("body");
    else if (t.length) {
      const o = t.attr("href") || t.dataset("target") || "";
      if (o[0] === "#" && (i = y(document).find(o)), !(i != null && i.length)) {
        const r = t.next();
        r.hasClass(e) ? i = r : i = t.parent().find(`.${e}`);
      }
      i && i.addClass("popup");
    }
    if (!(i != null && i.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return i.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), C(this, Mt, i[0]), i[0];
  }
  getPopperOptions() {
    var o;
    const { placement: t, strategy: e } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: e
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(zo())), i;
  }
  createPopper() {
    const t = this.getPopperOptions(), e = this.getPopperElement(), i = this.menu;
    C(this, Jn, ea(e, i, () => {
      Uo(e, i, t).then(({ x: o, y: r, middlewareData: a, placement: l }) => {
        if (y(i).css({ left: o, top: r }), a.arrow && this.arrowEl) {
          const h = l.split("-")[0], u = A(this, Ni, uc).call(this, h), { x: c, y: d } = a.arrow;
          y(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...A(this, Mi, dc).call(this, h)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: e } = this.options;
    let i = e || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (Hn(U(zu, t), this.menu), !0);
  }
  getPopperElement() {
    return f(this, tn) || C(this, tn, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: e, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: e,
            bottom: i,
            left: e
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), f(this, tn);
  }
  static clear(t) {
    var l, h;
    t instanceof Event && (t = { event: t });
    const { event: e, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (e && o && ((h = (l = e.target).closest) != null && h.call(l, o)) || e && e.button === 2)
      return;
    const r = this.getAll(), a = new Set(i || []);
    for (const u of r)
      a.has(u.element) || u.hide();
  }
  static show(t) {
    const { event: e, ...i } = t, o = this.ensure(document.body);
    return o.setOptions(i), o.show(e), e instanceof Event && e.stopPropagation(), o;
  }
  static hide(t) {
    const e = this.query(t);
    return e == null || e.hide(), e;
  }
};
Mt = new WeakMap(), tn = new WeakMap(), Xn = new WeakMap(), Jn = new WeakMap(), Ni = new WeakSet(), uc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Mi = new WeakSet(), dc = function(t) {
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
}, je.MENU_CLASS = "contextmenu", je.NAME = "ContextMenu", je.MULTI_INSTANCE = !0, je.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
let lt = je;
y(document).on(`contextmenu${lt.NAMESPACE}`, (s) => {
  const n = y(s.target);
  if (n.closest(`.${lt.MENU_CLASS}`).length)
    return;
  const t = n.closest(Fu).not(":disabled,.disabled");
  if (t.length) {
    const e = `${lt.KEY}:options`, i = t.data(e), o = lt.ensure(t, i);
    i || t.data(e, o.options), o.show(s), s.preventDefault();
  }
}).on(`click${lt.NAMESPACE}`, lt.clear.bind(lt));
const Ia = '[data-toggle="dropdown"]';
var me, ge, en, Ri, fc;
const Ve = class Ve extends lt {
  constructor() {
    super(...arguments);
    v(this, Ri);
    v(this, me, void 0);
    v(this, ge, void 0);
    v(this, en, void 0);
    C(this, me, !1), C(this, ge, 0), this.hideLater = () => {
      f(this, en).call(this), C(this, ge, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, en, () => {
      clearTimeout(f(this, ge)), C(this, ge, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, e) {
    (e == null ? void 0 : e.clearOthers) !== !1 && Ve.clear({ event: e == null ? void 0 : e.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!f(this, me) && this.isHover && A(this, Ri, fc).call(this), this.$element.addClass(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, e) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...e });
  }
  destroy() {
    f(this, me) && y(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var i, o;
    const t = super.getPopperOptions(), e = this.getArrowSize();
    return e && this.arrowEl && ((i = t.middleware) == null || i.push(Fo(e)), (o = t.middleware) == null || o.push(gr({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const e = this.getArrowSize(), i = y('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${e}px`,
        height: `${e}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = i[0];
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: e } = t;
      t.afterRender = (...i) => {
        this.arrowEl && y(this.menu).find(".menu").each((o, r) => {
          y(r).find(".arrow-el").length === 0 && y(r).parent().hasClass("dropdown-menu") && y(r).append(this.arrowEl);
        }), e == null || e(...i);
      };
    }
    return t;
  }
};
me = new WeakMap(), ge = new WeakMap(), en = new WeakMap(), Ri = new WeakSet(), fc = function() {
  y(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, f(this, en)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), C(this, me, !0);
}, Ve.MENU_CLASS = "dropdown-menu", Ve.NAME = "Dropdown", Ve.DEFAULT = {
  ...lt.DEFAULT,
  trigger: "click"
};
let se = Ve;
const Xs = `${se.KEY}:options`;
y(document).on("click", function(s) {
  const n = y(s.target).closest(Ia).not(":disabled,.disabled");
  if (!n.length) {
    se.clear({ event: s });
    return;
  }
  const t = n.data(Xs), e = se.ensure(n, t);
  t || n.data(Xs, e.options), e.options.trigger === "click" && e.toggle();
}).on("mouseover", function(s) {
  const n = y(s.target).closest(Ia);
  if (!n.length)
    return;
  const t = n.data(Xs), e = se.ensure(n, t);
  t || n.data(Xs, e.options), e.isHover && e.show();
});
let Js = 0;
window.addEventListener("scroll", (s) => {
  Js && clearTimeout(Js), Js = window.setTimeout(() => {
    se.clear({ event: s }), Js = 0;
  }, 50);
}, !0);
var Zn, nn;
class ju extends W {
  constructor(t) {
    var e;
    super(t);
    v(this, Zn, void 0);
    v(this, nn, K());
    this.state = { placement: ((e = t.dropdown) == null ? void 0 : e.placement) || "", show: !1 };
  }
  get ref() {
    return f(this, nn);
  }
  get triggerElement() {
    return f(this, nn).current;
  }
  componentDidMount() {
    const { modifiers: t = [], ...e } = this.props.dropdown || {};
    t.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var r;
        const o = ((r = i.placement) == null ? void 0 : r.split("-").shift()) || "";
        this.setState({ placement: o });
      }
    }), C(this, Zn, se.ensure(this.triggerElement, {
      ...e,
      modifiers: t,
      onShow: () => {
        this.setState({ show: !0 });
      },
      onHide: () => {
        this.setState({ show: !0 });
      }
    }));
  }
  componentWillUnmount() {
    var t;
    (t = f(this, Zn)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: e, dropdown: i, ...o } = this.props;
    return {
      className: R("dropdown", t),
      children: typeof e == "function" ? e(this.state) : e,
      ...o,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: f(this, nn)
    };
  }
  render() {
    const { children: t, ...e } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...e, children: t });
  }
}
Zn = new WeakMap(), nn = new WeakMap();
class Vu extends ju {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: n, show: t } = this.state, e = this.beforeRender();
    let { caret: i = !0 } = e;
    if (i !== !1 && (t || i === !0)) {
      const r = (t ? n : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return e.caret = i, /* @__PURE__ */ m(tt, { ...e });
  }
}
function pc({
  key: s,
  type: n,
  btnType: t,
  ...e
}) {
  return /* @__PURE__ */ m(Vu, { type: t, ...e });
}
let mc = class extends W {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  handleItemClick(n, t, e, i) {
    e && e.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: n, index: t, event: i });
  }
  beforeRender() {
    var e;
    const n = { ...this.props }, t = (e = n.beforeRender) == null ? void 0 : e.call(this, n);
    return t && Object.assign(n, t), typeof n.items == "function" && (n.items = n.items.call(this)), n;
  }
  onRenderItem(n, t) {
    const { key: e = t, ...i } = n;
    return /* @__PURE__ */ m(tt, { ...i }, e);
  }
  renderItem(n, t, e) {
    const { itemRender: i, btnProps: o, onClickItem: r } = n, a = { key: e, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, e, t.onClick)), i) {
      const l = i.call(this, a, U);
      if (J(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, e);
  }
  render() {
    const n = this.beforeRender(), {
      className: t,
      items: e,
      size: i,
      type: o,
      btnProps: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: d,
      ...p
    } = n;
    return /* @__PURE__ */ m(
      "div",
      {
        className: R("btn-group", i ? `size-${i}` : "", t),
        ...p,
        children: [
          e && e.map(this.renderItem.bind(this, n)),
          a
        ]
      }
    );
  }
};
function Uu({
  key: s,
  type: n,
  btnType: t,
  ...e
}) {
  return /* @__PURE__ */ m(mc, { type: t, ...e });
}
var ne;
let ae = (ne = class extends Wo {
  beforeRender() {
    const { gap: n, btnProps: t, wrap: e, ...i } = super.beforeRender();
    return i.className = R(i.className, e ? "flex-wrap" : "", typeof n == "number" ? `gap-${n}` : ""), typeof n == "string" && (i.style ? i.style.gap = n : i.style = { gap: n }), i;
  }
  isBtnItem(n) {
    return n === "item" || n === "dropdown";
  }
  renderTypedItem(n, t, e) {
    const { type: i } = e, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...t,
      ...r,
      ...e,
      className: R(`${this.name}-${i}`, t.className, r.className, e.className),
      style: Object.assign({}, t.style, r.style, e.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ m(n, { ...a });
  }
}, ne.ItemComponents = {
  item: Nu,
  dropdown: pc,
  "btn-group": Uu
}, ne.ROOT_TAG = "nav", ne.NAME = "toolbar", ne.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, ne);
function qu({
  className: s,
  style: n,
  actions: t,
  heading: e,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  ...u
}) {
  let c;
  a === !0 ? c = /* @__PURE__ */ m(tt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : J(a) ? c = a : typeof a == "object" && (c = /* @__PURE__ */ m(tt, { ...a, onClick: l }));
  const d = J(t) ? t : t ? /* @__PURE__ */ m(ae, { ...t }) : null;
  return /* @__PURE__ */ m("div", { className: R("alert", s), style: n, ...u, children: [
    /* @__PURE__ */ m(et, { icon: h, className: "alert-icon" }),
    J(i) ? i : /* @__PURE__ */ m("div", { className: R("alert-content", o), children: [
      J(e) ? e : e && /* @__PURE__ */ m("div", { className: "alert-heading", children: e }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      e ? d : null
    ] }),
    e ? null : d,
    c,
    r
  ] });
}
function Yu(s) {
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
function Ku({
  margin: s,
  type: n,
  placement: t,
  animation: e,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ m(
    qu,
    {
      className: R("messager", o, n, e === !0 ? Yu(t) : e, i ? "in" : ""),
      ...a
    }
  );
}
var qt, ze;
const Li = class Li extends j {
  constructor() {
    super(...arguments);
    v(this, qt);
    this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), A(this, qt, ze).call(this, () => {
      this._show = !0, this.render(), A(this, qt, ze).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && A(this, qt, ze).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && A(this, qt, ze).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), A(this, qt, ze).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
qt = new WeakSet(), ze = function(t, e = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, e);
}, Li.NAME = "MessagerItem", Li.Component = Ku;
let wr = Li;
var ye, yt, Ai, gc, Ii, yc;
const Pn = class Pn extends dt {
  constructor() {
    super(...arguments);
    v(this, Ai);
    v(this, Ii);
    v(this, ye, void 0);
    v(this, yt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = f(this, yt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), A(this, Ai, gc).call(this).show();
  }
  hide() {
    var t;
    (t = f(this, yt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...i } = t, o = Pn.ensure(e || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
ye = new WeakMap(), yt = new WeakMap(), Ai = new WeakSet(), gc = function() {
  if (f(this, yt))
    f(this, yt).setOptions(this.options);
  else {
    const t = A(this, Ii, yc).call(this), e = new wr(t, this.options);
    e.on("hidden", () => {
      e.destroy(), t == null || t.remove(), C(this, ye, void 0), C(this, yt, void 0);
    }), C(this, yt, e);
  }
  return f(this, yt);
}, Ii = new WeakSet(), yc = function() {
  if (f(this, ye))
    return f(this, ye);
  const { placement: t = "top" } = this.options;
  let e = this.$element.find(`.messagers-${t}`);
  e.length || (e = y(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = e.find(`#messager-${this.gid}`);
  return i.length || (i = y(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), C(this, ye, i[0])), i[0];
}, Pn.NAME = "messager", Pn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Da = Pn;
var Qn;
let Gu = (Qn = class extends W {
  render(n) {
    const { percent: t = 50, size: e = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: u } = n, c = e / 2;
    let { circleWidth: d = 0.2 } = n;
    d < 1 && (d = e * d);
    const p = (e - d) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: e, height: e, children: [
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: p, "stroke-width": d, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: p, "stroke-width": d, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * p * 2, "stroke-dashoffset": Math.PI * p * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ m("text", { x: h ?? c, y: u ?? c + d / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${p}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, Qn.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, Qn);
const Di = class Di extends j {
};
Di.NAME = "ProgressCircle", Di.Component = Gu;
let Pa = Di;
var Rt;
class Xu {
  constructor(n = "") {
    v(this, Rt, void 0);
    typeof n == "object" ? C(this, Rt, n) : C(this, Rt, document.appendChild(document.createComment(n)));
  }
  on(n, t, e) {
    f(this, Rt).addEventListener(n, t, e);
  }
  once(n, t, e) {
    f(this, Rt).addEventListener(n, t, { once: !0, ...e });
  }
  off(n, t, e) {
    f(this, Rt).removeEventListener(n, t, e);
  }
  emit(n) {
    return f(this, Rt).dispatchEvent(n), n;
  }
}
Rt = new WeakMap();
const Oa = /* @__PURE__ */ new Set([
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
class bc extends Xu {
  on(n, t, e) {
    super.on(n, t, e);
  }
  off(n, t, e) {
    super.off(n, t, e);
  }
  once(n, t, e) {
    super.once(n, t, e);
  }
  emit(n, t) {
    return typeof n == "string" && (Oa.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), super.emit(bc.createEvent(n, t));
  }
  static createEvent(n, t) {
    return typeof n == "string" && (Oa.has(n) ? (n = new Event(n), Object.assign(n, { detail: t })) : n = new CustomEvent(n, { detail: t })), n;
  }
}
let wc = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((n, t) => (t &= 63, t < 36 ? n += t.toString(36) : t < 62 ? n += (t - 26).toString(36).toUpperCase() : t > 62 ? n += "-" : n += "_", n), "");
const nr = "```ZUI_STR\n";
var ts, be, sn, bt, on, rn, ni;
const ra = class ra {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(n, t = "local") {
    v(this, rn);
    v(this, ts, void 0);
    v(this, be, void 0);
    v(this, sn, void 0);
    v(this, bt, void 0);
    v(this, on, void 0);
    C(this, ts, t), C(this, sn, n ?? wc()), C(this, be, `ZUI_STORE:${f(this, sn)}`), C(this, bt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return f(this, ts);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (f(this, on) || C(this, on, new ra(f(this, sn), "session")), f(this, on));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(n, t) {
    const e = f(this, bt).getItem(A(this, rn, ni).call(this, n));
    if (typeof e == "string") {
      if (e.startsWith(nr))
        return e.substring(nr.length);
      try {
        return JSON.parse(e);
      } catch {
      }
    }
    return e ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(n, t) {
    if (t == null)
      return this.remove(n);
    f(this, bt).setItem(A(this, rn, ni).call(this, n), typeof t == "string" ? `${nr}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(n) {
    f(this, bt).removeItem(A(this, rn, ni).call(this, n));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(n) {
    for (let t = 0; t < f(this, bt).length; t++) {
      const e = f(this, bt).key(t);
      if (e != null && e.startsWith(f(this, be))) {
        const i = f(this, bt).getItem(e);
        typeof i == "string" && n(e.substring(f(this, be).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const n = {};
    return this.each((t, e) => {
      n[t] = e;
    }), n;
  }
};
ts = new WeakMap(), be = new WeakMap(), sn = new WeakMap(), bt = new WeakMap(), on = new WeakMap(), rn = new WeakSet(), ni = function(n) {
  return `${f(this, be)}:${n}`;
};
let wi = ra;
const An = new wi("DEFAULT");
function Ju(s, n = "local") {
  return new wi(s, n);
}
Object.assign(An, { create: Ju });
function Zu(s) {
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
function Qu(s) {
  const [n, t, e] = typeof s == "string" ? Zu(s) : s;
  return n * 0.299 + t * 0.587 + e * 0.114 > 186;
}
function Ha(s, n) {
  return Qu(s) ? (n == null ? void 0 : n.dark) ?? "#333333" : (n == null ? void 0 : n.light) ?? "#ffffff";
}
function Ba(s, n = 255) {
  return Math.min(Math.max(s, 0), n);
}
function td(s, n, t) {
  s = s % 360 / 360, n = Ba(n), t = Ba(t);
  const e = t <= 0.5 ? t * (n + 1) : t + n - t * n, i = t * 2 - e, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (e - i) * r * 6 : r * 2 < 1 ? e : r * 3 < 2 ? i + (e - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function ed(s) {
  let n = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let t = 0; t < s.length; ++t)
      n += (t + 1) * s.charCodeAt(t);
  return n;
}
function nd(s, n) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= n ? s : s.substring(s.length - n) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= n ? s : s.substring(0, n);
}
let vc = class extends W {
  render() {
    const {
      className: n,
      style: t,
      size: e = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: u = 2,
      src: c,
      hueDistance: d = 43,
      saturation: p = 0.4,
      lightness: g = 0.6,
      children: b,
      ...x
    } = this.props, w = ["avatar", n], _ = { ...t, background: r, color: a };
    let $ = 32;
    e && (typeof e == "number" ? (_.width = `${e}px`, _.height = `${e}px`, _.fontSize = `${Math.max(12, Math.round(e / 2))}px`, $ = e) : (w.push(`size-${e}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[e])), i ? w.push("circle") : o && (typeof o == "number" ? _.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let k;
    if (c)
      w.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const S = nd(l, u);
      if (w.push("has-text", `has-text-${S.length}`), r)
        !a && r && (_.color = Ha(r));
      else {
        const L = h ?? l, I = (typeof L == "number" ? L : ed(L)) * d % 360;
        if (_.background = `hsl(${I},${p * 100}%,${g * 100}%)`, !a) {
          const D = td(I, p, g);
          _.color = Ha(D);
        }
      }
      let N;
      $ && $ < 14 * S.length && (N = { transform: `scale(${$ / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": $, className: "avatar-text", style: N, children: S });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: R(w),
        style: _,
        ...x,
        children: [
          k,
          b
        ]
      }
    );
  }
};
const Pi = class Pi extends j {
};
Pi.NAME = "Avatar", Pi.Component = vc;
let Wa = Pi;
const Oi = class Oi extends j {
};
Oi.NAME = "BtnGroup", Oi.Component = mc;
let za = Oi;
const vr = Symbol("EVENT_PICK");
var an;
class na extends W {
  constructor(t) {
    super(t);
    v(this, an, void 0);
    this._handleClick = this._handleClick.bind(this), C(this, an, !!y(`#${t.id}`).length);
  }
  get hasInput() {
    return f(this, an);
  }
  _handleClick(t) {
    const { togglePop: e, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const a = y(t.target), l = o == null ? void 0 : o(t);
    if (!t.defaultPrevented) {
      if (typeof l == "boolean")
        r = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          e(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => e(r));
    }
  }
  _getClass(t) {
    const { state: e, className: i } = t, { open: o, disabled: r } = e;
    return R(
      "pick",
      i,
      o && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: e, style: i, attrs: o } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...o
    };
  }
  _renderTrigger(t) {
    const { children: e, state: i } = t;
    return e ?? i.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: i = "" }, id: o } = t;
    if (e)
      if (f(this, an))
        y(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: e, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    y(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === vr)
        return;
      const r = i.target.value;
      r !== e.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    y(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: i, name: o } = this.props;
    o && t.state.value !== i.value && y(`#${e}`).trigger("change", vr);
  }
  render(t) {
    return U(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
an = new WeakMap();
var we, wt, Yt;
class xc extends W {
  constructor(t) {
    super(t);
    v(this, we, void 0);
    v(this, wt, void 0);
    v(this, Yt, void 0);
    C(this, we, K()), this._handleDocClick = (e) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = y(e.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return y(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = f(this, we)) == null ? void 0 : t.current;
  }
  get container() {
    return f(this, Yt);
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, i = y(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), e(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: i } = t, { open: o } = i;
    return R(
      "pick-pop",
      e,
      o === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: e,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = t, h = y.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${e}`,
      className: this._getClass(t),
      style: h,
      ref: f(this, we),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!f(this, Yt)) {
      const e = y(t.container || "body");
      let i = e.find(".pick-container");
      i.length || (i = y("<div>").addClass("pick-container").appendTo(e)), C(this, Yt, i[0]);
    }
    return f(this, Yt);
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: e, props: i } = this, { state: o } = i;
    if (!t || !e || !o.open) {
      f(this, wt) && (f(this, wt).call(this), C(this, wt, void 0));
      return;
    }
    f(this, wt) || C(this, wt, ea(e, t, () => {
      const { placement: r, width: a } = i;
      Uo(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? zo() : null, gi(), Fo(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var u, c;
        y(t).css({
          left: l,
          top: h,
          width: a === "100%" ? y(e).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), a === "100%" && y(t).css({ width: y(t).width() });
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), y(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, i;
    y(document).off("click", this._handleDocClick);
    const t = f(this, wt);
    t && (t(), C(this, wt, void 0)), C(this, Yt, void 0), C(this, we, void 0), y(`pick-pop-${this.props.id}`).remove(), (i = (e = this.props).beforeDestroy) == null || i.call(e);
  }
  render(t) {
    return _u(this._render(t), this._getContainer(t));
  }
}
we = new WeakMap(), wt = new WeakMap(), Yt = new WeakMap();
var es, it, ve, Le;
let Wt = (Le = class extends W {
  constructor(t) {
    super(t);
    v(this, es, void 0);
    v(this, it, void 0);
    v(this, ve, void 0);
    C(this, it, 0), C(this, ve, K()), this.changeState = (e, i) => new Promise((o) => {
      this.setState(e, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (e, i) => {
      this.props.disabled && (e = !1);
      const { state: o } = this;
      if (typeof e == "boolean" && e === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      f(this, it) && (clearTimeout(f(this, it)), C(this, it, 0));
      let r = await this.changeState((l) => (e = e ?? !l.open, {
        open: e ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await ci(200, (l) => {
        C(this, it, l);
      }), C(this, it, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await ci(50, (l) => {
        C(this, it, l);
      }), C(this, it, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, C(this, es, t.id ?? `_pick${y.guid++}`);
  }
  get id() {
    return f(this, es);
  }
  get pop() {
    return f(this, ve).current;
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
    const { onChange: i } = this.props;
    i && i(t, e);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: i } = this.state, { open: o } = e;
    if (i === o)
      return;
    const { onPopShow: r, onPopHide: a } = this.props;
    o && r ? r() : !o && a && a();
  }
  componentDidUpdate(t, e) {
    const { open: i, value: o } = this.state, { open: r, value: a } = e;
    if (!!i != !!r) {
      const { onPopShown: l, onPopHidden: h } = this.props;
      i && l ? l() : !i && h && h();
    }
    o !== a && this._handleChange(o, a), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), f(this, it) && clearTimeout(f(this, it));
    const t = f(this, ve).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: i } = e, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ m(a, { ref: f(this, ve), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ m(Mn, { children: [
      /* @__PURE__ */ m(o, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
}, es = new WeakMap(), it = new WeakMap(), ve = new WeakMap(), Le.Trigger = na, Le.Pop = xc, Le.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, Le);
var ns;
let sd = (ns = class extends Wt {
  constructor(n) {
    super(n), this.state.value === void 0 && n.required && (this.state.value = this.getColors()[0]);
  }
  getColors() {
    const { colors: n } = this.props;
    return typeof n == "string" ? n.split(",") : n || [];
  }
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: n, syncBorder: t, syncColor: e, syncValue: i } = this.props, o = this.state.value || "";
    if (n && y(n).css("backgroundColor", o), t && y(t).css("borderColor", o), e && y(e).css("color", o), i) {
      const r = y(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(n, t) {
    this.props.disabled || (super._handleChange(n, t), this.syncColor());
  }
  _renderTrigger(n, t) {
    const { icon: e } = n, { value: i } = t;
    return [
      e ? /* @__PURE__ */ m(et, { icon: e }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(n, t) {
    const e = super._getTriggerProps(n, t);
    return e.style = y.extend({
      color: t.value
    }, e.style), e.className = R("color-picker", e.className, { disabled: n.disabled }), e;
  }
  _renderPop(n, t) {
    const { closeBtn: e, heading: i } = n, o = this.getColors(), { value: r } = t;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      e ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ m(et, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(et, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, ns.defaultProps = {
  ...Wt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, ns);
const Hi = class Hi extends j {
};
Hi.NAME = "ColorPicker", Hi.Component = sd;
let Fa = Hi;
const Wn = 24 * 60 * 60 * 1e3, G = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), id = (s, n, t = "day") => {
  if (typeof n == "string") {
    const e = Number.parseInt(n, 10);
    t = n.replace(e.toString(), ""), n = e;
  }
  return s = new Date(G(s).getTime()), t === "month" ? s.setMonth(s.getMonth() + n) : t === "year" ? s.setFullYear(s.getFullYear() + n) : t === "week" ? s.setDate(s.getDate() + n * 7) : t === "hour" ? s.setHours(s.getHours() + n) : t === "minute" ? s.setMinutes(s.getMinutes() + n) : t === "second" ? s.setSeconds(s.getSeconds() + n) : s.setDate(s.getDate() + n), s;
}, Us = (s, n = /* @__PURE__ */ new Date()) => G(s).toDateString() === G(n).toDateString(), xr = (s, n = /* @__PURE__ */ new Date()) => G(s).getFullYear() === G(n).getFullYear(), Cc = (s, n = /* @__PURE__ */ new Date()) => (s = G(s), n = G(n), s.getFullYear() === n.getFullYear() && s.getMonth() === n.getMonth()), Of = (s, n = /* @__PURE__ */ new Date()) => {
  s = G(s), n = G(n);
  const t = 1e3 * 60 * 60 * 24, e = Math.floor(s.getTime() / t), i = Math.floor(n.getTime() / t);
  return Math.floor((e + 4) / 7) === Math.floor((i + 4) / 7);
}, Hf = (s, n) => Us(G(n), s), Bf = (s, n) => Us(G(n).getTime() - Wn, s), Wf = (s, n) => Us(G(n).getTime() + Wn, s), pt = (s, n = "yyyy-MM-dd hh:mm", t = "") => {
  if (s = G(s), Number.isNaN(s.getDay()))
    return t;
  const e = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(n) && (n.includes("[yyyy-]") && (n = n.replace("[yyyy-]", xr(s) ? "" : "yyyy-")), n = n.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((i) => {
    if (new RegExp(`(${i})`).test(n)) {
      const o = `${e[i]}`;
      n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), n;
}, zf = (s, n, t) => {
  const e = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = pt(s, xr(s) ? e.month : e.full);
  if (Us(s, n))
    return i;
  const o = pt(n, xr(s, n) ? Cc(s, n) ? e.day : e.month : e.full);
  return e.str.replace("{0}", i).replace("{1}", o);
};
var ss, is;
class od extends W {
  constructor() {
    super(...arguments);
    v(this, ss, K());
    v(this, is, (t, e) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(e.item.key || ""));
    });
  }
  componentDidMount() {
    y(f(this, ss).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: e = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += e)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: f(this, ss), children: [
      /* @__PURE__ */ m(
        De,
        {
          className: l,
          items: r,
          onClickItem: f(this, is).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        De,
        {
          className: l,
          items: a,
          onClickItem: f(this, is).bind(this, "minute")
        }
      )
    ] });
  }
}
ss = new WeakMap(), is = new WeakMap();
const ja = (s) => {
  if (!s)
    return;
  const n = G(`1999-01-01 ${s}`);
  if (!Number.isNaN(n.getDay()))
    return n;
};
var Bi, Wi, zi, Fi, os;
let rd = (os = class extends Wt {
  constructor(t) {
    super(t);
    v(this, Bi, () => {
      this.toggle(!0);
    });
    v(this, Wi, (t) => {
      this.setTime(t.target.value);
    });
    v(this, zi, (t, e) => {
      this.setTime({ [t]: e });
    });
    v(this, Fi, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = pt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [l, h] = (this.state.value || "00:00").split(":"), { hour: u = +l, minute: c = +h } = t;
      e = `${u}:${c}`;
    }
    const i = ja(e), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? pt(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(e);
    });
  }
  getTime() {
    const t = ja(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: i, name: o, icon: r, required: a, disabled: l, readonly: h } = t, { value: u = "", open: c } = e, d = `time-picker-${this.id}`;
    let p;
    return c && !a && u.length ? p = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: f(this, Fi), children: /* @__PURE__ */ m("span", { className: "close" }) }) : r && (r === !0 ? p = /* @__PURE__ */ m("i", { class: "i-time" }) : p = /* @__PURE__ */ m(et, { icon: r })), [
      /* @__PURE__ */ m("input", { name: o, id: d, type: "text", class: "form-control", placeholder: i, value: u, disabled: l, readOnly: h, onFocus: f(this, Bi), onChange: f(this, Wi) }, "input"),
      p ? /* @__PURE__ */ m("label", { for: d, class: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const i = super._getTriggerProps(t, e);
    return {
      ...i,
      className: R(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [e, i] = this.getTime() || [];
    return /* @__PURE__ */ m(od, { hour: e, minute: i, minuteStep: t.minuteStep, onChange: f(this, zi) });
  }
}, Bi = new WeakMap(), Wi = new WeakMap(), zi = new WeakMap(), Fi = new WeakMap(), os.defaultProps = {
  ...Wt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, os);
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
const ad = (s, n, t = 0) => {
  const e = new Date(s, n - 1, 1), i = new Date(s, n, 0), o = e.getDay(), r = e.getTime() - (7 + o - t) % 7 * Wn;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: e.getTime()
  };
}, Va = (s, n) => new Set((Array.isArray(s) ? s : [s]).map((t) => pt(t, n)));
var ji;
class ld extends W {
  constructor() {
    super(...arguments);
    v(this, ji, (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const i = y(t.target).closest(".mini-calendar-day").dataset("date");
      i && e(i);
    });
  }
  render(t) {
    const e = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = Z.getLang("weekNames"),
      monthNames: r = Z.getLang("monthNames"),
      year: a = e.getFullYear(),
      month: l = e.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], d = "btn ghost square rounded-full";
    for (let N = 0; N < 7; N++) {
      const L = (i + N) % 7;
      c.push(/* @__PURE__ */ m("div", { className: R("col mini-calendar-day", { "is-weekend": L === 0 || L === 6 }), children: /* @__PURE__ */ m("div", { children: o ? o[L] : L }) }, N));
    }
    const { startTime: p, days: g, firstDay: b } = ad(a, l, i), x = b + g * Wn;
    let w = p;
    const _ = [], $ = "yyyy-MM-dd", k = Va(h, $), S = Va(u, $);
    for (; w <= x; ) {
      const N = [];
      for (let L = 0; L < 7; L++) {
        const I = new Date(w), D = I.getDate(), O = pt(I, $), P = I.getDay(), M = Cc(I, b), E = R("col mini-calendar-day", {
          active: k.has(O),
          selected: S.has(O),
          "is-first": D === 1,
          "is-in-month": M,
          "is-out-month": !M,
          "is-today": Us(I, e),
          "is-weekend": P === 0 || P === 6
        });
        N.push(
          /* @__PURE__ */ m("div", { className: E, "data-date": O, children: /* @__PURE__ */ m("a", { className: d, onClick: f(this, ji), children: D === 1 && r ? r[I.getMonth()] : I.getDate() }) }, O)
        ), w += Wn;
      }
      _.push(/* @__PURE__ */ m("div", { className: "row", children: N }, w));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: c }),
      _
    ] });
  }
}
ji = new WeakMap();
var rs, Vi;
class Ua extends W {
  constructor() {
    super(...arguments);
    v(this, rs, K());
    v(this, Vi, (t) => {
      const { onChange: e } = this.props;
      if (!e)
        return;
      const o = y(t.target).closest("[data-value]").dataset("value");
      o && (e(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    y(f(this, rs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: e, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ m(tt, { type: "ghost", "data-value": h, active: h === r, className: R(l === h ? "is-current" : ""), onClick: f(this, Vi), children: h }, h));
    return /* @__PURE__ */ m("div", { className: e, ref: f(this, rs), children: a });
  }
}
rs = new WeakMap(), Vi = new WeakMap();
var ln, as, ls, cs, hs, us, Ui, _c, qi, $c;
class cd extends W {
  constructor(t) {
    super(t);
    v(this, Ui);
    v(this, qi);
    v(this, ln, void 0);
    v(this, as, void 0);
    v(this, ls, void 0);
    v(this, cs, void 0);
    v(this, hs, void 0);
    v(this, us, void 0);
    C(this, ln, K()), C(this, as, (r) => {
      const a = y(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), C(this, ls, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), C(this, cs, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), C(this, hs, (r) => {
      this.setState({ year: r, select: "day" });
    }), C(this, us, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = id(h, r.substring(5).replace("+", ""))), r = pt(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, r);
    };
    const { date: e } = t, i = /* @__PURE__ */ new Date(), o = e ? new Date(e) : void 0;
    this.state = { select: "day", year: o ? o.getFullYear() : i.getFullYear(), month: o ? o.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(t) {
    this.setState((e) => e.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    y(f(this, ln).current).find(".active").scrollIntoView();
  }
  render(t, e) {
    const {
      date: i,
      yearText: o = Z.getLang("yearFormat") || "{0}",
      weekNames: r = Z.getLang("weekNames"),
      monthNames: a = Z.getLang("monthNames"),
      weekStart: l
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: d
    } = e, p = d === "day", g = G(t.minDate || "1970-1-1"), b = G(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: f(this, ln), onClick: f(this, as), children: [
      A(this, Ui, _c).call(this, t),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(tt, { type: d === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Y(o, u) }),
          /* @__PURE__ */ m(tt, { type: d === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: f(this, ls), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: f(this, cs), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ m(
          ld,
          {
            weekStart: l,
            weekNames: r,
            monthNames: a,
            year: u,
            month: c,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        d === "year" ? /* @__PURE__ */ m(
          Ua,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: b.getFullYear(),
            onChange: f(this, hs)
          }
        ) : d === "month" ? /* @__PURE__ */ m(
          Ua,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: f(this, us)
          }
        ) : null,
        p ? A(this, qi, $c).call(this, t) : null
      ] })
    ] });
  }
}
ln = new WeakMap(), as = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), hs = new WeakMap(), us = new WeakMap(), Ui = new WeakSet(), _c = function(t) {
  let { menu: e } = t;
  return e ? (Array.isArray(e) && (e = { items: e }), /* @__PURE__ */ m(De, { ...e })) : null;
}, qi = new WeakSet(), $c = function(t) {
  let { actions: e } = t;
  const { todayText: i, clearText: o } = t;
  return e || (e = [{ text: i, "data-set-date": pt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(e) && (e = { items: e }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(ae, { btnProps: { className: "ghost text-primary" }, ...e }),
    o ? /* @__PURE__ */ m(tt, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var ds, fs, ps, ms;
let hd = (ms = class extends Wt {
  constructor(t) {
    super(t);
    v(this, ds, void 0);
    v(this, fs, void 0);
    v(this, ps, void 0);
    C(this, ds, () => {
      this.toggle(!0);
    }), C(this, fs, (i) => {
      this.setDate(i.target.value);
    }), C(this, ps, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = G(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : pt(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = pt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = e, c = `date-picker-${this.id}`;
    let d;
    return u && !r && h.length ? d = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: f(this, ps), children: /* @__PURE__ */ m("span", { className: "close" }) }) : o && (o === !0 ? d = /* @__PURE__ */ m("i", { class: "i-calendar" }) : d = /* @__PURE__ */ m(et, { icon: o })), [
      /* @__PURE__ */ m("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: f(this, ds), onChange: f(this, fs) }, "input"),
      d ? /* @__PURE__ */ m("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const i = super._getTriggerProps(t, e);
    return {
      ...i,
      className: R(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const i = super._getPopProps(t, e);
    return {
      ...i,
      className: R(i.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = Z.getLang("today"), clearText: h, menu: u, actions: c, minDate: d, maxDate: p, required: g } = t;
    return /* @__PURE__ */ m(
      cd,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: g ? "" : h,
        menu: u,
        actions: c,
        minDate: d,
        maxDate: p
      }
    );
  }
}, ds = new WeakMap(), fs = new WeakMap(), ps = new WeakMap(), ms.defaultProps = {
  ...Wt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, ms);
const Yi = class Yi extends j {
};
Yi.NAME = "TimePicker", Yi.Component = rd;
let qa = Yi;
const Ki = class Ki extends j {
};
Ki.NAME = "DatePicker", Ki.Component = hd;
let Ya = Ki;
const sr = "show", Ka = "in", ud = '[data-dismiss="modal"]';
var xe, Kt, cn, Gi, hn, si;
const mt = class mt extends dt {
  constructor() {
    super(...arguments);
    v(this, hn);
    v(this, xe, 0);
    v(this, Kt, void 0);
    v(this, cn, void 0);
    v(this, Gi, (t) => {
      const e = t.target, i = e.closest(".modal");
      !i || i !== this.modalElement || (e.closest(ud) || this.options.backdrop === !0 && e === i) && (t.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(sr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return f(this, Kt);
  }
  _observeResize() {
    var t;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (t = f(this, Kt)) == null || t.disconnect();
      const { dialog: e } = this;
      if (e) {
        const i = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const o = e.clientWidth, r = e.clientHeight, [a, l] = f(this, cn) || [];
          (a !== o || l !== r) && (C(this, cn, [o, r]), this.layout());
        });
        i.observe(e), C(this, Kt, i);
      }
    }
  }
  afterInit() {
    this.on("click", f(this, Gi)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = f(this, Kt)) == null || t.disconnect(), C(this, Kt, void 0);
  }
  show(t) {
    const { modalElement: e } = this;
    if (this.shown)
      return y(e).css("z-index", `${mt.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: i, backdrop: o, className: r, style: a } = this.options;
    return y(e).setClass({
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, sr, r).css({
      zIndex: `${mt.zIndex++}`,
      ...a
    }), this.layout(), this.emit("show"), A(this, hn, si).call(this, () => {
      y(e).addClass(Ka), A(this, hn, si).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (y(this.modalElement).removeClass(Ka), this.emit("hide"), A(this, hn, si).call(this, () => {
      y(this.modalElement).removeClass(sr), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    const o = y(i);
    if (e = e ?? this.options.size, e) {
      o.removeAttr("data-size");
      const h = { width: "", height: "" };
      typeof e == "object" ? (h.width = e.width, h.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? o.attr("data-size", e) : e && (h.width = e), o.css(h);
    }
    t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, a = i.clientHeight;
    C(this, cn, [r, a]), typeof t == "function" && (t = t({ width: r, height: a }));
    const l = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (l.alignSelf = "flex-start", l.top = t) : typeof t == "object" && t ? (l.alignSelf = "flex-start", Object.assign(l, t)) : t === "fit" ? (l.alignSelf = "flex-start", l.top = `${Math.max(0, Math.floor((window.innerHeight - a) / 3))}px`) : t === "bottom" ? l.alignSelf = "flex-end" : t === "top" ? l.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (l.alignSelf = "flex-start", l.top = t), o.css(l), y(this.modalElement).css("justifyContent", l.left ? "flex-start" : "center");
  }
  static hide(t) {
    var e;
    (e = mt.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = mt.query(t)) == null || e.show();
  }
};
xe = new WeakMap(), Kt = new WeakMap(), cn = new WeakMap(), Gi = new WeakMap(), hn = new WeakSet(), si = function(t, e) {
  f(this, xe) && (clearTimeout(f(this, xe)), C(this, xe, 0)), t && (this.options.animation ? C(this, xe, window.setTimeout(t, e ?? this.options.transTime)) : t());
}, mt.NAME = "Modal", mt.MULTI_INSTANCE = !0, mt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, mt.zIndex = 1500;
let Oe = mt;
y(window).on("resize.modal.zui", () => {
  Oe.getAll().forEach((s) => {
    const n = s;
    n.shown && n.options.responsive && n.layout();
  });
});
y(document).on("to-hide.modal.zui", (s, n) => {
  Oe.hide(n == null ? void 0 : n.target);
});
const aa = class aa extends W {
  componentDidMount() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n;
    (n = this.props.afterRender) == null || n.call(this, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this);
  }
  renderHeader() {
    const {
      header: n,
      headerClass: t,
      title: e
    } = this.props;
    return J(n) ? n : n === !1 || !e ? null : /* @__PURE__ */ m("div", { className: R("modal-header", t), children: /* @__PURE__ */ m("div", { className: "modal-title", children: e }) });
  }
  renderActions() {
    const {
      actions: n,
      closeBtn: t
    } = this.props;
    return !t && !n ? null : J(n) ? n : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      n ? /* @__PURE__ */ m(ae, { ...n }) : null,
      t ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: n,
      bodyClass: t
    } = this.props;
    return n ? J(n) ? n : /* @__PURE__ */ m("div", { className: R("modal-body", t), children: n }) : null;
  }
  renderFooter() {
    const {
      footer: n,
      footerClass: t,
      footerActions: e
    } = this.props;
    return J(n) ? n : n === !1 || !e ? null : /* @__PURE__ */ m("div", { className: R("modal-footer", t), children: e ? /* @__PURE__ */ m(ae, { ...e }) : null });
  }
  render() {
    const {
      className: n,
      style: t,
      contentClass: e,
      children: i
    } = this.props;
    return /* @__PURE__ */ m("div", { className: R("modal-dialog", n), style: t, children: /* @__PURE__ */ m("div", { className: R("modal-content", e), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
aa.defaultProps = { closeBtn: !0 };
let Cr = aa;
var un, dn, fn;
class dd extends W {
  constructor() {
    super(...arguments);
    v(this, un, void 0);
    v(this, dn, void 0);
    v(this, fn, void 0);
    C(this, un, K()), this.state = {}, C(this, fn, () => {
      var i, o;
      const t = (o = (i = f(this, un).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let e = f(this, dn);
      e == null || e.disconnect(), e = new ResizeObserver(() => {
        const r = t.body, a = t.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), e.observe(t.body), e.observe(t.documentElement), C(this, dn, e);
    });
  }
  componentDidMount() {
    f(this, fn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = f(this, dn)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: f(this, un),
        onLoad: f(this, fn)
      }
    );
  }
}
un = new WeakMap(), dn = new WeakMap(), fn = new WeakMap();
function fd(s, n) {
  const { custom: t, title: e, content: i } = n;
  return {
    body: i,
    title: e,
    ...typeof t == "function" ? t() : t
  };
}
async function pd(s, n) {
  const { dataType: t = "html", url: e, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = n, u = await (await fetch(e, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (t !== "html")
    try {
      const c = JSON.parse(u);
      return {
        title: r,
        ...o,
        ...c
      };
    } catch {
    }
  return a !== !1 && t === "html" ? [u] : {
    title: r,
    ...o,
    body: t === "html" ? /* @__PURE__ */ m(Ws, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function md(s, n) {
  const { url: t, custom: e, title: i } = n;
  return {
    title: i,
    ...e,
    body: /* @__PURE__ */ m(dd, { url: t })
  };
}
const gd = {
  custom: fd,
  ajax: pd,
  iframe: md
}, ir = "loading";
var vt, pn, xt, gs, $r, ys, Sr;
const fe = class fe extends Oe {
  constructor() {
    super(...arguments);
    v(this, gs);
    v(this, ys);
    v(this, vt, void 0);
    v(this, pn, void 0);
    v(this, xt, void 0);
  }
  get id() {
    return f(this, pn);
  }
  get loading() {
    var t;
    return (t = f(this, vt)) == null ? void 0 : t.classList.contains(ir);
  }
  get shown() {
    var t;
    return !!((t = f(this, vt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = f(this, vt);
    if (!t) {
      const { options: e } = this;
      let i = f(this, pn);
      i || (i = e.id || `modal-${y.guid++}`, C(this, pn, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = y("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(o)[0];
      }
      C(this, vt, t);
    }
    return t;
  }
  get $emitter() {
    const t = f(this, vt);
    return t ? y(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = f(this, vt);
    t && (y(t).removeData(this.constructor.KEY).remove(), C(this, vt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    f(this, xt) && clearTimeout(f(this, xt));
    const { modalElement: t, options: e } = this, i = y(t), { type: o, loadTimeout: r, loadingText: a = null } = e, l = gd[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(ir), r && C(this, xt, window.setTimeout(() => {
      C(this, xt, 0), A(this, ys, Sr).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, e);
    return h === !1 ? await A(this, ys, Sr).call(this, this.options.failedTip) : h && typeof h == "object" && await A(this, gs, $r).call(this, h), f(this, xt) && (clearTimeout(f(this, xt)), C(this, xt, 0)), this.layout(), await ci(100), i.removeClass(ir), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = fe.ensure(i, r), l = `.zui.Modal.open${y.guid++}`;
      a.on(`hidden${l}`, () => {
        a.off(l), e(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: i, icon: o, iconClass: r = "icon-lg muted", actions: a = "confirm", onClickAction: l, custom: h, key: u = "__alert", ...c } = t, d = (typeof h == "function" ? h() : h) || {};
    let p = typeof i == "object" && i.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ m("div", { children: i });
    o ? p = /* @__PURE__ */ m("div", { className: R("modal-body row gap-4 items-center", d.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${o} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ m("div", { className: R("modal-body", d.bodyClass), children: p });
    const g = [];
    (Array.isArray(a) ? a : [a]).forEach((w) => {
      w = {
        ...typeof w == "string" ? { key: w } : w
      }, typeof w.key == "string" && (w.text || (w.text = Z.getLang(w.key, w.key)), w.btnType || (w.btnType = `btn-wide ${w.key === "confirm" ? "primary" : "btn-default"}`)), w && g.push(w);
    }, []);
    let b;
    const x = g.length ? {
      gap: 4,
      items: g,
      onClickItem: ({ item: w, event: _ }) => {
        const $ = fe.query(_.target, u);
        b = w.key, (l == null ? void 0 : l(w, $)) !== !1 && $ && $.hide();
      }
    } : void 0;
    return await fe.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      backdrop: "static",
      custom: { footerActions: x, ...d },
      ...c
    }), b;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: i, ...o } = t;
    return await fe.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), e == null || e(a, l);
      },
      ...o
    }) === "confirm";
  }
};
vt = new WeakMap(), pn = new WeakMap(), xt = new WeakMap(), gs = new WeakSet(), $r = function(t) {
  return new Promise((e) => {
    if (Array.isArray(t))
      return y(this.modalElement).html(t[0]), this.layout(), this._observeResize(), e();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), e();
      },
      ...o
    }, Hn(
      /* @__PURE__ */ m(Cr, { ...t }),
      this.modalElement
    );
  });
}, ys = new WeakSet(), Sr = function(t) {
  if (t)
    return A(this, gs, $r).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
}, fe.DEFAULT = {
  ...Oe.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let _r = fe;
const yd = '[data-toggle="modal"]';
var Gt, Xi, Sc, Ji, kc, Zi, Ec;
const la = class la extends dt {
  constructor() {
    super(...arguments);
    v(this, Xi);
    v(this, Ji);
    v(this, Zi);
    v(this, Gt, void 0);
  }
  get modal() {
    return f(this, Gt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = A(this, Ji, kc).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = f(this, Gt)) == null ? void 0 : t.hide();
  }
};
Gt = new WeakMap(), Xi = new WeakSet(), Sc = function() {
  const {
    container: t,
    ...e
  } = this.options, i = e, o = this.$element.attr("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), !i.key && i.id && (i.key = i.id), i;
}, Ji = new WeakSet(), kc = function() {
  const t = A(this, Xi, Sc).call(this);
  let e = f(this, Gt);
  if (e)
    return e.setOptions(t), e;
  if (t.type === "static") {
    const i = A(this, Zi, Ec).call(this);
    if (!i)
      return;
    e = Oe.ensure(i, t);
  } else
    e = _r.ensure(this.container, t);
  return C(this, Gt, e), e.on("destroyed", () => {
    C(this, Gt, void 0);
  }), e;
}, Zi = new WeakSet(), Ec = function() {
  let t = this.options.target;
  if (!t) {
    const { $element: e } = this;
    if (e.is("a")) {
      const i = e.attr("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, la.NAME = "ModalTrigger";
let kr = la;
y(document).on("click.modal.zui", (s) => {
  var e;
  const n = s.target, t = (e = n.closest) == null ? void 0 : e.call(n, yd);
  if (t) {
    const i = kr.ensure(t);
    i && (i.show(), s.preventDefault());
  }
});
var bs;
let bd = (bs = class extends Wo {
  beforeRender() {
    const n = super.beforeRender();
    return n.className = R(n.className, n.type ? `nav-${n.type}` : "", {
      "nav-stacked": n.stacked
    }), n;
  }
}, bs.NAME = "nav", bs);
const Qi = class Qi extends j {
};
Qi.NAME = "Nav", Qi.Component = bd;
let Ga = Qi;
function zn(s, n) {
  const t = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof n == "string" && (n === "first" ? n = 1 : n === "last" ? n = t : n === "prev" ? n = s.page - 1 : n === "next" ? n = s.page + 1 : n === "current" ? n = s.page : n = Number.parseInt(n, 10)), n = n !== void 0 ? Math.max(1, Math.min(n < 0 ? t + n : n, t)) : s.page, {
    ...s,
    pageTotal: t,
    page: n
  };
}
function wd({
  key: s,
  type: n,
  btnType: t,
  page: e,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = zn(o, e);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Y(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : Y(r, l)), a.disabled === void 0 && (a.disabled = e !== void 0 && l.page === o.page), /* @__PURE__ */ m(tt, { type: t, ...a });
}
function vd({
  key: s,
  type: n,
  page: t,
  text: e = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = zn(i, t);
  return e = typeof e == "function" ? e(a) : Y(e, a), /* @__PURE__ */ m(nc, { ...r, children: [
    o,
    e
  ] });
}
function xd({
  key: s,
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(tt, { type: t, ...l })), u = (d, p) => {
    const g = [];
    for (let b = d; b <= p; b++) {
      l.text = b, delete l.icon, l.disabled = !1;
      const x = zn(i, b);
      r && (l.url = typeof r == "function" ? r(x) : Y(r, x)), g.push(/* @__PURE__ */ m(tt, { type: t, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= e ? c = [...c, ...u(2, i.pageTotal)] : i.page < e - 2 ? c = [...c, ...u(2, e - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - e + 3 ? c = [...c, h(), ...u(i.pageTotal - e + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((e - 4) / 2), i.page + Math.floor((e - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function Cd({
  type: s,
  pagerInfo: n,
  linkCreator: t,
  items: e = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? e.map((h) => {
    const u = { ...n, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === n.recPerPage,
      url: typeof t == "function" ? t(u) : Y(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(n) : Y(a, n), i.menu = { ...i.menu, className: R((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(pc, { type: "dropdown", dropdown: i, ...r });
}
function _d({
  key: s,
  page: n,
  type: t,
  btnType: e,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const u = { ...h };
  let c;
  const d = (b) => {
    var x;
    c = Number((x = b.target) == null ? void 0 : x.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, p = (b) => {
    if (!(b != null && b.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const x = zn(i, c);
    a && !a({ info: x, event: b }) || (b.target.href = u.url = typeof l == "function" ? l(x) : Y(l, x));
  }, g = zn(i, n || 0);
  return u.url = typeof l == "function" ? l(g) : Y(l, g), /* @__PURE__ */ m("div", { className: R("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ m(tt, { type: e, ...u, onClick: p })
  ] });
}
var Ae;
let $d = (Ae = class extends ae {
  get pagerInfo() {
    const { page: n = 1, recTotal: t = 0, recPerPage: e = 10 } = this.props;
    return { page: n, recTotal: t, recPerPage: e, pageTotal: e ? Math.ceil(t / e) : 0 };
  }
  isBtnItem(n) {
    return n === "link" || n === "nav" || n === "size-menu" || n === "goto" || super.isBtnItem(n);
  }
  getItemRenderProps(n, t, e) {
    const i = super.getItemRenderProps(n, t, e), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: n.linkCreator }), i;
  }
}, Ae.NAME = "pager", Ae.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, Ae.ItemComponents = {
  ...ae.ItemComponents,
  link: wd,
  info: vd,
  nav: xd,
  "size-menu": Cd,
  goto: _d
}, Ae);
const to = class to extends j {
};
to.NAME = "Pager", to.Component = $d;
let Xa = to;
const eo = class eo extends j {
};
eo.NAME = "Pick", eo.Component = Wt;
let Ja = eo;
var mn, ws, vs, no;
class Tc extends W {
  constructor(t) {
    super(t);
    v(this, mn, K());
    v(this, ws, K());
    v(this, vs, (t) => {
      var i, o;
      const e = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, e), this.setState({ search: e }), t.stopPropagation();
    });
    v(this, no, (t) => {
      var e, i;
      t.stopPropagation(), (i = (e = this.props).onClear) == null || i.call(e), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = f(this, mn).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = f(this, ws), { current: i } = f(this, mn);
      if (e && i) {
        const o = y(i).parent();
        o.width(Math.ceil(Math.min(e.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, e) {
    const { placeholder: i, inline: o } = t, { search: r } = e, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: f(this, ws), children: r }) : a ? l = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: f(this, no), children: /* @__PURE__ */ m("span", { className: "close" }) }) : l = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: f(this, vs),
          onInput: f(this, vs),
          ref: f(this, mn)
        }
      ),
      l
    ] });
  }
}
mn = new WeakMap(), ws = new WeakMap(), vs = new WeakMap(), no = new WeakMap();
var gn, xs, Cs, _s;
class Sd extends na {
  constructor() {
    super(...arguments);
    v(this, gn, void 0);
    v(this, xs, void 0);
    v(this, Cs, void 0);
    v(this, _s, void 0);
    C(this, gn, K()), C(this, xs, (t) => {
      const { onDeselect: e, state: { selections: i } } = this.props, o = y(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && i.length && typeof o == "string" && e(o), t.stopPropagation();
    }), C(this, Cs, (t) => {
      this.props.changeState({ search: t });
    }), C(this, _s, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ m("span", { className: "text", children: t.text }),
      this.props.disabled ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: f(this, xs), "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = f(this, gn).current) == null || e.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: i } = t;
    return /* @__PURE__ */ m(
      Tc,
      {
        inline: !0,
        ref: f(this, gn),
        defaultSearch: e,
        onSearch: f(this, Cs),
        onClear: f(this, _s),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !e.length ? /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        l ? this._renderSearch(t) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t, l = r.length ? r : [a];
    if (e)
      if (this.hasInput)
        y(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: e, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ m("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: i } = this.props;
    y(`#${t}`).val(e.length ? e : [i]);
  }
  componentDidUpdate(t) {
    const { id: e, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && y(`#${e}`).val(r.length ? r : [a]).trigger("change", vr);
  }
}
gn = new WeakMap(), xs = new WeakMap(), Cs = new WeakMap(), _s = new WeakMap();
var $s, so, io, oo, ro, Nc;
class kd extends na {
  constructor() {
    super(...arguments);
    v(this, ro);
    v(this, $s, K());
    v(this, so, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    v(this, io, (t) => {
      this.props.changeState({ search: t });
    });
    v(this, oo, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = f(this, $s).current) == null || e.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ m(
      Tc,
      {
        ref: f(this, $s),
        defaultSearch: e,
        onSearch: f(this, io),
        onClear: f(this, oo),
        placeholder: A(this, ro, Nc).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let d;
    c ? d = this._renderSearch(t) : u ? d = /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text }, "main") : d = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "main");
    const p = h && !c ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: f(this, so), children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      d,
      e,
      p,
      c ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
$s = new WeakMap(), so = new WeakMap(), io = new WeakMap(), oo = new WeakMap(), ro = new WeakSet(), Nc = function() {
  const { searchHint: t, state: { value: e, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === e);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const Ed = (s, n, t = "is-match") => s.reduce((e, i) => [...e].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ m("span", { class: t, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), n);
var ao, lo, Mc, co, Rc, ho;
class Td extends xc {
  constructor() {
    super(...arguments);
    v(this, lo);
    v(this, co);
    v(this, ao, K());
    v(this, ho, ({ item: t }) => {
      const e = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(e) : (r(e), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && y(t).on("mouseenter.picker.zui", ".menu-item", (e) => {
      const i = y(e.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const t = this.element;
    t && y(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const e = A(this, lo, Mc).call(this);
      e != null && e.length && e.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: e } = t;
    return /* @__PURE__ */ m(
      De,
      {
        ref: f(this, ao),
        className: "picker-menu-list",
        items: A(this, co, Rc).call(this),
        onClickItem: f(this, ho),
        ...e
      }
    );
  }
}
ao = new WeakMap(), lo = new WeakSet(), Mc = function() {
  const t = this.element;
  if (t)
    return y(t).find(".menu-item>a.hover");
}, co = new WeakSet(), Rc = function() {
  const { selections: t, items: e, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = y.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = e.reduce((u, c) => {
    const {
      value: d = "",
      keys: p,
      text: g,
      className: b,
      ...x
    } = c;
    d === i && (a = !0);
    const w = g ?? d;
    return u.push({
      key: d,
      active: r.has(d),
      text: typeof w == "string" ? Ed(l, [w]) : /* @__PURE__ */ m(zs, { content: w }),
      className: R(b, { hover: d === i }),
      "data-value": d,
      ...x
    }), u;
  }, []);
  return !a && h.length && (h[0].className = R(h[0].className, "hover")), h;
}, ho = new WeakMap();
var yn, Ct, Lt, bn, En;
let Nd = (En = class extends Wt {
  constructor(t) {
    super(t);
    v(this, yn, void 0);
    v(this, Ct, void 0);
    v(this, Lt, void 0);
    v(this, bn, void 0);
    C(this, Lt, 0), this.isEmptyValue = (r) => f(this, bn).has(r), this.toggleValue = (r, a) => {
      if (!this.props.multiple)
        return a || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: l } = this, h = l.indexOf(r);
      if (a !== h >= 0)
        return h > -1 ? l.splice(h, 1) : l.push(r), this.setValue(l);
    }, this.deselect = (r) => {
      const { valueList: a } = this, l = new Set(this.formatValueList(r)), h = a.filter((u) => !l.has(u));
      this.setValue(h);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const a = this.formatValueList(r), l = this.props.multiple ? [...this.valueList, ...a] : a[0];
      return this.setValue(l);
    }, this.isSelected = (r) => this.valueList.includes(r), y.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: i = "" } = this.props;
    C(this, bn, new Set(i.split(e)));
    const { items: o } = this.state;
    if (Array.isArray(o) && o.length) {
      if (o.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = new Set(o.map((a) => a.value));
        this.state.value = this.valueList.filter((a) => r.has(a)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = o[0].value);
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return f(this, bn).values().next().value;
  }
  async load() {
    let t = f(this, Ct);
    t && t.abort(), t = new AbortController(), C(this, Ct, t);
    const { items: e, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof e == "function") {
      if (await ci(i || 500), f(this, Ct) !== t || (r = await e(o, { signal: t.signal }), f(this, Ct) !== t))
        return r;
    } else if (o.length) {
      const a = y.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      a.length ? r = e.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: d
        } = h;
        return a.every((p) => u.toLowerCase().includes(p) || c.toLowerCase().includes(p) || typeof d == "string" && d.toLowerCase().includes(p)) && l.push(h), l;
      }, []) : r = e;
    } else
      r = e;
    return C(this, Ct, void 0), r;
  }
  async update(t) {
    const { state: e, props: i } = this, o = f(this, yn) || {}, r = {};
    if (C(this, yn, o), (t || o.search !== e.search || i.items !== o.items) && (r.items = (await this.load()).filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, o.items = i.items, o.search = e.search), t || o.value !== e.value) {
      const l = r.items || e.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = e.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    f(this, Lt) && clearTimeout(f(this, Lt)), C(this, Lt, window.setTimeout(() => {
      C(this, Lt, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, e) {
    super.componentDidUpdate(t, e), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = f(this, Ct)) == null || t.abort(), C(this, Ct, void 0), C(this, yn, void 0), clearTimeout(f(this, Lt)), super.componentWillUnmount();
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
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
      onToggleValue: this.toggleValue
    };
  }
  _getPopProps(t, e) {
    return {
      ...super._getPopProps(t, e),
      menu: t.menu,
      multiple: t.multiple,
      search: t.search,
      searchHint: t.searchHint,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? Sd : kd);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = y.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = y.unique(t)), e.filter((i) => !this.isEmptyValue(i));
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let e = this.formatValueList(t);
    if (!e.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: i, limitValueInList: o } = this.props;
    if (o) {
      const a = new Set((Array.isArray(i) ? i : this.state.items).map((l) => String(l.value)));
      e = e.filter((l) => a.has(l));
    }
    const r = this.formatValue(e);
    return this.changeState({ value: r });
  }
}, yn = new WeakMap(), Ct = new WeakMap(), Lt = new WeakMap(), bn = new WeakMap(), En.defaultProps = {
  ...Wt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, En.Pop = Td, En);
const uo = class uo extends j {
};
uo.NAME = "Picker", uo.Component = Nd;
let Za = uo;
const fo = class fo extends dt {
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
    const { placement: n, strategy: t } = this.options, e = {
      placement: n,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && e.middleware.push(zo()), o && e.middleware.push(o === !0 ? gi() : gi(o)), r && e.middleware.push(gr({ element: this.$arrow[0] })), a && e.middleware.push(Fo(a)), e;
  }
  createPopper() {
    const n = this.element, t = this.$target[0];
    this.cleanup = ea(n, t, () => {
      Uo(n, t, this.computePositionConfig()).then(({ x: e, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${e}px`,
          top: `${i}px`
        }), !gr || !r.arrow)
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
    const n = this.$element.data("target");
    if (!n)
      throw new Error("popsvers trigger must have target.");
    const t = y(n);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: e } = this.options;
    t.addClass(e), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      y(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = t;
  }
  show() {
    this.$target.removeClass("hidden"), this.$mask.removeClass("hidden");
  }
  hide() {
    this.$target.addClass("hidden"), this.$mask.addClass("hidden");
  }
  initMask() {
    const n = y('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    n.on("click", () => {
      this.hide();
    }), this.$target.parent().append(n), this.$mask = n;
  }
  initArrow() {
    const { arrow: n } = this.options;
    n && (this.$arrow = y('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
fo.NAME = "Popovers", fo.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
let Qa = fo;
var Ss, ks, Xt, po, Es, Ts, Ns, Er, Ms;
let Md = (Ms = class extends W {
  constructor(t) {
    super(t);
    v(this, Ns);
    v(this, Ss, void 0);
    v(this, ks, K());
    v(this, Xt, 0);
    v(this, po, (t) => {
      const e = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), e.trim() !== "" && (i == null || i("", t));
      });
    });
    v(this, Es, (t) => {
      const e = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || e === i || (A(this, Ns, Er).call(this), C(this, Xt, window.setTimeout(() => {
          o(i, t), C(this, Xt, 0);
        }, this.props.delay || 0)));
      });
    });
    v(this, Ts, (t) => {
      const e = t.type === "focus";
      this.setState({ focus: e }, () => {
        const i = e ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, C(this, Ss, t.id || `search-box-${y.guid++}`);
  }
  get id() {
    return f(this, Ss);
  }
  get input() {
    return f(this, ks).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    A(this, Ns, Er).call(this);
  }
  render(t, e) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: d, searchIcon: p, clearIcon: g } = t, { focus: b, value: x } = e, { id: w } = this, _ = typeof x != "string" || !x.trim().length;
    let $, k, S;
    return p && (S = p === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(et, { icon: p })), !d && p && ($ = /* @__PURE__ */ m("label", { for: w, class: "input-control-prefix", children: S }, "prefix")), g && !_ ? k = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: f(this, po),
        children: g === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(et, { icon: g })
      }
    ) : d && p && (k = S), k && (k = /* @__PURE__ */ m("label", { for: w, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ m("div", { class: R("search-box input-control", r, { focus: b, empty: _, "has-prefix-icon": $, "has-suffix-icon": k }), style: a, children: [
      $,
      /* @__PURE__ */ m(
        "input",
        {
          ref: f(this, ks),
          id: w,
          type: "text",
          class: R("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: x,
          onInput: f(this, Es),
          onChange: f(this, Es),
          onFocus: f(this, Ts),
          onBlur: f(this, Ts)
        }
      ),
      k
    ] });
  }
}, Ss = new WeakMap(), ks = new WeakMap(), Xt = new WeakMap(), po = new WeakMap(), Es = new WeakMap(), Ts = new WeakMap(), Ns = new WeakSet(), Er = function() {
  f(this, Xt) && clearTimeout(f(this, Xt)), C(this, Xt, 0);
}, Ms.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Ms);
const mo = class mo extends j {
};
mo.NAME = "SearchBox", mo.Component = Md;
let tl = mo;
const go = class go extends j {
};
go.NAME = "Toolbar", go.Component = ae;
let el = go;
function qs(s) {
  return s.split("-")[1];
}
function sa(s) {
  return s === "y" ? "height" : "width";
}
function Ke(s) {
  return s.split("-")[0];
}
function qo(s) {
  return ["top", "bottom"].includes(Ke(s)) ? "x" : "y";
}
function nl(s, n, t) {
  let { reference: e, floating: i } = s;
  const o = e.x + e.width / 2 - i.width / 2, r = e.y + e.height / 2 - i.height / 2, a = qo(n), l = sa(a), h = e[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (Ke(n)) {
    case "top":
      c = { x: o, y: e.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: e.y + e.height };
      break;
    case "right":
      c = { x: e.x + e.width, y: r };
      break;
    case "left":
      c = { x: e.x - i.width, y: r };
      break;
    default:
      c = { x: e.x, y: e.y };
  }
  switch (qs(n)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Rd = async (s, n, t) => {
  const { placement: e = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(n));
  let h = await r.getElementRects({ reference: s, floating: n, strategy: i }), { x: u, y: c } = nl(h, e, l), d = e, p = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: x, fn: w } = a[b], { x: _, y: $, data: k, reset: S } = await w({ x: u, y: c, initialPlacement: e, placement: d, strategy: i, middlewareData: p, rects: h, platform: r, elements: { reference: s, floating: n } });
    u = _ ?? u, c = $ ?? c, p = { ...p, [x]: { ...p[x], ...k } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: n, strategy: i }) : S.rects), { x: u, y: c } = nl(h, d, l)), b = -1);
  }
  return { x: u, y: c, placement: d, strategy: i, middlewareData: p };
};
function Lc(s) {
  return typeof s != "number" ? function(n) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...n };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function vi(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function Ld(s, n) {
  var t;
  n === void 0 && (n = {});
  const { x: e, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: p = 0 } = n, g = Lc(p), b = a[d ? c === "floating" ? "reference" : "floating" : c], x = vi(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: e, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, k = vi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (x.top - k.top + g.top) / $.y, bottom: (k.bottom - x.bottom + g.bottom) / $.y, left: (x.left - k.left + g.left) / $.x, right: (k.right - x.right + g.right) / $.x };
}
const Ad = Math.min, Id = Math.max;
function Dd(s, n, t) {
  return Id(s, Ad(n, t));
}
const Pd = (s) => ({ name: "arrow", options: s, async fn(n) {
  const { element: t, padding: e = 0 } = s || {}, { x: i, y: o, placement: r, rects: a, platform: l } = n;
  if (t == null)
    return {};
  const h = Lc(e), u = { x: i, y: o }, c = qo(r), d = sa(c), p = await l.getDimensions(t), g = c === "y" ? "top" : "left", b = c === "y" ? "bottom" : "right", x = a.reference[d] + a.reference[c] - u[c] - a.floating[d], w = u[c] - a.reference[c], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(t));
  let $ = _ ? c === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const k = x / 2 - w / 2, S = h[g], N = $ - p[d] - h[b], L = $ / 2 - p[d] / 2 + k, I = Dd(S, L, N), D = qs(r) != null && L != I && a.reference[d] / 2 - (L < S ? h[g] : h[b]) - p[d] / 2 < 0;
  return { [c]: u[c] - (D ? L < S ? S - L : N - L : 0), data: { [c]: I, centerOffset: L - I } };
} }), Od = ["top", "right", "bottom", "left"];
Od.reduce((s, n) => s.concat(n, n + "-start", n + "-end"), []);
const Hd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xi(s) {
  return s.replace(/left|right|bottom|top/g, (n) => Hd[n]);
}
function Bd(s, n, t) {
  t === void 0 && (t = !1);
  const e = qs(s), i = qo(s), o = sa(i);
  let r = i === "x" ? e === (t ? "end" : "start") ? "right" : "left" : e === "start" ? "bottom" : "top";
  return n.reference[o] > n.floating[o] && (r = xi(r)), { main: r, cross: xi(r) };
}
const Wd = { start: "end", end: "start" };
function or(s) {
  return s.replace(/start|end/g, (n) => Wd[n]);
}
const zd = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(n) {
    var t;
    const { placement: e, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = n, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...b } = s, x = Ke(e), w = Ke(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = c || (w || !g ? [xi(r)] : function(O) {
      const P = xi(O);
      return [or(O), P, or(P)];
    }(r));
    c || p === "none" || $.push(...function(O, P, M, E) {
      const H = qs(O);
      let B = function(z, X, ue) {
        const Ys = ["left", "right"], Rn = ["right", "left"], Ks = ["top", "bottom"], Go = ["bottom", "top"];
        switch (z) {
          case "top":
          case "bottom":
            return ue ? X ? Rn : Ys : X ? Ys : Rn;
          case "left":
          case "right":
            return X ? Ks : Go;
          default:
            return [];
        }
      }(Ke(O), M === "start", E);
      return H && (B = B.map((z) => z + "-" + H), P && (B = B.concat(B.map(or)))), B;
    }(r, g, p, _));
    const k = [r, ...$], S = await Ld(n, b), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[x]), u) {
      const { main: O, cross: P } = Bd(e, o, _);
      N.push(S[O], S[P]);
    }
    if (L = [...L, { placement: e, overflows: N }], !N.every((O) => O <= 0)) {
      var I;
      const O = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, P = k[O];
      if (P)
        return { data: { index: O, overflows: L }, reset: { placement: P } };
      let M = "bottom";
      switch (d) {
        case "bestFit": {
          var D;
          const E = (D = L.map((H) => [H, H.overflows.filter((B) => B > 0).reduce((B, z) => B + z, 0)]).sort((H, B) => H[1] - B[1])[0]) == null ? void 0 : D[0].placement;
          E && (M = E);
          break;
        }
        case "initialPlacement":
          M = r;
      }
      if (e !== M)
        return { reset: { placement: M } };
    }
    return {};
  } };
}, Fd = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(n) {
    const { x: t, y: e } = n, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = Ke(a), d = qs(a), p = qo(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, b = u && p ? -1 : 1, x = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: _, alignmentAxis: $ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return d && typeof $ == "number" && (_ = d === "end" ? -1 * $ : $), p ? { x: _ * b, y: w * g } : { x: w * g, y: _ * b };
    }(n, s);
    return { x: t + i.x, y: e + i.y, data: i };
  } };
};
function ct(s) {
  var n;
  return ((n = s.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Et(s) {
  return ct(s).getComputedStyle(s);
}
function le(s) {
  return Ic(s) ? (s.nodeName || "").toLowerCase() : "";
}
let Zs;
function Ac() {
  if (Zs)
    return Zs;
  const s = navigator.userAgentData;
  return s && Array.isArray(s.brands) ? (Zs = s.brands.map((n) => n.brand + "/" + n.version).join(" "), Zs) : navigator.userAgent;
}
function zt(s) {
  return s instanceof ct(s).HTMLElement;
}
function ut(s) {
  return s instanceof ct(s).Element;
}
function Ic(s) {
  return s instanceof ct(s).Node;
}
function sl(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ct(s).ShadowRoot || s instanceof ShadowRoot;
}
function Yo(s) {
  const { overflow: n, overflowX: t, overflowY: e, display: i } = Et(s);
  return /auto|scroll|overlay|hidden|clip/.test(n + e + t) && !["inline", "contents"].includes(i);
}
function jd(s) {
  return ["table", "td", "th"].includes(le(s));
}
function Tr(s) {
  const n = /firefox/i.test(Ac()), t = Et(s), e = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!e && e !== "none" || n && t.willChange === "filter" || n && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Dc() {
  return !/^((?!chrome|android).)*safari/i.test(Ac());
}
function ia(s) {
  return ["html", "body", "#document"].includes(le(s));
}
const il = Math.min, In = Math.max, Ci = Math.round;
function Pc(s) {
  const n = Et(s);
  let t = parseFloat(n.width), e = parseFloat(n.height);
  const i = s.offsetWidth, o = s.offsetHeight, r = Ci(t) !== i || Ci(e) !== o;
  return r && (t = i, e = o), { width: t, height: e, fallback: r };
}
function Oc(s) {
  return ut(s) ? s : s.contextElement;
}
const Hc = { x: 1, y: 1 };
function Ge(s) {
  const n = Oc(s);
  if (!zt(n))
    return Hc;
  const t = n.getBoundingClientRect(), { width: e, height: i, fallback: o } = Pc(n);
  let r = (o ? Ci(t.width) : t.width) / e, a = (o ? Ci(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function He(s, n, t, e) {
  var i, o;
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = s.getBoundingClientRect(), a = Oc(s);
  let l = Hc;
  n && (e ? ut(e) && (l = Ge(e)) : l = Ge(s));
  const h = a ? ct(a) : window, u = !Dc() && t;
  let c = (r.left + (u && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (r.top + (u && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, p = r.width / l.x, g = r.height / l.y;
  if (a) {
    const b = ct(a), x = e && ut(e) ? ct(e) : e;
    let w = b.frameElement;
    for (; w && e && x !== b; ) {
      const _ = Ge(w), $ = w.getBoundingClientRect(), k = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(k.paddingLeft)) * _.x, $.y += (w.clientTop + parseFloat(k.paddingTop)) * _.y, c *= _.x, d *= _.y, p *= _.x, g *= _.y, c += $.x, d += $.y, w = ct(w).frameElement;
    }
  }
  return { width: p, height: g, top: d, right: c + p, bottom: d + g, left: c, x: c, y: d };
}
function ie(s) {
  return ((Ic(s) ? s.ownerDocument : s.document) || window.document).documentElement;
}
function Ko(s) {
  return ut(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Bc(s) {
  return He(ie(s)).left + Ko(s).scrollLeft;
}
function Vd(s, n, t) {
  const e = zt(n), i = ie(n), o = He(s, !0, t === "fixed", n);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (e || !e && t !== "fixed")
    if ((le(n) !== "body" || Yo(i)) && (r = Ko(n)), zt(n)) {
      const l = He(n, !0);
      a.x = l.x + n.clientLeft, a.y = l.y + n.clientTop;
    } else
      i && (a.x = Bc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function Fn(s) {
  if (le(s) === "html")
    return s;
  const n = s.assignedSlot || s.parentNode || (sl(s) ? s.host : null) || ie(s);
  return sl(n) ? n.host : n;
}
function ol(s) {
  return zt(s) && Et(s).position !== "fixed" ? s.offsetParent : null;
}
function rl(s) {
  const n = ct(s);
  let t = ol(s);
  for (; t && jd(t) && Et(t).position === "static"; )
    t = ol(t);
  return t && (le(t) === "html" || le(t) === "body" && Et(t).position === "static" && !Tr(t)) ? n : t || function(e) {
    let i = Fn(e);
    for (; zt(i) && !ia(i); ) {
      if (Tr(i))
        return i;
      i = Fn(i);
    }
    return null;
  }(s) || n;
}
function Wc(s) {
  const n = Fn(s);
  return ia(n) ? s.ownerDocument.body : zt(n) && Yo(n) ? n : Wc(n);
}
function Dn(s, n) {
  var t;
  n === void 0 && (n = []);
  const e = Wc(s), i = e === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ct(e);
  return i ? n.concat(o, o.visualViewport || [], Yo(e) ? e : []) : n.concat(e, Dn(e));
}
function al(s, n, t) {
  return n === "viewport" ? vi(function(e, i) {
    const o = ct(e), r = ie(e), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, u = 0, c = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = Dc();
      (d || !d && i === "fixed") && (u = a.offsetLeft, c = a.offsetTop);
    }
    return { width: l, height: h, x: u, y: c };
  }(s, t)) : ut(n) ? function(e, i) {
    const o = He(e, !0, i === "fixed"), r = o.top + e.clientTop, a = o.left + e.clientLeft, l = zt(e) ? Ge(e) : { x: 1, y: 1 }, h = e.clientWidth * l.x, u = e.clientHeight * l.y, c = a * l.x, d = r * l.y;
    return { top: d, left: c, right: c + h, bottom: d + u, x: c, y: d, width: h, height: u };
  }(n, t) : vi(function(e) {
    var i;
    const o = ie(e), r = Ko(e), a = (i = e.ownerDocument) == null ? void 0 : i.body, l = In(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = In(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let u = -r.scrollLeft + Bc(e);
    const c = -r.scrollTop;
    return Et(a || o).direction === "rtl" && (u += In(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: u, y: c };
  }(ie(s)));
}
const Ud = { getClippingRect: function(s) {
  let { element: n, boundary: t, rootBoundary: e, strategy: i } = s;
  const o = t === "clippingAncestors" ? function(h, u) {
    const c = u.get(h);
    if (c)
      return c;
    let d = Dn(h).filter((x) => ut(x) && le(x) !== "body"), p = null;
    const g = Et(h).position === "fixed";
    let b = g ? Fn(h) : h;
    for (; ut(b) && !ia(b); ) {
      const x = Et(b), w = Tr(b);
      (g ? w || p : w || x.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = x : d = d.filter((_) => _ !== b), b = Fn(b);
    }
    return u.set(h, d), d;
  }(n, this._c) : [].concat(t), r = [...o, e], a = r[0], l = r.reduce((h, u) => {
    const c = al(n, u, i);
    return h.top = In(c.top, h.top), h.right = il(c.right, h.right), h.bottom = il(c.bottom, h.bottom), h.left = In(c.left, h.left), h;
  }, al(n, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: n, offsetParent: t, strategy: e } = s;
  const i = zt(t), o = ie(t);
  if (t === o)
    return n;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && e !== "fixed") && ((le(t) !== "body" || Yo(o)) && (r = Ko(t)), zt(t))) {
    const h = He(t);
    a = Ge(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - r.scrollLeft * a.x + l.x, y: n.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: ut, getDimensions: function(s) {
  return Pc(s);
}, getOffsetParent: rl, getDocumentElement: ie, getScale: Ge, async getElementRects(s) {
  let { reference: n, floating: t, strategy: e } = s;
  const i = this.getOffsetParent || rl, o = this.getDimensions;
  return { reference: Vd(n, await i(t), e), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (s) => Array.from(s.getClientRects()), isRTL: (s) => Et(s).direction === "rtl" };
function qd(s, n, t, e) {
  e === void 0 && (e = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = e, l = i && !a, h = l || o ? [...ut(s) ? Dn(s) : s.contextElement ? Dn(s.contextElement) : [], ...Dn(n)] : [];
  h.forEach((p) => {
    l && p.addEventListener("scroll", t, { passive: !0 }), o && p.addEventListener("resize", t);
  });
  let u, c = null;
  if (r) {
    let p = !0;
    c = new ResizeObserver(() => {
      p || t(), p = !1;
    }), ut(s) && !a && c.observe(s), ut(s) || !s.contextElement || a || c.observe(s.contextElement), c.observe(n);
  }
  let d = a ? He(s) : null;
  return a && function p() {
    const g = He(s);
    !d || g.x === d.x && g.y === d.y && g.width === d.width && g.height === d.height || t(), d = g, u = requestAnimationFrame(p);
  }(), t(), () => {
    var p;
    h.forEach((g) => {
      l && g.removeEventListener("scroll", t), o && g.removeEventListener("resize", t);
    }), (p = c) == null || p.disconnect(), c = null, a && cancelAnimationFrame(u);
  };
}
const Yd = (s, n, t) => {
  const e = /* @__PURE__ */ new Map(), i = { platform: Ud, ...t }, o = { ...i.platform, _c: e };
  return Rd(s, n, { ...i, platform: o });
};
var Ce, wn, _e, $e, st, yo, Rs, Ls, Nr, bo, zc, wo, Fc, vo, jc, xo, Vc, Co, Uc, _o, qc, $o, Yc, Se, So, Kc;
const at = class at extends dt {
  constructor() {
    super(...arguments);
    v(this, Ls);
    v(this, bo);
    v(this, wo);
    v(this, vo);
    v(this, xo);
    v(this, Co);
    v(this, _o);
    v(this, $o);
    v(this, So);
    v(this, Ce, void 0);
    v(this, wn, void 0);
    v(this, _e, void 0);
    v(this, $e, void 0);
    v(this, st, void 0);
    v(this, yo, void 0);
    v(this, Rs, void 0);
    v(this, Se, void 0);
    C(this, Ce, !1), C(this, _e, 0), this.hideLater = () => {
      f(this, Se).call(this), C(this, _e, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, Se, () => {
      clearTimeout(f(this, _e)), C(this, _e, 0);
    });
  }
  get isShown() {
    var t;
    return (t = f(this, $e)) == null ? void 0 : t.classList.contains(at.CLASS_SHOW);
  }
  get tooltip() {
    return f(this, $e) || A(this, wo, Fc).call(this);
  }
  get trigger() {
    return f(this, yo) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${at.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: t } = this;
    t !== document.body && !t.hasAttribute("data-toggle") && t.setAttribute("data-toggle", "tooltip");
  }
  show(t) {
    return this.setOptions(t), !f(this, Ce) && this.isHover && A(this, So, Kc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(at.CLASS_SHOW), A(this, _o, qc).call(this), !0;
  }
  hide() {
    var t, e;
    return (t = f(this, Rs)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (e = f(this, $e)) == null || e.classList.remove(at.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    f(this, Ce) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", f(this, Se)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t = {}) {
    t instanceof Event && (t = { event: t });
    const { exclude: e } = t;
    if (e) {
      const i = this.getAll(), o = new Set(e);
      for (const r of i)
        o.has(r.element) || r.hide();
    }
  }
};
Ce = new WeakMap(), wn = new WeakMap(), _e = new WeakMap(), $e = new WeakMap(), st = new WeakMap(), yo = new WeakMap(), Rs = new WeakMap(), Ls = new WeakSet(), Nr = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, bo = new WeakSet(), zc = function() {
  const t = A(this, Ls, Nr).call(this);
  return C(this, st, document.createElement("div")), f(this, st).style.position = this.options.strategy, f(this, st).style.width = `${t}px`, f(this, st).style.height = `${t}px`, f(this, st).style.transform = "rotate(45deg)", f(this, st);
}, wo = new WeakSet(), Fc = function() {
  var i;
  const t = at.TOOLTIP_CLASS;
  let e;
  if (this.isDynamic) {
    e = document.createElement("div");
    const o = this.options.className ? this.options.className.split(" ") : [];
    let r = [t, this.options.type || ""];
    r = r.concat(o), e.classList.add(...r), e[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const o = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (o != null && o.startsWith("#") && (e = document.querySelector(o)), !e) {
      const r = this.element.nextElementSibling;
      r != null && r.classList.contains(t) ? e = r : e = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (e == null || e.append(A(this, bo, zc).call(this))), !e)
    throw new Error("Tooltip: Cannot find tooltip element");
  return e.style.width = "max-content", e.style.position = "absolute", e.style.top = "0", e.style.left = "0", document.body.appendChild(e), C(this, $e, e), e;
}, vo = new WeakSet(), jc = function() {
  var r;
  const t = A(this, Ls, Nr).call(this), { strategy: e, placement: i } = this.options, o = {
    middleware: [Fd(t), zd()],
    strategy: e,
    placement: i
  };
  return this.options.arrow && f(this, st) && ((r = o.middleware) == null || r.push(Pd({ element: f(this, st) }))), o;
}, xo = new WeakSet(), Vc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Co = new WeakSet(), Uc = function(t) {
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
}, _o = new WeakSet(), qc = function() {
  const t = A(this, vo, jc).call(this), e = A(this, $o, Yc).call(this);
  C(this, Rs, qd(e, this.tooltip, () => {
    this.element && Yd(e, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const l = a.split("-")[0], h = A(this, xo, Vc).call(this, l);
      if (r.arrow && f(this, st)) {
        const { x: u, y: c } = r.arrow;
        Object.assign(f(this, st).style, {
          left: u != null ? `${u}px` : "",
          top: c != null ? `${c}px` : "",
          [h]: `${-f(this, st).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...A(this, Co, Uc).call(this, l)
        });
      }
    });
  }));
}, $o = new WeakSet(), Yc = function() {
  return f(this, wn) || C(this, wn, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: e, clientY: i } = t;
        return {
          width: 0,
          height: 0,
          top: i,
          right: e,
          bottom: i,
          left: e
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), f(this, wn);
}, Se = new WeakMap(), So = new WeakSet(), Kc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", f(this, Se)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), C(this, Ce, !0);
}, at.NAME = "tooltip", at.TOOLTIP_CLASS = "tooltip", at.CLASS_SHOW = "show", at.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)', at.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
let Ot = at;
document.addEventListener("click", function(s) {
  var e;
  const n = s.target, t = (e = n.closest) == null ? void 0 : e.call(n, Ot.MENU_SELECTOR);
  if (t) {
    const i = Ot.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    Ot.clear({ event: s });
});
document.addEventListener("mouseover", function(s) {
  var i;
  const n = s.target, t = (i = n.closest) == null ? void 0 : i.call(n, Ot.MENU_SELECTOR);
  if (!t)
    return;
  const e = Ot.ensure(t);
  e.isHover && e.show();
});
function Kd({
  type: s,
  component: n,
  className: t,
  children: e,
  content: i,
  style: o,
  attrs: r,
  url: a,
  disabled: l,
  active: h,
  icon: u,
  text: c,
  target: d,
  trailingIcon: p,
  hint: g,
  checked: b,
  actions: x,
  show: w,
  level: _ = 0,
  items: $,
  ...k
}) {
  const S = Array.isArray(x) ? { items: x } : x;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = R("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ m(
    "div",
    {
      className: R("tree-item-content", t, { disabled: l, active: h }),
      title: g,
      "data-target": d,
      style: Object.assign({ paddingLeft: `calc(${_} * var(--tree-indent, 20px))` }, o),
      "data-level": _,
      ...r,
      ...k,
      children: [
        /* @__PURE__ */ m("span", { class: `tree-toggle-icon${$ ? " state" : ""}`, children: $ ? /* @__PURE__ */ m("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof b == "boolean" ? /* @__PURE__ */ m("div", { class: `tree-checkbox checkbox-primary${b ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
        /* @__PURE__ */ m(et, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ m("a", { className: "text tree-link not-nested-toggle", href: a, children: c }) : /* @__PURE__ */ m("span", { class: "text", children: c }),
        /* @__PURE__ */ m(zs, { content: i }),
        e,
        S ? /* @__PURE__ */ m(ae, { ...S }) : null,
        /* @__PURE__ */ m(et, { icon: p, className: "tree-trailing-icon" })
      ]
    }
  );
}
var Tn;
let Gd = (Tn = class extends Jr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(n) {
    const t = super.getNestedMenuProps(n), { collapsedIcon: e, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: e,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...t
    };
  }
  getItemRenderProps(n, t, e) {
    const i = super.getItemRenderProps(n, t, e), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = n;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(t) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const n = super.beforeRender(), { hover: t } = this.props;
    return t && (n.className = R(n.className, "tree-hover")), n;
  }
}, Tn.ItemComponents = {
  item: Kd
}, Tn.NAME = "tree", Tn);
const ko = class ko extends j {
};
ko.NAME = "Tree", ko.Component = Gd;
let ll = ko;
const ca = class ca extends dt {
  init() {
    const { multiple: n, defaultFileList: t, limitSize: e } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = e ? lu(e) : Number.MAX_VALUE, this.currentBytes = 0, n || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: n, uploadText: t, uploadIcon: e, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = y('<ul class="file-list py-1"></ul>');
    const l = y(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = y(`<label class="btn ${o}" for="${n}">${t}</label>`), e) {
        const d = y(`<i class="icon icon-${e}"></i>`);
        this.$label.prepend(d);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = y(`<span class="text-primary">${t}</span>`);
    if (e) {
      const c = y(`<i class="icon icon-${e} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = y(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${n}"></label>`).append(h).append(l), this.bindDragEvent();
    const u = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...u);
  }
  bindDragEvent() {
    this.$label.on("dragover", (n) => {
      n.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (n) => {
      n.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (n) => {
      var e;
      n.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const t = Array.from(((e = n.dataTransfer) == null ? void 0 : e.files) ?? []);
      console.log(n.dataTransfer.files), this.addFileItem(t);
    });
  }
  initFileInputCash() {
    const { name: n, multiple: t, accept: e } = this.options;
    this.$input = y("<input />").addClass("hidden").prop("type", "file").prop("name", n).prop("id", n).prop("multiple", t).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), e && this.$input.prop("accept", e);
  }
  addFile(n) {
    const { multiple: t, onSizeChange: e } = this.options;
    t || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = n.size), this.renameMap.set(n.name, n.name), this.fileMap.set(n.name, n), this.dataTransfer.items.add(n), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += n.size, e == null || e(this.currentBytes);
  }
  renameDuplicatedFile(n) {
    if (!this.fileMap.has(n.name))
      return n;
    const t = n.name.lastIndexOf(".");
    if (t === -1)
      return this.renameDuplicatedFile(new File([n], `${n.name}(1)`));
    const e = n.name.substring(0, t), i = n.name.substring(t);
    return this.renameDuplicatedFile(new File([n], `${e}(1)${i}`));
  }
  filterFiles(n) {
    const { accept: t } = this.options;
    if (!t)
      return n;
    const e = t.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return e.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), n.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(n) {
    n = this.filterFiles(n);
    const { multiple: t, limitCount: e, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (t) {
      const h = [];
      for (let u of n) {
        if (e && this.fileMap.size >= e)
          return r == null || r(h), alert(o);
        if (this.currentBytes + u.size > this.limitBytes)
          return r == null || r(h), alert(i);
        u = this.renameDuplicatedFile(u);
        const c = this.createFileItem(u);
        this.itemMap.set(u.name, c), this.$list.append(c), h.push(u);
      }
      r == null || r(h);
      return;
    }
    if (n[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(n[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), r == null || r(a);
  }
  deleteFileItem(n) {
    var l;
    const t = this.renameMap.get(n) ?? n;
    this.renameMap.delete(n);
    const e = this.fileMap.get(t);
    if (!e)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(e.name);
    this.itemMap.delete(e.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(e), this.fileMap.delete(e.name), this.currentBytes -= e.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(n, t) {
    var o, r;
    const e = this.renameMap.get(n.name);
    this.renameMap.set(n.name, t), e && (n = this.fileMap.get(e) ?? n);
    const i = this.itemMap.get(n.name);
    i && (this.itemMap.set(t, i).delete(n.name), (r = (o = this.options).onRename) == null || r.call(o, t, n.name), this.fileMap.delete(n.name), this.dataTransfer = new DataTransfer(), n = new File([n], t), this.fileMap.set(t, n).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(n) {
    const { showIcon: t } = this.options;
    return this.addFile(n), y('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(n)).append(this.createRenameContainer(n));
  }
  fileIcon() {
    const { icon: n } = this.options;
    return y(`<i class="icon icon-${n}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: n, renameText: t, renameIcon: e, renameClass: i } = this.options;
    if (n) {
      const o = y(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${e}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Ot(o, { title: t }), o;
    }
    return y("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: n, deleteText: t, deleteIcon: e, deleteClass: i } = this.options;
    if (n) {
      const o = y(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${e}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Ot(o, { title: t })), o;
    }
    return y("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(n) {
    return y(`<span class="file-name">${n}</span>`);
  }
  fileSize(n) {
    return y(`<span class="file-size text-gray">${au(n)}</span>`);
  }
  createFileInfo(n) {
    const { renameBtn: t, deleteBtn: e, showSize: i } = this.options, o = y('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(n.name)), i && o.append(this.fileSize(n.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = y(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), e && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(n.name))
    ), o;
  }
  createRenameContainer(n) {
    const { confirmText: t, cancelText: e, duplicatedHint: i } = this.options, o = y('<div class="input-group input-rename-container hidden"></div>'), r = y("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", n.name).on("keydown", (u) => {
      if (u.key === "Enter") {
        const c = o.closest(".file-item"), d = c.find(".file-name");
        if (d.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(n, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(r.val());
      } else
        u.key === "Escape" && (r.val(n.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = y("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(n, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = y("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(e).on("click", () => {
      r.val(n.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = y('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
};
ca.DEFAULT = {
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
let Mr = ca;
const ha = class ha extends Mr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = y(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(y('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: n, tip: t, uploadText: e, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = y('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = y('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = y(`<label for="${n}" class="text-primary cursor-pointer">${e}</label>`);
    if (i) {
      const a = y(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = y('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(y(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = y('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(n) {
    const { accept: t } = this.options;
    if (t === "image/*")
      return n.filter((i) => i.type.includes("image"));
    const e = t.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return n.filter((i) => e.includes(i.type));
  }
  createFileItem(n) {
    const t = super.createFileItem(n).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(n, t);
    const { deleteBtn: e, showSize: i } = this.options;
    return e && t.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(n.name))
    ), i && t.append(
      this.fileSize(n.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), t;
  }
  setImageUrl(n, t) {
    const e = new FileReader();
    e.onload = () => {
      y('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${e.result})` }).prependTo(t);
    }, e.readAsDataURL(n);
  }
  createFileInfo(n) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = y(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return y('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(y(`<div class="file-name py-1 ellipsis">${n.name}</div>`)).append(t);
  }
  createRenameContainer(n) {
    const { duplicatedHint: t } = this.options, e = y("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", n.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = e.closest(".file-item").find(".file-name");
        if (o.html() === e.val()) {
          e.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(e.val()))
          return alert(t);
        this.renameFileItem(n, e.val()), e.addClass("hidden"), o.html(e.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && e.val(n.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = e.closest(".file-item").find(".file-name");
      if (i.html() === e.val()) {
        e.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(e.val()))
        return alert(t);
      this.renameFileItem(n, e.val()), e.addClass("hidden"), i.html(e.val()).closest(".file-info").removeClass("hidden");
    });
    return e;
  }
};
ha.DEFAULT = {
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
let cl = ha;
let Xd = class extends W {
  constructor() {
    super(...arguments), this._onDragStart = (n) => {
      var i, o, r;
      const t = n.target.closest(".dashboard-block");
      if (!t)
        return;
      const e = t.getBoundingClientRect();
      if (n.clientY - e.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = n.dataTransfer) == null || i.setData("application/id", this.props.id), (r = (o = this.props).onDragStart) == null || r.call(o, n);
    }, this._onDragEnd = (n) => {
      var t, e;
      this.setState({ dragging: !1 }), (e = (t = this.props).onDragEnd) == null || e.call(t, n);
    };
  }
  render() {
    const { left: n, top: t, id: e, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: h } = this.props, { dragging: u } = this.state;
    return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: n, top: t, width: r, height: a }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": e,
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          y.isPlainObject(l) && l.html ? /* @__PURE__ */ m(Ws, { class: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const hl = ([s, n, t, e], [i, o, r, a]) => !(s + t <= i || i + r <= s || n + e <= o || o + a <= n), Qs = "Dashboard:Block.cache:";
var As;
let Jd = (As = class extends W {
  constructor(n) {
    super(n), this.map = /* @__PURE__ */ new Map(), this._handleDragStart = (t) => {
      var i;
      const e = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      e !== void 0 && (this.setState({ dragging: e }), console.log("handleBlockDragStart", t));
    }, this._handleDragEnd = (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    }, this._handleMenuClick = (t) => {
      const e = t.target.closest(".dashboard-block");
      if (!e)
        return;
      const i = e.dataset.id;
      if (!i)
        return;
      const o = this.getBlock(i);
      if (!o || !o.menu)
        return;
      t.stopPropagation();
      const { menu: r } = o, { onClickMenu: a } = this.props;
      lt.show({
        event: t.target,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var h;
            ((h = l.item.data) == null ? void 0 : h.type) === "refresh" && this.load(i), a && a.call(this, l, o);
          }
        },
        ...r
      });
    }, this.state = { blocks: this._initBlocks(n.blocks) };
  }
  getBlock(n) {
    return this.state.blocks.find((t) => t.id === n);
  }
  update(n, t) {
    const { id: e } = n, { blocks: i } = this.state, o = i.findIndex((a) => a.id === e);
    if (o < 0)
      return;
    const r = i[o];
    n.fetch && n.fetch !== r.fetch && r.needLoad && (n.needLoad = !1), i[o] = { ...r, ...n }, this.setState({ blocks: i }, t);
  }
  delete(n) {
    const { blocks: t } = this.state, e = t.findIndex((i) => i.id === n);
    e < 0 || (t.splice(e, 1), this.setState({ blocks: t }));
  }
  load(n, t) {
    const e = this.getBlock(n);
    if (!e || e.loading || (t = t || e.fetch, typeof t == "string" ? t = { url: t } : typeof t == "function" && (t = t(e.id, e)), !t || !t.url))
      return;
    const { url: i, ...o } = t;
    this.update({ id: n, loading: !0, needLoad: !1 }, async () => {
      const r = Y(i, e);
      try {
        const a = await fetch(Y(r, e), {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          ...o
        });
        if (!a.ok)
          throw new Error(`Server response: ${a.status} ${a.statusText}}`);
        const l = await a.text();
        this.update({ id: n, loading: !1, content: { html: l } }, () => {
          this._setCache(n, l);
        });
      } catch (a) {
        const l = /* @__PURE__ */ m("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          a.message
        ] });
        this.update({ id: n, loading: !1, content: l });
      }
    });
  }
  reset(n) {
    this.setState({ blocks: this._initBlocks(n) });
  }
  loadNext() {
    const { blocks: n } = this.state;
    let t;
    for (const e of n) {
      if (e.loading)
        return;
      e.needLoad && (t = e);
    }
    t && requestAnimationFrame(() => this.load(t.id));
  }
  _setCache(n, t) {
    const { cache: e } = this.props;
    if (e)
      try {
        typeof e == "string" ? An.set(`${Qs}${e}:${n}`, t) : An.session.set(`${Qs}${n}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: n, html: t });
      }
  }
  _getCache(n) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const e = typeof t == "string" ? An.get(`${Qs}${t}:${n}`) : An.session.get(`${Qs}${n}`);
    if (e)
      return { html: e };
  }
  _initBlocks(n) {
    const { blockFetch: t, blockMenu: e } = this.props;
    return n.map((o) => {
      const {
        id: r,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: u = t,
        menu: c = e,
        content: d,
        ...p
      } = o, [g, b] = this._getBlockSize(a);
      return {
        id: `${r}`,
        width: g,
        height: b,
        left: l,
        top: h,
        fetch: u,
        menu: c,
        content: d ?? this._getCache(`${r}`),
        loading: !1,
        needLoad: !!u,
        ...p
      };
    });
  }
  _getBlockSize(n) {
    const { blockDefaultSize: t, blockSizeMap: e } = this.props;
    return n = n ?? t, typeof n == "string" && (n = e[n]), n = n || t, Array.isArray(n) || (n = [n.width, n.height]), n;
  }
  _layout() {
    this.map.clear();
    let n = 0;
    const { blocks: t } = this.state;
    return t.forEach((e) => {
      this._layoutBlock(e);
      const [, i, , o] = this.map.get(e.id);
      n = Math.max(n, i + o);
    }), { blocks: t, height: n };
  }
  _layoutBlock(n) {
    const t = this.map, { id: e, left: i, top: o, width: r, height: a } = n;
    if (i < 0 || o < 0) {
      const [l, h] = this._appendBlock(r, a, i, o);
      t.set(e, [l, h, r, a]);
    } else
      this._insertBlock(e, [i, o, r, a]);
  }
  _canPlace(n) {
    const { dragging: t } = this.state;
    for (const [e, i] of this.map.entries())
      if (e !== t && hl(i, n))
        return !1;
    return !0;
  }
  _insertBlock(n, t) {
    this.map.set(n, t);
    for (const [e, i] of this.map.entries())
      e !== n && hl(i, t) && (i[1] = t[1] + t[3], this._insertBlock(e, i));
  }
  _appendBlock(n, t, e, i) {
    if (e >= 0 && i >= 0) {
      if (this._canPlace([e, i, n, t]))
        return [e, i];
      i = -1;
    }
    let o = e < 0 ? 0 : e, r = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([o, r, n, t])) {
        a = !0;
        break;
      }
      e < 0 ? (o += 1, o + n > l && (o = 0, r += 1)) : r += 1;
    }
    return [o, r];
  }
  componentDidMount() {
    this.loadNext();
  }
  componentDidUpdate(n) {
    n.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  render() {
    const { blocks: n, height: t } = this._layout(), { cellHeight: e, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: t * e }, children: n.map((r, a) => {
      const { id: l, menu: h, content: u, title: c } = r, [d, p, g, b] = o.get(l) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        Xd,
        {
          id: l,
          index: a,
          left: `${100 * d / i}%`,
          top: e * p,
          width: `${100 * g / i}%`,
          height: e * b,
          content: u,
          title: c,
          onDragStart: this._handleDragStart,
          onDragEnd: this._handleDragEnd,
          onMenuBtnClick: h ? this._handleMenuClick : void 0
        },
        r.id
      );
    }) }) });
  }
}, As.defaultProps = {
  responsive: !1,
  cache: !0,
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
}, As);
const Eo = class Eo extends j {
};
Eo.NAME = "Dashboard", Eo.Component = Jd;
let ul = Eo;
var Jt, Zt;
class dl extends W {
  constructor(t) {
    super(t);
    v(this, Jt, void 0);
    v(this, Zt, void 0);
    C(this, Jt, 0), C(this, Zt, null), this._handleWheel = (e) => {
      const { wheelContainer: i } = this.props, o = e.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? e.deltaX : e.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && e.preventDefault();
      }
    }, this._handleMouseMove = (e) => {
      const { dragStart: i } = this.state;
      i && (f(this, Jt) && cancelAnimationFrame(f(this, Jt)), C(this, Jt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - i.x : e.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), C(this, Jt, 0);
      })), e.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    }, this._handleClick = (e) => {
      const i = e.currentTarget;
      if (!i)
        return;
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, h = (r === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(h * l / a), e.preventDefault();
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
    const { scrollSize: t, clientSize: e } = this.props;
    return Math.max(0, t - e);
  }
  get barSize() {
    const { clientSize: t, scrollSize: e, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / e), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (C(this, Zt, typeof t == "string" ? document : t.current), f(this, Zt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), f(this, Zt) && f(this, Zt).removeEventListener("wheel", this._handleWheel);
  }
  scroll(t) {
    return t = Math.max(0, Math.min(Math.round(t), this.maxScrollPos)), t === this.scrollPos ? !1 : (this.controlled ? this._afterScroll(t) : this.setState({
      scrollPos: t
    }, this._afterScroll.bind(this, t)), !0);
  }
  scrollOffset(t) {
    return this.scroll(this.scrollPos + t);
  }
  _afterScroll(t) {
    const { onScroll: e } = this.props;
    e && e(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: e,
      size: i = 12,
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: u
    } = this.props, { maxScrollPos: c, scrollPos: d } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, b = {};
    return e === "horz" ? (g.height = i, g.width = t, b.width = this.barSize, b.left = Math.round(Math.min(c, d) * (t - b.width) / c)) : (g.width = i, g.height = t, b.height = this.barSize, b.top = Math.round(Math.min(c, d) * (t - b.height) / c)), /* @__PURE__ */ m(
      "div",
      {
        className: R("scrollbar", o, {
          "is-vert": e === "vert",
          "is-horz": e === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
          "div",
          {
            className: "scrollbar-bar",
            style: b,
            onMouseDown: this._handleMouseDown
          }
        )
      }
    );
  }
}
Jt = new WeakMap(), Zt = new WeakMap();
const _i = /* @__PURE__ */ new Map(), $i = [];
function Gc(s, n) {
  const { name: t } = s;
  if (!(n != null && n.override) && _i.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  _i.set(t, s), n != null && n.buildIn && !$i.includes(t) && $i.push(t);
}
function jt(s, n) {
  Gc(s, n);
  const t = (e) => {
    if (!e)
      return s;
    const { defaultOptions: i, ...o } = s;
    return {
      ...o,
      defaultOptions: { ...i, ...e }
    };
  };
  return t.plugin = s, t;
}
function Xc(s) {
  return _i.delete(s);
}
function Zd(s) {
  if (typeof s == "string") {
    const n = _i.get(s);
    return n || console.warn(`DTable: Cannot found plugin "${s}"`), n;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function Jc(s, n, t) {
  return n.forEach((e) => {
    var o;
    if (!e)
      return;
    const i = Zd(e);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Jc(s, i.plugins, t), s.push(i), t.add(i.name)));
  }), s;
}
function Qd(s = [], n = !0) {
  return n && $i.length && s.unshift(...$i), s != null && s.length ? Jc([], s, /* @__PURE__ */ new Set()) : [];
}
function fl() {
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
function tf(s, n, t) {
  return s && (n && (s = Math.max(n, s)), t && (s = Math.min(t, s))), s;
}
function pl(s, n) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof n == "number" && (typeof s != "number" || isNaN(s)) && (s = n), s;
}
function rr(s, n = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const e = s.width - s.totalWidth;
    if (!n && e > 0 || n && e !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[e < 0 ? "max" : "min"](e, Math.ceil(e * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let t = 0;
  s.list.forEach((e) => {
    e.realWidth || (e.realWidth = e.width), e.left = t, t += e.realWidth;
  });
}
function ef(s, n, t, e) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = n, h = (_) => (typeof _ == "function" && (_ = _.call(s)), _ = pl(_, 0), _ < 1 && (_ = Math.round(_ * e)), _), u = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, c = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, d = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, p = [], g = {};
  let b = !1;
  const x = [], w = {};
  if (t.forEach((_) => {
    const { colTypes: $, onAddCol: k } = _;
    $ && Object.entries($).forEach(([S, N]) => {
      w[S] || (w[S] = []), w[S].push(N);
    }), k && x.push(k);
  }), n.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: $ = "", name: k } = _, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ..._,
      type: $
    }, N = {
      name: k,
      type: $,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, L = w[$];
    L && L.forEach((H) => {
      const B = typeof H == "function" ? H.call(s, S) : H;
      B && Object.assign(S, B, _);
    });
    const { fixed: I, flex: D, minWidth: O = o, maxWidth: P = r } = S, M = pl(S.width || i, i);
    N.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, N.width = tf(M < 1 ? Math.round(M * e) : M, O, P), x.forEach((H) => H.call(s, N)), p.push(N), g[N.name] = N;
    const E = I ? I === "left" ? c : d : u;
    E.list.push(N), E.totalWidth += N.width, E.width = E.totalWidth, N.flex && E.flexList.push(N), typeof S.order == "number" && (b = !0);
  }), b) {
    const _ = ($, k) => ($.setting.order ?? 0) - (k.setting.order ?? 0);
    p.sort(_), c.list.sort(_), u.list.sort(_), d.list.sort(_);
  }
  return rr(c, !0), rr(d, !0), u.widthSetting = e - c.width - d.width, rr(u), {
    list: p,
    map: g,
    left: c,
    center: u,
    right: d
  };
}
function nf({ col: s, className: n, height: t, row: e, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...d }) {
  var M;
  const p = {
    left: u ?? s.left,
    top: c ?? e.top,
    width: h ?? s.realWidth,
    height: t,
    ...r
  }, { align: g, border: b } = s.setting, x = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", l, n, s.setting.className, {
    "has-border-left": b === !0 || b === "left",
    "has-border-right": b === !0 || b === "right"
  }], _ = ["dtable-cell-content", s.setting.cellClass], $ = (M = e.data) == null ? void 0 : M[s.name], k = [a ?? $ ?? ""], S = i ? i(k, { row: e, col: s, value: $ }, U) : k, N = [], L = [], I = {}, D = {};
  let O = "div";
  S == null || S.forEach((E) => {
    if (typeof E == "object" && E && !J(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const H = E.outer ? N : L;
      E.html ? H.push(/* @__PURE__ */ m("div", { className: R("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? p : x, E.style), E.className && (E.outer ? w : _).push(E.className), E.children && H.push(E.children), E.attrs && Object.assign(E.outer ? I : D, E.attrs)), E.tagName && !E.outer && (O = E.tagName);
    } else
      L.push(E);
  });
  const P = O;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R(w),
      style: p,
      "data-col": s.name,
      "data-row": e.id,
      "data-type": s.type || null,
      ...d,
      ...I,
      children: [
        L.length > 0 && /* @__PURE__ */ m(P, { className: R(_), style: x, ...D, children: L }),
        N
      ]
    }
  );
}
function ar({
  rows: s = [],
  cols: n,
  rowHeight: t,
  scrollLeft: e = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: u = nf,
  onRenderCell: c
}) {
  var b;
  const d = Array.isArray(s) ? s : [s], p = ((b = d[0]) == null ? void 0 : b.top) ?? 0, g = d.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -e, top: -i + p }, children: d.reduce((x, w, _) => {
        const $ = n.length;
        return n.forEach((k, S) => {
          x.push(
            /* @__PURE__ */ m(
              u,
              {
                className: R(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === $ - 1 ? "is-last-in-row" : "",
                  _ ? "" : "is-first-row",
                  _ === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: w,
                top: w.top - p,
                height: t,
                onRenderCell: c
              },
              `${w.index}:${k.name}`
            )
          );
        }), x;
      }, []) })
    }
  );
}
function ml({
  top: s,
  height: n,
  rowHeight: t,
  rows: e,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: u,
  onRenderCell: c
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ m(
    ar,
    {
      className: "dtable-fixed-left",
      rows: e,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: t,
      onRenderCell: c
    },
    "left"
  ));
  let p = null;
  o.list.length && (p = /* @__PURE__ */ m(
    ar,
    {
      rows: e,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: o.list,
      left: i.width,
      width: o.width,
      rowHeight: t,
      onRenderCell: c
    },
    "center"
  ));
  let g = null;
  return r.list.length && (g = /* @__PURE__ */ m(
    ar,
    {
      className: "dtable-fixed-right",
      rows: e,
      scrollTop: l,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: t,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-block", h),
      style: { ...u, top: s, height: n },
      children: [
        d,
        p,
        g
      ]
    }
  );
}
var Qt, vn, At, _t, te, Q, $t, ht, ke, Is, xn, Ee, St, Te, Ne, To, Zc, No, Qc, Mo, th, Ro, eh, Ds, Rr, Cn, _n, Ps, Os, Hs, Bs, $n, ii, Lo, nh, Ao, sh, Io, ih, Nn;
let sf = (Nn = class extends W {
  constructor(t) {
    super(t);
    v(this, To);
    v(this, No);
    v(this, Mo);
    v(this, Ro);
    v(this, Ds);
    v(this, $n);
    v(this, Lo);
    v(this, Ao);
    v(this, Io);
    v(this, Qt, void 0);
    v(this, vn, void 0);
    v(this, At, void 0);
    v(this, _t, void 0);
    v(this, te, void 0);
    v(this, Q, void 0);
    v(this, $t, void 0);
    v(this, ht, void 0);
    v(this, ke, void 0);
    v(this, Is, void 0);
    v(this, xn, void 0);
    v(this, Ee, void 0);
    v(this, St, void 0);
    v(this, Te, void 0);
    v(this, Ne, void 0);
    v(this, Cn, void 0);
    v(this, _n, void 0);
    v(this, Ps, void 0);
    v(this, Os, void 0);
    v(this, Hs, void 0);
    v(this, Bs, void 0);
    this.ref = K(), C(this, Qt, 0), C(this, At, !1), C(this, Q, []), C(this, ht, /* @__PURE__ */ new Map()), C(this, ke, {}), C(this, xn, []), C(this, Ee, { in: !1 }), this.updateLayout = () => {
      f(this, Qt) && cancelAnimationFrame(f(this, Qt)), C(this, Qt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), C(this, Qt, 0);
      }));
    }, C(this, St, (e, i) => {
      i = i || e.type;
      const o = f(this, ht).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), C(this, Te, (e) => {
      f(this, St).call(this, e, `window_${e.type}`);
    }), C(this, Ne, (e) => {
      f(this, St).call(this, e, `document_${e.type}`);
    }), C(this, Cn, (e, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), e[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return f(this, Q).forEach((h) => {
        h[l] && (e = h[l].call(this, e, i, o));
      }), this.options[l] && (e = this.options[l].call(this, e, i, o)), a.setting[l] && (e = a.setting[l].call(this, e, i, o)), e;
    }), C(this, _n, (e, i) => {
      i === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), C(this, Ps, (e) => {
      var l, h, u;
      const i = this.getPointerInfo(e);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, e, { colName: r, element: a }), f(this, Q).forEach((c) => {
          var d;
          (d = c.onHeaderCellClick) == null || d.call(this, e, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((d) => d.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, e, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const d of f(this, Q))
            if (((u = d.onCellClick) == null ? void 0 : u.call(this, e, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), C(this, Os, (e) => {
      const i = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), C(this, Hs, (e) => {
      const i = y(e.target).closest(".dtable-cell");
      if (!i.length)
        return A(this, $n, ii).call(this, !1);
      A(this, $n, ii).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), C(this, Bs, () => {
      A(this, $n, ii).call(this, !1);
    }), C(this, vn, t.id ?? `dtable-${wc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, C(this, te, Object.freeze(Qd(t.plugins))), f(this, te).forEach((e) => {
      var a;
      const { methods: i, data: o, state: r } = e;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(f(this, ke), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = e.onCreate) == null || a.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = f(this, $t)) == null ? void 0 : t.options) || f(this, _t) || fl();
  }
  get plugins() {
    return f(this, Q);
  }
  get layout() {
    return f(this, $t);
  }
  get id() {
    return f(this, vn);
  }
  get data() {
    return f(this, ke);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return f(this, Ee);
  }
  componentWillReceiveProps() {
    C(this, _t, void 0);
  }
  componentDidMount() {
    f(this, At) ? this.forceUpdate() : A(this, Ds, Rr).call(this), f(this, Q).forEach((e) => {
      let { events: i } = e;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", f(this, Ps)), this.on("keydown", f(this, Os));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", f(this, Hs)), this.on("mouseleave", f(this, Bs))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(e), C(this, Is, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    f(this, Q).forEach((e) => {
      var i;
      (i = e.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    f(this, At) ? A(this, Ds, Rr).call(this) : f(this, Q).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = f(this, Is)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of f(this, ht).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), f(this, Te)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), f(this, Ne)) : t.removeEventListener(i, f(this, St));
    f(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), f(this, te).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), C(this, ke, {}), f(this, ht).clear();
  }
  on(t, e, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = f(this, ht).get(t);
    o ? o.push(e) : (f(this, ht).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), f(this, Te)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), f(this, Ne)) : (r = this.element) == null || r.addEventListener(t, f(this, St)));
  }
  off(t, e, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = f(this, ht).get(t);
    if (!o)
      return;
    const r = o.indexOf(e);
    r >= 0 && o.splice(r, 1), o.length || (f(this, ht).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), f(this, Te)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), f(this, Ne)) : (a = this.element) == null || a.removeEventListener(t, f(this, St)));
  }
  emitCustomEvent(t, e) {
    f(this, St).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: a, rowHeight: l, cols: { center: { totalWidth: h, width: u } } } = this.layout, { to: c } = t;
    let { scrollLeft: d, scrollTop: p } = t;
    if (c === "up" || c === "down")
      p = o + (c === "down" ? 1 : -1) * Math.floor(a / l) * l;
    else if (c === "left" || c === "right")
      d = i + (c === "right" ? 1 : -1) * u;
    else if (c === "top")
      p = 0;
    else if (c === "bottom")
      p = r - a;
    else if (c === "begin")
      d = 0;
    else if (c === "end")
      d = h - u;
    else {
      const { offsetLeft: b, offsetTop: x } = t;
      typeof b == "number" && (d = i + b), typeof x == "number" && (d = o + x);
    }
    const g = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, h - u)), d !== i && (g.scrollLeft = d)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - a)), p !== o && (g.scrollTop = p)), Object.keys(g).length ? (this.setState(g, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, g), e == null || e.call(this, !0);
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
    const { rows: e, rowsMap: i, allRows: o } = this.layout;
    return typeof t == "number" ? e[t] : i[t] || o.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var l;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof e == "object" ? e : this.getColInfo(e);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (l = i.data) == null ? void 0 : l[o.name];
    const { cellValueGetter: a } = this.options;
    return a && (r = a.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!f(this, _t))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      C(this, $t, void 0);
    else if (i === "options") {
      if (C(this, _t, void 0), !f(this, $t))
        return;
      C(this, $t, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const i = y(e).closest(".dtable-cell");
    if (!i.length)
      return;
    const o = i.attr("data-row"), r = i.attr("data-col");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: i[0],
        colName: r,
        rowID: o,
        target: e
      };
  }
  i18n(t, e, i) {
    return Z(f(this, xn), t, e, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    const t = A(this, Io, ih).call(this), { className: e, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", e, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": a,
      "dtable-striped": l,
      "scrollbar-hover": h
    }], d = [];
    return t && (u.width = t.width, u.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), d.push(
      A(this, To, Zc).call(this, t),
      A(this, No, Qc).call(this, t),
      A(this, Mo, th).call(this, t),
      A(this, Ro, eh).call(this, t)
    ), f(this, Q).forEach((p) => {
      var b;
      const g = (b = p.onRender) == null ? void 0 : b.call(this, t);
      g && (g.style && Object.assign(u, g.style), g.className && c.push(g.className), g.children && d.push(g.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: f(this, vn),
        className: R(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
}, Qt = new WeakMap(), vn = new WeakMap(), At = new WeakMap(), _t = new WeakMap(), te = new WeakMap(), Q = new WeakMap(), $t = new WeakMap(), ht = new WeakMap(), ke = new WeakMap(), Is = new WeakMap(), xn = new WeakMap(), Ee = new WeakMap(), St = new WeakMap(), Te = new WeakMap(), Ne = new WeakMap(), To = new WeakSet(), Zc = function(t) {
  const { header: e, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!e)
    return null;
  if (e === !0)
    return /* @__PURE__ */ m(
      ml,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: f(this, Cn)
      },
      "header"
    );
  const a = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    fr,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, No = new WeakSet(), Qc = function(t) {
  const { headerHeight: e, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ m(
    ml,
    {
      className: "dtable-body",
      top: e,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: f(this, Cn)
    },
    "body"
  );
}, Mo = new WeakSet(), th = function(t) {
  let { footer: e } = t;
  if (typeof e == "function" && (e = e.call(this, t)), !e)
    return null;
  const i = Array.isArray(e) ? e : [e];
  return /* @__PURE__ */ m(
    fr,
    {
      className: "dtable-footer",
      style: { height: t.footerHeight, top: t.rowsHeight + t.headerHeight },
      renders: i,
      generateArgs: [t],
      generatorThis: this,
      generators: t.footerGenerators
    },
    "footer"
  );
}, Ro = new WeakSet(), eh = function(t) {
  const e = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: d } = t, { scrollbarSize: p = 12, horzScrollbarPos: g } = this.options;
  return a > r && e.push(
    /* @__PURE__ */ m(
      dl,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: f(this, _n),
        left: o,
        bottom: (g === "inside" ? 0 : -p) + c,
        size: p,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: d + h } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: d + h } })
  ), u > h && e.push(
    /* @__PURE__ */ m(
      dl,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: f(this, _n),
        right: 0,
        size: p,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), e.length ? e : null;
}, Ds = new WeakSet(), Rr = function() {
  var t;
  C(this, At, !1), (t = this.options.afterRender) == null || t.call(this), f(this, Q).forEach((e) => {
    var i;
    return (i = e.afterRender) == null ? void 0 : i.call(this);
  });
}, Cn = new WeakMap(), _n = new WeakMap(), Ps = new WeakMap(), Os = new WeakMap(), Hs = new WeakMap(), Bs = new WeakMap(), $n = new WeakSet(), ii = function(t) {
  const { element: e, options: i } = this;
  if (!e)
    return;
  const o = y(e), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = f(this, Ee);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), C(this, Ee, r);
}, Lo = new WeakSet(), nh = function() {
  if (f(this, _t))
    return !1;
  const e = { ...fl(), ...f(this, te).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return C(this, _t, e), C(this, Q, f(this, te).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = e;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, e) : a)), (!r || r(l)) && (l !== e && Object.assign(e, l), i.push(o)), i;
  }, [])), C(this, xn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ao = new WeakSet(), sh = function() {
  var O, P;
  const { plugins: t } = this;
  let e = f(this, _t);
  const i = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((M) => {
    var H;
    const E = (H = M.beforeLayout) == null ? void 0 : H.call(this, e);
    E && (e = { ...e, ...E }), Object.assign(i, M.footer);
  });
  let o = e.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: M } = this;
    if (M)
      r = M.clientWidth;
    else {
      C(this, At, !0);
      return;
    }
  }
  const a = ef(this, e, t, r), { data: l, rowKey: h = "id", rowHeight: u } = e, c = [], d = (M, E, H) => {
    var z, X;
    const B = { data: H ?? { [h]: M }, id: M, index: c.length, top: 0 };
    if (H || (B.lazy = !0), c.push(B), ((z = e.onAddRow) == null ? void 0 : z.call(this, B, E)) !== !1) {
      for (const ue of t)
        if (((X = ue.onAddRow) == null ? void 0 : X.call(this, B, E)) === !1)
          return;
    }
  };
  if (typeof l == "number")
    for (let M = 0; M < l; M++)
      d(`${M}`, M);
  else
    Array.isArray(l) && l.forEach((M, E) => {
      typeof M == "object" ? d(`${M[h] ?? ""}`, E, M) : d(`${M ?? ""}`, E);
    });
  let p = c;
  const g = {};
  if (e.onAddRows) {
    const M = e.onAddRows.call(this, p);
    M && (p = M);
  }
  for (const M of t) {
    const E = (O = M.onAddRows) == null ? void 0 : O.call(this, p);
    E && (p = E);
  }
  p.forEach((M, E) => {
    g[M.id] = M, M.index = E, M.top = M.index * u;
  });
  const { header: b, footer: x } = e, w = b ? e.headerHeight || u : 0, _ = x ? e.footerHeight || u : 0;
  let $ = e.height, k = 0;
  const S = p.length * u, N = w + _ + S;
  if (typeof $ == "function" && ($ = $.call(this, N)), $ === "auto")
    k = N;
  else if (typeof $ == "object")
    k = Math.min($.max, Math.max($.min, N));
  else if ($ === "100%") {
    const { parent: M } = this;
    if (M)
      k = M.clientHeight;
    else {
      k = 0, C(this, At, !0);
      return;
    }
  } else
    k = $;
  const L = k - w - _, I = {
    options: e,
    allRows: c,
    width: r,
    height: k,
    rows: p,
    rowsMap: g,
    rowHeight: u,
    rowsHeight: L,
    rowsHeightTotal: S,
    header: b,
    footer: x,
    footerGenerators: i,
    headerHeight: w,
    footerHeight: _,
    cols: a
  }, D = (P = e.onLayout) == null ? void 0 : P.call(this, I);
  D && Object.assign(I, D), t.forEach((M) => {
    if (M.onLayout) {
      const E = M.onLayout.call(this, I);
      E && Object.assign(I, E);
    }
  }), C(this, $t, I);
}, Io = new WeakSet(), ih = function() {
  (A(this, Lo, nh).call(this) || !f(this, $t)) && A(this, Ao, sh).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: e } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, e.totalWidth - e.width), i);
  let o = 0;
  e.list.forEach((x) => {
    x.left = o, o += x.realWidth, x.visible = x.left + x.realWidth >= i && x.left <= i + e.width;
  });
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), d = u + a, p = Math.min(l.length, Math.ceil(d / h)), g = [], { rowDataGetter: b } = this.options;
  for (let x = c; x < p; x++) {
    const w = l[x];
    w.lazy && b && (w.data = b([w.id])[0], w.lazy = !1), g.push(w);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, Nn.addPlugin = Gc, Nn.removePlugin = Xc, Nn);
const of = {
  html: { component: Ws }
}, rf = {
  name: "custom",
  onRenderCell(s, n) {
    const { col: t } = n;
    let { custom: e } = t.setting;
    if (typeof e == "function" && (e = e.call(this, n)), !e)
      return s;
    const i = Array.isArray(e) ? e : [e], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: Ws,
        props: { html: Y(r, { value: n.value, ...n.row.data, $value: n.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(of[l], o == null ? void 0 : o[l]);
      const u = {};
      h.forEach((d) => {
        if (d) {
          const { props: p } = d;
          p && y.extend(u, typeof p == "function" ? p.call(this, n) : p), l = d.component || l;
        }
      }, { props: {} });
      const c = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(c, { ...u }) };
    }), s;
  }
}, af = jt(rf);
function oh(s, n, t, e) {
  if (typeof s == "function" && (s = s(n)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return t;
  const { url: i, ...o } = s, { setting: r } = n.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ m("a", { href: Y(i, n.row.data), ...e, ...o, ...a, children: t });
}
function oa(s, n, t) {
  var e;
  if (s != null)
    return t = t ?? ((e = n.row.data) == null ? void 0 : e[n.col.name]), typeof s == "function" ? s(t, n) : Y(s, t);
}
function rh(s, n, t, e) {
  var i;
  return t ? (t = t ?? ((i = n.row.data) == null ? void 0 : i[n.col.name]), s === !1 ? t : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(t, n)), pt(t, s, e ?? t))) : e ?? t;
}
function ah(s, n) {
  const { link: t } = n.col.setting, e = oh(t, n, s[0]);
  return e && (s[0] = e), s;
}
function lh(s, n) {
  const { format: t } = n.col.setting;
  return t && (s[0] = oa(t, n, s[0])), s;
}
function ch(s, n) {
  const { map: t } = n.col.setting;
  return typeof t == "function" ? s[0] = t(s[0], n) : typeof t == "object" && t && (s[0] = t[s[0]] ?? s[0]), s;
}
function hh(s, n, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: e = t, invalidDate: i } = n.col.setting;
  return s[0] = rh(e, n, s[0], i), s;
}
function Lr(s, n, t = !1) {
  const { html: e = t } = n.col.setting;
  if (e === !1)
    return s;
  const i = s[0], o = e === !0 ? i : oa(e, n, i);
  return s[0] = {
    html: o
  }, s;
}
const lf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, n) {
        return Lr(s, n, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: n }) {
        const { circleSize: t = 24, circleBorderSize: e = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = n.setting, r = (t - e) / 2, a = t / 2, l = s[0];
        return s[0] = /* @__PURE__ */ m("svg", { width: t, height: t, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r, "stroke-width": e, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r, "stroke-width": e, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + e, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
        ] }), s;
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
  onRenderCell(s, n) {
    const { formatDate: t, html: e, hint: i } = n.col.setting;
    if (t && (s = hh(s, n, t)), s = ch(s, n), s = lh(s, n), e ? s = Lr(s, n) : s = ah(s, n), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, n) : typeof i == "string" && (o = Y(i, n.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, cf = jt(lf, { buildIn: !0 });
function hf(s, n, t = !1) {
  var a, l;
  typeof s == "boolean" && (n = s, s = void 0);
  const e = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!e[h] === u || (u ? e[h] = !0 : delete e[h], i[h] = u);
  };
  if (s === void 0 ? (n === void 0 && (n = !uh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!n);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((h) => {
    r(h, n ?? !e[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, e);
    h && Object.keys(h).forEach((u) => {
      h[u] ? e[u] = !0 : delete e[u];
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function uf(s) {
  return this.state.checkedRows[s] ?? !1;
}
function uh() {
  var e, i;
  const s = (e = this.layout) == null ? void 0 : e.allRows.length;
  if (!s)
    return !1;
  const n = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? n === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : n === s;
}
function df() {
  return Object.keys(this.state.checkedRows);
}
function ff(s) {
  const { checkable: n } = this.options;
  s === void 0 && (s = !n), n !== s && this.setState({ forceCheckable: s });
}
function gl(s, n, t = !1) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${s ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const yl = 'input[type="checkbox"],.dtable-checkbox', pf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: gl
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: n } = this.state;
    return n !== void 0 ? s.checkable = n : s.checkable === "auto" && (s.checkable = !!s.cols.some((t) => t.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: hf,
    isRowChecked: uf,
    isAllRowChecked: uh,
    getChecks: df,
    toggleCheckable: ff
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: gl(s) })
      ];
    },
    checkedInfo(s, n) {
      const t = this.getChecks(), { checkInfo: e } = this.options;
      if (e)
        return [e.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: n.allRows.length })), [
        /* @__PURE__ */ m("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: n, col: t }) {
    var h;
    const { id: e } = n, { canRowCheckable: i } = this.options, o = i ? i.call(this, e) : !0;
    if (!o)
      return s;
    const { checkbox: r } = t.setting, a = typeof r == "function" ? r.call(this, e) : r, l = this.isRowChecked(e);
    if (a) {
      const u = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, e, o === "disabled");
      s.unshift(u), s.push({ outer: !0, className: "has-checkbox" });
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: n, col: t }) {
    var r;
    const { id: e } = n, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, e) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, e);
      s.unshift(l), s.push({ outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const n = s.target;
    if (!n)
      return;
    const t = n.closest(yl);
    t && (this.toggleCheckRows(t.checked), s.stopPropagation());
  },
  onCellClick(s, { rowID: n }) {
    const t = y(s.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(yl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(n, void 0, !0);
  }
}, mf = jt(pf);
var dh = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(dh || {});
function Si(s) {
  const n = this.data.nestedMap.get(s);
  if (!n || n.state !== "")
    return n ?? { state: "normal", level: -1 };
  if (!n.parent && !n.children)
    return n.state = "normal", n;
  const t = this.state.collapsedRows, e = n.children && t && t[s];
  let i = !1, { parent: o } = n;
  for (; o; ) {
    const r = Si.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return n.state = i ? "hidden" : e ? "collapsed" : n.children ? "expanded" : "normal", n.level = n.parent ? Si.call(this, n.parent).level + 1 : 0, n;
}
function gf(s) {
  return s !== void 0 ? Si.call(this, s) : this.data.nestedMap;
}
function yf(s, n) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: e } = this.data;
  if (s === "HEADER")
    if (n === void 0 && (n = !fh.call(this)), n) {
      const i = e.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    n === void 0 && (n = !t[i[0]]), i.forEach((o) => {
      const r = e.get(o);
      n && (r != null && r.children) ? t[o] = !0 : delete t[o];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...t } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function fh() {
  const s = this.data.nestedMap.values();
  for (const n of s)
    if (n.state === "expanded")
      return !1;
  return !0;
}
function ph(s, n = 0, t, e = 0) {
  var i;
  t || (t = [...s.keys()]);
  for (const o of t) {
    const r = s.get(o);
    r && (r.level === e && (r.order = n++), (i = r.children) != null && i.length && (n = ph(s, n, r.children, e + 1)));
  }
  return n;
}
function mh(s, n, t, e) {
  const i = s.getNestedRowInfo(n);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    e[o] = t, mh(s, o, t, e);
  }), i;
}
function gh(s, n, t, e, i) {
  var a;
  const o = s.getNestedRowInfo(n);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(e[l] !== void 0 ? e[l] : i[l]);
    return t === h;
  })) && (e[n] = t), o.parent && gh(s, o.parent, t, e, i);
}
const bf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, n) {
      const { nestedMap: t } = this.data, e = t.get(s.id), i = t.get(n.id);
      return (e == null ? void 0 : e.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, n, t) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const e = {};
      return Object.entries(n).forEach(([i, o]) => {
        const r = mh(this, i, o, e);
        r != null && r.parent && gh(this, r.parent, o, e, t);
      }), e;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((n) => n.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: gf,
    toggleRow: yf,
    isAllCollapsed: fh,
    getNestedRowInfo: Si
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, o;
    const { nestedMap: n } = this.data, t = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), e = n.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (e.parent = t === "0" ? void 0 : t, (o = s.data) != null && o[this.options.asParentKey ?? "asParent"] && (e.children = []), n.set(s.id, e), t) {
      let r = n.get(t);
      r || (r = {
        state: "",
        level: 0
      }, n.set(t, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (n) => this.getNestedRowInfo(n.id).state !== "hidden"
      /* hidden */
    ), ph(this.data.nestedMap), s.sort((n, t) => {
      const e = this.getNestedRowInfo(n.id), i = this.getNestedRowInfo(t.id), o = (e.order ?? 0) - (i.order ?? 0);
      return o === 0 ? n.index - t.index : o;
    }), s;
  },
  onRenderCell(s, { col: n, row: t }) {
    var a;
    const { id: e, data: i } = t, { nestedToggle: o } = n.setting, r = this.getNestedRowInfo(e);
    if (o && (r.children || r.parent) && s.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, e, n, i)) ?? /* @__PURE__ */ m("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = n.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: n, col: t }) {
    var i;
    const { id: e } = n;
    return t.setting.nestedToggle && s.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, e, t, void 0)) ?? /* @__PURE__ */ m("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const n = s.target;
    if (!(!n || !n.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: n }) {
    const t = s.target;
    if (!(!t || !this.getNestedRowInfo(n).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(n), !0;
  }
}, wf = jt(bf);
function lr(s, { row: n, col: t }) {
  const { data: e } = n, i = e ? e[t.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (e ? e[h] : i) || s[0], c = {
    size: "xs",
    className: R(o, a == null ? void 0 : a.className, "flex-none"),
    src: e ? e[r] : void 0,
    text: u,
    code: l ? e ? e[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ m(vc, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: d } = t.setting, p = typeof d == "function" ? d(t, n) : d;
    s[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      s[0],
      /* @__PURE__ */ m("div", { children: u })
    ] });
  } else
    t.type === "avatarName" && (s[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ m("span", { children: u })
    ] }));
  return s;
}
const vf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: lr
    },
    avatarBtn: {
      onRenderCell: lr
    },
    avatarName: {
      onRenderCell: lr
    }
  }
}, xf = jt(vf, { buildIn: !0 }), Cf = {
  name: "sort-type",
  onRenderHeaderCell(s, n) {
    const { col: t } = n, { sortType: e } = t.setting;
    if (e) {
      const i = e === !0 ? "none" : e;
      s.push(
        /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        s[0] = /* @__PURE__ */ m("a", { href: Y(a, { ...t.setting, sortType: r }), ...l, children: s[0] });
      }
    }
    return s;
  }
}, _f = jt(Cf, { buildIn: !0 }), cr = (s) => {
  s.length !== 1 && s.forEach((n, t) => {
    !t || n.setting.border || n.setting.group === s[t - 1].setting.group || (n.setting.border = "left");
  });
}, $f = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: n } = s;
    cr(n.left.list), cr(n.center.list), cr(n.right.list);
  }
}, Sf = jt($f), kf = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: n } = this.options;
    if (!n)
      return;
    const { cellSpanMap: t, overlayedCellSet: e } = this.data, { rows: i, cols: o, rowHeight: r } = s;
    t.clear(), e.clear();
    const a = (l, h, u) => {
      const { index: c } = h;
      l.forEach((d, p) => {
        const { index: g } = d, b = `C${g}R${c}`;
        if (e.has(b))
          return;
        const x = n.call(this, { row: h, col: d });
        if (!x)
          return;
        const w = Math.min(x.colSpan || 1, l.length - p), _ = Math.min(x.rowSpan || 1, i.length - u);
        if (w <= 1 && _ <= 1)
          return;
        let $ = 0;
        for (let k = 0; k < w; k++) {
          $ += l[p + k].realWidth;
          for (let S = 0; S < _; S++) {
            const N = `C${g + k}R${c + S}`;
            N !== b && e.add(N);
          }
        }
        t.set(b, {
          colSpan: w,
          rowSpan: _,
          width: $,
          height: r * _
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((u) => {
        a(o[u].list, l, h);
      });
    });
  },
  onRenderCell(s, { row: n, col: t }) {
    const e = `C${t.index}R${n.index}`;
    if (this.data.overlayedCellSet.has(e))
      s.push({ outer: !0, style: { display: "none", className: "cellspan-overlayed-cell" } });
    else {
      const i = this.data.cellSpanMap.get(e);
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
}, Ef = jt(kf), Tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: dh,
  avatar: xf,
  cellspan: Ef,
  checkable: mf,
  custom: af,
  group: Sf,
  nested: wf,
  renderDatetime: rh,
  renderDatetimeCell: hh,
  renderFormat: oa,
  renderFormatCell: lh,
  renderHtmlCell: Lr,
  renderLink: oh,
  renderLinkCell: ah,
  renderMapCell: ch,
  rich: cf,
  sortType: _f
}, Symbol.toStringTag, { value: "Module" })), pe = class pe extends j {
};
pe.NAME = "DTable", pe.Component = sf, pe.definePlugin = jt, pe.removePlugin = Xc, pe.plugins = Tf;
let bl = pe;
const Nf = "nav", oi = '[data-toggle="tab"]', Mf = "active";
var Me;
const ua = class ua extends dt {
  constructor() {
    super(...arguments);
    v(this, Me, 0);
  }
  active(t) {
    const e = this.$element, i = e.find(oi);
    let o = t ? y(t).closest(oi) : i.filter(`.${Mf}`);
    if (!o.length && (o = e.find(oi).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = y(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), f(this, Me) && clearTimeout(f(this, Me)), C(this, Me, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), C(this, Me, 0);
    }, 10)));
  }
};
Me = new WeakMap(), ua.NAME = "Tabs";
let Ar = ua;
y(document).on("click.tabs.zui", oi, (s) => {
  s.preventDefault();
  const n = y(s.target), t = n.closest(`.${Nf}`);
  t.length && Ar.ensure(t).active(n);
});
y(() => {
  y(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  y as $,
  ka as ActionMenu,
  Ea as ActionMenuNested,
  Wa as Avatar,
  za as BtnGroup,
  Fa as ColorPicker,
  dt as Component,
  j as ComponentFromReact,
  lt as ContextMenu,
  zs as CustomContent,
  fr as CustomRender,
  bl as DTable,
  ul as Dashboard,
  Ya as DatePicker,
  se as Dropdown,
  bc as EventBus,
  Ql as HElement,
  Ws as HtmlContent,
  et as Icon,
  Ta as Menu,
  Da as Messager,
  _r as Modal,
  Oe as ModalBase,
  kr as ModalTrigger,
  Ga as Nav,
  Xa as Pager,
  Ja as Pick,
  Za as Picker,
  Qa as Popovers,
  Pa as ProgressCircle,
  W as ReactComponent,
  tl as SearchBox,
  Wn as TIME_DAY,
  Ar as Tabs,
  qa as TimePicker,
  el as Toolbar,
  Ot as Tooltip,
  ll as Tree,
  Mr as Upload,
  cl as UploadImgs,
  id as addDate,
  y as cash,
  R as classes,
  ti as componentsMap,
  lu as convertBytes,
  du as create,
  G as createDate,
  _u as createPortal,
  K as createRef,
  ru as deepGet,
  ou as deepGetPath,
  Lf as defineFn,
  ci as delay,
  Af as dom,
  au as formatBytes,
  pt as formatDate,
  zf as formatDateSpan,
  Y as formatString,
  Hl as getClassList,
  hi as getComponent,
  U as h,
  If as hh,
  bu as htm,
  Z as i18n,
  Us as isSameDay,
  Cc as isSameMonth,
  Of as isSameWeek,
  xr as isSameYear,
  Hf as isToday,
  Wf as isTomorrow,
  J as isValidElement,
  Bf as isYesterday,
  Oa as nativeEvents,
  Hn as render,
  tc as renderCustomContent,
  vu as renderCustomResult,
  An as store,
  Bl as storeData,
  Wl as takeData
};
//# sourceMappingURL=zui.js.map
