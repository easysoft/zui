var qo = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var p = (s, e, t) => (qo(s, e, "read from private field"), t ? t.call(s) : e.get(s)), v = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, _ = (s, e, t, n) => (qo(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var A = (s, e, t) => (qo(s, e, "access private method"), t);
const Ht = document, ei = window, ml = Ht.documentElement, He = Ht.createElement.bind(Ht), gl = He("div"), Yo = He("table"), mh = He("tbody"), la = He("tr"), { isArray: Ro, prototype: yl } = Array, { concat: gh, filter: Mr, indexOf: bl, map: wl, push: yh, slice: vl, some: Rr, splice: bh } = yl, wh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, vh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, xh = /<.+>/, Ch = /^\w+$/;
function Lr(s, e) {
  const t = _h(e);
  return !s || !t && !Ae(e) && !V(e) ? [] : !t && vh.test(s) ? e.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !t && Ch.test(s) ? e.getElementsByTagName(s) : e.querySelectorAll(s);
}
class Lo {
  constructor(e, t) {
    if (!e)
      return;
    if (rr(e))
      return e;
    let n = e;
    if (nt(e)) {
      const i = t || Ht;
      if (n = wh.test(e) && Ae(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : xh.test(e) ? _l(e) : rr(i) ? i.find(e) : nt(i) ? y(i).find(e) : Lr(e, i), !n)
        return;
    } else if (Be(e))
      return this.ready(e);
    (n.nodeType || n === ei) && (n = [n]), this.length = n.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = n[i];
  }
  init(e, t) {
    return new Lo(e, t);
  }
}
const T = Lo.prototype, y = T.init;
y.fn = y.prototype = T;
T.length = 0;
T.splice = bh;
typeof Symbol == "function" && (T[Symbol.iterator] = yl[Symbol.iterator]);
function rr(s) {
  return s instanceof Lo;
}
function xn(s) {
  return !!s && s === s.window;
}
function Ae(s) {
  return !!s && s.nodeType === 9;
}
function _h(s) {
  return !!s && s.nodeType === 11;
}
function V(s) {
  return !!s && s.nodeType === 1;
}
function $h(s) {
  return !!s && s.nodeType === 3;
}
function Sh(s) {
  return typeof s == "boolean";
}
function Be(s) {
  return typeof s == "function";
}
function nt(s) {
  return typeof s == "string";
}
function rt(s) {
  return s === void 0;
}
function An(s) {
  return s === null;
}
function xl(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Ar(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
}
y.isWindow = xn;
y.isFunction = Be;
y.isArray = Ro;
y.isNumeric = xl;
y.isPlainObject = Ar;
function q(s, e, t) {
  if (t) {
    let n = s.length;
    for (; n--; )
      if (e.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Ar(s)) {
    const n = Object.keys(s);
    for (let i = 0, o = n.length; i < o; i++) {
      const r = n[i];
      if (e.call(s[r], r, s[r]) === !1)
        return s;
    }
  } else
    for (let n = 0, i = s.length; n < i; n++)
      if (e.call(s[n], n, s[n]) === !1)
        return s;
  return s;
}
y.each = q;
T.each = function(s) {
  return q(this, s);
};
T.empty = function() {
  return this.each((s, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ni(...s) {
  const e = Sh(s[0]) ? s.shift() : !1, t = s.shift(), n = s.length;
  if (!t)
    return {};
  if (!n)
    return ni(e, y, t);
  for (let i = 0; i < n; i++) {
    const o = s[i];
    for (const r in o)
      e && (Ro(o[r]) || Ar(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), ni(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
y.extend = ni;
T.extend = function(s) {
  return ni(T, s);
};
const kh = /\S+/g;
function Ao(s) {
  return nt(s) ? s.match(kh) || [] : [];
}
T.toggleClass = function(s, e) {
  const t = Ao(s), n = !rt(e);
  return this.each((i, o) => {
    V(o) && q(t, (r, a) => {
      n ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
T.addClass = function(s) {
  return this.toggleClass(s, !0);
};
T.removeAttr = function(s) {
  const e = Ao(s);
  return this.each((t, n) => {
    V(n) && q(e, (i, o) => {
      n.removeAttribute(o);
    });
  });
};
function Eh(s, e) {
  if (s) {
    if (nt(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(s);
        return An(t) ? void 0 : t;
      }
      return rt(e) ? this : An(e) ? this.removeAttr(s) : this.each((t, n) => {
        V(n) && n.setAttribute(s, e);
      });
    }
    for (const t in s)
      this.attr(t, s[t]);
    return this;
  }
}
T.attr = Eh;
T.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
T.hasClass = function(s) {
  return !!s && Rr.call(this, (e) => V(e) && e.classList.contains(s));
};
T.get = function(s) {
  return rt(s) ? vl.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
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
function Th(s) {
  return rt(s) ? this.get().map((e) => V(e) || $h(e) ? e.textContent : "").join("") : this.each((e, t) => {
    V(t) && (t.textContent = s);
  });
}
T.text = Th;
function Bt(s, e, t) {
  if (!V(s))
    return;
  const n = ei.getComputedStyle(s, null);
  return t ? n.getPropertyValue(e) || void 0 : n[e] || s.style[e];
}
function kt(s, e) {
  return parseInt(Bt(s, e), 10) || 0;
}
function ca(s, e) {
  return kt(s, `border${e ? "Left" : "Top"}Width`) + kt(s, `padding${e ? "Left" : "Top"}`) + kt(s, `padding${e ? "Right" : "Bottom"}`) + kt(s, `border${e ? "Right" : "Bottom"}Width`);
}
const Ko = {};
function Nh(s) {
  if (Ko[s])
    return Ko[s];
  const e = He(s);
  Ht.body.insertBefore(e, null);
  const t = Bt(e, "display");
  return Ht.body.removeChild(e), Ko[s] = t !== "none" ? t : "block";
}
function ha(s) {
  return Bt(s, "display") === "none";
}
function Cl(s, e) {
  const t = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!t && !!e && t.call(s, e);
}
function Io(s) {
  return nt(s) ? (e, t) => Cl(t, s) : Be(s) ? s : rr(s) ? (e, t) => s.is(t) : s ? (e, t) => t === s : () => !1;
}
T.filter = function(s) {
  const e = Io(s);
  return y(Mr.call(this, (t, n) => e.call(t, n, t)));
};
function le(s, e) {
  return e ? s.filter(e) : s;
}
T.detach = function(s) {
  return le(this, s).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const Mh = /^\s*<(\w+)[^>]*>/, Rh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, ua = {
  "*": gl,
  tr: mh,
  td: la,
  th: la,
  thead: Yo,
  tbody: Yo,
  tfoot: Yo
};
function _l(s) {
  if (!nt(s))
    return [];
  if (Rh.test(s))
    return [He(RegExp.$1)];
  const e = Mh.test(s) && RegExp.$1, t = ua[e] || ua["*"];
  return t.innerHTML = s, y(t.childNodes).detach().get();
}
y.parseHTML = _l;
T.has = function(s) {
  const e = nt(s) ? (t, n) => Lr(s, n).length : (t, n) => n.contains(s);
  return this.filter(e);
};
T.not = function(s) {
  const e = Io(s);
  return this.filter((t, n) => (!nt(s) || V(n)) && !e.call(n, t, n));
};
function Ft(s, e, t, n) {
  const i = [], o = Be(e), r = n && Io(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (o) {
      const h = e(s[a]);
      h.length && yh.apply(i, h);
    } else {
      let h = s[a][e];
      for (; h != null && !(n && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function $l(s) {
  return s.multiple && s.options ? Ft(Mr.call(s.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : s.value || "";
}
function Lh(s) {
  return arguments.length ? this.each((e, t) => {
    const n = t.multiple && t.options;
    if (n || Ll.test(t.type)) {
      const i = Ro(s) ? wl.call(s, String) : An(s) ? [] : [String(s)];
      n ? q(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = rt(s) || An(s) ? "" : s;
  }) : this[0] && $l(this[0]);
}
T.val = Lh;
T.is = function(s) {
  const e = Io(s);
  return Rr.call(this, (t, n) => e.call(t, n, t));
};
y.guid = 1;
function Nt(s) {
  return s.length > 1 ? Mr.call(s, (e, t, n) => bl.call(n, e) === t) : s;
}
y.unique = Nt;
T.add = function(s, e) {
  return y(Nt(this.get().concat(y(s, e).get())));
};
T.children = function(s) {
  return le(y(Nt(Ft(this, (e) => e.children))), s);
};
T.parent = function(s) {
  return le(y(Nt(Ft(this, "parentNode"))), s);
};
T.index = function(s) {
  const e = s ? y(s)[0] : this[0], t = s ? this : y(e).parent().children();
  return bl.call(t, e);
};
T.closest = function(s) {
  const e = this.filter(s);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(s) : e;
};
T.siblings = function(s) {
  return le(y(Nt(Ft(this, (e) => y(e).parent().children().not(e)))), s);
};
T.find = function(s) {
  return y(Nt(Ft(this, (e) => Lr(s, e))));
};
const Ah = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ih = /^$|^module$|\/(java|ecma)script/i, Dh = ["type", "src", "nonce", "noModule"];
function Ph(s, e) {
  const t = y(s);
  t.filter("script").add(t.find("script")).each((n, i) => {
    if (Ih.test(i.type) && ml.contains(i)) {
      const o = He("script");
      o.text = i.textContent.replace(Ah, ""), q(Dh, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function Oh(s, e, t, n, i) {
  n ? s.insertBefore(e, t ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(e, s) : s.parentNode.insertBefore(e, t ? s : s.nextSibling), i && Ph(e, s.ownerDocument);
}
function ce(s, e, t, n, i, o, r, a) {
  return q(s, (l, h) => {
    q(y(h), (u, c) => {
      q(y(e), (d, f) => {
        const g = t ? c : f, b = t ? f : c, x = t ? u : d;
        Oh(g, x ? b.cloneNode(!0) : b, n, i, !x);
      }, a);
    }, r);
  }, o), e;
}
T.after = function() {
  return ce(arguments, this, !1, !1, !1, !0, !0);
};
T.append = function() {
  return ce(arguments, this, !1, !1, !0);
};
function Hh(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(s))
    return this;
  const e = /<script[\s>]/.test(s);
  return this.each((t, n) => {
    V(n) && (e ? y(n).empty().append(s) : n.innerHTML = s);
  });
}
T.html = Hh;
T.appendTo = function(s) {
  return ce(arguments, this, !0, !1, !0);
};
T.wrapInner = function(s) {
  return this.each((e, t) => {
    const n = y(t), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
T.before = function() {
  return ce(arguments, this, !1, !0);
};
T.wrapAll = function(s) {
  let e = y(s), t = e[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(e), this.appendTo(t);
};
T.wrap = function(s) {
  return this.each((e, t) => {
    const n = y(s)[0];
    y(t).wrapAll(e ? n.cloneNode(!0) : n);
  });
};
T.insertAfter = function(s) {
  return ce(arguments, this, !0, !1, !1, !1, !1, !0);
};
T.insertBefore = function(s) {
  return ce(arguments, this, !0, !0);
};
T.prepend = function() {
  return ce(arguments, this, !1, !0, !0, !0, !0);
};
T.prependTo = function(s) {
  return ce(arguments, this, !0, !0, !0, !1, !1, !0);
};
T.contents = function() {
  return y(Nt(Ft(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
T.next = function(s, e, t) {
  return le(y(Nt(Ft(this, "nextElementSibling", e, t))), s);
};
T.nextAll = function(s) {
  return this.next(s, !0);
};
T.nextUntil = function(s, e) {
  return this.next(e, !0, s);
};
T.parents = function(s, e) {
  return le(y(Nt(Ft(this, "parentElement", !0, e))), s);
};
T.parentsUntil = function(s, e) {
  return this.parents(e, s);
};
T.prev = function(s, e, t) {
  return le(y(Nt(Ft(this, "previousElementSibling", e, t))), s);
};
T.prevAll = function(s) {
  return this.prev(s, !0);
};
T.prevUntil = function(s, e) {
  return this.prev(e, !0, s);
};
T.map = function(s) {
  return y(gh.apply([], wl.call(this, (e, t) => s.call(e, t, e))));
};
T.clone = function() {
  return this.map((s, e) => e.cloneNode(!0));
};
T.offsetParent = function() {
  return this.map((s, e) => {
    let t = e.offsetParent;
    for (; t && Bt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || ml;
  });
};
T.slice = function(s, e) {
  return y(vl.call(this, s, e));
};
const Bh = /-([a-z])/g;
function Ir(s) {
  return s.replace(Bh, (e, t) => t.toUpperCase());
}
T.ready = function(s) {
  const e = () => setTimeout(s, 0, y);
  return Ht.readyState !== "loading" ? e() : Ht.addEventListener("DOMContentLoaded", e), this;
};
T.unwrap = function() {
  return this.parent().each((s, e) => {
    if (e.tagName === "BODY")
      return;
    const t = y(e);
    t.replaceWith(t.children());
  }), this;
};
T.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const e = s.getBoundingClientRect();
  return {
    top: e.top + ei.pageYOffset,
    left: e.left + ei.pageXOffset
  };
};
T.position = function() {
  const s = this[0];
  if (!s)
    return;
  const e = Bt(s, "position") === "fixed", t = e ? s.getBoundingClientRect() : this.offset();
  if (!e) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Bt(i, "position") === "static"; )
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
const Sl = {
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
T.prop = function(s, e) {
  if (s) {
    if (nt(s))
      return s = Sl[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((t, n) => {
        n[s] = e;
      });
    for (const t in s)
      this.prop(t, s[t]);
    return this;
  }
};
T.removeProp = function(s) {
  return this.each((e, t) => {
    delete t[Sl[s] || s];
  });
};
const Wh = /^--/;
function Dr(s) {
  return Wh.test(s);
}
const Go = {}, { style: zh } = gl, Fh = ["webkit", "moz", "ms"];
function jh(s, e = Dr(s)) {
  if (e)
    return s;
  if (!Go[s]) {
    const t = Ir(s), n = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${Fh.join(`${n} `)}${n}`.split(" ");
    q(i, (o, r) => {
      if (r in zh)
        return Go[s] = r, !1;
    });
  }
  return Go[s];
}
const Vh = {
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
function kl(s, e, t = Dr(s)) {
  return !t && !Vh[s] && xl(e) ? `${e}px` : e;
}
function Uh(s, e) {
  if (nt(s)) {
    const t = Dr(s);
    return s = jh(s, t), arguments.length < 2 ? this[0] && Bt(this[0], s, t) : s ? (e = kl(s, e, t), this.each((n, i) => {
      V(i) && (t ? i.style.setProperty(s, e) : i.style[s] = e);
    })) : this;
  }
  for (const t in s)
    this.css(t, s[t]);
  return this;
}
T.css = Uh;
function El(s, e) {
  try {
    return s(e);
  } catch {
    return e;
  }
}
const qh = /^\s+|\s+$/;
function da(s, e) {
  const t = s.dataset[e] || s.dataset[Ir(e)];
  return qh.test(t) ? t : El(JSON.parse, t);
}
function Yh(s, e, t) {
  t = El(JSON.stringify, t), s.dataset[Ir(e)] = t;
}
function Kh(s, e) {
  if (!s) {
    if (!this[0])
      return;
    const t = {};
    for (const n in this[0].dataset)
      t[n] = da(this[0], n);
    return t;
  }
  if (nt(s))
    return arguments.length < 2 ? this[0] && da(this[0], s) : rt(e) ? this : this.each((t, n) => {
      Yh(n, s, e);
    });
  for (const t in s)
    this.data(t, s[t]);
  return this;
}
T.data = Kh;
function Tl(s, e) {
  const t = s.documentElement;
  return Math.max(s.body[`scroll${e}`], t[`scroll${e}`], s.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
q([!0, !1], (s, e) => {
  q(["Width", "Height"], (t, n) => {
    const i = `${e ? "outer" : "inner"}${n}`;
    T[i] = function(o) {
      if (this[0])
        return xn(this[0]) ? e ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : Ae(this[0]) ? Tl(this[0], n) : this[0][`${e ? "offset" : "client"}${n}`] + (o && e ? kt(this[0], `margin${t ? "Top" : "Left"}`) + kt(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
q(["Width", "Height"], (s, e) => {
  const t = e.toLowerCase();
  T[t] = function(n) {
    if (!this[0])
      return rt(n) ? void 0 : this;
    if (!arguments.length)
      return xn(this[0]) ? this[0].document.documentElement[`client${e}`] : Ae(this[0]) ? Tl(this[0], e) : this[0].getBoundingClientRect()[t] - ca(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Bt(r, "boxSizing");
      r.style[t] = kl(t, i + (a === "border-box" ? ca(r, !s) : 0));
    });
  };
});
const fa = "___cd";
T.toggle = function(s) {
  return this.each((e, t) => {
    if (!V(t))
      return;
    const n = ha(t);
    (rt(s) ? n : s) ? (t.style.display = t[fa] || "", ha(t) && (t.style.display = Nh(t.tagName))) : n || (t[fa] = Bt(t, "display"), t.style.display = "none");
  });
};
T.hide = function() {
  return this.toggle(!1);
};
T.show = function() {
  return this.toggle(!0);
};
const pa = "___ce", Pr = ".", Or = { focus: "focusin", blur: "focusout" }, Nl = { mouseenter: "mouseover", mouseleave: "mouseout" }, Gh = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Hr(s) {
  return Nl[s] || Or[s] || s;
}
function Br(s) {
  const e = s.split(Pr);
  return [e[0], e.slice(1).sort()];
}
T.trigger = function(s, e) {
  if (nt(s)) {
    const [n, i] = Br(s), o = Hr(n);
    if (!o)
      return this;
    const r = Gh.test(o) ? "MouseEvents" : "HTMLEvents";
    s = Ht.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(Pr), s.___ot = n;
  }
  s.___td = e;
  const t = s.___ot in Or;
  return this.each((n, i) => {
    t && Be(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Ml(s) {
  return s[pa] = s[pa] || {};
}
function Xh(s, e, t, n, i) {
  const o = Ml(s);
  o[e] = o[e] || [], o[e].push([t, n, i]), s.addEventListener(e, i);
}
function Rl(s, e) {
  return !e || !Rr.call(e, (t) => s.indexOf(t) < 0);
}
function si(s, e, t, n, i) {
  const o = Ml(s);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Rl(r, t) || n && n !== a)
        return !0;
      s.removeEventListener(e, l);
    }));
  else
    for (e in o)
      si(s, e, t, n, i);
}
T.off = function(s, e, t) {
  if (rt(s))
    this.each((n, i) => {
      !V(i) && !Ae(i) && !xn(i) || si(i);
    });
  else if (nt(s))
    Be(e) && (t = e, e = ""), q(Ao(s), (n, i) => {
      const [o, r] = Br(i), a = Hr(o);
      this.each((l, h) => {
        !V(h) && !Ae(h) && !xn(h) || si(h, a, r, e, t);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
T.remove = function(s) {
  return le(this, s).detach().off(), this;
};
T.replaceWith = function(s) {
  return this.before(s).remove();
};
T.replaceAll = function(s) {
  return y(s).replaceWith(this), this;
};
function Jh(s, e, t, n, i) {
  if (!nt(s)) {
    for (const o in s)
      this.on(o, e, t, s[o], i);
    return this;
  }
  return nt(e) || (rt(e) || An(e) ? e = "" : rt(t) ? (t = e, e = "") : (n = t, t = e, e = "")), Be(n) || (n = t, t = void 0), n ? (q(Ao(s), (o, r) => {
    const [a, l] = Br(r), h = Hr(a), u = a in Nl, c = a in Or;
    h && this.each((d, f) => {
      if (!V(f) && !Ae(f) && !xn(f))
        return;
      const g = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !Rl(l, b.namespace.split(Pr)) || !e && (c && (b.target !== f || b.___ot === h) || u && b.relatedTarget && f.contains(b.relatedTarget)))
          return;
        let x = f;
        if (e) {
          let C = b.target;
          for (; !Cl(C, e); )
            if (C === f || (C = C.parentNode, !C))
              return;
          x = C;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return x;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return f;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const w = n.call(x, b, b.___td);
        i && si(f, h, l, e, g), w === !1 && (b.preventDefault(), b.stopPropagation());
      };
      g.guid = n.guid = n.guid || y.guid++, Xh(f, h, l, e, g);
    });
  }), this) : this;
}
T.on = Jh;
function Zh(s, e, t, n) {
  return this.on(s, e, t, n, !0);
}
T.one = Zh;
const Qh = /\r?\n/g;
function tu(s, e) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(e.replace(Qh, `\r
`))}`;
}
const eu = /file|reset|submit|button|image/i, Ll = /radio|checkbox/i;
T.serialize = function() {
  let s = "";
  return this.each((e, t) => {
    q(t.elements || [t], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || eu.test(i.type) || Ll.test(i.type) && !i.checked)
        return;
      const o = $l(i);
      if (!rt(o)) {
        const r = Ro(o) ? o : [o];
        q(r, (a, l) => {
          s += tu(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = y;
function nu(s, e) {
  if (s == null)
    return [s, void 0];
  typeof e == "string" && (e = e.split("."));
  const t = e.join(".");
  let n = s;
  const i = [n];
  for (; typeof n == "object" && n !== null && e.length; ) {
    let o = e.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), n = n[o], i.push(n), r !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(r) : n = n[r], i.push(n);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${t}".`);
  return i;
}
function su(s, e, t) {
  try {
    const n = nu(s, e), i = n[n.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Y(s, ...e) {
  if (e.length === 0)
    return s;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const t = e[0];
    return Object.keys(t).forEach((n) => {
      const i = t[n] ?? "";
      s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let t = 0; t < e.length; t++) {
    const n = e[t] ?? "";
    s = s.replace(new RegExp(`\\{${t}\\}`, "g"), `${n}`);
  }
  return s;
}
var Wr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Wr || {});
function iu(s, e = 2, t) {
  return Number.isNaN(s) ? "?KB" : (t || (s < 1024 ? t = "B" : s < 1048576 ? t = "KB" : s < 1073741824 ? t = "MB" : s < 1099511627776 ? t = "GB" : t = "TB"), (s / Wr[t]).toFixed(e) + t);
}
const ou = (s) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const t = s.match(e);
  if (!t)
    return 0;
  const n = t[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Wr[n];
};
let zr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Vt;
function ru() {
  return zr;
}
function au(s) {
  zr = s.toLowerCase();
}
function Al(s, e) {
  Vt || (Vt = {}), typeof s == "string" && (s = { [s]: e ?? {} }), y.extend(!0, Vt, s);
}
function Z(s, e, t, n, i, o) {
  Array.isArray(s) ? Vt && s.unshift(Vt) : s = Vt ? [Vt, s] : [s], typeof t == "string" && (o = i, i = n, n = t, t = void 0);
  const r = i || zr;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Vt ? `${o}.${e}` : e;
    if (a = su(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : t ? Y(a, ...Array.isArray(t) ? t : [t]) : a;
}
function lu(s, e, t, n) {
  return Z(void 0, s, e, t, n);
}
Z.addLang = Al;
Z.getLang = lu;
Z.getCode = ru;
Z.setCode = au;
Al({
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
function Il(...s) {
  const e = [], t = /* @__PURE__ */ new Map(), n = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Il(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((o) => n(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const R = (...s) => Il(...s).reduce((e, [t, n]) => (n && e.push(t), e), []).join(" ");
y.classes = R;
y.fn.setClass = function(s, ...e) {
  return this.each((t, n) => {
    const i = y(n);
    s === !0 ? i.attr("class", R(i.attr("class"), ...e)) : i.addClass(R(s, ...e));
  });
};
const Tn = /* @__PURE__ */ new WeakMap();
function Dl(s, e, t) {
  const n = Tn.has(s), i = n ? Tn.get(s) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, y(s).dataset(), i), Tn.set(s, i)) : Tn.delete(s);
}
function Pl(s, e, t) {
  let n = Tn.get(s) || {};
  return !t && s instanceof Element && (n = Object.assign({}, y(s).dataset(), n)), e === void 0 ? n : n[e];
}
y.fn.dataset = y.fn.data;
y.fn.data = function(...s) {
  if (!this.length)
    return;
  const [e, t] = s;
  return !s.length || s.length === 1 && typeof e == "string" ? Pl(this[0], e) : this.each((n, i) => Dl(i, e, t));
};
y.fn.removeData = function(s = null) {
  return this.each((e, t) => Dl(t, s));
};
y.fn._attr = y.fn.attr;
y.fn.extend({
  attr(...s) {
    const [e, t] = s;
    return !s.length || s.length === 1 && typeof e == "string" ? this._attr.apply(this, s) : typeof e == "object" ? (e && Object.keys(e).forEach((n) => {
      const i = e[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : t === null ? this.removeAttr(e) : this._attr(e, t);
  }
});
y.Event = (s, e) => {
  const [t, ...n] = s.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = t, i.___td = e, i;
};
const ii = (s, e) => new Promise((t) => {
  const n = window.setTimeout(t, s);
  e && e(n);
}), Gs = /* @__PURE__ */ new Map();
function oi(s) {
  const { zui: e } = window;
  return Gs.size || Object.keys(e).forEach((t) => {
    const n = e[t];
    !n.NAME || !n.ZUI || Gs.set(t.toLowerCase(), n);
  }), s ? Gs.get(s.toLowerCase()) : void 0;
}
function cu(s, e, t) {
  const n = oi(s);
  return n ? new n(e, t) : null;
}
function Tf(s) {
  if (s) {
    const e = oi(s);
    e && e.defineFn();
  } else
    oi(), Gs.forEach((e) => {
      e.defineFn();
    });
}
y.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const e = y(this).dataset(), t = e.zui;
    delete e.zui, cu(t, this, e);
  }), this;
};
y.fn.zui = function(s, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof s != "string") {
    const i = Pl(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), s === !0 ? o : r;
  }
  const n = oi(s);
  if (n)
    return e === !0 ? n.getAll(t) : n.query(t, e);
};
y(() => {
  y("body").zuiInit();
});
function Fr(s, e) {
  const t = y(s)[0];
  if (!t)
    return !1;
  let { viewport: n } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: b } = window, { clientHeight: x, clientWidth: w } = document.documentElement;
    n = { left: 0, top: 0, width: b || w, height: g || x };
  }
  const { left: l, top: h, width: u, height: c } = n;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const d = i <= u && i + r >= l;
  return o <= c && o + a >= h && d;
}
y.fn.isVisible = function(s) {
  return this.each((e, t) => {
    Fr(t, s);
  });
};
function jr(s, e, t = !1) {
  const n = y(s);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${y.guid++}`;
      n.append(`<script id="${i}">${e}<\/script>`), t && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, o) => {
    jr(n, o.innerHTML), o.remove();
  });
}
y.runJS = (s, ...e) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...e.map(([n]) => n), s)(...e.map(([, n]) => n)));
y.fn.runJS = function(s) {
  return this.each((e, t) => {
    jr(t, s);
  });
};
function Ol(s, e) {
  const t = y(s), { ifNeeded: n = !0, ...i } = e || {};
  return t.each((o, r) => {
    n && Fr(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
y.fn.scrollIntoView = function(s) {
  return this.each((e, t) => {
    Ol(t, s);
  });
};
y.getScript = function(s, e, t) {
  return new Promise((n) => {
    const i = y(`script[src="${s}"]`), o = () => {
      n(), t == null || t();
    };
    if (i.length) {
      if (i.dataset("loaded"))
        o();
      else {
        const a = i.data("loadCalls") || [];
        a.push(o), i.data("loadCalls", a);
      }
      return;
    }
    const r = document.createElement("script");
    r.async = !0, e && Object.assign(r, e), r.onload = () => {
      o(), (y(r).dataset("loaded", !0).data("loadCalls") || []).forEach((l) => l()), y(r).removeData("loadCalls");
    }, r.src = s, y("head").append(r);
  });
};
const Nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Fr,
  runJS: jr,
  scrollIntoView: Ol
}, Symbol.toStringTag, { value: "Module" }));
var Do, F, Hl, J, ue, ma, Bl, ar, je = {}, Wl = [], hu = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vr = Array.isArray;
function te(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function zl(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function U(s, e, t) {
  var n, i, o, r = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Do.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return Xs(s, r, n, i, null);
}
function Xs(s, e, t, n, i) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Hl };
  return i == null && F.vnode != null && F.vnode(o), o;
}
function K() {
  return { current: null };
}
function kn(s) {
  return s.children;
}
function W(s, e) {
  this.props = s, this.context = e;
}
function ri(s, e) {
  if (e == null)
    return s.__ ? ri(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? ri(s) : null;
}
function Fl(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return Fl(s);
  }
}
function ga(s) {
  (!s.__d && (s.__d = !0) && ue.push(s) && !ai.__r++ || ma !== F.debounceRendering) && ((ma = F.debounceRendering) || Bl)(ai);
}
function ai() {
  var s, e, t, n, i, o, r, a, l;
  for (ue.sort(ar); s = ue.shift(); )
    s.__d && (e = ue.length, n = void 0, i = void 0, o = void 0, a = (r = (t = s).__v).__e, (l = t.__P) && (n = [], i = [], (o = te({}, r)).__v = r.__v + 1, Ur(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, n, a ?? ri(r), r.__h, i), ql(n, r, i), r.__e != a && Fl(r)), ue.length > e && ue.sort(ar));
  ai.__r = 0;
}
function jl(s, e, t, n, i, o, r, a, l, h, u) {
  var c, d, f, g, b, x, w, C, $, k, S = 0, N = n && n.__k || Wl, L = N.length, I = L, D = e.length;
  for (t.__k = [], c = 0; c < D; c++)
    (g = t.__k[c] = (g = e[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Xs(null, g, null, null, g) : Vr(g) ? Xs(kn, { children: g }, null, null, null) : g.__b > 0 ? Xs(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, (C = uu(g, N, w = c + S, I)) === -1 ? f = je : (f = N[C] || je, N[C] = void 0, I--), Ur(s, g, f, i, o, r, a, l, h, u), b = g.__e, (d = g.ref) && f.ref != d && (f.ref && qr(f.ref, null, g), u.push(d, g.__c || b, g)), b != null && (x == null && (x = b), k = !($ = f === je || f.__v === null) && C === w, $ ? C == -1 && S-- : C !== w && (C === w + 1 ? (S++, k = !0) : C > w ? I > D - w ? (S += C - w, k = !0) : S-- : S = C < w && C == w - 1 ? C - w : 0), w = c + S, k = k || C == c && !$, typeof g.type != "function" || C === w && f.__k !== g.__k ? typeof g.type == "function" || k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = b.nextSibling : l = Ul(s, b, l) : l = Vl(g, l, s), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = x, c = L; c--; )
    N[c] != null && (typeof t.type == "function" && N[c].__e != null && N[c].__e == t.__d && (t.__d = N[c].__e.nextSibling), Yl(N[c], N[c]));
}
function Vl(s, e, t) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, e = typeof n.type == "function" ? Vl(n, e, t) : Ul(t, n.__e, e));
  return e;
}
function Ul(s, e, t) {
  return t == null || t.parentNode !== s ? s.insertBefore(e, null) : e == t && e.parentNode != null || s.insertBefore(e, t), e.nextSibling;
}
function uu(s, e, t, n) {
  var i = s.key, o = s.type, r = t - 1, a = t + 1, l = e[t];
  if (l === null || l && i == l.key && o === l.type)
    return t;
  if (n > (l != null ? 1 : 0))
    for (; r >= 0 || a < e.length; ) {
      if (r >= 0) {
        if ((l = e[r]) && i == l.key && o === l.type)
          return r;
        r--;
      }
      if (a < e.length) {
        if ((l = e[a]) && i == l.key && o === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function du(s, e, t, n, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || li(s, o, null, t[o], n);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || li(s, o, e[o], t[o], n);
}
function ya(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t ?? "") : s[e] = t == null ? "" : typeof t != "number" || hu.test(e) ? t : t + "px";
}
function li(s, e, t, n, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || ya(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || ya(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? wa : ba, o) : s.removeEventListener(e, o ? wa : ba, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in s)
        try {
          s[e] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? s.removeAttribute(e) : s.setAttribute(e, t));
    }
}
function ba(s) {
  return this.l[s.type + !1](F.event ? F.event(s) : s);
}
function wa(s) {
  return this.l[s.type + !0](F.event ? F.event(s) : s);
}
function Ur(s, e, t, n, i, o, r, a, l, h) {
  var u, c, d, f, g, b, x, w, C, $, k, S, N, L, I, D = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = F.__b) && u(e);
  try {
    t:
      if (typeof D == "function") {
        if (w = e.props, C = (u = D.contextType) && n[u.__c], $ = u ? C ? C.props.value : u.__ : n, t.__c ? x = (c = e.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? e.__c = c = new D(w, $) : (e.__c = c = new W(w, $), c.constructor = D, c.render = pu), C && C.sub(c), c.props = w, c.state || (c.state = {}), c.context = $, c.__n = n, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = te({}, c.__s)), te(c.__s, D.getDerivedStateFromProps(w, c.__s))), f = c.props, g = c.state, c.__v = e, d)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, $), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, $) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(O) {
              O && (O.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, $), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(f, g, b);
          });
        }
        if (c.context = $, c.props = w, c.__P = s, c.__e = !1, S = F.__r, N = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), L = 0; L < c._sb.length; L++)
            c.__h.push(c._sb[L]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++N < 25);
        c.state = c.__s, c.getChildContext != null && (n = te(te({}, n), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (b = c.getSnapshotBeforeUpdate(f, g)), jl(s, Vr(I = u != null && u.type === kn && u.key == null ? u.props.children : u) ? I : [I], e, t, n, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), x && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = fu(t.__e, e, t, n, i, o, r, l, h);
    (u = F.diffed) && u(e);
  } catch (O) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), F.__e(O, e, t);
  }
}
function ql(s, e, t) {
  for (var n = 0; n < t.length; n++)
    qr(t[n], t[++n], t[++n]);
  F.__c && F.__c(e, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      F.__e(o, i.__v);
    }
  });
}
function fu(s, e, t, n, i, o, r, a, l) {
  var h, u, c, d = t.props, f = e.props, g = e.type, b = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; b < o.length; b++)
      if ((h = o[b]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        s = h, o[b] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(f);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, f.is && f), o = null, a = !1;
  }
  if (g === null)
    d === f || a && s.data === f || (s.data = f);
  else {
    if (o = o && Do.call(s.childNodes), u = (d = t.props || je).dangerouslySetInnerHTML, c = f.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (d = {}, b = 0; b < s.attributes.length; b++)
          d[s.attributes[b].name] = s.attributes[b].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === s.innerHTML) || (s.innerHTML = c && c.__html || ""));
    }
    if (du(s, f, d, i, a), c)
      e.__k = [];
    else if (jl(s, Vr(b = e.props.children) ? b : [b], e, t, n, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && ri(t, 0), a, l), o != null)
      for (b = o.length; b--; )
        o[b] != null && zl(o[b]);
    a || ("value" in f && (b = f.value) !== void 0 && (b !== s.value || g === "progress" && !b || g === "option" && b !== d.value) && li(s, "value", b, d.value, !1), "checked" in f && (b = f.checked) !== void 0 && b !== s.checked && li(s, "checked", b, d.checked, !1));
  }
  return s;
}
function qr(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    F.__e(n, t);
  }
}
function Yl(s, e, t) {
  var n, i;
  if (F.unmount && F.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || qr(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        F.__e(o, e);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Yl(n[i], e, t || typeof s.type != "function");
  t || s.__e == null || zl(s.__e), s.__ = s.__e = s.__d = void 0;
}
function pu(s, e, t) {
  return this.constructor(s, t);
}
function In(s, e, t) {
  var n, i, o, r;
  F.__ && F.__(s, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Ur(e, s = (!n && t || e).__k = U(kn, null, [s]), i || je, je, e.ownerSVGElement !== void 0, !n && t ? [t] : i ? null : e.firstChild ? Do.call(e.childNodes) : null, o, !n && t ? t : i ? i.__e : e.firstChild, n, r), ql(o, s, r);
}
Do = Wl.slice, F = { __e: function(s, e, t, n) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Hl = 0, J = function(s) {
  return s != null && s.constructor === void 0;
}, W.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof s == "function" && (s = s(te({}, t), this.props)), s && te(t, s), s != null && this.__v && (e && this._sb.push(e), ga(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ga(this));
}, W.prototype.render = kn, ue = [], Bl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ar = function(s, e) {
  return s.__v.__b - e.__v.__b;
}, ai.__r = 0;
var Kl = function(s, e, t, n) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? n[0] = a : r === 4 ? n[1] = Object.assign(n[1] || {}, a) : r === 5 ? (n[1] = n[1] || {})[e[++o]] = a : r === 6 ? n[1][e[++o]] += a + "" : r ? (i = s.apply(a, Kl(s, a, t, ["", null])), n.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : n.push(a);
  }
  return n;
}, va = /* @__PURE__ */ new Map();
function mu(s) {
  var e = va.get(this);
  return e || (e = /* @__PURE__ */ new Map(), va.set(this, e)), (e = Kl(this, e.get(s) || (e.set(s, e = function(t) {
    for (var n, i, o = 1, r = "", a = "", l = [0], h = function(d) {
      o === 1 && (d || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, d, r) : o === 3 && (d || r) ? (l.push(3, d, r), o = 2) : o === 2 && r === "..." && d ? l.push(4, d, 0) : o === 2 && r && !d ? l.push(5, 0, !0, r) : o >= 5 && ((r || !d && o === 5) && (l.push(o, 0, r, i), o = 6), d && (l.push(o, d, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        n = t[u][c], o === 1 ? n === "<" ? (h(), l = [l], o = 3) : r += n : o === 4 ? r === "--" && n === ">" ? (o = 1, r = "") : r = n + r[0] : a ? n === a ? a = "" : r += n : n === '"' || n === "'" ? a = n : n === ">" ? (h(), o = 1) : o && (n === "=" ? (o = 5, i = r, r = "") : n === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (h(), o = 2) : r += n), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(s)), e), arguments, [])).length > 1 ? e : e[0];
}
const Mf = mu.bind(U);
function Gl(s) {
  const { tagName: e = "div", className: t, style: n, children: i, attrs: o, forwardRef: r, ...a } = s;
  return U(e, { ref: r, class: R(t), style: n, ...a, ...o }, i);
}
var gu = 0;
function m(s, e, t, n, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: s, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --gu, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return F.vnode && F.vnode(h), h;
}
var Bn, Wn, lr;
class Ds extends W {
  constructor() {
    super(...arguments);
    v(this, Wn);
    v(this, Bn, K());
  }
  componentDidMount() {
    A(this, Wn, lr).call(this);
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && A(this, Wn, lr).call(this);
  }
  render(t) {
    const { executeScript: n, html: i, ...o } = t;
    return /* @__PURE__ */ m(Gl, { forwardRef: p(this, Bn), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
Bn = new WeakMap(), Wn = new WeakSet(), lr = function() {
  this.props.executeScript && y(p(this, Bn).current).runJS();
};
function yu(s) {
  const {
    tag: e,
    className: t,
    style: n,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...u
  } = s, c = [t], d = { ...n }, f = [], g = [];
  return i.forEach((b) => {
    const x = [];
    if (typeof b == "string" && a && a[b] && (b = a[b]), typeof b == "function")
      if (l)
        x.push(...l.call(r, b, f, ...o));
      else {
        const w = b.call(r, f, ...o);
        w && (Array.isArray(w) ? x.push(...w) : x.push(w));
      }
    else
      x.push(b);
    x.forEach((w) => {
      w != null && (typeof w == "object" && !J(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? f.push(
        /* @__PURE__ */ m("div", { className: R(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(d, w.style), w.className && c.push(w.className), w.children && f.push(w.children), w.attrs && Object.assign(u, w.attrs)) : f.push(w));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: R(c),
    style: d,
    ...u
  }, f];
}
function cr({
  tag: s = "div",
  ...e
}) {
  const [t, n] = yu(e);
  return U(s, t, ...n);
}
function Xl(s, e, t) {
  return typeof s == "function" ? s.call(e, ...t) : Array.isArray(s) ? s.map((n) => Xl(n, e, t)) : J(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ m(Ds, { ...s }) : /* @__PURE__ */ m(Gl, { ...s }) : s;
}
function Ps(s) {
  const { content: e, generatorThis: t, generatorArgs: n } = s, i = Xl(e, t, n);
  return i == null || typeof i == "boolean" ? null : J(i) ? i : /* @__PURE__ */ m(kn, { children: i });
}
const xa = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function et(s) {
  const { icon: e, className: t, ...n } = s;
  if (!e)
    return null;
  if (J(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push(xa(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? xa(r) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ m("i", { className: R(i), ...n });
}
function bu(s) {
  return this.getChildContext = () => s.context, s.children;
}
function wu(s) {
  const e = this, t = s._container;
  e.componentWillUnmount = function() {
    In(null, e._temp), e._temp = null, e._container = null;
  }, e._container && e._container !== t && e.componentWillUnmount(), s._vnode ? (e._temp || (e._container = t, e._temp = {
    nodeType: 1,
    parentNode: t,
    childNodes: [],
    appendChild(n) {
      this.childNodes.push(n), e._container.appendChild(n);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(n, i) {
      this.childNodes.push(n), e._container.appendChild(n);
    },
    removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e._container.removeChild(n);
    }
  }), In(
    U(bu, { context: e.context }, s._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function vu(s, e) {
  const t = U(wu, { _vnode: s, _container: e });
  return t.containerInfo = e, t;
}
const xi = class xi {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    this._inited = !1;
    const { KEY: n, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = y(e);
    if (l.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = y.guid++;
    if (this._gid = h, this._element = l[0], l.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), this._options = { ...o, ...l.dataset() }, this.setOptions(t), this._key = this.options.key ?? `__${h}`, l.data(n, this).attr(i, `${h}`), r) {
      const u = `${n}:ALL`;
      let c = l.data(u);
      c || (c = /* @__PURE__ */ new Map(), l.data(u, c)), c.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      this._inited = !0, this.afterInit(), this.emit("inited", this.options);
    });
  }
  /**
   * ZUI name
   */
  static get ZUI() {
    return this.NAME.replace(/(^[A-Z]+)/, (e) => e.toLowerCase());
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
  render(e) {
    this.setOptions(e);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(e).attr(t, null), n) {
      const o = this.$element.data(`${e}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${e}:ALL`);
        else {
          const r = o.values().next().value;
          i.data(e, r).attr(t, r.gid);
        }
    }
    this._options = void 0, this._element = void 0;
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && y.extend(this._options, e), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = y.Event(e);
    return n.__src = this, this.$emitter.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t, n) {
    const i = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(e), function(o, r) {
      (!o.__src || o.__src === i) && t.call(this, o, r);
    });
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  one(e, t) {
    this.on(e, t, { once: !0 });
  }
  /**
   * Stop listening to a component event.
   * @param event     The event name.
   * @param callback  The event callback.
   */
  off(e) {
    this.$element.off(this._wrapEvent(e));
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
    return Z(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? Z(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
  _wrapEvent(e) {
    return e.split(" ").map((t) => t.includes(".") ? t : `${t}${this.namespace}`).join(" ");
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
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(t) : void 0;
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
    const { MULTI_INSTANCE: t, DATA_KEY: n } = this, i = [];
    return y(e || document).find(`[${n}]`).each((o, r) => {
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
  static query(e, t) {
    return e === void 0 ? this.getAll().sort((n, i) => n.gid - i.gid)[0] : this.get(y(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    let t = e || this.ZUI;
    y.fn[t] && (t = `zui${this.NAME}`);
    const n = this;
    y.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, u) => {
          let c = n.get(u);
          if (c ? r && c.render(r) : c = new n(u, r), a) {
            let d = c[a], f = c;
            d === void 0 && (f = c.$, d = f[a]), typeof d == "function" ? l = d.call(f, ...o) : l = d;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
};
xi.DEFAULT = {}, xi.MULTI_INSTANCE = !1;
let dt = xi;
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
    var e, t;
    (t = (e = this.$) == null ? void 0 : e.componentWillUnmount) == null || t.call(e), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(e) {
    In(
      U(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function xu({
  component: s = "div",
  className: e,
  children: t,
  style: n,
  attrs: i
}) {
  return U(s, {
    className: R(e),
    style: n,
    ...i
  }, t);
}
function Jl({
  type: s,
  component: e = "a",
  className: t,
  children: n,
  content: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: u,
  target: c,
  trailingIcon: d,
  hint: f,
  checked: g,
  onClick: b,
  data: x,
  ...w
}) {
  const C = [
    typeof g == "boolean" ? /* @__PURE__ */ m("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
    /* @__PURE__ */ m(et, { icon: h }),
    /* @__PURE__ */ m("span", { className: "text", children: u }),
    /* @__PURE__ */ m(Ps, { content: i }),
    n,
    /* @__PURE__ */ m(et, { icon: d })
  ];
  return U(e, {
    className: R(t, { disabled: a, active: l }),
    title: f,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: b,
    ...w,
    ...o
  }, ...C);
}
function Cu({
  component: s = "div",
  className: e,
  text: t,
  attrs: n,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return U(s, {
    className: R(e),
    style: r,
    onClick: a,
    ...n
  }, t, /* @__PURE__ */ m(Ps, { content: o }), i);
}
function _u({
  component: s = "div",
  className: e,
  style: t,
  space: n,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return U(s, {
    className: R(e),
    style: { width: n, height: n, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function $u({ type: s, ...e }) {
  return /* @__PURE__ */ m(cr, { ...e });
}
function Zl({
  component: s = "div",
  className: e,
  children: t,
  content: n,
  style: i,
  attrs: o
}) {
  return U(s, {
    className: R(e),
    style: i,
    ...o
  }, /* @__PURE__ */ m(Ps, { content: n }), t);
}
var It;
let Po = (It = class extends W {
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
    var e, t;
    (t = (e = this.props).beforeDestroy) == null || t.call(e, { menu: this });
  }
  afterRender(e) {
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { menu: this, firstRender: e });
  }
  handleItemClick(e, t, n, i) {
    n && n.call(i.target, i, e, t);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: e, index: t, event: i });
  }
  beforeRender() {
    var n;
    const e = { ...this.props };
    typeof e.items == "function" && (e.items = e.items(this)), e.items || (e.items = []);
    const t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = e;
    let a = { ...t };
    return i && Object.assign(a, i[t.type || "item"]), (o || t.onClick) && (a.onClick = this.handleItemClick.bind(this, a, n, t.onClick)), a.className = R(a.className), r && (a = r(a)), a;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(e, t, n), { itemRender: o } = e;
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
    const { type: r = "item", component: a, key: l = n, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: d, ...f } = i;
    if (r === "html")
      return /* @__PURE__ */ m(
        "li",
        {
          className: R("action-menu-item", `${this.name}-html`, u, f.className),
          ...h,
          style: c || f.style,
          dangerouslySetInnerHTML: { __html: f.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || It.ItemComponents[r] : a;
    return Object.assign(f, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), e.checkbox && r === "item" && f.checked === void 0 && (f.checked = !!f.active), this.renderTypedItem(g, {
      className: R(u),
      children: d,
      style: c,
      key: l,
      ...h
    }, {
      ...f,
      type: r,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: i, className: o, key: r, ...a } = t;
    return /* @__PURE__ */ m(
      "li",
      {
        className: R(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ m(e, { ...n }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: d,
      ...f
    } = e, g = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ m(g, { class: R(this.name, o), style: n, ...f, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      a
    ] });
  }
}, It.ItemComponents = {
  divider: xu,
  item: Jl,
  heading: Cu,
  space: _u,
  custom: $u,
  basic: Zl
}, It.ROOT_TAG = "menu", It.NAME = "action-menu", It);
const Ci = class Ci extends j {
};
Ci.NAME = "ActionMenu", Ci.Component = Po;
let Ca = Ci;
function Su({
  items: s,
  show: e,
  level: t,
  ...n
}) {
  return /* @__PURE__ */ m(Jl, { ...n });
}
var zn, gt, Ke, Fn;
let Yr = (Fn = class extends Po {
  constructor(t) {
    super(t);
    v(this, zn, /* @__PURE__ */ new Set());
    v(this, gt, void 0);
    v(this, Ke, (t, n, i) => {
      y(i.target).closest(".not-nested-toggle").length || (this.toggle(t, n), i.preventDefault());
    });
    _(this, gt, t.nestedShow === void 0), p(this, gt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: a, ...l } = t;
    return typeof l.items == "function" && (l.items = l.items(this)), l.items || (l.items = []), l.items.some((h) => h.items) || (l.className = R(l.className, "no-nested-items")), !r && a && (l.style = Object.assign({
      [`--${this.name}-indent`]: `${a}px`
    }, l.style)), l;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: a, itemRender: l, onClickItem: h, afterRender: u, commonItemProps: c, level: d, itemRenderProps: f } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: p(this, gt) ? this.state.nestedShow : o,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: i || this,
      commonItemProps: c,
      onClickItem: h,
      afterRender: u,
      beforeRender: a,
      beforeDestroy: r,
      itemRender: l,
      itemRenderProps: f,
      level: (d || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(n);
    return /* @__PURE__ */ m(i, { ...o, "data-level": o.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, n) {
  }
  getItemRenderProps(t, n, i) {
    const o = super.getItemRenderProps(t, n, i);
    if (o.level = t.level || 0, !this.isNestedItem(o))
      return o;
    const r = o.key ?? o.id ?? `${t.level || 0}:${i}`;
    p(this, zn).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: p(this, Ke).bind(this, r, !0),
        onMouseLeave: p(this, Ke).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        p(this, Ke).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const n = p(this, gt) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, n);
    if (!p(this, gt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...p(this, zn).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), n === void 0)
      n = !o[t];
    else if (!!o[t] == !!n)
      return !1;
    return n ? o[t] = n : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    p(this, gt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    p(this, gt) && this.setState({ nestedShow: !1 });
  }
}, zn = new WeakMap(), gt = new WeakMap(), Ke = new WeakMap(), Fn.ItemComponents = {
  item: Su
}, Fn);
const _i = class _i extends j {
};
_i.NAME = "ActionMenuNested", _i.Component = Yr;
let _a = _i;
var jn;
let Ie = (jn = class extends Yr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: t } = e;
    return t === void 0 && (t = e.items.some((n) => n.icon)), e.className = R(e.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": e.items.some((n) => this.isNestedItem(n)),
      popup: e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ m("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, jn.NAME = "menu", jn);
const $i = class $i extends j {
};
$i.NAME = "Menu", $i.Component = Ie;
let $a = $i;
class tt extends W {
  render() {
    const {
      component: e,
      type: t,
      btnType: n,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: u,
      loading: c,
      loadingIcon: d,
      loadingText: f,
      icon: g,
      text: b,
      trailingIcon: x,
      caret: w,
      square: C,
      rounded: $ = !0,
      hint: k,
      ...S
    } = this.props, N = e || (a ? "a" : "button"), L = b == null || typeof b == "string" && !b.length || c && !f, I = w && L && !g && !x && !r && !c;
    return U(
      N,
      {
        className: R("btn", t, o, {
          "btn-caret": I,
          disabled: h || c,
          active: u,
          loading: c,
          square: C === void 0 ? !I && !r && L : C
        }, i ? `size-${i}` : "", typeof $ == "string" ? $ : { rounded: $ }),
        title: k,
        [N === "a" ? "href" : "data-url"]: a,
        [N === "a" ? "target" : "data-target"]: l,
        type: N === "button" ? n : void 0,
        ...S
      },
      c ? /* @__PURE__ */ m(et, { icon: d || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(et, { icon: g }),
      L ? null : /* @__PURE__ */ m("span", { className: "text", children: c ? f : b }),
      c ? null : r,
      c ? null : /* @__PURE__ */ m(et, { icon: x }),
      c ? null : w ? /* @__PURE__ */ m("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function ku({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ m(tt, { type: t, ...n });
}
function Os(s) {
  return s.split("-")[1];
}
function Kr(s) {
  return s === "y" ? "height" : "width";
}
function Me(s) {
  return s.split("-")[0];
}
function Hs(s) {
  return ["top", "bottom"].includes(Me(s)) ? "x" : "y";
}
function Sa(s, e, t) {
  let { reference: n, floating: i } = s;
  const o = n.x + n.width / 2 - i.width / 2, r = n.y + n.height / 2 - i.height / 2, a = Hs(e), l = Kr(a), h = n[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (Me(e)) {
    case "top":
      c = { x: o, y: n.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: r };
      break;
    case "left":
      c = { x: n.x - i.width, y: r };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (Os(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Eu = async (s, e, t) => {
  const { placement: n = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: s, floating: e, strategy: i }), { x: u, y: c } = Sa(h, n, l), d = n, f = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: x, fn: w } = a[b], { x: C, y: $, data: k, reset: S } = await w({ x: u, y: c, initialPlacement: n, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: s, floating: e } });
    u = C ?? u, c = $ ?? c, f = { ...f, [x]: { ...f[x], ...k } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: e, strategy: i }) : S.rects), { x: u, y: c } = Sa(h, d, l)), b = -1);
  }
  return { x: u, y: c, placement: d, strategy: i, middlewareData: f };
};
function Bs(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function Ql(s) {
  return typeof s != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function ci(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function tc(s, e) {
  var t;
  e === void 0 && (e = {});
  const { x: n, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: f = 0 } = Bs(e, s), g = Ql(f), b = a[d ? c === "floating" ? "reference" : "floating" : c], x = ci(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: n, y: i } : r.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(C)) && await (o.getScale == null ? void 0 : o.getScale(C)) || { x: 1, y: 1 }, k = ci(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: C, strategy: l }) : w);
  return { top: (x.top - k.top + g.top) / $.y, bottom: (k.bottom - x.bottom + g.bottom) / $.y, left: (x.left - k.left + g.left) / $.x, right: (k.right - x.right + g.right) / $.x };
}
const hr = Math.min, Tu = Math.max;
function ur(s, e, t) {
  return Tu(s, hr(e, t));
}
const dr = (s) => ({ name: "arrow", options: s, async fn(e) {
  const { x: t, y: n, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = Bs(s, e) || {};
  if (l == null)
    return {};
  const u = Ql(h), c = { x: t, y: n }, d = Hs(i), f = Kr(d), g = await r.getDimensions(l), b = d === "y", x = b ? "top" : "left", w = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", $ = o.reference[f] + o.reference[d] - c[d] - o.floating[f], k = c[d] - o.reference[d], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let N = S ? S[C] : 0;
  N && await (r.isElement == null ? void 0 : r.isElement(S)) || (N = a.floating[C] || o.floating[f]);
  const L = $ / 2 - k / 2, I = N / 2 - g[f] / 2 - 1, D = hr(u[x], I), O = hr(u[w], I), P = D, M = N - g[f] - O, E = N / 2 - g[f] / 2 + L, H = ur(P, E, M), B = Os(i) != null && E != H && o.reference[f] / 2 - (E < P ? D : O) - g[f] / 2 < 0 ? E < P ? P - E : M - E : 0;
  return { [d]: c[d] - B, data: { [d]: H, centerOffset: E - H + B } };
} }), Nu = ["top", "right", "bottom", "left"];
Nu.reduce((s, e) => s.concat(e, e + "-start", e + "-end"), []);
const Mu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function hi(s) {
  return s.replace(/left|right|bottom|top/g, (e) => Mu[e]);
}
function Ru(s, e, t) {
  t === void 0 && (t = !1);
  const n = Os(s), i = Hs(s), o = Kr(i);
  let r = i === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = hi(r)), { main: r, cross: hi(r) };
}
const Lu = { start: "end", end: "start" };
function Xo(s) {
  return s.replace(/start|end/g, (e) => Lu[e]);
}
const Oo = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(e) {
    var t;
    const { placement: n, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: g = !0, ...b } = Bs(s, e), x = Me(n), w = Me(r) === r, C = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = c || (w || !g ? [hi(r)] : function(P) {
      const M = hi(P);
      return [Xo(P), M, Xo(M)];
    }(r));
    c || f === "none" || $.push(...function(P, M, E, H) {
      const B = Os(P);
      let z = function(X, he, Fs) {
        const En = ["left", "right"], js = ["right", "left"], Uo = ["top", "bottom"], ph = ["bottom", "top"];
        switch (X) {
          case "top":
          case "bottom":
            return Fs ? he ? js : En : he ? En : js;
          case "left":
          case "right":
            return he ? Uo : ph;
          default:
            return [];
        }
      }(Me(P), E === "start", H);
      return B && (z = z.map((X) => X + "-" + B), M && (z = z.concat(z.map(Xo)))), z;
    }(r, g, f, C));
    const k = [r, ...$], S = await tc(e, b), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[x]), u) {
      const { main: P, cross: M } = Ru(n, o, C);
      N.push(S[P], S[M]);
    }
    if (L = [...L, { placement: n, overflows: N }], !N.every((P) => P <= 0)) {
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
      if (n !== E)
        return { reset: { placement: E } };
    }
    return {};
  } };
}, Ho = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(e) {
    const { x: t, y: n } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = Me(a), d = Os(a), f = Hs(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, b = u && f ? -1 : 1, x = Bs(r, o);
      let { mainAxis: w, crossAxis: C, alignmentAxis: $ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return d && typeof $ == "number" && (C = d === "end" ? -1 * $ : $), f ? { x: C * b, y: w * g } : { x: w * g, y: C * b };
    }(e, s);
    return { x: t + i.x, y: n + i.y, data: i };
  } };
};
function Au(s) {
  return s === "x" ? "y" : "x";
}
const ui = function(s) {
  return s === void 0 && (s = {}), { name: "shift", options: s, async fn(e) {
    const { x: t, y: n, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (x) => {
      let { x: w, y: C } = x;
      return { x: w, y: C };
    } }, ...l } = Bs(s, e), h = { x: t, y: n }, u = await tc(e, l), c = Hs(Me(i)), d = Au(c);
    let f = h[c], g = h[d];
    if (o) {
      const x = c === "y" ? "bottom" : "right";
      f = ur(f + u[c === "y" ? "top" : "left"], f, f - u[x]);
    }
    if (r) {
      const x = d === "y" ? "bottom" : "right";
      g = ur(g + u[d === "y" ? "top" : "left"], g, g - u[x]);
    }
    const b = a.fn({ ...e, [c]: f, [d]: g });
    return { ...b, data: { x: b.x - t, y: b.y - n } };
  } };
};
function ot(s) {
  var e;
  return (s == null || (e = s.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Tt(s) {
  return ot(s).getComputedStyle(s);
}
function ec(s) {
  return s instanceof ot(s).Node;
}
function ie(s) {
  return ec(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function ft(s) {
  return s instanceof HTMLElement || s instanceof ot(s).HTMLElement;
}
function ka(s) {
  return typeof ShadowRoot < "u" && (s instanceof ot(s).ShadowRoot || s instanceof ShadowRoot);
}
function Dn(s) {
  const { overflow: e, overflowX: t, overflowY: n, display: i } = Tt(s);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(i);
}
function Iu(s) {
  return ["table", "td", "th"].includes(ie(s));
}
function fr(s) {
  const e = Gr(), t = Tt(s);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Gr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Bo(s) {
  return ["html", "body", "#document"].includes(ie(s));
}
const pr = Math.min, Ve = Math.max, di = Math.round, Vs = Math.floor, oe = (s) => ({ x: s, y: s });
function nc(s) {
  const e = Tt(s);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const i = ft(s), o = i ? s.offsetWidth : t, r = i ? s.offsetHeight : n, a = di(t) !== o || di(n) !== r;
  return a && (t = o, n = r), { width: t, height: n, $: a };
}
function Dt(s) {
  return s instanceof Element || s instanceof ot(s).Element;
}
function Xr(s) {
  return Dt(s) ? s : s.contextElement;
}
function Ue(s) {
  const e = Xr(s);
  if (!ft(e))
    return oe(1);
  const t = e.getBoundingClientRect(), { width: n, height: i, $: o } = nc(e);
  let r = (o ? di(t.width) : t.width) / n, a = (o ? di(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const Du = oe(0);
function sc(s) {
  const e = ot(s);
  return Gr() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : Du;
}
function De(s, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = s.getBoundingClientRect(), o = Xr(s);
  let r = oe(1);
  e && (n ? Dt(n) && (r = Ue(n)) : r = Ue(s));
  const a = function(d, f, g) {
    return f === void 0 && (f = !1), !(!g || f && g !== ot(d)) && f;
  }(o, t, n) ? sc(o) : oe(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const d = ot(o), f = n && Dt(n) ? ot(n) : n;
    let g = d.frameElement;
    for (; g && n && f !== d; ) {
      const b = Ue(g), x = g.getBoundingClientRect(), w = getComputedStyle(g), C = x.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, $ = x.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, h *= b.y, u *= b.x, c *= b.y, l += C, h += $, g = ot(g).frameElement;
    }
  }
  return ci({ width: u, height: c, x: l, y: h });
}
function Wo(s) {
  return Dt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Pt(s) {
  var e;
  return (e = (ec(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : e.documentElement;
}
function ic(s) {
  return De(Pt(s)).left + Wo(s).scrollLeft;
}
function Cn(s) {
  if (ie(s) === "html")
    return s;
  const e = s.assignedSlot || s.parentNode || ka(s) && s.host || Pt(s);
  return ka(e) ? e.host : e;
}
function oc(s) {
  const e = Cn(s);
  return Bo(e) ? s.ownerDocument ? s.ownerDocument.body : s.body : ft(e) && Dn(e) ? e : oc(e);
}
function fi(s, e) {
  var t;
  e === void 0 && (e = []);
  const n = oc(s), i = n === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ot(n);
  return i ? e.concat(o, o.visualViewport || [], Dn(n) ? n : []) : e.concat(n, fi(n));
}
function Ea(s, e, t) {
  let n;
  if (e === "viewport")
    n = function(i, o) {
      const r = ot(i), a = Pt(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, d = 0;
      if (l) {
        h = l.width, u = l.height;
        const f = Gr();
        (!f || f && o === "fixed") && (c = l.offsetLeft, d = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: d };
    }(s, t);
  else if (e === "document")
    n = function(i) {
      const o = Pt(i), r = Wo(i), a = i.ownerDocument.body, l = Ve(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = Ve(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + ic(i);
      const c = -r.scrollTop;
      return Tt(a).direction === "rtl" && (u += Ve(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(Pt(s));
  else if (Dt(e))
    n = function(i, o) {
      const r = De(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = ft(i) ? Ue(i) : oe(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = sc(s);
    n = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return ci(n);
}
function rc(s, e) {
  const t = Cn(s);
  return !(t === e || !Dt(t) || Bo(t)) && (Tt(t).position === "fixed" || rc(t, e));
}
function Pu(s, e, t) {
  const n = ft(e), i = Pt(e), o = t === "fixed", r = De(s, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = oe(0);
  if (n || !n && !o)
    if ((ie(e) !== "body" || Dn(i)) && (a = Wo(e)), ft(e)) {
      const h = De(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = ic(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function Ta(s, e) {
  return ft(s) && Tt(s).position !== "fixed" ? e ? e(s) : s.offsetParent : null;
}
function Na(s, e) {
  const t = ot(s);
  if (!ft(s))
    return t;
  let n = Ta(s, e);
  for (; n && Iu(n) && Tt(n).position === "static"; )
    n = Ta(n, e);
  return n && (ie(n) === "html" || ie(n) === "body" && Tt(n).position === "static" && !fr(n)) ? t : n || function(i) {
    let o = Cn(i);
    for (; ft(o) && !Bo(o); ) {
      if (fr(o))
        return o;
      o = Cn(o);
    }
    return null;
  }(s) || t;
}
const Ou = { convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: e, offsetParent: t, strategy: n } = s;
  const i = ft(t), o = Pt(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = oe(1);
  const l = oe(0);
  if ((i || !i && n !== "fixed") && ((ie(t) !== "body" || Dn(o)) && (r = Wo(t)), ft(t))) {
    const h = De(t);
    a = Ue(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: Pt, getClippingRect: function(s) {
  let { element: e, boundary: t, rootBoundary: n, strategy: i } = s;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = fi(l).filter((b) => Dt(b) && ie(b) !== "body"), d = null;
    const f = Tt(l).position === "fixed";
    let g = f ? Cn(l) : l;
    for (; Dt(g) && !Bo(g); ) {
      const b = Tt(g), x = fr(g);
      x || b.position !== "fixed" || (d = null), (f ? !x && !d : !x && b.position === "static" && d && ["absolute", "fixed"].includes(d.position) || Dn(g) && !x && rc(l, g)) ? c = c.filter((w) => w !== g) : d = b, g = Cn(g);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), n], r = o[0], a = o.reduce((l, h) => {
    const u = Ea(e, h, i);
    return l.top = Ve(u.top, l.top), l.right = pr(u.right, l.right), l.bottom = pr(u.bottom, l.bottom), l.left = Ve(u.left, l.left), l;
  }, Ea(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: Na, getElementRects: async function(s) {
  let { reference: e, floating: t, strategy: n } = s;
  const i = this.getOffsetParent || Na, o = this.getDimensions;
  return { reference: Pu(e, await i(t), n), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(s) {
  return Array.from(s.getClientRects());
}, getDimensions: function(s) {
  return nc(s);
}, getScale: Ue, isElement: Dt, isRTL: function(s) {
  return getComputedStyle(s).direction === "rtl";
} };
function Jr(s, e, t, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = n, h = Xr(s), u = i || o ? [...h ? fi(h) : [], ...fi(e)] : [];
  u.forEach((x) => {
    i && x.addEventListener("scroll", t, { passive: !0 }), o && x.addEventListener("resize", t);
  });
  const c = h && a ? function(x, w) {
    let C, $ = null;
    const k = Pt(x);
    function S() {
      clearTimeout(C), $ && $.disconnect(), $ = null;
    }
    return function N(L, I) {
      L === void 0 && (L = !1), I === void 0 && (I = 1), S();
      const { left: D, top: O, width: P, height: M } = x.getBoundingClientRect();
      if (L || w(), !P || !M)
        return;
      const E = { rootMargin: -Vs(O) + "px " + -Vs(k.clientWidth - (D + P)) + "px " + -Vs(k.clientHeight - (O + M)) + "px " + -Vs(D) + "px", threshold: Ve(0, pr(1, I)) || 1 };
      let H = !0;
      function B(z) {
        const X = z[0].intersectionRatio;
        if (X !== I) {
          if (!H)
            return N();
          X ? N(!1, X) : C = setTimeout(() => {
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
  let d, f = -1, g = null;
  r && (g = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === h && g && (g.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      g && g.observe(e);
    })), t();
  }), h && !l && g.observe(h), g.observe(e));
  let b = l ? De(s) : null;
  return l && function x() {
    const w = De(s);
    !b || w.x === b.x && w.y === b.y && w.width === b.width && w.height === b.height || t(), b = w, d = requestAnimationFrame(x);
  }(), t(), () => {
    u.forEach((x) => {
      i && x.removeEventListener("scroll", t), o && x.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, l && cancelAnimationFrame(d);
  };
}
const zo = (s, e, t) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: Ou, ...t }, o = { ...i.platform, _c: n };
  return Eu(s, e, { ...i, platform: o });
};
var Ge, Vn;
let Hu = (Vn = class extends Ie {
  constructor() {
    super(...arguments);
    v(this, Ge, 0);
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
    const t = this.ref.current, n = t == null ? void 0 : t.parentElement;
    !t || !n || zo(n, t, {
      placement: "right-start",
      middleware: [Oo(), ui(), Ho(1)]
    }).then(({ x: i, y: o }) => {
      y(t).css({
        left: i,
        top: o
      });
    });
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t);
    return {
      ...n,
      className: R("absolute", n.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), _(this, Ge, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ m("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), p(this, Ge) && clearTimeout(p(this, Ge));
  }
}, Ge = new WeakMap(), Vn.defaultProps = {
  ...Ie.defaultProps,
  popup: !0
}, Vn);
const Jo = "show", Bu = '[data-toggle="contextmenu"]';
var Mt, Xe, Un, qn, Si, ac, ki, lc;
const ze = class ze extends dt {
  constructor() {
    super(...arguments);
    v(this, Si);
    v(this, ki);
    v(this, Mt, void 0);
    v(this, Xe, void 0);
    v(this, Un, void 0);
    v(this, qn, void 0);
  }
  get isShown() {
    return p(this, Mt) && y(p(this, Mt)).hasClass(Jo);
  }
  get menu() {
    return p(this, Mt) || this.ensureMenu();
  }
  get trigger() {
    return p(this, Un) || this.element;
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
    return this.isShown || (_(this, Un, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (y(this.menu).addClass(Jo), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var n;
    return !this.isShown || ((n = p(this, qn)) == null || n.call(this), this.emit("hide").defaultPrevented) ? !1 : (y(p(this, Mt)).removeClass(Jo), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = p(this, Mt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = y(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const o = t.attr("href") || t.dataset("target") || "";
      if (o[0] === "#" && (i = y(document).find(o)), !(i != null && i.length)) {
        const r = t.next();
        r.hasClass(n) ? i = r : i = t.parent().find(`.${n}`);
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
    }), _(this, Mt, i[0]), i[0];
  }
  getPopperOptions() {
    var o;
    const { placement: t, strategy: n } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(Oo())), i;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), i = this.menu;
    _(this, qn, Jr(n, i, () => {
      zo(n, i, t).then(({ x: o, y: r, middlewareData: a, placement: l }) => {
        if (y(i).css({ left: o, top: r }), a.arrow && this.arrowEl) {
          const h = l.split("-")[0], u = A(this, Si, ac).call(this, h), { x: c, y: d } = a.arrow;
          y(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...A(this, ki, lc).call(this, h)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: n } = this.options;
    let i = n || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (In(U(Hu, t), this.menu), !0);
  }
  getPopperElement() {
    return p(this, Xe) || _(this, Xe, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: n, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: n,
            bottom: i,
            left: n
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), p(this, Xe);
  }
  static clear(t) {
    var l, h;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (n && o && ((h = (l = n.target).closest) != null && h.call(l, o)) || n && n.button === 2)
      return;
    const r = this.getAll(), a = new Set(i || []);
    for (const u of r)
      a.has(u.element) || u.hide();
  }
  static show(t) {
    const { event: n, ...i } = t, o = this.ensure(document.body);
    return o.setOptions(i), o.show(n), n instanceof Event && n.stopPropagation(), o;
  }
  static hide(t) {
    const n = this.query(t);
    return n == null || n.hide(), n;
  }
};
Mt = new WeakMap(), Xe = new WeakMap(), Un = new WeakMap(), qn = new WeakMap(), Si = new WeakSet(), ac = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, ki = new WeakSet(), lc = function(t) {
  const n = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${t[0].toUpperCase()}${t.substring(1)}Style`]: "none",
    [`border${n[t]}Style`]: "none"
  };
}, ze.MENU_CLASS = "contextmenu", ze.NAME = "ContextMenu", ze.MULTI_INSTANCE = !0, ze.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
let lt = ze;
y(document).on(`contextmenu${lt.NAMESPACE}`, (s) => {
  const e = y(s.target);
  if (e.closest(`.${lt.MENU_CLASS}`).length)
    return;
  const t = e.closest(Bu).not(":disabled,.disabled");
  if (t.length) {
    const n = `${lt.KEY}:options`, i = t.data(n), o = lt.ensure(t, i);
    i || t.data(n, o.options), o.show(s), s.preventDefault();
  }
}).on(`click${lt.NAMESPACE}`, lt.clear.bind(lt));
const Ma = '[data-toggle="dropdown"]';
var pe, me, Je, Ei, cc;
const Fe = class Fe extends lt {
  constructor() {
    super(...arguments);
    v(this, Ei);
    v(this, pe, void 0);
    v(this, me, void 0);
    v(this, Je, void 0);
    _(this, pe, !1), _(this, me, 0), this.hideLater = () => {
      p(this, Je).call(this), _(this, me, window.setTimeout(this.hide.bind(this), 100));
    }, _(this, Je, () => {
      clearTimeout(p(this, me)), _(this, me, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, n) {
    (n == null ? void 0 : n.clearOthers) !== !1 && Fe.clear({ event: n == null ? void 0 : n.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!p(this, pe) && this.isHover && A(this, Ei, cc).call(this), this.$element.addClass(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, n) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...n });
  }
  destroy() {
    p(this, pe) && y(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var i, o;
    const t = super.getPopperOptions(), n = this.getArrowSize();
    return n && this.arrowEl && ((i = t.middleware) == null || i.push(Ho(n)), (o = t.middleware) == null || o.push(dr({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const n = this.getArrowSize(), i = y('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${n}px`,
        height: `${n}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = i[0];
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: n } = t;
      t.afterRender = (...i) => {
        this.arrowEl && y(this.menu).find(".menu").each((o, r) => {
          y(r).find(".arrow-el").length === 0 && y(r).parent().hasClass("dropdown-menu") && y(r).append(this.arrowEl);
        }), n == null || n(...i);
      };
    }
    return t;
  }
};
pe = new WeakMap(), me = new WeakMap(), Je = new WeakMap(), Ei = new WeakSet(), cc = function() {
  y(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, p(this, Je)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), _(this, pe, !0);
}, Fe.MENU_CLASS = "dropdown-menu", Fe.NAME = "Dropdown", Fe.DEFAULT = {
  ...lt.DEFAULT,
  trigger: "click"
};
let ne = Fe;
const Us = `${ne.KEY}:options`;
y(document).on("click", function(s) {
  const e = y(s.target).closest(Ma).not(":disabled,.disabled");
  if (!e.length) {
    ne.clear({ event: s });
    return;
  }
  const t = e.data(Us), n = ne.ensure(e, t);
  t || e.data(Us, n.options), n.options.trigger === "click" && n.toggle();
}).on("mouseover", function(s) {
  const e = y(s.target).closest(Ma);
  if (!e.length)
    return;
  const t = e.data(Us), n = ne.ensure(e, t);
  t || e.data(Us, n.options), n.isHover && n.show();
});
let qs = 0;
window.addEventListener("scroll", (s) => {
  qs && clearTimeout(qs), qs = window.setTimeout(() => {
    ne.clear({ event: s }), qs = 0;
  }, 50);
}, !0);
var Yn, Ze;
class Wu extends W {
  constructor(t) {
    var n;
    super(t);
    v(this, Yn, void 0);
    v(this, Ze, K());
    this.state = { placement: ((n = t.dropdown) == null ? void 0 : n.placement) || "", show: !1 };
  }
  get ref() {
    return p(this, Ze);
  }
  get triggerElement() {
    return p(this, Ze).current;
  }
  componentDidMount() {
    const { items: t } = this.props, { modifiers: n = [], ...i } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: o }) => {
        var a;
        const r = ((a = o.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), _(this, Yn, ne.ensure(this.triggerElement, {
      items: t,
      ...i,
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
    var t;
    (t = p(this, Yn)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: n, dropdown: i, items: o, ...r } = this.props;
    return {
      className: R("dropdown", t),
      children: typeof n == "function" ? n(this.state) : n,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: p(this, Ze)
    };
  }
  render() {
    const { children: t, ...n } = this.beforeRender();
    return /* @__PURE__ */ m("div", { ...n, children: t });
  }
}
Yn = new WeakMap(), Ze = new WeakMap();
class hc extends Wu {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: e, show: t } = this.state, n = this.beforeRender();
    let { caret: i = !0 } = n;
    if (i !== !1 && (t || i === !0)) {
      const r = (t ? e : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return n.caret = i, /* @__PURE__ */ m(tt, { ...n });
  }
}
function uc({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ m(hc, { type: t, ...n });
}
let dc = class extends W {
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
  handleItemClick(e, t, n, i) {
    n && n.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: e, index: t, event: i });
  }
  beforeRender() {
    var n;
    const e = { ...this.props }, t = (n = e.beforeRender) == null ? void 0 : n.call(this, e);
    return t && Object.assign(e, t), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, t) {
    const { key: n = t, ...i } = e, o = e.dropdown || e.items ? hc : tt;
    return /* @__PURE__ */ m(o, { ...i }, n);
  }
  renderItem(e, t, n) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: n, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, n, t.onClick)), i) {
      const l = i.call(this, a, U);
      if (J(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, n);
  }
  render() {
    const e = this.beforeRender(), {
      className: t,
      items: n,
      size: i,
      type: o,
      btnProps: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: d,
      ...f
    } = e;
    return /* @__PURE__ */ m(
      "div",
      {
        className: R("btn-group", i ? `size-${i}` : "", t),
        ...f,
        children: [
          n && n.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function zu({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ m(dc, { type: t, ...n });
}
var ee;
let re = (ee = class extends Po {
  beforeRender() {
    const { gap: e, btnProps: t, wrap: n, ...i } = super.beforeRender();
    return i.className = R(i.className, n ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, t, n) {
    const { type: i } = n, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...t,
      ...r,
      ...n,
      className: R(`${this.name}-${i}`, t.className, r.className, n.className),
      style: Object.assign({}, t.style, r.style, n.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ m(e, { ...a });
  }
}, ee.ItemComponents = {
  item: ku,
  dropdown: uc,
  "btn-group": zu
}, ee.ROOT_TAG = "nav", ee.NAME = "toolbar", ee.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, ee);
function Fu({
  className: s,
  style: e,
  actions: t,
  heading: n,
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
  const d = J(t) ? t : t ? /* @__PURE__ */ m(re, { ...t }) : null;
  return /* @__PURE__ */ m("div", { className: R("alert", s), style: e, ...u, children: [
    /* @__PURE__ */ m(et, { icon: h, className: "alert-icon" }),
    J(i) ? i : /* @__PURE__ */ m("div", { className: R("alert-content", o), children: [
      J(n) ? n : n && /* @__PURE__ */ m("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      n ? d : null
    ] }),
    n ? null : d,
    c,
    r
  ] });
}
function ju(s) {
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
function Vu({
  margin: s,
  type: e,
  placement: t,
  animation: n,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ m(
    Fu,
    {
      className: R("messager", o, e, n === !0 ? ju(t) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Ut, We;
const Ti = class Ti extends j {
  constructor() {
    super(...arguments);
    v(this, Ut);
    this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), A(this, Ut, We).call(this, () => {
      this._show = !0, this.render(), A(this, Ut, We).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && A(this, Ut, We).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && A(this, Ut, We).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), A(this, Ut, We).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Ut = new WeakSet(), We = function(t, n = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, n);
}, Ti.NAME = "MessagerItem", Ti.Component = Vu;
let mr = Ti;
var ge, yt, Ni, fc, Mi, pc;
const Ln = class Ln extends dt {
  constructor() {
    super(...arguments);
    v(this, Ni);
    v(this, Mi);
    v(this, ge, void 0);
    v(this, yt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = p(this, yt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), A(this, Ni, fc).call(this).show();
  }
  hide() {
    var t;
    (t = p(this, yt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: n, ...i } = t, o = Ln.ensure(n || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
ge = new WeakMap(), yt = new WeakMap(), Ni = new WeakSet(), fc = function() {
  if (p(this, yt))
    p(this, yt).setOptions(this.options);
  else {
    const t = A(this, Mi, pc).call(this), n = new mr(t, this.options);
    n.on("hidden", () => {
      n.destroy(), t == null || t.remove(), _(this, ge, void 0), _(this, yt, void 0);
    }), _(this, yt, n);
  }
  return p(this, yt);
}, Mi = new WeakSet(), pc = function() {
  if (p(this, ge))
    return p(this, ge);
  const { placement: t = "top" } = this.options;
  let n = this.$element.find(`.messagers-${t}`);
  n.length || (n = y(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = n.find(`#messager-${this.gid}`);
  return i.length || (i = y(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(n), _(this, ge, i[0])), i[0];
}, Ln.NAME = "messager", Ln.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Ra = Ln;
var Kn;
let Uu = (Kn = class extends W {
  render(e) {
    const { percent: t = 50, size: n = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: u } = e, c = n / 2;
    let { circleWidth: d = 0.2 } = e;
    d < 1 && (d = n * d);
    const f = (n - d) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: f, "stroke-width": d, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: c, cy: c, r: f, "stroke-width": d, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * f * 2, "stroke-dashoffset": Math.PI * f * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ m("text", { x: h ?? c, y: u ?? c + d / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${f}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, Kn.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, Kn);
const Ri = class Ri extends j {
};
Ri.NAME = "ProgressCircle", Ri.Component = Uu;
let La = Ri;
var Rt;
class qu {
  constructor(e = "") {
    v(this, Rt, void 0);
    typeof e == "object" ? _(this, Rt, e) : _(this, Rt, document.appendChild(document.createComment(e)));
  }
  on(e, t, n) {
    p(this, Rt).addEventListener(e, t, n);
  }
  once(e, t, n) {
    p(this, Rt).addEventListener(e, t, { once: !0, ...n });
  }
  off(e, t, n) {
    p(this, Rt).removeEventListener(e, t, n);
  }
  emit(e) {
    return p(this, Rt).dispatchEvent(e), e;
  }
}
Rt = new WeakMap();
const Aa = /* @__PURE__ */ new Set([
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
class mc extends qu {
  on(e, t, n) {
    super.on(e, t, n);
  }
  off(e, t, n) {
    super.off(e, t, n);
  }
  once(e, t, n) {
    super.once(e, t, n);
  }
  emit(e, t) {
    return typeof e == "string" && (Aa.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(mc.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Aa.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
let gc = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Zo = "```ZUI_STR\n";
var Gn, ye, Qe, bt, tn, en, Js;
const na = class na {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    v(this, en);
    v(this, Gn, void 0);
    v(this, ye, void 0);
    v(this, Qe, void 0);
    v(this, bt, void 0);
    v(this, tn, void 0);
    _(this, Gn, t), _(this, Qe, e ?? gc()), _(this, ye, `ZUI_STORE:${p(this, Qe)}`), _(this, bt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return p(this, Gn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (p(this, tn) || _(this, tn, new na(p(this, Qe), "session")), p(this, tn));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const n = p(this, bt).getItem(A(this, en, Js).call(this, e));
    if (typeof n == "string") {
      if (n.startsWith(Zo))
        return n.substring(Zo.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, t) {
    if (t == null)
      return this.remove(e);
    p(this, bt).setItem(A(this, en, Js).call(this, e), typeof t == "string" ? `${Zo}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    p(this, bt).removeItem(A(this, en, Js).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < p(this, bt).length; t++) {
      const n = p(this, bt).key(t);
      if (n != null && n.startsWith(p(this, ye))) {
        const i = p(this, bt).getItem(n);
        typeof i == "string" && e(n.substring(p(this, ye).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((t, n) => {
      e[t] = n;
    }), e;
  }
};
Gn = new WeakMap(), ye = new WeakMap(), Qe = new WeakMap(), bt = new WeakMap(), tn = new WeakMap(), en = new WeakSet(), Js = function(e) {
  return `${p(this, ye)}:${e}`;
};
let pi = na;
const Nn = new pi("DEFAULT");
function Yu(s, e = "local") {
  return new pi(s, e);
}
Object.assign(Nn, { create: Yu });
function Ku(s) {
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
function Gu(s) {
  const [e, t, n] = typeof s == "string" ? Ku(s) : s;
  return e * 0.299 + t * 0.587 + n * 0.114 > 186;
}
function Ia(s, e) {
  return Gu(s) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Da(s, e = 255) {
  return Math.min(Math.max(s, 0), e);
}
function Xu(s, e, t) {
  s = s % 360 / 360, e = Da(e), t = Da(t);
  const n = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - n, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (n - i) * r * 6 : r * 2 < 1 ? n : r * 3 < 2 ? i + (n - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function Ju(s) {
  let e = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let t = 0; t < s.length; ++t)
      e += (t + 1) * s.charCodeAt(t);
  return e;
}
function Zu(s, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= e ? s : s.substring(s.length - e) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= e ? s : s.substring(0, e);
}
let yc = class extends W {
  render() {
    const {
      className: e,
      style: t,
      size: n = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: u = 2,
      src: c,
      hueDistance: d = 43,
      saturation: f = 0.4,
      lightness: g = 0.6,
      children: b,
      ...x
    } = this.props, w = ["avatar", e], C = { ...t, background: r, color: a };
    let $ = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, $ = n) : (w.push(`size-${n}`), $ = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : o && (typeof o == "number" ? C.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let k;
    if (c)
      w.push("has-img"), k = /* @__PURE__ */ m("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const S = Zu(l, u);
      if (w.push("has-text", `has-text-${S.length}`), r)
        !a && r && (C.color = Ia(r));
      else {
        const L = h ?? l, I = (typeof L == "number" ? L : Ju(L)) * d % 360;
        if (C.background = `hsl(${I},${f * 100}%,${g * 100}%)`, !a) {
          const D = Xu(I, f, g);
          C.color = Ia(D);
        }
      }
      let N;
      $ && $ < 14 * S.length && (N = { transform: `scale(${$ / (14 * S.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ m("div", { "data-actualSize": $, className: "avatar-text", style: N, children: S });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        className: R(w),
        style: C,
        ...x,
        children: [
          k,
          b
        ]
      }
    );
  }
};
const Li = class Li extends j {
};
Li.NAME = "Avatar", Li.Component = yc;
let Pa = Li;
const Ai = class Ai extends j {
};
Ai.NAME = "BtnGroup", Ai.Component = dc;
let Oa = Ai;
const gr = Symbol("EVENT_PICK");
var nn;
class Zr extends W {
  constructor(t) {
    super(t);
    v(this, nn, void 0);
    this._handleClick = this._handleClick.bind(this), _(this, nn, !!y(`#${t.id}`).length);
  }
  get hasInput() {
    return p(this, nn);
  }
  _handleClick(t) {
    const { togglePop: n, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const a = y(t.target), l = o == null ? void 0 : o(t);
    if (!t.defaultPrevented) {
      if (typeof l == "boolean")
        r = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          n(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => n(r));
    }
  }
  _getClass(t) {
    const { state: n, className: i } = t, { open: o, disabled: r } = n;
    return R(
      "pick",
      i,
      o && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: n, style: i, attrs: o } = t;
    return {
      id: `pick-${n}`,
      className: this._getClass(t),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...o
    };
  }
  _renderTrigger(t) {
    const { children: n, state: i } = t;
    return n ?? i.value;
  }
  _renderValue(t) {
    const { name: n, state: { value: i = "" }, id: o } = t;
    if (n)
      if (p(this, nn))
        y(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: n, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: n } = this.props;
    y(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === gr)
        return;
      const r = i.target.value;
      r !== n.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    y(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: n, state: i, name: o } = this.props;
    o && t.state.value !== i.value && y(`#${n}`).trigger("change", gr);
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
nn = new WeakMap();
var be, wt, qt;
class bc extends W {
  constructor(t) {
    super(t);
    v(this, be, void 0);
    v(this, wt, void 0);
    v(this, qt, void 0);
    _(this, be, K()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = y(n.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return y(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = p(this, be)) == null ? void 0 : t.current;
  }
  get container() {
    return p(this, qt);
  }
  _handleClick(t) {
    const { togglePop: n } = this.props, i = y(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), n(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(t) {
    const { className: n, state: i } = t, { open: o } = i;
    return R(
      "pick-pop",
      n,
      o === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: n,
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
      id: `pick-pop-${n}`,
      className: this._getClass(t),
      style: h,
      ref: p(this, be),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!p(this, qt)) {
      const n = y(t.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = y("<div>").addClass("pick-container").appendTo(n)), _(this, qt, i[0]);
    }
    return p(this, qt);
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: n, props: i } = this, { state: o } = i;
    if (!t || !n || !o.open) {
      p(this, wt) && (p(this, wt).call(this), _(this, wt, void 0));
      return;
    }
    p(this, wt) || _(this, wt, Jr(n, t, () => {
      const { placement: r, width: a } = i;
      zo(n, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Oo() : null, ui(), Ho(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var u, c;
        y(t).css({
          left: l,
          top: h,
          width: a === "100%" ? y(n).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), a === "100%" && y(t).css({ width: y(t).width() });
    }));
  }
  componentDidMount() {
    var t, n;
    this.layout(), y(document).on("click", this._handleDocClick), (n = (t = this.props).afterRender) == null || n.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    y(document).off("click", this._handleDocClick);
    const t = p(this, wt);
    t && (t(), _(this, wt, void 0)), _(this, qt, void 0), _(this, be, void 0), y(`pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(t) {
    return vu(this._render(t), this._getContainer(t));
  }
}
be = new WeakMap(), wt = new WeakMap(), qt = new WeakMap();
var Xn, it, we, Re;
let Wt = (Re = class extends W {
  constructor(t) {
    super(t);
    v(this, Xn, void 0);
    v(this, it, void 0);
    v(this, we, void 0);
    _(this, it, 0), _(this, we, K()), this.changeState = (n, i) => new Promise((o) => {
      this.setState(n, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (n, i) => {
      this.props.disabled && (n = !1);
      const { state: o } = this;
      if (typeof n == "boolean" && n === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      p(this, it) && (clearTimeout(p(this, it)), _(this, it, 0));
      let r = await this.changeState((l) => (n = n ?? !l.open, {
        open: n ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await ii(200, (l) => {
        _(this, it, l);
      }), _(this, it, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await ii(50, (l) => {
        _(this, it, l);
      }), _(this, it, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, _(this, Xn, t.id ?? `_pick${y.guid++}`);
  }
  get id() {
    return p(this, Xn);
  }
  get pop() {
    return p(this, we).current;
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, n) {
    return {
      id: this.id,
      state: n,
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
  _getPopProps(t, n) {
    return {
      id: this.id,
      state: n,
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
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, n) {
    const { onChange: i } = this.props;
    i && i(t, n);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, n) {
    const { open: i } = this.state, { open: o } = n;
    if (i === o)
      return;
    const { onPopShow: r, onPopHide: a } = this.props;
    o && r ? r() : !o && a && a();
  }
  componentDidUpdate(t, n) {
    const { open: i, value: o } = this.state, { open: r, value: a } = n;
    if (!!i != !!r) {
      const { onPopShown: l, onPopHidden: h } = this.props;
      i && l ? l() : !i && h && h();
    }
    o !== a && this._handleChange(o, a), this._afterRender();
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this), p(this, it) && clearTimeout(p(this, it));
    const t = p(this, we).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: i } = n, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ m(a, { ref: p(this, we), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ m(kn, { children: [
      /* @__PURE__ */ m(o, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
}, Xn = new WeakMap(), it = new WeakMap(), we = new WeakMap(), Re.Trigger = Zr, Re.Pop = bc, Re.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, Re);
var Jn;
let Qu = (Jn = class extends Wt {
  constructor(e) {
    super(e), this.state.value === void 0 && e.required && (this.state.value = this.getColors()[0]);
  }
  getColors() {
    const { colors: e } = this.props;
    return typeof e == "string" ? e.split(",") : e || [];
  }
  componentDidMount() {
    this.syncColor();
  }
  syncColor() {
    const { syncBackground: e, syncBorder: t, syncColor: n, syncValue: i } = this.props, o = this.state.value || "";
    if (e && y(e).css("backgroundColor", o), t && y(t).css("borderColor", o), n && y(n).css("color", o), i) {
      const r = y(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(e, t) {
    this.props.disabled || (super._handleChange(e, t), this.syncColor());
  }
  _renderTrigger(e, t) {
    const { icon: n } = e, { value: i } = t;
    return [
      n ? /* @__PURE__ */ m(et, { icon: n }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(e, t) {
    const n = super._getTriggerProps(e, t);
    return n.style = y.extend({
      color: t.value
    }, n.style), n.className = R("color-picker", n.className, { disabled: e.disabled }), n;
  }
  _renderPop(e, t) {
    const { closeBtn: n, heading: i } = e, o = this.getColors(), { value: r } = t;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ m(et, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(et, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, Jn.defaultProps = {
  ...Wt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, Jn);
const Ii = class Ii extends j {
};
Ii.NAME = "ColorPicker", Ii.Component = Qu;
let Ha = Ii;
const Pn = 24 * 60 * 60 * 1e3, G = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), td = (s, e, t = "day") => {
  if (typeof e == "string") {
    const n = Number.parseInt(e, 10);
    t = e.replace(n.toString(), ""), e = n;
  }
  return s = new Date(G(s).getTime()), t === "month" ? s.setMonth(s.getMonth() + e) : t === "year" ? s.setFullYear(s.getFullYear() + e) : t === "week" ? s.setDate(s.getDate() + e * 7) : t === "hour" ? s.setHours(s.getHours() + e) : t === "minute" ? s.setMinutes(s.getMinutes() + e) : t === "second" ? s.setSeconds(s.getSeconds() + e) : s.setDate(s.getDate() + e), s;
}, Ws = (s, e = /* @__PURE__ */ new Date()) => G(s).toDateString() === G(e).toDateString(), yr = (s, e = /* @__PURE__ */ new Date()) => G(s).getFullYear() === G(e).getFullYear(), wc = (s, e = /* @__PURE__ */ new Date()) => (s = G(s), e = G(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), Af = (s, e = /* @__PURE__ */ new Date()) => {
  s = G(s), e = G(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, If = (s, e) => Ws(G(e), s), Df = (s, e) => Ws(G(e).getTime() - Pn, s), Pf = (s, e) => Ws(G(e).getTime() + Pn, s), pt = (s, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (s = G(s), Number.isNaN(s.getDay()))
    return t;
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", yr(s) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${n[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, Of = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = pt(s, yr(s) ? n.month : n.full);
  if (Ws(s, e))
    return i;
  const o = pt(e, yr(s, e) ? wc(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
};
var Zn, Qn;
class ed extends W {
  constructor() {
    super(...arguments);
    v(this, Zn, K());
    v(this, Qn, (t, n) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    y(p(this, Zn).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: n = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += n)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: p(this, Zn), children: [
      /* @__PURE__ */ m(
        Ie,
        {
          className: l,
          items: r,
          onClickItem: p(this, Qn).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        Ie,
        {
          className: l,
          items: a,
          onClickItem: p(this, Qn).bind(this, "minute")
        }
      )
    ] });
  }
}
Zn = new WeakMap(), Qn = new WeakMap();
const Ba = (s) => {
  if (!s)
    return;
  const e = G(`1999-01-01 ${s}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var Di, Pi, Oi, Hi, ts;
let nd = (ts = class extends Wt {
  constructor(t) {
    super(t);
    v(this, Di, () => {
      this.toggle(!0);
    });
    v(this, Pi, (t) => {
      this.setTime(t.target.value);
    });
    v(this, Oi, (t, n) => {
      this.setTime({ [t]: n });
    });
    v(this, Hi, () => {
      this.setTime("");
    });
    const n = this.state;
    n.value === "now" && (n.value = pt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let n = "";
    if (typeof t == "string")
      n = t;
    else {
      const [l, h] = (this.state.value || "00:00").split(":"), { hour: u = +l, minute: c = +h } = t;
      n = `${u}:${c}`;
    }
    const i = Ba(n), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? pt(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(n);
    });
  }
  getTime() {
    const t = Ba(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: i, name: o, icon: r, required: a, disabled: l, readonly: h } = t, { value: u = "", open: c } = n, d = `time-picker-${this.id}`;
    let f;
    return c && !a && u.length ? f = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: p(this, Hi), children: /* @__PURE__ */ m("span", { className: "close" }) }) : r && (r === !0 ? f = /* @__PURE__ */ m("i", { class: "i-time" }) : f = /* @__PURE__ */ m(et, { icon: r })), [
      /* @__PURE__ */ m("input", { name: o, id: d, type: "text", class: "form-control", placeholder: i, value: u, disabled: l, readOnly: h, onFocus: p(this, Di), onChange: p(this, Pi) }, "input"),
      f ? /* @__PURE__ */ m("label", { for: d, class: "input-control-suffix", children: f }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const i = super._getTriggerProps(t, n);
    return {
      ...i,
      className: R(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, i] = this.getTime() || [];
    return /* @__PURE__ */ m(ed, { hour: n, minute: i, minuteStep: t.minuteStep, onChange: p(this, Oi) });
  }
}, Di = new WeakMap(), Pi = new WeakMap(), Oi = new WeakMap(), Hi = new WeakMap(), ts.defaultProps = {
  ...Wt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, ts);
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
const sd = (s, e, t = 0) => {
  const n = new Date(s, e - 1, 1), i = new Date(s, e, 0), o = n.getDay(), r = n.getTime() - (7 + o - t) % 7 * Pn;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: n.getTime()
  };
}, Wa = (s, e) => new Set((Array.isArray(s) ? s : [s]).map((t) => pt(t, e)));
var Bi;
class id extends W {
  constructor() {
    super(...arguments);
    v(this, Bi, (t) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = y(t.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(t) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = Z.getLang("weekNames"),
      monthNames: r = Z.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], d = "btn ghost square rounded-full";
    for (let N = 0; N < 7; N++) {
      const L = (i + N) % 7;
      c.push(/* @__PURE__ */ m("div", { className: R("col mini-calendar-day", { "is-weekend": L === 0 || L === 6 }), children: /* @__PURE__ */ m("div", { children: o ? o[L] : L }) }, N));
    }
    const { startTime: f, days: g, firstDay: b } = sd(a, l, i), x = b + g * Pn;
    let w = f;
    const C = [], $ = "yyyy-MM-dd", k = Wa(h, $), S = Wa(u, $);
    for (; w <= x; ) {
      const N = [];
      for (let L = 0; L < 7; L++) {
        const I = new Date(w), D = I.getDate(), O = pt(I, $), P = I.getDay(), M = wc(I, b), E = R("col mini-calendar-day", {
          active: k.has(O),
          selected: S.has(O),
          "is-first": D === 1,
          "is-in-month": M,
          "is-out-month": !M,
          "is-today": Ws(I, n),
          "is-weekend": P === 0 || P === 6
        });
        N.push(
          /* @__PURE__ */ m("div", { className: E, "data-date": O, children: /* @__PURE__ */ m("a", { className: d, onClick: p(this, Bi), children: D === 1 && r ? r[I.getMonth()] : I.getDate() }) }, O)
        ), w += Pn;
      }
      C.push(/* @__PURE__ */ m("div", { className: "row", children: N }, w));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: c }),
      C
    ] });
  }
}
Bi = new WeakMap();
var es, Wi;
class za extends W {
  constructor() {
    super(...arguments);
    v(this, es, K());
    v(this, Wi, (t) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const o = y(t.target).closest("[data-value]").dataset("value");
      o && (n(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    y(p(this, es).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: n, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ m(tt, { type: "ghost", "data-value": h, active: h === r, className: R(l === h ? "is-current" : ""), onClick: p(this, Wi), children: h }, h));
    return /* @__PURE__ */ m("div", { className: n, ref: p(this, es), children: a });
  }
}
es = new WeakMap(), Wi = new WeakMap();
var sn, ns, ss, is, os, rs, zi, vc, Fi, xc;
class od extends W {
  constructor(t) {
    super(t);
    v(this, zi);
    v(this, Fi);
    v(this, sn, void 0);
    v(this, ns, void 0);
    v(this, ss, void 0);
    v(this, is, void 0);
    v(this, os, void 0);
    v(this, rs, void 0);
    _(this, sn, K()), _(this, ns, (r) => {
      const a = y(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), _(this, ss, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), _(this, is, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), _(this, os, (r) => {
      this.setState({ year: r, select: "day" });
    }), _(this, rs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = td(h, r.substring(5).replace("+", ""))), r = pt(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, r);
    };
    const { date: n } = t, i = /* @__PURE__ */ new Date(), o = n ? new Date(n) : void 0;
    this.state = { select: "day", year: o ? o.getFullYear() : i.getFullYear(), month: o ? o.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(t) {
    this.setState((n) => n.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    y(p(this, sn).current).find(".active").scrollIntoView();
  }
  render(t, n) {
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
    } = n, f = d === "day", g = G(t.minDate || "1970-1-1"), b = G(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: p(this, sn), onClick: p(this, ns), children: [
      A(this, zi, vc).call(this, t),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(tt, { type: d === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Y(o, u) }),
          /* @__PURE__ */ m(tt, { type: d === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          f ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: p(this, ss), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(tt, { type: "ghost", size: "sm", square: !0, onClick: p(this, is), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        f ? /* @__PURE__ */ m(
          id,
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
          za,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: b.getFullYear(),
            onChange: p(this, os)
          }
        ) : d === "month" ? /* @__PURE__ */ m(
          za,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: p(this, rs)
          }
        ) : null,
        f ? A(this, Fi, xc).call(this, t) : null
      ] })
    ] });
  }
}
sn = new WeakMap(), ns = new WeakMap(), ss = new WeakMap(), is = new WeakMap(), os = new WeakMap(), rs = new WeakMap(), zi = new WeakSet(), vc = function(t) {
  let { menu: n } = t;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m(Ie, { ...n })) : null;
}, Fi = new WeakSet(), xc = function(t) {
  let { actions: n } = t;
  const { todayText: i, clearText: o } = t;
  return n || (n = [{ text: i, "data-set-date": pt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(re, { btnProps: { className: "ghost text-primary" }, ...n }),
    o ? /* @__PURE__ */ m(tt, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var as, ls, cs, hs;
let rd = (hs = class extends Wt {
  constructor(t) {
    super(t);
    v(this, as, void 0);
    v(this, ls, void 0);
    v(this, cs, void 0);
    _(this, as, () => {
      this.toggle(!0);
    }), _(this, ls, (i) => {
      this.setDate(i.target.value);
    }), _(this, cs, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = G(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : pt(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: n } = this.state;
    n && (this.state.value = pt(n === "today" ? /* @__PURE__ */ new Date() : n, t.format));
  }
  _renderTrigger(t, n) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = n, c = `date-picker-${this.id}`;
    let d;
    return u && !r && h.length ? d = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: p(this, cs), children: /* @__PURE__ */ m("span", { className: "close" }) }) : o && (o === !0 ? d = /* @__PURE__ */ m("i", { class: "i-calendar" }) : d = /* @__PURE__ */ m(et, { icon: o })), [
      /* @__PURE__ */ m("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: p(this, as), onChange: p(this, ls) }, "input"),
      d ? /* @__PURE__ */ m("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const i = super._getTriggerProps(t, n);
    return {
      ...i,
      className: R(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const i = super._getPopProps(t, n);
    return {
      ...i,
      className: R(i.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = Z.getLang("today"), clearText: h, menu: u, actions: c, minDate: d, maxDate: f, required: g } = t;
    return /* @__PURE__ */ m(
      od,
      {
        onChange: this.setDate,
        date: n.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: g ? "" : h,
        menu: u,
        actions: c,
        minDate: d,
        maxDate: f
      }
    );
  }
}, as = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), hs.defaultProps = {
  ...Wt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, hs);
const ji = class ji extends j {
};
ji.NAME = "TimePicker", ji.Component = nd;
let Fa = ji;
const Vi = class Vi extends j {
};
Vi.NAME = "DatePicker", Vi.Component = rd;
let ja = Vi;
const Qo = "show", Va = "in", ad = '[data-dismiss="modal"]';
var ve, Yt, on, Ui, rn, Zs;
const mt = class mt extends dt {
  constructor() {
    super(...arguments);
    v(this, rn);
    v(this, ve, 0);
    v(this, Yt, void 0);
    v(this, on, void 0);
    v(this, Ui, (t) => {
      const n = t.target, i = n.closest(".modal");
      !i || i !== this.modalElement || (n.closest(ad) || this.options.backdrop === !0 && n === i) && (t.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Qo);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return p(this, Yt);
  }
  _observeResize() {
    var t;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (t = p(this, Yt)) == null || t.disconnect();
      const { dialog: n } = this;
      if (n) {
        const i = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const o = n.clientWidth, r = n.clientHeight, [a, l] = p(this, on) || [];
          (a !== o || l !== r) && (_(this, on, [o, r]), this.layout());
        });
        i.observe(n), _(this, Yt, i);
      }
    }
  }
  afterInit() {
    this.on("click", p(this, Ui)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = p(this, Yt)) == null || t.disconnect(), _(this, Yt, void 0);
  }
  show(t) {
    const { modalElement: n } = this;
    if (this.shown)
      return y(n).css("z-index", `${mt.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: i, backdrop: o, className: r, style: a } = this.options;
    return y(n).setClass({
      "modal-trans": i,
      "modal-no-backdrop": !o
    }, Qo, r).css({
      zIndex: `${mt.zIndex++}`,
      ...a
    }), this.layout(), this.emit("show"), A(this, rn, Zs).call(this, () => {
      y(n).addClass(Va), A(this, rn, Zs).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (y(this.modalElement).removeClass(Va), this.emit("hide"), A(this, rn, Zs).call(this, () => {
      y(this.modalElement).removeClass(Qo), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, n) {
    if (!this.shown)
      return;
    const { dialog: i } = this;
    if (!i)
      return;
    const o = y(i);
    if (n = n ?? this.options.size, n) {
      o.removeAttr("data-size");
      const h = { width: "", height: "" };
      typeof n == "object" ? (h.width = n.width, h.height = n.height) : typeof n == "string" && ["md", "sm", "lg", "full"].includes(n) ? o.attr("data-size", n) : n && (h.width = n), o.css(h);
    }
    t = t ?? this.options.position ?? "fit";
    const r = i.clientWidth, a = i.clientHeight;
    _(this, on, [r, a]), typeof t == "function" && (t = t({ width: r, height: a }));
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
    var n;
    (n = mt.query(t)) == null || n.hide();
  }
  static show(t) {
    var n;
    (n = mt.query(t)) == null || n.show();
  }
};
ve = new WeakMap(), Yt = new WeakMap(), on = new WeakMap(), Ui = new WeakMap(), rn = new WeakSet(), Zs = function(t, n) {
  p(this, ve) && (clearTimeout(p(this, ve)), _(this, ve, 0)), t && (this.options.animation ? _(this, ve, window.setTimeout(t, n ?? this.options.transTime)) : t());
}, mt.NAME = "Modal", mt.MULTI_INSTANCE = !0, mt.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, mt.zIndex = 1500;
let Pe = mt;
y(window).on("resize.modal.zui", () => {
  Pe.getAll().forEach((s) => {
    const e = s;
    e.shown && e.options.responsive && e.layout();
  });
});
y(document).on("to-hide.modal.zui", (s, e) => {
  Pe.hide(e == null ? void 0 : e.target);
});
const sa = class sa extends W {
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
      headerClass: t,
      title: n
    } = this.props;
    return J(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: R("modal-header", t), children: /* @__PURE__ */ m("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: t
    } = this.props;
    return !t && !e ? null : J(e) ? e : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ m(re, { ...e }) : null,
      t ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e,
      bodyClass: t
    } = this.props;
    return e ? J(e) ? e : /* @__PURE__ */ m("div", { className: R("modal-body", t), children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerClass: t,
      footerActions: n
    } = this.props;
    return J(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ m("div", { className: R("modal-footer", t), children: n ? /* @__PURE__ */ m(re, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: t,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ m("div", { className: R("modal-dialog", e), style: t, children: /* @__PURE__ */ m("div", { className: R("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
sa.defaultProps = { closeBtn: !0 };
let br = sa;
var an, ln, cn;
class ld extends W {
  constructor() {
    super(...arguments);
    v(this, an, void 0);
    v(this, ln, void 0);
    v(this, cn, void 0);
    _(this, an, K()), this.state = {}, _(this, cn, () => {
      var i, o;
      const t = (o = (i = p(this, an).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let n = p(this, ln);
      n == null || n.disconnect(), n = new ResizeObserver(() => {
        const r = t.body, a = t.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), n.observe(t.body), n.observe(t.documentElement), _(this, ln, n);
    });
  }
  componentDidMount() {
    p(this, cn).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = p(this, ln)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: p(this, an),
        onLoad: p(this, cn)
      }
    );
  }
}
an = new WeakMap(), ln = new WeakMap(), cn = new WeakMap();
function cd(s, e) {
  const { custom: t, title: n, content: i } = e;
  return {
    body: i,
    title: n,
    ...typeof t == "function" ? t() : t
  };
}
async function hd(s, e) {
  const { dataType: t = "html", url: n, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = e, u = await (await fetch(n, {
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
    body: t === "html" ? /* @__PURE__ */ m(Ds, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function ud(s, e) {
  const { url: t, custom: n, title: i } = e;
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ m(ld, { url: t })
  };
}
const dd = {
  custom: cd,
  ajax: hd,
  iframe: ud
}, tr = "loading";
var vt, hn, xt, us, vr, ds, xr;
const de = class de extends Pe {
  constructor() {
    super(...arguments);
    v(this, us);
    v(this, ds);
    v(this, vt, void 0);
    v(this, hn, void 0);
    v(this, xt, void 0);
  }
  get id() {
    return p(this, hn);
  }
  get loading() {
    var t;
    return (t = p(this, vt)) == null ? void 0 : t.classList.contains(tr);
  }
  get shown() {
    var t;
    return !!((t = p(this, vt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = p(this, vt);
    if (!t) {
      const { options: n } = this;
      let i = p(this, hn);
      i || (i = n.id || `modal-${y.guid++}`, _(this, hn, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = y("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(n.style || {}).setClass("modal modal-async load-indicator", n.className).appendTo(o)[0];
      }
      _(this, vt, t);
    }
    return t;
  }
  get $emitter() {
    const t = p(this, vt);
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
    const t = p(this, vt);
    t && (y(t).removeData(this.constructor.KEY).remove(), _(this, vt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    p(this, xt) && clearTimeout(p(this, xt));
    const { modalElement: t, options: n } = this, i = y(t), { type: o, loadTimeout: r, loadingText: a = null } = n, l = dd[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(tr), r && _(this, xt, window.setTimeout(() => {
      _(this, xt, 0), A(this, ds, xr).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, n);
    return h === !1 ? await A(this, ds, xr).call(this, this.options.failedTip) : h && typeof h == "object" && await A(this, us, vr).call(this, h), p(this, xt) && (clearTimeout(p(this, xt)), _(this, xt, 0)), this.layout(), await ii(100), i.removeClass(tr), !0;
  }
  static open(t) {
    return new Promise((n) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = de.ensure(i, r), l = `.zui.Modal.open${y.guid++}`;
      a.on(`hidden${l}`, () => {
        a.off(l), n(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: n, message: i, icon: o, iconClass: r = "icon-lg muted", actions: a = "confirm", onClickAction: l, custom: h, key: u = "__alert", ...c } = t, d = (typeof h == "function" ? h() : h) || {};
    let f = typeof i == "object" && i.html ? /* @__PURE__ */ m("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ m("div", { children: i });
    o ? f = /* @__PURE__ */ m("div", { className: R("modal-body row gap-4 items-center", d.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${o} ${r}` }),
      f
    ] }) : f = /* @__PURE__ */ m("div", { className: R("modal-body", d.bodyClass), children: f });
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
      onClickItem: ({ item: w, event: C }) => {
        const $ = de.query(C.target, u);
        b = w.key, (l == null ? void 0 : l(w, $)) !== !1 && $ && $.hide();
      }
    } : void 0;
    return await de.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: f,
      backdrop: "static",
      custom: { footerActions: x, ...d },
      ...c
    }), b;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: n, onResult: i, ...o } = t;
    return await de.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), n == null || n(a, l);
      },
      ...o
    }) === "confirm";
  }
};
vt = new WeakMap(), hn = new WeakMap(), xt = new WeakMap(), us = new WeakSet(), vr = function(t) {
  return new Promise((n) => {
    if (Array.isArray(t))
      return y(this.modalElement).html(t[0]), this.layout(), this._observeResize(), n();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), n();
      },
      ...o
    }, In(
      /* @__PURE__ */ m(br, { ...t }),
      this.modalElement
    );
  });
}, ds = new WeakSet(), xr = function(t) {
  if (t)
    return A(this, us, vr).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: t })
    });
}, de.DEFAULT = {
  ...Pe.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let wr = de;
const fd = '[data-toggle="modal"]';
var Kt, qi, Cc, Yi, _c, Ki, $c;
const ia = class ia extends dt {
  constructor() {
    super(...arguments);
    v(this, qi);
    v(this, Yi);
    v(this, Ki);
    v(this, Kt, void 0);
  }
  get modal() {
    return p(this, Kt);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = A(this, Yi, _c).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = p(this, Kt)) == null ? void 0 : t.hide();
  }
};
Kt = new WeakMap(), qi = new WeakSet(), Cc = function() {
  const {
    container: t,
    ...n
  } = this.options, i = n, o = this.$element.attr("href") || "";
  return i.type || (i.target || o[0] === "#" ? i.type = "static" : i.type = i.type || (i.url || o ? "ajax" : "custom")), !i.url && (i.type === "iframe" || i.type === "ajax") && o[0] !== "#" && (i.url = o), !i.key && i.id && (i.key = i.id), i;
}, Yi = new WeakSet(), _c = function() {
  const t = A(this, qi, Cc).call(this);
  let n = p(this, Kt);
  if (n)
    return n.setOptions(t), n;
  if (t.type === "static") {
    const i = A(this, Ki, $c).call(this);
    if (!i)
      return;
    n = Pe.ensure(i, t);
  } else
    n = wr.ensure(this.container, t);
  return _(this, Kt, n), n.on("destroyed", () => {
    _(this, Kt, void 0);
  }), n;
}, Ki = new WeakSet(), $c = function() {
  let t = this.options.target;
  if (!t) {
    const { $element: n } = this;
    if (n.is("a")) {
      const i = n.attr("href");
      i != null && i.startsWith("#") && (t = i);
    }
  }
  return this.container.querySelector(t || ".modal");
}, ia.NAME = "ModalTrigger";
let Cr = ia;
y(document).on("click.modal.zui", (s) => {
  var n;
  const e = s.target, t = (n = e.closest) == null ? void 0 : n.call(e, fd);
  if (t) {
    const i = Cr.ensure(t);
    i && (i.show(), s.preventDefault());
  }
});
var fs;
let pd = (fs = class extends Po {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = R(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, fs.NAME = "nav", fs);
const Gi = class Gi extends j {
};
Gi.NAME = "Nav", Gi.Component = pd;
let Ua = Gi;
function On(s, e) {
  const t = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = s.page - 1 : e === "next" ? e = s.page + 1 : e === "current" ? e = s.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : s.page, {
    ...s,
    pageTotal: t,
    page: e
  };
}
function md({
  key: s,
  type: e,
  btnType: t,
  page: n,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = On(o, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Y(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : Y(r, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === o.page), /* @__PURE__ */ m(tt, { type: t, ...a });
}
function gd({
  key: s,
  type: e,
  page: t,
  text: n = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = On(i, t);
  return n = typeof n == "function" ? n(a) : Y(n, a), /* @__PURE__ */ m(Zl, { ...r, children: [
    o,
    n
  ] });
}
function yd({
  key: s,
  type: e,
  btnType: t,
  count: n = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ m(tt, { type: t, ...l })), u = (d, f) => {
    const g = [];
    for (let b = d; b <= f; b++) {
      l.text = b, delete l.icon, l.disabled = !1;
      const x = On(i, b);
      r && (l.url = typeof r == "function" ? r(x) : Y(r, x)), g.push(/* @__PURE__ */ m(tt, { type: t, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= n ? c = [...c, ...u(2, i.pageTotal)] : i.page < n - 2 ? c = [...c, ...u(2, n - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - n + 3 ? c = [...c, h(), ...u(i.pageTotal - n + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((n - 4) / 2), i.page + Math.floor((n - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function bd({
  type: s,
  pagerInfo: e,
  linkCreator: t,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? n.map((h) => {
    const u = { ...e, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof t == "function" ? t(u) : Y(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : Y(a, e), i.menu = { ...i.menu, className: R((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ m(uc, { type: "dropdown", dropdown: i, ...r });
}
function wd({
  key: s,
  page: e,
  type: t,
  btnType: n,
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
  }, f = (b) => {
    if (!(b != null && b.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const x = On(i, c);
    a && !a({ info: x, event: b }) || (b.target.href = u.url = typeof l == "function" ? l(x) : Y(l, x));
  }, g = On(i, e || 0);
  return u.url = typeof l == "function" ? l(g) : Y(l, g), /* @__PURE__ */ m("div", { className: R("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: d }),
    /* @__PURE__ */ m(tt, { type: n, ...u, onClick: f })
  ] });
}
var Le;
let vd = (Le = class extends re {
  get pagerInfo() {
    const { page: e = 1, recTotal: t = 0, recPerPage: n = 10 } = this.props;
    return { page: e, recTotal: t, recPerPage: n, pageTotal: n ? Math.ceil(t / n) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, t, n) {
    const i = super.getItemRenderProps(e, t, n), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, Le.NAME = "pager", Le.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, Le.ItemComponents = {
  ...re.ItemComponents,
  link: md,
  info: gd,
  nav: yd,
  "size-menu": bd,
  goto: wd
}, Le);
const Xi = class Xi extends j {
};
Xi.NAME = "Pager", Xi.Component = vd;
let qa = Xi;
const Ji = class Ji extends j {
};
Ji.NAME = "Pick", Ji.Component = Wt;
let Ya = Ji;
var un, ps, ms, Zi;
class Sc extends W {
  constructor(t) {
    super(t);
    v(this, un, K());
    v(this, ps, K());
    v(this, ms, (t) => {
      var i, o;
      const n = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, n), this.setState({ search: n }), t.stopPropagation();
    });
    v(this, Zi, (t) => {
      var n, i;
      t.stopPropagation(), (i = (n = this.props).onClear) == null || i.call(n), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = p(this, un).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: n } = p(this, ps), { current: i } = p(this, un);
      if (n && i) {
        const o = y(i).parent();
        o.width(Math.ceil(Math.min(n.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, n) {
    const { placeholder: i, inline: o } = t, { search: r } = n, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: p(this, ps), children: r }) : a ? l = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: p(this, Zi), children: /* @__PURE__ */ m("span", { className: "close" }) }) : l = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: p(this, ms),
          onInput: p(this, ms),
          ref: p(this, un)
        }
      ),
      l
    ] });
  }
}
un = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), Zi = new WeakMap();
var dn, gs, ys, bs;
class xd extends Zr {
  constructor() {
    super(...arguments);
    v(this, dn, void 0);
    v(this, gs, void 0);
    v(this, ys, void 0);
    v(this, bs, void 0);
    _(this, dn, K()), _(this, gs, (t) => {
      const { onDeselect: n, state: { selections: i } } = this.props, o = y(t.target).closest(".picker-deselect-btn").attr("data-value");
      n && i.length && typeof o == "string" && n(o), t.stopPropagation();
    }), _(this, ys, (t) => {
      this.props.changeState({ search: t });
    }), _(this, bs, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ m("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ m("span", { className: "text", children: t.text }),
      this.props.disabled ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: p(this, gs), "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var n;
    super._handleClick(t), (n = p(this, dn).current) == null || n.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: n }, searchHint: i } = t;
    return /* @__PURE__ */ m(
      Sc,
      {
        inline: !0,
        ref: p(this, dn),
        defaultSearch: n,
        onSearch: p(this, ys),
        onClear: p(this, bs),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: n = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !n.length ? /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
        n.map(this._renderSelection),
        l ? this._renderSearch(t) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ m("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: n, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t, l = r.length ? r : [a];
    if (n)
      if (this.hasInput)
        y(`#${o}`).val(i);
      else
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: n, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ m("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: n, emptyValue: i } = this.props;
    y(`#${t}`).val(n.length ? n : [i]);
  }
  componentDidUpdate(t) {
    const { id: n, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && y(`#${n}`).val(r.length ? r : [a]).trigger("change", gr);
  }
}
dn = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), bs = new WeakMap();
var ws, Qi, to, eo, no, kc;
class Cd extends Zr {
  constructor() {
    super(...arguments);
    v(this, no);
    v(this, ws, K());
    v(this, Qi, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    v(this, to, (t) => {
      this.props.changeState({ search: t });
    });
    v(this, eo, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var n;
    super._handleClick(t), (n = p(this, ws).current) == null || n.focus();
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: n } } = t;
    return /* @__PURE__ */ m(
      Sc,
      {
        ref: p(this, ws),
        defaultSearch: n,
        onSearch: p(this, to),
        onClear: p(this, eo),
        placeholder: A(this, no, kc).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: n, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let d;
    c ? d = this._renderSearch(t) : u ? d = /* @__PURE__ */ m("span", { className: "picker-single-selection", children: u.text }, "main") : d = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: r }, "main");
    const f = h && !c ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: p(this, Qi), children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null;
    return [
      d,
      n,
      f,
      c ? null : /* @__PURE__ */ m("span", { className: "caret" }, "caret")
    ];
  }
}
ws = new WeakMap(), Qi = new WeakMap(), to = new WeakMap(), eo = new WeakMap(), no = new WeakSet(), kc = function() {
  const { searchHint: t, state: { value: n, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === n);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const _d = (s, e, t = "is-match") => s.reduce((n, i) => [...n].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ m("span", { class: t, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), e);
var so, io, Ec, oo, Tc, ro;
class $d extends bc {
  constructor() {
    super(...arguments);
    v(this, io);
    v(this, oo);
    v(this, so, K());
    v(this, ro, ({ item: t }) => {
      const n = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(n) : (r(n), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && y(t).on("mouseenter.picker.zui", ".menu-item", (n) => {
      const i = y(n.currentTarget);
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
      const n = A(this, io, Ec).call(this);
      n != null && n.length && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return R(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: n } = t;
    return /* @__PURE__ */ m(
      Ie,
      {
        ref: p(this, so),
        className: "picker-menu-list",
        items: A(this, oo, Tc).call(this),
        onClickItem: p(this, ro),
        ...n
      }
    );
  }
}
so = new WeakMap(), io = new WeakSet(), Ec = function() {
  const t = this.element;
  if (t)
    return y(t).find(".menu-item>a.hover");
}, oo = new WeakSet(), Tc = function() {
  const { selections: t, items: n, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = y.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = n.reduce((u, c) => {
    const {
      value: d = "",
      keys: f,
      text: g,
      className: b,
      ...x
    } = c;
    d === i && (a = !0);
    const w = g ?? d;
    return w && u.push({
      key: d,
      active: r.has(d),
      text: typeof w == "string" ? _d(l, [w]) : /* @__PURE__ */ m(Ps, { content: w }),
      className: R(b, { hover: d === i }),
      "data-value": d,
      ...x
    }), u;
  }, []);
  return !a && h.length && (h[0].className = R(h[0].className, "hover")), h;
}, ro = new WeakMap();
var fn, Ct, Lt, pn, _n;
let Sd = (_n = class extends Wt {
  constructor(t) {
    super(t);
    v(this, fn, void 0);
    v(this, Ct, void 0);
    v(this, Lt, void 0);
    v(this, pn, void 0);
    _(this, Lt, 0), this.isEmptyValue = (r) => p(this, pn).has(r), this.toggleValue = (r, a) => {
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
    const { valueSplitter: n = ",", emptyValue: i = "" } = this.props;
    _(this, pn, new Set(i.split(n)));
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
    return p(this, pn).values().next().value;
  }
  async load() {
    let t = p(this, Ct);
    t && t.abort(), t = new AbortController(), _(this, Ct, t);
    const { items: n, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await ii(i || 500), p(this, Ct) !== t || (r = await n(o, { signal: t.signal }), p(this, Ct) !== t))
        return r;
    } else if (o.length) {
      const a = y.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      a.length ? r = n.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: d
        } = h;
        return a.every((f) => u.toLowerCase().includes(f) || c.toLowerCase().includes(f) || typeof d == "string" && d.toLowerCase().includes(f)) && l.push(h), l;
      }, []) : r = n;
    } else
      r = n;
    return _(this, Ct, void 0), r;
  }
  async update(t) {
    const { state: n, props: i } = this, o = p(this, fn) || {}, r = {};
    if (_(this, fn, o), (t || o.search !== n.search || i.items !== o.items) && (r.items = (await this.load()).filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, o.items = i.items, o.search = n.search), t || o.value !== n.value) {
      const l = r.items || n.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = n.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    p(this, Lt) && clearTimeout(p(this, Lt)), _(this, Lt, window.setTimeout(() => {
      _(this, Lt, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, n) {
    super.componentDidUpdate(t, n), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = p(this, Ct)) == null || t.abort(), _(this, Ct, void 0), _(this, fn, void 0), clearTimeout(p(this, Lt)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
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
  _getPopProps(t, n) {
    return {
      ...super._getPopProps(t, n),
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
    return t.Trigger || (t.multiple ? xd : Cd);
  }
  formatValueList(t) {
    let n = [];
    return typeof t == "string" && t.length ? n = y.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (n = y.unique(t)), n.filter((i) => !this.isEmptyValue(i));
  }
  formatValue(t) {
    const n = this.formatValueList(t);
    return n.length ? n.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let n = this.formatValueList(t);
    if (!n.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: i, limitValueInList: o } = this.props;
    if (o) {
      const a = new Set((Array.isArray(i) ? i : this.state.items).map((l) => String(l.value)));
      n = n.filter((l) => a.has(l));
    }
    const r = this.formatValue(n);
    return this.changeState({ value: r });
  }
}, fn = new WeakMap(), Ct = new WeakMap(), Lt = new WeakMap(), pn = new WeakMap(), _n.defaultProps = {
  ...Wt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, _n.Pop = $d, _n);
const ao = class ao extends j {
};
ao.NAME = "Picker", ao.Component = Sd;
let Ka = ao;
const lo = class lo extends dt {
  init() {
    const { trigger: e } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      if (this.$target.hasClass("hidden")) {
        this.show();
        return;
      }
      this.hide();
    }, this.$element.addClass("z-50").on(e, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: e, strategy: t } = this.options, n = {
      placement: e,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && n.middleware.push(Oo()), o && n.middleware.push(o === !0 ? ui() : ui(o)), r && n.middleware.push(dr({ element: this.$arrow[0] })), a && n.middleware.push(Ho(a)), n;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = Jr(e, t, () => {
      zo(e, t, this.computePositionConfig()).then(({ x: n, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !dr || !r.arrow)
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
    const e = this.$element.data("target");
    if (!e)
      throw new Error("popsvers trigger must have target.");
    const t = y(e);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    t.addClass(n), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      y(i.target).data("dismiss") === "popovers" && this.hide();
    }), this.$target = t;
  }
  show() {
    var e;
    this.$target.removeClass("hidden"), (e = this.$mask) == null || e.removeClass("hidden");
  }
  hide() {
    var e;
    this.$target.addClass("hidden"), (e = this.$mask) == null || e.addClass("hidden");
  }
  initMask() {
    const { mask: e } = this.options;
    if (!e)
      return;
    const t = y('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = y('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
lo.NAME = "Popovers", lo.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0
};
let Ga = lo;
var vs, xs, Gt, co, Cs, _s, $s, _r, Ss;
let kd = (Ss = class extends W {
  constructor(t) {
    super(t);
    v(this, $s);
    v(this, vs, void 0);
    v(this, xs, K());
    v(this, Gt, 0);
    v(this, co, (t) => {
      const n = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), n.trim() !== "" && (i == null || i("", t));
      });
    });
    v(this, Cs, (t) => {
      const n = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || n === i || (A(this, $s, _r).call(this), _(this, Gt, window.setTimeout(() => {
          o(i, t), _(this, Gt, 0);
        }, this.props.delay || 0)));
      });
    });
    v(this, _s, (t) => {
      const n = t.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, _(this, vs, t.id || `search-box-${y.guid++}`);
  }
  get id() {
    return p(this, vs);
  }
  get input() {
    return p(this, xs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    A(this, $s, _r).call(this);
  }
  render(t, n) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: d, searchIcon: f, clearIcon: g } = t, { focus: b, value: x } = n, { id: w } = this, C = typeof x != "string" || !x.trim().length;
    let $, k, S;
    return f && (S = f === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(et, { icon: f })), !d && f && ($ = /* @__PURE__ */ m("label", { for: w, class: "input-control-prefix", children: S }, "prefix")), g && !C ? k = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: p(this, co),
        children: g === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(et, { icon: g })
      }
    ) : d && f && (k = S), k && (k = /* @__PURE__ */ m("label", { for: w, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ m("div", { class: R("search-box input-control", r, { focus: b, empty: C, "has-prefix-icon": $, "has-suffix-icon": k }), style: a, children: [
      $,
      /* @__PURE__ */ m(
        "input",
        {
          ref: p(this, xs),
          id: w,
          type: "text",
          class: R("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: x,
          onInput: p(this, Cs),
          onChange: p(this, Cs),
          onFocus: p(this, _s),
          onBlur: p(this, _s)
        }
      ),
      k
    ] });
  }
}, vs = new WeakMap(), xs = new WeakMap(), Gt = new WeakMap(), co = new WeakMap(), Cs = new WeakMap(), _s = new WeakMap(), $s = new WeakSet(), _r = function() {
  p(this, Gt) && clearTimeout(p(this, Gt)), _(this, Gt, 0);
}, Ss.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Ss);
const ho = class ho extends j {
};
ho.NAME = "SearchBox", ho.Component = kd;
let Xa = ho;
const uo = class uo extends j {
};
uo.NAME = "Toolbar", uo.Component = re;
let Ja = uo;
function zs(s) {
  return s.split("-")[1];
}
function Qr(s) {
  return s === "y" ? "height" : "width";
}
function qe(s) {
  return s.split("-")[0];
}
function Fo(s) {
  return ["top", "bottom"].includes(qe(s)) ? "x" : "y";
}
function Za(s, e, t) {
  let { reference: n, floating: i } = s;
  const o = n.x + n.width / 2 - i.width / 2, r = n.y + n.height / 2 - i.height / 2, a = Fo(e), l = Qr(a), h = n[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (qe(e)) {
    case "top":
      c = { x: o, y: n.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: n.y + n.height };
      break;
    case "right":
      c = { x: n.x + n.width, y: r };
      break;
    case "left":
      c = { x: n.x - i.width, y: r };
      break;
    default:
      c = { x: n.x, y: n.y };
  }
  switch (zs(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Ed = async (s, e, t) => {
  const { placement: n = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: s, floating: e, strategy: i }), { x: u, y: c } = Za(h, n, l), d = n, f = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: x, fn: w } = a[b], { x: C, y: $, data: k, reset: S } = await w({ x: u, y: c, initialPlacement: n, placement: d, strategy: i, middlewareData: f, rects: h, platform: r, elements: { reference: s, floating: e } });
    u = C ?? u, c = $ ?? c, f = { ...f, [x]: { ...f[x], ...k } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: e, strategy: i }) : S.rects), { x: u, y: c } = Za(h, d, l)), b = -1);
  }
  return { x: u, y: c, placement: d, strategy: i, middlewareData: f };
};
function Nc(s) {
  return typeof s != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function mi(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function Td(s, e) {
  var t;
  e === void 0 && (e = {});
  const { x: n, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: d = !1, padding: f = 0 } = e, g = Nc(f), b = a[d ? c === "floating" ? "reference" : "floating" : c], x = mi(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: n, y: i } : r.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(C)) && await (o.getScale == null ? void 0 : o.getScale(C)) || { x: 1, y: 1 }, k = mi(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: C, strategy: l }) : w);
  return { top: (x.top - k.top + g.top) / $.y, bottom: (k.bottom - x.bottom + g.bottom) / $.y, left: (x.left - k.left + g.left) / $.x, right: (k.right - x.right + g.right) / $.x };
}
const Nd = Math.min, Md = Math.max;
function Rd(s, e, t) {
  return Md(s, Nd(e, t));
}
const Ld = (s) => ({ name: "arrow", options: s, async fn(e) {
  const { element: t, padding: n = 0 } = s || {}, { x: i, y: o, placement: r, rects: a, platform: l } = e;
  if (t == null)
    return {};
  const h = Nc(n), u = { x: i, y: o }, c = Fo(r), d = Qr(c), f = await l.getDimensions(t), g = c === "y" ? "top" : "left", b = c === "y" ? "bottom" : "right", x = a.reference[d] + a.reference[c] - u[c] - a.floating[d], w = u[c] - a.reference[c], C = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(t));
  let $ = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0;
  $ === 0 && ($ = a.floating[d]);
  const k = x / 2 - w / 2, S = h[g], N = $ - f[d] - h[b], L = $ / 2 - f[d] / 2 + k, I = Rd(S, L, N), D = zs(r) != null && L != I && a.reference[d] / 2 - (L < S ? h[g] : h[b]) - f[d] / 2 < 0;
  return { [c]: u[c] - (D ? L < S ? S - L : N - L : 0), data: { [c]: I, centerOffset: L - I } };
} }), Ad = ["top", "right", "bottom", "left"];
Ad.reduce((s, e) => s.concat(e, e + "-start", e + "-end"), []);
const Id = { left: "right", right: "left", bottom: "top", top: "bottom" };
function gi(s) {
  return s.replace(/left|right|bottom|top/g, (e) => Id[e]);
}
function Dd(s, e, t) {
  t === void 0 && (t = !1);
  const n = zs(s), i = Fo(s), o = Qr(i);
  let r = i === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = gi(r)), { main: r, cross: gi(r) };
}
const Pd = { start: "end", end: "start" };
function er(s) {
  return s.replace(/start|end/g, (e) => Pd[e]);
}
const Od = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(e) {
    var t;
    const { placement: n, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: f = "none", flipAlignment: g = !0, ...b } = s, x = qe(n), w = qe(r) === r, C = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), $ = c || (w || !g ? [gi(r)] : function(O) {
      const P = gi(O);
      return [er(O), P, er(P)];
    }(r));
    c || f === "none" || $.push(...function(O, P, M, E) {
      const H = zs(O);
      let B = function(z, X, he) {
        const Fs = ["left", "right"], En = ["right", "left"], js = ["top", "bottom"], Uo = ["bottom", "top"];
        switch (z) {
          case "top":
          case "bottom":
            return he ? X ? En : Fs : X ? Fs : En;
          case "left":
          case "right":
            return X ? js : Uo;
          default:
            return [];
        }
      }(qe(O), M === "start", E);
      return H && (B = B.map((z) => z + "-" + H), P && (B = B.concat(B.map(er)))), B;
    }(r, g, f, C));
    const k = [r, ...$], S = await Td(e, b), N = [];
    let L = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && N.push(S[x]), u) {
      const { main: O, cross: P } = Dd(n, o, C);
      N.push(S[O], S[P]);
    }
    if (L = [...L, { placement: n, overflows: N }], !N.every((O) => O <= 0)) {
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
      if (n !== M)
        return { reset: { placement: M } };
    }
    return {};
  } };
}, Hd = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(e) {
    const { x: t, y: n } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = qe(a), d = zs(a), f = Fo(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, b = u && f ? -1 : 1, x = typeof r == "function" ? r(o) : r;
      let { mainAxis: w, crossAxis: C, alignmentAxis: $ } = typeof x == "number" ? { mainAxis: x, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...x };
      return d && typeof $ == "number" && (C = d === "end" ? -1 * $ : $), f ? { x: C * b, y: w * g } : { x: w * g, y: C * b };
    }(e, s);
    return { x: t + i.x, y: n + i.y, data: i };
  } };
};
function ct(s) {
  var e;
  return ((e = s.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Et(s) {
  return ct(s).getComputedStyle(s);
}
function ae(s) {
  return Rc(s) ? (s.nodeName || "").toLowerCase() : "";
}
let Ys;
function Mc() {
  if (Ys)
    return Ys;
  const s = navigator.userAgentData;
  return s && Array.isArray(s.brands) ? (Ys = s.brands.map((e) => e.brand + "/" + e.version).join(" "), Ys) : navigator.userAgent;
}
function zt(s) {
  return s instanceof ct(s).HTMLElement;
}
function ut(s) {
  return s instanceof ct(s).Element;
}
function Rc(s) {
  return s instanceof ct(s).Node;
}
function Qa(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ct(s).ShadowRoot || s instanceof ShadowRoot;
}
function jo(s) {
  const { overflow: e, overflowX: t, overflowY: n, display: i } = Et(s);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(i);
}
function Bd(s) {
  return ["table", "td", "th"].includes(ae(s));
}
function $r(s) {
  const e = /firefox/i.test(Mc()), t = Et(s), n = t.backdropFilter || t.WebkitBackdropFilter;
  return t.transform !== "none" || t.perspective !== "none" || !!n && n !== "none" || e && t.willChange === "filter" || e && !!t.filter && t.filter !== "none" || ["transform", "perspective"].some((i) => t.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const o = t.contain;
    return o != null && o.includes(i);
  });
}
function Lc() {
  return !/^((?!chrome|android).)*safari/i.test(Mc());
}
function ta(s) {
  return ["html", "body", "#document"].includes(ae(s));
}
const tl = Math.min, Mn = Math.max, yi = Math.round;
function Ac(s) {
  const e = Et(s);
  let t = parseFloat(e.width), n = parseFloat(e.height);
  const i = s.offsetWidth, o = s.offsetHeight, r = yi(t) !== i || yi(n) !== o;
  return r && (t = i, n = o), { width: t, height: n, fallback: r };
}
function Ic(s) {
  return ut(s) ? s : s.contextElement;
}
const Dc = { x: 1, y: 1 };
function Ye(s) {
  const e = Ic(s);
  if (!zt(e))
    return Dc;
  const t = e.getBoundingClientRect(), { width: n, height: i, fallback: o } = Ac(e);
  let r = (o ? yi(t.width) : t.width) / n, a = (o ? yi(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
function Oe(s, e, t, n) {
  var i, o;
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const r = s.getBoundingClientRect(), a = Ic(s);
  let l = Dc;
  e && (n ? ut(n) && (l = Ye(n)) : l = Ye(s));
  const h = a ? ct(a) : window, u = !Lc() && t;
  let c = (r.left + (u && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, d = (r.top + (u && ((o = h.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / l.y, f = r.width / l.x, g = r.height / l.y;
  if (a) {
    const b = ct(a), x = n && ut(n) ? ct(n) : n;
    let w = b.frameElement;
    for (; w && n && x !== b; ) {
      const C = Ye(w), $ = w.getBoundingClientRect(), k = getComputedStyle(w);
      $.x += (w.clientLeft + parseFloat(k.paddingLeft)) * C.x, $.y += (w.clientTop + parseFloat(k.paddingTop)) * C.y, c *= C.x, d *= C.y, f *= C.x, g *= C.y, c += $.x, d += $.y, w = ct(w).frameElement;
    }
  }
  return { width: f, height: g, top: d, right: c + f, bottom: d + g, left: c, x: c, y: d };
}
function se(s) {
  return ((Rc(s) ? s.ownerDocument : s.document) || window.document).documentElement;
}
function Vo(s) {
  return ut(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function Pc(s) {
  return Oe(se(s)).left + Vo(s).scrollLeft;
}
function Wd(s, e, t) {
  const n = zt(e), i = se(e), o = Oe(s, !0, t === "fixed", e);
  let r = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (n || !n && t !== "fixed")
    if ((ae(e) !== "body" || jo(i)) && (r = Vo(e)), zt(e)) {
      const l = Oe(e, !0);
      a.x = l.x + e.clientLeft, a.y = l.y + e.clientTop;
    } else
      i && (a.x = Pc(i));
  return { x: o.left + r.scrollLeft - a.x, y: o.top + r.scrollTop - a.y, width: o.width, height: o.height };
}
function Hn(s) {
  if (ae(s) === "html")
    return s;
  const e = s.assignedSlot || s.parentNode || (Qa(s) ? s.host : null) || se(s);
  return Qa(e) ? e.host : e;
}
function el(s) {
  return zt(s) && Et(s).position !== "fixed" ? s.offsetParent : null;
}
function nl(s) {
  const e = ct(s);
  let t = el(s);
  for (; t && Bd(t) && Et(t).position === "static"; )
    t = el(t);
  return t && (ae(t) === "html" || ae(t) === "body" && Et(t).position === "static" && !$r(t)) ? e : t || function(n) {
    let i = Hn(n);
    for (; zt(i) && !ta(i); ) {
      if ($r(i))
        return i;
      i = Hn(i);
    }
    return null;
  }(s) || e;
}
function Oc(s) {
  const e = Hn(s);
  return ta(e) ? s.ownerDocument.body : zt(e) && jo(e) ? e : Oc(e);
}
function Rn(s, e) {
  var t;
  e === void 0 && (e = []);
  const n = Oc(s), i = n === ((t = s.ownerDocument) == null ? void 0 : t.body), o = ct(n);
  return i ? e.concat(o, o.visualViewport || [], jo(n) ? n : []) : e.concat(n, Rn(n));
}
function sl(s, e, t) {
  return e === "viewport" ? mi(function(n, i) {
    const o = ct(n), r = se(n), a = o.visualViewport;
    let l = r.clientWidth, h = r.clientHeight, u = 0, c = 0;
    if (a) {
      l = a.width, h = a.height;
      const d = Lc();
      (d || !d && i === "fixed") && (u = a.offsetLeft, c = a.offsetTop);
    }
    return { width: l, height: h, x: u, y: c };
  }(s, t)) : ut(e) ? function(n, i) {
    const o = Oe(n, !0, i === "fixed"), r = o.top + n.clientTop, a = o.left + n.clientLeft, l = zt(n) ? Ye(n) : { x: 1, y: 1 }, h = n.clientWidth * l.x, u = n.clientHeight * l.y, c = a * l.x, d = r * l.y;
    return { top: d, left: c, right: c + h, bottom: d + u, x: c, y: d, width: h, height: u };
  }(e, t) : mi(function(n) {
    var i;
    const o = se(n), r = Vo(n), a = (i = n.ownerDocument) == null ? void 0 : i.body, l = Mn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Mn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let u = -r.scrollLeft + Pc(n);
    const c = -r.scrollTop;
    return Et(a || o).direction === "rtl" && (u += Mn(o.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: u, y: c };
  }(se(s)));
}
const zd = { getClippingRect: function(s) {
  let { element: e, boundary: t, rootBoundary: n, strategy: i } = s;
  const o = t === "clippingAncestors" ? function(h, u) {
    const c = u.get(h);
    if (c)
      return c;
    let d = Rn(h).filter((x) => ut(x) && ae(x) !== "body"), f = null;
    const g = Et(h).position === "fixed";
    let b = g ? Hn(h) : h;
    for (; ut(b) && !ta(b); ) {
      const x = Et(b), w = $r(b);
      (g ? w || f : w || x.position !== "static" || !f || !["absolute", "fixed"].includes(f.position)) ? f = x : d = d.filter((C) => C !== b), b = Hn(b);
    }
    return u.set(h, d), d;
  }(e, this._c) : [].concat(t), r = [...o, n], a = r[0], l = r.reduce((h, u) => {
    const c = sl(e, u, i);
    return h.top = Mn(c.top, h.top), h.right = tl(c.right, h.right), h.bottom = tl(c.bottom, h.bottom), h.left = Mn(c.left, h.left), h;
  }, sl(e, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: e, offsetParent: t, strategy: n } = s;
  const i = zt(t), o = se(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && n !== "fixed") && ((ae(t) !== "body" || jo(o)) && (r = Vo(t)), zt(t))) {
    const h = Oe(t);
    a = Ye(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, isElement: ut, getDimensions: function(s) {
  return Ac(s);
}, getOffsetParent: nl, getDocumentElement: se, getScale: Ye, async getElementRects(s) {
  let { reference: e, floating: t, strategy: n } = s;
  const i = this.getOffsetParent || nl, o = this.getDimensions;
  return { reference: Wd(e, await i(t), n), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: (s) => Array.from(s.getClientRects()), isRTL: (s) => Et(s).direction === "rtl" };
function Fd(s, e, t, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = !0, animationFrame: a = !1 } = n, l = i && !a, h = l || o ? [...ut(s) ? Rn(s) : s.contextElement ? Rn(s.contextElement) : [], ...Rn(e)] : [];
  h.forEach((f) => {
    l && f.addEventListener("scroll", t, { passive: !0 }), o && f.addEventListener("resize", t);
  });
  let u, c = null;
  if (r) {
    let f = !0;
    c = new ResizeObserver(() => {
      f || t(), f = !1;
    }), ut(s) && !a && c.observe(s), ut(s) || !s.contextElement || a || c.observe(s.contextElement), c.observe(e);
  }
  let d = a ? Oe(s) : null;
  return a && function f() {
    const g = Oe(s);
    !d || g.x === d.x && g.y === d.y && g.width === d.width && g.height === d.height || t(), d = g, u = requestAnimationFrame(f);
  }(), t(), () => {
    var f;
    h.forEach((g) => {
      l && g.removeEventListener("scroll", t), o && g.removeEventListener("resize", t);
    }), (f = c) == null || f.disconnect(), c = null, a && cancelAnimationFrame(u);
  };
}
const jd = (s, e, t) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: zd, ...t }, o = { ...i.platform, _c: n };
  return Ed(s, e, { ...i, platform: o });
};
var xe, mn, Ce, _e, st, fo, ks, Es, Sr, po, Hc, mo, Bc, go, Wc, yo, zc, bo, Fc, wo, jc, vo, Vc, $e, xo, Uc;
const at = class at extends dt {
  constructor() {
    super(...arguments);
    v(this, Es);
    v(this, po);
    v(this, mo);
    v(this, go);
    v(this, yo);
    v(this, bo);
    v(this, wo);
    v(this, vo);
    v(this, xo);
    v(this, xe, void 0);
    v(this, mn, void 0);
    v(this, Ce, void 0);
    v(this, _e, void 0);
    v(this, st, void 0);
    v(this, fo, void 0);
    v(this, ks, void 0);
    v(this, $e, void 0);
    _(this, xe, !1), _(this, Ce, 0), this.hideLater = () => {
      p(this, $e).call(this), _(this, Ce, window.setTimeout(this.hide.bind(this), 100));
    }, _(this, $e, () => {
      clearTimeout(p(this, Ce)), _(this, Ce, 0);
    });
  }
  get isShown() {
    var t;
    return (t = p(this, _e)) == null ? void 0 : t.classList.contains(at.CLASS_SHOW);
  }
  get tooltip() {
    return p(this, _e) || A(this, mo, Bc).call(this);
  }
  get trigger() {
    return p(this, fo) || this.element;
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
    return this.setOptions(t), !p(this, xe) && this.isHover && A(this, xo, Uc).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(at.CLASS_SHOW), A(this, wo, jc).call(this), !0;
  }
  hide() {
    var t, n;
    return (t = p(this, ks)) == null || t.call(this), this.element.classList.remove(this.elementShowClass), (n = p(this, _e)) == null || n.classList.remove(at.CLASS_SHOW), !0;
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    p(this, xe) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", p(this, $e)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(t = {}) {
    t instanceof Event && (t = { event: t });
    const { exclude: n } = t;
    if (n) {
      const i = this.getAll(), o = new Set(n);
      for (const r of i)
        o.has(r.element) || r.hide();
    }
  }
};
xe = new WeakMap(), mn = new WeakMap(), Ce = new WeakMap(), _e = new WeakMap(), st = new WeakMap(), fo = new WeakMap(), ks = new WeakMap(), Es = new WeakSet(), Sr = function() {
  const { arrow: t } = this.options;
  return typeof t == "number" ? t : 8;
}, po = new WeakSet(), Hc = function() {
  const t = A(this, Es, Sr).call(this);
  return _(this, st, document.createElement("div")), p(this, st).style.position = this.options.strategy, p(this, st).style.width = `${t}px`, p(this, st).style.height = `${t}px`, p(this, st).style.transform = "rotate(45deg)", p(this, st);
}, mo = new WeakSet(), Bc = function() {
  var i;
  const t = at.TOOLTIP_CLASS;
  let n;
  if (this.isDynamic) {
    n = document.createElement("div");
    const o = this.options.className ? this.options.className.split(" ") : [];
    let r = [t, this.options.type || ""];
    r = r.concat(o), n.classList.add(...r), n[this.options.html ? "innerHTML" : "innerText"] = this.options.title || "";
  } else if (this.element) {
    const o = this.element.getAttribute("href") ?? this.element.dataset.target;
    if (o != null && o.startsWith("#") && (n = document.querySelector(o)), !n) {
      const r = this.element.nextElementSibling;
      r != null && r.classList.contains(t) ? n = r : n = (i = this.element.parentNode) == null ? void 0 : i.querySelector(`.${t}`);
    }
  }
  if (this.options.arrow && (n == null || n.append(A(this, po, Hc).call(this))), !n)
    throw new Error("Tooltip: Cannot find tooltip element");
  return n.style.width = "max-content", n.style.position = "absolute", n.style.top = "0", n.style.left = "0", document.body.appendChild(n), _(this, _e, n), n;
}, go = new WeakSet(), Wc = function() {
  var r;
  const t = A(this, Es, Sr).call(this), { strategy: n, placement: i } = this.options, o = {
    middleware: [Hd(t), Od()],
    strategy: n,
    placement: i
  };
  return this.options.arrow && p(this, st) && ((r = o.middleware) == null || r.push(Ld({ element: p(this, st) }))), o;
}, yo = new WeakSet(), zc = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, bo = new WeakSet(), Fc = function(t) {
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
}, wo = new WeakSet(), jc = function() {
  const t = A(this, go, Wc).call(this), n = A(this, vo, Vc).call(this);
  _(this, ks, Fd(n, this.tooltip, () => {
    this.element && jd(n, this.tooltip, t).then(({ x: i, y: o, middlewareData: r, placement: a }) => {
      Object.assign(this.tooltip.style, {
        left: `${i}px`,
        top: `${o}px`
      });
      const l = a.split("-")[0], h = A(this, yo, zc).call(this, l);
      if (r.arrow && p(this, st)) {
        const { x: u, y: c } = r.arrow;
        Object.assign(p(this, st).style, {
          left: u != null ? `${u}px` : "",
          top: c != null ? `${c}px` : "",
          [h]: `${-p(this, st).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...A(this, bo, Fc).call(this, l)
        });
      }
    });
  }));
}, vo = new WeakSet(), Vc = function() {
  return p(this, mn) || _(this, mn, {
    getBoundingClientRect: () => {
      const { element: t } = this;
      if (t instanceof MouseEvent) {
        const { clientX: n, clientY: i } = t;
        return {
          width: 0,
          height: 0,
          top: i,
          right: n,
          bottom: i,
          left: n
        };
      }
      return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
    },
    contextElement: this.element
  }), p(this, mn);
}, $e = new WeakMap(), xo = new WeakSet(), Uc = function() {
  const { tooltip: t } = this;
  t.addEventListener("mouseenter", p(this, $e)), t.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), _(this, xe, !0);
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
  var n;
  const e = s.target, t = (n = e.closest) == null ? void 0 : n.call(e, Ot.MENU_SELECTOR);
  if (t) {
    const i = Ot.ensure(t);
    i.options.trigger === "click" && i.toggle();
  } else
    Ot.clear({ event: s });
});
document.addEventListener("mouseover", function(s) {
  var i;
  const e = s.target, t = (i = e.closest) == null ? void 0 : i.call(e, Ot.MENU_SELECTOR);
  if (!t)
    return;
  const n = Ot.ensure(t);
  n.isHover && n.show();
});
function Vd({
  type: s,
  component: e,
  className: t,
  children: n,
  content: i,
  style: o,
  attrs: r,
  url: a,
  disabled: l,
  active: h,
  icon: u,
  text: c,
  target: d,
  trailingIcon: f,
  hint: g,
  checked: b,
  actions: x,
  show: w,
  level: C = 0,
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
      style: Object.assign({ paddingLeft: `calc(${C} * var(--tree-indent, 20px))` }, o),
      "data-level": C,
      ...r,
      ...k,
      children: [
        /* @__PURE__ */ m("span", { class: `tree-toggle-icon${$ ? " state" : ""}`, children: $ ? /* @__PURE__ */ m("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof b == "boolean" ? /* @__PURE__ */ m("div", { class: `tree-checkbox checkbox-primary${b ? " checked" : ""}`, children: /* @__PURE__ */ m("label", {}) }) : null,
        /* @__PURE__ */ m(et, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ m("a", { className: "text tree-link not-nested-toggle", href: a, children: c }) : /* @__PURE__ */ m("span", { class: "text", children: c }),
        /* @__PURE__ */ m(Ps, { content: i }),
        n,
        S ? /* @__PURE__ */ m(re, { ...S }) : null,
        /* @__PURE__ */ m(et, { icon: f, className: "tree-trailing-icon" })
      ]
    }
  );
}
var $n;
let Ud = ($n = class extends Yr {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(e) {
    const t = super.getNestedMenuProps(e), { collapsedIcon: n, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: n,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...t
    };
  }
  getItemRenderProps(e, t, n) {
    const i = super.getItemRenderProps(e, t, n), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = e;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(t) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const e = super.beforeRender(), { hover: t } = this.props;
    return t && (e.className = R(e.className, "tree-hover")), e;
  }
}, $n.ItemComponents = {
  item: Vd
}, $n.NAME = "tree", $n);
const Co = class Co extends j {
};
Co.NAME = "Tree", Co.Component = Ud;
let il = Co;
const oa = class oa extends dt {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? ou(n) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: e, uploadText: t, uploadIcon: n, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = y('<ul class="file-list py-1"></ul>');
    const l = y(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = y(`<label class="btn ${o}" for="${e}">${t}</label>`), n) {
        const d = y(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(d);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = y(`<span class="text-primary">${t}</span>`);
    if (n) {
      const c = y(`<i class="icon icon-${n} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = y(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${e}"></label>`).append(h).append(l), this.bindDragEvent();
    const u = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...u);
  }
  bindDragEvent() {
    this.$label.on("dragover", (e) => {
      e.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (e) => {
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (e) => {
      var n;
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const t = Array.from(((n = e.dataTransfer) == null ? void 0 : n.files) ?? []);
      console.log(e.dataTransfer.files), this.addFileItem(t);
    });
  }
  initFileInputCash() {
    const { name: e, multiple: t, accept: n } = this.options;
    this.$input = y("<input />").addClass("hidden").prop("type", "file").prop("name", e).prop("id", e).prop("multiple", t).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), n && this.$input.prop("accept", n);
  }
  addFile(e) {
    const { multiple: t, onSizeChange: n } = this.options;
    t || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = e.size), this.renameMap.set(e.name, e.name), this.fileMap.set(e.name, e), this.dataTransfer.items.add(e), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += e.size, n == null || n(this.currentBytes);
  }
  renameDuplicatedFile(e) {
    if (!this.fileMap.has(e.name))
      return e;
    const t = e.name.lastIndexOf(".");
    if (t === -1)
      return this.renameDuplicatedFile(new File([e], `${e.name}(1)`));
    const n = e.name.substring(0, t), i = e.name.substring(t);
    return this.renameDuplicatedFile(new File([e], `${n}(1)${i}`));
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (!t)
      return e;
    const n = t.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return n.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), e.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(e) {
    e = this.filterFiles(e);
    const { multiple: t, limitCount: n, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (t) {
      const h = [];
      for (let u of e) {
        if (n && this.fileMap.size >= n)
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
    if (e[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(e[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), r == null || r(a);
  }
  deleteFileItem(e) {
    var l;
    const t = this.renameMap.get(e) ?? e;
    this.renameMap.delete(e);
    const n = this.fileMap.get(t);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(e, t) {
    var o, r;
    const n = this.renameMap.get(e.name);
    this.renameMap.set(e.name, t), n && (e = this.fileMap.get(n) ?? e);
    const i = this.itemMap.get(e.name);
    i && (this.itemMap.set(t, i).delete(e.name), (r = (o = this.options).onRename) == null || r.call(o, t, e.name), this.fileMap.delete(e.name), this.dataTransfer = new DataTransfer(), e = new File([e], t), this.fileMap.set(t, e).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(e) {
    const { showIcon: t } = this.options;
    return this.addFile(e), y('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(e)).append(this.createRenameContainer(e));
  }
  fileIcon() {
    const { icon: e } = this.options;
    return y(`<i class="icon icon-${e}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: e, renameText: t, renameIcon: n, renameClass: i } = this.options;
    if (e) {
      const o = y(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Ot(o, { title: t }), o;
    }
    return y("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: e, deleteText: t, deleteIcon: n, deleteClass: i } = this.options;
    if (e) {
      const o = y(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Ot(o, { title: t })), o;
    }
    return y("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(e) {
    return y(`<span class="file-name">${e}</span>`);
  }
  fileSize(e) {
    return y(`<span class="file-size text-gray">${iu(e)}</span>`);
  }
  createFileInfo(e) {
    const { renameBtn: t, deleteBtn: n, showSize: i } = this.options, o = y('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(e.name)), i && o.append(this.fileSize(e.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = y(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(e.name))
    ), o;
  }
  createRenameContainer(e) {
    const { confirmText: t, cancelText: n, duplicatedHint: i } = this.options, o = y('<div class="input-group input-rename-container hidden"></div>'), r = y("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).on("keydown", (u) => {
      if (u.key === "Enter") {
        const c = o.closest(".file-item"), d = c.find(".file-name");
        if (d.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(e, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(r.val());
      } else
        u.key === "Escape" && (r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = y("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(e, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = y("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = y('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
};
oa.DEFAULT = {
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
let kr = oa;
const ra = class ra extends kr {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = y(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(y('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: e, tip: t, uploadText: n, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = y('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = y('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = y(`<label for="${e}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = y(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = y('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(y(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = y('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (t === "image/*")
      return e.filter((i) => i.type.includes("image"));
    const n = t.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return e.filter((i) => n.includes(i.type));
  }
  createFileItem(e) {
    const t = super.createFileItem(e).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(e, t);
    const { deleteBtn: n, showSize: i } = this.options;
    return n && t.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(e.name))
    ), i && t.append(
      this.fileSize(e.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), t;
  }
  setImageUrl(e, t) {
    const n = new FileReader();
    n.onload = () => {
      y('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})` }).prependTo(t);
    }, n.readAsDataURL(e);
  }
  createFileInfo(e) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = y(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return y('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(y(`<div class="file-name py-1 ellipsis">${e.name}</div>`)).append(t);
  }
  createRenameContainer(e) {
    const { duplicatedHint: t } = this.options, n = y("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = n.closest(".file-item").find(".file-name");
        if (o.html() === n.val()) {
          n.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(n.val()))
          return alert(t);
        this.renameFileItem(e, n.val()), n.addClass("hidden"), o.html(n.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && n.val(e.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = n.closest(".file-item").find(".file-name");
      if (i.html() === n.val()) {
        n.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(n.val()))
        return alert(t);
      this.renameFileItem(e, n.val()), n.addClass("hidden"), i.html(n.val()).closest(".file-info").removeClass("hidden");
    });
    return n;
  }
};
ra.DEFAULT = {
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
let ol = ra;
let qd = class extends W {
  constructor() {
    super(...arguments), this._onDragStart = (e) => {
      var i, o, r;
      const t = e.target.closest(".dashboard-block");
      if (!t)
        return;
      const n = t.getBoundingClientRect();
      if (e.clientY - n.top > 48) {
        e.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = e.dataTransfer) == null || i.setData("application/id", this.props.id), (r = (o = this.props).onDragStart) == null || r.call(o, e);
    }, this._onDragEnd = (e) => {
      var t, n;
      this.setState({ dragging: !1 }), (n = (t = this.props).onDragEnd) == null || n.call(t, e);
    };
  }
  render() {
    const { left: e, top: t, id: n, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: h } = this.props, { dragging: u } = this.state;
    return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: e, top: t, width: r, height: a }, children: /* @__PURE__ */ m(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": n,
        children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
          ] }),
          y.isPlainObject(l) && l.html ? /* @__PURE__ */ m(Ds, { class: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const rl = ([s, e, t, n], [i, o, r, a]) => !(s + t <= i || i + r <= s || e + n <= o || o + a <= e), Ks = "Dashboard:Block.cache:";
var Ts;
let Yd = (Ts = class extends W {
  constructor(e) {
    super(e), this.map = /* @__PURE__ */ new Map(), this._handleDragStart = (t) => {
      var i;
      const n = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      n !== void 0 && (this.setState({ dragging: n }), console.log("handleBlockDragStart", t));
    }, this._handleDragEnd = (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    }, this._handleMenuClick = (t) => {
      const n = t.target.closest(".dashboard-block");
      if (!n)
        return;
      const i = n.dataset.id;
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
    }, this.state = { blocks: this._initBlocks(e.blocks) };
  }
  getBlock(e) {
    return this.state.blocks.find((t) => t.id === e);
  }
  update(e, t) {
    const { id: n } = e, { blocks: i } = this.state, o = i.findIndex((a) => a.id === n);
    if (o < 0)
      return;
    const r = i[o];
    e.fetch && e.fetch !== r.fetch && r.needLoad && (e.needLoad = !1), i[o] = { ...r, ...e }, this.setState({ blocks: i }, t);
  }
  delete(e) {
    const { blocks: t } = this.state, n = t.findIndex((i) => i.id === e);
    n < 0 || (t.splice(n, 1), this.setState({ blocks: t }));
  }
  add(e) {
    e = Array.isArray(e) ? e : [e], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(e)] });
  }
  load(e, t) {
    const n = this.getBlock(e);
    if (!n || n.loading || (t = t || n.fetch, typeof t == "string" ? t = { url: t } : typeof t == "function" && (t = t(n.id, n)), !t || !t.url))
      return;
    const { url: i, ...o } = t;
    this.update({ id: e, loading: !0, needLoad: !1 }, async () => {
      const r = Y(i, n);
      try {
        const a = await fetch(Y(r, n), {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          ...o
        });
        if (!a.ok)
          throw new Error(`Server response: ${a.status} ${a.statusText}}`);
        const l = await a.text();
        this.update({ id: e, loading: !1, content: { html: l } }, () => {
          this._setCache(e, l);
        });
      } catch (a) {
        const l = /* @__PURE__ */ m("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          a.message
        ] });
        this.update({ id: e, loading: !1, content: l });
      }
    });
  }
  reset(e) {
    this.setState({ blocks: this._initBlocks(e) });
  }
  loadNext() {
    const { blocks: e } = this.state;
    let t = "";
    for (const n of e) {
      if (n.loading)
        return;
      n.needLoad && (t = n.id);
    }
    t.length && requestAnimationFrame(() => this.load(t));
  }
  _setCache(e, t) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? Nn.set(`${Ks}${n}:${e}`, t) : Nn.session.set(`${Ks}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const n = typeof t == "string" ? Nn.get(`${Ks}${t}:${e}`) : Nn.session.get(`${Ks}${e}`);
    if (n)
      return { html: n };
  }
  _initBlocks(e) {
    const { blockFetch: t, blockMenu: n } = this.props;
    return e.map((o) => {
      const {
        id: r,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: u = t,
        menu: c = n,
        content: d,
        ...f
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
        ...f
      };
    });
  }
  _getBlockSize(e) {
    const { blockDefaultSize: t, blockSizeMap: n } = this.props;
    return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
  }
  _layout() {
    this.map.clear();
    let e = 0;
    const { blocks: t } = this.state;
    return t.forEach((n) => {
      this._layoutBlock(n);
      const [, i, , o] = this.map.get(n.id);
      e = Math.max(e, i + o);
    }), { blocks: t, height: e };
  }
  _layoutBlock(e) {
    const t = this.map, { id: n, left: i, top: o, width: r, height: a } = e;
    if (i < 0 || o < 0) {
      const [l, h] = this._appendBlock(r, a, i, o);
      t.set(n, [l, h, r, a]);
    } else
      this._insertBlock(n, [i, o, r, a]);
  }
  _canPlace(e) {
    const { dragging: t } = this.state;
    for (const [n, i] of this.map.entries())
      if (n !== t && rl(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [n, i] of this.map.entries())
      n !== e && rl(i, t) && (i[1] = t[1] + t[3], this._insertBlock(n, i));
  }
  _appendBlock(e, t, n, i) {
    if (n >= 0 && i >= 0) {
      if (this._canPlace([n, i, e, t]))
        return [n, i];
      i = -1;
    }
    let o = n < 0 ? 0 : n, r = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([o, r, e, t])) {
        a = !0;
        break;
      }
      n < 0 ? (o += 1, o + e > l && (o = 0, r += 1)) : r += 1;
    }
    return [o, r];
  }
  componentDidMount() {
    this.loadNext();
  }
  componentDidUpdate(e) {
    e.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  render() {
    const { blocks: e, height: t } = this._layout(), { cellHeight: n, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, a) => {
      const { id: l, menu: h, content: u, title: c } = r, [d, f, g, b] = o.get(l) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ m(
        qd,
        {
          id: l,
          index: a,
          left: `${100 * d / i}%`,
          top: n * f,
          width: `${100 * g / i}%`,
          height: n * b,
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
}, Ts.defaultProps = {
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
}, Ts);
const _o = class _o extends j {
};
_o.NAME = "Dashboard", _o.Component = Yd;
let al = _o;
var Xt, Jt;
class ll extends W {
  constructor(t) {
    super(t);
    v(this, Xt, void 0);
    v(this, Jt, void 0);
    _(this, Xt, 0), _(this, Jt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, o = n.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (p(this, Xt) && cancelAnimationFrame(p(this, Xt)), _(this, Xt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), _(this, Xt, 0);
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
      const o = i.getBoundingClientRect(), { type: r, clientSize: a, scrollSize: l } = this.props, h = (r === "horz" ? n.clientX - o.left : n.clientY - o.top) - this.barSize / 2;
      this.scroll(h * l / a), n.preventDefault();
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
    const { scrollSize: t, clientSize: n } = this.props;
    return Math.max(0, t - n);
  }
  get barSize() {
    const { clientSize: t, scrollSize: n, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / n), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && (_(this, Jt, typeof t == "string" ? document : t.current), p(this, Jt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), p(this, Jt) && p(this, Jt).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: n } = this.props;
    n && n(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: n,
      size: i = 12,
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: u
    } = this.props, { maxScrollPos: c, scrollPos: d } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, b = {};
    return n === "horz" ? (g.height = i, g.width = t, b.width = this.barSize, b.left = Math.round(Math.min(c, d) * (t - b.width) / c)) : (g.width = i, g.height = t, b.height = this.barSize, b.top = Math.round(Math.min(c, d) * (t - b.height) / c)), /* @__PURE__ */ m(
      "div",
      {
        className: R("scrollbar", o, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": f
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
Xt = new WeakMap(), Jt = new WeakMap();
const bi = /* @__PURE__ */ new Map(), wi = [];
function qc(s, e) {
  const { name: t } = s;
  if (!(e != null && e.override) && bi.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  bi.set(t, s), e != null && e.buildIn && !wi.includes(t) && wi.push(t);
}
function jt(s, e) {
  qc(s, e);
  const t = (n) => {
    if (!n)
      return s;
    const { defaultOptions: i, ...o } = s;
    return {
      ...o,
      defaultOptions: { ...i, ...n }
    };
  };
  return t.plugin = s, t;
}
function Yc(s) {
  return bi.delete(s);
}
function Kd(s) {
  if (typeof s == "string") {
    const e = bi.get(s);
    return e || console.warn(`DTable: Cannot found plugin "${s}"`), e;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function Kc(s, e, t) {
  return e.forEach((n) => {
    var o;
    if (!n)
      return;
    const i = Kd(n);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Kc(s, i.plugins, t), s.push(i), t.add(i.name)));
  }), s;
}
function Gd(s = [], e = !0) {
  return e && wi.length && s.unshift(...wi), s != null && s.length ? Kc([], s, /* @__PURE__ */ new Set()) : [];
}
function cl() {
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
function Xd(s, e, t) {
  return s && (e && (s = Math.max(e, s)), t && (s = Math.min(t, s))), s;
}
function hl(s, e) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof e == "number" && (typeof s != "number" || isNaN(s)) && (s = e), s;
}
function nr(s, e = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const n = s.width - s.totalWidth;
    if (!e && n > 0 || e && n !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[n < 0 ? "max" : "min"](n, Math.ceil(n * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let t = 0;
  s.list.forEach((n) => {
    n.realWidth || (n.realWidth = n.width), n.left = t, t += n.realWidth;
  });
}
function Jd(s, e, t, n) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (C) => (typeof C == "function" && (C = C.call(s)), C = hl(C, 0), C < 1 && (C = Math.round(C * n)), C), u = {
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
  }, f = [], g = {};
  let b = !1;
  const x = [], w = {};
  if (t.forEach((C) => {
    const { colTypes: $, onAddCol: k } = C;
    $ && Object.entries($).forEach(([S, N]) => {
      w[S] || (w[S] = []), w[S].push(N);
    }), k && x.push(k);
  }), e.cols.forEach((C) => {
    if (C.hidden)
      return;
    const { type: $ = "", name: k } = C, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...C,
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
      index: f.length
    }, L = w[$];
    L && L.forEach((H) => {
      const B = typeof H == "function" ? H.call(s, S) : H;
      B && Object.assign(S, B, C);
    });
    const { fixed: I, flex: D, minWidth: O = o, maxWidth: P = r } = S, M = hl(S.width || i, i);
    N.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, N.width = Xd(M < 1 ? Math.round(M * n) : M, O, P), x.forEach((H) => H.call(s, N)), f.push(N), g[N.name] = N;
    const E = I ? I === "left" ? c : d : u;
    E.list.push(N), E.totalWidth += N.width, E.width = E.totalWidth, N.flex && E.flexList.push(N), typeof S.order == "number" && (b = !0);
  }), b) {
    const C = ($, k) => ($.setting.order ?? 0) - (k.setting.order ?? 0);
    f.sort(C), c.list.sort(C), u.list.sort(C), d.list.sort(C);
  }
  return nr(c, !0), nr(d, !0), u.widthSetting = n - c.width - d.width, nr(u), {
    list: f,
    map: g,
    left: c,
    center: u,
    right: d
  };
}
function Zd({ col: s, className: e, height: t, row: n, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...d }) {
  var M;
  const f = {
    left: u ?? s.left,
    top: c ?? n.top,
    width: h ?? s.realWidth,
    height: t,
    ...r
  }, { align: g, border: b } = s.setting, x = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", l, e, s.setting.className, {
    "has-border-left": b === !0 || b === "left",
    "has-border-right": b === !0 || b === "right"
  }], C = ["dtable-cell-content", s.setting.cellClass], $ = (M = n.data) == null ? void 0 : M[s.name], k = [a ?? $ ?? ""], S = i ? i(k, { row: n, col: s, value: $ }, U) : k, N = [], L = [], I = {}, D = {};
  let O = "div";
  S == null || S.forEach((E) => {
    if (typeof E == "object" && E && !J(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const H = E.outer ? N : L;
      E.html ? H.push(/* @__PURE__ */ m("div", { className: R("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? f : x, E.style), E.className && (E.outer ? w : C).push(E.className), E.children && H.push(E.children), E.attrs && Object.assign(E.outer ? I : D, E.attrs)), E.tagName && !E.outer && (O = E.tagName);
    } else
      L.push(E);
  });
  const P = O;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R(w),
      style: f,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...d,
      ...I,
      children: [
        L.length > 0 && /* @__PURE__ */ m(P, { className: R(C), style: x, ...D, children: L }),
        N
      ]
    }
  );
}
function sr({
  rows: s = [],
  cols: e,
  rowHeight: t,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: u = Zd,
  onRenderCell: c
}) {
  var b;
  const d = Array.isArray(s) ? s : [s], f = ((b = d[0]) == null ? void 0 : b.top) ?? 0, g = d.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: R("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -n, top: -i + f }, children: d.reduce((x, w, C) => {
        const $ = e.length;
        return e.forEach((k, S) => {
          x.push(
            /* @__PURE__ */ m(
              u,
              {
                className: R(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === $ - 1 ? "is-last-in-row" : "",
                  C ? "" : "is-first-row",
                  C === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: w,
                top: w.top - f,
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
function ul({
  top: s,
  height: e,
  rowHeight: t,
  rows: n,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: u,
  onRenderCell: c
}) {
  let d = null;
  i.list.length && (d = /* @__PURE__ */ m(
    sr,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: t,
      onRenderCell: c
    },
    "left"
  ));
  let f = null;
  o.list.length && (f = /* @__PURE__ */ m(
    sr,
    {
      rows: n,
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
    sr,
    {
      className: "dtable-fixed-right",
      rows: n,
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
      style: { ...u, top: s, height: e },
      children: [
        d,
        f,
        g
      ]
    }
  );
}
var Zt, gn, At, _t, Qt, Q, $t, ht, Se, Ns, yn, ke, St, Ee, Te, $o, Gc, So, Xc, ko, Jc, Eo, Zc, Ms, Er, bn, wn, Rs, Ls, As, Is, vn, Qs, To, Qc, No, th, Mo, eh, Sn;
let Qd = (Sn = class extends W {
  constructor(t) {
    super(t);
    v(this, $o);
    v(this, So);
    v(this, ko);
    v(this, Eo);
    v(this, Ms);
    v(this, vn);
    v(this, To);
    v(this, No);
    v(this, Mo);
    v(this, Zt, void 0);
    v(this, gn, void 0);
    v(this, At, void 0);
    v(this, _t, void 0);
    v(this, Qt, void 0);
    v(this, Q, void 0);
    v(this, $t, void 0);
    v(this, ht, void 0);
    v(this, Se, void 0);
    v(this, Ns, void 0);
    v(this, yn, void 0);
    v(this, ke, void 0);
    v(this, St, void 0);
    v(this, Ee, void 0);
    v(this, Te, void 0);
    v(this, bn, void 0);
    v(this, wn, void 0);
    v(this, Rs, void 0);
    v(this, Ls, void 0);
    v(this, As, void 0);
    v(this, Is, void 0);
    this.ref = K(), _(this, Zt, 0), _(this, At, !1), _(this, Q, []), _(this, ht, /* @__PURE__ */ new Map()), _(this, Se, {}), _(this, yn, []), _(this, ke, { in: !1 }), this.updateLayout = () => {
      p(this, Zt) && cancelAnimationFrame(p(this, Zt)), _(this, Zt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), _(this, Zt, 0);
      }));
    }, _(this, St, (n, i) => {
      i = i || n.type;
      const o = p(this, ht).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), _(this, Ee, (n) => {
      p(this, St).call(this, n, `window_${n.type}`);
    }), _(this, Te, (n) => {
      p(this, St).call(this, n, `document_${n.type}`);
    }), _(this, bn, (n, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), n[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return p(this, Q).forEach((h) => {
        h[l] && (n = h[l].call(this, n, i, o));
      }), this.options[l] && (n = this.options[l].call(this, n, i, o)), a.setting[l] && (n = a.setting[l].call(this, n, i, o)), n;
    }), _(this, wn, (n, i) => {
      i === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), _(this, Rs, (n) => {
      var l, h, u;
      const i = this.getPointerInfo(n);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: r, element: a }), p(this, Q).forEach((c) => {
          var d;
          (d = c.onHeaderCellClick) == null || d.call(this, n, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((d) => d.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const d of p(this, Q))
            if (((u = d.onCellClick) == null ? void 0 : u.call(this, n, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), _(this, Ls, (n) => {
      const i = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), _(this, As, (n) => {
      const i = y(n.target).closest(".dtable-cell");
      if (!i.length)
        return A(this, vn, Qs).call(this, !1);
      A(this, vn, Qs).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), _(this, Is, () => {
      A(this, vn, Qs).call(this, !1);
    }), _(this, gn, t.id ?? `dtable-${gc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, _(this, Qt, Object.freeze(Gd(t.plugins))), p(this, Qt).forEach((n) => {
      var a;
      const { methods: i, data: o, state: r } = n;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(p(this, Se), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = n.onCreate) == null || a.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = p(this, $t)) == null ? void 0 : t.options) || p(this, _t) || cl();
  }
  get plugins() {
    return p(this, Q);
  }
  get layout() {
    return p(this, $t);
  }
  get id() {
    return p(this, gn);
  }
  get data() {
    return p(this, Se);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return p(this, ke);
  }
  componentWillReceiveProps() {
    _(this, _t, void 0);
  }
  componentDidMount() {
    p(this, At) ? this.forceUpdate() : A(this, Ms, Er).call(this), p(this, Q).forEach((n) => {
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", p(this, Rs)), this.on("keydown", p(this, Ls));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", p(this, As)), this.on("mouseleave", p(this, Is))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(n), _(this, Ns, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    p(this, Q).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    p(this, At) ? A(this, Ms, Er).call(this) : p(this, Q).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = p(this, Ns)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of p(this, ht).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), p(this, Ee)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), p(this, Te)) : t.removeEventListener(i, p(this, St));
    p(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), p(this, Qt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), _(this, Se, {}), p(this, ht).clear();
  }
  on(t, n, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = p(this, ht).get(t);
    o ? o.push(n) : (p(this, ht).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), p(this, Ee)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), p(this, Te)) : (r = this.element) == null || r.addEventListener(t, p(this, St)));
  }
  off(t, n, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = p(this, ht).get(t);
    if (!o)
      return;
    const r = o.indexOf(n);
    r >= 0 && o.splice(r, 1), o.length || (p(this, ht).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), p(this, Ee)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), p(this, Te)) : (a = this.element) == null || a.removeEventListener(t, p(this, St)));
  }
  emitCustomEvent(t, n) {
    p(this, St).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: a, rowHeight: l, cols: { center: { totalWidth: h, width: u } } } = this.layout, { to: c } = t;
    let { scrollLeft: d, scrollTop: f } = t;
    if (c === "up" || c === "down")
      f = o + (c === "down" ? 1 : -1) * Math.floor(a / l) * l;
    else if (c === "left" || c === "right")
      d = i + (c === "right" ? 1 : -1) * u;
    else if (c === "top")
      f = 0;
    else if (c === "bottom")
      f = r - a;
    else if (c === "begin")
      d = 0;
    else if (c === "end")
      d = h - u;
    else {
      const { offsetLeft: b, offsetTop: x } = t;
      typeof b == "number" && (d = i + b), typeof x == "number" && (d = o + x);
    }
    const g = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, h - u)), d !== i && (g.scrollLeft = d)), typeof f == "number" && (f = Math.max(0, Math.min(f, r - a)), f !== o && (g.scrollTop = f)), Object.keys(g).length ? (this.setState(g, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, g), n == null || n.call(this, !0);
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
    const { rows: n, rowsMap: i, allRows: o } = this.layout;
    return typeof t == "number" ? n[t] : i[t] || o.find((r) => r.id === t);
  }
  getCellValue(t, n) {
    var l;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof n == "object" ? n : this.getColInfo(n);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (l = i.data) == null ? void 0 : l[o.name];
    const { cellValueGetter: a } = this.options;
    return a && (r = a.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!p(this, _t))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      _(this, $t, void 0);
    else if (i === "options") {
      if (_(this, _t, void 0), !p(this, $t))
        return;
      _(this, $t, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const i = y(n).closest(".dtable-cell");
    if (!i.length)
      return;
    const o = i.attr("data-row"), r = i.attr("data-col");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: i[0],
        colName: r,
        rowID: o,
        target: n
      };
  }
  i18n(t, n, i) {
    return Z(p(this, yn), t, n, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = A(this, Mo, eh).call(this), { className: n, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", n, {
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
      A(this, $o, Gc).call(this, t),
      A(this, So, Xc).call(this, t),
      A(this, ko, Jc).call(this, t),
      A(this, Eo, Zc).call(this, t)
    ), p(this, Q).forEach((f) => {
      var b;
      const g = (b = f.onRender) == null ? void 0 : b.call(this, t);
      g && (g.style && Object.assign(u, g.style), g.className && c.push(g.className), g.children && d.push(g.children));
    })), /* @__PURE__ */ m(
      "div",
      {
        id: p(this, gn),
        className: R(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
}, Zt = new WeakMap(), gn = new WeakMap(), At = new WeakMap(), _t = new WeakMap(), Qt = new WeakMap(), Q = new WeakMap(), $t = new WeakMap(), ht = new WeakMap(), Se = new WeakMap(), Ns = new WeakMap(), yn = new WeakMap(), ke = new WeakMap(), St = new WeakMap(), Ee = new WeakMap(), Te = new WeakMap(), $o = new WeakSet(), Gc = function(t) {
  const { header: n, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!n)
    return null;
  if (n === !0)
    return /* @__PURE__ */ m(
      ul,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: p(this, bn)
      },
      "header"
    );
  const a = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ m(
    cr,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, So = new WeakSet(), Xc = function(t) {
  const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ m(
    ul,
    {
      className: "dtable-body",
      top: n,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: p(this, bn)
    },
    "body"
  );
}, ko = new WeakSet(), Jc = function(t) {
  let { footer: n } = t;
  if (typeof n == "function" && (n = n.call(this, t)), !n)
    return null;
  const i = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ m(
    cr,
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
}, Eo = new WeakSet(), Zc = function(t) {
  const n = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: d } = t, { scrollbarSize: f = 12, horzScrollbarPos: g } = this.options;
  return a > r && n.push(
    /* @__PURE__ */ m(
      ll,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: p(this, wn),
        left: o,
        bottom: (g === "inside" ? 0 : -f) + c,
        size: f,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: d + h } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: d + h } })
  ), u > h && n.push(
    /* @__PURE__ */ m(
      ll,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: p(this, wn),
        right: 0,
        size: f,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), n.length ? n : null;
}, Ms = new WeakSet(), Er = function() {
  var t;
  _(this, At, !1), (t = this.options.afterRender) == null || t.call(this), p(this, Q).forEach((n) => {
    var i;
    return (i = n.afterRender) == null ? void 0 : i.call(this);
  });
}, bn = new WeakMap(), wn = new WeakMap(), Rs = new WeakMap(), Ls = new WeakMap(), As = new WeakMap(), Is = new WeakMap(), vn = new WeakSet(), Qs = function(t) {
  const { element: n, options: i } = this;
  if (!n)
    return;
  const o = y(n), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = p(this, ke);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), _(this, ke, r);
}, To = new WeakSet(), Qc = function() {
  if (p(this, _t))
    return !1;
  const n = { ...cl(), ...p(this, Qt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return _(this, _t, n), _(this, Q, p(this, Qt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = n;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, n) : a)), (!r || r(l)) && (l !== n && Object.assign(n, l), i.push(o)), i;
  }, [])), _(this, yn, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, No = new WeakSet(), th = function() {
  var O, P;
  const { plugins: t } = this;
  let n = p(this, _t);
  const i = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((M) => {
    var H;
    const E = (H = M.beforeLayout) == null ? void 0 : H.call(this, n);
    E && (n = { ...n, ...E }), Object.assign(i, M.footer);
  });
  let o = n.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: M } = this;
    if (M)
      r = M.clientWidth;
    else {
      _(this, At, !0);
      return;
    }
  }
  const a = Jd(this, n, t, r), { data: l, rowKey: h = "id", rowHeight: u } = n, c = [], d = (M, E, H) => {
    var z, X;
    const B = { data: H ?? { [h]: M }, id: M, index: c.length, top: 0 };
    if (H || (B.lazy = !0), c.push(B), ((z = n.onAddRow) == null ? void 0 : z.call(this, B, E)) !== !1) {
      for (const he of t)
        if (((X = he.onAddRow) == null ? void 0 : X.call(this, B, E)) === !1)
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
  let f = c;
  const g = {};
  if (n.onAddRows) {
    const M = n.onAddRows.call(this, f);
    M && (f = M);
  }
  for (const M of t) {
    const E = (O = M.onAddRows) == null ? void 0 : O.call(this, f);
    E && (f = E);
  }
  f.forEach((M, E) => {
    g[M.id] = M, M.index = E, M.top = M.index * u;
  });
  const { header: b, footer: x } = n, w = b ? n.headerHeight || u : 0, C = x ? n.footerHeight || u : 0;
  let $ = n.height, k = 0;
  const S = f.length * u, N = w + C + S;
  if (typeof $ == "function" && ($ = $.call(this, N)), $ === "auto")
    k = N;
  else if (typeof $ == "object")
    k = Math.min($.max, Math.max($.min, N));
  else if ($ === "100%") {
    const { parent: M } = this;
    if (M)
      k = M.clientHeight;
    else {
      k = 0, _(this, At, !0);
      return;
    }
  } else
    k = $;
  const L = k - w - C, I = {
    options: n,
    allRows: c,
    width: r,
    height: k,
    rows: f,
    rowsMap: g,
    rowHeight: u,
    rowsHeight: L,
    rowsHeightTotal: S,
    header: b,
    footer: x,
    footerGenerators: i,
    headerHeight: w,
    footerHeight: C,
    cols: a
  }, D = (P = n.onLayout) == null ? void 0 : P.call(this, I);
  D && Object.assign(I, D), t.forEach((M) => {
    if (M.onLayout) {
      const E = M.onLayout.call(this, I);
      E && Object.assign(I, E);
    }
  }), _(this, $t, I);
}, Mo = new WeakSet(), eh = function() {
  (A(this, To, Qc).call(this) || !p(this, $t)) && A(this, No, th).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: n } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, n.totalWidth - n.width), i);
  let o = 0;
  n.list.forEach((x) => {
    x.left = o, o += x.realWidth, x.visible = x.left + x.realWidth >= i && x.left <= i + n.width;
  });
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), d = u + a, f = Math.min(l.length, Math.ceil(d / h)), g = [], { rowDataGetter: b } = this.options;
  for (let x = c; x < f; x++) {
    const w = l[x];
    w.lazy && b && (w.data = b([w.id])[0], w.lazy = !1), g.push(w);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, Sn.addPlugin = qc, Sn.removePlugin = Yc, Sn);
const tf = {
  html: { component: Ds }
}, ef = {
  name: "custom",
  onRenderCell(s, e) {
    const { col: t } = e;
    let { custom: n } = t.setting;
    if (typeof n == "function" && (n = n.call(this, e)), !n)
      return s;
    const i = Array.isArray(n) ? n : [n], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: Ds,
        props: { html: Y(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(tf[l], o == null ? void 0 : o[l]);
      const u = {};
      h.forEach((d) => {
        if (d) {
          const { props: f } = d;
          f && y.extend(u, typeof f == "function" ? f.call(this, e) : f), l = d.component || l;
        }
      }, { props: {} });
      const c = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(c, { ...u }) };
    }), s;
  }
}, nf = jt(ef);
function nh(s, e, t, n) {
  if (typeof s == "function" && (s = s(e)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return t;
  const { url: i, ...o } = s, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ m("a", { href: Y(i, e.row.data), ...n, ...o, ...a, children: t });
}
function ea(s, e, t) {
  var n;
  if (s != null)
    return t = t ?? ((n = e.row.data) == null ? void 0 : n[e.col.name]), typeof s == "function" ? s(t, e) : Y(s, t);
}
function sh(s, e, t, n) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), s === !1 ? t : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(t, e)), pt(t, s, n ?? t))) : n ?? t;
}
function ih(s, e) {
  const { link: t } = e.col.setting, n = nh(t, e, s[0]);
  return n && (s[0] = n), s;
}
function oh(s, e) {
  const { format: t } = e.col.setting;
  return t && (s[0] = ea(t, e, s[0])), s;
}
function rh(s, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? s[0] = t(s[0], e) : typeof t == "object" && t && (s[0] = t[s[0]] ?? s[0]), s;
}
function ah(s, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = t, invalidDate: i } = e.col.setting;
  return s[0] = sh(n, e, s[0], i), s;
}
function Tr(s, e, t = !1) {
  const { html: n = t } = e.col.setting;
  if (n === !1)
    return s;
  const i = s[0], o = n === !0 ? i : ea(n, e, i);
  return s[0] = {
    html: o
  }, s;
}
const sf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, e) {
        return Tr(s, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: n = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, r = (t - n) / 2, a = t / 2, l = s[0];
        return s[0] = /* @__PURE__ */ m("svg", { width: t, height: t, children: [
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r, "stroke-width": n, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ m("circle", { cx: a, cy: a, r, "stroke-width": n, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ m("text", { x: a, y: a + n, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
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
  onRenderCell(s, e) {
    const { formatDate: t, html: n, hint: i } = e.col.setting;
    if (t && (s = ah(s, e, t)), s = rh(s, e), s = oh(s, e), n ? s = Tr(s, e) : s = ih(s, e), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = Y(i, e.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, of = jt(sf, { buildIn: !0 });
function rf(s, e, t = !1) {
  var a, l;
  typeof s == "boolean" && (e = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!n[h] === u || (u ? n[h] = !0 : delete n[h], i[h] = u);
  };
  if (s === void 0 ? (e === void 0 && (e = !lh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!e);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((h) => {
    r(h, e ?? !n[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    h && Object.keys(h).forEach((u) => {
      h[u] ? n[u] = !0 : delete n[u];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function af(s) {
  return this.state.checkedRows[s] ?? !1;
}
function lh() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === s;
}
function lf() {
  return Object.keys(this.state.checkedRows);
}
function cf(s) {
  const { checkable: e } = this.options;
  s === void 0 && (s = !e), e !== s && this.setState({ forceCheckable: s });
}
function dl(s, e, t = !1) {
  return /* @__PURE__ */ m("div", { class: `checkbox-primary dtable-checkbox${s ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ m("label", {}) });
}
const fl = 'input[type="checkbox"],.dtable-checkbox', hf = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: dl
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: e } = this.state;
    return e !== void 0 ? s.checkable = e : s.checkable === "auto" && (s.checkable = !!s.cols.some((t) => t.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: rf,
    isRowChecked: af,
    isAllRowChecked: lh,
    getChecks: lf,
    toggleCheckable: cf
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: dl(s) })
      ];
    },
    checkedInfo(s, e) {
      const t = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ m("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: e, col: t }) {
    var h;
    const { id: n } = e, { canRowCheckable: i } = this.options, o = i ? i.call(this, n) : !0;
    if (!o)
      return s;
    const { checkbox: r } = t.setting, a = typeof r == "function" ? r.call(this, n) : r, l = this.isRowChecked(n);
    if (a) {
      const u = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, n, o === "disabled");
      s.unshift(u), s.push({ outer: !0, className: "has-checkbox" });
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: e, col: t }) {
    var r;
    const { id: n } = e, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, n) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, n);
      s.unshift(l), s.push({ outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const e = s.target;
    if (!e)
      return;
    const t = e.closest(fl);
    t && (this.toggleCheckRows(t.checked), s.stopPropagation());
  },
  onCellClick(s, { rowID: e }) {
    const t = y(s.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(fl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, uf = jt(hf);
var ch = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(ch || {});
function vi(s) {
  const e = this.data.nestedMap.get(s);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, n = e.children && t && t[s];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = vi.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : n ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? vi.call(this, e.parent).level + 1 : 0, e;
}
function df(s) {
  return s !== void 0 ? vi.call(this, s) : this.data.nestedMap;
}
function ff(s, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (e === void 0 && (e = !hh.call(this)), e) {
      const i = n.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    e === void 0 && (e = !t[i[0]]), i.forEach((o) => {
      const r = n.get(o);
      e && (r != null && r.children) ? t[o] = !0 : delete t[o];
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
function hh() {
  const s = this.data.nestedMap.values();
  for (const e of s)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function uh(s, e = 0, t, n = 0) {
  var i;
  t || (t = [...s.keys()]);
  for (const o of t) {
    const r = s.get(o);
    r && (r.level === n && (r.order = e++), (i = r.children) != null && i.length && (e = uh(s, e, r.children, n + 1)));
  }
  return e;
}
function dh(s, e, t, n) {
  const i = s.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    n[o] = t, dh(s, o, t, n);
  }), i;
}
function fh(s, e, t, n, i) {
  var a;
  const o = s.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(n[l] !== void 0 ? n[l] : i[l]);
    return t === h;
  })) && (n[e] = t), o.parent && fh(s, o.parent, t, n, i);
}
const pf = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, e) {
      const { nestedMap: t } = this.data, n = t.get(s.id), i = t.get(e.id);
      return (n == null ? void 0 : n.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, e, t) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const n = {};
      return Object.entries(e).forEach(([i, o]) => {
        const r = dh(this, i, o, n);
        r != null && r.parent && fh(this, r.parent, o, n, t);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((e) => e.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: df,
    toggleRow: ff,
    isAllCollapsed: hh,
    getNestedRowInfo: vi
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, o;
    const { nestedMap: e } = this.data, t = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), n = e.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = t === "0" ? void 0 : t, (o = s.data) != null && o[this.options.asParentKey ?? "asParent"] && (n.children = []), e.set(s.id, n), t) {
      let r = e.get(t);
      r || (r = {
        state: "",
        level: 0
      }, e.set(t, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), uh(this.data.nestedMap), s.sort((e, t) => {
      const n = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(t.id), o = (n.order ?? 0) - (i.order ?? 0);
      return o === 0 ? e.index - t.index : o;
    }), s;
  },
  onRenderCell(s, { col: e, row: t }) {
    var a;
    const { id: n, data: i } = t, { nestedToggle: o } = e.setting, r = this.getNestedRowInfo(n);
    if (o && (r.children || r.parent) && s.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, n, e, i)) ?? /* @__PURE__ */ m("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.unshift(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: e, col: t }) {
    var i;
    const { id: n } = e;
    return t.setting.nestedToggle && s.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, t, void 0)) ?? /* @__PURE__ */ m("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const e = s.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: e }) {
    const t = s.target;
    if (!(!t || !this.getNestedRowInfo(e).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, mf = jt(pf);
function ir(s, { row: e, col: t }) {
  const { data: n } = e, i = n ? n[t.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (n ? n[h] : i) || s[0], c = {
    size: "xs",
    className: R(o, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[r] : void 0,
    text: u,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ m(yc, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: d } = t.setting, f = typeof d == "function" ? d(t, e) : d;
    s[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
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
const gf = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ir
    },
    avatarBtn: {
      onRenderCell: ir
    },
    avatarName: {
      onRenderCell: ir
    }
  }
}, yf = jt(gf, { buildIn: !0 }), bf = {
  name: "sort-type",
  onRenderHeaderCell(s, e) {
    const { col: t } = e, { sortType: n } = t.setting;
    if (n) {
      const i = n === !0 ? "none" : n;
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
}, wf = jt(bf, { buildIn: !0 }), or = (s) => {
  s.length !== 1 && s.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === s[t - 1].setting.group || (e.setting.border = "left");
  });
}, vf = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = s;
    or(e.left.list), or(e.center.list), or(e.right.list);
  }
}, xf = jt(vf), Cf = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: e } = this.options;
    if (!e)
      return;
    const { cellSpanMap: t, overlayedCellSet: n } = this.data, { rows: i, cols: o, rowHeight: r } = s;
    t.clear(), n.clear();
    const a = (l, h, u) => {
      const { index: c } = h;
      l.forEach((d, f) => {
        const { index: g } = d, b = `C${g}R${c}`;
        if (n.has(b))
          return;
        const x = e.call(this, { row: h, col: d });
        if (!x)
          return;
        const w = Math.min(x.colSpan || 1, l.length - f), C = Math.min(x.rowSpan || 1, i.length - u);
        if (w <= 1 && C <= 1)
          return;
        let $ = 0;
        for (let k = 0; k < w; k++) {
          $ += l[f + k].realWidth;
          for (let S = 0; S < C; S++) {
            const N = `C${g + k}R${c + S}`;
            N !== b && n.add(N);
          }
        }
        t.set(b, {
          colSpan: w,
          rowSpan: C,
          width: $,
          height: r * C
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((u) => {
        a(o[u].list, l, h);
      });
    });
  },
  onRenderCell(s, { row: e, col: t }) {
    const n = `C${t.index}R${e.index}`;
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
}, _f = jt(Cf), $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: ch,
  avatar: yf,
  cellspan: _f,
  checkable: uf,
  custom: nf,
  group: xf,
  nested: mf,
  renderDatetime: sh,
  renderDatetimeCell: ah,
  renderFormat: ea,
  renderFormatCell: oh,
  renderHtmlCell: Tr,
  renderLink: nh,
  renderLinkCell: ih,
  renderMapCell: rh,
  rich: of,
  sortType: wf
}, Symbol.toStringTag, { value: "Module" })), fe = class fe extends j {
};
fe.NAME = "DTable", fe.Component = Qd, fe.definePlugin = jt, fe.removePlugin = Yc, fe.plugins = $f;
let pl = fe;
const Sf = "nav", ti = '[data-toggle="tab"]', kf = "active";
var Ne;
const aa = class aa extends dt {
  constructor() {
    super(...arguments);
    v(this, Ne, 0);
  }
  active(t) {
    const n = this.$element, i = n.find(ti);
    let o = t ? y(t).closest(ti) : i.filter(`.${kf}`);
    if (!o.length && (o = n.find(ti).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = y(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), p(this, Ne) && clearTimeout(p(this, Ne)), _(this, Ne, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), _(this, Ne, 0);
    }, 10)));
  }
};
Ne = new WeakMap(), aa.NAME = "Tabs";
let Nr = aa;
y(document).on("click.tabs.zui", ti, (s) => {
  s.preventDefault();
  const e = y(s.target), t = e.closest(`.${Sf}`);
  t.length && Nr.ensure(t).active(e);
});
y(() => {
  y(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  y as $,
  Ca as ActionMenu,
  _a as ActionMenuNested,
  Pa as Avatar,
  Oa as BtnGroup,
  Ha as ColorPicker,
  dt as Component,
  j as ComponentFromReact,
  lt as ContextMenu,
  Ps as CustomContent,
  cr as CustomRender,
  pl as DTable,
  al as Dashboard,
  ja as DatePicker,
  ne as Dropdown,
  mc as EventBus,
  Gl as HElement,
  Ds as HtmlContent,
  et as Icon,
  $a as Menu,
  Ra as Messager,
  wr as Modal,
  Pe as ModalBase,
  Cr as ModalTrigger,
  Ua as Nav,
  qa as Pager,
  Ya as Pick,
  Ka as Picker,
  Ga as Popovers,
  La as ProgressCircle,
  W as ReactComponent,
  Xa as SearchBox,
  Pn as TIME_DAY,
  Nr as Tabs,
  Fa as TimePicker,
  Ja as Toolbar,
  Ot as Tooltip,
  il as Tree,
  kr as Upload,
  ol as UploadImgs,
  td as addDate,
  y as cash,
  R as classes,
  Gs as componentsMap,
  ou as convertBytes,
  cu as create,
  G as createDate,
  vu as createPortal,
  K as createRef,
  su as deepGet,
  nu as deepGetPath,
  Tf as defineFn,
  ii as delay,
  Nf as dom,
  iu as formatBytes,
  pt as formatDate,
  Of as formatDateSpan,
  Y as formatString,
  Il as getClassList,
  oi as getComponent,
  U as h,
  Mf as hh,
  mu as htm,
  Z as i18n,
  Ws as isSameDay,
  wc as isSameMonth,
  Af as isSameWeek,
  yr as isSameYear,
  If as isToday,
  Pf as isTomorrow,
  J as isValidElement,
  Df as isYesterday,
  Aa as nativeEvents,
  In as render,
  Xl as renderCustomContent,
  yu as renderCustomResult,
  Nn as store,
  Dl as storeData,
  Pl as takeData
};
//# sourceMappingURL=zui.js.map
